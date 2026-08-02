import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Mathematics, Grade 10,
// Semester Two, Period VI, Unit I: Rigid Motion (transformations).
export const mathematicsG10P6: PeriodContent = {
  grade: 10,
  number: 6,
  title: "Rigid Motion (Transformations)",
  summary:
    "Period VI of the MoE Grade 10 Mathematics syllabus. Learners study rigid motions — transformations that move a shape without changing its size or shape: translation (sliding), reflection (flipping in a mirror line), and rotation (turning about a point) — and describe the image of a figure under each.",
  topics: [
    {
      slug: "translation-and-reflection",
      title: "Translation and Reflection",
      objective:
        "By the end of the topic, learners should be able to explain what a rigid motion is, perform and describe translations using a vector, and reflect a figure in a given mirror line.",
      estimatedMinutes: 160,
      notes: `## Introduction

**Transformation geometry** studies what happens to a shape when we move it about the plane — slide it, flip it or turn it. These particular moves keep the shape's size and angles exactly the same, so the moved shape is a perfect copy in a new place. Understanding them builds the idea of **congruence** and prepares learners for coordinate geometry. In this topic we meet translation (sliding) and reflection (flipping); rotation (turning) follows in the next topic.

## What is a rigid motion?

A **transformation** moves or changes a figure. A **rigid motion** (or isometry) is a transformation that moves a figure **without changing its size or shape** — the image is **congruent** (identical) to the original, only its **position** (and possibly orientation) changes.

The three rigid motions are **translation, reflection** and **rotation**. The original figure is the **object**; the new figure is the **image**.

## Translation — sliding

A **translation** slides every point of a figure the **same distance in the same direction**. It is described by a **vector** (a movement, so many units across and so many up/down).

A translation vector is written as a column: **( 3 )** means 3 units right; **( −2 )** means 2 units down.
                                          **( 2 )**                        **(  −2 )**

To translate a point, **add the vector to its coordinates**:

- Point A(1, 2) translated by ( 3, 2 ) → A′(1 + 3, 2 + 2) = **(4, 4)**.

\`\`\`svg A triangle translated to the right and up
<svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A triangle and its translated image">
  <polygon points="30,120 70,120 30,80" fill="#c7d2fe" stroke="#3730a3"/>
  <polygon points="120,80 160,80 120,40" fill="#a7f3d0" stroke="#065f46"/>
  <line x1="50" y1="100" x2="140" y2="60" stroke="#dc2626" stroke-dasharray="4 3" marker-end="url(#ar)"/>
  <text x="35" y="140" font-size="9" fill="#3730a3">object</text>
  <text x="120" y="30" font-size="9" fill="#065f46">image</text>
  <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/></marker></defs>
</svg>
\`\`\`

Under a translation, the image is the **same size, shape and orientation** — the figure simply slides.

## Reflection — flipping

A **reflection** flips a figure over a straight line called the **mirror line (line of reflection)**. Each point of the image is the **same distance** from the mirror line as the object, but on the **opposite side**. A reflection produces a **mirror image** (the orientation is reversed, like your reflection in a mirror).

Common mirror lines and their rules on coordinates:

- Reflection in the **x-axis:** (x, y) → **(x, −y)** (the y-coordinate changes sign).
- Reflection in the **y-axis:** (x, y) → **(−x, y)** (the x-coordinate changes sign).
- Reflection in the line **y = x:** (x, y) → **(y, x)** (the coordinates swap).
- Reflection in the line **y = −x:** (x, y) → **(−y, −x)**.

*Example:* reflecting P(3, 2) in the x-axis gives P′(3, −2); reflecting it in y = x gives (2, 3).

Points **on** the mirror line do not move. The mirror line is the **perpendicular bisector** of the line joining each point to its image.

## Congruence under rigid motion

Because translation and reflection do not change size or shape, the object and image are always **congruent**. This is the key property of every rigid motion — distances and angles are preserved.

## Common errors to watch for

- **Mixing up the axis rules:** reflecting in the **x-axis** changes the sign of **y** (not x); reflecting in the **y-axis** changes the sign of **x**.
- **Translating by subtracting instead of adding** the vector — to move right and up you *add* positive numbers.
- **Reading a column vector wrong way round** — the top number is the horizontal move (across), the bottom is the vertical move (up/down).
- **Thinking a reflection changes size** — it never does; only the orientation flips.`,
      workedExample: `**Task.** A triangle has vertices A(1, 1), B(4, 1) and C(1, 3).
(a) Translate the triangle by the vector ( 2, 3 ) and give the new coordinates.
(b) Reflect the original triangle in the x-axis and give the new coordinates.

**Part (a) — translation by ( 2, 3 )**
Add the vector ( 2, 3 ) to each vertex (2 right, 3 up):
- A(1, 1) → A′(1 + 2, 1 + 3) = **(3, 4)**
- B(4, 1) → B′(4 + 2, 1 + 3) = **(6, 4)**
- C(1, 3) → C′(1 + 2, 3 + 3) = **(3, 6)**

The image triangle A′B′C′ is the same size and shape as ABC — it has simply slid 2 right and 3 up.

**Part (b) — reflection in the x-axis**
For reflection in the x-axis, (x, y) → (x, −y): keep x, change the sign of y.
- A(1, 1) → A′(1, −1)
- B(4, 1) → B′(4, −1)
- C(1, 3) → C′(1, −3)

The image is a mirror image below the x-axis, the same size and shape as the original.

**Conclusion:** a translation adds the vector to every point (sliding the figure), and a reflection in the x-axis keeps x but negates y (flipping it). In both cases the image is **congruent** to the object.`,
      teachingTip:
        "Squared/graph paper is essential here — learners must plot the object and image to see the motion, not just apply rules. For translation, drill 'add the vector to the coordinates'. For reflection, teach the two axis rules as sign changes (x-axis flips y; y-axis flips x) and reinforce that points ON the mirror line stay put. Always end by checking that object and image are congruent — the defining property of rigid motion.",
      quiz: [
        {
          prompt: "A rigid motion moves a figure without changing its…",
          options: ["size or shape", "colour only", "name", "number of sides only"],
          correctIndex: 0,
          explanation: "Rigid motions preserve size and shape.",
        },
        {
          prompt: "Under a rigid motion, the object and image are…",
          options: ["congruent", "different sizes", "different shapes", "unrelated"],
          correctIndex: 0,
          explanation: "They are identical (congruent).",
        },
        {
          prompt: "The three rigid motions are translation, reflection and…",
          options: ["rotation", "enlargement", "stretching", "shrinking"],
          correctIndex: 0,
          explanation: "Rotation is the third rigid motion.",
        },
        {
          prompt: "A translation slides every point the same…",
          options: ["distance in the same direction", "distance in any direction", "angle", "size"],
          correctIndex: 0,
          explanation: "All points move equally in one direction.",
        },
        {
          prompt: "A translation is described by a…",
          options: ["vector", "mirror line", "centre point", "angle"],
          correctIndex: 0,
          explanation: "A vector gives the direction and distance.",
        },
        {
          prompt: "The point A(2, 3) translated by ( 1, 4 ) becomes…",
          options: ["(3, 7)", "(1, 4)", "(2, 12)", "(3, 4)"],
          correctIndex: 0,
          explanation: "Add: (2+1, 3+4) = (3, 7).",
        },
        {
          prompt: "Under a translation, the orientation of the figure is…",
          options: ["unchanged", "reversed", "turned 90°", "reduced"],
          correctIndex: 0,
          explanation: "A translation only slides the figure.",
        },
        {
          prompt: "A reflection flips a figure over a…",
          options: ["mirror line", "centre point", "vector", "vertex"],
          correctIndex: 0,
          explanation: "The line of reflection is the mirror line.",
        },
        {
          prompt: "Under a reflection, the image is on the … side of the mirror line.",
          options: ["opposite", "same", "top", "left"],
          correctIndex: 0,
          explanation: "Each point moves to the opposite side.",
        },
        {
          prompt: "Reflection in the x-axis changes (x, y) to…",
          options: ["(x, −y)", "(−x, y)", "(y, x)", "(−x, −y)"],
          correctIndex: 0,
          explanation: "Keep x, negate y.",
        },
        {
          prompt: "Reflection in the y-axis changes (x, y) to…",
          options: ["(−x, y)", "(x, −y)", "(y, x)", "(−x, −y)"],
          correctIndex: 0,
          explanation: "Keep y, negate x.",
        },
        {
          prompt: "Reflecting P(3, 2) in the x-axis gives…",
          options: ["(3, −2)", "(−3, 2)", "(2, 3)", "(−3, −2)"],
          correctIndex: 0,
          explanation: "x stays, y changes sign.",
        },
        {
          prompt: "Reflecting P(3, 2) in the y-axis gives…",
          options: ["(−3, 2)", "(3, −2)", "(2, 3)", "(−3, −2)"],
          correctIndex: 0,
          explanation: "y stays, x changes sign.",
        },
        {
          prompt: "A point that lies ON the mirror line…",
          options: ["does not move", "moves furthest", "disappears", "doubles"],
          correctIndex: 0,
          explanation: "Points on the line map to themselves.",
        },
        {
          prompt: "A reflection produces a … image.",
          options: ["mirror", "larger", "smaller", "rotated"],
          correctIndex: 0,
          explanation: "Reflection reverses orientation (mirror image).",
        },
        {
          prompt: "The object is the original figure; the new figure is the…",
          options: ["image", "vector", "axis", "centre"],
          correctIndex: 0,
          explanation: "The transformed figure is the image.",
        },
        {
          prompt: "A translation vector ( −2, 3 ) means…",
          options: ["2 left and 3 up", "2 right and 3 down", "3 left and 2 up", "2 up and 3 right"],
          correctIndex: 0,
          explanation: "−2 is 2 left; +3 is 3 up.",
        },
        {
          prompt: "Rigid motions preserve distances and…",
          options: ["angles", "colours", "names", "areas only, not angles"],
          correctIndex: 0,
          explanation: "Both distances and angles are preserved.",
        },
        {
          prompt: "The mirror line is the perpendicular bisector of the line joining…",
          options: ["each point to its image", "two vertices", "the axes", "the vectors"],
          correctIndex: 0,
          explanation: "It bisects the object–image segment at right angles.",
        },
        {
          prompt: "B(0, 5) translated by ( 4, −5 ) becomes…",
          options: ["(4, 0)", "(0, 0)", "(4, 10)", "(−4, 0)"],
          correctIndex: 0,
          explanation: "(0+4, 5−5) = (4, 0).",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Translate the point A(2, 5) by the vector ( 3, −2 ) and give the coordinates of the image.",
          answerKey:
            "A′ = (2 + 3, 5 − 2) = (5, 3). Award marks for adding the vector correctly and the image (5, 3).",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Reflect the triangle with vertices P(1, 2), Q(4, 2), R(1, 5) in the y-axis and give the new coordinates.",
          answerKey:
            "Reflection in y-axis: (x, y) → (−x, y). P′(−1, 2), Q′(−4, 2), R′(−1, 5). Award marks for the correct rule and all three image points.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which statement about a rigid motion is TRUE?",
          options: [
            "the image is congruent to the object",
            "the image is larger than the object",
            "the image is a different shape",
            "the object disappears",
          ],
          correctIndex: 0,
          answerKey: "Rigid motions preserve size and shape, so the image is congruent.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the difference between a translation and a reflection, and describe how you would perform each on a shape drawn on graph paper.",
          answerKey:
            "A strong answer explains that a translation slides every point the same distance in the same direction (described by a vector) and keeps the figure's orientation, performed by adding the vector to each vertex's coordinates; while a reflection flips the figure over a mirror line to produce a mirror image (orientation reversed), performed by plotting each point the same distance on the opposite side of the mirror line (or using the rules (x,y)→(x,−y) for the x-axis and (x,y)→(−x,y) for the y-axis). Both keep the figure congruent. Award marks for the correct distinction and a correct method for each.",
          marks: 5,
        },
      ],
    },
    {
      slug: "rotation",
      title: "Rotation and the Properties of Rigid Motions",
      objective:
        "By the end of the topic, learners should be able to rotate a figure about a centre through a given angle and direction, and state the properties common to all rigid motions.",
      estimatedMinutes: 150,
      notes: `## Introduction

We have slid figures (translation) and flipped them (reflection). The third rigid motion is the **rotation** — a turn about a fixed point, like the hands of a clock sweeping around its centre. Rotation completes the family of rigid motions, and this topic also draws together the **properties they all share**, which is a favourite examination question.

## Rotation — turning

A **rotation** turns a figure about a fixed point called the **centre of rotation**, through a given **angle** and in a given **direction** (clockwise or anticlockwise).

To describe a rotation fully you must give **three** things:

1. the **centre** of rotation,
2. the **angle** of turn (e.g. 90°, 180°, 270°),
3. the **direction** (clockwise or anticlockwise).

\`\`\`svg A shape rotated 90° about the origin
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A flag shape and its image after a 90 degree rotation about a centre point">
  <line x1="20" y1="100" x2="180" y2="100" stroke="#94a3b8"/>
  <line x1="100" y1="20" x2="100" y2="180" stroke="#94a3b8"/>
  <circle cx="100" cy="100" r="4" fill="#111"/>
  <polygon points="120,100 150,100 150,120 120,120" fill="#c7d2fe" stroke="#3730a3"/>
  <polygon points="100,80 100,50 80,50 80,80" fill="#a7f3d0" stroke="#065f46"/>
  <path d="M135,90 A35,35 0 0,0 105,60" fill="none" stroke="#dc2626" stroke-dasharray="3 2" marker-end="url(#a2)"/>
  <text x="112" y="98" font-size="8" fill="#111">centre</text>
  <defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/></marker></defs>
</svg>
\`\`\`

### Rotations about the origin (common cases)
For a rotation about the **origin (0, 0)**:

- **90° anticlockwise:** (x, y) → **(−y, x)**.
- **180°** (either direction): (x, y) → **(−x, −y)**.
- **90° clockwise** (= 270° anticlockwise): (x, y) → **(y, −x)**.

*Example:* rotating P(2, 1) by 180° about the origin gives P′(−2, −1).

The **centre of rotation does not move**; every other point turns around it, staying the **same distance** from the centre.

## Properties common to all rigid motions

Translation, reflection and rotation all share these properties (they are **isometries**):

- The image is **congruent** to the object (same size and shape).
- **Lengths** (distances) are preserved.
- **Angles** are preserved.
- Straight lines stay straight; parallel lines stay parallel.

What can change is the figure's **position** (all three) and its **orientation** (reflection reverses it; rotation turns it; translation keeps it).

## Summary of the three rigid motions

| Motion | Described by | Orientation |
|---|---|---|
| **Translation** | a vector | unchanged |
| **Reflection** | a mirror line | reversed (mirror image) |
| **Rotation** | centre, angle, direction | turned |

## Common errors to watch for

- **Forgetting the direction** — a rotation is only fully described with centre, angle **and** direction (clockwise vs anticlockwise); 90° clockwise and 90° anticlockwise give different images.
- **Confusing the 90° rules** — 90° anticlockwise about the origin is (x, y) → (−y, x); 90° clockwise is (x, y) → (y, −x). Check with a quick sketch.
- **Rotating about the wrong point** — unless told otherwise, use the given centre; the centre itself never moves.
- **Thinking rotation changes size** — like all rigid motions, it preserves lengths and angles.`,
      workedExample: `**Task.** A point P has coordinates (3, 1).
(a) Rotate P by 180° about the origin.
(b) Rotate P by 90° anticlockwise about the origin.
(c) State two properties that stay the same for any rigid motion.

**Part (a) — 180° about the origin**
The rule is (x, y) → (−x, −y):
P(3, 1) → **(−3, −1)**.

**Part (b) — 90° anticlockwise about the origin**
The rule is (x, y) → (−y, x):
P(3, 1) → (−(1), 3) = **(−1, 3)**.

**Part (c) — two properties preserved by any rigid motion**
Any two of:
- The image is **congruent** to the object (same size and shape).
- **Lengths (distances)** are preserved.
- **Angles** are preserved.
- Straight lines stay straight; parallel lines stay parallel.

**Conclusion:** to rotate about the origin, apply the correct rule — 180° gives (−x, −y), so (3, 1) → (−3, −1); 90° anticlockwise gives (−y, x), so (3, 1) → (−1, 3). And whatever the rigid motion, the image stays congruent, with lengths and angles unchanged.`,
      teachingTip:
        "Rotation needs three things every time — centre, angle, direction — and learners lose marks by omitting one; make them state all three. Tracing paper is the best classroom tool: pin it at the centre and physically turn it to see the image. Reinforce that a full description of any transformation (translation by a vector; reflection in a named line; rotation with centre, angle and direction) is what exams ask for, and end the unit by comparing the three motions in one table.",
      quiz: [
        {
          prompt: "A rotation turns a figure about a fixed point called the…",
          options: ["centre of rotation", "mirror line", "vector", "origin only"],
          correctIndex: 0,
          explanation: "Rotation is about a centre.",
        },
        {
          prompt: "To describe a rotation fully you need the centre, the angle and the…",
          options: ["direction", "colour", "size", "vector"],
          correctIndex: 0,
          explanation: "Centre, angle and direction are all required.",
        },
        {
          prompt: "The direction of a rotation is either clockwise or…",
          options: ["anticlockwise", "upward", "sideways", "diagonal"],
          correctIndex: 0,
          explanation: "Clockwise or anticlockwise.",
        },
        {
          prompt: "A rotation of 180° about the origin sends (x, y) to…",
          options: ["(−x, −y)", "(−y, x)", "(x, −y)", "(y, x)"],
          correctIndex: 0,
          explanation: "180° reverses both signs.",
        },
        {
          prompt: "A 90° anticlockwise rotation about the origin sends (x, y) to…",
          options: ["(−y, x)", "(y, −x)", "(−x, −y)", "(x, y)"],
          correctIndex: 0,
          explanation: "The rule is (x, y) → (−y, x).",
        },
        {
          prompt: "Rotating P(2, 1) by 180° about the origin gives…",
          options: ["(−2, −1)", "(2, −1)", "(−1, 2)", "(1, 2)"],
          correctIndex: 0,
          explanation: "(−x, −y) = (−2, −1).",
        },
        {
          prompt: "The centre of rotation…",
          options: ["does not move", "moves furthest", "disappears", "doubles"],
          correctIndex: 0,
          explanation: "Every point turns around the fixed centre.",
        },
        {
          prompt: "During a rotation, each point stays the same … from the centre.",
          options: ["distance", "colour", "angle to the axis", "size"],
          correctIndex: 0,
          explanation: "Points keep their distance from the centre.",
        },
        {
          prompt: "Which motion keeps the orientation unchanged?",
          options: ["translation", "reflection", "rotation", "none"],
          correctIndex: 0,
          explanation: "Translation only slides the figure.",
        },
        {
          prompt: "Which motion reverses the orientation (mirror image)?",
          options: ["reflection", "translation", "rotation", "enlargement"],
          correctIndex: 0,
          explanation: "Reflection produces a mirror image.",
        },
        {
          prompt: "Translation, reflection and rotation are all…",
          options: ["rigid motions (isometries)", "enlargements", "stretches", "shrinks"],
          correctIndex: 0,
          explanation: "All three are rigid motions.",
        },
        {
          prompt: "Under any rigid motion, lengths are…",
          options: ["preserved", "halved", "doubled", "removed"],
          correctIndex: 0,
          explanation: "Distances stay the same.",
        },
        {
          prompt: "Under any rigid motion, angles are…",
          options: ["preserved", "increased", "reduced", "reversed in size"],
          correctIndex: 0,
          explanation: "Angles are unchanged.",
        },
        {
          prompt: "A 90° clockwise rotation is the same as a … anticlockwise rotation.",
          options: ["270°", "90°", "180°", "45°"],
          correctIndex: 0,
          explanation: "Clockwise 90° = anticlockwise 270°.",
        },
        {
          prompt: "A translation is described by a vector; a reflection by a mirror line; a rotation by…",
          options: ["a centre, angle and direction", "a vector only", "a length only", "a colour"],
          correctIndex: 0,
          explanation: "Rotation needs centre, angle and direction.",
        },
        {
          prompt: "Rotating P(1, 0) by 90° anticlockwise about the origin gives…",
          options: ["(0, 1)", "(0, −1)", "(−1, 0)", "(1, 0)"],
          correctIndex: 0,
          explanation: "(−y, x) = (−0, 1) = (0, 1).",
        },
        {
          prompt: "Which stays the same for all three rigid motions?",
          options: ["the size and shape (congruence)", "the position", "the orientation", "the colour"],
          correctIndex: 0,
          explanation: "Congruence is common to all rigid motions.",
        },
        {
          prompt: "Straight lines under a rigid motion stay…",
          options: ["straight", "curved", "broken", "shorter"],
          correctIndex: 0,
          explanation: "Rigid motions map straight lines to straight lines.",
        },
        {
          prompt: "A useful classroom tool for performing rotations is…",
          options: ["tracing paper", "a calculator only", "a dictionary", "a ruler only"],
          correctIndex: 0,
          explanation: "Tracing paper pinned at the centre shows the turn.",
        },
        {
          prompt: "The image after a rigid motion may differ from the object in…",
          options: ["position (and sometimes orientation)", "size", "shape", "angles"],
          correctIndex: 0,
          explanation: "Only position/orientation may change, not size/shape.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Rotate the point A(4, 2) by 180° about the origin, and give the image coordinates.",
          answerKey:
            "180° about the origin: (x, y) → (−x, −y), so A′ = (−4, −2). Award marks for the rule and the image (−4, −2).",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State the three pieces of information needed to describe a rotation fully.",
          answerKey:
            "The centre of rotation, the angle of turn, and the direction (clockwise or anticlockwise). Award a mark for each.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which property is NOT preserved by a rigid motion?",
          options: ["the position of the figure", "lengths", "angles", "size and shape"],
          correctIndex: 0,
          answerKey: "Position can change; size, shape, lengths and angles are all preserved.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Compare the three rigid motions — translation, reflection and rotation — stating how each is described and what happens to the figure's orientation, and give one property common to all three.",
          answerKey:
            "A strong answer states: a translation is described by a vector and keeps the orientation unchanged (slides the figure); a reflection is described by a mirror line and reverses the orientation (produces a mirror image); a rotation is described by a centre, angle and direction and turns the figure. A property common to all three: the image is congruent to the object (same size and shape); lengths and angles are preserved. Award marks for correctly describing each motion and its effect on orientation, and a valid common property.",
          marks: 5,
        },
      ],
    },
  ],
};
