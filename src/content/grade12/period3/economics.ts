import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 12,
// Semester One, Period III: Money, Banking and the Financial Institutions.
// CONTENTS: (1) Money — definition and origin (development of), characteristics
// and functions, value for money and price; (2) Functions of banks/financial
// institutions — central bank, commercial banks, merchant banks, development
// banks, saving banks, insurance companies, building societies; (3) Definition
// of inflation and unemployment; (4) Types of inflation and unemployment —
// demand-pull, cost-push, structural, cyclical, frictional. Each top-level
// CONTENTS item is one topic. Sourced from OpenStax and LibreTexts.
export const economicsG12P3: PeriodContent = {
  grade: 12,
  number: 3,
  title: "Money, Banking and the Financial Institutions",
  summary:
    "Period III of the MoE Grade 12 Economics syllabus. Learners analyse the origin, meaning, characteristics and functions of money; describe the types and functions of banks and other financial institutions (central, commercial, merchant, development and savings banks, insurance companies and building societies); define inflation and unemployment; and explain the types of inflation (demand-pull, cost-push) and unemployment (structural, cyclical, frictional) and the link between them.",
  topics: [
    // source: OpenStax — Principles of Macroeconomics 3e, 14.1 Defining Money by Its Functions (https://openstax.org/books/principles-macroeconomics-3e/pages/14-1-defining-money-by-its-functions)
    {
      slug: "money-definition-origin-and-functions",
      title: "Money: Definition, Origin, Characteristics and Functions",
      objective:
        "By the end of the topic, learners should be able to define money, explain its origin from barter, state its characteristics and functions, and relate value for money to price.",
      estimatedMinutes: 120,
      notes: `## What money is

**Money** — what people regularly use when purchasing or selling goods and services; both buyers and sellers must widely **accept** it.

## Origin of money — from barter

**Barter** — trading one good or service directly for another.
- Barter needs a **double coincidence of wants** — a situation in which two people each want a good or service that the other can provide.
- This is difficult, so societies developed money to act as an intermediary, first as **commodity money** and later as **fiat money**.
- **Commodity money** — items with intrinsic (their own) value used as currency (gold, silver, shells).
- **Fiat money** — money that has no intrinsic value but is declared by a government to be the country's **legal tender**; it is backed by universal faith and trust that it has value.

## Functions of money

1. **Medium of exchange** — money acts as an intermediary between buyer and seller, removing the need for a double coincidence of wants.
2. **Store of value** — money holds its value, so it can be saved and spent later rather than immediately.
3. **Unit of account** — money is the ruler by which we measure and compare values, a common denominator for trade-offs.
4. **Standard of deferred payment** — money usable today is also accepted to settle debts and payments made in the future.

## Characteristics of good money

Good money should be:
- **Generally acceptable** — everyone will take it in exchange.
- **Durable** — it lasts and does not perish.
- **Portable** — easy to carry and hold value in a small size.
- **Divisible** — can be split into smaller units for small purchases.
- **Uniform (homogeneous)** — each unit is the same as another.
- **Limited in supply (scarce)** — its supply is controlled so it keeps its value.
- **Difficult to counterfeit** — hard to copy.

## Value for money and price

- **Price** — the amount of money that must be paid to buy a good or service; it is money's **unit of account** function in use.
- **Value for money** — getting a good or service whose usefulness (satisfaction/quality) is worth the price paid.
- The **value of money** is what a unit of money can buy (its purchasing power); when prices rise, the value of money falls.

## Common errors

- **Thinking money must have intrinsic value.** Fiat money has none; it works because it is accepted and is legal tender.
- **Confusing barter with money exchange.** Barter needs a double coincidence of wants; money removes that need.
- **Confusing price with the value of money.** Price is what a good costs; the value of money is what a unit of money can buy.`,
      workedExample: `**Question:** A fisherman wants rice but the rice farmer does not want fish; she wants a cutlass. (a) What problem of barter does this show? (b) How does money solve it? (c) Which two functions of money are at work when the fisherman sells fish for money and later buys rice?

**Solution**

*Step 1 — the problem.* Barter needs a **double coincidence of wants** — both traders must want what the other has. Here the rice farmer does not want fish, so the trade fails.

*Step 2 — money solves it.* Money is a **medium of exchange**: the fisherman sells fish for money to anyone who wants fish, then uses the money to buy rice from the farmer. No double coincidence of wants is needed.

*Step 3 — functions.* When he receives money for fish and holds it until he buys rice, money acts as a **medium of exchange** and a **store of value** (it keeps its value between the sale and the purchase).

**Answer:** (a) the double coincidence of wants; (b) money serves as a medium of exchange so trades no longer need matching wants; (c) medium of exchange and store of value.`,
      quiz: [
        { prompt: "Money is best defined as", options: ["only gold coins", "what people regularly use and widely accept to buy and sell", "a government office", "any physical object"], correctIndex: 1, explanation: "Money is a widely accepted means of purchase." },
        { prompt: "Barter means", options: ["using paper money", "trading one good or service directly for another", "saving in a bank", "paying taxes"], correctIndex: 1, explanation: "Barter is direct exchange of goods." },
        { prompt: "The double coincidence of wants is", options: ["two people each wanting what the other has", "one person wanting money", "a bank loan", "a tax"], correctIndex: 0, explanation: "Both traders must want the other's good." },
        { prompt: "Commodity money has", options: ["no value of its own", "intrinsic value (gold, silver, shells)", "only legal-tender status", "no acceptability"], correctIndex: 1, explanation: "Commodity money has intrinsic value." },
        { prompt: "Fiat money is", options: ["backed by gold only", "declared legal tender though it has no intrinsic value", "a type of barter", "always coins"], correctIndex: 1, explanation: "Fiat money works by trust and legal-tender status." },
        { prompt: "Money acting as an intermediary between buyer and seller is its function as", options: ["store of value", "medium of exchange", "unit of account", "deferred payment"], correctIndex: 1, explanation: "This is the medium-of-exchange function." },
        { prompt: "Being able to save money and spend it later is money as a", options: ["medium of exchange", "store of value", "unit of account", "barter tool"], correctIndex: 1, explanation: "Money holds value over time." },
        { prompt: "Money as 'the ruler by which we measure values' is its function as", options: ["store of value", "unit of account", "medium of exchange", "legal tender"], correctIndex: 1, explanation: "Unit of account measures and compares values." },
        { prompt: "Using money today to settle a debt paid in the future is", options: ["a standard of deferred payment", "barter", "a store of value only", "counterfeiting"], correctIndex: 0, explanation: "Deferred payment lets money settle future obligations." },
        { prompt: "Which is a characteristic of good money?", options: ["perishable", "durable", "impossible to divide", "unlimited supply"], correctIndex: 1, explanation: "Money should last (durable)." },
        { prompt: "Divisibility of money means it", options: ["cannot be split", "can be split into smaller units for small purchases", "is only large notes", "is perishable"], correctIndex: 1, explanation: "Money must divide for small transactions." },
        { prompt: "If money were unlimited in supply, it would likely", options: ["keep its value", "lose value", "become scarce", "become gold"], correctIndex: 1, explanation: "Scarcity helps money keep value." },
        { prompt: "Uniformity (homogeneity) means each unit of money is", options: ["different from the next", "the same as another unit", "perishable", "counterfeit"], correctIndex: 1, explanation: "Units must be identical and interchangeable." },
        { prompt: "Price is", options: ["what a unit of money can buy", "the amount of money paid to buy a good or service", "a bank deposit", "a tax rate"], correctIndex: 1, explanation: "Price is the money paid for a good or service." },
        { prompt: "The value of money is", options: ["its face number", "what a unit of money can buy (purchasing power)", "the size of a note", "the tax on it"], correctIndex: 1, explanation: "The value of money is its purchasing power." },
        { prompt: "When prices rise, the value of money", options: ["rises", "falls", "stays the same", "becomes intrinsic"], correctIndex: 1, explanation: "Higher prices mean each unit of money buys less." },
        { prompt: "Value for money means", options: ["paying more than a good is worth", "getting usefulness worth the price paid", "avoiding money", "using barter"], correctIndex: 1, explanation: "It is satisfaction/quality worth the price." },
        { prompt: "A key advantage of money over barter is that it removes the need for", options: ["prices", "a double coincidence of wants", "banks", "saving"], correctIndex: 1, explanation: "Money lets people trade without matching wants." },
        { prompt: "Legal tender means money that", options: ["must legally be accepted for payment", "is illegal", "is only commodity money", "cannot be saved"], correctIndex: 0, explanation: "Legal tender is officially accepted for settling debts." },
        { prompt: "Which pair are functions of money?", options: ["medium of exchange and store of value", "barter and counterfeiting", "tax and subsidy", "import and export"], correctIndex: 0, explanation: "Both are core functions of money." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define money and explain the barter problem it solves.", answerKey: "Money is what people regularly use and widely accept to buy and sell goods and services. Barter (direct exchange of goods) requires a double coincidence of wants — both traders must want what the other has, which is hard to arrange. Money, as a medium of exchange, removes this need, so trades no longer depend on matching wants. Award 4 for the definition and 6 for the barter/double-coincidence explanation.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "State the four functions of money.", answerKey: "Medium of exchange (intermediary between buyer and seller); store of value (saved and spent later); unit of account (measures and compares values); standard of deferred payment (settles future payments/debts). Award 2 marks each.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Fiat money is best described as", options: ["money with intrinsic value like gold", "money with no intrinsic value that is legal tender by government declaration", "a form of barter", "a bank loan"], correctIndex: 1, answerKey: "Fiat money has no intrinsic value but is legal tender. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State four characteristics that good money should have.", answerKey: "Any four of: generally acceptable; durable; portable; divisible; uniform (homogeneous); limited in supply (scarce); difficult to counterfeit. Award 1.5 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the origin of money from barter and discuss its functions and the characteristics that make it good money.", answerKey: "Award marks for: origin — barter, double coincidence of wants, move to commodity then fiat money, 8; functions — medium of exchange, store of value, unit of account, standard of deferred payment, 10; characteristics — acceptability, durability, portability, divisibility, uniformity, scarcity, hard to counterfeit, 8; a clear conclusion, 4.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Macroeconomics 3e, 14.3 The Role of Banks (https://openstax.org/books/principles-macroeconomics-3e/pages/14-3-the-role-of-banks) and 15.1 The Federal Reserve Banking System and Central Banks (https://openstax.org/books/principles-macroeconomics-3e/pages/15-1-the-federal-reserve-banking-system-and-central-banks); OpenStax Introduction to Business, 15.3 U.S. Financial Institutions (https://openstax.org/books/introduction-business/pages/15-3-u-s-financial-institutions)
    {
      slug: "functions-of-banks-and-financial-institutions",
      title: "Types and Functions of Banks and Other Financial Institutions",
      objective:
        "By the end of the topic, learners should be able to describe the functions of a central bank, commercial, merchant, development and savings banks, insurance companies and building societies.",
      estimatedMinutes: 130,
      notes: `## Banks as financial intermediaries

**Financial intermediary** — an institution that operates between a **saver** who deposits money and a **borrower** who receives a loan.
- Banks **bring savers and borrowers together** and lower transaction costs: savers store money safely; borrowers go directly to a bank instead of searching for a lender.
- Banks accept deposits and use them to make loans (deposited funds mingle in one pool that the bank lends), and are a critical part of the **payment system**.
- Banks also play a key role in **creating money** in the economy.

## The central bank

**Central bank** — the organisation responsible for conducting **monetary policy** and ensuring the financial system runs smoothly. Its main functions:
- **Conducts monetary policy** — decides whether to raise or lower interest rates and controls the money supply.
- **Regulates and supervises banks** — protects depositors and keeps the banking system healthy.
- **Banker to banks and government** — holds banks' reserve accounts, processes payments, keeps currency in circulation, and acts as **lender of last resort**.

## Other banks and financial institutions

- **Commercial banks** — profit-oriented institutions that accept deposits, offer chequing and savings accounts, and make loans to households and businesses; central to the payment system.
- **Merchant banks** — specialise in business finance: financing trade, advising firms, and helping companies raise capital (they mainly serve businesses, not ordinary savers).
- **Development banks** — provide **long-term finance** for development projects (industry, agriculture, infrastructure) that ordinary commercial banks may find too risky or long.
- **Savings banks** — set up to encourage personal **saving** and provide loans (such as mortgages); today they offer services similar to commercial banks.
- **Building societies** — member-owned institutions that take savings deposits and lend mainly for **house purchase (mortgages)**.
- **Insurance companies** — sell protection against losses from illness, disability, death and property damage; they collect **premiums** and invest them in stocks, bonds and other assets to fund claims.

## Summary table

| Institution | Main function |
| --- | --- |
| Central bank | Monetary policy, regulate banks, lender of last resort |
| Commercial bank | Deposits, chequing/savings, loans to households and firms |
| Merchant bank | Business finance, advice, raising capital |
| Development bank | Long-term finance for development projects |
| Savings bank | Encourage saving, personal loans and mortgages |
| Building society | Savings and mortgages for house purchase |
| Insurance company | Protection against loss for premiums; invests funds |

## Common errors

- **Confusing the central bank with commercial banks.** The central bank does not serve the public; it is banker to banks and the government and runs monetary policy.
- **Thinking all banks are the same.** Merchant, development, savings banks and building societies specialise in different services.
- **Ignoring the intermediary role.** Banks channel savings to borrowers and lower transaction costs.`,
      workedExample: `**Question:** Match each need to the best institution and give a reason: (a) a family wants a home loan; (b) the government wants to raise or lower interest rates; (c) a manufacturer needs long-term finance for a new factory; (d) a trader wants cover against fire damaging his shop.

**Solution**

*Step 1 — home loan.* A **building society** (or savings bank) takes savings and lends mainly for **house purchase (mortgages)** — ideal for a home loan.

*Step 2 — interest rates.* The **central bank** conducts **monetary policy**, deciding whether to raise or lower interest rates.

*Step 3 — long-term factory finance.* A **development bank** provides **long-term finance** for development projects such as industry that commercial banks may find too risky or long.

*Step 4 — insurance cover.* An **insurance company** sells protection against loss (fire) in exchange for **premiums**, paying a claim if the loss occurs.

**Answer:** (a) building society/savings bank; (b) central bank; (c) development bank; (d) insurance company.`,
      quiz: [
        { prompt: "A financial intermediary operates between", options: ["two governments", "a saver who deposits and a borrower who receives a loan", "two central banks", "buyers and sellers of goods only"], correctIndex: 1, explanation: "Banks channel funds from savers to borrowers." },
        { prompt: "Banks lower transaction costs by", options: ["hiding money", "bringing savers and borrowers together", "printing currency", "raising taxes"], correctIndex: 1, explanation: "They match savers and borrowers efficiently." },
        { prompt: "The central bank is responsible for", options: ["conducting monetary policy", "selling groceries", "issuing insurance", "building houses"], correctIndex: 0, explanation: "Monetary policy is a core central-bank function." },
        { prompt: "As lender of last resort, the central bank", options: ["lends to banks in difficulty", "sells shares", "collects premiums", "grows crops"], correctIndex: 0, explanation: "It supports banks to keep the system stable." },
        { prompt: "A central bank influences the economy mainly by", options: ["setting interest rates and the money supply", "selling insurance", "issuing mortgages", "farming"], correctIndex: 0, explanation: "Monetary policy works through interest rates and money supply." },
        { prompt: "Commercial banks primarily", options: ["accept deposits and make loans to households and firms", "conduct monetary policy", "insure against fire", "provide only long-term development finance"], correctIndex: 0, explanation: "They take deposits and lend, serving the public." },
        { prompt: "Merchant banks mainly serve", options: ["ordinary household savers", "businesses, with finance and advice", "the central bank", "farmers only"], correctIndex: 1, explanation: "Merchant banks specialise in business finance and advice." },
        { prompt: "Development banks provide", options: ["short-term overdrafts only", "long-term finance for development projects", "insurance premiums", "monetary policy"], correctIndex: 1, explanation: "They fund long-term projects like industry and infrastructure." },
        { prompt: "Savings banks were set up to encourage", options: ["personal saving", "counterfeiting", "monetary policy", "barter"], correctIndex: 0, explanation: "They promote personal saving and provide loans." },
        { prompt: "Building societies lend mainly for", options: ["car imports", "house purchase (mortgages)", "monetary policy", "insurance claims"], correctIndex: 1, explanation: "They specialise in mortgages for home buyers." },
        { prompt: "Insurance companies collect ______ from policyholders.", options: ["taxes", "premiums", "deposits only", "tariffs"], correctIndex: 1, explanation: "Premiums fund the payment of claims." },
        { prompt: "Insurance companies invest premiums in", options: ["stocks, bonds and other assets", "nothing", "only cash under a mattress", "farmland only"], correctIndex: 0, explanation: "They invest to finance future claims." },
        { prompt: "Which institution regulates and supervises banks?", options: ["the central bank", "a building society", "an insurance company", "a merchant bank"], correctIndex: 0, explanation: "The central bank protects depositors and bank health." },
        { prompt: "The central bank acts as banker to", options: ["ordinary shoppers", "the government and the banks", "insurance firms only", "farmers"], correctIndex: 1, explanation: "It serves the government and commercial banks." },
        { prompt: "Which institution is profit-oriented and central to the payment system?", options: ["commercial bank", "central bank", "building society only", "insurance company"], correctIndex: 0, explanation: "Commercial banks run everyday payments and lending." },
        { prompt: "A manufacturer needing long-term factory finance should approach a", options: ["development bank", "insurance company", "building society", "central bank"], correctIndex: 0, explanation: "Development banks fund long-term projects." },
        { prompt: "Protection against illness, death or property damage is sold by", options: ["insurance companies", "development banks", "the central bank", "merchant banks"], correctIndex: 0, explanation: "Insurers cover such losses for premiums." },
        { prompt: "Banks help create money because they", options: ["print notes themselves", "lend out deposits, expanding the money supply", "collect premiums", "set tariffs"], correctIndex: 1, explanation: "Lending deposits expands money in the economy." },
        { prompt: "A key difference between a central bank and a commercial bank is that the central bank", options: ["serves the public directly", "runs monetary policy and does not serve the public", "sells groceries", "issues insurance"], correctIndex: 1, explanation: "The central bank is banker to banks, not the public." },
        { prompt: "Member-owned institutions focused on savings and mortgages are", options: ["building societies", "merchant banks", "central banks", "insurance companies"], correctIndex: 0, explanation: "Building societies are member-owned savings-and-mortgage bodies." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain what is meant by a financial intermediary and why banks lower transaction costs.", answerKey: "A financial intermediary is an institution that operates between savers who deposit money and borrowers who receive loans. Banks lower transaction costs by bringing savers and borrowers together: savers store money safely instead of searching for a borrower, and borrowers go directly to a bank instead of hunting for a lender. Award 5 for the definition and 5 for the transaction-cost point.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "State three functions of a central bank.", answerKey: "Any three of: conducts monetary policy (interest rates and money supply); regulates and supervises banks to protect depositors; acts as banker to banks and government; acts as lender of last resort; keeps currency in circulation. Award 2 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which institution provides long-term finance for development projects such as industry and infrastructure?", options: ["a commercial bank", "a development bank", "an insurance company", "a building society"], correctIndex: 1, answerKey: "Development banks specialise in long-term project finance. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between a commercial bank and a merchant bank.", answerKey: "A commercial bank is profit-oriented and serves the general public — it accepts deposits, offers chequing and savings accounts, and makes loans to households and businesses, running everyday payments. A merchant bank specialises in business finance: financing trade, advising firms and helping companies raise capital; it mainly serves businesses rather than ordinary savers. Award marks for each institution's role.", marks: 6 },
        { type: "ESSAY", prompt: "Describe the functions of the central bank and of the main types of banks and financial institutions (commercial, merchant, development and savings banks, building societies and insurance companies).", answerKey: "Award marks for: central bank — monetary policy, regulation/supervision, banker to banks/government, lender of last resort, 8; commercial banks — deposits, accounts, loans, payments, 4; merchant banks — business finance and advice, 4; development banks — long-term project finance, 4; savings banks and building societies — encourage saving and provide mortgages, 5; insurance companies — protection against loss for premiums, invest funds, 5.", marks: 30 },
      ],
    },
    // source: Social Sci LibreTexts — 23.1 The Relationship Between Inflation and Unemployment (https://socialsci.libretexts.org/Bookshelves/Economics/Introductory_Comprehensive_Economics/Economics_(Boundless)/23%3A_Inflation_and_Unemployment/23.01%3A_The_Relationship_Between_Inflation_and_Unemployment) and OpenStax Principles of Macroeconomics 3e, 8.4 What Causes Changes in Unemployment over the Long Run (https://openstax.org/books/principles-macroeconomics-3e/pages/8-4-what-causes-changes-in-unemployment-over-the-long-run)
    {
      slug: "definitions-of-inflation-and-unemployment",
      title: "Definitions of Inflation and Unemployment",
      objective:
        "By the end of the topic, learners should be able to define inflation and unemployment, and explain how each is measured and why each matters.",
      estimatedMinutes: 100,
      notes: `## Inflation

**Inflation** — the persistent rise in the **general price level** of goods and services in an economy.
- **General price level** — the average of prices across the economy; inflation is a rise in this average, not just one price.
- When the price level rises, the **value (purchasing power) of money falls** — the same money buys less.
- Opposite terms: **deflation** is a falling price level; **disinflation** is a slowing of the inflation rate.
- Inflation is measured by tracking the cost of a **basket of goods** over time (a price index) and expressing the change as a percentage.

## Unemployment

**Unemployment** — the situation of people who are **able and willing to work and actively looking for a job but cannot find one**.
- The **labour force** is those working plus those unemployed (able, willing and seeking work).
- The **unemployment rate** = (number unemployed ÷ labour force) × 100.
- People not looking for work (for example full-time students or retirees) are **not in the labour force** and are not counted as unemployed.
- The **natural rate of unemployment** is the level that remains even when the economy is healthy (not booming or in recession).

## Why they matter

- **Inflation** erodes the value of money and savings, distorts prices, and can hurt people on fixed incomes.
- **Unemployment** wastes resources (idle labour), lowers output and incomes, and causes hardship.
- Governments aim to keep both **low and stable**.

## Common errors

- **Calling a one-off price rise inflation.** Inflation is a *persistent* rise in the *general* price level.
- **Counting everyone without a job as unemployed.** Only those able, willing and actively seeking work are unemployed.
- **Confusing inflation with high prices.** Inflation is the *rate at which* prices rise, not the level of prices.`,
      workedExample: `**Question:** A country has 100 people of working age. 60 are employed, 10 are able and actively looking for work but jobless, and 30 are full-time students not seeking work. (a) What is the labour force? (b) What is the unemployment rate? (c) If the average price of a basket of goods rises steadily from 100 to 108 over a year, what is happening and at what rate?

**Solution**

*Step 1 — labour force.* Labour force = employed + unemployed = 60 + 10 = **70**. The 30 students are not in the labour force.

*Step 2 — unemployment rate.* Unemployment rate = (unemployed ÷ labour force) × 100 = (10 ÷ 70) × 100 = **14.3%**.

*Step 3 — inflation.* The general price level rose from 100 to 108, a persistent rise, so there is **inflation**. Rate = ((108 − 100) ÷ 100) × 100 = **8%**.

**Answer:** (a) labour force = 70; (b) unemployment rate ≈ 14.3%; (c) inflation of 8% over the year.`,
      quiz: [
        { prompt: "Inflation is", options: ["a one-off fall in one price", "a persistent rise in the general price level", "a rise in unemployment", "a fall in output"], correctIndex: 1, explanation: "Inflation is a sustained rise in average prices." },
        { prompt: "The general price level is", options: ["the price of one good", "the average of prices across the economy", "the money supply", "the tax rate"], correctIndex: 1, explanation: "It is the economy-wide average of prices." },
        { prompt: "When the price level rises, the value of money", options: ["rises", "falls", "is unchanged", "becomes intrinsic"], correctIndex: 1, explanation: "Purchasing power falls as prices rise." },
        { prompt: "A falling price level is called", options: ["inflation", "deflation", "disinflation", "recession"], correctIndex: 1, explanation: "Deflation is a falling price level." },
        { prompt: "Disinflation means", options: ["prices falling", "the inflation rate slowing down", "prices rising faster", "no prices"], correctIndex: 1, explanation: "Disinflation is a slowing of inflation, not falling prices." },
        { prompt: "Inflation is measured using", options: ["a basket of goods (price index)", "the unemployment rate", "the exchange rate only", "a single good"], correctIndex: 0, explanation: "A price index tracks a basket of goods over time." },
        { prompt: "Unemployment refers to people who are", options: ["not looking for work", "able and willing to work, actively seeking, but jobless", "retired", "full-time students"], correctIndex: 1, explanation: "The unemployed are seeking work but cannot find it." },
        { prompt: "The labour force is", options: ["everyone in the country", "the employed plus the unemployed", "only students", "only retirees"], correctIndex: 1, explanation: "It is workers plus those seeking work." },
        { prompt: "The unemployment rate equals", options: ["unemployed ÷ population × 100", "unemployed ÷ labour force × 100", "employed ÷ unemployed", "labour force ÷ population"], correctIndex: 1, explanation: "It is unemployed as a share of the labour force." },
        { prompt: "A full-time student not seeking work is", options: ["unemployed", "not in the labour force", "employed", "underemployed"], correctIndex: 1, explanation: "Not seeking work means not in the labour force." },
        { prompt: "The natural rate of unemployment is", options: ["zero", "the level that remains even when the economy is healthy", "only in recessions", "the same as inflation"], correctIndex: 1, explanation: "Some unemployment remains even in a healthy economy." },
        { prompt: "Inflation hurts most", options: ["people whose incomes rise faster than prices", "people on fixed incomes", "borrowers with fixed-rate loans", "no one"], correctIndex: 1, explanation: "Fixed incomes lose purchasing power as prices rise." },
        { prompt: "Unemployment is costly because it", options: ["raises output", "wastes idle labour and lowers output and incomes", "always lowers prices", "has no cost"], correctIndex: 1, explanation: "Idle labour reduces production and causes hardship." },
        { prompt: "Governments generally aim to keep inflation and unemployment", options: ["as high as possible", "low and stable", "at zero always", "unmeasured"], correctIndex: 1, explanation: "Low and stable levels support the economy." },
        { prompt: "'The rate at which prices rise' describes", options: ["the price level", "the inflation rate", "the exchange rate", "the money supply"], correctIndex: 1, explanation: "Inflation is the rate of change of prices." },
        { prompt: "If a basket rises from 200 to 210 in a year, inflation is", options: ["5%", "10%", "2%", "210%"], correctIndex: 0, explanation: "(210 − 200)/200 × 100 = 5%." },
        { prompt: "Which is NOT counted as unemployed?", options: ["a jobseeker who cannot find work", "a person not looking for work", "a laid-off worker seeking a job", "someone actively applying for jobs"], correctIndex: 1, explanation: "Those not seeking work are outside the labour force." },
        { prompt: "Inflation differs from a high price level because inflation is", options: ["the level of prices", "the rate at which prices are rising", "always zero", "the same as unemployment"], correctIndex: 1, explanation: "Inflation is the rate of increase, not the level." },
        { prompt: "If 90 are employed and 10 are unemployed, the unemployment rate is", options: ["9%", "10%", "11%", "1%"], correctIndex: 1, explanation: "10 ÷ (90 + 10) × 100 = 10%." },
        { prompt: "A persistent rise in the general price level reduces", options: ["the money supply", "the purchasing power of money", "unemployment", "the labour force"], correctIndex: 1, explanation: "Inflation lowers what money can buy." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define inflation and explain its effect on the value of money.", answerKey: "Inflation is the persistent rise in the general price level of goods and services (a rise in the average of prices, not just one price). As the price level rises, the value or purchasing power of money falls — the same amount of money buys fewer goods. Award 6 for the definition and 4 for the value-of-money point.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Define unemployment and state the formula for the unemployment rate.", answerKey: "Unemployment is the situation of people who are able and willing to work and are actively seeking a job but cannot find one. Unemployment rate = (number unemployed ÷ labour force) × 100, where the labour force is the employed plus the unemployed. Award 5 for the definition and 5 for the formula/labour-force point.", marks: 10 },
        { type: "MULTIPLE_CHOICE", prompt: "A country has 80 employed and 20 unemployed. The unemployment rate is", options: ["20%", "25%", "16%", "80%"], correctIndex: 0, answerKey: "20 ÷ (80 + 20) × 100 = 20%. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why a full-time student who is not seeking work is not counted as unemployed.", answerKey: "The unemployed are people who are able, willing and actively seeking work. A full-time student not looking for a job is not actively seeking work, so they are outside the labour force and are not counted as unemployed. Award marks for the 'actively seeking' criterion and the labour-force point.", marks: 4 },
        { type: "ESSAY", prompt: "Define inflation and unemployment, explain how each is measured, and discuss why governments try to keep both low.", answerKey: "Award marks for: inflation — definition as a persistent rise in the general price level, measured by a price index/basket of goods, 8; unemployment — definition (able, willing, actively seeking but jobless), unemployment rate = unemployed/labour force × 100, 8; costs of inflation (erodes value of money and savings, hurts fixed incomes), 6; costs of unemployment (idle labour, lost output and income, hardship), 6; a conclusion on keeping both low and stable, 2.", marks: 30 },
      ],
    },
    // source: Social Sci LibreTexts — 23.1 The Relationship Between Inflation and Unemployment (https://socialsci.libretexts.org/Bookshelves/Economics/Introductory_Comprehensive_Economics/Economics_(Boundless)/23%3A_Inflation_and_Unemployment/23.01%3A_The_Relationship_Between_Inflation_and_Unemployment) and OpenStax Principles of Macroeconomics 3e, 8.4 What Causes Changes in Unemployment over the Long Run (https://openstax.org/books/principles-macroeconomics-3e/pages/8-4-what-causes-changes-in-unemployment-over-the-long-run)
    {
      slug: "types-of-inflation-and-unemployment",
      title: "Types of Inflation and Unemployment",
      objective:
        "By the end of the topic, learners should be able to distinguish demand-pull from cost-push inflation, describe structural, cyclical and frictional unemployment, and explain the short-run link between inflation and unemployment.",
      estimatedMinutes: 120,
      notes: `## Types of inflation

**Demand-pull inflation** — a rise in the price level caused by an increase in **aggregate demand** when the economy is at or near full employment.
- Occurs when demand for goods and services is greater than supply, so demand "pulls" prices up.
- Often described as "too much money chasing too few goods."
- Cause: a rise in consumers' ability to spend; if firms cannot raise output quickly, the demand-supply gap pushes prices up.

**Cost-push inflation** — a rise in the price level caused by a fall in **aggregate supply** as production costs rise.
- Firms facing higher costs raise prices, passing the burden to consumers.
- Main sources: higher **money wage rates** and higher prices of **raw materials** (such as oil); also natural disasters and tariffs.
- It is *not* "too much money chasing too few goods" but a *decrease in supply* that raises prices.

## Types of unemployment

**Frictional unemployment** — unemployment that occurs while workers **move between jobs** and search for new employment.
**Structural unemployment** — unemployment of people who have **no jobs because they lack the skills the labour market values**, either because demand has shifted away from their skills or because they never learned marketable skills.
**Cyclical unemployment** — unemployment that **rises during a recession and falls during an expansion** (it moves with the business cycle).

- Frictional and structural unemployment remain even in a healthy economy — together they make up much of the **natural rate of unemployment**.

## The link between inflation and unemployment

- The **Phillips curve** relates the rate of inflation to the rate of unemployment.
- In the **short run** they are **inversely related**: as unemployment falls, inflation tends to rise, and vice versa.
- This trade-off holds only in the short run; the **long-run Phillips curve is vertical** at the natural rate, so there is **no permanent trade-off**.

## Comparison table

| Type | Cause |
| --- | --- |
| Demand-pull inflation | Aggregate demand exceeds supply |
| Cost-push inflation | Rising costs cut aggregate supply |
| Frictional unemployment | Workers moving/searching between jobs |
| Structural unemployment | Skills mismatch with labour-market demand |
| Cyclical unemployment | Recession (business cycle downturn) |

## Common errors

- **Mixing up demand-pull and cost-push.** Demand-pull comes from too much demand; cost-push comes from higher costs / lower supply.
- **Calling all joblessness cyclical.** Frictional and structural unemployment exist even in good times.
- **Thinking the inflation-unemployment trade-off is permanent.** It holds only in the short run.`,
      workedExample: `**Question:** Identify the type of inflation or unemployment in each case: (a) world oil prices jump, raising firms' costs and prices; (b) a booming economy sees spending outrun what firms can produce, and prices rise; (c) a worker who left one job is spending three weeks finding another; (d) factory workers lose jobs because demand shifted to skills they do not have; (e) many lose jobs during a recession.

**Solution**

*Step 1 — (a).* Higher oil (raw-material) costs push firms to raise prices — **cost-push inflation**.

*Step 2 — (b).* Demand exceeds supply in a boom, pulling prices up — **demand-pull inflation**.

*Step 3 — (c).* Jobless only while searching between jobs — **frictional unemployment**.

*Step 4 — (d).* Jobless because their skills no longer match labour-market demand — **structural unemployment**.

*Step 5 — (e).* Job losses caused by a recession — **cyclical unemployment**.

**Answer:** (a) cost-push inflation; (b) demand-pull inflation; (c) frictional; (d) structural; (e) cyclical unemployment.`,
      quiz: [
        { prompt: "Demand-pull inflation is caused by", options: ["a fall in aggregate supply", "an increase in aggregate demand beyond supply", "lower wages", "lower spending"], correctIndex: 1, explanation: "Excess demand pulls prices up." },
        { prompt: "Demand-pull inflation is often described as", options: ["too much money chasing too few goods", "falling costs", "a supply shock", "deflation"], correctIndex: 0, explanation: "That phrase captures demand-pull inflation." },
        { prompt: "Cost-push inflation is caused by", options: ["rising production costs cutting supply", "excess demand", "falling wages", "more goods"], correctIndex: 0, explanation: "Higher costs reduce supply and raise prices." },
        { prompt: "A main source of cost-push inflation is", options: ["higher raw-material prices such as oil", "lower demand", "more imports", "falling wages"], correctIndex: 0, explanation: "Rising input costs push prices up." },
        { prompt: "Higher money wage rates that raise prices cause", options: ["demand-pull inflation", "cost-push inflation", "deflation", "frictional unemployment"], correctIndex: 1, explanation: "Wage-driven cost rises are cost-push inflation." },
        { prompt: "Frictional unemployment occurs when workers", options: ["lack valued skills", "move between jobs and search", "lose jobs in a recession", "retire"], correctIndex: 1, explanation: "It is short-term job-search unemployment." },
        { prompt: "Structural unemployment happens because workers", options: ["are between jobs briefly", "lack the skills the labour market values", "are in a boom", "choose not to work"], correctIndex: 1, explanation: "A skills mismatch causes structural unemployment." },
        { prompt: "Cyclical unemployment", options: ["rises in a recession and falls in an expansion", "never changes", "is only about skills", "is job search"], correctIndex: 0, explanation: "It moves with the business cycle." },
        { prompt: "Which unemployment remains even in a healthy economy?", options: ["cyclical only", "frictional and structural", "none", "all of it"], correctIndex: 1, explanation: "Frictional and structural form the natural rate." },
        { prompt: "The natural rate of unemployment is made up mainly of", options: ["cyclical unemployment", "frictional and structural unemployment", "no unemployment", "inflation"], correctIndex: 1, explanation: "It is the unemployment left when the economy is healthy." },
        { prompt: "A worker retrained because a factory closed and demand shifted faces", options: ["frictional", "structural", "cyclical", "no"], correctIndex: 1, explanation: "Skills no longer match demand — structural." },
        { prompt: "The Phillips curve relates", options: ["inflation and unemployment", "imports and exports", "saving and investment", "tax and spending"], correctIndex: 0, explanation: "It links the inflation rate to the unemployment rate." },
        { prompt: "In the short run, inflation and unemployment are", options: ["directly related", "inversely related", "unrelated", "always equal"], correctIndex: 1, explanation: "Lower unemployment tends to mean higher inflation short-run." },
        { prompt: "The long-run Phillips curve is", options: ["vertical at the natural rate", "horizontal", "upward sloping", "the same as the short run"], correctIndex: 0, explanation: "No permanent trade-off in the long run." },
        { prompt: "A boom where spending outruns production causes", options: ["cost-push inflation", "demand-pull inflation", "structural unemployment", "deflation"], correctIndex: 1, explanation: "Excess demand in a boom is demand-pull." },
        { prompt: "A natural disaster disrupting supply chains can cause", options: ["demand-pull inflation", "cost-push inflation", "frictional unemployment", "deflation"], correctIndex: 1, explanation: "Supply shocks raise costs — cost-push." },
        { prompt: "Cost-push inflation differs from demand-pull because it comes from", options: ["a decrease in supply, not excess demand", "too much demand", "lower costs", "more goods"], correctIndex: 0, explanation: "Cost-push is a supply-side cause." },
        { prompt: "Someone briefly jobless between leaving one job and starting another is", options: ["cyclically unemployed", "frictionally unemployed", "structurally unemployed", "not in the labour force"], correctIndex: 1, explanation: "Short job-search gaps are frictional." },
        { prompt: "During a recession, the type of unemployment that rises most is", options: ["frictional", "structural", "cyclical", "none"], correctIndex: 2, explanation: "Downturns raise cyclical unemployment." },
        { prompt: "The short-run inflation-unemployment trade-off means falling unemployment tends to", options: ["lower inflation", "raise inflation", "have no effect", "end the labour force"], correctIndex: 1, explanation: "Lower unemployment usually raises inflation short-run." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between demand-pull and cost-push inflation.", answerKey: "Demand-pull inflation is a rise in the price level caused by an increase in aggregate demand beyond what the economy can supply (too much money chasing too few goods), pulling prices up. Cost-push inflation is a rise in the price level caused by rising production costs — higher wages or raw-material prices (such as oil) — which reduce aggregate supply, so firms raise prices. Award 5 for each type.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Define frictional, structural and cyclical unemployment.", answerKey: "Frictional unemployment: workers temporarily jobless while moving between jobs and searching. Structural unemployment: workers jobless because they lack the skills the labour market values (demand shifted away from their skills or they never learned marketable skills). Cyclical unemployment: unemployment that rises during a recession and falls during an expansion. Award 2 for frictional, 2 for structural, 2 for cyclical (plus clarity).", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "A sharp rise in world oil prices that pushes up firms' prices causes", options: ["demand-pull inflation", "cost-push inflation", "frictional unemployment", "deflation"], correctIndex: 1, answerKey: "Higher raw-material costs are cost-push inflation. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain the short-run relationship between inflation and unemployment shown by the Phillips curve.", answerKey: "The Phillips curve relates the inflation rate to the unemployment rate. In the short run they are inversely related: as unemployment falls, inflation tends to rise, and as unemployment rises, inflation tends to fall. This trade-off holds only in the short run — the long-run Phillips curve is vertical at the natural rate, so there is no permanent trade-off. Award marks for the inverse short-run relation and the no-permanent-trade-off point.", marks: 6 },
        { type: "ESSAY", prompt: "Describe the main types of inflation and unemployment and explain how inflation and unemployment are related in the short run.", answerKey: "Award marks for: demand-pull inflation (excess aggregate demand), 5; cost-push inflation (rising costs cut supply), 5; frictional unemployment (job search), 4; structural unemployment (skills mismatch), 4; cyclical unemployment (recession), 4; the short-run inverse Phillips-curve relationship and no permanent long-run trade-off, 8. A script covering fewer than three types loses proportionally.", marks: 30 },
      ],
    },
  ],
};
