import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 12,
// Semester One, Period II: Direct Current Electricity. Topics follow the syllabus
// CONTENTS item by item: sources of direct current (cells), resistance and
// resistivity (Ohm's law and the factors affecting resistance), DC circuits
// (series, parallel and series-parallel), electromotive force and internal
// resistance, electrical energy and power (with cost), heating effects and
// electrolysis, and Kirchhoff's laws. Topics are sourced from OpenStax College
// Physics 2e (read via WebFetch), with cells from LibreTexts Chemistry and the
// heating/electrolysis topic from CK-12.
export const physicsG12P2: PeriodContent = {
  grade: 12,
  number: 2,
  title: "Direct Current Electricity",
  summary:
    "Period II of the MoE Grade 12 Physics syllabus. Learners identify sources of direct current (primary, secondary, fuel and solar cells), apply Ohm's law and the resistivity relation R = ρL/A, analyse series, parallel and combination circuits, use emf and internal resistance (V = emf − Ir), calculate electrical energy, power and cost, describe the heating effect of current and electrolysis, and apply Kirchhoff's junction and loop rules.",
  topics: [
    // source: LibreTexts — Chemistry (OpenStax) 17.5 Batteries and Fuel Cells (https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)/17:_Electrochemistry/17.05:_Batteries_and_Fuel_Cells)
    {
      slug: "sources-of-direct-current",
      title: "Sources of Direct Current: Cells",
      objective:
        "By the end of the topic, learners should be able to identify sources of direct current and distinguish primary cells, secondary cells, fuel cells and solar cells. (MoE Grade 12 Period II, CONTENTS 1 'Sources of direct current: primary and secondary cells; fuel and solar cells'.)",
      estimatedMinutes: 90,
      notes: `## Direct current

- **Direct current (DC)** — electric current that flows in one direction only, produced by sources such as cells, batteries and solar panels.
- A **cell** converts chemical (or light) energy into electrical energy, driving current round a circuit.
- A **battery** is two or more cells joined together.

## Primary cells

- **Primary cell** — a cell that is used once and cannot be recharged; the chemical reaction is not easily reversed.
- Examples: the dry (zinc-carbon) cell and most alkaline cells.
- Cheap and convenient but must be discarded when the chemicals are used up.

## Secondary cells

- **Secondary (rechargeable) cell** — a cell whose chemical reaction can be reversed by passing current backwards through it, so it can be recharged and reused many times.
- Examples: the lead-acid accumulator (car battery), nickel-cadmium and lithium-ion cells.
- Store more energy over their life and are used where recharging is possible.

## Fuel cells and solar cells

- **Fuel cell** — converts the chemical energy of a continuously supplied fuel (e.g. hydrogen) and an oxidant (oxygen) directly into electricity; unlike a battery the fuel is fed in from outside, so it runs as long as fuel is supplied. Its main product can be water.
- **Solar (photovoltaic) cell** — converts light energy directly into electrical energy (DC); used in calculators, satellites and solar panels. Cells are combined for larger power and often charge secondary cells for use in the dark.

| Source | Energy converted | Rechargeable? | Example |
| --- | --- | --- | --- |
| Primary cell | Chemical → electrical | No | Dry cell |
| Secondary cell | Chemical → electrical | Yes | Car (lead-acid) battery |
| Fuel cell | Chemical (fuel) → electrical | Refuelled | Hydrogen fuel cell |
| Solar cell | Light → electrical | — | Photovoltaic panel |

## Common errors

- **Calling every cell rechargeable** — only secondary cells can be recharged.
- **Confusing a fuel cell with a battery** — a fuel cell's fuel is supplied from outside, not stored inside.
- **Saying cells produce alternating current** — cells give direct current.`,
      workedExample: `**Problem (based on LibreTexts Chemistry 17.5, Batteries and Fuel Cells).** A student has a zinc-carbon dry cell, a car lead-acid battery, a hydrogen fuel cell and a solar panel. Classify each as a primary source, a secondary source, or neither, and state the energy conversion each performs.

**Step 1 — Dry cell.** The reaction cannot be reversed, so it is a **primary cell**. It converts chemical energy to electrical energy.

**Step 2 — Lead-acid car battery.** It can be recharged by reversing the reaction, so it is a **secondary cell**. It converts chemical energy to electrical energy (and back when charging).

**Step 3 — Hydrogen fuel cell.** Fuel is supplied continuously from outside, so it is **neither primary nor secondary** — it is a fuel cell converting chemical energy of the fuel to electrical energy.

**Step 4 — Solar panel.** It converts light energy directly to electrical energy — a **solar (photovoltaic) source**, not a chemical cell.

**Answer.** Dry cell = primary (chemical → electrical); car battery = secondary/rechargeable (chemical ↔ electrical); fuel cell = continuous chemical → electrical; solar panel = light → electrical.`,
      quiz: [
        { prompt: "Direct current flows:", options: ["in both directions", "in one direction only", "only in AC circuits", "never in a cell"], correctIndex: 1, explanation: "DC flows in a single direction." },
        { prompt: "A cell converts:", options: ["electrical to chemical energy only", "chemical (or light) energy into electrical energy", "heat into light", "sound into current"], correctIndex: 1, explanation: "A cell converts chemical or light energy to electrical energy." },
        { prompt: "A battery is:", options: ["a single cell", "two or more cells joined together", "a resistor", "a switch"], correctIndex: 1, explanation: "A battery is a combination of cells." },
        { prompt: "A primary cell:", options: ["can be recharged", "cannot be recharged", "runs on sunlight", "produces AC"], correctIndex: 1, explanation: "Primary cells are used once and discarded." },
        { prompt: "An example of a primary cell is the:", options: ["lead-acid battery", "dry (zinc-carbon) cell", "lithium-ion cell", "nickel-cadmium cell"], correctIndex: 1, explanation: "The dry cell is a common primary cell." },
        { prompt: "A secondary cell is one that:", options: ["cannot be recharged", "can be recharged and reused", "produces alternating current", "needs sunlight"], correctIndex: 1, explanation: "Secondary cells can be recharged by reversing the reaction." },
        { prompt: "The car battery is an example of a:", options: ["primary cell", "secondary cell", "fuel cell", "solar cell"], correctIndex: 1, explanation: "The lead-acid car battery is rechargeable — a secondary cell." },
        { prompt: "Recharging a secondary cell means:", options: ["adding new chemicals", "reversing the chemical reaction with current", "heating it", "exposing it to light"], correctIndex: 1, explanation: "Passing current backwards reverses the reaction and recharges it." },
        { prompt: "A fuel cell differs from a battery because:", options: ["it stores all its fuel inside", "its fuel is supplied continuously from outside", "it makes AC", "it uses light"], correctIndex: 1, explanation: "Fuel cells are fed fuel from outside, so they run while fuel is supplied." },
        { prompt: "A common fuel for a fuel cell is:", options: ["sand", "hydrogen", "copper", "glass"], correctIndex: 1, explanation: "Hydrogen fuel cells combine hydrogen and oxygen." },
        { prompt: "The main product of a hydrogen fuel cell can be:", options: ["carbon dioxide", "water", "smoke", "ash"], correctIndex: 1, explanation: "Hydrogen + oxygen produces water." },
        { prompt: "A solar cell converts:", options: ["chemical to electrical energy", "light to electrical energy", "heat to sound", "electrical to light"], correctIndex: 1, explanation: "A photovoltaic (solar) cell converts light directly to electricity." },
        { prompt: "Solar cells produce:", options: ["alternating current", "direct current", "no current", "only heat"], correctIndex: 1, explanation: "Solar cells produce DC." },
        { prompt: "Which is a rechargeable source?", options: ["dry cell", "lithium-ion cell", "ordinary alkaline AA", "zinc-carbon cell"], correctIndex: 1, explanation: "Lithium-ion cells are secondary (rechargeable)." },
        { prompt: "A lead-acid battery is used in cars because it:", options: ["is cheap and disposable", "can deliver large current and be recharged", "runs on light", "makes AC"], correctIndex: 1, explanation: "It supplies high current and is rechargeable by the alternator." },
        { prompt: "Which source runs only while fuel is supplied?", options: ["primary cell", "secondary cell", "fuel cell", "solar cell"], correctIndex: 2, explanation: "A fuel cell needs a continuous fuel supply." },
        { prompt: "A calculator with a small panel that works in light uses a:", options: ["fuel cell", "solar cell", "lead-acid cell", "dry cell"], correctIndex: 1, explanation: "It uses a solar (photovoltaic) cell." },
        { prompt: "Which of these cannot be recharged?", options: ["nickel-cadmium cell", "lithium-ion cell", "lead-acid cell", "zinc-carbon dry cell"], correctIndex: 3, explanation: "The zinc-carbon dry cell is a primary cell." },
        { prompt: "Solar panels often charge secondary cells so that power is available:", options: ["only in bright light", "in darkness or low light", "as AC", "without any cell"], correctIndex: 1, explanation: "Stored charge lets the system supply power when there is no light." },
        { prompt: "All the cells and panels in this topic supply:", options: ["direct current", "alternating current", "no current", "sound waves"], correctIndex: 0, explanation: "They are all sources of direct current." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Which of the following is a secondary (rechargeable) cell?", options: ["zinc-carbon dry cell", "ordinary alkaline cell", "lead-acid accumulator", "hydrogen fuel cell"], correctIndex: 2, answerKey: "The lead-acid accumulator (car battery) is a rechargeable secondary cell.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between a primary cell and a secondary cell, giving one example of each.", answerKey: "A primary cell cannot be recharged; its chemical reaction is not easily reversed and it is discarded when used up (e.g. the dry/zinc-carbon cell). A secondary cell can be recharged by passing current backwards to reverse the reaction, and reused many times (e.g. the lead-acid car battery or a lithium-ion cell).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State the energy conversion that takes place in (a) a solar cell and (b) a fuel cell, and say how a fuel cell differs from an ordinary battery.", answerKey: "(a) A solar cell converts light energy directly into electrical energy. (b) A fuel cell converts the chemical energy of a fuel (e.g. hydrogen) and an oxidant (oxygen) into electrical energy. A fuel cell differs from a battery because its fuel is supplied continuously from outside, so it keeps working as long as fuel is fed in, whereas a battery holds all its chemicals inside.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A source that converts light energy directly into direct current is a:", options: ["primary cell", "fuel cell", "solar cell", "secondary cell"], correctIndex: 2, answerKey: "A solar (photovoltaic) cell converts light to DC electricity.", marks: 2 },
        { type: "ESSAY", prompt: "Describe the four sources of direct current studied (primary cells, secondary cells, fuel cells and solar cells). For each, state the energy conversion and give one example or use.", answerKey: "Primary cell: converts chemical energy to electrical energy, cannot be recharged, discarded when exhausted (e.g. dry/zinc-carbon cell in torches and remotes). Secondary cell: converts chemical energy to electrical energy and can be recharged by reversing the reaction (e.g. lead-acid car battery, lithium-ion phone battery). Fuel cell: converts the chemical energy of a continuously supplied fuel such as hydrogen (with oxygen) into electrical energy, producing water, and runs while fuel is supplied (e.g. hydrogen fuel-cell vehicles, spacecraft). Solar (photovoltaic) cell: converts light energy directly into electrical energy (DC), used in calculators, satellites and solar panels, often charging secondary cells for use in the dark. Reward all four with correct energy conversions and valid examples.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 20.2 Ohm's Law: Resistance and Simple Circuits & 20.3 Resistance and Resistivity (https://openstax.org/books/college-physics-2e/pages/20-3-resistance-and-resistivity)
    {
      slug: "resistance-and-resistivity",
      title: "Resistance and Resistivity",
      objective:
        "By the end of the topic, learners should be able to state and apply Ohm's law (V = IR), define resistance and resistivity, and describe the factors affecting the resistance of a conductor using R = ρL/A. (MoE Grade 12 Period II, CONTENTS 2 'Resistance and Resistivity: Ohm's Law; factors affecting the resistance of the conductor'.)",
      estimatedMinutes: 110,
      notes: `## Ohm's law

- **Current (I)** — the rate of flow of charge, in amperes (A).
- **Potential difference / voltage (V)** — the energy per unit charge, in volts (V).
- **Ohm's law:** the current through a conductor is directly proportional to the voltage across it (at constant temperature): **V = I R**.
- **Resistance (R)** — the opposition to current: **R = V / I**, unit the **ohm (Ω)**, where 1 Ω = 1 V/A.
- An **ohmic conductor** has a constant resistance (independent of V and I) — a V–I graph is a straight line through the origin.

## Factors affecting resistance

The resistance of a uniform wire is **R = ρ L / A**, where:
- **L (length)** — resistance is **directly proportional** to length; a longer wire has more resistance.
- **A (cross-sectional area)** — resistance is **inversely proportional** to area; a thicker wire has less resistance.
- **ρ (resistivity)** — a property of the **material**; conductors have low ρ, insulators very high ρ.
- **Temperature** — for metals, resistance **increases with temperature** because the atoms vibrate more and collide with the moving charges.

\`\`\`svg Current-voltage graph of an ohmic conductor
<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A straight line through the origin on axes of current against voltage">
  <line x1="30" y1="120" x2="180" y2="120" stroke="#334155" stroke-width="1.5"/>
  <line x1="30" y1="120" x2="30" y2="15" stroke="#334155" stroke-width="1.5"/>
  <line x1="30" y1="120" x2="165" y2="30" stroke="#2563eb" stroke-width="2.5"/>
  <text x="150" y="138" font-size="11" fill="#334155">V</text>
  <text x="10" y="25" font-size="11" fill="#334155">I</text>
  <text x="95" y="60" font-size="9" fill="#2563eb">slope = 1/R</text>
</svg>
\`\`\`

## Resistivity

- **Resistivity (ρ)** — the resistance of a unit cube of the material; an intrinsic property independent of shape and size. Unit: ohm-metre (Ω·m).
- Rearranging: ρ = R A / L.

## Common errors

- **Writing R = I/V** — resistance is R = V/I.
- **Thinking a thicker wire has more resistance** — thicker (larger A) means less resistance.
- **Confusing resistance and resistivity** — resistivity is a material property; resistance also depends on length and area.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 20.2).** A car headlight draws a current of 2.50 A when connected to the 12.0 V car battery. (a) Find its resistance. (b) A second wire of the same material is twice as long and has half the cross-sectional area of a wire of resistance 4.00 Ω. Find its resistance.

**Part (a) — Ohm's law.**
Step 1 — R = V/I.
Step 2 — R = 12.0 V / 2.50 A = 4.80 Ω.

**Part (b) — Using R = ρL/A.**
Step 1 — Doubling the length doubles R (×2); halving the area doubles R again (×2).
Step 2 — New R = 4.00 Ω × 2 × 2 = 16.0 Ω.

**Answer.** (a) The headlight resistance is 4.80 Ω. (b) The longer, thinner wire has a resistance of 16.0 Ω.`,
      quiz: [
        { prompt: "Ohm's law states V equals:", options: ["I/R", "IR", "I + R", "R/I"], correctIndex: 1, explanation: "V = IR." },
        { prompt: "Resistance is defined as:", options: ["R = V/I", "R = I/V", "R = VI", "R = V + I"], correctIndex: 0, explanation: "R = V/I." },
        { prompt: "The unit of resistance is the:", options: ["volt", "ampere", "ohm", "watt"], correctIndex: 2, explanation: "Resistance is measured in ohms (Ω)." },
        { prompt: "One ohm equals:", options: ["1 A/V", "1 V/A", "1 V·A", "1 W/V"], correctIndex: 1, explanation: "1 Ω = 1 V/A." },
        { prompt: "A 12 V supply drives 3 A through a resistor. Its resistance is:", options: ["4 Ω", "36 Ω", "0.25 Ω", "15 Ω"], correctIndex: 0, explanation: "R = V/I = 12/3 = 4 Ω." },
        { prompt: "For an ohmic conductor, a graph of I against V is:", options: ["a curve", "a straight line through the origin", "a horizontal line", "a parabola"], correctIndex: 1, explanation: "Ohmic conductors give a straight line through the origin." },
        { prompt: "Resistance of a wire is given by:", options: ["R = ρA/L", "R = ρL/A", "R = ρLA", "R = L/(ρA)"], correctIndex: 1, explanation: "R = ρL/A." },
        { prompt: "A longer wire (same material and area) has:", options: ["less resistance", "more resistance", "the same resistance", "zero resistance"], correctIndex: 1, explanation: "Resistance is proportional to length." },
        { prompt: "A thicker wire (larger area) has:", options: ["more resistance", "less resistance", "the same resistance", "infinite resistance"], correctIndex: 1, explanation: "Resistance is inversely proportional to area." },
        { prompt: "Resistivity is a property of the:", options: ["length", "material", "area", "voltage"], correctIndex: 1, explanation: "Resistivity depends on the material, not shape or size." },
        { prompt: "The unit of resistivity is the:", options: ["ohm", "ohm-metre", "metre", "ohm per metre"], correctIndex: 1, explanation: "Resistivity ρ is in Ω·m." },
        { prompt: "For a metal wire, raising the temperature usually:", options: ["decreases resistance", "increases resistance", "has no effect", "makes it superconduct"], correctIndex: 1, explanation: "Metal resistance rises with temperature due to more atomic vibration." },
        { prompt: "Doubling the length of a wire (area fixed) makes its resistance:", options: ["half", "double", "the same", "four times"], correctIndex: 1, explanation: "R ∝ L, so doubling L doubles R." },
        { prompt: "Halving the cross-sectional area (length fixed) makes resistance:", options: ["half", "double", "unchanged", "quarter"], correctIndex: 1, explanation: "R ∝ 1/A, so halving A doubles R." },
        { prompt: "A conductor obeying Ohm's law is called:", options: ["insulating", "ohmic", "resistive-free", "superconducting"], correctIndex: 1, explanation: "It is an ohmic conductor." },
        { prompt: "If 240 V produces 2 A, the resistance is:", options: ["120 Ω", "480 Ω", "0.008 Ω", "242 Ω"], correctIndex: 0, explanation: "R = 240/2 = 120 Ω." },
        { prompt: "A material with very high resistivity is a good:", options: ["conductor", "insulator", "battery", "magnet"], correctIndex: 1, explanation: "High resistivity means an insulator." },
        { prompt: "Rearranging R = ρL/A for resistivity gives ρ =", options: ["RL/A", "RA/L", "R/(LA)", "LA/R"], correctIndex: 1, explanation: "ρ = RA/L." },
        { prompt: "If R = 5 Ω across 10 V, the current is:", options: ["2 A", "50 A", "0.5 A", "15 A"], correctIndex: 0, explanation: "I = V/R = 10/5 = 2 A." },
        { prompt: "Which change reduces a wire's resistance?", options: ["making it longer", "making it thinner", "making it shorter and thicker", "heating it"], correctIndex: 2, explanation: "Shorter and thicker (smaller L, larger A) lowers resistance." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A resistor carries 0.50 A when 6.0 V is applied. Its resistance is:", options: ["3.0 Ω", "12 Ω", "0.083 Ω", "6.5 Ω"], correctIndex: 1, answerKey: "R = V/I = 6.0/0.50 = 12 Ω.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State Ohm's law and define the ohm.", answerKey: "Ohm's law: at constant temperature the current through a conductor is directly proportional to the potential difference across it, V = IR. The ohm is the resistance of a conductor through which a current of 1 A flows when a potential difference of 1 V is applied across it (1 Ω = 1 V/A).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State the three factors (besides temperature) that determine the resistance of a wire, and say how resistance depends on each using R = ρL/A.", answerKey: "Length L (R ∝ L — longer wire has more resistance), cross-sectional area A (R ∝ 1/A — thicker wire has less resistance), and the resistivity ρ of the material (higher resistivity gives higher resistance). Combined: R = ρL/A.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A wire is replaced by one of the same material, twice as long and twice the cross-sectional area. Its resistance is:", options: ["quartered", "unchanged", "doubled", "halved"], correctIndex: 1, answerKey: "R = ρL/A: doubling L doubles R, doubling A halves R, so the resistance is unchanged.", marks: 2 },
        { type: "ESSAY", prompt: "Explain how the resistance of a metal wire depends on its length, cross-sectional area, the material, and its temperature. Use the relation R = ρL/A where appropriate.", answerKey: "Length: resistance is directly proportional to length (R ∝ L) because charges make more collisions in a longer wire. Cross-sectional area: resistance is inversely proportional to area (R ∝ 1/A) because a wider wire gives charges more paths, lowering resistance. Material: the resistivity ρ is a property of the material — good conductors (copper, aluminium) have low ρ and insulators have very high ρ; R = ρL/A combines these. Temperature: for a metal, resistance increases with temperature because the lattice atoms vibrate more and collide more often with the moving charges, impeding the current. Reward all four factors with correct directions and use of R = ρL/A.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 21.1 Resistors in Series and Parallel (https://openstax.org/books/college-physics-2e/pages/21-1-resistors-in-series-and-parallel)
    {
      slug: "dc-circuits-series-parallel",
      title: "DC Circuits: Series, Parallel and Combination",
      objective:
        "By the end of the topic, learners should be able to combine resistors in series (Rₛ = R₁ + R₂ + …) and in parallel (1/Rₚ = 1/R₁ + 1/R₂ + …), and analyse series-parallel combination circuits. (MoE Grade 12 Period II, CONTENTS 3 'DC Circuits: series; parallel; series-parallel'.)",
      estimatedMinutes: 110,
      notes: `## Series circuits

- Components in **series** are joined end to end in a single loop.
- **The same current** flows through every component.
- The voltages add: V = V₁ + V₂ + V₃.
- **Total resistance: Rₛ = R₁ + R₂ + R₃ + …** — always larger than the biggest single resistor.

## Parallel circuits

- Components in **parallel** are connected across the same two points, giving alternative paths.
- **The same voltage** (the full source voltage) is across each branch.
- The currents add: I = I₁ + I₂ + I₃.
- **Total resistance: 1/Rₚ = 1/R₁ + 1/R₂ + 1/R₃ + …** — always smaller than the smallest branch resistor.

\`\`\`svg Series and parallel resistor arrangements
<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two resistors in series and two resistors in parallel">
  <text x="20" y="18" font-size="10" fill="#334155">Series</text>
  <line x1="20" y1="40" x2="50" y2="40" stroke="#334155" stroke-width="1.5"/>
  <rect x="50" y="33" width="30" height="14" fill="#fde68a" stroke="#334155"/>
  <line x1="80" y1="40" x2="110" y2="40" stroke="#334155" stroke-width="1.5"/>
  <rect x="110" y="33" width="30" height="14" fill="#fde68a" stroke="#334155"/>
  <line x1="140" y1="40" x2="170" y2="40" stroke="#334155" stroke-width="1.5"/>
  <text x="180" y="18" font-size="10" fill="#334155">Parallel</text>
  <line x1="180" y1="70" x2="210" y2="70" stroke="#334155" stroke-width="1.5"/>
  <line x1="210" y1="55" x2="210" y2="90" stroke="#334155" stroke-width="1.5"/>
  <rect x="225" y="48" width="30" height="14" fill="#bfdbfe" stroke="#334155"/>
  <rect x="225" y="80" width="30" height="14" fill="#bfdbfe" stroke="#334155"/>
  <line x1="210" y1="55" x2="225" y2="55" stroke="#334155" stroke-width="1.5"/>
  <line x1="210" y1="87" x2="225" y2="87" stroke="#334155" stroke-width="1.5"/>
  <line x1="255" y1="55" x2="275" y2="55" stroke="#334155" stroke-width="1.5"/>
  <line x1="255" y1="87" x2="275" y2="87" stroke="#334155" stroke-width="1.5"/>
  <line x1="275" y1="55" x2="275" y2="90" stroke="#334155" stroke-width="1.5"/>
  <line x1="275" y1="70" x2="290" y2="70" stroke="#334155" stroke-width="1.5"/>
</svg>
\`\`\`

## Combination (series-parallel) circuits

- Real circuits mix the two. To simplify:
1. Reduce each parallel group to a single equivalent resistance.
2. Add these in series with the series resistors.
3. Use Ohm's law on the whole circuit to find the total current, then work back for individual currents and voltages.

## Common errors

- **Adding parallel resistors like series** — use reciprocals for parallel.
- **Thinking parallel total resistance is larger** — it is always smaller than the smallest branch.
- **Assuming equal current in parallel branches** — current splits inversely with resistance.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 21.1).** Three resistors R₁ = 1.00 Ω, R₂ = 6.00 Ω and R₃ = 13.0 Ω are connected to a 12.0 V battery. Find the total resistance and the total current when they are (a) in series and (b) in parallel.

**Part (a) — Series.**
Step 1 — Rₛ = R₁ + R₂ + R₃ = 1.00 + 6.00 + 13.0 = 20.0 Ω.
Step 2 — I = V/Rₛ = 12.0 / 20.0 = 0.600 A (the same current in each resistor).

**Part (b) — Parallel.**
Step 1 — 1/Rₚ = 1/1.00 + 1/6.00 + 1/13.0 = 1.000 + 0.1667 + 0.0769 = 1.2436 Ω⁻¹.
Step 2 — Rₚ = 1/1.2436 = 0.804 Ω (less than the smallest branch, 1.00 Ω).
Step 3 — Total current I = V/Rₚ = 12.0 / 0.804 = 14.9 A.

**Answer.** Series: Rₛ = 20.0 Ω, I = 0.600 A. Parallel: Rₚ = 0.804 Ω, I = 14.9 A. The parallel arrangement has much lower resistance and draws far more current.`,
      quiz: [
        { prompt: "In a series circuit the current is:", options: ["different in each resistor", "the same in each resistor", "zero", "always largest at the end"], correctIndex: 1, explanation: "Series components share the same current." },
        { prompt: "Total resistance in series is:", options: ["Rₛ = R₁ + R₂ + …", "1/Rₛ = 1/R₁ + …", "Rₛ = R₁R₂", "Rₛ = R₁ − R₂"], correctIndex: 0, explanation: "Series resistances add directly." },
        { prompt: "In a parallel circuit the voltage across each branch is:", options: ["different", "the same (the source voltage)", "zero", "shared equally by adding"], correctIndex: 1, explanation: "Each parallel branch has the full source voltage." },
        { prompt: "Total resistance in parallel obeys:", options: ["Rₚ = R₁ + R₂", "1/Rₚ = 1/R₁ + 1/R₂ + …", "Rₚ = R₁R₂ + R₃", "Rₚ = R₁ − R₂"], correctIndex: 1, explanation: "Reciprocals add for parallel resistors." },
        { prompt: "Two 6 Ω resistors in series give:", options: ["3 Ω", "12 Ω", "6 Ω", "36 Ω"], correctIndex: 1, explanation: "6 + 6 = 12 Ω." },
        { prompt: "Two 6 Ω resistors in parallel give:", options: ["12 Ω", "3 Ω", "6 Ω", "0.33 Ω"], correctIndex: 1, explanation: "1/Rₚ = 1/6 + 1/6 = 1/3, so Rₚ = 3 Ω." },
        { prompt: "The total resistance of a parallel combination is:", options: ["larger than any branch", "smaller than the smallest branch", "equal to the largest branch", "always 1 Ω"], correctIndex: 1, explanation: "Parallel total is less than the smallest branch." },
        { prompt: "In series, the voltages across the resistors:", options: ["are all equal", "add up to the supply voltage", "are all zero", "subtract"], correctIndex: 1, explanation: "Series voltages sum to the source voltage." },
        { prompt: "In parallel, the branch currents:", options: ["are all equal", "add up to the total current", "are all zero", "subtract"], correctIndex: 1, explanation: "Currents in parallel branches add to the total." },
        { prompt: "Three 3 Ω resistors in series give:", options: ["1 Ω", "9 Ω", "3 Ω", "27 Ω"], correctIndex: 1, explanation: "3 + 3 + 3 = 9 Ω." },
        { prompt: "Three 3 Ω resistors in parallel give:", options: ["9 Ω", "3 Ω", "1 Ω", "0.11 Ω"], correctIndex: 2, explanation: "1/Rₚ = 3 × (1/3) = 1, Rₚ = 1 Ω." },
        { prompt: "A 12 V battery across 4 Ω total draws a current of:", options: ["3 A", "48 A", "0.33 A", "16 A"], correctIndex: 0, explanation: "I = V/R = 12/4 = 3 A." },
        { prompt: "To simplify a combination circuit you first:", options: ["add everything in series", "reduce each parallel group to one resistance", "ignore parallel parts", "double all values"], correctIndex: 1, explanation: "Collapse parallel groups first, then add in series." },
        { prompt: "In a series circuit, the largest voltage drop is across the:", options: ["smallest resistor", "largest resistor", "battery only", "wire"], correctIndex: 1, explanation: "V = IR with the same I, so the largest R has the largest V." },
        { prompt: "Current splits between parallel branches in inverse proportion to:", options: ["their voltage", "their resistance", "their length", "the total current"], correctIndex: 1, explanation: "More current flows through the lower-resistance branch." },
        { prompt: "A 4 Ω and a 12 Ω resistor in parallel give:", options: ["16 Ω", "3 Ω", "8 Ω", "48 Ω"], correctIndex: 1, explanation: "1/Rₚ = 1/4 + 1/12 = 4/12 = 1/3, Rₚ = 3 Ω." },
        { prompt: "House lights are wired in parallel so that:", options: ["they share one current", "each gets full mains voltage and can switch independently", "the total resistance is high", "they must all be on together"], correctIndex: 1, explanation: "Parallel wiring gives each device full voltage and independent control." },
        { prompt: "Adding another resistor in series makes the total resistance:", options: ["increase", "decrease", "stay the same", "become zero"], correctIndex: 0, explanation: "Series resistances add, so total increases." },
        { prompt: "Adding another resistor in parallel makes the total resistance:", options: ["increase", "decrease", "stay the same", "become infinite"], correctIndex: 1, explanation: "Adding a parallel path lowers the total resistance." },
        { prompt: "Two resistors 2 Ω and 3 Ω in series carry a current of 2 A. The total voltage is:", options: ["10 V", "5 V", "1 V", "12 V"], correctIndex: 0, explanation: "Rₛ = 5 Ω, V = IR = 2 × 5 = 10 V." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A 2 Ω and a 3 Ω resistor are in series. The total resistance is:", options: ["1.2 Ω", "5 Ω", "6 Ω", "1 Ω"], correctIndex: 1, answerKey: "Series: Rₛ = 2 + 3 = 5 Ω.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State how current and voltage behave in (a) a series circuit and (b) a parallel circuit.", answerKey: "(a) Series: the current is the same through every component, and the voltages across the components add up to the supply voltage. (b) Parallel: the voltage across every branch is the same (the source voltage), and the branch currents add up to the total current.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Find the total resistance of a 6 Ω and a 3 Ω resistor connected in parallel.", answerKey: "1/Rₚ = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Rₚ = 2 Ω.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The total resistance of resistors connected in parallel is always:", options: ["greater than the largest resistor", "less than the smallest resistor", "equal to their sum", "zero"], correctIndex: 1, answerKey: "The parallel combined resistance is always less than the smallest individual resistor.", marks: 2 },
        { type: "ESSAY", prompt: "A 4 Ω and a 4 Ω resistor are connected in parallel, and this combination is joined in series with a 6 Ω resistor across a 12 V battery. Find the total resistance, the total current, and the voltage across the 6 Ω resistor.", answerKey: "Parallel pair: 1/Rₚ = 1/4 + 1/4 = 2/4 = 1/2, so Rₚ = 2 Ω. Total resistance = 2 Ω + 6 Ω = 8 Ω. Total current I = V/R = 12/8 = 1.5 A (this flows through the 6 Ω resistor since it is in series). Voltage across the 6 Ω resistor = IR = 1.5 × 6 = 9.0 V. (The remaining 3.0 V is across the parallel pair.) Reward the parallel reduction, series addition, total current and the 9.0 V drop.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 21.2 Electromotive Force: Terminal Voltage (https://openstax.org/books/college-physics-2e/pages/21-2-electromotive-force-terminal-voltage)
    {
      slug: "emf-and-internal-resistance",
      title: "Electromotive Force and Internal Resistance",
      objective:
        "By the end of the topic, learners should be able to define electromotive force, explain internal resistance, and use the terminal-voltage relation V = emf − Ir. (MoE Grade 12 Period II, CONTENTS 4 'Electromotive Force (EMF) and Internal Resistance'.)",
      estimatedMinutes: 100,
      notes: `## Electromotive force (emf)

- **Electromotive force (emf, ε)** — the energy given to each coulomb of charge by the source; equal to the terminal voltage when **no current** flows. Measured in volts.
- Despite the name, emf is **not a force**; it is a potential difference (energy per unit charge).

## Internal resistance

- **Internal resistance (r)** — the resistance of the material inside the cell itself.
- When current flows, some energy is used up inside the cell across r, so the voltage available at the terminals falls below the emf.
- Internal resistance increases as a battery ages or is heavily loaded.

## Terminal voltage

- **Terminal voltage (V)** — the potential difference actually measured across the cell's terminals when supplying current.
- **V = ε − I r**, where I is the current and r the internal resistance.
- The term **I r** is the "lost volts" — energy dissipated inside the cell.
- The full loop equation: **ε = I R + I r = I(R + r)**, so **I = ε / (R + r)**.

\`\`\`svg A cell with internal resistance driving an external resistor
<svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cell with emf and internal resistance r connected to external resistance R">
  <rect x="30" y="30" width="80" height="50" fill="none" stroke="#94a3b8" stroke-dasharray="4 3"/>
  <text x="40" y="24" font-size="9" fill="#94a3b8">cell</text>
  <line x1="55" y1="45" x2="55" y2="65" stroke="#334155" stroke-width="3"/>
  <line x1="65" y1="50" x2="65" y2="60" stroke="#334155" stroke-width="1.5"/>
  <text x="45" y="95" font-size="9" fill="#334155">ε</text>
  <rect x="80" y="48" width="20" height="12" fill="#fde68a" stroke="#334155"/>
  <text x="82" y="95" font-size="9" fill="#334155">r</text>
  <line x1="110" y1="54" x2="180" y2="54" stroke="#334155" stroke-width="1.5"/>
  <rect x="180" y="40" width="14" height="40" fill="#bfdbfe" stroke="#334155"/>
  <text x="198" y="62" font-size="9" fill="#334155">R</text>
  <line x1="187" y1="80" x2="187" y2="100" stroke="#334155" stroke-width="1.5"/>
  <line x1="55" y1="65" x2="55" y2="100" stroke="#334155" stroke-width="1.5"/>
  <line x1="55" y1="100" x2="187" y2="100" stroke="#334155" stroke-width="1.5"/>
</svg>
\`\`\`

## Common errors

- **Confusing emf with terminal voltage** — they are equal only when no current flows; under load V < ε.
- **Forgetting the lost volts Ir** — internal resistance always reduces the terminal voltage.
- **Thinking r is external** — internal resistance is inside the cell.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 21.2).** A battery of emf 12.0 V and internal resistance 0.100 Ω is connected to a 0.500 Ω load resistor. Find (a) the current, (b) the terminal voltage.

**Step 1 — Total resistance.** R + r = 0.500 + 0.100 = 0.600 Ω.

**Step 2 — Current.** I = ε / (R + r) = 12.0 / 0.600 = 20.0 A.

**Step 3 — Terminal voltage.** V = ε − Ir = 12.0 − (20.0)(0.100) = 12.0 − 2.00 = 10.0 V.

**Answer.** The current is 20.0 A and the terminal voltage is 10.0 V. The 2.00 V "lost" across the internal resistance shows how a small internal resistance noticeably lowers the terminal voltage under a heavy load.`,
      quiz: [
        { prompt: "The electromotive force of a cell is the:", options: ["force pushing the cell", "energy given to each coulomb of charge", "current in the cell", "resistance of the cell"], correctIndex: 1, explanation: "Emf is the energy per unit charge supplied by the source." },
        { prompt: "Emf is measured in:", options: ["amperes", "volts", "ohms", "watts"], correctIndex: 1, explanation: "Emf is a potential difference, measured in volts." },
        { prompt: "Despite its name, emf is:", options: ["a force", "not a force but a potential difference", "a current", "a resistance"], correctIndex: 1, explanation: "Emf is energy per unit charge, not a mechanical force." },
        { prompt: "Internal resistance is the resistance:", options: ["of the external load", "inside the cell itself", "of the connecting wires only", "of the switch"], correctIndex: 1, explanation: "Internal resistance r is inside the source." },
        { prompt: "The terminal voltage of a cell delivering current is:", options: ["V = ε + Ir", "V = ε − Ir", "V = εIr", "V = ε/Ir"], correctIndex: 1, explanation: "V = ε − Ir, the emf minus the lost volts." },
        { prompt: "The 'lost volts' inside a cell equal:", options: ["ε", "IR", "Ir", "V"], correctIndex: 2, explanation: "The lost volts are Ir, dissipated across internal resistance." },
        { prompt: "Emf equals terminal voltage when:", options: ["current is large", "no current flows", "r is large", "the cell is dead"], correctIndex: 1, explanation: "With no current, Ir = 0 so V = ε." },
        { prompt: "The current from a cell is I =", options: ["ε/(R − r)", "ε/(R + r)", "εR", "ε + r"], correctIndex: 1, explanation: "I = ε/(R + r) for a cell of internal resistance r with load R." },
        { prompt: "A 1.5 V cell with r = 0.5 Ω across a 1.0 Ω resistor gives current:", options: ["1.0 A", "1.5 A", "3.0 A", "0.5 A"], correctIndex: 0, explanation: "I = 1.5/(1.0 + 0.5) = 1.0 A." },
        { prompt: "For that cell, the terminal voltage is:", options: ["1.5 V", "1.0 V", "0.5 V", "2.0 V"], correctIndex: 1, explanation: "V = ε − Ir = 1.5 − (1.0)(0.5) = 1.0 V." },
        { prompt: "As a battery ages, its internal resistance usually:", options: ["decreases", "increases", "stays exactly the same", "becomes zero"], correctIndex: 1, explanation: "Internal resistance tends to rise as a cell ages." },
        { prompt: "Under a heavy load (large current), the terminal voltage:", options: ["rises above emf", "falls below emf", "equals emf", "becomes zero always"], correctIndex: 1, explanation: "Larger current means larger Ir, so V drops further below ε." },
        { prompt: "The full loop equation for a simple cell circuit is:", options: ["ε = IR − Ir", "ε = I(R + r)", "ε = R + r", "ε = IR × Ir"], correctIndex: 1, explanation: "ε = IR + Ir = I(R + r)." },
        { prompt: "If a cell's terminal voltage is 1.2 V while delivering 2 A and its emf is 1.5 V, then Ir =", options: ["0.3 V", "2.7 V", "1.5 V", "0.6 V"], correctIndex: 0, explanation: "Ir = ε − V = 1.5 − 1.2 = 0.3 V." },
        { prompt: "From the previous question, the internal resistance is:", options: ["0.15 Ω", "0.6 Ω", "0.3 Ω", "2.4 Ω"], correctIndex: 0, explanation: "r = Ir/I = 0.3/2 = 0.15 Ω." },
        { prompt: "A voltmeter across an open-circuit (no current) cell reads its:", options: ["terminal voltage under load", "emf", "internal resistance", "lost volts"], correctIndex: 1, explanation: "With no current the reading equals the emf." },
        { prompt: "Energy dissipated inside the cell per second is:", options: ["I²R", "I²r", "εI", "V²"], correctIndex: 1, explanation: "Power lost internally is I²r." },
        { prompt: "Doubling the load resistance (fixed ε and r) makes the current:", options: ["double", "decrease", "unchanged", "zero"], correctIndex: 1, explanation: "I = ε/(R + r) decreases as R increases." },
        { prompt: "A short circuit (R ≈ 0) gives a current of about:", options: ["zero", "ε/r", "ε only", "infinite exactly"], correctIndex: 1, explanation: "With R = 0, I = ε/r, limited by internal resistance." },
        { prompt: "Terminal voltage is measured:", options: ["inside the cell", "across the cell's terminals", "across the internal resistance only", "across the switch"], correctIndex: 1, explanation: "It is the pd across the external terminals." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A cell of emf 6.0 V and internal resistance 0.50 Ω delivers 2.0 A. Its terminal voltage is:", options: ["7.0 V", "5.0 V", "6.0 V", "3.0 V"], correctIndex: 1, answerKey: "V = ε − Ir = 6.0 − (2.0)(0.50) = 6.0 − 1.0 = 5.0 V.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define electromotive force (emf) and internal resistance.", answerKey: "The emf of a source is the energy it gives to each coulomb of charge (equal to the terminal voltage when no current flows), measured in volts. Internal resistance is the resistance of the material inside the source itself, which causes energy loss (lost volts, Ir) when current flows.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A battery of emf 9.0 V and internal resistance 1.0 Ω is connected to a 2.0 Ω resistor. Find the current and the terminal voltage.", answerKey: "I = ε/(R + r) = 9.0/(2.0 + 1.0) = 9.0/3.0 = 3.0 A. Terminal voltage V = ε − Ir = 9.0 − (3.0)(1.0) = 6.0 V (equivalently IR = 3.0 × 2.0 = 6.0 V).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The terminal voltage of a cell equals its emf when:", options: ["the current is maximum", "no current flows", "the load is short-circuited", "the internal resistance is large"], correctIndex: 1, answerKey: "With no current, the lost volts Ir = 0, so V = emf.", marks: 2 },
        { type: "ESSAY", prompt: "Explain what is meant by emf, internal resistance and terminal voltage, and derive the relation V = emf − Ir. Explain why a car's headlights may dim briefly when the starter motor is switched on.", answerKey: "Emf (ε) is the energy supplied per coulomb by the source. Internal resistance (r) is the resistance inside the cell. Terminal voltage (V) is the pd measured across the terminals while supplying current. As current I flows, energy is lost across r at a rate giving a voltage drop Ir (lost volts), so the voltage delivered to the external circuit is V = ε − Ir. When the starter motor is switched on it draws a very large current I; the lost volts Ir across the battery's internal resistance become large, so the terminal voltage V = ε − Ir falls sharply and the headlights (in parallel) briefly receive less voltage and dim. Reward the three definitions, the derivation and a correct explanation of the dimming.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 20.4 Electric Power and Energy (https://openstax.org/books/college-physics-2e/pages/20-4-electric-power-and-energy)
    {
      slug: "electrical-energy-and-power",
      title: "Electrical Energy and Power",
      objective:
        "By the end of the topic, learners should be able to calculate electrical power (P = IV = I²R = V²/R) and energy (E = Pt), use the kilowatt-hour, and work out the cost of electrical energy. (MoE Grade 12 Period II, CONTENTS 5 'Electrical Energy and Power; cost of electrical energy'.)",
      estimatedMinutes: 100,
      notes: `## Electrical power

- **Power (P)** — the rate at which electrical energy is transferred, in watts (W).
- **P = I V** (always valid).
- For a resistor, using V = IR: **P = I² R** and **P = V² / R**.
- 1 watt = 1 joule per second (1 W = 1 J/s).

## Electrical energy

- **Energy E = P t** = electrical energy transferred in time t (joules when P in W and t in s).
- Also **E = I V t = I² R t = (V²/R) t**.

## The kilowatt-hour and cost

- The **kilowatt-hour (kW·h)** is the energy used by a 1 kW appliance in 1 hour; it is the "unit" on an electricity bill.
- **1 kW·h = 3.6 ×10⁶ J** (1000 W × 3600 s).
- **Number of units = power (kW) × time (h).**
- **Cost = number of units × price per unit.**

| Quantity | Formula | Unit |
| --- | --- | --- |
| Power | P = IV = I²R = V²/R | watt (W) |
| Energy | E = Pt | joule (J) or kW·h |
| Cost | units × price per unit | currency |

## Common errors

- **Mixing watts and kilowatts** — convert to kW before using kW·h.
- **Using seconds with kW·h** — for kW·h use hours; for joules use seconds.
- **Forgetting P = V²/R for fixed voltage** — a smaller resistance draws more power at fixed voltage.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 20.4).** An electric heater is rated 2.0 kW and runs for 3.0 hours each day. Electricity costs $0.12 per kW·h. (a) How much energy (in kW·h) does it use per day? (b) What is the daily cost? (c) Express the daily energy in joules.

**Step 1 — Energy per day in kW·h.** Units = power (kW) × time (h) = 2.0 kW × 3.0 h = 6.0 kW·h.

**Step 2 — Daily cost.** Cost = units × price = 6.0 kW·h × $0.12 = $0.72.

**Step 3 — Convert to joules.** E = 6.0 kW·h × 3.6 ×10⁶ J/kW·h = 2.16 ×10⁷ J.

**Answer.** The heater uses 6.0 kW·h per day, costing $0.72, which is 2.16 ×10⁷ J of energy.`,
      quiz: [
        { prompt: "Electrical power is the rate of:", options: ["charge flow", "energy transfer", "resistance change", "voltage rise"], correctIndex: 1, explanation: "Power is energy transferred per unit time." },
        { prompt: "The basic power formula is:", options: ["P = I/V", "P = IV", "P = V/I", "P = I + V"], correctIndex: 1, explanation: "P = IV." },
        { prompt: "For a resistor, power also equals:", options: ["I²R", "IR²", "I/R", "R/I"], correctIndex: 0, explanation: "P = I²R (and V²/R)." },
        { prompt: "The unit of power is the:", options: ["joule", "watt", "volt", "ohm"], correctIndex: 1, explanation: "Power is measured in watts (W)." },
        { prompt: "One watt equals:", options: ["1 J", "1 J/s", "1 J·s", "1 V/A"], correctIndex: 1, explanation: "1 W = 1 J/s." },
        { prompt: "Electrical energy is E =", options: ["P/t", "Pt", "P + t", "P − t"], correctIndex: 1, explanation: "E = Pt." },
        { prompt: "A 100 W lamp runs for 10 s. Energy used is:", options: ["10 J", "1000 J", "110 J", "0.1 J"], correctIndex: 1, explanation: "E = Pt = 100 × 10 = 1000 J." },
        { prompt: "The kilowatt-hour is a unit of:", options: ["power", "energy", "current", "voltage"], correctIndex: 1, explanation: "kW·h measures energy." },
        { prompt: "1 kW·h equals:", options: ["3.6 ×10³ J", "3.6 ×10⁶ J", "1000 J", "3600 W"], correctIndex: 1, explanation: "1 kW·h = 1000 W × 3600 s = 3.6 ×10⁶ J." },
        { prompt: "A 3 kW heater used for 2 h uses:", options: ["1.5 kW·h", "6 kW·h", "5 kW·h", "0.67 kW·h"], correctIndex: 1, explanation: "Units = 3 × 2 = 6 kW·h." },
        { prompt: "If a unit costs $0.10, the cost of 6 kW·h is:", options: ["$0.06", "$0.60", "$6.00", "$60"], correctIndex: 1, explanation: "Cost = 6 × $0.10 = $0.60." },
        { prompt: "For a fixed voltage, P = V²/R means smaller resistance gives:", options: ["less power", "more power", "the same power", "no power"], correctIndex: 1, explanation: "Smaller R gives larger P at fixed V." },
        { prompt: "A 12 V, 2 A device has a power of:", options: ["6 W", "24 W", "14 W", "10 W"], correctIndex: 1, explanation: "P = IV = 12 × 2 = 24 W." },
        { prompt: "A 4 Ω resistor carries 3 A. Its power is:", options: ["12 W", "36 W", "0.44 W", "7 W"], correctIndex: 1, explanation: "P = I²R = 9 × 4 = 36 W." },
        { prompt: "Number of units used equals:", options: ["power (kW) × time (h)", "power × time in seconds", "voltage × current", "energy in joules"], correctIndex: 0, explanation: "Units (kW·h) = kW × hours." },
        { prompt: "A 60 W bulb on for 5 hours uses:", options: ["0.3 kW·h", "300 kW·h", "3 kW·h", "12 kW·h"], correctIndex: 0, explanation: "0.060 kW × 5 h = 0.3 kW·h." },
        { prompt: "Energy in joules for a resistor is also:", options: ["I²Rt", "I²R/t", "IRt²", "I/Rt"], correctIndex: 0, explanation: "E = Pt = I²Rt." },
        { prompt: "A 240 V appliance of resistance 60 Ω has a power of:", options: ["4 W", "960 W", "14400 W", "0.25 W"], correctIndex: 1, explanation: "P = V²/R = 240²/60 = 57600/60 = 960 W." },
        { prompt: "To compare appliances fairly you should use:", options: ["their colour", "their power rating and running time", "their weight", "their price only"], correctIndex: 1, explanation: "Energy and cost depend on power rating × time." },
        { prompt: "Converting 2 kW·h to joules gives:", options: ["7.2 ×10⁶ J", "2000 J", "3.6 ×10⁶ J", "7.2 ×10³ J"], correctIndex: 0, explanation: "2 × 3.6 ×10⁶ = 7.2 ×10⁶ J." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A device draws 5 A at 230 V. Its power is:", options: ["46 W", "235 W", "1150 W", "1.15 W"], correctIndex: 2, answerKey: "P = IV = 5 × 230 = 1150 W.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Write down three equivalent formulas for the power dissipated in a resistor.", answerKey: "P = IV, P = I²R, and P = V²/R (all equivalent using V = IR).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "An electric iron rated 1.5 kW is used for 4 hours. If 1 unit of electricity costs $0.15, find the energy used in kW·h and the cost.", answerKey: "Energy = power × time = 1.5 kW × 4 h = 6.0 kW·h. Cost = 6.0 × $0.15 = $0.90.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "One kilowatt-hour is equal to:", options: ["1000 J", "3600 J", "3.6 ×10⁶ J", "60 J"], correctIndex: 2, answerKey: "1 kW·h = 1000 W × 3600 s = 3.6 ×10⁶ J.", marks: 2 },
        { type: "ESSAY", prompt: "Explain the difference between electrical power and electrical energy, give the formulas for each, and show how the cost of running a 2 kW appliance for 5 hours at $0.12 per unit is calculated.", answerKey: "Power is the rate at which electrical energy is transferred, measured in watts: P = IV = I²R = V²/R. Energy is the total electrical energy transferred over a time t: E = Pt, measured in joules or, for billing, in kilowatt-hours (1 kW·h = 3.6 ×10⁶ J). To find the cost: number of units = power in kW × time in hours = 2 kW × 5 h = 10 kW·h; cost = units × price per unit = 10 × $0.12 = $1.20. Reward the power/energy distinction, correct formulas, and the correct cost calculation ($1.20).", marks: 8 },
      ],
    },
    // source: CK-12 — What is meant by the heating effect of electric current? (https://www.ck12.org/flexi/physical-science/specific-heat/what-is-meant-by-the-heating-effect-of-electric-current/) + CK-12 — Faraday's Second Law of Electrolysis (https://www.ck12.org/flexi/chemistry/Electrolytic-Cells/what-is-faraday's-second-law-of-electrolysis/)
    {
      slug: "heating-effects-and-electrolysis",
      title: "Heating Effects and Electrolysis",
      objective:
        "By the end of the topic, learners should be able to describe the heating effect of an electric current (Joule heating, H = I²Rt), give its uses, and state the laws of electrolysis with the relation m = Zlt. (MoE Grade 12 Period II, CONTENTS 6 'Heating Effects and Electrolysis'.)",
      estimatedMinutes: 100,
      notes: `## Heating effect of a current

- When current flows through a resistor, electrical energy is converted to **heat** — the **heating (Joule) effect**.
- **Joule's law of heating:** the heat produced is proportional to the square of the current, the resistance and the time: **H = I² R t** (joules).
- Equivalently H = V I t = (V²/R) t.
- Heat is produced because moving charges collide with the atoms of the conductor, giving them energy.

## Uses and drawbacks

- **Useful:** electric heaters, kettles, electric irons, filament lamps, fuses (a fuse melts when too much current heats it, breaking the circuit).
- **Harmful:** overheating of wires and appliances, energy wasted as heat in power lines and motors.

## Electrolysis

- **Electrolysis** — the chemical decomposition of a compound (the **electrolyte**) when a direct current passes through it.
- **Electrodes:** the **anode** is the positive electrode, the **cathode** the negative electrode; ions move to the oppositely charged electrode.
- **Faraday's first law:** the mass m of a substance deposited (or liberated) is proportional to the charge passed: **m = Z I t**, where Z is the electrochemical equivalent, I the current and t the time (Q = It).
- **Faraday's second law:** for the same charge, the masses of different substances deposited are proportional to their chemical equivalents.

## Applications of electrolysis

- **Electroplating** (coating metals for protection or appearance), **purification of metals** (e.g. copper), and **extraction of reactive metals** (e.g. aluminium).

## Common errors

- **Writing H = IRt instead of I²Rt** — the heat depends on the square of the current.
- **Swapping anode and cathode** — anode is positive, cathode is negative.
- **Forgetting Q = It** in the electrolysis relation m = ZIt.`,
      workedExample: `**Problem (based on CK-12, heating effect of current and Faraday's laws).** (a) A heating coil of resistance 20 Ω carries a current of 5.0 A for 2.0 minutes. Find the heat produced. (b) A current of 2.0 A flows through a copper electrolyte for 30 minutes. If the electrochemical equivalent of copper is Z = 3.3 ×10⁻⁴ g/C, find the mass of copper deposited.

**Part (a) — Joule heating.**
Step 1 — H = I²Rt with t in seconds: t = 2.0 min = 120 s.
Step 2 — H = (5.0)² × 20 × 120 = 25 × 20 × 120 = 60 000 J = 6.0 ×10⁴ J.

**Part (b) — Faraday's first law.**
Step 1 — Charge Q = It = 2.0 A × (30 × 60 s) = 2.0 × 1800 = 3600 C.
Step 2 — Mass m = ZIt = ZQ = 3.3 ×10⁻⁴ g/C × 3600 C = 1.19 g.

**Answer.** (a) The coil produces 6.0 ×10⁴ J of heat. (b) About 1.2 g of copper is deposited.`,
      quiz: [
        { prompt: "The heating effect of a current converts electrical energy into:", options: ["light only", "heat", "sound", "chemical energy"], correctIndex: 1, explanation: "Current through a resistor produces heat (Joule heating)." },
        { prompt: "Joule's law of heating is:", options: ["H = IRt", "H = I²Rt", "H = I²R/t", "H = IR²t"], correctIndex: 1, explanation: "H = I²Rt." },
        { prompt: "The heat produced depends on the current as:", options: ["I", "I²", "1/I", "√I"], correctIndex: 1, explanation: "Heat is proportional to the square of the current." },
        { prompt: "Heat is produced in a wire because charges:", options: ["escape the wire", "collide with the atoms of the conductor", "slow the voltage", "create light only"], correctIndex: 1, explanation: "Collisions transfer energy to the lattice as heat." },
        { prompt: "A device that uses the heating effect is the:", options: ["voltmeter", "electric kettle", "transformer", "capacitor"], correctIndex: 1, explanation: "Kettles, irons and heaters use Joule heating." },
        { prompt: "A fuse protects a circuit by:", options: ["storing charge", "melting when the current gets too high", "increasing voltage", "cooling the wire"], correctIndex: 1, explanation: "Excess current heats and melts the fuse, breaking the circuit." },
        { prompt: "Electrolysis is the:", options: ["heating of a wire", "chemical decomposition of a compound by current", "flow of AC", "storage of charge"], correctIndex: 1, explanation: "Electrolysis decomposes an electrolyte using DC." },
        { prompt: "The substance decomposed in electrolysis is the:", options: ["electrode", "electrolyte", "resistor", "fuse"], correctIndex: 1, explanation: "The electrolyte is decomposed." },
        { prompt: "The positive electrode is the:", options: ["cathode", "anode", "electrolyte", "ion"], correctIndex: 1, explanation: "The anode is positive; the cathode is negative." },
        { prompt: "Faraday's first law: mass deposited is proportional to the:", options: ["voltage", "charge passed", "resistance", "temperature"], correctIndex: 1, explanation: "m ∝ Q = It." },
        { prompt: "The relation for mass deposited is:", options: ["m = ZIt", "m = Z/It", "m = ZI/t", "m = It/Z"], correctIndex: 0, explanation: "m = ZIt, where Z is the electrochemical equivalent." },
        { prompt: "The charge passed in a time t is Q =", options: ["I/t", "It", "I + t", "I²t"], correctIndex: 1, explanation: "Q = It." },
        { prompt: "A coil of 10 Ω carries 2 A for 5 s. Heat produced is:", options: ["100 J", "200 J", "40 J", "50 J"], correctIndex: 1, explanation: "H = I²Rt = 4 × 10 × 5 = 200 J." },
        { prompt: "Electroplating uses electrolysis to:", options: ["heat metals", "coat one metal onto another", "melt fuses", "generate AC"], correctIndex: 1, explanation: "Electroplating deposits a metal coating on an object." },
        { prompt: "Faraday's second law compares masses of different substances deposited by the:", options: ["same voltage", "same charge", "same resistance", "same electrode"], correctIndex: 1, explanation: "For the same charge, masses are proportional to chemical equivalents." },
        { prompt: "In electrolysis, positive ions move to the:", options: ["anode", "cathode", "electrolyte", "fuse"], correctIndex: 1, explanation: "Positive ions (cations) move to the negative cathode." },
        { prompt: "Aluminium is extracted industrially by:", options: ["heating in air", "electrolysis", "distillation", "filtration"], correctIndex: 1, explanation: "Reactive metals like aluminium are obtained by electrolysis." },
        { prompt: "Doubling the current (same R and t) changes the heat produced by a factor of:", options: ["2", "4", "1/2", "1/4"], correctIndex: 1, explanation: "H ∝ I², so doubling I quadruples the heat." },
        { prompt: "A harmful heating effect is:", options: ["cooking food in an oven", "overheating of power cables", "boiling a kettle", "toasting bread"], correctIndex: 1, explanation: "Unwanted heating wastes energy and can be dangerous." },
        { prompt: "If 1930 C is passed and Z = 3.3 ×10⁻⁴ g/C, the mass deposited is about:", options: ["0.64 g", "6.4 g", "0.064 g", "64 g"], correctIndex: 0, explanation: "m = ZQ = 3.3 ×10⁻⁴ × 1930 = 0.64 g." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A resistor of 5 Ω carries 4 A for 10 s. The heat produced is:", options: ["200 J", "800 J", "2000 J", "50 J"], correctIndex: 1, answerKey: "H = I²Rt = 16 × 5 × 10 = 800 J.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State Joule's law of heating and give two useful applications of the heating effect of a current.", answerKey: "Joule's law: the heat produced in a conductor is H = I²Rt — proportional to the square of the current, the resistance and the time. Useful applications (any two): electric heaters, kettles, electric irons, filament lamps, toasters, and fuses (which melt to break a circuit when current is too high).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State Faraday's first law of electrolysis and write the formula relating the mass deposited to the current and time.", answerKey: "Faraday's first law: the mass of a substance liberated or deposited at an electrode is directly proportional to the quantity of electric charge passed through the electrolyte. Formula: m = ZIt (= ZQ), where Z is the electrochemical equivalent, I the current, t the time and Q = It the charge.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "In electrolysis, the positive electrode is called the:", options: ["cathode", "anode", "electrolyte", "ion"], correctIndex: 1, answerKey: "The positive electrode is the anode; the negative electrode is the cathode.", marks: 2 },
        { type: "ESSAY", prompt: "Explain the heating effect of an electric current and the process of electrolysis. For each, give the governing relation and two practical applications.", answerKey: "Heating effect: when current passes through a resistor, moving charges collide with the atoms of the conductor and transfer energy, producing heat (Joule heating). The heat is H = I²Rt (= VIt). Applications: electric heaters/kettles/irons that deliberately produce heat, filament lamps, and fuses that melt to protect circuits. Electrolysis: the decomposition of an electrolyte when a direct current passes through it; ions move to the electrodes (positive anode, negative cathode) where they are discharged. Faraday's first law gives the mass deposited m = ZIt, proportional to the charge Q = It. Applications: electroplating (coating metals), purification/refining of metals such as copper, and extraction of reactive metals such as aluminium. Reward both effects with correct relations (I²Rt and m = ZIt) and two applications each.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 21.3 Kirchhoff's Rules (https://openstax.org/books/college-physics-2e/pages/21-3-kirchhoffs-rules)
    {
      slug: "kirchhoffs-laws",
      title: "Kirchhoff's Laws",
      objective:
        "By the end of the topic, learners should be able to state and apply Kirchhoff's junction rule (conservation of charge) and loop rule (conservation of energy) to analyse circuits. (MoE Grade 12 Period II, CONTENTS 7 'Kirchhoff's Law of electric energy'.)",
      estimatedMinutes: 100,
      notes: `## Kirchhoff's junction (current) rule

- **Junction rule:** the total current entering a junction equals the total current leaving it: **ΣI(in) = ΣI(out)**.
- This is a statement of the **conservation of charge** — charge does not build up at a point.
- Example: if 3 A and 2 A enter a junction, 5 A must leave it.

## Kirchhoff's loop (voltage) rule

- **Loop rule:** around any closed loop the algebraic sum of the changes in potential is zero: **ΣV = 0**.
- This is a statement of the **conservation of energy** — the energy given to charges by sources equals the energy they lose in the resistors around the loop.
- Sign convention: a rise in potential (through a source from − to +) is positive; a drop (across a resistor in the direction of current) is negative.

\`\`\`svg A junction obeying Kirchhoff's current rule
<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Currents entering and leaving a junction">
  <circle cx="100" cy="60" r="4" fill="#334155"/>
  <line x1="30" y1="60" x2="96" y2="60" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="96,60 84,55 84,65" fill="#2563eb"/>
  <text x="45" y="52" font-size="10" fill="#2563eb">I₁ = 3 A</text>
  <line x1="100" y1="60" x2="160" y2="25" stroke="#16a34a" stroke-width="2.5"/>
  <polygon points="160,25 148,28 153,36" fill="#16a34a"/>
  <text x="150" y="20" font-size="10" fill="#16a34a">I₂ = 2 A</text>
  <line x1="100" y1="60" x2="160" y2="100" stroke="#dc2626" stroke-width="2.5"/>
  <polygon points="160,100 148,92 153,100" fill="#dc2626"/>
  <text x="150" y="115" font-size="10" fill="#dc2626">I₃ = 1 A</text>
</svg>
\`\`\`

## Using the rules

1. Label the currents in each branch (guess directions).
2. Apply the junction rule at junctions to relate currents.
3. Apply the loop rule around loops to get equations in the unknowns.
4. Solve the simultaneous equations. A negative answer means the real current is opposite to the guessed direction.

## Common errors

- **Ignoring signs in the loop rule** — track rises (+) and drops (−) consistently.
- **Applying the junction rule to a loop** — junction rule is for junctions, loop rule for closed loops.
- **Panicking at a negative current** — it just means the assumed direction was reversed.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 21.3).** At a junction, currents I₁ = 4.0 A and I₂ = 3.0 A flow in, and currents I₃ and I₄ = 2.0 A flow out. (a) Use the junction rule to find I₃. (b) A single loop has a 6.0 V battery driving a current through a 2.0 Ω and a 1.0 Ω resistor in series. Use the loop rule to find the current.

**Part (a) — Junction rule.**
Step 1 — ΣI(in) = ΣI(out): I₁ + I₂ = I₃ + I₄.
Step 2 — 4.0 + 3.0 = I₃ + 2.0, so I₃ = 7.0 − 2.0 = 5.0 A.

**Part (b) — Loop rule.**
Step 1 — Around the loop: emf − IR₁ − IR₂ = 0, so 6.0 − I(2.0) − I(1.0) = 0.
Step 2 — 6.0 = I(3.0), so I = 6.0 / 3.0 = 2.0 A.

**Answer.** (a) I₃ = 5.0 A leaves the junction. (b) The loop current is 2.0 A.`,
      quiz: [
        { prompt: "Kirchhoff's junction rule is based on conservation of:", options: ["energy", "charge", "momentum", "mass"], correctIndex: 1, explanation: "The junction rule expresses conservation of charge." },
        { prompt: "Kirchhoff's loop rule is based on conservation of:", options: ["charge", "energy", "current", "resistance"], correctIndex: 1, explanation: "The loop rule expresses conservation of energy." },
        { prompt: "The junction rule states that current in equals:", options: ["current out", "voltage out", "zero", "the resistance"], correctIndex: 0, explanation: "ΣI(in) = ΣI(out) at a junction." },
        { prompt: "The loop rule states that around a closed loop ΣV =", options: ["maximum", "zero", "the emf", "the current"], correctIndex: 1, explanation: "The algebraic sum of potential changes round a loop is zero." },
        { prompt: "If 4 A and 1 A enter a junction, the current leaving is:", options: ["3 A", "5 A", "4 A", "1 A"], correctIndex: 1, explanation: "4 + 1 = 5 A must leave." },
        { prompt: "A negative current from the equations means:", options: ["an error", "the real direction is opposite to that assumed", "the current is zero", "the resistor is broken"], correctIndex: 1, explanation: "The magnitude is right but the direction was guessed wrong." },
        { prompt: "The junction rule applies at:", options: ["a closed loop", "a point where wires meet", "a battery only", "a resistor only"], correctIndex: 1, explanation: "It applies at junctions (nodes) where branches meet." },
        { prompt: "The loop rule applies around:", options: ["a single resistor", "any closed loop", "a junction", "an open wire"], correctIndex: 1, explanation: "The loop rule is used around closed loops." },
        { prompt: "In the loop rule, a resistor in the current's direction is a:", options: ["potential rise", "potential drop", "junction", "source"], correctIndex: 1, explanation: "Crossing a resistor with the current is a drop (−IR)." },
        { prompt: "A 12 V source drives current through 4 Ω and 2 Ω in series. By the loop rule the current is:", options: ["2 A", "6 A", "0.5 A", "72 A"], correctIndex: 0, explanation: "12 = I(4 + 2), I = 2 A." },
        { prompt: "Kirchhoff's rules are most useful for circuits that:", options: ["have a single resistor", "cannot be reduced to simple series/parallel", "have no battery", "are open"], correctIndex: 1, explanation: "They handle complex multi-loop circuits." },
        { prompt: "Charge does not accumulate at a junction because of:", options: ["Ohm's law", "conservation of charge", "the loop rule", "resistivity"], correctIndex: 1, explanation: "Conservation of charge underlies the junction rule." },
        { prompt: "Going through a battery from − to + is a potential:", options: ["drop", "rise", "zero change", "short circuit"], correctIndex: 1, explanation: "From − to + inside the source is a rise (+emf)." },
        { prompt: "If three currents 2 A, 3 A leave and 1 A enters plus an unknown enters, the unknown entering current is:", options: ["4 A", "6 A", "2 A", "0 A"], correctIndex: 0, explanation: "In = out: 1 + x = 5, x = 4 A." },
        { prompt: "To solve a two-loop circuit you typically get:", options: ["one equation", "a set of simultaneous equations", "no equations", "only Ohm's law"], correctIndex: 1, explanation: "Junction and loop rules give simultaneous equations." },
        { prompt: "The first step in applying Kirchhoff's rules is to:", options: ["measure the heat", "label and assume current directions", "remove the battery", "double the voltage"], correctIndex: 1, explanation: "Assign and label branch currents first." },
        { prompt: "The loop rule reflects that energy given by sources equals energy:", options: ["stored in charge", "lost in resistors round the loop", "created", "destroyed"], correctIndex: 1, explanation: "Energy supplied equals energy dissipated around the loop." },
        { prompt: "At a junction with 6 A in and 6 A out, the rule is:", options: ["violated", "satisfied", "irrelevant", "only for AC"], correctIndex: 1, explanation: "In equals out, so the junction rule is satisfied." },
        { prompt: "Kirchhoff's rules apply to:", options: ["only series circuits", "only parallel circuits", "both, and complex networks", "only AC circuits"], correctIndex: 2, explanation: "They apply generally to DC networks." },
        { prompt: "The number of independent loop equations needed equals the number of:", options: ["batteries", "independent loops", "junctions", "resistors squared"], correctIndex: 1, explanation: "One loop equation per independent loop is used." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "At a junction, 5 A and 2 A flow in and 3 A flows out on one branch. The current in the remaining branch is:", options: ["2 A out", "4 A out", "7 A in", "10 A out"], correctIndex: 1, answerKey: "In = out: 5 + 2 = 3 + I, so I = 4 A leaving.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State Kirchhoff's two rules and the conservation law each is based on.", answerKey: "Junction (current) rule: the sum of currents entering a junction equals the sum leaving it (ΣI in = ΣI out) — based on conservation of charge. Loop (voltage) rule: the algebraic sum of the changes in potential around any closed loop is zero (ΣV = 0) — based on conservation of energy.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A single loop contains a 9.0 V battery and two resistors of 3.0 Ω and 6.0 Ω in series. Use the loop rule to find the current.", answerKey: "Loop rule: 9.0 − I(3.0) − I(6.0) = 0, so 9.0 = I(9.0) and I = 1.0 A.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "When solving with Kirchhoff's rules, a current that comes out negative means:", options: ["the calculation is wrong", "the true direction is opposite to the one assumed", "the current is zero", "the battery is flat"], correctIndex: 1, answerKey: "A negative value means the assumed direction was reversed; the magnitude is correct.", marks: 2 },
        { type: "ESSAY", prompt: "Explain Kirchhoff's junction and loop rules, state the physical conservation law behind each, and describe the steps you would follow to analyse a two-loop circuit using them.", answerKey: "Junction rule: at any junction the total current entering equals the total current leaving (ΣI in = ΣI out); this follows from conservation of charge, since charge cannot accumulate at a point. Loop rule: around any closed loop the algebraic sum of potential changes is zero (ΣV = 0); this follows from conservation of energy, since the energy sources give to charges equals the energy dissipated in the resistors round the loop. Steps: (1) label each branch current and assume a direction; (2) apply the junction rule at junctions to relate the currents; (3) apply the loop rule around each independent loop, tracking potential rises (+, through a source − to +) and drops (−IR across resistors); (4) solve the resulting simultaneous equations for the unknown currents, interpreting any negative result as a current flowing opposite to the assumed direction. Reward both rules, both conservation laws and a correct procedure.", marks: 8 },
      ],
    },
  ],
};
