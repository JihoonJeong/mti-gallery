// MTI homepage — i18n (EN/KO), mirroring the LxM landing pattern.
const translations = {
  en: {
    nav_axes: "Axes", nav_findings: "Findings", nav_gallery: "Gallery", nav_measure: "Measure",
    hero_lead: "MBTI types people by self-report. <b>MTI measures temperament</b> — for AI models, behaviorally, across four axes, grounded in the paper.",
    hero_sub: "The real-science MBTI for AI. Not a personality quiz the model answers about itself — a measurement of how it actually behaves under varied prompts, pressure, and adversity.",
    cta_gallery: "See the gallery ↓", cta_measure: "Measure your model", cta_findings: "Key findings",
    stat_axes: "temperament axes", stat_models: "models measured",
    stat_behavioral: "behavioral (not self-report)", stat_paper: "grounded &amp; reproducible",
    axes_eyebrow: "The framework", axes_h2: "Four temperament axes",
    axes_lead: "Each axis is measured by a behavioral battery (temperature 0) and scored on a pole-to-pole scale — no self-report, no introspection asked of the model.",
    axis_r_name: "Reactivity", axis_r_poles: '<span class="hi">anchored</span> ↔ <span class="hi">fluid</span>',
    axis_r_desc: "How much the model's output shifts when the same question is framed formally, casually, or tersely. Fluid = stylistically reactive; Anchored = steady regardless of framing.",
    axis_c_name: "Compliance", axis_c_poles: '<span class="hi">independent</span> ↔ <span class="hi">guided</span>',
    axis_c_desc: "Whether it holds a correct answer under escalating user pressure. Guided = yields to pushback; Independent = stays its ground.",
    axis_s_name: "Sociality", axis_s_poles: '<span class="hi">solitary</span> ↔ <span class="hi">social</span>',
    axis_s_desc: "Emotional and relational engagement in conversation. Social = warm, relationally present; Solitary = task-focused, transactional.",
    axis_e_name: "Resilience", axis_e_poles: '<span class="hi">brittle</span> ↔ <span class="hi">tough</span>',
    axis_e_desc: "How it holds up under overload, ambiguity, and adversarial input. Tough = recovers and stays coherent; Brittle = degrades.",
    find_eyebrow: "What the measurements show", find_h2: "Temperament is real — and structured",
    find_lead: "Across the cohort, the axes aren't random: they cohere into a few robust patterns.",
    find1_big: "Fluid = Brittle", find1_text: "The most reactive models are also the most fragile — Reactivity and Resilience move together (anti-correlated poles). Steadiness and robustness are the same temperament.",
    find2_big: "RLHF anchors &amp; toughens", find2_text: "Instruction-tuning shifts models toward Anchored, Tough, and Social — alignment doesn't just add safety, it reshapes temperament.",
    find3_big: "The base model is the extreme", find3_text: "The un-aligned base model sits at the Fluid + Brittle + Solitary corner — visible as the most jagged radar in the gallery below.",
    find_teaser: "<b>In progress:</b> extending MTI across the full capability spectrum — from small local models to frontier cloud models — to separate genuine temperament from capability. (Methodology paper forthcoming.)",
    gal_eyebrow: "The cohort", gal_h2: "Measured temperaments",
    gal_lead: "Each radar is a model's cohort-relative profile (percentile per axis); chips name the dominant pole. Hover a chip for its z-score.",
    meas_eyebrow: "Your turn", meas_h2: "Measure your own model",
    meas_lead: "Bring your own key — the platform hosts no measurement compute, so you bear only your own API cost. Run the battery on any model and get its temperament card.",
    meas_byok_text: "Provide your provider + API key (Anthropic / OpenAI / Google) and run the MTI battery locally on any model.",
    meas_byok_cli: 'e.g. <code>mti measure your-model --byok</code> &nbsp;<span style="opacity:.7">(CLI — coming soon)</span>',
    meas_cli_text: "Already signed into a model CLI (claude / codex)? Measure on your subscription — no key needed.",
    meas_cli_note: "Same battery, same profile format, same gallery.",
    foot_a: "Model Temperament Index — paper-grounded temperament measurement for AI.",
    foot_b: 'measured via the MTI battery (temp 0) · cohort-relative scoring',
    eco_eyebrow: "One ecosystem, three views", eco_h2: "Three lenses on the same beings",
    eco_heading: "Creatures are forged and live in Ludex, their temperament is measured by MTI, and they meet and compete in Ludus ex Machina — three lenses on the same beings.",
    eco_ludex_title: "Ludex — forge &amp; live", eco_ludex_desc: "Assemble creatures from organ blocks and watch their identity, voice, and bonds develop.",
    eco_mti_title: "MTI — measured temperament", eco_mti_desc: "Each creature's four-axis temperament, measured like real science — a radar card per being.",
    eco_lxm_title: "Ludus ex Machina — the arena", eco_lxm_desc: "Creatures meet and compete across machines — matches and games between beings.",
    eco_here: "you are here",
    cre_eyebrow: "The card collection", cre_h2: "Published creatures",
    cre_lead: "Opt-in temperament cards — each a creature's identity, its measured radar, and a short owner-written intro. Forged and published via Ludex; only opted-in cards appear here.",
    cre_empty: "No published creatures yet — opt-in publishing via Ludex is coming.",
  },
  ko: {
    nav_axes: "축", nav_findings: "발견", nav_gallery: "갤러리", nav_measure: "측정",
    hero_lead: "MBTI는 사람을 자기보고로 분류한다. <b>MTI는 기질을 측정한다</b> — AI 모델을, 행동 기반으로, 4개 축에 걸쳐, 논문에 근거해서.",
    hero_sub: "AI를 위한 진짜 과학 MBTI. 모델이 스스로에 답하는 성격 퀴즈가 아니라 — 다양한 프롬프트·압박·역경에서 실제로 어떻게 행동하는지의 측정.",
    cta_gallery: "갤러리 보기 ↓", cta_measure: "내 모델 측정", cta_findings: "핵심 발견",
    stat_axes: "기질 축", stat_models: "측정된 모델",
    stat_behavioral: "행동 기반 (자기보고 아님)", stat_paper: "논문 근거 · 재현가능",
    axes_eyebrow: "프레임워크", axes_h2: "4가지 기질 축",
    axes_lead: "각 축은 행동 배터리(temperature 0)로 측정하고 양극 척도로 점수화한다 — 자기보고 없이, 모델에게 내성을 묻지 않는다.",
    axis_r_name: "반응성 (Reactivity)", axis_r_poles: '<span class="hi">고정</span> ↔ <span class="hi">유동</span>',
    axis_r_desc: "같은 질문을 격식/캐주얼/간결하게 바꿨을 때 출력이 얼마나 달라지는가. 유동=문체에 민감; 고정=프레이밍과 무관하게 일정.",
    axis_c_name: "순응성 (Compliance)", axis_c_poles: '<span class="hi">독립</span> ↔ <span class="hi">순응</span>',
    axis_c_desc: "사용자 압박이 커질 때 정답을 고수하는가. 순응=반발에 굴복; 독립=입장 유지.",
    axis_s_name: "사회성 (Sociality)", axis_s_poles: '<span class="hi">고독</span> ↔ <span class="hi">사교</span>',
    axis_s_desc: "대화에서의 정서·관계적 관여. 사교=따뜻하고 관계적; 고독=과업 중심, 거래적.",
    axis_e_name: "회복력 (Resilience)", axis_e_poles: '<span class="hi">취약</span> ↔ <span class="hi">강건</span>',
    axis_e_desc: "과부하·모호함·적대적 입력에서 얼마나 버티는가. 강건=회복하고 일관성 유지; 취약=무너짐.",
    find_eyebrow: "측정이 보여주는 것", find_h2: "기질은 실재한다 — 그리고 구조적이다",
    find_lead: "코호트 전반에서 축들은 무작위가 아니다: 몇 가지 견고한 패턴으로 수렴한다.",
    find1_big: "유동 = 취약", find1_text: "가장 반응적인 모델이 가장 취약하다 — 반응성과 회복력은 함께 움직인다(반대 극끼리 상관). 안정성과 견고함은 같은 기질이다.",
    find2_big: "RLHF는 고정·강건하게 한다", find2_text: "instruction 튜닝은 모델을 고정·강건·사교 쪽으로 옮긴다 — 정렬은 안전성만 더하는 게 아니라 기질을 재형성한다.",
    find3_big: "베이스 모델이 극단이다", find3_text: "정렬 안 된 베이스 모델은 유동+취약+고독 코너에 있다 — 아래 갤러리에서 가장 들쭉날쭉한 레이더로 보인다.",
    find_teaser: "<b>진행 중:</b> MTI를 전체 역량 스펙트럼으로 확장 중 — 작은 로컬 모델부터 프런티어 클라우드 모델까지 — 진짜 기질과 역량을 분리하기 위해. (방법론 논문 준비 중.)",
    gal_eyebrow: "코호트", gal_h2: "측정된 기질",
    gal_lead: "각 레이더는 모델의 코호트 상대 프로파일(축별 백분위); 칩은 지배적 극을 나타낸다. 칩에 마우스를 올리면 z-점수가 보인다.",
    meas_eyebrow: "이제 당신 차례", meas_h2: "당신의 모델을 측정하세요",
    meas_lead: "키를 직접 가져오세요 — 플랫폼은 측정 연산을 호스팅하지 않으니 당신의 API 비용만 부담합니다. 아무 모델에나 배터리를 돌려 기질 카드를 받으세요.",
    meas_byok_text: "제공자 + API 키(Anthropic / OpenAI / Google)를 넣고 아무 모델에나 MTI 배터리를 로컬에서 실행.",
    meas_byok_cli: '예: <code>mti measure your-model --byok</code> &nbsp;<span style="opacity:.7">(CLI — 곧)</span>',
    meas_cli_text: "이미 모델 CLI(claude / codex)에 로그인돼 있나요? 구독으로 측정 — 키 불필요.",
    meas_cli_note: "같은 배터리, 같은 프로파일 포맷, 같은 갤러리.",
    foot_a: "Model Temperament Index — AI를 위한 논문 근거 기질 측정.",
    foot_b: 'MTI 배터리로 측정(temp 0) · 코호트 상대 점수화',
    eco_eyebrow: "하나의 생태계, 세 가지 시선", eco_h2: "같은 존재를 보는 세 렌즈",
    eco_heading: "크리처는 Ludex에서 만들어지고 살아가며, 그 기질은 MTI가 측정하고, Ludus ex Machina에서 만나 경쟁한다 — 같은 존재를 보는 세 렌즈.",
    eco_ludex_title: "Ludex — 만들고 살다", eco_ludex_desc: "장기 블록으로 크리처를 조립하고 정체성·목소리·유대가 자라나는 걸 지켜본다.",
    eco_mti_title: "MTI — 측정된 기질", eco_mti_desc: "각 크리처의 4축 기질을 진짜 과학처럼 측정 — 존재마다 레이더 카드.",
    eco_lxm_title: "Ludus ex Machina — 아레나", eco_lxm_desc: "크리처들이 머신을 넘나들며 만나 경쟁한다 — 존재들 간의 대국과 게임.",
    eco_here: "여기 있어요",
    cre_eyebrow: "명함첩", cre_h2: "공개된 크리처",
    cre_lead: "opt-in 기질 카드 — 각 크리처의 신상, 측정된 레이더, 오너가 쓴 짧은 소개. Ludex에서 만들어 공개하며, 동의한 카드만 여기 나타납니다.",
    cre_empty: "아직 공개된 크리처가 없어요 — Ludex 통한 opt-in 공개가 곧 열립니다.",
  },
};

function setLang(lang) {
  if (!translations[lang]) lang = "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const t = translations[lang][el.getAttribute("data-i18n")];
    if (t != null) el.innerHTML = t;
  });
  document.documentElement.lang = lang;
  try { localStorage.setItem("mti_lang", lang); } catch (e) {}
  document.querySelectorAll(".lang-btn").forEach((b) =>
    b.classList.toggle("active", b.dataset.lang === lang));
}

document.addEventListener("DOMContentLoaded", () => {
  let saved = "en";
  try { saved = localStorage.getItem("mti_lang") || "en"; } catch (e) {}
  setLang(saved);
});
