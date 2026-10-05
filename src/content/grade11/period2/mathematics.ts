import type { PeriodContent } from "@/content/types";

// Grade 11, Semester One, Period II of the MoE Mathematics syllabus:
// Surds and Percentages. Each CONTENTS bullet is its own topic: surds,
// simplifying surds, products and quotients of surds, compound interest in
// relation to simple interest, interest formulae, depreciation (with hire
// purchase from the same objective). Notes built from Siyavula pages.
export const mathematicsG11P2: PeriodContent = {
  grade: 11,
  number: 2,
  title: "Surds and Percentages",
  summary:
    "Period II of the MoE Grade 11 Mathematics syllabus. Learners define surds, simplify them, find products and quotients of surds and rationalise denominators, then apply percentages to money: compound interest in relation to simple interest, rearranging the interest formulae, depreciation and hire purchase.",
  topics: [
    // source: Siyavula — Grade 11, 1.2 Rational exponents and surds (https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-02) and Siyavula — Grade 11, 1.6 Summary (https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-05)
    {
      slug: "surds",
      title: "Surds",
      objective:
        "By the end of the topic, learners should be able to define a surd, distinguish surds from rational roots, name the parts of a radical and write surds in index form.",
      estimatedMinutes: 60,
      notes: `## Definition
- If rⁿ = a, then r = ⁿ√a (n ≥ 2): r is the **nth root** of a.
- A **surd** is a radical (root) that results in an **irrational number** — it cannot be written as a fraction of two integers, so it is left in root form.
- √2, ∛6, √12, ∛100 and ⁵√25 are surds.
- √4 = 2, √9 = 3 and ∛8 = 2 are **not** surds — they simplify to rational numbers.

## Parts of a radical
| Part | Meaning | In ∛100 |
| --- | --- | --- |
| Radical sign | the root symbol √ | √ |
| Index | which root is taken | 3 |
| Radicand | the number under the sign | 100 |

- A square root has index 2, which is not written: √a means ²√a.

## Surds in index form
- ⁿ√a = a^(1/n).
- ⁿ√(aᵐ) = a^(m/n).
- a^(−1/n) = ⁿ√(1/a).
- Example: √5 = 5^(1/2); ∛(x²) = x^(2/3).

## Like and unlike surds
- Surds with the **same index** are **like surds**; surds with different indices are **unlike surds**.
- √3 and 5√7 are like surds (both square roots); √3 and ∛3 are unlike surds.
- Only like surds with the **same radicand** can be added or subtracted as like terms.

## Rational or irrational?
| Number | Simplifies to | Surd? |
| --- | --- | --- |
| √16 | 4 | No |
| √15 | 3.872… (non-terminating, non-repeating) | Yes |
| ∛27 | 3 | No |
| ∛10 | 2.154… | Yes |

## Common errors
- Calling every root a surd — √25 = 5 is rational.
- Writing ∛a as a^3 instead of a^(1/3).`,
      workedExample: `**Question:** Which of √36, √40, ∛64 and ∛20 are surds? Write the surds in index form.

**Solution**

*Step 1 — test each root for an exact rational value.*
√36 = 6 (rational). ∛64 = 4 (rational).

*Step 2 — the others have no exact value.*
36 < 40 < 49, so √40 lies between 6 and 7 and is not a whole number; 8 < 20 < 27, so ∛20 lies between 2 and 3. Both are irrational.

*Step 3 — index form.*
√40 = 40^(1/2); ∛20 = 20^(1/3).

**Answer: √40 and ∛20 are surds; √40 = 40^(1/2), ∛20 = 20^(1/3).**`,
      quiz: [
        { prompt: "Which of these is a surd?", options: ["√9", "√16", "√5", "√25"], correctIndex: 2, explanation: "√5 has no exact rational value." },
        { prompt: "A surd is a root that gives", options: ["a whole number", "an irrational number", "a negative number", "a fraction of integers"], correctIndex: 1, explanation: "Surds are irrational roots." },
        { prompt: "Why is √4 not a surd?", options: ["It is negative", "It equals the rational number 2", "Its index is 4", "It has no radicand"], correctIndex: 1, explanation: "It simplifies exactly." },
        { prompt: "In ∛100, the index is", options: ["100", "3", "10", "1"], correctIndex: 1, explanation: "The index tells which root." },
        { prompt: "In ∛100, the radicand is", options: ["3", "100", "10", "1/3"], correctIndex: 1, explanation: "The radicand is under the sign." },
        { prompt: "The index of √a is", options: ["1", "2", "0", "a"], correctIndex: 1, explanation: "Square roots have index 2." },
        { prompt: "ⁿ√a in index form is", options: ["aⁿ", "a^(1/n)", "n^a", "a/n"], correctIndex: 1, explanation: "The root becomes a fractional power." },
        { prompt: "∛(x²) in index form is", options: ["x^(3/2)", "x^(2/3)", "x⁶", "x^(1/6)"], correctIndex: 1, explanation: "Power 2, root 3." },
        { prompt: "Which is not a surd?", options: ["∛6", "√2", "∛8", "√12"], correctIndex: 2, explanation: "∛8 = 2." },
        { prompt: "Which pair are like surds?", options: ["√3 and ∛3", "√3 and 5√7", "∛2 and √2", "⁴√5 and √5"], correctIndex: 1, explanation: "Both are square roots (same index)." },
        { prompt: "Which pair are unlike surds?", options: ["√2 and √8", "√3 and ∛3", "2√5 and √5", "√6 and 3√6"], correctIndex: 1, explanation: "Different indices." },
        { prompt: "√40 lies between", options: ["5 and 6", "6 and 7", "7 and 8", "4 and 5"], correctIndex: 1, explanation: "36 < 40 < 49." },
        { prompt: "∛20 lies between", options: ["1 and 2", "2 and 3", "3 and 4", "4 and 5"], correctIndex: 1, explanation: "8 < 20 < 27." },
        { prompt: "Which number is irrational?", options: ["√49", "∛27", "√15", "√0.25"], correctIndex: 2, explanation: "√15 = 3.872… never terminates or repeats." },
        { prompt: "5^(1/2) written as a surd is", options: ["5²", "√5", "5/2", "2√5"], correctIndex: 1, explanation: "Power 1/2 is a square root." },
        { prompt: "a^(−1/n) equals", options: ["−ⁿ√a", "ⁿ√(1/a)", "ⁿ√(−a)", "1/n"], correctIndex: 1, explanation: "Negative index means reciprocal." },
        { prompt: "If r³ = a, then r =", options: ["a³", "∛a", "3a", "a/3"], correctIndex: 1, explanation: "Definition of the cube root." },
        { prompt: "Which is a surd?", options: ["⁵√32", "⁵√25", "√100", "∛1000"], correctIndex: 1, explanation: "⁵√32 = 2, √100 = 10, ∛1000 = 10; ⁵√25 is irrational." },
        { prompt: "Like surds have the same", options: ["coefficient", "index", "value", "sign"], correctIndex: 1, explanation: "Siyavula: like surds share an index." },
        { prompt: "To add surds as like terms they must have the same index and the same", options: ["coefficient", "radicand", "sign", "value"], correctIndex: 1, explanation: "e.g. 3√2 + 5√2 = 8√2." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State which of these are surds and give a reason for each: √49, √50, ∛125, ∛150.", answerKey: "√49 = 7 not a surd; √50 is a surd (between 7 and 8); ∛125 = 5 not a surd; ∛150 is a surd (between 5 and 6). 1.5 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Write in index form: (a) √7, (b) ∛(a⁵), (c) ⁴√(1/x).", answerKey: "(a) 7^(1/2). (b) a^(5/3). (c) x^(−1/4). 2 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which pair are like surds?", options: ["√2 and ∛2", "∛5 and 4∛7", "√3 and ⁴√3", "∛6 and √6"], correctIndex: 1, answerKey: "Both are cube roots (index 3), option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Name the radical sign, index and radicand of ⁵√25 and explain why it is a surd.", answerKey: "Radical sign √, index 5, radicand 25. 2⁵ = 32 > 25 > 1, so ⁵√25 is between 1 and 2 and is not rational — a surd. 3 marks parts, 3 marks reason.", marks: 6 },
        { type: "ESSAY", prompt: "Define a surd and explain the difference between a surd and a rational root, with examples. Explain like and unlike surds and how surds are written in index form.", answerKey: "Surd: a root giving an irrational number (√2, ∛6); rational roots simplify exactly (√9 = 3). Like surds have the same index (√3, 5√7); unlike surds differ (√3, ∛3); only like surds with the same radicand combine. Index form: ⁿ√a = a^(1/n), ⁿ√(aᵐ) = a^(m/n). 3 marks definition/examples, 3 marks like/unlike, 4 marks index form.", marks: 10 },
      ],
    },
    // source: Siyavula — Grade 11, 1.2 Rational exponents and surds (simplifying surds) (https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-02)
    {
      slug: "simplifying-surds",
      title: "Simplifying Surds",
      objective:
        "By the end of the topic, learners should be able to simplify surds by removing perfect-power factors and add or subtract like surds.",
      estimatedMinutes: 60,
      notes: `## Method
1. Write the radicand as a product with the **largest perfect square** (or perfect cube for ∛) as a factor.
2. Use ⁿ√(ab) = ⁿ√a × ⁿ√b to split the root.
3. Take the root of the perfect power.

## Examples
| Surd | Factorise | Simplified |
| --- | --- | --- |
| √50 | √(5² × 2) | 5√2 |
| √72 | √(36 × 2) | 6√2 |
| √48 | √(16 × 3) | 4√3 |
| √20 | √(4 × 5) | 2√5 |
| ∛54 | ∛(3³ × 2) | 3∛2 |
| ∛16 | ∛(2³ × 2) | 2∛2 |

- Perfect squares to look for: 4, 9, 16, 25, 36, 49, 64, 81, 100.
- Perfect cubes: 8, 27, 64, 125.
- Using a smaller square factor leaves more work: √72 = √(4 × 18) = 2√18 = 2√(9 × 2) = 6√2.

## Adding and subtracting
- Like surds with the same radicand combine like algebraic terms: 3√2 + 5√2 = 8√2; 7√2 − 3√2 = 4√2.
- Simplify first to reveal like surds: √8 + √2 = 2√2 + √2 = 3√2.
- √27 + √12 = 3√3 + 2√3 = 5√3.
- Unlike surds stay separate: 2√3 + 4√5 cannot be simplified.

## Nested roots
- ᵐ√(ⁿ√a) = ᵐⁿ√a. Example: √(∛64) = ⁶√64 = 2.

## Common errors
- **√a + √b ≠ √(a + b)** — √9 + √16 = 3 + 4 = 7, not √25 = 5.
- Adding radicands: 3√2 + 5√2 is 8√2, not 8√4.
- Stopping before the largest square factor has been removed.`,
      workedExample: `**Question:** Simplify √75 − √12 + √27.

**Solution**

*Step 1 — simplify each surd.*
√75 = √(25 × 3) = 5√3.
√12 = √(4 × 3) = 2√3.
√27 = √(9 × 3) = 3√3.

*Step 2 — collect the like surds.*
5√3 − 2√3 + 3√3 = (5 − 2 + 3)√3 = 6√3.

**Answer: 6√3**`,
      quiz: [
        { prompt: "Simplify √50.", options: ["25√2", "5√2", "2√5", "10√5"], correctIndex: 1, explanation: "√(25 × 2) = 5√2." },
        { prompt: "Simplify √72.", options: ["6√2", "8√3", "2√6", "36√2"], correctIndex: 0, explanation: "√(36 × 2) = 6√2." },
        { prompt: "Simplify √48.", options: ["4√3", "3√4", "16√3", "2√12"], correctIndex: 0, explanation: "√(16 × 3) = 4√3." },
        { prompt: "Simplify √20.", options: ["2√5", "4√5", "5√2", "10√2"], correctIndex: 0, explanation: "√(4 × 5) = 2√5." },
        { prompt: "Simplify ∛54.", options: ["3∛2", "2∛3", "9∛6", "6∛3"], correctIndex: 0, explanation: "∛(27 × 2) = 3∛2." },
        { prompt: "Simplify ∛16.", options: ["4", "2∛2", "4∛2", "8"], correctIndex: 1, explanation: "∛(8 × 2) = 2∛2." },
        { prompt: "3√2 + 5√2 =", options: ["8√4", "8√2", "15√2", "8"], correctIndex: 1, explanation: "Collect like surds." },
        { prompt: "7√2 − 3√2 =", options: ["4", "4√2", "10√2", "4√4"], correctIndex: 1, explanation: "(7 − 3)√2." },
        { prompt: "Simplify √8 + √2.", options: ["√10", "3√2", "2√10", "4√2"], correctIndex: 1, explanation: "2√2 + √2." },
        { prompt: "√27 + √12 =", options: ["√39", "5√3", "6√3", "13√3"], correctIndex: 1, explanation: "3√3 + 2√3." },
        { prompt: "√9 + √16 =", options: ["5", "7", "√25", "25"], correctIndex: 1, explanation: "3 + 4; roots are not added inside." },
        { prompt: "Which cannot be simplified further?", options: ["√18", "2√3 + 4√5", "√8", "√50"], correctIndex: 1, explanation: "Unlike surds cannot be combined." },
        { prompt: "The largest perfect square factor of 72 is", options: ["4", "9", "36", "72"], correctIndex: 2, explanation: "72 = 36 × 2." },
        { prompt: "√(∛64) =", options: ["2", "4", "8", "⁵√64"], correctIndex: 0, explanation: "⁶√64 = 2." },
        { prompt: "Simplify √98.", options: ["7√2", "2√7", "49√2", "14√7"], correctIndex: 0, explanation: "√(49 × 2)." },
        { prompt: "√32 − √8 =", options: ["√24", "2√2", "4√2", "6√2"], correctIndex: 1, explanation: "4√2 − 2√2." },
        { prompt: "Simplify √200.", options: ["10√2", "20√10", "2√10", "100√2"], correctIndex: 0, explanation: "√(100 × 2)." },
        { prompt: "Simplify 2√45.", options: ["6√5", "3√10", "90", "18√5"], correctIndex: 0, explanation: "2 × 3√5." },
        { prompt: "Simplify ∛81.", options: ["3∛3", "9", "27", "9∛3"], correctIndex: 0, explanation: "∛(27 × 3)." },
        { prompt: "√75 − √12 + √27 =", options: ["6√3", "4√3", "√90", "10√3"], correctIndex: 0, explanation: "5√3 − 2√3 + 3√3." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Simplify (a) √98 and (b) √27 + √12.", answerKey: "(a) 7√2. (b) 3√3 + 2√3 = 5√3. 3 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Show that √32 − √8 = 2√2.", answerKey: "√32 = 4√2, √8 = 2√2; 4√2 − 2√2 = 2√2. 2 marks each simplification, 2 marks subtraction.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Simplify ∛24 + ∛81.", options: ["5∛3", "∛105", "6∛3", "5∛6"], correctIndex: 0, answerKey: "∛24 = 2∛3, ∛81 = 3∛3; sum 5∛3 (option A).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Simplify 3√20 − √45 + √80.", answerKey: "3 × 2√5 − 3√5 + 4√5 = 6√5 − 3√5 + 4√5 = 7√5. 2 marks per surd simplification (max 4), 2 marks answer.", marks: 6 },
        { type: "ESSAY", prompt: "Describe the method for simplifying a surd, explain why √9 + √16 ≠ √25, and simplify √200 + √18 − √50.", answerKey: "Factor out the largest perfect square, split with √(ab) = √a√b, take the root. √9 + √16 = 3 + 4 = 7 but √25 = 5: roots of a sum are not sums of roots. √200 = 10√2, √18 = 3√2, √50 = 5√2; total 8√2. 3 marks method, 3 marks explanation, 4 marks calculation.", marks: 10 },
      ],
    },
    // source: Siyavula — Grade 11, 1.2 Rational exponents and surds (surd laws and rationalising denominators) (https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-02)
    {
      slug: "products-and-quotients-of-surds",
      title: "Products and Quotients of Surds",
      objective:
        "By the end of the topic, learners should be able to multiply and divide surds, expand brackets containing surds and rationalise denominators, including binomial denominators.",
      estimatedMinutes: 80,
      notes: `## Product and quotient laws
| Law | Rule | Example |
| --- | --- | --- |
| Product | ⁿ√a × ⁿ√b = ⁿ√(ab) | √3 × √12 = √36 = 6 |
| Quotient | ⁿ√a ÷ ⁿ√b = ⁿ√(a/b) | √50 ÷ √2 = √25 = 5 |
| Same surd | √a × √a = a | √7 × √7 = 7 |

- Multiply coefficients together and surds together: 2√3 × 4√3 = 8 × 3 = 24.
- 2√3 × 5√2 = 10√6.

## Expanding brackets
- Use the distributive law, as in algebra.
- √2(3 + √2) = 3√2 + 2.
- (3 + √2)(3 − √2) = 9 − 2 = **7** — a difference of two squares gives a rational answer.
- (1 + √3)² = 1 + 2√3 + 3 = 4 + 2√3.

## Rationalising the denominator
- **Rationalising** converts a fraction with a surd in the denominator into one with a rational denominator. The surd is kept in the numerator.
- **Single surd:** multiply top and bottom by that surd.
  10/√5 = (10 × √5)/(√5 × √5) = 10√5/5 = 2√5.
  3/√2 = 3√2/2.
- **Binomial denominator:** multiply top and bottom by the **conjugate** (same terms, opposite sign) to make a difference of two squares.
  4/(√5 − 1) = 4(√5 + 1)/((√5)² − 1²) = 4(√5 + 1)/4 = √5 + 1.

| Denominator | Multiply by |
| --- | --- |
| √a | √a/√a |
| a + √b | (a − √b)/(a − √b) |
| √a − √b | (√a + √b)/(√a + √b) |

## Common errors
- √a × √b written as √(a + b).
- Multiplying only the denominator when rationalising — the numerator must be multiplied too.
- Using the same sign instead of the conjugate for a binomial denominator.`,
      workedExample: `**Question:** Rationalise the denominator of 6/(3 + √3).

**Solution**

*Step 1 — the conjugate of 3 + √3 is 3 − √3.*

*Step 2 — multiply numerator and denominator by 3 − √3.*
6(3 − √3) / ((3 + √3)(3 − √3)).

*Step 3 — difference of two squares in the denominator.*
(3)² − (√3)² = 9 − 3 = 6.

*Step 4 — simplify.*
6(3 − √3)/6 = 3 − √3.

**Answer: 3 − √3**`,
      quiz: [
        { prompt: "Simplify √3 × √12.", options: ["√15", "6", "36", "4"], correctIndex: 1, explanation: "√36 = 6." },
        { prompt: "√7 × √7 =", options: ["7", "14", "√14", "49"], correctIndex: 0, explanation: "√a × √a = a." },
        { prompt: "Simplify √50 ÷ √2.", options: ["√48", "5", "25", "√25 only"], correctIndex: 1, explanation: "√(50/2) = √25 = 5." },
        { prompt: "√a × √b equals", options: ["√(a + b)", "√(ab)", "ab", "a + b"], correctIndex: 1, explanation: "The product law." },
        { prompt: "Simplify 2√3 × 4√3.", options: ["24", "8√3", "6√9", "24√3"], correctIndex: 0, explanation: "8 × 3 = 24." },
        { prompt: "Simplify 2√3 × 5√2.", options: ["10√6", "7√6", "10√5", "7√5"], correctIndex: 0, explanation: "Coefficients 10, surds √6." },
        { prompt: "Expand √2(3 + √2).", options: ["3√2 + 2", "3√2 + √2", "5√2", "3 + 2√2"], correctIndex: 0, explanation: "√2 × √2 = 2." },
        { prompt: "(3 + √2)(3 − √2) =", options: ["7", "11", "9 − √2", "1"], correctIndex: 0, explanation: "9 − 2 = 7." },
        { prompt: "(1 + √3)² =", options: ["4", "4 + 2√3", "1 + 3", "4 + √3"], correctIndex: 1, explanation: "1 + 2√3 + 3." },
        { prompt: "Rationalise 1/√3.", options: ["√3", "√3/3", "3√3", "1/3"], correctIndex: 1, explanation: "Multiply by √3/√3." },
        { prompt: "Rationalise 10/√5.", options: ["2√5", "√5/2", "10√5", "5√2"], correctIndex: 0, explanation: "10√5/5 = 2√5." },
        { prompt: "Rationalise 5/√5.", options: ["√5", "5√5", "√5/5", "25"], correctIndex: 0, explanation: "5√5/5 = √5." },
        { prompt: "The conjugate of 2 + √7 is", options: ["2 + √7", "2 − √7", "−2 + √7", "√7 − 7"], correctIndex: 1, explanation: "Same terms, opposite sign." },
        { prompt: "Multiplying a binomial surd by its conjugate gives a", options: ["sum of squares", "difference of two squares", "surd", "zero"], correctIndex: 1, explanation: "(a + √b)(a − √b) = a² − b." },
        { prompt: "4/(√5 − 1) rationalised is", options: ["√5 + 1", "√5 − 1", "4√5", "(√5 + 1)/4"], correctIndex: 0, explanation: "4(√5 + 1)/4." },
        { prompt: "6/(3 + √3) rationalised is", options: ["3 − √3", "3 + √3", "2 − √3", "6 − √3"], correctIndex: 0, explanation: "6(3 − √3)/6." },
        { prompt: "Why rationalise a denominator?", options: ["to make it larger", "to write it with a rational denominator", "to add surds", "it changes the value"], correctIndex: 1, explanation: "The value is unchanged; the form is simpler." },
        { prompt: "√18 × √2 ÷ √9 =", options: ["2", "6", "4", "√4"], correctIndex: 0, explanation: "√36 = 6; 6 ÷ 3 = 2." },
        { prompt: "(√5 + √2)(√5 − √2) =", options: ["3", "7", "√3", "10"], correctIndex: 0, explanation: "5 − 2 = 3." },
        { prompt: "∛4 × ∛2 =", options: ["2", "∛6", "8", "∛8 only"], correctIndex: 0, explanation: "∛8 = 2." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Rationalise the denominator of 6/√3.", answerKey: "6√3/3 = 2√3. 3 marks multiplying by √3/√3, 2 marks simplifying, 1 mark answer.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Expand and simplify (2 + √3)(4 − √3).", answerKey: "8 − 2√3 + 4√3 − 3 = 5 + 2√3. 4 marks expansion, 2 marks simplification.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Simplify √5 × √20.", options: ["√25", "10", "5√4", "100"], correctIndex: 1, answerKey: "√100 = 10 (option B).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Rationalise 2/(√7 + √5).", answerKey: "× (√7 − √5)/(√7 − √5): 2(√7 − √5)/(7 − 5) = √7 − √5. 2 marks conjugate, 2 marks denominator, 2 marks answer.", marks: 6 },
        { type: "ESSAY", prompt: "State the product and quotient laws of surds. Explain what rationalising the denominator means and how the conjugate is used for a binomial denominator, illustrating with 10/√5 and 4/(√5 − 1).", answerKey: "ⁿ√a × ⁿ√b = ⁿ√(ab); ⁿ√a ÷ ⁿ√b = ⁿ√(a/b). Rationalising: rewriting with a rational denominator, value unchanged. 10/√5 × √5/√5 = 2√5. For a + √b multiply by a − √b to get a² − b. 4/(√5 − 1) × (√5 + 1)/(√5 + 1) = 4(√5 + 1)/4 = √5 + 1. 3 marks laws, 3 marks explanation, 4 marks examples.", marks: 10 },
      ],
    },
    // source: Siyavula — Grade 10, 9.3 Compound interest (https://www.siyavula.com/read/maths/grade-10/finance-and-growth/09-finance-and-growth-02) and Siyavula — Grade 10, 9.2 Simple interest (https://www.siyavula.com/read/maths/grade-10/finance-and-growth/09-finance-and-growth-01)
    {
      slug: "simple-and-compound-interest",
      title: "Compound Interest in Relation to Simple Interest",
      objective:
        "By the end of the topic, learners should be able to calculate simple and compound interest and explain why compound interest grows faster than simple interest.",
      estimatedMinutes: 80,
      notes: `## Key terms
- **Principal (P)** — the amount first invested or borrowed.
- **Interest rate (i)** — the rate per period written as a decimal; **p.a.** means per annum (per year).
- **Accumulated amount (A)** — the final balance after interest is added.
- **n** — the number of years (periods).

## Simple interest
- Interest is calculated **only on the original principal**.
- **A = P(1 + in)**; interest earned = A − P = Pin.
- Example: 1000 at 5 % p.a. for 3 years: A = 1000(1 + 0.05 × 3) = 1150.

## Compound interest
- Interest is earned on the principal **and on the interest already added** (interest on interest).
- **A = P(1 + i)ⁿ**.
- Example: 1000 at 8 % p.a. for 3 years: A = 1000(1.08)³ = 1259.71.

## Comparing the two
| Feature | Simple interest | Compound interest |
| --- | --- | --- |
| Formula | A = P(1 + in) | A = P(1 + i)ⁿ |
| Interest is on | original principal only | principal plus earlier interest |
| Growth | linear (straight-line graph) | exponential (curved graph) |
| Best for | borrowers | investors |

- 10 000 at 9 % p.a. for 10 years: simple → 10 000(1 + 0.9) = **19 000**; compound → 10 000(1.09)¹⁰ = **23 673.64**.
- For n = 1 both formulae give the same amount; for n > 1 compound interest gives more.
- Compound interest is **advantageous for investing** but **not for taking out a loan**.

## Common errors
- Using the percentage (8) instead of the decimal (0.08).
- Writing P(1 + i)n instead of P(1 + i)ⁿ.
- Forgetting to subtract P when only the interest is asked for.`,
      workedExample: `**Question:** 5 000 is invested at 10 % p.a. for 3 years. Find the accumulated amount under (a) simple interest and (b) compound interest, and the difference.

**Solution**

*Step 1 — values.* P = 5000, i = 0.10, n = 3.

*Step 2 — simple interest.*
A = 5000(1 + 0.10 × 3) = 5000 × 1.30 = 6500.

*Step 3 — compound interest.*
A = 5000(1.10)³ = 5000 × 1.331 = 6655.

*Step 4 — difference.*
6655 − 6500 = 155.

**Answer: (a) 6 500 (b) 6 655; compound interest earns 155 more.**`,
      quiz: [
        { prompt: "In the interest formulae, P stands for", options: ["percentage", "principal", "period", "profit"], correctIndex: 1, explanation: "P is the starting amount." },
        { prompt: "The simple-interest formula is", options: ["A = P(1 + i)ⁿ", "A = P(1 + in)", "A = Pⁿ", "A = P + n"], correctIndex: 1, explanation: "Simple interest grows linearly." },
        { prompt: "The compound-interest formula is", options: ["A = P(1 + in)", "A = P(1 + i)ⁿ", "A = Pⁿ", "A = P + iⁿ"], correctIndex: 1, explanation: "The rate applies to the growing balance." },
        { prompt: "p.a. means", options: ["per amount", "per annum (per year)", "per account", "percentage added"], correctIndex: 1, explanation: "Per annum = per year." },
        { prompt: "Write 6 % as a decimal.", options: ["6.0", "0.6", "0.06", "0.006"], correctIndex: 2, explanation: "6/100." },
        { prompt: "Simple interest on 2000 at 5 % for 4 years is", options: ["100", "400", "500", "2400"], correctIndex: 1, explanation: "2000 × 0.05 × 4." },
        { prompt: "1000 at 5 % simple interest for 3 years gives A =", options: ["1050", "1150", "1157.63", "1500"], correctIndex: 1, explanation: "1000 × 1.15." },
        { prompt: "1000(1.08)³ equals (2 d.p.)", options: ["1240.00", "1259.71", "1080.00", "1331.00"], correctIndex: 1, explanation: "1000 × 1.259712." },
        { prompt: "Compound interest is interest earned on", options: ["the principal only", "the principal and accumulated interest", "nothing", "the rate"], correctIndex: 1, explanation: "Interest on interest." },
        { prompt: "Which grows faster over many years?", options: ["simple interest", "compound interest", "they are equal", "neither"], correctIndex: 1, explanation: "Compound interest is exponential." },
        { prompt: "The graph of simple-interest growth is", options: ["a curve", "a straight line", "a circle", "a parabola"], correctIndex: 1, explanation: "Linear growth." },
        { prompt: "10 000 at 9 % simple interest for 10 years gives", options: ["19 000", "23 673.64", "10 900", "90 000"], correctIndex: 0, explanation: "10 000(1 + 0.9)." },
        { prompt: "10 000 at 9 % compound interest for 10 years gives", options: ["19 000", "23 673.64", "21 589.25", "10 900"], correctIndex: 1, explanation: "10 000 × 1.09¹⁰." },
        { prompt: "For n = 1 year, simple and compound interest give", options: ["the same amount", "compound more", "simple more", "no interest"], correctIndex: 0, explanation: "P(1 + i) in both." },
        { prompt: "Compound interest is NOT advantageous when", options: ["investing", "taking out a loan", "saving", "earning"], correctIndex: 1, explanation: "Debt grows exponentially." },
        { prompt: "1000 at 20 % compound for 2 years gives A =", options: ["1200", "1400", "1440", "1210"], correctIndex: 2, explanation: "1000 × 1.44." },
        { prompt: "The interest earned is found by", options: ["A × P", "A − P", "P − A", "A + P"], correctIndex: 1, explanation: "Final amount minus principal." },
        { prompt: "500 at 10 % simple interest for 2 years gives A =", options: ["550", "600", "605", "1000"], correctIndex: 1, explanation: "500 × 1.2." },
        { prompt: "500 at 10 % compound interest for 2 years gives A =", options: ["600", "605", "550", "610"], correctIndex: 1, explanation: "500 × 1.21." },
        { prompt: "12.5 % as a decimal is", options: ["1.25", "0.125", "12.5", "0.0125"], correctIndex: 1, explanation: "12.5/100." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "8 000 is invested at 9 % p.a. simple interest for 4 years. Find the accumulated amount.", answerKey: "A = 8000(1 + 0.36) = 10 880. 2 marks substitution, 2 marks 1.36, 2 marks answer.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "3 000 is invested at 10 % p.a. compounded annually for 2 years. Find the amount and the interest earned.", answerKey: "A = 3000 × 1.21 = 3630; interest = 630. 3 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "2 000 at 15 % simple interest for 3 years gives", options: ["2 300", "2 900", "3 041.75", "2 600"], correctIndex: 1, answerKey: "2000 × 1.45 = 2900 (option B).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "3 450 is invested for 5 years. Find A at (a) 12.5 % p.a. simple interest and (b) 10.4 % p.a. compound interest.", answerKey: "(a) 3450(1 + 0.625) = 5606.25. (b) 3450(1.104)⁵ = 5658.02. 3 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the difference between simple and compound interest, why compound interest is good for investors but bad for borrowers, and compare both for 10 000 at 8 % p.a. over 2 years.", answerKey: "Simple: interest on principal only, linear. Compound: interest on principal plus earlier interest, exponential. Investors earn more; borrowers owe more. Simple: 10 000 × 1.16 = 11 600; compound: 10 000 × 1.1664 = 11 664; difference 64. 4 marks explanation, 2 marks investors/borrowers, 4 marks calculations.", marks: 10 },
      ],
    },
    // source: Siyavula — Grade 10, 9.2 Simple interest (https://www.siyavula.com/read/maths/grade-10/finance-and-growth/09-finance-and-growth-01), Siyavula — Grade 11, 9.1 Revision (https://www.siyavula.com/read/za/mathematics/grade-11/finance-growth-and-decay/09-finance-growth-and-decay-01) and Siyavula — Grade 12, 3.1 Calculating the period of an investment (https://www.siyavula.com/read/za/mathematics/grade-12/finance/03-finance-01)
    {
      slug: "interest-formulae",
      title: "Interest Formulae",
      objective:
        "By the end of the topic, learners should be able to rearrange the simple and compound interest formulae to find the principal, the rate or the time.",
      estimatedMinutes: 80,
      notes: `## The two formulae
- Simple interest: **A = P(1 + in)**.
- Compound interest: **A = P(1 + i)ⁿ**.
- Any one of A, P, i, n can be found when the other three are known.

## Rearranging the simple-interest formula
| Unknown | Formula |
| --- | --- |
| A | A = P(1 + in) |
| P | P = A ÷ (1 + in) |
| i | i = (A/P − 1) ÷ n |
| n | n = (A/P − 1) ÷ i |

- **Find P:** to have 15 000 in 5 years at 6 % p.a.: P = 15 000 ÷ 1.30 = **11 538.46**.
- **Find n:** 1000 grows to 2500 at 8.2 % p.a.: n = (2.5 − 1) ÷ 0.082 = 18.29 → **19 years** (round up to complete years).
- **Find i:** 5000 grows to 18 000 in 16 years: i = (3.6 − 1) ÷ 16 = 0.1625 = **16.25 % p.a.**

## Rearranging the compound-interest formula
| Unknown | Formula |
| --- | --- |
| A | A = P(1 + i)ⁿ |
| P | P = A ÷ (1 + i)ⁿ |
| i | i = (A/P)^(1/n) − 1 |
| n | n = log(A/P) ÷ log(1 + i) |

- **Find i:** 30 000 must double to 60 000 in 6 years: (1 + i)⁶ = 2, i = 2^(1/6) − 1 = 0.1225 → **12.3 % p.a.** (rounded up).
- **Find n (using logs):** 12 000 grows to 30 000 at 9 % p.a.: n = log 2.5 ÷ log 1.09 = 10.63 → **11 years**.
- **Find n:** 3500 grows to 4044.69 at 7.5 % p.a.: n = log(1.1556) ÷ log(1.075) = **2 years**.

## Good practice
- Keep all calculator values unrounded until the final answer.
- Round **time up** to whole years when a target must be reached.
- Write the rate as a decimal in the formula and as a percentage in the answer.

## Common errors
- Dividing by (1 + i)n instead of (1 + i)ⁿ.
- Forgetting to subtract 1 when finding i.
- Rounding n down so the target is not reached.`,
      workedExample: `**Question:** How much must be invested now at 9 % p.a. compound interest to have 6 000 after 4 years?

**Solution**

*Step 1 — values.* A = 6000, i = 0.09, n = 4; P is unknown.

*Step 2 — make P the subject.*
P = A ÷ (1 + i)ⁿ.

*Step 3 — substitute.*
P = 6000 ÷ 1.09⁴ = 6000 ÷ 1.41158… = 4250.55.

*Check:* 4250.55 × 1.09⁴ ≈ 6000 ✔

**Answer: about 4 250.55 must be invested.**`,
      quiz: [
        { prompt: "Make P the subject of A = P(1 + in).", options: ["P = A(1 + in)", "P = A ÷ (1 + in)", "P = A − in", "P = (A − 1) ÷ in"], correctIndex: 1, explanation: "Divide both sides by (1 + in)." },
        { prompt: "Make i the subject of A = P(1 + in).", options: ["i = (A/P − 1) ÷ n", "i = A/(Pn)", "i = (A − 1)/n", "i = A − P − n"], correctIndex: 0, explanation: "A/P = 1 + in." },
        { prompt: "Make n the subject of A = P(1 + in).", options: ["n = (A/P − 1) ÷ i", "n = A/Pi", "n = log(A/P)", "n = A − P"], correctIndex: 0, explanation: "Rearrange A/P − 1 = in." },
        { prompt: "Make P the subject of A = P(1 + i)ⁿ.", options: ["P = A(1 + i)ⁿ", "P = A ÷ (1 + i)ⁿ", "P = A ÷ (1 + in)", "P = Aⁿ"], correctIndex: 1, explanation: "Divide by (1 + i)ⁿ." },
        { prompt: "Make i the subject of A = P(1 + i)ⁿ.", options: ["i = (A/P)^(1/n) − 1", "i = (A/P − 1)/n", "i = log(A/P)", "i = A/P − n"], correctIndex: 0, explanation: "Take the nth root, then subtract 1." },
        { prompt: "For compound interest, n is found using", options: ["n = log(A/P) ÷ log(1 + i)", "n = (A/P − 1)/i", "n = A/P", "n = i/log P"], correctIndex: 0, explanation: "Take logs of both sides." },
        { prompt: "To have 15 000 in 5 years at 6 % simple interest, invest", options: ["11 538.46", "11 208.87", "12 000", "14 100"], correctIndex: 0, explanation: "15 000 ÷ 1.30." },
        { prompt: "5000 grows to 18 000 in 16 years (simple). The rate is", options: ["16.25 %", "26 %", "8.1 %", "13 %"], correctIndex: 0, explanation: "(3.6 − 1) ÷ 16 = 0.1625." },
        { prompt: "1000 grows to 2500 at 8.2 % simple. n = 18.29, so it takes", options: ["18 years", "19 years", "20 years", "17 years"], correctIndex: 1, explanation: "Round up to complete years." },
        { prompt: "30 000 doubles in 6 years (compound). The rate is about", options: ["12.3 %", "16.7 %", "33 %", "6 %"], correctIndex: 0, explanation: "2^(1/6) − 1 ≈ 0.1225." },
        { prompt: "12 000 grows to 30 000 at 9 % compound. It takes", options: ["10 years", "11 years", "17 years", "2.5 years"], correctIndex: 1, explanation: "log 2.5 ÷ log 1.09 = 10.63 → 11." },
        { prompt: "When a target must be reached, the time n is", options: ["rounded down", "rounded up", "left as a decimal always", "doubled"], correctIndex: 1, explanation: "Rounding down falls short." },
        { prompt: "In the formulae, the rate 7.5 % is entered as", options: ["7.5", "0.75", "0.075", "75"], correctIndex: 2, explanation: "Decimal form." },
        { prompt: "P = 6000 ÷ 1.09⁴ ≈", options: ["4250.55", "5504.59", "4800", "8469.47"], correctIndex: 0, explanation: "Present value at 9 % over 4 years." },
        { prompt: "A/P for 3500 growing to 4044.69 is about", options: ["1.1556", "0.8653", "544.69", "1.075"], correctIndex: 0, explanation: "4044.69 ÷ 3500." },
        { prompt: "n = log(1.1556) ÷ log(1.075) ≈", options: ["1", "2", "3", "15"], correctIndex: 1, explanation: "Investment period of 2 years." },
        { prompt: "Why keep values unrounded until the end?", options: ["to reduce rounding errors", "to save time", "it is required by law", "it changes the formula"], correctIndex: 0, explanation: "Rounding early introduces error." },
        { prompt: "Which unknown needs logarithms in compound interest?", options: ["A", "P", "i", "n"], correctIndex: 3, explanation: "n is an exponent." },
        { prompt: "(A/P)^(1/n) uses which skill from earlier work?", options: ["rational powers", "surds only", "factorising", "simultaneous equations"], correctIndex: 0, explanation: "An nth root is a power 1/n." },
        { prompt: "A − P gives the", options: ["rate", "interest earned", "time", "principal"], correctIndex: 1, explanation: "Amount minus principal." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "How much must be invested at 8 % p.a. simple interest to amount to 5 000 after 3 years?", answerKey: "P = 5000 ÷ (1 + 0.24) = 5000 ÷ 1.24 = 4032.26. 3 marks rearranging, 3 marks answer.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "5 000 grows to 7 500 in 5 years with interest compounded annually. Find the rate.", answerKey: "1.5 = (1 + i)⁵; i = 1.5^(1/5) − 1 = 0.0845 → 8.45 % p.a. 3 marks method, 3 marks answer.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "80 000 is invested at 7.5 % p.a. compound interest. How long until it reaches 100 000?", options: ["2.5 years", "3.09 years", "4 years", "1.25 years"], correctIndex: 1, answerKey: "n = log(1.25) ÷ log(1.075) ≈ 3.09 years (option B).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "At what simple interest rate will 2 000 grow to 2 800 in 5 years?", answerKey: "i = (2800/2000 − 1) ÷ 5 = 0.4 ÷ 5 = 0.08 → 8 % p.a. 3 marks rearranging, 3 marks answer.", marks: 6 },
        { type: "ESSAY", prompt: "Write the four rearrangements of A = P(1 + i)ⁿ and use them to find (a) how long 12 000 takes to reach 30 000 at 9 % p.a., and (b) the rate at which 30 000 doubles in 6 years. Explain how you round each answer.", answerKey: "A = P(1 + i)ⁿ; P = A/(1 + i)ⁿ; i = (A/P)^(1/n) − 1; n = log(A/P)/log(1 + i). (a) n = log 2.5/log 1.09 = 10.63 → 11 years (round up so the target is reached). (b) i = 2^(1/6) − 1 = 0.1225 → 12.3 % p.a. (round up so it does double). 4 marks formulae, 4 marks calculations, 2 marks rounding.", marks: 10 },
      ],
    },
    // source: Siyavula — Grade 11, 9.2 Simple and compound depreciation (https://www.siyavula.com/read/za/mathematics/grade-11/finance-growth-and-decay/09-finance-growth-and-decay-02) and Siyavula — Grade 10, 9.4 Calculations using simple and compound interest (hire purchase) (https://www.siyavula.com/read/za/mathematics/grade-10/finance-and-growth/09-finance-and-growth-03)
    {
      slug: "depreciation-and-hire-purchase",
      title: "Depreciation and Hire Purchase",
      objective:
        "By the end of the topic, learners should be able to calculate straight-line and reducing-balance depreciation and work out deposits, interest and monthly instalments in a hire-purchase agreement.",
      estimatedMinutes: 90,
      notes: `## Depreciation
- **Depreciation** — the loss in value of an asset (car, machine, phone) over time.
- **Book value (A)** — the value of the asset after depreciation. P is the original value, i the rate as a decimal, n the number of years.

## Straight-line (simple) depreciation
- The value is reduced by a **constant amount each year**, calculated on the **original** value.
- **A = P(1 − in)**.
- The value falls linearly and can reach zero.
- Example: a 6 000 phone at 22 % p.a.: depreciation 1 320 each year; after 4 years A = 6000(1 − 0.88) = **720**.

## Reducing-balance (compound) depreciation
- Depreciation is calculated on the **reduced value**, so the amount lost is **different (smaller) each year**.
- **A = P(1 − i)ⁿ**.
- The value falls exponentially, approaching but never reaching zero.
- Example: a 60 000 tractor at 20 % p.a. for 5 years: A = 60 000(0.8)⁵ = **19 660.80**.
- Finding the rate: a fridge bought for 8 999 sold for 4 500 after 3 years: i = 1 − ∛(4500/8999) = 0.206 → **20.6 % p.a.**

| Method | Formula | Amount lost each year |
| --- | --- | --- |
| Straight-line | A = P(1 − in) | the same every year |
| Reducing-balance | A = P(1 − i)ⁿ | smaller each year |

- Interest **increases** the principal; depreciation **reduces** it — compare A = P(1 + in) with A = P(1 − in).

## Hire purchase
- **Hire-purchase agreement** — a financial agreement between a shop and a customer on how the customer will pay for a product.
- A **deposit** (usually a percentage of the cash price) is paid first.
- **Principal = cash price − deposit**.
- Interest is **always simple interest**, charged only on the amount owing: A = P(1 + in).
- **Monthly instalment = A ÷ number of months**.
- Total cost = deposit + A, which is more than the cash price.

## Common errors
- Using + instead of − in the depreciation formulae.
- Charging hire-purchase interest on the full cash price instead of price − deposit.
- Forgetting to change months into years (24 months = 2 years) in A = P(1 + in).`,
      workedExample: `**Question:** A screen costs 2 500. It is bought on hire purchase with a 10 % deposit and 24 monthly payments at 7.5 % p.a. simple interest. Find the monthly payment.

**Solution**

*Step 1 — deposit.* 10 % × 2500 = 250.

*Step 2 — principal.* P = 2500 − 250 = 2250.

*Step 3 — time in years.* n = 24 ÷ 12 = 2.

*Step 4 — accumulated loan.* A = 2250(1 + 0.075 × 2) = 2250 × 1.15 = 2587.50.

*Step 5 — monthly payment.* 2587.50 ÷ 24 = 107.81.

**Answer: 107.81 per month (total cost 250 + 2587.50 = 2837.50).**`,
      quiz: [
        { prompt: "Depreciation is", options: ["a gain in value", "a loss in value over time", "interest earned", "a deposit"], correctIndex: 1, explanation: "Assets lose value." },
        { prompt: "The straight-line depreciation formula is", options: ["A = P(1 − i)ⁿ", "A = P(1 − in)", "A = P(1 + in)", "A = Pin"], correctIndex: 1, explanation: "Constant amount each year." },
        { prompt: "The reducing-balance formula is", options: ["A = P(1 − in)", "A = P(1 − i)ⁿ", "A = P(1 + i)ⁿ", "A = P − n"], correctIndex: 1, explanation: "Percentage of the reduced value." },
        { prompt: "A 6 000 phone depreciates 22 % p.a. straight-line. Annual depreciation is", options: ["1 320", "1 200", "220", "4 680"], correctIndex: 0, explanation: "0.22 × 6000." },
        { prompt: "That phone's value after 4 years is", options: ["720", "1 320", "5 280", "0"], correctIndex: 0, explanation: "6000(1 − 0.88)." },
        { prompt: "A 60 000 tractor at 20 % reducing balance for 5 years is worth", options: ["19 660.80", "0", "12 000", "24 576"], correctIndex: 0, explanation: "60 000 × 0.8⁵." },
        { prompt: "In reducing-balance depreciation the amount lost each year", options: ["stays the same", "gets smaller", "gets larger", "is zero"], correctIndex: 1, explanation: "It is a percentage of a shrinking value." },
        { prompt: "Straight-line depreciation produces a value that falls", options: ["exponentially", "linearly", "randomly", "not at all"], correctIndex: 1, explanation: "Same amount each year." },
        { prompt: "Reducing-balance value approaches but never reaches", options: ["the original value", "zero", "double", "the deposit"], correctIndex: 1, explanation: "Exponential decay." },
        { prompt: "8 999 fridge sold for 4 500 after 3 years: rate ≈", options: ["16.7 %", "20.6 %", "50 %", "25 %"], correctIndex: 1, explanation: "1 − ∛(4500/8999)." },
        { prompt: "Hire-purchase interest is always", options: ["compound", "simple", "zero", "depreciation"], correctIndex: 1, explanation: "Simple interest on the amount owing." },
        { prompt: "In hire purchase, the principal is", options: ["the cash price", "cash price − deposit", "the deposit", "cash price + interest"], correctIndex: 1, explanation: "Interest is charged on the amount owing." },
        { prompt: "A 6 000 phone with a 1 000 deposit: amount borrowed is", options: ["7 000", "6 000", "5 000", "1 000"], correctIndex: 2, explanation: "6000 − 1000." },
        { prompt: "Monthly instalment equals", options: ["A ÷ number of months", "P ÷ 12", "deposit ÷ months", "A × months"], correctIndex: 0, explanation: "Spread the accumulated amount." },
        { prompt: "24 months written in years is", options: ["24", "2", "0.5", "12"], correctIndex: 1, explanation: "24 ÷ 12." },
        { prompt: "2250 at 7.5 % simple for 2 years gives A =", options: ["2587.50", "2418.75", "2600.16", "2250"], correctIndex: 0, explanation: "2250 × 1.15." },
        { prompt: "2587.50 over 24 months is per month", options: ["107.81", "93.75", "215.63", "120.00"], correctIndex: 0, explanation: "2587.50 ÷ 24." },
        { prompt: "Total hire-purchase cost compared with the cash price is", options: ["less", "the same", "more", "zero"], correctIndex: 2, explanation: "Interest is added." },
        { prompt: "10 000 at 10 % straight-line for 4 years gives", options: ["6 561", "6 000", "4 000", "9 000"], correctIndex: 1, explanation: "10 000 × 0.6." },
        { prompt: "Interest increases the principal; depreciation", options: ["also increases it", "reduces it", "leaves it unchanged", "doubles it"], correctIndex: 1, explanation: "(1 − i) instead of (1 + i)." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "A laptop costing 12 000 depreciates straight-line at 20 % p.a. Find its value after 3 years.", answerKey: "12 000(1 − 0.6) = 4 800. 2 marks substitution, 2 marks 0.40, 2 marks answer.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "A vehicle worth 150 000 depreciates on a reducing balance at 10 % p.a. Find its value after 2 years.", answerKey: "150 000 × 0.9² = 121 500. 3 marks setup, 3 marks answer.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "200 000 at 20 % reducing balance is worth what after 2 years?", options: ["120 000", "128 000", "160 000", "144 000"], correctIndex: 1, answerKey: "200 000 × 0.64 = 128 000 (option B).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A fridge costs 8 000 cash. On hire purchase a customer pays a 2 000 deposit and 12 % p.a. simple interest for 2 years on the balance, in monthly instalments. Find the monthly instalment and the total cost.", answerKey: "P = 6000; A = 6000(1.24) = 7440; monthly = 7440 ÷ 24 = 310; total = 2000 + 7440 = 9440. 2 marks each step (balance+interest, instalment, total).", marks: 6 },
        { type: "ESSAY", prompt: "Compare straight-line and reducing-balance depreciation. For an asset worth 50 000 depreciating at 20 % p.a. for 3 years, find the book value under each method, and explain which method leaves the higher value.", answerKey: "Straight-line: constant amount on original value, linear, can reach zero. Reducing-balance: percentage of reduced value, smaller each year, exponential. SL: 50 000(1 − 0.6) = 20 000; RB: 50 000 × 0.512 = 25 600. Reducing balance is higher because later depreciation is on a smaller value. 4 marks comparison, 4 marks calculations, 2 marks conclusion.", marks: 10 },
      ],
    },
  ],
};
