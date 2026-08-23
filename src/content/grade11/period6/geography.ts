import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Geography, Grade 11,
// Semester Two, Period VI, Unit 2 Practical Geography — Map Reading:
// Principles of Geographic Investigation (maps and scales); and Statistical
// Maps and Diagrams.
export const geographyG11P6: PeriodContent = {
  grade: 11,
  number: 6,
  title: "Practical Geography: Maps and Statistical Diagrams",
  summary:
    "Period VI of the MoE Grade 11 Geography syllabus. Learners study the principles of map reading — what a map is, its characteristics, types, uses and limitations, and map scale and its conversion — and then how to present statistical data as tables, line graphs, bar graphs and pie charts.",
  topics: [
    {
      // source: Geosciences LibreTexts — The Physical Environment (Ritter), 1.3.01 Maps; and Essentials of GIS (Campbell and Shin), 2.02 Map Scale, Coordinate Systems, and Map Projections (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/Essentials_of_Geographic_Information_Systems_(Campbell_and_Shin)/02:_Map_Anatomy/2.02:_Map_Scale_Coordinate_Systems_and_Map_Projections)
      slug: "principles-of-geographic-investigation",
      title: "Principles of Geographic Investigation (Map Reading)",
      objective:
        "By the end of the topic, learners should be able to define a map and its characteristics, distinguish types of maps and their uses and limitations, and define, classify and convert map scales.",
      estimatedMinutes: 155,
      notes: `## Introduction

- **Map reading** is a core skill of geographic investigation: getting information about places from maps and measuring distances, areas and directions on them.

## Map — definition

- **Map** — a reduced, flat (two-dimensional) drawing of the whole Earth or part of it, drawn to **scale** and seen from above (a bird's-eye view).

## Characteristics of a map

A good map has:

- **A title** — says what the map shows.
- **A scale** — the ratio of map distance to ground distance.
- **A key (legend)** — explains the symbols used.
- **Direction (an arrow/compass)** — usually with north at the top.
- **A grid** — lines (or latitude and longitude) for locating places.
- **Symbols and colours** — to represent features clearly.

## Types of maps

| Type | Shows |
|---|---|
| Topographic map | relief, drainage, settlement and land use of an area |
| Political map | countries, states, boundaries and towns |
| Physical (relief) map | landforms — mountains, plains, rivers |
| Thematic (distribution) map | one theme, e.g. rainfall, population, vegetation |
| Atlas / small-scale map | large areas (a country, continent, world) |

## Importance / uses of maps

- Show the **location** and **distance** between places.
- Show **direction** and help with **navigation**.
- Show the **distribution** of features (rainfall, population, crops).
- Aid **planning** — roads, towns, farms, services.
- Store geographic information compactly for study.

## Limitations of maps

- A flat map cannot show the round Earth without some **distortion** of shape, area, distance or direction.
- A map is **selective** — it cannot show everything; small features are left out.
- Maps **age** — features change, so maps become out of date.
- Reading them needs skill in scale, symbols and direction.

## Map scale — definition

- **Scale** — the ratio of a distance on the map to the matching distance on the ground. It tells how much the ground has been reduced to fit the map.
- **Large-scale** maps show a **small area in much detail** (e.g. 1:10,000); **small-scale** maps show a **large area in little detail** (e.g. 1:1,000,000).

## Types of map scales

- **Statement (verbal) scale** — words, e.g. "1 cm represents 1 km." Easy to read but tied to its units.
- **Representative fraction (RF)** — a ratio with 1 on top, e.g. **1:50,000** (1 unit on the map = 50,000 of the same units on the ground). It is **unit-neutral** (works for any unit).
- **Linear (graphic/bar) scale** — a marked ruler drawn on the map. It stays correct even when the map is enlarged or reduced.

\`\`\`svg A linear (bar) scale
<svg viewBox="0 0 260 60" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A linear bar scale divided into kilometres">
  <rect x="20" y="25" width="50" height="12" fill="#111827"/>
  <rect x="70" y="25" width="50" height="12" fill="#f9fafb" stroke="#111827"/>
  <rect x="120" y="25" width="50" height="12" fill="#111827"/>
  <rect x="170" y="25" width="50" height="12" fill="#f9fafb" stroke="#111827"/>
  <text x="20" y="20" font-size="9" text-anchor="middle" fill="#111827">0</text>
  <text x="70" y="20" font-size="9" text-anchor="middle" fill="#111827">1</text>
  <text x="120" y="20" font-size="9" text-anchor="middle" fill="#111827">2</text>
  <text x="170" y="20" font-size="9" text-anchor="middle" fill="#111827">3</text>
  <text x="220" y="20" font-size="9" text-anchor="middle" fill="#111827">4 km</text>
</svg>
\`\`\`

## Conversion of map scales

- **Statement → RF:** put both distances in the **same unit**, then write as 1 : n.
- Example: "1 cm to 1 km" → 1 km = 100,000 cm → **RF = 1:100,000**.
- **RF → statement:** 1:50,000 with cm means 1 cm represents 50,000 cm = 500 m = **0.5 km**.
- **Finding ground distance:** ground distance = map distance × the scale denominator.

## Common errors and misconceptions

- **Confusing large- and small-scale** — a **large-scale** map (1:10,000) shows a **small** area in **great** detail; a **small-scale** map (1:1,000,000) shows a **large** area in **little** detail.
- **Forgetting to match units** when converting a statement scale to an RF — put both distances in the **same unit** first.
- **Thinking a flat map is perfect** — every flat map has some **distortion** because the Earth is curved.
- **Confusing the RF and the linear scale** — the **RF** is a ratio (1:50,000); the **linear scale** is a drawn ruler that stays true if the map is resized.`,
      workedExample: `**Task.** A map has the statement scale "1 cm represents 2 km." (a) Convert this to a representative fraction (RF). (b) Two towns are 6 cm apart on the map. Find the real ground distance in kilometres. (c) State whether this is a large- or small-scale map compared with 1:10,000.

**Part (a) — convert to RF**
- Put both sides in the **same unit** (centimetres): 2 km = 2 × 100,000 cm = **200,000 cm**.
- So 1 cm represents 200,000 cm → **RF = 1:200,000**.

**Part (b) — ground distance**
- Ground distance = map distance × scale (in the map's units): each 1 cm = 2 km, so 6 cm = 6 × 2 = **12 km**.

**Part (c) — large or small scale**
- 1:200,000 has a **larger denominator** than 1:10,000, so it shows a **larger area in less detail** — it is a **smaller-scale** map than 1:10,000.

**Conclusion:** matching units gives RF = 1:200,000; the towns are 12 km apart on the ground; and the larger the denominator, the smaller the scale.`,
      quiz: [
        {
          prompt: "A map is a reduced, flat drawing of the Earth seen…",
          options: ["from above, drawn to scale", "from the side", "in three dimensions only", "without any scale"],
          correctIndex: 0,
          explanation: "A map is a scaled bird's-eye (overhead) view.",
        },
        {
          prompt: "Which explains the symbols used on a map?",
          options: ["the key (legend)", "the title", "the scale", "the grid"],
          correctIndex: 0,
          explanation: "The key/legend explains the map's symbols.",
        },
        {
          prompt: "The part of a map that says what it shows is the…",
          options: ["title", "scale", "key", "grid"],
          correctIndex: 0,
          explanation: "The title states the map's subject.",
        },
        {
          prompt: "On most maps, north is placed at the…",
          options: ["top", "bottom", "left", "right"],
          correctIndex: 0,
          explanation: "By convention north is at the top.",
        },
        {
          prompt: "A map showing relief, drainage, settlement and land use is a…",
          options: ["topographic map", "political map", "pie chart", "weather map only"],
          correctIndex: 0,
          explanation: "Topographic maps show the detailed physical and human features.",
        },
        {
          prompt: "A map showing countries and boundaries is a…",
          options: ["political map", "physical map", "thematic map", "relief map"],
          correctIndex: 0,
          explanation: "Political maps show countries and boundaries.",
        },
        {
          prompt: "A map showing just one theme, like rainfall, is a…",
          options: ["thematic (distribution) map", "political map", "relief map", "grid map"],
          correctIndex: 0,
          explanation: "Thematic maps show a single distribution or theme.",
        },
        {
          prompt: "Which is a use of maps?",
          options: ["showing location, distance and direction", "growing crops", "mining ore", "generating power"],
          correctIndex: 0,
          explanation: "Maps show location, distance, direction and distributions.",
        },
        {
          prompt: "A limitation of maps is that a flat map…",
          options: ["distorts the round Earth", "shows everything perfectly", "never ages", "needs no skill"],
          correctIndex: 0,
          explanation: "Flattening a curved Earth causes distortion.",
        },
        {
          prompt: "Maps become out of date because…",
          options: ["features on the ground change", "paper is cheap", "they have a key", "they use symbols"],
          correctIndex: 0,
          explanation: "As places change, maps age.",
        },
        {
          prompt: "Map scale is the ratio of…",
          options: ["map distance to ground distance", "map area to map area", "north to south", "colour to symbol"],
          correctIndex: 0,
          explanation: "Scale relates distance on the map to distance on the ground.",
        },
        {
          prompt: "A large-scale map shows…",
          options: ["a small area in much detail", "a large area in little detail", "the whole world", "no detail"],
          correctIndex: 0,
          explanation: "Large-scale = small area, great detail (e.g. 1:10,000).",
        },
        {
          prompt: "A small-scale map shows…",
          options: ["a large area in little detail", "a small area in much detail", "one street only", "no area"],
          correctIndex: 0,
          explanation: "Small-scale = large area, little detail (e.g. 1:1,000,000).",
        },
        {
          prompt: "A scale written as \"1 cm represents 1 km\" is a…",
          options: ["statement (verbal) scale", "representative fraction", "linear scale", "grid reference"],
          correctIndex: 0,
          explanation: "A statement scale expresses the ratio in words.",
        },
        {
          prompt: "A scale written as 1:50,000 is a…",
          options: ["representative fraction (RF)", "statement scale", "linear scale", "key"],
          correctIndex: 0,
          explanation: "An RF is a ratio with 1 as the numerator.",
        },
        {
          prompt: "An advantage of the representative fraction is that it is…",
          options: ["unit-neutral (works for any unit)", "tied to inches only", "always in kilometres", "never accurate"],
          correctIndex: 0,
          explanation: "The RF works with any unit of measurement.",
        },
        {
          prompt: "A scale that stays correct even when the map is enlarged or reduced is the…",
          options: ["linear (bar) scale", "statement scale", "representative fraction", "title"],
          correctIndex: 0,
          explanation: "A drawn bar scale resizes with the map.",
        },
        {
          prompt: "To convert \"1 cm to 1 km\" into an RF, first…",
          options: ["put both distances in the same unit", "double the map", "ignore the units", "add the numbers"],
          correctIndex: 0,
          explanation: "Convert to the same unit: 1 km = 100,000 cm → 1:100,000.",
        },
        {
          prompt: "On a 1:100,000 map, 1 cm represents…",
          options: ["1 km", "100 km", "10 km", "100 m"],
          correctIndex: 0,
          explanation: "1 cm = 100,000 cm = 1,000 m = 1 km.",
        },
        {
          prompt: "To find real ground distance you…",
          options: ["multiply map distance by the scale denominator", "divide by the title", "add the key", "subtract the grid"],
          correctIndex: 0,
          explanation: "Ground distance = map distance × scale denominator.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define a map and state three characteristics every good map should have.",
          answerKey:
            "A map is a reduced, flat drawing of the Earth (or part of it) drawn to scale and seen from above. Three characteristics (any three): title, scale, key/legend, direction/north arrow, grid, symbols/colours. Award marks for the definition and three characteristics.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the three types of map scale.",
          answerKey:
            "Statement (verbal) scale, representative fraction (RF), and linear (graphic/bar) scale. One mark each.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Convert the statement scale \"1 cm represents 5 km\" to a representative fraction.",
          options: ["1:500,000", "1:5,000", "1:50,000", "1:5,000,000"],
          correctIndex: 0,
          answerKey: "5 km = 500,000 cm, so the RF is 1:500,000.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State two limitations of maps.",
          answerKey:
            "Any two of: a flat map distorts the round Earth; a map is selective and cannot show everything; maps become out of date as features change; reading them needs skill. One mark each.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the difference between large-scale and small-scale maps, and describe the three types of scale and how to convert between a statement scale and a representative fraction.",
          answerKey:
            "A strong answer explains that a large-scale map (e.g. 1:10,000) shows a small area in great detail while a small-scale map (e.g. 1:1,000,000) shows a large area in little detail (larger denominator = smaller scale). It describes the three scale types — statement/verbal (in words), representative fraction (a unit-neutral ratio 1:n), linear/bar (a drawn ruler that resizes with the map) — and shows conversion: put both distances in the same unit, so '1 cm to 1 km' becomes 1:100,000. Award marks for the large/small-scale distinction, the three scale types, and a correct conversion.",
          marks: 5,
        },
      ],
    },
    {
      // source: CK-12 — Graphical Representation of Data and Bar Graphs; OpenStax — Introductory Statistics 2e, Chapter 2 (displaying data: bar graphs, line graphs, pie charts) (https://openstax.org/books/introductory-statistics-2e/pages/2-chapter-review)
      slug: "statistical-maps-and-diagrams",
      title: "Statistical Maps and Diagrams",
      objective:
        "By the end of the topic, learners should be able to identify sources of statistical data, tabulate data, and design and evaluate line graphs, bar graphs and circle (pie) graphs.",
      estimatedMinutes: 140,
      notes: `## Introduction

- **Statistics** are numerical facts (e.g. rainfall, population, production). Geographers turn them into **tables, graphs and diagrams** so they can be seen and compared at a glance.

## Sources of statistical data

- **Primary sources** — data you collect yourself: surveys, field measurements, counts, questionnaires.
- **Secondary sources** — data already collected by others: government census reports, weather records, FAO and other agency statistics, textbooks and the internet.

## The use of statistics and diagrams

- Make large amounts of data **easy to read** and remember.
- Allow quick **comparison** between places or times.
- Reveal **trends** and patterns and help **forecasting**.
- Present information in an **attractive, convincing** way.

## Limitations of statistics

- Data can be **incomplete, out of date or inaccurate**.
- Figures can be **misused** or drawn to mislead (e.g. broken axes).
- Averages can **hide** extremes and variations.

## Tabulation of statistics

- **Tabulation** means arranging data in **rows and columns** (a table) with clear headings and units, so it can be read and used to draw graphs.

| Month | Rainfall (mm) |
|---|---|
| January | 20 |
| February | 40 |
| March | 90 |

## Graphical representation of statistics

**Line graph**

- Points plotted and joined by a line; shows how a quantity **changes over time** (e.g. temperature or sales through the year).
- *Advantages:* clearly shows trends and change over time; good for continuous data.
- *Disadvantages:* can look cluttered with many lines; not suited to separate categories.

**Bar graph**

- **Bars** of equal width whose **height** shows the value; used to **compare separate categories** (e.g. production of different crops).
- Kinds: **simple bar graph**, **divergent bar graph** (values above and below a line), **percentage (compound) bar graph** (a bar split into parts), and the **histogram** (bars for continuous grouped data).
- *Advantages:* easy to read and compare categories.
- *Disadvantages:* only good for a limited number of categories; does not show continuous change well.

**Circle graph (pie chart)**

- A circle divided into **slices (sectors)**; each slice is proportional to its share of the total (the whole circle = 100% = 360°).
- **Proportional circles** use circles of different sizes to compare totals between places.
- *Advantages:* clearly shows each part as a share of the whole.
- *Disadvantages:* hard to read exact values; poor when there are many small slices.

\`\`\`svg A pie chart divided into sectors
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle graph split into three proportional sectors">
  <circle cx="60" cy="60" r="50" fill="#e5e7eb" stroke="#374151"/>
  <path d="M60,60 L60,10 A50,50 0 0,1 110,60 Z" fill="#60a5fa"/>
  <path d="M60,60 L110,60 A50,50 0 0,1 60,110 Z" fill="#34d399"/>
  <path d="M60,60 L60,110 A50,50 0 0,1 10,60 Z" fill="#fbbf24"/>
  <text x="88" y="45" font-size="8" fill="#1e3a8a">25%</text>
  <text x="82" y="82" font-size="8" fill="#065f46">25%</text>
  <text x="30" y="82" font-size="8" fill="#78350f">50%</text>
</svg>
\`\`\`

## Calculating a pie chart

- Each slice's angle = (that category ÷ the total) × 360°.

## Common errors and misconceptions

- **Confusing primary and secondary sources** — **primary** data you collect yourself; **secondary** data was collected by someone else.
- **Choosing the wrong graph** — use a **line graph** for change over time, a **bar graph** to compare separate categories, and a **pie chart** to show parts of a whole.
- **Forgetting the total for a pie chart** — each slice's angle is its share of the **total × 360°**; the slices must add to 360°.
- **Trusting statistics blindly** — data can be incomplete, out of date or drawn to mislead.`,
      workedExample: `**Task.** A farm's land use is: food crops 180 ha, cash crops 90 ha, forest 90 ha (total 360 ha). (a) Which diagram best shows these as parts of the whole, and why? (b) Calculate the pie-chart angle for each land use. (c) Name a better diagram if instead you wanted to compare this farm's total area with three other farms.

**Part (a) — the best diagram**
- A **circle graph (pie chart)** is best, because it shows each land use as a **share of the whole** farm.

**Part (b) — the pie-chart angles**
- Angle = (category ÷ total) × 360°.
- Food crops: (180 ÷ 360) × 360° = **180°**.
- Cash crops: (90 ÷ 360) × 360° = **90°**.
- Forest: (90 ÷ 360) × 360° = **90°**.
- Check: 180° + 90° + 90° = **360°** (a full circle).

**Part (c) — comparing totals of several farms**
- To compare the **total areas** of several farms, a **bar graph** (or **proportional circles**) is better, because bars of different heights compare separate totals clearly.

**Conclusion:** a pie chart shows parts of one whole (angles summing to 360°), while a bar graph compares totals across several places.`,
      quiz: [
        {
          prompt: "Statistics are…",
          options: ["numerical facts such as rainfall or population", "coloured symbols", "map keys", "compass directions"],
          correctIndex: 0,
          explanation: "Statistics are numerical data.",
        },
        {
          prompt: "Data you collect yourself by survey or measurement is a… source.",
          options: ["primary", "secondary", "tertiary", "graphical"],
          correctIndex: 0,
          explanation: "Primary data is collected first-hand.",
        },
        {
          prompt: "Data already collected by others (e.g. census reports) is a… source.",
          options: ["secondary", "primary", "field", "personal"],
          correctIndex: 0,
          explanation: "Secondary data comes from existing records.",
        },
        {
          prompt: "Arranging data in rows and columns is called…",
          options: ["tabulation", "narration", "projection", "orientation"],
          correctIndex: 0,
          explanation: "Tabulation arranges data in a table.",
        },
        {
          prompt: "Which diagram best shows how temperature changes through the year?",
          options: ["line graph", "pie chart", "map key", "flow chart"],
          correctIndex: 0,
          explanation: "Line graphs show change over time.",
        },
        {
          prompt: "Which diagram is best for comparing the production of different crops?",
          options: ["bar graph", "line graph", "pie chart", "compass"],
          correctIndex: 0,
          explanation: "Bar graphs compare separate categories.",
        },
        {
          prompt: "Which diagram best shows the parts of a whole?",
          options: ["circle (pie) chart", "line graph", "topographic map", "bar of soap"],
          correctIndex: 0,
          explanation: "Pie charts show each part as a share of the total.",
        },
        {
          prompt: "In a bar graph, the value of each category is shown by the bar's…",
          options: ["height", "colour only", "width only", "title"],
          correctIndex: 0,
          explanation: "Bar height represents the value.",
        },
        {
          prompt: "A whole pie chart represents…",
          options: ["100% (360°)", "50%", "180°", "one category only"],
          correctIndex: 0,
          explanation: "The full circle is 100% or 360°.",
        },
        {
          prompt: "The angle of a pie slice is found by…",
          options: ["(category ÷ total) × 360°", "category × 100", "total ÷ 360", "category + total"],
          correctIndex: 0,
          explanation: "Each slice is its share of the total times 360°.",
        },
        {
          prompt: "A bar split into parts to show percentages is a…",
          options: ["percentage (compound) bar graph", "simple bar graph", "line graph", "pie chart"],
          correctIndex: 0,
          explanation: "A percentage/compound bar shows parts within one bar.",
        },
        {
          prompt: "Bars for continuous grouped data (like class intervals) form a…",
          options: ["histogram", "pie chart", "line graph", "flow line"],
          correctIndex: 0,
          explanation: "A histogram shows continuous grouped data as bars.",
        },
        {
          prompt: "An advantage of graphs is that they…",
          options: ["make data easy to read and compare", "hide all the data", "remove the need for numbers", "always mislead"],
          correctIndex: 0,
          explanation: "Graphs make data clear and comparable.",
        },
        {
          prompt: "A limitation of statistics is that data can be…",
          options: ["incomplete or out of date", "always perfect", "impossible to draw", "never wrong"],
          correctIndex: 0,
          explanation: "Data may be incomplete, old or inaccurate.",
        },
        {
          prompt: "Circles of different sizes used to compare totals between places are…",
          options: ["proportional circles", "histograms", "line graphs", "grids"],
          correctIndex: 0,
          explanation: "Proportional circles compare totals by area/size.",
        },
        {
          prompt: "A disadvantage of pie charts is that they…",
          options: ["make exact values hard to read", "cannot show parts of a whole", "only show time trends", "need no total"],
          correctIndex: 0,
          explanation: "Pie charts show shares but not exact values easily.",
        },
        {
          prompt: "Which is a primary source of data?",
          options: ["a survey you carry out", "a published census", "a textbook table", "an FAO report"],
          correctIndex: 0,
          explanation: "A survey you conduct yourself is primary data.",
        },
        {
          prompt: "A line graph is best suited to…",
          options: ["continuous data changing over time", "separate unrelated categories", "parts of a whole", "map symbols"],
          correctIndex: 0,
          explanation: "Line graphs suit continuous change over time.",
        },
        {
          prompt: "If food crops take 180° of a pie chart, they are… of the total.",
          options: ["half (50%)", "a quarter", "all", "one tenth"],
          correctIndex: 0,
          explanation: "180° out of 360° is one half (50%).",
        },
        {
          prompt: "Statistics can mislead when a graph is drawn with…",
          options: ["a broken or misleading axis", "a clear key", "correct units", "honest scaling"],
          correctIndex: 0,
          explanation: "Broken axes and tricks can distort the message.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Distinguish between primary and secondary sources of statistical data, giving an example of each.",
          answerKey:
            "Primary sources are data you collect yourself (e.g. a survey, field measurement, count); secondary sources are data collected by others (e.g. census reports, weather records, FAO statistics). Award marks for both definitions and valid examples.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name three kinds of statistical diagram and state what each is best used for.",
          answerKey:
            "Line graph – change over time/continuous data; bar graph – comparing separate categories; circle (pie) chart – showing parts of a whole. (Histogram, proportional circles also acceptable.) One mark each.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A category is 90 out of a total of 360. What is its pie-chart angle?",
          options: ["90°", "45°", "180°", "360°"],
          correctIndex: 0,
          answerKey: "(90 ÷ 360) × 360° = 90°.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State two limitations of statistics.",
          answerKey:
            "Any two of: data can be incomplete, out of date or inaccurate; figures can be misused or drawn to mislead; averages can hide extremes/variations. One mark each.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how a geographer decides whether to present data as a line graph, a bar graph or a pie chart, and give the advantages and disadvantages of each.",
          answerKey:
            "A strong answer explains that the choice depends on the data: a line graph shows continuous change over time (advantage: shows trends; disadvantage: cluttered with many lines, poor for separate categories); a bar graph compares separate categories (advantage: easy to compare; disadvantage: limited categories, not continuous change); a pie chart shows parts of a whole with slices summing to 360° (advantage: shows shares of the total; disadvantage: exact values hard to read, poor with many slices). Award marks for the correct matching of graph to data and the advantages/disadvantages of each.",
          marks: 5,
        },
      ],
    },
  ],
};
