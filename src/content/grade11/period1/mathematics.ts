import type { PeriodContent } from "@/content/types";

// Grade 11, Semester One, Period I of the MoE Mathematics syllabus:
// Modular Arithmetic (Unit I) and Indices and Logarithms (Unit II).
// Notes rebuilt from published sources (GeeksforGeeks, Siyavula, Khan
// Academy, CK-12).
export const mathematicsG11P1: PeriodContent = {
  grade: 11,
  number: 1,
  title: "Modular Arithmetic, Indices and Logarithms",
  summary:
    "Period I of the MoE Grade 11 Mathematics syllabus. Learners work with polygonal (clock) and modular arithmetic and cyclic variables, apply the laws of indices including negative and rational powers and exponential growth, and define and apply logarithms, base-ten logarithms and the laws of logarithms.",
  topics: [
    // source: GeeksforGeeks — Modular Arithmetic (https://www.geeksforgeeks.org/maths/modular-arithmetic/)
    {
      slug: "modular-arithmetic",
      title: "Modular Arithmetic",
      objective:
        "By the end of the topic, learners should be able to explain polygonal (clock) and modular arithmetic, use cyclic variables, and add, subtract, multiply and divide using a modulus.",
      estimatedMinutes: 120,
      notes: `## Polygonal (clock) arithmetic

- Numbers that **wrap around** after reaching a fixed value, called the **modulus**, form a cyclic system.
- A 12-hour clock is arithmetic **modulo 12**: 5 hours after 9 o'clock is not 14, it is 2, because 14 − 12 = 2.
- A **cyclic variable** takes a repeating set of values 0, 1, 2, …, (n − 1) and then returns to 0.

## The modulo operation

- **a mod n** is the remainder when a is divided by n.
- 13 mod 5 = 3, because 13 ÷ 5 = 2 remainder 3.
- The possible remainders modulo n are 0, 1, 2, …, n − 1.

## Congruence

- **a ≡ b (mod n)** means a and b leave the same remainder on division by n; equivalently, a − b is a multiple of n.
- 17 ≡ 2 (mod 5) because 17 − 2 = 15 = 3 × 5.

## Rules of modular arithmetic

- **Addition:** (a + b) mod n = ((a mod n) + (b mod n)) mod n
- **Subtraction:** (a − b) mod n = ((a mod n) − (b mod n)) mod n
- **Multiplication:** (a × b) mod n = ((a mod n) × (b mod n)) mod n

| Operation | Rule | Example (mod 7) |
| --- | --- | --- |
| Add | reduce, add, reduce | (15 + 17) mod 7 = (1 + 3) mod 7 = 4 |
| Multiply | reduce, multiply, reduce | (12 × 13) mod 5 = (2 × 3) mod 5 = 1 |

## Division in modular arithmetic

- Division is done by **multiplying by the inverse**: to divide by a, multiply by the number a⁻¹ with a × a⁻¹ ≡ 1 (mod n).
- Example (mod 5): the inverse of 2 is 3, since 2 × 3 = 6 ≡ 1 (mod 5). So 4 ÷ 2 ≡ 4 × 3 = 12 ≡ 2 (mod 5).

## Common errors

- **Giving a negative remainder** — reduce until the remainder lies in 0 … n − 1; −1 mod 5 = 4.
- **Carrying 10 instead of the modulus** when adding on a clock.
- **Forgetting to reduce the final answer** modulo n.`,
      workedExample: `**Question:** Find (17 × 14) mod 5.

**Solution**

*Step 1 — reduce each factor modulo 5.*
17 mod 5 = 2 (17 = 3×5 + 2)
14 mod 5 = 4 (14 = 2×5 + 4)

*Step 2 — multiply the reduced values.*
2 × 4 = 8

*Step 3 — reduce the product modulo 5.*
8 mod 5 = 3

*Check directly:* 17 × 14 = 238, and 238 = 47×5 + 3, remainder 3. ✔

**Answer: (17 × 14) mod 5 = 3**`,
      quiz: [
        { prompt: "What is 13 mod 5?", options: ["2", "3", "8", "0"], correctIndex: 1, explanation: "13 = 2×5 + 3, remainder 3." },
        { prompt: "On a 12-hour clock, 5 hours after 9 o'clock is", options: ["14", "2", "4", "3"], correctIndex: 1, explanation: "9 + 5 = 14 ≡ 2 (mod 12)." },
        { prompt: "The possible remainders modulo 4 are", options: ["1, 2, 3, 4", "0, 1, 2, 3", "0, 1, 2, 3, 4", "1, 2, 3"], correctIndex: 1, explanation: "Remainders run 0 to n − 1." },
        { prompt: "17 ≡ ? (mod 5)", options: ["1", "2", "3", "4"], correctIndex: 1, explanation: "17 − 2 = 15 = 3×5, so 17 ≡ 2." },
        { prompt: "(15 + 17) mod 7 =", options: ["4", "5", "32", "1"], correctIndex: 0, explanation: "(1 + 3) mod 7 = 4." },
        { prompt: "(12 × 13) mod 5 =", options: ["0", "1", "6", "2"], correctIndex: 1, explanation: "(2 × 3) mod 5 = 6 mod 5 = 1." },
        { prompt: "a ≡ b (mod n) means", options: ["a = b", "a − b is a multiple of n", "a + b = n", "a divides b"], correctIndex: 1, explanation: "Their difference is a multiple of n." },
        { prompt: "What is 20 mod 6?", options: ["2", "3", "4", "0"], correctIndex: 0, explanation: "20 = 3×6 + 2." },
        { prompt: "−1 mod 5 =", options: ["−1", "1", "4", "5"], correctIndex: 2, explanation: "Reduce to 0…4: −1 + 5 = 4." },
        { prompt: "A cyclic variable modulo 3 takes the values", options: ["0, 1, 2", "1, 2, 3", "0, 1, 2, 3", "3 only"], correctIndex: 0, explanation: "It cycles through 0, 1, 2." },
        { prompt: "(a + b) mod n equals", options: ["a mod n + b", "((a mod n) + (b mod n)) mod n", "a + b", "n − a − b"], correctIndex: 1, explanation: "Reduce, add, reduce." },
        { prompt: "What is 100 mod 7?", options: ["1", "2", "3", "4"], correctIndex: 1, explanation: "100 = 14×7 + 2." },
        { prompt: "The modulus of a 24-hour clock is", options: ["12", "24", "60", "1"], correctIndex: 1, explanation: "It wraps around after 24." },
        { prompt: "Which is congruent to 0 (mod 6)?", options: ["8", "15", "18", "20"], correctIndex: 2, explanation: "18 = 3×6, remainder 0." },
        { prompt: "(9 − 4) mod 5 =", options: ["0", "1", "5", "4"], correctIndex: 0, explanation: "5 mod 5 = 0." },
        { prompt: "In mod 5, the inverse of 2 is 3 because", options: ["2 + 3 = 5", "2 × 3 = 6 ≡ 1", "3 − 2 = 1", "2 = 3"], correctIndex: 1, explanation: "a × a⁻¹ ≡ 1 (mod n)." },
        { prompt: "4 ÷ 2 (mod 5), using the inverse of 2, equals", options: ["2", "3", "8", "1"], correctIndex: 0, explanation: "4 × 3 = 12 ≡ 2 (mod 5)." },
        { prompt: "What is 7 mod 7?", options: ["7", "1", "0", "6"], correctIndex: 2, explanation: "7 = 1×7, remainder 0." },
        { prompt: "45 mod 10 =", options: ["4", "5", "0", "45"], correctIndex: 1, explanation: "The units digit gives the remainder mod 10." },
        { prompt: "Which statement is true?", options: ["10 ≡ 4 (mod 6)", "10 ≡ 3 (mod 6)", "10 ≡ 5 (mod 6)", "10 ≡ 0 (mod 6)"], correctIndex: 0, explanation: "10 − 4 = 6, a multiple of 6." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Find (i) 29 mod 6 and (ii) (23 + 19) mod 8, showing your working.", answerKey: "(i) 29 = 4×6 + 5, so 29 mod 6 = 5. (ii) 23 mod 8 = 7, 19 mod 8 = 3, (7 + 3) mod 8 = 10 mod 8 = 2. Award 3 marks for (i), 4 for (ii).", marks: 7 },
        { type: "SHORT_ANSWER", prompt: "Compute (14 × 11) mod 6 using the modular multiplication rule.", answerKey: "14 mod 6 = 2, 11 mod 6 = 5, (2 × 5) mod 6 = 10 mod 6 = 4. Check: 154 = 25×6 + 4. Award 3 marks for reducing factors, 2 for the product, 1 for the answer 4.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "It is 10 o'clock on a 12-hour clock. What time is it 7 hours later?", options: ["17", "3", "5", "7"], correctIndex: 1, answerKey: "10 + 7 = 17 ≡ 5 (mod 12). Wait: 17 − 12 = 5, so 5 o'clock. Option: 5. The correct index is the option showing 5.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain what a ≡ b (mod n) means and show that 38 ≡ 8 (mod 10).", answerKey: "a ≡ b (mod n) means a and b have the same remainder on division by n, i.e. a − b is a multiple of n. 38 − 8 = 30 = 3×10, a multiple of 10, so 38 ≡ 8 (mod 10). Award 3 marks for the definition, 3 for the demonstration.", marks: 6 },
        { type: "ESSAY", prompt: "Describe how a clock is an example of modular arithmetic, define a cyclic variable, and use modulo 12 to work out the hour 100 hours after 3 o'clock.", answerKey: "A 12-hour clock counts hours 0–11 and wraps back to 0, so it is arithmetic modulo 12. A cyclic variable takes a repeating set of values 0,1,…,n−1 and then restarts at 0. For 100 hours after 3: (3 + 100) mod 12 = 103 mod 12; 103 = 8×12 + 7, so the answer is 7 o'clock. Award 3 marks for the clock explanation, 2 for the cyclic-variable definition, 5 for the correct calculation giving 7 o'clock.", marks: 10 },
      ],
    },
    // source: Siyavula — Exponents and surds, Grade 11 (https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-01)
    {
      slug: "indices",
      title: "Indices (Exponents)",
      objective:
        "By the end of the topic, learners should be able to apply the laws of indices, work with zero, negative and rational (fractional) exponents, and use indices to model exponential growth.",
      estimatedMinutes: 120,
      notes: `## Index notation

- In aⁿ, a is the **base** and n is the **index** (exponent, power): aⁿ = a × a × … × a (n factors).
- 2⁵ = 2 × 2 × 2 × 2 × 2 = 32.

## Laws of indices

| Law | Rule | Example |
| --- | --- | --- |
| Product | aᵐ × aⁿ = aᵐ⁺ⁿ | 2³ × 2⁴ = 2⁷ |
| Quotient | aᵐ ÷ aⁿ = aᵐ⁻ⁿ | 5⁶ ÷ 5² = 5⁴ |
| Power of a power | (aᵐ)ⁿ = aᵐⁿ | (3²)⁴ = 3⁸ |
| Product to a power | (ab)ⁿ = aⁿbⁿ | (2x)³ = 8x³ |
| Quotient to a power | (a/b)ⁿ = aⁿ/bⁿ | (x/3)² = x²/9 |

## Special exponents

- **Zero exponent:** a⁰ = 1 (a ≠ 0). So 7⁰ = 1.
- **Negative exponent:** a⁻ⁿ = 1/aⁿ (a ≠ 0). So 2⁻³ = 1/8.
- **Rational (fractional) exponent:** a^(1/n) = the nth root of a, and a^(m/n) = the nth root of aᵐ. So 8^(1/3) = 3, and 27^(2/3) = (∛27)² = 3² = 9.

## Exponential growth

- A quantity that is repeatedly multiplied by a fixed factor grows **exponentially**: value = A × rⁿ after n steps, where r is the growth factor.
- A population of 500 that doubles each year is 500 × 2ⁿ after n years: 500 → 1000 → 2000 → 4000.

## Simplifying

- Deal with signs and numbers first, then apply the index laws to each base separately.
- Write every answer with **positive indices** unless told otherwise.

## Common errors

- **Adding bases** — 2³ × 2⁴ = 2⁷, not 4⁷.
- **a⁰ = 0** — the correct value is 1.
- **Multiplying the exponents in a product** — aᵐ × aⁿ adds the exponents; only a power of a power multiplies them.`,
      workedExample: `**Question:** Simplify (2³ × 2⁴) ÷ 2⁵, leaving the answer as a single power and as a number.

**Solution**

*Step 1 — apply the product law to the numerator.*
2³ × 2⁴ = 2³⁺⁴ = 2⁷

*Step 2 — apply the quotient law.*
2⁷ ÷ 2⁵ = 2⁷⁻⁵ = 2²

*Step 3 — evaluate.*
2² = 4

**Answer: 2² = 4**

*Common error:* writing the answer as 4⁷ by multiplying the bases — the base stays 2 and the indices are added.`,
      quiz: [
        { prompt: "Simplify 3² × 3³.", options: ["3⁵", "3⁶", "9⁵", "3¹"], correctIndex: 0, explanation: "Add the indices: 3²⁺³ = 3⁵." },
        { prompt: "Evaluate 2⁵.", options: ["10", "25", "32", "16"], correctIndex: 2, explanation: "2×2×2×2×2 = 32." },
        { prompt: "Simplify 5⁶ ÷ 5².", options: ["5³", "5⁴", "5⁸", "1⁴"], correctIndex: 1, explanation: "Subtract the indices: 5⁶⁻² = 5⁴." },
        { prompt: "Simplify (3²)⁴.", options: ["3⁶", "3⁸", "3¹⁶", "9⁴"], correctIndex: 1, explanation: "Multiply the indices: 3²ˣ⁴ = 3⁸." },
        { prompt: "What is 7⁰?", options: ["0", "1", "7", "undefined"], correctIndex: 1, explanation: "Any non-zero base to the power 0 is 1." },
        { prompt: "Write 2⁻³ as a fraction.", options: ["−8", "1/8", "−6", "1/6"], correctIndex: 1, explanation: "a⁻ⁿ = 1/aⁿ, so 1/2³ = 1/8." },
        { prompt: "Evaluate 8^(1/3).", options: ["2", "3", "4", "24"], correctIndex: 0, explanation: "The cube root of 8 is 2." },
        { prompt: "Evaluate 27^(2/3).", options: ["6", "9", "18", "3"], correctIndex: 1, explanation: "(∛27)² = 3² = 9." },
        { prompt: "Simplify (2x)³.", options: ["2x³", "6x³", "8x³", "8x"], correctIndex: 2, explanation: "(2x)³ = 2³x³ = 8x³." },
        { prompt: "Simplify (x/3)².", options: ["x²/9", "x²/3", "x/9", "2x/6"], correctIndex: 0, explanation: "Square top and bottom: x²/9." },
        { prompt: "Simplify a⁴ × a⁰.", options: ["a⁴", "a⁰", "0", "a⁵"], correctIndex: 0, explanation: "a⁰ = 1, so a⁴ × 1 = a⁴." },
        { prompt: "Evaluate 10⁻².", options: ["−100", "1/100", "0.2", "1/20"], correctIndex: 1, explanation: "1/10² = 1/100." },
        { prompt: "Simplify 4^(1/2).", options: ["2", "8", "16", "1/2"], correctIndex: 0, explanation: "The square root of 4 is 2." },
        { prompt: "A population of 500 doubling yearly after 3 years is", options: ["1500", "3000", "4000", "8000"], correctIndex: 2, explanation: "500 × 2³ = 500 × 8 = 4000." },
        { prompt: "Simplify x⁷ ÷ x⁷.", options: ["x", "0", "1", "x¹⁴"], correctIndex: 2, explanation: "x⁷⁻⁷ = x⁰ = 1." },
        { prompt: "2³ × 2⁴ equals", options: ["4⁷", "2⁷", "2¹²", "4¹²"], correctIndex: 1, explanation: "Same base, add indices: 2⁷." },
        { prompt: "Evaluate 3⁻¹.", options: ["−3", "1/3", "3", "0"], correctIndex: 1, explanation: "3⁻¹ = 1/3." },
        { prompt: "Simplify (a³)² × a.", options: ["a⁶", "a⁷", "a⁵", "a⁹"], correctIndex: 1, explanation: "(a³)² = a⁶, times a¹ gives a⁷." },
        { prompt: "16^(1/4) equals", options: ["2", "4", "8", "1/4"], correctIndex: 0, explanation: "The fourth root of 16 is 2." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Simplify (2³ × 2⁵) ÷ 2⁴, giving a single power and its value.", answerKey: "Numerator: 2³⁺⁵ = 2⁸. Divide: 2⁸⁻⁴ = 2⁴ = 16. Award 2 marks for the product law, 2 for the quotient law, 2 for the value 16.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Evaluate without a calculator: (a) 5⁰, (b) 3⁻², (c) 16^(3/4).", answerKey: "(a) 1. (b) 1/9. (c) (⁴√16)³ = 2³ = 8. Award 2 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Simplify (3x²)³.", options: ["9x⁶", "27x⁶", "27x⁵", "3x⁶"], correctIndex: 1, answerKey: "(3x²)³ = 3³ × x⁶ = 27x⁶. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A bacteria culture starts at 200 cells and triples every hour. Write a formula for the number after n hours and find the number after 4 hours.", answerKey: "Number = 200 × 3ⁿ. After 4 hours: 200 × 3⁴ = 200 × 81 = 16200 cells. Award 3 marks for the formula, 3 for the value.", marks: 6 },
        { type: "ESSAY", prompt: "State the laws of indices for products, quotients and powers of a power, explain what a negative and a rational exponent mean, and simplify (x⁵ × x⁻²)^(1/3) giving a positive index.", answerKey: "Product: aᵐ × aⁿ = aᵐ⁺ⁿ; quotient: aᵐ ÷ aⁿ = aᵐ⁻ⁿ; power of a power: (aᵐ)ⁿ = aᵐⁿ. A negative exponent a⁻ⁿ = 1/aⁿ; a rational exponent a^(m/n) is the nth root of aᵐ. Simplify: x⁵ × x⁻² = x³; (x³)^(1/3) = x. Award 3 marks for the three laws, 3 for the negative/rational meanings, 4 for the simplification giving x.", marks: 10 },
      ],
    },
    // source: Khan Academy — Intro to logarithm properties (https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:logs/x2ec2f6f830c9fb89:log-prop/a/properties-of-logarithms) and CK-12 — Product and Quotient Properties of Logarithms (https://flexbooks.ck12.org/cbook/ck-12-algebra-ii-with-trigonometry-concepts/section/8.8/primary/lesson/product-and-quotient-properties-of-logarithms-alg-ii/)
    {
      slug: "logarithms",
      title: "Logarithms",
      objective:
        "By the end of the topic, learners should be able to define a logarithm as the inverse of an exponent, evaluate base-ten logarithms of numbers, and apply the product, quotient and power laws of logarithms.",
      estimatedMinutes: 120,
      notes: `## What a logarithm is

- A **logarithm** answers "to what power must the base be raised to give this number?"
- If aˣ = b, then log_a b = x (a > 0, a ≠ 1).
- log_2 8 = 3 because 2³ = 8.
- log_10 1000 = 3 because 10³ = 1000.

## Base-ten (common) logarithms

- log x with no base written means **log to base 10**, written on calculators as "log".
- log 10 = 1, log 100 = 2, log 1000 = 3.
- For a number greater than 10, the log is greater than 1; for a number between 0 and 1, the log is negative: log 0.1 = −1.
- Since 50 lies between 10 and 100, log 50 lies between 1 and 2 (about 1.7).

## The laws of logarithms

| Law | Rule |
| --- | --- |
| Product | log_a(xy) = log_a x + log_a y |
| Quotient | log_a(x/y) = log_a x − log_a y |
| Power | log_a(xⁿ) = n log_a x |

Other facts: log_a 1 = 0 and log_a a = 1.

## Using the laws

- log 6 = log(2 × 3) = log 2 + log 3
- log(8/5) = log 8 − log 5
- log 25 = log 5² = 2 log 5

## Exponent–logarithm link

- A logarithm undoes an exponent: log_a(aˣ) = x and a^(log_a x) = x.
- This lets you solve exponential equations, e.g. 10ˣ = 1000 gives x = log 1000 = 3.

## Common errors

- **log(x + y) is not log x + log y** — the product law applies to a product, not a sum.
- **Forgetting the base** — a bare log means base 10.
- **log of a negative or zero** — undefined, since a positive base to any power is positive.`,
      workedExample: `**Question:** Given log 2 = 0.301 and log 3 = 0.477, find log 6 and log 1.5 without a calculator.

**Solution**

*Step 1 — write 6 as a product and use the product law.*
log 6 = log(2 × 3) = log 2 + log 3 = 0.301 + 0.477 = 0.778

*Step 2 — write 1.5 as a quotient and use the quotient law.*
1.5 = 3 ÷ 2, so log 1.5 = log 3 − log 2 = 0.477 − 0.301 = 0.176

**Answer: log 6 = 0.778 and log 1.5 = 0.176**`,
      quiz: [
        { prompt: "log_2 8 =", options: ["2", "3", "4", "16"], correctIndex: 1, explanation: "2³ = 8, so the log is 3." },
        { prompt: "If aˣ = b then", options: ["log_b a = x", "log_a b = x", "log_x a = b", "log_a x = b"], correctIndex: 1, explanation: "A log is the inverse of an exponent." },
        { prompt: "log 1000 (base 10) =", options: ["2", "3", "10", "100"], correctIndex: 1, explanation: "10³ = 1000." },
        { prompt: "log_a 1 =", options: ["1", "0", "a", "undefined"], correctIndex: 1, explanation: "a⁰ = 1, so the log of 1 is 0." },
        { prompt: "log_a(xy) =", options: ["log_a x × log_a y", "log_a x + log_a y", "log_a x − log_a y", "log_a(x + y)"], correctIndex: 1, explanation: "The product law adds the logs." },
        { prompt: "log_a(x/y) =", options: ["log_a x + log_a y", "log_a x − log_a y", "log_a x ÷ log_a y", "log_a(x − y)"], correctIndex: 1, explanation: "The quotient law subtracts the logs." },
        { prompt: "log_a(x⁵) =", options: ["5 log_a x", "log_a x + 5", "(log_a x)⁵", "log_a 5x"], correctIndex: 0, explanation: "The power law brings the index to the front." },
        { prompt: "log 100 (base 10) =", options: ["1", "2", "10", "100"], correctIndex: 1, explanation: "10² = 100." },
        { prompt: "log 0.1 (base 10) =", options: ["1", "0", "−1", "10"], correctIndex: 2, explanation: "10⁻¹ = 0.1." },
        { prompt: "log_5 25 =", options: ["2", "5", "10", "25"], correctIndex: 0, explanation: "5² = 25." },
        { prompt: "Using log 2 = 0.301, log 4 =", options: ["0.301", "0.602", "0.903", "1.204"], correctIndex: 1, explanation: "log 4 = log 2² = 2(0.301) = 0.602." },
        { prompt: "log_a a =", options: ["0", "1", "a", "undefined"], correctIndex: 1, explanation: "a¹ = a, so the log is 1." },
        { prompt: "log(2 × 3) equals", options: ["log 2 × log 3", "log 2 + log 3", "log 5", "log 6 − log 1"], correctIndex: 1, explanation: "Product law: log 2 + log 3." },
        { prompt: "A number greater than 10 has a base-10 log that is", options: ["negative", "between 0 and 1", "greater than 1", "exactly 1"], correctIndex: 2, explanation: "log 10 = 1, so larger numbers exceed 1." },
        { prompt: "Solve 10ˣ = 1000.", options: ["2", "3", "4", "10"], correctIndex: 1, explanation: "x = log 1000 = 3." },
        { prompt: "log(8/5) equals", options: ["log 8 + log 5", "log 8 − log 5", "log 8 × log 5", "log 3"], correctIndex: 1, explanation: "Quotient law." },
        { prompt: "Which is undefined?", options: ["log 1", "log 10", "log(−5)", "log 0.5"], correctIndex: 2, explanation: "Logs of negative numbers are undefined." },
        { prompt: "log_3 81 =", options: ["3", "4", "9", "27"], correctIndex: 1, explanation: "3⁴ = 81." },
        { prompt: "log(x + y) equals", options: ["log x + log y", "log x × log y", "no simpler form", "log xy"], correctIndex: 2, explanation: "The product law does not apply to a sum." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Evaluate without a calculator: (a) log_2 32, (b) log 10000 (base 10), (c) log_4 1.", answerKey: "(a) 2⁵ = 32, so 5. (b) 10⁴ = 10000, so 4. (c) 4⁰ = 1, so 0. Award 2 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Given log 2 = 0.301 and log 7 = 0.845, find (a) log 14 and (b) log 3.5.", answerKey: "(a) log 14 = log(2×7) = 0.301 + 0.845 = 1.146. (b) log 3.5 = log(7÷2) = 0.845 − 0.301 = 0.544. Award 3 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Write log 5 + 2 log 3 as a single logarithm.", options: ["log 11", "log 45", "log 15", "log 30"], correctIndex: 1, answerKey: "2 log 3 = log 9; log 5 + log 9 = log(5×9) = log 45. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Solve for x: 10ˣ = 100000.", answerKey: "x = log 100000 = 5, since 10⁵ = 100000. Award 3 marks for recognising the base-10 log, 3 for the answer 5.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the relationship between exponents and logarithms, state the product, quotient and power laws, and use them to expand log(25a³/b) in terms of log 5, log a and log b.", answerKey: "A logarithm is the inverse of an exponent: aˣ = b is equivalent to log_a b = x. Product law: log(xy) = log x + log y; quotient law: log(x/y) = log x − log y; power law: log(xⁿ) = n log x. Expand: log(25a³/b) = log 25 + log a³ − log b = 2 log 5 + 3 log a − log b. Award 3 marks for the exponent–log link, 3 for the laws, 4 for the correct expansion.", marks: 10 },
      ],
    },
  ],
};
