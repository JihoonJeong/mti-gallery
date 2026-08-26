> Public research note (Korean). Preregistered protocol for judging v2 against v1 on family fingerprinting.

# v2 성공 판정 — 지문 증분 타당도 프로토콜 (사전등록)

**동결일**: 2026-08-24 (v2 세트 동결 b57b483의 후속). **아이디어**: 프로젝트 리드 —
"v2가 성공적인지의 좋은 근거는 fingerprint 예측 가능성이 v1보다 높은가."
심리측정학 용어로 **증분 타당도(incremental validity)**: 같은 다운스트림
과제(모델 가족 판별)에서 v2 특성 세트가 v1보다 예측력을 더 내는지를,
프로토콜을 먼저 동결한 뒤 판정한다. 판정 도구: `fingerprint_v2_compare.py`
(이 커밋에 동결).

## 1. 특성 세트 (4개 비교군, 전부 cursor arm 3-run 평균)

| 세트 | 특성 | 비고 |
|---|---|---|
| **V2-full** | R, ACC, DELIB, ATT, VERB, STAB (6) | v2 전체 |
| **V2-top4** | R, ACC, DELIB, ATT (4) | v1과 축 수 매칭 (측정 4축, 사전 지정) |
| **V1-full** | R, C, S, E (4) | v1 원 세트 (compliance_b flip / sociality_h1 emotional / resilience pm) |
| **V1-live** | R, C (2) | v1 생존 축만 — "죽은 축이 끌어내렸다"는 반론 차단용 |

STAB 정의(동결): 측정 4축(R/ACC/DELIB/ATT) 각각의 run간 sd를 코호트 내
z-표준화한 뒤 4개 평균. R은 results_cloud 아카이브의 가용 런 전체 사용.

## 2. 판별 과제와 지표 (동결)

- 코호트: core-14 (cursor arm). 가족 라벨: kimi(4) / glm(2) / claude-opus·sonnet
  계열(4) / gpt(1) / gemini(1) / grok(1) / composer(1).
- 전처리: 각 특성을 코호트 내 z-표준화.
- **1차 지표**: leave-one-out **1-NN 가족 판별 정확도** (유클리드, z-공간).
  다구성원 가족 소속 10모델만 분모(singleton은 정답 불가능 — 공간의
  distractor로만 참여). 동률 시 최근접 우선.
- 2차 지표: 가족별 silhouette 평균(다구성원 가족).
- 참고 변형: nearest-centroid (보고만, 판정 불사용).

## 3. 판정 규칙 (동결)

- **본판정은 전향(prospective)**: 동결 이후 새 대상 — 스텔스 공개(1호
  ox-alpha), 신규 모델/버전 — 에 대해 V2-full 최근접 가족 예측을 공개 전
  커밋으로 남기고, 공개 시 적중 여부 기록. v1 세트로 같은 예측을 병행
  기록해 적중률을 비교 누적한다. **v2 성공 = 전향 적중률 v2 > v1** (누적
  n≥5부터 유의미로 간주, 그 전은 잠정).
- core-14 LOO retrodiction은 **참고 수치** (아래 §4에 기록) — v2 축이 이
  14모델로 구축되었으므로 순환 위험이 있어 본판정으로 쓰지 않는다.
- 교차-arm 예측(스텔스는 bare-byok arm)은 브리지 앵커 한계를 명시하고
  탐색으로 기록, arm 내 대상이 생기면 그쪽이 본판정.
- Goodhart 방지: 이후 축 추가·수정은 이 프로토콜 변경 없이 진행하며,
  가족 판별력을 축 설계의 목적함수로 쓰지 않는다.

## 4. 1차 참고 수치 (retrodiction, 판정 아님 — 2026-08-24)

| 세트 | LOO 1-NN | silhouette | 오분류 |
|---|---|---|---|
| **V2-full** | **8/10 (.80)** | .133 | k2.7→gpt, k3-low→opus48 |
| **V2-top4** | **8/10 (.80)** | .129 | k2.7→composer, k3-low→c4.6 |
| V1-full | 5/10 (.50) | .074 | 5건 (kimi/glm/claude 교차 오인) |
| V1-live | 2/10 (.20) | −.031 | 8건 — R+C만으론 가족 신호 거의 없음 |

축 수를 4로 맞춰도 v2가 v1을 8/10 vs 5/10으로 이긴다(strawman 반론 차단).
공통 오분류원은 kimi-k3-low/k2.7-code — kimi 가족 내부 이질성이 실제로 큼
(effort·특화 변형). 재확인: 이 수치는 참고용, 본판정은 §3의 전향 예측.
