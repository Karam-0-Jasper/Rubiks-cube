import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 10,
// Semester One, Period III: The Factors of Production. CONTENTS:
// (1) Definition and types of production; (2) Factors of production (land,
// labour, capital, entrepreneurship and technology); (3) Production
// Possibility Curve/Frontier; (4) Concept of division of labour,
// specialization and law of diminishing returns. Each CONTENTS item is one
// topic below, sourced from OpenStax and LibreTexts.
export const economicsG10P3: PeriodContent = {
  grade: 10,
  number: 3,
  title: "The Factors of Production",
  summary:
    "Period III of the MoE Grade 10 Economics syllabus. Learners define production and its types, identify the factors of production (land, labour, capital, entrepreneurship and technology) and their rewards, derive the production possibility curve, and explain the division of labour, specialization and the law of diminishing returns.",
  topics: [
    // source: OpenStax — Principles of Economics 3e, 7.2 Production in the Short Run (definition of production, production function) (https://openstax.org/books/principles-economics-3e/pages/7-2-production-in-the-short-run) and LibreTexts Social Sci — Secondary Sector: primary/secondary/tertiary production (https://socialsci.libretexts.org/Courses/Coalinga_College/Cultural_Geography__(C-ID_GEOG_120)/11:_Geographies_of_Economies_and_Industries/11.03:_Secondary_Sector)
    {
      slug: "definition-and-types-of-production",
      title: "Definition and Types of Production",
      objective:
        "By the end of the topic, learners should be able to define production, explain that it transforms inputs into outputs, and distinguish the primary, secondary and tertiary types of production.",
      estimatedMinutes: 110,
      notes: `## What production is

**Production** — the process a firm uses to transform **inputs** (labour, capital, raw materials) into **outputs**: the goods or services it wishes to sell.
- Production is not just making physical goods; providing a **service** (teaching, transport, banking) is also production.
- Production is only complete when the good or service reaches the **final consumer** who needs it.

**Production function** — the relationship between inputs and outputs: how much output a firm can produce from different amounts of inputs.

## Types of production by sector

**Primary production** — takes and uses raw materials **directly from nature**. Activities: agriculture, fishing, forestry, mining.

**Secondary production** — **transforms raw materials into finished products** (manufacturing). It takes what the primary sector extracts (iron ore, crude oil, fresh fish) and makes useful products (iron pipes, petrol, fish sticks).

**Tertiary production** — provides **services** rather than goods: health care, teaching, banking, transport, information technology.

| Sector | What it does | Examples |
| --- | --- | --- |
| Primary | Extracts raw materials from nature | Farming, fishing, mining |
| Secondary | Turns raw materials into goods | Manufacturing, construction |
| Tertiary | Provides services | Teaching, banking, transport |

## Sectors and development

- The **less developed** an economy, the **more important its primary sector**.
- The **more developed** an economy, the **more important its tertiary sector**.
- Liberia's economy still relies heavily on primary production (agriculture, mining).

## Direct and indirect production

- **Direct production** — producing for one's own use (a farmer growing food for the family).
- **Indirect production** — producing to exchange or sell to others; this is most modern production and depends on specialization and trade.

## Common errors

- **Thinking production means only manufacturing.** Extraction (primary) and services (tertiary) are production too.
- **Believing production ends at the factory.** It is complete only when the good or service reaches the consumer.
- **Confusing the sectors.** Primary extracts, secondary manufactures, tertiary serves.`,
      workedExample: `**Question:** For a bar of chocolate, trace the production through the three sectors, naming the activity at each stage.

**Solution**

*Step 1 — primary production.* Cocoa is grown and harvested on a farm, and the beans are gathered. Taking the raw material (cocoa) directly from nature is **primary production**.

*Step 2 — secondary production.* A factory processes the beans and manufactures them into chocolate bars. Transforming the raw material into a finished good is **secondary production**.

*Step 3 — tertiary production.* Lorries transport the bars, shops sell them, and banks handle the payments. Providing these **services** that get the chocolate to the consumer is **tertiary production**.

**Answer:** Growing cocoa (primary), making the chocolate (secondary) and transporting/selling it (tertiary) together complete production — the chocolate is produced only when it reaches the consumer who eats it.`,
      quiz: [
        { prompt: "Production is best defined as", options: ["only making physical goods", "transforming inputs into outputs (goods or services)", "buying goods", "storing goods"], correctIndex: 1, explanation: "Production turns inputs into goods or services." },
        { prompt: "Providing a service such as teaching is", options: ["not production", "a form of production", "consumption only", "distribution only"], correctIndex: 1, explanation: "Services are production too." },
        { prompt: "Production is complete only when the good or service", options: ["leaves the factory", "reaches the final consumer", "is advertised", "is taxed"], correctIndex: 1, explanation: "It ends when it reaches the consumer." },
        { prompt: "Primary production", options: ["manufactures goods", "takes raw materials directly from nature", "provides services", "sells goods"], correctIndex: 1, explanation: "Primary extracts raw materials." },
        { prompt: "Secondary production", options: ["extracts raw materials", "transforms raw materials into finished goods", "provides services", "grows crops"], correctIndex: 1, explanation: "Secondary is manufacturing." },
        { prompt: "Tertiary production", options: ["mines minerals", "manufactures cars", "provides services", "grows food"], correctIndex: 2, explanation: "Tertiary provides services." },
        { prompt: "Farming and fishing belong to the", options: ["primary sector", "secondary sector", "tertiary sector", "no sector"], correctIndex: 0, explanation: "They extract raw materials from nature." },
        { prompt: "A factory making iron pipes from iron ore is", options: ["primary", "secondary", "tertiary", "direct production"], correctIndex: 1, explanation: "Manufacturing is secondary production." },
        { prompt: "Banking and transport are examples of", options: ["primary production", "secondary production", "tertiary production", "extraction"], correctIndex: 2, explanation: "Services are tertiary production." },
        { prompt: "The less developed an economy, the more important its", options: ["tertiary sector", "primary sector", "financial sector", "service sector"], correctIndex: 1, explanation: "Less developed economies rely on primary production." },
        { prompt: "The more developed an economy, the more important its", options: ["primary sector", "tertiary sector", "mining sector", "farming sector"], correctIndex: 1, explanation: "Developed economies rely more on services." },
        { prompt: "The relationship between inputs and outputs is the", options: ["demand curve", "production function", "supply schedule", "budget line"], correctIndex: 1, explanation: "The production function links inputs to outputs." },
        { prompt: "Direct production means producing", options: ["for sale to others", "for one's own use", "in a factory only", "for export"], correctIndex: 1, explanation: "Direct production is for one's own use." },
        { prompt: "Indirect production means producing", options: ["for one's own use", "to exchange or sell to others", "nothing", "only services"], correctIndex: 1, explanation: "Indirect production is for exchange." },
        { prompt: "Which sector does mining belong to?", options: ["Primary", "Secondary", "Tertiary", "None"], correctIndex: 0, explanation: "Mining extracts raw materials — primary." },
        { prompt: "A tailor sewing shirts from cloth is in the", options: ["primary sector", "secondary sector", "tertiary sector", "direct sector"], correctIndex: 1, explanation: "Turning cloth into shirts is manufacturing — secondary." },
        { prompt: "Liberia's economy relies heavily on", options: ["tertiary production only", "primary production such as agriculture and mining", "no production", "manufacturing only"], correctIndex: 1, explanation: "Liberia depends heavily on primary production." },
        { prompt: "Inputs used in production include", options: ["only money", "labour, capital and raw materials", "only machines", "only land"], correctIndex: 1, explanation: "Inputs are labour, capital and raw materials." },
        { prompt: "A doctor treating patients is engaged in", options: ["primary production", "secondary production", "tertiary production", "no production"], correctIndex: 2, explanation: "Health care is a service — tertiary." },
        { prompt: "Which statement is TRUE?", options: ["Production is only farming", "Extraction, manufacturing and services are all production", "Services are not production", "Production ends at the factory gate"], correctIndex: 1, explanation: "All three sectors are forms of production." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define production and explain when it is complete.", answerKey: "Production is the process of transforming inputs (labour, capital, raw materials) into outputs — goods or services. It includes services, not only physical goods, and is complete only when the good or service reaches the final consumer who needs it. Award 5 for the definition, 5 for the completion point.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Distinguish primary, secondary and tertiary production, with an example of each.", answerKey: "Primary — extracting raw materials from nature (farming, fishing, mining). Secondary — transforming raw materials into finished goods (manufacturing, construction). Tertiary — providing services (teaching, banking, transport). Award 2 per sector with a correct example.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "A factory that turns crude oil into petrol is engaged in", options: ["primary production", "secondary production", "tertiary production", "direct production"], correctIndex: 1, answerKey: "Transforming a raw material into a finished good is secondary production. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between direct and indirect production.", answerKey: "Direct production is producing for one's own use (subsistence, e.g. a farmer growing food for the family). Indirect production is producing to exchange or sell to others, which is most modern production and relies on specialization and trade. Award 3 per type with the contrast.", marks: 6 },
        { type: "ESSAY", prompt: "Using a product of your choice, explain the meaning of production and trace it through the primary, secondary and tertiary sectors.", answerKey: "Award marks for: definition of production as transforming inputs into outputs, complete when it reaches the consumer, 8; primary stage identified with the product, 6; secondary stage identified, 6; tertiary stage identified, 6; conclusion that all three sectors complete production, 4. A script that omits a sector loses proportionally.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 7.2 Production in the Short Run (factors of production / inputs: natural resources, labour, capital, technology, entrepreneurship) (https://openstax.org/books/principles-economics-3e/pages/7-2-production-in-the-short-run)
    {
      slug: "factors-of-production",
      title: "The Factors of Production and Their Rewards",
      objective:
        "By the end of the topic, learners should be able to identify the factors of production — land, labour, capital, entrepreneurship and technology — describe each, and state the reward each earns.",
      estimatedMinutes: 130,
      notes: `## The factors of production (inputs)

The resources used to produce goods and services are the **factors of production**. Economists group them as follows.

**Land (natural resources)** — everything provided by nature: soil, minerals, water, forests, and the raw materials taken from them.
- *Reward:* **rent**.

**Labour** — human effort, both physical and mental, used in production.
- *Reward:* **wages** (or salary).

**Capital** — man-made goods used to produce other goods: machines, tools, equipment, factories and buildings.
- *Reward:* **interest**.

**Entrepreneurship** — the decision-making and risk-taking that **combines** the other factors, organises production and bears the risk of loss.
- *Reward:* **profit**.

**Technology** — the processes and know-how for producing the product; better technology lets the same inputs produce more output.

## Rewards summary

| Factor | Description | Reward |
| --- | --- | --- |
| Land | Natural resources | Rent |
| Labour | Human physical and mental effort | Wages/salary |
| Capital | Man-made aids to production | Interest |
| Entrepreneurship | Organising and risk-taking | Profit |

## How the factors work together

- No single factor can produce alone; the entrepreneur **combines land, labour and capital** (using technology) to make output.
- The mix chosen affects cost, employment and the amount produced (the "how to produce" question).

## Features of the factors

- **Land** is largely fixed in supply and geographically immobile; its quality varies.
- **Labour** is human, so it has feelings, can be trained, and can move between jobs and places (mobility).
- **Capital** is produced by people specifically to help make other goods — it is a produced means of production.
- **The entrepreneur** is the only factor that bears **uncertainty**: profit is a reward for risk and is not guaranteed.

## Common errors

- **Calling money a factor of production.** Money buys factors but is not itself a factor; **capital** means machines and tools, not cash.
- **Mixing up the rewards.** Land earns rent, labour wages, capital interest, enterprise profit.
- **Thinking a worker who owns the firm earns only wages.** As owner-organiser they also earn profit for their entrepreneurship.`,
      workedExample: `**Question:** A bakery uses a rented shop, three bakers, an oven and a mixing machine, all organised by the owner who risks her savings. Identify each factor of production involved and the reward it earns.

**Solution**

*Step 1 — the rented shop and the land it stands on.* This is **land** (natural resource/space); its reward is **rent**.

*Step 2 — the three bakers.* Their physical and mental effort is **labour**; its reward is **wages**.

*Step 3 — the oven and mixing machine.* These are man-made aids to production — **capital**; their reward is **interest**.

*Step 4 — the owner organising it all and risking her savings.* Combining the factors and bearing the risk is **entrepreneurship**; its reward is **profit** (not guaranteed).

**Answer:** Land (shop) earns rent, labour (bakers) earns wages, capital (oven, machine) earns interest, and the owner's entrepreneurship earns profit. The entrepreneur combines the other three, using technology, to produce the bread.`,
      quiz: [
        { prompt: "Natural resources provided by nature are the factor called", options: ["capital", "labour", "land", "enterprise"], correctIndex: 2, explanation: "Land covers all natural resources." },
        { prompt: "The reward to land is", options: ["wages", "rent", "interest", "profit"], correctIndex: 1, explanation: "Land earns rent." },
        { prompt: "Human physical and mental effort is", options: ["land", "labour", "capital", "enterprise"], correctIndex: 1, explanation: "Labour is human effort." },
        { prompt: "The reward to labour is", options: ["rent", "wages", "interest", "profit"], correctIndex: 1, explanation: "Labour earns wages or salary." },
        { prompt: "Man-made goods used to produce other goods are", options: ["land", "labour", "capital", "money"], correctIndex: 2, explanation: "Capital is man-made aids to production." },
        { prompt: "The reward to capital is", options: ["rent", "wages", "interest", "profit"], correctIndex: 2, explanation: "Capital earns interest." },
        { prompt: "The factor that combines the others and bears risk is", options: ["land", "labour", "capital", "entrepreneurship"], correctIndex: 3, explanation: "The entrepreneur organises and takes risk." },
        { prompt: "The reward to entrepreneurship is", options: ["rent", "wages", "interest", "profit"], correctIndex: 3, explanation: "Enterprise earns profit." },
        { prompt: "Which is NOT a factor of production?", options: ["Land", "Money", "Labour", "Capital"], correctIndex: 1, explanation: "Money buys factors but is not itself a factor." },
        { prompt: "An oven in a bakery is an example of", options: ["land", "labour", "capital", "enterprise"], correctIndex: 2, explanation: "It is a man-made aid to production — capital." },
        { prompt: "Better technology allows the same inputs to produce", options: ["less output", "more output", "no output", "only services"], correctIndex: 1, explanation: "Technology raises productivity." },
        { prompt: "Which factor bears uncertainty and may make a loss?", options: ["Land", "Labour", "Capital", "The entrepreneur"], correctIndex: 3, explanation: "Profit is a reward for risk and is not guaranteed." },
        { prompt: "A farmer's field is which factor?", options: ["Capital", "Land", "Labour", "Enterprise"], correctIndex: 1, explanation: "The field is a natural resource — land." },
        { prompt: "Wages are the reward for", options: ["land", "labour", "capital", "enterprise"], correctIndex: 1, explanation: "Labour is rewarded with wages." },
        { prompt: "Capital is best described as", options: ["cash in the bank", "a produced means of production", "natural resources", "human effort"], correctIndex: 1, explanation: "Capital is produced to help make other goods." },
        { prompt: "Which factor is largely fixed in supply and immobile?", options: ["Labour", "Land", "Capital", "Enterprise"], correctIndex: 1, explanation: "Land is largely fixed and geographically immobile." },
        { prompt: "The entrepreneur's main task is to", options: ["only supply money", "combine the factors and take risk", "provide land only", "work as labour only"], correctIndex: 1, explanation: "The entrepreneur organises production and bears risk." },
        { prompt: "Interest is earned by", options: ["land", "labour", "capital", "enterprise"], correctIndex: 2, explanation: "Capital earns interest." },
        { prompt: "Which correctly pairs factor and reward?", options: ["Labour then rent", "Land then interest", "Capital then interest", "Enterprise then wages"], correctIndex: 2, explanation: "Capital earns interest; land earns rent, labour wages, enterprise profit." },
        { prompt: "A machine operator's effort is which factor?", options: ["Land", "Labour", "Capital", "Enterprise"], correctIndex: 1, explanation: "Human effort is labour." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the four main factors of production and state the reward earned by each.", answerKey: "Land — rent; labour — wages/salary; capital — interest; entrepreneurship — profit. Award 2 per factor correctly paired with its reward.", marks: 8 },
        { type: "SHORT_ANSWER", prompt: "Explain why money is not counted as a factor of production.", answerKey: "Money is a medium of exchange used to buy factors, not a resource that itself produces goods. The factor 'capital' means man-made aids to production (machines, tools, buildings), not cash. Money only finances the purchase of factors. Award marks for money as a means of buying factors and for distinguishing it from capital.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which factor of production bears risk and earns profit?", options: ["Land", "Labour", "Capital", "Entrepreneurship"], correctIndex: 3, answerKey: "The entrepreneur combines the factors, bears uncertainty and earns profit. Option D.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Describe the role of the entrepreneur in production.", answerKey: "The entrepreneur makes decisions, combines land, labour and capital (using technology) to organise production, and bears the risk of loss. Their reward, profit, is not guaranteed because they carry uncertainty. Award marks for combining the factors, organising, and bearing risk.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss the factors of production, describing each, its reward, and how the entrepreneur combines them to produce goods and services.", answerKey: "Award marks for: land defined with its reward rent, 5; labour with wages, 5; capital with interest (and distinguished from money), 6; entrepreneurship with profit and its risk-bearing role, 6; explanation that no factor produces alone and the entrepreneur combines them using technology, 5; terminology, 3. A script that omits a factor or reward loses proportionally.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 2.2 The Production Possibilities Frontier and Social Choices (https://openstax.org/books/principles-economics-3e/pages/2-2-the-production-possibilities-frontier-and-social-choices)
    {
      slug: "production-possibility-curve",
      title: "The Production Possibility Curve (Frontier)",
      objective:
        "By the end of the topic, learners should be able to derive and interpret a production possibility curve, identify attainable, unattainable and inefficient points, and explain the law of increasing opportunity cost.",
      estimatedMinutes: 130,
      notes: `## What the PPC shows

**Production possibility curve (PPC)** / **production possibilities frontier (PPF)** — a curve showing the **maximum combinations of two goods** an economy can produce when all its resources are fully and efficiently used, given current technology.
- It illustrates the **constraints** society faces because resources are limited.
- Producing more of one good means producing less of the other — the **trade-off** (opportunity cost).

\`\`\`svg A production possibility curve for two goods
<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concave production possibility curve with points inside, on and outside">
  <line x1="45" y1="15" x2="45" y2="185" stroke="#555" stroke-width="1.5"/>
  <line x1="45" y1="185" x2="285" y2="185" stroke="#555" stroke-width="1.5"/>
  <text x="8" y="20" font-size="10">Good A</text>
  <text x="235" y="205" font-size="10">Good B</text>
  <path d="M55 40 Q 120 150 260 175" fill="none" stroke="#1f6feb" stroke-width="2"/>
  <circle cx="110" cy="95" r="4" fill="#2e7d32"/>
  <text x="116" y="92" font-size="10">C (on: efficient)</text>
  <circle cx="95" cy="150" r="4" fill="#e67e22"/>
  <text x="101" y="160" font-size="10">D (inside: unused)</text>
  <circle cx="210" cy="70" r="4" fill="#c0392b"/>
  <text x="150" y="55" font-size="10">U (outside: unattainable)</text>
</svg>
\`\`\`

## Points on, inside and outside

| Point | Meaning |
| --- | --- |
| **On** the curve | Resources fully and efficiently used — **productively efficient** |
| **Inside** the curve | Resources **underused** or inefficient — production could rise |
| **Outside** the curve | **Unattainable** with current resources and technology |

- **Attainable region** — every point on or inside the curve.
- **Unattainable region** — every point beyond the curve.
- **Full employment** is shown by a point **on** the curve; **underutilisation** (idle resources, unemployment) by a point **inside** it.

## Efficiency

- **Productive efficiency** — impossible to produce more of one good without producing less of the other (points on the curve).
- **Allocative efficiency** — the particular point on the curve that society most desires.

## Why the PPC bows outward (law of increasing opportunity cost)

- The PPC is usually **concave (bowed outward)**, not a straight line.
- **Law of increasing opportunity cost** — as production of a good increases, the opportunity cost of producing still more of it rises.
- This happens because resources are not equally suited to both goods; shifting the best-suited resources first gives big gains, but later shifts move less-suited resources, giving smaller gains.

## Common errors

- **Reading an inside point as "impossible".** Inside points are attainable but wasteful (resources idle).
- **Thinking any point on the curve uses no opportunity cost.** Moving along the curve always trades one good for the other.
- **Expecting a straight-line PPC.** It usually bows outward because of increasing opportunity cost.`,
      workedExample: `**Question:** An economy can produce guns and butter. Its options are: (A) 100 guns and 0 butter; (B) 80 guns and 30 butter; (C) 50 guns and 55 butter; (D) 0 guns and 70 butter. A point of 60 guns and 60 butter is also proposed. (a) Which points are on the frontier? (b) Classify the point 40 guns and 30 butter. (c) Classify 60 guns and 60 butter. (d) State the opportunity cost of moving from A to B.

**Solution**

(a) Points **A, B, C and D** are the maximum combinations, so they lie **on** the frontier (productively efficient — resources fully used).

(b) **40 guns and 30 butter** lies **inside** the frontier (at 30 butter the economy could make 80 guns, per B). Resources are **underused/inefficient** — an attainable but wasteful point.

(c) **60 guns and 60 butter** lies **outside** the frontier (at 60 butter the frontier allows fewer than 55 guns). It is **unattainable** with current resources and technology.

(d) Moving from A (100 guns, 0 butter) to B (80 guns, 30 butter): guns fall by 20 to gain 30 butter. The **opportunity cost** of the 30 units of butter is the **20 guns** given up.

**Answer:** A, B, C, D are on the frontier; 40 guns/30 butter is inside (inefficient); 60/60 is outside (unattainable); the opportunity cost of moving A to B is 20 guns.`,
      quiz: [
        { prompt: "A production possibility curve shows the maximum combinations of", options: ["one good", "two goods with full, efficient use of resources", "money and goods", "buyers and sellers"], correctIndex: 1, explanation: "The PPC shows two-good trade-offs at full efficiency." },
        { prompt: "A point ON the PPC means resources are", options: ["idle", "fully and efficiently used", "wasted", "unattainable"], correctIndex: 1, explanation: "On the curve = productive efficiency." },
        { prompt: "A point INSIDE the PPC means resources are", options: ["fully used", "underused or inefficient", "unattainable", "unlimited"], correctIndex: 1, explanation: "Inside = idle or inefficient resources." },
        { prompt: "A point OUTSIDE the PPC is", options: ["efficient", "inefficient", "unattainable with current resources", "the best point"], correctIndex: 2, explanation: "Beyond the curve is unattainable now." },
        { prompt: "Moving along the PPC to make more of one good means", options: ["making more of both", "making less of the other good", "no trade-off", "using no resources"], correctIndex: 1, explanation: "There is always a trade-off — opportunity cost." },
        { prompt: "Full employment of resources is shown by a point", options: ["inside the curve", "on the curve", "outside the curve", "at the origin"], correctIndex: 1, explanation: "On the curve represents full employment." },
        { prompt: "Underutilisation (unemployment) is shown by a point", options: ["on the curve", "inside the curve", "outside the curve", "on the axis only"], correctIndex: 1, explanation: "Inside the curve shows idle resources." },
        { prompt: "Productive efficiency means it is impossible to produce more of one good without", options: ["using less land", "producing less of the other", "raising prices", "hiring more workers"], correctIndex: 1, explanation: "That is the definition of productive efficiency." },
        { prompt: "The PPC usually bows outward because of", options: ["constant opportunity cost", "the law of increasing opportunity cost", "falling demand", "rising supply"], correctIndex: 1, explanation: "Increasing opportunity cost gives a concave curve." },
        { prompt: "The attainable region includes points", options: ["only outside the curve", "on or inside the curve", "only on the axes", "beyond the curve"], correctIndex: 1, explanation: "On or inside the curve is attainable." },
        { prompt: "The law of increasing opportunity cost says that as output of a good rises, its opportunity cost", options: ["falls", "rises", "stays constant", "becomes zero"], correctIndex: 1, explanation: "Opportunity cost increases with more output." },
        { prompt: "Why does opportunity cost increase along the PPC?", options: ["Resources are equally suited to both goods", "Resources are not equally suited, so later shifts use less-suited resources", "Prices rise", "Technology improves"], correctIndex: 1, explanation: "Unequal suitability of resources raises opportunity cost." },
        { prompt: "Allocative efficiency is the point on the curve that", options: ["uses the fewest resources", "society most desires", "is unattainable", "is inside the curve"], correctIndex: 1, explanation: "Allocative efficiency = the most desired mix." },
        { prompt: "An economy at a point inside its PPC could", options: ["not produce more", "produce more of one or both goods", "only import", "never grow"], correctIndex: 1, explanation: "Idle resources can be put to work." },
        { prompt: "A straight-line PPC would imply", options: ["increasing opportunity cost", "constant opportunity cost", "no trade-off", "unattainable output"], correctIndex: 1, explanation: "A straight line means constant opportunity cost." },
        { prompt: "The PPC illustrates the basic problem of", options: ["inflation", "scarcity and choice", "taxation", "banking"], correctIndex: 1, explanation: "Limited resources force trade-offs — scarcity and choice." },
        { prompt: "If an economy moves from an inside point to the curve, it has", options: ["reduced output", "used its idle resources to raise output", "become unattainable", "lost efficiency"], correctIndex: 1, explanation: "It puts idle resources to work." },
        { prompt: "An unattainable point can become attainable through", options: ["idle resources", "economic growth (more resources or better technology)", "unemployment", "producing less"], correctIndex: 1, explanation: "Growth shifts the whole PPC outward." },
        { prompt: "Which point is productively efficient?", options: ["Inside the curve", "On the curve", "Outside the curve", "At the origin"], correctIndex: 1, explanation: "Only points on the curve are productively efficient." },
        { prompt: "The opportunity cost of moving from one point on the PPC to another is", options: ["zero", "the amount of the other good given up", "the total output", "the price"], correctIndex: 1, explanation: "It is the quantity of the other good sacrificed." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define the production possibility curve and state what points on, inside and outside it represent.", answerKey: "The PPC shows the maximum combinations of two goods an economy can produce with all resources fully and efficiently used, given technology. On the curve = full, efficient use (productive efficiency); inside = underused/inefficient resources (attainable but wasteful); outside = unattainable with current resources and technology. Award 4 for the definition, 2 per point-type.", marks: 10 },
        { type: "MULTIPLE_CHOICE", prompt: "A point inside the production possibility curve indicates", options: ["full employment", "unemployed or underused resources", "an unattainable target", "allocative efficiency"], correctIndex: 1, answerKey: "Inside the curve shows idle or underused resources. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain the law of increasing opportunity cost and why it makes the PPC bow outward.", answerKey: "As the production of a good increases, the opportunity cost of producing more of it rises, because resources are not equally suited to both goods; the best-suited resources are shifted first (big gains), then less-suited ones (smaller gains). This rising cost makes the PPC concave (bowed outward) rather than straight. Award marks for the law, the resource-suitability reason, and the concave shape.", marks: 8 },
        { type: "SHORT_ANSWER", prompt: "An economy can make 100 guns and 0 butter, or 80 guns and 30 butter. State the opportunity cost of producing 30 units of butter.", answerKey: "Moving from 100 guns/0 butter to 80 guns/30 butter, guns fall by 20 to gain 30 butter, so the opportunity cost of the 30 butter is the 20 guns forgone. Award 3 for the correct 20 guns, 3 for the reasoning.", marks: 6 },
        { type: "ESSAY", prompt: "Using a diagram or numerical example, explain how the production possibility curve illustrates scarcity, choice, opportunity cost and efficiency.", answerKey: "Award marks for: definition and derivation of the PPC with a diagram or table, 8; points on (efficient/full employment), inside (inefficient/unemployment) and outside (unattainable), 8; opportunity cost shown as the trade-off along the curve, 6; the law of increasing opportunity cost and the concave shape, 5; conclusion linking to scarcity and choice, 3. A script without a diagram or example should not exceed 18.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 1.1 What Is Economics (division and specialization of labour) (https://openstax.org/books/principles-economics-3e/pages/1-1-what-is-economics-and-why-is-it-important) and 7.2 Production in the Short Run (law of diminishing marginal returns) (https://openstax.org/books/principles-economics-3e/pages/7-2-production-in-the-short-run)
    {
      slug: "division-of-labour-specialization-and-diminishing-returns",
      title: "Division of Labour, Specialization and the Law of Diminishing Returns",
      objective:
        "By the end of the topic, learners should be able to explain the division of labour and specialization, state why they raise output, and explain the law of diminishing returns.",
      estimatedMinutes: 120,
      notes: `## Division of labour

**Division of labour** — the way producing a good or service is split into a number of **tasks**, each done by a different worker, instead of one person doing every task.
- **Specialization** — each worker (or firm, or region, or country) concentrates on the task they do best.

**Adam Smith's pin factory:** Smith found pin-making could be broken into 18 distinct tasks. One worker doing everything alone might make about **20 pins a day**, but **10 specialized workers** dividing the tasks could make about **48,000 pins a day** — a huge increase.

## Why the division of labour raises output

1. **Comparative advantage** — workers specialize where they are relatively best, by skill, talent, location or training.
2. **Skill development** — repeating one task makes a worker faster and more accurate at it.
3. **Economies of scale** — larger production lowers cost per unit and makes it worth investing in specialized machinery.

## Advantages and disadvantages

| Advantages | Disadvantages |
| --- | --- |
| More output, higher productivity | Work can become boring/repetitive |
| Better quality from practised skill | Over-dependence — one gap can stop the line |
| Saves time; allows use of machinery | Less variety of skills for the worker |

## The law of diminishing returns

**Law of diminishing (marginal) returns** — as more units of a variable input (e.g. workers) are added to a **fixed** input (e.g. a machine or a plot of land), the **marginal product** at first rises, but sooner or later each extra worker adds **less** extra output than the one before.
- **Marginal product** — the extra output from one more worker: change in total product divided by change in labour.

*Example (a two-person crosscut saw, from OpenStax):*

| Workers | Total trees | Marginal product |
| --- | --- | --- |
| 1 | 4 | 4 |
| 2 | 10 | 6 |
| 3 | 12 | 2 |
| 4 | 13 | 1 |
| 5 | 13 | 0 |

- Marginal product rises to the 2nd worker, then falls — diminishing returns set in from the 3rd worker.

*Why:* with a fixed input (one saw), extra workers eventually crowd the fixed resource, so each adds less.

## Common errors

- **Thinking output always rises proportionally with workers.** Beyond a point, extra workers add less (diminishing returns).
- **Confusing total product with marginal product.** Total can still rise while marginal product falls.
- **Assuming diminishing returns means total output falls.** It means the *extra* output per worker falls; total may still rise (until marginal product turns negative).`,
      workedExample: `**Question:** A small farm has one hoe (fixed). Total crop by number of workers is: 1 worker = 8 bags; 2 = 20; 3 = 27; 4 = 30; 5 = 30. (a) Find the marginal product of each worker. (b) State when diminishing returns begin. (c) Explain why they occur.

**Solution**

*Step 1 — marginal product (change in total per extra worker):*

| Workers | Total | Marginal product |
| --- | --- | --- |
| 1 | 8 | 8 |
| 2 | 20 | 12 |
| 3 | 27 | 7 |
| 4 | 30 | 3 |
| 5 | 30 | 0 |

*Step 2 — when diminishing returns begin.* Marginal product rises to the 2nd worker (12), then falls (7, 3, 0). So **diminishing returns begin with the 3rd worker**.

*Step 3 — why.* The hoe is a **fixed input**. With more workers sharing one hoe, each extra worker has less of the fixed resource to work with, so each adds less extra output. By the 5th worker the marginal product is 0 — total output stops rising.

**Answer:** Marginal products are 8, 12, 7, 3, 0; diminishing returns start at the 3rd worker; they occur because extra labour is added to a fixed input (one hoe), so each additional worker adds less.`,
      quiz: [
        { prompt: "The division of labour means splitting production into", options: ["one big task", "separate tasks done by different workers", "only management", "only machines"], correctIndex: 1, explanation: "Production is divided into tasks among workers." },
        { prompt: "Specialization means each worker concentrates on", options: ["every task", "the task they do best", "no task", "management only"], correctIndex: 1, explanation: "Specialization focuses on one's best task." },
        { prompt: "In Adam Smith's example, ten specialized workers could make about how many pins a day?", options: ["200", "2,000", "48,000", "48"], correctIndex: 2, explanation: "About 48,000 pins with the division of labour." },
        { prompt: "One reason the division of labour raises output is", options: ["boredom", "skill development from repeating a task", "fewer workers", "higher prices"], correctIndex: 1, explanation: "Practice makes workers faster and more accurate." },
        { prompt: "A disadvantage of the division of labour is", options: ["higher output", "work becoming boring and repetitive", "better quality", "use of machinery"], correctIndex: 1, explanation: "Repetitive work is a drawback." },
        { prompt: "Marginal product is", options: ["total output", "the extra output from one more worker", "average output", "the price"], correctIndex: 1, explanation: "It is the added output per extra worker." },
        { prompt: "The law of diminishing returns applies when a variable input is added to a", options: ["variable input", "fixed input", "second market", "new technology"], correctIndex: 1, explanation: "Diminishing returns need at least one fixed input." },
        { prompt: "Under diminishing returns, each extra worker eventually adds", options: ["more output than before", "less output than before", "the same output", "no total output ever"], correctIndex: 1, explanation: "Marginal product falls after a point." },
        { prompt: "In the saw example, marginal product is highest at the", options: ["1st worker", "2nd worker", "4th worker", "5th worker"], correctIndex: 1, explanation: "MP peaks at the 2nd worker (6)." },
        { prompt: "Diminishing returns occur because extra labour", options: ["has more of the fixed input each", "shares a fixed input, so each has less to work with", "brings new machines", "lowers demand"], correctIndex: 1, explanation: "Crowding a fixed input reduces each worker's contribution." },
        { prompt: "Specialization can apply to", options: ["only workers", "workers, firms, regions and countries", "only firms", "only countries"], correctIndex: 1, explanation: "All can specialize." },
        { prompt: "Comparative advantage means specializing where one is", options: ["the slowest", "relatively best", "least trained", "most bored"], correctIndex: 1, explanation: "Specialize where relatively most capable." },
        { prompt: "Economies of scale mean that larger production", options: ["raises cost per unit", "lowers cost per unit", "has no effect on cost", "stops output"], correctIndex: 1, explanation: "Bigger scale can lower unit cost." },
        { prompt: "When marginal product is zero, total output", options: ["falls", "stops rising", "rises fastest", "doubles"], correctIndex: 1, explanation: "With MP = 0 total output is at its maximum and stops rising." },
        { prompt: "Total product can still rise while marginal product is", options: ["negative", "falling but positive", "zero only", "constant only"], correctIndex: 1, explanation: "Falling positive MP still adds to total." },
        { prompt: "Over-dependence is a disadvantage of the division of labour because", options: ["it raises output", "one missing task can halt the whole line", "workers earn more", "machines are cheaper"], correctIndex: 1, explanation: "The chain of tasks is only as strong as its weakest link." },
        { prompt: "Repeating one task tends to make a worker", options: ["slower", "faster and more accurate", "less skilled", "unemployed"], correctIndex: 1, explanation: "Practice builds speed and accuracy." },
        { prompt: "Diminishing returns is about the extra output falling, so total output", options: ["always falls", "may still rise while marginal falls", "is always zero", "never changes"], correctIndex: 1, explanation: "Total can rise even as marginal product declines." },
        { prompt: "The division of labour makes it worthwhile to invest in", options: ["fewer tools", "specialized machinery", "no capital", "less training"], correctIndex: 1, explanation: "Larger, specialized production supports machinery." },
        { prompt: "Which is TRUE of specialization?", options: ["It lowers productivity", "It concentrates effort where one is best, raising output", "It removes trade", "It needs no exchange"], correctIndex: 1, explanation: "Specialization raises output but relies on exchange/trade." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define the division of labour and specialization, and give two reasons they raise output.", answerKey: "Division of labour is splitting production into separate tasks done by different workers; specialization is each worker (or firm/country) concentrating on the task they do best. Reasons output rises (any two): comparative advantage (specialize where relatively best), skill development from repetition, and economies of scale/use of specialized machinery. Award 3 per definition, 2 per reason.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "State the law of diminishing returns and explain why it occurs.", answerKey: "As more of a variable input (e.g. workers) is added to a fixed input, the marginal product first rises then eventually falls — each extra worker adds less than the one before. It occurs because the extra workers share a fixed resource, so each has less of it to work with. Award 4 for the law, 4 for the fixed-input reason.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Marginal product is best defined as", options: ["total output of all workers", "the extra output from one more worker", "average output per worker", "the price of output"], correctIndex: 1, answerKey: "Marginal product is the additional output from one more worker. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State two disadvantages of the division of labour.", answerKey: "Any two: work becomes boring and repetitive; over-dependence, since one missing task can halt the whole line; the worker develops a narrower range of skills; loss of craftsmanship/pride. Award 3 per valid disadvantage.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss the division of labour and specialization, their advantages and disadvantages, and explain how the law of diminishing returns limits the gains from simply adding more workers.", answerKey: "Award marks for: definition of division of labour and specialization with Adam Smith's example, 6; why they raise output (comparative advantage, skill, economies of scale), 6; advantages and disadvantages, 6; the law of diminishing returns explained with marginal product and a fixed input, 8; conclusion connecting the two ideas (specialization helps, but adding labour to fixed inputs yields diminishing returns), 4. A script that omits diminishing returns should not exceed 15.", marks: 30 },
      ],
    },
  ],
};
