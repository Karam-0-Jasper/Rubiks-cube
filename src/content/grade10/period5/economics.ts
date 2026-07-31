import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 10,
// Semester Two, Period V: Basic Tools of Economic Analysis.
export const economicsG10P5: PeriodContent = {
  grade: 10,
  number: 5,
  title: "Basic Tools of Economic Analysis",
  summary:
    "Period V of the MoE Grade 10 Economics syllabus. Learners meet the basic tools economists use to present and analyse data — tables, graphs and charts — and the simple statistical measures of averages, percentages and ratios that turn raw figures into useful information.",
  topics: [
    {
      slug: "tables-graphs-and-charts",
      title: "Tables, Graphs and Charts in Economics",
      objective:
        "By the end of the topic, learners should be able to read and construct simple tables, and interpret line graphs, bar charts and pie charts used to present economic data.",
      estimatedMinutes: 150,
      notes: `## Why economists use tools

Economics deals with lots of **data** — prices, quantities, incomes, populations. To make sense of it, economists use **tools** that organise data and reveal patterns: **tables, graphs and charts**, and simple **statistics**. These tools turn raw numbers into information that can be understood and compared.

## Tables

A **table** arranges data in **rows and columns** so it can be read easily. The demand and supply schedules from earlier periods are tables.

| Year | Price of rice (L$/kg) |
|---|---|
| 2023 | 60 |
| 2024 | 70 |
| 2025 | 85 |

A good table has a **title**, clear **column headings** (with units), and neatly arranged figures.

## Graphs and charts

Pictures make patterns clearer than a list of numbers.

### Line graph
A **line graph** plots data as points joined by a line, best for showing **change over time** (a trend).

- The **horizontal axis (x)** usually shows time; the **vertical axis (y)** shows the quantity.
- Example: a line graph of the price of rice year by year shows whether it is rising or falling.

\`\`\`svg A line graph showing a rising trend
<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph rising from left to right">
  <line x1="35" y1="130" x2="240" y2="130" stroke="#4d7c0f" stroke-width="2"/>
  <line x1="35" y1="130" x2="35" y2="15" stroke="#4d7c0f" stroke-width="2"/>
  <polyline points="55,110 110,85 165,55 215,30" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <circle cx="55" cy="110" r="3"/><circle cx="110" cy="85" r="3"/><circle cx="165" cy="55" r="3"/><circle cx="215" cy="30" r="3"/>
  <text x="140" y="150" font-size="10" text-anchor="middle" fill="#4d7c0f">time →</text>
  <text x="16" y="80" font-size="10" fill="#4d7c0f" transform="rotate(-90 16,80)">value</text>
</svg>
\`\`\`

### Bar chart
A **bar chart** uses bars of different heights (or lengths) to **compare quantities** across categories.

- Example: bars comparing the exports of rubber, iron ore and gold — the tallest bar is the largest export.

### Pie chart
A **pie chart** is a circle divided into slices, showing how a **whole is shared into parts** (proportions). Each slice is a fraction of the total, and the whole circle is 100%.

- Example: a pie chart of government spending shows what share goes to education, health, roads, etc.

## Choosing the right tool

- **Change over time →** line graph.
- **Comparing categories →** bar chart.
- **Parts of a whole →** pie chart.
- **Exact figures →** table.

Reading these correctly — including the **title, axes, units and key** — is an essential economics skill.`,
      workedExample: `**Task.** A country's main exports in one year are: rubber 40%, iron ore 30%, gold 20%, and others 10%.
(a) Which chart best shows how the total exports are shared, and why? (b) If instead you wanted to compare the value of each export in Liberian dollars, which chart would you use? (c) In the pie chart, what angle would the rubber slice take?

**Part (a) — best chart for shares of a whole**
A **pie chart** is best, because it shows how a **whole (total exports = 100%) is divided into parts** (rubber, iron ore, gold, others). Each slice represents that export's **share** of the total, so you can see at a glance that rubber is the largest share.

**Part (b) — comparing the value of each export**
A **bar chart** is best for **comparing quantities across categories**. Each export would be a bar whose height shows its value in Liberian dollars, making it easy to compare which export is worth the most.

**Part (c) — the angle of the rubber slice**
A pie chart is a full circle of **360°**, representing 100%. Rubber is **40%** of the total, so its slice is 40% of 360°:

angle = (40 ÷ 100) × 360° = **144°**.

**Conclusion:** use a pie chart to show shares of a whole (rubber's slice = 144°) and a bar chart to compare values across categories — choosing the right tool for the question is the heart of economic analysis.`,
      teachingTip:
        "Teach the 'right tool for the job' rule as a decision list: time → line graph, categories → bar chart, parts of a whole → pie chart, exact numbers → table. The pie-chart angle calculation (share% ÷ 100 × 360°) is a favourite exam question — drill it. Always have learners state the title, axes and units when reading a graph; marks are routinely awarded (and lost) on those details.",
      quiz: [
        {
          prompt: "Economists use tools to organise and reveal patterns in…",
          options: ["data", "weather", "poems", "music"],
          correctIndex: 0,
          explanation: "The tools handle economic data.",
        },
        {
          prompt: "A table arranges data in…",
          options: ["rows and columns", "circles", "bars only", "a single line"],
          correctIndex: 0,
          explanation: "Tables use rows and columns.",
        },
        {
          prompt: "A good table should have a title, clear column headings and…",
          options: ["units", "colours only", "no numbers", "a pie slice"],
          correctIndex: 0,
          explanation: "Headings should state the units.",
        },
        {
          prompt: "A line graph is best for showing…",
          options: ["change over time", "parts of a whole", "a single number", "a picture of an object"],
          correctIndex: 0,
          explanation: "Line graphs show trends over time.",
        },
        {
          prompt: "On a line graph of a quantity over time, the horizontal axis usually shows…",
          options: ["time", "money only", "the total", "the key"],
          correctIndex: 0,
          explanation: "The x-axis usually shows time.",
        },
        {
          prompt: "A bar chart is best for…",
          options: ["comparing quantities across categories", "showing a trend over time", "showing parts of a whole", "listing exact numbers"],
          correctIndex: 0,
          explanation: "Bars compare categories.",
        },
        {
          prompt: "A pie chart shows…",
          options: ["how a whole is divided into parts", "change over years", "exact values only", "a single category"],
          correctIndex: 0,
          explanation: "Pie charts show proportions of a whole.",
        },
        {
          prompt: "A full pie chart represents…",
          options: ["100% (360°)", "50%", "10%", "1%"],
          correctIndex: 0,
          explanation: "The whole circle is 100% or 360°.",
        },
        {
          prompt: "To show government spending shares (education, health, roads), the best chart is a…",
          options: ["pie chart", "line graph", "table only", "map"],
          correctIndex: 0,
          explanation: "Shares of a whole → pie chart.",
        },
        {
          prompt: "To show how the price of rice changed each year from 2020 to 2025, use a…",
          options: ["line graph", "pie chart", "single bar", "photograph"],
          correctIndex: 0,
          explanation: "Change over time → line graph.",
        },
        {
          prompt: "To compare the exports of rubber, iron ore and gold, use a…",
          options: ["bar chart", "pie chart", "line graph", "table of one row"],
          correctIndex: 0,
          explanation: "Comparing categories → bar chart.",
        },
        {
          prompt: "In a pie chart, a category that is 25% of the total takes an angle of…",
          options: ["90°", "25°", "180°", "360°"],
          correctIndex: 0,
          explanation: "25% × 360° = 90°.",
        },
        {
          prompt: "In a pie chart, a category that is 50% of the total takes an angle of…",
          options: ["180°", "50°", "90°", "360°"],
          correctIndex: 0,
          explanation: "50% × 360° = 180°.",
        },
        {
          prompt: "The demand and supply schedules from earlier periods are examples of…",
          options: ["tables", "pie charts", "line graphs", "photographs"],
          correctIndex: 0,
          explanation: "Schedules are tables of data.",
        },
        {
          prompt: "The main purpose of these tools is to turn raw numbers into…",
          options: ["useful information", "more numbers only", "poems", "confusion"],
          correctIndex: 0,
          explanation: "Tools make data understandable.",
        },
        {
          prompt: "When reading a graph you should always check the title, the axes and the…",
          options: ["units and key", "colour of the paper", "author's name", "date of printing"],
          correctIndex: 0,
          explanation: "Units and the key are essential to interpret it.",
        },
        {
          prompt: "The vertical axis of a graph is also called the…",
          options: ["y-axis", "x-axis", "key", "title"],
          correctIndex: 0,
          explanation: "The vertical axis is the y-axis.",
        },
        {
          prompt: "A rising line on a line graph shows a value that is…",
          options: ["increasing", "decreasing", "constant", "zero"],
          correctIndex: 0,
          explanation: "An upward line means the value is rising.",
        },
        {
          prompt: "In a pie chart, a category of 10% takes an angle of…",
          options: ["36°", "10°", "100°", "360°"],
          correctIndex: 0,
          explanation: "10% × 360° = 36°.",
        },
        {
          prompt: "For reading exact figures rather than a picture, the best tool is a…",
          options: ["table", "pie chart", "bar chart", "line graph"],
          correctIndex: 0,
          explanation: "Tables give the exact numbers.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "State which chart is best for each: (a) change in a value over time, (b) comparing categories, (c) parts of a whole.",
          answerKey:
            "(a) line graph; (b) bar chart; (c) pie chart. Award a mark for each correct match.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "In a pie chart, what angle would a category representing 30% of the total take?",
          answerKey:
            "30% × 360° = (30 ÷ 100) × 360 = 108°. Award marks for the method and the answer 108°.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A pie chart is most suitable for showing…",
          options: [
            "how a total is shared among parts",
            "a trend over many years",
            "the exact price to the nearest dollar",
            "the location of a country",
          ],
          correctIndex: 0,
          answerKey: "Pie charts show proportions of a whole.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain, with examples, why economists use tables, line graphs, bar charts and pie charts, and how to choose the right one.",
          answerKey:
            "A strong answer explains that these tools organise data and reveal patterns, turning raw numbers into useful information. Tables arrange exact figures in rows and columns (e.g. a demand schedule); line graphs show change over time/trends (e.g. yearly price of rice); bar charts compare quantities across categories (e.g. exports of rubber, iron ore, gold); pie charts show how a whole is divided into parts (e.g. shares of government spending). Choosing the right one depends on the question: time → line graph, categories → bar chart, parts of a whole → pie chart, exact figures → table. Award marks for the purpose of the tools, a correct example of each, and the selection rule.",
          marks: 5,
        },
      ],
    },
    {
      slug: "averages-percentages-ratios",
      title: "Statistical Measures: Averages, Percentages and Ratios",
      objective:
        "By the end of the topic, learners should be able to calculate and interpret the mean (average), the median and the mode, and use percentages and ratios in simple economic problems.",
      estimatedMinutes: 150,
      notes: `## Making sense of numbers

Besides charts, economists use simple **statistical measures** to summarise data: **averages, percentages and ratios**.

## Averages (measures of central tendency)

An **average** is a single value that represents a set of numbers. There are three kinds:

### Mean
The **mean** is the usual "average": **add all the values and divide by how many there are**.

$$\\text{mean} = \\frac{\\text{sum of values}}{\\text{number of values}}$$

*Example:* the mean of 4, 6, 8, 10 is (4 + 6 + 8 + 10) ÷ 4 = 28 ÷ 4 = **7**.

### Median
The **median** is the **middle value** when the numbers are arranged in order.

*Example:* for 3, 5, 7, 9, 11 the median is **7** (the middle one). For an even set, take the mean of the two middle values.

### Mode
The **mode** is the value that occurs **most often**.

*Example:* in 2, 3, 3, 5, 7 the mode is **3**.

Economists use averages to describe, for example, **average income** or **average price**.

## Percentages

A **percentage** is a fraction out of **100** (per cent = "per hundred"). Percentages make it easy to compare and to describe change.

- To find a percentage of a quantity: **(percentage ÷ 100) × quantity.** e.g. 20% of 300 = (20 ÷ 100) × 300 = **60**.
- **Percentage change** = (change ÷ original value) × 100. e.g. if a price rises from L$50 to L$60, the change is 10, so % change = (10 ÷ 50) × 100 = **20% increase**.

Percentages are used everywhere in economics — interest rates, inflation, tax rates, growth rates.

## Ratios

A **ratio** compares two quantities, showing how many times one contains the other, written as **a : b**.

- If a class has 12 boys and 18 girls, the ratio of boys to girls is 12 : 18, which **simplifies** (divide both by 6) to **2 : 3**.
- Ratios are used to compare, for example, exports to imports, or workers to output.

## Why these matter

Averages, percentages and ratios turn long lists of figures into a few clear numbers that can be compared and understood — the everyday arithmetic of economic analysis.`,
      workedExample: `**Task.** The daily wages (in L$) of five workers are: 400, 600, 600, 800, 1000.
(a) Find the mean, median and mode. (b) One worker's wage of 400 rises to 500 — what is the percentage increase? (c) Express the ratio of the lowest wage (400) to the highest (1000) in its simplest form.

**Part (a) — mean, median and mode**
- **Mean** = (400 + 600 + 600 + 800 + 1000) ÷ 5 = 3400 ÷ 5 = **L$680**.
- **Median** = the middle value when in order (400, 600, **600**, 800, 1000) = **L$600**.
- **Mode** = the value occurring most often = **L$600** (it appears twice).

**Part (b) — percentage increase**
The wage rises from 400 to 500, a change of **100**.
% increase = (change ÷ original) × 100 = (100 ÷ 400) × 100 = **25%**.

**Part (c) — ratio in simplest form**
Ratio of lowest to highest = 400 : 1000. **Divide both by 200:**
400 ÷ 200 = 2, and 1000 ÷ 200 = 5.
Simplest form: **2 : 5**.

**Conclusion:** the mean wage is L$680, the median and mode are both L$600; the 400 → 500 rise is a 25% increase; and the lowest-to-highest wage ratio simplifies to 2 : 5. These simple measures summarise the data clearly.`,
      teachingTip:
        "Keep the three averages distinct with a one-word cue each: mean = add-and-divide, median = middle, mode = most. Learners confuse median and mode constantly — always have them put numbers in order before finding the median. For percentage change, drill the formula (change ÷ ORIGINAL × 100), stressing that the denominator is the original value, not the new one — the single most common error.",
      quiz: [
        {
          prompt: "The mean is found by…",
          options: ["adding the values and dividing by how many", "taking the middle value", "taking the most common value", "the largest value"],
          correctIndex: 0,
          explanation: "Mean = sum ÷ number of values.",
        },
        {
          prompt: "The mean of 2, 4, 6 is…",
          options: ["4", "6", "12", "3"],
          correctIndex: 0,
          explanation: "(2+4+6) ÷ 3 = 12 ÷ 3 = 4.",
        },
        {
          prompt: "The median is the…",
          options: ["middle value when arranged in order", "sum of the values", "most common value", "largest value"],
          correctIndex: 0,
          explanation: "The median is the middle value.",
        },
        {
          prompt: "The median of 3, 5, 7, 9, 11 is…",
          options: ["7", "5", "9", "35"],
          correctIndex: 0,
          explanation: "7 is the middle number.",
        },
        {
          prompt: "The mode is the value that…",
          options: ["occurs most often", "is in the middle", "is the average", "is largest"],
          correctIndex: 0,
          explanation: "The mode is the most frequent value.",
        },
        {
          prompt: "The mode of 2, 3, 3, 5, 7 is…",
          options: ["3", "5", "2", "7"],
          correctIndex: 0,
          explanation: "3 appears most often.",
        },
        {
          prompt: "A percentage is a fraction out of…",
          options: ["100", "10", "1000", "50"],
          correctIndex: 0,
          explanation: "Per cent means per hundred.",
        },
        {
          prompt: "20% of 300 is…",
          options: ["60", "20", "300", "6"],
          correctIndex: 0,
          explanation: "(20 ÷ 100) × 300 = 60.",
        },
        {
          prompt: "Percentage change is (change ÷ …) × 100.",
          options: ["original value", "new value", "100", "the mean"],
          correctIndex: 0,
          explanation: "Divide the change by the original value.",
        },
        {
          prompt: "If a price rises from 50 to 60, the percentage increase is…",
          options: ["20%", "10%", "60%", "16.7%"],
          correctIndex: 0,
          explanation: "(10 ÷ 50) × 100 = 20%.",
        },
        {
          prompt: "A ratio compares…",
          options: ["two quantities", "a whole to nothing", "one number only", "colours"],
          correctIndex: 0,
          explanation: "A ratio compares two quantities.",
        },
        {
          prompt: "The ratio 12 : 18 in simplest form is…",
          options: ["2 : 3", "6 : 9", "1 : 2", "3 : 2"],
          correctIndex: 0,
          explanation: "Divide both by 6: 2 : 3.",
        },
        {
          prompt: "The mean of 10, 20, 30, 40 is…",
          options: ["25", "30", "100", "20"],
          correctIndex: 0,
          explanation: "(10+20+30+40) ÷ 4 = 100 ÷ 4 = 25.",
        },
        {
          prompt: "Economists use the mean to describe, for example…",
          options: ["average income", "the exact wage of one worker", "the colour of money", "the shape of a graph"],
          correctIndex: 0,
          explanation: "Averages describe typical values like average income.",
        },
        {
          prompt: "10% of 250 is…",
          options: ["25", "10", "250", "2.5"],
          correctIndex: 0,
          explanation: "(10 ÷ 100) × 250 = 25.",
        },
        {
          prompt: "The ratio of 400 to 1000 in simplest form is…",
          options: ["2 : 5", "4 : 10", "1 : 2", "5 : 2"],
          correctIndex: 0,
          explanation: "Divide both by 200: 2 : 5.",
        },
        {
          prompt: "Which measure is most affected by one very large value?",
          options: ["the mean", "the mode", "the median", "the ratio"],
          correctIndex: 0,
          explanation: "The mean is pulled up by a large value.",
        },
        {
          prompt: "Interest rates, inflation and tax rates are usually expressed as…",
          options: ["percentages", "ratios only", "modes", "medians"],
          correctIndex: 0,
          explanation: "These are given as percentages.",
        },
        {
          prompt: "For the set 5, 5, 9, the mode is…",
          options: ["5", "9", "19", "6.3"],
          correctIndex: 0,
          explanation: "5 occurs most often.",
        },
        {
          prompt: "Averages, percentages and ratios help by turning long lists of figures into…",
          options: ["a few clear numbers", "more confusion", "pictures only", "words"],
          correctIndex: 0,
          explanation: "They summarise data into clear measures.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Find the mean, median and mode of: 5, 8, 8, 11, 13.",
          answerKey:
            "Mean = (5+8+8+11+13) ÷ 5 = 45 ÷ 5 = 9. Median = middle value = 8. Mode = 8 (occurs twice). Award a mark for each correct measure.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "A worker's wage rises from L$800 to L$1000. Calculate the percentage increase.",
          answerKey:
            "Change = 1000 − 800 = 200. % increase = (200 ÷ 800) × 100 = 25%. Award marks for using the original value as the denominator and the answer 25%.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The ratio 15 : 25 in its simplest form is…",
          options: ["3 : 5", "5 : 3", "15 : 25", "1 : 2"],
          correctIndex: 0,
          answerKey: "Divide both by 5: 3 : 5.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the difference between the mean, the median and the mode, giving an example of each, and state one situation in economics where each might be useful.",
          answerKey:
            "A strong answer defines the mean (add all values and divide by the number of values, e.g. mean of 4,6,8 = 6), the median (the middle value in an ordered list, e.g. median of 3,5,7 = 5), and the mode (the most frequent value, e.g. mode of 2,3,3,5 = 3), with valid examples. Useful situations (any reasonable): the mean for average income or average price; the median for a 'typical' income when a few very high incomes would distort the mean; the mode for the most common wage or the most frequently sold price. Award marks for the three definitions with examples and a sensible economic use of each.",
          marks: 5,
        },
      ],
    },
  ],
};
