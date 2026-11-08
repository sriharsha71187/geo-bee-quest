/* GeoBee Quest — Regional Buzzer Round (IAC National Geography Bee format).
 *
 * The real Dec regional is spoken tossups on a buzzer: each question is a short
 * paragraph read aloud with the hardest clue first and an easy giveaway last
 * ("For the point, name ..."). A player scores +1 per correct answer and is done
 * with a round once he reaches 5 points, so buzzing EARLY on clues he knows is
 * the whole game. Sources: iacompetitions.com/emsgeographybee/ and the
 * 2021-22 ES Round 1 packet.
 *
 * This module drives one practice round: up to 30 tossups or 5 correct.
 * The question text is revealed (and read aloud if Speech is on) one word at a
 * time like a moderator reading; BUZZ (button or Space) freezes the reading and
 * opens a short answer window (typed or spoken). A wrong buzz ends that tossup,
 * as it locks a player out in the real bee.
 *
 * Final Round mode is the playoff format: points depend on how early he
 * buzzes, on IAC's published 2026 playoff scale (6 before the first power
 * mark, 5 before the second, 4 on the rest of the question, 3 after it ends;
 * -2 for a wrong buzz mid-question, -1 after). IAC posts no separate
 * elementary finals sheet, so this mirrors the playoff rules that the (+)/(*)
 * marks in its EMS finals packets point to. Here the first clue is the (+)
 * zone and everything before the giveaway sentence is the (*) zone.
 * Race to 50 points, at most 20 tossups.
 *
 * It owns its own timers. App calls Buzzer.stop() from abortActivity().
 */
window.Buzzer = (function () {
  const Q = window.QBank;
  const ROUND_MAX = 30, TARGET = 5;
  const WPM = 150;                      // moderator reading pace
  const AFTER_READ_MS = 5000;           // time to buzz after the last word
  const SPEECH_GRACE_MS = 3000;         // recognizer catch-up once he has spoken
  const FINAL_GOAL = 50, FINAL_MAX = 20;
  const isFinal = () => !!R && R.mode === "final";
  let ctx = null, R = null, timers = [];

  const $ = (sel) => ctx.el.querySelector(sel);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  function later(fn, ms) { const id = setTimeout(fn, ms); timers.push(id); return id; }
  function every(fn, ms) { const id = setInterval(fn, ms); timers.push(id); return id; }
  function clearTimers() { timers.forEach((id) => { clearTimeout(id); clearInterval(id); }); timers = []; }
  // Speaker and mic, visible on every screen of the round so he can see the
  // question will be read out and that he answers out loud.
  const canHear = () => !!(window.Voice && window.Voice.supported());
  const canSpeak = () => !!window.speechSynthesis;
  function soundBtn() {
    if (!canSpeak()) return "";
    const on = ctx.speechOn();
    return `<button class="icon-btn small" id="bz-sound" style="flex:0 0 auto" aria-pressed="${on}" title="${on ? "Reading aloud: tap to mute" : "Muted: tap to read aloud"}" aria-label="${on ? "Mute the reader" : "Read questions aloud"}">${on ? "🔊 Sound on" : "🔇 Sound off"}</button>`;
  }
  function voiceLine() {
    const read = !canSpeak() ? "🔇 This browser can't read aloud." : ctx.speechOn() ? "🔊 I read each question out loud." : "🔇 Read-aloud is off: tap Sound off to turn it on.";
    const hear = canHear() ? "🎙 After you buzz, just say your answer." : "⌨️ This browser can't hear answers, so type them (Safari or Chrome can).";
    return `<p class="muted voice-line" id="bz-voiceline">${read}<br>${hear}</p>`;
  }
  function refreshVoiceUi() {
    const b = $("#bz-sound"); if (b) b.outerHTML = soundBtn();
    const l = $("#bz-voiceline"); if (l) l.outerHTML = voiceLine();
    wireSound();
  }
  function wireSound() {
    const b = $("#bz-sound"); if (!b) return;
    b.onclick = () => {
      const on = !ctx.speechOn();
      ctx.setSpeech(on);
      const c = R && R.cur;
      if (c && c.phase === "reading") {
        if (on) voiceFrom(c, c.shown);
        else { c.voice = false; hush(); if (c.textDone) lastChance(c); }
      } else if (!on) hush();
      refreshVoiceUi();
    };
  }
  function hush() { window.Voice.hush(); }
  function stop() { clearTimers(); hush(); window.Voice.stop(); document.removeEventListener("keydown", onKey); R = null; }

  // ---------- answer checking ----------
  function norm(s) {
    return Q.normalize(String(s || "").replace(/['’ʻ`]/g, "").replace(/\bst\.? /gi, "saint "))
      .replace(/^(a|an) /, "");
  }
  // 'yes' | 'close' | 'prompt' | 'no' — the app's shared forgiving matcher
  // (QBank.match): typos, generic words and unambiguous short names are fine,
  // because a 7-year-old's spelling shouldn't cost a point he earned.
  function judge(t, given) {
    const g = norm(given);
    if (!g) return "no";
    return Q.match(g, [t.a, ...(t.alt || [])].map(norm), (t.prompt || []).map(norm)).v;
  }

  // ---------- picking tossups ----------
  // Unseen first, then ones he missed, then ones he got late; never repeat
  // within a round. Mild ramp: easier tossups early in the round.
  // The daily coach (js/coach.js) can set buzz.targetTier (1..5, the level
  // the middle of a round aims at) and buzz.regions ({asia: 1.5, ...} weights
  // above 1 favour a region he's weak in).
  // Category shares in real IAC bees (from IAC's posted past sets): a round
  // is steered toward these so it isn't, say, five landmarks in a row.
  const CAT_MIX = {
    city: 0.22, country: 0.20, region: 0.05, province: 0.05, state: 0.05, river: 0.08,
    island: 0.06, water: 0.06, mountain: 0.05, lake: 0.04, desert: 0.02, current: 0.01,
    landmark: 0.03, concept: 0.05,
  };
  function pick(s) {
    const seen = (s.buzz && s.buzz.seen) || {};
    const pool = window.GEO_TOSSUPS.filter((t) => !R.used.has(t.id));
    if (!pool.length) return null;
    const cb = (window.GBQ_COACH && window.GBQ_COACH.buzz) || {};
    // the Final Round reads a level above his usual buzzer target, favouring
    // the longer four-clue tossups that have a real (+) and (*) zone
    const target = isFinal() ? Math.min(5, Math.max(3, (cb.targetTier || 3) + 1)) : cb.targetTier || 3;
    const regionW = cb.regions || {};
    const score = (t) => {
      const r = seen[t.id];
      let p = !r ? 0 : r.w > r.c ? 1 : r.bp != null && r.bp < 0.9 ? 3 : 2;
      // regional rounds start a notch easier; a final stays at finals level
      p += Math.abs(t.t - (R.i < 10 && !isFinal() ? Math.max(1, target - 1) : target)) * 0.4;
      p -= ((regionW[t.region] || 1) - 1) * 0.8;
      // over this category's IAC share for the round so far -> push it back
      const share = ((R.cats[t.cat] || 0) + 1) / (R.i + 1);
      p += Math.max(0, share - (CAT_MIX[t.cat] || 0.03)) * 4;
      if (isFinal() && t.clues.length < 4) p += 0.5;
      return p + Math.random() * 0.8;
    };
    pool.sort((a, b) => score(a) - score(b));
    return pool[0];
  }

  // ---------- round ----------
  function start(c, mode) {
    stop();
    ctx = c;
    R = { mode: mode === "final" ? "final" : "regional", i: 0, correct: 0, wrong: 0, points: 0, powers: 0,
      used: new Set(), cats: {}, log: [], startedAt: Date.now() };
    document.addEventListener("keydown", onKey);
    intro();
  }
  function intro() {
    if (isFinal()) {
      ctx.el.innerHTML = `
      <div class="card buzz-card">
        <div class="mascot">🏆</div>
        <h1>Final Round</h1>
        <p>Finals are scored differently: the <b>earlier</b> you buzz, the more points you get.</p>
        <ul class="buzz-rules">
          <li>Buzz during the <b>first clue</b>: <b>6 points</b> — a power buzz!</li>
          <li>Buzz before the <b>"For the point"</b> giveaway: <b>5 points</b>.</li>
          <li>Buzz during the giveaway: <b>4 points</b>. After the reading ends: <b>3 points</b>.</li>
          <li>A wrong buzz costs <b>2 points</b> while the question is still being read (<b>1 point</b> after). So be sure!</li>
          <li>First to <b>${FINAL_GOAL} points</b> wins. These questions are harder — finals level.</li>
        </ul>
        ${voiceLine()}
        <div class="row" style="gap:10px;justify-content:center">
          ${soundBtn()}
          <button class="big green" id="bz-go">Start the final ▶</button>
          <button class="ghost" id="bz-exit">Back</button>
        </div>
      </div>`;
      $("#bz-go").onclick = next;
      $("#bz-exit").onclick = exit;
      wireSound();
      return;
    }
    ctx.el.innerHTML = `
      <div class="card buzz-card">
        <div class="mascot">🛎️</div>
        <h1>Regional Buzzer Round</h1>
        <p>This is how the real bee on <b>December 5</b> works.</p>
        <ul class="buzz-rules">
          <li>I read a clue paragraph. The <b>hardest</b> clues come first.</li>
          <li>Tap <b>BUZZ</b> (or press Space) as soon as you know it.</li>
          <li>Then you have <b>${ctx.answerSecs} seconds</b> to say or type the answer.</li>
          <li>Get <b>5 right</b> and your round is done. Fewer questions = faster = better!</li>
        </ul>
        ${voiceLine()}
        <div class="row" style="gap:10px;justify-content:center">
          ${soundBtn()}
          <button class="big green" id="bz-go">Start round ▶</button>
          <button class="ghost" id="bz-exit">Back</button>
        </div>
      </div>`;
    $("#bz-go").onclick = next;
    $("#bz-exit").onclick = exit;
    wireSound();
  }
  function next() {
    clearTimers(); hush();
    if (isFinal() ? R.points >= FINAL_GOAL || R.i >= FINAL_MAX : R.correct >= TARGET || R.i >= ROUND_MAX) return finish();
    const t = pick(ctx.getState());
    if (!t) return finish();
    R.used.add(t.id);
    R.cats[t.cat] = (R.cats[t.cat] || 0) + 1;
    R.i++;
    R.cur = { t, words: t.clues.join(" ").split(/\s+/), z: zones(t), shown: 0, phase: "reading", buzzAt: null, prompted: false };
    renderTossup();
    read();
  }
  function renderTossup() {
    ctx.el.innerHTML = `
      <div class="card buzz-card">
        <div class="quiz-top"><span>Question ${R.i}${isFinal() ? ` of ${FINAL_MAX}` : ""}</span><span id="bz-score">${isFinal() ? `🏆 ${R.points} / ${FINAL_GOAL}` : `✅ ${R.correct} / ${TARGET}`}</span>
          <span class="row" style="gap:6px">${soundBtn()}<button class="ghost small" id="bz-quit">Quit</button></span></div>
        <p class="buzz-text" id="bz-text" aria-live="off"></p>
        <div id="bz-act">
          <button class="buzz-btn" id="bz-buzz" aria-label="Buzz">BUZZ</button>
          <p class="muted" id="bz-hint">Buzz as soon as you know it!</p>
          ${voiceLine()}
        </div>
        <div id="bz-feedback" class="feedback" aria-live="polite"></div>
      </div>`;
    $("#bz-buzz").onclick = buzz;
    wireSound();
    $("#bz-quit").onclick = () => { if (confirm("Quit this round?")) finish(); };
  }
  // Word counts where the (+) and (*) zones end: the first clue, and
  // everything before the giveaway sentence.
  function zones(t) {
    const ends = []; let n = 0;
    for (const cl of t.clues) { n += cl.split(/\s+/).length; ends.push(n); }
    return { plus: ends[0], star: ends[ends.length - 2] };
  }
  // Final Round points for one tossup (see the header for the scale).
  function finalPoints(c, outcome) {
    if (outcome === "nobuzz") return 0;
    const after = c.buzzAt >= c.words.length;
    if (outcome === "wrong") return after ? -1 : -2;
    if (after) return 3;
    return c.buzzAt <= c.z.plus ? 6 : c.buzzAt <= c.z.star ? 5 : 4;
  }
  // Escaped words [from, to); once a Final Round tossup is over, the (+) and
  // (*) marks are shown where they fall, as in a real finals packet.
  function wordsHtml(from, to) {
    const c = R.cur, out = [];
    for (let i = from; i < to; i++) {
      out.push(esc(c.words[i]));
      if (isFinal() && c.phase === "done") {
        if (i === c.z.plus - 1) out.push('<span class="pw-mark" title="6-point zone ends">(+)</span>');
        else if (i === c.z.star - 1) out.push('<span class="pw-mark" title="5-point zone ends">(*)</span>');
      }
    }
    return out.join(" ");
  }
  function paintText(all) {
    const c = R.cur, n = c.words.length;
    if (all && c.buzzAt != null && c.buzzAt < n) {
      // full text with a marker where he buzzed, the unread part dimmed
      $("#bz-text").innerHTML = wordsHtml(0, c.buzzAt) + ' <span class="buzz-mark" title="you buzzed here">🛎</span> ' +
        `<span class="buzz-rest">${wordsHtml(c.buzzAt, n)}</span>`;
    } else if (all) {
      $("#bz-text").innerHTML = wordsHtml(0, n);
    } else {
      $("#bz-text").textContent = c.words.slice(0, c.shown).join(" ");
    }
  }
  function read() {
    const c = R.cur, msPerWord = 60000 / WPM;
    if (ctx.speechOn() && canSpeak()) voiceFrom(c, 0);
    // The visible reveal runs on its own clock so it works without speech,
    // and never runs ahead of a slow voice by more than it would on its own.
    const tick = every(() => {
      if (c.phase !== "reading") return clearInterval(tick);
      c.shown = Math.min(c.words.length, c.shown + 1); paintText(false);
      if (c.shown >= c.words.length) {
        clearInterval(tick);
        c.textDone = true;
        if (!c.voice) lastChance(c);   // else the voice's onend starts it
      }
    }, msPerWord);
  }
  // Read the question aloud from word `from` (0, or wherever the text has
  // got to when he turns the sound on mid-question).
  function voiceFrom(c, from) {
    if (from >= c.words.length) return;
    try {
      c.voice = true;
      const mine = (c.voiceId = (c.voiceId || 0) + 1);
      window.Voice.speak(c.words.slice(from).join(" "), {
        onEnd: () => { if (c.voiceId !== mine) return; c.voice = false; if (c.textDone) lastChance(c); },
        onWord: (n) => {
          if (c.phase !== "reading" || c.voiceId !== mine) return;
          c.shown = Math.min(c.words.length, Math.max(c.shown, from + n)); paintText(false);
        },
      });
    } catch (e) { c.voice = false; }
  }
  // After the last word, a few seconds to buzz, as in the real bee.
  function lastChance(c) {
    if (!R || R.cur !== c || c.phase !== "reading" || c.lastChance) return;
    c.lastChance = true;
    const h = $("#bz-hint"); if (h) h.textContent = "Last chance — buzz now!";
    later(() => { if (R && R.cur === c && c.phase === "reading") reveal("nobuzz"); }, AFTER_READ_MS);
  }
  function buzz() {
    const c = R && R.cur;
    if (!c || c.phase !== "reading") return;
    c.phase = "answering"; c.buzzAt = Math.max(1, c.shown);
    clearTimers(); hush();
    paintText(false);
    let left = ctx.answerSecs;
    $("#bz-act").innerHTML = `
      <div class="typed-row">
        <input id="bz-in" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Your answer…" />
        ${canHear() ? `<button class="icon-btn" id="bz-mic" title="Say it" aria-label="Say your answer">🎙</button>` : ""}
        <button class="green" id="bz-ok">Answer</button>
      </div>
      <p class="muted" id="bz-voice" aria-live="polite">${canHear() ? "" : "⌨️ Type your answer: this browser can't hear it."}</p>
      <p class="muted"><span id="bz-left">${left}</span> seconds…</p>`;
    const input = $("#bz-in"); input.focus();
    $("#bz-ok").onclick = () => submit(input.value);
    input.onkeydown = (e) => { if (e.key === "Enter") { e.preventDefault(); submit(input.value); } };
    // a spoken answer is the real format, so the mic opens straight away
    // wherever the browser can hear him (Read-aloud on or off)
    if (canHear()) { $("#bz-mic").onclick = () => listen(input); listen(input); }
    every(() => {
      left--; const el = $("#bz-left"); if (el) el.textContent = Math.max(0, left);
      if (left > 0 || !R || R.cur !== c || c.phase !== "answering") return;
      // he got his answer out in time: wait for the recognizer to catch up
      if (c.speaking && !c.grace) {
        c.grace = true;
        later(() => { if (R && R.cur === c && c.phase === "answering") { c.timedOut = true; submit(input.value); } }, SPEECH_GRACE_MS);
      } else if (!c.grace) { c.timedOut = true; submit(input.value); }
    }, 1000);
  }
  // keepMsg: leave the status line alone (it says what was just heard)
  function listen(input, keepMsg) {
    const c = R && R.cur;
    if (!c || c.phase !== "answering") return;
    const live = () => R && R.cur === c && c.phase === "answering";
    const say = (msg) => { const el = $("#bz-voice"); if (el) el.textContent = msg; };
    const mic = (on) => { const b = $("#bz-mic"); if (b) { b.classList.toggle("listening", on); b.textContent = on ? "👂" : "🎙"; } };
    hush();
    const started = window.Voice.listen({
      onState: (on) => { if (!live()) return; mic(on); if (on && !keepMsg) say("👂 Listening… say your answer."); },
      onSpeech: () => { if (live()) c.speaking = true; },
      onInterim: (t) => { if (live()) input.value = t; },
      onFinal: (alts) => {
        if (!live()) return;
        c.speaking = false;
        const m = Q.matchSpoken(alts, [c.t.a, ...(c.t.alt || [])].map(norm), (c.t.prompt || []).map(norm));
        input.value = m.text;
        if (m.v !== "unclear") return submit(m.text, m.v);
        // a mis-hearing shouldn't cost him the question: show it, ask once more
        if (c.reheard) return say(`I heard “${m.text}”. Fix it and tap Answer.`);
        c.reheard = true;
        say(`I heard “${m.text}”. Say it again, or fix it and tap Answer.`);
        listen(input, true);
      },
      onSilence: () => {
        if (!live()) return;
        if (c.relistens >= 2) return say("I didn't hear anything. Tap 🎙 to try again, or type it.");
        c.relistens = (c.relistens || 0) + 1;
        listen(input);
      },
      onError: (msg) => { if (live()) { mic(false); say(msg); } },
    });
    if (!started) say("Voice answers don't work in this browser. Please type your answer.");
  }
  // verdict: already judged (a spoken answer); otherwise the typed text is judged
  function submit(value, verdict) {
    const c = R && R.cur;
    if (!c || c.phase !== "answering") return;
    const v = verdict || judge(c.t, value);
    if (v === "prompt" && !c.prompted) {
      c.prompted = true;
      $("#bz-feedback").innerHTML = `<b>Can you be more specific?</b>`;
      const input = $("#bz-in"); input.value = ""; input.focus();
      if (canHear() && !c.timedOut) listen(input);
      return;
    }
    c.close = v === "close";
    reveal(v === "yes" || v === "close" ? "right" : "wrong", value);
  }
  function reveal(outcome, given) {
    const c = R.cur; if (!c) return;
    c.phase = "done"; clearTimers(); hush(); window.Voice.stop();
    const frac = c.buzzAt != null ? c.buzzAt / c.words.length : null;
    if (outcome === "right") R.correct++; else if (outcome === "wrong") R.wrong++;
    const pts = isFinal() ? finalPoints(c, outcome) : null;
    if (pts != null) { R.points += pts; if (pts === 6) R.powers++; }
    const sc = $("#bz-score");
    if (sc) sc.textContent = isFinal() ? `🏆 ${R.points} / ${FINAL_GOAL}` : `✅ ${R.correct} / ${TARGET}`;
    R.log.push({ id: c.t.id, outcome, bp: frac });
    ctx.record(c.t.id, outcome, frac);
    paintText(true);
    const early = frac != null && frac < 0.67;
    const msg = outcome === "right"
      ? (early ? "🎉 Early buzz — that beats the giveaway!" : "✅ Correct!") + (c.close ? " We'll count it — the full name is below." : "")
      : outcome === "wrong" && c.timedOut && !given ? "⏰ Time's up! In the real bee you get just a few seconds after you buzz. Here's the answer:"
      : outcome === "wrong" ? `Not quite${given ? ` (you said “${esc(given)}”)` : ""}. Here's the answer:`
      : "Nobody buzzed. Here's the answer:";
    $("#bz-act").innerHTML = "";
    const ptsLine = pts == null ? ""
      : pts === 6 ? "<p><b>+6 points</b> — power buzz in the first clue! 🔥</p>"
      : pts > 0 ? `<p><b>+${pts} points</b>${pts === 5 ? " — before the giveaway, nice!" : pts === 4 ? " — buzz before the giveaway next time for 5." : " — after the reading ends is only 3. Trust yourself and buzz sooner!"}</p>`
      : pts < 0 ? `<p><b>${pts} points</b>${pts === -2 ? " — a wrong buzz mid-question costs 2. Only buzz when you're sure." : "."}</p>`
      : "";
    $("#bz-feedback").innerHTML = `
      <p>${msg}</p>${ptsLine}
      <p class="summary-line">${esc(c.t.a)}</p>
      ${c.t.x ? `<p class="muted">💡 ${esc(c.t.x)}</p>` : ""}
      ${canSpeak() ? `<button class="ghost" id="bz-again-say">🔁 Hear the question again</button>` : ""}
      <button class="big green" id="bz-next">${(isFinal() ? R.points >= FINAL_GOAL : R.correct >= TARGET) ? "Finish round 🏁" : "Next ▶"}</button>`;
    $("#bz-next").onclick = next;
    const againSay = $("#bz-again-say");
    if (againSay) againSay.onclick = () => window.Voice.speak(c.t.clues.join(" ") + " Answer: " + c.t.a + ".");
    $("#bz-next").focus();
    if (outcome === "right") ctx.sound(true); else ctx.sound(false);
  }
  function finish() {
    clearTimers(); hush();
    if (!R) return;
    const answered = R.log.length;
    const bps = R.log.filter((l) => l.outcome === "right" && l.bp != null).map((l) => l.bp);
    const avgBuzz = bps.length ? Math.round((100 * bps.reduce((a, b) => a + b, 0)) / bps.length) : null;
    const fin = isFinal(), mode = R.mode;
    const summary = fin
      ? { kind: "final", at: Date.now(), n: answered, correct: R.correct, wrong: R.wrong, points: R.points,
          powers: R.powers, reachedGoal: R.points >= FINAL_GOAL, avgBuzzPct: avgBuzz, ms: Date.now() - R.startedAt }
      : { kind: "buzzer", at: Date.now(), n: answered, correct: R.correct, wrong: R.wrong,
          reached5: R.correct >= TARGET, avgBuzzPct: avgBuzz, ms: Date.now() - R.startedAt };
    if (answered) ctx.finish(summary);
    const head = fin
      ? `<div class="mascot">🏆</div>
        <h1>${R.points >= FINAL_GOAL ? `You reached ${FINAL_GOAL}!` : "Final over"}</h1>
        <p class="summary-line">${R.points} points · ${R.correct} right out of ${answered}</p>
        <p>Power buzzes (6 points): <b>${R.powers}</b>. ${R.powers ? "Those win finals!" : "Try buzzing in the first clue when you're sure — that's 6 points."}</p>
        ${R.wrong ? `<p class="muted">Wrong buzzes: ${R.wrong}. Each one cost points, so buzz early only when you're sure.</p>` : ""}`
      : `<div class="mascot">🛎️</div>
        <h1>${R.correct >= TARGET ? "You reached 5!" : "Round over"}</h1>
        <p class="summary-line">${R.correct} right out of ${answered} question${answered === 1 ? "" : "s"}</p>
        ${R.correct >= TARGET ? `<p>You needed <b>${answered}</b> questions to get 5. In the real bee, faster means more bonus points.</p>` : ""}`;
    const missed = R.log.filter((l) => l.outcome !== "right").map((l) => window.GEO_TOSSUPS.find((t) => t.id === l.id));
    ctx.el.innerHTML = `
      <div class="card buzz-card">
        ${head}
        ${avgBuzz != null ? `<p class="muted">On your right answers you buzzed, on average, ${avgBuzz}% of the way through the question. Lower is better: buzzing before the giveaway wins close rounds.</p>` : ""}
        ${R.wrong && !fin ? `<p class="muted">Wrong buzzes: ${R.wrong}. In the real bee a wrong buzz locks you out of that question, so buzz when you're sure.</p>` : ""}
        ${missed.length ? `<div class="debrief"><h3>Learn these</h3>${missed.map((t) => `
          <div class="debrief-row"><div class="debrief-a">${esc(t.a)}</div><div class="debrief-q">${esc(t.clues.join(" "))}</div></div>`).join("")}</div>` : ""}
        <div class="row" style="gap:10px;justify-content:center;margin-top:12px">
          <button class="big green" id="bz-again">Another round ▶</button>
          <button class="ghost" id="bz-exit">Home</button>
        </div>
      </div>`;
    R = null;
    $("#bz-again").onclick = () => start(ctx, mode);
    $("#bz-exit").onclick = exit;
  }
  function exit() { stop(); ctx.exit(); }
  function onKey(e) {
    if (!R || !R.cur) return;
    if (e.code === "Space" && R.cur.phase === "reading" && document.activeElement.tagName !== "INPUT") {
      e.preventDefault(); buzz();
    }
  }

  return { start, stop, judge, _norm: norm, _zones: zones, _finalPoints: finalPoints };
})();
