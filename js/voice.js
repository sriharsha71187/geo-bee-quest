/* GeoBee Quest — voice answers, on the browser's built-in speech recognition
 * (no AI service). One recognizer at a time: a session left open blocks the
 * next one and can deliver its result to the wrong question, so every start
 * closes the last session, and callers stop() when a question ends.
 *
 * Voice.listen({ onState, onSpeech, onInterim, onFinal, onSilence, onError })
 *   onState(on)      true while the mic is open
 *   onSpeech()       he has started talking (answer clocks wait for the result)
 *   onInterim(text)  words so far, to show as he speaks
 *   onFinal(alts)    the recognizer's guesses, best first
 *   onSilence()      the mic closed having heard nothing
 *   onError(message) a message to show him (mic blocked, offline, ...)
 *
 * Read-aloud lives here too. The browser's default voice is often the flattest
 * one on the device, so Voice.speak() picks the best English voice installed
 * (a parent can choose another in Settings, kept per device because every
 * device has different voices) and reads one sentence at a time: that gives
 * natural pauses, and Chrome cuts off long utterances otherwise.
 *
 * Voice.speak(text, { onWord(wordsSoFar), onEnd })   Voice.hush()
 */
window.Voice = (function () {
  const QUIET_MS = 1200;   // he has stopped talking: ask for the final result
  const RETRY_MS = 300;    // the audio device can still be busy with read-aloud
  const SORRY = {
    "not-allowed": "The microphone is blocked. Allow it in your browser's settings, or type your answer.",
    "service-not-allowed": "The microphone is blocked. Allow it in your browser's settings, or type your answer.",
    "network": "Voice answers need the internet. Please type your answer.",
    "audio-capture": "I can't find a microphone. Please type your answer.",
  };
  let rec = null, quiet = null, retry = null;

  const SR = () => window.SpeechRecognition || window.webkitSpeechRecognition;
  function clearWaits() { clearTimeout(quiet); clearTimeout(retry); quiet = retry = null; }
  function stop() {
    clearWaits();
    if (!rec) return;
    const r = rec; rec = null;
    r.onresult = r.onerror = r.onend = r.onspeechstart = null;
    try { r.abort(); } catch (e) {}
  }
  function listen(cb, retried) {
    stop();
    if (!SR()) return false;
    const r = new (SR())();
    let lastHeard = "", done = false, failed = null;
    const finish = (fn) => { if (done) return; done = true; clearWaits(); rec = null; cb.onState && cb.onState(false); fn(); };
    r.lang = "en-US"; r.continuous = false; r.interimResults = true; r.maxAlternatives = 5;
    r.onspeechstart = () => cb.onSpeech && cb.onSpeech();
    r.onresult = (e) => {
      if (done) return;
      const res = e.results[e.results.length - 1];
      const alts = Array.from(res).map((a) => a.transcript).filter((t) => t && t.trim());
      if (!alts.length) return;
      if (res.isFinal) { const x = r; finish(() => cb.onFinal && cb.onFinal(alts)); try { x.abort(); } catch (err) {} return; }
      lastHeard = alts[0];
      cb.onSpeech && cb.onSpeech();
      cb.onInterim && cb.onInterim(lastHeard);
      // some browsers hold the result until the mic is told to stop
      clearTimeout(quiet);
      quiet = setTimeout(() => { try { r.stop(); } catch (err) {} }, QUIET_MS);
    };
    r.onerror = (e) => { failed = e.error; };
    r.onend = () => {
      // the mic closed: use what it had, even if it never said "final"
      if (lastHeard) return finish(() => cb.onFinal && cb.onFinal([lastHeard]));
      if (SORRY[failed]) return finish(() => cb.onError && cb.onError(SORRY[failed]));
      if (!retried && failed && failed !== "no-speech" && failed !== "aborted") {
        finish(() => {});
        retry = setTimeout(() => listen(cb, true), RETRY_MS);
        return;
      }
      finish(() => cb.onSilence && cb.onSilence());
    };
    rec = r;
    try {
      r.start();
      cb.onState && cb.onState(true);
    } catch (e) {
      rec = null;
      if (!retried) retry = setTimeout(() => listen(cb, true), RETRY_MS);
      else cb.onError && cb.onError("The microphone isn't ready. Please type your answer.");
    }
    return true;
  }

  // ---------- read-aloud ----------
  const PREF_KEY = "gbq-voice";
  const RATE = 0.95;
  // novelty and old robotic voices: never picked, never offered
  const JOKE = /^(albert|bad news|bahh|bells|boing|bubbles|cellos|deranged|fred|good news|hysterical|jester|junior|kathy|organ|pipe organ|ralph|superstar|trinoids|whisper|wobble|zarvox|grandma|grandpa|rocko|shelley|sandy|eddy|flo|reed)\b/i;
  function voiceScore(v) {
    const name = v.name || "", lang = (v.lang || "").replace("_", "-").toLowerCase();
    if (!lang.startsWith("en") || JOKE.test(name)) return -1;
    let n = lang === "en-us" ? 20 : lang === "en-in" ? 15 : lang === "en-gb" ? 12 : 5;
    if (/natural|neural/i.test(name)) n += 100;             // Edge's neural voices
    else if (/premium/i.test(name)) n += 90;                // Apple downloads
    else if (/enhanced/i.test(name)) n += 80;
    else if (/^google/i.test(name)) n += 70;                // Chrome's cloud voices
    else if (/siri/i.test(name)) n += 65;
    else if (/^(ava|allison|susan|zoe|evan|tom|nicky|noelle|samantha|aaron|nathan)\b/i.test(name)) n += 55;
    else if (/network/i.test(name)) n += 40;                // Android's cloud voices
    else if (/^microsoft/i.test(name)) n += 20;
    return n;
  }
  function rankVoices(list) {
    return (list || []).map((v) => ({ v, n: voiceScore(v) })).filter((x) => x.n >= 0)
      .sort((a, b) => b.n - a.n).map((x) => x.v);
  }
  function allVoices() { try { return window.speechSynthesis ? speechSynthesis.getVoices() : []; } catch (e) { return []; } }
  function getPref() { try { return localStorage.getItem(PREF_KEY) || ""; } catch (e) { return ""; } }
  function setPref(name) { try { if (name) localStorage.setItem(PREF_KEY, name); else localStorage.removeItem(PREF_KEY); } catch (e) {} }
  function bestVoice() {
    const ranked = rankVoices(allVoices()), pref = getPref();
    return ranked.find((v) => v.name === pref) || ranked[0] || null;
  }
  // what a voice should read: no emoji (some read "flag: Japan" aloud), and
  // the abbreviations it stumbles on
  function spokenText(text) {
    return String(text || "")
      .replace(/\p{Regional_Indicator}|\p{Extended_Pictographic}|\uFE0F|\u200D/gu, "")
      .replace(/\bSt\.(?= [A-Z])/g, "Saint").replace(/\bMt\.(?= [A-Z])/g, "Mount").replace(/\bFt\.(?= [A-Z])/g, "Fort")
      .replace(/\s+/g, " ").replace(/ ([.,!?])/g, "$1").trim();
  }
  // sentences, without breaking after an abbreviation like U.S. or D.C.
  function sentences(text) {
    const parts = text.match(/.+?(?:[.!?]+["'’”)]*(?=\s+["'“(]?[A-Z]|\s*$)|$)/g) || [];
    const out = [];
    for (const p of parts.map((x) => x.trim()).filter(Boolean)) {
      if (out.length && /\b(?:[A-Z]\.)+$/.test(out[out.length - 1])) out[out.length - 1] += " " + p;
      else out.push(p);
    }
    return out;
  }
  function hush() { try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) {} }
  let sayId = 0;
  function speak(text, cb) {
    cb = cb || {};
    hush();
    const id = ++sayId, chunks = sentences(spokenText(text));
    if (!window.speechSynthesis || !chunks.length) { if (cb.onEnd) cb.onEnd(); return; }
    const voice = bestVoice();
    let wordsBefore = 0;
    chunks.forEach((chunk, i) => {
      const u = new SpeechSynthesisUtterance(chunk), base = wordsBefore;
      if (voice) { u.voice = voice; u.lang = voice.lang; } else u.lang = "en-US";
      u.rate = RATE;
      u.onboundary = (e) => {
        if (id !== sayId || e.name !== "word" || !cb.onWord) return;
        cb.onWord(base + chunk.slice(0, e.charIndex + 1).split(/\s+/).length);
      };
      if (i === chunks.length - 1) u.onend = u.onerror = () => { if (id === sayId && cb.onEnd) cb.onEnd(); };
      speechSynthesis.speak(u);
      wordsBefore += chunk.split(/\s+/).length;
    });
  }
  // voices load late in some browsers: asking now starts the load
  allVoices();

  return { listen, stop, supported: () => !!SR(), speak, hush, rankVoices, voices: () => rankVoices(allVoices()),
    bestVoice, getPref, setPref, _spokenText: spokenText, _sentences: sentences };
})();
