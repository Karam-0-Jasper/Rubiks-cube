import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Geography, Grade 10,
// Semester Two, Period VI, Unit 1 Physical Geography — Major Land Forms:
// Introduction to Land Forms.
export const geographyG10P6: PeriodContent = {
  grade: 10,
  number: 6,
  title: "Introduction to Land Forms",
  summary:
    "Period VI of the MoE Grade 10 Geography syllabus. Learners study the major land forms of the Earth's surface — mountains, plateaus, plains and valleys — and the internal and external forces that build them up and wear them down.",
  topics: [
    {
      slug: "major-land-forms",
      title: "The Major Land Forms",
      objective:
        "By the end of the topic, learners should be able to define a land form and describe the main types — mountains, plateaus, plains and valleys — with their characteristics and importance.",
      estimatedMinutes: 150,
      notes: `## What is a land form?

A **land form** is a **natural feature of the Earth's surface** — a shape of the land such as a mountain, a plain or a valley. The study of land forms is part of **physical geography**. Land forms differ in their **height, shape and slope**.

## The major land forms

\`\`\`svg A landscape showing mountains, plateau, plain and valley
<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section landscape with mountains, a plateau, a plain and a valley">
  <rect x="0" y="0" width="300" height="130" fill="#e0f2fe"/>
  <polygon points="10,110 45,40 80,110" fill="#a3a3a3" stroke="#525252"/>
  <polygon points="60,110 95,55 130,110" fill="#a3a3a3" stroke="#525252"/>
  <rect x="150" y="60" width="70" height="50" fill="#86efac" stroke="#166534"/>
  <path d="M220,110 L245,90 L270,110 Z" fill="#65a30d"/>
  <rect x="230" y="105" width="60" height="20" fill="#4ade80"/>
  <text x="45" y="35" font-size="8" text-anchor="middle" fill="#525252">mountains</text>
  <text x="185" y="55" font-size="8" text-anchor="middle" fill="#166534">plateau</text>
  <text x="248" y="98" font-size="7" fill="#166534">valley</text>
  <text x="260" y="123" font-size="8" text-anchor="middle" fill="#166534">plain</text>
</svg>
\`\`\`

### Mountains
A **mountain** is a large land form that rises **high above** the surrounding land, usually with steep slopes and a peak. Mountains are the highest land forms.

- They are often found in **ranges** (lines of mountains).
- Importance: sources of **rivers**, minerals, and rainfall (they force air to rise and cool); barriers to movement; tourism.

### Plateaus
A **plateau** (or tableland) is a large area of **high, fairly flat land** with steep sides — like a raised table.

- Importance: often rich in **minerals**; good for grazing; some are farmed.

### Plains
A **plain** is a large area of **low, flat or gently rolling land**.

- Importance: usually **fertile** and easy to farm, build on and travel across, so plains are often **densely settled** (linking to the population geography of Period III).

### Valleys
A **valley** is a **low area of land between hills or mountains**, often with a **river** flowing through it.

- **V-shaped valleys** are carved by rivers in their upper course.
- Importance: valleys have fertile soil (deposited by rivers) and water, so they attract settlement and farming.

## Other land forms

There are many more land forms — **hills** (smaller than mountains), **basins**, **escarpments** and **coastal features** such as **cliffs, beaches** and **deltas**. Together the land forms make up the **relief** (the shape and height of the land) shown by contour lines on a map (Period IV).

## Why land forms matter

Land forms influence where people live and how they earn a living: plains and valleys favour farming and settlement, mountains and plateaus provide minerals and rivers, and relief affects transport, climate and rainfall.`,
      workedExample: `**Task.** (a) Define a land form. (b) Describe a mountain, a plateau, a plain and a valley. (c) Explain why plains are usually more densely populated than mountains.

**Part (a) — definition**
A **land form** is a **natural feature of the Earth's surface** — a shape of the land such as a mountain, plateau, plain or valley — differing in height, shape and slope.

**Part (b) — the four major land forms**
- **Mountain:** a large land form rising **high above** the surrounding land, with steep slopes and a peak; the highest land form, often found in ranges.
- **Plateau:** a large area of **high, fairly flat land** with steep sides (a "tableland").
- **Plain:** a large area of **low, flat or gently rolling land**.
- **Valley:** a **low area between hills or mountains**, often with a river flowing through it.

**Part (c) — why plains are more densely populated than mountains**
Plains are **low and flat with fertile soil**, so they are **easy to farm, build on and travel across**, which attracts many people to settle there. Mountains, by contrast, are **high and steep with thin, poor soil** and a harsher climate, making farming, building and transport difficult — so few people live there. This is why plains are generally **densely populated** and mountains **sparsely populated** (linking to the physical factors of population distribution).

**Conclusion:** land forms are the natural shapes of the land (mountains, plateaus, plains, valleys), and because plains offer flat, fertile, accessible land while mountains are steep and harsh, plains attract dense settlement and mountains do not.`,
      teachingTip:
        "Anchor each land form to one feature: mountain = high and steep, plateau = high and flat, plain = low and flat, valley = low between hills (often a river). A simple labelled cross-section drawn on the board makes the differences obvious. Connect land forms back to Period III (population) and Period IV (relief/contours) so learners see geography as a joined-up subject — plains attract people, mountains repel them, exactly as the distribution factors predicted.",
      quiz: [
        {
          prompt: "A land form is a … feature of the Earth's surface.",
          options: ["natural", "man-made", "temporary", "imaginary"],
          correctIndex: 0,
          explanation: "Land forms are natural features of the land.",
        },
        {
          prompt: "The study of land forms is part of…",
          options: ["physical geography", "economics", "chemistry", "history"],
          correctIndex: 0,
          explanation: "Land forms belong to physical geography.",
        },
        {
          prompt: "A mountain is a land form that rises…",
          options: ["high above the surrounding land", "below sea level", "flat and low", "underground"],
          correctIndex: 0,
          explanation: "Mountains rise high with steep slopes.",
        },
        {
          prompt: "Mountains are the … land forms.",
          options: ["highest", "lowest", "flattest", "smallest"],
          correctIndex: 0,
          explanation: "Mountains are the highest land forms.",
        },
        {
          prompt: "A line of mountains is called a…",
          options: ["range", "plain", "valley", "delta"],
          correctIndex: 0,
          explanation: "Mountains often occur in ranges.",
        },
        {
          prompt: "A plateau is an area of…",
          options: ["high, fairly flat land with steep sides", "low, flat land", "deep valleys", "coastal sand"],
          correctIndex: 0,
          explanation: "A plateau is a raised tableland.",
        },
        {
          prompt: "A plain is a large area of…",
          options: ["low, flat or gently rolling land", "high, steep land", "underwater rock", "ice only"],
          correctIndex: 0,
          explanation: "Plains are low and flat.",
        },
        {
          prompt: "A valley is a low area of land between…",
          options: ["hills or mountains", "two oceans", "two plateaus only", "clouds"],
          correctIndex: 0,
          explanation: "Valleys lie between higher land.",
        },
        {
          prompt: "A valley often has a … flowing through it.",
          options: ["river", "road", "railway", "wind"],
          correctIndex: 0,
          explanation: "Rivers commonly flow through valleys.",
        },
        {
          prompt: "V-shaped valleys are carved by…",
          options: ["rivers", "wind only", "the sea only", "glaciers only"],
          correctIndex: 0,
          explanation: "Rivers cut V-shaped valleys in their upper course.",
        },
        {
          prompt: "Plains are usually … and easy to farm.",
          options: ["fertile", "barren", "frozen", "very steep"],
          correctIndex: 0,
          explanation: "Plains often have fertile soil.",
        },
        {
          prompt: "Because they are flat and fertile, plains are often…",
          options: ["densely settled", "empty", "underwater", "avoided by farmers"],
          correctIndex: 0,
          explanation: "Plains attract dense settlement.",
        },
        {
          prompt: "Which land form is often rich in minerals and good for grazing?",
          options: ["a plateau", "a beach", "a delta", "a swamp"],
          correctIndex: 0,
          explanation: "Plateaus are often mineral-rich grazing land.",
        },
        {
          prompt: "Mountains are important as sources of…",
          options: ["rivers and minerals", "sea salt only", "oil only", "nothing useful"],
          correctIndex: 0,
          explanation: "Rivers, minerals and rainfall come from mountains.",
        },
        {
          prompt: "The overall shape and height of the land is called the…",
          options: ["relief", "climate", "population", "scale"],
          correctIndex: 0,
          explanation: "Relief is the shape and height of the land.",
        },
        {
          prompt: "Relief is shown on a map by…",
          options: ["contour lines", "blue shading only", "the title", "the key alone"],
          correctIndex: 0,
          explanation: "Contour lines show height and relief.",
        },
        {
          prompt: "A land form smaller than a mountain is a…",
          options: ["hill", "plateau", "plain", "delta"],
          correctIndex: 0,
          explanation: "Hills are smaller than mountains.",
        },
        {
          prompt: "Which is a coastal land form?",
          options: ["a cliff or beach", "a plateau", "a mountain range", "a basin"],
          correctIndex: 0,
          explanation: "Cliffs and beaches are coastal features.",
        },
        {
          prompt: "Land forms influence where people…",
          options: ["live and how they earn a living", "were born only", "go to school only", "read books"],
          correctIndex: 0,
          explanation: "Relief affects settlement and livelihoods.",
        },
        {
          prompt: "Which land form is high AND flat?",
          options: ["a plateau", "a plain", "a valley", "a mountain peak"],
          correctIndex: 0,
          explanation: "A plateau is high and fairly flat.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define a land form and name four major types.",
          answerKey:
            "A land form is a natural feature/shape of the Earth's surface. Four types: mountain, plateau, plain, valley (hills also acceptable). Award a mark for the definition and marks for the correct types (up to 3).",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which land form is described as high, fairly flat land with steep sides?",
          options: ["a plateau", "a plain", "a valley", "a mountain"],
          correctIndex: 0,
          answerKey: "A plateau is high and flat with steep sides.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State two ways in which mountains are important.",
          answerKey:
            "Any two: sources of rivers; sources of minerals; cause rainfall (force air to rise and cool); barriers to movement; tourism. Award a mark for each valid point.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain why plains and valleys tend to be more densely settled than mountains and steep land.",
          answerKey:
            "A strong answer explains that plains and valleys are low and flat with fertile soil (often deposited by rivers) and water, making them easy to farm, build on and travel across, which attracts dense settlement; mountains and steep land have thin, poor soil, steep slopes, harsher climates and are hard to farm, build on or cross, so few people live there. It may link this to the physical factors of population distribution studied earlier. Award marks for the favourable features of plains/valleys and the unfavourable features of mountains, linked to settlement.",
          marks: 5,
        },
      ],
    },
    {
      slug: "forces-that-shape-landforms",
      title: "Forces That Shape Land Forms",
      objective:
        "By the end of the topic, learners should be able to distinguish the internal and external forces that shape land forms, and explain weathering, erosion and deposition.",
      estimatedMinutes: 150,
      notes: `## How land forms are made and changed

Land forms are shaped by two groups of forces working over long periods of time: **internal forces** (which build the land up from inside the Earth) and **external forces** (which wear the land down at the surface).

## Internal forces (building up)

**Internal (or endogenic) forces** come from **inside the Earth** — from the heat and movement in the mantle (Period II). They **raise, fold and crack** the crust, forming mountains and other features.

- **Earth movements / plate movement:** the slow movement of the crust can **fold** rock layers into **fold mountains**, or crack them along **faults**.
- **Volcanic activity:** molten rock (magma) rises and erupts as a **volcano**, building volcanic mountains; lava cools to form new land.
- **Earthquakes:** sudden movements along faults that can raise or lower the land.

These forces generally **build up** and **create** relief.

## External forces (wearing down)

**External (or exogenic) forces** act at the Earth's **surface** and **wear the land down**, using agents such as **water, wind, ice and temperature change**. There are three linked processes:

### 1. Weathering
**Weathering** is the **breaking down of rocks where they are**, without being carried away. It can be:
- **Physical (mechanical):** rock is broken by temperature changes (heating and cooling), or by water freezing in cracks.
- **Chemical:** rock is broken down by chemical reactions (e.g. rainwater reacting with rock).

### 2. Erosion
**Erosion** is the **wearing away and carrying away** of broken rock and soil by moving **water (rivers, sea), wind or ice**. Erosion shapes valleys, cliffs and many other features.

### 3. Deposition
**Deposition** is the **dropping (laying down)** of the eroded material somewhere new — when the water or wind slows down. Deposition builds new land forms such as **deltas, beaches** and flat, fertile **plains**.

\`\`\`svg Internal forces build up; external forces wear down
<svg viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Arrows showing internal forces pushing up and external forces wearing down a mountain">
  <polygon points="120,90 160,25 200,90" fill="#a3a3a3" stroke="#525252"/>
  <line x1="160" y1="105" x2="160" y2="70" stroke="#dc2626" stroke-width="2" marker-end="url(#up)"/>
  <text x="160" y="103" font-size="8" text-anchor="middle" fill="#dc2626">internal (build up)</text>
  <line x1="145" y1="45" x2="120" y2="55" stroke="#2563eb" stroke-width="2" marker-end="url(#dn)"/>
  <line x1="175" y1="45" x2="200" y2="55" stroke="#2563eb" stroke-width="2" marker-end="url(#dn)"/>
  <text x="245" y="45" font-size="8" fill="#2563eb">external</text>
  <text x="245" y="56" font-size="8" fill="#2563eb">(wear down)</text>
  <defs>
    <marker id="up" markerWidth="8" markerHeight="8" refX="4" refY="1" orient="auto"><path d="M0,6 L4,0 L8,6 Z" fill="#dc2626"/></marker>
    <marker id="dn" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto"><path d="M0,0 L4,6 L8,0 Z" fill="#2563eb"/></marker>
  </defs>
</svg>
\`\`\`

## The balance

Land forms are the result of a long **struggle** between the internal forces building the land up and the external forces wearing it down. A young mountain is high and jagged; over millions of years, weathering and erosion wear it down to lower, rounder hills. Understanding these forces explains how the Earth's landscape came to look as it does.`,
      workedExample: `**Task.** (a) Distinguish between internal and external forces that shape land forms. (b) Explain the difference between weathering and erosion. (c) How is a fertile plain built by external forces?

**Part (a) — internal vs external forces**
- **Internal (endogenic) forces** come from **inside the Earth** (heat and movement in the mantle) and **build the land up** — folding rock into fold mountains, and forming volcanoes and faults through volcanic activity and earthquakes.
- **External (exogenic) forces** act at the **surface** and **wear the land down**, using agents such as water, wind, ice and temperature change (through weathering, erosion and deposition).
In short: internal forces build up; external forces wear down.

**Part (b) — weathering vs erosion**
- **Weathering** is the **breaking down of rock where it is**, without being carried away (by temperature change, freezing water, or chemical reactions).
- **Erosion** is the **wearing away AND carrying away** of the broken rock and soil by moving water, wind or ice.
The key difference: weathering breaks rock **in place**; erosion **removes and transports** it.

**Part (c) — how a fertile plain is built**
A fertile plain is built by **deposition**. Rivers **erode** rock and soil upstream, carry the material along, and when the river slows down (for example on flat land) it **deposits** the fine, fertile sediment. Over long periods this laid-down material builds a flat, fertile **plain** — which is why river plains are good for farming.

**Conclusion:** internal forces build the land up and external forces wear it down; weathering breaks rock in place while erosion carries it away; and deposition of eroded material builds new, fertile plains.`,
      teachingTip:
        "The cleanest framing is 'internal = build up, external = wear down', so learners never mix them. Within external forces, the sequence weathering → erosion → deposition is a favourite exam chain — drill the distinction that weathering breaks rock IN PLACE while erosion CARRIES IT AWAY. End with the 'struggle' idea (young jagged mountains worn to rounded hills over time), which ties the two force groups together and connects to the rock cycle from Period II.",
      quiz: [
        {
          prompt: "The two groups of forces that shape land forms are internal and…",
          options: ["external", "chemical only", "human", "magnetic"],
          correctIndex: 0,
          explanation: "Internal and external forces shape the land.",
        },
        {
          prompt: "Internal forces come from…",
          options: ["inside the Earth", "the atmosphere", "the ocean surface", "outer space"],
          correctIndex: 0,
          explanation: "Internal forces come from within the Earth.",
        },
        {
          prompt: "Internal forces generally…",
          options: ["build the land up", "wear the land down", "have no effect", "remove all rock"],
          correctIndex: 0,
          explanation: "They raise and build relief.",
        },
        {
          prompt: "Mountains formed by the folding of rock layers are called…",
          options: ["fold mountains", "plateaus", "plains", "deltas"],
          correctIndex: 0,
          explanation: "Folding of the crust makes fold mountains.",
        },
        {
          prompt: "Molten rock erupting to build a mountain is…",
          options: ["volcanic activity", "erosion", "weathering", "deposition"],
          correctIndex: 0,
          explanation: "Volcanoes build volcanic mountains.",
        },
        {
          prompt: "External forces act at the Earth's…",
          options: ["surface", "core", "mantle only", "centre"],
          correctIndex: 0,
          explanation: "External forces work at the surface.",
        },
        {
          prompt: "External forces generally…",
          options: ["wear the land down", "build the land up", "heat the core", "create magma"],
          correctIndex: 0,
          explanation: "They wear down the land.",
        },
        {
          prompt: "Agents of external forces include water, wind, ice and…",
          options: ["temperature change", "magma", "the core", "earthquakes"],
          correctIndex: 0,
          explanation: "These surface agents wear the land down.",
        },
        {
          prompt: "Weathering is the breaking down of rock…",
          options: ["where it is (in place)", "by carrying it far away", "inside a volcano", "in the ocean only"],
          correctIndex: 0,
          explanation: "Weathering breaks rock in place.",
        },
        {
          prompt: "Rock broken by heating and cooling is an example of … weathering.",
          options: ["physical (mechanical)", "chemical", "biological only", "internal"],
          correctIndex: 0,
          explanation: "Temperature change causes physical weathering.",
        },
        {
          prompt: "Rock broken down by chemical reactions is … weathering.",
          options: ["chemical", "physical", "erosion", "deposition"],
          correctIndex: 0,
          explanation: "Chemical reactions cause chemical weathering.",
        },
        {
          prompt: "Erosion is the wearing away AND … of rock and soil.",
          options: ["carrying away", "building up", "melting", "freezing in place"],
          correctIndex: 0,
          explanation: "Erosion removes and transports material.",
        },
        {
          prompt: "The key difference: weathering breaks rock in place, while erosion…",
          options: ["carries it away", "leaves it where it is", "builds mountains", "creates magma"],
          correctIndex: 0,
          explanation: "Erosion transports the broken material.",
        },
        {
          prompt: "Deposition is the … of eroded material somewhere new.",
          options: ["dropping/laying down", "breaking", "melting", "heating"],
          correctIndex: 0,
          explanation: "Deposition lays down transported material.",
        },
        {
          prompt: "Which land form is built by deposition?",
          options: ["a delta or fertile plain", "a fold mountain", "a volcano", "a fault"],
          correctIndex: 0,
          explanation: "Deposited sediment builds deltas and plains.",
        },
        {
          prompt: "A river builds a fertile plain by depositing material when it…",
          options: ["slows down", "speeds up", "freezes", "evaporates"],
          correctIndex: 0,
          explanation: "Slowing water drops its sediment.",
        },
        {
          prompt: "Earthquakes and volcanic activity are examples of … forces.",
          options: ["internal", "external", "human", "chemical only"],
          correctIndex: 0,
          explanation: "They come from inside the Earth.",
        },
        {
          prompt: "Over millions of years, a young jagged mountain is worn down into…",
          options: ["lower, rounder hills", "a taller peak", "an ocean", "a volcano"],
          correctIndex: 0,
          explanation: "Weathering and erosion round mountains down.",
        },
        {
          prompt: "Land forms result from a struggle between forces that … the land.",
          options: ["build up and wear down", "only build up", "only wear down", "never change"],
          correctIndex: 0,
          explanation: "Internal build up; external wear down.",
        },
        {
          prompt: "The correct order of the three external processes is…",
          options: ["weathering, erosion, deposition", "deposition, erosion, weathering", "erosion, weathering, deposition", "deposition, weathering, erosion"],
          correctIndex: 0,
          explanation: "Rock is weathered, then eroded (carried), then deposited.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Distinguish between the internal and external forces that shape land forms.",
          answerKey:
            "Internal (endogenic) forces come from inside the Earth (heat/movement in the mantle) and build the land up — folding, volcanic activity, earthquakes forming mountains and faults. External (exogenic) forces act at the surface using water, wind, ice and temperature change, and wear the land down through weathering, erosion and deposition. Award marks for the source and effect of each group.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which process CARRIES broken rock and soil away?",
          options: ["erosion", "weathering", "folding", "volcanic activity"],
          correctIndex: 0,
          answerKey: "Erosion wears away and transports material; weathering breaks it in place.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between weathering and erosion.",
          answerKey:
            "Weathering is the breaking down of rock where it is (in place), without being carried away (by temperature change, freezing, or chemical reactions); erosion is the wearing away AND carrying away of the broken rock and soil by water, wind or ice. Award marks for weathering being in place and erosion involving transport.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how internal and external forces together shape the Earth's land forms, referring to weathering, erosion and deposition.",
          answerKey:
            "A strong answer explains that internal forces build the land up — earth/plate movements fold rock into mountains, and volcanic activity and earthquakes raise and shape the crust. External forces then wear the land down: weathering breaks rock in place (physically or chemically); erosion wears away and carries the broken material by water, wind or ice; and deposition lays that material down elsewhere to build new land forms such as deltas and fertile plains. It concludes that land forms result from the long struggle between these building-up and wearing-down forces (e.g. young jagged mountains worn to rounded hills). Award marks for both force groups and the weathering–erosion–deposition sequence with their roles.",
          marks: 6,
        },
      ],
    },
  ],
};
