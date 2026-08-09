import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Geography, Grade 10,
// Semester Two, Period V, Unit 1 Physical Geography — Environmental Science:
// Land and Water Distribution.
export const geographyG10P5: PeriodContent = {
  grade: 10,
  number: 5,
  title: "Environmental Science: Land, Water and Hazards",
  summary:
    "Period V of the MoE Grade 10 Geography syllabus (Unit 1: Physical Geography — Environmental Science). Learners study the distribution of land and water (continents, oceans and their importance), the pollution of land and water and its control, the balance of the environment through soils, and the major environmental hazards — erosion, drought, deforestation, desertification and flooding.",
  topics: [
    {
      // source: Geosciences LibreTexts — The Physical Environment (Ritter), 2.1.9 The Oceans (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/The_Physical_Environment_(Ritter)/02:_The_Earth_System/2.01:_The_Earth_System/2.1.09:_The_Oceans)
      slug: "continents-and-oceans",
      title: "The Continents and Oceans",
      objective:
        "By the end of the topic, learners should be able to name and locate the continents and oceans, and describe their relative sizes and positions on the Earth.",
      estimatedMinutes: 150,
      notes: `## Introduction

- The Earth's surface splits into vast blocks of land and water — the **continents** and **oceans**.
- They are the largest features on Earth, the framework for every country, mountain and river.
- **This topic:** naming and locating the **seven continents** and the **oceans**, and comparing their sizes.

## The great divisions of the Earth's surface

The Earth's surface is divided into large land masses (**continents**) and large bodies of salt water (**oceans**).

## The seven continents

A **continent** is one of the Earth's large continuous land masses. There are **seven**:

- **Asia** — the **largest** continent.
- **Africa** — the second largest (where Liberia is).
- **North America**
- **South America**
- **Antarctica** — the ice-covered continent at the South Pole.
- **Europe**
- **Australia (Oceania)** — the **smallest** continent.

## The oceans

An **ocean** is a vast body of salt water. The oceans are all connected, but are named as separate oceans:

- **Pacific Ocean** — the **largest and deepest**, between Asia and the Americas.
- **Atlantic Ocean** — between the Americas and Europe/Africa (Liberia's coast is on the Atlantic).
- **Indian Ocean** — south of Asia, between Africa and Australia.
- **Southern (Antarctic) Ocean** — around Antarctica.
- **Arctic Ocean** — the **smallest and shallowest**, around the North Pole.

\`\`\`svg A simple map showing continents and oceans
<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified world map with continents on a blue ocean background">
  <rect x="5" y="5" width="290" height="140" fill="#bae6fd" stroke="#0369a1"/>
  <path d="M40,40 q20,-15 45,0 q10,25 -10,40 q-30,10 -40,-15 z" fill="#86efac" stroke="#065f46"/>
  <text x="55" y="60" font-size="7" fill="#065f46">N. America</text>
  <path d="M70,95 q15,-5 20,15 q-5,25 -20,20 q-12,-20 0,-35 z" fill="#86efac" stroke="#065f46"/>
  <text x="72" y="115" font-size="6" fill="#065f46">S.Am</text>
  <path d="M150,55 q25,-10 40,5 q5,30 -15,45 q-30,5 -30,-25 z" fill="#fcd34d" stroke="#92400e"/>
  <text x="160" y="80" font-size="7" fill="#7c2d12">Africa</text>
  <path d="M200,35 q45,-12 70,8 q-10,25 -55,25 q-25,-15 -15,-33 z" fill="#86efac" stroke="#065f46"/>
  <text x="225" y="52" font-size="7" fill="#065f46">Asia</text>
  <text x="30" y="135" font-size="7" fill="#0369a1">Pacific / Atlantic Oceans</text>
</svg>
\`\`\`

## Relative sizes and positions

- **Asia** is by far the largest continent; **Australia** the smallest.
- The **Pacific** is the largest ocean; the **Arctic** the smallest.
- Most of the world's **land** is in the **Northern Hemisphere**; the **Southern Hemisphere** is mostly ocean.
- Continents and oceans are shown on a **globe** (a model of the round Earth) or a flat **map**.

## Why it matters

Knowing where the continents and oceans are is the foundation of geography: it lets us locate countries, understand climate, trade routes, and the movement of people and goods across the world.

## Common errors and misconceptions

- **Confusing a continent with a country** — a **continent** is a huge land mass containing many countries; Africa is a continent, Liberia is a country within it.
- **Thinking Australia is a country only** — Australia is both a **country** and the smallest **continent**.
- **Miscounting or misnaming oceans** — the oceans are the **Pacific, Atlantic, Indian, Southern (Antarctic) and Arctic**; the Pacific is the largest.
- **Believing land covers most of the Earth** — water covers about **71%** of the surface; land is the smaller part.`,
      workedExample: `**Task.** (a) Name the seven continents, stating the largest and smallest. (b) On which ocean does Liberia lie, and what is the largest ocean? (c) In which hemisphere is most of the world's land found?

**Part (a) — the seven continents**
The seven continents are **Asia, Africa, North America, South America, Antarctica, Europe** and **Australia (Oceania)**.
- The **largest** is **Asia**.
- The **smallest** is **Australia**.

**Part (b) — oceans**
Liberia is on the west coast of Africa, so it lies on the **Atlantic Ocean**. The **largest (and deepest) ocean** in the world is the **Pacific Ocean**.

**Part (c) — hemisphere with most land**
Most of the world's **land** is found in the **Northern Hemisphere**; the Southern Hemisphere is largely covered by ocean.

**Conclusion:** the Earth's surface is divided into seven continents (Asia largest, Australia smallest) and connected oceans (Pacific largest, Arctic smallest); Liberia lies on the Atlantic, and most land lies north of the equator.`,
      quiz: [
        {
          prompt: "A large continuous land mass is called a…",
          options: ["continent", "ocean", "country", "county"],
          correctIndex: 0,
          explanation: "Continents are the great land masses.",
        },
        {
          prompt: "How many continents are there?",
          options: ["seven", "five", "four", "ten"],
          correctIndex: 0,
          explanation: "There are seven continents.",
        },
        {
          prompt: "The largest continent is…",
          options: ["Asia", "Africa", "Europe", "Australia"],
          correctIndex: 0,
          explanation: "Asia is the largest.",
        },
        {
          prompt: "The smallest continent is…",
          options: ["Australia", "Europe", "Antarctica", "South America"],
          correctIndex: 0,
          explanation: "Australia (Oceania) is the smallest.",
        },
        {
          prompt: "Liberia is located on which continent?",
          options: ["Africa", "Asia", "Europe", "South America"],
          correctIndex: 0,
          explanation: "Liberia is in West Africa.",
        },
        {
          prompt: "The ice-covered continent at the South Pole is…",
          options: ["Antarctica", "the Arctic", "Australia", "Europe"],
          correctIndex: 0,
          explanation: "Antarctica surrounds the South Pole.",
        },
        {
          prompt: "A vast body of salt water is an…",
          options: ["ocean", "island", "continent", "peninsula"],
          correctIndex: 0,
          explanation: "Oceans are the large salt-water bodies.",
        },
        {
          prompt: "The largest and deepest ocean is the…",
          options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
          correctIndex: 0,
          explanation: "The Pacific is the largest and deepest.",
        },
        {
          prompt: "Liberia's coast lies on which ocean?",
          options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
          correctIndex: 0,
          explanation: "West Africa borders the Atlantic.",
        },
        {
          prompt: "The smallest and shallowest ocean is the…",
          options: ["Arctic Ocean", "Pacific Ocean", "Indian Ocean", "Atlantic Ocean"],
          correctIndex: 0,
          explanation: "The Arctic Ocean is smallest.",
        },
        {
          prompt: "The ocean south of Asia, between Africa and Australia, is the…",
          options: ["Indian Ocean", "Atlantic Ocean", "Arctic Ocean", "Pacific Ocean"],
          correctIndex: 0,
          explanation: "The Indian Ocean lies there.",
        },
        {
          prompt: "Most of the world's land is in the … Hemisphere.",
          options: ["Northern", "Southern", "Eastern only", "Western only"],
          correctIndex: 0,
          explanation: "Land is concentrated north of the equator.",
        },
        {
          prompt: "The Southern Hemisphere is mostly covered by…",
          options: ["ocean", "land", "ice", "desert"],
          correctIndex: 0,
          explanation: "It is largely ocean.",
        },
        {
          prompt: "Which is the second-largest continent?",
          options: ["Africa", "Asia", "Europe", "Antarctica"],
          correctIndex: 0,
          explanation: "Africa is second in size after Asia.",
        },
        {
          prompt: "A round model of the Earth showing continents and oceans is a…",
          options: ["globe", "graph", "grid", "chart"],
          correctIndex: 0,
          explanation: "A globe models the round Earth.",
        },
        {
          prompt: "The Atlantic Ocean lies between the Americas and…",
          options: ["Europe/Africa", "Asia", "Antarctica", "Australia"],
          correctIndex: 0,
          explanation: "It separates the Americas from Europe and Africa.",
        },
        {
          prompt: "Which ocean surrounds Antarctica?",
          options: ["the Southern (Antarctic) Ocean", "the Arctic Ocean", "the Indian Ocean only", "the Atlantic only"],
          correctIndex: 0,
          explanation: "The Southern Ocean rings Antarctica.",
        },
        {
          prompt: "The oceans of the world are…",
          options: ["all connected", "completely separate", "made of fresh water", "only in the north"],
          correctIndex: 0,
          explanation: "They form one connected body of salt water.",
        },
        {
          prompt: "Knowing the continents and oceans helps us to…",
          options: ["locate countries and understand climate and trade", "measure temperature", "count the population", "grow crops directly"],
          correctIndex: 0,
          explanation: "It is the basis for locating and understanding places.",
        },
        {
          prompt: "Which continent lies between the Americas — Europe and Africa across the Atlantic — is NOT true?",
          options: ["Asia borders the Atlantic to the west of Africa", "Africa borders the Atlantic", "The Americas border the Atlantic", "Europe borders the Atlantic"],
          correctIndex: 0,
          explanation: "Asia does not border the Atlantic west of Africa; that is the Atlantic Ocean itself.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the seven continents.",
          answerKey:
            "Asia, Africa, North America, South America, Antarctica, Europe, Australia (Oceania). Award full marks for all seven; deduct for each missing or wrong one.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the world's largest ocean and the world's largest continent.",
          answerKey:
            "Largest ocean: the Pacific Ocean. Largest continent: Asia. Award a mark for each correct answer.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Most of the world's land is found in which hemisphere?",
          options: ["the Northern Hemisphere", "the Southern Hemisphere", "neither hemisphere", "the ocean hemisphere"],
          correctIndex: 0,
          answerKey: "Land is concentrated in the Northern Hemisphere.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe the distribution of the continents and oceans on the Earth's surface, referring to their relative sizes and the balance of land and water between the hemispheres.",
          answerKey:
            "A strong answer names the continents (Asia largest, Australia smallest) and oceans (Pacific largest and deepest, Arctic smallest), notes that the oceans are all connected, and explains that most of the world's land lies in the Northern Hemisphere while the Southern Hemisphere is mostly ocean. It may locate Liberia (Africa, Atlantic coast). Award marks for correct continents/oceans with relative sizes and the north/south land–water distribution.",
          marks: 5,
        },
      ],
    },
    {
      // source: Geosciences LibreTexts — Physical Geography and Natural Disasters (Dastrup), 6.1 Distribution of Earth's Water (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/Physical_Geography_and_Natural_Disasters_(Dastrup)/06:_Fluvial_Processes_and_Systems/6.01:_Distribution_of_Earth's_Water)
      slug: "distribution-of-land-and-water",
      title: "The Distribution and Importance of Land and Water",
      objective:
        "By the end of the topic, learners should be able to describe the proportion of the Earth covered by land and water, explain how it is unevenly distributed, and state the importance of the seas and oceans.",
      estimatedMinutes: 150,
      notes: `## Introduction

- Land and water are shared out **unevenly** — far more water than land, and the land bunched into one half of the globe.
- This split shapes climate, farming, fishing and trade (including Liberia's Atlantic coast).
- **This topic:** the **proportion** of land to water; their uneven **distribution** between the hemispheres; why the **seas and oceans** matter.

## How much land and how much water?

The Earth is often called the **"blue planet"** because most of its surface is water. Of the Earth's total surface:

- about **71% (roughly seven-tenths) is water**, and
- only about **29% (roughly three-tenths) is land**.

So water covers **far more** of the Earth than land does — nearly three times as much.

\`\`\`svg Land and water proportions of the Earth's surface
<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle showing about 71 percent water and 29 percent land">
  <circle cx="70" cy="65" r="55" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
  <path d="M70,65 L70,10 A55,55 0 0,1 118,88 Z" fill="#86efac" stroke="#065f46"/>
  <text x="150" y="45" font-size="10" fill="#0369a1">Water ≈ 71%</text>
  <text x="150" y="90" font-size="10" fill="#065f46">Land ≈ 29%</text>
</svg>
\`\`\`

## Uneven distribution

Land and water are **not spread evenly**:

- **More land** lies in the **Northern Hemisphere**; the **Southern Hemisphere** is mostly ocean.
- The land is gathered into a few large continents, with vast oceans between them.

## Bodies of water

Besides the great oceans, water is found in smaller bodies:

- **Sea** — a smaller part of an ocean, often partly enclosed by land (e.g. the Mediterranean Sea).
- **Gulf/Bay** — a part of the sea partly surrounded by land.
- **Lake** — a body of water surrounded by land (often fresh water).
- **River** — flowing fresh water on the land.

## Why the seas and oceans are important

The oceans and seas are vital to life and human activity:

- **Water cycle and climate:** the oceans supply most of the water vapour that forms clouds and rain, and they help to **regulate the Earth's temperature**.
- **Food:** the seas provide **fish** and other seafood.
- **Transport and trade:** ships carry goods across the oceans — the cheapest way to move heavy goods worldwide.
- **Resources:** oceans provide **salt**, oil and gas (from the seabed), and increasingly energy.
- **Home to life:** the seas contain a huge variety of living things.

## Land and the environment

The land, though smaller in area, is where people **live, farm and build**. Understanding the balance and importance of land and water is part of caring for the environment — the theme of this unit.

## Common errors and misconceptions

- **Thinking land and water are roughly equal** — water covers about **71%** and land only about **29%**; there is more than twice as much water.
- **Believing the hemispheres are balanced** — most of the world's **land** is in the **Northern Hemisphere**, while the **Southern Hemisphere** is mostly ocean.
- **Underrating the ocean** — the seas provide food, water (through the water cycle), transport routes, and regulate climate; they are not just empty space.
- **Confusing a sea with an ocean** — an **ocean** is one of the great water bodies; a **sea** is a smaller part of an ocean, often partly enclosed by land.`,
      workedExample: `**Task.** (a) State the approximate percentages of the Earth's surface covered by water and by land. (b) Why is the Earth called the "blue planet"? (c) Give three reasons the oceans are important to people.

**Part (a) — the proportions**
About **71%** (roughly seven-tenths) of the Earth's surface is **water**, and about **29%** (roughly three-tenths) is **land**. Water therefore covers nearly **three times** as much of the Earth as land.

**Part (b) — why the "blue planet"**
Because **most of the Earth's surface (about 71%) is water**, which appears blue from space, the Earth looks mainly blue and is nicknamed the **"blue planet."**

**Part (c) — three reasons the oceans are important**
Any three, for example:
1. **Climate and the water cycle** — the oceans supply the water vapour for clouds and rain and help regulate the Earth's temperature.
2. **Food** — the seas provide fish and other seafood.
3. **Transport and trade** — ships carry goods across the oceans cheaply.
   *(Also acceptable: they provide salt, oil and gas, and are home to a great variety of life.)*

**Conclusion:** water covers about 71% of the Earth and land about 29% — hence the "blue planet" — and the oceans are essential for climate, food, transport, resources and life.`,
      quiz: [
        {
          prompt: "About what fraction of the Earth's surface is covered by water?",
          options: ["about 71% (roughly three-quarters)", "about 29%", "about 50%", "about 10%"],
          correctIndex: 0,
          explanation: "Water covers roughly 71%.",
        },
        {
          prompt: "About what fraction of the Earth's surface is land?",
          options: ["about 29% (roughly one-quarter)", "about 71%", "about 50%", "about 90%"],
          correctIndex: 0,
          explanation: "Land is about 29%.",
        },
        {
          prompt: "The Earth is nicknamed the 'blue planet' because…",
          options: ["most of its surface is water", "the sky is blue", "it is cold", "it has no land"],
          correctIndex: 0,
          explanation: "Water dominates the surface and looks blue from space.",
        },
        {
          prompt: "Compared with land, water covers…",
          options: ["far more of the Earth", "far less", "exactly the same", "none"],
          correctIndex: 0,
          explanation: "Water covers nearly three times as much as land.",
        },
        {
          prompt: "Land and water are distributed…",
          options: ["unevenly over the Earth", "perfectly evenly", "only at the poles", "only at the equator"],
          correctIndex: 0,
          explanation: "The spread is uneven.",
        },
        {
          prompt: "More land is found in the … Hemisphere.",
          options: ["Northern", "Southern", "Eastern only", "Western only"],
          correctIndex: 0,
          explanation: "Most land is in the north.",
        },
        {
          prompt: "A smaller part of an ocean, often partly enclosed by land, is a…",
          options: ["sea", "continent", "river", "lake"],
          correctIndex: 0,
          explanation: "A sea is a smaller, often partly enclosed water body.",
        },
        {
          prompt: "A body of water surrounded by land, often fresh water, is a…",
          options: ["lake", "sea", "gulf", "ocean"],
          correctIndex: 0,
          explanation: "A lake is enclosed by land.",
        },
        {
          prompt: "Flowing fresh water on the land is a…",
          options: ["river", "sea", "ocean", "gulf"],
          correctIndex: 0,
          explanation: "Rivers are flowing fresh water.",
        },
        {
          prompt: "The oceans supply most of the water vapour that forms…",
          options: ["clouds and rain", "rocks", "deserts", "mountains"],
          correctIndex: 0,
          explanation: "Ocean evaporation drives the water cycle.",
        },
        {
          prompt: "The oceans help to … the Earth's temperature.",
          options: ["regulate", "ignore", "double", "remove"],
          correctIndex: 0,
          explanation: "Oceans moderate the climate.",
        },
        {
          prompt: "Which is a food resource from the sea?",
          options: ["fish", "coal", "granite", "timber"],
          correctIndex: 0,
          explanation: "The sea provides fish and seafood.",
        },
        {
          prompt: "The cheapest way to move heavy goods around the world is by…",
          options: ["ships across the oceans", "aeroplane", "bicycle", "on foot"],
          correctIndex: 0,
          explanation: "Ocean transport is cheapest for heavy goods.",
        },
        {
          prompt: "Which resource is obtained from sea water?",
          options: ["salt", "gold nuggets", "diamonds", "iron ore"],
          correctIndex: 0,
          explanation: "Salt is extracted from sea water.",
        },
        {
          prompt: "The Southern Hemisphere is mostly…",
          options: ["ocean", "land", "ice", "forest"],
          correctIndex: 0,
          explanation: "It is largely covered by ocean.",
        },
        {
          prompt: "A part of the sea partly surrounded by land is a…",
          options: ["gulf or bay", "continent", "river", "lake"],
          correctIndex: 0,
          explanation: "Gulfs and bays are partly enclosed by land.",
        },
        {
          prompt: "The oceans are important homes to…",
          options: ["a huge variety of living things", "no life at all", "only fish farms", "deserts"],
          correctIndex: 0,
          explanation: "The seas hold great biodiversity.",
        },
        {
          prompt: "Understanding land and water distribution is part of caring for the…",
          options: ["environment", "economy only", "army", "language"],
          correctIndex: 0,
          explanation: "It supports environmental awareness.",
        },
        {
          prompt: "Roughly, the land-to-water ratio of the Earth's surface is about…",
          options: ["1 part land to 3 parts water", "3 parts land to 1 part water", "equal", "all land"],
          correctIndex: 0,
          explanation: "About 29% land to 71% water ≈ 1:3.",
        },
        {
          prompt: "Oil and gas can be obtained from…",
          options: ["the seabed", "clouds", "the atmosphere", "rivers only"],
          correctIndex: 0,
          explanation: "Oil and gas are extracted from beneath the sea.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "State the approximate percentage of the Earth's surface covered by water and by land.",
          answerKey:
            "Water: about 71% (roughly three-quarters); land: about 29% (roughly one-quarter). Award a mark for each correct figure.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which body of water is surrounded by land and usually contains fresh water?",
          options: ["a lake", "an ocean", "a sea", "a gulf"],
          correctIndex: 0,
          answerKey: "A lake is enclosed by land and often fresh water.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give three reasons why the oceans and seas are important to people.",
          answerKey:
            "Any three: they drive the water cycle/climate (supply water vapour for rain, regulate temperature); provide food (fish/seafood); enable transport and trade (ships); provide resources (salt, oil, gas, energy); are home to many living things. Award a mark per valid reason.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain why the Earth is called the 'blue planet' and discuss the importance of its oceans to human life.",
          answerKey:
            "A strong answer explains that about 71% of the Earth's surface is water, which appears blue from space, so the Earth is called the 'blue planet'. It then discusses the importance of the oceans: they drive the water cycle and help regulate climate (supplying water vapour for rain and moderating temperature); provide food such as fish; enable cheap transport and world trade by ship; supply resources (salt, oil and gas, energy); and are home to a huge variety of life. Award marks for the correct explanation of the nickname and at least three well-explained reasons for the oceans' importance.",
          marks: 5,
        },
      ],
    },
    {
      // source: Biology LibreTexts — Environmental Science (Ha and Schleiger), 6.2.1.1 Water Pollutants and Their Sources; 5.5 Nitrogen Cycle (https://bio.libretexts.org/Bookshelves/Ecology/Environmental_Science_(Ha_and_Schleiger)/06:_Environmental_Impacts/6.02:_Pollution/6.2.01:_Water_Pollution/6.2.1.01:_Water_Pollutants_and_Their_Sources)
      slug: "pollution-of-land-and-water",
      title: "Pollution of Land and Water",
      objective:
        "By the end of the topic, learners should be able to identify the sources and effects of land and water pollution, explain how pollutants move through a food chain, and suggest ways to prevent and control pollution.",
      estimatedMinutes: 150,
      notes: `## Introduction

- **Pollution** — the release of harmful substances (**pollutants**) into the land, water or air, damaging the environment and living things.
- Land and water pollution threaten soil, crops, drinking water, fish and human health.
- **This topic:** the sources, effects and control of **land** and **water** pollution, and the **land ecosystem** they harm.

## Land pollution

**Land pollution** is the damage to the land surface by solid and liquid wastes and by harmful chemicals.

**Sources:**
- Household and market **refuse** (rubbish) dumped on open ground.
- **Industrial waste** and mining spoil.
- **Agricultural chemicals** — pesticides and fertilizers.
- **Bush burning** and careless waste disposal.

**Effects:**
- Loss of soil fertility and destruction of crops.
- Spread of disease from rotting refuse and breeding of pests.
- Ugly surroundings and contaminated groundwater.

**Prevention and control:**
- Proper **waste collection and disposal** in landfills.
- **Recycling** and reuse of materials.
- Careful, limited use of agricultural chemicals.
- Public education and enforcement of anti-dumping laws.

## Water pollution

**Water pollution** is the contamination of rivers, lakes, groundwater and the sea by harmful substances.

**Sources:**
- **Sewage** and human waste.
- **Industrial waste** discharged into rivers.
- **Agricultural run-off** — fertilizers and pesticides washed off the land.
- **Oil spills** and chemicals such as **DDT**.

**Point vs non-point sources:**
- **Point source** — pollution from a single, identifiable outlet (e.g. a factory pipe).
- **Non-point (diffuse) source** — pollution from many spread-out sources (e.g. run-off from farmland and streets).

**Effects:**
- Kills fish and other water life; unsafe drinking water; spread of water-borne disease.
- **Eutrophication** — fertilizer run-off causes algae to overgrow, using up oxygen so aquatic animals die.
- Toxic substances **bioaccumulate** and **biomagnify** — they build up and become more concentrated as they pass up the food chain.

## Pollutants in the food chain

A **food chain** shows how energy passes from plants to animals as one is eaten by the next. Persistent poisons such as DDT and heavy metals (mercury, lead) do not break down; they are stored in living tissue and become **more concentrated at each higher level** of the chain, so top predators (and people) receive the largest, most harmful doses.

## The land ecosystem and the nitrogen cycle

- An **ecosystem** is a community of living things together with their non-living environment, all interacting.
- Nutrients cycle through it. In the **nitrogen cycle**, nitrogen passes from the air into the soil (fixation), into plants and animals, and back to the air (through decay and denitrification).
- Too much nitrogen from fertilizers **disrupts** the cycle — causing eutrophication of water, acid soils and polluted drinking water.
- **Land reclamation** restores damaged or waste land (e.g. filling and replanting) so it can be used again.

## Common errors and misconceptions

- **Thinking pollution is only rubbish you can see** — many dangerous pollutants (dissolved chemicals, DDT, heavy metals) are **invisible** in water.
- **Believing dilution makes pollutants safe** — persistent poisons **biomagnify** up the food chain and become *more* concentrated, not less.
- **Confusing point and non-point sources** — a **point source** comes from one outlet; a **non-point source** is spread over a wide area (farm and street run-off).
- **Assuming fertilizer is always good** — excess fertilizer run-off causes **eutrophication**, killing fish by removing oxygen.`,
      workedExample: `**Task.** A river below a town has dead fish, a green scum of algae, and traces of DDT found in fish-eating birds. (a) Name three likely sources of this water pollution. (b) Explain how DDT comes to harm the birds even though only a little enters the river. (c) Suggest two ways to control the pollution.

**Part (a) — sources**
Any three: **sewage** from the town; **industrial waste** discharged into the river; **agricultural run-off** (fertilizers and pesticides) washed off nearby farms; **DDT** sprayed on crops entering the water.

**Part (b) — DDT and the food chain**
DDT is a **persistent** poison that does not break down. It enters tiny water plants and animals, which are eaten by fish, which are eaten by birds. At each step the poison is **stored and concentrated** in the body — this is **biomagnification** — so although the river holds only a trace, the fish-eating birds at the top of the food chain build up a large, harmful dose.

**Part (c) — control**
Any two: treat **sewage and industrial waste** before release; **reduce or ban** persistent pesticides like DDT; control **fertilizer use** to prevent run-off and eutrophication; educate the public and enforce anti-pollution laws.

**Conclusion:** the river is polluted by sewage, industry and farm chemicals; DDT harms top predators through biomagnification; and treating waste and controlling chemicals are the ways to protect the water.`,
      quiz: [
        { prompt: "A harmful substance released into the environment is a…", options: ["pollutant", "nutrient", "mineral", "fossil"], correctIndex: 0, explanation: "Pollutants are the harmful substances that cause pollution." },
        { prompt: "Dumping household refuse on open ground causes…", options: ["land pollution", "clean soil", "eutrophication", "a food chain"], correctIndex: 0, explanation: "Refuse on the land is a source of land pollution." },
        { prompt: "Which is a source of water pollution?", options: ["sewage and industrial waste", "sunlight", "wind", "rocks"], correctIndex: 0, explanation: "Sewage, industrial waste and run-off pollute water." },
        { prompt: "Pollution from a single identifiable outlet, such as a factory pipe, is a…", options: ["point source", "non-point source", "natural source", "food source"], correctIndex: 0, explanation: "A point source has one identifiable outlet." },
        { prompt: "Run-off from many farms and streets is a…", options: ["non-point (diffuse) source", "point source", "single pipe", "clean source"], correctIndex: 0, explanation: "Non-point pollution comes from many spread-out sources." },
        { prompt: "When fertilizer run-off makes algae overgrow and use up oxygen, this is…", options: ["eutrophication", "reclamation", "fixation", "condensation"], correctIndex: 0, explanation: "Eutrophication is nutrient enrichment that depletes oxygen." },
        { prompt: "The build-up of a poison to higher concentrations up a food chain is…", options: ["biomagnification", "evaporation", "erosion", "fixation"], correctIndex: 0, explanation: "Persistent poisons become more concentrated at each higher level." },
        { prompt: "DDT is an example of a…", options: ["persistent pesticide", "fertilizer that helps fish", "harmless dye", "type of soil"], correctIndex: 0, explanation: "DDT is a persistent pesticide that biomagnifies." },
        { prompt: "A community of living things with their non-living environment is an…", options: ["ecosystem", "atmosphere", "ocean", "eutrophic lake"], correctIndex: 0, explanation: "An ecosystem includes living and non-living parts interacting." },
        { prompt: "A food chain shows how … passes from one organism to the next.", options: ["energy (food)", "money", "water only", "air"], correctIndex: 0, explanation: "Food chains pass energy as one organism eats another." },
        { prompt: "Top predators receive the largest dose of persistent poisons because…", options: ["poisons concentrate up the chain", "they eat plants only", "they drink less", "poisons vanish"], correctIndex: 0, explanation: "Biomagnification concentrates poisons at higher trophic levels." },
        { prompt: "Which helps control land pollution?", options: ["proper waste collection and recycling", "open dumping", "more bush burning", "spraying more pesticide"], correctIndex: 0, explanation: "Waste management and recycling reduce land pollution." },
        { prompt: "Restoring damaged or waste land for use again is called…", options: ["land reclamation", "eutrophication", "pollution", "erosion"], correctIndex: 0, explanation: "Reclamation restores degraded land." },
        { prompt: "In the nitrogen cycle, nitrogen moves from the air into the soil by…", options: ["fixation", "evaporation", "melting", "combustion only"], correctIndex: 0, explanation: "Nitrogen fixation moves nitrogen from air to soil." },
        { prompt: "Excess nitrogen fertilizer in water mainly causes…", options: ["eutrophication", "cleaner water", "more oxygen", "less algae"], correctIndex: 0, explanation: "Excess nitrogen fuels algal overgrowth and oxygen loss." },
        { prompt: "An effect of water pollution on people is…", options: ["water-borne disease", "better health", "more fish", "cleaner rivers"], correctIndex: 0, explanation: "Polluted water spreads disease." },
        { prompt: "Which is a way to control water pollution?", options: ["treat waste before it is released", "dump sewage in rivers", "spray more DDT", "burn refuse near rivers"], correctIndex: 0, explanation: "Treating waste before discharge protects water." },
        { prompt: "Heavy metals such as mercury and lead are dangerous because they…", options: ["bioaccumulate in living tissue", "evaporate quickly", "turn into oxygen", "make water safe"], correctIndex: 0, explanation: "They accumulate in tissue and biomagnify." },
        { prompt: "Bush burning and careless dumping mainly damage the…", options: ["land", "ozone layer only", "moon", "magnetic field"], correctIndex: 0, explanation: "These are sources of land pollution." },
        { prompt: "Public education and anti-dumping laws help to…", options: ["reduce pollution", "increase pollution", "cause eutrophication", "kill fish"], correctIndex: 0, explanation: "Education and enforcement reduce pollution." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State three sources of land pollution and two ways it can be controlled.", answerKey: "Sources (any three): household/market refuse; industrial or mining waste; agricultural chemicals (pesticides/fertilizers); bush burning/careless disposal. Control (any two): proper waste collection and disposal in landfills; recycling and reuse; limited careful use of chemicals; education and enforcement of laws. Award 1 mark per source (max 3) and 1 per control (max 2).", marks: 5 },
        { type: "SHORT_ANSWER", prompt: "Explain what eutrophication is and how it kills aquatic animals.", answerKey: "Eutrophication is the enrichment of water by nutrients (especially nitrogen and phosphorus from fertilizer run-off). It causes algae to overgrow; when the algae die and decompose, bacteria use up the dissolved oxygen, so fish and other aquatic animals suffocate and die. Award up to 6 marks for defining eutrophication and explaining the oxygen-depletion mechanism.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Why does a trace of DDT in a river harm fish-eating birds?", options: ["it biomagnifies up the food chain", "it evaporates into the birds", "it makes water cleaner", "birds drink the whole river"], correctIndex: 0, answerKey: "DDT is persistent and becomes more concentrated at each higher level of the food chain (biomagnification), so top predators get the largest dose. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between a point source and a non-point source of water pollution, giving one example of each.", answerKey: "A point source comes from a single identifiable outlet (e.g. a factory discharge pipe or a sewage outfall). A non-point (diffuse) source comes from many spread-out places (e.g. run-off of fertilizer and pesticides from farmland, or run-off from streets). Award 3 marks per source correctly defined with an example.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss the sources, effects and control of water pollution, and explain how pollutants move through a food chain.", answerKey: "Award marks for: sources (sewage, industrial waste, agricultural run-off, oil spills, DDT), 6 marks; effects (death of aquatic life, unsafe drinking water, water-borne disease, eutrophication), 6 marks; movement through the food chain — persistent poisons stored and concentrated at each level so top predators receive the largest dose (bioaccumulation/biomagnification), 6 marks; control (treat sewage and industrial waste, control/ban persistent pesticides, manage fertilizer use, education and laws), 5 marks; organisation, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: Geosciences LibreTexts — The Physical Environment (Ritter), 11.5 Factors Affecting Soil Development; OpenStax Biology 2e, 31.2 The Soil (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/The_Physical_Environment_(Ritter)/11:_Soil_Systems/11.05:_Factors_Affecting_Soil_Development)
      slug: "environmental-balance-soils",
      title: "Environmental Balance: Soils",
      objective:
        "By the end of the topic, learners should be able to describe soil and its horizons, explain the factors and processes of soil formation, discuss soil fertility, and state the importance of soil.",
      estimatedMinutes: 150,
      notes: `## Introduction

- **Soil** — the thin layer of loose material on the land surface, made of weathered rock, water, air and decayed organic matter, in which plants grow.
- Soil keeps the environment in balance: it feeds plants, stores water, and is home to countless living things.
- **This topic:** what soil is made of; the **soil profile**; how soil **forms**; **fertility**; and the **importance** of soil.

## What soil is made of

Soil is a mixture of:
- **Mineral particles** — from weathered rock (sand, silt, clay).
- **Humus** — dark, decayed organic matter that enriches the soil.
- **Water** and dissolved nutrients.
- **Air** in the spaces between particles.
- **Living organisms** — worms, insects, bacteria and fungi.

**Soil texture** is set by the proportions of **sand, silt and clay**:
- **Sandy soil** — coarse, drains fast, low in nutrients.
- **Clay soil** — fine, holds water, can be poorly drained.
- **Loam** — a balanced mix of sand, silt and clay; the best for farming.

## The soil profile

A vertical cut through the soil shows layers called **horizons**:

| Horizon | Name | Description |
| --- | --- | --- |
| O | Organic layer | Fresh and decaying leaves and humus at the top |
| A | Topsoil | Dark, rich in humus; where most roots and life are |
| B | Subsoil | Lighter; minerals washed down from above collect here |
| C | Weathered rock | Broken parent rock, partly weathered |
| R | Bedrock | Solid unweathered parent rock beneath |

## Factors of soil formation

Five factors control how a soil develops:
1. **Parent material** — the rock the soil forms from.
2. **Climate** — temperature and rainfall drive weathering and decay.
3. **Living organisms** — plants, animals and microbes add humus and mix the soil.
4. **Relief (topography)** — slope affects drainage and erosion.
5. **Time** — soil takes a very long time to form.

## Processes of soil formation

- **Weathering** — the physical break-up and chemical rotting of rock into small particles.
- **Humification** — the decay of dead plants and animals into humus.
- **Mineralization** — the release of nutrients (minerals) from decaying matter into a form plants can use.
- **Leaching** — the washing of nutrients downward by water through the soil.

## Soil fertility

**Fertility** is the ability of a soil to supply the nutrients plants need.
- Improved by: humus, decomposed organic matter, and nutrient-rich parent material.
- Reduced by: leaching, erosion, overcropping and loss of humus.
- Fertility can be restored by adding manure or compost, resting the land (fallow), and rotating crops.

## Importance of soil

- **Plant life** — soil anchors plants and supplies water and nutrients; it is the basis of all agriculture.
- **Provision of minerals** and a **source of raw materials**.
- **Base for construction** — roads and buildings rest on it.
- **Habitat** for a great variety of fauna and flora.

## Common errors and misconceptions

- **Thinking soil is just dirt or crushed rock** — soil also contains **humus, water, air and living organisms**, not only mineral particles.
- **Believing soil forms quickly** — soil takes **hundreds to thousands of years** to develop; it is easily lost but slow to replace.
- **Confusing topsoil and subsoil** — the **A horizon (topsoil)** is dark and rich in humus; the **B horizon (subsoil)** is lighter and collects washed-down minerals.
- **Assuming all soils are equally fertile** — fertility depends on humus, parent material and management; leaching and erosion reduce it.`,
      workedExample: `**Task.** A farmer's field has thin, pale, sandy soil that grows poor crops. (a) Which soil horizon matters most for crops, and why? (b) Give two reasons the soil may have become infertile. (c) Suggest two ways to improve its fertility.

**Part (a) — the key horizon**
The **A horizon (topsoil)** matters most. It is the dark, upper layer rich in **humus**, where most plant roots grow and where nutrients, water and soil life are concentrated. Healthy topsoil is essential for good crops.

**Part (b) — reasons for infertility**
Any two: **leaching** has washed nutrients down out of reach; **erosion** has stripped the humus-rich topsoil; **overcropping** has used up the nutrients; loss of **humus** leaves the sandy soil unable to hold water or nutrients.

**Part (c) — improving fertility**
Any two: add **manure or compost** to restore humus and nutrients; **rest the land (fallow)** so it recovers; practise **crop rotation**; plant cover to reduce erosion and leaching.

**Conclusion:** the humus-rich topsoil (A horizon) drives crop growth; sandy soil loses fertility through leaching, erosion and overcropping; and adding organic matter, resting and rotating the land rebuild it.`,
      quiz: [
        { prompt: "Soil is best described as…", options: ["weathered rock mixed with humus, water, air and life", "solid unweathered rock", "pure sand only", "water with mud"], correctIndex: 0, explanation: "Soil is a mixture of mineral particles, humus, water, air and organisms." },
        { prompt: "Dark, decayed organic matter in soil is called…", options: ["humus", "clay", "gravel", "bedrock"], correctIndex: 0, explanation: "Humus is decomposed organic matter that enriches soil." },
        { prompt: "Soil texture is decided by the proportions of…", options: ["sand, silt and clay", "water and air", "humus and rock", "roots and worms"], correctIndex: 0, explanation: "Texture depends on sand, silt and clay content." },
        { prompt: "The best soil for farming, a balanced mixture, is…", options: ["loam", "pure sand", "pure clay", "gravel"], correctIndex: 0, explanation: "Loam balances sand, silt and clay." },
        { prompt: "The dark upper layer of soil rich in humus is the…", options: ["A horizon (topsoil)", "B horizon", "C horizon", "bedrock"], correctIndex: 0, explanation: "Topsoil (A horizon) holds humus and most roots." },
        { prompt: "Minerals washed down from above collect in the…", options: ["B horizon (subsoil)", "O horizon", "A horizon", "atmosphere"], correctIndex: 0, explanation: "The subsoil (B horizon) accumulates leached minerals." },
        { prompt: "The solid unweathered rock beneath the soil is the…", options: ["bedrock (parent rock)", "topsoil", "humus", "loam"], correctIndex: 0, explanation: "Bedrock is the parent rock at the base." },
        { prompt: "Which is a factor of soil formation?", options: ["parent material", "the ocean tide", "the moon's phase", "map scale"], correctIndex: 0, explanation: "Parent material, climate, organisms, relief and time form soil." },
        { prompt: "The break-up and chemical rotting of rock into particles is…", options: ["weathering", "condensation", "eutrophication", "mineralization only"], correctIndex: 0, explanation: "Weathering produces the mineral particles of soil." },
        { prompt: "The decay of dead plants and animals into humus is…", options: ["humification", "leaching", "erosion", "evaporation"], correctIndex: 0, explanation: "Humification forms humus from organic matter." },
        { prompt: "The washing of nutrients downward through the soil by water is…", options: ["leaching", "humification", "fixation", "weathering"], correctIndex: 0, explanation: "Leaching removes nutrients from the upper soil." },
        { prompt: "Soil fertility is the ability of soil to…", options: ["supply nutrients plants need", "hold air only", "resist erosion always", "stay dry"], correctIndex: 0, explanation: "Fertility is the supply of plant nutrients." },
        { prompt: "Which increases soil fertility?", options: ["adding humus or manure", "erosion", "overcropping", "leaching"], correctIndex: 0, explanation: "Organic matter restores nutrients." },
        { prompt: "Which reduces soil fertility?", options: ["erosion and overcropping", "adding compost", "resting the land", "crop rotation"], correctIndex: 0, explanation: "Erosion and overcropping strip nutrients." },
        { prompt: "Resting land so it recovers its fertility is called leaving it…", options: ["fallow", "eroded", "leached", "paved"], correctIndex: 0, explanation: "A fallow period lets soil recover." },
        { prompt: "Sandy soil tends to…", options: ["drain fast and hold few nutrients", "hold water and nutrients well", "be the most fertile", "be waterlogged"], correctIndex: 0, explanation: "Coarse sandy soil drains quickly and is low in nutrients." },
        { prompt: "Clay soil tends to…", options: ["hold water and drain poorly", "drain very fast", "contain no nutrients", "be pure humus"], correctIndex: 0, explanation: "Fine clay holds water and can be poorly drained." },
        { prompt: "Which is an importance of soil?", options: ["it supports plant life and farming", "it produces sunlight", "it creates tides", "it makes wind"], correctIndex: 0, explanation: "Soil anchors plants and supplies water and nutrients." },
        { prompt: "Soil forms over a period of…", options: ["hundreds to thousands of years", "a few days", "one season", "one hour"], correctIndex: 0, explanation: "Soil development is very slow." },
        { prompt: "Living organisms help soil by…", options: ["adding humus and mixing it", "removing all water", "turning it to rock", "stopping plant growth"], correctIndex: 0, explanation: "Worms, microbes and plants add humus and mix the soil." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the main components of soil.", answerKey: "Mineral particles (from weathered rock — sand, silt, clay); humus (decayed organic matter); water; air; living organisms. Award 1 mark per component (max 5).", marks: 5 },
        { type: "SHORT_ANSWER", prompt: "Describe the A, B and C horizons of a soil profile.", answerKey: "A horizon (topsoil) — dark, rich in humus, where most roots and soil life are. B horizon (subsoil) — lighter, collects minerals leached down from above. C horizon — partly weathered parent rock above the solid bedrock. Award 2 marks per horizon correctly described.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which process forms humus?", options: ["humification (decay of organic matter)", "leaching", "weathering of rock", "evaporation"], correctIndex: 0, answerKey: "Humification is the decay of dead plants and animals into humus. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give two factors of soil formation and explain how each affects the soil.", answerKey: "Any two of: parent material (determines mineral content and texture); climate (temperature and rainfall control the rate of weathering and decay); living organisms (add humus and mix the soil); relief/slope (affects drainage and erosion); time (soil deepens and develops over long periods). Award 3 marks per factor correctly explained.", marks: 6 },
        { type: "ESSAY", prompt: "Explain how soil is formed, what makes it fertile, and why soil is important. Suggest how declining fertility can be restored.", answerKey: "Award marks for: formation — weathering of parent rock into particles plus humification of organic matter, influenced by parent material, climate, organisms, relief and time, 7 marks; fertility — the ability to supply nutrients, raised by humus and rich parent material and lowered by leaching, erosion and overcropping, 6 marks; importance — plant life/agriculture, provision of minerals and raw materials, base for construction, habitat for fauna and flora, 6 marks; restoring fertility — manure/compost, fallow, crop rotation, erosion control, 4 marks; organisation, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: Geosciences LibreTexts — Physical Geography and Natural Disasters (Dastrup), 1.5 Understanding Natural Disasters; Earth Science (Lumen), 19.2 Desertification (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/Physical_Geography_and_Natural_Disasters_(Dastrup)/01:_Introduction_to_Geographic_Science/1.05:_Understanding_Natural_Disasters)
      slug: "environmental-hazards",
      title: "Environmental Hazards",
      objective:
        "By the end of the topic, learners should be able to define environmental hazards, describe soil erosion, drought, deforestation, desertification, global warming and flooding, and propose ways to prevent and manage them.",
      estimatedMinutes: 150,
      notes: `## Introduction

- An **environmental hazard** is an event or process that threatens the environment and human life — some **natural**, some caused by **human activity**.
- Hazards damage farmland, homes and lives; many can be reduced by careful management.
- **This topic:** soil erosion, drought, deforestation, desertification, global warming and flooding — their causes, effects and control.

## Environmental hazards

- **Natural hazards** — floods, droughts, storms, earthquakes, volcanic eruptions.
- **Human-induced hazards** — deforestation, pollution, soil erosion from bad farming, global warming.
- Human land-cover changes often **increase** the frequency and severity of hazards.

## Soil erosion and depletion

**Soil erosion** — the wearing away and removal of topsoil by **water and wind**.
- **Causes:** removal of plant cover (deforestation, overgrazing), farming on steep slopes, heavy rain.
- **Effects:** loss of fertile topsoil (depletion), lower crop yields, gullies, silting of rivers.
- **Control:** plant cover and trees, terracing and contour ploughing on slopes, controlled grazing, crop rotation.

## Drought

**Drought** — a long period of **below-normal rainfall** causing water shortage.
- **Causes:** failure of the rains, climate change, sometimes made worse by deforestation.
- **Effects:** crop failure, loss of livestock, famine, water shortage, movement of people.
- **Control:** water storage (dams, wells), irrigation, drought-resistant crops, tree planting.

## Deforestation

**Deforestation** — the large-scale **clearing of forests** for farmland, timber, fuel or building.
- **Effects:** soil erosion, loss of habitat and biodiversity, changed rainfall patterns, and more carbon dioxide in the air because fewer trees absorb it — adding to global warming.
- **Control:** replanting (afforestation), protected forests, controlled logging, using alternative fuels.

## Desertification

**Desertification** — the spread of **desert-like conditions** into once-productive land.
- **Causes:** drought, overgrazing, deforestation, and farming that exhausts the soil.
- **Effects:** loss of farmland, aridity, famine and migration.
- **Control:** tree planting (green belts), controlled grazing, soil and water conservation.

## Global warming

**Global warming** — the rise in the Earth's average temperature caused mainly by **greenhouse gases** (especially carbon dioxide) from burning fuels and deforestation.
- **Effects:** melting ice, rising sea level, more extreme droughts, storms and floods, shifting rainfall.
- **Control:** reduce burning of fossil fuels, plant trees, use clean energy.

## Flooding

**Flooding** — the covering of normally dry land with water.
- **Causes:** heavy or prolonged **precipitation (rain)**, melting of ice/snow, blocked drainage, deforestation and building on flood plains.
- **Effects:** displacement of people, loss of life and property, destruction of crops, spread of disease.
- **Control:** flood defences and drainage, afforestation of catchments, avoid building on flood plains, early-warning systems.

## Common errors and misconceptions

- **Thinking all hazards are purely natural** — many (deforestation, soil erosion, global warming) are **caused or worsened by people**.
- **Confusing drought and desertification** — **drought** is a temporary rainfall shortage; **desertification** is the more permanent spread of desert-like land.
- **Believing deforestation only removes trees** — it also causes **erosion, floods, lost habitat and more carbon dioxide** in the air.
- **Assuming hazards cannot be reduced** — most can be **managed** by planting cover, conserving soil and water, and planning where people build.`,
      workedExample: `**Task.** In a hilly farming area, trees have been cleared, the topsoil is washing away in gullies, and a nearby river now floods badly after heavy rain. (a) Name the hazard removing the topsoil and give two causes. (b) Explain how clearing the trees has increased the flooding. (c) Suggest two measures that would reduce both problems.

**Part (a) — the hazard**
The hazard is **soil erosion**. Causes (any two): removal of **plant/tree cover** that once protected the soil; **farming on steep slopes**; **heavy rain** washing loose soil into gullies; **overgrazing**.

**Part (b) — trees and flooding**
Trees and their roots normally **intercept rain and soak up water**, slowing run-off. Once the trees are cleared, rain runs quickly off the bare, eroded slopes straight into the river instead of soaking in. The river fills rapidly and **overflows**, so deforestation has made the flooding worse.

**Part (c) — measures**
Any two that tackle both erosion and flooding: **plant trees (afforestation)** on the slopes and catchment; build **terraces or plough along contours** to hold soil and slow water; maintain **plant cover** and controlled grazing; improve **drainage** and avoid building on the flood plain.

**Conclusion:** clearing the trees caused soil erosion and faster run-off that floods the river; replanting and conserving the soil and water would reduce both hazards together.`,
      quiz: [
        { prompt: "An event or process that threatens the environment and human life is an…", options: ["environmental hazard", "ecosystem", "eutrophication", "horizon"], correctIndex: 0, explanation: "Environmental hazards threaten people and the environment." },
        { prompt: "Which is a natural hazard?", options: ["a flood", "deforestation", "pollution", "overgrazing"], correctIndex: 0, explanation: "Floods, droughts and storms are natural hazards." },
        { prompt: "The wearing away and removal of topsoil by water and wind is…", options: ["soil erosion", "eutrophication", "condensation", "reclamation"], correctIndex: 0, explanation: "Soil erosion removes the fertile topsoil." },
        { prompt: "Which helps control soil erosion on slopes?", options: ["terracing and contour ploughing", "clearing all trees", "overgrazing", "burning cover"], correctIndex: 0, explanation: "Terracing and contour ploughing hold soil on slopes." },
        { prompt: "A long period of below-normal rainfall is a…", options: ["drought", "flood", "storm", "tide"], correctIndex: 0, explanation: "Drought is a prolonged rainfall shortage." },
        { prompt: "An effect of drought is…", options: ["crop failure and famine", "flooding of towns", "richer soil", "more rain"], correctIndex: 0, explanation: "Drought causes water shortage, crop failure and famine." },
        { prompt: "The large-scale clearing of forests is…", options: ["deforestation", "afforestation", "reclamation", "irrigation"], correctIndex: 0, explanation: "Deforestation removes forests." },
        { prompt: "Deforestation adds to global warming because fewer trees…", options: ["absorb carbon dioxide", "produce rain", "block the sun", "hold soil"], correctIndex: 0, explanation: "Trees absorb CO2; removing them leaves more in the air." },
        { prompt: "The spread of desert-like conditions into productive land is…", options: ["desertification", "eutrophication", "condensation", "leaching"], correctIndex: 0, explanation: "Desertification is the spread of desert conditions." },
        { prompt: "Which causes desertification?", options: ["overgrazing and deforestation", "planting trees", "controlled grazing", "heavy irrigation always"], correctIndex: 0, explanation: "Overgrazing, deforestation and drought drive desertification." },
        { prompt: "Global warming is caused mainly by…", options: ["greenhouse gases like carbon dioxide", "the ozone layer", "ocean tides", "the moon"], correctIndex: 0, explanation: "Greenhouse gases from burning fuels warm the Earth." },
        { prompt: "An effect of global warming is…", options: ["rising sea level and more extreme weather", "colder oceans everywhere", "no change in climate", "more ice at the poles"], correctIndex: 0, explanation: "Warming melts ice, raises seas and worsens extremes." },
        { prompt: "The covering of normally dry land with water is…", options: ["flooding", "drought", "erosion", "desertification"], correctIndex: 0, explanation: "Flooding covers dry land with water." },
        { prompt: "Which is a cause of flooding?", options: ["heavy prolonged rainfall", "long drought", "planting trees", "low tide"], correctIndex: 0, explanation: "Heavy rain, melting ice and poor drainage cause floods." },
        { prompt: "An effect of flooding is…", options: ["displacement of people and loss of property", "richer topsoil only", "less disease", "more farmland created safely"], correctIndex: 0, explanation: "Floods displace people and destroy homes and crops." },
        { prompt: "Which controls flooding?", options: ["flood defences and afforestation of catchments", "removing all drainage", "building on flood plains", "clearing forests"], correctIndex: 0, explanation: "Defences, drainage and tree cover reduce flooding." },
        { prompt: "Planting trees to replace cleared forest is…", options: ["afforestation", "deforestation", "erosion", "leaching"], correctIndex: 0, explanation: "Afforestation restores forest cover." },
        { prompt: "Many environmental hazards are made worse by…", options: ["human activity", "planting cover", "conserving soil", "reducing pollution"], correctIndex: 0, explanation: "Human land-cover change increases hazard severity." },
        { prompt: "Drought differs from desertification in that drought is…", options: ["temporary; desertification is more permanent", "permanent; desertification is temporary", "the same thing", "always caused by floods"], correctIndex: 0, explanation: "Drought is a temporary rainfall shortage; desertification is longer-lasting land degradation." },
        { prompt: "Drought-resistant crops and water storage help to manage…", options: ["drought", "flooding", "global warming only", "earthquakes"], correctIndex: 0, explanation: "These measures reduce the impact of drought." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define an environmental hazard and give one example of a natural hazard and one human-induced hazard.", answerKey: "An environmental hazard is an event or process that threatens the environment and human life. Natural example: flood, drought, storm, earthquake or volcanic eruption. Human-induced example: deforestation, pollution, soil erosion from poor farming, or global warming. Award 2 marks for the definition and 2 for one valid example of each type.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "State the causes, effects and control of soil erosion.", answerKey: "Causes: removal of plant/tree cover (deforestation, overgrazing), farming on steep slopes, heavy rain and wind. Effects: loss of fertile topsoil, lower yields, gullies, silting of rivers. Control: maintain plant cover and trees, terracing/contour ploughing, controlled grazing, crop rotation. Award 2 marks each for causes, effects and control.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which best explains how deforestation increases flooding?", options: ["without trees, rain runs off quickly instead of soaking in", "trees make it rain harder", "trees block rivers", "forests store flood water forever"], correctIndex: 0, answerKey: "Trees intercept rain and their roots absorb water; clearing them speeds run-off into rivers, causing floods. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between drought and desertification.", answerKey: "Drought is a temporary period of below-normal rainfall causing water shortage, from which land can recover when the rains return. Desertification is the longer-lasting spread of desert-like, degraded conditions into once-productive land, caused by drought together with overgrazing, deforestation and poor farming. Award 3 marks per term correctly distinguished.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss deforestation and desertification as environmental hazards — their causes, effects and control — and explain how they are linked to global warming.", answerKey: "Award marks for: deforestation — causes (clearing for farmland, timber, fuel, building) and effects (soil erosion, lost habitat, changed rainfall, more CO2), 6 marks; desertification — causes (drought, overgrazing, deforestation, soil exhaustion) and effects (loss of farmland, aridity, famine, migration), 6 marks; control of both (afforestation, protected forests, controlled grazing, soil and water conservation, green belts), 5 marks; link to global warming — fewer trees absorb less CO2 so more greenhouse gas remains, warming the climate and worsening drought which drives further desertification, 6 marks; organisation, 2 marks.", marks: 25 },
      ],
    },
  ],
};
