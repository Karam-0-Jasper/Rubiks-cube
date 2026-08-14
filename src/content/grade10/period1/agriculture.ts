import type { SubjectContent } from "@/content/types";

export const agriculture: SubjectContent = {
  slug: "agriculture",
  name: "Agriculture",
  shortName: "Agric",
  description:
    "The nature and importance of agriculture, branches and farming systems, soil science, and farm tools.",
  accent: "green",
  sortOrder: 10,
  teacherCode: "AGR-10-2856",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "Foundations of Agricultural Science",
      summary:
        "Learners establish what agriculture is and why it matters, classify its branches and farming systems, study soil formation and properties, and learn the tools and implements of the farm.",
      topics: [
        // source: GeeksforGeeks — Primary Activities, Class 12 Geography Notes (https://www.geeksforgeeks.org/social-science/chapter-4-primary-activities-class-12-geography-notes/). FLAG: Liberia-specific economic figures and lists of local problems are not from an approved page; the general concepts below are sourced. See report.
        {
          slug: "introduction-to-agriculture",
          title: "Introduction to Agriculture",
          objective:
            "By the end of the lesson, learners should be able to define agriculture, state its importance, and describe the main types of farming.",
          estimatedMinutes: 80,
          notes: `## What agriculture is

**Agriculture** is a fundamental economic activity that supports human survival and development. It is the growing of crops and the rearing of animals to provide food and raw materials.

Agriculture is practised under a wide range of physical and socio-economic conditions, which leads to many different agricultural systems around the world.

## Importance of agriculture

- **Food** — agriculture provides the food that sustains people and their families
- **Raw materials** — it supplies materials for industry, such as fibres and crops for processing
- **Livelihoods and employment** — it provides work and income for millions of farmers
- **Environmental conservation** — sustainable farming helps conserve soil, water and biodiversity
- **Development** — it supports the wider economy through the sale of produce

Promoting sustainable and diverse agricultural practices is important for food security, environmental conservation and livelihood opportunities.

## Main types of farming

| Type | Main feature |
| --- | --- |
| Subsistence agriculture | Food grown mainly for the farmer's own family |
| Shifting cultivation | Land cleared and cropped, then abandoned when fertility falls |
| Intensive subsistence | Small landholdings, heavy labour, often rice |
| Plantation agriculture | Large estates, much capital, a single crop for sale |
| Mixed farming | Crop cultivation combined with animal husbandry |
| Commercial grain farming | Large mechanised farms producing grain for market |

**Subsistence agriculture** primarily supports the local consumption of the farmers and their families.

**Commercial agriculture** is developed primarily to produce crops and animals for sale in markets.

## Key points

- Agriculture is the growing of crops and rearing of animals; it is a fundamental economic activity.
- It provides food, raw materials, livelihoods and support for development.
- Farming systems range from subsistence to commercial, shaped by local conditions.`,
          workedExample: `**Question:** A family grows just enough cassava and vegetables to feed themselves, selling only a small surplus. A nearby estate grows a single crop on a large area entirely for sale. Classify each type of farming and explain the difference.

**Solution**

*Step 1 — Classify the family's farming.* The family grows food mainly for their own consumption, selling only a small surplus. This is **subsistence agriculture**, which primarily supports the local consumption of the farmers and their families.

*Step 2 — Classify the estate.* The estate grows a single crop on a large area, using much land and capital, entirely for sale. This is **plantation agriculture** — a form of **commercial agriculture**, which is developed primarily to produce crops for sale in markets.

*Step 3 — State the key difference.* The purpose of production is what separates them. Subsistence farming aims to feed the household; commercial (plantation) farming aims to sell the produce for income. This difference in purpose explains the difference in scale: the subsistence plot is small, while the plantation is large and capital-intensive.

**Answer:** The family practises subsistence agriculture (food for the household); the estate practises plantation, a commercial system (a single crop grown for sale). The distinguishing factor is whether production is for the family's own consumption or for the market.`,
          quiz: [
            {
              prompt: "Agriculture is best described as",
              options: [
                "the sale of imported food",
                "the growing of crops and rearing of animals",
                "the study of rocks",
                "the building of roads",
              ],
              correctIndex: 1,
              explanation:
                "Agriculture is a fundamental economic activity: growing crops and rearing animals.",
            },
            {
              prompt: "Agriculture is described as a fundamental economic activity because it",
              options: [
                "supports human survival and development",
                "only earns foreign exchange",
                "requires no land",
                "is practised only in cities",
              ],
              correctIndex: 0,
              explanation: "It sustains people and underpins the wider economy.",
            },
            {
              prompt: "Subsistence agriculture is farming mainly for",
              options: [
                "export markets",
                "the farmer's own family consumption",
                "industrial processing",
                "government stores",
              ],
              correctIndex: 1,
              explanation: "Subsistence farming supports the local consumption of the family.",
            },
            {
              prompt: "Commercial agriculture is developed primarily to",
              options: [
                "feed only the farmer",
                "produce crops and animals for sale in markets",
                "conserve wildlife",
                "avoid all machinery",
              ],
              correctIndex: 1,
              explanation: "Commercial farming produces for the market.",
            },
            {
              prompt: "Plantation agriculture is characterised by",
              options: [
                "small plots and many crops",
                "large estates, much capital and a single crop",
                "no sale of produce",
                "only animal rearing",
              ],
              correctIndex: 1,
              explanation: "Plantations are large, capital-intensive and grow one crop for sale.",
            },
            {
              prompt: "Mixed farming combines",
              options: [
                "two towns",
                "crop cultivation with animal husbandry",
                "farming and mining",
                "subsistence and export only",
              ],
              correctIndex: 1,
              explanation: "Mixed farming raises crops and animals together.",
            },
            {
              prompt: "Which is an importance of agriculture?",
              options: [
                "It provides food and raw materials",
                "It removes the need for water",
                "It ends all employment",
                "It stops development",
              ],
              correctIndex: 0,
              explanation:
                "Agriculture provides food, raw materials, livelihoods and supports development.",
            },
            {
              prompt: "Intensive subsistence farming is marked by",
              options: [
                "large mechanised fields",
                "small landholdings and heavy labour, often rice",
                "a single export crop",
                "no crops at all",
              ],
              correctIndex: 1,
              explanation: "It uses small plots with much labour, often for rice.",
            },
            {
              prompt: "The many different agricultural systems exist because farming is practised under",
              options: [
                "identical conditions everywhere",
                "a wide range of physical and socio-economic conditions",
                "no conditions at all",
                "only desert conditions",
              ],
              correctIndex: 1,
              explanation: "Varied conditions lead to diverse systems.",
            },
            {
              prompt: "Sustainable agriculture is important for",
              options: [
                "food security and environmental conservation",
                "reducing food supply",
                "destroying soil",
                "ending livelihoods",
              ],
              correctIndex: 0,
              explanation:
                "It supports food security, environmental conservation and livelihoods.",
            },
            {
              prompt: "Commercial grain farming typically uses",
              options: [
                "large mechanised farms producing grain for market",
                "tiny hand-dug plots",
                "no land",
                "only livestock",
              ],
              correctIndex: 0,
              explanation: "Extensive commercial grain farms are large and mechanised.",
            },
            {
              prompt: "In shifting cultivation, land is",
              options: [
                "kept in continuous use with fertiliser",
                "cleared and cropped, then abandoned when fertility falls",
                "never cleared",
                "used only for buildings",
              ],
              correctIndex: 1,
              explanation: "The plot is abandoned once soil fertility declines.",
            },
            {
              prompt: "Agriculture supplies industry with",
              options: ["Cement", "Raw materials such as crops and fibres", "Electricity", "Iron ore"],
              correctIndex: 1,
              explanation: "Farm produce provides raw materials for processing industries.",
            },
            {
              prompt: "A family selling only a small surplus of the food it grows practises",
              options: ["Commercial farming", "Subsistence agriculture", "Plantation farming", "Grain farming"],
              correctIndex: 1,
              explanation: "Most produce is consumed by the family; little is sold.",
            },
            {
              prompt: "The factor that best distinguishes subsistence from commercial farming is",
              options: [
                "the colour of the soil",
                "whether production is for consumption or for sale",
                "the time of year",
                "the name of the crop",
              ],
              correctIndex: 1,
              explanation: "Purpose of production is the key difference.",
            },
            {
              prompt: "Agriculture provides livelihoods for",
              options: [
                "no one",
                "millions of farmers",
                "only factory workers",
                "only traders",
              ],
              correctIndex: 1,
              explanation: "Farming provides work and income for millions.",
            },
            {
              prompt: "Which is a commercial farming system?",
              options: ["Subsistence cassava plot", "Plantation agriculture", "Household vegetable garden", "Shifting cultivation for family food"],
              correctIndex: 1,
              explanation: "Plantations grow crops for sale, making them commercial.",
            },
            {
              prompt: "Food security means",
              options: [
                "having reliable access to enough food",
                "locking away all food",
                "exporting all crops",
                "growing no crops",
              ],
              correctIndex: 0,
              explanation: "Sustainable agriculture supports food security.",
            },
            {
              prompt: "Environmental conservation is served by agriculture when farming is",
              options: ["Wasteful", "Sustainable", "Abandoned", "Only for export"],
              correctIndex: 1,
              explanation: "Sustainable practices conserve soil, water and biodiversity.",
            },
            {
              prompt: "Mixed farming is found where farmers want to",
              options: [
                "grow only one crop",
                "combine crops and livestock",
                "avoid all animals",
                "stop farming",
              ],
              correctIndex: 1,
              explanation: "Mixed farming deliberately combines crops and animals.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define agriculture and state four ways in which it is important.",
              answerKey:
                "Agriculture is the growing of crops and the rearing of animals, a fundamental economic activity supporting human survival and development. Importance: it provides food; it supplies raw materials for industry; it provides livelihoods and employment; it supports environmental conservation through sustainable practices; it supports wider economic development. Award 4 marks for the definition and 2 marks per importance, up to four.",
              marks: 12,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Distinguish between subsistence agriculture and commercial agriculture.",
              answerKey:
                "Subsistence agriculture is farming in which food is grown mainly for the local consumption of the farmers and their families, with little or no surplus sold. Commercial agriculture is developed primarily to produce crops and animals for sale in markets. The key difference is the purpose of production — consumption versus sale — which also affects the scale of the farm. Award 3 marks per definition and 2 marks for the distinguishing point.",
              marks: 8,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "A large estate grows a single crop on much land, using heavy capital, entirely for sale. This is",
              options: [
                "Subsistence agriculture",
                "Plantation agriculture",
                "Intensive subsistence farming",
                "Shifting cultivation",
              ],
              correctIndex: 1,
              answerKey:
                "Plantation agriculture uses large estates and much capital to grow a single crop for sale. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Name three types of farming and give one feature of each.",
              answerKey:
                "Accept any three: subsistence agriculture — food grown mainly for the family; shifting cultivation — land cleared, cropped, then abandoned when fertility falls; intensive subsistence — small plots, heavy labour, often rice; plantation agriculture — large estates, much capital, a single crop for sale; mixed farming — crops combined with livestock; commercial grain farming — large mechanised farms for market. Award 2 marks per type named with a correct feature.",
              marks: 6,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain the importance of agriculture and describe the main types of farming, distinguishing subsistence from commercial systems.",
              answerKey:
                "Award marks as follows: agriculture defined as a fundamental economic activity growing crops and rearing animals, 6 marks; importance developed across food, raw materials, livelihoods, environmental conservation and development, 14 marks; the main types of farming described — subsistence, shifting cultivation, intensive subsistence, plantation, mixed farming and commercial grain farming, 16 marks; a clear distinction between subsistence (for the family's consumption) and commercial (for sale), with the effect on scale, 10 marks; organisation and expression, 4 marks. A learner who lists types without distinguishing subsistence from commercial should not exceed 28.",
              marks: 50,
            },
          ],
        },
        // source: LibreTexts (Human Geography) — 10.2 Agricultural Practices (https://socialsci.libretexts.org/Bookshelves/Geography_(Human)/Introduction_to_Human_Geography_(Dorrell_and_Henderson)/10:_Agriculture_and_Food/10.02:_Agricultural_Practices); GeeksforGeeks — Primary Activities, Class 12 Geography (https://www.geeksforgeeks.org/social-science/chapter-4-primary-activities-class-12-geography-notes/)
        {
          slug: "branches-and-systems",
          title: "Branches of Agriculture and Farming Systems",
          objective:
            "By the end of the lesson, learners should be able to describe the main farming practices and systems and compare their features and advantages.",
          estimatedMinutes: 80,
          notes: `## Farming systems and practices

Agriculture is carried out through several different practices and systems.

### Shifting cultivation (slash-and-burn)

A form of **subsistence agriculture** that uses a kind of natural rotation system. Vegetation is cleared and the debris burned; the cleared plot is called a **swidden**. A field is actively cultivated for about three years, then abandoned because the soil becomes depleted, and the farmer moves to a new plot.

### Intercropping (mixed cropping)

**Mixing different seeds in the same swidden**, favourable in the warm and humid tropics, where it allows harvesting two or even three times per year. Several crops grow together in one field, giving efficient use of the land.

### Monoculture (monocropping)

Highly specialised farming in which, generally, **one single crop** is grown. Commercial grain farming is an example. This concentrates production on a single crop for market efficiency.

### Subsistence and commercial agriculture

- **Subsistence farming** — growing food only to sustain the farmers themselves and their families, consuming most of what they produce. Farms are small, often 1 to 2 hectares.
- **Commercial agriculture** — producing crops for sale, for example to food-processing companies. Farms are larger, often over 150 hectares.

### Plantation agriculture

**Large landholdings** in developing regions designed to produce crops for export, specialising in single crops such as coffee, cocoa or sugar for international markets.

### Mixed crop and livestock farming

A system that combines the cultivation of various crops with the keeping of livestock, using **crop rotation**. Cereal crops or orchards are grown alongside cattle, sheep, pigs or poultry.

## Comparing the systems

| System | Purpose | Scale |
| --- | --- | --- |
| Shifting cultivation | Subsistence | Small; land abandoned after a few years |
| Intercropping | Subsistence or mixed | Small; several crops per plot |
| Monoculture | Commercial | Often large; one crop |
| Plantation | Export | Large landholdings |
| Mixed crop and livestock | Mixed | Varies; crops and animals together |

## Key points

- Shifting cultivation clears and burns land, crops it for a few years, then moves on.
- Intercropping grows several crops together; monoculture grows one crop.
- Subsistence farms are small and for the family; commercial and plantation farms are large and for sale.
- Mixed crop and livestock farming combines crops and animals with rotation.`,
          workedExample: `**Question:** A farmer clears a patch of forest, burns the cut vegetation, and plants crops. After three years the yields fall sharply and he clears a new patch. His neighbour grows maize, beans and squash together in one field and keeps a few goats. Name each system and compare them.

**Solution**

*Step 1 — Name the first farmer's system.* Clearing vegetation, burning the debris, cropping the plot (the swidden) for about three years, then abandoning it when the soil is depleted, is **shifting cultivation** (slash-and-burn), a form of subsistence agriculture.

*Step 2 — Name the neighbour's system.* Growing several crops together in one field is **intercropping (mixed cropping)**, and because he also keeps livestock, he practises a form of **mixed crop and livestock farming** using the crops and animals together.

*Step 3 — Compare them.*

- **Land use over time.** Shifting cultivation must abandon each plot after a few years because fertility falls, so the farmer keeps moving. Mixed cropping with livestock keeps a plot in use, and crop rotation and several crops together make fuller use of the same land.
- **Risk.** Growing maize, beans and squash together spreads risk: if one crop does poorly, the others may still yield. A single cleared plot offers no such spread.
- **Purpose and scale.** Both are small-scale and largely for the household, but the intercropping-and-livestock system uses the land more intensively without abandoning it.

**Answer:** The first farmer practises shifting cultivation (slash-and-burn); the neighbour practises intercropping combined with mixed crop and livestock farming. The neighbour's system keeps the land in continuous use and spreads risk across several crops, whereas shifting cultivation must move on once the soil is depleted.`,
          quiz: [
            {
              prompt: "Shifting cultivation is also known as",
              options: ["Slash-and-burn", "Plantation farming", "Monoculture", "Dairy farming"],
              correctIndex: 0,
              explanation: "Shifting cultivation clears and burns vegetation.",
            },
            {
              prompt: "A cleared plot in shifting cultivation is called a",
              options: ["Ranch", "Swidden", "Terrace", "Paddock"],
              correctIndex: 1,
              explanation: "The burned, cleared field is the swidden.",
            },
            {
              prompt: "In shifting cultivation, a field is abandoned because",
              options: [
                "the soil becomes depleted",
                "it rains too much",
                "the crops are too many",
                "the market closes",
              ],
              correctIndex: 0,
              explanation: "After about three years the soil is depleted and the farmer moves on.",
            },
            {
              prompt: "Intercropping means",
              options: [
                "growing one crop only",
                "mixing different seeds in the same field",
                "keeping only livestock",
                "leaving land bare",
              ],
              correctIndex: 1,
              explanation: "Several crops are grown together in one field.",
            },
            {
              prompt: "Intercropping is favourable in the warm humid tropics because it allows",
              options: [
                "no harvest",
                "harvesting two or three times per year",
                "only one crop per decade",
                "less use of land",
              ],
              correctIndex: 1,
              explanation: "Mixing seeds enables multiple harvests per year.",
            },
            {
              prompt: "Monoculture (monocropping) is the growing of",
              options: ["Several crops together", "One single crop", "Only animals", "No crops"],
              correctIndex: 1,
              explanation: "Monoculture concentrates on a single crop.",
            },
            {
              prompt: "Commercial grain farming is an example of",
              options: ["Intercropping", "Monoculture", "Shifting cultivation", "Subsistence farming"],
              correctIndex: 1,
              explanation: "Grain farming is highly specialised, generally one crop.",
            },
            {
              prompt: "Subsistence farms are typically about",
              options: ["1 to 2 hectares", "over 150 hectares", "500 hectares", "no land"],
              correctIndex: 0,
              explanation: "Subsistence farms are small, often 1 to 2 hectares.",
            },
            {
              prompt: "Commercial farms are typically",
              options: ["Smaller than 1 hectare", "Often over 150 hectares", "Non-existent", "Only gardens"],
              correctIndex: 1,
              explanation: "Commercial farms are larger, often over 150 hectares.",
            },
            {
              prompt: "Plantation agriculture produces crops mainly for",
              options: ["The family only", "Export", "Fallow", "Fodder"],
              correctIndex: 1,
              explanation: "Plantations grow single crops for export markets.",
            },
            {
              prompt: "Which crop is typical of plantation agriculture?",
              options: ["Coffee, cocoa or sugar", "Wild grass", "Weeds", "Moss"],
              correctIndex: 0,
              explanation: "Plantations specialise in crops such as coffee, cocoa and sugar.",
            },
            {
              prompt: "Mixed crop and livestock farming uses",
              options: [
                "crop rotation, growing crops alongside livestock",
                "only one crop and no animals",
                "no rotation",
                "no crops",
              ],
              correctIndex: 0,
              explanation: "It combines crops and animals with crop rotation.",
            },
            {
              prompt: "Subsistence farmers consume",
              options: [
                "none of what they produce",
                "most of what they produce",
                "only imported food",
                "only cash crops",
              ],
              correctIndex: 1,
              explanation: "They eat most of their produce, selling little.",
            },
            {
              prompt: "A key advantage of intercropping is",
              options: [
                "efficient use of the land",
                "no need to plant",
                "easy machinery use",
                "a single harvest per decade",
              ],
              correctIndex: 0,
              explanation: "Several crops in one field use land efficiently.",
            },
            {
              prompt: "Shifting cultivation is a form of",
              options: ["Commercial agriculture", "Subsistence agriculture", "Plantation agriculture", "Dairy farming"],
              correctIndex: 1,
              explanation: "It is a subsistence practice using natural rotation.",
            },
            {
              prompt: "Commercial agriculture produces crops mainly for",
              options: ["Sale, e.g. to food-processing companies", "The family only", "Fallow", "No purpose"],
              correctIndex: 0,
              explanation: "Commercial agriculture is for the market.",
            },
            {
              prompt: "In mixed crop and livestock farming, animals kept may include",
              options: ["Cattle, sheep, pigs or poultry", "Only fish", "No animals", "Only bees"],
              correctIndex: 0,
              explanation: "Cattle, sheep, pigs or poultry are kept alongside crops.",
            },
            {
              prompt: "Monoculture is described as farming that is",
              options: ["Highly specialised on one crop", "Very mixed", "Never for market", "Always subsistence"],
              correctIndex: 0,
              explanation: "Monoculture is specialised on a single crop.",
            },
            {
              prompt: "The natural rotation in shifting cultivation refers to",
              options: [
                "moving from plot to plot as soils are depleted and recover",
                "rotating machinery",
                "changing markets",
                "rotating workers",
              ],
              correctIndex: 0,
              explanation: "Plots are cropped then left as the farmer moves on.",
            },
            {
              prompt: "The purpose that separates subsistence from commercial farming is",
              options: [
                "consumption by the family versus sale",
                "the colour of the crop",
                "the weather",
                "the farmer's age",
              ],
              correctIndex: 0,
              explanation: "Subsistence is for the family; commercial is for sale.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Describe shifting cultivation, including how the land is prepared and why the farmer eventually moves on.",
              answerKey:
                "Shifting cultivation (slash-and-burn) is a form of subsistence agriculture using a natural rotation system. Vegetation is cleared and the debris burned; the cleared plot is the swidden. The plot is cultivated for about three years, then abandoned because the soil becomes depleted, and the farmer moves to a new plot. Award marks for clearing and burning (3), the swidden/roughly three-year cultivation (3) and abandonment due to soil depletion (4).",
              marks: 10,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Distinguish between intercropping and monoculture.",
              answerKey:
                "Intercropping (mixed cropping) is the mixing of different seeds in the same field so that several crops grow together, allowing efficient land use and, in the humid tropics, two or three harvests a year. Monoculture (monocropping) is highly specialised farming in which generally one single crop is grown, as in commercial grain farming. Award 4 marks per definition and 2 marks for the contrast.",
              marks: 10,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "Large landholdings in developing regions producing a single crop for export describe",
              options: ["Shifting cultivation", "Plantation agriculture", "Intercropping", "Subsistence farming"],
              correctIndex: 1,
              answerKey:
                "Plantation agriculture uses large landholdings to produce single crops such as coffee, cocoa or sugar for export. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State two differences in scale between subsistence and commercial farms, and describe mixed crop and livestock farming.",
              answerKey:
                "Subsistence farms are small, often 1 to 2 hectares, and grow food mainly for the family; commercial farms are larger, often over 150 hectares, and produce for sale. Mixed crop and livestock farming combines the cultivation of various crops with the keeping of livestock such as cattle, sheep, pigs or poultry, using crop rotation. Award 2 marks per scale difference and 4 marks for describing mixed crop and livestock farming.",
              marks: 8,
            },
            {
              type: "ESSAY",
              prompt:
                "Compare shifting cultivation, intercropping and mixed crop and livestock farming as systems used by small farmers, describing each and explaining their advantages and limitations.",
              answerKey:
                "Award marks as follows: accurate description of shifting cultivation — clearing, burning, the swidden, roughly three years' cropping and abandonment on soil depletion, 10 marks; accurate description of intercropping — several crops in one field, efficient land use, multiple harvests in the humid tropics, 10 marks; accurate description of mixed crop and livestock farming — crops grown with livestock using crop rotation, 10 marks; discussion of advantages and limitations, including risk-spreading in intercropping and continuous land use versus the need to move in shifting cultivation, 14 marks; organisation and expression, 6 marks. A learner who describes the systems without comparing advantages should not exceed 30.",
              marks: 50,
            },
          ],
        },
        // source: OpenStax Biology 2e — 31.2 The Soil (https://openstax.org/books/biology-2e/pages/31-2-the-soil); GeeksforGeeks — Soil Formation (https://www.geeksforgeeks.org/biology/soil-formation/) and Soil Profile (https://www.geeksforgeeks.org/biology/soil-profile/)
        {
          slug: "soil",
          title: "Soil: Formation, Types and Properties",
          objective:
            "By the end of the lesson, learners should be able to define soil, state its composition, describe its formation and profile, and identify soil types by texture.",
          estimatedMinutes: 80,
          notes: `## What soil is

**Soil** is the outer loose layer that covers the surface of the Earth. It is the natural medium from which plants obtain inorganic elements needed for growth.

## Composition of soil

By volume, an ideal soil is:

- **Inorganic mineral matter** — about 40 to 45 per cent
- **Organic matter** — about 5 per cent
- **Water and air together** — about 50 per cent

Ideally soil contains **50 per cent solid material and 50 per cent pore space**, with half the pore space holding water and half holding air. **Humus** (decomposed organic matter) plays a significant role in fertility.

## How soil forms

Soil forms by the gradual breaking down of rock through **weathering**. It forms very slowly — roughly 500 years to make 1 cm of soil from hard rock.

**Physical weathering** — rock is broken down without chemical change:

- Freezing and thawing: water expands when frozen and forces particles apart
- Heating and cooling: expansion and contraction in extreme climates
- Wetting and drying: rocks shrink and swell
- Abrasion by wave action and grinding

**Chemical weathering** — the slow chemical alteration of rock by water that seeps through after rains.

**Biological weathering** — organisms churn through soil, mixing and aerating it and adding nutrient-rich matter.

## Factors of soil formation

1. **Parent material** — the underlying bedrock
2. **Climate** — heat and moisture; dry, cool climates slow formation
3. **Topography** — the slope and position of the land
4. **Biological factors (organisms)** — plants, animals, microorganisms and fungi
5. **Time** — thousands of years for significant development

## The soil profile

A vertical section through the soil shows layers called **horizons**:

- **O horizon** — freshly decomposing organic matter (humus) at the surface
- **A horizon (topsoil)** — a mixture of organic and inorganic weathered material; typically dark; highest biological activity and most roots; vulnerable to erosion
- **B horizon (subsoil)** — accumulation of fine material moved down from above; richer in clay, retains moisture, less fertile than topsoil
- **C horizon** — parent material and broken-down rock; lacks true soil characteristics
- **R horizon** — the bedrock beneath

## Soil types by texture

Soil texture is set by the proportions of sand, silt and clay:

| Particle | Size |
| --- | --- |
| Sand | 0.1 to 2 mm |
| Silt | 0.002 to 0.1 mm |
| Clay | less than 0.002 mm |

- **Loam** — a mixture of sand, silt and humus with no dominant particle size; a balanced soil for growing.

## Key points

- Soil is the loose surface layer; an ideal soil is about half solids and half pore space.
- Soil forms very slowly by physical, chemical and biological weathering of rock.
- The profile runs O, A, B, C to bedrock; the A horizon (topsoil) is richest.
- Texture depends on the proportions of sand, silt and clay; loam is a balanced mixture.`,
          workedExample: `**Question:** A farmer digs a pit and sees a dark, crumbly top layer full of roots, then a paler layer with more clay, then broken rock. She also finds the top layer is a mixture of sand, silt and humus. Identify the horizons, name the soil texture of the top layer, and explain why the top layer matters most for crops.

**Solution**

*Step 1 — Identify the horizons.* The dark top layer full of roots is the **A horizon (topsoil)** — a mixture of organic and inorganic weathered material with the highest biological activity and most roots. Any loose leaf litter above it would be the **O horizon**. The paler layer with more clay is the **B horizon (subsoil)**, where fine material washed down from above accumulates. The broken rock beneath is the **C horizon**, the parent material, above the **R horizon** (bedrock).

*Step 2 — Name the texture of the top layer.* A mixture of sand, silt and humus with no dominant particle size is **loam**, a balanced soil.

*Step 3 — Explain why the topsoil matters most.* The A horizon holds the organic matter (humus), which plays a significant role in fertility, together with most of the biological activity and roots. It is the layer plants draw on, and it is the most vulnerable to erosion. The B horizon is richer in clay but less fertile.

**Answer:** The layers are O (litter), A (dark topsoil, most roots), B (clay-rich subsoil) and C (broken parent rock) above bedrock (R). The top layer is loam. It matters most because it holds the humus, roots and biological activity that crops depend on, and it is the layer most easily lost to erosion.`,
          quiz: [
            {
              prompt: "Soil is best defined as",
              options: [
                "solid bedrock",
                "the outer loose layer covering the Earth's surface",
                "pure water",
                "only sand",
              ],
              correctIndex: 1,
              explanation: "Soil is the loose surface layer and the medium for plant growth.",
            },
            {
              prompt: "In an ideal soil, solid material and pore space are about",
              options: ["90:10", "50:50", "all solid", "all pore space"],
              correctIndex: 1,
              explanation: "About half is solid and half is pore space.",
            },
            {
              prompt: "In an ideal soil, organic matter is about",
              options: ["5 per cent", "45 per cent", "80 per cent", "0 per cent"],
              correctIndex: 0,
              explanation: "Organic matter is roughly 5 per cent; mineral matter 40 to 45 per cent.",
            },
            {
              prompt: "The pore space in soil is shared by",
              options: ["Water and air", "Rock and metal", "Only water", "Only air"],
              correctIndex: 0,
              explanation: "Half the pore space holds water and half holds air.",
            },
            {
              prompt: "Decomposed organic matter that aids fertility is called",
              options: ["Clay", "Humus", "Sand", "Bedrock"],
              correctIndex: 1,
              explanation: "Humus plays a significant role in fertility.",
            },
            {
              prompt: "Soil forms mainly by the",
              options: ["Weathering of rock", "Freezing of water only", "Planting of seeds", "Building of roads"],
              correctIndex: 0,
              explanation: "Soil forms by the gradual breaking down of rock through weathering.",
            },
            {
              prompt: "Roughly how long can it take to form 1 cm of soil from hard rock?",
              options: ["One year", "About 500 years", "One week", "One day"],
              correctIndex: 1,
              explanation: "Soil forms very slowly, about 500 years per centimetre.",
            },
            {
              prompt: "Freezing and thawing cracking rock is an example of",
              options: ["Chemical weathering", "Physical weathering", "Biological weathering", "Erosion"],
              correctIndex: 1,
              explanation: "Physical weathering breaks rock without chemical change.",
            },
            {
              prompt: "The slow chemical alteration of rock by seeping water is",
              options: ["Physical weathering", "Chemical weathering", "Abrasion", "Freezing"],
              correctIndex: 1,
              explanation: "Chemical weathering changes the rock chemically.",
            },
            {
              prompt: "Which is a factor of soil formation?",
              options: ["Parent material", "The stock market", "The alphabet", "Wind speed only"],
              correctIndex: 0,
              explanation:
                "Factors are parent material, climate, topography, organisms and time.",
            },
            {
              prompt: "The O horizon consists mainly of",
              options: [
                "bedrock",
                "freshly decomposing organic matter at the surface",
                "clay subsoil",
                "parent rock",
              ],
              correctIndex: 1,
              explanation: "The O horizon is surface organic matter (humus).",
            },
            {
              prompt: "The topsoil, richest in organic matter and roots, is the",
              options: ["O horizon", "A horizon", "B horizon", "C horizon"],
              correctIndex: 1,
              explanation: "The A horizon is the dark, biologically active topsoil.",
            },
            {
              prompt: "Fine material washed down from above accumulates in the",
              options: ["O horizon", "A horizon", "B horizon", "R horizon"],
              correctIndex: 2,
              explanation: "The B horizon (subsoil) is richer in clay from illuviation.",
            },
            {
              prompt: "The C horizon consists mainly of",
              options: [
                "humus",
                "parent material and broken-down rock",
                "leaf litter",
                "pure clay",
              ],
              correctIndex: 1,
              explanation: "The C horizon is parent material lacking true soil characteristics.",
            },
            {
              prompt: "Beneath the C horizon lies the",
              options: ["A horizon", "O horizon", "R horizon (bedrock)", "Topsoil"],
              correctIndex: 2,
              explanation: "The R horizon is the bedrock.",
            },
            {
              prompt: "Soil texture is determined by the proportions of",
              options: ["Sand, silt and clay", "Water and air", "Humus and roots", "Rock and metal"],
              correctIndex: 0,
              explanation: "Texture depends on the sand, silt and clay content.",
            },
            {
              prompt: "The largest soil particles are",
              options: ["Clay", "Silt", "Sand", "Humus"],
              correctIndex: 2,
              explanation: "Sand is 0.1 to 2 mm; clay is smallest at under 0.002 mm.",
            },
            {
              prompt: "Clay particles are",
              options: [
                "less than 0.002 mm",
                "larger than sand",
                "the same size as gravel",
                "not part of soil",
              ],
              correctIndex: 0,
              explanation: "Clay is the smallest particle, under 0.002 mm.",
            },
            {
              prompt: "Loam is",
              options: [
                "pure clay",
                "a mixture of sand, silt and humus with no dominant particle size",
                "only sand",
                "solid rock",
              ],
              correctIndex: 1,
              explanation: "Loam is a balanced mixture, good for growing.",
            },
            {
              prompt: "Which horizon is most vulnerable to erosion?",
              options: ["A horizon (topsoil)", "C horizon", "R horizon", "B horizon"],
              correctIndex: 0,
              explanation: "The nutrient-rich topsoil is most easily eroded.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define soil and state the approximate composition of an ideal soil.",
              answerKey:
                "Soil is the outer loose layer covering the surface of the Earth, the medium from which plants obtain inorganic elements. An ideal soil is about 40 to 45 per cent inorganic mineral matter, about 5 per cent organic matter, and about 50 per cent water and air together — half solid material and half pore space, with the pore space shared by water and air. Award 4 marks for the definition and 2 marks each for mineral, organic and pore-space proportions.",
              marks: 10,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Describe the soil profile, naming the horizons in order from the surface down.",
              answerKey:
                "O horizon — freshly decomposing organic matter (humus) at the surface. A horizon (topsoil) — organic and inorganic weathered material, dark, most roots and biological activity. B horizon (subsoil) — accumulation of fine material washed down, richer in clay, less fertile. C horizon — parent material and broken-down rock. R horizon — bedrock. Award 2 marks per horizon named in order with its feature.",
              marks: 10,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "Which soil is a balanced mixture of sand, silt and humus with no dominant particle size?",
              options: ["Sand", "Clay", "Loam", "Gravel"],
              correctIndex: 2,
              answerKey:
                "Loam is a mixture of sand, silt and humus with no dominant particle size. Option C.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State the three types of weathering that form soil and give one example of each.",
              answerKey:
                "Physical weathering — breakdown without chemical change, for example freezing and thawing, heating and cooling, or abrasion. Chemical weathering — slow chemical alteration of rock by water seeping through after rains. Biological weathering — organisms churning through soil, mixing and aerating it and adding organic matter. Award 2 marks per type named with a correct example.",
              marks: 6,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain how soil is formed, the factors that affect its formation, and describe the soil profile and the way texture is classified.",
              answerKey:
                "Award marks as follows: soil formation by weathering of rock, very slowly (about 500 years per cm), with physical, chemical and biological weathering explained with examples, 15 marks; the five factors — parent material, climate, topography, organisms and time — each explained, 12 marks; the soil profile O, A, B, C and R with the features of each, especially the topsoil, 14 marks; texture classified by the proportions of sand (0.1 to 2 mm), silt (0.002 to 0.1 mm) and clay (under 0.002 mm), with loam as a balanced mixture, 8 marks; organisation and expression, 6 marks. A learner who omits the profile or the weathering types should not exceed 35.",
              marks: 55,
            },
          ],
        },
        // source: GeeksforGeeks — Agricultural Implements (https://www.geeksforgeeks.org/biology/agricultural-implements/). FLAG: detailed tool-maintenance and safety guidance is standard practice, not drawn from this page; see report.
        {
          slug: "farm-tools",
          title: "Farm Tools and Implements",
          objective:
            "By the end of the lesson, learners should be able to define agricultural implements and identify the main farm tools and implements and their uses.",
          estimatedMinutes: 80,
          notes: `## What agricultural implements are

**Agricultural implements** are the tools used to carry out agricultural practices. They simplify farming tasks and increase productivity across the stages of crop production, from preparing the soil to harvesting.

## Major implements and their uses

**Plough**

- A traditional implement drawn by bulls or a tractor.
- Used for tilling, stirring the soil and applying fertilisers.
- It has a triangular iron strip, the **ploughshare**, attached to a wooden or metal shaft.

**Hoe**

- A long rod with a broad, bent iron blade.
- Used to loosen the soil and remove weeds.

**Cultivator**

- A tractor-mounted implement, a variant of the plough.
- Agitates the soil around growing crops for weed control and to help growth.
- Reduces labour and saves time.

**Harrow**

- Used after ploughing to prepare the soil.
- Smooths and levels the field surface and helps remove weeds.
- Types include disc, spike and drag harrows.

**Seed drill**

- A mechanical planting device.
- Ensures seeds are sown evenly and are properly covered with soil.
- Promotes uniform plant growth and spacing.

**Sickle**

- A hand tool with a curved blade.
- Used for manual harvesting, cutting mature crops.

## Grouping the tools

| Group | Tools | Purpose |
| --- | --- | --- |
| Soil preparation | Plough, harrow, cultivator | Tilling, levelling, weeding |
| Planting | Seed drill | Even, covered sowing |
| Harvesting | Sickle | Cutting mature crops |

## Why implements matter

- They simplify tasks and increase productivity.
- Since the invention of such tools, the physical labour of farmers has decreased significantly.

## Good practice with tools

- Use the right tool for the job.
- Clean and store tools after use so they last and remain safe to use.

## Key points

- Agricultural implements are the tools used to carry out farming practices.
- The plough tills and stirs soil; the harrow levels it; the cultivator weeds between crops.
- The seed drill sows seed evenly; the sickle harvests by hand.`,
          workedExample: `**Question:** A farmer is preparing a field for maize and then harvesting it. In order, name the implements she would use to till the soil, to level and weed it, to sow the seed evenly, and to harvest the mature crop, giving the use of each.

**Solution**

*Step 1 — Till the soil.* She uses a **plough**, drawn by bulls or a tractor, which tills and stirs the soil and can apply fertiliser. Its triangular ploughshare cuts and turns the soil ready for planting.

*Step 2 — Level and weed the prepared soil.* After ploughing she uses a **harrow** to smooth and level the field surface and to help remove weeds. A **cultivator** can also be used to agitate the soil around the crop for weed control.

*Step 3 — Sow the seed evenly.* She uses a **seed drill**, a mechanical planting device that ensures seeds are sown evenly and properly covered with soil, giving uniform spacing and growth.

*Step 4 — Harvest the mature crop.* She uses a **sickle**, a hand tool with a curved blade used for manually cutting mature crops.

**Answer:** Plough (till and stir the soil) → harrow (level and weed) → seed drill (sow evenly and cover) → sickle (harvest by hand). Each implement simplifies its stage of the work and increases productivity.`,
          quiz: [
            {
              prompt: "Agricultural implements are",
              options: [
                "types of crops",
                "the tools used to carry out agricultural practices",
                "kinds of soil",
                "farm animals",
              ],
              correctIndex: 1,
              explanation: "Implements are the tools used in farming practices.",
            },
            {
              prompt: "The plough is used for",
              options: [
                "harvesting grain",
                "tilling and stirring the soil",
                "spraying pesticide",
                "milking",
              ],
              correctIndex: 1,
              explanation: "The plough tills, stirs the soil and can apply fertiliser.",
            },
            {
              prompt: "The triangular iron strip of a plough is called the",
              options: ["Ploughshare", "Sickle", "Tine", "Blade guard"],
              correctIndex: 0,
              explanation: "The ploughshare cuts and turns the soil.",
            },
            {
              prompt: "The hoe is used to",
              options: [
                "fell trees",
                "loosen the soil and remove weeds",
                "measure rainfall",
                "harvest grain",
              ],
              correctIndex: 1,
              explanation: "The hoe loosens soil and removes weeds.",
            },
            {
              prompt: "A cultivator is",
              options: [
                "a hand harvesting tool",
                "a tractor-mounted implement that agitates soil around crops",
                "a type of seed",
                "a storage container",
              ],
              correctIndex: 1,
              explanation: "The cultivator weeds between crops and reduces labour.",
            },
            {
              prompt: "A harrow is used mainly",
              options: [
                "before ploughing",
                "after ploughing to smooth and level the field",
                "to harvest",
                "to milk cattle",
              ],
              correctIndex: 1,
              explanation: "The harrow prepares soil after ploughing.",
            },
            {
              prompt: "Which are types of harrow?",
              options: ["Disc, spike and drag", "Inkjet and laser", "Sand and clay", "Beef and dairy"],
              correctIndex: 0,
              explanation: "Disc, spike and drag are harrow types.",
            },
            {
              prompt: "A seed drill ensures that seeds are",
              options: [
                "left on the surface",
                "sown evenly and properly covered with soil",
                "burned",
                "eaten by birds",
              ],
              correctIndex: 1,
              explanation: "It gives uniform spacing and covering.",
            },
            {
              prompt: "A sickle is used for",
              options: ["Ploughing", "Manual harvesting of mature crops", "Spraying", "Measuring"],
              correctIndex: 1,
              explanation: "The sickle has a curved blade for cutting crops by hand.",
            },
            {
              prompt: "A cultivator benefits the farmer by",
              options: [
                "reducing labour and saving time",
                "increasing weeds",
                "removing all crops",
                "raising rainfall",
              ],
              correctIndex: 0,
              explanation: "Being tractor-mounted, it saves labour and time.",
            },
            {
              prompt: "Which implement is drawn by bulls or a tractor?",
              options: ["Sickle", "Plough", "Hand hoe", "Watering can"],
              correctIndex: 1,
              explanation: "The plough is drawn by bulls or a tractor.",
            },
            {
              prompt: "The main purpose of the harrow is to",
              options: [
                "sow seed",
                "smooth and level the field and help remove weeds",
                "harvest",
                "store grain",
              ],
              correctIndex: 1,
              explanation: "Harrowing levels the soil and removes weeds after ploughing.",
            },
            {
              prompt: "Farm implements are important because they",
              options: [
                "simplify tasks and increase productivity",
                "make farming harder",
                "remove the need for soil",
                "stop planting",
              ],
              correctIndex: 0,
              explanation: "Implements simplify tasks and raise productivity.",
            },
            {
              prompt: "Since the invention of agricultural tools, the physical labour of farmers has",
              options: ["Increased", "Decreased significantly", "Stayed exactly the same", "Ended entirely"],
              correctIndex: 1,
              explanation: "Tools have reduced farmers' physical labour significantly.",
            },
            {
              prompt: "Which tool is used at the planting stage?",
              options: ["Sickle", "Seed drill", "Harrow", "Plough"],
              correctIndex: 1,
              explanation: "The seed drill sows and covers seed.",
            },
            {
              prompt: "Which tool is used at the harvesting stage?",
              options: ["Sickle", "Plough", "Seed drill", "Cultivator"],
              correctIndex: 0,
              explanation: "The sickle cuts mature crops at harvest.",
            },
            {
              prompt: "The hoe has a",
              options: [
                "curved cutting blade for harvesting",
                "broad, bent iron blade on a long rod",
                "spinning disc",
                "spray nozzle",
              ],
              correctIndex: 1,
              explanation: "The hoe is a long rod with a broad, bent iron blade.",
            },
            {
              prompt: "Good practice with tools includes",
              options: [
                "using any tool for any job",
                "using the right tool and cleaning and storing it after use",
                "leaving tools in the rain",
                "never cleaning them",
              ],
              correctIndex: 1,
              explanation: "Using the correct tool and storing it well keeps tools safe and lasting.",
            },
            {
              prompt: "The plough can also be used to",
              options: ["Apply fertilisers while tilling", "Harvest maize", "Spray herbicide", "Weigh grain"],
              correctIndex: 0,
              explanation: "The plough is used for tilling, stirring soil and applying fertilisers.",
            },
            {
              prompt: "Weed control between growing crop rows is done with a",
              options: ["Sickle", "Cultivator", "Seed drill", "Harrow only before planting"],
              correctIndex: 1,
              explanation: "The cultivator agitates soil around crops to control weeds.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define agricultural implements and state why they are important to farming.",
              answerKey:
                "Agricultural implements are the tools used to carry out agricultural practices. They are important because they simplify farming tasks and increase productivity across the stages of crop production; since their invention, the physical labour of farmers has decreased significantly. Award 4 marks for the definition and 4 marks for the importance.",
              marks: 8,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Name four farm implements and state one use of each.",
              answerKey:
                "Plough — tilling and stirring the soil (and applying fertiliser). Hoe — loosening the soil and removing weeds. Harrow — smoothing and levelling the field after ploughing and removing weeds. Cultivator — agitating the soil around crops for weed control. Seed drill — sowing seeds evenly and covering them. Sickle — manual harvesting of mature crops. Award 2 marks per implement named with a correct use, up to four.",
              marks: 8,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "Which implement ensures seeds are sown evenly and properly covered with soil?",
              options: ["Sickle", "Seed drill", "Harrow", "Plough"],
              correctIndex: 1,
              answerKey:
                "The seed drill is a mechanical planting device that sows seeds evenly and covers them, giving uniform growth. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Group the following into soil preparation, planting and harvesting tools: plough, seed drill, sickle, harrow, cultivator.",
              answerKey:
                "Soil preparation: plough, harrow, cultivator (tilling, levelling and weeding). Planting: seed drill (even, covered sowing). Harvesting: sickle (cutting mature crops). Award 1 mark per correct grouping, with 3 bonus marks available for correct stated purposes.",
              marks: 8,
            },
            {
              type: "ESSAY",
              prompt:
                "Describe the implements a farmer would use to prepare a field, sow seed and harvest a crop, explaining the purpose of each and how implements have changed farming.",
              answerKey:
                "Award marks as follows: soil preparation implements — plough (tilling, stirring, applying fertiliser, with its ploughshare), harrow (smoothing and levelling, weed removal, types disc/spike/drag) and cultivator (agitating soil around crops, reducing labour), 18 marks; planting — the seed drill sowing seed evenly and covering it for uniform growth, 8 marks; harvesting — the sickle cutting mature crops by hand, 6 marks; discussion that implements simplify tasks, increase productivity and have significantly decreased farmers' physical labour, 10 marks; organisation and expression, 4 marks. A learner who lists tools without purposes should not exceed 25.",
              marks: 46,
            },
          ],
        },
      ],
    },
  ],
};
