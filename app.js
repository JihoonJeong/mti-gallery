// MTI gallery — render each model's 4-axis temperament as a radar card.
const AXES = ["reactivity", "compliance", "sociality", "resilience"];
const ANGLE = { reactivity: -90, compliance: 0, sociality: 90, resilience: 180 }; // top/right/bottom/left
const INITIAL = { reactivity: "R", compliance: "C", sociality: "S", resilience: "E" };

function pt(ax, frac, cx, cy, R) {
  const a = (ANGLE[ax] * Math.PI) / 180;
  return [cx + R * frac * Math.cos(a), cy + R * frac * Math.sin(a)];
}

function radar(axes) {
  const S = 200, cx = S / 2, cy = S / 2, R = 76;
  let rings = "";
  for (const f of [0.25, 0.5, 0.75, 1]) rings += `<circle class="ring" cx="${cx}" cy="${cy}" r="${R * f}"/>`;
  let spokes = "", labels = "", dots = "";
  for (const ax of AXES) {
    const [ex, ey] = pt(ax, 1, cx, cy, R);
    spokes += `<line class="axis" x1="${cx}" y1="${cy}" x2="${ex}" y2="${ey}"/>`;
    const [lx, ly] = pt(ax, 1.2, cx, cy, R);
    labels += `<text class="lbl" x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle">${INITIAL[ax]}</text>`;
    const s = axes[ax] ? axes[ax].score : 0;
    const [dx, dy] = pt(ax, s, cx, cy, R);
    dots += `<circle class="dot" cx="${dx}" cy="${dy}" r="2.4"/>`;
  }
  const poly = AXES.map((ax) => pt(ax, axes[ax] ? axes[ax].score : 0, cx, cy, R).join(",")).join(" ");
  return `<svg viewBox="0 0 ${S} ${S}" width="100%" height="auto" aria-label="temperament radar">${rings}${spokes}<polygon class="poly" points="${poly}"/>${dots}${labels}</svg>`;
}

function card(m) {
  const poles = AXES.filter((ax) => m.axes[ax]).map((ax) => {
    const p = m.axes[ax].pole;
    return `<span class="chip ${p !== "neutral" ? "hi" : ""}" title="${ax} z=${m.axes[ax].z}">${p}</span>`;
  }).join("");
  const meta = [m.family, m.size_b ? m.size_b + "B" : "", m.type].filter(Boolean).join(" · ");
  return `<div class="card"><h3>${m.model}</h3><div class="meta">${meta}</div>${radar(m.axes)}<div class="poles">${poles}</div></div>`;
}

fetch("data/profiles.json")
  .then((r) => r.json())
  .then((d) => {
    document.getElementById("cohort").textContent = d.cohort;
    document.getElementById("grid").innerHTML = d.models.map(card).join("");
  })
  .catch((e) => {
    document.getElementById("grid").innerHTML = `<div class="card">Failed to load profiles.json — run gen_gallery_data.py. (${e})</div>`;
  });

// 명함첩 — render opt-in published creature cards.
function creatureCard(c) {
  const x = (c.x_mti && c.x_mti.axes) || {};
  const poles = AXES.filter((a) => x[a]).map((a) =>
    `<span class="chip ${x[a].pole !== "neutral" ? "hi" : ""}" title="${a} z=${x[a].z}">${x[a].pole}</span>`).join("");
  const meta = [c.brain, c.tagline].filter(Boolean).join(" · ");
  const intro = c.owner_intro ? `<p class="intro">${c.owner_intro}</p>` : "";
  return `<div class="card"><h3>${c.name}</h3><div class="meta">${meta}</div>${radar(x)}<div class="poles">${poles}</div>${intro}</div>`;
}

fetch("data/cards.json")
  .then((r) => r.json())
  .then((d) => {
    const cards = (d && d.cards) || [];
    const grid = document.getElementById("cards");
    const empty = document.getElementById("cards-empty");
    if (cards.length) grid.innerHTML = cards.map(creatureCard).join("");
    else if (empty) empty.style.display = "";
  })
  .catch(() => {});
