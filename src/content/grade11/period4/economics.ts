import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 11,
// Semester Two, Period IV: Population and Labor Market. CONTENTS: (1) Definitions
// of population and population census; (2) types of population census — de facto
// and de jure; (3) importance of population census; (4) characteristics and
// problems of population census; (5) determinants of population size and growth
// — birth rate, death rate, migration; (6) calculation of population density;
// (7) Malthusian theory of population growth; (8) geographical, age, sex and
// occupation distribution of population; (9) optimum, under- and over-population.
// Items 2-4 are taught as one census topic and items 5-6 as one topic, giving
// six sourced topics. Sourced from OpenStax Introduction to Sociology 3e (20.1),
// LibreTexts (Medicine — census enumeration; Sociology Boundless — population
// trends; Principles of Economics — population growth and development).
export const economicsG11P4: PeriodContent = {
  grade: 11,
  number: 4,
  title: "Population and Labor Market",
  summary:
    "Period IV of the MoE Grade 11 Economics syllabus. Learners define population and the population census, distinguish the de facto from the de jure census and weigh its importance and problems. They study the determinants of population size and growth — birth rate, death rate and migration — calculate population density, examine the Malthusian theory, describe how population is distributed by area, age, sex and occupation, and contrast optimum, under- and over-population.",
  topics: [
    // source: OpenStax — Introduction to Sociology 3e, 20.1 Demography and Population (demography, population) (https://openstax.org/books/introduction-sociology-3e/pages/20-1-demography-and-population) and LibreTexts Medicine — Field Trials of Health Interventions 10.4 Enumeration (census) (https://med.libretexts.org/Bookshelves/Nursing/Field_Trials_of_Health_Interventions_-_A_Toolbox_(Smith_Morrow_and_Ross)/10:_Censuses_and_mapping/10.04:_Enumeration)
    {
      slug: "population-and-census-definitions",
      title: "Definitions: Population and Population Census",
      objective:
        "By the end of the topic, learners should be able to define population, demography and the population census, and explain what a census collects.",
      estimatedMinutes: 90,
      notes: `## Population and demography

**Population** — the total number of people living in a defined area (a town, region or country) at a given time.
**Demography** — the **study of populations**: their size, composition and how they change through births, deaths and migration.
**Population composition** — a snapshot of the demographic profile of a population (for example its age, sex and occupation make-up).

## The population census

**Census** — the official **counting of every person** in a country, together with the collection of information on each household and each household member (age, sex, occupation and other data).
**Enumeration** — the actual process of counting and recording each person.
- A census is usually taken by the government at regular intervals (often every ten years).
- It is a **complete count** of the whole population, not a sample.

## What a census collects

- The **number** of people and where they live.
- The **composition** of the population — age, sex, occupation, education and household size.
- Data used to plan schools, hospitals, housing, roads and other services.

## Census versus sample survey

| Feature | Census | Sample survey |
| --- | --- | --- |
| Coverage | Everyone counted | Only part of the population |
| Cost and time | High | Lower |
| Accuracy of totals | Complete | Estimated |

## Common errors

- **Confusing a census with a sample.** A census counts everyone; a survey questions only a sample.
- **Thinking a census records only numbers.** It also records age, sex, occupation and other characteristics.
- **Assuming a census happens every year.** It is usually taken at longer intervals, such as every ten years.`,
      workedExample: `**Question:** A government wants to know how many school-age children live in each district and what jobs adults do, so it can plan schools and services. Explain why a population census, rather than a quick sample survey, suits this task, and state two things the census will record.

**Solution**

*Step 1 — why a census.* The government needs the number of children **in each district**, not just a national estimate. A census is a **complete count of every person**, so it gives exact totals for every area; a sample survey would only estimate and could miss small districts.

*Step 2 — what it records.* Besides counting people, the census records **composition** data, so it can record each person's **age** (to find school-age children) and **occupation** (the adults' jobs).

*Step 3 — link to planning.* With exact age and occupation data by district, the government can plan the right number of schools and services where they are needed.

**Answer:** A census suits the task because it counts everyone exactly in every district; it will record, among other things, each person's age and occupation.`,
      quiz: [
        { prompt: "Population is the total number of people", options: ["in the world only", "living in a defined area at a given time", "who are employed", "born in one year"], correctIndex: 1, explanation: "Population is the people in a defined area at a time." },
        { prompt: "Demography is the study of", options: ["prices", "populations", "firms", "taxes"], correctIndex: 1, explanation: "Demography studies populations." },
        { prompt: "A population census is", options: ["a sample of people", "the official counting of every person", "a tax return", "a birth certificate"], correctIndex: 1, explanation: "A census counts everyone." },
        { prompt: "Enumeration means the process of", options: ["taxing people", "counting and recording each person", "building schools", "migration"], correctIndex: 1, explanation: "Enumeration is the counting process." },
        { prompt: "A census is usually taken by the", options: ["private firms", "government at regular intervals", "banks", "schools"], correctIndex: 1, explanation: "Governments run the census periodically." },
        { prompt: "Population composition is a snapshot of a population's", options: ["prices", "demographic profile (age, sex, occupation)", "exports", "roads"], correctIndex: 1, explanation: "Composition describes the make-up of the population." },
        { prompt: "A census differs from a sample survey because it", options: ["counts only some people", "counts everyone", "is always cheaper", "records only names"], correctIndex: 1, explanation: "A census is a complete count." },
        { prompt: "A census records numbers and also", options: ["only names", "age, sex, occupation and other characteristics", "only addresses", "prices"], correctIndex: 1, explanation: "It collects composition data too." },
        { prompt: "Census data is used to plan", options: ["schools, hospitals and services", "nothing", "only elections", "only taxes"], correctIndex: 0, explanation: "Governments plan services from census data." },
        { prompt: "Compared with a sample survey, a census is usually", options: ["cheaper and quicker", "more costly and time-consuming", "less accurate", "smaller"], correctIndex: 1, explanation: "Counting everyone is costly and slow." },
        { prompt: "A census is often taken", options: ["every year", "at long intervals such as every ten years", "every week", "never"], correctIndex: 1, explanation: "Censuses are usually a decade apart." },
        { prompt: "The people living in one town at a given time are that town's", options: ["census", "population", "sample", "migration"], correctIndex: 1, explanation: "That is its population." },
        { prompt: "The accuracy of totals from a census is", options: ["estimated", "complete", "always wrong", "unknown"], correctIndex: 1, explanation: "A full count gives complete totals." },
        { prompt: "A sample survey covers", options: ["everyone", "only part of the population", "no one", "only the government"], correctIndex: 1, explanation: "A survey questions a sample." },
        { prompt: "Which is NOT usually collected in a census?", options: ["Age", "Sex", "Occupation", "Each person's secret bank password"], correctIndex: 3, explanation: "A census collects demographic data, not private passwords." },
        { prompt: "The main purpose of composition data is to show", options: ["total money", "the make-up of the population", "the weather", "export prices"], correctIndex: 1, explanation: "Composition shows age, sex and occupation make-up." },
        { prompt: "A census counts", options: ["a representative fraction", "the whole population", "only adults", "only workers"], correctIndex: 1, explanation: "It counts the whole population." },
        { prompt: "Knowing children's ages by district helps a government to plan", options: ["schools", "exports", "exchange rates", "advertising"], correctIndex: 0, explanation: "Age data guides school planning." },
        { prompt: "The study that measures births, deaths and migration is", options: ["accounting", "demography", "geography of rocks", "marketing"], correctIndex: 1, explanation: "Demography measures these population changes." },
        { prompt: "A complete count taken by government at intervals is a", options: ["survey", "census", "poll", "budget"], correctIndex: 1, explanation: "That describes a census." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define population, demography and a population census.", answerKey: "Population is the total number of people living in a defined area at a given time. Demography is the study of populations — their size, composition and change. A population census is the official counting of every person in a country, with information collected on each household and member. Award 3 for population, 3 for demography, 4 for census.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "State three types of information a population census collects.", answerKey: "Any three of: the number of people and where they live; age; sex; occupation; education; household size — data used to plan services. Award 2.5 marks per correct item, plus 0.5 for noting the planning use.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "A census differs from a sample survey mainly because a census", options: ["questions only a sample", "counts every person", "is always cheaper", "records only names"], correctIndex: 1, answerKey: "A census is a complete count of everyone, unlike a sample survey. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why a census is more costly and time-consuming than a sample survey.", answerKey: "A census must count and record every single person in the country, so it needs many enumerators, forms and processing, taking much time and money. A sample survey questions only a part of the population, so it is quicker and cheaper, though its totals are estimates. Award marks for the complete-count point and the contrast with a sample.", marks: 6 },
        { type: "ESSAY", prompt: "Explain what a population census is, what it collects, and how it differs from a sample survey.", answerKey: "Award marks for: definitions of population and census, 8; the enumeration process and that a census is a complete count taken at intervals by government, 8; the information collected — numbers, age, sex, occupation and composition, 8; the contrast with a sample survey (coverage, cost, accuracy of totals), 6. A script that treats a census as a sample should not exceed 12.", marks: 30 },
      ],
    },
    // source: LibreTexts Medicine — Field Trials of Health Interventions 10.4 Enumeration (de facto and de jure population) (https://med.libretexts.org/Bookshelves/Nursing/Field_Trials_of_Health_Interventions_-_A_Toolbox_(Smith_Morrow_and_Ross)/10:_Censuses_and_mapping/10.04:_Enumeration)
    {
      slug: "types-and-problems-of-census",
      title: "Types of Census, Its Importance and Problems",
      objective:
        "By the end of the topic, learners should be able to distinguish the de facto from the de jure census, and explain the importance and the problems of taking a census.",
      estimatedMinutes: 110,
      notes: `## Types of population census

**De facto census** — counts each person **where they actually are** on census night; the de facto population is those **who slept in the household the night before the census**, whether or not they normally live there.
**De jure census** — counts each person at their **usual (permanent) residence**; the de jure population comprises the **normal residents**, including those temporarily away during the enumeration.

| Feature | De facto | De jure |
| --- | --- | --- |
| Who is counted | People present on census night | Normal (usual) residents |
| Visitors | Counted where they are | Counted at their home area |
| People away from home | Missed at home, counted elsewhere | Counted at home |

- National censuses often use the **de facto** method (easier — count who is present); intervention studies often prefer **de jure** (to identify usual residents).

## Importance of a census

- Shows the **size and growth** of the population for planning.
- Reveals the **composition** (age, sex, occupation) to plan schools, hospitals, jobs and housing.
- Helps allocate **government revenue and services** fairly between regions.
- Provides data for calculating rates (birth, death) and **population density**.
- Guides **businesses** in locating and sizing their operations.

## Characteristics and problems of a census

- **Costly and time-consuming** — counting everyone needs many workers, forms and money.
- **Illiteracy and language barriers** — some people cannot read forms or understand questions.
- **Ignorance or suspicion** — people may fear the census is for tax or may not cooperate.
- **Inaccessible areas** — poor roads and remote settlements make some people hard to reach.
- **Movement of people** — migration and travel cause double counting or omission.
- **Deliberate misreporting** — ages or household size may be given wrongly, sometimes for expected benefits.

## Common errors

- **Mixing up de facto and de jure.** De facto = where people *are* on census night; de jure = where they *usually live*.
- **Assuming a census is always accurate.** Illiteracy, inaccessibility and misreporting cause errors.
- **Forgetting the planning purpose.** The census exists mainly to guide the provision of services.`,
      workedExample: `**Question:** On census night a trader from Town A is sleeping in a hotel in Town B. Under a de facto census and under a de jure census, where is he counted? Then give one importance and one problem of the census.

**Solution**

*Step 1 — de facto.* A de facto census counts people **where they actually are** on census night. The trader slept in Town B, so he is counted in **Town B**.

*Step 2 — de jure.* A de jure census counts people at their **usual residence**. The trader normally lives in Town A, so he is counted in **Town A**, even though he is away.

*Step 3 — one importance.* The census reveals the population's size and composition, which lets the government **plan schools, hospitals and other services**.

*Step 4 — one problem.* Because people move and travel, a census can suffer **double counting or omission** (as this traveller shows), reducing accuracy.

**Answer:** De facto counts him in Town B (where he slept); de jure counts him in Town A (his usual home). The census is important for planning services, but movement of people is a problem that can cause miscounting.`,
      quiz: [
        { prompt: "A de facto census counts people", options: ["at their usual home", "where they actually are on census night", "only if employed", "only adults"], correctIndex: 1, explanation: "De facto counts those present on census night." },
        { prompt: "A de jure census counts people", options: ["where they slept last night", "at their usual (permanent) residence", "only visitors", "only children"], correctIndex: 1, explanation: "De jure counts normal residents." },
        { prompt: "The de facto population is those who", options: ["usually live there", "slept in the household the night before the census", "are away travelling", "pay tax"], correctIndex: 1, explanation: "De facto = present on census night." },
        { prompt: "The de jure population comprises", options: ["visitors only", "the normal residents, including those temporarily away", "tourists", "the unemployed"], correctIndex: 1, explanation: "De jure counts usual residents even if absent." },
        { prompt: "A visitor staying in a hotel on census night is counted there under the", options: ["de jure census", "de facto census", "sample survey", "tax return"], correctIndex: 1, explanation: "De facto counts people where they are." },
        { prompt: "National censuses often use the", options: ["de jure method", "de facto method", "no method", "sample method"], correctIndex: 1, explanation: "The de facto method is easier for national counts." },
        { prompt: "One importance of a census is to", options: ["hide the population", "plan schools, hospitals and services", "raise prices", "stop migration"], correctIndex: 1, explanation: "Composition data guides service planning." },
        { prompt: "A census helps calculate rates such as", options: ["interest rates only", "birth and death rates and population density", "exchange rates", "tax rates only"], correctIndex: 1, explanation: "Population data underlies these rates." },
        { prompt: "A problem of taking a census is that it is", options: ["cheap and quick", "costly and time-consuming", "always accurate", "done yearly"], correctIndex: 1, explanation: "Counting everyone costs much time and money." },
        { prompt: "Illiteracy is a census problem because people may", options: ["move house", "be unable to read forms or understand questions", "pay more tax", "count twice"], correctIndex: 1, explanation: "Reading and understanding forms can be hard." },
        { prompt: "Suspicion of the census can cause people to", options: ["cooperate fully", "refuse or give wrong information", "move abroad", "pay fees"], correctIndex: 1, explanation: "Fear of tax or misuse reduces cooperation." },
        { prompt: "Inaccessible areas cause the problem of", options: ["over-counting cities", "people being hard to reach and count", "lower prices", "more migration"], correctIndex: 1, explanation: "Remote settlements are hard to enumerate." },
        { prompt: "Movement of people during a census can lead to", options: ["perfect accuracy", "double counting or omission", "lower cost", "faster counting"], correctIndex: 1, explanation: "Travel causes miscounting." },
        { prompt: "Deliberate misreporting of age or household size harms the census's", options: ["cost", "accuracy", "colour", "location"], correctIndex: 1, explanation: "Wrong answers reduce accuracy." },
        { prompt: "A person away from home is counted at home under the", options: ["de facto census", "de jure census", "sample survey", "poll"], correctIndex: 1, explanation: "De jure counts usual residents even when absent." },
        { prompt: "Which is TRUE of the de facto method?", options: ["It counts usual residents", "It counts people where they are on census night", "It ignores visitors", "It samples households"], correctIndex: 1, explanation: "De facto counts those present." },
        { prompt: "Census data helps businesses decide", options: ["nothing", "where to locate and how big to be", "the weather", "the tax law"], correctIndex: 1, explanation: "Population data guides business location and size." },
        { prompt: "A census allocates government revenue and services more", options: ["randomly", "fairly between regions", "secretly", "slowly"], correctIndex: 1, explanation: "Accurate counts guide fair allocation." },
        { prompt: "The easier method for a national count is generally", options: ["de jure", "de facto", "neither", "a survey"], correctIndex: 1, explanation: "De facto (count who is present) is simpler." },
        { prompt: "A key difference between the two methods is whether people are counted where they", options: ["work", "are present or usually live", "were born only", "pay tax"], correctIndex: 1, explanation: "Present (de facto) vs usual residence (de jure)." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between a de facto and a de jure population census.", answerKey: "A de facto census counts each person where they actually are on census night (those who slept in the household the night before), including visitors. A de jure census counts each person at their usual/permanent residence — the normal residents — including those temporarily away. Award 5 per method correctly distinguished.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "State three reasons why a population census is important.", answerKey: "Any three of: shows population size and growth for planning; reveals composition (age, sex, occupation) to plan schools, hospitals, jobs and housing; helps allocate government revenue and services fairly; provides data for birth/death rates and population density; guides business location. Award 2.5 marks and 0.5 development each, up to three.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "A student studying away from home is counted at home under which census?", options: ["De facto", "De jure", "Sample survey", "Neither"], correctIndex: 1, answerKey: "The de jure census counts usual residents even when absent. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain two problems faced in taking an accurate population census.", answerKey: "Any two of: high cost and time; illiteracy or language barriers; suspicion/non-cooperation; inaccessible remote areas; movement of people causing double counting or omission; deliberate misreporting of age or household size. Award 3 marks per problem explained.", marks: 6 },
        { type: "ESSAY", prompt: "Describe the types of population census and discuss the importance and the problems of taking a census.", answerKey: "Award marks for: de facto vs de jure census clearly distinguished, 8; importance — planning, composition, fair allocation, rates and density, business use (any four), 10; problems — cost, illiteracy, suspicion, inaccessibility, movement, misreporting (any four), 10; structure and examples, 2. A script covering only types or only problems should not exceed 16.", marks: 30 },
      ],
    },
    // source: OpenStax — Introduction to Sociology 3e, 20.1 Demography and Population (fertility/birth rate, mortality/death rate, migration) (https://openstax.org/books/introduction-sociology-3e/pages/20-1-demography-and-population)
    {
      slug: "determinants-of-population-and-density",
      title: "Determinants of Population Size and Growth; Population Density",
      objective:
        "By the end of the topic, learners should be able to explain how birth rate, death rate and migration determine population size and growth, and calculate population density.",
      estimatedMinutes: 110,
      notes: `## The three determinants

Population size and growth change through three factors:

**Birth rate (fertility)** — the number of live births, usually measured as the **crude birth rate: live births per 1,000 people per year**. A higher birth rate raises the population.
**Death rate (mortality)** — the number of deaths, measured as the **crude death rate: deaths per 1,000 people per year**. A higher death rate lowers the population.
**Migration** — the movement of people into an area (**immigration**) or out of it (**emigration**), voluntarily or by force. Net immigration raises the population; net emigration lowers it.

## Natural increase and net migration

- **Natural increase** = birth rate − death rate. If births exceed deaths, the population grows naturally.
- **Net migration** = immigration − emigration.
- **Overall population change** = natural increase + net migration.

## What affects birth and death rates

- **Birth rate** is influenced by marriage age, family size preferences, use of contraception, income and education.
- **Death rate** is influenced by medical care, nutrition, clean water, sanitation and living conditions; better conditions lower it.

## Population density

**Population density** — the average number of people per unit of area.
- **Population density = total population ÷ total land area** (usually people per square kilometre).
- It shows how crowded an area is, but not how evenly people are spread.

## Worked density figure

- A district of 100,000 people covering 50 square kilometres has a density of 100,000 ÷ 50 = **2,000 people per square kilometre**.

## Common errors

- **Forgetting migration.** Population change is not only births minus deaths; migration matters too.
- **Confusing the birth rate with the number of births.** The crude rate is per 1,000 people, allowing fair comparison between areas.
- **Reading density as an even spread.** A high average density can still hide empty and crowded parts.`,
      workedExample: `**Question:** A country of 2,000,000 people has, in one year, a crude birth rate of 30 per 1,000 and a crude death rate of 10 per 1,000, plus net immigration of 5,000. (a) Find the natural increase in numbers. (b) Find the total population change. (c) If the land area is 100,000 square kilometres, find the population density.

**Solution**

*Step 1 — births and deaths in numbers.* Per 1,000 there are 30 births and 10 deaths. For 2,000,000 people (that is 2,000 lots of 1,000): births = 30 × 2,000 = 60,000; deaths = 10 × 2,000 = 20,000.

*Step 2 — natural increase.* Natural increase = births − deaths = 60,000 − 20,000 = **40,000**.

*Step 3 — total change.* Total change = natural increase + net migration = 40,000 + 5,000 = **45,000**. The population rises to 2,045,000.

*Step 4 — density.* Density = total population ÷ area = 2,000,000 ÷ 100,000 = **20 people per square kilometre**.

**Answer:** Natural increase = 40,000; total population change = 45,000; population density = 20 people per square kilometre.`,
      quiz: [
        { prompt: "The three determinants of population change are birth rate, death rate and", options: ["income", "migration", "inflation", "taxation"], correctIndex: 1, explanation: "Births, deaths and migration change the population." },
        { prompt: "The crude birth rate is measured per", options: ["100 people", "1,000 people per year", "family", "square kilometre"], correctIndex: 1, explanation: "Crude birth rate is live births per 1,000 per year." },
        { prompt: "The crude death rate is the number of deaths per", options: ["1,000 people per year", "family", "town", "hour"], correctIndex: 0, explanation: "Crude death rate is deaths per 1,000 per year." },
        { prompt: "A higher birth rate tends to", options: ["lower the population", "raise the population", "have no effect", "cause emigration"], correctIndex: 1, explanation: "More births raise the population." },
        { prompt: "A higher death rate tends to", options: ["raise the population", "lower the population", "raise births", "raise immigration"], correctIndex: 1, explanation: "More deaths lower the population." },
        { prompt: "Immigration is movement", options: ["out of an area", "into an area", "within a house", "of goods"], correctIndex: 1, explanation: "Immigration is people moving in." },
        { prompt: "Emigration is movement", options: ["into an area", "out of an area", "of money", "of goods"], correctIndex: 1, explanation: "Emigration is people moving out." },
        { prompt: "Natural increase equals", options: ["birth rate + death rate", "birth rate − death rate", "immigration − emigration", "births × deaths"], correctIndex: 1, explanation: "Natural increase is births minus deaths." },
        { prompt: "Net migration equals", options: ["births − deaths", "immigration − emigration", "births + deaths", "population ÷ area"], correctIndex: 1, explanation: "Net migration is immigration minus emigration." },
        { prompt: "Overall population change equals natural increase plus", options: ["density", "net migration", "birth rate", "land area"], correctIndex: 1, explanation: "Change = natural increase + net migration." },
        { prompt: "A death rate falls when there is better", options: ["nothing", "medical care, nutrition and sanitation", "emigration", "taxation"], correctIndex: 1, explanation: "Better health conditions lower mortality." },
        { prompt: "Birth rate is influenced by", options: ["road quality", "marriage age, family size preferences and contraception", "rainfall only", "exchange rates"], correctIndex: 1, explanation: "These social factors affect fertility." },
        { prompt: "Population density is", options: ["total births", "average number of people per unit area", "the death rate", "net migration"], correctIndex: 1, explanation: "Density measures people per unit area." },
        { prompt: "Population density is calculated as", options: ["area ÷ population", "total population ÷ total area", "births ÷ deaths", "population × area"], correctIndex: 1, explanation: "Density = population ÷ area." },
        { prompt: "100,000 people in 50 square kilometres gives a density of", options: ["2,000 per km²", "500 per km²", "50,000 per km²", "5 per km²"], correctIndex: 0, explanation: "100,000 ÷ 50 = 2,000 per km²." },
        { prompt: "If births exceed deaths, the population grows by", options: ["net migration only", "natural increase", "density", "emigration"], correctIndex: 1, explanation: "Births over deaths is natural increase." },
        { prompt: "Crude rates are given per 1,000 people so that areas can be", options: ["hidden", "fairly compared", "taxed", "merged"], correctIndex: 1, explanation: "A common base allows comparison." },
        { prompt: "A high average density can still hide", options: ["the total area", "empty and crowded parts", "the birth rate", "the death rate"], correctIndex: 1, explanation: "Density is an average, not an even spread." },
        { prompt: "For 2,000,000 people at 30 births per 1,000, the number of births is", options: ["6,000", "60,000", "600,000", "30"], correctIndex: 1, explanation: "30 × 2,000 = 60,000 births." },
        { prompt: "Net immigration of 5,000 added to a natural increase of 40,000 gives a total change of", options: ["35,000", "45,000", "40,000", "5,000"], correctIndex: 1, explanation: "40,000 + 5,000 = 45,000." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain how birth rate, death rate and migration together determine the size and growth of a population.", answerKey: "A higher birth rate adds people; a higher death rate removes people; the difference is the natural increase. Migration adds people through immigration and removes them through emigration, giving net migration. Overall population change = natural increase (births − deaths) + net migration. Award marks for each of the three factors and the combining rule.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Define the crude birth rate and the crude death rate.", answerKey: "The crude birth rate is the number of live births per 1,000 people per year. The crude death rate is the number of deaths per 1,000 people per year. Award 4 per correct definition.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Population density is calculated as", options: ["total area ÷ total population", "total population ÷ total area", "births ÷ deaths", "immigration ÷ emigration"], correctIndex: 1, answerKey: "Density = total population ÷ total land area. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A region has 600,000 people and covers 20,000 square kilometres. Find its population density and state what it shows.", answerKey: "Density = 600,000 ÷ 20,000 = 30 people per square kilometre. It shows the average number of people per unit area (how crowded the region is on average), though it does not show whether they are evenly spread. Award 4 for the calculation, 2 for the interpretation.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss the determinants of population size and growth, and explain how population density is measured and interpreted.", answerKey: "Award marks for: birth rate (fertility) and its influences, 6; death rate (mortality) and its influences, 6; migration (immigration and emigration) and net migration, 6; combining into natural increase and total population change, 6; population density formula and its interpretation as an average, 6. A script missing migration or density loses those marks.", marks: 30 },
      ],
    },
    // source: OpenStax — Introduction to Sociology 3e, 20.1 Demography and Population (Malthusian theory) (https://openstax.org/books/introduction-sociology-3e/pages/20-1-demography-and-population) and LibreTexts Social Sci — Principles of Economics 33.2 Population Growth and Economic Development (https://socialsci.libretexts.org/Bookshelves/Economics/Principles_of_Economics_(LibreTexts)/33:_Economic_Development/33.2:_Population_Growth_and_Economic_Development)
    {
      slug: "malthusian-theory-of-population",
      title: "The Malthusian Theory of Population Growth",
      objective:
        "By the end of the topic, learners should be able to state the Malthusian theory of population growth, explain its checks, and evaluate why its dire prediction has largely not come true.",
      estimatedMinutes: 100,
      notes: `## The theory

**Thomas Malthus** argued that **population tends to grow faster than the food supply**.
- Population, left unchecked, grows **exponentially** (multiplying), while food production grows only **slowly** (limited by diminishing returns on land).
- So population would eventually **outrun the food supply**, leading to starvation, poverty and conflict.

## Malthus's checks on population

**Positive checks** — factors that **raise the death rate** and cut population back: **war, famine and disease**.
**Preventive checks** — factors that **lower the birth rate**: later marriage, and (in modern terms) birth control.
- Through these checks, population would be pushed back toward the level the food supply can feed.

## Why the prediction has largely not come true

Malthus's gloomy forecast has mostly failed because:
1. **New technology and capital in agriculture** — better seeds, fertiliser, machinery and methods raised food output far more than Malthus expected. He failed to allow for these gains.
2. **Medical advances** cut deaths from disease, but living standards still rose.
3. **Falling birth rates as incomes rise** — higher incomes tend to *reduce* population growth, because the opportunity cost of raising children rises and families choose to have fewer; this is part of the **demographic transition** (death rates fall first, then birth rates).

## A balanced view

- Malthus rightly saw that population and resources are linked and that unchecked growth can strain food supply.
- But he underestimated **technological progress** and the way **rising incomes lower birth rates**, so mass starvation from overpopulation has not become the general rule.

## Common errors

- **Saying food grows exponentially in the theory.** In Malthus's theory food grows slowly while population grows exponentially.
- **Forgetting the checks.** Positive checks raise deaths; preventive checks lower births.
- **Treating the theory as simply wrong.** Its core insight (population–resource link) holds; its error was ignoring technology and falling fertility.`,
      workedExample: `**Question:** State the central claim of the Malthusian theory, name one positive and one preventive check, and give two reasons the prediction has largely not come true.

**Solution**

*Step 1 — central claim.* Malthus argued that **population grows faster (exponentially) than the food supply**, so population would outrun food and cause starvation, poverty and conflict.

*Step 2 — checks.* A **positive check** (raising the death rate) is **famine** (or war or disease). A **preventive check** (lowering the birth rate) is **later marriage** (or birth control).

*Step 3 — two reasons it has not come true.*
- **Technology in agriculture** — better seeds, fertiliser and machinery raised food output far more than Malthus expected.
- **Falling birth rates as incomes rise** — richer societies choose smaller families, so population growth slows.

**Answer:** Malthus claimed population outgrows food; positive check = famine, preventive check = later marriage; the prediction failed mainly because farm technology raised food output and rising incomes lowered birth rates.`,
      quiz: [
        { prompt: "Malthus argued that population tends to grow", options: ["slower than food", "faster than the food supply", "at the same rate as food", "not at all"], correctIndex: 1, explanation: "Population outpaces food in his theory." },
        { prompt: "In the theory, population grows", options: ["slowly", "exponentially", "not at all", "in reverse"], correctIndex: 1, explanation: "Unchecked population multiplies (exponential growth)." },
        { prompt: "In the theory, food production grows", options: ["exponentially", "slowly, limited by land", "faster than population", "infinitely"], correctIndex: 1, explanation: "Food grows slowly, held back by diminishing returns." },
        { prompt: "Malthus predicted population would eventually cause", options: ["endless wealth", "starvation, poverty and conflict", "lower prices", "more land"], correctIndex: 1, explanation: "Outrunning food leads to hardship." },
        { prompt: "Positive checks are factors that", options: ["lower the birth rate", "raise the death rate", "raise incomes", "add land"], correctIndex: 1, explanation: "Positive checks (war, famine, disease) raise deaths." },
        { prompt: "Which is a positive check?", options: ["Later marriage", "Birth control", "Famine", "Higher income"], correctIndex: 2, explanation: "Famine raises the death rate — a positive check." },
        { prompt: "Preventive checks are factors that", options: ["raise the death rate", "lower the birth rate", "add food", "cause war"], correctIndex: 1, explanation: "Preventive checks lower births." },
        { prompt: "Which is a preventive check?", options: ["Disease", "War", "Later marriage", "Famine"], correctIndex: 2, explanation: "Later marriage lowers the birth rate." },
        { prompt: "One reason the prediction failed is advances in", options: ["agriculture technology", "war", "famine", "disease"], correctIndex: 0, explanation: "Farm technology raised food output greatly." },
        { prompt: "Malthus failed to allow for gains from", options: ["famine", "physical capital and new technology in agriculture", "war", "disease"], correctIndex: 1, explanation: "He underestimated technological progress." },
        { prompt: "As incomes rise, population growth tends to", options: ["rise", "fall", "stay fixed", "explode"], correctIndex: 1, explanation: "Higher incomes tend to reduce birth rates." },
        { prompt: "The process where death rates fall first and then birth rates fall is the", options: ["Malthusian trap", "demographic transition", "census", "migration"], correctIndex: 1, explanation: "This is the demographic transition." },
        { prompt: "A key insight of Malthus that still holds is that", options: ["food is unlimited", "population and resources are linked", "technology never changes", "births never fall"], correctIndex: 1, explanation: "The population–resource link is his lasting insight." },
        { prompt: "His main error was ignoring", options: ["births", "technological progress and falling fertility", "deaths", "land"], correctIndex: 1, explanation: "He missed technology and lower birth rates." },
        { prompt: "The primary cost of having children, which rises with income, is the", options: ["price of land", "opportunity cost of parents' time", "death rate", "food supply"], correctIndex: 1, explanation: "Higher incomes raise the opportunity cost of children." },
        { prompt: "Medical advances mainly reduced", options: ["births", "deaths from disease", "migration", "food"], correctIndex: 1, explanation: "Medicine cut disease deaths." },
        { prompt: "In Malthus's view, unchecked growth would push population back toward the level that", options: ["land can hold empty", "the food supply can feed", "banks allow", "roads reach"], correctIndex: 1, explanation: "Checks return population to what food can support." },
        { prompt: "War, famine and disease are together classed as", options: ["preventive checks", "positive checks", "food gains", "migration"], correctIndex: 1, explanation: "These raise deaths — positive checks." },
        { prompt: "A balanced verdict on Malthus is that his core link was right but he underestimated", options: ["births", "technology and falling birth rates", "deaths", "war"], correctIndex: 1, explanation: "Technology and lower fertility offset his forecast." },
        { prompt: "Which statement matches the theory?", options: ["Food grows exponentially, population slowly", "Population grows exponentially, food slowly", "Both grow slowly", "Both grow exponentially"], correctIndex: 1, explanation: "Population exponential, food slow." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the central claim of the Malthusian theory of population growth.", answerKey: "Malthus argued that population, left unchecked, grows exponentially while food production grows only slowly (limited by diminishing returns on land), so population tends to outrun the food supply, leading to starvation, poverty and conflict. Award marks for the faster-population-than-food claim and the consequence.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between positive checks and preventive checks, with an example of each.", answerKey: "Positive checks raise the death rate to cut population — e.g. war, famine or disease. Preventive checks lower the birth rate — e.g. later marriage or birth control. Award 4 per type with a correct example.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Which factor most explains why Malthus's prediction has largely not come true?", options: ["More war", "Technological progress in agriculture", "Higher death rates", "Less migration"], correctIndex: 1, answerKey: "New technology and capital raised food output far more than Malthus expected. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why higher incomes tend to slow population growth, contrary to Malthus.", answerKey: "As incomes rise, the opportunity cost of the time spent raising children rises, and families tend to choose to have fewer children, so birth rates fall. Combined with earlier falls in death rates, this demographic transition slows population growth — the opposite of Malthus's assumption that higher incomes would raise population. Award marks for the opportunity-cost/fertility point and the demographic transition.", marks: 6 },
        { type: "ESSAY", prompt: "State and critically evaluate the Malthusian theory of population growth.", answerKey: "Award marks for: the theory — population grows exponentially, food slowly, so population outruns food, 8; positive and preventive checks, 6; criticisms — agricultural technology and capital raised food output, medical advances, and falling birth rates as incomes rise (demographic transition), 12; a balanced conclusion that the population–resource link holds but the dire prediction failed, 4. A purely descriptive script with no evaluation should not exceed 15.", marks: 30 },
      ],
    },
    // source: OpenStax — Introduction to Sociology 3e, 20.1 Demography and Population (population composition: age, sex, distribution) (https://openstax.org/books/introduction-sociology-3e/pages/20-1-demography-and-population)
    {
      slug: "distribution-of-population",
      title: "The Distribution of Population: Geographical, Age, Sex and Occupation",
      objective:
        "By the end of the topic, learners should be able to describe how a population is distributed by area, age, sex and occupation, and explain why this composition matters for the economy.",
      estimatedMinutes: 100,
      notes: `## Population composition

**Population composition** — a snapshot of the demographic profile of a population: how it is spread by area, age, sex and occupation. It is not just the total number but the **make-up** of the people.

## Geographical (spatial) distribution

**Geographical distribution** — how the population is spread across the land: some areas (cities, fertile land) are densely settled, others (deserts, mountains) sparsely.
- Uneven distribution affects where services, jobs and infrastructure are needed.
- **Urbanisation** is the movement of people from rural areas to towns, raising urban density.

## Age distribution (age structure)

**Age distribution** — the split of the population into age groups, often: **young dependants (0–14), the working-age population (15–64), and elderly dependants (65+)**.
**Dependency ratio** — the number of dependants (young + old) compared with the working-age population; a high ratio means each worker supports more non-workers.
- A "young" population (many children) needs schools; an "ageing" population needs pensions and health care.

## Sex distribution

**Sex distribution (sex ratio)** — the balance of males to females, often given as the number of males per 100 females.
- It affects the size of the labour force, marriage patterns and the demand for goods and services.

## Occupational distribution

**Occupational distribution** — how the working population is spread across the sectors of production: **primary (agriculture, mining), secondary (manufacturing) and tertiary (services)**.
- Less developed economies have most workers in the **primary** sector; developed economies have most in the **tertiary** sector.

## Why composition matters

| Aspect | Why it matters |
| --- | --- |
| Geographical | Where to build schools, roads, hospitals |
| Age | Balance of schools vs pensions; dependency burden |
| Sex | Size of labour force; social planning |
| Occupation | Structure of the economy and its development |

## Common errors

- **Confusing total size with composition.** Two countries with the same total can have very different age or occupation make-ups.
- **Ignoring the dependency ratio.** A large working-age share is an economic advantage.
- **Assuming even geographical spread.** Population is usually concentrated in favourable areas.`,
      workedExample: `**Question:** Country X has 40% of its people aged 0–14, 55% aged 15–64 and 5% aged 65+, and most workers in farming. Describe its age structure and occupational distribution, and state one economic implication of each.

**Solution**

*Step 1 — age structure.* With 40% children and only 5% elderly, Country X has a **young population**. The dependants (young + old) are 45% and the working-age share is 55%, so the **dependency ratio is high** — each worker supports many non-workers. *Implication:* strong demand for **schools** and a heavy burden on workers to support children.

*Step 2 — occupational distribution.* Most workers are in **farming (the primary sector)**, which is typical of a **less developed economy**. *Implication:* the economy depends on agriculture and may need to develop manufacturing and services to raise incomes.

*Step 3 — link.* The composition, not just the total population, shapes what the economy needs and how it can develop.

**Answer:** Country X has a young age structure with a high dependency ratio (needs schools, heavy support burden) and a mainly primary-sector workforce (an agricultural, less developed economy needing diversification).`,
      quiz: [
        { prompt: "Population composition describes the population's", options: ["total only", "make-up by area, age, sex and occupation", "birth rate only", "land area"], correctIndex: 1, explanation: "Composition is the make-up, not just the total." },
        { prompt: "Geographical distribution is how the population is spread across", options: ["age groups", "the land", "jobs", "sexes"], correctIndex: 1, explanation: "It is the spatial spread of people." },
        { prompt: "Cities are usually", options: ["sparsely settled", "densely settled", "empty", "underwater"], correctIndex: 1, explanation: "Cities have high population density." },
        { prompt: "Urbanisation is the movement of people from", options: ["towns to rural areas", "rural areas to towns", "abroad", "farms to farms"], correctIndex: 1, explanation: "Urbanisation raises urban density." },
        { prompt: "The working-age group is usually taken as ages", options: ["0–14", "15–64", "65+", "0–5"], correctIndex: 1, explanation: "15–64 is the working-age band." },
        { prompt: "Young dependants are usually aged", options: ["0–14", "15–64", "65+", "18–30"], correctIndex: 0, explanation: "0–14 are young dependants." },
        { prompt: "The dependency ratio compares dependants with the", options: ["elderly", "working-age population", "total land", "birth rate"], correctIndex: 1, explanation: "It relates non-workers to workers." },
        { prompt: "A young population most needs more", options: ["pensions", "schools", "cemeteries", "exports"], correctIndex: 1, explanation: "Many children need schooling." },
        { prompt: "An ageing population most needs more", options: ["schools", "pensions and health care", "toys", "nurseries"], correctIndex: 1, explanation: "Elderly people need pensions and health care." },
        { prompt: "The sex ratio is often given as the number of males per", options: ["1,000 births", "100 females", "square kilometre", "household"], correctIndex: 1, explanation: "Sex ratio = males per 100 females." },
        { prompt: "Occupational distribution shows how workers are spread across the", options: ["age groups", "sectors of production", "sexes", "regions only"], correctIndex: 1, explanation: "It splits workers by primary, secondary, tertiary." },
        { prompt: "Less developed economies have most workers in the", options: ["tertiary sector", "primary sector", "quaternary sector", "no sector"], correctIndex: 1, explanation: "Agriculture dominates in poorer economies." },
        { prompt: "Developed economies have most workers in the", options: ["primary sector", "secondary sector", "tertiary sector", "fishing"], correctIndex: 2, explanation: "Services dominate developed economies." },
        { prompt: "A high dependency ratio means each worker supports", options: ["fewer people", "more non-workers", "only themselves", "no one"], correctIndex: 1, explanation: "More dependants per worker is a heavier burden." },
        { prompt: "Geographical distribution matters for deciding where to build", options: ["nothing", "schools, roads and hospitals", "exports", "the birth rate"], correctIndex: 1, explanation: "Services follow where people live." },
        { prompt: "Two countries with the same total population can differ in their", options: ["number of people", "age and occupation composition", "land area only", "nothing"], correctIndex: 1, explanation: "Composition can differ greatly." },
        { prompt: "The sex ratio affects the size of the", options: ["land area", "labour force and marriage patterns", "birth certificate", "tax law"], correctIndex: 1, explanation: "Sex balance shapes the workforce and society." },
        { prompt: "Occupational distribution reflects the country's", options: ["weather", "level of economic development", "flag", "language"], correctIndex: 1, explanation: "The sector mix shows development." },
        { prompt: "A large working-age share is generally an economic", options: ["disadvantage", "advantage", "irrelevance", "problem always"], correctIndex: 1, explanation: "More workers relative to dependants aids the economy." },
        { prompt: "Population is usually concentrated in", options: ["deserts", "favourable areas such as fertile land and cities", "mountains only", "the sea"], correctIndex: 1, explanation: "People settle where conditions favour them." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define population composition and name the four ways population distribution is usually described.", answerKey: "Population composition is a snapshot of the make-up of a population — not just its total but how it is spread. The four ways are geographical (area) distribution, age distribution, sex distribution and occupational distribution. Award 4 for the definition, 1.5 per correct type of distribution.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Explain the age distribution of a population and what a dependency ratio measures.", answerKey: "Age distribution splits the population into age groups, usually young dependants (0–14), working-age (15–64) and elderly dependants (65+). The dependency ratio compares the number of dependants (young plus old) with the working-age population; a high ratio means each worker supports more non-workers. Award 4 for the age groups, 4 for the dependency ratio.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "A country with most of its workers in agriculture is showing a(n)", options: ["tertiary-dominated economy", "primary-dominated occupational distribution", "ageing population", "even sex ratio"], correctIndex: 1, answerKey: "Most workers in agriculture is a primary-sector occupational distribution, typical of a less developed economy. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why the occupational distribution of a population reflects its level of development.", answerKey: "Less developed economies have most of their workforce in the primary sector (agriculture, mining), while developed economies have most in the tertiary (services) sector, with manufacturing in between. So the share of workers in each sector shows how far the economy has developed away from basic extraction toward services. Award marks for the primary-vs-tertiary contrast and the link to development.", marks: 6 },
        { type: "ESSAY", prompt: "Describe how a population is distributed by area, age, sex and occupation, and explain why this composition matters for the economy.", answerKey: "Award marks for: geographical distribution and urbanisation, 6; age distribution and the dependency ratio, 7; sex distribution (sex ratio) and its effects, 6; occupational distribution across primary/secondary/tertiary and its link to development, 7; why composition (not just total size) matters for planning and development, 4. A script covering fewer than three aspects loses proportionally.", marks: 30 },
      ],
    },
    // source: LibreTexts Social Sci — Sociology (Boundless) 8.4E Population Trends (over- and under-population) (https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Sociology_(Boundless)/08:_Global_Stratification_and_Inequality/8.04:_Global_Diversity/8.4E:_Population_Trends) and LibreTexts Social Sci — Principles of Economics 33.2 Population Growth and Economic Development (https://socialsci.libretexts.org/Bookshelves/Economics/Principles_of_Economics_(LibreTexts)/33:_Economic_Development/33.2:_Population_Growth_and_Economic_Development)
    {
      slug: "optimum-under-and-over-population",
      title: "Optimum, Under- and Over-Population",
      objective:
        "By the end of the topic, learners should be able to explain optimum population, under-population and over-population in relation to a country's resources, and their economic effects.",
      estimatedMinutes: 100,
      notes: `## Population relative to resources

The key idea is the **ratio of population to resources**, not the raw number of people. A country's resources include its land, capital, technology and skills. Comparing the population with these resources gives three cases.

**Over-population** — when the **population exceeds** the resources available to support it (the population is too large for the resources and material/social support such as clean water, food, shelter and health care). It is a population:resources ratio that is too high.
**Under-population** — when the population is **too small** to make the best use of the country's resources; there are too few people (and workers) to develop the resources fully.
**Optimum population** — the population size that makes the **best use of the resources**, giving the **highest output per head (per person)** — the balance point between under- and over-population.

## Effects of over-population

- Strain on food, water, housing, schools and health services.
- Can lead to **famine, unemployment, poverty and conflict** over scarce resources.
- Falling output per head as extra people add less than they consume.

## Effects of under-population

- Resources are **under-used**; land and minerals may lie idle for want of workers.
- A small labour force can **slow economic growth**, because population growth is often a driving force of expansion; a shrinking population can reduce GDP.

## Optimum population and output per head

- As population rises from a low level, output per head first **rises** (more workers use the resources better) up to the optimum, then **falls** once the country becomes over-populated.
- The optimum is therefore where **output per person is greatest** for the given resources; it can shift if resources or technology change.

\`\`\`svg Output per head against population
<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Output per head rising to a peak at optimum population then falling">
  <line x1="45" y1="15" x2="45" y2="160" stroke="#555" stroke-width="1.5"/>
  <line x1="45" y1="160" x2="285" y2="160" stroke="#555" stroke-width="1.5"/>
  <text x="8" y="18" font-size="9">Output/head</text>
  <text x="215" y="178" font-size="9">Population</text>
  <path d="M55 150 Q 160 20 265 150" fill="none" stroke="#1f6feb" stroke-width="2"/>
  <line x1="160" y1="55" x2="160" y2="160" stroke="#999" stroke-dasharray="3 3"/>
  <text x="120" y="175" font-size="9">Optimum</text>
  <text x="70" y="150" font-size="9">Under</text>
  <text x="235" y="150" font-size="9">Over</text>
</svg>
\`\`\`

## Common errors

- **Judging by numbers alone.** A large country is not necessarily over-populated; it depends on its resources.
- **Thinking more people is always bad.** Under-population wastes resources; some growth can raise output per head.
- **Treating the optimum as fixed.** It shifts when resources, capital or technology change.`,
      workedExample: `**Question:** Country A has vast farmland and minerals but very few people, and much land lies idle. Country B is small with poor land but a rapidly growing population, with rising unemployment and food shortages. Classify each country and give one effect.

**Solution**

*Step 1 — Country A.* It has abundant resources but too few people to work them, so land lies idle. Its population is **too small for its resources** — it is **under-populated**. *Effect:* resources are under-used and economic growth is held back by the small labour force.

*Step 2 — Country B.* Its growing population is outstripping its limited resources, bringing unemployment and food shortages. Its population is **too large for its resources** — it is **over-populated**. *Effect:* strain on food and jobs, falling output per head, and risk of poverty.

*Step 3 — the ideal.* Between these lies the **optimum population**, where the population best matches the resources and output per head is highest.

**Answer:** Country A is under-populated (idle resources, slow growth); Country B is over-populated (unemployment, food shortages); the optimum is the balance where output per head is greatest.`,
      quiz: [
        { prompt: "The key idea in judging population is the ratio of population to", options: ["land area only", "resources", "births", "cities"], correctIndex: 1, explanation: "It is population relative to resources that matters." },
        { prompt: "Over-population is when the population", options: ["is too small for the resources", "exceeds the resources available to support it", "equals the optimum", "is zero"], correctIndex: 1, explanation: "Over-population means too many people for the resources." },
        { prompt: "Under-population is when the population is", options: ["too large", "too small to use resources fully", "at the optimum", "aging"], correctIndex: 1, explanation: "Too few people leave resources under-used." },
        { prompt: "Optimum population gives the", options: ["lowest output per head", "highest output per head for the resources", "most unemployment", "least land"], correctIndex: 1, explanation: "The optimum maximises output per person." },
        { prompt: "Over-population can lead to", options: ["idle resources", "famine, unemployment and poverty", "rising output per head", "a labour shortage"], correctIndex: 1, explanation: "Too many people strain resources." },
        { prompt: "Under-population can lead to", options: ["over-crowding", "under-used resources and slow growth", "famine", "high density"], correctIndex: 1, explanation: "Too few workers leave resources idle." },
        { prompt: "As population rises to the optimum, output per head", options: ["falls", "rises", "is zero", "is fixed"], correctIndex: 1, explanation: "Output per head rises up to the optimum." },
        { prompt: "Beyond the optimum, output per head", options: ["keeps rising", "falls", "stays at the peak", "disappears"], correctIndex: 1, explanation: "Over-population lowers output per head." },
        { prompt: "A large country is over-populated only if", options: ["it has many cities", "its population exceeds its resources", "it has a census", "it has a coastline"], correctIndex: 1, explanation: "It depends on resources, not size alone." },
        { prompt: "Idle land and minerals for want of workers signal", options: ["over-population", "under-population", "optimum population", "high density"], correctIndex: 1, explanation: "Under-use of resources is under-population." },
        { prompt: "Rising unemployment and food shortages with a growing population signal", options: ["under-population", "over-population", "optimum", "emigration"], correctIndex: 1, explanation: "Population outstripping resources is over-population." },
        { prompt: "The optimum population is a balance between", options: ["births and deaths", "under- and over-population", "cities and farms", "imports and exports"], correctIndex: 1, explanation: "It lies between the two extremes." },
        { prompt: "The optimum can shift when there is a change in", options: ["the flag", "resources, capital or technology", "the census date", "the language"], correctIndex: 1, explanation: "New resources or technology move the optimum." },
        { prompt: "Population growth is often described as", options: ["a driving force of economic expansion", "always harmful", "irrelevant", "illegal"], correctIndex: 0, explanation: "Some growth drives expansion; too little can slow GDP." },
        { prompt: "Over-population is best defined by a population:resources ratio that is", options: ["too low", "too high", "exactly one", "zero"], correctIndex: 1, explanation: "Too many people per unit of resources." },
        { prompt: "Which country is under-populated?", options: ["Vast resources, very few workers, idle land", "Growing population, food shortages", "Balanced population and resources", "High unemployment"], correctIndex: 0, explanation: "Abundant resources with too few workers is under-population." },
        { prompt: "At the optimum, extra people would", options: ["raise output per head", "lower output per head", "not change anything", "add no consumption"], correctIndex: 1, explanation: "Beyond the optimum, more people reduce output per head." },
        { prompt: "Over-population strains", options: ["only exports", "food, water, housing and services", "only the census", "nothing"], correctIndex: 1, explanation: "Resources and services are over-stretched." },
        { prompt: "A shrinking population can reduce a country's", options: ["land area", "GDP and growth", "birth rate only", "optimum forever"], correctIndex: 1, explanation: "Too few people can lower output and growth." },
        { prompt: "The three population situations relative to resources are optimum, under-population and", options: ["over-population", "migration", "density", "urbanisation"], correctIndex: 0, explanation: "The third case is over-population." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define optimum population, under-population and over-population in relation to resources.", answerKey: "Optimum population is the size that makes the best use of a country's resources, giving the highest output per head. Under-population is when the population is too small to use the resources fully. Over-population is when the population exceeds the resources available to support it. Award 4 for optimum, 3 for under-population, 3 for over-population.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "State two economic effects of over-population and two of under-population.", answerKey: "Over-population: strain on food, water, housing and services; unemployment, poverty, famine or conflict; falling output per head. Under-population: under-used resources / idle land; slow economic growth from too small a labour force. Award 2 marks each, up to two effects per case.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "A country whose population exactly maximises output per person for its resources has", options: ["under-population", "over-population", "optimum population", "zero population"], correctIndex: 2, answerKey: "Maximum output per head for the resources is the optimum population. Option C.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why a large country is not necessarily over-populated.", answerKey: "Over-population depends on the ratio of population to resources, not on the raw number of people. A large country with abundant land, capital and technology may still have plenty of resources per person and so not be over-populated; it could even be under-populated if too few people work its resources. Award marks for the population:resources ratio point and the size-alone reasoning.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the concepts of optimum, under- and over-population and discuss their effects on a country's economy, using the idea of output per head.", answerKey: "Award marks for: the population:resources idea, 4; definitions of over-population, under-population and optimum population, 9; output per head rising to the optimum then falling (with a diagram or description), 7; effects of over-population (strain, unemployment, poverty), 5; effects of under-population (idle resources, slow growth), 5. A script judging population by numbers alone, ignoring resources, should not exceed 15.", marks: 30 },
      ],
    },
  ],
};
