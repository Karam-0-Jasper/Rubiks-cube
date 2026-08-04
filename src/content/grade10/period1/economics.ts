import type { SubjectContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics (Grades 10-12).
// Grade 10, Semester One, Period I: Nature and Scope of Economics (definition
// and origin; scarcity, choice, scale of preference, opportunity cost, wants
// and needs; the basic economic problems; branches; economic systems). Demand
// and supply (P2), factors of production (P3) follow in their own periods.
export const economics: SubjectContent = {
  slug: "economics",
  name: "Economics",
  shortName: "Economics",
  description:
    "The nature and scope of economics: scarcity, choice and opportunity cost, the basic economic problems, the branches of economics, and economic systems.",
  accent: "lime",
  sortOrder: 9,
  teacherCode: "ECO-10-9163",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "The Nature and Scope of Economics",
      summary:
        "Period I of the MoE Grade 10 Economics syllabus. Learners define economics and its fundamental concepts — scarcity, choice, scale of preference and opportunity cost — then examine the basic economic problems, the branches of economics, and the main economic systems, including the one Liberia practises.",
      topics: [
        {
          slug: "nature-and-concepts",
          title: "The Meaning and Fundamental Concepts of Economics",
          objective:
            "By the end of the unit, learners should be able to define economics, distinguish wants from needs, and explain scarcity, choice, scale of preference and opportunity cost, relating them to everyday life.",
          estimatedMinutes: 160,
          notes: `## Introduction

- People everywhere face one stubborn fact: there is never **enough** — money runs out before the shopping list does; a government cannot build every road, clinic and school it wants.
- **Economics** — the study of how people use **limited resources** to satisfy **unlimited wants**.
- **This topic:** what economics is; **wants vs needs**; and the linked ideas of **scarcity, choice, scale of preference** and **opportunity cost**.

## What economics is

**Economics** is the social science that studies how people and societies use their **limited resources** to satisfy their **unlimited wants**.

A classic definition, from Lionel Robbins: *economics is the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses.*

The word comes from the Greek *oikonomia*, meaning household management — managing limited means to meet needs.

## Wants and needs

- **Needs** are things essential for survival: food, water, shelter, clothing, basic health care.
- **Wants** are desires beyond survival: a phone, a motorbike, a better house.

- Needs are limited, but **wants are unlimited** — as soon as one is satisfied, another appears.
- Economics studies both, because both compete for the same scarce resources.

## Scarcity — the central problem

**Scarcity** means that resources are **limited relative to the wants** they could satisfy. There is never enough of everything to satisfy everyone's wants at once.

Scarcity is the **fundamental economic problem**. It exists at every level — the individual, the family, the firm and the government all face limited resources and unlimited wants.

Three conditions make something an economic problem:
1. Wants are **unlimited**.
2. Resources are **limited**.
3. Resources have **alternative uses**.

## Choice

- Scarce resources mean not everything can be had — one must **choose**.
- Every individual, firm and government decides which wants to satisfy and which to leave unsatisfied.

## Scale of preference

- **Scale of preference** — a list of wants arranged in order of importance, most pressing first.
- Since not all wants can be met, they are ranked and the most important ones resources allow are satisfied, working down the list.

## Opportunity cost

Because choosing one thing means giving up another, every choice has an **opportunity cost**.

**Opportunity cost is the value of the next best alternative forgone when a choice is made.**

- It is the **next best** alternative, not the sum of everything given up.
- It need not be measured in money — time is often the scarcer resource.
- It applies to everyone: individuals, firms and governments.

*Examples:* a student who spends the afternoon at football gives up the studying not done; a government that builds a hospital with a fixed budget gives up the school it might have built; a farmer who plants rice on a plot gives up the cassava it could have grown.

## Why these concepts matter

- Scarcity, choice and opportunity cost are the foundation of the whole subject.
- Every economic decision — household, business or government — is a choice made under scarcity.
- Every choice has a cost, measured in what is given up.

## Common errors and misconceptions

- **Adding up everything given up to find opportunity cost** — opportunity cost is only the **next best** alternative forgone, *not* the sum of all the options you did not choose.
- **Thinking opportunity cost must be money** — it is a *value*, often measured in **time** or forgone goods; the studying a footballer misses is a real cost even though no money changes hands.
- **Confusing wants with needs** — **needs** are survival essentials (food, water, shelter) and are limited; **wants** go beyond survival and are **unlimited**.
- **Believing scarcity means "not much of something"** — scarcity means resources are limited **relative to the wants** they could satisfy; even something plentiful is scarce if wants for it outstrip it.`,
          workedExample: `**Question:** A family has 3,000 Liberian dollars and the following wants, in order of importance: (1) buy rice for the week — 1,500; (2) pay a child's school fee — 1,200; (3) repair the roof — 1,000; (4) buy a radio — 800. Draw up the family's scale of preference, decide what they can afford, and state the opportunity cost of their choices.

**Solution**

*Step 1 — the scale of preference.*
The wants are already ranked by importance:
1. Rice — 1,500
2. School fee — 1,200
3. Roof repair — 1,000
4. Radio — 800

*Step 2 — apply the limited resources.*
The family has only **3,000**. Working down the list and satisfying the most important wants first:
- Rice (1,500) — affordable; 1,500 left.
- School fee (1,200) — affordable; 300 left.
- Roof repair (1,000) — **not affordable**, only 300 remains.
- Radio (800) — not affordable.

So the family satisfies wants 1 and 2 (rice and school fee) and cannot satisfy 3 and 4.

*Step 3 — the opportunity cost.*
The family chose to spend its last portion on the school fee rather than on the roof. The **next best alternative forgone** was the **roof repair** (the highest-ranked want they had to give up). So the **opportunity cost** of paying the school fee, given the budget, is the **roof repair** — not the radio as well, because opportunity cost is only the *next best* thing given up, not everything.

**Answer:** the family can afford the rice and the school fee; the opportunity cost of their spending choice is the roof repair — the next best want they had to forgo.

*The lesson:* scarcity forces a scale of preference; the family satisfies the most important wants their limited money allows; and the opportunity cost of what they chose is the single next best thing sacrificed.`,
          teachingTip:
            "Make scarcity something the class feels, not a definition to copy. Ask each learner what they would buy with a small fixed sum, then point out that the list is always longer than the money — and that the same is true of every family and every government in the world. That framing needs no defence. The error to attack directly is treating opportunity cost as the sum of everything given up: put three ranked options on the board, have a learner choose one, then ask the class for the opportunity cost and correct anyone who adds up the other two. Say the words 'next best' every single time you use the term. A real family budget, like the worked example, ties scarcity, scale of preference and opportunity cost together in one exercise learners recognise from home.",
          quiz: [
            { prompt: "Economics is best defined as the study of how people use", options: ["unlimited resources for limited wants", "limited resources to satisfy unlimited wants", "money only", "government budgets only"], correctIndex: 1, explanation: "Scarcity of resources against unlimited wants is the core idea." },
            { prompt: "The fundamental economic problem is", options: ["too much money", "scarcity", "high prices", "unemployment only"], correctIndex: 1, explanation: "Scarcity — limited resources against unlimited wants — is fundamental." },
            { prompt: "Which is a need rather than a want?", options: ["A radio", "A motorbike", "Food", "A television"], correctIndex: 2, explanation: "Food is essential for survival; the others are wants." },
            { prompt: "Opportunity cost is", options: ["the total of all alternatives given up", "the value of the next best alternative forgone", "the money spent", "the cost of production"], correctIndex: 1, explanation: "Only the next best alternative counts as opportunity cost." },
            { prompt: "A list of wants in order of importance is a", options: ["scale of preference", "budget line", "demand curve", "balance sheet"], correctIndex: 0, explanation: "The scale of preference ranks wants by importance." },
            { prompt: "Wants are described as", options: ["limited", "unlimited", "always met", "equal to needs"], correctIndex: 1, explanation: "As one want is satisfied, another appears — wants are unlimited." },
            { prompt: "Because resources are scarce, people must", options: ["print money", "make choices", "avoid work", "ignore wants"], correctIndex: 1, explanation: "Scarcity forces choice." },
            { prompt: "A student spends Saturday playing football instead of studying. The opportunity cost is", options: ["the football", "the studying not done", "the whole weekend", "nothing"], correctIndex: 1, explanation: "The next best use of the time — studying — is given up." },
            { prompt: "Which condition is necessary for an economic problem to exist?", options: ["Resources have alternative uses", "Wants are limited", "Money is unlimited", "Everyone is rich"], correctIndex: 0, explanation: "Alternative uses, unlimited wants and limited resources together create the problem." },
            { prompt: "The word economics comes from a Greek word meaning", options: ["money-making", "household management", "government", "trade"], correctIndex: 1, explanation: "Oikonomia means household management — managing limited means." },
            { prompt: "Opportunity cost applies to", options: ["individuals only", "governments only", "firms only", "individuals, firms and governments"], correctIndex: 3, explanation: "Every economic decision-maker faces opportunity cost." },
            { prompt: "A government builds a hospital instead of a school with a fixed budget. The opportunity cost is", options: ["the hospital", "the school forgone", "the budget", "the workers"], correctIndex: 1, explanation: "The next best alternative — the school — is given up." },
            { prompt: "Which statement about needs and wants is correct?", options: ["Needs are unlimited", "Wants are limited", "Needs are essential for survival", "Wants and needs are identical"], correctIndex: 2, explanation: "Needs are survival essentials; wants go beyond them and are unlimited." },
            { prompt: "Scarcity exists because", options: ["people are lazy", "resources are limited relative to wants", "governments waste money", "prices are high"], correctIndex: 1, explanation: "Limited resources cannot satisfy unlimited wants." },
            { prompt: "A farmer plants rice on a plot that could have grown cassava. The opportunity cost is", options: ["the rice", "the cassava forgone", "the plot", "the seeds"], correctIndex: 1, explanation: "The cassava the plot could have grown is the alternative given up." },
            { prompt: "Opportunity cost need not be measured in", options: ["money only", "time", "goods", "any value"], correctIndex: 0, explanation: "It is often measured in time or forgone goods, not only money." },
            { prompt: "On a scale of preference, wants are satisfied", options: ["randomly", "starting with the least important", "starting with the most important the resources allow", "all at once"], correctIndex: 2, explanation: "The most pressing wants are met first, working down the list." },
            { prompt: "Which of these is an economic resource that is scarce?", options: ["Sunlight in the open", "Land", "Air to breathe", "Ocean water in the sea"], correctIndex: 1, explanation: "Land is limited and has alternative uses; free goods like open air are not scarce." },
            { prompt: "The next best alternative forgone is the definition of", options: ["scarcity", "opportunity cost", "choice", "a want"], correctIndex: 1, explanation: "Opportunity cost = the next best alternative given up." },
            { prompt: "Which best shows scarcity in daily life?", options: ["Having more money than you can spend", "Wanting more than your income can buy", "Getting everything you want", "Free goods for everyone"], correctIndex: 1, explanation: "Wanting more than income allows is scarcity in everyday terms." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Define economics and explain the three conditions that must hold for an economic problem to exist.", answerKey: "Economics is the social science that studies how people and societies use limited resources to satisfy unlimited wants (accept Robbins' definition). Conditions: wants must be unlimited; resources must be limited relative to those wants; and resources must have alternative uses, so using them one way forecloses another. Award 4 marks for the definition and 3 per condition explained.", marks: 13 },
            { type: "SHORT_ANSWER", prompt: "Distinguish between wants and needs, giving two examples of each, and explain why wants are described as unlimited.", answerKey: "Needs are essentials for survival — food, water, shelter, clothing. Wants are desires beyond survival — a phone, a motorbike. Wants are unlimited because as soon as one is satisfied another appears, so human wants can never all be met at once. Award 3 marks for the distinction, 1 per example up to 4, 3 for the explanation of unlimited wants.", marks: 10 },
            { type: "MULTIPLE_CHOICE", prompt: "A learner can afford only one of: a textbook (most useful), a football (next), or a snack (least). She buys the textbook. Her opportunity cost is", options: ["the football", "the snack", "the football and the snack", "nothing"], correctIndex: 0, answerKey: "Opportunity cost is only the next best alternative — the football — not the sum of the football and the snack. Option A.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Explain the relationship between scarcity, choice, scale of preference and opportunity cost.", answerKey: "Because resources are scarce relative to unlimited wants, not everything can be had, so people must choose. To choose, they arrange their wants in order of importance — a scale of preference — and satisfy the most important their resources allow. Because choosing one thing means giving up another, every choice carries an opportunity cost, the value of the next best alternative forgone. Award 2 marks for each of the four concepts and 2 for correctly linking them.", marks: 10 },
            { type: "ESSAY", prompt: "'Scarcity is the central fact of economic life.' Discuss this statement, explaining the fundamental concepts of economics and illustrating each with an example from Liberian life.", answerKey: "Award marks for: definition of economics and a developed account of scarcity as limited resources against unlimited wants having alternative uses, 6 marks; the distinction between wants and needs, 4 marks; choice and the scale of preference explained with a Liberian household example, 5 marks; opportunity cost defined as the next best alternative forgone, with at least two Liberian examples (a family budget, a government choosing between a clinic and a road), 8 marks; a conclusion returning to the statement, 4 marks; organisation and terminology, 3 marks. A learner who defines terms without linking them to scarcity should not exceed 15.", marks: 30 },
          ],
        },
        {
          slug: "economic-problems-branches-systems",
          title: "Economic Problems, Branches and Systems",
          objective:
            "By the end of the unit, learners should be able to state the three basic economic problems, distinguish microeconomics from macroeconomics, and describe the main economic systems, including the one practised in Liberia.",
          estimatedMinutes: 160,
          notes: `## Introduction

- Scarcity forces every society to decide which choices to make and to organise itself to carry them out.
- **This topic:** the **three basic economic problems** no economy can escape; the two branches — **microeconomics** and **macroeconomics**; and the main **economic systems** (capitalism, socialism, mixed economy), ending with the system Liberia practises.

## The three basic economic problems

Because resources are scarce, **every society** — however it is organised — must answer three basic questions:

1. **What to produce?** Which goods and services, and in what quantities. A society cannot produce everything, so it must decide which wants to satisfy.
2. **How to produce?** Which method and combination of resources — labour-intensive (using many workers) or capital-intensive (using machines).
3. **For whom to produce?** How the goods and services produced are shared among the people.

These questions arise directly from scarcity and must be answered by any economy.

## The branches of economics

Economics is divided into two main branches.

**Microeconomics** — the study of the behaviour of **individual units**: a single household, a single firm, a single market, and the prices and quantities in them. It looks at the small parts of the economy.

**Macroeconomics** — the study of the economy **as a whole**: national income, total output, inflation, unemployment, economic growth, and government policy. It looks at the big picture.

*A memory aid:* **micro** = small (one firm, one market); **macro** = large (the whole economy).

## Economic systems

An **economic system** is the way a society organises the production and distribution of goods and services — how it answers the three basic questions. There are three main types.

**Capitalism (free enterprise / market economy)**
- Resources are **privately owned**; decisions are made by individuals and firms through the **price mechanism**, seeking profit.
- *Advantages:* freedom of choice; incentive to work and innovate; efficient response to consumer demand.
- *Disadvantages:* wide gap between rich and poor; some needed goods (public goods) may be underprovided; instability.

**Socialism (command / planned economy)**
- Resources are **owned and controlled by the state**; the government decides what, how and for whom to produce.
- *Advantages:* aims at fairer distribution; can provide public services; can plan for the whole society.
- *Disadvantages:* less choice; weaker incentive to work and innovate; the state may be inefficient.

**Mixed economy**
- Combines **both** private enterprise and government involvement. Most goods are produced by private firms through the market, but the government also produces some goods, provides public services (roads, schools, health) and regulates the economy.
- *Advantages:* keeps the incentives of the market while allowing the state to correct its failures and provide essential services.

## Liberia's economic system

- Liberia operates a **mixed economy**.
- Private individuals and firms produce most goods and services through the market — farming, trade, mining, services.
- The government provides public services, collects taxes, and regulates economic activity.
- A large **subsistence** sector (households producing mainly for their own use) sits alongside the market and government sectors.

## Why this matters

- The basic questions, branches and systems give a framework for the whole subject.
- Every later topic — demand and supply, production, money, trade — is about how an economy answers *what, how and for whom* to produce.

## Common errors and misconceptions

- **Mixing up micro and macro** — **micro**economics studies *individual* units (one household, one firm, one market); **macro**economics studies the economy *as a whole* (national income, inflation, unemployment).
- **Thinking Liberia is a pure capitalist or pure socialist economy** — Liberia runs a **mixed economy**: private firms, government provision and a large **subsistence** sector operate side by side.
- **Believing one system is simply "best"** — each has advantages *and* disadvantages; the mixed economy is common precisely because it tries to keep the market's incentives while letting the state correct its failures.
- **Confusing "how to produce" with "what to produce"** — *what* is which goods and quantities; *how* is the method (labour-intensive vs capital-intensive); *for whom* is how output is shared.`,
          workedExample: `**Question:** Compare capitalism and socialism as ways of answering the three basic economic questions, and explain which system Liberia practises and why a mixed economy is often preferred.

**Solution**

*Step 1 — recall the three questions.*
Every economy must decide **what to produce, how to produce, and for whom to produce**. The difference between systems is **who answers them and how**.

*Step 2 — capitalism.*
Under **capitalism (free enterprise)**, resources are **privately owned** and the questions are answered by individuals and firms through the **price mechanism**, guided by profit and consumer demand.
- *What:* whatever consumers will pay for.
- *How:* whichever method is most profitable.
- *For whom:* those who can afford to pay.
- *Strength:* freedom, incentive and efficiency. *Weakness:* a wide gap between rich and poor, and some essential goods underprovided.

*Step 3 — socialism.*
Under **socialism (planned economy)**, resources are **owned and controlled by the state**, which answers the questions by central planning.
- *What, how, for whom:* decided by the government, aiming at fairer distribution.
- *Strength:* fairer sharing and provision of public services. *Weakness:* less choice, weaker incentives, possible inefficiency.

*Step 4 — Liberia and the mixed economy.*
Liberia practises a **mixed economy**. Most goods are produced by **private** farmers, traders and firms through the market, while the **government** provides public services (roads, schools, health), collects taxes and regulates the economy, and a large **subsistence** sector produces for households' own use.

*Step 5 — why a mixed economy is often preferred.*
A mixed economy tries to **keep the strengths of both** systems while limiting their weaknesses: it retains the market's incentives and efficiency, but lets the government step in to provide essential services the market underprovides, reduce extreme inequality, and regulate against abuse. That balance is why most countries, including Liberia, operate mixed economies.

**Answer:** capitalism answers the three questions through private ownership and the market; socialism answers them through state ownership and planning; Liberia practises a mixed economy, which is often preferred because it combines the incentives of the market with the government's ability to provide public services and correct market failures.`,
          teachingTip:
            "Teach the three basic questions as questions every economy must answer, not as a list to memorise — ask the class how their own community decides what gets grown, how, and who ends up with it, and the what/how/for-whom framework emerges from their own answers. For the branches, drill the single distinction until automatic: micro is one firm or one market, macro is the whole economy. Economic systems are best taught as a debate, exactly as the syllabus suggests: split the class and have them argue the advantages and disadvantages of capitalism versus socialism, then let them arrive at the mixed economy as the compromise most countries choose. Finish by asking which system Liberia uses and pointing to real examples — private markets and traders alongside government schools and roads — so the abstract idea attaches to what learners see around them.",
          quiz: [
            { prompt: "Which is one of the three basic economic problems?", options: ["When to sleep", "What to produce", "Who owns the bank", "How to travel"], correctIndex: 1, explanation: "Every economy must decide what, how and for whom to produce." },
            { prompt: "Microeconomics studies", options: ["the whole economy", "individual households, firms and markets", "only the government", "international trade only"], correctIndex: 1, explanation: "Micro looks at the small, individual units of the economy." },
            { prompt: "Macroeconomics is concerned with", options: ["a single market", "the economy as a whole", "one household", "one firm"], correctIndex: 1, explanation: "Macro deals with national income, inflation, unemployment and growth." },
            { prompt: "In capitalism, resources are", options: ["owned by the state", "privately owned", "owned by no one", "shared equally by law"], correctIndex: 1, explanation: "Private ownership and the price mechanism define capitalism." },
            { prompt: "In socialism, decisions are made mainly by", options: ["individual firms", "the state", "foreign investors", "consumers alone"], correctIndex: 1, explanation: "The government owns resources and plans the economy." },
            { prompt: "A mixed economy combines", options: ["two governments", "private enterprise and government involvement", "capitalism and no trade", "socialism only"], correctIndex: 1, explanation: "It keeps the market but allows the state to provide services and regulate." },
            { prompt: "Liberia practises which economic system?", options: ["Pure capitalism", "Pure socialism", "A mixed economy", "A traditional economy only"], correctIndex: 2, explanation: "Private, government and subsistence sectors operate together." },
            { prompt: "'For whom to produce?' concerns", options: ["which goods to make", "the method of production", "how output is shared among people", "where to build factories"], correctIndex: 2, explanation: "It is the question of distribution." },
            { prompt: "Which is an advantage of capitalism?", options: ["Equal incomes for all", "Incentive to work and innovate", "No private property", "Guaranteed public goods"], correctIndex: 1, explanation: "Profit and competition encourage effort and innovation." },
            { prompt: "A disadvantage of socialism is", options: ["a wide gap between rich and poor", "less choice and weaker incentives", "too much private ownership", "no government role"], correctIndex: 1, explanation: "Central control can reduce choice and the incentive to work." },
            { prompt: "The study of inflation and unemployment belongs to", options: ["microeconomics", "macroeconomics", "accounting", "geography"], correctIndex: 1, explanation: "These are economy-wide (macro) issues." },
            { prompt: "'How to produce?' asks about", options: ["which goods to make", "the method and combination of resources", "who consumes the goods", "the price of goods"], correctIndex: 1, explanation: "It concerns labour-intensive versus capital-intensive methods." },
            { prompt: "A capital-intensive method of production uses mainly", options: ["many workers", "machines", "government offices", "land only"], correctIndex: 1, explanation: "Capital-intensive means relying on machinery and equipment." },
            { prompt: "In a market economy, the three questions are answered mainly by", options: ["the government", "the price mechanism", "foreign aid", "tradition only"], correctIndex: 1, explanation: "Prices signal what to produce, how and for whom." },
            { prompt: "An advantage of a mixed economy is that it", options: ["removes all government", "keeps market incentives while the state provides essential services", "bans private trade", "eliminates prices"], correctIndex: 1, explanation: "It balances the market's efficiency with public provision." },
            { prompt: "The study of a single firm's pricing is part of", options: ["macroeconomics", "microeconomics", "national accounting", "international economics"], correctIndex: 1, explanation: "A single firm is a micro-level unit." },
            { prompt: "Which sector, where households produce mainly for their own use, is large in Liberia?", options: ["The banking sector", "The subsistence sector", "The export sector only", "The tourism sector"], correctIndex: 1, explanation: "Much Liberian production is subsistence, for the household's own consumption." },
            { prompt: "A public good that the market may underprovide is", options: ["mobile phones", "street lighting", "soft drinks", "clothing"], correctIndex: 1, explanation: "Public goods like street lighting are often underprovided by the market." },
            { prompt: "Which system aims most directly at a fairer distribution of resources?", options: ["Capitalism", "Socialism", "Free enterprise", "Pure market economy"], correctIndex: 1, explanation: "Socialism uses state control to pursue a fairer distribution." },
            { prompt: "The three basic economic questions arise because of", options: ["too much money", "scarcity of resources", "high taxes", "foreign trade"], correctIndex: 1, explanation: "Scarcity forces every society to decide what, how and for whom to produce." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "State the three basic economic problems and explain what each means.", answerKey: "What to produce — which goods and services, and in what quantities. How to produce — the method and combination of resources (labour-intensive or capital-intensive). For whom to produce — how the output is distributed among the people. Award 2 marks per problem stated and explained, and 2 for noting they arise from scarcity.", marks: 8 },
            { type: "SHORT_ANSWER", prompt: "Distinguish between microeconomics and macroeconomics, giving one example of a topic studied in each.", answerKey: "Microeconomics studies individual units — a household, a firm, a single market — e.g. the price of rice in a market. Macroeconomics studies the economy as a whole — e.g. national inflation or unemployment. Award 3 marks per definition and 2 per correct example.", marks: 10 },
            { type: "MULTIPLE_CHOICE", prompt: "Which best describes Liberia's economic system?", options: ["A pure command economy", "A pure free-market economy", "A mixed economy with private, government and subsistence sectors", "A barter-only economy"], correctIndex: 2, answerKey: "Liberia has private enterprise, government provision and a large subsistence sector operating together — a mixed economy. Option C.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "State two advantages and two disadvantages of capitalism.", answerKey: "Advantages: freedom of choice; incentive to work and innovate through profit; efficient response to consumer demand. Disadvantages: wide gap between rich and poor; underprovision of public goods; economic instability. Award 2 marks per advantage and per disadvantage (two of each).", marks: 8 },
            { type: "ESSAY", prompt: "Describe the three main types of economic system and explain, with reasons, why a mixed economy is the system practised in Liberia and in most countries.", answerKey: "Award marks for: capitalism/free enterprise — private ownership, the price mechanism, profit motive, with advantages and disadvantages, 7 marks; socialism/planned economy — state ownership and central planning, with advantages and disadvantages, 7 marks; the mixed economy — combining private enterprise with government provision and regulation, 6 marks; a reasoned explanation that Liberia (and most countries) use a mixed economy because it keeps the market's incentives and efficiency while allowing the state to provide public services, reduce inequality and correct market failures, with Liberian examples, 8 marks; organisation and terminology, 2 marks. A learner who describes the systems without explaining why the mixed economy is preferred should not exceed 18.", marks: 30 },
          ],
        },
      ],
    },
  ],
};
