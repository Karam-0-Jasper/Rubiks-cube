import type { PeriodContent } from "@/content/types";

// Grade 10, Semester One, Period II of the MoE Mathematics syllabus:
// Algebraic Expressions and Number Base. Notes rebuilt from published
// sources (Siyavula, CK-12, GeeksforGeeks).
export const mathematicsG10P2: PeriodContent = {
  grade: 10,
  number: 2,
  title: "Algebraic Expressions and Number Bases",
  summary:
    "Period II of the MoE Grade 10 Mathematics syllabus. Learners form and evaluate algebraic expressions, expand products and simplify algebraic fractions, factorise (common factors, difference of two squares, perfect squares and quadratic trinomials), and work in number bases other than ten.",
  topics: [
    // source: Siyavula — Evaluating algebraic expressions (https://www.siyavula.com/read/za/mathematics/grade-8/algebraic-expressions-part-1/06-algebraic-expressions-part-1-04)
    {
      slug: "algebraic-expressions",
      title: "Forming and Evaluating Algebraic Expressions",
      objective:
        "By the end of the topic, learners should be able to translate word statements into algebraic expressions, identify terms and coefficients, collect like terms, and evaluate expressions by substitution.",
      estimatedMinutes: 120,
      notes: `## Algebraic language

- A **variable** is a letter standing for an unknown number (x, y, n).
- A **constant** is a fixed number.
- A **term** is a number, a variable, or numbers and variables multiplied together (5, x, 3xy).
- The **coefficient** is the number part of a term: in 4x² the coefficient is 4.
- An **algebraic expression** is a combination of terms joined by + or − (4x² + 3xy + 7y + 5).

## From words to algebra

- "5 more than a number" → x + 5
- "3 times a number, less 2" → 3x − 2
- "the product of a and b" → ab
- "half of a number" → x/2
- "a number squared" → x²

## Like terms

**Like terms** have exactly the same variables to the same powers; only like terms can be combined.

- 30x + 5x = 35x
- 4a²b and 7a²b are like; 4a²b and 4ab² are not.

## Evaluating by substitution

**Substitution** replaces each variable with a given value, then the expression is calculated. Use brackets when substituting, especially for negative values.

Evaluate 2x + 3y when x = 4, y = 5: 2(4) + 3(5) = 8 + 15 = 23.

## Order of operations

Apply **BODMAS**: brackets, orders (powers), division and multiplication, then addition and subtraction.

## Common errors

- **Combining unlike terms** — 3x + 2y cannot be simplified to 5xy.
- **Dropping a negative sign** when substituting — write (−2)², not −2².
- **Confusing 2x and x²** — 2x means x + x; x² means x × x.`,
      workedExample: `**Question:** Evaluate −3a + ab² when a = 4 and b = −2.

**Solution**

*Step 1 — substitute, using brackets.*
−3a + ab² = −3(4) + (4)(−2)²

*Step 2 — apply the power first (BODMAS).*
(−2)² = 4, so the expression is −3(4) + (4)(4)

*Step 3 — multiply.*
= −12 + 16

*Step 4 — add.*
= 4

**Answer: 4**

*Common error:* writing −2² = −4. The bracket (−2)² = 4, because the whole of −2 is squared.`,
      quiz: [
        { prompt: "The coefficient of x in the term 7x is", options: ["x", "7", "1", "7x"], correctIndex: 1, explanation: "The coefficient is the number part, 7." },
        { prompt: "'4 more than twice a number n' is written", options: ["4n + 2", "2n + 4", "2(n + 4)", "4 − 2n"], correctIndex: 1, explanation: "Twice the number is 2n; 4 more is 2n + 4." },
        { prompt: "Simplify 5x + 3x − 2x.", options: ["6x", "10x", "6", "6x³"], correctIndex: 0, explanation: "Like terms: (5 + 3 − 2)x = 6x." },
        { prompt: "Which are like terms?", options: ["3x and 3y", "4a²b and 7a²b", "5x and 5x²", "2 and 2x"], correctIndex: 1, explanation: "Same variables to the same powers." },
        { prompt: "Evaluate 2x + 1 when x = 6.", options: ["12", "13", "7", "8"], correctIndex: 1, explanation: "2(6) + 1 = 13." },
        { prompt: "Evaluate a² when a = −5.", options: ["−25", "25", "−10", "10"], correctIndex: 1, explanation: "(−5)² = 25." },
        { prompt: "Simplify 4a + 3b + 2a − b.", options: ["6a + 2b", "9ab", "6a + 4b", "5a + 2b"], correctIndex: 0, explanation: "4a + 2a = 6a; 3b − b = 2b." },
        { prompt: "'The product of x and y decreased by 5' is", options: ["x + y − 5", "xy − 5", "5 − xy", "x/y − 5"], correctIndex: 1, explanation: "Product is xy; decreased by 5 is xy − 5." },
        { prompt: "The number of terms in 3x² − 2x + 7 is", options: ["1", "2", "3", "4"], correctIndex: 2, explanation: "3x², −2x and 7 are three terms." },
        { prompt: "Evaluate 3x − y when x = 2 and y = −4.", options: ["2", "10", "−2", "6"], correctIndex: 1, explanation: "3(2) − (−4) = 6 + 4 = 10." },
        { prompt: "2x means", options: ["x squared", "x + x", "x × x × x", "2 + x"], correctIndex: 1, explanation: "2x = x + x, a coefficient of 2." },
        { prompt: "Simplify 7pq − 3pq.", options: ["4", "4pq", "4p²q²", "10pq"], correctIndex: 1, explanation: "Like terms: (7 − 3)pq = 4pq." },
        { prompt: "Evaluate 5 − 2x when x = 3.", options: ["1", "−1", "11", "−6"], correctIndex: 1, explanation: "5 − 2(3) = 5 − 6 = −1." },
        { prompt: "The constant term in 6x + 9 is", options: ["6", "x", "9", "6x"], correctIndex: 2, explanation: "The constant is the number with no variable, 9." },
        { prompt: "Simplify 3(x + 2).", options: ["3x + 2", "3x + 6", "x + 6", "5x"], correctIndex: 1, explanation: "Distribute: 3x + 6." },
        { prompt: "Evaluate ab when a = 1/2 and b = 8.", options: ["4", "8", "16", "1/4"], correctIndex: 0, explanation: "(1/2)(8) = 4." },
        { prompt: "3x + 2y cannot be simplified further because", options: ["it is wrong", "x and y are unlike terms", "no coefficients", "brackets are missing"], correctIndex: 1, explanation: "Unlike terms cannot be combined." },
        { prompt: "Evaluate x² − 2x when x = 4.", options: ["8", "24", "12", "16"], correctIndex: 0, explanation: "16 − 8 = 8." },
        { prompt: "Simplify 2a − 5 + 3a + 8.", options: ["5a + 3", "5a + 13", "6a + 3", "5a − 3"], correctIndex: 0, explanation: "2a + 3a = 5a; −5 + 8 = 3." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Evaluate 2x² − 3xy + y² when x = 3 and y = −2.", answerKey: "2(3)² − 3(3)(−2) + (−2)² = 2(9) − (−18) + 4 = 18 + 18 + 4 = 40. Award 3 marks for correct substitution with brackets, 3 for evaluation, 1 for the answer 40.", marks: 7 },
        { type: "SHORT_ANSWER", prompt: "Write algebraic expressions for: (a) 7 less than three times a number x; (b) the average of a and b; (c) the square of the sum of p and q.", answerKey: "(a) 3x − 7; (b) (a + b)/2; (c) (p + q)². Award 2 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Simplify 6m + 4n − 2m + n.", options: ["4m + 5n", "8m + 5n", "4m + 3n", "9mn"], correctIndex: 0, answerKey: "6m − 2m = 4m; 4n + n = 5n, giving 4m + 5n. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Simplify 5(2a − 3) − 2(a − 4).", answerKey: "10a − 15 − 2a + 8 = 8a − 7. Award 2 marks for each expansion, 2 for collecting like terms.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the difference between a term, a coefficient and a like term, and why 3x + 4x² cannot be simplified but 3x + 4x can. Give your own examples.", answerKey: "A term is a product of numbers and variables joined to others by + or −; a coefficient is the numerical factor of a term; like terms have identical variable parts (same letters, same powers). 3x and 4x are like (both x to the power 1) so they combine to 7x, but 3x and 4x² differ in power so they are unlike and cannot combine. Award 2 marks per definition (6), 2 for the like/unlike reasoning, 2 for correct examples.", marks: 10 },
      ],
    },
    // source: CK-12 — Factor Polynomials Using Special Products (https://flexbooks.ck12.org/cbook/ck-12-basic-algebra-concepts/section/9.9/primary/lesson/factor-polynomials-using-special-products-bsc-alg/)
    {
      slug: "expansion-and-algebraic-fractions",
      title: "Expansion of Products and Algebraic Fractions",
      objective:
        "By the end of the topic, learners should be able to expand the product of two binomials, use the special products, and add, subtract, multiply and simplify algebraic fractions.",
      estimatedMinutes: 120,
      notes: `## Expanding a single bracket

Multiply every term inside the bracket by the term outside (distributive law):
a(b + c) = ab + ac, so 3x(2x − 5) = 6x² − 15x.

## Product of two binomials (FOIL)

Multiply each term in the first bracket by each term in the second — **F**irst, **O**uter, **I**nner, **L**ast — then collect like terms.

(x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6

## Special products

- **Perfect square:** (a + b)² = a² + 2ab + b²; (a − b)² = a² − 2ab + b²
- **Difference of two squares:** (a + b)(a − b) = a² − b²

Examples:
- (x + 4)² = x² + 8x + 16
- (2x − 3)² = 4x² − 12x + 9
- (x + 5)(x − 5) = x² − 25

## Algebraic fractions

An **algebraic fraction** has an algebraic expression in the numerator, denominator, or both.

- **Multiplying:** multiply numerators and denominators, then cancel common factors — (2/x)(x/3) = 2/3.
- **Dividing:** multiply by the reciprocal.
- **Adding / subtracting:** use a common denominator.

x/3 + x/4 = 4x/12 + 3x/12 = 7x/12

## Simplifying

Factorise numerator and denominator, then cancel common factors:
(x² − 9)/(x + 3) = (x + 3)(x − 3)/(x + 3) = x − 3, for x ≠ −3.

## Common errors

- **Forgetting the inner and outer products** — (x + 2)(x + 3) is not x² + 6.
- **(a + b)² is not a² + b²** — the middle term 2ab is required.
- **Cancelling across + or −** — you may only cancel common factors, not terms.`,
      workedExample: `**Question:** Expand and simplify (2x + 3)(x − 5).

**Solution**

*Step 1 — FOIL.*
- First: 2x × x = 2x²
- Outer: 2x × (−5) = −10x
- Inner: 3 × x = 3x
- Last: 3 × (−5) = −15

*Step 2 — write the four terms.*
2x² − 10x + 3x − 15

*Step 3 — collect like terms.*
−10x + 3x = −7x

**Answer: 2x² − 7x − 15**`,
      quiz: [
        { prompt: "Expand 4(x + 3).", options: ["4x + 3", "4x + 12", "x + 12", "4x + 7"], correctIndex: 1, explanation: "Distribute: 4x + 12." },
        { prompt: "Expand (x + 2)(x + 5).", options: ["x² + 10", "x² + 7x + 10", "x² + 7x", "x² + 10x + 7"], correctIndex: 1, explanation: "FOIL: x² + 5x + 2x + 10 = x² + 7x + 10." },
        { prompt: "(a + b)² equals", options: ["a² + b²", "a² + 2ab + b²", "a² − b²", "2a + 2b"], correctIndex: 1, explanation: "The perfect-square identity includes 2ab." },
        { prompt: "(x + 6)(x − 6) equals", options: ["x² − 36", "x² + 36", "x² − 12x − 36", "x² − 12"], correctIndex: 0, explanation: "Difference of two squares: x² − 36." },
        { prompt: "Expand (x − 4)².", options: ["x² − 16", "x² − 8x + 16", "x² + 16", "x² − 8x − 16"], correctIndex: 1, explanation: "(x − 4)² = x² − 8x + 16." },
        { prompt: "Simplify x/2 + x/3.", options: ["2x/5", "5x/6", "x²/6", "5x/5"], correctIndex: 1, explanation: "Common denominator 6: 3x/6 + 2x/6 = 5x/6." },
        { prompt: "Expand (2x + 1)(x + 4).", options: ["2x² + 9x + 4", "2x² + 4", "2x² + 8x + 4", "2x² + 5x + 4"], correctIndex: 0, explanation: "2x² + 8x + x + 4 = 2x² + 9x + 4." },
        { prompt: "Simplify (6x²)/(2x).", options: ["3x", "3", "3x²", "4x"], correctIndex: 0, explanation: "6/2 = 3 and x²/x = x, so 3x." },
        { prompt: "(3x − 2)² equals", options: ["9x² − 4", "9x² − 12x + 4", "9x² + 4", "9x² − 6x + 4"], correctIndex: 1, explanation: "a² − 2ab + b² with a = 3x, b = 2." },
        { prompt: "Expand (x + 3)(x − 7).", options: ["x² − 4x − 21", "x² + 4x − 21", "x² − 21", "x² − 4x + 21"], correctIndex: 0, explanation: "x² − 7x + 3x − 21 = x² − 4x − 21." },
        { prompt: "Simplify (x/4) × (8/x).", options: ["2", "2x", "x/2", "8/4x"], correctIndex: 0, explanation: "8x/4x = 2 after cancelling." },
        { prompt: "Why is (a + b)² not a² + b²?", options: ["it is equal", "the middle term 2ab is missing", "brackets change nothing", "b² is negative"], correctIndex: 1, explanation: "Expanding gives the extra 2ab." },
        { prompt: "Simplify (x² − 4)/(x − 2).", options: ["x − 2", "x + 2", "x² − 2", "x − 4"], correctIndex: 1, explanation: "(x − 2)(x + 2)/(x − 2) = x + 2." },
        { prompt: "Expand 2x(3x − 4).", options: ["6x² − 8x", "6x − 8", "6x² − 4", "5x² − 8x"], correctIndex: 0, explanation: "2x × 3x = 6x²; 2x × (−4) = −8x." },
        { prompt: "Simplify x/5 − x/10.", options: ["x/5", "x/10", "0", "2x/10"], correctIndex: 1, explanation: "2x/10 − x/10 = x/10." },
        { prompt: "(x + 1)(x − 1) equals", options: ["x² − 1", "x² + 1", "x² − 2x − 1", "x² + 2x + 1"], correctIndex: 0, explanation: "Difference of squares: x² − 1." },
        { prompt: "Expand (x + 5)².", options: ["x² + 25", "x² + 10x + 25", "x² + 5x + 25", "x² + 10x"], correctIndex: 1, explanation: "x² + 2(5)x + 25 = x² + 10x + 25." },
        { prompt: "Simplify (10x³)/(5x).", options: ["2x²", "2x", "5x²", "2x³"], correctIndex: 0, explanation: "10/5 = 2 and x³/x = x², so 2x²." },
        { prompt: "The Outer product in FOIL of (2x + 3)(x − 4) is", options: ["2x²", "−8x", "3x", "−12"], correctIndex: 1, explanation: "Outer: 2x × (−4) = −8x." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Expand and simplify (3x − 2)(2x + 5).", answerKey: "FOIL: 6x² + 15x − 4x − 10 = 6x² + 11x − 10. Award 3 marks for the four products, 2 for collecting like terms, 1 for the answer.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Expand (a) (x + 7)² and (b) (2x − 5)(2x + 5).", answerKey: "(a) x² + 14x + 49. (b) Difference of squares: 4x² − 25. Award 3 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Simplify (x² − 16)/(x + 4).", options: ["x − 4", "x + 4", "x − 16", "x²"], correctIndex: 0, answerKey: "(x + 4)(x − 4)/(x + 4) = x − 4. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Simplify 3/x + 2/(2x) as a single fraction.", answerKey: "Common denominator 2x: 6/(2x) + 2/(2x) = 8/(2x) = 4/x. Award 3 marks for the common denominator, 2 for combining, 1 for simplifying to 4/x.", marks: 6 },
        { type: "ESSAY", prompt: "Show, by expanding, that (a + b)(a − b) = a² − b², and use this result to evaluate 103 × 97 without long multiplication.", answerKey: "Expand: (a+b)(a−b) = a² − ab + ab − b² = a² − b². Take a = 100, b = 3: 103 × 97 = (100+3)(100−3) = 100² − 3² = 10000 − 9 = 9991. Award 4 marks for the expansion, 4 for choosing a = 100, b = 3, 2 for the answer 9991.", marks: 10 },
      ],
    },
    // source: Siyavula — Factorisation, Grade 10 (https://www.siyavula.com/read/za/mathematics/grade-10/algebraic-expressions/01-algebraic-expressions-06)
    {
      slug: "factorisation",
      title: "Factorisation",
      objective:
        "By the end of the topic, learners should be able to factorise by taking out a common factor, recognise and factorise a difference of two squares and a perfect-square trinomial, and factorise quadratic trinomials.",
      estimatedMinutes: 130,
      notes: `## What factorising is

Factorising is the reverse of expanding: writing an expression as a **product** of factors.
Expand: (x + 2)(x + 3) = x² + 5x + 6. Factorise: x² + 5x + 6 = (x + 2)(x + 3).

## Common factor

Take out the highest common factor (HCF) of every term:
- 6x + 9 = 3(2x + 3)
- 4x² − 8x = 4x(x − 2)

## Difference of two squares

Both terms must be perfect squares with a minus sign between them:
a² − b² = (a + b)(a − b)

- x² − 25 = (x + 5)(x − 5)
- 9x² − 16 = (3x + 4)(3x − 4)

## Perfect-square trinomial

The first and last terms are perfect squares and the middle term is twice the product of their roots:
- a² + 2ab + b² = (a + b)²
- a² − 2ab + b² = (a − b)²

Example: x² + 6x + 9 = (x + 3)².

## Quadratic trinomials x² + bx + c

Find two numbers whose **product is c** and whose **sum is b**.
For x² + 7x + 12: the numbers are 3 and 4 (3 × 4 = 12, 3 + 4 = 7), so x² + 7x + 12 = (x + 3)(x + 4).

For x² − 5x + 6: the numbers are −2 and −3, so (x − 2)(x − 3).

## Order of checking

1. Common factor first.
2. Then a special product (difference of squares / perfect square).
3. Then the trinomial (product-and-sum) method.

## Common errors

- **Not taking the common factor first** — 2x² − 8 factorises as 2(x² − 4) = 2(x + 2)(x − 2).
- **Treating x² + 25 as a difference of squares** — a *sum* of squares does not factorise here.
- **Wrong signs** — check by expanding the answer.`,
      workedExample: `**Question:** Factorise fully 2x² − 18.

**Solution**

*Step 1 — common factor first.* Both terms share a factor of 2.
2x² − 18 = 2(x² − 9)

*Step 2 — recognise a difference of two squares.* x² − 9 = x² − 3².
x² − 9 = (x + 3)(x − 3)

*Step 3 — write the full factorisation.*
2x² − 18 = 2(x + 3)(x − 3)

*Check by expanding:* 2(x + 3)(x − 3) = 2(x² − 9) = 2x² − 18 ✔

**Answer: 2(x + 3)(x − 3)**`,
      quiz: [
        { prompt: "Factorise 6x + 15.", options: ["3(2x + 5)", "6(x + 15)", "3(2x + 15)", "2(3x + 5)"], correctIndex: 0, explanation: "HCF is 3: 3(2x + 5)." },
        { prompt: "Factorise x² − 49.", options: ["(x − 7)²", "(x + 7)(x − 7)", "(x + 7)²", "(x − 49)(x + 1)"], correctIndex: 1, explanation: "Difference of two squares." },
        { prompt: "Factorise x² + 8x + 16.", options: ["(x + 4)²", "(x + 8)²", "(x + 4)(x − 4)", "(x + 2)(x + 8)"], correctIndex: 0, explanation: "Perfect square: 4 + 4 = 8, 4 × 4 = 16." },
        { prompt: "Factorise x² + 5x + 6.", options: ["(x + 1)(x + 6)", "(x + 2)(x + 3)", "(x + 5)(x + 1)", "(x − 2)(x − 3)"], correctIndex: 1, explanation: "2 × 3 = 6 and 2 + 3 = 5." },
        { prompt: "Factorise 4x² − 8x.", options: ["4(x² − 2x)", "4x(x − 2)", "2x(2x − 4)", "x(4x − 8)"], correctIndex: 1, explanation: "HCF 4x: 4x(x − 2)." },
        { prompt: "Factorise 9x² − 25.", options: ["(3x − 5)²", "(3x + 5)(3x − 5)", "(9x + 5)(x − 5)", "(3x + 25)(3x − 1)"], correctIndex: 1, explanation: "(3x)² − 5² = (3x + 5)(3x − 5)." },
        { prompt: "Factorise x² − 7x + 12.", options: ["(x − 3)(x − 4)", "(x + 3)(x + 4)", "(x − 2)(x − 6)", "(x − 1)(x − 12)"], correctIndex: 0, explanation: "−3 × −4 = 12, −3 + −4 = −7." },
        { prompt: "Which does NOT factorise over the integers?", options: ["x² − 4", "x² + 4", "x² + 4x + 4", "x² − 4x + 4"], correctIndex: 1, explanation: "A sum of two squares like x² + 4 does not factorise here." },
        { prompt: "Factorise 2x² + 10x.", options: ["2(x² + 5x)", "2x(x + 5)", "x(2x + 10)", "2x(x + 10)"], correctIndex: 1, explanation: "HCF 2x: 2x(x + 5)." },
        { prompt: "Factorise x² − 2x − 15.", options: ["(x − 5)(x + 3)", "(x + 5)(x − 3)", "(x − 5)(x − 3)", "(x − 15)(x + 1)"], correctIndex: 0, explanation: "−5 × 3 = −15, −5 + 3 = −2." },
        { prompt: "The first step in factorising any expression is to look for", options: ["a difference of squares", "a common factor", "a perfect square", "the quadratic formula"], correctIndex: 1, explanation: "Always remove the common factor first." },
        { prompt: "Factorise x² + 10x + 25.", options: ["(x + 5)²", "(x + 10)²", "(x + 5)(x − 5)", "(x + 25)(x + 1)"], correctIndex: 0, explanation: "Perfect square (x + 5)²." },
        { prompt: "Factorise 3x² − 27 fully.", options: ["3(x² − 9)", "3(x + 3)(x − 3)", "(3x + 9)(x − 3)", "3(x − 9)(x + 1)"], correctIndex: 1, explanation: "3(x² − 9) = 3(x + 3)(x − 3)." },
        { prompt: "Factorise x² + x − 6.", options: ["(x + 3)(x − 2)", "(x − 3)(x + 2)", "(x + 6)(x − 1)", "(x + 3)(x + 2)"], correctIndex: 0, explanation: "3 × −2 = −6, 3 + (−2) = 1." },
        { prompt: "16 − x² factorises as", options: ["(4 − x)(4 + x)", "(x − 4)²", "(4 − x)²", "(x + 4)²"], correctIndex: 0, explanation: "Difference of squares: 4² − x² = (4 − x)(4 + x)." },
        { prompt: "Factorise ab + ac.", options: ["a(b + c)", "abc", "a + bc", "(a + b)(a + c)"], correctIndex: 0, explanation: "Common factor a: a(b + c)." },
        { prompt: "Factorise x² − 9x + 20.", options: ["(x − 4)(x − 5)", "(x + 4)(x + 5)", "(x − 2)(x − 10)", "(x − 4)(x + 5)"], correctIndex: 0, explanation: "−4 × −5 = 20, −4 + −5 = −9." },
        { prompt: "To check a factorisation you should", options: ["divide by x", "expand the factors", "add the terms", "square the answer"], correctIndex: 1, explanation: "Expanding should return the original expression." },
        { prompt: "Factorise 5x² − 20.", options: ["5(x² − 4)", "5(x + 2)(x − 2)", "(5x + 4)(x − 5)", "5(x − 4)(x + 1)"], correctIndex: 1, explanation: "5(x² − 4) = 5(x + 2)(x − 2)." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Factorise fully 3x² − 12.", answerKey: "Common factor 3: 3(x² − 4). Difference of squares: 3(x + 2)(x − 2). Award 2 marks for the common factor, 3 for the difference of squares, 1 for full form.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Factorise (a) x² + 9x + 20 and (b) x² − 3x − 28.", answerKey: "(a) (x + 4)(x + 5) since 4 × 5 = 20, 4 + 5 = 9. (b) (x − 7)(x + 4) since −7 × 4 = −28, −7 + 4 = −3. Award 3 marks each with correct product-and-sum reasoning.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is the complete factorisation of 2x² − 50?", options: ["2(x² − 25)", "2(x + 5)(x − 5)", "(2x + 5)(x − 10)", "2(x − 25)(x + 1)"], correctIndex: 1, answerKey: "Take out 2, then difference of squares: 2(x + 5)(x − 5). Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Factorise the perfect-square trinomial 4x² − 12x + 9.", answerKey: "First term (2x)², last term 3², middle −2(2x)(3) = −12x, so (2x − 3)². Award 3 marks for identifying the perfect square, 3 for (2x − 3)².", marks: 6 },
        { type: "ESSAY", prompt: "Describe the order in which you should test factorising methods (common factor, difference of two squares, trinomial), and apply the full method to factorise 18x² − 8.", answerKey: "Check for a common factor first, then a difference of two squares, then the trinomial method. For 18x² − 8: common factor 2 gives 2(9x² − 4); 9x² − 4 is a difference of squares (3x)² − 2², so 2(3x + 2)(3x − 2). Award 4 marks for the correct order with reasons, 3 for the common factor step, 3 for the difference-of-squares step.", marks: 10 },
      ],
    },
    // source: GeeksforGeeks — Number System and Base Conversions (https://www.geeksforgeeks.org/digital-logic/number-system-and-base-conversions/)
    {
      slug: "number-bases",
      title: "Number Bases",
      objective:
        "By the end of the topic, learners should be able to explain the base-ten system, convert between base ten and other bases, and add, subtract and multiply in bases other than ten.",
      estimatedMinutes: 120,
      notes: `## The base-ten (decimal) system

Each digit's value depends on its **place value**, a power of the base 10.
2 3 4 = 2 × 10² + 3 × 10¹ + 4 × 10⁰ = 200 + 30 + 4.

## Other bases

In **base b**, place values are powers of b. Base five uses digits 0–4; base two (binary) uses 0 and 1; base eight (octal) uses 0–7.

A number written 140 in base five means:
1 × 5² + 4 × 5¹ + 0 × 5⁰ = 25 + 20 + 0 = 45 (base ten).

## Converting base ten to another base

**Repeated division:** divide by the base, keep the remainders, then read the remainders **from bottom to top**.

Convert 45 to base five:
- 45 ÷ 5 = 9 remainder 0
- 9 ÷ 5 = 1 remainder 4
- 1 ÷ 5 = 0 remainder 1

Reading upward: 140 (base five).

## Converting another base to base ten

**Expanded place value:** multiply each digit by its power of the base and add.
1101 (base two) = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = 13.

## Adding and subtracting in a base

Add column by column as usual, but **carry (or borrow) the base**, not ten.
In base five, 3 + 4 = 7 = 5 + 2, so write 2 and carry 1.

## Multiplying in a base

Multiply digit by digit, carrying multiples of the base.

## Common errors

- **Using a digit not allowed in the base** — base five has no digit 5, 6, 7, 8 or 9.
- **Reading remainders top-to-bottom** — read them bottom-to-top.
- **Carrying 10 instead of the base** when adding in another base.`,
      workedExample: `**Question:** Convert 45 (base ten) to base five, then check by converting your answer back.

**Solution**

*Step 1 — repeated division by 5.*
- 45 ÷ 5 = 9 remainder 0
- 9 ÷ 5 = 1 remainder 4
- 1 ÷ 5 = 0 remainder 1

*Step 2 — read the remainders from bottom to top.*
1, 4, 0 → 140 (base five)

*Step 3 — check by expanding place values.*
140 (base five) = 1 × 5² + 4 × 5¹ + 0 × 5⁰ = 25 + 20 + 0 = 45 ✔

**Answer: 45 (base ten) = 140 (base five)**`,
      quiz: [
        { prompt: "In base ten, the digit 7 in 472 has place value", options: ["7", "70", "700", "7000"], correctIndex: 1, explanation: "It sits in the tens place: 7 × 10 = 70." },
        { prompt: "Which digit is NOT allowed in base five?", options: ["0", "3", "4", "5"], correctIndex: 3, explanation: "Base five uses digits 0–4 only." },
        { prompt: "1101 (base two) in base ten is", options: ["11", "13", "26", "1101"], correctIndex: 1, explanation: "8 + 4 + 0 + 1 = 13." },
        { prompt: "To convert base ten to another base, you use", options: ["repeated multiplication", "repeated division by the base", "adding the digits", "the quadratic formula"], correctIndex: 1, explanation: "Divide repeatedly by the base and read remainders upward." },
        { prompt: "140 (base five) in base ten is", options: ["45", "140", "35", "24"], correctIndex: 0, explanation: "25 + 20 + 0 = 45." },
        { prompt: "When adding in base five, 4 + 3 gives", options: ["7", "12 (base five)", "10 (base five)", "22 (base five)"], correctIndex: 1, explanation: "7 = 5 + 2, so write 2 carry 1 → 12 in base five." },
        { prompt: "The base of the binary system is", options: ["2", "5", "8", "10"], correctIndex: 0, explanation: "Binary is base two." },
        { prompt: "10 (base two) equals which base-ten number?", options: ["1", "2", "10", "20"], correctIndex: 1, explanation: "1×2 + 0 = 2." },
        { prompt: "Convert 6 (base ten) to base two.", options: ["110", "101", "011", "111"], correctIndex: 0, explanation: "6 = 4 + 2 = 110 in binary." },
        { prompt: "The place values in base eight are powers of", options: ["2", "5", "8", "10"], correctIndex: 2, explanation: "Base eight uses powers of 8." },
        { prompt: "23 (base five) in base ten is", options: ["13", "23", "10", "15"], correctIndex: 0, explanation: "2×5 + 3 = 13." },
        { prompt: "Reading the remainders of a repeated division, you read them", options: ["top to bottom", "bottom to top", "left to right", "in any order"], correctIndex: 1, explanation: "The last remainder is the leading digit." },
        { prompt: "Convert 8 (base ten) to base five.", options: ["13", "8", "23", "12"], correctIndex: 0, explanation: "8 ÷ 5 = 1 r 3, so 13 in base five (1×5+3=8)." },
        { prompt: "111 (base two) in base ten is", options: ["3", "5", "7", "111"], correctIndex: 2, explanation: "4 + 2 + 1 = 7." },
        { prompt: "In base eight, which is a valid number?", options: ["18", "80", "77", "89"], correctIndex: 2, explanation: "Base eight digits are 0–7, so 77 is valid." },
        { prompt: "Convert 10 (base ten) to base two.", options: ["1010", "1000", "1100", "101"], correctIndex: 0, explanation: "10 = 8 + 2 = 1010." },
        { prompt: "The value of the digit 1 in 100 (base two) is", options: ["1", "2", "4", "10"], correctIndex: 2, explanation: "1 × 2² = 4." },
        { prompt: "Is 204 (base five) a valid numeral?", options: ["no, 4 is too big", "no, digits must be even", "yes, all digits are 0–4", "no, it exceeds 100"], correctIndex: 2, explanation: "All digits 0, 2, 4 are within 0–4, so it is valid." },
        { prompt: "32 (base ten) in base two is", options: ["100000", "11111", "10000", "101010"], correctIndex: 0, explanation: "32 = 2⁵, so 100000." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Convert 87 (base ten) to base five, showing the repeated-division steps, and check by converting back.", answerKey: "87 ÷ 5 = 17 r 2; 17 ÷ 5 = 3 r 2; 3 ÷ 5 = 0 r 3. Reading up: 322 (base five). Check: 3×25 + 2×5 + 2 = 75 + 10 + 2 = 87. Award 3 marks for the divisions, 2 for reading upward, 2 for the check.", marks: 7 },
        { type: "SHORT_ANSWER", prompt: "Convert 1011 (base two) and 24 (base five) to base ten.", answerKey: "1011 (base two) = 8 + 0 + 2 + 1 = 11. 24 (base five) = 2×5 + 4 = 14. Award 3 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "What is 6 (base ten) written in base two?", options: ["101", "110", "011", "100"], correctIndex: 1, answerKey: "6 = 4 + 2 = 110. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Add 23 (base five) + 14 (base five), giving the answer in base five.", answerKey: "Units: 3 + 4 = 7 = 5 + 2, write 2 carry 1. Fives: 2 + 1 + 1(carry) = 4. Answer 42 (base five). Check in base ten: 13 + 9 = 22, and 42 (base five) = 4×5 + 2 = 22. Award 3 marks for the column addition with carry, 2 for the answer, 1 for the check.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the idea of place value and how it lets the same digits mean different amounts in different bases, illustrating with the numeral 24 in base ten, base five and base eight.", answerKey: "Place value means each position is a power of the base, so a digit's contribution is digit × base^position. 24 in base ten = 2×10 + 4 = 24; 24 in base five = 2×5 + 4 = 14 (base ten); 24 in base eight = 2×8 + 4 = 20 (base ten). The same symbols mean different totals because the base changes the place values. Award 4 marks for the place-value explanation, 6 for the three correct conversions.", marks: 10 },
      ],
    },
  ],
};
