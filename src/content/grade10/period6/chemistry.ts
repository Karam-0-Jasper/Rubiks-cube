import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 10,
// Semester Two, Period VI: Oxidation-Reduction Reactions.
export const chemistryG10P6: PeriodContent = {
  grade: 10,
  number: 6,
  title: "Oxidation-Reduction Reactions",
  summary:
    "Period VI of the MoE Grade 10 Chemistry syllabus. Learners define oxidation and reduction in terms of oxygen, hydrogen and electron transfer, recognise them as a single redox reaction, identify oxidising and reducing agents, assign oxidation numbers using the standard rules, and balance simple redox equations by the half-reaction method in both acidic and basic solution.",
  topics: [
    {
      // source: LibreTexts — Definitions of Oxidation and Reduction (https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Electrochemistry/Redox_Chemistry/Definitions_of_Oxidation_and_Reduction)
      slug: "oxidation-and-reduction",
      title: "Oxidation and Reduction",
      objective:
        "By the end of the topic, learners should be able to define oxidation and reduction in terms of oxygen, hydrogen and electrons, and identify each in a chemical reaction.",
      estimatedMinutes: 160,
      notes: `## Introduction

- **Redox reaction** — electrons pass from one substance to another (rusting, burning, batteries, respiration).
- So much of chemistry and life is redox, so recognising **oxidation** and **reduction** is a key skill.
- **This topic:** the three definitions of oxidation and reduction, and how to spot each in a reaction.

## Two processes that happen together

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
| **Reduction** | lose O | gain H | **gain e⁻** |

Remember **OIL RIG**: **O**xidation **I**s **L**oss (of electrons), **R**eduction **I**s **G**ain.

## Common errors and misconceptions

- **Thinking reduction means "getting smaller"** — in chemistry, **reduction** means **gaining electrons** (or losing oxygen), nothing to do with size.
- **Forgetting the two go together** — you cannot have oxidation without reduction; the electrons lost by one substance are gained by another (**redox**).
- **Mixing up the electron rule** — use **OIL RIG**: Oxidation Is Loss, Reduction Is Gain (of electrons).
- **Defining redox only by oxygen** — the *electron* definition is the most general; a reaction can be redox even when no oxygen is involved.`,
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
      quiz: [
        {
          prompt: "A reaction involving both oxidation and reduction is called a…",
          options: ["neutralisation", "redox reaction", "precipitation", "combustion only"],
          correctIndex: 1,
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
          options: ["loss of hydrogen", "gain of oxygen", "loss of oxygen", "gain of electrons only"],
          correctIndex: 2,
          explanation: "Reduction = loss of oxygen.",
        },
        {
          prompt: "When magnesium burns to form MgO, the magnesium is…",
          options: ["unchanged", "reduced", "oxidised (gains oxygen)", "evaporated"],
          correctIndex: 2,
          explanation: "It gains oxygen, so it is oxidised.",
        },
        {
          prompt: "In CuO + H₂ → Cu + H₂O, the copper oxide is…",
          options: ["evaporated", "oxidised", "unchanged", "reduced (loses oxygen)"],
          correctIndex: 3,
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
          options: ["gain of neutrons", "gain of electrons", "loss of protons", "loss of electrons"],
          correctIndex: 3,
          explanation: "Oxidation Is Loss of electrons.",
        },
        {
          prompt: "In terms of electrons, reduction is the…",
          options: ["loss of electrons", "gain of electrons", "gain of oxygen", "loss of hydrogen"],
          correctIndex: 1,
          explanation: "Reduction Is Gain of electrons.",
        },
        {
          prompt: "The memory aid 'OIL RIG' stands for…",
          options: [
            "Oxidation In Light, Reduction In Grey",
            "Oxygen In Liquids, Rust In Gas",
            "Only Iron Loses, Rust Is Good",
            "Oxidation Is Loss, Reduction Is Gain",
          ],
          correctIndex: 3,
          explanation: "OIL RIG: Oxidation Is Loss; Reduction Is Gain (of electrons).",
        },
        {
          prompt: "When Na → Na⁺ + e⁻, the sodium is…",
          options: ["unchanged", "reduced", "oxidised", "neutralised"],
          correctIndex: 2,
          explanation: "It loses an electron, so it is oxidised.",
        },
        {
          prompt: "When Cl + e⁻ → Cl⁻, the chlorine is…",
          options: ["unchanged", "oxidised", "reduced", "evaporated"],
          correctIndex: 2,
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
          options: ["lost forever", "destroyed", "created", "gained by the substance being reduced"],
          correctIndex: 3,
          explanation: "They transfer to the reduced substance.",
        },
        {
          prompt: "Which definition of oxidation works even when no oxygen is involved?",
          options: ["loss of oxygen", "gain of oxygen", "loss of electrons", "gain of hydrogen"],
          correctIndex: 2,
          explanation: "The electron definition is the most general.",
        },
        {
          prompt: "In terms of hydrogen, reduction is the…",
          options: ["gain of oxygen", "loss of hydrogen", "gain of hydrogen", "loss of electrons"],
          correctIndex: 2,
          explanation: "Reduction = gain of hydrogen.",
        },
        {
          prompt: "If a substance gains oxygen, it has been…",
          options: ["neutralised", "reduced", "oxidised", "melted"],
          correctIndex: 2,
          explanation: "Gaining oxygen is oxidation.",
        },
        {
          prompt: "If an atom gains electrons, it has been…",
          options: ["evaporated", "oxidised", "reduced", "burned"],
          correctIndex: 2,
          explanation: "Gaining electrons is reduction.",
        },
        {
          prompt: "Redox reactions connect to ionic bonding because they involve…",
          options: ["no electrons", "sharing of electrons only", "transfer of electrons", "only oxygen"],
          correctIndex: 2,
          explanation: "Electron transfer underlies both.",
        },
        {
          prompt: "In 2Mg + O₂ → 2MgO, oxygen is…",
          options: ["oxidised", "reduced", "unchanged", "neutralised"],
          correctIndex: 1,
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
            "loss of hydrogen only",
            "gain of electrons, and reduction is loss",
            "gain of oxygen only",
            "loss of electrons, and reduction is gain",
          ],
          correctIndex: 3,
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
          type: "MULTIPLE_CHOICE",
          prompt: "In the reaction CuO + H₂ → Cu + H₂O, which substance is oxidised?",
          options: ["H₂O", "CuO", "Cu", "H₂"],
          correctIndex: 3,
          answerKey: "Hydrogen gains oxygen (H₂ → H₂O), so it is oxidised; copper oxide loses oxygen and is reduced.",
          marks: 2,
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
      // source: LibreTexts — Oxidizing and Reducing Agents (https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Electrochemistry/Redox_Chemistry/Oxidizing_and_Reducing_Agents)
      slug: "oxidising-reducing-agents",
      title: "Oxidising and Reducing Agents and Everyday Redox",
      objective:
        "By the end of the topic, learners should be able to identify oxidising and reducing agents in a reaction, and describe everyday examples of redox such as rusting, combustion and respiration.",
      estimatedMinutes: 150,
      notes: `## Introduction

- Every redox reaction has two actors: the substance that *causes* oxidation and the one that *causes* reduction — the **oxidising** and **reducing agents**.
- Explains everyday life: why iron roofs rust, why fuel burns, why food is respired, why bleach removes colour.
- **This topic:** identifying the oxidising and reducing agents in a reaction; redox all around us.

## Oxidising and reducing agents

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

- Redox runs **batteries**, extracts **metals** from ores, powers **respiration** and **combustion**, and causes **rusting**.
- Understanding oxidation and reduction explains a huge range of everyday and industrial chemistry.

## Common errors and misconceptions

- **Mixing up the agents** — the **oxidising agent** is itself **reduced**; the **reducing agent** is itself **oxidised**. Each does the *opposite* to itself of what it does to the other.
- **Thinking rusting needs only air** — rusting of iron needs **both oxygen and water**; either alone will not rust it, which is why oiling or painting (keeping water out) prevents it.
- **Believing combustion and respiration are unrelated** — both are redox reactions that oxidise a fuel/food to release energy; respiration is, in effect, slow, controlled "burning" of glucose.
- **Assuming an agent is used up doing nothing** — the agent is chemically changed in the reaction (reduced or oxidised); it is a reactant, not a bystander.`,
      workedExample: `**Task.** In the reaction CuO + H₂ → Cu + H₂O:
(a) Identify the oxidising agent and the reducing agent, with reasons. (b) Explain, as a redox process, why iron rusts and give one way to prevent it.

**Part (a) — the agents**
- **Oxidising agent: CuO (copper oxide).** It **gives its oxygen** to the hydrogen, oxidising the hydrogen; in doing so CuO is itself **reduced** (loses oxygen). The oxidising agent is the one that is reduced.
- **Reducing agent: H₂ (hydrogen).** It **removes the oxygen** from the copper oxide, reducing it; in doing so H₂ is itself **oxidised** (gains oxygen). The reducing agent is the one that is oxidised.

**Part (b) — rusting as redox, and prevention**
**Rusting** is a redox reaction: iron reacts with **oxygen** (in the presence of water) to form **iron oxide (rust)**. The iron **gains oxygen / loses electrons**, so the iron is **oxidised**, and oxygen (the oxidising agent) is reduced.

To **prevent** rusting, keep oxygen and water away from the iron — for example by **painting, oiling/greasing**, or **galvanising** (coating with zinc), or plating with a less reactive metal.

**Conclusion:** CuO is the oxidising agent (itself reduced) and H₂ the reducing agent (itself oxidised); and rusting is the oxidation of iron by oxygen, which we prevent by keeping oxygen and water away with coatings such as paint, oil or zinc.`,
      quiz: [
        {
          prompt: "An oxidising agent causes … in another substance.",
          options: ["reduction", "oxidation", "melting", "freezing"],
          correctIndex: 1,
          explanation: "An oxidising agent oxidises another substance.",
        },
        {
          prompt: "An oxidising agent is itself…",
          options: ["unchanged", "oxidised", "reduced", "evaporated"],
          correctIndex: 2,
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
          options: ["frozen", "reduced", "unchanged", "oxidised"],
          correctIndex: 3,
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
          options: ["H₂O", "CuO", "Cu", "H₂"],
          correctIndex: 3,
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
          options: ["potassium permanganate", "oxygen", "chlorine", "hydrogen"],
          correctIndex: 3,
          explanation: "Hydrogen (and carbon) are reducing agents.",
        },
        {
          prompt: "Rusting is the reaction of iron with…",
          options: ["carbon only", "hydrogen only", "oxygen and water", "salt only"],
          correctIndex: 2,
          explanation: "Iron + oxygen (+ water) → rust.",
        },
        {
          prompt: "In rusting, the iron is…",
          options: ["reduced", "oxidised", "unchanged", "melted"],
          correctIndex: 1,
          explanation: "Iron gains oxygen / loses electrons — it is oxidised.",
        },
        {
          prompt: "Rust is a form of iron…",
          options: ["chloride", "oxide", "sulfate", "carbonate"],
          correctIndex: 1,
          explanation: "Rust is iron oxide.",
        },
        {
          prompt: "Combustion (burning) is the rapid reaction of a fuel with…",
          options: ["nitrogen", "hydrogen", "oxygen", "water"],
          correctIndex: 2,
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
          options: ["adding more oxygen", "adding water", "painting or oiling the iron", "heating in air"],
          correctIndex: 2,
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
          options: ["it disappears", "the same (it is oxidised)", "nothing", "the opposite (it is reduced)"],
          correctIndex: 3,
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
          options: ["respiration", "burning charcoal", "iron rusting", "dissolving sugar in water"],
          correctIndex: 3,
          explanation: "Dissolving is physical, not a redox reaction.",
        },
        {
          prompt: "Redox reactions are used to run…",
          options: ["rulers", "thermometers", "batteries", "microscopes"],
          correctIndex: 2,
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
          options: ["rust", "iron", "oxygen", "water only"],
          correctIndex: 2,
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
          type: "MULTIPLE_CHOICE",
          prompt: "Which statement correctly describes a reducing agent?",
          options: ["It causes reduction in another substance and is itself oxidised", "It causes reduction in another substance and is itself reduced", "It causes oxidation in another substance and is itself reduced", "It is not changed by the reaction"],
          correctIndex: 0,
          answerKey: "A reducing agent reduces another substance (gives electrons / removes oxygen) and is itself oxidised.",
          marks: 2,
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
    {
      // source: LibreTexts (Introductory Chemistry CK-12) — 22.6 Assigning Oxidation Numbers (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(CK-12)/22:_Oxidation-Reduction_Reactions/22.06:_Assigning_Oxidation_Numbers)
      slug: "oxidation-numbers",
      title: "Oxidation Numbers",
      objective:
        "By the end of the topic, learners should be able to state the rules for assigning oxidation numbers and use them to work out the oxidation number of an element in an atom, ion or compound, and to decide what has been oxidised or reduced. (MoE Grade 10 Period VI, CONTENTS 2.)",
      estimatedMinutes: 150,
      notes: `## Introduction

- The **oxidation number** (oxidation state) is a bookkeeping number that tracks electrons in redox reactions.
- Once you can assign oxidation numbers, you can tell at a glance what has been **oxidised** (number goes up) and **reduced** (number goes down).
- **This topic:** the rules for assigning oxidation numbers, and using them.

## What an oxidation number is

- **Oxidation number** — the charge an atom would have if the compound were made of ions; a signed number written with the sign first (+2, −1).
- It is a tool for *counting* electron transfer; it is not always a real charge.

## Rules for assigning oxidation numbers

1. **Free element = 0.** Any atom in an uncombined element has oxidation number 0 — Na, O₂, Cl₂, S₈ all 0.
2. **Monatomic ion = its charge.** Na⁺ is +1, Mg²⁺ is +2, Cl⁻ is −1, O²⁻ is −2.
3. **Group 1 metals = +1; Group 2 metals = +2** in all their compounds.
4. **Hydrogen = +1** in most compounds (but **−1** in metal hydrides such as NaH).
5. **Oxygen = −2** in most compounds (but **−1** in peroxides such as H₂O₂, and positive with fluorine).
6. **Fluorine = −1** in all its compounds; the other halogens are usually −1 (except when bonded to oxygen or a more electronegative halogen).
7. **Sum rule.** In a neutral compound the oxidation numbers add up to **0**; in a polyatomic ion they add up to the **charge on the ion**.

## Using the sum rule

- Treat the unknown oxidation number as x, apply the known values, and solve.
- Example: in SO₄²⁻, oxygen is −2 (×4 = −8); the ion charge is −2, so S + (−8) = −2 → **S = +6**.

## Deciding oxidised vs reduced

- **Oxidation** — oxidation number **increases** (more positive).
- **Reduction** — oxidation number **decreases** (more negative).
- This matches OIL RIG: losing electrons raises the oxidation number.

| Change in oxidation number | Meaning |
|---|---|
| Increases (e.g. 0 → +2) | oxidised |
| Decreases (e.g. +2 → 0) | reduced |
| No change | not a redox change for that atom |

## Common errors and misconceptions

- **Writing the sign after the number** — oxidation numbers are written sign-first (+2), unlike ionic charges (2+).
- **Assuming oxygen is always −2** — it is −1 in peroxides and positive with fluorine.
- **Confusing oxidation number with actual charge** — in covalent molecules the oxidation number is assigned as if bonds were ionic; it need not be a real charge.
- **Forgetting the sum rule target** — neutral compounds sum to 0, but a polyatomic ion sums to its own charge.`,
      workedExample: `**Task.** (a) Find the oxidation number of manganese in KMnO₄. (b) In the change Fe²⁺ → Fe³⁺, state whether iron is oxidised or reduced.

**Part (a) — Mn in KMnO₄**
1. Assign the known values: K is Group 1 → +1; each O is −2, and there are 4 → −8.
2. The compound is neutral, so the oxidation numbers sum to 0.
3. Let Mn = x: (+1) + x + (−8) = 0.
4. x − 7 = 0 → **x = +7**. Manganese is **+7** in KMnO₄.

**Part (b) — Fe²⁺ → Fe³⁺**
- The oxidation number rises from **+2 to +3** (it increases).
- An increase in oxidation number is **oxidation**, so **iron is oxidised** (it loses one electron).

**Conclusion.** Manganese is +7 in KMnO₄, and Fe²⁺ → Fe³⁺ is an oxidation because the oxidation number increases.`,
      quiz: [
        {
          prompt: "The oxidation number of an atom in a free element (e.g. O₂) is…",
          options: ["+1", "+2", "−2", "0"],
          correctIndex: 3,
          explanation: "Uncombined elements have oxidation number 0.",
        },
        {
          prompt: "The oxidation number of a monatomic ion equals its…",
          options: ["atomic number", "mass", "charge", "group number only"],
          correctIndex: 2,
          explanation: "Mg²⁺ is +2, Cl⁻ is −1, etc.",
        },
        {
          prompt: "Oxygen usually has an oxidation number of…",
          options: ["0", "+2", "−2", "−1"],
          correctIndex: 2,
          explanation: "Oxygen is −2 in most compounds.",
        },
        {
          prompt: "In a peroxide such as H₂O₂, oxygen has an oxidation number of…",
          options: ["−2", "−1", "0", "+2"],
          correctIndex: 1,
          explanation: "Peroxides are the exception: oxygen is −1.",
        },
        {
          prompt: "Hydrogen is usually +1, but in a metal hydride such as NaH it is…",
          options: ["0", "+1", "−1", "+2"],
          correctIndex: 2,
          explanation: "With a metal, hydrogen is −1.",
        },
        {
          prompt: "Group 1 metals always have an oxidation number of…",
          options: ["−1", "+2", "+1", "0"],
          correctIndex: 2,
          explanation: "Group 1 metals are +1 in compounds.",
        },
        {
          prompt: "In a neutral compound, the oxidation numbers add up to…",
          options: ["the number of atoms", "+1", "0", "−2"],
          correctIndex: 2,
          explanation: "Neutral compounds sum to zero.",
        },
        {
          prompt: "In a polyatomic ion, the oxidation numbers add up to…",
          options: ["0 always", "the charge on the ion", "+1", "the number of oxygens"],
          correctIndex: 1,
          explanation: "They sum to the ion's charge.",
        },
        {
          prompt: "The oxidation number of sulfur in SO₄²⁻ is…",
          options: ["+6", "+4", "−2", "+2"],
          correctIndex: 0,
          explanation: "S + 4(−2) = −2 → S = +6.",
        },
        {
          prompt: "The oxidation number of nitrogen in NO₃⁻ is…",
          options: ["+1", "+3", "−3", "+5"],
          correctIndex: 3,
          explanation: "N + 3(−2) = −1 → N = +5.",
        },
        {
          prompt: "Fluorine in its compounds always has an oxidation number of…",
          options: ["−2", "+1", "0", "−1"],
          correctIndex: 3,
          explanation: "Fluorine is always −1 in compounds.",
        },
        {
          prompt: "If an atom's oxidation number increases during a reaction, it has been…",
          options: ["reduced", "oxidised", "neutralised", "unchanged"],
          correctIndex: 1,
          explanation: "An increase in oxidation number is oxidation.",
        },
        {
          prompt: "If an atom's oxidation number decreases, it has been…",
          options: ["melted", "oxidised", "reduced", "evaporated"],
          correctIndex: 2,
          explanation: "A decrease in oxidation number is reduction.",
        },
        {
          prompt: "The oxidation number of manganese in KMnO₄ is…",
          options: ["+4", "+2", "+7", "−1"],
          correctIndex: 2,
          explanation: "+1 + Mn + 4(−2) = 0 → Mn = +7.",
        },
        {
          prompt: "The oxidation number of chromium in Cr₂O₇²⁻ is…",
          options: ["+7", "+3", "+6", "−2"],
          correctIndex: 2,
          explanation: "2Cr + 7(−2) = −2 → 2Cr = +12 → Cr = +6.",
        },
        {
          prompt: "The oxidation number of carbon in CO₂ is…",
          options: ["0", "−4", "+2", "+4"],
          correctIndex: 3,
          explanation: "C + 2(−2) = 0 → C = +4.",
        },
        {
          prompt: "In the change Fe²⁺ → Fe³⁺, iron is…",
          options: ["oxidised", "reduced", "unchanged", "a reducing product"],
          correctIndex: 0,
          explanation: "The oxidation number rises from +2 to +3.",
        },
        {
          prompt: "In the change Cl₂ → 2Cl⁻, chlorine is…",
          options: ["unchanged", "oxidised (0 → −1)", "reduced (0 → −1)", "oxidised (0 → +1)"],
          correctIndex: 2,
          explanation: "Its oxidation number falls from 0 to −1: reduction.",
        },
        {
          prompt: "The oxidation number of hydrogen in most compounds is…",
          options: ["−1", "+1", "0", "+2"],
          correctIndex: 1,
          explanation: "Hydrogen is +1 except in metal hydrides.",
        },
        {
          prompt: "Oxidation numbers are written with the…",
          options: ["no sign", "sign after the number (2+)", "sign before the number (+2)", "letter first"],
          correctIndex: 2,
          explanation: "Oxidation numbers are sign-first, unlike ionic charges.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "What is the oxidation number of phosphorus in PO₄³⁻?",
          options: ["+3", "+5", "−3", "+4"],
          correctIndex: 1,
          answerKey: "P + 4(−2) = −3 → P − 8 = −3 → P = +5.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "In which species does oxygen have an oxidation number that is NOT −2?",
          options: ["H₂O₂", "H₂O", "CO₂", "CaO"],
          correctIndex: 0,
          answerKey: "In the peroxide H₂O₂ oxygen is −1; in the others it is −2.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State four rules for assigning oxidation numbers.",
          answerKey: "Any four of: free element = 0; monatomic ion = its charge; Group 1 = +1 and Group 2 = +2; hydrogen = +1 (−1 in metal hydrides); oxygen = −2 (−1 in peroxides); fluorine = −1; sum = 0 for a neutral compound and = charge for a polyatomic ion. One mark each.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Work out the oxidation number of sulfur in (a) H₂S and (b) H₂SO₄.",
          answerKey: "(a) H is +1 (×2 = +2); compound neutral, so S = −2. (b) H is +1 (×2 = +2), O is −2 (×4 = −8); +2 + S − 8 = 0 → S = +6. Award marks for each correct value with working.",
          marks: 4,
        },
        {
          type: "ESSAY",
          prompt: "Explain how oxidation numbers are used to decide which species is oxidised and which is reduced in a reaction, using the reaction Zn + Cu²⁺ → Zn²⁺ + Cu as your example.",
          answerKey: "A strong answer explains that you assign oxidation numbers to each atom before and after the reaction and compare: an increase in oxidation number is oxidation (loss of electrons) and a decrease is reduction (gain of electrons). In Zn + Cu²⁺ → Zn²⁺ + Cu, zinc goes from 0 (free element) to +2, an increase, so zinc is oxidised (loses 2 electrons) and is the reducing agent; copper goes from +2 to 0, a decrease, so copper(II) is reduced (gains 2 electrons) and Cu²⁺ is the oxidising agent. Award marks for the rule linking change of oxidation number to oxidation/reduction and for the correct, fully explained application to the example.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts (Introductory Chemistry CK-12) — 22.10 Balancing Redox Reactions: Half-Reaction Method (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(CK-12)/22:_Oxidation-Reduction_Reactions/22.10:_Balancing_Redox_Reactions-_Half-Reaction_Method)
      slug: "balancing-redox-equations",
      title: "Balancing Simple Redox Equations",
      objective:
        "By the end of the topic, learners should be able to split a redox reaction into oxidation and reduction half-reactions and balance a simple redox equation by the half-reaction (ion-electron) method in acidic and in basic solution. (MoE Grade 10 Period VI, CONTENTS 3.)",
      estimatedMinutes: 160,
      notes: `## Introduction

- Redox equations must balance both **atoms** and **charge**, and the **electrons lost must equal the electrons gained**.
- The **half-reaction (ion-electron) method** splits the reaction into an oxidation half and a reduction half, balances each, then recombines them.
- **This topic:** the steps of the half-reaction method in acidic and in basic solution.

## Half-reactions

- A **half-reaction** shows just the oxidation or just the reduction, with the electrons written in.
- **Oxidation half-reaction** — electrons appear on the **right** (they are lost): Zn → Zn²⁺ + 2e⁻.
- **Reduction half-reaction** — electrons appear on the **left** (they are gained): Cu²⁺ + 2e⁻ → Cu.

## Steps in acidic solution

1. **Split** the reaction into an oxidation half and a reduction half.
2. **Balance all atoms except O and H.**
3. **Balance O** by adding H₂O to the side that needs oxygen.
4. **Balance H** by adding H⁺ to the side that needs hydrogen.
5. **Balance charge** by adding electrons (e⁻) to the more positive side.
6. **Equalise electrons** — multiply each half-reaction so electrons lost = electrons gained.
7. **Add** the two halves and **cancel** anything appearing on both sides (electrons, some H₂O/H⁺).

## Extra step in basic solution

- Balance first as if acidic, then **add OH⁻ to both sides equal to the number of H⁺**.
- H⁺ + OH⁻ combine to H₂O on the side with H⁺; **cancel** any excess H₂O.
- The final equation should contain **OH⁻ and H₂O**, no H⁺.

## Checks

- **Atoms balance** on both sides.
- **Total charge** is the same on both sides.
- **No electrons remain** in the final equation (they must all cancel).

## Common errors and misconceptions

- **Electrons left in the final equation** — they must cancel; if they do not, the half-reactions were not scaled to equal electrons.
- **Forgetting to balance charge** — a redox equation is only balanced when both atoms *and* charge match.
- **Using H⁺ in basic solution** — in base the final equation uses OH⁻ and H₂O, never free H⁺.
- **Not scaling both halves** — multiply so the electrons lost exactly equal the electrons gained before adding.`,
      workedExample: `**Task.** Balance the redox reaction between iron(II) and permanganate in acidic solution:
Fe²⁺ + MnO₄⁻ → Fe³⁺ + Mn²⁺ (acidic).

**Step 1 — Half-reactions**
- Oxidation: Fe²⁺ → Fe³⁺
- Reduction: MnO₄⁻ → Mn²⁺

**Step 2 — Balance atoms other than O and H**
- Fe and Mn are already balanced.

**Step 3 — Balance O with H₂O**
- MnO₄⁻ has 4 O, so add 4 H₂O on the right: MnO₄⁻ → Mn²⁺ + 4H₂O.

**Step 4 — Balance H with H⁺**
- Right side now has 8 H (in 4 H₂O), so add 8 H⁺ on the left: 8H⁺ + MnO₄⁻ → Mn²⁺ + 4H₂O.

**Step 5 — Balance charge with electrons**
- Oxidation: Fe²⁺ → Fe³⁺ + e⁻ (charge +2 = +2, balanced).
- Reduction: left charge = 8(+1) + (−1) = +7; right = +2. Add 5e⁻ to the left: 5e⁻ + 8H⁺ + MnO₄⁻ → Mn²⁺ + 4H₂O.

**Step 6 — Equalise electrons**
- Multiply the iron half by 5: 5Fe²⁺ → 5Fe³⁺ + 5e⁻.

**Step 7 — Add and cancel the 5e⁻**
5Fe²⁺ + 8H⁺ + MnO₄⁻ → 5Fe³⁺ + Mn²⁺ + 4H₂O.

**Check.** Atoms: 5 Fe, 1 Mn, 4 O, 8 H each side. Charge: left = 5(+2) + 8(+1) + (−1) = +17; right = 5(+3) + (+2) = +17. Balanced. ✓`,
      quiz: [
        {
          prompt: "In an oxidation half-reaction, the electrons are written on the…",
          options: ["right (they are lost)", "left (they are gained)", "top", "both sides"],
          correctIndex: 0,
          explanation: "Oxidation loses electrons, so they appear on the product side.",
        },
        {
          prompt: "In a reduction half-reaction, the electrons are written on the…",
          options: ["middle", "right (they are lost)", "left (they are gained)", "neither side"],
          correctIndex: 2,
          explanation: "Reduction gains electrons, so they appear on the reactant side.",
        },
        {
          prompt: "In the half-reaction method (acidic), oxygen atoms are balanced by adding…",
          options: ["H⁺", "H₂O", "OH⁻", "O₂"],
          correctIndex: 1,
          explanation: "Add water to the side lacking oxygen.",
        },
        {
          prompt: "In acidic solution, hydrogen atoms are balanced by adding…",
          options: ["H⁺", "OH⁻", "H₂O", "H₂"],
          correctIndex: 0,
          explanation: "Add H⁺ to balance hydrogen in acid.",
        },
        {
          prompt: "Charge in each half-reaction is balanced by adding…",
          options: ["electrons", "protons", "neutrons", "water"],
          correctIndex: 0,
          explanation: "Electrons are added to balance charge.",
        },
        {
          prompt: "Before adding the two half-reactions, you must make sure the number of…",
          options: ["electrons lost equals electrons gained", "atoms is ignored", "H⁺ is zero", "water is equal"],
          correctIndex: 0,
          explanation: "Scale each half so electrons cancel.",
        },
        {
          prompt: "A correctly balanced redox equation has no…",
          options: ["reactants", "products", "electrons remaining", "water"],
          correctIndex: 2,
          explanation: "All electrons must cancel out.",
        },
        {
          prompt: "In basic solution, after balancing as acidic you add … to both sides.",
          options: ["H₂", "more electrons", "O₂", "OH⁻ equal to the H⁺"],
          correctIndex: 3,
          explanation: "Add OH⁻ equal to the number of H⁺.",
        },
        {
          prompt: "In basic solution, H⁺ and OH⁻ combine to form…",
          options: ["H₂O", "H₂", "O₂", "OH₂⁻"],
          correctIndex: 0,
          explanation: "They form water, which may then cancel.",
        },
        {
          prompt: "The final balanced equation in basic solution should contain…",
          options: ["free H⁺ only", "OH⁻ and H₂O, no free H⁺", "no water", "electrons"],
          correctIndex: 1,
          explanation: "Base solutions use OH⁻ and H₂O, not H⁺.",
        },
        {
          prompt: "The oxidation half-reaction for zinc metal is…",
          options: ["Zn → Zn²⁺ + 2e⁻", "Zn²⁺ + 2e⁻ → Zn", "Zn → Zn²⁺ − 2e⁻", "Zn + 2e⁻ → Zn²⁺"],
          correctIndex: 0,
          explanation: "Zinc loses 2 electrons, written on the right.",
        },
        {
          prompt: "The reduction half-reaction for copper(II) ions is…",
          options: ["Cu²⁺ → Cu + 2e⁻", "Cu → Cu²⁺ + 2e⁻", "Cu²⁺ + 2e⁻ → Cu", "Cu + 2e⁻ → Cu²⁺"],
          correctIndex: 2,
          explanation: "Cu²⁺ gains 2 electrons to become Cu.",
        },
        {
          prompt: "The two things that must balance in a redox equation are…",
          options: ["atoms only", "atoms and charge", "charge only", "colour and mass"],
          correctIndex: 1,
          explanation: "Both atoms and total charge must balance.",
        },
        {
          prompt: "In the permanganate half-reaction 8H⁺ + MnO₄⁻ + 5e⁻ → Mn²⁺ + 4H₂O, manganese changes from…",
          options: ["+7 to +2 (reduced)", "+2 to +7 (oxidised)", "0 to +2", "+7 to +7"],
          correctIndex: 0,
          explanation: "Mn goes +7 → +2, gaining 5 electrons.",
        },
        {
          prompt: "How many electrons are transferred in Fe²⁺ → Fe³⁺?",
          options: ["3", "2", "1", "0"],
          correctIndex: 2,
          explanation: "One electron is lost per iron ion.",
        },
        {
          prompt: "Why must the iron half be multiplied by 5 when combined with the permanganate half?",
          options: ["to balance oxygen", "so the electrons lost (5) match the electrons gained (5)", "to add water", "to remove H⁺"],
          correctIndex: 1,
          explanation: "MnO₄⁻ gains 5e⁻, so 5 Fe²⁺ must lose 5e⁻.",
        },
        {
          prompt: "After adding the two half-reactions, any species on both sides should be…",
          options: ["added again", "doubled", "ignored", "cancelled"],
          correctIndex: 3,
          explanation: "Cancel electrons and any common H₂O/H⁺.",
        },
        {
          prompt: "The half-reaction method is also called the…",
          options: ["titration method", "mole method", "empirical method", "ion-electron method"],
          correctIndex: 3,
          explanation: "It tracks ions and electrons separately.",
        },
        {
          prompt: "The first step of the half-reaction method is to…",
          options: ["add OH⁻", "add water", "add electrons", "split the reaction into oxidation and reduction halves"],
          correctIndex: 3,
          explanation: "Separate into two half-reactions first.",
        },
        {
          prompt: "A final check of a balanced redox equation compares the total … on both sides.",
          options: ["volume", "colour", "temperature", "charge and number of atoms"],
          correctIndex: 3,
          explanation: "Both charge and atoms must match.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which is the correctly written oxidation half-reaction for the change of Sn²⁺ to Sn⁴⁺?",
          options: ["Sn⁴⁺ → Sn²⁺ + 2e⁻", "Sn²⁺ + 2e⁻ → Sn⁴⁺", "Sn²⁺ → Sn⁴⁺ + 2e⁻", "Sn²⁺ → Sn⁴⁺ − 2e⁻"],
          correctIndex: 2,
          answerKey: "Oxidation loses electrons, written on the right: Sn²⁺ → Sn⁴⁺ + 2e⁻.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "In balancing a redox reaction in acidic solution, oxygen atoms are balanced by adding:",
          options: ["OH⁻", "O₂", "H₂O", "H⁺"],
          correctIndex: 2,
          answerKey: "Water is added to balance oxygen; H⁺ then balances hydrogen.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "List, in order, the steps of the half-reaction method for balancing a redox equation in acidic solution.",
          answerKey: "1. Split into oxidation and reduction half-reactions. 2. Balance atoms other than O and H. 3. Balance O with H₂O. 4. Balance H with H⁺. 5. Balance charge with electrons. 6. Multiply so electrons lost = electrons gained. 7. Add the halves and cancel common species. Award marks for the correct sequence.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the one extra step needed to convert a redox equation balanced in acid into one balanced in basic solution.",
          answerKey: "Add OH⁻ to both sides equal to the number of H⁺ present; the H⁺ and OH⁻ on one side combine to form H₂O, and any excess water is cancelled, leaving an equation containing OH⁻ and H₂O with no free H⁺. Award marks for adding OH⁻ equal to H⁺ and for combining/cancelling water.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt: "Balance the reaction MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ in acidic solution, showing the half-reactions and the electron balance, and verify that both atoms and charge balance.",
          answerKey: "A full answer gives the reduction half 8H⁺ + MnO₄⁻ + 5e⁻ → Mn²⁺ + 4H₂O (Mn +7 → +2) and the oxidation half Fe²⁺ → Fe³⁺ + e⁻, multiplies the iron half by 5 (5Fe²⁺ → 5Fe³⁺ + 5e⁻) so the 5 electrons cancel, and adds to give 5Fe²⁺ + 8H⁺ + MnO₄⁻ → 5Fe³⁺ + Mn²⁺ + 4H₂O. Verification: atoms — 5 Fe, 1 Mn, 4 O, 8 H on both sides; charge — left 5(+2)+8(+1)+(−1) = +17, right 5(+3)+(+2) = +17. Award marks for correct half-reactions, correct electron scaling and cancellation, the final equation, and the atom/charge check.",
          marks: 6,
        },
      ],
    },
  ],
};
