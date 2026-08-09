import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Geography, Grade 10,
// Semester One, Period III, Unit 2 Human and Regional Geography: Population.
export const geographyG10P3: PeriodContent = {
  grade: 10,
  number: 3,
  title: "Population, Settlement and Migration",
  summary:
    "Period III of the MoE Grade 10 Geography syllabus (Unit 2: Human and Regional Geography). Learners study population — its meaning, measurement, change (births, deaths, migration), density and distribution — and then settlement and migration: rural and urban settlements, settlement patterns and functions, urbanization, and the causes, effects and control of migration.",
  topics: [
    {
      // source: OpenStax/Biology LibreTexts — General Biology 1e (OpenStax), 45.1 Population Demography (https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/General_Biology_1e_(OpenStax)/8:_Ecology/45:_Population_and_Community_Ecology/45.1:_Population_Demography)
      slug: "population-change",
      title: "Population and Population Change",
      objective:
        "By the end of the topic, learners should be able to define population and related terms, explain how births, deaths and migration change a population, and describe how a census is used to count people.",
      estimatedMinutes: 150,
      notes: `## Introduction

- **Population geography** studies the people who live on the land.
- Population numbers decide how many schools, hospitals, farms and jobs a country needs.
- **This topic:** population and its key terms; the three things that change a population — **births, deaths, migration**; how a **census** counts people.

## What is population?

**Population** is the **total number of people** living in a particular area — a town, a county or a country — at a given time.

Geographers study population to plan for **schools, hospitals, jobs, food and housing**, so counting people accurately matters.

## Counting people: the census

A **census** is an official **count of all the people** in a country, usually taken every ten years. It records not just numbers but details such as age, sex, occupation and where people live. Governments use census data to plan services and share resources.

## How a population changes

The size of a population changes through three factors:

- **Births (birth rate)** — the number of live births per 1 000 people per year. Births **increase** the population.
- **Deaths (death rate)** — the number of deaths per 1 000 people per year. Deaths **decrease** the population.
- **Migration** — the movement of people into or out of an area.
  - **Immigration** = people **moving in** (increases population).
  - **Emigration** = people **moving out** (decreases population).

## Natural increase

The **natural increase** of a population is the **birth rate minus the death rate**. If births exceed deaths, the population grows naturally; if deaths exceed births, it declines.

**natural increase = birth rate − death rate**

## Factors affecting birth and death rates

- **Birth rate** is affected by marriage age, education (especially of women), access to family planning, and cultural or religious attitudes.
- **Death rate** is affected by medical care, clean water and sanitation, food supply, and war or disease.

Improvements in health care and clean water lower the death rate, which is a major cause of population growth in many countries.

## Migration

People migrate for **push factors** (things driving them away — war, unemployment, poor land) and **pull factors** (things attracting them — jobs, safety, better services). Rural-to-urban migration, for example, moves people from villages to cities in search of work.

## Common errors and misconceptions

- **Thinking only births and deaths change a population** — **migration** matters too: a place can grow or shrink purely because people move in or out.
- **Confusing birth rate with natural increase** — **natural increase** is birth rate *minus* death rate; a country can have a high birth rate yet slow growth if the death rate is also high.
- **Muddling emigration and immigration** — **emigration** is leaving a country; **immigration** is entering one.
- **Believing a census counts only citizens** — a census counts *all* the people present in the area at the time, and is used to plan services.`,
      workedExample: `**Task.** A country has a birth rate of 38 per 1 000 and a death rate of 12 per 1 000. During the year 5 000 people immigrated and 2 000 emigrated. (a) Calculate the natural increase per 1 000. (b) Explain the overall effect on the population. (c) State two reasons the death rate might be falling.

**Part (a) — natural increase**
natural increase = birth rate − death rate = 38 − 12 = **26 per 1 000**.

This means that, from births and deaths alone, the population grows by 26 people for every 1 000 each year — a high rate of natural increase.

**Part (b) — overall effect**
The population is growing for **two reasons**:
- **Natural increase** is positive (births far exceed deaths), and
- **Net migration** adds people: immigration (5 000) is greater than emigration (2 000), a net gain of **3 000** people.
So the population is rising, driven by both a high natural increase and net immigration.

**Part (c) — why the death rate might be falling**
Any two of: better **medical care** and vaccination; cleaner **water and sanitation**; a more reliable **food supply**; the end of a war or an epidemic. As the death rate falls while births stay high, the natural increase — and so the population — grows.`,
      quiz: [
        {
          prompt: "Population is the total number of people living in an area at a…",
          options: ["given time", "single house", "market", "school"],
          correctIndex: 0,
          explanation: "Population is counted for an area at a particular time.",
        },
        {
          prompt: "An official count of all the people in a country is a…",
          options: ["census", "survey of one town", "market day", "budget"],
          correctIndex: 0,
          explanation: "A census counts the whole population.",
        },
        {
          prompt: "A census is usually taken every…",
          options: ["ten years", "year", "month", "fifty years"],
          correctIndex: 0,
          explanation: "Most countries hold a census every ten years.",
        },
        {
          prompt: "Which factor increases a population?",
          options: ["births", "deaths", "emigration", "famine"],
          correctIndex: 0,
          explanation: "Births add people to a population.",
        },
        {
          prompt: "Which factor decreases a population?",
          options: ["deaths", "births", "immigration", "a high birth rate"],
          correctIndex: 0,
          explanation: "Deaths reduce the population.",
        },
        {
          prompt: "People moving INTO an area is called…",
          options: ["immigration", "emigration", "natural increase", "a census"],
          correctIndex: 0,
          explanation: "Immigration = moving in.",
        },
        {
          prompt: "People moving OUT of an area is called…",
          options: ["emigration", "immigration", "birth rate", "density"],
          correctIndex: 0,
          explanation: "Emigration = moving out.",
        },
        {
          prompt: "Natural increase is calculated as…",
          options: ["birth rate − death rate", "birth rate + death rate", "deaths − births", "immigration − emigration"],
          correctIndex: 0,
          explanation: "Natural increase = births minus deaths.",
        },
        {
          prompt: "Birth rate is measured per…",
          options: ["1 000 people per year", "single family", "town", "day"],
          correctIndex: 0,
          explanation: "Birth and death rates are given per 1 000 people per year.",
        },
        {
          prompt: "If a country's birth rate is 30 and death rate is 10, the natural increase is…",
          options: ["20 per 1 000", "40 per 1 000", "3 per 1 000", "300 per 1 000"],
          correctIndex: 0,
          explanation: "30 − 10 = 20 per 1 000.",
        },
        {
          prompt: "Which of these would lower a country's death rate?",
          options: ["better medical care", "war", "famine", "epidemic disease"],
          correctIndex: 0,
          explanation: "Improved health care reduces deaths.",
        },
        {
          prompt: "'Push factors' in migration are things that…",
          options: ["drive people away from an area", "attract people to an area", "count the population", "raise the birth rate"],
          correctIndex: 0,
          explanation: "Push factors (war, unemployment) push people to leave.",
        },
        {
          prompt: "'Pull factors' in migration are things that…",
          options: ["attract people to an area", "drive people away", "reduce births", "close schools"],
          correctIndex: 0,
          explanation: "Pull factors (jobs, safety) attract migrants.",
        },
        {
          prompt: "Movement of people from villages to cities to find work is called…",
          options: ["rural-to-urban migration", "emigration abroad", "natural increase", "census-taking"],
          correctIndex: 0,
          explanation: "Rural-to-urban migration moves people to cities.",
        },
        {
          prompt: "Governments use census data mainly to…",
          options: ["plan services and share resources", "increase the birth rate", "stop migration", "raise the death rate"],
          correctIndex: 0,
          explanation: "Census data guides planning of schools, hospitals, etc.",
        },
        {
          prompt: "Which would tend to raise a country's birth rate?",
          options: ["early marriage age", "widespread family planning", "high female education", "an ageing population"],
          correctIndex: 0,
          explanation: "Younger marriage tends to raise birth rates.",
        },
        {
          prompt: "If deaths exceed births, the population will…",
          options: ["decline naturally", "grow naturally", "stay exactly the same", "double"],
          correctIndex: 0,
          explanation: "A negative natural increase means natural decline.",
        },
        {
          prompt: "Net migration is positive when…",
          options: ["immigration is greater than emigration", "emigration is greater than immigration", "births equal deaths", "no one moves"],
          correctIndex: 0,
          explanation: "More people in than out gives a net gain.",
        },
        {
          prompt: "Clean water and good sanitation mainly help to…",
          options: ["lower the death rate", "raise the death rate", "stop all migration", "reduce births directly"],
          correctIndex: 0,
          explanation: "They reduce disease and deaths, lowering the death rate.",
        },
        {
          prompt: "The three factors that change a population's size are births, deaths and…",
          options: ["migration", "the census", "density", "the weather"],
          correctIndex: 0,
          explanation: "Births, deaths and migration together change population size.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define 'census' and state two reasons governments carry one out.",
          answerKey:
            "A census is an official count of all the people in a country (with details such as age, sex and occupation). Reasons (any two): to plan services (schools, hospitals); to share/allocate resources; to know the population size and structure for policy. Award marks for the definition and two valid reasons.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "A country has a birth rate of 34 per 1 000 and a death rate of 9 per 1 000. Calculate its natural increase and say whether the population is growing or shrinking naturally.",
          answerKey:
            "Natural increase = 34 − 9 = 25 per 1 000. Since births exceed deaths, the population is growing naturally. Award marks for the calculation and the correct conclusion.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which pair correctly matches the term to its meaning?",
          options: [
            "immigration — moving into an area",
            "emigration — moving into an area",
            "immigration — moving out of an area",
            "natural increase — total migration",
          ],
          correctIndex: 0,
          answerKey: "Immigration is movement into an area; emigration is movement out.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how births, deaths and migration together determine whether a country's population grows or shrinks. Use examples of factors that affect each.",
          answerKey:
            "A strong answer explains that population change = (births − deaths) + net migration. Births add people (affected by marriage age, education, family planning); deaths remove people (affected by medical care, clean water, food supply, war/disease); migration adds people through immigration and removes them through emigration (driven by push and pull factors). A population grows when births plus immigration exceed deaths plus emigration, and shrinks when the reverse is true. Award marks for the roles of all three factors and valid examples of what affects each.",
          marks: 5,
        },
      ],
    },
    {
      // source: Biology LibreTexts — Environmental Science (Ha and Schleiger), 4.1.2 The Rate of Human Population Growth (https://bio.libretexts.org/Bookshelves/Ecology/Environmental_Science_(Ha_and_Schleiger)/04:_Humans_and_the_Environment/4.01:_The_Human_Population/4.1.02:_The_Rate_of_Human_Population_Growth)
      slug: "population-density-and-distribution",
      title: "Population Density, Distribution and Growth",
      objective:
        "By the end of the topic, learners should be able to define and calculate population density, explain why population is unevenly distributed, and discuss the causes and effects of rapid population growth.",
      estimatedMinutes: 150,
      notes: `## Introduction

- People are unevenly spread — cities packed tight, deserts and forests almost empty.
- **Density** — how crowded an area is; **distribution** — the pattern of where people live.
- **This topic:** calculating population **density**; why population is **unevenly distributed**; causes and effects of **rapid population growth**.

## Population density

**Population density** is the **average number of people per unit of area** (usually per square kilometre). It shows how crowded an area is.

**population density = total population ÷ total land area**

- **Densely populated** — many people per km² (crowded).
- **Sparsely populated** — few people per km² (nearly empty).

## Population distribution

**Distribution** describes **where** people live — whether they are spread evenly or clustered. Population is almost never spread evenly. Areas may be crowded or empty because of:

**Physical factors**
- **Relief** — flat lowlands attract people; steep mountains repel them.
- **Climate** — mild, well-watered climates attract people; deserts and very cold areas repel them.
- **Soil** — fertile soil for farming attracts settlement.
- **Water** — people settle near rivers, lakes and coasts.

**Human factors**
- **Jobs and industry** — cities with work attract people.
- **Transport and services** — good roads, schools and hospitals draw people.
- **History** — long-established towns and capitals stay densely settled.

## Population growth

The world's population has grown very fast, especially where the death rate has fallen (better health and food) while the birth rate has stayed high.

## Effects of rapid population growth

**Problems** (overpopulation):
- pressure on food, water, housing, schools and hospitals,
- unemployment and overcrowding in cities,
- damage to the environment (deforestation, pollution).

**Possible benefits:**
- a larger workforce and market,
- more people to develop the country.

A country is **overpopulated** when it has more people than its resources can support, and **underpopulated** when it has too few people to use its resources fully.

## Common errors and misconceptions

- **Confusing density with total population** — **density** is people *per square kilometre*; a huge country can have a large population but a *low* density if it has plenty of land.
- **Muddling distribution and density** — **distribution** is the *pattern* (where people live); **density** is the *number per area*.
- **Thinking overpopulation just means "many people"** — it means too many people **for the available resources**; a small population can still be "overpopulated" if resources are very scarce.
- **Believing everywhere is crowded** — population is very uneven: fertile lowlands and cities are dense, while deserts, high mountains and thick forests are sparsely settled.`,
      workedExample: `**Task.** A county has a population of 600 000 people and a land area of 3 000 km². (a) Calculate its population density. (b) Suggest two reasons an area might be sparsely populated. (c) State two problems that rapid population growth can cause.

**Part (a) — population density**
population density = total population ÷ total area
= 600 000 ÷ 3 000
= **200 people per km²**.

**Part (b) — reasons an area might be sparsely populated**
Any two, for example:
- **Steep, mountainous relief** that is hard to build or farm on.
- A **harsh climate** (very dry desert or very cold), so few can live there.
- **Poor, infertile soil** that cannot support farming.
- **Few jobs, roads or services** to attract people.

**Part (c) — problems of rapid population growth**
Any two, for example:
- **Pressure on services** — not enough schools, hospitals, houses, food or clean water.
- **Unemployment and overcrowding**, especially in cities.
- **Environmental damage** such as deforestation and pollution.

**Conclusion:** density (200 people/km²) measures crowding; distribution is shaped by relief, climate, soil, water and human factors; and when growth outstrips resources, a country faces the strains of overpopulation.`,
      quiz: [
        {
          prompt: "Population density is the number of people per…",
          options: ["unit of area (e.g. km²)", "family", "town", "year"],
          correctIndex: 0,
          explanation: "Density = people per unit area.",
        },
        {
          prompt: "Population density is calculated as…",
          options: ["total population ÷ total area", "total area ÷ total population", "births ÷ deaths", "people × area"],
          correctIndex: 0,
          explanation: "Divide the population by the land area.",
        },
        {
          prompt: "An area with many people per km² is described as…",
          options: ["densely populated", "sparsely populated", "underpopulated", "empty"],
          correctIndex: 0,
          explanation: "Many people per km² means densely populated.",
        },
        {
          prompt: "A population of 400 000 in 2 000 km² has a density of…",
          options: ["200 per km²", "800 per km²", "2 per km²", "20 per km²"],
          correctIndex: 0,
          explanation: "400 000 ÷ 2 000 = 200 per km².",
        },
        {
          prompt: "Population distribution describes…",
          options: ["where people live", "how many are born", "the census date", "the death rate"],
          correctIndex: 0,
          explanation: "Distribution is the pattern of where people live.",
        },
        {
          prompt: "Which physical factor attracts people to settle?",
          options: ["flat, fertile lowland", "steep mountains", "dry desert", "frozen tundra"],
          correctIndex: 0,
          explanation: "Flat, fertile land is good for farming and building.",
        },
        {
          prompt: "Which area is likely to be sparsely populated?",
          options: ["a hot desert", "a fertile river valley", "a coastal city", "a flat farming plain"],
          correctIndex: 0,
          explanation: "Harsh deserts support few people.",
        },
        {
          prompt: "Which is a HUMAN factor affecting distribution?",
          options: ["jobs and industry", "relief", "climate", "soil"],
          correctIndex: 0,
          explanation: "Jobs are a human (economic) factor.",
        },
        {
          prompt: "People often settle near rivers and coasts mainly because of…",
          options: ["water supply and transport", "cold weather", "steep slopes", "poor soil"],
          correctIndex: 0,
          explanation: "Water and transport attract settlement.",
        },
        {
          prompt: "World population has grown fastest where the death rate has…",
          options: ["fallen while births stayed high", "risen sharply", "matched the birth rate exactly", "become zero"],
          correctIndex: 0,
          explanation: "Falling deaths with high births causes rapid growth.",
        },
        {
          prompt: "A country with more people than its resources can support is…",
          options: ["overpopulated", "underpopulated", "sparsely populated only", "at optimum"],
          correctIndex: 0,
          explanation: "Overpopulation = people exceed resources.",
        },
        {
          prompt: "A country with too few people to use its resources fully is…",
          options: ["underpopulated", "overpopulated", "densely populated", "at capacity"],
          correctIndex: 0,
          explanation: "Underpopulation = too few people for the resources.",
        },
        {
          prompt: "Which is a problem of rapid population growth?",
          options: ["pressure on schools and hospitals", "empty cities", "too few workers", "surplus of everything"],
          correctIndex: 0,
          explanation: "Fast growth strains services.",
        },
        {
          prompt: "Which is a possible benefit of a larger population?",
          options: ["a larger workforce and market", "less food needed", "no need for schools", "automatic wealth"],
          correctIndex: 0,
          explanation: "More people can mean more workers and a bigger market.",
        },
        {
          prompt: "Steep mountainous relief tends to make an area…",
          options: ["sparsely populated", "densely populated", "a capital city", "a coastal port"],
          correctIndex: 0,
          explanation: "Steep land is hard to farm and build on, so few live there.",
        },
        {
          prompt: "Rapid growth of cities from migration can cause…",
          options: ["overcrowding and unemployment", "empty streets", "a falling birth rate everywhere", "more farmland"],
          correctIndex: 0,
          explanation: "Cities may struggle with overcrowding and too few jobs.",
        },
        {
          prompt: "Fertile soil affects population because it supports…",
          options: ["farming and food production", "cold climates", "steep relief", "deserts"],
          correctIndex: 0,
          explanation: "Good soil attracts farming settlements.",
        },
        {
          prompt: "To reduce vague answers, distribution factors are grouped into…",
          options: ["physical and human factors", "old and new factors", "rich and poor factors", "day and night factors"],
          correctIndex: 0,
          explanation: "Physical (relief, climate, soil, water) and human (jobs, services, history).",
        },
        {
          prompt: "An environmental effect of rapid population growth is…",
          options: ["deforestation and pollution", "cleaner air always", "more forests", "no waste"],
          correctIndex: 0,
          explanation: "Growing populations can damage the environment.",
        },
        {
          prompt: "Population density mainly tells you how … an area is.",
          options: ["crowded", "wealthy", "old", "flat"],
          correctIndex: 0,
          explanation: "Density measures crowding (people per km²).",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "A district has 900 000 people living in 4 500 km². Calculate its population density and state whether it is densely or sparsely populated compared with an area of 5 people per km².",
          answerKey:
            "Density = 900 000 ÷ 4 500 = 200 people per km². Compared with 5 people per km², this district is densely populated. Award marks for the calculation, the unit, and the correct comparison.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give two physical factors and one human factor that affect where people live.",
          answerKey:
            "Physical (any two): relief, climate, soil, water/rivers/coasts. Human (any one): jobs/industry, transport/services, history/established towns. Award a mark per correct factor (max 3).",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A country is 'overpopulated' when…",
          options: [
            "it has more people than its resources can support",
            "it has too few people",
            "it has a low birth rate",
            "everyone lives in one city",
          ],
          correctIndex: 0,
          answerKey: "Overpopulation means people exceed the resources available.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Discuss the causes and effects of rapid population growth, mentioning at least two problems and one possible benefit.",
          answerKey:
            "A strong answer explains that rapid growth is often caused by a falling death rate (better health care, clean water, food) while the birth rate stays high, boosted by net immigration. Effects/problems (at least two): pressure on food, water, housing, schools and hospitals; unemployment and overcrowding in cities; environmental damage such as deforestation and pollution. Possible benefit (at least one): a larger workforce and market, or more people to develop the country. Award marks for the cause, two problems and one benefit.",
          marks: 5,
        },
      ],
    },
    {
      // source: Biology LibreTexts — Environmental Biology (Fisher and Dorsner), 14.1 Urbanization and Cities; Social Sci LibreTexts — Sociology (Boundless), 17.1C Migration (https://bio.libretexts.org/Courses/Hartnell_College/Environmental_Biology_(Fisher_and_Dorsner_Custom)/14:_Sustainability_and_Urban_Infrastructure/14.01:_Urbanization_and_Cities)
      slug: "settlement-and-migration",
      title: "Settlement and Migration",
      objective:
        "By the end of the topic, learners should be able to classify settlements by type, pattern, size and function, explain urbanization and its problems, and describe the causes, effects and control of migration.",
      estimatedMinutes: 160,
      notes: `## Introduction

- A **settlement** is a place where people live — from a single farmstead to a great city.
- People move between settlements; this movement is **migration**, and the growth of cities is **urbanization**.
- **This topic:** classifying settlements; site and situation; urbanization; migration and its push and pull factors.

## What is a settlement?

**Settlement** — any place where people live and carry out their activities, together with the buildings they use.

- **Site** — the actual land a settlement is built on (its physical ground: dry point, hill, river crossing).
- **Situation** — the position of a settlement in relation to the area around it (other towns, roads, resources).

## Factors affecting the siting and growth of settlements

- **Water supply** — settlements grow near rivers, springs and wells.
- **Relief** — flat or gently sloping land is easier to build on.
- **Fertile soil** — supports farming and feeds the settlement.
- **Defence** — hills and river bends once gave protection.
- **Resources, trade routes and services** — minerals, roads, ports and markets attract growth.

## Classifying settlements

**By type:**
- **Rural settlement** — small, in the countryside; people mostly farm or fish (village, hamlet, homestead, farmstead).
- **Urban settlement** — larger, with many non-farming jobs (town, city, metropolis).

**By size (smallest to largest):** homestead → hamlet → village → town → city → metropolis, with **satellite towns** around a large city.

**By pattern (shape of the settlement):**
- **Nucleated** — buildings clustered tightly together (often around a crossroads, market or water source).
- **Linear (ribbon)** — buildings strung out in a line along a road, river or valley.
- **Dispersed** — buildings scattered widely apart.
- **Isolated** — a single dwelling standing on its own.

**By function (what a settlement mainly does):** commercial (trade), administrative (government), religious, industrial, mining, port, or residential.

## Urbanization

**Urbanization** — the growth in the proportion of people living in towns and cities, driven by the movement of people from rural to urban areas.

- **Causes:** rural **push factors** (few jobs, poor services, hard farm life) and urban **pull factors** (jobs, better schools and hospitals, city attractions).
- **Problems:** overcrowding, slums and poor housing, unemployment, pressure on services, traffic, waste and pollution.
- **Solutions:** create jobs and services in rural areas, build affordable housing, plan cities, improve transport and sanitation, develop satellite towns.

## Migration

**Migration** — the movement of people from one place to another to live.

- **Immigration** = moving into an area; **emigration** = moving out.
- **Internal migration** happens within a country (e.g. rural-to-urban); **international migration** crosses national borders.

**Causes — push and pull factors:**
- **Push factors** are the unfavourable things about the area a person leaves — famine, drought, flooding, lack of jobs, overpopulation, war.
- **Pull factors** are the things that attract a person to the new area — hope of better jobs and wages, opportunities, safety, and reunion with family.

**Effects:**
- On the **source (losing) area** — loss of young workers, but less pressure on land and money sent home.
- On the **receiving area** — a larger workforce, but overcrowding, competition for jobs and pressure on services.

**Controls:** develop rural areas so people need not leave, create rural jobs and services, and plan cities to cope with newcomers.

## Common errors and misconceptions

- **Confusing site and situation** — **site** is the actual ground a settlement stands on; **situation** is its position relative to the surrounding region.
- **Muddling settlement patterns** — **nucleated** = clustered together; **linear** = in a line; **dispersed** = scattered.
- **Confusing immigration and emigration** — **immigration** is moving in; **emigration** is moving out.
- **Thinking push and pull are the same** — **push** factors drive people away from where they live; **pull** factors attract them to a new place.`,
      workedExample: `**Task.** Many young people are leaving the villages of rural Liberia and moving to Monrovia. (a) Name two push factors and two pull factors behind this move. (b) State the geographical name for this process and this type of migration. (c) Give one problem it causes in the city and one way to reduce the movement.

**Part (a) — push and pull factors**
- **Push factors (rural)** (any two): too few jobs; low farm incomes; poor schools, clinics and roads; hard farm life.
- **Pull factors (urban)** (any two): hope of paid jobs; better schools and hospitals; electricity and services; the attractions of city life.

**Part (b) — names**
- The growth of the city's share of population is **urbanization**.
- The move from villages to a city within the same country is **rural-to-urban (internal) migration**.

**Part (c) — one problem and one control**
- **Problem in the city:** overcrowding and slums, or unemployment and pressure on housing, water and services.
- **Control:** develop the rural areas — create jobs, schools and clinics in the villages — so people are not pushed to leave; plan and provide housing in the city.

**Conclusion:** rural-to-urban migration is driven by rural push and urban pull; it fuels urbanization but strains the city, and the lasting cure is to make rural areas places worth staying in.`,
      quiz: [
        { prompt: "A settlement is a place where people…", options: ["live and carry out their activities", "grow only crops", "store water", "bury the dead"], correctIndex: 0, explanation: "A settlement is where people live, with the buildings they use." },
        { prompt: "The actual land a settlement is built on is its…", options: ["site", "situation", "function", "pattern"], correctIndex: 0, explanation: "Site is the physical ground; situation is its position in the region." },
        { prompt: "The position of a settlement relative to its surroundings is its…", options: ["situation", "site", "size", "shape"], correctIndex: 0, explanation: "Situation describes where it stands in relation to other places." },
        { prompt: "Which is a rural settlement?", options: ["a village", "a metropolis", "a city", "a satellite city"], correctIndex: 0, explanation: "Villages, hamlets and homesteads are rural settlements." },
        { prompt: "Which lists settlements from smallest to largest?", options: ["hamlet, village, town, city", "city, town, village, hamlet", "town, city, village, hamlet", "village, hamlet, city, town"], correctIndex: 0, explanation: "Size increases hamlet → village → town → city." },
        { prompt: "Buildings clustered tightly together form a … pattern.", options: ["nucleated", "linear", "dispersed", "isolated"], correctIndex: 0, explanation: "Nucleated settlements are clustered, often around a crossroads or market." },
        { prompt: "Houses strung out along a road form a … pattern.", options: ["linear", "nucleated", "dispersed", "circular"], correctIndex: 0, explanation: "A linear or ribbon settlement follows a road, river or valley." },
        { prompt: "Widely scattered buildings form a … pattern.", options: ["dispersed", "nucleated", "linear", "clustered"], correctIndex: 0, explanation: "Dispersed settlements are spread far apart." },
        { prompt: "A town whose main role is government is classified by its…", options: ["function", "site", "pattern", "climate"], correctIndex: 0, explanation: "Function is what a settlement mainly does (here, administrative)." },
        { prompt: "The growth in the share of people living in towns and cities is…", options: ["urbanization", "migration abroad", "natural increase", "a census"], correctIndex: 0, explanation: "Urbanization is the rising proportion of urban dwellers." },
        { prompt: "Urbanization is driven mainly by movement from…", options: ["rural to urban areas", "city to city abroad", "farm to farm", "coast to coast"], correctIndex: 0, explanation: "Rural-to-urban migration fuels urbanization." },
        { prompt: "Which is a problem of rapid urbanization?", options: ["overcrowding and slums", "empty cities", "too few workers", "more farmland"], correctIndex: 0, explanation: "Fast city growth brings overcrowding, slums and strained services." },
        { prompt: "Migration means the movement of people from one place to…", options: ["another to live", "buy food", "vote once", "visit for a day"], correctIndex: 0, explanation: "Migration is moving to live in a new place." },
        { prompt: "Moving OUT of a country is…", options: ["emigration", "immigration", "urbanization", "commuting"], correctIndex: 0, explanation: "Emigration is leaving; immigration is entering." },
        { prompt: "A push factor for migration is…", options: ["lack of jobs at home", "good jobs in the city", "safety in the new area", "family reunion"], correctIndex: 0, explanation: "Push factors are unfavourable conditions that drive people away." },
        { prompt: "A pull factor for migration is…", options: ["hope of better jobs", "war at home", "drought", "poor farm incomes"], correctIndex: 0, explanation: "Pull factors attract migrants to the new area." },
        { prompt: "Migration within one country is…", options: ["internal migration", "international migration", "emigration abroad", "urbanization only"], correctIndex: 0, explanation: "Internal migration stays inside national borders." },
        { prompt: "One effect of out-migration on a rural source area is…", options: ["loss of young workers", "overcrowding", "more traffic", "higher city rents"], correctIndex: 0, explanation: "Source areas lose young, working-age people." },
        { prompt: "Which best controls rural-to-urban migration long term?", options: ["developing jobs and services in rural areas", "banning all movement", "closing schools", "raising the birth rate"], correctIndex: 0, explanation: "If rural areas offer jobs and services, fewer people are pushed to leave." },
        { prompt: "A single dwelling standing on its own is a … settlement.", options: ["isolated", "nucleated", "linear", "urban"], correctIndex: 0, explanation: "An isolated settlement is a lone building." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between the 'site' and the 'situation' of a settlement.", answerKey: "Site is the actual piece of land on which a settlement is built (its physical ground, e.g. a dry point, hilltop or river crossing). Situation is the position of the settlement in relation to the surrounding area (other towns, roads, rivers and resources). Award 3 marks per correct, clearly distinguished term.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Name and describe three patterns of settlement.", answerKey: "Nucleated — buildings clustered tightly together; Linear (ribbon) — buildings strung out in a line along a road, river or valley; Dispersed — buildings scattered widely apart (also accept isolated — a single dwelling). Award 2 marks per pattern correctly named and described.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is a pull factor drawing migrants to a city?", options: ["hope of better jobs", "drought", "war", "lack of farmland"], correctIndex: 0, answerKey: "Pull factors attract migrants; the others are push factors driving people away. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two problems caused by rapid urbanization and one way to reduce them.", answerKey: "Problems (any two): overcrowding and slums; unemployment; pressure on housing, water, schools and hospitals; traffic; waste and pollution. Reduction (any one): create jobs and services in rural areas; build affordable housing; plan cities and improve transport/sanitation; develop satellite towns. Award 2 marks per problem and 2 for a valid solution.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the causes and effects of rural-to-urban migration, and suggest how it can be controlled.", answerKey: "Award marks for: causes described as rural push factors (few jobs, low incomes, poor services, hard farm life) and urban pull factors (jobs, better services, city attractions), 8 marks; effects on the source area (loss of young workers, less pressure on land, remittances) and on the receiving city (larger workforce but overcrowding, slums, unemployment, strained services), 8 marks; controls (develop rural jobs and services, affordable housing, city planning, satellite towns), 5 marks; organisation and clarity, 4 marks. A learner who confuses push with pull, or immigration with emigration, should lose the relevant marks.", marks: 25 },
      ],
    },
  ],
};
