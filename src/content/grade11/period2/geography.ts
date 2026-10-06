import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Geography, Grade 11,
// Semester One, Period II, Unit 1 Physical Geography — Environment:
// Hydrological Cycle and Underground Water; Atmosphere; and Atmospheric
// Pressure and Air Pollution in Liberia.
export const geographyG11P2: PeriodContent = {
  grade: 11,
  number: 2,
  title: "Water and the Atmosphere",
  summary:
    "Period II of the MoE Grade 11 Geography syllabus. Learners follow water through the hydrological cycle and underground, then study the atmosphere — its composition, layers and importance — and the pressure differences and winds it produces, ending with the causes, effects and control of air pollution.",
  topics: [
    {
      // source: Geosciences LibreTexts — The Physical Environment (Ritter), 10.02 The Hydrologic Cycle; and Introduction to Earth Science (GEOL 121), 3.04 The Hydrologic Cycle (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/The_Physical_Environment_(Ritter)/10:_The_Hydrosphere/10.02:_The_Hydrologic_Cycle)
      slug: "hydrological-cycle-and-underground-water",
      title: "Hydrological Cycle and Underground Water",
      objective:
        "By the end of the topic, learners should be able to explain the hydrological cycle and its terms, define underground water and its associated terms, and describe the surface and underground features produced by groundwater.",
      estimatedMinutes: 150,
      notes: `## Introduction

- Water is never still: it moves endlessly between the oceans, the air, the land and living things.
- **This topic:** the **hydrological (water) cycle**, and the water stored and moving **underground**.

## The hydrological cycle — definition

- **Hydrological cycle** — the continuous movement of water between the oceans, the atmosphere and the land, powered by the Sun and gravity.
- Because water is neither created nor destroyed, the total amount stays the same; it only changes form and place.

## Terms associated with the hydrological cycle

- **Evaporation** — water changes from liquid to vapour, mainly from the oceans, when heated by the Sun.
- **Transpiration** — water vapour released from plant leaves.
- **Condensation** — rising vapour cools and turns back into tiny water droplets, forming **clouds**.
- **Precipitation** — droplets join, grow heavy and fall as rain, snow, sleet or hail.
- **Overland flow (surface run-off)** — water flowing over the ground into streams and rivers.
- **Infiltration** — water soaking down into the soil.
- **Throughflow / percolation** — water moving down and sideways through soil and rock.

\`\`\`svg The hydrological cycle
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The water cycle showing evaporation, condensation, precipitation and run-off">
  <rect x="0" y="130" width="200" height="50" fill="#3b82f6"/>
  <rect x="200" y="120" width="120" height="60" fill="#65a30d"/>
  <ellipse cx="150" cy="40" rx="55" ry="22" fill="#cbd5e1"/>
  <text x="150" y="44" font-size="10" text-anchor="middle" fill="#334155">clouds (condensation)</text>
  <path d="M70,125 C70,90 70,70 110,58" fill="none" stroke="#0ea5e9" stroke-width="2" marker-end="url(#b)"/>
  <text x="45" y="95" font-size="9" fill="#0369a1">evaporation</text>
  <line x1="200" y1="65" x2="200" y2="115" stroke="#1d4ed8" stroke-width="2" marker-end="url(#b)"/>
  <text x="205" y="95" font-size="9" fill="#1e3a8a">precipitation</text>
  <path d="M260,120 C245,130 220,132 205,133" fill="none" stroke="#0ea5e9" stroke-width="2" marker-end="url(#b)"/>
  <text x="235" y="118" font-size="9" fill="#0369a1">run-off</text>
  <defs><marker id="b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0369a1"/></marker></defs>
</svg>
\`\`\`

## Importance of the hydrological cycle

- Renews fresh water for drinking, farming and industry.
- Distributes rainfall over the land; feeds rivers, lakes and springs.
- Refills underground water stores; supports all plant and animal life.

## Underground water — definition

- **Underground (ground) water** — water that has soaked into the soil and rock and is stored in the pore spaces and cracks below the surface.

## Terms associated with ground water

- **Zone of aeration** — the upper zone where pores hold both air and water.
- **Zone of saturation (zone of permanent saturation)** — the lower zone where all the pore spaces are completely filled with water.
- **Water table** — the upper surface of the zone of saturation; it rises in wet seasons and falls in dry ones.
- **Aquifer** — a body of permeable rock that holds and transmits water.
- **Spring** — a natural flow of ground water onto the surface, often where the water table meets a hillside.
- **Well** — a hole dug or drilled down to below the water table to reach ground water.
- **Artesian basin** — a saucer-shaped structure of permeable rock between impermeable layers; water rises up a bore under its own pressure as an **artesian well**.

## Importance of underground water

- A vital source of drinking water, especially from wells and springs.
- Supplies water for farming and livestock in dry areas.
- Keeps rivers flowing during dry seasons (base flow).

## Features produced by ground water

Where ground water dissolves limestone (**karst** areas), it makes distinctive features:

- **Stalactite** — an icicle-like deposit hanging from a cave roof (grows **down** from the ceiling).
- **Stalagmite** — a deposit building **up** from a cave floor.
- **Pillar (column)** — formed when a stalactite and stalagmite join.
- These form as water carrying dissolved lime drips into a cave and slowly deposits the lime.

## Common errors and misconceptions

- **Thinking water is used up** — the hydrological cycle **recycles** the same water endlessly; the amount stays constant.
- **Confusing infiltration with run-off** — **infiltration** soaks **into** the ground; **overland flow** runs **over** the surface.
- **Confusing stalactite and stalagmite** — a stalac**t**ite hangs from the **top** (ceiling); a stalag**m**ite rises from the ground.
- **Confusing the water table with an aquifer** — the **water table** is a surface (the top of saturation); an **aquifer** is the water-bearing rock itself.`,
      workedExample: `**Task.** (a) Put these hydrological-cycle processes in order for a drop of ocean water that ends up in a river: infiltration, evaporation, condensation, precipitation, run-off. (b) Explain how a stalactite forms.

**Part (a) — the correct order**
1. **Evaporation** — the Sun heats the ocean and the drop rises as vapour.
2. **Condensation** — the vapour cools high up and forms cloud droplets.
3. **Precipitation** — droplets grow heavy and fall as rain onto the land.
4. **Infiltration / run-off** — some rain soaks in (infiltration); the rest flows over the surface as **run-off** into a river.

So: evaporation → condensation → precipitation → run-off (with some infiltration).

**Part (b) — formation of a stalactite**
- Rainwater seeps through limestone, dissolving lime and becoming lime-rich.
- It drips slowly from a cave roof. As each drop hangs, a little water evaporates and lime is deposited.
- Over long ages the deposits build an icicle-like column growing **down** from the ceiling — a **stalactite**. (A matching **stalagmite** grows **up** from the floor where the drops land.)

**Conclusion:** the same water cycles through evaporation, condensation and precipitation, and where it moves through limestone underground it slowly builds cave features.`,
      quiz: [
        {
          prompt: "The hydrological cycle is powered mainly by…",
          options: ["the Sun and gravity", "the wind only", "earthquakes", "the tides"],
          correctIndex: 0,
          explanation: "Solar heating drives evaporation; gravity pulls water back down.",
        },
        {
          prompt: "Water changing from liquid to vapour is…",
          options: ["evaporation", "condensation", "precipitation", "infiltration"],
          correctIndex: 0,
          explanation: "Evaporation turns liquid water into vapour.",
        },
        {
          prompt: "Water vapour cooling and forming clouds is…",
          options: ["condensation", "evaporation", "transpiration", "run-off"],
          correctIndex: 0,
          explanation: "Condensation forms cloud droplets from vapour.",
        },
        {
          prompt: "Rain, snow, sleet and hail are all forms of…",
          options: ["precipitation", "infiltration", "evaporation", "percolation"],
          correctIndex: 0,
          explanation: "Precipitation is water falling from clouds to the ground.",
        },
        {
          prompt: "Water vapour released from plant leaves is…",
          options: ["transpiration", "condensation", "run-off", "saturation"],
          correctIndex: 0,
          explanation: "Transpiration is water loss from plants.",
        },
        {
          prompt: "Water soaking into the soil is…",
          options: ["infiltration", "overland flow", "evaporation", "condensation"],
          correctIndex: 0,
          explanation: "Infiltration is water entering the ground.",
        },
        {
          prompt: "Water flowing over the ground into rivers is…",
          options: ["overland flow (run-off)", "infiltration", "percolation", "transpiration"],
          correctIndex: 0,
          explanation: "Overland flow (surface run-off) moves over the land.",
        },
        {
          prompt: "Because water is recycled, the total amount on Earth…",
          options: ["stays about the same", "keeps increasing", "keeps decreasing", "disappears"],
          correctIndex: 0,
          explanation: "The cycle recycles water; the total is roughly constant.",
        },
        {
          prompt: "Underground water is stored in…",
          options: ["pore spaces and cracks in rock and soil", "clouds", "rivers only", "the ocean"],
          correctIndex: 0,
          explanation: "Ground water fills the pores and cracks below the surface.",
        },
        {
          prompt: "The zone where all pore spaces are filled with water is the…",
          options: ["zone of saturation", "zone of aeration", "atmosphere", "delta"],
          correctIndex: 0,
          explanation: "In the zone of saturation every pore is water-filled.",
        },
        {
          prompt: "The upper surface of the zone of saturation is the…",
          options: ["water table", "aquifer", "spring line", "cloud base"],
          correctIndex: 0,
          explanation: "The water table is the top of the saturated zone.",
        },
        {
          prompt: "A body of permeable rock that holds and transmits water is an…",
          options: ["aquifer", "impermeable layer", "esker", "levee"],
          correctIndex: 0,
          explanation: "Aquifers store and pass on ground water.",
        },
        {
          prompt: "A natural flow of ground water onto the surface is a…",
          options: ["spring", "well", "geyser", "delta"],
          correctIndex: 0,
          explanation: "Springs emerge where the water table meets the surface.",
        },
        {
          prompt: "In an artesian basin, water rises up a bore because of…",
          options: ["its own pressure", "wind", "the tides", "evaporation"],
          correctIndex: 0,
          explanation: "Confined water under pressure rises as an artesian well.",
        },
        {
          prompt: "A deposit that hangs down from a cave roof is a…",
          options: ["stalactite", "stalagmite", "pillar", "spring"],
          correctIndex: 0,
          explanation: "Stalactites grow downward from the ceiling.",
        },
        {
          prompt: "A deposit that builds up from a cave floor is a…",
          options: ["stalagmite", "stalactite", "aquifer", "well"],
          correctIndex: 0,
          explanation: "Stalagmites grow upward from the floor.",
        },
        {
          prompt: "When a stalactite and stalagmite join they form a…",
          options: ["pillar (column)", "spring", "cave", "sink hole"],
          correctIndex: 0,
          explanation: "A joined pair forms a pillar or column.",
        },
        {
          prompt: "Cave features like stalactites form where ground water dissolves…",
          options: ["limestone", "granite", "basalt", "sandstone only"],
          correctIndex: 0,
          explanation: "Limestone (karst) is dissolved by lime-carrying water.",
        },
        {
          prompt: "An importance of underground water is that it…",
          options: ["supplies drinking water through wells and springs", "causes earthquakes", "makes clouds", "forms deltas"],
          correctIndex: 0,
          explanation: "Ground water is a key source of drinking and farm water.",
        },
        {
          prompt: "The zone above the water table, holding both air and water, is the…",
          options: ["zone of aeration", "zone of saturation", "aquifer", "artesian basin"],
          correctIndex: 0,
          explanation: "The zone of aeration lies above the water table.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define the hydrological cycle and name four of its processes.",
          answerKey:
            "The hydrological cycle is the continuous movement of water between the oceans, atmosphere and land, driven by the Sun and gravity. Four processes (any four): evaporation, transpiration, condensation, precipitation, infiltration, overland flow/run-off, percolation. Award marks for the definition and four correct processes.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the terms water table, aquifer and spring.",
          answerKey:
            "Water table – the upper surface of the zone of saturation; Aquifer – a body of permeable rock that holds and transmits ground water; Spring – a natural flow of ground water onto the surface. One mark each.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which feature grows downward from a cave roof?",
          options: ["stalactite", "stalagmite", "pillar", "aquifer"],
          correctIndex: 0,
          answerKey: "A stalactite hangs from the ceiling; a stalagmite rises from the floor.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State two reasons the hydrological cycle is important.",
          answerKey:
            "Any two of: renews fresh water for drinking/farming/industry; distributes rainfall; feeds rivers, lakes and springs; refills underground water; supports plant and animal life. One mark each.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe how water moves through the hydrological cycle from the ocean to underground storage and back, using the correct terms.",
          answerKey:
            "A strong answer traces the cycle: the Sun evaporates water from the ocean; vapour rises and condenses into clouds; precipitation falls on the land; some water runs off as overland flow into rivers and back to the sea, while some infiltrates and percolates down to the zone of saturation, recharging aquifers below the water table; ground water later returns to the surface through springs and wells or as base flow to rivers, and evaporation begins the cycle again. Award marks for correct sequence, terms and the surface/underground link.",
          marks: 5,
        },
      ],
    },
    {
      // source: Geosciences LibreTexts — The Physical Environment (Ritter), 3.02 Atmospheric Structure; and Physical Geography (Lumen), 10.04 Layers of the Atmosphere (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/The_Physical_Environment_(Ritter)/03:_The_Atmosphere/3.02:_Atmospheric_Structure)
      slug: "atmosphere",
      title: "Atmosphere",
      objective:
        "By the end of the topic, learners should be able to define the atmosphere, describe its composition and layers, explain its importance, and outline atmospheric pollution and how to protect the atmosphere.",
      estimatedMinutes: 145,
      notes: `## Introduction

- **Atmosphere** — the envelope of gases held around the Earth by gravity. It makes life possible and drives weather and climate.

## Composition of the atmosphere

By volume, dry air is mostly:

| Gas | Approx. share of dry air |
|---|---|
| Nitrogen | about 78% |
| Oxygen | about 21% |
| Argon | about 0.9% |
| Carbon dioxide and other gases | about 0.1% |

- The air also carries variable amounts of **water vapour**, **dust** and **aerosols**.
- **Nitrogen** dilutes oxygen and is used by plants; **oxygen** is needed for breathing and burning; **carbon dioxide** is used by plants and helps keep the Earth warm; the **ozone** form of oxygen shields us from ultraviolet rays.

## Layers of the atmosphere

From the surface upward:

- **Troposphere** — surface to about 12 km. Holds nearly all the air, water vapour and weather; temperature **falls** with height. We live here.
- **Stratosphere** — about 12 to 50 km. Contains the **ozone layer**, which absorbs 97–99% of the Sun's harmful ultraviolet radiation; temperature **rises** with height.
- **Mesosphere** — about 50 to 80 km. The **coldest** layer; most meteors burn up here.
- **Thermosphere** — about 80 to 600 km. Very hot; solar radiation ionises the gases (the ionosphere), which reflects radio waves and produces auroras.
- **Exosphere** — the outermost, thinning layer that merges into space.

\`\`\`svg Layers of the atmosphere
<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stacked layers of the atmosphere from troposphere to thermosphere">
  <rect x="10" y="160" width="200" height="30" fill="#93c5fd"/><text x="110" y="179" font-size="10" text-anchor="middle" fill="#1e3a8a">Troposphere (weather)</text>
  <rect x="10" y="120" width="200" height="40" fill="#60a5fa"/><text x="110" y="144" font-size="10" text-anchor="middle" fill="#fff">Stratosphere (ozone)</text>
  <rect x="10" y="80" width="200" height="40" fill="#3b82f6"/><text x="110" y="104" font-size="10" text-anchor="middle" fill="#fff">Mesosphere (coldest)</text>
  <rect x="10" y="30" width="200" height="50" fill="#1d4ed8"/><text x="110" y="58" font-size="10" text-anchor="middle" fill="#fff">Thermosphere (hot)</text>
  <text x="110" y="20" font-size="9" text-anchor="middle" fill="#1e3a8a">↑ Exosphere → space</text>
</svg>
\`\`\`

## Importance of the atmosphere

- Provides **oxygen** to breathe and **carbon dioxide** for plants.
- The **ozone layer** blocks harmful ultraviolet radiation.
- Traps heat (the greenhouse effect) to keep the Earth warm enough for life.
- Burns up most meteors before they reach the ground.
- Holds the **water vapour** that gives clouds, rain and the water cycle; carries sound and enables flight.

## Problems: atmospheric pollution

- **Air pollution** — the release of harmful gases and particles into the atmosphere.
- Main pollutants: **particulate matter (smoke, dust)**, **sulfur dioxide**, **nitrogen dioxide**, **carbon monoxide** and **ozone** near the ground.
- Sources: burning of fossil fuels, vehicle exhaust, factories, burning of waste and forests.
- Effects: breathing and heart disease, acid rain, smog, damage to the ozone layer, and global warming.

## Solutions: protecting the atmosphere

- Use cleaner energy (solar, wind, hydro) instead of coal and oil.
- Fit filters and control equipment on factories and vehicles.
- Reduce, reuse and recycle waste instead of burning it.
- Plant trees; enforce clean-air laws and reduce needless burning.

## Common errors and misconceptions

- **Thinking oxygen is the most common gas** — the air is mostly **nitrogen (about 78%)**; oxygen is about **21%**.
- **Confusing the layers' temperature trends** — temperature **falls** with height in the troposphere and mesosphere but **rises** in the stratosphere and thermosphere.
- **Placing weather high up** — nearly all **weather** happens in the lowest layer, the **troposphere**.
- **Confusing the ozone layer with the greenhouse effect** — ozone (in the **stratosphere**) blocks ultraviolet rays; the greenhouse effect (in the **troposphere**) traps heat.`,
      workedExample: `**Task.** (a) State the two most abundant gases in dry air and their approximate percentages. (b) A weather balloon rises from the ground to 40 km. Name the layers it passes through in order and describe what happens to temperature.

**Part (a) — main gases**
- **Nitrogen — about 78%** of dry air.
- **Oxygen — about 21%** of dry air. (Argon, carbon dioxide and other gases make up the last ~1%.)

**Part (b) — the balloon's ascent to 40 km**
1. **Troposphere (0–12 km):** temperature **falls** with height; this is where weather occurs.
2. **Stratosphere (12–50 km):** the balloon is now in the stratosphere. Temperature **rises** with height because the **ozone layer** absorbs ultraviolet radiation. At 40 km the balloon is within the stratosphere.

**Conclusion:** air is mainly nitrogen and oxygen, and temperature does not simply keep falling with height — it falls in the troposphere but rises again in the stratosphere because of ozone.`,
      quiz: [
        {
          prompt: "The atmosphere is the envelope of gases held around the Earth by…",
          options: ["gravity", "wind", "the oceans", "magnetism"],
          correctIndex: 0,
          explanation: "Gravity holds the atmosphere close to the Earth.",
        },
        {
          prompt: "The most abundant gas in dry air is…",
          options: ["nitrogen", "oxygen", "carbon dioxide", "argon"],
          correctIndex: 0,
          explanation: "Nitrogen makes up about 78% of dry air.",
        },
        {
          prompt: "Oxygen makes up about what share of dry air?",
          options: ["21%", "78%", "50%", "1%"],
          correctIndex: 0,
          explanation: "Oxygen is about 21% of dry air.",
        },
        {
          prompt: "The layer nearest the surface, where weather occurs, is the…",
          options: ["troposphere", "stratosphere", "mesosphere", "thermosphere"],
          correctIndex: 0,
          explanation: "Nearly all weather happens in the troposphere.",
        },
        {
          prompt: "The ozone layer is found in the…",
          options: ["stratosphere", "troposphere", "mesosphere", "exosphere"],
          correctIndex: 0,
          explanation: "The ozone layer lies in the stratosphere.",
        },
        {
          prompt: "The ozone layer protects life by absorbing…",
          options: ["ultraviolet radiation", "radio waves", "sound", "carbon dioxide"],
          correctIndex: 0,
          explanation: "Ozone absorbs 97–99% of the Sun's harmful ultraviolet rays.",
        },
        {
          prompt: "The coldest layer of the atmosphere is the…",
          options: ["mesosphere", "troposphere", "stratosphere", "thermosphere"],
          correctIndex: 0,
          explanation: "The mesosphere is the coldest layer.",
        },
        {
          prompt: "Most meteors burn up in the…",
          options: ["mesosphere", "troposphere", "exosphere", "stratosphere"],
          correctIndex: 0,
          explanation: "Meteors mostly burn up in the mesosphere.",
        },
        {
          prompt: "In the troposphere, temperature generally… with height.",
          options: ["falls", "rises", "stays constant", "doubles"],
          correctIndex: 0,
          explanation: "Temperature falls with altitude in the troposphere.",
        },
        {
          prompt: "In the stratosphere, temperature… with height.",
          options: ["rises", "falls", "stays constant", "disappears"],
          correctIndex: 0,
          explanation: "Ozone absorbing UV warms the upper stratosphere.",
        },
        {
          prompt: "Which gas do plants take in and that also helps keep the Earth warm?",
          options: ["carbon dioxide", "nitrogen", "argon", "helium"],
          correctIndex: 0,
          explanation: "Carbon dioxide is used by plants and is a greenhouse gas.",
        },
        {
          prompt: "The ionosphere, which reflects radio waves, is part of the…",
          options: ["thermosphere", "troposphere", "stratosphere", "mesosphere"],
          correctIndex: 0,
          explanation: "Ionised gases in the thermosphere reflect radio waves.",
        },
        {
          prompt: "Air pollution is the release into the atmosphere of…",
          options: ["harmful gases and particles", "clean oxygen", "rain", "sunlight"],
          correctIndex: 0,
          explanation: "Pollution adds harmful gases and particulates to the air.",
        },
        {
          prompt: "Which is a major source of air pollution?",
          options: ["burning fossil fuels and vehicle exhaust", "photosynthesis", "the water cycle", "ocean tides"],
          correctIndex: 0,
          explanation: "Burning fuels and traffic are leading pollution sources.",
        },
        {
          prompt: "Acid rain is an effect of which pollutants?",
          options: ["sulfur dioxide and nitrogen oxides", "oxygen and argon", "water vapour", "helium"],
          correctIndex: 0,
          explanation: "Sulfur and nitrogen oxides form acids in rain.",
        },
        {
          prompt: "Which is a way to protect the atmosphere?",
          options: ["use cleaner energy such as solar and wind", "burn more coal", "cut down more forests", "increase traffic"],
          correctIndex: 0,
          explanation: "Cleaner energy reduces harmful emissions.",
        },
        {
          prompt: "Fitting filters on factory chimneys and car exhausts helps to…",
          options: ["reduce air pollution", "increase smog", "warm the planet", "raise the ozone hole"],
          correctIndex: 0,
          explanation: "Control equipment traps pollutants before release.",
        },
        {
          prompt: "The greenhouse effect keeps the Earth…",
          options: ["warm enough for life", "completely frozen", "free of clouds", "without an atmosphere"],
          correctIndex: 0,
          explanation: "Trapped heat keeps surface temperatures habitable.",
        },
        {
          prompt: "The outermost layer that merges into space is the…",
          options: ["exosphere", "troposphere", "stratosphere", "mesosphere"],
          correctIndex: 0,
          explanation: "The exosphere is the highest, thinnest layer.",
        },
        {
          prompt: "Besides oxygen, the atmosphere is important because it…",
          options: ["holds water vapour for the water cycle and blocks harmful rays", "creates earthquakes", "makes rocks", "forms oceans of lava"],
          correctIndex: 0,
          explanation: "It carries water vapour and shields the surface from UV.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "State the approximate composition of dry air, naming the two main gases and their percentages.",
          answerKey:
            "Dry air is about 78% nitrogen and about 21% oxygen, with roughly 1% argon, carbon dioxide and other gases. Award marks for both main gases with correct percentages.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the four main layers of the atmosphere in order from the surface upward.",
          answerKey:
            "Troposphere, stratosphere, mesosphere, thermosphere (exosphere is the outermost). Award marks for correct layers in the right order.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The ozone layer, which absorbs ultraviolet radiation, is located in the:",
          options: ["stratosphere", "troposphere", "mesosphere", "thermosphere"],
          correctIndex: 0,
          answerKey: "The ozone layer is in the stratosphere and absorbs 97–99% of harmful UV.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give two causes and two effects of air pollution.",
          answerKey:
            "Causes (any two): burning fossil fuels, vehicle exhaust, factory emissions, burning waste/forests. Effects (any two): breathing/heart disease, acid rain, smog, ozone-layer damage, global warming. One mark each.",
          marks: 4,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain why the atmosphere is important for life on Earth, referring to at least three of its functions.",
          answerKey:
            "A strong answer discusses at least three functions: supplying oxygen for breathing (and CO₂ for plants); the ozone layer blocking harmful ultraviolet radiation; the greenhouse effect keeping the planet warm enough for life; burning up meteors; and holding water vapour that drives the water cycle and gives rain. Award marks for three or more clearly explained functions.",
          marks: 5,
        },
      ],
    },
    {
      // source: Geosciences LibreTexts — The Physical Environment (Ritter), 6.05 Local Scale Wind and 06 Atmospheric and Ocean Circulation; Physical Geography (Lumen), 10.08 Atmospheric Movements and Flow (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/The_Physical_Environment_(Ritter)/06:_Atmospheric_and_Ocean_Circulation/6.05:_Local_Scale_Wind)
      slug: "atmospheric-pressure-and-air-pollution",
      title: "Atmospheric Pressure and Air Pollution",
      objective:
        "By the end of the topic, learners should be able to explain atmospheric pressure and the winds that result from temperature and pressure differences, and outline the causes, effects and control of air pollution.",
      estimatedMinutes: 150,
      notes: `## Introduction

- Uneven heating of the Earth makes the air's **pressure** differ from place to place, and this drives the **winds**.

## Atmospheric pressure — definition

- **Atmospheric pressure** — the weight of the air pressing down on a unit area of the Earth's surface. It is measured with a **barometer**.
- Pressure is **higher** where air is cool and sinking, and **lower** where air is warm and rising.
- Pressure **falls** as you go up, because there is less air above you.

## Temperature variation and wind

Wind is air moving from **high pressure to low pressure**. Its direction and speed depend on:

- **Wind direction and speed** — set by where high- and low-pressure centres lie; the closer the centres (the steeper the pressure gradient), the stronger the wind.
- **Pressure belts** — the Earth has bands of high and low pressure: low pressure at the equator (rising air), high pressure at about 30° N and S (sinking air), low pressure at about 60° N and S, and high pressure at the poles.
- **Zones of convergence and divergence** — air **converges** (comes together and rises) at low-pressure belts and **diverges** (spreads out and sinks) at high-pressure belts.

## Planetary wind system

- The main prevailing winds blow between the pressure belts:
- **Trade winds** — from the subtropical highs toward the equatorial low.
- **Westerlies** — from the subtropical highs toward about 60°.
- **Polar easterlies** — from the polar highs toward about 60°.

## Deflection of winds

- Because the Earth rotates, moving winds are **deflected** — to the **right** in the Northern Hemisphere and to the **left** in the Southern Hemisphere. This is the **Coriolis effect**, and it curves the planetary winds.

## Land and sea breezes

- **Sea breeze (day)** — land heats faster than the sea, so warm air rises over the land (low pressure) and cooler air blows **from sea to land**.
- **Land breeze (night)** — land cools faster than the sea, so air sinks over the land (high pressure) and blows **from land to sea**.

\`\`\`svg Day-time sea breeze
<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sea breeze during the day blowing from cool sea to warm land">
  <rect x="0" y="90" width="150" height="50" fill="#3b82f6"/>
  <rect x="150" y="80" width="150" height="60" fill="#ca8a04"/>
  <text x="70" y="120" font-size="10" text-anchor="middle" fill="#fff">cool sea (high P)</text>
  <text x="225" y="115" font-size="10" text-anchor="middle" fill="#fff">warm land (low P)</text>
  <path d="M120,70 L200,70" stroke="#0f766e" stroke-width="2" marker-end="url(#c)"/>
  <text x="150" y="62" font-size="9" text-anchor="middle" fill="#0f766e">sea breeze</text>
  <path d="M210,60 C215,40 150,40 130,58" fill="none" stroke="#0f766e" stroke-width="1.5" marker-end="url(#c)"/>
  <defs><marker id="c" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0f766e"/></marker></defs>
</svg>
\`\`\`

## Warm and cool air; other influences

- **Warm air** is lighter, rises, and gives low pressure; **cool/cold air** is denser, sinks, and gives high pressure.
- **Ocean currents** and the **shape of the coastline** also affect local temperature and winds.

## Air pollution — definition, causes, effects, control

- **Air pollution** — the presence of harmful gases and particles in the air in amounts that harm health and the environment.
- **Causes:** burning of fossil fuels (coal, oil, petrol/diesel), vehicle exhaust, factory smoke, burning of waste and of bush/forest, and dust.
- **Effects:** respiratory and heart disease, acid rain, smog and poor visibility, damage to crops and buildings, harm to the ozone layer, and global warming.
- **Control:** switch to cleaner energy (solar, wind, hydro); fit filters/scrubbers on chimneys and catalytic converters on vehicles; enforce clean-air laws; reduce open burning; plant trees.

## Case study: air pollution in Liberia

- The syllabus requires a **local case study of air pollution in Liberia** (its particular causes and impacts).
- **Local-specificity gap:** country-specific data on air pollution in Liberia is not available from the approved global education sources (OpenStax, CK-12, Geosciences LibreTexts, Siyavula). The general causes, effects and control measures above are sourced; **local Liberian figures and named sources should be supplied from Liberian government/EPA materials by the teacher and are flagged here as unsourced.**

## Common errors and misconceptions

- **Getting wind direction backwards** — wind blows **from high pressure to low pressure**, not the other way.
- **Confusing land and sea breezes** — the **sea breeze** blows from sea to land by **day**; the **land breeze** blows from land to sea by **night**.
- **Forgetting deflection** — the Earth's rotation deflects winds **right** in the Northern Hemisphere and **left** in the Southern (Coriolis effect).
- **Thinking warm air sinks** — warm air is lighter and **rises** (low pressure); cool air is denser and **sinks** (high pressure).`,
      workedExample: `**Task.** (a) A coastal town is hot at midday and cooler air is felt blowing in off the sea. Name this wind and explain it using pressure. (b) State whether winds are deflected right or left in the Northern Hemisphere, and name the effect responsible.

**Part (a) — the sea breeze**
- By day the **land heats faster** than the sea, so the air above the land warms, becomes lighter and **rises**, creating **low pressure** over the land.
- The sea stays cooler, so the air over it is denser — **high pressure**.
- Air moves from **high pressure (sea) to low pressure (land)**, blowing cool air onshore. This is a **sea breeze**.

**Part (b) — deflection of winds**
- In the **Northern Hemisphere**, moving winds are deflected to the **right**.
- The cause is the Earth's rotation, known as the **Coriolis effect**. (In the Southern Hemisphere the deflection is to the left.)

**Conclusion:** winds always flow from high to low pressure, and the Earth's rotation bends their paths through the Coriolis effect.`,
      quiz: [
        {
          prompt: "Atmospheric pressure is the…",
          options: ["weight of air pressing on a unit area", "speed of the wind", "amount of rain", "temperature of the air"],
          correctIndex: 0,
          explanation: "Pressure is the force of the air's weight per unit area.",
        },
        {
          prompt: "Atmospheric pressure is measured with a…",
          options: ["barometer", "thermometer", "rain gauge", "hygrometer"],
          correctIndex: 0,
          explanation: "A barometer measures atmospheric pressure.",
        },
        {
          prompt: "Wind blows from areas of…",
          options: ["high pressure to low pressure", "low pressure to high pressure", "cold to hot only", "land to sky"],
          correctIndex: 0,
          explanation: "Air flows down the pressure gradient, high to low.",
        },
        {
          prompt: "As you go higher in the atmosphere, pressure…",
          options: ["falls", "rises", "stays the same", "doubles"],
          correctIndex: 0,
          explanation: "There is less air above, so pressure falls with height.",
        },
        {
          prompt: "Warm air tends to…",
          options: ["rise and give low pressure", "sink and give high pressure", "stay still", "freeze"],
          correctIndex: 0,
          explanation: "Warm air is lighter, rises and lowers surface pressure.",
        },
        {
          prompt: "Cool, dense air tends to…",
          options: ["sink and give high pressure", "rise and give low pressure", "evaporate", "form ozone"],
          correctIndex: 0,
          explanation: "Cool air sinks, raising surface pressure.",
        },
        {
          prompt: "The stronger the pressure gradient (closer the centres), the…",
          options: ["stronger the wind", "weaker the wind", "warmer the air", "less rain"],
          correctIndex: 0,
          explanation: "A steeper pressure gradient drives stronger winds.",
        },
        {
          prompt: "At the equator the pressure belt is generally…",
          options: ["low pressure (rising air)", "high pressure (sinking air)", "no pressure", "always calm"],
          correctIndex: 0,
          explanation: "The equatorial belt is a low-pressure zone of rising air.",
        },
        {
          prompt: "At about 30° N and S the pressure belt is generally…",
          options: ["high pressure (sinking air)", "low pressure", "the coldest zone", "the wettest zone"],
          correctIndex: 0,
          explanation: "The subtropical highs at ~30° have sinking air.",
        },
        {
          prompt: "Air coming together and rising is called…",
          options: ["convergence", "divergence", "deflection", "evaporation"],
          correctIndex: 0,
          explanation: "Convergence is air meeting and rising at lows.",
        },
        {
          prompt: "Winds blowing from the subtropical highs toward the equator are the…",
          options: ["trade winds", "westerlies", "polar easterlies", "monsoons"],
          correctIndex: 0,
          explanation: "Trade winds blow toward the equatorial low.",
        },
        {
          prompt: "In the Northern Hemisphere, winds are deflected to the…",
          options: ["right", "left", "not at all", "straight up"],
          correctIndex: 0,
          explanation: "The Coriolis effect turns winds right in the north.",
        },
        {
          prompt: "The deflection of winds by the Earth's rotation is the…",
          options: ["Coriolis effect", "greenhouse effect", "ozone effect", "tidal effect"],
          correctIndex: 0,
          explanation: "The Coriolis effect results from the Earth's spin.",
        },
        {
          prompt: "A sea breeze blows…",
          options: ["from sea to land by day", "from land to sea by day", "from sea to land by night", "only in winter"],
          correctIndex: 0,
          explanation: "By day cool air moves from sea to warmer land.",
        },
        {
          prompt: "A land breeze blows…",
          options: ["from land to sea by night", "from sea to land by night", "from land to sea by day", "never"],
          correctIndex: 0,
          explanation: "At night cooler land air moves out to the warmer sea.",
        },
        {
          prompt: "Air pollution is the presence in the air of…",
          options: ["harmful gases and particles", "clean water vapour", "extra oxygen", "sunlight"],
          correctIndex: 0,
          explanation: "Pollution is harmful substances in the air.",
        },
        {
          prompt: "Which is a cause of air pollution?",
          options: ["vehicle exhaust and factory smoke", "photosynthesis", "rainfall", "ocean currents"],
          correctIndex: 0,
          explanation: "Exhaust and industrial smoke are major sources.",
        },
        {
          prompt: "Which is an effect of air pollution?",
          options: ["respiratory disease and acid rain", "richer soils", "cleaner rivers", "cooler oceans only"],
          correctIndex: 0,
          explanation: "Pollution harms health and causes acid rain and smog.",
        },
        {
          prompt: "A way to control air pollution is to…",
          options: ["fit filters and use cleaner energy", "burn more waste openly", "remove all trees", "increase coal use"],
          correctIndex: 0,
          explanation: "Filters and clean energy cut emissions.",
        },
        {
          prompt: "The pressure belt found over the poles is generally…",
          options: ["high pressure (cold sinking air)", "low pressure (warm rising air)", "no pressure", "the warmest belt"],
          correctIndex: 0,
          explanation: "Cold, dense polar air sinks, giving high pressure.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define atmospheric pressure and state how it changes with height.",
          answerKey:
            "Atmospheric pressure is the weight of the air pressing down on a unit area of the surface (measured by a barometer). It falls with height because there is less air above. Award marks for the definition and the change with height.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between a land breeze and a sea breeze.",
          answerKey:
            "A sea breeze blows from the cool sea to the warm land by day (land heats faster, air rises, low pressure over land). A land breeze blows from the cool land to the warmer sea by night (land cools faster, high pressure over land). Award marks for both, with direction and timing.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "In the Southern Hemisphere, the Coriolis effect deflects winds to the:",
          options: ["left", "right", "not at all", "straight up"],
          correctIndex: 0,
          answerKey: "Winds are deflected to the left in the Southern Hemisphere (right in the Northern).",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State two causes and two control measures for air pollution.",
          answerKey:
            "Causes (any two): burning fossil fuels, vehicle exhaust, factory smoke, open burning of waste/bush. Control (any two): cleaner energy (solar/wind/hydro), filters/scrubbers and catalytic converters, clean-air laws, reducing open burning, planting trees. One mark each.",
          marks: 4,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how differences in atmospheric pressure produce winds, referring to pressure belts, the movement of air from high to low pressure, and the deflection of winds.",
          answerKey:
            "A strong answer explains that uneven heating creates pressure belts (equatorial low, subtropical highs at ~30°, subpolar lows at ~60°, polar highs); air moves from high to low pressure as wind, converging and rising at lows and diverging and sinking at highs; the steeper the pressure gradient the stronger the wind; and the Earth's rotation (Coriolis effect) deflects winds to the right in the Northern Hemisphere and left in the Southern, curving the planetary winds (trades, westerlies, polar easterlies). Award marks for pressure belts, high-to-low flow, and deflection.",
          marks: 5,
        },
      ],
    },
  ],
};
