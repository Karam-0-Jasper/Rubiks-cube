import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 10,
// Semester Two, Period VI: Oxidation-Reduction Reactions.
export const chemistryG10P6: PeriodContent = {
  grade: 10,
  number: 6,
  title: "Oxidation-Reduction Reactions",
  summary:
    "Period VI of the MoE Grade 10 Chemistry syllabus. Learners define oxidation and reduction in terms of oxygen, hydrogen and electron transfer, recognise them as a single redox reaction, identify oxidising and reducing agents, and connect redox to everyday processes such as rusting and combustion.",
  topics: [
    {
      slug: "oxidation-and-reduction",
      title: "Oxidation and Reduction",
      objective:
        "By the end of the topic, learners should be able to define oxidation and reduction in terms of oxygen, hydrogen and electrons, and identify each in a chemical reaction.",
      estimatedMinutes: 160,
      notes: `## Two processes that happen together

**Oxidation** and **reduction** are two chemical changes that always happen **together** — when one substance is oxidised, another is reduced. A reaction involving both is called a **redox reaction** (**red**uction–**ox**idation).

There are three ways to define oxidation and reduction — by oxygen, by hydrogen, and (most usefully) by electrons.

## Definition 1 — in terms of oxygen

- **Oxidation** is the **gain of oxygen**.
- **Reduction** is the **loss of oxygen**.

*Example:* when magnesium burns, 2Mg + O₂ → 2MgO. The magnesium **gains oxygen**, so it is **oxidised**.
*Example:* when copper oxide reacts with hydrogen, CuO + H₂ → Cu + H₂O. The copper oxide **loses oxygen**, so it is **reduced**.

## Definition 2 — in terms of hydrogen

- **Oxidation** is the **loss of hydrogen**.
- **Reduction** is the **gain of hydrogen**.

## Definition 3 — in terms of electrons (the most important)

- **Oxidation** is the **loss of electrons**.
- **Reduction** is the **gain of electrons**.

A helpful memory aid is **OIL RIG**:

> **O**xidation **I**s **L**oss (of electrons); **R**eduction **I**s **G**ain (of electrons).

*Example:* when sodium reacts with chlorine, sodium **loses** an electron (Na → Na⁺ + e⁻) — it is **oxidised** — while chlorine **gains** that electron (Cl + e⁻ → Cl⁻) — it is **reduced**. This connects redox directly to the ionic bonding you studied in Period IV.

## Oxidation and reduction happen together

In any redox reaction, the **electrons lost by one substance are gained by another**, so oxidation and reduction occur at the same time. You cannot have one without the other.

\`\`\`svg Electron transfer: one atom oxidised, one reduced
<svg viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An electron passing from one atom (oxidised) to another (reduced)">
  <circle cx="50" cy="45" r="24" fill="#fde68a" stroke="#92400e"/><text x="50" y="49" font-size="10" text-anchor="middle" fill="#451a03">Na</text>
  <circle cx="210" cy="45" r="24" fill="#bae6fd" stroke="#075985"/><text x="210" y="49" font-size="10" text-anchor="middle" fill="#082f49">Cl</text>
  <circle cx="82" cy="30" r="5" fill="#dc2626"/>
  <line x1="88" y1="32" x2="180" y2="42" stroke="#dc2626" stroke-width="1.5" marker-end="url(#e)"/>
  <text x="50" y="82" font-size="8" text-anchor="middle" fill="#92400e">loses e⁻ (oxidised)</text>
  <text x="210" y="82" font-size="8" text-anchor="middle" fill="#075985">gains e⁻ (reduced)</text>
  <defs><marker id="e" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/></marker></defs>
</svg>
\`\`\`

## Summary

| | Oxygen | Hydrogen | Electrons |
|---|---|---|---|
| **Oxidation** | gain O | lose H | **lose e⁻** |
| **Reduction** | lose O | gain H | **gain e⁻** |`,
      workedExample: `**Task.** For the reaction CuO + H₂ → Cu + H₂O:
(a) Which substance is oxidised and which is reduced, in terms of oxygen? (b) State the electron definitions of oxidation and reduction. (c) In the reaction of sodium with chlorine, which is oxidised?

**Part (a) — using oxygen**
- **CuO loses oxygen** (CuO → Cu), so copper oxide is **reduced**.
- **H₂ gains oxygen** (H₂ → H₂O), so hydrogen is **oxidised**.
Both happen together, so this is a **redox reaction**.

**Part (b) — electron definitions**
- **Oxidation is the loss of electrons.**
- **Reduction is the gain of electrons.**
(Remember **OIL RIG**: Oxidation Is Loss, Reduction Is Gain.)

**Part (c) — sodium and chlorine**
When sodium reacts with chlorine, **sodium loses an electron** (Na → Na⁺ + e⁻). Losing electrons is **oxidation**, so **sodium is oxidised** (and chlorine, which gains the electron, is reduced).

**Conclusion:** in CuO + H₂ → Cu + H₂O the copper oxide is reduced (loses oxygen) and hydrogen is oxidised (gains oxygen); using electrons, oxidation is loss and reduction is gain (OIL RIG); and in the sodium–chlorine reaction sodium loses an electron and is therefore oxidised.`,
      teachingTip:
        "OIL RIG is the single most valuable mnemonic in this topic — drill it until it is automatic. Teach all three definitions but stress that the electron definition is the most general (it works even when no oxygen is involved). Constantly repeat 'they always happen together' so learners never say a reaction is 'just oxidation'. Linking the sodium–chlorine electron transfer back to ionic bonding (Period IV) shows redox is the same idea seen from a new angle.",
      quiz: [
        {
          prompt: "A reaction involving both oxidation and reduction is called a…",
          options: ["redox reaction", "neutralisation", "precipitation", "combustion only"],
          correctIndex: 0,
          explanation: "Redox = reduction + oxidation.",
        },
        {
          prompt: "In terms of oxygen, oxidation is the…",
          options: ["gain of oxygen", "loss of oxygen", "gain of hydrogen", "loss of electrons only"],
          correctIndex: 0,
          explanation: "Oxidation = gain of oxygen.",
        },
        {
          prompt: "In terms of oxygen, reduction is the…",
          options: ["loss of oxygen", "gain of oxygen", "loss of hydrogen", "gain of electrons only"],
          correctIndex: 0,
          explanation: "Reduction = loss of oxygen.",
        },
        {
          prompt: "When magnesium burns to form MgO, the magnesium is…",
          options: ["oxidised (gains oxygen)", "reduced", "unchanged", "evaporated"],
          correctIndex: 0,
          explanation: "It gains oxygen, so it is oxidised.",
        },
        {
          prompt: "In CuO + H₂ → Cu + H₂O, the copper oxide is…",
          options: ["reduced (loses oxygen)", "oxidised", "unchanged", "evaporated"],
          correctIndex: 0,
          explanation: "CuO loses oxygen, so it is reduced.",
        },
        {
          prompt: "In terms of hydrogen, oxidation is the…",
          options: ["loss of hydrogen", "gain of hydrogen", "gain of oxygen", "gain of electrons"],
          correctIndex: 0,
          explanation: "Oxidation = loss of hydrogen.",
        },
        {
          prompt: "In terms of electrons, oxidation is the…",
          options: ["loss of electrons", "gain of electrons", "loss of protons", "gain of neutrons"],
          correctIndex: 0,
          explanation: "Oxidation Is Loss of electrons.",
        },
        {
          prompt: "In terms of electrons, reduction is the…",
          options: ["gain of electrons", "loss of electrons", "gain of oxygen", "loss of hydrogen"],
          correctIndex: 0,
          explanation: "Reduction Is Gain of electrons.",
        },
        {
          prompt: "The memory aid 'OIL RIG' stands for…",
          options: [
            "Oxidation Is Loss, Reduction Is Gain",
            "Oxygen In Liquids, Rust In Gas",
            "Only Iron Loses, Rust Is Good",
            "Oxidation In Light, Reduction In Grey",
          ],
          correctIndex: 0,
          explanation: "OIL RIG: Oxidation Is Loss; Reduction Is Gain (of electrons).",
        },
        {
          prompt: "When Na → Na⁺ + e⁻, the sodium is…",
          options: ["oxidised", "reduced", "unchanged", "neutralised"],
          correctIndex: 0,
          explanation: "It loses an electron, so it is oxidised.",
        },
        {
          prompt: "When Cl + e⁻ → Cl⁻, the chlorine is…",
          options: ["reduced", "oxidised", "unchanged", "evaporated"],
          correctIndex: 0,
          explanation: "It gains an electron, so it is reduced.",
        },
        {
          prompt: "Oxidation and reduction…",
          options: ["always happen together", "never happen together", "happen only in metals", "happen only in gases"],
          correctIndex: 0,
          explanation: "Electrons lost by one are gained by another.",
        },
        {
          prompt: "The electrons lost by the substance being oxidised are…",
          options: ["gained by the substance being reduced", "destroyed", "created", "lost forever"],
          correctIndex: 0,
          explanation: "They transfer to the reduced substance.",
        },
        {
          prompt: "Which definition of oxidation works even when no oxygen is involved?",
          options: ["loss of electrons", "gain of oxygen", "loss of oxygen", "gain of hydrogen"],
          correctIndex: 0,
          explanation: "The electron definition is the most general.",
        },
        {
          prompt: "In terms of hydrogen, reduction is the…",
          options: ["gain of hydrogen", "loss of hydrogen", "gain of oxygen", "loss of electrons"],
          correctIndex: 0,
          explanation: "Reduction = gain of hydrogen.",
        },
        {
          prompt: "If a substance gains oxygen, it has been…",
          options: ["oxidised", "reduced", "neutralised", "melted"],
          correctIndex: 0,
          explanation: "Gaining oxygen is oxidation.",
        },
        {
          prompt: "If an atom gains electrons, it has been…",
          options: ["reduced", "oxidised", "evaporated", "burned"],
          correctIndex: 0,
          explanation: "Gaining electrons is reduction.",
        },
        {
          prompt: "Redox reactions connect to ionic bonding because they involve…",
          options: ["transfer of electrons", "sharing of electrons only", "no electrons", "only oxygen"],
          correctIndex: 0,
          explanation: "Electron transfer underlies both.",
        },
        {
          prompt: "In 2Mg + O₂ → 2MgO, oxygen is…",
          options: ["reduced (it is gained by magnesium; oxygen itself gains electrons)", "oxidised", "unchanged", "evaporated"],
          correctIndex: 0,
          explanation: "Oxygen gains electrons from magnesium, so it is reduced.",
        },
        {
          prompt: "You cannot have oxidation without…",
          options: ["reduction", "combustion", "water", "heat"],
          correctIndex: 0,
          explanation: "The two always occur together.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define oxidation and reduction in terms of (a) oxygen and (b) electrons.",
          answerKey:
            "(a) Oxidation = gain of oxygen; reduction = loss of oxygen. (b) Oxidation = loss of electrons; reduction = gain of electrons. Award marks for both correct oxygen definitions and both correct electron definitions.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "'OIL RIG' reminds us that oxidation is…",
          options: [
            "loss of electrons, and reduction is gain",
            "gain of electrons, and reduction is loss",
            "gain of oxygen only",
            "loss of hydrogen only",
          ],
          correctIndex: 0,
          answerKey: "Oxidation Is Loss; Reduction Is Gain (of electrons).",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "In the reaction 2Mg + O₂ → 2MgO, state which element is oxidised and why.",
          answerKey:
            "Magnesium is oxidised because it gains oxygen (2Mg → 2MgO) — equivalently it loses electrons to form Mg²⁺. Award marks for identifying magnesium and giving a correct reason (gain of oxygen / loss of electrons).",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain why oxidation and reduction always occur together, using the reaction between sodium and chlorine as an example.",
          answerKey:
            "A strong answer explains that in a redox reaction electrons are transferred: the electrons lost by the substance being oxidised are gained by the substance being reduced, so one cannot happen without the other. In the sodium–chlorine reaction, sodium loses an electron (Na → Na⁺ + e⁻) and is oxidised, while chlorine gains that same electron (Cl + e⁻ → Cl⁻) and is reduced; the single electron lost by sodium is exactly the one gained by chlorine, so oxidation and reduction occur simultaneously. Award marks for the electron-transfer explanation and its correct application to the sodium–chlorine example.",
          marks: 5,
        },
      ],
    },
    {
      slug: "oxidising-reducing-agents",
      title: "Oxidising and Reducing Agents and Everyday Redox",
      objective:
        "By the end of the topic, learners should be able to identify oxidising and reducing agents in a reaction, and describe everyday examples of redox such as rusting, combustion and respiration.",
      estimatedMinutes: 150,
      notes: `## Oxidising and reducing agents

In a redox reaction, the two reactants play opposite roles:

- An **oxidising agent** is the substance that **causes oxidation** in another substance — and is **itself reduced** (it gains electrons / gives oxygen).
- A **reducing agent** is the substance that **causes reduction** in another substance — and is **itself oxidised** (it loses electrons / removes oxygen).

A useful way to remember it: the **oxidising agent is reduced**, and the **reducing agent is oxidised** — each agent does the opposite to itself of what it does to the other.

*Example:* in CuO + H₂ → Cu + H₂O:
- **CuO gives its oxygen** to hydrogen (so it oxidises the hydrogen) — CuO is the **oxidising agent** (and is itself reduced).
- **H₂ removes the oxygen** from CuO (so it reduces the copper oxide) — H₂ is the **reducing agent** (and is itself oxidised).

## Common oxidising and reducing agents

- **Oxidising agents:** oxygen, chlorine, and substances like potassium permanganate.
- **Reducing agents:** hydrogen, carbon (used to extract metals), and reactive metals.

## Everyday redox reactions

Redox is happening around us all the time:

- **Rusting of iron** — iron slowly reacts with **oxygen** (and water) to form **iron oxide (rust)**. The iron is **oxidised**; oxygen is the oxidising agent. Rusting damages tools, machines and buildings.
- **Combustion (burning)** — a fuel reacts rapidly with **oxygen**, releasing heat and light. The fuel is **oxidised**. (e.g. burning charcoal or petrol.)
- **Respiration** — in our cells, glucose reacts with oxygen to release energy — a slow oxidation, essentially "burning" food to power the body.
- **Corrosion of other metals**, the browning of a cut fruit, and the action of bleach are all redox processes.

## Preventing unwanted redox (rusting)

Because rusting is harmful, we try to prevent it by keeping **oxygen and water away** from iron:

- **Painting, oiling or greasing** the surface.
- **Galvanising** (coating iron with zinc).
- **Plating** with a less reactive metal (e.g. chromium, tin).

## Why redox matters

Redox reactions run **batteries**, extract **metals** from their ores, power **respiration** and **combustion**, and cause **rusting**. Understanding oxidation and reduction explains a huge range of everyday and industrial chemistry.`,
      workedExample: `**Task.** In the reaction CuO + H₂ → Cu + H₂O:
(a) Identify the oxidising agent and the reducing agent, with reasons. (b) Explain, as a redox process, why iron rusts and give one way to prevent it.

**Part (a) — the agents**
- **Oxidising agent: CuO (copper oxide).** It **gives its oxygen** to the hydrogen, oxidising the hydrogen; in doing so CuO is itself **reduced** (loses oxygen). The oxidising agent is the one that is reduced.
- **Reducing agent: H₂ (hydrogen).** It **removes the oxygen** from the copper oxide, reducing it; in doing so H₂ is itself **oxidised** (gains oxygen). The reducing agent is the one that is oxidised.

**Part (b) — rusting as redox, and prevention**
**Rusting** is a redox reaction: iron reacts with **oxygen** (in the presence of water) to form **iron oxide (rust)**. The iron **gains oxygen / loses electrons**, so the iron is **oxidised**, and oxygen (the oxidising agent) is reduced.

To **prevent** rusting, keep oxygen and water away from the iron — for example by **painting, oiling/greasing**, or **galvanising** (coating with zinc), or plating with a less reactive metal.

**Conclusion:** CuO is the oxidising agent (itself reduced) and H₂ the reducing agent (itself oxidised); and rusting is the oxidation of iron by oxygen, which we prevent by keeping oxygen and water away with coatings such as paint, oil or zinc.`,
      teachingTip:
        "The rule that trips learners is that the oxidising agent is itself REDUCED (and vice versa) — the agent does the opposite to itself of what it does to its partner. Teach it as a fixed pair: 'oxidising agent → reduced; reducing agent → oxidised'. Ground the topic in the everyday — rusting, burning, respiration are all oxidation by oxygen — and the rust-prevention methods (paint, oil, galvanise) are a reliable exam application worth drilling.",
      quiz: [
        {
          prompt: "An oxidising agent causes … in another substance.",
          options: ["oxidation", "reduction", "melting", "freezing"],
          correctIndex: 0,
          explanation: "An oxidising agent oxidises another substance.",
        },
        {
          prompt: "An oxidising agent is itself…",
          options: ["reduced", "oxidised", "unchanged", "evaporated"],
          correctIndex: 0,
          explanation: "It gains electrons / gives oxygen, so it is reduced.",
        },
        {
          prompt: "A reducing agent causes … in another substance.",
          options: ["reduction", "oxidation", "boiling", "condensation"],
          correctIndex: 0,
          explanation: "A reducing agent reduces another substance.",
        },
        {
          prompt: "A reducing agent is itself…",
          options: ["oxidised", "reduced", "unchanged", "frozen"],
          correctIndex: 0,
          explanation: "It loses electrons / removes oxygen, so it is oxidised.",
        },
        {
          prompt: "In CuO + H₂ → Cu + H₂O, the oxidising agent is…",
          options: ["CuO", "H₂", "Cu", "H₂O"],
          correctIndex: 0,
          explanation: "CuO gives oxygen to H₂ and is itself reduced.",
        },
        {
          prompt: "In CuO + H₂ → Cu + H₂O, the reducing agent is…",
          options: ["H₂", "CuO", "Cu", "H₂O"],
          correctIndex: 0,
          explanation: "H₂ removes oxygen from CuO and is itself oxidised.",
        },
        {
          prompt: "Which is a common oxidising agent?",
          options: ["oxygen", "hydrogen", "carbon", "a reactive metal"],
          correctIndex: 0,
          explanation: "Oxygen is a typical oxidising agent.",
        },
        {
          prompt: "Which is a common reducing agent?",
          options: ["hydrogen", "oxygen", "chlorine", "potassium permanganate"],
          correctIndex: 0,
          explanation: "Hydrogen (and carbon) are reducing agents.",
        },
        {
          prompt: "Rusting is the reaction of iron with…",
          options: ["oxygen and water", "hydrogen only", "carbon only", "salt only"],
          correctIndex: 0,
          explanation: "Iron + oxygen (+ water) → rust.",
        },
        {
          prompt: "In rusting, the iron is…",
          options: ["oxidised", "reduced", "unchanged", "melted"],
          correctIndex: 0,
          explanation: "Iron gains oxygen / loses electrons — it is oxidised.",
        },
        {
          prompt: "Rust is a form of iron…",
          options: ["oxide", "chloride", "sulfate", "carbonate"],
          correctIndex: 0,
          explanation: "Rust is iron oxide.",
        },
        {
          prompt: "Combustion (burning) is the rapid reaction of a fuel with…",
          options: ["oxygen", "hydrogen", "nitrogen", "water"],
          correctIndex: 0,
          explanation: "Fuels burn by reacting with oxygen.",
        },
        {
          prompt: "In combustion, the fuel is…",
          options: ["oxidised", "reduced", "frozen", "unchanged"],
          correctIndex: 0,
          explanation: "The fuel gains oxygen and is oxidised.",
        },
        {
          prompt: "Respiration in cells is essentially a slow…",
          options: ["oxidation of glucose", "reduction of oxygen only", "freezing", "melting"],
          correctIndex: 0,
          explanation: "Glucose is oxidised to release energy.",
        },
        {
          prompt: "Which method helps PREVENT rusting?",
          options: ["painting or oiling the iron", "adding water", "adding more oxygen", "heating in air"],
          correctIndex: 0,
          explanation: "Coatings keep oxygen and water away.",
        },
        {
          prompt: "Coating iron with zinc to prevent rust is called…",
          options: ["galvanising", "boiling", "distillation", "filtration"],
          correctIndex: 0,
          explanation: "Galvanising uses a zinc coating.",
        },
        {
          prompt: "The oxidising agent does what to itself compared with the other substance?",
          options: ["the opposite (it is reduced)", "the same (it is oxidised)", "nothing", "it disappears"],
          correctIndex: 0,
          explanation: "It oxidises the other but is itself reduced.",
        },
        {
          prompt: "Carbon is used in industry as a reducing agent to…",
          options: ["extract metals from their ores", "make oxygen", "cause rust", "cool furnaces"],
          correctIndex: 0,
          explanation: "Carbon reduces metal oxides to metals.",
        },
        {
          prompt: "Which everyday process is NOT primarily a redox reaction?",
          options: ["dissolving sugar in water", "burning charcoal", "iron rusting", "respiration"],
          correctIndex: 0,
          explanation: "Dissolving is physical, not a redox reaction.",
        },
        {
          prompt: "Redox reactions are used to run…",
          options: ["batteries", "thermometers", "rulers", "microscopes"],
          correctIndex: 0,
          explanation: "Batteries work by redox reactions.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define an oxidising agent and a reducing agent, and state what happens to each itself.",
          answerKey:
            "An oxidising agent causes oxidation in another substance and is itself reduced (gains electrons / gives oxygen); a reducing agent causes reduction in another substance and is itself oxidised (loses electrons / removes oxygen). Award marks for both definitions and what happens to each agent.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "In the rusting of iron, which substance is the oxidising agent?",
          options: ["oxygen", "iron", "rust", "water only"],
          correctIndex: 0,
          answerKey: "Oxygen oxidises the iron, so oxygen is the oxidising agent.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give two everyday examples of redox reactions and two methods of preventing rust.",
          answerKey:
            "Redox examples (any two): rusting of iron, combustion/burning of fuel, respiration, corrosion of metals, browning of cut fruit. Rust-prevention methods (any two): painting, oiling/greasing, galvanising (zinc coating), plating with a less reactive metal. Award marks for two valid examples and two valid prevention methods.",
          marks: 4,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain, using the idea of oxidation, why iron rusts and how rusting can be prevented, and why rusting is a problem.",
          answerKey:
            "A strong answer explains that rusting is a redox reaction in which iron reacts with oxygen (in the presence of water) to form iron oxide (rust); the iron is oxidised (gains oxygen / loses electrons) and oxygen is the oxidising agent. Rusting is a problem because it weakens and destroys iron and steel objects — tools, machines, vehicles and buildings. It can be prevented by keeping oxygen and water away from the iron — for example by painting, oiling or greasing the surface, galvanising (coating with zinc), or plating with a less reactive metal. Award marks for the oxidation explanation, why it is a problem, and at least two prevention methods.",
          marks: 5,
        },
      ],
    },
  ],
};
