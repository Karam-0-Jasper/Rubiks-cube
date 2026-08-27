import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 12,
// Semester One, Period I: Economic Development and Planning (The Liberian
// Economy). CONTENTS: (1) Overview of the concepts of Economic Development and
// Planning; Economic Growth and Economic Development; (2) Features of
// underdeveloped, developing and developed economy; (3) Concept of Liberian
// Traditional Economy; (4) Factors which influence economic development in
// Liberia and West African Countries. Each top-level CONTENTS item is one
// topic. Sourced from OpenStax Principles of Macroeconomics 3e (Ch. 7) and
// Principles of Economics 3e (Ch. 1).
export const economicsG12P1: PeriodContent = {
  grade: 12,
  number: 1,
  title: "Economic Development and Planning (The Liberian Economy)",
  summary:
    "Period I of the MoE Grade 12 Economics syllabus. Learners explain the concepts of economic development and planning, distinguish economic growth from economic development, describe the features of underdeveloped, developing and developed economies, analyse the Liberian traditional economy, and identify the factors that influence economic development in Liberia and West Africa.",
  topics: [
    // source: OpenStax — Principles of Macroeconomics 3e, 7.1 The Relatively Recent Arrival of Economic Growth (https://openstax.org/books/principles-macroeconomics-3e/pages/7-1-the-relatively-recent-arrival-of-economic-growth) and 7.2 Labor Productivity and Economic Growth (https://openstax.org/books/principles-macroeconomics-3e/pages/7-2-labor-productivity-and-economic-growth)
    {
      slug: "economic-development-and-planning",
      title: "The Concepts of Economic Growth, Economic Development and Planning",
      objective:
        "By the end of the topic, learners should be able to define economic growth, economic development and economic planning, and distinguish economic growth from economic development.",
      estimatedMinutes: 130,
      notes: `## Economic growth

**Economic growth** — a sustained increase in a country's real output (real GDP), usually measured as the yearly percentage rise in **real GDP** or **real GDP per capita**.
- Rapid, sustained growth is recent: for most of history the average person's standard of living changed little for centuries; modern growth began with the **Industrial Revolution** (power-driven machinery, first half of the 1800s).
- Over the last two centuries the leading industrialised countries averaged about **2% growth in GDP per capita per year**.
- Growth is driven by rising **labour productivity** — the value each employed person creates per unit of input.

## Sources of economic growth

- **Physical capital** — tools, machinery and infrastructure that workers use.
- **Human capital** — the accumulated knowledge (from education and experience), skills and expertise the average worker possesses.
- **Technological change** — invention (advances in knowledge) plus innovation (putting them to use in new products or methods).
- **Economies of scale** — cost advantages an industry gains from producing on a larger size.

## Economic development

**Economic development** — a wider process than growth: a rise in real output **together with** improvements in living standards, structural change and the quality of life.
- Includes falling **poverty**, better **health** (lower infant mortality, longer life expectancy), wider **education**, and a shift from farming toward industry and services.
- Growth is a **quantitative** idea (more output); development is **qualitative and quantitative** (more output *and* a better standard of living for the population).

## Economic growth vs economic development

| Feature | Economic growth | Economic development |
| --- | --- | --- |
| Meaning | Rise in real output/GDP | Growth plus better living standards |
| Nature | Quantitative | Quantitative and qualitative |
| Measure | Real GDP, GDP per capita | GDP per capita, health, education, poverty |
| Scope | Narrow | Broad (welfare, structure, equity) |
| Can occur without the other? | Growth can happen with little development | Development requires growth |

## Economic planning

**Economic planning** — a deliberate effort by government to set development goals and to direct or coordinate the use of a country's resources to achieve them.
- Planners set targets (for example output, jobs, schools, roads) and allocate resources over a period (a "development plan").
- Sound institutions raise the payoff to planning: the **rule of law** (property rights and contract rights that are clear, public, fair and enforced) lets business be transacted and speeds growth.

## Common errors

- **Treating growth and development as the same.** Growth is more output; development also means a better standard of living.
- **Ignoring per capita measures.** Total GDP can rise while GDP per person falls if population grows faster.
- **Thinking planning replaces markets.** Planning sets goals and coordinates resources; it works alongside institutions such as the rule of law.`,
      workedExample: `**Question:** Country X's real GDP rises by 6% in a year, but its population also grows by 6%, and its schools, clinics and roads do not improve. (a) Has economic growth occurred? (b) Has economic development occurred? Explain.

**Solution**

*Step 1 — growth.* Economic growth is a rise in real output. Real GDP rose 6%, so **economic growth has occurred** in total output.

*Step 2 — per capita output.* GDP per capita = total real GDP ÷ population. Both rose 6%, so **output per person is unchanged** — the average standard of living has not improved.

*Step 3 — development.* Economic development requires higher living standards — better health, education and a falling poverty rate — not just more output. Since per-person output is flat and services did not improve, **economic development has not occurred**.

**Answer:** (a) Yes, total real GDP grew 6%. (b) No — GDP per capita is unchanged and living standards did not improve, so there is growth without development.`,
      quiz: [
        { prompt: "Economic growth is best defined as", options: ["a fall in prices", "a sustained increase in real output (real GDP)", "an increase in population only", "a rise in taxes"], correctIndex: 1, explanation: "Growth is a sustained rise in real GDP or real GDP per capita." },
        { prompt: "Economic development is broader than growth because it also includes", options: ["only higher prices", "improvements in living standards, health and education", "a larger population", "more imports"], correctIndex: 1, explanation: "Development adds qualitative gains in welfare to the rise in output." },
        { prompt: "Modern rapid economic growth began with the", options: ["Industrial Revolution", "Stone Age", "fall of Rome", "year AD 1"], correctIndex: 0, explanation: "Power-driven machinery in the early 1800s started sustained growth." },
        { prompt: "Over the last two centuries, leading industrialised countries grew GDP per capita at about", options: ["10% per year", "2% per year", "0% per year", "50% per year"], correctIndex: 1, explanation: "The average was roughly 2% per capita per year." },
        { prompt: "Labour productivity means", options: ["the number of workers", "the value each employed person creates per unit of input", "total population", "the price of labour"], correctIndex: 1, explanation: "Productivity is output value per unit of labour input." },
        { prompt: "Human capital refers to", options: ["machines and tools", "knowledge, skills and experience of workers", "money in banks", "natural resources"], correctIndex: 1, explanation: "Human capital is the accumulated knowledge and skills of workers." },
        { prompt: "Physical capital includes", options: ["worker education", "tools, machinery and infrastructure", "population growth", "consumer tastes"], correctIndex: 1, explanation: "Physical capital is the equipment and structures workers use." },
        { prompt: "Technological change combines", options: ["invention and innovation", "taxes and spending", "imports and exports", "saving and borrowing"], correctIndex: 0, explanation: "It is advances in knowledge plus putting them to use." },
        { prompt: "Economic growth is a mainly", options: ["qualitative idea", "quantitative idea (more output)", "political idea", "cultural idea"], correctIndex: 1, explanation: "Growth measures the quantity of output produced." },
        { prompt: "Economic development is described as", options: ["purely quantitative", "both quantitative and qualitative", "unrelated to output", "only about population"], correctIndex: 1, explanation: "Development combines more output with better living standards." },
        { prompt: "GDP per capita equals", options: ["total GDP times population", "total real GDP divided by population", "GDP minus taxes", "exports minus imports"], correctIndex: 1, explanation: "Per capita output is total real GDP divided by the number of people." },
        { prompt: "If GDP and population both rise by 5%, GDP per capita", options: ["rises", "falls", "is unchanged", "doubles"], correctIndex: 2, explanation: "Equal growth in output and population leaves output per person unchanged." },
        { prompt: "Economic planning is best described as", options: ["random spending", "government setting development goals and directing resources to meet them", "banning all trade", "printing money"], correctIndex: 1, explanation: "Planning coordinates resources toward chosen development targets." },
        { prompt: "The rule of law helps growth because it", options: ["raises prices", "makes property and contract rights clear and enforced", "bans business", "lowers education", ], correctIndex: 1, explanation: "Secure, enforced rights make it easier to transact business." },
        { prompt: "Which is a sign of economic development but not merely growth?", options: ["higher real GDP only", "lower infant mortality and wider schooling", "a bigger population", "more money supply"], correctIndex: 1, explanation: "Health and education gains are development, not just output." },
        { prompt: "Economies of scale are", options: ["cost advantages from producing on a larger size", "taxes on large firms", "small-firm subsidies", "falling demand"], correctIndex: 0, explanation: "Larger-scale production can lower average cost." },
        { prompt: "Development typically involves a shift away from", options: ["services toward farming", "subsistence farming toward industry and services", "cities toward villages", "trade toward isolation"], correctIndex: 1, explanation: "Structural change moves resources from farming to industry and services." },
        { prompt: "Growth can occur with little development when", options: ["output rises but poverty, health and education do not improve", "everyone becomes richer", "schools expand", "life expectancy rises"], correctIndex: 0, explanation: "More output without welfare gains is growth without development." },
        { prompt: "Which measure best captures average living standards?", options: ["total GDP", "real GDP per capita", "the money supply", "the tax rate"], correctIndex: 1, explanation: "Per capita output tracks output available per person." },
        { prompt: "A development plan usually sets", options: ["only interest rates", "targets for output, jobs and public services over a period", "the weather", "consumer tastes"], correctIndex: 1, explanation: "Plans set measurable goals and allocate resources to reach them." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between economic growth and economic development.", answerKey: "Economic growth is a sustained increase in a country's real output (real GDP or real GDP per capita) — a quantitative change. Economic development is broader: growth plus improvements in living standards, such as lower poverty, better health and education, and structural change from farming to industry and services — both quantitative and qualitative. Award 5 for growth, 5 for development.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "State four sources of economic growth.", answerKey: "Any four of: physical capital (tools, machinery, infrastructure); human capital (education, skills, experience); technological change (invention plus innovation); economies of scale. Award 2 marks each.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "A country's real GDP rises 4% while its population rises 4%. Its GDP per capita has", options: ["risen", "fallen", "stayed the same", "doubled"], correctIndex: 2, answerKey: "Equal growth in output and population leaves output per person unchanged. Option C.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Define economic planning and give one reason why sound institutions such as the rule of law support it.", answerKey: "Economic planning is a deliberate government effort to set development goals and direct or coordinate resources to achieve them over a period. The rule of law (clear, enforced property and contract rights) makes it easier to transact business and invest, which raises the payoff to a plan and speeds growth. Award marks for the definition and the institution point.", marks: 6 },
        { type: "ESSAY", prompt: "Explain why economic growth alone does not guarantee economic development, using the idea of GDP per capita and improvements in living standards.", answerKey: "Award marks for: definition of growth as a rise in real GDP, 6; the per capita point — total GDP can rise while GDP per person is flat if population grows as fast, 8; development requires welfare gains — falling poverty, better health, education and structural change, 8; a clear example of growth without development and a reasoned conclusion, 8. A one-sided script should not exceed 16.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Macroeconomics 3e, 7.4 Economic Convergence (https://openstax.org/books/principles-macroeconomics-3e/pages/7-4-economic-convergence) and Principles of Economics 3e, 1.4 How to Organize Economies: An Overview of Economic Systems (https://openstax.org/books/principles-economics-3e/pages/1-4-how-to-organize-economies-an-overview-of-economic-systems)
    {
      slug: "features-of-underdeveloped-developing-and-developed-economies",
      title: "Features of Underdeveloped, Developing and Developed Economies",
      objective:
        "By the end of the topic, learners should be able to describe and compare the features of underdeveloped (low-income), developing (middle-income) and developed (high-income) economies.",
      estimatedMinutes: 120,
      notes: `## Income classifications

Countries are grouped by income per person:
- **High-income (developed) countries** — for example the United States, Canada, EU countries, Japan, Australia and New Zealand.
- **Middle-income (developing) countries** — output per person between low and high income.
- **Low-income (underdeveloped) countries** — the poorest, with the least physical and human capital.

## Underdeveloped (low-income) economies

- Low **GDP per capita**; widespread **poverty**.
- Most people work in **subsistence agriculture** using traditional methods; little industry.
- Low levels of **physical capital** and **human capital** (limited machinery, schooling and skills).
- High population growth, high infant mortality, low life expectancy.
- Weak infrastructure (roads, power, water) and limited access to technology.

## Developing (middle-income) economies

- Rising GDP per capita and **faster growth** than high-income countries as they catch up.
- A growing **industrial and service** sector alongside agriculture.
- Improving health, education and infrastructure, but poverty and inequality remain.
- Low-income and middle-income countries averaged **higher GDP growth** (about 3.8%–4.7% in the 1990s) than high-income countries (about 2.7%).

## Developed (high-income) economies

- High GDP per capita; low poverty.
- Advanced industry, services and technology; high **human capital**.
- Slower growth (about 1.7%–2.7%) because they are already near the technology frontier.
- Strong infrastructure, health and education systems.

## Convergence — why poorer countries can catch up

**Economic convergence** — the pattern in which low- and middle-income economies grow faster than high-income ones and narrow the gap.
- **Diminishing returns:** starting with little capital, each new investment adds a lot of output.
- **Advantages of backwardness:** poorer countries can adopt existing technology rather than invent it.
- **Institutional learning:** they can copy market-friendly institutions that worked elsewhere.

## Comparison table

| Feature | Underdeveloped | Developing | Developed |
| --- | --- | --- | --- |
| GDP per capita | Low | Rising | High |
| Main sector | Subsistence farming | Farming plus growing industry | Industry and services |
| Human/physical capital | Low | Improving | High |
| Growth rate | Low/unstable | Fast (catching up) | Slower |
| Infrastructure | Weak | Improving | Strong |

## Common errors

- **Calling every poor country "developing".** Development is a spectrum from underdeveloped through developing to developed.
- **Assuming rich countries always grow fastest.** High-income countries usually grow slower; poorer countries can converge.
- **Ignoring per capita income when classifying.** Classification is by output per person, not total GDP.`,
      workedExample: `**Question:** Two countries: Country A has very low GDP per capita, most people farming for their own needs, and few schools or machines. Country B has rising GDP per capita, growing factories, improving clinics, and grows faster than rich countries. Classify each and explain.

**Solution**

*Step 1 — Country A.* Low GDP per capita, subsistence farming, little physical or human capital and weak services are the marks of an **underdeveloped (low-income) economy**.

*Step 2 — Country B.* Rising GDP per capita, a growing industrial sector, improving health and faster growth than high-income countries describe a **developing (middle-income) economy** that is converging.

*Step 3 — the catch-up.* Country B grows faster because of diminishing returns (each new investment adds much output when capital is scarce) and the advantages of backwardness (it can adopt existing technology).

**Answer:** Country A is underdeveloped; Country B is developing and converging on richer economies.`,
      quiz: [
        { prompt: "Countries are classified by income using", options: ["total population", "output (income) per person", "land area", "number of banks"], correctIndex: 1, explanation: "Classification is by GDP per capita, not total size." },
        { prompt: "A developed economy is also called a", options: ["low-income economy", "high-income economy", "subsistence economy", "traditional economy"], correctIndex: 1, explanation: "Developed economies are high-income countries." },
        { prompt: "In an underdeveloped economy most people work in", options: ["advanced services", "subsistence agriculture", "software", "banking"], correctIndex: 1, explanation: "Low-income economies rely on subsistence farming." },
        { prompt: "A feature of underdeveloped economies is", options: ["high human capital", "low physical and human capital", "advanced technology", "low poverty"], correctIndex: 1, explanation: "They have little machinery, schooling and skills." },
        { prompt: "Developing (middle-income) economies typically show", options: ["falling output", "rising GDP per capita and growing industry", "no agriculture", "the highest incomes"], correctIndex: 1, explanation: "They are catching up with a growing industrial and service sector." },
        { prompt: "High-income countries usually grow", options: ["faster than poor countries", "slower, being near the technology frontier", "not at all", "only through farming"], correctIndex: 1, explanation: "Being advanced, they grow more slowly than converging countries." },
        { prompt: "Economic convergence means", options: ["rich countries growing fastest", "poorer economies growing faster and narrowing the gap", "all growth stopping", "populations shrinking"], correctIndex: 1, explanation: "Convergence is low-income economies catching up." },
        { prompt: "The 'advantages of backwardness' let poor countries", options: ["invent all technology first", "adopt existing technology instead of inventing it", "avoid all trade", "ignore education"], correctIndex: 1, explanation: "They can apply technologies others have already developed." },
        { prompt: "Diminishing returns help catch-up because", options: ["capital adds little when scarce", "each new investment adds a lot of output when capital is scarce", "output cannot rise", "labour is useless"], correctIndex: 1, explanation: "Starting with little capital, new investment is highly productive." },
        { prompt: "Which best describes a developed economy?", options: ["mostly subsistence farming", "advanced industry, services and high human capital", "no infrastructure", "no schooling"], correctIndex: 1, explanation: "High-income economies have advanced sectors and human capital." },
        { prompt: "In the 1990s, low- and middle-income countries grew, on average,", options: ["slower than high-income countries", "faster than high-income countries", "at zero", "only in agriculture"], correctIndex: 1, explanation: "They averaged higher GDP growth than high-income countries." },
        { prompt: "High infant mortality and low life expectancy are typical of", options: ["developed economies", "underdeveloped economies", "all economies equally", "no economies"], correctIndex: 1, explanation: "Weak health systems mark underdeveloped economies." },
        { prompt: "Weak roads, power and water are a feature of", options: ["high-income economies", "underdeveloped economies", "the technology frontier", "convergence"], correctIndex: 1, explanation: "Poor infrastructure characterises low-income economies." },
        { prompt: "Institutional learning helps developing countries by", options: ["copying market-friendly institutions that worked elsewhere", "banning institutions", "ignoring other countries", "raising infant mortality"], correctIndex: 0, explanation: "They can adopt institutions proven to support growth." },
        { prompt: "Which sector grows as an economy develops?", options: ["only subsistence farming", "industry and services", "hunting and gathering", "none"], correctIndex: 1, explanation: "Development shifts resources toward industry and services." },
        { prompt: "A middle-income economy still commonly has", options: ["no poverty", "remaining poverty and inequality despite growth", "no industry", "the highest human capital"], correctIndex: 1, explanation: "Poverty and inequality persist as they develop." },
        { prompt: "Development is best seen as", options: ["a single fixed state", "a spectrum from underdeveloped to developed", "only about rich countries", "unrelated to income"], correctIndex: 1, explanation: "Countries lie along a range of development levels." },
        { prompt: "Which is a high-income country example given?", options: ["a subsistence village", "Japan", "an economy with no technology", "none"], correctIndex: 1, explanation: "Japan is listed among high-income developed countries." },
        { prompt: "Compared with developed economies, developing economies have", options: ["higher GDP per capita", "faster growth as they catch up", "no industry", "older technology only"], correctIndex: 1, explanation: "Developing economies grow faster while converging." },
        { prompt: "Classifying a country by total GDP instead of per capita income can be misleading because", options: ["a large population can raise total GDP while output per person stays low", "total GDP is always accurate", "population never matters", "per capita income is fake"], correctIndex: 0, explanation: "A big but poor country can have high total GDP yet low income per person." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State four features of an underdeveloped (low-income) economy.", answerKey: "Any four of: low GDP per capita and widespread poverty; most people in subsistence agriculture; low physical and human capital; high infant mortality and low life expectancy; weak infrastructure and limited technology. Award 2 marks each.", marks: 8 },
        { type: "SHORT_ANSWER", prompt: "Contrast the growth rates of high-income and low-income countries and explain the difference.", answerKey: "Low- and middle-income countries typically grow faster (about 3.8%–4.7% in the 1990s) than high-income countries (about 2.7%). Poorer countries converge because of diminishing returns (scarce capital makes new investment very productive) and the advantages of backwardness (they adopt existing technology). High-income countries grow slower, being near the technology frontier. Award marks for the comparison and at least one reason.", marks: 10 },
        { type: "MULTIPLE_CHOICE", prompt: "Economic convergence describes", options: ["high-income countries pulling further ahead", "low-income economies growing faster and narrowing the gap", "all countries growing equally", "growth stopping everywhere"], correctIndex: 1, answerKey: "Convergence is poorer economies catching up. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Describe two features that distinguish a developed economy from a developing one.", answerKey: "A developed economy has high GDP per capita, advanced industry and services, high human capital, strong infrastructure and health/education systems, and slower growth near the frontier. A developing economy has rising but lower GDP per capita, a growing (not yet dominant) industrial sector, improving but weaker services, remaining poverty, and faster catch-up growth. Award marks for any two valid contrasts.", marks: 6 },
        { type: "ESSAY", prompt: "Compare the features of underdeveloped, developing and developed economies and explain why developing economies can catch up with developed ones.", answerKey: "Award marks for: underdeveloped features — low per capita income, subsistence farming, low capital, weak infrastructure, 7; developing features — rising income, growing industry, improving services, faster growth, 7; developed features — high income, advanced industry/services, high human capital, slower growth, 7; convergence explanation — diminishing returns, advantages of backwardness, institutional learning, 9. A script covering fewer than two categories loses proportionally.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 1.4 How to Organize Economies: An Overview of Economic Systems (https://openstax.org/books/principles-economics-3e/pages/1-4-how-to-organize-economies-an-overview-of-economic-systems)
    {
      slug: "liberian-traditional-economy",
      title: "The Concept of the Liberian Traditional Economy",
      objective:
        "By the end of the topic, learners should be able to explain the concept of a traditional economy and describe the features of Liberia's traditional (subsistence) economy.",
      estimatedMinutes: 100,
      notes: `## What a traditional economy is

**Traditional economy** — the oldest economic system, still used in parts of Asia, Africa and South America, in which people organise their economic affairs the way they have always done (by **tradition/custom**).
- **Occupations stay in the family** — children usually do the work their parents did.
- **Most families are farmers** who grow crops using **traditional methods**.
- **What you produce is what you consume** (subsistence) — little is traded.
- There is **little economic progress or development** because methods rarely change.

## Features of the Liberian traditional economy

- Based mainly on **subsistence agriculture** — households grow food (rice, cassava) chiefly for their own use.
- Uses **simple tools and traditional methods** (hoes, cutlasses, shifting cultivation) rather than machinery.
- Work and land are organised around the **family, clan and village**, with roles passed down by custom.
- Exchange is often by **barter** (goods for goods) rather than money, and markets are local.
- Low use of **physical and human capital**, so output per worker and incomes stay low.
- Change is slow, so the traditional economy shows **little development** on its own.

## How it fits the three economic systems

- **Traditional economy** — decisions follow custom and tradition (much of rural Liberia).
- **Command economy** — a ruler or government decides what is produced and sets wages.
- **Market economy** — decisions are decentralised; private owners produce for demand and prices guide activity.

Most real economies, including Liberia's, are **mixed**: a traditional/subsistence rural sector alongside market activity in towns and a role for government.

## Common errors

- **Thinking a traditional economy has no rules.** Custom and tradition are its rules.
- **Confusing traditional with command.** Tradition follows custom; command follows a ruler's orders.
- **Assuming subsistence farmers sell most output.** They mainly consume what they produce; surplus, if any, is bartered or sold locally.`,
      workedExample: `**Question:** In a rural Liberian village, families farm rice with hoes on land held by the clan, roles pass from parent to child, and neighbours swap goods rather than use money. (a) Which economic system is this? (b) Give two features that identify it. (c) Why does it show little development?

**Solution**

*Step 1 — identify the system.* Decisions follow custom, occupations stay in the family, and households consume what they grow — this is a **traditional (subsistence) economy**.

*Step 2 — features.* (i) Occupations and land use are organised by the family/clan and passed down by tradition. (ii) Production uses simple traditional methods and exchange is largely by **barter** rather than money.

*Step 3 — little development.* Because methods rarely change and capital is low, output per worker and incomes stay low, so the traditional economy makes **little economic progress** on its own.

**Answer:** (a) A traditional economy; (b) family-based occupations and barter/subsistence production; (c) unchanging methods and low capital keep output and incomes low, so there is little development.`,
      quiz: [
        { prompt: "A traditional economy organises economic affairs mainly by", options: ["government orders", "custom and tradition", "stock markets", "central banks"], correctIndex: 1, explanation: "People do things the way they have always done them." },
        { prompt: "In a traditional economy, occupations usually", options: ["change every year", "stay in the family", "are assigned by a ruler", "are chosen by price signals"], correctIndex: 1, explanation: "Children tend to do the work their parents did." },
        { prompt: "Most families in a traditional economy are", options: ["bankers", "farmers using traditional methods", "factory owners", "traders on exchanges"], correctIndex: 1, explanation: "Traditional economies are mostly subsistence farming." },
        { prompt: "'What you produce is what you consume' describes", options: ["a market economy", "subsistence in a traditional economy", "a command economy", "international trade"], correctIndex: 1, explanation: "Households consume most of what they grow." },
        { prompt: "The Liberian traditional economy is based mainly on", options: ["subsistence agriculture", "heavy industry", "financial services", "software"], correctIndex: 0, explanation: "Rural households grow food chiefly for their own use." },
        { prompt: "Tools in a traditional economy are typically", options: ["automated factories", "simple, such as hoes and cutlasses", "computers", "assembly lines"], correctIndex: 1, explanation: "Traditional methods use simple hand tools." },
        { prompt: "Exchange in a traditional economy is often by", options: ["credit cards", "barter (goods for goods)", "share trading", "online banking"], correctIndex: 1, explanation: "Barter is common where money use is limited." },
        { prompt: "Land and work in the Liberian traditional economy are organised around", options: ["multinational firms", "the family, clan and village", "a central plan", "stock exchanges"], correctIndex: 1, explanation: "Roles and land use follow family and community custom." },
        { prompt: "A traditional economy shows little development because", options: ["methods rarely change and capital is low", "output rises quickly", "technology is advanced", "incomes are very high"], correctIndex: 0, explanation: "Unchanging methods and low capital keep output low." },
        { prompt: "In a command economy, decisions are made by", options: ["custom", "a ruler or government", "prices only", "foreign banks"], correctIndex: 1, explanation: "A ruling class or government decides what is produced." },
        { prompt: "In a market economy, decision-making is", options: ["centralised by a ruler", "decentralised, guided by prices and private owners", "based on tradition", "banned"], correctIndex: 1, explanation: "Private owners produce for demand and prices guide activity." },
        { prompt: "Liberia's economy is best described as", options: ["purely traditional", "purely command", "mixed — a subsistence sector alongside markets and government", "purely market"], correctIndex: 2, explanation: "A traditional rural sector coexists with market activity and government." },
        { prompt: "A key difference between traditional and command economies is", options: ["tradition follows custom while command follows a ruler's orders", "both follow prices", "both are identical", "neither has rules"], correctIndex: 0, explanation: "Custom guides tradition; orders guide command." },
        { prompt: "Human and physical capital in a traditional economy are usually", options: ["very high", "low, so output per worker is low", "irrelevant", "the highest in the world"], correctIndex: 1, explanation: "Low capital keeps productivity and incomes low." },
        { prompt: "Which crop is a typical subsistence staple in Liberia?", options: ["wheat", "rice or cassava", "grapes", "coffee only"], correctIndex: 1, explanation: "Rice and cassava are common subsistence staples." },
        { prompt: "Shifting cultivation is an example of", options: ["a traditional farming method", "an industrial process", "a banking service", "a tax system"], correctIndex: 0, explanation: "It is a traditional method of using land." },
        { prompt: "Markets in a traditional economy are typically", options: ["global and electronic", "local and small", "stock exchanges", "central banks"], correctIndex: 1, explanation: "Trade is mostly local where it occurs." },
        { prompt: "A traditional economy is the ______ economic system.", options: ["newest", "oldest", "only", "richest"], correctIndex: 1, explanation: "It is the oldest way of organising economic life." },
        { prompt: "Which statement is TRUE of a traditional economy?", options: ["it has no rules at all", "custom and tradition are its rules", "prices set every decision", "a central bank runs it"], correctIndex: 1, explanation: "Its rules come from custom and tradition." },
        { prompt: "A reason a traditional economy stays poor is", options: ["too much technology", "little change in methods and low investment", "very high wages", "too much trade"], correctIndex: 1, explanation: "Unchanging methods and low investment limit progress." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a traditional economy and state two of its features.", answerKey: "A traditional economy is the oldest economic system, in which people organise economic affairs by custom and tradition. Features (any two): occupations stay in the family; most families farm using traditional methods; what you produce is what you consume (subsistence); little economic progress. Award 4 for the definition and 3 per feature.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Describe three features of the Liberian traditional economy.", answerKey: "Any three of: based on subsistence agriculture (rice, cassava for own use); uses simple tools and traditional methods; land and work organised around family/clan/village; exchange often by barter; low physical and human capital; slow change and little development. Award 2 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "In a traditional economy, decisions are guided mainly by", options: ["prices in a stock market", "custom and tradition", "orders from a central planner", "foreign investors"], correctIndex: 1, answerKey: "Tradition and custom guide a traditional economy. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why a traditional economy tends to show little economic development.", answerKey: "Production methods rarely change because they are handed down by custom, and physical and human capital are low. As a result output per worker and incomes stay low and there is little structural change, so the economy makes little progress on its own. Award marks for the unchanging-methods point and the low-capital/low-output point.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the concept of a traditional economy and discuss how Liberia's economy combines traditional and market features.", answerKey: "Award marks for: definition of a traditional economy (custom, family occupations, subsistence, little development), 8; features of the Liberian traditional sector (subsistence farming, simple tools, family/clan organisation, barter, low capital), 10; the point that Liberia is a mixed economy — a rural subsistence sector alongside market activity in towns and a role for government, 8; a reasoned conclusion, 4.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Macroeconomics 3e, 7.2 Labor Productivity and Economic Growth (https://openstax.org/books/principles-macroeconomics-3e/pages/7-2-labor-productivity-and-economic-growth) and 7.4 Economic Convergence (https://openstax.org/books/principles-macroeconomics-3e/pages/7-4-economic-convergence)
    {
      slug: "factors-influencing-economic-development",
      title: "Factors that Influence Economic Development in Liberia and West Africa",
      objective:
        "By the end of the topic, learners should be able to identify and explain the factors that promote or hold back economic development in Liberia and West African countries.",
      estimatedMinutes: 120,
      notes: `## Factors that raise productivity and development

**Physical capital** — investment in machinery, factories, roads, power and water raises output per worker.
**Human capital** — education, training, health and skills make workers more productive.
**Technology** — adopting better methods and equipment (including existing technology from abroad) raises productivity.
**Economies of scale and industry** — larger production and a growing industrial and service sector lift incomes above subsistence farming.
**Institutions and the rule of law** — clear, enforced property and contract rights let people invest and do business, speeding growth.

## Factors that hold development back

- **Low saving and investment** — poor households save little, so there is little to invest in capital.
- **Low human capital** — limited schooling, skills and poor health reduce productivity.
- **Weak infrastructure** — bad roads, unreliable power and water raise costs and deter investment.
- **Dependence on a few primary exports** (for example iron ore, rubber) leaves income exposed to swings in world prices.
- **Political instability and weak institutions** — insecure rights and conflict discourage investment.
- **Rapid population growth** — output must rise faster just to keep GDP per capita from falling.

## Why West African economies can still catch up

- **Diminishing returns:** with little capital, each new investment adds a lot of output.
- **Advantages of backwardness:** they can adopt technology already developed elsewhere.
- **Institutional learning:** they can copy market-friendly institutions that worked in other countries.

## Policy levers for Liberia and West Africa

| Factor | How it promotes development |
| --- | --- |
| Investment in infrastructure | Lowers costs, links farms to markets |
| Education and health | Builds human capital and productivity |
| Secure property/contract rights | Encourages saving and investment |
| Diversifying beyond primary exports | Reduces exposure to price swings |
| Regional cooperation/trade | Widens markets and scale |

## Common errors

- **Blaming one factor only.** Development depends on capital, human capital, technology *and* institutions together.
- **Ignoring institutions.** Even with resources, weak rule of law and instability slow growth.
- **Forgetting population.** Growth must outpace population to raise GDP per capita.`,
      workedExample: `**Question:** Liberia wants to raise GDP per capita. It considers: (a) building all-weather roads and reliable electricity; (b) expanding schools and clinics; (c) strengthening courts that enforce contracts. Explain how each factor promotes economic development.

**Solution**

*Step 1 — infrastructure (roads and power).* Better **physical capital and infrastructure** lowers the cost of production and transport, links farmers to markets, and makes investment attractive, raising output per worker.

*Step 2 — schools and clinics.* Education and health raise **human capital** — healthier, better-educated workers are more productive, which lifts incomes and living standards (development, not just growth).

*Step 3 — courts enforcing contracts.* Secure **property and contract rights (rule of law)** let people invest and do business without fear of loss, so saving and investment rise and growth speeds up.

**Answer:** Infrastructure adds physical capital, schools and clinics build human capital, and enforced contracts strengthen institutions — together they raise productivity and GDP per capita, promoting development.`,
      quiz: [
        { prompt: "Investment in machinery, roads and power builds", options: ["human capital", "physical capital", "barter", "population"], correctIndex: 1, explanation: "Physical capital is equipment and infrastructure workers use." },
        { prompt: "Education, training and health build", options: ["physical capital", "human capital", "natural resources", "money supply"], correctIndex: 1, explanation: "Human capital is workers' knowledge, skills and health." },
        { prompt: "Adopting better methods and equipment raises development through", options: ["technology", "higher taxes", "more barter", "population growth"], correctIndex: 0, explanation: "Technology raises productivity." },
        { prompt: "The rule of law promotes development by", options: ["raising prices", "securing property and contract rights so people invest", "banning trade", "cutting schooling"], correctIndex: 1, explanation: "Enforced rights encourage saving and investment." },
        { prompt: "A factor that holds development back is", options: ["strong institutions", "low saving and investment", "reliable power", "diversified exports"], correctIndex: 1, explanation: "Little saving means little to invest in capital." },
        { prompt: "Depending on a few primary exports is risky because", options: ["prices never change", "income is exposed to swings in world prices", "it builds human capital", "it removes all risk"], correctIndex: 1, explanation: "Concentrated exports leave income exposed to price swings." },
        { prompt: "Rapid population growth can lower development because", options: ["output must rise faster just to keep GDP per capita from falling", "it always raises incomes", "it removes the need for capital", "it has no effect"], correctIndex: 0, explanation: "Per capita income falls if population outpaces output." },
        { prompt: "Weak infrastructure affects development by", options: ["lowering costs", "raising costs and deterring investment", "building human capital", "increasing exports"], correctIndex: 1, explanation: "Bad roads and power raise costs and discourage investors." },
        { prompt: "Political instability tends to", options: ["encourage investment", "discourage investment and slow growth", "raise human capital", "lower prices"], correctIndex: 1, explanation: "Insecurity and conflict deter investment." },
        { prompt: "Diminishing returns help West African catch-up because", options: ["capital adds little when scarce", "new investment adds much output when capital is scarce", "output cannot rise", "labour is idle"], correctIndex: 1, explanation: "Scarce capital makes new investment highly productive." },
        { prompt: "The advantages of backwardness let poor countries", options: ["invent all technology first", "adopt technology developed elsewhere", "avoid all trade", "ignore institutions"], correctIndex: 1, explanation: "They can apply existing technologies." },
        { prompt: "Diversifying beyond primary exports helps because it", options: ["increases exposure to price swings", "reduces exposure to price swings", "removes all industry", "lowers human capital"], correctIndex: 1, explanation: "A broader base is less exposed to one price." },
        { prompt: "Regional cooperation and trade promote development by", options: ["shrinking markets", "widening markets and allowing larger scale", "banning imports", "raising instability"], correctIndex: 1, explanation: "Bigger markets support economies of scale." },
        { prompt: "Which combination best drives development?", options: ["capital, human capital, technology and institutions together", "population growth alone", "one factor only", "barter only"], correctIndex: 0, explanation: "Development depends on several factors working together." },
        { prompt: "Better health of workers is part of", options: ["physical capital", "human capital", "natural resources", "the money supply"], correctIndex: 1, explanation: "Health is a component of human capital." },
        { prompt: "Low human capital reduces development because it", options: ["raises productivity", "lowers worker productivity", "increases technology", "removes population"], correctIndex: 1, explanation: "Little schooling and poor health lower productivity." },
        { prompt: "Institutional learning means West African countries can", options: ["copy market-friendly institutions that worked elsewhere", "ignore all rules", "avoid education", "stop investing"], correctIndex: 0, explanation: "They can adopt proven supportive institutions." },
        { prompt: "Which is a policy lever for development?", options: ["weaker courts", "investment in infrastructure and education", "more instability", "less trade"], correctIndex: 1, explanation: "Infrastructure and education raise productivity." },
        { prompt: "Secure contract enforcement mainly encourages", options: ["barter", "saving and investment", "population growth", "higher prices"], correctIndex: 1, explanation: "People invest when contracts are enforced." },
        { prompt: "A shift from subsistence farming to industry and services usually", options: ["lowers incomes", "raises incomes and productivity", "has no effect", "removes all capital"], correctIndex: 1, explanation: "Industry and services tend to raise output per worker." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State four factors that promote economic development.", answerKey: "Any four of: physical capital/infrastructure investment; human capital (education, health, skills); technology adoption; economies of scale and a growing industrial/service sector; strong institutions and the rule of law. Award 2 marks each.", marks: 8 },
        { type: "SHORT_ANSWER", prompt: "Explain two factors that hold back development in Liberia and West Africa.", answerKey: "Any two, explained: low saving and investment (poor households save little, so little capital forms); low human capital (limited schooling/health lowers productivity); weak infrastructure (raises costs, deters investment); dependence on a few primary exports (income exposed to world price swings); political instability/weak institutions (insecurity deters investment); rapid population growth (per capita income falls if population outpaces output). Award 5 marks each.", marks: 10 },
        { type: "MULTIPLE_CHOICE", prompt: "Enforcing property and contract rights promotes development mainly by", options: ["raising prices", "encouraging saving and investment", "increasing population", "reducing schooling"], correctIndex: 1, answerKey: "Secure rights make people willing to save and invest. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why depending on a few primary exports can slow development.", answerKey: "When income depends on one or two primary exports (such as iron ore or rubber), a fall in their world prices sharply cuts export earnings and government revenue. This exposes the economy to swings it cannot control, discouraging steady investment and planning. Diversifying the export base reduces this exposure. Award marks for the price-swing point and the diversification remedy.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss the main factors that influence economic development in Liberia and West Africa, and suggest policies to promote it.", answerKey: "Award marks for: promoting factors — physical capital/infrastructure, human capital, technology, institutions/rule of law, 10; holding-back factors — low saving/investment, weak infrastructure, primary-export dependence, instability, rapid population growth, 10; catch-up potential — diminishing returns, advantages of backwardness, institutional learning, 5; policy suggestions — infrastructure, education/health, secure rights, diversification, regional trade, 5. A one-sided script should not exceed 16.", marks: 30 },
      ],
    },
  ],
};
