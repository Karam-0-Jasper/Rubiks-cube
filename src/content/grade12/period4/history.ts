import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for History, Grade 12,
// Semester Two, Period IV: The Liberian Economy (1950 to Present). The MoE
// CONTENTS list has four top-level items, each rebuilt here as its own topic:
// (1) Liberia's economic growth from 1950 to present; (2) the contributions of
// major concessionaires (LAMCO, Bong Mines, NIOC, Firestone Rubber Plantation,
// LAC); (3) agriculture and forestry contributions to the economy; and
// (4) factors impeding the growth of the economy.
//
// SOURCING NOTE / SYLLABUS GAP: this period is Liberia-specific, and the
// approved published education sources (OpenStax, CK-12, LibreTexts) do NOT
// carry the records of individual Liberian concessionaires (LAMCO, Bong Mines,
// NIOC, Firestone, LAC) or Liberia's own GDP figures. Per AGENTS.md none of
// those facts are invented here. Each topic is built from the CLOSEST covered
// economics themes — the nature of modern economic growth and GDP per capita;
// the extractive/concession economy and resource exports of colonial-era
// Africa; the components of productivity (physical capital, human capital,
// technology, raw-material sectors); and the barriers to growth and economic
// convergence in low-income economies — with the Liberia-specific company and
// output figures flagged for the teacher. Those must be taken from the MoE
// primary texts (Liberia History Book; Economic Survey of Liberia, Yeido).
export const historyG12P4: PeriodContent = {
  grade: 12,
  number: 4,
  title: "The Liberian Economy (1950 to Present)",
  summary:
    "Period IV of the MoE Grade 12 History syllabus. Learners study the Liberian economy from 1950 to the present — its growth pattern, the contributions of major concessionaires (LAMCO, Bong Mines, NIOC, Firestone, LAC), the role of agriculture and forestry, and the factors that have impeded growth. Because the approved published sources do not carry Liberia's own figures or individual company records, each topic is taught through the closest covered economics themes (the nature of modern economic growth and GDP per capita, the extractive/concession economy of colonial-era Africa, the components of productivity, and the barriers to growth and convergence in low-income economies), with the Liberia-specific company and output data flagged for the teacher; those must come from the MoE primary texts.",
  topics: [
    {
      // source: OpenStax — Principles of Macroeconomics 3e, 7.1 The Relatively Recent Arrival of Economic Growth (https://openstax.org/books/principles-macroeconomics-3e/pages/7-1-the-relatively-recent-arrival-of-economic-growth)
      slug: "liberias-economic-growth-1950-to-present",
      title: "Liberia's Economic Growth from 1950 to Present",
      objective:
        "By the end of the topic, learners should be able to explain what economic growth is and how it is measured, using the sourced framework of modern economic growth and GDP per capita, while recognising that Liberia's own figures from 1950 to the present lie outside the approved sources.",
      estimatedMinutes: 90,
      notes: `## What economic growth is (sourced foundation)

- **Economic growth** = a sustained rise in the output of goods and services an economy produces.
- The best single measure is **GDP per capita** — total output divided by the population — because it tracks the average person's standard of living.
- Rapid, sustained growth is historically recent. Before the last two centuries, "the average person's standard of living had not changed much for centuries."
- The era since then is the **period of modern economic growth**, marked by "rapid and sustained economic growth."

## How fast economies grow

- Leading industrial nations grew at "about 2% per year" in GDP per capita over the past two centuries.
- Fast developers grew much faster: Japan "averaged 11% annually during the 1960s–1970s," China "roughly 9% per capita" from 1984 into the 2000s.
- Small yearly percentages compound into large changes over decades — the key to the "1950 to present" view is tracking the **trend**, not a single year.

## What launched modern growth

- The **Industrial Revolution** — "the widespread use of power-driven machinery and the economic and social changes that resulted in the first half of the 1800s" — made each worker far more productive.
- Power-driven machinery did work that "otherwise would have taken vast numbers of workers to do."

## Conditions that let growth happen

- **Institutions** — "the traditions and laws by which people in a community agree to behave and govern themselves" — shape whether an economy grows.
- Essential institutions include "rule of law and protection of property rights and contractual rights by a country's government."
- Global incomes were roughly equal up to about 1300 C.E.; **divergence** between rich and poor nations opened up afterwards.

## Applying the framework to Liberia (1950–present)

- To describe Liberia's growth, track its **GDP / GDP per capita trend** across decades, the sectors driving it, and the institutions (rule of law, property rights, stability) supporting or undermining it.

## Source note and syllabus gap

- The approved source establishes **what growth is and how it is measured**, but does **not** carry Liberia's own GDP series from 1950 to the present. Those figures are **not invented here**; use the MoE primary texts (Liberia History Book; Economic Survey of Liberia, Yeido).`,
      workedExample: `**Question:** Explain how you would describe the growth of the Liberian economy from 1950 to the present, and why GDP per capita is the measure to use.

**Solution**

*Step 1 — choose the measure.*
Use GDP per capita (total output ÷ population) because it tracks the average person's standard of living, not just the size of the economy.

*Step 2 — track the trend.*
Describe the GDP-per-capita trend across the decades since 1950 rather than a single year, since small yearly rates compound into large changes over time.

*Step 3 — explain the drivers.*
Link rises and falls to productivity and the leading sectors, and to institutions such as rule of law, property rights and political stability.

*Step 4 — note the limit.*
Liberia's actual figures are not in the approved source; take them from the MoE primary texts.

**Conclusion:** Liberia's growth is best described as a GDP-per-capita trend over the decades, explained by productivity, sectors and institutions — with the specific figures drawn from the MoE primary texts.`,
      quiz: [
        { prompt: "Economic growth means a sustained rise in", options: ["the output of goods and services", "the population only", "import taxes", "foreign debt"], correctIndex: 0, explanation: "Growth is rising output of goods and services." },
        { prompt: "The best single measure of living standards is", options: ["GDP per capita", "total exports only", "the number of banks", "the length of coastline"], correctIndex: 0, explanation: "GDP per capita tracks the average person's standard of living." },
        { prompt: "GDP per capita is total output divided by", options: ["the population", "the number of ministries", "exports", "the land area"], correctIndex: 0, explanation: "Per capita means per person — divide by population." },
        { prompt: "Before the last two centuries, the average standard of living", options: ["had not changed much for centuries", "doubled every year", "fell every decade", "was the highest in history"], correctIndex: 0, explanation: "The source states it had changed little for centuries." },
        { prompt: "The era of rapid, sustained growth is called", options: ["the period of modern economic growth", "the Stone Age", "the resource curse", "the Cold War"], correctIndex: 0, explanation: "It is the period of modern economic growth." },
        { prompt: "Leading industrial nations grew at about", options: ["2% per year in GDP per capita", "50% per year", "0% forever", "100% per decade"], correctIndex: 0, explanation: "About 2% per year over two centuries." },
        { prompt: "Japan's fast growth in the 1960s–1970s averaged about", options: ["11% annually", "1% annually", "no growth", "40% annually"], correctIndex: 0, explanation: "Japan averaged roughly 11% annually then." },
        { prompt: "China grew at roughly 9% per capita from", options: ["1984 into the 2000s", "1300 to 1400", "1800 to 1810", "the Stone Age"], correctIndex: 0, explanation: "China grew ~9% per capita from 1984 into the 2000s." },
        { prompt: "Small yearly growth rates over decades", options: ["compound into large changes", "never add up", "cancel out", "reduce output"], correctIndex: 0, explanation: "Compounding turns small rates into large long-run change." },
        { prompt: "Modern growth was launched by", options: ["the Industrial Revolution", "the Berlin Conference", "the Punic Wars", "the Renaissance alone"], correctIndex: 0, explanation: "The Industrial Revolution launched modern growth." },
        { prompt: "The Industrial Revolution centred on", options: ["power-driven machinery", "hand copying of books", "sailing ships only", "subsistence farming"], correctIndex: 0, explanation: "It was the widespread use of power-driven machinery." },
        { prompt: "Power-driven machinery did work that otherwise needed", options: ["vast numbers of workers", "no workers at all", "only kings", "only children"], correctIndex: 0, explanation: "Machinery replaced the labour of vast numbers of workers." },
        { prompt: "'Institutions' in economics means", options: ["the traditions and laws by which people govern themselves", "only bank buildings", "only schools", "only factories"], correctIndex: 0, explanation: "Institutions are the traditions and laws of self-government." },
        { prompt: "An institution essential to growth is", options: ["rule of law and protection of property rights", "banning all trade", "abolishing courts", "ending education"], correctIndex: 0, explanation: "Rule of law and property rights are essential." },
        { prompt: "Global incomes were roughly equal up to about", options: ["1300 C.E.", "1990 C.E.", "last year", "the year 2100"], correctIndex: 0, explanation: "Incomes were roughly equal until about 1300 C.E." },
        { prompt: "The gap between rich and poor nations that opened later is called", options: ["divergence", "convergence", "equality", "subsistence"], correctIndex: 0, explanation: "The opening gap is divergence." },
        { prompt: "To describe Liberia's growth you should track its", options: ["GDP-per-capita trend over the decades", "colour of its flag", "number of holidays", "national anthem"], correctIndex: 0, explanation: "Track the GDP-per-capita trend over time." },
        { prompt: "Rises and falls in output should be linked to", options: ["productivity, sectors and institutions", "the weather only", "the alphabet", "nothing"], correctIndex: 0, explanation: "Explain growth by productivity, sectors and institutions." },
        { prompt: "Liberia's actual GDP figures from 1950 are", options: ["not in the approved source — use MoE texts", "fully in the source", "invented here", "irrelevant"], correctIndex: 0, explanation: "The figures are not in the source; use MoE texts." },
        { prompt: "The safest handling of Liberia's own data is to", options: ["cite the MoE texts and not invent it", "guess the numbers", "recall from memory", "omit the topic"], correctIndex: 0, explanation: "Cite MoE texts; never invent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define economic growth and name the measure best used to track living standards.", answerKey: "Economic growth is a sustained rise in the output of goods and services an economy produces. GDP per capita (total output divided by population) is the best measure of living standards because it tracks output per person. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "What was the Industrial Revolution and why did it matter for growth?", answerKey: "The Industrial Revolution was the widespread use of power-driven machinery and the economic and social changes of the first half of the 1800s. It mattered because machinery did work that otherwise needed vast numbers of workers, raising productivity and launching modern, sustained economic growth. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Leading industrial nations' long-run GDP-per-capita growth has been about", options: ["2% per year", "11% per year", "0% per year", "50% per year"], correctIndex: 0, answerKey: "About 2% per year. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Why do institutions matter for a country's economic growth?", answerKey: "Institutions are the traditions and laws by which people govern themselves; they shape whether an economy grows. Rule of law and the protection of property and contractual rights encourage investment and productivity, while weak institutions hold growth back. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Explain how the growth of the Liberian economy from 1950 to the present should be described and measured, noting the limits of the sources.", answerKey: "Award marks for: defining economic growth and choosing GDP per capita as the measure of living standards, 6 marks; explaining that growth is a long-run trend in which small yearly rates compound, with modern growth launched by the Industrial Revolution's power-driven machinery, 6 marks; linking growth to productivity, leading sectors and institutions (rule of law, property rights, stability), 6 marks; a clear statement that Liberia's own GDP series from 1950 is not in the approved sources and must come from the MoE primary texts, 3 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 9.3 Colonial Empires (https://openstax.org/books/world-history-volume-2/pages/9-3-colonial-empires)
      slug: "contributions-of-major-concessionaires",
      title: "Contributions of Major Concessionaires",
      objective:
        "By the end of the topic, learners should be able to explain how foreign concession companies operate in an extractive, resource-export economy and how such companies both contribute to and distort growth, while recognising that the records of Liberia's own concessionaires (LAMCO, Bong Mines, NIOC, Firestone, LAC) lie outside the approved sources.",
      estimatedMinutes: 90,
      notes: `## What a concession economy is (sourced foundation)

- A **concession** is a grant by a government giving a foreign company the right to extract a resource (minerals, rubber, timber, oil) or run a plantation in return for payments and jobs.
- Concession economies are **extractive**: wealth is built on exporting raw materials. In colonial Africa the land was "rich in resources like ivory and rubber," and outsiders were "free to exploit... African laborers in the pursuit of profit."
- **Cash crops and plantations** are the agricultural form of the model — colonised farmers were "forced to grow cash crops such as cotton and tea" and regions "produced abundant palm oil, used for lubricating industrial machinery."

## What concessionaires contribute

- **Capital and technology** the host economy could not supply alone — mines, plantations, machinery.
- **Employment and wages** for local workers.
- **Exports and government revenue** — royalties, taxes and rents paid for the concession.
- **Infrastructure** — but often narrowly aimed at extraction. Colonial railways were "built primarily to transport... goods... and cash crops to the coast," so "the new infrastructure benefited the colonizers far more than the colonized."

## The distortion built into the model

- Profit often flows **out** to foreign owners rather than being reinvested locally.
- Infrastructure serves the **export route**, not the whole country.
- The economy becomes **dependent on one or two raw materials**, whose world prices it cannot control.
- Colonial powers "systematized resource extraction through forced labor, cash-crop cultivation, foreign monopolies on raw materials, and infrastructure designed to facilitate profit extraction rather than local development."

## Judging a concessionaire's contribution

| Test | Question to ask of each concessionaire |
| --- | --- |
| Jobs | How many citizens did it employ, and at what wages? |
| Revenue | What royalties, rents and taxes did it pay the state? |
| Linkages | Did it build roads, schools, clinics used beyond extraction? |
| Reinvestment | Were profits reinvested locally or sent abroad? |
| Dependence | Did it deepen reliance on a single raw-material export? |

## Applying the framework to Liberia's concessionaires

- The MoE names **LAMCO**, **Bong Mines**, **NIOC** (iron ore), **Firestone Rubber Plantation** and **LAC (Liberia Agricultural Company)**. Each should be assessed against the five tests above — jobs, revenue, linkages, reinvestment and dependence.

## Source note and syllabus gap

- The approved source establishes **how a concession/extractive economy works and how to judge it**, but does **not** record the output, employment or revenue of Liberia's named concessionaires. Those are **not invented here**; use the MoE primary texts (Liberia History Book; Economic Survey of Liberia, Yeido).`,
      workedExample: `**Question:** Explain how a foreign concessionaire can both contribute to and distort the growth of a resource-exporting economy such as Liberia's.

**Solution**

*Step 1 — define the model.*
A concession grants a foreign company the right to extract a resource (iron ore, rubber) or run a plantation in return for payments and jobs; the economy earns by exporting raw materials.

*Step 2 — the contributions.*
The company brings capital, technology, employment, exports, government revenue (royalties and taxes) and some infrastructure.

*Step 3 — the distortions.*
Profits often flow abroad, infrastructure serves only the export route ("benefited the colonizers far more than the colonized"), and the economy grows dependent on one or two raw materials whose prices it cannot control.

*Step 4 — judge it.*
Assess each concessionaire on jobs, revenue, local linkages, reinvestment and whether it deepened single-commodity dependence.

*Step 5 — the limit.*
Liberia's own company figures are not in the approved source; take them from the MoE primary texts.

**Conclusion:** concessionaires add capital, jobs and revenue but can trap an economy in raw-material dependence with profits flowing out; each of Liberia's concessionaires must be judged on that balance using the MoE primary texts.`,
      quiz: [
        { prompt: "A concession is a government grant letting a foreign company", options: ["extract a resource or run a plantation", "write the constitution", "elect the president", "command the army"], correctIndex: 0, explanation: "A concession grants extraction/plantation rights." },
        { prompt: "A concession economy is described as", options: ["extractive — built on exporting raw materials", "closed to all trade", "purely industrial", "entirely service-based"], correctIndex: 0, explanation: "It is extractive, built on raw-material exports." },
        { prompt: "Colonial Congo attracted outsiders because it was rich in", options: ["ivory and rubber", "snow", "oil wells only", "nothing"], correctIndex: 0, explanation: "The region was rich in ivory and rubber." },
        { prompt: "Cash crops are grown mainly", options: ["for export/sale, not local food", "as flowers only", "never traded", "for royalty only"], correctIndex: 0, explanation: "Cash crops are grown for sale/export." },
        { prompt: "Palm oil in French West Africa was used for", options: ["lubricating industrial machinery", "building ships", "making glass", "nothing"], correctIndex: 0, explanation: "Palm oil lubricated industrial machinery." },
        { prompt: "A concessionaire contributes capital and", options: ["technology the host could not supply alone", "a new language", "a royal family", "snow"], correctIndex: 0, explanation: "It brings capital and technology." },
        { prompt: "Payments a concessionaire makes to the state include", options: ["royalties, rents and taxes", "nothing at all", "only gifts", "only votes"], correctIndex: 0, explanation: "Royalties, rents and taxes raise revenue." },
        { prompt: "Colonial railways were built primarily to", options: ["move goods and cash crops to the coast", "carry tourists", "connect every village", "serve schools"], correctIndex: 0, explanation: "They served extraction and export, not local needs." },
        { prompt: "That infrastructure benefited", options: ["the colonizers far more than the colonized", "everyone equally", "only children", "no one"], correctIndex: 0, explanation: "It benefited colonizers far more than the colonized." },
        { prompt: "A key distortion of the model is that profit often", options: ["flows out to foreign owners", "stays entirely local", "disappears", "is banned"], correctIndex: 0, explanation: "Profit often flows out abroad." },
        { prompt: "Dependence on one or two raw materials is risky because", options: ["world prices cannot be controlled", "prices never change", "it guarantees wealth", "it ends trade"], correctIndex: 0, explanation: "Single-commodity dependence exposes a country to price swings it cannot control." },
        { prompt: "Colonial extraction was systematised through forced labor and", options: ["foreign monopolies on raw materials", "free universal schooling", "land reform", "fair wages"], correctIndex: 0, explanation: "It used forced labour and foreign monopolies on raw materials." },
        { prompt: "A 'jobs' test asks how many citizens a concessionaire", options: ["employed and at what wages", "elected", "arrested", "deported"], correctIndex: 0, explanation: "The jobs test is about employment and wages." },
        { prompt: "A 'linkages' test asks whether a concessionaire built", options: ["roads, schools and clinics used beyond extraction", "only mine fences", "a palace", "a navy"], correctIndex: 0, explanation: "Linkages are broader infrastructure beyond extraction." },
        { prompt: "A 'reinvestment' test asks whether profits were", options: ["reinvested locally or sent abroad", "burned", "hidden", "taxed twice"], correctIndex: 0, explanation: "Reinvestment asks if profit stayed to build the economy." },
        { prompt: "The MoE names which as Liberian concessionaires?", options: ["LAMCO, Bong Mines, NIOC, Firestone, LAC", "NATO and the Warsaw Pact", "the OAU and AU only", "Ghana and Kenya"], correctIndex: 0, explanation: "These five are the named concessionaires." },
        { prompt: "LAMCO, Bong Mines and NIOC were associated mainly with", options: ["iron ore", "coffee only", "tourism", "banking"], correctIndex: 0, explanation: "They were iron-ore operations (per the MoE list)." },
        { prompt: "Firestone in Liberia is associated with", options: ["rubber", "gold", "oil refining", "shipping"], correctIndex: 0, explanation: "Firestone ran a rubber plantation." },
        { prompt: "The approved source records each Liberian concessionaire's output", options: ["no — this gap is flagged", "yes, in full", "only Firestone's", "only LAC's"], correctIndex: 0, explanation: "The source does not record their figures; the gap is flagged." },
        { prompt: "The safest handling of concessionaire figures is to", options: ["cite the MoE texts and not invent them", "guess", "recall from memory", "omit the topic"], correctIndex: 0, explanation: "Cite MoE texts; never invent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a concession and explain what makes a concession economy 'extractive'.", answerKey: "A concession is a government grant giving a foreign company the right to extract a resource (minerals, rubber, timber, oil) or run a plantation in return for payments and jobs. The economy is extractive because its wealth is built on exporting raw materials rather than on manufacturing or broad-based development. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two ways a concessionaire contributes to an economy and two ways it can distort it.", answerKey: "Contributions (any two): capital and technology; employment and wages; exports and government revenue (royalties, rents, taxes); some infrastructure. Distortions (any two): profits flow out to foreign owners; infrastructure serves only the export route; the economy becomes dependent on one or two raw materials whose prices it cannot control; weak reinvestment locally. Award 1 mark each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Colonial railways in extractive economies were built mainly to", options: ["move goods and cash crops to the coast", "connect every village equally", "carry tourists", "serve schools"], correctIndex: 0, answerKey: "To move goods and cash crops to the coast, benefiting colonizers more than the colonized. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "List the five tests by which a concessionaire's contribution can be judged.", answerKey: "Jobs (employment and wages); revenue (royalties, rents, taxes to the state); linkages (broader infrastructure — roads, schools, clinics); reinvestment (profits kept locally vs sent abroad); and dependence (whether it deepened reliance on a single raw-material export). Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Explain how foreign concessionaires can both build and distort the growth of a resource-exporting economy such as Liberia's, noting the limits of the sources.", answerKey: "Award marks for: defining the concession/extractive model and cash-crop/plantation economy, 6 marks; the contributions — capital, technology, jobs, exports, revenue, some infrastructure, 5 marks; the distortions — profit outflow, export-only infrastructure that 'benefited the colonizers far more than the colonized', single-commodity dependence, 6 marks; applying the five-test framework to Liberia's named concessionaires (LAMCO, Bong Mines, NIOC, Firestone, LAC), 4 marks; a clear statement that the companies' actual figures are not in the approved sources and must come from the MoE primary texts, 2 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — Principles of Macroeconomics 3e, 7.2 Labor Productivity and Economic Growth (https://openstax.org/books/principles-macroeconomics-3e/pages/7-2-labor-productivity-and-economic-growth)
      slug: "agriculture-and-forestry-contributions",
      title: "Agriculture and Forestry Contributions to the Economy",
      objective:
        "By the end of the topic, learners should be able to explain how primary sectors such as agriculture and forestry contribute to output and productivity through the aggregate production function, while recognising that Liberia's own agriculture and forestry figures lie outside the approved sources.",
      estimatedMinutes: 85,
      notes: `## How sectors add to output (sourced foundation)

- An economy turns inputs into outputs through the **aggregate production function** — "the technical relationship by which economic inputs like labor, machinery, and raw materials are turned into outputs like goods and services."
- Its key inputs are "workforce, human capital, physical capital, and technology."
- Agriculture and forestry are **primary (raw-material) sectors**: they supply the **raw materials** that feed the production function and the exports that earn income.

## Productivity — why output per worker matters

- **Labor productivity** = "the value that each employed person creates per unit of their input."
- Sustained growth depends on rising productivity: "the only way that GDP per capita can grow continually is if the productivity of the average worker rises."
- Productivity rises with **human capital** — "the accumulated knowledge (from education and experience), skills, and expertise that the average worker in an economy possesses" — so training farmers and foresters raises output.

## What lifts agricultural and forestry output

- **Technological change** — "invention... and innovation, which is putting those advances to use" — better seeds, tools, and processing raise yields.
- **Physical capital** — machinery and equipment per worker.
- **Economies of scale** — "the cost advantages that industries obtain due to size"; larger operations can cut unit costs.

## How agriculture and forestry contribute

- **Food and raw materials** for the population and for processing industries.
- **Employment**, especially rural, often the largest single source of jobs in a low-income economy.
- **Exports and revenue** from crops and timber.
- **Linkages** — inputs to manufacturing (e.g. timber to construction, crops to food processing).

## Applying the framework to Liberia

- Assess agriculture and forestry on their share of output and jobs, their exports, their productivity (output per worker), and their linkages to the rest of the economy.

## Source note and syllabus gap

- The approved source establishes **how sectors and productivity drive output**, but does **not** carry Liberia's own agriculture and forestry statistics. Those are **not invented here**; use the MoE primary texts (Liberia History Book; Economic Survey of Liberia, Yeido).`,
      workedExample: `**Question:** Explain how agriculture and forestry contribute to an economy's output, using the idea of the aggregate production function and labour productivity.

**Solution**

*Step 1 — the production function.*
An economy turns inputs — workforce, human capital, physical capital, technology and raw materials — into outputs of goods and services.

*Step 2 — the sectors' role.*
Agriculture and forestry are primary sectors: they supply the raw materials and food that feed this function, plus exports that earn income.

*Step 3 — productivity.*
Output per worker (labour productivity) rises with human capital (training), physical capital (machinery) and technology (better seeds and tools); continual GDP-per-capita growth requires this rise.

*Step 4 — contributions.*
They provide food, raw materials, rural employment, exports and linkages to processing industries.

*Step 5 — the limit.*
Liberia's own farm and forestry figures are not in the approved source; take them from the MoE primary texts.

**Conclusion:** agriculture and forestry feed the production function with raw materials, jobs and exports, and their contribution grows as worker productivity rises — with Liberia's figures drawn from the MoE primary texts.`,
      quiz: [
        { prompt: "The aggregate production function turns inputs into", options: ["outputs of goods and services", "votes", "laws", "weather"], correctIndex: 0, explanation: "It converts inputs into outputs of goods and services." },
        { prompt: "Its key inputs include workforce, human capital, physical capital and", options: ["technology", "the flag", "holidays", "the anthem"], correctIndex: 0, explanation: "Technology is a key input." },
        { prompt: "Agriculture and forestry are classed as", options: ["primary (raw-material) sectors", "financial services", "the public sector only", "manufacturing"], correctIndex: 0, explanation: "They are primary, raw-material sectors." },
        { prompt: "Labor productivity is the value each worker creates per", options: ["unit of input", "year of life", "hour of sleep", "vote cast"], correctIndex: 0, explanation: "It is value created per unit of input." },
        { prompt: "GDP per capita can grow continually only if", options: ["the productivity of the average worker rises", "population grows", "prices rise", "taxes fall"], correctIndex: 0, explanation: "Continual per-capita growth needs rising productivity." },
        { prompt: "Human capital is the accumulated knowledge, skills and", options: ["expertise of the average worker", "machinery in factories", "money in banks", "land area"], correctIndex: 0, explanation: "Human capital is the worker's knowledge, skills and expertise." },
        { prompt: "Training farmers and foresters raises output by increasing", options: ["human capital", "the coastline", "rainfall", "import duties"], correctIndex: 0, explanation: "Training builds human capital." },
        { prompt: "Technological change combines invention and", options: ["innovation (putting advances to use)", "taxation", "migration", "inflation"], correctIndex: 0, explanation: "It combines invention and innovation." },
        { prompt: "Physical capital means", options: ["machinery and equipment per worker", "the number of laws", "the population", "the weather"], correctIndex: 0, explanation: "Physical capital is machinery and equipment." },
        { prompt: "Economies of scale are cost advantages due to", options: ["size", "colour", "age", "distance"], correctIndex: 0, explanation: "They are the cost advantages of size." },
        { prompt: "A core contribution of agriculture is", options: ["food and raw materials", "writing the constitution", "running the army", "printing money"], correctIndex: 0, explanation: "Agriculture supplies food and raw materials." },
        { prompt: "In a low-income economy, agriculture is often the largest source of", options: ["employment (especially rural)", "imported cars", "stock trading", "tourism"], correctIndex: 0, explanation: "Agriculture is often the biggest employer." },
        { prompt: "Timber from forestry provides a linkage to", options: ["construction and processing industries", "the navy only", "space travel", "nothing"], correctIndex: 0, explanation: "Timber feeds construction and processing." },
        { prompt: "Exports of crops and timber provide", options: ["revenue and foreign earnings", "new citizens", "rainfall", "elections"], correctIndex: 0, explanation: "They earn export revenue." },
        { prompt: "'Linkages' means a sector supplies", options: ["inputs to other industries", "only its own workers", "foreign armies", "nothing"], correctIndex: 0, explanation: "Linkages feed inputs to other industries." },
        { prompt: "Better seeds and tools raise farm output through", options: ["technological change", "higher taxes", "longer borders", "more holidays"], correctIndex: 0, explanation: "They are technological change." },
        { prompt: "To assess a sector you look at its share of output and", options: ["jobs, exports and productivity", "flag colour", "anthem length", "holiday count"], correctIndex: 0, explanation: "Assess output share, jobs, exports and productivity." },
        { prompt: "Raw materials enter the economy through the", options: ["production function as inputs", "constitution", "anthem", "flag"], correctIndex: 0, explanation: "Raw materials are inputs to the production function." },
        { prompt: "Liberia's own agriculture and forestry statistics are", options: ["not in the approved source — use MoE texts", "fully in the source", "invented here", "irrelevant"], correctIndex: 0, explanation: "They are not in the source; use MoE texts." },
        { prompt: "The safest handling of Liberia's sector data is to", options: ["cite the MoE texts and not invent it", "guess", "recall from memory", "omit the topic"], correctIndex: 0, explanation: "Cite MoE texts; never invent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define the aggregate production function and name its key inputs.", answerKey: "The aggregate production function is the technical relationship by which economic inputs (labour, machinery, raw materials) are turned into outputs of goods and services. Its key inputs are the workforce, human capital, physical capital and technology. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why does continual growth in GDP per capita require rising labour productivity?", answerKey: "Labour productivity is the value each worker creates per unit of input. The only way GDP per capita can grow continually is if the average worker's productivity rises; without that, adding more workers only keeps output per person flat. Productivity rises with human capital, physical capital and technology. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Agriculture and forestry are best described as", options: ["primary (raw-material) sectors", "financial services", "heavy manufacturing", "the public sector"], correctIndex: 0, answerKey: "Primary (raw-material) sectors. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State three ways agriculture and forestry contribute to an economy.", answerKey: "Any three: food and raw materials for people and processing industries; employment, especially rural; exports and revenue from crops and timber; linkages supplying inputs to other industries (e.g. timber to construction, crops to food processing). Award 1 mark each to a maximum of 3, plus 1 for a developed point.", marks: 4 },
        { type: "ESSAY", prompt: "Explain how agriculture and forestry contribute to an economy's output and how their contribution can be raised, noting the limits of the sources.", answerKey: "Award marks for: the aggregate production function and its inputs (labour, human capital, physical capital, technology, raw materials), 6 marks; agriculture and forestry as primary sectors supplying food, raw materials, jobs and exports with linkages to other industries, 6 marks; raising output through productivity — human capital (training), physical capital (machinery) and technological change (better seeds/tools), with economies of scale, 6 marks; a clear statement that Liberia's own agriculture and forestry figures are not in the approved sources and must come from the MoE primary texts, 3 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — Principles of Macroeconomics 3e, 7.4 Economic Convergence (https://openstax.org/books/principles-macroeconomics-3e/pages/7-4-economic-convergence)
      slug: "factors-impeding-the-growth-of-the-economy",
      title: "Factors Impeding the Growth of the Economy",
      objective:
        "By the end of the topic, learners should be able to explain the factors that impede growth and convergence in a low-income economy, using the sourced framework of capital, human capital, technology and institutions, while recognising that Liberia's specific obstacles lie outside the approved sources.",
      estimatedMinutes: 85,
      notes: `## Convergence — the chance low-income countries have (sourced foundation)

- **Economic convergence** is when poorer countries' "economies grow faster than those of high-income countries," narrowing the wealth gap.
- Why the chance exists:
- **Diminishing marginal returns** — "as an economy continues to increase its human and physical capital, the marginal gains to economic growth will diminish," so a country starting with little capital gets larger returns from each new investment.
- **Advantages of backwardness** — developing nations can "apply technology that has already been invented and is well understood" instead of inventing it.
- **Capital deepening** — "raising the average education level" or the "physical capital available to the average worker" expands output.

## What impedes growth (barriers to convergence)

- **Weak institutions.** Technology access alone does not guarantee growth: "a society's performance is not necessarily guaranteed" by it — the "economic, educational, and public policy institutions" must support adaptation. Weak rule of law, insecure property rights and poor policy hold growth back.
- **Low human capital.** Little education and training keep worker productivity low.
- **Little physical capital.** Too little machinery, infrastructure and investment per worker.
- **Poor technology adoption.** Failing to apply well-understood technology wastes the advantage of backwardness.
- **Slow convergence.** Even with fast growth, closing the gap "will proceed slowly" — a country growing at 7% a year still needs decades.

## From the wider extractive pattern

- Single-commodity **dependence** and infrastructure built only for export (from the concession model) leave an economy exposed and narrowly developed.
- **Instability and conflict** destroy capital and deter investment, undoing years of growth.

## Checklist — is a factor helping or impeding growth?

| Factor | Helps growth when… | Impedes growth when… |
| --- | --- | --- |
| Institutions | rule of law and property rights are strong | they are weak or policy is poor |
| Human capital | education and training are rising | schooling is low |
| Physical capital | investment per worker rises | machinery and infrastructure are scarce |
| Technology | well-understood tech is adopted | it is ignored |
| Stability | peace secures investment | conflict destroys capital |

## Applying the framework to Liberia

- Identify, for Liberia, which of these — institutions, human capital, physical capital, technology adoption, stability, commodity dependence — have narrowed or widened the gap with richer economies.

## Source note and syllabus gap

- The approved source establishes **the general barriers to growth and convergence**, but does **not** list Liberia's specific obstacles. Those are **not invented here**; use the MoE primary texts (Liberia History Book; Economic Survey of Liberia, Yeido).`,
      workedExample: `**Question:** Explain why a low-income economy such as Liberia's can struggle to grow even though convergence should let it catch up.

**Solution**

*Step 1 — the chance.*
Convergence means poorer countries can grow faster than rich ones, helped by diminishing marginal returns (big gains from each new unit of scarce capital) and the advantage of backwardness (adopting proven technology).

*Step 2 — why it stalls.*
The advantage is "not necessarily guaranteed": weak economic, educational and public-policy institutions block adaptation, so technology access alone does not deliver growth.

*Step 3 — the specific barriers.*
Low human capital, too little physical capital per worker, poor technology adoption, single-commodity dependence, and instability or conflict that destroys capital.

*Step 4 — the pace.*
Even with fast growth, convergence proceeds slowly — a 7% economy still needs decades.

*Step 5 — the limit.*
Liberia's specific obstacles are not in the approved source; take them from the MoE primary texts.

**Conclusion:** convergence offers a catch-up chance, but weak institutions, low capital, poor technology adoption, dependence and conflict can impede it — and Liberia's specific obstacles must come from the MoE primary texts.`,
      quiz: [
        { prompt: "Economic convergence is when poorer countries", options: ["grow faster than high-income countries", "stop trading", "lose their borders", "never grow"], correctIndex: 0, explanation: "Convergence is poorer economies growing faster to close the gap." },
        { prompt: "Diminishing marginal returns mean each new unit of capital gives", options: ["smaller extra gains as capital rises", "ever-larger gains forever", "no gains ever", "negative output always"], correctIndex: 0, explanation: "Marginal gains diminish as capital rises." },
        { prompt: "A country starting with little capital gets", options: ["larger returns from each new investment", "no returns", "smaller returns than rich ones", "only losses"], correctIndex: 0, explanation: "Low starting capital means bigger returns per investment." },
        { prompt: "The 'advantages of backwardness' let a country", options: ["apply technology already invented", "invent everything first", "avoid all trade", "skip education"], correctIndex: 0, explanation: "It can adopt well-understood technology." },
        { prompt: "Capital deepening includes raising", options: ["education levels or capital per worker", "import taxes only", "the coastline", "holidays"], correctIndex: 0, explanation: "It means more human/physical capital per worker." },
        { prompt: "Technology access alone", options: ["does not guarantee a society's performance", "guarantees instant wealth", "ends all poverty", "replaces institutions"], correctIndex: 0, explanation: "Performance is not guaranteed by technology alone." },
        { prompt: "For technology to help, a country needs supportive", options: ["economic, educational and public-policy institutions", "foreign armies", "longer borders", "more holidays"], correctIndex: 0, explanation: "Institutions must support adaptation." },
        { prompt: "Low human capital impedes growth because it keeps", options: ["worker productivity low", "prices high only", "borders open", "taxes low"], correctIndex: 0, explanation: "Little education/training keeps productivity low." },
        { prompt: "Too little physical capital means scarce", options: ["machinery, infrastructure and investment per worker", "laws", "flags", "anthems"], correctIndex: 0, explanation: "Physical capital is machinery, infrastructure and investment." },
        { prompt: "Ignoring well-understood technology wastes the", options: ["advantage of backwardness", "coastline", "anthem", "flag"], correctIndex: 0, explanation: "It wastes the catch-up advantage." },
        { prompt: "Even with fast growth, convergence", options: ["proceeds slowly, needing decades", "is instant", "never happens", "reverses"], correctIndex: 0, explanation: "Convergence is slow even at high growth rates." },
        { prompt: "A country growing at 7% a year still needs", options: ["decades to close the gap", "one month", "no time", "a century guaranteed only"], correctIndex: 0, explanation: "Even 7% growth takes decades to converge." },
        { prompt: "Single-commodity dependence leaves an economy", options: ["exposed and narrowly developed", "fully diversified", "immune to prices", "risk-free"], correctIndex: 0, explanation: "Dependence on one commodity is risky and narrow." },
        { prompt: "Conflict impedes growth because it", options: ["destroys capital and deters investment", "builds machinery", "raises productivity", "improves schools"], correctIndex: 0, explanation: "Conflict destroys capital and scares off investment." },
        { prompt: "Strong rule of law and property rights", options: ["help growth", "impede growth", "end trade", "have no effect"], correctIndex: 0, explanation: "They support investment and growth." },
        { prompt: "Rising education and training", options: ["help growth by building human capital", "impede growth", "lower productivity", "end convergence"], correctIndex: 0, explanation: "They raise human capital and productivity." },
        { prompt: "To analyse Liberia you identify which factors", options: ["narrowed or widened the gap with richer economies", "are the oldest", "are the newest", "cost the least"], correctIndex: 0, explanation: "Analyse which factors narrowed or widened the gap." },
        { prompt: "A factor can either help or impede growth depending on", options: ["whether it is strong/present or weak/absent", "its colour", "its age", "its spelling"], correctIndex: 0, explanation: "Each factor helps when strong and impedes when weak." },
        { prompt: "Liberia's specific obstacles to growth are", options: ["not in the approved source — use MoE texts", "fully in the source", "invented here", "irrelevant"], correctIndex: 0, explanation: "They are not in the source; use MoE texts." },
        { prompt: "The safest handling of Liberia's obstacles is to", options: ["cite the MoE texts and not invent them", "guess", "recall from memory", "omit the topic"], correctIndex: 0, explanation: "Cite MoE texts; never invent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define economic convergence and give one reason low-income countries have a catch-up chance.", answerKey: "Economic convergence is when poorer countries' economies grow faster than those of high-income countries, narrowing the wealth gap. A catch-up reason (any one): diminishing marginal returns give larger gains from each new unit of scarce capital; the advantage of backwardness lets them adopt well-understood technology; capital deepening (more education or capital per worker) expands output. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why does access to technology not guarantee growth?", answerKey: "A society's performance is not guaranteed by technology access alone; the country's economic, educational and public-policy institutions must support the adaptation of that technology. Weak institutions, insecure property rights and poor policy block growth even when technology is available. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Even with a high growth rate, economic convergence", options: ["proceeds slowly and needs decades", "happens within a month", "never happens", "reverses automatically"], correctIndex: 0, answerKey: "Proceeds slowly, needing decades. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "List four factors that can impede the growth of a low-income economy.", answerKey: "Any four: weak institutions (rule of law, property rights, policy); low human capital (little education/training); too little physical capital per worker; poor technology adoption; single-commodity dependence; and instability or conflict that destroys capital and deters investment. Award 1 mark each.", marks: 4 },
        { type: "ESSAY", prompt: "Explain why a low-income economy such as Liberia's may fail to grow despite the chance of convergence, noting the limits of the sources.", answerKey: "Award marks for: defining convergence and its drivers — diminishing marginal returns, advantages of backwardness, capital deepening, 6 marks; the barriers — weak institutions (technology access not guaranteeing performance), low human capital, scarce physical capital, poor technology adoption, 6 marks; wider impediments — single-commodity dependence and conflict destroying capital, plus the slow pace of convergence, 5 marks; applying the help/impede checklist to Liberia's situation, 4 marks; a clear statement that Liberia's specific obstacles are not in the approved sources and must come from the MoE primary texts, 2 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
  ],
};
