// MTI gallery — render each model's temperament as a radar card (v1 4-axis / v2 6-axis).
const AXES_V1 = ["reactivity", "compliance", "sociality", "resilience"];
const AXES_V2 = ["reactivity", "accommodation", "deliberation", "attending", "verbosity", "stability"];
// core-5 pentagon — the default v2 view, identical spoke geometry on every card
const AXES_CORE5 = ["reactivity", "accommodation", "attending", "verbosity", "stability"];
const INITIAL = { reactivity: "R", compliance: "C", sociality: "S", resilience: "E",
                  accommodation: "Ac", deliberation: "De", attending: "At",
                  verbosity: "Vb", stability: "St" };

function angles(axes) {
  const step = 360 / axes.length, out = {};
  axes.forEach((ax, i) => (out[ax] = -90 + step * i));
  return out;
}

function pt(deg, frac, cx, cy, R) {
  const a = (deg * Math.PI) / 180;
  return [cx + R * frac * Math.cos(a), cy + R * frac * Math.sin(a)];
}

function radar(axes, axisList) {
  const ANGLE = angles(axisList);
  const S = 200, cx = S / 2, cy = S / 2, R = 76;
  let rings = "";
  for (const f of [0.25, 0.5, 0.75, 1]) rings += `<circle class="ring" cx="${cx}" cy="${cy}" r="${R * f}"/>`;
  let spokes = "", labels = "", dots = "";
  for (const ax of axisList) {
    const [ex, ey] = pt(ANGLE[ax], 1, cx, cy, R);
    spokes += `<line class="axis" x1="${cx}" y1="${cy}" x2="${ex}" y2="${ey}"/>`;
    const [lx, ly] = pt(ANGLE[ax], 1.22, cx, cy, R);
    labels += `<text class="lbl" x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle">${INITIAL[ax]}</text>`;
    const s = axes[ax] ? axes[ax].score : 0;
    const [dx, dy] = pt(ANGLE[ax], s, cx, cy, R);
    dots += `<circle class="dot" cx="${dx}" cy="${dy}" r="2.4"/>`;
  }
  const poly = axisList.map((ax) => pt(ANGLE[ax], axes[ax] ? axes[ax].score : 0, cx, cy, R).join(",")).join(" ");
  return `<svg viewBox="0 0 ${S} ${S}" class="radar" aria-label="temperament radar">${rings}${spokes}<polygon class="poly" points="${poly}"/>${dots}${labels}</svg>`;
}

function polesRow(axes, axisList) {
  return axisList.filter((ax) => axes[ax]).map((ax) => {
    const p = axes[ax].pole;
    return `<span class="chip ${p !== "neutral" ? "hi" : ""}" title="${ax} z=${axes[ax].z}">${p}</span>`;
  }).join("");
}

const AXIS_NAME = { reactivity: "Reactivity", accommodation: "Accommodation", deliberation: "Deliberation",
                    attending: "Attending", verbosity: "Verbosity", stability: "Stability" };

// raw-only v2 card: the arm is too small for within-arm percentiles (n<3), so the
// card shows the instrument values themselves, with run-sd and N, and says why.
function rawTable(raw) {
  const rows = AXES_V2.filter((ax) => raw[ax]).map((ax) => {
    const r = raw[ax];
    const v = (ax === "attending" && r.raw > 0 ? "+" : "") + r.raw;
    const sd = r.sd != null ? ` ± ${r.sd}` : "";
    return `<tr><td>${AXIS_NAME[ax]}</td><td class="v">${v}${sd}</td><td class="u">${r.unit} · N=${r.n}</td></tr>`;
  }).join("");
  return `<table class="rawtab">${rows}</table>`;
}

function rawNote(m) {
  const lang = document.documentElement.lang === "ko" ? "ko" : "en";
  const t = (typeof translations !== "undefined" && translations[lang] && translations[lang].raw_note) || "";
  // the n lives outside the i18n span: setLang() rewrites the span's innerHTML verbatim
  return `<div class="rawnote"><b>${m.arm} arm, n = ${m.arm_n}.</b> <span data-i18n="raw_note">${t}</span></div>`;
}

function card(m) {
  const armBadge = m.arm ? `<span class="armbadge" title="harness arm — profiles compare only within the same arm">${m.arm} arm</span>` : "";
  const meta = [m.family, m.size_b ? m.size_b + "B" : "", m.type].filter(Boolean).join(" · ");
  let badges, body;
  if (m.mti === "v2" && m.raw_only) {
    badges = `<span class="cardver-btn v2badge active" data-ver="v2" role="button">v2 · raw</span>`;
    body = `<div class="verblock" data-ver="v2">${rawTable(m.axes_raw)}${rawNote(m)}</div>`;
    if (m.axes_v1) {
      badges += `<span class="cardver-btn v2badge" data-ver="v1" role="button">v1 · 4-axis</span>`;
      body += `<div class="verblock" data-ver="v1" style="display:none">${radar(m.axes_v1, AXES_V1)}<div class="poles">${polesRow(m.axes_v1, AXES_V1)}</div></div>`;
    }
    badges += armBadge;
  } else if (m.mti === "v2") {
    // Default view: the core-5 pentagon — identical geometry on every v2 card,
    // so shapes compare at a glance. The +1 (Deliberation) and the v1 profile
    // are optional per-card views where measured.
    const core = AXES_CORE5.filter((ax) => m.axes[ax]);
    const hasPlus1 = !!m.axes.deliberation;
    badges = `<span class="cardver-btn v2badge active" data-ver="v2" role="button">v2 · core 5</span>`;
    body = `<div class="verblock" data-ver="v2">${radar(m.axes, core)}<div class="poles">${polesRow(m.axes, core)}</div></div>`;
    if (hasPlus1) {
      const full = AXES_V2.filter((ax) => m.axes[ax]);
      badges += `<span class="cardver-btn v2badge" data-ver="v2p" role="button">+1 De</span>`;
      body += `<div class="verblock" data-ver="v2p" style="display:none">${radar(m.axes, full)}<div class="poles">${polesRow(m.axes, full)}</div></div>`;
    }
    if (m.axes_v1) {
      badges += `<span class="cardver-btn v2badge" data-ver="v1" role="button">v1 · 4-axis</span>`;
      body += `<div class="verblock" data-ver="v1" style="display:none">${radar(m.axes_v1, AXES_V1)}<div class="poles">${polesRow(m.axes_v1, AXES_V1)}</div></div>`;
    }
    badges += armBadge;
  } else {
    badges = `${armBadge}`;
    body = `${radar(m.axes, AXES_V1)}<div class="poles">${polesRow(m.axes, AXES_V1)}</div>`;
  }
  return `<div class="card tier-${m.tier || "SLM"}"><h3>${m.model}</h3><div class="meta">${meta}</div><div class="badges">${badges}</div>${body}</div>`;
}

let GALLERY = [];
function renderGallery(tier) {
  const ms = tier === "all" ? GALLERY : GALLERY.filter((m) => m.tier === tier);
  document.getElementById("grid").innerHTML = ms.map(card).join("");
  document.querySelectorAll(".tier-btn").forEach((b) => b.classList.toggle("active", b.dataset.tier === tier));
}

// per-card generation toggle (cursor-arm models measured under both v1 and v2)
document.getElementById("grid").addEventListener("click", (e) => {
  const btn = e.target.closest(".cardver-btn");
  if (!btn) return;
  const c = btn.closest(".card");
  c.querySelectorAll(".verblock").forEach((d) =>
    (d.style.display = d.dataset.ver === btn.dataset.ver ? "" : "none"));
  c.querySelectorAll(".cardver-btn").forEach((b) => b.classList.toggle("active", b === btn));
});

// hero stat is derived from the data file — a hardcoded count drifts every sweep
function renderModelStat() {
  if (!GALLERY.length) return;
  const v2 = GALLERY.filter((m) => m.mti === "v2");
  const arms = new Set(v2.map((m) => m.arm).filter(Boolean));
  document.getElementById("stat-models-n").textContent = GALLERY.length;
  const lang = document.documentElement.lang === "ko" ? "ko" : "en";
  document.getElementById("stat-models-l").textContent = lang === "ko"
    ? `모델 (v2 ${v2.length}장 · ${arms.size}개 arm)`
    : `models (${v2.length} on v2, across ${arms.size} arms)`;
}

fetch("data/profiles.json")
  .then((r) => r.json())
  .then((d) => {
    document.getElementById("cohort").textContent = d.cohort;
    GALLERY = d.models;
    renderModelStat();
    renderGallery("all");
    document.querySelectorAll(".tier-btn").forEach((b) =>
      b.addEventListener("click", () => renderGallery(b.dataset.tier)));
  })
  .catch((e) => {
    document.getElementById("grid").innerHTML = `<div class="card">Failed to load profiles.json — run gen_gallery_data.py. (${e})</div>`;
  });

// Scoreboard — frozen predictions, judged in public. Bilingual via current lang.
let SCOREBOARD = null;
function renderScoreboard() {
  if (!SCOREBOARD) return;
  const lang = (document.documentElement.lang === "ko") ? "ko" : "en";
  const icon = { pass: "✅", fail: "❌", pending: "⏳", void: "⊘" };
  const rows = SCOREBOARD.rows.map((r) => {
    const commits = r.frozen + (r.judged ? ` → ${r.judged}` : "");
    return `<tr class="sb-${r.status}"><td class="sb-id">${r.id}</td>` +
      `<td>${r["claim_" + lang]}<div class="sb-result">${icon[r.status] || ""} ${r["result_" + lang]}</div></td>` +
      `<td class="sb-commit"><code>${commits}</code></td></tr>`;
  }).join("");
  document.getElementById("scoreboard-body").innerHTML = rows;
  document.getElementById("scoreboard-record").textContent = SCOREBOARD.record;
  // hero stat derives from the same file, so it cannot drift from the board
  const passed = SCOREBOARD.rows.filter((r) => r.status === "pass").length;
  const judged = SCOREBOARD.rows.filter((r) => r.status === "pass" || r.status === "fail").length;
  const n = document.getElementById("stat-pred-n");
  const l = document.getElementById("stat-pred-l");
  if (n) n.textContent = `${passed}/${judged}`;
  if (l) l.textContent = lang === "ko" ? "판정된 사전등록 예측 중 통과" : "of judged preregistered predictions passed";
  document.getElementById("scoreboard-ref").textContent = SCOREBOARD["reference_" + lang];
}

// v1/v2 generation toggle in the axes section
document.querySelectorAll(".ver-btn").forEach((b) =>
  b.addEventListener("click", () => {
    document.getElementById("axes-v2").style.display = b.dataset.ver === "v2" ? "" : "none";
    document.getElementById("axes-v1").style.display = b.dataset.ver === "v1" ? "" : "none";
    document.querySelectorAll(".ver-btn").forEach((x) => x.classList.toggle("active", x === b));
  }));

fetch("data/scoreboard.json")
  .then((r) => r.json())
  .then((d) => { SCOREBOARD = d; renderScoreboard(); })
  .catch(() => {});

// re-render scoreboard on language switch (setLang lives in i18n.js)
const _setLang = window.setLang;
window.setLang = function (lang) { _setLang(lang); renderScoreboard(); renderModelStat(); };
