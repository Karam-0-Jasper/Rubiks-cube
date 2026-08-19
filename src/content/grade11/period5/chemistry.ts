import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 11,
// Semester Two, Period V, which carries TWO topic blocks: TOPIC 1 CHEMICAL
// ENERGETICS and TOPIC 2 NUCLEAR CHEMISTRY. One topic per top-level CONTENTS
// item across both blocks:
// Chemical Energetics — 1. Thermodynamics; 2. Standard enthalpy change;
// 3. Hess' Law; 4. Bond enthalpy; 5. Ionic systems (lattice enthalpy / Born-Haber);
// 6. Fuels.
// Nuclear Chemistry — 7. Definition and history of radioactivity; 8. Difference
// between ordinary and nuclear reactions; 9. Types and nature of radiations;
// 10. Half-life; 11. Nuclear reactions - fission and fusion; 12. Effects and
// applications of radioactivity.
export const chemistryG11P5: PeriodContent = {
  grade: 11,
  number: 5,
  title: "Chemical Energetics and Nuclear Chemistry",
  summary:
    "Period V of the MoE Grade 11 Chemistry syllabus, covering two topic blocks. In Chemical Energetics, learners meet system and surroundings, heat and specific heat capacity, enthalpy and the law of conservation of energy, standard enthalpy changes, Hess's law, bond enthalpy, lattice enthalpy and Born-Haber cycles, and fuels. In Nuclear Chemistry, learners define radioactivity and its history, contrast nuclear with chemical reactions, describe the types of radiation, use half-life as a measure of nuclear stability, distinguish fission from fusion, and outline the effects and applications of radioactivity.",
  topics: [
    {
      // source: LibreTexts (Chemistry: The Central Science) — 5.2 The First Law of Thermodynamics (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/05%3A_Thermochemistry/5.02%3A_The_First_Law_of_Thermodynamics)
      slug: "thermodynamics",
      title: "Thermodynamics",
      objective:
        "By the end of the topic, learners should be able to define system and surroundings, distinguish exothermic and endothermic changes, use q = mcΔT, and state the law of conservation of energy and the meaning of enthalpy. (MoE Grade 11 Period V, Chemical Energetics CONTENTS 1.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- **Thermodynamics** studies the energy changes that go with physical and chemical processes.
- **This topic:** system and surroundings, heat, heat capacity, enthalpy, and the conservation of energy.

## System and surroundings

- **System** — the part of the universe we are studying (e.g. the reaction).
- **Surroundings** — everything else (the container, the air, the water bath).
- Energy can flow between the system and the surroundings.

## Exothermic and endothermic changes

- **Exothermic** — heat is **released** to the surroundings; the surroundings warm up; ΔH is **negative**.
- **Endothermic** — heat is **absorbed** from the surroundings; the surroundings cool down; ΔH is **positive**.

## Heat energy and heat capacity

- **Heat capacity** — the energy needed to raise the temperature of an object by 1 °C.
- **Specific heat capacity (c)** — the energy to raise 1 g of a substance by 1 °C (water: 4.18 J/g·°C).
- **q = m c ΔT** — heat energy = mass × specific heat capacity × temperature change.

## Law of conservation of energy

- **Law of conservation of energy (first law of thermodynamics):** energy cannot be created or destroyed, only converted from one form to another. The energy of the universe is constant.
- **Enthalpy (H)** — the heat content of a system at constant pressure; the change **ΔH** is the heat given out or taken in.

## Changes of state

- Melting and boiling **absorb** energy (endothermic); freezing and condensing **release** energy (exothermic).

## Common errors and misconceptions

- **Exothermic feels cold** — an exothermic reaction warms the surroundings; endothermic ones feel cold.
- **Sign of ΔH** — exothermic ΔH is negative; endothermic ΔH is positive.
- **Using kelvin in q = mcΔT** — a temperature *change* is the same in °C or K, but keep c consistent (J/g·°C).`,
      workedExample: `**Task.** Calculate the heat energy needed to raise the temperature of 250 g of water from 20 °C to 80 °C. (Specific heat capacity of water c = 4.18 J/g·°C.)

**Step 1 — Write the formula**
q = m c ΔT.

**Step 2 — Find the temperature change**
ΔT = 80 − 20 = 60 °C.

**Step 3 — Substitute the values**
q = 250 × 4.18 × 60.

**Step 4 — Calculate**
- 250 × 4.18 = 1045.
- q = 1045 × 60 = 62 700 J = **62.7 kJ**.

**Conclusion.** 62.7 kJ of heat energy is needed. Because heat is absorbed by the water, this is an endothermic change for the water (its surroundings supply the energy).`,
      quiz: [
        { prompt: "The part of the universe being studied is the…", options: ["system", "surroundings", "boundary", "universe"], correctIndex: 0, explanation: "The system is what we study." },
        { prompt: "Everything outside the system is the…", options: ["surroundings", "system", "reaction", "enthalpy"], correctIndex: 0, explanation: "The surroundings are everything else." },
        { prompt: "An exothermic change … heat to the surroundings.", options: ["releases", "absorbs", "creates", "destroys"], correctIndex: 0, explanation: "Exothermic releases heat." },
        { prompt: "An endothermic change … heat from the surroundings.", options: ["absorbs", "releases", "removes forever", "creates"], correctIndex: 0, explanation: "Endothermic absorbs heat." },
        { prompt: "For an exothermic reaction, ΔH is…", options: ["negative", "positive", "zero", "undefined"], correctIndex: 0, explanation: "Heat released means ΔH < 0." },
        { prompt: "For an endothermic reaction, ΔH is…", options: ["positive", "negative", "zero", "1"], correctIndex: 0, explanation: "Heat absorbed means ΔH > 0." },
        { prompt: "The heat energy formula is q = …", options: ["m c ΔT", "m / c", "c ΔT / m", "m c / ΔT"], correctIndex: 0, explanation: "q = mass × specific heat × temperature change." },
        { prompt: "The specific heat capacity of water is about…", options: ["4.18 J/g·°C", "1.0 J/g·°C", "100 J/g·°C", "0.42 J/g·°C"], correctIndex: 0, explanation: "Water's c is 4.18 J/g·°C." },
        { prompt: "Energy cannot be created or destroyed is the law of…", options: ["conservation of energy", "constant proportions", "definite volume", "mass action"], correctIndex: 0, explanation: "First law of thermodynamics." },
        { prompt: "Enthalpy is the heat content at constant…", options: ["pressure", "volume", "temperature", "mass"], correctIndex: 0, explanation: "H is defined at constant pressure." },
        { prompt: "Melting a solid is…", options: ["endothermic", "exothermic", "neither", "explosive"], correctIndex: 0, explanation: "Melting absorbs energy." },
        { prompt: "Freezing a liquid is…", options: ["exothermic", "endothermic", "neither", "a fusion"], correctIndex: 0, explanation: "Freezing releases energy." },
        { prompt: "To warm 250 g of water by 60 °C (c = 4.18) needs about…", options: ["62.7 kJ", "6.27 kJ", "627 kJ", "1.05 kJ"], correctIndex: 0, explanation: "250 × 4.18 × 60 = 62 700 J." },
        { prompt: "In q = mcΔT, ΔT is the…", options: ["temperature change", "final temperature only", "starting temperature", "boiling point"], correctIndex: 0, explanation: "It is the change in temperature." },
        { prompt: "An exothermic reaction makes the surroundings…", options: ["warmer", "colder", "unchanged", "solid"], correctIndex: 0, explanation: "Heat released warms the surroundings." },
        { prompt: "The energy needed to raise 1 g of a substance by 1 °C is its…", options: ["specific heat capacity", "enthalpy", "mass", "density"], correctIndex: 0, explanation: "That is the specific heat capacity." },
        { prompt: "Which sign convention is correct?", options: ["exothermic ΔH negative", "exothermic ΔH positive", "endothermic ΔH negative", "both positive"], correctIndex: 0, explanation: "Exothermic ΔH is negative." },
        { prompt: "Water has a … specific heat capacity compared with metals.", options: ["high", "low", "zero", "negative"], correctIndex: 0, explanation: "Water's specific heat is unusually high." },
        { prompt: "A change of state that releases energy is…", options: ["condensation", "melting", "boiling", "sublimation"], correctIndex: 0, explanation: "Condensing releases energy (exothermic)." },
        { prompt: "The symbol for enthalpy change is…", options: ["ΔH", "ΔT", "q", "c"], correctIndex: 0, explanation: "ΔH is the enthalpy change." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define the terms system and surroundings, and state whether an exothermic reaction has a positive or negative ΔH.", answerKey: "The system is the part of the universe under study (e.g. the reaction); the surroundings are everything else. An exothermic reaction releases heat, so its ΔH is negative. Award marks for both definitions and the correct sign.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The heat energy transferred when a substance is warmed is calculated using:", options: ["q = mcΔT", "q = m/c", "q = cΔT/m", "q = ΔH/m"], correctIndex: 0, answerKey: "q = mass × specific heat capacity × temperature change.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The law of conservation of energy states that energy:", options: ["cannot be created or destroyed, only converted", "can be created but not destroyed", "is always lost as heat", "is destroyed in every reaction"], correctIndex: 0, answerKey: "Energy is conserved (first law of thermodynamics).", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Calculate the heat energy required to raise the temperature of 100 g of water from 25 °C to 55 °C. (c = 4.18 J/g·°C.)", answerKey: "q = mcΔT = 100 × 4.18 × (55 − 25) = 100 × 4.18 × 30 = 12 540 J = 12.54 kJ. Award marks for ΔT = 30, substitution, and the answer ≈ 12.5 kJ.", marks: 3 },
        { type: "ESSAY", prompt: "Explain the difference between exothermic and endothermic reactions in terms of heat flow and the sign of ΔH, and describe how you would measure the heat released when a fuel burns using q = mcΔT.", answerKey: "A full answer explains that an exothermic reaction transfers heat from the system to the surroundings (surroundings warm, ΔH negative), while an endothermic reaction absorbs heat from the surroundings (surroundings cool, ΔH positive). To measure the heat from a burning fuel: heat a known mass of water with the flame, record the temperature rise ΔT, then calculate the heat gained by the water as q = mcΔT (using c = 4.18 J/g·°C); this heat came from the fuel. Award marks for the exo/endo distinction with signs and a correct calorimetry method using q = mcΔT.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (College of the Canyons, Chem 201) — 8.7 Standard Enthalpy of Formation (https://chem.libretexts.org/Courses/College_of_the_Canyons/Chem_201%3A_General_Chemistry_I_OER/08%3A_Thermochemistry/8.07%3A_Standard_Enthalpy_of_formation)
      slug: "standard-enthalpy-change",
      title: "Standard Enthalpy Change",
      objective:
        "By the end of the topic, learners should be able to define standard enthalpy changes of formation, combustion, reaction and neutralisation, and calculate a reaction enthalpy from enthalpies of formation. (MoE Grade 11 Period V, Chemical Energetics CONTENTS 2.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- Enthalpy changes are compared under agreed **standard conditions**.
- **This topic:** the named standard enthalpy changes and how to use them.

## Standard conditions

- **Standard conditions:** a pressure of 1 bar (≈1 atm) and a stated temperature, usually **298 K (25 °C)**; solutions at 1 mol/dm³.
- The standard enthalpy change is written **ΔH°** (kJ/mol).

## The named enthalpy changes

| Name | Definition |
|---|---|
| Standard enthalpy of reaction | enthalpy change when a reaction occurs in the molar amounts shown, under standard conditions |
| Standard enthalpy of formation, ΔHf° | enthalpy change when **1 mole** of a compound is formed from its elements in their standard states |
| Standard enthalpy of combustion | enthalpy change when **1 mole** of a substance is completely burned in oxygen |
| Standard enthalpy of neutralisation | enthalpy change when an acid and base react to form **1 mole of water** |

- The standard enthalpy of formation of an **element in its standard state is zero** (it is the reference).
- Most formation and all combustion enthalpies are **exothermic (negative)**.

## Calculating reaction enthalpy from formation data

**ΔH°(reaction) = Σ ΔHf°(products) − Σ ΔHf°(reactants)**

## Common errors and misconceptions

- **ΔHf° of a compound is zero** — only **elements** in their standard states have ΔHf° = 0.
- **"Per mole" ignored** — formation and combustion are defined per mole of the named substance.
- **Reversing the formula** — it is products minus reactants.`,
      workedExample: `**Task.** Calculate the standard enthalpy of combustion of methane, CH₄, using standard enthalpies of formation. CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l). ΔHf°: CH₄ = −75 kJ/mol; CO₂ = −394 kJ/mol; H₂O(l) = −286 kJ/mol; O₂ = 0.

**Step 1 — Write the formula**
ΔH° = Σ ΔHf°(products) − Σ ΔHf°(reactants).

**Step 2 — Sum the products**
- CO₂: −394; 2 × H₂O: 2 × (−286) = −572.
- Products total = −394 + (−572) = −966 kJ/mol.

**Step 3 — Sum the reactants**
- CH₄: −75; 2 × O₂: 2 × 0 = 0.
- Reactants total = −75 kJ/mol.

**Step 4 — Subtract**
ΔH° = (−966) − (−75) = −966 + 75 = **−891 kJ/mol**.

**Conclusion.** The standard enthalpy of combustion of methane is −891 kJ/mol; the negative sign shows the combustion is exothermic.`,
      quiz: [
        { prompt: "Standard conditions usually include a temperature of…", options: ["298 K (25 °C)", "273 K", "373 K", "0 K"], correctIndex: 0, explanation: "298 K is the usual standard temperature." },
        { prompt: "Standard enthalpy of formation is per … of compound formed.", options: ["1 mole", "2 moles", "1 gram", "1 litre"], correctIndex: 0, explanation: "It is defined per mole." },
        { prompt: "The standard enthalpy of formation of an element in its standard state is…", options: ["zero", "positive", "negative", "1 kJ"], correctIndex: 0, explanation: "Elements are the reference (0)." },
        { prompt: "Standard enthalpy of combustion is for … of substance burned.", options: ["1 mole", "1 gram", "1 litre", "any amount"], correctIndex: 0, explanation: "Combustion is per mole." },
        { prompt: "Standard enthalpy of neutralisation forms 1 mole of…", options: ["water", "salt", "gas", "acid"], correctIndex: 0, explanation: "Defined per mole of water." },
        { prompt: "The formula for reaction enthalpy is Σ ΔHf°(products) − …", options: ["Σ ΔHf°(reactants)", "Σ ΔHf°(products)", "0", "the mass"], correctIndex: 0, explanation: "Products minus reactants." },
        { prompt: "Combustion enthalpies are usually…", options: ["exothermic (negative)", "endothermic (positive)", "zero", "positive then negative"], correctIndex: 0, explanation: "Burning releases heat." },
        { prompt: "ΔH° for formation of methane is defined as forming CH₄ from…", options: ["its elements C and H₂", "CO₂ and water", "oxygen", "a salt"], correctIndex: 0, explanation: "From elements in standard states." },
        { prompt: "Standard enthalpy change is written as…", options: ["ΔH°", "ΔT", "q", "Kw"], correctIndex: 0, explanation: "The ° denotes standard conditions." },
        { prompt: "For CH₄ combustion, if products total −966 and reactants −75, ΔH° is…", options: ["−891 kJ/mol", "−1041 kJ/mol", "+891 kJ/mol", "−966 kJ/mol"], correctIndex: 0, explanation: "−966 − (−75) = −891." },
        { prompt: "Enthalpy of formation of O₂ gas is…", options: ["0", "−286", "−394", "+100"], correctIndex: 0, explanation: "O₂ is an element in its standard state." },
        { prompt: "Standard pressure is about…", options: ["1 bar (≈1 atm)", "10 bar", "0 bar", "760 bar"], correctIndex: 0, explanation: "1 bar is standard." },
        { prompt: "A negative ΔHf° means the compound's formation is…", options: ["exothermic", "endothermic", "impossible", "reversible only"], correctIndex: 0, explanation: "Negative = heat released." },
        { prompt: "Which is defined per mole of water?", options: ["enthalpy of neutralisation", "enthalpy of formation", "enthalpy of combustion", "enthalpy of reaction"], correctIndex: 0, explanation: "Neutralisation makes 1 mol water." },
        { prompt: "The standard enthalpy of combustion of methane is about…", options: ["−891 kJ/mol", "+891 kJ/mol", "−75 kJ/mol", "−286 kJ/mol"], correctIndex: 0, explanation: "About −891 kJ/mol." },
        { prompt: "Formation enthalpies are measured in…", options: ["kJ/mol", "J/g", "K", "mol/dm³"], correctIndex: 0, explanation: "Enthalpy per mole, kJ/mol." },
        { prompt: "To use the formula, you need the ΔHf° of every reactant and…", options: ["product", "spectator", "catalyst", "solvent only"], correctIndex: 0, explanation: "Products and reactants are needed." },
        { prompt: "Complete combustion of a hydrocarbon gives carbon dioxide and…", options: ["water", "carbon monoxide", "hydrogen", "soot"], correctIndex: 0, explanation: "CO₂ and H₂O form in complete combustion." },
        { prompt: "Which enthalpy value is the reference set to zero?", options: ["formation of an element in its standard state", "combustion of methane", "neutralisation", "any reaction"], correctIndex: 0, explanation: "Elements have ΔHf° = 0." },
        { prompt: "The '°' symbol in ΔH° indicates…", options: ["standard conditions", "degrees Celsius", "a temperature", "an angle"], correctIndex: 0, explanation: "It denotes standard conditions." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define the standard enthalpy of formation and state its value for an element in its standard state.", answerKey: "The standard enthalpy of formation is the enthalpy change when 1 mole of a compound is formed from its elements in their standard states under standard conditions (1 bar, usually 298 K). For an element in its standard state the value is zero (it is the reference point). Award marks for the definition and the zero value for elements.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The standard enthalpy of reaction is calculated from formation enthalpies as:", options: ["Σ ΔHf°(products) − Σ ΔHf°(reactants)", "Σ ΔHf°(reactants) − Σ ΔHf°(products)", "Σ ΔHf°(products) + Σ ΔHf°(reactants)", "ΔHf°(products) × ΔHf°(reactants)"], correctIndex: 0, answerKey: "Products minus reactants.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The standard enthalpy of neutralisation is defined as the enthalpy change when:", options: ["1 mole of water is formed from an acid and a base", "1 mole of acid is burned", "1 mole of salt dissolves", "1 mole of gas is released"], correctIndex: 0, answerKey: "It is per mole of water formed.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Calculate the enthalpy change for the reaction C(s) + O₂(g) → CO₂(g) given ΔHf°(CO₂) = −394 kJ/mol and that ΔHf° of the elements is zero.", answerKey: "ΔH° = Σ ΔHf°(products) − Σ ΔHf°(reactants) = (−394) − (0 + 0) = −394 kJ/mol. Award marks for using the formula and the answer −394 kJ/mol.", marks: 2 },
        { type: "ESSAY", prompt: "Define standard enthalpy of formation, combustion and neutralisation, and show, with a worked example using formation data, how the enthalpy change of a reaction can be calculated.", answerKey: "A full answer defines: standard enthalpy of formation (enthalpy change forming 1 mole of a compound from its elements in standard states), combustion (enthalpy change burning 1 mole of a substance completely in oxygen), and neutralisation (enthalpy change forming 1 mole of water from acid and base). It notes elements have ΔHf° = 0. Worked example: using ΔH° = ΣΔHf°(products) − ΣΔHf°(reactants), e.g. for CH₄ + 2O₂ → CO₂ + 2H₂O with ΔHf° values −75 (CH₄), −394 (CO₂), −286 (H₂O), 0 (O₂): ΔH° = [−394 + 2(−286)] − [−75 + 0] = −966 + 75 = −891 kJ/mol. Award marks for the three definitions and a correct worked calculation.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Supplemental Modules, Physical & Theoretical Chemistry) — Hess's Law: The Principle of Conservation of Energy (https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Thermodynamics/Thermochemistry/Hess's_Law%3A_The_Principle_of_Conservation_of_Energy)
      slug: "hesss-law",
      title: "Hess's Law",
      objective:
        "By the end of the topic, learners should be able to state Hess's law, explain it as a consequence of enthalpy being a state function, and use it in energy cycles. (MoE Grade 11 Period V, Chemical Energetics CONTENTS 3.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- Some enthalpy changes cannot be measured directly, but **Hess's law** lets us calculate them.
- **This topic:** Hess's law and how to use energy cycles.

## Hess's law

- **Hess's law:** the total enthalpy change of a reaction is the **same** whether it happens in one step or several steps.
- This is because enthalpy is a **state function** — ΔH depends only on the **initial and final states**, not on the path taken.

## Manipulating equations

- **Reversing** a reaction changes the **sign** of ΔH.
- **Multiplying** a reaction by a number multiplies its ΔH by the same number.
- Adding the steps of a cycle gives the overall ΔH.

## Energy cycles

- Draw the direct route and an indirect route between the same reactants and products.
- The enthalpy of the direct route equals the sum of the enthalpies of the indirect route.

## Example pattern (carbon)

- C + O₂ → CO₂ directly: ΔH = −393 kJ/mol.
- C → CO (−110) then CO → CO₂ (−283); sum = −393 kJ/mol — the same value.

## Common errors and misconceptions

- **Forgetting to change the sign on reversing** — a reversed step flips the sign of ΔH.
- **Not scaling ΔH when multiplying** — if you double an equation, double its ΔH.
- **Thinking the path matters** — ΔH is path-independent (state function).`,
      workedExample: `**Task.** Carbon burns to carbon dioxide directly with ΔH = −393 kJ/mol. In two steps, C → CO has ΔH = −110 kJ/mol and CO → CO₂ has ΔH = −283 kJ/mol. Show that Hess's law holds, and use it to confirm the two-step total.

**Step 1 — State Hess's law**
The enthalpy change is the same by any route between the same start and end points.

**Step 2 — Add the two-step route**
- Step 1: C + ½O₂ → CO, ΔH₁ = −110 kJ/mol.
- Step 2: CO + ½O₂ → CO₂, ΔH₂ = −283 kJ/mol.
- Total (indirect) = ΔH₁ + ΔH₂ = −110 + (−283) = **−393 kJ/mol**.

**Step 3 — Compare with the direct route**
- Direct: C + O₂ → CO₂, ΔH = −393 kJ/mol.
- The two-step total (−393) equals the direct value (−393). ✓

**Conclusion.** The direct and indirect routes give the same enthalpy change (−393 kJ/mol), confirming Hess's law: enthalpy is a state function, so ΔH is independent of the path taken.`,
      quiz: [
        { prompt: "Hess's law: the enthalpy change is the same whether a reaction goes in one step or…", options: ["several steps", "no steps", "reverse only", "a circle"], correctIndex: 0, explanation: "ΔH is the same by any route." },
        { prompt: "Hess's law works because enthalpy is a…", options: ["state function", "path function", "random variable", "temperature"], correctIndex: 0, explanation: "ΔH depends only on start and end states." },
        { prompt: "Reversing a reaction … the sign of ΔH.", options: ["changes", "keeps", "doubles", "removes"], correctIndex: 0, explanation: "Reversing flips the sign." },
        { prompt: "Multiplying a reaction by 2 multiplies ΔH by…", options: ["2", "1", "0.5", "0"], correctIndex: 0, explanation: "ΔH scales with the equation." },
        { prompt: "A state function depends only on the … states.", options: ["initial and final", "intermediate", "gaseous", "solid"], correctIndex: 0, explanation: "Path is irrelevant." },
        { prompt: "For C → CO (−110) and CO → CO₂ (−283), the total is…", options: ["−393 kJ/mol", "−173 kJ/mol", "+393 kJ/mol", "−283 kJ/mol"], correctIndex: 0, explanation: "−110 + (−283) = −393." },
        { prompt: "Hess's law is a form of the law of…", options: ["conservation of energy", "definite proportions", "mass action", "Avogadro"], correctIndex: 0, explanation: "It follows from energy conservation." },
        { prompt: "Hess's law lets us find ΔH values that are hard to…", options: ["measure directly", "write down", "imagine", "reverse"], correctIndex: 0, explanation: "It calculates indirect enthalpies." },
        { prompt: "In an energy cycle, the direct route ΔH equals the … of the indirect route.", options: ["sum", "product", "difference only", "average"], correctIndex: 0, explanation: "Add the indirect steps." },
        { prompt: "If a step's ΔH = −100 kJ/mol, reversing it gives…", options: ["+100 kJ/mol", "−100 kJ/mol", "−200 kJ/mol", "0"], correctIndex: 0, explanation: "Sign flips on reversal." },
        { prompt: "Doubling an equation with ΔH = −50 gives ΔH = …", options: ["−100 kJ/mol", "−50 kJ/mol", "−25 kJ/mol", "0"], correctIndex: 0, explanation: "Double the ΔH too." },
        { prompt: "The path taken by a reaction … the overall ΔH.", options: ["does not change", "always changes", "reverses", "doubles"], correctIndex: 0, explanation: "ΔH is path-independent." },
        { prompt: "Hess's law is also called the law of constant heat…", options: ["summation", "capacity", "loss", "gain"], correctIndex: 0, explanation: "Constant heat summation." },
        { prompt: "In a cycle, adding all the steps around a loop gives…", options: ["the overall enthalpy change", "zero always", "the mass", "the temperature"], correctIndex: 0, explanation: "The steps sum to the overall ΔH." },
        { prompt: "Which change does NOT affect ΔH between fixed reactants and products?", options: ["the route taken", "the elements involved", "the states of matter", "the amounts"], correctIndex: 0, explanation: "The route (path) does not matter." },
        { prompt: "Hess's law is most useful when a reaction cannot be…", options: ["carried out directly in a calorimeter", "written down", "balanced", "named"], correctIndex: 0, explanation: "It handles hard-to-measure reactions." },
        { prompt: "The two-step oxidation of carbon confirms Hess's law because both routes give…", options: ["the same ΔH", "different ΔH", "zero ΔH", "positive ΔH"], correctIndex: 0, explanation: "Both give −393 kJ/mol." },
        { prompt: "If step A is +50 and step B is −80, the overall ΔH is…", options: ["−30 kJ/mol", "+130 kJ/mol", "−130 kJ/mol", "+30 kJ/mol"], correctIndex: 0, explanation: "+50 + (−80) = −30." },
        { prompt: "A key skill in Hess's law problems is correctly … the equations.", options: ["reversing and scaling", "colouring", "melting", "weighing"], correctIndex: 0, explanation: "Reverse (flip sign) and scale ΔH as needed." },
        { prompt: "Hess's law applies provided each step is at the same…", options: ["temperature", "colour", "volume", "mass"], correctIndex: 0, explanation: "Steps must be at the same temperature." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State Hess's law and explain why it is true.", answerKey: "Hess's law states that the total enthalpy change of a reaction is the same whether it takes place in one step or several steps. It is true because enthalpy is a state function: the enthalpy change depends only on the initial and final states, not on the path taken (a consequence of the conservation of energy). Award marks for the statement and the state-function/energy-conservation reasoning.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "When a chemical equation is reversed, its enthalpy change ΔH:", options: ["changes sign", "stays the same", "doubles", "becomes zero"], correctIndex: 0, answerKey: "Reversing a reaction changes the sign of ΔH.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "If reaction step 1 has ΔH = −100 kJ/mol and step 2 has ΔH = −250 kJ/mol, the overall enthalpy change is:", options: ["−350 kJ/mol", "−150 kJ/mol", "+350 kJ/mol", "−250 kJ/mol"], correctIndex: 0, answerKey: "Add the steps: −100 + (−250) = −350 kJ/mol.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "The direct formation of CO₂ from carbon has ΔH = −393 kJ/mol. If C → CO has ΔH = −110 kJ/mol, use Hess's law to find ΔH for CO → CO₂.", answerKey: "By Hess's law, ΔH(C→CO) + ΔH(CO→CO₂) = ΔH(C→CO₂). So ΔH(CO→CO₂) = −393 − (−110) = −393 + 110 = −283 kJ/mol. Award marks for setting up the cycle and the answer −283 kJ/mol.", marks: 3 },
        { type: "ESSAY", prompt: "Explain how Hess's law and energy cycles allow the calculation of enthalpy changes that cannot be measured directly, using the oxidation of carbon as an example.", answerKey: "A full answer explains that because enthalpy is a state function, the enthalpy change between the same reactants and products is the same by any route (Hess's law), so an unknown ΔH can be found by constructing an energy cycle with a direct route and an indirect (multi-step) route whose enthalpies are known. Reversing a step changes the sign of its ΔH and multiplying a step scales its ΔH. Example: C → CO₂ directly is −393 kJ/mol; via C → CO (−110) and CO → CO₂ (−283) the indirect route sums to −393 kJ/mol, confirming the law and letting either step be found if the others are known. Award marks for the state-function basis, equation manipulation rules, and the worked carbon example.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Supplemental Modules, Physical & Theoretical Chemistry) — Bond Energies (https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Chemical_Bonding/Fundamentals_of_Chemical_Bonding/Bond_Energies)
      slug: "bond-enthalpy",
      title: "Bond Enthalpy",
      objective:
        "By the end of the topic, learners should be able to define bond enthalpy, relate bond breaking and making to energy, and estimate a reaction enthalpy from bond energies. (MoE Grade 11 Period V, Chemical Energetics CONTENTS 4.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- Energy changes in reactions come from **breaking** and **making** chemical bonds.
- **This topic:** bond enthalpy and estimating reaction enthalpies from bond energies.

## Bond enthalpy

- **Bond enthalpy (bond energy)** — the energy needed to break **1 mole** of a particular bond in the **gaseous** state.
- **Bond dissociation enthalpy** — the energy to break one specific bond; **mean bond enthalpy** is an average over many molecules.

## Breaking and making bonds

- **Breaking bonds is endothermic** — energy must be **put in** (positive).
- **Making bonds is exothermic** — energy is **released** (negative).

## Estimating reaction enthalpy

**ΔH = Σ (bond energies of bonds broken) − Σ (bond energies of bonds made)**

- If more energy is released making bonds than is used breaking them, the reaction is **exothermic** (ΔH negative).
- If products' bonds are **stronger** than reactants' bonds, the reaction is exothermic.

## Limitations

- Mean bond enthalpies are **averages**, so bond-energy calculations give only **approximate** ΔH values.
- Values apply to the **gaseous** state.

## Common errors and misconceptions

- **Making bonds needs energy** — making bonds *releases* energy; breaking them requires energy.
- **Reversing the formula** — it is bonds broken minus bonds made.
- **Exact answers** — bond-energy calculations are approximate because mean values are used.`,
      workedExample: `**Task.** Estimate the enthalpy change for H₂ + Cl₂ → 2HCl using mean bond enthalpies: H–H = +436 kJ/mol, Cl–Cl = +242 kJ/mol, H–Cl = +431 kJ/mol.

**Step 1 — Bonds broken (reactants)**
- 1 × H–H = 436; 1 × Cl–Cl = 242.
- Total broken = 436 + 242 = **+678 kJ/mol** (energy in).

**Step 2 — Bonds made (products)**
- 2 × H–Cl = 2 × 431 = **862 kJ/mol** (energy out).

**Step 3 — Apply the formula**
ΔH = (bonds broken) − (bonds made) = 678 − 862 = **−184 kJ/mol**.

**Conclusion.** The estimated enthalpy change is −184 kJ/mol; the negative sign shows the reaction is exothermic because more energy is released making the two H–Cl bonds than is used breaking the H–H and Cl–Cl bonds.`,
      quiz: [
        { prompt: "Bond enthalpy is the energy to break 1 mole of a bond in the … state.", options: ["gaseous", "solid", "liquid", "aqueous"], correctIndex: 0, explanation: "Bond enthalpies are gas-phase values." },
        { prompt: "Breaking bonds is…", options: ["endothermic", "exothermic", "neutral", "spontaneous always"], correctIndex: 0, explanation: "Energy must be put in." },
        { prompt: "Making bonds is…", options: ["exothermic", "endothermic", "neutral", "impossible"], correctIndex: 0, explanation: "Energy is released." },
        { prompt: "The formula for ΔH from bond energies is bonds broken − …", options: ["bonds made", "bonds broken", "mass", "temperature"], correctIndex: 0, explanation: "Broken minus made." },
        { prompt: "If products' bonds are stronger than reactants', the reaction is…", options: ["exothermic", "endothermic", "neutral", "impossible"], correctIndex: 0, explanation: "Stronger product bonds release more energy." },
        { prompt: "Mean bond enthalpies are…", options: ["averages", "exact values", "always zero", "negative"], correctIndex: 0, explanation: "They are averaged over molecules." },
        { prompt: "Bond-energy calculations give … enthalpy values.", options: ["approximate", "exact", "negative only", "zero"], correctIndex: 0, explanation: "They are approximate because of averaging." },
        { prompt: "For H₂ + Cl₂ → 2HCl with the given data, ΔH ≈…", options: ["−184 kJ/mol", "+184 kJ/mol", "−678 kJ/mol", "+862 kJ/mol"], correctIndex: 0, explanation: "678 − 862 = −184." },
        { prompt: "Energy to break the H–H bond is…", options: ["positive (endothermic)", "negative", "zero", "released"], correctIndex: 0, explanation: "Breaking requires energy in." },
        { prompt: "A large bond enthalpy means a … bond.", options: ["strong", "weak", "broken", "ionic only"], correctIndex: 0, explanation: "More energy to break = stronger bond." },
        { prompt: "Bond breaking has a … sign for its energy.", options: ["positive", "negative", "zero", "variable"], correctIndex: 0, explanation: "Endothermic = positive." },
        { prompt: "Bond making has a … sign for its energy.", options: ["negative", "positive", "zero", "random"], correctIndex: 0, explanation: "Exothermic = negative." },
        { prompt: "If bonds broken need 678 kJ and bonds made release 862 kJ, the reaction is…", options: ["exothermic", "endothermic", "neutral", "impossible"], correctIndex: 0, explanation: "More released than used = exothermic." },
        { prompt: "Bond dissociation enthalpy refers to breaking a … bond.", options: ["specific single", "double only", "ionic only", "metallic"], correctIndex: 0, explanation: "It is for one specific bond." },
        { prompt: "Bond enthalpies apply to substances in the … state.", options: ["gas", "liquid", "solid", "aqueous"], correctIndex: 0, explanation: "Gas-phase bonds only." },
        { prompt: "2 × H–Cl at 431 kJ/mol releases … on formation.", options: ["862 kJ", "431 kJ", "1293 kJ", "216 kJ"], correctIndex: 0, explanation: "2 × 431 = 862 kJ." },
        { prompt: "A reaction is endothermic if more energy is used … than released making bonds.", options: ["breaking bonds", "cooling", "stirring", "weighing"], correctIndex: 0, explanation: "Breaking > making means endothermic." },
        { prompt: "Bond-energy values are less accurate because they are…", options: ["mean (average) values", "exact", "made up", "temperatures"], correctIndex: 0, explanation: "Means introduce approximation." },
        { prompt: "The enthalpy of a reaction can be estimated from bond energies of the bonds broken and…", options: ["formed", "melted", "dissolved", "ionised"], correctIndex: 0, explanation: "Broken and formed bonds are used." },
        { prompt: "A negative ΔH from a bond-energy calculation means the reaction is…", options: ["exothermic", "endothermic", "impossible", "at equilibrium"], correctIndex: 0, explanation: "Negative ΔH = exothermic." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define bond enthalpy and state whether breaking bonds and making bonds are exothermic or endothermic.", answerKey: "Bond enthalpy is the energy required to break 1 mole of a particular bond in the gaseous state. Breaking bonds is endothermic (energy must be put in); making bonds is exothermic (energy is released). Award marks for the definition and both correct energy signs.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The enthalpy change of a reaction is estimated from bond energies as:", options: ["Σ(bonds broken) − Σ(bonds made)", "Σ(bonds made) − Σ(bonds broken)", "Σ(bonds broken) + Σ(bonds made)", "bonds broken × bonds made"], correctIndex: 0, answerKey: "ΔH = bonds broken − bonds made.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "A reaction is exothermic when:", options: ["the bonds in the products are stronger than those in the reactants", "the bonds in the reactants are stronger than those in the products", "no bonds are broken", "no bonds are made"], correctIndex: 0, answerKey: "Stronger product bonds release more energy, so the reaction is exothermic.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Estimate ΔH for H₂ + Cl₂ → 2HCl using bond energies H–H = 436, Cl–Cl = 242, H–Cl = 431 kJ/mol.", answerKey: "Bonds broken = 436 + 242 = 678 kJ. Bonds made = 2 × 431 = 862 kJ. ΔH = 678 − 862 = −184 kJ/mol (exothermic). Award marks for bonds broken, bonds made, and the answer −184 kJ/mol.", marks: 3 },
        { type: "ESSAY", prompt: "Explain how the enthalpy change of a gaseous reaction can be estimated from bond enthalpies, why the method only gives an approximate value, and how the result shows whether the reaction is exothermic or endothermic.", answerKey: "A full answer explains that breaking bonds requires energy (endothermic) and making bonds releases energy (exothermic), so ΔH = Σ(bond energies of bonds broken) − Σ(bond energies of bonds made). If more energy is released making bonds than is used breaking them (products' bonds stronger), ΔH is negative and the reaction is exothermic; the reverse gives an endothermic reaction. The value is only approximate because mean bond enthalpies are averages taken over many molecules, and they apply to the gaseous state. Award marks for the break/make energy ideas, the formula, the exo/endo interpretation, and the limitation of mean values.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Inorganic Chemistry, Supplemental Modules) — Lattice Energy: The Born-Haber cycle (https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Supplemental_Modules_and_Websites_(Inorganic_Chemistry)/Crystal_Lattices/Thermodynamics_of_Lattices/Lattice_Energy%3A_The_Born-Haber_cycle)
      slug: "ionic-systems-lattice-enthalpy",
      title: "Ionic Systems",
      objective:
        "By the end of the topic, learners should be able to define lattice enthalpy and enthalpy of solution, describe the Born-Haber cycle, and state the limitations of the ionic model. (MoE Grade 11 Period V, Chemical Energetics CONTENTS 5.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- The energetics of ionic solids are described by **lattice enthalpy** and analysed with the **Born-Haber cycle**.
- **This topic:** lattice enthalpy, the Born-Haber cycle, enthalpy of solution, and the limits of the ionic model.

## Lattice enthalpy

- **Lattice enthalpy (lattice energy)** — the energy change when 1 mole of an ionic solid is formed from its **gaseous ions** (exothermic), or the energy needed to break the solid into gaseous ions (endothermic).
- A larger lattice enthalpy means a **more stable** ionic solid; it is bigger for **small, highly charged ions**.

## The Born-Haber cycle

- The **Born-Haber cycle** applies **Hess's law** to an ionic compound.
- It relates the lattice enthalpy to enthalpies of **formation, atomisation, ionisation energy** and **electron affinity**.
- Because lattice enthalpy cannot be measured directly, the cycle is used to calculate it.

## Enthalpy of solution

- **Enthalpy of solution** — the enthalpy change when 1 mole of a substance dissolves in water.
- It depends on the **lattice enthalpy** (energy to separate the ions) and the **hydration enthalpy** (energy released as ions are surrounded by water).

## Limitations of the ionic model

- The simple ionic model treats ions as **perfect spheres of point charge**.
- Real ions are **polarised** (distorted), so calculated (theoretical) lattice enthalpies differ from experimental values, especially for compounds with covalent character.

## Common errors and misconceptions

- **Lattice enthalpy can be measured directly** — it cannot; the Born-Haber cycle calculates it.
- **Bigger ions give bigger lattice enthalpy** — small, highly charged ions give the largest values.
- **The ionic model is exact** — it ignores polarisation and covalent character.`,
      workedExample: `**Task.** Explain what lattice enthalpy is, how the Born-Haber cycle is used to find it, and why the theoretical value calculated from the ionic model may differ from the experimental value.

**Step 1 — Lattice enthalpy**
- Lattice enthalpy is the energy released when 1 mole of an ionic solid forms from its gaseous ions (e.g. Na⁺(g) + Cl⁻(g) → NaCl(s)). It measures the strength of the ionic lattice.

**Step 2 — Using the Born-Haber cycle**
- Lattice enthalpy cannot be measured directly, so a Born-Haber cycle is built using Hess's law: it links the enthalpy of formation of the solid to the atomisation enthalpies, ionisation energies and electron affinities of the elements, plus the lattice enthalpy.
- Rearranging the cycle gives the lattice enthalpy as the unknown.

**Step 3 — Why theoretical and experimental values differ**
- The theoretical value assumes a perfect ionic model (ions as point charges in perfect spheres).
- Real ions are polarised (distorted), giving some covalent character, so the experimental lattice enthalpy differs from the theoretical one — the bigger the difference, the more covalent character the compound has.

**Conclusion.** Lattice enthalpy is the energy of forming an ionic solid from gaseous ions; it is found indirectly through a Born-Haber cycle, and differences between theoretical and experimental values reveal the limitations of the simple ionic model.`,
      quiz: [
        { prompt: "Lattice enthalpy involves forming an ionic solid from its … ions.", options: ["gaseous", "aqueous", "solid", "molten"], correctIndex: 0, explanation: "From gaseous ions." },
        { prompt: "Forming an ionic lattice from gaseous ions is…", options: ["exothermic", "endothermic", "neutral", "impossible"], correctIndex: 0, explanation: "Energy is released." },
        { prompt: "A larger lattice enthalpy means a … ionic solid.", options: ["more stable", "less stable", "gaseous", "molten"], correctIndex: 0, explanation: "Stronger lattice = more stable." },
        { prompt: "Lattice enthalpy is largest for … ions.", options: ["small, highly charged", "large, low-charged", "neutral", "gaseous only"], correctIndex: 0, explanation: "Small high-charge ions bind strongly." },
        { prompt: "The Born-Haber cycle applies … to an ionic compound.", options: ["Hess's law", "Boyle's law", "Graham's law", "Henry's law"], correctIndex: 0, explanation: "It uses Hess's law." },
        { prompt: "Lattice enthalpy is found indirectly because it cannot be…", options: ["measured directly", "calculated", "defined", "written"], correctIndex: 0, explanation: "It must be calculated via a cycle." },
        { prompt: "Enthalpy of solution is the enthalpy change when 1 mole of a substance…", options: ["dissolves in water", "melts", "boils", "forms from elements"], correctIndex: 0, explanation: "It is for dissolving." },
        { prompt: "Enthalpy of solution depends on lattice enthalpy and … enthalpy.", options: ["hydration", "combustion", "neutralisation", "atomisation only"], correctIndex: 0, explanation: "Hydration of the ions matters." },
        { prompt: "The Born-Haber cycle uses ionisation energy, electron affinity and…", options: ["atomisation enthalpy", "boiling point", "density", "colour"], correctIndex: 0, explanation: "Atomisation is one of the steps." },
        { prompt: "The simple ionic model treats ions as…", options: ["point charges / perfect spheres", "molecules", "gases", "metals"], correctIndex: 0, explanation: "It assumes point-charge spheres." },
        { prompt: "Real ions are … which the ionic model ignores.", options: ["polarised (distorted)", "perfectly spherical", "neutral", "gaseous"], correctIndex: 0, explanation: "Polarisation gives covalent character." },
        { prompt: "A big difference between theoretical and experimental lattice enthalpy suggests…", options: ["covalent character", "no bonding", "a gas", "a metal"], correctIndex: 0, explanation: "It indicates covalent character." },
        { prompt: "Lattice enthalpy measures the strength of the…", options: ["ionic lattice", "covalent bond", "metallic bond", "hydrogen bond"], correctIndex: 0, explanation: "It quantifies lattice strength." },
        { prompt: "Which factor increases lattice enthalpy?", options: ["higher ionic charge", "larger ions", "lower charge", "gaseous state"], correctIndex: 0, explanation: "Higher charge strengthens attraction." },
        { prompt: "The energy released when gaseous ions are hydrated is the … enthalpy.", options: ["hydration", "lattice", "combustion", "formation"], correctIndex: 0, explanation: "Hydration enthalpy is released on solvation." },
        { prompt: "The Born-Haber cycle relates lattice enthalpy to the enthalpy of…", options: ["formation", "vaporisation of water", "neutralisation", "titration"], correctIndex: 0, explanation: "Formation enthalpy is part of the cycle." },
        { prompt: "A smaller ionic radius gives a … lattice enthalpy.", options: ["larger", "smaller", "zero", "negative only"], correctIndex: 0, explanation: "Smaller ions get closer, stronger attraction." },
        { prompt: "The ionic model's main limitation is ignoring…", options: ["polarisation / covalent character", "temperature", "pressure", "mass"], correctIndex: 0, explanation: "It ignores distortion of ions." },
        { prompt: "Lattice enthalpy is important in explaining the stability of…", options: ["ionic compounds", "gases", "metals only", "acids"], correctIndex: 0, explanation: "It underlies ionic-solid stability." },
        { prompt: "The Born-Haber cycle is essentially … applied to ionic solids.", options: ["Hess's law", "Ohm's law", "Graham's law", "Boyle's law"], correctIndex: 0, explanation: "It is Hess's law for ionic compounds." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define lattice enthalpy and state one factor that makes it larger.", answerKey: "Lattice enthalpy is the energy change when 1 mole of an ionic solid is formed from its gaseous ions (exothermic), or the energy needed to break the solid into gaseous ions. It is larger for smaller ions and/or ions with higher charge (small, highly charged ions). Award marks for the definition and one correct factor.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The Born-Haber cycle is essentially an application of:", options: ["Hess's law", "Boyle's law", "Graham's law", "the ideal gas law"], correctIndex: 0, answerKey: "It applies Hess's law to ionic compounds.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "A large difference between the theoretical and experimental lattice enthalpy of a compound indicates:", options: ["significant covalent character", "no bonding at all", "the compound is a gas", "the compound is a metal"], correctIndex: 0, answerKey: "It shows the simple ionic model is inadequate — covalent character is present.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain what enthalpy of solution depends on.", answerKey: "The enthalpy of solution is the enthalpy change when 1 mole of a substance dissolves in water. It depends on the lattice enthalpy (the energy needed to separate the ions from the solid) and the hydration enthalpy (the energy released when the separated gaseous ions are surrounded by water molecules). Award marks for both the lattice-enthalpy and hydration-enthalpy contributions.", marks: 2 },
        { type: "ESSAY", prompt: "Explain how the Born-Haber cycle is used to find the lattice enthalpy of an ionic compound and discuss the limitations of the ionic model.", answerKey: "A full answer explains that lattice enthalpy cannot be measured directly, so a Born-Haber cycle (an application of Hess's law) is constructed linking the enthalpy of formation of the ionic solid to the atomisation enthalpies, ionisation energies and electron affinities of the elements plus the lattice enthalpy; rearranging the cycle gives the lattice enthalpy. The ionic model treats ions as perfect spheres of point charge, but real ions are polarised (distorted), giving some covalent character; this is why theoretical (calculated) lattice enthalpies differ from experimental values, with larger differences for compounds having more covalent character. Award marks for the Born-Haber/Hess's-law method, the quantities involved, and the limitations of the ionic model.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (General Chemistry, Petrucci et al.) — 7.9 Fuels as Sources of Energy (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_General_Chemistry_(Petrucci_et_al.)/07%3A_Thermochemistry/7.9%3A_Fuels_as_Sources_of_Energy)
      slug: "fuels",
      title: "Fuels",
      objective:
        "By the end of the topic, learners should be able to define a fuel, classify solid, liquid and gaseous fuels, and discuss calorific value and the fossil fuels. (MoE Grade 11 Period V, Chemical Energetics CONTENTS 6.)",
      estimatedMinutes: 110,
      notes: `## Introduction

- **Fuels** release energy when they burn and provide most of the world's energy.
- **This topic:** what a fuel is, the types of fuel, and their calorific values.

## What a fuel is

- **Fuel** — a substance that releases useful **heat energy**, usually by **combustion** (burning in oxygen).
- A good fuel has a **high calorific value**, is easy to store and transport, burns cleanly, and is available cheaply.

## Types of fuel

| State | Example | Notes |
|---|---|---|
| Solid | coal, wood, charcoal | easy to store; can be dirty/smoky |
| Liquid | petrol, diesel, kerosene | easy to transport; high energy density |
| Gas | natural gas (methane), LPG | clean-burning; needs pressurised storage |

## Fossil fuels

- **Fossil fuels** — coal (solid), petroleum/oil (liquid) and natural gas (gaseous) — formed from the remains of ancient organisms.
- They supply **more than 80%** of the world's energy but are **non-renewable** and release CO₂.

## Calorific value

- **Calorific value** — the energy released when a **unit mass** of fuel is completely burned (e.g. MJ/kg).
- Natural gas (methane) has a high calorific value; higher-grade coal (anthracite) has a higher calorific value than lower-grade coal.

## Common errors and misconceptions

- **All fuels are fossil fuels** — wood, biogas and hydrogen are fuels too.
- **Fossil fuels are renewable** — they form over millions of years and are effectively non-renewable.
- **A good fuel just burns hot** — it should also be safe to store, easy to transport and reasonably clean.`,
      workedExample: `**Task.** Classify coal, petrol and natural gas by state, and explain what is meant by the calorific value of a fuel and why it matters.

**Step 1 — Classify by state**
- Coal — a **solid** fuel.
- Petrol — a **liquid** fuel.
- Natural gas (methane) — a **gaseous** fuel.

**Step 2 — Calorific value**
- The calorific value is the amount of **heat energy released when a unit mass (e.g. 1 kg) of the fuel is completely burned**, measured in units such as MJ/kg.

**Step 3 — Why it matters**
- A fuel with a higher calorific value releases more energy per kilogram, so less is needed for the same job.
- Natural gas has a high calorific value and burns cleanly; anthracite coal has a higher calorific value than lower-grade coal.

**Conclusion.** Coal, petrol and natural gas are solid, liquid and gaseous fuels respectively; the calorific value measures the energy per unit mass on complete combustion and is a key measure of how good a fuel is.`,
      quiz: [
        { prompt: "A fuel releases useful … energy, usually by combustion.", options: ["heat", "sound", "light only", "electrical"], correctIndex: 0, explanation: "Fuels release heat on burning." },
        { prompt: "Coal is an example of a … fuel.", options: ["solid", "liquid", "gaseous", "nuclear"], correctIndex: 0, explanation: "Coal is a solid fuel." },
        { prompt: "Petrol is an example of a … fuel.", options: ["liquid", "solid", "gaseous", "nuclear"], correctIndex: 0, explanation: "Petrol is a liquid fuel." },
        { prompt: "Natural gas (methane) is a … fuel.", options: ["gaseous", "solid", "liquid", "solid then liquid"], correctIndex: 0, explanation: "Natural gas is gaseous." },
        { prompt: "The three fossil fuels are coal, oil and…", options: ["natural gas", "wood", "hydrogen", "biogas"], correctIndex: 0, explanation: "Coal, oil and natural gas are fossil fuels." },
        { prompt: "Fossil fuels supply more than … of the world's energy.", options: ["80%", "20%", "5%", "50%"], correctIndex: 0, explanation: "Over 80% comes from fossil fuels." },
        { prompt: "Calorific value is the energy released per … of fuel burned.", options: ["unit mass", "unit colour", "second", "reaction"], correctIndex: 0, explanation: "Energy per unit mass (e.g. MJ/kg)." },
        { prompt: "A good fuel should have a … calorific value.", options: ["high", "low", "zero", "negative"], correctIndex: 0, explanation: "More energy per kilogram is better." },
        { prompt: "Fossil fuels are…", options: ["non-renewable", "renewable", "made in factories", "always clean"], correctIndex: 0, explanation: "They form over millions of years." },
        { prompt: "Burning fossil fuels releases the greenhouse gas…", options: ["carbon dioxide", "oxygen", "nitrogen", "helium"], correctIndex: 0, explanation: "CO₂ is released." },
        { prompt: "Which fuel is NOT a fossil fuel?", options: ["wood", "coal", "petroleum", "natural gas"], correctIndex: 0, explanation: "Wood is a biofuel, not fossil." },
        { prompt: "Natural gas burns … compared with coal.", options: ["more cleanly", "more dirtily", "not at all", "colder"], correctIndex: 0, explanation: "Gas is a cleaner fuel." },
        { prompt: "Anthracite coal has a … calorific value than lower-grade coal.", options: ["higher", "lower", "equal", "zero"], correctIndex: 0, explanation: "Higher-grade coal stores more energy." },
        { prompt: "Combustion means burning a fuel in…", options: ["oxygen", "nitrogen", "water", "argon"], correctIndex: 0, explanation: "Combustion needs oxygen." },
        { prompt: "A liquid fuel is easier to … than a solid.", options: ["transport", "see", "weigh", "colour"], correctIndex: 0, explanation: "Liquids flow and are easy to pump." },
        { prompt: "Calorific value is measured in units such as…", options: ["MJ/kg", "km/h", "mol/dm³", "K"], correctIndex: 0, explanation: "Energy per mass, e.g. MJ/kg." },
        { prompt: "A good fuel should be easy to store, transport and…", options: ["burn cleanly", "look nice", "conduct electricity", "dissolve"], correctIndex: 0, explanation: "Clean, safe burning is important." },
        { prompt: "LPG and natural gas are examples of … fuels.", options: ["gaseous", "solid", "liquid", "nuclear"], correctIndex: 0, explanation: "They are gaseous fuels." },
        { prompt: "Charcoal is a … fuel.", options: ["solid", "liquid", "gaseous", "nuclear"], correctIndex: 0, explanation: "Charcoal is solid." },
        { prompt: "Which is a renewable fuel?", options: ["biogas", "coal", "petroleum", "natural gas"], correctIndex: 0, explanation: "Biogas is renewable; fossil fuels are not." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a fuel and give one example each of a solid, liquid and gaseous fuel.", answerKey: "A fuel is a substance that releases useful heat energy, usually by combustion (burning in oxygen). Solid fuel: coal (or wood/charcoal). Liquid fuel: petrol (or diesel/kerosene). Gaseous fuel: natural gas/methane (or LPG). Award marks for the definition and one correct example of each state.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The three main fossil fuels are:", options: ["coal, petroleum and natural gas", "wood, charcoal and biogas", "hydrogen, methane and ethanol", "coal, hydrogen and wood"], correctIndex: 0, answerKey: "Coal, petroleum (oil) and natural gas are the fossil fuels.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The calorific value of a fuel is:", options: ["the energy released when a unit mass is completely burned", "the temperature of its flame", "the mass of ash left behind", "the volume of gas produced"], correctIndex: 0, answerKey: "It is the energy released per unit mass on complete combustion.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "State two properties, besides a high calorific value, that make a substance a good fuel.", answerKey: "Any two of: easy and safe to store; easy to transport; burns cleanly (little smoke/pollution); readily available and cheap; ignites and burns in a controlled manner. Award a mark for each valid property.", marks: 2 },
        { type: "ESSAY", prompt: "Discuss the classification of fuels into solid, liquid and gaseous types, the meaning and importance of calorific value, and one environmental drawback of fossil fuels.", answerKey: "A full answer classifies fuels by state with examples: solid (coal, wood, charcoal), liquid (petrol, diesel, kerosene) and gaseous (natural gas/methane, LPG), noting practical points such as ease of storage and transport. It defines calorific value as the energy released when a unit mass of fuel is completely burned (e.g. MJ/kg) and explains that a higher calorific value means more energy per kilogram, so a better fuel. It notes an environmental drawback of fossil fuels — they are non-renewable and their combustion releases carbon dioxide (a greenhouse gas) and pollutants. Award marks for the state classification with examples, the calorific-value explanation, and a valid environmental drawback.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Introductory Chemistry CK-12) — 24.1 Discovery of Radioactivity (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(CK-12)/24%3A_Nuclear_Chemistry/24.01%3A_Discovery_of_Radioactivity)
      slug: "definition-and-history-of-radioactivity",
      title: "Definition and History of Radioactivity",
      objective:
        "By the end of the topic, learners should be able to define radioactivity and outline its discovery by Becquerel and the Curies. (MoE Grade 11 Period V, Nuclear Chemistry CONTENTS 1.)",
      estimatedMinutes: 110,
      notes: `## Introduction

- **Radioactivity** was discovered by accident and opened up the study of the nucleus.
- **This topic:** what radioactivity is and the scientists who discovered it.

## Definition

- **Radioactivity** — the **spontaneous emission of radiation** (particles or high-energy rays) from the **unstable nucleus** of an atom.
- A **radioactive** (unstable) nucleus decays to become more stable, giving off radiation.

## History of the discovery

- **Henri Becquerel (1896)** — found that uranium salts fogged a photographic plate in the dark, showing they gave off penetrating rays. He **discovered radioactivity**.
- **Marie Curie** — studied the phenomenon, **named it "radioactivity"**, and showed the amount of radiation depends on the amount of uranium.
- **Marie and Pierre Curie** — discovered the new radioactive elements **polonium** and **radium**.
- Becquerel and the Curies shared the **1903 Nobel Prize**; Marie Curie won a **second Nobel Prize in 1911**.

## Key ideas

- Radioactivity comes from the **nucleus**, not the electrons.
- It is **spontaneous** — it happens on its own, unaffected by temperature or chemical state.

## Common errors and misconceptions

- **Radioactivity comes from electrons** — it comes from the unstable **nucleus**.
- **Becquerel named it** — Marie Curie named it "radioactivity".
- **It can be switched on and off** — radioactive decay is spontaneous and cannot be controlled by ordinary means.`,
      workedExample: `**Task.** Define radioactivity and describe the roles of Henri Becquerel and Marie Curie in its discovery.

**Step 1 — Define radioactivity**
- Radioactivity is the spontaneous emission of radiation from the unstable nucleus of an atom as it decays to become more stable.

**Step 2 — Becquerel's role**
- In 1896, Henri Becquerel found that uranium salts fogged a photographic plate even in the dark, showing that uranium spontaneously gave off penetrating rays. This was the **discovery of radioactivity**.

**Step 3 — Marie Curie's role**
- Marie Curie investigated these rays, **named the phenomenon "radioactivity"**, and (with Pierre Curie) discovered the radioactive elements **polonium and radium**. She showed the radiation came from the atoms themselves.

**Conclusion.** Radioactivity is the spontaneous emission of radiation from unstable nuclei; Becquerel discovered it through uranium's effect on photographic plates, and Marie Curie named it and discovered new radioactive elements.`,
      quiz: [
        { prompt: "Radioactivity is the spontaneous emission of radiation from the…", options: ["nucleus", "electrons", "protons only", "surroundings"], correctIndex: 0, explanation: "It comes from the unstable nucleus." },
        { prompt: "A radioactive nucleus is…", options: ["unstable", "stable", "neutral in charge only", "a molecule"], correctIndex: 0, explanation: "Unstable nuclei decay." },
        { prompt: "Radioactivity was discovered by…", options: ["Henri Becquerel", "John Dalton", "Niels Bohr", "J. J. Thomson"], correctIndex: 0, explanation: "Becquerel discovered it in 1896." },
        { prompt: "Becquerel discovered radioactivity using…", options: ["uranium salts and photographic plates", "gold foil", "cathode rays", "a balloon"], correctIndex: 0, explanation: "Uranium fogged photographic plates." },
        { prompt: "The term 'radioactivity' was coined by…", options: ["Marie Curie", "Becquerel", "Rutherford", "Dalton"], correctIndex: 0, explanation: "Marie Curie named it." },
        { prompt: "Marie and Pierre Curie discovered the elements polonium and…", options: ["radium", "uranium", "helium", "carbon"], correctIndex: 0, explanation: "They discovered radium and polonium." },
        { prompt: "Radioactive decay is…", options: ["spontaneous", "controlled by heat", "caused by chemicals", "reversible easily"], correctIndex: 0, explanation: "It happens on its own." },
        { prompt: "Radioactivity is unaffected by…", options: ["temperature and chemical state", "the nucleus", "the isotope", "time"], correctIndex: 0, explanation: "Ordinary conditions do not change it." },
        { prompt: "Becquerel and the Curies shared the Nobel Prize in…", options: ["1903", "1896", "1920", "1950"], correctIndex: 0, explanation: "They shared the 1903 prize." },
        { prompt: "Marie Curie won … Nobel Prizes in science.", options: ["two", "one", "three", "none"], correctIndex: 0, explanation: "She won two (1903, 1911)." },
        { prompt: "Radioactivity comes from changes in the…", options: ["nucleus", "electron shells", "bonds", "molecules"], correctIndex: 0, explanation: "Nuclear, not electronic." },
        { prompt: "The amount of radiation from uranium depends on the amount of…", options: ["uranium present", "light", "heat", "water"], correctIndex: 0, explanation: "It is proportional to the uranium." },
        { prompt: "A radioactive nucleus decays to become more…", options: ["stable", "unstable", "charged", "massive"], correctIndex: 0, explanation: "Decay increases stability." },
        { prompt: "Becquerel's discovery was partly by…", options: ["accident", "long planning", "computer", "electrolysis"], correctIndex: 0, explanation: "The fogged plates were an accidental find." },
        { prompt: "Which scientist is linked to naming radioactivity?", options: ["Marie Curie", "Rutherford", "Bohr", "Thomson"], correctIndex: 0, explanation: "Marie Curie named it." },
        { prompt: "Radioactivity involves emission of particles or high-energy…", options: ["rays", "sounds", "smells", "liquids"], correctIndex: 0, explanation: "Particles or high-energy photons." },
        { prompt: "Uranium is a … element.", options: ["radioactive", "noble gas", "alkali metal", "non-metal gas"], correctIndex: 0, explanation: "Uranium is radioactive." },
        { prompt: "The nucleus of a radioactive atom emits radiation to reach…", options: ["greater stability", "a higher charge", "more electrons", "a gas state"], correctIndex: 0, explanation: "Decay moves toward stability." },
        { prompt: "Which is TRUE of radioactivity?", options: ["it is spontaneous and nuclear", "it comes from electrons", "it needs heating", "it is a chemical reaction"], correctIndex: 0, explanation: "Spontaneous nuclear emission." },
        { prompt: "Polonium and radium are examples of … elements.", options: ["radioactive", "stable noble", "light metallic", "gaseous inert"], correctIndex: 0, explanation: "Both are radioactive." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define radioactivity and state where in the atom it originates.", answerKey: "Radioactivity is the spontaneous emission of radiation (particles or high-energy rays) from the unstable nucleus of an atom as it decays to become more stable. It originates in the nucleus (not the electrons). Award marks for the definition and the nuclear origin.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Radioactivity was first discovered by:", options: ["Henri Becquerel", "Marie Curie", "Ernest Rutherford", "John Dalton"], correctIndex: 0, answerKey: "Becquerel discovered radioactivity in 1896.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The scientist who coined the term 'radioactivity' and discovered polonium and radium was:", options: ["Marie Curie", "Henri Becquerel", "Niels Bohr", "J. J. Thomson"], correctIndex: 0, answerKey: "Marie Curie named radioactivity and, with Pierre Curie, discovered polonium and radium.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain how Becquerel's observation of uranium salts led to the discovery of radioactivity.", answerKey: "Becquerel found that uranium salts fogged a wrapped photographic plate even in the dark, without any light exposure. This showed the uranium was spontaneously giving off invisible, penetrating rays from within its atoms — the phenomenon later named radioactivity. Award marks for the fogged-plate observation and the conclusion that uranium emits penetrating radiation.", marks: 3 },
        { type: "ESSAY", prompt: "Describe the discovery and history of radioactivity, explaining what radioactivity is and the contributions of Becquerel and the Curies.", answerKey: "A full answer defines radioactivity as the spontaneous emission of radiation from unstable atomic nuclei as they decay toward stability, and notes it is nuclear in origin and unaffected by temperature or chemical state. It describes Becquerel's 1896 discovery from uranium salts fogging photographic plates in the dark; Marie Curie's investigation, her naming of 'radioactivity', and her demonstration that the radiation is proportional to the amount of uranium; and the Curies' discovery of the radioactive elements polonium and radium. It may note the 1903 Nobel Prize shared by Becquerel and the Curies and Marie Curie's second Nobel Prize (1911). Award marks for the definition, Becquerel's role, and the Curies' contributions.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry for Allied Health, Soult) — Chapter 10: Nuclear and Chemical Reactions (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Chemistry_for_Allied_Health_(Soult)/10%3A_Nuclear_and_Chemical_Reactions)
      slug: "nuclear-versus-chemical-reactions",
      title: "Difference Between Ordinary and Nuclear Reactions",
      objective:
        "By the end of the topic, learners should be able to compare nuclear reactions with ordinary chemical reactions in terms of what changes, the energy involved and the factors that affect them. (MoE Grade 11 Period V, Nuclear Chemistry CONTENTS 2.)",
      estimatedMinutes: 110,
      notes: `## Introduction

- **Nuclear** reactions are fundamentally different from **ordinary chemical** reactions.
- **This topic:** how the two kinds of reaction differ.

## What changes

- **Chemical reaction** — only the **electrons** (outer shells) are rearranged; atoms are joined or separated but the elements stay the **same**.
- **Nuclear reaction** — the **nucleus** changes, so the **identity of the element changes** (one element becomes another).

## Energy involved

- **Chemical reactions** release energy from **electron rearrangement** — relatively small amounts.
- **Nuclear reactions** release energy from the **nuclear binding energy** — up to about a **billion times more** than chemical reactions.

## What affects the reaction

- **Chemical reactions** are affected by temperature, pressure, concentration and catalysts.
- **Nuclear reactions** are **not affected** by temperature, pressure or catalysts, and are the same whatever the chemical form of the element.

## Comparison table

| Feature | Chemical reaction | Nuclear reaction |
|---|---|---|
| Part of atom involved | electrons | nucleus |
| Elements | unchanged | can change |
| Energy released | small | very large |
| Affected by T, P, catalyst | yes | no |

## Common errors and misconceptions

- **Nuclear reactions just rearrange atoms** — they change the nucleus and can change one element into another.
- **Catalysts speed nuclear reactions** — catalysts affect chemical reactions, not nuclear ones.
- **Both release similar energy** — nuclear reactions release far more energy.`,
      workedExample: `**Task.** List three differences between a nuclear reaction and an ordinary chemical reaction.

**Step 1 — Part of the atom involved**
- Chemical reactions rearrange only the **electrons**; the nucleus is unchanged.
- Nuclear reactions change the **nucleus** itself.

**Step 2 — Change of element**
- In a chemical reaction the **elements stay the same** (atoms are just rearranged).
- In a nuclear reaction the **identity of the element can change** (one element turns into another).

**Step 3 — Energy released**
- Chemical reactions release relatively **small** amounts of energy (from electrons).
- Nuclear reactions release **enormous** amounts of energy (up to about a billion times more), from nuclear binding energy.

**Conclusion.** Nuclear reactions differ from chemical reactions in that they involve the nucleus (not the electrons), can change one element into another, and release far more energy; they are also unaffected by temperature, pressure or catalysts.`,
      quiz: [
        { prompt: "A chemical reaction involves only the atom's…", options: ["electrons", "nucleus", "protons", "neutrons"], correctIndex: 0, explanation: "Only electrons are rearranged." },
        { prompt: "A nuclear reaction involves the atom's…", options: ["nucleus", "electrons", "outer shell", "bonds"], correctIndex: 0, explanation: "The nucleus changes." },
        { prompt: "In a chemical reaction, the elements…", options: ["stay the same", "change identity", "disappear", "become gases"], correctIndex: 0, explanation: "Chemical reactions do not change elements." },
        { prompt: "In a nuclear reaction, the element's identity can…", options: ["change", "never change", "only get heavier", "become an electron"], correctIndex: 0, explanation: "One element can become another." },
        { prompt: "Nuclear reactions release … energy than chemical reactions.", options: ["far more", "far less", "the same", "no"], correctIndex: 0, explanation: "Up to about a billion times more." },
        { prompt: "Chemical reaction energy comes from…", options: ["electron rearrangement", "the nucleus", "the salt bridge", "light only"], correctIndex: 0, explanation: "Electrons moving between energy levels." },
        { prompt: "Nuclear reaction energy comes from…", options: ["nuclear binding energy", "electron shells", "bonds breaking", "hydration"], correctIndex: 0, explanation: "Nuclear binding energy is released." },
        { prompt: "Nuclear reactions are … by temperature and catalysts.", options: ["not affected", "greatly sped up", "stopped", "reversed"], correctIndex: 0, explanation: "They are unaffected by such factors." },
        { prompt: "Chemical reactions ARE affected by…", options: ["temperature and catalysts", "the nucleus", "half-life", "binding energy"], correctIndex: 0, explanation: "T, P, concentration and catalysts matter." },
        { prompt: "Which reaction can turn one element into another?", options: ["nuclear", "chemical", "neither", "both equally"], correctIndex: 0, explanation: "Only nuclear reactions change elements." },
        { prompt: "The far greater energy of nuclear reactions is why they power…", options: ["nuclear reactors and the Sun", "acid-base titrations", "electroplating", "distillation"], correctIndex: 0, explanation: "Nuclear energy powers reactors and stars." },
        { prompt: "In a chemical reaction the number of each type of atom is…", options: ["conserved", "changed", "doubled", "halved"], correctIndex: 0, explanation: "Atoms are conserved chemically." },
        { prompt: "A catalyst affects a … reaction.", options: ["chemical", "nuclear", "both", "neither"], correctIndex: 0, explanation: "Catalysts work on chemical reactions." },
        { prompt: "Which involves electrons only?", options: ["chemical reaction", "nuclear fission", "nuclear fusion", "radioactive decay"], correctIndex: 0, explanation: "Chemical reactions involve electrons." },
        { prompt: "Nuclear reactions are independent of the element's chemical…", options: ["form (compound)", "nucleus", "mass number", "half-life"], correctIndex: 0, explanation: "The chemical form does not matter." },
        { prompt: "Burning wood is an example of a … reaction.", options: ["chemical", "nuclear", "fission", "fusion"], correctIndex: 0, explanation: "Combustion is chemical." },
        { prompt: "The Sun's energy comes from a … reaction.", options: ["nuclear", "chemical", "combustion", "neutralisation"], correctIndex: 0, explanation: "Nuclear fusion powers the Sun." },
        { prompt: "Which releases about a billion times more energy?", options: ["nuclear reactions", "chemical reactions", "dissolving salt", "melting ice"], correctIndex: 0, explanation: "Nuclear reactions release vastly more energy." },
        { prompt: "Rusting of iron is a … change.", options: ["chemical", "nuclear", "fusion", "fission"], correctIndex: 0, explanation: "Rusting is chemical (electrons)." },
        { prompt: "A change in the nucleus that alters the element is a … reaction.", options: ["nuclear", "chemical", "acid-base", "precipitation"], correctIndex: 0, explanation: "Nuclear reactions change the nucleus." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State two differences between a nuclear reaction and an ordinary chemical reaction.", answerKey: "Any two of: chemical reactions involve only the electrons while nuclear reactions involve the nucleus; in chemical reactions the elements stay the same while in nuclear reactions one element can change into another; nuclear reactions release far more energy than chemical reactions; nuclear reactions are unaffected by temperature, pressure or catalysts, whereas chemical reactions are. Award a mark for each valid difference.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Which of the following is TRUE only of nuclear reactions?", options: ["the identity of the element can change", "electrons are rearranged", "energy is released", "atoms are conserved"], correctIndex: 0, answerKey: "Only nuclear reactions change one element into another.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Compared with chemical reactions, nuclear reactions release:", options: ["about a billion times more energy", "about the same energy", "much less energy", "no energy"], correctIndex: 0, answerKey: "Nuclear reactions release far more energy (up to ~10⁹ times).", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain why the rate of a nuclear reaction is not affected by temperature or catalysts, unlike a chemical reaction.", answerKey: "A chemical reaction depends on collisions of electrons/atoms, which are speeded up by higher temperature or by a catalyst that lowers the activation energy. A nuclear reaction takes place within the nucleus and depends on the instability of the nucleus itself, which is unaffected by the electrons or the outside conditions (temperature, pressure, catalyst, chemical form), so these factors do not change its rate. Award marks for the electron/collision basis of chemical rates and the nuclear/independence explanation.", marks: 3 },
        { type: "ESSAY", prompt: "Compare nuclear reactions with ordinary chemical reactions in terms of the part of the atom involved, whether the element changes, the amount of energy released, and the factors that affect them.", answerKey: "A full answer explains: chemical reactions involve only the electrons (outer shells), the elements are unchanged (atoms just rearranged), the energy released is relatively small (from electron rearrangement), and the rate is affected by temperature, pressure, concentration and catalysts. Nuclear reactions involve the nucleus, can change one element into another, release enormous energy (from nuclear binding energy, up to about a billion times more), and are not affected by temperature, pressure, catalysts or the chemical form of the element. Award marks for the correct comparison across the part of the atom, change of element, energy, and affecting factors.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Introductory Chemistry) — 17.3 Types of Radioactivity: Alpha, Beta, and Gamma Decay (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(LibreTexts)/17%3A_Radioactivity_and_Nuclear_Chemistry/17.03%3A_Types_of_Radioactivity-_Alpha_Beta_and_Gamma_Decay)
      slug: "types-and-nature-of-radiations",
      title: "Types and Nature of Radiations",
      objective:
        "By the end of the topic, learners should be able to describe alpha, beta and gamma radiation in terms of their nature, charge, mass and penetrating power. (MoE Grade 11 Period V, Nuclear Chemistry CONTENTS 3.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- Unstable nuclei give off three main types of radiation: **alpha, beta and gamma**.
- **This topic:** the nature, charge and penetrating power of each.

## The three types

| Radiation | Nature | Symbol | Charge | Mass | Penetration |
|---|---|---|---|---|---|
| Alpha (α) | helium nucleus (2 p + 2 n) | ⁴₂He | +2 | large (4) | low — stopped by paper |
| Beta (β) | fast electron | ⁰₋₁e | −1 | very small | medium — stopped by aluminium |
| Gamma (γ) | high-energy electromagnetic ray | γ | 0 | none | high — needs thick lead/concrete |

## Nature of each

- **Alpha** — a helium nucleus (two protons and two neutrons); heavy, positive, strongly ionising but weakly penetrating.
- **Beta** — a fast-moving electron emitted from the nucleus; light, negative, more penetrating than alpha.
- **Gamma** — a high-energy photon (electromagnetic wave); no charge or mass, very penetrating, least ionising.

## Ionising vs penetrating power

- **Alpha** is the most **ionising** but the least **penetrating**.
- **Gamma** is the least ionising but the most **penetrating**.

## Effect of fields

- Alpha (+) and beta (−) are **deflected by electric and magnetic fields** in opposite directions; gamma (neutral) is **not deflected**.

## Common errors and misconceptions

- **Alpha is most penetrating** — alpha is the least penetrating (stopped by paper) but most ionising.
- **Gamma is a particle** — gamma is an electromagnetic ray, not a particle.
- **Beta is a proton** — beta is a fast electron (charge −1).`,
      workedExample: `**Task.** A radioactive source gives off radiation that is stopped by a few centimetres of aluminium but passes through paper, and is deflected toward the positive plate in an electric field. Identify the radiation and give its nature, charge and penetrating power.

**Step 1 — Use the penetration test**
- It passes through paper (so not alpha) but is stopped by aluminium (so not gamma).
- This matches **beta radiation**.

**Step 2 — Use the field test**
- It is deflected toward the **positive** plate, so the radiation is **negatively charged** — consistent with beta (a negative electron).

**Step 3 — State its properties**
- Nature: a **fast-moving electron** emitted from the nucleus (⁰₋₁e).
- Charge: **−1**; mass: very small.
- Penetrating power: **medium** — stopped by a few millimetres of aluminium.

**Conclusion.** The radiation is beta radiation — a fast negative electron of medium penetrating power, stopped by aluminium and deflected toward the positive plate.`,
      quiz: [
        { prompt: "An alpha particle is a…", options: ["helium nucleus", "fast electron", "photon", "proton"], correctIndex: 0, explanation: "Alpha is a helium nucleus (2p + 2n)." },
        { prompt: "A beta particle is a…", options: ["fast electron", "helium nucleus", "photon", "neutron"], correctIndex: 0, explanation: "Beta is a fast electron." },
        { prompt: "Gamma radiation is a…", options: ["high-energy electromagnetic ray", "helium nucleus", "electron", "proton"], correctIndex: 0, explanation: "Gamma is a photon (EM wave)." },
        { prompt: "The charge on an alpha particle is…", options: ["+2", "−1", "0", "+1"], correctIndex: 0, explanation: "Two protons give +2." },
        { prompt: "The charge on a beta particle is…", options: ["−1", "+2", "0", "+1"], correctIndex: 0, explanation: "Beta is a negative electron." },
        { prompt: "The charge on gamma radiation is…", options: ["0", "−1", "+2", "+1"], correctIndex: 0, explanation: "Gamma has no charge." },
        { prompt: "Which radiation is stopped by a sheet of paper?", options: ["alpha", "beta", "gamma", "all of them"], correctIndex: 0, explanation: "Alpha is least penetrating." },
        { prompt: "Which radiation is stopped by a few mm of aluminium?", options: ["beta", "alpha", "gamma", "none"], correctIndex: 0, explanation: "Beta is stopped by aluminium." },
        { prompt: "Which radiation needs thick lead or concrete to stop it?", options: ["gamma", "alpha", "beta", "all easily stopped"], correctIndex: 0, explanation: "Gamma is most penetrating." },
        { prompt: "The most ionising radiation is…", options: ["alpha", "beta", "gamma", "they are equal"], correctIndex: 0, explanation: "Alpha is most ionising." },
        { prompt: "The most penetrating radiation is…", options: ["gamma", "alpha", "beta", "all equal"], correctIndex: 0, explanation: "Gamma penetrates most." },
        { prompt: "Which radiation is NOT deflected by an electric field?", options: ["gamma", "alpha", "beta", "all deflected"], correctIndex: 0, explanation: "Gamma is neutral, so undeflected." },
        { prompt: "Alpha particles are deflected toward the … plate.", options: ["negative", "positive", "neutral", "none"], correctIndex: 0, explanation: "Positive alpha goes to the negative plate." },
        { prompt: "Beta particles are deflected toward the … plate.", options: ["positive", "negative", "neutral", "none"], correctIndex: 0, explanation: "Negative beta goes to the positive plate." },
        { prompt: "The symbol for an alpha particle is…", options: ["⁴₂He", "⁰₋₁e", "γ", "¹₁H"], correctIndex: 0, explanation: "⁴₂He is the helium nucleus." },
        { prompt: "The symbol for a beta particle is…", options: ["⁰₋₁e", "⁴₂He", "γ", "¹₀n"], correctIndex: 0, explanation: "⁰₋₁e is the fast electron." },
        { prompt: "Which radiation has no mass?", options: ["gamma", "alpha", "beta", "all have mass"], correctIndex: 0, explanation: "Gamma is massless (a photon)." },
        { prompt: "Alpha radiation is … penetrating.", options: ["least", "most", "medium then high", "very"], correctIndex: 0, explanation: "Alpha is the least penetrating." },
        { prompt: "Which is the heaviest type of radiation?", options: ["alpha", "beta", "gamma", "all the same"], correctIndex: 0, explanation: "Alpha has the greatest mass." },
        { prompt: "Gamma radiation is the … ionising.", options: ["least", "most", "second most", "equal"], correctIndex: 0, explanation: "Gamma ionises the least." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe the nature and charge of alpha, beta and gamma radiation.", answerKey: "Alpha (α) is a helium nucleus (2 protons + 2 neutrons) with charge +2. Beta (β) is a fast-moving electron with charge −1. Gamma (γ) is a high-energy electromagnetic ray (photon) with no charge. Award a mark for each type's nature and charge.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which radiation is the most penetrating but the least ionising?", options: ["gamma", "alpha", "beta", "they are all equal"], correctIndex: 0, answerKey: "Gamma is most penetrating and least ionising.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Alpha radiation can be stopped by:", options: ["a sheet of paper", "a few cm of lead", "several metres of concrete", "nothing"], correctIndex: 0, answerKey: "Alpha is the least penetrating and is stopped by paper.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain how alpha, beta and gamma radiation behave in an electric field.", answerKey: "Alpha particles are positively charged (+2) and are deflected toward the negative plate; beta particles are negatively charged (−1) and are deflected toward the positive plate (and by a larger amount because they are much lighter); gamma rays have no charge and are not deflected at all. Award marks for the deflection direction of alpha and beta and the non-deflection of gamma.", marks: 3 },
        { type: "ESSAY", prompt: "Compare alpha, beta and gamma radiation in terms of their nature, charge, mass, ionising power and penetrating power, and describe a simple experiment to distinguish them.", answerKey: "A full answer gives: alpha — a helium nucleus, charge +2, large mass, most ionising, least penetrating (stopped by paper); beta — a fast electron, charge −1, very small mass, medium ionising and penetration (stopped by a few mm of aluminium); gamma — a high-energy electromagnetic ray, no charge or mass, least ionising, most penetrating (needs thick lead/concrete). A distinguishing experiment: pass the radiation through absorbers of increasing thickness (paper, aluminium, lead) to compare penetration, and/or pass it through an electric or magnetic field where alpha and beta deflect in opposite directions and gamma is undeflected. Award marks for the properties of all three types and a valid distinguishing method.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (The Basics of GOB Chemistry, Ball et al.) — 11.2 Half-Life (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/The_Basics_of_General_Organic_and_Biological_Chemistry_(Ball_et_al.)/11%3A_Nuclear_Chemistry/11.02%3A_Half-Life)
      slug: "half-life",
      title: "Half-life",
      objective:
        "By the end of the topic, learners should be able to define half-life, relate it to nuclear stability, and carry out simple half-life calculations. (MoE Grade 11 Period V, Nuclear Chemistry CONTENTS 4.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- Radioactive decay is measured by the **half-life** of the isotope.
- **This topic:** what half-life means and how to use it.

## Definition

- **Half-life (t½)** — the time taken for **half** the radioactive nuclei in a sample to decay.
- After each half-life, the amount of the radioactive isotope **halves**.

## Half-life and stability

- A **long half-life** means the isotope decays slowly → it is **more stable**.
- A **short half-life** means it decays quickly → it is **less stable**.
- Half-lives range from fractions of a second to billions of years.

## Doing the calculation

- After n half-lives, the fraction remaining is **(½)ⁿ**.
- Example: after 3 half-lives, (½)³ = 1/8 of the original remains.

\`\`\`svg Radioactive decay by half-lives
<svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart halving after each half-life">
  <rect x="20" y="20" width="30" height="80" fill="#2563eb"/>
  <rect x="80" y="60" width="30" height="40" fill="#2563eb"/>
  <rect x="140" y="80" width="30" height="20" fill="#2563eb"/>
  <rect x="200" y="90" width="30" height="10" fill="#2563eb"/>
  <text x="35" y="112" font-size="8" text-anchor="middle" fill="#334155">0</text>
  <text x="95" y="112" font-size="8" text-anchor="middle" fill="#334155">1 t½</text>
  <text x="155" y="112" font-size="8" text-anchor="middle" fill="#334155">2 t½</text>
  <text x="215" y="112" font-size="8" text-anchor="middle" fill="#334155">3 t½</text>
</svg>
\`\`\`

## Common errors and misconceptions

- **The whole sample decays in one half-life** — only **half** decays each half-life; it never fully disappears in a fixed time.
- **A short half-life means more stable** — a short half-life means **less** stable.
- **Half-life depends on the amount** — half-life is fixed for a given isotope, whatever the sample size.`,
      workedExample: `**Task.** A radioactive isotope has a half-life of 8 days. A hospital receives a 40 mg sample. (a) How much remains after 24 days? (b) How many half-lives is this?

**Step 1 — Find the number of half-lives**
- Number of half-lives n = total time ÷ half-life = 24 ÷ 8 = **3 half-lives**.

**Step 2 — Halve the sample each half-life**
- Start: 40 mg.
- After 1 half-life (8 days): 40 ÷ 2 = 20 mg.
- After 2 half-lives (16 days): 20 ÷ 2 = 10 mg.
- After 3 half-lives (24 days): 10 ÷ 2 = **5 mg**.

**Step 3 — Check with the fraction formula**
- Fraction remaining = (½)³ = 1/8; 40 × 1/8 = **5 mg**. ✓

**Conclusion.** After 24 days (3 half-lives) 5 mg of the isotope remains — the sample has halved three times from 40 → 20 → 10 → 5 mg.`,
      quiz: [
        { prompt: "Half-life is the time for … of the radioactive nuclei to decay.", options: ["half", "all", "a quarter", "none"], correctIndex: 0, explanation: "Half decay each half-life." },
        { prompt: "After one half-life, the amount of isotope…", options: ["halves", "doubles", "stays the same", "disappears"], correctIndex: 0, explanation: "It falls to one half." },
        { prompt: "A long half-life means the isotope is…", options: ["more stable", "less stable", "a gas", "heavier"], correctIndex: 0, explanation: "Slow decay = more stable." },
        { prompt: "A short half-life means the isotope is…", options: ["less stable", "more stable", "a solid", "lighter"], correctIndex: 0, explanation: "Fast decay = less stable." },
        { prompt: "After n half-lives, the fraction remaining is…", options: ["(½)ⁿ", "n/2", "2ⁿ", "1/n"], correctIndex: 0, explanation: "It halves each time." },
        { prompt: "After 3 half-lives, the fraction remaining is…", options: ["1/8", "1/3", "1/6", "3/4"], correctIndex: 0, explanation: "(½)³ = 1/8." },
        { prompt: "A 40 mg sample after 3 half-lives is…", options: ["5 mg", "10 mg", "20 mg", "0 mg"], correctIndex: 0, explanation: "40 → 20 → 10 → 5 mg." },
        { prompt: "Half-life depends on the…", options: ["type of isotope", "sample size", "temperature", "container"], correctIndex: 0, explanation: "It is fixed for each isotope." },
        { prompt: "After 2 half-lives, the fraction remaining is…", options: ["1/4", "1/2", "1/8", "1/3"], correctIndex: 0, explanation: "(½)² = 1/4." },
        { prompt: "If the half-life is 8 days, 24 days is … half-lives.", options: ["3", "2", "4", "24"], correctIndex: 0, explanation: "24 ÷ 8 = 3." },
        { prompt: "Half-lives can range from fractions of a second to…", options: ["billions of years", "a few minutes only", "one day only", "one year only"], correctIndex: 0, explanation: "They vary enormously." },
        { prompt: "Half-life is a measure of nuclear…", options: ["stability", "colour", "mass", "charge"], correctIndex: 0, explanation: "Longer half-life = more stable." },
        { prompt: "After one half-life, the fraction that has decayed is…", options: ["1/2", "1/4", "all", "none"], correctIndex: 0, explanation: "Half has decayed." },
        { prompt: "100 g of an isotope with half-life 5 years leaves … after 10 years.", options: ["25 g", "50 g", "75 g", "0 g"], correctIndex: 0, explanation: "10 years = 2 half-lives; 100 → 50 → 25." },
        { prompt: "Does a radioactive sample ever fully disappear in a fixed number of half-lives?", options: ["no, it keeps halving", "yes, after one", "yes, after two", "yes, after three"], correctIndex: 0, explanation: "It halves each time, never reaching zero." },
        { prompt: "Doubling the sample size … the half-life.", options: ["does not change", "doubles", "halves", "removes"], correctIndex: 0, explanation: "Half-life is independent of amount." },
        { prompt: "Carbon-14, used in dating, has a half-life of about…", options: ["5730 years", "8 days", "1 second", "5 minutes"], correctIndex: 0, explanation: "Carbon-14's half-life is ~5730 years." },
        { prompt: "After 4 half-lives, the fraction remaining is…", options: ["1/16", "1/4", "1/8", "1/12"], correctIndex: 0, explanation: "(½)⁴ = 1/16." },
        { prompt: "A very stable nucleus has a … half-life.", options: ["long", "short", "zero", "negative"], correctIndex: 0, explanation: "Stability means slow decay." },
        { prompt: "The symbol for half-life is…", options: ["t½", "ΔH", "Kw", "E°"], correctIndex: 0, explanation: "t½ denotes half-life." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define half-life and explain how it relates to the stability of a nucleus.", answerKey: "Half-life is the time taken for half the radioactive nuclei in a sample to decay. A long half-life means the isotope decays slowly and is more stable; a short half-life means it decays quickly and is less stable. Award marks for the definition and the link to stability.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "After 3 half-lives, the fraction of a radioactive sample remaining is:", options: ["1/8", "1/3", "1/6", "3/4"], correctIndex: 0, answerKey: "(½)³ = 1/8.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The half-life of a particular isotope depends on:", options: ["the identity of the isotope only", "the mass of the sample", "the temperature", "the container used"], correctIndex: 0, answerKey: "Half-life is fixed for a given isotope, independent of sample size or conditions.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "A radioactive isotope has a half-life of 6 hours. Starting with 80 mg, how much remains after 18 hours?", answerKey: "Number of half-lives = 18 ÷ 6 = 3. Halving each time: 80 → 40 → 20 → 10 mg. So 10 mg remains after 18 hours. Award marks for finding 3 half-lives and the answer 10 mg.", marks: 3 },
        { type: "ESSAY", prompt: "Explain what half-life means, how it measures the stability of a nucleus, and how it is used to calculate the amount of a radioactive isotope remaining after a given time, using a worked example.", answerKey: "A full answer defines half-life as the time for half the radioactive nuclei to decay, and explains that after each half-life the amount halves so the sample never fully disappears in a fixed time; a long half-life indicates slow decay and greater nuclear stability, a short half-life the opposite. To calculate the amount remaining: find the number of half-lives n = total time ÷ half-life, then multiply the starting amount by (½)ⁿ. Worked example: a 40 mg sample with half-life 8 days after 24 days is 3 half-lives, 40 → 20 → 10 → 5 mg (or 40 × (½)³ = 5 mg). Award marks for the definition, the stability link, and a correct worked calculation.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Fundamentals of GOB Chemistry) — 11.9 Nuclear Fission and Nuclear Fusion (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Fundamentals_of_General_Organic_and_Biological_Chemistry_(LibreTexts)/11%3A_Nuclear_Chemistry/11.09%3A_Nuclear_Fission_and_Nuclear_Fusion)
      slug: "nuclear-fission-and-fusion",
      title: "Nuclear Reactions - Fission and Fusion",
      objective:
        "By the end of the topic, learners should be able to distinguish nuclear fission from fusion, describe chain reactions, and explain their occurrence in reactors and stars. (MoE Grade 11 Period V, Nuclear Chemistry CONTENTS 5.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- Two nuclear reactions release enormous energy: **fission** and **fusion**.
- **This topic:** how they differ and where they occur.

## Nuclear fission

- **Fission** — the **splitting** of a large, heavy nucleus (e.g. uranium-235) into two smaller nuclei, releasing neutrons and a large amount of energy.
- The released neutrons can split more nuclei, causing a **chain reaction**.
- Controlled fission in a **nuclear reactor** generates electricity; uncontrolled fission is the atomic bomb.

## Nuclear fusion

- **Fusion** — the **joining** of two small, light nuclei (e.g. hydrogen) to form a larger nucleus, releasing even more energy.
- Fusion powers the **Sun and stars** (hydrogen fusing to helium).
- Fusion needs extremely high temperatures and is very hard to control on Earth.

## Comparing fission and fusion

| Feature | Fission | Fusion |
|---|---|---|
| Process | large nucleus splits | small nuclei join |
| Fuel | heavy (uranium) | light (hydrogen) |
| Where | nuclear reactors, bombs | the Sun and stars |
| Chain reaction | yes (neutrons) | no |

## Common errors and misconceptions

- **Fission joins nuclei** — fission **splits** a nucleus; fusion **joins** nuclei.
- **The Sun runs on fission** — the Sun runs on **fusion** of hydrogen.
- **Both are easy to control** — fusion is extremely hard to control (needs huge temperatures).`,
      workedExample: `**Task.** Compare nuclear fission and nuclear fusion, and explain what a chain reaction is in a nuclear reactor.

**Step 1 — Fission**
- Fission is the **splitting** of a large, heavy nucleus (such as uranium-235) into two smaller nuclei, releasing neutrons and a large amount of energy.

**Step 2 — Fusion**
- Fusion is the **joining** of two small, light nuclei (such as hydrogen) to form a larger nucleus, releasing even more energy; it powers the Sun and stars.

**Step 3 — The chain reaction**
- In fission, each split nucleus releases **neutrons**.
- These neutrons hit other uranium nuclei and make them split too, releasing still more neutrons.
- This self-sustaining sequence is a **chain reaction**; in a reactor it is controlled (using control rods) so the energy is released steadily to generate electricity.

**Conclusion.** Fission splits heavy nuclei and can sustain a chain reaction (used in reactors), while fusion joins light nuclei and powers stars; both release enormous nuclear energy.`,
      quiz: [
        { prompt: "Fission is the … of a large nucleus.", options: ["splitting", "joining", "melting", "cooling"], correctIndex: 0, explanation: "Fission splits a heavy nucleus." },
        { prompt: "Fusion is the … of small nuclei.", options: ["joining", "splitting", "cooling", "ionising"], correctIndex: 0, explanation: "Fusion joins light nuclei." },
        { prompt: "Fission fuel is a … nucleus.", options: ["heavy (uranium)", "light (hydrogen)", "gaseous noble", "electron"], correctIndex: 0, explanation: "Uranium-235 is a fission fuel." },
        { prompt: "Fusion fuel is a … nucleus.", options: ["light (hydrogen)", "heavy (uranium)", "iron", "lead"], correctIndex: 0, explanation: "Hydrogen fuses in stars." },
        { prompt: "The Sun's energy comes from…", options: ["fusion", "fission", "combustion", "electrolysis"], correctIndex: 0, explanation: "Hydrogen fuses to helium in the Sun." },
        { prompt: "A nuclear reactor generates electricity using controlled…", options: ["fission", "fusion", "combustion", "corrosion"], correctIndex: 0, explanation: "Reactors use controlled fission." },
        { prompt: "In fission, the particles that continue the chain reaction are…", options: ["neutrons", "electrons", "protons", "photons"], correctIndex: 0, explanation: "Neutrons split more nuclei." },
        { prompt: "A self-sustaining sequence of fissions is a…", options: ["chain reaction", "half-life", "titration", "combustion"], correctIndex: 0, explanation: "Neutrons keep the reaction going." },
        { prompt: "Which reaction produces a chain reaction?", options: ["fission", "fusion", "neither", "both easily"], correctIndex: 0, explanation: "Fission releases neutrons that continue it." },
        { prompt: "Fusion requires extremely high…", options: ["temperatures", "pressures only", "colours", "half-lives"], correctIndex: 0, explanation: "Very high temperatures are needed." },
        { prompt: "Which splits into two smaller nuclei?", options: ["a large nucleus (fission)", "two small nuclei (fusion)", "an electron", "a photon"], correctIndex: 0, explanation: "Fission splits a large nucleus." },
        { prompt: "Uncontrolled fission is used in the…", options: ["atomic bomb", "torch battery", "car engine", "solar panel"], correctIndex: 0, explanation: "An atomic bomb is uncontrolled fission." },
        { prompt: "Fusion joins hydrogen nuclei to form…", options: ["helium", "uranium", "carbon", "lead"], correctIndex: 0, explanation: "Hydrogen fuses to helium." },
        { prompt: "Which reaction releases neutrons that cause more reactions?", options: ["fission", "fusion", "neutralisation", "precipitation"], correctIndex: 0, explanation: "Fission releases neutrons." },
        { prompt: "In a reactor, control rods … the chain reaction.", options: ["control/slow", "speed up only", "stop forever", "colour"], correctIndex: 0, explanation: "Control rods absorb neutrons to control it." },
        { prompt: "Both fission and fusion release … amounts of energy.", options: ["huge", "tiny", "no", "chemical"], correctIndex: 0, explanation: "Both release enormous nuclear energy." },
        { prompt: "Which reaction occurs in stars?", options: ["fusion", "fission", "combustion", "corrosion"], correctIndex: 0, explanation: "Stars run on fusion." },
        { prompt: "The fuel commonly used in nuclear reactors is…", options: ["uranium-235", "hydrogen", "helium", "carbon-12"], correctIndex: 0, explanation: "Uranium-235 undergoes fission." },
        { prompt: "Fusion is harder to achieve on Earth than fission because it needs…", options: ["very high temperatures", "a salt bridge", "a catalyst", "electricity"], correctIndex: 0, explanation: "Extreme temperatures are required." },
        { prompt: "Which statement is TRUE?", options: ["fission splits, fusion joins", "fission joins, fusion splits", "both split", "both join"], correctIndex: 0, explanation: "Fission splits; fusion joins." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between nuclear fission and nuclear fusion.", answerKey: "Nuclear fission is the splitting of a large, heavy nucleus (e.g. uranium-235) into two smaller nuclei, releasing neutrons and energy. Nuclear fusion is the joining of two small, light nuclei (e.g. hydrogen) to form a larger nucleus, releasing energy. Award marks for correctly describing both as splitting and joining with appropriate fuels.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "The process that powers the Sun and other stars is:", options: ["nuclear fusion", "nuclear fission", "combustion", "electrolysis"], correctIndex: 0, answerKey: "Stars are powered by fusion of hydrogen into helium.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "In nuclear fission, the chain reaction is sustained by the release of:", options: ["neutrons", "electrons", "protons", "gamma rays"], correctIndex: 0, answerKey: "Neutrons released in one fission trigger further fissions.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain what a chain reaction is and how it is controlled in a nuclear reactor.", answerKey: "A chain reaction is a self-sustaining sequence in which neutrons released by one fission cause further nuclei to split, releasing yet more neutrons, and so on. In a nuclear reactor it is controlled by inserting control rods that absorb some of the neutrons, so that the reaction proceeds steadily rather than running away, releasing energy at a controlled rate to generate electricity. Award marks for the self-sustaining neutron sequence and the role of control rods.", marks: 3 },
        { type: "ESSAY", prompt: "Compare nuclear fission and nuclear fusion in terms of the process, the fuel used, where each occurs, and whether a chain reaction is involved, and explain why fusion is difficult to achieve on Earth.", answerKey: "A full answer explains: fission splits a large heavy nucleus (uranium-235) into smaller nuclei, releasing neutrons and energy, occurs in nuclear reactors and bombs, and sustains a chain reaction via released neutrons. Fusion joins small light nuclei (hydrogen) into a larger nucleus, releasing even more energy, occurs in the Sun and stars, and does not involve a neutron chain reaction. Fusion is difficult on Earth because it requires extremely high temperatures (and pressures) to force the positively charged nuclei together, which are very hard to produce and contain. Award marks for the process, fuel, location and chain-reaction comparison, plus the reason fusion is hard to achieve.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (South Puget Sound CC, Chem 121) — 12.4 Applications of Radioactivity (https://chem.libretexts.org/Courses/South_Puget_Sound_Community_College/Chem_121%3A_Introduction_to_Chemistry/12%3A_Chapter_10_-_Nuclear_Chemistry/12.04%3A_Applications_of_Radioactivity)
      slug: "effects-and-applications-of-radioactivity",
      title: "Effects and Applications of Radioactivity",
      objective:
        "By the end of the topic, learners should be able to describe the harmful effects of radiation and its useful applications in medicine, dating, food preservation and industry. (MoE Grade 11 Period V, Nuclear Chemistry CONTENTS 6.)",
      estimatedMinutes: 110,
      notes: `## Introduction

- Radioactivity can harm living things but also has many valuable uses.
- **This topic:** the effects of radiation and its applications.

## Harmful effects

- Radiation is **ionising**: it can damage or kill living **cells** and change their DNA.
- Large doses cause **radiation sickness** and burns; smaller doses raise the risk of **cancer** and genetic damage.
- Alpha is most dangerous **inside** the body (very ionising); gamma is dangerous from **outside** (very penetrating).

## Useful applications

| Use | How radioactivity helps |
|---|---|
| Medicine (diagnosis) | tracers such as iodine-131 test organ function; scans locate disease |
| Medicine (treatment) | gamma rays (e.g. cobalt-60) destroy cancer cells (radiotherapy) |
| Radioactive dating | carbon-14 dates once-living material; other isotopes date rocks |
| Food preservation | radiation kills spoilage microbes, extending shelf life |
| Industry | tracers detect leaks in pipes; gauges measure thickness |
| Sterilisation | gamma rays sterilise medical equipment |

## Radioactive dating

- Living things absorb **carbon-14**; when they die, it decays with a known half-life (~5730 years), so the remaining amount gives the **age**.

## Common errors and misconceptions

- **All radiation use is harmful** — used carefully, radiation saves lives (diagnosis, treatment, sterilisation).
- **Radiotherapy uses alpha from outside** — external treatment uses **penetrating gamma** rays.
- **Carbon-14 dating works on rocks** — carbon-14 dates once-**living** material; rocks are dated with other isotopes.`,
      workedExample: `**Task.** Give one harmful effect and three useful applications of radioactivity, and explain how carbon-14 is used to date once-living material.

**Step 1 — A harmful effect**
- Ionising radiation damages living cells and their DNA, which can cause radiation sickness, burns or cancer.

**Step 2 — Three useful applications**
1. **Medicine** — radioactive tracers (e.g. iodine-131) diagnose disease, and gamma rays (cobalt-60) treat cancer.
2. **Food preservation** — radiation kills spoilage microbes, extending shelf life.
3. **Industry** — tracers find leaks in pipes and gauges measure material thickness.

**Step 3 — Carbon-14 dating**
- Living things take in carbon-14 while alive. When they die, no more is absorbed and the carbon-14 decays with a half-life of about 5730 years.
- By measuring how much carbon-14 remains, the **age** of the once-living material is calculated.

**Conclusion.** Radiation harms living cells but is widely useful — in medicine, food preservation and industry — and carbon-14's steady decay lets scientists date once-living material.`,
      quiz: [
        { prompt: "Radiation is harmful because it is…", options: ["ionising (damages cells)", "cold", "coloured", "heavy"], correctIndex: 0, explanation: "Ionising radiation damages cells." },
        { prompt: "Large doses of radiation can cause…", options: ["radiation sickness and cancer", "better health", "cooling", "colour change only"], correctIndex: 0, explanation: "It causes sickness, burns and cancer risk." },
        { prompt: "In medicine, iodine-131 is used as a…", options: ["tracer for the thyroid", "fuel", "sterile solid", "food additive"], correctIndex: 0, explanation: "It tests thyroid function." },
        { prompt: "Cancer can be treated with gamma rays from…", options: ["cobalt-60", "carbon-12", "sodium chloride", "oxygen"], correctIndex: 0, explanation: "Cobalt-60 gamma therapy destroys cancer cells." },
        { prompt: "Carbon-14 is used to date…", options: ["once-living material", "rocks only", "metals", "gases"], correctIndex: 0, explanation: "It dates once-living things." },
        { prompt: "The half-life of carbon-14 is about…", options: ["5730 years", "8 days", "1 hour", "100 years"], correctIndex: 0, explanation: "About 5730 years." },
        { prompt: "Radiation preserves food by killing…", options: ["spoilage microbes", "the flavour", "the colour", "the water"], correctIndex: 0, explanation: "It kills bacteria that cause spoilage." },
        { prompt: "In industry, radioactive tracers can detect…", options: ["leaks in pipes", "the weather", "prices", "colours"], correctIndex: 0, explanation: "Tracers find leaks and blockages." },
        { prompt: "Gamma rays are used to … medical equipment.", options: ["sterilise", "colour", "cool", "melt"], correctIndex: 0, explanation: "Gamma sterilises equipment." },
        { prompt: "Which radiation is most dangerous inside the body?", options: ["alpha", "gamma", "beta", "visible light"], correctIndex: 0, explanation: "Alpha is very ionising internally." },
        { prompt: "Radiotherapy for cancer uses penetrating … radiation from outside.", options: ["gamma", "alpha", "beta", "radio"], correctIndex: 0, explanation: "Gamma can reach internal tumours." },
        { prompt: "Radioactive dating relies on the isotope's known…", options: ["half-life", "colour", "mass number only", "boiling point"], correctIndex: 0, explanation: "The steady half-life gives the age." },
        { prompt: "Which is a medical use of radioactivity?", options: ["diagnosis with tracers", "electroplating", "titration", "distillation"], correctIndex: 0, explanation: "Tracers diagnose disease." },
        { prompt: "Carbon-14 dating works because a dead organism stops taking in…", options: ["carbon-14", "oxygen", "water", "salt"], correctIndex: 0, explanation: "No new C-14 after death; it then decays." },
        { prompt: "Radiation damages the cell's…", options: ["DNA", "colour", "shape only", "temperature"], correctIndex: 0, explanation: "It can alter DNA." },
        { prompt: "A thickness gauge in a factory uses radiation that is … absorbed by thicker material.", options: ["more", "less", "not", "coloured"], correctIndex: 0, explanation: "Thicker material absorbs more radiation." },
        { prompt: "Which use extends the shelf life of food?", options: ["irradiation", "electroplating", "titration", "corrosion"], correctIndex: 0, explanation: "Food irradiation preserves food." },
        { prompt: "Used carefully, radiation can … lives in medicine.", options: ["save", "always harm", "colour", "cool"], correctIndex: 0, explanation: "It has valuable medical uses." },
        { prompt: "Rocks are dated using isotopes other than…", options: ["carbon-14", "uranium", "potassium", "rubidium"], correctIndex: 0, explanation: "Carbon-14 dates once-living material, not rocks." },
        { prompt: "The main hazard of radiation to health is damage to living…", options: ["cells", "money", "buildings", "weather"], correctIndex: 0, explanation: "It harms living cells." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State one harmful effect and two useful applications of radioactivity.", answerKey: "Harmful effect: ionising radiation damages living cells and their DNA, causing radiation sickness, burns or an increased risk of cancer. Useful applications (any two): medical diagnosis using tracers (e.g. iodine-131); cancer treatment/radiotherapy with gamma rays (e.g. cobalt-60); radioactive dating (carbon-14); food preservation; industrial tracers or thickness gauges; sterilisation. Award marks for one harmful effect and two valid applications.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which isotope is used to date once-living material?", options: ["carbon-14", "cobalt-60", "iodine-131", "uranium-235"], correctIndex: 0, answerKey: "Carbon-14 is used for dating once-living material.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Radiation is used to preserve food because it:", options: ["kills spoilage microorganisms", "adds vitamins", "cools the food", "colours the food"], correctIndex: 0, answerKey: "It kills the microbes that cause spoilage, extending shelf life.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain how carbon-14 dating is used to find the age of a once-living object.", answerKey: "While alive, an organism takes in carbon-14 (along with ordinary carbon) so its carbon-14 level matches the environment. When it dies it stops absorbing carbon-14, which then decays with a known half-life of about 5730 years. By measuring how much carbon-14 remains compared with a living organism, and using the half-life, the time since death (the age) can be calculated. Award marks for the intake while alive, the decay after death, and using the half-life to find the age.", marks: 3 },
        { type: "ESSAY", prompt: "Discuss both the harmful effects and the beneficial applications of radioactivity, giving examples from medicine, dating, food preservation and industry.", answerKey: "A full answer explains that radiation is ionising and can damage or kill living cells and alter DNA, causing radiation sickness, burns and an increased risk of cancer, so it must be handled safely. It then gives beneficial applications: medicine — radioactive tracers (e.g. iodine-131) for diagnosis and gamma radiotherapy (e.g. cobalt-60) to treat cancer, plus sterilising equipment; dating — carbon-14 to date once-living material and other isotopes to date rocks; food preservation — irradiation kills spoilage microbes to extend shelf life; industry — tracers to detect pipe leaks and gauges to measure thickness. Award marks for the harmful effects and beneficial applications across at least three of the named areas with examples.", marks: 6 },
      ],
    },
  ],
};
