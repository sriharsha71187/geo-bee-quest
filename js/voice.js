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

  return { listen, stop, supported: () => !!SR() };
})();
