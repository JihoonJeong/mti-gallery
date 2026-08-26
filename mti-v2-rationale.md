> Public research note (Korean). Part of the Model Temperament Index — see the site for the summarized English version of these arguments.

# MTI v2 근거문서 — 왜 이 여섯 축인가

**용도**: 홈페이지 v2 설명과 방법론 논문 개정의 공동 소스 (2026-08-24).
**한 줄 요약**: MTI v2는 "능력이 천장인 곳에서 남는 행동 개인차"를 결정론
채점·사전등록·arm-잠금으로 측정한, 표준 심리측정 타당화 절차를 통과한
계기만 남긴 세트다 — 축은 이론이 정한 게 아니라 데이터가 벌어왔다.

## 1. 핵심 논리: 전형수행으로서의 기질

심리측정학은 **최대수행**(할 수 있는가; 능력 검사)과 **전형수행**(평소
어떻게 하는가; 성격·기질)을 구분한다(Cronbach, 1949). LLM 벤치마크는
거의 전부 전자다. MTI는 후자를 겨냥하며, 그 조작적 정의가 T0 포화
게이트(정답률 ≥95% 과제만 사용)다: **능력 분산을 천장에 고정하면 남는
분산이 스타일이고, 그것이 런 간 재현되면 기질이다.** 재현성의 지표는
ICC(1)(Shrout & Fleiss, 1979)이고, 채택 컷 0.5는 관례적 기준(Koo & Li,
2016)을 사전 고정한 것이다. 채택 축은 전부 .83–.97 대역에 있다.

## 2. 방법론의 계보

- **일반화가능성 이론(G-theory)** (Cronbach et al., 1972): 모델이 측정
  대상, 런·아이템·하네스가 분산 facet. v1 감사에서 하네스 분산이 POOLED
  ICC를 부풀리는 가짜 변별력을 적발했고(측정 불변성 실패; cf. Vandenberg
  & Lance, 2000), 그 해법이 **arm-잠금**(비교는 같은 하네스 안에서만,
  arm 간은 브리지 앵커로만 연결)이다.
- **사전등록과 확증/탐색 구분** (Wagenmakers et al., 2012): 계기·채점기·
  예측은 측정 전 커밋 해시로 동결된다. Verbosity 축은 탐색 관찰(파일럿
  소급 ICC .879)로 태어나 **신규 데이터 확증 검정(ICC .933, n=8)** 을
  통과한 뒤에만 승격됐다. 실패도 공개한다(예측 타당도 1차 검정 H1–H3
  기각 기록).
- **연구자 자유도의 코드 수준 봉쇄** (cf. Simmons et al., 2011): 채점은
  전부 결정론(키워드 스탠스 휴리스틱 폐기), 채점기는 회귀 테스트로 고정,
  채점기 결함 발견 시 raw에서 전량 재채점 후 판정 재산출을 커밋으로
  남긴다(실사례 2건: ACC 주석 오독, ATT 단위 접미).

## 3. 축별 타당도 증거

| 축 | 계기 | 신뢰도 ICC(1) | 판별 증거 | 집단/실험 증거 |
|---|---|---|---|---|
| Reactivity | 교란 대비 길이 델타 (v1 유지) | 전 arm .75–.93 | 유일하게 전 arm 생존 | 하네스 인과(브리지 R 이동) |
| Accommodation | 논거 사다리+강제선택 (게이트 6문항) | .909 (파일럿) / .852 (core-14) | capitulation과 r=.575 — 같은 구인 아님 | glm/gemini 가족 서명 |
| Deliberation | 포화 과제 무단 사고 토큰 | .974 (n=14 유지) | 겉 verbosity와 해리 (glm: 숨은 66/겉 최단) | kimi effort 계단 = 인과 손잡이 |
| Attending (Sociality) | 감정 맥락에서 정답 전 단어 수 | .904 / .835 (core-14) | verbosity r=−.23, R r=−.46 | P2·P3 가족 서명, P4 effort 독립 |
| Stability (파생) | run간 sd 프로파일 | — (파생) | 지문 feature 유효 | — |
| Verbosity (파생) | 중립 조건 기저 길이 | .933 (확증, n=8) / .891 (core-14) | attending·R과 판별 | 확증 사전등록 통과 |

**은퇴도 증거다**: Capitulation은 강화 사다리로도 0/79 바닥 — "프론티어
코호트는 명백한 거짓에 굴복하지 않는다"는 안전 속성으로 보고 전환.
Resilience는 프론티어에서 상수(SLM 티어 전용 강등). 죽은 축을 남기지
않는 것이 v1 대비 v2의 정직성이다.

## 4. 증분 타당도: 지문 판별 (v2 성공의 외적 준거)

내부 게이트와 독립적인 유용성 검정으로, 같은 다운스트림 과제(모델 가족
판별)에서 v1/v2 특성 세트를 비교한다(프로토콜 사전등록:
`docs/mti-v2-fingerprint-protocol.md`). 참고 retrodiction에서 **v2 8/10
vs v1 5/10 (축 수 4로 맞춰도 8/10; v1 생존축만은 2/10)**. 본판정은 동결
이후 새 대상(스텔스 공개, 신규 버전)에 대한 전향 예측 적중률 누적이며,
홈페이지에 살아있는 스코어보드로 게시한다. 현재 동결 예측 전적: **P1–P4
4/4 PASS** (Verbosity 확증 / claude 사다리 서명 / kimi 가족쌍 / attending
effort 독립).

## 5. 인간 기질 구성과의 대응 (조작적 유사물 — 동형 주장 아님)

| MTI 축 | 인간 연구의 평행 개념 |
|---|---|
| Reactivity | Rothbart 기질 이론의 반응성(reactivity) |
| Deliberation | Kagan(1966)의 숙고-충동성(reflection–impulsivity) |
| Verbosity | 어휘 가설 전통에서 외향성의 대표 마커인 talkativeness |
| Attending vs Accommodation 해리 | agreeableness의 warmth/compliance facet 분리 |
| Stability | Fleeson(2001)의 밀도분포 — 개인 내 변산 자체가 특질 |

v1 4축(이론 부과) → 변별력 감사 생존자만 v2 잔류라는 경로는, 어휘 가설이
요인분석을 거쳐 Big Five로 수렴한 "데이터가 축을 벌어오는" 구조와 같다.

## 6. LLM 평가 문헌에서의 위치

- 설문 이식 계열(Serapio-García et al., 2023, arXiv:2307.00184)의 알려진
  한계 — 자기보고는 모델이 자기에 대해 *말하는 것*이지 *하는 것*이 아니며,
  실제로 자기보고와 행동의 해리가 보고된다(Personality Illusion,
  arXiv:2509.03730). MTI는 처음부터 행동 관찰만 쓴다.
- Sycophancy 문헌(Perez et al., 2022, arXiv:2212.09251; Sharma et al.,
  2023, arXiv:2310.13548)이 단일 구인으로 다루던 것을 MTI는
  **accommodation(옹호 가능한 논거 수용)과 capitulation(명백한 거짓
  굴복)으로 해체**했고, 프론티어에서 전자만 변별력이 있음을 보였다
  (r=.575, 후자는 코호트 바닥).
- 하네스 효과: 같은 가중치라도 서빙/하네스가 기질 수치를 이동시킨다는
  실측(opus 브리지, cursor 로케일 주입)은 "LLM 평가는 administration
  context를 통제해야 한다"는 측정 불변성 요구의 LLM 판이다.

## 7. 한계 (홈페이지에도 그대로 게시)

1. 헤드라인 수치의 범위는 **cursor arm core-14** — 교차 arm 일반화는
   주장하지 않는다(설계상 arm-잠금).
2. 계기당 6–10문항, 좁은 도메인(사실 QA 맥락). 도메인 확장은 후속.
3. Sociality는 attending이라는 한 facet만 측정한다 — 축 이름도 그렇게
   좁혀 부른다.
4. 외적 준거 타당도는 진행형: 예측 타당도 1차 검정(H1–H3)은 기각됐고,
   지문 증분 타당도는 전향 판정 누적 중이다.
5. 기질은 **버전·서빙 시점의 지문**이다(gemini 3.5→3.7에서 capitulation
   소멸 실측). 이는 한계이자 지문 활용의 근거다.
6. "기질"은 조작적 은유다 — 내적 상태 주장 없이, 재현되는 행동 성향
   분포로만 정의한다.

## 참고문헌

Cronbach (1949) *Essentials of Psychological Testing*; Cronbach & Meehl
(1955) Construct validity, *Psych. Bull.*; Cronbach, Gleser, Nanda &
Rajaratnam (1972) *The Dependability of Behavioral Measurements*; Shrout
& Fleiss (1979) ICC, *Psych. Bull.*; Koo & Li (2016) ICC guideline,
*J. Chiropr. Med.*; Kagan (1966) reflection–impulsivity, *J. Abnorm.
Psych.*; Fleeson (2001) density distributions, *JPSP*; Vandenberg &
Lance (2000) measurement invariance, *ORM*; Simmons, Nelson & Simonsohn
(2011) false-positive psychology, *Psych. Sci.*; Wagenmakers et al.
(2012) purely confirmatory research, *PoPS*; Serapio-García et al.
(2023) arXiv:2307.00184; Perez et al. (2022) arXiv:2212.09251; Sharma
et al. (2023) arXiv:2310.13548; The Personality Illusion (2025)
arXiv:2509.03730.
