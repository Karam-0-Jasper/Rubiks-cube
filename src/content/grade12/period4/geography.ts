import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Geography, Grade 12,
// Semester Two, Period IV, Unit 2 Human and Regional Geography of Liberia
// and Africa: Liberia; and West, East, North, South and Central Africa.
export const geographyG12P4: PeriodContent = {
  grade: 12,
  number: 4,
  title: "Regional Geography of Liberia and Africa",
  summary:
    "Period IV of the MoE Grade 12 Geography syllabus turns to regional geography. Learners study Liberia's location, relief, drainage, climate, vegetation, soils and settlement, then survey the geography of the five regions of Africa — West, East, North, Southern and Central — their physical features, resources and economies.",
  topics: [
    {
      // source: Geosciences LibreTexts — Physical Geology (Earle), 5.4 Weathering and the Formation of Soil; The Physical Environment (Ritter), 13.2.01 Tropical Forests; and World Regional Geography (Finlayson), 6.1 The Physical Landscape of Sub-Saharan Africa (https://geo.libretexts.org/Bookshelves/Geology/Physical_Geology_(Earle)/05:_Weathering_and_Soil/5.04:_Weathering_and_the_Formation_of_Soil) — NOTE: Liberia-specific figures flagged as unsourced below.
      slug: "liberia",
      title: "Liberia",
      objective:
        "By the end of the topic, learners should be able to outline the location, position and size of Liberia, describe its relief, drainage, climate, vegetation and soils, and compare its population and settlement patterns.",
      estimatedMinutes: 160,
      notes: `## Location, position and size of Liberia

- **Liberia** lies on the **west coast of Africa**, facing the **Atlantic Ocean**, within the tropics north of the Equator (a low-latitude, tropical country).
- It borders **Sierra Leone, Guinea and Côte d'Ivoire** and has a long Atlantic coastline; the capital is **Monrovia**.
- **Local-specificity gap:** the exact area (square kilometres), precise latitude/longitude extent, and the list of the fifteen counties are **country-specific figures not available from the approved global education sources**; these should be supplied from **Liberian government / LISGIS** materials and are **flagged here as unsourced** rather than invented.

## Relief of Liberia

- West African countries typically rise from a **coastal lowland plain** to **rolling interior hills and plateaus**, with higher ground inland — the general relief pattern of the region (sourced as a regional principle).
- **Local-specificity gap:** named ranges, highest points and exact heights in Liberia must come from **Liberian sources** and are **flagged as unsourced**.

## Drainage and lakes

- A tropical, high-rainfall country develops a **dense drainage network** of rivers flowing from the interior highlands to the Atlantic (general regional principle).
- **Local-specificity gap:** the names of Liberia's rivers and lakes and their courses are **country-specific** and should be taken from **Liberian sources**; **flagged as unsourced** here.

## Climate of Liberia

Climate is controlled by these **factors** (sourced): **latitude** (distance from the Equator sets temperature), **distance from the sea** (the coast is moderated by the ocean), **altitude** (higher land is cooler), **prevailing winds and ocean currents**, and **relief**.

- Being **near the Equator on the west coast**, Liberia has a **tropical climate**: high temperatures all year and a marked **wet season and dry season** (a tropical wet/monsoon-type regime), with **heavy rainfall** — equatorial west-coast areas can receive well over **2,000–3,000 mm** of rain a year (sourced regional range).

## Natural vegetation of Liberia

Vegetation follows the climate. Tropical West Africa shows these zones (sourced as biome descriptions):

- **Tropical rainforest** — near the Equator with high rainfall all year; tall (30–55 m) broadleaf **evergreen** trees in a layered canopy, very high biodiversity; damp, dim floor.
- **Savanna (tropical grassland)** — where a **dry season** appears inland: grassland with scattered trees, controlled by rainfall and fire.
- **Mangrove swamp and marshland** — salt-tolerant trees and marsh along **tidal coasts and river mouths**.
- **Factors affecting vegetation:** climate (rainfall, temperature), soil, relief, drainage and human activity (farming, logging).

## Soils of Liberia

**i. Soil types.** Soil formation is controlled by **climate, parent material, slope, organisms and time** (sourced). In the **warm, wet tropics**, heavy rain causes strong **leaching**, producing **deep, acidic, often iron-rich (lateritic) red soils** that lose fertility quickly when the forest is cleared.

**ii. Soil erosion.** Removing the forest cover **accelerates leaching, drying and erosion**; soil fertility can fall sharply within a few years of clearing, and bare or farmed land yields far more sediment than forested land.

- **Causes of soil erosion:** deforestation and logging, farming on slopes and shifting cultivation, heavy tropical downpours on bare soil, and overgrazing.

## Population and settlement

- Settlement follows physical advantages: people cluster where there is **water, fertile soil, and access** (the coast, rivers and roads), and more thinly in dense forest or poor-soil areas.
- **Rural** settlements are villages tied to farming; **urban** settlement concentrates at the coast (the port capital).
- **Local-specificity gap:** Liberia's population total, density and the distribution among counties are **country-specific** and should come from **LISGIS census data**; **flagged as unsourced** here.

## Common errors and misconceptions

- **Inventing local figures** — exact areas, river names and population totals for Liberia must come from **Liberian sources**, not guessed.
- **Confusing rainforest and savanna** — **rainforest** has rain all year and evergreen trees; **savanna** has a dry season, grass and scattered trees.
- **Thinking tropical soils are always rich** — heavy rain **leaches** tropical soils, which lose fertility quickly once cleared.
- **Ignoring the factors of climate** — latitude, distance from sea, altitude, winds, currents and relief together shape a place's climate.`,
      workedExample: `**Task.** (a) List four factors that control the climate of a place like Liberia. (b) Explain why tropical soils in a high-rainfall area often lose their fertility quickly after the forest is cleared.

**Part (a) — factors controlling climate**
1. **Latitude** — nearness to the Equator keeps temperatures high all year.
2. **Distance from the sea** — the coast is moderated (cooler days, warmer nights) by the ocean.
3. **Altitude** — higher land is cooler.
4. **Prevailing winds and ocean currents** (and **relief**) — bring or block moisture and affect temperature.

**Part (b) — loss of soil fertility**
- In the warm, wet tropics, heavy rain causes strong **downward percolation and leaching**, washing nutrients out of the topsoil and leaving acidic, iron-rich (lateritic) soil.
- While forest stands, its litter and roots recycle nutrients and shade the soil. When the forest is **cleared**, the shade and litter are lost, so leaching, drying and **erosion speed up**.
- Bare and farmed land loses far more soil and nutrients than forested land, so fertility can fall sharply within a few years.

**Conclusion:** climate factors (led by latitude) make Liberia hot and wet, and that same heavy rainfall leaches tropical soils, which quickly lose fertility once the protecting forest is removed.`,
      quiz: [
        {
          prompt: "Liberia is located on the… of Africa.",
          options: ["west coast", "east coast", "north coast", "far south"],
          correctIndex: 0,
          explanation: "Liberia lies on the West African Atlantic coast.",
        },
        {
          prompt: "Liberia's coastline faces the…",
          options: ["Atlantic Ocean", "Indian Ocean", "Red Sea", "Mediterranean Sea"],
          correctIndex: 0,
          explanation: "Liberia faces the Atlantic Ocean.",
        },
        {
          prompt: "The main factor that keeps Liberia hot all year is its…",
          options: ["low latitude (nearness to the Equator)", "high altitude", "distance from the Equator", "polar location"],
          correctIndex: 0,
          explanation: "Low latitude gives high temperatures year-round.",
        },
        {
          prompt: "Which is a factor that affects climate?",
          options: ["distance from the sea", "the price of rice", "the number of schools", "the colour of the soil"],
          correctIndex: 0,
          explanation: "Distance from the sea, latitude, altitude, winds and currents affect climate.",
        },
        {
          prompt: "A tropical west-coast country near the Equator typically has…",
          options: ["high temperatures and heavy rainfall with wet and dry seasons", "cold snowy winters", "desert all year", "no rain at all"],
          correctIndex: 0,
          explanation: "Equatorial west-coast climates are hot and wet with a dry season.",
        },
        {
          prompt: "The natural vegetation with tall evergreen broadleaf trees and rain all year is the…",
          options: ["tropical rainforest", "savanna", "desert scrub", "tundra"],
          correctIndex: 0,
          explanation: "Rainforest has evergreen layered trees and rain all year.",
        },
        {
          prompt: "Grassland with scattered trees, formed where a dry season occurs, is…",
          options: ["savanna", "rainforest", "mangrove", "marshland"],
          correctIndex: 0,
          explanation: "Savanna forms where there is a marked dry season.",
        },
        {
          prompt: "Salt-tolerant trees along tidal coasts and river mouths form…",
          options: ["mangrove swamp", "rainforest", "desert", "plateau"],
          correctIndex: 0,
          explanation: "Mangroves grow in tidal, brackish coastal water.",
        },
        {
          prompt: "Which controls soil formation?",
          options: ["climate, parent material, slope, organisms and time", "the day of the week", "the colour of the sky", "the number of rivers only"],
          correctIndex: 0,
          explanation: "These five factors control soil development.",
        },
        {
          prompt: "In the warm, wet tropics, heavy rain causes strong…",
          options: ["leaching of nutrients", "freezing of the soil", "build-up of salt only", "no change"],
          correctIndex: 0,
          explanation: "Heavy rain leaches nutrients from tropical soils.",
        },
        {
          prompt: "Deep, acidic, iron-rich red tropical soils are described as…",
          options: ["lateritic", "chernozem", "podzol of cold lands", "chalky"],
          correctIndex: 0,
          explanation: "Lateritic soils are the leached red soils of the wet tropics.",
        },
        {
          prompt: "Clearing tropical forest tends to…",
          options: ["speed up leaching, drying and erosion", "improve soil for ever", "stop all erosion", "make the land colder"],
          correctIndex: 0,
          explanation: "Loss of forest cover accelerates leaching and erosion.",
        },
        {
          prompt: "A cause of soil erosion is…",
          options: ["deforestation and farming on slopes", "planting trees", "leaving forest untouched", "gentle flat land with cover"],
          correctIndex: 0,
          explanation: "Deforestation, slope farming and heavy rain on bare soil erode it.",
        },
        {
          prompt: "Settlement tends to cluster where there is…",
          options: ["water, fertile soil and access", "no water", "the steepest slope", "the poorest soil"],
          correctIndex: 0,
          explanation: "People settle where water, soil and access are best.",
        },
        {
          prompt: "Liberia's relief generally rises from…",
          options: ["a coastal lowland plain to interior hills and plateaus", "high mountains at the coast to flat interior", "desert to ice", "ocean to ocean"],
          correctIndex: 0,
          explanation: "West African relief rises from coast plain to interior uplands.",
        },
        {
          prompt: "A high-rainfall tropical country develops a…",
          options: ["dense network of rivers", "single dry river", "no rivers", "only underground water"],
          correctIndex: 0,
          explanation: "Heavy rain feeds a dense drainage network.",
        },
        {
          prompt: "Urban settlement in Liberia is concentrated mainly at the…",
          options: ["coast (the port capital)", "highest mountain", "driest interior", "densest forest"],
          correctIndex: 0,
          explanation: "The coastal port capital concentrates urban settlement.",
        },
        {
          prompt: "Exact figures for Liberia's area and population should come from…",
          options: ["Liberian government / LISGIS sources", "guesswork", "a novel", "the weather report"],
          correctIndex: 0,
          explanation: "Country-specific data must come from Liberian sources, not be invented.",
        },
        {
          prompt: "Higher land in the interior tends to be… than the coast.",
          options: ["cooler", "hotter", "wetter with salt", "frozen"],
          correctIndex: 0,
          explanation: "Altitude lowers temperature.",
        },
        {
          prompt: "A factor affecting vegetation is…",
          options: ["climate, soil, relief and human activity", "the colour of clothes", "the day of the week", "the price of fuel"],
          correctIndex: 0,
          explanation: "Climate, soil, relief, drainage and people shape vegetation.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "State the location of Liberia and name four factors that affect its climate.",
          answerKey:
            "Liberia is on the west coast of Africa, facing the Atlantic Ocean, in the tropics north of the Equator. Four climate factors (any four): latitude/nearness to the Equator, distance from the sea, altitude, prevailing winds, ocean currents, relief. Award marks for location and four factors.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Describe two vegetation types found in tropical West Africa and the conditions that produce each.",
          answerKey:
            "Any two of: tropical rainforest (rain all year near the Equator; tall evergreen broadleaf layered trees); savanna (a marked dry season; grassland with scattered trees, shaped by rainfall and fire); mangrove swamp/marshland (tidal, brackish coasts and river mouths; salt-tolerant trees). Award marks for two types with correct conditions.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Deep, acidic, iron-rich red soils formed by heavy leaching in the wet tropics are called:",
          options: ["lateritic soils", "chernozem soils", "chalk soils", "frozen soils"],
          correctIndex: 0,
          answerKey: "Lateritic soils are the leached red soils typical of the warm, wet tropics.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give two causes of soil erosion and explain why tropical forest clearing worsens it.",
          answerKey:
            "Causes (any two): deforestation/logging, farming on slopes/shifting cultivation, heavy rain on bare soil, overgrazing. Clearing removes the shade and litter that protect and recycle nutrients, so leaching, drying and erosion accelerate and fertility falls quickly. Award marks for two causes and the explanation.",
          marks: 4,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe the physical geography of Liberia under the headings location, climate, vegetation and soils, noting where country-specific data would be needed.",
          answerKey:
            "A strong answer places Liberia on the West African Atlantic coast in the tropics; explains its tropical wet/dry climate controlled by latitude, distance from sea, altitude, winds, currents and relief; describes rainforest, savanna and mangrove vegetation with the conditions producing each; and explains tropical (lateritic) soils and erosion after forest clearing. It should note that exact area, named rivers/counties and population totals require Liberian government/LISGIS data rather than invented figures. Award marks across the four headings plus the sourcing note.",
          marks: 5,
        },
      ],
    },
    {
      // source: Social Sci LibreTexts — World Regional Geography (Finlayson), 6.1 The Physical Landscape of Sub-Saharan Africa; and World Regional Geography — People, Places and Globalization, 7.6 Southern Africa (resources) (https://socialsci.libretexts.org/Bookshelves/Geography_(Human)/World_Regional_Geography_(Finlayson)/06:_Sub-Saharan_Africa/6.01:_The_Physical_Landscape_of_Sub-Saharan_Africa)
      slug: "regional-geography-of-africa",
      title: "West, East, North, South and Central Africa",
      objective:
        "By the end of the topic, learners should be able to describe the regions of Africa, their physical features and natural resources, and discuss trade, communication and the factors affecting climate and agriculture across the regions.",
      estimatedMinutes: 160,
      notes: `## The regions of Africa

Africa is grouped into geo-political regions: **West, East, North, Southern and Central (Equatorial) Africa**. Africa is a continent of high **plateaus and basins**, great **rivers**, the **Great Rift Valley**, deserts and tropical forests.

## West Africa

- Stretches from the Sahara's southern edge to the Atlantic; includes the **Sahel** in the north.
- Physical features: coastal lowlands, interior plateaus, and the **Niger River**.
- Climate/vegetation grade from **desert (Sahara)** through **Sahel grassland** and **savanna** to **tropical rainforest** on the wetter south coast.
- Resources: **oil (Nigeria)**, cocoa, oil palm, gold, iron ore, timber; farming of cocoa, groundnuts, rice and cassava.

## East Africa

- Dominated by the **Great Rift Valley**, which is slowly splitting the African Plate at about **6–7 mm a year** and holds deep lakes such as **Lake Tanganyika** and **Lake Victoria** (source of the **Nile**).
- **Highlands** and volcanoes (e.g. high peaks) give cooler climates; the **Horn of Africa** (Djibouti, Eritrea, Ethiopia, Somalia) juts into the Indian Ocean.
- Resources and economy: coffee, tea, livestock, tourism (savanna game parks).

## North Africa

- Dominated by the **Sahara Desert**, the world's largest hot desert; the **Nile** flows north through many countries to the Mediterranean.
- The **Mediterranean coast** has a milder climate; people cluster around **sparse water resources**.
- Physically and culturally North Africa has much in common with the Arabian Peninsula and Southwest Asia.
- Resources: **oil and natural gas**, phosphates; irrigated farming along the Nile and coast.

## Southern Africa

- High plateaus, the **Kalahari** and **Namib** deserts (the Namib receives **less than 10 mm** of rain a year), the **Zambezi River** and Victoria Falls.
- **Richest region in minerals**: **copper, diamonds, gold, zinc, chromium, platinum, manganese, iron ore and coal**, giving it great economic potential; coastal **fishing**.

## Central (Equatorial) Africa

- Centred on the **Congo Basin**, drained by the **Congo River** — Africa's largest river by discharge and the deepest river in the world; the basin is a **biodiversity hotspot** supporting about 40 million people.
- **Equatorial climate**: hot and wet all year, with dense **tropical rainforest**.
- Resources: timber, rubber, minerals (copper, cobalt, diamonds), hydro-electric potential.

## Factors affecting climate and agriculture across Africa

- **Latitude** — the Equator runs through the middle, giving hot, wet equatorial climates that grade to hot deserts near the tropics.
- **The ITCZ and rain belts** shift with the Sun, giving the **wet and dry seasons** of the savanna.
- **Altitude** — the East African highlands are cooler and support different farming.
- **Distance from the sea and ocean currents** affect coastal climates.
- **Desertification** — previously fertile land turning to desert (from overgrazing, drought and climate change) threatens the **Sahel**.

## Trade and communication

- Rivers (Niger, Congo, Nile, Zambezi) and coasts are **routeways**; ports handle exports of minerals and cash crops.
- Regions trade **primary products** (minerals, oil, cocoa, coffee) and increasingly use roads, railways and communication technology to link inland areas to markets.

## Common errors and misconceptions

- **Treating Africa as one climate** — it ranges from **equatorial rainforest** to **hot desert** and cooler **highlands**.
- **Placing the Congo in the east** — the **Congo Basin** is in **Central (Equatorial) Africa**; the **Rift Valley and Nile source** are in the **east**.
- **Forgetting Southern Africa's minerals** — it is the continent's **richest mineral region**.
- **Confusing the Sahel and the Sahara** — the **Sahara** is desert; the **Sahel** is the semi-arid grassland belt on its southern edge.`,
      workedExample: `**Task.** (a) Match each region to a leading physical feature: West, East, North, Southern, Central Africa. (b) Explain why Central Africa has dense rainforest while North Africa is mostly desert.

**Part (a) — region and leading feature**
- **West Africa** — the **Niger River** and the Sahel grassland belt.
- **East Africa** — the **Great Rift Valley** with deep lakes (Tanganyika, Victoria).
- **North Africa** — the **Sahara Desert** and the lower **Nile**.
- **Southern Africa** — mineral-rich plateaus, the **Zambezi** and the **Namib/Kalahari** deserts.
- **Central (Equatorial) Africa** — the **Congo Basin and Congo River**.

**Part (b) — rainforest vs desert**
- **Central Africa** sits **on the Equator**, where the Sun is overhead and the ITCZ brings heavy rain all year; this hot, wet climate grows dense **tropical rainforest**.
- **North Africa** lies further from the Equator, under the belt of **sinking, dry air** around the tropics; with very little rain (the Sahara), the land is **desert**, and people cluster around scarce water.

**Conclusion:** the difference is mainly **latitude and the rain belts** — equatorial Central Africa is wet and forested, while North Africa's subtropical position makes it hot and dry.`,
      quiz: [
        {
          prompt: "Africa is commonly divided into how many main geo-political regions in this syllabus?",
          options: ["five (West, East, North, Southern, Central)", "two", "ten", "three"],
          correctIndex: 0,
          explanation: "West, East, North, Southern and Central Africa.",
        },
        {
          prompt: "The semi-arid grassland belt on the southern edge of the Sahara is the…",
          options: ["Sahel", "Congo Basin", "Rift Valley", "Namib"],
          correctIndex: 0,
          explanation: "The Sahel borders the Sahara to the south.",
        },
        {
          prompt: "The great river of West Africa is the…",
          options: ["Niger", "Congo", "Zambezi", "Nile"],
          correctIndex: 0,
          explanation: "The Niger is West Africa's major river.",
        },
        {
          prompt: "East Africa is dominated by the…",
          options: ["Great Rift Valley", "Congo Basin", "Atlas Mountains", "Kalahari alone"],
          correctIndex: 0,
          explanation: "The Rift Valley and its lakes dominate East Africa.",
        },
        {
          prompt: "The Great Rift Valley is splitting the African Plate at roughly…",
          options: ["6–7 mm a year", "6–7 metres a year", "6–7 km a year", "not at all"],
          correctIndex: 0,
          explanation: "The rift widens a few millimetres each year.",
        },
        {
          prompt: "The source of the Nile is Lake…",
          options: ["Victoria", "Chad", "Kariba", "Malawi"],
          correctIndex: 0,
          explanation: "The Nile flows north from Lake Victoria.",
        },
        {
          prompt: "North Africa is dominated by the…",
          options: ["Sahara Desert", "Congo rainforest", "Rift Valley", "Zambezi"],
          correctIndex: 0,
          explanation: "The Sahara covers most of North Africa.",
        },
        {
          prompt: "A key resource of North Africa is…",
          options: ["oil and natural gas", "diamonds only", "tea", "cocoa"],
          correctIndex: 0,
          explanation: "North Africa has major oil and gas reserves.",
        },
        {
          prompt: "The richest mineral region of Africa is…",
          options: ["Southern Africa", "the Sahel", "the Horn of Africa", "the Nile delta"],
          correctIndex: 0,
          explanation: "Southern Africa has copper, gold, diamonds, platinum and more.",
        },
        {
          prompt: "Which minerals are typical of Southern Africa?",
          options: ["copper, diamonds, gold, platinum, coal", "only oil", "only cocoa", "only tea"],
          correctIndex: 0,
          explanation: "Southern Africa is mineral-rich.",
        },
        {
          prompt: "Central (Equatorial) Africa is centred on the…",
          options: ["Congo Basin", "Sahara", "Rift Valley", "Atlas Mountains"],
          correctIndex: 0,
          explanation: "The Congo Basin dominates Central Africa.",
        },
        {
          prompt: "Africa's largest river by discharge and the deepest river in the world is the…",
          options: ["Congo", "Nile", "Niger", "Zambezi"],
          correctIndex: 0,
          explanation: "The Congo has the greatest discharge and is the deepest river.",
        },
        {
          prompt: "Central Africa's equatorial climate produces…",
          options: ["dense tropical rainforest", "hot desert", "cold tundra", "Mediterranean scrub"],
          correctIndex: 0,
          explanation: "Hot, wet equatorial climate grows rainforest.",
        },
        {
          prompt: "The main reason Central Africa is wet and North Africa dry is…",
          options: ["latitude and the shifting rain belts", "the price of oil", "the number of countries", "soil colour"],
          correctIndex: 0,
          explanation: "Equatorial latitude brings rain; subtropical latitude brings desert.",
        },
        {
          prompt: "The Namib Desert receives about…",
          options: ["less than 10 mm of rain a year", "3,000 mm a year", "1,000 mm a year", "no measurement possible"],
          correctIndex: 0,
          explanation: "The Namib is extremely dry, under 10 mm a year.",
        },
        {
          prompt: "The process of fertile land turning into desert is…",
          options: ["desertification", "leaching", "condensation", "urbanisation"],
          correctIndex: 0,
          explanation: "Desertification threatens the Sahel.",
        },
        {
          prompt: "The Horn of Africa is part of… Africa.",
          options: ["East", "North", "Southern", "West"],
          correctIndex: 0,
          explanation: "The Horn (Djibouti, Eritrea, Ethiopia, Somalia) is in East Africa.",
        },
        {
          prompt: "East Africa's highland climate is… than the lowlands.",
          options: ["cooler", "hotter", "drier deserts", "frozen"],
          correctIndex: 0,
          explanation: "Altitude makes the East African highlands cooler.",
        },
        {
          prompt: "African regions mainly trade… on world markets.",
          options: ["primary products such as minerals and cash crops", "manufactured cars", "software only", "nothing"],
          correctIndex: 0,
          explanation: "Africa exports primary products like minerals, oil, cocoa, coffee.",
        },
        {
          prompt: "Rivers and coasts across Africa serve as…",
          options: ["routeways for trade and transport", "barriers with no use", "sources of desert", "the same as railways only"],
          correctIndex: 0,
          explanation: "Rivers and ports are key trade routeways.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the five regions of Africa and give one leading physical feature of each.",
          answerKey:
            "West Africa — Niger River / Sahel; East Africa — Great Rift Valley and lakes; North Africa — Sahara Desert / Nile; Southern Africa — mineral plateaus / Zambezi / Namib; Central Africa — Congo Basin and Congo River. One mark each up to the marks available.",
          marks: 5,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State two natural resources of Southern Africa and two of North Africa.",
          answerKey:
            "Southern Africa (any two): copper, diamonds, gold, zinc, chromium, platinum, manganese, iron ore, coal, fishing. North Africa (any two): oil, natural gas, phosphates, irrigated crops along the Nile/coast. One mark each.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Africa's largest river by discharge, draining the Congo Basin, is the:",
          options: ["Congo River", "Nile River", "Niger River", "Zambezi River"],
          correctIndex: 0,
          answerKey: "The Congo is Africa's largest river by discharge and the deepest in the world.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain two factors that cause climate to vary across Africa.",
          answerKey:
            "Any two of: latitude (equatorial hot/wet grading to hot deserts near the tropics); the shifting ITCZ/rain belts giving savanna wet and dry seasons; altitude (cooler highlands, e.g. East Africa); distance from the sea and ocean currents. One mark each with explanation.",
          marks: 4,
        },
        {
          type: "ESSAY",
          prompt:
            "Compare the physical features, resources and climate of Central (Equatorial) Africa with those of North Africa.",
          answerKey:
            "A strong answer contrasts Central Africa (Congo Basin and Congo River; hot, wet equatorial climate; dense rainforest; timber, rubber, copper/cobalt/diamonds, HEP potential) with North Africa (Sahara Desert and lower Nile; arid subtropical climate; sparse water with people clustered along the Nile and coast; oil, gas and phosphates), explaining that latitude and the rain belts make the Equator wet and forested while the subtropics are dry and desert. Award marks for features, resources and climate of both, plus the explanation.",
          marks: 5,
        },
      ],
    },
  ],
};
