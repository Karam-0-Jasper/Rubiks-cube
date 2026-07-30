import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Geography, Grade 10,
// Semester One, Period III, Unit 2 Human and Regional Geography: Population.
export const geographyG10P3: PeriodContent = {
  grade: 10,
  number: 3,
  title: "Population",
  summary:
    "Period III of the MoE Grade 10 Geography syllabus. Learners study human geography: the meaning and measurement of population, the factors affecting population change (births, deaths and migration), population density and distribution, and the causes and effects of population growth.",
  topics: [
    {
      slug: "population-change",
      title: "Population and Population Change",
      objective:
        "By the end of the topic, learners should be able to define population and related terms, explain how births, deaths and migration change a population, and describe how a census is used to count people.",
      estimatedMinutes: 150,
      notes: `## What is population?

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

$$\\text{natural increase} = \\text{birth rate} - \\text{death rate}$$

## Factors affecting birth and death rates

- **Birth rate** is affected by marriage age, education (especially of women), access to family planning, and cultural or religious attitudes.
- **Death rate** is affected by medical care, clean water and sanitation, food supply, and war or disease.

Improvements in health care and clean water lower the death rate, which is a major cause of population growth in many countries.

## Migration

People migrate for **push factors** (things driving them away — war, unemployment, poor land) and **pull factors** (things attracting them — jobs, safety, better services). Rural-to-urban migration, for example, moves people from villages to cities in search of work.`,
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
      teachingTip:
        "Learners often think a falling death rate is bad for population numbers — clarify that a lower death rate means fewer people dying, so the population grows. Make the birth-rate/death-rate/migration model concrete with a simple 'water tank' image: births and immigration are taps filling the tank; deaths and emigration are drains emptying it. The level (population) rises when the taps beat the drains.",
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
      slug: "population-density-and-distribution",
      title: "Population Density, Distribution and Growth",
      objective:
        "By the end of the topic, learners should be able to define and calculate population density, explain why population is unevenly distributed, and discuss the causes and effects of rapid population growth.",
      estimatedMinutes: 150,
      notes: `## Population density

**Population density** is the **average number of people per unit of area** (usually per square kilometre). It shows how crowded an area is.

$$\\text{population density} = \\frac{\\text{total population}}{\\text{total land area}}$$

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

### Effects of rapid population growth

**Problems** (overpopulation):
- pressure on food, water, housing, schools and hospitals,
- unemployment and overcrowding in cities,
- damage to the environment (deforestation, pollution).

**Possible benefits:**
- a larger workforce and market,
- more people to develop the country.

A country is **overpopulated** when it has more people than its resources can support, and **underpopulated** when it has too few people to use its resources fully.`,
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
      teachingTip:
        "Population density is a favourite calculation in exams — make sure learners always divide people by area (not the reverse) and quote the unit 'per km²'. For distribution, split the reasons cleanly into physical and human factors and have learners classify local examples (a crowded capital = human factors; an empty mountain area = physical factors). This structure earns marks and prevents vague answers.",
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
  ],
};
