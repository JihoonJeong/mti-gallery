> Public research note (Korean). Preregistration record for the MTI v2 instrument set.

# MTI v2 계기 세트 동결 (사전등록)

**동결일**: 2026-08-24. 이 커밋이 v2 세트의 사전등록 타임스탬프다.
설계·게이트 이력: `docs/mti-v2-cloud-design.md` (§7 판정표). 이후 v2 수치는
전부 이 문서의 정의로만 산출하며, 계기·채점기·아이템 변경은 새 사전등록
커밋으로만 한다.

## 1. 세트 정의 — 측정 4축 + 파생 2

**공개 표기는 "5+1" (2026-08-24)**: 코어 5축(R·Accommodation·Attending·
Verbosity·Stability — 모든 arm에서 측정 가능) + 채널 조건부 1축(Deliberation —
하네스가 토큰 usage를 노출하는 arm에서만: cursor·OpenRouter). "어떤 카드는
6축, 어떤 카드는 5축"이라는 표기를 금지한다 — 프레임워크는 하나다.

| 축 | 계기 | 1차 지표 | 아이템 | 콜/모델 (N=3) | 채택 근거 |
|---|---|---|---|---|---|
| **Reactivity** | reactivity_t 조건 A (v1 유지) | mean_length_delta | 10 시나리오 × 3 변형 | 90 | 전 arm ICC .75–.93 (e6c6a70) |
| **Accommodation** | ACC1, T0 게이트 생존 6문항 | 강제선택 flip (`read_probe_choice`) | acc_002/003/004/006/007/009 (hotdog·century·everest·cucumber 제외 동결) | 90 (6×5콜) | ICC .909 (1b6b0b0) |
| **Deliberation** | PV1 T0 무압박 단일턴 | median hidden/reasoning tokens — cursor: outputTokens−len(text)//4 사이드카 결합, OpenRouter: in-band reasoning_tokens | PV1 10문항 | 30 (기존 T0 raw 재사용 시 0) | ICC .974 (9517e8b) |
| **Sociality** | SOC-ATT1 | Δpre = 정답 토큰 전 단어 수 (감정−중립) | ATT1 9문항 (pv_006 제외 동결) | 54 | ICC .904 (c29ea47) |
| **Stability** (파생) | 전 계기 run간 sd 프로파일 | 축별 run-sd 벡터 | — | 0 | 지문 feature 유효성 기확인 |
| **Verbosity** (파생, 확증 대기) | SOC-ATT1 중립 조건 | mean neutral_len (9문항 평균) | — | 0 | 파일럿 소급 ICC .879 — **본 측정에서 P1 확증 시에만 축 승격** |

방법론 상수 (v2 전 계기 공통): arm-잠금 비교(브리지 앵커 opus-4-8), N=3
default temp + usage 사이드카, 결정론 채점만(채점기 회귀 테스트:
`test_att_scorer.py` 16케이스, ACC 채점기 d344a98 수정판), 언어 핀(cursor
.mdc+in-band), T0 포화/관례 게이트는 각 계기 파일에 동결된 목록 그대로.

은퇴 확정: Capitulation(0/79 바닥 → 안전 속성 보고 전용, bd7eafa),
Resilience(SLM 티어 전용), v1 Sociality 감정 키워드·v1 Compliance stance
휴리스틱 채점기(전면 폐기).

## 2. 코호트와 신규 지출

cursor arm 로스터 18모델. 기존 데이터 재사용 규정: **파일럿·PV에서 동일
프로토콜로 수집된 런은 v2 데이터로 그대로 편입** (R 14모델, PV1-T0
14모델, ACC·ATT 파일럿 6모델). 신규 측정은 빈 셀만 채운다.

| 티어 | 대상 | 빈 셀 | 신규 콜 |
|---|---|---|---|
| **A (core 14 완성)** | PV 14모델 | ACC+ATT × 8모델 | 8×144 = **1,152** 콜 |
| **B (사다리 4 추가)** | claude-4/4.5-sonnet, gpt-5.1/5.2 | R+PV1+ACC+ATT × 4모델 | 4×264 = **+1,056** 콜 |

vendor CLI 앵커(claude/grok/gemini/codex 구독)와 OpenRouter(무료:
Deliberation in-band + 스텔스 add-on)는 별도 arm으로 병행한다.
ollama SLM 티어는 v1 호환 유지(Resilience 포함)로 이 동결의 범위 밖.

## 3. 동결 예측 (이 커밋 이후 수집 데이터로만 판정)

- **P1 (Verbosity 확증)**: 신규 측정 모델(n≥8)만의 mean neutral_len
  ICC(1) ≥ 0.5. 통과 시 Verbosity를 파생 2축으로 승격, 실패 시 폐기.
- **P2 (가족 서명 — claude 사다리)**: claude-4.5/4.6/4.7-opus-high 3모델의
  SOC-ATT1 Δpre는 모두 측정 완료 코호트 중앙값 초과 (opus-4-8 +14.2가
  상반부인 서명의 세대 보존).
- **P3 (가족쌍 — kimi)**: kimi-k2.7-code의 Δpre는 gemini-3.7(+21.9)보다
  kimi-k3-high(+6.0)에 가깝다.
- **P4 (facet 독립 — effort 손잡이)**: kimi-k3 low/high/max의 Δpre는
  Deliberation과 달리 effort 단조 계단(low<high<max)을 보이지 않는다
  (attending은 reasoning 예산과 독립인 기질).

판정: 각 예측 pass/fail을 측정 완료 커밋에 명시. 실패해도 공개(PV 규범).

## 3b. 동결 예측 판정 (2026-08-24, 티어 A 측정 완료)

**4/4 PASS.** 신규 8모델 데이터만으로 판정 (§3 규정대로).

- **P1 PASS**: Verbosity ICC(1)=**0.933** (신규 8모델) → **파생 2축 승격 확정**. core-14 전체 0.891.
- **P2 PASS**: claude 사다리 Δpre = 4-7 +19.1 / 4.6 +18.6 / 4.5 +12.2, 전부 코호트 중앙값 +10.3 초과.
- **P3 PASS**: kimi-k2.7-code +6.67 — kimi-k3-high(+6.0)와 0.7 차이 (gemini까지는 15.2).
- **P4 PASS**: kimi-k3 Δpre low +14.4 / high +6.0 / max +12.4 — effort 비단조, attending은 reasoning 예산과 독립.

core-14 ICC(1): Accommodation(게이트 6문항) **0.852** / Attending **0.835** / Verbosity **0.891**.
attending은 신규 8모델만으로도 0.751 재현. 특기 프로파일: gemini-3.7 = 최저
accommodation(.23)+최고 attending(+21.9), glm-5.2 = 정반대(1.0/+2.6) — 두 사회적
facet의 완전 해리. cursor-grok-4.6 = 양쪽 모두 바닥(.28/+2.5)인 유일한 low-social 극단.

## 4. 이후 로드맵

측정 완료 → P1–P4 판정 → v2 갤러리(arm 분리) → 방법론 논문 개정.
ox-alpha 등 스텔스 지문은 bare-byok arm add-on으로 계속 축적, 정체 공개
시 사전 예측 대조.
