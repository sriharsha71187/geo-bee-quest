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
 * It owns its own timers. App calls Buzzer.stop() from abortActivity().
 */
window.Buzzer = (function () {
  const Q = window.QBank;
  const ROUND_MAX = 30, TARGET = 5;
  const WPM = 150;                      // moderator reading pace
  const AFTER_READ_MS = 5000;           // time to buzz after the last word
  let ctx = null, R = null, timers = [];

  const $ = (sel) => ctx.el.querySelector(sel);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  function later(fn, ms) { const id = setTimeout(fn, ms); timers.push(id); return id; }
  function every(fn, ms) { const id = setInterval(fn, ms); timers.push(id); return id; }
  function clearTimers() { timers.forEach((id) => { clearTimeout(id); clearInterval(id); }); timers = []; }
  function hush() { try { window.speechSynthesis && speechSynthesis.cancel(); } catch (e) {} }
  function stop() { clearTimers(); hush(); document.removeEventListener("keydown", onKey); R = null; }

  // ---------- answer checking ----------
  function norm(s) {
    return Q.normalize(String(s || "").replace(/['’ʻ`]/g, "").replace(/\bst\.? /gi, "saint "))
      .replace(/^(a|an) /, "");
  }
  function lev(a, b) {
    if (Math.abs(a.length - b.length) > 2) return 9;
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++)
      for (let j = 1; j <= b.length; j++)
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[a.length][b.length];
  }
  // 'yes' | 'prompt' | 'no'. One typo allowed on answers of 6+ letters,
  // because a 7-year-old's spelling shouldn't cost a point he earned.
  function judge(t, given) {
    const g = norm(given);
    if (!g) return "no";
    const ok = [t.a, ...(t.alt || [])].map(norm);
    if (ok.includes(g)) return "yes";
    if (ok.some((o) => o.length >= 6 && lev(o, g) <= 1)) return "yes";
    if ((t.prompt || []).map(norm).includes(g)) return "prompt";
    return "no";
  }

  // ---------- picking tossups ----------
  // Unseen first, then ones he missed, then ones he got late; never repeat
  // within a round. Mild ramp: easier tossups early in the round.
  function pick(s) {
    const seen = (s.buzz && s.buzz.seen) || {};
    const pool = window.GEO_TOSSUPS.filter((t) => !R.used.has(t.id));
    if (!pool.length) return null;
    const score = (t) => {
      const r = seen[t.id];
      let p = !r ? 0 : r.w > r.c ? 1 : r.bp != null && r.bp < 0.9 ? 3 : 2;
      p += Math.abs(t.t - (R.i < 10 ? 2 : 3)) * 0.4;
      return p + Math.random() * 0.8;
    };
    pool.sort((a, b) => score(a) - score(b));
    return pool[0];
  }

  // ---------- round ----------
  function start(c) {
    stop();
    ctx = c;
    R = { i: 0, correct: 0, wrong: 0, used: new Set(), log: [], startedAt: Date.now() };
    document.addEventListener("keydown", onKey);
    intro();
  }
  function intro() {
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
        <div class="row" style="gap:10px;justify-content:center">
          <button class="big green" id="bz-go">Start round ▶</button>
          <button class="ghost" id="bz-exit">Back</button>
        </div>
      </div>`;
    $("#bz-go").onclick = next;
    $("#bz-exit").onclick = exit;
  }
  function next() {
    clearTimers(); hush();
    if (R.correct >= TARGET || R.i >= ROUND_MAX) return finish();
    const t = pick(ctx.getState());
    if (!t) return finish();
    R.used.add(t.id);
    R.i++;
    R.cur = { t, words: t.clues.join(" ").split(/\s+/), shown: 0, phase: "reading", buzzAt: null, prompted: false };
    renderTossup();
    read();
  }
  function renderTossup() {
    ctx.el.innerHTML = `
      <div class="card buzz-card">
        <div class="quiz-top"><span>Question ${R.i}</span><span>✅ ${R.correct} / ${TARGET}</span>
          <button class="ghost small" id="bz-quit">Quit</button></div>
        <p class="buzz-text" id="bz-text" aria-live="off"></p>
        <div id="bz-act">
          <button class="buzz-btn" id="bz-buzz" aria-label="Buzz">BUZZ</button>
          <p class="muted" id="bz-hint">Buzz as soon as you know it!</p>
        </div>
        <div id="bz-feedback" class="feedback" aria-live="polite"></div>
      </div>`;
    $("#bz-buzz").onclick = buzz;
    $("#bz-quit").onclick = () => { if (confirm("Quit this round?")) finish(); };
  }
  function paintText(all) {
    const c = R.cur, w = c.words;
    if (all && c.buzzAt != null && c.buzzAt < w.length) {
      // full text with a marker where he buzzed, the unread part dimmed
      $("#bz-text").innerHTML = esc(w.slice(0, c.buzzAt).join(" ")) + ' <span class="buzz-mark" title="you buzzed here">🛎</span> ' +
        `<span class="buzz-rest">${esc(w.slice(c.buzzAt).join(" "))}</span>`;
    } else {
      $("#bz-text").textContent = w.slice(0, all ? w.length : c.shown).join(" ");
    }
  }
  function read() {
    const c = R.cur, msPerWord = 60000 / WPM;
    if (ctx.speechOn() && window.speechSynthesis) {
      try {
        hush();
        const u = new SpeechSynthesisUtterance(c.t.clues.join(" "));
        u.rate = 0.95;
        c.voice = true;
        u.onend = u.onerror = () => { c.voice = false; if (c.textDone) lastChance(c); };
        u.onboundary = (e) => {
          if (c.phase !== "reading" || e.name !== "word") return;
          const before = c.t.clues.join(" ").slice(0, e.charIndex + 1).split(/\s+/).length;
          c.shown = Math.max(c.shown, before); paintText(false);
        };
        speechSynthesis.speak(u);
      } catch (e) {}
    }
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
        <button class="icon-btn" id="bz-mic" title="Say it" aria-label="Say your answer">🎙</button>
        <button class="green" id="bz-ok">Answer</button>
      </div>
      <p class="muted"><span id="bz-left">${left}</span> seconds…</p>`;
    const input = $("#bz-in"); input.focus();
    $("#bz-ok").onclick = () => submit(input.value);
    input.onkeydown = (e) => { if (e.key === "Enter") { e.preventDefault(); submit(input.value); } };
    $("#bz-mic").onclick = () => listen(input);
    // a spoken answer is the real format, so open the mic straight away when
    // speech recognition is available and Speech is on
    if (ctx.speechOn()) listen(input);
    every(() => {
      left--; const el = $("#bz-left"); if (el) el.textContent = Math.max(0, left);
      if (left <= 0 && R && R.cur === c && c.phase === "answering") { c.timedOut = true; submit(input.value); }
    }, 1000);
  }
  function listen(input) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    try {
      const rec = new SR(); rec.lang = "en-US"; rec.maxAlternatives = 4; rec.interimResults = false;
      rec.onresult = (e) => {
        const alts = Array.from(e.results[0]).map((r) => r.transcript);
        const hit = alts.find((a) => judge(R.cur.t, a) !== "no");
        input.value = hit || alts[0] || "";
        if (input.value) submit(input.value);
      };
      rec.start();
    } catch (e) {}
  }
  function submit(value) {
    const c = R && R.cur;
    if (!c || c.phase !== "answering") return;
    const v = judge(c.t, value);
    if (v === "prompt" && !c.prompted) {
      c.prompted = true;
      $("#bz-feedback").innerHTML = `<b>Can you be more specific?</b>`;
      const input = $("#bz-in"); input.value = ""; input.focus();
      return;
    }
    reveal(v === "yes" ? "right" : "wrong", value);
  }
  function reveal(outcome, given) {
    const c = R.cur; if (!c) return;
    c.phase = "done"; clearTimers(); hush();
    const frac = c.buzzAt != null ? c.buzzAt / c.words.length : null;
    if (outcome === "right") R.correct++; else if (outcome === "wrong") R.wrong++;
    R.log.push({ id: c.t.id, outcome, bp: frac });
    ctx.record(c.t.id, outcome, frac);
    paintText(true);
    const early = frac != null && frac < 0.67;
    const msg = outcome === "right"
      ? (early ? "🎉 Early buzz — that beats the giveaway!" : "✅ Correct!")
      : outcome === "wrong" && c.timedOut && !given ? "⏰ Time's up! In the real bee you get just a few seconds after you buzz. Here's the answer:"
      : outcome === "wrong" ? `Not quite${given ? ` (you said “${esc(given)}”)` : ""}. Here's the answer:`
      : "Nobody buzzed. Here's the answer:";
    $("#bz-act").innerHTML = "";
    $("#bz-feedback").innerHTML = `
      <p>${msg}</p>
      <p class="summary-line">${esc(c.t.a)}</p>
      ${c.t.x ? `<p class="muted">💡 ${esc(c.t.x)}</p>` : ""}
      <button class="big green" id="bz-next">${R.correct >= TARGET ? "Finish round 🏁" : "Next ▶"}</button>`;
    $("#bz-next").onclick = next;
    $("#bz-next").focus();
    if (outcome === "right") ctx.sound(true); else ctx.sound(false);
  }
  function finish() {
    clearTimers(); hush();
    if (!R) return;
    const answered = R.log.length;
    const bps = R.log.filter((l) => l.outcome === "right" && l.bp != null).map((l) => l.bp);
    const avgBuzz = bps.length ? Math.round((100 * bps.reduce((a, b) => a + b, 0)) / bps.length) : null;
    const summary = { kind: "buzzer", at: Date.now(), n: answered, correct: R.correct, wrong: R.wrong,
      reached5: R.correct >= TARGET, avgBuzzPct: avgBuzz, ms: Date.now() - R.startedAt };
    if (answered) ctx.finish(summary);
    const missed = R.log.filter((l) => l.outcome !== "right").map((l) => window.GEO_TOSSUPS.find((t) => t.id === l.id));
    ctx.el.innerHTML = `
      <div class="card buzz-card">
        <div class="mascot">🛎️</div>
        <h1>${R.correct >= TARGET ? "You reached 5!" : "Round over"}</h1>
        <p class="summary-line">${R.correct} right out of ${answered} question${answered === 1 ? "" : "s"}</p>
        ${R.correct >= TARGET ? `<p>You needed <b>${answered}</b> questions to get 5. In the real bee, faster means more bonus points.</p>` : ""}
        ${avgBuzz != null ? `<p class="muted">On your right answers you buzzed, on average, ${avgBuzz}% of the way through the question. Lower is better: buzzing before the giveaway wins close rounds.</p>` : ""}
        ${R.wrong ? `<p class="muted">Wrong buzzes: ${R.wrong}. In the real bee a wrong buzz locks you out of that question, so buzz when you're sure.</p>` : ""}
        ${missed.length ? `<div class="debrief"><h3>Learn these</h3>${missed.map((t) => `
          <div class="debrief-row"><div class="debrief-a">${esc(t.a)}</div><div class="debrief-q">${esc(t.clues.join(" "))}</div></div>`).join("")}</div>` : ""}
        <div class="row" style="gap:10px;justify-content:center;margin-top:12px">
          <button class="big green" id="bz-again">Another round ▶</button>
          <button class="ghost" id="bz-exit">Home</button>
        </div>
      </div>`;
    R = null;
    $("#bz-again").onclick = () => start(ctx);
    $("#bz-exit").onclick = exit;
  }
  function exit() { stop(); ctx.exit(); }
  function onKey(e) {
    if (!R || !R.cur) return;
    if (e.code === "Space" && R.cur.phase === "reading" && document.activeElement.tagName !== "INPUT") {
      e.preventDefault(); buzz();
    }
  }

  return { start, stop, judge, _norm: norm };
})();
