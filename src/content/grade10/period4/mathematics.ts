import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Mathematics, Grade 10,
// Semester Two, Period IV: Topic 1 Linear Equations and Inequalities;
// Topic 2 Relations and Functions.
export const mathematicsG10P4: PeriodContent = {
  grade: 10,
  number: 4,
  title: "Linear Equations and Functions",
  summary:
    "Period IV of the MoE Grade 10 Mathematics syllabus. Learners solve linear equations and inequalities in one variable, including word problems and number-line representation, then meet relations and functions — mapping, domain and range, and function notation.",
  topics: [
{
      slug: "linear-equations-and-inequalities",
      title: "Linear Equations and Inequalities",
      objective:
        "By the end of the topic, learners should be able to solve linear equations in one variable, translate and solve word problems, solve linear inequalities, and represent inequality solutions on a number line.",
      estimatedMinutes: 190,
      notes: `## Equations and equality

An **equation** is a mathematical statement that two expressions are **equal**, joined by an "=" sign, e.g. 2x + 3 = 11.

To **solve** an equation is to find the value of the variable that makes it true — its **solution set**. The golden rule:

> Whatever you do to one side of an equation, you must do to the other, to keep it balanced.

## Solving linear equations

A **linear equation** has the variable to the power 1 only. Use inverse operations to undo what has been done to the variable.

Solve 2x + 3 = 11:
- Subtract 3 from both sides: 2x = 8
- Divide both sides by 2: **x = 4**

**Check:** 2(4) + 3 = 8 + 3 = 11 ✓

### Equations with the variable on both sides
Solve 5x − 2 = 3x + 8:
- Subtract 3x from both sides: 2x − 2 = 8
- Add 2: 2x = 10
- Divide by 2: **x = 5**

### Equations with brackets
Expand first, then solve: 3(x − 4) = 9 → 3x − 12 = 9 → 3x = 21 → **x = 7**.

### Equations with fractions
Clear the fractions first by **multiplying every term** by the lowest common denominator (LCD).

Solve x/2 + x/3 = 5:
- The LCD of 2 and 3 is 6. Multiply every term by 6: 6(x/2) + 6(x/3) = 6(5) → 3x + 2x = 30.
- Collect: 5x = 30 → **x = 6**. (Check: 6/2 + 6/3 = 3 + 2 = 5 ✓)

## Word problems

Turn the words into an equation, then solve.

*"A number multiplied by 4, then increased by 5, gives 29. Find the number."*
- Let the number be x: 4x + 5 = 29
- 4x = 24 → **x = 6**.

## Inequalities

An **inequality** compares two expressions that are not necessarily equal:

- **<** less than, **>** greater than
- **≤** less than or equal to, **≥** greater than or equal to

Solve inequalities exactly like equations, with **one crucial rule**:

> If you **multiply or divide both sides by a negative number, reverse the inequality sign.**

Solve 2x + 1 < 9:
- 2x < 8 → **x < 4**

Solve −3x ≥ 12:
- Divide by −3 and **flip** the sign: **x ≤ −4**.

### Compound (double) inequalities
An inequality can trap the variable between two values. Do the same operation to **all three parts**.

Solve 1 ≤ 2x − 3 < 7:
- Add 3 throughout: 4 ≤ 2x < 10.
- Divide throughout by 2: **2 ≤ x < 5** — every value from 2 (included) up to 5 (not included).

## Showing solutions on a number line

The solution of an inequality is a range of values, shown on a number line:

\`\`\`svg Number line showing x < 4
<svg viewBox="0 0 300 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line with an open circle at 4 and shading to the left">
  <line x1="20" y1="40" x2="280" y2="40" stroke="#111" stroke-width="2"/>
  <line x1="20" y1="40" x2="215" y2="40" stroke="#dc2626" stroke-width="5"/>
  <circle cx="215" cy="40" r="7" fill="#fff" stroke="#dc2626" stroke-width="2.5"/>
  <g font-size="11" text-anchor="middle" fill="#111">
    <text x="70" y="60">1</text><text x="118" y="60">2</text><text x="167" y="60">3</text><text x="215" y="60">4</text><text x="263" y="60">5</text>
  </g>
</svg>
\`\`\`

- An **open circle** (○) means the value is **not** included (< or >).
- A **filled circle** (●) means the value **is** included (≤ or ≥).`,
      workedExample: `**Problem.** (a) Solve 4(x − 2) = 2x + 6. (b) Solve the inequality 5 − 2x ≤ 11 and show the solution on a number line.

**Part (a) — linear equation with brackets**
Expand the bracket first:
4x − 8 = 2x + 6
Subtract 2x from both sides:
2x − 8 = 6
Add 8:
2x = 14
Divide by 2:
**x = 7**

**Check:** 4(7 − 2) = 4 × 5 = 20, and 2(7) + 6 = 14 + 6 = 20. ✓

**Part (b) — inequality**
5 − 2x ≤ 11
Subtract 5 from both sides:
−2x ≤ 6
Divide both sides by −2 — and because we divided by a **negative**, **reverse the sign**:
**x ≥ −3**

**On a number line:** put a **filled circle** at −3 (because of "≥", −3 is included) and shade to the **right**, toward larger values.`,
      teachingTip:
        "The one rule learners forget again and again is flipping the inequality sign when multiplying or dividing by a negative. Make it a ritual: circle the negative divisor and physically flip the sign as you write the next line. Pair this with the open-vs-filled circle convention on the number line, since exams award marks for the correct circle type as well as the correct direction of shading.",
      quiz: [
        {
          prompt: "To solve an equation, whatever you do to one side you must also do to the…",
          options: ["other side", "variable only", "constant only", "answer"],
          correctIndex: 0,
          explanation: "Both sides must stay balanced.",
        },
        {
          prompt: "Solve x + 7 = 12.",
          options: ["x = 5", "x = 19", "x = 7", "x = 12"],
          correctIndex: 0,
          explanation: "Subtract 7: x = 5.",
        },
        {
          prompt: "Solve 3x = 21.",
          options: ["x = 7", "x = 18", "x = 24", "x = 63"],
          correctIndex: 0,
          explanation: "Divide by 3: x = 7.",
        },
        {
          prompt: "Solve 2x + 3 = 11.",
          options: ["x = 4", "x = 7", "x = 5", "x = 8"],
          correctIndex: 0,
          explanation: "2x = 8, so x = 4.",
        },
        {
          prompt: "Solve 5x − 2 = 3x + 8.",
          options: ["x = 5", "x = 3", "x = 10", "x = 2"],
          correctIndex: 0,
          explanation: "2x = 10, so x = 5.",
        },
        {
          prompt: "Solve 3(x − 4) = 9.",
          options: ["x = 7", "x = 3", "x = 1", "x = 12"],
          correctIndex: 0,
          explanation: "3x − 12 = 9 → 3x = 21 → x = 7.",
        },
        {
          prompt: "A number times 4 plus 5 equals 29. The number is…",
          options: ["6", "8", "9", "7"],
          correctIndex: 0,
          explanation: "4x + 5 = 29 → 4x = 24 → x = 6.",
        },
        {
          prompt: "The symbol ≥ means…",
          options: ["greater than or equal to", "less than", "equal to", "not equal to"],
          correctIndex: 0,
          explanation: "≥ means greater than or equal to.",
        },
        {
          prompt: "Solve 2x + 1 < 9.",
          options: ["x < 4", "x > 4", "x < 5", "x > 5"],
          correctIndex: 0,
          explanation: "2x < 8 → x < 4.",
        },
        {
          prompt: "When you divide both sides of an inequality by a negative number, you must…",
          options: ["reverse the inequality sign", "keep the sign", "remove the variable", "add 1"],
          correctIndex: 0,
          explanation: "Dividing by a negative flips the inequality.",
        },
        {
          prompt: "Solve −3x ≥ 12.",
          options: ["x ≤ −4", "x ≥ −4", "x ≤ 4", "x ≥ 4"],
          correctIndex: 0,
          explanation: "Divide by −3 and flip: x ≤ −4.",
        },
        {
          prompt: "On a number line, an open circle (○) means the value is…",
          options: ["not included", "included", "negative", "zero"],
          correctIndex: 0,
          explanation: "Open circle = the endpoint is excluded (< or >).",
        },
        {
          prompt: "On a number line, a filled circle (●) means the value is…",
          options: ["included", "not included", "always zero", "undefined"],
          correctIndex: 0,
          explanation: "Filled circle = the endpoint is included (≤ or ≥).",
        },
        {
          prompt: "Solve x − 5 ≥ 2.",
          options: ["x ≥ 7", "x ≤ 7", "x ≥ −3", "x ≤ 3"],
          correctIndex: 0,
          explanation: "Add 5: x ≥ 7.",
        },
        {
          prompt: "Solve 4x − 3 = 13.",
          options: ["x = 4", "x = 3", "x = 5", "x = 2"],
          correctIndex: 0,
          explanation: "4x = 16 → x = 4.",
        },
        {
          prompt: "A linear equation has the variable to the power…",
          options: ["1", "2", "3", "0"],
          correctIndex: 0,
          explanation: "Linear means the highest power of the variable is 1.",
        },
        {
          prompt: "Solve 10 − x = 4.",
          options: ["x = 6", "x = 14", "x = −6", "x = 4"],
          correctIndex: 0,
          explanation: "−x = −6 → x = 6.",
        },
        {
          prompt: "Solve 2x > 6.",
          options: ["x > 3", "x < 3", "x > 12", "x < 12"],
          correctIndex: 0,
          explanation: "Divide by 2: x > 3.",
        },
        {
          prompt: "The solution set of an equation is…",
          options: [
            "the value(s) that make it true",
            "the largest number",
            "always zero",
            "the coefficient",
          ],
          correctIndex: 0,
          explanation: "It is the set of values satisfying the equation.",
        },
        {
          prompt: "Solve x/3 = 4.",
          options: ["x = 12", "x = 7", "x = 1", "x = 4/3"],
          correctIndex: 0,
          explanation: "Multiply both sides by 3: x = 12.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Solve the equation 3x + 7 = 2x + 15.",
          answerKey:
            "Subtract 2x: x + 7 = 15; subtract 7: x = 8. Check: 3(8)+7 = 31 and 2(8)+15 = 31. Award marks for correct method and the answer x = 8.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Solve 2(x + 3) = 4x − 2.",
          answerKey:
            "Expand: 2x + 6 = 4x − 2; 6 + 2 = 4x − 2x; 8 = 2x; x = 4. Award marks for expansion, rearrangement and the answer x = 4.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Solve the inequality 7 − 3x < 1 and describe how you would show the solution on a number line.",
          answerKey:
            "7 − 3x < 1 → −3x < −6 → divide by −3 and flip: x > 2. On the number line: an open circle at 2 (2 is excluded) with shading to the right. Award marks for the correct solution x > 2, the sign flip, and the open-circle/right-shading description.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which step is required when dividing an inequality by a negative number?",
          options: [
            "reverse the inequality sign",
            "keep the sign the same",
            "change the variable",
            "add the same number to both sides",
          ],
          correctIndex: 0,
          answerKey: "Dividing (or multiplying) by a negative reverses the inequality.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "A father is three times as old as his son. In 5 years, the sum of their ages will be 58. Form an equation and find their present ages.",
          answerKey:
            "Let the son's age be x, so the father's is 3x. In 5 years: (x + 5) + (3x + 5) = 58 → 4x + 10 = 58 → 4x = 48 → x = 12. The son is 12 and the father is 36. Award marks for correct variable definition, forming the equation, solving it, and stating both ages (son 12, father 36).",
          marks: 5,
        },
      ],
    },
    {
      slug: "relations-and-functions",
      title: "Relations and Functions",
      objective:
        "By the end of the topic, learners should be able to define a relation and a function, describe a mapping and give its domain and range, use function notation, and find the gradient of a straight line and the distance between two points.",
      estimatedMinutes: 190,
      notes: `## Relations

A **relation** is a rule that links the members of one set (the **domain**) to the members of another set (the **range**). For example, "is the capital of" relates Monrovia to Liberia.

In mathematics a relation is often a set of **ordered pairs** (x, y), such as {(1, 2), (2, 4), (3, 6)}, where the rule is "y is twice x".

## Mapping, domain and range

A **mapping** shows how each input is linked to an output.

- The **domain** is the set of **inputs** (the x-values).
- The **range** is the set of **outputs** (the y-values).

\`\`\`svg A mapping from domain to range (y = 2x)
<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapping diagram linking 1,2,3 to 2,4,6">
  <ellipse cx="60" cy="75" rx="35" ry="60" fill="#e0e7ff" stroke="#3730a3"/>
  <ellipse cx="200" cy="75" rx="35" ry="60" fill="#e0e7ff" stroke="#3730a3"/>
  <text x="60" y="25" font-size="10" text-anchor="middle" fill="#3730a3">domain</text>
  <text x="200" y="25" font-size="10" text-anchor="middle" fill="#3730a3">range</text>
  <g font-size="12" text-anchor="middle" fill="#111">
    <text x="60" y="55">1</text><text x="60" y="80">2</text><text x="60" y="105">3</text>
    <text x="200" y="55">2</text><text x="200" y="80">4</text><text x="200" y="105">6</text>
  </g>
  <g stroke="#dc2626" stroke-width="1.5">
    <line x1="80" y1="52" x2="180" y2="52"/><line x1="80" y1="77" x2="180" y2="77"/><line x1="80" y1="102" x2="180" y2="102"/>
  </g>
</svg>
\`\`\`

## Types of relation (mapping)

- **One-to-one** — each input maps to exactly one output, and no two inputs share an output.
- **One-to-many** — one input maps to more than one output.
- **Many-to-one** — several inputs map to the same output.
- **Many-to-many** — inputs and outputs are linked in several ways.

## Functions

A **function** is a **special relation** in which **each input has exactly one output**. So **one-to-one** and **many-to-one** relations are functions; **one-to-many** relations are **not** functions.

**Function notation:** we write **f(x)** ("f of x") for the output of the function f at input x.
If f(x) = 2x + 1, then f(3) = 2(3) + 1 = **7**.

## Change of subject

To **change the subject** of a formula is to rearrange it to make a different variable the subject.
Make x the subject of y = 3x + 6:
- y − 6 = 3x
- x = (y − 6) / 3.

## Gradient of a straight line

The **gradient (slope)** of a straight line measures its steepness — the change in y divided by the change in x between two points:

$$m = \\frac{y_2 - y_1}{x_2 - x_1}$$

A positive gradient rises left to right; a negative gradient falls. The equation of a straight line is often written **y = mx + c**, where m is the gradient and c is the y-intercept.

## Distance between two points

The **distance** between two points (x₁, y₁) and (x₂, y₂) is found with the distance formula (from Pythagoras):

$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$`,
      workedExample: `**Problem.** For the points A(1, 2) and B(4, 6): (a) find the gradient of the line AB; (b) find the distance AB. (c) If f(x) = 3x − 4, find f(5).

**Part (a) — gradient**
m = (y₂ − y₁) / (x₂ − x₁) = (6 − 2) / (4 − 1) = 4 / 3 = **4/3**.

**Part (b) — distance**
d = √[(x₂ − x₁)² + (y₂ − y₁)²]
 = √[(4 − 1)² + (6 − 2)²]
 = √[3² + 4²]
 = √[9 + 16]
 = √25
 = **5 units**.

(The 3-4-5 triple appears again — the change in x is 3, the change in y is 4, and the distance is 5.)

**Part (c) — function value**
f(x) = 3x − 4, so f(5) = 3(5) − 4 = 15 − 4 = **11**.

**Conclusion:** the line AB has gradient 4/3, the two points are 5 units apart, and the function gives f(5) = 11 — the three core skills of relations and functions in one problem.`,
      teachingTip:
        "The key idea learners must grasp is that a function is a relation where every input has exactly ONE output — the 'one-to-many is not a function' rule. Use a mapping diagram and the vertical-line idea to make it visual. For gradient and distance, note that both come from the change in x and change in y between two points, so teaching them together (with the 3-4-5 example) reinforces both at once.",
      quiz: [
        {
          prompt: "A relation links members of one set (the domain) to members of another set (the…)",
          options: ["range", "gradient", "function", "origin"],
          correctIndex: 0,
          explanation: "Inputs form the domain; outputs form the range.",
        },
        {
          prompt: "In a mapping, the set of inputs is the…",
          options: ["domain", "range", "gradient", "codomain only"],
          correctIndex: 0,
          explanation: "The domain is the set of input (x) values.",
        },
        {
          prompt: "In a mapping, the set of outputs is the…",
          options: ["range", "domain", "slope", "axis"],
          correctIndex: 0,
          explanation: "The range is the set of output (y) values.",
        },
        {
          prompt: "A function is a relation in which each input has exactly…",
          options: ["one output", "two outputs", "many outputs", "no output"],
          correctIndex: 0,
          explanation: "Every input maps to exactly one output in a function.",
        },
        {
          prompt: "Which type of relation is NOT a function?",
          options: ["one-to-many", "one-to-one", "many-to-one", "a straight line y = 2x"],
          correctIndex: 0,
          explanation: "One-to-many fails the 'one output per input' rule.",
        },
        {
          prompt: "If f(x) = 2x + 1, then f(3) =",
          options: ["7", "6", "5", "9"],
          correctIndex: 0,
          explanation: "2(3) + 1 = 7.",
        },
        {
          prompt: "If f(x) = 3x − 4, then f(2) =",
          options: ["2", "10", "1", "6"],
          correctIndex: 0,
          explanation: "3(2) − 4 = 2.",
        },
        {
          prompt: "The set {(1,2),(2,4),(3,6)} follows the rule…",
          options: ["y = 2x", "y = x + 1", "y = x²", "y = 2 + x"],
          correctIndex: 0,
          explanation: "Each y is twice its x.",
        },
        {
          prompt: "Making x the subject of y = 3x + 6 gives…",
          options: ["x = (y − 6)/3", "x = y − 6", "x = 3y + 6", "x = (y + 6)/3"],
          correctIndex: 0,
          explanation: "y − 6 = 3x, so x = (y − 6)/3.",
        },
        {
          prompt: "The gradient of a line through (1,2) and (4,6) is…",
          options: ["4/3", "3/4", "2", "1"],
          correctIndex: 0,
          explanation: "(6 − 2)/(4 − 1) = 4/3.",
        },
        {
          prompt: "In y = mx + c, the letter m represents the…",
          options: ["gradient", "y-intercept", "x-value", "range"],
          correctIndex: 0,
          explanation: "m is the gradient (slope).",
        },
        {
          prompt: "In y = mx + c, the letter c represents the…",
          options: ["y-intercept", "gradient", "domain", "distance"],
          correctIndex: 0,
          explanation: "c is where the line crosses the y-axis.",
        },
        {
          prompt: "A line that falls from left to right has a gradient that is…",
          options: ["negative", "positive", "zero", "undefined"],
          correctIndex: 0,
          explanation: "Falling lines have a negative gradient.",
        },
        {
          prompt: "The distance between (0,0) and (3,4) is…",
          options: ["5", "7", "12", "25"],
          correctIndex: 0,
          explanation: "√(3² + 4²) = √25 = 5.",
        },
        {
          prompt: "The distance formula comes from which theorem?",
          options: ["Pythagoras", "the gradient rule", "the range rule", "the mapping rule"],
          correctIndex: 0,
          explanation: "It is Pythagoras applied to coordinates.",
        },
        {
          prompt: "A relation where several inputs map to the same output is…",
          options: ["many-to-one", "one-to-many", "one-to-one", "none"],
          correctIndex: 0,
          explanation: "Many inputs, one output = many-to-one (still a function).",
        },
        {
          prompt: "f(x) = x² and x = 4 gives f(4) =",
          options: ["16", "8", "6", "2"],
          correctIndex: 0,
          explanation: "4² = 16.",
        },
        {
          prompt: "The gradient of a horizontal line is…",
          options: ["0", "1", "undefined", "negative"],
          correctIndex: 0,
          explanation: "No rise means gradient zero.",
        },
        {
          prompt: "Which is a one-to-one relation?",
          options: [
            "each learner has one unique ID number",
            "many learners share one classroom",
            "one learner takes many subjects",
            "many learners take many subjects",
          ],
          correctIndex: 0,
          explanation: "One input to one distinct output is one-to-one.",
        },
        {
          prompt: "The gradient between (2,3) and (5,9) is…",
          options: ["2", "3", "6", "1/2"],
          correctIndex: 0,
          explanation: "(9 − 3)/(5 − 2) = 6/3 = 2.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between a relation and a function, and state which type of mapping is not a function.",
          answerKey:
            "A relation links inputs (domain) to outputs (range) by some rule; a function is a special relation in which each input has exactly one output. A one-to-many mapping is not a function. Award marks for both definitions and the correct non-function type.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Given f(x) = 4x − 3, find f(0) and f(5).",
          answerKey:
            "f(0) = 4(0) − 3 = −3; f(5) = 4(5) − 3 = 17. Award a mark for each correct value and the correct substitution.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Find the gradient of the line joining A(2, 1) and B(6, 9), and the distance AB.",
          answerKey:
            "Gradient m = (9 − 1)/(6 − 2) = 8/4 = 2. Distance d = √[(6 − 2)² + (9 − 1)²] = √[16 + 64] = √80 ≈ 8.94 units. Award marks for the gradient and for the correct distance-formula working.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Making r the subject of the formula A = 2r + t gives…",
          options: ["r = (A − t)/2", "r = A − t", "r = 2A − t", "r = (A + t)/2"],
          correctIndex: 0,
          answerKey: "A − t = 2r, so r = (A − t)/2.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain, with an example mapping, why a one-to-many relation cannot be a function but a many-to-one relation can.",
          answerKey:
            "A strong answer explains that a function requires each input to have exactly one output. In a one-to-many relation, at least one input is linked to more than one output (e.g. 4 → +2 and 4 → −2 for square roots), which breaks the rule, so it is not a function. In a many-to-one relation, several inputs share one output (e.g. −2 → 4 and 2 → 4 for y = x²), but each input still has just one output, so it is a function. Award marks for the correct rule, a valid one-to-many example that fails, and a valid many-to-one example that passes.",
          marks: 5,
        },
      ],
    },
  ],
};
