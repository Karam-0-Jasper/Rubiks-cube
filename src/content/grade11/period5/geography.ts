import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Geography, Grade 11,
// Semester Two, Period V, Unit 2 Human Geography — Secondary and Tertiary
// Industries: Manufacturing; Trade, Commerce and Transport; and Sources of
// Energy, Location and Distribution.
export const geographyG11P5: PeriodContent = {
  grade: 11,
  number: 5,
  title: "Manufacturing, Trade and Energy",
  summary:
    "Period V of the MoE Grade 11 Geography syllabus. Learners study secondary industry (manufacturing) — its classification, location factors, importance and problems — together with trade, commerce and transport, and then classify the sources of energy and the factors affecting their use.",
  topics: [
    {
      // source: Social Sci LibreTexts — Introduction to Human Geography (Dorrell and Henderson), 11 Industry and 11.03 Factors for Location (https://socialsci.libretexts.org/Bookshelves/Geography_(Human)/Introduction_to_Human_Geography_(Dorrell_and_Henderson)/11:_Industry/11.03:_Factors_for_Location)
      slug: "manufacturing",
      title: "Manufacturing",
      objective:
        "By the end of the topic, learners should be able to define and classify manufacturing, list the factors affecting the location of manufacturing industries, and explain the importance and problems of manufacturing.",
      estimatedMinutes: 150,
      notes: `## Introduction

- **Manufacturing** — a **secondary industry** that turns raw materials into finished or semi-finished goods, for example cotton into cloth, iron into steel, or crops into food products.
- Secondary industries range from simple products (cloth, copper wire) to complex goods (cars, electronics, aircraft).

## Classification of manufacturing

Industries can be grouped by:

- **Heavy vs light** — heavy industries make bulky goods (steel, cement, machinery); light industries make smaller goods (textiles, electronics, food).
- **By raw material** — **processing** industries (turning raw materials into usable form, e.g. sawmilling) and **fabricating/assembly** industries (making finished goods from processed materials, e.g. car assembly).
- **Basic vs consumer** — basic industries supply other industries (steel, chemicals); consumer industries make goods for people (clothes, soap).

## Major industrial regions

- Large clusters of factories grow in favoured areas, e.g. Western Europe, north-east USA, Japan, and eastern China. Firms cluster (**agglomeration**) to share labour, transport and services.

## Factors affecting the location of manufacturing

- **Raw materials** — near heavy or perishable materials (e.g. iron and steel near ore/coal).
- **Power/energy** — a reliable supply of electricity or fuel.
- **Labour** — enough workers with the right skills; labour cost.
- **Capital** — money to build and run the factory.
- **Transport** — roads, railways, ports to bring materials in and send goods out.
- **Market** — nearness to the customers who buy the goods.
- **Water** supply and suitable **land (site)**.
- **Government policy** — incentives, taxes and planning rules.

\`\`\`svg Inputs and outputs of a manufacturing industry
<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Raw materials, power, labour and capital go into a factory which outputs finished goods">
  <text x="55" y="30" font-size="9" text-anchor="middle" fill="#3730a3">raw materials</text>
  <text x="55" y="55" font-size="9" text-anchor="middle" fill="#3730a3">power</text>
  <text x="55" y="80" font-size="9" text-anchor="middle" fill="#3730a3">labour + capital</text>
  <rect x="115" y="35" width="80" height="45" rx="6" fill="#c7d2fe" stroke="#3730a3"/>
  <text x="155" y="62" font-size="10" text-anchor="middle" fill="#312e81">factory</text>
  <line x1="95" y1="57" x2="115" y2="57" stroke="#3730a3" stroke-width="1.5" marker-end="url(#d)"/>
  <line x1="195" y1="57" x2="230" y2="57" stroke="#3730a3" stroke-width="1.5" marker-end="url(#d)"/>
  <text x="255" y="60" font-size="9" text-anchor="middle" fill="#3730a3">finished goods</text>
  <defs><marker id="d" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3730a3"/></marker></defs>
</svg>
\`\`\`

## Importance of manufacturing industries

- Creates **jobs** and raises incomes.
- Adds **value** to raw materials, earning more than exporting them raw.
- Provides goods people need and reduces dependence on imports.
- Earns **foreign exchange** from exported manufactures and supports other industries.

## Problems facing manufacturing industries

- Shortage of **capital, power and skilled labour**; poor transport.
- Competition from cheaper imports; small home markets.
- **Pollution** and health impacts on nearby communities.
- **Solutions:** improve power and transport, train workers, attract investment, protect infant industries, and enforce pollution controls.

## Common errors and misconceptions

- **Confusing primary and secondary industry** — **primary** industries take raw materials from nature (farming, mining); **manufacturing** is **secondary**, processing those materials into goods.
- **Thinking location is random** — factories are located to reduce costs, weighing raw materials, power, labour, transport and market.
- **Assuming heavy and light industry locate the same way** — **heavy** industry is often tied to bulky raw materials/power; **light** industry is freer to locate near the market or labour.
- **Ignoring pollution** — manufacturing can harm community health, so pollution controls matter.`,
      workedExample: `**Task.** An iron-and-steel works is being planned. (a) Classify this industry. (b) Give the two location factors that matter most and explain why. (c) State one benefit and one problem it will bring.

**Part (a) — classify the industry**
- Steel-making turns raw materials (iron ore, coal/limestone) into a product, so it is a **secondary (manufacturing)** industry. It is a **heavy, basic** industry because the goods are bulky and supply other industries.

**Part (b) — the two most important location factors**
- **Raw materials and power:** iron ore, coal and limestone are **heavy and bulky**, and huge amounts of **energy** are needed. To cut transport costs, the works is best placed **near the ore/coal fields or a port** where they can be delivered cheaply.
- Good **transport** (rail, port) is therefore also essential to move heavy inputs and finished steel.

**Part (c) — a benefit and a problem**
- **Benefit:** it creates many jobs and adds value to local ore, earning income and foreign exchange, and supplies steel to other industries.
- **Problem:** it can cause **pollution** and needs large amounts of capital and reliable power that may be scarce.

**Conclusion:** heavy industries like steel locate near bulky raw materials and power with good transport; they bring jobs and value but need capital and cause pollution.`,
      quiz: [
        {
          prompt: "Manufacturing is a… industry.",
          options: ["secondary", "primary", "tertiary", "natural"],
          correctIndex: 0,
          explanation: "Manufacturing processes raw materials, so it is secondary.",
        },
        {
          prompt: "Manufacturing turns raw materials into…",
          options: ["finished or semi-finished goods", "more raw ore", "fish", "rainfall"],
          correctIndex: 0,
          explanation: "It converts materials into usable products.",
        },
        {
          prompt: "Making steel, cement and machinery is… industry.",
          options: ["heavy", "light", "primary", "tertiary"],
          correctIndex: 0,
          explanation: "Bulky goods like steel are heavy industry.",
        },
        {
          prompt: "Making textiles, electronics and food is… industry.",
          options: ["light", "heavy", "primary", "extractive"],
          correctIndex: 0,
          explanation: "Smaller goods are light industry.",
        },
        {
          prompt: "Industries that supply other industries (steel, chemicals) are…",
          options: ["basic industries", "consumer industries", "primary industries", "farms"],
          correctIndex: 0,
          explanation: "Basic industries make inputs for other industries.",
        },
        {
          prompt: "The clustering of factories in one area to share services is…",
          options: ["agglomeration", "deflation", "irrigation", "erosion"],
          correctIndex: 0,
          explanation: "Agglomeration is the clustering of industries.",
        },
        {
          prompt: "Which is a factor affecting the location of manufacturing?",
          options: ["raw materials", "the phase of the Moon", "the colour of the factory", "the day of the week"],
          correctIndex: 0,
          explanation: "Raw materials are a key location factor.",
        },
        {
          prompt: "Heavy industries using bulky raw materials are best located…",
          options: ["near the raw materials or a port", "far from any transport", "in deserts only", "on mountain peaks"],
          correctIndex: 0,
          explanation: "Locating near bulky materials cuts transport costs.",
        },
        {
          prompt: "Which is needed to build and run a factory?",
          options: ["capital", "rainfall", "plankton", "ocean currents"],
          correctIndex: 0,
          explanation: "Capital is the money to establish and operate industry.",
        },
        {
          prompt: "Nearness to the customers who buy the goods is the… factor.",
          options: ["market", "power", "labour", "water"],
          correctIndex: 0,
          explanation: "The market is where the products are sold.",
        },
        {
          prompt: "Roads, railways and ports affect industry as the… factor.",
          options: ["transport", "labour", "capital", "climate"],
          correctIndex: 0,
          explanation: "Transport moves materials in and goods out.",
        },
        {
          prompt: "A reliable supply of electricity or fuel is the… factor.",
          options: ["power/energy", "market", "land", "climate"],
          correctIndex: 0,
          explanation: "Factories need power to run their machines.",
        },
        {
          prompt: "Which is an importance of manufacturing?",
          options: ["it creates jobs and adds value to raw materials", "it forms rivers", "it grows forests", "it makes rain"],
          correctIndex: 0,
          explanation: "Manufacturing creates jobs and adds value.",
        },
        {
          prompt: "Processing local ore into goods rather than exporting it raw…",
          options: ["adds value and earns more", "wastes the ore", "reduces all income", "removes jobs"],
          correctIndex: 0,
          explanation: "Adding value earns more than exporting raw materials.",
        },
        {
          prompt: "Which is a problem facing manufacturing?",
          options: ["shortage of capital, power and skilled labour", "too many workers", "too much cheap power", "no competition ever"],
          correctIndex: 0,
          explanation: "Weak capital, power, labour and transport hinder industry.",
        },
        {
          prompt: "Manufacturing can harm nearby communities through…",
          options: ["pollution", "reforestation", "irrigation", "upwelling"],
          correctIndex: 0,
          explanation: "Factories can pollute air, water and land.",
        },
        {
          prompt: "Protecting new local industries from cheap imports is called…",
          options: ["protecting infant industries", "over-fishing", "deforestation", "agglomeration"],
          correctIndex: 0,
          explanation: "Infant-industry protection shields young industries.",
        },
        {
          prompt: "Government policy affects industry through…",
          options: ["incentives, taxes and planning rules", "the tides", "the water cycle", "plate tectonics"],
          correctIndex: 0,
          explanation: "Policy shapes where and how industry develops.",
        },
        {
          prompt: "Which region is a major industrial cluster?",
          options: ["Japan", "the Sahara", "Antarctica", "the open ocean"],
          correctIndex: 0,
          explanation: "Japan is a major industrial region.",
        },
        {
          prompt: "Light industries are usually freer to locate near the…",
          options: ["market or labour", "iron-ore field only", "volcano", "glacier"],
          correctIndex: 0,
          explanation: "Light goods are less tied to bulky raw materials.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define manufacturing and state which sector of industry it belongs to.",
          answerKey:
            "Manufacturing is the processing of raw materials into finished or semi-finished goods. It is a secondary industry. Award marks for the definition and the sector.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "List four factors that affect the location of manufacturing industries.",
          answerKey:
            "Any four of: raw materials, power/energy, labour, capital, transport, market, water, land/site, government policy. One mark each.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A heavy industry using bulky raw materials is best located:",
          options: [
            "near the raw materials or a port",
            "far from all transport",
            "on a high mountain",
            "in the middle of a desert",
          ],
          correctIndex: 0,
          answerKey: "Locating near bulky raw materials (or a port) reduces transport costs.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State two importances of manufacturing to a country.",
          answerKey:
            "Any two of: creates jobs and raises incomes; adds value to raw materials; provides needed goods and reduces imports; earns foreign exchange; supports other industries. One mark each.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the main factors that determine where a manufacturing industry is located, and discuss the importance and problems of manufacturing.",
          answerKey:
            "A strong answer explains the location factors (raw materials, power, labour, capital, transport, market, water/land, government policy) and how they interact to reduce costs. It then discusses importance (jobs, value added, needed goods, foreign exchange, supporting other industries) and problems (shortage of capital/power/skilled labour, poor transport, import competition, pollution) with possible solutions. Award marks for location factors, importance and problems.",
          marks: 5,
        },
      ],
    },
    {
      // source: Social Sci LibreTexts — Introduction to Human Geography (Dorrell and Henderson), Industry/Services chapters; Introduction to Geography (McCormick), 2.12 Economic Geography (trade, services and transport) (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/Introduction_to_Geography_(McCormick)/02:_Human_Geography/2.12:_Economic_Geography)
      slug: "trade-commerce-and-transport",
      title: "Trade, Commerce and Transport",
      objective:
        "By the end of the topic, learners should be able to define trade and commerce and their types, and explain the meaning and means of transport and its role in development.",
      estimatedMinutes: 130,
      notes: `## Introduction

- Goods that are grown, mined or made must be **exchanged** and **moved** to the people who need them. This is the work of **trade, commerce and transport** — mostly **tertiary (service)** activities.

## Trade and commerce — definition

- **Trade** — the buying and selling (exchange) of goods and services.
- **Commerce** — trade together with all the services that support it (transport, banking, insurance, advertising, communication).

## Types of trade

- **Internal (home/domestic) trade** — buying and selling **within** a country.
- **External (foreign/international) trade** — trade **between** countries; it has two parts:
- **Import** — goods bought **from** other countries.
- **Export** — goods sold **to** other countries.
- The difference between the value of exports and imports is the **balance of trade** (favourable when exports exceed imports).

## Transport and development — definition

- **Transport** — the movement of people and goods from one place to another.
- Transport is the link that makes trade, industry and services possible; without it goods cannot reach markets.

## Means of transport

| Means | Best for |
|---|---|
| Road | flexible, door-to-door, short and medium distances |
| Rail | heavy, bulky goods over land, long distances |
| Water (sea and river) | very heavy/bulky goods, cheap over long distances |
| Air | fast, valuable or perishable goods over long distances |
| Pipeline | liquids and gases (oil, gas, water) |

## Importance of transport to development

- Moves raw materials to factories and goods to markets.
- Opens up remote areas, encouraging farming, mining and settlement.
- Creates jobs and links regions and countries in trade.
- Lowers prices by reducing the cost of moving goods.

## Common errors and misconceptions

- **Confusing trade and commerce** — **trade** is the exchange itself; **commerce** is trade **plus** the supporting services (transport, banking, insurance).
- **Mixing internal and external trade** — **internal** trade is within one country; **external** trade is between countries.
- **Confusing imports and exports** — **imports** come **in** (bought from abroad); **exports** go **out** (sold abroad).
- **Choosing the wrong transport** — bulky low-value goods go cheaply by **water/rail**; urgent, valuable or perishable goods go quickly by **air**.`,
      workedExample: `**Task.** A country sells rubber and iron ore abroad and buys machines and fuel from abroad. (a) Name this kind of trade and identify which goods are exports and which are imports. (b) Recommend a suitable means of transport for the iron ore and for urgent medical supplies, with reasons.

**Part (a) — the trade, exports and imports**
- Buying and selling **between countries** is **external (foreign/international) trade**.
- **Exports** (sold abroad): **rubber and iron ore**.
- **Imports** (bought from abroad): **machines and fuel**.
- If the value of the exports is greater than that of the imports, the country has a **favourable balance of trade**.

**Part (b) — suitable transport**
- **Iron ore** is very **heavy and bulky** but not urgent, so it is best moved cheaply by **rail to a port and then by sea (ship)** — water transport is cheapest for heavy goods over long distances.
- **Urgent medical supplies** are **valuable and time-sensitive**, so they are best moved by **air**, which is fast though costly.

**Conclusion:** external trade exchanges exports for imports, and the choice of transport depends on the weight, value and urgency of the goods.`,
      quiz: [
        {
          prompt: "Trade is the…",
          options: ["buying and selling of goods and services", "growing of crops", "mining of ore", "cutting of timber"],
          correctIndex: 0,
          explanation: "Trade is the exchange of goods and services.",
        },
        {
          prompt: "Commerce is trade together with…",
          options: ["supporting services like transport and banking", "only farming", "only mining", "the weather"],
          correctIndex: 0,
          explanation: "Commerce adds services that support trade.",
        },
        {
          prompt: "Buying and selling within a country is… trade.",
          options: ["internal (home)", "external", "foreign", "import"],
          correctIndex: 0,
          explanation: "Internal trade happens within one country.",
        },
        {
          prompt: "Trade between countries is… trade.",
          options: ["external (international)", "internal", "local", "home"],
          correctIndex: 0,
          explanation: "External trade is between countries.",
        },
        {
          prompt: "Goods bought from other countries are…",
          options: ["imports", "exports", "surpluses", "reserves"],
          correctIndex: 0,
          explanation: "Imports come into a country from abroad.",
        },
        {
          prompt: "Goods sold to other countries are…",
          options: ["exports", "imports", "tariffs", "quotas"],
          correctIndex: 0,
          explanation: "Exports are sold to other countries.",
        },
        {
          prompt: "The difference between the value of exports and imports is the…",
          options: ["balance of trade", "rate of exchange", "customs duty", "budget"],
          correctIndex: 0,
          explanation: "Balance of trade compares export and import values.",
        },
        {
          prompt: "A favourable balance of trade occurs when…",
          options: ["exports exceed imports", "imports exceed exports", "there is no trade", "prices fall"],
          correctIndex: 0,
          explanation: "Selling more than you buy is favourable.",
        },
        {
          prompt: "Transport is the movement of…",
          options: ["people and goods from place to place", "money only", "rainfall", "minerals underground"],
          correctIndex: 0,
          explanation: "Transport moves people and goods.",
        },
        {
          prompt: "Which transport is best for flexible, door-to-door short trips?",
          options: ["road", "sea", "pipeline", "air"],
          correctIndex: 0,
          explanation: "Road transport is flexible and door-to-door.",
        },
        {
          prompt: "Very heavy, bulky goods are moved most cheaply over long distances by…",
          options: ["water (sea/river)", "air", "road", "motorbike"],
          correctIndex: 0,
          explanation: "Water transport is cheapest for bulky goods.",
        },
        {
          prompt: "Fast movement of valuable or perishable goods over long distances uses…",
          options: ["air transport", "rail", "pipeline", "canoe"],
          correctIndex: 0,
          explanation: "Air is fast but costly, suiting urgent goods.",
        },
        {
          prompt: "Oil, gas and water are best transported by…",
          options: ["pipeline", "air", "bicycle", "wheelbarrow"],
          correctIndex: 0,
          explanation: "Pipelines carry liquids and gases.",
        },
        {
          prompt: "Heavy, bulky goods over land for long distances suit…",
          options: ["rail", "air", "motorbike", "canoe"],
          correctIndex: 0,
          explanation: "Rail carries heavy loads efficiently over land.",
        },
        {
          prompt: "Transport aids development by…",
          options: ["opening up remote areas and linking markets", "blocking trade", "stopping farming", "removing jobs"],
          correctIndex: 0,
          explanation: "Transport connects areas and enables trade.",
        },
        {
          prompt: "Which is a tertiary (service) activity?",
          options: ["trade and transport", "mining", "farming", "lumbering"],
          correctIndex: 0,
          explanation: "Trade and transport are service activities.",
        },
        {
          prompt: "Banking, insurance and advertising are part of…",
          options: ["commerce", "primary industry", "mining", "agriculture"],
          correctIndex: 0,
          explanation: "These services support trade, forming commerce.",
        },
        {
          prompt: "Good transport tends to lower the price of goods because it…",
          options: ["reduces the cost of moving them", "increases distances", "removes markets", "wastes fuel"],
          correctIndex: 0,
          explanation: "Cheaper movement lowers delivered prices.",
        },
        {
          prompt: "A country that imports more than it exports has a… balance of trade.",
          options: ["unfavourable", "favourable", "zero", "fixed"],
          correctIndex: 0,
          explanation: "Buying more than you sell is unfavourable.",
        },
        {
          prompt: "Which pairing is correct?",
          options: [
            "iron ore → sea/rail; urgent medicine → air",
            "iron ore → air; medicine → canoe",
            "oil → air; gas → bicycle",
            "letters → pipeline; water → plane",
          ],
          correctIndex: 0,
          explanation: "Bulky ore goes by sea/rail; urgent goods by air.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Distinguish between trade and commerce.",
          answerKey:
            "Trade is the buying and selling (exchange) of goods and services; commerce is trade plus the supporting services (transport, banking, insurance, advertising, communication). Award marks for both definitions and the distinction.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between internal and external trade, and between imports and exports.",
          answerKey:
            "Internal (home) trade is within a country; external (international) trade is between countries. Imports are goods bought from abroad; exports are goods sold abroad. Award marks for both pairs correctly explained.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which means of transport is cheapest for very heavy, bulky goods over long distances?",
          options: ["water (sea/river)", "air", "road", "pipeline"],
          correctIndex: 0,
          answerKey: "Water transport is the cheapest for heavy, bulky goods over long distances.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State two ways transport helps a country's development.",
          answerKey:
            "Any two of: moves raw materials to factories and goods to markets; opens up remote areas for farming/mining/settlement; creates jobs; links regions and countries in trade; lowers prices by cutting the cost of moving goods. One mark each.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the role of trade, commerce and transport in economic development, and compare the main means of transport.",
          answerKey:
            "A strong answer explains that trade (exchange of goods and services) and commerce (trade plus supporting services) move goods from producers to consumers, that internal and external trade (with imports and exports and the balance of trade) connect people and countries, and that transport is the link making all this possible — opening up areas, creating jobs, linking markets and lowering prices. It should compare road (flexible, short/medium), rail (heavy over land), water (cheap, bulky, long distance), air (fast, valuable/perishable) and pipeline (liquids/gases). Award marks for the roles and the comparison of transport means.",
          marks: 5,
        },
      ],
    },
    {
      // source: OpenStax — University Physics Volume 1, 8.5 Sources of Energy; CK-12 — Renewable vs Nonrenewable Energy Resources; Fundamentals of Geology (Schulte), 12.12 Earth's Energy (https://openstax.org/books/university-physics-volume-1/pages/8-5-sources-of-energy)
      slug: "sources-of-energy-location-and-distribution",
      title: "Sources of Energy, Location and Distribution",
      objective:
        "By the end of the topic, learners should be able to classify sources of energy as renewable or non-renewable, explain the main forms of energy, and analyse the factors affecting their use and importance.",
      estimatedMinutes: 145,
      notes: `## Introduction

- **Energy** powers homes, transport and industry. Its sources are grouped by whether they can be replaced.

## Classification of energy sources

- **Renewable energy** — sources that are not used up because they are replaced naturally, e.g. **solar, wind, water (hydro), tidal, geothermal, biomass**. They rarely run out and cause little pollution.
- **Non-renewable energy** — sources that took millions of years to form and will eventually run out, e.g. **coal, oil (petroleum), natural gas** and **uranium**. They are cheap and easy to transport but cause pollution.

\`\`\`svg Renewable and non-renewable energy sources
<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Renewable sources like solar and wind versus non-renewable fossil fuels">
  <rect x="10" y="15" width="130" height="90" rx="6" fill="#dcfce7" stroke="#15803d"/>
  <text x="75" y="33" font-size="10" text-anchor="middle" fill="#14532d">Renewable</text>
  <text x="75" y="52" font-size="9" text-anchor="middle" fill="#14532d">solar, wind, hydro</text>
  <text x="75" y="68" font-size="9" text-anchor="middle" fill="#14532d">tidal, geothermal</text>
  <text x="75" y="84" font-size="9" text-anchor="middle" fill="#14532d">biomass</text>
  <rect x="160" y="15" width="130" height="90" rx="6" fill="#fee2e2" stroke="#b91c1c"/>
  <text x="225" y="33" font-size="10" text-anchor="middle" fill="#7f1d1d">Non-renewable</text>
  <text x="225" y="52" font-size="9" text-anchor="middle" fill="#7f1d1d">coal, oil</text>
  <text x="225" y="68" font-size="9" text-anchor="middle" fill="#7f1d1d">natural gas</text>
  <text x="225" y="84" font-size="9" text-anchor="middle" fill="#7f1d1d">uranium</text>
</svg>
\`\`\`

## Forms of energy — mineral (fossil) fuels

- **Coal** — burned to raise steam for electricity and industry.
- **Petroleum (oil)** — refined into petrol, diesel and kerosene; also makes plastics and chemicals.
- **Natural gas** — a clean-burning fuel for cooking, heating and power.
- **Uranium** — provides **nuclear** energy through fission.

## Location and distribution of power sources

- **Hydro-electric power (HEP)** — generated from **rivers, waterfalls and dams**; needs steady water flow and a good head (drop). Located in wet, hilly areas.
- **Solar** — from **sunlight**; best in sunny areas.
- **Wind** — from moving air; best in windy, open or coastal areas.
- **Tidal** — from the rise and fall of the tide, in suitable estuaries.
- **Geothermal** — from the Earth's underground heat, in volcanic areas.
- **Biomass** — from organic material (wood, crop waste, dung) burned or turned into biogas.

## Factors affecting the use of energy sources

- **Capital** — dams, power stations and grids are costly to build.
- **Technology** — the know-how and equipment to harness the source.
- **Climate and physical conditions** — sunlight for solar, wind for turbines, rivers for HEP, volcanic heat for geothermal.
- **Demand and market** — enough users to justify the supply.
- **Environmental concerns** — pollution and safety.

## Importance of energy

- Powers industry, transport, homes, hospitals and schools.
- A reliable energy supply is essential for **development**.

## Problems and solutions of energy harnessing

- **Problems:** high cost, pollution from fossil fuels, the fact that fossil fuels **run out**, and uneven distribution.
- **Solutions:** develop **renewables**, use energy efficiently, and mix several sources for reliability.

## Common errors and misconceptions

- **Confusing renewable and non-renewable** — **renewable** sources are replaced naturally (solar, wind, hydro); **non-renewable** ones run out (coal, oil, gas, uranium).
- **Thinking hydro power comes from the sea** — HEP comes from **flowing fresh water** (rivers, waterfalls, dams); tidal power comes from the sea tides.
- **Calling nuclear renewable** — **uranium** is a mined, **non-renewable** fuel.
- **Assuming fossil fuels are clean** — fossil fuels are cheap and easy to transport but cause **pollution** and will eventually run out.`,
      workedExample: `**Task.** A hilly region has heavy rainfall, fast rivers and strong sunshine, but little money. (a) Suggest two suitable energy sources and say whether each is renewable. (b) State the main factor that may limit their development. (c) Give one advantage of renewable over non-renewable energy.

**Part (a) — two suitable sources**
- **Hydro-electric power (HEP):** the fast rivers and heavy rainfall give a steady flow and a good head for dams and turbines. HEP is **renewable**.
- **Solar power:** the strong sunshine suits solar panels. Solar is **renewable**.

**Part (b) — the limiting factor**
- The main limit is **capital (money)**: building dams, power stations and transmission lines is expensive, and the region has little money. Technology and skilled labour may also be needed.

**Part (c) — an advantage of renewables**
- Renewable sources **do not run out** and cause **little pollution**, unlike fossil fuels, which are non-renewable and pollute the air.

**Conclusion:** the region's rivers and sunshine suit renewable HEP and solar power, but the high cost of building the plants is the main obstacle.`,
      quiz: [
        {
          prompt: "Renewable energy sources are those that…",
          options: ["are replaced naturally and do not run out", "took millions of years to form", "always pollute heavily", "can only be mined"],
          correctIndex: 0,
          explanation: "Renewables are naturally replaced and rarely run out.",
        },
        {
          prompt: "Which is a renewable energy source?",
          options: ["solar", "coal", "oil", "natural gas"],
          correctIndex: 0,
          explanation: "Sunlight (solar) is renewable.",
        },
        {
          prompt: "Which is a non-renewable energy source?",
          options: ["coal", "wind", "hydro", "tidal"],
          correctIndex: 0,
          explanation: "Coal is a fossil fuel that runs out.",
        },
        {
          prompt: "Coal, oil and natural gas are together called…",
          options: ["fossil fuels", "biomass", "renewables", "geothermal"],
          correctIndex: 0,
          explanation: "These are fossil (mineral) fuels.",
        },
        {
          prompt: "Fossil fuels formed from…",
          options: ["the remains of once-living plants and animals", "sunlight only", "flowing rivers", "sea tides"],
          correctIndex: 0,
          explanation: "Fossil fuels are the remains of ancient life.",
        },
        {
          prompt: "Uranium is used to produce… energy.",
          options: ["nuclear", "tidal", "wind", "solar"],
          correctIndex: 0,
          explanation: "Uranium fuels nuclear (fission) power.",
        },
        {
          prompt: "Hydro-electric power is generated from…",
          options: ["rivers, waterfalls and dams", "sunlight", "the wind", "underground heat"],
          correctIndex: 0,
          explanation: "HEP uses flowing or falling fresh water.",
        },
        {
          prompt: "Energy from the Earth's underground heat is…",
          options: ["geothermal", "solar", "tidal", "biomass"],
          correctIndex: 0,
          explanation: "Geothermal taps the Earth's internal heat.",
        },
        {
          prompt: "Energy from the rise and fall of the sea is…",
          options: ["tidal", "hydro", "wind", "nuclear"],
          correctIndex: 0,
          explanation: "Tidal power uses the movement of the tides.",
        },
        {
          prompt: "Energy from wood, crop waste and dung is…",
          options: ["biomass", "solar", "geothermal", "uranium"],
          correctIndex: 0,
          explanation: "Biomass energy comes from organic material.",
        },
        {
          prompt: "Solar power is best developed in areas with…",
          options: ["plenty of sunshine", "little sun", "no wind", "cold darkness"],
          correctIndex: 0,
          explanation: "Solar needs strong, reliable sunlight.",
        },
        {
          prompt: "Wind power is best in areas that are…",
          options: ["windy and open or coastal", "calm and sheltered", "deep underground", "always cloudy"],
          correctIndex: 0,
          explanation: "Wind turbines need steady, strong winds.",
        },
        {
          prompt: "A major factor limiting new power projects is…",
          options: ["capital (cost)", "the phase of the Moon", "the colour of the plant", "the day of the week"],
          correctIndex: 0,
          explanation: "Building dams and stations is very costly.",
        },
        {
          prompt: "Which is an advantage of renewable energy?",
          options: ["it does not run out and pollutes little", "it always runs out quickly", "it is always the cheapest", "it needs no site"],
          correctIndex: 0,
          explanation: "Renewables are sustainable and low-polluting.",
        },
        {
          prompt: "Which is an advantage of fossil fuels?",
          options: ["cheap and easy to transport", "never run out", "cause no pollution", "need no technology"],
          correctIndex: 0,
          explanation: "Fossil fuels are cheap and transportable, but pollute.",
        },
        {
          prompt: "Why is a reliable energy supply important?",
          options: ["it is essential for development", "it stops trade", "it removes jobs", "it cools the Sun"],
          correctIndex: 0,
          explanation: "Energy powers industry, homes and services.",
        },
        {
          prompt: "A problem with fossil fuels is that they…",
          options: ["pollute and will eventually run out", "are unlimited", "cause no harm", "need no mining"],
          correctIndex: 0,
          explanation: "Fossil fuels pollute and are non-renewable.",
        },
        {
          prompt: "Geothermal energy is best located in…",
          options: ["volcanic areas", "deserts with no heat", "the deep ocean floor only", "polar ice"],
          correctIndex: 0,
          explanation: "Geothermal needs accessible underground heat, as in volcanic zones.",
        },
        {
          prompt: "Which statement is correct?",
          options: [
            "hydro power uses fresh flowing water; tidal power uses sea tides",
            "hydro power uses sea tides; tidal uses rivers",
            "both use sunlight",
            "both use coal",
          ],
          correctIndex: 0,
          explanation: "HEP uses rivers/dams; tidal uses the tides.",
        },
        {
          prompt: "Mixing several energy sources helps by…",
          options: ["giving a more reliable supply", "guaranteeing blackouts", "wasting energy", "removing all power"],
          correctIndex: 0,
          explanation: "A varied energy mix improves reliability.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Classify energy sources into renewable and non-renewable, giving two examples of each.",
          answerKey:
            "Renewable (any two): solar, wind, hydro, tidal, geothermal, biomass. Non-renewable (any two): coal, oil/petroleum, natural gas, uranium. Award marks for the correct classification and examples.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State three factors that affect the use of a source of energy.",
          answerKey:
            "Any three of: capital/cost, technology, climate/physical conditions (sun, wind, rivers, geothermal heat), demand/market, environmental concerns. One mark each.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which source is renewable?",
          options: ["hydro-electric power", "coal", "petroleum", "uranium"],
          correctIndex: 0,
          answerKey: "Hydro-electric power is renewable; the others are non-renewable.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give one advantage and one disadvantage of fossil fuels.",
          answerKey:
            "Advantage: cheap and easy to transport (and reliable). Disadvantage: they cause pollution and are non-renewable (will run out). Award a mark each.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Compare renewable and non-renewable energy sources, and explain the factors that decide which sources a country develops.",
          answerKey:
            "A strong answer contrasts renewable sources (solar, wind, hydro, tidal, geothermal, biomass — naturally replaced, low pollution, but often costly to set up and location-dependent) with non-renewable sources (coal, oil, gas, uranium — cheap and transportable but polluting and finite). It then explains the factors deciding development: capital, technology, physical/climatic conditions (sun, wind, rivers, geothermal heat), demand/market and environmental concerns. Award marks for the comparison and the factors.",
          marks: 5,
        },
      ],
    },
  ],
};
