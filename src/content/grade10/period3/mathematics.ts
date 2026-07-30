import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Mathematics, Grade 10,
// Semester One, Period III: Topic 1 Plane Geometry; Topic 2 Linear Equations
// and Inequalities.
export const mathematicsG10P3: PeriodContent = {
  grade: 10,
  number: 3,
  title: "Plane Geometry and Linear Equations",
  summary:
    "Period III of the MoE Grade 10 Mathematics syllabus. Learners measure and calculate angles, use the angle properties of parallel lines, triangles and quadrilaterals, and apply the Pythagoras theorem — then solve linear equations and inequalities in one variable, including word problems, and represent inequality solutions on a number line.",
  topics: [
    {
      slug: "plane-geometry",
      title: "Plane Geometry",
      objective:
        "By the end of the topic, learners should be able to measure and calculate angles, apply the angle properties of parallel lines and triangles, use the Pythagoras theorem in right-angled triangles, and calculate angles in quadrilaterals and polygons.",
      estimatedMinutes: 200,
      notes: `## Angles and their types

An **angle** is formed where two lines meet, measured in **degrees (°)**.

- **Acute** — less than 90°
- **Right** — exactly 90°
- **Obtuse** — between 90° and 180°
- **Straight** — exactly 180°
- **Reflex** — between 180° and 360°

## Angle facts you must know

- **Angles on a straight line** add up to **180°**.
- **Angles around a point** add up to **360°**.
- **Vertically opposite angles** (formed when two lines cross) are **equal**.
- **Complementary angles** add to 90°; **supplementary angles** add to 180°.

## Angles and parallel lines

When a straight line (a **transversal**) crosses two parallel lines:

- **Corresponding angles** are equal (in matching positions — an "F" shape).
- **Alternate angles** are equal (between the lines, on opposite sides — a "Z" shape).
- **Co-interior (allied) angles** add up to 180° (a "C" or "U" shape).

\`\`\`svg A transversal crossing two parallel lines
<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two parallel lines cut by a transversal">
  <line x1="20" y1="60" x2="280" y2="60" stroke="#3730a3" stroke-width="2"/>
  <line x1="20" y1="130" x2="280" y2="130" stroke="#3730a3" stroke-width="2"/>
  <line x1="90" y1="20" x2="210" y2="170" stroke="#dc2626" stroke-width="2"/>
  <text x="150" y="50" font-size="11" fill="#111">a</text>
  <text x="165" y="122" font-size="11" fill="#111">b</text>
  <text x="30" y="52" font-size="10" fill="#3730a3">parallel lines</text>
  <text x="215" y="165" font-size="10" fill="#dc2626">transversal</text>
</svg>
\`\`\`

## Triangles

A **triangle** has three sides and three angles. The **angles of a triangle add up to 180°**.

Triangles by sides/angles:
- **Equilateral** — all sides equal, all angles 60°.
- **Isosceles** — two sides equal, two base angles equal.
- **Scalene** — all sides different.
- **Right-angled** — one angle is 90°.

The **exterior angle** of a triangle equals the sum of the two opposite interior angles.

## The Pythagoras theorem

In a **right-angled triangle**, the square of the **hypotenuse** (the side opposite the right angle) equals the sum of the squares of the other two sides:

$$a^2 + b^2 = c^2$$

A set of three whole numbers that fit this rule is a **Pythagorean triple**, e.g. 3, 4, 5 and 5, 12, 13.

\`\`\`svg A 3-4-5 right-angled triangle
<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle with sides 3, 4 and hypotenuse 5">
  <polygon points="30,130 150,130 30,50" fill="#c7d2fe" stroke="#3730a3" stroke-width="2"/>
  <rect x="30" y="115" width="15" height="15" fill="none" stroke="#3730a3"/>
  <text x="90" y="145" font-size="12" text-anchor="middle" fill="#3730a3">4</text>
  <text x="18" y="95" font-size="12" fill="#3730a3">3</text>
  <text x="95" y="82" font-size="12" fill="#dc2626">5</text>
</svg>
\`\`\`

## Quadrilaterals and polygons

A **quadrilateral** has four sides; its **angles add up to 360°**.

- **Square** — 4 equal sides, 4 right angles.
- **Rectangle** — opposite sides equal, 4 right angles.
- **Parallelogram** — opposite sides parallel and equal; opposite angles equal.
- **Rhombus** — 4 equal sides, opposite angles equal.
- **Trapezium** — one pair of parallel sides.
- **Kite** — two pairs of adjacent equal sides.

For any polygon with **n** sides, the interior angles add up to **(n − 2) × 180°**.`,
      workedExample: `**Problem.** (a) In a right-angled triangle the two shorter sides are 6 cm and 8 cm. Find the hypotenuse. (b) Two angles of a triangle are 55° and 65°. Find the third angle and the exterior angle at that vertex.

**Part (a) — Pythagoras**
The hypotenuse c satisfies a² + b² = c²:

c² = 6² + 8² = 36 + 64 = 100
c = √100 = **10 cm**

(This is the 3-4-5 triple scaled by 2: 6, 8, 10.)

**Part (b) — angles of a triangle**
The three angles add to 180°:

third angle = 180° − (55° + 65°) = 180° − 120° = **60°**

The **exterior angle** at that vertex equals the sum of the two opposite interior angles:

exterior angle = 55° + 65° = **120°**

**Check:** the interior angle (60°) and its exterior angle (120°) lie on a straight line and add to 180°. ✓`,
      teachingTip:
        "The 'F, Z, C' shapes for corresponding, alternate and co-interior angles are the fastest way in, but learners over-apply them — remind them the rules only hold when the lines are parallel. For Pythagoras, drill that the theorem finds the hypotenuse by ADDING squares, but finds a shorter side by SUBTRACTING (c² − a² = b²); mixing these up is the single most common error.",
      quiz: [
        {
          prompt: "An angle less than 90° is called…",
          options: ["acute", "obtuse", "reflex", "straight"],
          correctIndex: 0,
          explanation: "Acute angles are less than 90°.",
        },
        {
          prompt: "Angles on a straight line add up to…",
          options: ["180°", "90°", "360°", "270°"],
          correctIndex: 0,
          explanation: "Angles on a straight line total 180°.",
        },
        {
          prompt: "Angles around a point add up to…",
          options: ["360°", "180°", "90°", "540°"],
          correctIndex: 0,
          explanation: "A full turn around a point is 360°.",
        },
        {
          prompt: "When two straight lines cross, vertically opposite angles are…",
          options: ["equal", "supplementary", "always 90°", "always 45°"],
          correctIndex: 0,
          explanation: "Vertically opposite angles are equal.",
        },
        {
          prompt: "The angles of a triangle add up to…",
          options: ["180°", "360°", "90°", "270°"],
          correctIndex: 0,
          explanation: "Interior angles of a triangle sum to 180°.",
        },
        {
          prompt: "In parallel lines, 'Z-shaped' equal angles are called…",
          options: ["alternate angles", "corresponding angles", "co-interior angles", "reflex angles"],
          correctIndex: 0,
          explanation: "Alternate (Z) angles are equal.",
        },
        {
          prompt: "In parallel lines, 'F-shaped' equal angles are called…",
          options: ["corresponding angles", "alternate angles", "vertically opposite", "co-interior"],
          correctIndex: 0,
          explanation: "Corresponding (F) angles are equal.",
        },
        {
          prompt: "Co-interior (allied) angles between parallel lines add up to…",
          options: ["180°", "90°", "360°", "the same value"],
          correctIndex: 0,
          explanation: "Co-interior angles are supplementary (180°).",
        },
        {
          prompt: "A triangle with all sides equal and all angles 60° is…",
          options: ["equilateral", "isosceles", "scalene", "right-angled"],
          correctIndex: 0,
          explanation: "An equilateral triangle has equal sides and 60° angles.",
        },
        {
          prompt: "In a right-angled triangle, the side opposite the right angle is the…",
          options: ["hypotenuse", "base", "altitude", "median"],
          correctIndex: 0,
          explanation: "The hypotenuse is opposite the 90° angle and is the longest side.",
        },
        {
          prompt: "The Pythagoras theorem states that…",
          options: ["a² + b² = c²", "a + b = c", "a² − b² = c²", "ab = c²"],
          correctIndex: 0,
          explanation: "The squares of the two shorter sides sum to the square of the hypotenuse.",
        },
        {
          prompt: "Which is a Pythagorean triple?",
          options: ["3, 4, 5", "2, 3, 4", "1, 2, 3", "4, 5, 6"],
          correctIndex: 0,
          explanation: "3² + 4² = 9 + 16 = 25 = 5².",
        },
        {
          prompt: "The hypotenuse of a right triangle with legs 5 and 12 is…",
          options: ["13", "17", "60", "7"],
          correctIndex: 0,
          explanation: "5² + 12² = 25 + 144 = 169 = 13².",
        },
        {
          prompt: "Two angles of a triangle are 40° and 75°. The third is…",
          options: ["65°", "115°", "75°", "45°"],
          correctIndex: 0,
          explanation: "180 − (40 + 75) = 180 − 115 = 65°.",
        },
        {
          prompt: "The angles of a quadrilateral add up to…",
          options: ["360°", "180°", "540°", "720°"],
          correctIndex: 0,
          explanation: "A four-sided figure's interior angles total 360°.",
        },
        {
          prompt: "A quadrilateral with one pair of parallel sides is a…",
          options: ["trapezium", "square", "rhombus", "kite"],
          correctIndex: 0,
          explanation: "A trapezium has exactly one pair of parallel sides.",
        },
        {
          prompt: "The exterior angle of a triangle equals…",
          options: [
            "the sum of the two opposite interior angles",
            "180°",
            "one interior angle",
            "the largest angle",
          ],
          correctIndex: 0,
          explanation: "Exterior angle = sum of the two remote interior angles.",
        },
        {
          prompt: "The interior angles of a pentagon (5 sides) add up to…",
          options: ["540°", "360°", "720°", "180°"],
          correctIndex: 0,
          explanation: "(n − 2) × 180 = (5 − 2) × 180 = 540°.",
        },
        {
          prompt: "A quadrilateral with four equal sides and opposite equal angles is a…",
          options: ["rhombus", "rectangle", "trapezium", "kite"],
          correctIndex: 0,
          explanation: "A rhombus has four equal sides.",
        },
        {
          prompt: "Two angles that add up to 90° are called…",
          options: ["complementary", "supplementary", "reflex", "vertically opposite"],
          correctIndex: 0,
          explanation: "Complementary angles sum to 90°.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "A right-angled triangle has legs of 9 cm and 12 cm. Calculate the length of the hypotenuse.",
          answerKey:
            "c² = 9² + 12² = 81 + 144 = 225; c = √225 = 15 cm. Award marks for correct use of Pythagoras, substitution and the answer 15 cm.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Two angles of a triangle are 48° and 72°. Find the third angle and the exterior angle at the third vertex.",
          answerKey:
            "Third angle = 180 − (48 + 72) = 60°. Exterior angle = 48 + 72 = 120° (or 180 − 60 = 120°). Award marks for the third angle and the exterior angle.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "In two parallel lines cut by a transversal, co-interior (allied) angles are…",
          options: ["supplementary (add to 180°)", "equal", "complementary (add to 90°)", "reflex"],
          correctIndex: 0,
          answerKey: "Co-interior angles add up to 180°.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Find the sum of the interior angles of a hexagon (6 sides).",
          answerKey:
            "(n − 2) × 180 = (6 − 2) × 180 = 4 × 180 = 720°. Award marks for the correct formula and the answer 720°.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain, with a worked example, how the Pythagoras theorem can be used to check whether a triangle with sides 8 cm, 15 cm and 17 cm is right-angled.",
          answerKey:
            "A strong answer states that a triangle is right-angled if the square of the longest side equals the sum of the squares of the other two. Here 17 is the longest: 17² = 289 and 8² + 15² = 64 + 225 = 289. Since they are equal, the triangle is right-angled (8, 15, 17 is a Pythagorean triple). Award marks for identifying the longest side, computing both sides of the equation, and the correct conclusion.",
          marks: 5,
        },
      ],
    },
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
  ],
};
