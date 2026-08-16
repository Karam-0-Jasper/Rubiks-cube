import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 11,
// Semester One, Period I: Motion in Two Dimensions. Topics follow the syllabus
// CONTENTS item by item: vectors (addition/composition and resolution),
// projectile motion, circular motion, rotational motion, and simple
// harmonic/oscillatory motion. Every topic is sourced from OpenStax
// College Physics 2e (read via WebFetch).
export const physicsG11P1: PeriodContent = {
  grade: 11,
  number: 1,
  title: "Motion in Two Dimensions",
  summary:
    "Period I of the MoE Grade 11 Physics syllabus. Learners add and resolve vectors, analyse projectile motion using independent horizontal and vertical components, describe uniform circular motion and centripetal acceleration, work with rotational motion (angular displacement, angular velocity and the link v = rω), and solve problems on simple harmonic and oscillatory motion.",
  topics: [
    // source: OpenStax — College Physics 2e, 3.3 Vector Addition and Subtraction: Analytical Methods (https://openstax.org/books/college-physics-2e/pages/3-3-vector-addition-and-subtraction-analytical-methods)
    {
      slug: "vectors-addition-and-resolution",
      title: "Vectors: Addition/Composition and Resolution",
      objective:
        "By the end of the topic, learners should be able to resolve a vector into perpendicular components, combine vectors by the component (analytical) method, and find the magnitude and direction of a resultant. (MoE Grade 11 Period I, CONTENTS 1 'Vectors: (a) Addition/Composition (b) Resolution'.)",
      estimatedMinutes: 120,
      notes: `## Scalars and vectors

- **Scalar** — a quantity with magnitude only (mass, time, speed, distance, energy).
- **Vector** — a quantity with magnitude and direction (displacement, velocity, force, acceleration).
- A vector is drawn as an arrow: length = magnitude, arrowhead = direction.

## Resolving a vector into components

- Any vector A at an angle θ to the x-axis can be split into two perpendicular parts.
- **x-component:** Ax = A cos θ
- **y-component:** Ay = A sin θ
- The two components are independent and, added as vectors, reproduce the original vector.

## Reconstructing a vector from its components

- **Magnitude:** A = √(Ax² + Ay²) (Pythagoras).
- **Direction:** θ = tan⁻¹(Ay / Ax), measured from the x-axis.

## Adding vectors by the analytical (component) method

1. Resolve every vector into its x and y components.
2. Add all the x-components: Rx = Ax + Bx + …
3. Add all the y-components: Ry = Ay + By + …
4. Resultant magnitude: R = √(Rx² + Ry²).
5. Resultant direction: θ = tan⁻¹(Ry / Rx).

## Composition of vectors

- **Composition (addition)** — combining two or more vectors into a single **resultant** with the same effect.
- Vectors in the **same direction** add: R = A + B.
- Vectors in **opposite directions** subtract: R = A − B.
- Vectors at an angle combine by components or by the parallelogram/triangle rule.

\`\`\`svg Resolving a vector into perpendicular components
<svg viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A vector A shown with its horizontal component Ax and vertical component Ay">
  <line x1="30" y1="140" x2="230" y2="140" stroke="#334155" stroke-width="1.5"/>
  <line x1="30" y1="140" x2="30" y2="20" stroke="#334155" stroke-width="1.5"/>
  <line x1="30" y1="140" x2="200" y2="50" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="200,50 188,52 194,61" fill="#2563eb"/>
  <line x1="30" y1="140" x2="200" y2="140" stroke="#16a34a" stroke-width="2" stroke-dasharray="4 3"/>
  <line x1="200" y1="140" x2="200" y2="50" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="120" y="80" font-size="12" fill="#2563eb">A</text>
  <text x="105" y="156" font-size="11" fill="#16a34a">Ax = A cos θ</text>
  <text x="205" y="100" font-size="11" fill="#dc2626">Ay = A sin θ</text>
  <text x="45" y="132" font-size="11" fill="#334155">θ</text>
</svg>
\`\`\`

## Common errors

- **Swapping sin and cos** — the component along the axis the angle is measured from uses cos.
- **Dropping direction** — a resultant is not complete without its angle.
- **Adding magnitudes directly** — vectors at an angle must be added by components, not arithmetically.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 3.3).** A person walks 53.0 m at 20.0° north of east (vector A), then 34.0 m at 63.0° north of east (vector B). Find the magnitude and direction of the total displacement.

**Step 1 — Resolve each vector.**
- Ax = 53.0 cos 20.0° = 49.8 m; Ay = 53.0 sin 20.0° = 18.1 m.
- Bx = 34.0 cos 63.0° = 15.4 m; By = 34.0 sin 63.0° = 30.3 m.

**Step 2 — Add components.**
- Rx = 49.8 + 15.4 = 65.2 m.
- Ry = 18.1 + 30.3 = 48.4 m.

**Step 3 — Resultant magnitude.** R = √(65.2² + 48.4²) = √(4251 + 2343) = √6594 = 81.2 m.

**Step 4 — Direction.** θ = tan⁻¹(48.4 / 65.2) = tan⁻¹(0.742) = 36.6°.

**Answer.** The total displacement is 81.2 m at 36.6° north of east.`,
      quiz: [
        { prompt: "Which quantity is a vector?", options: ["mass", "temperature", "displacement", "time"], correctIndex: 2, explanation: "Displacement has magnitude and direction, so it is a vector." },
        { prompt: "The x-component of a vector A at angle θ to the x-axis is:", options: ["A sin θ", "A cos θ", "A tan θ", "A / cos θ"], correctIndex: 1, explanation: "Ax = A cos θ, along the axis the angle is measured from." },
        { prompt: "The y-component of vector A at angle θ is:", options: ["A cos θ", "A sin θ", "A / sin θ", "A²"], correctIndex: 1, explanation: "Ay = A sin θ." },
        { prompt: "The magnitude of a vector from its components is:", options: ["Ax + Ay", "√(Ax² + Ay²)", "Ax × Ay", "Ax − Ay"], correctIndex: 1, explanation: "By Pythagoras, A = √(Ax² + Ay²)." },
        { prompt: "The direction of a vector from its components is:", options: ["tan⁻¹(Ay/Ax)", "sin⁻¹(Ax)", "Ax/Ay", "cos(Ay)"], correctIndex: 0, explanation: "θ = tan⁻¹(Ay/Ax) from the x-axis." },
        { prompt: "A resultant is:", options: ["the largest vector", "a single vector with the same effect as the combined vectors", "always horizontal", "a scalar"], correctIndex: 1, explanation: "The resultant is one vector equivalent to the sum of the others." },
        { prompt: "Two vectors 3 N and 4 N act in the same direction. The resultant is:", options: ["1 N", "5 N", "7 N", "12 N"], correctIndex: 2, explanation: "Same direction: R = 3 + 4 = 7 N." },
        { prompt: "Two vectors 3 N and 4 N act in opposite directions. The resultant is:", options: ["1 N", "5 N", "7 N", "0 N"], correctIndex: 0, explanation: "Opposite: R = 4 − 3 = 1 N." },
        { prompt: "Two perpendicular forces 3 N and 4 N give a resultant of:", options: ["1 N", "5 N", "7 N", "3.5 N"], correctIndex: 1, explanation: "R = √(3² + 4²) = √25 = 5 N." },
        { prompt: "A vector of 10 m at 30° to the x-axis has x-component:", options: ["5.0 m", "8.66 m", "10 m", "0 m"], correctIndex: 1, explanation: "10 cos 30° = 10 × 0.866 = 8.66 m." },
        { prompt: "The same 10 m at 30° vector has y-component:", options: ["5.0 m", "8.66 m", "10 m", "0.5 m"], correctIndex: 0, explanation: "10 sin 30° = 10 × 0.5 = 5.0 m." },
        { prompt: "In the analytical method, you first:", options: ["add magnitudes", "resolve each vector into components", "measure with a ruler", "square the resultant"], correctIndex: 1, explanation: "Resolve each vector into x and y components first." },
        { prompt: "The resultant's x-component is found by:", options: ["adding all x-components", "subtracting y from x", "multiplying components", "taking the largest x"], correctIndex: 0, explanation: "Rx = sum of all x-components." },
        { prompt: "A vector directed along the +y axis has an x-component of:", options: ["its full magnitude", "zero", "half its magnitude", "negative"], correctIndex: 1, explanation: "cos 90° = 0, so Ax = 0." },
        { prompt: "Composition of vectors means:", options: ["splitting a vector", "combining vectors into a resultant", "measuring an angle", "finding a scalar"], correctIndex: 1, explanation: "Composition (addition) combines vectors into a resultant." },
        { prompt: "Resolution of a vector means:", options: ["adding two vectors", "finding the resultant", "splitting a vector into components", "reversing a vector"], correctIndex: 2, explanation: "Resolution splits a vector into perpendicular components." },
        { prompt: "If Rx = 6 and Ry = 8, the resultant magnitude is:", options: ["14", "10", "48", "2"], correctIndex: 1, explanation: "√(6² + 8²) = √100 = 10." },
        { prompt: "For Rx = 6 and Ry = 8, the direction is:", options: ["tan⁻¹(8/6) ≈ 53°", "tan⁻¹(6/8) ≈ 37°", "45°", "90°"], correctIndex: 0, explanation: "θ = tan⁻¹(Ry/Rx) = tan⁻¹(8/6) ≈ 53°." },
        { prompt: "Perpendicular components of a vector are:", options: ["always equal", "independent of each other", "always zero", "scalars"], correctIndex: 1, explanation: "Perpendicular components do not affect one another." },
        { prompt: "A displacement of 0 results when vectors:", options: ["are perpendicular", "point the same way", "are equal and opposite", "are both large"], correctIndex: 2, explanation: "Equal and opposite vectors cancel, giving zero resultant." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Two forces of 6 N and 8 N act at right angles. The resultant is:", options: ["2 N", "10 N", "14 N", "48 N"], correctIndex: 1, answerKey: "R = √(6² + 8²) = √100 = 10 N.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the formulas for the x- and y-components of a vector A directed at angle θ to the x-axis.", answerKey: "Ax = A cos θ; Ay = A sin θ.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "A vector has components Rx = 5.0 m and Ry = 12.0 m. Find its magnitude and direction.", answerKey: "Magnitude R = √(5² + 12²) = √169 = 13.0 m. Direction θ = tan⁻¹(12/5) = 67.4° above the x-axis.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Resolving a vector means:", options: ["adding it to another vector", "splitting it into perpendicular components", "finding its resultant", "converting it to a scalar"], correctIndex: 1, answerKey: "Resolution = splitting a vector into perpendicular components.", marks: 2 },
        { type: "ESSAY", prompt: "Describe the analytical (component) method for adding two vectors that act at an angle to each other, and explain why vectors cannot in general be added by simply adding their magnitudes.", answerKey: "Resolve each vector into x and y components (Ax = A cos θ, Ay = A sin θ); add the x-components to get Rx and the y-components to get Ry; find the resultant magnitude R = √(Rx² + Ry²) and direction θ = tan⁻¹(Ry/Rx). Magnitudes cannot simply be added because vectors have direction — only when they are parallel does R = A + B; at an angle the directions partly cancel, so the component method is needed. Reward correct method and the direction-dependence argument.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 3.4 Projectile Motion (https://openstax.org/books/college-physics-2e/pages/3-4-projectile-motion)
    {
      slug: "projectile-motion",
      title: "Projectile Motion",
      objective:
        "By the end of the topic, learners should be able to describe projectile motion as independent horizontal and vertical motions and calculate time of flight, maximum height, range and velocity. (MoE Grade 11 Period I, CONTENTS 2 'Projectile motion'.)",
      estimatedMinutes: 110,
      notes: `## What is a projectile

- **Projectile** — an object thrown or projected into the air, moving under gravity alone (air resistance neglected).
- Its path (**trajectory**) is a parabola.
- **Key principle:** the horizontal and vertical motions are **independent** and are analysed separately.

## Horizontal motion

- Acceleration ax = 0 (no horizontal force when air resistance is neglected).
- Horizontal velocity is constant: vx = v₀ cos θ₀.
- Horizontal position: x = v₀ cos θ₀ · t.

## Vertical motion

- Acceleration ay = −g = −9.80 m/s² (taking up as positive).
- Initial vertical velocity: v₀y = v₀ sin θ₀.
- vy = v₀y − gt
- y = v₀y t − ½gt²
- vy² = v₀y² − 2gy

## Useful results (launch and land at the same height)

- **Maximum height:** h = v₀y² / (2g), reached when vy = 0.
- **Range (level ground):** R = v₀² sin(2θ₀) / g.
- Maximum range for a given speed is at a launch angle of **45°**.
- At the highest point vy = 0 but the horizontal velocity vx is unchanged.

## Method

1. Split the launch velocity into v₀x = v₀ cos θ₀ and v₀y = v₀ sin θ₀.
2. Treat vertical motion with a = −g to find time or height.
3. Use that time in the horizontal equation x = v₀x t to find range.

## Common errors

- **Applying g horizontally** — gravity acts only vertically.
- **Thinking vx changes** — horizontal velocity is constant throughout.
- **Forgetting vy = 0 at the top** — this is the key to finding maximum height and half the flight time.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 3.4).** A fireworks shell is launched at 70.0 m/s at 75.0° above the horizontal and explodes at the highest point of its path. Find the maximum height, the time to reach it, and the horizontal distance travelled. Use g = 9.80 m/s².

**Step 1 — Components.** v₀y = 70.0 sin 75.0° = 67.6 m/s; v₀x = 70.0 cos 75.0° = 18.1 m/s.

**Step 2 — Maximum height (vy = 0).** From vy² = v₀y² − 2gy: y = v₀y² / (2g) = (67.6)² / (2 × 9.80) = 4570 / 19.6 = 233 m.

**Step 3 — Time to the top.** Using y = ½(v₀y + vy)t with vy = 0: t = 2y / v₀y = 2(233) / 67.6 = 6.90 s.

**Step 4 — Horizontal distance.** x = v₀x t = 18.1 × 6.90 = 125 m.

**Answer.** Maximum height 233 m, reached after 6.90 s, at a horizontal distance of 125 m.`,
      quiz: [
        { prompt: "A projectile moves under the influence of:", options: ["gravity alone (air resistance neglected)", "friction only", "a constant horizontal force", "no forces"], correctIndex: 0, explanation: "Once launched, only gravity acts on an ideal projectile." },
        { prompt: "The horizontal acceleration of a projectile is:", options: ["g", "−g", "zero", "increasing"], correctIndex: 2, explanation: "No horizontal force means ax = 0." },
        { prompt: "The horizontal velocity of a projectile is:", options: ["constant", "increasing", "decreasing", "zero"], correctIndex: 0, explanation: "With ax = 0, vx = v₀cos θ₀ stays constant." },
        { prompt: "The vertical acceleration of a projectile (up positive) is:", options: ["0", "+9.8 m/s²", "−9.8 m/s²", "19.6 m/s²"], correctIndex: 2, explanation: "Gravity gives ay = −g = −9.8 m/s²." },
        { prompt: "The path of a projectile is a:", options: ["straight line", "circle", "parabola", "spiral"], correctIndex: 2, explanation: "Constant horizontal velocity plus constant vertical acceleration produce a parabola." },
        { prompt: "At the highest point, the vertical velocity is:", options: ["maximum", "zero", "equal to v₀", "negative"], correctIndex: 1, explanation: "vy = 0 momentarily at the top." },
        { prompt: "At the highest point, the horizontal velocity is:", options: ["zero", "unchanged (v₀cos θ₀)", "maximum", "reversed"], correctIndex: 1, explanation: "Horizontal velocity is constant, so it is unchanged." },
        { prompt: "The two motions of a projectile are treated as:", options: ["identical", "independent", "opposite", "one motion"], correctIndex: 1, explanation: "Horizontal and vertical motions are independent." },
        { prompt: "Maximum range on level ground occurs at a launch angle of:", options: ["30°", "45°", "60°", "90°"], correctIndex: 1, explanation: "R = v₀²sin(2θ)/g is maximum when 2θ = 90°, i.e. θ = 45°." },
        { prompt: "The maximum height formula is:", options: ["v₀y²/(2g)", "v₀y/g", "2gv₀y", "v₀y²g"], correctIndex: 0, explanation: "h = v₀y²/(2g)." },
        { prompt: "The initial vertical velocity component is:", options: ["v₀cos θ₀", "v₀sin θ₀", "v₀tan θ₀", "v₀"], correctIndex: 1, explanation: "v₀y = v₀ sin θ₀." },
        { prompt: "A ball thrown horizontally at 10 m/s has initial vertical velocity:", options: ["10 m/s", "0", "9.8 m/s", "5 m/s"], correctIndex: 1, explanation: "Horizontal launch means v₀y = 0." },
        { prompt: "Two balls, one dropped and one thrown horizontally from the same height, reach the ground:", options: ["dropped first", "thrown first", "at the same time", "neither lands"], correctIndex: 2, explanation: "Vertical motion is identical and independent of horizontal motion." },
        { prompt: "The range of a projectile on level ground is:", options: ["v₀²sin(2θ₀)/g", "v₀sin θ₀", "v₀²/g", "gt²"], correctIndex: 0, explanation: "R = v₀²sin(2θ₀)/g." },
        { prompt: "A projectile launched at 20 m/s at 30° has v₀x of:", options: ["10 m/s", "17.3 m/s", "20 m/s", "0"], correctIndex: 1, explanation: "20 cos 30° = 20 × 0.866 = 17.3 m/s." },
        { prompt: "That same projectile (20 m/s, 30°) has v₀y of:", options: ["10 m/s", "17.3 m/s", "20 m/s", "0"], correctIndex: 0, explanation: "20 sin 30° = 20 × 0.5 = 10 m/s." },
        { prompt: "Increasing the launch angle from 45° to 60° (same speed) makes the range:", options: ["larger", "smaller", "the same", "zero"], correctIndex: 1, explanation: "45° gives maximum range; larger angles reduce it." },
        { prompt: "During flight, the only acceleration acting is:", options: ["horizontal", "g downward", "toward the launch point", "zero"], correctIndex: 1, explanation: "Only gravity acts, giving g downward." },
        { prompt: "The time to reach maximum height for v₀y = 20 m/s is (g = 9.8):", options: ["about 2.0 s", "4.0 s", "1.0 s", "0.5 s"], correctIndex: 0, explanation: "t = v₀y/g = 20/9.8 ≈ 2.0 s." },
        { prompt: "The vertical and horizontal motions share which quantity?", options: ["velocity", "acceleration", "time", "displacement"], correctIndex: 2, explanation: "Time is common to both motions and links them." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A stone is thrown horizontally at 15 m/s from a cliff. Its horizontal velocity after 2 s is:", options: ["15 m/s", "0", "34.6 m/s", "30 m/s"], correctIndex: 0, answerKey: "Horizontal velocity is constant, so it stays 15 m/s.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the two key facts about the horizontal and vertical motions of a projectile.", answerKey: "Horizontal: constant velocity, zero acceleration. Vertical: constant downward acceleration g. The two motions are independent and share the same time.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A ball is launched at 20 m/s at 30° above the horizontal. Find its maximum height (g = 9.8 m/s²).", answerKey: "v₀y = 20 sin 30° = 10 m/s. h = v₀y²/(2g) = 10²/(2×9.8) = 100/19.6 = 5.1 m.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The maximum range of a projectile for a fixed launch speed occurs at:", options: ["30°", "45°", "60°", "90°"], correctIndex: 1, answerKey: "Range R = v₀²sin(2θ)/g is greatest at θ = 45°.", marks: 2 },
        { type: "ESSAY", prompt: "Explain why a ball dropped from rest and a ball thrown horizontally from the same height strike the ground at the same time, using the idea of independent motions.", answerKey: "Vertical and horizontal motions are independent. The vertical motion of both balls is identical: both start with zero vertical velocity and fall with acceleration g, so they take the same time to fall the same height. The horizontal velocity of the thrown ball does not affect the vertical fall. Therefore they land simultaneously, though the thrown ball lands farther away. Reward the independence argument and correct vertical-motion reasoning.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 6.2 Centripetal Acceleration (https://openstax.org/books/college-physics-2e/pages/6-2-centripetal-acceleration)
    {
      slug: "circular-motion",
      title: "Circular Motion",
      objective:
        "By the end of the topic, learners should be able to describe uniform circular motion, define and calculate centripetal acceleration using ac = v²/r and ac = rω², and state its direction. (MoE Grade 11 Period I, CONTENTS 3 'Circular motion'.)",
      estimatedMinutes: 100,
      notes: `## Uniform circular motion

- **Uniform circular motion** — motion in a circle at constant speed.
- Although the speed is constant, the **velocity changes** because its direction changes continuously.
- A changing velocity means the body is **accelerating**, even at constant speed.

## Centripetal acceleration

- **Centripetal acceleration (ac)** — the acceleration of a body in circular motion, directed **toward the centre** of the circle ("centre-seeking").
- Two equivalent formulas:
- **ac = v² / r** (using linear/tangential speed v and radius r)
- **ac = r ω²** (using angular velocity ω)
- Since v = rω, the two expressions are equal.

## Direction

- The centripetal acceleration always points toward the centre of the circular path.
- It is perpendicular to the velocity, which is tangent to the circle.

## Centripetal force

- A net force is required to produce centripetal acceleration: F = m ac = m v² / r.
- This **centripetal force** also points toward the centre (e.g. tension, friction, gravity).

\`\`\`svg Velocity is tangent; centripetal acceleration points to the centre
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A body on a circular path with velocity tangent and acceleration toward the centre">
  <circle cx="100" cy="100" r="70" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="100" cy="100" r="3" fill="#334155"/>
  <circle cx="170" cy="100" r="4" fill="#2563eb"/>
  <line x1="170" y1="100" x2="170" y2="40" stroke="#16a34a" stroke-width="2.5"/>
  <polygon points="170,40 165,52 175,52" fill="#16a34a"/>
  <text x="176" y="60" font-size="11" fill="#16a34a">v</text>
  <line x1="170" y1="100" x2="110" y2="100" stroke="#dc2626" stroke-width="2.5"/>
  <polygon points="110,100 122,95 122,105" fill="#dc2626"/>
  <text x="128" y="93" font-size="11" fill="#dc2626">ac</text>
</svg>
\`\`\`

## Common errors

- **Thinking there is no acceleration at constant speed** — direction changes, so velocity changes.
- **Pointing ac outward** — centripetal acceleration points toward the centre, not away.
- **Confusing v and ω** — use ac = v²/r with linear speed, ac = rω² with angular velocity.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 6.2).** A car follows a curve of radius 500 m at a constant speed of 25.0 m/s. Find its centripetal acceleration and compare it with g = 9.80 m/s².

**Step 1 — Formula.** ac = v² / r.

**Step 2 — Substitute.** ac = (25.0 m/s)² / (500 m) = 625 / 500.

**Step 3 — Evaluate.** ac = 1.25 m/s², directed toward the centre of the curve.

**Step 4 — Compare with g.** ac / g = 1.25 / 9.80 = 0.128, so ac ≈ 0.128 g.

**Answer.** The centripetal acceleration is 1.25 m/s² (about 12.8% of g), directed toward the centre of the curve.`,
      quiz: [
        { prompt: "Uniform circular motion is motion in a circle at:", options: ["increasing speed", "constant speed", "constant velocity", "constant acceleration outward"], correctIndex: 1, explanation: "Speed is constant, though velocity direction changes." },
        { prompt: "A body in uniform circular motion is accelerating because:", options: ["its speed changes", "its direction changes", "gravity increases", "it slows down"], correctIndex: 1, explanation: "Changing direction means changing velocity, hence acceleration." },
        { prompt: "Centripetal acceleration points:", options: ["along the velocity", "away from the centre", "toward the centre", "vertically down"], correctIndex: 2, explanation: "'Centripetal' means centre-seeking — toward the centre." },
        { prompt: "One formula for centripetal acceleration is:", options: ["ac = v/r", "ac = v²/r", "ac = r/v²", "ac = vr"], correctIndex: 1, explanation: "ac = v²/r using linear speed." },
        { prompt: "In terms of angular velocity, ac equals:", options: ["rω", "r²ω", "rω²", "ω/r"], correctIndex: 2, explanation: "ac = rω²." },
        { prompt: "The velocity of a body in circular motion is directed:", options: ["toward the centre", "away from the centre", "tangent to the circle", "vertically"], correctIndex: 2, explanation: "Velocity is tangent to the circular path." },
        { prompt: "A car takes a 200 m radius curve at 20 m/s. Its ac is:", options: ["2 m/s²", "0.1 m/s²", "4000 m/s²", "10 m/s²"], correctIndex: 0, explanation: "ac = 20²/200 = 400/200 = 2 m/s²." },
        { prompt: "The centripetal force needed for circular motion is:", options: ["mv²/r", "mr", "mg only", "v/r"], correctIndex: 0, explanation: "F = m·ac = mv²/r." },
        { prompt: "If the speed doubles (same radius), the centripetal acceleration:", options: ["doubles", "halves", "quadruples", "is unchanged"], correctIndex: 2, explanation: "ac ∝ v², so doubling v gives ×4." },
        { prompt: "If the radius doubles (same speed), the centripetal acceleration:", options: ["doubles", "halves", "quadruples", "is unchanged"], correctIndex: 1, explanation: "ac ∝ 1/r, so doubling r halves ac." },
        { prompt: "Centripetal acceleration is perpendicular to the:", options: ["radius", "velocity", "centre", "diameter"], correctIndex: 1, explanation: "ac points to the centre, perpendicular to the tangential velocity." },
        { prompt: "The link between linear and angular speed is:", options: ["v = r/ω", "v = rω", "v = ω/r", "v = ω²r"], correctIndex: 1, explanation: "v = rω connects the two." },
        { prompt: "For a ball on a string moving in a circle, the centripetal force is supplied by:", options: ["gravity", "the string tension", "air pressure", "friction"], correctIndex: 1, explanation: "The tension in the string pulls the ball toward the centre." },
        { prompt: "If a car rounds a flat curve, the centripetal force is supplied by:", options: ["engine thrust", "friction between tyres and road", "gravity", "the brakes"], correctIndex: 1, explanation: "Friction provides the inward force on a flat curve." },
        { prompt: "A body moving at 10 m/s in a circle of radius 5 m has ac of:", options: ["2 m/s²", "20 m/s²", "50 m/s²", "0.5 m/s²"], correctIndex: 1, explanation: "ac = 10²/5 = 100/5 = 20 m/s²." },
        { prompt: "The two centripetal-acceleration formulas are equal because:", options: ["v = r + ω", "v = rω", "v = ω²", "r = vω"], correctIndex: 1, explanation: "Substituting v = rω into v²/r gives rω²." },
        { prompt: "At constant speed on a circle, the net force is:", options: ["zero", "toward the centre", "along the velocity", "outward"], correctIndex: 1, explanation: "The net (centripetal) force points to the centre." },
        { prompt: "The unit of centripetal acceleration is:", options: ["m/s", "m/s²", "N", "rad/s"], correctIndex: 1, explanation: "It is an acceleration, so m/s²." },
        { prompt: "As angular velocity ω increases (fixed radius), ac:", options: ["decreases", "increases as ω²", "stays constant", "increases as ω"], correctIndex: 1, explanation: "ac = rω², so it grows with the square of ω." },
        { prompt: "A satellite in circular orbit has centripetal force supplied by:", options: ["friction", "gravity", "tension", "air resistance"], correctIndex: 1, explanation: "Earth's gravity provides the centripetal force." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A stone whirls in a circle of radius 2 m at 4 m/s. Its centripetal acceleration is:", options: ["2 m/s²", "8 m/s²", "16 m/s²", "0.5 m/s²"], correctIndex: 1, answerKey: "ac = v²/r = 4²/2 = 16/2 = 8 m/s².", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define centripetal acceleration and state its direction and two formulas.", answerKey: "Centripetal acceleration is the acceleration of a body in circular motion, directed toward the centre of the circle. Formulas: ac = v²/r and ac = rω².", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why a body moving at constant speed around a circle is nevertheless accelerating.", answerKey: "Velocity is a vector; its direction changes continuously around the circle even though the speed (magnitude) is constant. A change in velocity means the body is accelerating (centripetal acceleration toward the centre).", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "If the speed of a body in a fixed circular path is tripled, its centripetal acceleration becomes:", options: ["3 times", "6 times", "9 times", "unchanged"], correctIndex: 2, answerKey: "ac ∝ v²; tripling v multiplies ac by 9.", marks: 2 },
        { type: "ESSAY", prompt: "Using the idea of centripetal force, explain how a car is able to go around a curve and why it may skid if it goes too fast. Refer to the formula F = mv²/r.", answerKey: "To move in a circle a car needs a net inward (centripetal) force F = mv²/r, supplied by friction between the tyres and the road. As speed v increases, the required force grows with v². Friction can only supply up to a maximum value; if the needed force mv²/r exceeds the maximum friction, the tyres cannot provide enough centripetal force and the car skids outward (continues in a straighter line). Reward correct use of F = mv²/r and the friction-limit argument.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 6.1 Rotation Angle and Angular Velocity (https://openstax.org/books/college-physics-2e/pages/6-1-rotation-angle-and-angular-velocity)
    {
      slug: "rotational-motion",
      title: "Rotary/Rotational Motion",
      objective:
        "By the end of the topic, learners should be able to define rotation angle in radians, calculate angular velocity ω = Δθ/Δt, and relate linear and angular quantities using v = rω. (MoE Grade 11 Period I, CONTENTS 4 'Rotary/Rotational motion'.)",
      estimatedMinutes: 100,
      notes: `## Rotation angle

- **Rotation angle (Δθ)** — the ratio of arc length to radius: Δθ = Δs / r, where Δs is the arc length and r the radius.
- Measured in **radians (rad)**.
- One full revolution corresponds to an arc equal to the circumference (2πr), so **2π rad = 1 revolution = 360°**.
- **1 rad = 360° / 2π ≈ 57.3°.**

## Radians

- 90° = π/2 rad; 180° = π rad; 360° = 2π rad.
- Radians are dimensionless (a length divided by a length).

## Angular velocity

- **Angular velocity (ω)** — the rate of change of the rotation angle: ω = Δθ / Δt.
- SI unit: radian per second (rad/s).
- It is the rotational analogue of linear velocity.

## Linking linear and angular quantities

- **v = r ω** — linear (tangential) speed equals radius times angular velocity.
- Equivalently ω = v / r.
- Points farther from the axis (larger r) move faster for the same ω.

## Comparison with linear motion

| Linear quantity | Rotational analogue |
| --- | --- |
| displacement x | rotation angle θ |
| velocity v | angular velocity ω |
| v = Δx/Δt | ω = Δθ/Δt |

## Common errors

- **Mixing degrees and radians** — angular formulas use radians.
- **Forgetting r in v = rω** — angular velocity alone is not a linear speed.
- **Treating ω as revolutions** — convert revolutions to radians (× 2π) first.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 6.1).** A car moves at 15.0 m/s and its tyres have a radius of 0.300 m. Find the angular velocity of a tyre about its axle.

**Step 1 — Relationship.** The tyre rolls without slipping, so the rim speed equals the car's speed: v = rω, hence ω = v / r.

**Step 2 — Substitute.** ω = 15.0 m/s / 0.300 m.

**Step 3 — Evaluate.** ω = 50.0 rad/s.

**Answer.** Each tyre turns at 50.0 rad/s. (This is about 50.0 / 2π ≈ 7.96 revolutions per second.)`,
      quiz: [
        { prompt: "The rotation angle is defined as:", options: ["Δs × r", "Δs / r", "r / Δs", "Δs + r"], correctIndex: 1, explanation: "Δθ = arc length / radius = Δs/r." },
        { prompt: "One complete revolution equals:", options: ["π rad", "2π rad", "π/2 rad", "360 rad"], correctIndex: 1, explanation: "2π rad = 1 revolution = 360°." },
        { prompt: "1 radian is approximately:", options: ["57.3°", "90°", "180°", "360°"], correctIndex: 0, explanation: "1 rad = 360°/2π ≈ 57.3°." },
        { prompt: "Angular velocity is defined as:", options: ["Δθ/Δt", "Δt/Δθ", "rΔθ", "Δθ × r"], correctIndex: 0, explanation: "ω = Δθ/Δt." },
        { prompt: "The SI unit of angular velocity is:", options: ["m/s", "rad/s", "rad", "s"], correctIndex: 1, explanation: "Angular velocity is measured in rad/s." },
        { prompt: "Linear and angular speed are related by:", options: ["v = r/ω", "v = rω", "v = ω/r", "v = r + ω"], correctIndex: 1, explanation: "v = rω." },
        { prompt: "For a fixed ω, a point farther from the axis moves:", options: ["slower", "faster", "at the same speed", "not at all"], correctIndex: 1, explanation: "v = rω, so larger r gives larger v." },
        { prompt: "180° in radians is:", options: ["π/2", "π", "2π", "π/4"], correctIndex: 1, explanation: "180° = π rad." },
        { prompt: "A wheel turns 4π rad. That is:", options: ["1 revolution", "2 revolutions", "4 revolutions", "half a revolution"], correctIndex: 1, explanation: "2π rad = 1 rev, so 4π rad = 2 revolutions." },
        { prompt: "A disc turns through 10 rad in 2 s. Its angular velocity is:", options: ["5 rad/s", "20 rad/s", "0.2 rad/s", "12 rad/s"], correctIndex: 0, explanation: "ω = 10/2 = 5 rad/s." },
        { prompt: "The rotational analogue of linear velocity is:", options: ["arc length", "angular velocity", "radius", "torque"], correctIndex: 1, explanation: "ω is the rotational analogue of v." },
        { prompt: "A wheel of radius 0.5 m turns at 4 rad/s. The rim speed is:", options: ["2 m/s", "8 m/s", "0.125 m/s", "4.5 m/s"], correctIndex: 0, explanation: "v = rω = 0.5 × 4 = 2 m/s." },
        { prompt: "The radian is:", options: ["a unit of length", "dimensionless", "a unit of time", "a unit of force"], correctIndex: 1, explanation: "It is a ratio of two lengths, so dimensionless." },
        { prompt: "90° equals how many radians?", options: ["π", "π/2", "π/4", "2π"], correctIndex: 1, explanation: "90° = π/2 rad." },
        { prompt: "An axle turning at ω = 2 rad/s completes one revolution in about:", options: ["π s", "2π s", "1 s", "4π s"], correctIndex: 0, explanation: "t = 2π/ω = 2π/2 = π ≈ 3.14 s." },
        { prompt: "The arc length for angle θ (in rad) and radius r is:", options: ["s = θ/r", "s = rθ", "s = r/θ", "s = θ + r"], correctIndex: 1, explanation: "From θ = s/r, s = rθ." },
        { prompt: "Two points on a rotating disc share the same:", options: ["linear speed", "angular velocity", "arc length", "radius"], correctIndex: 1, explanation: "All points on a rigid rotating disc have the same ω." },
        { prompt: "A tyre of radius 0.3 m on a car at 30 m/s turns at:", options: ["10 rad/s", "100 rad/s", "9 rad/s", "0.01 rad/s"], correctIndex: 1, explanation: "ω = v/r = 30/0.3 = 100 rad/s." },
        { prompt: "To convert 3 revolutions to radians, multiply by:", options: ["π", "2π", "360", "57.3"], correctIndex: 1, explanation: "1 rev = 2π rad, so 3 rev = 6π rad." },
        { prompt: "If ω is constant and r increases, the linear speed v:", options: ["decreases", "increases", "stays the same", "becomes zero"], correctIndex: 1, explanation: "v = rω increases with r." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A wheel turns through 6π radians. The number of revolutions is:", options: ["1", "2", "3", "6"], correctIndex: 2, answerKey: "2π rad = 1 rev, so 6π rad = 3 revolutions.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define angular velocity and state its SI unit and the relation between linear and angular speed.", answerKey: "Angular velocity ω = Δθ/Δt, the rate of change of rotation angle; SI unit rad/s. Linear speed v = rω.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A grinding wheel of radius 0.10 m rotates at 40 rad/s. Find the linear speed of a point on its rim.", answerKey: "v = rω = 0.10 × 40 = 4.0 m/s.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "A disc turns 20 rad in 4 s. Its angular velocity is:", options: ["5 rad/s", "80 rad/s", "0.2 rad/s", "24 rad/s"], correctIndex: 0, answerKey: "ω = Δθ/Δt = 20/4 = 5 rad/s.", marks: 2 },
        { type: "ESSAY", prompt: "Explain the relationship v = rω and use it to describe why the outer horses on a merry-go-round move faster than the inner ones, even though the whole ride turns together.", answerKey: "All points on a rigid rotating body share the same angular velocity ω. The linear (tangential) speed is v = rω, which increases with distance r from the axis. Outer horses have a larger r, so their linear speed is greater, while inner horses (small r) move more slowly; both complete a revolution in the same time. Reward correct use of v = rω and the shared-ω idea.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 16.3 Simple Harmonic Motion: A Special Periodic Motion (https://openstax.org/books/college-physics-2e/pages/16-3-simple-harmonic-motion-a-special-periodic-motion)
    {
      slug: "simple-harmonic-motion",
      title: "Simple Harmonic/Oscillatory Motion",
      objective:
        "By the end of the topic, learners should be able to define simple harmonic motion, describe amplitude, period and frequency, and use T = 2π√(m/k) for a mass on a spring. (MoE Grade 11 Period I, CONTENTS 5 'Simple harmonic/oscillatory motion'.)",
      estimatedMinutes: 100,
      notes: `## Oscillatory and periodic motion

- **Periodic motion** — motion that repeats itself at regular intervals (a swinging pendulum, a vibrating string).
- **Oscillation** — a back-and-forth motion about an equilibrium position.

## Simple harmonic motion (SHM)

- **Simple harmonic motion** — oscillation in which the restoring force obeys Hooke's law: it is directly proportional to the displacement and directed opposite to it (toward equilibrium).
- Restoring force: F = −kx, where k is the force constant and x the displacement.
- The motion is symmetric about the equilibrium position.

## Key quantities

- **Amplitude (X)** — the maximum displacement from equilibrium.
- **Period (T)** — the time for one complete oscillation. SI unit: second (s).
- **Frequency (f)** — the number of oscillations per second. SI unit: hertz (Hz).
- **f = 1 / T** and **T = 1 / f**.

## Mass on a spring

- Period: **T = 2π √(m / k)**, where m is the mass and k the spring (force) constant.
- Frequency: f = (1 / 2π) √(k / m).
- A larger mass gives a longer period; a stiffer spring (larger k) gives a shorter period.
- **Period and frequency do not depend on the amplitude** — a string sounds the same pitch whether plucked hard or gently.

\`\`\`svg Restoring force pulls the mass back toward equilibrium
<svg viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A mass on a spring displaced from equilibrium with a restoring force arrow">
  <line x1="20" y1="20" x2="20" y2="90" stroke="#334155" stroke-width="3"/>
  <path d="M20 55 h20 l8 -8 l12 16 l12 -16 l12 16 l12 -16 l12 16 l10 -8 h20" fill="none" stroke="#64748b" stroke-width="2"/>
  <rect x="150" y="38" width="34" height="34" fill="#93c5fd" stroke="#2563eb"/>
  <line x1="220" y1="55" x2="270" y2="55" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="225" y="50" font-size="10" fill="#94a3b8">equilibrium</text>
  <line x1="150" y1="90" x2="110" y2="90" stroke="#dc2626" stroke-width="2.5"/>
  <polygon points="110,90 122,85 122,95" fill="#dc2626"/>
  <text x="112" y="106" font-size="10" fill="#dc2626">F = −kx (restoring)</text>
</svg>
\`\`\`

## Common errors

- **Thinking period depends on amplitude** — for SHM it does not.
- **Wrong sign on the force** — the restoring force opposes displacement (F = −kx).
- **Confusing frequency and period** — they are reciprocals (f = 1/T).`,
      workedExample: `**Problem (OpenStax College Physics 2e, 16.3).** A car of mass 900 kg rests on a suspension with an effective spring constant k = 6.53 × 10⁴ N/m. Treating it as a mass on a spring, find the frequency and period of its vertical oscillation.

**Step 1 — Frequency.** f = (1 / 2π) √(k / m) = (1 / 2π) √(6.53 × 10⁴ / 900).

**Step 2 — Inside the root.** 6.53 × 10⁴ / 900 = 72.6, and √72.6 = 8.52.

**Step 3 — Evaluate f.** f = (1 / 2π)(8.52) = 0.159 × 8.52 = 1.36 Hz.

**Step 4 — Period.** T = 1 / f = 1 / 1.36 = 0.738 s.

**Answer.** The car oscillates at about 1.36 Hz, with a period of about 0.738 s.`,
      quiz: [
        { prompt: "Periodic motion is motion that:", options: ["never repeats", "repeats at regular intervals", "always speeds up", "is in a straight line"], correctIndex: 1, explanation: "Periodic motion repeats itself at regular time intervals." },
        { prompt: "In SHM the restoring force is proportional to:", options: ["velocity", "displacement", "mass", "time"], correctIndex: 1, explanation: "F = −kx: the force is proportional to displacement." },
        { prompt: "The restoring force in SHM is directed:", options: ["along the displacement", "opposite the displacement (toward equilibrium)", "vertically down", "in a circle"], correctIndex: 1, explanation: "It always points back toward equilibrium." },
        { prompt: "Amplitude is the:", options: ["time per cycle", "maximum displacement from equilibrium", "number of cycles", "spring constant"], correctIndex: 1, explanation: "Amplitude is the largest displacement from equilibrium." },
        { prompt: "The period is the:", options: ["cycles per second", "time for one complete oscillation", "maximum speed", "force constant"], correctIndex: 1, explanation: "Period T is the time for one full oscillation." },
        { prompt: "Frequency and period are related by:", options: ["f = T", "f = 1/T", "f = T²", "f = 2πT"], correctIndex: 1, explanation: "f = 1/T." },
        { prompt: "The SI unit of frequency is the:", options: ["second", "hertz", "newton", "metre"], correctIndex: 1, explanation: "Frequency is measured in hertz (Hz)." },
        { prompt: "The period of a mass on a spring is:", options: ["2π√(k/m)", "2π√(m/k)", "2π(m/k)", "√(mk)"], correctIndex: 1, explanation: "T = 2π√(m/k)." },
        { prompt: "Increasing the mass on a spring makes the period:", options: ["longer", "shorter", "unchanged", "zero"], correctIndex: 0, explanation: "T ∝ √m, so more mass gives a longer period." },
        { prompt: "Using a stiffer spring (larger k) makes the period:", options: ["longer", "shorter", "unchanged", "infinite"], correctIndex: 1, explanation: "T ∝ 1/√k, so larger k gives a shorter period." },
        { prompt: "The period of SHM depends on the amplitude:", options: ["strongly", "not at all", "only for large masses", "only for springs"], correctIndex: 1, explanation: "For SHM period is independent of amplitude." },
        { prompt: "A pendulum completes 20 swings in 40 s. Its period is:", options: ["0.5 s", "2 s", "20 s", "800 s"], correctIndex: 1, explanation: "T = 40/20 = 2 s." },
        { prompt: "For that pendulum, the frequency is:", options: ["0.5 Hz", "2 Hz", "20 Hz", "40 Hz"], correctIndex: 0, explanation: "f = 1/T = 1/2 = 0.5 Hz." },
        { prompt: "In SHM the speed of the oscillator is greatest at:", options: ["the amplitude", "the equilibrium position", "the turning points", "the highest point only"], correctIndex: 1, explanation: "Speed is maximum passing through equilibrium." },
        { prompt: "At the extreme (turning) point of SHM, the speed is:", options: ["maximum", "zero", "constant", "negative"], correctIndex: 1, explanation: "Speed is zero at the maximum displacement." },
        { prompt: "The force constant k appears in the law:", options: ["F = ma", "F = −kx", "F = mg", "F = kx²"], correctIndex: 1, explanation: "Hooke's law restoring force F = −kx." },
        { prompt: "A 0.5 kg mass on a spring of k = 200 N/m has period about:", options: ["0.31 s", "3.1 s", "0.10 s", "1.0 s"], correctIndex: 0, explanation: "T = 2π√(0.5/200) = 2π√0.0025 = 2π(0.05) = 0.314 s." },
        { prompt: "SHM is a special case of:", options: ["circular motion", "periodic/oscillatory motion", "projectile motion", "uniform motion"], correctIndex: 1, explanation: "SHM is a particular kind of oscillatory (periodic) motion." },
        { prompt: "Doubling the frequency of an oscillator halves its:", options: ["amplitude", "period", "mass", "spring constant"], correctIndex: 1, explanation: "T = 1/f, so doubling f halves T." },
        { prompt: "A guitar string plucked harder (larger amplitude) sounds at:", options: ["a higher pitch", "a lower pitch", "the same pitch", "no pitch"], correctIndex: 2, explanation: "Frequency is independent of amplitude, so the pitch is unchanged." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A vibrating object completes 50 cycles in 10 s. Its frequency is:", options: ["0.2 Hz", "5 Hz", "50 Hz", "500 Hz"], correctIndex: 1, answerKey: "f = cycles/time = 50/10 = 5 Hz.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define simple harmonic motion and write the formula for the period of a mass on a spring.", answerKey: "SHM is oscillation in which the restoring force is proportional to the displacement and directed toward equilibrium (F = −kx). Period T = 2π√(m/k).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A 2.0 kg mass on a spring with k = 50 N/m oscillates in SHM. Find the period.", answerKey: "T = 2π√(m/k) = 2π√(2.0/50) = 2π√0.04 = 2π(0.2) = 1.26 s.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which of these does NOT affect the period of a mass-spring oscillator?", options: ["the mass", "the spring constant", "the amplitude", "all affect it"], correctIndex: 2, answerKey: "For SHM the period is independent of amplitude.", marks: 2 },
        { type: "ESSAY", prompt: "Describe the motion of a mass oscillating on a spring through one complete cycle, referring to displacement, restoring force and speed at the equilibrium point and at the extremes.", answerKey: "Starting displaced, the restoring force F = −kx pulls the mass toward equilibrium. As it approaches equilibrium the force (and displacement) decrease to zero but the speed reaches a maximum. Inertia carries it through to the other side, where displacement and restoring force grow again, slowing it to zero speed at the opposite extreme (maximum displacement). The force then reverses it and the cycle repeats. Speed is maximum at equilibrium and zero at the extremes; force and displacement are maximum at the extremes and zero at equilibrium. Reward correct description of the force-displacement-speed relationships.", marks: 8 },
      ],
    },
  ],
};
