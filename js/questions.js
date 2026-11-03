/* GeoBee Quest — question bank.
 * Compiles the curated fact data into fact records, and renders each fact
 * into varied question forms (MCQ or typed) with plausible distractors
 * (same region / same continent / similar difficulty), mirroring how bee
 * questions are written. Deterministic logic only — no AI at runtime.
 */
window.QBank = (function () {
  const D = window.GEO_DATA;

  // --- utilities -----------------------------------------------------------
  function hash(s) {
    let h = 5381;
    for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
    return h.toString(36);
  }
  // Typed/spoken answers and accept lists both pass through this, so it only
  // has to be consistent. Periods and apostrophes are DROPPED (not turned into
  // spaces) so "U.S.A." = "usa", "N'Djamena" = "ndjamena", "D.C." = "dc";
  // letters NFD can't split (ł ø ß æ) are transliterated; "St." = "Saint".
  function normalize(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/ł/g, "l").replace(/ø/g, "o").replace(/ß/g, "ss").replace(/æ/g, "ae").replace(/đ/g, "d")
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[.'’ʻ`]/g, "")
      .replace(/[^a-z0-9 ]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/^the /, "")
      .replace(/(^| )st( |$)/g, "$1saint$2");
  }
  // ---- forgiving answer matching (typed and spoken answers, everywhere) ----
  // A 7-year-old's answer is judged on geography, not spelling or wording:
  //   yes    - an accepted answer, give or take a typo (1 on 5+ letters, 2 on
  //            10+) or a generic word ("Amazon" for "Amazon River")
  //   close  - right but incomplete, and the short name points to nothing else
  //            ("Delhi" for "New Delhi"); counted right, full name shown
  //   prompt - incomplete and the short name is ALSO another place
  //            ("Washington", "Mexico", "Carolina"): ask "be more specific",
  //            as an IAC moderator would
  //   no     - anything else
  const GENERIC = new Set(["the", "of", "river", "lake", "mount", "mt", "mountain", "mountains", "city", "island", "islands"]);
  // words that never identify a place on their own
  const QUALIFIERS = new Set(["new", "san", "santa", "saint", "north", "south", "east", "west", "northern", "southern",
    "eastern", "western", "upper", "lower", "great", "little", "port", "cape", "el", "la", "los", "las", "de", "del",
    "gulf", "bay", "sea", "strait", "national", "park", "united", "republic", "kingdom", "state", "states"]);
  const core = (s) => normalize(s).split(" ").filter((w) => w && !GENERIC.has(w));
  function editDist(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
    for (let i = 1; i <= a.length; i++) {
      const cur = [i];
      for (let j = 1; j <= b.length; j++)
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[b.length];
  }
  const typoOk = (a, b) => a === b || (a.length >= 5 && editDist(a, b, 2) <= (a.length >= 10 ? 2 : 1));
  // does word list `hay` contain `needle` as a run of consecutive words?
  // (a typo is allowed in each word of 5+ letters, unless exact)
  function hasRun(hay, needle, exact) {
    for (let i = 0; i + needle.length <= hay.length; i++)
      if (needle.every((w, k) => (exact ? hay[i + k] === w : typoOk(hay[i + k], w)))) return true;
    return false;
  }
  // every place name the app knows ({full, core words, strong}), for the
  // ambiguity test; strong = a country, state, or city name
  let KNOWN = null;
  function known() {
    if (KNOWN) return KNOWN;
    const D = window.GEO_DATA, names = new Map();
    const add = (x, strong) => { if (x && typeof x === "string") { const k = normalize(x); names.set(k, names.get(k) || strong); } };
    for (const c of D.COUNTRIES) { add(c.n, true); add(c.c, true); add(c.big, true); }
    for (const s of D.STATES) { add(s.n, true); add(s.c, true); add(s.big, true); }
    for (const t of D.TOPICS) for (const it of t.items || []) add(it.a, false);
    for (const p of D.PYRAMIDS || []) add(p.a, false);
    for (const t of window.GEO_TOSSUPS || []) add(t.a, false);
    names.delete("");
    return (KNOWN = [...names].map(([full, strong]) => ({ full, strong, core: core(full) })).filter((k) => k.core.length));
  }
  function match(given, accepts, prompts) {
    const g = normalize(given);
    if (!g) return { v: "no" };
    const acc = (accepts || []).map(normalize).filter(Boolean);
    if (acc.includes(g)) return { v: "yes" };
    if ((prompts || []).map(normalize).includes(g)) return { v: "prompt" };
    const gc = core(g);
    if (!gc.length) return { v: "no" };
    const gs = gc.join(" ");
    const mine = new Set(acc);
    // what he typed is itself another real place: never "a typo" of this one
    // (Iceland/Ireland, Gambia/Zambia, North/South Korea)
    const isOther = known().some((k) => !mine.has(k.full) && (k.full === g || k.full === gs));
    // same once generic words are dropped — unless what was typed is itself
    // a different country, state or city ("Mexico" for Mexico City)
    if (acc.some((a) => core(a).join(" ") === gs))
      return { v: known().some((k) => k.strong && !mine.has(k.full) && (k.full === g || k.full === gs)) ? "prompt" : "yes" };
    const tooVague = gc.every((w) => QUALIFIERS.has(w)) || gs.replace(/ /g, "").length < 4;
    if (isOther) return !tooVague && acc.some((a) => hasRun(core(a), gc, true)) ? { v: "prompt" } : { v: "no" };
    if (acc.some((a) => typoOk(a, g) || typoOk(core(a).join(" "), gs))) return { v: "yes" };
    // incomplete answer: a run of the words of an accepted answer
    if (tooVague) return { v: "no" };
    if (!acc.some((a) => hasRun(core(a), gc))) return { v: "no" };
    const other = known().some((k) => !mine.has(k.full) && hasRun(k.core, gc));
    return { v: other ? "prompt" : "close" };
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  // normalize() strips emoji to "" — fall back to the raw string so flag
  // options still deduplicate correctly.
  function optKey(v) { return normalize(v) || String(v); }
  function pickDistinct(pools, n, excludeLabels) {
    // pools: array of candidate arrays in priority order
    const out = [];
    const seen = new Set(excludeLabels.map(optKey));
    for (const pool of pools) {
      for (const cand of shuffle(pool)) {
        if (out.length >= n) return out;
        const key = optKey(cand.label !== undefined ? cand.label : cand);
        if (seen.has(key)) continue;
        seen.add(key);
        out.push(cand);
      }
    }
    return out;
  }
  function flagCode(emoji) {
    // Two regional-indicator symbols -> ISO 3166-1 alpha-2 code
    const pts = Array.from(emoji);
    if (pts.length < 2) return null;
    const A = 0x1f1e6;
    const c1 = pts[0].codePointAt(0), c2 = pts[1].codePointAt(0);
    if (c1 < A || c1 > A + 25 || c2 < A || c2 > A + 25) return null;
    return String.fromCharCode(97 + c1 - A, 97 + c2 - A);
  }

  // --- fact compilation ----------------------------------------------------
  const facts = [];
  const byId = {};
  const byTopic = {};

  function addFact(f) {
    facts.push(f);
    byId[f.id] = f;
    (byTopic[f.topic] = byTopic[f.topic] || []).push(f);
  }

  // US states
  for (const s of D.STATES) {
    const forms = ["cap", "rev"];
    if (s.nick) forms.push("nick");
    if (s.big) forms.push("big"); // largest ≠ capital: the classic bee trap
    addFact({
      id: "st:" + s.n, topic: "states", tier: s.t, src: s,
      forms,
      label: s.n, teachText: `${s.c} is the capital of ${s.n} — "${s.nick}"`,
      fact: s.x || (s.big
        ? `${s.c} is the capital of ${s.n}, but ${s.big} is its largest city. Its nickname is "${s.nick}".`
        : `${s.c} is the capital of ${s.n}, in the ${s.r} region. Its nickname is "${s.nick}".`),
    });
  }
  // Countries whose names take "the" mid-sentence
  const NEEDS_THE = new Set(["United States", "United Kingdom", "Netherlands", "Philippines", "United Arab Emirates", "Democratic Republic of the Congo"]);
  const art = (n) => (NEEDS_THE.has(n) ? "the " + n : n);

  // World capitals
  for (const c of D.COUNTRIES) {
    addFact({
      id: "cc:" + c.n, topic: "capitals", tier: c.ct || c.t, src: c,
      // no "X City is the capital of which country?" when the capital's name
      // contains the country's (Singapore, Mexico City, Panama City, …): the
      // question would answer itself
      forms: [
        "cap",
        ...(normalize(c.c).includes(normalize(c.n)) ? [] : ["rev"]),
        ...(c.big ? ["big"] : []),
      ], label: c.n,
      teachText: `${c.c} is the capital of ${art(c.n)} ${c.f}`,
      fact: c.x || (c.big
        ? `${c.c} is the capital of ${art(c.n)}, but ${c.big} is its largest city.`
        : `${c.c} is the capital of ${art(c.n)}, a country in ${c.k}.`),
    });
  }
  // Flags (ft overrides tier: flag recognizability ≠ country fame)
  for (const c of D.COUNTRIES) {
    addFact({
      id: "fl:" + c.n, topic: "flags", tier: c.ft || c.t, src: c,
      forms: ["flag", "flagrev"], label: c.n,
      teachText: `This is the flag of ${art(c.n)} ${c.f}`,
      fact: `${c.f} is the flag of ${art(c.n)}, in ${c.k}. Its capital is ${c.c}.`,
    });
  }
  // Map topics (need js/maps.js — skipped gracefully if absent)
  if (window.GEO_MAPS) {
    const MU = window.GEO_MAPS.us.states;
    const bySize = Object.entries(MU).sort((a, b) => b[1].area - a[1].area).map(([n]) => n);
    const famous = new Set(["Washington", "California", "Texas", "Florida", "Alaska", "Hawaii", "New York"]);
    for (const s of D.STATES) {
      const m = MU[s.n];
      if (!m) continue;
      const tier = famous.has(s.n) ? 1 : Math.min(5, Math.floor(bySize.indexOf(s.n) / 10) + 1);
      addFact({
        id: "um:" + s.n, topic: "usmap", tier, src: s,
        // tiny states can't be tapped reliably — identify-only for them
        forms: m.area >= 900 ? ["find", "which"] : ["which"],
        label: s.n, teachQ: "Here it is on the map:", teachA: s.n,
        teachText: "This is " + s.n + " on the map!",
        teachMap: { kind: "us", highlight: s.n },
        fact: `${s.n} — "${s.nick}" — is in the ${s.r} region. Its capital is ${s.c}` +
          (s.big ? `, but its largest city is ${s.big}. ` : `, which is also its largest city. `) +
          (s.feat || ""),
      });
    }
    const MW = window.GEO_MAPS.world.countries;
    for (const c of D.COUNTRIES) {
      if (!MW[c.n]) continue;
      addFact({
        id: "wm:" + c.n, topic: "worldmap", tier: c.t, src: c,
        forms: ["which"], label: c.n,
        teachQ: "Here it is on the map:", teachA: c.n + " " + c.f,
        teachText: "This is " + c.n + " on the map!",
        teachMap: { kind: "world", highlight: c.n },
        fact: `${c.n} is in ${c.k}. Its capital is ${c.c}.` + (c.x ? " " + c.x : ""),
      });
    }
  }

  // Curated item topics.
  // A fact's id is what the child's saved progress is keyed on. It defaults to
  // a hash of the question text, so REWORDING a question would orphan that
  // progress. To reword safely, pin the old id on the item: `id: "<old hash>"`.
  // tools/fact-ids.json + tools/validate.js fail the build if an id vanishes
  // without either a pinned id or an ALIASES entry below.
  for (const t of D.TOPICS) {
    if (t.kind !== "items") continue;
    for (const it of t.items) {
      addFact({
        id: t.id + ":" + (it.id || hash(it.q)), topic: t.id, tier: it.t, src: it,
        forms: ["item"], label: it.a, adv: !!it.adv,
        teachQ: it.q, teachA: it.a,
        teachText: it.q + " " + it.a + "!",
        fact: it.x || null, item: it,
      });
    }
  }

  // --- distractor pools ----------------------------------------------------
  const stateCapsByRegion = {}, stateNamesByRegion = {};
  for (const s of D.STATES) {
    (stateCapsByRegion[s.r] = stateCapsByRegion[s.r] || []).push(s.c);
    (stateNamesByRegion[s.r] = stateNamesByRegion[s.r] || []).push(s.n);
  }
  const allStateCaps = D.STATES.map((s) => s.c);
  const allStateNames = D.STATES.map((s) => s.n);
  const bigCityByRegion = {};
  for (const s of D.STATES) if (s.big) (bigCityByRegion[s.r] = bigCityByRegion[s.r] || []).push(s.big);
  const allBigCities = D.STATES.filter((s) => s.big).map((s) => s.big);
  const countriesByCont = {};
  for (const c of D.COUNTRIES) (countriesByCont[c.k] = countriesByCont[c.k] || []).push(c);
  const allCountries = D.COUNTRIES;

  // --- question rendering --------------------------------------------------
  // Returns: { factId, topic, tier, kind, prompt, media, options, answerIdx,
  //            accept, fact, speak }
  // options: [{ label, media? }]; media: {type:'flag', code, emoji}
  function buildQuestion(fact, opts) {
    opts = opts || {};
    const form = opts.form || fact.forms[0];
    const typed = !!opts.typed;
    const s = fact.src;
    let prompt, answer, accept = [], media = null, optionMedia = null, pools = [];

    if (fact.topic === "usmap" && form === "find") {
      return {
        factId: fact.id, topic: fact.topic, tier: fact.tier, form,
        kind: "mapclick", prompt: `Find ${s.n}! Tap it on the map.`,
        map: { kind: "us", target: s.n }, answerText: s.n,
        fact: fact.fact, speak: `Find ${s.n} on the map.`,
      };
    }
    if (fact.topic === "usmap") {
      prompt = "Which state is highlighted on the map?";
      media = { type: "map", kind: "us", highlight: s.n };
      answer = s.n; accept = [s.n];
      pools = [stateNamesByRegion[s.r].filter((n) => n !== s.n), allStateNames];
    } else if (fact.topic === "worldmap") {
      prompt = "Which country is highlighted on the map?";
      media = { type: "map", kind: "world", highlight: s.n };
      answer = s.n; accept = countryAccept(s.n);
      const cont = countriesByCont[s.k].filter((c) => c.n !== s.n && window.GEO_MAPS.world.countries[c.n]);
      pools = [cont.map((c) => c.n), allCountries.map((c) => c.n)];
    } else if (fact.topic === "states") {
      const sameRegion = stateCapsByRegion[s.r].filter((c) => c !== s.c);
      const sameRegionNames = stateNamesByRegion[s.r].filter((n) => n !== s.n);
      if (form === "cap") {
        // rich stems (bee mode) embed a concrete locating clue, NSF-style:
        // official stems say "the state nicknamed X" / "whose largest city is Y",
        // not just a region label
        prompt = opts.rich
          ? `What is the capital of ${s.n}, the state nicknamed "${s.nick}"?`
          : `What is the capital of ${s.n}?`;
        answer = s.c; pools = [sameRegion, allStateCaps];
        accept = [s.c];
      } else if (form === "rev") {
        prompt = opts.rich
          ? (s.big
            ? `${s.c} is the capital of which state whose largest city is ${s.big}?`
            : `${s.c} is the capital of which state in the ${s.r}?`)
          : `${s.c} is the capital of which state?`;
        answer = s.n; pools = [sameRegionNames, allStateNames];
        accept = [s.n];
      } else if (form === "big") {
        prompt = opts.rich ? `${s.c} is the capital of ${s.n}, but what is its largest city?` : `What is the largest city in ${s.n}?`;
        answer = s.big;
        // the state's own capital first — that's the trap the real bee sets
        pools = [[s.c], (bigCityByRegion[s.r] || []).filter((b) => b !== s.big), allBigCities, allStateCaps];
        accept = [s.big];
        if (s.big === "New York City") accept.push("new york", "nyc");
      } else {
        prompt = `Which state is nicknamed "${s.nick}"?`;
        answer = s.n; pools = [sameRegionNames, allStateNames];
        accept = [s.n];
      }
      if (s.n === "Washington" && form === "cap") accept.push("olympia washington");
    } else if (fact.topic === "capitals") {
      const cont = countriesByCont[s.k].filter((c) => c.n !== s.n);
      const near = cont.filter((c) => Math.abs((c.ct || c.t) - (s.ct || s.t)) <= 1);
      if (form === "cap") {
        // official-style stems: an authored locating clue beats the largest-city
        // hook, which beats the bare continent label
        // clues that already start with "the" read "Canada, the second-largest
        // country…"; the rest get "the country …" ("the country north of …")
        const lead = (c) => (/^the /i.test(c) ? c : "the country " + c);
        const nm = s.n === "Georgia" ? "the country of Georgia" : art(s.n);
        prompt = opts.rich
          ? (s.clue
            ? `What is the capital of ${nm}, ${lead(s.clue)}?`
            : s.big
              ? `What is the capital of ${nm}, the country whose largest city is ${s.big}?`
              : `What is the capital of ${nm}, a country in ${s.k}?`)
          : `What is the capital of ${nm}?`;
        answer = s.c;
        pools = [near.map((c) => c.c), cont.map((c) => c.c), allCountries.map((c) => c.c)];
        // countries with more than one official capital: every real capital
        // is a correct typed answer (the app's own fun facts say so)
        accept = [s.c].concat(OTHER_CAPITALS[s.n] || []);
        if (s.c === "Washington, D.C.") accept.push("washington dc", "washington", "dc");
        if (s.c === "New Delhi") accept.push("delhi");
        if (s.c === "Mexico City") accept.push("mexico");
        if (s.c === "Ulaanbaatar") accept.push("ulan bator");
        if (s.c === "Kyiv") accept.push("kiev");
        if (s.c === "Nukuʻalofa") accept.push("nukualofa");
      } else if (form === "big") {
        prompt = opts.rich ? `${s.c} is the capital of ${art(s.n)}, but what is its largest city?` : `What is the largest city in ${art(s.n)}?`;
        answer = s.big;
        // capital first (the trap), then other famous non-capital big cities
        pools = [[s.c], allCountries.filter((c) => c.big && c.big !== s.big).map((c) => c.big), cont.map((c) => c.c)];
        accept = [s.big];
        if (s.big === "New York City") accept.push("new york", "nyc");
        if (s.big === "Ho Chi Minh City") accept.push("saigon", "ho chi minh");
        if (s.big === "São Paulo") accept.push("sao paolo");
        if (s.big === "Mumbai") accept.push("bombay");
        if (s.big === "Yangon") accept.push("rangoon");
        if (s.big === "Johannesburg") accept.push("joburg");
      } else {
        prompt = opts.rich
          ? (s.clue
            ? `${s.c} is the capital of which country, ${s.clue}?`
            : `${s.c} is the capital of which country in ${s.k}?`)
          : `${s.c} is the capital of which country?`;
        answer = s.n;
        pools = [near.map((c) => c.n), cont.map((c) => c.n), allCountries.map((c) => c.n)];
        accept = countryAccept(s.n);
      }
    } else if (fact.topic === "flags") {
      const cont = countriesByCont[s.k].filter((c) => c.n !== s.n);
      const near = cont.filter((c) => Math.abs(c.t - s.t) <= 1);
      // classic confusable flags (Ireland/Ivory Coast, Poland/Indonesia, ...)
      // listed in s.sim come first — real flag rounds are won on these pairs
      let simCountries = (s.sim || []).map((n) => allCountries.find((c) => c.n === n)).filter(Boolean);
      // Near-identical flags (same stripes, a tiny emblem the only difference)
      // are unfair side by side for a young child at a thumbnail size. Below
      // tier 4 they never appear together; from tier 4 the classic pairs come
      // back as deliberate spot-the-difference challenges.
      const twins = new Set();
      if ((s.ft || s.t) < 4) {
        for (const g of FLAG_TWINS) if (g.includes(s.n)) g.forEach((n) => twins.add(n));
        simCountries = simCountries.filter((c) => !twins.has(c.n));
      }
      const notTwin = (c) => !twins.has(c.n);
      if (form === "flag") {
        prompt = "Which country does this flag belong to?";
        media = { type: "flag", code: flagCode(s.f), emoji: s.f };
        answer = s.n;
        pools = [simCountries, near.filter(notTwin), cont.filter(notTwin), allCountries.filter(notTwin)].map((p) => p.map((c) => c.n));
        accept = countryAccept(s.n);
      } else {
        prompt = `Which of these is the flag of ${art(s.n)}?`;
        answer = s.f;
        // neutral alt text: a country name here would let VoiceOver (or a
        // failed image) read out the answer key
        optionMedia = (label) => ({ type: "flag", code: flagCode(label), emoji: label, alt: "Flag option" });
        pools = [simCountries, near.filter(notTwin), cont.filter(notTwin), allCountries.filter(notTwin)].map((p) => p.map((c) => c.f));
        accept = []; // never typed
      }
    } else {
      // curated item
      const it = fact.item;
      prompt = it.q;
      answer = it.a;
      pools = [it.d];
      // odd-item-out only makes sense with visible options — never typed
      accept = it.odd ? [] : [it.a].concat(it.alt || []);
    }

    const q = {
      factId: fact.id, topic: fact.topic, tier: fact.tier, form,
      prompt, fact: fact.fact, media,
      speak: prompt,
    };

    if (typed && accept.length) {
      q.kind = "typed";
      q.answerText = answer;
      q.accept = accept.map(normalize);
    } else {
      q.kind = "mcq";
      // accept list rides along even on MCQ — the post-miss retype step
      // (corrective retrieval) checks against it
      if (accept.length) q.accept = accept.map(normalize);
      // vs = two-option comparative; odd = three-option odd-item-out.
      // opts.optionCount caps total options (NSF mocks use 3, like the real exam).
      let nOpts = fact.item && fact.item.vs ? 1 : fact.item && fact.item.odd ? 2 : 3;
      if (opts.optionCount && !(fact.item && fact.item.vs)) nOpts = Math.min(nOpts, opts.optionCount - 1);
      const distractors = pickDistinct(pools, nOpts, [answer]);
      const options = shuffle(
        [answer].concat(distractors).map((label) => {
          const o = { label };
          if (optionMedia) o.media = optionMedia(label);
          return o;
        })
      );
      q.options = options;
      q.answerIdx = options.findIndex((o) => optKey(o.label) === optKey(answer));
      q.answerText = answer;
    }
    return q;
  }

  // Flags that differ only by a small emblem or a shade (flags audit, sourced
  // to each flag's Wikipedia "similar flags" note).
  const FLAG_TWINS = [
    ["Colombia", "Ecuador", "Venezuela"],
    ["Senegal", "Mali", "Cameroon", "Guinea"],
    ["Slovenia", "Slovakia", "Serbia", "Croatia", "Russia"],
    ["Ireland", "Ivory Coast", "Italy"],
    ["Indonesia", "Monaco", "Poland"],
    ["Chad", "Romania"],
    ["Netherlands", "Luxembourg"],
    ["Australia", "New Zealand"],
  ];
  // Other official capitals, accepted for "What is the capital of X?".
  const OTHER_CAPITALS = {
    "Bolivia": ["sucre", "la paz"],
    "South Africa": ["cape town", "capetown", "bloemfontein"],
    "Sri Lanka": ["colombo", "kotte", "sri jayewardenepura kotte"],
    "Eswatini": ["lobamba"],
    "Kiribati": ["tarawa"],
    "Luxembourg": ["luxembourg city"],
    "Monaco": ["monaco ville"],
  };
  function countryAccept(name) {
    const extra = {
      "United States": ["usa", "us", "united states of america", "america"],
      "United Kingdom": ["uk", "great britain", "britain", "england"],
      "United Arab Emirates": ["uae", "emirates"],
      "Czechia": ["czech republic"],
      "Democratic Republic of the Congo": ["dr congo", "drc", "congo", "democratic republic of congo", "congo kinshasa"],
      "The Bahamas": ["bahamas"],
      "Ivory Coast": ["cote divoire", "cote d ivoire"],
      "Papua New Guinea": ["png"],
      "Turkey": ["turkiye"],
      "Netherlands": ["holland"],
      "Myanmar": ["burma"],
      "Vietnam": ["viet nam"],
      "Eswatini": ["swaziland"],
      "South Korea": ["korea", "republic of korea"],
      "North Korea": ["dprk"],
      "Republic of the Congo": ["congo", "congo brazzaville", "republic of congo"],
      "Timor-Leste": ["east timor", "timor leste"],
      "North Macedonia": ["macedonia"],
      "Cabo Verde": ["cape verde"],
      "Sao Tome and Principe": ["sao tome"],
      "Micronesia": ["federated states of micronesia"],
      "Vatican City": ["vatican", "holy see"],
      "Gambia": ["the gambia"],
      "Central African Republic": ["car"],
    };
    return [name].concat(extra[name] || []);
  }

  // Progressive-clue pyramid question (IAC buzzer-round style).
  function buildPyramid(p, idx) {
    return {
      factId: null, topic: "pyramid", tier: p.t, form: "clues",
      kind: "clues", clues: p.clues,
      prompt: "Mystery place! Answer as early as you dare…",
      speak: p.clues[0],
      answerText: p.a,
      accept: [p.a].concat(p.alt || []).map(normalize),
      fact: null, pyIdx: idx,
    };
  }

  // Pick the least-practiced form for variety, preferring recall directions
  // the learner hasn't seen lately.
  function nextForm(fact, seenForms) {
    let best = fact.forms[0], bestCount = Infinity;
    for (const f of fact.forms) {
      const c = (seenForms && seenForms[f]) || 0;
      if (c < bestCount) { best = f; bestCount = c; }
    }
    return best;
  }

  // Old fact id → current fact id, for questions that were reworded before
  // ids were pinned. Engine.migrate() moves saved progress along these.
  // Recovered from git history (v17–v19 rewordings of the same fact).
  const ALIASES = {
    "india:1feze0d": "india:wkysec",          // Kangchenjunga, highest peak in India
    "relate:1c667og": "relate:v9xm22",        // Egypt spans Africa and Asia
    "worldphys:7m25u2": "worldphys:1q3jeqk",  // Seine through Paris
    "worldphys:wpee7p": "worldphys:1q3g7o",   // Thames through London
    "worldphys:yz30x8": "worldphys:1x75nfr",  // East Siberian Sea → Arctic
    "india:r2nlhp": "cc:India",               // "capital of India?" now asked by the capitals topic
  };
  // v18 deleted 7 core facts (Grand Canyon state, Mount Rushmore state, Statue
  // of Liberty from France, most populous country, equator hemispheres,
  // Australia country+continent, Bolivia's two capitals). They were restored
  // in v20 with their original wording, so their original ids, and the
  // child's progress on them, came back unchanged.

  return { facts, byId, byTopic, buildQuestion, buildPyramid, nextForm, normalize, match, flagCode, hash, ALIASES };
})();
