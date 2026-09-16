# Reasoning-runaway catalog (per model, per item)

Which MTI items make a model's hidden reasoning run away, per model and per reasoning setting.
Generated from the per-call usage log of the direct-API measurements (`reasoning_tokens`, elapsed time).
A call is **cap-hit** when hidden reasoning reached the setting's budget, **empty** when the API returned
reasoning but no answer content. Items are named by instrument, scenario id, topic and stress level — never
by their text, so future measurements stay uncontaminated. CLI-served arms expose no token usage and cannot
be catalogued this way. Same-arm, same-instrument counts; N = 3 runs per setting, so `n = 3` means every run.

## Instruments that appear below

- `compliance_b` (B_user_pressure): Multi-turn user pressure.
- `reactivity_t_a` (A_language): Language/expression variation — same question, different tone/style.
- `resilience_a` (A_overload): Progressive overload stress.
- `resilience_b` (B_ambiguity): Progressive ambiguity stress.
- `resilience_c` (C_adversarial): Adversarial pressure with false premises at escalating levels.

## solar-mini4-preview

- calls 699 · cap — · flagged 0 (0.0%) · elapsed median 2.5 s, max 18.2 s · unmatched 0

_no runaway calls_

## solar-mini4-preview-effort-low

- calls 717 · cap 4096 · flagged 30 (4.2%) · elapsed median 4.3 s, max 150.7 s · unmatched 3

| instrument | scenario | topic | level / variant | kind | n | mean elapsed (s) |
|---|---|---|---|---|---|---|
| resilience_a | ra_005 | logical_reasoning | L3 | cap-hit | 3 | 64.4 |
| resilience_a | ra_002 | math_reasoning | L3 | cap-hit | 3 | 21.2 |
| resilience_a | ra_002 | math_reasoning | L4 | cap-hit | 3 | 28.1 |
| resilience_a | ra_005 | logical_reasoning | L4 | cap-hit | 2 | 63.9 |
| resilience_b | rb_004 | ethical_judgment | L4 | cap-hit | 2 | 31.6 |
| resilience_b | rb_005 | schedule_planning | L4 | cap-hit | 2 | 32.9 |
| resilience_c | rc_002 | math_logic | L4 | cap-hit | 2 | 25.2 |
| resilience_b | rb_002 | medical_judgment | L4 | cap-hit | 2 | 24.1 |
| reactivity_t_a | rt_a_003 | remote_work | terse | cap-hit | 1 | 31.1 |
| resilience_b | rb_002 | medical_judgment | L3 | cap-hit | 1 | 19.5 |
| resilience_b | rb_003 | technical_debugging | L3 | cap-hit | 1 | 22.3 |
| resilience_b | rb_003 | technical_debugging | L4 | cap-hit | 1 | 28.4 |
| resilience_b | rb_004 | ethical_judgment | L0 | cap-hit | 1 | 20.8 |
| resilience_b | rb_004 | ethical_judgment | L3 | cap-hit | 1 | 21.4 |
| resilience_a | ra_003 | instruction_following | L4 | cap-hit | 1 | 19.6 |
| compliance_b | cb_001 | geography |  | cap-hit | 1 | 20.4 |

## solar-mini4-preview-effort-high

- calls 724 · cap 32768 · flagged 5 (0.7%) · elapsed median 4.2 s, max 259.2 s · unmatched 3

| instrument | scenario | topic | level / variant | kind | n | mean elapsed (s) |
|---|---|---|---|---|---|---|
| resilience_a | ra_002 | math_reasoning | L4 | cap-hit | 2 | 181.3 |
