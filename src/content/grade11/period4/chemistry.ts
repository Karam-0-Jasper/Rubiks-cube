import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 11,
// Semester Two, Period IV: Electrochemistry. The CONTENTS list is expanded to
// one topic per top-level item: 1. Review of redox reactions / balancing redox
// equations; 2. Electrochemical cells - standard electrode potential; 3. Cell
// diagrams (emf of cells); 4. Principles of electrolysis; 5. Factors influencing
// discharge of species (incl. Faraday's laws); 6. Batteries; 7. Corrosion of
// metals; 8. Practical applications of electrolysis.
export const chemistryG11P4: PeriodContent = {
  grade: 11,
  number: 4,
  title: "Electrochemistry",
  summary:
    "Period IV of the MoE Grade 11 Chemistry syllabus. Learners review and balance redox reactions using half-equations, build electrochemical (galvanic) cells and use standard electrode potentials, write cell diagrams and calculate cell emf, compare electrolytic cells with galvanic cells, apply the factors that control the discharge of ions and Faraday's laws of electrolysis, describe primary and secondary batteries and fuel cells, explain the corrosion of metals and its prevention, and outline practical applications of electrolysis such as electroplating and electrorefining.",
  topics: [
    {
      // source: LibreTexts (Introductory Chemistry CK-12) — 22.10 Balancing Redox Reactions: Half-Reaction Method (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(CK-12)/22%3A_Oxidation-Reduction_Reactions/22.10%3A_Balancing_Redox_Reactions-_Half-Reaction_Method)
      slug: "balancing-redox-reactions",
      title: "Review of Redox Reactions and Balancing Redox Equations",
      objective:
        "By the end of the topic, learners should be able to define oxidation and reduction, identify oxidising and reducing agents, and balance redox equations by the half-reaction method. (MoE Grade 11 Period IV, CONTENTS 1.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- Electrochemistry is built on **redox reactions** — reactions in which electrons are transferred.
- **This topic:** the meaning of oxidation and reduction and how to balance redox equations.

## Oxidation and reduction

- **Oxidation** — **loss** of electrons (oxidation number increases). "OIL": Oxidation Is Loss.
- **Reduction** — **gain** of electrons (oxidation number decreases). "RIG": Reduction Is Gain.
- Oxidation and reduction always happen together.

## Oxidising and reducing agents

- **Oxidising agent** — the species that **causes oxidation** by accepting electrons; it is itself **reduced**.
- **Reducing agent** — the species that **causes reduction** by donating electrons; it is itself **oxidised**.

## Half-equations

- A **half-equation** shows either the oxidation or the reduction alone, with the electrons.
- Example: Zn → Zn²⁺ + 2e⁻ (oxidation); Cu²⁺ + 2e⁻ → Cu (reduction).

## The half-reaction method

1. Split the reaction into an **oxidation** half and a **reduction** half.
2. Balance the **atoms** in each half (in acid, balance O with H₂O and H with H⁺).
3. Balance the **charge** by adding electrons.
4. Multiply the halves so the **electrons cancel**.
5. Add the halves together and cancel anything common.

## Common errors and misconceptions

- **Swapping oxidation and reduction** — remember OIL RIG: oxidation is loss, reduction is gain.
- **Confusing the agents** — the oxidising agent is itself reduced; the reducing agent is itself oxidised.
- **Not balancing charge** — add electrons so that charge balances in each half.`,
      workedExample: `**Task.** Balance the reaction between zinc metal and copper(II) ions: Zn + Cu²⁺ → Zn²⁺ + Cu, using half-equations, and identify the oxidising and reducing agents.

**Step 1 — Write the two half-equations**
- Oxidation: Zn → Zn²⁺ + 2e⁻ (zinc loses electrons).
- Reduction: Cu²⁺ + 2e⁻ → Cu (copper ions gain electrons).

**Step 2 — Check the electrons balance**
- Each half involves 2 electrons, so no multiplication is needed.

**Step 3 — Add the halves and cancel electrons**
- Zn + Cu²⁺ + 2e⁻ → Zn²⁺ + 2e⁻ + Cu.
- Cancelling the 2e⁻: **Zn + Cu²⁺ → Zn²⁺ + Cu**.

**Step 4 — Identify the agents**
- Zn is **oxidised** (loses electrons) → Zn is the **reducing agent**.
- Cu²⁺ is **reduced** (gains electrons) → Cu²⁺ is the **oxidising agent**.

**Conclusion.** The balanced equation is Zn + Cu²⁺ → Zn²⁺ + Cu; zinc is the reducing agent and copper(II) ion is the oxidising agent.`,
      quiz: [
        { prompt: "Oxidation is the … of electrons.", options: ["loss", "gain", "sharing", "removal of protons"], correctIndex: 0, explanation: "Oxidation Is Loss (OIL)." },
        { prompt: "Reduction is the … of electrons.", options: ["gain", "loss", "sharing", "gain of protons"], correctIndex: 0, explanation: "Reduction Is Gain (RIG)." },
        { prompt: "During oxidation, the oxidation number…", options: ["increases", "decreases", "stays the same", "becomes zero"], correctIndex: 0, explanation: "Losing electrons raises the oxidation number." },
        { prompt: "An oxidising agent is itself…", options: ["reduced", "oxidised", "unchanged", "evaporated"], correctIndex: 0, explanation: "It gains electrons, so it is reduced." },
        { prompt: "A reducing agent is itself…", options: ["oxidised", "reduced", "neutral", "a catalyst"], correctIndex: 0, explanation: "It donates electrons, so it is oxidised." },
        { prompt: "In Zn → Zn²⁺ + 2e⁻, zinc is…", options: ["oxidised", "reduced", "a spectator", "a catalyst"], correctIndex: 0, explanation: "Zinc loses electrons." },
        { prompt: "In Cu²⁺ + 2e⁻ → Cu, copper ions are…", options: ["reduced", "oxidised", "spectators", "unchanged"], correctIndex: 0, explanation: "They gain electrons." },
        { prompt: "A half-equation shows electrons and either oxidation or…", options: ["reduction", "neutralisation", "precipitation", "combustion"], correctIndex: 0, explanation: "It shows one half of the redox process." },
        { prompt: "Oxidation and reduction always occur…", options: ["together", "separately", "at different times", "never"], correctIndex: 0, explanation: "Electrons lost must be gained by something." },
        { prompt: "In the half-reaction method, electrons are added to balance…", options: ["charge", "mass only", "colour", "volume"], correctIndex: 0, explanation: "Electrons balance the charge." },
        { prompt: "In acidic solution, oxygen atoms are balanced with…", options: ["H₂O", "O₂", "OH⁻ only", "H₂"], correctIndex: 0, explanation: "Add water to balance oxygen." },
        { prompt: "In acidic solution, hydrogen atoms are balanced with…", options: ["H⁺", "OH⁻", "H₂", "H₂O only"], correctIndex: 0, explanation: "Add H⁺ to balance hydrogen." },
        { prompt: "In Zn + Cu²⁺ → Zn²⁺ + Cu, the reducing agent is…", options: ["Zn", "Cu²⁺", "Zn²⁺", "Cu"], correctIndex: 0, explanation: "Zinc donates electrons." },
        { prompt: "In Zn + Cu²⁺ → Zn²⁺ + Cu, the oxidising agent is…", options: ["Cu²⁺", "Zn", "Cu", "Zn²⁺"], correctIndex: 0, explanation: "Copper(II) ion accepts electrons." },
        { prompt: "The mnemonic OIL RIG stands for…", options: ["oxidation is loss, reduction is gain", "oxygen in liquid, reduction in gas", "oil is light, rig is heavy", "oxide ion loses, reduces ion gains"], correctIndex: 0, explanation: "OIL RIG summarises the definitions." },
        { prompt: "To combine two half-equations you make the … equal.", options: ["number of electrons", "number of atoms only", "colours", "temperatures"], correctIndex: 0, explanation: "Electrons must cancel." },
        { prompt: "A species whose oxidation number decreases has been…", options: ["reduced", "oxidised", "neutralised", "vaporised"], correctIndex: 0, explanation: "Decrease = gain of electrons = reduction." },
        { prompt: "Electrons in an oxidation half-equation appear on the…", options: ["right (product side)", "left", "both sides", "neither side"], correctIndex: 0, explanation: "They are released as products." },
        { prompt: "Electrons in a reduction half-equation appear on the…", options: ["left (reactant side)", "right", "both sides", "neither"], correctIndex: 0, explanation: "They are consumed as reactants." },
        { prompt: "The half-reaction method works best for reactions in…", options: ["aqueous solution", "the solid state only", "a vacuum", "gases only"], correctIndex: 0, explanation: "It suits aqueous redox reactions." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define oxidation and reduction in terms of electrons, and explain what is meant by an oxidising agent.", answerKey: "Oxidation is the loss of electrons (oxidation number increases); reduction is the gain of electrons (oxidation number decreases). An oxidising agent is a species that causes oxidation by accepting electrons and is itself reduced. Award marks for both definitions and the oxidising-agent explanation.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "In the reaction Mg + 2H⁺ → Mg²⁺ + H₂, magnesium is:", options: ["oxidised (it loses electrons)", "reduced (it gains electrons)", "a spectator", "unchanged"], correctIndex: 0, answerKey: "Mg loses electrons to become Mg²⁺, so it is oxidised.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "A reducing agent is a species that:", options: ["donates electrons and is itself oxidised", "accepts electrons and is itself reduced", "does not take part", "only balances charge"], correctIndex: 0, answerKey: "The reducing agent donates electrons and is oxidised.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Write the oxidation and reduction half-equations for the reaction Fe + Cu²⁺ → Fe²⁺ + Cu.", answerKey: "Oxidation: Fe → Fe²⁺ + 2e⁻. Reduction: Cu²⁺ + 2e⁻ → Cu. Award a mark for each correct half-equation and a mark for correctly assigning oxidation/reduction.", marks: 3 },
        { type: "ESSAY", prompt: "Explain the half-reaction method of balancing redox equations and use it to balance the reaction between zinc and silver ions (Zn + Ag⁺ → Zn²⁺ + Ag), identifying the oxidising and reducing agents.", answerKey: "A full answer explains the steps: split into oxidation and reduction half-equations, balance atoms then charge (adding electrons), multiply so electrons are equal, then add and cancel. For the example: oxidation Zn → Zn²⁺ + 2e⁻; reduction Ag⁺ + e⁻ → Ag, which is doubled to 2Ag⁺ + 2e⁻ → 2Ag so the electrons match; adding gives Zn + 2Ag⁺ → Zn²⁺ + 2Ag. Zinc is the reducing agent (oxidised) and Ag⁺ is the oxidising agent (reduced). Award marks for the method, the correctly balanced equation, and identifying both agents.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (OpenStax Chemistry) — 17.2 Galvanic Cells (https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)/17%3A_Electrochemistry/17.02%3A_Galvanic_Cells)
      slug: "electrochemical-cells-and-electrode-potential",
      title: "Electrochemical Cells and Standard Electrode Potential",
      objective:
        "By the end of the topic, learners should be able to describe a galvanic cell, identify the anode and cathode, explain the role of the salt bridge, and define standard electrode potential. (MoE Grade 11 Period IV, CONTENTS 2.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- A **galvanic (voltaic) cell** turns a spontaneous redox reaction into electricity.
- **This topic:** the parts of a cell, the electrodes, and standard electrode potentials.

## Parts of a galvanic cell

- Two **half-cells**, each with an electrode dipping in a solution of its ions.
- An external **wire** carries electrons; a **salt bridge** completes the circuit and keeps each half-cell neutral.

## Anode and cathode

- **Anode** — where **oxidation** occurs; in a galvanic cell it is the **negative** electrode.
- **Cathode** — where **reduction** occurs; in a galvanic cell it is the **positive** electrode.
- **Electrons flow from the anode to the cathode** through the external wire.

## The salt bridge

- Contains an inert salt solution (e.g. KNO₃).
- Ions move through it to balance the charge built up as the reaction proceeds, completing the circuit.

## Standard electrode potential

- **Standard electrode potential (E°)** — the voltage of a half-cell measured against the **standard hydrogen electrode (SHE)** under standard conditions (1 mol/dm³, 298 K, 1 atm).
- The SHE is assigned **E° = 0.00 V** as the reference.
- A more positive E° means the species is more easily **reduced**.

## Common errors and misconceptions

- **Anode is always positive** — in a galvanic cell the anode is negative; in electrolysis it is positive.
- **Electrons flow through the salt bridge** — electrons flow in the wire; **ions** move in the salt bridge.
- **SHE has a real fixed voltage** — its potential is defined as zero by convention.`,
      workedExample: `**Task.** A galvanic cell is set up with a zinc electrode in zinc sulfate solution and a copper electrode in copper sulfate solution, joined by a wire and a salt bridge. Given E°(Zn²⁺/Zn) = −0.76 V and E°(Cu²⁺/Cu) = +0.34 V, identify the anode and cathode and state the direction of electron flow.

**Step 1 — Compare the electrode potentials**
- Copper has the more positive E° (+0.34 V), so Cu²⁺ is more easily reduced.
- Zinc has the more negative E° (−0.76 V), so zinc is more easily oxidised.

**Step 2 — Assign the electrodes**
- Zinc is **oxidised** → the zinc electrode is the **anode** (negative).
- Copper(II) is **reduced** → the copper electrode is the **cathode** (positive).

**Step 3 — Direction of electron flow**
- Electrons flow from the **anode (zinc) to the cathode (copper)** through the external wire.

**Conclusion.** Zinc is the anode (negative, oxidation), copper is the cathode (positive, reduction), and electrons travel from zinc to copper in the wire while ions move through the salt bridge to keep the cell neutral.`,
      quiz: [
        { prompt: "A galvanic cell converts a spontaneous redox reaction into…", options: ["electricity", "heat only", "light only", "sound"], correctIndex: 0, explanation: "It produces electrical energy." },
        { prompt: "Oxidation occurs at the…", options: ["anode", "cathode", "salt bridge", "wire"], correctIndex: 0, explanation: "The anode is the site of oxidation." },
        { prompt: "Reduction occurs at the…", options: ["cathode", "anode", "salt bridge", "voltmeter"], correctIndex: 0, explanation: "The cathode is the site of reduction." },
        { prompt: "In a galvanic cell, the anode is the … electrode.", options: ["negative", "positive", "neutral", "inert"], correctIndex: 0, explanation: "The anode is negative in a galvanic cell." },
        { prompt: "In a galvanic cell, the cathode is the … electrode.", options: ["positive", "negative", "neutral", "molten"], correctIndex: 0, explanation: "The cathode is positive in a galvanic cell." },
        { prompt: "Electrons flow from the anode to the…", options: ["cathode", "salt bridge", "solution", "back to the anode"], correctIndex: 0, explanation: "Electrons travel anode → cathode in the wire." },
        { prompt: "The salt bridge completes the circuit by allowing … to move.", options: ["ions", "electrons", "atoms", "light"], correctIndex: 0, explanation: "Ions move through the salt bridge." },
        { prompt: "Standard electrode potential is measured against the…", options: ["standard hydrogen electrode", "copper electrode", "zinc electrode", "a battery"], correctIndex: 0, explanation: "The SHE is the reference." },
        { prompt: "The standard hydrogen electrode is assigned E° = …", options: ["0.00 V", "1.00 V", "−0.76 V", "+0.34 V"], correctIndex: 0, explanation: "SHE is defined as zero." },
        { prompt: "A more positive E° means the species is more easily…", options: ["reduced", "oxidised", "evaporated", "dissolved"], correctIndex: 0, explanation: "Positive E° favours reduction." },
        { prompt: "In a Zn/Cu cell, the anode is…", options: ["zinc", "copper", "the salt bridge", "the wire"], correctIndex: 0, explanation: "Zinc is oxidised (more negative E°)." },
        { prompt: "In a Zn/Cu cell, the cathode is…", options: ["copper", "zinc", "hydrogen", "the wire"], correctIndex: 0, explanation: "Copper(II) is reduced (more positive E°)." },
        { prompt: "Standard conditions include a concentration of…", options: ["1 mol/dm³", "0.1 mol/dm³", "10 mol/dm³", "0 mol/dm³"], correctIndex: 0, explanation: "1 mol/dm³ is standard." },
        { prompt: "The two parts of a galvanic cell are called…", options: ["half-cells", "quarter-cells", "batteries", "electrolytes only"], correctIndex: 0, explanation: "Each electrode/solution is a half-cell." },
        { prompt: "Which moves through the external wire?", options: ["electrons", "cations", "anions", "water"], correctIndex: 0, explanation: "Only electrons travel in the wire." },
        { prompt: "As zinc is oxidised, zinc ions enter the solution and the electrode…", options: ["loses mass", "gains mass", "melts", "changes colour to blue"], correctIndex: 0, explanation: "The anode dissolves and loses mass." },
        { prompt: "At the copper cathode, copper ions are deposited, so the electrode…", options: ["gains mass", "loses mass", "dissolves", "evaporates"], correctIndex: 0, explanation: "Reduction deposits copper metal." },
        { prompt: "Without a salt bridge, the cell would…", options: ["stop working (no complete circuit)", "produce more current", "explode", "reverse"], correctIndex: 0, explanation: "The circuit would be incomplete." },
        { prompt: "E° values are quoted at a temperature of…", options: ["298 K (25 °C)", "0 K", "373 K", "100 K"], correctIndex: 0, explanation: "Standard temperature is 298 K." },
        { prompt: "A half-cell consists of an electrode in a solution of its…", options: ["ions", "atoms only", "gas only", "salt bridge"], correctIndex: 0, explanation: "An electrode dips into a solution of its ions." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "In a galvanic cell, state which electrode is the anode and which is the cathode, and what happens at each.", answerKey: "The anode is the electrode where oxidation occurs (negative in a galvanic cell); the cathode is the electrode where reduction occurs (positive in a galvanic cell). Award marks for correctly linking anode with oxidation/negative and cathode with reduction/positive.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "The salt bridge in a galvanic cell allows the movement of:", options: ["ions, to complete the circuit and keep the half-cells neutral", "electrons, to carry the current", "atoms of the electrode", "water only"], correctIndex: 0, answerKey: "The salt bridge carries ions; electrons flow in the wire.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The standard hydrogen electrode is assigned a standard electrode potential of:", options: ["0.00 V", "+1.00 V", "−0.76 V", "+0.34 V"], correctIndex: 0, answerKey: "The SHE is the reference at 0.00 V.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain what is meant by the standard electrode potential of a half-cell and state the conditions under which it is measured.", answerKey: "The standard electrode potential is the voltage of a half-cell measured relative to the standard hydrogen electrode (defined as 0.00 V) under standard conditions: ion concentrations of 1 mol/dm³, a temperature of 298 K (25 °C), and a gas pressure of 1 atm. A more positive value means the species is more easily reduced. Award marks for the definition against the SHE and the standard conditions.", marks: 3 },
        { type: "ESSAY", prompt: "Describe the construction and operation of a zinc-copper galvanic cell, explaining the roles of the electrodes, the external wire and the salt bridge, and the direction of electron flow.", answerKey: "A strong answer describes two half-cells: a zinc electrode in zinc sulfate and a copper electrode in copper sulfate, joined by an external wire and a salt bridge. Zinc (more negative E°) is oxidised at the anode (negative): Zn → Zn²⁺ + 2e⁻; copper ions are reduced at the cathode (positive): Cu²⁺ + 2e⁻ → Cu. Electrons flow from the zinc anode to the copper cathode through the external wire, while ions move through the salt bridge to complete the circuit and keep each half-cell electrically neutral. The zinc electrode loses mass and the copper electrode gains mass. Award marks for the two half-cells and their reactions, the electron-flow direction, and the role of the salt bridge.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (OpenStax Chemistry) — 17.3 Standard Reduction Potentials (https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)/17%3A_Electrochemistry/17.03%3A_Standard_Reduction_Potentials)
      slug: "cell-diagrams-and-emf",
      title: "Cell Diagrams (emf of Cells)",
      objective:
        "By the end of the topic, learners should be able to write a cell diagram using the correct notation and calculate the standard cell emf from electrode potentials. (MoE Grade 11 Period IV, CONTENTS 3.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- A **cell diagram** is a shorthand way of representing a galvanic cell.
- **This topic:** how to write cell diagrams and calculate the cell emf.

## Cell diagram notation

- Written as: **anode | anode solution || cathode solution | cathode**.
- A **single line (|)** is a phase boundary (e.g. between a solid electrode and its solution).
- A **double line (||)** is the **salt bridge**.
- The **anode (oxidation)** is written on the **left**; the **cathode (reduction)** on the **right**.

Example (Daniell cell): **Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)**.

## Cell emf (electromotive force)

- **emf (E°cell)** — the voltage produced by the cell under standard conditions.

**E°cell = E°(cathode) − E°(anode)**

- Use the standard electrode potentials (reduction potentials); do **not** multiply them by the balancing numbers.
- A **positive** E°cell means the reaction is **spontaneous** (the cell works as drawn).

## Common errors and misconceptions

- **Reversing the sign** — E°cell = E°cathode − E°anode; use the reduction potentials directly.
- **Scaling E° by coefficients** — electrode potentials are intensive; never multiply by the balancing numbers.
- **Putting the cathode on the left** — the anode goes on the left, the cathode on the right.`,
      workedExample: `**Task.** Write the cell diagram for a cell made from a zinc half-cell and a copper half-cell, and calculate its standard emf. (E°(Zn²⁺/Zn) = −0.76 V; E°(Cu²⁺/Cu) = +0.34 V.)

**Step 1 — Decide anode and cathode**
- Zinc has the more negative E°, so zinc is oxidised → **anode** (left).
- Copper is reduced → **cathode** (right).

**Step 2 — Write the cell diagram**
- **Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)** — single lines for phase boundaries, double line for the salt bridge.

**Step 3 — Calculate the emf**
- E°cell = E°(cathode) − E°(anode).
- = (+0.34) − (−0.76).
- = 0.34 + 0.76 = **+1.10 V**.

**Check.** The positive emf (+1.10 V) confirms the reaction Zn + Cu²⁺ → Zn²⁺ + Cu is spontaneous, so the cell works as written.`,
      quiz: [
        { prompt: "In a cell diagram, the anode is written on the…", options: ["left", "right", "middle", "top"], correctIndex: 0, explanation: "Anode goes on the left." },
        { prompt: "In a cell diagram, the cathode is written on the…", options: ["right", "left", "middle", "bottom"], correctIndex: 0, explanation: "Cathode goes on the right." },
        { prompt: "A single line (|) in a cell diagram represents a…", options: ["phase boundary", "salt bridge", "wire", "voltmeter"], correctIndex: 0, explanation: "It marks a change of phase." },
        { prompt: "A double line (||) in a cell diagram represents the…", options: ["salt bridge", "electrode", "phase boundary", "external wire"], correctIndex: 0, explanation: "The double line is the salt bridge." },
        { prompt: "The emf of a cell is calculated as E°cell = …", options: ["E°cathode − E°anode", "E°anode − E°cathode", "E°cathode + E°anode", "E°anode × E°cathode"], correctIndex: 0, explanation: "Cathode minus anode." },
        { prompt: "A positive E°cell means the reaction is…", options: ["spontaneous", "non-spontaneous", "impossible", "at equilibrium"], correctIndex: 0, explanation: "Positive emf = spontaneous cell." },
        { prompt: "For a Zn/Cu cell, E°cell is…", options: ["+1.10 V", "−1.10 V", "+0.42 V", "0 V"], correctIndex: 0, explanation: "0.34 − (−0.76) = 1.10 V." },
        { prompt: "Electrode potentials are … when balancing coefficients change.", options: ["not multiplied", "doubled", "halved", "squared"], correctIndex: 0, explanation: "E° is intensive; do not scale it." },
        { prompt: "The Daniell cell diagram is…", options: ["Zn(s)|Zn²⁺||Cu²⁺|Cu(s)", "Cu(s)|Cu²⁺||Zn²⁺|Zn(s)", "Zn|Cu||Zn²⁺|Cu²⁺", "Cu|Zn²⁺||Cu²⁺|Zn"], correctIndex: 0, explanation: "Anode (Zn) left, cathode (Cu) right." },
        { prompt: "emf stands for…", options: ["electromotive force", "electron mass factor", "electrode metal force", "energy motion field"], correctIndex: 0, explanation: "emf = electromotive force." },
        { prompt: "The cell emf is measured with a…", options: ["voltmeter", "burette", "thermometer", "balance"], correctIndex: 0, explanation: "A voltmeter measures the voltage." },
        { prompt: "If E°cell is negative, the cell reaction as written is…", options: ["non-spontaneous", "spontaneous", "very fast", "at 0 V"], correctIndex: 0, explanation: "Negative emf means non-spontaneous." },
        { prompt: "In the diagram Zn|Zn²⁺||Cu²⁺|Cu, oxidation occurs at…", options: ["Zn (left)", "Cu (right)", "the salt bridge", "the voltmeter"], correctIndex: 0, explanation: "The left side is the anode." },
        { prompt: "The species with the more positive E° becomes the…", options: ["cathode", "anode", "salt bridge", "wire"], correctIndex: 0, explanation: "More positive E° is reduced (cathode)." },
        { prompt: "For E°cathode = +0.80 V and E°anode = +0.34 V, emf is…", options: ["+0.46 V", "−0.46 V", "+1.14 V", "0 V"], correctIndex: 0, explanation: "0.80 − 0.34 = 0.46 V." },
        { prompt: "The order in a cell diagram (left to right) is anode → salt bridge → …", options: ["cathode", "anode again", "wire", "voltmeter"], correctIndex: 0, explanation: "It ends with the cathode." },
        { prompt: "A large positive emf indicates a … tendency for the reaction.", options: ["strong spontaneous", "weak", "reverse", "zero"], correctIndex: 0, explanation: "Larger positive emf = more spontaneous." },
        { prompt: "Standard electrode potentials used in emf are … potentials.", options: ["reduction", "oxidation", "ionisation", "lattice"], correctIndex: 0, explanation: "Tables list standard reduction potentials." },
        { prompt: "In the cell diagram, the phase boundary between Cu²⁺(aq) and Cu(s) is shown by a…", options: ["single line", "double line", "comma", "arrow"], correctIndex: 0, explanation: "A single line marks the phase boundary." },
        { prompt: "The purpose of the cell diagram is to … the cell compactly.", options: ["represent", "power", "heat", "electrolyse"], correctIndex: 0, explanation: "It is a shorthand representation." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the meaning of the single line and the double line in a cell diagram, and which electrode is written on the left.", answerKey: "A single line (|) represents a phase boundary (e.g. between an electrode and its solution); a double line (||) represents the salt bridge. The anode (where oxidation occurs) is written on the left. Award marks for both line meanings and the anode-on-the-left convention.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The standard emf of a cell is given by:", options: ["E°cathode − E°anode", "E°anode − E°cathode", "E°cathode + E°anode", "E°anode × E°cathode"], correctIndex: 0, answerKey: "E°cell = E°cathode − E°anode.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "A cell has E°cathode = +0.34 V and E°anode = −0.76 V. Its emf is:", options: ["+1.10 V", "−1.10 V", "−0.42 V", "+0.42 V"], correctIndex: 0, answerKey: "0.34 − (−0.76) = +1.10 V.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Write the cell diagram for a cell in which magnesium (anode) and silver (cathode) half-cells are connected.", answerKey: "Mg(s) | Mg²⁺(aq) || Ag⁺(aq) | Ag(s). The anode (Mg) is on the left, single lines mark the phase boundaries, and the double line is the salt bridge. Award marks for the correct order and notation.", marks: 2 },
        { type: "ESSAY", prompt: "Explain how to write the cell diagram of a galvanic cell and calculate its emf, using a zinc-copper cell as an example, and explain what the sign of the emf tells you.", answerKey: "A full answer explains the notation anode | anode solution || cathode solution | cathode, with single lines for phase boundaries and a double line for the salt bridge, and the anode written on the left. For the zinc-copper cell: Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s), because zinc (E° = −0.76 V) is oxidised and copper (E° = +0.34 V) is reduced. The emf is E°cell = E°cathode − E°anode = 0.34 − (−0.76) = +1.10 V, without scaling the potentials by coefficients. A positive emf shows the cell reaction is spontaneous (works as written); a negative emf would mean it is non-spontaneous. Award marks for the notation, the correct diagram, the emf calculation, and the meaning of the sign.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (OpenStax Chemistry) — 17.7 Electrolysis (https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)/17%3A_Electrochemistry/17.07%3A_Electrolysis)
      slug: "principles-of-electrolysis",
      title: "Principles of Electrolysis",
      objective:
        "By the end of the topic, learners should be able to define electrolysis, describe an electrolytic cell, and compare it with a galvanic cell. (MoE Grade 11 Period IV, CONTENTS 4.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- **Electrolysis** uses electricity to force a **non-spontaneous** reaction to happen.
- **This topic:** the electrolytic cell and how it differs from a galvanic cell.

## What electrolysis is

- **Electrolysis** — the decomposition of an electrolyte (molten or in solution) by passing an electric current through it.
- An external power supply drives the reaction that would not happen on its own.

## The electrolytic cell

- Two electrodes dip into the electrolyte and are connected to a **direct-current power supply**.
- **Cathode** (connected to the negative terminal) — **reduction** occurs; **cations** move here and are discharged.
- **Anode** (connected to the positive terminal) — **oxidation** occurs; **anions** move here and are discharged.

## Electrolytic vs galvanic cell

| Feature | Galvanic cell | Electrolytic cell |
|---|---|---|
| Energy change | chemical → electrical | electrical → chemical |
| Reaction | spontaneous (E° > 0) | non-spontaneous (needs power) |
| Power supply | none (it is the source) | external supply required |
| Anode sign | negative | positive |
| Cathode sign | positive | negative |
| Oxidation | at anode | at anode |

- In **both** cells, oxidation is at the anode and reduction is at the cathode — only the **signs** differ.

## Common errors and misconceptions

- **Mixing up the electrode signs** — in electrolysis the cathode is negative and the anode is positive (opposite to a galvanic cell).
- **Thinking electrolysis is spontaneous** — it needs an external power supply.
- **Forgetting the current type** — electrolysis uses direct current (DC).`,
      workedExample: `**Task.** Compare what happens at the electrodes when molten lead(II) bromide, PbBr₂, is electrolysed, and explain how the electrolytic cell differs from a galvanic cell.

**Step 1 — Identify the ions**
- Molten PbBr₂ contains Pb²⁺ (cations) and Br⁻ (anions).

**Step 2 — At the cathode (negative)**
- Cations move to the cathode and are reduced: Pb²⁺ + 2e⁻ → Pb. Molten lead forms.

**Step 3 — At the anode (positive)**
- Anions move to the anode and are oxidised: 2Br⁻ → Br₂ + 2e⁻. Brown bromine vapour forms.

**Step 4 — Compare with a galvanic cell**
- The electrolytic cell needs an **external power supply** to drive a non-spontaneous reaction, whereas a galvanic cell produces electricity from a spontaneous reaction.
- In the electrolytic cell the **cathode is negative and the anode is positive** — the opposite signs to a galvanic cell — but oxidation is still at the anode and reduction still at the cathode.

**Conclusion.** Electrolysis of molten PbBr₂ gives lead at the cathode and bromine at the anode; unlike a galvanic cell, it consumes electrical energy to drive a non-spontaneous reaction, and its electrode signs are reversed.`,
      quiz: [
        { prompt: "Electrolysis uses electricity to drive a … reaction.", options: ["non-spontaneous", "spontaneous", "combustion", "neutralisation"], correctIndex: 0, explanation: "It forces a non-spontaneous change." },
        { prompt: "In an electrolytic cell, reduction occurs at the…", options: ["cathode", "anode", "salt bridge", "wire"], correctIndex: 0, explanation: "Reduction is always at the cathode." },
        { prompt: "In an electrolytic cell, oxidation occurs at the…", options: ["anode", "cathode", "power supply", "electrolyte"], correctIndex: 0, explanation: "Oxidation is always at the anode." },
        { prompt: "In electrolysis, the cathode is connected to the … terminal.", options: ["negative", "positive", "neutral", "earth"], correctIndex: 0, explanation: "Cathode = negative in electrolysis." },
        { prompt: "In electrolysis, the anode is connected to the … terminal.", options: ["positive", "negative", "neutral", "earth"], correctIndex: 0, explanation: "Anode = positive in electrolysis." },
        { prompt: "Cations move toward the…", options: ["cathode", "anode", "salt bridge", "wire"], correctIndex: 0, explanation: "Positive ions go to the negative cathode." },
        { prompt: "Anions move toward the…", options: ["anode", "cathode", "power supply", "voltmeter"], correctIndex: 0, explanation: "Negative ions go to the positive anode." },
        { prompt: "A galvanic cell converts chemical energy to…", options: ["electrical energy", "chemical energy", "light", "sound"], correctIndex: 0, explanation: "Galvanic: chemical → electrical." },
        { prompt: "An electrolytic cell converts electrical energy to…", options: ["chemical energy", "electrical energy", "heat only", "light only"], correctIndex: 0, explanation: "Electrolytic: electrical → chemical." },
        { prompt: "Electrolysis requires a … power supply.", options: ["direct-current (DC)", "alternating-current", "solar only", "no"], correctIndex: 0, explanation: "DC is needed for electrolysis." },
        { prompt: "In molten PbBr₂ electrolysis, the cathode product is…", options: ["lead", "bromine", "oxygen", "hydrogen"], correctIndex: 0, explanation: "Pb²⁺ is reduced to lead at the cathode." },
        { prompt: "In molten PbBr₂ electrolysis, the anode product is…", options: ["bromine", "lead", "hydrogen", "chlorine"], correctIndex: 0, explanation: "Br⁻ is oxidised to bromine at the anode." },
        { prompt: "Compared with a galvanic cell, the electrolytic cell's electrode signs are…", options: ["reversed", "the same", "both positive", "both negative"], correctIndex: 0, explanation: "The signs are opposite." },
        { prompt: "In both cell types, oxidation always occurs at the…", options: ["anode", "cathode", "salt bridge", "wire"], correctIndex: 0, explanation: "Anode = oxidation in both." },
        { prompt: "Electrolysis breaks down a substance called the…", options: ["electrolyte", "insulator", "salt bridge", "metal wire"], correctIndex: 0, explanation: "The electrolyte is decomposed." },
        { prompt: "A galvanic cell reaction has E°cell that is…", options: ["positive", "negative", "zero always", "undefined"], correctIndex: 0, explanation: "Spontaneous cells have positive emf." },
        { prompt: "An electrolytic cell reaction has E°cell that is…", options: ["negative (needs power)", "positive", "always zero", "undefined"], correctIndex: 0, explanation: "Non-spontaneous reactions need power." },
        { prompt: "The electrodes in electrolysis are often made of an … material like graphite.", options: ["inert", "reactive", "magnetic", "insulating"], correctIndex: 0, explanation: "Inert electrodes do not take part." },
        { prompt: "During electrolysis, ions are … at the electrodes.", options: ["discharged", "created", "coloured", "dissolved only"], correctIndex: 0, explanation: "Ions gain or lose electrons (are discharged)." },
        { prompt: "Which needs an external battery to work?", options: ["electrolytic cell", "galvanic cell", "both equally", "neither"], correctIndex: 0, explanation: "Electrolysis is driven by external power." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define electrolysis and name the two electrodes, stating what happens at each.", answerKey: "Electrolysis is the decomposition of an electrolyte (molten or in solution) by passing an electric current through it. The cathode (negative) is where reduction occurs (cations gain electrons); the anode (positive) is where oxidation occurs (anions lose electrons). Award marks for the definition and both electrodes with the correct processes.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "In an electrolytic cell, the cathode is connected to the:", options: ["negative terminal of the power supply", "positive terminal of the power supply", "salt bridge", "voltmeter"], correctIndex: 0, answerKey: "In electrolysis the cathode is negative.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Which statement correctly compares galvanic and electrolytic cells?", options: ["a galvanic cell produces electricity from a spontaneous reaction; an electrolytic cell uses electricity to drive a non-spontaneous reaction", "both use an external power supply", "both have a negative anode", "electrolytic cells are spontaneous"], correctIndex: 0, answerKey: "Galvanic cells are spontaneous sources of electricity; electrolytic cells are driven by external power.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Write the electrode reactions for the electrolysis of molten sodium chloride, NaCl.", answerKey: "Cathode (reduction): Na⁺ + e⁻ → Na (sodium metal forms). Anode (oxidation): 2Cl⁻ → Cl₂ + 2e⁻ (chlorine gas forms). Award marks for each correct half-reaction.", marks: 2 },
        { type: "ESSAY", prompt: "Compare an electrolytic cell with a galvanic cell in terms of energy change, spontaneity, the need for a power supply, and the signs of the electrodes, noting what stays the same in both.", answerKey: "A full answer states that a galvanic cell converts chemical energy to electrical energy from a spontaneous reaction (positive emf) and needs no power supply, with a negative anode and positive cathode; an electrolytic cell converts electrical energy to chemical energy, drives a non-spontaneous reaction using an external DC power supply, and has a positive anode and negative cathode (the reverse signs). In both cells, oxidation always occurs at the anode and reduction always occurs at the cathode. Award marks for the energy-change, spontaneity/power-supply, and electrode-sign comparisons, plus the point that oxidation/reduction assignments are unchanged.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chem1, Lower) — 16.10 Electrolytic Cells and Electrolysis (https://chem.libretexts.org/Bookshelves/General_Chemistry/Chem1_(Lower)/16%3A_Electrochemistry/16.10%3A_Electrolytic_Cells_and_Electrolysis) and OpenStax 17.7 Electrolysis / Faraday's laws (https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)/17%3A_Electrochemistry/17.07%3A_Electrolysis)
      slug: "factors-influencing-discharge-and-faradays-laws",
      title: "Factors Influencing Discharge of Species",
      objective:
        "By the end of the topic, learners should be able to state the factors that decide which ion is discharged in electrolysis and apply Faraday's laws of electrolysis. (MoE Grade 11 Period IV, CONTENTS 5.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- When several ions are present, only some are discharged — and the amount of product depends on the charge passed.
- **This topic:** the factors controlling discharge and Faraday's laws.

## Factors influencing which ion is discharged

1. **Position in the electrochemical series** — the ion lower (more easily discharged) is preferred. At the cathode, less reactive metal ions (e.g. Cu²⁺) discharge before more reactive ones (e.g. Na⁺, so H₂ forms instead).
2. **Concentration** — a more concentrated ion is more likely to be discharged (e.g. concentrated NaCl gives Cl₂ at the anode instead of O₂).
3. **Nature of the electrode** — a reactive electrode (e.g. copper) may itself be oxidised instead of an anion being discharged.

## In aqueous solution

- Water can be oxidised (to O₂) or reduced (to H₂) in competition with the dissolved ions.
- Reactive-metal ions (Na⁺, K⁺, Ca²⁺) are **not** discharged from aqueous solution — hydrogen is released instead.

## Faraday's laws of electrolysis

- **First law:** the mass of substance produced at an electrode is **proportional to the quantity of charge** passed. Charge **Q = I × t** (current in amps × time in seconds).
- **Second law:** for the same charge, the masses of different substances are proportional to their **equivalent masses** (molar mass ÷ number of electrons).
- **Faraday constant F = 96 500 C** per mole of electrons.

## Common errors and misconceptions

- **Sodium deposits from aqueous NaCl** — reactive-metal ions are not discharged from water; hydrogen forms.
- **Forgetting Q = It** — charge is current times time in seconds.
- **Ignoring the electrode number of electrons** — use molar mass ÷ electrons per ion.`,
      workedExample: `**Task.** A current of 2.0 A is passed through molten copper(II) chloride for 30 minutes. Calculate the mass of copper deposited at the cathode. (Cu²⁺ + 2e⁻ → Cu; molar mass of Cu = 63.5 g/mol; F = 96 500 C/mol.)

**Step 1 — Find the charge passed (Faraday's first law, Q = It)**
- t = 30 min = 30 × 60 = 1800 s.
- Q = I × t = 2.0 × 1800 = **3600 C**.

**Step 2 — Find the moles of electrons**
- moles of electrons = Q ÷ F = 3600 ÷ 96 500 = 0.0373 mol e⁻.

**Step 3 — Use the electrode equation**
- Cu²⁺ + 2e⁻ → Cu, so 2 mol e⁻ give 1 mol Cu.
- moles of Cu = 0.0373 ÷ 2 = 0.01865 mol.

**Step 4 — Find the mass**
- mass = moles × molar mass = 0.01865 × 63.5 = **1.18 g**.

**Conclusion.** About 1.18 g of copper is deposited. The mass is proportional to the charge (Q = It) and depends on the number of electrons in the electrode reaction, as Faraday's laws state.`,
      quiz: [
        { prompt: "The mass deposited in electrolysis is proportional to the … passed (Faraday's first law).", options: ["charge", "voltage only", "temperature", "colour"], correctIndex: 0, explanation: "Mass ∝ charge Q." },
        { prompt: "Charge Q equals current times…", options: ["time", "voltage", "mass", "molar mass"], correctIndex: 0, explanation: "Q = I × t." },
        { prompt: "The Faraday constant is…", options: ["96 500 C/mol", "6.02 × 10²³", "22.4 dm³", "8.314 J/mol·K"], correctIndex: 0, explanation: "F = 96 500 C per mole of electrons." },
        { prompt: "At the cathode, the ion lower in the electrochemical series is…", options: ["discharged first", "not discharged", "oxidised", "a salt bridge"], correctIndex: 0, explanation: "Less reactive metal ions discharge first." },
        { prompt: "From aqueous NaCl at the cathode, the product is…", options: ["hydrogen", "sodium", "chlorine", "oxygen"], correctIndex: 0, explanation: "Na⁺ is not discharged; H₂ forms." },
        { prompt: "Concentrated NaCl solution gives … at the anode.", options: ["chlorine", "oxygen", "hydrogen", "sodium"], correctIndex: 0, explanation: "High Cl⁻ concentration favours Cl₂." },
        { prompt: "The three factors affecting discharge are position in the series, concentration and…", options: ["nature of the electrode", "colour of the solution", "container shape", "time of day"], correctIndex: 0, explanation: "The electrode material also matters." },
        { prompt: "A reactive copper anode may itself be…", options: ["oxidised (dissolve)", "reduced", "unchanged", "neutralised"], correctIndex: 0, explanation: "It dissolves instead of discharging an anion." },
        { prompt: "Faraday's second law relates mass to the substance's…", options: ["equivalent mass", "colour", "density", "boiling point"], correctIndex: 0, explanation: "Mass ∝ equivalent mass for the same charge." },
        { prompt: "For Q = 2.0 A × 1800 s, Q = …", options: ["3600 C", "900 C", "1800 C", "7200 C"], correctIndex: 0, explanation: "2.0 × 1800 = 3600 C." },
        { prompt: "moles of electrons = Q ÷ …", options: ["96 500", "22.4", "1000", "6.02 × 10²³"], correctIndex: 0, explanation: "Divide charge by the Faraday constant." },
        { prompt: "For Cu²⁺ + 2e⁻ → Cu, how many electrons deposit 1 mol Cu?", options: ["2", "1", "3", "63.5"], correctIndex: 0, explanation: "Two moles of electrons per mole of Cu." },
        { prompt: "Reactive metals like sodium are usually extracted by electrolysis of their…", options: ["molten compounds", "aqueous solutions", "gaseous oxides", "alloys"], correctIndex: 0, explanation: "Water would be discharged instead in aqueous solution." },
        { prompt: "Doubling the current for the same time … the mass deposited.", options: ["doubles", "halves", "keeps constant", "removes"], correctIndex: 0, explanation: "More charge means more product." },
        { prompt: "Doubling the time at the same current … the charge.", options: ["doubles", "halves", "keeps", "squares"], correctIndex: 0, explanation: "Q = It, so more time = more charge." },
        { prompt: "Which ion is preferentially discharged at the cathode from a mix of Cu²⁺ and Na⁺?", options: ["Cu²⁺", "Na⁺", "neither", "both equally"], correctIndex: 0, explanation: "The less reactive Cu²⁺ is discharged." },
        { prompt: "In dilute NaCl solution the anode product is usually…", options: ["oxygen", "chlorine", "sodium", "hydrogen"], correctIndex: 0, explanation: "Dilute solution favours O₂ (from OH⁻/water)." },
        { prompt: "The current in electrolysis is measured in…", options: ["amperes", "volts", "coulombs", "moles"], correctIndex: 0, explanation: "Current is in amperes." },
        { prompt: "The equivalent mass is molar mass divided by the number of…", options: ["electrons per ion", "atoms", "protons", "neutrons"], correctIndex: 0, explanation: "Equivalent mass = M ÷ electrons transferred." },
        { prompt: "The quantity of electricity (charge) is measured in…", options: ["coulombs", "amperes", "volts", "joules"], correctIndex: 0, explanation: "Charge is measured in coulombs." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the three factors that determine which ion is discharged during electrolysis.", answerKey: "The factors are: (1) the position of the ion in the electrochemical series (the more easily discharged/less reactive ion is preferred); (2) the concentration of the ion (a more concentrated ion is more likely to be discharged); (3) the nature of the electrode (a reactive electrode may be oxidised instead of an anion). Award a mark for each factor.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The quantity of charge passed in electrolysis is given by:", options: ["Q = I × t", "Q = I ÷ t", "Q = V × t", "Q = m × F"], correctIndex: 0, answerKey: "Charge = current × time (Q = It).", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "When dilute sodium chloride solution is electrolysed, the product at the cathode is:", options: ["hydrogen", "sodium", "chlorine", "oxygen"], correctIndex: 0, answerKey: "Na⁺ is not discharged from aqueous solution; hydrogen forms.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "A current of 1.0 A flows for 965 seconds through a silver nitrate solution. Calculate the mass of silver deposited. (Ag⁺ + e⁻ → Ag; molar mass Ag = 108 g/mol; F = 96 500 C/mol.)", answerKey: "Q = I × t = 1.0 × 965 = 965 C. Moles of electrons = 965 ÷ 96 500 = 0.0100 mol. Ag⁺ + e⁻ → Ag, so moles Ag = 0.0100 mol. Mass = 0.0100 × 108 = 1.08 g. Award marks for the charge, moles of electrons, and mass 1.08 g.", marks: 3 },
        { type: "ESSAY", prompt: "State Faraday's two laws of electrolysis and explain, with the aid of a calculation, how the mass of product deposited depends on the current, the time, and the number of electrons in the electrode reaction.", answerKey: "A full answer states Faraday's first law (the mass produced at an electrode is proportional to the quantity of charge passed, Q = It) and second law (for the same charge, the masses of different substances are proportional to their equivalent masses, molar mass ÷ electrons transferred). It should show a calculation such as: for a current I over time t, Q = It, moles of electrons = Q ÷ 96 500, and moles of product = (moles of electrons) ÷ (electrons per ion), so mass = moles × molar mass. This shows the mass rises with both current and time (both increase the charge) and depends on the number of electrons in the electrode equation. Award marks for both laws and a correct worked demonstration of the dependencies.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (OpenStax Chemistry) — 17.5 Batteries and Fuel Cells (https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)/17%3A_Electrochemistry/17.05%3A_Batteries_and_Fuel_Cells)
      slug: "batteries",
      title: "Batteries",
      objective:
        "By the end of the topic, learners should be able to distinguish primary and secondary cells and describe the Daniell cell, dry cell, lead-acid battery and fuel cells. (MoE Grade 11 Period IV, CONTENTS 6.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- A **battery** is a practical galvanic cell (or set of cells) used as a portable source of electricity.
- **This topic:** primary and secondary cells and important examples.

## Primary and secondary cells

- **Primary cell** — **not rechargeable**; used once and discarded (the reaction cannot easily be reversed). Example: the **dry cell**.
- **Secondary cell** — **rechargeable**; the reaction can be reversed by passing current back through it. Example: the **lead-acid battery**.

## Important cells

| Cell | Type | Notes / overall reaction |
|---|---|---|
| Daniell cell | primary | Zn + Cu²⁺ → Zn²⁺ + Cu; about 1.1 V |
| Dry cell (zinc-carbon) | primary | Zn + 2MnO₂ → ZnO + Mn₂O₃; about 1.5 V |
| Lead-acid battery | secondary | Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O; 6 cells give 12 V |
| Fuel cell (H₂/O₂) | continuous | 2H₂ + O₂ → 2H₂O; only water as waste |

## Fuel cells

- A **fuel cell** produces electricity continuously as long as fuel (e.g. hydrogen) and oxygen are supplied.
- The hydrogen-oxygen fuel cell's only product is **water**, so it is clean and efficient.

## Common errors and misconceptions

- **All batteries are rechargeable** — only secondary cells can be recharged.
- **A fuel cell stores charge** — it converts a continuously supplied fuel, it does not store energy like a battery.
- **The lead-acid battery is a primary cell** — it is a rechargeable secondary cell.`,
      workedExample: `**Task.** Classify each of the following as a primary or secondary cell and give one property of each: (a) the dry cell, (b) the lead-acid battery, and describe the special feature of a hydrogen-oxygen fuel cell.

**(a) The dry cell**
- It **cannot be recharged**, so it is a **primary cell**.
- Property: gives about 1.5 V; the zinc case is the negative electrode; overall Zn + 2MnO₂ → ZnO + Mn₂O₃.

**(b) The lead-acid battery**
- It **can be recharged** by passing current back through it, so it is a **secondary cell**.
- Property: six cells give 12 V; used in cars; overall discharge Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O.

**Fuel cell feature**
- A hydrogen-oxygen fuel cell produces electricity **continuously** while H₂ and O₂ are supplied, and its **only product is water** (2H₂ + O₂ → 2H₂O), making it clean.

**Conclusion.** The dry cell is a primary (non-rechargeable) cell, the lead-acid battery is a secondary (rechargeable) cell, and a fuel cell runs continuously on supplied fuel producing only water.`,
      quiz: [
        { prompt: "A primary cell is…", options: ["not rechargeable", "always rechargeable", "a fuel cell", "an electrolytic cell"], correctIndex: 0, explanation: "Primary cells are used once." },
        { prompt: "A secondary cell is…", options: ["rechargeable", "not rechargeable", "a resistor", "a salt bridge"], correctIndex: 0, explanation: "Secondary cells can be recharged." },
        { prompt: "The dry cell is a … cell.", options: ["primary", "secondary", "fuel", "electrolytic"], correctIndex: 0, explanation: "The dry cell cannot be recharged." },
        { prompt: "The lead-acid battery is a … cell.", options: ["secondary", "primary", "fuel", "concentration"], correctIndex: 0, explanation: "It is rechargeable." },
        { prompt: "A car battery (lead-acid, 6 cells) gives about…", options: ["12 V", "1.5 V", "1.1 V", "230 V"], correctIndex: 0, explanation: "6 × ~2 V = 12 V." },
        { prompt: "The dry cell gives about…", options: ["1.5 V", "12 V", "0 V", "100 V"], correctIndex: 0, explanation: "A zinc-carbon dry cell gives ~1.5 V." },
        { prompt: "The Daniell cell overall reaction is Zn + Cu²⁺ → …", options: ["Zn²⁺ + Cu", "ZnCu", "Zn + Cu", "Cu²⁺ + Zn"], correctIndex: 0, explanation: "Zinc reduces copper ions." },
        { prompt: "A fuel cell produces electricity as long as … are supplied.", options: ["fuel and oxygen", "salt bridges", "electrodes", "batteries"], correctIndex: 0, explanation: "Fuel and oxygen are fed in continuously." },
        { prompt: "The only product of a hydrogen-oxygen fuel cell is…", options: ["water", "carbon dioxide", "hydrogen", "acid"], correctIndex: 0, explanation: "2H₂ + O₂ → 2H₂O." },
        { prompt: "In a dry cell, the zinc case acts as the…", options: ["negative electrode", "positive electrode", "salt bridge", "electrolyte"], correctIndex: 0, explanation: "Zinc is oxidised (negative electrode)." },
        { prompt: "Which battery can be recharged?", options: ["lead-acid", "dry cell", "Daniell cell", "simple zinc-carbon"], correctIndex: 0, explanation: "Lead-acid is a secondary cell." },
        { prompt: "The lead-acid battery uses which electrolyte?", options: ["sulfuric acid", "sodium chloride", "pure water", "ammonia"], correctIndex: 0, explanation: "It uses dilute sulfuric acid." },
        { prompt: "A battery is essentially a practical … cell.", options: ["galvanic", "electrolytic", "concentration only", "electrolysis"], correctIndex: 0, explanation: "Batteries are galvanic cells used for power." },
        { prompt: "Recharging a secondary cell reverses the … reaction.", options: ["cell", "combustion", "neutralisation", "precipitation"], correctIndex: 0, explanation: "Charging drives the reaction backwards." },
        { prompt: "Which is a clean energy source producing only water?", options: ["hydrogen fuel cell", "dry cell", "lead-acid battery", "Daniell cell"], correctIndex: 0, explanation: "H₂/O₂ fuel cell gives only water." },
        { prompt: "A fuel cell differs from a battery because it…", options: ["is fed fuel continuously", "stores all its energy inside", "cannot make electricity", "needs no oxygen"], correctIndex: 0, explanation: "Fuel is supplied, not stored." },
        { prompt: "The lead-acid battery discharge produces…", options: ["lead sulfate and water", "lead oxide only", "hydrogen gas", "chlorine"], correctIndex: 0, explanation: "PbSO₄ and water form on discharge." },
        { prompt: "The Daniell cell voltage is about…", options: ["1.1 V", "12 V", "0.1 V", "100 V"], correctIndex: 0, explanation: "About 1.1 V." },
        { prompt: "A non-rechargeable torch battery is a … cell.", options: ["primary", "secondary", "fuel", "electrolytic"], correctIndex: 0, explanation: "Once used, it is discarded." },
        { prompt: "Which converts chemical energy from a continuously supplied fuel into electricity?", options: ["fuel cell", "dry cell", "lead-acid battery", "electrolytic cell"], correctIndex: 0, explanation: "A fuel cell uses supplied fuel." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between a primary cell and a secondary cell, giving one example of each.", answerKey: "A primary cell cannot be recharged and is discarded after use (e.g. the dry cell / zinc-carbon cell). A secondary cell is rechargeable — its reaction can be reversed by passing current back through it (e.g. the lead-acid battery). Award marks for the distinction and an example of each.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The lead-acid battery used in cars is best described as a:", options: ["secondary (rechargeable) cell", "primary (non-rechargeable) cell", "fuel cell", "electrolytic cell"], correctIndex: 0, answerKey: "It is a rechargeable secondary cell.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The only product of a hydrogen-oxygen fuel cell is:", options: ["water", "carbon dioxide", "sulfur dioxide", "hydrogen peroxide"], correctIndex: 0, answerKey: "2H₂ + O₂ → 2H₂O, so only water is produced.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain how a fuel cell differs from an ordinary battery.", answerKey: "An ordinary battery stores a fixed amount of chemical energy and stops when the reactants are used up (a primary cell) or must be recharged (a secondary cell). A fuel cell is supplied continuously with fuel (e.g. hydrogen) and oxygen from outside, so it produces electricity for as long as the fuel is fed in and does not need recharging; the hydrogen-oxygen fuel cell also produces only water. Award marks for the continuous fuel supply and the contrast with stored/rechargeable energy.", marks: 3 },
        { type: "ESSAY", prompt: "Describe, with examples and overall reactions where possible, the difference between primary cells, secondary cells and fuel cells as sources of electrical energy.", answerKey: "A full answer explains: primary cells are non-rechargeable galvanic cells used once (e.g. the dry cell, Zn + 2MnO₂ → ZnO + Mn₂O₃, ~1.5 V; or the Daniell cell, Zn + Cu²⁺ → Zn²⁺ + Cu, ~1.1 V). Secondary cells are rechargeable — the reaction is reversed by passing current back through (e.g. the lead-acid battery, Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O on discharge; 12 V from six cells). Fuel cells produce electricity continuously from an externally supplied fuel and oxygen rather than stored reactants (e.g. the hydrogen-oxygen fuel cell, 2H₂ + O₂ → 2H₂O, producing only water). Award marks for the three categories with correct examples/reactions and the recharge/continuous-supply distinctions.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (OpenStax Chemistry) — 17.6 Corrosion (https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)/17%3A_Electrochemistry/17.06%3A_Corrosion)
      slug: "corrosion-of-metals",
      title: "Corrosion of Metals",
      objective:
        "By the end of the topic, learners should be able to explain the electrochemical rusting of iron and describe methods of preventing corrosion. (MoE Grade 11 Period IV, CONTENTS 7.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- **Corrosion** is the slow destruction of a metal by an electrochemical reaction with its surroundings.
- **This topic:** the rusting of iron and how corrosion is prevented.

## Corrosion as an electrochemical process

- Corrosion is an unwanted **redox** reaction in which a metal is **oxidised**.
- The most familiar example is the **rusting** of iron, which needs both **water and oxygen**.

## The rusting of iron

- **Anode (oxidation):** Fe → Fe²⁺ + 2e⁻ (iron dissolves).
- **Cathode (reduction):** O₂ + 4H⁺ + 4e⁻ → 2H₂O (oxygen is reduced).
- **Overall:** 2Fe + O₂ + 4H⁺ → 2Fe²⁺ + 2H₂O; the Fe²⁺ is then further oxidised to **hydrated iron(III) oxide (rust)**.
- Rust flakes off, exposing fresh metal, so rusting continues.

## Preventing corrosion

| Method | How it works |
|---|---|
| Painting / coating | keeps water and oxygen off the metal |
| Galvanising (zinc coat) | zinc corrodes in preference to iron (sacrificial) |
| Sacrificial protection | a more reactive metal (Zn or Mg) is connected and corrodes instead |
| Cathodic protection | the object is made the cathode so it is not oxidised |
| Alloying (stainless steel) | chromium forms a protective oxide layer |

## Common errors and misconceptions

- **Rusting needs only oxygen** — both **water and oxygen** are required.
- **Galvanising just covers the iron** — even if scratched, the zinc still protects the iron by corroding first (sacrificial).
- **Any coating stops rust forever** — a scratched paint layer lets water and oxygen back in.`,
      workedExample: `**Task.** Explain, using half-reactions, why iron rusts, and describe how galvanising (coating with zinc) protects iron even if the coating is scratched.

**Step 1 — Why iron rusts**
- Iron is oxidised at anodic areas: Fe → Fe²⁺ + 2e⁻.
- Oxygen (dissolved in water) is reduced at cathodic areas: O₂ + 4H⁺ + 4e⁻ → 2H₂O.
- Both **water and oxygen** are needed; the Fe²⁺ is further oxidised to hydrated iron(III) oxide, which is rust.

**Step 2 — How galvanising protects the iron**
- Zinc is **more reactive** than iron (more easily oxidised).
- When the zinc-coated iron is exposed, the **zinc corrodes in preference** to the iron: Zn → Zn²⁺ + 2e⁻.
- Even if the coating is **scratched**, the zinc still gives up its electrons first, so the iron is protected — this is **sacrificial protection**.

**Conclusion.** Iron rusts because it is oxidised while oxygen is reduced in the presence of water; galvanising protects iron because the more reactive zinc corrodes sacrificially, shielding the iron even where the coating is broken.`,
      quiz: [
        { prompt: "Corrosion is the destruction of a metal by an … process.", options: ["electrochemical (redox)", "physical melting", "colour", "boiling"], correctIndex: 0, explanation: "Corrosion is an unwanted redox reaction." },
        { prompt: "The rusting of iron needs water and…", options: ["oxygen", "nitrogen", "carbon dioxide", "argon"], correctIndex: 0, explanation: "Both water and oxygen are required." },
        { prompt: "During rusting, iron is…", options: ["oxidised", "reduced", "melted", "neutralised"], correctIndex: 0, explanation: "Fe → Fe²⁺ + 2e⁻ (oxidation)." },
        { prompt: "The anode reaction in rusting is…", options: ["Fe → Fe²⁺ + 2e⁻", "O₂ + 4e⁻ → 2O²⁻", "Fe²⁺ → Fe", "2H⁺ → H₂"], correctIndex: 0, explanation: "Iron loses electrons at anodic areas." },
        { prompt: "The cathode reaction in rusting reduces…", options: ["oxygen", "iron", "hydrogen gas", "carbon"], correctIndex: 0, explanation: "O₂ is reduced to water." },
        { prompt: "Rust is hydrated iron(III)…", options: ["oxide", "chloride", "sulfate", "carbonate"], correctIndex: 0, explanation: "Rust is hydrated Fe₂O₃." },
        { prompt: "Coating iron with zinc is called…", options: ["galvanising", "smelting", "annealing", "quenching"], correctIndex: 0, explanation: "Galvanising uses a zinc coat." },
        { prompt: "In galvanising, the zinc corrodes in … to the iron.", options: ["preference", "opposition", "no relation", "reverse"], correctIndex: 0, explanation: "Zinc is sacrificed first." },
        { prompt: "Sacrificial protection uses a … reactive metal.", options: ["more", "less", "coloured", "heavier only"], correctIndex: 0, explanation: "A more reactive metal corrodes instead." },
        { prompt: "Cathodic protection makes the object the…", options: ["cathode", "anode", "electrolyte", "wire"], correctIndex: 0, explanation: "As the cathode, it is not oxidised." },
        { prompt: "Stainless steel resists rust because it contains…", options: ["chromium", "sodium", "carbon only", "sulfur"], correctIndex: 0, explanation: "Chromium forms a protective oxide." },
        { prompt: "Painting prevents rust by keeping out water and…", options: ["oxygen", "nitrogen", "argon", "light"], correctIndex: 0, explanation: "It blocks the reactants." },
        { prompt: "Rust flakes off, which means fresh metal is…", options: ["exposed and rusts further", "protected", "cooled", "coloured"], correctIndex: 0, explanation: "Unlike a patina, rust does not protect." },
        { prompt: "Which metal is commonly used for sacrificial protection of iron?", options: ["zinc or magnesium", "gold", "copper", "silver"], correctIndex: 0, explanation: "More reactive Zn or Mg is used." },
        { prompt: "A scratched galvanised surface still protects the iron because zinc is…", options: ["more reactive and corrodes first", "waterproof only", "coloured", "heavier"], correctIndex: 0, explanation: "Sacrificial protection continues when scratched." },
        { prompt: "Corrosion is an example of a … reaction.", options: ["redox", "acid-base", "precipitation", "combustion of fuel"], correctIndex: 0, explanation: "Metal oxidation is a redox process." },
        { prompt: "Why does a scratched painted surface still rust?", options: ["water and oxygen reach the metal", "paint adds iron", "paint is a metal", "it does not rust"], correctIndex: 0, explanation: "The broken coating lets reactants in." },
        { prompt: "Connecting iron to a block of magnesium is an example of…", options: ["sacrificial/cathodic protection", "galvanising", "electroplating", "smelting"], correctIndex: 0, explanation: "Magnesium corrodes instead of the iron." },
        { prompt: "The overall rusting reaction produces Fe²⁺ and…", options: ["water", "hydrogen", "chlorine", "carbon dioxide"], correctIndex: 0, explanation: "2Fe + O₂ + 4H⁺ → 2Fe²⁺ + 2H₂O." },
        { prompt: "Which is NOT a method of preventing rust?", options: ["adding more water", "painting", "galvanising", "cathodic protection"], correctIndex: 0, explanation: "Water promotes rust, not prevention." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the two substances needed for iron to rust and write the anode (oxidation) half-reaction.", answerKey: "Rusting needs both water and oxygen. The anode (oxidation) half-reaction is Fe → Fe²⁺ + 2e⁻. Award marks for naming water and oxygen and the correct half-reaction.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Galvanising protects iron from rusting because zinc:", options: ["is more reactive and corrodes in preference to the iron", "is waterproof only", "is heavier than iron", "reacts with rust"], correctIndex: 0, answerKey: "Zinc is more reactive and corrodes sacrificially, protecting the iron.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Which of the following is NOT a method of preventing corrosion?", options: ["keeping the metal wet", "painting", "galvanising", "cathodic protection"], correctIndex: 0, answerKey: "Water promotes corrosion, so keeping the metal wet does not prevent it.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain why a galvanised iron object continues to be protected from rust even after the zinc coating is scratched.", answerKey: "Zinc is more reactive (more easily oxidised) than iron. Even where the coating is scratched and the iron is exposed, the zinc still gives up its electrons first and corrodes in preference to the iron (sacrificial protection), so the iron is not oxidised until the zinc is used up. Award marks for the greater reactivity of zinc and the sacrificial protection mechanism.", marks: 3 },
        { type: "ESSAY", prompt: "Explain the electrochemical process by which iron rusts, and describe three different methods used to prevent corrosion, explaining how each works.", answerKey: "A full answer explains that rusting is an electrochemical redox process needing water and oxygen: iron is oxidised at anodic areas (Fe → Fe²⁺ + 2e⁻) while oxygen is reduced at cathodic areas (O₂ + 4H⁺ + 4e⁻ → 2H₂O), and the Fe²⁺ is further oxidised to hydrated iron(III) oxide (rust), which flakes off to expose fresh metal. Three prevention methods with mechanisms: painting/coating keeps water and oxygen off the metal; galvanising/sacrificial protection uses a more reactive metal (zinc or magnesium) that corrodes in preference to the iron even if scratched; cathodic protection makes the iron the cathode so it is not oxidised; alloying to stainless steel forms a protective chromium oxide layer. Award marks for the rusting mechanism (half-reactions and need for water/oxygen) and three correct prevention methods with explanations.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Mount Royal University, Chem 1202) — 6.8 Industrial Electrolysis Processes (https://chem.libretexts.org/Courses/Mount_Royal_University/Chem_1202/Unit_6%3A_Electrochemistry/6.8%3A_Industrial_Electrolysis_Processes)
      slug: "practical-applications-of-electrolysis",
      title: "Practical Applications of Electrolysis",
      objective:
        "By the end of the topic, learners should be able to describe practical applications of electrolysis including electroplating, electrorefining and the extraction of reactive metals. (MoE Grade 11 Period IV, CONTENTS 8.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- Electrolysis has many industrial uses beyond the laboratory.
- **This topic:** electroplating, electrorefining, and metal extraction.

## Electroplating

- **Electroplating** — coating an object with a thin layer of metal by electrolysis.
- The object to be plated is made the **cathode**; the plating metal is the **anode**; the electrolyte contains ions of the plating metal.
- Example: silver-plating a spoon — the spoon is the cathode, a silver anode dissolves, and Ag⁺ ions are reduced onto the spoon.
- Used to improve appearance, resist corrosion or reduce contact resistance (e.g. gold-plated connectors).

## Electrorefining (purifying metals)

- **Electrorefining** purifies a metal such as copper.
- The **impure metal is the anode**; a thin pure sheet is the **cathode**; a solution of the metal ions is the electrolyte.
- The anode dissolves (Cu → Cu²⁺ + 2e⁻); pure copper deposits on the cathode (Cu²⁺ + 2e⁻ → Cu); impurities such as silver and gold fall as **anode sludge**.

## Extraction of reactive metals

- Very reactive metals (sodium, aluminium) are obtained by **electrolysis of their molten compounds** because they cannot be displaced easily by cheaper reducing agents.
- Aluminium is extracted by electrolysis of molten aluminium oxide (in cryolite).

## Common errors and misconceptions

- **The object being plated is the anode** — it is the **cathode**; the plating metal is the anode.
- **Electrorefining uses a pure anode** — the anode is the **impure** metal; the cathode is pure.
- **Reactive metals are extracted from solution** — they are extracted from **molten** compounds, not aqueous solutions.`,
      workedExample: `**Task.** Describe how to electroplate an iron spoon with silver, stating which electrode the spoon is, what the anode and electrolyte are, and the electrode reactions.

**Step 1 — Set up the cell**
- The **spoon** (the object to be plated) is made the **cathode** (negative).
- The **anode** is a bar of pure **silver**.
- The **electrolyte** is a solution containing silver ions (e.g. silver nitrate).

**Step 2 — The electrode reactions**
- At the anode, silver dissolves: Ag → Ag⁺ + e⁻ (keeping the Ag⁺ concentration topped up).
- At the cathode, silver ions are reduced onto the spoon: Ag⁺ + e⁻ → Ag.

**Step 3 — The result**
- A thin, even layer of silver builds up on the spoon.

**Conclusion.** To silver-plate the spoon, it is the cathode, the silver bar is the anode, and a silver-salt solution is the electrolyte; silver dissolves from the anode and deposits on the spoon at the cathode.`,
      quiz: [
        { prompt: "Electroplating coats an object with a thin layer of…", options: ["metal", "plastic", "salt", "oxide gas"], correctIndex: 0, explanation: "A metal layer is deposited." },
        { prompt: "In electroplating, the object to be plated is the…", options: ["cathode", "anode", "electrolyte", "salt bridge"], correctIndex: 0, explanation: "The object is the cathode." },
        { prompt: "In electroplating, the plating metal is the…", options: ["anode", "cathode", "wire", "salt bridge"], correctIndex: 0, explanation: "The plating metal is the anode." },
        { prompt: "In silver-plating, the electrolyte contains … ions.", options: ["silver", "sodium", "chloride only", "sulfate only"], correctIndex: 0, explanation: "It contains ions of the plating metal." },
        { prompt: "Electrorefining is used to … a metal.", options: ["purify", "melt", "colour", "burn"], correctIndex: 0, explanation: "It purifies metals like copper." },
        { prompt: "In copper electrorefining, the impure copper is the…", options: ["anode", "cathode", "electrolyte", "salt bridge"], correctIndex: 0, explanation: "The impure metal is the anode." },
        { prompt: "In copper electrorefining, pure copper is deposited on the…", options: ["cathode", "anode", "wire", "sludge"], correctIndex: 0, explanation: "Pure copper forms at the cathode." },
        { prompt: "Impurities like silver and gold collect as…", options: ["anode sludge", "cathode metal", "gas", "electrolyte"], correctIndex: 0, explanation: "They fall as anode sludge." },
        { prompt: "Very reactive metals are extracted by electrolysis of their…", options: ["molten compounds", "aqueous solutions", "oxides in air", "alloys"], correctIndex: 0, explanation: "Molten compounds are electrolysed." },
        { prompt: "Aluminium is extracted from molten aluminium oxide dissolved in…", options: ["cryolite", "water", "acid", "salt water"], correctIndex: 0, explanation: "Cryolite lowers the melting point." },
        { prompt: "Electroplating can improve an object's…", options: ["appearance and corrosion resistance", "mass number", "temperature", "colour of light"], correctIndex: 0, explanation: "It protects and beautifies surfaces." },
        { prompt: "At the cathode during silver-plating, the reaction is…", options: ["Ag⁺ + e⁻ → Ag", "Ag → Ag⁺ + e⁻", "2Cl⁻ → Cl₂ + 2e⁻", "Cu → Cu²⁺"], correctIndex: 0, explanation: "Silver ions are reduced onto the object." },
        { prompt: "At the anode during silver-plating, the reaction is…", options: ["Ag → Ag⁺ + e⁻", "Ag⁺ + e⁻ → Ag", "O₂ + 4e⁻ → 2O²⁻", "Na⁺ + e⁻ → Na"], correctIndex: 0, explanation: "The silver anode dissolves." },
        { prompt: "Gold-plated electrical connectors use electroplating to reduce…", options: ["contact resistance", "mass", "colour", "temperature"], correctIndex: 0, explanation: "Gold gives low contact resistance." },
        { prompt: "The purpose of the metal anode in electroplating is to…", options: ["replace the ions deposited", "colour the object", "heat the solution", "act as a salt bridge"], correctIndex: 0, explanation: "It keeps the ion concentration constant." },
        { prompt: "Sodium metal is extracted by electrolysis of molten…", options: ["sodium chloride", "sodium chloride solution", "sodium oxide gas", "sea water"], correctIndex: 0, explanation: "Molten NaCl gives sodium at the cathode." },
        { prompt: "Reactive metals cannot be extracted from aqueous solution because … is discharged instead.", options: ["water/hydrogen", "the metal", "chlorine", "oxygen only"], correctIndex: 0, explanation: "Water is reduced in preference to reactive-metal ions." },
        { prompt: "Electrorefining gives copper of very high…", options: ["purity", "mass number", "colour", "temperature"], correctIndex: 0, explanation: "The product is high-purity copper." },
        { prompt: "Which is a practical application of electrolysis?", options: ["electroplating", "distillation", "filtration", "titration"], correctIndex: 0, explanation: "Electroplating uses electrolysis." },
        { prompt: "During electroplating, the ion concentration is kept steady by the … dissolving.", options: ["anode", "cathode", "wire", "salt bridge"], correctIndex: 0, explanation: "The metal anode replenishes the ions." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "In electroplating, state which electrode the object to be plated is, and what the anode and electrolyte should be.", answerKey: "The object to be plated is the cathode. The anode is made of the plating metal, and the electrolyte is a solution containing ions of the plating metal. Award marks for the cathode/object, the plating-metal anode, and the correct electrolyte.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "In the electrorefining of copper, the impure copper is used as the:", options: ["anode", "cathode", "electrolyte", "salt bridge"], correctIndex: 0, answerKey: "The impure metal is the anode; pure copper deposits at the cathode.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Very reactive metals such as sodium and aluminium are extracted by electrolysis of their:", options: ["molten compounds", "aqueous solutions", "solid oxides in air", "alloys"], correctIndex: 0, answerKey: "Reactive metals are extracted from molten compounds because water would be discharged from aqueous solution.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Write the anode and cathode reactions in the electrorefining of copper.", answerKey: "Anode (impure copper dissolves): Cu → Cu²⁺ + 2e⁻. Cathode (pure copper deposits): Cu²⁺ + 2e⁻ → Cu. Impurities such as silver and gold fall as anode sludge. Award marks for both correct electrode reactions.", marks: 2 },
        { type: "ESSAY", prompt: "Describe two practical applications of electrolysis (for example electroplating and electrorefining), explaining the arrangement of electrodes and electrolyte and the reactions involved in each.", answerKey: "A full answer describes electroplating: the object is the cathode, the plating metal is the anode, and the electrolyte contains ions of the plating metal; e.g. silver-plating — Ag → Ag⁺ + e⁻ at the anode and Ag⁺ + e⁻ → Ag at the cathode, giving a thin protective/decorative layer. It also describes electrorefining of copper: the impure copper is the anode, a thin pure sheet is the cathode, and a copper-salt solution is the electrolyte; the anode dissolves (Cu → Cu²⁺ + 2e⁻) and pure copper deposits at the cathode (Cu²⁺ + 2e⁻ → Cu), with impurities collecting as anode sludge. The extraction of reactive metals from molten compounds is an acceptable alternative application. Award marks for two applications with correct electrode/electrolyte arrangements and reactions.", marks: 6 },
      ],
    },
  ],
};
