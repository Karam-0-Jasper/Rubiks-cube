import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Geography, Grade 11,
// Semester One, Period III, Unit 1 Physical Geography — Climatology:
// Topic 1 Effects of Weather and Climatic Elements; Topic 2 Climatic
// Classification and Climatic Regions.
export const geographyG11P3: PeriodContent = {
  grade: 11,
  number: 3,
  title: "Weather, Climate and Climatic Regions",
  summary:
    "Period III of the MoE Grade 11 Geography syllabus. Learners distinguish weather from climate, name and measure their elements, analyse climatic data, and then study how climates are classified (the ancient Greek and the Köppen systems) and the world's main climatic regions from equatorial to polar.",
  topics: [
    {
      // source: Geosciences LibreTexts — Earth Science (Lumen), 13.01 Weather Processes and Systems; California Geography (Patrich), 3.04 Elements of Climate; CK-12 weather-station instruments (https://geo.libretexts.org/Courses/Lumen_Learning/Earth_Science_(Lumen)/13:_Weather/13.01:_Weather_Processes_and_Systems)
      slug: "effects-of-weather-and-climatic-elements",
      title: "Effects of Weather and Climatic Elements",
      objective:
        "By the end of the topic, learners should be able to differentiate weather from climate, list and measure the elements of weather and climate, and calculate and analyse simple climatic data.",
      estimatedMinutes: 155,
      notes: `## Introduction

- **Weather** and **climate** both describe the state of the atmosphere, but over very different time scales.

## Weather — definition

- **Weather** — the state of the atmosphere at a particular place and time. It can change from hour to hour and day to day.

## Elements of weather

The main **elements** (measurable conditions) are:

- **Temperature** — how hot or cold the air is.
- **Humidity** — the amount of water vapour in the air.
- **Rainfall (precipitation)** — water falling as rain, hail, sleet or snow.
- **Atmospheric pressure** — the weight of the air.
- **Wind** — moving air (its speed and direction).
- **Cloud cover** and **sunshine**.

## The weather station and its instruments

A **weather station** is a place where the elements of weather are measured. Its instruments include:

| Instrument | Measures |
|---|---|
| Thermometer | air temperature |
| Barometer | atmospheric pressure |
| Hygrometer | humidity |
| Rain gauge | rainfall |
| Anemometer | wind speed |
| Wind vane | wind direction |

## Weather record and attributes of weather

- A **weather record** is the set of readings (temperature, humidity, rainfall, pressure, wind) taken at a station over time.
- **Attributes of weather:** it is **short-term**, **local**, and **changes quickly**.
- **Importance of weather:** guides daily activities (farming, fishing, travel, aviation), warns of storms and floods, and helps planning.

## Climate — definition

- **Climate** — the average weather of a place taken over a long period (usually 30 years or more). Climate is steady and changes only slowly.

## Differences between weather and climate

| Weather | Climate |
|---|---|
| state of the atmosphere now | average over many years |
| changes quickly (hours, days) | changes slowly |
| local | describes a whole region |
| measured directly at a station | worked out from long records |

## Factors affecting climate

- **Latitude** — places near the equator are hotter than places near the poles.
- **Altitude** — temperature falls with height, so highlands are cooler.
- **Distance from the sea** — the sea keeps coasts mild; interiors have greater extremes.
- **Ocean currents** — warm currents warm nearby coasts; cool currents cool them.
- **Prevailing winds** — bring warm or cool, wet or dry air.
- **Relief (mountains)** — force air to rise, giving rain on the windward side and a dry "rain shadow" on the leeward side.

## Elements of climate

- The same elements as weather, but expressed as **long-term averages**: mean temperature, average rainfall, average humidity, prevailing winds.

## The climatograph (climate graph)

- A **climatograph (climograph)** is a graph showing a place's **average monthly temperature** (as a line) and **average monthly rainfall** (as bars) through the year.

## Analysing climatic data

- **Mean monthly temperature** — read directly for each month.
- **Mean annual temperature** — add the 12 monthly means and divide by 12.
- **Temperature range (annual)** — hottest monthly mean minus coldest monthly mean.
- **Total annual rainfall** — add the 12 monthly rainfall figures.

## Importance of climate

- Determines the **natural vegetation** and the **crops** that can grow.
- Shapes **farming, housing, clothing** and ways of life.
- Guides where people settle and what economic activities suit an area.

## Common errors and misconceptions

- **Confusing weather and climate** — weather is **now** and changes fast; climate is the **long-term average** and changes slowly.
- **Mixing up instruments** — a **thermometer** measures temperature, a **barometer** pressure, a **hygrometer** humidity, a **rain gauge** rainfall, an **anemometer** wind speed.
- **Confusing latitude and altitude** — **latitude** is distance from the equator; **altitude** is height above sea level; both cool a place but for different reasons.
- **Reading a climatograph wrongly** — temperature is the **line**; rainfall is the **bars**.`,
      workedExample: `**Task.** A station records these mean monthly temperatures (°C): Jan 24, Feb 25, Mar 26, Apr 27, May 27, Jun 26, Jul 25, Aug 25, Sep 26, Oct 26, Nov 25, Dec 24. (a) Find the mean annual temperature. (b) Find the annual temperature range. (c) Name the instrument used to measure temperature.

**Part (a) — mean annual temperature**
- Add the twelve months: 24+25+26+27+27+26+25+25+26+26+25+24 = 306.
- Divide by 12: 306 ÷ 12 = **25.5 °C**.

**Part (b) — annual temperature range**
- Hottest monthly mean = 27 °C (April/May); coldest monthly mean = 24 °C (January/December).
- Range = 27 − 24 = **3 °C**.

**Part (c) — the instrument**
- Temperature is measured with a **thermometer**.

**Interpretation:** a mean of about 25.5 °C with a very small range of only 3 °C shows a hot climate with little change through the year — typical of an equatorial location.`,
      quiz: [
        {
          prompt: "Weather is the state of the atmosphere…",
          options: ["at a particular place and time", "averaged over 30 years", "only at the equator", "deep underground"],
          correctIndex: 0,
          explanation: "Weather is the here-and-now condition of the atmosphere.",
        },
        {
          prompt: "Climate is best defined as…",
          options: ["the average weather over a long period", "today's temperature", "a single rainstorm", "the wind at noon"],
          correctIndex: 0,
          explanation: "Climate is long-term average weather (usually 30+ years).",
        },
        {
          prompt: "Which is an element of weather?",
          options: ["temperature", "latitude", "altitude", "ocean current"],
          correctIndex: 0,
          explanation: "Temperature is a measurable weather element; the others are factors.",
        },
        {
          prompt: "Air temperature is measured with a…",
          options: ["thermometer", "barometer", "rain gauge", "anemometer"],
          correctIndex: 0,
          explanation: "A thermometer measures temperature.",
        },
        {
          prompt: "Atmospheric pressure is measured with a…",
          options: ["barometer", "hygrometer", "wind vane", "thermometer"],
          correctIndex: 0,
          explanation: "A barometer measures pressure.",
        },
        {
          prompt: "The amount of water vapour in the air is measured with a…",
          options: ["hygrometer", "rain gauge", "anemometer", "barometer"],
          correctIndex: 0,
          explanation: "A hygrometer measures humidity.",
        },
        {
          prompt: "Wind speed is measured with an…",
          options: ["anemometer", "wind vane", "hygrometer", "thermometer"],
          correctIndex: 0,
          explanation: "An anemometer measures wind speed; a wind vane shows direction.",
        },
        {
          prompt: "Rainfall is measured with a…",
          options: ["rain gauge", "barometer", "anemometer", "hygrometer"],
          correctIndex: 0,
          explanation: "A rain gauge collects and measures rainfall.",
        },
        {
          prompt: "Which best describes a difference between weather and climate?",
          options: [
            "weather changes quickly; climate changes slowly",
            "weather is an average; climate is instant",
            "they are exactly the same",
            "climate is measured hourly",
          ],
          correctIndex: 0,
          explanation: "Weather is short-term and variable; climate is a long-term average.",
        },
        {
          prompt: "Places near the equator are hotter than places near the poles because of…",
          options: ["latitude", "altitude", "rainfall", "wind vanes"],
          correctIndex: 0,
          explanation: "Latitude controls how directly the Sun's rays strike.",
        },
        {
          prompt: "Temperature falls as you climb a mountain because of…",
          options: ["altitude", "latitude", "ocean currents", "humidity"],
          correctIndex: 0,
          explanation: "Higher altitude means lower air temperature.",
        },
        {
          prompt: "A warm ocean current will usually make a nearby coast…",
          options: ["warmer", "colder", "drier only", "windless"],
          correctIndex: 0,
          explanation: "Warm currents raise the temperature of nearby coasts.",
        },
        {
          prompt: "The dry area on the sheltered side of a mountain is the…",
          options: ["rain shadow", "windward slope", "delta", "estuary"],
          correctIndex: 0,
          explanation: "Air descends and dries on the leeward side, forming a rain shadow.",
        },
        {
          prompt: "A climatograph shows a place's average monthly…",
          options: ["temperature and rainfall", "pressure and wind only", "humidity and sunshine only", "latitude and altitude"],
          correctIndex: 0,
          explanation: "A climatograph plots temperature (line) and rainfall (bars).",
        },
        {
          prompt: "On a climatograph, rainfall is usually shown as…",
          options: ["bars", "a line", "dots", "arrows"],
          correctIndex: 0,
          explanation: "Rainfall is drawn as bars; temperature as a line.",
        },
        {
          prompt: "To find the mean annual temperature you…",
          options: [
            "add the 12 monthly means and divide by 12",
            "add only the hottest two months",
            "subtract the coldest from the hottest",
            "count the rainy days",
          ],
          correctIndex: 0,
          explanation: "The annual mean is the average of the 12 monthly means.",
        },
        {
          prompt: "The annual temperature range is the…",
          options: [
            "hottest monthly mean minus the coldest monthly mean",
            "total of all 12 months",
            "average rainfall",
            "highest wind speed",
          ],
          correctIndex: 0,
          explanation: "Range = warmest month mean − coldest month mean.",
        },
        {
          prompt: "Which is an importance of studying climate?",
          options: [
            "it shows what crops and vegetation an area can support",
            "it predicts earthquakes",
            "it measures the depth of rivers",
            "it locates minerals",
          ],
          correctIndex: 0,
          explanation: "Climate determines vegetation, crops and ways of life.",
        },
        {
          prompt: "An attribute of weather is that it is…",
          options: ["short-term and changes quickly", "always the same", "averaged over centuries", "the same worldwide"],
          correctIndex: 0,
          explanation: "Weather is short-term, local and variable.",
        },
        {
          prompt: "The instrument that shows wind direction is the…",
          options: ["wind vane", "anemometer", "barometer", "rain gauge"],
          correctIndex: 0,
          explanation: "A wind vane points to the direction the wind comes from.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Distinguish between weather and climate.",
          answerKey:
            "Weather is the state of the atmosphere at a particular place and time and changes quickly (hours/days); climate is the average weather of a place over a long period (usually 30+ years) and changes slowly. Award marks for both definitions and the time-scale contrast.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name four weather instruments and state what each measures.",
          answerKey:
            "Any four of: thermometer – temperature; barometer – pressure; hygrometer – humidity; rain gauge – rainfall; anemometer – wind speed; wind vane – wind direction. One mark each.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Monthly means (°C): 26, 27, 28, 28, 27, 26, 25, 25, 26, 27, 27, 26. What is the annual temperature range?",
          options: ["3 °C", "26.5 °C", "28 °C", "25 °C"],
          correctIndex: 0,
          answerKey: "Range = hottest (28) − coldest (25) = 3 °C.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State three factors that affect the climate of a place.",
          answerKey:
            "Any three of: latitude, altitude, distance from the sea, ocean currents, prevailing winds, relief (mountains/rain shadow). One mark each.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how latitude, altitude and distance from the sea each influence the climate of a place, giving an example of each.",
          answerKey:
            "A strong answer explains: latitude – low latitudes receive more direct sunlight and are hotter (equator) than high latitudes (poles); altitude – temperature falls with height, so highlands are cooler than nearby lowlands; distance from the sea – coasts are moderated by the sea (mild, small range) while interiors have greater extremes (continentality). Should give an example for each. Award marks for each factor correctly explained with an example.",
          marks: 5,
        },
      ],
    },
    {
      // source: Geosciences LibreTexts — The Physical Environment (Ritter), 1.4.2 Geographical Zones (ancient Greek torrid/temperate/frigid zones) and 9.03 Climate Classification; Physical Geography and Natural Disasters (Dastrup), 10.03 Köppen Classification System (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/Physical_Geography_and_Natural_Disasters_(Dastrup)/10:_Global_Climates_and_Change/10.03:_Koppen_Classification_System)
      slug: "climatic-classification-and-climatic-regions",
      title: "Climatic Classification and Climatic Regions",
      objective:
        "By the end of the topic, learners should be able to describe the ancient Greek and the Köppen systems of climate classification, state the basis and the advantages and disadvantages of each, and identify the world's main climatic regions.",
      estimatedMinutes: 155,
      notes: `## Introduction

- Because the world's climates vary so much, geographers **classify** them into groups so they can be compared and mapped.

## The ancient Greek classification

- The ancient Greeks made the first simple classification, based on the link between **temperature and latitude**, dividing the Earth into three kinds of zone (five zones in all):
- **Torrid zone** — the hot zone straddling the equator, between the Tropic of Cancer (23.5° N) and the Tropic of Capricorn (23.5° S).
- **Temperate zones** — two mild zones, one in each hemisphere, between the tropics and the polar circles.
- **Frigid zones** — two cold zones, inside the Arctic Circle and the Antarctic Circle.
- **Basis:** latitude (angle of the Sun) alone.

\`\`\`svg The ancient Greek climatic zones
<svg viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Earth divided into frigid, temperate and torrid zones by latitude">
  <rect x="40" y="10" width="80" height="24" fill="#bfdbfe"/><text x="80" y="26" font-size="9" text-anchor="middle" fill="#1e3a8a">Frigid</text>
  <rect x="40" y="34" width="80" height="40" fill="#86efac"/><text x="80" y="58" font-size="9" text-anchor="middle" fill="#14532d">Temperate</text>
  <rect x="40" y="74" width="80" height="52" fill="#fca5a5"/><text x="80" y="103" font-size="9" text-anchor="middle" fill="#7f1d1d">Torrid</text>
  <rect x="40" y="126" width="80" height="40" fill="#86efac"/><text x="80" y="150" font-size="9" text-anchor="middle" fill="#14532d">Temperate</text>
  <rect x="40" y="166" width="80" height="24" fill="#bfdbfe"/><text x="80" y="182" font-size="9" text-anchor="middle" fill="#1e3a8a">Frigid</text>
</svg>
\`\`\`

## The Köppen classification

- **Köppen's system** is one of the most widely used. It is an **empirical** system (based on measured data), using **average temperature and precipitation**.
- It divides the world into five main groups, each given a capital letter:

| Letter | Group | Main feature |
|---|---|---|
| A | Tropical | hot; every month above 18 °C |
| B | Dry (arid) | evaporation exceeds precipitation |
| C | Warm temperate | mild; warm summers, cool winters |
| D | Continental (snow) | cold winters, warm summers |
| E | Polar | very cold; no warm summer |

## Basis for the two classifications

- **Greek:** based only on **latitude/temperature** (simple zones).
- **Köppen:** based on **temperature and precipitation** figures (measured data), which also reflect the natural vegetation.

## Advantages and disadvantages

- **Greek classification** — *Advantage:* very simple and easy to understand. *Disadvantage:* too broad; it ignores rainfall and the effects of altitude, winds and ocean currents.
- **Köppen classification** — *Advantage:* easy to apply, needs little data, and matches vegetation belts. *Disadvantage:* boundaries are drawn from fixed figures, so it can be rigid and does not explain the **causes** of climate (a genetic system would).

## The world's main climatic regions

| Region | Location | Climate |
|---|---|---|
| Equatorial | around the equator | hot and wet all year; heavy convectional rain |
| Tropical (savanna) | 5°–15° N and S | hot, with a wet and a dry season |
| Hot desert | around 20°–30° N and S | very hot days, cold nights, almost no rain |
| Mediterranean | west coasts, 30°–45° | hot dry summers, warm wet winters |
| Warm temperate | 30°–40°, east coasts and interiors | warm summers, mild winters, rain all year |
| Cool temperate | 40°–60° | warm summers, cold winters, rain all year |
| Cold temperate (continental) | 50°–70° interiors | short warm summers, long very cold winters |
| Polar | inside the polar circles | freezing all year; little precipitation |

- **Cold desert** — dry regions in continental interiors or high latitudes (e.g. Gobi), cold in winter and dry all year.

## Common errors and misconceptions

- **Thinking Köppen ignores rainfall** — Köppen uses **both** temperature **and** precipitation; it was the Greek zones that used latitude alone.
- **Confusing the torrid and temperate zones** — the **torrid** zone is the hot equatorial belt; the **temperate** zones are the mild middle-latitude belts.
- **Mixing equatorial with tropical savanna** — **equatorial** is wet **all year**; **tropical (savanna)** has a clear **dry season**.
- **Assuming all deserts are hot** — there are **cold deserts** (e.g. Gobi) as well as hot ones.`,
      workedExample: `**Task.** (a) State the basis of the ancient Greek classification and name its three types of zone. (b) A place has every month above 18 °C and heavy rain all year. Give its Köppen main group and name the climatic region.

**Part (a) — the Greek classification**
- **Basis:** latitude (the angle and strength of the Sun's rays), which controls temperature.
- **Three types of zone:** the **torrid** (hot) zone at the equator, the two **temperate** (mild) zones in the middle latitudes, and the two **frigid** (cold) zones at the poles.

**Part (b) — the Köppen group and region**
- Every month above 18 °C with heavy rain all year is the tropical group.
- **Köppen main group:** **A (Tropical).**
- **Climatic region:** **equatorial** — hot and wet throughout the year with heavy convectional rainfall.

**Conclusion:** the Greek system sorts climate by latitude alone into torrid, temperate and frigid zones, while Köppen uses measured temperature and rainfall, placing a hot, wet, all-year climate in group A (equatorial).`,
      quiz: [
        {
          prompt: "Climates are classified so that geographers can…",
          options: ["compare and map them", "make them warmer", "stop the rain", "create weather"],
          correctIndex: 0,
          explanation: "Classification groups similar climates for study and mapping.",
        },
        {
          prompt: "The ancient Greek classification was based on…",
          options: ["latitude and temperature", "rainfall only", "wind speed", "soil type"],
          correctIndex: 0,
          explanation: "The Greeks used the link between latitude and temperature.",
        },
        {
          prompt: "The hot Greek zone straddling the equator is the…",
          options: ["torrid zone", "temperate zone", "frigid zone", "polar zone"],
          correctIndex: 0,
          explanation: "The torrid zone lies between the two tropics.",
        },
        {
          prompt: "The cold Greek zones inside the polar circles are the…",
          options: ["frigid zones", "torrid zones", "temperate zones", "savanna zones"],
          correctIndex: 0,
          explanation: "The frigid zones lie within the Arctic and Antarctic Circles.",
        },
        {
          prompt: "The Köppen system is based on…",
          options: ["temperature and precipitation", "latitude only", "altitude only", "wind direction"],
          correctIndex: 0,
          explanation: "Köppen uses measured temperature and precipitation.",
        },
        {
          prompt: "In Köppen's system, group A stands for…",
          options: ["tropical", "dry", "polar", "continental"],
          correctIndex: 0,
          explanation: "A = tropical (every month above 18 °C).",
        },
        {
          prompt: "In Köppen's system, group B stands for…",
          options: ["dry (arid)", "tropical", "temperate", "polar"],
          correctIndex: 0,
          explanation: "B = dry climates where evaporation exceeds precipitation.",
        },
        {
          prompt: "In Köppen's system, group E stands for…",
          options: ["polar", "tropical", "dry", "warm temperate"],
          correctIndex: 0,
          explanation: "E = polar climates, very cold with no warm summer.",
        },
        {
          prompt: "A system based on measured, observable data (like Köppen) is called…",
          options: ["empirical", "genetic", "applied", "imaginary"],
          correctIndex: 0,
          explanation: "Empirical systems use observed temperature and rainfall.",
        },
        {
          prompt: "An advantage of the Köppen system is that it…",
          options: ["is easy to apply and matches vegetation", "explains the causes of climate fully", "needs no data", "ignores rainfall"],
          correctIndex: 0,
          explanation: "It is simple, low-data and reflects vegetation belts.",
        },
        {
          prompt: "A disadvantage of the ancient Greek classification is that it…",
          options: ["ignores rainfall, winds and altitude", "is too detailed", "needs computers", "uses too much data"],
          correctIndex: 0,
          explanation: "It is too broad and uses latitude alone.",
        },
        {
          prompt: "The equatorial climatic region is…",
          options: ["hot and wet all year", "cold and dry", "hot with a long dry season", "mild with wet winters"],
          correctIndex: 0,
          explanation: "The equatorial region is hot and wet throughout the year.",
        },
        {
          prompt: "The tropical (savanna) region differs from equatorial in having…",
          options: ["a distinct dry season", "rain every day", "snow", "no sunshine"],
          correctIndex: 0,
          explanation: "Savanna has clear wet and dry seasons.",
        },
        {
          prompt: "The Mediterranean region has…",
          options: ["hot dry summers and warm wet winters", "rain only in summer", "cold dry summers", "no seasons"],
          correctIndex: 0,
          explanation: "Mediterranean climates have dry summers and wet winters.",
        },
        {
          prompt: "Hot deserts are found mainly around…",
          options: ["20°–30° north and south", "the equator", "the poles", "60° latitude"],
          correctIndex: 0,
          explanation: "Subtropical highs at ~20°–30° give hot deserts.",
        },
        {
          prompt: "Which region has freezing temperatures all year and little precipitation?",
          options: ["polar", "equatorial", "Mediterranean", "savanna"],
          correctIndex: 0,
          explanation: "Polar regions are cold and dry year-round.",
        },
        {
          prompt: "Which statement about deserts is correct?",
          options: ["there are both hot and cold deserts", "all deserts are hot", "deserts have heavy rain", "deserts are only polar"],
          correctIndex: 0,
          explanation: "Cold deserts (e.g. Gobi) exist as well as hot deserts.",
        },
        {
          prompt: "A cool temperate region typically has…",
          options: ["warm summers, cold winters and rain all year", "no winter", "rain only at night", "constant heat"],
          correctIndex: 0,
          explanation: "Cool temperate climates have four seasons and year-round rain.",
        },
        {
          prompt: "Compared with the Greek zones, Köppen also uses…",
          options: ["precipitation data", "only latitude", "star positions", "ocean depth"],
          correctIndex: 0,
          explanation: "Köppen adds precipitation to temperature.",
        },
        {
          prompt: "A system that classifies climate by its causes (radiation, air masses) is…",
          options: ["genetic", "empirical", "Greek", "Köppen"],
          correctIndex: 0,
          explanation: "Genetic systems use the causes of climate, not just data.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the three types of zone in the ancient Greek classification and state what each is based on.",
          answerKey:
            "Torrid (hot, equatorial), temperate (mild, middle latitudes) and frigid (cold, polar) zones. They are based on latitude/temperature (the angle and strength of the Sun's rays). Award marks for the three zones and the basis.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State the basis of the Köppen classification and name its five main groups.",
          answerKey:
            "Köppen is based on temperature and precipitation. The five groups are A tropical, B dry, C warm temperate, D continental/snow, E polar. Award marks for the basis and the five groups.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which climatic region is hot and wet all year with heavy convectional rain?",
          options: ["equatorial", "Mediterranean", "hot desert", "polar"],
          correctIndex: 0,
          answerKey: "The equatorial region is hot and wet throughout the year.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give one advantage and one disadvantage of the Köppen classification.",
          answerKey:
            "Advantage: easy to apply, needs little data, and matches vegetation belts. Disadvantage: its fixed boundaries are rigid and it does not explain the causes of climate (a genetic system would). Award a mark each.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Compare the ancient Greek and Köppen systems of climate classification, and describe three contrasting climatic regions.",
          answerKey:
            "A strong answer contrasts the two systems: the Greek system uses latitude/temperature alone to give torrid, temperate and frigid zones (simple but broad, ignoring rainfall); Köppen uses measured temperature and precipitation to give groups A–E (empirical, matches vegetation, but rigid and non-explanatory). It should then describe three contrasting regions, e.g. equatorial (hot, wet all year), hot desert (very hot, almost no rain) and polar (freezing, dry). Award marks for the comparison of the two systems and for three clearly contrasted regions.",
          marks: 5,
        },
      ],
    },
  ],
};
