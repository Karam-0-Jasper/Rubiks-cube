import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 11,
// Semester One, Period III: Soil, Energy and Ecology — Patterns in Nature.
// The OCR numbering of this block is garbled, so topics are grouped by the
// CONTENTS themes: (1) soil (formation, composition, types, fertility, erosion,
// conservation, incl. crop production and non-biodegradable waste); (2)
// weathering; (3) ecosystems, trophic levels, food chains and webs, habitat and
// niche; (4) inter-specific interactions; (5) biogeochemical cycles; (6)
// population ecology; (7) ecological succession and conservation of nature.
export const biologyG11P3: PeriodContent = {
  grade: 11,
  number: 3,
  title: "Soil, Energy and Ecology — Patterns in Nature",
  summary:
    "Period III of the MoE Grade 11 Biology syllabus. Learners study soil — its formation, composition, types, fertility, erosion and conservation — and weathering, then move to ecology: energy flow through ecosystems and trophic levels, the interactions between species, the water, carbon, nitrogen, phosphorus and sulfur cycles, population growth and its limits, ecological succession, and the conservation of nature.",
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
        { prompt: "Soil is best defined as", options: ["the loose upper layer where plants grow", "solid bedrock", "pure sand", "only humus"], correctIndex: 0, explanation: "Soil is the medium supporting plant growth." },
        { prompt: "The dark, nutrient-rich organic matter in soil is", options: ["humus", "sand", "clay", "gravel"], correctIndex: 0, explanation: "Humus improves structure and fertility." },
        { prompt: "Which soil is best for farming?", options: ["loam", "pure sand", "pure clay", "gravel"], correctIndex: 0, explanation: "Loam holds water and nutrients yet drains well." },
        { prompt: "Sandy soil tends to", options: ["drain quickly and dry out", "hold too much water", "be very fertile", "have huge humus content"], correctIndex: 0, explanation: "Large particles let water pass fast." },
        { prompt: "Clay soil is characterised by", options: ["tiny particles that hold water", "large particles", "excellent drainage", "no nutrients"], correctIndex: 0, explanation: "Fine clay retains water and is heavy." },
        { prompt: "The topsoil layer rich in humus is the", options: ["A horizon", "C horizon", "bedrock", "B horizon"], correctIndex: 0, explanation: "The A horizon is the fertile topsoil." },
        { prompt: "Which is NOT a factor of soil formation?", options: ["colour of the farmer's clothes", "climate", "parent material", "time"], correctIndex: 0, explanation: "Soil forms from rock, climate, organisms, topography and time." },
        { prompt: "Soil erosion means the", options: ["removal of topsoil by water or wind", "adding of humus", "resting of land", "planting of trees"], correctIndex: 0, explanation: "Erosion strips away topsoil." },
        { prompt: "Erosion is worst on", options: ["bare sloping land", "forested flat land", "grass-covered soil", "mulched fields"], correctIndex: 0, explanation: "No cover and a slope speed run-off." },
        { prompt: "Which practice reduces erosion on a slope?", options: ["contour ploughing/terracing", "leaving soil bare", "removing all trees", "ploughing straight downhill"], correctIndex: 0, explanation: "Contour lines and terraces slow run-off." },
        { prompt: "Crop rotation with legumes helps because legumes", options: ["fix nitrogen into the soil", "remove all nutrients", "cause erosion", "kill soil organisms"], correctIndex: 0, explanation: "Legume root bacteria add nitrogen." },
        { prompt: "Fallowing land means", options: ["resting it to recover fertility", "planting the same crop always", "burning the soil", "removing the topsoil"], correctIndex: 0, explanation: "Fallowing restores nutrients and humus." },
        { prompt: "Air in the soil is important because it", options: ["supplies oxygen to roots and organisms", "adds nitrogen fertiliser", "removes water", "hardens the soil"], correctIndex: 0, explanation: "Roots and soil life need oxygen." },
        { prompt: "Non-biodegradable waste in soil (e.g. plastic)", options: ["does not rot and harms soil life", "improves fertility", "adds humus", "quickly decomposes"], correctIndex: 0, explanation: "Plastics persist and damage the soil." },
        { prompt: "Fertile soil has plenty of", options: ["humus and mineral nutrients", "plastic", "only sand", "no living organisms"], correctIndex: 0, explanation: "Nutrients, humus and good structure make soil fertile." },
        { prompt: "Adding manure or compost to soil", options: ["replaces lost nutrients and humus", "causes erosion", "removes water", "makes it non-biodegradable"], correctIndex: 0, explanation: "Organic matter renews fertility." },
        { prompt: "The parent material of soil is the", options: ["underlying rock", "humus layer", "air", "water"], correctIndex: 0, explanation: "Soil forms from weathered parent rock." },
        { prompt: "Windbreaks (rows of trees) help by", options: ["reducing wind erosion", "increasing run-off", "drying the soil", "removing nutrients"], correctIndex: 0, explanation: "Trees slow wind and hold soil." },
        { prompt: "Which crop suits wet lowland clay soil?", options: ["rice", "cactus", "desert plants", "none"], correctIndex: 0, explanation: "Rice grows in wet, water-holding soils." },
        { prompt: "Loam is a mixture of", options: ["sand, silt, clay and humus", "only clay", "only sand", "only gravel"], correctIndex: 0, explanation: "Balanced loam is ideal for crops." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the main components of soil and give the role of humus.", answerKey: "Components: mineral particles (sand/silt/clay), organic matter/humus, water, air, living organisms. Humus improves structure, holds water and supplies nutrients. 3 marks components, 2 humus role.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Which soil type is best suited for most crops?", options: ["Loam", "Pure sand", "Pure clay", "Gravel"], correctIndex: 0, answerKey: "Loam retains water/nutrients and drains well. Option A.", marks: 3 },
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
        { prompt: "Weathering is the breakdown of rock", options: ["in place, without movement", "by being carried away", "only by rivers", "into living cells"], correctIndex: 0, explanation: "Weathering happens in situ; erosion moves material." },
        { prompt: "Erosion differs from weathering because erosion involves", options: ["movement of material", "no change at all", "only heat", "only roots"], correctIndex: 0, explanation: "Erosion transports weathered material." },
        { prompt: "Physical weathering changes a rock's", options: ["size and shape only", "chemical composition", "minerals into new ones", "colour by rusting"], correctIndex: 0, explanation: "Mechanical weathering breaks rock without chemical change." },
        { prompt: "Freeze–thaw weathering works because water", options: ["expands when it freezes in cracks", "dissolves the rock", "rusts the rock", "turns to clay"], correctIndex: 0, explanation: "Ice expansion splits rock." },
        { prompt: "Roots growing into cracks is an example of", options: ["biological physical weathering", "chemical weathering", "erosion", "oxidation"], correctIndex: 0, explanation: "Roots mechanically widen cracks." },
        { prompt: "Chemical weathering", options: ["changes the composition of the rock", "only breaks rock into pieces", "moves rock downhill", "needs freezing"], correctIndex: 0, explanation: "New minerals form in chemical weathering." },
        { prompt: "Rusting of iron minerals in rock is", options: ["oxidation (chemical weathering)", "freeze–thaw", "erosion", "physical weathering"], correctIndex: 0, explanation: "Oxidation is a chemical process." },
        { prompt: "Carbonation weathering dissolves", options: ["limestone with weak acid", "granite by freezing", "clay only", "sand grains"], correctIndex: 0, explanation: "CO2 in rain forms acid that dissolves limestone." },
        { prompt: "Chemical weathering is fastest in", options: ["warm, wet climates", "cold, dry climates", "deserts only", "polar regions"], correctIndex: 0, explanation: "Heat and water speed chemical reactions." },
        { prompt: "Which produces new minerals such as clay?", options: ["hydrolysis (chemical weathering)", "freeze–thaw", "temperature change", "root action"], correctIndex: 0, explanation: "Hydrolysis forms clays." },
        { prompt: "Physical and chemical weathering together because physical weathering", options: ["increases surface area for chemical attack", "stops chemical weathering", "moves rock away", "adds humus"], correctIndex: 0, explanation: "More surface area speeds chemical weathering." },
        { prompt: "Weathering is important because it is the first step in", options: ["soil formation", "erosion only", "photosynthesis", "respiration"], correctIndex: 0, explanation: "Weathered rock forms soil's mineral part." },
        { prompt: "Repeated heating and cooling of rock causes", options: ["expansion and contraction that flakes rock", "new minerals", "clay formation", "dissolving"], correctIndex: 0, explanation: "Thermal expansion is physical weathering." },
        { prompt: "Which is a chemical weathering process?", options: ["oxidation", "freeze–thaw", "root wedging", "temperature change"], correctIndex: 0, explanation: "Oxidation changes composition chemically." },
        { prompt: "The red-brown colour of many tropical soils is due to", options: ["oxidation of iron", "freezing", "salt crystals", "roots"], correctIndex: 0, explanation: "Iron oxidises (rusts) chemically." },
        { prompt: "Salt crystal growth in cracks is a form of", options: ["physical weathering", "chemical weathering", "erosion", "deposition"], correctIndex: 0, explanation: "Growing crystals mechanically break rock." },
        { prompt: "Which statement is TRUE?", options: ["Physical weathering keeps the same minerals", "Physical weathering forms clay", "Chemical weathering never changes rock", "Weathering means moving rock away"], correctIndex: 0, explanation: "Physical weathering keeps composition; only size changes." },
        { prompt: "Wetting and drying weathers rock by", options: ["swelling and shrinking that cracks it", "rusting it", "dissolving it", "moving it"], correctIndex: 0, explanation: "Volume changes crack the rock." },
        { prompt: "Weathered fine particles combine with humus to form", options: ["soil", "bedrock", "lava", "metal"], correctIndex: 0, explanation: "Minerals plus humus make soil." },
        { prompt: "Which climate has the slowest chemical weathering?", options: ["cold and dry", "warm and wet", "hot and humid", "tropical"], correctIndex: 0, explanation: "Cold, dry conditions slow chemical reactions." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define weathering and state how it differs from erosion.", answerKey: "Weathering is the breakdown of rocks/minerals in place (no movement). Erosion is the movement/transport of the broken material by water, wind, ice or gravity. 2 marks definition, 2 difference.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is an example of chemical weathering?", options: ["Oxidation of iron minerals", "Freeze–thaw splitting", "Roots widening cracks", "Temperature expansion"], correctIndex: 0, answerKey: "Oxidation changes composition. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Give two examples each of physical and chemical weathering.", answerKey: "Physical (any two): freeze–thaw, temperature change, wetting/drying, root/biological action, salt crystals. Chemical (any two): solution, oxidation, carbonation, hydrolysis. 1 mark each (max 4).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why chemical weathering is faster in Liberia than in a cold desert.", answerKey: "Chemical weathering is favoured by warmth and moisture; Liberia is warm and wet, speeding reactions, while a cold dry desert lacks the heat and water needed. Award for warmth + moisture reasoning.", marks: 4 },
        { type: "ESSAY", prompt: "Compare physical and chemical weathering, and explain how they work together to form soil.", answerKey: "Physical: breaks rock into smaller pieces, same minerals, by freeze–thaw, heating, roots, etc. (up to 5). Chemical: changes composition, forming new minerals (clay, rust) by oxidation, carbonation, hydrolysis, fastest when warm/wet (up to 5). Together: physical weathering increases surface area so chemical weathering acts faster; fine particles + humus form soil (up to 5).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 46.2 Energy Flow through Ecosystems (https://openstax.org/books/biology-2e/pages/46-2-energy-flow-through-ecosystems)
    {
      slug: "ecosystems-and-energy-flow",
      title: "Ecosystems, Trophic Levels and Energy Flow",
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
        { prompt: "The place where an organism lives is its", options: ["habitat", "niche", "population", "biomass"], correctIndex: 0, explanation: "Habitat is the living place." },
        { prompt: "The role an organism plays in its ecosystem is its", options: ["niche", "habitat", "trophic biomass", "community"], correctIndex: 0, explanation: "The niche is its function/way of life." },
        { prompt: "Producers obtain energy by", options: ["photosynthesis", "eating animals", "decomposing", "drinking water"], correctIndex: 0, explanation: "Producers trap sunlight to make food." },
        { prompt: "A herbivore that eats producers is a", options: ["primary consumer", "producer", "decomposer", "tertiary consumer"], correctIndex: 0, explanation: "Primary consumers eat plants." },
        { prompt: "Bacteria and fungi that break down dead matter are", options: ["decomposers", "producers", "herbivores", "carnivores"], correctIndex: 0, explanation: "Decomposers recycle nutrients." },
        { prompt: "In a food chain, arrows point", options: ["from prey to predator (energy flow)", "from predator to prey", "in both directions", "downward only"], correctIndex: 0, explanation: "Arrows follow the direction of energy flow." },
        { prompt: "A food web is", options: ["many food chains linked together", "a single food chain", "a pyramid of numbers", "a habitat"], correctIndex: 0, explanation: "Webs show interconnected chains." },
        { prompt: "About how much energy passes to the next trophic level?", options: ["10%", "90%", "100%", "50%"], correctIndex: 0, explanation: "Roughly 10% transfers; 90% is lost." },
        { prompt: "Most energy is lost between levels as", options: ["heat from respiration", "new producers", "extra sunlight", "minerals"], correctIndex: 0, explanation: "Respiration releases heat energy." },
        { prompt: "Which pyramid is always upright?", options: ["pyramid of energy", "pyramid of numbers", "pyramid of biomass", "none"], correctIndex: 0, explanation: "Energy always decreases upward." },
        { prompt: "Food chains are usually limited to about", options: ["4–5 links", "20 links", "1 link", "100 links"], correctIndex: 0, explanation: "Energy loss limits chain length." },
        { prompt: "The base of every food chain is the", options: ["producer", "top carnivore", "decomposer", "herbivore"], correctIndex: 0, explanation: "Producers capture the Sun's energy first." },
        { prompt: "A hawk eating a snake acts as a", options: ["tertiary consumer", "producer", "primary consumer", "decomposer"], correctIndex: 0, explanation: "Top carnivores are tertiary consumers." },
        { prompt: "Energy in an ecosystem", options: ["flows one way and is lost as heat", "is fully recycled", "increases up the chain", "never leaves"], correctIndex: 0, explanation: "Energy flow is one-directional." },
        { prompt: "Two species cannot occupy the same", options: ["niche", "habitat", "country", "pyramid"], correctIndex: 0, explanation: "Competitive exclusion principle." },
        { prompt: "All the populations living together form a", options: ["community", "population", "species", "niche"], correctIndex: 0, explanation: "A community is many populations." },
        { prompt: "A pyramid of numbers counts", options: ["the number of organisms at each level", "the energy only", "the mass only", "the species names"], correctIndex: 0, explanation: "It shows numbers per trophic level." },
        { prompt: "If producers trap 5000 kJ, roughly how much reaches primary consumers?", options: ["500 kJ", "5000 kJ", "50 kJ", "4500 kJ"], correctIndex: 0, explanation: "10% of 5000 = 500 kJ." },
        { prompt: "Decomposers are important because they", options: ["recycle nutrients from dead matter", "make sunlight", "eat producers", "increase energy"], correctIndex: 0, explanation: "They return nutrients to the soil." },
        { prompt: "Nutrients differ from energy in that nutrients are", options: ["recycled", "lost as heat", "made by the Sun", "never used"], correctIndex: 0, explanation: "Nutrients cycle; energy flows through." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between the habitat and the niche of an organism.", answerKey: "Habitat is the place where an organism lives; niche is its role/way of life (what it eats, how it interacts). 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Approximately what percentage of energy passes from one trophic level to the next?", options: ["10%", "50%", "90%", "100%"], correctIndex: 0, answerKey: "About 10%. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "For the chain maize → rat → snake → hawk, name the trophic level of each organism.", answerKey: "Maize – producer; rat – primary consumer; snake – secondary consumer; hawk – tertiary consumer. 1 mark each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why food chains rarely have more than four or five links.", answerKey: "About 90% of energy is lost as heat (respiration) and waste at each transfer, so only ~10% passes on; after a few links too little energy remains to support another level. Award for energy loss + limited energy.", marks: 4 },
        { type: "ESSAY", prompt: "Explain how energy flows through an ecosystem, using trophic levels, food chains/webs and ecological pyramids, and contrast energy flow with nutrient recycling.", answerKey: "Sunlight fixed by producers, passes to primary, secondary, tertiary consumers; decomposers recycle (up to 5). ~10% transfer, energy lost as heat, pyramids (energy pyramid always upright) (up to 5). Contrast: energy flows one way and is lost as heat, whereas nutrients are recycled by decomposers (up to 5).", marks: 15 },
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
        { prompt: "Inter-specific interactions occur between", options: ["different species", "the same species only", "non-living things", "cells of one body"], correctIndex: 0, explanation: "'Inter-specific' means between species." },
        { prompt: "In competition, the two species are", options: ["both harmed", "both helped", "one helped one unaffected", "unaffected"], correctIndex: 0, explanation: "Competition is –/–." },
        { prompt: "The competitive exclusion principle states that", options: ["two species cannot share the exact same niche", "predators always win", "all species help each other", "competition never happens"], correctIndex: 0, explanation: "One out-competes the other in an identical niche." },
        { prompt: "In predation, the predator ... and the prey ...", options: ["benefits; is harmed", "is harmed; benefits", "is unaffected; benefits", "both benefit"], correctIndex: 0, explanation: "Predation is +/–." },
        { prompt: "A relationship where both species benefit is", options: ["mutualism", "commensalism", "parasitism", "predation"], correctIndex: 0, explanation: "Mutualism is +/+." },
        { prompt: "Lichen (fungus + alga) is an example of", options: ["mutualism", "parasitism", "predation", "competition"], correctIndex: 0, explanation: "Both partners benefit." },
        { prompt: "A tapeworm in the gut shows", options: ["parasitism", "mutualism", "commensalism", "predation"], correctIndex: 0, explanation: "Parasite benefits, host harmed." },
        { prompt: "In commensalism", options: ["one benefits and the other is unaffected", "both benefit", "both are harmed", "the host dies"], correctIndex: 0, explanation: "Commensalism is +/0." },
        { prompt: "Which pair is correctly matched?", options: ["parasitism – host harmed", "mutualism – host harmed", "commensalism – both harmed", "predation – both benefit"], correctIndex: 0, explanation: "In parasitism the host is harmed." },
        { prompt: "Thorns and hard shells are prey defences that are", options: ["mechanical", "chemical", "camouflage", "warning colours"], correctIndex: 0, explanation: "Physical structures deter predators." },
        { prompt: "Warning (bright) colours tell predators that prey is", options: ["poisonous/dangerous", "tasty", "invisible", "asleep"], correctIndex: 0, explanation: "Aposematic colours signal danger." },
        { prompt: "Rhizobium bacteria and legume plants show", options: ["mutualism", "parasitism", "predation", "competition"], correctIndex: 0, explanation: "The plant gets nitrogen; bacteria get food/shelter." },
        { prompt: "Herbivory is when animals eat", options: ["plants", "other predators", "decomposers", "minerals"], correctIndex: 0, explanation: "Herbivory is eating plants." },
        { prompt: "Predator and prey population numbers", options: ["rise and fall in linked cycles", "stay exactly constant", "are unrelated", "always increase"], correctIndex: 0, explanation: "Predators lag behind prey peaks." },
        { prompt: "Resource partitioning allows competing species to", options: ["coexist by using slightly different resources", "occupy identical niches", "eliminate each other", "stop eating"], correctIndex: 0, explanation: "Different microniches reduce competition." },
        { prompt: "A remora fish riding a shark without harming it shows", options: ["commensalism", "mutualism", "parasitism", "predation"], correctIndex: 0, explanation: "The remora benefits; the shark is unaffected." },
        { prompt: "Which interaction harms the host but usually does not kill it quickly?", options: ["parasitism", "predation", "mutualism", "commensalism"], correctIndex: 0, explanation: "Parasites live on/in the host over time." },
        { prompt: "Camouflage helps prey by", options: ["blending with surroundings to avoid predators", "attracting predators", "poisoning predators", "growing thorns"], correctIndex: 0, explanation: "Blending in avoids detection." },
        { prompt: "Which is a –/– relationship?", options: ["competition", "mutualism", "commensalism", "predation"], correctIndex: 0, explanation: "Both competitors are harmed." },
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
        { prompt: "Unlike energy, matter (nutrients) in ecosystems is", options: ["recycled", "lost as heat", "made by the Sun", "never reused"], correctIndex: 0, explanation: "Biogeochemical cycles recycle matter." },
        { prompt: "Water vapour returns to liquid by", options: ["condensation", "evaporation", "transpiration", "precipitation"], correctIndex: 0, explanation: "Cooling vapour condenses into clouds." },
        { prompt: "Plants add water vapour to the air by", options: ["transpiration", "condensation", "run-off", "precipitation"], correctIndex: 0, explanation: "Transpiration releases water from leaves." },
        { prompt: "Carbon dioxide is removed from the air by", options: ["photosynthesis", "respiration", "combustion", "decay"], correctIndex: 0, explanation: "Producers fix CO2 in photosynthesis." },
        { prompt: "Carbon dioxide is returned to the air by", options: ["respiration and burning", "photosynthesis", "condensation", "nitrogen fixation"], correctIndex: 0, explanation: "Respiration, decay and combustion release CO2." },
        { prompt: "Plants absorb nitrogen mainly as", options: ["nitrates", "nitrogen gas", "ammonia gas", "sulfur"], correctIndex: 0, explanation: "Nitrates are taken up by roots." },
        { prompt: "Converting nitrogen gas into usable compounds is", options: ["nitrogen fixation", "nitrification", "denitrification", "ammonification"], correctIndex: 0, explanation: "Fixation makes N2 usable." },
        { prompt: "Rhizobium bacteria live in the", options: ["root nodules of legumes", "leaves of grass", "air only", "sea only"], correctIndex: 0, explanation: "Rhizobium fixes nitrogen in legume nodules." },
        { prompt: "Nitrifying bacteria turn ammonium into", options: ["nitrites then nitrates", "nitrogen gas", "carbon dioxide", "phosphate"], correctIndex: 0, explanation: "Nitrification produces nitrates." },
        { prompt: "Denitrifying bacteria convert nitrates back to", options: ["nitrogen gas", "nitrates", "ammonium", "protein"], correctIndex: 0, explanation: "Denitrification releases N2 to the air." },
        { prompt: "Decomposers turning dead matter into ammonium is", options: ["ammonification", "nitrification", "fixation", "photosynthesis"], correctIndex: 0, explanation: "Ammonification recycles nitrogen from waste." },
        { prompt: "The phosphorus cycle differs from others because it has", options: ["no gas stage", "no organisms", "only a gas stage", "no rocks"], correctIndex: 0, explanation: "Phosphorus comes from rock weathering, no gas phase." },
        { prompt: "Phosphorus mainly enters ecosystems from", options: ["weathering of rocks", "the atmosphere", "photosynthesis", "lightning"], correctIndex: 0, explanation: "Rock weathering releases phosphate." },
        { prompt: "Sulfur enters the air mainly as", options: ["sulfur dioxide", "nitrogen gas", "phosphate", "oxygen"], correctIndex: 0, explanation: "SO2 comes from decay, volcanoes and burning." },
        { prompt: "Acid rain is caused mainly by", options: ["sulfur dioxide and nitrogen oxides", "phosphate", "water vapour", "oxygen"], correctIndex: 0, explanation: "These gases form acids in rain." },
        { prompt: "Burning fossil fuels increases atmospheric", options: ["carbon dioxide", "nitrates", "phosphate", "oxygen"], correctIndex: 0, explanation: "Combustion releases CO2, driving warming." },
        { prompt: "In the water cycle, rain and snow are", options: ["precipitation", "evaporation", "condensation", "transpiration"], correctIndex: 0, explanation: "Precipitation returns water to land." },
        { prompt: "Which organisms drive most nitrogen cycle steps?", options: ["bacteria", "mammals", "fish", "insects only"], correctIndex: 0, explanation: "Different bacteria fix, nitrify and denitrify." },
        { prompt: "Waterlogged, airless soil loses nitrogen because it favours", options: ["denitrification", "fixation", "nitrification", "photosynthesis"], correctIndex: 0, explanation: "Anaerobic conditions boost denitrifying bacteria." },
        { prompt: "Nutrient cycles are important because they", options: ["return essential elements to the environment", "remove all elements", "make energy", "stop growth"], correctIndex: 0, explanation: "Cycling keeps nutrients available." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "List the main stages of the water cycle.", answerKey: "Evaporation (and transpiration), condensation, precipitation, run-off/groundwater returning to the sea. 1 mark each stage (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which process converts nitrogen gas into a form plants can use?", options: ["Nitrogen fixation", "Denitrification", "Respiration", "Condensation"], correctIndex: 0, answerKey: "Fixation makes N2 usable. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain how carbon dioxide is removed from and returned to the atmosphere.", answerKey: "Removed by photosynthesis (producers fix CO2). Returned by respiration of organisms, decay, combustion/burning fossil fuels, and volcanoes. 2 marks removal, 2 return.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State one way the phosphorus cycle differs from the nitrogen cycle.", answerKey: "Phosphorus has no gaseous stage and enters from rock weathering, whereas nitrogen has a large atmospheric (gas) reservoir cycled by bacteria. Award for 'no gas phase / from rocks'.", marks: 3 },
        { type: "ESSAY", prompt: "Describe the nitrogen cycle, naming the bacteria and processes that make nitrogen available to plants and those that return it to the air.", answerKey: "Fixation (Rhizobium/Azotobacter/cyanobacteria, N2→ammonium); nitrification (Nitrosomonas etc., ammonium→nitrites→nitrates); assimilation by plants; ammonification (decomposers, dead matter→ammonium); denitrification (denitrifying bacteria, nitrates→N2) (up to 12). Reward correct sequence and bacteria (up to 3).", marks: 15 },
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
        { prompt: "A population is all the organisms of", options: ["one species in an area", "many species", "one individual", "non-living things"], correctIndex: 0, explanation: "A population is one species in a place." },
        { prompt: "Population density is the number of individuals", options: ["per unit area", "born each year", "that die", "that move in"], correctIndex: 0, explanation: "Density is individuals per area." },
        { prompt: "Immigration means individuals", options: ["moving into the population", "moving out", "being born", "dying"], correctIndex: 0, explanation: "Immigration = moving in." },
        { prompt: "Emigration means individuals", options: ["moving out of the population", "moving in", "being born", "dying"], correctIndex: 0, explanation: "Emigration = moving out." },
        { prompt: "Population change equals", options: ["(births+immigration) − (deaths+emigration)", "births only", "deaths only", "immigration only"], correctIndex: 0, explanation: "All four factors change size." },
        { prompt: "A J-shaped curve represents", options: ["exponential growth", "logistic growth", "no growth", "decline"], correctIndex: 0, explanation: "Exponential growth is J-shaped." },
        { prompt: "An S-shaped curve represents", options: ["logistic growth", "exponential growth", "instant decline", "no births"], correctIndex: 0, explanation: "Logistic growth levels off (S)." },
        { prompt: "The maximum population an environment can support is the", options: ["carrying capacity", "birth rate", "density", "doubling time"], correctIndex: 0, explanation: "Carrying capacity is K." },
        { prompt: "When population size N is greater than K, the population", options: ["declines", "keeps growing fast", "stays exactly the same", "disappears instantly"], correctIndex: 0, explanation: "Above K, resources run short and it falls." },
        { prompt: "Which is a density-dependent factor?", options: ["competition for food", "drought", "flood", "storm"], correctIndex: 0, explanation: "Competition worsens as density rises." },
        { prompt: "Which is a density-independent factor?", options: ["fire", "disease", "predation", "competition"], correctIndex: 0, explanation: "Fire affects the population regardless of density." },
        { prompt: "Per-capita growth rate (r) equals", options: ["birth rate − death rate", "births + deaths", "immigration only", "carrying capacity"], correctIndex: 0, explanation: "r = b − d." },
        { prompt: "Doubling time can be estimated by", options: ["70 ÷ (% growth rate)", "growth rate × 70", "births ÷ deaths", "K ÷ N"], correctIndex: 0, explanation: "The rule of 70 estimates doubling time." },
        { prompt: "A population of 5000 grows by 500 in a year. Its % growth rate is", options: ["10%", "5%", "50%", "1%"], correctIndex: 0, explanation: "(500/5000)×100 = 10%." },
        { prompt: "Exponential growth occurs when resources are", options: ["unlimited", "very limited", "absent", "declining"], correctIndex: 0, explanation: "Unlimited resources allow J-curve growth." },
        { prompt: "As a population nears carrying capacity, growth", options: ["slows and levels off", "speeds up forever", "stops instantly", "becomes negative always"], correctIndex: 0, explanation: "Logistic growth plateaus at K." },
        { prompt: "Disease spreads more easily in a population that is", options: ["dense/crowded", "very sparse", "shrinking", "extinct"], correctIndex: 0, explanation: "Crowding is density-dependent." },
        { prompt: "Birth rate is also called", options: ["natality", "mortality", "density", "emigration"], correctIndex: 0, explanation: "Natality = birth rate." },
        { prompt: "If a town has 3% annual growth, its doubling time is about", options: ["23 years", "3 years", "70 years", "233 years"], correctIndex: 0, explanation: "70 ÷ 3 ≈ 23 years." },
        { prompt: "Which pair increases population size?", options: ["births and immigration", "deaths and emigration", "deaths and disease", "emigration and drought"], correctIndex: 0, explanation: "Births and immigration add individuals." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define (a) population density and (b) carrying capacity.", answerKey: "(a) The number of individuals per unit area. (b) The maximum population size an environment can support. 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which factor is density-dependent?", options: ["Competition for food", "Drought", "Flood", "Volcanic eruption"], correctIndex: 0, answerKey: "Competition intensifies with density. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A population of 10 000 has 400 births, 150 deaths, 50 immigrants and 100 emigrants in a year. Calculate the population change and the percentage growth rate.", answerKey: "Change = (400+50) − (150+100) = 450 − 250 = +200. % growth = (200/10000)×100 = 2%. 2 marks change, 2 marks percentage.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between exponential and logistic growth.", answerKey: "Exponential (J-curve): rapid, accelerating growth with unlimited resources. Logistic (S-curve): growth slows as resources become limited and levels off at the carrying capacity. Award for both curve shapes and the resource/K idea.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the factors that determine the size of a population and the factors that limit its growth.", answerKey: "Size determined by births, deaths, immigration, emigration; growth rate r = b − d (up to 5). Growth patterns: exponential vs logistic, carrying capacity (up to 5). Limits: density-dependent (competition, predation, disease, waste) and density-independent (drought, flood, fire, storms) (up to 5).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 45.6 Community Ecology (succession); 47.4 Preserving Biodiversity (https://openstax.org/books/biology-2e/pages/45-6-community-ecology)
    {
      slug: "succession-and-conservation",
      title: "Ecological Succession and Conservation of Nature",
      objective:
        "By the end of the topic, learners should be able to describe primary and secondary succession, and explain the need for and methods of conserving nature.",
      estimatedMinutes: 100,
      notes: `## Ecological succession

- **Ecological succession** — the gradual, orderly change in the species of a community over time until a stable community forms.

## Primary succession

- Starts on **bare ground with no soil** (new volcanic rock, bare rock after a glacier).
- **Pioneer species** (lichens and mosses) colonise first; they help weather the rock and, as they die, build up **soil**.
- Small plants, then shrubs, then trees follow, ending in a stable **climax community**.

## Secondary succession

- Occurs where a community was destroyed but the **soil remains** (after a fire, flood or clearing a farm).
- It is **faster** than primary succession because soil and seeds are already present.
- Sequence: weeds/grasses → shrubs → small trees → **climax community** (e.g. mature forest).

| Feature | Primary succession | Secondary succession |
| --- | --- | --- |
| Starting point | bare rock, no soil | soil already present |
| Pioneers | lichens, mosses | grasses, weeds |
| Speed | slow (soil must form) | faster |

- A **climax community** is a stable, self-sustaining community that stays until the next major disturbance.

## Conservation of nature

**Conservation** — the wise use and protection of natural resources so they last for the future.

**Why conserve?**
- to protect **biodiversity** (the variety of living things);
- to keep **soil, water, forests and wildlife** for food, medicine, timber and clean air;
- to maintain the **ecosystem services** on which people depend.

**Threats:** deforestation, over-hunting/over-fishing, pollution, habitat destruction and climate change.

**Methods of conservation:**

| Resource | Conservation methods |
| --- | --- |
| **Soil** | cover crops, terracing, crop rotation, avoid over-cultivation |
| **Forests** | reforestation/afforestation, controlled logging, prevent bush fires |
| **Wildlife** | national parks/reserves, laws against poaching, protect endangered species, ban trade (CITES) |
| **Minerals/oil** | efficient use, recycling, reduce waste |

## Common errors and misconceptions

- **"Primary and secondary succession start the same way"** — primary starts on **bare rock (no soil)**; secondary starts where **soil remains**.
- **"A climax community keeps changing"** — it is **stable** until a major disturbance.
- **"Conservation means never using resources"** — it means **wise, sustainable use**, not total non-use.
- **"Lichens are useless"** — lichens are vital **pioneer species** that begin soil formation.`,
      workedExample: `**Task.** After a bush fire clears a forest (leaving the soil), the land is recolonised over years; meanwhile, cooled lava from a volcano slowly gains lichens then plants. (a) Which case is primary and which is secondary succession? (b) Explain the difference and why one is faster. (c) Suggest two ways the community could conserve the recovering forest and its wildlife.

**Solution**

(a) Classifying:
- The **bush-fire site (soil remains)** → **secondary succession**.
- The **new lava (bare rock, no soil)** → **primary succession**.

(b) Difference and speed:
- **Primary succession** begins on **bare rock with no soil**; **pioneer species (lichens/mosses)** must first weather the rock and form soil, so it is **slow**.
- **Secondary succession** begins where the **soil and seeds are already present**, so plants regrow quickly — it is **faster**. Both progress through stages to a stable **climax community**.

(c) Two conservation measures for the recovering forest and wildlife:
- **Reforestation and preventing further bush fires**, plus controlled (sustainable) logging.
- **Protect wildlife** by creating a reserve/park, enforcing laws against poaching, and protecting endangered species.

**Answer:** the burnt site shows faster secondary succession (soil present); the lava shows slow primary succession (soil must form via pioneers); the forest can be conserved by reforestation/fire control and by protecting wildlife in reserves.`,
      quiz: [
        { prompt: "Ecological succession is the", options: ["gradual change in a community's species over time", "sudden death of all species", "movement of animals daily", "cycle of water"], correctIndex: 0, explanation: "Communities change in an orderly way over time." },
        { prompt: "Primary succession begins on", options: ["bare rock with no soil", "existing soil", "a farm", "a burnt forest"], correctIndex: 0, explanation: "It starts where there is no soil." },
        { prompt: "The first organisms to colonise bare rock are", options: ["pioneer species (lichens, mosses)", "large trees", "lions", "grasses only"], correctIndex: 0, explanation: "Pioneers begin soil formation." },
        { prompt: "Secondary succession occurs where", options: ["soil already remains", "there is no soil", "there is only rock", "no life ever existed"], correctIndex: 0, explanation: "Soil and seeds remain after disturbance." },
        { prompt: "Secondary succession is generally", options: ["faster than primary", "slower than primary", "the same speed", "impossible"], correctIndex: 0, explanation: "Soil is already present, so it is faster." },
        { prompt: "The stable final community of succession is the", options: ["climax community", "pioneer community", "bare rock", "desert"], correctIndex: 0, explanation: "Succession ends in a climax community." },
        { prompt: "Lichens help succession by", options: ["weathering rock and forming soil", "eating animals", "burning forests", "removing soil"], correctIndex: 0, explanation: "They start soil formation." },
        { prompt: "A climax community", options: ["is stable until a major disturbance", "changes every day", "has no life", "is always bare rock"], correctIndex: 0, explanation: "It is self-sustaining and stable." },
        { prompt: "Conservation means", options: ["wise use and protection of resources", "using up all resources", "never touching nature", "destroying forests"], correctIndex: 0, explanation: "Sustainable use protects resources for the future." },
        { prompt: "Which is a threat to biodiversity?", options: ["deforestation", "reforestation", "creating reserves", "recycling"], correctIndex: 0, explanation: "Deforestation destroys habitats." },
        { prompt: "Reforestation means", options: ["replanting trees", "cutting all trees", "burning forests", "building roads"], correctIndex: 0, explanation: "It restores forest cover." },
        { prompt: "National parks and reserves help conserve", options: ["wildlife", "plastic", "minerals only", "cars"], correctIndex: 0, explanation: "Protected areas shelter wildlife." },
        { prompt: "Which conserves soil?", options: ["terracing and crop rotation", "over-cultivation", "removing all plants", "dumping plastic"], correctIndex: 0, explanation: "These reduce erosion and keep fertility." },
        { prompt: "CITES is an agreement that", options: ["bans trade in endangered species", "encourages hunting", "removes reserves", "burns forests"], correctIndex: 0, explanation: "It protects species from illegal trade." },
        { prompt: "Biodiversity means the", options: ["variety of living things", "number of rocks", "amount of water only", "size of a forest only"], correctIndex: 0, explanation: "Biodiversity is the variety of life." },
        { prompt: "Which mineral/oil conservation method is best?", options: ["efficient use and recycling", "wasteful mining", "burning more fuel", "dumping waste"], correctIndex: 0, explanation: "Efficient use and recycling extend resources." },
        { prompt: "In primary succession, soil is", options: ["formed slowly by pioneers", "already present", "never formed", "removed"], correctIndex: 0, explanation: "Pioneers build soil over time." },
        { prompt: "A bush fire on a farm leads to", options: ["secondary succession", "primary succession", "no succession", "weathering only"], correctIndex: 0, explanation: "Soil remains, so secondary succession follows." },
        { prompt: "Over-hunting and over-fishing threaten", options: ["wildlife populations", "soil only", "rocks", "the water cycle"], correctIndex: 0, explanation: "Overexploitation reduces species." },
        { prompt: "The main reason to conserve nature is to", options: ["protect biodiversity and ecosystem services for the future", "increase pollution", "remove all animals", "stop all farming"], correctIndex: 0, explanation: "Conservation sustains resources and life." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define ecological succession and name its stable final stage.", answerKey: "Ecological succession is the gradual, orderly change in a community's species over time; the stable final stage is the climax community. 2 marks definition, 1 climax.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which correctly describes primary succession?", options: ["Starts on bare rock with no soil", "Starts where soil remains", "Follows a farm being cleared", "Is faster than secondary"], correctIndex: 0, answerKey: "Primary succession starts on bare rock. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Give two differences between primary and secondary succession.", answerKey: "Any two: primary starts on bare rock/no soil vs secondary where soil remains; pioneers lichens/mosses vs grasses/weeds; primary slow vs secondary faster. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two methods of conserving (a) forests and (b) wildlife.", answerKey: "(a) Forests: reforestation/afforestation, controlled logging, prevent bush fires. (b) Wildlife: national parks/reserves, anti-poaching laws, protect endangered species/ban trade. 1 mark each (max 4).", marks: 4 },
        { type: "ESSAY", prompt: "Explain ecological succession and discuss why and how nature should be conserved in your country.", answerKey: "Succession: primary (bare rock, pioneers, soil forms, slow) and secondary (soil remains, faster) to a climax community (up to 6). Why conserve: protect biodiversity, soil, water, forests, wildlife and ecosystem services; threats deforestation/pollution/overexploitation (up to 5). How: reforestation, protected areas, anti-poaching laws, soil conservation, efficient use/recycling (up to 4).", marks: 15 },
      ],
    },
  ],
};
