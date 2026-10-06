import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 12,
// Semester Two, Period IV. Two syllabus topics, each CONTENTS item = one lesson
// topic. TOPIC 1 (Chemistry of Selected Metals, cont'd): 1. Metallurgy
// (extraction of Al, Fe, Au, Sn; alloys and their uses); 2. Cement and its uses.
// TOPIC 2 (Chemistry of Selected Non-metals): 3. Carbon and its compounds
// (allotropes; oxides CO and CO2); 4. Coal; 5. Coke; 6. Nitrogen and its
// compounds (ammonia, nitric acid); 7. Oxygen and its oxides; 8. Sulfur and
// sulfuric acid; 9. The halogens; 10. Chlorine; 11. The noble gases; 12. Water
// and solutions (hardness of water).
export const chemistryG12P4: PeriodContent = {
  grade: 12,
  number: 4,
  title: "Chemistry of Selected Metals and Non-metals",
  summary:
    "Period IV of the MoE Grade 12 Chemistry syllabus. Learners study the metallurgy of aluminium, iron, gold and tin, alloys and cement, then the chemistry of selected non-metals — carbon and its allotropes and oxides, coal and coke, nitrogen with ammonia and nitric acid, oxygen and its oxides, sulfur and sulfuric acid (contact process), the halogens and chlorine, the noble gases, and the hardness of water.",
  topics: [
    {
      // source: LibreTexts — 23.2 Principles of Extractive Metallurgy / 4.1.6.3 Extraction of Iron / Aluminium Metallurgy (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_General_Chemistry_(Petrucci_et_al.)/23%3A_The_Transition_Elements/23.2%3A_Principles_of_Extractive_Metallurgy)
      slug: "metallurgy-and-alloys",
      title: "Metallurgy and Alloys",
      objective:
        "By the end of the topic, learners should be able to describe the extraction of aluminium, iron, gold and tin from their ores and the composition and uses of common alloys. (MoE Grade 12 Period IV, Topic 1, CONTENTS 1.)",
      estimatedMinutes: 150,
      notes: `## Metallurgy

- **Metallurgy** — the science of extracting metals from their **ores** and preparing them for use.
- **Ore** — a rock containing enough of a metal (or its compound) to extract profitably.
- The method depends on the metal's position in the **reactivity series**.

| Metal reactivity | Extraction method |
| --- | --- |
| Very reactive (K, Na, Ca, Al) | electrolysis of molten compound |
| Moderately reactive (Zn, Fe, Sn) | reduction with carbon (smelting) |
| Unreactive (Au, Ag, Pt) | found native; physical separation |

## Extraction of iron (blast furnace)

- Raw materials: **iron ore (haematite, Fe₂O₃)**, **coke (C)**, **limestone (CaCO₃)** and hot air.
- Coke burns to give CO, which **reduces** the ore: Fe₂O₃ + 3CO → 2Fe + 3CO₂.
- Limestone removes sandy impurities as **slag**: CaCO₃ → CaO + CO₂; CaO + SiO₂ → CaSiO₃ (slag).
- Main product: **iron**; by-products: slag (for road building), CO₂.

## Extraction of aluminium (electrolysis)

- Aluminium is too reactive for carbon reduction, so it is extracted by **electrolysis**.
- Ore **bauxite** is purified to **aluminium oxide (Al₂O₃)**, dissolved in molten **cryolite** to lower the melting point.
- At the cathode: Al³⁺ + 3e⁻ → Al; at the anode: oxygen is released (burning the carbon anodes to CO₂).

## Gold and tin

- **Gold** is very unreactive, often found **native** (as the metal); separated by physical methods (panning) or chemical leaching.
- **Tin** is extracted by **reducing** its ore cassiterite (SnO₂) with carbon: SnO₂ + 2C → Sn + 2CO.

## Alloys

- **Alloy** — a mixture of a metal with other elements to improve properties (harder, stronger, corrosion-resistant).

| Alloy | Composition | Uses |
| --- | --- | --- |
| Brass | copper + zinc | fittings, instruments |
| Bronze | copper + tin | statues, bearings, bells |
| Steel | iron + carbon | construction, tools |
| Duralumin | aluminium + copper (+ Mg, Mn) | aircraft parts (light, strong) |

## Common errors and misconceptions

- **All metals are extracted the same way** — reactive metals need electrolysis; less reactive ones use carbon reduction.
- **Coke only fuels the furnace** — it also forms CO, the reducing agent.
- **Alloys are compounds** — they are mixtures.`,
      workedExample: `**Task.** Explain why iron is extracted by carbon reduction but aluminium by electrolysis, and write the equation for the reduction of iron ore.

**Step 1 — Position in the reactivity series**
Aluminium is **more reactive** than carbon, so carbon cannot reduce Al₂O₃; iron is **less reactive** than carbon, so carbon (as CO) can reduce iron ore.

**Step 2 — Method for each**
- **Iron:** reduced with carbon monoxide in the blast furnace.
- **Aluminium:** obtained by electrolysis of molten Al₂O₃ in cryolite.

**Step 3 — Equation for iron**
Fe₂O₃ + 3CO → 2Fe + 3CO₂.

**Conclusion.** The extraction method follows reactivity: carbon reduction works for iron (below carbon) but not for aluminium (above carbon), which needs electrolysis.`,
      quiz: [
        { prompt: "Metallurgy is the science of extracting … from their ores.", options: ["metals", "gases", "acids", "salts"], correctIndex: 0, explanation: "It deals with metal extraction." },
        { prompt: "A rock with enough metal to extract profitably is an…", options: ["ore", "alloy", "acid", "isotope"], correctIndex: 0, explanation: "Ore is a workable source." },
        { prompt: "Very reactive metals like aluminium are extracted by…", options: ["electrolysis", "carbon reduction", "panning", "heating in air"], correctIndex: 0, explanation: "Too reactive for carbon reduction." },
        { prompt: "Iron is extracted in a…", options: ["blast furnace", "electrolytic cell only", "fractionating column", "still"], correctIndex: 0, explanation: "Blast furnace smelting." },
        { prompt: "In the blast furnace, iron ore is reduced by…", options: ["carbon monoxide", "oxygen", "water", "nitrogen"], correctIndex: 0, explanation: "Fe₂O₃ + 3CO → 2Fe + 3CO₂." },
        { prompt: "Limestone in the blast furnace removes impurities as…", options: ["slag", "coke", "iron", "gas only"], correctIndex: 0, explanation: "CaO + SiO₂ → slag." },
        { prompt: "The ore of aluminium is…", options: ["bauxite", "haematite", "cassiterite", "limestone"], correctIndex: 0, explanation: "Bauxite is impure Al₂O₃." },
        { prompt: "Cryolite is used to … the melting point of aluminium oxide.", options: ["lower", "raise", "double", "remove"], correctIndex: 0, explanation: "It dissolves Al₂O₃ at lower temperature." },
        { prompt: "At the cathode in aluminium extraction: Al³⁺ + 3e⁻ →…", options: ["Al", "Al₂O₃", "AlCl₃", "O₂"], correctIndex: 0, explanation: "Aluminium ions are reduced to metal." },
        { prompt: "Gold is often found as…", options: ["native metal", "an oxide only", "a chloride", "a carbonate"], correctIndex: 0, explanation: "Very unreactive, found uncombined." },
        { prompt: "Tin is extracted from cassiterite (SnO₂) by reduction with…", options: ["carbon", "electrolysis only", "water", "chlorine"], correctIndex: 0, explanation: "SnO₂ + 2C → Sn + 2CO." },
        { prompt: "An alloy is a … of a metal with other elements.", options: ["mixture", "compound", "pure element", "gas"], correctIndex: 0, explanation: "Alloys are mixtures." },
        { prompt: "Brass is made of copper and…", options: ["zinc", "tin", "carbon", "magnesium"], correctIndex: 0, explanation: "Brass = Cu + Zn." },
        { prompt: "Bronze is made of copper and…", options: ["tin", "zinc", "iron", "lead"], correctIndex: 0, explanation: "Bronze = Cu + Sn." },
        { prompt: "Steel is mainly iron mixed with…", options: ["carbon", "zinc", "tin", "gold"], correctIndex: 0, explanation: "Steel = iron + carbon." },
        { prompt: "Duralumin, used in aircraft, is based on…", options: ["aluminium", "iron", "copper only", "tin"], correctIndex: 0, explanation: "Al with copper (light, strong)." },
        { prompt: "Alloys are made to improve properties such as…", options: ["strength and corrosion resistance", "colour only", "smell", "radioactivity"], correctIndex: 0, explanation: "Harder, stronger, more resistant." },
        { prompt: "The by-product slag from iron making is used for…", options: ["road building", "food", "medicine", "fuel"], correctIndex: 0, explanation: "Slag is used in construction." },
        { prompt: "Carbon cannot reduce aluminium oxide because aluminium is…", options: ["more reactive than carbon", "a gas", "unreactive", "below tin"], correctIndex: 0, explanation: "Al is above C in reactivity." },
        { prompt: "The main product of the blast furnace is…", options: ["iron", "aluminium", "slag", "coke"], correctIndex: 0, explanation: "Iron is the target metal." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the extraction method for aluminium and for iron, and explain why they differ.", answerKey: "Aluminium is extracted by electrolysis of molten aluminium oxide (in cryolite); iron is extracted by reduction with carbon/carbon monoxide in a blast furnace. They differ because aluminium is more reactive than carbon (so carbon cannot reduce it), whereas iron is less reactive than carbon and can be reduced by it. Award marks for both methods and the reactivity explanation.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "In the blast furnace, the substance that reduces iron ore is:", options: ["Carbon monoxide", "Oxygen", "Limestone", "Nitrogen"], correctIndex: 0, answerKey: "Fe₂O₃ + 3CO → 2Fe + 3CO₂.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Bronze is an alloy of:", options: ["Copper and tin", "Copper and zinc", "Iron and carbon", "Aluminium and copper"], correctIndex: 0, answerKey: "Bronze = copper + tin.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Name two alloys, give their composition and one use of each.", answerKey: "Any two, e.g. brass (copper + zinc; fittings/instruments), bronze (copper + tin; statues/bearings/bells), steel (iron + carbon; construction/tools), duralumin (aluminium + copper; aircraft). Award a mark for each alloy correctly described with composition and use.", marks: 2 },
        { type: "ESSAY", prompt: "Describe the extraction of iron in the blast furnace, naming the raw materials, the reactions and the products.", answerKey: "A full answer names the raw materials (iron ore/haematite Fe₂O₃, coke, limestone and hot air) and explains: coke burns in the blast of hot air (C + O₂ → CO₂; CO₂ + C → 2CO); carbon monoxide reduces the ore (Fe₂O₃ + 3CO → 2Fe + 3CO₂); limestone decomposes (CaCO₃ → CaO + CO₂) and the calcium oxide removes sandy (SiO₂) impurities as slag (CaO + SiO₂ → CaSiO₃). Molten iron collects at the bottom; slag (used for road building) floats on top; CO₂ is a by-product. Award marks for raw materials, reduction, slag formation and products.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 2.6 Industrially Important Chemicals (cement/Portland) (https://chem.libretexts.org/Bookshelves/General_Chemistry/Book%3A_General_Chemistry%3A_Principles_Patterns_and_Applications_(Averill)/02%3A_Molecules_Ions_and_Chemical_Formulas/2.06%3A_Industrially_Important_Chemicals)
      slug: "cement-and-its-uses",
      title: "Cement and its Uses",
      objective:
        "By the end of the topic, learners should be able to describe the manufacture and uses of cement and its environmental impact. (MoE Grade 12 Period IV, Topic 1, CONTENTS 2.)",
      estimatedMinutes: 90,
      notes: `## Raw materials for cement

- **Cement** is made mainly from **limestone (CaCO₃)** and **clay** (which supplies silica, alumina and iron oxide), plus a little gypsum.

## Manufacture of cement (Portland cement)

1. Limestone and clay are **crushed, mixed and ground**.
2. The mixture is heated strongly in a **rotary kiln** (about 1450 °C); limestone decomposes (CaCO₃ → CaO + CO₂) and reacts with the clay to form hard lumps called **clinker**.
3. Clinker is cooled and **ground** with a little **gypsum** (to control setting time) to a fine powder — **cement**.

## Setting of cement

- When water is added, cement undergoes **hydration** reactions and sets into a hard solid.
- **Concrete** = cement + sand + gravel (aggregate) + water. **Mortar** = cement + sand + water.

## Uses of cement

- Building and construction: making concrete, mortar, blocks, foundations, roads and bridges.

## Environmental impact

- Cement making releases large amounts of **carbon dioxide** (from decomposing limestone and burning fuel), contributing to global warming.
- **Dust and particulate** pollution from kilns; quarrying damages the landscape; high energy use.

## Common errors and misconceptions

- **Cement and concrete are the same** — concrete is cement plus aggregate and water.
- **Gypsum is the main ingredient** — the main raw materials are limestone and clay; gypsum only controls setting.
- **Cement making is clean** — it releases CO₂ and dust.`,
      workedExample: `**Task.** Outline the main steps in making cement and explain one environmental concern.

**Step 1 — Raw materials**
Limestone (CaCO₃) and clay (silica, alumina, iron oxide).

**Step 2 — Heating in the kiln**
The mixture is crushed, ground and heated in a rotary kiln (~1450 °C). Limestone decomposes (CaCO₃ → CaO + CO₂) and reacts with clay to form **clinker**.

**Step 3 — Grinding**
Clinker is cooled and ground with a little **gypsum** to give the fine cement powder.

**Step 4 — Environmental concern**
Making cement releases large amounts of **CO₂** (from limestone decomposition and fuel burning), adding to the greenhouse effect; kilns also produce dust.

**Conclusion.** Cement is made by heating limestone and clay to clinker and grinding it with gypsum; the process is energy-intensive and a major source of CO₂ and dust.`,
      quiz: [
        { prompt: "The main raw materials for cement are limestone and…", options: ["clay", "salt", "sulfur", "sand only"], correctIndex: 0, explanation: "Limestone + clay." },
        { prompt: "Cement is heated in a…", options: ["rotary kiln", "blast furnace", "still", "fractionating column"], correctIndex: 0, explanation: "A rotary kiln at high temperature." },
        { prompt: "The hard lumps formed in the kiln are called…", options: ["clinker", "slag", "coke", "gypsum"], correctIndex: 0, explanation: "Clinker forms before grinding." },
        { prompt: "A little … is ground with clinker to control setting time.", options: ["gypsum", "salt", "sulfur", "sand"], correctIndex: 0, explanation: "Gypsum regulates setting." },
        { prompt: "When water is added, cement … into a hard solid.", options: ["sets", "evaporates", "melts", "sublimes"], correctIndex: 0, explanation: "Hydration reactions set it." },
        { prompt: "Concrete is cement mixed with water and…", options: ["sand and gravel", "salt", "oil", "acid"], correctIndex: 0, explanation: "Aggregate + water + cement = concrete." },
        { prompt: "Mortar is cement, water and…", options: ["sand", "gravel only", "clay", "gypsum"], correctIndex: 0, explanation: "Cement + sand + water = mortar." },
        { prompt: "Cement is used mainly in…", options: ["building and construction", "food", "medicine", "electronics"], correctIndex: 0, explanation: "Construction material." },
        { prompt: "A major gas released in cement making is…", options: ["carbon dioxide", "hydrogen", "oxygen", "chlorine"], correctIndex: 0, explanation: "CaCO₃ → CaO + CO₂ plus fuel burning." },
        { prompt: "In the kiln, limestone decomposes to give calcium oxide and…", options: ["carbon dioxide", "water", "hydrogen", "sulfur dioxide"], correctIndex: 0, explanation: "Thermal decomposition of CaCO₃." },
        { prompt: "An environmental problem of cement factories is … pollution.", options: ["dust/particulate", "noise only", "no", "radioactive"], correctIndex: 0, explanation: "Kilns release dust." },
        { prompt: "Cement making uses … amounts of energy.", options: ["large", "no", "tiny", "negative"], correctIndex: 0, explanation: "Very energy-intensive." },
        { prompt: "The finely ground final product is called…", options: ["cement", "clinker", "clay", "gravel"], correctIndex: 0, explanation: "Ground clinker + gypsum = cement." },
        { prompt: "Which statement is TRUE?", options: ["concrete contains cement plus aggregate", "cement and concrete are identical", "cement contains no limestone", "cement sets without water"], correctIndex: 0, explanation: "Concrete = cement + aggregate + water." },
        { prompt: "Quarrying limestone for cement can damage the…", options: ["landscape", "ozone layer only", "stratosphere", "deep ocean"], correctIndex: 0, explanation: "Quarrying scars the land." },
        { prompt: "Clay supplies silica, alumina and…", options: ["iron oxide", "sodium", "chlorine", "sulfur"], correctIndex: 0, explanation: "Clay provides these oxides." },
        { prompt: "The kiln temperature for cement is about…", options: ["1450 °C", "100 °C", "25 °C", "500 °C"], correctIndex: 0, explanation: "Around 1450 °C." },
        { prompt: "Cement contributes to global warming because it releases…", options: ["CO₂", "oxygen", "water vapour only", "nitrogen"], correctIndex: 0, explanation: "CO₂ is a greenhouse gas." },
        { prompt: "Gypsum in cement mainly controls the…", options: ["setting time", "colour", "smell", "weight"], correctIndex: 0, explanation: "It regulates how fast cement sets." },
        { prompt: "Foundations, blocks and bridges are made using…", options: ["cement/concrete", "glass only", "wood only", "plastic only"], correctIndex: 0, explanation: "Cement/concrete for construction." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the two main raw materials used to make cement.", answerKey: "Limestone (calcium carbonate) and clay (supplying silica, alumina and iron oxide); a little gypsum is added later. Award marks for limestone and clay.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "The product formed in the cement kiln, before final grinding, is called:", options: ["Clinker", "Slag", "Coke", "Mortar"], correctIndex: 0, answerKey: "Clinker forms in the kiln and is ground to cement.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Concrete is made from cement, water and:", options: ["Sand and gravel", "Salt", "Oil", "Gypsum only"], correctIndex: 0, answerKey: "Concrete = cement + aggregate (sand/gravel) + water.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "State two environmental impacts of cement manufacture.", answerKey: "Any two of: release of large amounts of carbon dioxide (from limestone decomposition and fuel burning), contributing to global warming; dust/particulate pollution from kilns; damage to landscape from quarrying limestone; high energy use. Award a mark each up to two.", marks: 2 },
        { type: "ESSAY", prompt: "Describe how cement is manufactured and discuss its uses and environmental impact.", answerKey: "A full answer explains that limestone and clay are crushed, mixed and ground, then heated in a rotary kiln (~1450 °C) where limestone decomposes (CaCO₃ → CaO + CO₂) and reacts with the clay to form clinker; the cooled clinker is ground with a little gypsum (to control setting) to make cement. Cement is used in construction — making concrete (with sand and gravel), mortar, blocks, foundations, roads and bridges. Environmental impact: large CO₂ emissions (greenhouse effect), dust pollution, landscape damage from quarrying and high energy use. Award marks for the manufacturing steps, uses and environmental impacts.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 22.9 Carbon (Chemistry: The Central Science) / Allotropes of Carbon (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/22%3A_Chemistry_of_the_Nonmetals/22.09%3A_Carbon)
      slug: "carbon-and-its-compounds",
      title: "Carbon and its Compounds",
      objective:
        "By the end of the topic, learners should be able to describe the allotropes of carbon and the sources, preparation, properties and uses of the oxides of carbon (CO and CO₂). (MoE Grade 12 Period IV, Topic 2, CONTENTS 1.)",
      estimatedMinutes: 130,
      notes: `## Allotropes of carbon

- **Allotropes** — different physical forms of the **same element** in the same state.
- Carbon's allotropes: **diamond, graphite** and **amorphous carbon** (e.g. charcoal, soot).

| Form | Structure | Properties |
| --- | --- | --- |
| Diamond | each C bonded to 4 others, rigid 3-D network | very hard, transparent, non-conductor; used in cutting tools, jewellery |
| Graphite | each C bonded to 3 others, layers slide | soft, slippery, conducts electricity; used in pencils, electrodes, lubricant |
| Amorphous (charcoal, soot) | no regular structure | absorbent/fuel; used as a fuel and adsorbent |

## Oxides of carbon

## Carbon dioxide (CO₂)

- **Sources:** respiration, combustion of fuels, and decay.
- **Preparation:** acid on a carbonate — CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂.
- **Properties:** colourless, odourless gas; denser than air; does not burn or support burning; turns limewater milky; acidic (forms carbonic acid in water).
- **Uses:** fire extinguishers, fizzy drinks, refrigeration (dry ice), and in photosynthesis.

## Carbon monoxide (CO)

- **Source/preparation:** **incomplete combustion** of carbon or fuels (limited air): 2C + O₂ → 2CO.
- **Properties:** colourless, odourless, **very poisonous** (binds to haemoglobin); it burns and is a good **reducing agent** (used in the blast furnace).
- **Uses:** as a fuel and reducing agent in metal extraction.

## Common errors and misconceptions

- **CO and CO₂ are the same** — CO is toxic and flammable; CO₂ is not.
- **Diamond conducts electricity** — graphite conducts; diamond does not.
- **Allotropes are different elements** — they are the same element in different forms.`,
      workedExample: `**Task.** Diamond and graphite are both carbon, yet diamond is very hard and graphite is soft and conducts electricity. Explain the difference in terms of structure.

**Step 1 — Diamond's structure**
Each carbon is bonded to **four** other carbons in a rigid three-dimensional network. All electrons are held in bonds, so diamond is **very hard** and does **not conduct** electricity.

**Step 2 — Graphite's structure**
Each carbon is bonded to **three** others, forming flat **layers** that are only weakly held together, so the layers **slide** (soft, slippery). Each carbon has a **free (delocalised) electron**, so graphite **conducts electricity**.

**Conclusion.** Diamond and graphite are allotropes of carbon; their different bonding (3-D network vs sliding layers with free electrons) explains why diamond is hard and non-conducting while graphite is soft and conducting.`,
      quiz: [
        { prompt: "Different physical forms of the same element are called…", options: ["allotropes", "isotopes", "isomers", "ions"], correctIndex: 0, explanation: "Allotropes = same element, different form." },
        { prompt: "Which is an allotrope of carbon?", options: ["diamond", "sodium", "quartz", "water"], correctIndex: 0, explanation: "Diamond is a carbon allotrope." },
        { prompt: "In diamond, each carbon is bonded to … others.", options: ["four", "three", "two", "one"], correctIndex: 0, explanation: "Rigid 3-D network." },
        { prompt: "In graphite, each carbon is bonded to … others.", options: ["three", "four", "two", "five"], correctIndex: 0, explanation: "Layers of three-bonded carbons." },
        { prompt: "Which allotrope conducts electricity?", options: ["graphite", "diamond", "neither", "charcoal only"], correctIndex: 0, explanation: "Graphite has free electrons." },
        { prompt: "Diamond is used for … because it is very hard.", options: ["cutting tools", "wiring", "fuel", "batteries"], correctIndex: 0, explanation: "Hardness suits cutting/drilling." },
        { prompt: "Graphite is used as a … because its layers slide.", options: ["lubricant", "cutting tool", "insulator", "fuel gas"], correctIndex: 0, explanation: "Slippery layers lubricate." },
        { prompt: "Carbon dioxide can be prepared by adding acid to a…", options: ["carbonate", "metal only", "chloride", "sulfate"], correctIndex: 0, explanation: "Carbonate + acid → CO₂." },
        { prompt: "Carbon dioxide turns limewater…", options: ["milky", "blue", "red", "green"], correctIndex: 0, explanation: "Forms white CaCO₃." },
        { prompt: "Carbon dioxide is … than air.", options: ["denser", "lighter", "the same weight", "explosive"], correctIndex: 0, explanation: "CO₂ is denser than air." },
        { prompt: "Carbon dioxide is used in…", options: ["fire extinguishers", "welding fuel", "car batteries", "fertiliser"], correctIndex: 0, explanation: "It smothers flames." },
        { prompt: "Carbon monoxide forms by … combustion of carbon.", options: ["incomplete", "complete", "no", "slow"], correctIndex: 0, explanation: "Limited air gives CO." },
        { prompt: "Carbon monoxide is dangerous because it is…", options: ["very poisonous", "acidic", "explosive on sight", "radioactive"], correctIndex: 0, explanation: "Binds to haemoglobin." },
        { prompt: "In the blast furnace, carbon monoxide acts as a…", options: ["reducing agent", "oxidising agent", "catalyst", "fuel only"], correctIndex: 0, explanation: "CO reduces iron ore." },
        { prompt: "Which oxide of carbon burns as a fuel?", options: ["carbon monoxide", "carbon dioxide", "both burn", "neither burns"], correctIndex: 0, explanation: "CO is flammable; CO₂ is not." },
        { prompt: "Amorphous carbon includes…", options: ["charcoal and soot", "diamond only", "graphite only", "quartz"], correctIndex: 0, explanation: "Charcoal/soot are amorphous." },
        { prompt: "Carbon dioxide dissolves in water to form … acid.", options: ["carbonic", "sulfuric", "nitric", "hydrochloric"], correctIndex: 0, explanation: "CO₂ + H₂O → H₂CO₃." },
        { prompt: "Solid carbon dioxide (dry ice) is used for…", options: ["refrigeration", "wiring", "fertiliser", "welding"], correctIndex: 0, explanation: "Dry ice cools." },
        { prompt: "Which does NOT support burning?", options: ["carbon dioxide", "oxygen", "carbon monoxide (itself burns)", "air"], correctIndex: 0, explanation: "CO₂ extinguishes flames." },
        { prompt: "Diamond does not conduct electricity because…", options: ["all its electrons are held in bonds", "it has free electrons", "it is a metal", "it is a gas"], correctIndex: 0, explanation: "No free electrons in diamond." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define allotropy and name two crystalline allotropes of carbon.", answerKey: "Allotropy is the existence of an element in two or more different physical forms in the same physical state. Two crystalline allotropes of carbon: diamond and graphite. Award marks for the definition and the two allotropes.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Which property matches graphite?", options: ["Soft and conducts electricity", "Very hard and non-conducting", "A colourless gas", "A liquid fuel"], correctIndex: 0, answerKey: "Graphite is soft (layers slide) and conducts (free electrons).", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Carbon monoxide is dangerous mainly because it:", options: ["Is very poisonous", "Turns limewater milky", "Is denser than air", "Puts out fires"], correctIndex: 0, answerKey: "CO binds to haemoglobin and is toxic.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Write an equation to prepare carbon dioxide in the laboratory and give two of its uses.", answerKey: "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂ (marble/limestone with dilute acid). Uses (any two): fire extinguishers, fizzy drinks, refrigeration (dry ice), photosynthesis. Award marks for the equation and two uses.", marks: 3 },
        { type: "ESSAY", prompt: "Compare carbon monoxide and carbon dioxide in terms of preparation, properties and uses, and explain why they behave so differently.", answerKey: "A full answer contrasts CO₂ (from complete combustion, respiration and acid on carbonates; colourless, denser than air, does not burn or support burning, turns limewater milky, acidic; used in extinguishers, drinks, dry ice) with CO (from incomplete combustion in limited air; colourless, odourless, very poisonous, flammable and a good reducing agent used in the blast furnace). The key difference is the amount of oxygen: complete oxidation gives CO₂ (fully oxidised, stable, non-toxic to breathe in normal air but a greenhouse gas), while incomplete oxidation gives CO, which can still be oxidised (burns) and binds to haemoglobin (toxic). Award marks for preparation, properties, uses and the oxidation-state explanation.", marks: 6 },
      ],
    },
    {
      // source: eng/chem LibreTexts — Coal: destructive distillation and gasification (https://chem.libretexts.org/Bookshelves/Environmental_Chemistry/Green_Chemistry_and_the_Ten_Commandments_of_Sustainability_(Manahan))
      slug: "coal",
      title: "Coal",
      objective:
        "By the end of the topic, learners should be able to describe the types of coal, the destructive distillation of coal and the uses of its products. (MoE Grade 12 Period IV, Topic 2, CONTENTS 2.)",
      estimatedMinutes: 90,
      notes: `## What is coal?

- **Coal** is a black/brown combustible sedimentary rock formed from **plant remains** over millions of years; it is mainly **carbon**.
- It is a **fossil fuel** and a non-renewable energy source.

## Types of coal (increasing carbon content)

| Type | Carbon content | Note |
| --- | --- | --- |
| Peat | lowest | soft, wet early stage |
| Lignite (brown coal) | low | soft, high moisture |
| Bituminous coal | medium-high | common household/industrial coal |
| Anthracite | highest | hard, clean-burning, most carbon |

## Destructive distillation of coal

- **Destructive distillation** — heating coal **strongly in the absence of air** so it decomposes into several products.
- Products and uses:

| Product | State | Use |
| --- | --- | --- |
| Coke | solid | fuel; reducing agent in metal extraction |
| Coal gas | gas | fuel gas |
| Coal tar | liquid | source of dyes, drugs, and chemicals |
| Ammoniacal liquor | liquid | source of ammonia/ammonium salts (fertiliser) |

## Common errors and misconceptions

- **Coal burns during destructive distillation** — it is heated in the **absence of air**, so it decomposes rather than burns.
- **Coal is a single substance** — it comes in types differing in carbon content.
- **Coal is renewable** — it is a fossil fuel, non-renewable.`,
      workedExample: `**Task.** Coal is heated strongly in a closed retort with no air. (a) Name the process. (b) List the four products and one use each.

**Step 1 — Name the process**
Heating coal in the **absence of air** so it decomposes is **destructive distillation** of coal.

**Step 2 — List the products and uses**
1. **Coke** (solid) — fuel and reducing agent in the blast furnace.
2. **Coal gas** — a fuel gas.
3. **Coal tar** (liquid) — source of dyes, drugs and other chemicals.
4. **Ammoniacal liquor** — source of ammonia/ammonium salts for fertilisers.

**Conclusion.** Destructive distillation of coal gives coke, coal gas, coal tar and ammoniacal liquor, each with valuable uses.`,
      quiz: [
        { prompt: "Coal is formed from … over millions of years.", options: ["plant remains", "animal shells", "sand", "salt"], correctIndex: 0, explanation: "Ancient plant matter forms coal." },
        { prompt: "Coal is mainly composed of…", options: ["carbon", "sulfur", "silicon", "iron"], correctIndex: 0, explanation: "Carbon is the main element." },
        { prompt: "Coal is a … fuel.", options: ["fossil", "renewable", "nuclear", "solar"], correctIndex: 0, explanation: "Non-renewable fossil fuel." },
        { prompt: "Which type of coal has the highest carbon content?", options: ["anthracite", "peat", "lignite", "brown coal"], correctIndex: 0, explanation: "Anthracite is the hardest, highest-carbon coal." },
        { prompt: "The softest, lowest-carbon early stage is…", options: ["peat", "anthracite", "bituminous", "coke"], correctIndex: 0, explanation: "Peat is the first stage." },
        { prompt: "Destructive distillation means heating coal in the … of air.", options: ["absence", "presence", "excess", "flow"], correctIndex: 0, explanation: "No air, so it decomposes." },
        { prompt: "The solid product of destructive distillation is…", options: ["coke", "coal tar", "coal gas", "ammonia"], correctIndex: 0, explanation: "Coke is the solid residue." },
        { prompt: "Coal tar is a source of…", options: ["dyes and drugs", "iron", "salt", "oxygen"], correctIndex: 0, explanation: "Many chemicals come from coal tar." },
        { prompt: "The gaseous product used as fuel is…", options: ["coal gas", "coke", "coal tar", "ammoniacal liquor"], correctIndex: 0, explanation: "Coal gas is a fuel gas." },
        { prompt: "Ammoniacal liquor is a source of…", options: ["ammonia/ammonium salts", "coke", "diamonds", "steel"], correctIndex: 0, explanation: "Used for fertilisers." },
        { prompt: "Coke from coal is used as a … in metal extraction.", options: ["reducing agent", "oxidising agent", "catalyst only", "solvent"], correctIndex: 0, explanation: "Coke reduces ores." },
        { prompt: "Bituminous coal is used mainly for…", options: ["household and industrial fuel", "jewellery", "electronics", "food"], correctIndex: 0, explanation: "Common everyday coal." },
        { prompt: "Coal is described as … energy source.", options: ["non-renewable", "renewable", "unlimited", "clean"], correctIndex: 0, explanation: "It cannot be quickly replaced." },
        { prompt: "During destructive distillation, coal…", options: ["decomposes into several products", "burns to ash", "melts to a metal", "evaporates fully"], correctIndex: 0, explanation: "It breaks into solid, liquid and gas products." },
        { prompt: "Which product of coal is liquid and yields dyes?", options: ["coal tar", "coke", "coal gas", "carbon dioxide"], correctIndex: 0, explanation: "Coal tar is liquid." },
        { prompt: "Which order shows increasing carbon content?", options: ["peat, lignite, bituminous, anthracite", "anthracite, peat, coke, lignite", "coke, tar, gas, peat", "lignite, peat, anthracite, bituminous"], correctIndex: 0, explanation: "Carbon rises from peat to anthracite." },
        { prompt: "Coal gas was historically used for…", options: ["lighting and heating", "car tyres", "fertiliser", "welding metals only"], correctIndex: 0, explanation: "A fuel/lighting gas." },
        { prompt: "Anthracite burns … than lignite.", options: ["more cleanly", "more smokily", "not at all", "explosively only"], correctIndex: 0, explanation: "High carbon, cleaner burning." },
        { prompt: "The retort used in destructive distillation must exclude…", options: ["air", "heat", "coal", "the products"], correctIndex: 0, explanation: "No air so it does not simply burn." },
        { prompt: "Coke is mostly…", options: ["carbon", "sulfur", "ammonia", "tar"], correctIndex: 0, explanation: "Coke is nearly pure carbon." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name four types of coal in order of increasing carbon content.", answerKey: "Peat, lignite (brown coal), bituminous coal, anthracite — in order of increasing carbon content. Award marks for the correct set and order.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Destructive distillation of coal means:", options: ["Heating coal strongly in the absence of air", "Burning coal in excess air", "Dissolving coal in acid", "Freezing coal"], correctIndex: 0, answerKey: "It is heated without air so it decomposes.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Which product of destructive distillation is a source of dyes and drugs?", options: ["Coal tar", "Coke", "Coal gas", "Ammoniacal liquor"], correctIndex: 0, answerKey: "Coal tar yields many chemicals.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "List the four products of the destructive distillation of coal and give a use of each.", answerKey: "Coke (fuel/reducing agent), coal gas (fuel gas), coal tar (dyes, drugs, chemicals), ammoniacal liquor (ammonia/ammonium salts for fertiliser). Award a mark for each product-and-use pair (up to 4).", marks: 4 },
        { type: "ESSAY", prompt: "Describe what coal is, its main types, and how destructive distillation converts it into useful products.", answerKey: "A full answer explains coal as a black/brown fossil fuel formed from plant remains over millions of years, mainly carbon, and non-renewable; its types in order of carbon content are peat, lignite (brown coal), bituminous coal and anthracite. Destructive distillation heats coal strongly in the absence of air so it decomposes rather than burns, giving coke (solid fuel and reducing agent), coal gas (fuel), coal tar (source of dyes, drugs and chemicals) and ammoniacal liquor (source of ammonia/fertiliser). Award marks for the description of coal, the types and the products of destructive distillation.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — Coke, coal gasification, water gas and synthesis gas (Manahan, Green Chemistry) (https://chem.libretexts.org/Bookshelves/Environmental_Chemistry/Green_Chemistry_and_the_Ten_Commandments_of_Sustainability_(Manahan))
      slug: "coke",
      title: "Coke",
      objective:
        "By the end of the topic, learners should be able to describe coke, its gasification and uses, and the manufacture and uses of synthesis gas and water gas. (MoE Grade 12 Period IV, Topic 2, CONTENTS 3.)",
      estimatedMinutes: 90,
      notes: `## What is coke?

- **Coke** — the grey, hard, porous **solid** left when coal is heated in the absence of air (destructive distillation); it is almost pure **carbon**.
- Uses: **fuel** (burns cleanly, little smoke), a **reducing agent** in the **blast furnace**, and to make electrodes.

## Gasification of coke

- **Gasification** — reacting hot coke with steam or limited air to make useful **fuel gases**.

## Water gas

- **Water gas** — made by passing **steam over red-hot coke**:

**C + H₂O → CO + H₂**

- Water gas is a mixture of **carbon monoxide and hydrogen**; it burns as a fuel.

## Producer gas

- **Producer gas** — made by passing **limited air over red-hot coke**:

**2C + O₂ (+ N₂) → 2CO (+ N₂)**

- A mixture of carbon monoxide and nitrogen; a cheaper (less rich) fuel gas.

## Synthesis gas (syngas)

- **Synthesis gas** — a mixture of **CO and H₂** used as a feedstock to make methanol, ammonia and other chemicals, and as a fuel.

## Common errors and misconceptions

- **Coke and coal are the same** — coke is the carbon residue from heating coal.
- **Water gas contains only hydrogen** — it is CO + H₂.
- **Gasification burns the coke to ash** — it converts coke into fuel gases.`,
      workedExample: `**Task.** Steam is passed over red-hot coke. (a) Name the gas produced and write the equation. (b) State one use. (c) How does producer gas differ?

**Step 1 — Water gas**
Passing steam over red-hot coke gives **water gas**:
C + H₂O → CO + H₂ (a mixture of carbon monoxide and hydrogen).

**Step 2 — A use**
Water gas burns as a **fuel gas** and is a source of hydrogen and synthesis gas.

**Step 3 — Producer gas**
**Producer gas** is made by passing **limited air** (not steam) over red-hot coke: 2C + O₂ → 2CO; it is a mixture of CO and nitrogen, a cheaper fuel.

**Conclusion.** Steam on coke gives water gas (CO + H₂); limited air on coke gives producer gas (CO + N₂); both are gaseous fuels from gasifying coke.`,
      quiz: [
        { prompt: "Coke is the solid left when coal is heated in the … of air.", options: ["absence", "presence", "excess", "flow"], correctIndex: 0, explanation: "Destructive distillation leaves coke." },
        { prompt: "Coke is almost pure…", options: ["carbon", "sulfur", "iron", "silicon"], correctIndex: 0, explanation: "Coke is mostly carbon." },
        { prompt: "Coke is used in the blast furnace as a…", options: ["reducing agent", "oxidising agent", "catalyst only", "coolant"], correctIndex: 0, explanation: "It reduces iron ore." },
        { prompt: "Gasification turns coke into useful…", options: ["fuel gases", "metals", "liquids only", "salts"], correctIndex: 0, explanation: "Reacting coke gives fuel gases." },
        { prompt: "Water gas is made by passing … over red-hot coke.", options: ["steam", "cold water", "oil", "acid"], correctIndex: 0, explanation: "C + H₂O → CO + H₂." },
        { prompt: "Water gas is a mixture of carbon monoxide and…", options: ["hydrogen", "oxygen", "nitrogen", "chlorine"], correctIndex: 0, explanation: "CO + H₂." },
        { prompt: "The equation for water gas is…", options: ["C + H₂O → CO + H₂", "C + O₂ → CO₂", "2C + O₂ → 2CO", "CO + H₂O → CO₂ + H₂"], correctIndex: 0, explanation: "Steam over coke." },
        { prompt: "Producer gas is made by passing … over red-hot coke.", options: ["limited air", "steam only", "chlorine", "ammonia"], correctIndex: 0, explanation: "2C + O₂ → 2CO." },
        { prompt: "Producer gas is a mixture of carbon monoxide and…", options: ["nitrogen", "hydrogen", "oxygen", "carbon dioxide"], correctIndex: 0, explanation: "CO diluted by the nitrogen of air." },
        { prompt: "Synthesis gas (syngas) is a mixture of CO and…", options: ["hydrogen", "nitrogen", "oxygen", "argon"], correctIndex: 0, explanation: "Syngas = CO + H₂." },
        { prompt: "Coke burns with … smoke.", options: ["little", "much", "green", "no heat and no"], correctIndex: 0, explanation: "It is a clean-burning fuel." },
        { prompt: "Syngas is used as a feedstock to make…", options: ["methanol and ammonia", "gold", "glass", "salt"], correctIndex: 0, explanation: "CO + H₂ makes many chemicals." },
        { prompt: "Coke is also used to make…", options: ["electrodes", "petrol", "soap", "cement only"], correctIndex: 0, explanation: "Carbon electrodes." },
        { prompt: "Which gas mixture provides hydrogen fuel from coke?", options: ["water gas", "producer gas", "carbon dioxide", "air"], correctIndex: 0, explanation: "Water gas contains H₂." },
        { prompt: "Producer gas is cheaper because the coke reacts with…", options: ["air (with nitrogen)", "pure oxygen", "steam only", "acid"], correctIndex: 0, explanation: "Air dilutes it with N₂." },
        { prompt: "Coke is made from…", options: ["coal", "limestone", "salt", "sand"], correctIndex: 0, explanation: "Coal heated without air." },
        { prompt: "Which is TRUE of water gas?", options: ["it burns as a fuel", "it puts out fires", "it is a solid", "it is unreactive"], correctIndex: 0, explanation: "CO + H₂ are both flammable." },
        { prompt: "Gasification of coke needs the coke to be…", options: ["red-hot", "cold", "wet only", "dissolved"], correctIndex: 0, explanation: "High temperature is required." },
        { prompt: "The main use of coke as a fuel is because it produces…", options: ["a lot of heat with little smoke", "much smoke", "no heat", "toxic dust only"], correctIndex: 0, explanation: "Clean, high-heat fuel." },
        { prompt: "Both water gas and producer gas contain…", options: ["carbon monoxide", "chlorine", "oxygen", "sulfur dioxide"], correctIndex: 0, explanation: "CO is common to both." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "What is coke and how is it made?", answerKey: "Coke is the hard, porous, grey solid that is almost pure carbon, left when coal is heated strongly in the absence of air (destructive distillation). Award marks for identifying coke as carbon and for the method of production.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Water gas is produced when:", options: ["Steam is passed over red-hot coke", "Coke is burned in excess air", "Coke is dissolved in acid", "Coke is cooled"], correctIndex: 0, answerKey: "C + H₂O → CO + H₂.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Synthesis gas is a mixture of:", options: ["Carbon monoxide and hydrogen", "Carbon dioxide and nitrogen", "Oxygen and hydrogen", "Nitrogen and argon"], correctIndex: 0, answerKey: "Syngas = CO + H₂.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Write equations for the production of (a) water gas and (b) producer gas from coke.", answerKey: "(a) Water gas: C + H₂O → CO + H₂ (steam over red-hot coke). (b) Producer gas: 2C + O₂ → 2CO (limited air over red-hot coke, giving CO mixed with nitrogen). Award a mark for each equation and a mark for correct conditions.", marks: 3 },
        { type: "ESSAY", prompt: "Explain the gasification of coke, describing water gas, producer gas and synthesis gas, and give the uses of coke and these gases.", answerKey: "A full answer explains gasification as reacting red-hot coke with steam or limited air to make fuel gases. Water gas (C + H₂O → CO + H₂) is a mixture of carbon monoxide and hydrogen and burns as a fuel/provides hydrogen; producer gas (2C + O₂ → 2CO, with nitrogen from air) is a cheaper fuel gas of CO and N₂; synthesis gas (CO + H₂) is a feedstock for methanol, ammonia and other chemicals. Coke itself is used as a clean fuel, a reducing agent in the blast furnace and to make electrodes. Award marks for the three gases with equations/composition and the uses.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — Haber process and Ostwald process (nitrogen, ammonia, nitric acid) (https://chem.libretexts.org/Bookshelves/General_Chemistry/ChemPRIME_(Moore_et_al.)/12%3A_Chemistry_of_the_Representative_Elements/12.06%3A_Group_VA_Elements)
      slug: "nitrogen-and-its-compounds",
      title: "Nitrogen and its Compounds",
      objective:
        "By the end of the topic, learners should be able to describe nitrogen, its industrial preparation and uses, and the preparation, properties and uses of ammonia and nitric acid. (MoE Grade 12 Period IV, Topic 2, CONTENTS 4.)",
      estimatedMinutes: 140,
      notes: `## Nitrogen

- **Nitrogen (N₂)** makes up about **78%** of the air; a colourless, odourless, **unreactive** gas (strong N≡N triple bond).
- **Industrial preparation:** **fractional distillation of liquefied air** (nitrogen boils off at −196 °C).
- **Uses:** making ammonia; an inert atmosphere (food packaging, electronics); liquid nitrogen as a coolant.

## Ammonia (NH₃)

- Made industrially by the **Haber process**: nitrogen + hydrogen over an **iron catalyst**, high pressure (~200 atm) and ~450 °C:

**N₂ + 3H₂ ⇌ 2NH₃** (reversible, exothermic).

- **Properties:** colourless gas, sharp/pungent smell; very soluble in water forming an **alkaline** solution; turns damp red litmus blue.
- **Uses:** fertilisers (ammonium salts, urea), nitric acid manufacture, cleaning agents.

## Nitric acid (HNO₃)

- Made from ammonia by the **Ostwald process**:
1. Ammonia is **oxidised** over a hot **platinum** catalyst: 4NH₃ + 5O₂ → 4NO + 6H₂O.
2. NO is oxidised: 2NO + O₂ → 2NO₂.
3. NO₂ dissolves in water: 3NO₂ + H₂O → 2HNO₃ + NO.

- **Properties:** strong acid; a powerful **oxidising agent**.
- **Uses:** fertilisers (ammonium nitrate), explosives (TNT), dyes and nitration of organic compounds.

## Common errors and misconceptions

- **Nitrogen is reactive** — N₂ is very unreactive due to the strong triple bond.
- **The Haber process makes nitric acid** — it makes ammonia; the Ostwald process makes nitric acid.
- **Ammonia is acidic** — it is a base (alkaline in water).`,
      workedExample: `**Task.** State the raw materials and conditions of the Haber process, write the equation, and explain why the conditions are chosen.

**Step 1 — Raw materials**
**Nitrogen** (from the air) and **hydrogen** (often from natural gas).

**Step 2 — Equation and conditions**
N₂ + 3H₂ ⇌ 2NH₃; conditions: **iron catalyst**, about **450 °C** and high pressure (~**200 atm**).

**Step 3 — Why these conditions**
- High **pressure** shifts the equilibrium toward the fewer gas molecules (more ammonia).
- A **catalyst** speeds up the reaction (does not change yield).
- A moderate **temperature** is a compromise: lower temperature favours more ammonia (exothermic) but is too slow, so ~450 °C balances yield and rate.

**Conclusion.** The Haber process combines nitrogen and hydrogen over an iron catalyst at high pressure and ~450 °C to make ammonia, the conditions chosen to balance a good yield with a fast enough rate.`,
      quiz: [
        { prompt: "Nitrogen makes up about … of the air.", options: ["78%", "21%", "50%", "1%"], correctIndex: 0, explanation: "N₂ is ~78% of air." },
        { prompt: "Nitrogen gas is … because of its strong triple bond.", options: ["unreactive", "explosive", "acidic", "flammable"], correctIndex: 0, explanation: "N≡N makes N₂ inert." },
        { prompt: "Nitrogen is obtained industrially by … of liquefied air.", options: ["fractional distillation", "electrolysis", "combustion", "filtration"], correctIndex: 0, explanation: "Boils off at −196 °C." },
        { prompt: "Ammonia is made industrially by the … process.", options: ["Haber", "Ostwald", "Contact", "Bayer"], correctIndex: 0, explanation: "Haber makes ammonia." },
        { prompt: "The Haber process combines nitrogen with…", options: ["hydrogen", "oxygen", "carbon", "chlorine"], correctIndex: 0, explanation: "N₂ + 3H₂ ⇌ 2NH₃." },
        { prompt: "The catalyst in the Haber process is…", options: ["iron", "platinum", "nickel", "vanadium(V) oxide"], correctIndex: 0, explanation: "Iron catalyst." },
        { prompt: "Ammonia dissolves in water to give a solution that is…", options: ["alkaline", "acidic", "neutral", "explosive"], correctIndex: 0, explanation: "NH₃ is a base." },
        { prompt: "Ammonia turns damp red litmus…", options: ["blue", "red", "colourless", "black"], correctIndex: 0, explanation: "Alkaline gas turns litmus blue." },
        { prompt: "A major use of ammonia is making…", options: ["fertilisers", "petrol", "glass", "steel"], correctIndex: 0, explanation: "Ammonium salts/urea fertilisers." },
        { prompt: "Nitric acid is made from ammonia by the … process.", options: ["Ostwald", "Haber", "Contact", "Bayer"], correctIndex: 0, explanation: "Ostwald makes HNO₃." },
        { prompt: "The catalyst in the Ostwald process is…", options: ["platinum", "iron", "nickel", "copper"], correctIndex: 0, explanation: "Hot platinum gauze." },
        { prompt: "First step of the Ostwald process: 4NH₃ + 5O₂ →…", options: ["4NO + 6H₂O", "2N₂ + 6H₂O", "4NO₂ + 6H₂", "N₂ + O₂"], correctIndex: 0, explanation: "Catalytic oxidation of ammonia." },
        { prompt: "Nitric acid is a powerful…", options: ["oxidising agent", "reducing agent", "base", "fuel"], correctIndex: 0, explanation: "HNO₃ oxidises strongly." },
        { prompt: "Nitric acid is used to make ammonium nitrate, a…", options: ["fertiliser", "fuel gas", "metal", "dye only"], correctIndex: 0, explanation: "NH₄NO₃ is a fertiliser." },
        { prompt: "High pressure in the Haber process favours…", options: ["more ammonia", "less ammonia", "no change", "more nitrogen"], correctIndex: 0, explanation: "Fewer gas molecules on the product side." },
        { prompt: "A use of nitric acid is in making…", options: ["explosives", "soap", "cement", "glass"], correctIndex: 0, explanation: "TNT and other explosives." },
        { prompt: "Liquid nitrogen is used as a…", options: ["coolant", "fuel", "fertiliser", "acid"], correctIndex: 0, explanation: "Very cold, inert coolant." },
        { prompt: "Ammonia gas has a … smell.", options: ["sharp/pungent", "sweet", "no", "smoky"], correctIndex: 0, explanation: "Pungent, choking smell." },
        { prompt: "The Haber reaction is reversible and…", options: ["exothermic", "endothermic", "explosive", "neutral"], correctIndex: 0, explanation: "Releases heat." },
        { prompt: "Why use a catalyst in the Haber process?", options: ["to speed up the reaction", "to increase the yield", "to lower the pressure needed", "to change the products"], correctIndex: 0, explanation: "Catalysts speed the rate." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "How is nitrogen obtained industrially, and give two of its uses.", answerKey: "Nitrogen is obtained by the fractional distillation of liquefied air (it boils off at about −196 °C). Uses (any two): making ammonia (Haber process); providing an inert atmosphere (food packaging, electronics); liquid nitrogen as a coolant. Award marks for the method and two uses.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The Haber process makes ammonia using the catalyst:", options: ["Iron", "Platinum", "Vanadium(V) oxide", "Nickel"], correctIndex: 0, answerKey: "Iron is the Haber catalyst.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Nitric acid is manufactured from ammonia by the:", options: ["Ostwald process", "Haber process", "Contact process", "Bayer process"], correctIndex: 0, answerKey: "The Ostwald process converts ammonia to nitric acid.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Write the equation for the Haber process and state the conditions used.", answerKey: "N₂ + 3H₂ ⇌ 2NH₃; conditions: iron catalyst, high pressure (about 200 atm) and a temperature of about 450 °C. Award marks for the equation and the conditions.", marks: 3 },
        { type: "ESSAY", prompt: "Describe how ammonia and nitric acid are manufactured industrially, giving the reactions and conditions, and state the main uses of each.", answerKey: "A full answer explains: Ammonia by the Haber process — N₂ (from air) + 3H₂ (from natural gas) ⇌ 2NH₃ over an iron catalyst at ~450 °C and high pressure (~200 atm); the conditions balance yield and rate. Uses of ammonia: fertilisers (ammonium salts, urea), making nitric acid, cleaning agents. Nitric acid by the Ostwald process — ammonia is catalytically oxidised over platinum (4NH₃ + 5O₂ → 4NO + 6H₂O), NO is oxidised to NO₂ (2NO + O₂ → 2NO₂), and NO₂ dissolves in water (3NO₂ + H₂O → 2HNO₃ + NO). Uses of nitric acid: fertilisers (ammonium nitrate), explosives, dyes and nitration. Award marks for both processes with equations/conditions and their uses.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 18: Representative Metals, Metalloids, and Nonmetals; oxygen and classification of oxides (https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_2e_(OpenStax)/18%3A_Representative_Metals_Metalloids_and_Nonmetals)
      slug: "oxygen-and-its-oxides",
      title: "Oxygen and its Oxides",
      objective:
        "By the end of the topic, learners should be able to describe the laboratory and industrial preparation, properties and uses of oxygen, and classify oxides as acidic, basic, amphoteric or neutral. (MoE Grade 12 Period IV, Topic 2, CONTENTS 5.)",
      estimatedMinutes: 120,
      notes: `## Oxygen

- **Oxygen (O₂)** makes up about **21%** of the air; colourless, odourless gas; slightly soluble in water; supports combustion and respiration.
- **Laboratory preparation:** decompose hydrogen peroxide with a **manganese(IV) oxide** catalyst: 2H₂O₂ → 2H₂O + O₂; or heat potassium chlorate (with MnO₂).
- **Industrial preparation:** **fractional distillation of liquefied air** (oxygen boils at −183 °C).
- **Test for oxygen:** it **relights a glowing splint**.
- **Uses:** breathing (hospitals, diving), welding (oxy-acetylene), steel making, rocket fuel.

## Oxides

- **Oxide** — a compound of an element with oxygen. Oxides are classified by their acid–base behaviour:

| Type of oxide | Behaviour | Examples |
| --- | --- | --- |
| Acidic | non-metal oxide; forms acid with water / reacts with bases | CO₂, SO₂, SO₃, NO₂ |
| Basic | metal oxide; reacts with acids to form salt + water | Na₂O, CaO, MgO, CuO |
| Amphoteric | reacts with both acids and bases | Al₂O₃, ZnO, PbO |
| Neutral | neither acidic nor basic | CO, H₂O, N₂O, NO |

## Common errors and misconceptions

- **Oxygen burns** — oxygen does not burn; it **supports** burning.
- **All non-metal oxides are acidic** — CO, NO and N₂O are neutral.
- **All oxides are acidic or basic** — some are amphoteric or neutral.`,
      workedExample: `**Task.** (a) Describe how you would prepare and test for oxygen in the laboratory. (b) Classify CaO, CO₂ and Al₂O₃ as basic, acidic or amphoteric.

**Step 1 — Preparation**
Add hydrogen peroxide to manganese(IV) oxide (a catalyst); oxygen is released:
2H₂O₂ → 2H₂O + O₂.

**Step 2 — Test**
Oxygen **relights a glowing splint** — the standard test.

**Step 3 — Classify the oxides**
- **CaO** (metal oxide) → **basic** (reacts with acids: CaO + 2HCl → CaCl₂ + H₂O).
- **CO₂** (non-metal oxide) → **acidic** (forms carbonic acid with water).
- **Al₂O₃** → **amphoteric** (reacts with both acids and bases).

**Conclusion.** Oxygen is made by decomposing hydrogen peroxide and tested with a glowing splint; oxides are classified by acid–base behaviour — CaO basic, CO₂ acidic and Al₂O₃ amphoteric.`,
      quiz: [
        { prompt: "Oxygen makes up about … of the air.", options: ["21%", "78%", "50%", "1%"], correctIndex: 0, explanation: "O₂ is ~21% of air." },
        { prompt: "The laboratory test for oxygen is that it…", options: ["relights a glowing splint", "puts out a flame", "turns limewater milky", "smells sharp"], correctIndex: 0, explanation: "Oxygen relights a glowing splint." },
        { prompt: "Oxygen can be prepared by decomposing … with MnO₂.", options: ["hydrogen peroxide", "water", "ammonia", "carbon dioxide"], correctIndex: 0, explanation: "2H₂O₂ → 2H₂O + O₂." },
        { prompt: "The role of MnO₂ in preparing oxygen is as a…", options: ["catalyst", "reactant", "fuel", "product"], correctIndex: 0, explanation: "MnO₂ speeds decomposition." },
        { prompt: "Industrially, oxygen is obtained by … of liquefied air.", options: ["fractional distillation", "electrolysis only", "combustion", "filtration"], correctIndex: 0, explanation: "Boils at −183 °C." },
        { prompt: "Oxygen itself…", options: ["supports burning but does not burn", "burns easily", "puts out all fires", "is a fuel"], correctIndex: 0, explanation: "It supports combustion." },
        { prompt: "A non-metal oxide that forms an acid is … oxide.", options: ["acidic", "basic", "amphoteric", "neutral"], correctIndex: 0, explanation: "Non-metal oxides are usually acidic." },
        { prompt: "A metal oxide that reacts with acids is … oxide.", options: ["basic", "acidic", "amphoteric", "neutral"], correctIndex: 0, explanation: "Basic oxides react with acids." },
        { prompt: "An oxide that reacts with both acids and bases is…", options: ["amphoteric", "acidic", "basic", "neutral"], correctIndex: 0, explanation: "Amphoteric, e.g. Al₂O₃." },
        { prompt: "Which is a neutral oxide?", options: ["carbon monoxide (CO)", "carbon dioxide (CO₂)", "calcium oxide (CaO)", "sulfur dioxide (SO₂)"], correctIndex: 0, explanation: "CO is neutral." },
        { prompt: "CaO is an example of a … oxide.", options: ["basic", "acidic", "amphoteric", "neutral"], correctIndex: 0, explanation: "Calcium oxide is basic." },
        { prompt: "CO₂ is an example of a … oxide.", options: ["acidic", "basic", "amphoteric", "neutral"], correctIndex: 0, explanation: "Carbon dioxide is acidic." },
        { prompt: "Al₂O₃ is an example of a … oxide.", options: ["amphoteric", "acidic", "basic", "neutral"], correctIndex: 0, explanation: "Aluminium oxide is amphoteric." },
        { prompt: "Oxygen is used in hospitals for…", options: ["breathing", "cooling drinks", "lighting", "welding only"], correctIndex: 0, explanation: "Medical oxygen for patients." },
        { prompt: "Oxy-acetylene flames are used for…", options: ["welding/cutting metal", "cooling", "refrigeration", "farming"], correctIndex: 0, explanation: "Very hot flame for welding." },
        { prompt: "A basic oxide + acid gives…", options: ["salt + water", "hydrogen only", "an acid", "oxygen"], correctIndex: 0, explanation: "Neutralisation." },
        { prompt: "Which pair are both acidic oxides?", options: ["CO₂ and SO₂", "CaO and MgO", "Al₂O₃ and ZnO", "CO and N₂O"], correctIndex: 0, explanation: "Both are acidic non-metal oxides." },
        { prompt: "Water (H₂O) is classed as a … oxide.", options: ["neutral", "acidic", "basic", "amphoteric"], correctIndex: 0, explanation: "Water is a neutral oxide." },
        { prompt: "Steel making uses oxygen to…", options: ["remove impurities (burn off carbon)", "cool the furnace", "colour the steel", "add nitrogen"], correctIndex: 0, explanation: "Oxygen burns off excess carbon." },
        { prompt: "ZnO reacting with both HCl and NaOH shows it is…", options: ["amphoteric", "acidic only", "basic only", "neutral"], correctIndex: 0, explanation: "Reacts with acid and base." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe the laboratory preparation and test for oxygen.", answerKey: "Oxygen is prepared by decomposing hydrogen peroxide with a manganese(IV) oxide catalyst: 2H₂O₂ → 2H₂O + O₂ (or by heating potassium chlorate with MnO₂). It is tested by showing that it relights a glowing splint. Award marks for the preparation and the test.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is an amphoteric oxide?", options: ["Al₂O₃", "CaO", "CO₂", "CO"], correctIndex: 0, answerKey: "Aluminium oxide reacts with both acids and bases.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Which oxide is neutral?", options: ["Carbon monoxide", "Sulfur dioxide", "Sodium oxide", "Carbon dioxide"], correctIndex: 0, answerKey: "CO is a neutral oxide.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Classify each oxide as acidic, basic, amphoteric or neutral: SO₂, MgO, ZnO, H₂O.", answerKey: "SO₂ — acidic; MgO — basic; ZnO — amphoteric; H₂O — neutral. Award a mark for each correct classification (up to 4, capped at marks).", marks: 4 },
        { type: "ESSAY", prompt: "Explain the classification of oxides into acidic, basic, amphoteric and neutral, giving examples and the reactions that show each type.", answerKey: "A full answer classifies oxides by acid–base behaviour: acidic oxides (non-metal oxides such as CO₂, SO₂, SO₃) form acids with water or react with bases; basic oxides (metal oxides such as Na₂O, CaO, MgO, CuO) react with acids to give salt + water (e.g. CaO + 2HCl → CaCl₂ + H₂O); amphoteric oxides (Al₂O₃, ZnO, PbO) react with both acids and bases; neutral oxides (CO, NO, N₂O, H₂O) are neither acidic nor basic. Award marks for the four categories, examples and illustrative reactions.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — The Contact Process (sulfuric acid) / sulfur allotropes (https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Le_Chateliers_Principle/The_Contact_Process)
      slug: "sulfur-and-sulfuric-acid",
      title: "Sulfur and Sulfuric Acid",
      objective:
        "By the end of the topic, learners should be able to describe the allotropes and uses of sulfur, its important compounds, and the manufacture, properties and uses of sulfuric acid by the contact process. (MoE Grade 12 Period IV, Topic 2, CONTENTS 6.)",
      estimatedMinutes: 140,
      notes: `## Sulfur

- **Sulfur** is a yellow, brittle non-metal solid; insoluble in water.
- **Allotropes:** **rhombic** sulfur (stable below 96 °C) and **monoclinic** sulfur (stable above 96 °C) — plus plastic sulfur.
- **Uses:** making sulfuric acid, vulcanising rubber, fungicides, matches, gunpowder.

## Some compounds of sulfur

- **Sulfur dioxide (SO₂):** made by burning sulfur (S + O₂ → SO₂); a pungent, acidic gas; a **bleach** and food preservative; causes acid rain.
- **Sulfurous acid (H₂SO₃):** SO₂ + H₂O → H₂SO₃ (a weak acid).
- **Hydrogen sulfide (H₂S):** smells of rotten eggs; poisonous.

## Sulfuric acid — the contact process

1. **Make SO₂:** burn sulfur (or roast sulfide ores): S + O₂ → SO₂.
2. **Make SO₃:** oxidise SO₂ with a **vanadium(V) oxide (V₂O₅)** catalyst at ~450 °C: 2SO₂ + O₂ ⇌ 2SO₃ (reversible, exothermic).
3. **Absorb SO₃** in concentrated sulfuric acid to form oleum, then add water: SO₃ + H₂O → H₂SO₄ (SO₃ is not added straight to water — the reaction is too violent).

## Properties and uses of sulfuric acid

- Strong acid; concentrated H₂SO₄ is a powerful **dehydrating agent** and oxidising agent.
- **Uses:** fertilisers (most is used here), car batteries, detergents, paints, and metal treatment.

## Common errors and misconceptions

- **SO₃ is added directly to water** — no; it is absorbed in concentrated acid first (direct addition is dangerously violent).
- **The contact process uses iron** — the catalyst is vanadium(V) oxide (iron is the Haber catalyst).
- **Sulfur has no allotropes** — it has rhombic and monoclinic forms.`,
      workedExample: `**Task.** Describe the contact process for making sulfuric acid, giving the equations, catalyst and conditions.

**Step 1 — Make sulfur dioxide**
Burn sulfur in air: S + O₂ → SO₂.

**Step 2 — Convert SO₂ to SO₃**
Oxidise with excess air over a **vanadium(V) oxide (V₂O₅)** catalyst at about **450 °C** and moderate pressure:
2SO₂ + O₂ ⇌ 2SO₃ (reversible, exothermic).

**Step 3 — Absorb SO₃**
SO₃ is **absorbed in concentrated sulfuric acid** to form oleum (H₂S₂O₇), which is then diluted with water to give sulfuric acid; overall SO₃ + H₂O → H₂SO₄. (SO₃ is not added directly to water because the reaction is too violent.)

**Conclusion.** The contact process makes sulfuric acid by burning sulfur to SO₂, catalytically oxidising it to SO₃ over V₂O₅, and absorbing SO₃ in concentrated acid before dilution.`,
      quiz: [
        { prompt: "Sulfur is a … non-metal.", options: ["yellow, brittle solid", "silvery metal", "colourless gas", "red liquid"], correctIndex: 0, explanation: "Yellow brittle solid." },
        { prompt: "The two main crystalline allotropes of sulfur are…", options: ["rhombic and monoclinic", "diamond and graphite", "alpha and gamma iron", "red and white"], correctIndex: 0, explanation: "Rhombic and monoclinic sulfur." },
        { prompt: "Burning sulfur in air gives…", options: ["sulfur dioxide", "sulfur trioxide", "hydrogen sulfide", "sulfuric acid"], correctIndex: 0, explanation: "S + O₂ → SO₂." },
        { prompt: "Sulfur dioxide is a … gas.", options: ["pungent, acidic", "sweet, neutral", "odourless, basic", "colourless, flammable"], correctIndex: 0, explanation: "SO₂ is pungent and acidic." },
        { prompt: "Sulfur dioxide can act as a…", options: ["bleach and preservative", "fuel", "fertiliser", "metal"], correctIndex: 0, explanation: "Used to bleach and preserve." },
        { prompt: "Sulfuric acid is made by the … process.", options: ["Contact", "Haber", "Ostwald", "Bayer"], correctIndex: 0, explanation: "Contact process makes H₂SO₄." },
        { prompt: "The catalyst in the contact process is…", options: ["vanadium(V) oxide", "iron", "platinum", "nickel"], correctIndex: 0, explanation: "V₂O₅ catalyses SO₂ → SO₃." },
        { prompt: "In the contact process, 2SO₂ + O₂ ⇌…", options: ["2SO₃", "2SO₄", "S₂O", "SO₂ only"], correctIndex: 0, explanation: "Oxidation to sulfur trioxide." },
        { prompt: "SO₃ is absorbed in … before dilution.", options: ["concentrated sulfuric acid", "cold water", "ammonia", "oil"], correctIndex: 0, explanation: "Direct addition to water is too violent." },
        { prompt: "Concentrated sulfuric acid is a powerful … agent.", options: ["dehydrating", "reducing", "cooling", "fuel"], correctIndex: 0, explanation: "It removes water from substances." },
        { prompt: "Most sulfuric acid is used to make…", options: ["fertilisers", "glass", "petrol", "soap only"], correctIndex: 0, explanation: "Fertilisers use the most." },
        { prompt: "Sulfuric acid is used in car…", options: ["batteries", "tyres", "engines only", "paint only"], correctIndex: 0, explanation: "Lead-acid batteries." },
        { prompt: "Sulfur dioxide dissolves in water to give…", options: ["sulfurous acid", "sulfuric acid directly", "nitric acid", "carbonic acid"], correctIndex: 0, explanation: "SO₂ + H₂O → H₂SO₃." },
        { prompt: "The contact process temperature is about…", options: ["450 °C", "25 °C", "1500 °C", "100 °C"], correctIndex: 0, explanation: "Around 450 °C with V₂O₅." },
        { prompt: "Hydrogen sulfide (H₂S) smells of…", options: ["rotten eggs", "flowers", "vinegar", "nothing"], correctIndex: 0, explanation: "Characteristic rotten-egg smell." },
        { prompt: "Sulfur is used to … rubber to make it harder.", options: ["vulcanise", "dissolve", "bleach", "melt"], correctIndex: 0, explanation: "Vulcanisation with sulfur." },
        { prompt: "The 2SO₂ + O₂ ⇌ 2SO₃ reaction is…", options: ["reversible and exothermic", "irreversible", "endothermic explosion", "neutral"], correctIndex: 0, explanation: "Reversible, releases heat." },
        { prompt: "Which is TRUE?", options: ["the contact catalyst is V₂O₅, not iron", "iron is the contact catalyst", "no catalyst is used", "platinum is the contact catalyst"], correctIndex: 0, explanation: "V₂O₅ for the contact process." },
        { prompt: "Sulfur dioxide is a cause of…", options: ["acid rain", "the ozone hole", "global cooling", "eutrophication"], correctIndex: 0, explanation: "SO₂ forms acid rain." },
        { prompt: "Rhombic sulfur is stable … 96 °C.", options: ["below", "above", "exactly at", "never below"], correctIndex: 0, explanation: "Rhombic is the low-temperature form." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the two crystalline allotropes of sulfur and give two uses of sulfur.", answerKey: "Allotropes: rhombic sulfur and monoclinic sulfur. Uses (any two): making sulfuric acid, vulcanising rubber, fungicides, matches, gunpowder. Award marks for the two allotropes and two uses.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The catalyst used in the contact process is:", options: ["Vanadium(V) oxide", "Iron", "Platinum", "Nickel"], correctIndex: 0, answerKey: "V₂O₅ catalyses SO₂ → SO₃.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Why is sulfur trioxide not added directly to water?", options: ["The reaction is dangerously violent", "It does not react", "Water is too cheap", "It forms a gas only"], correctIndex: 0, answerKey: "SO₃ is absorbed in concentrated acid first because direct addition to water is too violent.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Write equations for the three main stages of the contact process.", answerKey: "(1) S + O₂ → SO₂. (2) 2SO₂ + O₂ ⇌ 2SO₃ (V₂O₅ catalyst, ~450 °C). (3) SO₃ absorbed in concentrated H₂SO₄ then diluted; overall SO₃ + H₂O → H₂SO₄. Award a mark for each stage.", marks: 3 },
        { type: "ESSAY", prompt: "Describe the manufacture of sulfuric acid by the contact process and give the properties and main uses of sulfuric acid.", answerKey: "A full answer explains the contact process: burn sulfur (or roast sulfide ores) to make SO₂ (S + O₂ → SO₂); oxidise SO₂ to SO₃ over a vanadium(V) oxide catalyst at ~450 °C (2SO₂ + O₂ ⇌ 2SO₃, reversible and exothermic); absorb SO₃ in concentrated sulfuric acid to form oleum, then dilute with water to give H₂SO₄ (direct addition of SO₃ to water is avoided as too violent). Properties: strong acid, powerful dehydrating and oxidising agent. Uses: fertilisers (the largest use), car batteries, detergents, paints and metal treatment. Award marks for the three stages with catalyst/conditions, properties and uses.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 18.11 Occurrence, Preparation, and Properties of Halogens (Chemistry 2e, OpenStax) (https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_2e_(OpenStax)/18%3A_Representative_Metals_Metalloids_and_Nonmetals/18.11%3A_Occurrence_Preparation_and_Properties_of_Halogens)
      slug: "the-halogens",
      title: "The Halogens",
      objective:
        "By the end of the topic, learners should be able to describe the properties of the halogens, their methods of preparation, tests for identification and uses. (MoE Grade 12 Period IV, Topic 2, CONTENTS 7.)",
      estimatedMinutes: 120,
      notes: `## The halogens (Group 7)

- **Halogens:** fluorine (F₂), chlorine (Cl₂), bromine (Br₂), iodine (I₂) — reactive non-metals forming **diatomic** molecules.
- They gain one electron to form **−1 ions** (halides) and are strong **oxidising agents**.

| Halogen | State at room temp | Colour |
| --- | --- | --- |
| Fluorine | gas | pale yellow |
| Chlorine | gas | green-yellow |
| Bromine | liquid | red-brown |
| Iodine | solid | grey-black (violet vapour) |

## Trends down the group

- Reactivity **decreases** down the group (fluorine most reactive, iodine least).
- A more reactive halogen **displaces** a less reactive one from its salt: Cl₂ + 2KBr → 2KCl + Br₂.

## Preparation

- Halogens are made by **oxidising halide ions**. Chlorine: electrolysis of brine, or oxidise concentrated HCl with MnO₂.

## Tests for halide ions

- Add dilute nitric acid then **silver nitrate** solution:
  - Chloride → **white** precipitate (AgCl).
  - Bromide → **cream** precipitate (AgBr).
  - Iodide → **yellow** precipitate (AgI).

## Uses

- **Chlorine:** water treatment, bleach, PVC. **Iodine:** antiseptic. **Fluoride:** toothpaste (prevents decay). **Bromine:** flame retardants, photography (silver bromide).

## Common errors and misconceptions

- **Reactivity increases down Group 7** — it decreases.
- **Halogens exist as single atoms** — they are diatomic (Cl₂, Br₂).
- **All silver halides are white** — AgCl is white, AgBr cream, AgI yellow.`,
      workedExample: `**Task.** Chlorine gas is bubbled into potassium bromide solution. (a) State what is observed and write the equation. (b) Explain the result using reactivity.

**Step 1 — Observation and equation**
The colourless solution turns **orange/brown** as bromine is formed:
Cl₂ + 2KBr → 2KCl + Br₂.

**Step 2 — Explain with reactivity**
Chlorine is **higher (more reactive)** in Group 7 than bromine, so chlorine **displaces** bromine from its salt: chlorine takes the electrons to become chloride ions, releasing bromine.

**Conclusion.** A more reactive halogen (chlorine) displaces a less reactive one (bromine) from its salt, shown by the solution turning orange/brown — a displacement reaction confirming the reactivity order.`,
      quiz: [
        { prompt: "The halogens are in Group … of the periodic table.", options: ["7", "1", "2", "0"], correctIndex: 0, explanation: "Group 7 (17) non-metals." },
        { prompt: "Halogens exist as … molecules.", options: ["diatomic", "single atoms", "giant ionic", "metallic"], correctIndex: 0, explanation: "Cl₂, Br₂, etc." },
        { prompt: "Halogens form ions with a charge of…", options: ["−1", "+1", "−2", "+2"], correctIndex: 0, explanation: "They gain one electron." },
        { prompt: "Down Group 7, reactivity…", options: ["decreases", "increases", "stays the same", "disappears"], correctIndex: 0, explanation: "Fluorine most, iodine least reactive." },
        { prompt: "Chlorine is a … gas.", options: ["green-yellow", "red-brown", "grey", "colourless"], correctIndex: 0, explanation: "Chlorine is green-yellow." },
        { prompt: "Bromine at room temperature is a…", options: ["red-brown liquid", "yellow gas", "black solid", "green gas"], correctIndex: 0, explanation: "Bromine is a liquid." },
        { prompt: "Iodine at room temperature is a…", options: ["grey-black solid", "gas", "colourless liquid", "green solid"], correctIndex: 0, explanation: "Iodine is a solid." },
        { prompt: "Halogens are strong…", options: ["oxidising agents", "reducing agents", "bases", "fuels"], correctIndex: 0, explanation: "They gain electrons (oxidise others)." },
        { prompt: "A more reactive halogen … a less reactive one from its salt.", options: ["displaces", "dissolves", "reduces to", "combines with"], correctIndex: 0, explanation: "Displacement reactions." },
        { prompt: "Cl₂ + 2KBr →…", options: ["2KCl + Br₂", "2KBr + Cl₂", "KClBr", "no reaction"], correctIndex: 0, explanation: "Chlorine displaces bromine." },
        { prompt: "The test for halide ions uses dilute nitric acid and…", options: ["silver nitrate", "limewater", "litmus", "bromine water"], correctIndex: 0, explanation: "Silver nitrate gives coloured precipitates." },
        { prompt: "A chloride gives a … precipitate with silver nitrate.", options: ["white", "cream", "yellow", "black"], correctIndex: 0, explanation: "AgCl is white." },
        { prompt: "A bromide gives a … precipitate with silver nitrate.", options: ["cream", "white", "yellow", "green"], correctIndex: 0, explanation: "AgBr is cream." },
        { prompt: "An iodide gives a … precipitate with silver nitrate.", options: ["yellow", "white", "cream", "blue"], correctIndex: 0, explanation: "AgI is yellow." },
        { prompt: "Chlorine is used in…", options: ["water treatment", "fertiliser", "welding", "batteries"], correctIndex: 0, explanation: "It kills microbes in water." },
        { prompt: "Fluoride is added to toothpaste to…", options: ["prevent tooth decay", "whiten colour only", "add flavour", "harden the tube"], correctIndex: 0, explanation: "Fluoride strengthens enamel." },
        { prompt: "Iodine is used as an…", options: ["antiseptic", "explosive", "fuel", "fertiliser"], correctIndex: 0, explanation: "Iodine kills germs on skin." },
        { prompt: "The most reactive halogen is…", options: ["fluorine", "iodine", "bromine", "astatine"], correctIndex: 0, explanation: "Fluorine tops the group." },
        { prompt: "Chlorine is prepared by oxidising … ions.", options: ["chloride", "sodium", "sulfate", "nitrate"], correctIndex: 0, explanation: "Halogens from oxidising halide ions." },
        { prompt: "Silver bromide is used in…", options: ["photography", "cement", "steel", "soap"], correctIndex: 0, explanation: "Light-sensitive AgBr in film." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the trend in reactivity down Group 7 and give the colours/states of chlorine, bromine and iodine.", answerKey: "Reactivity decreases down Group 7 (fluorine most reactive, iodine least). Chlorine — green-yellow gas; bromine — red-brown liquid; iodine — grey-black solid (violet vapour). Award marks for the trend and the three colours/states.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Adding silver nitrate to a bromide solution gives a:", options: ["Cream precipitate", "White precipitate", "Yellow precipitate", "No precipitate"], correctIndex: 0, answerKey: "AgBr is a cream precipitate.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Chlorine displaces bromine from potassium bromide because chlorine is:", options: ["More reactive than bromine", "Less reactive than bromine", "A metal", "A reducing agent"], correctIndex: 0, answerKey: "The more reactive halogen displaces the less reactive one.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Describe how you would use silver nitrate to distinguish chloride, bromide and iodide ions.", answerKey: "Add dilute nitric acid then silver nitrate solution: a chloride gives a white precipitate (AgCl), a bromide gives a cream precipitate (AgBr), and an iodide gives a yellow precipitate (AgI). Award marks for the method and the three colours.", marks: 3 },
        { type: "ESSAY", prompt: "Describe the properties of the halogens, the trend in their reactivity, and give the uses of chlorine, iodine and fluoride.", answerKey: "A full answer describes the halogens (Group 7) as reactive diatomic non-metals that gain one electron to form −1 halide ions and are strong oxidising agents, with a trend from pale-yellow gas fluorine, green-yellow gas chlorine, red-brown liquid bromine to grey-black solid iodine. Reactivity decreases down the group, shown by displacement (a more reactive halogen displaces a less reactive one, e.g. Cl₂ + 2KBr → 2KCl + Br₂). Uses: chlorine for water treatment, bleach and PVC; iodine as an antiseptic; fluoride in toothpaste to prevent tooth decay (also bromine in photography/flame retardants). Award marks for properties, the reactivity trend with an example, and the uses.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 18.11/18.12 Halogens; chlorine preparation and chlor-alkali (https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_2e_(OpenStax)/18%3A_Representative_Metals_Metalloids_and_Nonmetals/18.11%3A_Occurrence_Preparation_and_Properties_of_Halogens)
      slug: "chlorine",
      title: "Chlorine",
      objective:
        "By the end of the topic, learners should be able to describe the laboratory preparation, properties, reactions and uses of chlorine and useful halogen compounds. (MoE Grade 12 Period IV, Topic 2, CONTENTS 8.)",
      estimatedMinutes: 110,
      notes: `## Chlorine

- **Chlorine (Cl₂)** — a green-yellow, dense, poisonous gas with a sharp, choking smell.

## Laboratory preparation

- Oxidise concentrated hydrochloric acid with an oxidising agent such as manganese(IV) oxide (with heat) or potassium permanganate:
  - MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂.
- Industrially: **electrolysis of brine** (concentrated NaCl solution) — the **chlor-alkali** process (also gives NaOH and H₂).

## Properties and reactions

- Chlorine is a strong **oxidising agent** and **bleaching agent**.
- **With water:** Cl₂ + H₂O → HCl + HOCl (hypochlorous acid, the bleaching/killing agent).
- **With alkali (cold):** Cl₂ + 2NaOH → NaCl + NaOCl + H₂O (sodium chlorate(I) — bleach).
- **With metals/hydrogen:** forms chlorides, e.g. H₂ + Cl₂ → 2HCl.
- **Bleaching:** chlorine (via HOCl) removes colour from dyes and kills bacteria.

## Uses of chlorine and halogen compounds

- **Water treatment** (kills bacteria), **bleaches**, making **PVC** and other chemicals, and hydrochloric acid.
- **Silver halides** (AgBr, AgCl) — **photography** (light-sensitive).
- **Sodium chlorate(I)/hypochlorite (NaOCl)** — household **bleach** and disinfectant.

## Common errors and misconceptions

- **Chlorine is safe to smell** — it is poisonous; use a fume cupboard.
- **Chlorine bleaches by adding colour** — it removes colour (oxidises dyes).
- **The bleaching agent is Cl₂ itself** — the active species with water is hypochlorous acid (HOCl).`,
      workedExample: `**Task.** Chlorine is bubbled into cold, dilute sodium hydroxide. (a) Write the equation. (b) Name the useful product. (c) State its use.

**Step 1 — Equation (cold, dilute alkali)**
Cl₂ + 2NaOH → NaCl + NaOCl + H₂O.

**Step 2 — Useful product**
The product **sodium chlorate(I)** (sodium hypochlorite, NaOCl) is formed.

**Step 3 — Use**
Sodium chlorate(I) is used as **household bleach** and a disinfectant (it oxidises dyes and kills bacteria).

**Conclusion.** Cold dilute alkali reacts with chlorine to give sodium chlorate(I) (bleach), used to whiten fabrics and disinfect surfaces.`,
      quiz: [
        { prompt: "Chlorine is a … gas.", options: ["green-yellow, poisonous", "colourless, harmless", "red-brown liquid", "black solid"], correctIndex: 0, explanation: "Green-yellow toxic gas." },
        { prompt: "Chlorine can be prepared by oxidising concentrated…", options: ["hydrochloric acid", "sulfuric acid only", "water", "ammonia"], correctIndex: 0, explanation: "MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂." },
        { prompt: "Industrially, chlorine is made by … of brine.", options: ["electrolysis", "distillation", "combustion", "filtration"], correctIndex: 0, explanation: "Chlor-alkali process." },
        { prompt: "The chlor-alkali process also produces NaOH and…", options: ["hydrogen", "oxygen", "nitrogen", "carbon dioxide"], correctIndex: 0, explanation: "Cl₂, NaOH and H₂ from brine." },
        { prompt: "Chlorine is a strong … agent.", options: ["oxidising", "reducing", "dehydrating", "neutralising"], correctIndex: 0, explanation: "It gains electrons." },
        { prompt: "Chlorine dissolves in water to give HCl and…", options: ["HOCl (hypochlorous acid)", "H₂O₂", "NaOH", "O₂"], correctIndex: 0, explanation: "Cl₂ + H₂O → HCl + HOCl." },
        { prompt: "The bleaching action of chlorine water is due to…", options: ["hypochlorous acid", "hydrochloric acid", "sodium", "carbon"], correctIndex: 0, explanation: "HOCl bleaches and disinfects." },
        { prompt: "Chlorine + cold dilute NaOH gives NaCl, water and…", options: ["NaOCl", "NaClO₃", "Na₂CO₃", "NaH"], correctIndex: 0, explanation: "Sodium chlorate(I)/hypochlorite." },
        { prompt: "Chlorine bleaches by … colour.", options: ["removing", "adding", "darkening", "fixing"], correctIndex: 0, explanation: "It oxidises dyes, removing colour." },
        { prompt: "Chlorine is used to treat water because it…", options: ["kills bacteria", "adds colour", "makes it acidic only", "cools it"], correctIndex: 0, explanation: "Disinfects drinking water." },
        { prompt: "Chlorine reacts with hydrogen to form…", options: ["hydrogen chloride", "water", "chlorate", "carbon"], correctIndex: 0, explanation: "H₂ + Cl₂ → 2HCl." },
        { prompt: "Silver halides are used in…", options: ["photography", "cement", "welding", "fertiliser"], correctIndex: 0, explanation: "Light-sensitive AgBr/AgCl." },
        { prompt: "Sodium chlorate(I) (NaOCl) is used as…", options: ["household bleach", "a fuel", "a fertiliser", "a metal"], correctIndex: 0, explanation: "Bleach and disinfectant." },
        { prompt: "Chlorine should be prepared in a…", options: ["fume cupboard", "open room", "sealed food container", "kitchen sink"], correctIndex: 0, explanation: "It is poisonous." },
        { prompt: "Chlorine is used to make the plastic…", options: ["PVC", "polythene", "nylon", "polyester"], correctIndex: 0, explanation: "Poly(vinyl chloride)." },
        { prompt: "Chlorine is denser than…", options: ["air", "water", "iron", "mercury"], correctIndex: 0, explanation: "It is a dense gas, heavier than air." },
        { prompt: "Which is the active bleaching/killing species in chlorine water?", options: ["HOCl", "HCl", "NaCl", "H₂"], correctIndex: 0, explanation: "Hypochlorous acid." },
        { prompt: "MnO₂ in the preparation of chlorine acts as an…", options: ["oxidising agent", "reducing agent", "catalyst only", "acid"], correctIndex: 0, explanation: "It oxidises HCl to Cl₂." },
        { prompt: "Chlorine turns damp litmus paper … then white.", options: ["red", "blue permanently", "green", "black"], correctIndex: 0, explanation: "Acidic then bleaches it white." },
        { prompt: "Hydrochloric acid is made from chlorine and…", options: ["hydrogen", "oxygen", "nitrogen", "sulfur"], correctIndex: 0, explanation: "H₂ + Cl₂ → 2HCl." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe the laboratory preparation of chlorine and state two of its physical properties.", answerKey: "Chlorine is prepared by oxidising concentrated hydrochloric acid, e.g. with manganese(IV) oxide and heat: MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂ (or with potassium permanganate). Physical properties (any two): green-yellow gas; poisonous; sharp/choking smell; denser than air. Award marks for the preparation and two properties.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Industrially, chlorine is manufactured by:", options: ["Electrolysis of brine", "Fractional distillation of air", "Heating limestone", "Burning sulfur"], correctIndex: 0, answerKey: "The chlor-alkali process electrolyses concentrated NaCl solution.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Chlorine reacting with cold dilute sodium hydroxide gives, among products:", options: ["Sodium chlorate(I) (bleach)", "Sodium carbonate", "Sodium nitrate", "Sodium sulfate"], correctIndex: 0, answerKey: "Cl₂ + 2NaOH → NaCl + NaOCl + H₂O.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain how chlorine acts as a bleach when dissolved in water.", answerKey: "Chlorine reacts with water: Cl₂ + H₂O → HCl + HOCl. The hypochlorous acid (HOCl) is a strong oxidising agent that removes colour from dyes (bleaches) and kills bacteria (disinfects). Award marks for the equation and the bleaching/oxidising explanation.", marks: 3 },
        { type: "ESSAY", prompt: "Describe the preparation, properties and uses of chlorine, and name two useful compounds of the halogens.", answerKey: "A full answer covers preparation (lab: oxidising concentrated HCl with MnO₂, MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂; industrial: electrolysis of brine — chlor-alkali, giving Cl₂, NaOH and H₂). Properties: green-yellow, dense, poisonous gas; strong oxidising and bleaching agent; reacts with water (Cl₂ + H₂O → HCl + HOCl), with cold alkali (Cl₂ + 2NaOH → NaCl + NaOCl + H₂O), and with hydrogen/metals to form chlorides. Uses: water treatment, bleaches, making PVC and HCl. Useful halogen compounds: silver bromide/chloride for photography; sodium chlorate(I)/hypochlorite as household bleach. Award marks for preparation, properties, uses and named compounds.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 18.10 Occurrence, Preparation, and Properties of the Noble Gases (Chemistry 2e, OpenStax) (https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_2e_(OpenStax)/18%3A_Representative_Metals_Metalloids_and_Nonmetals)
      slug: "the-noble-gases",
      title: "The Noble Gases",
      objective:
        "By the end of the topic, learners should be able to describe the properties and uses of the noble gases. (MoE Grade 12 Period IV, Topic 2, CONTENTS 9.)",
      estimatedMinutes: 70,
      notes: `## The noble gases (Group 0/18)

- **Noble gases:** helium (He), neon (Ne), argon (Ar), krypton (Kr), xenon (Xe), radon (Rn).
- They are colourless, odourless, **monatomic** gases.
- **Very unreactive (inert)** because they have a **full outer shell** of electrons (a stable octet; helium has 2).

## Properties

- Do not normally form compounds; non-flammable; present in small amounts in air (argon ~0.9%).

## Uses

| Gas | Use |
| --- | --- |
| Helium | filling balloons/airships (light, non-flammable); breathing mixtures for divers |
| Neon | red-orange advertising/display lights |
| Argon | inert atmosphere in light bulbs and welding |
| Krypton/Xenon | special lamps, camera flashes, lighthouse lights |
| Radon | (radioactive) used in some cancer treatment; a health hazard in buildings |

## Common errors and misconceptions

- **Noble gases are reactive** — they are inert (full outer shell).
- **They are diatomic** — noble gases are monatomic (single atoms).
- **Helium is flammable** — it is non-flammable, unlike hydrogen.`,
      workedExample: `**Task.** Explain why the noble gases are unreactive and give a use of helium and of argon that depends on their properties.

**Step 1 — Why unreactive**
Noble gases have a **full outer electron shell** (stable octet; helium has two electrons), so they have no tendency to gain, lose or share electrons — they are **inert**.

**Step 2 — Use of helium**
Helium is light and **non-flammable**, so it is used to fill **balloons and airships** (safer than hydrogen).

**Step 3 — Use of argon**
Argon is **inert**, so it provides an unreactive atmosphere in **light bulbs** (stopping the filament from burning away) and in welding.

**Conclusion.** A full outer shell makes noble gases inert; helium's lightness and non-flammability suit balloons, and argon's inertness suits filling light bulbs.`,
      quiz: [
        { prompt: "The noble gases are in Group … of the periodic table.", options: ["0 (18)", "1", "7", "2"], correctIndex: 0, explanation: "Group 0/18." },
        { prompt: "Noble gases are … molecules.", options: ["monatomic", "diatomic", "triatomic", "giant"], correctIndex: 0, explanation: "Single atoms." },
        { prompt: "Noble gases are unreactive because they have a…", options: ["full outer electron shell", "single electron", "positive charge", "loose electron"], correctIndex: 0, explanation: "Stable octet." },
        { prompt: "Which is a noble gas?", options: ["argon", "chlorine", "nitrogen", "oxygen"], correctIndex: 0, explanation: "Argon is Group 0." },
        { prompt: "Helium is used in balloons because it is light and…", options: ["non-flammable", "coloured", "reactive", "heavy"], correctIndex: 0, explanation: "Safer than hydrogen." },
        { prompt: "Neon is used in…", options: ["advertising lights", "welding", "balloons", "breathing"], correctIndex: 0, explanation: "Red-orange neon signs." },
        { prompt: "Argon provides an inert atmosphere in…", options: ["light bulbs", "car engines", "fizzy drinks", "fertiliser"], correctIndex: 0, explanation: "Stops the filament burning." },
        { prompt: "Noble gases are … in colour.", options: ["colourless", "green", "yellow", "brown"], correctIndex: 0, explanation: "Colourless and odourless." },
        { prompt: "The most abundant noble gas in air is…", options: ["argon", "helium", "xenon", "radon"], correctIndex: 0, explanation: "Argon ~0.9% of air." },
        { prompt: "Radon is different because it is…", options: ["radioactive", "flammable", "a metal", "a liquid"], correctIndex: 0, explanation: "Radon is radioactive." },
        { prompt: "Noble gases do NOT normally…", options: ["form compounds", "exist as gases", "occur in air", "have electrons"], correctIndex: 0, explanation: "They are inert." },
        { prompt: "Divers may breathe a helium–oxygen mixture to avoid…", options: ["nitrogen narcosis", "burning", "cold", "colour changes"], correctIndex: 0, explanation: "Helium replaces nitrogen." },
        { prompt: "Xenon and krypton are used in…", options: ["special lamps and camera flashes", "fertilisers", "fuels", "batteries"], correctIndex: 0, explanation: "Bright lamps and flashes." },
        { prompt: "Which is TRUE of noble gases?", options: ["they are chemically inert", "they burn easily", "they are metals", "they are very reactive"], correctIndex: 0, explanation: "Inert due to full shells." },
        { prompt: "Helium's outer shell contains … electrons.", options: ["2", "8", "1", "0"], correctIndex: 0, explanation: "Helium is full with 2 electrons." },
        { prompt: "Argon is used in welding to…", options: ["prevent the metal from reacting with air", "add colour", "cool the weld", "melt the metal"], correctIndex: 0, explanation: "Inert shielding gas." },
        { prompt: "The noble gases are also called the … gases.", options: ["inert", "reactive", "acid", "greenhouse"], correctIndex: 0, explanation: "Inert gases." },
        { prompt: "Which noble gas is used to fill airships?", options: ["helium", "chlorine", "oxygen", "carbon dioxide"], correctIndex: 0, explanation: "Light, non-flammable helium." },
        { prompt: "Neon lights glow because the gas is…", options: ["excited by electricity", "burning", "reacting with air", "cooling"], correctIndex: 0, explanation: "Electric discharge makes it glow." },
        { prompt: "The noble gases have … outer shells.", options: ["full", "half-full", "empty", "single-electron"], correctIndex: 0, explanation: "Complete outer shells." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Why are the noble gases chemically unreactive?", answerKey: "The noble gases have a full (complete) outer shell of electrons — a stable octet (helium has two electrons filling its shell) — so they have no tendency to gain, lose or share electrons, making them inert. Award marks for the full outer shell and the resulting inertness.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Noble gases exist as:", options: ["Single atoms (monatomic)", "Diatomic molecules", "Giant structures", "Ions"], correctIndex: 0, answerKey: "Noble gases are monatomic.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Which gas is used to provide an inert atmosphere in light bulbs?", options: ["Argon", "Neon", "Helium", "Radon"], correctIndex: 0, answerKey: "Argon is inert and fills light bulbs.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Give one use each of helium, neon and argon.", answerKey: "Helium — filling balloons/airships or breathing mixtures for divers. Neon — advertising/display lights. Argon — inert atmosphere in light bulbs and welding. Award a mark for each correct use.", marks: 3 },
        { type: "ESSAY", prompt: "Describe the general properties of the noble gases and explain how their uses depend on those properties.", answerKey: "A full answer describes the noble gases (Group 0/18: He, Ne, Ar, Kr, Xe, Rn) as colourless, odourless, monatomic gases that are chemically inert because they have full outer electron shells. Their uses follow from this: helium (light and non-flammable) fills balloons and airships and is used in divers' breathing mixtures; neon glows red-orange in advertising lights; argon provides an inert atmosphere in light bulbs (protecting the filament) and in welding; krypton/xenon in bright lamps and camera flashes; radon (radioactive) in some cancer treatment. Award marks for the properties (inertness, monatomic) and uses linked to those properties.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — Hard Water (Descriptive Chemistry) / CK-12 types of hardness of water (https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Supplemental_Modules_and_Websites_(Inorganic_Chemistry)/Descriptive_Chemistry/Main_Group_Reactions/Hard_Water)
      slug: "water-and-solutions",
      title: "Water and Solutions: Hardness of Water",
      objective:
        "By the end of the topic, learners should be able to distinguish soft and hard water, explain temporary and permanent hardness, and describe methods of softening water. (MoE Grade 12 Period IV, Topic 2, CONTENTS 10.)",
      estimatedMinutes: 100,
      notes: `## Soft and hard water

- **Soft water** lathers easily with soap.
- **Hard water** does not lather easily; it forms a **scum** with soap, because it contains dissolved **calcium (Ca²⁺)** and **magnesium (Mg²⁺)** ions.

## Types of hardness

| Type | Cause | Removed by boiling? |
| --- | --- | --- |
| Temporary | hydrogen carbonates of Ca/Mg (e.g. Ca(HCO₃)₂) | Yes |
| Permanent | sulfates and chlorides of Ca/Mg (e.g. CaSO₄) | No |

- **Temporary hardness** is removed by **boiling:** Ca(HCO₃)₂ → CaCO₃ (scale) + H₂O + CO₂.
- **Permanent hardness** is **not** removed by boiling.

## Softening hard water

1. **Boiling** — removes temporary hardness only.
2. **Adding washing soda (Na₂CO₃)** — precipitates Ca²⁺/Mg²⁺ as insoluble carbonates (removes both types).
3. **Ion-exchange resin** — swaps Ca²⁺/Mg²⁺ for Na⁺ (or H⁺), removing all hardness.

## Effects of hard water

- **Disadvantages:** wastes soap (scum), furs kettles/boilers with **scale** (CaCO₃), blocks pipes.
- **Advantages:** provides calcium (good for teeth/bones), better taste, and less risk of dissolving lead pipes.

## Common errors and misconceptions

- **Boiling removes all hardness** — it removes only temporary hardness.
- **Hardness is caused by any dissolved solid** — specifically Ca²⁺ and Mg²⁺ ions.
- **Hard water is always bad** — it has some benefits (calcium, taste).`,
      workedExample: `**Task.** A sample of hard water still lathers poorly after boiling. (a) What type of hardness remains? (b) Give one chemical way to soften it and explain how it works.

**Step 1 — Identify the hardness**
Boiling removes temporary hardness; if the water is still hard, it must have **permanent hardness** (caused by calcium/magnesium sulfates or chlorides).

**Step 2 — A chemical softening method**
Add **washing soda (sodium carbonate, Na₂CO₃)**.

**Step 3 — How it works**
The carbonate ions **precipitate** the calcium and magnesium ions as insoluble carbonates, removing them from solution:
Ca²⁺ + CO₃²⁻ → CaCO₃ (precipitate). The softened water then lathers easily.

**Conclusion.** Permanent hardness remains after boiling; adding washing soda precipitates the Ca²⁺/Mg²⁺ ions as carbonates, softening the water.`,
      quiz: [
        { prompt: "Hard water does not lather easily with…", options: ["soap", "oil", "sand", "salt"], correctIndex: 0, explanation: "It forms scum with soap." },
        { prompt: "Hardness of water is caused by dissolved … ions.", options: ["calcium and magnesium", "sodium and potassium", "chloride only", "nitrate only"], correctIndex: 0, explanation: "Ca²⁺ and Mg²⁺ cause hardness." },
        { prompt: "Temporary hardness is caused by … of calcium and magnesium.", options: ["hydrogen carbonates", "sulfates", "chlorides", "nitrates"], correctIndex: 0, explanation: "Ca(HCO₃)₂ etc." },
        { prompt: "Temporary hardness is removed by…", options: ["boiling", "adding acid", "cooling", "filtering"], correctIndex: 0, explanation: "Boiling decomposes the bicarbonates." },
        { prompt: "Permanent hardness is caused by … of calcium and magnesium.", options: ["sulfates and chlorides", "hydrogen carbonates", "hydroxides", "oxides"], correctIndex: 0, explanation: "CaSO₄, CaCl₂ etc." },
        { prompt: "Permanent hardness is … removed by boiling.", options: ["not", "always", "quickly", "partly"], correctIndex: 0, explanation: "Boiling does not remove it." },
        { prompt: "Adding washing soda (Na₂CO₃) removes hardness by…", options: ["precipitating Ca²⁺/Mg²⁺ as carbonates", "boiling the water", "adding acid", "heating strongly"], correctIndex: 0, explanation: "Insoluble carbonates form." },
        { prompt: "An ion-exchange resin swaps Ca²⁺/Mg²⁺ for…", options: ["Na⁺ (or H⁺)", "Cl⁻", "SO₄²⁻", "OH⁻"], correctIndex: 0, explanation: "Hardness ions replaced by softer ions." },
        { prompt: "The scale (fur) in kettles is mainly…", options: ["calcium carbonate", "sodium chloride", "iron oxide", "sugar"], correctIndex: 0, explanation: "CaCO₃ deposits on heating." },
        { prompt: "Soft water lathers … with soap.", options: ["easily", "poorly", "never", "only when hot"], correctIndex: 0, explanation: "Soft water gives lather quickly." },
        { prompt: "Boiling temporary hard water forms CaCO₃, water and…", options: ["carbon dioxide", "hydrogen", "oxygen", "chlorine"], correctIndex: 0, explanation: "Ca(HCO₃)₂ → CaCO₃ + H₂O + CO₂." },
        { prompt: "One disadvantage of hard water is that it…", options: ["wastes soap", "tastes of salt", "boils faster", "is acidic"], correctIndex: 0, explanation: "Scum wastes soap." },
        { prompt: "One benefit of hard water is that it provides…", options: ["calcium for teeth and bones", "extra sodium", "chlorine", "acid"], correctIndex: 0, explanation: "Calcium is beneficial." },
        { prompt: "Which method removes BOTH temporary and permanent hardness?", options: ["adding washing soda", "boiling only", "cooling", "shaking"], correctIndex: 0, explanation: "Na₂CO₃ removes both." },
        { prompt: "Scale in boilers and pipes is a problem because it…", options: ["blocks pipes and wastes heat", "improves flow", "adds oxygen", "cleans the metal"], correctIndex: 0, explanation: "Scale clogs and insulates." },
        { prompt: "The scum formed by hard water and soap is…", options: ["an insoluble solid", "a gas", "an acid", "a fuel"], correctIndex: 0, explanation: "Insoluble calcium/magnesium soap." },
        { prompt: "Hard water can be softened at home by…", options: ["boiling or adding washing soda", "adding sugar", "freezing", "adding oil"], correctIndex: 0, explanation: "Boiling (temporary) or Na₂CO₃ (both)." },
        { prompt: "Which ions do NOT cause hardness?", options: ["sodium ions", "calcium ions", "magnesium ions", "both Ca and Mg"], correctIndex: 0, explanation: "Only Ca²⁺ and Mg²⁺ cause hardness." },
        { prompt: "Temporary hardness gets its name because it can be removed by…", options: ["simple boiling", "adding acid", "electrolysis", "distillation only"], correctIndex: 0, explanation: "Boiling removes it." },
        { prompt: "A large-scale method to remove all hardness uses…", options: ["ion-exchange resins", "sieves", "magnets", "filters only"], correctIndex: 0, explanation: "Ion exchange removes Ca²⁺/Mg²⁺." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between soft and hard water, and name the ions that cause hardness.", answerKey: "Soft water lathers easily with soap; hard water lathers poorly and forms a scum. Hardness is caused by dissolved calcium (Ca²⁺) and magnesium (Mg²⁺) ions. Award marks for the soft/hard distinction and the ions.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Temporary hardness of water:", options: ["Can be removed by boiling", "Cannot be removed at all", "Is caused by sodium ions", "Is removed only by distillation"], correctIndex: 0, answerKey: "Boiling decomposes the hydrogen carbonates, removing temporary hardness.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Which removes both temporary and permanent hardness?", options: ["Adding sodium carbonate (washing soda)", "Boiling only", "Cooling", "Adding acid"], correctIndex: 0, answerKey: "Washing soda precipitates Ca²⁺/Mg²⁺ as carbonates.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Write an equation showing how boiling removes temporary hardness.", answerKey: "Ca(HCO₃)₂ → CaCO₃ + H₂O + CO₂ (on heating; the insoluble calcium carbonate is deposited as scale). Award marks for the correct equation and product identification.", marks: 3 },
        { type: "ESSAY", prompt: "Explain the difference between temporary and permanent hardness of water and describe methods used to soften hard water, with their advantages and disadvantages of hard water.", answerKey: "A full answer explains temporary hardness (caused by hydrogen carbonates of calcium/magnesium, removed by boiling: Ca(HCO₃)₂ → CaCO₃ + H₂O + CO₂) and permanent hardness (caused by sulfates and chlorides of calcium/magnesium, not removed by boiling). Softening methods: boiling (temporary only), adding washing soda (Na₂CO₃, precipitates Ca²⁺/Mg²⁺ as insoluble carbonates — both types), and ion-exchange resin (swaps Ca²⁺/Mg²⁺ for Na⁺/H⁺). Disadvantages of hard water: wastes soap (scum), scale in kettles/boilers/pipes. Advantages: supplies calcium for teeth/bones, better taste, less dissolving of lead pipes. Award marks for the two types with cause/removal, softening methods and advantages/disadvantages.", marks: 6 },
      ],
    },
  ],
};
