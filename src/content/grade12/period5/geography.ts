import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Geography, Grade 12,
// Semester Two, Period V. The syllabus places three TOPIC blocks in Period V —
// "Primary and Tertiary Industries of Liberia", "Population and Settlement" and
// "Climate and Vegetation" — so this PeriodContent carries one sourced topic per
// block, with each block's CONTENTS items written as ## sections.
export const geographyG12P5: PeriodContent = {
  grade: 12,
  number: 5,
  title: "Industries of Liberia, Population and Settlement, Climate and Vegetation",
  summary:
    "Period V of the MoE Grade 12 Geography syllabus covers three topics: the primary and tertiary industries of Liberia (agriculture and the Firestone rubber case study, lumbering, fishing, trade, transport and tourism); world population and settlement (distribution, growth, migration, settlement types and patterns, and population control); and climate and vegetation (weather versus climate, the elements of climate, climatic charts, natural vegetation and the factors that shape it).",
  topics: [
    // source: Geosciences LibreTexts — Introduction to Geography (McCormick), 2.12 Economic Geography (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/Introduction_to_Geography_(McCormick)/02:_Human_Geography/2.12:_Economic_Geography) — NOTE: Liberia-specific figures (Firestone/rubber output, named firms) flagged as unsourced below.
    {
      slug: "primary-and-tertiary-industries-of-liberia",
      title: "Primary and Tertiary Industries of Liberia",
      objective:
        "By the end of the topic, learners should be able to differentiate the primary, secondary and tertiary sectors of the economy, and describe agriculture (including the Firestone rubber case study), lumbering, fishing, trade and commerce, transport and tourism as activities of the Liberian economy.",
      estimatedMinutes: 150,
      notes: `## Sectors of the economy

The jobs in an economy are grouped into **sectors** by what they do with resources (sourced).

- **Primary sector** — the **direct use or extraction of natural goods**: farming, forestry (lumbering), fishing and mining. It needs the least skill and technology and dominates in less-developed economies.
- **Secondary sector** — **manufacturing**: products from the primary sector are combined and processed into new goods (e.g. rubber into tyres, logs into sawn timber, fish into canned fish).
- **Tertiary sector** — **services** rather than products: retail, trade, transport, banking, health, education and tourism.
- **Quaternary / quinary sectors** — information and knowledge services in advanced economies.

**Development link:** the less developed the economy, the **more important its primary sector**; the more developed, the **more important its tertiary sector**.

| Sector | What it does | Liberian examples |
| --- | --- | --- |
| Primary | Extracts raw materials | Rubber, rice, cassava farming; logging; fishing; iron-ore and gold mining |
| Secondary | Manufactures goods | Rubber processing, sawmilling, food processing |
| Tertiary | Provides services | Trade and commerce, transport, tourism, banking |

## Agriculture

- **Agriculture** is a **primary** activity and the backbone of many developing economies, providing food, raw materials and export earnings.
- **Subsistence farming** grows food mainly for the family (rice, cassava), while **commercial/plantation farming** grows cash crops for sale and export.
- Liberia's leading cash crops are **rubber, oil palm, cocoa and coffee**; the main food crops are **rice and cassava**.

### Case study: rubber plantation (Firestone operations)

- A **plantation** is a large commercial farm growing a single cash crop; rubber is tapped from **Hevea** rubber trees as **latex** and processed before export.
- **Local-specificity gap:** the size of the Firestone concession, its annual rubber output, employment figures and current trends and prospects are **Liberia-specific data** that must come from **Liberian government / company sources**; they are **flagged here as unsourced** rather than invented.

## Lumbering

- **Lumbering (forestry)** is the **primary** activity of felling trees for timber; it is a key resource in tropical rainforest countries.
- Logs are a raw material for the **secondary** sawmilling and furniture industries.
- **Over-logging** causes **deforestation**, soil erosion and loss of biodiversity, so sustainable forestry (replanting, controlled cutting) is needed.

## Fishing

- **Fishing** is a **primary** activity that harvests fish from the sea, rivers and lakes for food and sale.
- **Marine fishing** uses the Atlantic coast; **inland fishing** uses rivers, lakes and fish farms (aquaculture).
- It supplies **protein**, jobs and export income; **over-fishing** and pollution threaten the resource.

## Trade and commerce

- **Trade** is a **tertiary** service: the buying and selling of goods, internally and with other countries.
- **Imports** are goods bought from abroad; **exports** are goods sold abroad. Developing economies typically export **primary products** (rubber, iron ore, timber) and import manufactured goods.
- **Commerce** includes the supporting services — banking, insurance, wholesaling and retailing — that make trade work.

## Transport and development

- **Transport** is a **tertiary** service that moves people and goods by **road, rail, water (ports) and air**.
- Good transport **links farms and mines to markets and ports**, lowers costs and spreads development inland; poor transport isolates regions and holds back growth.
- Ports (for exporting minerals and cash crops) and roads are key **infrastructure** for a resource economy.

## Tourism

- **Tourism** is a **tertiary** service: people travelling for leisure, bringing **foreign exchange, jobs and investment**.
- Attractions include **beaches, forests, wildlife and cultural sites**; tourism supports hotels, transport and guiding.
- Benefits must be balanced against **environmental and cultural pressures**.

## Problems and solutions for the Liberian economy

- **Problems:** over-dependence on a few primary exports, low processing (little secondary industry), poor transport and power, limited capital and skills.
- **Solutions:** add value by **processing raw materials at home**, improve **transport and energy**, diversify crops and industries, and invest in **education and training**.

## Common errors and misconceptions

- **Confusing the sectors** — extraction is **primary**, manufacturing is **secondary**, services are **tertiary**.
- **Inventing Liberian figures** — Firestone output, concession size and export tonnages must come from **Liberian sources**, not guessed.
- **Thinking exporting raw materials is enough** — processing (secondary industry) adds more value and jobs.
- **Ignoring sustainability** — over-logging and over-fishing destroy the primary resource.`,
      workedExample: `**Task.** (a) Place each activity in the correct sector: rubber tapping, making tyres, running a bank, catching fish, teaching. (b) Explain why a country that only exports raw rubber earns less than one that exports tyres.

**Part (a) — sector of each activity**
1. **Rubber tapping** — **primary** (extracting a natural good).
2. **Making tyres** — **secondary** (manufacturing a product from raw material).
3. **Running a bank** — **tertiary** (a service).
4. **Catching fish** — **primary** (extracting a natural good).
5. **Teaching** — **tertiary** (a service).

**Part (b) — raw material versus processed good**
- Raw rubber is a **primary product** sold cheaply; most of its value is added later when it is **manufactured** into tyres (a secondary activity).
- A country exporting only raw rubber lets **other countries capture the manufacturing profit and jobs**; its earnings swing with world commodity prices.
- By **processing at home**, a country adds value, creates factory jobs and earns more per tonne.

**Conclusion:** extraction (primary) earns least; adding **secondary** processing captures more value, which is why diversifying beyond raw exports aids development.`,
      quiz: [
        {
          prompt: "Extracting natural goods such as farming, fishing and mining belongs to the…",
          options: ["primary sector", "secondary sector", "tertiary sector", "quaternary sector"],
          correctIndex: 0,
          explanation: "The primary sector directly extracts or uses natural resources.",
        },
        {
          prompt: "Manufacturing raw materials into finished goods is the…",
          options: ["secondary sector", "primary sector", "tertiary sector", "quinary sector"],
          correctIndex: 0,
          explanation: "The secondary sector processes raw materials into products.",
        },
        {
          prompt: "Providing services such as banking, trade and tourism is the…",
          options: ["tertiary sector", "primary sector", "secondary sector", "informal sector"],
          correctIndex: 0,
          explanation: "The tertiary sector supplies services, not goods.",
        },
        {
          prompt: "In a less-developed economy the most important sector is usually the…",
          options: ["primary", "tertiary", "quaternary", "quinary"],
          correctIndex: 0,
          explanation: "Less-developed economies depend most on primary extraction.",
        },
        {
          prompt: "As an economy develops, the sector that grows most important is the…",
          options: ["tertiary", "primary", "secondary only", "none"],
          correctIndex: 0,
          explanation: "More-developed economies are dominated by tertiary services.",
        },
        {
          prompt: "Rubber tapping on a plantation is an example of… activity.",
          options: ["primary", "secondary", "tertiary", "quaternary"],
          correctIndex: 0,
          explanation: "Tapping latex extracts a natural good — primary.",
        },
        {
          prompt: "Liberia's main food crops are…",
          options: ["rice and cassava", "wheat and barley", "maize and potato only", "grapes and olives"],
          correctIndex: 0,
          explanation: "Rice and cassava are the staple food crops.",
        },
        {
          prompt: "A large commercial farm growing a single cash crop is a…",
          options: ["plantation", "homestead", "allotment", "market garden"],
          correctIndex: 0,
          explanation: "A plantation specialises in one cash crop such as rubber.",
        },
        {
          prompt: "Latex for rubber is tapped from the…",
          options: ["Hevea rubber tree", "oil palm", "cocoa pod", "coffee bush"],
          correctIndex: 0,
          explanation: "Natural rubber comes from the Hevea tree's latex.",
        },
        {
          prompt: "Exact Firestone output and concession size should come from…",
          options: ["Liberian government/company sources", "guesswork", "a textbook on Europe", "the weather report"],
          correctIndex: 0,
          explanation: "Country-specific figures must be sourced, not invented.",
        },
        {
          prompt: "Felling trees for timber is called…",
          options: ["lumbering", "fishing", "mining", "retailing"],
          correctIndex: 0,
          explanation: "Lumbering (forestry) is a primary activity.",
        },
        {
          prompt: "A major environmental problem of over-logging is…",
          options: ["deforestation and soil erosion", "more rainfall forever", "cooler oceans", "richer soils"],
          correctIndex: 0,
          explanation: "Over-logging strips forest and accelerates erosion.",
        },
        {
          prompt: "Fishing mainly supplies people with…",
          options: ["protein, jobs and export income", "metals", "timber", "electricity"],
          correctIndex: 0,
          explanation: "Fish provide protein, employment and export earnings.",
        },
        {
          prompt: "Taking too many fish so stocks collapse is…",
          options: ["over-fishing", "aquaculture", "afforestation", "upwelling"],
          correctIndex: 0,
          explanation: "Over-fishing depletes the resource.",
        },
        {
          prompt: "Goods sold to other countries are…",
          options: ["exports", "imports", "tariffs", "subsidies"],
          correctIndex: 0,
          explanation: "Exports are sold abroad; imports are bought from abroad.",
        },
        {
          prompt: "Developing economies typically export mainly…",
          options: ["primary products", "advanced electronics", "aircraft", "software"],
          correctIndex: 0,
          explanation: "They export primary products like rubber, ore and timber.",
        },
        {
          prompt: "Transport, banking and insurance that support trade are part of…",
          options: ["commerce (tertiary services)", "the primary sector", "manufacturing", "mining"],
          correctIndex: 0,
          explanation: "Commerce is the service side that supports trade.",
        },
        {
          prompt: "Good transport helps development by…",
          options: ["linking farms and mines to markets and ports", "blocking trade", "raising costs", "isolating regions"],
          correctIndex: 0,
          explanation: "Transport connects production to markets and lowers costs.",
        },
        {
          prompt: "A key benefit of tourism is…",
          options: ["foreign exchange and jobs", "more deforestation", "fewer services", "lower investment"],
          correctIndex: 0,
          explanation: "Tourism brings foreign exchange, jobs and investment.",
        },
        {
          prompt: "A good way to raise earnings from Liberia's raw materials is to…",
          options: ["process them at home before export", "export them more cheaply", "stop all trade", "ban transport"],
          correctIndex: 0,
          explanation: "Home processing (secondary industry) adds value and jobs.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define the primary, secondary and tertiary sectors and give one Liberian example of each.",
          answerKey:
            "Primary — extraction of natural goods (e.g. rubber tapping, farming rice/cassava, logging, fishing, mining). Secondary — manufacturing raw materials into products (e.g. rubber processing, sawmilling, food processing). Tertiary — services (e.g. trade, transport, tourism, banking). Award marks for each correct definition and example.",
          marks: 6,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which activity belongs to the primary sector?",
          options: ["Fishing", "Making tyres", "Running a hotel", "Banking"],
          correctIndex: 0,
          answerKey: "Fishing extracts a natural good, so it is primary; the others are secondary or tertiary.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain two problems facing the Liberian economy and suggest one solution for each.",
          answerKey:
            "Problems (any two): over-dependence on a few primary exports; little secondary processing; poor transport/energy; limited capital and skills. Matching solutions: diversify crops/industries; process raw materials at home; improve transport and power; invest in education and training. Award marks for two problems with matching solutions.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Why is country-specific data (such as Firestone's output) treated as unsourced in these notes?",
          answerKey:
            "The approved global education sources do not give Liberia-specific figures; such data must come from Liberian government/company statistics rather than being invented, so it is flagged as unsourced. Award marks for the reasoning.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Discuss the importance of the primary and tertiary industries (agriculture, lumbering, fishing, trade, transport and tourism) to the development of Liberia.",
          answerKey:
            "A strong answer explains primary activities (agriculture — food and cash crops such as rubber; lumbering — timber; fishing — protein and exports) and tertiary services (trade and commerce — earning export income; transport — linking production to markets and ports; tourism — foreign exchange and jobs), showing how each contributes to income, employment and infrastructure, and noting that adding secondary processing and improving transport/energy would deepen development. Award marks across the sectors and the development argument.",
          marks: 5,
        },
      ],
    },
    // source: Social Sci LibreTexts — Introduction to Human Geography (Dorrell & Henderson), 12.02 Rural Settlement Patterns and 03 Migration; Biology LibreTexts — Environmental Science (Whittinghill), 14.03 Human Population Growth (https://socialsci.libretexts.org/Bookshelves/Geography_(Human)/Introduction_to_Human_Geography_(Dorrell_and_Henderson)/12:_Human_Settlements/12.02:_Rural_Settlement_Patterns)
    {
      slug: "population-and-settlement",
      title: "Population and Settlement",
      objective:
        "By the end of the topic, learners should be able to explain world population distribution and growth, distinguish overpopulation from underpopulation, outline the factors and consequences of migration, describe settlement types and patterns, and discuss population control and family planning.",
      estimatedMinutes: 150,
      notes: `## World population

- **Population** is the total number of people living in an area. The **world population** reached about **1 billion in 1800, 2 billion by 1930, 6 billion by 1999 and 8 billion by 2022** (sourced), following an exponential **J-curve**.
- The recent rapid growth comes mainly from a **fall in death rates** (better medicine, sanitation, nutrition and lower infant mortality), **not** from higher birth rates.

### Terms associated with population growth

- **Birth rate** — births per 1,000 people per year.
- **Death rate (mortality)** — deaths per 1,000 people per year.
- **Natural increase** — birth rate minus death rate (growth from births over deaths).
- **Migration** — movement of people into (immigration) or out of (emigration) an area.
- **Total fertility rate (TFR)** — average children per woman; **replacement level is about 2.1**.
- **Population density** — average number of people per unit area (people / km²).
- **Carrying capacity** — the number of people an area's resources can support.

## Population distribution

- **Distribution** describes how people are spread over the land; it is **uneven**.
- **Physical factors** attract settlement: fertile soil, reliable water, gentle relief, moderate climate, and resources.
- **Human factors**: jobs, transport, trade, services and history.
- **Densely populated** areas have many people per km² (fertile plains, river valleys, coasts, cities); **sparsely populated** areas have few (deserts, high mountains, dense forest, very cold lands).

## Overpopulation and under-population

- **Overpopulation** — there are **too many people for the resources available**, lowering living standards (shortages of food, water, jobs, housing).
- **Under-population** — there are **too few people to use the resources fully**, so the economy cannot develop its potential.
- **Optimum population** — the number that uses resources to give the **highest standard of living**.

## Migration and its consequences

- **Push factors** drive people away from an area: unemployment, low wages, poverty, war, disaster, poor services.
- **Pull factors** attract people to a new area: jobs, higher wages, better services, safety, opportunity.

| Region | Possible gains | Possible problems |
| --- | --- | --- |
| Source (losing people) | Less pressure on jobs/land; remittances sent home | Loss of young, skilled workers; ageing population |
| Receiving (gaining people) | More labour and skills; cultural diversity | Overcrowding, pressure on housing and services |

## Population census

- A **census** is the official **counting and recording of a country's population** (numbers, age, sex, work) usually every ten years.
- It is run by the government, using enumerators and questionnaires, to **plan schools, hospitals, roads and services**.

## Settlement

- A **settlement** is a place where people live and build a community.
- **Rural settlements** are villages and hamlets tied to farming; **urban settlements** are towns and cities with industry and services.
- **Site** is the actual land a settlement is built on; **situation** is its position relative to surrounding features (rivers, roads, other towns).
- **Factors affecting settlement growth:** water supply, fertile soil, flat/gentle land, shelter and defence, resources, and good routes/transport.

### Settlement patterns

- **Nucleated (clustered)** — houses grouped closely around a centre (market, church, well); common where families farm surrounding fields.
- **Dispersed (scattered)** — houses spread out with no clear centre; common where land is plentiful or farming is extensive.
- **Linear** — buildings strung along a **road, river or coast**.

### Settlement functions

- The **function** is the main work a settlement does: farming village, market town, port, mining town, administrative capital or tourist resort. Larger settlements have **many functions**.

## Population control and family planning

- **Population control** uses policy to change the rate of growth: **anti-natalist** policies discourage births (e.g. China's former **one-child policy**, 1979–2016), while **pro-natalist** policies encourage them.
- **Family planning** lets couples choose the number and spacing of children using **contraception** and advice.
- **Women's education and empowerment** strongly **lower fertility**: when women can decide family size and have career options and access to family planning, birth rates fall.

## Common errors and misconceptions

- **Confusing density and distribution** — **density** is people per km²; **distribution** is how they are spread.
- **Mixing up push and pull** — **push** drives people away; **pull** attracts them.
- **Thinking overpopulation just means many people** — it means **too many for the resources**, so a crowded rich country may not be overpopulated while a thinly peopled poor one may be.
- **Confusing site and situation** — **site** is the actual ground; **situation** is the position relative to other places.`,
      workedExample: `**Task.** A village grows up where two rivers meet, on flat, fertile land beside a main road. (a) Identify two site/situation advantages. (b) Name the likely settlement pattern and one function. (c) State one push and one pull factor that might make young people leave for the city.

**Part (a) — advantages**
- **Water supply and fertile flat land** (good site for building and farming).
- **River confluence and main road** (good situation — a natural meeting point and route centre for trade).

**Part (b) — pattern and function**
- Houses grouped around the crossing form a **nucleated (clustered)** pattern.
- Its **function** is a **market/farming village** (and a route centre).

**Part (c) — migration factors**
- **Push:** few jobs and low wages in the village.
- **Pull:** more jobs, higher wages and better services in the city.

**Conclusion:** favourable **site and situation** (water, soil, flat land, routes) grow a nucleated farming/market village, while rural **push** and urban **pull** factors drive the young to migrate to the city.`,
      quiz: [
        {
          prompt: "World population reached about 8 billion in…",
          options: ["2022", "1999", "1930", "1800"],
          correctIndex: 0,
          explanation: "The world passed 8 billion people in 2022.",
        },
        {
          prompt: "The recent rapid rise in world population is caused mainly by…",
          options: ["falling death rates", "falling birth rates", "more migration only", "fewer people"],
          correctIndex: 0,
          explanation: "Lower death rates, not higher births, drove the growth.",
        },
        {
          prompt: "Birth rate minus death rate gives the…",
          options: ["natural increase", "density", "migration rate", "carrying capacity"],
          correctIndex: 0,
          explanation: "Natural increase is births minus deaths.",
        },
        {
          prompt: "The number of people per unit area is the population…",
          options: ["density", "distribution", "structure", "census"],
          correctIndex: 0,
          explanation: "Density is people per km².",
        },
        {
          prompt: "Which is a physical factor that attracts dense settlement?",
          options: ["fertile soil and reliable water", "very high mountains", "dense forest", "desert"],
          correctIndex: 0,
          explanation: "Fertile, well-watered lowlands attract people.",
        },
        {
          prompt: "A sparsely populated area is typically a…",
          options: ["desert or high mountain", "fertile river valley", "coastal plain", "big city"],
          correctIndex: 0,
          explanation: "Harsh environments are thinly peopled.",
        },
        {
          prompt: "Too many people for the available resources describes…",
          options: ["overpopulation", "under-population", "optimum population", "zero growth"],
          correctIndex: 0,
          explanation: "Overpopulation means resources cannot support the numbers.",
        },
        {
          prompt: "Too few people to use resources fully describes…",
          options: ["under-population", "overpopulation", "high density", "migration"],
          correctIndex: 0,
          explanation: "Under-population leaves resources underused.",
        },
        {
          prompt: "Unemployment and war that drive people away are…",
          options: ["push factors", "pull factors", "natural increase", "census data"],
          correctIndex: 0,
          explanation: "Push factors drive people out of an area.",
        },
        {
          prompt: "Better jobs and services that attract migrants are…",
          options: ["pull factors", "push factors", "death rates", "site factors"],
          correctIndex: 0,
          explanation: "Pull factors draw people to a destination.",
        },
        {
          prompt: "A problem for a region losing many migrants is…",
          options: ["loss of young, skilled workers", "overcrowded housing", "too many jobs", "falling food prices only"],
          correctIndex: 0,
          explanation: "Source regions lose their young and skilled population.",
        },
        {
          prompt: "A problem for a region receiving many migrants is…",
          options: ["pressure on housing and services", "an ageing, shrinking population", "empty villages", "no new workers"],
          correctIndex: 0,
          explanation: "Receiving regions face overcrowding and service pressure.",
        },
        {
          prompt: "The official count of a country's population is the…",
          options: ["census", "survey sample", "migration map", "climograph"],
          correctIndex: 0,
          explanation: "A census counts and records the whole population.",
        },
        {
          prompt: "A census is mainly used to…",
          options: ["plan services like schools and hospitals", "predict the weather", "set exam dates", "draw contour lines"],
          correctIndex: 0,
          explanation: "Census data guides planning of services.",
        },
        {
          prompt: "Houses grouped closely around a centre form a… pattern.",
          options: ["nucleated (clustered)", "dispersed", "linear", "random only"],
          correctIndex: 0,
          explanation: "Nucleated settlements cluster around a core.",
        },
        {
          prompt: "Buildings strung along a road or river form a… settlement.",
          options: ["linear", "nucleated", "dispersed", "circular only"],
          correctIndex: 0,
          explanation: "Linear settlements follow a route or waterway.",
        },
        {
          prompt: "The actual land a settlement is built on is its…",
          options: ["site", "situation", "function", "pattern"],
          correctIndex: 0,
          explanation: "Site is the ground; situation is position relative to others.",
        },
        {
          prompt: "The main work a settlement does (port, market, mining) is its…",
          options: ["function", "site", "density", "census"],
          correctIndex: 0,
          explanation: "Function is the role the settlement performs.",
        },
        {
          prompt: "China's one-child policy is an example of a… policy.",
          options: ["anti-natalist", "pro-natalist", "migration", "settlement"],
          correctIndex: 0,
          explanation: "Anti-natalist policies discourage births.",
        },
        {
          prompt: "A strong factor that lowers birth rates is…",
          options: ["women's education and access to family planning", "more war", "banning all contraception", "higher infant mortality"],
          correctIndex: 0,
          explanation: "Educating and empowering women lowers fertility.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Distinguish between overpopulation and under-population, and define optimum population.",
          answerKey:
            "Overpopulation — too many people for the available resources, lowering living standards. Under-population — too few people to use the resources fully, limiting development. Optimum population — the number that uses resources to give the highest standard of living. Award marks for each.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State two push factors and two pull factors in rural-to-urban migration.",
          answerKey:
            "Push (any two): unemployment, low wages, poverty, war, disaster, poor services. Pull (any two): more jobs, higher wages, better services, safety, opportunity. One mark each.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A settlement with houses spread out and no clear centre has a pattern that is:",
          options: ["dispersed", "nucleated", "linear", "circular"],
          correctIndex: 0,
          answerKey: "A dispersed (scattered) pattern has no central core.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain how women's education and family planning affect population growth.",
          answerKey:
            "When women are educated and empowered they tend to marry later, have access to contraception and can decide family size, so the total fertility rate and birth rate fall, slowing population growth. Family planning lets couples choose the number and spacing of children. Award marks for the link between education/empowerment, family planning and lower fertility.",
          marks: 4,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe the main factors that affect the distribution of population and the growth of settlements, and explain the consequences of migration for source and receiving regions.",
          answerKey:
            "A strong answer explains physical factors (soil, water, relief, climate, resources) and human factors (jobs, transport, services) behind uneven distribution and dense versus sparse areas; the site and situation factors (water, land, defence, routes) that grow settlements and their patterns (nucleated, dispersed, linear) and functions; and the consequences of migration — source regions lose young/skilled workers and may age but gain remittances and less pressure, while receiving regions gain labour and diversity but face overcrowding and service pressure. Award marks across distribution, settlement and migration.",
          marks: 5,
        },
      ],
    },
    // source: Geosciences LibreTexts — California Geography (Patrich), 3.04 Elements of Climate; OpenStax Biology 2e, 44.3 Terrestrial Biomes; CK-12 Weather vs. Climate (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/California_Geography_(Patrich)/03:_Californias_weather_and_climate/3.04:_ELEMENTS_OF_CLIMATE)
    {
      slug: "climate-and-vegetation",
      title: "Climate and Vegetation",
      objective:
        "By the end of the topic, learners should be able to distinguish weather from climate, list and explain the elements of weather and climate, prepare and read a climatic chart, define natural vegetation and the factors that shape it, and describe Liberia's forest, mountain, savanna and mangrove/marshland vegetation.",
      estimatedMinutes: 150,
      notes: `## Climate and weather

- **Weather** is the **state of the atmosphere at a place and time** — expressed as temperature, air pressure, humidity, wind speed and direction, precipitation and cloudiness; it can change within minutes or hours.
- **Climate** is the **average (mean) of the weather elements over a long period** (many years, usually 30+) for a region; it changes only slowly.

| Feature | Weather | Climate |
| --- | --- | --- |
| Time scale | Short term (minutes to days) | Long term (many years, averaged) |
| Changes | Quickly | Slowly |
| Example | "It is raining today" | "This region is hot and wet all year" |

## Elements of weather and climate

The main **elements** (sourced) are:

1. **Temperature** — how hot or cold the air is (°C).
2. **Air pressure** — the weight of the atmosphere.
3. **Humidity** — moisture in the air.
4. **Wind** — speed and direction of moving air.
5. **Precipitation** — rain, and other forms of falling moisture (mm).
6. **Cloud cover** — amount of cloud in the sky.

### Factors that control climate

- **Latitude** — distance from the Equator sets how much sunlight is received (hot near the Equator, cooler toward the poles).
- **Altitude** — higher land is cooler.
- **Distance from the sea (continentality)** — the sea moderates coastal temperatures.
- **Ocean currents** — warm or cool the coasts they wash.
- **Prevailing winds** — bring moist or dry air.
- **Relief** — mountains force air to rise, giving rain on windward slopes.

## Preparation of a climatic chart (climate graph)

A **climatic chart (climograph)** plots a place's **average monthly temperature and rainfall** for one year (sourced).

- **Months (J–D)** run along the **horizontal (x) axis**.
- **Rainfall** is shown as **bars** read on one vertical axis (mm).
- **Temperature** is shown as a **line graph** read on the other vertical axis (°C).

Calculations from the data:
- **Mean monthly temperature** — add the readings and divide by the number of readings for the month.
- **Mean annual temperature** — add the twelve monthly means and divide by 12.
- **Temperature range** — highest monthly mean minus lowest monthly mean.
- **Total annual rainfall** — add the twelve monthly rainfall figures.

## Natural vegetation

- **Natural vegetation** is the plant cover that grows **on its own, without human planting**, in response to climate and soil.
- **Factors affecting the development of vegetation:** **climate** (rainfall and temperature — the strongest control), **soil**, **relief and altitude**, **drainage**, and **human activity** (farming, logging, fire).

## Case study: vegetation of Liberia

Liberia's tropical climate produces several natural vegetation types (sourced as biome descriptions):

- **Tropical rainforest (forest)** — near the Equator with heavy rainfall (tropical wet forests receive roughly **125–660 cm** a year) and warm temperatures (about **20–34 °C**); tall, layered **broadleaf evergreen** trees with very high biodiversity.
- **Mountain vegetation** — on higher ground, cooler temperatures with altitude change the plant cover (forest giving way to grassland higher up).
- **Savanna (tropical grassland)** — where a marked **dry season** occurs (lower rainfall, about **10–40 cm** in true savanna, warm **24–29 °C**); **grasses with scattered, fire-resistant trees**.
- **Mangrove swamp** — salt-tolerant trees along **tidal coasts and river mouths**, where land meets the sea.
- **Marshland (wetland)** — waterlogged ground with reeds and water-loving plants.

## Common errors and misconceptions

- **Confusing weather and climate** — **weather** is short-term and changeable; **climate** is the long-term average.
- **Reading the wrong axis on a climograph** — rainfall is the **bars**; temperature is the **line**.
- **Thinking vegetation is random** — it follows **climate and soil**; rainforest needs rain all year, savanna needs a dry season.
- **Forgetting human impact** — farming, logging and fire change natural vegetation.`,
      workedExample: `**Task.** A station records these mean monthly temperatures (°C): 26, 26, 27, 27, 26, 25, 24, 24, 25, 26, 26, 26. (a) Find the mean annual temperature. (b) Find the temperature range. (c) With heavy rain all year, what natural vegetation would you expect, and why?

**Part (a) — mean annual temperature**
- Sum = 26+26+27+27+26+25+24+24+25+26+26+26 = **308**.
- Mean = 308 ÷ 12 = **25.7 °C** (about 26 °C).

**Part (b) — temperature range**
- Highest monthly mean = **27 °C**; lowest = **24 °C**.
- Range = 27 − 24 = **3 °C** (a very small range, typical of equatorial climates).

**Part (c) — expected vegetation**
- Hot temperatures all year (small range) with **heavy rainfall all year** give an **equatorial/tropical climate**.
- The expected natural vegetation is **tropical rainforest**: tall, layered broadleaf **evergreen** trees, because constant heat and abundant rain allow year-round growth.

**Conclusion:** the data show a hot climate with a tiny annual range; combined with rain all year this supports dense tropical rainforest.`,
      quiz: [
        {
          prompt: "The state of the atmosphere at a place and time is…",
          options: ["weather", "climate", "vegetation", "relief"],
          correctIndex: 0,
          explanation: "Weather is the short-term atmospheric state.",
        },
        {
          prompt: "The long-term average of weather over many years is…",
          options: ["climate", "weather", "a forecast", "a season"],
          correctIndex: 0,
          explanation: "Climate is the long-term mean of the weather elements.",
        },
        {
          prompt: "Which is an element of weather and climate?",
          options: ["temperature", "latitude", "soil", "population"],
          correctIndex: 0,
          explanation: "Temperature is a core element; latitude is a controlling factor.",
        },
        {
          prompt: "Moisture in the air is measured as…",
          options: ["humidity", "pressure", "wind speed", "cloud cover"],
          correctIndex: 0,
          explanation: "Humidity is the air's moisture content.",
        },
        {
          prompt: "Rain and other falling moisture are called…",
          options: ["precipitation", "humidity", "pressure", "temperature"],
          correctIndex: 0,
          explanation: "Precipitation is falling moisture such as rain.",
        },
        {
          prompt: "Which factor makes places cooler as you go higher?",
          options: ["altitude", "latitude only", "humidity", "cloud cover"],
          correctIndex: 0,
          explanation: "Temperature falls with increasing altitude.",
        },
        {
          prompt: "Nearness to the Equator giving high temperatures is the effect of…",
          options: ["latitude", "altitude", "ocean currents", "relief"],
          correctIndex: 0,
          explanation: "Latitude controls how much sunlight a place receives.",
        },
        {
          prompt: "The sea moderating coastal temperatures is the effect of…",
          options: ["distance from the sea (continentality)", "latitude", "cloud cover", "soil"],
          correctIndex: 0,
          explanation: "Coasts are moderated by the nearby ocean.",
        },
        {
          prompt: "On a climate graph, rainfall is usually shown as…",
          options: ["bars", "a line", "a pie slice", "an arrow"],
          correctIndex: 0,
          explanation: "Rainfall is plotted as bars; temperature as a line.",
        },
        {
          prompt: "On a climate graph, temperature is usually shown as…",
          options: ["a line", "bars", "dots only", "shading"],
          correctIndex: 0,
          explanation: "Temperature is drawn as a continuous line.",
        },
        {
          prompt: "The months on a climograph run along the…",
          options: ["horizontal (x) axis", "vertical axis only", "diagonal", "centre"],
          correctIndex: 0,
          explanation: "Months J–D run along the x-axis.",
        },
        {
          prompt: "Temperature range is the highest monthly mean…",
          options: ["minus the lowest monthly mean", "plus the lowest", "times twelve", "divided by rainfall"],
          correctIndex: 0,
          explanation: "Range = highest mean − lowest mean.",
        },
        {
          prompt: "Plant cover that grows on its own without human planting is…",
          options: ["natural vegetation", "a plantation", "a crop field", "an orchard"],
          correctIndex: 0,
          explanation: "Natural vegetation grows naturally with the climate and soil.",
        },
        {
          prompt: "The strongest control on natural vegetation is…",
          options: ["climate (rainfall and temperature)", "the day of the week", "the price of land", "population density"],
          correctIndex: 0,
          explanation: "Climate is the main factor shaping vegetation.",
        },
        {
          prompt: "Tall, layered, broadleaf evergreen trees with rain all year form…",
          options: ["tropical rainforest", "savanna", "mangrove", "marshland"],
          correctIndex: 0,
          explanation: "Rainforest has evergreen layered trees and year-round rain.",
        },
        {
          prompt: "Grassland with scattered fire-resistant trees and a dry season is…",
          options: ["savanna", "rainforest", "mangrove", "wetland"],
          correctIndex: 0,
          explanation: "Savanna forms where there is a marked dry season.",
        },
        {
          prompt: "Salt-tolerant trees on tidal coasts and river mouths form…",
          options: ["mangrove swamp", "rainforest", "savanna", "mountain forest"],
          correctIndex: 0,
          explanation: "Mangroves grow in brackish tidal coastal water.",
        },
        {
          prompt: "Tropical rainforest temperatures are about…",
          options: ["20–34 °C", "−10 to 0 °C", "40–60 °C", "0–5 °C"],
          correctIndex: 0,
          explanation: "Rainforests average roughly 20–34 °C.",
        },
        {
          prompt: "A very small annual temperature range is typical of a… climate.",
          options: ["equatorial/tropical", "polar", "desert", "cold mountain"],
          correctIndex: 0,
          explanation: "Equatorial climates are warm all year with a tiny range.",
        },
        {
          prompt: "A human activity that changes natural vegetation is…",
          options: ["farming, logging and fire", "the Earth's rotation", "ocean tides", "sunrise"],
          correctIndex: 0,
          explanation: "People clear and burn vegetation for farming and timber.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "State two differences between weather and climate.",
          answerKey:
            "Weather is the short-term state of the atmosphere (minutes to days) and changes quickly; climate is the long-term average of weather over many years and changes slowly. Any two valid contrasts (time scale, rate of change, example). Award marks for two differences.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "List four elements of weather and climate and two factors that control climate.",
          answerKey:
            "Elements (any four): temperature, air pressure, humidity, wind, precipitation, cloud cover. Factors (any two): latitude, altitude, distance from sea, ocean currents, prevailing winds, relief. Award marks for four elements and two factors.",
          marks: 6,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "On a climate graph, which is correct?",
          options: [
            "Rainfall is shown as bars and temperature as a line",
            "Rainfall is a line and temperature is bars",
            "Both are bars",
            "Both are lines",
          ],
          correctIndex: 0,
          answerKey: "Rainfall is plotted as bars and temperature as a line.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Define natural vegetation and name two factors that affect its development.",
          answerKey:
            "Natural vegetation is plant cover that grows on its own without human planting, in response to climate and soil. Factors (any two): climate (rainfall and temperature), soil, relief/altitude, drainage, human activity. Award marks for the definition and two factors.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe the main natural vegetation types of Liberia (forest, mountain, savanna, mangrove and marshland) and explain how climate and other factors produce them.",
          answerKey:
            "A strong answer describes tropical rainforest (hot, very wet all year; tall layered evergreen broadleaf trees), mountain vegetation (cooler with altitude, forest changing to grassland higher up), savanna (a marked dry season; grasses with scattered fire-resistant trees), mangrove swamp (salt-tolerant trees on tidal coasts and river mouths) and marshland (waterlogged ground with reeds), and explains that climate (rainfall and temperature) is the strongest control, with soil, relief, drainage and human activity also shaping vegetation. Award marks across the vegetation types and the explanation.",
          marks: 5,
        },
      ],
    },
  ],
};
