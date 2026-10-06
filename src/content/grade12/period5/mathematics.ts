import type { PeriodContent } from "@/content/types";

// Grade 12, Semester Two, Period V of the MoE Mathematics syllabus:
// Vector and Trigonometry, Transformations, Plane Geometry and Solid
// Geometry. Notes rebuilt from published sources (GeeksforGeeks).
export const mathematicsG12P5: PeriodContent = {
  grade: 12,
  number: 5,
  title: "Vectors, Transformations and Geometry",
  summary:
    "Period V of the MoE Grade 12 Mathematics syllabus. Learners represent vectors, find magnitude and direction, add, subtract, scale and resolve them, and use unit and position vectors; perform transformations (movement, reflection, similarity and translation) on the coordinate plane; state and apply the properties of polygons, triangles, quadrilaterals and the circle theorems; and identify common solids and calculate their surface area and volume.",
  topics: [
    // source: GeeksforGeeks — Magnitude of a Vector (https://www.geeksforgeeks.org/maths/magnitude-of-a-vector/); Unit Vector (https://www.geeksforgeeks.org/maths/unit-vector/); Dot and Cross Products on Vectors (https://www.geeksforgeeks.org/maths/dot-and-cross-products-on-vectors/)
    {
      slug: "vector-and-trigonometry",
      title: "Vector and Trigonometry",
      objective:
        "By the end of the topic, learners should be able to represent vectors, find their magnitude and direction, add, subtract, scale and resolve vectors, use unit and position vectors, and apply the scalar product.",
      estimatedMinutes: 130,
      notes: `## Vectors and their representation

- A **scalar** has size only (mass, time); a **vector** has both **size (magnitude)** and **direction** (displacement, force, velocity).
- A vector is drawn as an **arrow**: length = magnitude, arrowhead = direction.
- **Column / ordered-pair notation:** a vector from the origin to (x, y) is written (x, y) or as a column x over y; here x and y are its **components**.
- **Unit vectors** i and j point one unit along the x- and y-axes, so (x, y) = xi + yj.

## Magnitude and direction

- **Magnitude** of a 2-D vector: |A| = √(x² + y²) (the Pythagorean distance).
- In 3-D: |A| = √(x² + y² + z²).
- **Direction** is the angle θ the vector makes with the positive x-axis: **tan θ = y / x**.

## Vector addition and subtraction

- Add vectors **component by component**: (a, b) + (c, d) = (a + c, b + d).
- Subtract the same way: (a, b) − (c, d) = (a − c, b − d).
- **Triangle law:** place the vectors head to tail; the resultant runs from the first tail to the last head.
- **Parallelogram law:** two vectors from a common point are the sides of a parallelogram; the diagonal is the resultant.

## Multiplication of vectors (scalar multiple)

- Multiplying a vector by a **scalar k** multiplies each component: k(x, y) = (kx, ky).
- k > 1 lengthens, 0 < k < 1 shortens, a **negative k reverses** the direction.

## Resolution of a vector

- A vector of magnitude r at angle θ **resolves** into a horizontal and a vertical component:
- **x-component = r cos θ, y-component = r sin θ.**

## Unit and position vectors

- A **unit vector** has magnitude 1: **v̂ = v / |v|** (divide each component by the magnitude).
- A **position vector** gives a point's location relative to the origin: point P(x, y) has position vector (x, y).

## Scalar (dot) product

- **a · b = |a||b| cos θ**, where θ is the angle between the vectors.
- In components, **a · b = a₁b₁ + a₂b₂**.
- If **a · b = 0** the vectors are **perpendicular (orthogonal)**; parallel vectors are scalar multiples of each other.

## Static equilibrium

- An object is in **static equilibrium** when the forces on it **balance**: the **resultant vector is zero**.

## Common errors

- **Adding magnitudes directly** instead of adding components.
- **Using tan θ = x / y** — the direction is tan θ = y / x.
- **Forgetting to divide by |v|** when finding a unit vector.`,
      workedExample: `**Question:** A vector is A = 3i + 4j. Find (a) its magnitude, (b) a unit vector in its direction, and (c) the angle it makes with the x-axis.

**Solution**

*Step 1 — magnitude.* |A| = √(x² + y²) = √(3² + 4²) = √(9 + 16) = √25 = 5.

*Step 2 — unit vector.* Â = A / |A| = (3/5)i + (4/5)j = (0.6, 0.8).
Check: √(0.6² + 0.8²) = √(0.36 + 0.64) = √1 = 1 ✓.

*Step 3 — direction.* tan θ = y / x = 4 / 3, so θ = tan⁻¹(1.333) ≈ 53.1°.

**Answer: |A| = 5 units, unit vector (0.6, 0.8), direction ≈ 53.1° above the x-axis.**`,
      quiz: [
        { prompt: "A quantity with both size and direction is a", options: ["scalar", "vector", "ratio", "constant"], correctIndex: 1, explanation: "Vectors carry direction as well as magnitude." },
        { prompt: "Mass is an example of a", options: ["vector", "scalar", "unit vector", "resultant"], correctIndex: 1, explanation: "Mass has size only." },
        { prompt: "A vector is drawn as", options: ["a dot", "an arrow", "a circle", "a line segment with no arrow"], correctIndex: 1, explanation: "Length shows magnitude, arrowhead shows direction." },
        { prompt: "The magnitude of (x, y) is", options: ["x + y", "√(x² + y²)", "xy", "x − y"], correctIndex: 1, explanation: "Pythagoras gives the length." },
        { prompt: "The magnitude of (3, 4) is", options: ["5", "7", "12", "25"], correctIndex: 0, explanation: "√(9 + 16) = 5." },
        { prompt: "The direction of a vector uses", options: ["tan θ = y/x", "tan θ = x/y", "sin θ = x", "cos θ = y"], correctIndex: 0, explanation: "θ is measured from the x-axis." },
        { prompt: "(2, 3) + (4, 1) equals", options: ["(6, 4)", "(8, 3)", "(2, 2)", "(6, 3)"], correctIndex: 0, explanation: "Add components: (2+4, 3+1)." },
        { prompt: "(5, 7) − (2, 3) equals", options: ["(3, 4)", "(7, 10)", "(3, 10)", "(7, 4)"], correctIndex: 0, explanation: "Subtract components." },
        { prompt: "3 × (2, −1) equals", options: ["(6, −3)", "(5, 2)", "(6, −1)", "(2, −3)"], correctIndex: 0, explanation: "Multiply each component by 3." },
        { prompt: "Multiplying a vector by −1", options: ["doubles it", "reverses its direction", "makes it a unit vector", "makes it zero"], correctIndex: 1, explanation: "A negative scalar flips direction." },
        { prompt: "The horizontal component of r at angle θ is", options: ["r sin θ", "r cos θ", "r tan θ", "r/θ"], correctIndex: 1, explanation: "x = r cos θ." },
        { prompt: "The vertical component of r at angle θ is", options: ["r cos θ", "r sin θ", "r²", "cos θ/r"], correctIndex: 1, explanation: "y = r sin θ." },
        { prompt: "A unit vector has magnitude", options: ["0", "1", "the same as v", "2"], correctIndex: 1, explanation: "Exactly 1 by definition." },
        { prompt: "The unit vector of v is", options: ["v × |v|", "v / |v|", "|v| / v", "v + 1"], correctIndex: 1, explanation: "Divide by the magnitude." },
        { prompt: "A position vector gives a point's location relative to the", options: ["x-axis", "origin", "y-axis", "resultant"], correctIndex: 1, explanation: "It starts at the origin." },
        { prompt: "The dot product a · b equals", options: ["|a||b| sin θ", "|a||b| cos θ", "|a| + |b|", "|a| − |b|"], correctIndex: 1, explanation: "Scalar product uses cosine." },
        { prompt: "In components, a · b equals", options: ["a₁b₁ + a₂b₂", "a₁ + b₁", "a₁b₂ − a₂b₁", "a₁/b₁"], correctIndex: 0, explanation: "Multiply matching components and add." },
        { prompt: "If a · b = 0 the vectors are", options: ["parallel", "equal", "perpendicular", "unit vectors"], correctIndex: 2, explanation: "cos 90° = 0." },
        { prompt: "An object is in static equilibrium when the resultant force is", options: ["maximum", "zero", "negative", "a unit vector"], correctIndex: 1, explanation: "Balanced forces sum to zero." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Given A = (6, 8), find |A| and the unit vector in its direction.", answerKey: "|A| = √(6² + 8²) = √(36 + 64) = √100 = 10. Unit vector = (6/10, 8/10) = (0.6, 0.8). Award 3 marks for the magnitude, 3 for the unit vector.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "If a = (3, 2) and b = (1, 5), find a + b and a − b.", answerKey: "a + b = (3+1, 2+5) = (4, 7); a − b = (3−1, 2−5) = (2, −3). Award 3 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "The dot product of a = (2, 3) and b = (4, 1) is", options: ["11", "5", "14", "7"], correctIndex: 0, answerKey: "2×4 + 3×1 = 8 + 3 = 11. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A force of 10 N acts at 30° to the horizontal. Resolve it into horizontal and vertical components (use cos 30° ≈ 0.866, sin 30° = 0.5).", answerKey: "Horizontal = 10 cos 30° ≈ 10 × 0.866 = 8.66 N; vertical = 10 sin 30° = 10 × 0.5 = 5 N. Award 3 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Explain how to find the magnitude, direction and unit vector of a 2-D vector, and state the dot-product condition for two vectors to be perpendicular. Illustrate with A = (5, 12).", answerKey: "Magnitude |A| = √(x² + y²); direction θ from tan θ = y/x; unit vector Â = A/|A|. Two vectors are perpendicular when a · b = 0. For A = (5, 12): |A| = √(25 + 144) = √169 = 13; θ = tan⁻¹(12/5) ≈ 67.4°; unit vector = (5/13, 12/13). Award 3 marks for magnitude method, 2 for direction, 2 for unit vector, 3 for the perpendicular condition with worked values.", marks: 10 },
      ],
    },
    // source: GeeksforGeeks — Reflection Rules in Math (https://www.geeksforgeeks.org/maths/reflection-rules-in-math/)
    {
      slug: "transformations",
      title: "Transformations",
      objective:
        "By the end of the topic, learners should be able to describe transformations as movement, find image coordinates, and apply reflection, similarity (enlargement) and translation on the coordinate plane.",
      estimatedMinutes: 120,
      notes: `## Movement

- A **transformation** moves or changes a shape; the starting shape is the **object** and the result is the **image**.
- A **rigid (isometric) transformation** — translation, reflection, rotation — keeps the **same size and shape** (the image is **congruent** to the object).
- A **non-rigid** transformation (enlargement) changes the size.

## Transformations and coordinates

- Each point (x, y) of the object maps to an **image point** by a rule.
- Image points are usually labelled with a prime: A → A′.

## Reflection

- A **reflection** flips a shape across a **line of reflection**; each point moves to the opposite side at the **same perpendicular distance**.

| Line of reflection | Rule |
| --- | --- |
| x-axis | (x, y) → (x, −y) |
| y-axis | (x, y) → (−x, y) |
| y = x | (x, y) → (y, x) |
| y = −x | (x, y) → (−y, −x) |
| origin | (x, y) → (−x, −y) |

## Rotation (about the origin)

| Rotation | Rule |
| --- | --- |
| 90° anticlockwise | (x, y) → (−y, x) |
| 180° | (x, y) → (−x, −y) |
| 270° anticlockwise | (x, y) → (y, −x) |

## Similarities (enlargement)

- An **enlargement** with **scale factor k** about a centre multiplies every distance from the centre by k.
- From the origin: (x, y) → (kx, ky).
- Object and image are **similar**: same shape, angles unchanged, lengths in the ratio k.

## Translation

- A **translation** slides every point the same distance in the same direction.
- Rule with shift (a, b): **(x, y) → (x + a, y + b).**

## Common errors

- **Swapping the x-axis and y-axis reflection rules.**
- **Changing angles during an enlargement** — only lengths scale, angles stay the same.
- **Translating only one vertex** instead of every point of the shape.`,
      workedExample: `**Question:** The point A(4, −7) is reflected in the x-axis, then its image is translated by (2, 3). Find the final coordinates.

**Solution**

*Step 1 — reflect in the x-axis.* Rule (x, y) → (x, −y): A(4, −7) → A′(4, 7).

*Step 2 — translate A′ by (2, 3).* Rule (x, y) → (x + a, y + b): A′(4, 7) → A″(4 + 2, 7 + 3) = (6, 10).

*Check:* reflection kept x = 4 and changed −7 to 7; the translation added 2 to x and 3 to y. ✓

**Answer: the final image is (6, 10).**`,
      quiz: [
        { prompt: "The starting shape in a transformation is the", options: ["image", "object", "vector", "axis"], correctIndex: 1, explanation: "Its result is the image." },
        { prompt: "A rigid transformation keeps the shape's", options: ["size and shape", "colour", "position only", "scale factor"], correctIndex: 0, explanation: "Image is congruent to the object." },
        { prompt: "Which is NOT a rigid transformation?", options: ["translation", "reflection", "rotation", "enlargement"], correctIndex: 3, explanation: "Enlargement changes size." },
        { prompt: "Reflection in the x-axis sends (x, y) to", options: ["(−x, y)", "(x, −y)", "(y, x)", "(−x, −y)"], correctIndex: 1, explanation: "The y-coordinate changes sign." },
        { prompt: "Reflection in the y-axis sends (x, y) to", options: ["(x, −y)", "(−x, y)", "(y, x)", "(−y, −x)"], correctIndex: 1, explanation: "The x-coordinate changes sign." },
        { prompt: "Reflection in y = x sends (x, y) to", options: ["(y, x)", "(−y, −x)", "(x, −y)", "(−x, y)"], correctIndex: 0, explanation: "Coordinates swap." },
        { prompt: "Reflection in the origin sends (x, y) to", options: ["(x, −y)", "(−x, −y)", "(y, x)", "(−x, y)"], correctIndex: 1, explanation: "Both signs change." },
        { prompt: "Reflect (3, 5) in the x-axis to get", options: ["(3, −5)", "(−3, 5)", "(5, 3)", "(−3, −5)"], correctIndex: 0, explanation: "(x, −y)." },
        { prompt: "A 180° rotation about the origin sends (x, y) to", options: ["(−y, x)", "(−x, −y)", "(y, −x)", "(x, y)"], correctIndex: 1, explanation: "Both signs flip." },
        { prompt: "A 90° anticlockwise rotation sends (x, y) to", options: ["(−y, x)", "(y, −x)", "(x, −y)", "(−x, −y)"], correctIndex: 0, explanation: "Standard rotation rule." },
        { prompt: "A translation slides every point", options: ["a different way", "the same distance and direction", "toward the origin", "onto one point"], correctIndex: 1, explanation: "The whole shape moves uniformly." },
        { prompt: "Translate (2, 5) by (3, −1) to get", options: ["(5, 4)", "(−1, 6)", "(6, −5)", "(5, 6)"], correctIndex: 0, explanation: "(2+3, 5−1)." },
        { prompt: "An enlargement with scale factor k from the origin sends (x, y) to", options: ["(x + k, y + k)", "(kx, ky)", "(x/k, y/k)", "(k, k)"], correctIndex: 1, explanation: "Multiply each coordinate by k." },
        { prompt: "Under an enlargement the angles of the shape", options: ["double", "stay the same", "become 90°", "disappear"], correctIndex: 1, explanation: "Only lengths scale; the shape is similar." },
        { prompt: "A scale factor of 2 makes the image", options: ["smaller", "the same size", "twice as large", "a reflection"], correctIndex: 2, explanation: "Distances double." },
        { prompt: "A scale factor between 0 and 1 makes the image", options: ["larger", "smaller", "congruent", "rotated"], correctIndex: 1, explanation: "Lengths shrink." },
        { prompt: "Image points are usually labelled with a", options: ["prime (A′)", "zero", "degree sign", "bar"], correctIndex: 0, explanation: "A maps to A′." },
        { prompt: "Two shapes with the same shape but different size are", options: ["congruent", "similar", "equal", "disjoint"], correctIndex: 1, explanation: "Enlargement gives similar figures." },
        { prompt: "A transformation that produces a congruent image is", options: ["an enlargement with k = 2", "a reflection", "a scale factor 3", "a shrink"], correctIndex: 1, explanation: "Reflection is rigid." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Reflect the point P(−3, 6) in (a) the x-axis and (b) the y-axis.", answerKey: "(a) x-axis: (x, −y) gives (−3, −6). (b) y-axis: (−x, y) gives (3, 6). Award 3 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Translate the triangle vertex A(1, 2) by the vector (4, −3), then reflect the image in the x-axis.", answerKey: "Translate: (1+4, 2−3) = (5, −1). Reflect in x-axis (x, −y): (5, 1). Award 3 marks for the translation, 3 for the reflection.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "An enlargement of scale factor 3 about the origin maps (2, −1) to", options: ["(6, −3)", "(5, 2)", "(2/3, −1/3)", "(−6, 3)"], correctIndex: 0, answerKey: "(3×2, 3×−1) = (6, −3). Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Rotate the point (4, 1) by 180° about the origin, then reflect the result in the line y = x.", answerKey: "180°: (−x, −y) gives (−4, −1). Reflect in y = x (swap): (−1, −4). Award 3 marks for the rotation, 3 for the reflection.", marks: 6 },
        { type: "ESSAY", prompt: "Distinguish rigid transformations from enlargement, give the coordinate rules for reflection in the x-axis, y-axis and y = x and for a translation by (a, b), and apply them to map A(2, 5) through a reflection in the y-axis followed by a translation by (−1, 4).", answerKey: "Rigid transformations (translation, reflection, rotation) keep size and shape so the image is congruent; an enlargement with scale factor k changes size, giving a similar figure. Rules: x-axis (x, y)→(x, −y); y-axis (x, y)→(−x, y); y = x (x, y)→(y, x); translation (x, y)→(x+a, y+b). Working: reflect A(2, 5) in y-axis → (−2, 5); translate by (−1, 4) → (−3, 9). Award 3 marks for the distinction, 3 for the rules, 4 for the worked image (−3, 9).", marks: 10 },
      ],
    },
    // source: GeeksforGeeks — Sum of Angles in a Polygon (https://www.geeksforgeeks.org/maths/sum-of-angles-in-a-polygon/); Circle Theorems (https://www.geeksforgeeks.org/maths/circle-theorems/)
    {
      slug: "plane-geometry",
      title: "Plane Geometry",
      objective:
        "By the end of the topic, learners should be able to state the properties of polygons, triangles and quadrilaterals, compute interior and exterior angles, and apply the circle theorems.",
      estimatedMinutes: 130,
      notes: `## Polygons

- A **polygon** is a closed plane figure bounded by straight line segments (sides).
- A **regular polygon** has all **sides equal and all angles equal**.
- Named by number of sides: triangle (3), quadrilateral (4), pentagon (5), hexagon (6), heptagon (7), octagon (8).

## Interior and exterior angles

- **Sum of interior angles** of an n-sided polygon = **(n − 2) × 180°**.
- Each interior angle of a **regular** polygon = **(n − 2) × 180° / n**.
- **Sum of exterior angles** of any polygon = **360°**.
- Each exterior angle of a regular polygon = **360° / n**; interior + exterior = 180°.

| Polygon | n | Interior sum | Each angle (regular) |
| --- | --- | --- | --- |
| Triangle | 3 | 180° | 60° |
| Quadrilateral | 4 | 360° | 90° |
| Pentagon | 5 | 540° | 108° |
| Hexagon | 6 | 720° | 120° |

## Triangles

- **Scalene** — no equal sides; **isosceles** — two equal sides (and two equal base angles); **equilateral** — all sides equal, all angles 60°.
- The **angle sum of a triangle is 180°**.

## Quadrilaterals

| Quadrilateral | Key properties |
| --- | --- |
| Square | 4 equal sides, 4 right angles |
| Rectangle | opposite sides equal, 4 right angles |
| Parallelogram | opposite sides parallel and equal |
| Rhombus | 4 equal sides, opposite angles equal |

- The **angle sum of any quadrilateral is 360°**.

## Circle theorems

1. **Angle at the centre = twice the angle at the circumference** on the same arc.
2. **Angle in a semicircle = 90°** (special case of theorem 1).
3. **Angles in the same segment are equal.**
4. **Opposite angles of a cyclic quadrilateral add to 180°.**
5. **Tangent–radius:** a tangent meets the radius at the point of contact at **90°**.

## Common errors

- **Using n × 180°** instead of (n − 2) × 180° for the interior sum.
- **Thinking exterior angles grow with n** — their sum is always 360°.
- **Forgetting the angle at the centre is double**, not equal to, the angle at the circumference.`,
      workedExample: `**Question:** Find (a) the sum of the interior angles of a regular hexagon and (b) the size of each interior angle.

**Solution**

*Step 1 — a hexagon has n = 6 sides.*

*Step 2 — interior angle sum.* (n − 2) × 180° = (6 − 2) × 180° = 4 × 180° = 720°.

*Step 3 — each interior angle (regular).* 720° ÷ 6 = 120°.

*Check with exterior angles:* each exterior angle = 360° ÷ 6 = 60°, and 180° − 60° = 120° ✓.

**Answer: interior angle sum = 720°; each interior angle = 120°.**`,
      quiz: [
        { prompt: "A polygon is bounded by", options: ["curves", "straight line segments", "arcs", "one side"], correctIndex: 1, explanation: "Closed figure of straight sides." },
        { prompt: "A regular polygon has", options: ["equal sides only", "equal angles only", "equal sides and equal angles", "no equal parts"], correctIndex: 2, explanation: "Both sides and angles equal." },
        { prompt: "A polygon with 5 sides is a", options: ["quadrilateral", "pentagon", "hexagon", "octagon"], correctIndex: 1, explanation: "Penta = five." },
        { prompt: "Sum of interior angles of an n-sided polygon is", options: ["n × 180°", "(n − 2) × 180°", "360°/n", "(n + 2) × 180°"], correctIndex: 1, explanation: "Split into n − 2 triangles." },
        { prompt: "Sum of interior angles of a pentagon is", options: ["360°", "540°", "720°", "180°"], correctIndex: 1, explanation: "(5 − 2) × 180° = 540°." },
        { prompt: "Each interior angle of a regular hexagon is", options: ["108°", "120°", "135°", "90°"], correctIndex: 1, explanation: "720° ÷ 6 = 120°." },
        { prompt: "The sum of exterior angles of any polygon is", options: ["180°", "360°", "(n − 2) × 180°", "n × 90°"], correctIndex: 1, explanation: "Always 360°." },
        { prompt: "Each exterior angle of a regular polygon is", options: ["360°/n", "180°/n", "(n − 2)180°", "90°"], correctIndex: 0, explanation: "360° shared equally." },
        { prompt: "An interior angle and its exterior angle add to", options: ["90°", "180°", "360°", "60°"], correctIndex: 1, explanation: "They are on a straight line." },
        { prompt: "An equilateral triangle has angles of", options: ["90°", "45°", "60°", "30°"], correctIndex: 2, explanation: "180° ÷ 3 = 60°." },
        { prompt: "An isosceles triangle has", options: ["no equal sides", "two equal sides", "all sides equal", "a right angle"], correctIndex: 1, explanation: "Two equal sides and base angles." },
        { prompt: "The angle sum of a triangle is", options: ["90°", "180°", "270°", "360°"], correctIndex: 1, explanation: "A fixed property of triangles." },
        { prompt: "The angle sum of any quadrilateral is", options: ["180°", "360°", "540°", "720°"], correctIndex: 1, explanation: "(4 − 2) × 180° = 360°." },
        { prompt: "A square has", options: ["4 equal sides and 4 right angles", "no right angles", "2 equal sides", "curved sides"], correctIndex: 0, explanation: "Regular quadrilateral." },
        { prompt: "A rhombus has", options: ["4 right angles", "4 equal sides", "one pair of parallel sides", "no equal sides"], correctIndex: 1, explanation: "All sides equal." },
        { prompt: "The angle at the centre of a circle is ___ the angle at the circumference on the same arc.", options: ["equal to", "half", "twice", "three times"], correctIndex: 2, explanation: "Centre = 2 × circumference." },
        { prompt: "The angle in a semicircle is", options: ["45°", "60°", "90°", "180°"], correctIndex: 2, explanation: "A right angle." },
        { prompt: "Opposite angles of a cyclic quadrilateral add to", options: ["90°", "180°", "270°", "360°"], correctIndex: 1, explanation: "Supplementary." },
        { prompt: "A tangent meets the radius at the point of contact at", options: ["0°", "45°", "90°", "180°"], correctIndex: 2, explanation: "Tangent ⟂ radius." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Find the sum of the interior angles of an octagon (8 sides) and each interior angle if it is regular.", answerKey: "Sum = (8 − 2) × 180° = 6 × 180° = 1080°. Each = 1080° ÷ 8 = 135°. Award 3 marks for the sum, 3 for 135°.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "A regular polygon has each exterior angle 24°. How many sides has it?", answerKey: "n = 360° ÷ exterior angle = 360° ÷ 24° = 15 sides. Award 3 marks for the method, 3 for n = 15.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "The angle at the centre is 140°. The angle at the circumference on the same arc is", options: ["70°", "140°", "280°", "40°"], correctIndex: 0, answerKey: "Circumference = half the centre = 70°. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "In a cyclic quadrilateral one angle is 85°. Find its opposite angle.", answerKey: "Opposite angles add to 180°, so the opposite angle = 180° − 85° = 95°. Award 3 marks for the rule, 3 for 95°.", marks: 6 },
        { type: "ESSAY", prompt: "State the formulas for the sum of interior angles and each interior/exterior angle of a regular polygon, and three circle theorems, then find each interior angle of a regular decagon (10 sides).", answerKey: "Interior sum = (n − 2) × 180°; each interior angle (regular) = (n − 2)180°/n; each exterior angle = 360°/n with sum 360°. Circle theorems: angle at centre = twice angle at circumference; angle in a semicircle = 90°; opposite angles of a cyclic quadrilateral add to 180° (also tangent ⟂ radius; angles in the same segment equal). Decagon: (10 − 2) × 180° = 1440°; each interior angle = 1440° ÷ 10 = 144°. Award 3 marks for the polygon formulas, 3 for three circle theorems, 4 for 144°.", marks: 10 },
      ],
    },
    // source: GeeksforGeeks — Surface Areas and Volumes (https://www.geeksforgeeks.org/maths/surface-areas-and-volumes/)
    {
      slug: "solid-geometry",
      title: "Solid Geometry",
      objective:
        "By the end of the topic, learners should be able to identify common solids and their faces, and calculate the surface area and volume of prisms, cuboids, cylinders, pyramids, cones and spheres.",
      estimatedMinutes: 120,
      notes: `## Common solids

- A **solid** is a three-dimensional shape with **length, breadth and height**.
- A **face** is a flat surface, an **edge** is where two faces meet, a **vertex** is a corner.
- Examples: cuboid, cube, cylinder, cone, sphere, prism, pyramid, tetrahedron.

## Prisms

- A **prism** has two identical parallel ends (cross-sections) joined by rectangles.
- **Volume = area of cross-section × length.**

## Cuboids

- A **cuboid** has length l, breadth b, height h (a cube is a cuboid with l = b = h = a).
- **Volume = l × b × h** (cube: a³).
- **Total surface area = 2(lb + bh + hl)** (cube: 6a²).

## Cylinder

- Radius r, height h.
- **Volume = πr²h.**
- **Curved surface area = 2πrh**; **total surface area = 2πr(r + h)**.

## Pyramids

- A **pyramid** has a polygon base and triangular faces meeting at an apex.
- **Volume = (1/3) × base area × height.**

## Cone

- A cone is a pyramid with a circular base; radius r, height h, slant height l where l = √(r² + h²).
- **Volume = (1/3)πr²h.**
- **Curved surface area = πrl**; total surface area = πr(r + l).

## Sphere

- Radius r.
- **Volume = (4/3)πr³**; **surface area = 4πr²**.

## Volumes and surface area (summary)

| Solid | Volume | Surface area |
| --- | --- | --- |
| Cuboid | l·b·h | 2(lb + bh + hl) |
| Cube | a³ | 6a² |
| Cylinder | πr²h | 2πr(r + h) |
| Cone | (1/3)πr²h | πr(r + l) |
| Sphere | (4/3)πr³ | 4πr² |

## Common errors

- **Using the diameter instead of the radius** in πr² formulas.
- **Forgetting the 1/3** for a cone or pyramid volume.
- **Mixing curved surface area with total surface area** for a cylinder or cone.`,
      workedExample: `**Question:** A cylinder has radius 7 cm and height 10 cm. Find its volume and total surface area (take π ≈ 22/7).

**Solution**

*Step 1 — volume.* V = πr²h = (22/7) × 7² × 10 = (22/7) × 49 × 10 = 22 × 7 × 10 = 1540 cm³.

*Step 2 — total surface area.* TSA = 2πr(r + h) = 2 × (22/7) × 7 × (7 + 10) = 2 × 22 × 17 = 748 cm².

*Check:* curved surface = 2πrh = 2 × (22/7) × 7 × 10 = 440 cm²; two ends = 2πr² = 2 × (22/7) × 49 = 308 cm²; 440 + 308 = 748 ✓.

**Answer: volume = 1540 cm³, total surface area = 748 cm².**`,
      quiz: [
        { prompt: "A solid has", options: ["length only", "length and breadth only", "length, breadth and height", "no dimensions"], correctIndex: 2, explanation: "3-D shapes are measured in three dimensions." },
        { prompt: "A flat surface of a solid is a", options: ["face", "edge", "vertex", "net"], correctIndex: 0, explanation: "Faces are the flat surfaces." },
        { prompt: "Where two faces meet is an", options: ["edge", "apex", "face", "base"], correctIndex: 0, explanation: "Edges join faces." },
        { prompt: "The volume of a cuboid is", options: ["2(lb + bh + hl)", "l × b × h", "πr²h", "6a²"], correctIndex: 1, explanation: "Multiply the three dimensions." },
        { prompt: "The total surface area of a cuboid is", options: ["l × b × h", "2(lb + bh + hl)", "4πr²", "πrl"], correctIndex: 1, explanation: "Sum of the six faces." },
        { prompt: "The volume of a cube of side a is", options: ["a²", "6a²", "a³", "3a"], correctIndex: 2, explanation: "All sides equal to a." },
        { prompt: "The surface area of a cube is", options: ["a³", "6a²", "4a²", "2a²"], correctIndex: 1, explanation: "Six equal square faces." },
        { prompt: "The volume of a cylinder is", options: ["2πrh", "πr²h", "(1/3)πr²h", "4πr²"], correctIndex: 1, explanation: "Base area × height." },
        { prompt: "The curved surface area of a cylinder is", options: ["πr²", "2πrh", "2πr(r+h)", "πrl"], correctIndex: 1, explanation: "The rectangle wrapped round." },
        { prompt: "The total surface area of a cylinder is", options: ["2πrh", "2πr(r + h)", "πr²h", "(4/3)πr³"], correctIndex: 1, explanation: "Curved surface plus two ends." },
        { prompt: "The volume of a cone is", options: ["πr²h", "(1/3)πr²h", "πrl", "4πr²"], correctIndex: 1, explanation: "One third of a cylinder." },
        { prompt: "The curved surface area of a cone is", options: ["πrl", "πr²", "2πrh", "(1/3)πr²h"], correctIndex: 0, explanation: "l is the slant height." },
        { prompt: "The slant height of a cone is", options: ["r + h", "√(r² + h²)", "rh", "πr"], correctIndex: 1, explanation: "Pythagoras on r and h." },
        { prompt: "The volume of a sphere is", options: ["4πr²", "(4/3)πr³", "πr²h", "(1/3)πr³"], correctIndex: 1, explanation: "Standard sphere formula." },
        { prompt: "The surface area of a sphere is", options: ["4πr²", "(4/3)πr³", "2πr²", "πr²"], correctIndex: 0, explanation: "4πr²." },
        { prompt: "The volume of a prism is", options: ["cross-section area × length", "πr²h", "6a²", "(1/3)base × height"], correctIndex: 0, explanation: "Uniform cross-section." },
        { prompt: "The volume of a pyramid is", options: ["base area × height", "(1/3) × base area × height", "πr²h", "2πrh"], correctIndex: 1, explanation: "One third of the prism." },
        { prompt: "In πr² formulas you must use the", options: ["diameter", "radius", "circumference", "slant height"], correctIndex: 1, explanation: "Radius, not diameter." },
        { prompt: "A cone's volume compared with a cylinder of the same base and height is", options: ["equal", "one third", "double", "half"], correctIndex: 1, explanation: "V = (1/3)πr²h." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Find the volume and total surface area of a cuboid 5 cm by 4 cm by 3 cm.", answerKey: "Volume = 5 × 4 × 3 = 60 cm³. TSA = 2(lb + bh + hl) = 2(20 + 12 + 15) = 2 × 47 = 94 cm². Award 3 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "A cone has radius 3 cm and height 4 cm. Find its slant height and curved surface area (π ≈ 3.14).", answerKey: "l = √(3² + 4²) = √25 = 5 cm. CSA = πrl = 3.14 × 3 × 5 = 47.1 cm². Award 3 marks for l = 5, 3 for the CSA.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "The volume of a sphere of radius 3 cm (π ≈ 3.14) is about", options: ["113.0 cm³", "28.3 cm³", "36.0 cm³", "339.1 cm³"], correctIndex: 0, answerKey: "V = (4/3)π(3³) = (4/3)(3.14)(27) = 113.04 cm³. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Find the volume of a cylinder of radius 7 cm and height 5 cm (π ≈ 22/7).", answerKey: "V = πr²h = (22/7)(49)(5) = 22 × 7 × 5 = 770 cm³. Award 3 marks for the setup, 3 for 770 cm³.", marks: 6 },
        { type: "ESSAY", prompt: "State the volume and surface-area formulas for a cuboid, cylinder, cone and sphere, and find the volume of a cone with radius 6 cm and height 7 cm (π ≈ 22/7).", answerKey: "Cuboid: V = lbh, SA = 2(lb + bh + hl). Cylinder: V = πr²h, TSA = 2πr(r + h). Cone: V = (1/3)πr²h, CSA = πrl. Sphere: V = (4/3)πr³, SA = 4πr². Cone volume: (1/3)(22/7)(6²)(7) = (1/3)(22/7)(36)(7) = (1/3)(22)(36) = (1/3)(792) = 264 cm³. Award 6 marks for the four pairs of formulas, 4 for 264 cm³.", marks: 10 },
      ],
    },
  ],
};
