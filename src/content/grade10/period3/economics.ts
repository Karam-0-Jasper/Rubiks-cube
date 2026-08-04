import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 10,
// Semester One, Period III: The Factors of Production.
export const economicsG10P3: PeriodContent = {
  grade: 10,
  number: 3,
  title: "The Factors of Production",
  summary:
    "Period III of the MoE Grade 10 Economics syllabus. Learners identify the four factors of production — land, labour, capital and the entrepreneur — describe the reward earned by each, and explain how the factors are combined to produce goods and services.",
  topics: [
    {
      slug: "factors-of-production",
      title: "The Four Factors of Production",
      objective:
        "By the end of the topic, learners should be able to name and define the four factors of production, give examples of each, and state the reward earned by each factor.",
      estimatedMinutes: 160,
      notes: `## Introduction

- Every good and service — a loaf of bread, a taxi ride, a bag of rice — comes from **resources** brought together to make it.
- Economists call these the **factors of production** — four kinds: **land, labour, capital and the entrepreneur**.
- **This topic:** each factor defined; everyday Liberian examples; the **reward** each earns; and why nothing is produced until all four are combined.

## What are the factors of production?

- **Factors of production** — the **resources used to produce goods and services**.
- Four of them: **land, labour, capital and the entrepreneur**.

## 1. Land

**Land** means all the **natural resources** provided by nature that are used in production — not just the ground, but everything from it: soil, forests, rivers, minerals, oil, fish and the climate.

- **Reward: rent** — the payment for the use of land.
- Land is a **gift of nature**; its total supply is largely fixed.

## 2. Labour

**Labour** is the **human effort** — physical and mental — used in production. It includes the work of the farmer, the teacher, the doctor, the mechanic and the trader.

- **Reward: wages (or salary)** — the payment for labour.
- The quality of labour can be improved by **education, training and good health** (this is called human capital).

## 3. Capital

**Capital** is the **man-made goods used to produce other goods** — the tools, machines, factories, vehicles and buildings used in production. (Capital is *not* just money; money is used to *buy* capital.)

- **Reward: interest** — the payment for the use of capital.
- Capital increases the amount a worker can produce (a farmer with a tractor produces more than one with a hoe).

## 4. The entrepreneur

The **entrepreneur** is the person who **organises the other three factors** (land, labour and capital) to produce goods and services, and who **takes the risk** of the business.

- **Reward: profit** — what is left after all costs are paid (but the entrepreneur may also make a loss).
- The entrepreneur **decides what to produce, how to produce it, and bears the risk** of success or failure.

## Summary table

| Factor | What it is | Reward |
|---|---|---|
| **Land** | natural resources | **rent** |
| **Labour** | human effort | **wages/salary** |
| **Capital** | man-made production goods | **interest** |
| **Entrepreneur** | organiser and risk-taker | **profit** |

## Combining the factors

- No single factor can produce on its own — they must be **combined**.
- Example (a bakery): **land** (site and wheat), **labour** (the bakers), **capital** (oven and mixers), **entrepreneur** (organises them and takes the risk).
- Production happens only when all four are brought together.

## Common errors and misconceptions

- **Thinking capital means money** — in economics, **capital** is the *man-made goods* used in production (tools, machines, buildings); money merely *buys* capital, it is not itself a factor of production.
- **Forgetting the entrepreneur is a separate factor** — the entrepreneur is not just "the boss": they **organise** the other three factors and **bear the risk**, which is why their reward (profit) is uncertain.
- **Mixing up the factor–reward pairs** — remember them as fixed pairs: **land → rent, labour → wages, capital → interest, entrepreneur → profit**.
- **Believing one factor can produce alone** — no good is made by land, labour or capital by itself; production happens only when **all four are combined**.`,
      workedExample: `**Task.** A farmer runs a rice farm. (a) Identify the four factors of production on the farm. (b) State the reward earned by each factor. (c) Explain why the entrepreneur's reward is different from the others.

**Part (a) — the four factors on the rice farm**
- **Land:** the field, the soil, the river water used for irrigation — the natural resources.
- **Labour:** the farmer and the workers who plant, weed and harvest — human effort.
- **Capital:** the hoes, the tractor, the storage shed — man-made goods used in production.
- **Entrepreneur:** the person who owns and organises the farm, decides what to grow, and takes the risk.

**Part (b) — the reward of each factor**

| Factor | Reward |
|---|---|
| Land | rent |
| Labour | wages/salary |
| Capital | interest |
| Entrepreneur | profit |

**Part (c) — why the entrepreneur's reward is different**
Rent, wages and interest are **fixed or agreed** payments — they are costs that must be paid whether or not the business does well. **Profit is not guaranteed:** it is whatever is **left over after all the other costs are paid**, and it depends on the success of the business. Because the entrepreneur **takes the risk** — and can even make a **loss** if things go badly — the reward (profit) is uncertain, unlike the other three rewards.

**Conclusion:** all four factors combine to produce the rice, each earning its reward — rent, wages, interest and profit — with the entrepreneur's profit being the uncertain, risk-bearing reward.`,
      teachingTip:
        "Two misconceptions dominate this topic. First, learners say capital is 'money' — stress that capital is the man-made goods (tools, machines, buildings); money only buys them. Second, they forget the entrepreneur is a separate factor. Drill the factor-reward pairs (land–rent, labour–wages, capital–interest, entrepreneur–profit) as fixed pairs, then apply them to a local business so the four factors are seen working together.",
      quiz: [
        {
          prompt: "The factors of production are the resources used to produce…",
          options: ["goods and services", "money only", "profit only", "rent only"],
          correctIndex: 0,
          explanation: "They are the resources needed to make goods and services.",
        },
        {
          prompt: "How many factors of production are there?",
          options: ["four", "two", "three", "five"],
          correctIndex: 0,
          explanation: "Land, labour, capital and the entrepreneur — four.",
        },
        {
          prompt: "Which factor refers to all natural resources?",
          options: ["land", "labour", "capital", "entrepreneur"],
          correctIndex: 0,
          explanation: "Land covers natural resources (soil, minerals, water, forests).",
        },
        {
          prompt: "The reward for land is…",
          options: ["rent", "wages", "interest", "profit"],
          correctIndex: 0,
          explanation: "Land earns rent.",
        },
        {
          prompt: "Human effort, physical and mental, used in production is…",
          options: ["labour", "land", "capital", "profit"],
          correctIndex: 0,
          explanation: "Labour is human effort.",
        },
        {
          prompt: "The reward for labour is…",
          options: ["wages or salary", "rent", "interest", "profit"],
          correctIndex: 0,
          explanation: "Labour earns wages or a salary.",
        },
        {
          prompt: "Man-made goods used to produce other goods are called…",
          options: ["capital", "land", "labour", "rent"],
          correctIndex: 0,
          explanation: "Capital is the tools, machines and buildings used in production.",
        },
        {
          prompt: "The reward for capital is…",
          options: ["interest", "rent", "wages", "profit"],
          correctIndex: 0,
          explanation: "Capital earns interest.",
        },
        {
          prompt: "The person who organises the other factors and takes the risk is the…",
          options: ["entrepreneur", "labourer", "landlord", "banker"],
          correctIndex: 0,
          explanation: "The entrepreneur organises production and bears risk.",
        },
        {
          prompt: "The reward for the entrepreneur is…",
          options: ["profit", "rent", "wages", "interest"],
          correctIndex: 0,
          explanation: "The entrepreneur earns profit (or bears a loss).",
        },
        {
          prompt: "Which is an example of capital?",
          options: ["a tractor", "a river", "a farmer's effort", "the climate"],
          correctIndex: 0,
          explanation: "A tractor is a man-made production good — capital.",
        },
        {
          prompt: "Which is an example of land?",
          options: ["mineral deposits", "a factory machine", "a teacher's work", "a delivery van"],
          correctIndex: 0,
          explanation: "Minerals are natural resources — land.",
        },
        {
          prompt: "In economics, capital is NOT the same as…",
          options: ["money", "machines", "tools", "buildings"],
          correctIndex: 0,
          explanation: "Money buys capital; capital is the man-made goods themselves.",
        },
        {
          prompt: "The quality of labour can be improved by…",
          options: ["education and training", "raising rent", "buying land", "cutting profit"],
          correctIndex: 0,
          explanation: "Education, training and health improve labour (human capital).",
        },
        {
          prompt: "Which factor's reward is uncertain and can even be a loss?",
          options: ["the entrepreneur's profit", "labour's wages", "land's rent", "capital's interest"],
          correctIndex: 0,
          explanation: "Profit depends on the success of the business.",
        },
        {
          prompt: "A farmer with a tractor produces more than one with a hoe because of more…",
          options: ["capital", "land", "rent", "profit"],
          correctIndex: 0,
          explanation: "Better capital raises output per worker.",
        },
        {
          prompt: "Which correctly pairs a factor with its reward?",
          options: ["labour — wages", "land — interest", "capital — rent", "entrepreneur — wages"],
          correctIndex: 0,
          explanation: "Labour earns wages; land–rent, capital–interest, entrepreneur–profit.",
        },
        {
          prompt: "Land is described as a 'gift of nature' because it is…",
          options: ["provided by nature", "made in factories", "bought with money", "created by workers"],
          correctIndex: 0,
          explanation: "Natural resources are supplied by nature.",
        },
        {
          prompt: "Why can no single factor produce goods on its own?",
          options: [
            "the factors must be combined",
            "each factor is money",
            "land is unnecessary",
            "labour does everything alone",
          ],
          correctIndex: 0,
          explanation: "Production needs land, labour, capital and an entrepreneur together.",
        },
        {
          prompt: "The entrepreneur mainly decides what to produce, how to produce it, and…",
          options: ["bears the risk", "pays no costs", "earns rent", "supplies the land only"],
          correctIndex: 0,
          explanation: "The entrepreneur takes the business risk.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the four factors of production and the reward earned by each.",
          answerKey:
            "Land – rent; Labour – wages/salary; Capital – interest; Entrepreneur – profit. Award a mark per factor correctly paired with its reward (max 4).",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "In economics, 'capital' refers to…",
          options: [
            "man-made goods used to produce other goods",
            "money in the bank",
            "natural resources",
            "human effort",
          ],
          correctIndex: 0,
          answerKey: "Capital is the man-made production goods (tools, machines, buildings), not money.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain why the entrepreneur's reward (profit) is different from rent, wages and interest.",
          answerKey:
            "Rent, wages and interest are agreed/fixed payments that must be paid regardless of how the business performs, whereas profit is what is left after all other costs are paid and is not guaranteed — it depends on the success of the business, and the entrepreneur can even make a loss because they bear the risk. Award marks for the fixed-vs-residual contrast and the risk point.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Using a local business of your choice, explain how the four factors of production are combined to produce a good or service.",
          answerKey:
            "A strong answer selects a business (e.g. a bakery, farm, tailoring shop) and identifies each factor at work: land (the site and natural resources/raw materials), labour (the workers' effort), capital (the machines, tools and buildings), and the entrepreneur (who organises the others, decides what to produce and takes the risk). It should explain that all four must be combined for production to take place, and may note each factor's reward. Award marks for correctly applying all four factors to the chosen business and explaining their combination.",
          marks: 5,
        },
      ],
    },
  ],
};
