import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 11,
// Semester One, Period II: Kinetic Theory of Gases. The CONTENTS list is
// expanded to one topic per top-level item: 1. Pressure; 2. The Ideal Gas Laws;
// 3. The Ideal Gas Equation; 4. Gas Stoichiometry; 5. Dalton's Law of Partial
// Pressures; 6. The Kinetic Molecular Theory of Gases; 7. Root Mean Square
// Velocity; 8. Effusion and Diffusion; 9. Real Gases; 10. Chemistry in the
// Atmosphere.
export const chemistryG11P2: PeriodContent = {
  grade: 11,
  number: 2,
  title: "Kinetic Theory of Gases",
  summary:
    "Period II of the MoE Grade 11 Chemistry syllabus. Learners define pressure and its units, apply Boyle's, Charles's, Gay-Lussac's and Avogadro's laws, combine them into the ideal gas equation PV = nRT, solve gas stoichiometry and molar-mass problems, use Dalton's law of partial pressures including gas collected over water, state the postulates of the kinetic molecular theory, relate temperature to root-mean-square molecular speed, apply Graham's law to effusion and diffusion, explain deviations of real gases from ideal behaviour, and survey the chemistry of the atmosphere.",
  topics: [
    {
      // source: LibreTexts (Chemistry: The Central Science) — 10.2 Pressure (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/10%3A_Gases/10.02%3A_Pressure)
      slug: "pressure",
      title: "Pressure",
      objective:
        "By the end of the topic, learners should be able to define pressure, describe how it is measured, and convert between its units. (MoE Grade 11 Period II, CONTENTS 1.)",
      estimatedMinutes: 110,
      notes: `## Introduction

- Gases push outwards on everything they touch — that push is **pressure**.
- **This topic:** what pressure is, how it is measured, and its units.

## Definition

- **Pressure** — the **force** exerted per unit **area**: P = F ÷ A.
- Gas pressure comes from countless gas molecules colliding with the walls of the container.
- The same force on a smaller area gives a higher pressure.

## Measuring pressure

- **Barometer** — measures **atmospheric** pressure using a column of mercury; the atmosphere holds up a column about 760 mm high at sea level.
- **Manometer** — measures the pressure of a gas sample using a U-tube of mercury.

## Units of pressure

| Unit | Symbol | Value equal to 1 atm |
|---|---|---|
| atmosphere | atm | 1 |
| millimetre of mercury | mmHg | 760 |
| torr | torr | 760 |
| pascal (SI unit) | Pa | 101 325 |
| kilopascal | kPa | 101.325 |
| bar | bar | 1.01325 |

**1 atm = 760 mmHg = 760 torr = 101 325 Pa = 101.325 kPa = 1.01325 bar.**

## Common errors and misconceptions

- **Confusing force and pressure** — pressure is force per unit area, not force alone.
- **Forgetting the SI unit** — the SI unit of pressure is the pascal (Pa), not the atmosphere.
- **Mixing up mmHg and Pa** — always convert through 1 atm using the table.`,
      workedExample: `**Task.** A gas cylinder reads a pressure of 2.5 atm. Express this pressure in (a) mmHg, (b) kPa and (c) pascals.

**Recall the conversions**
1 atm = 760 mmHg = 101.325 kPa = 101 325 Pa.

**(a) In mmHg**
2.5 atm × 760 mmHg/atm = **1900 mmHg**.

**(b) In kPa**
2.5 atm × 101.325 kPa/atm = **253.3 kPa**.

**(c) In pascals**
2.5 atm × 101 325 Pa/atm = **253 313 Pa ≈ 2.53 × 10⁵ Pa**.

**Conclusion.** 2.5 atm equals 1900 mmHg, about 253 kPa, or 2.53 × 10⁵ Pa — the same pressure expressed in different units.`,
      quiz: [
        { prompt: "Pressure is defined as force per unit…", options: ["area", "volume", "mass", "time"], correctIndex: 0, explanation: "P = F ÷ A." },
        { prompt: "Gas pressure arises from molecules colliding with the…", options: ["container walls", "each other only", "the ground", "light"], correctIndex: 0, explanation: "Collisions with walls produce pressure." },
        { prompt: "The SI unit of pressure is the…", options: ["pascal (Pa)", "atmosphere", "mmHg", "torr"], correctIndex: 0, explanation: "The pascal is the SI unit." },
        { prompt: "1 atm equals how many mmHg?", options: ["760", "101", "1", "1000"], correctIndex: 0, explanation: "1 atm = 760 mmHg." },
        { prompt: "1 atm equals how many kPa?", options: ["101.325", "760", "1000", "1.013"], correctIndex: 0, explanation: "1 atm = 101.325 kPa." },
        { prompt: "Atmospheric pressure is measured with a…", options: ["barometer", "manometer", "thermometer", "voltmeter"], correctIndex: 0, explanation: "A barometer measures atmospheric pressure." },
        { prompt: "A gas sample's pressure is measured with a…", options: ["manometer", "barometer", "burette", "ammeter"], correctIndex: 0, explanation: "A manometer measures gas pressure." },
        { prompt: "The mmHg unit is also called the…", options: ["torr", "pascal", "bar", "atm"], correctIndex: 0, explanation: "1 mmHg = 1 torr." },
        { prompt: "1 atm equals how many pascals?", options: ["101 325", "760", "1000", "100"], correctIndex: 0, explanation: "1 atm = 101 325 Pa." },
        { prompt: "The same force on a smaller area gives … pressure.", options: ["higher", "lower", "the same", "zero"], correctIndex: 0, explanation: "Smaller area, larger pressure." },
        { prompt: "2.0 atm in mmHg is…", options: ["1520 mmHg", "760 mmHg", "380 mmHg", "202 mmHg"], correctIndex: 0, explanation: "2.0 × 760 = 1520 mmHg." },
        { prompt: "In a barometer, the atmosphere holds up a column of…", options: ["mercury", "water", "oil", "air"], correctIndex: 0, explanation: "Mercury is used because it is dense." },
        { prompt: "1 bar is approximately equal to…", options: ["1 atm", "760 atm", "10 atm", "0.1 atm"], correctIndex: 0, explanation: "1 bar ≈ 1.01325 atm ≈ 1 atm." },
        { prompt: "0.5 atm in kPa is about…", options: ["50.7 kPa", "101 kPa", "380 kPa", "5 kPa"], correctIndex: 0, explanation: "0.5 × 101.325 ≈ 50.7 kPa." },
        { prompt: "Which quantity does a barometer NOT need?", options: ["electric current", "mercury", "a tube", "the atmosphere"], correctIndex: 0, explanation: "A barometer is mechanical, not electrical." },
        { prompt: "760 torr equals…", options: ["1 atm", "10 atm", "0.5 atm", "100 atm"], correctIndex: 0, explanation: "760 torr = 1 atm." },
        { prompt: "Pressure increases when the number of wall collisions per second…", options: ["increases", "decreases", "stays fixed", "reaches zero"], correctIndex: 0, explanation: "More frequent collisions raise pressure." },
        { prompt: "Which is the largest pressure?", options: ["2 atm", "760 mmHg", "101 kPa", "1 bar"], correctIndex: 0, explanation: "2 atm is twice the others (each ≈ 1 atm)." },
        { prompt: "The formula for pressure is…", options: ["P = F/A", "P = FA", "P = A/F", "P = F + A"], correctIndex: 0, explanation: "Pressure is force divided by area." },
        { prompt: "Standard atmospheric pressure at sea level supports a mercury column of about…", options: ["760 mm", "76 mm", "7600 mm", "10 mm"], correctIndex: 0, explanation: "About 760 mm of mercury." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define pressure and give its SI unit.", answerKey: "Pressure is the force exerted per unit area (P = F/A). Its SI unit is the pascal (Pa). Award a mark for the definition and a mark for the correct SI unit.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Which set of values are all equal to 1 atmosphere?", options: ["760 mmHg, 101.325 kPa, 1.01325 bar", "760 Pa, 101 kPa, 1 bar", "76 mmHg, 1 kPa, 1 bar", "1 mmHg, 1 torr, 1 Pa"], correctIndex: 0, answerKey: "1 atm = 760 mmHg = 101.325 kPa = 1.01325 bar.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The instrument used to measure atmospheric pressure is a:", options: ["barometer", "manometer", "thermometer", "hydrometer"], correctIndex: 0, answerKey: "A barometer measures atmospheric pressure.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Convert a pressure of 3.0 atm into (a) mmHg and (b) kPa.", answerKey: "(a) 3.0 × 760 = 2280 mmHg. (b) 3.0 × 101.325 = 303.975 ≈ 304 kPa. Award marks for both correct conversions.", marks: 2 },
        { type: "ESSAY", prompt: "Explain, using the idea of moving molecules, what causes gas pressure, and describe how a barometer measures atmospheric pressure.", answerKey: "A full answer explains that a gas is made of many fast-moving molecules that constantly collide with the walls of the container; each collision exerts a small force, and the total force per unit area is the pressure — more frequent or more forceful collisions raise the pressure. For the barometer: a tube is filled with mercury and inverted in a dish of mercury; the atmosphere pushes down on the mercury in the dish and holds up a column in the tube; the height of the column (about 760 mm at sea level) measures the atmospheric pressure. Award marks for the molecular-collision explanation of pressure and a correct description of the barometer.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 10.3 The Gas Laws (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/10%3A_Gases/10.03%3A_The_Gas_Laws)
      slug: "the-ideal-gas-laws",
      title: "The Ideal Gas Laws",
      objective:
        "By the end of the topic, learners should be able to state and apply Boyle's, Charles's, Gay-Lussac's and Avogadro's laws to gas problems. (MoE Grade 11 Period II, CONTENTS 2.)",
      estimatedMinutes: 150,
      notes: `## Introduction

- The behaviour of a gas depends on four quantities: pressure (P), volume (V), temperature (T) and amount (n).
- **This topic:** the four simple gas laws, each holding two of these constant.

## The four gas laws

| Law | Constant | Relationship | Equation |
|---|---|---|---|
| Boyle's | T, n | P ∝ 1/V (inverse) | P₁V₁ = P₂V₂ |
| Charles's | P, n | V ∝ T (direct) | V₁/T₁ = V₂/T₂ |
| Gay-Lussac's | V, n | P ∝ T (direct) | P₁/T₁ = P₂/T₂ |
| Avogadro's | P, T | V ∝ n (direct) | V₁/n₁ = V₂/n₂ |

## Statements

- **Boyle's law** — at constant temperature, the volume of a fixed mass of gas is **inversely** proportional to its pressure. Squeeze the gas and it shrinks.
- **Charles's law** — at constant pressure, the volume of a fixed mass of gas is **directly** proportional to its absolute temperature. Heat the gas and it expands.
- **Gay-Lussac's law** — at constant volume, the pressure of a fixed mass of gas is **directly** proportional to its absolute temperature.
- **Avogadro's law** — at constant temperature and pressure, the volume of a gas is **directly** proportional to the number of moles.

## Temperature must be in kelvin

- Always use the **absolute (kelvin)** scale: T(K) = T(°C) + 273.
- Extrapolating gas volume to zero gives **absolute zero, −273.15 °C = 0 K**.

## Common errors and misconceptions

- **Using °C instead of K** — Charles's and Gay-Lussac's laws need kelvin.
- **Confusing direct and inverse** — Boyle's law is inverse; the others are direct.
- **Forgetting a fixed mass** — the simple laws assume the amount of gas is constant.`,
      workedExample: `**Task.** A balloon holds 2.0 dm³ of air at 27 °C. It is warmed to 127 °C at constant pressure. Use Charles's law to find the new volume.

**Step 1 — Convert temperatures to kelvin**
- T₁ = 27 + 273 = 300 K; T₂ = 127 + 273 = 400 K.

**Step 2 — Write Charles's law**
V₁/T₁ = V₂/T₂, so V₂ = V₁ × T₂/T₁.

**Step 3 — Substitute**
V₂ = 2.0 × (400 ÷ 300).

**Step 4 — Calculate**
V₂ = 2.0 × 1.333 = **2.67 dm³**.

**Check.** Heating at constant pressure expands the gas, so a larger volume (2.67 dm³ > 2.0 dm³) is correct. Using °C instead of K would have given a wrong answer.`,
      quiz: [
        { prompt: "Boyle's law: at constant temperature, P is … proportional to V.", options: ["inversely", "directly", "not", "logarithmically"], correctIndex: 0, explanation: "P ∝ 1/V." },
        { prompt: "Charles's law: at constant pressure, V is … proportional to T.", options: ["directly", "inversely", "not", "randomly"], correctIndex: 0, explanation: "V ∝ T (kelvin)." },
        { prompt: "Gay-Lussac's law relates pressure to … at constant volume.", options: ["temperature", "moles", "area", "density"], correctIndex: 0, explanation: "P ∝ T at constant V." },
        { prompt: "Avogadro's law: at constant T and P, V is proportional to…", options: ["number of moles", "temperature", "pressure", "area"], correctIndex: 0, explanation: "V ∝ n." },
        { prompt: "The equation P₁V₁ = P₂V₂ is…", options: ["Boyle's law", "Charles's law", "Avogadro's law", "Gay-Lussac's law"], correctIndex: 0, explanation: "Boyle's law relates P and V." },
        { prompt: "The equation V₁/T₁ = V₂/T₂ is…", options: ["Charles's law", "Boyle's law", "Dalton's law", "Graham's law"], correctIndex: 0, explanation: "Charles's law relates V and T." },
        { prompt: "Temperature in gas laws must be in…", options: ["kelvin", "Celsius", "Fahrenheit", "any unit"], correctIndex: 0, explanation: "Use the absolute (kelvin) scale." },
        { prompt: "27 °C in kelvin is…", options: ["300 K", "27 K", "273 K", "246 K"], correctIndex: 0, explanation: "27 + 273 = 300 K." },
        { prompt: "Absolute zero is…", options: ["−273 °C (0 K)", "0 °C", "100 °C", "273 °C"], correctIndex: 0, explanation: "0 K = −273.15 °C." },
        { prompt: "If pressure doubles at constant T, the volume of a gas…", options: ["halves", "doubles", "stays the same", "triples"], correctIndex: 0, explanation: "Boyle's law: inverse relationship." },
        { prompt: "Heating a gas at constant pressure makes it…", options: ["expand", "contract", "condense", "freeze"], correctIndex: 0, explanation: "Charles's law: V rises with T." },
        { prompt: "A gas at 300 K warmed to 600 K (constant P) has its volume…", options: ["doubled", "halved", "unchanged", "quartered"], correctIndex: 0, explanation: "V ∝ T, so it doubles." },
        { prompt: "Which law explains a can of gas bursting when heated (constant volume)?", options: ["Gay-Lussac's law", "Boyle's law", "Avogadro's law", "Graham's law"], correctIndex: 0, explanation: "Pressure rises with temperature at constant V." },
        { prompt: "Equal volumes of gases at the same T and P contain equal numbers of…", options: ["molecules", "atoms", "protons", "electrons"], correctIndex: 0, explanation: "Avogadro's principle." },
        { prompt: "A 2.0 L gas at 300 K heated to 450 K (constant P) becomes…", options: ["3.0 L", "1.5 L", "2.0 L", "6.0 L"], correctIndex: 0, explanation: "2.0 × 450/300 = 3.0 L." },
        { prompt: "Which relationship is INVERSE?", options: ["P and V (Boyle)", "V and T (Charles)", "P and T (Gay-Lussac)", "V and n (Avogadro)"], correctIndex: 0, explanation: "Only Boyle's law is inverse." },
        { prompt: "The four gas variables are P, V, n and…", options: ["T", "mass only", "density", "colour"], correctIndex: 0, explanation: "Temperature is the fourth." },
        { prompt: "Doubling the moles of gas at constant T and P … the volume.", options: ["doubles", "halves", "keeps", "removes"], correctIndex: 0, explanation: "Avogadro's law: V ∝ n." },
        { prompt: "A gas at 1 atm, 4 L compressed to 2 L at constant T has pressure…", options: ["2 atm", "0.5 atm", "1 atm", "4 atm"], correctIndex: 0, explanation: "P₁V₁ = P₂V₂: 1×4 = P×2, P = 2 atm." },
        { prompt: "Charles's law plotted as V against T (K) gives a … through the origin.", options: ["straight line", "curve", "circle", "flat line"], correctIndex: 0, explanation: "Direct proportion gives a straight line through 0 K." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State Boyle's law and Charles's law, giving the equation for each.", answerKey: "Boyle's law: at constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure (P₁V₁ = P₂V₂). Charles's law: at constant pressure, the volume of a fixed mass of gas is directly proportional to its absolute temperature (V₁/T₁ = V₂/T₂). Award marks for each correct statement and equation.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A gas occupies 6.0 L at 2.0 atm. At constant temperature, what volume will it occupy at 3.0 atm?", options: ["4.0 L", "9.0 L", "2.0 L", "12 L"], correctIndex: 0, answerKey: "P₁V₁ = P₂V₂: (2.0)(6.0) = (3.0)V₂, V₂ = 4.0 L.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Which law states that equal volumes of gases at the same temperature and pressure contain equal numbers of molecules?", options: ["Avogadro's law", "Boyle's law", "Charles's law", "Gay-Lussac's law"], correctIndex: 0, answerKey: "That is Avogadro's law (V ∝ n).", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "A gas at 250 K and constant volume has a pressure of 1.0 atm. What is its pressure at 500 K?", answerKey: "Gay-Lussac's law: P₁/T₁ = P₂/T₂, so P₂ = 1.0 × 500/250 = 2.0 atm. Award marks for the correct law and answer 2.0 atm.", marks: 3 },
        { type: "ESSAY", prompt: "Explain the four simple gas laws (Boyle's, Charles's, Gay-Lussac's and Avogadro's), stating which variables are held constant in each, and explain why temperature must be measured in kelvin.", answerKey: "A full answer explains: Boyle's law — at constant T and n, P ∝ 1/V; Charles's law — at constant P and n, V ∝ T; Gay-Lussac's law — at constant V and n, P ∝ T; Avogadro's law — at constant T and P, V ∝ n. It notes temperature must be in kelvin because the direct proportionalities pass through absolute zero (−273 °C = 0 K), so using Celsius would give wrong ratios (e.g. doubling 1 °C is not doubling the thermal energy). Award marks for the four laws with the correct constant variables and the kelvin explanation.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 10.4 The Ideal Gas Equation (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map:_Chemistry_-_The_Central_Science_(Brown_et_al.)/10:_Gases/10.04:_The_Ideal_Gas_Equation)
      slug: "the-ideal-gas-equation",
      title: "The Ideal Gas Equation",
      objective:
        "By the end of the topic, learners should be able to use PV = nRT with the correct value of R and STP conditions to calculate P, V, n or T. (MoE Grade 11 Period II, CONTENTS 3.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- The four simple gas laws combine into a single equation for an ideal gas.
- **This topic:** the ideal gas equation PV = nRT and its use.

## The equation

**PV = nRT**

- **P** = pressure, **V** = volume, **n** = number of moles, **T** = absolute temperature (K), **R** = the gas constant.

## The gas constant R

- **R = 0.0821 dm³·atm/(mol·K)** when P is in atm and V in dm³ (litres).
- **R = 8.314 J/(mol·K)** when P is in pascals and V in m³.
- Choose the value of R that matches your units.

## Standard temperature and pressure (STP)

- **STP** = 0 °C (273 K) and 1 atm.
- At STP, **1 mole of any ideal gas occupies about 22.4 dm³** — the **molar volume**.

## Rearranging the equation

- P = nRT/V, V = nRT/P, n = PV/RT, T = PV/nR.

## Common errors and misconceptions

- **Wrong R for the units** — match R to the units of P and V.
- **Temperature in °C** — T must be in kelvin.
- **Forgetting STP molar volume** — 22.4 dm³/mol only applies at STP (0 °C, 1 atm).`,
      workedExample: `**Task.** Calculate the volume occupied by 0.50 mol of an ideal gas at 2.0 atm and 27 °C. (R = 0.0821 dm³·atm/mol·K.)

**Step 1 — List the data in the right units**
- n = 0.50 mol; P = 2.0 atm; T = 27 + 273 = 300 K; R = 0.0821 dm³·atm/mol·K.

**Step 2 — Rearrange PV = nRT for V**
V = nRT/P.

**Step 3 — Substitute**
V = (0.50 × 0.0821 × 300) ÷ 2.0.

**Step 4 — Calculate**
V = (12.315) ÷ 2.0 = **6.16 dm³**.

**Check.** At STP (1 atm, 273 K) 0.50 mol would be about 11.2 dm³; here the higher pressure (2 atm) roughly halves it and the higher temperature raises it a little, giving ≈ 6.16 dm³ — reasonable.`,
      quiz: [
        { prompt: "The ideal gas equation is…", options: ["PV = nRT", "P₁V₁ = P₂V₂", "C = kP", "PV = RT/n"], correctIndex: 0, explanation: "PV = nRT combines the gas laws." },
        { prompt: "In PV = nRT, n stands for the…", options: ["number of moles", "pressure", "temperature", "volume"], correctIndex: 0, explanation: "n is the amount in moles." },
        { prompt: "R with P in atm and V in dm³ is…", options: ["0.0821 dm³·atm/mol·K", "8.314 J/mol·K", "760", "22.4"], correctIndex: 0, explanation: "Use 0.0821 for atm and litres." },
        { prompt: "R in SI units (Pa, m³) is…", options: ["8.314 J/mol·K", "0.0821", "22.4", "1.0"], correctIndex: 0, explanation: "8.314 J/(mol·K) in SI units." },
        { prompt: "STP is defined as…", options: ["0 °C and 1 atm", "25 °C and 1 atm", "0 K and 0 atm", "100 °C and 1 atm"], correctIndex: 0, explanation: "STP = 273 K, 1 atm." },
        { prompt: "The molar volume of a gas at STP is about…", options: ["22.4 dm³", "1 dm³", "760 dm³", "101 dm³"], correctIndex: 0, explanation: "1 mol occupies 22.4 dm³ at STP." },
        { prompt: "To find n from PV = nRT, use n = …", options: ["PV/RT", "RT/PV", "PVRT", "P/VRT"], correctIndex: 0, explanation: "n = PV ÷ RT." },
        { prompt: "In PV = nRT, T must be in…", options: ["kelvin", "Celsius", "Fahrenheit", "any"], correctIndex: 0, explanation: "Absolute temperature only." },
        { prompt: "1 mole of any ideal gas at STP occupies the same…", options: ["volume", "mass", "pressure", "colour"], correctIndex: 0, explanation: "22.4 dm³ regardless of the gas." },
        { prompt: "To find V, rearrange to V = …", options: ["nRT/P", "PRT/n", "nP/RT", "RT/nP"], correctIndex: 0, explanation: "V = nRT ÷ P." },
        { prompt: "2 mol of gas at STP occupies about…", options: ["44.8 dm³", "22.4 dm³", "11.2 dm³", "2 dm³"], correctIndex: 0, explanation: "2 × 22.4 = 44.8 dm³." },
        { prompt: "The gas constant R links P, V, n and…", options: ["T", "mass", "density", "area"], correctIndex: 0, explanation: "R connects all four gas variables." },
        { prompt: "0.50 mol gas at 1 atm, 273 K occupies about…", options: ["11.2 dm³", "22.4 dm³", "44.8 dm³", "5.6 dm³"], correctIndex: 0, explanation: "0.50 × 22.4 = 11.2 dm³." },
        { prompt: "The ideal gas equation assumes the gas behaves…", options: ["ideally", "as a real gas with forces", "as a liquid", "as a solid"], correctIndex: 0, explanation: "It applies to ideal gases." },
        { prompt: "If T is doubled at constant P and n, V…", options: ["doubles", "halves", "stays same", "quarters"], correctIndex: 0, explanation: "V ∝ T from PV = nRT." },
        { prompt: "Which units go with R = 8.314?", options: ["Pa and m³", "atm and dm³", "mmHg and mL", "torr and L"], correctIndex: 0, explanation: "8.314 J/mol·K uses SI units." },
        { prompt: "To find the pressure of a gas, P = …", options: ["nRT/V", "V/nRT", "nR/VT", "RTV/n"], correctIndex: 0, explanation: "P = nRT ÷ V." },
        { prompt: "At STP, 0.25 mol of gas occupies…", options: ["5.6 dm³", "22.4 dm³", "11.2 dm³", "1 dm³"], correctIndex: 0, explanation: "0.25 × 22.4 = 5.6 dm³." },
        { prompt: "The value 22.4 dm³/mol applies only at…", options: ["STP (0 °C, 1 atm)", "room temperature", "any temperature", "high pressure"], correctIndex: 0, explanation: "Molar volume is 22.4 dm³ only at STP." },
        { prompt: "Which is NOT a variable in PV = nRT?", options: ["colour", "pressure", "volume", "temperature"], correctIndex: 0, explanation: "Colour is not part of the equation." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Write the ideal gas equation and state what each symbol represents.", answerKey: "PV = nRT, where P = pressure, V = volume, n = number of moles, R = the gas constant, and T = absolute temperature in kelvin. Award marks for the equation and correct meanings of the symbols.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "At STP (0 °C, 1 atm), the volume occupied by 1 mole of an ideal gas is approximately:", options: ["22.4 dm³", "11.2 dm³", "44.8 dm³", "1.0 dm³"], correctIndex: 0, answerKey: "The molar volume at STP is 22.4 dm³.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Which value of R should be used when pressure is in atmospheres and volume in dm³?", options: ["0.0821 dm³·atm/mol·K", "8.314 J/mol·K", "760 mmHg", "22.4 dm³/mol"], correctIndex: 0, answerKey: "Use R = 0.0821 for atm and litres.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Calculate the number of moles of an ideal gas that occupies 4.0 dm³ at 1.0 atm and 273 K. (R = 0.0821 dm³·atm/mol·K.)", answerKey: "n = PV/RT = (1.0 × 4.0)/(0.0821 × 273) = 4.0/22.41 = 0.179 ≈ 0.18 mol. Award marks for rearrangement, substitution and answer ≈ 0.18 mol.", marks: 3 },
        { type: "ESSAY", prompt: "Explain how the ideal gas equation PV = nRT combines the individual gas laws, and describe how you would use it to find the volume of a known amount of gas at a stated temperature and pressure.", answerKey: "A strong answer notes that PV = nRT contains Boyle's law (P ∝ 1/V at fixed n, T), Charles's law (V ∝ T at fixed n, P), Gay-Lussac's law (P ∝ T at fixed n, V) and Avogadro's law (V ∝ n at fixed P, T) in a single expression, with R as the proportionality constant. To find a volume: list P, n and T (converting T to kelvin and choosing R to match the pressure/volume units), rearrange to V = nRT/P, substitute and calculate. Award marks for linking the four laws to the equation and a correct method for finding V.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 10.4 The Ideal Gas Equation / molar mass from PV=nRT (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map:_Chemistry_-_The_Central_Science_(Brown_et_al.)/10:_Gases/10.04:_The_Ideal_Gas_Equation)
      slug: "gas-stoichiometry",
      title: "Gas Stoichiometry",
      objective:
        "By the end of the topic, learners should be able to use reacting gas volumes and the ideal gas equation to solve stoichiometry problems and find the molar mass of a gas. (MoE Grade 11 Period II, CONTENTS 4.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- Reactions of gases can be worked out from **volumes**, not just masses, because of Avogadro's law.
- **This topic:** reacting gas volumes and finding the molar mass of a gas.

## Reacting gas volumes (Gay-Lussac / Avogadro)

- **Gay-Lussac's law of combining volumes:** gases react in volumes that are in **simple whole-number ratios** (at the same T and P).
- Because equal volumes contain equal moles (Avogadro), the **mole ratio** in the balanced equation equals the **volume ratio** for gases.

Example: N₂(g) + 3H₂(g) → 2NH₃(g). 1 volume N₂ + 3 volumes H₂ → 2 volumes NH₃.

## Molar mass of a gas

- From PV = nRT and n = mass ÷ molar mass (n = m/M):

**M = mRT ÷ PV**

- Using density d = m/V:

**M = dRT ÷ P**

- So the molar mass of a gas can be found from its density at a known temperature and pressure.

## Using STP molar volume

- At STP, molar mass = density (g/dm³) × 22.4 dm³/mol, or moles = volume ÷ 22.4.

## Common errors and misconceptions

- **Applying volume ratios to solids/liquids** — combining-volume ratios work only for **gases**.
- **Forgetting to convert to kelvin** — T must be absolute in M = dRT/P.
- **Confusing mass and molar mass** — n = m/M; keep them separate.`,
      workedExample: `**Task.** 0.66 g of a gas occupies 500 cm³ at 1.0 atm and 27 °C. Calculate its molar mass. (R = 0.0821 dm³·atm/mol·K.)

**Step 1 — Convert units**
- mass m = 0.66 g; V = 500 cm³ = 0.500 dm³; P = 1.0 atm; T = 27 + 273 = 300 K.

**Step 2 — Choose the formula**
M = mRT ÷ PV.

**Step 3 — Substitute**
M = (0.66 × 0.0821 × 300) ÷ (1.0 × 0.500).

**Step 4 — Calculate**
- Top line = 0.66 × 0.0821 × 300 = 16.26.
- M = 16.26 ÷ 0.500 = **32.5 g/mol**.

**Conclusion.** The molar mass is about 32 g/mol, so the gas could be oxygen (O₂, 32 g/mol) or methanol vapour. The method finds molar mass directly from mass, volume, temperature and pressure.`,
      quiz: [
        { prompt: "Gases react in volumes that are in … ratios.", options: ["simple whole-number", "random", "irrational", "decimal"], correctIndex: 0, explanation: "Gay-Lussac's law of combining volumes." },
        { prompt: "For gases, the mole ratio equals the … ratio.", options: ["volume", "mass", "density", "pressure"], correctIndex: 0, explanation: "Equal volumes contain equal moles." },
        { prompt: "In N₂ + 3H₂ → 2NH₃, 10 cm³ N₂ reacts with … cm³ H₂.", options: ["30", "10", "20", "3"], correctIndex: 0, explanation: "1:3 ratio, so 30 cm³ H₂." },
        { prompt: "The molar mass of a gas from density is M = …", options: ["dRT/P", "PRT/d", "dP/RT", "RT/dP"], correctIndex: 0, explanation: "M = dRT ÷ P." },
        { prompt: "From PV = nRT with n = m/M, M = …", options: ["mRT/PV", "PV/mRT", "mPV/RT", "RT/mPV"], correctIndex: 0, explanation: "Substitute n = m/M and rearrange." },
        { prompt: "Combining-volume ratios apply only to…", options: ["gases", "solids", "liquids", "all states"], correctIndex: 0, explanation: "Only gases follow the volume ratios." },
        { prompt: "At STP, moles of a gas = volume ÷ …", options: ["22.4", "273", "760", "1"], correctIndex: 0, explanation: "Divide the volume (dm³) by 22.4." },
        { prompt: "In M = dRT/P, T must be in…", options: ["kelvin", "Celsius", "Fahrenheit", "any"], correctIndex: 0, explanation: "Absolute temperature is needed." },
        { prompt: "In 2H₂ + O₂ → 2H₂O(g), 20 cm³ H₂ needs … cm³ O₂.", options: ["10", "20", "40", "5"], correctIndex: 0, explanation: "2:1 ratio, so 10 cm³ O₂." },
        { prompt: "Density of a gas is mass ÷ …", options: ["volume", "moles", "pressure", "temperature"], correctIndex: 0, explanation: "d = m/V." },
        { prompt: "0.66 g in 0.5 dm³ at 1 atm, 300 K gives M ≈ …", options: ["32 g/mol", "16 g/mol", "64 g/mol", "8 g/mol"], correctIndex: 0, explanation: "M = mRT/PV ≈ 32 g/mol." },
        { prompt: "A gas with molar mass ~44 g/mol at STP could be…", options: ["CO₂", "H₂", "He", "O₂"], correctIndex: 0, explanation: "CO₂ has M = 44 g/mol." },
        { prompt: "1 mole of gas at STP has volume…", options: ["22.4 dm³", "44.8 dm³", "11.2 dm³", "1 dm³"], correctIndex: 0, explanation: "Molar volume at STP is 22.4 dm³." },
        { prompt: "The law of combining volumes was stated by…", options: ["Gay-Lussac", "Boyle", "Graham", "Dalton"], correctIndex: 0, explanation: "Gay-Lussac's law of combining volumes." },
        { prompt: "To find the mass of gas from moles, use m = …", options: ["n × M", "n ÷ M", "M ÷ n", "n + M"], correctIndex: 0, explanation: "mass = moles × molar mass." },
        { prompt: "44.8 dm³ of a gas at STP is … moles.", options: ["2", "1", "4", "0.5"], correctIndex: 0, explanation: "44.8 ÷ 22.4 = 2 mol." },
        { prompt: "Molar mass has units of…", options: ["g/mol", "dm³", "atm", "K"], correctIndex: 0, explanation: "Molar mass is grams per mole." },
        { prompt: "In C + O₂ → CO₂, the volume ratio O₂ : CO₂ is…", options: ["1 : 1", "2 : 1", "1 : 2", "3 : 1"], correctIndex: 0, explanation: "1 mol O₂ gives 1 mol CO₂ (both gases)." },
        { prompt: "If density of a gas at STP is 1.96 g/dm³, its molar mass is about…", options: ["44 g/mol", "22 g/mol", "88 g/mol", "2 g/mol"], correctIndex: 0, explanation: "1.96 × 22.4 ≈ 44 g/mol." },
        { prompt: "The key idea allowing volume-based stoichiometry is…", options: ["Avogadro's law", "Boyle's law", "Henry's law", "Graham's law"], correctIndex: 0, explanation: "Equal volumes = equal moles." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State Gay-Lussac's law of combining volumes and explain why, for gases, the mole ratio equals the volume ratio.", answerKey: "Gay-Lussac's law of combining volumes: gases react (and form gaseous products) in volumes that are in simple whole-number ratios at the same temperature and pressure. Because equal volumes of gases at the same T and P contain equal numbers of moles (Avogadro's law), the ratio of reacting volumes is the same as the mole ratio in the balanced equation. Award marks for the law and the Avogadro-based reasoning.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "In the reaction N₂(g) + 3H₂(g) → 2NH₃(g), what volume of hydrogen reacts completely with 25 cm³ of nitrogen?", options: ["75 cm³", "25 cm³", "50 cm³", "8.3 cm³"], correctIndex: 0, answerKey: "The N₂:H₂ ratio is 1:3, so 3 × 25 = 75 cm³ H₂.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "The molar mass of a gas can be found from its density using:", options: ["M = dRT/P", "M = P/dRT", "M = dP/RT", "M = RT/dP"], correctIndex: 0, answerKey: "M = dRT/P (derived from PV = nRT with n = m/M).", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "A 1.0 g sample of a gas occupies 0.75 dm³ at 1.0 atm and 300 K. Calculate its molar mass. (R = 0.0821 dm³·atm/mol·K.)", answerKey: "M = mRT/PV = (1.0 × 0.0821 × 300)/(1.0 × 0.75) = 24.63/0.75 = 32.8 ≈ 33 g/mol. Award marks for the formula, substitution and answer ≈ 33 g/mol.", marks: 3 },
        { type: "ESSAY", prompt: "Explain how the molar mass of a gas can be determined experimentally using the ideal gas equation, and how reacting gas volumes can be used to work out the stoichiometry of a gaseous reaction.", answerKey: "A full answer explains molar mass determination: measure the mass of a known volume of gas at a measured temperature and pressure, then use M = mRT/PV (or M = dRT/P using density) with T in kelvin and R matched to the units. For gas-volume stoichiometry: by Avogadro's law equal volumes contain equal moles, so the volume ratios of reacting gases equal the mole ratios in the balanced equation, allowing the amount of one gas to be found from another's volume (e.g. N₂ + 3H₂ → 2NH₃, 1:3:2 by volume). Award marks for the molar-mass method and the volume-ratio reasoning with a correct example.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 10.6 Gas Mixtures and Partial Pressures (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/10%3A_Gases/10.06%3A_Gas_Mixtures_and_Partial_Pressures) and CK-12 14.13 Gas Collection by Water Displacement (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(CK-12)/14%3A_The_Behavior_of_Gases/14.13%3A_Gas_Collection_by_Water_Displacement)
      slug: "daltons-law-of-partial-pressures",
      title: "Dalton's Law of Partial Pressures",
      objective:
        "By the end of the topic, learners should be able to state Dalton's law, calculate partial pressures from mole fractions, and correct for water vapour when a gas is collected over water. (MoE Grade 11 Period II, CONTENTS 5.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- In a mixture, each gas exerts its own pressure independently.
- **This topic:** Dalton's law, mole fractions, and collecting a gas over water.

## Dalton's law

- **Partial pressure** — the pressure a gas in a mixture would exert if it alone filled the container.
- **Dalton's law:** the **total** pressure of a mixture equals the **sum** of the partial pressures.

**P(total) = P₁ + P₂ + P₃ + …**

## Partial pressure and mole fraction

- The partial pressure of a gas equals its **mole fraction** times the total pressure:

**Pᵢ = χᵢ × P(total)**, where χᵢ = moles of gas i ÷ total moles.

- Example: air is ~21% O₂, so at 760 mmHg, P(O₂) ≈ 0.21 × 760 ≈ 160 mmHg.

## Collecting a gas over water

- A gas collected over water is mixed with **water vapour**.
- The total (atmospheric) pressure = pressure of dry gas + vapour pressure of water:

**P(gas) = P(total) − P(water vapour)**

- The vapour pressure of water depends only on temperature and is read from a table.

## Common errors and misconceptions

- **Ignoring water vapour** — subtract the water vapour pressure to get the dry gas pressure.
- **Adding pressures of different volumes** — Dalton's law applies to gases in the **same** container.
- **Mole fraction over 1** — mole fractions of all gases add up to exactly 1.`,
      workedExample: `**Task.** Hydrogen gas is collected over water at 25 °C. The total pressure in the tube is 755 mmHg and the vapour pressure of water at 25 °C is 24 mmHg. (a) Find the partial pressure of the dry hydrogen. (b) If the mixture also contained a trace of nitrogen at 5 mmHg, check the total pressure adds up.

**Part (a) — Correct for water vapour**
1. P(gas) = P(total) − P(water vapour).
2. P(H₂) = 755 − 24 = **731 mmHg**.

**Part (b) — Dalton's law check**
1. P(total) = P(H₂) + P(H₂O) + P(N₂) if nitrogen is present.
2. But here P(total) is fixed at 755 mmHg; the partial pressures must sum to it: 731 + 24 = 755 mmHg. ✓ (If 5 mmHg of N₂ were also present, the dry-gas share would be split between H₂ and N₂ so that all partial pressures still total 755 mmHg.)

**Conclusion.** The dry hydrogen exerts 731 mmHg once the 24 mmHg of water vapour is subtracted; Dalton's law guarantees all partial pressures add up to the measured total pressure.`,
      quiz: [
        { prompt: "The partial pressure of a gas is the pressure it would exert if it…", options: ["alone filled the container", "were a liquid", "were removed", "doubled in mass"], correctIndex: 0, explanation: "Partial pressure = pressure alone in the container." },
        { prompt: "Dalton's law: total pressure equals the … of partial pressures.", options: ["sum", "product", "difference", "average"], correctIndex: 0, explanation: "P(total) = ΣPᵢ." },
        { prompt: "Partial pressure Pᵢ = χᵢ × …", options: ["P(total)", "temperature", "volume", "moles"], correctIndex: 0, explanation: "Pᵢ = mole fraction × total pressure." },
        { prompt: "Mole fraction is moles of a gas ÷ …", options: ["total moles", "volume", "mass", "pressure"], correctIndex: 0, explanation: "χ = moles of gas / total moles." },
        { prompt: "The mole fractions of all gases in a mixture add up to…", options: ["1", "0", "100", "760"], correctIndex: 0, explanation: "Fractions total exactly 1." },
        { prompt: "For gas collected over water, P(gas) = P(total) − …", options: ["P(water vapour)", "P(total)", "volume", "temperature"], correctIndex: 0, explanation: "Subtract the water vapour pressure." },
        { prompt: "The vapour pressure of water depends on…", options: ["temperature", "the gas collected", "the container", "colour"], correctIndex: 0, explanation: "It depends only on temperature." },
        { prompt: "Air is about 21% O₂; at 760 mmHg, P(O₂) ≈ …", options: ["160 mmHg", "760 mmHg", "21 mmHg", "600 mmHg"], correctIndex: 0, explanation: "0.21 × 760 ≈ 160 mmHg." },
        { prompt: "If P(total) = 800 mmHg and P(water) = 20 mmHg, the dry gas pressure is…", options: ["780 mmHg", "820 mmHg", "20 mmHg", "800 mmHg"], correctIndex: 0, explanation: "800 − 20 = 780 mmHg." },
        { prompt: "Dalton's law applies to gases in the…", options: ["same container", "different rooms", "solid state", "vacuum only"], correctIndex: 0, explanation: "Partial pressures add in one container." },
        { prompt: "A gas collected over water is mixed with…", options: ["water vapour", "oxygen only", "mercury", "salt"], correctIndex: 0, explanation: "Water evaporates into the gas." },
        { prompt: "Air is ~78% N₂; P(N₂) at 760 mmHg ≈ …", options: ["593 mmHg", "760 mmHg", "160 mmHg", "78 mmHg"], correctIndex: 0, explanation: "0.78 × 760 ≈ 593 mmHg." },
        { prompt: "Each gas in a mixture contributes to pressure…", options: ["independently", "only if heaviest", "only if lightest", "not at all"], correctIndex: 0, explanation: "Each acts independently." },
        { prompt: "If a mixture is 0.5 O₂ and 0.5 N₂ by mole fraction at 1 atm, P(O₂) is…", options: ["0.5 atm", "1 atm", "0.25 atm", "2 atm"], correctIndex: 0, explanation: "0.5 × 1 atm = 0.5 atm." },
        { prompt: "The reason we correct for water vapour is that the collected gas is…", options: ["not pure (contains vapour)", "too cold", "solid", "compressed"], correctIndex: 0, explanation: "Water vapour adds to the total pressure." },
        { prompt: "Which is TRUE of partial pressures?", options: ["they sum to the total pressure", "they multiply to the total", "they are all equal", "they are always zero"], correctIndex: 0, explanation: "Dalton's law: they add up." },
        { prompt: "To find P(H₂) collected over water you subtract the…", options: ["water vapour pressure", "atmospheric pressure", "total moles", "temperature"], correctIndex: 0, explanation: "P(H₂) = P(total) − P(water)." },
        { prompt: "A gas with mole fraction 0.10 in a 500 kPa mixture has partial pressure…", options: ["50 kPa", "500 kPa", "5 kPa", "0.10 kPa"], correctIndex: 0, explanation: "0.10 × 500 = 50 kPa." },
        { prompt: "Vapour pressure of water at a fixed temperature is read from a…", options: ["table", "ruler", "balance", "voltmeter"], correctIndex: 0, explanation: "Standard tables give it by temperature." },
        { prompt: "Dalton's law is most useful for…", options: ["gas mixtures", "pure solids", "pure liquids", "single crystals"], correctIndex: 0, explanation: "It describes mixtures of gases." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State Dalton's law of partial pressures and define partial pressure.", answerKey: "Dalton's law: the total pressure of a mixture of gases equals the sum of the partial pressures of the individual gases (P(total) = P₁ + P₂ + ...). The partial pressure of a gas is the pressure it would exert if it alone occupied the whole container at the same temperature. Award marks for the law and the definition.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "A mixture contains oxygen at a mole fraction of 0.25 at a total pressure of 400 kPa. The partial pressure of oxygen is:", options: ["100 kPa", "400 kPa", "25 kPa", "1600 kPa"], correctIndex: 0, answerKey: "P(O₂) = 0.25 × 400 = 100 kPa.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "When a gas is collected over water, the pressure of the dry gas is found by:", options: ["subtracting the vapour pressure of water from the total pressure", "adding the vapour pressure of water", "multiplying by the mole fraction of water", "ignoring the water vapour"], correctIndex: 0, answerKey: "P(gas) = P(total) − P(water vapour).", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Oxygen is collected over water at 20 °C. The total pressure is 758 mmHg and the vapour pressure of water at 20 °C is 18 mmHg. Find the partial pressure of the dry oxygen.", answerKey: "P(O₂) = P(total) − P(water) = 758 − 18 = 740 mmHg. Award marks for the correct method and answer 740 mmHg.", marks: 2 },
        { type: "ESSAY", prompt: "Explain why a gas collected over water is not pure, and show how Dalton's law is used to find the pressure and hence the amount of the dry gas.", answerKey: "A strong answer explains that when a gas is collected by bubbling through and displacing water, water evaporates into the gas so the sample is a mixture of the gas and water vapour. By Dalton's law the measured (atmospheric) pressure equals the partial pressure of the dry gas plus the vapour pressure of water, so P(gas) = P(total) − P(water vapour), with the water vapour pressure read from a table for the given temperature. Once the dry-gas partial pressure is known, the amount of dry gas can be found using the ideal gas equation (n = PV/RT). Award marks for the water-vapour contamination, the pressure correction, and linking to the amount of gas.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 10.7 Kinetic-Molecular Theory (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/10%3A_Gases/10.07%3A_Kinetic-Molecular_Theory)
      slug: "kinetic-molecular-theory-of-gases",
      title: "The Kinetic Molecular Theory of Gases",
      objective:
        "By the end of the topic, learners should be able to state the postulates of the kinetic molecular theory and use them to explain gas pressure and the meaning of temperature. (MoE Grade 11 Period II, CONTENTS 6.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- The gas laws describe *how* gases behave; the kinetic molecular theory explains *why*.
- **This topic:** the postulates of the theory and how they explain pressure and temperature.

## The postulates

1. A gas is made of a **large number of tiny particles** in constant, **random motion**.
2. The particles' own **volume is negligible** compared with the volume of the container (mostly empty space).
3. There are **no significant forces** of attraction or repulsion between the particles.
4. Collisions between particles and with the walls are **perfectly elastic** — no kinetic energy is lost.
5. The **average kinetic energy** of the particles depends only on the **absolute temperature**.

## Explaining pressure

- Pressure is caused by the particles **colliding with the container walls**.
- More frequent or more forceful collisions (more particles, higher speed) give a higher pressure.

## The meaning of temperature

- **Temperature measures the average kinetic energy** of the particles.
- Average kinetic energy is directly proportional to the absolute temperature: higher T = faster particles.
- At the **same temperature**, all gases have the same average kinetic energy (but heavier molecules move more slowly).

\`\`\`svg Gas particles colliding with walls
<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gas particles moving randomly and hitting the container walls">
  <rect x="20" y="20" width="160" height="90" fill="none" stroke="#334155"/>
  <circle cx="60" cy="45" r="5" fill="#2563eb"/><line x1="60" y1="45" x2="80" y2="35" stroke="#2563eb"/>
  <circle cx="110" cy="70" r="5" fill="#2563eb"/><line x1="110" y1="70" x2="95" y2="85" stroke="#2563eb"/>
  <circle cx="150" cy="50" r="5" fill="#2563eb"/><line x1="150" y1="50" x2="165" y2="60" stroke="#2563eb"/>
  <circle cx="80" cy="95" r="5" fill="#2563eb"/><line x1="80" y1="95" x2="70" y2="80" stroke="#2563eb"/>
  <text x="100" y="125" font-size="9" text-anchor="middle" fill="#334155">random motion; collisions cause pressure</text>
</svg>
\`\`\`

## Common errors and misconceptions

- **Thinking particles slow down over time** — collisions are elastic, so no energy is lost.
- **Temperature measures speed** — it measures average kinetic energy; heavier molecules are slower at the same T.
- **Gas particles fill most of the space** — the particles' own volume is negligible; a gas is mostly empty space.`,
      workedExample: `**Task.** Use the kinetic molecular theory to explain (a) why a gas exerts pressure and (b) why heating a gas in a rigid sealed container increases its pressure.

**Part (a) — Why a gas exerts pressure**
1. A gas is made of many particles in constant random motion.
2. These particles continually collide with the walls of the container.
3. Each collision exerts a tiny force; the total force per unit area is the pressure.

**Part (b) — Heating at constant volume**
1. Temperature is a measure of the average kinetic energy of the particles.
2. Heating raises the average kinetic energy, so the particles move **faster**.
3. Faster particles hit the walls **more often** and **harder**.
4. More frequent and more forceful collisions raise the pressure (this is Gay-Lussac's law explained by the theory).

**Conclusion.** Pressure comes from wall collisions, and heating speeds up the particles so they collide more forcefully and frequently, raising the pressure.`,
      quiz: [
        { prompt: "In the kinetic theory, gas particles are in constant … motion.", options: ["random", "circular", "straight fixed", "no"], correctIndex: 0, explanation: "Particles move randomly." },
        { prompt: "The volume of the gas particles themselves is assumed to be…", options: ["negligible", "very large", "half the container", "equal to the container"], correctIndex: 0, explanation: "Particle volume is negligible." },
        { prompt: "Forces between ideal gas particles are assumed to be…", options: ["negligible", "very strong", "attractive only", "repulsive only"], correctIndex: 0, explanation: "No significant intermolecular forces." },
        { prompt: "Collisions of gas particles are described as…", options: ["perfectly elastic", "inelastic", "sticky", "explosive"], correctIndex: 0, explanation: "No kinetic energy is lost." },
        { prompt: "Gas pressure is caused by particles colliding with the…", options: ["container walls", "sun", "ground only", "each other only"], correctIndex: 0, explanation: "Wall collisions create pressure." },
        { prompt: "Temperature is a measure of the average … of the particles.", options: ["kinetic energy", "mass", "colour", "charge"], correctIndex: 0, explanation: "T measures average kinetic energy." },
        { prompt: "Average kinetic energy is directly proportional to the … temperature.", options: ["absolute (kelvin)", "Celsius", "Fahrenheit", "room"], correctIndex: 0, explanation: "KE ∝ T (kelvin)." },
        { prompt: "At the same temperature, all gases have the same average…", options: ["kinetic energy", "speed", "mass", "volume"], correctIndex: 0, explanation: "Equal KE, not equal speed." },
        { prompt: "Because collisions are elastic, gas particles do not…", options: ["lose kinetic energy", "move", "collide", "have mass"], correctIndex: 0, explanation: "Elastic collisions conserve KE." },
        { prompt: "Heating a gas makes the particles move…", options: ["faster", "slower", "in circles", "not at all"], correctIndex: 0, explanation: "More KE means higher speed." },
        { prompt: "A gas is mostly…", options: ["empty space", "solid particles", "liquid", "walls"], correctIndex: 0, explanation: "Particle volume is negligible." },
        { prompt: "More frequent wall collisions cause a … pressure.", options: ["higher", "lower", "zero", "constant"], correctIndex: 0, explanation: "More collisions raise pressure." },
        { prompt: "At the same temperature, a heavier gas molecule moves … than a lighter one.", options: ["slower", "faster", "at the same speed", "not at all"], correctIndex: 0, explanation: "Equal KE means heavier = slower." },
        { prompt: "The kinetic theory explains the gas laws in terms of…", options: ["moving particles", "chemical bonds", "electric charge", "colour"], correctIndex: 0, explanation: "It uses particle motion." },
        { prompt: "Compressing a gas into a smaller volume makes wall collisions…", options: ["more frequent (higher pressure)", "less frequent", "stop", "elastic"], correctIndex: 0, explanation: "Smaller volume raises collision frequency." },
        { prompt: "Which is NOT a postulate of the theory?", options: ["particles attract strongly", "particles move randomly", "collisions are elastic", "particle volume is negligible"], correctIndex: 0, explanation: "Ideal gases have negligible forces." },
        { prompt: "Increasing temperature at constant volume raises pressure because particles hit walls…", options: ["harder and more often", "less often", "gently", "not at all"], correctIndex: 0, explanation: "Faster particles collide more forcefully." },
        { prompt: "The theory assumes a gas contains a … number of particles.", options: ["large", "small fixed", "single", "zero"], correctIndex: 0, explanation: "Very many particles." },
        { prompt: "A gas expands to fill its container because the particles…", options: ["move freely in all directions", "attract the walls", "are bonded", "are solid"], correctIndex: 0, explanation: "Free random motion fills the space." },
        { prompt: "Which quantity is proportional to absolute temperature?", options: ["average kinetic energy", "average colour", "molar mass", "pressure only"], correctIndex: 0, explanation: "Average KE ∝ T." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State three postulates of the kinetic molecular theory of gases.", answerKey: "Any three of: (1) a gas is made of a large number of tiny particles in constant random motion; (2) the volume of the particles is negligible compared with the container; (3) there are no significant forces between the particles; (4) collisions are perfectly elastic (no kinetic energy lost); (5) the average kinetic energy depends only on the absolute temperature. Award a mark for each correct postulate.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "According to the kinetic theory, the temperature of a gas is a measure of the average:", options: ["kinetic energy of the particles", "mass of the particles", "colour of the gas", "size of the container"], correctIndex: 0, answerKey: "Temperature measures the average kinetic energy.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Gas pressure is explained by the theory as arising from:", options: ["particles colliding with the container walls", "particles attracting each other", "particles dissolving", "chemical bonds breaking"], correctIndex: 0, answerKey: "Pressure comes from wall collisions.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Two gases, hydrogen and oxygen, are at the same temperature. Compare their average kinetic energies and their average speeds.", answerKey: "At the same temperature both gases have the same average kinetic energy. However, because hydrogen molecules are much lighter than oxygen molecules, hydrogen molecules move faster on average (to have the same kinetic energy a lighter particle must move faster). Award marks for equal kinetic energies and for hydrogen being faster.", marks: 2 },
        { type: "ESSAY", prompt: "Use the postulates of the kinetic molecular theory to explain how a gas exerts pressure and why increasing the temperature at constant volume increases the pressure.", answerKey: "A full answer states that a gas consists of many particles in constant random motion that collide with the container walls; each collision exerts a small force, and the total force per unit area is the pressure. Temperature measures the average kinetic energy of the particles, so heating the gas at constant volume increases the average kinetic energy and the particles move faster; they then strike the walls both more frequently and with greater force, so the pressure rises. Award marks for the collision origin of pressure, the temperature–kinetic-energy link, and the effect on collision frequency/force.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 10.7 Kinetic-Molecular Theory / root-mean-square speed (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/10%3A_Gases/10.07%3A_Kinetic-Molecular_Theory)
      slug: "root-mean-square-velocity",
      title: "Root Mean Square Velocity",
      objective:
        "By the end of the topic, learners should be able to define the root-mean-square speed and use urms = √(3RT/M) to compare molecular speeds. (MoE Grade 11 Period II, CONTENTS 7.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- Gas particles do not all move at the same speed; the **root-mean-square (rms) speed** is a useful average.
- **This topic:** the rms speed and how it depends on temperature and molar mass.

## Root-mean-square speed

- **Root-mean-square speed (urms)** — the speed of a particle with the average kinetic energy; found by squaring the speeds, averaging, then taking the square root.

**urms = √(3RT ÷ M)**

- **R** = 8.314 J/(mol·K); **T** = absolute temperature (K); **M** = molar mass in **kg/mol**.

## What the formula shows

- urms is **proportional to √T** — hotter gases move faster.
- urms is **inversely proportional to √M** — heavier molecules move slower.
- So light gases (H₂, He) move much faster than heavy gases (CO₂) at the same temperature.

## Distribution of speeds

- At any temperature there is a spread of molecular speeds (the Maxwell–Boltzmann distribution).
- Raising the temperature shifts the distribution to **higher speeds** and flattens it.

## Common errors and misconceptions

- **Using M in g/mol** — molar mass must be in **kg/mol** with R = 8.314.
- **Using T in °C** — use kelvin.
- **Thinking all particles move at urms** — it is an average; particles have a range of speeds.`,
      workedExample: `**Task.** Calculate the root-mean-square speed of oxygen molecules, O₂, at 300 K. (Molar mass of O₂ = 32 g/mol = 0.032 kg/mol; R = 8.314 J/mol·K.)

**Step 1 — Write the formula**
urms = √(3RT ÷ M).

**Step 2 — Substitute the values (M in kg/mol)**
urms = √[(3 × 8.314 × 300) ÷ 0.032].

**Step 3 — Work out the top line**
3 × 8.314 × 300 = 7482.6.

**Step 4 — Divide and take the square root**
- 7482.6 ÷ 0.032 = 233 831.
- urms = √233 831 ≈ **484 m/s**.

**Conclusion.** Oxygen molecules move at about 480 m/s at 300 K. A lighter gas such as hydrogen (M = 0.002 kg/mol) would move about 4 times faster at the same temperature, because urms ∝ 1/√M.`,
      quiz: [
        { prompt: "The root-mean-square speed formula is urms = …", options: ["√(3RT/M)", "3RT/M", "√(M/3RT)", "RT/3M"], correctIndex: 0, explanation: "urms = √(3RT ÷ M)." },
        { prompt: "In urms = √(3RT/M), M must be in…", options: ["kg/mol", "g/mol", "g", "kg"], correctIndex: 0, explanation: "Use kg/mol with R = 8.314." },
        { prompt: "urms is proportional to the square root of…", options: ["absolute temperature", "pressure", "volume", "colour"], correctIndex: 0, explanation: "urms ∝ √T." },
        { prompt: "urms is inversely proportional to the square root of…", options: ["molar mass", "temperature", "pressure", "moles"], correctIndex: 0, explanation: "urms ∝ 1/√M." },
        { prompt: "At the same temperature, lighter gases move…", options: ["faster", "slower", "at the same speed", "not at all"], correctIndex: 0, explanation: "Smaller M means larger urms." },
        { prompt: "Raising the temperature … the rms speed.", options: ["increases", "decreases", "does not change", "reverses"], correctIndex: 0, explanation: "urms rises with √T." },
        { prompt: "The value of R to use in urms is…", options: ["8.314 J/mol·K", "0.0821", "760", "22.4"], correctIndex: 0, explanation: "SI value 8.314 J/mol·K." },
        { prompt: "The spread of molecular speeds is described by the … distribution.", options: ["Maxwell–Boltzmann", "Bohr", "Dalton", "Henry"], correctIndex: 0, explanation: "Maxwell–Boltzmann distribution." },
        { prompt: "At 300 K, O₂ (M = 0.032 kg/mol) has urms about…", options: ["480 m/s", "48 m/s", "4800 m/s", "5 m/s"], correctIndex: 0, explanation: "√(3×8.314×300/0.032) ≈ 484 m/s." },
        { prompt: "Hydrogen moves faster than oxygen at the same T because it has a smaller…", options: ["molar mass", "temperature", "pressure", "charge"], correctIndex: 0, explanation: "Lighter molecules are faster." },
        { prompt: "The rms speed is a type of…", options: ["average speed", "maximum speed", "minimum speed", "colour"], correctIndex: 0, explanation: "It is a speed averaged in a special way." },
        { prompt: "T in the urms formula is in…", options: ["kelvin", "Celsius", "Fahrenheit", "any"], correctIndex: 0, explanation: "Absolute temperature only." },
        { prompt: "Quadrupling the absolute temperature … the rms speed.", options: ["doubles", "quadruples", "halves", "keeps"], correctIndex: 0, explanation: "√4 = 2, so speed doubles." },
        { prompt: "A gas with four times the molar mass has an rms speed … that of the lighter gas.", options: ["half", "double", "the same", "four times"], correctIndex: 0, explanation: "1/√4 = 1/2." },
        { prompt: "Raising the temperature shifts the speed distribution toward…", options: ["higher speeds", "lower speeds", "zero", "no change"], correctIndex: 0, explanation: "Hotter gas is faster on average." },
        { prompt: "Do all molecules in a gas move at the same speed?", options: ["no, there is a range", "yes, all the same", "only two speeds", "none move"], correctIndex: 0, explanation: "There is a distribution of speeds." },
        { prompt: "urms depends on temperature and…", options: ["molar mass", "colour", "container shape", "pressure"], correctIndex: 0, explanation: "urms = √(3RT/M)." },
        { prompt: "To use urms with R = 8.314, energy is in…", options: ["joules", "atmospheres", "litres", "grams"], correctIndex: 0, explanation: "SI energy unit is the joule." },
        { prompt: "At absolute zero, the rms speed would be…", options: ["zero", "maximum", "the same", "negative"], correctIndex: 0, explanation: "urms ∝ √T, so zero at 0 K." },
        { prompt: "Which gas has the highest urms at 300 K?", options: ["He (light)", "CO₂ (heavy)", "O₂", "N₂"], correctIndex: 0, explanation: "The lightest gas is fastest." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Write the formula for the root-mean-square speed of a gas and state what each symbol means.", answerKey: "urms = √(3RT/M), where urms is the root-mean-square speed, R is the gas constant (8.314 J/mol·K), T is the absolute temperature in kelvin, and M is the molar mass in kg/mol. Award marks for the formula and correct meanings of R, T and M.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The root-mean-square speed of a gas is proportional to:", options: ["the square root of the absolute temperature", "the temperature squared", "the molar mass", "the pressure"], correctIndex: 0, answerKey: "urms ∝ √T.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "At the same temperature, which gas has the greatest root-mean-square speed?", options: ["hydrogen (M = 2)", "oxygen (M = 32)", "carbon dioxide (M = 44)", "chlorine (M = 71)"], correctIndex: 0, answerKey: "The lightest gas (smallest M) has the highest urms.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain how the rms speed of a gas changes if its absolute temperature is increased four times, and if its molar mass is increased four times.", answerKey: "Since urms = √(3RT/M): increasing T four times multiplies urms by √4 = 2 (the speed doubles); increasing M four times multiplies urms by 1/√4 = 1/2 (the speed halves). Award marks for both correct effects with reasoning.", marks: 2 },
        { type: "ESSAY", prompt: "Explain what the root-mean-square speed represents, how it depends on temperature and molar mass, and why hydrogen molecules move faster than oxygen molecules at the same temperature.", answerKey: "A strong answer explains that the rms speed is the speed of a particle having the average kinetic energy (obtained by averaging the squares of the speeds and taking the square root), given by urms = √(3RT/M). It increases with the square root of the absolute temperature and decreases with the square root of the molar mass. At the same temperature all gases have equal average kinetic energy, so a lighter molecule (hydrogen, M = 2) must move faster than a heavier one (oxygen, M = 32) to have the same kinetic energy; quantitatively urms ∝ 1/√M, so hydrogen moves about 4 times faster. Award marks for the meaning of urms, the temperature and molar-mass dependence, and the hydrogen/oxygen comparison.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 10.8 Molecular Effusion and Diffusion (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/10%3A_Gases/10.08%3A_Molecular_Effusion_and_Diffusion)
      slug: "effusion-and-diffusion",
      title: "Effusion and Diffusion",
      objective:
        "By the end of the topic, learners should be able to define effusion and diffusion and use Graham's law to compare rates for gases of different molar mass. (MoE Grade 11 Period II, CONTENTS 8.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- Gases spread out and escape at rates that depend on how fast their molecules move.
- **This topic:** effusion, diffusion and Graham's law.

## Definitions

- **Diffusion** — the gradual spreading and mixing of a gas through another gas (or space) due to random molecular motion, without stirring.
- **Effusion** — the escape of gas molecules one at a time through a very small hole into a vacuum.

## Graham's law

- **Graham's law:** the rate of effusion (or diffusion) of a gas is **inversely proportional to the square root of its molar mass**.

**rate(A) ÷ rate(B) = √(M(B) ÷ M(A))**

- Lighter gases effuse and diffuse **faster** than heavier gases.

## Why lighter gases are faster

- At the same temperature all gases have the same average kinetic energy (½mv²).
- To have the same kinetic energy, a lighter molecule must move **faster**, so it escapes and spreads more quickly.

## Everyday examples

- Helium (M = 4) leaks from a balloon faster than air (M ≈ 29) — about √(29/4) ≈ 2.7 times faster.
- The smell of perfume spreads across a room by diffusion.

## Common errors and misconceptions

- **Confusing effusion and diffusion** — effusion is escape through a tiny hole; diffusion is spreading and mixing.
- **Direct proportion to mass** — the rate depends on 1/√M, not M.
- **Heavier gas faster** — the lighter gas is always faster.`,
      workedExample: `**Task.** Compare the rates of effusion of hydrogen (H₂, M = 2 g/mol) and oxygen (O₂, M = 32 g/mol) at the same temperature and pressure.

**Step 1 — Write Graham's law**
rate(H₂) ÷ rate(O₂) = √(M(O₂) ÷ M(H₂)).

**Step 2 — Substitute the molar masses**
= √(32 ÷ 2) = √16.

**Step 3 — Evaluate**
= **4**.

**Conclusion.** Hydrogen effuses **4 times faster** than oxygen. This is because hydrogen molecules are 16 times lighter, so (at equal kinetic energy) they move √16 = 4 times faster, escaping through a small hole four times as quickly.`,
      quiz: [
        { prompt: "Diffusion is the … of a gas through another due to random motion.", options: ["spreading and mixing", "escape through a hole", "settling", "freezing"], correctIndex: 0, explanation: "Diffusion is gradual mixing." },
        { prompt: "Effusion is the escape of gas through a…", options: ["tiny hole into a vacuum", "large opening", "solid wall", "liquid"], correctIndex: 0, explanation: "Effusion is escape through a small hole." },
        { prompt: "Graham's law: rate of effusion is inversely proportional to the square root of…", options: ["molar mass", "temperature", "pressure", "volume"], correctIndex: 0, explanation: "rate ∝ 1/√M." },
        { prompt: "Lighter gases effuse … than heavier gases.", options: ["faster", "slower", "at the same rate", "not at all"], correctIndex: 0, explanation: "Smaller M means faster effusion." },
        { prompt: "Graham's law formula is rate(A)/rate(B) = …", options: ["√(M(B)/M(A))", "M(A)/M(B)", "√(M(A)/M(B))", "M(B)/M(A)"], correctIndex: 0, explanation: "Ratio of square roots of molar masses (inverted)." },
        { prompt: "Hydrogen (M=2) effuses … times faster than oxygen (M=32).", options: ["4", "2", "16", "8"], correctIndex: 0, explanation: "√(32/2) = √16 = 4." },
        { prompt: "The smell of perfume crossing a room is an example of…", options: ["diffusion", "effusion", "condensation", "sublimation"], correctIndex: 0, explanation: "Perfume diffuses through the air." },
        { prompt: "A helium balloon deflates faster than an air one because helium is…", options: ["lighter (effuses faster)", "heavier", "coloured", "solid"], correctIndex: 0, explanation: "Lighter gas effuses faster." },
        { prompt: "Lighter molecules move faster because at the same T all gases have equal…", options: ["kinetic energy", "mass", "size", "colour"], correctIndex: 0, explanation: "Equal KE means lighter = faster." },
        { prompt: "Helium (M=4) effuses about … times faster than air (M≈29).", options: ["2.7", "7.3", "1.0", "29"], correctIndex: 0, explanation: "√(29/4) ≈ 2.7." },
        { prompt: "Which spreads by escaping through a pinhole into a vacuum?", options: ["effusion", "diffusion", "distillation", "filtration"], correctIndex: 0, explanation: "Effusion is escape through a small hole." },
        { prompt: "A gas twice as heavy effuses … as fast as a lighter gas.", options: ["1/√2", "twice", "half", "√2"], correctIndex: 0, explanation: "rate ∝ 1/√M." },
        { prompt: "Graham's law depends on which property of the gas?", options: ["molar mass", "colour", "container", "charge"], correctIndex: 0, explanation: "Only molar mass (at fixed T)." },
        { prompt: "If two gases have equal molar mass, their effusion rates are…", options: ["equal", "very different", "zero", "reversed"], correctIndex: 0, explanation: "Same M gives same rate." },
        { prompt: "Diffusion happens even without…", options: ["stirring", "molecules", "temperature", "gas"], correctIndex: 0, explanation: "Random motion mixes the gases without stirring." },
        { prompt: "CO₂ (M=44) diffuses … than He (M=4).", options: ["slower", "faster", "at the same rate", "not at all"], correctIndex: 0, explanation: "Heavier gas is slower." },
        { prompt: "Graham's law confirms lighter molecules have higher…", options: ["average speed", "mass", "molar mass", "density"], correctIndex: 0, explanation: "Lower M means higher speed." },
        { prompt: "The ratio of rates for O₂ to H₂ is…", options: ["1/4", "4", "16", "1/16"], correctIndex: 0, explanation: "O₂ is 4 times slower, so rate ratio 1/4." },
        { prompt: "Effusion is used to separate isotopes because they differ slightly in…", options: ["molar mass", "colour", "charge", "shape"], correctIndex: 0, explanation: "Small mass differences give different rates." },
        { prompt: "Graham's law is a consequence of the … theory.", options: ["kinetic molecular", "atomic bonding", "collision colour", "acid–base"], correctIndex: 0, explanation: "It follows from equal average kinetic energy." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define effusion and diffusion and state Graham's law.", answerKey: "Effusion is the escape of gas molecules through a very small hole into a vacuum. Diffusion is the gradual spreading and mixing of gases due to random molecular motion, without stirring. Graham's law states that the rate of effusion (or diffusion) of a gas is inversely proportional to the square root of its molar mass. Award marks for the two definitions and the law.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "According to Graham's law, the rate of effusion of a gas is inversely proportional to:", options: ["the square root of its molar mass", "its molar mass", "the square of its molar mass", "its temperature"], correctIndex: 0, answerKey: "rate ∝ 1/√M.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Methane (M = 16) effuses how many times faster than sulfur dioxide (M = 64)?", options: ["2 times", "4 times", "16 times", "0.5 times"], correctIndex: 0, answerKey: "√(64/16) = √4 = 2 times faster.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain why a light gas diffuses faster than a heavy gas at the same temperature.", answerKey: "At the same temperature all gases have the same average kinetic energy (½mv²). A lighter molecule has a smaller mass, so to have the same kinetic energy it must move at a higher speed; the faster-moving lighter molecules spread out (diffuse) and escape (effuse) more quickly than heavier, slower molecules. Award marks for equal kinetic energy and the link between lower mass and higher speed.", marks: 2 },
        { type: "ESSAY", prompt: "State Graham's law and use it, with a worked example, to compare the rates of effusion of two named gases, explaining the result in terms of molecular motion.", answerKey: "A full answer states Graham's law (rate ∝ 1/√M) and works an example such as hydrogen (M = 2) versus oxygen (M = 32): rate(H₂)/rate(O₂) = √(32/2) = √16 = 4, so hydrogen effuses four times faster. It explains that at the same temperature both gases have equal average kinetic energy, so the lighter hydrogen molecules move faster (four times) and therefore escape through a small hole more quickly. Award marks for the law, a correct worked ratio, and the kinetic-molecular explanation.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 10.9 Real Gases: Deviations from Ideal Behavior (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/10%3A_Gases/10.09%3A_Real_Gases_-_Deviations_from_Ideal_Behavior)
      slug: "real-gases",
      title: "Real Gases",
      objective:
        "By the end of the topic, learners should be able to explain why real gases deviate from ideal behaviour and describe the van der Waals corrections. (MoE Grade 11 Period II, CONTENTS 9.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- The ideal gas equation assumes particles with no volume and no forces — real gases are not quite like that.
- **This topic:** why real gases deviate from ideal behaviour and how the model is corrected.

## Why real gases deviate

- Two ideal-gas assumptions break down:
1. Real molecules **have a real volume**, which matters when they are squeezed close together.
2. Real molecules **attract each other** (intermolecular forces), which matters when they move slowly.

## When deviations are largest

- **High pressure** — molecules are close, so their own volume and attractions matter.
- **Low temperature** — molecules move slowly, so attractions pull them together.
- Deviations reduce the pressure below (attractions) and change the volume from the ideal prediction.

## When a gas behaves most ideally

- **Low pressure and high temperature** — molecules are far apart and moving fast, so both assumptions hold well.

## The van der Waals equation

- The ideal gas law is corrected with two constants:

**(P + an²/V²)(V − nb) = nRT**

- **a** corrects for the **attractive forces** between molecules.
- **b** corrects for the **volume** taken up by the molecules themselves.

## Common errors and misconceptions

- **Thinking all gases are ideal** — real gases deviate, especially when cold and compressed.
- **Deviations biggest at high T** — they are biggest at **low** T and **high** P.
- **Mixing up a and b** — a is for attractions, b is for molecular volume.`,
      workedExample: `**Task.** Explain, using the ideas behind the van der Waals equation, why carbon dioxide behaves less ideally than helium, and under what conditions any real gas is closest to ideal.

**Step 1 — Recall the two corrections**
- The 'a' term corrects for attractive forces; the 'b' term corrects for molecular volume.

**Step 2 — Compare CO₂ and He**
- CO₂ molecules are larger and have stronger intermolecular attractions than the small, weakly interacting helium atoms.
- So CO₂ has a **larger 'a'** (and larger 'b'), meaning it deviates more from ideal behaviour.

**Step 3 — Conditions for ideal behaviour**
- Deviations are worst at **high pressure** (molecules crowded) and **low temperature** (molecules slow, attractions dominate).
- Therefore any real gas behaves most ideally at **low pressure and high temperature**, where molecules are far apart and moving fast.

**Conclusion.** CO₂ deviates more than helium because it has greater molecular size and stronger attractions (larger van der Waals a and b); all real gases approach ideal behaviour at low pressure and high temperature.`,
      quiz: [
        { prompt: "Real gases deviate from ideal behaviour because their molecules have volume and…", options: ["attractive forces", "no mass", "no motion", "colour"], correctIndex: 0, explanation: "Real molecules attract each other and take up space." },
        { prompt: "Deviations from ideal behaviour are largest at…", options: ["high pressure and low temperature", "low pressure and high temperature", "any conditions", "room temperature only"], correctIndex: 0, explanation: "Crowded, slow molecules deviate most." },
        { prompt: "A real gas behaves most ideally at…", options: ["low pressure and high temperature", "high pressure and low temperature", "high pressure only", "low temperature only"], correctIndex: 0, explanation: "Far apart and fast-moving = nearly ideal." },
        { prompt: "The van der Waals constant 'a' corrects for…", options: ["intermolecular attractions", "molecular volume", "temperature", "pressure units"], correctIndex: 0, explanation: "'a' accounts for attractive forces." },
        { prompt: "The van der Waals constant 'b' corrects for…", options: ["molecular volume", "attractions", "temperature", "moles"], correctIndex: 0, explanation: "'b' accounts for the volume of molecules." },
        { prompt: "The van der Waals equation is…", options: ["(P + an²/V²)(V − nb) = nRT", "PV = nRT", "P₁V₁ = P₂V₂", "C = kP"], correctIndex: 0, explanation: "It corrects the ideal gas law." },
        { prompt: "At high pressure, the molecules' own volume becomes…", options: ["significant", "negligible", "zero", "infinite"], correctIndex: 0, explanation: "Crowding makes molecular volume matter." },
        { prompt: "Intermolecular attractions reduce the … below the ideal value.", options: ["pressure", "temperature", "moles", "molar mass"], correctIndex: 0, explanation: "Attractions lower the observed pressure." },
        { prompt: "Which gas is likely to deviate MORE from ideal behaviour?", options: ["CO₂", "He", "H₂", "Ne"], correctIndex: 0, explanation: "Larger molecules with stronger forces deviate more." },
        { prompt: "The ideal gas law assumes molecules have … volume.", options: ["negligible", "large", "variable", "half the container"], correctIndex: 0, explanation: "Ideal molecules take up no space." },
        { prompt: "Cooling a gas increases deviations because molecules move…", options: ["slower, so attractions matter", "faster", "in circles", "not at all"], correctIndex: 0, explanation: "Slow molecules feel attractions more." },
        { prompt: "A gas that follows PV = nRT exactly is called…", options: ["an ideal gas", "a real gas", "a liquid", "a plasma"], correctIndex: 0, explanation: "Ideal gases obey the law perfectly." },
        { prompt: "Helium behaves nearly ideally because its atoms are small with … forces.", options: ["weak", "strong", "no", "infinite"], correctIndex: 0, explanation: "Weak forces mean small deviations." },
        { prompt: "The two failing assumptions of KMT for real gases are negligible volume and…", options: ["no intermolecular forces", "constant temperature", "elastic collisions", "random motion"], correctIndex: 0, explanation: "Real gases have volume and forces." },
        { prompt: "Increasing 'a' means the gas has … attractive forces.", options: ["stronger", "weaker", "no", "reversed"], correctIndex: 0, explanation: "Larger a means stronger attractions." },
        { prompt: "At very low pressure, a real gas behaves…", options: ["nearly ideally", "least ideally", "as a solid", "as a liquid"], correctIndex: 0, explanation: "Molecules far apart obey the ideal law." },
        { prompt: "The term (V − nb) in the equation makes the available volume…", options: ["smaller", "larger", "unchanged", "zero"], correctIndex: 0, explanation: "Molecular volume reduces free space." },
        { prompt: "Which conditions describe most gases in everyday air?", options: ["near ideal (low P, ordinary T)", "far from ideal", "solid", "liquid"], correctIndex: 0, explanation: "At ~1 atm and room T, gases are near ideal." },
        { prompt: "Real gases can be liquefied because their molecules…", options: ["attract each other", "have no forces", "have no volume", "are ideal"], correctIndex: 0, explanation: "Attractions allow condensation." },
        { prompt: "Which statement is TRUE?", options: ["no real gas is perfectly ideal", "all gases are perfectly ideal", "only helium is real", "ideal gases can be liquefied easily"], correctIndex: 0, explanation: "Ideal behaviour is an approximation." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State two assumptions of the ideal gas model that fail for real gases.", answerKey: "Real gases fail the assumptions that (1) the volume of the molecules themselves is negligible, and (2) there are no intermolecular forces of attraction. Real molecules occupy space and attract one another. Award a mark for each correct assumption.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Real gases deviate most strongly from ideal behaviour at:", options: ["high pressure and low temperature", "low pressure and high temperature", "low pressure and low volume", "standard temperature and pressure"], correctIndex: 0, answerKey: "Deviations are largest when molecules are crowded and slow.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "In the van der Waals equation, the constant 'b' accounts for:", options: ["the volume of the gas molecules", "the attractive forces", "the temperature", "the number of moles"], correctIndex: 0, answerKey: "'b' corrects for molecular volume; 'a' corrects for attractions.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain why a gas behaves most like an ideal gas at low pressure and high temperature.", answerKey: "At low pressure the molecules are far apart, so their own volume is negligible compared with the container and intermolecular attractions are weak. At high temperature the molecules move fast and have high kinetic energy, so any attractions have little effect. Under these conditions both failing assumptions are close to true, so the gas behaves nearly ideally. Award marks for the low-pressure (spacing) and high-temperature (speed/weak attractions) reasoning.", marks: 3 },
        { type: "ESSAY", prompt: "Explain why real gases deviate from the ideal gas law and describe how the van der Waals equation corrects for these deviations.", answerKey: "A strong answer explains that the ideal gas law assumes point particles with no volume and no forces, whereas real molecules occupy space and attract one another; these effects become important at high pressure (molecules crowded, their volume significant) and low temperature (molecules slow, attractions pull them together), causing the observed pressure and volume to differ from ideal predictions. The van der Waals equation, (P + an²/V²)(V − nb) = nRT, adds two corrections: the 'a' term increases the pressure to allow for attractive forces, and the 'b' term reduces the available volume to allow for the molecules' own size. Award marks for the reasons for deviation, the conditions, and the roles of the a and b corrections.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Environmental Chemistry / Geochemistry) — 3.1 Structure and Composition of the Atmosphere (https://chem.libretexts.org/Bookshelves/Environmental_Chemistry/Geochemistry_(Lower)/03%3A_The_Atmosphere/3.01%3A_Structure_and_Composition_of_the_Atmosphere)
      slug: "chemistry-in-the-atmosphere",
      title: "Chemistry in the Atmosphere",
      objective:
        "By the end of the topic, learners should be able to describe the composition and layers of the atmosphere and outline key atmospheric chemistry including ozone, greenhouse gases and pollutants. (MoE Grade 11 Period II, CONTENTS 10.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- The atmosphere is a huge gas mixture whose chemistry affects climate, health and life.
- **This topic:** the composition and layers of the atmosphere and its important chemistry.

## Composition of the atmosphere

- Dry air is about **78% nitrogen (N₂)** and **21% oxygen (O₂)**, with about **0.9% argon** and small amounts of **carbon dioxide (CO₂)**, water vapour and other gases.

| Gas | Approx. % by volume |
|---|---|
| Nitrogen, N₂ | 78 |
| Oxygen, O₂ | 21 |
| Argon, Ar | 0.9 |
| Carbon dioxide, CO₂ | 0.04 |

## Layers of the atmosphere

- From the ground upwards: **troposphere → stratosphere → mesosphere → thermosphere → exosphere**.
- The **troposphere** is where weather happens; the **stratosphere** contains the ozone layer.

## The ozone layer

- **Ozone (O₃)** in the stratosphere absorbs harmful **ultraviolet (UV)** radiation from the Sun, protecting living things.
- Ozone is destroyed by chlorine and bromine radicals (e.g. from CFCs), causing the **ozone hole**.

## Greenhouse gases and pollutants

- **Greenhouse gases** (CO₂, CH₄, H₂O vapour) trap heat and keep the Earth warm; too much causes global warming.
- **Air pollutants** include oxides of nitrogen (NOₓ) and sulfur (SO₂), which cause **acid rain**, and ground-level ozone (smog).

## Common errors and misconceptions

- **Oxygen is the main gas** — nitrogen (78%) is the most abundant, not oxygen.
- **Ozone is always harmful** — stratospheric ozone protects us; only ground-level ozone is a pollutant.
- **The greenhouse effect is entirely bad** — it keeps Earth warm enough for life; the problem is the *enhanced* effect from extra CO₂.`,
      workedExample: `**Task.** (a) State the two most abundant gases in the atmosphere and their approximate percentages. (b) Explain the difference between the role of ozone in the stratosphere and ground-level ozone. (c) Name two greenhouse gases.

**Part (a) — Main gases**
- Nitrogen, N₂ ≈ **78%**, and oxygen, O₂ ≈ **21%** — together about 99% of dry air.

**Part (b) — Ozone's two roles**
- In the **stratosphere**, ozone (O₃) forms a layer that **absorbs harmful UV radiation**, protecting living things — this is beneficial.
- At **ground level**, ozone is a **pollutant** (a component of photochemical smog) that harms lungs and plants — this is harmful.

**Part (c) — Greenhouse gases**
- Any two of: **carbon dioxide (CO₂)**, **methane (CH₄)**, **water vapour (H₂O)**.

**Conclusion.** Air is mostly nitrogen and oxygen; ozone protects us high up but pollutes at ground level; and greenhouse gases such as CO₂ and CH₄ trap heat in the atmosphere.`,
      quiz: [
        { prompt: "The most abundant gas in the atmosphere is…", options: ["nitrogen", "oxygen", "carbon dioxide", "argon"], correctIndex: 0, explanation: "N₂ is about 78%." },
        { prompt: "Oxygen makes up about … of the atmosphere.", options: ["21%", "78%", "1%", "50%"], correctIndex: 0, explanation: "O₂ is about 21%." },
        { prompt: "The layer of the atmosphere where weather occurs is the…", options: ["troposphere", "stratosphere", "mesosphere", "exosphere"], correctIndex: 0, explanation: "Weather happens in the troposphere." },
        { prompt: "The ozone layer is found in the…", options: ["stratosphere", "troposphere", "thermosphere", "exosphere"], correctIndex: 0, explanation: "Stratospheric ozone protects us." },
        { prompt: "Ozone in the stratosphere absorbs harmful … radiation.", options: ["ultraviolet", "infrared", "radio", "visible"], correctIndex: 0, explanation: "It absorbs UV light." },
        { prompt: "Ozone has the formula…", options: ["O₃", "O₂", "O", "CO₂"], correctIndex: 0, explanation: "Ozone is O₃." },
        { prompt: "A greenhouse gas is…", options: ["carbon dioxide", "nitrogen", "argon", "helium"], correctIndex: 0, explanation: "CO₂ traps heat." },
        { prompt: "Acid rain is caused mainly by oxides of sulfur and…", options: ["nitrogen", "carbon only", "argon", "helium"], correctIndex: 0, explanation: "SO₂ and NOₓ cause acid rain." },
        { prompt: "The ozone hole is caused by chlorine and bromine radicals from…", options: ["CFCs", "oxygen", "nitrogen", "water"], correctIndex: 0, explanation: "CFCs release ozone-destroying radicals." },
        { prompt: "The greenhouse effect keeps the Earth…", options: ["warm enough for life", "frozen", "in a vacuum", "airless"], correctIndex: 0, explanation: "It traps heat, warming the planet." },
        { prompt: "Argon makes up about … of the atmosphere.", options: ["0.9%", "21%", "78%", "50%"], correctIndex: 0, explanation: "Argon is about 0.9%." },
        { prompt: "Ground-level ozone is best described as a…", options: ["pollutant", "protector", "greenhouse benefit", "noble gas"], correctIndex: 0, explanation: "It is harmful smog at ground level." },
        { prompt: "The order of layers from the ground is troposphere, stratosphere, then…", options: ["mesosphere", "exosphere", "ozone", "core"], correctIndex: 0, explanation: "Mesosphere comes next." },
        { prompt: "Nitrogen and oxygen together make up about … of dry air.", options: ["99%", "50%", "21%", "78%"], correctIndex: 0, explanation: "78 + 21 ≈ 99%." },
        { prompt: "Methane (CH₄) is an example of a…", options: ["greenhouse gas", "noble gas", "acid", "metal"], correctIndex: 0, explanation: "CH₄ traps heat." },
        { prompt: "Excess CO₂ in the atmosphere leads to…", options: ["global warming", "cooling", "more oxygen", "less nitrogen"], correctIndex: 0, explanation: "It enhances the greenhouse effect." },
        { prompt: "UV radiation harmful to life is mostly blocked by…", options: ["the ozone layer", "the troposphere", "argon", "nitrogen"], correctIndex: 0, explanation: "Ozone absorbs UV." },
        { prompt: "Which gas is NOT a major greenhouse gas?", options: ["argon", "carbon dioxide", "methane", "water vapour"], correctIndex: 0, explanation: "Argon is inert and not a greenhouse gas." },
        { prompt: "Photochemical smog contains ground-level ozone and oxides of…", options: ["nitrogen", "argon", "helium", "neon"], correctIndex: 0, explanation: "NOₓ helps form smog." },
        { prompt: "The atmosphere is best described as a … of gases.", options: ["mixture", "compound", "pure element", "solid solution"], correctIndex: 0, explanation: "Air is a mixture of gases." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the approximate percentage composition of the two main gases in the atmosphere and name one minor gas.", answerKey: "Nitrogen (N₂) makes up about 78% and oxygen (O₂) about 21% of dry air. A minor gas is argon (~0.9%) or carbon dioxide (~0.04%). Award marks for the two main gases with percentages and one minor gas.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The ozone layer, which absorbs harmful ultraviolet radiation, is located in the:", options: ["stratosphere", "troposphere", "mesosphere", "exosphere"], correctIndex: 0, answerKey: "The protective ozone layer is in the stratosphere.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Which of these is a greenhouse gas?", options: ["carbon dioxide", "argon", "nitrogen", "neon"], correctIndex: 0, answerKey: "Carbon dioxide traps heat and is a greenhouse gas.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between the role of ozone in the stratosphere and ozone at ground level.", answerKey: "In the stratosphere, ozone forms a protective layer that absorbs harmful ultraviolet radiation from the Sun, shielding living things (beneficial). At ground level, ozone is a pollutant and a component of photochemical smog that damages lungs, crops and materials (harmful). Award marks for the protective stratospheric role and the harmful ground-level role.", marks: 2 },
        { type: "ESSAY", prompt: "Describe the composition and layered structure of the atmosphere, and discuss two important areas of atmospheric chemistry (for example the ozone layer and the greenhouse effect).", answerKey: "A full answer states that dry air is about 78% nitrogen and 21% oxygen with small amounts of argon, carbon dioxide and water vapour, and that the atmosphere is layered from the ground upward as troposphere (weather), stratosphere (ozone layer), mesosphere, thermosphere and exosphere. It then discusses two topics such as: the ozone layer — stratospheric O₃ absorbs harmful UV radiation but is destroyed by chlorine/bromine radicals from CFCs, causing the ozone hole; and the greenhouse effect — gases such as CO₂, CH₄ and water vapour trap heat and keep the Earth warm, but rising CO₂ from burning fuels enhances the effect and causes global warming. Acid rain from SO₂ and NOₓ is an acceptable second topic. Award marks for the composition, the layered structure, and a correct account of two areas of atmospheric chemistry.", marks: 6 },
      ],
    },
  ],
};
