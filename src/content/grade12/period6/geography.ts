import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Geography, Grade 12,
// Semester Two, Period VI, TOPIC: GENERAL REVISION. The single syllabus block
// lists five revision areas as its CONTENTS — Map Reading; Industries of Liberia;
// Climate and Natural Vegetation; Regional Geography of Africa; Population and
// Settlement — which are written here as ## sections inside one revision topic,
// summarising the sourced content from earlier periods for school and WASSCE exams.
export const geographyG12P6: PeriodContent = {
  grade: 12,
  number: 6,
  title: "General Revision",
  summary:
    "Period VI of the MoE Grade 12 Geography syllabus is a general revision for school and WASSCE examinations. It recaps the definitions, elements and key facts of five areas: map reading; the primary, secondary and tertiary industries of Liberia; climate and natural vegetation; the regional geography of Africa; and population and settlement.",
  topics: [
    // source: Geosciences LibreTexts — Introduction to Geography (McCormick), 1.03 Maps and Models & 2.12 Economic Geography; Social Sci LibreTexts — World Regional Geography (Finlayson), 6.01 The Physical Landscape of Sub-Saharan Africa, and Introduction to Human Geography (Dorrell & Henderson) 12.02 Rural Settlement Patterns; OpenStax Biology 2e, 44.3 Terrestrial Biomes (https://socialsci.libretexts.org/Bookshelves/Geography_(Human)/World_Regional_Geography_(Finlayson)/06:_Sub-Saharan_Africa/6.01:_The_Physical_Landscape_of_Sub-Saharan_Africa)
    {
      slug: "general-revision",
      title: "General Revision",
      objective:
        "By the end of the topic, learners should be able to recap and apply the key definitions and facts of map reading, the industries of Liberia, climate and natural vegetation, the regional geography of Africa, and population and settlement in preparation for school and WASSCE examinations.",
      estimatedMinutes: 160,
      notes: `## 1. Map reading

- A **map** is a scaled drawing of the Earth's surface seen from above; **map reading** interprets its scale, direction and symbols.
- **Types of maps:** **reference maps** (show many features equally, e.g. **topographic** maps of relief and water) and **thematic maps** (show one theme, e.g. population or rainfall). Other kinds include political, physical, atlas and sketch maps.
- **Scale** — the relationship between map distance and ground distance, shown three ways: **verbal** ("1 cm to 1 km"), **representative fraction** (e.g. 1:50,000) and a **linear/graphical scale bar**. A **large-scale** map shows a small area in great detail; a **small-scale** map shows a large area with less detail.
- **Direction** — read with a **compass rose** of cardinal (N, S, E, W) and intermediate points; the compass needle points to magnetic north.
- **Position** — given by **latitude and longitude** or by grid references (eastings then northings).
- **Conventional signs and symbols** — standard **point, line and area symbols** (explained in the **key/legend**) stand for roads, rivers, bridges, buildings and land use.

## 2. Industries of Liberia

- The economy has three main **sectors**: **primary** (extraction — farming, lumbering, fishing, mining), **secondary** (manufacturing), and **tertiary** (services — trade, transport, tourism).
- **Agriculture** — food crops (rice, cassava) and cash crops (**rubber**, oil palm, cocoa, coffee); the **Firestone rubber plantation** is the main case study (its exact output/size are Liberian-source data).
- **Lumbering** — felling trees for timber; risk of deforestation.
- **Fishing** — marine and inland fishing for protein and export.
- **Trade and commerce** — exporting primary products and importing manufactured goods, supported by banking and retail.
- **Transport** — road, rail, water and air that link production to markets and ports.
- **Tourism** — a service bringing foreign exchange and jobs.
- **Development point:** processing raw materials at home (secondary industry) and better transport and energy would deepen development.

## 3. Climate and natural vegetation

- **Weather** is the short-term state of the atmosphere; **climate** is its long-term average over many years.
- **Elements:** temperature, air pressure, humidity, wind, precipitation and cloud cover.
- **Factors controlling climate:** latitude, altitude, distance from the sea, ocean currents, prevailing winds and relief.
- **Climate graph (climograph):** months on the x-axis, **rainfall as bars**, **temperature as a line**; used to find mean monthly/annual temperature, temperature range and total rainfall.
- **Natural vegetation** grows without human planting, controlled mainly by **climate** (plus soil, relief, drainage and human activity): **tropical rainforest** (rain all year, evergreen layered trees), **savanna** (a dry season, grass with scattered trees), **mangrove swamp** (tidal coasts), **marshland** (wetland) and **mountain** vegetation.

## 4. Regional geography of Africa

Africa is a continent of high **plateaus and basins**, great rivers and the **Great Rift Valley**, divided into five regions:

| Region | Leading feature | Resources |
| --- | --- | --- |
| West Africa | Niger River; Sahel grassland | Oil, cocoa, oil palm, gold, iron ore |
| East Africa | Great Rift Valley and lakes (source of the Nile) | Coffee, tea, livestock, tourism |
| North Africa | Sahara Desert; lower Nile | Oil, natural gas, phosphates |
| Southern Africa | Mineral plateaus; Zambezi; Namib/Kalahari | Copper, diamonds, gold, platinum, coal |
| Central Africa | Congo Basin and Congo River | Timber, rubber, copper, cobalt, HEP |

- The **Congo** is Africa's largest river by discharge and the deepest in the world; the **Namib** receives under **10 mm** of rain a year, while West African rainforests get upwards of **3,000 mm**.
- **Desertification** (land turning to desert from overgrazing, drought and climate change) threatens the **Sahel**.

## 5. Population and settlement

- **Birth rate**, **death rate** and **natural increase** (births minus deaths) measure population change; **migration** moves people in (immigration) or out (emigration).
- **Overpopulation** = too many people for resources; **under-population** = too few; **optimum** = the best balance for living standards.
- **Migration** is driven by **push factors** (unemployment, war, poor services) and **pull factors** (jobs, higher wages, better services), with gains and problems for both source and receiving regions.
- A **census** is the official count of a population, used to plan services.
- **Settlement** types are rural and urban; patterns are **nucleated**, **dispersed** and **linear**; **site** (the ground) and **situation** (position relative to others) and functions (port, market, mining) describe each.
- **Population control** uses anti-natalist or pro-natalist policy; **family planning** and **women's education** lower birth rates.

## Common errors and misconceptions

- **Scale confusion** — a **large-scale** map shows a **small area** in detail, not a large area.
- **Confusing the sectors** — extraction is primary, manufacturing secondary, services tertiary.
- **Weather vs climate** — weather is short term; climate is the long-term average.
- **Placing African features wrongly** — the **Congo Basin** is in **Central** Africa; the **Rift Valley and Nile source** are in the **east**; the **Sahel** is the grassland belt south of the **Sahara**.
- **Density vs distribution** — density is people per km²; distribution is how they are spread.`,
      workedExample: `**Task.** A WASSCE-style question gives a map with scale 1:50,000 and a climate graph for a station near the Equator. (a) On a 1:50,000 map, how many metres on the ground does 1 cm represent? (b) The graph shows rain every month and a temperature range of 2 °C — what climate and natural vegetation does this indicate? (c) Name the African region drained by the Congo River.

**Part (a) — scale conversion**
- 1:50,000 means 1 cm on the map = **50,000 cm** on the ground.
- 50,000 cm ÷ 100 = **500 m**. So 1 cm represents **500 m (0.5 km)**.

**Part (b) — climate and vegetation**
- Rain **every month** with a **very small temperature range (2 °C)** means hot, wet conditions all year — an **equatorial/tropical rainforest climate**.
- The expected natural vegetation is **tropical rainforest** (tall, layered, broadleaf evergreen trees).

**Part (c) — African region**
- The **Congo River** drains the **Congo Basin** in **Central (Equatorial) Africa**.

**Conclusion:** converting the representative fraction gives 1 cm = 500 m; rain all year with a tiny range signals equatorial rainforest; and the Congo drains Central Africa — three core WASSCE skills combined.`,
      quiz: [
        {
          prompt: "A map that shows relief, water and many features equally is a…",
          options: ["reference (topographic) map", "thematic rainfall map", "cartogram only", "sketch of one house"],
          correctIndex: 0,
          explanation: "Reference/topographic maps show many features together.",
        },
        {
          prompt: "The scale 1:50,000 means 1 cm on the map equals…",
          options: ["500 m on the ground", "50 m", "5 km", "5 m"],
          correctIndex: 0,
          explanation: "50,000 cm = 500 m.",
        },
        {
          prompt: "A large-scale map shows…",
          options: ["a small area in great detail", "a large area with little detail", "no detail at all", "only the sea"],
          correctIndex: 0,
          explanation: "Large scale = small area, high detail.",
        },
        {
          prompt: "Standard signs on a map are explained in the…",
          options: ["key (legend)", "title only", "scale bar", "north arrow"],
          correctIndex: 0,
          explanation: "The key/legend explains conventional symbols.",
        },
        {
          prompt: "Position on a map can be given by…",
          options: ["latitude and longitude or grid references", "colour only", "the title", "the paper size"],
          correctIndex: 0,
          explanation: "Coordinates or grid references fix position.",
        },
        {
          prompt: "Felling trees for timber in Liberia is called…",
          options: ["lumbering", "fishing", "tourism", "banking"],
          correctIndex: 0,
          explanation: "Lumbering is a primary extraction activity.",
        },
        {
          prompt: "Liberia's main export cash crop in the case study is…",
          options: ["rubber", "wheat", "barley", "grapes"],
          correctIndex: 0,
          explanation: "The Firestone rubber plantation is the case study.",
        },
        {
          prompt: "Trade, transport and tourism are all part of the… sector.",
          options: ["tertiary", "primary", "secondary", "quaternary"],
          correctIndex: 0,
          explanation: "They are services — the tertiary sector.",
        },
        {
          prompt: "The long-term average of weather over many years is…",
          options: ["climate", "weather", "a forecast", "a storm"],
          correctIndex: 0,
          explanation: "Climate is the long-term mean.",
        },
        {
          prompt: "On a climate graph, temperature is shown as a… and rainfall as…",
          options: ["line; bars", "bars; line", "pie; line", "arrow; dots"],
          correctIndex: 0,
          explanation: "Temperature is a line; rainfall is bars.",
        },
        {
          prompt: "Rain all year with evergreen layered trees indicates…",
          options: ["tropical rainforest", "savanna", "desert", "tundra"],
          correctIndex: 0,
          explanation: "Rainforest needs rain all year.",
        },
        {
          prompt: "Grassland with scattered trees and a dry season is…",
          options: ["savanna", "rainforest", "mangrove", "marshland"],
          correctIndex: 0,
          explanation: "Savanna forms with a marked dry season.",
        },
        {
          prompt: "The great river draining the Congo Basin is the…",
          options: ["Congo", "Nile", "Niger", "Zambezi"],
          correctIndex: 0,
          explanation: "The Congo drains Central Africa.",
        },
        {
          prompt: "The richest mineral region of Africa is…",
          options: ["Southern Africa", "the Sahel", "North Africa", "the Horn"],
          correctIndex: 0,
          explanation: "Southern Africa has copper, gold, diamonds, platinum and coal.",
        },
        {
          prompt: "East Africa is dominated by the…",
          options: ["Great Rift Valley", "Congo Basin", "Sahara", "Kalahari only"],
          correctIndex: 0,
          explanation: "The Rift Valley and its lakes dominate East Africa.",
        },
        {
          prompt: "The grassland belt on the southern edge of the Sahara is the…",
          options: ["Sahel", "Namib", "Congo Basin", "Rift Valley"],
          correctIndex: 0,
          explanation: "The Sahel borders the Sahara to the south.",
        },
        {
          prompt: "Births minus deaths gives the…",
          options: ["natural increase", "migration rate", "density", "optimum"],
          correctIndex: 0,
          explanation: "Natural increase is births minus deaths.",
        },
        {
          prompt: "Too many people for the available resources is…",
          options: ["overpopulation", "under-population", "optimum population", "zero growth"],
          correctIndex: 0,
          explanation: "Overpopulation strains resources.",
        },
        {
          prompt: "Houses strung along a road or river form a… settlement.",
          options: ["linear", "nucleated", "dispersed", "circular"],
          correctIndex: 0,
          explanation: "Linear settlements follow a route or waterway.",
        },
        {
          prompt: "A policy that discourages births, like a one-child rule, is…",
          options: ["anti-natalist", "pro-natalist", "a census", "a pull factor"],
          correctIndex: 0,
          explanation: "Anti-natalist policies reduce births.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "On a map with scale 1:100,000, 1 cm represents:",
          options: ["1 km", "100 m", "10 km", "10 m"],
          correctIndex: 0,
          answerKey: "100,000 cm = 1,000 m = 1 km.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the three sectors of the economy and give one Liberian example of each.",
          answerKey:
            "Primary — extraction (rubber tapping, farming, lumbering, fishing, mining); Secondary — manufacturing (rubber processing, sawmilling); Tertiary — services (trade, transport, tourism, banking). Award marks for each sector and example.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State two differences between weather and climate and name two factors that control climate.",
          answerKey:
            "Weather is short term and changes quickly; climate is the long-term average and changes slowly (two contrasts). Climate factors (any two): latitude, altitude, distance from sea, ocean currents, prevailing winds, relief. Award marks for two differences and two factors.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the five regions of Africa and give one leading physical feature of each.",
          answerKey:
            "West — Niger River/Sahel; East — Great Rift Valley and lakes; North — Sahara/Nile; Southern — mineral plateaus/Zambezi/Namib; Central — Congo Basin and Congo River. One mark each.",
          marks: 5,
        },
        {
          type: "ESSAY",
          prompt:
            "Using examples, explain how map reading, climate and natural vegetation, and population and settlement are linked in understanding a region such as Liberia.",
          answerKey:
            "A strong answer shows that map reading (scale, direction, symbols, coordinates) locates and measures places; climate (controlled by latitude, altitude, distance from sea, currents, winds and relief) determines natural vegetation (rainforest where it is hot and wet all year, savanna where there is a dry season, mangrove on tidal coasts); and that climate, water, soil and resources in turn influence population distribution and the sites, patterns and functions of settlements, with migration (push/pull) and population control shaping growth. Award marks for connecting the three strands with relevant examples.",
          marks: 5,
        },
      ],
    },
  ],
};
