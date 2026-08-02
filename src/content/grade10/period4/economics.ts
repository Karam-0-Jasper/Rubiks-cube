import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 10,
// Semester Two, Period IV: The Theory of Consumer Behaviour.
export const economicsG10P4: PeriodContent = {
  grade: 10,
  number: 4,
  title: "The Theory of Consumer Behaviour",
  summary:
    "Period IV of the MoE Grade 10 Economics syllabus. Learners study how consumers make choices to satisfy their wants: the meaning of utility, total and marginal utility, the law of diminishing marginal utility, and how a rational consumer reaches equilibrium by getting the most satisfaction from a limited income.",
  topics: [
    {
      slug: "utility-and-diminishing-marginal-utility",
      title: "Utility and the Law of Diminishing Marginal Utility",
      objective:
        "By the end of the topic, learners should be able to define utility, distinguish total from marginal utility, and state and explain the law of diminishing marginal utility with examples.",
      estimatedMinutes: 160,
      notes: `## Introduction

Why is the first cold drink on a hot day so wonderful, while the fourth barely tempts you? Economists answer this with the idea of **utility** — the satisfaction we get from what we consume — and one of the most powerful rules in the whole subject: the **law of diminishing marginal utility**. This topic defines utility, separates **total utility** from **marginal utility**, and shows how the extra satisfaction from each new unit steadily falls — a pattern that quietly explains why we buy variety, why demand curves slope downward, and how much a shopper is willing to pay.

## What is consumer behaviour about?

**Consumer behaviour** studies how people decide **what to buy** with their limited income in order to get the most **satisfaction** from their wants. The key idea is **utility**.

## Utility

**Utility** is the **satisfaction or usefulness** a consumer gets from consuming a good or service. It is subjective — the same good may give different utility to different people, and it depends on how much of the good a person already has.

Two important measures:

- **Total utility (TU)** — the **total satisfaction** from consuming a given quantity of a good.
- **Marginal utility (MU)** — the **extra satisfaction** gained from consuming **one more unit** of the good.

$$\\text{marginal utility} = \\text{change in total utility from one more unit}$$

## The law of diminishing marginal utility

The **law of diminishing marginal utility** states:

> As a person consumes **more and more units** of a good, the **extra (marginal) satisfaction** from each additional unit **falls**.

The first unit gives the most satisfaction; each later unit gives a little less.

*Example — cups of water on a hot day:*

| Cup | Total utility | Marginal utility (extra) |
|---|---|---|
| 1st | 10 | 10 |
| 2nd | 18 | 8 |
| 3rd | 24 | 6 |
| 4th | 28 | 4 |
| 5th | 30 | 2 |
| 6th | 30 | 0 |

\`\`\`svg Marginal utility falls as more is consumed
<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of marginal utility decreasing with each extra unit">
  <line x1="40" y1="150" x2="285" y2="150" stroke="#4d7c0f" stroke-width="2"/>
  <line x1="40" y1="150" x2="40" y2="20" stroke="#4d7c0f" stroke-width="2"/>
  <g fill="#84cc16">
    <rect x="55" y="50" width="25" height="100"/><rect x="90" y="70" width="25" height="80"/><rect x="125" y="90" width="25" height="60"/><rect x="160" y="110" width="25" height="40"/><rect x="195" y="130" width="25" height="20"/><rect x="230" y="149" width="25" height="1"/>
  </g>
  <text x="160" y="172" font-size="11" text-anchor="middle" fill="#4d7c0f">units consumed →</text>
  <text x="16" y="90" font-size="11" fill="#4d7c0f" transform="rotate(-90 16,90)">marginal utility</text>
</svg>
\`\`\`

Notice: **total utility keeps rising** (or stays level) as long as marginal utility is positive, but it rises by **smaller and smaller amounts**. When marginal utility reaches **zero**, total utility is at its **maximum** (the consumer is fully satisfied — the point of **satiation**). If they keep consuming, marginal utility could become **negative** (too much water makes you feel ill).

## Why the law matters

Diminishing marginal utility explains a lot of economic behaviour — why people **buy a variety** of goods rather than only one, and why a consumer will pay less for extra units. It is the foundation for understanding how a consumer spreads a limited income across different goods, which is the next topic.

## Common errors and misconceptions

- **Confusing total utility with marginal utility** — **total** utility is the satisfaction from *all* units together; **marginal** utility is the extra satisfaction from *one more* unit (the *change* in total utility).
- **Thinking total utility falls whenever marginal utility falls** — while marginal utility is still **positive**, total utility keeps **rising** (just by smaller amounts); total utility only falls once marginal utility turns **negative**.
- **Believing total utility is greatest where marginal utility is greatest** — total utility is at its **maximum** where marginal utility reaches **zero** (satiation), not where it is highest.
- **Forgetting utility is subjective** — the same good gives different satisfaction to different people and depends on how much one already has; utility is not a fixed property of the good.`,
      workedExample: `**Task.** From the table below, (a) calculate the marginal utility of each mango, (b) state the law being illustrated, and (c) say at which mango total utility is maximised.

| Mango | Total utility |
|---|---|
| 1 | 12 |
| 2 | 20 |
| 3 | 25 |
| 4 | 27 |
| 5 | 27 |
| 6 | 25 |

**Part (a) — marginal utility (change in total utility)**

| Mango | Total utility | Marginal utility |
|---|---|---|
| 1 | 12 | 12 |
| 2 | 20 | 20 − 12 = **8** |
| 3 | 25 | 25 − 20 = **5** |
| 4 | 27 | 27 − 25 = **2** |
| 5 | 27 | 27 − 27 = **0** |
| 6 | 25 | 25 − 27 = **−2** |

**Part (b) — the law illustrated**
As more mangoes are eaten, the **marginal utility falls** (12, 8, 5, 2, 0, −2). This is the **law of diminishing marginal utility**: each extra unit gives less additional satisfaction.

**Part (c) — where total utility is maximised**
Total utility is highest at the **4th and 5th mango** (27), which is where **marginal utility is zero** (at the 5th). After that, marginal utility becomes **negative** and total utility falls. So the consumer is fully satisfied at the **5th mango** — eating a sixth actually reduces total satisfaction.

**Conclusion:** marginal utility is the change in total utility from one more unit; it falls as consumption rises (the law of diminishing marginal utility), and total utility is greatest at the point where marginal utility becomes zero.`,
      teachingTip:
        "Marginal utility = the CHANGE in total utility, and it is where learners slip. Drill 'MU is the difference between one total-utility row and the next'. The cups-of-water-on-a-hot-day example makes the law intuitive: the first cup is bliss, the fifth barely matters, a seventh makes you sick (negative MU). Stress that total utility is maximised exactly where MU hits zero — a classic exam point.",
      quiz: [
        {
          prompt: "Utility is the … a consumer gets from a good or service.",
          options: ["satisfaction", "price", "weight", "colour"],
          correctIndex: 0,
          explanation: "Utility means satisfaction or usefulness.",
        },
        {
          prompt: "Total utility is the…",
          options: ["total satisfaction from all units consumed", "satisfaction from one more unit", "price of the good", "number of goods"],
          correctIndex: 0,
          explanation: "TU is the overall satisfaction from a quantity.",
        },
        {
          prompt: "Marginal utility is the…",
          options: ["extra satisfaction from one more unit", "total satisfaction", "average price", "first unit only"],
          correctIndex: 0,
          explanation: "MU is the extra utility from one additional unit.",
        },
        {
          prompt: "Marginal utility is calculated as the…",
          options: ["change in total utility from one more unit", "total utility divided by price", "price times quantity", "sum of all utilities"],
          correctIndex: 0,
          explanation: "MU = change in TU when one more unit is consumed.",
        },
        {
          prompt: "The law of diminishing marginal utility says that as you consume more, the extra satisfaction…",
          options: ["falls", "rises", "stays the same", "doubles"],
          correctIndex: 0,
          explanation: "Each extra unit gives less added satisfaction.",
        },
        {
          prompt: "Which unit of a good usually gives the most satisfaction?",
          options: ["the first", "the last", "the middle one", "they are equal"],
          correctIndex: 0,
          explanation: "The first unit gives the highest marginal utility.",
        },
        {
          prompt: "If TU is 10 after 1 unit and 18 after 2 units, the MU of the 2nd unit is…",
          options: ["8", "18", "28", "10"],
          correctIndex: 0,
          explanation: "MU = 18 − 10 = 8.",
        },
        {
          prompt: "Total utility is at its maximum when marginal utility is…",
          options: ["zero", "highest", "negative", "equal to price"],
          correctIndex: 0,
          explanation: "TU peaks where MU = 0.",
        },
        {
          prompt: "If a consumer keeps consuming beyond satiation, marginal utility becomes…",
          options: ["negative", "zero forever", "higher", "constant"],
          correctIndex: 0,
          explanation: "Too much of a good can reduce satisfaction (negative MU).",
        },
        {
          prompt: "While marginal utility is positive, total utility is…",
          options: ["still rising", "falling", "zero", "negative"],
          correctIndex: 0,
          explanation: "Positive MU means TU is still increasing.",
        },
        {
          prompt: "Utility is described as subjective because it…",
          options: ["differs from person to person", "is always the same", "equals the price", "never changes"],
          correctIndex: 0,
          explanation: "Different people get different satisfaction from the same good.",
        },
        {
          prompt: "The point where total utility is maximised and MU = 0 is called…",
          options: ["satiation", "scarcity", "equilibrium price", "surplus"],
          correctIndex: 0,
          explanation: "Satiation = full satisfaction, MU zero.",
        },
        {
          prompt: "Diminishing marginal utility helps explain why people…",
          options: ["buy a variety of goods", "buy only one good", "never buy anything", "pay more for extra units"],
          correctIndex: 0,
          explanation: "Falling MU encourages spreading spending over many goods.",
        },
        {
          prompt: "If TU stays the same when one more unit is consumed, the MU of that unit is…",
          options: ["0", "positive", "negative", "10"],
          correctIndex: 0,
          explanation: "No change in TU means MU = 0.",
        },
        {
          prompt: "The satisfaction from the 3rd cup of water being less than the 1st illustrates…",
          options: ["diminishing marginal utility", "rising marginal utility", "constant utility", "scarcity of water"],
          correctIndex: 0,
          explanation: "Later units give less extra satisfaction.",
        },
        {
          prompt: "As marginal utility falls but stays positive, total utility rises by…",
          options: ["smaller and smaller amounts", "larger amounts", "the same amount", "nothing"],
          correctIndex: 0,
          explanation: "TU increases at a decreasing rate.",
        },
        {
          prompt: "A consumer studies consumer behaviour to get the most satisfaction from their…",
          options: ["limited income", "unlimited money", "neighbour's income", "taxes"],
          correctIndex: 0,
          explanation: "Consumers maximise satisfaction from a limited income.",
        },
        {
          prompt: "Which measure would a shopkeeper use to explain why the 10th soda gives you little joy?",
          options: ["marginal utility", "total revenue", "the price index", "supply"],
          correctIndex: 0,
          explanation: "The low marginal utility of the 10th unit explains it.",
        },
        {
          prompt: "If the MU values are 12, 8, 5, 2, 0, −2, the good's total utility is highest at the unit where MU is…",
          options: ["0", "12", "−2", "8"],
          correctIndex: 0,
          explanation: "TU peaks at the unit where MU reaches 0.",
        },
        {
          prompt: "Marginal utility of the very first unit equals…",
          options: ["the total utility of that unit", "zero", "the price", "the average utility"],
          correctIndex: 0,
          explanation: "For the first unit, MU = TU.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define total utility and marginal utility, and give the formula linking marginal utility to total utility.",
          answerKey:
            "Total utility is the total satisfaction from consuming a given quantity of a good; marginal utility is the extra satisfaction from consuming one more unit. Marginal utility = the change in total utility when one more unit is consumed. Award marks for both definitions and the relationship.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "A consumer's total utility from oranges is: 1 → 8, 2 → 14, 3 → 18, 4 → 20, 5 → 20. Calculate the marginal utility of the 3rd and 5th oranges.",
          answerKey:
            "MU of 3rd = 18 − 14 = 4; MU of 5th = 20 − 20 = 0. Award a mark for each correct marginal utility and correct method.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Total utility is at its maximum when marginal utility is…",
          options: ["zero", "at its highest", "negative", "equal to price"],
          correctIndex: 0,
          answerKey: "Total utility peaks where marginal utility equals zero.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "State the law of diminishing marginal utility and explain it with an everyday example, showing what happens to total and marginal utility as consumption increases.",
          answerKey:
            "A strong answer states that as a person consumes more units of a good, the marginal (extra) satisfaction from each additional unit falls. Using an example (e.g. cups of water on a hot day, or eating mangoes): the first unit gives the greatest satisfaction and each later unit gives less; marginal utility keeps falling; total utility keeps rising but by smaller amounts, reaching a maximum when marginal utility is zero (satiation); beyond that, marginal utility becomes negative and total utility falls. Award marks for the correct statement of the law, a valid example, and the correct behaviour of both total and marginal utility.",
          marks: 5,
        },
      ],
    },
    {
      slug: "consumer-equilibrium",
      title: "Rational Choice and Consumer Equilibrium",
      objective:
        "By the end of the topic, learners should be able to explain how a rational consumer allocates a limited income among goods to maximise satisfaction, and state the condition for consumer equilibrium.",
      estimatedMinutes: 150,
      notes: `## Introduction

If every extra unit of a good gives less satisfaction, how does a shopper with limited money decide *how much* of each good to buy? This topic answers that question. It explains what it means to be a **rational consumer**, introduces the **equi-marginal principle** — the clever rule of getting equal satisfaction from the last dollar spent on every good — and shows how a consumer reaches **equilibrium**, the balance point where no reshuffling of spending could make them any happier. It ties the whole term together by linking this balance back to the **law of demand**.

## The consumer's problem

A consumer has **unlimited wants** but a **limited income** and faces **given prices**. The problem is: how should they spend their money to get the **greatest possible total satisfaction (utility)**? A consumer who does this is acting **rationally**.

## The equi-marginal principle

To get the most satisfaction, a rational consumer spreads spending so that the **last dollar (or Liberian dollar) spent on each good gives the same marginal utility**. This is the **equi-marginal principle** (the law of equal marginal utility per dollar).

We compare goods using **marginal utility per unit of money**:

$$\\frac{\\text{marginal utility of a good}}{\\text{price of the good}}$$

## Consumer equilibrium

A consumer is in **equilibrium** — getting the most satisfaction from their income — when:

> the **marginal utility per dollar is equal for all goods**, and the whole income is spent.

For two goods A and B this is written:

$$\\frac{MU_A}{P_A} = \\frac{MU_B}{P_B}$$

If the marginal utility per dollar is **higher** for one good, the consumer should **buy more of that good** (and less of the other). As they buy more of it, its marginal utility **falls** (diminishing marginal utility) until the ratios are equal again — that is the point of balance.

## Why this makes sense

The idea rests on the law of diminishing marginal utility from the last topic: because extra units of any one good give less and less satisfaction, it pays to **switch spending** toward whichever good currently gives more satisfaction per dollar, until no such switch can improve total satisfaction. That balance point is consumer equilibrium.

## Factors that affect consumer choice

In real life, a consumer's choices also depend on:

- their **income**,
- the **prices** of goods,
- their **tastes and preferences**,
- the **prices of related goods** (substitutes and complements),
- **advertising** and habit.

Understanding consumer behaviour helps explain the **demand** studied earlier: as a consumer gains less marginal utility from extra units, they will only buy more at a **lower price** — which is exactly the law of demand.

## Common errors and misconceptions

- **Equalising marginal utility instead of marginal utility per dollar** — equilibrium requires MU **÷ price** to be equal across goods, *not* the marginal utilities themselves; a costly good can be worth buying if its MU is high enough relative to its price.
- **Thinking equilibrium means buying equal amounts of each good** — it means the *last dollar* spent on each good yields the same satisfaction, which usually means buying *different* quantities.
- **Forgetting the income constraint** — the consumer must also spend their **whole income**; equal MU-per-dollar ratios only describe equilibrium when all the money is allocated.
- **Missing the link to diminishing marginal utility** — switching spending works *because* buying more of a good lowers its marginal utility; without that falling MU, the ratios would never settle into balance.`,
      workedExample: `**Task.** A consumer has L$ to spend on two goods, rice and fish. The marginal utility per Liberian dollar is currently 6 for rice and 9 for fish. (a) Is the consumer in equilibrium? (b) What should they do, and what happens as they act? (c) State the condition for equilibrium.

**Part (a) — is the consumer in equilibrium?**
No. In equilibrium the **marginal utility per dollar must be equal** for both goods. Here it is **6 for rice** but **9 for fish** — the last dollar spent on fish gives **more** satisfaction than the last dollar spent on rice, so satisfaction is not yet maximised.

**Part (b) — what should the consumer do?**
They should **spend more on fish and less on rice**, because each dollar moved to fish adds more satisfaction (9) than it loses from rice (6). As they **buy more fish**, its marginal utility **falls** (law of diminishing marginal utility), and as they **buy less rice**, rice's marginal utility **rises**. They keep switching until the two ratios become **equal** — the point where no further switching can raise total satisfaction.

**Part (c) — the equilibrium condition**
The consumer is in equilibrium when the marginal utility per dollar is equal for both goods and all income is spent:

MU(rice) ÷ P(rice) = MU(fish) ÷ P(fish).

**Conclusion:** because fish currently gives more satisfaction per dollar, the rational consumer buys more fish until diminishing marginal utility brings the two ratios into balance — the point of consumer equilibrium.`,
      teachingTip:
        "Consumer equilibrium builds directly on diminishing marginal utility — teach them back-to-back. Keep the rule simple: spend the next dollar wherever you get the most utility per dollar, and stop switching when they are equal. Use a two-good example with unequal ratios and have learners decide which way to move spending. Linking the result to the downward-sloping demand curve ties the whole term's economics together.",
      quiz: [
        {
          prompt: "A consumer faces unlimited wants but a … income.",
          options: ["limited", "unlimited", "rising", "zero"],
          correctIndex: 0,
          explanation: "Limited income forces choices.",
        },
        {
          prompt: "A rational consumer aims to get the … satisfaction from their income.",
          options: ["greatest possible", "least possible", "same as others", "no"],
          correctIndex: 0,
          explanation: "Rational consumers maximise total utility.",
        },
        {
          prompt: "To compare goods, a consumer looks at marginal utility per unit of…",
          options: ["money (price)", "weight", "time", "colour"],
          correctIndex: 0,
          explanation: "MU per dollar (MU ÷ price) is the comparison.",
        },
        {
          prompt: "The rule that the last dollar on each good should give equal marginal utility is the…",
          options: ["equi-marginal principle", "law of supply", "law of demand", "law of returns"],
          correctIndex: 0,
          explanation: "The equi-marginal principle guides rational spending.",
        },
        {
          prompt: "A consumer is in equilibrium when the marginal utility per dollar is … for all goods.",
          options: ["equal", "different", "zero", "highest for one good"],
          correctIndex: 0,
          explanation: "Equal MU per dollar across goods = equilibrium.",
        },
        {
          prompt: "The equilibrium condition for two goods A and B is…",
          options: ["MU_A / P_A = MU_B / P_B", "MU_A = MU_B", "P_A = P_B", "MU_A × P_A = MU_B × P_B"],
          correctIndex: 0,
          explanation: "Marginal utility per dollar equal across goods.",
        },
        {
          prompt: "If MU per dollar is higher for good X than good Y, the consumer should buy…",
          options: ["more of X, less of Y", "more of Y, less of X", "none of either", "equal amounts always"],
          correctIndex: 0,
          explanation: "Shift spending to the good giving more per dollar.",
        },
        {
          prompt: "As a consumer buys more of a good, its marginal utility…",
          options: ["falls", "rises", "stays constant", "becomes the price"],
          correctIndex: 0,
          explanation: "Diminishing marginal utility applies.",
        },
        {
          prompt: "Consumer equilibrium is the point where…",
          options: [
            "no further switching of spending can raise satisfaction",
            "the consumer spends nothing",
            "prices are equal",
            "marginal utility is highest",
          ],
          correctIndex: 0,
          explanation: "It is the balance that maximises total utility.",
        },
        {
          prompt: "The theory of consumer equilibrium builds on which earlier law?",
          options: ["diminishing marginal utility", "the law of supply", "conservation of energy", "the law of one price"],
          correctIndex: 0,
          explanation: "Falling MU drives the switching of spending.",
        },
        {
          prompt: "Which is a factor that affects consumer choice?",
          options: ["income and prices", "the weather in space", "the colour of money", "the number of shops in another country"],
          correctIndex: 0,
          explanation: "Income, prices, tastes and related-goods prices matter.",
        },
        {
          prompt: "A rational consumer keeps switching spending until marginal utility per dollar is…",
          options: ["equal across goods", "zero for all goods", "highest for one good", "different for each good"],
          correctIndex: 0,
          explanation: "Equality of MU per dollar signals the best mix.",
        },
        {
          prompt: "If fish gives 9 utils per dollar and rice 6, the consumer should…",
          options: ["buy more fish", "buy more rice", "buy neither", "buy equal amounts"],
          correctIndex: 0,
          explanation: "Fish gives more satisfaction per dollar, so buy more fish.",
        },
        {
          prompt: "Consumer behaviour helps explain which market concept studied earlier?",
          options: ["demand", "the census", "supply of land", "the factors of production"],
          correctIndex: 0,
          explanation: "Diminishing MU underlies the downward-sloping demand curve.",
        },
        {
          prompt: "Because extra units give less utility, a consumer will buy more only at a…",
          options: ["lower price", "higher price", "fixed price", "zero price"],
          correctIndex: 0,
          explanation: "This is the reasoning behind the law of demand.",
        },
        {
          prompt: "Acting to maximise satisfaction from limited income is called being…",
          options: ["rational", "irrational", "wasteful", "generous"],
          correctIndex: 0,
          explanation: "A rational consumer maximises utility.",
        },
        {
          prompt: "Advertising and habit are examples of factors affecting…",
          options: ["consumer choice", "the price of gold", "government tax", "the supply curve only"],
          correctIndex: 0,
          explanation: "Tastes, advertising and habit shape choices.",
        },
        {
          prompt: "At equilibrium, the consumer's whole income should be…",
          options: ["spent", "saved entirely", "given away", "taxed"],
          correctIndex: 0,
          explanation: "Equilibrium assumes the income is fully allocated.",
        },
        {
          prompt: "Switching spending toward a good raises total satisfaction only while that good's MU per dollar is…",
          options: ["higher than the other's", "lower than the other's", "zero", "negative"],
          correctIndex: 0,
          explanation: "Switch while it gives more per dollar; stop when equal.",
        },
        {
          prompt: "The equi-marginal principle is also called the law of equal marginal utility per…",
          options: ["dollar", "kilogram", "hour", "person"],
          correctIndex: 0,
          explanation: "It equalises marginal utility per unit of money.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "State the condition for consumer equilibrium for two goods A and B.",
          answerKey:
            "The consumer is in equilibrium when the marginal utility per dollar (unit of money) is equal for both goods and all income is spent: MU_A / P_A = MU_B / P_B. Award marks for the equal-MU-per-dollar condition and the correct expression.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "If the marginal utility per dollar is higher for good X than good Y, a rational consumer should…",
          options: [
            "buy more of X and less of Y",
            "buy more of Y and less of X",
            "stop buying both",
            "keep the same amounts",
          ],
          correctIndex: 0,
          answerKey: "Shift spending to the good giving more utility per dollar (X).",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain what a 'rational consumer' means in economics.",
          answerKey:
            "A rational consumer is one who allocates their limited income among goods so as to get the greatest possible total satisfaction (utility), spending in a way that equalises the marginal utility per dollar across goods. Award marks for the idea of maximising satisfaction from limited income and acting to that end.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how a rational consumer allocates a limited income between two goods to reach equilibrium, and how this connects to the law of diminishing marginal utility.",
          answerKey:
            "A strong answer explains that a rational consumer compares the marginal utility per dollar (MU ÷ price) of each good and spends the next dollar wherever it gives the most satisfaction. If one good gives more utility per dollar, the consumer buys more of it; by the law of diminishing marginal utility, its marginal utility falls as more is bought, while the other good's rises, until the marginal utility per dollar is equal for both goods and all income is spent — the point of consumer equilibrium (MU_A/P_A = MU_B/P_B). The connection is that diminishing marginal utility is what makes switching eventually stop, producing a stable balance. Award marks for the allocation rule, the equilibrium condition, and the link to diminishing marginal utility.",
          marks: 5,
        },
      ],
    },
  ],
};
