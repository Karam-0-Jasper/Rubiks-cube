import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 11,
// Semester Two, Period V: Theory of Cost and Revenue. CONTENTS: (1) Definitions
// of cost & revenue — cost of production & revenue, economist's and accountant's
// view of cost, explicit & implicit cost; (2) Cost concepts — fixed, variable &
// marginal cost, average & total cost, short-run & long-run cost; (3) Derivation
// of cost & revenue curves — cost tables, cost curves, calculations of cost &
// revenue. Sourced from OpenStax Principles of Economics 3e (Chapter 7 and 8.2).
export const economicsG11P5: PeriodContent = {
  grade: 11,
  number: 5,
  title: "Theory of Cost and Revenue",
  summary:
    "Period V of the MoE Grade 11 Economics syllabus. Learners define cost and revenue, separate the economist's view of cost (with implicit costs) from the accountant's, and work through the cost concepts — fixed, variable, total, average and marginal cost in the short and long run. They build cost tables, draw the cost and revenue curves, and calculate cost and revenue from data.",
  topics: [
    // source: OpenStax — Principles of Economics 3e, 7.1 Explicit and Implicit Costs, and Accounting and Economic Profit (https://openstax.org/books/principles-economics-3e/pages/7-1-explicit-and-implicit-costs-and-accounting-and-economic-profit)
    {
      slug: "definitions-of-cost-and-revenue",
      title: "Definitions of Cost and Revenue; Explicit and Implicit Costs",
      objective:
        "By the end of the topic, learners should be able to define cost of production and revenue, distinguish the economist's from the accountant's view of cost, and separate explicit from implicit costs.",
      estimatedMinutes: 110,
      notes: `## Cost and revenue

**Cost of production** — the total value of all the inputs (land, labour, capital, materials) a firm uses to produce its output.
**Revenue** — the money a firm receives from selling its output; **total revenue = price × quantity sold**.
**Profit** — the difference between revenue and cost: **profit = total revenue − total cost**.

## Explicit and implicit costs

**Explicit costs** — actual **out-of-pocket payments** the firm makes, such as wages paid to workers or rent paid for premises.
**Implicit costs** — the **opportunity cost** of using resources the firm **already owns**, for which no cash is paid, such as the salary the owner gives up by running the business, or rent forgone on premises the owner owns.

## The economist's and the accountant's view of cost

**Accountant's view** — counts only **explicit costs** (actual cash payments).
**Economist's view** — counts **both explicit and implicit costs**, because using owned resources still has an opportunity cost.

## Accounting profit and economic profit

**Accounting profit = total revenue − explicit costs.**
**Economic profit = total revenue − (explicit + implicit costs) = total revenue − total (economic) cost.**
- Economic profit is smaller than accounting profit by the amount of the implicit costs.
- A firm can show an accounting profit yet make an **economic loss** if the implicit costs are large.

| Measure | Costs subtracted | Larger or smaller |
| --- | --- | --- |
| Accounting profit | Explicit only | Larger |
| Economic profit | Explicit + implicit | Smaller |

## Worked figures (Eryn's law practice)

- Expected revenue: 200,000; explicit costs: 85,000 → **accounting profit = 115,000**.
- Implicit cost (salary given up): 125,000 → **economic profit = 115,000 − 125,000 = −10,000** (an economic loss).

## Common errors

- **Ignoring implicit costs.** The owner's forgone salary and forgone rent are real economic costs.
- **Treating accounting and economic profit as the same.** Economic profit subtracts implicit costs too, so it is smaller.
- **Confusing cost with revenue.** Revenue is money received from sales; cost is the value of inputs used.`,
      workedExample: `**Question:** Musu leaves a job paying 20,000 a year to run her own shop. The shop takes in 90,000 in sales; she pays 55,000 for stock, rent and a helper. (a) Find her accounting profit. (b) Find her economic profit. (c) Should she stay in business on economic grounds?

**Solution**

*Step 1 — accounting profit.* Explicit costs = 55,000 (cash paid out). Accounting profit = revenue − explicit costs = 90,000 − 55,000 = **35,000**.

*Step 2 — implicit cost.* By running the shop she gives up her 20,000 salary — an implicit cost of **20,000**.

*Step 3 — economic profit.* Economic profit = revenue − (explicit + implicit) = 90,000 − (55,000 + 20,000) = 90,000 − 75,000 = **15,000**.

*Step 4 — decision.* Economic profit is **positive (15,000)**, so she is more than covering the opportunity cost of her time; on economic grounds she should stay in business.

**Answer:** Accounting profit = 35,000; economic profit = 15,000 (after the 20,000 forgone salary); she should continue because economic profit is positive.`,
      quiz: [
        { prompt: "Cost of production is the value of all the", options: ["outputs sold", "inputs a firm uses to produce output", "taxes paid", "profits earned"], correctIndex: 1, explanation: "Cost is the value of inputs used." },
        { prompt: "Total revenue equals", options: ["price minus cost", "price times quantity sold", "cost times quantity", "quantity minus price"], correctIndex: 1, explanation: "TR = P × Q." },
        { prompt: "Profit equals", options: ["revenue plus cost", "revenue minus cost", "cost minus revenue", "price times cost"], correctIndex: 1, explanation: "Profit = total revenue − total cost." },
        { prompt: "Explicit costs are", options: ["opportunity costs of owned resources", "actual out-of-pocket payments", "always zero", "implicit only"], correctIndex: 1, explanation: "Explicit costs are actual cash payments." },
        { prompt: "Implicit costs are", options: ["cash wages", "the opportunity cost of resources the firm already owns", "taxes", "revenue"], correctIndex: 1, explanation: "Implicit costs are forgone opportunities with no cash paid." },
        { prompt: "The owner's forgone salary is an example of", options: ["an explicit cost", "an implicit cost", "revenue", "profit"], correctIndex: 1, explanation: "It is an opportunity cost of the owner's time." },
        { prompt: "The accountant's view of cost counts", options: ["explicit costs only", "implicit costs only", "both explicit and implicit", "no costs"], correctIndex: 0, explanation: "Accountants count actual cash payments." },
        { prompt: "The economist's view of cost counts", options: ["explicit only", "implicit only", "both explicit and implicit costs", "revenue"], correctIndex: 2, explanation: "Economists include opportunity cost." },
        { prompt: "Accounting profit equals total revenue minus", options: ["implicit costs", "explicit costs", "all costs", "revenue"], correctIndex: 1, explanation: "Accounting profit subtracts only explicit costs." },
        { prompt: "Economic profit equals total revenue minus", options: ["explicit costs only", "explicit plus implicit costs", "implicit costs only", "taxes"], correctIndex: 1, explanation: "Economic profit subtracts total (explicit + implicit) costs." },
        { prompt: "Compared with accounting profit, economic profit is", options: ["larger", "smaller", "equal", "always zero"], correctIndex: 1, explanation: "It subtracts implicit costs too, so it is smaller." },
        { prompt: "A firm can show accounting profit but make an economic", options: ["gain always", "loss if implicit costs are large", "tax", "revenue"], correctIndex: 1, explanation: "Large implicit costs can turn profit into economic loss." },
        { prompt: "With revenue 200,000 and explicit costs 85,000, accounting profit is", options: ["115,000", "85,000", "285,000", "125,000"], correctIndex: 0, explanation: "200,000 − 85,000 = 115,000." },
        { prompt: "If accounting profit is 115,000 and implicit cost is 125,000, economic profit is", options: ["+10,000", "−10,000", "+240,000", "0"], correctIndex: 1, explanation: "115,000 − 125,000 = −10,000, an economic loss." },
        { prompt: "Rent forgone on premises the owner owns is a(n)", options: ["explicit cost", "implicit cost", "revenue", "tax"], correctIndex: 1, explanation: "Forgone rent is an opportunity cost — implicit." },
        { prompt: "Wages paid in cash to workers are a(n)", options: ["implicit cost", "explicit cost", "revenue", "profit"], correctIndex: 1, explanation: "Cash wages are explicit." },
        { prompt: "Revenue differs from cost because revenue is", options: ["the value of inputs", "money received from sales", "a forgone salary", "a tax"], correctIndex: 1, explanation: "Revenue is money from selling output." },
        { prompt: "The main reason economists include implicit costs is", options: ["to raise taxes", "because using owned resources has an opportunity cost", "to lower revenue", "to please accountants"], correctIndex: 1, explanation: "Owned resources could have earned elsewhere." },
        { prompt: "If revenue is 90,000, explicit cost 55,000 and forgone salary 20,000, economic profit is", options: ["35,000", "15,000", "90,000", "-20,000"], correctIndex: 1, explanation: "90,000 − (55,000 + 20,000) = 15,000." },
        { prompt: "Which pair is matched correctly?", options: ["Explicit — forgone salary", "Implicit — cash rent paid", "Explicit — wages paid", "Implicit — money spent on stock"], correctIndex: 2, explanation: "Wages paid in cash are explicit costs." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define cost of production and revenue, and write the formula for profit.", answerKey: "Cost of production is the total value of all inputs a firm uses to produce its output. Revenue is the money a firm receives from selling output (total revenue = price × quantity). Profit = total revenue − total cost. Award 3 for cost, 3 for revenue, 4 for the profit formula.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between explicit and implicit costs, with an example of each.", answerKey: "Explicit costs are actual out-of-pocket cash payments, e.g. wages or rent paid. Implicit costs are the opportunity cost of resources the firm already owns, for which no cash is paid, e.g. the owner's forgone salary or forgone rent. Award 4 per type with example.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Economic profit differs from accounting profit because it also subtracts", options: ["revenue", "explicit costs", "implicit costs", "taxes only"], correctIndex: 2, answerKey: "Economic profit subtracts implicit (opportunity) costs as well. Option C.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A firm has revenue 200,000, explicit costs 85,000 and implicit costs 125,000. Find its accounting and economic profit and comment.", answerKey: "Accounting profit = 200,000 − 85,000 = 115,000. Economic profit = 200,000 − (85,000 + 125,000) = −10,000. The firm shows an accounting profit but makes an economic loss, because the resources could earn more (125,000) elsewhere. Award 2 for accounting profit, 2 for economic profit, 2 for the comment.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the difference between the economist's and the accountant's view of cost, and show how this leads to two measures of profit. Use figures to illustrate.", answerKey: "Award marks for: definitions of explicit and implicit costs, 6; accountant's view (explicit only) vs economist's view (explicit + implicit), 6; accounting profit = revenue − explicit, and economic profit = revenue − explicit − implicit, 8; a worked numerical example showing economic profit smaller than accounting profit, 6; the insight that a firm can show accounting profit yet make an economic loss, 4. A script without the implicit-cost idea should not exceed 12.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 7.3 Costs in the Short Run (https://openstax.org/books/principles-economics-3e/pages/7-3-costs-in-the-short-run) and 7.5 Costs in the Long Run (economies of scale, LRAC) (https://openstax.org/books/principles-economics-3e/pages/7-5-costs-in-the-long-run)
    {
      slug: "cost-concepts",
      title: "Cost Concepts: Fixed, Variable, Total, Average and Marginal; Short and Long Run",
      objective:
        "By the end of the topic, learners should be able to define and relate fixed, variable, total, average and marginal cost, and distinguish short-run from long-run costs including economies of scale.",
      estimatedMinutes: 130,
      notes: `## Short-run cost concepts

**Fixed cost (FC)** — the cost of fixed inputs; it **does not change with output** (e.g. rent on the building). It must be paid even at zero output.
**Variable cost (VC)** — the cost of variable inputs; it **rises and falls with output** (e.g. wages, materials).
**Total cost (TC)** — fixed cost plus variable cost: **TC = FC + VC**.
**Marginal cost (MC)** — the cost of producing **one more unit**: MC = change in total cost ÷ change in output.
**Average total cost (ATC)** — total cost per unit: ATC = TC ÷ Q.
**Average variable cost (AVC)** — variable cost per unit: AVC = VC ÷ Q.
**Average fixed cost (AFC)** — fixed cost per unit: AFC = FC ÷ Q; it **falls continuously** as output rises (fixed cost spread over more units).

## Shapes of the cost curves

- The **marginal cost** curve is generally **U-shaped** (or upward-sloping): as more units are made, diminishing returns make extra units more costly.
- The **average total cost** and **average variable cost** curves are **U-shaped**: average cost first falls (fixed cost spread out) then rises (diminishing returns).
- **AVC lies below ATC**, and the gap between them (AFC) narrows as output rises.
- **Marginal cost cuts both average curves at their lowest point.** When MC is below the average, it pulls the average down; when MC is above the average, it pulls it up.

## Short run and long run

**Short-run cost** — cost when at least one input (and so fixed cost) cannot be changed.
**Long-run cost** — cost when **all inputs can be varied**; there are no fixed costs, so the firm can choose the best plant size.
**Long-run average cost (LRAC) curve** — shows the lowest average cost of producing each output when all inputs can change.

## Economies and diseconomies of scale

**Economies of scale** — larger scale brings **lower average cost** (LRAC slopes down); e.g. a factory making 5,000 clocks at 4 each versus a small factory making 1,000 at 12 each.
**Constant returns to scale** — average cost is unchanged as scale rises (LRAC flat).
**Diseconomies of scale** — a firm grows so large it becomes hard to manage, so **average cost rises** (LRAC slopes up).

## Common errors

- **Thinking fixed cost changes with output.** Fixed cost is the same at every output; only average fixed cost falls.
- **Confusing marginal with average cost.** Marginal cost is the cost of the *next* unit; average cost is cost *per unit* so far.
- **Assuming bigger is always cheaper.** Beyond a point, diseconomies of scale raise average cost.`,
      workedExample: `**Question:** A firm has fixed cost 160. Producing 40 units needs variable cost 160; producing 60 units needs variable cost 240. Find total cost, average total cost and the marginal cost per unit between 40 and 60 units.

**Solution**

*Step 1 — total cost.*
- At 40 units: TC = FC + VC = 160 + 160 = **320**.
- At 60 units: TC = 160 + 240 = **400**.

*Step 2 — average total cost.*
- At 40 units: ATC = 320 ÷ 40 = **8.00**.
- At 60 units: ATC = 400 ÷ 60 = **6.67**.

*Step 3 — marginal cost between 40 and 60 units.* MC = change in TC ÷ change in Q = (400 − 320) ÷ (60 − 40) = 80 ÷ 20 = **4.00 per unit**.

*Step 4 — read the pattern.* Average total cost fell from 8.00 to 6.67 as output rose, and marginal cost (4.00) is below average total cost, so it is pulling the average down.

**Answer:** TC = 320 then 400; ATC = 8.00 then 6.67; marginal cost between them = 4.00 per unit.`,
      quiz: [
        { prompt: "Fixed cost is the cost that", options: ["rises with output", "does not change with output", "is always zero", "equals marginal cost"], correctIndex: 1, explanation: "Fixed cost stays the same at every output." },
        { prompt: "Variable cost is the cost that", options: ["never changes", "rises and falls with output", "is paid at zero output", "equals fixed cost"], correctIndex: 1, explanation: "Variable cost changes with output." },
        { prompt: "Total cost equals", options: ["FC − VC", "FC + VC", "VC − FC", "FC × VC"], correctIndex: 1, explanation: "TC = FC + VC." },
        { prompt: "Marginal cost is the cost of", options: ["all units", "one more unit", "fixed inputs", "the average unit"], correctIndex: 1, explanation: "MC is the extra cost of one more unit." },
        { prompt: "Average total cost equals", options: ["TC ÷ Q", "TC × Q", "FC ÷ VC", "MC × Q"], correctIndex: 0, explanation: "ATC = total cost ÷ quantity." },
        { prompt: "Average fixed cost as output rises", options: ["rises", "falls continuously", "stays fixed", "becomes marginal"], correctIndex: 1, explanation: "Fixed cost spread over more units falls per unit." },
        { prompt: "The marginal cost curve is generally", options: ["horizontal", "U-shaped or upward-sloping", "downward-sloping only", "vertical"], correctIndex: 1, explanation: "Diminishing returns raise MC as output grows." },
        { prompt: "Average total cost and average variable cost curves are", options: ["straight lines", "U-shaped", "always falling", "always rising"], correctIndex: 1, explanation: "They fall then rise — U-shaped." },
        { prompt: "Marginal cost cuts the average cost curves at their", options: ["highest point", "lowest point", "start", "end"], correctIndex: 1, explanation: "MC passes through the minimum of the average curves." },
        { prompt: "When marginal cost is below average cost, the average cost", options: ["rises", "falls", "stays the same", "becomes fixed"], correctIndex: 1, explanation: "A below-average marginal cost pulls the average down." },
        { prompt: "AVC lies", options: ["above ATC", "below ATC", "on ATC", "above MC always"], correctIndex: 1, explanation: "AVC is below ATC by the amount of AFC." },
        { prompt: "In the long run there are", options: ["only fixed costs", "no fixed costs; all inputs vary", "no costs", "no output"], correctIndex: 1, explanation: "All inputs are variable in the long run." },
        { prompt: "The LRAC curve shows the", options: ["highest average cost", "lowest average cost for each output when all inputs vary", "fixed cost", "marginal revenue"], correctIndex: 1, explanation: "LRAC gives the lowest average cost per output." },
        { prompt: "Economies of scale mean that as scale rises, average cost", options: ["rises", "falls", "stays fixed", "becomes zero"], correctIndex: 1, explanation: "Larger scale lowers average cost." },
        { prompt: "A downward-sloping LRAC shows", options: ["diseconomies of scale", "economies of scale", "constant returns", "fixed cost"], correctIndex: 1, explanation: "Falling average cost is economies of scale." },
        { prompt: "A flat LRAC shows", options: ["economies of scale", "constant returns to scale", "diseconomies of scale", "rising fixed cost"], correctIndex: 1, explanation: "Unchanged average cost is constant returns." },
        { prompt: "An upward-sloping LRAC shows", options: ["economies of scale", "constant returns", "diseconomies of scale", "falling marginal cost"], correctIndex: 2, explanation: "Rising average cost is diseconomies of scale." },
        { prompt: "Diseconomies of scale arise mainly because a very large firm becomes", options: ["cheaper", "hard to manage", "more efficient always", "tax-free"], correctIndex: 1, explanation: "Management and communication problems raise cost." },
        { prompt: "Fixed cost of 160 with variable cost 160 gives a total cost of", options: ["0", "160", "320", "480"], correctIndex: 2, explanation: "160 + 160 = 320." },
        { prompt: "If total cost rises from 320 to 400 as output rises by 20, marginal cost per unit is", options: ["2", "4", "8", "80"], correctIndex: 1, explanation: "80 ÷ 20 = 4 per unit." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define fixed cost, variable cost and total cost, and give the relationship between them.", answerKey: "Fixed cost is the cost of fixed inputs and does not change with output. Variable cost is the cost of variable inputs and rises or falls with output. Total cost is fixed cost plus variable cost (TC = FC + VC). Award 3 per definition, 1 for the relationship.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Define marginal cost and average total cost, and give their formulas.", answerKey: "Marginal cost is the cost of producing one more unit: MC = change in total cost ÷ change in output. Average total cost is total cost per unit: ATC = TC ÷ Q. Award 4 per definition with formula.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "A long-run average cost curve that slopes downward shows", options: ["diseconomies of scale", "economies of scale", "constant returns to scale", "rising fixed cost"], correctIndex: 1, answerKey: "Falling average cost as scale rises is economies of scale. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why average total cost curves are U-shaped.", answerKey: "At low output, spreading fixed cost over few units keeps average cost high, so as output rises average fixed cost falls and average total cost falls. Eventually diminishing returns raise variable and marginal cost faster than fixed cost falls, so average total cost rises again — giving a U shape. Award marks for the falling part (fixed cost spread) and the rising part (diminishing returns).", marks: 6 },
        { type: "ESSAY", prompt: "Explain the main short-run cost concepts (fixed, variable, total, average and marginal cost) and their curve shapes, and distinguish short-run from long-run costs including economies of scale.", answerKey: "Award marks for: fixed, variable and total cost defined, 6; average (ATC, AVC, AFC) and marginal cost defined, 6; curve shapes — U-shaped MC/ATC/AVC and falling AFC, with MC cutting averages at their minimum, 8; short run (some cost fixed) vs long run (all inputs variable, LRAC), 5; economies, constant returns and diseconomies of scale, 5. A script omitting the long run should not exceed 20.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 7.3 Costs in the Short Run (cost table) (https://openstax.org/books/principles-economics-3e/pages/7-3-costs-in-the-short-run) and 8.2 How Perfectly Competitive Firms Make Output Decisions (total, average and marginal revenue) (https://openstax.org/books/principles-economics-3e/pages/8-2-how-perfectly-competitive-firms-make-output-decisions)
    {
      slug: "cost-and-revenue-tables-and-curves",
      title: "Deriving and Calculating Cost and Revenue Curves",
      objective:
        "By the end of the topic, learners should be able to build a cost table, plot cost and revenue curves, and calculate total, average and marginal cost and revenue from data.",
      estimatedMinutes: 120,
      notes: `## Building a cost table

From fixed cost, variable cost and output, work out each cost column:
- Total cost = fixed cost + variable cost.
- Marginal cost = change in total cost ÷ change in output.
- Average total cost = total cost ÷ output; average variable cost = variable cost ÷ output.

| Output | Fixed cost | Variable cost | Total cost | Marginal cost | Average total cost | Average variable cost |
| --- | --- | --- | --- | --- | --- | --- |
| 16 | 160 | 80 | 240 | 15.00 | 15.00 | 5.00 |
| 40 | 160 | 160 | 320 | 3.33 | 8.00 | 4.00 |
| 60 | 160 | 240 | 400 | 4.00 | 6.67 | 4.00 |
| 72 | 160 | 320 | 480 | 6.67 | 6.67 | 4.44 |

- Reading across: total cost = fixed + variable; average total cost falls then rises; marginal cost falls then rises.

## Drawing the cost curves

- Plot cost on the vertical axis and output on the horizontal axis.
- The **ATC** and **AVC** curves are U-shaped; **AFC** falls continuously; **MC** is U-shaped and cuts ATC and AVC at their lowest points.

## Revenue concepts

**Total revenue (TR)** — price × quantity sold.
**Average revenue (AR)** — total revenue ÷ quantity; AR equals the price.
**Marginal revenue (MR)** — the change in total revenue from selling one more unit: MR = change in TR ÷ change in Q.
- For a firm that sells every unit at the **same price** (a price taker), marginal revenue is **constant and equal to the price**.

| Price | Quantity | Total revenue | Marginal revenue |
| --- | --- | --- | --- |
| 4 | 1 | 4 | — |
| 4 | 2 | 8 | 4 |
| 4 | 3 | 12 | 4 |
| 4 | 4 | 16 | 4 |

## Putting cost and revenue together

- Profit at any output = total revenue − total cost.
- The firm's best output is where **marginal revenue equals marginal cost (MR = MC)**.

## Common errors

- **Adding fixed cost twice.** Fixed cost is already inside total cost; do not add it again to average or marginal cost.
- **Forgetting marginal cost uses the change.** MC and MR are the *change* in total, divided by the change in output.
- **Reading average as marginal.** Average is total ÷ quantity; marginal is the extra from one more unit.`,
      workedExample: `**Question:** A firm sells at a fixed price of 4. It has fixed cost 160 and variable cost 240 at 60 units. (a) Find total revenue, total cost and profit at 60 units. (b) Find average revenue and marginal revenue. (c) What is average total cost?

**Solution**

*Step 1 — total revenue.* TR = price × quantity = 4 × 60 = **240**.

*Step 2 — total cost.* TC = FC + VC = 160 + 240 = **400**.

*Step 3 — profit.* Profit = TR − TC = 240 − 400 = **−160** (a loss at this output).

*Step 4 — average and marginal revenue.* Average revenue = TR ÷ Q = 240 ÷ 60 = **4**, which equals the price. Because every unit sells at 4, marginal revenue is also **4** (constant for a price taker).

*Step 5 — average total cost.* ATC = TC ÷ Q = 400 ÷ 60 = **6.67**.

**Answer:** At 60 units TR = 240, TC = 400, so the firm makes a loss of 160; AR = MR = 4 (the price); ATC = 6.67 — above the price, which is why there is a loss.`,
      quiz: [
        { prompt: "Total cost in a cost table equals", options: ["fixed cost − variable cost", "fixed cost + variable cost", "variable cost only", "marginal cost × quantity"], correctIndex: 1, explanation: "TC = FC + VC." },
        { prompt: "Marginal cost is calculated as", options: ["total cost ÷ output", "change in total cost ÷ change in output", "fixed cost ÷ output", "price × quantity"], correctIndex: 1, explanation: "MC uses the change in total cost per extra unit." },
        { prompt: "Average total cost equals", options: ["TC ÷ Q", "VC ÷ Q only", "FC + VC", "MC ÷ Q"], correctIndex: 0, explanation: "ATC = total cost ÷ quantity." },
        { prompt: "In the cost table, total cost at 40 units (FC 160, VC 160) is", options: ["160", "240", "320", "400"], correctIndex: 2, explanation: "160 + 160 = 320." },
        { prompt: "Average total cost at 60 units (TC 400) is", options: ["8.00", "6.67", "4.00", "15.00"], correctIndex: 1, explanation: "400 ÷ 60 = 6.67." },
        { prompt: "On a cost diagram, output is on the", options: ["vertical axis", "horizontal axis", "top", "curve"], correctIndex: 1, explanation: "Output is horizontal, cost vertical." },
        { prompt: "The AFC curve", options: ["rises", "falls continuously", "is U-shaped", "is horizontal"], correctIndex: 1, explanation: "Average fixed cost falls as output rises." },
        { prompt: "Marginal cost cuts ATC and AVC at their", options: ["highest points", "lowest points", "starting points", "end points"], correctIndex: 1, explanation: "MC passes through the minima of the average curves." },
        { prompt: "Total revenue equals", options: ["price ÷ quantity", "price × quantity", "quantity − price", "average cost × price"], correctIndex: 1, explanation: "TR = P × Q." },
        { prompt: "Average revenue equals", options: ["TR ÷ Q", "TR × Q", "MC ÷ Q", "price − cost"], correctIndex: 0, explanation: "AR = total revenue ÷ quantity = price." },
        { prompt: "Marginal revenue is the change in total revenue divided by", options: ["price", "the change in quantity", "cost", "average revenue"], correctIndex: 1, explanation: "MR = ΔTR ÷ ΔQ." },
        { prompt: "For a price taker selling at 4, marginal revenue is", options: ["rising", "constant at 4", "zero", "falling"], correctIndex: 1, explanation: "Every unit sells at 4, so MR = 4." },
        { prompt: "In the revenue table, total revenue at 3 units (price 4) is", options: ["4", "8", "12", "16"], correctIndex: 2, explanation: "4 × 3 = 12." },
        { prompt: "Profit at any output equals", options: ["total revenue + total cost", "total revenue − total cost", "average cost − price", "marginal cost − marginal revenue"], correctIndex: 1, explanation: "Profit = TR − TC." },
        { prompt: "A firm's best output is where", options: ["MR = MC", "AR = AFC", "TC = 0", "price = fixed cost"], correctIndex: 0, explanation: "MR = MC maximises profit." },
        { prompt: "If TR = 240 and TC = 400, profit is", options: ["+160", "−160", "+640", "0"], correctIndex: 1, explanation: "240 − 400 = −160, a loss." },
        { prompt: "Average revenue for a price taker equals the", options: ["marginal cost", "price", "fixed cost", "total cost"], correctIndex: 1, explanation: "AR = price for a price taker." },
        { prompt: "A common error is to add fixed cost", options: ["into total cost once", "twice, into average or marginal cost", "never", "to revenue"], correctIndex: 1, explanation: "Fixed cost is already inside total cost." },
        { prompt: "Marginal figures always use the", options: ["total divided by quantity", "change in total divided by change in quantity", "price", "fixed cost"], correctIndex: 1, explanation: "Marginal = change in total ÷ change in quantity." },
        { prompt: "If ATC (6.67) is above the price (4), the firm makes a", options: ["profit", "loss", "normal profit only", "no output"], correctIndex: 1, explanation: "Cost per unit above price means a loss." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Given fixed cost 160 and variable cost 320 at 72 units, calculate total cost, average total cost and average variable cost.", answerKey: "Total cost = 160 + 320 = 480. Average total cost = 480 ÷ 72 = 6.67. Average variable cost = 320 ÷ 72 = 4.44. Award 3 for total cost, 4 for ATC, 3 for AVC.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Define total revenue, average revenue and marginal revenue, with formulas.", answerKey: "Total revenue = price × quantity sold. Average revenue = total revenue ÷ quantity (= price). Marginal revenue = change in total revenue ÷ change in quantity. Award 3 for TR, 3 for AR, 2 for MR.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "For a firm selling every unit at 4, marginal revenue is", options: ["rising with output", "constant at 4", "falling to zero", "equal to average cost"], correctIndex: 1, answerKey: "A price taker's MR equals the constant price of 4. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A firm sells at price 4 and produces 60 units with total cost 400. Find total revenue, profit, and state whether the firm makes a profit or loss.", answerKey: "Total revenue = 4 × 60 = 240. Profit = 240 − 400 = −160, so the firm makes a loss of 160 at this output (average total cost 6.67 exceeds the price 4). Award 2 for TR, 2 for profit, 2 for the loss conclusion.", marks: 6 },
        { type: "ESSAY", prompt: "Explain how a cost table and revenue figures are built and turned into curves, and how they are used to work out a firm's profit-maximising output. Use figures.", answerKey: "Award marks for: building the cost columns — TC = FC + VC, MC = change in TC ÷ change in Q, ATC = TC ÷ Q, 8; plotting U-shaped ATC/AVC/MC and falling AFC, 6; revenue columns — TR = P × Q, AR = price, MR = change in TR ÷ change in Q, 8; profit = TR − TC and the MR = MC rule for best output, 6; a worked numerical illustration, 2. A script without figures should not exceed 18.", marks: 30 },
      ],
    },
  ],
};
