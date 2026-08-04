import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Mathematics, Grade 10,
// Semester One, Period II: Topic 1 Algebraic Expression; Topic 2 Number Base.
export const mathematicsG10P2: PeriodContent = {
  grade: 10,
  number: 2,
  title: "Algebraic Expressions and Number Bases",
  summary:
    "Period II of the MoE Grade 10 Mathematics syllabus. Learners form and evaluate algebraic expressions, expand and factorise (including quadratics, perfect squares and the difference of two squares), then work in number bases other than ten — converting, adding, subtracting, multiplying and solving simple base equations.",
  topics: [
    {
      slug: "algebraic-expressions",
      title: "Algebraic Expressions",
      objective:
        "By the end of the topic, learners should be able to translate word statements into algebraic expressions, evaluate expressions, expand products, add and subtract algebraic fractions, and factorise expressions including quadratics, perfect squares and the difference of two squares.",
      estimatedMinutes: 200,
      notes: `## Introduction

- **Algebra** works with unknown numbers, written as letters (**variables**).
- Letting a letter hold a number lets us describe patterns and solve problems in general.
- **This lesson:** words → algebra; the parts of an expression; evaluating and simplifying; expanding brackets; **factorising** (quadratics, perfect squares, difference of two squares).

## From words to algebra

Algebra uses **letters (variables)** to stand for numbers we do not yet know. Turning a sentence into an algebraic expression is the first skill of the topic.

- "a number increased by 7" → **x + 7**
- "5 less than a number" → **x − 5**
- "twice a number" → **2x**
- "the product of a number and 4" → **4x**
- "a number divided by 3" → **x/3**

An **algebraic expression** is a combination of variables, numbers and operations — for example 3x + 5 — with no equals sign. When it *does* have an equals sign it becomes an equation.

## The parts of an expression

In 3x² + 5x − 8:

- **Terms** are the parts separated by + or − : 3x², 5x and −8.
- **Coefficient** is the number multiplying a variable: 3 is the coefficient of x².
- **Constant** is the term with no variable: −8.
- **Like terms** have exactly the same variable part: 5x and 2x are like terms; 5x and 5x² are not.

## Evaluating an expression

To **evaluate** is to substitute a value for each variable and simplify.

Evaluate 2a + 3b when a = 4 and b = 5:
2(4) + 3(5) = 8 + 15 = **23**.

## Collecting like terms

Only **like terms** can be added or subtracted:

- 7x + 2x = 9x
- 6y − 4y + y = 3y
- 5a + 3b − 2a = 3a + 3b   (a-terms combine, b stays)

## Expansion — removing brackets

Multiply every term inside the bracket by the term outside:

- 3(x + 4) = 3x + 12
- −2(a − 5) = −2a + 10   (watch the signs)

**Product of two binomials** uses FOIL — First, Outer, Inner, Last:

(x + 3)(x + 5) = x² + 5x + 3x + 15 = **x² + 8x + 15**

## Two special products

- **Perfect square:** (a + b)² = a² + 2ab + b² and (a − b)² = a² − 2ab + b²
- **Difference of two squares:** (a + b)(a − b) = a² − b²

The difference of two squares can be seen geometrically — cut a small b×b square out of a large a×a square and rearrange the remaining L-shape into an (a+b) by (a−b) rectangle:

\`\`\`svg Difference of two squares: a² − b² = (a + b)(a − b)
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A large square with a small corner square removed">
  <rect x="10" y="20" width="150" height="150" fill="#c7d2fe" stroke="#3730a3" stroke-width="2"/>
  <rect x="110" y="120" width="50" height="50" fill="#fff" stroke="#3730a3" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="85" y="15" font-size="13" text-anchor="middle" fill="#3730a3">a</text>
  <text x="5" y="100" font-size="13" text-anchor="end" fill="#3730a3">a</text>
  <text x="135" y="150" font-size="11" text-anchor="middle" fill="#3730a3">b×b</text>
  <text x="230" y="95" font-size="14" fill="#111">Area left =</text>
  <text x="230" y="118" font-size="14" fill="#111">a² − b²</text>
  <text x="230" y="150" font-size="13" fill="#3730a3">= (a + b)(a − b)</text>
</svg>
\`\`\`

## Algebraic fractions

Add and subtract algebraic fractions exactly as with number fractions — find a common denominator:

x/2 + x/3 = 3x/6 + 2x/6 = **5x/6**

## Factorisation — the reverse of expansion

**Factorising** writes an expression as a product. Look for the highest common factor first:

- 6x + 9 = **3(2x + 3)**
- 4a² − 6a = **2a(2a − 3)**

**Difference of two squares:** x² − 16 = (x + 4)(x − 4).

**Quadratic trinomials** ax² + bx + c: find two numbers that multiply to give c (or a×c) and add to give b.

x² + 7x + 12: two numbers multiplying to 12 and adding to 7 are 3 and 4, so
x² + 7x + 12 = **(x + 3)(x + 4)**.

## Common errors to watch for

- **Sign slip after a minus sign:** 5 − (x − 3) is **not** 5 − x − 3; treat it as 5 − 1(x − 3) = 5 − x + 3 = 8 − x.
- **Adding unlike terms:** 3x + 2x² is already simplified — you cannot make it 5x³.
- **Forgetting the middle term** in a perfect square: (a + b)² is a² + 2ab + b², **not** a² + b².
- **Only factoring part of a term:** in 4a² − 6a the HCF is 2a, giving 2a(2a − 3); check by expanding.
- Always **check a factorisation by expanding** it back to the original.`,
      workedExample: `**Problem.** (a) Expand and simplify (x + 6)(x − 2). (b) Factorise x² − 5x − 14.

**Part (a) — expand with FOIL**

- First: x × x = x²
- Outer: x × (−2) = −2x
- Inner: 6 × x = 6x
- Last: 6 × (−2) = −12

Add: x² − 2x + 6x − 12 = **x² + 4x − 12**.

**Part (b) — factorise**

We need two numbers that **multiply to −14** and **add to −5**.

Test pairs of factors of 14: (1, 14), (2, 7). To reach −5 we need −7 and +2, because (−7)(+2) = −14 and (−7) + (+2) = −5. ✓

So x² − 5x − 14 = **(x − 7)(x + 2)**.

**Check by expanding:** (x − 7)(x + 2) = x² + 2x − 7x − 14 = x² − 5x − 14. ✓`,
      teachingTip:
        "The commonest error is a sign slip when a bracket follows a minus sign, e.g. writing 5 − (x − 3) = 5 − x − 3. Have learners insert an invisible ×(−1) and expand it explicitly: 5 − 1(x − 3) = 5 − x + 3 = 8 − x. Drilling three of these at the board before factorising saves most of the marks lost later.",
      quiz: [
        {
          prompt: 'Write "seven more than twice a number x" as an algebraic expression.',
          options: ["2x + 7", "2(x + 7)", "7x + 2", "x + 27"],
          correctIndex: 0,
          explanation: "Twice the number is 2x; seven more means add 7, giving 2x + 7.",
        },
        {
          prompt: "Which of these are like terms: 6x², 6x, 2x², 9?",
          options: ["6x² and 2x²", "6x² and 6x", "6x and 9", "2x² and 9"],
          correctIndex: 0,
          explanation: "Like terms have the same variable part. 6x² and 2x² both have x².",
        },
        {
          prompt: "Simplify 8y − 3y + 2y.",
          options: ["7y", "13y", "7", "3y"],
          correctIndex: 0,
          explanation: "8 − 3 + 2 = 7, so the result is 7y.",
        },
        {
          prompt: "Evaluate 3a − 2b when a = 5 and b = 4.",
          options: ["7", "23", "1", "14"],
          correctIndex: 0,
          explanation: "3(5) − 2(4) = 15 − 8 = 7.",
        },
        {
          prompt: "Expand 4(2x − 3).",
          options: ["8x − 12", "8x − 3", "6x − 12", "8x + 12"],
          correctIndex: 0,
          explanation: "Multiply each inside term by 4: 4×2x = 8x and 4×(−3) = −12.",
        },
        {
          prompt: "Expand −5(a − 2).",
          options: ["−5a + 10", "−5a − 10", "5a − 10", "−5a − 2"],
          correctIndex: 0,
          explanation: "−5×a = −5a and −5×(−2) = +10.",
        },
        {
          prompt: "Expand (x + 4)(x + 5).",
          options: ["x² + 9x + 20", "x² + 20x + 9", "x² + 9x + 9", "x² + 20"],
          correctIndex: 0,
          explanation: "FOIL: x² + 5x + 4x + 20 = x² + 9x + 20.",
        },
        {
          prompt: "Expand (x − 3)(x + 3).",
          options: ["x² − 9", "x² + 9", "x² − 6x − 9", "x² − 6"],
          correctIndex: 0,
          explanation: "Difference of two squares: (x−3)(x+3) = x² − 3² = x² − 9.",
        },
        {
          prompt: "Which is the expansion of (a + b)²?",
          options: ["a² + 2ab + b²", "a² + b²", "a² − 2ab + b²", "2a + 2b"],
          correctIndex: 0,
          explanation: "(a+b)² = (a+b)(a+b) = a² + 2ab + b².",
        },
        {
          prompt: "Factorise 6x + 15.",
          options: ["3(2x + 5)", "6(x + 15)", "3(2x + 15)", "2(3x + 5)"],
          correctIndex: 0,
          explanation: "The highest common factor of 6 and 15 is 3: 3(2x + 5).",
        },
        {
          prompt: "Factorise 10a² − 4a.",
          options: ["2a(5a − 2)", "2(5a² − 2a)", "a(10a − 4)", "5a(2a − 1)"],
          correctIndex: 0,
          explanation: "HCF of 10a² and 4a is 2a, leaving 5a − 2 inside.",
        },
        {
          prompt: "Factorise x² − 25.",
          options: ["(x + 5)(x − 5)", "(x − 5)²", "(x + 25)(x − 1)", "(x + 5)²"],
          correctIndex: 0,
          explanation: "Difference of two squares: x² − 5² = (x + 5)(x − 5).",
        },
        {
          prompt: "Factorise x² + 8x + 15.",
          options: ["(x + 3)(x + 5)", "(x + 1)(x + 15)", "(x + 4)(x + 4)", "(x − 3)(x − 5)"],
          correctIndex: 0,
          explanation: "Two numbers multiplying to 15 and adding to 8 are 3 and 5.",
        },
        {
          prompt: "Factorise x² + 2x − 8.",
          options: ["(x + 4)(x − 2)", "(x − 4)(x + 2)", "(x + 4)(x + 2)", "(x − 4)(x − 2)"],
          correctIndex: 0,
          explanation: "Numbers multiplying to −8 and adding to +2 are +4 and −2.",
        },
        {
          prompt: "Simplify x/4 + x/2.",
          options: ["3x/4", "2x/6", "x/6", "x/8"],
          correctIndex: 0,
          explanation: "Common denominator 4: x/4 + 2x/4 = 3x/4.",
        },
        {
          prompt: "What is the coefficient of x in the expression 7 − 5x + x²?",
          options: ["−5", "5", "7", "1"],
          correctIndex: 0,
          explanation: "The x-term is −5x, so its coefficient is −5.",
        },
        {
          prompt: "Simplify 5 − (x − 2).",
          options: ["7 − x", "3 − x", "x + 3", "7 + x"],
          correctIndex: 0,
          explanation: "5 − x + 2 = 7 − x; the minus flips the sign of the −2.",
        },
        {
          prompt: "Expand (2x + 1)(x + 3).",
          options: ["2x² + 7x + 3", "2x² + 3x + 3", "2x² + 7x + 1", "3x² + 7x + 3"],
          correctIndex: 0,
          explanation: "FOIL: 2x² + 6x + x + 3 = 2x² + 7x + 3.",
        },
        {
          prompt: "Factorise the perfect square x² + 6x + 9.",
          options: ["(x + 3)²", "(x + 9)²", "(x + 3)(x − 3)", "(x + 6)²"],
          correctIndex: 0,
          explanation: "x² + 6x + 9 = (x + 3)(x + 3) = (x + 3)².",
        },
        {
          prompt: "How many terms are in the expression 4x² − 3x + 7?",
          options: ["3", "2", "4", "1"],
          correctIndex: 0,
          explanation: "Terms are separated by + or −: 4x², −3x and 7 — three terms.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Expand and simplify (x − 4)(x + 6).",
          answerKey:
            "FOIL: x² + 6x − 4x − 24 = x² + 2x − 24. Award full marks for the correct simplified trinomial; 1 mark for correct expansion before collecting like terms.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Factorise completely 2x² + 10x + 12.",
          answerKey:
            "Take out HCF 2: 2(x² + 5x + 6), then factorise the trinomial: 2(x + 2)(x + 3). Deduct a mark if the common factor of 2 is not extracted.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which expression is equal to a² − b²?",
          options: ["(a + b)(a − b)", "(a − b)²", "(a + b)²", "a² + b²"],
          correctIndex: 0,
          answerKey: "Difference of two squares factorises as (a + b)(a − b).",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Simplify the algebraic fraction 3x/5 − x/2.",
          answerKey:
            "Common denominator 10: 6x/10 − 5x/10 = x/10. Full marks for x/10; 1 mark for reaching a correct common denominator.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain, with a worked example, how the difference of two squares can be used to work out 41 × 39 quickly without long multiplication.",
          answerKey:
            "Learners should recognise 41 × 39 = (40 + 1)(40 − 1) = 40² − 1² = 1600 − 1 = 1599. A strong answer states the identity (a + b)(a − b) = a² − b², identifies a = 40 and b = 1, and evaluates. Award marks for correct identification of a and b, correct application of the identity, and a correct final answer of 1599.",
          marks: 5,
        },
      ],
    },
    {
      slug: "number-base",
      title: "Number Base",
      objective:
        "By the end of the topic, learners should be able to explain the base-ten place-value system, convert between base ten and other bases, add, subtract and multiply in other bases, and solve simple equations involving bases.",
      estimatedMinutes: 180,
      notes: `## Introduction

- We count in **tens** (ten fingers) — but any number can be the **base**.
- A computer counts in **twos**; an old clock in **sixties**. The same quantity looks different in different bases.
- **This lesson:** place value in base ten; converting between base ten and other bases; adding, subtracting and multiplying in another base.

## Place value and the base-ten system

Our everyday numbers use **base ten** (the denary system): ten digits, 0–9, and each place is worth ten times the one to its right.

The number 3 425 means:

\`\`\`svg Place value in base ten
<svg viewBox="0 0 440 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Place value columns for the number 3425 in base ten">
  <g font-size="13" text-anchor="middle">
    <rect x="20" y="20" width="90" height="40" fill="#e0e7ff" stroke="#3730a3"/>
    <rect x="120" y="20" width="90" height="40" fill="#e0e7ff" stroke="#3730a3"/>
    <rect x="220" y="20" width="90" height="40" fill="#e0e7ff" stroke="#3730a3"/>
    <rect x="320" y="20" width="90" height="40" fill="#e0e7ff" stroke="#3730a3"/>
    <text x="65" y="45" fill="#111">10³ = 1000</text>
    <text x="165" y="45" fill="#111">10² = 100</text>
    <text x="265" y="45" fill="#111">10¹ = 10</text>
    <text x="365" y="45" fill="#111">10⁰ = 1</text>
    <text x="65" y="90" font-size="20" fill="#3730a3">3</text>
    <text x="165" y="90" font-size="20" fill="#3730a3">4</text>
    <text x="265" y="90" font-size="20" fill="#3730a3">2</text>
    <text x="365" y="90" font-size="20" fill="#3730a3">5</text>
  </g>
  <text x="220" y="120" font-size="12" text-anchor="middle" fill="#555">3×1000 + 4×100 + 2×10 + 5×1 = 3425</text>
</svg>
\`\`\`

## Other bases

A **base** tells you how many digits are used and the value of each place.

- **Base two (binary):** digits 0, 1; places are powers of 2.
- **Base five:** digits 0–4; places are powers of 5.
- **Base eight (octal):** digits 0–7; places are powers of 8.

A base cannot use a digit as large as itself: base five has no digit "5".

We write the base as a small subscript: 132₅ means "one-three-two in base five", **not** one hundred and thirty-two.

## Converting from another base to base ten

Multiply each digit by its place value and add.

Convert 132₅ to base ten:
1×5² + 3×5¹ + 2×5⁰ = 1×25 + 3×5 + 2×1 = 25 + 15 + 2 = **42₁₀**.

## Converting from base ten to another base

Divide repeatedly by the base and record the **remainders**; read them from **bottom to top**.

Convert 42₁₀ to base five:

- 42 ÷ 5 = 8 remainder **2**
- 8 ÷ 5 = 1 remainder **3**
- 1 ÷ 5 = 0 remainder **1**

Reading upward: **132₅**. (This matches the conversion above.)

## Adding in another base

Add column by column. Whenever a column total reaches the base or more, **carry**.

In base five, 4 + 3 = 7. But 7 = 1×5 + 2, so you write **2** and carry **1**.

## Multiplying in another base

Multiply as usual, then convert any product that reaches the base into a carry. In base five, 4 × 2 = 8 = 1×5 + 3, so write 3, carry 1.

## Simple base equations

Sometimes the base itself is unknown. Convert both sides to base ten and solve.

Find b if 24_b = 14₁₀:
2×b + 4 = 14 → 2b = 10 → **b = 5**.

## Common errors to watch for

- **Reading a non-ten number as base ten** — 132₅ is "one-three-two, base five", **not** one hundred and thirty-two; read it digit by digit.
- **Using a digit as large as (or larger than) the base** — base five has **no digit 5**; the largest digit is always one less than the base.
- **Reading division remainders the wrong way** — when converting to another base, read the remainders from **bottom to top**, not top to bottom.
- **Forgetting to carry at the base, not at ten** — in base five a column total of 7 gives write **2, carry 1** (since 7 = 1×5 + 2), not the base-ten carry.
- **Skipping the check** — convert your answer **back** to base ten to confirm it; the round-trip catches almost every carrying slip.`,
      workedExample: `**Problem.** (a) Convert 2103₄ to base ten. (b) Add 143₅ + 24₅, giving the answer in base five.

**Part (a) — base four to base ten**

Place values in base four are 4³, 4², 4¹, 4⁰ = 64, 16, 4, 1.

2103₄ = 2×64 + 1×16 + 0×4 + 3×1
     = 128 + 16 + 0 + 3
     = **147₁₀**.

**Part (b) — adding in base five**

Line the numbers up by place value:

\`\`\`
   1 4 3
 +   2 4
 -------
\`\`\`

- **Units:** 3 + 4 = 7. In base five, 7 = 1×5 + 2 → write **2**, carry **1**.
- **Fives:** 4 + 2 + 1 (carried) = 7 = 1×5 + 2 → write **2**, carry **1**.
- **Twenty-fives:** 1 + 1 (carried) = 2 → write **2**.

Answer: **222₅**.

**Check in base ten:** 143₅ = 1×25 + 4×5 + 3 = 48; 24₅ = 2×5 + 4 = 14; 48 + 14 = 62. And 222₅ = 2×25 + 2×5 + 2 = 50 + 10 + 2 = 62. ✓`,
      teachingTip:
        "Learners routinely read 132₅ aloud as 'one hundred and thirty-two', which quietly destroys their understanding. Insist from the first lesson that non-ten numbers are read digit by digit — 'one-three-two, base five'. When teaching base-ten conversion, always have them check the answer by converting back; the round-trip catches almost every carrying error.",
      quiz: [
        {
          prompt: "How many distinct digits are used in base five?",
          options: ["Five (0,1,2,3,4)", "Six (0–5)", "Four (0–3)", "Ten (0–9)"],
          correctIndex: 0,
          explanation: "Base five uses digits 0,1,2,3,4 — five of them. There is no digit 5.",
        },
        {
          prompt: "In base eight, which of these is NOT a valid digit?",
          options: ["8", "7", "0", "5"],
          correctIndex: 0,
          explanation: "Base eight uses 0–7. The symbol 8 is not a digit in octal.",
        },
        {
          prompt: "What is the place value of the leftmost digit in 1000₂ (base two)?",
          options: ["2³ = 8", "2² = 4", "10³ = 1000", "2⁴ = 16"],
          correctIndex: 0,
          explanation: "In base two the fourth place from the right is 2³ = 8.",
        },
        {
          prompt: "Convert 24₅ to base ten.",
          options: ["14", "24", "20", "9"],
          correctIndex: 0,
          explanation: "2×5 + 4×1 = 10 + 4 = 14.",
        },
        {
          prompt: "Convert 101₂ to base ten.",
          options: ["5", "3", "101", "6"],
          correctIndex: 0,
          explanation: "1×4 + 0×2 + 1×1 = 5.",
        },
        {
          prompt: "Convert 132₅ to base ten.",
          options: ["42", "132", "37", "45"],
          correctIndex: 0,
          explanation: "1×25 + 3×5 + 2×1 = 25 + 15 + 2 = 42.",
        },
        {
          prompt: "Convert 27₈ to base ten.",
          options: ["23", "27", "15", "17"],
          correctIndex: 0,
          explanation: "2×8 + 7×1 = 16 + 7 = 23.",
        },
        {
          prompt: "Convert 13₁₀ to base two.",
          options: ["1101", "1011", "1110", "111"],
          correctIndex: 0,
          explanation: "13 = 8 + 4 + 1 = 1101₂ (remainders read bottom-up).",
        },
        {
          prompt: "Convert 17₁₀ to base five.",
          options: ["32", "17", "23", "34"],
          correctIndex: 0,
          explanation: "17 ÷ 5 = 3 r 2, 3 ÷ 5 = 0 r 3, reading up gives 32₅ (3×5 + 2 = 17).",
        },
        {
          prompt: "In base five, what is 4 + 3?",
          options: ["12", "7", "11", "13"],
          correctIndex: 0,
          explanation: "4 + 3 = 7 = 1×5 + 2, written 12₅.",
        },
        {
          prompt: "In base eight, what is 5 + 6?",
          options: ["13", "11", "12", "14"],
          correctIndex: 0,
          explanation: "5 + 6 = 11 = 1×8 + 3, written 13₈.",
        },
        {
          prompt: "Add 12₅ + 3₅ in base five.",
          options: ["20", "15", "21", "10"],
          correctIndex: 0,
          explanation: "12₅ = 7, plus 3 = 10 in base ten = 2×5 = 20₅.",
        },
        {
          prompt: "What number does 100₈ equal in base ten?",
          options: ["64", "100", "8", "16"],
          correctIndex: 0,
          explanation: "1×8² = 64.",
        },
        {
          prompt: "The number 111₅ means how much in base ten?",
          options: ["31", "111", "21", "15"],
          correctIndex: 0,
          explanation: "1×25 + 1×5 + 1×1 = 31.",
        },
        {
          prompt: "Find the base b if 21_b = 11₁₀.",
          options: ["5", "4", "3", "6"],
          correctIndex: 0,
          explanation: "2b + 1 = 11 → 2b = 10 → b = 5.",
        },
        {
          prompt: "In base two, what is 1 + 1?",
          options: ["10", "2", "11", "1"],
          correctIndex: 0,
          explanation: "1 + 1 = 2 = 1×2 + 0, written 10₂.",
        },
        {
          prompt: "How is the number 3 425 written in expanded base-ten form?",
          options: [
            "3×1000 + 4×100 + 2×10 + 5×1",
            "3×100 + 4×10 + 2×1 + 5",
            "3×10 + 4×10 + 2×10 + 5×10",
            "3425×1",
          ],
          correctIndex: 0,
          explanation: "Each place is ten times the one to its right: thousands, hundreds, tens, units.",
        },
        {
          prompt: "When adding in base five, you carry as soon as a column reaches which value?",
          options: ["5", "10", "4", "2"],
          correctIndex: 0,
          explanation: "In base five you carry whenever a column total reaches the base, 5.",
        },
        {
          prompt: "Convert 8₁₀ to base two.",
          options: ["1000", "100", "111", "1100"],
          correctIndex: 0,
          explanation: "8 = 2³, so 8₁₀ = 1000₂.",
        },
        {
          prompt: "Which base-ten number equals 10₅?",
          options: ["5", "10", "15", "1"],
          correctIndex: 0,
          explanation: "1×5 + 0 = 5.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Convert 2314₅ to base ten, showing your place values.",
          answerKey:
            "2×125 + 3×25 + 1×5 + 4×1 = 250 + 75 + 5 + 4 = 334₁₀. Award marks for correct place values (5³,5²,5¹,5⁰) and correct arithmetic.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Convert 89₁₀ to base two.",
          answerKey:
            "Repeated division by 2: 89→1, 44→0, 22→0, 11→1, 5→1, 2→0, 1→1 giving 1011001₂. Check: 64+16+8+1 = 89. Full marks for 1011001₂.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Add 234₅ + 143₅, giving your answer in base five.",
          answerKey:
            "Units 4+3=7=12₅ (write 2 carry 1); fives 3+4+1=8=13₅ (write 3 carry 1); twenty-fives 2+1+1=4. Answer 432₅. Check in base ten: 69 + 48 = 117 = 432₅. Award marks for correct carrying at each column.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "What is the value of the digit 7 in the octal number 74₈?",
          options: ["7×8 = 56", "7×1 = 7", "7×64 = 448", "7×10 = 70"],
          correctIndex: 0,
          answerKey: "The 7 is in the eights place, so its value is 7×8 = 56.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain why the base-two (binary) system is used inside computers, and describe how the base-ten number 10 is represented in binary.",
          answerKey:
            "A strong answer notes that electronic circuits have two stable states (on/off, high/low voltage) which map naturally onto the two binary digits 0 and 1, making binary reliable to store and process. For the conversion: 10 = 8 + 2 = 1010₂ (1×8 + 0×4 + 1×2 + 0×1). Award marks for the two-state hardware reasoning and for a correct, justified conversion to 1010₂.",
          marks: 5,
        },
      ],
    },
  ],
};
