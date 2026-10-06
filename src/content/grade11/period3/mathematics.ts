import type { PeriodContent } from "@/content/types";

// Grade 11, Semester One, Period III of the MoE Mathematics syllabus:
// Variation (Topic 1) and Quadratic Functions and Equations (Topic 11).
// Notes rebuilt from published sources (CK-12, Khan Academy, Siyavula).
export const mathematicsG11P3: PeriodContent = {
  grade: 11,
  number: 3,
  title: "Variation and Quadratic Functions and Equations",
  summary:
    "Period III of the MoE Grade 11 Mathematics syllabus. Learners set up and solve direct, inverse, joint and partial variation, solve quadratic equations by factorisation, completing the square and the quadratic formula, and graph quadratic functions and solve equations graphically.",
  topics: [
    // source: CK-12 — Joint and Combined Variation (https://flexbooks.ck12.org/cbook/ck-12-elementary-intermediate-college-algebra/section/5.10/primary/lesson/joint-and-combined-variation-c-alg/) and Khan Academy — Direct and inverse variation (https://www.khanacademy.org/math/algebra-home/alg-rational-expr-eq-func/alg-direct-and-inverse-variation/v/direct-inverse-and-joint-variation)
    {
      slug: "variation",
      title: "Variation",
      objective:
        "By the end of the topic, learners should be able to recognise and solve problems on direct, inverse, joint and partial variation by finding the constant of proportionality.",
      estimatedMinutes: 120,
      notes: `## The constant of proportionality

- In every variation there is a fixed number **k**, the **constant of proportionality (variation)**, found by substituting a known pair of values.
- Method: write the equation with k, substitute given values to find k, then use the completed equation.

## Direct variation

- y **varies directly** with x when they increase and decrease together at a constant rate: **y = kx**.
- The ratio y/x = k is constant.
- If y = 12 when x = 3, then k = 4 and y = 4x.

## Inverse variation

- y **varies inversely** with x when one increases as the other decreases: **y = k/x**.
- The product xy = k is constant.
- If y = 4 when x = 3, then k = 12 and y = 12/x.

## Joint variation

- y **varies jointly** with two or more variables when it varies directly with their product: **y = kxz**.
- If z varies jointly with x and y with k = ¼, then z = ¼xy.

## Partial variation

- y is **partly constant and partly variable**: **y = kx + c**, a fixed part c plus a part that varies with x.
- Two conditions are needed to find both k and c.

| Type | Equation | What stays constant |
| --- | --- | --- |
| Direct | y = kx | y/x |
| Inverse | y = k/x | xy |
| Joint | y = kxz | y/(xz) |
| Partial | y = kx + c | k and c |

## Common errors

- **Confusing direct and inverse** — direct multiplies (y = kx), inverse divides (y = k/x).
- **Not finding k first** — the constant must be found before answering.
- **Using one condition for partial variation** — two are required to find k and c.`,
      workedExample: `**Question:** y varies inversely with x. When x = 4, y = 6. Find y when x = 8.

**Solution**

*Step 1 — write the inverse-variation equation.*
y = k/x

*Step 2 — substitute the known pair to find k.*
6 = k/4, so k = 6 × 4 = 24

*Step 3 — write the completed equation.*
y = 24/x

*Step 4 — substitute x = 8.*
y = 24/8 = 3

**Answer: y = 3**

*Check:* xy should stay constant: 4 × 6 = 24 and 8 × 3 = 24. ✔`,
      quiz: [
        { prompt: "Direct variation is written", options: ["y = k/x", "y = kx", "y = kx + c", "y = kxz"], correctIndex: 1, explanation: "y and x change together, y = kx." },
        { prompt: "Inverse variation is written", options: ["y = kx", "y = k/x", "y = x/k", "y = k + x"], correctIndex: 1, explanation: "y = k/x." },
        { prompt: "In y = kx, k is the", options: ["variable", "constant of proportionality", "exponent", "base"], correctIndex: 1, explanation: "k is the constant of variation." },
        { prompt: "If y varies directly with x and y = 12 when x = 3, then k =", options: ["3", "4", "9", "36"], correctIndex: 1, explanation: "k = y/x = 12/3 = 4." },
        { prompt: "For direct variation, which ratio is constant?", options: ["xy", "y/x", "x − y", "y + x"], correctIndex: 1, explanation: "y/x = k." },
        { prompt: "For inverse variation, which is constant?", options: ["y/x", "xy", "x/y − 1", "y − x"], correctIndex: 1, explanation: "xy = k." },
        { prompt: "Joint variation of y with x and z is", options: ["y = k/xz", "y = kxz", "y = kx + z", "y = k(x + z)"], correctIndex: 1, explanation: "It varies directly with the product." },
        { prompt: "Partial variation has the form", options: ["y = kx", "y = k/x", "y = kx + c", "y = kxz"], correctIndex: 2, explanation: "A constant part plus a variable part." },
        { prompt: "If y = k/x and y = 4 when x = 3, then k =", options: ["7", "12", "1.3", "3/4"], correctIndex: 1, explanation: "k = xy = 3 × 4 = 12." },
        { prompt: "With y = 4x, find y when x = 5.", options: ["9", "20", "1.25", "45"], correctIndex: 1, explanation: "y = 4 × 5 = 20." },
        { prompt: "z varies jointly with x and y, z = ¼xy. If x = −2, y = 10, z =", options: ["−5", "5", "−20", "2.5"], correctIndex: 0, explanation: "¼ × (−2) × 10 = −5." },
        { prompt: "In direct variation, if x doubles then y", options: ["halves", "doubles", "stays the same", "squares"], correctIndex: 1, explanation: "y = kx, so doubling x doubles y." },
        { prompt: "In inverse variation, if x doubles then y", options: ["doubles", "halves", "stays the same", "triples"], correctIndex: 1, explanation: "y = k/x, so doubling x halves y." },
        { prompt: "y = 12/x. Find y when x = 6.", options: ["2", "6", "72", "0.5"], correctIndex: 0, explanation: "12/6 = 2." },
        { prompt: "Partial variation needs how many conditions to find k and c?", options: ["one", "two", "three", "none"], correctIndex: 1, explanation: "Two equations for two unknowns." },
        { prompt: "The cost varies directly with quantity: 5 items cost R40. One item costs", options: ["R5", "R8", "R35", "R45"], correctIndex: 1, explanation: "k = 40/5 = 8, so R8 each." },
        { prompt: "Which describes y = kxz?", options: ["direct", "inverse", "joint", "partial"], correctIndex: 2, explanation: "Joint variation with a product." },
        { prompt: "If y varies inversely with x, the graph of y against x is", options: ["a straight line through the origin", "a curve (hyperbola)", "a parabola", "horizontal"], correctIndex: 1, explanation: "y = k/x is a hyperbola." },
        { prompt: "For y = kx + c with y = 7 at x = 1 and y = 11 at x = 3, k =", options: ["2", "3", "4", "5"], correctIndex: 0, explanation: "Subtracting: 4 = 2k, so k = 2." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "y varies directly with x. When x = 6, y = 42. Find k and then y when x = 10.", answerKey: "y = kx; 42 = 6k so k = 7; y = 7x; at x = 10, y = 70. Award 2 marks for k = 7, 2 for the equation, 2 for y = 70.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "P varies inversely with V. When V = 5, P = 8. Find P when V = 2.", answerKey: "P = k/V; k = PV = 5 × 8 = 40; P = 40/V; at V = 2, P = 40/2 = 20. Award 3 marks for k = 40, 3 for P = 20.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "z varies jointly with x and y, with k = 3. Find z when x = 2 and y = 5.", options: ["10", "15", "30", "3"], correctIndex: 2, answerKey: "z = 3xy = 3 × 2 × 5 = 30. Option C.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State whether each is direct, inverse, joint or partial: (a) y = 5x, (b) y = 20/x, (c) y = 2x + 3, (d) y = kxz.", answerKey: "(a) direct, (b) inverse, (c) partial, (d) joint. Award 1.5 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the difference between direct and inverse variation, describe how to find the constant of proportionality, and solve: y varies inversely with x, and y = 9 when x = 2; find y when x = 6.", answerKey: "In direct variation y = kx, y and x rise and fall together and y/x is constant; in inverse variation y = k/x, one rises as the other falls and xy is constant. To find k, substitute a known pair into the equation. Solve: y = k/x; k = 9 × 2 = 18; y = 18/x; at x = 6, y = 18/6 = 3. Award 4 marks for the direct/inverse explanation, 2 for the method of finding k, 4 for the answer y = 3.", marks: 10 },
      ],
    },
    // source: Siyavula — Quadratic equations, Grade 11 (https://www.siyavula.com/read/za/mathematics/grade-11/quadratic-equations/07-quadratic-equations-01)
    {
      slug: "quadratic-equations",
      title: "Quadratic Equations",
      objective:
        "By the end of the topic, learners should be able to solve quadratic equations by factorisation, by completing the square and by the quadratic formula, and solve word problems.",
      estimatedMinutes: 130,
      notes: `## Quadratic equations

- A **quadratic equation** has the form ax² + bx + c = 0, with a ≠ 0.
- It has at most **two solutions (roots)** — the values of x that make it true.

## Method 1: Factorisation

- Write the quadratic as a product of two brackets equal to 0, then use the **zero-product rule**: if PQ = 0 then P = 0 or Q = 0.
- Solve x² − 5x + 6 = 0: (x − 2)(x − 3) = 0, so x = 2 or x = 3.

## Method 2: Completing the square

- Rearrange to (x + p)² = q, then take the square root of both sides.
- x² + 6x − 7 = 0 → x² + 6x = 7 → (x + 3)² = 7 + 9 = 16 → x + 3 = ±4 → x = 1 or x = −7.

## Method 3: The quadratic formula

- Works for every quadratic:
- **x = (−b ± √(b² − 4ac)) / (2a)**
- The part **b² − 4ac** (the discriminant) shows how many real roots there are: positive → two, zero → one, negative → none.

Example: 2x² + 5x + 3 = 0, with a = 2, b = 5, c = 3.
x = (−5 ± √(25 − 24)) / 4 = (−5 ± 1)/4, giving x = −1 or x = −3/2.

## Word problems

- Let a variable stand for the unknown, form a quadratic equation, solve it, and **reject any answer that does not fit** (e.g. a negative length).

## Common errors

- **Forgetting the ± in the formula** — a quadratic usually has two roots.
- **Not setting the equation to 0 first** before factorising.
- **Sign slips in −b and 4ac** — substitute carefully with brackets.`,
      workedExample: `**Question:** Solve 2x² + 5x + 3 = 0 using the quadratic formula.

**Solution**

*Step 1 — identify a, b, c.* a = 2, b = 5, c = 3.

*Step 2 — write the formula.*
x = (−b ± √(b² − 4ac)) / (2a)

*Step 3 — substitute.*
x = (−5 ± √(5² − 4×2×3)) / (2×2) = (−5 ± √(25 − 24)) / 4

*Step 4 — simplify the discriminant.*
√(25 − 24) = √1 = 1

*Step 5 — write the two roots.*
x = (−5 + 1)/4 = −1 or x = (−5 − 1)/4 = −6/4 = −3/2

**Answer: x = −1 or x = −3/2**

*Check by factorising:* (2x + 3)(x + 1) = 0 gives the same roots. ✔`,
      quiz: [
        { prompt: "A quadratic equation has the form", options: ["ax + b = 0", "ax² + bx + c = 0", "a/x = b", "ax³ = b"], correctIndex: 1, explanation: "Degree two, a ≠ 0." },
        { prompt: "The zero-product rule says if PQ = 0 then", options: ["P = Q", "P = 0 or Q = 0", "P + Q = 0", "PQ = 1"], correctIndex: 1, explanation: "At least one factor is zero." },
        { prompt: "Solve (x − 2)(x − 3) = 0.", options: ["x = 2 or 3", "x = −2 or −3", "x = 5", "x = 6"], correctIndex: 0, explanation: "Each bracket zero: x = 2 or x = 3." },
        { prompt: "The quadratic formula is x =", options: ["(−b ± √(b² − 4ac))/2a", "−b/2a", "b² − 4ac", "(b ± √(4ac))/a"], correctIndex: 0, explanation: "The standard formula." },
        { prompt: "In 2x² + 5x + 3 = 0, the discriminant b² − 4ac is", options: ["1", "49", "−1", "25"], correctIndex: 0, explanation: "25 − 24 = 1." },
        { prompt: "Solve 2x² + 5x + 3 = 0.", options: ["x = −1 or −3/2", "x = 1 or 3/2", "x = 2 or 3", "x = −2 or −3"], correctIndex: 0, explanation: "(−5 ± 1)/4 = −1 or −3/2." },
        { prompt: "How many roots does a quadratic have at most?", options: ["1", "2", "3", "4"], correctIndex: 1, explanation: "Degree two gives up to two roots." },
        { prompt: "Solve x² − 9 = 0.", options: ["x = 3 only", "x = ±3", "x = 9", "x = ±9"], correctIndex: 1, explanation: "x² = 9, so x = ±3." },
        { prompt: "Before factorising, the equation should equal", options: ["1", "0", "x", "a"], correctIndex: 1, explanation: "Set it to 0 to use the zero-product rule." },
        { prompt: "Factorise and solve x² + 7x + 12 = 0.", options: ["x = −3 or −4", "x = 3 or 4", "x = −2 or −6", "x = 12 or 1"], correctIndex: 0, explanation: "(x + 3)(x + 4) = 0." },
        { prompt: "The discriminant b² − 4ac = 0 means", options: ["two roots", "one root", "no real roots", "three roots"], correctIndex: 1, explanation: "A repeated (single) root." },
        { prompt: "A negative discriminant means", options: ["two real roots", "one real root", "no real roots", "infinite roots"], correctIndex: 2, explanation: "The square root of a negative is not real." },
        { prompt: "Solve x² − 5x + 6 = 0.", options: ["x = 2 or 3", "x = −2 or −3", "x = 1 or 6", "x = 5 or 6"], correctIndex: 0, explanation: "(x − 2)(x − 3) = 0." },
        { prompt: "Completing the square rewrites the equation as", options: ["ax + b = 0", "(x + p)² = q", "x = k/x", "y = mx + c"], correctIndex: 1, explanation: "A perfect square equals a number." },
        { prompt: "In x = (−b ± √(b²−4ac))/2a for x² − 4x + 3 = 0, b² − 4ac =", options: ["4", "16", "28", "−4"], correctIndex: 0, explanation: "16 − 12 = 4." },
        { prompt: "Solve x² − 4x + 3 = 0.", options: ["x = 1 or 3", "x = −1 or −3", "x = 2 or 3", "x = 4 or 3"], correctIndex: 0, explanation: "(x − 1)(x − 3) = 0." },
        { prompt: "If a length problem gives x = 5 or x = −2, the valid length is", options: ["−2", "5", "both", "neither"], correctIndex: 1, explanation: "A length cannot be negative." },
        { prompt: "Solve x² = 7x.", options: ["x = 0 or 7", "x = 7 only", "x = ±7", "x = 1 or 7"], correctIndex: 0, explanation: "x² − 7x = 0 → x(x − 7) = 0." },
        { prompt: "The ± sign in the formula produces", options: ["one root", "two possible roots", "no roots", "the discriminant"], correctIndex: 1, explanation: "Plus and minus give the two roots." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Solve by factorisation: x² + 2x − 15 = 0.", answerKey: "Factors of −15 summing to 2 are 5 and −3: (x + 5)(x − 3) = 0, so x = −5 or x = 3. Award 3 marks for factorising, 3 for both roots.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Solve using the quadratic formula: x² − 4x − 1 = 0. Leave the answer in surd form.", answerKey: "a = 1, b = −4, c = −1; x = (4 ± √(16 + 4))/2 = (4 ± √20)/2 = (4 ± 2√5)/2 = 2 ± √5. Award 2 marks for substitution, 2 for √20 = 2√5, 2 for x = 2 ± √5.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "How many real roots does x² + x + 1 = 0 have? (discriminant b² − 4ac)", options: ["2", "1", "0", "3"], correctIndex: 2, answerKey: "b² − 4ac = 1 − 4 = −3 < 0, so no real roots. Option C.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "The product of two consecutive positive integers is 56. Form and solve a quadratic to find them.", answerKey: "Let the integers be x and x + 1: x(x + 1) = 56 → x² + x − 56 = 0 → (x + 8)(x − 7) = 0 → x = −8 or x = 7. Reject −8; the integers are 7 and 8. Award 2 marks for the equation, 2 for solving, 2 for choosing 7 and 8.", marks: 6 },
        { type: "ESSAY", prompt: "Describe the three methods for solving quadratic equations, and solve x² − 6x + 5 = 0 by two different methods to show they agree.", answerKey: "Methods: factorisation (write as a product = 0 and use the zero-product rule), completing the square ((x + p)² = q then square-root), and the quadratic formula x = (−b ± √(b² − 4ac))/2a. Factorisation: (x − 1)(x − 5) = 0 → x = 1 or 5. Formula: x = (6 ± √(36 − 20))/2 = (6 ± 4)/2 → x = 5 or 1. Both give x = 1 or x = 5. Award 3 marks for the three methods, 3 for factorisation, 4 for the formula solution agreeing.", marks: 10 },
      ],
    },
    // source: Siyavula — Quadratic functions, Grade 11 Functions (https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-01)
    {
      slug: "quadratic-functions-and-graphs",
      title: "Quadratic Functions and Graphs",
      objective:
        "By the end of the topic, learners should be able to sketch the parabola of a quadratic function, identify its turning point, axis of symmetry and intercepts, and solve quadratic equations graphically.",
      estimatedMinutes: 120,
      notes: `## The quadratic function

- A **quadratic function** y = ax² + bx + c (a ≠ 0) has a graph called a **parabola**.
- It can also be written in **turning-point form** y = a(x − h)² + k, where (h, k) is the turning point.

## Shape (concavity)

- If **a > 0** the parabola opens **upward** (a "valley") with a **minimum** turning point.
- If **a < 0** the parabola opens **downward** (a "hill") with a **maximum** turning point.

## Key features

| Feature | How to find it |
| --- | --- |
| y-intercept | put x = 0, giving y = c |
| x-intercepts (roots) | put y = 0 and solve ax² + bx + c = 0 |
| axis of symmetry | the vertical line x = −b/(2a) |
| turning point (vertex) | on the axis of symmetry, x = −b/(2a), then find y |

\`\`\`svg Parabola with turning point and axis of symmetry
<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" y1="140" x2="190" y2="140" stroke="#555" stroke-width="1"/>
  <line x1="100" y1="10" x2="100" y2="150" stroke="#999" stroke-width="1" stroke-dasharray="4 3"/>
  <path d="M30 20 Q100 200 170 20" fill="none" stroke="#1d4ed8" stroke-width="2"/>
  <circle cx="100" cy="130" r="3" fill="#dc2626"/>
  <text x="104" y="128" font-size="10" fill="#dc2626">turning point</text>
  <text x="104" y="24" font-size="9" fill="#666">axis x = −b/2a</text>
</svg>
\`\`\`

## Solving graphically

- The **roots** of ax² + bx + c = 0 are the **x-values where the parabola crosses the x-axis**.
- To solve ax² + bx + c = d graphically, read the x-values where the parabola meets the horizontal line y = d.

Example: g(x) = 3x² − 6x − 1 = 3(x − 1)² − 4, so the turning point is (1, −4), a minimum since a > 0, and the axis of symmetry is x = 1.

## Common errors

- **Wrong concavity** — check the sign of a.
- **Axis of symmetry as −b/a** — it is −b/(2a).
- **Reading the y-intercept as a** — it is c (the value at x = 0).`,
      workedExample: `**Question:** For y = x² − 4x + 3, find the y-intercept, the x-intercepts, the axis of symmetry and the turning point, and state whether it is a minimum or maximum.

**Solution**

*Step 1 — y-intercept: put x = 0.*
y = 0 − 0 + 3 = 3, so (0, 3).

*Step 2 — x-intercepts: put y = 0.*
x² − 4x + 3 = 0 → (x − 1)(x − 3) = 0 → x = 1 or x = 3, so (1, 0) and (3, 0).

*Step 3 — axis of symmetry: x = −b/(2a).*
x = −(−4)/(2×1) = 4/2 = 2.

*Step 4 — turning point: substitute x = 2.*
y = 2² − 4(2) + 3 = 4 − 8 + 3 = −1, so (2, −1).

*Step 5 — concavity.* a = 1 > 0, so it opens upward: a **minimum**.

**Answer: y-intercept (0, 3); x-intercepts (1, 0) and (3, 0); axis x = 2; turning point (2, −1), a minimum.**`,
      quiz: [
        { prompt: "The graph of a quadratic function is a", options: ["straight line", "parabola", "circle", "hyperbola"], correctIndex: 1, explanation: "y = ax² + bx + c graphs a parabola." },
        { prompt: "If a > 0 the parabola", options: ["opens upward", "opens downward", "is a line", "has no vertex"], correctIndex: 0, explanation: "Positive a gives a minimum, opening up." },
        { prompt: "If a < 0 the parabola has a", options: ["minimum", "maximum", "no turning point", "root at 0"], correctIndex: 1, explanation: "Negative a opens downward with a maximum." },
        { prompt: "The y-intercept of y = ax² + bx + c is", options: ["a", "b", "c", "0"], correctIndex: 2, explanation: "At x = 0, y = c." },
        { prompt: "The axis of symmetry is x =", options: ["−b/a", "−b/(2a)", "b/(2a)", "−c/a"], correctIndex: 1, explanation: "x = −b/(2a)." },
        { prompt: "The x-intercepts are found by setting", options: ["x = 0", "y = 0", "a = 0", "y = c"], correctIndex: 1, explanation: "Solve ax² + bx + c = 0." },
        { prompt: "For y = x² − 4x + 3, the y-intercept is", options: ["(0, 3)", "(0, −4)", "(3, 0)", "(0, 1)"], correctIndex: 0, explanation: "y = 3 when x = 0." },
        { prompt: "For y = x² − 4x + 3, the axis of symmetry is", options: ["x = 4", "x = 2", "x = −2", "x = 1"], correctIndex: 1, explanation: "−(−4)/2 = 2." },
        { prompt: "For y = x² − 4x + 3, the turning point is", options: ["(2, −1)", "(2, 1)", "(0, 3)", "(1, 0)"], correctIndex: 0, explanation: "At x = 2, y = −1." },
        { prompt: "In turning-point form y = a(x − h)² + k, the vertex is", options: ["(h, k)", "(−h, k)", "(k, h)", "(0, k)"], correctIndex: 0, explanation: "(h, k) is the turning point." },
        { prompt: "g(x) = 3(x − 1)² − 4 has turning point", options: ["(1, −4)", "(−1, 4)", "(1, 4)", "(3, −4)"], correctIndex: 0, explanation: "h = 1, k = −4." },
        { prompt: "The x-intercepts of a parabola are also the", options: ["y-values", "roots of the equation", "gradient", "axis"], correctIndex: 1, explanation: "They are where y = 0." },
        { prompt: "To solve x² − 2x = 3 graphically, read where the parabola meets", options: ["y = 0", "y = 3", "x = 3", "the y-axis"], correctIndex: 1, explanation: "Intersect with the line y = 3." },
        { prompt: "A parabola opening upward has a lowest point called the", options: ["maximum", "minimum", "intercept", "root"], correctIndex: 1, explanation: "It is the minimum turning point." },
        { prompt: "For y = −x² + 4, the graph opens", options: ["upward", "downward", "sideways", "not a parabola"], correctIndex: 1, explanation: "a = −1 < 0 opens downward." },
        { prompt: "The turning point lies on the", options: ["y-axis", "x-axis", "axis of symmetry", "line y = x"], correctIndex: 2, explanation: "It sits on x = −b/(2a)." },
        { prompt: "y = x² has turning point", options: ["(0, 0)", "(1, 1)", "(0, 1)", "(1, 0)"], correctIndex: 0, explanation: "Vertex at the origin." },
        { prompt: "If a parabola does not cross the x-axis, the equation ax²+bx+c=0 has", options: ["two real roots", "one real root", "no real roots", "three roots"], correctIndex: 2, explanation: "No x-intercepts means no real roots." },
        { prompt: "For y = x² − 4x + 3, the x-intercepts are", options: ["(1,0) and (3,0)", "(0,1) and (0,3)", "(−1,0) and (−3,0)", "(2,0) only"], correctIndex: 0, explanation: "(x − 1)(x − 3) = 0." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "For y = x² − 6x + 8, find the y-intercept and x-intercepts.", answerKey: "y-intercept: x = 0 gives y = 8, (0, 8). x-intercepts: x² − 6x + 8 = 0 → (x − 2)(x − 4) = 0 → (2, 0) and (4, 0). Award 2 marks for the y-intercept, 4 for both x-intercepts.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Find the axis of symmetry and turning point of y = x² − 2x − 3.", answerKey: "Axis: x = −(−2)/(2×1) = 1. Turning point: y = 1 − 2 − 3 = −4, so (1, −4). Award 3 marks for the axis, 3 for the turning point.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "The parabola y = −2x² + 3x − 1 opens", options: ["upward with a minimum", "downward with a maximum", "upward with a maximum", "it is a straight line"], correctIndex: 1, answerKey: "a = −2 < 0, so it opens downward with a maximum. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain how to solve x² − x − 6 = 0 using the graph of y = x² − x − 6.", answerKey: "The solutions are the x-values where the parabola crosses the x-axis (y = 0). Solving: (x − 3)(x + 2) = 0 gives x = 3 and x = −2, so the graph cuts the x-axis at (−2, 0) and (3, 0). Award 3 marks for the graphical idea, 3 for the roots.", marks: 6 },
        { type: "ESSAY", prompt: "For y = x² − 4x + 3, describe how to find the y-intercept, x-intercepts, axis of symmetry and turning point, state the concavity, and sketch the main features.", answerKey: "y-intercept: x = 0 → (0, 3). x-intercepts: y = 0 → (x − 1)(x − 3) = 0 → (1, 0) and (3, 0). Axis of symmetry: x = −b/(2a) = 4/2 = 2. Turning point: at x = 2, y = 4 − 8 + 3 = −1 → (2, −1). Since a = 1 > 0 the parabola opens upward (minimum). A correct sketch shows a valley-shaped parabola through (1,0), (3,0) and (0,3), lowest at (2,−1), symmetric about x = 2. Award 2 marks each for the intercepts, axis and turning point, 2 for concavity and sketch.", marks: 10 },
      ],
    },
  ],
};
