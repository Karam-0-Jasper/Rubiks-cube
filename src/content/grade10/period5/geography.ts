import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Geography, Grade 10,
// Semester Two, Period V, Unit 1 Physical Geography — Environmental Science:
// Land and Water Distribution.
export const geographyG10P5: PeriodContent = {
  grade: 10,
  number: 5,
  title: "Land and Water Distribution",
  summary:
    "Period V of the MoE Grade 10 Geography syllabus. Learners study the distribution of land and water on the Earth's surface — the continents and oceans, the balance of land to water and its uneven spread between the hemispheres, and why the seas and oceans matter.",
  topics: [
    {
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
      teachingTip:
        "Use a globe or wall map every lesson so learners physically locate each continent and ocean — geography is spatial and cannot be learned from lists alone. Anchor it locally: Liberia in Africa, on the Atlantic. Two guaranteed exam facts are Asia as the largest continent and the Pacific as the largest ocean; drill the 'seven continents, and the named oceans' as a set, and the north/south land-water imbalance.",
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
      teachingTip:
        "Fix the 71%/29% split (roughly ¾ water, ¼ land) as a headline fact and reinforce it with the 'blue planet' image. For the importance of oceans, group the reasons under clear headings (climate, food, transport, resources, life) so learners give a structured answer rather than a vague list. Tie it to Liberia — the Atlantic provides fish, a port for trade, and shapes the coastal climate — so the global facts feel local.",
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
  ],
};
