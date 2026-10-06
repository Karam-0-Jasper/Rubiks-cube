import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 12,
// Semester One, Period I: Introduction to Organic Chemistry. The CONTENTS list
// expands to one topic per top-level item: 1. General characteristics of
// organic compounds (classification, separation & purification, functional
// groups, homologous series, isomerism, chemical properties); 2. Hydrocarbons
// (alkanes, petroleum, petrochemicals, octane rating; alkenes; alkynes);
// 3. Benzene.
export const chemistryG12P1: PeriodContent = {
  grade: 12,
  number: 1,
  title: "Introduction to Organic Chemistry",
  summary:
    "Period I of the MoE Grade 12 Chemistry syllabus. Learners describe the general characteristics of organic compounds, classify them by carbon skeleton and functional group, separate and purify them by distillation, crystallisation and chromatography, recognise homologous series and isomers, and study the three families of hydrocarbons (alkanes, alkenes and alkynes) together with petroleum refining, petrochemicals and octane rating, and finish with the structure, properties and reactions of benzene.",
  topics: [
    {
      // source: LibreTexts — 1: Introduction to Organic Chemistry / Structural Isomerism in Organic Molecules (https://chem.libretexts.org/Courses/College_of_the_Canyons/CHEM_202%3A_General_Chemistry_II_OER/01%3A_Introduction_to_Organic_Chemistry)
      slug: "general-characteristics-of-organic-compounds",
      title: "General Characteristics of Organic Compounds",
      objective:
        "By the end of the topic, learners should be able to describe the general characteristics of organic compounds, classify them, separate and purify them, and explain functional groups, homologous series and isomerism. (MoE Grade 12 Period I, CONTENTS 1.)",
      estimatedMinutes: 150,
      notes: `## What is organic chemistry?

- **Organic chemistry** — the chemistry of **carbon compounds** (except a few such as CO, CO₂, carbonates and cyanides, treated as inorganic).
- Carbon forms four covalent bonds and joins to itself in chains and rings — **catenation** — giving millions of compounds.
- Bonding in organic compounds is **covalent**, so most are molecular.

## General characteristics

- Mostly **covalent**, molecular substances.
- Generally **low melting and boiling points** (weak forces between molecules).
- Usually **insoluble in water** but soluble in organic solvents.
- Most are **flammable** and burn in air.
- Reactions are usually **slow** and give mixtures; often need heat or a catalyst.

## Classification by carbon skeleton

| Class | Description | Example |
| --- | --- | --- |
| Straight chain | unbranched chain of carbons | n-butane |
| Branched chain | chain with side groups | 2-methylpropane |
| Cyclic (alicyclic) | carbons joined in a ring | cyclohexane |
| Acyclic | open chain, no ring | propane |
| Aromatic | contain a benzene ring | benzene, toluene |

## Separation and purification

- **Distillation** — separates liquids by difference in **boiling point** (fractional distillation for close boiling points).
- **Crystallisation / recrystallisation** — purifies a solid by dissolving in hot solvent and letting pure crystals form on cooling.
- **Chromatography** — separates a mixture by different **rates of movement** over a stationary phase (paper, column).
- **Solvent extraction** — separates a solute using two immiscible solvents.

## Functional groups

- **Functional group** — the reactive atom or group that gives a family its characteristic chemistry.
- Compounds with the same functional group form a **family** that reacts alike.

| Family | Functional group | Example |
| --- | --- | --- |
| Alkane | C–C single bonds only | ethane |
| Alkene | C=C double bond | ethene |
| Alkyne | C≡C triple bond | ethyne |
| Alcohol | –OH | ethanol |
| Carboxylic acid | –COOH | ethanoic acid |
| Aldehyde | –CHO | ethanal |

## Homologous series

- **Homologous series** — a family of compounds with the **same functional group** and **same general formula**, each differing from the next by **CH₂**.
- Members show a **gradual change** in physical properties (e.g. rising boiling point) and **similar chemical** reactions.
- Example: alkanes have the general formula CₙH₂ₙ₊₂.

## Isomerism

- **Isomers** — compounds with the **same molecular formula** but **different structures**.
- **Structural (constitutional) isomers** differ in the arrangement of atoms: chain, position and functional-group isomerism.
- Example: C₄H₁₀ exists as **butane** (straight chain) and **2-methylpropane** (branched).

## Common errors and misconceptions

- **"All carbon compounds are organic"** — CO, CO₂ and carbonates are counted as inorganic.
- **Confusing isomers with the same compound** — isomers have the same formula but genuinely different structures and properties.
- **Homologous series need not be alkanes** — any family (alcohols, acids) forms one.`,
      workedExample: `**Task.** The molecular formula C₅H₁₂ belongs to the alkane family. Draw/describe its structural isomers and name them.

**Step 1 — Check the family**
C₅H₁₂ fits CₙH₂ₙ₊₂ (n = 5: 2×5 + 2 = 12), so it is an alkane (pentane).

**Step 2 — Find the straight chain**
Five carbons in a row: CH₃–CH₂–CH₂–CH₂–CH₃ = **pentane**.

**Step 3 — Branch the chain (4-carbon chain + 1 branch)**
CH₃–CH(CH₃)–CH₂–CH₃ = **2-methylbutane**.

**Step 4 — Branch further (3-carbon chain + 2 branches)**
C(CH₃)₄ = **2,2-dimethylpropane**.

**Conclusion.** C₅H₁₂ has **three** structural isomers — pentane, 2-methylbutane and 2,2-dimethylpropane — all with the same molecular formula but different structures and boiling points.`,
      quiz: [
        { prompt: "Organic chemistry is mainly the chemistry of compounds of…", options: ["carbon", "sodium", "oxygen", "silicon"], correctIndex: 0, explanation: "Organic compounds are carbon compounds." },
        { prompt: "The ability of carbon to bond to itself in chains and rings is called…", options: ["catenation", "ionisation", "oxidation", "hydration"], correctIndex: 0, explanation: "Catenation gives the huge number of organic compounds." },
        { prompt: "Bonding in most organic compounds is…", options: ["covalent", "ionic", "metallic", "hydrogen only"], correctIndex: 0, explanation: "Carbon forms covalent bonds." },
        { prompt: "Organic compounds generally have … melting and boiling points.", options: ["low", "very high", "infinite", "negative"], correctIndex: 0, explanation: "Weak intermolecular forces give low melting/boiling points." },
        { prompt: "Most organic compounds are … in water.", options: ["insoluble", "very soluble", "reactive", "ionised"], correctIndex: 0, explanation: "They dissolve in organic solvents, not water." },
        { prompt: "A functional group is the part of a molecule that…", options: ["gives its characteristic reactions", "adds mass only", "removes colour", "is always carbon"], correctIndex: 0, explanation: "It determines the family's chemistry." },
        { prompt: "A homologous series has members differing by…", options: ["CH₂", "H₂O", "CO₂", "OH"], correctIndex: 0, explanation: "Successive members differ by CH₂." },
        { prompt: "The general formula of the alkanes is…", options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"], correctIndex: 0, explanation: "Alkanes: CₙH₂ₙ₊₂." },
        { prompt: "Isomers have the same … but different structures.", options: ["molecular formula", "boiling point", "colour", "density"], correctIndex: 0, explanation: "Same formula, different arrangement." },
        { prompt: "Butane and 2-methylpropane are examples of…", options: ["structural isomers", "the same compound", "different elements", "polymers"], correctIndex: 0, explanation: "Both are C₄H₁₀ with different structures." },
        { prompt: "A liquid mixture is best separated by difference in boiling point using…", options: ["distillation", "filtration", "decanting", "sieving"], correctIndex: 0, explanation: "Distillation separates by boiling point." },
        { prompt: "A solid is purified by dissolving in hot solvent and cooling; this is…", options: ["recrystallisation", "chromatography", "distillation", "sublimation"], correctIndex: 0, explanation: "Recrystallisation purifies solids." },
        { prompt: "Chromatography separates substances by their different…", options: ["rates of movement", "colours only", "masses only", "charges"], correctIndex: 0, explanation: "Components travel at different rates." },
        { prompt: "A ring of carbon atoms describes a … compound.", options: ["cyclic", "straight chain", "ionic", "aromatic only"], correctIndex: 0, explanation: "Cyclic compounds have rings." },
        { prompt: "Compounds containing a benzene ring are classed as…", options: ["aromatic", "aliphatic", "ionic", "saturated only"], correctIndex: 0, explanation: "Benzene-ring compounds are aromatic." },
        { prompt: "Which is NOT usually counted as an organic compound?", options: ["carbon dioxide", "ethane", "ethanol", "methane"], correctIndex: 0, explanation: "CO₂ and carbonates are treated as inorganic." },
        { prompt: "Most organic compounds are…", options: ["flammable", "non-combustible", "explosive salts", "metallic"], correctIndex: 0, explanation: "Organic compounds usually burn in air." },
        { prompt: "Members of a homologous series show … chemical reactions.", options: ["similar", "completely different", "no", "ionic"], correctIndex: 0, explanation: "Same functional group means similar reactions." },
        { prompt: "How many structural isomers does C₄H₁₀ have?", options: ["2", "1", "4", "6"], correctIndex: 0, explanation: "Butane and 2-methylpropane." },
        { prompt: "Two immiscible solvents are used to separate a solute in…", options: ["solvent extraction", "crystallisation", "sublimation", "electrolysis"], correctIndex: 0, explanation: "Solvent extraction uses two immiscible liquids." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a functional group and a homologous series.", answerKey: "A functional group is the reactive atom or group of atoms that gives a family of organic compounds its characteristic chemical properties. A homologous series is a family of compounds with the same functional group and general formula, in which successive members differ by CH₂ and show a gradation in physical properties with similar chemical reactions. Award a mark for each definition.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Which technique best separates two liquids with different boiling points?", options: ["Distillation", "Filtration", "Crystallisation", "Decanting"], correctIndex: 0, answerKey: "Distillation separates liquids by boiling point.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Which pair are structural isomers?", options: ["Butane and 2-methylpropane", "Water and ice", "Oxygen and ozone", "Sodium and chlorine"], correctIndex: 0, answerKey: "Both are C₄H₁₀ with different structures — structural isomers.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "List four general physical characteristics of organic compounds.", answerKey: "Any four of: covalent/molecular; low melting and boiling points; usually insoluble in water but soluble in organic solvents; generally flammable; reactions slow and often needing heat or a catalyst. Award one mark each up to four.", marks: 4 },
        { type: "ESSAY", prompt: "Explain how organic compounds are classified and how a mixture of organic substances can be separated and purified, naming appropriate techniques.", answerKey: "A full answer classifies organic compounds by carbon skeleton (straight chain, branched, cyclic/alicyclic, acyclic and aromatic) and by functional group (families such as alkanes, alkenes, alcohols, acids). For separation and purification it names and explains: distillation/fractional distillation (by boiling point), recrystallisation (purifying solids by dissolving in hot solvent and cooling), chromatography (different rates of movement over a stationary phase) and solvent extraction (two immiscible solvents). Award marks for the classification schemes and for correctly matched separation techniques.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Ball et al.) — 12.02 Structures and Names of Alkanes / 12.5 Alkenes and Alkynes (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/The_Basics_of_General_Organic_and_Biological_Chemistry_(Ball_et_al.)/12%3A_Organic_Chemistry_-_Alkanes_and_Halogenated_Hydrocarbons/12.02%3A_Structures_and_Names_of_Alkanes)
      slug: "hydrocarbons",
      title: "Hydrocarbons",
      objective:
        "By the end of the topic, learners should be able to describe alkanes, alkenes and alkynes, their general formulae, naming, properties and reactions, and outline petroleum refining, petrochemicals and octane rating. (MoE Grade 12 Period I, CONTENTS 2.)",
      estimatedMinutes: 170,
      notes: `## Hydrocarbons

- **Hydrocarbon** — a compound of **carbon and hydrogen only**.
- **Saturated** hydrocarbons contain only single C–C bonds (alkanes).
- **Unsaturated** hydrocarbons contain C=C or C≡C bonds (alkenes, alkynes).

## Alkanes

- General formula **CₙH₂ₙ₊₂**; saturated; each carbon has four single bonds.
- Homologous series differing by CH₂.

| Name | Formula |
| --- | --- |
| Methane | CH₄ |
| Ethane | C₂H₆ |
| Propane | C₃H₈ |
| Butane | C₄H₁₀ |
| Pentane | C₅H₁₂ |
| Hexane | C₆H₁₄ |

- **Physical properties:** boiling point rises with chain length; insoluble in water; less dense than water.
- **Chemical properties:** rather unreactive; undergo **combustion** and **substitution** with halogens.
- **Complete combustion:** CH₄ + 2O₂ → CO₂ + 2H₂O.
- **Substitution (light):** CH₄ + Cl₂ → CH₃Cl + HCl.

## Petroleum

- **Petroleum (crude oil)** is a mixture of hydrocarbons separated by **fractional distillation**.
- Fractions (in order of rising boiling point): refinery gas, petrol (gasoline), naphtha, kerosene, diesel, fuel oil, bitumen.
- **Cracking** — large alkanes broken into smaller, more useful alkanes and alkenes (heat + catalyst).
- **Reforming** — straight-chain alkanes converted to branched or cyclic forms to raise petrol quality.

## Petrochemicals and octane rating

- **Petrochemicals** — chemicals made from petroleum used as starting materials for plastics, detergents, solvents and drugs.
- **Octane number** — measures how well a fuel resists **knocking** (premature explosion). Branched and aromatic hydrocarbons have higher octane numbers.

## Alkenes

- General formula **CₙH₂ₙ**; contain a **C=C double bond**; unsaturated.
- Naming: replace -ane with **-ene** (ethene, propene, butene).
- More reactive than alkanes; undergo **addition** reactions.
- **Addition of bromine:** C₂H₄ + Br₂ → C₂H₄Br₂ (bromine water goes colourless — a test for unsaturation).
- **Hydrogenation:** C₂H₄ + H₂ → C₂H₆ (with Ni catalyst).

## Alkynes

- General formula **CₙH₂ₙ₋₂**; contain a **C≡C triple bond**; unsaturated.
- Naming: suffix **-yne** (ethyne, propyne). Ethyne (acetylene) is used in welding.
- Very reactive; undergo **addition** reactions like alkenes.

## Common errors and misconceptions

- **Wrong general formula** — alkane CₙH₂ₙ₊₂, alkene CₙH₂ₙ, alkyne CₙH₂ₙ₋₂.
- **Confusing addition and substitution** — alkenes/alkynes add; alkanes substitute.
- **Thinking alkanes decolourise bromine water** — only unsaturated hydrocarbons do so quickly.`,
      workedExample: `**Task.** An alkene has the molecular formula C₃H₆. (a) Name it and give its general formula. (b) Write the equation for its reaction with bromine and state what is observed.

**Part (a) — Identify**
1. C₃H₆ fits CₙH₂ₙ (n = 3), so it is an **alkene**.
2. Three carbons with a double bond = **propene**.

**Part (b) — Reaction with bromine (addition)**
1. The C=C double bond adds a Br₂ molecule across it.
2. C₃H₆ + Br₂ → C₃H₆Br₂ (1,2-dibromopropane).
3. **Observation:** orange/brown bromine water is **decolourised** — the test for an unsaturated hydrocarbon.

**Conclusion.** Propene (C₃H₆, general formula CₙH₂ₙ) reacts by addition with bromine, decolourising bromine water, confirming the C=C double bond.`,
      quiz: [
        { prompt: "A hydrocarbon contains only…", options: ["carbon and hydrogen", "carbon and oxygen", "hydrogen and oxygen", "carbon and nitrogen"], correctIndex: 0, explanation: "Hydrocarbons are C and H only." },
        { prompt: "The general formula of alkanes is…", options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"], correctIndex: 0, explanation: "Alkanes are saturated: CₙH₂ₙ₊₂." },
        { prompt: "Alkanes are described as … hydrocarbons.", options: ["saturated", "unsaturated", "aromatic", "ionic"], correctIndex: 0, explanation: "Only single bonds = saturated." },
        { prompt: "The general formula of alkenes is…", options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁"], correctIndex: 0, explanation: "Alkenes have one C=C: CₙH₂ₙ." },
        { prompt: "The general formula of alkynes is…", options: ["CₙH₂ₙ₋₂", "CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙHₙ"], correctIndex: 0, explanation: "Alkynes have a C≡C: CₙH₂ₙ₋₂." },
        { prompt: "The characteristic bond of an alkene is a…", options: ["C=C double bond", "C≡C triple bond", "C–C single bond", "C–O bond"], correctIndex: 0, explanation: "Alkenes have a C=C." },
        { prompt: "Complete combustion of methane gives…", options: ["CO₂ and H₂O", "CO and H₂", "C and H₂O", "CO₂ only"], correctIndex: 0, explanation: "CH₄ + 2O₂ → CO₂ + 2H₂O." },
        { prompt: "Alkanes react with chlorine in light by…", options: ["substitution", "addition", "neutralisation", "polymerisation"], correctIndex: 0, explanation: "Halogenation is substitution." },
        { prompt: "Crude oil is separated into fractions by…", options: ["fractional distillation", "filtration", "electrolysis", "crystallisation"], correctIndex: 0, explanation: "Fractions differ in boiling point." },
        { prompt: "Breaking large alkanes into smaller molecules is called…", options: ["cracking", "reforming", "distillation", "combustion"], correctIndex: 0, explanation: "Cracking makes smaller alkanes and alkenes." },
        { prompt: "The octane number measures a fuel's resistance to…", options: ["knocking", "freezing", "boiling", "rusting"], correctIndex: 0, explanation: "Higher octane resists knocking." },
        { prompt: "Bromine water is decolourised by…", options: ["an alkene", "an alkane", "water", "carbon dioxide"], correctIndex: 0, explanation: "Unsaturated hydrocarbons add bromine." },
        { prompt: "The naming suffix for an alkyne is…", options: ["-yne", "-ene", "-ane", "-ol"], correctIndex: 0, explanation: "Alkynes end in -yne." },
        { prompt: "Ethene reacting with hydrogen over nickel gives…", options: ["ethane", "ethyne", "ethanol", "ethene"], correctIndex: 0, explanation: "Hydrogenation: C₂H₄ + H₂ → C₂H₆." },
        { prompt: "Which is used in welding?", options: ["ethyne (acetylene)", "methane", "hexane", "benzene"], correctIndex: 0, explanation: "Ethyne burns very hot for welding." },
        { prompt: "Along an alkane series, boiling point … as chain length increases.", options: ["rises", "falls", "stays fixed", "becomes zero"], correctIndex: 0, explanation: "More carbons, higher boiling point." },
        { prompt: "Converting straight chains to branched/cyclic forms is called…", options: ["reforming", "cracking", "combustion", "hydration"], correctIndex: 0, explanation: "Reforming raises petrol quality." },
        { prompt: "Which reaction type is typical of alkenes and alkynes?", options: ["addition", "substitution", "neutralisation", "precipitation"], correctIndex: 0, explanation: "Multiple bonds add reagents." },
        { prompt: "Petrochemicals are made from…", options: ["petroleum", "limestone", "water", "air only"], correctIndex: 0, explanation: "Petrochemicals derive from crude oil." },
        { prompt: "Which fraction has the lowest boiling point?", options: ["refinery gas", "diesel", "bitumen", "fuel oil"], correctIndex: 0, explanation: "Gases come off first (lowest boiling point)." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Give the general formulae of alkanes, alkenes and alkynes and state which are saturated.", answerKey: "Alkanes CₙH₂ₙ₊₂ (saturated); alkenes CₙH₂ₙ (unsaturated, one C=C); alkynes CₙH₂ₙ₋₂ (unsaturated, one C≡C). Award marks for the three formulae and for correctly identifying alkanes as saturated.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which observation confirms an unsaturated hydrocarbon?", options: ["Bromine water is decolourised", "A white precipitate forms", "The gas turns limewater milky", "A blue flame with no products"], correctIndex: 0, answerKey: "Alkenes/alkynes add bromine, decolourising bromine water.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Cracking of large hydrocarbon molecules produces:", options: ["smaller alkanes and alkenes", "only carbon dioxide", "only water", "metal oxides"], correctIndex: 0, answerKey: "Cracking gives smaller alkanes and alkenes.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Write balanced equations for (a) the complete combustion of methane and (b) the reaction of ethene with hydrogen.", answerKey: "(a) CH₄ + 2O₂ → CO₂ + 2H₂O. (b) C₂H₄ + H₂ → C₂H₆ (nickel catalyst). Award a mark for each correct balanced equation and a mark for balancing/conditions.", marks: 3 },
        { type: "ESSAY", prompt: "Describe how crude oil is refined into useful products, and explain the meaning and importance of cracking, reforming and octane rating.", answerKey: "A strong answer explains that crude oil (petroleum) is a mixture of hydrocarbons separated by fractional distillation into fractions of increasing boiling point (refinery gas, petrol, naphtha, kerosene, diesel, fuel oil, bitumen). Cracking breaks long-chain molecules into smaller, more useful alkanes and alkenes using heat and a catalyst, meeting demand for petrol and alkene feedstock. Reforming rearranges straight-chain molecules into branched or cyclic ones to improve fuel quality. The octane number measures resistance to knocking (premature ignition); branched and aromatic hydrocarbons have higher octane numbers. Award marks for fractional distillation, cracking, reforming and octane rating.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 18.10 Aromatic Hydrocarbons (Introductory Chemistry) (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(LibreTexts)/18%3A_Organic_Chemistry/18.10%3A_Aromatic_Hydrocarbons)
      slug: "benzene",
      title: "Benzene",
      objective:
        "By the end of the topic, learners should be able to describe the structure, physical and chemical properties, reactions and uses of benzene. (MoE Grade 12 Period I, CONTENTS 3.)",
      estimatedMinutes: 120,
      notes: `## Structure of benzene

- **Benzene** is the simplest **aromatic** hydrocarbon; molecular formula **C₆H₆**.
- Six carbon atoms form a **planar hexagonal ring**, each carbon sp² and bonded to one hydrogen.
- The six p-electrons are **delocalised** above and below the ring — a **resonance hybrid** (not fixed single/double bonds).
- All six carbon–carbon bonds are **equal in length**, intermediate between single and double.

\`\`\`svg Benzene ring with delocalised electrons
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hexagonal benzene ring with an inner circle showing delocalised electrons">
  <polygon points="60,20 95,40 95,80 60,100 25,80 25,40" fill="none" stroke="#334155" stroke-width="2"/>
  <circle cx="60" cy="60" r="22" fill="none" stroke="#334155" stroke-width="1.5"/>
</svg>
\`\`\`

## Physical properties

- Colourless liquid with a characteristic smell; **insoluble in water**, less dense than water.
- Boiling point about 80 °C; burns with a very **smoky (sooty) flame** (high carbon content).
- **Toxic and carcinogenic** — handle with care.

## Chemical properties

- Because the delocalised ring is **stable**, benzene undergoes **substitution**, not addition (this keeps the ring intact).
- **Halogenation:** C₆H₆ + Cl₂ → C₆H₅Cl + HCl (with a catalyst such as FeCl₃).
- **Nitration:** C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O (with concentrated H₂SO₄).
- Does **not** decolourise bromine water readily (unlike alkenes).

## Uses

- A starting material for many products: **toluene** and **xylene** (solvents), **styrene** (for polystyrene), plus dyes, drugs (aspirin, ibuprofen), detergents and plastics.

## Common errors and misconceptions

- **Drawing benzene as fixed alternating double bonds** — the electrons are delocalised; all C–C bonds are equal.
- **Expecting addition reactions** — benzene mainly undergoes substitution to preserve the stable ring.
- **Treating benzene as harmless** — it is toxic and a known carcinogen.`,
      workedExample: `**Task.** Explain why benzene undergoes substitution rather than addition, and write the equation for the reaction of benzene with chlorine.

**Step 1 — Recall the structure**
Benzene (C₆H₆) has six delocalised p-electrons forming stable electron clouds above and below the ring; this delocalisation gives extra stability (resonance energy).

**Step 2 — Why substitution, not addition**
Addition would break the delocalised ring and destroy its stability. **Substitution** replaces a hydrogen atom, leaving the stable delocalised ring intact, so it is favoured.

**Step 3 — Write the reaction with chlorine**
With an FeCl₃ catalyst, one H is replaced by Cl:
C₆H₆ + Cl₂ → C₆H₅Cl + HCl.

**Conclusion.** The stability of the delocalised ring makes benzene react by substitution (e.g. chlorination to chlorobenzene) rather than by addition.`,
      quiz: [
        { prompt: "The molecular formula of benzene is…", options: ["C₆H₆", "C₆H₁₂", "C₆H₁₄", "CH₄"], correctIndex: 0, explanation: "Benzene is C₆H₆." },
        { prompt: "Benzene is the simplest … hydrocarbon.", options: ["aromatic", "saturated", "ionic", "cyclic alkane"], correctIndex: 0, explanation: "Benzene is aromatic." },
        { prompt: "The benzene ring is…", options: ["planar and hexagonal", "a straight chain", "a tetrahedron", "a cube"], correctIndex: 0, explanation: "Six carbons in a flat hexagon." },
        { prompt: "The six electrons in the ring are…", options: ["delocalised", "fixed on one atom", "ionic", "removed"], correctIndex: 0, explanation: "Delocalised above and below the ring." },
        { prompt: "The carbon–carbon bonds in benzene are…", options: ["all equal in length", "alternating long and short", "all triple", "ionic"], correctIndex: 0, explanation: "All C–C bonds are equal (resonance)." },
        { prompt: "Benzene mainly undergoes … reactions.", options: ["substitution", "addition", "neutralisation", "precipitation"], correctIndex: 0, explanation: "Substitution keeps the stable ring." },
        { prompt: "Benzene reacts with chlorine (FeCl₃) to give…", options: ["chlorobenzene + HCl", "hexane", "CO₂ + H₂O", "carbon"], correctIndex: 0, explanation: "C₆H₆ + Cl₂ → C₆H₅Cl + HCl." },
        { prompt: "Benzene burns with a … flame.", options: ["smoky (sooty)", "clean blue", "green", "colourless"], correctIndex: 0, explanation: "High carbon content gives soot." },
        { prompt: "Benzene is … in water.", options: ["insoluble", "very soluble", "ionised", "reactive"], correctIndex: 0, explanation: "Non-polar, insoluble in water." },
        { prompt: "Nitration of benzene needs concentrated…", options: ["H₂SO₄ (with HNO₃)", "NaOH", "NaCl", "water"], correctIndex: 0, explanation: "Conc. H₂SO₄ catalyses nitration." },
        { prompt: "A safety concern with benzene is that it is…", options: ["carcinogenic", "edible", "a fertiliser", "harmless"], correctIndex: 0, explanation: "Benzene is toxic and a carcinogen." },
        { prompt: "Styrene, made from benzene chemistry, is used to make…", options: ["polystyrene", "glass", "steel", "salt"], correctIndex: 0, explanation: "Styrene polymerises to polystyrene." },
        { prompt: "Compared with an alkene, benzene decolourises bromine water…", options: ["much less readily", "instantly", "explosively", "identically"], correctIndex: 0, explanation: "The stable ring resists addition." },
        { prompt: "Each carbon in benzene is bonded to how many hydrogens?", options: ["one", "two", "three", "none"], correctIndex: 0, explanation: "C₆H₆: one H per carbon." },
        { prompt: "Toluene and xylene, related to benzene, are used as…", options: ["solvents", "metals", "acids", "fuels only"], correctIndex: 0, explanation: "Important industrial solvents." },
        { prompt: "The extra stability of benzene is called its…", options: ["resonance (delocalisation) energy", "ionic energy", "lattice energy", "activation energy"], correctIndex: 0, explanation: "Delocalisation gives resonance stability." },
        { prompt: "Nitration replaces a hydrogen of benzene with a…", options: ["–NO₂ group", "–OH group", "–Cl only", "–CH₃ only"], correctIndex: 0, explanation: "Nitration gives nitrobenzene (C₆H₅NO₂)." },
        { prompt: "Benzene is classed as aromatic because it contains a…", options: ["benzene (aromatic) ring", "double bond only", "single bond only", "metal ion"], correctIndex: 0, explanation: "Aromatic = benzene ring present." },
        { prompt: "Why is substitution favoured over addition in benzene?", options: ["it preserves the stable delocalised ring", "it is faster to draw", "addition is impossible for any molecule", "benzene has no hydrogens"], correctIndex: 0, explanation: "Substitution keeps the aromatic stability." },
        { prompt: "The density of benzene compared with water is…", options: ["lower", "higher", "equal", "zero"], correctIndex: 0, explanation: "Benzene floats on water." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe the structure of benzene, including its formula, shape and bonding.", answerKey: "Benzene has molecular formula C₆H₆; six carbon atoms form a planar hexagonal ring, each bonded to one hydrogen. The six p-electrons are delocalised above and below the ring (a resonance hybrid), so all six carbon–carbon bonds are equal in length, between single and double. Award marks for formula, hexagonal planar ring and delocalised/equal bonds.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Benzene characteristically undergoes:", options: ["Substitution reactions", "Addition reactions", "Neutralisation reactions", "Precipitation reactions"], correctIndex: 0, answerKey: "Substitution preserves the stable delocalised ring.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is a correct hazard of benzene?", options: ["It is carcinogenic", "It is a nutrient", "It is a strong base", "It is unreactive and safe"], correctIndex: 0, answerKey: "Benzene is toxic and carcinogenic.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Write equations for the reaction of benzene with (a) chlorine and (b) concentrated nitric acid, naming the products.", answerKey: "(a) C₆H₆ + Cl₂ → C₆H₅Cl + HCl (chlorobenzene, FeCl₃ catalyst). (b) C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O (nitrobenzene, conc. H₂SO₄). Award marks for each correct equation and product name.", marks: 4 },
        { type: "ESSAY", prompt: "Explain why benzene is unusually stable and why this makes it react by substitution rather than addition, and give three uses of benzene or its derivatives.", answerKey: "A full answer explains that benzene's six p-electrons are delocalised into electron clouds above and below the ring, giving resonance (delocalisation) stability and equal C–C bond lengths. Addition would disrupt this stable delocalised system, so benzene instead undergoes substitution (e.g. halogenation, nitration) which replaces a hydrogen and keeps the ring intact. Three uses: making styrene for polystyrene; producing solvents such as toluene and xylene; and manufacturing dyes, detergents or drugs (aspirin, ibuprofen). Award marks for delocalisation/stability, the substitution-vs-addition reasoning, and three valid uses.", marks: 6 },
      ],
    },
  ],
};
