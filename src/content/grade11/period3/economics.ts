import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 11,
// Semester One, Period III: The Theory of Production and Distribution. CONTENTS:
// (1) The theory of production and distribution — meaning of production, types
// of production, classification of goods and the concept of wealth; (2)
// Differentiation of firm, plant, industry, fixed inputs and variable inputs;
// (3) Distinguishing features of producer, wholesaler and retailer; (4) Relating
// producer/wholesaler/retailer and marketing practices, and the problems of
// distribution and marketing of commodities. Sourced from OpenStax Principles of
// Economics 3e (Ch 7), LibreTexts (Geosciences economic sectors; Business /
// Principles of Marketing distribution channels). Liberia-specific product and
// marketing detail is applied on top of the sourced general framework.
export const economicsG11P3: PeriodContent = {
  grade: 11,
  number: 3,
  title: "The Theory of Production and Distribution",
  summary:
    "Period III of the MoE Grade 11 Economics syllabus. Learners define production, distinguish its primary, secondary and tertiary types, classify goods and explain wealth. They tell a firm from a plant and an industry, separate fixed from variable inputs, and describe the roles of producer, wholesaler and retailer in the channel of distribution — ending with the functions and problems of distributing and marketing commodities.",
  topics: [
    // source: OpenStax — Principles of Economics 3e, 7.2 Production in the Short Run (meaning of production) (https://openstax.org/books/principles-economics-3e/pages/7-2-production-in-the-short-run) and LibreTexts Geosciences — Introduction to Geography (McCormick) 2.12 Economic Geography (primary, secondary, tertiary, quaternary sectors) (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/Introduction_to_Geography_(McCormick)/02:_Human_Geography/2.12:_Economic_Geography)
    {
      slug: "meaning-and-types-of-production",
      title: "Meaning and Types of Production; Classification of Goods and Wealth",
      objective:
        "By the end of the topic, learners should be able to define production, distinguish primary, secondary and tertiary production, classify goods, and explain the concept of wealth.",
      estimatedMinutes: 120,
      notes: `## The meaning of production

**Production** — the process a firm uses to **transform inputs** (labour, capital, raw materials, land) **into outputs** (goods and services) that satisfy wants.
- Production is not complete until the good or service reaches the final consumer, so it includes making, distributing and selling.

## Types of production (sectors)

**Primary production** — the direct use or extraction of natural resources: farming, fishing, forestry and mining. It needs minimal processing.
**Secondary production** — the manufacturing that combines raw materials from the primary sector into new, finished goods (factories, building).
**Tertiary production** — the provision of **services** rather than goods: retail, transport, banking, teaching, health care.
- A **quaternary** activity is sometimes added for knowledge and information services (research, data analysis).
- More developed economies rely more on the tertiary sector; less developed economies rely more on primary and secondary activity.

| Sector | Activity | Examples |
| --- | --- | --- |
| Primary | Extracting natural resources | Farming, fishing, mining |
| Secondary | Manufacturing finished goods | Factories, construction |
| Tertiary | Providing services | Retail, banking, teaching |

## Classification of goods

**Free goods** — goods so plentiful that they carry no price (e.g. air in most places); they are not scarce.
**Economic goods** — goods that are **scarce** and command a price because effort is needed to obtain them.
**Consumer goods** — goods bought for **personal use** to satisfy wants directly (food, clothing).
**Capital (producer) goods** — goods such as factories, machines and tools used to **produce other goods**; they are not used up at once in production.

## Wealth

**Wealth** — the **stock of economic goods** that have value and are owned by a person or nation at a point in time (money, property, machines, natural resources). It differs from **income**, which is a flow received over a period.
- A country's wealth includes its natural resources, produced capital and the skills of its people.

## Common errors

- **Thinking production stops at the factory.** It continues until the good reaches the consumer, so services count as production.
- **Confusing consumer and capital goods.** A car for family use is a consumer good; a delivery truck used by a firm is a capital good.
- **Confusing wealth (a stock) with income (a flow).** Wealth is what is owned at a moment; income is what is earned over time.`,
      workedExample: `**Question:** Classify each activity by type of production and each item as a consumer or capital good: (a) a farmer growing rice; (b) a factory making bicycles; (c) a bank giving loans; (d) an oven bought by a bakery.

**Solution**

*Step 1 — types of production.*
- (a) Growing rice extracts from nature — **primary production**.
- (b) Making bicycles turns materials into finished goods — **secondary production**.
- (c) A bank provides a service — **tertiary production**.

*Step 2 — the good.*
- (d) An oven used by a bakery to make bread is used to **produce other goods**, so it is a **capital (producer) good**, not a consumer good.

**Answer:** (a) primary, (b) secondary, (c) tertiary; (d) the bakery's oven is a capital good.`,
      quiz: [
        { prompt: "Production is best defined as", options: ["only farming", "transforming inputs into outputs that satisfy wants", "buying goods", "saving money"], correctIndex: 1, explanation: "Production converts inputs into goods and services." },
        { prompt: "Primary production involves", options: ["making finished goods", "extracting natural resources", "providing services", "banking"], correctIndex: 1, explanation: "Farming, fishing and mining are primary." },
        { prompt: "Secondary production involves", options: ["extracting resources", "manufacturing finished goods", "teaching", "transport"], correctIndex: 1, explanation: "Manufacturing is the secondary sector." },
        { prompt: "Tertiary production involves", options: ["mining", "factories", "providing services", "fishing"], correctIndex: 2, explanation: "Services such as retail and banking are tertiary." },
        { prompt: "Fishing is an example of", options: ["primary production", "secondary production", "tertiary production", "no production"], correctIndex: 0, explanation: "Fishing extracts from nature — primary." },
        { prompt: "A bank giving loans is", options: ["primary", "secondary", "tertiary", "quaternary"], correctIndex: 2, explanation: "Banking is a service — tertiary." },
        { prompt: "Free goods are", options: ["scarce and priced", "so plentiful they carry no price", "always manufactured", "capital goods"], correctIndex: 1, explanation: "Free goods are not scarce and have no price." },
        { prompt: "Economic goods are", options: ["free and unlimited", "scarce and command a price", "never traded", "always services"], correctIndex: 1, explanation: "Scarcity gives economic goods a price." },
        { prompt: "Consumer goods are bought for", options: ["producing other goods", "personal use to satisfy wants", "export only", "storage"], correctIndex: 1, explanation: "Consumer goods directly satisfy wants." },
        { prompt: "Capital goods are used to", options: ["satisfy wants directly", "produce other goods", "pay taxes", "measure wealth"], correctIndex: 1, explanation: "Machines and tools produce other goods." },
        { prompt: "A delivery truck used by a firm is a", options: ["consumer good", "capital good", "free good", "service"], correctIndex: 1, explanation: "It is used to produce/deliver, so it is a capital good." },
        { prompt: "Wealth is a", options: ["flow of income over time", "stock of economic goods owned at a point in time", "type of tax", "service"], correctIndex: 1, explanation: "Wealth is a stock; income is a flow." },
        { prompt: "Income differs from wealth because income is a", options: ["stock", "flow received over a period", "free good", "capital good"], correctIndex: 1, explanation: "Income is earned over time; wealth is owned at a moment." },
        { prompt: "Construction of buildings belongs to the", options: ["primary sector", "secondary sector", "tertiary sector", "no sector"], correctIndex: 1, explanation: "Construction is manufacturing/secondary." },
        { prompt: "More developed economies rely most on the", options: ["primary sector", "secondary sector", "tertiary sector", "free goods"], correctIndex: 2, explanation: "Services dominate developed economies." },
        { prompt: "Production is only complete when the good", options: ["leaves the factory", "reaches the final consumer", "is taxed", "is stored"], correctIndex: 1, explanation: "Distribution and selling are part of production." },
        { prompt: "Air, in most places, is an example of a", options: ["capital good", "free good", "economic good", "service"], correctIndex: 1, explanation: "Air is plentiful and unpriced — a free good." },
        { prompt: "A country's wealth includes natural resources, produced capital and", options: ["only cash", "the skills of its people", "free goods only", "taxes"], correctIndex: 1, explanation: "Human skills are part of a nation's wealth." },
        { prompt: "A sewing machine bought by a tailor to make clothes is a", options: ["consumer good", "capital good", "free good", "tertiary service"], correctIndex: 1, explanation: "It produces other goods — capital good." },
        { prompt: "Which sequence is correct from extraction to service?", options: ["Tertiary, secondary, primary", "Primary, secondary, tertiary", "Secondary, primary, tertiary", "Primary, tertiary, secondary"], correctIndex: 1, explanation: "Extract (primary), make (secondary), serve (tertiary)." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define production and distinguish primary, secondary and tertiary production.", answerKey: "Production is the process of transforming inputs into outputs that satisfy wants, complete only when the good reaches the consumer. Primary production extracts natural resources (farming, fishing, mining); secondary production manufactures finished goods (factories, construction); tertiary production provides services (retail, banking, teaching). Award 4 for the definition, 2 per sector.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between consumer goods and capital goods, with an example of each.", answerKey: "Consumer goods are bought for personal use to satisfy wants directly, e.g. food or clothing. Capital (producer) goods are used to produce other goods and are not used up at once, e.g. a machine or factory. Award 4 per type with a correct example.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is an economic good rather than a free good?", options: ["Air in an open field", "Sunlight", "A bag of rice for sale", "Seawater at the beach"], correctIndex: 2, answerKey: "Rice is scarce and commands a price — an economic good. Option C.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between wealth and income.", answerKey: "Wealth is a stock — the economic goods of value owned by a person or nation at a point in time (money, property, machines, resources). Income is a flow — the amount received over a period of time. Award marks for the stock-vs-flow distinction and a correct description of each.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the meaning and types of production and how goods are classified, and describe the concept of wealth.", answerKey: "Award marks for: definition of production as transforming inputs into outputs and complete only at the consumer, 6; primary, secondary and tertiary production with examples, 9; classification of goods — free vs economic, consumer vs capital, 9; wealth as a stock of economic goods and its contrast with income, 6. A script missing the goods classification or wealth loses those marks.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 7.2 Production in the Short Run (fixed vs variable inputs, short vs long run) (https://openstax.org/books/principles-economics-3e/pages/7-2-production-in-the-short-run)
    {
      slug: "firm-plant-industry-and-inputs",
      title: "Firm, Plant and Industry; Fixed and Variable Inputs",
      objective:
        "By the end of the topic, learners should be able to distinguish a firm, a plant and an industry, and separate fixed inputs from variable inputs (with the short run and long run).",
      estimatedMinutes: 100,
      notes: `## Plant, firm and industry

**Plant** — a single physical unit of production, such as one factory, workshop, mine or farm where production actually takes place.
**Firm** — the business organisation that **owns and controls** production; a firm may own **one plant or several plants**.
**Industry** — the **group of all firms** producing the same or similar products (e.g. the cement industry, the textile industry).

| Term | Meaning | Example |
| --- | --- | --- |
| Plant | One production unit | A single bakery building |
| Firm | The business owning the plants | A bakery company with 3 shops |
| Industry | All firms in the same line | All bakeries in the country |

## Inputs (factors of production used)

**Inputs** — the resources a firm uses to produce output, described by the **production function** Q = f(inputs) which shows how much output different amounts of inputs can produce.

## Fixed and variable inputs

**Fixed input** — a factor that **cannot easily be changed in a short period**, such as a factory building or machinery under lease; its amount sets a limit on output in the short run.
**Variable input** — a factor that **can easily be increased or decreased in a short period**, such as labour or raw materials.

## Short run and long run

**Short run** — the period during which **at least one input is fixed** (e.g. the building cannot yet be changed).
**Long run** — the period long enough that **all inputs are variable** — the firm can build a new plant or leave the industry.
- Whether a period is "short" or "long" depends on the good, not on the calendar: it is defined by whether some input is still fixed.

## Common errors

- **Treating a firm and a plant as the same.** A firm can own several plants.
- **Thinking the short run is a fixed number of months.** It lasts only as long as at least one input stays fixed.
- **Calling labour a fixed input.** Labour is usually variable; the building and machines are usually fixed in the short run.`,
      workedExample: `**Question:** A soap company owns two factories and hires workers weekly; its factory buildings are on a ten-year lease. (a) Identify the plant, the firm and the industry. (b) Classify the buildings and the workers as fixed or variable inputs, and say whether the company is in the short run.

**Solution**

*Step 1 — plant, firm, industry.*
- Each **factory** is a **plant** (a single production unit).
- The **soap company** that owns the two factories is the **firm**.
- All companies making soap form the **soap industry**.

*Step 2 — inputs.*
- The **factory buildings** are on a ten-year lease and cannot be changed quickly — **fixed inputs**.
- The **workers**, hired weekly, can be increased or reduced easily — **variable inputs**.

*Step 3 — short or long run.* Because at least one input (the buildings) is fixed, the company is operating in the **short run**.

**Answer:** Plant = each factory; firm = the soap company; industry = all soap makers. Buildings are fixed inputs, workers are variable inputs, and with a fixed input the company is in the short run.`,
      quiz: [
        { prompt: "A plant is", options: ["all firms in an industry", "a single physical production unit", "the whole economy", "a variable input"], correctIndex: 1, explanation: "A plant is one factory, workshop or farm." },
        { prompt: "A firm is", options: ["one machine", "the business that owns and controls production", "a single product", "a fixed input"], correctIndex: 1, explanation: "A firm may own one or several plants." },
        { prompt: "An industry is", options: ["one plant", "the group of all firms making similar products", "one worker", "a service"], correctIndex: 1, explanation: "An industry is all firms in the same line." },
        { prompt: "A firm can own", options: ["only one plant", "one or several plants", "no plants", "only the industry"], correctIndex: 1, explanation: "Firms may run multiple plants." },
        { prompt: "A fixed input is one that", options: ["changes easily each day", "cannot easily be changed in a short period", "is always labour", "is never used"], correctIndex: 1, explanation: "Fixed inputs such as buildings are hard to change quickly." },
        { prompt: "A variable input is one that", options: ["cannot be changed", "can easily be increased or decreased in a short period", "is always the factory", "sets the output limit"], correctIndex: 1, explanation: "Labour and materials are variable." },
        { prompt: "A factory building under a long lease is usually a", options: ["variable input", "fixed input", "free good", "service"], correctIndex: 1, explanation: "It cannot be changed quickly — fixed." },
        { prompt: "Labour hired weekly is usually a", options: ["fixed input", "variable input", "capital good only", "an industry"], correctIndex: 1, explanation: "Labour can be adjusted easily — variable." },
        { prompt: "The short run is the period during which", options: ["all inputs vary", "at least one input is fixed", "no inputs are used", "the firm closes"], correctIndex: 1, explanation: "Some input is still fixed in the short run." },
        { prompt: "The long run is the period during which", options: ["all inputs are variable", "one input is fixed", "output is zero", "nothing changes"], correctIndex: 0, explanation: "In the long run every input can be changed." },
        { prompt: "Whether a period is short or long depends on", options: ["the calendar months", "whether some input is still fixed", "the price", "the tax rate"], correctIndex: 1, explanation: "It is defined by fixed vs variable inputs, not clock time." },
        { prompt: "All bakeries in a country together form the", options: ["plant", "firm", "bakery industry", "short run"], correctIndex: 2, explanation: "Similar firms make an industry." },
        { prompt: "A single bakery building is a", options: ["firm", "plant", "industry", "variable input"], correctIndex: 1, explanation: "One production unit is a plant." },
        { prompt: "The production function Q = f(inputs) shows", options: ["prices", "how much output different input amounts produce", "taxes", "wealth"], correctIndex: 1, explanation: "It links inputs to output." },
        { prompt: "In the short run, output is limited by the", options: ["variable inputs", "fixed input such as the building", "industry", "price"], correctIndex: 1, explanation: "The fixed input caps short-run output." },
        { prompt: "A company owning three shops is best called a", options: ["plant", "firm with three plants", "industry", "input"], correctIndex: 1, explanation: "One business, several plants — a firm." },
        { prompt: "Which is most likely a variable input?", options: ["The factory", "Heavy machinery under lease", "Raw materials", "The land"], correctIndex: 2, explanation: "Raw materials can be changed quickly." },
        { prompt: "Which is most likely a fixed input in the short run?", options: ["Workers", "Electricity used", "The factory building", "Packaging"], correctIndex: 2, explanation: "The building cannot be changed quickly." },
        { prompt: "In the long run a firm can", options: ["never change plant size", "build a new plant or leave the industry", "only hire workers", "not change output"], correctIndex: 1, explanation: "All inputs, including plant, are variable." },
        { prompt: "A common error is to call", options: ["a building a fixed input", "labour a fixed input", "a firm a business", "materials variable"], correctIndex: 1, explanation: "Labour is usually variable, not fixed." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between a plant, a firm and an industry.", answerKey: "A plant is a single physical unit of production (one factory, workshop or farm). A firm is the business organisation that owns and controls production and may own one or several plants. An industry is the group of all firms producing the same or similar products. Award 3 per correctly distinguished term, plus 1 for a clear example.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between a fixed input and a variable input, with an example of each.", answerKey: "A fixed input cannot easily be changed in a short period (e.g. a factory building or leased machinery) and limits short-run output. A variable input can easily be increased or decreased in a short period (e.g. labour or raw materials). Award 4 per type with a correct example.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "A firm is in the short run when", options: ["all inputs are variable", "at least one input is fixed", "it owns many plants", "it makes a profit"], correctIndex: 1, answerKey: "The short run is defined by at least one fixed input. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why the length of the short run depends on the good rather than on the calendar.", answerKey: "The short run lasts only as long as at least one input remains fixed; the long run begins when all inputs can be varied. How quickly a firm can change its plant differs by industry, so the short run may be weeks for one good and years for another. It is defined by whether an input is still fixed, not by a set number of months. Award marks for the fixed-input definition and the industry-dependence point.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the difference between a firm, a plant and an industry, and between fixed and variable inputs, and relate fixed and variable inputs to the short run and long run.", answerKey: "Award marks for: plant, firm and industry distinguished with examples, 9; fixed vs variable inputs with examples, 8; short run (some input fixed) and long run (all inputs variable), 8; the point that the run length depends on whether an input is still fixed, 5. A script covering only one distinction should not exceed 15.", marks: 30 },
      ],
    },
    // source: LibreTexts Business — Principles of Marketing (OpenStax) 17.1 The Use and Value of Marketing Channels (https://biz.libretexts.org/Bookshelves/Marketing/Principles_of_Marketing_(OpenStax)/03:_Product_Promotion_Price_and_Place/17:_Distribution-_Delivering_Customer_Value/17.01:__The_Use_and_Value_of_Marketing_Channels)
    {
      slug: "producer-wholesaler-retailer",
      title: "Channels of Distribution: Producer, Wholesaler and Retailer",
      objective:
        "By the end of the topic, learners should be able to describe the distinguishing features of the producer, the wholesaler and the retailer, and explain how goods move through the channel of distribution.",
      estimatedMinutes: 100,
      notes: `## The channel of distribution

**Channel (marketing channel) of distribution** — the system of people and organisations, and the activities, that move a good or service **from the producer to the final consumer**.
**Intermediaries (middlemen)** — the wholesalers and retailers who stand between producer and consumer and pass the goods along.

## The producer

**Producer (manufacturer)** — the firm that **makes the good** or grows the crop. It sells in **large quantities**, usually to wholesalers, and concentrates on production rather than on reaching each consumer.

## The wholesaler

**Wholesaler** — an intermediary who **buys in large (bulk) quantities** from producers, **takes ownership** of the goods, stores them, and **breaks bulk** to sell smaller amounts to retailers.
- Functions: buying in bulk, storing (warehousing), breaking bulk, transporting, and sometimes giving credit to retailers.

## The retailer

**Retailer** — an intermediary who **buys from wholesalers (or producers)** and **sells in small quantities directly to the final consumer**. Retailers offer a variety of products in convenient amounts and locations.

## Direct and indirect channels

- **Direct channel:** producer sells straight to the consumer, controlling marketing and price but bearing all distribution costs.
- **Indirect channel:** producer → wholesaler → retailer → consumer; the intermediaries handle storage, transport and selling.

\`\`\`svg Indirect channel of distribution
<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Producer to wholesaler to retailer to consumer">
  <rect x="5" y="30" width="60" height="30" fill="#eef" stroke="#557"/>
  <text x="12" y="49" font-size="10">Producer</text>
  <rect x="90" y="30" width="70" height="30" fill="#eef" stroke="#557"/>
  <text x="97" y="49" font-size="10">Wholesaler</text>
  <rect x="185" y="30" width="60" height="30" fill="#eef" stroke="#557"/>
  <text x="194" y="49" font-size="10">Retailer</text>
  <rect x="270" y="30" width="45" height="30" fill="#eef" stroke="#557"/>
  <text x="276" y="49" font-size="10">Consumer</text>
  <line x1="65" y1="45" x2="88" y2="45" stroke="#333" stroke-width="1.5" marker-end="url(#a)"/>
  <line x1="160" y1="45" x2="183" y2="45" stroke="#333" stroke-width="1.5" marker-end="url(#a)"/>
  <line x1="245" y1="45" x2="268" y2="45" stroke="#333" stroke-width="1.5" marker-end="url(#a)"/>
  <defs><marker id="a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
</svg>
\`\`\`

## Functions intermediaries perform

- **Transactional:** buying, selling and sharing the risk of ownership.
- **Logistical:** storing, handling and transporting goods.
- **Facilitating:** giving credit and passing on market information.
- Intermediaries **reduce the number of transactions**: instead of every producer dealing with every consumer, a few middlemen link them, saving time and cost.

## Common errors

- **Thinking wholesalers sell to consumers.** Wholesalers sell mainly to retailers; retailers sell to consumers.
- **Assuming intermediaries add no value.** They cut the number of transactions and provide storage, transport, credit and information.
- **Confusing bulk-buying with breaking bulk.** Wholesalers buy in bulk from producers and break bulk for retailers.`,
      workedExample: `**Question:** A farmer harvests 10 tonnes of rice. Trace how it reaches a household buying 5 kg, naming each party and one function it performs.

**Solution**

*Step 1 — producer.* The **farmer (producer)** grows the rice and sells the whole harvest in **large quantity** to a wholesaler, concentrating on production.

*Step 2 — wholesaler.* The **wholesaler buys in bulk**, stores the rice in a warehouse, and **breaks bulk** into smaller bags to sell to several retailers; the wholesaler may give the retailers short-term credit.

*Step 3 — retailer.* The **retailer** buys bags from the wholesaler and **sells in small quantities** (e.g. 5 kg) directly to the household, offering a convenient location.

*Step 4 — consumer.* The **household (consumer)** buys the 5 kg for its own use.

**Answer:** Producer (grows and sells in bulk) → wholesaler (buys bulk, stores, breaks bulk) → retailer (sells small amounts) → consumer — an indirect channel of distribution.`,
      quiz: [
        { prompt: "A channel of distribution moves a good from", options: ["consumer to producer", "producer to final consumer", "retailer to wholesaler", "bank to firm"], correctIndex: 1, explanation: "The channel runs producer to consumer." },
        { prompt: "Wholesalers and retailers are together called", options: ["producers", "intermediaries", "consumers", "industries"], correctIndex: 1, explanation: "They are the middlemen in the channel." },
        { prompt: "A producer mainly", options: ["sells to consumers in small amounts", "makes the good and sells in large quantities", "stores goods for retailers", "gives credit to consumers"], correctIndex: 1, explanation: "The producer makes goods and sells in bulk." },
        { prompt: "A wholesaler buys", options: ["small amounts from retailers", "in bulk from producers", "from consumers", "nothing"], correctIndex: 1, explanation: "Wholesalers buy in bulk from producers." },
        { prompt: "Breaking bulk means", options: ["destroying goods", "splitting large quantities into smaller ones", "raising prices", "buying more"], correctIndex: 1, explanation: "Wholesalers break bulk for retailers." },
        { prompt: "A retailer sells", options: ["in bulk to wholesalers", "in small quantities to consumers", "only to producers", "raw materials"], correctIndex: 1, explanation: "Retailers sell small amounts to consumers." },
        { prompt: "In a direct channel, the producer sells", options: ["to a wholesaler", "straight to the consumer", "to a retailer only", "to the government"], correctIndex: 1, explanation: "A direct channel skips intermediaries." },
        { prompt: "The order of an indirect channel is", options: ["consumer, retailer, wholesaler, producer", "producer, wholesaler, retailer, consumer", "retailer, producer, consumer, wholesaler", "producer, retailer, wholesaler, consumer"], correctIndex: 1, explanation: "Goods flow producer → wholesaler → retailer → consumer." },
        { prompt: "A transactional function of intermediaries is", options: ["transporting goods", "buying and selling and sharing ownership risk", "giving information", "manufacturing"], correctIndex: 1, explanation: "Buying/selling and bearing risk is transactional." },
        { prompt: "A logistical function of intermediaries is", options: ["storing and transporting goods", "setting taxes", "growing crops", "printing money"], correctIndex: 0, explanation: "Storage and transport are logistical." },
        { prompt: "A facilitating function of intermediaries is", options: ["making goods", "giving credit and sharing market information", "extracting resources", "consuming goods"], correctIndex: 1, explanation: "Credit and information facilitate trade." },
        { prompt: "Intermediaries add value by", options: ["increasing the number of transactions", "reducing the number of transactions", "removing storage", "banning retailers"], correctIndex: 1, explanation: "A few middlemen cut total transactions." },
        { prompt: "A wholesaler usually sells to", options: ["final consumers", "retailers", "no one", "producers only"], correctIndex: 1, explanation: "Wholesalers sell mainly to retailers." },
        { prompt: "Who takes ownership of goods and stores them in a warehouse?", options: ["The consumer", "The wholesaler", "The producer only", "The tax office"], correctIndex: 1, explanation: "Wholesalers take ownership and store stock." },
        { prompt: "The party that offers a variety of goods in convenient amounts near consumers is the", options: ["producer", "wholesaler", "retailer", "manufacturer"], correctIndex: 2, explanation: "Retailers provide convenient variety." },
        { prompt: "A direct channel gives the producer more", options: ["distribution help", "control over marketing and price", "storage", "credit"], correctIndex: 1, explanation: "Selling direct means more control but more cost." },
        { prompt: "Which is NOT a function of a wholesaler?", options: ["Buying in bulk", "Breaking bulk", "Storing goods", "Manufacturing the good"], correctIndex: 3, explanation: "Manufacturing is the producer's role." },
        { prompt: "Retailers buy their stock mainly from", options: ["consumers", "wholesalers or producers", "banks", "the government"], correctIndex: 1, explanation: "Retailers buy from wholesalers or producers." },
        { prompt: "An example of an indirect channel is", options: ["a farmer selling at his own gate", "producer to wholesaler to retailer to consumer", "a factory shop", "a home baker selling to neighbours"], correctIndex: 1, explanation: "Using intermediaries makes it indirect." },
        { prompt: "A common error is to think that", options: ["retailers sell to consumers", "wholesalers sell directly to consumers", "producers make goods", "intermediaries store goods"], correctIndex: 1, explanation: "Wholesalers sell to retailers, not usually to consumers." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a channel of distribution and describe the role of the producer.", answerKey: "A channel of distribution is the system of people, organisations and activities that move a good or service from the producer to the final consumer. The producer (manufacturer) makes the good or grows the crop and sells it in large quantities, usually to wholesalers, concentrating on production. Award 5 for the channel definition, 5 for the producer's role.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between a wholesaler and a retailer.", answerKey: "A wholesaler buys in bulk from producers, takes ownership, stores the goods and breaks bulk to sell smaller quantities to retailers. A retailer buys from wholesalers (or producers) and sells in small quantities directly to final consumers, offering variety in convenient amounts and locations. Award 4 per role correctly distinguished.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "In an indirect channel of distribution the correct order is", options: ["producer, retailer, wholesaler, consumer", "producer, wholesaler, retailer, consumer", "wholesaler, producer, retailer, consumer", "consumer, retailer, wholesaler, producer"], correctIndex: 1, answerKey: "Goods flow producer → wholesaler → retailer → consumer. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain two functions that intermediaries perform in the channel of distribution.", answerKey: "Any two of: transactional (buying, selling and sharing ownership risk); logistical (storing, handling and transporting goods); facilitating (giving credit and sharing market information); and reducing the number of transactions between producers and consumers. Award 3 marks per function explained.", marks: 6 },
        { type: "ESSAY", prompt: "Describe how goods move from producer to consumer through the channel of distribution, explaining the distinguishing features of the producer, wholesaler and retailer and the value the intermediaries add.", answerKey: "Award marks for: definition of the channel of distribution and intermediaries, 5; producer's features (makes goods, sells in bulk), 5; wholesaler's features (buys bulk, stores, breaks bulk, sells to retailers), 7; retailer's features (buys from wholesaler, sells small quantities to consumers), 7; value added by intermediaries (fewer transactions, storage, transport, credit, information), 6. A script that omits the intermediaries' value should not exceed 20.", marks: 30 },
      ],
    },
    // source: LibreTexts Business — Principles of Marketing (OpenStax) 17.1 The Use and Value of Marketing Channels (functions and challenges of distribution) (https://biz.libretexts.org/Bookshelves/Marketing/Principles_of_Marketing_(OpenStax)/03:_Product_Promotion_Price_and_Place/17:_Distribution-_Delivering_Customer_Value/17.01:__The_Use_and_Value_of_Marketing_Channels). Liberia-specific marketing problems are applied on top of this sourced general framework and flagged in the report.
    {
      slug: "distribution-and-marketing-of-commodities",
      title: "Distribution and Marketing of Commodities and Their Problems",
      objective:
        "By the end of the topic, learners should be able to explain the functions of marketing and distribution and the main problems that hinder the distribution and marketing of commodities.",
      estimatedMinutes: 100,
      notes: `## Marketing and distribution

**Marketing** — all the activities that move goods and services from producers to consumers and satisfy consumer wants, including buying, selling, storage, transport, finance and information.
**Distribution (place)** — the part of marketing that gets the right goods to the right place at the right time through the channel of distribution.

## Functions performed in distribution

- **Transactional:** buying, selling and bearing the risk of holding goods.
- **Logistical:** transport, storage (warehousing) and handling of goods.
- **Facilitating:** providing finance/credit and market information, and grading and packaging goods.
- These functions **create utility**: place utility (goods where they are wanted), time utility (goods when they are wanted) and possession utility (transferring ownership).

## Problems of distribution and marketing

**Poor transport and roads** — bad or few roads raise costs and delay goods; perishable produce spoils before it reaches the market.
**Inadequate storage** — too few warehouses and cold-storage facilities cause losses, especially of food crops and fish.
**Shortage of finance/credit** — traders and farmers lack the capital to buy stock, store it, or wait for better prices.
**Too many middlemen** — long chains of intermediaries can raise the final price without adding value.
**Weak market information** — producers may not know prices or demand in other areas, so goods are sold too cheaply or in the wrong place.
**Small, scattered markets and poor grading** — low, uneven quality and distance from buyers make selling harder.

| Problem | Effect |
| --- | --- |
| Poor roads/transport | Higher cost, spoilage, delay |
| Inadequate storage | Losses of perishable goods |
| Lack of finance | Cannot hold stock or expand |
| Too many middlemen | Higher final prices |
| Weak market information | Goods sold cheaply or in wrong place |

## Improving distribution and marketing

- Build and repair **roads and storage** (warehouses, cold stores).
- Provide **credit** and cooperatives so producers can store and bargain.
- Improve **market information** so producers sell where prices are best.
- **Grade and package** goods to raise quality and value.

## Common errors

- **Thinking marketing is only advertising.** Marketing covers buying, selling, storage, transport, finance and information.
- **Ignoring perishability.** Poor storage and transport ruin food crops and fish before sale.
- **Assuming more middlemen always help.** Overly long chains can raise prices without adding value.`,
      workedExample: `**Question:** A farmer grows tomatoes far from the city on a poor road, with no storage. Identify two distribution problems she faces and suggest one improvement for each.

**Solution**

*Step 1 — problem one: poor transport.* The bad road raises transport cost and delays the tomatoes; being perishable, many spoil before reaching the market. *Improvement:* build or repair the road (and use faster transport) to cut delay and spoilage.

*Step 2 — problem two: inadequate storage.* With no warehouse or cold store, unsold tomatoes rot, forcing her to sell quickly at low prices. *Improvement:* provide storage/cold-storage facilities (perhaps through a cooperative) so she can hold stock and sell when prices are better.

*Step 3 — link.* Both problems reduce the place and time utility that good distribution should create, lowering the farmer's income.

**Answer:** Two problems are poor transport (spoilage and cost) and lack of storage (losses); improvements are better roads/transport and storage facilities such as a cooperative cold store.`,
      quiz: [
        { prompt: "Marketing includes all activities that", options: ["only advertise", "move goods from producers to consumers and satisfy wants", "print money", "set taxes"], correctIndex: 1, explanation: "Marketing covers the whole flow to the consumer." },
        { prompt: "Distribution (place) means getting goods", options: ["cheaply made", "to the right place at the right time", "advertised only", "taxed"], correctIndex: 1, explanation: "Distribution delivers goods where and when wanted." },
        { prompt: "Place utility means goods are", options: ["cheaper", "where they are wanted", "advertised", "graded"], correctIndex: 1, explanation: "Distribution creates place utility." },
        { prompt: "Time utility means goods are available", options: ["at any price", "when they are wanted", "only at night", "in bulk"], correctIndex: 1, explanation: "Storage creates time utility." },
        { prompt: "A logistical function of distribution is", options: ["advertising", "transport and storage", "setting interest rates", "grading only"], correctIndex: 1, explanation: "Transport and storage are logistical." },
        { prompt: "Poor roads and transport tend to cause", options: ["lower costs", "spoilage and higher costs", "more storage", "faster delivery"], correctIndex: 1, explanation: "Bad roads delay goods and spoil produce." },
        { prompt: "Inadequate storage most harms", options: ["metals", "perishable food and fish", "money", "roads"], correctIndex: 1, explanation: "Perishables are lost without storage." },
        { prompt: "A shortage of finance means traders cannot", options: ["buy or hold stock", "eat", "advertise", "grade"], correctIndex: 0, explanation: "Without credit they cannot buy or store stock." },
        { prompt: "Too many middlemen can", options: ["lower the final price", "raise the final price without adding value", "improve roads", "add storage"], correctIndex: 1, explanation: "Long chains raise prices needlessly." },
        { prompt: "Weak market information leads producers to", options: ["always get top prices", "sell too cheaply or in the wrong place", "build roads", "grade goods"], correctIndex: 1, explanation: "Without information, selling is inefficient." },
        { prompt: "Grading and packaging goods helps to", options: ["lower quality", "raise quality and value", "spoil goods", "remove storage"], correctIndex: 1, explanation: "Grading raises quality and value." },
        { prompt: "A facilitating function of distribution is", options: ["transport", "providing finance and market information", "manufacturing", "consuming"], correctIndex: 1, explanation: "Finance and information facilitate trade." },
        { prompt: "Possession utility is created by", options: ["transferring ownership to the buyer", "storing goods", "advertising", "taxing"], correctIndex: 0, explanation: "Selling transfers possession utility." },
        { prompt: "Building warehouses and cold stores mainly reduces", options: ["advertising", "losses of perishable goods", "market information", "grading"], correctIndex: 1, explanation: "Storage cuts spoilage losses." },
        { prompt: "Cooperatives can help producers to", options: ["avoid all sales", "store goods and bargain for better prices", "raise taxes", "remove roads"], correctIndex: 1, explanation: "Cooperatives pool storage and bargaining power." },
        { prompt: "Marketing is more than advertising because it also includes", options: ["only selling", "buying, storage, transport, finance and information", "printing money", "manufacturing only"], correctIndex: 1, explanation: "Marketing covers many activities beyond advertising." },
        { prompt: "Perishable goods are especially hurt by", options: ["good roads", "poor storage and transport", "grading", "market information"], correctIndex: 1, explanation: "They spoil without storage and quick transport." },
        { prompt: "Improving market information helps producers", options: ["sell where prices are best", "lose money", "avoid customers", "stop grading"], correctIndex: 0, explanation: "Better information guides selling to the best market." },
        { prompt: "Which is a problem of distribution?", options: ["Good roads", "Plenty of storage", "Shortage of finance", "Reliable information"], correctIndex: 2, explanation: "Lack of finance hampers distribution." },
        { prompt: "The three main groups of distribution functions are transactional, logistical and", options: ["facilitating", "political", "monetary", "primary"], correctIndex: 0, explanation: "Facilitating functions include finance and information." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define marketing and distribution (place), and state one function distribution performs.", answerKey: "Marketing is all the activities that move goods and services from producers to consumers and satisfy consumer wants (buying, selling, storage, transport, finance, information). Distribution (place) is the part of marketing that gets goods to the right place at the right time through the channel of distribution. A function: transactional (buying/selling), logistical (transport/storage) or facilitating (finance/information). Award 4 for marketing, 4 for distribution, 2 for a function.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "State and explain three problems that hinder the distribution and marketing of commodities.", answerKey: "Any three of: poor transport/roads (higher cost, spoilage, delay); inadequate storage (losses of perishables); shortage of finance/credit (cannot hold or expand stock); too many middlemen (higher final prices); weak market information (goods sold cheaply or in the wrong place); small scattered markets/poor grading. Award marks for three problems each with its effect.", marks: 9 },
        { type: "MULTIPLE_CHOICE", prompt: "Which problem most directly causes perishable food to be lost before sale?", options: ["Too much market information", "Inadequate storage and poor transport", "Good roads", "Grading of goods"], correctIndex: 1, answerKey: "Poor storage and transport spoil perishables. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Suggest two ways of improving the distribution and marketing of commodities.", answerKey: "Any two of: build and repair roads and storage (warehouses, cold stores); provide credit and cooperatives so producers can store and bargain; improve market information so producers sell where prices are best; grade and package goods to raise quality and value. Award 3 marks per valid improvement.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the functions of distribution and discuss the main problems that hinder the distribution and marketing of commodities, suggesting how they can be reduced.", answerKey: "Award marks for: functions of distribution — transactional, logistical, facilitating — and the utilities they create, 8; problems — poor transport, inadequate storage, lack of finance, too many middlemen, weak market information (any four explained), 12; suggested improvements — roads/storage, credit/cooperatives, information, grading, 8; a clear structure, 2. A script listing problems without effects or solutions should not exceed 18.", marks: 30 },
      ],
    },
  ],
};
