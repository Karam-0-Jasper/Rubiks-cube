import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 10,
// Semester Two, Period IV: The Theory of Consumer Behaviour. CONTENTS:
// (1) The concept of utility — total and marginal utility, utility
// maximization, the law of diminishing utility; (2) the relationship between
// total and marginal utility; (3) application of marginal utility theory;
// (4) indifference curve and marginal rate of substitution; (5) characteristics
// of the indifference curve; (6) the concept of consumer surplus. Items 1 and 2
// are taught together (total and marginal utility are one schedule), and items
// 4 and 5 together (the curve and its characteristics), giving four sourced
// topics.
export const economicsG10P4: PeriodContent = {
  grade: 10,
  number: 4,
  title: "The Theory of Consumer Behaviour",
  summary:
    "Period IV of the MoE Grade 10 Economics syllabus. Learners study how consumers make choices to satisfy their wants: total and marginal utility and the law of diminishing marginal utility, how a rational consumer maximizes utility, the indifference curve and marginal rate of substitution, and the concept of consumer surplus.",
  topics: [
    // source: OpenStax — Principles of Economics 3e / Microeconomics 3e, 6.1 Consumption Choices (utility, total and marginal utility, law of diminishing marginal utility) (https://openstax.org/books/principles-economics-3e/pages/6-1-consumption-choices)
    {
      slug: "total-and-marginal-utility",
      title: "Utility: Total and Marginal Utility",
      objective:
        "By the end of the topic, learners should be able to define utility, total utility and marginal utility, describe their relationship, and state the law of diminishing marginal utility.",
      estimatedMinutes: 130,
      notes: `## Utility

**Utility** — a person's level of **satisfaction or happiness** with their choices (the satisfaction from consuming goods and services).
- Utility is measured in imaginary units called **utils**, used only to compare and rank satisfaction.

**Total utility** — the **total satisfaction** a consumer gets from consuming a given quantity of a good.

**Marginal utility** — the **additional utility** from consuming **one more unit**; the change in total utility divided by the change in quantity.

## A utility schedule

Example (satisfaction from T-shirts, in utils):

| T-shirts | Total utility | Marginal utility |
| --- | --- | --- |
| 0 | 0 | — |
| 1 | 22 | 22 |
| 2 | 43 | 21 |
| 3 | 63 | 20 |
| 4 | 81 | 18 |
| 5 | 97 | 16 |

- Total utility **rises** as more shirts are consumed.
- Marginal utility (the extra from each shirt) **falls**: 22, 21, 20, 18, 16.

## The relationship between total and marginal utility

- Marginal utility is the **extra** added to total utility by one more unit — so **total utility is the running sum of the marginal utilities**.
- As long as marginal utility is **positive**, total utility keeps **rising**.
- When marginal utility is **zero**, total utility is at its **maximum**.
- If marginal utility became **negative** (an extra unit reduces satisfaction), total utility would **fall**.

## The law of diminishing marginal utility

**Law of diminishing marginal utility** — as a person consumes **more units** of a good, the marginal utility (extra satisfaction) from each additional unit **decreases**.
- The first cold drink on a hot day gives great satisfaction; the second less; the third less still.
- This is why demand curves slope downward — extra units are worth less, so buyers will pay less for them.

## Common errors

- **Confusing total with marginal utility.** Total is the whole satisfaction; marginal is the extra from one more unit.
- **Thinking total utility falls when marginal utility falls.** While marginal utility is still positive, total utility keeps rising — only more slowly.
- **Believing marginal utility can never be negative.** It can: past a point, extra units reduce satisfaction, so total utility falls.`,
      workedExample: `**Question:** A consumer's total utility from cups of tea is: 1 cup = 10 utils; 2 = 18; 3 = 24; 4 = 28; 5 = 28. (a) Find the marginal utility of each cup. (b) State when the law of diminishing marginal utility operates. (c) At which cup is total utility maximized?

**Solution**

*Step 1 — marginal utility (change in total utility per extra cup):*

| Cups | Total utility | Marginal utility |
| --- | --- | --- |
| 1 | 10 | 10 |
| 2 | 18 | 8 |
| 3 | 24 | 6 |
| 4 | 28 | 4 |
| 5 | 28 | 0 |

*Step 2 — diminishing marginal utility.* The marginal utilities are 10, 8, 6, 4, 0 — each cup adds **less** than the one before, so the **law of diminishing marginal utility operates from the 2nd cup onward**.

*Step 3 — total utility maximized.* Total utility rises to **28 at the 4th cup** and the 5th cup adds nothing (marginal utility = 0). So total utility is **maximized at the 4th (and 5th) cup**, where marginal utility reaches zero.

**Answer:** Marginal utilities are 10, 8, 6, 4, 0; diminishing marginal utility operates throughout (each cup adds less); total utility is maximized at the 4th cup, where marginal utility first reaches zero.`,
      quiz: [
        { prompt: "Utility is best defined as", options: ["the price of a good", "a person's satisfaction from consuming a good", "the quantity produced", "the cost of a good"], correctIndex: 1, explanation: "Utility is satisfaction or happiness from consumption." },
        { prompt: "Utility is measured in imaginary units called", options: ["dollars", "utils", "grams", "percent"], correctIndex: 1, explanation: "Utils are used to rank satisfaction." },
        { prompt: "Total utility is the", options: ["extra satisfaction from one more unit", "total satisfaction from a given quantity", "price paid", "cost of production"], correctIndex: 1, explanation: "Total utility is overall satisfaction." },
        { prompt: "Marginal utility is the", options: ["total satisfaction", "additional satisfaction from one more unit", "average satisfaction", "money spent"], correctIndex: 1, explanation: "Marginal utility is the extra from one more unit." },
        { prompt: "Total utility is the running sum of", options: ["prices", "marginal utilities", "costs", "quantities"], correctIndex: 1, explanation: "Adding marginal utilities gives total utility." },
        { prompt: "While marginal utility is positive, total utility is", options: ["falling", "rising", "constant", "zero"], correctIndex: 1, explanation: "Positive marginal utility keeps total utility rising." },
        { prompt: "When marginal utility is zero, total utility is", options: ["zero", "at its maximum", "falling", "negative"], correctIndex: 1, explanation: "Total utility peaks where marginal utility is zero." },
        { prompt: "If marginal utility is negative, total utility", options: ["rises", "falls", "stays the same", "is zero"], correctIndex: 1, explanation: "A negative marginal utility reduces total utility." },
        { prompt: "The law of diminishing marginal utility says that extra units give", options: ["more satisfaction each", "less satisfaction each", "the same satisfaction", "no satisfaction ever"], correctIndex: 1, explanation: "Each extra unit adds less satisfaction." },
        { prompt: "The first cold drink on a hot day gives more satisfaction than the third because of", options: ["rising marginal utility", "diminishing marginal utility", "zero total utility", "higher price"], correctIndex: 1, explanation: "Marginal utility diminishes with more units." },
        { prompt: "Diminishing marginal utility helps explain why the demand curve", options: ["slopes upward", "slopes downward", "is vertical", "is flat"], correctIndex: 1, explanation: "Extra units are worth less, so buyers pay less." },
        { prompt: "In the T-shirt schedule, the marginal utility of the 3rd shirt (total 43 to 63) is", options: ["43", "20", "63", "18"], correctIndex: 1, explanation: "63 minus 43 = 20 utils." },
        { prompt: "Which falls as consumption rises under the law?", options: ["Total utility", "Marginal utility", "Price", "Quantity"], correctIndex: 1, explanation: "Marginal utility falls with more units." },
        { prompt: "Total utility of 3 shirts that give marginal utilities 22, 21, 20 is", options: ["20", "42", "63", "22"], correctIndex: 2, explanation: "22 + 21 + 20 = 63 utils." },
        { prompt: "Marginal utility equals the change in total utility divided by", options: ["price", "the change in quantity", "income", "cost"], correctIndex: 1, explanation: "MU = change in total utility / change in quantity." },
        { prompt: "If the 5th unit gives 0 marginal utility, total utility from 5 units compared with 4 units is", options: ["higher", "the same", "lower", "zero"], correctIndex: 1, explanation: "Adding 0 leaves total utility unchanged." },
        { prompt: "Satisfaction from consuming goods is called", options: ["cost", "utility", "revenue", "supply"], correctIndex: 1, explanation: "Utility is consumption satisfaction." },
        { prompt: "A consumer keeps gaining total satisfaction as long as marginal utility is", options: ["negative", "zero", "positive", "constant at zero"], correctIndex: 2, explanation: "Positive marginal utility adds to total utility." },
        { prompt: "Which statement is TRUE?", options: ["Total and marginal utility are the same", "Marginal utility can be negative", "Total utility always falls", "Utility is measured in dollars"], correctIndex: 1, explanation: "Past a point, marginal utility turns negative." },
        { prompt: "The point where total utility stops rising is where marginal utility is", options: ["highest", "zero", "negative from the start", "constant"], correctIndex: 1, explanation: "Total utility peaks at MU = 0." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define utility, total utility and marginal utility.", answerKey: "Utility is the satisfaction or happiness a consumer gets from consuming goods/services (measured in utils). Total utility is the total satisfaction from a given quantity of a good. Marginal utility is the additional satisfaction from consuming one more unit (change in total utility divided by change in quantity). Award 3 per definition, 1 for the utils point.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Explain the relationship between total and marginal utility.", answerKey: "Marginal utility is the extra satisfaction added by one more unit, so total utility is the running sum of the marginal utilities. While marginal utility is positive, total utility rises; when marginal utility is zero, total utility is at its maximum; if marginal utility becomes negative, total utility falls. Award marks for the summing relationship and the three cases.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "When total utility is at its maximum, marginal utility is", options: ["at its highest", "zero", "negative", "equal to total utility"], correctIndex: 1, answerKey: "Total utility peaks where marginal utility reaches zero. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State the law of diminishing marginal utility and give an everyday example.", answerKey: "As a person consumes more units of a good, the marginal utility from each additional unit decreases. Example: the first glass of water when thirsty gives great satisfaction, the second less, the third less still. Award 4 for the law, 2 for a valid example.", marks: 6 },
        { type: "ESSAY", prompt: "Using a utility schedule, explain total utility, marginal utility, the law of diminishing marginal utility, and how they relate to each other.", answerKey: "Award marks for: definitions of utility, total and marginal utility, 8; a schedule showing total utility rising and marginal utility falling, 6; the law of diminishing marginal utility stated and explained, 6; the relationship (total = sum of marginal; total peaks at MU = 0; falls if MU negative), 6; link to the downward-sloping demand curve, 4. A script without a schedule should not exceed 18.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e / Microeconomics 3e, 6.1 Consumption Choices (utility maximization rule, marginal utility per dollar) (https://openstax.org/books/principles-economics-3e/pages/6-1-consumption-choices)
    {
      slug: "marginal-utility-theory-and-consumer-equilibrium",
      title: "Applying Marginal Utility Theory: Consumer Equilibrium",
      objective:
        "By the end of the topic, learners should be able to apply marginal utility theory to explain how a rational consumer allocates a limited income to maximize total utility.",
      estimatedMinutes: 130,
      notes: `## The consumer's problem

- A consumer has a **limited income** and faces goods with **prices**.
- The aim is to spend that income to get the **greatest possible total utility** (satisfaction) — this is **utility maximization**.

## Marginal utility per dollar

- What matters is not marginal utility alone but **marginal utility per unit of money spent**: marginal utility divided by price (MU / P).
- A rational consumer always buys next the item that gives the **greatest marginal utility per dollar**.

## The utility-maximizing (equilibrium) rule

A consumer maximizes utility when the **marginal utility per dollar is equal across all goods**, and the whole income is spent:

**MU of good 1 / Price of good 1 = MU of good 2 / Price of good 2**

- If MU/P is **higher** for one good, the consumer gains by buying **more** of it (and less of the other) until the ratios are equal.
- At that point no rearrangement of spending can raise total utility — the consumer is in **equilibrium**.

## Why the rule works

- Suppose good 1 gives 20 utils for 2 dollars (10 utils per dollar) and good 2 gives 12 utils for 1 dollar (12 utils per dollar).
- Good 2 gives more satisfaction per dollar, so shifting money toward good 2 raises total utility.
- As more of good 2 is bought its marginal utility falls (diminishing marginal utility), and as less of good 1 is bought its marginal utility rises, until MU/P is equal for both.

## Link to demand

- Because a consumer only buys extra units while they are worth their price, and marginal utility falls with quantity, buyers will purchase more only at a **lower price** — which is why the demand curve slopes **downward**.

## Common errors

- **Comparing marginal utilities without dividing by price.** A good with high marginal utility may still be poor value if it is very expensive; compare MU **per dollar**.
- **Stopping before the whole income is spent.** Equilibrium also requires spending all the income.
- **Thinking equal marginal utility (not per dollar) is the rule.** The rule equalises marginal utility **per dollar**, not raw marginal utility, unless prices are equal.`,
      workedExample: `**Question:** A consumer has 12 dollars. Good X costs 2 dollars, good Y costs 3 dollars. The marginal utility per dollar (MU/P) that a rational consumer targets is equal across goods. If at the current choice MU of X = 16 utils and MU of Y = 30 utils, decide whether the consumer should buy more X or more Y, and state the equilibrium condition.

**Solution**

*Step 1 — find marginal utility per dollar for each good.*
- Good X: MU/P = 16 / 2 = **8 utils per dollar**.
- Good Y: MU/P = 30 / 3 = **10 utils per dollar**.

*Step 2 — compare.* Good Y gives **more** satisfaction per dollar (10 > 8). So the consumer should buy **more Y and less X**.

*Step 3 — what happens as they do.* Buying more Y lowers Y's marginal utility (diminishing marginal utility); buying less X raises X's marginal utility. The consumer keeps shifting until:

**MU of X / Price of X = MU of Y / Price of Y**, with all 12 dollars spent.

At that point utility is maximized and the consumer is in equilibrium.

**Answer:** Since MU/P is higher for Y (10) than X (8), the consumer should buy more Y until MU of X / 2 = MU of Y / 3 and the income is fully spent — the utility-maximizing (equilibrium) condition.`,
      quiz: [
        { prompt: "Utility maximization means spending a limited income to get the", options: ["lowest cost", "greatest total utility", "most units", "highest price"], correctIndex: 1, explanation: "The aim is maximum total satisfaction." },
        { prompt: "A rational consumer compares goods by their", options: ["marginal utility alone", "marginal utility per dollar", "price alone", "total cost"], correctIndex: 1, explanation: "MU per dollar (MU/P) guides the choice." },
        { prompt: "The utility-maximizing rule equalises", options: ["prices", "marginal utility per dollar across goods", "total utility", "quantities"], correctIndex: 1, explanation: "MU/P is equal across all goods at equilibrium." },
        { prompt: "If MU/P is higher for good A than good B, the consumer should buy", options: ["more of B", "more of A", "neither", "equal amounts"], correctIndex: 1, explanation: "Shift spending to the higher MU/P good — A." },
        { prompt: "Marginal utility per dollar is calculated as", options: ["price minus MU", "MU divided by price", "MU times price", "price divided by MU"], correctIndex: 1, explanation: "MU/P = marginal utility divided by price." },
        { prompt: "Good X: MU 16, price 2. Its MU per dollar is", options: ["32", "8", "18", "14"], correctIndex: 1, explanation: "16 / 2 = 8 utils per dollar." },
        { prompt: "At consumer equilibrium, rearranging spending", options: ["always raises utility", "cannot raise total utility", "lowers income", "raises price"], correctIndex: 1, explanation: "No change can improve utility at equilibrium." },
        { prompt: "Equilibrium also requires that the consumer", options: ["saves all income", "spends the whole income", "buys only one good", "ignores prices"], correctIndex: 1, explanation: "All income must be spent." },
        { prompt: "As a consumer buys more of a good, its marginal utility", options: ["rises", "falls", "stays constant", "becomes infinite"], correctIndex: 1, explanation: "Diminishing marginal utility lowers it." },
        { prompt: "Comparing marginal utilities without dividing by price ignores", options: ["satisfaction", "how much each good costs", "quantity", "income"], correctIndex: 1, explanation: "Value per dollar depends on price too." },
        { prompt: "Good Y: MU 30, price 3. Its MU per dollar is", options: ["90", "10", "27", "33"], correctIndex: 1, explanation: "30 / 3 = 10 utils per dollar." },
        { prompt: "If good Y gives more utility per dollar than X, shifting money to Y", options: ["lowers total utility", "raises total utility", "has no effect", "raises price"], correctIndex: 1, explanation: "Buying more of the better-value good raises utility." },
        { prompt: "Diminishing marginal utility helps the equilibrium form because MU of the good bought more", options: ["rises", "falls toward balance", "stays fixed", "is ignored"], correctIndex: 1, explanation: "Falling MU brings MU/P back into balance." },
        { prompt: "The equilibrium condition for two goods is", options: ["MUx = MUy", "MUx / Px = MUy / Py", "Px = Py", "MUx times Px = MUy times Py"], correctIndex: 1, explanation: "Equalise marginal utility per dollar." },
        { prompt: "Marginal utility theory helps explain the", options: ["upward supply curve", "downward-sloping demand curve", "price ceiling", "budget deficit"], correctIndex: 1, explanation: "Falling MU means buyers pay less for more — demand slopes down." },
        { prompt: "A good with high marginal utility but a very high price may be", options: ["always the best buy", "poor value per dollar", "free", "in equilibrium"], correctIndex: 1, explanation: "High price lowers its MU per dollar." },
        { prompt: "The rule equalises marginal utility per dollar rather than raw marginal utility because goods have different", options: ["colours", "prices", "sizes", "sellers"], correctIndex: 1, explanation: "Different prices mean value must be compared per dollar." },
        { prompt: "If MU/P is equal for all goods and income is spent, the consumer is", options: ["losing utility", "at maximum utility (equilibrium)", "wasting money", "under-spending"], correctIndex: 1, explanation: "That is consumer equilibrium." },
        { prompt: "When prices of two goods are equal, the rule reduces to equalising", options: ["prices", "raw marginal utilities", "incomes", "total utilities"], correctIndex: 1, explanation: "With equal prices, MU/P equal means MU equal." },
        { prompt: "Buying the item with the greatest marginal utility per dollar next is the strategy of a", options: ["careless spender", "rational, utility-maximizing consumer", "producer", "monopolist"], correctIndex: 1, explanation: "It is the utility-maximizing rule." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the utility-maximizing rule for a consumer buying two goods.", answerKey: "A consumer maximizes utility when the marginal utility per dollar is equal across all goods and the whole income is spent: MU of good 1 / price of good 1 = MU of good 2 / price of good 2. Award 5 for the equal-MU-per-dollar condition, 3 for the spend-all-income condition.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Good A gives 8 utils per dollar and good B gives 12 utils per dollar. To raise utility the consumer should buy", options: ["more A, less B", "more B, less A", "equal amounts", "neither"], correctIndex: 1, answerKey: "Shift spending toward the higher MU per dollar good, B. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why a consumer should compare marginal utility per dollar rather than marginal utility alone.", answerKey: "Goods have different prices, so a good with high marginal utility may be poor value if it is expensive. Dividing marginal utility by price gives the satisfaction per unit of money, allowing a fair comparison; the consumer buys where MU per dollar is greatest. Award marks for the price point and the per-dollar comparison.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "A consumer finds MU of X = 20 (price 2 dollars) and MU of Y = 15 (price 1 dollar). Which good should they buy more of, and why?", answerKey: "MU/P for X = 20/2 = 10; for Y = 15/1 = 15. Y gives more utility per dollar (15 > 10), so the consumer should buy more Y (and less X) until the ratios are equal. Award 3 for the correct calculation, 3 for the conclusion.", marks: 6 },
        { type: "ESSAY", prompt: "Explain how a rational consumer with a limited income allocates spending to maximize total utility, and how marginal utility theory explains the downward-sloping demand curve.", answerKey: "Award marks for: the consumer's aim of maximizing total utility from a limited income, 5; marginal utility per dollar (MU/P) as the basis of choice, 6; the equilibrium rule equalising MU/P across goods with all income spent, 8; how diminishing marginal utility drives the adjustment to equilibrium, 6; the link to the downward-sloping demand curve, 5. A script that compares raw marginal utilities without price should not exceed 15.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Microeconomics 3e / Principles of Economics 3e, Appendix B Indifference Curves (https://openstax.org/books/principles-economics-3e/pages/b-indifference-curves)
    {
      slug: "indifference-curves-and-marginal-rate-of-substitution",
      title: "Indifference Curves and the Marginal Rate of Substitution",
      objective:
        "By the end of the topic, learners should be able to define an indifference curve, explain the marginal rate of substitution, describe the characteristics of indifference curves, and locate the consumer optimum with a budget line.",
      estimatedMinutes: 130,
      notes: `## What an indifference curve is

**Indifference curve** — a line showing the **combinations of two goods that give a consumer the same total utility (satisfaction)**.
- The consumer is **indifferent** between all points on one curve — each gives equal satisfaction.
- No numbers for utility are needed; the curve only ranks combinations as equally good.

## Why it slopes downward

- To keep utility the **same**, having **less** of one good must be balanced by having **more** of the other.
- So an indifference curve slopes **downward** from left to right.

## The marginal rate of substitution (MRS)

**Marginal rate of substitution** — the rate at which a consumer is willing to **trade one good for another** while keeping utility the same; it is the **slope** along the indifference curve.
- Indifference curves are **convex** (bowed toward the origin): steeper on the left, flatter on the right.
- This is because of **diminishing marginal utility**: as a consumer gets more of one good, they will give up less and less of the other to gain still more of it, so the MRS **falls** moving down the curve.

## Characteristics of indifference curves

1. They slope **downward** (more of one good, less of the other for equal utility).
2. They are **convex** to the origin (a diminishing marginal rate of substitution).
3. A **higher** curve represents **higher utility** — an indifference **map** is a whole set of curves.
4. Indifference curves **never cross** — crossing would mean one combination gives two different utility levels, which is impossible.

## The budget line and consumer optimum

**Budget line (constraint)** — all the combinations of the two goods the consumer can just afford, given income and prices.

**Consumer optimum** — the consumer maximizes satisfaction where the **budget line is tangent** (just touches) the **highest attainable indifference curve** at a single point.
- At that tangency the slope of the budget line equals the slope of the indifference curve (the MRS) — the consumer cannot reach a higher curve with the same income.

## Common errors

- **Thinking points on one curve give different satisfaction.** Every point on a single curve gives the **same** utility.
- **Letting indifference curves cross.** They never intersect.
- **Confusing the budget line with an indifference curve.** The budget line shows what is **affordable**; the indifference curve shows what is **equally satisfying**.`,
      workedExample: `**Question:** A consumer is indifferent between these combinations of rice and beans: (8 rice, 1 beans), (5 rice, 2 beans), (3 rice, 3 beans), (2 rice, 4 beans). (a) What does this list represent? (b) Find the marginal rate of substitution of beans for rice between the first two points and the last two. (c) What does the changing MRS show?

**Solution**

(a) Since all four combinations give the consumer **equal satisfaction**, the list is points on a single **indifference curve**.

(b) MRS = rice given up per extra unit of beans (keeping utility equal):
- From (8,1) to (5,2): rice falls by 3 for 1 extra bean, so MRS = **3 rice per bean**.
- From (3,3) to (2,4): rice falls by 1 for 1 extra bean, so MRS = **1 rice per bean**.

(c) The MRS falls from 3 to 1 as the consumer gets more beans. This **diminishing MRS** shows the curve is **convex to the origin**: as beans become more plentiful, the consumer will give up less rice to get another bean — because of diminishing marginal utility.

**Answer:** The list is an indifference curve; the MRS of beans for rice falls from 3 to 1; the falling MRS shows the convex shape and reflects diminishing marginal utility.`,
      quiz: [
        { prompt: "An indifference curve shows combinations of two goods that give", options: ["different utility", "the same total utility", "the lowest cost", "maximum profit"], correctIndex: 1, explanation: "All points give equal satisfaction." },
        { prompt: "A consumer on one indifference curve is", options: ["always better off at the right end", "indifferent between all points on it", "worse off at the top", "unable to choose"], correctIndex: 1, explanation: "Every point gives equal utility." },
        { prompt: "Indifference curves slope", options: ["upward", "downward", "horizontally", "vertically"], correctIndex: 1, explanation: "Less of one good must be balanced by more of the other." },
        { prompt: "The marginal rate of substitution is the rate at which a consumer trades", options: ["money for goods", "one good for another keeping utility equal", "time for money", "goods for services only"], correctIndex: 1, explanation: "MRS is the trade-off keeping utility constant." },
        { prompt: "The MRS is measured by the", options: ["height of the curve", "slope along the indifference curve", "area under the curve", "budget line only"], correctIndex: 1, explanation: "MRS is the slope of the indifference curve." },
        { prompt: "Indifference curves are convex to the origin because of", options: ["rising marginal utility", "diminishing marginal utility (a falling MRS)", "constant prices", "fixed income"], correctIndex: 1, explanation: "Diminishing marginal utility gives a diminishing MRS." },
        { prompt: "A higher indifference curve represents", options: ["lower utility", "higher utility", "the same utility", "no utility"], correctIndex: 1, explanation: "Higher curves = more satisfaction." },
        { prompt: "Indifference curves", options: ["always cross", "never cross", "cross only once", "cross at the origin"], correctIndex: 1, explanation: "Crossing would give a contradiction, so they never intersect." },
        { prompt: "A whole set of indifference curves is called an", options: ["indifference map", "budget map", "supply map", "demand map"], correctIndex: 0, explanation: "The set of curves is the indifference map." },
        { prompt: "The budget line shows combinations the consumer can", options: ["equally enjoy", "just afford", "never buy", "produce"], correctIndex: 1, explanation: "It shows what is affordable given income and prices." },
        { prompt: "The consumer optimum is where the budget line is", options: ["above all curves", "tangent to the highest attainable indifference curve", "crossing two curves", "horizontal"], correctIndex: 1, explanation: "Tangency gives the highest attainable utility." },
        { prompt: "At the consumer optimum, the slope of the budget line equals the", options: ["price of one good", "marginal rate of substitution", "total utility", "income"], correctIndex: 1, explanation: "Budget-line slope equals the MRS at tangency." },
        { prompt: "Moving down an indifference curve, the MRS", options: ["rises", "falls", "stays constant", "is negative infinity"], correctIndex: 1, explanation: "A convex curve has a diminishing MRS." },
        { prompt: "Which distinguishes the budget line from an indifference curve?", options: ["Both show affordability", "Budget line shows what is affordable; indifference curve shows equal utility", "Both show equal utility", "Neither uses two goods"], correctIndex: 1, explanation: "Affordability versus equal satisfaction." },
        { prompt: "If two indifference curves crossed, one combination would give", options: ["one utility level", "two different utility levels (a contradiction)", "no utility", "maximum utility"], correctIndex: 1, explanation: "That contradiction is why they cannot cross." },
        { prompt: "As a consumer gets more of good X, they will give up less of good Y for more X, so the MRS", options: ["increases", "decreases", "stays fixed", "becomes zero immediately"], correctIndex: 1, explanation: "Diminishing MRS as X becomes plentiful." },
        { prompt: "The indifference curve needs", options: ["exact utility numbers", "only a ranking of equally-good combinations", "prices only", "income only"], correctIndex: 1, explanation: "It ranks combinations without cardinal numbers." },
        { prompt: "A consumer cannot reach a higher indifference curve because of the", options: ["MRS", "budget constraint (limited income)", "slope", "map"], correctIndex: 1, explanation: "Limited income caps the attainable curve." },
        { prompt: "The convex shape means the curve is", options: ["straight", "bowed toward the origin", "bowed away from the origin", "circular"], correctIndex: 1, explanation: "Convex = bowed toward the origin." },
        { prompt: "Which is a characteristic of indifference curves?", options: ["They slope upward", "They are concave and cross", "They slope downward, are convex, and never cross", "They are vertical"], correctIndex: 2, explanation: "Downward-sloping, convex, non-crossing, higher = more utility." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define an indifference curve and the marginal rate of substitution.", answerKey: "An indifference curve shows the combinations of two goods that give a consumer the same total utility (the consumer is indifferent among them). The marginal rate of substitution is the rate at which the consumer is willing to trade one good for another while keeping utility constant — the slope along the indifference curve. Award 5 per definition.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "State three characteristics of indifference curves.", answerKey: "Any three: they slope downward; they are convex to the origin (diminishing MRS); higher curves represent higher utility; they never cross. Award 2 per correct characteristic, plus 2 for a brief reason on one of them.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "The consumer reaches the optimum where the budget line is", options: ["above every indifference curve", "tangent to the highest attainable indifference curve", "crossing two indifference curves", "parallel to the axis"], correctIndex: 1, answerKey: "Tangency of the budget line with the highest attainable indifference curve gives maximum utility. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why indifference curves are convex to the origin.", answerKey: "Because of diminishing marginal utility, as a consumer gets more of one good they are willing to give up less and less of the other to gain still more of it, so the marginal rate of substitution falls moving down the curve. A diminishing MRS makes the curve bow toward the origin (convex). Award marks for the diminishing MRS and the convex shape.", marks: 6 },
        { type: "ESSAY", prompt: "Explain indifference curve analysis: the meaning of an indifference curve, the marginal rate of substitution, the characteristics of the curves, and how the consumer optimum is found with a budget line.", answerKey: "Award marks for: definition of the indifference curve (equal utility), 6; the MRS as the slope/trade-off, 6; the characteristics (downward-sloping, convex, higher = more utility, non-crossing), 8; the budget line and tangency point as the consumer optimum, 6; a diagram or clear description, 4. A script omitting the budget line/optimum should not exceed 18.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e / Microeconomics 3e, 3.5 Demand, Supply, and Efficiency (consumer surplus) (https://openstax.org/books/principles-economics-3e/pages/3-5-demand-supply-and-efficiency)
    {
      slug: "consumer-surplus",
      title: "The Concept of Consumer Surplus",
      objective:
        "By the end of the topic, learners should be able to define consumer surplus, explain how it arises from the difference between willingness to pay and price, and relate it to producer surplus and total surplus.",
      estimatedMinutes: 110,
      notes: `## Consumer surplus

**Consumer surplus** — the amount consumers **would have been willing to pay** for a good, **minus the amount they actually paid**.
- It is the **extra benefit** a buyer gets when the market price is **below** the maximum they were willing to pay.
- On a diagram it is the area **above the equilibrium price and below the demand curve**.

*Why it exists:* because of the law of diminishing marginal utility, buyers would pay a high price for the first units but a lower price for later units. Everyone pays the same market price, so buyers who valued the good more than that price gain a surplus.

## An example (tablet computers)

- Suppose the equilibrium price of a tablet is **80 dollars** and 28 million are sold.
- Some buyers would have paid **90 dollars** (they still buy 20 million at that willingness to pay) but only pay 80 — they gain **10 dollars each** of consumer surplus.
- The total consumer surplus is the whole area between the demand curve and the 80-dollar price line.

## Producer surplus and total surplus

**Producer surplus** — the price the producer actually receives **minus the lowest price they would have been willing to accept**. It is the area **below the price and above the supply curve**.
- E.g. a firm willing to supply at 45 dollars but receiving 80 dollars gains 35 dollars of producer surplus.

**Social (total) surplus** — the **sum of consumer surplus and producer surplus** (also called economic surplus).
- Total surplus is at its **maximum at the market equilibrium** — this shows the efficiency of the equilibrium.

## Deadweight loss

**Deadweight loss** — the loss of total surplus when the market produces an **inefficient quantity** (for example, under a binding price control that pushes output away from equilibrium).

## Common errors

- **Thinking consumer surplus is what you pay.** It is the gap between what you *would have paid* and what you *did pay*.
- **Confusing consumer and producer surplus.** Consumer surplus is above the price (buyers' gain); producer surplus is below the price (sellers' gain).
- **Ignoring diminishing marginal utility.** It is why early units are valued above the price, creating the surplus.`,
      workedExample: `**Question:** A buyer would have been willing to pay 90 dollars for a tablet but the market price is 80 dollars, so she buys it. A second buyer would have paid 100 dollars and also pays 80. (a) Find each buyer's consumer surplus. (b) Find the total consumer surplus for the two. (c) A seller willing to accept 45 dollars sells at 80 — what is that producer's surplus?

**Solution**

*Step 1 — consumer surplus = willingness to pay minus price paid.*
- Buyer 1: 90 minus 80 = **10 dollars**.
- Buyer 2: 100 minus 80 = **20 dollars**.

*Step 2 — total consumer surplus.* 10 + 20 = **30 dollars** of consumer surplus for the two buyers.

*Step 3 — producer surplus = price received minus lowest acceptable price.* 80 minus 45 = **35 dollars** of producer surplus.

**Answer:** Buyer 1 gains 10 dollars and buyer 2 gains 20 dollars, a total consumer surplus of 30 dollars; the seller gains a producer surplus of 35 dollars. Each surplus is the gap between value/willingness and the actual price.`,
      quiz: [
        { prompt: "Consumer surplus is", options: ["the price paid", "willingness to pay minus the price actually paid", "the cost of production", "the seller's profit"], correctIndex: 1, explanation: "It is the gap between value and price paid." },
        { prompt: "Consumer surplus arises when the price is", options: ["above willingness to pay", "below the maximum the buyer would pay", "equal to cost", "zero"], correctIndex: 1, explanation: "Buyers who value the good above the price gain surplus." },
        { prompt: "On a diagram, consumer surplus is the area", options: ["below the price and above supply", "above the price and below the demand curve", "under the supply curve", "outside the axes"], correctIndex: 1, explanation: "It lies between the demand curve and the price line." },
        { prompt: "Consumer surplus exists partly because of", options: ["rising marginal utility", "diminishing marginal utility", "fixed prices", "producer surplus"], correctIndex: 1, explanation: "Early units are valued above the price." },
        { prompt: "A buyer willing to pay 90 who pays 80 gains a consumer surplus of", options: ["170", "10", "80", "90"], correctIndex: 1, explanation: "90 minus 80 = 10." },
        { prompt: "Producer surplus is the price received minus", options: ["the buyer's willingness to pay", "the lowest price the producer would accept", "the tax", "consumer surplus"], correctIndex: 1, explanation: "It is the gap between price and minimum acceptable price." },
        { prompt: "On a diagram, producer surplus is the area", options: ["above the price and below demand", "below the price and above the supply curve", "under the demand curve", "at the origin"], correctIndex: 1, explanation: "Producer surplus lies between the price and the supply curve." },
        { prompt: "Social (total) surplus is", options: ["consumer surplus only", "producer surplus only", "the sum of consumer and producer surplus", "the price"], correctIndex: 2, explanation: "Total surplus = consumer + producer surplus." },
        { prompt: "Total surplus is at a maximum at the", options: ["highest price", "market equilibrium", "lowest price", "price ceiling"], correctIndex: 1, explanation: "Equilibrium maximizes total surplus — it is efficient." },
        { prompt: "A seller accepting a minimum of 45 who receives 80 gains a producer surplus of", options: ["125", "35", "45", "80"], correctIndex: 1, explanation: "80 minus 45 = 35." },
        { prompt: "Deadweight loss is the loss of total surplus when output is", options: ["at equilibrium", "at an inefficient quantity", "maximized", "zero cost"], correctIndex: 1, explanation: "Inefficient output creates deadweight loss." },
        { prompt: "Consumer surplus is a gain to", options: ["sellers", "buyers", "the government", "importers"], correctIndex: 1, explanation: "Buyers gain consumer surplus." },
        { prompt: "If a buyer's willingness to pay exactly equals the price, their consumer surplus is", options: ["large", "zero", "negative", "unknown"], correctIndex: 1, explanation: "No gap means no surplus." },
        { prompt: "Two buyers with surpluses of 10 and 20 give a total consumer surplus of", options: ["10", "20", "30", "200"], correctIndex: 2, explanation: "10 + 20 = 30." },
        { prompt: "The efficiency of market equilibrium is shown by total surplus being", options: ["zero", "maximized there", "negative", "unrelated to equilibrium"], correctIndex: 1, explanation: "Total surplus peaks at equilibrium." },
        { prompt: "Producer surplus is a gain to", options: ["buyers", "sellers", "the government", "consumers"], correctIndex: 1, explanation: "Sellers gain producer surplus." },
        { prompt: "Consumer surplus is measured relative to the", options: ["supply curve", "demand curve and the price", "cost curve", "tax rate"], correctIndex: 1, explanation: "It is the area between the demand curve and price." },
        { prompt: "A binding price control that moves output from equilibrium tends to create", options: ["more total surplus", "deadweight loss", "no change", "higher producer surplus only"], correctIndex: 1, explanation: "It causes deadweight loss by producing an inefficient quantity." },
        { prompt: "Which best defines consumer surplus in words?", options: ["What you pay", "The extra benefit from paying less than you were willing to", "The seller's cost", "The market price"], correctIndex: 1, explanation: "It is the buyer's extra benefit over price paid." },
        { prompt: "Consumer surplus plus producer surplus equals", options: ["deadweight loss", "total (social) surplus", "the price", "the tax"], correctIndex: 1, explanation: "Their sum is total surplus." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define consumer surplus and explain how it arises.", answerKey: "Consumer surplus is the amount consumers would have been willing to pay for a good minus the amount they actually paid. It arises because, owing to diminishing marginal utility, buyers value early units above the market price; since all buyers pay the same market price, those who valued the good more than the price gain the difference as surplus. Award 5 for the definition, 3 for how it arises.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "On a demand and supply diagram, consumer surplus is the area", options: ["below the price and above supply", "above the price and below the demand curve", "under the supply curve", "to the right of equilibrium"], correctIndex: 1, answerKey: "Consumer surplus is the area above the equilibrium price and below the demand curve. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A buyer willing to pay 120 dollars buys at a market price of 90 dollars. Calculate the consumer surplus and explain the answer.", answerKey: "Consumer surplus = willingness to pay minus price paid = 120 minus 90 = 30 dollars. It is the extra benefit the buyer gains because the price is below the maximum they would have paid. Award 3 for the correct 30 dollars, 3 for the explanation.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Distinguish consumer surplus from producer surplus.", answerKey: "Consumer surplus is willingness to pay minus price paid — the buyer's gain, the area above the price and below the demand curve. Producer surplus is the price received minus the lowest price the seller would accept — the seller's gain, the area below the price and above the supply curve. Together they form total surplus. Award 3 per surplus with its side of the diagram.", marks: 6 },
        { type: "ESSAY", prompt: "Explain consumer surplus and producer surplus, how they combine into total surplus, and why total surplus is greatest at the market equilibrium.", answerKey: "Award marks for: definition of consumer surplus with willingness to pay and the demand-curve area, 7; definition of producer surplus with the supply-curve area, 6; total (social) surplus as their sum, 5; the point that total surplus is maximized at equilibrium (efficiency), 7; deadweight loss when output is inefficient, 3; a diagram or worked figures, 2. A script that confuses the two surpluses should not exceed 15.", marks: 30 },
      ],
    },
  ],
};
