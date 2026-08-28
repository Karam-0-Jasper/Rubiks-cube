import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 12,
// Semester Two, Period V: Review of Some Fundamental Topics Previously Treated
// (Grades 10-12), including WASSCE past papers. One topic per CONTENTS item:
// 1. Units of Measurement; 2. History and Importance of Chemistry; 3. Matter and
// its Properties; 4. Atomic Structure; 5. The Periodic Table; 6. Chemical
// Bonding; 7. Chemical Reactions, Equations and Stoichiometry; 8.
// Oxidation-Reduction Reactions; 9. States of Matter; 10. Solutions and Solution
// Stoichiometry; 11. Acids, Bases and Salts (Titrations); 12. Solubility of
// Substances; 13. Energetics; 14. Nuclear Chemistry; 15. Chemical Equilibrium;
// 16. Reaction Rates; 17. Electrochemistry.
export const chemistryG12P5: PeriodContent = {
  grade: 12,
  number: 5,
  title: "Review of Fundamental Topics (Grades 10-12)",
  summary:
    "Period V of the MoE Grade 12 Chemistry syllabus. A structured revision of the fundamental topics treated across Grades 10-12, in preparation for the WASSCE: units of measurement, the nature and importance of chemistry, matter, atomic structure, the periodic table, chemical bonding, equations and stoichiometry, redox, states of matter, solutions, acids-bases-salts and titrations, solubility, energetics, nuclear chemistry, chemical equilibrium, reaction rates and electrochemistry.",
  topics: [
    {
      // source: LibreTexts — 1.6 Measurements and Units / OpenStax Chemistry 2e 1.4 Measurements (https://chem.libretexts.org/Courses/American_River_College/CHEM_309%3A_Applied_Chemistry_for_the_Health_Sciences/01%3A_Topics_in_General_Chemistry_I/1.06%3A_Measurements_and_Units)
      slug: "units-of-measurement",
      title: "Units of Measurement",
      objective:
        "By the end of the topic, learners should be able to state SI base units, use prefixes, and apply significant figures to measurements. (MoE Grade 12 Period V, CONTENTS 1.)",
      estimatedMinutes: 90,
      notes: `## SI units

- Scientists use the **SI system** (Système International) of units for consistency.

| Quantity | SI base unit | Symbol |
| --- | --- | --- |
| Length | metre | m |
| Mass | kilogram | kg |
| Time | second | s |
| Amount of substance | mole | mol |
| Temperature | kelvin | K |
| Electric current | ampere | A |

## Prefixes

| Prefix | Symbol | Factor |
| --- | --- | --- |
| kilo | k | ×10³ |
| centi | c | ×10⁻² |
| milli | m | ×10⁻³ |
| micro | µ | ×10⁻⁶ |

## Significant figures

- **Significant figures** are the known digits of a measurement plus one estimated digit.
- In × and ÷, the answer has as many sig figs as the value with the **fewest**.
- In + and −, keep to the least number of decimal places.

## Common errors and misconceptions

- **Mass unit is the gram** — the SI base unit is the kilogram.
- **Temperature SI unit is °C** — it is the kelvin (K).
- **Trailing zeros never count** — they can be significant (e.g. 2.50 has 3 sig figs).`,
      workedExample: `**Task.** Convert 2.5 kg to grams and express 0.004500 kg to the correct number of significant figures.

**Step 1 — Convert kg to g**
1 kg = 1000 g, so 2.5 kg × 1000 = **2500 g**.

**Step 2 — Significant figures of 0.004500 kg**
Leading zeros are not significant; the digits 4, 5, 0, 0 are — so **4 significant figures**. In grams: 0.004500 kg × 1000 = **4.500 g** (4 sig figs).

**Conclusion.** 2.5 kg = 2500 g, and 0.004500 kg = 4.500 g, quoted to 4 significant figures.`,
      quiz: [
        { prompt: "The SI base unit of mass is the…", options: ["kilogram", "gram", "pound", "tonne"], correctIndex: 0, explanation: "SI base unit is the kilogram." },
        { prompt: "The SI base unit of amount of substance is the…", options: ["mole", "gram", "litre", "atom"], correctIndex: 0, explanation: "The mole measures amount." },
        { prompt: "The SI unit of temperature is the…", options: ["kelvin", "Celsius", "Fahrenheit", "joule"], correctIndex: 0, explanation: "Kelvin is the SI temperature unit." },
        { prompt: "The prefix 'kilo' means…", options: ["×10³", "×10⁻³", "×10⁶", "×10⁻²"], correctIndex: 0, explanation: "kilo = 1000." },
        { prompt: "The prefix 'milli' means…", options: ["×10⁻³", "×10³", "×10⁻⁶", "×10²"], correctIndex: 0, explanation: "milli = one thousandth." },
        { prompt: "The SI unit of length is the…", options: ["metre", "kilometre", "centimetre", "inch"], correctIndex: 0, explanation: "Metre is the base unit." },
        { prompt: "How many significant figures in 0.00340?", options: ["3", "2", "5", "6"], correctIndex: 0, explanation: "3, 4 and trailing 0 = 3 sig figs." },
        { prompt: "2.5 kg equals … g.", options: ["2500", "25", "250", "0.0025"], correctIndex: 0, explanation: "×1000." },
        { prompt: "In multiplication, the answer's sig figs match the value with the…", options: ["fewest sig figs", "most sig figs", "largest number", "smallest number"], correctIndex: 0, explanation: "Least sig figs limits the answer." },
        { prompt: "The SI unit of time is the…", options: ["second", "minute", "hour", "day"], correctIndex: 0, explanation: "Second is the base unit." },
        { prompt: "The prefix 'centi' means…", options: ["×10⁻²", "×10²", "×10⁻³", "×10³"], correctIndex: 0, explanation: "centi = one hundredth." },
        { prompt: "How many sig figs in 205.0?", options: ["4", "3", "2", "5"], correctIndex: 0, explanation: "The trailing zero counts: 4." },
        { prompt: "1000 g equals … kg.", options: ["1", "10", "100", "0.1"], correctIndex: 0, explanation: "1 kg = 1000 g." },
        { prompt: "The SI unit of electric current is the…", options: ["ampere", "volt", "ohm", "watt"], correctIndex: 0, explanation: "Ampere is the base unit." },
        { prompt: "µ (micro) represents…", options: ["×10⁻⁶", "×10⁶", "×10⁻³", "×10³"], correctIndex: 0, explanation: "micro = one millionth." },
        { prompt: "Significant figures include the estimated digit…", options: ["yes, one estimated digit", "no estimated digits", "two estimated digits", "only exact digits"], correctIndex: 0, explanation: "Known digits + one estimate." },
        { prompt: "0.5 m equals … cm.", options: ["50", "5", "500", "0.05"], correctIndex: 0, explanation: "×100." },
        { prompt: "Which measurement has 2 sig figs?", options: ["0.024", "0.0240", "24.0", "240.5"], correctIndex: 0, explanation: "2 and 4 are significant." },
        { prompt: "For addition, the result keeps the least number of…", options: ["decimal places", "sig figs", "digits", "prefixes"], correctIndex: 0, explanation: "Addition uses decimal places." },
        { prompt: "A consistent worldwide unit system is called…", options: ["SI", "imperial", "metric-imperial", "cgs only"], correctIndex: 0, explanation: "SI = Système International." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the SI base units of length, mass and amount of substance.", answerKey: "Length — metre (m); mass — kilogram (kg); amount of substance — mole (mol). Award a mark for each.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "How many significant figures are in 0.00450?", options: ["3", "2", "5", "6"], correctIndex: 0, answerKey: "4, 5 and the trailing 0 are significant = 3.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The prefix 'milli' represents:", options: ["×10⁻³", "×10³", "×10⁻⁶", "×10²"], correctIndex: 0, answerKey: "milli = one thousandth.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Convert 3.2 kg into grams and 250 cm into metres.", answerKey: "3.2 kg × 1000 = 3200 g. 250 cm ÷ 100 = 2.5 m. Award a mark for each correct conversion.", marks: 2 },
        { type: "ESSAY", prompt: "Explain why scientists use the SI system and the rules for reporting significant figures in calculations.", answerKey: "A full answer explains that the SI system gives a single, consistent set of units so measurements can be compared and communicated worldwide, naming base units (metre, kilogram, second, mole, kelvin, ampere) and prefixes (kilo, centi, milli, micro). For significant figures: report the known digits plus one estimated digit; in multiplication/division the answer takes the fewest sig figs of the data; in addition/subtraction keep the least number of decimal places. Award marks for the rationale, units/prefixes and the sig-fig rules.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 1: Chemistry, Matter, and Measurement (Ball et al., What is chemistry / branches) (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/The_Basics_of_General_Organic_and_Biological_Chemistry_(Ball_et_al.)/01%3A_Chemistry_Matter_and_Measurement)
      slug: "history-and-importance-of-chemistry",
      title: "History and Importance of Chemistry",
      objective:
        "By the end of the topic, learners should be able to define chemistry, outline its historical development and branches, and explain its importance. (MoE Grade 12 Period V, CONTENTS 2.)",
      estimatedMinutes: 70,
      notes: `## What is chemistry?

- **Chemistry** — the study of **matter** and the **changes** it undergoes.
- It is a central science linking physics and biology.

## Historical development

- Grew from **alchemy** (early attempts to turn metals to gold and find an elixir), which developed laboratory techniques.
- Became a true science through careful **measurement** and experiment (e.g. Lavoisier's law of conservation of mass; Dalton's atomic theory).

## Branches of chemistry

| Branch | Studies |
| --- | --- |
| Organic | carbon compounds |
| Inorganic | non-carbon compounds, metals |
| Physical | energy and rates of reactions |
| Analytical | identifying and measuring substances |
| Biochemistry | chemistry of living things |

## Importance of chemistry

- Medicine and drugs, food and fertilisers, fuels and energy, materials (plastics, metals, cement), water treatment, and understanding the environment.

## Common errors and misconceptions

- **Chemistry is only about dangerous chemicals** — it is the study of all matter and its changes.
- **Alchemy and chemistry are the same** — alchemy was pre-scientific; chemistry uses measurement and evidence.
- **Chemistry has one branch** — it has several specialised branches.`,
      workedExample: `**Task.** Classify each study into a branch of chemistry: (a) the rate of a reaction, (b) a new medicine's carbon-based structure, (c) measuring the iron content of an ore.

**Step 1 — Recall the branches**
Organic (carbon compounds), inorganic, physical (energy/rates), analytical (identifying/measuring), biochemistry.

**Step 2 — Classify**
- (a) Rate of a reaction → **physical chemistry**.
- (b) Carbon-based medicine structure → **organic chemistry**.
- (c) Measuring iron content → **analytical chemistry**.

**Conclusion.** Chemistry's branches specialise in different questions: physical (rates/energy), organic (carbon compounds) and analytical (measuring composition).`,
      quiz: [
        { prompt: "Chemistry is the study of matter and the … it undergoes.", options: ["changes", "prices", "names", "colours only"], correctIndex: 0, explanation: "Matter and its changes." },
        { prompt: "Chemistry grew out of…", options: ["alchemy", "astronomy", "geometry", "music"], correctIndex: 0, explanation: "Alchemy preceded chemistry." },
        { prompt: "The branch studying carbon compounds is…", options: ["organic chemistry", "inorganic chemistry", "physical chemistry", "analytical chemistry"], correctIndex: 0, explanation: "Organic = carbon compounds." },
        { prompt: "The branch dealing with energy and rates is…", options: ["physical chemistry", "organic chemistry", "biochemistry", "analytical chemistry"], correctIndex: 0, explanation: "Physical chemistry." },
        { prompt: "Identifying and measuring substances is…", options: ["analytical chemistry", "organic chemistry", "inorganic chemistry", "biochemistry"], correctIndex: 0, explanation: "Analytical chemistry." },
        { prompt: "The chemistry of living things is…", options: ["biochemistry", "physical chemistry", "inorganic chemistry", "geochemistry"], correctIndex: 0, explanation: "Biochemistry." },
        { prompt: "The law of conservation of mass is credited to…", options: ["Lavoisier", "Newton", "Darwin", "Einstein"], correctIndex: 0, explanation: "Lavoisier established it." },
        { prompt: "Chemistry is often called a … science.", options: ["central", "dead", "useless", "minor"], correctIndex: 0, explanation: "It links physics and biology." },
        { prompt: "The atomic theory was proposed by…", options: ["Dalton", "Mendel", "Ohm", "Hooke"], correctIndex: 0, explanation: "John Dalton." },
        { prompt: "Which is an application of chemistry?", options: ["making medicines", "writing poems", "playing football", "singing"], correctIndex: 0, explanation: "Chemistry produces drugs." },
        { prompt: "The branch studying non-carbon compounds and metals is…", options: ["inorganic chemistry", "organic chemistry", "biochemistry", "physical chemistry"], correctIndex: 0, explanation: "Inorganic chemistry." },
        { prompt: "Fertilisers and food production rely on…", options: ["chemistry", "history only", "grammar", "geography only"], correctIndex: 0, explanation: "Chemistry underpins agriculture." },
        { prompt: "Chemistry became a science through careful…", options: ["measurement", "guessing", "storytelling", "luck"], correctIndex: 0, explanation: "Measurement and experiment." },
        { prompt: "Alchemists tried to turn base metals into…", options: ["gold", "iron", "salt", "wood"], correctIndex: 0, explanation: "A famous alchemical goal." },
        { prompt: "Water treatment is an application of…", options: ["chemistry", "literature", "music", "art"], correctIndex: 0, explanation: "Chemistry purifies water." },
        { prompt: "Which is NOT a branch of chemistry?", options: ["astrology", "organic", "physical", "analytical"], correctIndex: 0, explanation: "Astrology is not a science." },
        { prompt: "Plastics and cement are examples of chemistry providing…", options: ["materials", "energy only", "food only", "medicines only"], correctIndex: 0, explanation: "Chemistry makes materials." },
        { prompt: "Chemistry helps us understand the … around us.", options: ["environment", "past kings", "poems", "planets' names"], correctIndex: 0, explanation: "Environmental chemistry." },
        { prompt: "Medicines are developed mainly using…", options: ["organic chemistry and biochemistry", "geography", "history", "grammar"], correctIndex: 0, explanation: "Drug design uses these branches." },
        { prompt: "The idea that chemistry is only 'dangerous chemicals' is…", options: ["a misconception", "correct", "a law", "a branch"], correctIndex: 0, explanation: "It studies all matter." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define chemistry and name three of its branches.", answerKey: "Chemistry is the study of matter and the changes it undergoes. Branches (any three): organic, inorganic, physical, analytical, biochemistry. Award a mark for the definition and marks for three branches.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which branch studies the rates and energy of reactions?", options: ["Physical chemistry", "Organic chemistry", "Biochemistry", "Analytical chemistry"], correctIndex: 0, answerKey: "Physical chemistry deals with energy and rates.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Chemistry developed historically from:", options: ["Alchemy", "Astronomy", "Geometry", "Grammar"], correctIndex: 0, answerKey: "Alchemy preceded modern chemistry.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "State two ways chemistry is important to everyday life.", answerKey: "Any two of: medicines/health, food and fertilisers, fuels/energy, materials (plastics, metals, cement), water treatment, understanding the environment. Award a mark each up to two.", marks: 2 },
        { type: "ESSAY", prompt: "Discuss the development of chemistry from alchemy to a modern science and explain its importance to society.", answerKey: "A full answer traces chemistry from alchemy (pre-scientific attempts to make gold and elixirs, which developed lab techniques) to a measurement-based science through workers such as Lavoisier (conservation of mass) and Dalton (atomic theory). It names branches (organic, inorganic, physical, analytical, biochemistry) and explains importance: medicines, food/fertilisers, fuels and energy, materials, water treatment and environmental understanding. Award marks for the historical development and the importance with examples.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 3.3 Classifying Matter According to Its State (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry/03%3A_Matter_and_Energy/3.03%3A_Classifying_Matter_According_to_Its_StateSolid_Liquid_and_Gas)
      slug: "matter-and-its-properties",
      title: "Matter and its Properties",
      objective:
        "By the end of the topic, learners should be able to classify matter into elements, compounds and mixtures, and distinguish physical and chemical properties and changes. (MoE Grade 12 Period V, CONTENTS 3.)",
      estimatedMinutes: 90,
      notes: `## Matter

- **Matter** — anything that has **mass** and occupies **space (volume)**.

## Classifying matter

| Type | Description | Example |
| --- | --- | --- |
| Element | one kind of atom; cannot be broken down chemically | oxygen, iron |
| Compound | two or more elements chemically combined in fixed ratio | water (H₂O) |
| Mixture | two or more substances not chemically joined | air, salt water |

- Mixtures may be **homogeneous** (uniform, e.g. salt solution) or **heterogeneous** (non-uniform, e.g. sand and water).

## Properties of matter

- **Physical property** — measured without changing the substance (colour, density, melting point).
- **Chemical property** — how a substance reacts to form new substances (flammability, reactivity).

## Physical vs chemical change

- **Physical change** — no new substance; often reversible (melting, dissolving).
- **Chemical change** — new substance forms; usually not easily reversed (burning, rusting).

## Common errors and misconceptions

- **A compound is a mixture** — a compound is chemically combined in a fixed ratio; a mixture is not.
- **Dissolving is a chemical change** — dissolving is usually physical.
- **All changes of state destroy matter** — mass is conserved (law of conservation of mass).`,
      workedExample: `**Task.** Classify each and state the change type: (a) iron, (b) water, (c) salt dissolving in water, (d) wood burning.

**Step 1 — Classify the substances**
- (a) Iron → **element**.
- (b) Water → **compound**.
- (c) Salt in water → a **mixture** (solution).

**Step 2 — Change types**
- (c) Salt dissolving → **physical change** (no new substance; can be recovered by evaporation).
- (d) Wood burning → **chemical change** (new substances: ash, gases; not easily reversed).

**Conclusion.** Iron is an element, water a compound, salt water a mixture; dissolving is physical while burning is chemical.`,
      quiz: [
        { prompt: "Matter is anything that has mass and occupies…", options: ["space", "time", "charge", "colour"], correctIndex: 0, explanation: "Mass and volume." },
        { prompt: "A substance made of one kind of atom is an…", options: ["element", "compound", "mixture", "solution"], correctIndex: 0, explanation: "Elements are single atom types." },
        { prompt: "Water (H₂O) is a…", options: ["compound", "element", "mixture", "metal"], correctIndex: 0, explanation: "Two elements chemically combined." },
        { prompt: "Air is a…", options: ["mixture", "compound", "element", "single substance"], correctIndex: 0, explanation: "Gases not chemically joined." },
        { prompt: "A uniform mixture is described as…", options: ["homogeneous", "heterogeneous", "an element", "a compound"], correctIndex: 0, explanation: "Homogeneous = uniform." },
        { prompt: "Colour and density are … properties.", options: ["physical", "chemical", "nuclear", "biological"], correctIndex: 0, explanation: "Measured without changing the substance." },
        { prompt: "Flammability is a … property.", options: ["chemical", "physical", "nuclear", "electrical"], correctIndex: 0, explanation: "It describes reaction behaviour." },
        { prompt: "Melting ice is a … change.", options: ["physical", "chemical", "nuclear", "irreversible chemical"], correctIndex: 0, explanation: "No new substance forms." },
        { prompt: "Rusting of iron is a … change.", options: ["chemical", "physical", "nuclear", "reversible physical"], correctIndex: 0, explanation: "New substance (rust) forms." },
        { prompt: "Compounds have elements in a … ratio.", options: ["fixed", "random", "variable", "changing"], correctIndex: 0, explanation: "Fixed proportion by mass." },
        { prompt: "Sand and water form a … mixture.", options: ["heterogeneous", "homogeneous", "compound", "an element"], correctIndex: 0, explanation: "Non-uniform mixture." },
        { prompt: "Which is an element?", options: ["oxygen", "water", "air", "salt"], correctIndex: 0, explanation: "Oxygen is a single element." },
        { prompt: "Dissolving salt in water is usually a … change.", options: ["physical", "chemical", "nuclear", "combustion"], correctIndex: 0, explanation: "Salt can be recovered by evaporation." },
        { prompt: "During any change, the total mass is…", options: ["conserved", "destroyed", "created", "halved"], correctIndex: 0, explanation: "Law of conservation of mass." },
        { prompt: "A compound can be broken into elements by…", options: ["chemical means", "sieving", "filtering", "hand-picking"], correctIndex: 0, explanation: "Chemical decomposition." },
        { prompt: "A mixture can be separated by…", options: ["physical methods", "only chemical means", "nuclear reactions", "no method"], correctIndex: 0, explanation: "e.g. filtration, distillation." },
        { prompt: "Burning is an example of a … change.", options: ["chemical", "physical", "reversible", "state"], correctIndex: 0, explanation: "New substances form." },
        { prompt: "Which is a physical property?", options: ["melting point", "reactivity with acid", "flammability", "rusting tendency"], correctIndex: 0, explanation: "Melting point is physical." },
        { prompt: "Salt solution is a … mixture.", options: ["homogeneous", "heterogeneous", "compound", "an element"], correctIndex: 0, explanation: "Uniform solution." },
        { prompt: "Iron and sulfur mixed (not heated) form a…", options: ["mixture", "compound", "element", "solution only"], correctIndex: 0, explanation: "Not chemically combined yet." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between an element, a compound and a mixture, with one example of each.", answerKey: "Element — one kind of atom, cannot be broken down chemically (e.g. oxygen, iron). Compound — two or more elements chemically combined in a fixed ratio (e.g. water). Mixture — two or more substances not chemically joined (e.g. air, salt water). Award a mark for each with an example.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is a chemical change?", options: ["Wood burning", "Ice melting", "Salt dissolving", "Water boiling"], correctIndex: 0, answerKey: "Burning forms new substances.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "A physical property is:", options: ["Density", "Flammability", "Reactivity with acid", "Tendency to rust"], correctIndex: 0, answerKey: "Density is measured without changing the substance.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Give two differences between a physical and a chemical change.", answerKey: "Physical change: no new substance, often reversible (e.g. melting, dissolving). Chemical change: new substance(s) formed, usually not easily reversed (e.g. burning, rusting). Award marks for two valid contrasting points.", marks: 2 },
        { type: "ESSAY", prompt: "Explain how matter is classified and how physical and chemical changes differ, using examples.", answerKey: "A full answer classifies matter into pure substances (elements — one kind of atom; compounds — elements chemically combined in fixed ratios) and mixtures (homogeneous or heterogeneous, physically combined and separable by physical means). It distinguishes physical changes (no new substance, often reversible — melting, dissolving) from chemical changes (new substances formed, not easily reversed — burning, rusting), noting mass is conserved throughout. Award marks for the classification and the change distinction with examples.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 2: Atoms, Molecules, and Ions / OpenStax 2.1 Atoms, Isotopes, Ions (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/02%3A_Atoms_Molecules_and_Ions)
      slug: "atomic-structure",
      title: "Atomic Structure",
      objective:
        "By the end of the topic, learners should be able to describe the sub-atomic particles, atomic number, mass number, isotopes and electron arrangement. (MoE Grade 12 Period V, CONTENTS 4.)",
      estimatedMinutes: 100,
      notes: `## Sub-atomic particles

| Particle | Charge | Relative mass | Location |
| --- | --- | --- | --- |
| Proton | +1 | 1 | nucleus |
| Neutron | 0 | 1 | nucleus |
| Electron | −1 | ~1/1840 | shells (orbits) |

## Atomic number and mass number

- **Atomic number (Z)** — number of protons (= electrons in a neutral atom); defines the element.
- **Mass number (A)** — number of protons + neutrons.
- **Number of neutrons = A − Z**.

## Isotopes

- **Isotopes** — atoms of the same element (same Z) with different numbers of **neutrons** (different A).
- Example: carbon-12 and carbon-14.

## Electron arrangement

- Electrons fill shells: **2, 8, 8, …**.
- The outer-shell electrons are the **valence electrons**, which control bonding.

## Common errors and misconceptions

- **Atomic number is protons + neutrons** — that is the mass number; atomic number is protons only.
- **Isotopes are different elements** — they are the same element with different neutron numbers.
- **Electrons have the same mass as protons** — electrons are ~1840 times lighter.`,
      workedExample: `**Task.** An atom of sodium is written ²³₁₁Na. State the number of protons, neutrons and electrons and its electron arrangement.

**Step 1 — Read Z and A**
Atomic number Z = 11 (subscript); mass number A = 23 (superscript).

**Step 2 — Count particles**
- Protons = Z = **11**.
- Electrons = 11 (neutral atom).
- Neutrons = A − Z = 23 − 11 = **12**.

**Step 3 — Electron arrangement**
11 electrons fill shells 2, 8, 1 → **2, 8, 1** (one valence electron).

**Conclusion.** Sodium-23 has 11 protons, 12 neutrons and 11 electrons arranged 2, 8, 1 — the single outer electron explains its Group 1 chemistry.`,
      quiz: [
        { prompt: "The proton has a charge of…", options: ["+1", "−1", "0", "+2"], correctIndex: 0, explanation: "Protons are positive." },
        { prompt: "The neutron has a charge of…", options: ["0", "+1", "−1", "+2"], correctIndex: 0, explanation: "Neutrons are neutral." },
        { prompt: "Electrons are found in…", options: ["shells around the nucleus", "the nucleus", "protons", "neutrons"], correctIndex: 0, explanation: "Electrons orbit in shells." },
        { prompt: "The atomic number equals the number of…", options: ["protons", "neutrons", "protons + neutrons", "electrons + neutrons"], correctIndex: 0, explanation: "Z = number of protons." },
        { prompt: "The mass number is protons plus…", options: ["neutrons", "electrons", "shells", "charge"], correctIndex: 0, explanation: "A = protons + neutrons." },
        { prompt: "Number of neutrons = …", options: ["A − Z", "A + Z", "Z − A", "A × Z"], correctIndex: 0, explanation: "Neutrons = mass number − atomic number." },
        { prompt: "Isotopes have the same number of … but different neutrons.", options: ["protons", "neutrons", "shells", "molecules"], correctIndex: 0, explanation: "Same Z, different A." },
        { prompt: "Carbon-12 and carbon-14 are…", options: ["isotopes", "compounds", "different elements", "ions"], correctIndex: 0, explanation: "Same element, different neutrons." },
        { prompt: "Electrons fill shells in the pattern…", options: ["2, 8, 8", "8, 2, 8", "1, 2, 3", "10, 10, 10"], correctIndex: 0, explanation: "2, 8, 8, ..." },
        { prompt: "The outer electrons that control bonding are…", options: ["valence electrons", "core electrons", "neutrons", "protons"], correctIndex: 0, explanation: "Valence electrons bond." },
        { prompt: "A neutral atom has equal numbers of protons and…", options: ["electrons", "neutrons", "shells", "isotopes"], correctIndex: 0, explanation: "Balanced charge." },
        { prompt: "The nucleus contains protons and…", options: ["neutrons", "electrons", "shells", "ions"], correctIndex: 0, explanation: "Nucleons = protons + neutrons." },
        { prompt: "Which particle is the lightest?", options: ["electron", "proton", "neutron", "nucleus"], correctIndex: 0, explanation: "Electron ~1/1840 the mass." },
        { prompt: "An atom with Z = 8 has … electrons.", options: ["8", "16", "4", "2"], correctIndex: 0, explanation: "Electrons = Z in a neutral atom." },
        { prompt: "Sodium (2,8,1) has … valence electrons.", options: ["1", "8", "2", "11"], correctIndex: 0, explanation: "One outer electron." },
        { prompt: "The element is defined by its number of…", options: ["protons", "neutrons", "electrons only", "shells"], correctIndex: 0, explanation: "Atomic number defines the element." },
        { prompt: "An atom of ¹⁶₈O has how many neutrons?", options: ["8", "16", "24", "4"], correctIndex: 0, explanation: "16 − 8 = 8." },
        { prompt: "Relative mass of a proton is about…", options: ["1", "0", "1/1840", "2"], correctIndex: 0, explanation: "Proton mass ≈ 1." },
        { prompt: "Adding a neutron to an atom makes a different…", options: ["isotope", "element", "ion", "compound"], correctIndex: 0, explanation: "Same element, new isotope." },
        { prompt: "The first electron shell holds a maximum of…", options: ["2 electrons", "8 electrons", "18 electrons", "1 electron"], correctIndex: 0, explanation: "First shell max = 2." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the charge and relative mass of the proton, neutron and electron.", answerKey: "Proton: charge +1, relative mass 1. Neutron: charge 0, relative mass 1. Electron: charge −1, relative mass ~1/1840 (negligible). Award a mark for each particle correctly described (up to 3).", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Isotopes of an element have the same number of protons but different numbers of:", options: ["Neutrons", "Electrons", "Shells", "Protons"], correctIndex: 0, answerKey: "Isotopes differ in neutron number.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The number of neutrons in an atom is given by:", options: ["Mass number − atomic number", "Mass number + atomic number", "Atomic number − mass number", "Atomic number only"], correctIndex: 0, answerKey: "Neutrons = A − Z.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "For the atom ³⁵₁₇Cl, state the number of protons, neutrons and electrons.", answerKey: "Protons = 17; electrons = 17; neutrons = 35 − 17 = 18. Award marks for each correct value.", marks: 3 },
        { type: "ESSAY", prompt: "Describe the structure of the atom and explain the meaning of atomic number, mass number and isotopes.", answerKey: "A full answer describes a central nucleus of protons (charge +1, mass 1) and neutrons (charge 0, mass 1), surrounded by electrons (charge −1, negligible mass) in shells (2, 8, 8...). Atomic number (Z) is the number of protons (and electrons in a neutral atom) and defines the element; mass number (A) is protons + neutrons; neutrons = A − Z. Isotopes are atoms of the same element (same Z) with different numbers of neutrons (different A), e.g. carbon-12 and carbon-14. Award marks for the structure, the definitions and isotopes.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 2: Elements, Atoms, and the Periodic Table (https://chem.libretexts.org/Courses/Mount_Aloysius_College/CHEM_100%3A_General_Chemistry_(O'Connor)/02%3A_Elements_Atoms_and_the_Periodic_Table)
      slug: "the-periodic-table",
      title: "The Periodic Table",
      objective:
        "By the end of the topic, learners should be able to describe the arrangement of the periodic table and the trends in groups and periods. (MoE Grade 12 Period V, CONTENTS 5.)",
      estimatedMinutes: 100,
      notes: `## Arrangement

- Elements are arranged in order of increasing **atomic number**.
- **Groups** — vertical columns; elements in a group have the **same number of valence electrons** and similar properties.
- **Periods** — horizontal rows; properties change across a period.

## Key groups

| Group | Name | Feature |
| --- | --- | --- |
| 1 | alkali metals | 1 valence electron; very reactive metals |
| 2 | alkaline earth metals | 2 valence electrons |
| 7 | halogens | 7 valence electrons; reactive non-metals |
| 0/18 | noble gases | full outer shell; inert |

## Trends

- **Metals** on the left, **non-metals** on the right, with a staircase of **metalloids** between.
- Across a period, elements change from metal to non-metal.
- **Group 1 reactivity increases** down the group; **Group 7 reactivity decreases** down the group.

## Common errors and misconceptions

- **Groups are the rows** — groups are columns; periods are rows.
- **The table is ordered by mass** — it is ordered by atomic number.
- **All elements in a period are alike** — elements in a group (not a period) are alike.`,
      workedExample: `**Task.** An element X has electron arrangement 2, 8, 7. (a) Give its group and period. (b) Is it a metal or non-metal? (c) Name the group.

**Step 1 — Period from number of shells**
Three shells → **Period 3**.

**Step 2 — Group from valence electrons**
Outer shell has 7 electrons → **Group 7**.

**Step 3 — Metal or non-metal and name**
Group 7 elements are reactive **non-metals**, the **halogens**. (This is chlorine, 2,8,7.)

**Conclusion.** X (2,8,7) is in Group 7, Period 3 — a halogen (chlorine), a reactive non-metal.`,
      quiz: [
        { prompt: "The periodic table is arranged by increasing…", options: ["atomic number", "mass number", "density", "colour"], correctIndex: 0, explanation: "Order of atomic number." },
        { prompt: "Vertical columns are called…", options: ["groups", "periods", "shells", "blocks only"], correctIndex: 0, explanation: "Groups are columns." },
        { prompt: "Horizontal rows are called…", options: ["periods", "groups", "families", "shells"], correctIndex: 0, explanation: "Periods are rows." },
        { prompt: "Elements in the same group have the same number of…", options: ["valence electrons", "neutrons", "protons", "shells"], correctIndex: 0, explanation: "Same outer electrons." },
        { prompt: "Group 1 elements are called…", options: ["alkali metals", "halogens", "noble gases", "alkaline earths"], correctIndex: 0, explanation: "Group 1 = alkali metals." },
        { prompt: "Group 7 elements are called…", options: ["halogens", "alkali metals", "noble gases", "transition metals"], correctIndex: 0, explanation: "Group 7 = halogens." },
        { prompt: "Group 0/18 elements are the…", options: ["noble gases", "alkali metals", "halogens", "metalloids"], correctIndex: 0, explanation: "Inert noble gases." },
        { prompt: "Metals are found on the … of the table.", options: ["left", "right", "top only", "bottom only"], correctIndex: 0, explanation: "Metals on the left." },
        { prompt: "Non-metals are found on the…", options: ["right", "left", "middle", "bottom"], correctIndex: 0, explanation: "Non-metals on the right." },
        { prompt: "Group 1 reactivity … down the group.", options: ["increases", "decreases", "stays constant", "disappears"], correctIndex: 0, explanation: "More reactive going down." },
        { prompt: "Group 7 reactivity … down the group.", options: ["decreases", "increases", "stays constant", "doubles"], correctIndex: 0, explanation: "Less reactive going down." },
        { prompt: "The period number equals the number of … an atom has.", options: ["electron shells", "protons", "neutrons", "isotopes"], correctIndex: 0, explanation: "Shells = period." },
        { prompt: "An element with 2 valence electrons is in Group…", options: ["2", "7", "1", "0"], correctIndex: 0, explanation: "Group 2 (alkaline earths)." },
        { prompt: "Elements between metals and non-metals are…", options: ["metalloids", "gases", "liquids", "alloys"], correctIndex: 0, explanation: "Metalloids/semi-metals." },
        { prompt: "Noble gases are unreactive because they have…", options: ["full outer shells", "one electron", "no protons", "many neutrons"], correctIndex: 0, explanation: "Complete outer shells." },
        { prompt: "Across a period, elements change from metal to…", options: ["non-metal", "gas only", "liquid only", "isotope"], correctIndex: 0, explanation: "Metallic to non-metallic character." },
        { prompt: "Sodium (2,8,1) is in Group…", options: ["1", "2", "7", "8"], correctIndex: 0, explanation: "One valence electron." },
        { prompt: "Chlorine (2,8,7) is in Period…", options: ["3", "1", "2", "7"], correctIndex: 0, explanation: "Three shells = Period 3." },
        { prompt: "The transition metals are found in the … of the table.", options: ["middle block", "far left", "far right", "bottom row only"], correctIndex: 0, explanation: "Central d-block." },
        { prompt: "Elements in the same group have … chemical properties.", options: ["similar", "opposite", "no", "random"], correctIndex: 0, explanation: "Same valence electrons." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain the difference between a group and a period in the periodic table.", answerKey: "A group is a vertical column; its elements have the same number of valence electrons and similar chemical properties. A period is a horizontal row; the period number equals the number of electron shells, and properties change across it from metallic to non-metallic. Award marks for both definitions.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Elements in the same group have the same number of:", options: ["Valence electrons", "Neutrons", "Protons", "Isotopes"], correctIndex: 0, answerKey: "Same valence electrons gives similar properties.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The periodic table is arranged in order of increasing:", options: ["Atomic number", "Mass number", "Density", "Reactivity"], correctIndex: 0, answerKey: "Order of atomic number.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "An element has the arrangement 2, 8, 2. State its group and period.", answerKey: "Group 2 (two valence electrons) and Period 3 (three shells). Award a mark for the group and a mark for the period.", marks: 2 },
        { type: "ESSAY", prompt: "Describe how the periodic table is organised and the main trends in reactivity for Groups 1 and 7.", answerKey: "A full answer explains that elements are arranged by increasing atomic number in groups (columns, same valence electrons and similar properties) and periods (rows, number of shells, changing metal-to-non-metal character). Metals are on the left, non-metals on the right, with metalloids between. Group 1 (alkali metals) reactivity increases down the group (outer electron lost more easily), while Group 7 (halogens) reactivity decreases down the group (harder to gain an electron). Award marks for the organisation and the two reactivity trends.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — Introduction to Chemical Bonding (https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Supplemental_Modules_and_Websites_(Inorganic_Chemistry)/Chemical_Compounds/Introduction_to_Chemical_Bonding)
      slug: "chemical-bonding",
      title: "Chemical Bonding",
      objective:
        "By the end of the topic, learners should be able to describe ionic, covalent and metallic bonding and relate bonding to properties. (MoE Grade 12 Period V, CONTENTS 6.)",
      estimatedMinutes: 110,
      notes: `## Why atoms bond

- Atoms bond to achieve a **stable (full) outer shell** of electrons (like the noble gases).

## Ionic bonding

- **Ionic bond** — electrons are **transferred** from a metal to a non-metal, forming **ions** (a metal cation⁺ and a non-metal anion⁻) held by strong electrostatic attraction.
- Example: Na → Na⁺ + e⁻; Cl + e⁻ → Cl⁻; NaCl.
- **Properties:** high melting points; conduct when molten or dissolved; often soluble in water.

## Covalent bonding

- **Covalent bond** — electrons are **shared** between two non-metal atoms.
- Example: H₂, H₂O, CO₂.
- **Properties:** low melting/boiling points (simple molecules); do not conduct electricity.

## Metallic bonding

- **Metallic bond** — a lattice of positive metal ions in a "sea" of delocalised electrons.
- **Properties:** conduct electricity and heat; malleable and ductile; shiny.

## Common errors and misconceptions

- **Ionic bonds share electrons** — they transfer them; covalent bonds share.
- **Covalent compounds conduct electricity** — most do not.
- **Bonding is between a metal and metal for ionic** — ionic is metal + non-metal; covalent is non-metal + non-metal.`,
      workedExample: `**Task.** Describe the bonding in (a) sodium chloride and (b) water, and predict one property of each.

**Step 1 — Sodium chloride (metal + non-metal)**
Sodium transfers its one outer electron to chlorine: Na → Na⁺, Cl → Cl⁻. The oppositely charged ions attract strongly → **ionic bonding**. Property: high melting point; conducts when molten or dissolved.

**Step 2 — Water (non-metal + non-metal)**
Oxygen shares electrons with two hydrogen atoms → **covalent bonding** (H₂O). Property: a simple molecule with a low boiling point; does not conduct electricity.

**Conclusion.** NaCl is ionic (electron transfer, high melting point, conducts when molten) while water is covalent (electron sharing, low boiling point, non-conducting).`,
      quiz: [
        { prompt: "Atoms bond to achieve a … outer shell.", options: ["full (stable)", "empty", "half-full", "single-electron"], correctIndex: 0, explanation: "A stable octet." },
        { prompt: "In ionic bonding, electrons are…", options: ["transferred", "shared", "destroyed", "created"], correctIndex: 0, explanation: "Metal to non-metal transfer." },
        { prompt: "In covalent bonding, electrons are…", options: ["shared", "transferred", "removed", "ionised"], correctIndex: 0, explanation: "Shared between non-metals." },
        { prompt: "Ionic bonds form between a metal and a…", options: ["non-metal", "metal", "noble gas", "another metal"], correctIndex: 0, explanation: "Metal + non-metal." },
        { prompt: "Covalent bonds form between … atoms.", options: ["non-metal and non-metal", "metal and metal", "metal and non-metal", "noble gases"], correctIndex: 0, explanation: "Two non-metals share." },
        { prompt: "Sodium chloride is held together by … bonding.", options: ["ionic", "covalent", "metallic", "hydrogen only"], correctIndex: 0, explanation: "Na⁺ and Cl⁻ attract." },
        { prompt: "Water molecules are held by … bonds.", options: ["covalent", "ionic", "metallic", "no"], correctIndex: 0, explanation: "H₂O is covalent." },
        { prompt: "Metallic bonding involves a sea of…", options: ["delocalised electrons", "protons", "neutrons", "ions only"], correctIndex: 0, explanation: "Free electrons around metal ions." },
        { prompt: "Ionic compounds conduct electricity when…", options: ["molten or dissolved", "solid only", "never", "frozen"], correctIndex: 0, explanation: "Ions become mobile." },
        { prompt: "Simple covalent compounds usually have … melting points.", options: ["low", "very high", "infinite", "negative"], correctIndex: 0, explanation: "Weak forces between molecules." },
        { prompt: "Metals conduct electricity because of…", options: ["free (delocalised) electrons", "ions only", "neutrons", "covalent bonds"], correctIndex: 0, explanation: "Mobile electrons carry charge." },
        { prompt: "A sodium ion has a charge of…", options: ["+1", "−1", "+2", "0"], correctIndex: 0, explanation: "Na loses one electron." },
        { prompt: "A chloride ion has a charge of…", options: ["−1", "+1", "−2", "0"], correctIndex: 0, explanation: "Cl gains one electron." },
        { prompt: "Which property belongs to metals?", options: ["malleable and ductile", "brittle non-conductors", "gases at room temperature", "low density always"], correctIndex: 0, explanation: "Metallic bonding allows shaping." },
        { prompt: "Ionic compounds are often … in water.", options: ["soluble", "insoluble", "reactive as gases", "flammable"], correctIndex: 0, explanation: "Many dissolve in water." },
        { prompt: "A shared pair of electrons is a … bond.", options: ["single covalent", "ionic", "metallic", "hydrogen"], correctIndex: 0, explanation: "One shared pair = single bond." },
        { prompt: "Which compound is ionic?", options: ["NaCl", "H₂O", "CO₂", "CH₄"], correctIndex: 0, explanation: "NaCl is metal + non-metal." },
        { prompt: "Which compound is covalent?", options: ["CO₂", "NaCl", "MgO", "KBr"], correctIndex: 0, explanation: "CO₂ is non-metal + non-metal." },
        { prompt: "Covalent compounds generally … conduct electricity.", options: ["do not", "always", "only as solids", "explosively"], correctIndex: 0, explanation: "No free ions or electrons." },
        { prompt: "Magnesium oxide (metal + non-metal) has … bonding.", options: ["ionic", "covalent", "metallic", "hydrogen"], correctIndex: 0, explanation: "MgO is ionic." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain how an ionic bond and a covalent bond are formed.", answerKey: "An ionic bond forms when electrons are transferred from a metal atom to a non-metal atom, producing a positive ion and a negative ion held together by strong electrostatic attraction. A covalent bond forms when two non-metal atoms share one or more pairs of electrons. Award a mark for each explanation.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Which substance has metallic bonding?", options: ["Copper", "Water", "Carbon dioxide", "Sodium chloride"], correctIndex: 0, answerKey: "Copper is a metal (metallic bonding).", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Ionic compounds conduct electricity when:", options: ["Molten or dissolved in water", "Solid", "Never", "Frozen"], correctIndex: 0, answerKey: "Ions become mobile when molten or dissolved.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "State two properties of ionic compounds and two of metals.", answerKey: "Ionic (any two): high melting points; conduct when molten/dissolved; often soluble in water; hard/brittle. Metals (any two): conduct electricity and heat; malleable and ductile; shiny; high density. Award marks for two of each.", marks: 4 },
        { type: "ESSAY", prompt: "Compare ionic, covalent and metallic bonding, explaining how each forms and relating the bonding to the properties of the substances.", answerKey: "A full answer explains ionic bonding (electron transfer between metal and non-metal forming ions attracted electrostatically; high melting points, conduct when molten/dissolved, often soluble), covalent bonding (electron sharing between non-metals; simple molecules with low melting/boiling points, non-conducting), and metallic bonding (lattice of positive ions in a sea of delocalised electrons; conduct electricity/heat, malleable, ductile, shiny). Award marks for each type of bonding correctly linked to properties.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 11.3 Solution Concentration (stoichiometry) / Central Science Ch 3 (https://chem.libretexts.org/Courses/can/CHEM_210%3A_General_Chemistry_I_(An_Atoms_Up_Approach)/11%3A_Solutions_Concentration_and_Dilution/11.03%3A_Solution_Concentration_-_Molarity)
      slug: "chemical-reactions-equations-and-stoichiometry",
      title: "Chemical Reactions, Equations and Stoichiometry",
      objective:
        "By the end of the topic, learners should be able to write and balance chemical equations and use the mole concept in stoichiometry. (MoE Grade 12 Period V, CONTENTS 7.)",
      estimatedMinutes: 130,
      notes: `## Chemical equations

- A **balanced equation** has the same number of each type of atom on both sides (conservation of mass).
- **Reactants → products**; state symbols: (s), (l), (g), (aq).

## The mole

- **Mole** — the amount containing **6.02 × 10²³** particles (Avogadro's number).
- **Moles = mass ÷ molar mass** (n = m/M).
- **Molar mass** = relative formula mass in g/mol.

## Stoichiometry

- The **coefficients** in a balanced equation give the **mole ratio** of reactants and products.
- Steps: balance the equation → convert given mass to moles → use the mole ratio → convert to the required quantity.

## Types of reaction

- Combination, decomposition, displacement, double decomposition (precipitation), neutralisation, combustion.

## Common errors and misconceptions

- **Change subscripts to balance** — only change coefficients, never subscripts.
- **Moles equal mass** — moles = mass ÷ molar mass.
- **The mole ratio is 1:1 always** — it is set by the balanced equation's coefficients.`,
      workedExample: `**Task.** How many grams of water form when 4.0 g of hydrogen burns completely? (2H₂ + O₂ → 2H₂O; H = 1, O = 16.)

**Step 1 — Balance (already balanced)**
2H₂ + O₂ → 2H₂O.

**Step 2 — Moles of hydrogen**
Molar mass H₂ = 2 g/mol; n(H₂) = 4.0 ÷ 2 = 2.0 mol.

**Step 3 — Mole ratio**
From the equation, 2 mol H₂ → 2 mol H₂O, so 2.0 mol H₂ → 2.0 mol H₂O.

**Step 4 — Mass of water**
Molar mass H₂O = 18 g/mol; mass = 2.0 × 18 = **36 g**.

**Conclusion.** Burning 4.0 g of hydrogen produces 36 g of water, found by converting to moles, using the mole ratio and converting back to mass.`,
      quiz: [
        { prompt: "A balanced equation has equal numbers of each … on both sides.", options: ["atom", "molecule", "mole only", "electron only"], correctIndex: 0, explanation: "Conservation of mass." },
        { prompt: "To balance equations you change the…", options: ["coefficients", "subscripts", "symbols", "charges"], correctIndex: 0, explanation: "Never change subscripts." },
        { prompt: "Avogadro's number is about…", options: ["6.02 × 10²³", "3.14", "9.81", "1.6 × 10⁻¹⁹"], correctIndex: 0, explanation: "Particles per mole." },
        { prompt: "Moles = mass ÷ …", options: ["molar mass", "volume", "density", "pressure"], correctIndex: 0, explanation: "n = m/M." },
        { prompt: "The state symbol for a gas is…", options: ["(g)", "(s)", "(l)", "(aq)"], correctIndex: 0, explanation: "(g) means gas." },
        { prompt: "The state symbol (aq) means…", options: ["dissolved in water", "solid", "liquid", "gas"], correctIndex: 0, explanation: "Aqueous solution." },
        { prompt: "Coefficients in an equation give the … ratio.", options: ["mole", "mass", "volume of solids", "charge"], correctIndex: 0, explanation: "Mole ratio of species." },
        { prompt: "The molar mass of water (H₂O) is…", options: ["18 g/mol", "2 g/mol", "16 g/mol", "36 g/mol"], correctIndex: 0, explanation: "2(1) + 16 = 18." },
        { prompt: "How many moles are in 44 g of CO₂ (M = 44)?", options: ["1", "2", "0.5", "44"], correctIndex: 0, explanation: "44 ÷ 44 = 1 mol." },
        { prompt: "Burning a fuel in oxygen is a … reaction.", options: ["combustion", "decomposition", "displacement", "neutralisation"], correctIndex: 0, explanation: "Combustion with oxygen." },
        { prompt: "A reaction where one element replaces another is…", options: ["displacement", "combination", "decomposition", "combustion"], correctIndex: 0, explanation: "Displacement reaction." },
        { prompt: "Acid + base → salt + water is…", options: ["neutralisation", "combustion", "decomposition", "displacement"], correctIndex: 0, explanation: "Neutralisation." },
        { prompt: "Breaking a compound into simpler substances is…", options: ["decomposition", "combination", "displacement", "neutralisation"], correctIndex: 0, explanation: "Decomposition." },
        { prompt: "In 2H₂ + O₂ → 2H₂O, the ratio H₂ : H₂O is…", options: ["1 : 1", "2 : 1", "1 : 2", "2 : 3"], correctIndex: 0, explanation: "2 mol H₂ → 2 mol H₂O." },
        { prompt: "The mass of 2 mol of NaOH (M = 40) is…", options: ["80 g", "40 g", "20 g", "2 g"], correctIndex: 0, explanation: "2 × 40 = 80 g." },
        { prompt: "Mass is conserved in a reaction, so total reactant mass equals…", options: ["total product mass", "half the products", "twice the products", "zero"], correctIndex: 0, explanation: "Conservation of mass." },
        { prompt: "The molar mass of O₂ is…", options: ["32 g/mol", "16 g/mol", "8 g/mol", "2 g/mol"], correctIndex: 0, explanation: "2 × 16 = 32." },
        { prompt: "0.5 mol of a gas contains … particles.", options: ["3.01 × 10²³", "6.02 × 10²³", "1.2 × 10²⁴", "0.5"], correctIndex: 0, explanation: "Half of Avogadro's number." },
        { prompt: "A precipitation reaction forms a…", options: ["solid from two solutions", "gas only", "pure metal", "liquid only"], correctIndex: 0, explanation: "Insoluble solid (precipitate)." },
        { prompt: "To find mass from moles, use mass = …", options: ["moles × molar mass", "moles ÷ molar mass", "molar mass ÷ moles", "moles + molar mass"], correctIndex: 0, explanation: "m = n × M." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the law of conservation of mass and explain how it relates to balancing equations.", answerKey: "The law of conservation of mass states that matter is neither created nor destroyed in a chemical reaction, so the total mass of reactants equals the total mass of products. Balancing an equation ensures the same number of each type of atom appears on both sides, which reflects this conservation. Award marks for the law and the link to balancing.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "The number of moles in 36 g of water (M = 18) is:", options: ["2", "1", "0.5", "18"], correctIndex: 0, answerKey: "36 ÷ 18 = 2 mol.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "To balance a chemical equation, you may only change:", options: ["The coefficients", "The subscripts", "The symbols", "The charges"], correctIndex: 0, answerKey: "Only coefficients may be changed.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Balance: __N₂ + __H₂ → __NH₃, and state the mole ratio of N₂ to H₂.", answerKey: "N₂ + 3H₂ → 2NH₃. The mole ratio of N₂ to H₂ is 1 : 3. Award a mark for the balanced equation and a mark for the ratio.", marks: 2 },
        { type: "ESSAY", prompt: "Explain how to use a balanced equation and the mole concept to calculate the mass of a product from the mass of a reactant, using an example.", answerKey: "A full answer explains: write and balance the equation; convert the given mass of reactant to moles (n = m/M); use the mole ratio from the coefficients to find the moles of product; convert moles of product back to mass (m = n × M). Example: for 2H₂ + O₂ → 2H₂O, 4.0 g H₂ is 2.0 mol, giving 2.0 mol H₂O = 36 g of water. Award marks for the method steps and a correct worked example.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 20.2 Balancing Oxidation-Reduction Equations (Central Science) (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/20%3A_Electrochemistry/20.02%3A_Balanced_Oxidation-Reduction_Equations)
      slug: "oxidation-reduction-reactions",
      title: "Oxidation-Reduction Reactions",
      objective:
        "By the end of the topic, learners should be able to define oxidation and reduction, assign oxidation numbers and identify oxidising and reducing agents. (MoE Grade 12 Period V, CONTENTS 8.)",
      estimatedMinutes: 120,
      notes: `## Definitions

- **Oxidation** — loss of electrons (or gain of oxygen / loss of hydrogen).
- **Reduction** — gain of electrons (or loss of oxygen / gain of hydrogen).
- Remember **OIL RIG:** Oxidation Is Loss, Reduction Is Gain (of electrons).
- Redox reactions have oxidation and reduction happening together.

## Oxidising and reducing agents

- **Oxidising agent** — accepts electrons (is itself reduced).
- **Reducing agent** — donates electrons (is itself oxidised).

## Oxidation numbers (states)

- Uncombined element = **0**; simple ion = its charge.
- Oxygen usually **−2**; hydrogen usually **+1**.
- The sum of oxidation numbers in a neutral compound = 0; in an ion = its charge.
- **Oxidation** = oxidation number increases; **reduction** = decreases.

## Common errors and misconceptions

- **Oxidation is gain of electrons** — it is loss of electrons.
- **The oxidising agent is oxidised** — it is reduced (it oxidises the other).
- **Only oxygen shows oxidation** — redox is about electron transfer, not only oxygen.`,
      workedExample: `**Task.** In the reaction Zn + CuSO₄ → ZnSO₄ + Cu, identify what is oxidised, what is reduced, and the oxidising and reducing agents.

**Step 1 — Track the electrons**
- Zn → Zn²⁺ + 2e⁻: zinc **loses** electrons → **oxidised** (oxidation number 0 → +2).
- Cu²⁺ + 2e⁻ → Cu: copper ions **gain** electrons → **reduced** (+2 → 0).

**Step 2 — Identify the agents**
- The species that gains electrons (Cu²⁺) is the **oxidising agent**.
- The species that loses electrons (Zn) is the **reducing agent**.

**Conclusion.** Zinc is oxidised (the reducing agent) and copper(II) ions are reduced (the oxidising agent) — a redox displacement reaction.`,
      quiz: [
        { prompt: "Oxidation is the … of electrons.", options: ["loss", "gain", "sharing", "creation"], correctIndex: 0, explanation: "OIL: Oxidation Is Loss." },
        { prompt: "Reduction is the … of electrons.", options: ["gain", "loss", "sharing", "removal"], correctIndex: 0, explanation: "RIG: Reduction Is Gain." },
        { prompt: "'OIL RIG' helps remember…", options: ["oxidation is loss, reduction is gain", "reduction is loss", "both gain electrons", "neither changes"], correctIndex: 0, explanation: "Electron mnemonic." },
        { prompt: "An oxidising agent … electrons.", options: ["accepts", "donates", "shares equally", "destroys"], correctIndex: 0, explanation: "It is reduced itself." },
        { prompt: "A reducing agent … electrons.", options: ["donates", "accepts", "removes protons", "gains oxygen"], correctIndex: 0, explanation: "It is oxidised itself." },
        { prompt: "The oxidation number of an uncombined element is…", options: ["0", "+1", "−1", "+2"], correctIndex: 0, explanation: "Elements have oxidation number 0." },
        { prompt: "Oxygen usually has an oxidation number of…", options: ["−2", "+2", "0", "−1"], correctIndex: 0, explanation: "Usually −2." },
        { prompt: "Hydrogen usually has an oxidation number of…", options: ["+1", "−1", "0", "+2"], correctIndex: 0, explanation: "Usually +1." },
        { prompt: "In oxidation, the oxidation number…", options: ["increases", "decreases", "stays the same", "becomes zero"], correctIndex: 0, explanation: "Loss of electrons raises it." },
        { prompt: "In reduction, the oxidation number…", options: ["decreases", "increases", "doubles", "stays fixed"], correctIndex: 0, explanation: "Gain of electrons lowers it." },
        { prompt: "In Zn → Zn²⁺ + 2e⁻, zinc is…", options: ["oxidised", "reduced", "unchanged", "an oxidising agent"], correctIndex: 0, explanation: "Loses electrons." },
        { prompt: "In Cu²⁺ + 2e⁻ → Cu, copper is…", options: ["reduced", "oxidised", "unchanged", "a reducing agent"], correctIndex: 0, explanation: "Gains electrons." },
        { prompt: "Oxidation can also mean … of oxygen.", options: ["gain", "loss", "removal only", "no change"], correctIndex: 0, explanation: "Gain of oxygen." },
        { prompt: "Reduction can also mean … of oxygen.", options: ["loss", "gain", "sharing", "doubling"], correctIndex: 0, explanation: "Loss of oxygen." },
        { prompt: "The sum of oxidation numbers in a neutral compound is…", options: ["0", "+1", "−1", "the number of atoms"], correctIndex: 0, explanation: "They cancel to zero." },
        { prompt: "The oxidation number of Na⁺ is…", options: ["+1", "−1", "0", "+2"], correctIndex: 0, explanation: "Simple ion = its charge." },
        { prompt: "In a redox reaction, oxidation and reduction…", options: ["occur together", "never occur together", "cancel out to nothing", "are the same process"], correctIndex: 0, explanation: "Electrons transfer between species." },
        { prompt: "A species that is reduced acts as the…", options: ["oxidising agent", "reducing agent", "catalyst", "solvent"], correctIndex: 0, explanation: "It oxidises the other." },
        { prompt: "The oxidation number of chlorine in NaCl is…", options: ["−1", "+1", "0", "−2"], correctIndex: 0, explanation: "Chloride ion is −1." },
        { prompt: "Rusting of iron is an example of…", options: ["oxidation", "reduction only", "neutralisation", "distillation"], correctIndex: 0, explanation: "Iron is oxidised." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define oxidation and reduction in terms of electrons.", answerKey: "Oxidation is the loss of electrons; reduction is the gain of electrons (OIL RIG). Award a mark for each definition.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "An oxidising agent is a species that:", options: ["Gains electrons (is reduced)", "Loses electrons (is oxidised)", "Neither gains nor loses electrons", "Only gains protons"], correctIndex: 0, answerKey: "An oxidising agent accepts electrons and is itself reduced.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The usual oxidation number of oxygen in compounds is:", options: ["−2", "+2", "0", "−1"], correctIndex: 0, answerKey: "Oxygen is usually −2.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "In Mg + 2HCl → MgCl₂ + H₂, state what is oxidised and what is reduced.", answerKey: "Magnesium is oxidised (Mg → Mg²⁺ + 2e⁻, 0 to +2); hydrogen ions are reduced (2H⁺ + 2e⁻ → H₂, +1 to 0). Award marks for identifying both correctly.", marks: 2 },
        { type: "ESSAY", prompt: "Explain oxidation and reduction using oxidation numbers, and describe how to identify the oxidising and reducing agents in a redox reaction, with an example.", answerKey: "A full answer defines oxidation as loss of electrons (oxidation number increases) and reduction as gain of electrons (oxidation number decreases), noting they occur together (redox). It assigns oxidation numbers (element = 0, simple ion = charge, oxygen usually −2, hydrogen usually +1; sums to zero for a neutral compound). It identifies the oxidising agent as the species reduced and the reducing agent as the species oxidised. Example: in Zn + CuSO₄ → ZnSO₄ + Cu, Zn is oxidised (reducing agent) and Cu²⁺ is reduced (oxidising agent). Award marks for the definitions, oxidation-number rules, agent identification and a correct example.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 1.4 States of Matter - Solid, Liquid, and Gas (https://chem.libretexts.org/Courses/American_River_College/CHEM_309%3A_Applied_Chemistry_for_the_Health_Sciences/01%3A_Topics_in_General_Chemistry_I/1.04%3A_States_of_Matter_-_Solid_Liquid_and_Gas)
      slug: "states-of-matter",
      title: "States of Matter",
      objective:
        "By the end of the topic, learners should be able to describe the three states of matter using the kinetic theory and explain changes of state. (MoE Grade 12 Period V, CONTENTS 9.)",
      estimatedMinutes: 90,
      notes: `## The three states

| State | Shape | Volume | Particle arrangement |
| --- | --- | --- | --- |
| Solid | fixed | fixed | close-packed, fixed positions, vibrate |
| Liquid | takes container | fixed | close but can move/slide |
| Gas | fills container | fills container | far apart, fast, random |

## Kinetic theory

- All matter is made of tiny **particles** in constant **motion**.
- **Heating** gives particles more energy — they move faster and move apart.

## Changes of state

- **Melting** (solid → liquid), **freezing** (liquid → solid), **boiling/evaporation** (liquid → gas), **condensation** (gas → liquid), **sublimation** (solid → gas directly).
- These are **physical changes**; temperature stays constant during a change of state (energy breaks forces, not raises temperature).

## Common errors and misconceptions

- **Particles in a solid are still** — they vibrate about fixed positions.
- **Gases have no mass** — gases have mass; particles are just far apart.
- **Boiling raises the temperature during the change** — temperature stays constant at the boiling point until all liquid has boiled.`,
      workedExample: `**Task.** Describe what happens to the particles of ice as it is heated from a solid to a gas.

**Step 1 — Solid (ice)**
Particles are close-packed in fixed positions, vibrating.

**Step 2 — Melting to liquid**
Heat gives particles more energy; some forces break so particles can slide past each other — the ice **melts** to water at 0 °C.

**Step 3 — Boiling to gas**
Further heating makes particles move faster; at 100 °C the forces between them are overcome and the liquid **boils** to steam (gas), where particles are far apart and fast.

**Conclusion.** Heating increases particle energy, changing ice → water → steam; during each change of state the temperature stays constant while the forces between particles are overcome.`,
      quiz: [
        { prompt: "A solid has a … shape and volume.", options: ["fixed", "changing", "no", "gaseous"], correctIndex: 0, explanation: "Fixed shape and volume." },
        { prompt: "A liquid has a fixed volume but takes the … of its container.", options: ["shape", "colour", "mass", "temperature"], correctIndex: 0, explanation: "Liquids flow to fit." },
        { prompt: "A gas … its container.", options: ["fills", "sits at the bottom of", "avoids", "shrinks from"], correctIndex: 0, explanation: "Gases expand to fill." },
        { prompt: "In a solid, particles…", options: ["vibrate in fixed positions", "move freely and fast", "are absent", "are stationary forever"], correctIndex: 0, explanation: "They vibrate about fixed points." },
        { prompt: "In a gas, particles are…", options: ["far apart and fast", "close and fixed", "in layers", "not moving"], correctIndex: 0, explanation: "Widely separated, rapid motion." },
        { prompt: "Melting is the change from…", options: ["solid to liquid", "liquid to gas", "gas to liquid", "solid to gas"], correctIndex: 0, explanation: "Solid → liquid." },
        { prompt: "Condensation is the change from…", options: ["gas to liquid", "liquid to gas", "solid to liquid", "liquid to solid"], correctIndex: 0, explanation: "Gas → liquid." },
        { prompt: "Freezing is the change from…", options: ["liquid to solid", "solid to liquid", "gas to solid", "liquid to gas"], correctIndex: 0, explanation: "Liquid → solid." },
        { prompt: "Sublimation is the change from…", options: ["solid directly to gas", "liquid to solid", "gas to liquid", "solid to liquid"], correctIndex: 0, explanation: "Solid → gas directly." },
        { prompt: "Heating gives particles more…", options: ["energy", "mass", "charge", "colour"], correctIndex: 0, explanation: "They move faster." },
        { prompt: "During a change of state, the temperature…", options: ["stays constant", "rises quickly", "falls to zero", "doubles"], correctIndex: 0, explanation: "Energy breaks forces, not raises temperature." },
        { prompt: "Changes of state are … changes.", options: ["physical", "chemical", "nuclear", "irreversible"], correctIndex: 0, explanation: "No new substance forms." },
        { prompt: "Particles in a liquid can…", options: ["move and slide past each other", "not move at all", "leave the liquid instantly", "vibrate only in fixed spots"], correctIndex: 0, explanation: "Close but mobile." },
        { prompt: "Which has the highest particle energy?", options: ["gas", "liquid", "solid", "all equal"], correctIndex: 0, explanation: "Gas particles move fastest." },
        { prompt: "Evaporation happens at the … of a liquid.", options: ["surface", "bottom only", "middle only", "container walls only"], correctIndex: 0, explanation: "Surface particles escape." },
        { prompt: "Kinetic theory says particles are in constant…", options: ["motion", "rest", "decay", "reaction"], correctIndex: 0, explanation: "Continuous movement." },
        { prompt: "Cooling a gas enough causes…", options: ["condensation", "melting", "sublimation", "boiling"], correctIndex: 0, explanation: "Gas → liquid." },
        { prompt: "Which state is easiest to compress?", options: ["gas", "solid", "liquid", "none"], correctIndex: 0, explanation: "Gas particles are far apart." },
        { prompt: "Ice melting to water is an example of a … change.", options: ["physical", "chemical", "nuclear", "combustion"], correctIndex: 0, explanation: "Physical change of state." },
        { prompt: "During boiling, energy is used to…", options: ["overcome forces between particles", "raise the temperature", "create atoms", "destroy matter"], correctIndex: 0, explanation: "Breaks intermolecular forces." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe the arrangement and motion of particles in a solid, a liquid and a gas.", answerKey: "Solid: particles close-packed in fixed positions, only vibrating. Liquid: particles close together but able to move/slide past each other. Gas: particles far apart, moving fast and randomly. Award a mark for each state.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which change of state is sublimation?", options: ["Solid directly to gas", "Liquid to solid", "Gas to liquid", "Solid to liquid"], correctIndex: 0, answerKey: "Sublimation is solid → gas.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "During a change of state, the temperature:", options: ["Stays constant", "Rises steadily", "Falls to zero", "Doubles"], correctIndex: 0, answerKey: "Energy overcomes forces without raising temperature.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain, using the kinetic theory, why a gas fills its container while a solid keeps its shape.", answerKey: "In a gas the particles have high energy and are far apart, moving fast and randomly, so they spread out to fill any container. In a solid the particles are close-packed in fixed positions with strong forces, only vibrating, so the solid keeps a fixed shape and volume. Award marks for both explanations.", marks: 2 },
        { type: "ESSAY", prompt: "Use the kinetic theory to describe the three states of matter and explain what happens to the particles during melting and boiling.", answerKey: "A full answer uses the kinetic theory (all matter is made of particles in constant motion) to describe solids (close-packed, fixed positions, vibrating — fixed shape/volume), liquids (close but mobile — fixed volume, takes container shape) and gases (far apart, fast, random — fills container). During melting, heating gives solid particles enough energy to overcome some forces so they can move/slide (solid → liquid); during boiling, further energy overcomes the forces so particles separate into a gas (liquid → gas). The temperature stays constant during each change of state while energy breaks the forces between particles. Award marks for the three states and the melting/boiling explanations.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 11.3 Solution Concentration - Molarity (https://chem.libretexts.org/Courses/can/CHEM_210%3A_General_Chemistry_I_(An_Atoms_Up_Approach)/11%3A_Solutions_Concentration_and_Dilution/11.03%3A_Solution_Concentration_-_Molarity)
      slug: "solutions-and-solution-stoichiometry",
      title: "Solutions and Solution Stoichiometry",
      objective:
        "By the end of the topic, learners should be able to define concentration terms, calculate molarity and carry out solution stoichiometry. (MoE Grade 12 Period V, CONTENTS 10.)",
      estimatedMinutes: 120,
      notes: `## Solutions

- **Solution** = **solute** (dissolved) + **solvent** (does the dissolving).
- **Concentration** — the amount of solute in a given amount of solution.

## Concentration units

- **Molarity (mol/dm³):** concentration = moles of solute ÷ volume in dm³.
- **Mass concentration (g/dm³):** grams of solute ÷ volume in dm³.
- Concentration (g/dm³) = concentration (mol/dm³) × molar mass.

## Key relationships

- **moles = concentration (mol/dm³) × volume (dm³)**.
- **Dilution:** C₁V₁ = C₂V₂ (adding solvent lowers concentration; moles stay the same).

## Solution stoichiometry

- Use the balanced equation's mole ratio with the moles found from concentration × volume.

## Common errors and misconceptions

- **Volume in cm³ used directly** — convert cm³ to dm³ (÷1000) for mol/dm³.
- **Concentration and amount are the same** — concentration is amount per volume.
- **Diluting changes the number of moles** — dilution keeps moles the same, only lowers concentration.`,
      workedExample: `**Task.** Calculate the concentration in mol/dm³ of a solution containing 0.20 mol of NaOH in 250 cm³.

**Step 1 — Convert volume to dm³**
250 cm³ ÷ 1000 = 0.250 dm³.

**Step 2 — Use concentration = moles ÷ volume**
concentration = 0.20 ÷ 0.250.

**Step 3 — Calculate**
= **0.80 mol/dm³**.

**Conclusion.** The sodium hydroxide solution has a concentration of 0.80 mol/dm³, found by converting the volume to dm³ and dividing the moles by the volume.`,
      quiz: [
        { prompt: "The substance that dissolves is the…", options: ["solute", "solvent", "solution", "precipitate"], correctIndex: 0, explanation: "Solute dissolves in the solvent." },
        { prompt: "The substance that does the dissolving is the…", options: ["solvent", "solute", "solution", "salt"], correctIndex: 0, explanation: "Solvent dissolves the solute." },
        { prompt: "Molarity is measured in…", options: ["mol/dm³", "g only", "cm³", "kelvin"], correctIndex: 0, explanation: "Moles per cubic decimetre." },
        { prompt: "Concentration (mol/dm³) = moles ÷ …", options: ["volume (dm³)", "mass", "molar mass", "pressure"], correctIndex: 0, explanation: "Amount per volume." },
        { prompt: "To convert cm³ to dm³ you…", options: ["divide by 1000", "multiply by 1000", "add 1000", "subtract 1000"], correctIndex: 0, explanation: "1 dm³ = 1000 cm³." },
        { prompt: "moles = concentration × …", options: ["volume (dm³)", "molar mass", "temperature", "pressure"], correctIndex: 0, explanation: "n = c × V." },
        { prompt: "The dilution equation is…", options: ["C₁V₁ = C₂V₂", "PV = nRT", "n = m/M", "C = n/V only"], correctIndex: 0, explanation: "Moles conserved on dilution." },
        { prompt: "Diluting a solution … its concentration.", options: ["lowers", "raises", "keeps", "doubles"], correctIndex: 0, explanation: "More solvent, lower concentration." },
        { prompt: "Concentration in g/dm³ = concentration in mol/dm³ × …", options: ["molar mass", "volume", "moles", "1000"], correctIndex: 0, explanation: "Convert moles to grams." },
        { prompt: "0.5 mol in 1 dm³ has concentration…", options: ["0.5 mol/dm³", "1 mol/dm³", "5 mol/dm³", "0.05 mol/dm³"], correctIndex: 0, explanation: "0.5 ÷ 1 = 0.5." },
        { prompt: "A concentrated solution has … solute per volume.", options: ["more", "less", "no", "negative"], correctIndex: 0, explanation: "High concentration = much solute." },
        { prompt: "1 dm³ equals … cm³.", options: ["1000", "100", "10", "1"], correctIndex: 0, explanation: "1 dm³ = 1000 cm³." },
        { prompt: "moles of solute in 2 dm³ of 0.1 mol/dm³ solution is…", options: ["0.2", "2", "0.05", "20"], correctIndex: 0, explanation: "0.1 × 2 = 0.2 mol." },
        { prompt: "During dilution, the number of moles of solute…", options: ["stays the same", "increases", "decreases", "doubles"], correctIndex: 0, explanation: "Only water is added." },
        { prompt: "A saturated solution can dissolve … more solute.", options: ["no", "unlimited", "twice as much", "any amount of"], correctIndex: 0, explanation: "It holds the maximum at that temperature." },
        { prompt: "To find the moles reacting, multiply concentration by…", options: ["volume in dm³", "molar mass", "1000 always", "temperature"], correctIndex: 0, explanation: "n = c × V." },
        { prompt: "The concentration of 4 g of NaOH (M = 40) in 1 dm³ is…", options: ["0.1 mol/dm³", "1 mol/dm³", "4 mol/dm³", "40 mol/dm³"], correctIndex: 0, explanation: "4/40 = 0.1 mol in 1 dm³." },
        { prompt: "Salt water is an example of a…", options: ["solution", "compound", "element", "precipitate"], correctIndex: 0, explanation: "A solution of salt in water." },
        { prompt: "Adding 500 cm³ water to 500 cm³ of 1 mol/dm³ acid gives about…", options: ["0.5 mol/dm³", "2 mol/dm³", "1 mol/dm³", "0.1 mol/dm³"], correctIndex: 0, explanation: "Doubling volume halves concentration." },
        { prompt: "The unit dm³ is the same as a…", options: ["litre", "millilitre", "gram", "mole"], correctIndex: 0, explanation: "1 dm³ = 1 L." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define solute, solvent and concentration.", answerKey: "Solute — the substance that dissolves. Solvent — the substance that dissolves the solute. Concentration — the amount of solute in a given volume of solution (e.g. mol/dm³). Award a mark for each.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The concentration of 0.5 mol of solute in 250 cm³ of solution is:", options: ["2.0 mol/dm³", "0.5 mol/dm³", "0.125 mol/dm³", "125 mol/dm³"], correctIndex: 0, answerKey: "0.250 dm³; 0.5 ÷ 0.25 = 2.0 mol/dm³.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "On dilution of a solution:", options: ["The number of moles of solute stays the same", "The moles of solute increase", "The moles of solute decrease", "The solute is destroyed"], correctIndex: 0, answerKey: "Only solvent is added; moles are unchanged.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Calculate the number of moles of HCl in 40 cm³ of 0.10 mol/dm³ hydrochloric acid.", answerKey: "Volume = 40 ÷ 1000 = 0.040 dm³; moles = 0.10 × 0.040 = 0.0040 mol. Award marks for the conversion and the answer 0.0040 mol.", marks: 2 },
        { type: "ESSAY", prompt: "Explain how to calculate the concentration of a solution and how to use concentration in solution stoichiometry, with an example.", answerKey: "A full answer explains concentration = moles of solute ÷ volume in dm³ (converting cm³ to dm³ by dividing by 1000), and that moles = concentration × volume. For solution stoichiometry: find the moles of one reactant from its concentration and volume, use the mole ratio from the balanced equation to find the moles of another substance, then convert to concentration, volume or mass as required (e.g. in a titration, moles of acid = moles of base at the end point). Award marks for the concentration method and the stoichiometry approach with an example.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (CK-12) — 21.18 Titration Calculations (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(CK-12)/21%3A_Acids_and_Bases/21.18%3A_Titration_Calculations)
      slug: "acids-bases-and-salts-titrations",
      title: "Acids, Bases and Salts: Titrations",
      objective:
        "By the end of the topic, learners should be able to describe acids, bases and salts, the pH scale, and carry out acid-base titration calculations. (MoE Grade 12 Period V, CONTENTS 11.)",
      estimatedMinutes: 130,
      notes: `## Acids, bases and salts

- **Acid** — produces **H⁺** ions in water (proton donor); turns blue litmus red; pH < 7.
- **Base/alkali** — produces **OH⁻** ions (proton acceptor); turns red litmus blue; pH > 7.
- **Salt** — formed when the H⁺ of an acid is replaced by a metal (or ammonium) ion.
- **Neutralisation:** acid + base → salt + water.

## The pH scale

- Runs 0–14; **pH 7 = neutral**, below 7 acidic, above 7 alkaline. Measured with universal indicator or a pH meter.

## Reactions of acids

- Acid + metal → salt + hydrogen.
- Acid + base/alkali → salt + water.
- Acid + carbonate → salt + water + carbon dioxide.

## Titration

- A **titration** finds an unknown concentration by reacting it with a solution of known concentration to the **end point** (shown by an indicator).
- At the end point, **moles of acid = moles of base** (for a 1:1 reaction).

## Common errors and misconceptions

- **Acids have pH above 7** — acids are below 7.
- **A strong acid is the same as a concentrated acid** — strength (degree of ionisation) differs from concentration (amount per volume).
- **Neutralisation gives only water** — it gives salt + water.`,
      workedExample: `**Task.** 25.0 cm³ of NaOH is neutralised by 20.0 cm³ of 0.10 mol/dm³ HCl. Find the concentration of the NaOH. (HCl + NaOH → NaCl + H₂O.)

**Step 1 — Moles of HCl**
n(HCl) = c × V = 0.10 × (20.0 ÷ 1000) = 0.0020 mol.

**Step 2 — Mole ratio**
HCl : NaOH is 1 : 1, so n(NaOH) = 0.0020 mol.

**Step 3 — Concentration of NaOH**
c = n ÷ V = 0.0020 ÷ (25.0 ÷ 1000) = 0.0020 ÷ 0.0250 = **0.080 mol/dm³**.

**Conclusion.** The sodium hydroxide solution is 0.080 mol/dm³, found from the moles of acid at the end point and the 1:1 mole ratio.`,
      quiz: [
        { prompt: "An acid produces … ions in water.", options: ["H⁺", "OH⁻", "Na⁺", "Cl⁻"], correctIndex: 0, explanation: "Acids donate H⁺." },
        { prompt: "A base/alkali produces … ions in water.", options: ["OH⁻", "H⁺", "Cl⁻", "SO₄²⁻"], correctIndex: 0, explanation: "Alkalis give OH⁻." },
        { prompt: "A neutral solution has a pH of…", options: ["7", "0", "14", "1"], correctIndex: 0, explanation: "pH 7 is neutral." },
        { prompt: "Acids have a pH…", options: ["below 7", "above 7", "of exactly 14", "of exactly 7"], correctIndex: 0, explanation: "Acidic pH < 7." },
        { prompt: "Alkalis have a pH…", options: ["above 7", "below 7", "of 0", "of 7"], correctIndex: 0, explanation: "Alkaline pH > 7." },
        { prompt: "Acid + base gives salt and…", options: ["water", "hydrogen", "oxygen", "carbon dioxide"], correctIndex: 0, explanation: "Neutralisation." },
        { prompt: "Acid + metal gives salt and…", options: ["hydrogen", "water", "oxygen", "chlorine"], correctIndex: 0, explanation: "Reactive metal + acid → H₂." },
        { prompt: "Acid + carbonate gives salt, water and…", options: ["carbon dioxide", "hydrogen", "oxygen", "ammonia"], correctIndex: 0, explanation: "CO₂ is released." },
        { prompt: "A salt forms when H⁺ of an acid is replaced by a…", options: ["metal ion", "hydroxide", "gas", "neutron"], correctIndex: 0, explanation: "Metal or ammonium ion." },
        { prompt: "A titration finds an unknown…", options: ["concentration", "colour", "mass of the flask", "temperature only"], correctIndex: 0, explanation: "Concentration of a solution." },
        { prompt: "The point where reaction is just complete is the…", options: ["end point", "boiling point", "melting point", "freezing point"], correctIndex: 0, explanation: "Shown by the indicator." },
        { prompt: "At the end point of a 1:1 titration, moles of acid equal moles of…", options: ["base", "salt only", "water", "gas"], correctIndex: 0, explanation: "Equal moles react." },
        { prompt: "Blue litmus turns … in acid.", options: ["red", "blue", "green", "colourless"], correctIndex: 0, explanation: "Acids turn blue litmus red." },
        { prompt: "Red litmus turns … in alkali.", options: ["blue", "red", "yellow", "black"], correctIndex: 0, explanation: "Alkalis turn red litmus blue." },
        { prompt: "A strong acid is one that is … in water.", options: ["fully ionised", "insoluble", "not ionised", "solid"], correctIndex: 0, explanation: "Strong = fully ionised." },
        { prompt: "Concentration differs from strength: concentration is amount per…", options: ["volume", "mass only", "atom", "mole only"], correctIndex: 0, explanation: "Amount of acid per volume." },
        { prompt: "A burette is used to add … accurately.", options: ["a measured volume of solution", "heat", "solid salt", "gas"], correctIndex: 0, explanation: "Delivers precise volumes in titration." },
        { prompt: "Which is a base?", options: ["sodium hydroxide", "hydrochloric acid", "sulfuric acid", "carbonic acid"], correctIndex: 0, explanation: "NaOH is an alkali." },
        { prompt: "The salt from hydrochloric acid and sodium hydroxide is…", options: ["sodium chloride", "sodium sulfate", "sodium nitrate", "sodium carbonate"], correctIndex: 0, explanation: "HCl + NaOH → NaCl + H₂O." },
        { prompt: "A pH of 2 indicates a … solution.", options: ["strongly acidic", "neutral", "strongly alkaline", "slightly alkaline"], correctIndex: 0, explanation: "Low pH = acidic." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define an acid, a base and a salt.", answerKey: "Acid — a substance that produces H⁺ ions in water (proton donor). Base/alkali — a substance that produces OH⁻ ions in water (proton acceptor). Salt — the compound formed when the hydrogen of an acid is replaced by a metal (or ammonium) ion. Award a mark for each definition.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The reaction of an acid with a carbonate produces a salt, water and:", options: ["Carbon dioxide", "Hydrogen", "Oxygen", "Ammonia"], correctIndex: 0, answerKey: "Acid + carbonate → salt + water + CO₂.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "At the end point of an acid-base titration reacting 1:1:", options: ["Moles of acid = moles of base", "Moles of acid = twice moles of base", "The solution boils", "The indicator is colourless always"], correctIndex: 0, answerKey: "Equal moles of acid and base react.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "In a titration, 25.0 cm³ of 0.20 mol/dm³ HCl neutralises 20.0 cm³ of NaOH. Find the concentration of the NaOH. (1:1 reaction.)", answerKey: "n(HCl) = 0.20 × 25.0/1000 = 0.0050 mol; n(NaOH) = 0.0050 mol; c(NaOH) = 0.0050 ÷ (20.0/1000) = 0.25 mol/dm³. Award marks for moles of acid, the 1:1 ratio and the answer 0.25 mol/dm³.", marks: 3 },
        { type: "ESSAY", prompt: "Describe the properties of acids and bases, the reactions of acids, and how a titration is used to find an unknown concentration.", answerKey: "A full answer describes acids (produce H⁺, pH < 7, turn blue litmus red) and bases/alkalis (produce OH⁻, pH > 7, turn red litmus blue), and the reactions of acids: with metals (→ salt + hydrogen), with bases (→ salt + water, neutralisation) and with carbonates (→ salt + water + CO₂). For titration: a solution of known concentration is added from a burette to a measured volume of the unknown until the end point (shown by an indicator); at the end point the moles react in the ratio of the balanced equation, so the unknown concentration is calculated from moles ÷ volume. Award marks for acid/base properties, the reactions of acids and the titration method.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — Solubility Rules (https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Solubilty/Solubility_Rules)
      slug: "solubility-of-substances",
      title: "Solubility of Substances",
      objective:
        "By the end of the topic, learners should be able to define solubility, apply solubility rules and describe how temperature affects solubility. (MoE Grade 12 Period V, CONTENTS 12.)",
      estimatedMinutes: 90,
      notes: `## Solubility

- **Solubility** — the maximum mass of solute that dissolves in a given amount of solvent at a stated temperature.
- **Saturated solution** — one that cannot dissolve any more solute at that temperature.
- **Unsaturated** — can dissolve more; **supersaturated** — holds more than normal (unstable).

## Solubility rules (in water)

| Generally soluble | Generally insoluble |
| --- | --- |
| Group 1 and ammonium salts | most carbonates (except Group 1, NH₄⁺) |
| all nitrates | most hydroxides (except Group 1, and slightly Ca/Sr/Ba) |
| most chlorides (except Ag, Pb) | Ag and Pb halides |
| most sulfates (except Ba, Pb, Ca slightly) | sulfides of most metals |

## Effect of temperature

- For most **solids**, solubility **increases** with temperature.
- For **gases**, solubility **decreases** with temperature (warm fizzy drinks go flat).

## Precipitation

- When two solutions are mixed and an **insoluble** product forms, it appears as a **precipitate**.

## Common errors and misconceptions

- **All salts are soluble** — many carbonates and hydroxides are insoluble.
- **Heating always increases gas solubility** — gases become less soluble when heated.
- **Saturated means concentrated** — saturated means no more can dissolve at that temperature.`,
      workedExample: `**Task.** Solutions of silver nitrate and sodium chloride are mixed. Predict what happens and name any precipitate, using solubility rules.

**Step 1 — List the possible products**
Mixing AgNO₃ and NaCl could give **silver chloride (AgCl)** and **sodium nitrate (NaNO₃)**.

**Step 2 — Apply solubility rules**
- Nitrates are all soluble → NaNO₃ stays in solution.
- Most chlorides are soluble **except silver and lead** → **AgCl is insoluble**.

**Step 3 — Conclusion**
A **white precipitate of silver chloride** forms:
AgNO₃ + NaCl → AgCl(s) + NaNO₃.

**Conclusion.** The solubility rules predict an insoluble silver chloride precipitate (white) while sodium nitrate stays dissolved — a precipitation reaction.`,
      quiz: [
        { prompt: "Solubility is the maximum solute that dissolves at a stated…", options: ["temperature", "pressure only", "colour", "time"], correctIndex: 0, explanation: "Solubility depends on temperature." },
        { prompt: "A solution that can dissolve no more solute is…", options: ["saturated", "dilute", "unsaturated", "supersaturated"], correctIndex: 0, explanation: "Saturated = maximum dissolved." },
        { prompt: "For most solids, solubility … with temperature.", options: ["increases", "decreases", "stays constant", "becomes zero"], correctIndex: 0, explanation: "Hotter water dissolves more solid." },
        { prompt: "For gases, solubility … with temperature.", options: ["decreases", "increases", "stays the same", "doubles"], correctIndex: 0, explanation: "Warm liquids hold less gas." },
        { prompt: "All … are soluble in water.", options: ["nitrates", "carbonates", "hydroxides", "sulfides"], correctIndex: 0, explanation: "Nitrates are always soluble." },
        { prompt: "Most carbonates are…", options: ["insoluble (except Group 1)", "always soluble", "gaseous", "acidic"], correctIndex: 0, explanation: "Most carbonates are insoluble." },
        { prompt: "Silver chloride is…", options: ["insoluble", "very soluble", "a gas", "an acid"], correctIndex: 0, explanation: "AgCl is insoluble (a precipitate)." },
        { prompt: "Group 1 salts are generally…", options: ["soluble", "insoluble", "gaseous", "coloured only"], correctIndex: 0, explanation: "Alkali metal salts dissolve." },
        { prompt: "An insoluble solid formed on mixing solutions is a…", options: ["precipitate", "solvent", "gas", "solution"], correctIndex: 0, explanation: "A precipitate." },
        { prompt: "Warm fizzy drinks go flat because gas solubility…", options: ["decreases with heat", "increases with heat", "does not change", "becomes infinite"], correctIndex: 0, explanation: "Less CO₂ stays dissolved." },
        { prompt: "Most hydroxides are…", options: ["insoluble (except Group 1)", "soluble", "gases", "acids"], correctIndex: 0, explanation: "Most hydroxides insoluble." },
        { prompt: "Ammonium salts are…", options: ["soluble", "insoluble", "gaseous", "unreactive"], correctIndex: 0, explanation: "NH₄⁺ salts dissolve." },
        { prompt: "Barium sulfate is…", options: ["insoluble", "very soluble", "a gas", "an acid"], correctIndex: 0, explanation: "BaSO₄ is insoluble." },
        { prompt: "A solution holding more solute than normal is…", options: ["supersaturated", "dilute", "unsaturated", "saturated"], correctIndex: 0, explanation: "Supersaturated (unstable)." },
        { prompt: "Most chlorides are soluble except those of silver and…", options: ["lead", "sodium", "potassium", "ammonium"], correctIndex: 0, explanation: "Ag and Pb halides insoluble." },
        { prompt: "Solubility is usually expressed as grams per … of solvent.", options: ["100 g", "1 atom", "1 mole", "1 second"], correctIndex: 0, explanation: "g per 100 g of solvent." },
        { prompt: "A solution that can still dissolve more solute is…", options: ["unsaturated", "saturated", "supersaturated", "insoluble"], correctIndex: 0, explanation: "Unsaturated." },
        { prompt: "Mixing lead nitrate and potassium iodide gives a … precipitate.", options: ["yellow (PbI₂)", "white only", "blue", "green"], correctIndex: 0, explanation: "Lead iodide is yellow and insoluble." },
        { prompt: "Which salt would NOT dissolve well in water?", options: ["calcium carbonate", "sodium chloride", "potassium nitrate", "ammonium sulfate"], correctIndex: 0, explanation: "CaCO₃ is insoluble." },
        { prompt: "Sulfates are mostly soluble except those of barium, lead and (slightly)…", options: ["calcium", "sodium", "potassium", "ammonium"], correctIndex: 0, explanation: "CaSO₄ is only slightly soluble." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define solubility and a saturated solution.", answerKey: "Solubility is the maximum mass of solute that will dissolve in a given amount of solvent at a stated temperature. A saturated solution is one that cannot dissolve any more solute at that temperature. Award a mark for each definition.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Which group of salts is always soluble in water?", options: ["Nitrates", "Carbonates", "Hydroxides", "Sulfides"], correctIndex: 0, answerKey: "All nitrates are soluble.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "As temperature rises, the solubility of most gases in water:", options: ["Decreases", "Increases", "Stays the same", "Becomes infinite"], correctIndex: 0, answerKey: "Gases are less soluble in warm water.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Using solubility rules, predict whether a precipitate forms when silver nitrate and sodium chloride solutions are mixed, and name it.", answerKey: "A precipitate forms: silver chloride (AgCl) is insoluble (most chlorides are soluble except silver and lead), while sodium nitrate stays in solution (nitrates are soluble). The precipitate is white silver chloride. Award marks for predicting the precipitate and naming AgCl.", marks: 2 },
        { type: "ESSAY", prompt: "Explain solubility and the solubility rules, and describe how temperature affects the solubility of solids and gases.", answerKey: "A full answer defines solubility (maximum solute dissolving in a solvent at a stated temperature) and saturated/unsaturated/supersaturated solutions, then gives solubility rules: Group 1 and ammonium salts and all nitrates are soluble; most chlorides are soluble except silver and lead; most sulfates are soluble except barium/lead (and slightly calcium); most carbonates and hydroxides are insoluble except Group 1. It explains that for most solids solubility increases with temperature, while for gases solubility decreases with temperature (warm fizzy drinks lose CO₂), and that mixing solutions to form an insoluble product gives a precipitate. Award marks for the definitions, solubility rules and temperature effects.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — Exothermic vs Endothermic and enthalpy (thermochemistry) (https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Le_Chateliers_Principle/Effect_Of_Temperature_On_Equilibrium_Composition/Exothermic_Versus_Endothermic_And_K)
      slug: "energetics",
      title: "Energetics",
      objective:
        "By the end of the topic, learners should be able to distinguish exothermic and endothermic reactions, describe enthalpy change and interpret energy profile diagrams. (MoE Grade 12 Period V, CONTENTS 13.)",
      estimatedMinutes: 100,
      notes: `## Energy changes in reactions

- **Enthalpy change (ΔH)** — the heat energy taken in or given out during a reaction (at constant pressure).

## Exothermic and endothermic

| Type | Heat | ΔH sign | Surroundings | Examples |
| --- | --- | --- | --- | --- |
| Exothermic | released | negative (−) | warm up | combustion, neutralisation, respiration |
| Endothermic | absorbed | positive (+) | cool down | photosynthesis, thermal decomposition, dissolving some salts |

## Bond breaking and making

- **Breaking bonds absorbs energy** (endothermic); **making bonds releases energy** (exothermic).
- If more energy is released (making bonds) than absorbed (breaking bonds), the reaction is **exothermic** overall.

## Energy profile diagrams

- Show reactants, products and the **activation energy** (the minimum energy needed to react).

\`\`\`svg Energy profile of an exothermic reaction
<svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Energy profile showing reactants higher than products with an activation energy hump">
  <line x1="20" y1="115" x2="210" y2="115" stroke="#334155"/>
  <line x1="20" y1="115" x2="20" y2="15" stroke="#334155"/>
  <path d="M35 60 Q90 15 120 70 T205 95" fill="none" stroke="#334155" stroke-width="2"/>
  <text x="30" y="55" font-size="9" fill="#334155">reactants</text>
  <text x="165" y="110" font-size="9" fill="#334155">products</text>
</svg>
\`\`\`

## Common errors and misconceptions

- **Exothermic ΔH is positive** — exothermic is negative (heat released).
- **Making bonds absorbs energy** — making bonds releases energy.
- **Endothermic reactions feel warm** — they feel cold (they absorb heat).`,
      workedExample: `**Task.** When a fuel burns, the surroundings get hotter. (a) State the type of reaction and the sign of ΔH. (b) Explain in terms of bonds.

**Step 1 — Type and ΔH**
The surroundings warm up, so heat is **released** — the reaction is **exothermic**, ΔH is **negative**.

**Step 2 — Bonds**
Bonds in the fuel and oxygen are **broken** (absorbs energy), and new bonds in CO₂ and H₂O are **made** (releases energy). Because **more energy is released** making bonds than is absorbed breaking them, the reaction gives out heat overall.

**Conclusion.** Combustion is exothermic (ΔH negative) because forming the strong bonds in the products releases more energy than is needed to break the bonds in the reactants.`,
      quiz: [
        { prompt: "The heat energy change of a reaction is the … change.", options: ["enthalpy", "entropy only", "mass", "volume"], correctIndex: 0, explanation: "ΔH is the enthalpy change." },
        { prompt: "An exothermic reaction … heat.", options: ["releases", "absorbs", "destroys", "creates from nothing"], correctIndex: 0, explanation: "Heat given out." },
        { prompt: "An endothermic reaction … heat.", options: ["absorbs", "releases", "ignores", "reflects"], correctIndex: 0, explanation: "Heat taken in." },
        { prompt: "For an exothermic reaction, ΔH is…", options: ["negative", "positive", "zero always", "infinite"], correctIndex: 0, explanation: "Heat released, ΔH < 0." },
        { prompt: "For an endothermic reaction, ΔH is…", options: ["positive", "negative", "zero", "undefined"], correctIndex: 0, explanation: "Heat absorbed, ΔH > 0." },
        { prompt: "Combustion is an … reaction.", options: ["exothermic", "endothermic", "neutral", "reversible only"], correctIndex: 0, explanation: "Burning releases heat." },
        { prompt: "Photosynthesis is an … reaction.", options: ["endothermic", "exothermic", "neutral", "combustion"], correctIndex: 0, explanation: "Absorbs light energy." },
        { prompt: "Breaking bonds … energy.", options: ["absorbs", "releases", "creates", "destroys"], correctIndex: 0, explanation: "Endothermic step." },
        { prompt: "Making bonds … energy.", options: ["releases", "absorbs", "hides", "reflects"], correctIndex: 0, explanation: "Exothermic step." },
        { prompt: "The minimum energy needed to start a reaction is the…", options: ["activation energy", "enthalpy", "bond energy", "kinetic energy only"], correctIndex: 0, explanation: "Activation energy barrier." },
        { prompt: "Neutralisation of an acid and alkali is…", options: ["exothermic", "endothermic", "neutral", "nuclear"], correctIndex: 0, explanation: "Releases heat." },
        { prompt: "An endothermic reaction makes the surroundings feel…", options: ["cold", "hot", "unchanged", "acidic"], correctIndex: 0, explanation: "Heat is absorbed." },
        { prompt: "If more energy is released than absorbed, the reaction is…", options: ["exothermic", "endothermic", "neutral", "impossible"], correctIndex: 0, explanation: "Net heat out." },
        { prompt: "Thermal decomposition of limestone is…", options: ["endothermic", "exothermic", "neutral", "combustion"], correctIndex: 0, explanation: "Needs continuous heating." },
        { prompt: "On an energy profile, the products of an exothermic reaction are … the reactants.", options: ["lower than", "higher than", "the same as", "unrelated to"], correctIndex: 0, explanation: "Energy released lowers products." },
        { prompt: "Respiration in the body is…", options: ["exothermic", "endothermic", "neutral", "nuclear"], correctIndex: 0, explanation: "Releases energy for the body." },
        { prompt: "The units of enthalpy change are usually…", options: ["kJ (or kJ/mol)", "grams", "moles", "cm³"], correctIndex: 0, explanation: "Energy per mole." },
        { prompt: "A reaction that absorbs energy has products … the reactants in energy.", options: ["higher than", "lower than", "equal to", "unrelated to"], correctIndex: 0, explanation: "Endothermic: products higher." },
        { prompt: "Dissolving some salts (e.g. ammonium nitrate) in water is…", options: ["endothermic", "exothermic", "neutral", "combustion"], correctIndex: 0, explanation: "Cools the surroundings." },
        { prompt: "A catalyst lowers the … of a reaction.", options: ["activation energy", "enthalpy change", "product energy", "temperature only"], correctIndex: 0, explanation: "It provides an easier path." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between an exothermic and an endothermic reaction, giving the sign of ΔH for each.", answerKey: "Exothermic reactions release heat to the surroundings (surroundings warm up) and have a negative ΔH. Endothermic reactions absorb heat from the surroundings (surroundings cool down) and have a positive ΔH. Award marks for the heat change and the ΔH sign for each.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Which process is endothermic?", options: ["Photosynthesis", "Combustion", "Neutralisation", "Respiration"], correctIndex: 0, answerKey: "Photosynthesis absorbs energy.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Breaking chemical bonds:", options: ["Absorbs energy", "Releases energy", "Has no energy change", "Destroys energy"], correctIndex: 0, answerKey: "Bond breaking is endothermic.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain, in terms of bond breaking and bond making, why combustion is exothermic.", answerKey: "In combustion, energy is absorbed to break the bonds in the fuel and oxygen, and energy is released when new bonds form in the products (CO₂ and H₂O). Because more energy is released making bonds than is absorbed breaking them, the reaction gives out heat overall, so it is exothermic. Award marks for the bond breaking/making comparison and the conclusion.", marks: 3 },
        { type: "ESSAY", prompt: "Describe exothermic and endothermic reactions with examples, explain them in terms of bond energies, and describe an energy profile diagram including activation energy.", answerKey: "A full answer explains exothermic reactions (release heat, ΔH negative, surroundings warm — combustion, neutralisation, respiration) and endothermic reactions (absorb heat, ΔH positive, surroundings cool — photosynthesis, thermal decomposition, dissolving ammonium nitrate). In terms of bonds: breaking bonds absorbs energy, making bonds releases energy; exothermic overall when more energy is released than absorbed. An energy profile diagram plots reactants and products with an activation-energy hump (the minimum energy to react); in an exothermic reaction the products are lower in energy than the reactants (and higher for endothermic), and a catalyst lowers the activation energy. Award marks for the two reaction types with examples, the bond-energy explanation and the energy profile.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 19.2 Types of Radioactivity: Alpha, Beta, and Gamma Decay (https://chem.libretexts.org/Courses/Taft_College/CHEM_1510%3A_Introductory_College_Chemistry/19%3A_Radioactivity_and_Nuclear_Chemistry/19.02%3A_Types_of_Radioactivity-_Alpha_Beta_and_Gamma_Decay)
      slug: "nuclear-chemistry",
      title: "Nuclear Chemistry",
      objective:
        "By the end of the topic, learners should be able to describe radioactivity, the types of radiation, half-life and the uses and hazards of radioactivity. (MoE Grade 12 Period V, CONTENTS 14.)",
      estimatedMinutes: 100,
      notes: `## Radioactivity

- **Radioactivity** — the spontaneous breakdown of unstable nuclei, emitting radiation.

## Types of radiation

| Radiation | Nature | Charge | Penetration |
| --- | --- | --- | --- |
| Alpha (α) | helium nucleus (2p + 2n) | +2 | low (stopped by paper) |
| Beta (β) | fast electron | −1 | medium (stopped by aluminium) |
| Gamma (γ) | high-energy wave | 0 | high (needs thick lead/concrete) |

- **Alpha** is most ionising but least penetrating; **gamma** is least ionising but most penetrating.

## Half-life

- **Half-life** — the time for half of a radioactive sample to decay.
- It is constant for a given isotope and unaffected by external conditions.

## Uses and hazards

- **Uses:** medical imaging and cancer treatment, carbon dating, tracers, sterilising equipment, nuclear power.
- **Hazards:** ionising radiation damages cells and DNA, causing burns, sickness and cancer; needs shielding and careful handling.

## Common errors and misconceptions

- **Gamma is a particle** — gamma is a high-energy electromagnetic wave.
- **Alpha is the most penetrating** — alpha is the least penetrating (most ionising).
- **Half-life can be changed by heating** — it is unaffected by temperature or chemical state.`,
      workedExample: `**Task.** A radioactive isotope has a half-life of 8 days. Starting with 80 g, how much remains after 24 days?

**Step 1 — Number of half-lives**
24 days ÷ 8 days = **3 half-lives**.

**Step 2 — Halve for each half-life**
- After 1st: 80 → 40 g.
- After 2nd: 40 → 20 g.
- After 3rd: 20 → **10 g**.

**Conclusion.** After 24 days (three half-lives) 10 g of the isotope remains, because the amount halves each half-life.`,
      quiz: [
        { prompt: "Radioactivity is the breakdown of … nuclei.", options: ["unstable", "stable", "neutral", "empty"], correctIndex: 0, explanation: "Unstable nuclei decay." },
        { prompt: "An alpha particle is a…", options: ["helium nucleus", "fast electron", "photon", "proton only"], correctIndex: 0, explanation: "2 protons + 2 neutrons." },
        { prompt: "A beta particle is a…", options: ["fast electron", "helium nucleus", "wave", "neutron"], correctIndex: 0, explanation: "High-energy electron." },
        { prompt: "Gamma radiation is a…", options: ["high-energy electromagnetic wave", "helium nucleus", "electron", "proton"], correctIndex: 0, explanation: "Electromagnetic wave." },
        { prompt: "The most ionising but least penetrating radiation is…", options: ["alpha", "beta", "gamma", "X-ray"], correctIndex: 0, explanation: "Alpha is highly ionising." },
        { prompt: "The most penetrating radiation is…", options: ["gamma", "alpha", "beta", "none"], correctIndex: 0, explanation: "Gamma passes through most matter." },
        { prompt: "Alpha particles are stopped by…", options: ["paper", "thick lead only", "aluminium only", "nothing"], correctIndex: 0, explanation: "A sheet of paper stops alpha." },
        { prompt: "Beta particles are stopped by…", options: ["aluminium", "paper", "air", "nothing"], correctIndex: 0, explanation: "A few mm of aluminium." },
        { prompt: "Gamma rays need … to stop them.", options: ["thick lead or concrete", "paper", "a thin cloth", "water only"], correctIndex: 0, explanation: "Dense shielding required." },
        { prompt: "Half-life is the time for … of a sample to decay.", options: ["half", "all", "a quarter", "none"], correctIndex: 0, explanation: "Half decays each half-life." },
        { prompt: "Half-life is … by temperature.", options: ["unaffected", "increased", "decreased", "removed"], correctIndex: 0, explanation: "It is constant for an isotope." },
        { prompt: "The charge on an alpha particle is…", options: ["+2", "−1", "0", "+1"], correctIndex: 0, explanation: "Two protons give +2." },
        { prompt: "The charge on a beta particle is…", options: ["−1", "+1", "0", "+2"], correctIndex: 0, explanation: "It is an electron." },
        { prompt: "A use of radioactivity is…", options: ["cancer treatment", "cooling food", "making salt", "painting"], correctIndex: 0, explanation: "Radiotherapy uses radiation." },
        { prompt: "Carbon dating uses radioactivity to find the … of objects.", options: ["age", "colour", "mass", "smell"], correctIndex: 0, explanation: "Dating old materials." },
        { prompt: "Radiation is hazardous because it damages…", options: ["cells and DNA", "only clothing", "the air only", "nothing"], correctIndex: 0, explanation: "Ionising radiation harms tissue." },
        { prompt: "After 2 half-lives, the fraction of a sample remaining is…", options: ["1/4", "1/2", "1/3", "1/8"], correctIndex: 0, explanation: "Half of a half = a quarter." },
        { prompt: "Gamma radiation has a charge of…", options: ["0", "+2", "−1", "+1"], correctIndex: 0, explanation: "It is uncharged." },
        { prompt: "Radioactive tracers are used in…", options: ["medicine and industry", "cooking", "farming soil only", "singing"], correctIndex: 0, explanation: "Follow substances through systems." },
        { prompt: "Which radiation would pass through your hand most easily?", options: ["gamma", "alpha", "beta only", "none"], correctIndex: 0, explanation: "Gamma is most penetrating." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the three types of radioactive emission and state one property of each.", answerKey: "Alpha (α) — a helium nucleus, charge +2, highly ionising but least penetrating (stopped by paper). Beta (β) — a fast electron, charge −1, medium penetration (stopped by aluminium). Gamma (γ) — a high-energy electromagnetic wave, no charge, most penetrating (needs lead/concrete). Award a mark for each correctly described.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which radiation is the most penetrating?", options: ["Gamma", "Alpha", "Beta", "None"], correctIndex: 0, answerKey: "Gamma rays are the most penetrating.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The half-life of a radioactive isotope is:", options: ["The time for half the sample to decay", "The time for all of it to decay", "Changed by heating", "The mass of the sample"], correctIndex: 0, answerKey: "Half-life is the time for half to decay and is constant.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "A sample has a half-life of 5 years. Starting with 40 g, how much remains after 15 years?", answerKey: "15 ÷ 5 = 3 half-lives. 40 → 20 → 10 → 5 g. So 5 g remains. Award marks for the number of half-lives and the answer 5 g.", marks: 2 },
        { type: "ESSAY", prompt: "Describe the three types of radiation, the meaning of half-life, and give uses and hazards of radioactivity.", answerKey: "A full answer describes alpha (helium nucleus, +2, most ionising, least penetrating — stopped by paper), beta (fast electron, −1, medium penetration — stopped by aluminium) and gamma (electromagnetic wave, no charge, most penetrating — needs lead/concrete). It defines half-life as the constant time for half a sample to decay (unaffected by external conditions). Uses: medical imaging and cancer treatment, carbon dating, tracers, sterilisation, nuclear power. Hazards: ionising radiation damages cells and DNA causing burns, sickness and cancer, so shielding and careful handling are needed. Award marks for the radiation types, half-life, uses and hazards.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 11.2 Le Chatelier's Principle (Chem1, Lower) (https://chem.libretexts.org/Bookshelves/General_Chemistry/Chem1_(Lower)/11%3A_Chemical_Equilibrium/11.02%3A_Le_Chatelier's_Principle)
      slug: "chemical-equilibrium",
      title: "Chemical Equilibrium",
      objective:
        "By the end of the topic, learners should be able to describe dynamic equilibrium and use Le Chatelier's principle to predict the effect of changing conditions. (MoE Grade 12 Period V, CONTENTS 15.)",
      estimatedMinutes: 110,
      notes: `## Reversible reactions and equilibrium

- A **reversible reaction** can go both ways (shown by ⇌).
- **Dynamic equilibrium** — in a closed system, the **forward and backward reactions occur at the same rate**, so concentrations stay constant (but reactions continue).

## Le Chatelier's principle

- If a change (stress) is applied to a system at equilibrium, the position **shifts to oppose the change**.

| Change | Equilibrium shifts… |
| --- | --- |
| Increase concentration of a reactant | toward products |
| Increase pressure (gases) | toward the side with fewer gas molecules |
| Increase temperature | in the endothermic direction |
| Add a catalyst | no shift (reaches equilibrium faster) |

## Applications

- The **Haber process** (N₂ + 3H₂ ⇌ 2NH₃) uses high pressure (more ammonia) and a compromise temperature.

## Common errors and misconceptions

- **Equilibrium means reactions stop** — they continue at equal rates (dynamic).
- **A catalyst shifts the equilibrium** — it only speeds up reaching it.
- **Equilibrium means equal amounts of reactant and product** — it means constant, not equal, amounts.`,
      workedExample: `**Task.** For N₂ + 3H₂ ⇌ 2NH₃ (forward reaction exothermic), predict the effect of (a) increasing pressure and (b) increasing temperature on the yield of ammonia.

**Step 1 — Increasing pressure**
There are 4 gas molecules on the left and 2 on the right. Increasing pressure shifts the equilibrium toward the side with **fewer** molecules (the products), so **more ammonia** forms.

**Step 2 — Increasing temperature**
The forward reaction is exothermic. Raising the temperature shifts the equilibrium in the **endothermic (backward)** direction, so **less ammonia** forms.

**Conclusion.** High pressure increases the yield of ammonia, while high temperature decreases it — which is why the Haber process uses high pressure and only a moderate (compromise) temperature.`,
      quiz: [
        { prompt: "A reversible reaction is shown by the symbol…", options: ["⇌", "→", "=", "+"], correctIndex: 0, explanation: "The equilibrium arrows." },
        { prompt: "At dynamic equilibrium, the forward and backward rates are…", options: ["equal", "zero", "increasing", "unrelated"], correctIndex: 0, explanation: "Equal rates keep concentrations constant." },
        { prompt: "At equilibrium, the reactions…", options: ["continue but concentrations stay constant", "stop completely", "reverse only", "go to zero"], correctIndex: 0, explanation: "Dynamic, not static." },
        { prompt: "Le Chatelier's principle says the system shifts to … a change.", options: ["oppose", "increase", "ignore", "copy"], correctIndex: 0, explanation: "Counteracts the stress." },
        { prompt: "Adding more reactant shifts equilibrium toward…", options: ["products", "reactants", "neither", "the catalyst"], correctIndex: 0, explanation: "To use up the added reactant." },
        { prompt: "Increasing pressure shifts equilibrium toward the side with…", options: ["fewer gas molecules", "more gas molecules", "more solids", "no gases"], correctIndex: 0, explanation: "Reduces the pressure." },
        { prompt: "Increasing temperature shifts equilibrium in the … direction.", options: ["endothermic", "exothermic", "forward always", "backward always"], correctIndex: 0, explanation: "To absorb the added heat." },
        { prompt: "A catalyst … the position of equilibrium.", options: ["does not change", "shifts to products", "shifts to reactants", "destroys"], correctIndex: 0, explanation: "It only speeds reaching equilibrium." },
        { prompt: "Equilibrium is only reached in a … system.", options: ["closed", "open", "leaking", "heated only"], correctIndex: 0, explanation: "No matter enters or leaves." },
        { prompt: "For N₂ + 3H₂ ⇌ 2NH₃, high pressure gives … ammonia.", options: ["more", "less", "no", "the same"], correctIndex: 0, explanation: "Shifts to fewer molecules (products)." },
        { prompt: "If the forward reaction is exothermic, high temperature gives … product.", options: ["less", "more", "no change in", "unlimited"], correctIndex: 0, explanation: "Shifts endothermic (backward)." },
        { prompt: "Removing a product shifts equilibrium toward…", options: ["more products", "more reactants", "neither", "the catalyst"], correctIndex: 0, explanation: "To replace the product." },
        { prompt: "Dynamic equilibrium means concentrations are…", options: ["constant", "zero", "always equal", "increasing"], correctIndex: 0, explanation: "Constant, not necessarily equal." },
        { prompt: "The Haber process uses … pressure to favour ammonia.", options: ["high", "low", "zero", "atmospheric only"], correctIndex: 0, explanation: "High pressure raises the yield." },
        { prompt: "A catalyst helps reach equilibrium…", options: ["faster", "slower", "never", "at a different position"], correctIndex: 0, explanation: "Speeds both directions equally." },
        { prompt: "Increasing the concentration of a reactant … the forward rate at first.", options: ["increases", "decreases", "removes", "reverses"], correctIndex: 0, explanation: "More reactant, faster forward." },
        { prompt: "Le Chatelier's principle helps predict the … of equilibrium.", options: ["position", "colour", "mass", "temperature only"], correctIndex: 0, explanation: "Direction of shift." },
        { prompt: "In an exothermic reaction, cooling shifts equilibrium toward…", options: ["products", "reactants", "neither", "the catalyst"], correctIndex: 0, explanation: "Favours the exothermic (forward) direction." },
        { prompt: "If a reaction has equal gas molecules on both sides, pressure change has…", options: ["no effect on position", "a huge effect", "an explosive effect", "a cooling effect"], correctIndex: 0, explanation: "No side has fewer molecules." },
        { prompt: "Equilibrium can be approached from…", options: ["either direction", "only the forward direction", "only the backward direction", "neither direction"], correctIndex: 0, explanation: "Same equilibrium either way." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define dynamic equilibrium.", answerKey: "Dynamic equilibrium is the state in a closed system where the forward and backward reactions occur at the same rate, so the concentrations of reactants and products remain constant while both reactions continue. Award marks for equal rates and constant concentrations in a closed system.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Le Chatelier's principle states that a system at equilibrium responds to a change by:", options: ["Shifting to oppose the change", "Shifting to increase the change", "Stopping all reactions", "Ignoring the change"], correctIndex: 0, answerKey: "The equilibrium shifts to counteract the applied change.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Adding a catalyst to a system at equilibrium:", options: ["Does not change the position of equilibrium", "Shifts it to products", "Shifts it to reactants", "Destroys the equilibrium"], correctIndex: 0, answerKey: "A catalyst only speeds up reaching equilibrium.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "For 2SO₂ + O₂ ⇌ 2SO₃ (exothermic), predict the effect of increasing pressure and of increasing temperature on the yield of SO₃.", answerKey: "Increasing pressure shifts the equilibrium toward the side with fewer gas molecules (the products, 2 molecules vs 3), increasing the yield of SO₃. Increasing temperature shifts the equilibrium in the endothermic (backward) direction, decreasing the yield of SO₃. Award marks for both correct predictions with reasoning.", marks: 2 },
        { type: "ESSAY", prompt: "Explain dynamic equilibrium and use Le Chatelier's principle to describe how concentration, pressure, temperature and a catalyst affect the position of equilibrium, using the Haber process as an example.", answerKey: "A full answer explains dynamic equilibrium (in a closed system the forward and backward reactions occur at equal rates, keeping concentrations constant). Using Le Chatelier's principle: increasing a reactant's concentration shifts toward products; increasing pressure shifts toward the side with fewer gas molecules; increasing temperature shifts in the endothermic direction; a catalyst does not shift the position but reaches equilibrium faster. For the Haber process (N₂ + 3H₂ ⇌ 2NH₃, exothermic): high pressure favours ammonia (fewer molecules on the product side), and a low temperature would favour ammonia but is too slow, so a moderate compromise temperature with an iron catalyst is used. Award marks for dynamic equilibrium, the four factors and the Haber application.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — Reaction rates and factors affecting rate / Collision theory (https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Kinetics)
      slug: "reaction-rates",
      title: "Reaction Rates",
      objective:
        "By the end of the topic, learners should be able to describe reaction rate and the factors that affect it using collision theory. (MoE Grade 12 Period V, CONTENTS 16.)",
      estimatedMinutes: 100,
      notes: `## Rate of reaction

- **Rate of reaction** — how fast reactants are used up or products formed (e.g. amount ÷ time).

## Collision theory

- Reactions occur when particles **collide** with enough energy (the **activation energy**) and the correct orientation.
- More frequent, more energetic collisions → faster reaction.

## Factors affecting rate

| Factor | Effect on rate | Reason |
| --- | --- | --- |
| Higher concentration | faster | more particles per volume, more collisions |
| Higher temperature | faster | particles move faster and collide harder |
| Smaller particle size (larger surface area) | faster | more surface exposed to collisions |
| Catalyst | faster | lowers the activation energy |
| Higher pressure (gases) | faster | particles closer, more collisions |

## Catalysts

- A **catalyst** speeds up a reaction by providing a path of **lower activation energy** and is not used up.

## Common errors and misconceptions

- **Catalysts are used up** — they are regenerated and not consumed.
- **Concentration and temperature act the same way** — concentration adds particles; temperature adds energy.
- **Any collision causes a reaction** — only collisions with enough energy and correct orientation do.`,
      workedExample: `**Task.** Marble chips react with hydrochloric acid to give carbon dioxide. Explain how (a) using powdered marble and (b) warming the acid change the rate, using collision theory.

**Step 1 — Powdered marble (surface area)**
Powder has a much larger **surface area** than chips, so more acid particles can collide with the marble at once → **more frequent collisions** → **faster** reaction.

**Step 2 — Warming the acid (temperature)**
Heating gives particles more energy, so they move **faster** and collide **more often** and with **more energy** (more collisions exceed the activation energy) → **faster** reaction.

**Conclusion.** Both increasing surface area (powder) and temperature increase the number of successful collisions per second, speeding up the reaction, as collision theory predicts.`,
      quiz: [
        { prompt: "The rate of reaction measures how … reactants are used up.", options: ["fast", "cheaply", "colourfully", "far"], correctIndex: 0, explanation: "Rate = change ÷ time." },
        { prompt: "Collision theory says particles must collide with enough…", options: ["energy", "colour", "mass", "volume"], correctIndex: 0, explanation: "Activation energy needed." },
        { prompt: "Increasing concentration … the rate.", options: ["increases", "decreases", "stops", "reverses"], correctIndex: 0, explanation: "More particles, more collisions." },
        { prompt: "Increasing temperature … the rate.", options: ["increases", "decreases", "has no effect on", "halves"], correctIndex: 0, explanation: "Faster, harder collisions." },
        { prompt: "Powdering a solid increases its … and speeds the reaction.", options: ["surface area", "mass", "colour", "density"], correctIndex: 0, explanation: "More surface for collisions." },
        { prompt: "A catalyst speeds a reaction by lowering the…", options: ["activation energy", "temperature", "concentration", "pressure"], correctIndex: 0, explanation: "Provides an easier path." },
        { prompt: "A catalyst is … during the reaction.", options: ["not used up", "consumed", "turned to gas", "destroyed"], correctIndex: 0, explanation: "It is regenerated." },
        { prompt: "For gases, increasing pressure … the rate.", options: ["increases", "decreases", "removes", "reverses"], correctIndex: 0, explanation: "Particles closer, more collisions." },
        { prompt: "Only collisions with enough energy and correct … cause reaction.", options: ["orientation", "colour", "mass", "smell"], correctIndex: 0, explanation: "Energy and orientation matter." },
        { prompt: "The minimum energy for a reaction is the…", options: ["activation energy", "enthalpy", "kinetic energy only", "bond energy only"], correctIndex: 0, explanation: "Activation energy barrier." },
        { prompt: "Higher temperature makes particles…", options: ["move faster", "stop", "get heavier", "change colour"], correctIndex: 0, explanation: "More kinetic energy." },
        { prompt: "More concentrated acid reacts … than dilute acid.", options: ["faster", "slower", "at the same rate", "not at all"], correctIndex: 0, explanation: "More particles per volume." },
        { prompt: "Which increases the rate?", options: ["adding a catalyst", "cooling the mixture", "using bigger lumps", "lowering concentration"], correctIndex: 0, explanation: "Catalyst speeds it up." },
        { prompt: "A larger surface area means … collisions per second.", options: ["more", "fewer", "no", "slower"], correctIndex: 0, explanation: "More exposed particles." },
        { prompt: "The rate is fastest at the … of a reaction.", options: ["start", "end", "middle only", "no point"], correctIndex: 0, explanation: "Highest reactant concentration." },
        { prompt: "Enzymes are biological…", options: ["catalysts", "acids", "salts", "fuels"], correctIndex: 0, explanation: "They speed up reactions in living things." },
        { prompt: "Doubling the temperature roughly … the rate for many reactions.", options: ["increases", "removes", "reverses", "freezes"], correctIndex: 0, explanation: "Rate rises sharply with temperature." },
        { prompt: "Which does NOT increase rate?", options: ["lowering temperature", "adding catalyst", "increasing concentration", "increasing surface area"], correctIndex: 0, explanation: "Cooling slows reactions." },
        { prompt: "Collision theory explains rate in terms of particle…", options: ["collisions", "colours", "prices", "shapes only"], correctIndex: 0, explanation: "Frequency and energy of collisions." },
        { prompt: "A catalyst provides a reaction pathway with … activation energy.", options: ["lower", "higher", "no", "infinite"], correctIndex: 0, explanation: "Easier path speeds the reaction." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "List four factors that affect the rate of a reaction.", answerKey: "Any four of: concentration (of solutions), temperature, surface area/particle size of solids, pressure (of gases), and the presence of a catalyst. Award a mark each up to four.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A catalyst increases the rate of a reaction by:", options: ["Lowering the activation energy", "Raising the temperature", "Increasing the concentration", "Being used up"], correctIndex: 0, answerKey: "A catalyst provides a lower-activation-energy path.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "According to collision theory, a reaction occurs when particles collide with:", options: ["Enough energy and correct orientation", "Any energy at all", "The same colour", "Equal mass"], correctIndex: 0, answerKey: "Successful collisions need the activation energy and correct orientation.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain, using collision theory, why increasing the temperature increases the rate of a reaction.", answerKey: "Increasing the temperature gives the particles more kinetic energy so they move faster; they collide more frequently and a greater proportion of collisions have energy above the activation energy, so more collisions are successful per second and the rate increases. Award marks for more frequent collisions and more collisions exceeding the activation energy.", marks: 3 },
        { type: "ESSAY", prompt: "Use collision theory to explain how concentration, temperature, surface area and a catalyst affect the rate of a chemical reaction.", answerKey: "A full answer uses collision theory (reactions occur when particles collide with at least the activation energy and correct orientation): increasing concentration puts more particles in a given volume so collisions are more frequent; increasing temperature gives particles more energy so they collide more often and more collisions exceed the activation energy; increasing surface area (smaller particles) exposes more particles to collision; a catalyst lowers the activation energy so a greater proportion of collisions are successful (and it is not used up). Award marks for each factor correctly explained with collision theory.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 20: Electrochemistry (galvanic cells and electrolysis) (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/20%3A_Electrochemistry)
      slug: "electrochemistry",
      title: "Electrochemistry",
      objective:
        "By the end of the topic, learners should be able to describe electrolysis and simple electrochemical (galvanic) cells and their applications. (MoE Grade 12 Period V, CONTENTS 17.)",
      estimatedMinutes: 120,
      notes: `## Electrochemistry

- Electrochemistry links **electricity** and **chemical reactions** (redox).

## Electrolysis

- **Electrolysis** — using electricity to break down (decompose) an **electrolyte** (a molten or dissolved ionic compound).
- **Electrodes:** the **cathode** is negative (attracts cations); the **anode** is positive (attracts anions).
- **At the cathode:** positive ions gain electrons (**reduction**); **at the anode:** negative ions lose electrons (**oxidation**).
- Example (molten NaCl): Na⁺ + e⁻ → Na (cathode); 2Cl⁻ → Cl₂ + 2e⁻ (anode).

## Applications of electrolysis

- Extraction of reactive metals (aluminium), **electroplating**, purifying copper, and making chlorine and sodium hydroxide.

## Electrochemical (galvanic/voltaic) cells

- A **cell** produces electricity from a **spontaneous redox** reaction (chemical → electrical energy).
- The more reactive metal is the **negative electrode** (is oxidised); electrons flow through the wire to the positive electrode.

## Common errors and misconceptions

- **The cathode is positive** — in electrolysis the cathode is the negative electrode.
- **Electrolysis produces electricity** — it uses electricity; a cell produces it.
- **Any solid conducts electrolysis** — the electrolyte must be molten or in solution so ions can move.`,
      workedExample: `**Task.** Molten lead(II) bromide (PbBr₂) is electrolysed. State the products at each electrode and write the electrode half-equations.

**Step 1 — Identify the ions**
Molten PbBr₂ contains Pb²⁺ and Br⁻ ions, free to move.

**Step 2 — At the cathode (negative)**
Positive lead ions are attracted and **gain electrons** (reduction):
Pb²⁺ + 2e⁻ → Pb — molten **lead** forms.

**Step 3 — At the anode (positive)**
Negative bromide ions are attracted and **lose electrons** (oxidation):
2Br⁻ → Br₂ + 2e⁻ — **bromine** vapour forms.

**Conclusion.** Electrolysis of molten lead(II) bromide gives lead at the cathode and bromine at the anode, illustrating reduction at the cathode and oxidation at the anode.`,
      quiz: [
        { prompt: "Electrochemistry links electricity with … reactions.", options: ["redox (chemical)", "nuclear", "physical only", "no"], correctIndex: 0, explanation: "Electricity and redox." },
        { prompt: "Electrolysis uses electricity to … a compound.", options: ["break down", "build up", "cool", "colour"], correctIndex: 0, explanation: "Decomposes an electrolyte." },
        { prompt: "An electrolyte is a substance that conducts when…", options: ["molten or dissolved", "solid", "frozen", "dry"], correctIndex: 0, explanation: "Ions must move." },
        { prompt: "The negative electrode is the…", options: ["cathode", "anode", "electrolyte", "salt bridge"], correctIndex: 0, explanation: "Cathode is negative in electrolysis." },
        { prompt: "The positive electrode is the…", options: ["anode", "cathode", "electrolyte", "wire"], correctIndex: 0, explanation: "Anode is positive." },
        { prompt: "At the cathode, ions … electrons.", options: ["gain", "lose", "share", "destroy"], correctIndex: 0, explanation: "Reduction at the cathode." },
        { prompt: "At the anode, ions … electrons.", options: ["lose", "gain", "share", "create"], correctIndex: 0, explanation: "Oxidation at the anode." },
        { prompt: "In molten NaCl, sodium forms at the…", options: ["cathode", "anode", "electrolyte", "wire"], correctIndex: 0, explanation: "Na⁺ + e⁻ → Na." },
        { prompt: "In molten NaCl, chlorine forms at the…", options: ["anode", "cathode", "salt bridge", "wire"], correctIndex: 0, explanation: "2Cl⁻ → Cl₂ + 2e⁻." },
        { prompt: "Electrolysis is used to extract very … metals.", options: ["reactive", "unreactive", "heavy only", "gaseous"], correctIndex: 0, explanation: "e.g. aluminium." },
        { prompt: "Coating an object with a metal by electrolysis is…", options: ["electroplating", "smelting", "distillation", "cracking"], correctIndex: 0, explanation: "Electroplating." },
        { prompt: "A galvanic (voltaic) cell converts chemical energy to…", options: ["electrical energy", "nuclear energy", "sound", "light only"], correctIndex: 0, explanation: "A cell produces electricity." },
        { prompt: "In a cell, the more reactive metal is the … electrode.", options: ["negative", "positive", "neutral", "central"], correctIndex: 0, explanation: "It is oxidised, releasing electrons." },
        { prompt: "Cathode reactions are…", options: ["reduction", "oxidation", "neutralisation", "combustion"], correctIndex: 0, explanation: "Gain of electrons." },
        { prompt: "Anode reactions are…", options: ["oxidation", "reduction", "precipitation", "distillation"], correctIndex: 0, explanation: "Loss of electrons." },
        { prompt: "Electrolysis of brine produces chlorine, hydrogen and…", options: ["sodium hydroxide", "sodium metal", "oxygen only", "chlorate only"], correctIndex: 0, explanation: "Chlor-alkali process." },
        { prompt: "Purifying copper is done by…", options: ["electrolysis", "distillation", "filtration", "combustion"], correctIndex: 0, explanation: "Electrolytic refining." },
        { prompt: "During electrolysis, electrons flow through the…", options: ["external wires", "electrolyte", "gas", "air"], correctIndex: 0, explanation: "Ions move in solution; electrons in wires." },
        { prompt: "A cell stops working when the … is used up.", options: ["reactants", "wire", "voltmeter", "container"], correctIndex: 0, explanation: "Chemicals are consumed." },
        { prompt: "Which requires the electrolyte to have mobile ions?", options: ["electrolysis", "burning", "melting only", "filtering"], correctIndex: 0, explanation: "Ions carry the current." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define electrolysis and name the two electrodes with their charges.", answerKey: "Electrolysis is the decomposition of a molten or dissolved ionic compound (electrolyte) by passing an electric current through it. The cathode is the negative electrode and the anode is the positive electrode. Award marks for the definition and the two electrodes with charges.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "At the cathode during electrolysis:", options: ["Positive ions gain electrons (reduction)", "Negative ions lose electrons (oxidation)", "Nothing happens", "Water evaporates"], correctIndex: 0, answerKey: "Reduction (gain of electrons) occurs at the cathode.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "A galvanic (voltaic) cell:", options: ["Produces electricity from a spontaneous redox reaction", "Uses electricity to decompose a compound", "Only works with solids", "Cannot involve redox"], correctIndex: 0, answerKey: "A cell converts chemical energy into electrical energy.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Write the electrode half-equations for the electrolysis of molten sodium chloride.", answerKey: "Cathode (reduction): Na⁺ + e⁻ → Na. Anode (oxidation): 2Cl⁻ → Cl₂ + 2e⁻. Award a mark for each correct half-equation and a mark for correct electrode assignment.", marks: 3 },
        { type: "ESSAY", prompt: "Describe electrolysis, including what happens at each electrode, and give two applications; then explain how a simple electrochemical cell produces electricity.", answerKey: "A full answer explains electrolysis as using electricity to decompose a molten or dissolved ionic compound (electrolyte): cations move to the negative cathode and gain electrons (reduction), anions move to the positive anode and lose electrons (oxidation), e.g. molten NaCl gives sodium at the cathode (Na⁺ + e⁻ → Na) and chlorine at the anode (2Cl⁻ → Cl₂ + 2e⁻). Applications: extracting reactive metals (aluminium), electroplating, purifying copper, or making chlorine and NaOH from brine. A simple electrochemical (galvanic) cell produces electricity from a spontaneous redox reaction: the more reactive metal is oxidised at the negative electrode, releasing electrons that flow through the external wire to the positive electrode, converting chemical energy to electrical energy. Award marks for the electrode processes, applications and the cell explanation.", marks: 6 },
      ],
    },
  ],
};
