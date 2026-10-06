import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 12,
// Semester Two, Period VI: Economic Integration and Natural Resources.
// CONTENTS: (1) Definition of economic integration and key concepts — (a) trade
// benefits, (b) employment, (c) political cooperation, (d) market expansion,
// (e) technology sharing, (f) cross-border investment flows; (2) Stages of
// economic integration — preferential trading area, free trade area, customs
// union, common market, economic and monetary union and fiscal policy
// harmonization; (3) Advantages and disadvantages of economic integration;
// (4) Natural resources of Liberia / the sub-region. Each top-level CONTENTS
// item is one topic; sub-items become ## sections. Sourced from OpenStax
// Principles of Economics 3e (Ch. 33, 34), OpenStax Introduction to Business
// (Ch. 1, 3), LibreTexts International Trade — Theory and Policy (9.10),
// LibreTexts International Business (5.3), LibreTexts World Regional Geography
// (Finlayson 6.4, 6.5; People, Places and Globalization 7.3) and CK-12.
export const economicsG12P6: PeriodContent = {
  grade: 12,
  number: 6,
  title: "Economic Integration and Natural Resources",
  summary:
    "Period VI of the MoE Grade 12 Economics syllabus. Learners define economic integration and explain its key concepts (trade benefits, employment, political cooperation, market expansion, technology sharing and cross-border investment); trace the stages of integration from a preferential trading area through a free trade area, customs union and common market to an economic and monetary union; weigh the advantages and disadvantages of integration, including trade creation and trade diversion; and examine natural resources as a factor of production and the natural resources of Liberia and the West African sub-region.",
  topics: [
    // source: LibreTexts — International Trade: Theory and Policy, 9.10 Economic Integration: Free Trade Areas, Trade Creation, and Trade Diversion (https://socialsci.libretexts.org/Bookshelves/Economics/International_Trade_-_Theory_and_Policy/09:_Trade_Policies_with_Market_Imperfections_and_Distortions/9.10:_Economic_Integration-_Free_Trade_Areas,_Trade_Creation,_and_Trade_Diversion); LibreTexts — International Business, 5.3 Regional Economic Integration (https://biz.libretexts.org/Bookshelves/Business/Advanced_Business/International_Business_(LibreTexts)/05:_Global_and_Regional_Economic_Cooperation_and_Integration/5.03:_Regional_Economic_Integration); OpenStax — Principles of Economics 3e, 33.4 The Benefits of Reducing Barriers to International Trade (https://openstax.org/books/principles-economics-3e/pages/33-4-the-benefits-of-reducing-barriers-to-international-trade) and 34.4 How Governments Enact Trade Policy (https://openstax.org/books/principles-economics-3e/pages/34-4-how-governments-enact-trade-policy-globally-regionally-and-nationally)
    {
      slug: "definition-and-key-concepts-of-economic-integration",
      title: "Definition of Economic Integration and Key Concepts",
      objective:
        "By the end of the topic, learners should be able to define economic integration and explain its key concepts: trade benefits, employment, political cooperation, market expansion, technology sharing and cross-border investment flows.",
      estimatedMinutes: 110,
      notes: `## Definition

**Economic integration** — any arrangement in which countries agree to **coordinate their trade, fiscal or monetary policies**.
**Regional economic integration** — cooperation among **neighbouring countries** to promote free and fair trade; it lets countries focus on issues relevant to their stage of development and encourages trade between neighbours.
**Regional trading agreement** — a treaty between a pair or group of countries giving each other preferential trade terms.

- There are over 300 regional trade agreements, up from fewer than 100 in the early 1990s.
- Examples: the **European Union (EU)**, **USMCA** (formerly NAFTA), **MERCOSUR** (South America), **ASEAN** (Southeast Asia), **SADC** (Southern Africa), and in Africa **ECOWAS** and **COMESA**, which aim to create free trade areas among members.
- The **African Union** (formed 2001, all African states) seeks unity, integration and sustainable development.

## Key concepts

**a. Trade benefits**
- Integration removes barriers to trade and investment among members, **creating more opportunities to trade**.
- **Trade creation** — trade that would not have existed otherwise, with supply coming from a **more efficient producer**.
- Consumers gain **variety of products** and **greater competition** among producers.

**b. Employment**
- Removing restrictions on the movement of labour can **expand job opportunities** across members.
- Trade raises the amount an economy can produce and tends to **raise average wages**; it does not reduce the total number of jobs over time.

**c. Political cooperation**
- Regional understanding and similarities **facilitate closer political cooperation**.
- The EU began after the Second World War partly because leaders reasoned that closer economic ties would make future war less likely.
- Regional organisations also work to enhance security in their region.

**d. Market expansion**
- Smaller economies have **limited possibilities for trade inside their own countries**; integration gives firms access to a **larger regional market**.
- Bigger markets allow **economies of scale** and specialisation by comparative advantage.

**e. Technology sharing**
- Trade, especially when firms split up the production value chain, involves a **transfer of knowledge** — skills in production, **technology**, management, finance and law.

**f. Cross-border investment flows**
- In a **common market**, barriers to the **mobility of capital** (and labour) are removed, so investment can flow freely between members.
- Removing barriers to investment encourages firms to invest across borders within the bloc.

## Summary table

| Key concept | What integration does |
| --- | --- |
| Trade benefits | Removes barriers, creates trade, more variety and competition |
| Employment | Frees labour movement, expands job opportunities |
| Political cooperation | Closer ties, peace and security |
| Market expansion | Larger regional market, economies of scale |
| Technology sharing | Transfer of skills, technology and know-how |
| Investment flows | Free movement of capital across member borders |

## Common errors

- **Thinking integration is only about tariffs.** It can also coordinate fiscal and monetary policy.
- **Confusing the WTO with a regional bloc.** The WTO is global; integration agreements are regional.
- **Assuming integration only helps large economies.** Smaller economies gain most from access to bigger markets.`,
      workedExample: `**Question:** Five neighbouring West African countries agree to remove tariffs on each other's goods and to let workers and capital move freely among them. Using the key concepts of economic integration, explain three ways a small member economy can benefit.

**Solution**

*Step 1 — market expansion.* A small country has limited possibilities for trade inside its own borders. Integration gives its firms access to the **larger regional market**, allowing **economies of scale** and specialisation.

*Step 2 — trade benefits.* With tariffs removed, **trade is created** that would not otherwise exist, and supply comes from the **more efficient producer**; consumers gain more **variety** and **competition**.

*Step 3 — employment and investment.* Free movement of labour **expands job opportunities**, and free movement of capital lets **investment flow across borders**, bringing with it a **transfer of technology and skills**.

**Answer:** the member gains a larger market (economies of scale), trade creation with more variety and competition, and more jobs, investment and technology transfer through free movement of labour and capital.`,
      quiz: [
        { prompt: "Economic integration is any arrangement in which countries agree to", options: ["close their borders", "coordinate their trade, fiscal or monetary policies", "abolish all money", "raise tariffs on each other"], correctIndex: 1, explanation: "Integration means coordinating trade, fiscal or monetary policy." },
        { prompt: "Regional economic integration involves cooperation among", options: ["distant rival countries only", "neighbouring countries", "private firms only", "one country's provinces"], correctIndex: 1, explanation: "It is cooperation among neighbours." },
        { prompt: "A regional trading agreement gives members", options: ["preferential trade terms with each other", "higher tariffs on each other", "a ban on trade", "one shared language"], correctIndex: 0, explanation: "Members give each other better trade terms." },
        { prompt: "ECOWAS and COMESA both aim to create", options: ["military alliances only", "free trade areas among members", "a single world currency", "oil cartels"], correctIndex: 1, explanation: "Both aim at free trade areas among members." },
        { prompt: "The African Union seeks", options: ["unity, integration and sustainable development", "higher oil prices", "colonial rule", "closed borders"], correctIndex: 0, explanation: "These are the AU's stated aims." },
        { prompt: "Trade creation means", options: ["trade moves to a less efficient supplier", "new trade that would not otherwise exist, from a more efficient producer", "all trade stops", "tariffs rise"], correctIndex: 1, explanation: "Trade creation brings supply from more efficient producers." },
        { prompt: "Removing restrictions on the movement of labour among members can", options: ["reduce job opportunities everywhere", "expand job opportunities", "end all employment", "freeze wages"], correctIndex: 1, explanation: "Labour mobility widens job opportunities." },
        { prompt: "Over time, trade tends to make the average level of wages", options: ["fall", "rise", "unchanged", "zero"], correctIndex: 1, explanation: "Higher output from trade raises average wages." },
        { prompt: "One reason the EU was formed after the Second World War was that", options: ["closer economic ties would make war less likely", "leaders wanted higher tariffs", "trade was banned", "oil prices were low"], correctIndex: 0, explanation: "Economic ties were seen as a path to peace." },
        { prompt: "Regional understanding and similarities facilitate", options: ["closer political cooperation", "trade wars", "higher tariffs", "currency collapse"], correctIndex: 0, explanation: "Integration encourages political cooperation." },
        { prompt: "Small economies gain from integration mainly because they", options: ["have huge home markets", "have limited trade possibilities inside their own borders", "need no imports", "produce everything"], correctIndex: 1, explanation: "Integration gives them access to a bigger market." },
        { prompt: "A larger regional market allows firms to enjoy", options: ["diseconomies of scale", "economies of scale", "higher tariffs", "smaller output"], correctIndex: 1, explanation: "Bigger markets support larger, lower-cost production." },
        { prompt: "Technology sharing through trade involves the transfer of", options: ["only raw materials", "skills in production, technology, management, finance and law", "only money", "only labour"], correctIndex: 1, explanation: "Trade transfers knowledge and technology." },
        { prompt: "Cross-border investment flows are freest in a", options: ["preferential trade area", "common market", "closed economy", "cartel"], correctIndex: 1, explanation: "A common market removes barriers to capital mobility." },
        { prompt: "Which concept refers to consumers getting more types of goods?", options: ["variety (a trade benefit)", "trade diversion", "sovereignty loss", "inflation"], correctIndex: 0, explanation: "Variety is a trade benefit of integration." },
        { prompt: "MERCOSUR is a regional trading bloc in", options: ["West Africa", "South America", "Southeast Asia", "Europe"], correctIndex: 1, explanation: "MERCOSUR is South American." },
        { prompt: "ASEAN is a regional bloc in", options: ["South America", "Southeast Asia", "Southern Africa", "North America"], correctIndex: 1, explanation: "ASEAN covers Southeast Asia." },
        { prompt: "The WTO differs from a regional bloc because it is", options: ["regional", "global", "a currency union", "a cartel"], correctIndex: 1, explanation: "The WTO is a global organisation." },
        { prompt: "Greater competition among producers in an integrated market tends to", options: ["raise prices and lower quality", "benefit consumers", "end trade", "raise tariffs"], correctIndex: 1, explanation: "Competition benefits consumers." },
        { prompt: "Which is NOT a key concept of economic integration?", options: ["market expansion", "technology sharing", "political cooperation", "raising tariffs between members"], correctIndex: 3, explanation: "Integration lowers, not raises, barriers between members." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define economic integration and regional economic integration, and name two regional blocs.", answerKey: "Economic integration is any arrangement in which countries agree to coordinate their trade, fiscal or monetary policies. Regional economic integration is cooperation among neighbouring countries to promote free and fair trade. Any two blocs: ECOWAS, COMESA, SADC, EU, USMCA/NAFTA, MERCOSUR, ASEAN. Award 3 for each definition and 2 for the blocs.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Trade creation means", options: ["trade shifts to a less efficient member", "new trade arises with supply from a more efficient producer", "all tariffs rise", "members stop trading"], correctIndex: 1, answerKey: "Trade creation brings new trade from more efficient producers. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain how economic integration affects employment and political cooperation.", answerKey: "Employment: removing restrictions on labour movement expands job opportunities across members, and the higher output from trade tends to raise average wages. Political cooperation: regional understanding and similarities facilitate closer political cooperation and security; e.g. the EU was formed partly because closer economic ties make war less likely. Award 3 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Explain market expansion, technology sharing and cross-border investment flows as concepts of economic integration.", answerKey: "Market expansion: small economies have limited trade possibilities at home; integration gives access to a larger regional market and economies of scale. Technology sharing: trade, especially across the value chain, transfers knowledge — production skills, technology, management, finance and law. Investment flows: in a common market, barriers to capital mobility are removed so investment flows freely across member borders. Award 3 marks each.", marks: 9 },
        { type: "ESSAY", prompt: "Define economic integration and discuss its key concepts with reference to West Africa.", answerKey: "Award marks for: definition of economic integration and regional integration, 5; examples of blocs including ECOWAS/AU, 3; trade benefits (trade creation, variety, competition), 4; employment, 4; political cooperation, 4; market expansion and economies of scale, 4; technology sharing, 3; cross-border investment flows, 3.", marks: 30 },
      ],
    },
    // source: LibreTexts — International Trade: Theory and Policy, 9.10 Economic Integration: Free Trade Areas, Trade Creation, and Trade Diversion (https://socialsci.libretexts.org/Bookshelves/Economics/International_Trade_-_Theory_and_Policy/09:_Trade_Policies_with_Market_Imperfections_and_Distortions/9.10:_Economic_Integration-_Free_Trade_Areas,_Trade_Creation,_and_Trade_Diversion); OpenStax — Principles of Economics 3e, 34.4 How Governments Enact Trade Policy (https://openstax.org/books/principles-economics-3e/pages/34-4-how-governments-enact-trade-policy-globally-regionally-and-nationally); OpenStax — Introduction to Business, Ch. 3 Key Terms (https://openstax.org/books/introduction-business/pages/3-key-terms)
    {
      slug: "stages-of-economic-integration",
      title: "Stages of Economic Integration",
      objective:
        "By the end of the topic, learners should be able to describe the stages of economic integration from a preferential trading area to an economic and monetary union, and distinguish each stage.",
      estimatedMinutes: 120,
      notes: `## The ladder of integration

Integration deepens in stages; each stage keeps the features of the one before and adds more.

## 1. Preferential trading area (PTA)

**Preferential trade agreement** — countries offer each other **tariff reductions (not eliminations)** in selected product categories, while keeping higher tariffs elsewhere.
**Preferential tariff** — a tariff that is **lower for some nations than for others**.

## 2. Free trade area (FTA)

**Free trade area** — a group of countries **eliminates tariffs among themselves** but each **keeps its own external tariff** on imports from the rest of the world.
- Example: NAFTA (now USMCA); ECOWAS aims to create a free trade area.
- **Rules of origin** — needed in an FTA to stop goods being imported into the member with the **lowest** external tariff and then **transshipped** to members with higher tariffs.

## 3. Customs union

**Customs union** — members eliminate tariffs among themselves **and set a common external tariff (CET)** on imports from the rest of the world.
- The **CET** is what distinguishes a customs union from a free trade area.
- Example: the Gulf Cooperation Council; the EU's trade arrangement.

## 4. Common market

**Common market** — free trade in **goods and services**, a **common external tariff**, **and free mobility of capital and labour** across member countries.
- Workers need no visa or work permit to work in another member state.
- Example: COMESA (Common Market for Eastern and Southern Africa); the EU at an earlier stage.

## 5. Economic and monetary union; fiscal policy harmonisation

**Economic union** — a common market in which members also **adopt common economic policies**: **monetary and fiscal policies are coordinated**, and some **fiscal spending is handed to a supranational agency** (e.g. the EU's Common Agricultural Policy).
**Monetary union** — a group of countries **adopts a common currency** under a **central monetary authority**.
- Example: the EU, which introduced the **euro** in the early 2000s and phased out national currencies.
- **Fiscal policy harmonisation** — members bring their taxation and government spending policies into line under common rules.

## Comparison table

| Stage | Internal tariffs | Common external tariff | Free labour and capital | Common policies/currency |
| --- | --- | --- | --- | --- |
| Preferential trading area | Reduced | No | No | No |
| Free trade area | Removed | No | No | No |
| Customs union | Removed | Yes | No | No |
| Common market | Removed | Yes | Yes | No |
| Economic and monetary union | Removed | Yes | Yes | Yes |

## Common errors

- **Confusing an FTA with a customs union.** Only a customs union has a common external tariff.
- **Confusing a customs union with a common market.** A common market also frees the movement of labour and capital.
- **Thinking a PTA removes tariffs.** It only reduces them on selected goods.`,
      workedExample: `**Question:** Countries A, B and C remove all tariffs on trade among themselves. A charges a 5% tariff on cloth from outside, B charges 20% and C charges 15%. (a) What stage of integration is this? (b) What problem arises, and how is it controlled? (c) What change would turn it into a customs union? (d) What further step would make it a common market?

**Solution**

*Step 1 — the stage.* Internal tariffs are removed but each country keeps its **own** external tariff, so this is a **free trade area**.

*Step 2 — the problem.* Outside exporters would send cloth into **A** (lowest tariff, 5%) and then **transship** it tariff-free to B and C. This is controlled by **rules of origin**, which decide which goods count as made inside the FTA.

*Step 3 — customs union.* The three must agree a **common external tariff** (for example 15% for all), removing the reason to transship.

*Step 4 — common market.* In addition, they must allow the **free movement of labour and capital** among themselves.

**Answer:** (a) a free trade area; (b) transshipment through the lowest-tariff member, controlled by rules of origin; (c) adopt a common external tariff; (d) also free the movement of labour and capital.`,
      quiz: [
        { prompt: "A preferential trading area involves", options: ["removing all tariffs", "reducing (not removing) tariffs on selected goods", "a common currency", "free labour mobility"], correctIndex: 1, explanation: "A PTA only reduces tariffs on some goods." },
        { prompt: "A preferential tariff is one that is", options: ["the same for all nations", "lower for some nations than for others", "zero for everyone", "only on exports"], correctIndex: 1, explanation: "It favours some nations." },
        { prompt: "In a free trade area, members", options: ["share a common external tariff", "remove tariffs among themselves but keep their own external tariffs", "share one currency", "ban outside trade"], correctIndex: 1, explanation: "FTA members set their own external tariffs." },
        { prompt: "Rules of origin are needed in a free trade area to prevent", options: ["inflation", "transshipment through the lowest-tariff member", "labour migration", "currency union"], correctIndex: 1, explanation: "They stop goods entering via the cheapest-tariff member." },
        { prompt: "What distinguishes a customs union from a free trade area?", options: ["free labour mobility", "a common external tariff", "a common currency", "no internal trade"], correctIndex: 1, explanation: "The CET marks a customs union." },
        { prompt: "A common market adds to a customs union", options: ["higher internal tariffs", "free mobility of labour and capital", "separate external tariffs", "a ban on services"], correctIndex: 1, explanation: "Factor mobility is the extra feature." },
        { prompt: "In a common market, workers from member states", options: ["need special visas", "can work in other member states without a visa or work permit", "cannot move", "pay double tax"], correctIndex: 1, explanation: "Labour moves freely." },
        { prompt: "An economic union adds", options: ["coordinated monetary and fiscal policies", "higher tariffs", "trade bans", "separate currencies only"], correctIndex: 0, explanation: "Economic union coordinates economic policy." },
        { prompt: "A monetary union means members", options: ["use a common currency under a central monetary authority", "keep separate currencies", "abolish money", "fix only tariffs"], correctIndex: 0, explanation: "A monetary union shares one currency." },
        { prompt: "The euro is an example of", options: ["a preferential tariff", "monetary union", "a free trade area", "rules of origin"], correctIndex: 1, explanation: "The EU's euro is a common currency." },
        { prompt: "NAFTA (now USMCA) is an example of a", options: ["free trade area", "customs union", "monetary union", "common market"], correctIndex: 0, explanation: "NAFTA was a free trade area." },
        { prompt: "COMESA is an example of a", options: ["cartel", "common market", "monetary union", "PTA only"], correctIndex: 1, explanation: "COMESA is a common market." },
        { prompt: "The Gulf Cooperation Council is cited as an example of a", options: ["customs union", "monetary union", "PTA", "cartel"], correctIndex: 0, explanation: "The GCC is a customs union." },
        { prompt: "Fiscal policy harmonisation means members", options: ["bring tax and spending policies into line", "abolish taxes", "raise tariffs", "leave the bloc"], correctIndex: 0, explanation: "It aligns fiscal policies under common rules." },
        { prompt: "Handing some fiscal spending to a supranational agency is a feature of", options: ["a free trade area", "an economic union", "a PTA", "a customs union"], correctIndex: 1, explanation: "Economic unions pool some fiscal spending." },
        { prompt: "Which is the correct order from least to most integrated?", options: ["common market, FTA, customs union, PTA", "PTA, FTA, customs union, common market, economic union", "economic union, PTA, FTA", "customs union, PTA, common market"], correctIndex: 1, explanation: "That is the standard ladder." },
        { prompt: "The EU progressed from a free trade association to a common market to", options: ["a PTA", "a full economic union", "a cartel", "no union"], correctIndex: 1, explanation: "It became a full economic union." },
        { prompt: "Which stage first introduces free movement of capital?", options: ["PTA", "free trade area", "customs union", "common market"], correctIndex: 3, explanation: "Capital mobility begins at the common market." },
        { prompt: "If members remove internal tariffs and adopt one external tariff, they form a", options: ["free trade area", "customs union", "monetary union", "PTA"], correctIndex: 1, explanation: "Removal plus CET is a customs union." },
        { prompt: "Each stage of integration", options: ["drops the features of the earlier stage", "keeps the earlier stage's features and adds more", "is unrelated to the others", "raises tariffs"], correctIndex: 1, explanation: "Integration deepens cumulatively." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "List the stages of economic integration in order and state the defining feature of each.", answerKey: "1. Preferential trading area — tariff reductions on selected goods. 2. Free trade area — internal tariffs removed, each keeps its own external tariff. 3. Customs union — free trade plus a common external tariff. 4. Common market — customs union plus free mobility of labour and capital. 5. Economic and monetary union — common market plus coordinated monetary and fiscal policy/common currency. Award 2 marks each.", marks: 10 },
        { type: "MULTIPLE_CHOICE", prompt: "A customs union differs from a free trade area because it has", options: ["free labour mobility", "a common external tariff", "a common currency", "higher internal tariffs"], correctIndex: 1, answerKey: "The common external tariff marks a customs union. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why a free trade area needs rules of origin.", answerKey: "In an FTA each member keeps its own external tariff, so outside goods could enter through the member with the lowest tariff and then be transshipped tariff-free to members with higher tariffs. Rules of origin determine which goods count as made inside the FTA, preventing this. Award marks for the separate-tariff point, transshipment and the role of rules of origin.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Distinguish a common market from an economic and monetary union, with an example of each.", answerKey: "A common market has free trade in goods and services, a common external tariff and free mobility of labour and capital (e.g. COMESA). An economic and monetary union adds coordinated monetary and fiscal policies, some fiscal spending at a supranational level and a common currency under a central monetary authority (e.g. the EU and the euro). Award 3 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Describe the stages of economic integration and discuss how far ECOWAS has moved along them.", answerKey: "Award marks for: PTA, 4; FTA and rules of origin, 5; customs union and the common external tariff, 5; common market and factor mobility, 5; economic and monetary union and fiscal harmonisation, 5; application — ECOWAS aims to create a free trade area among members, with discussion of further stages, 6.", marks: 30 },
      ],
    },
    // source: LibreTexts — International Business, 5.3 Regional Economic Integration (https://biz.libretexts.org/Bookshelves/Business/Advanced_Business/International_Business_(LibreTexts)/05:_Global_and_Regional_Economic_Cooperation_and_Integration/5.03:_Regional_Economic_Integration); LibreTexts — International Trade: Theory and Policy, 9.10 (https://socialsci.libretexts.org/Bookshelves/Economics/International_Trade_-_Theory_and_Policy/09:_Trade_Policies_with_Market_Imperfections_and_Distortions/9.10:_Economic_Integration-_Free_Trade_Areas,_Trade_Creation,_and_Trade_Diversion); OpenStax — Principles of Economics 3e, 34.2 International Trade and Its Effects on Jobs, Wages, and Working Conditions (https://openstax.org/books/principles-economics-3e/pages/34-2-international-trade-and-its-effects-on-jobs-wages-and-working-conditions)
    {
      slug: "advantages-and-disadvantages-of-economic-integration",
      title: "Advantages and Disadvantages of Economic Integration",
      objective:
        "By the end of the topic, learners should be able to evaluate the advantages and disadvantages of economic integration, including trade creation and trade diversion.",
      estimatedMinutes: 110,
      notes: `## Advantages

- **Trade creation** — removing barriers to trade and investment **creates more opportunities to trade**; supply comes from a **more efficient producer**, which always improves national welfare.
- **More employment opportunities** — removing restrictions on labour movement helps **expand job opportunities**.
- **Higher average wages** — trade raises the amount an economy can produce, so average wages tend to rise.
- **Closer political cooperation** — regional understanding facilitates political cooperation, peace and security.
- **Larger markets and economies of scale** — firms in small economies reach a bigger regional market.
- **Variety and competition** — consumers gain more choice and producers face more competition.
- **Transfer of knowledge** — skills, technology, management and finance spread among members.

## Disadvantages

- **Trade diversion** — members trade more with each other than with non-members, so trade is **diverted away from a more efficient supplier outside** the bloc **toward a less efficient supplier inside** it; this can **reduce welfare**.
- **Shifts in employment** — firms may **move production to cheaper labour markets** in other member countries, so some workers lose jobs.
- **Losers in import-competing industries** — workers facing new competition may see demand for their labour, and their wages, fall.
- **Loss of national sovereignty** — with each deeper agreement, nations may have to **give up more political and economic rights** (e.g. control of tariffs, currency or fiscal policy).
- **Limiting outside trade** — some regional agreements promise free trade but act as a way to **limit trade from everywhere else**, conflicting with WTO aims.

## Trade creation vs trade diversion

| Feature | Trade creation | Trade diversion |
| --- | --- | --- |
| Meaning | New trade that would not otherwise exist | Trade switched from outside to inside the bloc |
| Supplier | More efficient producer | Less efficient member producer |
| Welfare effect | Always improves welfare | May reduce welfare |

## Balance sheet

| Advantages | Disadvantages |
| --- | --- |
| Trade creation | Trade diversion |
| Job opportunities | Jobs shift to cheaper member markets |
| Political cooperation | Loss of sovereignty |
| Larger market, economies of scale | Import-competing firms and workers lose |
| Technology and skills transfer | May limit trade with non-members |

## Common errors

- **Assuming all bloc trade is good.** Trade diversion can make a country worse off.
- **Thinking integration costs no jobs anywhere.** Total jobs need not fall, but some industries and workers lose.
- **Ignoring sovereignty.** Deeper stages require giving up control over tariffs, currency and fiscal policy.`,
      workedExample: `**Question:** Before joining a free trade area, Country X imports rice from a low-cost outside producer, Country Z (cost 100 per tonne), paying a 30% tariff, so rice costs 130. After joining, X can import rice tariff-free from member Country Y, which produces at 120 per tonne. (a) Where does X now buy rice? (b) Is this trade creation or trade diversion? (c) Why might X's national welfare fall?

**Solution**

*Step 1 — new source.* From Y, rice costs **120** (no tariff); from Z it still costs **130** (100 + 30% tariff). X now buys from **Y**.

*Step 2 — classify.* Trade has moved **away from the more efficient outside supplier (Z, 100)** toward a **less efficient member (Y, 120)**. This is **trade diversion**.

*Step 3 — welfare.* Consumers pay less (120 instead of 130), but the government loses all the tariff revenue (30 per tonne), and the rice is now produced at a **higher real cost** (120 instead of 100). The country uses more resources per tonne, so **national welfare can fall**.

**Answer:** (a) from member Country Y; (b) trade diversion; (c) the real cost of supply rises from 100 to 120 and tariff revenue is lost, which can outweigh the consumers' saving.`,
      quiz: [
        { prompt: "Trade creation always", options: ["reduces welfare", "improves national welfare", "raises tariffs", "ends trade"], correctIndex: 1, explanation: "Supply from a more efficient producer improves welfare." },
        { prompt: "Trade diversion shifts trade toward", options: ["a more efficient outside supplier", "a less efficient supplier inside the bloc", "no supplier", "the WTO"], correctIndex: 1, explanation: "Diversion favours less efficient members." },
        { prompt: "Trade diversion may", options: ["always raise welfare", "reduce welfare", "remove all trade", "lower costs everywhere"], correctIndex: 1, explanation: "Using a costlier supplier can lower welfare." },
        { prompt: "Removing restrictions on labour movement can", options: ["shrink job opportunities", "expand job opportunities", "stop migration", "ban work permits only"], correctIndex: 1, explanation: "Labour mobility widens job options." },
        { prompt: "A disadvantage of integration for employment is that firms may", options: ["hire more at home always", "move production to cheaper labour markets in other members", "stop producing", "raise wages everywhere"], correctIndex: 1, explanation: "Production can relocate to cheaper member labour." },
        { prompt: "Loss of national sovereignty means a member", options: ["gains more control", "gives up some political and economic rights", "leaves the UN", "has no government"], correctIndex: 1, explanation: "Deeper integration transfers some control." },
        { prompt: "Which is an advantage of economic integration?", options: ["trade diversion", "loss of sovereignty", "closer political cooperation", "job shifts"], correctIndex: 2, explanation: "Political cooperation is a benefit." },
        { prompt: "Which is a disadvantage of economic integration?", options: ["trade creation", "larger markets", "trade diversion", "technology transfer"], correctIndex: 2, explanation: "Trade diversion is a cost." },
        { prompt: "Some regional agreements can conflict with WTO aims because they", options: ["remove all barriers worldwide", "may limit trade with non-members", "abolish tariffs globally", "have no members"], correctIndex: 1, explanation: "They may restrict outside trade." },
        { prompt: "Workers in industries facing new import competition may see", options: ["higher demand for their labour", "lower demand for their labour and wages", "no change", "guaranteed jobs"], correctIndex: 1, explanation: "Import competition can reduce their wages." },
        { prompt: "Over long periods, trade has", options: ["reduced the total number of jobs", "not reduced the total number of jobs", "abolished employment", "only created government jobs"], correctIndex: 1, explanation: "Total jobs do not fall over time." },
        { prompt: "Access to a larger regional market gives firms", options: ["diseconomies of scale", "economies of scale", "higher costs", "fewer customers"], correctIndex: 1, explanation: "Bigger markets bring scale economies." },
        { prompt: "A country importing from a cheaper outside supplier at 100 switches to a member at 120 after joining an FTA. This is", options: ["trade creation", "trade diversion", "dumping", "protection"], correctIndex: 1, explanation: "It moves to a less efficient member." },
        { prompt: "When trade is diverted, the government loses", options: ["nothing", "tariff revenue on the former imports", "all exports", "its currency"], correctIndex: 1, explanation: "Imports from members pay no tariff." },
        { prompt: "Technology transfer among members is", options: ["a disadvantage", "an advantage", "trade diversion", "loss of sovereignty"], correctIndex: 1, explanation: "Sharing know-how is a benefit." },
        { prompt: "Giving up control of the national currency in a monetary union is an example of", options: ["trade creation", "loss of sovereignty", "economies of scale", "variety"], correctIndex: 1, explanation: "Currency control passes to the union." },
        { prompt: "Greater variety for consumers is an advantage arising from", options: ["higher tariffs", "removing trade barriers", "trade diversion", "embargoes"], correctIndex: 1, explanation: "Open trade within the bloc adds variety." },
        { prompt: "Trade creation brings supply from", options: ["a more efficient producer", "a less efficient producer", "no producer", "the government only"], correctIndex: 0, explanation: "That is the definition of trade creation." },
        { prompt: "Which pair is correctly matched?", options: ["trade creation — welfare may fall", "trade diversion — supply from a less efficient member", "sovereignty — always increases", "employment — never changes"], correctIndex: 1, explanation: "Diversion uses a less efficient member supplier." },
        { prompt: "On balance, whether a country gains from joining a bloc depends on", options: ["only the bloc's name", "whether trade creation outweighs trade diversion and other costs", "the weather", "the size of its flag"], correctIndex: 1, explanation: "The net effect weighs benefits against costs." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State four advantages of economic integration.", answerKey: "Any four of: trade creation (more trade, supply from more efficient producers); expanded job opportunities from labour mobility; higher average wages; closer political cooperation/peace; larger markets and economies of scale; variety and competition; transfer of knowledge and technology. Award 2 marks each.", marks: 8 },
        { type: "SHORT_ANSWER", prompt: "State three disadvantages of economic integration.", answerKey: "Any three of: trade diversion (trade moves to less efficient member suppliers); employment shifts as production moves to cheaper member labour markets; losses for workers in import-competing industries; loss of national sovereignty; agreements may limit trade with non-members. Award 2 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Trade diversion occurs when trade shifts", options: ["to a more efficient outside supplier", "from a more efficient outside supplier to a less efficient member", "away from all members", "to the WTO"], correctIndex: 1, answerKey: "Diversion favours a less efficient member. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Distinguish trade creation from trade diversion and state the welfare effect of each.", answerKey: "Trade creation is new trade that would not otherwise exist, with supply from a more efficient producer; it always improves national welfare. Trade diversion moves trade away from a more efficient supplier outside the bloc toward a less efficient supplier inside it; it may reduce welfare. Award 4 marks each.", marks: 8 },
        { type: "ESSAY", prompt: "Evaluate the advantages and disadvantages of economic integration for a small West African economy such as Liberia.", answerKey: "Award marks for: trade creation, larger market and economies of scale, 6; employment and wages, 4; political cooperation, 3; technology transfer, 3; trade diversion with explanation, 5; employment shifts and import-competing losers, 3; loss of sovereignty, 3; a reasoned conclusion weighing benefits against costs, 3.", marks: 30 },
      ],
    },
    // source: OpenStax — Introduction to Business, 1.1 The Nature of Business (https://openstax.org/books/introduction-business/pages/1-1-the-nature-of-business); CK-12 — Renewable vs. Nonrenewable Resources (https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/21.2/primary/lesson/renewable-vs.-non-renewable-resources-ms-es/); LibreTexts — World Regional Geography: People, Places and Globalization, 7.3 West Africa (https://socialsci.libretexts.org/Bookshelves/Geography_(Human)/Book:_World_Regional_Geography_-_People_Places_and_Globalization/07:_Subsaharan_Africa/7.03:_West_Africa); LibreTexts — World Regional Geography (Finlayson), 6.5 Economics and Globalization in Sub-Saharan Africa (https://socialsci.libretexts.org/Bookshelves/Geography_(Human)/World_Regional_Geography_(Finlayson)/06:_Sub-Saharan_Africa/6.05:_Economics_and_Globalization_in_Sub-Saharan_Africa)
    {
      slug: "natural-resources-of-liberia-and-the-sub-region",
      title: "Natural Resources of Liberia and the Sub-region",
      objective:
        "By the end of the topic, learners should be able to explain natural resources as a factor of production, classify them as renewable or non-renewable, and compare the natural resources of Liberia with those of other West African countries.",
      estimatedMinutes: 100,
      notes: `## Natural resources as a factor of production

**Factors of production** — the four traditional inputs common to all productive activity: **natural resources, labour, capital and entrepreneurship** (knowledge is increasingly treated as a fifth).
**Natural resources** — commodities that are **useful inputs in their natural state**; they include **farmland, forests, mineral and oil deposits, and water**.
- **Labour** — the economic contribution of people working with their minds and muscles.
- **Capital** — tools, machinery, equipment and buildings used to produce goods and services.
- **Entrepreneurship** — combining natural resources, labour and capital to produce goods or services.

## Renewable and non-renewable resources

**Renewable resources** — can be **replenished by natural processes** as quickly as people use them (sunlight, wind, water).
- Living resources such as **timber** are renewable **only if used sustainably** — new trees must be planted to replace those cut down.
**Non-renewable resources** — **limited in supply** and cannot be replaced as quickly as they are used up.
- Example: fossil fuels (**petroleum, coal, natural gas**), which take millions of years to form.
- Metals and minerals are not destroyed when used and can be **recycled**.

## Natural resources of the West African sub-region

| Country | Main natural resources (from source) |
| --- | --- |
| Liberia | Diamonds (blood diamonds helped fund the civil war; UN export ban lifted in 2007) |
| Sierra Leone | Diamonds |
| Nigeria | Oil — up to 80% of government revenue |
| Ghana | Gold and other mining |
| Guinea | Bauxite, plus diamonds and gold |
| Côte d'Ivoire | Cocoa (agricultural land) |
| Mauritania | Iron ore — about 40% of exports |
| Mali | Historically gold, salt and copper |

## Liberia's economic context

- Liberia was **never a European colony**; it became independent in **1847** with its capital, **Monrovia**.
- A long **civil war** (after the 1980 coup) killed more than 200,000 people and devastated the economy; **diamonds helped fund the war**, and the UN banned Liberian diamond exports until **2007**.
- Poverty and the lack of goods and services remain persistent problems after the conflict.

## Resource dependence in Sub-Saharan Africa

- Most of Sub-Saharan Africa's **exports remain raw materials**, a pattern set during the colonial era.
- This makes economies **vulnerable to price fluctuations** in world markets.
- Africa's chief export is **petroleum**, yet most Africans lack a reliable supply of electricity.
- **Neocolonialism** — exerting economic rather than direct political control over territory; foreign corporations buy land, invest heavily or purchase water rights.

## Common errors

- **Thinking all living resources are automatically renewable.** Timber and fish are renewable only if used sustainably.
- **Assuming resource wealth guarantees development.** Raw-material exporters are exposed to price swings, and resources such as diamonds can even fuel conflict.
- **Treating natural resources as the only factor.** Labour, capital and entrepreneurship are needed to turn them into output.`,
      workedExample: `**Question:** Classify each resource as renewable or non-renewable and name a West African country associated with it: (a) petroleum; (b) timber from forests; (c) diamonds. Then (d) explain one economic risk of depending on raw-material exports.

**Solution**

*Step 1 — petroleum.* Fossil fuels take millions of years to form and are used up far faster, so petroleum is **non-renewable**. Country: **Nigeria**, where oil provides up to 80% of government revenue.

*Step 2 — timber.* Trees can be replanted, so timber is **renewable**, but **only if used sustainably**. Forests are listed among natural resources (forests, farmland, minerals, water).

*Step 3 — diamonds.* Diamonds are a mineral deposit that is not replaced as it is mined, so it is a **non-renewable** resource. Countries: **Liberia** and **Sierra Leone**.

*Step 4 — risk.* Economies whose exports are mainly raw materials are **vulnerable to price fluctuations** in world markets, so export earnings and government revenue can fall sharply when prices drop. Resources such as diamonds have even helped **fund civil war**, as in Liberia.

**Answer:** (a) non-renewable — Nigeria; (b) renewable if used sustainably; (c) non-renewable — Liberia/Sierra Leone; (d) vulnerability to world price swings (and possible conflict).`,
      quiz: [
        { prompt: "The four traditional factors of production are", options: ["natural resources, labour, capital, entrepreneurship", "money, banks, tax, trade", "land, sea, air, space", "exports, imports, tariffs, quotas"], correctIndex: 0, explanation: "These are the four traditional factors." },
        { prompt: "Natural resources are commodities that are useful inputs", options: ["only after manufacturing", "in their natural state", "only as money", "only as services"], correctIndex: 1, explanation: "That is the definition of natural resources." },
        { prompt: "Which is listed as a natural resource?", options: ["machinery", "farmland", "a factory building", "a bank loan"], correctIndex: 1, explanation: "Farmland is a natural resource; the others are capital." },
        { prompt: "Tools, machinery and buildings used in production are", options: ["natural resources", "capital", "labour", "entrepreneurship"], correctIndex: 1, explanation: "These are capital." },
        { prompt: "A renewable resource can be", options: ["replenished by natural processes as fast as it is used", "used only once", "never replaced", "made only in factories"], correctIndex: 0, explanation: "Renewables are naturally replenished." },
        { prompt: "Timber is renewable only if", options: ["it is exported", "it is used sustainably and trees are replanted", "it is burned", "it is taxed"], correctIndex: 1, explanation: "Sustainable use keeps timber renewable." },
        { prompt: "Petroleum is a", options: ["renewable resource", "non-renewable resource", "capital good", "service"], correctIndex: 1, explanation: "Fossil fuels take millions of years to form." },
        { prompt: "Which West African country's oil provides up to 80% of government revenue?", options: ["Ghana", "Nigeria", "Mali", "Liberia"], correctIndex: 1, explanation: "Nigeria depends heavily on oil." },
        { prompt: "Guinea holds large amounts of", options: ["oil", "bauxite", "cocoa only", "iron ore only"], correctIndex: 1, explanation: "Guinea is rich in bauxite." },
        { prompt: "Iron ore makes up about 40% of the exports of", options: ["Mauritania", "Ghana", "Nigeria", "Côte d'Ivoire"], correctIndex: 0, explanation: "Mauritania relies on iron ore exports." },
        { prompt: "Ghana's economy benefits from", options: ["gold and other mining", "oil providing 80% of revenue", "bauxite only", "no resources"], correctIndex: 0, explanation: "Gold mining contributes to Ghana's economy." },
        { prompt: "In Liberia, diamonds", options: ["were never mined", "helped fund the civil war", "are a renewable resource", "are banned forever"], correctIndex: 1, explanation: "Blood diamonds funded the conflict." },
        { prompt: "The UN ban on Liberian diamond exports was lifted in", options: ["1847", "1980", "2007", "2017"], correctIndex: 2, explanation: "The ban was lifted in 2007." },
        { prompt: "Liberia became an independent country in", options: ["1847", "1884", "1957", "1980"], correctIndex: 0, explanation: "Liberia became independent in 1847." },
        { prompt: "Most of Sub-Saharan Africa's exports are", options: ["manufactured goods", "raw materials", "services", "software"], correctIndex: 1, explanation: "The region mainly exports raw materials." },
        { prompt: "Dependence on raw-material exports makes economies", options: ["immune to world prices", "vulnerable to price fluctuations", "always rich", "self-sufficient"], correctIndex: 1, explanation: "Commodity prices swing widely." },
        { prompt: "Neocolonialism means exerting", options: ["direct political rule", "economic rather than direct political control", "no control", "military rule only"], correctIndex: 1, explanation: "It is economic control without formal rule." },
        { prompt: "Metals and minerals can be", options: ["recycled after use", "regrown like trees", "created by wind", "used only once and destroyed"], correctIndex: 0, explanation: "Metals are not destroyed and can be recycled." },
        { prompt: "Côte d'Ivoire is associated in the source with", options: ["oil", "cocoa", "bauxite", "iron ore"], correctIndex: 1, explanation: "Cocoa is its key product." },
        { prompt: "Natural resources become output only when combined with", options: ["nothing", "labour, capital and entrepreneurship", "tariffs", "foreign aid"], correctIndex: 1, explanation: "All factors work together in production." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define natural resources and give four examples.", answerKey: "Natural resources are commodities that are useful inputs in their natural state. Examples: farmland, forests, mineral deposits, oil deposits, water. Award 4 for the definition and 1 each for four examples.", marks: 8 },
        { type: "SHORT_ANSWER", prompt: "Distinguish renewable from non-renewable resources with one example of each.", answerKey: "Renewable resources can be replenished by natural processes as quickly as they are used (e.g. sunlight, wind, water; timber if used sustainably). Non-renewable resources are limited and cannot be replaced as quickly as they are used up (e.g. petroleum, coal, natural gas). Award 3 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which country's oil industry provides up to 80% of government revenue?", options: ["Liberia", "Nigeria", "Guinea", "Ghana"], correctIndex: 1, answerKey: "Nigeria. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Compare the natural resources of Liberia with those of three other West African countries.", answerKey: "Liberia — diamonds (which helped fund the civil war; UN export ban lifted 2007). Any three of: Sierra Leone — diamonds; Nigeria — oil (up to 80% of government revenue); Ghana — gold and mining; Guinea — bauxite, diamonds and gold; Mauritania — iron ore (about 40% of exports); Côte d'Ivoire — cocoa. Award 2 for Liberia and 2 for each of three countries.", marks: 8 },
        { type: "ESSAY", prompt: "Discuss natural resources as a factor of production and the economic opportunities and risks they present for Liberia and the West African sub-region.", answerKey: "Award marks for: natural resources as one of the factors of production with definition and examples, 6; renewable vs non-renewable and sustainable use, 5; resources of Liberia and at least three sub-region countries, 7; risks — dependence on raw-material exports, price fluctuations, resource-funded conflict (Liberian diamonds), neocolonial control, 8; a reasoned conclusion on using resources for development, 4.", marks: 30 },
      ],
    },
  ],
};
