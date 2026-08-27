import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 12,
// Semester Two, Period IV: Alternating Current (AC) and Electronics. Topics
// follow the syllabus CONTENTS item by item: alternating current (measurements,
// function and RCL circuits), resonance, and basic electronics (semiconductors -
// doping, intrinsic/extrinsic, p-type/n-type, band theory - and semiconductor
// devices: transistors, thermistors and diodes). AC and resonance are sourced
// from OpenStax College Physics 2e (read via WebFetch); the electronics topic is
// sourced from LibreTexts University Physics.
export const physicsG12P4: PeriodContent = {
  grade: 12,
  number: 4,
  title: "Alternating Current (AC) and Electronics",
  summary:
    "Period IV of the MoE Grade 12 Physics syllabus. Learners describe alternating current and its measurement (peak and rms values, V_rms = V_peak/√2), analyse resistance, inductive and capacitive reactance and impedance in RCL circuits, explain resonance (XL = XC, f₀ = 1/(2π√(LC))), and study basic electronics: intrinsic and extrinsic semiconductors, doping, n-type and p-type materials, band theory, and the semiconductor devices diode, transistor and thermistor.",
  topics: [
    // source: OpenStax — College Physics 2e, 23.10 RL Circuits & 23.11 Reactance, Inductive and Capacitive (https://openstax.org/books/college-physics-2e/pages/23-11-reactance-inductive-and-capacitive)
    {
      slug: "alternating-current",
      title: "Alternating Current: Measurement and RCL Circuits",
      objective:
        "By the end of the topic, learners should be able to describe alternating current, relate peak and rms values, and analyse resistance, inductive reactance and capacitive reactance in RCL circuits including phase relationships. (MoE Grade 12 Period IV, CONTENTS 1 'AC: measurements; function; AC circuits (RCL)'.)",
      estimatedMinutes: 110,
      notes: `## Alternating current

- **Alternating current (AC)** — current that periodically reverses direction, usually varying sinusoidally with time.
- **Direct current (DC)** flows one way only; AC is used for mains electricity because it is easily changed in voltage by transformers.
- **Frequency (f)** — the number of complete cycles per second, in hertz (Hz); mains is typically 50 Hz or 60 Hz.
- **Period T = 1/f.**

## Measuring AC: peak and rms values

- **Peak value (V₀ or I₀)** — the maximum value reached in a cycle.
- **Root-mean-square (rms) value** — the effective (DC-equivalent) value; an AC of rms current delivers the same average power as a DC of that value.
- **V_rms = V₀ / √2 ≈ 0.707 V₀**, and **I_rms = I₀ / √2 ≈ 0.707 I₀**.
- Meters (AC voltmeters/ammeters) read rms values; the "230 V mains" is an rms value.

## Reactance in AC circuits

- **Resistor (R):** obeys V = IR at all frequencies; voltage and current are **in phase** (phase angle 0°).
- **Inductor (L):** opposes changing current. **Inductive reactance X_L = 2πfL** (ohms), larger at higher frequency; voltage **leads** current by 90°.
- **Capacitor (C):** opposes changing voltage. **Capacitive reactance X_C = 1/(2πfC)** (ohms), larger at lower frequency; voltage **lags** current by 90°.
- For a single component, rms current I = V/R, V/X_L or V/X_C.

| Component | Opposition | Frequency dependence | Phase (V relative to I) |
| --- | --- | --- | --- |
| Resistor R | Resistance R | none | in phase (0°) |
| Inductor L | X_L = 2πfL | increases with f | leads by 90° |
| Capacitor C | X_C = 1/(2πfC) | decreases with f | lags by 90° |

## Common errors

- **Using peak values in power formulas** — use rms values for average power.
- **Swapping X_L and X_C behaviour** — X_L rises with frequency; X_C falls.
- **Treating reactance like resistance in adding** — reactances combine as X_L − X_C, not by simple addition.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 23.11).** (a) A sinusoidal mains supply has a peak voltage of 340 V. Find its rms voltage. (b) A 3.00 mH inductor is connected to a 120 V (rms) supply at 60.0 Hz. Find the inductive reactance and the rms current.

**Part (a) — rms voltage.**
Step 1 — V_rms = V₀/√2.
Step 2 — V_rms = 340 / 1.414 = 240 V (the standard mains rms value).

**Part (b) — inductive reactance and current.**
Step 1 — X_L = 2πfL = 2π × 60.0 × 3.00 ×10⁻³ = 2π × 0.180 = 1.13 Ω.
Step 2 — I_rms = V_rms / X_L = 120 / 1.13 = 106 A.

**Answer.** (a) The rms voltage is 240 V. (b) The reactance is 1.13 Ω and the current 106 A (large, because a small inductor barely opposes a low-frequency current).`,
      quiz: [
        { prompt: "Alternating current is current that:", options: ["flows one way only", "periodically reverses direction", "never changes", "cannot be measured"], correctIndex: 1, explanation: "AC reverses direction periodically." },
        { prompt: "Mains electricity uses AC mainly because:", options: ["it is safer than DC always", "its voltage is easily changed by transformers", "it needs no wires", "it has no frequency"], correctIndex: 1, explanation: "Transformers can step AC voltage up or down efficiently." },
        { prompt: "The frequency of an AC supply is measured in:", options: ["volts", "hertz", "ohms", "amperes"], correctIndex: 1, explanation: "Frequency is in hertz (Hz)." },
        { prompt: "The period T of an AC wave equals:", options: ["1/f", "f", "2πf", "f²"], correctIndex: 0, explanation: "T = 1/f." },
        { prompt: "The rms value of an AC voltage is:", options: ["V₀ × √2", "V₀ / √2", "V₀ × 2", "V₀ / 2"], correctIndex: 1, explanation: "V_rms = V₀/√2 ≈ 0.707 V₀." },
        { prompt: "An AC voltmeter usually reads the:", options: ["peak value", "rms value", "period", "frequency"], correctIndex: 1, explanation: "AC meters are calibrated to read rms values." },
        { prompt: "The rms current gives the same average power as an equal:", options: ["peak current", "direct current", "zero current", "frequency"], correctIndex: 1, explanation: "The rms value is the DC-equivalent effective value." },
        { prompt: "For a resistor in AC, voltage and current are:", options: ["90° out of phase", "in phase", "180° out of phase", "unrelated"], correctIndex: 1, explanation: "A resistor keeps V and I in phase." },
        { prompt: "Inductive reactance is:", options: ["X_L = 2πfL", "X_L = 1/(2πfL)", "X_L = fL", "X_L = L/f"], correctIndex: 0, explanation: "X_L = 2πfL." },
        { prompt: "Capacitive reactance is:", options: ["X_C = 2πfC", "X_C = 1/(2πfC)", "X_C = fC", "X_C = C/f"], correctIndex: 1, explanation: "X_C = 1/(2πfC)." },
        { prompt: "As frequency increases, inductive reactance:", options: ["increases", "decreases", "stays the same", "becomes zero"], correctIndex: 0, explanation: "X_L = 2πfL rises with frequency." },
        { prompt: "As frequency increases, capacitive reactance:", options: ["increases", "decreases", "stays the same", "is infinite"], correctIndex: 1, explanation: "X_C = 1/(2πfC) falls with frequency." },
        { prompt: "In an inductor the voltage:", options: ["is in phase with current", "leads the current by 90°", "lags the current by 90°", "is zero"], correctIndex: 1, explanation: "For an inductor, voltage leads current by 90°." },
        { prompt: "In a capacitor the voltage:", options: ["leads the current by 90°", "lags the current by 90°", "is in phase", "is 180° out"], correctIndex: 1, explanation: "For a capacitor, voltage lags current by 90°." },
        { prompt: "If V₀ = 170 V, the rms voltage is about:", options: ["120 V", "240 V", "85 V", "340 V"], correctIndex: 0, explanation: "V_rms = 170/√2 ≈ 120 V." },
        { prompt: "Reactance is measured in:", options: ["hertz", "ohms", "farads", "henrys"], correctIndex: 1, explanation: "Reactance, like resistance, is in ohms." },
        { prompt: "A 2 H inductor at 50 Hz has reactance:", options: ["628 Ω", "100 Ω", "0.006 Ω", "50 Ω"], correctIndex: 0, explanation: "X_L = 2π × 50 × 2 = 628 Ω." },
        { prompt: "The peak value of a 240 V rms supply is about:", options: ["170 V", "340 V", "240 V", "480 V"], correctIndex: 1, explanation: "V₀ = V_rms × √2 = 240 × 1.414 = 340 V." },
        { prompt: "At very high frequency a capacitor behaves like:", options: ["an open circuit", "a low-reactance path (near short)", "a battery", "an inductor"], correctIndex: 1, explanation: "High f gives small X_C, so it passes current easily." },
        { prompt: "A pure resistor in AC dissipates power using:", options: ["peak values", "rms values (P = I_rms² R)", "reactance", "zero"], correctIndex: 1, explanation: "Average power uses rms values: P = I_rms²R." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "An AC supply has a peak voltage of 170 V. Its rms voltage is about:", options: ["85 V", "120 V", "240 V", "340 V"], correctIndex: 1, answerKey: "V_rms = V₀/√2 = 170/1.414 ≈ 120 V.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define the rms value of an alternating current and state its relationship to the peak value.", answerKey: "The rms (root-mean-square) value of an AC is the effective, DC-equivalent value: an AC of this rms value delivers the same average power to a resistor as a steady DC of the same value. It is related to the peak value by I_rms = I₀/√2 (and V_rms = V₀/√2).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State the formulas for inductive reactance and capacitive reactance and describe how each changes as the frequency increases.", answerKey: "Inductive reactance X_L = 2πfL, which increases as frequency increases. Capacitive reactance X_C = 1/(2πfC), which decreases as frequency increases.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "In a purely resistive AC circuit, the phase angle between voltage and current is:", options: ["0°", "45°", "90°", "180°"], correctIndex: 0, answerKey: "A resistor keeps voltage and current in phase, so the phase angle is 0°.", marks: 2 },
        { type: "ESSAY", prompt: "Compare how a resistor, an inductor and a capacitor each behave in an AC circuit, referring to their opposition to current, its dependence on frequency, and the phase relationship between voltage and current.", answerKey: "Resistor: opposes current through its resistance R, which does not depend on frequency; voltage and current are in phase (0°). Inductor: opposes changing current through inductive reactance X_L = 2πfL, which increases with frequency; the voltage leads the current by 90°. Capacitor: opposes changing voltage through capacitive reactance X_C = 1/(2πfC), which decreases with frequency; the voltage lags the current by 90°. So at high frequency an inductor opposes current strongly while a capacitor passes it easily, and vice versa at low frequency. Reward the three components with correct reactance formulas, frequency dependence and phase relationships.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 23.12 RLC Series AC Circuits (https://openstax.org/books/college-physics-2e/pages/23-12-rlc-series-ac-circuits)
    {
      slug: "resonance",
      title: "Resonance in RLC Circuits",
      objective:
        "By the end of the topic, learners should be able to define impedance (Z = √(R² + (X_L − X_C)²)), find the resonant frequency f₀ = 1/(2π√(LC)), and describe what happens at resonance. (MoE Grade 12 Period IV, CONTENTS 2 'Resonance'.)",
      estimatedMinutes: 100,
      notes: `## Impedance of a series RLC circuit

- **Impedance (Z)** — the total opposition to AC in a circuit containing R, L and C; it plays the role of resistance for AC. Unit: ohm (Ω).
- Because inductive and capacitive effects oppose each other, they subtract:
- **Z = √(R² + (X_L − X_C)²)**, where X_L = 2πfL and X_C = 1/(2πfC).
- The rms current is **I = V / Z**.

## Resonance

- **Resonance** occurs when the inductive and capacitive reactances are equal: **X_L = X_C**.
- At resonance (X_L − X_C = 0):
1. The impedance is a **minimum, Z = R**.
2. The current is a **maximum, I = V/R**.
3. Voltage and current are **in phase** (phase angle 0°, power factor 1).
- The **resonant frequency** is found from X_L = X_C, i.e. 2πf₀L = 1/(2πf₀C):
- **f₀ = 1 / (2π√(LC))**.

\`\`\`svg Current against frequency showing a resonance peak
<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A resonance curve of current peaking at the resonant frequency">
  <line x1="30" y1="115" x2="200" y2="115" stroke="#334155" stroke-width="1.5"/>
  <line x1="30" y1="115" x2="30" y2="15" stroke="#334155" stroke-width="1.5"/>
  <path d="M35 110 C90 108 100 30 115 30 C130 30 140 108 195 110" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="115" y1="30" x2="115" y2="115" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="105" y="128" font-size="10" fill="#334155">f₀</text>
  <text x="150" y="130" font-size="10" fill="#334155">frequency</text>
  <text x="8" y="25" font-size="10" fill="#334155">I</text>
</svg>
\`\`\`

## Uses of resonance

- **Tuning circuits** in radios and televisions: adjusting C (or L) sets f₀ to the station's frequency, so that signal gives the maximum current and is selected.
- Metal detectors, oscillators and filters also use LC resonance.

## Common errors

- **Adding X_L and X_C** — they subtract (X_L − X_C) because they are 90° out of phase in opposite senses.
- **Thinking impedance is largest at resonance** — impedance is smallest (Z = R), so current is largest.
- **Confusing resonance with maximum impedance** — series resonance is minimum impedance/maximum current.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 23.12).** A series RLC circuit has R = 40.0 Ω, L = 3.00 mH and C = 5.00 μF, connected to a 120 V (rms) supply. Find (a) the resonant frequency and (b) the current at resonance.

**Part (a) — Resonant frequency.**
Step 1 — f₀ = 1/(2π√(LC)).
Step 2 — LC = (3.00 ×10⁻³)(5.00 ×10⁻⁶) = 1.50 ×10⁻⁸.
Step 3 — √(LC) = 1.225 ×10⁻⁴, so f₀ = 1/(2π × 1.225 ×10⁻⁴) = 1/(7.70 ×10⁻⁴) = 1.30 ×10³ Hz = 1.30 kHz.

**Part (b) — Current at resonance.**
Step 1 — At resonance Z = R = 40.0 Ω.
Step 2 — I = V/Z = 120 / 40.0 = 3.00 A.

**Answer.** The resonant frequency is 1.30 kHz and the current at resonance is 3.00 A — the maximum current, because the impedance is at its minimum (Z = R).`,
      quiz: [
        { prompt: "Impedance is the total opposition to:", options: ["direct current", "alternating current", "magnetic flux", "heat"], correctIndex: 1, explanation: "Impedance opposes AC, like resistance for DC." },
        { prompt: "Impedance is measured in:", options: ["ohms", "hertz", "farads", "henrys"], correctIndex: 0, explanation: "Impedance Z is in ohms." },
        { prompt: "The impedance of a series RLC circuit is:", options: ["Z = R + X_L + X_C", "Z = √(R² + (X_L − X_C)²)", "Z = R − X_L", "Z = X_L X_C"], correctIndex: 1, explanation: "Z = √(R² + (X_L − X_C)²)." },
        { prompt: "Resonance occurs when:", options: ["R = 0", "X_L = X_C", "X_L = 0", "f = 0"], correctIndex: 1, explanation: "At resonance the reactances are equal." },
        { prompt: "At resonance the impedance is:", options: ["maximum", "minimum, equal to R", "zero", "infinite"], correctIndex: 1, explanation: "Z = R is the minimum at resonance." },
        { prompt: "At resonance the current is:", options: ["minimum", "maximum", "zero", "unchanged"], correctIndex: 1, explanation: "Minimum impedance gives maximum current." },
        { prompt: "The resonant frequency is:", options: ["f₀ = 2π√(LC)", "f₀ = 1/(2π√(LC))", "f₀ = √(LC)", "f₀ = LC"], correctIndex: 1, explanation: "f₀ = 1/(2π√(LC))." },
        { prompt: "At resonance, voltage and current are:", options: ["90° apart", "in phase", "180° apart", "unrelated"], correctIndex: 1, explanation: "Phase angle is 0° at resonance." },
        { prompt: "Inductive and capacitive reactances in Z:", options: ["add", "subtract (X_L − X_C)", "multiply", "cancel R"], correctIndex: 1, explanation: "They subtract because they are opposite in effect." },
        { prompt: "At resonance the current I equals:", options: ["V/R", "V/X_L", "V/X_C", "0"], correctIndex: 0, explanation: "Z = R, so I = V/R." },
        { prompt: "Radios use resonance to:", options: ["produce heat", "tune to a station's frequency", "rectify AC", "store charge"], correctIndex: 1, explanation: "Setting f₀ to the station's frequency selects that signal." },
        { prompt: "To change the resonant frequency you can adjust the:", options: ["resistance only", "capacitance or inductance", "wire colour", "supply voltage"], correctIndex: 1, explanation: "f₀ depends on L and C." },
        { prompt: "For L = 1 H and C = 1 F, f₀ is:", options: ["1/(2π) Hz ≈ 0.16 Hz", "2π Hz", "1 Hz", "6.28 Hz"], correctIndex: 0, explanation: "f₀ = 1/(2π√(1×1)) = 1/(2π) ≈ 0.16 Hz." },
        { prompt: "If X_L = 50 Ω and X_C = 50 Ω, then Z equals:", options: ["100 Ω", "R only", "0 Ω", "50 Ω"], correctIndex: 1, explanation: "X_L − X_C = 0, so Z = R (resonance)." },
        { prompt: "A larger capacitance gives a resonant frequency that is:", options: ["higher", "lower", "unchanged", "zero"], correctIndex: 1, explanation: "f₀ = 1/(2π√(LC)) decreases as C increases." },
        { prompt: "The power factor at resonance is:", options: ["0", "0.5", "1", "2"], correctIndex: 2, explanation: "Voltage and current in phase gives power factor 1." },
        { prompt: "Away from resonance, the current is:", options: ["larger than at resonance", "smaller than at resonance", "the same", "always zero"], correctIndex: 1, explanation: "Impedance is higher off resonance, so current is smaller." },
        { prompt: "If R = 10 Ω at resonance and V = 50 V, the current is:", options: ["5 A", "0.2 A", "500 A", "60 A"], correctIndex: 0, explanation: "I = V/R = 50/10 = 5 A." },
        { prompt: "Series resonance gives:", options: ["maximum impedance", "minimum impedance and maximum current", "no current", "zero voltage"], correctIndex: 1, explanation: "Minimum Z (=R) and maximum current I = V/R." },
        { prompt: "A resonance (current-frequency) curve peaks at:", options: ["zero frequency", "the resonant frequency f₀", "infinite frequency", "twice f₀"], correctIndex: 1, explanation: "The current is largest at f₀." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "In a series RLC circuit, resonance occurs when:", options: ["R = 0", "X_L = X_C", "X_L = R", "the current is zero"], correctIndex: 1, answerKey: "Resonance is when the inductive and capacitive reactances are equal (X_L = X_C).", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Write the formula for the impedance of a series RLC circuit and the formula for its resonant frequency.", answerKey: "Impedance: Z = √(R² + (X_L − X_C)²), where X_L = 2πfL and X_C = 1/(2πfC). Resonant frequency: f₀ = 1/(2π√(LC)).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State three things that are true at the resonant frequency of a series RLC circuit.", answerKey: "At resonance: (1) X_L = X_C so the reactances cancel; (2) the impedance is a minimum and equals the resistance R; (3) the current is a maximum, I = V/R; (4) the voltage and current are in phase (power factor 1). Any three of these.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "At resonance, the impedance of a series RLC circuit is:", options: ["zero", "equal to R", "equal to X_L", "infinite"], correctIndex: 1, answerKey: "The reactive parts cancel, leaving Z = R (a minimum), so the current is maximum.", marks: 2 },
        { type: "ESSAY", prompt: "Explain what is meant by resonance in a series RLC circuit, derive the condition for the resonant frequency from X_L = X_C, and describe how resonance is used to tune a radio.", answerKey: "Resonance is the condition in which the inductive reactance equals the capacitive reactance (X_L = X_C), so the reactive parts cancel and the impedance drops to its minimum value Z = R; the current is then a maximum (I = V/R) and voltage and current are in phase. Setting X_L = X_C: 2πf₀L = 1/(2πf₀C), so (2πf₀)² = 1/(LC) and f₀ = 1/(2π√(LC)). A radio tuner is an LC circuit whose resonant frequency can be changed by adjusting the variable capacitor (or inductor); when f₀ is set equal to the frequency of a broadcasting station, that signal produces the maximum current in the circuit and is selected, while other frequencies give little current and are rejected. Reward the resonance condition, the correct derivation of f₀ and the radio-tuning explanation.", marks: 8 },
      ],
    },
    // source: LibreTexts — University Physics III (OpenStax) 9.7 Semiconductors and Doping (https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/09:_Condensed_Matter_Physics/9.07:_Semiconductors_and_Doping)
    {
      slug: "basic-electronics-semiconductors",
      title: "Basic Electronics: Semiconductors and Devices",
      objective:
        "By the end of the topic, learners should be able to explain doping, distinguish intrinsic and extrinsic semiconductors and n-type from p-type, describe band theory, and state the uses of diodes, transistors and thermistors. (MoE Grade 12 Period IV, CONTENTS 3 'Basic Electronics: semiconductors (doping; intrinsic and extrinsic; p-type and n-type; band theory); semiconductor devices (transistors, thermistors, diodes)'.)",
      estimatedMinutes: 110,
      notes: `## Semiconductors and band theory

- **Semiconductor** — a material (e.g. silicon or germanium) whose conductivity lies between that of a conductor and an insulator.
- **Band theory:** in a solid, electron energies form bands. The **valence band** is the highest filled band; the **conduction band** is the next (empty) band. The gap between them is the **band gap**.
- In a **conductor** the bands overlap (no gap); in an **insulator** the gap is large; in a **semiconductor** the gap is **small**, so a little energy (heat or light) lets electrons cross into the conduction band and conduct.

## Intrinsic and extrinsic semiconductors

- **Intrinsic semiconductor** — a pure semiconductor. When an electron jumps to the conduction band it leaves behind a positive **hole** in the valence band; both electron and hole carry current.
- **Extrinsic semiconductor** — a semiconductor whose conductivity is controlled by **doping** (adding small amounts of impurity atoms).

## Doping: n-type and p-type

- **Doping** — deliberately adding impurity atoms to a pure semiconductor to increase its conductivity.
- **n-type** — doped with a group-V atom (an extra outer electron, e.g. phosphorus). The majority carriers are **free electrons** (negative). The impurity is a **donor**.
- **p-type** — doped with a group-III atom (one fewer outer electron, e.g. boron). The majority carriers are **holes** (positive). The impurity is an **acceptor**.

| Type | Dopant | Majority carrier | Name of dopant |
| --- | --- | --- | --- |
| Intrinsic | none (pure) | electrons and holes (equal) | — |
| n-type | group V (e.g. phosphorus) | electrons (negative) | donor |
| p-type | group III (e.g. boron) | holes (positive) | acceptor |

## Semiconductor devices

- **Diode** — a p-n junction that conducts current in **one direction only** (forward-biased) and blocks it in the other (reverse-biased); used to **rectify** AC into DC.
- **Transistor** — a three-layer device (npn or pnp) used as an **amplifier** (a small base current controls a large collector current) or as an electronic **switch**.
- **Thermistor** — a resistor whose resistance changes strongly with temperature (for most, resistance **falls** as temperature rises); used in temperature sensors and thermostats.

## Common errors

- **Confusing n-type and p-type carriers** — n-type carries electrons (negative); p-type carries holes (positive).
- **Thinking doping adds free charge without changing the material's neutrality** — the crystal stays electrically neutral overall.
- **Saying a diode conducts both ways** — it conducts one way only.`,
      workedExample: `**Problem (based on LibreTexts University Physics III, 9.7 Semiconductors and Doping).** Pure silicon (group IV) is doped in two separate samples: sample A with phosphorus (group V) and sample B with boron (group III). (a) State the type of each sample and its majority charge carrier. (b) Explain how a diode made from a p-n junction of these materials rectifies alternating current.

**Step 1 — Sample A (phosphorus, group V).** Phosphorus has one extra outer electron beyond silicon, which becomes a free electron. Sample A is an **n-type** semiconductor; majority carriers are **electrons** (donor doping).

**Step 2 — Sample B (boron, group III).** Boron has one fewer outer electron, leaving a hole. Sample B is a **p-type** semiconductor; majority carriers are **holes** (acceptor doping).

**Step 3 — The diode.** Joining p-type and n-type makes a p-n junction (diode). When forward-biased (p to +, n to −) it conducts; when reverse-biased it blocks current. Applied to AC, it allows current through during only one half of each cycle, so the output current flows in one direction — the AC is **rectified** to DC.

**Answer.** (a) A is n-type (electrons); B is p-type (holes). (b) The p-n junction conducts in only one direction, passing one half of each AC cycle, converting AC to DC.`,
      quiz: [
        { prompt: "A semiconductor's conductivity lies between that of a:", options: ["gas and a liquid", "conductor and an insulator", "magnet and a metal", "solid and a plasma"], correctIndex: 1, explanation: "Semiconductors are intermediate between conductors and insulators." },
        { prompt: "A common semiconductor element is:", options: ["copper", "silicon", "gold", "sodium"], correctIndex: 1, explanation: "Silicon (and germanium) are common semiconductors." },
        { prompt: "The highest filled energy band is the:", options: ["conduction band", "valence band", "band gap", "forbidden band"], correctIndex: 1, explanation: "The valence band is the highest filled band." },
        { prompt: "The gap between valence and conduction bands is the:", options: ["band gap", "junction", "hole", "dopant"], correctIndex: 0, explanation: "The band gap separates the two bands." },
        { prompt: "In a semiconductor the band gap is:", options: ["zero (overlapping)", "small", "very large", "infinite"], correctIndex: 1, explanation: "A small gap lets some electrons reach the conduction band." },
        { prompt: "A pure semiconductor is called:", options: ["extrinsic", "intrinsic", "doped", "n-type"], correctIndex: 1, explanation: "Pure = intrinsic." },
        { prompt: "Adding impurity atoms to control conductivity is called:", options: ["rectifying", "doping", "amplifying", "biasing"], correctIndex: 1, explanation: "Doping adds impurity atoms." },
        { prompt: "In an intrinsic semiconductor, a promoted electron leaves behind a:", options: ["proton", "positive hole", "neutron", "photon"], correctIndex: 1, explanation: "It leaves a positive hole in the valence band." },
        { prompt: "n-type doping uses an atom with:", options: ["one fewer outer electron", "an extra outer electron", "no electrons", "the same electrons"], correctIndex: 1, explanation: "A group-V donor adds a free electron." },
        { prompt: "The majority carriers in n-type material are:", options: ["holes", "electrons", "protons", "photons"], correctIndex: 1, explanation: "n-type majority carriers are electrons (negative)." },
        { prompt: "p-type doping uses an atom with:", options: ["an extra electron", "one fewer outer electron", "extra protons", "no nucleus"], correctIndex: 1, explanation: "A group-III acceptor creates holes." },
        { prompt: "The majority carriers in p-type material are:", options: ["electrons", "holes", "neutrons", "ions"], correctIndex: 1, explanation: "p-type majority carriers are holes (positive)." },
        { prompt: "A donor impurity produces an:", options: ["p-type semiconductor", "n-type semiconductor", "insulator", "conductor"], correctIndex: 1, explanation: "Donors (extra electrons) give n-type." },
        { prompt: "A diode conducts current:", options: ["in both directions", "in one direction only", "never", "only when hot"], correctIndex: 1, explanation: "A diode is a one-way conductor." },
        { prompt: "A diode is mainly used to:", options: ["amplify signals", "rectify AC to DC", "store charge", "measure temperature"], correctIndex: 1, explanation: "Diodes rectify alternating current." },
        { prompt: "A transistor can act as an amplifier or as a:", options: ["battery", "switch", "magnet", "resistor of fixed value"], correctIndex: 1, explanation: "Transistors work as amplifiers or electronic switches." },
        { prompt: "A transistor has how many layers/regions?", options: ["one", "two", "three", "five"], correctIndex: 2, explanation: "npn or pnp — three regions." },
        { prompt: "A thermistor is a resistor whose resistance changes with:", options: ["light", "temperature", "pressure", "sound"], correctIndex: 1, explanation: "Thermistor resistance depends strongly on temperature." },
        { prompt: "For most thermistors, as temperature rises the resistance:", options: ["rises", "falls", "stays constant", "becomes infinite"], correctIndex: 1, explanation: "Most (NTC) thermistors lose resistance as they warm." },
        { prompt: "A p-n junction is the basis of a:", options: ["thermistor", "diode", "resistor", "fuse"], correctIndex: 1, explanation: "A diode is a p-n junction." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Doping pure silicon with a group-V atom such as phosphorus produces:", options: ["a p-type semiconductor", "an n-type semiconductor", "an insulator", "a pure conductor"], correctIndex: 1, answerKey: "A group-V donor adds free electrons, giving an n-type semiconductor.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between an intrinsic and an extrinsic semiconductor, and define doping.", answerKey: "An intrinsic semiconductor is a pure semiconductor in which conduction is by equal numbers of electrons and holes created by thermal excitation. An extrinsic semiconductor has had its conductivity increased and controlled by doping. Doping is the deliberate addition of small amounts of impurity atoms to a pure semiconductor to increase its conductivity (producing n-type or p-type material).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State the majority charge carrier in (a) an n-type and (b) a p-type semiconductor, and name the group of the dopant used for each.", answerKey: "(a) n-type: majority carriers are electrons (negative); dopant is a group-V (donor) atom such as phosphorus. (b) p-type: majority carriers are holes (positive); dopant is a group-III (acceptor) atom such as boron.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which semiconductor device conducts current in one direction only and is used to rectify AC?", options: ["transistor", "thermistor", "diode", "capacitor"], correctIndex: 2, answerKey: "A diode (p-n junction) conducts one way only and rectifies AC to DC.", marks: 2 },
        { type: "ESSAY", prompt: "Using band theory, explain the difference between a conductor, an insulator and a semiconductor, and explain how doping produces n-type and p-type materials. State one use each of a diode, a transistor and a thermistor.", answerKey: "Band theory: electron energies form a filled valence band and an empty conduction band separated by a band gap. In a conductor the bands overlap (no gap), so electrons move freely; in an insulator the band gap is very large, so few electrons reach the conduction band; in a semiconductor the gap is small, so a little heat or light promotes electrons into the conduction band (leaving holes), giving moderate conductivity. Doping adds impurity atoms: a group-V donor (e.g. phosphorus) supplies extra free electrons, making an n-type semiconductor (majority carriers electrons); a group-III acceptor (e.g. boron) creates holes, making a p-type semiconductor (majority carriers holes). Uses: a diode (p-n junction) rectifies AC to DC / acts as a one-way valve; a transistor amplifies signals or acts as an electronic switch; a thermistor senses temperature (as in thermostats). Reward the band-theory contrast, correct n-/p-type doping and one valid use of each device.", marks: 8 },
      ],
    },
  ],
};
