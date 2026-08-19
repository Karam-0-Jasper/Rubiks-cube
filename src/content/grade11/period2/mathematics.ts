import type { PeriodContent } from "@/content/types";

// Grade 11, Semester One, Period II of the MoE Mathematics syllabus:
// Surds and Percentages (surds, simple and compound interest, depreciation
// and hire purchase). Notes rebuilt from published sources (Siyavula).
export const mathematicsG11P2: PeriodContent = {
  grade: 11,
  number: 2,
  title: "Surds and Percentages",
  summary:
    "Period II of the MoE Grade 11 Mathematics syllabus. Learners define, simplify, multiply and divide surds and rationalise denominators, and apply percentage-based financial mathematics: simple and compound interest, the interest formulae, depreciation and hire purchase.",
  topics: [
    // source: Siyavula — Exponents and surds, Grade 11 (https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-05)
    {
      slug: "surds",
      title: "Surds",
      objective:
        "By the end of the topic, learners should be able to define a surd, simplify surds, find products and quotients of surds, and rationalise a denominator.",
      estimatedMinutes: 120,
      notes: `## What a surd is

- A **surd** is a root (such as a square root) that cannot be written as an exact rational number, so it is left in root form.
- √2, √3 and ∛5 are surds; √9 = 3 is not a surd because it works out exactly.
- A surd is written with rational exponents as a^(1/n): the nth root of a.

## Laws of surds

| Law | Rule | Example |
| --- | --- | --- |
| Product | √a × √b = √(ab) | √3 × √12 = √36 = 6 |
| Quotient | √a ÷ √b = √(a/b) | √50 ÷ √2 = √25 = 5 |
| Same surd | √a × √a = a | √7 × √7 = 7 |

## Simplifying a surd

Split off the largest perfect-square factor and take its root:
- √50 = √(25 × 2) = √25 × √2 = 5√2
- √72 = √(36 × 2) = 6√2

## Adding and subtracting

Only **like surds** (the same root) can be combined, like collecting like terms:
- 3√2 + 5√2 = 8√2
- √8 + √2 = 2√2 + √2 = 3√2

## Rationalising the denominator

Remove a surd from the denominator by multiplying top and bottom by that surd:
- 3/√2 = (3 × √2)/(√2 × √2) = 3√2/2

## Common errors

- **√a + √b is not √(a + b)** — √9 + √16 = 3 + 4 = 7, not √25 = 5.
- **Leaving a surd in the denominator** — rationalise it.
- **Combining unlike surds** — 2√3 + 4√5 cannot be simplified further.`,
      workedExample: `**Question:** Simplify √50 + √8 and rationalise 3/√2.

**Solution**

*Step 1 — simplify each surd.*
√50 = √(25 × 2) = 5√2
√8 = √(4 × 2) = 2√2

*Step 2 — add the like surds.*
5√2 + 2√2 = 7√2

*Step 3 — rationalise 3/√2 by multiplying by √2/√2.*
3/√2 = (3√2)/(√2 × √2) = 3√2/2

**Answer: √50 + √8 = 7√2, and 3/√2 = 3√2/2**`,
      quiz: [
        { prompt: "Which of these is a surd?", options: ["√9", "√16", "√5", "√25"], correctIndex: 2, explanation: "√5 has no exact rational value." },
        { prompt: "Simplify √3 × √12.", options: ["√15", "6", "36", "4"], correctIndex: 1, explanation: "√(3×12) = √36 = 6." },
        { prompt: "√7 × √7 =", options: ["7", "14", "√14", "49"], correctIndex: 0, explanation: "√a × √a = a." },
        { prompt: "Simplify √50.", options: ["25√2", "5√2", "2√5", "10√5"], correctIndex: 1, explanation: "√(25×2) = 5√2." },
        { prompt: "Simplify √72.", options: ["6√2", "8√3", "2√6", "36√2"], correctIndex: 0, explanation: "√(36×2) = 6√2." },
        { prompt: "3√2 + 5√2 =", options: ["8√4", "8√2", "15√2", "8"], correctIndex: 1, explanation: "Like surds add: (3+5)√2 = 8√2." },
        { prompt: "Simplify √50 ÷ √2.", options: ["√25", "5", "25", "√48"], correctIndex: 1, explanation: "√(50/2) = √25 = 5." },
        { prompt: "Rationalise 1/√3.", options: ["√3", "√3/3", "3√3", "1/3"], correctIndex: 1, explanation: "Multiply by √3/√3: √3/3." },
        { prompt: "√9 + √16 =", options: ["5", "7", "√25", "25"], correctIndex: 1, explanation: "3 + 4 = 7; roots are not added inside." },
        { prompt: "Simplify √8 + √2.", options: ["√10", "3√2", "2√10", "4√2"], correctIndex: 1, explanation: "√8 = 2√2, so 2√2 + √2 = 3√2." },
        { prompt: "√a × √b equals", options: ["√(a+b)", "√(ab)", "ab", "a + b"], correctIndex: 1, explanation: "The product law." },
        { prompt: "Simplify 2√3 × 4√3.", options: ["24", "8√3", "6√9", "24√3"], correctIndex: 0, explanation: "8 × (√3×√3) = 8 × 3 = 24." },
        { prompt: "Which cannot be simplified further?", options: ["√18", "2√3 + 4√5", "√8", "√50"], correctIndex: 1, explanation: "Unlike surds cannot be combined." },
        { prompt: "Rationalise 5/√5.", options: ["√5", "5√5", "√5/5", "25"], correctIndex: 0, explanation: "5/√5 = 5√5/5 = √5." },
        { prompt: "Simplify √20.", options: ["2√5", "4√5", "5√2", "10√2"], correctIndex: 0, explanation: "√(4×5) = 2√5." },
        { prompt: "7√2 − 3√2 =", options: ["4", "4√2", "10√2", "4√4"], correctIndex: 1, explanation: "(7−3)√2 = 4√2." },
        { prompt: "√6 × √6 =", options: ["12", "6", "√12", "36"], correctIndex: 1, explanation: "√a × √a = a = 6." },
        { prompt: "√48 simplifies to", options: ["4√3", "3√4", "16√3", "2√12"], correctIndex: 0, explanation: "√(16×3) = 4√3." },
        { prompt: "Why rationalise a denominator?", options: ["to make it larger", "to remove the surd from the bottom", "to add surds", "it is optional and pointless"], correctIndex: 1, explanation: "It writes the fraction with a rational denominator." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Simplify (a) √98 and (b) √27 + √12.", answerKey: "(a) √98 = √(49×2) = 7√2. (b) √27 = 3√3 and √12 = 2√3, so 3√3 + 2√3 = 5√3. Award 3 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Rationalise the denominator of 6/√3.", answerKey: "6/√3 = (6√3)/(√3×√3) = 6√3/3 = 2√3. Award 3 marks for multiplying by √3/√3, 2 for simplifying, 1 for 2√3.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Simplify √5 × √20.", options: ["√25", "10", "5√4", "100"], correctIndex: 1, answerKey: "√(5×20) = √100 = 10. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Show that √32 − √8 = 2√2.", answerKey: "√32 = √(16×2) = 4√2 and √8 = √(4×2) = 2√2. So 4√2 − 2√2 = 2√2. Award 2 marks for each simplification, 2 for the subtraction.", marks: 6 },
        { type: "ESSAY", prompt: "Explain what a surd is, why √9 is not a surd, state the product and quotient laws of surds, and use them to simplify (√18 × √2) ÷ √9.", answerKey: "A surd is an irrational root left in root form because it has no exact rational value; √9 = 3 is rational, so it is not a surd. Product law: √a × √b = √(ab); quotient law: √a ÷ √b = √(a/b). Simplify: √18 × √2 = √36 = 6; √9 = 3; 6 ÷ 3 = 2. Award 3 marks for the definition and √9 point, 3 for the laws, 4 for the correct simplification giving 2.", marks: 10 },
      ],
    },
    // source: Siyavula — Finance, growth and decay, Grade 11 (https://www.siyavula.com/read/za/mathematics/grade-11/finance-growth-and-decay/09-finance-growth-and-decay-02)
    {
      slug: "simple-and-compound-interest",
      title: "Simple and Compound Interest",
      objective:
        "By the end of the topic, learners should be able to use the simple-interest and compound-interest formulae, and compare the growth they produce.",
      estimatedMinutes: 120,
      notes: `## Interest

- **Interest** is the money paid for the use of borrowed or invested money.
- **P** is the principal (starting amount), **i** is the interest rate per period as a decimal, **n** is the number of periods, and **A** is the final amount (accumulated value).

## Simple interest

- The interest is a **fixed amount each period**, calculated on the original principal only.
- **A = P(1 + i·n)**
- The interest earned is P·i·n.

## Compound interest

- The interest is added to the balance, so each period's interest is calculated on the **growing total** — interest on interest.
- **A = P(1 + i)ⁿ**
- This is exponential growth, so compound interest gives a larger amount than simple interest over the same time.

## Comparing the two

| Feature | Simple interest | Compound interest |
| --- | --- | --- |
| Formula | A = P(1 + i·n) | A = P(1 + i)ⁿ |
| Interest is on | original principal only | growing balance |
| Growth pattern | linear | exponential |

Example (P = 1000, i = 0.08, n = 3):
- Simple: A = 1000(1 + 0.08 × 3) = 1000 × 1.24 = 1240
- Compound: A = 1000(1.08)³ = 1000 × 1.259712 = 1259.71

## Converting a rate

- A percentage rate is written as a decimal: 8% = 0.08, 12.5% = 0.125.

## Common errors

- **Using the percentage, not the decimal** — 8% must become 0.08 in the formula.
- **Multiplying instead of using a power for compound interest** — the exponent is n.
- **Forgetting to subtract P** when asked only for the interest earned.`,
      workedExample: `**Question:** R5 000 is invested at 10% per year for 3 years. Find the final amount under (a) simple interest and (b) compound interest.

**Solution**

*Step 1 — write down the values.* P = 5000, i = 0.10, n = 3.

*Step 2 — simple interest, A = P(1 + i·n).*
A = 5000(1 + 0.10 × 3) = 5000(1 + 0.30) = 5000 × 1.30 = R6 500

*Step 3 — compound interest, A = P(1 + i)ⁿ.*
A = 5000(1.10)³ = 5000 × 1.331 = R6 655

**Answer: (a) R6 500 (b) R6 655** — compound interest earns R155 more.`,
      quiz: [
        { prompt: "In the interest formulae, P stands for", options: ["percentage", "principal", "period", "profit"], correctIndex: 1, explanation: "P is the starting amount." },
        { prompt: "The simple-interest formula is", options: ["A = P(1 + i)ⁿ", "A = P(1 + i·n)", "A = Pin", "A = P + n"], correctIndex: 1, explanation: "Simple interest grows linearly." },
        { prompt: "The compound-interest formula is", options: ["A = P(1 + i·n)", "A = P(1 + i)ⁿ", "A = Pⁿ", "A = P + iⁿ"], correctIndex: 1, explanation: "The rate applies to the growing balance." },
        { prompt: "Write 6% as a decimal.", options: ["6.0", "0.6", "0.06", "0.006"], correctIndex: 2, explanation: "6% = 6/100 = 0.06." },
        { prompt: "Simple interest on R2000 at 5% for 4 years is", options: ["R100", "R400", "R500", "R2400"], correctIndex: 1, explanation: "P·i·n = 2000 × 0.05 × 4 = 400." },
        { prompt: "Which grows faster over time?", options: ["simple interest", "compound interest", "they are equal", "neither grows"], correctIndex: 1, explanation: "Compound interest is exponential." },
        { prompt: "A = 1000(1 + 0.08 × 3) equals", options: ["1080", "1240", "1259.71", "1024"], correctIndex: 1, explanation: "1000 × 1.24 = 1240." },
        { prompt: "A = 1000(1.08)³ equals (to 2 dp)", options: ["1240.00", "1259.71", "1080.00", "1331.00"], correctIndex: 1, explanation: "1000 × 1.259712 = 1259.71." },
        { prompt: "Compound interest means interest is earned on", options: ["the principal only", "the growing balance", "nothing", "the rate"], correctIndex: 1, explanation: "Interest is earned on interest too." },
        { prompt: "In A = P(1 + i)ⁿ, n is the", options: ["principal", "number of periods", "rate", "amount"], correctIndex: 1, explanation: "n counts the compounding periods." },
        { prompt: "R500 at 10% simple interest for 2 years gives A =", options: ["R550", "R600", "R605", "R1000"], correctIndex: 1, explanation: "500(1 + 0.10×2) = 500 × 1.2 = 600." },
        { prompt: "The interest earned is found by", options: ["A × P", "A − P", "P − A", "A + P"], correctIndex: 1, explanation: "Interest = final amount − principal." },
        { prompt: "12.5% as a decimal is", options: ["1.25", "0.125", "12.5", "0.0125"], correctIndex: 1, explanation: "12.5/100 = 0.125." },
        { prompt: "R1000 at 20% compound for 2 years gives A =", options: ["R1200", "R1400", "R1440", "R1210"], correctIndex: 2, explanation: "1000(1.2)² = 1000 × 1.44 = 1440." },
        { prompt: "Simple-interest growth is described as", options: ["exponential", "linear", "quadratic", "random"], correctIndex: 1, explanation: "It adds a fixed amount each period." },
        { prompt: "If P = 4000, i = 0.05, n = 1, both formulae give A =", options: ["4000", "4200", "4400", "4050"], correctIndex: 1, explanation: "For n = 1 both give 4000 × 1.05 = 4200." },
        { prompt: "Over 3 years at the same rate, compound interest gives", options: ["less than simple", "the same as simple", "more than simple", "zero"], correctIndex: 2, explanation: "Interest on interest makes it larger." },
        { prompt: "A = P(1 + i·n) with P = 800, i = 0.07, n = 5 gives", options: ["R1080", "R1000", "R1120", "R856"], correctIndex: 0, explanation: "800(1 + 0.35) = 800 × 1.35 = 1080." },
        { prompt: "The main difference between the two formulae is that compounding uses", options: ["a product i·n", "a power n", "no rate", "no principal"], correctIndex: 1, explanation: "(1 + i) is raised to the power n." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "R8 000 is invested at 9% per year for 4 years. Find the final amount under simple interest.", answerKey: "A = P(1 + i·n) = 8000(1 + 0.09 × 4) = 8000(1 + 0.36) = 8000 × 1.36 = R10 880. Award 2 marks for substitution, 2 for 1.36, 2 for R10 880.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "R3 000 is invested at 10% per year compounded annually for 2 years. Find the final amount and the interest earned.", answerKey: "A = 3000(1.10)² = 3000 × 1.21 = R3 630. Interest = 3630 − 3000 = R630. Award 3 marks for the amount, 3 for the interest.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "R2 000 at 15% simple interest for 3 years gives a final amount of", options: ["R2 300", "R2 900", "R3 041", "R2 600"], correctIndex: 1, answerKey: "2000(1 + 0.15×3) = 2000 × 1.45 = R2 900. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Convert the rates to decimals and state the correct formula: (a) 7.5% compound, (b) 4% simple.", answerKey: "(a) 0.075, formula A = P(1.075)ⁿ. (b) 0.04, formula A = P(1 + 0.04n). Award 3 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the difference between simple and compound interest, and by computing both for R10 000 at 8% over 2 years, show which gives more and by how much.", answerKey: "Simple interest is calculated only on the original principal, giving linear growth; compound interest is calculated on the growing balance, giving exponential growth. Simple: 10000(1 + 0.08×2) = 10000 × 1.16 = R11 600. Compound: 10000(1.08)² = 10000 × 1.1664 = R11 664. Compound gives R64 more. Award 4 marks for the explanation, 3 for each calculation minus 1, i.e. 3 for simple, 3 for compound; final answer difference R64.", marks: 10 },
      ],
    },
    // source: Siyavula — Simple and compound depreciation, Grade 11 (https://www.siyavula.com/read/za/mathematics/grade-11/finance-growth-and-decay/09-finance-growth-and-decay-02)
    {
      slug: "depreciation-and-hire-purchase",
      title: "Depreciation and Hire Purchase",
      objective:
        "By the end of the topic, learners should be able to calculate straight-line and reducing-balance depreciation and work out the cost of a hire-purchase agreement.",
      estimatedMinutes: 110,
      notes: `## Depreciation

- **Depreciation** is the loss in value of an asset (car, machine, phone) over time.
- **P** is the original value, **i** the depreciation rate as a decimal, **n** the number of years, **A** the book (depreciated) value.

## Straight-line (simple) depreciation

- A **fixed amount** is written off each year, based on the original value.
- **A = P(1 − i·n)**
- The value decreases linearly and can reach zero.

## Reducing-balance (compound) depreciation

- A fixed **percentage of the current value** is written off each year, so the amount lost shrinks over time.
- **A = P(1 − i)ⁿ**
- The value decreases exponentially and approaches, but never quite reaches, zero.

| Method | Formula | Amount lost each year |
| --- | --- | --- |
| Straight-line | A = P(1 − i·n) | the same every year |
| Reducing-balance | A = P(1 − i)ⁿ | smaller each year |

Example: a car worth R240 000 depreciating at 15% straight-line for 5 years:
A = 240000(1 − 0.15 × 5) = 240000 × 0.25 = R60 000.

## Hire purchase

- **Hire purchase** buys an item by paying a **deposit** and then equal **instalments**, with **simple interest** charged on the amount borrowed.
- Amount borrowed = cash price − deposit.
- Interest = (amount borrowed) × i × n; total to repay = amount borrowed + interest.
- Total cost = deposit + total repaid, which is more than the cash price.

## Common errors

- **Using + instead of − in depreciation** — value falls, so (1 − i).
- **Charging hire-purchase interest on the full price** — interest is only on the borrowed balance (price − deposit).
- **Mixing straight-line and reducing-balance formulae.**`,
      workedExample: `**Question:** A machine costing R80 000 depreciates on a reducing balance at 20% per year. Find its value after 3 years.

**Solution**

*Step 1 — write down the values.* P = 80000, i = 0.20, n = 3.

*Step 2 — use the reducing-balance formula A = P(1 − i)ⁿ.*
A = 80000(1 − 0.20)³ = 80000(0.8)³

*Step 3 — evaluate the power.*
(0.8)³ = 0.512

*Step 4 — multiply.*
A = 80000 × 0.512 = R40 960

**Answer: R40 960**`,
      quiz: [
        { prompt: "Depreciation is", options: ["a gain in value", "a loss in value over time", "interest earned", "a deposit"], correctIndex: 1, explanation: "An asset loses value." },
        { prompt: "The straight-line depreciation formula is", options: ["A = P(1 − i)ⁿ", "A = P(1 − i·n)", "A = P(1 + i·n)", "A = Pin"], correctIndex: 1, explanation: "A fixed amount is lost each year." },
        { prompt: "The reducing-balance depreciation formula is", options: ["A = P(1 − i·n)", "A = P(1 − i)ⁿ", "A = P(1 + i)ⁿ", "A = P − n"], correctIndex: 1, explanation: "A percentage of the current value is lost." },
        { prompt: "R240 000 at 15% straight-line for 5 years gives", options: ["R120 000", "R60 000", "R180 000", "R36 000"], correctIndex: 1, explanation: "240000(1 − 0.75) = 240000 × 0.25 = 60000." },
        { prompt: "In reducing-balance depreciation, the amount lost each year", options: ["stays the same", "gets smaller", "gets larger", "is zero"], correctIndex: 1, explanation: "It is a percentage of a shrinking value." },
        { prompt: "R80 000 at 20% reducing-balance for 3 years gives", options: ["R32 000", "R40 960", "R51 200", "R48 000"], correctIndex: 1, explanation: "80000 × 0.8³ = 80000 × 0.512 = 40960." },
        { prompt: "Straight-line depreciation produces a value that decreases", options: ["exponentially", "linearly", "randomly", "not at all"], correctIndex: 1, explanation: "The same amount is lost yearly." },
        { prompt: "Hire purchase charges interest on", options: ["the full cash price", "the amount borrowed (price − deposit)", "the deposit only", "nothing"], correctIndex: 1, explanation: "Interest applies to the borrowed balance." },
        { prompt: "Hire purchase usually uses", options: ["compound interest", "simple interest", "no interest", "depreciation"], correctIndex: 1, explanation: "Instalments carry simple interest." },
        { prompt: "A phone costs R6 000 with a R1 000 deposit. The amount borrowed is", options: ["R7 000", "R6 000", "R5 000", "R1 000"], correctIndex: 2, explanation: "6000 − 1000 = 5000." },
        { prompt: "In the depreciation formula, i is written as", options: ["a percentage", "a decimal", "a whole number", "a fraction of n"], correctIndex: 1, explanation: "18% becomes 0.18." },
        { prompt: "R10 000 at 10% straight-line for 4 years gives", options: ["R6 561", "R6 000", "R4 000", "R9 000"], correctIndex: 1, explanation: "10000(1 − 0.10×4) = 10000 × 0.6 = 6000." },
        { prompt: "Reducing-balance value approaches but never reaches", options: ["the original value", "zero", "double", "the deposit"], correctIndex: 1, explanation: "A shrinking percentage never hits zero." },
        { prompt: "Total hire-purchase cost compared with the cash price is", options: ["less", "the same", "more", "zero"], correctIndex: 2, explanation: "Interest makes it more expensive." },
        { prompt: "A car worth R100 000 loses 25% straight-line per year. After 2 years it is worth", options: ["R56 250", "R50 000", "R75 000", "R25 000"], correctIndex: 1, explanation: "100000(1 − 0.25×2) = 100000 × 0.5 = 50000." },
        { prompt: "Which formula uses a power?", options: ["straight-line", "reducing-balance", "both", "neither"], correctIndex: 1, explanation: "(1 − i) is raised to the power n." },
        { prompt: "Interest of R5 000 borrowed at 12% for 2 years (simple) is", options: ["R600", "R1 000", "R1 200", "R1 440"], correctIndex: 2, explanation: "5000 × 0.12 × 2 = 1200." },
        { prompt: "Straight-line depreciation can eventually make the value", options: ["negative and beyond", "exactly zero", "grow", "constant"], correctIndex: 1, explanation: "The fixed reduction can reach zero." },
        { prompt: "R6 000 phone, R1 000 deposit, 15% simple interest for 2 years. Interest charged is", options: ["R900", "R1 500", "R1 800", "R1 200"], correctIndex: 1, explanation: "Borrowed 5000 × 0.15 × 2 = 1500." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "A laptop costing R12 000 depreciates on a straight-line basis at 20% per year. Find its value after 3 years.", answerKey: "A = P(1 − i·n) = 12000(1 − 0.20 × 3) = 12000(1 − 0.60) = 12000 × 0.40 = R4 800. Award 2 marks for substitution, 2 for 0.40, 2 for R4 800.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "A vehicle worth R150 000 depreciates on a reducing balance at 10% per year. Find its value after 2 years.", answerKey: "A = P(1 − i)ⁿ = 150000(0.9)² = 150000 × 0.81 = R121 500. Award 3 marks for the setup, 3 for R121 500.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "R200 000 depreciating at 20% reducing-balance is worth what after 2 years?", options: ["R120 000", "R128 000", "R160 000", "R144 000"], correctIndex: 1, answerKey: "200000 × 0.8² = 200000 × 0.64 = R128 000. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A fridge has a cash price of R8 000. On hire purchase a customer pays a R2 000 deposit and simple interest of 12% per year for 2 years on the balance. Find the total cost.", answerKey: "Borrowed = 8000 − 2000 = 6000. Interest = 6000 × 0.12 × 2 = 1440. Repaid = 6000 + 1440 = 7440. Total cost = deposit + repaid = 2000 + 7440 = R9 440. Award 2 marks for the balance, 2 for interest, 2 for the total.", marks: 6 },
        { type: "ESSAY", prompt: "Compare straight-line and reducing-balance depreciation, and for an asset worth R50 000 depreciating at 20% per year for 3 years, calculate the book value under each method.", answerKey: "Straight-line writes off a fixed amount (based on the original value) each year, so value falls linearly and can reach zero; reducing-balance writes off a fixed percentage of the current value, so value falls exponentially and approaches zero. Straight-line: 50000(1 − 0.20×3) = 50000 × 0.40 = R20 000. Reducing-balance: 50000(0.8)³ = 50000 × 0.512 = R25 600. Award 4 marks for the comparison, 3 for each calculation.", marks: 10 },
      ],
    },
  ],
};
