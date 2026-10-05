import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 12,
// Semester Two, Period V: Public Finance and International Organizations.
// CONTENTS: (1) Meaning of public finance — fiscal policy and its objectives,
// sources of government revenue (taxation), economic effect of taxation;
// (2) Types of taxes — direct and indirect taxes; (3) Advantages and
// disadvantages of direct and indirect taxes; (4) Tax incidence — elasticity
// of demand/supply and taxation; (5) System of taxation — progressive,
// proportional and regressive tax; (6) International economic organizations —
// IMF, IBRD, IFC, ADB, OPEC, ECA, UNCTAD, AfDB. Each top-level CONTENTS item is
// one topic; sub-items become ## sections. Sourced from OpenStax Principles of
// Macroeconomics 3e (Ch. 17), Principles of Economics 3e (Ch. 5, 10),
// Introduction to Business (Ch. 3), Introduction to Political Science (Ch. 15)
// and the Khan Academy microeconomics article on tax incidence.
export const economicsG12P5: PeriodContent = {
  grade: 12,
  number: 5,
  title: "Public Finance and International Organizations",
  summary:
    "Period V of the MoE Grade 12 Economics syllabus. Learners explain public finance and fiscal policy and its objectives, the sources of government revenue and the economic effects of taxation; distinguish direct from indirect taxes and weigh their advantages and disadvantages; analyse tax incidence using the elasticity of demand and supply; classify tax systems as progressive, proportional or regressive; and describe the roles of the major international economic organisations (IMF, World Bank group, OPEC, UNCTAD and the regional development banks).",
  topics: [
    // source: OpenStax — Principles of Macroeconomics 3e, 17.1 Government Spending (https://openstax.org/books/principles-macroeconomics-3e/pages/17-1-government-spending) and 17.2 Taxation (https://openstax.org/books/principles-macroeconomics-3e/pages/17-2-taxation)
    {
      slug: "public-finance-and-fiscal-policy",
      title: "The Meaning of Public Finance: Fiscal Policy, Government Revenue and the Economic Effect of Taxation",
      objective:
        "By the end of the topic, learners should be able to explain public finance, state the objectives of fiscal policy, identify the sources of government revenue and describe the economic effects of taxation.",
      estimatedMinutes: 110,
      notes: `## Public finance

**Public finance** — the study of how the government raises money (revenue) and spends it (expenditure), and the effect of this on the economy.
- A **government budget** compares planned spending with expected revenue over a year.
- **Budget deficit** — the government spends more than it receives in taxes in a year.
- **Budget surplus** — tax revenue exceeds spending in a year.
- **Balanced budget** — spending equals revenue.
- The **deficit** is a yearly gap; the **national debt** is the sum of all past deficits minus surpluses.

## Government (public) expenditure

Government spends on, among others:
- **National defence and security**
- **Social services** — education, health, social security/pensions
- **Economic services** — roads and other infrastructure
- **Interest on the national debt**

## Fiscal policy and its objectives

**Fiscal policy** — the government's use of **taxation and public spending** to influence the level of economic activity (aggregate demand).
- **Expansionary fiscal policy** — raising spending or cutting taxes to **increase aggregate demand**; used when the economy is in recession and producing below potential.
- **Contractionary fiscal policy** — cutting spending or raising taxes to **reduce aggregate demand**; used to restrain inflation.

Objectives of fiscal policy:
- **Full employment** — reduce unemployment.
- **Price stability** — control inflation.
- **Economic growth** — raise output over time.
- **Fair distribution of income** — redistribute through taxes and spending.
- **Provision of public goods and services** — defence, roads, schools, hospitals.

## Sources of government revenue

- **Taxation** — the main source (income tax, corporate tax, payroll tax, excise and sales taxes, customs duties).
- **Non-tax revenue** — fees, licences, fines, profits of state enterprises.
- **Borrowing** — loans from citizens, banks or abroad (adds to debt).
- **Grants and aid** from other countries or organisations.

## Economic effects of taxation

- **Reduces disposable income**, so it can reduce private spending (consumption and investment).
- **Redistributes income** when higher earners pay a larger share.
- **Affects incentives** — very high taxes may discourage work, saving or investment.
- **Discourages harmful goods** — excise taxes on tobacco and alcohol reduce their use.
- **Finances public goods and services** that markets under-provide.

## Common errors

- **Confusing the deficit with the debt.** The deficit is one year's shortfall; the debt is the accumulated total.
- **Thinking fiscal policy is only spending.** It is both government spending *and* taxation.
- **Assuming all taxes only harm the economy.** Taxes also fund growth-raising services and can correct market failures.`,
      workedExample: `**Question:** In a year a government collects 900 in tax and other revenue and spends 1,050. (a) Is the budget in deficit or surplus, and by how much? (b) The economy is in recession. Name and describe the fiscal policy the government should use. (c) Give two objectives of fiscal policy it would be pursuing.

**Solution**

*Step 1 — budget balance.* Balance = revenue − spending = 900 − 1,050 = **−150**. Because spending exceeds revenue, the budget is in **deficit of 150**.

*Step 2 — fiscal policy in recession.* In a recession output is below potential and unemployment is high, so the government uses **expansionary fiscal policy** — raising government spending and/or cutting taxes to increase aggregate demand.

*Step 3 — objectives.* Any two of: reducing unemployment (full employment) and raising output (economic growth); also price stability and fairer income distribution.

**Answer:** (a) a deficit of 150; (b) expansionary fiscal policy — higher spending and/or lower taxes to raise aggregate demand; (c) full employment and economic growth (among others).`,
      quiz: [
        { prompt: "Public finance studies how the government", options: ["sets interest rates only", "raises and spends money and its effect on the economy", "prints currency", "runs private firms"], correctIndex: 1, explanation: "It covers government revenue, spending and their economic effects." },
        { prompt: "A budget deficit means the government", options: ["spends less than it receives", "spends more than it receives in a year", "has no debt", "collects no tax"], correctIndex: 1, explanation: "A deficit is yearly spending above revenue." },
        { prompt: "A budget surplus means", options: ["spending exceeds revenue", "revenue exceeds spending", "revenue equals spending", "there is no budget"], correctIndex: 1, explanation: "A surplus is revenue above spending." },
        { prompt: "The national debt is", options: ["one year's deficit", "the sum of all past deficits minus surpluses", "the money supply", "total tax in a year"], correctIndex: 1, explanation: "Debt accumulates past deficits over time." },
        { prompt: "Fiscal policy is the use of", options: ["interest rates and money supply", "taxation and government spending", "tariffs only", "exchange rates"], correctIndex: 1, explanation: "Fiscal policy uses taxes and spending." },
        { prompt: "Expansionary fiscal policy", options: ["raises taxes and cuts spending", "cuts taxes and/or raises spending to boost demand", "fixes the exchange rate", "bans imports"], correctIndex: 1, explanation: "It increases aggregate demand." },
        { prompt: "Expansionary fiscal policy is most appropriate when the economy is", options: ["overheating with high inflation", "in recession, below potential output", "balanced", "closed to trade"], correctIndex: 1, explanation: "It fights recession and unemployment." },
        { prompt: "Contractionary fiscal policy is used mainly to", options: ["restrain inflation", "cause recession", "raise unemployment", "increase imports"], correctIndex: 0, explanation: "It reduces demand to control inflation." },
        { prompt: "Which is NOT an objective of fiscal policy?", options: ["full employment", "price stability", "maximising the trade deficit", "economic growth"], correctIndex: 2, explanation: "Fiscal policy does not aim to maximise a trade deficit." },
        { prompt: "The main source of government revenue is", options: ["taxation", "lottery sales", "foreign aid only", "fines only"], correctIndex: 0, explanation: "Taxes are the largest revenue source." },
        { prompt: "Which is a non-tax source of government revenue?", options: ["income tax", "licences and fees", "payroll tax", "excise tax"], correctIndex: 1, explanation: "Fees and licences are non-tax revenue." },
        { prompt: "Government borrowing to cover a deficit", options: ["reduces the national debt", "adds to the national debt", "is the same as a surplus", "is tax revenue"], correctIndex: 1, explanation: "Borrowing increases the accumulated debt." },
        { prompt: "An excise tax on tobacco is intended partly to", options: ["encourage smoking", "discourage harmful consumption", "raise the money supply", "fix wages"], correctIndex: 1, explanation: "Such taxes reduce consumption of harmful goods." },
        { prompt: "A major economic effect of taxation is to", options: ["raise disposable income", "reduce disposable income and private spending", "abolish public goods", "remove inflation forever"], correctIndex: 1, explanation: "Taxes take income from households and firms." },
        { prompt: "Taxing higher earners more and spending on the poor achieves", options: ["redistribution of income", "a trade surplus", "deflation always", "higher tariffs"], correctIndex: 0, explanation: "Progressive taxation plus spending redistributes income." },
        { prompt: "Spending on roads, schools and hospitals is government", options: ["revenue", "expenditure", "borrowing only", "a tax"], correctIndex: 1, explanation: "These are forms of public expenditure." },
        { prompt: "Interest on the national debt is part of government", options: ["revenue", "expenditure", "tax", "surplus"], correctIndex: 1, explanation: "Debt interest is a spending item." },
        { prompt: "If very high tax rates discourage work and investment, this is an effect on", options: ["incentives", "the exchange rate", "the population", "the weather"], correctIndex: 0, explanation: "High taxes can weaken incentives." },
        { prompt: "A balanced budget occurs when", options: ["revenue exceeds spending", "spending exceeds revenue", "revenue equals spending", "there is no tax"], correctIndex: 2, explanation: "Balance means equal revenue and spending." },
        { prompt: "Grants and aid from abroad are a form of government", options: ["expenditure", "revenue", "debt repayment", "tax on exports"], correctIndex: 1, explanation: "They add to government revenue." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define public finance and distinguish a budget deficit from a budget surplus.", answerKey: "Public finance is the study of how the government raises revenue and spends it and the effect on the economy. A budget deficit occurs when the government spends more than it receives in taxes/revenue in a year; a budget surplus occurs when revenue exceeds spending. Award 4 for the definition and 3 each for deficit and surplus.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Define fiscal policy and state four of its objectives.", answerKey: "Fiscal policy is the government's use of taxation and public spending to influence the level of economic activity (aggregate demand). Any four objectives of: full employment, price stability (controlling inflation), economic growth, fair distribution of income, provision of public goods/services. Award 4 for the definition and 1 each for four objectives.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "To fight a recession, a government should use", options: ["contractionary fiscal policy", "expansionary fiscal policy", "a fixed exchange rate", "an import ban"], correctIndex: 1, answerKey: "Expansionary fiscal policy raises aggregate demand in a recession. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State three sources of government revenue and three economic effects of taxation.", answerKey: "Sources (any three): taxation; non-tax revenue (fees, licences, fines, state-enterprise profits); borrowing; grants and aid. Effects (any three): reduces disposable income and private spending; redistributes income; affects incentives to work/save/invest; discourages harmful goods; finances public goods and services. Award 1 mark each.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the meaning of public finance and discuss fiscal policy, its objectives, the sources of government revenue and the economic effects of taxation.", answerKey: "Award marks for: public finance and the government budget (deficit/surplus/debt), 6; fiscal policy defined and expansionary vs contractionary, 6; objectives of fiscal policy (employment, price stability, growth, redistribution, public goods), 6; sources of government revenue, 6; economic effects of taxation (disposable income, redistribution, incentives, discouraging harmful goods, funding services), 6.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Macroeconomics 3e, 17.2 Taxation (https://openstax.org/books/principles-macroeconomics-3e/pages/17-2-taxation) and Principles of Economics 3e, 5.3 Elasticity and Pricing (https://openstax.org/books/principles-economics-3e/pages/5-3-elasticity-and-pricing)
    {
      slug: "types-of-taxes-direct-and-indirect",
      title: "Types of Taxes: Direct and Indirect Taxes",
      objective:
        "By the end of the topic, learners should be able to distinguish direct taxes from indirect taxes and give examples of each.",
      estimatedMinutes: 100,
      notes: `## What a tax is

**Tax** — a compulsory payment to the government by individuals and firms, for which no direct good or service is given in return.
Taxes are classified by **who ultimately bears the burden** into **direct** and **indirect** taxes.

## Direct taxes

**Direct tax** — a tax levied **directly on the income or wealth** of a person or firm, where the person taxed is expected to **bear the burden** (it cannot easily be passed on).
Examples:
- **Individual income tax** — on personal income; the largest single federal revenue source.
- **Corporate income tax** — on company profits.
- **Payroll (social-insurance) tax** — on wages, funding social security and health care.
- **Property tax** — on the value of land and buildings.
- **Estate and gift tax** — on wealth transferred.

Income and payroll taxes together make up the great majority of central-government tax revenue.

## Indirect taxes

**Indirect tax** — a tax levied on **goods and services (spending)**, collected by an **intermediary** (such as a shop or producer) from the final consumer who bears the ultimate burden; the burden can be **passed on** through the price.
Examples:
- **Excise tax** — on specific goods such as petrol/gasoline, tobacco and alcohol.
- **Sales tax / value-added tax (VAT) / goods-and-services tax (GST)** — on the sale of goods and services.
- **Customs duties (tariffs)** — on imported goods.

## Comparison table

| Feature | Direct tax | Indirect tax |
| --- | --- | --- |
| Levied on | Income and wealth | Goods and services (spending) |
| Who pays it in | The person/firm taxed | An intermediary (shop/producer) |
| Can burden be shifted? | Not easily | Yes, through the price |
| Examples | Income, corporate, payroll, property, estate | Excise, sales/VAT, customs duties |

## Common errors

- **Thinking the person who hands the tax to the government always bears it.** With indirect taxes the seller collects but the consumer bears the burden.
- **Classifying by the tax's name.** Classify by the base: income/wealth = direct; spending on goods/services = indirect.
- **Forgetting customs duties are indirect taxes** charged on imported goods.`,
      workedExample: `**Question:** Classify each of the following as a direct or an indirect tax, and state who ultimately bears it: (a) personal income tax on a worker's salary; (b) excise tax on a packet of cigarettes; (c) corporate income tax on a company's profit; (d) VAT added at the shop till.

**Solution**

*Step 1 — income tax.* It is levied on income and the worker bears it; it cannot easily be passed on. **Direct tax**, borne by the worker.

*Step 2 — cigarette excise.* It is levied on a good and collected by the seller but added to the price. **Indirect tax**, borne by the consumer who buys the cigarettes.

*Step 3 — corporate income tax.* It is levied on company profit (income). **Direct tax**, borne by the company (its owners).

*Step 4 — VAT at the till.* It is a tax on the sale of goods and services, collected by the shop but added to the price paid by the buyer. **Indirect tax**, borne by the consumer.

**Answer:** (a) direct — worker; (b) indirect — consumer; (c) direct — company; (d) indirect — consumer.`,
      quiz: [
        { prompt: "A tax is a compulsory payment to the government for which", options: ["a direct good is always given back", "no direct good or service is given in return", "goods are given free", "interest is paid to the payer"], correctIndex: 1, explanation: "Taxes give no direct quid pro quo." },
        { prompt: "Direct and indirect taxes are distinguished by", options: ["their colour", "who ultimately bears the burden / the tax base", "the day they are paid", "the currency used"], correctIndex: 1, explanation: "The split is by base and incidence." },
        { prompt: "A direct tax is levied on", options: ["goods and services", "income and wealth", "imports only", "exports only"], correctIndex: 1, explanation: "Direct taxes fall on income and wealth." },
        { prompt: "An indirect tax is levied on", options: ["income and wealth", "goods and services (spending)", "population", "land only"], correctIndex: 1, explanation: "Indirect taxes fall on spending." },
        { prompt: "Which is a direct tax?", options: ["sales tax", "excise tax", "individual income tax", "customs duty"], correctIndex: 2, explanation: "Income tax is a direct tax." },
        { prompt: "Which is an indirect tax?", options: ["corporate income tax", "property tax", "excise tax on fuel", "estate tax"], correctIndex: 2, explanation: "Excise tax is indirect." },
        { prompt: "The burden of an indirect tax", options: ["cannot be shifted", "can be passed on through the price to consumers", "is always borne by the government", "falls only on exporters"], correctIndex: 1, explanation: "Indirect-tax burden shifts via price." },
        { prompt: "The burden of a direct tax", options: ["is easily shifted to others", "is borne by the person or firm taxed", "falls on foreigners", "disappears"], correctIndex: 1, explanation: "Direct taxes are borne by the taxpayer." },
        { prompt: "Corporate income tax is a", options: ["direct tax on company profit", "indirect tax on goods", "tariff", "sales tax"], correctIndex: 0, explanation: "It taxes company income directly." },
        { prompt: "Value-added tax (VAT) is a", options: ["direct tax", "indirect tax on goods and services", "tax on income", "tax on wealth"], correctIndex: 1, explanation: "VAT is an indirect spending tax." },
        { prompt: "Customs duties (tariffs) are", options: ["direct taxes on income", "indirect taxes on imported goods", "non-tax revenue", "property taxes"], correctIndex: 1, explanation: "Duties on imports are indirect taxes." },
        { prompt: "A payroll (social-insurance) tax on wages is generally classed as a", options: ["direct tax", "customs duty", "sales tax", "VAT"], correctIndex: 0, explanation: "It is levied on earnings, a direct tax." },
        { prompt: "With an indirect tax, the shop that hands the money to the government is", options: ["the one who bears the burden", "an intermediary/collector", "exempt from all tax", "the exporter"], correctIndex: 1, explanation: "The shop collects; the consumer bears it." },
        { prompt: "Estate and gift taxes are examples of", options: ["indirect taxes", "direct taxes on wealth transfer", "tariffs", "excise taxes"], correctIndex: 1, explanation: "They tax transferred wealth directly." },
        { prompt: "The largest single source of central-government tax revenue is usually", options: ["customs duties", "individual income tax", "estate tax", "excise on alcohol"], correctIndex: 1, explanation: "Income tax is the biggest source." },
        { prompt: "A sales tax at the till is borne mainly by", options: ["the shop owner", "the consumer", "the government", "exporters"], correctIndex: 1, explanation: "Consumers pay the higher price." },
        { prompt: "Which pair are both indirect taxes?", options: ["income tax and VAT", "excise tax and customs duty", "corporate tax and property tax", "payroll tax and estate tax"], correctIndex: 1, explanation: "Excise and customs are both indirect." },
        { prompt: "Which pair are both direct taxes?", options: ["income tax and corporate tax", "VAT and excise", "sales tax and tariff", "excise and customs"], correctIndex: 0, explanation: "Income and corporate tax are both direct." },
        { prompt: "Classify a tax by its", options: ["name only", "base (income/wealth vs goods/services)", "payment date", "colour"], correctIndex: 1, explanation: "The base determines direct vs indirect." },
        { prompt: "A tax on petrol added into the pump price is", options: ["a direct tax", "an indirect (excise) tax", "a property tax", "an income tax"], correctIndex: 1, explanation: "Fuel excise is an indirect tax." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a direct tax and an indirect tax, giving two examples of each.", answerKey: "A direct tax is levied directly on the income or wealth of a person or firm, with the person taxed bearing the burden (examples: individual income tax, corporate income tax, property tax, payroll tax, estate tax). An indirect tax is levied on goods and services (spending), collected by an intermediary from the consumer who bears the ultimate burden, which can be passed on through the price (examples: excise tax, sales tax/VAT/GST, customs duties). Award marks for each definition and two examples each.", marks: 10 },
        { type: "MULTIPLE_CHOICE", prompt: "Which of the following is an indirect tax?", options: ["personal income tax", "corporate income tax", "value-added tax (VAT)", "property tax"], correctIndex: 2, answerKey: "VAT is a tax on spending, an indirect tax. Option C.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why the burden of an indirect tax can be shifted but that of a direct tax usually cannot.", answerKey: "An indirect tax is placed on goods and services and collected by a seller, who adds it to the price; the consumer who buys the good therefore bears the burden, so it is shifted along the chain. A direct tax is placed on a person's or firm's income or wealth and is paid by, and borne by, that same taxpayer, so it is not easily passed on. Award marks for the shifting mechanism and the taxpayer-bears-it point.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Classify these as direct or indirect: income tax, excise tax on tobacco, corporate profit tax, import customs duty.", answerKey: "Income tax — direct; excise tax on tobacco — indirect; corporate profit tax — direct; import customs duty — indirect. Award 1.5 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Distinguish between direct and indirect taxes, giving examples, and explain how the burden of each is borne.", answerKey: "Award marks for: definition of direct tax with the base (income/wealth) and examples, 8; definition of indirect tax with the base (goods/services) and examples, 8; the incidence of a direct tax (borne by the taxpayer, not easily shifted), 6; the incidence of an indirect tax (collected by an intermediary, passed on to the consumer), 6; a clear comparison/illustration, 2.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Macroeconomics 3e, 17.2 Taxation (https://openstax.org/books/principles-macroeconomics-3e/pages/17-2-taxation) and Principles of Economics 3e, 5.3 Elasticity and Pricing (https://openstax.org/books/principles-economics-3e/pages/5-3-elasticity-and-pricing)
    {
      slug: "advantages-and-disadvantages-of-direct-and-indirect-taxes",
      title: "Advantages and Disadvantages of Direct and Indirect Taxes",
      objective:
        "By the end of the topic, learners should be able to compare the advantages and disadvantages of direct and indirect taxes.",
      estimatedMinutes: 100,
      notes: `## Direct taxes — advantages

- **Equitable (based on ability to pay)** — income tax can be **progressive**, so those with higher incomes pay a larger share, reducing inequality.
- **Certain** — the taxpayer knows what is owed and the government can predict the revenue.
- **Economical to collect** — can be deducted at source (pay-as-you-earn) from wages.
- **Does not directly raise prices** of goods, so it need not fuel inflation.

## Direct taxes — disadvantages

- **Can weaken incentives** — very high marginal rates may discourage extra work, saving and investment.
- **Easier to evade** — income can be hidden or under-declared.
- **Unpopular and visible** — people feel the deduction from income directly.
- **Falls only on those with income/wealth** — the very poor pay little, so the base can be narrow.

## Indirect taxes — advantages

- **Wide coverage** — everyone who buys the good pays, so the tax base is broad.
- **Hard to evade** — the tax is built into the price at purchase.
- **Convenient** — paid in small amounts as people spend.
- **Can discourage harmful goods** — excise taxes on tobacco and alcohol reduce their consumption.
- **Flexible** — rates can be changed quickly to raise revenue or steer consumption.

## Indirect taxes — disadvantages

- **Regressive** — the same tax on a good takes a **larger share of a poor person's income** than a rich person's.
- **Raises prices** — adds to the cost of goods and can contribute to inflation.
- **Burden depends on elasticity** — on goods with **inelastic demand** (e.g. staples) consumers bear most of the tax.
- **Uncertain revenue** — if people buy less, revenue falls.

## Comparison table

| Issue | Direct taxes | Indirect taxes |
| --- | --- | --- |
| Equity | Can be progressive (fairer) | Often regressive |
| Evasion | Easier to evade | Hard to evade |
| Effect on prices | Little direct effect | Raise prices |
| Incentives | High rates may discourage effort | Less effect on work incentives |
| Coverage | Narrower (income/wealth holders) | Broad (all buyers) |

## Common errors

- **Calling all indirect taxes fair.** They are often regressive, hitting the poor harder as a share of income.
- **Thinking direct taxes always maximise revenue.** High rates can encourage evasion and weaken incentives.
- **Ignoring elasticity.** For goods with inelastic demand, an indirect tax falls mainly on consumers.`,
      workedExample: `**Question:** A government must raise extra revenue and is choosing between a higher income tax (direct) and a higher VAT on all goods (indirect). (a) Give one equity advantage of the income tax. (b) Give one reason the VAT may be easier to collect. (c) State the main equity disadvantage of the VAT.

**Solution**

*Step 1 — equity of income tax.* Income tax can be made **progressive**, so higher earners pay a larger share of income; this is based on **ability to pay** and reduces inequality.

*Step 2 — collecting the VAT.* VAT is **built into the price** at the point of sale and collected by sellers, so it is **hard to evade** and paid automatically as people spend.

*Step 3 — equity disadvantage of the VAT.* VAT is **regressive**: because the poor spend a larger share of their income on taxed goods, the same VAT takes a **larger share of a poor person's income** than a rich person's.

**Answer:** (a) income tax can be progressive (ability to pay); (b) VAT is in the price and hard to evade; (c) VAT is regressive, hitting the poor harder as a share of income.`,
      quiz: [
        { prompt: "A key advantage of a direct income tax is that it can be", options: ["regressive", "progressive and based on ability to pay", "hidden from the payer", "added to prices"], correctIndex: 1, explanation: "Direct income tax can be progressive and equitable." },
        { prompt: "Direct taxes are 'certain' because", options: ["no one knows the amount", "the taxpayer and government know what is owed", "they vary daily", "they are secret"], correctIndex: 1, explanation: "The liability is known in advance." },
        { prompt: "Pay-as-you-earn makes direct income tax", options: ["expensive to collect", "economical to collect (deducted at source)", "impossible to collect", "an indirect tax"], correctIndex: 1, explanation: "Deduction at source is cheap to administer." },
        { prompt: "A disadvantage of high direct taxes is that they may", options: ["raise work and saving incentives", "weaken incentives to work, save and invest", "reduce evasion", "lower prices"], correctIndex: 1, explanation: "Very high rates can discourage effort." },
        { prompt: "Compared with indirect taxes, direct taxes are", options: ["harder to evade", "easier to evade", "always hidden in prices", "paid by non-earners"], correctIndex: 1, explanation: "Income can be under-declared, so direct taxes are easier to evade." },
        { prompt: "An advantage of indirect taxes is that they have", options: ["a narrow base", "wide coverage (all buyers pay)", "no effect on revenue", "high evasion"], correctIndex: 1, explanation: "Everyone who buys pays, broadening the base." },
        { prompt: "Indirect taxes are hard to evade because", options: ["they are secret", "they are built into the price at purchase", "no one pays them", "they fall on income"], correctIndex: 1, explanation: "The tax is embedded in the purchase price." },
        { prompt: "A major disadvantage of indirect taxes is that they are often", options: ["progressive", "regressive, hitting the poor harder as a share of income", "untaxed", "on income only"], correctIndex: 1, explanation: "They take a larger share of poorer incomes." },
        { prompt: "Indirect taxes can contribute to", options: ["lower prices", "higher prices and inflation", "no change in prices", "falling demand only"], correctIndex: 1, explanation: "They add to the cost of goods." },
        { prompt: "On a good with inelastic demand, an indirect tax falls mainly on", options: ["producers", "consumers", "the government", "exporters"], correctIndex: 1, explanation: "Inelastic demand means consumers bear most of the tax." },
        { prompt: "Excise taxes on tobacco and alcohol are defended because they", options: ["raise consumption", "discourage harmful consumption while raising revenue", "are progressive", "cannot be collected"], correctIndex: 1, explanation: "They reduce use of harmful goods." },
        { prompt: "An advantage of indirect taxes for the government is that they are", options: ["slow to change", "flexible — rates can be changed quickly", "always certain", "progressive"], correctIndex: 1, explanation: "Indirect-tax rates can be adjusted quickly." },
        { prompt: "A disadvantage of indirect taxes is that revenue is", options: ["always fixed", "uncertain — it falls if people buy less", "never collected", "progressive"], correctIndex: 1, explanation: "Revenue depends on how much is bought." },
        { prompt: "Which tax is more likely to reduce income inequality?", options: ["a flat VAT", "a progressive income tax", "a fuel excise", "a customs duty"], correctIndex: 1, explanation: "Progressive income tax redistributes." },
        { prompt: "Which is an advantage of direct taxes on prices?", options: ["they raise all prices", "they do not directly raise prices of goods", "they double VAT", "they fuel inflation"], correctIndex: 1, explanation: "Direct taxes do not directly raise goods prices." },
        { prompt: "A reason indirect taxes are convenient is that they are paid", options: ["in one large sum yearly", "in small amounts as people spend", "only by firms", "only once in a lifetime"], correctIndex: 1, explanation: "They are paid gradually through purchases." },
        { prompt: "'Regressive' means a tax takes", options: ["a larger share of a rich person's income", "a larger share of a poor person's income", "the same amount from everyone", "nothing from anyone"], correctIndex: 1, explanation: "Regressive taxes hit lower incomes harder proportionally." },
        { prompt: "A narrow tax base is a disadvantage of", options: ["indirect taxes", "direct taxes (fall on income/wealth holders)", "VAT", "customs duties"], correctIndex: 1, explanation: "Direct taxes miss those without income/wealth." },
        { prompt: "Which best pairs a tax with its typical equity label?", options: ["progressive income tax; regressive VAT", "regressive income tax; progressive VAT", "both progressive", "both regressive"], correctIndex: 0, explanation: "Income tax can be progressive; VAT is usually regressive." },
        { prompt: "If demand for a taxed staple is inelastic, the indirect tax mainly", options: ["lowers its price", "is borne by consumers who keep buying it", "is avoided easily", "falls on producers"], correctIndex: 1, explanation: "Consumers of inelastic staples bear the tax." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State three advantages of direct taxes.", answerKey: "Any three of: equitable/based on ability to pay and can be progressive (reducing inequality); certain — the amount owed is known; economical to collect (pay-as-you-earn at source); does not directly raise the prices of goods. Award 2 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "State three advantages of indirect taxes.", answerKey: "Any three of: wide coverage (all buyers pay, broad base); hard to evade (built into the price); convenient (paid in small amounts as people spend); can discourage harmful goods (excise on tobacco/alcohol); flexible (rates changed quickly). Award 2 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is a disadvantage of indirect taxes?", options: ["easy to evade", "regressive — hits the poor harder as a share of income", "based on ability to pay", "cannot raise revenue"], correctIndex: 1, answerKey: "Indirect taxes are typically regressive. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why direct taxes are easier to evade but may weaken incentives, while indirect taxes are hard to evade but regressive.", answerKey: "Direct taxes fall on declared income/wealth, which can be hidden or under-declared, so they are easier to evade; and very high marginal rates may discourage extra work, saving and investment, weakening incentives. Indirect taxes are built into the price at purchase, so they are hard to evade; but because the poor spend a larger share of their income on taxed goods, the same tax takes a larger share of a poor person's income, making it regressive. Award marks for each of the four points.", marks: 8 },
        { type: "ESSAY", prompt: "Compare the advantages and disadvantages of direct and indirect taxes and advise a government on balancing them.", answerKey: "Award marks for: advantages of direct taxes (progressive/equitable, certain, economical, no direct price rise), 7; disadvantages of direct taxes (weaken incentives, easier to evade, narrow base), 6; advantages of indirect taxes (broad base, hard to evade, convenient, discourage harmful goods, flexible), 7; disadvantages of indirect taxes (regressive, raise prices, uncertain revenue, elasticity shifts burden to consumers), 6; a balanced recommendation (use a mix for equity and revenue), 4.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 5.3 Elasticity and Pricing (https://openstax.org/books/principles-economics-3e/pages/5-3-elasticity-and-pricing) and Khan Academy — Elasticity and tax incidence (https://www.khanacademy.org/economics-finance-domain/microeconomics/elasticity-tutorial/price-elasticity-tutorial/a/elasticity-and-tax-incidence)
    {
      slug: "tax-incidence-and-elasticity",
      title: "Tax Incidence: Elasticity of Demand and Supply and Taxation",
      objective:
        "By the end of the topic, learners should be able to explain tax incidence and use the elasticity of demand and supply to determine who bears the burden of a tax.",
      estimatedMinutes: 110,
      notes: `## Tax incidence

**Tax incidence** — the analysis of how the **burden of a tax is divided between consumers and producers** (buyers and sellers).
- When a government places a tax on a good, the question is not who *hands over* the tax, but who **finally bears** it through a higher price or a lower received price.
- Typically the burden falls on **both** consumers and producers; the split depends on the **relative elasticities** of demand and supply.

## The elasticity rule

- **When demand is more inelastic than supply → consumers bear most of the tax.**
- **When supply is more inelastic than demand → producers (sellers) bear most of the tax.**
- Reason: the **more inelastic side cannot easily change the quantity** it buys or sells in response to the price, so it cannot escape the tax.

## Effect of a tax on the market

- An excise (per-unit) tax on producers **shifts the supply curve left (up)**.
- The new equilibrium has a **higher price** and a **lower quantity**.
- The price buyers pay rises; the price sellers keep (after tax) falls. The gap between them equals the tax.

## Example: cigarettes

- Cigarette demand is relatively **inelastic** (elasticity about 0.3): a 10% price rise cuts quantity demanded by only about 3%.
- A tax on cigarette producers therefore **passes mostly to consumers** as higher prices, and does little to reduce the quantity smoked.

## Tax and revenue

- **Tax revenue is larger the more inelastic demand and supply are**, because quantity falls little when the tax is added.
- The **more elastic** demand and supply are, the **lower** the tax revenue (quantity falls a lot).

## Summary table

| Situation | Who bears most of the tax | Why |
| --- | --- | --- |
| Demand more inelastic than supply | Consumers | Buyers cannot cut quantity much |
| Supply more inelastic than demand | Producers | Sellers cannot cut quantity much |
| Both very inelastic | Shared; high tax revenue | Quantity barely falls |
| Both very elastic | Low tax revenue | Quantity falls sharply |

## Common errors

- **Thinking the side that pays the tax to the government bears it.** Incidence depends on elasticity, not on who writes the cheque.
- **Assuming the tax is always split equally.** The split follows relative elasticities.
- **Ignoring that elastic markets raise little revenue.** A tax on an easily-avoided good brings small revenue.`,
      workedExample: `**Question:** A government puts a per-unit excise tax on cigarettes, whose demand is inelastic (about 0.3) while supply is relatively elastic. (a) Which curve shifts and in which direction? (b) What happens to price and quantity? (c) Who bears most of the tax, and why? (d) What does this imply for tax revenue?

**Solution**

*Step 1 — the shift.* A tax on producers raises their costs, so the **supply curve shifts left (upward)**.

*Step 2 — new equilibrium.* The equilibrium moves to a **higher price** and a **lower quantity**. The price buyers pay rises more than the price sellers keep falls.

*Step 3 — who bears it.* Demand is **more inelastic than supply**, so **consumers bear most of the tax**: because smokers do not cut back much when the price rises, the tax passes to them as a higher price.

*Step 4 — revenue.* Because demand is inelastic, quantity falls only a little, so the government collects **large tax revenue** from the cigarette tax.

**Answer:** (a) supply shifts left/up; (b) price rises and quantity falls; (c) consumers bear most of the tax because demand is more inelastic; (d) revenue is large because inelastic demand means quantity barely falls.`,
      quiz: [
        { prompt: "Tax incidence is about", options: ["how high the tax rate is set", "how the tax burden is divided between consumers and producers", "which currency is used", "who prints the tax form"], correctIndex: 1, explanation: "Incidence is the division of the burden." },
        { prompt: "The split of a tax burden depends mainly on", options: ["the colour of the good", "the relative elasticities of demand and supply", "the day of the week", "the exchange rate"], correctIndex: 1, explanation: "Relative elasticity drives incidence." },
        { prompt: "When demand is more inelastic than supply, most of the tax is borne by", options: ["producers", "consumers", "the government", "importers"], correctIndex: 1, explanation: "Inelastic buyers cannot avoid the tax." },
        { prompt: "When supply is more inelastic than demand, most of the tax is borne by", options: ["consumers", "producers (sellers)", "foreigners", "no one"], correctIndex: 1, explanation: "Inelastic sellers bear the burden." },
        { prompt: "The side that bears most of the tax is the one that is", options: ["more elastic", "more inelastic (less able to change quantity)", "richer", "larger"], correctIndex: 1, explanation: "The inelastic side cannot adjust quantity." },
        { prompt: "An excise tax on producers shifts the supply curve", options: ["right (down)", "left (up)", "not at all", "into demand"], correctIndex: 1, explanation: "The tax raises costs, shifting supply left." },
        { prompt: "After a tax, the new equilibrium has", options: ["a lower price and higher quantity", "a higher price and lower quantity", "no change", "a higher quantity only"], correctIndex: 1, explanation: "Price rises and quantity falls." },
        { prompt: "The gap between the price buyers pay and the price sellers keep equals", options: ["the profit", "the tax", "the subsidy", "the wage"], correctIndex: 1, explanation: "That wedge is the per-unit tax." },
        { prompt: "Cigarette demand (elasticity about 0.3) is", options: ["elastic", "inelastic", "unit elastic", "perfectly elastic"], correctIndex: 1, explanation: "An elasticity below 1 is inelastic." },
        { prompt: "A tax on cigarettes mostly", options: ["lowers prices for smokers", "passes to consumers as higher prices", "ends smoking at once", "falls only on producers"], correctIndex: 1, explanation: "Inelastic demand shifts the burden to consumers." },
        { prompt: "Tax revenue is larger when demand and supply are", options: ["more elastic", "more inelastic", "zero", "negative"], correctIndex: 1, explanation: "Inelastic markets keep quantity high, so revenue is high." },
        { prompt: "The more elastic demand and supply are, the ______ the tax revenue.", options: ["higher", "lower", "unchanged", "infinite"], correctIndex: 1, explanation: "Elastic markets shrink quantity, cutting revenue." },
        { prompt: "If buyers can easily switch away from a taxed good, the burden falls more on", options: ["buyers", "sellers", "the government", "exporters"], correctIndex: 1, explanation: "Elastic demand shifts burden to sellers." },
        { prompt: "Who legally hands the tax to the government determines the", options: ["final incidence", "nothing about the final incidence — elasticity does", "exchange rate", "inflation rate"], correctIndex: 1, explanation: "Legal liability does not fix who bears it." },
        { prompt: "A tax on a good with perfectly inelastic demand is borne by", options: ["producers entirely", "consumers entirely", "the government", "foreigners"], correctIndex: 1, explanation: "Buyers cannot reduce quantity at all, so they bear it." },
        { prompt: "Typically a tax burden falls", options: ["only on producers", "only on consumers", "on both consumers and producers", "on no one"], correctIndex: 2, explanation: "The burden is usually shared." },
        { prompt: "Which market gives the government the most tax revenue per unit of a good?", options: ["very elastic demand and supply", "very inelastic demand and supply", "perfectly elastic supply", "zero demand"], correctIndex: 1, explanation: "Inelastic markets keep quantity high." },
        { prompt: "A tax shifts supply left, so quantity traded", options: ["rises", "falls", "stays the same", "doubles"], correctIndex: 1, explanation: "Higher cost reduces quantity supplied and traded." },
        { prompt: "If demand is elastic and supply inelastic, most of the tax is paid by", options: ["consumers", "producers", "the government", "importers"], correctIndex: 1, explanation: "The inelastic side (supply) bears it." },
        { prompt: "The main lesson of tax incidence is that the burden depends on", options: ["who the law names as the payer", "the relative elasticity of demand and supply", "the size of the country", "the time of year"], correctIndex: 1, explanation: "Elasticity, not legal liability, sets incidence." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define tax incidence and state the rule linking it to elasticity.", answerKey: "Tax incidence is the analysis of how the burden of a tax is divided between consumers and producers. The rule: when demand is more inelastic than supply, consumers bear most of the tax; when supply is more inelastic than demand, producers bear most of the tax — because the more inelastic side cannot easily change the quantity it buys or sells. Award 4 for the definition and 4 for the rule.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "When demand is more inelastic than supply, most of a tax is borne by", options: ["producers", "consumers", "the government", "foreign buyers"], correctIndex: 1, answerKey: "Inelastic demand means consumers bear most of the tax. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain, using cigarettes, why consumers bear most of an excise tax on a good with inelastic demand.", answerKey: "Cigarette demand is inelastic (about 0.3), so a price rise cuts quantity demanded only a little. When a tax shifts supply left, the price rises and quantity falls only slightly; because smokers keep buying, the higher price (the tax) is passed on to them, so consumers bear most of the burden. Award marks for the inelasticity point, the small quantity fall and the burden passing to consumers.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Explain how the elasticity of demand and supply affects the tax revenue a government collects.", answerKey: "Tax revenue is larger the more inelastic demand and supply are, because the quantity traded falls only a little when the tax is added, so the tax is collected on a large quantity. The more elastic demand and supply are, the lower the revenue, because quantity falls sharply. Award marks for the inelastic-high-revenue and elastic-low-revenue points.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss tax incidence and how the elasticity of demand and supply determines who bears a tax and how much revenue is raised.", answerKey: "Award marks for: definition of tax incidence (division of the burden), 6; the effect of a tax on the market (supply shifts left, higher price, lower quantity, wedge equals tax), 6; the elasticity rule (inelastic side bears most of the tax), 8; the cigarette/inelastic-demand example, 4; the link between elasticity and tax revenue (inelastic = high revenue), 4; conclusion that incidence depends on elasticity not legal liability, 2.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Macroeconomics 3e, 17.2 Taxation (https://openstax.org/books/principles-macroeconomics-3e/pages/17-2-taxation)
    {
      slug: "systems-of-taxation-progressive-proportional-regressive",
      title: "Systems of Taxation: Progressive, Proportional and Regressive Taxes",
      objective:
        "By the end of the topic, learners should be able to define and distinguish progressive, proportional and regressive tax systems and give examples.",
      estimatedMinutes: 100,
      notes: `## Classifying tax systems by the share of income paid

A tax system is classified by how the **share of income paid in tax** changes as income rises.

**Progressive tax** — those with **higher incomes pay a larger share of their income** in tax than those with lower incomes.
- Example: the individual **income tax**, with **marginal rates rising** with income (e.g. from 10% up to 35%).
- **Marginal tax rate** — the tax rate applied to the **next dollar** of income in a progressive system.

**Proportional (flat) tax** — **everyone pays the same share** of income regardless of income level (a flat percentage of all income or wages).
- Example: a flat payroll tax such as the Medicare tax (a fixed % of all wages with no ceiling).

**Regressive tax** — those with **higher incomes pay a smaller share of their income** in tax than those with lower incomes.
- Example: taxes with a ceiling (e.g. Social Security tax above the wage limit), and in effect many **indirect taxes** (sales/excise) because the poor spend a larger share of income.

## Worked comparison (illustrative)

| Income | Progressive (rising rate) | Proportional (10%) | Regressive (falling rate) |
| --- | --- | --- | --- |
| 1,000 | 5% = 50 | 10% = 100 | 15% = 150 |
| 10,000 | 10% = 1,000 | 10% = 1,000 | 10% = 1,000 |
| 100,000 | 20% = 20,000 | 10% = 10,000 | 5% = 5,000 |

- Progressive: the **rate rises** with income.
- Proportional: the **rate is constant**.
- Regressive: the **rate falls** as income rises.

## Equity and ability to pay

- **Progressive** systems follow the **ability-to-pay** principle and reduce income inequality.
- **Regressive** systems bear more heavily on the poor relative to income.
- A country's overall system mixes taxes, so the net effect depends on the balance of direct and indirect taxes.

## Common errors

- **Confusing the amount of tax with the share of income.** A rich person may pay more money under a regressive tax yet a smaller *share* of income.
- **Thinking proportional means everyone pays the same amount.** They pay the same *percentage*, not the same sum.
- **Assuming all indirect taxes are proportional.** Because the poor spend a larger share of income, indirect taxes are usually regressive.`,
      workedExample: `**Question:** Under a tax, a person earning 1,000 pays 150 and a person earning 100,000 pays 5,000. (a) Find the share of income each pays. (b) Is the tax progressive, proportional or regressive? (c) Name a real example of this type of tax.

**Solution**

*Step 1 — shares of income.* Low earner: 150 ÷ 1,000 = 0.15 = **15%**. High earner: 5,000 ÷ 100,000 = 0.05 = **5%**.

*Step 2 — classify.* The higher earner pays a **smaller share** of income (5% vs 15%), so the tax is **regressive**.

*Step 3 — example.* A tax with a ceiling (such as the Social Security payroll tax above its wage limit), or in effect a flat sales/excise tax, since the poor spend a larger share of income on taxed goods.

**Answer:** (a) 15% and 5%; (b) regressive; (c) a capped payroll tax or, in effect, a sales/excise tax.`,
      quiz: [
        { prompt: "A tax system is classified by how the ______ changes as income rises.", options: ["colour of money", "share of income paid in tax", "exchange rate", "population"], correctIndex: 1, explanation: "Classification is by the share of income paid." },
        { prompt: "A progressive tax means higher-income people pay", options: ["a smaller share of income", "a larger share of income", "the same amount", "no tax"], correctIndex: 1, explanation: "Progressive = rising share with income." },
        { prompt: "A proportional (flat) tax means everyone pays", options: ["the same share of income", "a rising share", "a falling share", "the same amount of money"], correctIndex: 0, explanation: "Proportional = constant share of income." },
        { prompt: "A regressive tax means higher-income people pay", options: ["a larger share of income", "a smaller share of income", "all the tax", "no tax"], correctIndex: 1, explanation: "Regressive = falling share as income rises." },
        { prompt: "The individual income tax with rising marginal rates is", options: ["regressive", "proportional", "progressive", "zero"], correctIndex: 2, explanation: "Rising rates make it progressive." },
        { prompt: "The marginal tax rate is the rate on", options: ["total income", "the next dollar of income", "property only", "imports"], correctIndex: 1, explanation: "It applies to the next unit of income." },
        { prompt: "A flat payroll tax at the same % of all wages is", options: ["progressive", "proportional", "regressive", "a tariff"], correctIndex: 1, explanation: "A constant rate is proportional." },
        { prompt: "A tax with a ceiling, so high earners pay a smaller share above the limit, is", options: ["progressive", "regressive", "proportional", "a subsidy"], correctIndex: 1, explanation: "Capping the base makes it regressive." },
        { prompt: "Many sales/excise (indirect) taxes are in effect", options: ["progressive", "regressive", "proportional to wealth", "untaxed"], correctIndex: 1, explanation: "The poor spend a larger share, so these are regressive." },
        { prompt: "Progressive taxes follow the principle of", options: ["ability to pay", "benefit only", "lowest cost", "fixed sum"], correctIndex: 0, explanation: "Progressivity rests on ability to pay." },
        { prompt: "Which tax reduces income inequality most?", options: ["regressive tax", "progressive tax", "flat sales tax", "capped payroll tax"], correctIndex: 1, explanation: "Progressive taxes redistribute toward equality." },
        { prompt: "Under a 10% proportional tax, a person earning 2,000 pays", options: ["100", "200", "300", "20"], correctIndex: 1, explanation: "10% of 2,000 = 200." },
        { prompt: "Paying 'the same percentage' but not 'the same amount' describes a", options: ["progressive tax", "proportional tax", "regressive tax", "lump-sum tax"], correctIndex: 1, explanation: "Proportional = same rate, different amounts." },
        { prompt: "If the tax rate falls from 15% to 5% as income rises, the tax is", options: ["progressive", "proportional", "regressive", "flat"], correctIndex: 2, explanation: "A falling rate is regressive." },
        { prompt: "If the tax rate rises from 10% to 35% as income rises, the tax is", options: ["regressive", "progressive", "proportional", "zero"], correctIndex: 1, explanation: "A rising rate is progressive." },
        { prompt: "A rich person can pay more money in tax yet a smaller ______ under a regressive tax.", options: ["share of income", "number of taxes", "exchange rate", "amount"], correctIndex: 0, explanation: "Regressive means smaller share, even if larger amount." },
        { prompt: "Which best describes a proportional tax rate as income rises?", options: ["rises", "falls", "stays constant", "disappears"], correctIndex: 2, explanation: "Proportional rates are constant." },
        { prompt: "Overall tax fairness in a country depends on the balance of", options: ["direct and indirect taxes", "exports and imports", "coins and notes", "banks and firms"], correctIndex: 0, explanation: "The mix of taxes sets the net effect." },
        { prompt: "A single taxpayer facing marginal rates from 10% to 35% is in a", options: ["regressive system", "progressive system", "proportional system", "tax-free system"], correctIndex: 1, explanation: "Rising marginal rates are progressive." },
        { prompt: "The payroll tax for Medicare at a flat % of all wages is an example of a", options: ["progressive tax", "proportional tax", "regressive tax", "customs duty"], correctIndex: 1, explanation: "A flat rate with no ceiling is proportional." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define progressive, proportional and regressive taxes.", answerKey: "A progressive tax takes a larger share of income from higher-income people than from lower-income people (rising rate). A proportional (flat) tax takes the same share of income from everyone regardless of income. A regressive tax takes a smaller share of income from higher-income people than from lower-income people (falling rate). Award 3-4 marks each.", marks: 10 },
        { type: "MULTIPLE_CHOICE", prompt: "A tax whose rate rises as income rises is", options: ["regressive", "proportional", "progressive", "flat"], correctIndex: 2, answerKey: "A rising rate is a progressive tax. Option C.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A person earning 1,000 pays 100 and a person earning 10,000 pays 1,000. Classify the tax and justify.", answerKey: "Both pay 10% of income (100/1,000 = 10% and 1,000/10,000 = 10%). Because the share of income is the same at every income level, the tax is proportional (flat). Award marks for computing the shares and classifying.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Give one example each of a progressive, a proportional and a regressive tax.", answerKey: "Progressive: individual income tax with rising marginal rates. Proportional: a flat payroll tax such as the Medicare tax (same % of all wages). Regressive: a capped tax such as Social Security above its wage limit, or in effect a flat sales/excise tax. Award 2 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the three systems of taxation (progressive, proportional, regressive) with examples, and discuss which best achieves equity.", answerKey: "Award marks for: progressive defined with example and marginal rates, 7; proportional defined with example, 6; regressive defined with example (caps and indirect taxes), 7; the ability-to-pay principle and how progressive taxes reduce inequality, 6; a reasoned view that a progressive system (or a balanced mix) best achieves equity, 4.", marks: 30 },
      ],
    },
    // source: OpenStax — Introduction to Business 3.4 Fostering Global Trade (https://openstax.org/books/introduction-business/pages/3-4-fostering-global-trade), Principles of Economics 3e 10.2 Oligopoly (https://openstax.org/books/principles-economics-3e/pages/10-2-oligopoly) and Introduction to Political Science 15.4 How Do Regional IGOs Contribute to Global Governance (https://openstax.org/books/introduction-political-science/pages/15-4-how-do-regional-igos-contribute-to-global-governance)
    {
      slug: "international-economic-organizations",
      title: "International Economic Organizations: IMF, World Bank Group, OPEC, UNCTAD and Regional Development Banks",
      objective:
        "By the end of the topic, learners should be able to describe the roles of the major international economic organisations and how a country such as Liberia can benefit from them.",
      estimatedMinutes: 110,
      notes: `## Global economic organisations

**International Monetary Fund (IMF)** — founded in 1945 to **promote trade through financial cooperation** and reduce trade barriers. It makes **short-term loans** to member nations that cannot meet their budgetary/payment needs and acts as a **lender of last resort**, often requiring economic reforms from borrowers.

**World Bank (IBRD)** — the International Bank for Reconstruction and Development; it offers **low-interest loans to developing countries** for infrastructure (roads, power) and development, helps manage debt, and is a **major source of advice and information** for developing nations.

**International Finance Corporation (IFC)** — the arm of the World Bank Group that supports development by **financing private-sector investment** in developing countries.

**World Trade Organization (WTO)** — created in 1995 to replace GATT (1948); the leading institution for **reducing trade barriers and opening markets**, with a dispute-resolution process and binding rules for members.

## Commodity and development organisations

**OPEC (Organization of the Petroleum Exporting Countries)** — an international organisation whose members sign agreements to **act like a cartel**: coordinate petroleum policy, **hold down output and keep oil prices high**, and secure steady income for producers. Members own most of the world's known oil reserves.

**UNCTAD (UN Conference on Trade and Development)** — the UN body that promotes **trade as a tool for the development** of developing countries and helps them take part in world trade on fairer terms.

## Regional development organisations

Regional intergovernmental organisations (IGOs) work to **improve life in a region by encouraging economic development, facilitating trade and enhancing security**. Relevant examples:
- **African Development Bank (AfDB)** — a regional development bank that lends for development projects in Africa.
- **Asian Development Bank (ADB)** — the regional development bank for Asia and the Pacific.
- **Economic Commission for Africa (ECA)** — a UN regional commission promoting the economic development of Africa.

## Summary table

| Organisation | Main role |
| --- | --- |
| IMF | Short-term loans, financial stability, lender of last resort |
| World Bank (IBRD) | Low-interest development loans and advice |
| IFC | Finance for private-sector investment in developing countries |
| WTO | Reduce trade barriers, settle trade disputes |
| OPEC | Coordinate oil output and prices (cartel of oil exporters) |
| UNCTAD | Trade for development of developing countries |
| AfDB / ADB | Regional development lending (Africa / Asia) |
| ECA | UN regional economic development for Africa |

## How Liberia can benefit

- **Loans and finance** from the IMF, World Bank, IFC and AfDB for development projects and balance-of-payments support.
- **Advice and capacity building** on policy and institutions.
- **Fairer access to world trade** through the WTO and UNCTAD.
- **Regional cooperation and investment** through African institutions.

## Common errors

- **Confusing the IMF with the World Bank.** The IMF focuses on short-term financial stability and payments; the World Bank funds long-term development.
- **Thinking OPEC maximises output.** OPEC restricts output to keep prices high.
- **Treating the WTO as a free-trade agreement.** It is a rules-based body ensuring non-discriminatory trade, not a bloc that abolishes all barriers.`,
      workedExample: `**Question:** Liberia faces a short-term shortage of foreign currency to pay for essential imports, and also wants long-term finance to build a hydro-electric dam. (a) Which organisation is best suited to the short-term payments problem, and why? (b) Which is best suited to the long-term dam project, and why? (c) Name the UN body that would help Liberia trade on fairer terms.

**Solution**

*Step 1 — short-term payments.* The **IMF** makes **short-term loans** to member nations that cannot meet their budgetary/payment needs and acts as a lender of last resort, so it suits the foreign-currency shortage.

*Step 2 — long-term project.* The **World Bank (IBRD)** offers **low-interest loans to developing countries** for infrastructure such as power projects, so it suits the dam.

*Step 3 — fairer trade.* **UNCTAD** promotes trade as a tool for the development of developing countries and helps them trade on fairer terms.

**Answer:** (a) the IMF — short-term loans and lender of last resort; (b) the World Bank (IBRD) — low-interest development loans for infrastructure; (c) UNCTAD.`,
      quiz: [
        { prompt: "The IMF was founded mainly to", options: ["build roads", "promote trade through financial cooperation and provide short-term loans", "sell oil", "set tariffs"], correctIndex: 1, explanation: "The IMF supports financial stability and payments." },
        { prompt: "The IMF often acts as a", options: ["cartel", "lender of last resort to troubled nations", "retailer", "customs office"], correctIndex: 1, explanation: "It lends to members in difficulty." },
        { prompt: "The World Bank (IBRD) mainly offers", options: ["short-term payments loans", "low-interest loans for development to developing countries", "oil quotas", "tariff rules"], correctIndex: 1, explanation: "The World Bank funds long-term development." },
        { prompt: "The IFC is the World Bank arm that finances", options: ["central banks", "private-sector investment in developing countries", "oil cartels", "military projects"], correctIndex: 1, explanation: "The IFC supports private investment." },
        { prompt: "The WTO was created in 1995 to replace", options: ["the IMF", "GATT", "OPEC", "the World Bank"], correctIndex: 1, explanation: "The WTO succeeded GATT." },
        { prompt: "The main role of the WTO is to", options: ["raise all tariffs", "reduce trade barriers and settle trade disputes", "fix oil prices", "print money"], correctIndex: 1, explanation: "The WTO opens markets under agreed rules." },
        { prompt: "OPEC is best described as", options: ["a development bank", "a cartel of oil-exporting countries", "a UN trade body", "a central bank"], correctIndex: 1, explanation: "OPEC members act like a cartel." },
        { prompt: "OPEC seeks to", options: ["maximise oil output", "hold down output and keep oil prices high", "ban oil exports", "set tariffs"], correctIndex: 1, explanation: "It restricts output to raise prices." },
        { prompt: "UNCTAD promotes", options: ["protection for rich countries", "trade for the development of developing countries", "higher oil prices", "fixed exchange rates"], correctIndex: 1, explanation: "UNCTAD links trade to development." },
        { prompt: "The AfDB is a", options: ["global central bank", "regional development bank for Africa", "oil cartel", "UN security body"], correctIndex: 1, explanation: "The African Development Bank lends for African development." },
        { prompt: "The ADB serves", options: ["Africa", "Asia and the Pacific", "Europe only", "the Americas only"], correctIndex: 1, explanation: "The Asian Development Bank serves Asia-Pacific." },
        { prompt: "The ECA is a UN regional commission promoting the economic development of", options: ["Asia", "Africa", "Europe", "the Pacific"], correctIndex: 1, explanation: "The Economic Commission for Africa focuses on Africa." },
        { prompt: "Which organisation focuses on short-term financial stability and payments?", options: ["World Bank", "IMF", "OPEC", "WTO"], correctIndex: 1, explanation: "The IMF handles short-term stability." },
        { prompt: "Which organisation funds long-term infrastructure in developing countries?", options: ["IMF", "World Bank (IBRD)", "OPEC", "WTO"], correctIndex: 1, explanation: "The World Bank funds long-term projects." },
        { prompt: "Regional IGOs work to improve a region by", options: ["banning trade", "encouraging economic development, facilitating trade and enhancing security", "raising oil prices", "printing currency"], correctIndex: 1, explanation: "They foster regional cooperation and development." },
        { prompt: "A country short of foreign currency for imports would first approach the", options: ["IMF", "OPEC", "WTO", "AfDB"], correctIndex: 0, explanation: "The IMF addresses balance-of-payments needs." },
        { prompt: "The WTO is NOT", options: ["a rules-based trade body", "a free-trade agreement that abolishes all barriers", "a successor to GATT", "a dispute-settlement forum"], correctIndex: 1, explanation: "The WTO ensures non-discriminatory trade, not zero barriers." },
        { prompt: "Which pair are both about development finance?", options: ["World Bank and AfDB", "OPEC and WTO", "IMF and OPEC", "WTO and UNCTAD"], correctIndex: 0, explanation: "The World Bank and AfDB fund development." },
        { prompt: "OPEC members own", options: ["no oil reserves", "most of the world's known oil reserves", "all the world's gold", "all farmland"], correctIndex: 1, explanation: "OPEC controls a large share of oil reserves." },
        { prompt: "Liberia can gain from these organisations through", options: ["loans, advice and fairer trade access", "higher tariffs only", "banning imports", "leaving world trade"], correctIndex: 0, explanation: "They provide finance, advice and trade support." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish the roles of the IMF and the World Bank (IBRD).", answerKey: "The IMF, founded in 1945, promotes trade through financial cooperation, provides short-term loans to members unable to meet budgetary/payment needs and acts as a lender of last resort, often requiring reforms. The World Bank (IBRD) offers low-interest loans for long-term development (infrastructure such as roads and power) to developing countries and provides advice and information. Award 4-5 marks each.", marks: 10 },
        { type: "MULTIPLE_CHOICE", prompt: "OPEC is best described as", options: ["a development bank", "a cartel of oil-exporting countries that restricts output to keep prices high", "a UN trade commission", "a central bank"], correctIndex: 1, answerKey: "OPEC members act like a cartel, holding down output to keep prices high. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State the roles of the WTO and UNCTAD.", answerKey: "The WTO (1995, replacing GATT) is the leading institution for reducing trade barriers and opening markets, with a binding dispute-resolution process ensuring non-discriminatory trade. UNCTAD is the UN body that promotes trade as a tool for the development of developing countries and helps them take part in world trade on fairer terms. Award 3 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Explain three ways a developing country such as Liberia can benefit from international economic organisations.", answerKey: "Any three of: loans and finance from the IMF (short-term/payments), World Bank/IFC and AfDB (development projects); advice and capacity building on policy and institutions; fairer access to world trade through the WTO and UNCTAD; regional cooperation and investment through African institutions. Award 2 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Describe the major international economic organisations (IMF, World Bank group, WTO, OPEC, UNCTAD and the regional development banks) and discuss how Liberia can benefit from them.", answerKey: "Award marks for: IMF (short-term loans, stability, lender of last resort), 5; World Bank/IBRD and IFC (development loans, private investment), 5; WTO (reduce barriers, dispute settlement), 4; OPEC (oil cartel, output and price), 4; UNCTAD (trade for development), 3; regional banks AfDB/ADB and ECA, 4; how Liberia benefits (finance, advice, trade access, regional cooperation), 5.", marks: 30 },
      ],
    },
  ],
};
