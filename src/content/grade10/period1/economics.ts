import type { SubjectContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics (Grades 10-12).
// Grade 10, Semester One, Period I: Nature and Scope of Economics. CONTENTS:
// (1) What is Economics — definitions and origin; (2) Fundamental concepts —
// scarcity, choice, scale of preference, opportunity cost, wants & needs;
// (3) Basic economic problems — what/how/for whom to produce; (4) Branches of
// economics — micro & macro; (5) Economic systems — capitalism, socialism,
// mixed economy. Each CONTENTS item is rebuilt below as its own topic, sourced
// from OpenStax and LibreTexts. Demand & supply (P2), factors of production
// (P3) follow in their own periods.
export const economics: SubjectContent = {
  slug: "economics",
  name: "Economics",
  shortName: "Economics",
  description:
    "The nature and scope of economics: what economics is and where it came from, scarcity, choice, scale of preference and opportunity cost, the basic economic problems, the branches of economics, and economic systems.",
  accent: "lime",
  sortOrder: 9,
  teacherCode: "ECO-10-9163",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "The Nature and Scope of Economics",
      summary:
        "Period I of the MoE Grade 10 Economics syllabus. Learners define economics and trace its origin, master the fundamental concepts (scarcity, choice, scale of preference, opportunity cost, wants and needs), state the three basic economic problems, distinguish the branches of economics, and describe the main economic systems, including the one Liberia practises.",
      topics: [
        // source: OpenStax — Principles of Economics 3e, 1.1 What Is Economics, and Why Is It Important? (https://openstax.org/books/principles-economics-3e/pages/1-1-what-is-economics-and-why-is-it-important)
        {
          slug: "what-is-economics",
          title: "What is Economics: Definitions and Origin",
          objective:
            "By the end of the topic, learners should be able to define economics, explain its origin, describe scarcity as the reason economics exists, and give reasons why economics is worth studying.",
          estimatedMinutes: 120,
          notes: `## What economics is

**Economics** — the study of how humans make decisions in the face of **scarcity**.
- These decisions are made at every level: the individual, the family, the business and the whole society.
- Because there is never enough of everything for everyone, people and societies must constantly choose how to use what they have.

## The origin of the word

- The word *economics* comes from the Greek *oikonomia*, meaning **household management** — the running of a home with limited means.
- The subject grew from this idea: just as a household manages limited money, food and time, a whole nation must manage its limited resources.
- **Adam Smith** (in *The Wealth of Nations*, 1776) is regarded as the father of modern economics; he set out how specialisation and markets raise a nation's wealth.

## Scarcity — why economics exists

**Scarcity** — human wants for goods, services and resources **exceed what is available**.
- Resources (labour, land, tools, raw materials) exist only in **limited** quantities.
- Human wants are virtually **unlimited**.
- **Time** is the ultimate scarce resource: everyone has only 24 hours a day.
- Because wants exceed means, scarcity forces every person and every society to make choices — and studying those choices is economics.

## Resources (factors of production)

- **Land** — natural resources: soil, minerals, water, forests.
- **Labour** — human physical and mental effort.
- **Capital** — machines, tools, buildings and equipment made to produce other goods.
- **Enterprise (entrepreneurship)** — the organising and risk-taking that combines the other resources.

## Why study economics

1. The world's biggest problems — poverty, unemployment, climate change, conflict — all have an **economic dimension**.
2. Economic understanding is essential for **informed citizenship**: budgets, taxes and policy affect everyone.
3. Economic literacy sharpens **critical thinking** about news, prices and personal decisions.

## Common errors

- **Thinking economics is only about money.** It is about decision-making under scarcity — money is only one part.
- **Believing scarcity means "very little of something".** Scarcity means limited **relative to wants**; even a plentiful thing is scarce if wants for it exceed the amount available.
- **Treating wants as limited.** Wants are effectively unlimited; as one is met, another appears.`,
          workedExample: `**Question:** Using the idea of scarcity, explain why even a wealthy country like the one described in your textbook must still make economic choices.

**Solution**

*Step 1 — state the definition.* Economics is the study of how humans make decisions in the face of scarcity, where scarcity means wants exceed what is available.

*Step 2 — apply it to resources.* Every country, however rich, has only a **limited** amount of land, labour, capital and time. A government cannot build every road, clinic, school and power station it wants all at once.

*Step 3 — apply it to wants.* The wants of the country's people are effectively **unlimited** — better housing, healthcare, education, transport and more keep being demanded.

*Step 4 — draw the conclusion.* Because limited resources cannot satisfy unlimited wants, the country must **choose** which wants to satisfy first. Wealth reduces scarcity but never removes it.

**Answer:** Scarcity applies to every society because resources are always limited relative to unlimited wants, so choices must always be made — which is exactly why economics is studied.`,
          quiz: [
            { prompt: "Economics is best defined as the study of how humans make decisions in the face of", options: ["wealth", "scarcity", "money", "trade"], correctIndex: 1, explanation: "Scarcity — wants exceeding what is available — is the core of the definition." },
            { prompt: "The word 'economics' comes from a Greek word meaning", options: ["money-making", "household management", "market", "wealth"], correctIndex: 1, explanation: "Oikonomia means household management." },
            { prompt: "Scarcity exists because", options: ["people are lazy", "wants exceed available resources", "governments waste money", "prices are high"], correctIndex: 1, explanation: "Limited resources cannot satisfy unlimited wants." },
            { prompt: "Which is described as the ultimate scarce resource?", options: ["Money", "Gold", "Time", "Land"], correctIndex: 2, explanation: "Everyone has only 24 hours a day." },
            { prompt: "Who is regarded as the father of modern economics?", options: ["Karl Marx", "Adam Smith", "Lionel Robbins", "John Keynes"], correctIndex: 1, explanation: "Adam Smith's Wealth of Nations (1776) founded modern economics." },
            { prompt: "Human wants are best described as", options: ["limited", "unlimited", "fixed", "equal to resources"], correctIndex: 1, explanation: "As one want is met, another appears — wants are unlimited." },
            { prompt: "Machines, tools and buildings used to produce other goods are the resource called", options: ["land", "labour", "capital", "enterprise"], correctIndex: 2, explanation: "Capital is man-made resources used in production." },
            { prompt: "Natural resources such as minerals and forests are classed as", options: ["land", "capital", "labour", "enterprise"], correctIndex: 0, explanation: "Land covers all natural resources." },
            { prompt: "Which is NOT a reason given for studying economics?", options: ["World problems have economic dimensions", "It aids informed citizenship", "It guarantees personal wealth", "It sharpens critical thinking"], correctIndex: 2, explanation: "Economics informs decisions; it does not guarantee wealth." },
            { prompt: "Scarcity forces individuals and societies to", options: ["print money", "make choices", "stop producing", "ignore wants"], correctIndex: 1, explanation: "Limited means against unlimited wants require choice." },
            { prompt: "The human physical and mental effort used in production is", options: ["capital", "labour", "land", "enterprise"], correctIndex: 1, explanation: "Labour is human effort." },
            { prompt: "'Scarcity means limited relative to wants' implies that a plentiful good", options: ["can never be scarce", "is scarce if wants exceed it", "has no price", "is always free"], correctIndex: 1, explanation: "Scarcity is about the gap between wants and availability." },
            { prompt: "Economic decisions are made at the level of", options: ["individuals only", "governments only", "firms only", "individuals, families, firms and society"], correctIndex: 3, explanation: "Scarcity is faced at every level." },
            { prompt: "A country that is very wealthy still faces scarcity because", options: ["it has no resources", "its wants still exceed its limited resources", "it prints too much money", "it exports everything"], correctIndex: 1, explanation: "Even great wealth cannot satisfy unlimited wants." },
            { prompt: "The risk-taking factor that organises the other resources is", options: ["labour", "capital", "enterprise", "land"], correctIndex: 2, explanation: "Enterprise (entrepreneurship) combines and organises the others." },
            { prompt: "Which statement is TRUE?", options: ["Economics is only about the stock market", "Resources are unlimited", "Wants exceed available resources", "Time is unlimited"], correctIndex: 2, explanation: "Wants exceeding resources is the essence of scarcity." },
            { prompt: "Adam Smith's famous 1776 book is titled", options: ["The General Theory", "Das Kapital", "The Wealth of Nations", "Principles of Economics"], correctIndex: 2, explanation: "The Wealth of Nations founded modern economics." },
            { prompt: "Which best shows scarcity in daily life?", options: ["Having more than you can use", "Wanting more than your income can buy", "Getting everything free", "Unlimited time"], correctIndex: 1, explanation: "Wanting more than income allows is everyday scarcity." },
            { prompt: "The study of how a whole nation manages its limited resources grew from the idea of", options: ["banking", "household management", "warfare", "farming only"], correctIndex: 1, explanation: "The Greek root oikonomia is household management." },
            { prompt: "Which of the following is a factor of production?", options: ["Inflation", "Land", "A price", "A shortage"], correctIndex: 1, explanation: "Land, labour, capital and enterprise are the factors of production." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Define economics and explain the origin of the word.", answerKey: "Economics is the study of how humans make decisions in the face of scarcity (wants exceeding available resources), at the level of individuals, families, firms and society. The word comes from the Greek oikonomia, meaning household management — the running of a home with limited means, extended to how a whole nation manages limited resources. Award 5 for the definition, 5 for the origin.", marks: 10 },
            { type: "SHORT_ANSWER", prompt: "Explain why scarcity is the reason economics exists.", answerKey: "Resources (land, labour, capital, time) are limited, but human wants are unlimited; wants therefore exceed what is available. This gap forces every person and society to choose how to use resources, and the study of those choices is economics. Award marks for limited resources, unlimited wants, the resulting need to choose, and linking that to economics.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "Which is the ultimate scarce resource that everyone has in equal, fixed amount each day?", options: ["Money", "Land", "Time", "Labour"], correctIndex: 2, answerKey: "Everyone has only 24 hours a day — time is the ultimate scarce resource. Option C.", marks: 3 },
            { type: "SHORT_ANSWER", prompt: "State the four factors of production and give one example of each.", answerKey: "Land — natural resources (minerals, forests, soil, water). Labour — human physical/mental effort (a farmer, a teacher). Capital — man-made goods used to produce others (machines, tools, buildings). Enterprise/entrepreneurship — organising and risk-taking (a business owner). Award 2 per factor named with a valid example.", marks: 8 },
            { type: "ESSAY", prompt: "'Economics is not just about money.' Discuss, explaining what economics is, why it exists, and why it is worth studying.", answerKey: "Award marks for: definition of economics as decision-making under scarcity, not merely money, 6 marks; scarcity explained as limited resources against unlimited wants, with time as the ultimate scarce resource, 8 marks; the origin from household management/Adam Smith, 4 marks; at least three reasons economics is studied — world problems have economic dimensions, informed citizenship, critical thinking, 8 marks; a conclusion tying back to the statement, 4 marks. A script that treats economics only as money should not exceed 12.", marks: 30 },
          ],
        },
        // source: OpenStax — Principles of Economics 3e, 2.1 How Individuals Make Choices Based on Their Budget Constraint (https://openstax.org/books/principles-economics-3e/pages/2-1-how-individuals-make-choices-based-on-their-budget-constraint)
        {
          slug: "fundamental-concepts",
          title: "Fundamental Concepts: Scarcity, Choice, Scale of Preference and Opportunity Cost",
          objective:
            "By the end of the topic, learners should be able to distinguish wants from needs, explain scarcity and choice, draw up a scale of preference, and define and apply opportunity cost as the value of the next best alternative.",
          estimatedMinutes: 150,
          notes: `## Wants and needs

**Needs** — things essential for survival: food, water, shelter, clothing, basic health care.
**Wants** — desires beyond survival: a phone, a motorbike, a better house.
- Needs are limited; **wants are unlimited** — as one is satisfied, another appears.
- Both compete for the same scarce resources.

## Scarcity

**Scarcity** — resources are limited relative to the unlimited wants they could satisfy. There is never enough of everything at once. Scarcity is the central problem that gives rise to all the concepts below.

## Choice

- Because resources are scarce, not every want can be met — one must **choose**.
- Every individual, firm and government decides which wants to satisfy and which to leave unsatisfied.

## Scale of preference

**Scale of preference** — a list of wants arranged in order of importance, most pressing first.
- Since not all wants can be met, they are ranked; the most important ones the resources allow are satisfied first, working down the list.

## Opportunity cost — the key idea

**Opportunity cost** — the **value of the next best alternative** given up when a choice is made.
- It is the *next best* alternative only, **not** the sum of everything given up.
- It need not be in money — it is often measured in **time** or forgone goods.
- It applies to everyone: individuals, firms and governments.

## Budget constraint

- A **budget constraint** is the line of all the combinations of goods a person can afford given income and prices.
- Example (from OpenStax): with 10 dollars a week, burgers at 2 dollars and bus tickets at 0.50 dollars, buying one more burger means giving up **four** bus tickets — so the opportunity cost of a burger is four bus tickets.

## Sunk cost

**Sunk cost** — money already spent that cannot be recovered. It should **not** influence a present decision; only the next best alternative from now on matters.

## Common errors

- **Adding up everything given up** to find opportunity cost — it is only the *next best* alternative.
- **Assuming opportunity cost must be money** — it is a value, often time or forgone goods.
- **Letting a sunk cost decide** — past, unrecoverable spending is irrelevant to the choice now.
- **Confusing wants with needs** — needs are survival essentials and limited; wants go beyond survival and are unlimited.`,
          workedExample: `**Question:** A family has 3,000 Liberian dollars and these wants, in order of importance: (1) rice — 1,500; (2) school fee — 1,200; (3) roof repair — 1,000; (4) radio — 800. Draw up the scale of preference, decide what they can afford, and state the opportunity cost of their choice.

**Solution**

*Step 1 — the scale of preference (already ranked):*
1. Rice — 1,500
2. School fee — 1,200
3. Roof repair — 1,000
4. Radio — 800

*Step 2 — apply the limited 3,000, most important first:*
- Rice (1,500) — affordable; 1,500 left.
- School fee (1,200) — affordable; 300 left.
- Roof repair (1,000) — not affordable; only 300 remains.
- Radio (800) — not affordable.

So the family satisfies wants 1 and 2 and cannot meet 3 and 4.

*Step 3 — the opportunity cost.* Having spent the last of the budget on the school fee, the **next best** want given up is the **roof repair** (the highest-ranked want they had to forgo). Opportunity cost is the roof repair only — not the roof repair plus the radio.

**Answer:** The family affords the rice and the school fee; the opportunity cost of that spending choice is the roof repair, the single next best want sacrificed.`,
          quiz: [
            { prompt: "Opportunity cost is", options: ["the total of all alternatives given up", "the value of the next best alternative forgone", "the money spent", "the cheapest option"], correctIndex: 1, explanation: "Only the next best alternative counts." },
            { prompt: "A list of wants ranked by importance is a", options: ["budget line", "scale of preference", "demand curve", "sunk cost"], correctIndex: 1, explanation: "The scale of preference ranks wants." },
            { prompt: "Which is a need rather than a want?", options: ["A radio", "Food", "A motorbike", "A television"], correctIndex: 1, explanation: "Food is essential for survival." },
            { prompt: "Money already spent that cannot be recovered is a", options: ["opportunity cost", "sunk cost", "marginal cost", "budget"], correctIndex: 1, explanation: "A sunk cost is unrecoverable and should not affect present choices." },
            { prompt: "With 10 dollars, burgers at 2 and bus tickets at 0.50, one more burger costs how many bus tickets?", options: ["Two", "Three", "Four", "Five"], correctIndex: 2, explanation: "2 dollars ÷ 0.50 = four bus tickets given up." },
            { prompt: "Wants are described as", options: ["limited", "unlimited", "always met", "equal to needs"], correctIndex: 1, explanation: "Wants are unlimited." },
            { prompt: "Because resources are scarce, people must", options: ["print money", "make choices", "avoid work", "ignore wants"], correctIndex: 1, explanation: "Scarcity forces choice." },
            { prompt: "A student plays football all Saturday instead of studying. The opportunity cost is", options: ["the football", "the studying not done", "the whole weekend", "nothing"], correctIndex: 1, explanation: "The next best use of the time — studying — is given up." },
            { prompt: "The line of all combinations a person can afford given income and prices is the", options: ["scale of preference", "budget constraint", "supply curve", "opportunity cost"], correctIndex: 1, explanation: "That is the budget constraint." },
            { prompt: "A sunk cost should", options: ["decide the choice", "not influence the present decision", "always be recovered", "be added to opportunity cost"], correctIndex: 1, explanation: "Past unrecoverable spending is irrelevant now." },
            { prompt: "Opportunity cost applies to", options: ["individuals only", "governments only", "firms only", "individuals, firms and governments"], correctIndex: 3, explanation: "Every decision-maker faces opportunity cost." },
            { prompt: "On a scale of preference, wants are satisfied", options: ["randomly", "least important first", "most important the resources allow first", "all at once"], correctIndex: 2, explanation: "The most pressing wants are met first." },
            { prompt: "A government builds a clinic instead of a school with a fixed budget. The opportunity cost is", options: ["the clinic", "the school forgone", "the budget", "the workers"], correctIndex: 1, explanation: "The next best alternative — the school — is given up." },
            { prompt: "Which statement about needs and wants is correct?", options: ["Needs are unlimited", "Wants are limited", "Needs are survival essentials", "Wants and needs are identical"], correctIndex: 2, explanation: "Needs are essentials for survival." },
            { prompt: "Opportunity cost need not be measured in", options: ["value", "money only", "time", "forgone goods"], correctIndex: 1, explanation: "It is a value, often time or goods rather than money alone." },
            { prompt: "A farmer plants rice where cassava could have grown. The opportunity cost is", options: ["the rice", "the cassava forgone", "the plot", "the seeds"], correctIndex: 1, explanation: "The cassava the plot could have grown is given up." },
            { prompt: "Scarcity means resources are limited", options: ["absolutely, with no wants", "relative to unlimited wants", "only for the poor", "only in war"], correctIndex: 1, explanation: "Scarcity is limitation relative to wants." },
            { prompt: "Choosing one thing over another always creates a(n)", options: ["surplus", "opportunity cost", "sunk cost", "budget"], correctIndex: 1, explanation: "Every choice forgoes a next best alternative." },
            { prompt: "Selena paid 8 dollars for a bad movie. Whether she stays should depend on", options: ["the 8 dollars already spent", "her next best alternative now", "the ticket price", "the sunk cost"], correctIndex: 1, explanation: "The sunk cost is irrelevant; only the next best alternative from now matters." },
            { prompt: "Which best shows a scale of preference?", options: ["A random shopping list", "Wants ranked from most to least important", "A bank statement", "A price list"], correctIndex: 1, explanation: "A scale of preference ranks wants by importance." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Distinguish between wants and needs, with two examples of each, and explain why wants are said to be unlimited.", answerKey: "Needs are essentials for survival — food, water, shelter, clothing. Wants are desires beyond survival — a phone, a motorbike. Wants are unlimited because as soon as one is satisfied another appears, so they can never all be met. Award 3 for the distinction, 1 per example (max 4), 3 for the unlimited-wants explanation.", marks: 10 },
            { type: "SHORT_ANSWER", prompt: "Define opportunity cost and explain, with an example, why it is only the NEXT best alternative.", answerKey: "Opportunity cost is the value of the next best alternative forgone when a choice is made. With ranked options, choosing the top one forgoes only the second-ranked (next best), not the third and fourth as well, because you could only have taken one alternative. Accept any valid example. Award 4 for the definition, 4 for the correct explanation with example.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "A learner can afford only one of: a textbook (most useful), a football (next), a snack (least). She buys the textbook. Her opportunity cost is", options: ["the football", "the snack", "the football and the snack", "nothing"], correctIndex: 0, answerKey: "Opportunity cost is only the next best alternative — the football. Option A.", marks: 3 },
            { type: "SHORT_ANSWER", prompt: "Explain how scarcity, choice, scale of preference and opportunity cost are linked.", answerKey: "Because resources are scarce relative to unlimited wants, not everything can be had, so people must choose. To choose they rank wants in a scale of preference and satisfy the most important the resources allow. Choosing one thing means forgoing another, so every choice carries an opportunity cost — the next best alternative given up. Award 2 per concept and 2 for correct linkage.", marks: 10 },
            { type: "ESSAY", prompt: "Using a Liberian household budget, explain scarcity, the scale of preference and opportunity cost, and show how they guide spending decisions.", answerKey: "Award marks for: scarcity as limited income against many wants, 6; a scale of preference — wants ranked by importance with a household example, 7; opportunity cost defined as the next best alternative forgone, with the household example showing the forgone want, 9; a clear worked-through budget decision, 5; conclusion and terminology, 3. A script that lists concepts without applying them to a budget should not exceed 15.", marks: 30 },
          ],
        },
        // source: OpenStax — Principles of Economics 3e, 1.4 How To Organize Economies: An Overview of Economic Systems (https://openstax.org/books/principles-economics-3e/pages/1-4-how-to-organize-economies-an-overview-of-economic-systems)
        {
          slug: "basic-economic-problems",
          title: "The Basic Economic Problems: What, How and For Whom to Produce",
          objective:
            "By the end of the topic, learners should be able to state and explain the three basic economic problems that every society must solve because of scarcity.",
          estimatedMinutes: 110,
          notes: `## Why every society faces the same three problems

- Scarcity means no economy — rich or poor — can produce everything its people want.
- Every society, however it is organised, must therefore answer **three basic questions**.

## 1. What to produce?

- Which goods and services, and in **what quantities**.
- A society cannot make everything, so it must decide which wants to satisfy — more food or more machinery, more schools or more roads.
- Producing more of one thing means producing less of another (opportunity cost).

## 2. How to produce?

- Which **method and combination of resources** to use.
- **Labour-intensive** — using many workers (common where labour is cheap and plentiful).
- **Capital-intensive** — using machines and equipment (common where capital is available).
- The choice affects cost, employment and the quantity produced.

## 3. For whom to produce?

- **How the goods and services are shared** among the people.
- This is the question of **distribution**: who gets the output — those who can pay, those the state chooses, or a mix.

## How different systems answer them

- In a **market economy**, the three questions are answered mainly by the **price mechanism** — prices signal what to produce, how and for whom.
- In a **command economy**, the **government** decides all three.
- In a **mixed economy**, they are answered by a combination of markets and government.

## Common errors

- **Confusing "what" with "how".** *What* = which goods and quantities; *how* = the method (labour- vs capital-intensive); *for whom* = who receives the output.
- **Thinking only poor countries face these problems.** Every economy, at every income level, must answer all three because scarcity is universal.`,
          workedExample: `**Question:** A district can use its limited land, labour and money either to grow more rice or to open a new clinic. Show how this single decision involves all three basic economic problems.

**Solution**

*What to produce?* The district must decide whether its scarce resources go to **rice** or to a **clinic** — it cannot fully do both. Choosing one means producing less of the other.

*How to produce?* If it grows rice, will it use many farm workers (**labour-intensive**) or tractors and machinery (**capital-intensive**)? If it builds the clinic, the same choice of method applies to the construction.

*For whom to produce?* Who benefits? Extra rice may go to those who can buy it in the market; the clinic's services may be shared among all residents, or focused on mothers and children. This is the distribution question.

**Answer:** The single choice between rice and a clinic requires answering all three basic questions — *what* (rice or clinic), *how* (labour- or capital-intensive), and *for whom* (who receives the output) — because scarce resources cannot satisfy every want.`,
          quiz: [
            { prompt: "The three basic economic problems arise because of", options: ["high taxes", "scarcity of resources", "foreign trade", "too much money"], correctIndex: 1, explanation: "Scarcity forces every society to decide what, how and for whom." },
            { prompt: "'What to produce?' concerns", options: ["the method of production", "which goods and quantities to make", "who receives the goods", "the price of labour"], correctIndex: 1, explanation: "It is the choice of which goods and how much." },
            { prompt: "'How to produce?' asks about", options: ["which goods to make", "the method and combination of resources", "who consumes the goods", "the level of prices"], correctIndex: 1, explanation: "It concerns labour- versus capital-intensive methods." },
            { prompt: "'For whom to produce?' is the question of", options: ["distribution", "technology", "quantity", "location"], correctIndex: 0, explanation: "It decides how output is shared among people." },
            { prompt: "A method using mainly machines is", options: ["labour-intensive", "capital-intensive", "land-intensive", "traditional"], correctIndex: 1, explanation: "Capital-intensive relies on machinery." },
            { prompt: "A method using mainly workers is", options: ["capital-intensive", "labour-intensive", "automated", "mechanised"], correctIndex: 1, explanation: "Labour-intensive relies on many workers." },
            { prompt: "In a market economy the three questions are answered mainly by", options: ["the government", "the price mechanism", "foreign aid", "tradition"], correctIndex: 1, explanation: "Prices signal what, how and for whom." },
            { prompt: "In a command economy the three questions are answered by", options: ["consumers", "the government", "firms alone", "prices"], correctIndex: 1, explanation: "The state decides in a command economy." },
            { prompt: "Which economies must answer the three basic questions?", options: ["Only poor economies", "Only rich economies", "Every economy", "Only command economies"], correctIndex: 2, explanation: "Scarcity is universal, so every economy must answer them." },
            { prompt: "Choosing to produce more rice and less machinery is an example of answering", options: ["how to produce", "what to produce", "for whom to produce", "when to produce"], correctIndex: 1, explanation: "It is a 'what to produce' decision." },
            { prompt: "Deciding whether the clinic serves everyone or only mothers and children answers", options: ["what to produce", "how to produce", "for whom to produce", "why to produce"], correctIndex: 2, explanation: "It is a distribution (for whom) question." },
            { prompt: "The 'how to produce' question is closely tied to", options: ["distribution", "the choice of labour- or capital-intensive methods", "consumer tastes", "population size"], correctIndex: 1, explanation: "It is about the production method." },
            { prompt: "Producing more of one good means producing less of another because of", options: ["inflation", "opportunity cost/scarcity", "taxation", "trade"], correctIndex: 1, explanation: "Scarce resources create trade-offs." },
            { prompt: "In a mixed economy the three questions are answered by", options: ["only the market", "only the government", "a combination of markets and government", "tradition alone"], correctIndex: 2, explanation: "A mixed economy blends market and government." },
            { prompt: "Which is a 'for whom' decision?", options: ["Using tractors instead of workers", "Making shoes rather than sandals", "Deciding who receives subsidised rice", "Building a factory"], correctIndex: 2, explanation: "It concerns who gets the output." },
            { prompt: "Labour-intensive methods are common where", options: ["labour is scarce", "capital is cheap", "labour is cheap and plentiful", "machines are free"], correctIndex: 2, explanation: "Cheap, plentiful labour favours labour-intensive methods." },
            { prompt: "The three basic questions are 'what, how and", options: ["when to produce'", "where to produce'", "for whom to produce'", "why to produce'"], correctIndex: 2, explanation: "The third question is 'for whom to produce'." },
            { prompt: "Which correctly matches question to meaning?", options: ["What = the method", "How = the goods", "For whom = distribution", "For whom = quantity"], correctIndex: 2, explanation: "'For whom' is the distribution question." },
            { prompt: "A government choosing free healthcare for all is answering mainly", options: ["what to produce only", "for whom to produce", "how to produce only", "none of these"], correctIndex: 1, explanation: "It decides who receives the service." },
            { prompt: "The basic economic problems exist because wants are unlimited but resources are", options: ["also unlimited", "limited", "worthless", "free"], correctIndex: 1, explanation: "Limited resources against unlimited wants create the problems." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "State the three basic economic problems and explain what each means.", answerKey: "What to produce — which goods and services and in what quantities. How to produce — the method and combination of resources (labour-intensive vs capital-intensive). For whom to produce — how the output is distributed among people. Award 2 per problem stated and explained, plus 2 for noting they arise from scarcity.", marks: 8 },
            { type: "SHORT_ANSWER", prompt: "Distinguish between labour-intensive and capital-intensive methods of production, and say when each is likely to be chosen.", answerKey: "Labour-intensive uses mainly workers; chosen where labour is cheap and plentiful. Capital-intensive uses mainly machines and equipment; chosen where capital is available and labour is costly. Award 3 per method with its condition, 2 for a clear contrast.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "Deciding that subsidised rice will go to low-income families answers which basic question?", options: ["What to produce", "How to produce", "For whom to produce", "When to produce"], correctIndex: 2, answerKey: "It is a distribution decision — for whom to produce. Option C.", marks: 3 },
            { type: "SHORT_ANSWER", prompt: "Explain why every society, rich or poor, must answer the three basic economic problems.", answerKey: "Because scarcity is universal — resources are always limited relative to unlimited wants — no economy can produce everything. Every society must therefore decide which goods to make, by what method, and who receives them. Award marks for universality of scarcity and for linking it to all three questions.", marks: 6 },
            { type: "ESSAY", prompt: "Using an example, explain the three basic economic problems and show how a market economy and a command economy answer them differently.", answerKey: "Award marks for: clear statement and explanation of what, how and for whom, 9; a worked example applying all three, 6; the market economy answering via the price mechanism, 5; the command economy answering via government decision, 5; conclusion and terminology, 5. A script that only lists the questions without the systems comparison should not exceed 15.", marks: 30 },
          ],
        },
        // source: OpenStax — Principles of Economics 3e, 1.2 Microeconomics and Macroeconomics (https://openstax.org/books/principles-economics-3e/pages/1-2-microeconomics-and-macroeconomics)
        {
          slug: "branches-of-economics",
          title: "The Branches of Economics: Microeconomics and Macroeconomics",
          objective:
            "By the end of the topic, learners should be able to distinguish microeconomics from macroeconomics, state what each studies, and classify given issues as micro or macro.",
          estimatedMinutes: 100,
          notes: `## The two main branches

Economics is divided into two branches that study the same economy from different vantage points.

**Microeconomics** — the study of the actions of **individual agents** within the economy: households, workers, and businesses.
- It looks at consumer spending decisions, firm production and pricing choices, employment decisions in a single firm, and how a single market works.
- *Micro = small* — one household, one firm, one market.

**Macroeconomics** — the study of the economy **as a whole**.
- It addresses broad issues: the growth of total production, the number of unemployed people, the inflationary rise in prices, government deficits, and the levels of exports and imports.
- Its three main goals: **growth in the standard of living, low unemployment, and low inflation**.
- *Macro = large* — the whole economy.

## They are complementary, not separate

- Both study the **same economy**. Think of a lake: one researcher studies a single fish or plant (micro); another studies the whole food chain and the balance of the system (macro).
- The two connect: decisions by individual firms and households (micro) add up to affect the whole economy (macro), while economy-wide conditions (macro) affect the choices of individual firms and households.

## Macroeconomic policy tools

- **Monetary policy** — managing the money supply and interest rates, run by a central bank.
- **Fiscal policy** — government spending and taxation.

## Classifying issues

| Issue | Branch |
| --- | --- |
| The price of rice in one market | Microeconomics |
| A single firm deciding how many workers to hire | Microeconomics |
| National inflation rate | Macroeconomics |
| Total unemployment in the country | Macroeconomics |
| A household's spending choices | Microeconomics |
| The country's exports and imports | Macroeconomics |

## Common errors

- **Mixing up the two.** Micro = individual units; macro = the whole economy.
- **Thinking they are unrelated.** They are two views of one economy and constantly influence each other.`,
          workedExample: `**Question:** Classify each of the following as microeconomics or macroeconomics, giving a reason: (a) a shop owner deciding what price to charge for bread; (b) the national unemployment rate rising; (c) a family choosing between two brands of soap; (d) inflation across the whole country.

**Solution**

(a) **Microeconomics** — it concerns a single firm's pricing decision, an individual unit.

(b) **Macroeconomics** — the national unemployment rate is an economy-wide total.

(c) **Microeconomics** — it concerns a single household's spending choice.

(d) **Macroeconomics** — inflation across the whole country is an aggregate, economy-wide issue.

**Answer:** (a) micro, (b) macro, (c) micro, (d) macro. The rule: individual agents and single markets are micro; economy-wide totals such as unemployment, inflation and national output are macro.`,
          quiz: [
            { prompt: "Microeconomics studies", options: ["the whole economy", "individual households, firms and markets", "only the government", "only foreign trade"], correctIndex: 1, explanation: "Micro looks at individual agents." },
            { prompt: "Macroeconomics is concerned with", options: ["a single market", "the economy as a whole", "one household", "one firm"], correctIndex: 1, explanation: "Macro deals with the whole economy." },
            { prompt: "The study of national inflation belongs to", options: ["microeconomics", "macroeconomics", "accounting", "geography"], correctIndex: 1, explanation: "Inflation is an economy-wide (macro) issue." },
            { prompt: "A single firm deciding how many workers to hire is a", options: ["macro issue", "micro issue", "monetary policy", "fiscal policy"], correctIndex: 1, explanation: "A single firm is a micro-level unit." },
            { prompt: "Which are the three main goals of macroeconomics?", options: ["Profit, sales, exports", "Growth in living standards, low unemployment, low inflation", "Low taxes, high wages, cheap goods", "Trade, aid, investment"], correctIndex: 1, explanation: "These three are macroeconomics' main goals." },
            { prompt: "'Micro' is a useful memory aid because it means", options: ["large", "small", "money", "market"], correctIndex: 1, explanation: "Micro = small: one firm, one market." },
            { prompt: "Monetary policy is run by the", options: ["central bank", "president alone", "firms", "consumers"], correctIndex: 0, explanation: "The central bank manages money supply and interest rates." },
            { prompt: "Fiscal policy involves", options: ["interest rates only", "government spending and taxation", "firm pricing", "consumer choice"], correctIndex: 1, explanation: "Fiscal policy is spending and taxes." },
            { prompt: "The price of tomatoes in one market is a", options: ["macro issue", "micro issue", "national aggregate", "fiscal matter"], correctIndex: 1, explanation: "A single market is micro." },
            { prompt: "Total national output (all goods and services) is studied in", options: ["microeconomics", "macroeconomics", "book-keeping", "marketing"], correctIndex: 1, explanation: "Aggregate output is macro." },
            { prompt: "Micro and macro are best described as", options: ["completely separate subjects", "two views of the same economy", "the same thing", "unrelated"], correctIndex: 1, explanation: "They study one economy from different vantage points." },
            { prompt: "A household choosing between two brands of soap is", options: ["macroeconomics", "microeconomics", "monetary policy", "trade policy"], correctIndex: 1, explanation: "A single household choice is micro." },
            { prompt: "The country's total exports and imports are a", options: ["micro issue", "macro issue", "single-firm issue", "household issue"], correctIndex: 1, explanation: "National trade totals are macro." },
            { prompt: "Which statement is TRUE?", options: ["Macro studies one firm", "Micro studies the whole economy", "Micro decisions add up to affect the macro economy", "The two never connect"], correctIndex: 2, explanation: "Individual decisions aggregate to affect the whole." },
            { prompt: "Unemployment across the whole nation is", options: ["micro", "macro", "a firm's decision", "a price"], correctIndex: 1, explanation: "National unemployment is macro." },
            { prompt: "'Macro' as a memory aid means", options: ["small", "large", "money", "market"], correctIndex: 1, explanation: "Macro = large: the whole economy." },
            { prompt: "A firm setting the wage it pays is studied in", options: ["macroeconomics", "microeconomics", "fiscal policy", "monetary policy"], correctIndex: 1, explanation: "A single firm's wage decision is micro." },
            { prompt: "Government deficits are a topic of", options: ["microeconomics", "macroeconomics", "single markets", "household budgeting only"], correctIndex: 1, explanation: "Government deficits are an economy-wide macro topic." },
            { prompt: "The lake analogy compares macroeconomics to studying", options: ["a single fish", "one plant", "the whole food chain and system", "the water colour"], correctIndex: 2, explanation: "Macro is the whole system; micro is a single organism." },
            { prompt: "Which pairing is correct?", options: ["Micro — national inflation", "Macro — one firm's price", "Micro — a single market", "Macro — one household's soap choice"], correctIndex: 2, explanation: "A single market is micro." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Distinguish between microeconomics and macroeconomics, giving one example studied in each.", answerKey: "Microeconomics studies individual agents — households, workers, firms, single markets — e.g. the price of rice in one market. Macroeconomics studies the economy as a whole — total output, unemployment, inflation — e.g. the national inflation rate. Award 3 per definition and 2 per correct example.", marks: 10 },
            { type: "MULTIPLE_CHOICE", prompt: "Which is a macroeconomic issue?", options: ["A bakery's bread price", "The national unemployment rate", "One family's grocery choice", "A single farmer's output"], correctIndex: 1, answerKey: "National unemployment is an economy-wide aggregate — macro. Option B.", marks: 3 },
            { type: "SHORT_ANSWER", prompt: "State the three main goals of macroeconomics.", answerKey: "Growth in the standard of living (economic growth), low unemployment, and low inflation. Award 2 per goal, 1 bonus for all three correct and precise.", marks: 6 },
            { type: "SHORT_ANSWER", prompt: "Explain how microeconomics and macroeconomics are connected rather than separate.", answerKey: "Both study the same economy. Micro decisions by individual firms and households add up to affect the whole economy's performance (macro), while macro conditions (inflation, unemployment) affect the choices of individual firms and households (micro). Award marks for shared economy, micro-to-macro link, and macro-to-micro link.", marks: 6 },
            { type: "ESSAY", prompt: "Explain the two branches of economics and classify five economic issues of your choice as micro or macro, giving reasons.", answerKey: "Award marks for: definition and scope of microeconomics, 6; definition and scope of macroeconomics with its three goals, 6; the point that they are complementary views of one economy, 4; five issues correctly classified with reasons, 10 (2 each); terminology and organisation, 4. A script with fewer than five classified issues loses proportionally.", marks: 30 },
          ],
        },
        // source: OpenStax — Principles of Economics 3e, 1.4 How To Organize Economies (https://openstax.org/books/principles-economics-3e/pages/1-4-how-to-organize-economies-an-overview-of-economic-systems) and LibreTexts Social Sci — 16.1 Economic Systems (https://socialsci.libretexts.org/Courses/Solano_Community_College/SOC_002:_Social_Issues_and_Problems/16:_Economy/16.01:_Economic_Systems)
        {
          slug: "economic-systems",
          title: "Economic Systems: Capitalism, Socialism and the Mixed Economy",
          objective:
            "By the end of the topic, learners should be able to describe capitalism, socialism and the mixed economy, compare their advantages and disadvantages, and identify the system Liberia practises.",
          estimatedMinutes: 140,
          notes: `## What an economic system is

An **economic system** is the way a society organises the production and distribution of goods and services — how it answers *what, how* and *for whom* to produce. There are three main types, plus the older traditional system.

## Capitalism (market / free-enterprise economy)

**Capitalism** — an economic system in which capital and the other means of production are **privately controlled**; labour, goods and capital are traded in **markets**.
- Decision-making is **decentralised**: market forces, not government, determine economic decisions.
- Runs on **private enterprise** — private individuals own and operate the means of production and produce for **profit**.
- Prices coordinate the economy through supply and demand.
- **Advantages:** freedom of choice; strong incentive to work and innovate (profit); efficient response to consumer demand.
- **Disadvantages:** wide gap between rich and poor; some needed goods (public goods) underprovided; instability (booms and slumps).

## Socialism (command / planned economy)

**Socialism** — an economic system in which the means of production are **socially (state) owned** and used to meet human needs, not to create profit.
- Economic effort is devoted to goals set by a ruler or ruling class; the government **decides what and how to produce and sets prices and wages**.
- Often provides necessities such as healthcare and education **free**.
- **Advantages:** aims at a fairer distribution; can provide public services; can plan for the whole society.
- **Disadvantages:** less choice; weaker incentive to work and innovate; the state may be inefficient.

## Mixed economy

**Mixed economy** — combines elements of **market and command** (and even traditional) systems.
- Most real-world economies are mixed, lying on a spectrum from market-oriented to command-oriented.
- Private firms produce most goods through the market, but the government also produces some goods, provides public services (roads, schools, health) and **regulates** the economy — because "there is no such thing as an absolutely free market".
- **Advantage:** keeps the market's incentives while letting the state correct its failures and provide essential services.

## Traditional economy

- The oldest system, still used in parts of Africa, Asia and South America.
- Economic affairs are organised the way they have always been done (**tradition**): occupations stay within families, subsistence farming uses conventional methods, and change is slow.

## Liberia's economic system

- Liberia operates a **mixed economy**.
- Private individuals and firms produce most goods and services through the market — farming, trade, mining, services.
- The government provides public services, collects taxes and regulates activity.
- A large **subsistence** sector (households producing mainly for their own use) sits alongside the market and government sectors.

## Common errors

- **Calling Liberia purely capitalist or purely socialist.** It is a mixed economy with private, government and subsistence sectors together.
- **Believing one system is simply "best".** Each has advantages and disadvantages; the mixed economy is common because it blends the strengths.
- **Thinking any market is completely free.** Even market economies have regulation — "the rules of the game".`,
          workedExample: `**Question:** Compare capitalism and socialism as ways of answering the three basic questions, then explain which system Liberia practises and why a mixed economy is often preferred.

**Solution**

*Step 1 — the common task.* Every economy must decide **what, how** and **for whom** to produce; systems differ in **who answers and how**.

*Step 2 — capitalism.* Resources are privately owned; the questions are answered by individuals and firms through the **price mechanism**, guided by profit and demand. *What* = whatever consumers will pay for; *how* = the most profitable method; *for whom* = those who can pay. Strength: freedom, incentive, efficiency. Weakness: inequality; some goods underprovided.

*Step 3 — socialism.* Resources are state-owned; the **government** answers the questions by planning, aiming at fairer distribution. Strength: fairer sharing, public services. Weakness: less choice, weaker incentives, possible inefficiency.

*Step 4 — Liberia.* Liberia runs a **mixed economy**: private farmers, traders and firms supply most goods; government provides public services, taxes and regulates; a large subsistence sector produces for households' own use.

*Step 5 — why a mixed economy is preferred.* It keeps the **market's incentives and efficiency** while letting the government **provide public goods, reduce extreme inequality and regulate** against abuse — combining the strengths of both systems.

**Answer:** Capitalism answers through private ownership and markets; socialism through state ownership and planning; Liberia practises a mixed economy, preferred because it blends market incentives with government provision and correction of market failure.`,
          quiz: [
            { prompt: "In capitalism, the means of production are", options: ["state owned", "privately owned", "owned by no one", "shared equally by law"], correctIndex: 1, explanation: "Private ownership and markets define capitalism." },
            { prompt: "In socialism, the means of production are", options: ["privately owned", "socially/state owned", "owned by foreign firms", "unowned"], correctIndex: 1, explanation: "Socialism features social/state ownership." },
            { prompt: "A mixed economy combines", options: ["two governments", "market and command elements", "capitalism and no trade", "socialism only"], correctIndex: 1, explanation: "It blends market and command systems." },
            { prompt: "Liberia practises which system?", options: ["Pure capitalism", "Pure socialism", "A mixed economy", "A traditional economy only"], correctIndex: 2, explanation: "Private, government and subsistence sectors operate together." },
            { prompt: "In a market economy, decisions are", options: ["centralised in government", "decentralised through market forces", "made by tradition only", "made by one firm"], correctIndex: 1, explanation: "Market forces, not government, decide." },
            { prompt: "An advantage of capitalism is", options: ["equal incomes for all", "incentive to work and innovate", "no private property", "guaranteed public goods"], correctIndex: 1, explanation: "Profit and competition drive effort and innovation." },
            { prompt: "A disadvantage of capitalism is", options: ["no incentives", "a wide gap between rich and poor", "state ownership", "no prices"], correctIndex: 1, explanation: "Markets can produce large inequality." },
            { prompt: "An advantage of socialism is", options: ["maximum profit", "aim of fairer distribution", "no government", "unlimited choice"], correctIndex: 1, explanation: "Socialism aims at fairer distribution and public services." },
            { prompt: "A disadvantage of socialism is", options: ["too much private property", "weaker incentives and less choice", "no public services", "no planning"], correctIndex: 1, explanation: "Central control can weaken incentives and choice." },
            { prompt: "The oldest economic system, based on custom, is the", options: ["market economy", "command economy", "traditional economy", "mixed economy"], correctIndex: 2, explanation: "The traditional economy runs on custom and tradition." },
            { prompt: "Private enterprise means", options: ["the state owns firms", "private individuals own and run the means of production", "no one owns firms", "firms are illegal"], correctIndex: 1, explanation: "Private enterprise is private ownership of production." },
            { prompt: "In a command economy, prices and wages are", options: ["set by the market", "set by the government", "set by firms", "always zero"], correctIndex: 1, explanation: "The government sets them in a command economy." },
            { prompt: "Which sector, producing mainly for households' own use, is large in Liberia?", options: ["The banking sector", "The subsistence sector", "The export sector", "The tourism sector"], correctIndex: 1, explanation: "Much Liberian production is subsistence." },
            { prompt: "A public good the market may underprovide is", options: ["mobile phones", "street lighting", "soft drinks", "clothing"], correctIndex: 1, explanation: "Public goods like street lighting are often underprovided by markets." },
            { prompt: "'There is no such thing as an absolutely free market' means", options: ["markets never exist", "even market economies have regulation", "governments run everything", "prices are fixed"], correctIndex: 1, explanation: "Regulation sets the rules even in market economies." },
            { prompt: "The main advantage of a mixed economy is that it", options: ["removes all government", "keeps market incentives while the state provides essential services", "bans private trade", "eliminates prices"], correctIndex: 1, explanation: "It balances market efficiency with public provision." },
            { prompt: "In a traditional economy, occupations tend to", options: ["change every year", "stay within families", "be assigned by markets", "be chosen freely by all"], correctIndex: 1, explanation: "Tradition keeps occupations within families." },
            { prompt: "Which system devotes economic effort to goals set by a ruler or ruling class?", options: ["Market economy", "Command economy", "Mixed economy", "Traditional economy"], correctIndex: 1, explanation: "That describes a command (socialist) economy." },
            { prompt: "Most real-world economies are", options: ["pure market", "pure command", "mixed", "traditional"], correctIndex: 2, explanation: "Most lie somewhere on the mixed spectrum." },
            { prompt: "The profit motive is central to", options: ["socialism", "capitalism", "the traditional economy", "central planning"], correctIndex: 1, explanation: "Producing for profit characterises capitalism." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Define an economic system and name the three main types.", answerKey: "An economic system is the way a society organises the production and distribution of goods and services (how it answers what, how and for whom to produce). The three main types are capitalism (market/free enterprise), socialism (command/planned) and the mixed economy. Award 4 for the definition, 2 per type named.", marks: 10 },
            { type: "SHORT_ANSWER", prompt: "State two advantages and two disadvantages of capitalism.", answerKey: "Advantages: freedom of choice; incentive to work and innovate through profit; efficient response to consumer demand. Disadvantages: wide gap between rich and poor; underprovision of public goods; instability. Award 2 per advantage and per disadvantage (two of each).", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "Which best describes Liberia's economic system?", options: ["A pure command economy", "A pure free-market economy", "A mixed economy with private, government and subsistence sectors", "A barter-only economy"], correctIndex: 2, answerKey: "Private enterprise, government provision and a large subsistence sector operate together — a mixed economy. Option C.", marks: 3 },
            { type: "SHORT_ANSWER", prompt: "Explain why the government still has a role even in a market-oriented economy.", answerKey: "There is no absolutely free market: the government sets the rules of the game (regulation), provides public goods the market underprovides (roads, lighting, defence), reduces extreme inequality and corrects market failures. Award marks for regulation, public goods, and correcting market failure/inequality.", marks: 6 },
            { type: "ESSAY", prompt: "Describe the three main economic systems and explain, with reasons, why a mixed economy is practised in Liberia and in most countries.", answerKey: "Award marks for: capitalism — private ownership, price mechanism, profit, advantages and disadvantages, 7; socialism — state ownership, planning, advantages and disadvantages, 7; the mixed economy combining private enterprise with government provision and regulation, 6; a reasoned explanation that Liberia and most countries use a mixed economy to keep market incentives while providing public services and correcting failures, with Liberian examples, 7; terminology, 3. A script that describes the systems without explaining the preference for the mixed economy should not exceed 18.", marks: 30 },
          ],
        },
      ],
    },
  ],
};
