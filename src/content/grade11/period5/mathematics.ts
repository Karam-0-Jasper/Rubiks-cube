import type { PeriodContent } from "@/content/types";

// Grade 11, Semester Two, Period V of the MoE Mathematics syllabus:
// Trigonometry (angle of slope and gradient, the tangent of an angle, heights
// and distances, rotation, cosine and sine of an angle, special ratios of
// 30/45/60, angles of elevation and depression). Notes rebuilt from published
// sources (Siyavula, GeeksforGeeks).
export const mathematicsG11P5: PeriodContent = {
  grade: 11,
  number: 5,
  title: "Trigonometry",
  summary:
    "Period V of the MoE Grade 11 Mathematics syllabus. Learners define the tangent, sine and cosine ratios in a right-angled triangle, relate the tangent to slope and gradient, use the ratios to find heights and distances, know the exact ratios of 30°, 45° and 60°, and solve angle-of-elevation and angle-of-depression problems.",
  topics: [
    // source: Siyavula — Defining the trigonometric ratios, Grade 10 Trigonometry (https://www.siyavula.com/read/za/mathematics/grade-10/trigonometry-part-1/05-trigonometry-part-1-02) and GeeksforGeeks — Trigonometric Ratios (https://www.geeksforgeeks.org/maths/trigonometric-ratios/)
    {
      slug: "tangent-of-an-angle",
      title: "The Tangent of an Angle, Slope and Gradient",
      objective:
        "By the end of the topic, learners should be able to define the tangent ratio, relate it to the slope and gradient of a line, and use it to find unknown heights and distances.",
      estimatedMinutes: 120,
      notes: `## Naming the sides

In a right-angled triangle, for a chosen acute angle θ:
- the **hypotenuse** is the longest side, opposite the right angle;
- the **opposite** side is across from θ;
- the **adjacent** side is next to θ (and to the right angle).

\`\`\`svg Right-angled triangle with sides labelled for angle θ
<svg viewBox="0 0 180 130" xmlns="http://www.w3.org/2000/svg">
  <polygon points="20,110 160,110 160,30" fill="none" stroke="#333" stroke-width="1.5"/>
  <rect x="146" y="96" width="14" height="14" fill="none" stroke="#333" stroke-width="1"/>
  <text x="30" y="105" font-size="10" fill="#1d4ed8">θ</text>
  <text x="80" y="124" font-size="10" fill="#555">adjacent</text>
  <text x="163" y="75" font-size="10" fill="#555">opposite</text>
  <text x="70" y="60" font-size="10" fill="#555">hypotenuse</text>
</svg>
\`\`\`

## The tangent ratio

- **tan θ = opposite / adjacent**
- The tangent depends only on the angle, not on the size of the triangle.

## Slope and gradient

- The **gradient** of a line is rise/run — the vertical change divided by the horizontal change.
- For a line making an **angle of slope** θ with the horizontal, **gradient = tan θ**.
- A steeper line has a larger angle of slope and a larger tangent.

## Finding sides and angles

- To find an **opposite** side: opposite = adjacent × tan θ.
- To find an **adjacent** side: adjacent = opposite ÷ tan θ.
- To find the **angle**: θ = tan⁻¹(opposite / adjacent), the inverse tangent.

## Common values

| θ | tan θ |
| --- | --- |
| 0° | 0 |
| 30° | 1/√3 ≈ 0.577 |
| 45° | 1 |
| 60° | √3 ≈ 1.732 |

## Common errors

- **Mixing up opposite and adjacent** — check which side is across from θ.
- **Using tan for the hypotenuse** — tan uses only opposite and adjacent.
- **Forgetting the inverse** — to get the angle from a ratio, use tan⁻¹.`,
      workedExample: `**Question:** A ladder leans against a wall. Its foot is 3 m from the wall and it reaches 4 m up the wall. Find the angle θ the ladder makes with the ground.

**Solution**

*Step 1 — identify the sides relative to θ at the foot of the ladder.*
Opposite (height up the wall) = 4 m; adjacent (distance along ground) = 3 m.

*Step 2 — use the tangent ratio.*
tan θ = opposite / adjacent = 4/3

*Step 3 — take the inverse tangent.*
θ = tan⁻¹(4/3) = tan⁻¹(1.333…) ≈ 53.1°

**Answer: θ ≈ 53.1°**`,
      quiz: [
        { prompt: "The hypotenuse is", options: ["opposite θ", "the longest side, opposite the right angle", "next to θ", "always horizontal"], correctIndex: 1, explanation: "It faces the right angle." },
        { prompt: "tan θ =", options: ["opp/hyp", "adj/hyp", "opp/adj", "hyp/opp"], correctIndex: 2, explanation: "Tangent is opposite over adjacent." },
        { prompt: "The gradient of a line equals", options: ["sin θ", "cos θ", "tan θ", "1/tan θ"], correctIndex: 2, explanation: "gradient = rise/run = tan θ." },
        { prompt: "tan 45° =", options: ["0", "1", "√3", "1/√3"], correctIndex: 1, explanation: "Opposite equals adjacent." },
        { prompt: "tan 60° =", options: ["1", "√3", "1/√3", "2"], correctIndex: 1, explanation: "tan 60° = √3 ≈ 1.732." },
        { prompt: "To find the angle from a ratio, use", options: ["tan", "tan⁻¹", "×2", "√"], correctIndex: 1, explanation: "The inverse tangent." },
        { prompt: "If opposite = 4 and adjacent = 3, tan θ =", options: ["3/4", "4/3", "4/5", "5/4"], correctIndex: 1, explanation: "opp/adj = 4/3." },
        { prompt: "A steeper line has a tangent that is", options: ["smaller", "larger", "zero", "negative always"], correctIndex: 1, explanation: "Steeper = bigger angle = bigger tan." },
        { prompt: "The adjacent side is", options: ["across from θ", "next to θ and the right angle", "the longest", "always vertical"], correctIndex: 1, explanation: "It touches θ and the right angle." },
        { prompt: "To find the opposite side: opposite =", options: ["adjacent × tan θ", "adjacent ÷ tan θ", "hyp × tan θ", "tan θ ÷ adjacent"], correctIndex: 0, explanation: "Rearranging tan θ = opp/adj." },
        { prompt: "tan 0° =", options: ["1", "0", "√3", "undefined"], correctIndex: 1, explanation: "No rise, so 0." },
        { prompt: "A road rises 1 m for every 10 m horizontally. tan of its slope is", options: ["10", "0.1", "1", "0.5"], correctIndex: 1, explanation: "rise/run = 1/10 = 0.1." },
        { prompt: "tan 30° ≈", options: ["0.577", "1.732", "1", "0.5"], correctIndex: 0, explanation: "1/√3 ≈ 0.577." },
        { prompt: "The tangent of an angle depends on", options: ["the triangle's size", "the angle only", "the hypotenuse only", "the area"], correctIndex: 1, explanation: "It is constant for a given angle." },
        { prompt: "If tan θ = 1, then θ =", options: ["30°", "45°", "60°", "90°"], correctIndex: 1, explanation: "tan 45° = 1." },
        { prompt: "A line with gradient √3 makes an angle of", options: ["30°", "45°", "60°", "90°"], correctIndex: 2, explanation: "tan 60° = √3." },
        { prompt: "The opposite side is 6 and tan θ = 2. The adjacent side is", options: ["3", "12", "8", "4"], correctIndex: 0, explanation: "adjacent = opp/tan = 6/2 = 3." },
        { prompt: "Which ratio uses the hypotenuse?", options: ["tangent", "sine", "gradient", "slope"], correctIndex: 1, explanation: "Sine and cosine use the hypotenuse; tangent does not." },
        { prompt: "θ = tan⁻¹(1) gives", options: ["0°", "30°", "45°", "60°"], correctIndex: 2, explanation: "The angle whose tangent is 1 is 45°." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "In a right triangle the side opposite θ is 5 cm and the adjacent side is 12 cm. Find tan θ and then θ.", answerKey: "tan θ = 5/12 ≈ 0.4167; θ = tan⁻¹(0.4167) ≈ 22.6°. Award 3 marks for the ratio, 3 for the angle.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "A straight line makes an angle of 30° with the horizontal. Find its gradient in surd form.", answerKey: "gradient = tan 30° = 1/√3 (≈ 0.577), which rationalises to √3/3. Award 3 marks for gradient = tan 30°, 3 for 1/√3.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "A ramp rises 2 m over a horizontal distance of 2 m. The angle of slope is", options: ["30°", "45°", "60°", "90°"], correctIndex: 1, answerKey: "tan θ = 2/2 = 1, so θ = 45°. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "The adjacent side to an angle of 40° is 8 m. Find the opposite side (tan 40° ≈ 0.839).", answerKey: "opposite = adjacent × tan θ = 8 × 0.839 = 6.71 m (to 2 dp). Award 3 marks for the rearrangement, 3 for 6.71 m.", marks: 6 },
        { type: "ESSAY", prompt: "Define the tangent ratio, explain how it relates to the gradient and angle of slope of a line, and use it to find the height of a tree whose base is 15 m from a point where the angle to the top is 35° (tan 35° ≈ 0.700).", answerKey: "The tangent of an acute angle θ in a right triangle is tan θ = opposite/adjacent. The gradient of a line is rise/run, and for a line at angle of slope θ, gradient = tan θ, so a steeper line has a larger tangent. For the tree: height (opposite) = adjacent × tan θ = 15 × 0.700 = 10.5 m. Award 3 marks for the definition, 3 for the gradient/slope link, 4 for the height 10.5 m.", marks: 10 },
      ],
    },
    // source: Siyavula — Defining the trigonometric ratios, Grade 10 Trigonometry (https://www.siyavula.com/read/za/mathematics/grade-10/trigonometry-part-1/05-trigonometry-part-1-02) and GeeksforGeeks — Sin Cos Tan Formula (https://www.geeksforgeeks.org/maths/sin-cos-tan-formula/)
    {
      slug: "sine-and-cosine",
      title: "Sine and Cosine of an Angle",
      objective:
        "By the end of the topic, learners should be able to define the sine and cosine ratios, use them to find sides and angles, and state the exact trigonometric ratios of 30°, 45° and 60°.",
      estimatedMinutes: 120,
      notes: `## The sine and cosine ratios

For an acute angle θ in a right-angled triangle:
- **sin θ = opposite / hypotenuse**
- **cos θ = adjacent / hypotenuse**
- **tan θ = opposite / adjacent**

The memory aid is **SOH-CAH-TOA**: Sine = Opp/Hyp, Cosine = Adj/Hyp, Tangent = Opp/Adj.

## Using the ratios

- To find a side, multiply: opposite = hypotenuse × sin θ; adjacent = hypotenuse × cos θ.
- To find an angle from a known ratio, use the inverse: θ = sin⁻¹(...) or cos⁻¹(...).

Example (3-4-5 triangle, θ opposite the side of length 4, hypotenuse 5, adjacent 3):
sin θ = 4/5 = 0.8, cos θ = 3/5 = 0.6, tan θ = 4/3.

## Exact ratios of special angles

| θ | sin θ | cos θ | tan θ |
| --- | --- | --- | --- |
| 30° | 1/2 | √3/2 | 1/√3 |
| 45° | 1/√2 | 1/√2 | 1 |
| 60° | √3/2 | 1/2 | √3 |

Note that sin 30° = cos 60° and sin 60° = cos 30°: the sine of an angle equals the cosine of its complement.

## Rotation

- As a radius rotates about a point, the angle it makes increases; the ratios repeat in a cycle, which is why sine and cosine describe **rotation** and repeating (periodic) motion.

## Common errors

- **Swapping sine and cosine** — sine uses the opposite, cosine the adjacent.
- **Forgetting the hypotenuse** — both sine and cosine divide by it.
- **Reading sin 30° as √3/2** — it is 1/2.`,
      workedExample: `**Question:** In a right-angled triangle the hypotenuse is 10 cm and the angle θ is 30°. Find the opposite and adjacent sides.

**Solution**

*Step 1 — opposite side using sine.*
sin θ = opposite / hypotenuse
opposite = hypotenuse × sin 30° = 10 × 1/2 = 5 cm

*Step 2 — adjacent side using cosine.*
cos θ = adjacent / hypotenuse
adjacent = hypotenuse × cos 30° = 10 × √3/2 = 5√3 ≈ 8.66 cm

**Answer: opposite = 5 cm, adjacent = 5√3 ≈ 8.66 cm**`,
      quiz: [
        { prompt: "sin θ =", options: ["opp/adj", "opp/hyp", "adj/hyp", "hyp/opp"], correctIndex: 1, explanation: "Sine is opposite over hypotenuse." },
        { prompt: "cos θ =", options: ["opp/hyp", "adj/hyp", "opp/adj", "adj/opp"], correctIndex: 1, explanation: "Cosine is adjacent over hypotenuse." },
        { prompt: "SOH-CAH-TOA: the C-A-H part means cosine =", options: ["opp/hyp", "adj/hyp", "opp/adj", "hyp/adj"], correctIndex: 1, explanation: "Cosine = Adjacent / Hypotenuse." },
        { prompt: "In a 3-4-5 triangle with opposite 4, sin θ =", options: ["3/5", "4/5", "4/3", "5/4"], correctIndex: 1, explanation: "opp/hyp = 4/5." },
        { prompt: "In a 3-4-5 triangle with adjacent 3, cos θ =", options: ["3/5", "4/5", "3/4", "5/3"], correctIndex: 0, explanation: "adj/hyp = 3/5." },
        { prompt: "sin 30° =", options: ["1/2", "√3/2", "1", "1/√2"], correctIndex: 0, explanation: "sin 30° = 1/2." },
        { prompt: "cos 60° =", options: ["√3/2", "1/2", "1", "√3"], correctIndex: 1, explanation: "cos 60° = 1/2." },
        { prompt: "sin 45° =", options: ["1/2", "1/√2", "√3/2", "1"], correctIndex: 1, explanation: "sin 45° = 1/√2." },
        { prompt: "cos 30° =", options: ["1/2", "√3/2", "1/√2", "√3"], correctIndex: 1, explanation: "cos 30° = √3/2." },
        { prompt: "tan 45° =", options: ["0", "1", "√3", "1/√3"], correctIndex: 1, explanation: "sin/cos = 1." },
        { prompt: "To find a side opposite θ from the hypotenuse, multiply the hypotenuse by", options: ["cos θ", "sin θ", "tan θ", "θ"], correctIndex: 1, explanation: "opposite = hyp × sin θ." },
        { prompt: "sin 30° equals cos of", options: ["30°", "45°", "60°", "90°"], correctIndex: 2, explanation: "sin 30° = cos 60° (complement)." },
        { prompt: "With hypotenuse 10 and θ = 30°, the opposite side is", options: ["5", "8.66", "10", "3.33"], correctIndex: 0, explanation: "10 × sin 30° = 10 × 0.5 = 5." },
        { prompt: "With hypotenuse 10 and θ = 30°, the adjacent side is about", options: ["5", "8.66", "10", "7.07"], correctIndex: 1, explanation: "10 × cos 30° = 10 × 0.866 = 8.66." },
        { prompt: "sin 60° =", options: ["1/2", "√3/2", "1/√2", "√3"], correctIndex: 1, explanation: "sin 60° = √3/2." },
        { prompt: "Both sine and cosine divide by the", options: ["opposite", "adjacent", "hypotenuse", "angle"], correctIndex: 2, explanation: "Both use the hypotenuse." },
        { prompt: "To find an angle from sin θ = 0.5, use", options: ["sin 0.5", "sin⁻¹(0.5)", "cos 0.5", "0.5 × 2"], correctIndex: 1, explanation: "The inverse sine, giving 30°." },
        { prompt: "cos 45° =", options: ["1/2", "1/√2", "√3/2", "1"], correctIndex: 1, explanation: "cos 45° = 1/√2." },
        { prompt: "Sine and cosine repeat in a cycle, so they describe", options: ["straight lines", "rotation / periodic motion", "areas", "gradients"], correctIndex: 1, explanation: "They model repeating rotation." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "In a right triangle the hypotenuse is 13 cm and the side opposite θ is 5 cm. Find sin θ, cos θ and tan θ (the adjacent side is 12 cm).", answerKey: "sin θ = 5/13, cos θ = 12/13, tan θ = 5/12. Award 2 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "State the exact values of sin 60°, cos 60° and tan 60°.", answerKey: "sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3. Award 2 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "A right triangle has hypotenuse 8 cm and θ = 45°. The opposite side is", options: ["4 cm", "8/√2 cm", "8 cm", "4√3 cm"], correctIndex: 1, answerKey: "opposite = 8 × sin 45° = 8 × 1/√2 = 8/√2 = 4√2 ≈ 5.66 cm. Option B (8/√2). ", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Find θ if cos θ = 0.5.", answerKey: "θ = cos⁻¹(0.5) = 60°, since cos 60° = 1/2. Award 3 marks for using the inverse cosine, 3 for 60°.", marks: 6 },
        { type: "ESSAY", prompt: "Define the sine and cosine ratios using SOH-CAH-TOA, give the exact ratios for 30° and 45°, and use them to find the two shorter sides of a right triangle with hypotenuse 20 cm and one angle of 30°.", answerKey: "sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse (SOH-CAH). Exact: sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3; sin 45° = cos 45° = 1/√2, tan 45° = 1. For hypotenuse 20, θ = 30°: opposite = 20 × sin 30° = 20 × 1/2 = 10 cm; adjacent = 20 × cos 30° = 20 × √3/2 = 10√3 ≈ 17.32 cm. Award 3 marks for the definitions, 3 for the exact ratios, 2 for the opposite, 2 for the adjacent.", marks: 10 },
      ],
    },
    // source: GeeksforGeeks — Angle of Elevation (https://www.geeksforgeeks.org/maths/angle-of-elevation/)
    {
      slug: "angles-of-elevation-and-depression",
      title: "Angles of Elevation and Depression",
      objective:
        "By the end of the topic, learners should be able to define the angles of elevation and depression and use trigonometric ratios to solve real height-and-distance problems.",
      estimatedMinutes: 110,
      notes: `## Definitions

- The **angle of elevation** is the angle between the horizontal and the line of sight when looking **up** at an object above eye level.
- The **angle of depression** is the angle between the horizontal and the line of sight when looking **down** at an object below eye level.
- Because the two horizontals are parallel, the **angle of elevation from A to B equals the angle of depression from B to A** (alternate angles).

\`\`\`svg Angle of elevation and angle of depression
<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="100" x2="180" y2="100" stroke="#555" stroke-width="1"/>
  <line x1="20" y1="30" x2="160" y2="30" stroke="#999" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="20" y1="100" x2="160" y2="30" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="42" y="94" font-size="9" fill="#1d4ed8">elevation</text>
  <text x="95" y="26" font-size="9" fill="#dc2626">depression</text>
</svg>
\`\`\`

## Solving problems

1. Draw a right-angled triangle: the horizontal distance, the vertical height, and the line of sight.
2. Mark the angle of elevation or depression.
3. Choose the ratio linking the known and unknown sides — usually **tan θ = height / horizontal distance**.
4. Solve for the unknown.

## Worked relationships

- Height = horizontal distance × tan θ.
- Horizontal distance = height ÷ tan θ.
- Angle = tan⁻¹(height / horizontal distance).

Example: standing 20 m from a pole whose top is seen at height 20√3 m, tan θ = 20√3 / 20 = √3, so θ = 60°.

## Common errors

- **Confusing elevation and depression** — up is elevation, down is depression.
- **Putting the angle at the wrong vertex** — it is always measured from the horizontal.
- **Using sine instead of tangent** — for height and horizontal distance, tangent is usual.`,
      workedExample: `**Question:** From a point on level ground 30 m from the foot of a tower, the angle of elevation of the top of the tower is 30°. Find the height of the tower. (Use tan 30° = 1/√3 ≈ 0.577.)

**Solution**

*Step 1 — draw the right triangle.* Horizontal distance (adjacent) = 30 m; height (opposite) = h; angle of elevation = 30°.

*Step 2 — choose the ratio linking opposite and adjacent.*
tan θ = height / distance

*Step 3 — substitute and solve for h.*
tan 30° = h / 30
h = 30 × tan 30° = 30 × 0.577 = 17.32 m

*(Exact form: h = 30 × 1/√3 = 30/√3 = 10√3 m.)*

**Answer: h = 10√3 ≈ 17.32 m**`,
      quiz: [
        { prompt: "The angle of elevation is measured when you look", options: ["up from the horizontal", "down from the horizontal", "straight ahead", "at the ground"], correctIndex: 0, explanation: "Up to an object above eye level." },
        { prompt: "The angle of depression is measured when you look", options: ["up", "down from the horizontal", "sideways", "backwards"], correctIndex: 1, explanation: "Down to an object below eye level." },
        { prompt: "Both angles are measured from the", options: ["vertical", "horizontal", "line of sight", "ground only"], correctIndex: 1, explanation: "From the horizontal line." },
        { prompt: "The angle of elevation from A to B equals the angle of depression from B to A because they are", options: ["vertical angles", "alternate angles", "right angles", "equal by chance"], correctIndex: 1, explanation: "Parallel horizontals give equal alternate angles." },
        { prompt: "The usual ratio for height and horizontal distance is", options: ["sin θ", "cos θ", "tan θ", "1/θ"], correctIndex: 2, explanation: "tan θ = height/distance." },
        { prompt: "Height = ", options: ["distance ÷ tan θ", "distance × tan θ", "distance × cos θ", "tan θ ÷ distance"], correctIndex: 1, explanation: "Rearranging tan θ = height/distance." },
        { prompt: "30 m from a pole, angle of elevation 30°, height ≈", options: ["17.32 m", "30 m", "51.96 m", "15 m"], correctIndex: 0, explanation: "30 × tan 30° = 30 × 0.577 = 17.32 m." },
        { prompt: "If tan θ = √3, then θ =", options: ["30°", "45°", "60°", "90°"], correctIndex: 2, explanation: "tan 60° = √3." },
        { prompt: "Standing further from a fixed tower, the angle of elevation of its top", options: ["increases", "decreases", "stays the same", "becomes 90°"], correctIndex: 1, explanation: "The line of sight flattens." },
        { prompt: "The line of sight, the horizontal, and the vertical form a", options: ["circle", "right-angled triangle", "square", "parallelogram"], correctIndex: 1, explanation: "A right triangle." },
        { prompt: "To find the angle from height and distance, use", options: ["tan θ", "tan⁻¹", "sin θ", "cos⁻¹"], correctIndex: 1, explanation: "θ = tan⁻¹(height/distance)." },
        { prompt: "A kite is 40 m high, string angle of elevation 90° would mean the kite is", options: ["on the ground", "directly overhead", "far away", "at 45°"], correctIndex: 1, explanation: "90° elevation is straight up." },
        { prompt: "From a cliff top you look at a boat below: this is an angle of", options: ["elevation", "depression", "reflection", "rotation"], correctIndex: 1, explanation: "Looking down." },
        { prompt: "Horizontal distance = ", options: ["height × tan θ", "height ÷ tan θ", "height × sin θ", "height ÷ sin θ"], correctIndex: 1, explanation: "Rearranging tan θ = height/distance." },
        { prompt: "A tower 50 m high seen at 45° elevation is at horizontal distance", options: ["25 m", "50 m", "100 m", "70.7 m"], correctIndex: 1, explanation: "tan 45° = 1, so distance = 50 m." },
        { prompt: "Angle of elevation 60°, horizontal distance 10 m, height ≈", options: ["5.77 m", "10 m", "17.32 m", "8.66 m"], correctIndex: 2, explanation: "10 × tan 60° = 10 × 1.732 = 17.32 m." },
        { prompt: "The angle of depression of a car from the top of a building is 40°. The angle of elevation of the building top from the car is", options: ["50°", "40°", "90°", "20°"], correctIndex: 1, explanation: "Equal alternate angles: 40°." },
        { prompt: "If the height equals the horizontal distance, the angle of elevation is", options: ["30°", "45°", "60°", "90°"], correctIndex: 1, explanation: "tan θ = 1 → θ = 45°." },
        { prompt: "The first step in an elevation problem is to", options: ["guess the answer", "draw a right-angled triangle", "use a calculator", "measure the ground"], correctIndex: 1, explanation: "Sketch and label the triangle." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "From a point 50 m from the base of a building, the angle of elevation of the top is 40°. Find the height (tan 40° ≈ 0.839).", answerKey: "height = distance × tan θ = 50 × 0.839 = 41.95 m (to 2 dp). Award 2 marks for the ratio, 2 for substitution, 2 for 41.95 m.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "A boy 20 m from a pole sees its top at an angle of elevation whose tangent is √3. Find the angle and the pole's height.", answerKey: "tan θ = √3 → θ = 60°. Height = 20 × tan 60° = 20 × √3 = 20√3 ≈ 34.64 m. Award 3 marks for θ = 60°, 3 for the height.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "The angle of elevation of the top of a 30 m tower from a point is 45°. The point's distance from the base is", options: ["15 m", "30 m", "42.4 m", "60 m"], correctIndex: 1, answerKey: "tan 45° = 1 = 30/distance, so distance = 30 m. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why the angle of elevation from a point to a tower top equals the angle of depression from the tower top to that point.", answerKey: "The horizontal at the point and the horizontal at the tower top are parallel; the line of sight is a transversal, so the angle of elevation and the angle of depression are equal alternate angles. Award 3 marks for identifying parallel horizontals, 3 for the alternate-angle reasoning.", marks: 6 },
        { type: "ESSAY", prompt: "Define the angles of elevation and depression, describe the steps to solve a height problem, and solve: from 45 m away the angle of elevation of a flagpole top is 30° (tan 30° ≈ 0.577); find the height.", answerKey: "The angle of elevation is measured upward from the horizontal to an object above eye level; the angle of depression is measured downward from the horizontal to an object below. Steps: draw and label a right triangle (horizontal distance, vertical height, line of sight), mark the angle, pick tan θ = height/distance, and solve. Height = 45 × tan 30° = 45 × 0.577 = 25.98 m (exact 45/√3 = 15√3 ≈ 25.98 m). Award 3 marks for the definitions, 3 for the steps, 4 for the height.", marks: 10 },
      ],
    },
  ],
};
