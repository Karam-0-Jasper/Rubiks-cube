import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 12,
// Semester Two, Period VI: Review of Some Fundamental Topics Previously Treated
// (Grades 10-12), Cont'd, for WASSCE revision. One topic per top-level CONTENTS
// item: 1. Introduction to Organic Chemistry (general characteristics,
// classification, homologous series and functional groups, hydrocarbons,
// hydrocarbon derivatives, natural and synthetic organic compounds); 2.
// Chemistry, Industry and the Environment; 3. Chemistry of Selected Metals and
// their Compounds; 4. Chemistry of Selected Non-metals and their Compounds.
export const chemistryG12P6: PeriodContent = {
  grade: 12,
  number: 6,
  title: "Review of Grade 12 Topics for WASSCE",
  summary:
    "Period VI of the MoE Grade 12 Chemistry syllabus: a consolidating revision of the Grade 12 topics ahead of the WASSCE. Learners review organic chemistry (general characteristics, classification, homologous series, functional groups, hydrocarbons, hydrocarbon derivatives, and natural and synthetic organic compounds), chemistry in industry and the environment, the chemistry of selected metals and their compounds, and the chemistry of selected non-metals and their compounds.",
  topics: [
    {
      // source: LibreTexts — 1: Introduction to Organic Chemistry / 18: Organic Chemistry (Introductory Chemistry) (https://chem.libretexts.org/Courses/College_of_the_Canyons/CHEM_202%3A_General_Chemistry_II_OER/01%3A_Introduction_to_Organic_Chemistry)
      slug: "introduction-to-organic-chemistry-review",
      title: "Introduction to Organic Chemistry (Review)",
      objective:
        "By the end of the topic, learners should be able to review the general characteristics and classification of organic compounds, homologous series and functional groups, hydrocarbons, hydrocarbon derivatives, and natural and synthetic organic compounds. (MoE Grade 12 Period VI, CONTENTS 1.)",
      estimatedMinutes: 150,
      notes: `## General characteristics of organic compounds

- **Organic chemistry** — the chemistry of **carbon compounds** (except CO, CO₂, carbonates and cyanides).
- Carbon **catenates** (bonds to itself), giving millions of compounds.
- Mostly **covalent**, molecular; low melting/boiling points; usually insoluble in water; flammable.

## Classification and functional groups

- Classified by carbon skeleton (straight chain, branched, cyclic, aromatic) and by **functional group**.
- **Homologous series** — a family with the same functional group and general formula, differing by CH₂.

| Family | Functional group | General formula |
| --- | --- | --- |
| Alkane | C–C single | CₙH₂ₙ₊₂ |
| Alkene | C=C | CₙH₂ₙ |
| Alkyne | C≡C | CₙH₂ₙ₋₂ |
| Alcohol | –OH | CₙH₂ₙ₊₁OH |
| Carboxylic acid | –COOH | — |

## Hydrocarbons

- **Alkanes** (saturated) — combustion and substitution; from petroleum by fractional distillation, cracking and reforming.
- **Alkenes/alkynes** (unsaturated) — addition reactions; decolourise bromine water.
- **Benzene** — aromatic, delocalised ring, undergoes substitution.

## Hydrocarbon derivatives

- Alcohols, aldehydes, ketones, ethers, alkyl halides, carboxylic acids and esters.
- **Esterification:** acid + alcohol ⇌ ester + water. **Saponification:** fat + NaOH → soap + glycerol.

## Natural and synthetic organic compounds

- **Natural:** rubber, starch, proteins, carbohydrates.
- **Synthetic (polymers):** addition (polythene, PVC) and condensation (nylon, polyester).

## Common errors and misconceptions

- **CO₂ is organic** — it is treated as inorganic.
- **Alkanes decolourise bromine water quickly** — only unsaturated hydrocarbons do.
- **Proteins are addition polymers** — they are condensation polymers.`,
      workedExample: `**Task.** For the compound C₂H₅OH: (a) name it and its family; (b) give its functional group; (c) write the equation for its reaction with ethanoic acid.

**Step 1 — Name and family**
C₂H₅OH is **ethanol**, an **alcohol (alkanol)**.

**Step 2 — Functional group**
The functional group is the **hydroxyl group, –OH**.

**Step 3 — Reaction with ethanoic acid (esterification)**
CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (ethyl ethanoate + water, with conc. H₂SO₄).

**Conclusion.** Ethanol is an alcohol (–OH); it undergoes esterification with ethanoic acid to give the ester ethyl ethanoate and water — a key reaction linking two organic families.`,
      quiz: [
        { prompt: "Organic chemistry is the chemistry of … compounds.", options: ["carbon", "sodium", "silicon", "oxygen"], correctIndex: 0, explanation: "Carbon compounds." },
        { prompt: "Carbon bonding to itself in chains is called…", options: ["catenation", "ionisation", "oxidation", "hydration"], correctIndex: 0, explanation: "Catenation gives many compounds." },
        { prompt: "The general formula of alkanes is…", options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"], correctIndex: 0, explanation: "Saturated hydrocarbons." },
        { prompt: "A homologous series has members differing by…", options: ["CH₂", "H₂O", "OH", "CO₂"], correctIndex: 0, explanation: "Successive CH₂ units." },
        { prompt: "The functional group of an alcohol is…", options: ["–OH", "–COOH", "C=C", "–CHO"], correctIndex: 0, explanation: "Hydroxyl group." },
        { prompt: "Alkenes are … hydrocarbons.", options: ["unsaturated", "saturated", "aromatic only", "ionic"], correctIndex: 0, explanation: "Contain C=C." },
        { prompt: "Unsaturated hydrocarbons … bromine water.", options: ["decolourise", "turn blue", "ignore", "freeze"], correctIndex: 0, explanation: "Addition removes bromine colour." },
        { prompt: "Benzene mainly undergoes … reactions.", options: ["substitution", "addition", "neutralisation", "precipitation"], correctIndex: 0, explanation: "Keeps the stable ring." },
        { prompt: "Acid + alcohol gives an ester and…", options: ["water", "hydrogen", "oxygen", "carbon"], correctIndex: 0, explanation: "Esterification." },
        { prompt: "Boiling a fat with NaOH to make soap is…", options: ["saponification", "esterification", "cracking", "hydrogenation"], correctIndex: 0, explanation: "Fat + NaOH → soap + glycerol." },
        { prompt: "Which is a natural polymer?", options: ["rubber", "PVC", "nylon", "polythene"], correctIndex: 0, explanation: "Rubber is natural." },
        { prompt: "Polythene is made by … polymerisation.", options: ["addition", "condensation", "cracking", "substitution"], correctIndex: 0, explanation: "Ethene adds to form polythene." },
        { prompt: "Nylon is made by … polymerisation.", options: ["condensation", "addition", "displacement", "combustion"], correctIndex: 0, explanation: "Loses a small molecule (water)." },
        { prompt: "The general formula of alkynes is…", options: ["CₙH₂ₙ₋₂", "CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙHₙ"], correctIndex: 0, explanation: "Triple bond, CₙH₂ₙ₋₂." },
        { prompt: "Crude oil is separated by…", options: ["fractional distillation", "electrolysis", "filtration", "crystallisation"], correctIndex: 0, explanation: "Fractions by boiling point." },
        { prompt: "The functional group of a carboxylic acid is…", options: ["–COOH", "–OH", "–CHO", "C=C"], correctIndex: 0, explanation: "Carboxyl group." },
        { prompt: "Which is treated as inorganic?", options: ["carbon dioxide", "ethanol", "ethane", "ethanoic acid"], correctIndex: 0, explanation: "CO₂ is inorganic." },
        { prompt: "Isomers have the same … but different structures.", options: ["molecular formula", "boiling point", "colour", "density"], correctIndex: 0, explanation: "Same formula, different arrangement." },
        { prompt: "Cracking large hydrocarbons gives smaller alkanes and…", options: ["alkenes", "metals", "salts", "acids"], correctIndex: 0, explanation: "Useful smaller molecules." },
        { prompt: "Starch and proteins are examples of … organic compounds.", options: ["natural", "synthetic", "inorganic", "ionic"], correctIndex: 0, explanation: "Natural polymers/biomolecules." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State three general characteristics of organic compounds and give the general formula of alkanes and alkenes.", answerKey: "Characteristics (any three): covalent/molecular; low melting and boiling points; usually insoluble in water; flammable. Alkanes CₙH₂ₙ₊₂; alkenes CₙH₂ₙ. Award marks for three characteristics and the two formulae.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which reaction converts a fat into soap?", options: ["Saponification", "Esterification", "Cracking", "Hydrogenation"], correctIndex: 0, answerKey: "Saponification (fat + NaOH → soap + glycerol).", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is a condensation polymer?", options: ["Nylon", "Polythene", "PVC", "Polystyrene"], correctIndex: 0, answerKey: "Nylon is a condensation polymer.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Name the functional groups of an alcohol, an aldehyde and a carboxylic acid.", answerKey: "Alcohol — –OH (hydroxyl); aldehyde — –CHO (carbonyl at chain end); carboxylic acid — –COOH (carboxyl). Award a mark for each.", marks: 3 },
        { type: "ESSAY", prompt: "Review the classification of organic compounds, the idea of a homologous series and functional groups, and distinguish natural from synthetic organic compounds with examples.", answerKey: "A full answer classifies organic compounds by carbon skeleton (straight chain, branched, cyclic, aromatic) and by functional group; defines a homologous series (family with the same functional group and general formula, differing by CH₂, with graded physical and similar chemical properties); names functional-group families (alkanes, alkenes, alkynes, alcohols, aldehydes, ketones, carboxylic acids, esters). It distinguishes natural organic compounds (rubber, starch, proteins, carbohydrates) from synthetic ones (addition polymers like polythene/PVC and condensation polymers like nylon/polyester). Award marks for classification, homologous series/functional groups and the natural-vs-synthetic distinction with examples.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 2.6 Industrially Important Chemicals / Biology LibreTexts Pollution & Ozone Depletion (https://chem.libretexts.org/Bookshelves/General_Chemistry/Book%3A_General_Chemistry%3A_Principles_Patterns_and_Applications_(Averill)/02%3A_Molecules_Ions_and_Chemical_Formulas/2.06%3A_Industrially_Important_Chemicals)
      slug: "chemistry-industry-and-the-environment-review",
      title: "Chemistry, Industry and the Environment (Review)",
      objective:
        "By the end of the topic, learners should be able to review the chemical industry, its raw materials and products, its environmental effects and biotechnology. (MoE Grade 12 Period VI, CONTENTS 2.)",
      estimatedMinutes: 120,
      notes: `## The chemical industry

- Converts **raw materials (feedstocks)** into useful products by chemical reactions.
- Classified into sectors: heavy/basic inorganic, petrochemical, polymers, fertilisers, fine/specialty.
- **Heavy chemicals** — bulk, cheap (sulfuric acid, ammonia); **fine chemicals** — small quantity, high purity, high value (drugs, dyes).
- Siting depends on raw materials, energy, water, transport, labour, market and waste disposal.

## Effects on the environment

- **Pollution:** air (CO, SO₂, NOₓ, particulates), water (sewage, effluent, fertilisers causing eutrophication), soil (pesticides, heavy metals).
- **Greenhouse effect / global warming** — greenhouse gases (CO₂, methane) trap heat.
- **Acid rain** — SO₂ and NOₓ form sulfuric and nitric acids.
- **Ozone depletion** — CFCs release chlorine radicals that destroy ozone (Montreal Protocol banned CFCs).
- **Biodegradable** waste (food, paper) is broken down by microbes; **non-biodegradable** (plastic, glass) persists.

## Biotechnology

- Uses microbes/enzymes: fermentation (C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂), baking, brewing, biogas (methane), insulin, penicillin, bioleaching of metals.

## Common errors and misconceptions

- **Ozone depletion and global warming are the same** — different causes and effects.
- **Fermentation needs oxygen** — alcoholic fermentation is anaerobic.
- **Fine chemicals are cheap** — they are high value.`,
      workedExample: `**Task.** Explain how acid rain forms and give one effect and one control measure; then distinguish it from the greenhouse effect.

**Step 1 — Formation of acid rain**
Burning fossil fuels releases **sulfur dioxide (SO₂)** and **nitrogen oxides (NOₓ)**, which dissolve in rainwater to form **sulfuric and nitric acids**.

**Step 2 — Effect and control**
- **Effect:** kills fish in lakes, damages trees, corrodes buildings and metals.
- **Control:** remove sulfur from fuels / fit scrubbers / burn less fossil fuel.

**Step 3 — Difference from the greenhouse effect**
Acid rain is caused by SO₂/NOₓ making rain acidic; the **greenhouse effect** is caused by greenhouse gases (CO₂, methane) trapping heat and warming the Earth — a different cause and a different effect.

**Conclusion.** Acid rain (from SO₂/NOₓ) acidifies the environment, while the greenhouse effect (from CO₂/methane) warms it — separate problems with separate controls.`,
      quiz: [
        { prompt: "The chemical industry converts raw materials into…", options: ["useful products", "only waste", "pure elements only", "energy only"], correctIndex: 0, explanation: "Products via chemical reactions." },
        { prompt: "Sulfuric acid is a … chemical.", options: ["heavy", "fine", "specialty drug", "food additive"], correctIndex: 0, explanation: "Bulk/heavy chemical." },
        { prompt: "A drug is a … chemical.", options: ["fine", "heavy", "feedstock", "fuel"], correctIndex: 0, explanation: "Fine/specialty chemical." },
        { prompt: "Excess fertiliser in rivers causes…", options: ["eutrophication", "distillation", "combustion", "sublimation"], correctIndex: 0, explanation: "Algal blooms deplete oxygen." },
        { prompt: "The greenhouse effect is caused by gases trapping…", options: ["infrared (heat)", "visible light only", "sound", "radio waves"], correctIndex: 0, explanation: "CO₂, methane trap heat." },
        { prompt: "Acid rain is caused mainly by SO₂ and…", options: ["nitrogen oxides", "carbon dioxide", "oxygen", "chlorine"], correctIndex: 0, explanation: "NOₓ makes nitric acid." },
        { prompt: "Ozone depletion is caused by…", options: ["CFCs", "carbon dioxide", "oxygen", "nitrogen"], correctIndex: 0, explanation: "Chlorine radicals destroy ozone." },
        { prompt: "The treaty that phased out CFCs is the…", options: ["Montreal Protocol", "Kyoto Bridge", "Paris Fuel Law", "Geneva Accord"], correctIndex: 0, explanation: "Montreal Protocol." },
        { prompt: "Biodegradable waste is broken down by…", options: ["microbes", "sunlight only", "magnets", "nothing"], correctIndex: 0, explanation: "Bacteria and fungi." },
        { prompt: "A non-biodegradable pollutant is…", options: ["plastic", "food waste", "paper", "cotton"], correctIndex: 0, explanation: "Plastic persists." },
        { prompt: "Alcoholic fermentation gives ethanol and…", options: ["carbon dioxide", "oxygen", "hydrogen", "nitrogen"], correctIndex: 0, explanation: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂." },
        { prompt: "Biogas used as fuel is mainly…", options: ["methane", "oxygen", "carbon dioxide", "hydrogen"], correctIndex: 0, explanation: "Methane." },
        { prompt: "Extracting metals from ores with bacteria is…", options: ["bioleaching", "smelting", "electrolysis", "cracking"], correctIndex: 0, explanation: "Microbes extract metals." },
        { prompt: "Which is an air pollutant?", options: ["carbon monoxide", "nitrogen (N₂)", "argon", "helium"], correctIndex: 0, explanation: "CO from incomplete combustion." },
        { prompt: "A control for air pollution from cars is a…", options: ["catalytic converter", "sewage tank", "fertiliser spreader", "water filter"], correctIndex: 0, explanation: "Cleans exhaust gases." },
        { prompt: "Heavy chemicals are made in … quantities.", options: ["very large", "tiny", "no", "negative"], correctIndex: 0, explanation: "Bulk production." },
        { prompt: "Siting a plant near raw materials reduces…", options: ["transport cost", "product quality", "safety", "yield"], correctIndex: 0, explanation: "Less transport of feedstock." },
        { prompt: "Insulin and penicillin can be produced using…", options: ["microorganisms", "crude oil", "limestone", "salt"], correctIndex: 0, explanation: "Biotechnology." },
        { prompt: "Which statement is TRUE?", options: ["ozone depletion and global warming are different problems", "they are the same", "both caused only by CFCs", "both increase UV protection"], correctIndex: 0, explanation: "Different causes and effects." },
        { prompt: "The best strategy for non-biodegradable waste is…", options: ["reduce, reuse, recycle", "burn in the open", "dump in rivers", "ignore it"], correctIndex: 0, explanation: "The 3 Rs." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between heavy and fine chemicals, with an example of each.", answerKey: "Heavy chemicals are made in very large quantities, are cheap and often used as feedstocks (e.g. sulfuric acid, ammonia). Fine chemicals are made in small quantities, of high purity and high value for specific uses (e.g. drugs, dyes). Award marks for the contrast and examples.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Ozone depletion in the stratosphere is caused by:", options: ["CFCs releasing chlorine radicals", "Carbon dioxide trapping heat", "Sulfur dioxide dissolving in rain", "Excess fertiliser"], correctIndex: 0, answerKey: "CFCs release chlorine radicals that destroy ozone.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Alcoholic fermentation is carried out by:", options: ["Yeast, anaerobically", "Bacteria, in excess oxygen", "Algae, in light only", "Fungi, with acid only"], correctIndex: 0, answerKey: "Yeast ferments sugars without oxygen.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "State two effects of industry on the environment and one control for each.", answerKey: "Any two, e.g. air pollution (control: scrubbers/cleaner fuels/catalytic converters); water pollution/eutrophication (control: treat effluent, limit fertilisers); acid rain (control: remove sulfur from fuels); greenhouse gases (control: burn less fossil fuel). Award marks for two effect-and-control pairs.", marks: 4 },
        { type: "ESSAY", prompt: "Review the effects of the chemical industry on the environment (pollution, greenhouse effect, acid rain, ozone depletion) and outline how biotechnology provides useful products.", answerKey: "A full answer covers pollution (air: CO, SO₂, NOₓ, particulates; water: sewage, effluent, fertilisers causing eutrophication; soil: pesticides, heavy metals), the greenhouse effect/global warming (CO₂ and methane trapping heat), acid rain (SO₂ and NOₓ forming sulfuric and nitric acids, harming lakes, trees and buildings) and ozone depletion (CFCs releasing chlorine radicals; Montreal Protocol). It outlines biotechnology: fermentation (ethanol, bread, brewing), biogas (methane), medical products (insulin, penicillin) and bioleaching of metals. Award marks for the environmental effects and the biotechnology applications.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 20.4 The Alkali Metals (Group 1) / Group 2 Alkaline Earth Metals / Activity Series (https://chem.libretexts.org/Bookshelves/General_Chemistry/Book%3A_General_Chemistry%3A_Principles_Patterns_and_Applications_(Averill)/20%3A_Periodic_Trends_and_the_s-Block_Elements/20.04%3A_The_Alkali_Metals_(Group_1))
      slug: "chemistry-of-selected-metals-review",
      title: "Chemistry of Selected Metals (Review)",
      objective:
        "By the end of the topic, learners should be able to review the properties and uses of sodium, calcium and copper and their compounds, the reactivity of iron and aluminium, metallurgy and alloys. (MoE Grade 12 Period VI, CONTENTS 3.)",
      estimatedMinutes: 130,
      notes: `## Sodium (Group 1) and calcium (Group 2)

| Metal | Group | Ion | Flame colour | Reaction with water |
| --- | --- | --- | --- | --- |
| Sodium | 1 | Na⁺ | golden-yellow | 2Na + 2H₂O → 2NaOH + H₂ (vigorous) |
| Calcium | 2 | Ca²⁺ | brick-red | Ca + 2H₂O → Ca(OH)₂ + H₂ (steady) |

- Key sodium compounds: NaCl, NaOH, Na₂CO₃, NaHCO₃. Key calcium compounds: CaCO₃, CaO, Ca(OH)₂, CaSO₄.
- **Lime cycle:** CaCO₃ → CaO + CO₂; CaO + H₂O → Ca(OH)₂; Ca(OH)₂ + CO₂ → CaCO₃ (limewater test).

## Reactivity of iron and aluminium

- **Reactivity series (part):** K > Na > Ca > Mg > Al > Zn > Fe > (H) > Cu.
- **Iron** rusts (needs air + water); **aluminium** is more reactive but protected by a tough oxide layer.
- Both react with dilute acid (above hydrogen) to give a salt + hydrogen.

## Copper (transition metal)

- Reddish-brown, good conductor, unreactive (below hydrogen); forms coloured Cu²⁺ compounds.
- CuSO₄ (blue/white — test for water), CuO (black), CuCl₂ (blue-green).

## Metallurgy and alloys

- **Iron** — reduced by CO in the blast furnace; **aluminium** — electrolysis of Al₂O₃ in cryolite.
- **Alloys:** brass (Cu + Zn), bronze (Cu + Sn), steel (Fe + C), duralumin (Al + Cu).

## Common errors and misconceptions

- **Sodium forms Na²⁺** — it forms Na⁺; calcium forms Ca²⁺.
- **Aluminium is less reactive than iron** — it is more reactive but oxide-protected.
- **Copper reacts with dilute acid** — it does not (below hydrogen).`,
      workedExample: `**Task.** Compare the reaction of sodium and calcium with water, giving equations and flame test colours.

**Step 1 — Sodium (Group 1)**
Reacts vigorously: 2Na + 2H₂O → 2NaOH + H₂; the metal floats, fizzes and may ignite (yellow flame). Flame test: **golden-yellow**.

**Step 2 — Calcium (Group 2)**
Reacts more steadily: Ca + 2H₂O → Ca(OH)₂ + H₂. Flame test: **brick-red**.

**Step 3 — Compare**
Both give an alkaline hydroxide and hydrogen, but sodium (Group 1) reacts more vigorously than calcium (Group 2); their flame colours (yellow vs brick-red) distinguish them.

**Conclusion.** Sodium and calcium both react with water to give a hydroxide and hydrogen, sodium more vigorously; flame tests (golden-yellow vs brick-red) identify each metal.`,
      quiz: [
        { prompt: "Sodium is in Group…", options: ["1", "2", "7", "0"], correctIndex: 0, explanation: "Alkali metal." },
        { prompt: "Calcium forms an ion with charge…", options: ["+2", "+1", "−2", "0"], correctIndex: 0, explanation: "Ca²⁺." },
        { prompt: "Sodium's flame test colour is…", options: ["golden-yellow", "brick-red", "green", "blue"], correctIndex: 0, explanation: "Yellow flame." },
        { prompt: "Calcium's flame test colour is…", options: ["brick-red", "yellow", "green", "lilac"], correctIndex: 0, explanation: "Brick-red." },
        { prompt: "Limewater turning milky tests for…", options: ["carbon dioxide", "oxygen", "hydrogen", "chlorine"], correctIndex: 0, explanation: "CO₂ forms CaCO₃." },
        { prompt: "Which is more reactive?", options: ["aluminium", "iron", "copper", "gold"], correctIndex: 0, explanation: "Al above Fe in the series." },
        { prompt: "Rusting of iron needs air and…", options: ["water", "oil", "salt only", "sunlight"], correctIndex: 0, explanation: "Both required." },
        { prompt: "Aluminium resists corrosion because of a layer of…", options: ["aluminium oxide", "rust", "carbon", "salt"], correctIndex: 0, explanation: "Al₂O₃ protects it." },
        { prompt: "Copper is a … metal.", options: ["transition", "alkali", "alkaline earth", "noble gas"], correctIndex: 0, explanation: "Transition metal." },
        { prompt: "Copper does NOT react with dilute acid because it is…", options: ["below hydrogen", "above sodium", "a gas", "radioactive"], correctIndex: 0, explanation: "Too unreactive." },
        { prompt: "Anhydrous copper(II) sulfate tests for…", options: ["water", "oxygen", "carbon dioxide", "hydrogen"], correctIndex: 0, explanation: "White → blue with water." },
        { prompt: "Iron is extracted by reduction with … in the blast furnace.", options: ["carbon monoxide", "oxygen", "water", "nitrogen"], correctIndex: 0, explanation: "CO reduces the ore." },
        { prompt: "Aluminium is extracted by…", options: ["electrolysis", "carbon reduction", "panning", "heating in air"], correctIndex: 0, explanation: "Too reactive for carbon." },
        { prompt: "Brass is copper and…", options: ["zinc", "tin", "carbon", "gold"], correctIndex: 0, explanation: "Cu + Zn." },
        { prompt: "Bronze is copper and…", options: ["tin", "zinc", "iron", "lead"], correctIndex: 0, explanation: "Cu + Sn." },
        { prompt: "Caustic soda is…", options: ["NaOH", "NaCl", "Na₂CO₃", "NaHCO₃"], correctIndex: 0, explanation: "Sodium hydroxide." },
        { prompt: "Quicklime is…", options: ["CaO", "CaCO₃", "Ca(OH)₂", "CaSO₄"], correctIndex: 0, explanation: "Calcium oxide." },
        { prompt: "Sodium reacts with water to give hydrogen and…", options: ["sodium hydroxide", "sodium oxide", "sodium chloride", "sodium carbonate"], correctIndex: 0, explanation: "2Na + 2H₂O → 2NaOH + H₂." },
        { prompt: "Steel is iron alloyed with…", options: ["carbon", "zinc", "tin", "gold"], correctIndex: 0, explanation: "Fe + C." },
        { prompt: "Both iron and aluminium react with dilute acid to give salt and…", options: ["hydrogen", "oxygen", "carbon dioxide", "chlorine"], correctIndex: 0, explanation: "Metals above hydrogen release H₂." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Give the group, ion and flame colour of sodium and calcium.", answerKey: "Sodium: Group 1, ion Na⁺, golden-yellow flame. Calcium: Group 2, ion Ca²⁺, brick-red flame. Award a mark for each correct detail (up to 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Why does aluminium resist corrosion despite being reactive?", options: ["A tough oxide layer protects it", "It is below hydrogen", "It never reacts", "It is a non-metal"], correctIndex: 0, answerKey: "The Al₂O₃ layer seals the surface.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Copper(II) sulfate is used to test for water because it changes:", options: ["From white to blue", "From blue to white", "To black", "To green"], correctIndex: 0, answerKey: "White anhydrous CuSO₄ turns blue with water.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "State how iron and aluminium are each extracted and explain why the methods differ.", answerKey: "Iron is extracted by reduction with carbon/carbon monoxide in the blast furnace; aluminium by electrolysis of molten aluminium oxide (in cryolite). They differ because aluminium is more reactive than carbon (carbon cannot reduce it) whereas iron is less reactive than carbon. Award marks for both methods and the reactivity reason.", marks: 3 },
        { type: "ESSAY", prompt: "Review the properties and uses of sodium, calcium and copper and their compounds, and compare the reactivity of iron and aluminium.", answerKey: "A full answer reviews sodium (soft, reactive Group 1 metal, Na⁺, yellow flame; NaCl, NaOH, Na₂CO₃, NaHCO₃ and their uses), calcium (Group 2, Ca²⁺, brick-red flame; CaCO₃, CaO, Ca(OH)₂ and the lime cycle/limewater test) and copper (unreactive transition metal, coloured Cu²⁺ compounds; CuSO₄ as a test for water, uses in wiring and alloys brass/bronze). It compares iron and aluminium: aluminium is more reactive but protected by a tough oxide layer, whereas iron rusts (needs air and water); both react with dilute acid to give a salt and hydrogen. Award marks for the metals/compounds and the iron-vs-aluminium comparison.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — Chemistry 2e (OpenStax) 18: Representative Metals, Metalloids, and Nonmetals; halogens, carbon, contact process (https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_2e_(OpenStax)/18%3A_Representative_Metals_Metalloids_and_Nonmetals)
      slug: "chemistry-of-selected-non-metals-review",
      title: "Chemistry of Selected Non-metals (Review)",
      objective:
        "By the end of the topic, learners should be able to review carbon, nitrogen, oxygen, sulfur, the halogens and the noble gases, their compounds, preparations and uses. (MoE Grade 12 Period VI, CONTENTS 4.)",
      estimatedMinutes: 140,
      notes: `## Carbon

- **Allotropes:** diamond (hard, non-conductor), graphite (soft, conducts), amorphous.
- **CO₂** (acidic, turns limewater milky) and **CO** (toxic, reducing agent).

## Nitrogen

- ~78% of air; unreactive (triple bond). **Ammonia** by the **Haber process** (N₂ + 3H₂ ⇌ 2NH₃, iron catalyst). **Nitric acid** by the **Ostwald process**.

## Oxygen and sulfur

- **Oxygen:** from decomposing H₂O₂ (MnO₂ catalyst) or distilling air; relights a glowing splint. Oxides are acidic, basic, amphoteric or neutral.
- **Sulfur:** allotropes rhombic and monoclinic. **Sulfuric acid** by the **contact process** (V₂O₅ catalyst): 2SO₂ + O₂ ⇌ 2SO₃.

## Halogens and chlorine

- **Halogens (Group 7):** diatomic non-metals; reactivity decreases down the group; form −1 ions; strong oxidising agents.
- **Silver nitrate test:** chloride (white), bromide (cream), iodide (yellow).
- **Chlorine:** green-yellow, poisonous; bleaches (via HOCl); water treatment; from electrolysis of brine.

## Noble gases

- Group 0/18; monatomic, inert (full outer shells). Helium (balloons), neon (lights), argon (light bulbs/welding).

## Water hardness

- **Hard water** contains Ca²⁺/Mg²⁺. **Temporary** hardness (hydrogen carbonates) removed by boiling; **permanent** (sulfates/chlorides) removed by washing soda or ion exchange.

## Common errors and misconceptions

- **The contact process uses iron** — it uses vanadium(V) oxide (iron is the Haber catalyst).
- **Halogen reactivity increases down the group** — it decreases.
- **Boiling removes all hardness** — only temporary hardness.`,
      workedExample: `**Task.** Identify the catalysts and write the key equilibrium equation for (a) the Haber process and (b) the contact process.

**Step 1 — Haber process (ammonia)**
Catalyst: **iron**. Equation: N₂ + 3H₂ ⇌ 2NH₃ (high pressure, ~450 °C).

**Step 2 — Contact process (sulfuric acid)**
Catalyst: **vanadium(V) oxide (V₂O₅)**. Key equation: 2SO₂ + O₂ ⇌ 2SO₃ (~450 °C).

**Step 3 — Distinguish**
The Haber process makes ammonia (iron catalyst); the contact process makes sulfuric acid (V₂O₅ catalyst) — a common exam distinction.

**Conclusion.** Ammonia is made by the Haber process (iron catalyst, N₂ + 3H₂ ⇌ 2NH₃) and sulfuric acid by the contact process (V₂O₅ catalyst, 2SO₂ + O₂ ⇌ 2SO₃).`,
      quiz: [
        { prompt: "Which carbon allotrope conducts electricity?", options: ["graphite", "diamond", "neither", "amorphous only"], correctIndex: 0, explanation: "Graphite has free electrons." },
        { prompt: "Carbon dioxide turns limewater…", options: ["milky", "blue", "red", "green"], correctIndex: 0, explanation: "Forms CaCO₃." },
        { prompt: "Carbon monoxide is dangerous because it is…", options: ["poisonous", "acidic", "explosive on sight", "radioactive"], correctIndex: 0, explanation: "Binds to haemoglobin." },
        { prompt: "Ammonia is made by the … process.", options: ["Haber", "Ostwald", "Contact", "Bayer"], correctIndex: 0, explanation: "N₂ + 3H₂ ⇌ 2NH₃." },
        { prompt: "The Haber process catalyst is…", options: ["iron", "platinum", "vanadium(V) oxide", "nickel"], correctIndex: 0, explanation: "Iron catalyst." },
        { prompt: "Nitric acid is made by the … process.", options: ["Ostwald", "Haber", "Contact", "Bayer"], correctIndex: 0, explanation: "Ostwald from ammonia." },
        { prompt: "Oxygen relights a…", options: ["glowing splint", "burning splint (extinguishes)", "candle only", "match"], correctIndex: 0, explanation: "Test for oxygen." },
        { prompt: "A metal oxide that reacts with acid is a … oxide.", options: ["basic", "acidic", "amphoteric", "neutral"], correctIndex: 0, explanation: "e.g. CaO." },
        { prompt: "Aluminium oxide is an … oxide.", options: ["amphoteric", "acidic", "basic", "neutral"], correctIndex: 0, explanation: "Reacts with acids and bases." },
        { prompt: "The contact process catalyst is…", options: ["vanadium(V) oxide", "iron", "platinum", "nickel"], correctIndex: 0, explanation: "V₂O₅." },
        { prompt: "Sulfuric acid is made by the … process.", options: ["contact", "Haber", "Ostwald", "Bayer"], correctIndex: 0, explanation: "Contact process." },
        { prompt: "Halogen reactivity … down the group.", options: ["decreases", "increases", "stays constant", "disappears"], correctIndex: 0, explanation: "Fluorine most reactive." },
        { prompt: "A chloride gives a … precipitate with silver nitrate.", options: ["white", "cream", "yellow", "black"], correctIndex: 0, explanation: "AgCl is white." },
        { prompt: "Chlorine is used in…", options: ["water treatment", "fertiliser", "welding", "batteries"], correctIndex: 0, explanation: "Kills microbes." },
        { prompt: "The noble gases are unreactive because they have…", options: ["full outer shells", "one electron", "no protons", "many neutrons"], correctIndex: 0, explanation: "Stable octet." },
        { prompt: "Argon is used to fill…", options: ["light bulbs", "balloons only", "fizzy drinks", "fertiliser bags"], correctIndex: 0, explanation: "Inert atmosphere." },
        { prompt: "Temporary hardness of water is removed by…", options: ["boiling", "adding acid", "cooling", "filtering"], correctIndex: 0, explanation: "Decomposes hydrogen carbonates." },
        { prompt: "Permanent hardness is caused by … of calcium and magnesium.", options: ["sulfates and chlorides", "hydrogen carbonates", "hydroxides", "oxides"], correctIndex: 0, explanation: "Not removed by boiling." },
        { prompt: "The two crystalline allotropes of sulfur are…", options: ["rhombic and monoclinic", "diamond and graphite", "red and white", "alpha and beta iron"], correctIndex: 0, explanation: "Sulfur allotropes." },
        { prompt: "Nitrogen is obtained industrially by … of liquefied air.", options: ["fractional distillation", "electrolysis", "combustion", "filtration"], correctIndex: 0, explanation: "Boils at −196 °C." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the process, catalyst and product for making (a) ammonia and (b) sulfuric acid.", answerKey: "(a) Haber process, iron catalyst, product ammonia (NH₃). (b) Contact process, vanadium(V) oxide catalyst, product sulfuric acid (H₂SO₄). Award marks for each process, catalyst and product.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which test distinguishes a bromide from a chloride?", options: ["Silver nitrate gives cream (Br) vs white (Cl)", "Both give white", "Bromide gives yellow", "Chloride gives cream"], correctIndex: 0, answerKey: "AgBr is cream; AgCl is white.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The reactivity of the halogens down Group 7:", options: ["Decreases", "Increases", "Stays the same", "Disappears"], correctIndex: 0, answerKey: "Reactivity decreases down the group.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Classify these oxides as acidic, basic, amphoteric or neutral: CO₂, CaO, Al₂O₃, CO.", answerKey: "CO₂ — acidic; CaO — basic; Al₂O₃ — amphoteric; CO — neutral. Award a mark for each correct classification (capped at marks).", marks: 3 },
        { type: "ESSAY", prompt: "Review the chemistry of carbon, nitrogen, sulfur and the halogens, including one important industrial process and one key laboratory test for each where relevant.", answerKey: "A full answer reviews: carbon (allotropes diamond/graphite; CO₂ acidic and turns limewater milky, CO toxic reducing agent), nitrogen (unreactive N₂ from air; ammonia by the Haber process with iron catalyst; nitric acid by the Ostwald process), sulfur (rhombic/monoclinic allotropes; sulfuric acid by the contact process with V₂O₅ catalyst, 2SO₂ + O₂ ⇌ 2SO₃) and the halogens (Group 7 diatomic non-metals, reactivity decreasing down the group; silver nitrate test giving white/cream/yellow precipitates for chloride/bromide/iodide; chlorine for water treatment and bleaching). Award marks for coverage of the elements, an industrial process (Haber/Ostwald/contact) and relevant tests (limewater, silver nitrate).", marks: 6 },
      ],
    },
  ],
};
