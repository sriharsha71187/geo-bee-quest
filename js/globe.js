/* GeoBee Quest — the spinning globe in Learn.
 *
 * An orthographic (looks-like-a-ball) view of Natural Earth countries from
 * js/globe-data.js, drawn as SVG with d3-geo. Drag to spin, pinch or scroll
 * to zoom, tap a country (or a dot, for the tiny ones) to pick it. It spins
 * slowly by itself until he first touches it.
 *
 *   const g = Globe.create(el, {
 *     onTap(name),            // a country or dot was tapped
 *     fillClass(name) → str,  // class for that country ("" = plain land)
 *     tappable(name) → bool,  // can it be picked (default: has a class)
 *     hover: true,            // show the name under the mouse (Explore only)
 *     labels: true,           // continent and ocean names
 *   });
 *   g.refresh()               re-apply classes
 *   g.select(name, cls)       outline one country (cls: "sel" | "good" | "bad")
 *   g.flyTo(name, ms)         turn (and zoom) to a country
 *   g.destroy()
 */
window.Globe = (function () {
  const NS = "http://www.w3.org/2000/svg";
  const OCEANS = [["Pacific Ocean", -150, 8], ["Pacific Ocean", 170, -25], ["Atlantic Ocean", -38, 22], ["Atlantic Ocean", -18, -28],
    ["Indian Ocean", 78, -22], ["Arctic Ocean", 10, 82], ["Southern Ocean", 40, -62]];
  const CONTINENTS = [["North America", -102, 46], ["South America", -60, -14], ["Europe", 18, 53], ["Africa", 20, 6],
    ["Asia", 92, 46], ["Australia", 134, -24], ["Antarctica", 20, -80]];

  function create(el, opts) {
    opts = opts || {};
    const d3 = window.d3, G = window.GEO_GLOBE;
    const feats = window.topojson.feature(G.topo, G.topo.objects.countries).features;
    const byName = {};
    feats.forEach((f) => (byName[f.properties.name] = f));
    const small = new Set(G.small);
    // dot positions: tiny countries not in the 110m set, plus tiny shapes
    const dots = Object.entries(G.dots).map(([n, c]) => ({ n, c }))
      .concat(G.small.map((n) => ({ n, c: d3.geoCentroid(byName[n]), shape: true })));
    const tappable = opts.tappable || ((n) => !!fillOf(n));
    const fillOf = (n) => (opts.fillClass ? opts.fillClass(n) : "") || "";

    el.innerHTML = "";
    el.classList.add("globe-wrap");
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("class", "globe-svg");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "A globe of the world. Drag to spin it, tap a country to learn about it.");
    el.appendChild(svg);
    const tip = document.createElement("div");
    tip.className = "globe-tip"; tip.hidden = true;
    el.appendChild(tip);
    const mk = (tag, cls, parent) => { const e = document.createElementNS(NS, tag); if (cls) e.setAttribute("class", cls); (parent || svg).appendChild(e); return e; };

    let size = 0, R0 = 0, zoom = 1, rot = [-15, -18, 0], spinning = true, raf = 0, anim = null;
    const projection = d3.geoOrthographic().clipAngle(90).precision(0.6);
    const path = d3.geoPath(projection);
    const graticule = d3.geoGraticule10();

    const defs = mk("defs");
    defs.innerHTML = `<radialGradient id="globe-sea" cx="38%" cy="32%" r="75%">
        <stop offset="0%" stop-color="#bfe3f2"/><stop offset="70%" stop-color="#7fc0dd"/><stop offset="100%" stop-color="#5aa5c8"/></radialGradient>`;
    const sea = mk("path", "globe-sea");
    const grid = mk("path", "globe-grid");
    const gLand = mk("g", "globe-land");
    const paths = feats.map((f) => {
      const p = mk("path", "", gLand);
      p.dataset.name = f.properties.name;
      return p;
    });
    const gDots = mk("g", "globe-dots");
    const circles = dots.map((d) => {
      const c = mk("circle", "", gDots);
      c.dataset.name = d.n;
      return c;
    });
    const gLab = mk("g", "globe-labels");
    const labels = opts.labels === false ? [] : CONTINENTS.map(([t, x, y]) => ({ t, c: [x, y], k: "cont" }))
      .concat(OCEANS.map(([t, x, y]) => ({ t, c: [x, y], k: "ocean" })))
      .map((l) => { const e = mk("text", "globe-lab " + l.k, gLab); e.textContent = l.t; return { ...l, e }; });
    const sel = {};   // name → "sel" | "good" | "bad"

    function classes() {
      paths.forEach((p) => {
        const n = p.dataset.name, f = fillOf(n);
        p.setAttribute("class", [f || "g-plain", tappable(n) ? "g-tap" : "", sel[n] ? "g-" + sel[n] : ""].join(" ").trim());
      });
      circles.forEach((c) => {
        const n = c.dataset.name, f = fillOf(n);
        c.setAttribute("class", ["g-dot", f || "g-plain", sel[n] ? "g-" + sel[n] : ""].join(" ").trim());
        c.style.display = tappable(n) || sel[n] ? "" : "none";
      });
    }
    function layout() {
      const w = el.clientWidth || 320;
      // leave room for the controls above and below it
      size = Math.max(260, Math.min(w, 560, (window.innerHeight || 800) - 210));
      svg.setAttribute("viewBox", `0 0 ${size} ${size}`);
      svg.style.height = size + "px";
      R0 = size / 2 - 6;
      draw();
    }
    function draw() {
      projection.scale(R0 * zoom).translate([size / 2, size / 2]).rotate(rot);
      sea.setAttribute("d", path({ type: "Sphere" }));
      sea.setAttribute("fill", "url(#globe-sea)");
      grid.setAttribute("d", path(graticule) || "");
      paths.forEach((p, i) => p.setAttribute("d", path(feats[i]) || ""));
      const center = [-rot[0], -rot[1]];
      const r = Math.max(3.2, Math.min(7, 3 * Math.sqrt(zoom)));
      circles.forEach((c, i) => {
        const d = dots[i];
        const vis = d3.geoDistance(d.c, center) < Math.PI / 2 - 0.05;
        if (!vis) { c.setAttribute("r", 0); return; }
        const [x, y] = projection(d.c);
        c.setAttribute("cx", x.toFixed(1)); c.setAttribute("cy", y.toFixed(1)); c.setAttribute("r", r);
      });
      labels.forEach((l) => {
        const vis = d3.geoDistance(l.c, center) < Math.PI / 2 - 0.25;
        if (!vis) { l.e.setAttribute("display", "none"); return; }
        const [x, y] = projection(l.c);
        l.e.removeAttribute("display"); l.e.setAttribute("x", x.toFixed(1)); l.e.setAttribute("y", y.toFixed(1));
        l.e.setAttribute("font-size", (l.k === "cont" ? 12 : 11) * Math.min(1.6, Math.sqrt(zoom)));
      });
    }
    function frame() {
      raf = 0;
      // the screen was replaced: stop for good
      if (!svg.isConnected) { spinning = false; anim = null; window.removeEventListener("resize", onResize); return; }
      if (anim) {
        const t = Math.min(1, (performance.now() - anim.t0) / anim.ms), e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        rot = [anim.r0[0] + (anim.r1[0] - anim.r0[0]) * e, anim.r0[1] + (anim.r1[1] - anim.r0[1]) * e, 0];
        zoom = anim.z0 + (anim.z1 - anim.z0) * e;
        if (t >= 1) anim = null;
      } else if (spinning) rot = [rot[0] + 0.12, rot[1], 0];
      draw();
      if (anim || spinning) raf = requestAnimationFrame(frame);
    }
    const kick = () => { if (!raf) raf = requestAnimationFrame(frame); };
    const halt = () => { spinning = false; anim = null; };

    // ---- pointers: drag to spin, two fingers to zoom, tap to pick ----
    const pts = new Map();
    let down = null, pinch = null;
    const nameAt = (x, y) => {
      const t = document.elementFromPoint(x, y);
      return t && t.closest && t.closest("[data-name]") && svg.contains(t) ? t.closest("[data-name]").dataset.name : null;
    };
    svg.addEventListener("pointerdown", (e) => {
      halt();
      pts.set(e.pointerId, [e.clientX, e.clientY]);
      try { svg.setPointerCapture(e.pointerId); } catch (err) {}
      if (pts.size === 1) down = { x: e.clientX, y: e.clientY, t: Date.now(), moved: false, rot: rot.slice() };
      else if (pts.size === 2) { const [a, b] = [...pts.values()]; pinch = { d: Math.hypot(a[0] - b[0], a[1] - b[1]), z: zoom }; down = null; }
    });
    svg.addEventListener("pointermove", (e) => {
      if (!pts.has(e.pointerId)) {
        if (opts.hover && e.pointerType === "mouse") {
          const n = nameAt(e.clientX, e.clientY);
          if (n && tappable(n)) {
            const b = el.getBoundingClientRect();
            tip.textContent = n; tip.hidden = false;
            tip.style.left = e.clientX - b.left + 12 + "px"; tip.style.top = e.clientY - b.top + 12 + "px";
          } else tip.hidden = true;
        }
        return;
      }
      pts.set(e.pointerId, [e.clientX, e.clientY]);
      if (pinch && pts.size === 2) {
        const [a, b] = [...pts.values()];
        zoom = Math.max(1, Math.min(8, pinch.z * Math.hypot(a[0] - b[0], a[1] - b[1]) / pinch.d));
        kick(); return;
      }
      if (!down) return;
      const dx = e.clientX - down.x, dy = e.clientY - down.y;
      if (Math.abs(dx) + Math.abs(dy) > 6) down.moved = true;
      if (!down.moved) return;
      tip.hidden = true;
      const k = 180 / (Math.PI * R0 * zoom) * (size / (el.clientWidth || size));
      rot = [down.rot[0] + dx * k, Math.max(-85, Math.min(85, down.rot[1] - dy * k)), 0];
      kick();
    });
    const up = (e) => {
      if (!pts.has(e.pointerId)) return;
      pts.delete(e.pointerId);
      if (pts.size < 2) pinch = null;
      if (down && !down.moved && e.type === "pointerup" && Date.now() - down.t < 700) {
        const n = nameAt(e.clientX, e.clientY);
        if (n && tappable(n) && opts.onTap) opts.onTap(n);
      }
      down = null;
    };
    svg.addEventListener("pointerup", up);
    svg.addEventListener("pointercancel", up);
    svg.addEventListener("pointerleave", () => { tip.hidden = true; });
    svg.addEventListener("wheel", (e) => {
      e.preventDefault(); halt();
      zoom = Math.max(1, Math.min(8, zoom * Math.exp(-e.deltaY * 0.0015)));
      kick();
    }, { passive: false });

    const onResize = () => layout();
    window.addEventListener("resize", onResize);
    classes(); layout(); kick();

    function centerOf(n) {
      if (byName[n]) {
        // the biggest piece, so France means France and not French Guiana
        const f = byName[n], g = f.geometry;
        if (g.type === "MultiPolygon") {
          let best = null, area = -1;
          for (const poly of g.coordinates) {
            const a = d3.geoArea({ type: "Polygon", coordinates: poly });
            if (a > area) { area = a; best = poly; }
          }
          return { c: d3.geoCentroid({ type: "Polygon", coordinates: best }), a: d3.geoArea(f) };
        }
        return { c: d3.geoCentroid(f), a: d3.geoArea(f) };
      }
      const d = dots.find((x) => x.n === n);
      return d ? { c: d.c, a: 0 } : null;
    }
    return {
      refresh: classes,
      select(n, cls) {
        if (n == null) Object.keys(sel).forEach((k) => delete sel[k]);
        else if (cls) sel[n] = cls; else delete sel[n];
        // drawn last, so neighbours don't cover its outline
        if (n != null && cls) { const p = paths.find((x) => x.dataset.name === n); if (p) gLand.appendChild(p); }
        classes();
      },
      flyTo(n, ms, opt) {
        const m = centerOf(n); if (!m) return;
        halt();
        const r1 = [-m.c[0], Math.max(-70, Math.min(70, -m.c[1])), 0];
        // shortest way round
        let dl = r1[0] - rot[0]; dl = ((dl + 540) % 360) - 180;
        const z1 = opt && opt.keepZoom ? zoom : m.a === 0 || m.a < 0.0006 ? 3.2 : m.a < 0.004 ? 2.2 : m.a < 0.02 ? 1.5 : 1;
        anim = { t0: performance.now(), ms: ms == null ? 900 : ms, r0: rot.slice(), r1: [rot[0] + dl, r1[1], 0], z0: zoom, z1 };
        kick();
      },
      zoomBy(f) { halt(); zoom = Math.max(1, Math.min(8, zoom * f)); kick(); },
      reset() { halt(); anim = { t0: performance.now(), ms: 700, r0: rot.slice(), r1: rot.slice(), z0: zoom, z1: 1 }; kick(); },
      destroy() { if (raf) cancelAnimationFrame(raf); raf = 0; spinning = false; anim = null; window.removeEventListener("resize", onResize); },
      has: (n) => !!byName[n] || dots.some((d) => d.n === n),
      names: () => feats.map((f) => f.properties.name).concat(Object.keys(G.dots)),
    };
  }
  return { create };
})();
