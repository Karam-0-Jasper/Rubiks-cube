import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 12,
// Semester One, Period II: Introduction to Organic Chemistry (cont'd). The
// CONTENTS list expands to one topic per top-level item: 1. Hydrocarbon
// derivatives (alkanols, alkanals, alkanones, ethers, halocarbons, alkanoic
// acids, esters, fats and oils); 2. Polymers (natural and synthetic; addition
// and condensation; thermoplastic and thermosetting); 3. Introductory
// Biochemistry (amino acids, proteins, carbohydrates).
export const chemistryG12P2: PeriodContent = {
  grade: 12,
  number: 2,
  title: "Hydrocarbon Derivatives, Polymers and Biochemistry",
  summary:
    "Period II of the MoE Grade 12 Chemistry syllabus. Learners study the hydrocarbon derivatives (alcohols, aldehydes, ketones, ethers, alkyl halides, carboxylic acids and esters, including fats and oils), the chemistry of polymers (monomers, addition and condensation polymerisation, thermoplastic and thermosetting plastics and resins, natural and synthetic polymers) and an introduction to biochemistry covering amino acids, proteins and carbohydrates.",
  topics: [
    {
      // source: LibreTexts (OpenStax) — 20.4 Aldehydes, Ketones, Carboxylic Acids, and Esters / Organic Functional Groups (https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)/20%3A_Organic_Chemistry/20.04%3A_Aldehydes_Ketones_Carboxylic_Acids_and_Esters)
      slug: "hydrocarbon-derivatives",
      title: "Hydrocarbon Derivatives",
      objective:
        "By the end of the topic, learners should be able to identify and describe the sources, classification, naming and properties of alcohols, aldehydes, ketones, ethers, alkyl halides, carboxylic acids and esters, including fats and oils. (MoE Grade 12 Period II, CONTENTS 1.)",
      estimatedMinutes: 170,
      notes: `## Hydrocarbon derivatives

- **Hydrocarbon derivatives** — hydrocarbons in which one or more hydrogens are replaced by a **functional group**.
- Each family has its own functional group, general formula and characteristic reactions.

| Family | Functional group | Suffix | Example |
| --- | --- | --- | --- |
| Alkanols (alcohols) | –OH | -ol | ethanol, C₂H₅OH |
| Alkanals (aldehydes) | –CHO | -al | ethanal, CH₃CHO |
| Alkanones (ketones) | C=O (mid-chain) | -one | propanone, CH₃COCH₃ |
| Ethers | –O– | ether | dimethyl ether |
| Halocarbons (alkyl halides) | –X (F, Cl, Br, I) | halo- | chloroethane |
| Alkanoic (carboxylic) acids | –COOH | -oic acid | ethanoic acid |
| Alkyl alkanoates (esters) | –COO– | -oate | ethyl ethanoate |

## Alkanols (alcohols)

- Contain –OH; classified as **primary, secondary or tertiary** by the carbon bearing the –OH.
- Sources: fermentation of sugars (ethanol); hydration of alkenes.
- Properties: higher boiling points than alkanes (hydrogen bonding); lower alcohols mix with water.
- **Oxidation:** primary alcohol → aldehyde → carboxylic acid; secondary alcohol → ketone (using KMnO₄ or K₂Cr₂O₇).

## Aldehydes and ketones

- Both contain the **carbonyl** group (C=O).
- **Aldehyde** — carbonyl at the **end** of the chain (–CHO); **ketone** — carbonyl in the **middle**.
- Aldehydes are **reducing agents**: they give a positive test with Fehling's/Benedict's (red precipitate) and Tollens' (silver mirror); ketones do not.

## Ethers and halocarbons

- **Ethers** (R–O–R) are fairly unreactive, good solvents.
- **Halocarbons (alkyl halides)** have a halogen atom; used as solvents and in synthesis; undergo substitution.

## Carboxylic acids

- Contain –COOH; **weak acids** (partly ionised in water).
- Made by **oxidation** of primary alcohols or aldehydes.
- React with bases, carbonates and reactive metals: e.g. CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂ (fizzing).

## Esters, fats and oils

- **Esters** form when a **carboxylic acid reacts with an alcohol** (esterification), releasing water: acid + alcohol ⇌ ester + water.
- Esters have pleasant, fruity smells; used as flavourings and solvents.
- **Fats and oils** are esters of glycerol with long-chain (fatty) acids; fats are solid, oils are liquid.
- **Saponification** — hydrolysis of a fat/oil with NaOH gives **soap** (sodium salt of a fatty acid) + glycerol.

## Common errors and misconceptions

- **Confusing aldehyde and ketone** — position of the carbonyl (end vs middle) decides the family.
- **Saying carboxylic acids are strong** — they are weak acids.
- **Forgetting water in esterification** — esterification is a condensation (releases water).`,
      workedExample: `**Task.** Ethanoic acid reacts with ethanol in the presence of concentrated sulfuric acid. (a) Name the reaction and the organic product. (b) Write the equation.

**Step 1 — Identify the reactants**
Ethanoic acid (CH₃COOH, a carboxylic acid) + ethanol (C₂H₅OH, an alcohol).

**Step 2 — Name the reaction**
Acid + alcohol → ester + water is **esterification** (a condensation reaction); conc. H₂SO₄ is the catalyst.

**Step 3 — Name the product**
The ester of ethanoic acid and ethanol is **ethyl ethanoate**.

**Step 4 — Write the equation**
CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O.

**Conclusion.** Esterification of ethanoic acid with ethanol gives the sweet-smelling ester ethyl ethanoate and water.`,
      quiz: [
        { prompt: "The functional group of an alcohol is…", options: ["–OH", "–COOH", "–CHO", "–O–"], correctIndex: 0, explanation: "Alcohols contain the hydroxyl group –OH." },
        { prompt: "The functional group of a carboxylic acid is…", options: ["–COOH", "–OH", "–CHO", "C=O only"], correctIndex: 0, explanation: "Carboxylic acids contain –COOH." },
        { prompt: "Aldehydes and ketones both contain the … group.", options: ["carbonyl (C=O)", "hydroxyl", "carboxyl", "amino"], correctIndex: 0, explanation: "Both have a carbonyl group." },
        { prompt: "In an aldehyde the carbonyl group is…", options: ["at the end of the chain", "in the middle", "on oxygen", "absent"], correctIndex: 0, explanation: "–CHO is terminal." },
        { prompt: "Oxidising a primary alcohol first gives an…", options: ["aldehyde", "ketone", "ester", "ether"], correctIndex: 0, explanation: "Primary alcohol → aldehyde → acid." },
        { prompt: "Oxidising a secondary alcohol gives a…", options: ["ketone", "aldehyde", "acid", "ester"], correctIndex: 0, explanation: "Secondary alcohols oxidise to ketones." },
        { prompt: "Carboxylic acids are…", options: ["weak acids", "strong acids", "strong bases", "neutral"], correctIndex: 0, explanation: "They are only partly ionised." },
        { prompt: "An ester forms from a carboxylic acid plus a(n)…", options: ["alcohol", "ketone", "alkane", "halogen"], correctIndex: 0, explanation: "Acid + alcohol → ester + water." },
        { prompt: "Esterification also produces…", options: ["water", "hydrogen", "oxygen", "carbon"], correctIndex: 0, explanation: "It is a condensation releasing water." },
        { prompt: "Esters are known for their…", options: ["fruity smells", "metallic taste", "explosiveness", "acidity"], correctIndex: 0, explanation: "Esters are used as flavourings." },
        { prompt: "Fats and oils are esters of glycerol and…", options: ["fatty acids", "alcohols", "amino acids", "sugars"], correctIndex: 0, explanation: "They are triesters of fatty acids." },
        { prompt: "Boiling a fat with NaOH to make soap is called…", options: ["saponification", "esterification", "hydrogenation", "cracking"], correctIndex: 0, explanation: "Saponification gives soap + glycerol." },
        { prompt: "Ethanoic acid + sodium hydrogen carbonate produces a gas that is…", options: ["carbon dioxide", "hydrogen", "oxygen", "chlorine"], correctIndex: 0, explanation: "Acid + carbonate → CO₂ (fizzing)." },
        { prompt: "A silver mirror (Tollens') test is positive for…", options: ["aldehydes", "ketones", "ethers", "alcohols"], correctIndex: 0, explanation: "Aldehydes reduce Tollens' reagent." },
        { prompt: "The functional group of an ether is…", options: ["–O– between carbons", "–OH", "–COOH", "–CHO"], correctIndex: 0, explanation: "Ethers have C–O–C." },
        { prompt: "An alkyl halide contains a…", options: ["halogen atom", "hydroxyl group", "carbonyl", "amino group"], correctIndex: 0, explanation: "Halocarbons carry F, Cl, Br or I." },
        { prompt: "Ethanol is commonly produced by…", options: ["fermentation of sugars", "burning coal", "electrolysis of water", "roasting ores"], correctIndex: 0, explanation: "Yeast ferments sugars to ethanol." },
        { prompt: "The suffix for a ketone is…", options: ["-one", "-al", "-ol", "-oic acid"], correctIndex: 0, explanation: "Ketones end in -one." },
        { prompt: "Solid fats differ from liquid oils mainly in being…", options: ["more saturated", "more acidic", "ionic", "aromatic"], correctIndex: 0, explanation: "Fats are more saturated than oils." },
        { prompt: "Alcohols have higher boiling points than alkanes because of…", options: ["hydrogen bonding", "ionic bonds", "metallic bonds", "no forces"], correctIndex: 0, explanation: "–OH allows hydrogen bonding." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the functional groups of alcohols, carboxylic acids and esters, giving one example of each.", answerKey: "Alcohols: –OH (e.g. ethanol, C₂H₅OH). Carboxylic acids: –COOH (e.g. ethanoic acid, CH₃COOH). Esters: –COO– (e.g. ethyl ethanoate). Award a mark for each group with a valid example.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which test distinguishes an aldehyde from a ketone?", options: ["Aldehyde gives a positive Tollens' (silver mirror) test", "Both give a silver mirror", "Ketone decolourises bromine water", "Neither reacts with Fehling's"], correctIndex: 0, answerKey: "Aldehydes are reducing agents (positive Tollens'/Fehling's); ketones are not.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Saponification of a fat with sodium hydroxide produces:", options: ["Soap and glycerol", "An ester and water", "An alcohol and a ketone", "A halocarbon"], correctIndex: 0, answerKey: "Saponification gives soap (sodium salt of a fatty acid) and glycerol.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Write an equation for the reaction of ethanoic acid with sodium hydrogen carbonate and state what would be observed.", answerKey: "CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂. Effervescence (fizzing) is seen as carbon dioxide gas is released, which turns limewater milky. Award marks for the equation and the observation.", marks: 2 },
        { type: "ESSAY", prompt: "Describe how a primary alcohol can be oxidised, and explain how esters and soaps are made from carboxylic acids and fats.", answerKey: "A full answer explains that a primary alcohol is oxidised (by acidified KMnO₄ or K₂Cr₂O₇) first to an aldehyde and then to a carboxylic acid. Esters are made by esterification: a carboxylic acid reacts with an alcohol (conc. H₂SO₄ catalyst) to give an ester and water (a condensation). Fats and oils are esters of glycerol with fatty acids; boiling them with sodium hydroxide (saponification/hydrolysis) yields soap (the sodium salt of the fatty acid) and glycerol. Award marks for the oxidation sequence, esterification and saponification.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 29.03 Types of Polymers (Roberts & Caserio) / 10.03 Addition Polymerization (Hill & McCreary) (https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Basic_Principles_of_Organic_Chemistry_(Roberts_and_Caserio)/29%3A_Polymers/29.03%3A_Types_of_Polymers)
      slug: "polymers",
      title: "Polymers",
      objective:
        "By the end of the topic, learners should be able to define polymerisation, distinguish addition and condensation polymers, describe natural and synthetic polymers, and compare thermoplastic and thermosetting plastics. (MoE Grade 12 Period II, CONTENTS 2.)",
      estimatedMinutes: 140,
      notes: `## Key terms

- **Polymer** — a large molecule built from many small repeating units bonded together.
- **Monomer** — the small molecule that repeats to form the polymer.
- **Dimer** — two monomer units joined. **Polymerisation** — the reaction that joins monomers into a polymer.
- **Resin** — a solid or semi-solid polymer material, natural or synthetic.

## Natural and synthetic polymers

- **Natural polymers:** rubber (from latex), starch, cellulose, proteins.
- **Synthetic (man-made) polymers:** polythene, PVC, nylon, polyester.

## Addition polymerisation

- Monomers with a **C=C double bond** add together; **all atoms** of the monomer become part of the polymer (no by-product).
- Examples: ethene → **polyethene (polythene)**; propene → polypropene; chloroethene → **PVC**; styrene → polystyrene.

nCH₂=CH₂ → –(CH₂–CH₂)ₙ–

## Condensation polymerisation

- Monomers with **two functional groups** (e.g. –OH, –COOH, –NH₂) join, splitting off a small molecule such as **water** (or ammonia).
- Examples: **nylon** (a polyamide) and **polyester** (e.g. Terylene).

## Thermoplastic and thermosetting polymers

| Type | Behaviour on heating | Structure | Examples |
| --- | --- | --- | --- |
| Thermoplastic | soften and can be remoulded repeatedly | linear/branched, weak forces between chains | polythene, PVC, nylon |
| Thermosetting | set hard permanently; do not remelt | cross-linked network | phenolic resins, epoxy, Bakelite |

## Uses and issues

- Polymers give cheap, light, durable materials (packaging, pipes, fibres, containers).
- Most synthetic polymers are **non-biodegradable**, causing waste and pollution.

## Common errors and misconceptions

- **Addition polymers release a by-product** — they do not; condensation polymers do (e.g. water).
- **All plastics remelt** — only thermoplastics do; thermosets are cross-linked and do not.
- **Monomer and polymer are the same** — the polymer is many monomers joined.`,
      workedExample: `**Task.** Ethene (CH₂=CH₂) polymerises to form polythene. (a) State the type of polymerisation. (b) Write the equation and name the repeating unit. (c) State whether polythene is thermoplastic or thermosetting.

**Step 1 — Type of polymerisation**
Ethene has a C=C double bond and all its atoms end up in the polymer with no by-product, so this is **addition polymerisation**.

**Step 2 — Equation and repeating unit**
The double bond opens and monomers join:
nCH₂=CH₂ → –(CH₂–CH₂)ₙ–.
The repeating unit is –CH₂–CH₂–.

**Step 3 — Classify the plastic**
Polythene softens on heating and can be remoulded, so it is a **thermoplastic**.

**Conclusion.** Ethene undergoes addition polymerisation to give thermoplastic polythene, repeating unit –CH₂–CH₂–, with no small molecule released.`,
      quiz: [
        { prompt: "A polymer is made from many repeating units called…", options: ["monomers", "isomers", "ions", "isotopes"], correctIndex: 0, explanation: "Monomers join to form polymers." },
        { prompt: "The reaction joining monomers into a polymer is…", options: ["polymerisation", "hydrolysis", "combustion", "distillation"], correctIndex: 0, explanation: "Polymerisation builds polymers." },
        { prompt: "In addition polymerisation the monomers contain a…", options: ["C=C double bond", "–OH group", "–COOH group", "metal ion"], correctIndex: 0, explanation: "The double bond opens to add units." },
        { prompt: "Addition polymerisation produces…", options: ["no by-product", "water", "carbon dioxide", "ammonia"], correctIndex: 0, explanation: "All atoms stay in the polymer." },
        { prompt: "Ethene polymerises to form…", options: ["polythene", "nylon", "polyester", "starch"], correctIndex: 0, explanation: "Ethene → polyethene (polythene)." },
        { prompt: "Condensation polymerisation splits off a small molecule such as…", options: ["water", "oxygen", "hydrogen", "carbon"], correctIndex: 0, explanation: "Often water is released." },
        { prompt: "Nylon is an example of a … polymer.", options: ["condensation", "addition", "natural rubber", "thermosetting only"], correctIndex: 0, explanation: "Nylon is a condensation polyamide." },
        { prompt: "A natural polymer is…", options: ["rubber", "PVC", "nylon", "polystyrene"], correctIndex: 0, explanation: "Rubber (latex) is natural." },
        { prompt: "Thermoplastics on heating…", options: ["soften and can be remoulded", "set hard permanently", "explode", "turn to acid"], correctIndex: 0, explanation: "Thermoplastics remelt." },
        { prompt: "Thermosetting polymers on heating…", options: ["set permanently and do not remelt", "always remelt", "dissolve in water", "become gases"], correctIndex: 0, explanation: "Cross-linked, they do not remelt." },
        { prompt: "PVC is made from the monomer…", options: ["chloroethene", "ethene", "styrene", "propene"], correctIndex: 0, explanation: "Chloroethene (vinyl chloride) → PVC." },
        { prompt: "A cross-linked network structure is typical of…", options: ["thermosetting polymers", "thermoplastics", "monomers", "gases"], correctIndex: 0, explanation: "Cross-links make thermosets rigid." },
        { prompt: "Two monomer units joined form a…", options: ["dimer", "polymer", "resin", "salt"], correctIndex: 0, explanation: "Two units = dimer." },
        { prompt: "Which is a synthetic polymer?", options: ["polystyrene", "starch", "cellulose", "natural rubber"], correctIndex: 0, explanation: "Polystyrene is man-made." },
        { prompt: "A problem with most synthetic polymers is that they are…", options: ["non-biodegradable", "edible", "magnetic", "radioactive"], correctIndex: 0, explanation: "They persist as waste." },
        { prompt: "The repeating unit of polythene is…", options: ["–CH₂–CH₂–", "–CHOH–", "–COO–", "–NH–"], correctIndex: 0, explanation: "Ethene units give –CH₂–CH₂–." },
        { prompt: "Polyester is formed by … polymerisation.", options: ["condensation", "addition", "cracking", "substitution"], correctIndex: 0, explanation: "Polyester is a condensation polymer." },
        { prompt: "Monomers in condensation polymers must have at least … functional groups.", options: ["two", "one", "zero", "four only"], correctIndex: 0, explanation: "Bifunctional monomers link chains." },
        { prompt: "Bakelite is an example of a … plastic.", options: ["thermosetting", "thermoplastic", "natural", "biodegradable"], correctIndex: 0, explanation: "Bakelite is a cross-linked thermoset." },
        { prompt: "Rubber is obtained from…", options: ["latex", "crude oil only", "limestone", "sand"], correctIndex: 0, explanation: "Natural rubber comes from latex." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a monomer and a polymer, and name one natural and one synthetic polymer.", answerKey: "A monomer is the small repeating unit molecule; a polymer is the large molecule made of many monomers joined together. Natural polymer: e.g. rubber, starch or cellulose. Synthetic polymer: e.g. polythene, PVC or nylon. Award marks for both definitions and both examples.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which statement about addition polymerisation is correct?", options: ["All atoms of the monomer become part of the polymer with no by-product", "Water is always released", "It needs monomers with two –COOH groups", "It produces only thermosetting polymers"], correctIndex: 0, answerKey: "In addition polymerisation the C=C opens and no small molecule is lost.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "A polymer that can be softened and remoulded many times is:", options: ["thermoplastic", "thermosetting", "a monomer", "a resin network"], correctIndex: 0, answerKey: "Thermoplastics soften repeatedly on heating.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between addition and condensation polymerisation, giving one example of each.", answerKey: "Addition polymerisation joins unsaturated monomers (C=C) with no by-product, e.g. ethene → polythene. Condensation polymerisation joins bifunctional monomers with the loss of a small molecule such as water, e.g. nylon or polyester. Award marks for both mechanisms and both examples.", marks: 2 },
        { type: "ESSAY", prompt: "Compare thermoplastic and thermosetting polymers in terms of structure, behaviour on heating and uses, and discuss one environmental issue caused by synthetic polymers.", answerKey: "A strong answer contrasts thermoplastics (linear or branched chains held by weak forces; soften and can be remoulded repeatedly on heating; e.g. polythene, PVC, nylon) with thermosetting polymers (cross-linked networks; set permanently and do not remelt; e.g. Bakelite, epoxy, phenolic resins). Uses reflect this: thermoplastics for packaging, pipes and fibres; thermosets for rigid, heat-resistant items. The environmental issue: most synthetic polymers are non-biodegradable, accumulating as waste/pollution (littering, harm to wildlife, difficulty of disposal). Award marks for structure, heating behaviour, uses and the environmental discussion.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 18: Amino Acids and Proteins (Fundamentals of GOB Chemistry) / classification of carbohydrates and proteins (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Fundamentals_of_General_Organic_and_Biological_Chemistry_(LibreTexts)/18%3A_Amino_Acids_and_Proteins)
      slug: "introductory-biochemistry",
      title: "Introductory Biochemistry",
      objective:
        "By the end of the topic, learners should be able to describe amino acids, the synthesis and hydrolysis of proteins, and the classification and properties of carbohydrates. (MoE Grade 12 Period II, CONTENTS 3.)",
      estimatedMinutes: 140,
      notes: `## Amino acids

- **Amino acid** — a molecule with **two** functional groups: an **amino group (–NH₂)** and a **carboxyl group (–COOH)** — so it is **di-functional**.
- There are about **20 common amino acids**, differing in their side chain (R group).
- Being both acid and base, amino acids are **amphoteric** and can form internal ions (zwitterions).

## Proteins

- **Protein** — a large polymer (polypeptide) of many amino acids joined by **peptide bonds** (–CO–NH–).
- **Synthesis:** the –COOH of one amino acid joins the –NH₂ of the next, releasing water (condensation) — so proteins are natural **condensation polymers**.
- **Hydrolysis:** adding water (acid, base or enzyme) breaks proteins back down into their amino acids.
- Functions: enzymes, structure (fibrous, e.g. keratin), transport (globular, e.g. haemoglobin), defence.

## Carbohydrates

- **Carbohydrate** — compounds of carbon, hydrogen and oxygen, general formula about **Cₓ(H₂O)ᵧ** (sugars, starches).

| Class | Example | Note |
| --- | --- | --- |
| Monosaccharides | glucose, fructose (C₆H₁₂O₆) | single sugar unit; reducing sugars |
| Disaccharides | sucrose, maltose (C₁₂H₂₂O₁₁) | two units joined; hydrolyse to monosaccharides |
| Polysaccharides | starch, cellulose, glycogen | many units; not sweet |

- **Reducing sugars** (glucose, fructose, maltose) give a positive **Benedict's/Fehling's** test (brick-red precipitate); sucrose does not.
- **Starch** gives a **blue-black** colour with iodine solution — the test for starch.
- Carbohydrates are made in plants by **photosynthesis** and are the body's main energy source.

## Common errors and misconceptions

- **Amino acids have one functional group** — they have two (–NH₂ and –COOH), hence "di-functional".
- **All sugars are reducing sugars** — sucrose is non-reducing.
- **Proteins are addition polymers** — they are condensation polymers (peptide bonds, water lost).`,
      workedExample: `**Task.** Two glycine molecules (H₂N–CH₂–COOH) join to form a dipeptide. (a) Name the bond and reaction type. (b) State what small molecule is lost. (c) State how the dipeptide could be broken back to amino acids.

**Step 1 — How they join**
The –COOH of one glycine reacts with the –NH₂ of the other, forming a **peptide bond** (–CO–NH–). This is a **condensation** reaction.

**Step 2 — Small molecule lost**
A molecule of **water** is released as the peptide bond forms.

**Step 3 — Breaking it down**
Adding water in the presence of acid, base or an enzyme (**hydrolysis**) splits the peptide bond, giving back the two amino acids.

**Conclusion.** Amino acids link by peptide bonds in a condensation reaction (losing water) to build proteins; hydrolysis reverses this, regenerating the amino acids.`,
      quiz: [
        { prompt: "An amino acid contains an –NH₂ group and a…", options: ["–COOH group", "–OH group", "C=C bond", "halogen"], correctIndex: 0, explanation: "Amino (–NH₂) and carboxyl (–COOH)." },
        { prompt: "Because it has two functional groups, an amino acid is described as…", options: ["di-functional", "monofunctional", "aromatic", "saturated"], correctIndex: 0, explanation: "It is di-functional." },
        { prompt: "The number of common amino acids is about…", options: ["20", "2", "100", "6"], correctIndex: 0, explanation: "About 20 common amino acids." },
        { prompt: "Amino acids join together by … bonds.", options: ["peptide", "ionic", "hydrogen only", "metallic"], correctIndex: 0, explanation: "Peptide bonds (–CO–NH–)." },
        { prompt: "Protein synthesis from amino acids releases…", options: ["water", "oxygen", "hydrogen", "carbon dioxide"], correctIndex: 0, explanation: "It is a condensation reaction." },
        { prompt: "Breaking a protein into amino acids by adding water is…", options: ["hydrolysis", "condensation", "oxidation", "polymerisation"], correctIndex: 0, explanation: "Hydrolysis reverses the linkage." },
        { prompt: "Proteins are classed as … polymers.", options: ["condensation", "addition", "ionic", "synthetic"], correctIndex: 0, explanation: "Peptide bonds form with loss of water." },
        { prompt: "Carbohydrates contain carbon, hydrogen and…", options: ["oxygen", "nitrogen", "sulfur", "chlorine"], correctIndex: 0, explanation: "General formula Cₓ(H₂O)ᵧ." },
        { prompt: "Glucose and fructose are examples of…", options: ["monosaccharides", "disaccharides", "polysaccharides", "proteins"], correctIndex: 0, explanation: "Single sugar units." },
        { prompt: "Sucrose is a…", options: ["disaccharide", "monosaccharide", "polysaccharide", "protein"], correctIndex: 0, explanation: "Two sugar units joined." },
        { prompt: "Starch and cellulose are…", options: ["polysaccharides", "monosaccharides", "disaccharides", "amino acids"], correctIndex: 0, explanation: "Many sugar units joined." },
        { prompt: "The test for starch uses…", options: ["iodine solution (blue-black)", "limewater", "bromine water", "litmus"], correctIndex: 0, explanation: "Iodine gives blue-black with starch." },
        { prompt: "A positive Benedict's/Fehling's test gives a … precipitate.", options: ["brick-red", "white", "black", "green"], correctIndex: 0, explanation: "Reducing sugars give a red precipitate." },
        { prompt: "Which sugar is NON-reducing?", options: ["sucrose", "glucose", "fructose", "maltose"], correctIndex: 0, explanation: "Sucrose does not reduce Benedict's." },
        { prompt: "Carbohydrates are made in plants by…", options: ["photosynthesis", "respiration", "fermentation", "combustion"], correctIndex: 0, explanation: "Plants build sugars via photosynthesis." },
        { prompt: "A fibrous structural protein is…", options: ["keratin", "glucose", "starch", "sucrose"], correctIndex: 0, explanation: "Keratin is fibrous/structural." },
        { prompt: "Haemoglobin, which transports oxygen, is a … protein.", options: ["globular", "fibrous", "membrane only", "non-protein"], correctIndex: 0, explanation: "Globular proteins are compact and soluble." },
        { prompt: "The peptide bond has the structure…", options: ["–CO–NH–", "–O–", "–COO–", "–OH"], correctIndex: 0, explanation: "Amide/peptide link –CO–NH–." },
        { prompt: "Amino acids are amphoteric because they can act as…", options: ["acid and base", "acid only", "base only", "neither"], correctIndex: 0, explanation: "–COOH acidic, –NH₂ basic." },
        { prompt: "Carbohydrates are the body's main source of…", options: ["energy", "genetic information", "structural bone", "waterproofing"], correctIndex: 0, explanation: "Carbohydrates are the main energy source." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe an amino acid and explain why it is called di-functional.", answerKey: "An amino acid contains two functional groups — an amino group (–NH₂) and a carboxyl group (–COOH) — attached to the same carbon, along with a variable side chain (R). It is di-functional because it has these two reactive groups; the –NH₂ is basic and the –COOH acidic, making it amphoteric. Award marks for naming both groups and explaining di-functional.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Proteins are formed from amino acids by:", options: ["Condensation forming peptide bonds and releasing water", "Addition polymerisation with no by-product", "Ionic bonding", "Simple mixing"], correctIndex: 0, answerKey: "Peptide bonds form by condensation, releasing water.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Which gives a blue-black colour with iodine solution?", options: ["Starch", "Glucose", "A protein", "An amino acid"], correctIndex: 0, answerKey: "Starch gives a blue-black colour with iodine.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Classify carbohydrates into three groups, giving one example of each.", answerKey: "Monosaccharides (single sugar units), e.g. glucose or fructose; disaccharides (two units joined), e.g. sucrose or maltose; polysaccharides (many units), e.g. starch, cellulose or glycogen. Award a mark for each class with a correct example.", marks: 3 },
        { type: "ESSAY", prompt: "Explain how proteins are built from amino acids and broken down again, and describe how you would test a food sample for reducing sugars and for starch.", answerKey: "A full answer explains that amino acids join by peptide bonds (–CO–NH–) formed in a condensation reaction (loss of water) to make polypeptides/proteins; hydrolysis (with acid, base or enzyme, adding water) breaks these bonds to regenerate the amino acids. For testing: add Benedict's/Fehling's solution and warm — a brick-red precipitate shows a reducing sugar (glucose, fructose, maltose; sucrose is negative). For starch, add iodine solution — a blue-black colour is a positive result. Award marks for protein synthesis, hydrolysis, and the two correctly described tests.", marks: 6 },
      ],
    },
  ],
};
