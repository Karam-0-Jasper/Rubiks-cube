import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 11,
// Semester Two, Period VI: The Role of Agriculture in Economic Development.
// CONTENTS: (1) Agriculture products in Liberia/West Africa — cash crops, food
// crops, livestock, fisheries; (2) Challenges of agriculture production in
// Liberia/West Africa — land, subsidy, storage, education, infrastructure
// (roads), technology. Objectives also require the importance of agriculture to
// economic development and recommendations for government agriculture policy, so
// the period is taught as four topics: products, importance, challenges and
// recommendations. Sourced from LibreTexts (Economics — Boundless Agriculture
// Economics 37.1; Human/Cultural Geography — agricultural geography). The general
// framework (crop types, agriculture's economic roles, and the challenges of
// farming in developing regions) is sourced; specific Liberia/West Africa product
// and policy detail is applied on top and flagged in the report.
export const economicsG11P6: PeriodContent = {
  grade: 11,
  number: 6,
  title: "The Role of Agriculture in Economic Development",
  summary:
    "Period VI of the MoE Grade 11 Economics syllabus. Learners identify the main agricultural products of Liberia and West Africa — cash crops, food crops, livestock and fisheries — and explain the importance of agriculture to economic development through food, jobs, raw materials, exports and government revenue. They analyse the challenges facing farming (land, credit and subsidy, storage, education, infrastructure and technology) and propose recommendations to improve government agricultural policy.",
  topics: [
    // source: LibreTexts Social Sci — Cultural Geography 13.2.4 Commercial Agriculture and 13.3.4 Food Key Terms (cash crops, food/subsistence crops, commercial vs subsistence) (https://socialsci.libretexts.org/Courses/Coalinga_College/Cultural_Geography__(C-ID_GEOG_120)/13:_Agricultural_Geography_Natural_Resources_and_Sustainable_Development/13.02:_Agricultural_Geography/13.2.04:_Commercial_Agriculture). Specific Liberia/West Africa product examples are applied on top and flagged in the report.
    {
      slug: "agricultural-products-of-liberia-and-west-africa",
      title: "Agricultural Products: Cash Crops, Food Crops, Livestock and Fisheries",
      objective:
        "By the end of the topic, learners should be able to distinguish cash crops, food crops, livestock and fisheries, and give examples of each in Liberia and West Africa.",
      estimatedMinutes: 110,
      notes: `## Types of agricultural product

Agricultural production in Liberia and West Africa is grouped into four kinds of product.

**Cash crops** — crops grown mainly **to be sold for profit** (for the market or export), rather than eaten by the grower's own family. They are the produce of **commercial agriculture**.
- West African examples: **rubber, cocoa, coffee, oil palm, sugar cane and cotton**; rubber and oil palm are important cash crops in Liberia.

**Food crops** — crops grown mainly **to feed people**, often the farmer's own family (**subsistence agriculture**) with any surplus sold locally.
- West African examples: **rice, cassava, yam, maize, plantain and vegetables**; rice and cassava are staple food crops in Liberia.

**Livestock** — **farm animals** kept for meat, milk, eggs, hides or work.
- Examples: **cattle, goats, sheep, pigs and poultry (chickens)**.

**Fisheries** — the **catching or farming of fish** and other water animals, from rivers, lakes, lagoons and the sea (marine fishing) or from fish ponds (aquaculture).
- Fisheries provide protein and income, especially along the coast and rivers.

## Cash crops versus food crops

| Feature | Cash crops | Food crops |
| --- | --- | --- |
| Main purpose | Sold for profit / export | Feed the grower and local people |
| System | Commercial agriculture | Often subsistence agriculture |
| Examples | Rubber, cocoa, coffee, oil palm | Rice, cassava, yam, maize |

## Export and import products

- Liberia and its neighbours **export** cash crops such as rubber, cocoa and coffee to earn foreign exchange.
- They often **import** food such as rice when local food-crop output is not enough, so raising food-crop production reduces the food import bill.

## Common errors

- **Thinking cash crops are always exported and food crops never sold.** Cash crops may be sold at home too, and surplus food crops are also sold; the difference is the *main purpose*.
- **Leaving out livestock and fisheries.** Agriculture includes animals and fish, not only crops.
- **Confusing subsistence with commercial farming.** Subsistence farming feeds the family; commercial farming produces mainly for sale.`,
      workedExample: `**Question:** Classify each as a cash crop, food crop, livestock or fishery, and say whether it is mainly for sale or for eating: (a) rubber on a plantation; (b) rice grown by a family for its meals; (c) a herd of goats; (d) tilapia raised in a pond.

**Solution**

*Step 1 — rubber.* Rubber is grown to be **sold/exported** for profit, so it is a **cash crop** (commercial agriculture), mainly for sale.

*Step 2 — rice for the family.* Rice grown to feed the household is a **food crop** (subsistence agriculture), mainly for eating, with any surplus sold.

*Step 3 — goats.* A herd of goats is **livestock** — farm animals kept for meat, milk or hides.

*Step 4 — tilapia in a pond.* Raising fish in a pond is **fisheries (aquaculture)**, providing protein and income.

**Answer:** (a) cash crop (for sale), (b) food crop (for eating), (c) livestock, (d) fisheries — showing the four kinds of agricultural product.`,
      quiz: [
        { prompt: "Cash crops are grown mainly", options: ["to feed the farmer's family", "to be sold for profit", "for decoration", "for storage only"], correctIndex: 1, explanation: "Cash crops are sold for profit." },
        { prompt: "Food crops are grown mainly", options: ["for export only", "to feed people, often the family", "to make rubber", "for fuel"], correctIndex: 1, explanation: "Food crops feed people." },
        { prompt: "Livestock refers to", options: ["food crops", "farm animals kept for meat, milk or hides", "fish ponds", "cash crops"], correctIndex: 1, explanation: "Livestock are farm animals." },
        { prompt: "Fisheries involve", options: ["growing rice", "catching or farming fish and water animals", "keeping cattle", "growing cocoa"], correctIndex: 1, explanation: "Fisheries are about fish and water animals." },
        { prompt: "Which is a West African cash crop?", options: ["Rice", "Cassava", "Rubber", "Yam"], correctIndex: 2, explanation: "Rubber is a leading cash crop." },
        { prompt: "Which is a staple food crop in Liberia?", options: ["Cocoa", "Rice", "Rubber", "Cotton"], correctIndex: 1, explanation: "Rice is a staple food crop." },
        { prompt: "Cash crops are the produce of", options: ["subsistence agriculture", "commercial agriculture", "fisheries only", "livestock only"], correctIndex: 1, explanation: "Cash crops come from commercial farming." },
        { prompt: "Subsistence agriculture mainly produces", options: ["exports", "food to feed the farmer's family", "rubber for factories", "foreign exchange"], correctIndex: 1, explanation: "Subsistence farming feeds the family." },
        { prompt: "Poultry and cattle are examples of", options: ["food crops", "cash crops", "livestock", "fisheries"], correctIndex: 2, explanation: "They are farm animals — livestock." },
        { prompt: "Raising fish in a pond is called", options: ["marine fishing", "aquaculture", "livestock keeping", "cropping"], correctIndex: 1, explanation: "Pond fish farming is aquaculture." },
        { prompt: "Cocoa and coffee are usually", options: ["food crops", "cash crops", "livestock", "fisheries"], correctIndex: 1, explanation: "They are grown for sale/export — cash crops." },
        { prompt: "Cassava and yam are usually", options: ["cash crops", "food crops", "livestock", "fisheries"], correctIndex: 1, explanation: "They are grown mainly for food." },
        { prompt: "Countries export cash crops mainly to earn", options: ["food", "foreign exchange", "livestock", "rain"], correctIndex: 1, explanation: "Cash-crop exports earn foreign exchange." },
        { prompt: "Raising food-crop output helps reduce the", options: ["export of rubber", "food import bill", "number of farms", "fish catch"], correctIndex: 1, explanation: "More local food means fewer food imports." },
        { prompt: "The main difference between cash and food crops is their", options: ["colour", "main purpose (sale vs eating)", "size", "planting month"], correctIndex: 1, explanation: "Purpose distinguishes them." },
        { prompt: "Marine fishing takes place in the", options: ["fish pond", "sea", "farm", "forest"], correctIndex: 1, explanation: "Marine fishing is sea fishing." },
        { prompt: "Which statement is TRUE?", options: ["Cash crops are never sold at home", "Surplus food crops can also be sold", "Livestock are crops", "Fisheries grow rice"], correctIndex: 1, explanation: "Surplus food crops are sold too; the difference is the main purpose." },
        { prompt: "Oil palm in Liberia is best classed as a", options: ["food crop", "cash crop", "livestock", "fishery"], correctIndex: 1, explanation: "Oil palm is grown commercially — a cash crop." },
        { prompt: "Goats, sheep and pigs are all", options: ["fisheries", "livestock", "food crops", "cash crops"], correctIndex: 1, explanation: "They are farm animals — livestock." },
        { prompt: "The four kinds of agricultural product studied are cash crops, food crops, livestock and", options: ["minerals", "fisheries", "roads", "banks"], correctIndex: 1, explanation: "Fisheries complete the four kinds." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between cash crops and food crops, with two examples of each.", answerKey: "Cash crops are grown mainly to be sold for profit or export (commercial agriculture), e.g. rubber, cocoa, coffee, oil palm. Food crops are grown mainly to feed people, often the farmer's family (subsistence agriculture), e.g. rice, cassava, yam, maize. Award 3 for each definition with 2 examples.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Define livestock and fisheries, giving an example of each.", answerKey: "Livestock are farm animals kept for meat, milk, eggs, hides or work, e.g. cattle, goats or poultry. Fisheries are the catching or farming of fish and other water animals from rivers, lakes or the sea, or from fish ponds (aquaculture), e.g. tilapia. Award 4 per term with example.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Rubber grown on a plantation for export is best classed as a", options: ["food crop", "cash crop", "livestock", "fishery"], correctIndex: 1, answerKey: "Rubber is grown for sale/export — a cash crop. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain how raising food-crop production can reduce a country's food import bill.", answerKey: "When local farmers grow more food crops such as rice and cassava, the country can feed more of its people from its own output and needs to buy less food from abroad, so the food import bill falls, saving foreign exchange. Award marks for the more-local-food point and the reduced-imports/foreign-exchange link.", marks: 6 },
        { type: "ESSAY", prompt: "Describe the main types of agricultural product in Liberia and West Africa and explain how they contribute to the economy.", answerKey: "Award marks for: cash crops (sold/exported for profit) with examples, 7; food crops (feed the people) with examples, 7; livestock with examples, 6; fisheries with examples, 6; how these contribute — export earnings from cash crops, food security from food crops, protein and income from livestock and fisheries, 4. A script covering fewer than three product types loses proportionally.", marks: 30 },
      ],
    },
    // source: LibreTexts Social Sci — Economics (Boundless) 37.1 Introduction to the Agriculture Economics (agriculture as a substantial part of GDP and a core necessity) (https://socialsci.libretexts.org/Bookshelves/Economics/Introductory_Comprehensive_Economics/Economics_(Boundless)/37:_Agriculture_Economics/37.01:_Introduction_to_the_Agriculture_Economics)
    {
      slug: "importance-of-agriculture-in-economic-development",
      title: "The Importance of Agriculture in Economic Development",
      objective:
        "By the end of the topic, learners should be able to explain the roles agriculture plays in economic development — food, employment, raw materials, exports, government revenue and a market for industry.",
      estimatedMinutes: 110,
      notes: `## Agriculture and development

Agriculture is a **critical component of any national economy** and a **core necessity for citizens**. In low-income, agricultural nations it forms a **much larger share of national output (GDP)** than in developed economies, and it employs most of the labour force. Historically, until the Industrial Revolution the vast majority of people worked in agriculture, and agriculture has been an important driver of growth in the **early stages of development**.

## The roles of agriculture

**Food supply and food security** — agriculture feeds the population; in developing countries a poor harvest can sharply reduce the food supply, so reliable farming secures food.
**Employment** — farming provides work and incomes for a large share of the people, especially in rural areas.
**Raw materials for industry** — crops and animals supply inputs to factories (rubber, cotton, oil palm, hides, timber), linking agriculture to manufacturing.
**Foreign exchange from exports** — selling cash crops abroad earns foreign currency needed to buy imports and capital goods.
**Government revenue** — taxes and duties on farm output and exports help fund public spending.
**A market for industrial goods** — as farmers earn income, they buy tools, fertiliser and consumer goods, giving industry a home market.
**Source of savings and capital** — profits from agriculture can be invested in other sectors, helping the economy diversify.

| Role | Contribution to development |
| --- | --- |
| Food supply | Feeds the people; food security |
| Employment | Jobs and incomes, mainly rural |
| Raw materials | Inputs for industry |
| Exports | Foreign exchange earnings |
| Government revenue | Taxes and export duties |
| Market and savings | Demand for industry; capital to invest |

## Why it matters more in developing economies

- Agriculture is a **larger share of GDP and employment** in low-income countries, so its growth strongly affects overall development.
- A strong farm sector can **feed the towns**, supply industry, and earn the foreign exchange that pays for industrialisation.

## Common errors

- **Thinking agriculture only means growing food.** It also supplies raw materials, exports, revenue and a market for industry.
- **Underrating its share in poor countries.** Agriculture is a much larger part of output and jobs in developing economies than in rich ones.
- **Ignoring the link to industry.** Farm incomes and raw materials help industry to grow.`,
      workedExample: `**Question:** A developing country wants to grow its economy. Explain three ways its agriculture supports development.

**Solution**

*Step 1 — food and food security.* Agriculture feeds the population; a reliable harvest keeps the food supply steady, freeing the country from costly food imports and preventing shortages.

*Step 2 — foreign exchange from exports.* By exporting cash crops such as rubber and cocoa, the country earns **foreign currency**, which it uses to import machinery and capital goods needed to industrialise.

*Step 3 — raw materials and a market for industry.* Farm output supplies **raw materials** (rubber, cotton, hides) to factories, while farmers' incomes create **demand** for tools, fertiliser and consumer goods, giving industry a home market.

*Step 4 — link.* Together these roles let agriculture feed the towns, supply industry and pay for development — which is why farming matters most in the early stages of growth.

**Answer:** Agriculture supports development by supplying food (security), earning foreign exchange through exports, and providing raw materials and a market for industry.`,
      quiz: [
        { prompt: "In low-income agricultural nations, agriculture's share of GDP is", options: ["smaller than in rich countries", "larger than in rich countries", "always zero", "the same everywhere"], correctIndex: 1, explanation: "Agriculture is a larger share of GDP in poor countries." },
        { prompt: "Agriculture is described as a core necessity because it", options: ["makes cars", "feeds the population", "prints money", "builds roads"], correctIndex: 1, explanation: "It provides the food people need." },
        { prompt: "Food security means", options: ["locking food away", "a reliable supply of food", "exporting all food", "banning imports"], correctIndex: 1, explanation: "Security is a dependable food supply." },
        { prompt: "Agriculture provides most employment in", options: ["developed cities", "rural areas of developing countries", "banks", "factories only"], correctIndex: 1, explanation: "Farming employs many rural people." },
        { prompt: "Rubber and cotton from farms are examples of", options: ["food only", "raw materials for industry", "foreign exchange", "taxes"], correctIndex: 1, explanation: "They are industrial raw materials." },
        { prompt: "Exporting cash crops earns", options: ["food imports", "foreign exchange", "livestock", "rain"], correctIndex: 1, explanation: "Exports bring in foreign currency." },
        { prompt: "Taxes and duties on farm output give the government", options: ["food", "revenue", "roads", "seeds"], correctIndex: 1, explanation: "They provide government revenue." },
        { prompt: "As farmers earn income, they provide industry with", options: ["nothing", "a market for its goods", "free labour only", "less demand"], correctIndex: 1, explanation: "Farm incomes create demand for industrial goods." },
        { prompt: "Profits from agriculture can be a source of", options: ["savings and capital for other sectors", "food shortages", "unemployment", "imports only"], correctIndex: 0, explanation: "Farm profits can be invested elsewhere." },
        { prompt: "Historically, before the Industrial Revolution, most people worked in", options: ["factories", "agriculture", "banks", "offices"], correctIndex: 1, explanation: "Agriculture employed the vast majority." },
        { prompt: "Agriculture is an important driver of growth in the", options: ["late stages only", "early stages of development", "space age", "service age only"], correctIndex: 1, explanation: "It drives early development." },
        { prompt: "Foreign exchange earned from exports is used to buy", options: ["nothing", "imports and capital goods", "more farmland only", "votes"], correctIndex: 1, explanation: "Foreign currency pays for imports and machinery." },
        { prompt: "A poor harvest in a developing country can", options: ["raise the food supply", "sharply reduce the food supply", "have no effect", "lower prices only"], correctIndex: 1, explanation: "Bad harvests cut the food supply." },
        { prompt: "Which links agriculture to manufacturing?", options: ["Supplying raw materials to factories", "Printing money", "Building schools", "Holding a census"], correctIndex: 0, explanation: "Farm raw materials feed industry." },
        { prompt: "Agriculture matters more in developing economies because it is a larger share of", options: ["exports only", "GDP and employment", "the census", "the tax code"], correctIndex: 1, explanation: "It is a bigger part of output and jobs there." },
        { prompt: "A strong farm sector can feed the towns and supply", options: ["nothing", "industry with materials and foreign exchange", "only the farmers", "only exports"], correctIndex: 1, explanation: "It supports industry and earns foreign exchange." },
        { prompt: "Which is NOT a role of agriculture in development?", options: ["Food supply", "Raw materials", "Foreign exchange", "Setting interest rates"], correctIndex: 3, explanation: "Interest rates are set by monetary authorities, not farming." },
        { prompt: "Reducing food imports through local farming saves", options: ["foreign exchange", "livestock", "roads", "rain"], correctIndex: 0, explanation: "Growing more food saves foreign currency." },
        { prompt: "The demand farmers create for tools and fertiliser gives industry a", options: ["home market", "tax", "harvest", "census"], correctIndex: 0, explanation: "Farm spending is a home market for industry." },
        { prompt: "Agriculture supports development through food, jobs, raw materials, exports, revenue and", options: ["a market for industry", "higher taxes only", "fewer people", "no savings"], correctIndex: 0, explanation: "It also provides a market for industrial goods." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State four roles agriculture plays in economic development.", answerKey: "Any four of: food supply and food security; employment and incomes; raw materials for industry; foreign exchange from exports; government revenue (taxes/duties); a market for industrial goods; source of savings/capital. Award 2.5 marks per correct role.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Explain why agriculture is more important to a developing economy than to a developed one.", answerKey: "In developing economies agriculture forms a much larger share of GDP and employs most of the labour force, so its performance strongly affects overall output, incomes and development. In developed economies it is a small share of GDP and employment. A strong farm sector in a developing country feeds the towns, supplies industry and earns the foreign exchange needed to industrialise. Award marks for the larger GDP/employment share and the development link.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Selling cocoa and rubber abroad mainly provides the country with", options: ["food imports", "foreign exchange", "more farmland", "livestock"], correctIndex: 1, answerKey: "Exporting cash crops earns foreign exchange. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain how agriculture provides both raw materials and a market for industry.", answerKey: "Agriculture supplies factories with raw materials such as rubber, cotton, oil palm and hides, which industry processes into finished goods. At the same time, farmers who earn income buy tools, fertiliser and consumer goods, creating demand — a home market — for industrial products. So agriculture supports industry from both the supply and the demand side. Award marks for the raw-materials role and the market role.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss the importance of agriculture in the economic development of a country such as Liberia.", answerKey: "Award marks for: food supply and food security, 5; employment and rural incomes, 5; raw materials for industry, 5; foreign exchange from cash-crop exports, 5; government revenue and a market/savings for industry, 6; the point that agriculture is a larger share of GDP and jobs in developing countries and drives early growth, 4. A script listing fewer than four roles loses proportionally.", marks: 30 },
      ],
    },
    // source: LibreTexts Social Sci — Human Geography (Dorrell and Henderson) 10.2 Agricultural Practices (subsistence farming: small plots, low technology, limited inputs) (https://socialsci.libretexts.org/Bookshelves/Geography_(Human)/Introduction_to_Human_Geography_(Dorrell_and_Henderson)/10:_Agriculture_and_Food/10.02:_Agricultural_Practices) and Economics (Boundless) 37.1 Introduction to the Agriculture Economics (https://socialsci.libretexts.org/Bookshelves/Economics/Introductory_Comprehensive_Economics/Economics_(Boundless)/37:_Agriculture_Economics/37.01:_Introduction_to_the_Agriculture_Economics). The specific challenge list (land, subsidy, storage, education, infrastructure, technology) follows the curriculum and is applied on the sourced framework; flagged in the report.
    {
      slug: "challenges-of-agricultural-production",
      title: "Challenges of Agricultural Production in Liberia and West Africa",
      objective:
        "By the end of the topic, learners should be able to identify and explain the main challenges facing agricultural production — land, credit/subsidy, storage, education, infrastructure and technology.",
      estimatedMinutes: 100,
      notes: `## Why farming under-performs

Much West African farming is small-scale **subsistence agriculture** on **small plots**, using **simple tools, limited inputs and low technology**, so output per farmer is low. Six related challenges hold production back.

## The main challenges

**Land** — insecure land tenure, fragmented and small holdings, and loss of soil fertility reduce output. Farmers with no secure title are reluctant to invest, and small scattered plots are hard to farm efficiently.
**Subsidy and credit (finance)** — farmers lack **credit and government subsidies** to buy seeds, fertiliser and equipment, so they cannot expand or modernise. Without finance, better inputs stay out of reach.
**Storage** — poor storage and few processing facilities cause heavy **post-harvest losses**, especially of perishable food crops and fish, and force farmers to sell quickly at low prices.
**Education (extension and skills)** — low levels of farmer education and weak **agricultural extension** (advice services) mean improved methods spread slowly.
**Infrastructure (roads)** — bad or few roads raise transport costs, delay produce, and cut farmers off from markets; poor water and power supply add to the problem.
**Technology** — reliance on simple hand tools and traditional methods, with little machinery, irrigation or improved seed, keeps yields and productivity low.

| Challenge | Effect on production |
| --- | --- |
| Land (tenure, small plots) | Low investment and efficiency |
| Subsidy / credit | Cannot buy inputs or expand |
| Storage | Post-harvest losses, low prices |
| Education / extension | Slow spread of better methods |
| Infrastructure (roads) | High cost, spoilage, poor market access |
| Technology | Low yields and productivity |

## How the challenges connect

- The challenges reinforce one another: without credit a farmer cannot buy technology; without roads, produce cannot reach the market; without storage, surpluses are lost.
- Together they keep productivity, incomes and food output low.

## Common errors

- **Blaming only the weather.** Land tenure, finance, storage, roads and technology are the deeper causes.
- **Treating the problems separately.** They are linked — a weakness in one worsens the others.
- **Ignoring post-harvest losses.** Poor storage wastes crops already grown.`,
      workedExample: `**Question:** A rice farmer in a remote area harvests a good crop but earns little and cannot expand. Identify three challenges she faces and explain how each hurts her.

**Solution**

*Step 1 — poor roads (infrastructure).* Her area has bad roads, so getting rice to market is **costly and slow**, and some spoils on the way; she is nearly cut off from buyers and must accept low prices.

*Step 2 — lack of storage.* With no proper storage, she cannot hold the rice for a better price, so **post-harvest losses** mount and she is forced to sell quickly and cheaply.

*Step 3 — lack of credit/subsidy.* Without credit or a subsidy she cannot buy improved seed, fertiliser or equipment, so she **cannot raise yields or expand** next season.

*Step 4 — link.* The three problems reinforce one another: poor roads and no storage lower her income, and without finance she cannot invest to break out of low productivity.

**Answer:** She is held back by poor roads (high cost, spoilage), lack of storage (post-harvest losses, low prices) and lack of credit/subsidy (cannot buy inputs or expand) — linked challenges that keep her income low.`,
      quiz: [
        { prompt: "Much West African farming is small-scale", options: ["commercial agriculture", "subsistence agriculture on small plots", "factory farming", "fishing only"], correctIndex: 1, explanation: "It is largely subsistence on small plots with low technology." },
        { prompt: "Insecure land tenure discourages farmers from", options: ["eating", "investing in their land", "selling crops", "moving"], correctIndex: 1, explanation: "Without secure title, farmers avoid investment." },
        { prompt: "Small, fragmented holdings are", options: ["easy to farm efficiently", "hard to farm efficiently", "always fertile", "irrelevant"], correctIndex: 1, explanation: "Scattered small plots reduce efficiency." },
        { prompt: "A lack of credit and subsidy means farmers cannot", options: ["harvest", "buy seeds, fertiliser and equipment", "eat their crops", "own land"], correctIndex: 1, explanation: "Without finance they cannot afford better inputs." },
        { prompt: "Poor storage mainly causes", options: ["higher yields", "post-harvest losses", "lower transport cost", "more credit"], correctIndex: 1, explanation: "Bad storage wastes crops after harvest." },
        { prompt: "Post-harvest losses are worst for", options: ["stored metals", "perishable food crops and fish", "money", "roads"], correctIndex: 1, explanation: "Perishables spoil without storage." },
        { prompt: "Weak agricultural extension means", options: ["fast spread of new methods", "slow spread of improved methods", "more roads", "more credit"], correctIndex: 1, explanation: "Poor advice services slow the spread of better methods." },
        { prompt: "Bad or few roads raise", options: ["yields", "transport costs and spoilage", "credit", "education"], correctIndex: 1, explanation: "Poor roads cost more and spoil produce." },
        { prompt: "Reliance on simple hand tools reflects a challenge of", options: ["storage", "technology", "land tenure", "education"], correctIndex: 1, explanation: "Low technology keeps yields low." },
        { prompt: "Which challenge relates to finance?", options: ["Storage", "Subsidy and credit", "Roads", "Land tenure"], correctIndex: 1, explanation: "Subsidy and credit are the finance challenge." },
        { prompt: "Low farmer education is a challenge because it", options: ["speeds up new methods", "slows the adoption of better methods", "builds roads", "adds storage"], correctIndex: 1, explanation: "Less education slows improvement." },
        { prompt: "The challenges are best described as", options: ["separate and unrelated", "linked and reinforcing one another", "only about weather", "solved already"], correctIndex: 1, explanation: "They interact and worsen each other." },
        { prompt: "Without roads, produce", options: ["reaches markets easily", "cannot reach the market well", "needs no storage", "sells at high prices"], correctIndex: 1, explanation: "Poor roads cut farmers off from markets." },
        { prompt: "Without storage, surpluses are", options: ["kept safely", "lost", "exported easily", "taxed"], correctIndex: 1, explanation: "Poor storage wastes surpluses." },
        { prompt: "Loss of soil fertility is part of the challenge of", options: ["technology", "land", "roads", "credit"], correctIndex: 1, explanation: "Soil fertility is a land challenge." },
        { prompt: "Little machinery, irrigation or improved seed keeps", options: ["yields low", "yields high", "roads good", "credit plentiful"], correctIndex: 0, explanation: "Low technology means low yields." },
        { prompt: "Blaming only the weather is a mistake because the deeper causes include", options: ["land, finance, storage, roads and technology", "only rainfall", "only sunshine", "nothing"], correctIndex: 0, explanation: "Structural problems underlie low output." },
        { prompt: "A farmer forced to sell quickly at low prices most likely lacks", options: ["good storage", "a census", "a passport", "a bank account only"], correctIndex: 0, explanation: "No storage forces quick, cheap sales." },
        { prompt: "Which is a land-related challenge?", options: ["Insecure tenure and fragmented plots", "No credit", "Poor roads", "Low education"], correctIndex: 0, explanation: "Tenure and plot size are land challenges." },
        { prompt: "The six challenges listed are land, subsidy/credit, storage, education, infrastructure and", options: ["technology", "weather", "population", "money supply"], correctIndex: 0, explanation: "Technology completes the list." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State and explain three challenges facing agricultural production in Liberia or West Africa.", answerKey: "Any three of: land (insecure tenure, small/fragmented plots, low fertility → low investment/efficiency); subsidy/credit (no finance to buy inputs or expand); storage (post-harvest losses, forced low-price sales); education/extension (slow spread of better methods); infrastructure/roads (high cost, spoilage, poor market access); technology (low yields from simple tools). Award marks for three challenges each with its effect.", marks: 9 },
        { type: "SHORT_ANSWER", prompt: "Explain how poor storage and poor roads together reduce a farmer's income.", answerKey: "Poor storage causes post-harvest losses and forces the farmer to sell quickly at low prices; poor roads raise transport costs, delay produce so it spoils, and cut the farmer off from better markets. Together they lower the quantity sold and the price received, reducing income. Award marks for the storage effect, the roads effect, and the combined income loss.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "A farmer who cannot buy improved seed or fertiliser most directly lacks", options: ["good roads", "credit or subsidy", "storage", "education"], correctIndex: 1, answerKey: "Lack of credit/subsidy prevents buying better inputs. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why the challenges facing agriculture are said to reinforce one another.", answerKey: "The challenges are linked: without credit a farmer cannot buy technology; without roads produce cannot reach the market; without storage surpluses are lost. A weakness in one worsens the others, so together they keep productivity, incomes and food output low. Award marks for showing at least two links and the combined low-productivity outcome.", marks: 6 },
        { type: "ESSAY", prompt: "Analyse the main challenges that hinder agricultural production in Liberia and West Africa, and show how they are connected.", answerKey: "Award marks for: land (tenure, plot size, fertility), 5; subsidy/credit (finance for inputs), 5; storage (post-harvest losses), 5; education/extension, 4; infrastructure/roads, 5; technology (low yields), 4; a clear point that the challenges reinforce one another to keep productivity and incomes low, 2. A script listing challenges without explaining their effects should not exceed 18.", marks: 30 },
      ],
    },
    // source: LibreTexts Social Sci — Economics (Boundless) 37.1 Introduction to the Agriculture Economics (subsidies and agricultural policy) (https://socialsci.libretexts.org/Bookshelves/Economics/Introductory_Comprehensive_Economics/Economics_(Boundless)/37:_Agriculture_Economics/37.01:_Introduction_to_the_Agriculture_Economics). Recommendations are the direct remedies to the sourced challenges, applied to the Liberia/West Africa context and flagged in the report.
    {
      slug: "recommendations-for-agriculture-policy",
      title: "Recommendations to Improve Government Agricultural Policy",
      objective:
        "By the end of the topic, learners should be able to propose and justify measures a government can take to overcome the challenges facing agriculture.",
      estimatedMinutes: 100,
      notes: `## From challenges to solutions

Each recommendation is a **direct remedy** for one of the challenges facing agriculture; governments commonly support farming through policies such as **subsidies, credit and investment in infrastructure**.

## Recommended measures

**Land reform and secure tenure** — give farmers **secure land titles** and help consolidate fragmented plots so they will invest in their land and farm larger, more efficient holdings; encourage soil conservation to protect fertility.
**Credit and subsidies (finance)** — provide **affordable credit** (through banks, cooperatives and micro-finance) and **subsidies** on seeds, fertiliser and equipment so farmers can buy better inputs and expand.
**Storage and processing** — build **warehouses, cold stores and processing plants** to cut post-harvest losses and let farmers hold produce for better prices.
**Education, training and extension** — expand **agricultural extension services**, farmer training and rural education so improved methods spread and farmers use them well.
**Infrastructure (roads, water, power)** — build and repair **feeder roads**, and improve rural water and electricity, so produce reaches markets cheaply and quickly.
**Technology and research** — supply and promote **improved seeds, irrigation, fertiliser and machinery**, and fund **agricultural research** to raise yields.
**Cooperatives and marketing** — encourage **farmers' cooperatives** to pool resources, share storage and transport, bargain for better prices, and access credit and markets.
**Price support and stable markets** — use fair **guaranteed prices** or marketing boards so farmers have a stable income and an incentive to produce.

| Challenge | Recommended remedy |
| --- | --- |
| Land | Secure tenure, consolidation, conservation |
| Finance | Credit and subsidies |
| Storage | Warehouses, cold stores, processing |
| Education | Extension services and training |
| Roads | Build and repair feeder roads |
| Technology | Improved seed, irrigation, machinery, research |

## Common errors

- **Suggesting vague solutions.** Match each remedy to a specific challenge (roads for market access, credit for inputs).
- **Relying on one measure only.** A single policy cannot fix linked problems; a package is needed.
- **Forgetting cooperatives.** Pooling through cooperatives helps small farmers gain credit, storage and bargaining power.`,
      workedExample: `**Question:** A government wants to raise farm output. For three challenges — lack of finance, poor storage and poor roads — recommend one measure each and justify it.

**Solution**

*Step 1 — lack of finance.* Provide **affordable credit and input subsidies** through banks and cooperatives. This lets farmers buy improved seed, fertiliser and equipment they otherwise cannot afford, so they can raise yields and expand.

*Step 2 — poor storage.* Build **warehouses and cold stores** (and processing plants). This cuts post-harvest losses and lets farmers hold produce until prices are better, raising their incomes.

*Step 3 — poor roads.* Build and repair **feeder roads** linking farms to markets. This lowers transport costs, reduces spoilage and connects farmers to buyers, so more produce is sold at fair prices.

*Step 4 — link.* Because the challenges are connected, the measures work best together as a **policy package**, supported by extension services and better technology.

**Answer:** Offer credit and subsidies (for inputs), build storage (to cut losses), and build feeder roads (for market access) — a coordinated package that raises output and incomes.`,
      quiz: [
        { prompt: "Secure land tenure encourages farmers to", options: ["leave farming", "invest in and improve their land", "sell all land", "ignore soil"], correctIndex: 1, explanation: "Secure titles make investment worthwhile." },
        { prompt: "The remedy for a lack of finance is", options: ["more roads only", "affordable credit and subsidies", "less storage", "smaller plots"], correctIndex: 1, explanation: "Credit and subsidies fund better inputs." },
        { prompt: "Building warehouses and cold stores directly reduces", options: ["credit", "post-harvest losses", "roads", "education"], correctIndex: 1, explanation: "Storage cuts losses after harvest." },
        { prompt: "Agricultural extension services help by", options: ["taxing farmers", "spreading improved methods and training", "removing roads", "raising storage losses"], correctIndex: 1, explanation: "Extension teaches better methods." },
        { prompt: "Building feeder roads mainly improves", options: ["market access and lower transport cost", "soil fertility", "credit supply", "the census"], correctIndex: 0, explanation: "Roads connect farms to markets cheaply." },
        { prompt: "Improved seeds, irrigation and machinery are remedies for the challenge of", options: ["land tenure", "technology", "education", "storage"], correctIndex: 1, explanation: "They raise yields — the technology remedy." },
        { prompt: "Farmers' cooperatives help members to", options: ["pool storage, transport and bargaining power", "avoid all markets", "pay more tax", "farm alone"], correctIndex: 0, explanation: "Cooperatives pool resources and bargaining." },
        { prompt: "Guaranteed prices or marketing boards give farmers", options: ["less income", "a stable income and incentive to produce", "no market", "higher losses"], correctIndex: 1, explanation: "Price support stabilises income." },
        { prompt: "Consolidating fragmented plots makes farming", options: ["less efficient", "more efficient", "impossible", "illegal"], correctIndex: 1, explanation: "Larger consolidated holdings are more efficient." },
        { prompt: "Subsidies on fertiliser and seed help farmers", options: ["afford better inputs", "avoid farming", "lose money", "leave the land"], correctIndex: 0, explanation: "Subsidies lower the cost of inputs." },
        { prompt: "Funding agricultural research aims to", options: ["lower yields", "raise yields and productivity", "close farms", "remove roads"], correctIndex: 1, explanation: "Research improves productivity." },
        { prompt: "A good set of policies should be", options: ["a single measure", "a coordinated package", "only price control", "only roads"], correctIndex: 1, explanation: "Linked problems need a package." },
        { prompt: "Rural electricity and water supply are part of improving", options: ["infrastructure", "land tenure", "credit", "cooperatives"], correctIndex: 0, explanation: "They are infrastructure improvements." },
        { prompt: "Soil conservation is recommended to protect", options: ["roads", "land fertility", "credit", "storage"], correctIndex: 1, explanation: "Conservation preserves soil fertility." },
        { prompt: "Micro-finance and cooperatives mainly widen access to", options: ["credit", "roads", "rain", "exports"], correctIndex: 0, explanation: "They help farmers get credit." },
        { prompt: "Processing plants add value and reduce", options: ["income", "post-harvest waste", "roads", "education"], correctIndex: 1, explanation: "Processing cuts waste and adds value." },
        { prompt: "The best way to match remedies to problems is to", options: ["use one solution for all", "pair each remedy with a specific challenge", "ignore the challenges", "guess"], correctIndex: 1, explanation: "Each remedy should target a specific challenge." },
        { prompt: "Which remedy targets poor market access?", options: ["Feeder roads", "Subsidies", "Extension", "Land titles"], correctIndex: 0, explanation: "Roads improve market access." },
        { prompt: "Which remedy targets slow spread of better methods?", options: ["Storage", "Extension and training", "Roads", "Price support"], correctIndex: 1, explanation: "Extension spreads improved methods." },
        { prompt: "Governments commonly support farming through", options: ["subsidies, credit and infrastructure", "banning agriculture", "ignoring farmers", "raising import of food"], correctIndex: 0, explanation: "These are standard support policies." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Recommend and justify three measures a government could take to improve agricultural production.", answerKey: "Any three of: secure land tenure and consolidation (encourages investment and efficiency); affordable credit and subsidies (lets farmers buy inputs and expand); storage and processing facilities (cut post-harvest losses); extension and training (spread better methods); build feeder roads (market access, lower cost); improved technology and research (raise yields); cooperatives (pool resources); price support (stable income). Award marks for three measures each with a justification.", marks: 9 },
        { type: "SHORT_ANSWER", prompt: "Explain how providing credit and subsidies can raise farm output.", answerKey: "Affordable credit and subsidies lower the cost of improved seeds, fertiliser and equipment that farmers otherwise cannot afford. With better inputs and the ability to expand, farmers can raise their yields and produce more, increasing total farm output and incomes. Award marks for the input-affordability point and the higher-output link.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Building feeder roads is the best remedy for the challenge of", options: ["insecure land tenure", "poor market access and high transport cost", "lack of credit", "low education"], correctIndex: 1, answerKey: "Roads improve market access and cut transport costs and spoilage. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why agricultural policy should be a coordinated package rather than a single measure.", answerKey: "The challenges facing agriculture are linked — finance, storage, roads, technology and education all reinforce one another — so a single measure cannot fix them. For example, credit to buy technology is wasted if there are no roads to reach the market or no storage to protect the crop. A coordinated package tackles the linked problems together, giving a larger and lasting improvement. Award marks for the linkage point and the package justification.", marks: 6 },
        { type: "ESSAY", prompt: "Propose a set of recommendations to enhance government agricultural policy in Liberia, explaining how each addresses a challenge facing the sector.", answerKey: "Award marks for: secure land tenure/consolidation for the land challenge, 4; credit and subsidies for the finance challenge, 5; storage and processing for post-harvest losses, 5; extension and training for the education challenge, 4; feeder roads and rural infrastructure for market access, 5; improved technology and research for low yields, 4; the point that the measures should form a coordinated package, 3. A script that lists remedies without linking them to challenges should not exceed 18.", marks: 30 },
      ],
    },
  ],
};
