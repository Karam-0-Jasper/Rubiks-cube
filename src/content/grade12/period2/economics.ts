import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 12,
// Semester One, Period II: Industrialization of the Liberian Economy and
// Concepts of National Income. CONTENTS: (1) Meaning of industrialization,
// industrialization policies and localization of industries; (2) Role of
// industrialization in economic development (optimum utilization of scarce
// resources; provision of machinery to raise agricultural productivity);
// (3) Measuring national income (GNP, NNP, GDP per capita; uses of national
// income statistics; circular flow of income and expenditure; methods of
// calculating national income; advantages and limitations of GNP/per capita).
// Each top-level CONTENTS item is one topic. Sourced from LibreTexts and
// OpenStax Principles of Macroeconomics 3e.
export const economicsG12P2: PeriodContent = {
  grade: 12,
  number: 2,
  title: "Industrialization of the Liberian Economy and Concepts of National Income",
  summary:
    "Period II of the MoE Grade 12 Economics syllabus. Learners explain the meaning of industrialization, industrialization policies and the localization (clustering) of industries; analyse the role of industrialization in economic development; and measure national income using GNP, NNP, GDP and GDP per capita, the circular flow, the expenditure and income methods, and the uses and limitations of national income statistics.",
  topics: [
    // source: Social Sci LibreTexts — Industrializing Countries (https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Sociology_(Boundless)/08:_Global_Stratification_and_Inequality/8.02:_Global_Stratification/8.2B:_Industrializing_Countries)
    {
      slug: "meaning-of-industrialization",
      title: "The Meaning of Industrialization, Industrialization Policies and Localization of Industries",
      objective:
        "By the end of the topic, learners should be able to define industrialization, describe common industrialization policies, and explain the localization (clustering) of industries.",
      estimatedMinutes: 110,
      notes: `## Industrialization

**Industrialization** — the process of social and economic change that transforms a community from an **agrarian (farming) society** into an **industrial one**, in which manufacturing and machine production become the main source of output and income.
- It is part of a wider **modernization** process, closely tied to **technological innovation**.
- A key aim is to produce goods and services with **high added value** — for example, instead of exporting minerals unprocessed, a country can process them and manufacture finished goods, adding value at home.

## Industrialization policies

**Industrialization policy** — deliberate government measures that encourage the growth of industry. Common types:
- **Import-substitution** — building local industries to make goods the country used to import, protected for a time by tariffs.
- **Export-promotion** — encouraging industries that produce manufactured goods for export.
- **Infrastructure and incentives** — providing power, roads, industrial estates, tax breaks and cheap credit to attract factories.
- **Human capital and technology policy** — training workers and importing/adapting technology so firms can produce efficiently.

## Localization (clustering) of industries

**Localization of industry** — the tendency of firms in the same or related industries to **concentrate in one geographic area** (a cluster).
- Driven by **economies of scale**: internal economies enlarge single firms, while **external economies of scale** draw related firms to the same area.
- Benefits of clustering (external economies): a shared **pooled labour** market, **specialised suppliers** nearby, and **knowledge spillovers** between firms.
- Once formed, clusters tend to **persist**, because moving is costly.

## Common errors

- **Equating industrialization with any growth.** It specifically means the shift from farming to manufacturing and machine production.
- **Thinking localization is random.** Firms cluster to gain external economies of scale (labour pooling, suppliers, knowledge spillovers).
- **Assuming exporting raw materials adds most value.** Processing and manufacturing at home add more value than exporting unprocessed resources.`,
      workedExample: `**Question:** Liberia exports unprocessed iron ore and rubber. The government wants to industrialize. (a) Explain how processing these at home relates to industrialization. (b) Name one industrialization policy it could use. (c) Why might rubber-processing firms locate near one another?

**Solution**

*Step 1 — value addition.* Industrialization is the shift from farming/raw materials toward **manufacturing that adds value**. Processing iron ore into steel goods, or rubber into tyres, employs workers and raises the value of exports — the goal of industrialization.

*Step 2 — a policy.* An **export-promotion** policy (or import-substitution, plus incentives such as industrial estates, cheap credit and worker training) can encourage these industries.

*Step 3 — localization.* Rubber-processing firms cluster to gain **external economies of scale**: a shared pool of skilled labour, nearby specialised suppliers, and knowledge spillovers, which lower each firm's costs.

**Answer:** (a) processing raw materials at home adds value, the aim of industrialization; (b) export-promotion (or import-substitution with incentives); (c) to gain external economies of scale from labour pooling, suppliers and knowledge spillovers.`,
      quiz: [
        { prompt: "Industrialization is the change from a mainly ______ society to an industrial one.", options: ["agrarian (farming)", "digital", "trading", "service"], correctIndex: 0, explanation: "It transforms a farming society into a manufacturing one." },
        { prompt: "Industrialization is closely tied to", options: ["technological innovation", "lower education", "less trade", "smaller markets"], correctIndex: 0, explanation: "It is part of modernization driven by technological innovation." },
        { prompt: "A key aim of industrialization is to produce goods with", options: ["low added value", "high added value", "no value", "only for barter"], correctIndex: 1, explanation: "Processing and manufacturing add value at home." },
        { prompt: "Processing minerals at home instead of exporting them raw", options: ["reduces value", "adds economic value and jobs", "is not industrialization", "lowers output"], correctIndex: 1, explanation: "Beneficiation adds value and employs workers." },
        { prompt: "Import-substitution policy means", options: ["exporting all goods", "building local industries to make goods once imported", "banning industry", "importing more"], correctIndex: 1, explanation: "It replaces imports with local production, often behind tariffs." },
        { prompt: "Export-promotion policy encourages industries that", options: ["produce manufactured goods for export", "only serve subsistence", "avoid trade", "close factories"], correctIndex: 0, explanation: "It supports manufacturing aimed at export markets." },
        { prompt: "Providing power, roads, tax breaks and cheap credit to attract factories is", options: ["localization", "an infrastructure and incentive policy", "barter", "depreciation"], correctIndex: 1, explanation: "These incentives support industrialization." },
        { prompt: "Localization of industry means firms in related industries", options: ["spread out evenly", "concentrate in one geographic area", "stop producing", "avoid each other"], correctIndex: 1, explanation: "They cluster together in one area." },
        { prompt: "Localization is driven mainly by", options: ["random choice", "economies of scale", "high taxes", "falling demand"], correctIndex: 1, explanation: "Internal and external economies of scale drive clustering." },
        { prompt: "External economies of scale include", options: ["labour pooling, specialised suppliers and knowledge spillovers", "higher wages only", "less trade", "no suppliers"], correctIndex: 0, explanation: "These are the benefits of clustering." },
        { prompt: "A shared pool of skilled labour in a cluster is an example of", options: ["an internal economy", "an external economy of scale", "a tax", "depreciation"], correctIndex: 1, explanation: "Labour pooling is an external economy." },
        { prompt: "Knowledge spillovers mean firms in a cluster", options: ["learn from one another", "keep all knowledge secret", "produce nothing", "avoid technology"], correctIndex: 0, explanation: "Ideas spread between nearby firms." },
        { prompt: "Once industry clusters form, they tend to", options: ["disappear quickly", "persist because moving is costly", "move every year", "avoid growth"], correctIndex: 1, explanation: "Clusters are costly to relocate, so they persist." },
        { prompt: "Internal economies of scale mainly", options: ["enlarge a single firm's size", "shrink firms", "raise taxes", "reduce output"], correctIndex: 0, explanation: "Internal economies expand the individual firm." },
        { prompt: "Industrialization is part of a wider process of", options: ["modernization", "barter", "deindustrialization", "isolation"], correctIndex: 0, explanation: "It is one aspect of modernization." },
        { prompt: "Turning rubber into tyres rather than exporting raw rubber is an example of", options: ["value addition through manufacturing", "subsistence farming", "importing", "depreciation"], correctIndex: 0, explanation: "Manufacturing adds value to the raw material." },
        { prompt: "Which is NOT an industrialization policy?", options: ["export-promotion", "import-substitution", "worker training and technology adoption", "banning all factories"], correctIndex: 3, explanation: "Banning factories would prevent industrialization." },
        { prompt: "Specialised suppliers locating near a cluster is a benefit called", options: ["an external economy of scale", "a tariff", "depreciation", "a subsidy"], correctIndex: 0, explanation: "Nearby suppliers are an external economy." },
        { prompt: "Industrialization tends to raise", options: ["jobs and living standards", "infant mortality", "subsistence only", "barter"], correctIndex: 0, explanation: "Industry creates jobs and can raise living standards." },
        { prompt: "An industrial estate with shared power and roads helps firms by", options: ["lowering their setup costs and attracting them to cluster", "raising their costs", "banning production", "removing labour"], correctIndex: 0, explanation: "Shared infrastructure lowers costs and encourages clustering." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define industrialization and state its main aim.", answerKey: "Industrialization is the process of social and economic change that transforms a community from an agrarian (farming) society into an industrial one, in which manufacturing and machine production become the main source of output; it is part of modernization tied to technological innovation. Its main aim is to produce goods and services with high added value (for example processing raw materials at home). Award 6 for the definition and 4 for the aim.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "State three industrialization policies a government could use.", answerKey: "Any three of: import-substitution (make goods formerly imported, often behind tariffs); export-promotion (support manufacturing for export); infrastructure and incentives (power, roads, industrial estates, tax breaks, cheap credit); human capital and technology policy (training and technology adoption). Award 2 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "The localization of industries is best explained by", options: ["random location choices", "economies of scale, especially external economies", "high taxes on clusters", "a fall in demand"], correctIndex: 1, answerKey: "Firms cluster to gain internal and external economies of scale. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain two external economies of scale that firms gain by locating in the same industrial cluster.", answerKey: "Any two, explained: a pooled labour market (a shared supply of skilled workers); specialised suppliers located nearby (lower input costs and delays); knowledge spillovers (ideas and techniques spread between firms). Award 3 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the meaning of industrialization and discuss the policies a country such as Liberia could use to industrialize, including why industries tend to cluster.", answerKey: "Award marks for: definition of industrialization (agrarian to industrial, value addition), 8; industrialization policies (import-substitution, export-promotion, infrastructure/incentives, human capital/technology), 10; localization/clustering and external economies of scale (labour pooling, suppliers, knowledge spillovers), 8; a reasoned conclusion applied to Liberia, 4.", marks: 30 },
      ],
    },
    // source: Social Sci LibreTexts — Industrializing Countries (https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Sociology_(Boundless)/08:_Global_Stratification_and_Inequality/8.02:_Global_Stratification/8.2B:_Industrializing_Countries) and OpenStax Principles of Macroeconomics 3e, 7.2 Labor Productivity and Economic Growth (https://openstax.org/books/principles-macroeconomics-3e/pages/7-2-labor-productivity-and-economic-growth)
    {
      slug: "role-of-industrialization-in-economic-development",
      title: "The Role of Industrialization in Economic Development",
      objective:
        "By the end of the topic, learners should be able to explain how industrialization promotes economic development, including the optimum use of scarce resources and the provision of machinery to raise agricultural productivity.",
      estimatedMinutes: 110,
      notes: `## How industrialization promotes development

- **Brings capital and income into the economy** — new factories generate income that can fund social supports such as schools and clinics.
- **Creates jobs and raises living standards** — industry employs people, and rising incomes make food and healthcare more widely available, lowering **infant mortality** and raising **life expectancy**.
- **Adds value** — processing and manufacturing at home (for example turning minerals into finished goods) raise the value of output and exports.
- **Raises labour productivity** — machines and better technology let each worker produce more (higher output per worker).

## Optimum utilization of scarce resources

**Optimum utilization of scarce resources** — industrialization helps a country make the **fullest, most efficient use** of its limited land, labour, capital and raw materials.
- Idle or underused resources (unemployed labour, unprocessed minerals) are put to productive use in factories.
- **Economies of scale** in industry lower average cost, so given resources produce more output.
- Value addition means the same raw materials yield higher-value goods.

## Provision of machinery to increase agricultural productivity

- Industry supplies **machinery, tools and inputs** (tractors, pumps, fertiliser, processing equipment) that farmers use.
- With better **physical capital**, each farm worker produces more food — **agricultural productivity** rises.
- Higher farm productivity frees labour to move into industry and services, supporting further development.

## Wider benefits

| Role | Effect on development |
| --- | --- |
| Job creation | Higher incomes, lower poverty |
| Value addition | More valuable output and exports |
| Machinery for farms | Higher agricultural productivity |
| Optimum use of resources | Less waste, more output from scarce inputs |
| Technology and skills | Rising labour productivity |

## Common errors

- **Ignoring agriculture.** Industrialization supports farming by supplying machinery, not replacing it.
- **Forgetting productivity.** Development comes from higher output per worker, not just more factories.
- **Overlooking resource use.** A gain is turning idle/underused resources into productive output.`,
      workedExample: `**Question:** A country has unemployed workers, unprocessed timber, and farmers using only hand tools. Explain how industrialization could (a) make optimum use of scarce resources and (b) raise agricultural productivity.

**Solution**

*Step 1 — optimum use of resources.* Building sawmills and furniture factories puts the **idle labour** and **unprocessed timber** to productive use. Economies of scale lower average cost, and value addition turns raw timber into higher-value furniture — more output from the same scarce resources.

*Step 2 — agricultural productivity.* Industry can supply **machinery and inputs** (tractors, pumps, fertiliser). With better physical capital, each farmer produces more food, so **agricultural productivity rises**.

*Step 3 — development link.* Higher farm productivity frees some labour to work in the new factories, and rising incomes improve health and education — economic development.

**Answer:** (a) factories employ idle labour and process unused timber, using scarce resources fully; (b) machinery and inputs raise output per farm worker, lifting agricultural productivity and supporting development.`,
      quiz: [
        { prompt: "Industrialization promotes development partly by", options: ["removing all jobs", "bringing capital and income into the economy", "lowering output", "banning trade"], correctIndex: 1, explanation: "New industry generates income that can fund social supports." },
        { prompt: "By creating jobs, industrialization tends to", options: ["raise infant mortality", "raise incomes and living standards", "lower life expectancy", "reduce food supply"], correctIndex: 1, explanation: "Higher incomes improve food and healthcare access." },
        { prompt: "Optimum utilization of scarce resources means", options: ["wasting resources", "making the fullest, most efficient use of limited resources", "leaving resources idle", "exporting everything raw"], correctIndex: 1, explanation: "It is efficient, full use of scarce inputs." },
        { prompt: "Industry supplies farmers with", options: ["nothing", "machinery, tools and inputs", "only labour", "less capital"], correctIndex: 1, explanation: "Tractors, pumps and fertiliser come from industry." },
        { prompt: "Better physical capital on farms raises", options: ["agricultural productivity", "infant mortality", "unemployment", "barter"], correctIndex: 0, explanation: "Machinery lets each farm worker produce more." },
        { prompt: "Value addition through industry means", options: ["exporting unprocessed raw materials", "processing raw materials into higher-value goods", "lowering output value", "avoiding manufacturing"], correctIndex: 1, explanation: "Processing raises the value of output." },
        { prompt: "Economies of scale in industry", options: ["raise average cost", "lower average cost so given resources produce more", "reduce output", "waste resources"], correctIndex: 1, explanation: "Larger-scale production lowers average cost." },
        { prompt: "Putting idle labour and unprocessed minerals to work in factories is an example of", options: ["wasting resources", "optimum use of scarce resources", "depreciation", "barter"], correctIndex: 1, explanation: "It turns underused resources into productive output." },
        { prompt: "Higher farm productivity can support industry by", options: ["freeing labour to move into industry and services", "trapping all workers on farms", "lowering food output", "banning machinery"], correctIndex: 0, explanation: "Fewer workers are needed to grow the same food." },
        { prompt: "Machines and technology raise", options: ["output per worker (labour productivity)", "infant mortality", "unemployment only", "barter"], correctIndex: 0, explanation: "Technology increases labour productivity." },
        { prompt: "Rising incomes from industry help lower", options: ["life expectancy", "infant mortality", "productivity", "value addition"], correctIndex: 1, explanation: "Better food and healthcare reduce infant mortality." },
        { prompt: "Industrialization supports agriculture by", options: ["replacing all farms", "providing machinery and inputs", "banning farming", "lowering productivity"], correctIndex: 1, explanation: "Industry supplies farm machinery and inputs." },
        { prompt: "A country that only exports raw minerals is likely to gain ______ than one that processes them.", options: ["more value", "less value", "the same value", "no output"], correctIndex: 1, explanation: "Processing adds value that raw exports do not capture." },
        { prompt: "Which is a development benefit of industrialization?", options: ["fewer jobs", "job creation and higher incomes", "lower productivity", "more idle resources"], correctIndex: 1, explanation: "Jobs and incomes rise with industry." },
        { prompt: "Optimum resource use reduces", options: ["output", "waste of scarce inputs", "employment", "value addition"], correctIndex: 1, explanation: "It cuts waste and raises output from scarce inputs." },
        { prompt: "Fertiliser and tractors are examples of", options: ["consumer goods for households", "industrial inputs that raise farm output", "financial assets", "exports only"], correctIndex: 1, explanation: "They are industrial products used to raise farm productivity." },
        { prompt: "Industrialization raises the value of exports mainly through", options: ["value addition", "depreciation", "barter", "lower productivity"], correctIndex: 0, explanation: "Manufactured exports are worth more than raw materials." },
        { prompt: "A rise in output per worker is called an increase in", options: ["productivity", "population", "taxes", "imports"], correctIndex: 0, explanation: "Output per worker is labour productivity." },
        { prompt: "Which best links industrialization to development?", options: ["it raises jobs, incomes, productivity and value addition", "it only exports raw materials", "it lowers living standards", "it wastes resources"], correctIndex: 0, explanation: "Industrialization drives several development gains together." },
        { prompt: "By raising farm productivity, machinery can help a country", options: ["produce more food with fewer farm workers", "grow less food", "abandon agriculture entirely", "raise infant mortality"], correctIndex: 0, explanation: "Machinery increases output per farm worker." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain how industrialization achieves the optimum utilization of scarce resources.", answerKey: "Industrialization puts idle or underused resources (unemployed labour, unprocessed raw materials) to productive use in factories, so less is wasted. Economies of scale lower average cost, and value addition turns the same raw materials into higher-value goods, so given scarce resources produce more, higher-value output. Award marks for the idle-resource point, economies of scale and value addition.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Explain how industry raises agricultural productivity.", answerKey: "Industry supplies machinery and inputs such as tractors, pumps, fertiliser and processing equipment. This physical capital lets each farm worker produce more food, raising agricultural productivity, and frees some labour to move into industry and services. Award marks for the machinery/inputs point and the higher output per worker point.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "A benefit of industrialization for economic development is", options: ["higher infant mortality", "job creation, higher incomes and value addition", "leaving resources idle", "exporting only raw materials"], correctIndex: 1, answerKey: "Industrialization creates jobs, raises incomes and adds value. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why processing raw materials at home rather than exporting them unprocessed supports development.", answerKey: "Processing (beneficiation) adds value: it employs workers, raises the value of output and exports, and keeps more of the gains in the country instead of exporting cheap raw materials. This raises incomes and can fund social services, supporting development. Award marks for the value-addition and jobs/income points.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss the role of industrialization in the economic development of a country such as Liberia.", answerKey: "Award marks for: job creation and higher incomes/living standards, 7; value addition and higher-value exports, 6; optimum utilization of scarce resources (idle labour/raw materials, economies of scale), 6; provision of machinery to raise agricultural productivity, 6; rising labour productivity from technology, and a reasoned conclusion, 5. A one-sided script should not exceed 16.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Macroeconomics 3e, 6.1 Measuring the Size of the Economy: Gross Domestic Product (https://openstax.org/books/principles-macroeconomics-3e/pages/6-1-measuring-the-size-of-the-economy-gross-domestic-product); Social Sci LibreTexts — 19.1 Measuring Output Using GDP (https://socialsci.libretexts.org/Bookshelves/Economics/Introductory_Comprehensive_Economics/Economics_(Boundless)/19%3A_Measuring_Output_and_Income/19.01%3A_Measuring_Output_Using_GDP)
    {
      slug: "measuring-national-income",
      title: "Measuring the National Income of a Country's Economy",
      objective:
        "By the end of the topic, learners should be able to define GDP, GNP, NNP and GDP per capita, describe the circular flow and the methods of calculating national income, and state the uses and limitations of national income statistics.",
      estimatedMinutes: 140,
      notes: `## National income concepts

**Gross Domestic Product (GDP)** — the value of all **final** goods and services produced **within a country** in a given year.
**Gross National Product (GNP)** — the value of output produced by a country's **citizens and firms**, wherever they are (GDP plus net income earned abroad).
**Net National Product (NNP)** — GNP **minus depreciation** (the wearing out and ageing of capital).
**GDP per capita** — GDP divided by population; it adjusts for population size so countries can be compared per person.

- GDP focuses on a **geographic boundary**; GNP focuses on **nationality/citizenship**.

## The circular flow of income and expenditure

- The economy is pictured as **households** and **firms** trading in two markets: the **goods and services (product) market** and the **labour (factor) market**.
- **Households** supply factors (labour, land, capital) to firms and buy goods; **firms** pay wages, rent and profit and sell goods.
- In this simple flow, **GDP = income = production = spending**.

\`\`\`svg Circular flow: households and firms with income and spending flows
<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circular flow between households and firms">
  <rect x="20" y="70" width="90" height="50" fill="none" stroke="#1f6feb" stroke-width="1.5"/>
  <text x="35" y="99" font-size="11" fill="#1f6feb">Households</text>
  <rect x="210" y="70" width="90" height="50" fill="none" stroke="#c0392b" stroke-width="1.5"/>
  <text x="232" y="99" font-size="11" fill="#c0392b">Firms</text>
  <path d="M110 82 H210" stroke="#555" stroke-width="1.2" fill="none" marker-end="url(#a)"/>
  <text x="120" y="76" font-size="9">spending on goods</text>
  <path d="M210 108 H110" stroke="#555" stroke-width="1.2" fill="none" marker-end="url(#a)"/>
  <text x="120" y="122" font-size="9">goods and services</text>
  <path d="M65 70 V40 H255 V70" stroke="#888" stroke-width="1.2" fill="none" marker-end="url(#a)"/>
  <text x="120" y="34" font-size="9">factors (labour, land, capital)</text>
  <path d="M255 120 V150 H65 V120" stroke="#888" stroke-width="1.2" fill="none" marker-end="url(#a)"/>
  <text x="120" y="164" font-size="9">income (wages, rent, profit)</text>
  <defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#555"/></marker></defs>
</svg>
\`\`\`

## Methods of calculating national income

1. **Expenditure method** — add up total spending on final output:
   GDP = C + I + G + (X − M), where C = consumption, I = investment, G = government spending, X − M = net exports.
2. **Income method** — add up all incomes earned in production: wages/compensation of employees, rent, interest and profits (operating surplus), plus taxes less subsidies on production.
3. **Output (product) method** — add up the value added at each stage of production (to avoid double counting, count only final goods or value added).

Because every dollar spent is income to someone, the three methods should give the **same total**.

## Uses of national income statistics

- **Compare economies** — measure how large an economy is and compare countries (using GDP per capita).
- **Judge performance over time** — see whether the economy is growing or shrinking.
- **Guide policy** — help policymakers set expectations and make decisions.
- **Plan development** — allocate resources and set targets.

## Advantages and limitations of GNP / per capita income

**Advantages**
- A single, widely used figure for the size and growth of an economy.
- GDP per capita allows fair comparison between countries of different population sizes.

**Limitations**
- **Ignores income distribution** — a country with wide income gaps can look strong while many are poor.
- **Leaves out non-market activity** — unpaid household work and subsistence production are undercounted.
- **Ignores the informal economy** — hidden or unrecorded activity is missed (important in economies like Liberia).
- **Says nothing about quality of life** — it excludes health, leisure, the environment and how output is used.

## Common errors

- **Counting intermediate goods.** Only final goods (or value added) are counted, to avoid double counting.
- **Confusing GDP and GNP.** GDP is by location; GNP is by nationality.
- **Forgetting depreciation.** NNP = GNP − depreciation.`,
      workedExample: `**Question:** In one year a country records: consumption C = 60, investment I = 20, government spending G = 15, exports X = 10, imports M = 8. Citizens also earn 5 net income abroad, and capital depreciation is 4. Find (a) GDP by the expenditure method, (b) GNP, and (c) NNP.

**Solution**

*Step 1 — GDP (expenditure method).* GDP = C + I + G + (X − M) = 60 + 20 + 15 + (10 − 8) = 60 + 20 + 15 + 2 = **97**.

*Step 2 — GNP.* GNP = GDP + net income earned abroad = 97 + 5 = **102**.

*Step 3 — NNP.* NNP = GNP − depreciation = 102 − 4 = **98**.

**Answer:** (a) GDP = 97; (b) GNP = 102; (c) NNP = 98.`,
      quiz: [
        { prompt: "GDP is the value of all ______ goods and services produced within a country in a year.", options: ["intermediate", "final", "imported", "second-hand"], correctIndex: 1, explanation: "GDP counts final output to avoid double counting." },
        { prompt: "GDP focuses on a country's", options: ["nationality", "geographic boundary", "citizens abroad only", "imports only"], correctIndex: 1, explanation: "GDP is output produced within the geographic boundary." },
        { prompt: "GNP focuses on output attributable to a country's", options: ["geographic boundary", "citizens and firms (nationality)", "foreigners only", "imports"], correctIndex: 1, explanation: "GNP is by nationality/citizenship." },
        { prompt: "NNP equals", options: ["GNP plus depreciation", "GNP minus depreciation", "GDP plus imports", "GDP minus exports"], correctIndex: 1, explanation: "NNP = GNP − depreciation." },
        { prompt: "GDP per capita equals", options: ["GDP times population", "GDP divided by population", "GDP minus taxes", "GNP plus depreciation"], correctIndex: 1, explanation: "It adjusts GDP for population size." },
        { prompt: "The expenditure method formula is", options: ["C + I + G + (X − M)", "C − I − G", "wages + rent only", "GDP + depreciation"], correctIndex: 0, explanation: "GDP = C + I + G + net exports." },
        { prompt: "In GDP = C + I + G + (X − M), G stands for", options: ["gold", "government spending", "gross profit", "goods imported"], correctIndex: 1, explanation: "G is government purchases of goods and services." },
        { prompt: "The income method adds up", options: ["spending on goods", "wages, rent, interest and profit", "imports", "depreciation only"], correctIndex: 1, explanation: "It sums incomes earned in production." },
        { prompt: "The output method counts ______ to avoid double counting.", options: ["all sales", "only value added or final goods", "intermediate goods twice", "imports"], correctIndex: 1, explanation: "Counting value added or only final goods avoids double counting." },
        { prompt: "In the circular flow, households supply firms with", options: ["taxes only", "factors of production (labour, land, capital)", "imports", "depreciation"], correctIndex: 1, explanation: "Households provide factors and receive income." },
        { prompt: "In the circular flow, firms pay households", options: ["nothing", "wages, rent and profit (income)", "only taxes", "imports"], correctIndex: 1, explanation: "Firms pay factor incomes to households." },
        { prompt: "In a simple circular flow, GDP equals", options: ["income equals production equals spending", "imports only", "depreciation", "taxes"], correctIndex: 0, explanation: "The three measures are equal." },
        { prompt: "A use of national income statistics is to", options: ["compare economies and their growth", "hide the economy's size", "avoid planning", "ban trade"], correctIndex: 0, explanation: "They measure size and compare economies over time." },
        { prompt: "GDP per capita is useful because it", options: ["ignores population", "allows fair comparison across countries of different sizes", "counts intermediate goods", "adds depreciation"], correctIndex: 1, explanation: "It adjusts for population." },
        { prompt: "A limitation of GDP is that it", options: ["measures income distribution perfectly", "ignores how income is distributed", "counts leisure", "measures happiness"], correctIndex: 1, explanation: "GDP says nothing about who gets the income." },
        { prompt: "GDP tends to undercount", options: ["factory output", "non-market and informal activity", "government spending", "exports"], correctIndex: 1, explanation: "Unpaid and informal work is missed." },
        { prompt: "Which is NOT counted directly in GDP?", options: ["final consumer goods", "intermediate goods used up in production", "government purchases", "investment"], correctIndex: 1, explanation: "Only final goods or value added are counted." },
        { prompt: "If GDP = 100 and net income earned abroad = 6, then GNP =", options: ["94", "100", "106", "6"], correctIndex: 2, explanation: "GNP = GDP + net income abroad = 106." },
        { prompt: "A country with wide income gaps but high GDP may still have", options: ["no poverty", "many poor people despite a strong GDP", "perfect equality", "no informal sector"], correctIndex: 1, explanation: "GDP ignores distribution, so poverty can persist." },
        { prompt: "The three calculation methods should give", options: ["different totals", "the same total", "only exports", "only imports"], correctIndex: 1, explanation: "Spending equals income equals output, so totals match." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define GDP, GNP and NNP.", answerKey: "GDP is the value of all final goods and services produced within a country in a year (by geographic boundary). GNP is the value of output produced by a country's citizens and firms wherever located (GDP plus net income earned abroad). NNP is GNP minus depreciation (the wearing out of capital). Award 4 for GDP, 3 for GNP, 3 for NNP.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "State the three methods of calculating national income and the expenditure formula.", answerKey: "Methods: expenditure method, income method, output/product (value-added) method. Expenditure formula: GDP = C + I + G + (X − M), where C = consumption, I = investment, G = government spending, X − M = net exports. Award 2 marks per method and 2 for the formula.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Consumption 50, investment 20, government spending 10, exports 8, imports 5. GDP by the expenditure method is", options: ["83", "88", "93", "80"], correctIndex: 0, answerKey: "GDP = 50 + 20 + 10 + (8 − 5) = 83. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State two uses and two limitations of national income statistics.", answerKey: "Uses (any two): compare economies and countries (GDP per capita); judge whether the economy is growing; guide policy; plan development. Limitations (any two): ignores income distribution; undercounts non-market and informal activity; says nothing about quality of life/environment. Award 1.5 marks each, up to four points.", marks: 6 },
        { type: "ESSAY", prompt: "Explain how national income is measured (concepts, circular flow and methods) and discuss the advantages and limitations of using GNP and per capita income.", answerKey: "Award marks for: concepts — GDP, GNP, NNP, GDP per capita, 6; circular flow of income and expenditure between households and firms with GDP = income = spending, 6; methods — expenditure (C+I+G+(X−M)), income, output/value added, 6; advantages — single widely used figure, per capita allows comparison, 5; limitations — ignores distribution, misses non-market/informal activity, ignores quality of life, 7. A script missing either advantages or limitations should not exceed 18.", marks: 30 },
      ],
    },
  ],
};
