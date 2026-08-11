import type { PeriodContent } from "@/content/types";

// Grade 10, Semester One, Period III of the MoE Mathematics syllabus:
// Plane Geometry. Notes rebuilt from published sources (CK-12, Siyavula).
export const mathematicsG10P3: PeriodContent = {
  grade: 10,
  number: 3,
  title: "Plane Geometry",
  summary:
    "Period III of the MoE Grade 10 Mathematics syllabus. Learners measure and calculate angles, use the angle properties of parallel lines, triangles and quadrilaterals, apply the Pythagoras theorem and Pythagorean triples to right-angled triangles, and classify polygons.",
  topics: [
    // source: CK-12 — Parallel Lines and Transversal (https://flexbooks.ck12.org/cbook/ck-12-cbse-maths-class-6/section/10.7/primary/lesson/parallel-lines-and-transversal/)
    {
      slug: "angles-and-parallel-lines",
      title: "Measuring, Calculating Angles and Parallel Lines",
      objective:
        "By the end of the topic, learners should be able to name and measure angle types, use angles on a line and at a point, and apply the angle properties of parallel lines cut by a transversal.",
      estimatedMinutes: 120,
      notes: `## Naming angles by size

- **Acute** — less than 90°
- **Right** — exactly 90°
- **Obtuse** — between 90° and 180°
- **Straight** — exactly 180°
- **Reflex** — between 180° and 360°

An angle is measured in degrees with a **protractor**.

## Angle facts

- **Angles on a straight line** add to 180° (supplementary).
- **Angles at a point** add to 360°.
- **Vertically opposite angles** (formed by two crossing lines) are equal.
- **Complementary angles** add to 90°.

## Parallel lines and a transversal

When a **transversal** crosses two **parallel** lines, special angle pairs are formed:

- **Corresponding angles** are equal (same position at each intersection — an "F" shape).
- **Alternate angles** are equal (opposite sides of the transversal, between the lines — a "Z" shape).
- **Co-interior (allied) angles** are supplementary, adding to 180° (same side of the transversal, between the lines — a "C/U" shape).

\`\`\`svg Two parallel lines cut by a transversal, showing corresponding angles a and b.
<svg viewBox="0 0 320 200" role="img" aria-label="Two parallel lines crossed by a transversal">
  <line x1="20" y1="70" x2="300" y2="70" stroke="currentColor" stroke-width="1.5"/>
  <line x1="20" y1="140" x2="300" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <line x1="80" y1="30" x2="230" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <text x="140" y="62" font-size="14" fill="currentColor">a</text>
  <text x="176" y="132" font-size="14" fill="currentColor">b</text>
  <text x="300" y="66" font-size="11" fill="currentColor">line 1</text>
  <text x="300" y="136" font-size="11" fill="currentColor">line 2</text>
</svg>
\`\`\`

These equalities hold **only if the two lines are parallel**.

## Calculating unknown angles

Set up an equation using the angle facts, then solve.

## Common errors

- **Assuming lines are parallel** when the diagram does not say so.
- **Mixing up alternate and co-interior** — alternate are equal; co-interior add to 180°.
- **Using the wrong pair** — check the shape (F, Z or C) formed.`,
      workedExample: `**Question:** Two parallel lines are cut by a transversal. One co-interior angle is 110°. Find the other co-interior angle, and the corresponding angle to the 110° angle.

**Solution**

*Step 1 — co-interior angles are supplementary.*
The two co-interior angles add to 180°.
Other co-interior angle = 180° − 110° = 70°

*Step 2 — corresponding angles are equal.*
The angle corresponding to the 110° angle is also 110°.

**Answer:** the other co-interior angle is 70°; the corresponding angle is 110°.`,
      quiz: [
        { prompt: "An angle of 47° is", options: ["acute", "right", "obtuse", "reflex"], correctIndex: 0, explanation: "Less than 90° is acute." },
        { prompt: "Angles on a straight line add up to", options: ["90°", "180°", "270°", "360°"], correctIndex: 1, explanation: "They are supplementary, totalling 180°." },
        { prompt: "Angles around a point add up to", options: ["90°", "180°", "360°", "720°"], correctIndex: 2, explanation: "A full turn is 360°." },
        { prompt: "Vertically opposite angles are", options: ["supplementary", "equal", "complementary", "reflex"], correctIndex: 1, explanation: "They are always equal." },
        { prompt: "When parallel lines are cut by a transversal, corresponding angles are", options: ["equal", "supplementary", "complementary", "reflex"], correctIndex: 0, explanation: "Corresponding angles are equal." },
        { prompt: "Co-interior (allied) angles between parallel lines are", options: ["equal", "supplementary", "complementary", "vertically opposite"], correctIndex: 1, explanation: "They add up to 180°." },
        { prompt: "If two angles are complementary and one is 35°, the other is", options: ["55°", "145°", "65°", "35°"], correctIndex: 0, explanation: "90° − 35° = 55°." },
        { prompt: "Alternate angles form which letter shape?", options: ["F", "Z", "C", "X"], correctIndex: 1, explanation: "Alternate angles make a Z shape." },
        { prompt: "A 90° angle is called", options: ["acute", "obtuse", "right", "straight"], correctIndex: 2, explanation: "Exactly 90° is a right angle." },
        { prompt: "Two angles on a straight line are 3x and 2x. Find x.", options: ["18°", "36°", "60°", "90°"], correctIndex: 1, explanation: "3x + 2x = 180°, 5x = 180°, x = 36°." },
        { prompt: "An angle of 250° is", options: ["obtuse", "straight", "reflex", "right"], correctIndex: 2, explanation: "Between 180° and 360° is reflex." },
        { prompt: "If a corresponding angle is 65°, its pair (lines parallel) is", options: ["25°", "65°", "115°", "180°"], correctIndex: 1, explanation: "Corresponding angles are equal." },
        { prompt: "Alternate angles are equal only if", options: ["the angles are acute", "the two lines are parallel", "a protractor is used", "the transversal is vertical"], correctIndex: 1, explanation: "The lines must be parallel." },
        { prompt: "The instrument used to measure angles is a", options: ["ruler", "compass", "protractor", "set square"], correctIndex: 2, explanation: "A protractor measures angles in degrees." },
        { prompt: "Two supplementary angles are equal. Each is", options: ["45°", "60°", "90°", "180°"], correctIndex: 2, explanation: "x + x = 180°, so x = 90°." },
        { prompt: "One co-interior angle is 130°. The other is", options: ["50°", "130°", "40°", "230°"], correctIndex: 0, explanation: "180° − 130° = 50°." },
        { prompt: "Vertically opposite to a 72° angle is", options: ["18°", "72°", "108°", "288°"], correctIndex: 1, explanation: "Vertically opposite angles are equal." },
        { prompt: "Angles a and b are angles at a point with a = 210°. Then b (the rest) is", options: ["150°", "150° only if straight", "360°", "30°"], correctIndex: 0, explanation: "360° − 210° = 150°." },
        { prompt: "Which pair is NOT necessarily equal for parallel lines?", options: ["corresponding angles", "alternate angles", "vertically opposite angles", "co-interior angles"], correctIndex: 3, explanation: "Co-interior angles are supplementary, not equal." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Two parallel lines are cut by a transversal. One of the eight angles is 74°. State, with reasons, the sizes of the corresponding, alternate and co-interior angles to it.", answerKey: "Corresponding = 74° (corresponding angles equal). Alternate = 74° (alternate angles equal). Co-interior = 180° − 74° = 106° (co-interior angles supplementary). Award 2 marks per value with its reason.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Three angles on a straight line are x, 2x and 30°. Find x.", answerKey: "x + 2x + 30 = 180, so 3x = 150, x = 50°. Award 2 marks for the equation, 2 for solving.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "If two angles are complementary and one is 28°, what is the other?", options: ["62°", "152°", "72°", "28°"], correctIndex: 0, answerKey: "90° − 28° = 62°. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Angles at a point are 90°, 120° and y. Find y.", answerKey: "90 + 120 + y = 360, so y = 150°. Award 2 marks for the equation, 2 for the answer.", marks: 4 },
        { type: "ESSAY", prompt: "Explain the difference between corresponding, alternate and co-interior angles formed when a transversal crosses two parallel lines, describing the F, Z and C shapes and stating which pairs are equal and which are supplementary.", answerKey: "Corresponding angles are in the same position at each intersection (F shape) and are equal. Alternate angles are on opposite sides of the transversal between the lines (Z shape) and are equal. Co-interior angles are on the same side of the transversal between the lines (C/U shape) and are supplementary (add to 180°). All hold only when the lines are parallel. Award 3 marks per angle type (shape + equal/supplementary), minus 1 if the parallel condition is omitted.", marks: 9 },
      ],
    },
    // source: CK-12 — Properties of a Triangle (https://flexbooks.ck12.org/cbook/ck-12-cbse-maths-class-7/section/6.2/primary/lesson/properties-of-a-triangle-11548465/)
    {
      slug: "triangles",
      title: "Triangles and Their Angle Properties",
      objective:
        "By the end of the topic, learners should be able to classify triangles by sides and by angles, apply the angle-sum and exterior-angle properties, and calculate unknown angles in triangles.",
      estimatedMinutes: 120,
      notes: `## Classifying triangles by sides

- **Equilateral** — all three sides equal; all angles 60°.
- **Isosceles** — two sides equal; the base angles (opposite the equal sides) are equal.
- **Scalene** — all sides different; all angles different.

## Classifying triangles by angles

- **Acute-angled** — all angles less than 90°.
- **Right-angled** — one angle is 90°.
- **Obtuse-angled** — one angle greater than 90°.

## Angle-sum property

The three interior angles of any triangle add to **180°**.

If two angles are 50° and 60°, the third is 180° − 50° − 60° = 70°.

## Exterior-angle property

An **exterior angle** of a triangle equals the sum of the two **remote (opposite) interior angles**.

\`\`\`svg Triangle ABC with exterior angle at C equal to the sum of angles A and B.
<svg viewBox="0 0 300 170" role="img" aria-label="Triangle with an exterior angle at one vertex">
  <polygon points="40,140 200,140 130,40" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="200" y1="140" x2="270" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <text x="30" y="152" font-size="13" fill="currentColor">A</text>
  <text x="196" y="156" font-size="13" fill="currentColor">B</text>
  <text x="128" y="34" font-size="13" fill="currentColor">C</text>
  <text x="214" y="132" font-size="12" fill="currentColor">ext</text>
</svg>
\`\`\`

The exterior angle and its adjacent interior angle add to 180° (angles on a line).

## Common errors

- **Forgetting the angle sum is 180°** for a triangle (360° is for quadrilaterals).
- **Using the wrong interior angles** for the exterior-angle rule — use the two *remote* ones.
- **Assuming a triangle is isosceles** without given equal sides or angles.`,
      workedExample: `**Question:** In triangle ABC, angle A = 40° and angle B = 75°.
(a) Find angle C.
(b) Find the exterior angle at C.

**Solution**

*Part (a) — angle sum.*
A + B + C = 180°
40° + 75° + C = 180°
115° + C = 180°
C = 180° − 115° = 65°

*Part (b) — exterior angle = sum of remote interior angles.*
Exterior angle at C = A + B = 40° + 75° = 115°

*Check:* interior angle C + exterior angle = 65° + 115° = 180° ✔ (angles on a line).

**Answer:** (a) 65°; (b) 115°.`,
      quiz: [
        { prompt: "The interior angles of any triangle add up to", options: ["90°", "180°", "270°", "360°"], correctIndex: 1, explanation: "The angle sum of a triangle is 180°." },
        { prompt: "A triangle with all sides equal is", options: ["scalene", "isosceles", "equilateral", "right-angled"], correctIndex: 2, explanation: "Equal sides means equilateral." },
        { prompt: "Each angle of an equilateral triangle is", options: ["45°", "60°", "90°", "120°"], correctIndex: 1, explanation: "180° ÷ 3 = 60°." },
        { prompt: "Two angles of a triangle are 55° and 65°. The third is", options: ["50°", "60°", "70°", "120°"], correctIndex: 1, explanation: "180° − 55° − 65° = 60°." },
        { prompt: "An isosceles triangle has", options: ["all sides equal", "two sides equal", "no equal sides", "a right angle always"], correctIndex: 1, explanation: "Two equal sides define isosceles." },
        { prompt: "An exterior angle of a triangle equals", options: ["the adjacent interior angle", "the sum of the two remote interior angles", "180°", "90°"], correctIndex: 1, explanation: "Exterior = sum of the two opposite interior angles." },
        { prompt: "A triangle with a 90° angle is", options: ["acute-angled", "right-angled", "obtuse-angled", "equilateral"], correctIndex: 1, explanation: "One right angle makes it right-angled." },
        { prompt: "In an isosceles triangle the base angles are", options: ["equal", "supplementary", "always 90°", "different"], correctIndex: 0, explanation: "The angles opposite the equal sides are equal." },
        { prompt: "A triangle with angles 30°, 60°, 90° is", options: ["equilateral", "acute", "right-angled scalene", "isosceles"], correctIndex: 2, explanation: "A right angle and all sides different: right-angled scalene." },
        { prompt: "The exterior angle of a triangle is 120°; the two remote interior angles are 70° and", options: ["50°", "60°", "40°", "30°"], correctIndex: 0, explanation: "70° + x = 120°, so x = 50°." },
        { prompt: "Can a triangle have two right angles?", options: ["yes", "no, the sum would exceed 180°", "only if isosceles", "only if equilateral"], correctIndex: 1, explanation: "Two 90° angles already total 180°, leaving nothing for the third." },
        { prompt: "A scalene triangle has", options: ["all angles equal", "all sides different", "two equal angles", "a 60° angle"], correctIndex: 1, explanation: "All sides (and angles) are different." },
        { prompt: "If a triangle is isosceles with apex angle 40°, each base angle is", options: ["40°", "70°", "100°", "50°"], correctIndex: 1, explanation: "(180° − 40°) ÷ 2 = 70°." },
        { prompt: "Two angles of a triangle are equal and the third is 80°. Each equal angle is", options: ["50°", "40°", "80°", "100°"], correctIndex: 0, explanation: "(180° − 80°) ÷ 2 = 50°." },
        { prompt: "An exterior angle and its adjacent interior angle are", options: ["equal", "complementary", "supplementary", "reflex"], correctIndex: 2, explanation: "They lie on a straight line, so they add to 180°." },
        { prompt: "A triangle with all angles less than 90° is", options: ["right-angled", "obtuse", "acute-angled", "reflex"], correctIndex: 2, explanation: "All acute angles: acute-angled triangle." },
        { prompt: "The angles of a triangle are x, x and x. Then x =", options: ["45°", "60°", "90°", "30°"], correctIndex: 1, explanation: "3x = 180°, x = 60° (equilateral)." },
        { prompt: "In triangle PQR, P = 90° and Q = 35°. Then R =", options: ["45°", "55°", "65°", "35°"], correctIndex: 1, explanation: "180° − 90° − 35° = 55°." },
        { prompt: "Which set of angles cannot form a triangle?", options: ["60°, 60°, 60°", "90°, 45°, 45°", "100°, 50°, 40°", "30°, 70°, 80°"], correctIndex: 2, explanation: "100 + 50 + 40 = 190° ≠ 180°." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "In triangle ABC, angle A = 2x, angle B = 3x and angle C = 4x. Find x and each angle.", answerKey: "2x + 3x + 4x = 180, so 9x = 180, x = 20°. Angles: A = 40°, B = 60°, C = 80°. Award 2 marks for the equation, 2 for x, 2 for the three angles.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "An exterior angle of a triangle is 130° and one remote interior angle is 55°. Find the other remote interior angle and the adjacent interior angle.", answerKey: "Other remote interior = 130° − 55° = 75°. Adjacent interior = 180° − 130° = 50°. Award 3 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "A triangle has angles 50°, 50° and 80°. It is", options: ["equilateral", "isosceles", "scalene", "right-angled"], correctIndex: 1, answerKey: "Two equal angles (50°) mean two equal sides, so isosceles. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "The apex angle of an isosceles triangle is 46°. Find each base angle.", answerKey: "Base angles equal: (180° − 46°) ÷ 2 = 134° ÷ 2 = 67°. Award 2 marks for the method, 2 for the answer 67°.", marks: 4 },
        { type: "ESSAY", prompt: "Prove informally that the exterior angle of a triangle equals the sum of the two remote interior angles, using the angle-sum property and angles on a straight line.", answerKey: "Let the interior angles be A, B and C, with the exterior angle formed at C. The angle sum gives A + B + C = 180°, so A + B = 180° − C. The exterior angle at C and the interior angle C lie on a straight line, so exterior angle = 180° − C. Therefore exterior angle = A + B, the sum of the two remote interior angles. Award 4 marks for using the angle sum, 4 for the straight-line step, 2 for the conclusion.", marks: 10 },
      ],
    },
    // source: CK-12 — Pythagorean Theorem and Pythagorean Triples (https://flexbooks.ck12.org/cbook/ck-12-basic-geometry-concepts/section/8.2/primary/lesson/pythagorean-theorem-and-pythagorean-triples-bsc-geom/)
    {
      slug: "pythagoras-theorem",
      title: "Right-Angled Triangles, Pythagoras and Square Roots",
      objective:
        "By the end of the topic, learners should be able to state and apply the Pythagoras theorem to find a missing side of a right-angled triangle, recognise Pythagorean triples, and work with squares and square roots.",
      estimatedMinutes: 130,
      notes: `## The Pythagoras theorem

In a **right-angled triangle**, the square of the **hypotenuse** (the side opposite the right angle, the longest side) equals the sum of the squares of the other two sides:

a² + b² = c²

where c is the hypotenuse.

\`\`\`svg Right-angled triangle with legs a and b and hypotenuse c.
<svg viewBox="0 0 240 170" role="img" aria-label="Right-angled triangle with legs a, b and hypotenuse c">
  <polygon points="40,140 200,140 40,40" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <rect x="40" y="122" width="18" height="18" fill="none" stroke="currentColor"/>
  <text x="112" y="156" font-size="13" fill="currentColor">b</text>
  <text x="24" y="94" font-size="13" fill="currentColor">a</text>
  <text x="128" y="84" font-size="13" fill="currentColor">c</text>
</svg>
\`\`\`

## Finding the hypotenuse

c = √(a² + b²)

If a = 5 and b = 12: c = √(25 + 144) = √169 = 13.

## Finding a shorter side

Rearrange: a² = c² − b², so a = √(c² − b²).

## Squares and square roots

- A **perfect square** is the square of a whole number: 1, 4, 9, 16, 25, 36, 49, …
- The **square root** √n asks "what number squared gives n?": √49 = 7.
- √(a²) = a for a ≥ 0.

## Pythagorean triples

A **Pythagorean triple** is a set of three whole numbers a, b, c with a² + b² = c². Common triples:
- 3, 4, 5 (since 9 + 16 = 25)
- 5, 12, 13 (25 + 144 = 169)
- 8, 15, 17 (64 + 225 = 289)

Multiplying a triple by a whole number gives another triple: 3, 4, 5 → 6, 8, 10.

## Testing for a right angle

If a² + b² = c², the triangle is right-angled; if not, it is not.

## Common errors

- **Treating a leg as the hypotenuse** — c must be the longest side, opposite the right angle.
- **Forgetting to square-root** the final answer.
- **Adding instead of subtracting** when finding a shorter side.`,
      workedExample: `**Question:** A right-angled triangle has legs of 5 cm and 12 cm. Find the hypotenuse.

**Solution**

*Step 1 — write the theorem.*
a² + b² = c², with a = 5, b = 12.

*Step 2 — substitute and square.*
c² = 5² + 12² = 25 + 144 = 169

*Step 3 — take the square root.*
c = √169 = 13

**Answer: the hypotenuse is 13 cm.** (5, 12, 13 is a Pythagorean triple.)`,
      quiz: [
        { prompt: "In a right-angled triangle, the hypotenuse is", options: ["the shortest side", "the side opposite the right angle", "any leg", "always vertical"], correctIndex: 1, explanation: "It is opposite the right angle and is the longest side." },
        { prompt: "The Pythagoras theorem states", options: ["a + b = c", "a² + b² = c²", "a² − b² = c²", "a² + b² = 2c"], correctIndex: 1, explanation: "The square of the hypotenuse equals the sum of the squares of the legs." },
        { prompt: "Legs 3 and 4 give a hypotenuse of", options: ["5", "7", "12", "25"], correctIndex: 0, explanation: "√(9 + 16) = √25 = 5." },
        { prompt: "√81 equals", options: ["8", "9", "18", "40.5"], correctIndex: 1, explanation: "9 × 9 = 81." },
        { prompt: "Which is a Pythagorean triple?", options: ["2, 3, 4", "5, 12, 13", "6, 7, 8", "1, 2, 3"], correctIndex: 1, explanation: "25 + 144 = 169 = 13²." },
        { prompt: "Legs 6 and 8 give a hypotenuse of", options: ["10", "14", "12", "48"], correctIndex: 0, explanation: "√(36 + 64) = √100 = 10." },
        { prompt: "A perfect square among these is", options: ["20", "36", "50", "72"], correctIndex: 1, explanation: "36 = 6²." },
        { prompt: "If hypotenuse = 13 and one leg = 5, the other leg is", options: ["8", "12", "18", "9"], correctIndex: 1, explanation: "√(169 − 25) = √144 = 12." },
        { prompt: "√(a²) for a ≥ 0 equals", options: ["a²", "2a", "a", "√a"], correctIndex: 2, explanation: "The square root undoes the square." },
        { prompt: "Multiplying the triple 3,4,5 by 2 gives", options: ["5, 6, 7", "6, 8, 10", "6, 8, 9", "9, 12, 15"], correctIndex: 1, explanation: "6, 8, 10 is also a triple." },
        { prompt: "Is a triangle with sides 7, 24, 25 right-angled?", options: ["yes", "no", "only if isosceles", "cannot tell"], correctIndex: 0, explanation: "49 + 576 = 625 = 25²." },
        { prompt: "√144 equals", options: ["11", "12", "13", "14"], correctIndex: 1, explanation: "12² = 144." },
        { prompt: "Legs 9 and 12 give a hypotenuse of", options: ["13", "15", "21", "16"], correctIndex: 1, explanation: "√(81 + 144) = √225 = 15." },
        { prompt: "In a² + b² = c², c is always", options: ["the smallest", "a leg", "the longest side", "equal to a"], correctIndex: 2, explanation: "The hypotenuse is the longest side." },
        { prompt: "8, 15, 17: check that 8² + 15² equals", options: ["17² = 289", "16² = 256", "18² = 324", "15² = 225"], correctIndex: 0, explanation: "64 + 225 = 289 = 17²." },
        { prompt: "The square of 11 is", options: ["22", "111", "121", "132"], correctIndex: 2, explanation: "11 × 11 = 121." },
        { prompt: "If a triangle has sides 4, 5, 6, is it right-angled?", options: ["yes", "no, 16 + 25 ≠ 36", "only if scalene", "cannot tell"], correctIndex: 1, explanation: "16 + 25 = 41 ≠ 36." },
        { prompt: "√0.25 equals", options: ["0.05", "0.5", "5", "0.025"], correctIndex: 1, explanation: "0.5 × 0.5 = 0.25." },
        { prompt: "The hypotenuse of a right triangle with legs 1 and 1 is", options: ["2", "√2", "1", "√3"], correctIndex: 1, explanation: "√(1 + 1) = √2." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "A ladder 10 m long leans against a wall with its foot 6 m from the wall. How far up the wall does it reach?", answerKey: "The ladder is the hypotenuse: height² = 10² − 6² = 100 − 36 = 64, so height = √64 = 8 m. Award 2 marks for identifying the hypotenuse, 3 for the calculation, 2 for the answer 8 m.", marks: 7 },
        { type: "SHORT_ANSWER", prompt: "Find the hypotenuse of a right-angled triangle with legs 9 cm and 40 cm.", answerKey: "c² = 9² + 40² = 81 + 1600 = 1681, c = √1681 = 41 cm. Award 3 marks for the sum of squares, 2 for the square root, 1 for units.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which of these is NOT a Pythagorean triple?", options: ["3, 4, 5", "5, 12, 13", "6, 8, 10", "4, 5, 6"], correctIndex: 3, answerKey: "16 + 25 = 41 ≠ 36, so 4, 5, 6 is not a triple. Option D.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A triangle has sides 20, 21 and 29. Show whether it is right-angled.", answerKey: "Test the longest side as hypotenuse: 20² + 21² = 400 + 441 = 841, and 29² = 841. Since they are equal, the triangle is right-angled. Award 3 marks for squaring and adding the legs, 2 for 29² = 841, 1 for the conclusion.", marks: 6 },
        { type: "ESSAY", prompt: "State the Pythagoras theorem, explain what a Pythagorean triple is, and show that any whole-number multiple of the triple 3, 4, 5 is also a Pythagorean triple.", answerKey: "Theorem: in a right-angled triangle a² + b² = c² where c is the hypotenuse. A Pythagorean triple is three whole numbers satisfying this. Multiplying 3,4,5 by k gives 3k, 4k, 5k; then (3k)² + (4k)² = 9k² + 16k² = 25k² = (5k)², so 3k, 4k, 5k is also a triple. Award 3 marks for the theorem, 3 for the triple definition, 4 for the algebraic demonstration.", marks: 10 },
      ],
    },
    // source: Siyavula — Quadrilaterals, Grade 10 Euclidean geometry (https://www.siyavula.com/read/za/mathematics/grade-10/euclidean-geometry-part-1/07-euclidean-geometry-part-1-02)
    {
      slug: "polygons-and-quadrilaterals",
      title: "Polygons and Quadrilaterals",
      objective:
        "By the end of the topic, learners should be able to name polygons, use the interior-angle-sum rule, and state and apply the properties of parallelograms, rectangles, rhombuses, squares, trapeziums and kites.",
      estimatedMinutes: 120,
      notes: `## Polygons

A **polygon** is a closed plane figure with straight sides.

- triangle (3 sides), quadrilateral (4), pentagon (5), hexagon (6), …
- Sum of interior angles of an n-sided polygon = **(n − 2) × 180°**.
- For a quadrilateral (n = 4): (4 − 2) × 180° = **360°**.

## Quadrilaterals and their properties

- **Parallelogram** — two pairs of parallel sides; opposite sides equal; opposite angles equal; consecutive angles supplementary; diagonals bisect each other.
- **Rectangle** — a parallelogram with four right angles; diagonals equal.
- **Rhombus** — a parallelogram with four equal sides; diagonals bisect each other at right angles and bisect the angles.
- **Square** — four equal sides and four right angles; it is both a rectangle and a rhombus.
- **Trapezium** — exactly one pair of parallel sides.
- **Kite** — two pairs of adjacent sides equal; one pair of opposite angles equal; diagonals meet at right angles.

| Shape | Sides | Angles | Diagonals |
| --- | --- | --- | --- |
| Parallelogram | opposite equal | opposite equal | bisect each other |
| Rectangle | opposite equal | all 90° | equal, bisect |
| Rhombus | all equal | opposite equal | perpendicular, bisect |
| Square | all equal | all 90° | equal, perpendicular |
| Trapezium | one pair parallel | — | — |
| Kite | 2 adjacent pairs equal | one pair equal | perpendicular |

## Angle sum of a quadrilateral

The four interior angles always add to 360°.

## Common errors

- **Confusing rhombus and rectangle** — rhombus has equal *sides*; rectangle has equal *angles*.
- **Thinking a trapezium has two pairs of parallel sides** — it has exactly one.
- **Using 180° for a quadrilateral** — the angle sum is 360°.`,
      workedExample: `**Question:** In a parallelogram ABCD, angle A = 70°. Find angles B, C and D.

**Solution**

*Step 1 — opposite angles are equal.*
Angle C = angle A = 70°.

*Step 2 — consecutive angles are supplementary (co-interior between parallel sides).*
Angle B = 180° − 70° = 110°.

*Step 3 — opposite angles again.*
Angle D = angle B = 110°.

*Check:* 70° + 110° + 70° + 110° = 360° ✔ (angle sum of a quadrilateral).

**Answer:** B = 110°, C = 70°, D = 110°.`,
      quiz: [
        { prompt: "The interior angles of a quadrilateral add up to", options: ["180°", "270°", "360°", "540°"], correctIndex: 2, explanation: "(4 − 2) × 180° = 360°." },
        { prompt: "A quadrilateral with four right angles and four equal sides is a", options: ["rectangle", "rhombus", "square", "trapezium"], correctIndex: 2, explanation: "A square has both." },
        { prompt: "In a parallelogram, opposite angles are", options: ["supplementary", "equal", "complementary", "always 90°"], correctIndex: 1, explanation: "Opposite angles of a parallelogram are equal." },
        { prompt: "A rhombus has", options: ["four right angles", "four equal sides", "one pair of parallel sides", "equal diagonals"], correctIndex: 1, explanation: "All four sides of a rhombus are equal." },
        { prompt: "A quadrilateral with exactly one pair of parallel sides is a", options: ["parallelogram", "trapezium", "rhombus", "kite"], correctIndex: 1, explanation: "A trapezium has one pair of parallel sides." },
        { prompt: "The diagonals of a rectangle are", options: ["equal", "perpendicular but unequal", "always horizontal", "not bisecting"], correctIndex: 0, explanation: "A rectangle's diagonals are equal and bisect each other." },
        { prompt: "The sum of interior angles of a pentagon (5 sides) is", options: ["360°", "540°", "720°", "900°"], correctIndex: 1, explanation: "(5 − 2) × 180° = 540°." },
        { prompt: "In a kite, the diagonals meet at", options: ["30°", "45°", "right angles", "60°"], correctIndex: 2, explanation: "The diagonals of a kite are perpendicular." },
        { prompt: "Consecutive angles of a parallelogram are", options: ["equal", "supplementary", "complementary", "reflex"], correctIndex: 1, explanation: "They add up to 180°." },
        { prompt: "A square is both a rectangle and a", options: ["trapezium", "kite", "rhombus", "pentagon"], correctIndex: 2, explanation: "It has four equal sides (rhombus) and four right angles (rectangle)." },
        { prompt: "The diagonals of a rhombus", options: ["are equal", "bisect each other at right angles", "are parallel", "do not meet"], correctIndex: 1, explanation: "They are perpendicular bisectors of each other." },
        { prompt: "Three angles of a quadrilateral are 90°, 100° and 80°. The fourth is", options: ["80°", "90°", "100°", "110°"], correctIndex: 1, explanation: "360° − 270° = 90°." },
        { prompt: "A kite has", options: ["all sides equal", "two pairs of adjacent equal sides", "one pair of parallel sides", "four right angles"], correctIndex: 1, explanation: "Two distinct pairs of adjacent sides are equal." },
        { prompt: "A hexagon has how many sides?", options: ["5", "6", "7", "8"], correctIndex: 1, explanation: "Hexagon = 6 sides." },
        { prompt: "Opposite sides of a parallelogram are", options: ["perpendicular", "equal and parallel", "unequal", "always horizontal"], correctIndex: 1, explanation: "They are both equal and parallel." },
        { prompt: "Which has all four angles equal but not necessarily all sides equal?", options: ["rhombus", "rectangle", "kite", "trapezium"], correctIndex: 1, explanation: "A rectangle has four 90° angles; sides need not all be equal." },
        { prompt: "A parallelogram has one angle of 65°. Its opposite angle is", options: ["65°", "115°", "25°", "295°"], correctIndex: 0, explanation: "Opposite angles are equal." },
        { prompt: "The sum of interior angles of an n-sided polygon is", options: ["n × 180°", "(n − 2) × 180°", "360° ÷ n", "n × 90°"], correctIndex: 1, explanation: "(n − 2) × 180°." },
        { prompt: "Which quadrilateral has equal diagonals that are also perpendicular?", options: ["rectangle", "rhombus", "square", "trapezium"], correctIndex: 2, explanation: "A square's diagonals are both equal and perpendicular." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "In parallelogram PQRS, angle P = 115°. Find angles Q, R and S, giving a reason for each.", answerKey: "R = P = 115° (opposite angles equal). Q = 180° − 115° = 65° (consecutive angles supplementary). S = Q = 65° (opposite angles equal). Check 115+65+115+65 = 360°. Award 2 marks per angle with reason.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Three angles of a quadrilateral are 85°, 95° and 100°. Find the fourth angle.", answerKey: "Sum = 360°, so fourth = 360° − (85 + 95 + 100) = 360° − 280° = 80°. Award 2 marks for the sum rule, 2 for the answer.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which statement is TRUE?", options: ["A rectangle has four equal sides", "A rhombus has four right angles", "A square is both a rectangle and a rhombus", "A trapezium has two pairs of parallel sides"], correctIndex: 2, answerKey: "A square has equal sides (rhombus) and right angles (rectangle). Option C.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Find the sum of the interior angles of an octagon (8 sides), and the size of each angle if it is regular.", answerKey: "Sum = (8 − 2) × 180° = 6 × 180° = 1080°. Regular: each = 1080° ÷ 8 = 135°. Award 3 marks for the sum, 3 for each angle.", marks: 6 },
        { type: "ESSAY", prompt: "Compare a rhombus and a rectangle: describe how each is a special parallelogram, the property that distinguishes them, and why a square belongs to both families.", answerKey: "Both are parallelograms (two pairs of parallel sides, opposite sides and angles equal, diagonals bisect each other). A rhombus adds four equal sides (and perpendicular, angle-bisecting diagonals); a rectangle adds four right angles (and equal diagonals). The distinguishing property is equal sides (rhombus) versus equal/right angles (rectangle). A square has four equal sides and four right angles, so it satisfies both definitions and belongs to both families. Award 3 marks for the shared parallelogram properties, 3 for the rhombus property, 2 for the rectangle property, 2 for the square reasoning.", marks: 10 },
      ],
    },
  ],
};
