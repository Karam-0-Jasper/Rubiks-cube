import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 11,
// Semester One, Period III: Soil, Energy and Ecology — Patterns in Nature.
// One topic per CONTENTS item, in syllabus order: soil; weathering; Liberia
// food and cash crops production; effects of non-biodegradable substances on
// soil fertility; isolation mechanisms of species; inter-specific interactions;
// trophic levels; conservation of nature; biocycles in nature; organisms'
// habitat and niche; population; ecological succession.
export const biologyG11P3: PeriodContent = {
  grade: 11,
  number: 3,
  title: "Soil, Energy and Ecology — Patterns in Nature",
  summary:
    "Period III of the MoE Grade 11 Biology syllabus. Learners study soil and weathering, food and cash crop production and the effect of non-biodegradable waste on soil fertility, then ecology: how species are kept apart by isolating mechanisms, the interactions between species, trophic levels and food webs, the conservation of nature, the water, carbon, nitrogen, phosphorus and sulfur cycles, habitat and niche, population growth and ecological succession.",
  topics: [
    // source: OpenStax — Biology 2e, 31.2 The Soil (https://openstax.org/books/biology-2e/pages/31-2-the-soil)
    {
      slug: "soil-formation-and-fertility",
      title: "Soil: Formation, Composition, Types and Fertility",
      objective:
        "By the end of the topic, learners should be able to define soil, describe its composition and formation, distinguish soil types, and explain how soil fertility is lost by erosion and maintained by conservation.",
      estimatedMinutes: 130,
      notes: `## What is soil?

- **Soil** — the loose upper layer of the Earth's surface in which plants grow and from which they obtain water and mineral nutrients.

## Composition of soil

An ideal soil is about **half solids and half pore space**:

| Component | Approx. share | Role |
| --- | --- | --- |
| **Mineral particles** (sand, silt, clay) | 40–45% | give the soil its body and nutrients |
| **Organic matter (humus)** | ~5% | improves structure, holds water, supplies nutrients |
| **Water** | ~25% | dissolves and carries nutrients |
| **Air** | ~25% | supplies oxygen to roots and soil organisms |
| **Living organisms** | small | bacteria, fungi, worms recycle nutrients |

## Soil formation

Soil forms slowly over long periods from the breakdown of rock. Five factors control it:

1. **Parent material** — the rock beneath.
2. **Climate** — temperature and rainfall drive weathering.
3. **Topography** — slope affects erosion and drainage.
4. **Living organisms** — roots, decomposers and worms add humus.
5. **Time** — soil deepens and develops over many years.

## The soil profile (horizons)

- **O horizon** — surface layer of decomposing litter.
- **A horizon (topsoil)** — dark, rich in humus; most root activity.
- **B horizon (subsoil)** — accumulated clay and minerals.
- **C horizon** — weathered parent rock.

## Types of soil

| Type | Particles | Properties |
| --- | --- | --- |
| **Sandy** | large sand particles | drains fast, dries out, low nutrients |
| **Clay** | tiny clay particles | holds water, poorly drained, heavy |
| **Loam** | balanced sand, silt and clay + humus | best for farming: holds water and nutrients yet drains well |

## Soil fertility

- **Fertile soil** has enough humus, mineral nutrients (nitrogen, phosphorus, potassium), good structure, water and air.
- Fertility falls with **erosion, overuse/monocropping, leaching** of nutrients, and loss of humus.

## Erosion and its prevention

- **Soil erosion** — the removal of topsoil by water or wind, worst on bare, sloping land.
- **Prevention/conservation:** plant cover and cover crops, contour ploughing and terracing on slopes, tree planting/windbreaks, mulching, and crop rotation.

## Maintaining and renewing fertility

- **Add organic manure/compost** and **fertilisers** to replace nutrients.
- **Crop rotation** (including legumes that fix nitrogen) restores nutrients.
- **Fallowing** (resting land) lets fertility recover.
- **Avoid dumping non-biodegradable waste** (plastics, metals) which does not rot and harms soil life and crop growth.

## Crops and soil in Liberia

- Matching the crop to the soil raises yield: e.g. rice grows in wet clay/lowland soils; cassava tolerates poorer, well-drained soils; cash crops such as rubber, oil palm, cocoa and coffee need deep fertile soils.

## Common errors and misconceptions

- **"Soil is just dead dirt"** — soil is living, containing organisms, air, water and humus.
- **"Sandy soil is most fertile"** — loam is best; sandy soil drains too fast and is low in nutrients.
- **"Erosion only removes stones"** — erosion strips the fertile topsoil, the most valuable layer.
- **"Plastics rot in soil"** — plastics and metals are non-biodegradable and stay for years, harming soil.`,
      workedExample: `**Task.** A farmer on a hillside notices that after heavy rain the topsoil washes away and yields fall each year. (a) Name the problem. (b) Explain why a bare slope loses soil. (c) Give three conservation methods, and (d) suggest how to restore the soil's fertility.

**Solution**

(a) The problem is **soil erosion** — loss of the fertile topsoil (A horizon).

(b) On a **bare slope**, rain hits the soil directly and runs downhill fast; there are **no roots to hold the soil** and no cover to slow the water, so the **topsoil (with its humus and nutrients)** is washed away.

(c) Three conservation methods:
- **Plant cover crops/keep vegetation** so roots bind the soil and leaves break the rain.
- **Contour ploughing and terracing** across the slope to slow run-off.
- **Plant trees/windbreaks and mulch** the surface to protect and hold the soil.

(d) To **restore fertility**: add **organic manure/compost** and fertilisers, use **crop rotation with legumes** (which fix nitrogen), and allow the land to **fallow** so nutrients and humus recover; avoid dumping non-biodegradable waste.

**Answer:** the farmer has soil erosion because the bare slope cannot hold the topsoil; conserve with plant cover, contour/terracing and trees/mulch, and restore fertility with manure, legume rotation and fallowing.`,
      quiz: [
        { prompt: "Soil is best defined as", options: ["only humus", "solid bedrock", "pure sand", "the loose upper layer where plants grow"], correctIndex: 3, explanation: "Soil is the medium supporting plant growth." },
        { prompt: "The dark, nutrient-rich organic matter in soil is", options: ["clay", "sand", "humus", "gravel"], correctIndex: 2, explanation: "Humus improves structure and fertility." },
        { prompt: "Which soil is best for farming?", options: ["pure sand", "loam", "pure clay", "gravel"], correctIndex: 1, explanation: "Loam holds water and nutrients yet drains well." },
        { prompt: "Sandy soil tends to", options: ["be very fertile", "hold too much water", "drain quickly and dry out", "have huge humus content"], correctIndex: 2, explanation: "Large particles let water pass fast." },
        { prompt: "Clay soil is characterised by", options: ["excellent drainage", "large particles", "tiny particles that hold water", "no nutrients"], correctIndex: 2, explanation: "Fine clay retains water and is heavy." },
        { prompt: "The topsoil layer rich in humus is the", options: ["C horizon", "A horizon", "bedrock", "B horizon"], correctIndex: 1, explanation: "The A horizon is the fertile topsoil." },
        { prompt: "Which is NOT a factor of soil formation?", options: ["climate", "colour of the farmer's clothes", "parent material", "time"], correctIndex: 1, explanation: "Soil forms from rock, climate, organisms, topography and time." },
        { prompt: "Soil erosion means the", options: ["removal of topsoil by water or wind", "adding of humus", "resting of land", "planting of trees"], correctIndex: 0, explanation: "Erosion strips away topsoil." },
        { prompt: "Erosion is worst on", options: ["bare sloping land", "forested flat land", "grass-covered soil", "mulched fields"], correctIndex: 0, explanation: "No cover and a slope speed run-off." },
        { prompt: "Which practice reduces erosion on a slope?", options: ["ploughing straight downhill", "leaving soil bare", "removing all trees", "contour ploughing/terracing"], correctIndex: 3, explanation: "Contour lines and terraces slow run-off." },
        { prompt: "Crop rotation with legumes helps because legumes", options: ["remove all nutrients", "fix nitrogen into the soil", "cause erosion", "kill soil organisms"], correctIndex: 1, explanation: "Legume root bacteria add nitrogen." },
        { prompt: "Fallowing land means", options: ["planting the same crop always", "resting it to recover fertility", "burning the soil", "removing the topsoil"], correctIndex: 1, explanation: "Fallowing restores nutrients and humus." },
        { prompt: "Air in the soil is important because it", options: ["hardens the soil", "adds nitrogen fertiliser", "removes water", "supplies oxygen to roots and organisms"], correctIndex: 3, explanation: "Roots and soil life need oxygen." },
        { prompt: "Non-biodegradable waste in soil (e.g. plastic)", options: ["improves fertility", "does not rot and harms soil life", "adds humus", "quickly decomposes"], correctIndex: 1, explanation: "Plastics persist and damage the soil." },
        { prompt: "Fertile soil has plenty of", options: ["only sand", "plastic", "humus and mineral nutrients", "no living organisms"], correctIndex: 2, explanation: "Nutrients, humus and good structure make soil fertile." },
        { prompt: "Adding manure or compost to soil", options: ["removes water", "causes erosion", "replaces lost nutrients and humus", "makes it non-biodegradable"], correctIndex: 2, explanation: "Organic matter renews fertility." },
        { prompt: "The parent material of soil is the", options: ["air", "humus layer", "underlying rock", "water"], correctIndex: 2, explanation: "Soil forms from weathered parent rock." },
        { prompt: "Windbreaks (rows of trees) help by", options: ["increasing run-off", "reducing wind erosion", "drying the soil", "removing nutrients"], correctIndex: 1, explanation: "Trees slow wind and hold soil." },
        { prompt: "Which crop suits wet lowland clay soil?", options: ["rice", "cactus", "desert plants", "none"], correctIndex: 0, explanation: "Rice grows in wet, water-holding soils." },
        { prompt: "Loam is a mixture of", options: ["sand, silt, clay and humus", "only clay", "only sand", "only gravel"], correctIndex: 0, explanation: "Balanced loam is ideal for crops." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the main components of soil and give the role of humus.", answerKey: "Components: mineral particles (sand/silt/clay), organic matter/humus, water, air, living organisms. Humus improves structure, holds water and supplies nutrients. 3 marks components, 2 humus role.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Which soil type is best suited for most crops?", options: ["Pure sand", "Loam", "Pure clay", "Gravel"], correctIndex: 1, answerKey: "Loam retains water/nutrients and drains well. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain what soil erosion is and state two causes.", answerKey: "Soil erosion is the removal of topsoil by water or wind. Causes (any two): bare/uncovered soil, steep slopes, deforestation, overgrazing, heavy rain/wind. 2 marks definition, 1 each cause.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give three ways of conserving or restoring soil fertility.", answerKey: "Any three: plant cover/cover crops; contour ploughing/terracing; tree planting/windbreaks; mulching; crop rotation with legumes; add manure/compost/fertiliser; fallowing. 1 mark each.", marks: 3 },
        { type: "ESSAY", prompt: "Describe how soil is formed and explain how a farmer can prevent erosion and keep the soil fertile.", answerKey: "Formation: weathering of parent rock over time under climate, organisms and topography; development of horizons/humus (up to 6). Erosion prevention: vegetation cover, contour/terracing, trees/windbreaks, mulching (up to 5). Maintaining fertility: manure/compost, fertiliser, legume rotation, fallowing, avoid non-biodegradable waste (up to 4).", marks: 15 },
      ],
    },
    // source: LibreTexts — Geosciences (Environmental Geology), 3.1 Weathering (https://geo.libretexts.org/Courses/Coastline_College/Environmental_Geology_for_CBE/03:_Weathering_Clay_Formation_and_Soil_Formation/3.01:_Weathering)
    {
      slug: "weathering",
      title: "Weathering: Physical and Chemical",
      objective:
        "By the end of the topic, learners should be able to define weathering, distinguish physical (mechanical) from chemical weathering, and relate weathering to soil formation.",
      estimatedMinutes: 90,
      notes: `## What is weathering?

- **Weathering** — the breakdown of rocks and minerals at the Earth's surface **in place** (no movement).
- It differs from **erosion**, which is the **movement** of the broken material by water, wind, ice or gravity.
- Weathering is the first step in **soil formation**.

## Physical (mechanical) weathering

- Breaks rock into **smaller pieces** without changing its chemical make-up.
- Main processes:
  - **Freeze–thaw** — water in cracks freezes, expands and splits the rock.
  - **Temperature change** — repeated heating and cooling makes rock expand and contract until it flakes.
  - **Wetting and drying** — swelling and shrinking cracks the rock.
  - **Biological action** — plant roots grow into cracks and widen them; burrowing animals break rock.
  - **Salt crystal growth** and **pressure release** also break rock.

## Chemical weathering

- **Changes the chemical composition** of the rock — one mineral turns into a new mineral.
- Main processes:
  - **Solution** — water dissolves soluble minerals.
  - **Oxidation** — oxygen reacts with minerals (e.g. iron rusts, giving red-brown soils).
  - **Carbonation** — carbon dioxide dissolves in rain to form weak acid that dissolves limestone.
  - **Hydrolysis** — water reacts with minerals to form clays.
- Chemical weathering is **fastest in warm, wet climates** (like Liberia) and slowest in cold, dry places.

## Physical vs chemical weathering

| Feature | Physical | Chemical |
| --- | --- | --- |
| What changes | size/shape only | chemical composition |
| Product | smaller pieces of same rock | new minerals (e.g. clay, rust) |
| Favoured by | freezing, heating, roots | warmth and moisture |

- The two work **together**: physical weathering increases the **surface area**, so chemical weathering can act faster.

## Common errors and misconceptions

- **"Weathering and erosion are the same"** — weathering breaks rock **in place**; erosion **moves** it away.
- **"Physical weathering changes the minerals"** — it changes only the **size**; chemical weathering changes the composition.
- **"Chemical weathering is fastest in deserts"** — it is fastest in **warm, wet** climates.
- **"Roots cannot break rock"** — root growth is an important form of **biological physical weathering**.`,
      workedExample: `**Task.** In a warm, wet region, a large granite boulder over many years develops cracks (some widened by tree roots), and its surface turns crumbly and clay-like with rusty patches. (a) Identify one example of physical weathering and one of chemical weathering shown here. (b) Explain how the two processes speed each other up. (c) State how this leads to soil.

**Solution**

(a) Examples:
- **Physical (mechanical) weathering:** tree **roots growing into and widening cracks** (biological action) — the rock is broken into smaller pieces without a change in composition.
- **Chemical weathering:** the surface becoming **clay-like** (hydrolysis) with **rusty patches** (oxidation of iron) — new minerals have formed.

(b) They speed each other up because physical weathering (cracking) **increases the surface area** of the rock exposed to air and water, so **chemical weathering acts faster**; the chemical changes then weaken the rock, allowing more physical breakage.

(c) As the rock breaks into fine particles and mixes with **humus** from decaying plants, water, air and organisms, it gradually forms **soil**.

**Answer:** roots widening cracks = physical weathering; clay/rust formation = chemical weathering; cracking increases surface area for chemical attack, and the fine weathered particles plus humus form soil.`,
      quiz: [
        { prompt: "Weathering is the breakdown of rock", options: ["by being carried away", "in place, without movement", "only by rivers", "into living cells"], correctIndex: 1, explanation: "Weathering happens in situ; erosion moves material." },
        { prompt: "Erosion differs from weathering because erosion involves", options: ["only heat", "no change at all", "movement of material", "only roots"], correctIndex: 2, explanation: "Erosion transports weathered material." },
        { prompt: "Physical weathering changes a rock's", options: ["chemical composition", "size and shape only", "minerals into new ones", "colour by rusting"], correctIndex: 1, explanation: "Mechanical weathering breaks rock without chemical change." },
        { prompt: "Freeze–thaw weathering works because water", options: ["rusts the rock", "dissolves the rock", "expands when it freezes in cracks", "turns to clay"], correctIndex: 2, explanation: "Ice expansion splits rock." },
        { prompt: "Roots growing into cracks is an example of", options: ["erosion", "chemical weathering", "biological physical weathering", "oxidation"], correctIndex: 2, explanation: "Roots mechanically widen cracks." },
        { prompt: "Chemical weathering", options: ["needs freezing", "only breaks rock into pieces", "moves rock downhill", "changes the composition of the rock"], correctIndex: 3, explanation: "New minerals form in chemical weathering." },
        { prompt: "Rusting of iron minerals in rock is", options: ["freeze–thaw", "oxidation (chemical weathering)", "erosion", "physical weathering"], correctIndex: 1, explanation: "Oxidation is a chemical process." },
        { prompt: "Carbonation weathering dissolves", options: ["sand grains", "granite by freezing", "clay only", "limestone with weak acid"], correctIndex: 3, explanation: "CO2 in rain forms acid that dissolves limestone." },
        { prompt: "Chemical weathering is fastest in", options: ["warm, wet climates", "cold, dry climates", "deserts only", "polar regions"], correctIndex: 0, explanation: "Heat and water speed chemical reactions." },
        { prompt: "Which produces new minerals such as clay?", options: ["root action", "freeze–thaw", "temperature change", "hydrolysis (chemical weathering)"], correctIndex: 3, explanation: "Hydrolysis forms clays." },
        { prompt: "Physical and chemical weathering together because physical weathering", options: ["increases surface area for chemical attack", "stops chemical weathering", "moves rock away", "adds humus"], correctIndex: 0, explanation: "More surface area speeds chemical weathering." },
        { prompt: "Weathering is important because it is the first step in", options: ["soil formation", "erosion only", "photosynthesis", "respiration"], correctIndex: 0, explanation: "Weathered rock forms soil's mineral part." },
        { prompt: "Repeated heating and cooling of rock causes", options: ["dissolving", "new minerals", "clay formation", "expansion and contraction that flakes rock"], correctIndex: 3, explanation: "Thermal expansion is physical weathering." },
        { prompt: "Which is a chemical weathering process?", options: ["freeze–thaw", "oxidation", "root wedging", "temperature change"], correctIndex: 1, explanation: "Oxidation changes composition chemically." },
        { prompt: "The red-brown colour of many tropical soils is due to", options: ["freezing", "oxidation of iron", "salt crystals", "roots"], correctIndex: 1, explanation: "Iron oxidises (rusts) chemically." },
        { prompt: "Salt crystal growth in cracks is a form of", options: ["erosion", "chemical weathering", "physical weathering", "deposition"], correctIndex: 2, explanation: "Growing crystals mechanically break rock." },
        { prompt: "Which statement is TRUE?", options: ["Chemical weathering never changes rock", "Physical weathering forms clay", "Physical weathering keeps the same minerals", "Weathering means moving rock away"], correctIndex: 2, explanation: "Physical weathering keeps composition; only size changes." },
        { prompt: "Wetting and drying weathers rock by", options: ["dissolving it", "rusting it", "swelling and shrinking that cracks it", "moving it"], correctIndex: 2, explanation: "Volume changes crack the rock." },
        { prompt: "Weathered fine particles combine with humus to form", options: ["metal", "bedrock", "lava", "soil"], correctIndex: 3, explanation: "Minerals plus humus make soil." },
        { prompt: "Which climate has the slowest chemical weathering?", options: ["cold and dry", "warm and wet", "hot and humid", "tropical"], correctIndex: 0, explanation: "Cold, dry conditions slow chemical reactions." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define weathering and state how it differs from erosion.", answerKey: "Weathering is the breakdown of rocks/minerals in place (no movement). Erosion is the movement/transport of the broken material by water, wind, ice or gravity. 2 marks definition, 2 difference.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is an example of chemical weathering?", options: ["Freeze–thaw splitting", "Oxidation of iron minerals", "Roots widening cracks", "Temperature expansion"], correctIndex: 1, answerKey: "Oxidation changes composition. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Give two examples each of physical and chemical weathering.", answerKey: "Physical (any two): freeze–thaw, temperature change, wetting/drying, root/biological action, salt crystals. Chemical (any two): solution, oxidation, carbonation, hydrolysis. 1 mark each (max 4).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why chemical weathering is faster in Liberia than in a cold desert.", answerKey: "Chemical weathering is favoured by warmth and moisture; Liberia is warm and wet, speeding reactions, while a cold dry desert lacks the heat and water needed. Award for warmth + moisture reasoning.", marks: 4 },
        { type: "ESSAY", prompt: "Compare physical and chemical weathering, and explain how they work together to form soil.", answerKey: "Physical: breaks rock into smaller pieces, same minerals, by freeze–thaw, heating, roots, etc. (up to 5). Chemical: changes composition, forming new minerals (clay, rust) by oxidation, carbonation, hydrolysis, fastest when warm/wet (up to 5). Together: physical weathering increases surface area so chemical weathering acts faster; fine particles + humus form soil (up to 5).", marks: 15 },
      ],
    },
    // source: LibreTexts — Introduction to Human Geography (Dorrell & Henderson), 10.2 Agricultural Practices (https://socialsci.libretexts.org/Bookshelves/Geography_(Human)/Introduction_to_Human_Geography_(Dorrell_and_Henderson)/10:_Agriculture_and_Food/10.02:_Agricultural_Practices); OpenStax — World History Vol. 1, 9.2 The Emergence of Farming and the Bantu Migrations (https://openstax.org/books/world-history-volume-1/pages/9-2-the-emergence-of-farming-and-the-bantu-migrations)
    {
      slug: "liberia-food-and-cash-crops",
      title: "Liberia Food and Cash Crops Production",
      objective:
        "By the end of the topic, learners should be able to distinguish food crops from cash crops, describe subsistence, shifting (slash-and-burn) and plantation farming, and state the advantages and disadvantages of slash-and-burn farming for soil fertility.",
      estimatedMinutes: 90,
      notes: `## Food crops and cash crops

- **Food crops** — crops grown mainly to feed the farmer, the family and the local community (subsistence).
- **Cash crops** — crops grown mainly **for sale**, often for processing or export.
- **Subsistence agriculture** — growing food only to sustain the farmers and their families, consuming most of what they produce, without entering the cash economy.
- **Commercial agriculture** — farming developed mainly to produce goods for sale to processing companies.

## Crops of the West African forest zone

- By about 3000 BCE the Niger-Congo peoples of West Africa were clearing land to plant **yams, oil palm, peas and groundnuts**, and they domesticated a uniquely **African rice** grown in wetlands.
- Tubers such as **yams, sweet potatoes and cassava** grow well in tropical Africa.
- **Plantations** in West and East Africa produce **cocoa, tea, rice and rubber** for export.

| Crop group | Examples grown in the West African forest zone | Main use |
| --- | --- | --- |
| Cereal food crop | rice | staple food |
| Root and tuber food crops | cassava, yams, sweet potatoes | staple food |
| Oil and legume crops | oil palm, groundnuts | food and sale |
| Plantation (cash) crops | rubber, cocoa | sale and export |

## Shifting cultivation (slash and burn)

1. Farmers cut down the dense vegetation.
2. The debris is **burned**, clearing a plot (a *swidden*).
3. The plot is cultivated, usually for about **three years**.
4. As the soil loses its fertility, the plot is **abandoned (left fallow)** and a new site is cleared.

| Advantages | Disadvantages |
| --- | --- |
| quick, cheap way to clear forest land | soil fertility falls after a few years of cropping |
| ash from burning returns minerals to the soil for the first crops | destroys forest and the habitats of vulnerable and endangered species |
| fallow period lets vegetation and soil recover | needs large areas of land; land must be abandoned and new forest cleared |

## Plantation farming

- **Plantation** — a large landholding in a developing region, designed to produce crops for export.
- Plantations grow a single crop on a large scale (e.g. rubber, cocoa) and are a major source of export earnings, but replacing forest with one crop reduces biodiversity.

## Soil and crop choice

- **Loam** suits most crops; wet lowland **clay** soils suit rice; well-drained soils suit tuber crops (see the topic on soil types).
- Maintaining soil fertility (manure, crop rotation, fallowing) keeps yields of food and cash crops high.

## Common errors and misconceptions

- **"Cash crops are never eaten"** — some (rice, oil palm) are both food and sale crops; the difference is the main purpose.
- **"Burning permanently fertilises the soil"** — the ash helps only the first crops; fertility soon falls and the plot is abandoned.
- **"Plantations are small family farms"** — plantations are large holdings producing for export.`,
      workedExample: `**Task.** A farming family in a forest region clears 2 hectares by cutting and burning, plants rice and cassava for three years, then moves to a new plot. Their neighbour works on a large rubber estate that exports latex. (a) Name the farming system of each. (b) Classify rice, cassava and rubber as food or cash crops. (c) Explain why the family moves after three years, and give one environmental cost.

**Solution**

(a) The family practises **shifting cultivation (slash and burn)**, a form of **subsistence** farming. The rubber estate is **plantation (commercial) farming**.

(b) Rice and cassava → **food crops** (grown to feed the family). Rubber → **cash crop** (grown for sale/export).

(c) After about three years of cropping the **soil fertility falls**, so yields drop and the plot is **left fallow** while a new area is cleared. Environmental cost: forest is destroyed, which harms the habitats of vulnerable and endangered species.

**Answer:** shifting cultivation vs plantation; rice and cassava are food crops, rubber a cash crop; they move because soil fertility declines, at the cost of forest loss.`,
      quiz: [
        { prompt: "A crop grown mainly for sale is a", options: ["cover crop", "food crop", "cash crop", "weed"], correctIndex: 2, explanation: "Cash crops are grown to earn money." },
        { prompt: "Subsistence agriculture means growing food", options: ["only for export", "to sustain the farmer and family", "only for factories", "for animals only"], correctIndex: 1, explanation: "Most of the produce is consumed by the household." },
        { prompt: "Commercial agriculture produces goods mainly", options: ["for the family only", "for sale", "for decoration", "for wild animals"], correctIndex: 1, explanation: "It is market-oriented." },
        { prompt: "A plantation is", options: ["a large landholding producing crops for export", "a small vegetable garden", "a forest reserve", "a fish pond"], correctIndex: 0, explanation: "Plantations are large, export-oriented holdings." },
        { prompt: "Which crops are grown on plantations in West Africa?", options: ["potatoes and oats", "wheat and barley", "apples and grapes", "cocoa and rubber"], correctIndex: 3, explanation: "Cocoa, tea, rice and rubber are plantation crops in West and East Africa." },
        { prompt: "In slash-and-burn farming the vegetation is", options: ["left untouched", "watered daily", "cut down and burned", "sprayed with fertiliser"], correctIndex: 2, explanation: "The debris is burned to clear the plot." },
        { prompt: "A plot cleared by slash and burn is usually cultivated for about", options: ["one hundred years", "fifty years", "one week", "three years"], correctIndex: 3, explanation: "Fields are usually cropped for about three years." },
        { prompt: "Shifting cultivators abandon a plot because", options: ["soil fertility falls", "the soil becomes too rich", "it rains too little", "crops grow too well"], correctIndex: 0, explanation: "The land becomes infertile after a few years." },
        { prompt: "Leaving land to rest and recover is called", options: ["irrigation", "fallowing", "terracing", "harvesting"], correctIndex: 1, explanation: "The fallow period lets soil recover." },
        { prompt: "A major environmental disadvantage of slash and burn is", options: ["permanent soil fertility", "increase in biodiversity", "destruction of forest habitats", "less land use"], correctIndex: 2, explanation: "It is seen as ecologically destructive." },
        { prompt: "Ash from burning helps the first crops because it", options: ["removes all nutrients", "returns minerals to the soil", "kills every plant", "makes soil waterlogged"], correctIndex: 1, explanation: "Ash supplies minerals for a short time." },
        { prompt: "Which is a root/tuber food crop?", options: ["tea", "rubber", "cocoa", "cassava"], correctIndex: 3, explanation: "Cassava is a tuber staple." },
        { prompt: "West African peoples domesticated a variety of rice grown in", options: ["mountain peaks", "deserts", "glaciers", "wetlands"], correctIndex: 3, explanation: "African rice was grown in Niger wetlands." },
        { prompt: "Which crops were planted in West Africa by about 3000 BCE?", options: ["coffee and tea only", "wheat and maize", "yams, oil palm, peas and groundnuts", "apples and pears"], correctIndex: 2, explanation: "These were early West African crops." },
        { prompt: "Which soil best suits rice?", options: ["dry sand", "wet lowland clay", "bare rock", "gravel"], correctIndex: 1, explanation: "Rice grows in waterlogged clay soils." },
        { prompt: "A cleared plot in shifting cultivation is called a", options: ["plantation", "terrace", "swidden", "orchard"], correctIndex: 2, explanation: "The cleared area is a swidden." },
        { prompt: "Plantations usually grow", options: ["no crops", "many crops in tiny plots", "one crop on a large scale", "only vegetables"], correctIndex: 2, explanation: "Monoculture of an export crop." },
        { prompt: "Rubber is classified as a", options: ["weed", "food crop", "fodder crop", "cash crop"], correctIndex: 3, explanation: "It is grown for sale and export." },
        { prompt: "Which practice keeps crop yields high on permanent farms?", options: ["removing topsoil", "burning every year", "maintaining soil fertility with manure and rotation", "planting on bare slopes"], correctIndex: 2, explanation: "Fertility management sustains yields." },
        { prompt: "Shifting cultivation needs", options: ["no land", "very little land", "large areas of land", "only greenhouses"], correctIndex: 2, explanation: "Land must be abandoned and new land cleared." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between food crops and cash crops, giving two examples of each.", answerKey: "Food crops are grown mainly to feed the household (e.g. rice, cassava, yams); cash crops are grown mainly for sale/export (e.g. rubber, cocoa). 2 marks for distinction, 1 per example (max 4).", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Why do shifting cultivators move to a new plot after a few years?", options: ["The soil loses its fertility", "The soil becomes too fertile", "The government forbids farming", "Rainfall stops completely"], correctIndex: 0, answerKey: "Fertility falls after about three years. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Describe the steps in slash-and-burn farming.", answerKey: "Cut vegetation; burn debris to clear a plot (swidden); cultivate for about three years; abandon/fallow when fertility falls and clear a new site. 1 mark per step.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two advantages and two disadvantages of slash-and-burn farming.", answerKey: "Advantages: quick/cheap clearing; ash adds minerals for first crops; fallow allows recovery. Disadvantages: fertility falls quickly; forest and habitats destroyed; needs large land areas. 1 mark each.", marks: 4 },
        { type: "ESSAY", prompt: "Compare subsistence shifting cultivation with plantation farming in West Africa, referring to purpose, crops, scale and effects on soil and forest.", answerKey: "Shifting cultivation: subsistence, food crops (rice, cassava, yams), small plots, slash and burn, fertility falls, forest cleared repeatedly (up to 7). Plantation: commercial/export, cash crops (rubber, cocoa), large single-crop holdings, forest replaced by monoculture, export earnings (up to 7). Conclusion (1).", marks: 15 },
      ],
    },
    // source: CK-12 — Biodegradable vs Non-biodegradable Substances (https://www.ck12.org/flexi/life-science/organic-compounds/lesspgreaterdifferentiate-between-biodegradable-and-non-biodegradable-substances-cite-examples-less-by-pgreater/); LibreTexts — Introduction to Environmental Science (Bakersfield College), 16.4 Waste Disposal (https://bio.libretexts.org/Courses/Bakersfield_College/Introduction_to_Environmental_Science/16:_Solid_Waste_Management/16.04:_Waste_Disposal); LibreTexts — AP Environmental Science, 1.17 Solid Waste (https://bio.libretexts.org/Bookshelves/Ecology/AP_Environmental_Science/01:_Chapters/1.17:_Solid_Waste)
    {
      slug: "non-biodegradable-substances-and-soil-fertility",
      title: "Effects of Non-biodegradable Substances on Soil Fertility",
      objective:
        "By the end of the topic, learners should be able to distinguish biodegradable from non-biodegradable substances and explain how non-biodegradable and hazardous wastes harm soil, water and living things, and how they can be managed.",
      estimatedMinutes: 80,
      notes: `## Biodegradable and non-biodegradable substances

| Type | Meaning | Examples |
| --- | --- | --- |
| **Biodegradable** | broken down by natural processes, e.g. the action of bacteria, fungi and other organisms; returns to the environment without harm | food scraps, paper, wood, cotton |
| **Non-biodegradable** | cannot easily be broken down by natural processes; persists in the environment for a long time and causes pollution | plastics, glass, metal cans |

- Decomposers recycle biodegradable matter into **humus and mineral nutrients**, which keeps soil fertile.
- Non-biodegradable material is **not decayed by microorganisms, or decays very slowly**, so it adds nothing to soil fertility and builds up.

## How non-biodegradable waste harms the soil

1. **Persistence** — plastics, glass and metals stay in the soil for a very long time instead of forming humus.
2. **Open dumps** — simply piling up trash; contaminants mix with rainwater to form **leachate**, which soaks into the ground or runs off.
3. **Toxic leachate** — may contain toxic chemicals such as **dioxin, mercury and pesticides**, which poison soil organisms and plants and can reach groundwater.
4. **Disease** — open dumps support organisms that house and transmit disease (reservoirs and vectors).
5. **Biomagnification** — some non-biodegradable chemicals (e.g. certain pesticides) increase in concentration at each higher trophic level of a food chain.

## Hazardous waste

- **Hazardous wastes** — materials that are toxic, carcinogenic (cause cancer), mutagenic (cause DNA mutations), teratogenic (cause birth defects), highly flammable, corrosive or explosive.
- Burning waste (incineration) reduces its volume by about 85 percent but releases air pollutants such as particulates, sulfur dioxide and nitrogen oxides.

## Managing non-biodegradable waste

- **Sanitary landfills** — trash is spread, compacted and sealed from the top and bottom; liners of clay, sand and plastic collect leachate and protect groundwater, which is monitored.
- **Reduce, reuse, recycle** — use fewer materials, use items again, and recycle plastics, glass and metals so less waste reaches the soil.
- **Separate waste** — keep biodegradable waste (for composting) apart from plastics and metals.

## Common errors and misconceptions

- **"Plastic rots like leaves"** — plastics are non-biodegradable and persist for a very long time.
- **"Burying rubbish makes it harmless"** — buried waste forms leachate that can poison soil and groundwater.
- **"Burning plastic gets rid of the problem"** — burning releases air pollutants.`,
      workedExample: `**Task.** A school's waste includes banana peels, old exercise books, plastic water sachets, broken bottles and used batteries. (a) Sort them into biodegradable and non-biodegradable. (b) Explain how dumping the non-biodegradable items on a farm affects the soil. (c) Suggest a better way to handle each group.

**Solution**

(a) **Biodegradable:** banana peels, exercise books (paper). **Non-biodegradable:** plastic sachets, broken bottles (glass), batteries (metal and hazardous chemicals).

(b) Effects on the farm soil:
1. Plastics and glass **do not decay**, so they add no humus or nutrients and build up in the soil.
2. Rainwater passing through the dump forms **leachate**; battery chemicals such as **mercury** can poison soil organisms and crops and reach groundwater.
3. The dump can harbour **disease vectors**.

(c) Better handling: compost the peels and recycle the paper; **reduce, reuse and recycle** plastics and glass; send batteries for safe disposal as **hazardous waste** (e.g. to a lined sanitary landfill).

**Answer:** peels and paper are biodegradable; plastic, glass and batteries are not — they persist and leach toxins into soil, so they should be reduced, recycled or disposed of safely.`,
      quiz: [
        { prompt: "A biodegradable substance is one that", options: ["is broken down by bacteria and fungi", "never breaks down", "is always made of metal", "is only glass"], correctIndex: 0, explanation: "Decomposers break it down naturally." },
        { prompt: "Which is non-biodegradable?", options: ["plastic", "food scraps", "paper", "cotton"], correctIndex: 0, explanation: "Plastics persist in the environment." },
        { prompt: "Which is biodegradable?", options: ["metal cans", "glass", "wood", "plastic bags"], correctIndex: 2, explanation: "Wood is decayed by microorganisms." },
        { prompt: "Non-biodegradable substances in soil", options: ["turn into humus quickly", "persist for a long time", "add nutrients", "feed earthworms"], correctIndex: 1, explanation: "They are not decayed or decay very slowly." },
        { prompt: "Liquid formed when rainwater passes through waste is", options: ["plasma", "humus", "sap", "leachate"], correctIndex: 3, explanation: "Contaminants mix with rain to form leachate." },
        { prompt: "Leachate may contain", options: ["oxygen only", "only pure water", "vitamins", "dioxin, mercury and pesticides"], correctIndex: 3, explanation: "Leachate can carry toxic chemicals." },
        { prompt: "Open dumps are a health risk because they", options: ["add humus", "purify water", "support disease reservoirs and vectors", "prevent flies"], correctIndex: 2, explanation: "Dumps harbour disease-carrying organisms." },
        { prompt: "The increase of a pesticide's concentration up a food chain is", options: ["biomagnification", "biodegradation", "photosynthesis", "nitrification"], correctIndex: 0, explanation: "Non-biodegradable chemicals accumulate at higher levels." },
        { prompt: "Why do plastics not improve soil fertility?", options: ["they hold air", "they are rich in nitrogen", "they are not decomposed into humus and minerals", "they are eaten by plants"], correctIndex: 2, explanation: "No decomposition means no nutrient release." },
        { prompt: "A waste that causes birth defects is described as", options: ["renewable", "biodegradable", "organic", "teratogenic"], correctIndex: 3, explanation: "Teratogenic = causing birth defects." },
        { prompt: "A carcinogenic substance causes", options: ["growth", "cancer", "photosynthesis", "fertility"], correctIndex: 1, explanation: "Carcinogens cause cancer." },
        { prompt: "Sanitary landfills protect groundwater by", options: ["pumping leachate into rivers", "leaving waste open", "burning everything", "sealing waste with liners top and bottom"], correctIndex: 3, explanation: "Liners collect leachate." },
        { prompt: "Modern landfill liners are made of layers of", options: ["leaves", "paper only", "clay, sand and plastic", "food waste"], correctIndex: 2, explanation: "These layers contain leachate." },
        { prompt: "Incineration reduces waste volume by about", options: ["0 percent", "5 percent", "100 percent", "85 percent"], correctIndex: 3, explanation: "But it releases air pollutants." },
        { prompt: "A drawback of burning waste is that it", options: ["removes all toxins safely", "creates humus", "adds fertility", "releases air pollutants"], correctIndex: 3, explanation: "Particulates, SO₂ and NOx are released." },
        { prompt: "The three Rs of waste management are", options: ["run, rest, repeat", "read, write, recite", "rot, rust, remove", "reduce, reuse, recycle"], correctIndex: 3, explanation: "They cut the amount of waste." },
        { prompt: "Used batteries should be treated as", options: ["fertiliser", "compost", "hazardous waste", "food waste"], correctIndex: 2, explanation: "They contain toxic metals such as mercury." },
        { prompt: "Which organisms break down biodegradable waste?", options: ["rocks", "plastics", "bacteria and fungi", "metals"], correctIndex: 2, explanation: "Decomposers do the breaking down." },
        { prompt: "Separating food waste from plastics allows the food waste to be", options: ["melted", "composted", "recycled as glass", "burned only"], correctIndex: 1, explanation: "Biodegradable waste can be composted." },
        { prompt: "Glass is", options: ["biodegradable", "non-biodegradable", "a fertiliser", "humus"], correctIndex: 1, explanation: "Glass persists in the environment." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define biodegradable and non-biodegradable substances and give two examples of each.", answerKey: "Biodegradable: broken down by natural processes/decomposers (food scraps, paper, wood, cotton). Non-biodegradable: not easily broken down, persist (plastic, glass, metal cans). 1 mark per definition, 1 per example.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "What is leachate?", options: ["Decomposed plant matter", "Liquid formed as rainwater passes through waste", "A kind of plastic", "Clean groundwater"], correctIndex: 1, answerKey: "Contaminants mix with rainwater to form leachate. Option B.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain two ways in which open dumping of non-biodegradable waste harms soil and living things.", answerKey: "Any two: waste persists and adds no humus; toxic leachate (dioxin, mercury, pesticides) poisons soil/organisms/groundwater; dumps harbour disease vectors; biomagnification of persistent chemicals. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State three ways of managing non-biodegradable waste.", answerKey: "Reduce; reuse; recycle; sanitary landfills with liners; separating waste; safe disposal of hazardous waste. 1 mark each, max 3.", marks: 3 },
        { type: "ESSAY", prompt: "Discuss the effects of non-biodegradable substances on soil fertility and the environment, and propose measures a community can take.", answerKey: "Definitions/examples (2). Effects: persistence, no humus/nutrient return, leachate toxins in soil and groundwater, disease vectors, biomagnification, air pollution if burned (up to 7). Measures: 3 Rs, separation and composting of biodegradables, sanitary landfills, hazardous-waste handling, education (up to 6).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 18.2 Formation of New Species (https://openstax.org/books/biology-2e/pages/18-2-formation-of-new-species)
    {
      slug: "isolation-mechanisms-of-species",
      title: "Isolation Mechanisms of Species",
      objective:
        "By the end of the topic, learners should be able to define a species, describe prezygotic and postzygotic isolating mechanisms with examples, and explain how geographic isolation leads to new species.",
      estimatedMinutes: 90,
      notes: `## What is a species?

- **Biological species concept** — a species is a group of individual organisms that **interbreed and produce fertile, viable offspring**.
- **Reproductive isolation** — the ability of a species to reproduce with members of its own kind but **not** with members of other species. Isolating mechanisms keep species separate.

## Prezygotic barriers (act before fertilisation)

| Barrier | How it works | Example |
| --- | --- | --- |
| **Temporal isolation** | species breed at different times | one frog species breeds January–March, another March–May |
| **Habitat isolation** | populations live in different habitats and do not meet | one cricket species prefers sandy soil, *Gryllus firmus* prefers loamy soil |
| **Behavioural isolation** | a specific behaviour is needed for mating | male fireflies of each species flash a different light pattern |
| **Mechanical isolation** | reproductive organs do not fit | damselfly males of each species have differently shaped organs |
| **Gametic isolation** | sperm and egg are incompatible | gametes of different species cannot fuse |

## Postzygotic barriers (act after fertilisation)

- **Hybrid inviability** — hybrid embryos fail to develop normally and do not survive past the embryonic stages.
- **Hybrid sterility** — hybrids are born and grow but are **sterile** (e.g. the mule, from a horse and a donkey).

## Geographic isolation and speciation

- **Allopatric speciation** ("other homeland") — a population is **geographically separated** from the parent species and evolves separately.
  - **Dispersal** — a few members move to a new geographical area.
  - **Vicariance** — a natural event (e.g. a river changing course, mountains forming) physically divides a population.
- **Sympatric speciation** ("same homeland") — new species form **within one location**, without geographic separation.
- Once separated, the populations experience different mutations, selection and drift; after enough time they can no longer interbreed — they are separate species.

\`\`\`svg Allopatric speciation by vicariance
<svg viewBox="0 0 300 110" role="img" aria-label="A barrier divides one population into two that become separate species">
  <ellipse cx="60" cy="55" rx="45" ry="30" fill="#bbf7d0" stroke="currentColor"/>
  <text x="60" y="58" font-size="9" text-anchor="middle" fill="currentColor">one population</text>
  <line x1="110" y1="55" x2="130" y2="55" stroke="currentColor" marker-end="url(#a)"/>
  <ellipse cx="185" cy="55" rx="45" ry="30" fill="#bbf7d0" stroke="currentColor"/>
  <line x1="185" y1="22" x2="185" y2="88" stroke="#2563eb" stroke-width="4"/>
  <text x="185" y="104" font-size="8" text-anchor="middle" fill="currentColor">barrier (e.g. river)</text>
  <text x="250" y="45" font-size="9" fill="currentColor">species A</text>
  <text x="250" y="70" font-size="9" fill="currentColor">species B</text>
  <defs><marker id="a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>
</svg>
\`\`\`

## Common errors and misconceptions

- **"Any two animals that mate are the same species"** — they must produce **fertile, viable** offspring; horse × donkey gives a sterile mule.
- **"Isolation always means a physical barrier"** — temporal, behavioural, mechanical and gametic barriers work even when species live together.
- **"Speciation needs geographic separation"** — sympatric speciation happens in one place.`,
      workedExample: `**Task.** Classify each as prezygotic or postzygotic and name the barrier: (a) two toad species in the same pond, one calling and breeding in March, the other in June; (b) a horse and donkey produce a strong but sterile mule; (c) two firefly species flash different light codes; (d) a river changes course and splits a population of mice, which, after many generations, can no longer interbreed.

**Solution**

(a) Breeding at different times → **prezygotic, temporal isolation**.
(b) Offspring formed but sterile → **postzygotic, hybrid sterility**.
(c) Different courtship signals → **prezygotic, behavioural isolation**.
(d) A natural barrier divides the population → **geographic isolation by vicariance**, leading to **allopatric speciation**; the populations have evolved prezygotic/postzygotic barriers.

**Answer:** (a) temporal; (b) hybrid sterility; (c) behavioural; (d) allopatric speciation by vicariance.`,
      quiz: [
        { prompt: "According to the biological species concept, a species is a group that", options: ["interbreeds and produces fertile, viable offspring", "looks exactly alike", "lives in one country", "eats the same food"], correctIndex: 0, explanation: "Fertile, viable offspring define a species." },
        { prompt: "Barriers that act before fertilisation are", options: ["hybrid", "postzygotic", "prezygotic", "sterile"], correctIndex: 2, explanation: "Pre- = before the zygote." },
        { prompt: "Two frog species breeding in different months show", options: ["gametic isolation", "mechanical isolation", "hybrid sterility", "temporal isolation"], correctIndex: 3, explanation: "Different breeding times = temporal." },
        { prompt: "Fireflies using different light patterns show", options: ["vicariance", "habitat isolation", "hybrid inviability", "behavioural isolation"], correctIndex: 3, explanation: "Mating behaviour differs." },
        { prompt: "Damselfly organs that only fit their own species show", options: ["dispersal", "temporal isolation", "behavioural isolation", "mechanical isolation"], correctIndex: 3, explanation: "Structural incompatibility." },
        { prompt: "Crickets preferring sandy vs loamy soil show", options: ["temporal isolation", "gametic isolation", "hybrid sterility", "habitat isolation"], correctIndex: 3, explanation: "They live in different habitats." },
        { prompt: "A mule (horse × donkey) is an example of", options: ["hybrid sterility", "temporal isolation", "habitat isolation", "behavioural isolation"], correctIndex: 0, explanation: "The hybrid cannot reproduce." },
        { prompt: "Hybrid embryos that die early show", options: ["hybrid sterility", "hybrid inviability", "temporal isolation", "dispersal"], correctIndex: 1, explanation: "They do not survive past embryonic stages." },
        { prompt: "Postzygotic barriers act", options: ["only in plants", "before mating", "after fertilisation", "never"], correctIndex: 2, explanation: "Post- = after the zygote forms." },
        { prompt: "Allopatric speciation involves", options: ["hybrid fertility", "speciation in one place", "no evolution", "geographic separation of populations"], correctIndex: 3, explanation: "Allo- = other, patric = homeland." },
        { prompt: "Sympatric speciation occurs", options: ["only on islands", "within one location", "only after a flood", "only in bacteria"], correctIndex: 1, explanation: "Sym- = same homeland." },
        { prompt: "When a few members move to a new area, this is", options: ["temporal isolation", "vicariance", "hybridisation", "dispersal"], correctIndex: 3, explanation: "Dispersal = movement to a new area." },
        { prompt: "When a natural event physically divides a population, this is", options: ["mutualism", "dispersal", "gametic isolation", "vicariance"], correctIndex: 3, explanation: "Vicariance splits a population in place." },
        { prompt: "Sperm and egg of different species failing to fuse is", options: ["behavioural isolation", "habitat isolation", "gametic isolation", "hybrid sterility"], correctIndex: 2, explanation: "Gametes are incompatible." },
        { prompt: "Reproductive isolation is important because it", options: ["stops all reproduction", "joins all species together", "keeps species separate", "causes extinction always"], correctIndex: 2, explanation: "It prevents gene flow between species." },
        { prompt: "Which barrier is postzygotic?", options: ["temporal isolation", "hybrid sterility", "mechanical isolation", "behavioural isolation"], correctIndex: 1, explanation: "It acts after hybrids form." },
        { prompt: "A river changing course and splitting a population is an example of", options: ["mutualism", "dispersal", "sympatric speciation", "vicariance"], correctIndex: 3, explanation: "A natural barrier divides them." },
        { prompt: "Two species living in the same area can stay separate because of", options: ["fertile hybrids", "identical courtship", "prezygotic barriers such as different breeding times", "shared gametes"], correctIndex: 2, explanation: "Barriers work even without distance." },
        { prompt: "'Allo-' in allopatric means", options: ["before", "same", "other", "after"], correctIndex: 2, explanation: "Allo- = other." },
        { prompt: "Geographically separated populations become new species when they", options: ["can no longer interbreed", "still produce fertile hybrids", "look identical", "share one habitat"], correctIndex: 0, explanation: "Reproductive isolation marks a new species." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a species according to the biological species concept.", answerKey: "A group of individual organisms that interbreed and produce fertile, viable offspring. 3 marks (interbreed, fertile, viable).", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "A horse and a donkey produce a sterile mule. This is an example of", options: ["Temporal isolation", "Hybrid sterility", "Behavioural isolation", "Habitat isolation"], correctIndex: 1, answerKey: "The hybrid is sterile — a postzygotic barrier. Option B.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Name and describe three prezygotic isolating mechanisms, with an example of each.", answerKey: "Any three: temporal (breeding seasons differ – frogs Jan–Mar vs Mar–May); habitat (different habitats – crickets sandy vs loamy soil); behavioural (courtship – firefly light patterns); mechanical (organs do not fit – damselflies); gametic (gametes cannot fuse). 2 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between allopatric and sympatric speciation.", answerKey: "Allopatric: populations geographically separated (dispersal or vicariance) evolve into new species. Sympatric: new species form within the same location without geographic separation. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Explain how isolation mechanisms maintain species and how geographic isolation can lead to the formation of new species.", answerKey: "Species concept (2). Prezygotic barriers with examples (up to 5). Postzygotic: hybrid inviability, hybrid sterility/mule (up to 3). Allopatric speciation: dispersal/vicariance, separate evolution, loss of interbreeding (up to 4). Sympatric contrast (1).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 45.6 Community Ecology (https://openstax.org/books/biology-2e/pages/45-6-community-ecology)
    {
      slug: "inter-specific-interactions",
      title: "Inter-specific Interactions (Biological Associations)",
      objective:
        "By the end of the topic, learners should be able to describe competition, predation and the symbiotic relationships (mutualism, commensalism and parasitism) between species.",
      estimatedMinutes: 100,
      notes: `## Interactions between species

**Inter-specific interactions** are relationships **between different species** in a community. The main types are competition, predation and symbiosis (mutualism, commensalism, parasitism).

## Competition

- **Competition** — two species struggle for the **same limited resource** (food, water, light, space).
- The **competitive exclusion principle**: two species cannot occupy the exact same niche — one out-competes the other, or they share by **resource partitioning** (using slightly different resources).
- Both species are **harmed** (–/–).

## Predation

- **Predation** — one organism (the **predator**) kills and eats another (the **prey**). Benefit/harm: +/–.
- Predator and prey numbers rise and fall in linked cycles (predators lag behind prey).
- Prey have **defences**: thorns/shells (mechanical), poisons (chemical), **camouflage**, and **warning colours**.
- **Herbivory** is a special case: animals eat plants.

## Symbiosis — living together

| Relationship | Effect | Meaning | Example |
| --- | --- | --- | --- |
| **Mutualism** | +/+ | both benefit | lichen (fungus + alga); termite + gut protozoa; Rhizobium + legume |
| **Commensalism** | +/0 | one benefits, other unaffected | bird nesting in a tree; remora on a shark |
| **Parasitism** | +/– | parasite benefits, host harmed | tapeworm in gut; *Plasmodium* (malaria) |

## Summary of effects

| Interaction | Species A | Species B |
| --- | --- | --- |
| Competition | harmed | harmed |
| Predation | benefits (predator) | harmed (prey) |
| Mutualism | benefits | benefits |
| Commensalism | benefits | unaffected |
| Parasitism | benefits (parasite) | harmed (host) |

## Common errors and misconceptions

- **"All living-together (symbiosis) helps both"** — only **mutualism** helps both; parasitism harms the host.
- **"Predation and parasitism are the same"** — a predator **kills** its prey; a parasite usually **lives on/in** the host without killing it quickly.
- **"Competition only happens within one species"** — it also happens **between different species** (inter-specific).
- **"Commensalism harms the host"** — in commensalism the second species is **unaffected**.`,
      workedExample: `**Task.** Classify each relationship and state who benefits or is harmed: (a) a tapeworm living in a goat's gut; (b) lichen made of a fungus and an alga; (c) a cattle egret feeding on insects stirred up by a grazing cow, which is unaffected; (d) a lion hunting a zebra; (e) two species of birds feeding on the same seeds.

**Solution**

(a) **Tapeworm in a goat** → **parasitism** (+/–). The tapeworm benefits (food); the goat (host) is harmed.

(b) **Lichen (fungus + alga)** → **mutualism** (+/+). The alga photosynthesises food; the fungus provides shelter and water — both benefit.

(c) **Cattle egret + grazing cow (unaffected)** → **commensalism** (+/0). The egret benefits (food); the cow is neither helped nor harmed.

(d) **Lion hunting a zebra** → **predation** (+/–). The lion (predator) benefits; the zebra (prey) is killed/harmed.

(e) **Two bird species eating the same seeds** → **competition** (–/–). Both are harmed as they compete for the same limited food.

**Answer:** (a) parasitism; (b) mutualism; (c) commensalism; (d) predation; (e) competition — classified by whether each partner benefits, is harmed or is unaffected.`,
      quiz: [
        { prompt: "Inter-specific interactions occur between", options: ["the same species only", "different species", "non-living things", "cells of one body"], correctIndex: 1, explanation: "'Inter-specific' means between species." },
        { prompt: "In competition, the two species are", options: ["both harmed", "both helped", "one helped one unaffected", "unaffected"], correctIndex: 0, explanation: "Competition is –/–." },
        { prompt: "The competitive exclusion principle states that", options: ["all species help each other", "predators always win", "two species cannot share the exact same niche", "competition never happens"], correctIndex: 2, explanation: "One out-competes the other in an identical niche." },
        { prompt: "In predation, the predator ... and the prey ...", options: ["benefits; is harmed", "is harmed; benefits", "is unaffected; benefits", "both benefit"], correctIndex: 0, explanation: "Predation is +/–." },
        { prompt: "A relationship where both species benefit is", options: ["predation", "commensalism", "parasitism", "mutualism"], correctIndex: 3, explanation: "Mutualism is +/+." },
        { prompt: "Lichen (fungus + alga) is an example of", options: ["parasitism", "mutualism", "predation", "competition"], correctIndex: 1, explanation: "Both partners benefit." },
        { prompt: "A tapeworm in the gut shows", options: ["predation", "mutualism", "commensalism", "parasitism"], correctIndex: 3, explanation: "Parasite benefits, host harmed." },
        { prompt: "In commensalism", options: ["one benefits and the other is unaffected", "both benefit", "both are harmed", "the host dies"], correctIndex: 0, explanation: "Commensalism is +/0." },
        { prompt: "Which pair is correctly matched?", options: ["commensalism – both harmed", "mutualism – host harmed", "parasitism – host harmed", "predation – both benefit"], correctIndex: 2, explanation: "In parasitism the host is harmed." },
        { prompt: "Thorns and hard shells are prey defences that are", options: ["camouflage", "chemical", "mechanical", "warning colours"], correctIndex: 2, explanation: "Physical structures deter predators." },
        { prompt: "Warning (bright) colours tell predators that prey is", options: ["asleep", "tasty", "invisible", "poisonous/dangerous"], correctIndex: 3, explanation: "Aposematic colours signal danger." },
        { prompt: "Rhizobium bacteria and legume plants show", options: ["mutualism", "parasitism", "predation", "competition"], correctIndex: 0, explanation: "The plant gets nitrogen; bacteria get food/shelter." },
        { prompt: "Herbivory is when animals eat", options: ["decomposers", "other predators", "plants", "minerals"], correctIndex: 2, explanation: "Herbivory is eating plants." },
        { prompt: "Predator and prey population numbers", options: ["rise and fall in linked cycles", "stay exactly constant", "are unrelated", "always increase"], correctIndex: 0, explanation: "Predators lag behind prey peaks." },
        { prompt: "Resource partitioning allows competing species to", options: ["coexist by using slightly different resources", "occupy identical niches", "eliminate each other", "stop eating"], correctIndex: 0, explanation: "Different microniches reduce competition." },
        { prompt: "A remora fish riding a shark without harming it shows", options: ["commensalism", "mutualism", "parasitism", "predation"], correctIndex: 0, explanation: "The remora benefits; the shark is unaffected." },
        { prompt: "Which interaction harms the host but usually does not kill it quickly?", options: ["mutualism", "predation", "parasitism", "commensalism"], correctIndex: 2, explanation: "Parasites live on/in the host over time." },
        { prompt: "Camouflage helps prey by", options: ["poisoning predators", "attracting predators", "blending with surroundings to avoid predators", "growing thorns"], correctIndex: 2, explanation: "Blending in avoids detection." },
        { prompt: "Which is a –/– relationship?", options: ["mutualism", "competition", "commensalism", "predation"], correctIndex: 1, explanation: "Both competitors are harmed." },
        { prompt: "In mutualism between termites and gut protozoa, the protozoa", options: ["help digest wood and gain a home/food", "harm the termite", "are unaffected", "kill the termite"], correctIndex: 0, explanation: "Both partners benefit." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the three types of symbiosis and state the effect on each partner.", answerKey: "Mutualism (+/+, both benefit); commensalism (+/0, one benefits, other unaffected); parasitism (+/–, parasite benefits, host harmed). 1 mark name + 1 mark effect each, max 6→cap at marks.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which relationship benefits one species and harms the other?", options: ["Parasitism", "Mutualism", "Commensalism", "Neutralism"], correctIndex: 0, answerKey: "Parasitism is +/–. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between predation and parasitism.", answerKey: "A predator kills and eats its prey (usually quickly); a parasite lives on/in a host, taking food and harming it but usually not killing it quickly. Award for kill vs live-on-host distinction.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State two ways prey animals defend themselves against predators.", answerKey: "Any two: mechanical (thorns/shells), chemical (poisons), camouflage, warning colours, mimicry. 1 mark each.", marks: 3 },
        { type: "ESSAY", prompt: "Describe the main inter-specific interactions in a community, giving an example of each and stating who benefits or is harmed.", answerKey: "Competition (–/–, same resource, competitive exclusion); predation (+/–, predator eats prey); mutualism (+/+, e.g. lichen); commensalism (+/0, e.g. bird in tree); parasitism (+/–, e.g. tapeworm) (up to 12). Reward correct examples and effects, and clear explanation (up to 3).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 46.2 Energy Flow through Ecosystems (https://openstax.org/books/biology-2e/pages/46-2-energy-flow-through-ecosystems)
    {
      slug: "ecosystems-and-energy-flow",
      title: "Trophic Levels: Producers, Consumers, Decomposers, Food Chains and Webs",
      objective:
        "By the end of the topic, learners should be able to distinguish habitat and niche, describe trophic levels, and explain energy flow through food chains, food webs and ecological pyramids.",
      estimatedMinutes: 120,
      notes: `## Key ecological terms

- **Ecosystem** — a community of living organisms together with their non-living environment, interacting as a unit.
- **Habitat** — the place where an organism lives.
- **Niche** — the role an organism plays (what it eats, how it lives). *Two species cannot occupy the same niche* (competitive exclusion).
- **Population** — organisms of one species in an area; **community** — all the populations together.

## Trophic levels (feeding levels)

| Level | Name | Example |
| --- | --- | --- |
| 1st | **Producers (autotrophs)** | green plants, algae |
| 2nd | **Primary consumers** (herbivores) | grasshopper, goat |
| 3rd | **Secondary consumers** (carnivores) | frog, small bird |
| 4th | **Tertiary consumers** (top carnivores) | hawk, snake |
| — | **Decomposers** | bacteria and fungi |

- **Producers** trap the Sun's energy by **photosynthesis** and form the base of every food chain.
- **Decomposers** break down dead matter and recycle nutrients.

## Food chains and food webs

- A **food chain** shows one path of energy: grass → grasshopper → frog → snake → hawk.
- A **food web** is many food chains linked together, showing the real feeding relationships in a community.
- Arrows point **in the direction energy flows** (from the eaten to the eater).

\`\`\`svg A simple food chain
<svg viewBox="0 0 340 70" role="img" aria-label="Food chain grass to grasshopper to frog to snake to hawk">
  <g font-size="9" fill="currentColor" text-anchor="middle">
  <rect x="5" y="25" width="52" height="24" rx="4" fill="#bbf7d0" stroke="currentColor"/><text x="31" y="41">grass</text>
  <rect x="80" y="25" width="60" height="24" rx="4" fill="#d9f99d" stroke="currentColor"/><text x="110" y="41">grasshopper</text>
  <rect x="163" y="25" width="46" height="24" rx="4" fill="#fde68a" stroke="currentColor"/><text x="186" y="41">frog</text>
  <rect x="232" y="25" width="46" height="24" rx="4" fill="#fdba74" stroke="currentColor"/><text x="255" y="41">snake</text>
  <rect x="300" y="25" width="36" height="24" rx="4" fill="#fca5a5" stroke="currentColor"/><text x="318" y="41">hawk</text>
  </g>
  <g stroke="currentColor" stroke-width="1.5"><line x1="57" y1="37" x2="79" y2="37"/><line x1="140" y1="37" x2="162" y2="37"/><line x1="209" y1="37" x2="231" y2="37"/><line x1="278" y1="37" x2="299" y2="37"/></g>
</svg>
\`\`\`

## Energy flow and the 10% rule

- Energy enters as **sunlight**, is fixed by producers, and passes up the levels.
- At each transfer **most energy is lost** as heat (respiration) and in undigested matter — only about **10%** passes to the next level.
- Because energy runs out, food chains usually have only **4–5 links**.

## Ecological pyramids

- **Pyramid of numbers** — number of organisms at each level (can be odd-shaped, e.g. one tree feeding many insects).
- **Pyramid of biomass** — total mass at each level.
- **Pyramid of energy** — energy at each level; it is **always upright** because energy always decreases upward.

## Common errors and misconceptions

- **"Energy is recycled like nutrients"** — energy **flows one way** and is lost as heat; only nutrients are recycled.
- **"Arrows point to the prey"** — arrows point **from prey to predator** (the way energy flows).
- **"Habitat and niche are the same"** — habitat is the place; niche is the role.
- **"Food chains can be very long"** — energy loss limits them to about 4–5 levels.`,
      workedExample: `**Task.** In a pond: algae → water flea → small fish → kingfisher. (a) Name the trophic level of each organism. (b) If the algae capture 10 000 kJ of energy, estimate the energy reaching the small fish using the 10% rule. (c) Explain why the chain does not continue for many more links.

**Solution**

(a) Trophic levels:
- **Algae** → **producer** (1st level).
- **Water flea** → **primary consumer** (herbivore, 2nd level).
- **Small fish** → **secondary consumer** (3rd level).
- **Kingfisher** → **tertiary consumer** (top carnivore, 4th level).

(b) Applying the **10% rule**:
- Algae (producers): 10 000 kJ.
- Water flea: 10% of 10 000 = **1 000 kJ**.
- Small fish: 10% of 1 000 = **100 kJ**.
- So about **100 kJ** reaches the small fish.

(c) The chain **cannot go much further** because at each step about 90% of the energy is **lost as heat (respiration)** and in wastes, so only ~10% passes on. After a few links, too **little energy remains** to support another level — chains are limited to about 4–5 links.

**Answer:** algae (producer), water flea (primary consumer), small fish (secondary consumer), kingfisher (tertiary consumer); ~100 kJ reaches the fish; energy loss at each level limits the chain to a few links.`,
      quiz: [
        { prompt: "The place where an organism lives is its", options: ["population", "niche", "habitat", "biomass"], correctIndex: 2, explanation: "Habitat is the living place." },
        { prompt: "The role an organism plays in its ecosystem is its", options: ["community", "habitat", "trophic biomass", "niche"], correctIndex: 3, explanation: "The niche is its function/way of life." },
        { prompt: "Producers obtain energy by", options: ["decomposing", "eating animals", "photosynthesis", "drinking water"], correctIndex: 2, explanation: "Producers trap sunlight to make food." },
        { prompt: "A herbivore that eats producers is a", options: ["primary consumer", "producer", "decomposer", "tertiary consumer"], correctIndex: 0, explanation: "Primary consumers eat plants." },
        { prompt: "Bacteria and fungi that break down dead matter are", options: ["producers", "decomposers", "herbivores", "carnivores"], correctIndex: 1, explanation: "Decomposers recycle nutrients." },
        { prompt: "In a food chain, arrows point", options: ["from prey to predator (energy flow)", "from predator to prey", "in both directions", "downward only"], correctIndex: 0, explanation: "Arrows follow the direction of energy flow." },
        { prompt: "A food web is", options: ["many food chains linked together", "a single food chain", "a pyramid of numbers", "a habitat"], correctIndex: 0, explanation: "Webs show interconnected chains." },
        { prompt: "About how much energy passes to the next trophic level?", options: ["50%", "90%", "100%", "10%"], correctIndex: 3, explanation: "Roughly 10% transfers; 90% is lost." },
        { prompt: "Most energy is lost between levels as", options: ["new producers", "heat from respiration", "extra sunlight", "minerals"], correctIndex: 1, explanation: "Respiration releases heat energy." },
        { prompt: "Which pyramid is always upright?", options: ["none", "pyramid of numbers", "pyramid of biomass", "pyramid of energy"], correctIndex: 3, explanation: "Energy always decreases upward." },
        { prompt: "Food chains are usually limited to about", options: ["1 link", "20 links", "4–5 links", "100 links"], correctIndex: 2, explanation: "Energy loss limits chain length." },
        { prompt: "The base of every food chain is the", options: ["top carnivore", "producer", "decomposer", "herbivore"], correctIndex: 1, explanation: "Producers capture the Sun's energy first." },
        { prompt: "A hawk eating a snake acts as a", options: ["tertiary consumer", "producer", "primary consumer", "decomposer"], correctIndex: 0, explanation: "Top carnivores are tertiary consumers." },
        { prompt: "Energy in an ecosystem", options: ["never leaves", "is fully recycled", "increases up the chain", "flows one way and is lost as heat"], correctIndex: 3, explanation: "Energy flow is one-directional." },
        { prompt: "Two species cannot occupy the same", options: ["niche", "habitat", "country", "pyramid"], correctIndex: 0, explanation: "Competitive exclusion principle." },
        { prompt: "All the populations living together form a", options: ["niche", "population", "species", "community"], correctIndex: 3, explanation: "A community is many populations." },
        { prompt: "A pyramid of numbers counts", options: ["the energy only", "the number of organisms at each level", "the mass only", "the species names"], correctIndex: 1, explanation: "It shows numbers per trophic level." },
        { prompt: "If producers trap 5000 kJ, roughly how much reaches primary consumers?", options: ["50 kJ", "5000 kJ", "500 kJ", "4500 kJ"], correctIndex: 2, explanation: "10% of 5000 = 500 kJ." },
        { prompt: "Decomposers are important because they", options: ["make sunlight", "recycle nutrients from dead matter", "eat producers", "increase energy"], correctIndex: 1, explanation: "They return nutrients to the soil." },
        { prompt: "Nutrients differ from energy in that nutrients are", options: ["never used", "lost as heat", "made by the Sun", "recycled"], correctIndex: 3, explanation: "Nutrients cycle; energy flows through." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between the habitat and the niche of an organism.", answerKey: "Habitat is the place where an organism lives; niche is its role/way of life (what it eats, how it interacts). 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Approximately what percentage of energy passes from one trophic level to the next?", options: ["100%", "50%", "90%", "10%"], correctIndex: 3, answerKey: "About 10%. Option D.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "For the chain maize → rat → snake → hawk, name the trophic level of each organism.", answerKey: "Maize – producer; rat – primary consumer; snake – secondary consumer; hawk – tertiary consumer. 1 mark each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why food chains rarely have more than four or five links.", answerKey: "About 90% of energy is lost as heat (respiration) and waste at each transfer, so only ~10% passes on; after a few links too little energy remains to support another level. Award for energy loss + limited energy.", marks: 4 },
        { type: "ESSAY", prompt: "Explain how energy flows through an ecosystem, using trophic levels, food chains/webs and ecological pyramids, and contrast energy flow with nutrient recycling.", answerKey: "Sunlight fixed by producers, passes to primary, secondary, tertiary consumers; decomposers recycle (up to 5). ~10% transfer, energy lost as heat, pyramids (energy pyramid always upright) (up to 5). Contrast: energy flows one way and is lost as heat, whereas nutrients are recycled by decomposers (up to 5).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 47.3 Threats to Biodiversity (https://openstax.org/books/biology-2e/pages/47-3-threats-to-biodiversity); 47.4 Preserving Biodiversity (https://openstax.org/books/biology-2e/pages/47-4-preserving-biodiversity); 31.2 The Soil (https://openstax.org/books/biology-2e/pages/31-2-the-soil); LibreTexts — UVM Environmental Science, 3.6 Mineral Resources and Mining (https://bio.libretexts.org/Courses/University_of_Vermont/UVM_Environmental_Science/03:_Lithosphere/3.06:_Mineral_Resources_and_Mining); CK-12 — Ways to conserve fossil fuel resources (https://www.ck12.org/flexi/life-science/conservation/what-are-some-ways-to-conserve-fossil-fuel-resources/)
    {
      slug: "conservation-of-nature",
      title: "Conservation of Nature",
      objective:
        "By the end of the topic, learners should be able to explain the need for conservation, name the main threats to biodiversity, and describe methods of conserving soil, forests, wildlife, oil and minerals.",
      estimatedMinutes: 100,
      notes: `## What is conservation?

- **Conservation** — the wise use and protection of natural resources so that they last for the future.
- It protects **biodiversity** (the variety of living things) and the soil, water, forests, wildlife and minerals on which people depend.

## Threats to biodiversity

1. **Habitat loss** — forests are removed for timber and for crops such as oil palm (e.g. in Sumatra and Borneo, endangering orangutans).
2. **Overharvesting** — especially of fish; **bushmeat** (wild animals killed for food) hunted commercially in equatorial Africa threatens many primates.
3. **Exotic (invasive) species** — species introduced into an ecosystem where they did not evolve; they threaten native species by competition, predation or disease.
4. **Climate change** — human-caused warming is a major extinction threat, especially combined with habitat loss.
5. **Pollution** — toxic pollution harms particular species.

## Soil conservation

- Prevent **erosion**: contour ploughing and terracing on slopes, windbreaks, cover crops and mulch so soil is never left bare.
- Maintain **fertility**: crop rotation with legumes, manure and compost, fallowing.

## Forest conservation

- **Reforestation** — replanting trees on cleared land; **afforestation** — planting new forest.
- Controlled, sustainable logging; preventing bush fires.
- **Protected areas** — forest reserves and national parks; one large preserve is better than several small ones of the same total area because it has more core habitat.

## Wildlife conservation

- **Legislation** — international treaties such as **CITES** (1975) control trade in endangered species; national laws make it illegal to disturb or kill protected species.
- **Wildlife preserves and parks** — a key tool of conservation.
- **Habitat restoration** — e.g. reintroducing wolves to Yellowstone National Park in 1995 increased the park's biodiversity.
- **Zoos and captive breeding** — help through education and breeding, though captive breeding is inefficient and often fails.

## Oil (fossil fuel) conservation

- Fossil fuels are **non-renewable** — they take millions of years to form.
- Use **energy-efficient** appliances; insulate buildings; share transport (carpools, public transport).
- Switch to **renewable energy** — solar, wind and hydroelectric power.
- Recycle and reuse products to cut the energy used in manufacturing; plant trees to help offset greenhouse gases.

## Mineral conservation

- Minerals form slowly over geological time, so they are **non-renewable** and deposits are **finite**.
- **Recycling** keeps a metal in use longer and reduces the demand for new mining; making products from recycled aluminium or copper uses **less energy** than from raw ore.
- Careful mining limits land disturbance, erosion and the acidification of streams that can carry dissolved toxic metals.

## Common errors and misconceptions

- **"Conservation means never using resources"** — it means **wise, sustainable use**.
- **"Fossil fuels will be replaced naturally"** — they take millions of years to form.
- **"Several small reserves are as good as one large one"** — one large reserve has more core habitat.
- **"Pollution is the biggest threat to biodiversity"** — habitat loss, overharvesting and exotic species are greater threats.`,
      workedExample: `**Task.** A community next to a forest reserve faces these problems: logging for timber and oil palm, hunting of monkeys for bushmeat, eroded hillside farms, and piles of scrap metal. Propose one conservation measure for each problem and justify it.

**Solution**

1. **Logging and oil palm clearing (habitat loss)** → protect the reserve and **reforest** cleared land; allow only controlled logging. Habitat loss is one of the three greatest threats to biodiversity.
2. **Bushmeat hunting (overharvesting)** → enforce **laws protecting threatened species** and set up a wildlife preserve; commercial bushmeat hunting has threatened primates in equatorial Africa.
3. **Eroded hillside farms (soil)** → **terracing/contour ploughing, cover crops and mulch**, which keep soil covered and slow run-off.
4. **Scrap metal (minerals)** → collect for **recycling**; recycled metals stay in use longer, reduce mining and need less energy than new ore.

**Answer:** reforestation and protected areas; anti-poaching laws and preserves; terracing and cover crops; metal recycling.`,
      quiz: [
        { prompt: "Conservation means", options: ["wise use and protection of resources", "using up all resources quickly", "never touching nature", "destroying forests"], correctIndex: 0, explanation: "Sustainable use protects resources for the future." },
        { prompt: "Biodiversity means the", options: ["number of rocks", "variety of living things", "amount of rainfall", "size of a forest only"], correctIndex: 1, explanation: "Biodiversity is the variety of life." },
        { prompt: "The three greatest threats to biodiversity are habitat loss, overharvesting and", options: ["recycling", "reforestation", "exotic species", "national parks"], correctIndex: 2, explanation: "Exotic species complete the top three." },
        { prompt: "Bushmeat is", options: ["a type of tree", "farm-raised chicken", "wild animals killed for food", "a fertiliser"], correctIndex: 2, explanation: "Commercial bushmeat hunting threatens primates." },
        { prompt: "An exotic species is one that", options: ["is a decomposer", "is always native", "is extinct", "was introduced to an ecosystem where it did not evolve"], correctIndex: 3, explanation: "Introduced species can become invasive." },
        { prompt: "CITES controls", options: ["mining", "soil erosion", "fossil fuel prices", "international trade in endangered species"], correctIndex: 3, explanation: "It regulates trade in threatened species." },
        { prompt: "Replanting trees on cleared land is", options: ["overharvesting", "deforestation", "reforestation", "erosion"], correctIndex: 2, explanation: "Re- = again." },
        { prompt: "Why is one large reserve better than several small ones of the same area?", options: ["it has more roads", "it has more core habitat", "it is cheaper to burn", "it holds fewer species"], correctIndex: 1, explanation: "Core habitat supports more species." },
        { prompt: "Reintroducing wolves to Yellowstone is an example of", options: ["deforestation", "overharvesting", "habitat restoration", "pollution"], correctIndex: 2, explanation: "It increased biodiversity." },
        { prompt: "A weakness of captive breeding is that it is", options: ["inefficient and often fails", "always successful", "free of cost", "the only method needed"], correctIndex: 0, explanation: "Captive breeding has limited success." },
        { prompt: "Which method conserves soil on slopes?", options: ["terracing and contour ploughing", "ploughing straight downhill", "removing all plants", "burning the soil"], correctIndex: 0, explanation: "These slow run-off." },
        { prompt: "Fossil fuels are non-renewable because they", options: ["regrow every year", "take millions of years to form", "are made from sunlight daily", "never run out"], correctIndex: 1, explanation: "We use them faster than they form." },
        { prompt: "Which saves fossil fuels?", options: ["using public transport and carpools", "driving alone everywhere", "leaving lights on", "burning more coal"], correctIndex: 0, explanation: "Shared transport cuts fuel use." },
        { prompt: "Which is a renewable alternative to oil?", options: ["coal", "solar power", "natural gas", "diesel"], correctIndex: 1, explanation: "Solar, wind and hydro are renewable." },
        { prompt: "Mineral deposits are", options: ["finite", "unlimited", "renewable within a year", "made by plants"], correctIndex: 0, explanation: "They form over geological time." },
        { prompt: "Recycling metals helps because it", options: ["wastes energy", "increases mining", "reduces demand for new mining", "creates more ore"], correctIndex: 2, explanation: "Metals stay in use longer." },
        { prompt: "Making aluminium products from recycled metal", options: ["creates new minerals", "uses more energy", "is impossible", "uses less energy than from raw ore"], correctIndex: 3, explanation: "Recycling saves energy." },
        { prompt: "Mining can harm streams by", options: ["adding fish", "adding oxygen", "cooling them", "acidifying them and adding toxic metals"], correctIndex: 3, explanation: "Acid drainage carries dissolved metals." },
        { prompt: "Clearing forest for oil palm is an example of", options: ["habitat loss", "habitat restoration", "captive breeding", "recycling"], correctIndex: 0, explanation: "Forest habitat is destroyed." },
        { prompt: "Energy-efficient appliances conserve oil by", options: ["using more fuel", "using less energy", "making fuel", "storing oil"], correctIndex: 1, explanation: "Lower demand for fossil fuels." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define conservation and state two reasons why nature should be conserved.", answerKey: "Conservation: wise use and protection of natural resources for the future. Reasons: protect biodiversity; keep soil, water, forests and wildlife for food, medicine, timber; minerals and fuels are finite. 2 + 1 + 1.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is one of the three greatest threats to biodiversity?", options: ["Reforestation", "Habitat loss", "Recycling", "Captive breeding"], correctIndex: 1, answerKey: "Habitat loss, overharvesting and exotic species. Option B.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State two methods each for conserving (a) forests and (b) wildlife.", answerKey: "(a) Reforestation/afforestation; controlled logging; preventing bush fires; forest reserves. (b) Laws/CITES; preserves and parks; habitat restoration; captive breeding. 1 mark each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why oil and minerals need to be conserved and give one method for each.", answerKey: "Both are non-renewable: fossil fuels take millions of years to form; mineral deposits are finite. Oil: efficient appliances, public transport, renewables. Minerals: recycle metals (less energy, less mining). 2 + 1 + 1.", marks: 5 },
        { type: "ESSAY", prompt: "Discuss the threats to nature in a tropical country and describe how soil, forests, wildlife, oil and minerals can be conserved.", answerKey: "Threats: habitat loss, overharvesting/bushmeat, exotic species, climate change, pollution (up to 5). Soil: terracing, cover crops, rotation (2). Forests: reforestation, reserves, controlled logging (2). Wildlife: laws/CITES, preserves, restoration (2). Oil: efficiency, renewables, shared transport (2). Minerals: recycling, careful mining (2).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 46.3 Biogeochemical Cycles (https://openstax.org/books/biology-2e/pages/46-3-biogeochemical-cycles)
    {
      slug: "biogeochemical-cycles",
      title: "Biogeochemical Cycles in Nature",
      objective:
        "By the end of the topic, learners should be able to describe the water, carbon, nitrogen, phosphorus and sulfur cycles and the roles of organisms in each.",
      estimatedMinutes: 120,
      notes: `## Why nutrients cycle

- Unlike energy (which flows one way), **matter is recycled** between the living and non-living world through **biogeochemical cycles**.

## The water cycle

- **Evaporation** — the Sun heats water in seas, rivers and soil into water vapour; **transpiration** adds vapour from plants.
- **Condensation** — vapour cools to form clouds.
- **Precipitation** — water falls as rain or snow.
- **Run-off and groundwater** return water to rivers and the sea.

## The carbon cycle

- **Carbon dioxide** is removed from the air by **photosynthesis** (producers).
- It is returned by **respiration** of plants, animals and decomposers, by **decay/combustion**, and by **burning fossil fuels** and volcanoes.
- Excess CO₂ from burning fossil fuels adds to **global warming**.

## The nitrogen cycle

Plants cannot use nitrogen gas directly; bacteria change it into usable forms.

1. **Nitrogen fixation** — bacteria (*Rhizobium*, *Azotobacter*, cyanobacteria) and lightning turn N₂ into ammonium/nitrogen compounds.
2. **Nitrification** — nitrifying bacteria (*Nitrosomonas*, etc.) turn ammonium → nitrites → **nitrates** (which plants absorb).
3. **Assimilation** — plants take up nitrates to make protein; animals eat plants.
4. **Ammonification** — decomposers turn dead matter and waste back into ammonium.
5. **Denitrification** — denitrifying bacteria turn nitrates back into **nitrogen gas**.

\`\`\`svg The nitrogen cycle (simplified)
<svg viewBox="0 0 320 150" role="img" aria-label="Nitrogen cycle steps">
  <g font-size="8" fill="currentColor" text-anchor="middle">
  <rect x="120" y="6" width="80" height="22" rx="4" fill="#dbeafe" stroke="currentColor"/><text x="160" y="20">nitrogen gas (N2)</text>
  <rect x="10" y="60" width="76" height="22" rx="4" fill="#e9d5ff" stroke="currentColor"/><text x="48" y="74">ammonium</text>
  <rect x="120" y="60" width="76" height="22" rx="4" fill="#bbf7d0" stroke="currentColor"/><text x="158" y="74">nitrates</text>
  <rect x="230" y="60" width="80" height="22" rx="4" fill="#fde68a" stroke="currentColor"/><text x="270" y="74">plant protein</text>
  <rect x="120" y="118" width="90" height="22" rx="4" fill="#fca5a5" stroke="currentColor"/><text x="165" y="132">dead matter/waste</text>
  </g>
  <g stroke="currentColor" font-size="7" fill="currentColor">
  <line x1="120" y1="22" x2="48" y2="59"/><text x="70" y="45">fixation</text>
  <line x1="86" y1="71" x2="119" y2="71"/><text x="103" y="66">nitrification</text>
  <line x1="196" y1="71" x2="229" y2="71"/><text x="213" y="66">uptake</text>
  <line x1="160" y1="82" x2="165" y2="117"/>
  <line x1="120" y1="129" x2="55" y2="82"/><text x="78" y="108">ammonification</text>
  <line x1="158" y1="60" x2="185" y2="28"/><text x="185" y="46">denitrification</text>
  </g>
</svg>
\`\`\`

## The phosphorus cycle

- Phosphorus has **no gas stage**; it comes from the **weathering of rocks**.
- Dissolved **phosphates** are taken up by plants, passed along food chains, and returned by decomposers.
- Much phosphate washes into the sea and settles as **sediment**, returning to land only slowly by geological uplift.

## The sulfur cycle

- Sulfur enters the air as **sulfur dioxide** from decomposition, volcanoes and burning fossil fuels.
- It falls in rain (as weak acid) and is taken up as **sulfates** by plants; decomposers release **hydrogen sulfide**.
- Excess sulfur dioxide causes **acid rain**.

## Common errors and misconceptions

- **"Plants use nitrogen gas from the air"** — they cannot; bacteria must **fix** it into nitrates first.
- **"Phosphorus has a gas phase"** — the phosphorus cycle has **no gas stage**; it comes from rock weathering.
- **"Respiration removes CO₂ from the air"** — respiration **releases** CO₂; **photosynthesis** removes it.
- **"Acid rain comes from carbon only"** — sulfur dioxide (and nitrogen oxides) cause acid rain.`,
      workedExample: `**Task.** A farmer plants beans (legumes) and finds the soil is richer in nitrogen afterwards. (a) Explain, using the nitrogen cycle, why legumes enrich the soil. (b) Name the bacteria involved and the two stages that make nitrogen available to plants. (c) State how denitrifying bacteria affect the soil.

**Solution**

(a) Legumes such as beans have **root nodules** containing **nitrogen-fixing bacteria**. These bacteria carry out **nitrogen fixation**, turning nitrogen gas (N₂) from the air into nitrogen compounds the plant can use. When the plant dies or its roots decay, this nitrogen is **added to the soil**, enriching it.

(b) Bacteria and stages:
- **Nitrogen-fixing bacteria** (e.g. *Rhizobium* in the nodules) carry out **nitrogen fixation** (N₂ → ammonium).
- **Nitrifying bacteria** (e.g. *Nitrosomonas*) carry out **nitrification** (ammonium → nitrites → **nitrates**), and plants absorb nitrates.

(c) **Denitrifying bacteria** do the opposite: they convert **nitrates back into nitrogen gas**, which escapes to the air, **removing nitrogen from the soil** (this is why waterlogged, airless soils lose fertility).

**Answer:** legumes host nitrogen-fixing bacteria (Rhizobium) that fix N₂ into compounds; nitrification then makes nitrates for plants; denitrifying bacteria reverse this, returning nitrogen gas to the air.`,
      quiz: [
        { prompt: "Unlike energy, matter (nutrients) in ecosystems is", options: ["never reused", "lost as heat", "made by the Sun", "recycled"], correctIndex: 3, explanation: "Biogeochemical cycles recycle matter." },
        { prompt: "Water vapour returns to liquid by", options: ["transpiration", "evaporation", "condensation", "precipitation"], correctIndex: 2, explanation: "Cooling vapour condenses into clouds." },
        { prompt: "Plants add water vapour to the air by", options: ["condensation", "transpiration", "run-off", "precipitation"], correctIndex: 1, explanation: "Transpiration releases water from leaves." },
        { prompt: "Carbon dioxide is removed from the air by", options: ["combustion", "respiration", "photosynthesis", "decay"], correctIndex: 2, explanation: "Producers fix CO2 in photosynthesis." },
        { prompt: "Carbon dioxide is returned to the air by", options: ["condensation", "photosynthesis", "respiration and burning", "nitrogen fixation"], correctIndex: 2, explanation: "Respiration, decay and combustion release CO2." },
        { prompt: "Plants absorb nitrogen mainly as", options: ["ammonia gas", "nitrogen gas", "nitrates", "sulfur"], correctIndex: 2, explanation: "Nitrates are taken up by roots." },
        { prompt: "Converting nitrogen gas into usable compounds is", options: ["nitrification", "nitrogen fixation", "denitrification", "ammonification"], correctIndex: 1, explanation: "Fixation makes N2 usable." },
        { prompt: "Rhizobium bacteria live in the", options: ["sea only", "leaves of grass", "air only", "root nodules of legumes"], correctIndex: 3, explanation: "Rhizobium fixes nitrogen in legume nodules." },
        { prompt: "Nitrifying bacteria turn ammonium into", options: ["phosphate", "nitrogen gas", "carbon dioxide", "nitrites then nitrates"], correctIndex: 3, explanation: "Nitrification produces nitrates." },
        { prompt: "Denitrifying bacteria convert nitrates back to", options: ["nitrates", "nitrogen gas", "ammonium", "protein"], correctIndex: 1, explanation: "Denitrification releases N2 to the air." },
        { prompt: "Decomposers turning dead matter into ammonium is", options: ["fixation", "nitrification", "ammonification", "photosynthesis"], correctIndex: 2, explanation: "Ammonification recycles nitrogen from waste." },
        { prompt: "The phosphorus cycle differs from others because it has", options: ["only a gas stage", "no organisms", "no gas stage", "no rocks"], correctIndex: 2, explanation: "Phosphorus comes from rock weathering, no gas phase." },
        { prompt: "Phosphorus mainly enters ecosystems from", options: ["photosynthesis", "the atmosphere", "weathering of rocks", "lightning"], correctIndex: 2, explanation: "Rock weathering releases phosphate." },
        { prompt: "Sulfur enters the air mainly as", options: ["sulfur dioxide", "nitrogen gas", "phosphate", "oxygen"], correctIndex: 0, explanation: "SO2 comes from decay, volcanoes and burning." },
        { prompt: "Acid rain is caused mainly by", options: ["water vapour", "phosphate", "sulfur dioxide and nitrogen oxides", "oxygen"], correctIndex: 2, explanation: "These gases form acids in rain." },
        { prompt: "Burning fossil fuels increases atmospheric", options: ["nitrates", "carbon dioxide", "phosphate", "oxygen"], correctIndex: 1, explanation: "Combustion releases CO2, driving warming." },
        { prompt: "In the water cycle, rain and snow are", options: ["condensation", "evaporation", "precipitation", "transpiration"], correctIndex: 2, explanation: "Precipitation returns water to land." },
        { prompt: "Which organisms drive most nitrogen cycle steps?", options: ["bacteria", "mammals", "fish", "insects only"], correctIndex: 0, explanation: "Different bacteria fix, nitrify and denitrify." },
        { prompt: "Waterlogged, airless soil loses nitrogen because it favours", options: ["fixation", "denitrification", "nitrification", "photosynthesis"], correctIndex: 1, explanation: "Anaerobic conditions boost denitrifying bacteria." },
        { prompt: "Nutrient cycles are important because they", options: ["remove all elements", "return essential elements to the environment", "make energy", "stop growth"], correctIndex: 1, explanation: "Cycling keeps nutrients available." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "List the main stages of the water cycle.", answerKey: "Evaporation (and transpiration), condensation, precipitation, run-off/groundwater returning to the sea. 1 mark each stage (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which process converts nitrogen gas into a form plants can use?", options: ["Denitrification", "Nitrogen fixation", "Respiration", "Condensation"], correctIndex: 1, answerKey: "Fixation makes N2 usable. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain how carbon dioxide is removed from and returned to the atmosphere.", answerKey: "Removed by photosynthesis (producers fix CO2). Returned by respiration of organisms, decay, combustion/burning fossil fuels, and volcanoes. 2 marks removal, 2 return.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State one way the phosphorus cycle differs from the nitrogen cycle.", answerKey: "Phosphorus has no gaseous stage and enters from rock weathering, whereas nitrogen has a large atmospheric (gas) reservoir cycled by bacteria. Award for 'no gas phase / from rocks'.", marks: 3 },
        { type: "ESSAY", prompt: "Describe the nitrogen cycle, naming the bacteria and processes that make nitrogen available to plants and those that return it to the air.", answerKey: "Fixation (Rhizobium/Azotobacter/cyanobacteria, N2→ammonium); nitrification (Nitrosomonas etc., ammonium→nitrites→nitrates); assimilation by plants; ammonification (decomposers, dead matter→ammonium); denitrification (denitrifying bacteria, nitrates→N2) (up to 12). Reward correct sequence and bacteria (up to 3).", marks: 15 },
      ],
    },
    // source: LibreTexts — Life Science for Middle School (CK-12), 12.11 Habitat and Niche (https://k12.libretexts.org/Bookshelves/Science_and_Technology/Life_Science_for_Middle_School_(CK-12)/12:_Ecology/12.11:_Habitat_and_Niche); LibreTexts — Introductory Biology (CK-12), 6.2 Ecosystems (https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Introductory_Biology_(CK-12)/06:_Ecology/6.02:_Ecosystems); LibreTexts — Bio 1130, 10.2 Niche concept (https://bio.libretexts.org/Workbench/Bio_1130:_Remixed/10:_Community_Ecology/10.02:_Niche_concept)
    {
      slug: "habitat-and-niche",
      title: "Organisms' Habitat and Niche",
      objective:
        "By the end of the topic, learners should be able to define and distinguish habitat and niche, explain fundamental and realized niches, and state the competitive exclusion principle.",
      estimatedMinutes: 70,
      notes: `## Habitat

- **Habitat** — the physical environment (area) in which a species lives and to which it is adapted.
- A habitat's features are determined mainly by **abiotic factors** such as sunlight, temperature, rainfall and soil type.
- Habitat is not the same as ecosystem: the habitat is the physical **place**; an **ecosystem** consists of all the biotic and abiotic factors in an area **and their interactions**.

## Niche

- **Niche** — the **role** a species plays in its ecosystem; how an organism "makes a living".
- It includes all the ways the species interacts with the **biotic and abiotic** factors of its environment: what it eats, how it obtains energy and nutrients, what eats it, and its part in energy flow and nutrient recycling.
- Example roles: a decomposer recycles nutrients from dead matter; a predator controls the numbers of its prey.

| Habitat | Niche |
| --- | --- |
| the "address" — where the organism lives | the "profession" — what it does there |
| described by abiotic conditions | described by its interactions and role |
| many species can share one habitat | each species has its own niche |

## Fundamental and realized niche

- **Fundamental niche** — the conditions under which a species can live in the absence of interference from other species.
- **Realized niche** — the narrower conditions to which a species is actually restricted by interactions with other species (e.g. competition).

## Competitive exclusion principle

- **Two different species cannot occupy the same niche in the same place for very long.**
- If two species fill the same niche they compete for all the same resources; one outcompetes the other, which must adapt or risk extinction.
- Example: **kudzu**, a vine introduced to the south-eastern United States in the 1870s, had no natural predators and outcompeted native vines.
- When one species is lost, another may fill its niche — e.g. Konik horses have been used to fill the grazing role of the extinct Tarpan horse.

## Common errors and misconceptions

- **"Habitat and niche mean the same"** — habitat is the place; niche is the role.
- **"Two species can share a niche forever"** — competitive exclusion means one will be outcompeted.
- **"An organism's realized niche is larger than its fundamental niche"** — interactions narrow it, so the realized niche is smaller.`,
      workedExample: `**Task.** In a mangrove swamp, crabs feed on fallen leaves in the mud, while kingfishers perch on branches and dive for small fish. (a) Do the crab and kingfisher share a habitat? (b) Describe the niche of each. (c) A new crab species arrives that eats exactly the same leaves at the same time and place. Predict what happens and name the principle.

**Solution**

(a) Yes — both live in the **same habitat**, the mangrove swamp (same physical place and abiotic conditions).

(b) Niches:
- **Crab** — a detritivore/decomposer that feeds on fallen leaves, helping to recycle nutrients; food for larger animals.
- **Kingfisher** — a predator that catches small fish from the water, controlling fish numbers.

(c) The two crab species would occupy the **same niche** and compete for the same food. One would **outcompete** the other, which would be replaced, forced to adapt (use different food/time) or become locally extinct — the **competitive exclusion principle**.

**Answer:** same habitat, different niches; identical niches cannot coexist for long — competitive exclusion.`,
      quiz: [
        { prompt: "The physical area where a species lives is its", options: ["trophic level", "niche", "community", "habitat"], correctIndex: 3, explanation: "Habitat = the place." },
        { prompt: "The role a species plays in its ecosystem is its", options: ["biome", "habitat", "population", "niche"], correctIndex: 3, explanation: "Niche = how it makes a living." },
        { prompt: "A habitat's features are determined mainly by", options: ["abiotic factors such as temperature and rainfall", "the species' name", "the number of predators only", "the colour of the animals"], correctIndex: 0, explanation: "Abiotic conditions shape habitats." },
        { prompt: "How does an ecosystem differ from a habitat?", options: ["it includes all biotic and abiotic factors and their interactions", "it is only the physical place", "it has no living things", "it is smaller than a habitat"], correctIndex: 0, explanation: "Habitat is just the place." },
        { prompt: "A niche is often described as how an organism", options: ["is classified", "looks", "is named", "makes a living"], correctIndex: 3, explanation: "Its role and way of life." },
        { prompt: "The competitive exclusion principle states that", options: ["predators always win", "all species share niches", "two species cannot occupy the same niche in the same place for long", "habitats never change"], correctIndex: 2, explanation: "One species outcompetes the other." },
        { prompt: "The conditions a species could occupy without competitors is its", options: ["fundamental niche", "realized niche", "habitat only", "trophic level"], correctIndex: 0, explanation: "The full potential niche." },
        { prompt: "The conditions a species actually occupies because of other species is its", options: ["biome", "fundamental niche", "realized niche", "range of tolerance"], correctIndex: 2, explanation: "Interactions restrict it." },
        { prompt: "Compared with the fundamental niche, the realized niche is", options: ["larger", "smaller", "identical", "unrelated"], correctIndex: 1, explanation: "Competition narrows it." },
        { prompt: "Kudzu outcompeted native vines in the USA because it", options: ["was eaten by everything", "had no natural predators there", "needed no light", "was a decomposer"], correctIndex: 1, explanation: "Without predators it spread unchecked." },
        { prompt: "Many species can share one", options: ["niche", "habitat", "identical role", "exact food at the same time"], correctIndex: 1, explanation: "Each has its own niche within the habitat." },
        { prompt: "A decomposer's niche includes", options: ["pollinating flowers only", "making food by photosynthesis", "hunting large prey", "recycling nutrients from dead matter"], correctIndex: 3, explanation: "Decomposers return nutrients." },
        { prompt: "Which describes a niche rather than a habitat?", options: ["a warm, wet forest floor", "a sandy riverbank", "feeds on fallen leaves at night", "a rocky shore"], correctIndex: 2, explanation: "Feeding behaviour is part of the niche." },
        { prompt: "Which describes a habitat?", options: ["eats mosquito larvae", "a freshwater pond", "is eaten by herons", "recycles nutrients"], correctIndex: 1, explanation: "A pond is a place." },
        { prompt: "If two species fill the same niche, the losing species must", options: ["become a producer", "always win", "share forever", "adapt or risk extinction"], correctIndex: 3, explanation: "Competitive exclusion forces change." },
        { prompt: "Konik horses were used to replace the extinct Tarpan horse in its", options: ["niche (grazing role)", "habitat only", "genome", "trophic pyramid shape"], correctIndex: 0, explanation: "Another species filled the empty role." },
        { prompt: "A niche includes interactions with", options: ["abiotic factors only", "both biotic and abiotic factors", "biotic factors only", "nothing"], correctIndex: 1, explanation: "All interactions in the environment." },
        { prompt: "The habitat is sometimes called an organism's", options: ["trophic level", "profession", "role", "address"], correctIndex: 3, explanation: "The niche is its 'profession'." },
        { prompt: "Which abiotic factor helps define a habitat?", options: ["rainfall", "predators", "competitors", "parasites"], correctIndex: 0, explanation: "Rainfall is non-living." },
        { prompt: "Two bird species in the same tree avoid competition best by", options: ["eating exactly the same insects", "feeding on different foods or at different heights", "nesting in the same hole", "having identical niches"], correctIndex: 1, explanation: "Different niches allow coexistence." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define habitat and niche.", answerKey: "Habitat: the physical environment where a species lives and to which it is adapted. Niche: the role of a species in its ecosystem — all its interactions with biotic and abiotic factors / how it makes a living. 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which statement expresses the competitive exclusion principle?", options: ["Predators always exclude prey", "Two species can never share a habitat", "Two species cannot occupy the same niche in the same place for long", "All species in a habitat have the same niche"], correctIndex: 2, answerKey: "Option C.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between a fundamental niche and a realized niche.", answerKey: "Fundamental: conditions a species can live in without interference from other species. Realized: the narrower conditions it is restricted to by interactions with other species. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why many species can live in the same habitat without competitive exclusion.", answerKey: "Each species has a different niche (different food, feeding time or position, role), so they do not compete for exactly the same resources. 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Using named examples, explain the difference between habitat and niche and discuss what happens when two species compete for the same niche.", answerKey: "Habitat defined with abiotic features and example (up to 4). Niche defined as role/interactions with example (up to 4). Fundamental vs realized niche (up to 3). Competitive exclusion with example (kudzu) and outcomes — adapt or extinction (up to 4).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 45.3 Environmental Limits to Population Growth (https://openstax.org/books/biology-2e/pages/45-3-environmental-limits-to-population-growth)
    {
      slug: "population-ecology",
      title: "Population Ecology",
      objective:
        "By the end of the topic, learners should be able to define population terms, calculate growth rate and doubling time, distinguish exponential and logistic growth, and explain density-dependent and density-independent factors.",
      estimatedMinutes: 110,
      notes: `## Population terms

- **Population** — all the organisms of **one species** in a given area.
- **Population density** — number of individuals per unit area (e.g. per km²).
- **Birth rate (natality)** — new individuals born per unit time.
- **Death rate (mortality)** — individuals dying per unit time.
- **Immigration** — individuals **moving in**; **emigration** — individuals **moving out**.

## What changes population size?

Population change = (births + immigration) − (deaths + emigration).

- Growth **rate** per unit time: change in number ÷ time.
- **Per-capita growth rate (r)** = birth rate − death rate.

## Doubling time and percentage growth

- **Percentage growth rate** = (increase ÷ original number) × 100.
- **Doubling time** — the time for a population to double. A quick estimate: **doubling time ≈ 70 ÷ (% growth rate per year)** ("rule of 70").

## Patterns of growth

| Pattern | Shape | When |
| --- | --- | --- |
| **Exponential (J-curve)** | J-shaped | resources unlimited; population grows faster and faster |
| **Logistic (S-curve)** | S-shaped | resources limited; growth slows and levels off at the carrying capacity |

- **Carrying capacity (K)** — the maximum population an environment can support.
- When N < K the population grows; when N = K it is steady; when N > K it declines.

## Factors that limit population

- **Density-dependent factors** — get stronger as the population grows denser: **competition** for food/space, **predation**, **disease/parasites**, waste build-up.
- **Density-independent factors** — affect the population whatever its size: **drought, floods, fire, storms, extreme cold**.

## Common errors and misconceptions

- **"Populations grow exponentially forever"** — real populations meet limits and follow the **logistic (S)** curve toward carrying capacity.
- **"Immigration means leaving"** — immigration is moving **in**; emigration is moving **out**.
- **"Disease is density-independent"** — disease and competition are **density-dependent** (worse when crowded).
- **"Carrying capacity is fixed forever"** — it can change if resources or conditions change.`,
      workedExample: `**Task.** A town's population is 20 000. In one year there are 800 births, 300 deaths, 200 immigrants and 100 emigrants. (a) Find the population change and the new size. (b) Find the percentage growth rate. (c) Estimate the doubling time using the rule of 70. (d) Give one density-dependent factor that could slow this growth.

**Solution**

(a) Population change = (births + immigration) − (deaths + emigration)
- = (800 + 200) − (300 + 100)
- = 1000 − 400 = **+600**.
- New size = 20 000 + 600 = **20 600**.

(b) Percentage growth rate = (increase ÷ original) × 100
- = (600 ÷ 20 000) × 100 = **3% per year**.

(c) Doubling time ≈ 70 ÷ (% growth rate) = 70 ÷ 3 ≈ **23 years**.

(d) A **density-dependent** factor that could slow growth as the town becomes crowded: **competition for food, housing or water** (also disease spread, which increases with crowding).

**Answer:** the population rises by 600 to 20 600, a 3% growth rate, doubling in about 23 years; growth would slow through density-dependent factors such as competition for resources or disease.`,
      quiz: [
        { prompt: "A population is all the organisms of", options: ["many species", "one species in an area", "one individual", "non-living things"], correctIndex: 1, explanation: "A population is one species in a place." },
        { prompt: "Population density is the number of individuals", options: ["that move in", "born each year", "that die", "per unit area"], correctIndex: 3, explanation: "Density is individuals per area." },
        { prompt: "Immigration means individuals", options: ["dying", "moving out", "being born", "moving into the population"], correctIndex: 3, explanation: "Immigration = moving in." },
        { prompt: "Emigration means individuals", options: ["moving out of the population", "moving in", "being born", "dying"], correctIndex: 0, explanation: "Emigration = moving out." },
        { prompt: "Population change equals", options: ["immigration only", "births only", "deaths only", "(births+immigration) − (deaths+emigration)"], correctIndex: 3, explanation: "All four factors change size." },
        { prompt: "A J-shaped curve represents", options: ["exponential growth", "logistic growth", "no growth", "decline"], correctIndex: 0, explanation: "Exponential growth is J-shaped." },
        { prompt: "An S-shaped curve represents", options: ["no births", "exponential growth", "instant decline", "logistic growth"], correctIndex: 3, explanation: "Logistic growth levels off (S)." },
        { prompt: "The maximum population an environment can support is the", options: ["doubling time", "birth rate", "density", "carrying capacity"], correctIndex: 3, explanation: "Carrying capacity is K." },
        { prompt: "When population size N is greater than K, the population", options: ["keeps growing fast", "declines", "stays exactly the same", "disappears instantly"], correctIndex: 1, explanation: "Above K, resources run short and it falls." },
        { prompt: "Which is a density-dependent factor?", options: ["storm", "drought", "flood", "competition for food"], correctIndex: 3, explanation: "Competition worsens as density rises." },
        { prompt: "Which is a density-independent factor?", options: ["fire", "disease", "predation", "competition"], correctIndex: 0, explanation: "Fire affects the population regardless of density." },
        { prompt: "Per-capita growth rate (r) equals", options: ["birth rate − death rate", "births + deaths", "immigration only", "carrying capacity"], correctIndex: 0, explanation: "r = b − d." },
        { prompt: "Doubling time can be estimated by", options: ["70 ÷ (% growth rate)", "growth rate × 70", "births ÷ deaths", "K ÷ N"], correctIndex: 0, explanation: "The rule of 70 estimates doubling time." },
        { prompt: "A population of 5000 grows by 500 in a year. Its % growth rate is", options: ["50%", "5%", "10%", "1%"], correctIndex: 2, explanation: "(500/5000)×100 = 10%." },
        { prompt: "Exponential growth occurs when resources are", options: ["declining", "very limited", "absent", "unlimited"], correctIndex: 3, explanation: "Unlimited resources allow J-curve growth." },
        { prompt: "As a population nears carrying capacity, growth", options: ["slows and levels off", "speeds up forever", "stops instantly", "becomes negative always"], correctIndex: 0, explanation: "Logistic growth plateaus at K." },
        { prompt: "Disease spreads more easily in a population that is", options: ["extinct", "very sparse", "shrinking", "dense/crowded"], correctIndex: 3, explanation: "Crowding is density-dependent." },
        { prompt: "Birth rate is also called", options: ["density", "mortality", "natality", "emigration"], correctIndex: 2, explanation: "Natality = birth rate." },
        { prompt: "If a town has 3% annual growth, its doubling time is about", options: ["3 years", "23 years", "70 years", "233 years"], correctIndex: 1, explanation: "70 ÷ 3 ≈ 23 years." },
        { prompt: "Which pair increases population size?", options: ["deaths and disease", "deaths and emigration", "births and immigration", "emigration and drought"], correctIndex: 2, explanation: "Births and immigration add individuals." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define (a) population density and (b) carrying capacity.", answerKey: "(a) The number of individuals per unit area. (b) The maximum population size an environment can support. 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which factor is density-dependent?", options: ["Competition for food", "Drought", "Flood", "Volcanic eruption"], correctIndex: 0, answerKey: "Competition intensifies with density. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A population of 10 000 has 400 births, 150 deaths, 50 immigrants and 100 emigrants in a year. Calculate the population change and the percentage growth rate.", answerKey: "Change = (400+50) − (150+100) = 450 − 250 = +200. % growth = (200/10000)×100 = 2%. 2 marks change, 2 marks percentage.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between exponential and logistic growth.", answerKey: "Exponential (J-curve): rapid, accelerating growth with unlimited resources. Logistic (S-curve): growth slows as resources become limited and levels off at the carrying capacity. Award for both curve shapes and the resource/K idea.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the factors that determine the size of a population and the factors that limit its growth.", answerKey: "Size determined by births, deaths, immigration, emigration; growth rate r = b − d (up to 5). Growth patterns: exponential vs logistic, carrying capacity (up to 5). Limits: density-dependent (competition, predation, disease, waste) and density-independent (drought, flood, fire, storms) (up to 5).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 45.6 Community Ecology (ecological succession) (https://openstax.org/books/biology-2e/pages/45-6-community-ecology)
    {
      slug: "ecological-succession",
      title: "Ecological Succession",
      objective:
        "By the end of the topic, learners should be able to describe primary and secondary succession and explain the roles of pioneer, intermediate and climax communities.",
      estimatedMinutes: 80,
      notes: `## Ecological succession

- **Ecological succession** — the gradual, orderly change in the species of a community over time, following a disturbance or the formation of new land, until a stable community forms.

## Primary succession

- Occurs when **new land is formed or rock is exposed**, e.g. after a volcanic eruption — there is **no soil**.
- Weathering and other natural forces break down the rock enough for hardy plants and **lichens** with few soil requirements — the **pioneer species** — to establish.
- Pioneers help weather the rock and, as they die and decay, build up **soil**.
- Small plants, then shrubs and trees follow, ending in a stable **climax community**.

## Secondary succession

- Occurs where a community has been destroyed but the **soil remains**, e.g. after a wildfire, flood or farm clearing.
- Classic example: oak and hickory forest cleared by **wildfire**:
  1. Soil nutrients and seeds remain; **annual plants** grow first.
  2. Over many years, shrubs and small pine, oak and hickory trees appear — the **intermediate species**.
  3. After about **150 years** the forest reaches equilibrium — species composition no longer changes and resembles the community before the fire.

\`\`\`svg Stages of secondary succession after a fire
<svg viewBox="0 0 320 110" role="img" aria-label="Annual plants then shrubs and young trees then mature forest">
  <line x1="10" y1="90" x2="310" y2="90" stroke="currentColor"/>
  <g stroke="#16a34a"><line x1="30" y1="90" x2="30" y2="80"/><line x1="45" y1="90" x2="45" y2="82"/><line x1="60" y1="90" x2="60" y2="79"/><line x1="75" y1="90" x2="75" y2="83"/></g>
  <text x="55" y="105" font-size="8" text-anchor="middle" fill="currentColor">annual plants</text>
  <circle cx="140" cy="76" r="10" fill="#86efac" stroke="currentColor"/><circle cx="165" cy="70" r="14" fill="#86efac" stroke="currentColor"/>
  <line x1="165" y1="84" x2="165" y2="90" stroke="currentColor"/>
  <text x="155" y="105" font-size="8" text-anchor="middle" fill="currentColor">shrubs, young trees</text>
  <circle cx="250" cy="40" r="22" fill="#22c55e" stroke="currentColor"/><circle cx="285" cy="45" r="20" fill="#22c55e" stroke="currentColor"/>
  <line x1="250" y1="62" x2="250" y2="90" stroke="currentColor" stroke-width="3"/><line x1="285" y1="65" x2="285" y2="90" stroke="currentColor" stroke-width="3"/>
  <text x="265" y="105" font-size="8" text-anchor="middle" fill="currentColor">climax forest</text>
</svg>
\`\`\`

| Feature | Primary succession | Secondary succession |
| --- | --- | --- |
| Starting point | new land or bare rock, no soil | soil already present |
| First colonisers | pioneer species: lichens, hardy plants | annual plants, grasses |
| Speed | slow (soil must form first) | faster |
| Example | cooled volcanic lava | forest after a wildfire; abandoned farm |

## Pioneer, intermediate and climax communities

- **Pioneer community** — the first organisms to colonise; tolerate harsh conditions and begin soil formation.
- **Intermediate species** — shrubs and young trees that replace the early colonisers.
- **Climax community** — the stable equilibrium community whose species composition no longer changes, until the next major disturbance.

## Common errors and misconceptions

- **"Primary and secondary succession start the same way"** — primary starts with **no soil**; secondary starts where **soil remains**.
- **"A climax community keeps changing"** — it is **stable** until a major disturbance.
- **"Lichens are useless"** — lichens are vital **pioneer species** that begin soil formation.
- **"Succession is quick"** — a forest may take about 150 years to return to its climax.`,
      workedExample: `**Task.** After a bush fire clears a forest (leaving the soil), the land is recolonised over years; meanwhile, cooled lava from a volcano slowly gains lichens then plants. (a) Which case is primary and which is secondary succession? (b) Explain why one is faster. (c) Describe the stages the burnt forest passes through.

**Solution**

(a) The **bush-fire site** (soil remains) → **secondary succession**. The **new lava** (bare rock, no soil) → **primary succession**.

(b) In primary succession **pioneer species** (lichens, hardy plants) must first help weather the rock and build soil, so it is **slow**. In secondary succession the **soil, nutrients and seeds are already present**, so plants regrow quickly — it is **faster**.

(c) Stages after the fire:
1. **Annual plants** grow first from seeds in the soil.
2. **Intermediate species** — shrubs and small trees — appear over many years.
3. The forest reaches a stable **climax community** (in the oak–hickory example, after about 150 years).

**Answer:** the burnt site shows faster secondary succession; the lava shows slow primary succession; annuals → intermediate shrubs/young trees → climax forest.`,
      quiz: [
        { prompt: "Ecological succession is the", options: ["cycling of water", "sudden death of all species", "daily movement of animals", "gradual change in a community's species over time"], correctIndex: 3, explanation: "Communities change in an orderly way over time." },
        { prompt: "Primary succession begins on", options: ["a burnt forest", "existing soil", "an abandoned farm", "bare rock or new land with no soil"], correctIndex: 3, explanation: "It starts where there is no soil." },
        { prompt: "Primary succession occurs, for example, after", options: ["a forest fire", "a farm is abandoned", "a volcanic eruption forms new rock", "a flood leaves soil"], correctIndex: 2, explanation: "New land is formed." },
        { prompt: "The first organisms to colonise bare rock are", options: ["large trees", "pioneer species such as lichens", "lions", "intermediate species"], correctIndex: 1, explanation: "Pioneers have few soil requirements." },
        { prompt: "Secondary succession occurs where", options: ["soil remains after a disturbance", "there is no soil", "only rock exists", "no life ever existed"], correctIndex: 0, explanation: "Soil and seeds remain." },
        { prompt: "Secondary succession is generally", options: ["impossible", "slower than primary", "the same speed", "faster than primary"], correctIndex: 3, explanation: "Soil is already present." },
        { prompt: "The stable final community of succession is the", options: ["pioneer community", "climax community", "intermediate community", "bare rock"], correctIndex: 1, explanation: "Succession ends in a climax community." },
        { prompt: "Lichens help succession by", options: ["weathering rock and forming soil", "eating animals", "burning forests", "removing soil"], correctIndex: 0, explanation: "They begin soil formation." },
        { prompt: "A climax community", options: ["changes every day", "is stable until a major disturbance", "has no life", "is always bare rock"], correctIndex: 1, explanation: "Its species composition no longer changes." },
        { prompt: "After a wildfire in an oak-hickory forest, the first plants to grow are", options: ["climax trees", "mature oaks", "lichens on bare rock", "annual plants"], correctIndex: 3, explanation: "Annuals grow from surviving seeds." },
        { prompt: "Shrubs and young pine, oak and hickory trees that appear after the annuals are", options: ["climax species", "pioneer species", "intermediate species", "decomposers"], correctIndex: 2, explanation: "They come between pioneers and climax." },
        { prompt: "The burnt oak-hickory forest takes about how long to return to its climax?", options: ["1 year", "150 years", "10 days", "5000 years"], correctIndex: 1, explanation: "About 150 years." },
        { prompt: "In primary succession, soil is", options: ["never formed", "already present", "formed slowly by weathering and pioneers", "removed"], correctIndex: 2, explanation: "Soil must first be built up." },
        { prompt: "A bush fire on a farm that leaves soil leads to", options: ["secondary succession", "primary succession", "no succession", "weathering only"], correctIndex: 0, explanation: "Soil remains, so secondary succession follows." },
        { prompt: "Which surface would undergo primary succession?", options: ["cooled lava", "an abandoned cassava farm", "a burnt grassland", "a flooded rice field"], correctIndex: 0, explanation: "Lava has no soil." },
        { prompt: "Why are pioneer species able to colonise bare rock?", options: ["they have few soil requirements", "they need deep soil", "they are large trees", "they eat rock"], correctIndex: 0, explanation: "They are hardy." },
        { prompt: "At the climax stage, species composition", options: ["changes every year", "no longer changes", "returns to bare rock", "contains only lichens"], correctIndex: 1, explanation: "It is an equilibrium." },
        { prompt: "The correct order in secondary succession is", options: ["annual plants → shrubs and young trees → climax forest", "climax forest → shrubs → annuals", "lichens → bare rock → trees", "trees → annuals → shrubs"], correctIndex: 0, explanation: "Early colonisers give way to intermediate then climax species." },
        { prompt: "Which disturbance resets a climax community?", options: ["a passing bird", "a sunny day", "light rain", "a major fire"], correctIndex: 3, explanation: "Major disturbances start succession again." },
        { prompt: "Secondary succession is faster mainly because", options: ["there are no plants", "soil nutrients and seeds are already present", "the rock is bare", "there is no sunlight"], correctIndex: 1, explanation: "Soil formation is not needed." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define ecological succession and name its stable final stage.", answerKey: "The gradual, orderly change in a community's species over time; the final stable stage is the climax community. 2 + 1.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which correctly describes primary succession?", options: ["Is faster than secondary", "Starts where soil remains", "Follows a farm being cleared", "Starts on new land or bare rock with no soil"], correctIndex: 3, answerKey: "Primary succession starts without soil. Option D.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Give two differences between primary and secondary succession.", answerKey: "Any two: no soil vs soil present; pioneers lichens/hardy plants vs annual plants; slow vs faster; examples lava vs burnt forest/abandoned farm. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe the roles of pioneer species, intermediate species and the climax community.", answerKey: "Pioneers colonise first, weather rock and build soil; intermediate species (shrubs, young trees) replace early colonisers; climax community is the stable equilibrium whose composition no longer changes. 2 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Explain primary and secondary succession, using named examples, and account for the difference in their rates.", answerKey: "Primary: new land/lava, pioneers (lichens), soil formation, slow (up to 6). Secondary: soil remains after fire/clearing, annuals → intermediate shrubs/trees → climax (~150 years for oak-hickory) (up to 6). Rate difference explained by presence of soil, nutrients and seeds (up to 3).", marks: 15 },
      ],
    },
  ],
};
