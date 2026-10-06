import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 12,
// Semester One, Period III. This period covers two syllabus topics whose
// CONTENTS items each become one lesson topic. TOPIC 1 (Chemistry, Industry and
// the Environment): 1. Historical development & classification of the chemical
// industry; 2. Raw materials & siting; 3. Heavy and fine chemicals; 4. Air,
// water and soil pollution; 5. Greenhouse effect, acid rain and ozone
// depletion; 6. Biodegradable and non-biodegradable pollutants; 7.
// Biotechnology. TOPIC 2 (Chemistry of Selected Metals): 8. Sodium and its
// compounds; 9. Calcium and its compounds; 10. Reactivity of iron and
// aluminium; 11. Copper and its compounds.
export const chemistryG12P3: PeriodContent = {
  grade: 12,
  number: 3,
  title: "Chemistry, Industry and the Environment; Chemistry of Selected Metals",
  summary:
    "Period III of the MoE Grade 12 Chemistry syllabus. Learners study the chemical industry (its development, classification, raw materials, siting and the distinction between heavy and fine chemicals), its effects on the environment (air, water and soil pollution, the greenhouse effect, acid rain, ozone depletion and biodegradable versus non-biodegradable pollutants) and biotechnology (fermentation and its products), then the chemistry of selected metals — sodium, calcium and copper and their compounds, and the reactivity of iron and aluminium.",
  topics: [
    {
      // source: LibreTexts — 2.6 Industrially Important Chemicals (Averill) (https://chem.libretexts.org/Bookshelves/General_Chemistry/Book%3A_General_Chemistry%3A_Principles_Patterns_and_Applications_(Averill)/02%3A_Molecules_Ions_and_Chemical_Formulas/2.06%3A_Industrially_Important_Chemicals)
      slug: "development-and-classification-of-the-chemical-industry",
      title: "Development and Classification of the Chemical Industry",
      objective:
        "By the end of the topic, learners should be able to outline the historical development of industry and describe the general characteristics and classification of the chemical industry. (MoE Grade 12 Period III, Topic 1, CONTENTS 1.)",
      estimatedMinutes: 100,
      notes: `## Historical development of industry

- Industry moved from **cottage/handicraft** production to large-scale **factory** production during the **Industrial Revolution**.
- The **chemical industry** grew to supply acids, alkalis, fertilisers, dyes and, later, plastics and pharmaceuticals.
- Modern chemical industry turns **raw materials** into useful products on a large scale.

## Characteristics of the chemical industry

- Converts raw materials (feedstocks) into products through chemical reactions.
- Capital-intensive; uses continuous or batch processes; produces main products and **by-products**.
- Aims for high **yield**, low cost, safety and reduced waste.

## Classification of the chemical industry

| Sector | Products |
| --- | --- |
| Basic/heavy inorganic | sulfuric acid, ammonia, chlorine, sodium hydroxide |
| Petrochemical | ethene, propene, benzene from crude oil |
| Polymers | plastics, fibres, rubber |
| Fertilisers | ammonium and phosphate fertilisers |
| Fine/specialty | dyes, drugs, cosmetics, flavours |

## Common errors and misconceptions

- **All chemical products are made in one type of plant** — the industry has many sectors.
- **By-products are useless** — many by-products are sold or reused.
- **Bigger yield always means better** — cost, safety and waste also matter.`,
      workedExample: `**Task.** Classify each of these into the correct chemical-industry sector: (a) sulfuric acid, (b) polythene, (c) a hair dye, (d) ammonium nitrate.

**Step 1 — Recall the sectors**
Heavy inorganic, petrochemical, polymers, fertilisers, and fine/specialty chemicals.

**Step 2 — Match each product**
- (a) Sulfuric acid → **heavy (basic) inorganic** chemical (made in huge quantity).
- (b) Polythene → **polymers** sector (a plastic).
- (c) Hair dye → **fine/specialty** chemical (small quantity, high value).
- (d) Ammonium nitrate → **fertiliser** sector.

**Conclusion.** Products of the chemical industry fall into distinct sectors according to their scale and use — from bulk heavy chemicals like sulfuric acid to fine chemicals like dyes.`,
      quiz: [
        { prompt: "The large-scale move from handicraft to factory production is called the…", options: ["Industrial Revolution", "Green Revolution", "Digital Revolution", "Agricultural Revolution"], correctIndex: 0, explanation: "Industrialisation created large factories." },
        { prompt: "The chemical industry converts raw materials into…", options: ["useful products", "only waste", "pure elements only", "energy only"], correctIndex: 0, explanation: "It makes useful chemical products." },
        { prompt: "Raw materials fed into a chemical process are called…", options: ["feedstocks", "products", "catalysts", "by-products"], correctIndex: 0, explanation: "Feedstocks are the starting materials." },
        { prompt: "Sulfuric acid belongs to the … sector.", options: ["heavy inorganic", "fine chemicals", "cosmetics", "food"], correctIndex: 0, explanation: "A bulk basic inorganic chemical." },
        { prompt: "Plastics and fibres are products of the … sector.", options: ["polymers", "fertilisers", "petrochemical feedstock only", "dyes"], correctIndex: 0, explanation: "Polymers sector makes plastics." },
        { prompt: "Ethene and benzene from crude oil belong to the … industry.", options: ["petrochemical", "fertiliser", "pharmaceutical", "glass"], correctIndex: 0, explanation: "Petrochemicals come from petroleum." },
        { prompt: "A material made in small amounts but of high value is a…", options: ["fine chemical", "heavy chemical", "feedstock", "by-product"], correctIndex: 0, explanation: "Fine/specialty chemicals are high value, low volume." },
        { prompt: "Substances formed alongside the main product are…", options: ["by-products", "reactants", "catalysts", "feedstocks"], correctIndex: 0, explanation: "By-products form in addition to the main product." },
        { prompt: "Ammonium nitrate is used mainly as a…", options: ["fertiliser", "fuel", "dye", "solvent"], correctIndex: 0, explanation: "It is a nitrogen fertiliser." },
        { prompt: "A goal of the chemical industry is high…", options: ["yield at low cost", "waste", "energy loss", "pollution"], correctIndex: 0, explanation: "Efficient, safe, low-waste production." },
        { prompt: "Cosmetics and drugs are examples of … chemicals.", options: ["fine/specialty", "heavy", "feedstock", "waste"], correctIndex: 0, explanation: "Fine chemicals include drugs and cosmetics." },
        { prompt: "The chemical industry is described as … intensive.", options: ["capital", "labour only", "water only", "gas only"], correctIndex: 0, explanation: "It needs large capital investment." },
        { prompt: "Chlorine and sodium hydroxide are … chemicals.", options: ["heavy inorganic", "fine", "organic fuels", "food"], correctIndex: 0, explanation: "Bulk inorganic chemicals." },
        { prompt: "A continuous process runs…", options: ["without stopping", "once only", "by hand", "in tiny amounts"], correctIndex: 0, explanation: "Continuous processes operate steadily." },
        { prompt: "Which best defines the chemical industry?", options: ["turning raw materials into products by chemical reactions", "mining metals only", "growing crops", "generating electricity only"], correctIndex: 0, explanation: "Chemical transformation of raw materials." },
        { prompt: "Dyes are classified as…", options: ["fine chemicals", "heavy chemicals", "fuels", "fertilisers"], correctIndex: 0, explanation: "Dyes are specialty/fine chemicals." },
        { prompt: "The largest-quantity industrial chemical is often…", options: ["sulfuric acid", "gold", "a vitamin", "perfume"], correctIndex: 0, explanation: "Sulfuric acid is produced in the largest quantity." },
        { prompt: "Fertilisers supply plants mainly with…", options: ["nitrogen and phosphorus", "carbon only", "chlorine only", "oxygen only"], correctIndex: 0, explanation: "N and P are key nutrients." },
        { prompt: "Industrial development increased demand for chemicals such as…", options: ["acids, alkalis and fertilisers", "diamonds only", "gemstones only", "wood only"], correctIndex: 0, explanation: "Industry needs bulk chemicals." },
        { prompt: "A modern chemical plant aims to reduce…", options: ["waste and pollution", "products", "profit", "yield"], correctIndex: 0, explanation: "Lower waste is a key goal." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State three characteristics of the chemical industry.", answerKey: "Any three of: converts raw materials/feedstocks into products by chemical reactions; capital-intensive; uses continuous or batch processes; produces main products and by-products; aims for high yield, low cost, safety and reduced waste. One mark each up to three.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is a heavy (basic) chemical?", options: ["Sulfuric acid", "A perfume", "A hair dye", "A vitamin tablet"], correctIndex: 0, answerKey: "Sulfuric acid is a bulk heavy chemical.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The petrochemical sector obtains its feedstock mainly from:", options: ["Crude oil", "Limestone", "Air only", "Seawater only"], correctIndex: 0, answerKey: "Petrochemicals come from petroleum/crude oil.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Name two sectors of the chemical industry and give one product of each.", answerKey: "Any two, e.g. heavy inorganic (sulfuric acid, ammonia), petrochemical (ethene), polymers (polythene), fertilisers (ammonium nitrate), fine/specialty (dyes, drugs). Award a mark for each sector correctly paired with a product.", marks: 2 },
        { type: "ESSAY", prompt: "Describe the historical development of the chemical industry and explain how it is classified, giving examples of products in each main sector.", answerKey: "A full answer traces the shift from small-scale handicraft to large-scale factory production during the Industrial Revolution, and the growth of the chemical industry to supply acids, alkalis, fertilisers, dyes, plastics and pharmaceuticals. It classifies the industry into sectors — heavy/basic inorganic (sulfuric acid, ammonia, chlorine, sodium hydroxide), petrochemical (ethene, benzene from crude oil), polymers (plastics, fibres), fertilisers (ammonium/phosphate), and fine/specialty (dyes, drugs, cosmetics) — with examples. Award marks for the historical development and for the classification with examples.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 13.15 Feedstocks and Reagents (Green Chemistry, Manahan) (https://chem.libretexts.org/Bookshelves/Environmental_Chemistry/Green_Chemistry_and_the_Ten_Commandments_of_Sustainability_(Manahan)/13%3A_The_Anthrosphere_Industrial_Ecology_and_Green_Chemistry/13.15%3A_Feedstocks_and_Reagents)
      slug: "raw-materials-and-siting-of-chemical-industries",
      title: "Raw Materials and Siting of Chemical Industries",
      objective:
        "By the end of the topic, learners should be able to describe the raw materials of chemical industries in Liberia and the factors that determine the siting of a chemical plant. (MoE Grade 12 Period III, Topic 1, CONTENTS 2.)",
      estimatedMinutes: 90,
      notes: `## Raw materials (feedstocks)

- **Raw material / feedstock** — the main ingredient converted into a chemical product.
- Common feedstocks: **crude oil and natural gas** (petrochemicals), **limestone** (cement, lime), **air** (nitrogen, oxygen), **water**, **salt** (chlorine, NaOH), **ores** (metals), **sulfur** (sulfuric acid), and **agricultural materials** (latex, palm oil, cassava).
- In Liberia: iron ore, rubber (latex), palm oil, timber, limestone, water and gold are important raw materials.

## Factors that determine the siting of a chemical industry

1. **Nearness to raw materials** — reduces transport cost (heavy or bulky feedstocks).
2. **Availability of energy/power** — chemical plants need much energy.
3. **Water supply** — for reactions, cooling and cleaning.
4. **Transport links** — roads, rail, ports for moving materials and products.
5. **Labour** — skilled and unskilled workers.
6. **Market** — nearness to where products are sold.
7. **Waste disposal** — safe removal of effluents; environmental rules.
8. **Land** — flat, affordable land away from housing.

## Common errors and misconceptions

- **Only raw materials matter** — energy, water, transport and market all count.
- **Any land will do** — siting must consider safety, waste and the community.
- **Air and water are not raw materials** — both are important feedstocks (e.g. nitrogen from air).`,
      workedExample: `**Task.** A company plans a cement factory. Suggest, with reasons, three factors it should consider when choosing a site.

**Step 1 — Recall the siting factors**
Raw materials, energy, water, transport, labour, market, waste disposal, land.

**Step 2 — Apply to a cement factory (uses bulky limestone)**
1. **Nearness to limestone** — limestone is heavy and bulky, so being close cuts transport costs.
2. **Good transport links** — roads/rail to move cement to construction markets.
3. **Water and power supply** — needed for processing and running kilns.

**Conclusion.** Because limestone is bulky and cement making is energy-intensive, the plant is best sited near the limestone source, with reliable power, water and transport to market.`,
      quiz: [
        { prompt: "A raw material converted into a product is also called a…", options: ["feedstock", "catalyst", "by-product", "solvent"], correctIndex: 0, explanation: "Feedstock is the main ingredient." },
        { prompt: "The main feedstock for petrochemicals is…", options: ["crude oil and natural gas", "limestone", "gold", "salt only"], correctIndex: 0, explanation: "Petrochemicals come from oil and gas." },
        { prompt: "Nitrogen and oxygen can be obtained from…", options: ["air", "limestone", "salt", "ore"], correctIndex: 0, explanation: "Air is a feedstock for N₂ and O₂." },
        { prompt: "Chlorine and sodium hydroxide are made from…", options: ["salt (brine)", "limestone", "sulfur", "latex"], correctIndex: 0, explanation: "Electrolysis of brine (NaCl)." },
        { prompt: "Which is an important raw material in Liberia?", options: ["iron ore", "uranium only", "platinum only", "coal only"], correctIndex: 0, explanation: "Iron ore is a key Liberian resource." },
        { prompt: "Sulfuric acid is made from the raw material…", options: ["sulfur", "salt", "limestone", "air only"], correctIndex: 0, explanation: "Sulfur is oxidised to make sulfuric acid." },
        { prompt: "Siting near raw materials mainly reduces…", options: ["transport cost", "product quality", "safety", "yield"], correctIndex: 0, explanation: "Less transport of bulky feedstock." },
        { prompt: "Chemical plants need a large supply of … for cooling and reactions.", options: ["water", "gold", "salt", "oil only"], correctIndex: 0, explanation: "Water is used widely in processes." },
        { prompt: "Which is a siting factor?", options: ["availability of power", "colour of the building", "name of the owner", "time of year"], correctIndex: 0, explanation: "Energy supply is essential." },
        { prompt: "Good roads, rail and ports provide…", options: ["transport links", "raw materials", "labour", "energy"], correctIndex: 0, explanation: "Transport moves materials and products." },
        { prompt: "Siting a plant near its market reduces the cost of…", options: ["distributing products", "buying land", "hiring managers", "cooling"], correctIndex: 0, explanation: "Closeness to buyers cuts delivery cost." },
        { prompt: "Limestone is the raw material for…", options: ["cement and lime", "chlorine", "ammonia", "petrol"], correctIndex: 0, explanation: "Cement/lime come from limestone." },
        { prompt: "Palm oil and latex are examples of … raw materials.", options: ["agricultural", "mineral only", "gaseous", "synthetic"], correctIndex: 0, explanation: "They come from crops." },
        { prompt: "Waste disposal is a siting factor because plants produce…", options: ["effluents that must be handled safely", "no waste at all", "only pure water", "only gold"], correctIndex: 0, explanation: "Effluent disposal must meet rules." },
        { prompt: "A plant needs land that is…", options: ["flat, affordable and away from housing", "expensive and central", "on a steep hill", "in a residential area"], correctIndex: 0, explanation: "Safe, suitable land is required." },
        { prompt: "Which resource is NOT typically a chemical feedstock?", options: ["sunlight for lighting offices", "crude oil", "salt", "limestone"], correctIndex: 0, explanation: "Office lighting is not a feedstock." },
        { prompt: "Labour as a siting factor means availability of…", options: ["skilled and unskilled workers", "raw sulfur", "electricity", "roads"], correctIndex: 0, explanation: "Workers are needed to run the plant." },
        { prompt: "Bulky, heavy raw materials favour siting…", options: ["close to the raw material source", "far from everything", "in cities only", "underground"], correctIndex: 0, explanation: "Cuts cost of moving heavy feedstock." },
        { prompt: "Iron ore is the raw material used to make…", options: ["iron and steel", "glass", "soap", "petrol"], correctIndex: 0, explanation: "Ore is smelted to iron/steel." },
        { prompt: "Water from air, salt and ores are all examples of…", options: ["raw materials for industry", "finished products", "pollutants only", "catalysts"], correctIndex: 0, explanation: "They are industrial feedstocks." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name four raw materials used by chemical industries and a product each yields.", answerKey: "Any four, e.g. crude oil → petrochemicals/plastics; limestone → cement/lime; salt (brine) → chlorine and NaOH; air → nitrogen/oxygen; sulfur → sulfuric acid; iron ore → iron/steel; latex → rubber. Award a mark for each raw material correctly paired with a product.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which pair of raw materials and product is correct?", options: ["Salt → chlorine and sodium hydroxide", "Limestone → petrol", "Air → gold", "Sulfur → cement"], correctIndex: 0, answerKey: "Electrolysis of brine gives chlorine and NaOH.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "A factory using bulky limestone is best sited:", options: ["Near the limestone source", "Far from all resources", "In a housing estate", "On a steep mountainside"], correctIndex: 0, answerKey: "Bulky feedstock favours nearness to the source.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "List four factors that determine where a chemical plant is built.", answerKey: "Any four of: nearness to raw materials; energy/power supply; water supply; transport links; labour; market; waste disposal; suitable/affordable land. One mark each up to four.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the factors that a company must consider when siting a chemical industry, using a Liberian example such as iron, rubber or cement.", answerKey: "A strong answer explains the key siting factors — nearness to raw materials (to cut transport of bulky feedstocks), energy/power supply (plants are energy-intensive), water supply (reactions and cooling), transport links (roads, rail, ports), labour, nearness to market, safe waste disposal and suitable land — and applies them to a Liberian example (e.g. an iron/steel or cement plant sited near ore/limestone with transport to port; a rubber plant near plantations). Award marks for several relevant factors with reasoning and a suitable example.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 2.6 Industrially Important Chemicals (Averill) (https://chem.libretexts.org/Bookshelves/General_Chemistry/Book%3A_General_Chemistry%3A_Principles_Patterns_and_Applications_(Averill)/02%3A_Molecules_Ions_and_Chemical_Formulas/2.06%3A_Industrially_Important_Chemicals)
      slug: "heavy-and-fine-chemicals",
      title: "Heavy and Fine Chemicals",
      objective:
        "By the end of the topic, learners should be able to distinguish between heavy (bulk) chemicals and fine chemicals. (MoE Grade 12 Period III, Topic 1, CONTENTS 3.)",
      estimatedMinutes: 80,
      notes: `## Heavy (bulk) chemicals

- **Heavy chemicals** — made in **very large quantities** (tonnes), relatively **cheap**, and sold in **impure/bulk** form.
- Used as **feedstocks** for other industries.
- Examples: **sulfuric acid, ammonia, sodium hydroxide, chlorine, nitric acid, cement, fertilisers**.

## Fine (specialty) chemicals

- **Fine chemicals** — made in **small quantities**, of **high purity** and **high value**, for a specific use.
- Examples: **drugs (medicines), dyes, perfumes, food additives, cosmetics, reagents**.

## Comparison

| Feature | Heavy chemicals | Fine chemicals |
| --- | --- | --- |
| Quantity | very large (tonnes) | small |
| Purity | often lower/bulk | very high |
| Price per unit | low | high |
| Example | sulfuric acid | a medicine |

## Common errors and misconceptions

- **"Heavy" means dense** — it refers to the **large quantity** made, not density.
- **Fine chemicals are cheap because small** — they are usually **expensive** per unit.
- **Both are the same industry** — they differ in scale, purity and value.`,
      workedExample: `**Task.** Classify each as a heavy or a fine chemical and justify: (a) sulfuric acid, (b) aspirin, (c) ammonia, (d) a perfume.

**Step 1 — Recall the definitions**
Heavy = bulk, cheap, made in tonnes; fine = small quantity, high purity, high value.

**Step 2 — Classify**
- (a) Sulfuric acid → **heavy** (produced in the largest quantity of any chemical).
- (b) Aspirin → **fine** (a pure medicine made in smaller amounts).
- (c) Ammonia → **heavy** (huge tonnage for fertilisers).
- (d) Perfume → **fine** (small quantity, high value, high purity).

**Conclusion.** Bulk feedstocks like sulfuric acid and ammonia are heavy chemicals; high-value, high-purity products like aspirin and perfume are fine chemicals.`,
      quiz: [
        { prompt: "Heavy chemicals are made in…", options: ["very large quantities", "tiny quantities", "no quantity", "equal amounts to fine chemicals"], correctIndex: 0, explanation: "Heavy = bulk, made in tonnes." },
        { prompt: "Fine chemicals are usually of … purity.", options: ["high", "low", "zero", "variable only"], correctIndex: 0, explanation: "Fine chemicals are high purity." },
        { prompt: "Which is a heavy chemical?", options: ["sulfuric acid", "a perfume", "a medicine", "a dye"], correctIndex: 0, explanation: "Sulfuric acid is a bulk chemical." },
        { prompt: "Which is a fine chemical?", options: ["a drug", "ammonia", "cement", "chlorine"], correctIndex: 0, explanation: "Drugs are fine chemicals." },
        { prompt: "The word 'heavy' in heavy chemicals refers to…", options: ["large quantity produced", "high density", "dark colour", "heavy weight per bottle"], correctIndex: 0, explanation: "It means large-scale production." },
        { prompt: "Fine chemicals are typically … per unit than heavy chemicals.", options: ["more expensive", "cheaper", "the same price", "free"], correctIndex: 0, explanation: "High value per unit." },
        { prompt: "Ammonia is classed as a … chemical.", options: ["heavy", "fine", "specialty", "food additive"], correctIndex: 0, explanation: "Huge tonnage for fertilisers." },
        { prompt: "A dye is an example of a … chemical.", options: ["fine", "heavy", "bulk", "feedstock"], correctIndex: 0, explanation: "Dyes are specialty/fine chemicals." },
        { prompt: "Heavy chemicals are often used as … for other industries.", options: ["feedstocks", "medicines", "perfumes", "final consumer goods"], correctIndex: 0, explanation: "Bulk chemicals feed other processes." },
        { prompt: "Which describes fine chemicals?", options: ["small quantity, high purity, high value", "large quantity, low value", "made in tonnes, cheap", "impure feedstocks"], correctIndex: 0, explanation: "Fine chemicals: small, pure, valuable." },
        { prompt: "Cement is a … chemical.", options: ["heavy", "fine", "pharmaceutical", "food"], correctIndex: 0, explanation: "Made in bulk." },
        { prompt: "A food additive is a … chemical.", options: ["fine", "heavy", "feedstock", "cement type"], correctIndex: 0, explanation: "Small quantity, high purity." },
        { prompt: "Sodium hydroxide and chlorine are…", options: ["heavy chemicals", "fine chemicals", "drugs", "perfumes"], correctIndex: 0, explanation: "Bulk industrial chemicals." },
        { prompt: "Which is TRUE?", options: ["heavy chemicals are cheaper per unit than fine chemicals", "fine chemicals are made in tonnes", "heavy chemicals are always pure", "fine chemicals are feedstocks"], correctIndex: 0, explanation: "Bulk chemicals are low cost per unit." },
        { prompt: "Perfumes are made in … quantities.", options: ["small", "very large", "tonnes", "unlimited"], correctIndex: 0, explanation: "Fine chemicals are low volume." },
        { prompt: "Nitric acid used to make fertilisers is a … chemical.", options: ["heavy", "fine", "cosmetic", "drug"], correctIndex: 0, explanation: "Bulk production." },
        { prompt: "Fine chemicals are made for a … use.", options: ["specific", "general bulk", "feedstock", "waste"], correctIndex: 0, explanation: "Targeted, specialty applications." },
        { prompt: "The chemical produced in the largest quantity worldwide is often…", options: ["sulfuric acid", "aspirin", "perfume", "a vitamin"], correctIndex: 0, explanation: "Sulfuric acid tops production." },
        { prompt: "Which pairing is correct?", options: ["heavy → chlorine; fine → medicine", "heavy → perfume; fine → cement", "heavy → dye; fine → ammonia", "heavy → drug; fine → sulfuric acid"], correctIndex: 0, explanation: "Chlorine is heavy; a medicine is fine." },
        { prompt: "High-value cosmetics are classed as…", options: ["fine chemicals", "heavy chemicals", "bulk feedstocks", "fertilisers"], correctIndex: 0, explanation: "Fine/specialty chemicals." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between heavy and fine chemicals.", answerKey: "Heavy (bulk) chemicals are made in very large quantities (tonnes), are relatively cheap and often used as feedstocks (e.g. sulfuric acid, ammonia). Fine chemicals are made in small quantities, are of high purity and high value for a specific use (e.g. drugs, dyes, perfumes). Award marks for quantity/value contrast and examples.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is a fine chemical?", options: ["A medicine", "Sulfuric acid", "Cement", "Ammonia"], correctIndex: 0, answerKey: "Medicines are fine chemicals.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "'Heavy' in heavy chemicals refers to:", options: ["The large quantity produced", "The density", "The colour", "The weight of one bottle"], correctIndex: 0, answerKey: "It means large-scale, bulk production.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Classify sulfuric acid, aspirin, ammonia and perfume as heavy or fine chemicals.", answerKey: "Sulfuric acid — heavy; aspirin — fine; ammonia — heavy; perfume — fine. Award a mark for each correct classification (up to 2).", marks: 2 },
        { type: "ESSAY", prompt: "Compare heavy and fine chemicals in terms of quantity, purity, cost and use, giving examples of each.", answerKey: "A full answer contrasts heavy chemicals (very large quantity/tonnage, lower purity, cheap per unit, used as feedstocks for other industries — e.g. sulfuric acid, ammonia, chlorine, cement) with fine chemicals (small quantity, high purity, high value, made for specific uses — e.g. drugs, dyes, perfumes, food additives). Award marks for the four points of comparison and appropriate examples.", marks: 6 },
      ],
    },
    {
      // source: Biology LibreTexts — 1.16 Air, Water and Soil / Pollution (Environmental Science, Ha & Schleiger) (https://bio.libretexts.org/Bookshelves/Ecology/AP_Environmental_Science/01%3A_Chapters/1.16%3A_Air_Water_and_Soil)
      slug: "air-water-and-soil-pollution",
      title: "Air, Water and Soil Pollution",
      objective:
        "By the end of the topic, learners should be able to describe the sources, effects and control of air, water and soil pollution and the effect of industry on the environment. (MoE Grade 12 Period III, Topic 1, CONTENTS 4.)",
      estimatedMinutes: 120,
      notes: `## Pollution

- **Pollution** — the release of harmful substances (**pollutants**) into air, water or soil.
- Industry, vehicles, farming and homes are major sources.

## Air pollution

- **Common air pollutants:** carbon monoxide (CO), sulfur dioxide (SO₂), nitrogen oxides (NOₓ), particulates (smoke/dust), ground-level ozone and lead.
- **Sources:** burning fossil fuels, vehicle exhausts, factories, bush burning.
- **Effects:** respiratory illness, acid rain, smog, and climate change.
- **Control:** catalytic converters, scrubbers/filters, cleaner fuels, laws/emission limits.

## Water pollution

- **Pollutants:** sewage, heavy metals, oil, fertilisers, pesticides, plastics and industrial effluent.
- **Effects:** disease from pathogens; **eutrophication** (fertilisers cause algal blooms that use up oxygen, killing fish); poisoning by heavy metals.
- **Control:** treat sewage and effluent before discharge, control fertiliser/pesticide use, ban dumping.

## Soil pollution

- **Pollutants:** pesticides, heavy metals, industrial waste, plastics and oil spills.
- **Effects:** loss of soil fertility, harm to crops and to organisms, poisons entering the food chain.
- **Control:** proper waste disposal, reduce agrochemicals, treat contaminated land.

## Effect of industry on the environment

- Industry can cause air, water and soil pollution, deforestation and habitat loss if uncontrolled.
- Good practice: treat waste, recycle, obey environmental regulations.

## Common errors and misconceptions

- **Only factories pollute** — vehicles, farms and homes also pollute.
- **Diluting waste solves pollution** — pollutants still cause harm; treatment is needed.
- **Fertilisers only help** — excess fertiliser causes eutrophication.`,
      workedExample: `**Task.** A river below a town has dead fish, green scum on the surface, and high nutrient levels. (a) Name the process. (b) Explain how it kills fish. (c) Suggest one control.

**Step 1 — Identify the problem**
High nutrients (from sewage/fertiliser run-off) plus algal scum indicate **eutrophication**.

**Step 2 — How it kills fish**
1. Nutrients cause **algae to grow rapidly (algal bloom)**.
2. Algae die and are decomposed by bacteria, which **use up dissolved oxygen**.
3. Low oxygen (hypoxia) **suffocates the fish**.

**Step 3 — A control measure**
Treat sewage and reduce fertiliser run-off before it reaches the river.

**Conclusion.** Nutrient pollution causes eutrophication: algal blooms deplete oxygen and kill fish; treating sewage and controlling fertiliser use prevents it.`,
      quiz: [
        { prompt: "A harmful substance released into the environment is a…", options: ["pollutant", "nutrient", "catalyst", "product"], correctIndex: 0, explanation: "Pollutants cause pollution." },
        { prompt: "Which gas from vehicles is a common air pollutant?", options: ["carbon monoxide", "nitrogen (N₂)", "argon", "helium"], correctIndex: 0, explanation: "CO comes from incomplete combustion." },
        { prompt: "Sulfur dioxide in the air can cause…", options: ["acid rain", "clean water", "more oxygen", "cooling only"], correctIndex: 0, explanation: "SO₂ forms acid rain." },
        { prompt: "Catalytic converters reduce pollution from…", options: ["vehicle exhausts", "rivers", "soil", "the ocean floor"], correctIndex: 0, explanation: "They clean exhaust gases." },
        { prompt: "Excess fertiliser washing into rivers causes…", options: ["eutrophication", "distillation", "neutralisation", "sublimation"], correctIndex: 0, explanation: "Nutrients trigger algal blooms." },
        { prompt: "In eutrophication, fish die because of…", options: ["lack of oxygen", "too much oxygen", "too much salt", "cold water"], correctIndex: 0, explanation: "Decomposing algae use up oxygen." },
        { prompt: "A major source of water pollution is…", options: ["untreated sewage", "clean rain", "pure spring water", "sunlight"], correctIndex: 0, explanation: "Sewage carries pathogens and nutrients." },
        { prompt: "Heavy metals in water are dangerous because they are…", options: ["poisonous", "nutritious", "colourful only", "harmless"], correctIndex: 0, explanation: "They poison living things." },
        { prompt: "Soil pollution can be caused by…", options: ["pesticides and heavy metals", "clean compost only", "rainwater", "sunlight"], correctIndex: 0, explanation: "Agrochemicals and metals contaminate soil." },
        { prompt: "Particulate pollution consists of…", options: ["smoke and dust particles", "pure oxygen", "water vapour only", "nitrogen gas"], correctIndex: 0, explanation: "Tiny solid particles in air." },
        { prompt: "Air pollution can worsen … in people.", options: ["respiratory illness", "eyesight only", "height", "hair growth"], correctIndex: 0, explanation: "Pollutants damage the lungs." },
        { prompt: "Scrubbers and filters in factories reduce…", options: ["air pollution", "soil erosion", "noise only", "sunlight"], correctIndex: 0, explanation: "They trap pollutant gases and particles." },
        { prompt: "Treating effluent before discharge helps control…", options: ["water pollution", "acid rain", "ozone depletion", "deforestation"], correctIndex: 0, explanation: "Treatment removes pollutants from water." },
        { prompt: "Oil spills mainly pollute…", options: ["water and soil", "the ozone layer", "the stratosphere", "outer space"], correctIndex: 0, explanation: "Oil harms water and land." },
        { prompt: "Bush burning contributes mainly to … pollution.", options: ["air", "groundwater only", "soil fertility gain", "no"], correctIndex: 0, explanation: "It releases smoke and gases." },
        { prompt: "Which is a control for air pollution?", options: ["using cleaner fuels", "dumping waste in rivers", "burning more coal", "removing filters"], correctIndex: 0, explanation: "Cleaner fuels emit fewer pollutants." },
        { prompt: "Nitrogen oxides in air come mainly from…", options: ["high-temperature combustion in engines", "photosynthesis", "evaporation of water", "rainfall"], correctIndex: 0, explanation: "NOₓ forms in hot engines." },
        { prompt: "Plastic waste is a pollutant because it is…", options: ["non-biodegradable", "a nutrient", "quickly absorbed", "a gas"], correctIndex: 0, explanation: "It persists and harms wildlife." },
        { prompt: "Uncontrolled industry can cause…", options: ["air, water and soil pollution", "no environmental effect", "cleaner air", "more forests"], correctIndex: 0, explanation: "Industry can pollute all three." },
        { prompt: "The best long-term answer to pollution is to…", options: ["treat and reduce waste and obey regulations", "hide the waste", "dilute it in the sea", "ignore it"], correctIndex: 0, explanation: "Prevention and treatment reduce harm." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name two air pollutants and state one effect of each.", answerKey: "Any two, e.g. carbon monoxide (toxic, reduces oxygen carriage in blood); sulfur dioxide (causes acid rain/respiratory harm); nitrogen oxides (acid rain, smog); particulates (respiratory illness). Award a mark for each pollutant with a correct effect.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Eutrophication of a river is caused mainly by:", options: ["Excess nutrients from fertilisers and sewage", "Too much dissolved oxygen", "Clean rainwater", "High salt from the sea"], correctIndex: 0, answerKey: "Nutrient enrichment causes algal blooms and oxygen depletion.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Which device reduces air pollution from cars?", options: ["Catalytic converter", "Sewage tank", "Fertiliser spreader", "Water filter"], correctIndex: 0, answerKey: "Catalytic converters clean exhaust gases.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "State two sources and two control measures for water pollution.", answerKey: "Sources (any two): untreated sewage, industrial effluent, fertiliser/pesticide run-off, oil spills, heavy metals, plastics. Controls (any two): treat sewage/effluent before discharge, control fertiliser and pesticide use, ban dumping/enforce laws, clean up spills. Award a mark for each valid source and control (up to 4 items, capped at marks).", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the effect of industry on the environment, covering air, water and soil pollution, and suggest how the pollution can be controlled.", answerKey: "A strong answer explains that industry (and vehicles, farming and homes) can pollute: air (CO, SO₂, NOₓ, particulates from burning fuels — causing respiratory illness, acid rain, smog, climate change), water (sewage, effluent, heavy metals, fertilisers causing eutrophication, oil, plastics — causing disease and fish kills) and soil (pesticides, heavy metals, industrial waste, oil — reducing fertility and entering the food chain). Controls include treating waste/effluent before discharge, scrubbers/filters and catalytic converters, cleaner fuels, controlled use of agrochemicals, recycling and obeying environmental regulations. Award marks for coverage of the three media, effects and control measures.", marks: 6 },
      ],
    },
    {
      // source: Chemistry LibreTexts — 10.2.3 Stratospheric Ozone and Ozone Depletion (https://chem.libretexts.org/Courses/South_Puget_Sound_Community_College/CHEM_110%3A_Chemical_Concepts/10%3A_Radiation_Electromagnetic_Waves_Biological_Effects_of_UV_Radiation/10.02%3A_Content_in_Context/10.2.03%3A_Stratospheric_Ozone_and_Ozone_Depletion)
      slug: "greenhouse-effect-acid-rain-and-ozone-depletion",
      title: "Greenhouse Effect, Acid Rain and Ozone Depletion",
      objective:
        "By the end of the topic, learners should be able to explain the greenhouse effect and global warming, acid rain, and the depletion of the ozone layer, with their causes and effects. (MoE Grade 12 Period III, Topic 1, CONTENTS 5.)",
      estimatedMinutes: 120,
      notes: `## The greenhouse effect and global warming

- **Greenhouse gases** (CO₂, methane CH₄, water vapour, nitrous oxide) let in sunlight but **absorb infrared** (heat) radiated from the Earth, keeping it warm.
- Burning fossil fuels raises CO₂, strengthening the effect and causing **global warming / climate change**.
- **Effects:** rising temperatures, melting ice, rising sea levels, changed rainfall and extreme weather.

\`\`\`svg The greenhouse effect
<svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sunlight passes through the atmosphere and infrared heat is trapped by greenhouse gases">
  <rect x="10" y="95" width="200" height="25" fill="none" stroke="#334155"/>
  <line x1="40" y1="10" x2="70" y2="95" stroke="#334155"/>
  <line x1="90" y1="10" x2="110" y2="95" stroke="#334155"/>
  <path d="M120 95 Q140 60 130 20" fill="none" stroke="#334155" stroke-dasharray="4 3"/>
  <path d="M150 95 Q170 60 190 80" fill="none" stroke="#334155" stroke-dasharray="4 3"/>
  <text x="14" y="112" font-size="10" fill="#334155">Earth</text>
</svg>
\`\`\`

## Acid rain

- **Acid rain** forms when **sulfur dioxide (SO₂)** and **nitrogen oxides (NOₓ)** from burning fossil fuels dissolve in rain to form **sulfuric and nitric acids**.
- **Effects:** kills fish in lakes, damages forests and crops, corrodes buildings and metals.
- **Control:** remove sulfur from fuels, use scrubbers, reduce fossil-fuel burning.

## Ozone layer depletion

- The **ozone layer** in the stratosphere absorbs harmful **ultraviolet (UV)** radiation.
- **Chlorofluorocarbons (CFCs)** rise to the stratosphere; UV breaks them to give **chlorine radicals** that **catalytically destroy ozone (O₃)**.
- **Effects:** more UV reaches Earth, causing skin cancer, eye damage and crop harm.
- **Control:** the **Montreal Protocol** phased out CFCs.

## Common errors and misconceptions

- **Confusing ozone depletion with the greenhouse effect** — different causes (CFCs vs greenhouse gases) and effects (UV vs warming).
- **Ozone at ground level is good** — ground-level ozone is a pollutant; only the stratospheric layer protects us.
- **Acid rain and global warming are the same** — they are separate problems.`,
      workedExample: `**Task.** Explain how CFCs destroy the ozone layer and state one consequence and one control measure.

**Step 1 — What CFCs are**
Chlorofluorocarbons (CFCs) were used in aerosols, refrigerants and foams; they are very stable.

**Step 2 — How they destroy ozone**
1. CFCs rise into the stratosphere.
2. **UV light breaks a C–Cl bond**, releasing a **chlorine radical (Cl•)**.
3. Cl• reacts with ozone: Cl• + O₃ → ClO• + O₂; the chlorine is regenerated, so **one Cl• destroys many O₃ molecules** (catalytic).

**Step 3 — Consequence and control**
- **Consequence:** thinner ozone layer lets more UV through, increasing skin cancer and eye damage.
- **Control:** the Montreal Protocol banned CFCs, replacing them with safer alternatives.

**Conclusion.** UV splits CFCs into chlorine radicals that catalytically destroy ozone, increasing harmful UV at the surface; phasing out CFCs protects the layer.`,
      quiz: [
        { prompt: "Greenhouse gases trap … radiated from the Earth.", options: ["infrared (heat)", "visible light only", "radio waves", "sound"], correctIndex: 0, explanation: "They absorb infrared." },
        { prompt: "The main greenhouse gas from burning fossil fuels is…", options: ["carbon dioxide", "oxygen", "nitrogen", "argon"], correctIndex: 0, explanation: "CO₂ is the chief greenhouse gas." },
        { prompt: "A rise in average global temperature is called…", options: ["global warming", "acid rain", "ozone depletion", "eutrophication"], correctIndex: 0, explanation: "Enhanced greenhouse effect warms Earth." },
        { prompt: "Which is also a greenhouse gas?", options: ["methane", "helium", "neon", "argon"], correctIndex: 0, explanation: "Methane (CH₄) is a greenhouse gas." },
        { prompt: "Acid rain is caused mainly by … and nitrogen oxides.", options: ["sulfur dioxide", "carbon dioxide", "oxygen", "chlorine"], correctIndex: 0, explanation: "SO₂ and NOₓ form acids in rain." },
        { prompt: "Acid rain forms sulfuric and … acids.", options: ["nitric", "hydrochloric", "carbonic only", "ethanoic"], correctIndex: 0, explanation: "NOₓ gives nitric acid." },
        { prompt: "One effect of acid rain is…", options: ["killing fish in lakes", "cooling the sun", "cleaning metals", "raising oxygen"], correctIndex: 0, explanation: "Acidified lakes kill fish." },
        { prompt: "The ozone layer protects us by absorbing…", options: ["ultraviolet radiation", "infrared", "visible light", "sound"], correctIndex: 0, explanation: "Stratospheric ozone blocks UV." },
        { prompt: "Ozone is destroyed by … from CFCs.", options: ["chlorine radicals", "oxygen molecules", "nitrogen", "water"], correctIndex: 0, explanation: "Cl• catalytically destroys O₃." },
        { prompt: "CFCs were used in…", options: ["aerosols and refrigerants", "drinking water", "fertilisers", "steel making"], correctIndex: 0, explanation: "Refrigerants, aerosols, foams." },
        { prompt: "More UV at the surface can cause…", options: ["skin cancer", "stronger bones", "better eyesight", "cooler weather"], correctIndex: 0, explanation: "UV harms skin and eyes." },
        { prompt: "The treaty that phased out CFCs is the…", options: ["Montreal Protocol", "Kyoto Bridge", "Geneva Accord", "Paris Fuel Law"], correctIndex: 0, explanation: "Montreal Protocol (1987) banned CFCs." },
        { prompt: "One chlorine radical can destroy … ozone molecules.", options: ["many", "only one", "none", "exactly two"], correctIndex: 0, explanation: "It acts as a catalyst." },
        { prompt: "Ground-level ozone is…", options: ["a pollutant", "protective", "a nutrient", "harmless"], correctIndex: 0, explanation: "Only stratospheric ozone protects us." },
        { prompt: "A control for the greenhouse effect is to…", options: ["reduce fossil-fuel burning", "burn more coal", "cut down forests", "release more CO₂"], correctIndex: 0, explanation: "Lower CO₂ emissions." },
        { prompt: "Acid rain can be reduced by removing … from fuels.", options: ["sulfur", "carbon dioxide", "water", "oxygen"], correctIndex: 0, explanation: "Desulfurising fuels cuts SO₂." },
        { prompt: "Melting ice and rising sea levels are effects of…", options: ["global warming", "acid rain", "ozone depletion", "soil pollution"], correctIndex: 0, explanation: "Warming melts ice caps." },
        { prompt: "Trees are damaged and buildings corroded by…", options: ["acid rain", "the ozone layer", "greenhouse gases directly", "clean rain"], correctIndex: 0, explanation: "Acid rain corrodes and damages." },
        { prompt: "The ozone layer is found in the…", options: ["stratosphere", "core", "ocean", "soil"], correctIndex: 0, explanation: "Ozone layer is in the stratosphere." },
        { prompt: "Which statement is TRUE?", options: ["ozone depletion and global warming are different problems", "they are the same problem", "both are caused only by CFCs", "both increase UV protection"], correctIndex: 0, explanation: "Different causes and effects." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain the greenhouse effect and how human activity intensifies it.", answerKey: "Greenhouse gases (CO₂, methane, water vapour, nitrous oxide) allow sunlight through the atmosphere but absorb infrared (heat) radiated from the Earth's surface, keeping the planet warm. Burning fossil fuels and deforestation raise atmospheric CO₂ (and other gases), strengthening this effect and causing global warming/climate change. Award marks for the trapping of infrared and the human increase in greenhouse gases.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Acid rain is formed mainly from:", options: ["Sulfur dioxide and nitrogen oxides", "Carbon dioxide and oxygen", "CFCs and ozone", "Methane and argon"], correctIndex: 0, answerKey: "SO₂ and NOₓ dissolve in rain to form sulfuric and nitric acids.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The ozone layer is important because it absorbs:", options: ["Ultraviolet radiation", "Infrared radiation", "Visible light", "Radio waves"], correctIndex: 0, answerKey: "Stratospheric ozone blocks harmful UV.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "State two effects of acid rain and one way to reduce it.", answerKey: "Effects (any two): kills fish/acidifies lakes; damages forests and crops; corrodes buildings, statues and metals. Reduction: remove sulfur from fuels, fit scrubbers, or burn less fossil fuel. Award marks for two effects and one control.", marks: 3 },
        { type: "ESSAY", prompt: "Describe how the ozone layer is depleted by CFCs, the consequences of this depletion, and the international action taken.", answerKey: "A full answer explains that CFCs (from aerosols, refrigerants, foams) are stable and rise to the stratosphere, where UV light breaks a C–Cl bond to release chlorine radicals; these catalytically destroy ozone (Cl• + O₃ → ClO• + O₂), so one radical destroys many O₃ molecules, thinning the layer. Consequences: more UV reaches the surface, increasing skin cancer, eye damage (cataracts) and harm to crops and marine life. International action: the Montreal Protocol (1987) phased out CFC production, replacing them with safer alternatives. Award marks for the radical mechanism, the consequences and the Montreal Protocol.", marks: 6 },
      ],
    },
    {
      // source: Biology LibreTexts — 16.1 Waste Generation (Introduction to Environmental Science) (https://bio.libretexts.org/Courses/Bakersfield_College/Introduction_to_Environmental_Science_3e/16%3A_Solid_Waste_Management/16.01%3A_Waste_Generation)
      slug: "biodegradable-and-non-biodegradable-pollutants",
      title: "Biodegradable and Non-biodegradable Pollutants",
      objective:
        "By the end of the topic, learners should be able to distinguish between biodegradable and non-biodegradable pollutants, with examples and their environmental effects. (MoE Grade 12 Period III, Topic 1, CONTENTS 6.)",
      estimatedMinutes: 80,
      notes: `## Biodegradable pollutants

- **Biodegradable** waste can be **broken down by microbes** (bacteria, fungi) into harmless substances.
- Examples: food scraps, paper, cotton, wood, plant and animal remains, sewage.
- Managed by **composting** or natural decay; releases nutrients back to the soil.

## Non-biodegradable pollutants

- **Non-biodegradable** waste **cannot be broken down** (or only extremely slowly) by microbes.
- Examples: plastics, glass, most metals, polythene bags, tins, DDT and many pesticides.
- They **accumulate**, litter the land and water, harm wildlife, and can persist for hundreds of years.

## Comparison

| Feature | Biodegradable | Non-biodegradable |
| --- | --- | --- |
| Broken down by microbes? | yes | no (or very slow) |
| Persistence | short | very long |
| Examples | food, paper, cotton | plastic, glass, metal |
| Disposal | composting, decay | recycling, careful disposal |

## Management

- **Reduce, reuse, recycle** non-biodegradable waste.
- Compost biodegradable waste; avoid single-use plastics.

## Common errors and misconceptions

- **All waste rots away** — non-biodegradable waste persists.
- **Biodegradable means instantly gone** — it still takes time and needs the right conditions.
- **Recycling works for everything** — reducing use is often better than relying on recycling.`,
      workedExample: `**Task.** Sort these into biodegradable and non-biodegradable, and state why plastics are an environmental problem: banana peel, plastic bottle, newspaper, glass jar, cotton cloth.

**Step 1 — Recall the test**
Biodegradable = microbes can break it down; non-biodegradable = they cannot.

**Step 2 — Sort**
- **Biodegradable:** banana peel, newspaper, cotton cloth.
- **Non-biodegradable:** plastic bottle, glass jar.

**Step 3 — Why plastics are a problem**
Plastics are non-biodegradable, so they **accumulate**, litter land and water for hundreds of years, block drains and harm animals that swallow them.

**Conclusion.** Natural materials (peel, paper, cotton) are biodegradable; plastic and glass are not and persist as pollution, which is why plastics are reduced, reused and recycled.`,
      quiz: [
        { prompt: "Biodegradable waste can be broken down by…", options: ["microbes", "sunlight only", "magnets", "nothing"], correctIndex: 0, explanation: "Bacteria and fungi decompose it." },
        { prompt: "Which is biodegradable?", options: ["food scraps", "plastic bag", "glass bottle", "aluminium can"], correctIndex: 0, explanation: "Food decays naturally." },
        { prompt: "Which is non-biodegradable?", options: ["plastic", "paper", "cotton", "wood"], correctIndex: 0, explanation: "Plastic resists microbial breakdown." },
        { prompt: "Non-biodegradable waste tends to…", options: ["accumulate in the environment", "vanish quickly", "become nutrients", "turn to compost"], correctIndex: 0, explanation: "It persists and builds up." },
        { prompt: "Composting is used for … waste.", options: ["biodegradable", "non-biodegradable", "radioactive", "glass"], correctIndex: 0, explanation: "Organic matter can be composted." },
        { prompt: "A polythene bag is…", options: ["non-biodegradable", "biodegradable", "a nutrient", "edible"], correctIndex: 0, explanation: "Polythene persists for a long time." },
        { prompt: "Biodegradable waste returns … to the soil.", options: ["nutrients", "plastic", "metal", "glass"], correctIndex: 0, explanation: "Decay recycles nutrients." },
        { prompt: "Which pair are both biodegradable?", options: ["paper and cotton", "glass and plastic", "metal and glass", "plastic and tin"], correctIndex: 0, explanation: "Both are natural, decomposable materials." },
        { prompt: "DDT and many pesticides are problematic because they are…", options: ["non-biodegradable and persist", "harmless nutrients", "quickly decomposed", "gases"], correctIndex: 0, explanation: "They persist and enter the food chain." },
        { prompt: "The best strategy for non-biodegradable waste is…", options: ["reduce, reuse, recycle", "burn it in the open", "bury it in rivers", "ignore it"], correctIndex: 0, explanation: "The 3 Rs cut accumulation." },
        { prompt: "Plastics can persist in the environment for…", options: ["hundreds of years", "a few hours", "one day", "one week"], correctIndex: 0, explanation: "They degrade extremely slowly." },
        { prompt: "Which material is broken down fastest by microbes?", options: ["banana peel", "glass", "steel", "plastic"], correctIndex: 0, explanation: "Organic peel decomposes quickly." },
        { prompt: "Glass is classified as…", options: ["non-biodegradable", "biodegradable", "compostable", "organic"], correctIndex: 0, explanation: "Glass does not decompose biologically." },
        { prompt: "Sewage is an example of a … pollutant.", options: ["biodegradable", "non-biodegradable", "metallic", "radioactive"], correctIndex: 0, explanation: "Organic sewage can be broken down." },
        { prompt: "Non-biodegradable litter can harm animals that…", options: ["swallow or get tangled in it", "eat plants", "drink clean water", "breathe air"], correctIndex: 0, explanation: "Wildlife is injured by plastic waste." },
        { prompt: "Recycling is especially important for…", options: ["metals, glass and plastics", "food scraps", "leaves", "sewage"], correctIndex: 0, explanation: "Non-biodegradables should be recycled." },
        { prompt: "Which is TRUE?", options: ["biodegradable waste decomposes faster than non-biodegradable", "all waste decomposes equally fast", "plastic decomposes in days", "glass is biodegradable"], correctIndex: 0, explanation: "Biodegradables break down much faster." },
        { prompt: "Wood is classed as…", options: ["biodegradable", "non-biodegradable", "a metal", "a plastic"], correctIndex: 0, explanation: "Wood rots naturally." },
        { prompt: "Aluminium cans are…", options: ["non-biodegradable but recyclable", "biodegradable", "compostable", "edible"], correctIndex: 0, explanation: "Metals persist but can be recycled." },
        { prompt: "Reducing single-use plastics mainly cuts … waste.", options: ["non-biodegradable", "biodegradable", "compost", "organic"], correctIndex: 0, explanation: "Plastics are non-biodegradable." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define biodegradable and non-biodegradable pollutants, giving one example of each.", answerKey: "Biodegradable pollutants can be broken down by microorganisms into harmless substances (e.g. food waste, paper, cotton, sewage). Non-biodegradable pollutants cannot be broken down by microbes, or only extremely slowly, so they persist (e.g. plastics, glass, metals, DDT). Award marks for both definitions and examples.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Which of these is non-biodegradable?", options: ["A plastic bottle", "A banana peel", "Newspaper", "Cotton cloth"], correctIndex: 0, answerKey: "Plastic is non-biodegradable.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Biodegradable waste is best managed by:", options: ["Composting", "Dumping in rivers", "Burning plastics", "Burying in landfill forever"], correctIndex: 0, answerKey: "Composting uses natural decay of organic matter.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain why non-biodegradable pollutants are a serious environmental problem.", answerKey: "Non-biodegradable pollutants cannot be broken down by microbes, so they accumulate and persist in the environment for very long times (hundreds of years for plastics). They litter land and water, block drains, harm wildlife that swallow or get tangled in them, and some (e.g. pesticides, heavy metals) enter and build up in the food chain. Award marks for persistence/accumulation and specific harms.", marks: 3 },
        { type: "ESSAY", prompt: "Compare biodegradable and non-biodegradable pollutants and discuss how each type should be managed to protect the environment.", answerKey: "A full answer contrasts biodegradable pollutants (broken down by microbes, short persistence, e.g. food, paper, cotton, sewage) with non-biodegradable pollutants (not decomposed by microbes, very long persistence, e.g. plastics, glass, metals, DDT). Management: biodegradable waste can be composted or allowed to decay, returning nutrients to soil; non-biodegradable waste should be reduced, reused and recycled, with single-use plastics avoided and safe disposal enforced. Award marks for the comparison and appropriate management of each type.", marks: 6 },
      ],
    },
    {
      // source: Biology LibreTexts — 7.4 Industrial Applications of Microbial Biotechnology (https://bio.libretexts.org/Courses/West_Los_Angeles_College/Biotechnology/07%3A_Microbial_Biotechnology/7.04%3A_Industrial_Applications_of_Microbial_Biotechnology)
      slug: "biotechnology",
      title: "Biotechnology",
      objective:
        "By the end of the topic, learners should be able to describe biotechnology and fermentation, and outline its uses in food processing, fuels and other products. (MoE Grade 12 Period III, Topic 1, CONTENTS 7 and 8.)",
      estimatedMinutes: 110,
      notes: `## What is biotechnology?

- **Biotechnology** — the use of **living organisms** (especially microbes such as yeast and bacteria) or their enzymes to make useful products.
- Old examples: brewing, baking, cheese and yoghurt making. Modern examples: medicines, fuels, enzymes.

## Fermentation

- **Fermentation** — microorganisms break down sugars, usually **without oxygen (anaerobically)**, to give products such as ethanol or lactic acid.
- **Alcoholic fermentation (yeast):** C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (glucose → ethanol + carbon dioxide).
- Used to make palm wine, cane juice ("cane") drinks, beer and other alcoholic beverages.

## Uses in food processing and products

- **Bread and farina** — yeast/fermentation makes dough rise (CO₂) and processes cassava.
- **Drinks and brewing** — beer, wine, palm wine from fermentation of sugars.
- **Food testing** — Ninhydrin, Xanthoproteic, Biuret and Millon's tests detect proteins in food.
- **Medical products** — insulin, antibiotics (e.g. penicillin) produced using microbes.
- **Chemicals and polymers** — ethanol and some polymers from biotechnology.
- **Fuels** — **biogas (methane)** from anaerobic digestion of waste; **gasohol** (ethanol + gasoline).

## Biotechnology services

- **Mining:** **bioleaching** — bacteria extract metals (e.g. copper) from low-grade ores.
- **Waste treatment:** microbes break down sewage and organic waste.
- **Enzyme technology:** enzymes used in detergents, food and industry.

## Common errors and misconceptions

- **Fermentation needs oxygen** — alcoholic fermentation is anaerobic.
- **Biotechnology is only modern** — brewing and baking are ancient biotechnology.
- **Biogas is carbon dioxide** — the useful fuel in biogas is mainly methane (CH₄).`,
      workedExample: `**Task.** Cassava is fermented with yeast to make an alcoholic drink. (a) Write the equation for alcoholic fermentation. (b) State the conditions. (c) Name the gas produced.

**Step 1 — The reaction**
Yeast converts glucose (from the cassava starch) into ethanol and carbon dioxide:
C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.

**Step 2 — Conditions**
Warm temperature, **absence of air (anaerobic)**, and yeast (which provides the enzymes).

**Step 3 — Gas produced**
The gas released is **carbon dioxide (CO₂)** — it turns limewater milky and makes the mixture bubble.

**Conclusion.** Anaerobic fermentation of cassava sugars by yeast produces ethanol and carbon dioxide, the basis of local alcoholic drinks and of bread-making.`,
      quiz: [
        { prompt: "Biotechnology uses … to make useful products.", options: ["living organisms or their enzymes", "only metals", "only electricity", "pure acids only"], correctIndex: 0, explanation: "Microbes/enzymes make products." },
        { prompt: "Fermentation by yeast usually happens…", options: ["without oxygen (anaerobically)", "only with lots of oxygen", "in a vacuum with no life", "in strong acid only"], correctIndex: 0, explanation: "Alcoholic fermentation is anaerobic." },
        { prompt: "Alcoholic fermentation converts glucose into ethanol and…", options: ["carbon dioxide", "oxygen", "hydrogen", "nitrogen"], correctIndex: 0, explanation: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂." },
        { prompt: "The microorganism used to brew alcohol and raise bread is…", options: ["yeast", "algae", "a virus", "a fern"], correctIndex: 0, explanation: "Yeast ferments sugars." },
        { prompt: "Dough rises because fermentation releases…", options: ["carbon dioxide", "oxygen", "chlorine", "steam only"], correctIndex: 0, explanation: "CO₂ bubbles make dough rise." },
        { prompt: "Biogas used as a fuel is mainly…", options: ["methane", "oxygen", "carbon dioxide", "hydrogen"], correctIndex: 0, explanation: "Biogas is chiefly methane." },
        { prompt: "Gasohol is a mixture of gasoline and…", options: ["ethanol", "water", "methane", "diesel"], correctIndex: 0, explanation: "Ethanol blended into petrol." },
        { prompt: "Extracting metals from ores using bacteria is called…", options: ["bioleaching", "smelting", "electrolysis", "distillation"], correctIndex: 0, explanation: "Bioleaching uses microbes." },
        { prompt: "Penicillin, an antibiotic, is produced using…", options: ["microorganisms", "crude oil", "limestone", "salt"], correctIndex: 0, explanation: "Microbes (moulds) make penicillin." },
        { prompt: "Insulin can be made by…", options: ["biotechnology using microbes", "burning coal", "distilling water", "mining"], correctIndex: 0, explanation: "Genetically engineered microbes make insulin." },
        { prompt: "The Biuret test detects…", options: ["proteins", "starch", "fats", "metals"], correctIndex: 0, explanation: "Biuret is a protein test." },
        { prompt: "Palm wine is produced by … of palm sap.", options: ["fermentation", "distillation", "filtration", "evaporation"], correctIndex: 0, explanation: "Sugars ferment to alcohol." },
        { prompt: "Microbes breaking down sewage is an example of…", options: ["waste treatment", "bioleaching", "brewing", "baking"], correctIndex: 0, explanation: "Biotechnology in waste treatment." },
        { prompt: "Enzymes are used in … to remove stains.", options: ["detergents", "cement", "glass", "petrol"], correctIndex: 0, explanation: "Enzyme technology in detergents." },
        { prompt: "An ancient example of biotechnology is…", options: ["brewing and baking", "nuclear power", "plastics", "steel making"], correctIndex: 0, explanation: "Brewing/baking are old biotechnology." },
        { prompt: "Biogas is made by the anaerobic digestion of…", options: ["organic waste", "glass", "metal", "sand"], correctIndex: 0, explanation: "Microbes digest waste to methane." },
        { prompt: "The gas from fermentation turns limewater…", options: ["milky", "blue", "red", "green"], correctIndex: 0, explanation: "CO₂ turns limewater milky." },
        { prompt: "Cheese and yoghurt are made using…", options: ["bacteria", "plastics", "acids only", "metals"], correctIndex: 0, explanation: "Bacteria ferment milk." },
        { prompt: "Bioleaching is especially useful for … ores.", options: ["low-grade", "pure gold bars", "gaseous", "liquid"], correctIndex: 0, explanation: "It extracts metal from poor ores." },
        { prompt: "The product ethanol from fermentation can be used as a…", options: ["fuel and chemical", "metal", "fertiliser only", "building stone"], correctIndex: 0, explanation: "Ethanol is a fuel and feedstock." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define biotechnology and fermentation.", answerKey: "Biotechnology is the use of living organisms (especially microbes such as yeast and bacteria) or their enzymes to make useful products. Fermentation is the breakdown of sugars by microorganisms, usually anaerobically, to give products such as ethanol (and CO₂) or lactic acid. Award a mark for each definition.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Alcoholic fermentation of glucose produces:", options: ["Ethanol and carbon dioxide", "Methane and water", "Oxygen and hydrogen", "Glucose and oxygen"], correctIndex: 0, answerKey: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Extracting metals from ores using bacteria is called:", options: ["Bioleaching", "Smelting", "Electrolysis", "Cracking"], correctIndex: 0, answerKey: "Bioleaching uses microbes to extract metals.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Give four uses of biotechnology.", answerKey: "Any four of: making bread/farina; brewing beer, wine and palm wine; producing medicines (insulin, penicillin); making biogas (methane) and gasohol; food testing for proteins; bioleaching of metals; waste/sewage treatment; enzyme technology in detergents. One mark each up to four.", marks: 4 },
        { type: "ESSAY", prompt: "Describe how fermentation is used to process food and produce fuel, writing the equation for alcoholic fermentation and naming its products and conditions.", answerKey: "A full answer explains that yeast (in the absence of air) ferments sugars: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂, needing warmth, anaerobic conditions and yeast enzymes. In food processing this raises bread (CO₂), processes cassava into farina, and makes beer, wine and palm wine. For fuel: ethanol is blended with gasoline as gasohol, and anaerobic digestion of organic waste yields biogas (mainly methane) used for cooking and electricity. Award marks for the equation, products/conditions, food-processing uses and fuel production.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — 20.4 The Alkali Metals (Group 1) (Averill) (https://chem.libretexts.org/Bookshelves/General_Chemistry/Book%3A_General_Chemistry%3A_Principles_Patterns_and_Applications_(Averill)/20%3A_Periodic_Trends_and_the_s-Block_Elements/20.04%3A_The_Alkali_Metals_(Group_1))
      slug: "sodium-and-its-compounds",
      title: "Sodium and its Compounds",
      objective:
        "By the end of the topic, learners should be able to describe the properties and uses of sodium and its compounds (NaCl, NaOH, Na₂CO₃, NaHCO₃, NaNO₃, NaClO₃ and Na₂SO₄). (MoE Grade 12 Period III, Topic 2, CONTENTS 1.)",
      estimatedMinutes: 110,
      notes: `## Sodium — a Group 1 (alkali) metal

- **Properties:** soft, silvery, low density (floats on water), low melting point; **very reactive**, stored under oil.
- Forms **+1** ions (Na⁺) by losing its single outer electron.
- **Reaction with water:** 2Na + 2H₂O → 2NaOH + H₂ (vigorous, exothermic; the hydrogen may burn).
- **Reaction with oxygen:** burns with a yellow flame to form sodium oxide/peroxide.
- Gives a **golden-yellow flame** in a flame test.

## Important sodium compounds

| Compound | Name | Main use |
| --- | --- | --- |
| NaCl | sodium chloride (common salt) | food, source of Cl₂ and NaOH |
| NaOH | sodium hydroxide (caustic soda) | soap, paper, cleaning |
| Na₂CO₃ | sodium carbonate (washing soda) | glass making, water softening |
| NaHCO₃ | sodium hydrogen carbonate (baking soda) | baking, antacid |
| NaNO₃ | sodium nitrate | fertiliser |
| NaClO₃ | sodium chlorate | weedkiller, bleaching |
| Na₂SO₄ | sodium sulfate | detergents, glass |

## Reactions of some compounds

- **NaHCO₃ on heating:** 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂ (used in baking; CO₂ makes cakes rise).
- **NaOH with acid:** NaOH + HCl → NaCl + H₂O (neutralisation).
- **Na₂CO₃ with acid:** Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂ (fizzing).

## Common errors and misconceptions

- **Sodium is stored in water** — no; it reacts violently with water, so it is stored under oil.
- **All sodium compounds are the same** — washing soda (Na₂CO₃) and baking soda (NaHCO₃) differ.
- **Sodium forms Na²⁺** — it forms Na⁺ (loses one electron).`,
      workedExample: `**Task.** A small piece of sodium is dropped into water containing universal indicator. (a) Write the equation. (b) State three observations. (c) Explain the indicator colour change.

**Step 1 — Equation**
2Na + 2H₂O → 2NaOH + H₂.

**Step 2 — Observations**
1. The sodium **floats** and moves about (low density; gas propels it).
2. It **fizzes** and may **melt into a ball / ignite** with a yellow flame (exothermic; H₂ released).
3. It gradually **disappears**.

**Step 3 — Indicator change**
Sodium hydroxide (an alkali) forms, so the universal indicator turns **blue/purple**, showing the solution is alkaline.

**Conclusion.** Sodium reacts vigorously with water to give sodium hydroxide and hydrogen; the alkaline NaOH turns the indicator blue/purple.`,
      quiz: [
        { prompt: "Sodium belongs to Group … of the periodic table.", options: ["1 (alkali metals)", "2", "7", "0"], correctIndex: 0, explanation: "Group 1 alkali metal." },
        { prompt: "Sodium forms ions with a charge of…", options: ["+1", "+2", "−1", "0"], correctIndex: 0, explanation: "Na loses one electron: Na⁺." },
        { prompt: "Sodium is stored under…", options: ["oil", "water", "acid", "air"], correctIndex: 0, explanation: "It reacts with air and water, so kept under oil." },
        { prompt: "Sodium reacting with water gives sodium hydroxide and…", options: ["hydrogen", "oxygen", "chlorine", "nitrogen"], correctIndex: 0, explanation: "2Na + 2H₂O → 2NaOH + H₂." },
        { prompt: "The flame colour of sodium is…", options: ["golden-yellow", "green", "blue", "red"], correctIndex: 0, explanation: "Sodium gives a yellow flame." },
        { prompt: "Common salt is…", options: ["NaCl", "NaOH", "Na₂CO₃", "NaNO₃"], correctIndex: 0, explanation: "Sodium chloride is common salt." },
        { prompt: "Caustic soda is…", options: ["NaOH", "NaCl", "NaHCO₃", "Na₂SO₄"], correctIndex: 0, explanation: "Sodium hydroxide = caustic soda." },
        { prompt: "Baking soda is…", options: ["NaHCO₃", "Na₂CO₃", "NaOH", "NaClO₃"], correctIndex: 0, explanation: "Sodium hydrogen carbonate." },
        { prompt: "Washing soda, used in glass making, is…", options: ["Na₂CO₃", "NaCl", "NaNO₃", "NaOH"], correctIndex: 0, explanation: "Sodium carbonate." },
        { prompt: "Heating NaHCO₃ produces water, sodium carbonate and…", options: ["CO₂", "H₂", "O₂", "Cl₂"], correctIndex: 0, explanation: "2NaHCO₃ → Na₂CO₃ + H₂O + CO₂." },
        { prompt: "Sodium hydroxide is used to make…", options: ["soap", "petrol", "steel", "cement"], correctIndex: 0, explanation: "NaOH is used in soap making." },
        { prompt: "NaOH + HCl gives water and…", options: ["NaCl", "Na₂CO₃", "NaNO₃", "NaOH"], correctIndex: 0, explanation: "Neutralisation forms sodium chloride." },
        { prompt: "Sodium is a … metal.", options: ["soft, silvery, reactive", "hard, dark, unreactive", "brittle non-metal", "dense yellow"], correctIndex: 0, explanation: "Soft, silvery and very reactive." },
        { prompt: "Sodium nitrate (NaNO₃) is used as a…", options: ["fertiliser", "fuel", "metal", "bleach only"], correctIndex: 0, explanation: "Provides nitrogen to plants." },
        { prompt: "Na₂CO₃ reacting with acid releases…", options: ["carbon dioxide", "hydrogen", "oxygen", "chlorine"], correctIndex: 0, explanation: "Carbonate + acid → CO₂." },
        { prompt: "Sodium chloride is a source of chlorine and…", options: ["sodium hydroxide", "sulfur", "iron", "calcium"], correctIndex: 0, explanation: "Electrolysis of brine gives Cl₂ and NaOH." },
        { prompt: "Baking soda is also used as a(n)…", options: ["antacid", "fuel", "metal polish only", "fertiliser"], correctIndex: 0, explanation: "NaHCO₃ neutralises stomach acid." },
        { prompt: "Sodium floats on water because it has…", options: ["low density", "high density", "no mass", "a magnetic core"], correctIndex: 0, explanation: "Group 1 metals are less dense than water." },
        { prompt: "Sodium sulfate (Na₂SO₄) is used in…", options: ["detergents and glass", "petrol", "fertiliser only", "batteries only"], correctIndex: 0, explanation: "Used in detergents/glass." },
        { prompt: "Sodium chlorate (NaClO₃) is used as a…", options: ["weedkiller/bleach", "food", "fuel", "metal"], correctIndex: 0, explanation: "Weedkiller and bleaching agent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State three physical properties of sodium and the charge on its ion.", answerKey: "Sodium is soft, silvery, and has low density (floats on water), with a low melting point and is very reactive. Its ion is Na⁺ (charge +1). Award marks for three properties and the +1 ion.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The products of sodium reacting with water are:", options: ["Sodium hydroxide and hydrogen", "Sodium chloride and oxygen", "Sodium oxide and water", "Sodium carbonate and CO₂"], correctIndex: 0, answerKey: "2Na + 2H₂O → 2NaOH + H₂.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Baking soda is:", options: ["NaHCO₃", "NaOH", "Na₂CO₃", "NaCl"], correctIndex: 0, answerKey: "Sodium hydrogen carbonate is baking soda.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Give the chemical formula and one use of: (a) sodium hydroxide, (b) sodium carbonate, (c) sodium chloride.", answerKey: "(a) NaOH — soap making/cleaning/paper. (b) Na₂CO₃ — glass making/water softening. (c) NaCl — food/source of chlorine and NaOH. Award a mark for each correct formula-and-use pair (up to 3).", marks: 3 },
        { type: "ESSAY", prompt: "Describe the reactivity of sodium and the uses of its main compounds (NaCl, NaOH, Na₂CO₃ and NaHCO₃).", answerKey: "A full answer describes sodium as a soft, silvery, low-density Group 1 metal that is very reactive, forming Na⁺, stored under oil, and reacting vigorously with water (2Na + 2H₂O → 2NaOH + H₂) and burning in oxygen with a yellow flame. Uses of compounds: NaCl (common salt — food, and raw material for chlorine and NaOH); NaOH (caustic soda — soap, paper, cleaning); Na₂CO₃ (washing soda — glass making, water softening); NaHCO₃ (baking soda — baking, where heating releases CO₂ to raise dough, and as an antacid). Award marks for reactivity and for the uses of the named compounds.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — Group 2: The Alkaline Earth Metals (https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Supplemental_Modules_and_Websites_(Inorganic_Chemistry)/Descriptive_Chemistry/Elements_Organized_by_Group/Group_02_Elements%3A_The_Alkaline_Earth_Metals)
      slug: "calcium-and-its-compounds",
      title: "Calcium and its Compounds",
      objective:
        "By the end of the topic, learners should be able to describe the properties and uses of calcium and its compounds (CaCO₃, CaO, CaSO₄, CaCl₂ and Ca(OH)₂). (MoE Grade 12 Period III, Topic 2, CONTENTS 2.)",
      estimatedMinutes: 110,
      notes: `## Calcium — a Group 2 (alkaline earth) metal

- **Properties:** silvery-white, harder and denser than Group 1 metals; **reactive** (less than sodium).
- Forms **+2** ions (Ca²⁺) by losing two outer electrons.
- **Reaction with water:** Ca + 2H₂O → Ca(OH)₂ + H₂ (steady, slower than sodium).
- Gives a **brick-red** flame in a flame test.

## Important calcium compounds

| Compound | Name | Main use |
| --- | --- | --- |
| CaCO₃ | calcium carbonate (limestone) | cement, building, making lime |
| CaO | calcium oxide (quicklime) | making cement/steel, drying agent |
| Ca(OH)₂ | calcium hydroxide (slaked lime) | neutralising acidic soil, limewater |
| CaSO₄ | calcium sulfate (gypsum) | plaster of Paris, blackboard chalk |
| CaCl₂ | calcium chloride | drying agent, de-icing roads |

## Key reactions (the lime cycle)

- **Thermal decomposition:** CaCO₃ → CaO + CO₂ (heat limestone to make quicklime).
- **Slaking:** CaO + H₂O → Ca(OH)₂ (quicklime + water → slaked lime).
- **Limewater test:** Ca(OH)₂ solution + CO₂ → CaCO₃ (turns milky) — the **test for carbon dioxide**.

## Uses

- Calcium compounds are central to **cement and construction**, **soil treatment** (raising pH), and **plaster**.

## Common errors and misconceptions

- **Calcium forms Ca⁺** — it forms Ca²⁺ (loses two electrons).
- **Quicklime and slaked lime are the same** — CaO (quicklime) reacts with water to give Ca(OH)₂ (slaked lime).
- **Limewater turning milky detects oxygen** — it detects carbon dioxide.`,
      workedExample: `**Task.** Limestone is heated strongly and the product is then added to water. (a) Write both equations. (b) Name the two products. (c) How would you show the gas from the first reaction is CO₂?

**Step 1 — Decomposition of limestone**
CaCO₃ → CaO + CO₂. The solid product is **calcium oxide (quicklime)**.

**Step 2 — Adding quicklime to water (slaking)**
CaO + H₂O → Ca(OH)₂. The product is **calcium hydroxide (slaked lime)**.

**Step 3 — Test for the gas**
Bubble the gas through **limewater**; if it turns **milky** (Ca(OH)₂ + CO₂ → CaCO₃), the gas is carbon dioxide.

**Conclusion.** Heating limestone gives quicklime and CO₂; adding water gives slaked lime; limewater turning milky confirms the CO₂ — the basis of the lime cycle used in cement and soil treatment.`,
      quiz: [
        { prompt: "Calcium belongs to Group … of the periodic table.", options: ["2 (alkaline earth metals)", "1", "7", "0"], correctIndex: 0, explanation: "Group 2 metal." },
        { prompt: "Calcium forms ions with a charge of…", options: ["+2", "+1", "−2", "0"], correctIndex: 0, explanation: "Ca loses two electrons: Ca²⁺." },
        { prompt: "Compared with sodium, calcium reacts with water…", options: ["less vigorously", "more explosively", "not at all", "identically"], correctIndex: 0, explanation: "Group 2 is less reactive than Group 1." },
        { prompt: "Calcium reacting with water gives hydrogen and…", options: ["calcium hydroxide", "calcium oxide", "calcium carbonate", "calcium chloride"], correctIndex: 0, explanation: "Ca + 2H₂O → Ca(OH)₂ + H₂." },
        { prompt: "The flame colour of calcium is…", options: ["brick-red", "yellow", "green", "blue"], correctIndex: 0, explanation: "Calcium gives a brick-red flame." },
        { prompt: "Limestone is…", options: ["CaCO₃", "CaO", "Ca(OH)₂", "CaCl₂"], correctIndex: 0, explanation: "Calcium carbonate is limestone." },
        { prompt: "Quicklime is…", options: ["CaO", "CaCO₃", "Ca(OH)₂", "CaSO₄"], correctIndex: 0, explanation: "Calcium oxide is quicklime." },
        { prompt: "Slaked lime is…", options: ["Ca(OH)₂", "CaO", "CaCO₃", "CaCl₂"], correctIndex: 0, explanation: "Calcium hydroxide is slaked lime." },
        { prompt: "Heating limestone produces quicklime and…", options: ["carbon dioxide", "hydrogen", "oxygen", "water"], correctIndex: 0, explanation: "CaCO₃ → CaO + CO₂." },
        { prompt: "Adding water to quicklime gives…", options: ["slaked lime", "limestone", "gypsum", "salt"], correctIndex: 0, explanation: "CaO + H₂O → Ca(OH)₂." },
        { prompt: "Limewater turning milky is the test for…", options: ["carbon dioxide", "oxygen", "hydrogen", "chlorine"], correctIndex: 0, explanation: "CO₂ forms a white CaCO₃ precipitate." },
        { prompt: "Plaster of Paris and chalk are forms of…", options: ["calcium sulfate", "calcium oxide", "calcium chloride", "calcium carbonate only"], correctIndex: 0, explanation: "CaSO₄ (gypsum)." },
        { prompt: "Calcium hydroxide is used to treat … soil.", options: ["acidic", "alkaline", "salty", "dry"], correctIndex: 0, explanation: "Slaked lime neutralises acid soil." },
        { prompt: "Calcium chloride is commonly used as a…", options: ["drying agent", "fuel", "fertiliser", "metal"], correctIndex: 0, explanation: "CaCl₂ absorbs water." },
        { prompt: "Limestone (CaCO₃) is mainly used to make…", options: ["cement and lime", "petrol", "soap", "steel wire"], correctIndex: 0, explanation: "Cement/construction and lime." },
        { prompt: "Calcium is a … metal.", options: ["silvery-white, fairly reactive", "brown, unreactive", "liquid at room temperature", "gaseous"], correctIndex: 0, explanation: "Silvery-white, reactive Group 2 metal." },
        { prompt: "In the lime cycle, slaked lime + CO₂ reforms…", options: ["calcium carbonate", "quicklime", "calcium chloride", "gypsum"], correctIndex: 0, explanation: "Ca(OH)₂ + CO₂ → CaCO₃." },
        { prompt: "Which compound is used to de-ice roads?", options: ["calcium chloride", "calcium carbonate", "quicklime", "gypsum"], correctIndex: 0, explanation: "CaCl₂ lowers the freezing point." },
        { prompt: "Calcium oxide can act as a … agent.", options: ["drying", "bleaching only", "reducing only", "fuel"], correctIndex: 0, explanation: "Quicklime absorbs water." },
        { prompt: "The thermal decomposition of calcium carbonate is used to make…", options: ["quicklime", "salt", "soap", "glass fibre"], correctIndex: 0, explanation: "CaCO₃ → CaO + CO₂." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the group of calcium, the charge on its ion, and its flame colour.", answerKey: "Calcium is in Group 2 (alkaline earth metals); its ion is Ca²⁺ (charge +2); its flame test colour is brick-red. Award a mark each up to three.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Heating limestone (CaCO₃) produces:", options: ["Calcium oxide and carbon dioxide", "Calcium hydroxide and hydrogen", "Calcium chloride and water", "Calcium sulfate and oxygen"], correctIndex: 0, answerKey: "CaCO₃ → CaO + CO₂.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Limewater turning milky is a test for:", options: ["Carbon dioxide", "Oxygen", "Hydrogen", "Ammonia"], correctIndex: 0, answerKey: "CO₂ forms insoluble CaCO₃, turning limewater milky.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Give the formula and one use of quicklime, slaked lime and gypsum.", answerKey: "Quicklime CaO — making cement/steel or as a drying agent. Slaked lime Ca(OH)₂ — neutralising acidic soil / limewater. Gypsum CaSO₄ — plaster of Paris / chalk. Award a mark for each correct formula-and-use pair.", marks: 3 },
        { type: "ESSAY", prompt: "Describe the lime cycle (limestone → quicklime → slaked lime → limestone) with equations, and give the uses of calcium compounds.", answerKey: "A full answer explains: heating limestone decomposes it, CaCO₃ → CaO + CO₂ (quicklime); adding water slakes it, CaO + H₂O → Ca(OH)₂ (slaked lime); slaked lime (limewater) absorbs carbon dioxide, Ca(OH)₂ + CO₂ → CaCO₃, completing the cycle (this is also the test for CO₂). Uses: limestone/quicklime in cement and construction and steel making; slaked lime to neutralise acidic soils; gypsum (CaSO₄) for plaster and chalk; calcium chloride as a drying/de-icing agent. Award marks for the three cycle equations and for a range of uses.", marks: 6 },
      ],
    },
    {
      // source: Chemistry LibreTexts (CK-12) — 11.8 Activity Series (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(CK-12)/11%3A_Chemical_Reactions/11.08%3A_Activity_Series)
      slug: "reactivity-of-iron-and-aluminium",
      title: "Reactivity of Iron and Aluminium",
      objective:
        "By the end of the topic, learners should be able to describe and compare the reactivity of iron and aluminium with air, water and acid using the reactivity series. (MoE Grade 12 Period III, Topic 2, CONTENTS 3.)",
      estimatedMinutes: 100,
      notes: `## The reactivity (activity) series

- The **reactivity series** lists metals in order of decreasing reactivity.
- A more reactive metal can **displace** a less reactive one from its compounds.
- Order (part): **K > Na > Ca > Mg > Al > Zn > Fe > (H) > Cu > Ag > Au**.
- **Aluminium is more reactive than iron**, but its behaviour is masked by an oxide layer.

## Reaction with air (oxygen)

- **Iron:** slowly reacts with air **and water** to form hydrated iron(III) oxide — **rust** (Fe₂O₃·xH₂O). Rusting needs both air and water.
- **Aluminium:** quickly forms a thin, **tough, unreactive layer of aluminium oxide (Al₂O₃)** that sticks to the surface and **protects** the metal underneath.

## Reaction with water

- **Iron:** does not react with cold water quickly, but rusts slowly in moist air; reacts with steam to give Fe₃O₄ + H₂.
- **Aluminium:** appears **unreactive with water** because the oxide layer protects it (even though the metal is reactive).

## Reaction with acid

- Both iron and aluminium are **above hydrogen** in the series, so both react with dilute acids to give a salt and **hydrogen gas**.
- Iron: Fe + 2HCl → FeCl₂ + H₂.
- Aluminium: 2Al + 6HCl → 2AlCl₃ + 3H₂ (once the oxide layer is broken).

## Why aluminium seems less reactive

- Aluminium is actually more reactive than iron, but its **protective oxide layer** makes it resist corrosion — which is why it is used for window frames, cans and aircraft.

## Common errors and misconceptions

- **Aluminium is less reactive than iron** — it is more reactive; the oxide layer just protects it.
- **Rusting needs only air** — iron needs both air and water to rust.
- **Metals below hydrogen react with acids** — only metals above hydrogen (like Fe and Al) give H₂ with acids.`,
      workedExample: `**Task.** Explain why aluminium, though more reactive than iron, does not corrode away, and predict what happens when each metal is added to dilute hydrochloric acid.

**Step 1 — The oxide layer**
Aluminium reacts rapidly with air to form a thin, tough layer of aluminium oxide (Al₂O₃) that clings to the surface and **seals** the metal, stopping further reaction. Iron's oxide (rust) flakes off, exposing fresh metal to corrode further.

**Step 2 — Reaction with dilute HCl**
Both metals are above hydrogen in the reactivity series, so both give a salt and hydrogen:
- Iron: Fe + 2HCl → FeCl₂ + H₂ (steady fizzing).
- Aluminium: 2Al + 6HCl → 2AlCl₃ + 3H₂ (fizzing once the oxide layer dissolves).

**Conclusion.** Aluminium resists corrosion because its oxide layer is protective, but with acid (which removes the oxide) it reacts vigorously — consistent with it being more reactive than iron.`,
      quiz: [
        { prompt: "The reactivity series lists metals in order of…", options: ["decreasing reactivity", "increasing mass", "alphabetical order", "colour"], correctIndex: 0, explanation: "Most reactive at the top." },
        { prompt: "A more reactive metal can … a less reactive one from its compound.", options: ["displace", "dissolve", "melt", "cool"], correctIndex: 0, explanation: "Displacement reactions." },
        { prompt: "Which is more reactive?", options: ["aluminium", "iron", "copper", "gold"], correctIndex: 0, explanation: "Al is above Fe in the series." },
        { prompt: "Rusting of iron needs air and…", options: ["water", "oil", "salt only", "sunlight"], correctIndex: 0, explanation: "Both air and water are required." },
        { prompt: "Rust is mainly…", options: ["hydrated iron(III) oxide", "iron sulfide", "iron chloride", "iron carbonate"], correctIndex: 0, explanation: "Fe₂O₃·xH₂O." },
        { prompt: "Aluminium resists corrosion because of a layer of…", options: ["aluminium oxide", "rust", "carbon", "salt"], correctIndex: 0, explanation: "Al₂O₃ protects the metal." },
        { prompt: "The aluminium oxide layer is…", options: ["tough and protective", "loose and flaky", "a gas", "reactive with air"], correctIndex: 0, explanation: "It seals the surface." },
        { prompt: "Both iron and aluminium react with dilute acid to give a salt and…", options: ["hydrogen", "oxygen", "carbon dioxide", "chlorine"], correctIndex: 0, explanation: "Metals above hydrogen release H₂." },
        { prompt: "Iron reacting with hydrochloric acid gives…", options: ["FeCl₂ + H₂", "FeCl₃ + O₂", "FeO + H₂O", "Fe₂O₃ + CO₂"], correctIndex: 0, explanation: "Fe + 2HCl → FeCl₂ + H₂." },
        { prompt: "Metals that react with acids to give hydrogen are … hydrogen in the series.", options: ["above", "below", "equal to", "unrelated to"], correctIndex: 0, explanation: "Only metals above H displace it." },
        { prompt: "Copper does not react with dilute acid because it is…", options: ["below hydrogen", "above sodium", "a gas", "magnetic"], correctIndex: 0, explanation: "Cu is below H in the series." },
        { prompt: "Why does aluminium appear unreactive with water?", options: ["its oxide layer protects it", "it is below copper", "it is a non-metal", "water does not touch it"], correctIndex: 0, explanation: "Oxide layer blocks reaction." },
        { prompt: "Iron reacts with steam to give hydrogen and…", options: ["Fe₃O₄", "FeCl₂", "Fe(OH)₂", "FeS"], correctIndex: 0, explanation: "3Fe + 4H₂O → Fe₃O₄ + 4H₂." },
        { prompt: "Aluminium is used for window frames and cans because it…", options: ["resists corrosion", "rusts fast", "is very heavy", "is magnetic"], correctIndex: 0, explanation: "Protective oxide gives durability." },
        { prompt: "Which metal rusts?", options: ["iron", "aluminium", "gold", "copper"], correctIndex: 0, explanation: "Rusting is specific to iron." },
        { prompt: "In the series K > Na > Ca > Mg > Al > Zn > Fe, the most reactive is…", options: ["potassium", "iron", "zinc", "aluminium"], correctIndex: 0, explanation: "Potassium is at the top." },
        { prompt: "Aluminium reacting fully with HCl gives…", options: ["AlCl₃ + H₂", "AlCl₃ + O₂", "Al₂O₃ + H₂O", "AlH₃ + Cl₂"], correctIndex: 0, explanation: "2Al + 6HCl → 2AlCl₃ + 3H₂." },
        { prompt: "The tendency of iron rust to flake off means…", options: ["fresh metal keeps corroding", "it protects the metal", "it stops corrosion", "it becomes aluminium"], correctIndex: 0, explanation: "Unlike Al₂O₃, rust does not protect." },
        { prompt: "A metal above hydrogen that reacts with acid is…", options: ["iron", "gold", "silver", "copper"], correctIndex: 0, explanation: "Iron is above H; the others are below." },
        { prompt: "Which statement is TRUE?", options: ["aluminium is more reactive than iron but corrodes less", "iron is more reactive than aluminium", "both are below hydrogen", "neither reacts with acid"], correctIndex: 0, explanation: "Al is more reactive but oxide-protected." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Place iron, aluminium, copper and hydrogen in order of decreasing reactivity.", answerKey: "Aluminium > (hydrogen is a reference) … the order of the metals is aluminium > iron > (hydrogen) > copper. A correct decreasing order such as aluminium, iron, hydrogen, copper earns full marks. Award marks for aluminium above iron and copper below hydrogen.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Iron rusts only when it is exposed to:", options: ["Both air and water", "Air alone", "Water alone", "Neither"], correctIndex: 0, answerKey: "Rusting needs oxygen and water.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Aluminium resists corrosion because:", options: ["A tough oxide layer protects the metal", "It is below hydrogen", "It never reacts with anything", "It is a non-metal"], correctIndex: 0, answerKey: "The Al₂O₃ layer seals the surface.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Write equations for the reactions of (a) iron and (b) aluminium with dilute hydrochloric acid.", answerKey: "(a) Fe + 2HCl → FeCl₂ + H₂. (b) 2Al + 6HCl → 2AlCl₃ + 3H₂. Award a mark for each correct balanced equation, and a mark for both producing hydrogen.", marks: 3 },
        { type: "ESSAY", prompt: "Compare the reactivity of iron and aluminium with air, water and acid, and explain why aluminium is used for items exposed to weather despite being more reactive than iron.", answerKey: "A full answer explains that aluminium is higher than iron in the reactivity series (more reactive). With air: iron rusts slowly (needs air and water, forming flaky hydrated iron(III) oxide that keeps exposing fresh metal), while aluminium quickly forms a thin, tough, adherent oxide layer (Al₂O₃) that protects the metal. With water: iron rusts in moist air/reacts with steam; aluminium appears unreactive because of its oxide layer. With acid: both, being above hydrogen, react to give a salt and hydrogen (Fe + 2HCl → FeCl₂ + H₂; 2Al + 6HCl → 2AlCl₃ + 3H₂). Aluminium is used for window frames, cans and aircraft because its protective oxide layer stops further corrosion, unlike iron's flaky rust. Award marks for the comparisons and the oxide-layer explanation.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts — Descriptive chemistry of copper / transition metals and copper(II) sulfate (https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Supplemental_Modules_and_Websites_(Inorganic_Chemistry)/Descriptive_Chemistry/Elements_Organized_by_Group)
      slug: "copper-and-its-compounds",
      title: "Copper and its Compounds",
      objective:
        "By the end of the topic, learners should be able to describe the properties and uses of copper and its compounds (CuSO₄, CuO and CuCl₂). (MoE Grade 12 Period III, Topic 2, CONTENTS 4.)",
      estimatedMinutes: 100,
      notes: `## Copper — a transition metal

- **Properties:** reddish-brown, shiny; good **conductor of heat and electricity**; malleable and ductile; **unreactive** (below hydrogen in the reactivity series).
- Forms **coloured** compounds (typically Cu²⁺, blue/green) — a feature of transition metals.
- Does **not** react with water or dilute acids to give hydrogen (too unreactive).

## Uses of copper

- **Electrical wiring** (excellent conductor), **plumbing pipes**, **cooking utensils**, **coins**, and **alloys** (brass = Cu + Zn; bronze = Cu + Sn).

## Important copper compounds

| Compound | Name | Colour | Use |
| --- | --- | --- | --- |
| CuSO₄ | copper(II) sulfate | blue (hydrated) | fungicide, electroplating, test for water |
| CuO | copper(II) oxide | black | catalyst, colouring glass, source of Cu |
| CuCl₂ | copper(II) chloride | blue-green | catalyst, mordant, electroplating |

## Key reactions

- **Hydrated ⇌ anhydrous copper(II) sulfate:** blue CuSO₄·5H₂O → white CuSO₄ + water on heating; adding water turns it blue again — the **test for water**.
- **Copper(II) oxide + acid:** CuO + H₂SO₄ → CuSO₄ + H₂O (black solid gives a blue solution — base + acid → salt + water).
- **Displacement:** a more reactive metal (e.g. iron) displaces copper: Fe + CuSO₄ → FeSO₄ + Cu (blue fades, brown copper deposits).

## Common errors and misconceptions

- **Copper reacts with dilute acid to give hydrogen** — it does not; it is below hydrogen.
- **All copper compounds are blue** — CuO is black; hydrated CuSO₄ is blue.
- **Anhydrous copper sulfate is blue** — it is white; it turns blue only with water.`,
      workedExample: `**Task.** Blue hydrated copper(II) sulfate crystals are heated, then a few drops of water are added to the cooled solid. (a) Describe the colour changes. (b) Write equations. (c) State what this is used to test for.

**Step 1 — On heating**
The blue crystals lose their water of crystallisation and turn **white**:
CuSO₄·5H₂O → CuSO₄ + 5H₂O.

**Step 2 — On adding water**
The white anhydrous solid turns **blue** again (and gets warm):
CuSO₄ + 5H₂O → CuSO₄·5H₂O.

**Step 3 — Use**
Because white anhydrous copper(II) sulfate turns blue with water, it is used as a **chemical test for the presence of water**.

**Conclusion.** Hydrated copper(II) sulfate is blue, anhydrous is white; the reversible colour change (white → blue with water) is the standard test for water.`,
      quiz: [
        { prompt: "Copper is classified as a … metal.", options: ["transition", "alkali", "alkaline earth", "noble gas"], correctIndex: 0, explanation: "Copper is a transition metal." },
        { prompt: "The colour of copper metal is…", options: ["reddish-brown", "silvery-white", "black", "yellow"], correctIndex: 0, explanation: "Copper is reddish-brown." },
        { prompt: "Copper is widely used for electrical wiring because it is a good…", options: ["conductor", "insulator", "magnet", "acid"], correctIndex: 0, explanation: "Excellent electrical conductor." },
        { prompt: "Copper does NOT react with dilute acids because it is…", options: ["below hydrogen in the series", "a non-metal", "a gas", "radioactive"], correctIndex: 0, explanation: "Too unreactive to displace H₂." },
        { prompt: "Hydrated copper(II) sulfate is…", options: ["blue", "white", "black", "green"], correctIndex: 0, explanation: "CuSO₄·5H₂O is blue." },
        { prompt: "Anhydrous copper(II) sulfate is…", options: ["white", "blue", "red", "black"], correctIndex: 0, explanation: "Without water it is white." },
        { prompt: "Copper(II) oxide is…", options: ["black", "blue", "white", "yellow"], correctIndex: 0, explanation: "CuO is black." },
        { prompt: "White anhydrous copper sulfate is used to test for…", options: ["water", "oxygen", "carbon dioxide", "hydrogen"], correctIndex: 0, explanation: "It turns blue with water." },
        { prompt: "Brass is an alloy of copper and…", options: ["zinc", "tin", "iron", "lead"], correctIndex: 0, explanation: "Brass = Cu + Zn." },
        { prompt: "Bronze is an alloy of copper and…", options: ["tin", "zinc", "aluminium", "gold"], correctIndex: 0, explanation: "Bronze = Cu + Sn." },
        { prompt: "Copper compounds are typically…", options: ["coloured", "colourless", "always white", "gaseous"], correctIndex: 0, explanation: "Transition metal ions are coloured." },
        { prompt: "CuO + H₂SO₄ gives water and…", options: ["CuSO₄", "CuCl₂", "Cu(OH)₂", "CuO"], correctIndex: 0, explanation: "Base + acid → salt + water." },
        { prompt: "When iron is placed in copper(II) sulfate solution…", options: ["copper is displaced and the blue fades", "nothing happens", "iron dissolves into gas", "the solution turns black"], correctIndex: 0, explanation: "Fe + CuSO₄ → FeSO₄ + Cu." },
        { prompt: "Copper(II) sulfate is used as a…", options: ["fungicide", "fuel", "fertiliser nitrogen source", "explosive"], correctIndex: 0, explanation: "Used to control fungi/algae." },
        { prompt: "Copper is used in plumbing because it is…", options: ["malleable and unreactive", "very reactive", "magnetic", "brittle"], correctIndex: 0, explanation: "Easily shaped and resists corrosion." },
        { prompt: "The charge on the common copper ion is…", options: ["+2", "+1 only", "−2", "0"], correctIndex: 0, explanation: "Cu²⁺ is the common ion." },
        { prompt: "Heating blue CuSO₄·5H₂O drives off…", options: ["water", "sulfur", "copper", "oxygen"], correctIndex: 0, explanation: "It loses water of crystallisation." },
        { prompt: "Copper(II) chloride solution is…", options: ["blue-green", "black", "colourless", "red"], correctIndex: 0, explanation: "CuCl₂ is blue-green." },
        { prompt: "Copper(II) oxide can be used to … glass.", options: ["colour", "melt", "bleach", "cool"], correctIndex: 0, explanation: "CuO colours glass." },
        { prompt: "Which shows copper's low reactivity?", options: ["it does not release hydrogen from dilute acid", "it reacts violently with water", "it burns in cold air", "it displaces sodium"], correctIndex: 0, explanation: "Below hydrogen, no H₂ with acid." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State three properties of copper and two of its uses.", answerKey: "Properties (any three): reddish-brown, shiny; good conductor of heat and electricity; malleable and ductile; unreactive (below hydrogen); forms coloured compounds. Uses (any two): electrical wiring, plumbing pipes, cooking utensils, coins, alloys (brass, bronze). Award marks for three properties and two uses.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Anhydrous copper(II) sulfate is used to test for water because it:", options: ["Turns from white to blue", "Turns from blue to white", "Turns black", "Fizzes"], correctIndex: 0, answerKey: "White anhydrous CuSO₄ turns blue when water is added.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Copper does not react with dilute hydrochloric acid because it is:", options: ["Below hydrogen in the reactivity series", "A non-metal", "Above sodium", "Radioactive"], correctIndex: 0, answerKey: "Copper is too unreactive to displace hydrogen.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Write an equation for the reaction of copper(II) oxide with sulfuric acid and describe the colour change.", answerKey: "CuO + H₂SO₄ → CuSO₄ + H₂O. The black copper(II) oxide reacts to give a blue copper(II) sulfate solution (base + acid → salt + water). Award marks for the equation and the black-to-blue observation.", marks: 3 },
        { type: "ESSAY", prompt: "Describe copper as a transition metal, its main uses, and the colours and uses of its compounds CuSO₄, CuO and CuCl₂.", answerKey: "A full answer describes copper as a reddish-brown, shiny transition metal that is a good conductor of heat and electricity, malleable, ductile and unreactive (below hydrogen, so no reaction with water or dilute acid), forming coloured Cu²⁺ compounds. Uses: electrical wiring, plumbing, cooking utensils, coins and alloys (brass with zinc, bronze with tin). Compounds: copper(II) sulfate (blue when hydrated, white when anhydrous; used as a fungicide, in electroplating and as a test for water), copper(II) oxide (black; catalyst, colouring glass, source of copper), copper(II) chloride (blue-green; catalyst/mordant/electroplating). Award marks for the transition-metal properties, uses of the metal, and the colours/uses of the compounds.", marks: 6 },
      ],
    },
  ],
};
