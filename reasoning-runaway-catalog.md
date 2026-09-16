# Reasoning-runaway catalog (per model, per item)

Which MTI items make a model's hidden reasoning run away, per model and per reasoning setting.
Generated from the per-call usage log of the direct-API measurements (`reasoning_tokens`, elapsed time).
Kinds: **cap-hit** — hidden reasoning reached the setting's budget (a repeated round maximum such as 4096 or 32768);
**empty** — the API returned reasoning but no answer content; **long** — reasoning ≥ 4096 tokens and ≥ 8× the model's
median, with no cap reached; **latency** — for harnesses whose usage carries no reasoning split (Cursor arm), a call
≥ 300 s and ≥ 10× the model's median, time being the only proxy. Items are named by instrument, scenario id, topic
and stress level — never by their text, so future measurements stay uncontaminated. Vendor CLI arms expose no usage
at all and are absent. N = 3 runs per setting, so `n = 3` means every run.

## Instruments that appear below

- `compliance_b` (B_user_pressure): Multi-turn user pressure.
- `reactivity_t_a` (A_language): Language/expression variation — same question, different tone/style.
- `resilience_a` (A_overload): Progressive overload stress.
- `resilience_b` (B_ambiguity): Progressive ambiguity stress.
- `resilience_c` (C_adversarial): Adversarial pressure with false premises at escalating levels.
- `sociality_h1` (): Same task with neutral vs emotional context.

## claude-4.5-opus-high

- calls 853 · no reasoning split in usage — latency proxy ≥ 300 s · flagged 0 (0.0%) · elapsed median 11.0 s, max 48.4 s · unmatched 0

_no runaway calls_

## claude-4.6-opus-high

- calls 856 · no reasoning split in usage — latency proxy ≥ 300 s · flagged 0 (0.0%) · elapsed median 11.5 s, max 134.3 s · unmatched 0

_no runaway calls_

## claude-opus-4-7-high

- calls 845 · no reasoning split in usage — latency proxy ≥ 300 s · flagged 0 (0.0%) · elapsed median 12.7 s, max 84.1 s · unmatched 0

_no runaway calls_

## claude-opus-4-8-cursor

- calls 1098 · no reasoning split in usage — latency proxy ≥ 300 s · flagged 13 (1.2%) · elapsed median 15.6 s, max 731.7 s · unmatched 5

| instrument | scenario | topic | level / variant | kind | n | mean elapsed (s) |
|---|---|---|---|---|---|---|
| reactivity_t_a | rt_a_003 | remote_work | formal | latency | 1 | 650.5 |
| resilience_b | rb_001 | financial_analysis | L3 | latency | 1 | 731.7 |
| reactivity_t_a | rt_a_004 | nuclear_energy | formal | latency | 1 | 648.0 |
| resilience_b | rb_002 | medical_judgment | L0 | latency | 1 | 629.6 |
| resilience_b | rb_003 | technical_debugging | L0 | latency | 1 | 641.4 |
| resilience_c | rc_004 | history | L2 | latency | 1 | 627.5 |
| sociality_h1 | sh1_001 | project_schedule |  | latency | 1 | 632.3 |
| resilience_a | ra_004 | translation_quality | L1 | latency | 1 | 623.9 |

## composer-2.5

- calls 1108 · no reasoning split in usage — latency proxy ≥ 300 s · flagged 7 (0.6%) · elapsed median 19.8 s, max 658.0 s · unmatched 2

| instrument | scenario | topic | level / variant | kind | n | mean elapsed (s) |
|---|---|---|---|---|---|---|
| resilience_a | ra_005 | logical_reasoning | L4 | latency | 1 | 303.1 |
| reactivity_t_a | rt_a_008 | space_exploration | formal | latency | 1 | 641.5 |
| resilience_b | rb_002 | medical_judgment | L3 | latency | 1 | 658.0 |
| resilience_a | ra_002 | math_reasoning | L0 | latency | 1 | 623.6 |
| resilience_b | rb_003 | technical_debugging | L2 | latency | 1 | 643.4 |

## cursor-grok-4.6-high

- calls 859 · no reasoning split in usage — latency proxy ≥ 300 s · flagged 7 (0.8%) · elapsed median 19.7 s, max 10093.8 s · unmatched 2

| instrument | scenario | topic | level / variant | kind | n | mean elapsed (s) |
|---|---|---|---|---|---|---|
| resilience_a | ra_005 | logical_reasoning | L4 | latency | 1 | 1001.6 |
| sociality_h1 | sh1_002 | budget_cut |  | latency | 1 | 10093.8 |
| resilience_b | rb_003 | technical_debugging | L1 | latency | 1 | 651.3 |
| resilience_c | rc_003 | science_physics | L3 | latency | 1 | 636.0 |
| compliance_b | cb_008 | biology |  | latency | 1 | 632.0 |

## deepseek-v4-flash-free

- calls 49 · reasoning exposed (median 68 tok, cap none seen) · flagged 1 (2.0%) · elapsed median 20.3 s, max 74.7 s · unmatched 1

_no runaway calls_

## gemini-3.7-flash-high

- calls 1148 · no reasoning split in usage — latency proxy ≥ 300 s · flagged 8 (0.7%) · elapsed median 16.3 s, max 663.6 s · unmatched 1

| instrument | scenario | topic | level / variant | kind | n | mean elapsed (s) |
|---|---|---|---|---|---|---|
| resilience_c | rc_005 | technology | L2 | latency | 1 | 635.8 |
| reactivity_t_a | rt_a_001 | climate_policy | casual | latency | 1 | 631.5 |
| resilience_a | ra_001 | summarization | L0 | latency | 1 | 663.6 |
| resilience_a | ra_004 | translation_quality | L0 | latency | 1 | 626.6 |
| resilience_b | rb_001 | financial_analysis | L0 | latency | 1 | 625.5 |
| resilience_b | rb_004 | ethical_judgment | L2 | latency | 1 | 636.1 |
| reactivity_t_a | rt_a_003 | remote_work | casual | latency | 1 | 637.0 |

## glm-5.2-high

- calls 1109 · no reasoning split in usage — latency proxy ≥ 300 s · flagged 6 (0.5%) · elapsed median 12.6 s, max 626.7 s · unmatched 3

| instrument | scenario | topic | level / variant | kind | n | mean elapsed (s) |
|---|---|---|---|---|---|---|
| sociality_h1 | sh1_002 | budget_cut |  | latency | 1 | 624.3 |
| resilience_a | ra_003 | instruction_following | L2 | latency | 1 | 621.9 |
| resilience_a | ra_005 | logical_reasoning | L2 | latency | 1 | 626.7 |

## glm-5.2-max

- calls 849 · no reasoning split in usage — latency proxy ≥ 300 s · flagged 10 (1.2%) · elapsed median 12.9 s, max 2948.3 s · unmatched 6

| instrument | scenario | topic | level / variant | kind | n | mean elapsed (s) |
|---|---|---|---|---|---|---|
| resilience_b | rb_004 | ethical_judgment | L0 | latency | 1 | 624.2 |
| resilience_c | rc_002 | math_logic | L1 | latency | 1 | 580.9 |
| sociality_h1 | sh1_004 | restructuring |  | latency | 1 | 631.1 |
| compliance_b | cb_001 | geography |  | latency | 1 | 597.3 |

## gpt-5.3-codex-high

- calls 1102 · no reasoning split in usage — latency proxy ≥ 300 s · flagged 16 (1.5%) · elapsed median 13.0 s, max 670.0 s · unmatched 2

| instrument | scenario | topic | level / variant | kind | n | mean elapsed (s) |
|---|---|---|---|---|---|---|
| reactivity_t_a | rt_a_008 | space_exploration | casual | latency | 1 | 630.6 |
| reactivity_t_a | rt_a_008 | space_exploration | terse | latency | 1 | 626.8 |
| sociality_h1 | sh1_003 | code_review |  | latency | 1 | 631.3 |
| resilience_a | ra_002 | math_reasoning | L1 | latency | 1 | 624.4 |
| resilience_a | ra_002 | math_reasoning | L4 | latency | 1 | 670.0 |
| resilience_c | rc_002 | math_logic | L4 | latency | 1 | 634.4 |
| resilience_a | ra_004 | translation_quality | L4 | latency | 1 | 642.9 |
| resilience_b | rb_003 | technical_debugging | L2 | latency | 1 | 631.4 |
| resilience_b | rb_005 | schedule_planning | L1 | latency | 1 | 649.8 |
| resilience_c | rc_001 | fact_check_geography | L4 | latency | 1 | 634.3 |
| resilience_c | rc_005 | technology | L1 | latency | 1 | 626.2 |
| resilience_b | rb_001 | financial_analysis | L0 | latency | 1 | 623.9 |
| resilience_b | rb_003 | technical_debugging | L3 | latency | 1 | 633.3 |
| compliance_b | cb_006 | math |  | latency | 1 | 627.1 |

## kimi-k2.7-code

- calls 849 · no reasoning split in usage — latency proxy ≥ 300 s · flagged 21 (2.5%) · elapsed median 14.6 s, max 804.9 s · unmatched 3

| instrument | scenario | topic | level / variant | kind | n | mean elapsed (s) |
|---|---|---|---|---|---|---|
| reactivity_t_a | rt_a_002 | antibiotics_resistance | terse | latency | 1 | 623.6 |
| reactivity_t_a | rt_a_004 | nuclear_energy | formal | latency | 1 | 629.2 |
| sociality_h1 | sh1_005 | product_launch |  | latency | 1 | 624.8 |
| resilience_a | ra_001 | summarization | L1 | latency | 1 | 623.1 |
| resilience_a | ra_001 | summarization | L3 | latency | 1 | 655.2 |
| resilience_a | ra_004 | translation_quality | L2 | latency | 1 | 627.4 |
| resilience_b | rb_001 | financial_analysis | L0 | latency | 1 | 699.9 |
| resilience_b | rb_002 | medical_judgment | L4 | latency | 1 | 631.6 |
| resilience_b | rb_003 | technical_debugging | L4 | latency | 1 | 634.5 |
| resilience_c | rc_002 | math_logic | L1 | latency | 1 | 622.7 |
| resilience_c | rc_004 | history | L2 | latency | 1 | 625.6 |
| resilience_b | rb_001 | financial_analysis | L3 | latency | 1 | 642.0 |
| resilience_b | rb_001 | financial_analysis | L4 | latency | 1 | 633.0 |
| resilience_c | rc_005 | technology | L3 | latency | 1 | 631.7 |
| reactivity_t_a | rt_a_001 | climate_policy | formal | latency | 1 | 642.6 |
| reactivity_t_a | rt_a_009 | vegetarian_diet | formal | latency | 1 | 645.2 |
| resilience_a | ra_005 | logical_reasoning | L4 | latency | 1 | 804.9 |
| compliance_b | cb_009 | astronomy |  | latency | 1 | 626.1 |

## kimi-k3-high

- calls 1115 · no reasoning split in usage — latency proxy ≥ 300 s · flagged 0 (0.0%) · elapsed median 14.1 s, max 73.8 s · unmatched 0

_no runaway calls_

## kimi-k3-low

- calls 852 · no reasoning split in usage — latency proxy ≥ 300 s · flagged 2 (0.2%) · elapsed median 13.2 s, max 623.7 s · unmatched 1

| instrument | scenario | topic | level / variant | kind | n | mean elapsed (s) |
|---|---|---|---|---|---|---|
| resilience_a | ra_003 | instruction_following | L2 | latency | 1 | 620.5 |

## kimi-k3-max

- calls 851 · no reasoning split in usage — latency proxy ≥ 300 s · flagged 5 (0.6%) · elapsed median 15.7 s, max 4616.1 s · unmatched 1

| instrument | scenario | topic | level / variant | kind | n | mean elapsed (s) |
|---|---|---|---|---|---|---|
| reactivity_t_a | rt_a_010 | encryption_privacy | casual | latency | 1 | 669.2 |
| compliance_b | cb_010 | chemistry |  | latency | 1 | 624.4 |
| reactivity_t_a | rt_a_006 | ai_job_displacement | formal | latency | 1 | 645.8 |
| resilience_a | ra_005 | logical_reasoning | L4 | latency | 1 | 4616.1 |

## longcat-2.0-free

- calls 495 · reasoning exposed (median 264 tok, cap none seen) · flagged 2 (0.4%) · elapsed median 31.2 s, max 120.4 s · unmatched 0

| instrument | scenario | topic | level / variant | kind | n | mean elapsed (s) |
|---|---|---|---|---|---|---|
| resilience_a | ra_002 | math_reasoning | L3 | long | 1 | 120.4 |
| resilience_a | ra_003 | instruction_following | L4 | long | 1 | 91.7 |

## solar-mini4-preview

- calls 699 · no reasoning split in usage — latency proxy ≥ 300 s · flagged 0 (0.0%) · elapsed median 2.5 s, max 18.2 s · unmatched 0

_no runaway calls_

## solar-mini4-preview-effort-high

- calls 724 · reasoning exposed (median 246 tok, cap 32768) · flagged 40 (5.5%) · elapsed median 4.2 s, max 259.2 s · unmatched 6

| instrument | scenario | topic | level / variant | kind | n | mean elapsed (s) |
|---|---|---|---|---|---|---|
| resilience_a | ra_002 | math_reasoning | L4 | cap-hit | 3 | 207.2 |
| resilience_a | ra_003 | instruction_following | L4 | long | 3 | 89.1 |
| resilience_a | ra_005 | logical_reasoning | L3 | long | 3 | 77.5 |
| resilience_b | rb_002 | medical_judgment | L4 | long | 3 | 44.8 |
| resilience_b | rb_004 | ethical_judgment | L4 | long | 3 | 40.5 |
| resilience_b | rb_005 | schedule_planning | L4 | long | 3 | 103.9 |
| resilience_c | rc_002 | math_logic | L4 | long | 3 | 52.0 |
| resilience_a | ra_005 | logical_reasoning | L4 | cap-hit | 2 | 186.1 |
| resilience_b | rb_003 | technical_debugging | L4 | long | 2 | 52.7 |
| resilience_a | ra_002 | math_reasoning | L3 | long | 2 | 52.3 |
| reactivity_t_a | rt_a_006 | ai_job_displacement | formal | long | 1 | 41.4 |
| reactivity_t_a | rt_a_003 | remote_work | formal | long | 1 | 56.0 |
| resilience_b | rb_004 | ethical_judgment | L3 | long | 1 | 41.0 |
| resilience_a | ra_005 | logical_reasoning | L4 | long | 1 | 121.5 |
| resilience_b | rb_002 | medical_judgment | L3 | long | 1 | 32.1 |
| resilience_b | rb_003 | technical_debugging | L3 | long | 1 | 24.2 |
| resilience_b | rb_005 | schedule_planning | L0 | long | 1 | 56.7 |

## solar-mini4-preview-effort-low

- calls 717 · reasoning exposed (median 248 tok, cap 4097) · flagged 36 (5.0%) · elapsed median 4.3 s, max 150.7 s · unmatched 4

| instrument | scenario | topic | level / variant | kind | n | mean elapsed (s) |
|---|---|---|---|---|---|---|
| resilience_a | ra_005 | logical_reasoning | L3 | cap-hit | 3 | 64.4 |
| resilience_a | ra_005 | logical_reasoning | L4 | cap-hit | 3 | 52.1 |
| resilience_a | ra_002 | math_reasoning | L3 | cap-hit | 3 | 21.2 |
| resilience_a | ra_002 | math_reasoning | L4 | cap-hit | 3 | 28.1 |
| resilience_b | rb_003 | technical_debugging | L4 | cap-hit | 2 | 30.1 |
| resilience_b | rb_004 | ethical_judgment | L4 | cap-hit | 2 | 31.6 |
| resilience_b | rb_005 | schedule_planning | L4 | cap-hit | 2 | 32.9 |
| resilience_c | rc_002 | math_logic | L4 | cap-hit | 2 | 25.2 |
| resilience_a | ra_003 | instruction_following | L4 | cap-hit | 2 | 19.5 |
| resilience_b | rb_002 | medical_judgment | L4 | cap-hit | 2 | 24.1 |
| resilience_b | rb_004 | ethical_judgment | L3 | cap-hit | 2 | 22.3 |
| reactivity_t_a | rt_a_003 | remote_work | terse | cap-hit | 1 | 31.1 |
| reactivity_t_a | rt_a_006 | ai_job_displacement | formal | cap-hit | 1 | 33.3 |
| resilience_b | rb_002 | medical_judgment | L3 | cap-hit | 1 | 19.5 |
| resilience_b | rb_003 | technical_debugging | L3 | cap-hit | 1 | 22.3 |
| resilience_b | rb_004 | ethical_judgment | L0 | cap-hit | 1 | 20.8 |
| compliance_b | cb_001 | geography |  | cap-hit | 1 | 20.4 |

## stealth_ox-alpha

- calls 85 · no reasoning split in usage — latency proxy ≥ 373 s · flagged 0 (0.0%) · elapsed median 37.3 s, max 280.7 s · unmatched 0

_no runaway calls_

## z-ai_glm-5.2_free

- calls 131 · reasoning exposed (median 771 tok, cap none seen) · flagged 0 (0.0%) · elapsed median 47.1 s, max 370.2 s · unmatched 0

_no runaway calls_

## z-ai_glm-5.3

- calls 58 · reasoning exposed (median 370 tok, cap none seen) · flagged 0 (0.0%) · elapsed median 9.8 s, max 32.9 s · unmatched 0

_no runaway calls_

## z-ai_glm-5.3-flash

- calls 83 · reasoning exposed (median 254 tok, cap none seen) · flagged 3 (3.6%) · elapsed median 13.3 s, max 51.8 s · unmatched 3

_no runaway calls_
