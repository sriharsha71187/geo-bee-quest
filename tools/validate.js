#!/usr/bin/env node
/* GeoBee Quest content + engine validator.
 * Run from the repo root: node tools/validate.js
 * Loads the real app files in Node and enforces the invariants that keep
 * content bee-calibrated and the Field Book a true textbook. CI-style: exits
 * non-zero with a list of errors if anything regresses.
 */
"use strict";
global.window = {};
const fs = require("fs");
const path = require("path");
const base = path.join(__dirname, "..", "js") + path.sep;
for (const f of ["data.js", "coach.js", "scenes.js", "maps.js", "questions.js", "engine.js", "tossups.js", "voice.js", "buzzer.js"]) {
  eval(fs.readFileSync(base + f, "utf8"));
}
const D = window.GEO_DATA, Q = window.QBank, E = window.Engine;
const errors = [];

// ---------- data shape ----------
const ids = new Set();
for (const f of Q.facts) {
  if (ids.has(f.id)) errors.push("duplicate fact id: " + f.id);
  ids.add(f.id);
  if (!(f.tier >= 1 && f.tier <= 5)) errors.push("bad tier: " + f.id);
}
for (const t of D.TOPICS) {
  if (t.kind !== "items") continue;
  for (const it of t.items) {
    const wantD = it.vs ? 1 : it.odd ? 2 : 3;
    if (!Array.isArray(it.d) || it.d.length !== wantD)
      errors.push(`item needs ${wantD} distractors: ${t.id}: ${String(it.q).slice(0, 50)}`);
    if (it.d && it.d.some((x) => Q.normalize(String(x)) === Q.normalize(String(it.a))))
      errors.push(`distractor equals answer: ${t.id}: ${String(it.q).slice(0, 50)}`);
  }
}
for (const p of D.PYRAMIDS) {
  if (!p.clues || p.clues.length !== 4) errors.push("pyramid clues != 4: " + p.a);
}

// ---------- every fact renders through every form ----------
let variants = 0;
for (const f of Q.facts) {
  for (const form of f.forms) {
    for (const typed of [false, true]) {
      let q;
      try { q = Q.buildQuestion(f, { form, typed }); }
      catch (e) { errors.push(`buildQuestion threw: ${f.id}/${form}: ${e.message}`); continue; }
      variants++;
      if (!q.prompt || q.prompt.length < 8) errors.push(`missing prompt text: ${f.id}/${form}`);
      if (q.kind === "mcq") {
        if (!q.options || q.options.length < 2) errors.push(`too few options: ${f.id}/${form}`);
        if (q.answerIdx < 0) errors.push(`answer not among options: ${f.id}/${form}`);
        const keys = new Set(q.options.map((o) => Q.normalize(o.label) || String(o.label)));
        if (keys.size !== q.options.length) errors.push(`duplicate options: ${f.id}/${form}`);
      }
      if (q.kind === "typed" && (!q.accept || !q.accept.length)) errors.push(`typed with no accept: ${f.id}/${form}`);
    }
  }
}

// ---------- Field Book: sections + textbook prose ----------
for (const t of D.TOPICS) {
  if (t.scene && !["usmap", "worldmap"].includes(t.scene) && !window.GEO_SCENES[t.scene])
    errors.push(`unknown chapter scene: ${t.id}: ${t.scene}`);
  if (!t.intro || t.intro.length < 80) errors.push(`chapter intro missing/short: ${t.id}`);
  if (t.secs) {
    if (!t.items) { errors.push(`secs without items: ${t.id}`); continue; }
    let prev = -1;
    for (let si = 0; si < t.secs.length; si++) {
      const s = t.secs[si];
      if (!s.n || !s.intro || s.intro.length < 40) errors.push(`section missing name/intro: ${t.id}/${s.n}`);
      if (s.scene && !window.GEO_SCENES[s.scene]) errors.push(`unknown scene: ${t.id}/${s.n}: ${s.scene}`);
      if (!(s.from > prev)) errors.push(`section from not increasing: ${t.id}/${s.n}`);
      if (s.from >= t.items.length) errors.push(`section from out of range: ${t.id}/${s.n}`);
      prev = s.from;
      const to = si + 1 < t.secs.length ? t.secs[si + 1].from : t.items.length;
      const secItems = t.items.slice(s.from, to);
      const hasBaseItems = secItems.some((it) => !it.adv);
      const hasAdvItems = secItems.some((it) => it.adv);
      if (!Array.isArray(s.read) || !s.read.length) { errors.push(`section has no read pages: ${t.id}/${s.n}`); continue; }
      let basePages = 0, advPages = 0;
      for (const pg of s.read) {
        const text = typeof pg === "string" ? pg : pg.p;
        const isAdv = typeof pg === "object" && pg.adv;
        if (!text || text.length < 40) errors.push(`read page too short: ${t.id}/${s.n}`);
        if (/\?/.test(text || "")) errors.push(`read page contains a question mark: ${t.id}/${s.n}`);
        if (typeof pg === "object" && pg.art && !window.GEO_SCENES[pg.art]) errors.push(`unknown art: ${t.id}/${s.n}: ${pg.art}`);
        if (isAdv) advPages++; else basePages++;
      }
      if (hasBaseItems && !basePages) errors.push(`section with base items has no base pages: ${t.id}/${s.n}`);
      if (hasAdvItems && !advPages) errors.push(`section with advanced items has no adv pages: ${t.id}/${s.n}`);
      if (!hasAdvItems && advPages) errors.push(`adv pages but no adv items: ${t.id}/${s.n}`);
    }
    if (t.secs[0].from !== 0) errors.push(`first section must start at 0: ${t.id}`);
  } else if (t.kind === "items") {
    errors.push(`item chapter has no sections/prose: ${t.id}`);
  }
}

// ---------- official 2024 NSF JGB sample: 15/15 must stay answerable ----------
const OFFICIAL = [
  ["Q1 Pontchartrain", (f) => /Pontchartrain/.test(f.teachQ || "")],
  ["Q2 Porto/Algarve", (f) => /Porto|Algarve/.test(f.teachQ || "")],
  ["Q3 Gateway of India", (f) => /Gateway of India/.test(f.teachQ || "")],
  ["Q4 Luzon", (f) => /Luzon/.test(f.teachQ || "")],
  ["Q5 Altiplano/Bolivia", (f) => /Altiplano|two capitals/.test(f.teachQ || "")],
  ["Q6 Transylvania", (f) => /Transylvania/.test(f.teachQ || "")],
  ["Q7 East Siberian Sea", (f) => /East Siberian/.test(f.teachQ || "")],
  ["Q8 Geneva/Switzerland", (f) => /Geneva/.test(f.teachQ || "")],
  ["Q9 Rann of Kutch", (f) => /Rann of Kutch/.test(f.teachQ || "")],
  ["Q10 Guantanamo", (f) => /Guantanamo/.test(f.teachQ || "")],
  ["Q11 Tiber/Rome", (f) => /Tiber/.test(f.teachQ || "")],
  ["Q12 global warming vs El Nino", (f) => /main cause/.test(f.teachQ || "")],
  ["Q13 Arctic warming faster", (f) => /warming faster/.test(f.teachQ || "")],
  ["Q14 glacier", (f) => /slow-moving (river|mass) of ice/.test(f.teachQ || "")],
  ["Q15 lake", (f) => /surrounded by land/.test(f.teachQ || "")],
];
for (const [label, test] of OFFICIAL) {
  if (!Q.facts.some(test)) errors.push(`official sample question no longer answerable: ${label}`);
}

// ---------- engine flows ----------
{
  const s = E.migrate(E.defaultState());
  s.placementDone = true;
  // practice round: terminates, no teach cards, no in-round repeats of unmissed facts
  const sess = E.newSession("practice");
  const seenIds = new Set(), seenAnswers = new Set();
  for (let i = 0; i < 20; i++) {
    const q = E.nextQuestion(s, sess);
    if (!q) break;
    if (q.teach) errors.push("practice served a teach card");
    if (!q.flags.reask && seenIds.has(q.factId)) errors.push("unmissed fact repeated in round: " + q.factId);
    const aKey = Q.normalize(q.answerText || "");
    if (!q.flags.reask && aKey && seenAnswers.has(aKey)) errors.push("answer repeated in round: " + q.answerText);
    seenIds.add(q.factId); seenAnswers.add(aKey);
    E.record(s, sess, q, true);
    if (sess.i >= E.ROUND_LEN && !sess.misses.length) break;
  }
  if (sess.i < E.ROUND_LEN) errors.push(`practice round ended early: ${sess.i}/${E.ROUND_LEN}`);

  // NSF mock: 25 questions, slot mix, never 4 options, always answerable
  const plan = E.beePlan("nsf", s);
  const mix = { mcq3: 0, mcq4: 0, mcq2: 0, typed: 0 };
  for (let i = 0; i < 25; i++) {
    const q = E.beeNext(s, plan);
    if (!q) { errors.push(`nsf mock ran dry at ${i}`); break; }
    if (q.kind === "typed") mix.typed++;
    else if (q.options.length === 4) mix.mcq4++;
    else if (q.options.length === 3) mix.mcq3++;
    else mix.mcq2++;
    E.beeRecord(s, plan, q, "correct");
  }
  if (mix.mcq4) errors.push("nsf mock served a 4-option MCQ");
  if (!mix.typed) errors.push("nsf mock served no typed questions");
  if (!plan.timeLimit) errors.push("nsf mock has no time limit");
  E.beeFinish(s, plan);

  // iac + oral basic liveness
  const iac = E.beePlan("iac", s);
  if (!iac.timeLimit) errors.push("iac mock has no time limit");
  if (!E.beeNext(s, iac)) errors.push("iac mock served nothing");
  const oral = E.beePlan("oral", s);
  if (!E.beeNext(s, oral)) errors.push("oral bee served nothing");

  // advanced gating: adv facts only in advanced mode
  const advOff = E.topicFacts(s, "concepts").some((f) => f.adv);
  if (advOff) errors.push("advanced facts leak with advanced off");
  s.settings.advanced = true;
  const advOn = E.topicFacts(s, "concepts").some((f) => f.adv);
  if (!advOn) errors.push("advanced facts missing with advanced on");
}

// ---------- buzzer tossups (js/tossups.js) ----------
{
  const T = window.GEO_TOSSUPS || [];
  const B = window.Buzzer;
  if (T.length < 100) errors.push(`only ${T.length} tossups (expected 100+)`);
  const ids = new Set(), answers = new Set();
  const STOPW = new Set(["the", "of", "and", "river", "mountains", "mount", "lake", "island", "islands", "city",
    "national", "park", "sea", "strait", "peninsula", "desert", "canyon", "falls", "state", "line", "reef", "treaty",
    "zone", "region", "volcano", "belt", "route", "beach", "degrees", "resources"]);
  for (const t of T) {
    const tag = "tossup " + t.id;
    if (ids.has(t.id)) errors.push(`${tag}: duplicate id`); ids.add(t.id);
    if (!Array.isArray(t.clues) || t.clues.length < 2) { errors.push(`${tag}: needs 2+ clues`); continue; }
    if (!/for the point/i.test(t.clues[t.clues.length - 1])) errors.push(`${tag}: last clue must say 'For the point'`);
    const words = t.clues.join(" ").split(/\s+/).length;
    if (words < 35 || words > 90) errors.push(`${tag}: ${words} words (35-90)`);
    if (!(t.t >= 1 && t.t <= 5)) errors.push(`${tag}: bad tier`);
    const key = Q.normalize(t.a);
    if (answers.has(key)) errors.push(`${tag}: duplicate answer ${t.a}`); answers.add(key);
    // every listed answer must actually be accepted by the buzzer's matcher
    for (const a of [t.a, ...(t.alt || [])]) if (B.judge(t, a) !== "yes") errors.push(`${tag}: listed answer not accepted: ${a}`);
    for (const p of t.prompt || []) if (B.judge(t, p) !== "prompt") errors.push(`${tag}: prompt not prompted: ${p}`);
    // the answer's own name must not appear before the giveaway sentence
    const early = Q.normalize(t.clues.slice(0, -1).join(" "));
    for (const w of Q.normalize(t.a).split(" ")) {
      if (w.length > 3 && !STOPW.has(w) && new RegExp("\\b" + w + "\\b").test(early)) errors.push(`${tag}: answer word '${w}' appears before the final clue`);
    }
  }
  // the matcher itself: one typo forgiven on long answers, not on short ones
  const probe = { a: "Tegucigalpa", alt: [], prompt: [] };
  if (B.judge(probe, "Tegucigalpa") !== "yes" || B.judge(probe, "Teguciglpa") !== "yes") errors.push("buzzer matcher: typo tolerance broken");
  if (B.judge({ a: "Oslo", alt: [] }, "Olso") === "yes") errors.push("buzzer matcher: too lenient on short answers");
  if (B.judge({ a: "Saint Paul", alt: [] }, "St. Paul") !== "yes") errors.push("buzzer matcher: St. -> Saint broken");
  // Final Round scale: clue 1 = 6 (power), up to the giveaway = 5, giveaway = 4,
  // after the reading = 3; wrong = -2 while reading, -1 after
  const ft = { clues: ["a b c", "d e", "f g", "For the point h"] };
  const fc = (buzzAt) => ({ buzzAt, words: ft.clues.join(" ").split(" "), z: B._zones(ft) });
  const want = [[2, "right", 6], [3, "right", 6], [4, "right", 5], [7, "right", 5], [8, "right", 4], [11, "right", 3],
    [5, "wrong", -2], [11, "wrong", -1], [null, "nobuzz", 0]];
  for (const [at, out, pts] of want) if (B._finalPoints(fc(at), out) !== pts) errors.push(`final round scoring: buzz at ${at} ${out} should be ${pts}`);
}

// ---------- forgiving answer matching (QBank.match) ----------
{
  const M = [
    ["delhi", ["new delhi"], "close"], ["amazon", ["amazon river"], "yes"], ["kivu", ["lake kivu"], "yes"],
    ["everest", ["mount everest"], "yes"], ["ouagadougo", ["ouagadougou"], "yes"], ["canbera", ["canberra"], "yes"],
    ["washington", ["washington dc"], "prompt"], ["mexico", ["mexico city"], "prompt"], ["victoria", ["lake victoria"], "prompt"],
    ["carolina", ["north carolina"], "prompt"], ["guinea", ["guinea bissau"], "prompt"], ["north", ["north carolina"], "no"],
    ["olso", ["oslo"], "no"], ["austria", ["australia"], "no"], ["iceland", ["ireland"], "no"], ["south korea", ["north korea"], "no"],
  ];
  for (const [given, acc, want] of M) {
    const v = Q.match(given, acc).v;
    if (v !== want) errors.push(`answer matching: '${given}' for ${acc[0]} gave ${v}, want ${want}`);
  }
  // spoken answers: fillers and mis-hearings are his to keep, a real other
  // place is a real answer, and gibberish gets another try
  const S = [
    [["it's Paris"], ["paris"], "yes"], [["um the answer is Paris"], ["paris"], "yes"], [["I think it's Delhi"], ["new delhi"], "close"],
    [["hungry"], ["hungary"], "yes"], [["sane"], ["seine river", "seine"], "yes"], [["grease"], ["greece"], "yes"],
    [["chilly"], ["chile"], "yes"], [["soul"], ["seoul"], "yes"], [["roam"], ["rome"], "yes"], [["whales"], ["wales"], "yes"],
    [["Iran"], ["iraq"], "no"], [["Paris"], ["peru"], "no"], [["Iceland"], ["ireland"], "no"], [["Washington"], ["washington dc"], "prompt"],
    [["blue banana"], ["paris"], "unclear"], [["what", "Rome"], ["rome"], "yes"],
  ];
  for (const [alts, acc, want] of S) {
    const v = Q.matchSpoken(alts, acc).v;
    if (v !== want) errors.push(`spoken matching: '${alts[0]}' for ${acc[0]} gave ${v}, want ${want}`);
  }
  // no country, capital, big city, state or state capital may ever be
  // accepted as the answer for a different one
  const names = [...new Set([...D.COUNTRIES.flatMap((c) => [c.n, c.c, c.big]), ...D.STATES.flatMap((s) => [s.n, s.c, s.big])].filter(Boolean))];
  for (const want of names) for (const given of names) {
    if (Q.normalize(want) === Q.normalize(given)) continue;
    const v = Q.match(given, [want]).v;
    if (v === "yes" || v === "close") errors.push(`answer matching: '${given}' wrongly accepted for ${want}`);
    const sv = Q.matchSpoken([given], [want]).v;
    if (sv === "yes" || sv === "close") errors.push(`spoken matching: '${given}' wrongly accepted for ${want}`);
  }
}

// ---------- daily coach plan (js/coach.js, written by the coaching agent) ----------
{
  const C = window.GBQ_COACH;
  const topicIds = new Set(D.TOPICS.map((t) => t.id));
  const REGIONS = new Set(["asia", "us", "europe", "africa", "latam", "canada", "oceania", "world"]);
  if (!C || typeof C !== "object") errors.push("coach.js must define window.GBQ_COACH");
  else {
    for (const t of C.focusTopics || []) if (!topicIds.has(t)) errors.push(`coach: unknown focus topic ${t}`);
    for (const k of ["tierFloor", "tierCap"]) for (const [t, v] of Object.entries(C[k] || {})) {
      if (!topicIds.has(t)) errors.push(`coach.${k}: unknown topic ${t}`);
      if (!(Number.isInteger(v) && v >= 1 && v <= 5)) errors.push(`coach.${k}.${t}: tier must be 1-5`);
    }
    for (const [t, lo] of Object.entries(C.tierFloor || {})) if ((C.tierCap || {})[t] && C.tierCap[t] < lo) errors.push(`coach: tierCap < tierFloor for ${t}`);
    const b = C.buzz || {};
    if (b.targetTier != null && !(b.targetTier >= 1 && b.targetTier <= 5)) errors.push("coach.buzz.targetTier must be 1-5");
    for (const [r, w] of Object.entries(b.regions || {})) {
      if (!REGIONS.has(r)) errors.push(`coach.buzz.regions: unknown region ${r}`);
      if (!(w > 0 && w <= 3)) errors.push(`coach.buzz.regions.${r}: weight must be in (0, 3]`);
    }
  }
}

// ---------- fact-id stability (saved progress is keyed on these) ----------
// tools/fact-ids.json lists every id that has ever shipped. An id may only
// disappear if it is mapped in QBank.ALIASES to a live id. Add new ids with:
//   node tools/validate.js --write-ids
{
  const idsPath = path.join(__dirname, "fact-ids.json");
  const live = new Set(Q.facts.map((f) => f.id));
  const shipped = fs.existsSync(idsPath) ? JSON.parse(fs.readFileSync(idsPath, "utf8")) : [];
  const A = Q.ALIASES || {};
  for (const [oldId, newId] of Object.entries(A)) {
    if (!live.has(newId)) errors.push(`alias target missing: ${oldId} -> ${newId}`);
    if (live.has(oldId)) errors.push(`alias source still live (pointless alias): ${oldId}`);
  }
  for (const id of shipped) {
    if (!live.has(id) && !A[id])
      errors.push(`fact id vanished (progress would be orphaned): ${id} — pin it with item.id, or add an ALIASES entry in js/questions.js`);
  }
  const fresh = [...live].filter((id) => !shipped.includes(id));
  if (process.argv.includes("--write-ids")) {
    const all = [...new Set([...shipped, ...live])].sort();
    fs.writeFileSync(idsPath, JSON.stringify(all, null, 0).replace(/","/g, '",\n"') + "\n");
    console.log(`fact-ids.json: ${all.length} ids (${fresh.length} new)`);
  } else if (fresh.length) {
    errors.push(`${fresh.length} new fact id(s) not in tools/fact-ids.json — run: node tools/validate.js --write-ids`);
  }
}

// ---------- report ----------
const facts = Q.facts.length;
const perTopic = D.TOPICS.map((t) => `${t.id}=${(Q.byTopic[t.id] || []).length}`).join(", ");
console.log(`facts: ${facts} · variants built: ${variants} · pyramids: ${D.PYRAMIDS.length}`);
console.log("topics: " + perTopic);
if (errors.length) {
  console.log(`\n${errors.length} ERROR(S):`);
  for (const e of errors.slice(0, 50)) console.log(" - " + e);
  if (errors.length > 50) console.log(` … and ${errors.length - 50} more`);
  process.exit(1);
}
console.log("\nALL CHECKS PASSED");
