import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 12,
// Semester Two, Period IV: International Trade and Balance of Payments.
// CONTENTS: (1) Definitions — international trade, domestic trade, regional
// trade, terms of trade, balance of trade; (2) Features/reasons for
// international trade; (3) Differences between domestic and international trade;
// (4) The law of comparative cost — free trade and protection (UNCTAD), law of
// comparative and absolute advantage; (5) Balance of payments (BOP) — use of
// foreign currency, disequilibrium/adjustment, correcting the balance of
// payments, devaluation and depreciation, BOP deficit and surplus. Each
// top-level CONTENTS item is one topic. Sourced from OpenStax Principles of
// Economics 3e (Ch. 23, 33, 34) and Principles of Macroeconomics 3e (Ch. 16).
export const economicsG12P4: PeriodContent = {
  grade: 12,
  number: 4,
  title: "International Trade and Balance of Payments",
  summary:
    "Period IV of the MoE Grade 12 Economics syllabus. Learners define international, domestic and regional trade, terms of trade and the balance of trade; explain the reasons for international trade and how it differs from domestic trade; apply the law of comparative and absolute advantage and weigh free trade against protection; and analyse the balance of payments, exchange rates, devaluation and depreciation, and BOP deficits and surpluses.",
  topics: [
    // source: OpenStax — Principles of Economics 3e, 33.1 Absolute and Comparative Advantage (https://openstax.org/books/principles-economics-3e/pages/33-1-absolute-and-comparative-advantage) and 23.1 Measuring Trade Balances (https://openstax.org/books/principles-economics-3e/pages/23-1-measuring-trade-balances)
    {
      slug: "definitions-in-international-trade",
      title: "Key Definitions: International, Domestic and Regional Trade, Terms of Trade and Balance of Trade",
      objective:
        "By the end of the topic, learners should be able to define international, domestic and regional trade, terms of trade and the balance of trade, and distinguish a trade surplus from a trade deficit.",
      estimatedMinutes: 100,
      notes: `## Types of trade

**Trade** — the exchange of goods and services between buyers and sellers.
**Domestic (internal) trade** — the buying and selling of goods and services **within the borders of one country**, using one currency and one set of laws.
**International (foreign) trade** — the exchange of goods and services **between different countries**; it involves **exports** (goods sold abroad) and **imports** (goods bought from abroad).
**Regional trade** — trade **between countries in the same region or trading bloc** (for example ECOWAS members in West Africa), often with reduced barriers among them.

## Terms of trade

**Terms of trade** — the rate at which one country's goods exchange for another's; in practice, the ratio of **export prices to import prices**.
- Terms of trade "improve" when export prices rise relative to import prices (a country earns more imports per unit of exports).
- Trade only benefits both sides when the exchange lies **between the two countries' opportunity costs**.

## Balance of trade

**Balance of trade** — the difference between a nation's **exports** of goods and services and its **imports** of goods and services over a period.
- **Trade surplus** — exports exceed imports (a positive trade balance).
- **Trade deficit** — imports exceed exports (a negative trade balance).
- Do not confuse the balance of trade with the wider **current account**, which also includes investment income and transfers.

## Summary table

| Term | Meaning |
| --- | --- |
| Domestic trade | Trade within one country |
| International trade | Trade between countries (exports and imports) |
| Regional trade | Trade among countries in the same region/bloc |
| Terms of trade | Ratio of export prices to import prices |
| Balance of trade | Exports minus imports |
| Trade surplus | Exports greater than imports |
| Trade deficit | Imports greater than exports |

## Common errors

- **Confusing terms of trade with balance of trade.** Terms of trade compares export and import *prices*; balance of trade compares export and import *values*.
- **Calling any deficit a debt.** A trade deficit means imports exceed exports in a period, not that the country is bankrupt.
- **Treating exports and imports as the same direction.** Exports leave the country (earn money); imports enter (cost money).`,
      workedExample: `**Question:** In one year a country exports goods worth 500 and imports goods worth 620. (a) What is its balance of trade, and is it a surplus or deficit? (b) If its export prices rise while import prices are unchanged, what happens to its terms of trade?

**Solution**

*Step 1 — balance of trade.* Balance of trade = exports − imports = 500 − 620 = **−120**. Because imports exceed exports, this is a **trade deficit**.

*Step 2 — terms of trade.* Terms of trade = ratio of export prices to import prices. If export prices rise while import prices stay the same, the ratio rises, so the **terms of trade improve** — each unit of exports now buys more imports.

**Answer:** (a) balance of trade = −120, a trade deficit; (b) the terms of trade improve.`,
      quiz: [
        { prompt: "Domestic trade is trade", options: ["between countries", "within the borders of one country", "only in gold", "with no money"], correctIndex: 1, explanation: "Domestic (internal) trade happens inside one country." },
        { prompt: "International trade is trade", options: ["within one town", "between different countries", "only by barter", "with no exports"], correctIndex: 1, explanation: "It is exchange between countries, via exports and imports." },
        { prompt: "Exports are goods", options: ["bought from abroad", "sold to other countries", "made and consumed at home", "given free"], correctIndex: 1, explanation: "Exports are sold abroad." },
        { prompt: "Imports are goods", options: ["sold abroad", "bought from other countries", "consumed only at home", "smuggled"], correctIndex: 1, explanation: "Imports are bought from abroad." },
        { prompt: "Regional trade is trade among countries", options: ["on different continents only", "in the same region or trading bloc", "with no borders", "using barter"], correctIndex: 1, explanation: "It is trade within a region such as ECOWAS." },
        { prompt: "Terms of trade is the ratio of", options: ["imports to exports by weight", "export prices to import prices", "tax to spending", "wages to profit"], correctIndex: 1, explanation: "It compares the prices of exports and imports." },
        { prompt: "Terms of trade improve when", options: ["export prices rise relative to import prices", "import prices rise", "exports fall", "trade stops"], correctIndex: 0, explanation: "Higher relative export prices buy more imports." },
        { prompt: "Balance of trade is", options: ["exports minus imports", "exports plus imports", "imports times exports", "taxes minus spending"], correctIndex: 0, explanation: "It is the difference between exports and imports." },
        { prompt: "A trade surplus means", options: ["imports exceed exports", "exports exceed imports", "no trade", "equal trade"], correctIndex: 1, explanation: "Exports greater than imports is a surplus." },
        { prompt: "A trade deficit means", options: ["exports exceed imports", "imports exceed exports", "no imports", "a balanced account"], correctIndex: 1, explanation: "Imports greater than exports is a deficit." },
        { prompt: "The current account is wider than the balance of trade because it also includes", options: ["only exports", "investment income and transfers", "nothing extra", "imports only"], correctIndex: 1, explanation: "It adds factor income and transfers to trade." },
        { prompt: "If exports = 300 and imports = 300, the balance of trade is", options: ["a surplus", "a deficit", "balanced (zero)", "negative"], correctIndex: 2, explanation: "Equal exports and imports give a zero balance." },
        { prompt: "Trade between ECOWAS countries is an example of", options: ["domestic trade", "regional trade", "barter only", "a trade deficit"], correctIndex: 1, explanation: "It is trade within a regional bloc." },
        { prompt: "A country with export prices rising and import prices falling has", options: ["worsening terms of trade", "improving terms of trade", "a trade deficit for sure", "no trade"], correctIndex: 1, explanation: "Both changes raise the export/import price ratio." },
        { prompt: "Which involves crossing national borders?", options: ["domestic trade", "international trade", "a family sale", "internal trade"], correctIndex: 1, explanation: "International trade crosses borders." },
        { prompt: "A trade deficit of 50 means", options: ["exports exceed imports by 50", "imports exceed exports by 50", "trade is balanced", "there is no trade"], correctIndex: 1, explanation: "A negative balance means imports exceed exports." },
        { prompt: "Terms of trade compares ______, while balance of trade compares ______.", options: ["values; prices", "prices; values", "taxes; wages", "exports; exports"], correctIndex: 1, explanation: "Terms of trade uses prices; balance of trade uses values." },
        { prompt: "Trade benefits both countries only when the exchange lies", options: ["above both opportunity costs", "between the two countries' opportunity costs", "below both", "at zero"], correctIndex: 1, explanation: "A mutually beneficial rate is between their opportunity costs." },
        { prompt: "Buying rice from Thailand into Liberia is, for Liberia, an", options: ["export", "import", "domestic sale", "transfer"], correctIndex: 1, explanation: "Goods bought from abroad are imports." },
        { prompt: "Which is TRUE of a trade surplus?", options: ["imports exceed exports", "exports exceed imports", "there is no trade", "the terms of trade must be worsening"], correctIndex: 1, explanation: "A surplus is exports greater than imports." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define domestic trade, international trade and regional trade.", answerKey: "Domestic (internal) trade is the buying and selling of goods and services within the borders of one country. International (foreign) trade is the exchange of goods and services between different countries, through exports and imports. Regional trade is trade between countries in the same region or trading bloc (such as ECOWAS), often with reduced barriers. Award 3 marks each.", marks: 9 },
        { type: "SHORT_ANSWER", prompt: "Define the balance of trade and distinguish a trade surplus from a trade deficit.", answerKey: "The balance of trade is the difference between a nation's exports and its imports of goods and services over a period (exports minus imports). A trade surplus exists when exports exceed imports (positive balance); a trade deficit exists when imports exceed exports (negative balance). Award 4 for the definition and 3 for each of surplus/deficit up to 6.", marks: 10 },
        { type: "MULTIPLE_CHOICE", prompt: "A country exports 400 and imports 350. Its balance of trade is", options: ["a deficit of 50", "a surplus of 50", "balanced", "a surplus of 750"], correctIndex: 1, answerKey: "400 − 350 = +50, a trade surplus. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain the term 'terms of trade' and when they improve.", answerKey: "Terms of trade is the rate at which a country's exports exchange for imports — in practice the ratio of export prices to import prices. They improve when export prices rise relative to import prices, so each unit of exports buys more imports. Award marks for the definition and the improvement condition.", marks: 6 },
        { type: "ESSAY", prompt: "Define international, domestic and regional trade, terms of trade and the balance of trade, and explain the difference between a trade surplus and a trade deficit.", answerKey: "Award marks for: domestic trade (within a country), 4; international trade (between countries, exports/imports), 5; regional trade (within a bloc), 4; terms of trade (ratio of export to import prices), 6; balance of trade (exports minus imports) with surplus and deficit distinguished, 8; a clear worked or numeric illustration, 3.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 33.1 Absolute and Comparative Advantage (https://openstax.org/books/principles-economics-3e/pages/33-1-absolute-and-comparative-advantage) and 33.2 What Happens When a Country Has an Absolute Advantage in All Goods (https://openstax.org/books/principles-economics-3e/pages/33-2-what-happens-when-a-country-has-an-absolute-advantage-in-all-goods)
    {
      slug: "features-and-reasons-for-international-trade",
      title: "Features and Reasons for International Trade",
      objective:
        "By the end of the topic, learners should be able to explain the main reasons why countries trade and the benefits (features) of international trade.",
      estimatedMinutes: 100,
      notes: `## Why countries trade

- **Comparative advantage** — trade occurs because a country can produce a good at a **lower opportunity cost** than others. Each country specialises where its opportunity cost is lowest.
- **Gains from specialisation and trade** — even if one country is more efficient at everything (absolute advantage in all goods), both still gain by specialising in their comparative advantage; **total world output rises** and larger amounts of both goods become available.
- **Uneven distribution of resources** — countries differ in climate, minerals, labour and capital, so some goods can only be produced, or produced more cheaply, in certain countries.
- **Variety and choice** — trade lets consumers buy goods not produced at home and enjoy greater variety.
- **Economies of scale** — producing for a large world market lets firms produce at lower average cost.

## Features / benefits of international trade

- **Larger markets** for producers and **more choice** for consumers.
- **Higher total output** and more efficient use of world resources through specialisation.
- **Access to resources and technology** not available at home.
- **Competition** that can lower prices and improve quality.
- **Foreign exchange earnings** from exports, which help pay for imports and development.

## The opportunity-cost idea

- If a country uses resources to make one good, it gives up making another — that is the **opportunity cost**.
- A country should export goods with a **low opportunity cost** and import goods whose home opportunity cost is **high**.

## Common errors

- **Thinking a country must be best at a good to export it.** It only needs a *comparative* (lower opportunity cost) advantage, not an absolute one.
- **Assuming trade helps only the more efficient country.** Both countries gain when they specialise by comparative advantage.
- **Ignoring variety and scale.** Trade also brings choice and lower costs through larger markets.`,
      workedExample: `**Question:** Saudi Arabia needs 1 hour to make a barrel of oil and 4 hours for a bushel of corn; the USA needs 2 hours for oil and 1 hour for corn. (a) Who has the absolute advantage in each good? (b) Who has the comparative advantage in oil? (c) Why should they trade?

**Solution**

*Step 1 — absolute advantage.* Saudi Arabia makes oil faster (1 hour vs 2), so it has the absolute advantage in **oil**. The USA makes corn faster (1 hour vs 4), so it has the absolute advantage in **corn**.

*Step 2 — comparative advantage in oil.* Saudi Arabia's opportunity cost of one barrel of oil is 1/4 bushel of corn; the USA's is 1/2 bushel. Saudi Arabia gives up less corn, so it has the **comparative advantage in oil** (and the USA in corn).

*Step 3 — why trade.* Each specialises where its opportunity cost is lowest — Saudi Arabia in oil, the USA in corn. Total world output rises and both can consume more of both goods, so **both gain from trade**.

**Answer:** (a) Saudi Arabia in oil, USA in corn; (b) Saudi Arabia has the comparative advantage in oil; (c) specialising by comparative advantage raises total output so both countries gain.`,
      quiz: [
        { prompt: "The fundamental reason countries trade is", options: ["comparative advantage (lower opportunity cost)", "identical resources", "to lose money", "to avoid specialisation"], correctIndex: 0, explanation: "Trade rests on differences in opportunity cost." },
        { prompt: "Even if one country is more efficient at everything, trade still", options: ["helps neither country", "benefits both when each specialises by comparative advantage", "only helps the weaker country", "reduces world output"], correctIndex: 1, explanation: "Both gain from specialising by comparative advantage." },
        { prompt: "Specialisation by comparative advantage makes total world output", options: ["fall", "rise", "unchanged", "zero"], correctIndex: 1, explanation: "It uses world resources more efficiently, raising output." },
        { prompt: "Countries differ in what they can produce because of", options: ["identical climates", "uneven distribution of resources", "no differences", "the same technology"], correctIndex: 1, explanation: "Differences in climate, minerals, labour and capital drive trade." },
        { prompt: "A benefit of trade for consumers is", options: ["less choice", "greater variety and choice", "higher prices always", "no imports"], correctIndex: 1, explanation: "Trade offers goods not made at home." },
        { prompt: "Producing for a large world market can lower average cost through", options: ["economies of scale", "higher opportunity cost", "less output", "protection"], correctIndex: 0, explanation: "Bigger markets allow economies of scale." },
        { prompt: "A country should export goods with a", options: ["high opportunity cost", "low opportunity cost", "zero price", "no demand"], correctIndex: 1, explanation: "Export where opportunity cost is lowest." },
        { prompt: "A country should import goods whose home opportunity cost is", options: ["low", "high", "zero", "negative"], correctIndex: 1, explanation: "Import goods that are costly to make at home." },
        { prompt: "Absolute advantage means a country can", options: ["produce more of a good than another", "produce at lower opportunity cost only", "never trade", "avoid specialisation"], correctIndex: 0, explanation: "Absolute advantage is producing more of a good." },
        { prompt: "Comparative advantage means producing a good at", options: ["a higher opportunity cost", "a lower opportunity cost than others", "no cost", "the same cost"], correctIndex: 1, explanation: "It is the lower opportunity cost advantage." },
        { prompt: "Foreign exchange earned from exports helps a country", options: ["pay for imports and development", "avoid all trade", "lower its output", "stop specialising"], correctIndex: 0, explanation: "Export earnings fund imports and development." },
        { prompt: "Competition from trade can", options: ["raise prices and lower quality", "lower prices and improve quality", "remove all firms", "end variety"], correctIndex: 1, explanation: "Trade pressures firms to cut prices and improve." },
        { prompt: "Trade lets a country access", options: ["only its own resources", "resources and technology not available at home", "no new goods", "less choice"], correctIndex: 1, explanation: "Imports bring foreign resources and technology." },
        { prompt: "A country need only have a ______ advantage to gain from exporting a good.", options: ["absolute", "comparative", "military", "population"], correctIndex: 1, explanation: "Comparative advantage is enough to gain from trade." },
        { prompt: "Opportunity cost in trade is", options: ["the money price only", "what is given up to produce one good instead of another", "always zero", "the tax on trade"], correctIndex: 1, explanation: "It is the alternative output forgone." },
        { prompt: "Which is a feature/benefit of international trade?", options: ["smaller markets", "more efficient use of world resources", "less variety", "higher costs"], correctIndex: 1, explanation: "Specialisation improves world resource use." },
        { prompt: "If Saudi Arabia's opportunity cost of oil (1/4 corn) is below the USA's (1/2 corn), then", options: ["the USA should make oil", "Saudi Arabia has the comparative advantage in oil", "neither should trade", "oil cannot be traded"], correctIndex: 1, explanation: "Lower opportunity cost gives the comparative advantage." },
        { prompt: "Trade allows firms to reach", options: ["only local buyers", "larger markets", "no buyers", "fewer buyers"], correctIndex: 1, explanation: "Exports expand a firm's market." },
        { prompt: "A country with poor soil for wheat but good conditions for rubber should", options: ["make both equally", "specialise in rubber and import wheat", "make only wheat", "avoid trade"], correctIndex: 1, explanation: "Specialise where costs are lowest and import the rest." },
        { prompt: "The claim 'trade only helps the stronger country' is", options: ["true", "false — both gain by comparative advantage", "true for all goods", "always correct"], correctIndex: 1, explanation: "Both countries gain from specialising by comparative advantage." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State four reasons why countries engage in international trade.", answerKey: "Any four of: comparative advantage / differences in opportunity cost; gains from specialisation (higher total output); uneven distribution of resources (climate, minerals, labour, capital); variety and choice for consumers; economies of scale from larger markets; foreign exchange earnings. Award 2 marks each.", marks: 8 },
        { type: "SHORT_ANSWER", prompt: "Explain why both countries can gain from trade even if one is more efficient at producing everything.", answerKey: "Even with an absolute advantage in all goods, a country still has a higher opportunity cost in some good. If each country specialises in the good where its opportunity cost is lowest (its comparative advantage), total world output rises and larger amounts of both goods become available, so both countries can consume more and both gain. Award marks for the comparative-advantage/opportunity-cost point and the mutual-gains point.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "A country should specialise in and export a good in which it has", options: ["the higher opportunity cost", "a comparative advantage (lower opportunity cost)", "no demand", "an absolute disadvantage"], correctIndex: 1, answerKey: "Export where opportunity cost is lowest. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Give three benefits (features) of international trade.", answerKey: "Any three of: larger markets for producers and more choice/variety for consumers; higher total output and efficient use of world resources; access to resources and technology not available at home; competition lowering prices and improving quality; foreign-exchange earnings. Award 2 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the reasons for international trade and the benefits a country such as Liberia can gain from it.", answerKey: "Award marks for: comparative advantage and opportunity cost as the basis of trade, 8; gains from specialisation and higher world output, 6; uneven resource distribution, 4; variety, economies of scale and competition, 6; foreign-exchange earnings for imports and development, 4; a reasoned conclusion applied to Liberia, 2.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Macroeconomics 3e, 16.1 How the Foreign Exchange Market Works (https://openstax.org/books/principles-macroeconomics-3e/pages/16-1-how-the-foreign-exchange-market-works) and Principles of Economics 3e, 34.1 Protectionism (https://openstax.org/books/principles-economics-3e/pages/34-1-protectionism-an-indirect-subsidy-from-consumers-to-producers)
    {
      slug: "differences-between-domestic-and-international-trade",
      title: "Differences between Domestic and International Trade",
      objective:
        "By the end of the topic, learners should be able to explain how international trade differs from domestic trade.",
      estimatedMinutes: 90,
      notes: `## Key differences

**Currencies**
- Domestic trade uses **one national currency**.
- International trade involves **different currencies**, so buyers must convert money on the **foreign exchange market** at an exchange rate that can rise (appreciate) or fall (depreciate).

**Barriers and restrictions**
- Domestic trade is largely **free of trade barriers** within the country.
- International trade can face **protectionism** — government policies that reduce or block trade, such as **tariffs** (taxes on imports) and **import quotas** (numerical limits on imports).

**Laws, currencies and documentation**
- International trade crosses different **legal systems, tax rules and customs procedures**, needing extra documentation (customs, licences).

**Distance and transport**
- International trade usually involves **greater distances**, higher transport and insurance costs, and more risk.

**Mobility of factors of production**
- Labour and capital move fairly freely **within** a country but much **less freely between** countries.

## Comparison table

| Feature | Domestic trade | International trade |
| --- | --- | --- |
| Currency | One currency | Different currencies (exchange rate) |
| Barriers | Few within a country | Tariffs, quotas, protection |
| Laws/customs | One system | Different systems, customs procedures |
| Distance/transport | Usually shorter | Usually longer, costlier, riskier |
| Factor mobility | Fairly mobile | Less mobile across borders |

## Common errors

- **Thinking exchange rates matter in domestic trade.** Only international trade involves converting currencies.
- **Assuming barriers are the same.** Tariffs and quotas apply to international, not internal, trade.
- **Ignoring factor mobility.** Workers and capital move more easily within a country than between countries.`,
      workedExample: `**Question:** A trader in Monrovia sells rice to a shop in Ganta; another trader imports rice from Thailand. Give three ways the second (international) transaction differs from the first (domestic) one.

**Solution**

*Step 1 — currency.* The domestic sale uses one currency. The import from Thailand needs the trader to convert Liberian dollars into foreign currency on the **foreign exchange market** at an exchange rate that can change.

*Step 2 — barriers.* The domestic sale faces no trade barriers. The import may face **tariffs** (import taxes) or **quotas** (limits on quantity), and must clear customs.

*Step 3 — distance and law.* The import crosses a much greater distance (higher transport and insurance cost and risk) and involves different **legal and customs systems** and documentation.

**Answer:** the international transaction differs by using different currencies (exchange rate), facing tariffs/quotas and customs, and involving greater distance and different laws.`,
      quiz: [
        { prompt: "A key difference in international trade is the use of", options: ["one currency", "different currencies and an exchange rate", "no money", "barter only"], correctIndex: 1, explanation: "Cross-border trade needs currency conversion." },
        { prompt: "Converting one currency into another happens on the", options: ["stock market", "foreign exchange market", "labour market", "goods market only"], correctIndex: 1, explanation: "The forex market sets exchange rates." },
        { prompt: "Tariffs are", options: ["taxes on imported goods", "subsidies to consumers", "domestic sales taxes only", "free gifts"], correctIndex: 0, explanation: "Tariffs are taxes governments impose on imports." },
        { prompt: "Import quotas are", options: ["taxes on exports", "numerical limits on the quantity that can be imported", "free-trade rules", "currency conversions"], correctIndex: 1, explanation: "Quotas cap the amount that can be imported." },
        { prompt: "Protectionism means government policies that", options: ["encourage all trade", "reduce or block international trade", "remove all taxes", "fix currencies"], correctIndex: 1, explanation: "Protectionism restricts trade to shield home producers." },
        { prompt: "Domestic trade usually faces", options: ["tariffs and quotas", "few trade barriers within the country", "different currencies", "customs at every town"], correctIndex: 1, explanation: "Internal trade is largely barrier-free." },
        { prompt: "Factors of production move", options: ["more freely between countries than within", "more freely within a country than between countries", "equally everywhere", "never at all"], correctIndex: 1, explanation: "Labour and capital are more mobile domestically." },
        { prompt: "International trade often involves", options: ["shorter distances", "greater distances, higher transport and insurance costs", "no transport", "no risk"], correctIndex: 1, explanation: "Cross-border trade covers longer, costlier routes." },
        { prompt: "International trade crosses different", options: ["legal and customs systems", "identical laws", "one tax rule", "no borders"], correctIndex: 0, explanation: "Different countries have different laws and customs." },
        { prompt: "An exchange rate matters in", options: ["domestic trade", "international trade", "neither", "barter only"], correctIndex: 1, explanation: "Only cross-currency trade uses exchange rates." },
        { prompt: "A tariff on imported rice will", options: ["lower its price", "raise its price to consumers", "have no effect", "increase quotas"], correctIndex: 1, explanation: "Tariffs raise the price of imports." },
        { prompt: "Which applies to international but not domestic trade?", options: ["using money", "customs procedures and documentation", "having buyers", "having sellers"], correctIndex: 1, explanation: "Customs clearance is an international-trade feature." },
        { prompt: "Within a country, trade generally uses", options: ["many currencies", "one national currency", "no currency", "foreign currency"], correctIndex: 1, explanation: "Domestic trade uses a single currency." },
        { prompt: "A reason international trade is riskier is", options: ["no distance", "greater distance, different laws and currency changes", "identical systems", "no transport cost"], correctIndex: 1, explanation: "Distance, law and exchange-rate risk add uncertainty." },
        { prompt: "Quotas and tariffs are examples of", options: ["free trade", "trade barriers (protection)", "domestic taxes", "exchange rates"], correctIndex: 1, explanation: "They are protectionist trade barriers." },
        { prompt: "If a currency depreciates, imports become", options: ["cheaper", "more expensive", "free", "unchanged"], correctIndex: 1, explanation: "A weaker currency buys less abroad, raising import prices." },
        { prompt: "Which is the same in both domestic and international trade?", options: ["the need for buyers and sellers to exchange goods", "the currency used", "the customs procedures", "the exchange rate"], correctIndex: 0, explanation: "Both are exchanges of goods and services." },
        { prompt: "Documentation such as customs licences is needed mainly in", options: ["domestic trade", "international trade", "neither", "barter"], correctIndex: 1, explanation: "Cross-border trade requires customs paperwork." },
        { prompt: "Labour is generally less mobile", options: ["within a country", "between countries", "in domestic trade", "in a single market"], correctIndex: 1, explanation: "Moving workers across borders is harder." },
        { prompt: "A government using tariffs and quotas is practising", options: ["free trade", "protectionism", "barter", "devaluation"], correctIndex: 1, explanation: "Restricting imports is protectionism." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State four differences between domestic and international trade.", answerKey: "Any four of: domestic uses one currency while international uses different currencies (exchange rate); domestic faces few barriers while international faces tariffs, quotas and protection; international crosses different legal/tax/customs systems needing documentation; international covers greater distances with higher transport/insurance cost and risk; factors of production are more mobile within than between countries. Award 2 marks each.", marks: 8 },
        { type: "SHORT_ANSWER", prompt: "Explain why exchange rates are relevant to international but not domestic trade.", answerKey: "Domestic trade uses a single national currency, so no conversion is needed. International trade involves parties using different currencies, so payment requires converting one currency into another on the foreign exchange market at an exchange rate that can appreciate or depreciate, affecting the cost of imports and the earnings from exports. Award marks for the single-vs-different currency point and the conversion/exchange-rate effect.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which feature belongs to international trade but not domestic trade?", options: ["buyers and sellers", "tariffs and customs procedures", "use of money", "prices"], correctIndex: 1, answerKey: "Tariffs and customs apply to cross-border trade. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Define a tariff and an import quota and state one effect of each.", answerKey: "A tariff is a tax governments impose on imported goods and services; it raises the price of imports to consumers and protects domestic producers. An import quota is a numerical limit on the quantity of a product that can be imported; it restricts supply of the import and can raise its price. Award marks for each definition and effect.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss the main differences between domestic and international trade.", answerKey: "Award marks for: currencies and exchange rates, 6; trade barriers — tariffs, quotas, protection, 7; different legal, tax and customs systems and documentation, 6; distance, transport, insurance and risk, 6; mobility of factors of production, 5. A script covering fewer than three differences loses proportionally.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 33.1 Absolute and Comparative Advantage (https://openstax.org/books/principles-economics-3e/pages/33-1-absolute-and-comparative-advantage) and 34.1 Protectionism: An Indirect Subsidy from Consumers to Producers (https://openstax.org/books/principles-economics-3e/pages/34-1-protectionism-an-indirect-subsidy-from-consumers-to-producers)
    {
      slug: "comparative-and-absolute-advantage",
      title: "The Law of Comparative Cost: Comparative and Absolute Advantage, Free Trade and Protection",
      objective:
        "By the end of the topic, learners should be able to explain the law of comparative advantage and absolute advantage, and weigh free trade against protection.",
      estimatedMinutes: 120,
      notes: `## Absolute and comparative advantage

**Absolute advantage** — a country has an absolute advantage over another in producing a good if it can **produce more of that good** (or produce it using fewer resources).
**Comparative advantage** — a country has a comparative advantage when it can produce a good at a **lower opportunity cost** (a lower cost in terms of other goods) than another country.
**Opportunity cost** — what is given up to produce one good instead of another.

## The law of comparative cost (comparative advantage)

- **Even if one country has an absolute advantage in all goods**, both countries still gain from trade **provided their opportunity costs differ**.
- Each country should **specialise** in the good where its opportunity cost is lowest and trade for the rest.
- Specialisation by comparative advantage gives a **more efficient allocation of world resources** and **larger total output** of both goods.

## Free trade

**Free trade** — international commerce with **no barriers** (no tariffs or quotas), which tends to bring prices in different countries closer together.
- Argument for: it lets each country specialise by comparative advantage, giving lower prices, more variety and higher total output.

## Protection

**Protectionism** — government policies that **reduce or block** international trade, using **tariffs** (taxes on imports) and **import quotas** (limits on quantities).
- **Arguments for protection:** shield **domestic producers and workers** from foreign competition; protect **infant (new) industries**; safeguard jobs; and protect strategic industries.
- **Arguments against protection:** consumers pay **higher prices**; there is a **net loss of social surplus**; it **removes the gains from trade**; and it harms foreign producers, including those in developing countries.

## UNCTAD

**UNCTAD** (United Nations Conference on Trade and Development) is the UN body that promotes **trade as a tool for the development** of developing countries and helps them take part in world trade on fairer terms.

## Common errors

- **Basing trade on absolute advantage.** The correct basis is *comparative* advantage (opportunity cost).
- **Assuming protection is costless.** It raises prices for consumers and reduces total gains from trade.
- **Thinking a country with an absolute advantage in everything should not trade.** It still gains if opportunity costs differ.`,
      workedExample: `**Question:** Country A can make, per worker per day, either 10 units of cloth or 5 units of wheat. Country B can make either 6 units of cloth or 6 units of wheat. (a) Find each country's opportunity cost of wheat. (b) Who has the comparative advantage in wheat? (c) Advise on specialisation.

**Solution**

*Step 1 — opportunity cost of wheat.* In Country A, making 5 wheat means giving up 10 cloth, so 1 wheat costs 10/5 = **2 cloth**. In Country B, making 6 wheat means giving up 6 cloth, so 1 wheat costs 6/6 = **1 cloth**.

*Step 2 — comparative advantage in wheat.* Country B gives up only 1 cloth per wheat, versus 2 cloth in Country A, so **Country B has the comparative advantage in wheat**. By elimination, Country A has the comparative advantage in cloth.

*Step 3 — advice.* Country A should **specialise in cloth** and Country B in **wheat**, then trade. Specialisation by comparative advantage raises total output so both gain.

**Answer:** (a) A: 2 cloth per wheat; B: 1 cloth per wheat; (b) Country B in wheat; (c) A specialises in cloth, B in wheat, and they trade.`,
      quiz: [
        { prompt: "Absolute advantage means a country can", options: ["produce more of a good than another", "produce at a higher opportunity cost", "never trade", "only import"], correctIndex: 0, explanation: "It is the ability to produce more of a good." },
        { prompt: "Comparative advantage means producing a good at a", options: ["higher opportunity cost", "lower opportunity cost than others", "zero cost", "fixed price"], correctIndex: 1, explanation: "It is a lower opportunity cost advantage." },
        { prompt: "The law of comparative cost says both countries gain from trade if their", options: ["opportunity costs differ", "opportunity costs are equal", "currencies match", "populations match"], correctIndex: 0, explanation: "Differing opportunity costs make trade beneficial." },
        { prompt: "Each country should specialise in the good where its opportunity cost is", options: ["highest", "lowest", "zero", "average"], correctIndex: 1, explanation: "Specialise where opportunity cost is lowest." },
        { prompt: "Specialisation by comparative advantage makes world resource use", options: ["less efficient", "more efficient", "unchanged", "wasteful"], correctIndex: 1, explanation: "It allocates world resources more efficiently." },
        { prompt: "Free trade means international commerce with", options: ["many tariffs", "no barriers", "quotas only", "high protection"], correctIndex: 1, explanation: "Free trade removes tariffs and quotas." },
        { prompt: "Free trade tends to make prices in different countries", options: ["diverge", "converge (come closer)", "disappear", "double"], correctIndex: 1, explanation: "Open trade brings prices closer together." },
        { prompt: "Protectionism uses tools such as", options: ["tariffs and import quotas", "free ports", "open borders", "no taxes"], correctIndex: 0, explanation: "Tariffs and quotas restrict trade." },
        { prompt: "An argument FOR protection is to", options: ["raise consumer prices", "shield domestic producers and protect jobs", "remove all industries", "end specialisation"], correctIndex: 1, explanation: "Protection is defended as safeguarding home producers and jobs." },
        { prompt: "The infant-industry argument supports protection to", options: ["help new industries grow before facing full competition", "close old industries", "raise tariffs forever", "ban exports"], correctIndex: 0, explanation: "New industries may need temporary protection." },
        { prompt: "An argument AGAINST protection is that consumers", options: ["pay lower prices", "pay higher prices", "gain variety", "lose nothing"], correctIndex: 1, explanation: "Protection raises prices for consumers." },
        { prompt: "Protection tends to ______ the gains from trade.", options: ["increase", "remove or reduce", "double", "guarantee"], correctIndex: 1, explanation: "It eliminates gains both countries would achieve." },
        { prompt: "A country with an absolute advantage in all goods should", options: ["never trade", "still trade if opportunity costs differ", "block all imports", "ignore comparative advantage"], correctIndex: 1, explanation: "Trade still benefits both when opportunity costs differ." },
        { prompt: "Opportunity cost is", options: ["the money price only", "what is given up to produce one good instead of another", "always zero", "the tariff rate"], correctIndex: 1, explanation: "It is the forgone alternative output." },
        { prompt: "UNCTAD is a UN body that promotes", options: ["protection for rich countries", "trade for the development of developing countries", "banning all trade", "fixed exchange rates only"], correctIndex: 1, explanation: "UNCTAD links trade to development for poorer countries." },
        { prompt: "If Country A gives up 2 cloth per wheat and Country B gives up 1 cloth per wheat, wheat's comparative advantage is with", options: ["Country A", "Country B", "neither", "both equally"], correctIndex: 1, explanation: "B has the lower opportunity cost of wheat." },
        { prompt: "Tariffs are best described as", options: ["taxes on imports", "subsidies to importers", "free-trade rules", "export bonuses"], correctIndex: 0, explanation: "Tariffs tax imported goods." },
        { prompt: "A net loss of social surplus is an argument", options: ["for protection", "against protection", "for tariffs", "for quotas"], correctIndex: 1, explanation: "Protection reduces overall welfare (surplus)." },
        { prompt: "The correct basis for deciding what to export is", options: ["absolute advantage", "comparative advantage (opportunity cost)", "population size", "currency strength"], correctIndex: 1, explanation: "Comparative advantage guides specialisation." },
        { prompt: "Specialisation and trade by comparative advantage make total output of both goods", options: ["fall", "larger", "zero", "unchanged"], correctIndex: 1, explanation: "More of both goods becomes available." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between absolute advantage and comparative advantage.", answerKey: "A country has an absolute advantage in a good if it can produce more of it (or with fewer resources) than another country. A country has a comparative advantage in a good if it can produce it at a lower opportunity cost (lower cost in terms of other goods) than another country. Comparative advantage, not absolute advantage, determines beneficial specialisation. Award 5 for each.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "State the law of comparative cost and what it recommends.", answerKey: "The law of comparative cost (comparative advantage) states that even if one country has an absolute advantage in all goods, both countries gain from trade provided their opportunity costs differ. It recommends that each country specialise in the good where its opportunity cost is lowest and trade for the rest, raising total world output. Award marks for the condition (differing opportunity costs) and the specialisation recommendation.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Both countries can gain from trade when", options: ["their opportunity costs are identical", "their opportunity costs differ", "one blocks all imports", "they use the same currency"], correctIndex: 1, answerKey: "Differing opportunity costs create mutual gains. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Give two arguments for and two arguments against protection.", answerKey: "For (any two): shields domestic producers and workers from foreign competition; protects infant industries; safeguards jobs; protects strategic industries. Against (any two): consumers pay higher prices; net loss of social surplus; removes gains from trade; harms foreign producers including developing countries. Award 1.5 marks each, up to four points.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the law of comparative advantage and discuss the case for free trade against the case for protection.", answerKey: "Award marks for: definitions of absolute and comparative advantage and opportunity cost, 8; the law of comparative cost — mutual gains when opportunity costs differ, specialisation, larger world output, 8; case for free trade (lower prices, variety, efficiency), 6; case for protection (protect producers/jobs, infant industries) and its costs (higher prices, lost gains from trade), 6; a reasoned conclusion, 2.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 23.1 Measuring Trade Balances (https://openstax.org/books/principles-economics-3e/pages/23-1-measuring-trade-balances) and Principles of Macroeconomics 3e, 16.1 How the Foreign Exchange Market Works (https://openstax.org/books/principles-macroeconomics-3e/pages/16-1-how-the-foreign-exchange-market-works)
    {
      slug: "balance-of-payments",
      title: "The Balance of Payments, Exchange Rates, Devaluation and Depreciation",
      objective:
        "By the end of the topic, learners should be able to explain the balance of payments, its deficit and surplus, the use of foreign currency, and the difference between devaluation and depreciation.",
      estimatedMinutes: 120,
      notes: `## The balance of payments

**Balance of payments (BOP)** — a record of all economic transactions between a country and the rest of the world over a period.
- A **credit** is recorded whenever a country **receives funds** from abroad (exports, loans/investment received, income from foreign assets).
- A **debit** is recorded whenever there is an **outflow of funds** (imports, investing abroad).
- The BOP includes the **current account** (trade in goods and services, factor income, and transfers) and the **capital and financial account** (flows of financial capital).

**Balance of trade** — the difference between exports and imports of goods and services; it is part of the current account.

## Deficit and surplus

- A **current account deficit** (debits exceed credits) necessarily implies a **capital and financial account surplus** — the country borrows or attracts investment to pay for the excess of imports.
- A **current account surplus** (credits exceed debits) implies a **capital and financial account deficit** — the country lends or invests abroad.
- A **BOP disequilibrium** is a persistent surplus or (more often a concern) deficit that a country may need to **correct**.

## Use of foreign currency and exchange rates

**Foreign exchange market** — where one currency is exchanged for another at an **exchange rate**.
- **Appreciation (strengthening)** — the exchange rate rises, so the currency buys more of other currencies.
- **Depreciation (weakening)** — the exchange rate falls, so the currency buys less of other currencies.
- A **stronger** currency helps buyers/importers and hurts sellers/exporters; a **weaker** currency helps exporters and hurts importers.

## Devaluation vs depreciation

- **Depreciation** — a **fall** in a currency's value brought about by **market forces** (supply and demand) under a floating exchange rate.
- **Devaluation** — a **deliberate reduction** in a currency's official value by the **government/central bank** under a **fixed** exchange-rate system (the opposite, an increase, is **revaluation**).

## Correcting a balance-of-payments deficit

To reduce a persistent deficit a country can:
- **Devalue/allow depreciation** — makes exports cheaper and imports dearer, improving the trade balance.
- **Reduce spending on imports** — through tariffs, quotas or lower domestic demand.
- **Promote exports** — support export industries and diversify.
- **Borrow or attract investment** — finance the gap in the short run.

## Common errors

- **Confusing devaluation with depreciation.** Devaluation is a deliberate government act under fixed rates; depreciation is a market fall under floating rates.
- **Confusing the balance of trade with the balance of payments.** The trade balance is only the goods-and-services part of the current account.
- **Thinking a weaker currency helps everyone.** It helps exporters but raises import prices.`,
      workedExample: `**Question:** A country runs a persistent current account deficit because imports far exceed exports, and its currency is under pressure. (a) What does the deficit imply for its capital and financial account? (b) How would a depreciation of its currency help the trade balance? (c) How does devaluation differ from depreciation?

**Solution**

*Step 1 — the deficit.* A current account deficit (debits exceed credits) necessarily implies a **capital and financial account surplus** — the country must borrow from or attract investment from abroad to pay for the excess imports.

*Step 2 — depreciation helps.* If the currency depreciates, it buys less foreign currency, so **imports become more expensive** and **exports become cheaper** for foreigners. Imports fall and exports rise, improving the trade balance.

*Step 3 — devaluation vs depreciation.* **Depreciation** is a fall caused by **market forces** under a floating rate. **Devaluation** is a **deliberate reduction** of the official rate by the **government/central bank** under a **fixed** exchange-rate system.

**Answer:** (a) it implies a capital and financial account surplus (borrowing/investment inflows); (b) depreciation raises import prices and lowers export prices, improving the trade balance; (c) devaluation is a deliberate government act under fixed rates, depreciation is a market fall under floating rates.`,
      quiz: [
        { prompt: "The balance of payments records", options: ["only exports", "all economic transactions between a country and the rest of the world", "only taxes", "domestic sales"], correctIndex: 1, explanation: "The BOP covers all cross-border transactions." },
        { prompt: "A credit on the BOP is recorded when a country", options: ["receives funds from abroad", "imports goods", "invests abroad", "loses reserves"], correctIndex: 0, explanation: "Inflows of funds are credits." },
        { prompt: "A debit on the BOP is recorded when a country", options: ["exports goods", "receives a loan", "has an outflow of funds (imports, investing abroad)", "earns from foreign assets"], correctIndex: 2, explanation: "Outflows of funds are debits." },
        { prompt: "The current account includes", options: ["only financial capital flows", "trade in goods and services, factor income and transfers", "only imports", "the money supply"], correctIndex: 1, explanation: "It records trade, income and transfers." },
        { prompt: "The balance of trade is part of the", options: ["capital account only", "current account", "money supply", "budget"], correctIndex: 1, explanation: "Trade in goods and services sits in the current account." },
        { prompt: "A current account deficit implies a", options: ["capital and financial account surplus", "capital and financial account deficit too", "balanced capital account", "no capital account"], correctIndex: 0, explanation: "A current deficit is financed by a capital/financial surplus." },
        { prompt: "A current account surplus implies the country is", options: ["borrowing from abroad", "lending or investing abroad", "in default", "printing money"], correctIndex: 1, explanation: "A surplus means net lending/investment abroad." },
        { prompt: "Currency exchange takes place on the", options: ["labour market", "foreign exchange market", "goods market only", "stock exchange only"], correctIndex: 1, explanation: "The forex market sets exchange rates." },
        { prompt: "Appreciation of a currency means it", options: ["buys less foreign currency", "buys more foreign currency", "disappears", "is devalued"], correctIndex: 1, explanation: "Appreciation (strengthening) raises its value." },
        { prompt: "Depreciation of a currency means it", options: ["buys more foreign currency", "buys less foreign currency", "is revalued", "is fixed"], correctIndex: 1, explanation: "Depreciation (weakening) lowers its value." },
        { prompt: "A weaker (depreciated) currency helps", options: ["importers", "exporters", "no one", "only the government"], correctIndex: 1, explanation: "Cheaper exports benefit exporters." },
        { prompt: "A stronger (appreciated) currency helps", options: ["exporters", "importers/buyers", "no one", "only farmers"], correctIndex: 1, explanation: "A stronger currency buys more abroad, helping importers." },
        { prompt: "Depreciation is caused by", options: ["a government decision under fixed rates", "market forces under a floating rate", "a tariff", "a quota"], correctIndex: 1, explanation: "Depreciation is a market-driven fall." },
        { prompt: "Devaluation is", options: ["a market fall under floating rates", "a deliberate reduction of the official rate under fixed rates", "an appreciation", "a tariff"], correctIndex: 1, explanation: "Devaluation is a policy act under fixed rates." },
        { prompt: "An increase in a currency's official value under a fixed system is called", options: ["devaluation", "revaluation", "depreciation", "a deficit"], correctIndex: 1, explanation: "Revaluation raises the fixed official rate." },
        { prompt: "Devaluation or depreciation tends to make exports", options: ["dearer", "cheaper to foreigners", "banned", "unchanged"], correctIndex: 1, explanation: "A weaker currency lowers export prices abroad." },
        { prompt: "A way to correct a BOP deficit is to", options: ["encourage more imports", "promote exports and reduce imports", "ban exports", "raise the currency's value"], correctIndex: 1, explanation: "Boosting exports and cutting imports narrows the deficit." },
        { prompt: "A persistent BOP surplus or deficit is called a", options: ["disequilibrium", "revaluation", "tariff", "quota"], correctIndex: 0, explanation: "An ongoing imbalance is a BOP disequilibrium." },
        { prompt: "The balance of trade differs from the balance of payments because the trade balance covers", options: ["all transactions", "only goods and services (part of the current account)", "only the capital account", "the money supply"], correctIndex: 1, explanation: "The trade balance is just the goods-and-services part." },
        { prompt: "After a depreciation, imports become", options: ["cheaper", "more expensive", "free", "banned"], correctIndex: 1, explanation: "A weaker currency raises import prices." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define the balance of payments and explain what a credit and a debit record.", answerKey: "The balance of payments is a record of all economic transactions between a country and the rest of the world over a period. A credit is recorded when the country receives funds from abroad (exports, loans/investment received, income from foreign assets); a debit is recorded when there is an outflow of funds (imports, investing abroad). Award 4 for the definition and 3 each for credit and debit.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between devaluation and depreciation.", answerKey: "Depreciation is a fall in a currency's value brought about by market forces (supply and demand) under a floating exchange rate. Devaluation is a deliberate reduction in a currency's official value by the government or central bank under a fixed exchange-rate system (its opposite is revaluation). Award 4 for depreciation and 4 for devaluation.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "A current account deficit necessarily implies", options: ["a capital and financial account surplus", "a capital and financial account deficit", "no capital account", "a trade surplus"], correctIndex: 0, answerKey: "A current deficit is financed by a capital/financial surplus. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain how a currency depreciation can help correct a balance-of-payments deficit.", answerKey: "When the currency depreciates it buys less foreign currency, so imports become more expensive (and fall) and exports become cheaper for foreigners (and rise). The improved trade balance reduces the current account deficit. Award marks for the import-price rise and export-price fall and the effect on the trade balance.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the balance of payments (its accounts, deficit and surplus) and discuss the measures a country can use to correct a persistent deficit, including the role of exchange rates.", answerKey: "Award marks for: definition and accounts — current account (trade, income, transfers) and capital/financial account, 8; credits and debits, 4; deficit/surplus and their implications for the capital account, 6; correction measures — devaluation/depreciation (cheaper exports, dearer imports), reducing imports (tariffs/quotas/lower demand), promoting exports, borrowing, 8; exchange-rate concepts (appreciation/depreciation and effects on exporters/importers), 4.", marks: 30 },
      ],
    },
  ],
};
