import type { SubjectContent } from "@/content/types";

export const economics: SubjectContent = {
  slug: "economics",
  name: "Economics",
  shortName: "Economics",
  description:
    "Scarcity and choice, opportunity cost, demand, supply and market equilibrium.",
  accent: "lime",
  sortOrder: 9,
  teacherCode: "ECO-10-9163",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "The Economic Problem and the Market",
      summary:
        "Learners meet the central problem of scarcity, learn to reason with opportunity cost and the production possibility curve, and build the demand and supply model up to market equilibrium.",
      topics: [
        {
          slug: "introduction-to-economics",
          title: "Introduction to Economics",
          objective:
            "By the end of the lesson, learners should be able to define economics, distinguish wants from needs, classify goods, and identify the four factors of production with their rewards.",
          estimatedMinutes: 80,
          notes: `## Defining economics

**Economics** is the social science that studies how people and societies allocate **scarce resources** among **unlimited wants**.

The classic definition, from Lionel Robbins: *the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses.*

Three elements make something an economic problem:

1. Wants are **unlimited**
2. Resources are **limited**
3. Resources have **alternative uses**

Remove any one and the problem disappears. Air is not usually an economic good because it is not scarce at the point of use.

## Wants and needs

**Needs** are essential for survival: food, water, shelter, clothing, basic health care.

**Wants** are desires beyond survival: a mobile phone, a better house, a motorbike.

Needs are limited; wants are unlimited. Economics concerns itself with both, since both compete for the same scarce resources.

## Branches of economics

**Microeconomics** — the behaviour of individual units: a household, a firm, a single market. Questions of price, output, and the allocation of resources between uses.

**Macroeconomics** — the economy as a whole: national income, inflation, unemployment, growth, the balance of payments, government budgets.

## Classification of goods

**Free goods** — available without limit at zero cost, so no economic decision is required. Sunlight, air in the open.

**Economic goods** — scarce, and therefore commanding a price. Almost everything traded.

Further distinctions:

- **Consumer goods** — bought for direct satisfaction. Rice, clothing, a radio.
- **Capital goods (producer goods)** — used to produce other goods. Machinery, tools, factory buildings.
- **Durable goods** — last a long time. A vehicle, a refrigerator.
- **Non-durable goods** — consumed quickly. Food, fuel.
- **Public goods** — non-excludable and non-rival, so the market underprovides them. Street lighting, national defence.
- **Private goods** — excludable and rival.
- **Services** — intangible: teaching, transport, banking, medical care.

## The four factors of production

| Factor | Meaning | Reward |
| --- | --- | --- |
| **Land** | All natural resources: soil, minerals, forests, water, fisheries | **Rent** |
| **Labour** | Human effort, physical and mental | **Wages / salaries** |
| **Capital** | Man-made assets used in production: machinery, tools, buildings, stock | **Interest** |
| **Entrepreneurship** | Organising the other three, bearing risk, taking decisions | **Profit** |

Note that **money is not capital** in the economist's sense. Money is a medium of exchange; capital is the physical means of production. Money buys capital, but it is not itself capital.

## The three basic economic questions

Every society, however organised, must answer:

1. **What to produce?** Which goods and services, and in what quantities.
2. **How to produce?** Which combination of factors — labour-intensive or capital-intensive methods.
3. **For whom to produce?** How output is distributed among the population.

## Economic systems

- **Traditional economy** — decisions follow custom and inheritance.
- **Free market (capitalist)** — decisions made by private individuals through the price mechanism.
- **Command (planned)** — decisions made by the state.
- **Mixed economy** — both private enterprise and state direction. Liberia, like most countries, operates a mixed economy.

## Economics in Liberia

Liberia's economy rests heavily on iron ore, rubber, gold, timber and agriculture, with a large **subsistence** sector in which households produce mainly for their own consumption. The economy is vulnerable to fluctuations in world commodity prices, which is a recurring theme in Liberian economic policy.`,
          workedExample: `**Question:** A farmer in Bong County owns five hectares of land, a hoe and a cutlass, employs two workers, and decides each season what to plant and how much of the harvest to sell. He recently used savings to buy a mechanical rice thresher.

(a) Identify the factors of production and the reward earned by each.
(b) Classify the hoe, the thresher and the harvested rice.
(c) Explain how this farmer answers the three basic economic questions.
(d) Explain why the money in his savings was not capital, but the thresher is.

**Solution**

**(a) Factors of production and their rewards**

- **Land** — the five hectares, together with the soil fertility and rainfall it carries. Reward: **rent**.
- **Labour** — the two employed workers, and the farmer's own physical work. Reward: **wages**.
- **Capital** — the hoe, cutlass and thresher: man-made assets used to produce other goods. Reward: **interest**.
- **Entrepreneurship** — the farmer's decisions on what to plant, how much to sell, whether to buy the thresher, and the risk he bears if the harvest fails. Reward: **profit**.

Note that the farmer supplies **two** factors: labour when he works the land, and entrepreneurship when he decides and bears risk. This is typical of small enterprises and is worth stating explicitly.

**(b) Classification of the three items**

- **The hoe** — a **capital good** (producer good). It is not wanted for its own sake but for what it helps produce. It is also **durable**.
- **The thresher** — likewise a **capital good**, and durable. It is a larger, more capital-intensive example of the same category.
- **The harvested rice** — this depends on its use. Rice kept for the household is a **consumer good**, and a **non-durable** one. Rice sold to a mill for processing functions as an **intermediate good**.

The lesson: classification depends on **use**, not on the physical object. The same bag of rice may be a consumer good or an input.

**(c) The three basic questions**

- **What to produce?** He decides to plant rice rather than cassava or vegetables, weighing expected prices, his soil, and what his household needs.
- **How to produce?** He chooses his combination of factors. Buying the thresher shifts him towards more **capital-intensive** production and away from labour-intensive hand threshing.
- **For whom to produce?** He allocates the harvest between his own household's consumption and sale in the market, and the sold portion goes to whoever can pay the price.

**(d) Why savings are not capital but the thresher is**

This is the distinction most often confused.

**Money is not capital** in economics. Money is a **medium of exchange** — a claim on goods, not a productive asset. Sitting in savings, it produces nothing.

**Capital is a man-made asset used in production.** The thresher is capital because it physically participates in producing output: it threshes rice that would otherwise require far more labour.

The relationship is that money **buys** capital. When the farmer exchanged his savings for the thresher, he converted a claim on resources into an actual productive asset. The money did not become more useful by being called capital; it became productive by being turned into a machine.

*A test:* if everyone in the country doubled the money in their pockets overnight, would more rice be produced? No — prices would rise. If everyone doubled their threshers, would more rice be produced? Yes. That is the difference between money and capital.

**Answer:** land earning rent, labour earning wages, capital earning interest, entrepreneurship earning profit; the hoe and thresher are durable capital goods and the rice is a consumer or intermediate good depending on use; the three questions are answered through his planting, technique and distribution decisions; and money is a medium of exchange while capital is a produced means of production.`,
          teachingTip:
            "Open with scarcity as something learners feel rather than a definition they copy. Ask what each of them would buy with fifty United States dollars, then point out that the list is longer than the money — and that the same is true of the national budget and of every government in the world. Scarcity established that way needs no further defence. The money-is-not-capital point requires deliberate attack because it contradicts everyday speech, where people say 'I need capital to start a business' meaning cash. Do not let it pass: ask whether printing more money would produce more rice, and let the class reason to the answer. On the factors of production, run a quick round where learners name a local business and identify all four factors in it, since the entrepreneurship factor in particular becomes real only when they can point to a person bearing risk. Keep the four rewards drilled as pairs — land-rent, labour-wages, capital-interest, entrepreneurship-profit — as these are examined almost every year.",
          quiz: [
            {
              prompt: "The fundamental economic problem arises from",
              options: [
                "too much money in circulation",
                "unlimited wants and limited resources",
                "government taxation",
                "poor weather",
              ],
              correctIndex: 1,
              explanation:
                "Scarcity exists because wants exceed the resources available to satisfy them.",
            },
            {
              prompt: "Which is the reward for the factor 'capital'?",
              options: ["Rent", "Wages", "Interest", "Profit"],
              correctIndex: 2,
              explanation: "Land earns rent, labour wages, capital interest and enterprise profit.",
            },
            {
              prompt: "Which of these is a free good?",
              options: ["Rice", "Air in the open", "A bicycle", "Electricity"],
              correctIndex: 1,
              explanation:
                "A free good is available without limit at zero cost, so no economic choice is required.",
            },
            {
              prompt: "Microeconomics is chiefly concerned with",
              options: [
                "national income and inflation",
                "individual households, firms and markets",
                "international trade balances",
                "government borrowing",
              ],
              correctIndex: 1,
              explanation:
                "Macroeconomics deals with the economy as a whole; microeconomics with its individual units.",
            },
            {
              prompt: "In economics, money is best described as",
              options: [
                "a factor of production",
                "capital",
                "a medium of exchange",
                "a free good",
              ],
              correctIndex: 2,
              explanation:
                "Capital consists of man-made productive assets; money is a claim used to acquire them.",
            },
            {
              prompt: "A machine used in a factory is classified as",
              options: [
                "A consumer good",
                "A capital good",
                "A free good",
                "A public good",
              ],
              correctIndex: 1,
              explanation:
                "Capital goods are produced assets used to make other goods rather than for direct satisfaction.",
            },
            {
              prompt: "The reward for entrepreneurship is",
              options: ["Rent", "Interest", "Wages", "Profit"],
              correctIndex: 3,
              explanation:
                "The entrepreneur organises the other factors and bears risk, earning profit as reward.",
            },
            {
              prompt: "Which is NOT one of the three basic economic questions?",
              options: [
                "What to produce?",
                "How to produce?",
                "For whom to produce?",
                "Who owns the central bank?",
              ],
              correctIndex: 3,
              explanation:
                "Every society must answer what, how and for whom, regardless of its economic system.",
            },
            {
              prompt: "Street lighting is an example of a",
              options: [
                "Private good",
                "Public good",
                "Free good",
                "Capital good",
              ],
              correctIndex: 1,
              explanation:
                "It is non-excludable and non-rival, so the market tends to underprovide it.",
            },
            {
              prompt: "Liberia's economy is best described as",
              options: [
                "A pure command economy",
                "A pure free market economy",
                "A mixed economy",
                "A traditional economy only",
              ],
              correctIndex: 2,
              explanation:
                "Both private enterprise and state direction operate, as in most modern economies.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define economics and explain the three conditions that must hold for an economic problem to exist.",
              answerKey:
                "Economics is the social science studying how people and societies allocate scarce resources among unlimited wants; accept Robbins' definition. Conditions: wants must be unlimited; resources must be limited relative to those wants; and resources must have alternative uses, so that using them one way forecloses another. Award 4 marks for the definition and 3 marks per condition explained. Credit a learner who notes that removing any one condition dissolves the problem.",
              marks: 13,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Name the four factors of production, give one example of each, and state the reward earned by each.",
              answerKey:
                "Land — natural resources such as soil, minerals, forests, fisheries — reward rent. Labour — human physical and mental effort, such as a teacher or farm worker — reward wages or salaries. Capital — man-made productive assets such as machinery, tools and buildings — reward interest. Entrepreneurship — organising the other factors and bearing risk, such as a business owner — reward profit. Award 1 mark per factor, 1 per example and 1 per reward.",
              marks: 12,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "A trader keeps 5,000 Liberian dollars in a box, then uses it to buy a sewing machine. Which statement is correct?",
              options: [
                "Both the money and the machine are capital",
                "The money was capital; the machine is not",
                "The money was not capital; the machine is capital",
                "Neither is capital",
              ],
              correctIndex: 2,
              answerKey:
                "Money is a medium of exchange and a claim on resources, not a productive asset. The sewing machine is a man-made asset used to produce goods, and is therefore capital. Option C.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Distinguish between the four types of economic system, and state which best describes Liberia.",
              answerKey:
                "Traditional — economic decisions follow custom, inheritance and long-established practice. Free market or capitalist — decisions made by private individuals and firms through the price mechanism, with minimal state involvement. Command or planned — decisions made centrally by the state, which owns and directs the means of production. Mixed — both private enterprise and state direction operate together. Liberia operates a mixed economy, with substantial private and subsistence sectors alongside government provision and regulation. Award 3 marks per system and 3 marks for the correct identification of Liberia with brief justification.",
              marks: 15,
            },
            {
              type: "ESSAY",
              prompt:
                "'Scarcity is the central fact of economic life.' Discuss this statement, explaining the nature of the economic problem, the classification of goods, and the three basic questions every society must answer. Illustrate your answer with examples from the Liberian economy.",
              answerKey:
                "Award marks as follows: definition of economics and a developed account of scarcity as the relationship between unlimited wants and limited resources having alternative uses, 8 marks; the distinction between wants and needs, and between free and economic goods, with the point that scarcity is what makes a good economic, 7 marks; classification of goods into consumer, capital, durable, non-durable, public and private, with correct examples, 8 marks; the three basic questions — what, how, and for whom to produce — explained as unavoidable for every society regardless of system, 9 marks; at least three developed Liberian examples, such as the allocation of land between rice and rubber, choices between labour-intensive and mechanised farming, or the distribution of iron ore revenue, 8 marks; a conclusion that returns to the statement with a reasoned judgement, 4 marks; organisation and use of economic terminology, 4 marks. A learner who defines terms without addressing why scarcity is central should not exceed 18.",
              marks: 45,
            },
          ],
        },
        {
          slug: "scarcity-and-choice",
          title: "Scarcity, Choice and Opportunity Cost",
          objective:
            "By the end of the lesson, learners should be able to explain the relationship between scarcity, choice and opportunity cost, calculate opportunity cost in given situations, and interpret a production possibility curve.",
          estimatedMinutes: 80,
          notes: `## The chain of reasoning

The logic of the topic runs in one direction and must be learned in order:

**Scarcity → Choice → Opportunity Cost**

- Because resources are **scarce**, we cannot have everything.
- Because we cannot have everything, we must **choose**.
- Because choosing one thing means forgoing another, every choice has an **opportunity cost**.

Scarcity is the cause; opportunity cost is the consequence.

## Opportunity cost

**Opportunity cost is the value of the next best alternative forgone when a choice is made.**

Three points that examiners test:

1. It is the **next best** alternative, not the sum of all alternatives given up. If a learner could have studied medicine, law or teaching and chooses medicine, the opportunity cost is whichever of law or teaching she valued more highly — not both.
2. It need not be measured in money. Time is frequently the scarcer resource.
3. It applies to **everyone**: individuals, firms and governments alike.

## Examples

- A student who spends Saturday at football has an opportunity cost of the studying not done.
- A government that builds a hospital with a fixed budget forgoes the school it might have built.
- A farmer who plants rice on a plot forgoes the cassava that plot could have grown.

## Sunk costs are not opportunity costs

Money already spent and unrecoverable is irrelevant to the present decision. If a trader has already paid non-refundable rent on a stall, that payment should not affect whether she trades today — only future costs and benefits matter. Learners who include sunk costs in opportunity cost reasoning make the classic error.

## The production possibility curve

A **production possibility curve (PPC)**, or production possibility frontier, shows the maximum combinations of two goods an economy can produce when all resources are **fully and efficiently employed**, given existing technology.

**Reading the diagram:**

- **Points on the curve** — efficient production; all resources fully employed.
- **Points inside the curve** — inefficient; resources are unemployed or underused.
- **Points outside the curve** — unattainable with present resources and technology.

**The shape.** The curve is normally drawn **concave to the origin** (bowed outwards). This reflects the **law of increasing opportunity cost**: as more of one good is produced, increasing amounts of the other must be given up, because resources are not equally suited to both uses. The land best for rice is not the land best for rubber.

A straight-line PPC would imply constant opportunity cost, which occurs only where resources are perfectly substitutable between uses.

**Movements along the curve** represent a reallocation of resources between the two goods, and each such movement has an opportunity cost.

**Outward shifts of the whole curve** represent **economic growth**, caused by:

- An increase in the quantity or quality of resources
- Improvement in technology
- Better education and training of the labour force
- Discovery of new natural resources

**Inward shifts** result from war, natural disaster, disease epidemics or the depletion of resources.

## Choice by governments

Governments face the same constraint. A national budget is finite, so expenditure on defence is expenditure not available for education or health. Recognising this converts political argument into economic reasoning: the question is never simply whether something is desirable, but what is being given up to obtain it.`,
          workedExample: `**Question:** A county has resources that can produce either rice or rubber. The production possibilities are:

| Combination | Rice (tonnes) | Rubber (tonnes) |
| --- | --- | --- |
| A | 100 | 0 |
| B | 90 | 20 |
| C | 70 | 40 |
| D | 40 | 60 |
| E | 0 | 80 |

(a) Calculate the opportunity cost of moving from A to B, from B to C, and from D to E.
(b) What do these figures show about opportunity cost, and why does this occur?
(c) What would a point producing 50 tonnes of rice and 30 tonnes of rubber indicate?
(d) State two changes that would allow production of 110 tonnes of rice and 20 tonnes of rubber.

**Solution**

**(a) Calculating opportunity cost**

Opportunity cost is what is given up. Here we gain rubber and lose rice, so we measure the rice sacrificed.

*A to B:* rubber rises from 0 to 20, a gain of 20 tonnes. Rice falls from 100 to 90, a loss of 10 tonnes.

Opportunity cost = **10 tonnes of rice for 20 tonnes of rubber**, that is **0.5 tonnes of rice per tonne of rubber**.

*B to C:* rubber rises from 20 to 40, a gain of 20. Rice falls from 90 to 70, a loss of 20.

Opportunity cost = **20 tonnes of rice for 20 tonnes of rubber**, that is **1 tonne of rice per tonne of rubber**.

*D to E:* rubber rises from 60 to 80, a gain of 20. Rice falls from 40 to 0, a loss of 40.

Opportunity cost = **40 tonnes of rice for 20 tonnes of rubber**, that is **2 tonnes of rice per tonne of rubber**.

**(b) What the figures show**

The opportunity cost per tonne of rubber rises steadily: 0.5, then 1, then 2 tonnes of rice. This is the **law of increasing opportunity cost**.

*Why it occurs:* resources are **not equally suited to both uses**. The first land switched into rubber is the land least suited to rice and best suited to rubber, so little rice is lost. As expansion continues, land that is genuinely good for rice must be converted, and the sacrifice grows.

This is precisely why the production possibility curve is drawn **concave to the origin** rather than as a straight line.

**(c) The point 50 rice, 30 rubber**

Compare with combination D, which yields 40 rice and 60 rubber, and with C, which yields 70 rice and 40 rubber. The point (50, 30) lies **inside** the curve — for 50 tonnes of rice the county could obtain more than 30 tonnes of rubber.

It therefore indicates **inefficiency**: resources are unemployed or underused. Possible causes include idle land, unemployed labour, poor management, or capital left standing unused.

Importantly, moving from an inside point to the curve involves **no opportunity cost** — more of both goods can be produced by employing idle resources. Opportunity cost arises only when the economy is already on the frontier.

**(d) Reaching 110 rice and 20 rubber**

This point lies **outside** the present curve and is unattainable with existing resources and technology. It requires the curve to shift **outward**, that is, economic growth. Two changes that would achieve this:

1. **Improved technology** — better rice varieties, fertiliser, or mechanised threshing raising yield per hectare.
2. **An increase in resources** — bringing new land into cultivation, expanding the labour force, or investing in irrigation and capital equipment.

Accept also improved education and training of the workforce, since a more skilled labour force raises output from the same physical resources.

**Answer:** (a) 0.5, 1 and 2 tonnes of rice per tonne of rubber (b) increasing opportunity cost, because resources are not equally suited to both uses (c) inefficiency, with resources unemployed or underused (d) improved technology or an increase in the quantity or quality of resources.`,
          teachingTip:
            "Make opportunity cost personal before it becomes numerical. Ask the class what each of them gave up to be in this classroom this morning — some will say farm work, some trading, some sleep — and establish that the cost of schooling is not only the fees but the next best use of the time. That framing stays with learners. The error to attack directly is adding up every alternative forgone: put three options on the board, have a learner choose one, then ask the class for the opportunity cost and correct the ones who sum the other two. Say the words 'next best' every single time you use the term. For the PPC, draw it from data the class generates rather than presenting a finished diagram — give them the table and have them plot it, and the concave shape appears as their own finding. Then ask why the curve bends, and let them reason to the unequal suitability of resources rather than being told.",
          quiz: [
            {
              prompt: "Opportunity cost is best defined as",
              options: [
                "the total of all alternatives given up",
                "the value of the next best alternative forgone",
                "the money paid for a good",
                "the cost of production",
              ],
              correctIndex: 1,
              explanation:
                "Only the next best alternative counts, not the sum of everything not chosen.",
            },
            {
              prompt: "The correct logical order is",
              options: [
                "Choice, scarcity, opportunity cost",
                "Scarcity, choice, opportunity cost",
                "Opportunity cost, scarcity, choice",
                "Scarcity, opportunity cost, choice",
              ],
              correctIndex: 1,
              explanation:
                "Scarcity compels choice, and every choice carries an opportunity cost.",
            },
            {
              prompt: "A point inside the production possibility curve indicates",
              options: [
                "Efficient production",
                "Unattainable production",
                "Unemployed or underused resources",
                "Economic growth",
              ],
              correctIndex: 2,
              explanation:
                "The economy could produce more of both goods by employing idle resources.",
            },
            {
              prompt: "A point outside the production possibility curve is",
              options: [
                "Efficient",
                "Inefficient",
                "Unattainable with present resources and technology",
                "Always preferred",
              ],
              correctIndex: 2,
              explanation:
                "Reaching it requires an outward shift of the curve, that is economic growth.",
            },
            {
              prompt: "The production possibility curve is drawn concave to the origin because",
              options: [
                "resources are perfectly substitutable",
                "opportunity cost increases as more of one good is produced",
                "prices always rise",
                "the economy is inefficient",
              ],
              correctIndex: 1,
              explanation:
                "Resources are not equally suited to both uses, so each extra unit costs more.",
            },
            {
              prompt: "Which would shift the production possibility curve outward?",
              options: [
                "A war destroying factories",
                "An improvement in technology",
                "An increase in unemployment",
                "A fall in demand",
              ],
              correctIndex: 1,
              explanation:
                "Better technology raises the maximum output obtainable from given resources.",
            },
            {
              prompt:
                "A student chooses to study rather than trade in the market, earning 500 dollars, or farm, which she values at 300 dollars. Her opportunity cost is",
              options: ["300 dollars", "500 dollars", "800 dollars", "Zero"],
              correctIndex: 1,
              explanation:
                "The next best alternative is trading at 500 dollars; the two are not added together.",
            },
            {
              prompt: "Moving from a point inside the curve to a point on the curve involves",
              options: [
                "A high opportunity cost",
                "No opportunity cost, since idle resources are employed",
                "Economic decline",
                "An outward shift of the curve",
              ],
              correctIndex: 1,
              explanation:
                "More of both goods can be produced, so nothing is sacrificed.",
            },
            {
              prompt: "A cost already incurred and unrecoverable is called a",
              options: [
                "Marginal cost",
                "Sunk cost",
                "Opportunity cost",
                "Fixed cost",
              ],
              correctIndex: 1,
              explanation:
                "Sunk costs are irrelevant to present decisions and should not enter opportunity cost reasoning.",
            },
            {
              prompt: "Governments face opportunity cost because",
              options: [
                "they can print money",
                "national budgets are finite, so spending on one thing forgoes another",
                "they collect taxes",
                "they are elected",
              ],
              correctIndex: 1,
              explanation:
                "Expenditure on defence is expenditure not available for education or health.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain the relationship between scarcity, choice and opportunity cost, using an example from a Liberian household.",
              answerKey:
                "Because resources are scarce relative to wants, not everything desired can be obtained; this compels choice; and because choosing one option means forgoing another, every choice carries an opportunity cost, which is the value of the next best alternative given up. Example: a household with limited income choosing between paying school fees and repairing the roof — choosing fees means the opportunity cost is the roof repair, assuming that was the next best use. Award 3 marks for each link in the chain and 3 marks for an apt, correctly reasoned example.",
              marks: 12,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "A country can produce 200 tonnes of cassava and no rubber, or 150 tonnes of cassava and 30 tonnes of rubber. Calculate the opportunity cost of producing the 30 tonnes of rubber, per tonne.",
              answerKey:
                "Cassava falls from 200 to 150, a sacrifice of 50 tonnes, to gain 30 tonnes of rubber. Opportunity cost = 50 tonnes of cassava for 30 tonnes of rubber, or 50/30 = 1.67 tonnes of cassava per tonne of rubber. Award 3 marks for identifying the cassava sacrificed, 3 for the total opportunity cost, 2 for the correct per-tonne figure.",
              marks: 8,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "An economy currently has 20 per cent unemployment. Which statement is correct?",
              options: [
                "It is producing on its production possibility curve",
                "It is producing inside its curve, and could produce more of both goods at no opportunity cost",
                "It is producing outside its curve",
                "Its curve has shifted outward",
              ],
              correctIndex: 1,
              answerKey:
                "Unemployed resources place the economy inside the frontier. Employing them raises output of both goods without sacrificing either, so the move carries no opportunity cost. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain what a production possibility curve shows, and state three causes of an outward shift and two causes of an inward shift.",
              answerKey:
                "The curve shows the maximum combinations of two goods an economy can produce when all resources are fully and efficiently employed with existing technology. Outward shifts: an increase in the quantity of resources; improvement in the quality of resources through education and training; technological advance; discovery of new natural resources; investment in capital. Inward shifts: war or civil conflict destroying resources; natural disaster; epidemic disease reducing the labour force; depletion or exhaustion of natural resources. Award 4 marks for the definition, 2 marks per outward cause and 2 marks per inward cause.",
              marks: 14,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain the law of increasing opportunity cost and account for the shape of the production possibility curve. Discuss how the concept of opportunity cost should inform government decisions about the allocation of a national budget, using Liberian examples.",
              answerKey:
                "Award marks as follows: definition of opportunity cost with emphasis on the next best alternative, 5 marks; statement and explanation of the law of increasing opportunity cost, 7 marks; explanation of the concave shape as following from the unequal suitability of resources to different uses, with the contrast to a straight-line curve implying perfect substitutability, 9 marks; correct interpretation of points on, inside and outside the curve, including the point that moving from inside to the frontier carries no opportunity cost, 8 marks; application to government budgeting, developing the argument that every allocation forgoes an alternative and that political questions of desirability must be reframed as questions of what is given up, 9 marks; at least two developed Liberian examples such as choices between road construction and health facilities, or between subsidising rice production and investing in education, 8 marks; a reasoned conclusion, 4 marks. A learner who explains the curve but does not apply opportunity cost to government decisions has answered half the question and should not exceed 25.",
              marks: 50,
            },
          ],
        },
        {
          slug: "demand",
          title: "Demand",
          objective:
            "By the end of the lesson, learners should be able to state the law of demand, construct a demand schedule and curve, distinguish a movement along the curve from a shift of it, and explain the determinants of demand.",
          estimatedMinutes: 80,
          notes: `## Definition

**Demand** is the quantity of a good or service that consumers are **willing and able** to buy at a given price over a given period of time.

Both conditions are essential. Wanting a car without the means to pay is not demand; it is desire. Demand backed by ability to pay is called **effective demand**, and it is the only kind economics counts.

## The law of demand

**Other things being equal, the higher the price of a good, the lower the quantity demanded; and the lower the price, the higher the quantity demanded.**

Price and quantity demanded move in **opposite directions**. The demand curve therefore slopes **downwards from left to right**.

The phrase *other things being equal* (ceteris paribus) matters: the law holds only while the other determinants of demand are held constant.

## Why the demand curve slopes downward

1. **The income effect.** A fall in price raises the real purchasing power of the consumer's income, so more can be bought.
2. **The substitution effect.** When a good becomes cheaper relative to others, consumers switch towards it from substitutes.
3. **The law of diminishing marginal utility.** Each additional unit consumed gives less satisfaction than the last, so consumers will buy more only at a lower price.

## Demand schedule and curve

A **demand schedule** is a table of prices and the corresponding quantities demanded. Plotting it gives the **demand curve**, with price on the vertical axis and quantity on the horizontal axis.

## The critical distinction

This is the point on which most marks are lost in the topic.

**Movement along the demand curve** — caused **only** by a change in the **price of the good itself**.

- A fall in price causes an **extension** of demand (a movement down the curve).
- A rise in price causes a **contraction** of demand (a movement up the curve).

**Shift of the demand curve** — caused by a change in any determinant **other than** the price of the good.

- A rightward shift is an **increase** in demand: more is demanded at every price.
- A leftward shift is a **decrease** in demand: less is demanded at every price.

Say it precisely: *price changes move you along the curve; everything else moves the curve.*

## Determinants of demand — what shifts the curve

1. **Income.**
   - For a **normal good**, a rise in income increases demand. Most goods.
   - For an **inferior good**, a rise in income *decreases* demand, as consumers switch to better alternatives. Cassava flour might be inferior where imported rice is preferred.

2. **Price of related goods.**
   - **Substitutes** — goods used in place of one another. A rise in the price of imported rice raises demand for locally grown rice.
   - **Complements** — goods used together. A rise in the price of petrol lowers demand for motorbikes.

3. **Tastes and preferences.** Fashion, advertising, health information.

4. **Population.** More consumers, more demand.

5. **Expectations of future prices.** If prices are expected to rise, present demand increases.

6. **Distribution of income.** A more equal distribution raises demand for goods bought by lower-income households.

7. **Seasonal and climatic factors.** Demand for umbrellas rises in the rainy season.

## Exceptions to the law of demand

Cases where more is demanded at a higher price:

- **Giffen goods** — very inferior staples where the income effect outweighs the substitution effect.
- **Veblen or ostentatious goods** — luxury goods bought for prestige, where a high price is part of the attraction.
- **Expectation of further price rises** — consumers buy more now, fearing worse later.
- **Goods where price is taken as a signal of quality**, as with some medicines.`,
          workedExample: `**Question:** The demand schedule for a bag of local rice in a market is:

| Price (LRD) | Quantity demanded (bags per week) |
| --- | --- |
| 2,500 | 100 |
| 2,000 | 150 |
| 1,500 | 220 |
| 1,000 | 320 |

(a) Describe the relationship shown and name the law it illustrates.
(b) The price falls from 2,000 to 1,500. State precisely what has happened, using correct terminology.
(c) A large factory opens nearby, raising local incomes, while rice prices stay at 2,000. Explain the effect and how it appears on the diagram.
(d) The price of imported rice, a substitute, falls sharply. Explain the effect on demand for local rice.
(e) Distinguish carefully between what happened in (b) and what happened in (c).

**Solution**

**(a) The relationship**

As price falls, quantity demanded rises consistently: 100, 150, 220, 320 bags. Price and quantity demanded move in **opposite directions**.

This illustrates the **law of demand**, and it is why the demand curve slopes **downwards from left to right**.

**(b) Price falls from 2,000 to 1,500**

Quantity demanded rises from 150 to 220 bags.

The precise terminology matters here. Because the change was caused by a change in the **price of the good itself**, this is a **movement along the demand curve** — specifically an **extension of demand**, moving down the curve.

The demand curve itself has **not moved**. Demand has not increased; the *quantity demanded* has increased.

**(c) Incomes rise, price unchanged at 2,000**

Rice is a **normal good** for most households, so higher income raises demand for it.

The cause is a change in **income**, not in the price of rice. Therefore this is a **shift of the whole demand curve to the right** — an **increase in demand**.

The meaning of a rightward shift: **more is demanded at every price**. At 2,000 LRD, more than 150 bags will now be bought; at 1,500 LRD, more than 220; and so on for every price.

*A qualification worth noting:* if local rice were regarded as an **inferior good** in this market, with households switching to imported rice as incomes rose, the curve would shift **left** instead. The direction depends on how the good is classified.

**(d) The price of imported rice falls**

Imported rice is a **substitute** for local rice. When a substitute becomes cheaper, consumers switch towards it.

Demand for local rice therefore **falls at every price** — a **leftward shift** of the demand curve, that is a **decrease in demand**.

Note carefully: the price of *local* rice has not changed. The cause is the price of a *related* good, so the curve shifts rather than moving along itself.

**(e) The essential distinction**

| | Case (b) | Case (c) |
| --- | --- | --- |
| Cause | Price of the good itself | Income (a non-price determinant) |
| Effect on diagram | Movement **along** the curve | **Shift** of the whole curve |
| Correct term | Extension of demand | Increase in demand |
| Curve position | Unchanged | Moves rightward |

**The rule to carry away:** a change in the price of the good moves you **along** the curve; a change in anything else moves **the curve itself**. Using "increase in demand" for a price-induced change is the single most common error in this topic and is penalised in examinations.

**Answer:** (a) inverse relationship, the law of demand (b) extension of demand, a movement along the curve (c) increase in demand, a rightward shift (d) decrease in demand, a leftward shift (e) price changes move along the curve, all other determinants shift it.`,
          teachingTip:
            "The extension-versus-increase distinction is worth more marks than anything else in this topic, and learners will not acquire it by being told once. Insist on the exact words from the first lesson and correct every loose use immediately: if a learner says demand increased when the price fell, stop and ask what caused it. Drill it as a two-second reflex — 'what changed?' If the answer is the good's own price, it is a movement; anything else, it is a shift. A quick drill works well: call out causes at speed — 'price rises', 'incomes fall', 'a substitute gets cheaper', 'population grows' — and have the class respond in chorus with 'move' or 'shift'. Two minutes of this at the start of several lessons secures the distinction better than an hour of explanation. Build the demand curve from real prices in the local market, gathered by learners as homework; their own data makes the downward slope a finding rather than an assertion.",
          quiz: [
            {
              prompt: "Effective demand requires that a consumer be",
              options: [
                "willing to buy only",
                "able to buy only",
                "both willing and able to buy",
                "aware of the good",
              ],
              correctIndex: 2,
              explanation:
                "Desire without purchasing power is not demand in the economic sense.",
            },
            {
              prompt: "The law of demand states that, other things being equal,",
              options: [
                "price and quantity demanded move in the same direction",
                "price and quantity demanded move in opposite directions",
                "demand is unrelated to price",
                "demand always rises over time",
              ],
              correctIndex: 1,
              explanation:
                "The inverse relationship gives the demand curve its downward slope.",
            },
            {
              prompt: "A fall in the price of a good causes",
              options: [
                "An increase in demand",
                "A decrease in demand",
                "An extension of demand",
                "A leftward shift of the curve",
              ],
              correctIndex: 2,
              explanation:
                "A change in the good's own price causes movement along the curve, not a shift.",
            },
            {
              prompt: "A rise in consumer incomes causes the demand curve for a normal good to",
              options: [
                "Shift right",
                "Shift left",
                "Move up along itself",
                "Stay unchanged",
              ],
              correctIndex: 0,
              explanation:
                "More is demanded at every price, which is an increase in demand.",
            },
            {
              prompt: "For an inferior good, a rise in income causes demand to",
              options: ["Rise", "Fall", "Stay the same", "Become zero"],
              correctIndex: 1,
              explanation:
                "Consumers switch to preferred alternatives as their incomes rise.",
            },
            {
              prompt: "Petrol and motorbikes are best described as",
              options: ["Substitutes", "Complements", "Inferior goods", "Free goods"],
              correctIndex: 1,
              explanation:
                "They are consumed together, so a rise in the price of one reduces demand for the other.",
            },
            {
              prompt: "A rise in the price of imported rice will",
              options: [
                "decrease demand for local rice",
                "increase demand for local rice",
                "have no effect on local rice",
                "shift the local rice curve left",
              ],
              correctIndex: 1,
              explanation:
                "The two are substitutes, so consumers switch towards the relatively cheaper local rice.",
            },
            {
              prompt: "Which causes a movement along the demand curve rather than a shift?",
              options: [
                "A change in population",
                "A change in tastes",
                "A change in the price of the good itself",
                "A change in income",
              ],
              correctIndex: 2,
              explanation:
                "Only the good's own price moves you along the curve; all else shifts it.",
            },
            {
              prompt: "The substitution effect helps explain the downward slope of demand because",
              options: [
                "consumers earn more when prices fall",
                "a cheaper good attracts consumers away from alternatives",
                "producers supply more",
                "governments reduce taxes",
              ],
              correctIndex: 1,
              explanation:
                "A fall in relative price makes the good more attractive than its substitutes.",
            },
            {
              prompt: "A Veblen good is one for which",
              options: [
                "demand falls as price falls, because prestige is part of the attraction",
                "demand always follows the law of demand",
                "there are no substitutes",
                "supply is fixed",
              ],
              correctIndex: 0,
              explanation:
                "Ostentatious luxury goods are exceptions to the law of demand.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define demand and state the law of demand. Explain two reasons why the demand curve slopes downwards.",
              answerKey:
                "Demand is the quantity of a good consumers are both willing and able to buy at a given price over a given period; willingness without ability is not effective demand. The law: other things being equal, a rise in price reduces quantity demanded and a fall in price raises it. Reasons: the income effect, whereby a lower price raises real purchasing power so more can be bought; the substitution effect, whereby a good that becomes relatively cheaper attracts consumers from substitutes; the law of diminishing marginal utility, whereby each additional unit yields less satisfaction so consumers buy more only at lower prices. Award 3 marks for the definition, 3 for the law, 3 for each of two reasons.",
              marks: 12,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Distinguish clearly between a movement along a demand curve and a shift of a demand curve, giving the correct terminology for each and one cause of each.",
              answerKey:
                "A movement along the curve is caused only by a change in the price of the good itself; a fall in price gives an extension of demand and a rise gives a contraction. A shift of the curve is caused by a change in any determinant other than the good's own price, such as income, the price of substitutes or complements, tastes, population or expectations; a rightward shift is an increase in demand and a leftward shift a decrease. Award 4 marks for each distinction with correct terminology, 2 marks for each valid cause.",
              marks: 12,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "The price of palm oil rises and consumers buy less of it. This is correctly described as",
              options: [
                "A decrease in demand",
                "A contraction of demand",
                "A leftward shift of the demand curve",
                "An increase in supply",
              ],
              correctIndex: 1,
              answerKey:
                "The cause is a change in the good's own price, so this is a movement up the curve, correctly termed a contraction of demand. Calling it a decrease in demand wrongly implies a shift. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State five determinants of demand other than price, and explain in each case the direction in which the demand curve would shift.",
              answerKey:
                "Income — for a normal good a rise shifts demand right, for an inferior good left. Price of substitutes — a rise in a substitute's price shifts demand right. Price of complements — a rise in a complement's price shifts demand left. Tastes and preferences — a favourable change shifts demand right. Population — an increase shifts demand right. Expectations of future price rises — shift present demand right. Distribution of income — a more equal distribution shifts demand right for goods bought by lower-income households. Award 1 mark per determinant and 1 mark per correct direction with explanation.",
              marks: 10,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain the law of demand and the reasons behind it. Discuss the determinants that shift the demand curve, and examine the exceptions to the law of demand, using examples relevant to Liberia.",
              answerKey:
                "Award marks as follows: definition of demand as effective demand and accurate statement of the law with the ceteris paribus condition, 6 marks; explanation of the downward slope via the income effect, substitution effect and diminishing marginal utility, 9 marks; construction and interpretation of a demand schedule and curve, 5 marks; the movement-versus-shift distinction stated precisely with correct terminology, 8 marks; at least five determinants of demand with the direction of shift explained in each case, 10 marks; exceptions to the law — Giffen goods, Veblen or ostentatious goods, expectations of further price rises, price taken as a signal of quality — with explanation of why each behaves anomalously, 8 marks; at least three Liberian examples, such as imported versus local rice as substitutes, or the effect of seasonal income on demand, 6 marks; organisation and terminology, 3 marks. A learner who confuses extension with increase in demand should lose the full 8 marks allocated to that distinction.",
              marks: 55,
            },
          ],
        },
        {
          slug: "supply-and-equilibrium",
          title: "Supply and Market Equilibrium",
          objective:
            "By the end of the lesson, learners should be able to state the law of supply, explain the determinants of supply, and determine market equilibrium price and quantity, including the effects of shifts in demand or supply.",
          estimatedMinutes: 80,
          notes: `## Supply

**Supply** is the quantity of a good or service that producers are **willing and able** to offer for sale at a given price over a given period of time.

## The law of supply

**Other things being equal, the higher the price of a good, the greater the quantity supplied; and the lower the price, the smaller the quantity supplied.**

Price and quantity supplied move in the **same direction**, so the supply curve slopes **upwards from left to right**.

**Why:** a higher price raises the profit obtainable, so existing producers expand output and new producers are drawn into the market. Producing extra units usually costs more per unit, so a higher price is needed to make the extra output worthwhile.

## Movement versus shift, again

The same distinction as for demand, and it is examined just as often.

**Movement along the supply curve** — caused only by a change in the **price of the good itself**.

- A rise in price causes an **extension** of supply.
- A fall in price causes a **contraction** of supply.

**Shift of the supply curve** — caused by any other determinant.

- A rightward shift is an **increase** in supply.
- A leftward shift is a **decrease** in supply.

## Determinants of supply — what shifts the curve

1. **Cost of production.** Higher input costs — wages, fuel, fertiliser, raw materials — reduce supply, shifting the curve left.
2. **Technology.** Improved methods lower unit costs and increase supply.
3. **Number of producers.** More firms in the market means greater supply.
4. **Government policy.**
   - **Taxes** on production raise costs and decrease supply.
   - **Subsidies** lower costs and increase supply.
5. **Prices of other goods.** If rubber becomes more profitable, land and labour shift to rubber and the supply of rice falls.
6. **Natural and climatic factors.** Especially significant in agriculture — drought, flood, pests.
7. **Expectations of future prices.** If higher prices are expected, producers may withhold stock now.
8. **Transport and infrastructure.** Poor roads raise the effective cost of bringing goods to market and reduce supply.

## Market equilibrium

**Equilibrium** occurs where the quantity demanded **equals** the quantity supplied. Graphically, it is the point where the demand and supply curves intersect.

- **Equilibrium price** — the price at which the market clears
- **Equilibrium quantity** — the quantity bought and sold at that price

At equilibrium there is neither shortage nor surplus, and there is no tendency for price to change.

## Disequilibrium

**Surplus (excess supply)** — occurs when price is **above** equilibrium. Quantity supplied exceeds quantity demanded. Unsold stock accumulates, and producers cut prices. Price **falls** towards equilibrium.

**Shortage (excess demand)** — occurs when price is **below** equilibrium. Quantity demanded exceeds quantity supplied. Buyers compete for limited stock, and price is bid up. Price **rises** towards equilibrium.

The market therefore corrects itself through the **price mechanism**, provided prices are free to move.

## Effects of shifts on equilibrium

Learn these four outcomes; they are examined constantly.

| Change | Effect on price | Effect on quantity |
| --- | --- | --- |
| Demand increases (shifts right) | Rises | Rises |
| Demand decreases (shifts left) | Falls | Falls |
| Supply increases (shifts right) | Falls | Rises |
| Supply decreases (shifts left) | Rises | Falls |

Note the pattern: a demand shift moves price and quantity in the **same** direction; a supply shift moves them in **opposite** directions.

## Price controls

**Price ceiling (maximum price)** — a legal maximum, set **below** equilibrium to protect consumers. Consequence: a persistent **shortage**, queues, rationing and black markets.

**Price floor (minimum price)** — a legal minimum, set **above** equilibrium to protect producers. Consequence: a persistent **surplus**, which the government may have to buy up and store.

A price control set on the wrong side of equilibrium has no effect at all: a ceiling above the equilibrium price never binds.`,
          workedExample: `**Question:** The market for a bag of local rice has the following schedules:

| Price (LRD) | Quantity demanded | Quantity supplied |
| --- | --- | --- |
| 3,000 | 100 | 400 |
| 2,500 | 150 | 300 |
| 2,000 | 200 | 200 |
| 1,500 | 280 | 120 |

(a) Determine the equilibrium price and quantity.
(b) What happens at a price of 3,000 LRD, and how does the market correct?
(c) The government imposes a maximum price of 1,500 LRD to help consumers. Analyse the consequences.
(d) A new milling technology lowers production costs. Explain the effect on equilibrium.

**Solution**

**(a) Equilibrium**

Equilibrium is where quantity demanded equals quantity supplied.

Reading the table, at **2,000 LRD** both are **200 bags**.

**Equilibrium price = 2,000 LRD; equilibrium quantity = 200 bags.**

At this price the market clears: every seller who wishes to sell at that price finds a buyer, and there is no tendency for price to change.

**(b) At a price of 3,000 LRD**

Quantity supplied = 400; quantity demanded = 100.

**Surplus (excess supply) = 400 - 100 = 300 bags.**

*How the market corrects:* unsold rice accumulates. Sellers holding stock that is deteriorating and occupying storage begin to cut prices to clear it. As price falls:

- Quantity demanded **extends** (a movement down the demand curve)
- Quantity supplied **contracts** (a movement up the supply curve)

The two move towards each other until price reaches **2,000 LRD**, where the surplus is eliminated. Note that both changes are **movements along** the curves, not shifts — nothing has changed except the price.

**(c) A maximum price of 1,500 LRD**

First check whether the control **binds**. It is set **below** the equilibrium of 2,000, so it does bind. (A ceiling set above 2,000 would have no effect at all.)

At 1,500 LRD:

- Quantity demanded = 280
- Quantity supplied = 120

**Shortage (excess demand) = 280 - 120 = 160 bags.**

*Consequences:*

1. **Persistent shortage.** Price cannot legally rise to clear the market, so the shortage does not correct itself.
2. **Queues and rationing.** With 280 bags wanted and only 120 available, some means other than price must allocate the rice — queuing, favouritism, or formal rationing.
3. **Black market.** Since some consumers value rice above 1,500 LRD, there is an incentive to trade illegally at higher prices.
4. **Reduced supply over time.** At 1,500 LRD some producers cannot cover costs and leave the market, worsening the shortage.
5. **Quality may fall**, since sellers have no need to compete for buyers.

*The policy assessment:* the measure helps those consumers who actually obtain rice at 1,500 LRD, but it harms those who cannot obtain any. The intention is good; the mechanism creates the shortage it was meant to relieve.

**(d) New milling technology lowers costs**

Cost of production is a **determinant of supply**, not the price of the good itself. Therefore the **supply curve shifts right** — an **increase in supply**. Producers are willing to offer more at every price.

Demand is **unchanged**, so the demand curve does not move.

*The new equilibrium:*

- **Price falls** below 2,000 LRD
- **Quantity rises** above 200 bags

This follows the general rule: a supply shift moves **price and quantity in opposite directions**.

*Who benefits:* consumers gain from a lower price and greater availability. Producers sell more units at a lower price, and whether they gain overall depends on how far costs fell relative to price.

**Answer:** (a) 2,000 LRD and 200 bags (b) a surplus of 300 bags, corrected by price falling to 2,000 (c) a binding ceiling causing a shortage of 160 bags, with queues, black markets and reduced supply (d) supply shifts right, price falls and quantity rises.`,
          teachingTip:
            "Run a live market before drawing a single curve. Give half the class cards marked with the highest price they will pay and the other half cards marked with the lowest price they will accept, then let them trade freely for five minutes and write the agreed prices on the board. The prices converge, and the class has discovered equilibrium and the price mechanism without being told either. Only then introduce the diagram, and it will look like a description of something they did rather than an abstraction. Price controls are the best policy discussion available at this level and connect directly to Liberian experience with rice prices, so give them proper time. Ask learners to predict the effects of a maximum price before you explain, and let them work out that a shortage follows; the discovery that a well-intentioned policy can harm the people it was meant to help is genuinely valuable and stays with them. Drill the four shift outcomes as a table until automatic — demand shifts move price and quantity together, supply shifts move them apart.",
          quiz: [
            {
              prompt: "The law of supply states that price and quantity supplied",
              options: [
                "move in opposite directions",
                "move in the same direction",
                "are unrelated",
                "are always equal",
              ],
              correctIndex: 1,
              explanation:
                "Higher prices raise profitability, so producers offer more; the curve slopes upward.",
            },
            {
              prompt: "Market equilibrium occurs where",
              options: [
                "supply exceeds demand",
                "demand exceeds supply",
                "quantity demanded equals quantity supplied",
                "price is at its highest",
              ],
              correctIndex: 2,
              explanation:
                "At the intersection of the curves the market clears with no shortage or surplus.",
            },
            {
              prompt: "A price set above equilibrium results in",
              options: ["A shortage", "A surplus", "Equilibrium", "No effect"],
              correctIndex: 1,
              explanation:
                "Quantity supplied exceeds quantity demanded, and unsold stock accumulates.",
            },
            {
              prompt: "An increase in demand, supply unchanged, causes",
              options: [
                "Price and quantity both to rise",
                "Price to rise and quantity to fall",
                "Price to fall and quantity to rise",
                "Price and quantity both to fall",
              ],
              correctIndex: 0,
              explanation:
                "A demand shift moves equilibrium price and quantity in the same direction.",
            },
            {
              prompt: "An increase in supply, demand unchanged, causes",
              options: [
                "Price and quantity both to rise",
                "Price to fall and quantity to rise",
                "Price to rise and quantity to fall",
                "No change",
              ],
              correctIndex: 1,
              explanation:
                "A supply shift moves equilibrium price and quantity in opposite directions.",
            },
            {
              prompt: "A government subsidy to producers will",
              options: [
                "Shift supply left",
                "Shift supply right",
                "Shift demand left",
                "Have no effect",
              ],
              correctIndex: 1,
              explanation:
                "Subsidies lower production costs, increasing the quantity supplied at every price.",
            },
            {
              prompt: "A binding price ceiling causes",
              options: ["A surplus", "A shortage", "Equilibrium", "Higher supply"],
              correctIndex: 1,
              explanation:
                "Set below equilibrium, it leaves quantity demanded exceeding quantity supplied.",
            },
            {
              prompt: "A rise in the price of fertiliser will",
              options: [
                "increase the supply of rice",
                "decrease the supply of rice",
                "increase demand for rice",
                "have no effect on rice",
              ],
              correctIndex: 1,
              explanation:
                "Higher input costs shift the supply curve left, reducing supply at every price.",
            },
            {
              prompt: "A rise in the price of a good itself causes",
              options: [
                "An increase in supply",
                "An extension of supply",
                "A rightward shift of supply",
                "A decrease in supply",
              ],
              correctIndex: 1,
              explanation:
                "A change in the good's own price causes movement along the supply curve.",
            },
            {
              prompt: "A price floor set below the equilibrium price will",
              options: [
                "cause a surplus",
                "cause a shortage",
                "have no effect, since it does not bind",
                "raise the equilibrium price",
              ],
              correctIndex: 2,
              explanation:
                "A minimum price below equilibrium never binds, because the market price already exceeds it.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define supply, state the law of supply, and explain why the supply curve slopes upwards.",
              answerKey:
                "Supply is the quantity of a good producers are willing and able to offer for sale at a given price over a given period. The law: other things being equal, a rise in price raises quantity supplied and a fall in price reduces it. The curve slopes upward because a higher price raises the profit obtainable, encouraging existing producers to expand output and attracting new producers into the market; and because producing additional units generally raises unit costs, so a higher price is required to make the extra output worthwhile. Award 3 marks for the definition, 3 for the law, 4 for the explanation.",
              marks: 10,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State five determinants of supply other than the price of the good, indicating in each case the direction of the shift.",
              answerKey:
                "Cost of production — a rise shifts supply left. Technology — improvement shifts supply right. Number of producers — an increase shifts supply right. Taxes on production — shift supply left; subsidies shift supply right. Prices of other goods a producer could make — a rise in an alternative's price shifts supply of this good left. Natural and climatic factors — favourable conditions shift supply right. Expectations of future price rises — may shift present supply left as producers withhold stock. Transport and infrastructure — improvement shifts supply right. Award 1 mark per determinant and 1 per correct direction.",
              marks: 10,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "At a price of 500 LRD, quantity demanded is 80 and quantity supplied is 140. This market has",
              options: [
                "a shortage of 60 units; price will rise",
                "a surplus of 60 units; price will fall",
                "equilibrium",
                "a surplus of 220 units; price will rise",
              ],
              correctIndex: 1,
              answerKey:
                "Quantity supplied exceeds quantity demanded by 60 units, which is a surplus. Unsold stock leads sellers to cut prices, so price falls towards equilibrium. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain the effect on equilibrium price and quantity of (a) an increase in demand, (b) a decrease in supply, and state the general rule connecting the two cases.",
              answerKey:
                "(a) An increase in demand shifts the demand curve right: equilibrium price rises and equilibrium quantity rises. (b) A decrease in supply shifts the supply curve left: equilibrium price rises and equilibrium quantity falls. General rule: a shift in demand moves equilibrium price and quantity in the same direction, whereas a shift in supply moves them in opposite directions. Award 3 marks per case and 4 marks for the correctly stated general rule.",
              marks: 10,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain how equilibrium price and quantity are determined in a free market and how the price mechanism eliminates shortages and surpluses. Discuss the consequences of a government imposing a maximum price on a staple food such as rice, and assess whether such a policy achieves its aim.",
              answerKey:
                "Award marks as follows: definitions of demand and supply and accurate account of equilibrium as the intersection where quantity demanded equals quantity supplied, 7 marks; explanation of surplus at prices above equilibrium and shortage at prices below, with the corrective process described as movements along both curves rather than shifts, 10 marks; correct account of a maximum price as a binding ceiling only when set below equilibrium, with the observation that a ceiling above equilibrium has no effect, 6 marks; consequences of a binding ceiling — persistent shortage, queues and non-price rationing, black markets, deterioration of quality, and reduced supply over time as marginal producers exit, 12 marks; assessment weighing the benefit to consumers who obtain the good at the controlled price against the harm to those who obtain none, with consideration of alternative policies such as targeted subsidies or income support, 10 marks; use of a diagram or numerical illustration, 5 marks; organisation and terminology, 5 marks. A learner who describes the policy without analysing the shortage it creates should not exceed 25.",
              marks: 55,
            },
          ],
        },
      ],
    },
  ],
};
