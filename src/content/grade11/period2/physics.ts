import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 11,
// Semester One, Period II: Composition and Resolution of Forces. Topics follow
// the syllabus CONTENTS item by item: composition and equilibrium of forces,
// composition and resolution of forces, parallel forces and moments (torque)
// with centre of gravity, and friction. Every topic is sourced from OpenStax
// College Physics 2e (read via WebFetch).
export const physicsG11P2: PeriodContent = {
  grade: 11,
  number: 2,
  title: "Composition and Resolution of Forces",
  summary:
    "Period II of the MoE Grade 11 Physics syllabus. Learners combine force vectors into a resultant and find the equilibrant, apply the first condition for equilibrium (ΣF = 0), resolve forces into components, analyse parallel forces and moments (torque) with the second condition for equilibrium (Στ = 0) and centre of gravity, and study static and kinetic friction with the coefficient of friction.",
  topics: [
    // source: OpenStax — College Physics 2e, 9.1 The First Condition for Equilibrium (https://openstax.org/books/college-physics-2e/pages/9-1-the-first-condition-for-equilibrium)
    {
      slug: "composition-and-equilibrium-of-forces",
      title: "Composition and Equilibrium of Forces",
      objective:
        "By the end of the topic, learners should be able to combine forces into a resultant, define the equilibrant, and apply the first condition for equilibrium (ΣF = 0) to bodies at rest or moving at constant velocity. (MoE Grade 11 Period II, CONTENTS 1 'Composition and equilibrium of forces'.)",
      estimatedMinutes: 110,
      notes: `## Force and resultant

- **Force** — a push or pull that can change a body's motion or shape. Vector; SI unit newton (N).
- **Composition of forces** — combining two or more forces into a single **resultant** force with the same effect.
- **Resultant force** — the single force equivalent to the vector sum of all forces acting on a body.

## Equilibrant

- **Equilibrant** — the single force that is equal in size but opposite in direction to the resultant.
- Adding the equilibrant to the other forces produces zero net force, holding the body in equilibrium.
- Resultant and equilibrant have the same magnitude but opposite directions.

## The first condition for equilibrium

- A body is in **equilibrium** for translation when the **net external force is zero**: ΣF = 0.
- In components: **ΣFx = 0 and ΣFy = 0**.
- This condition means the body has no linear acceleration.

## Static and dynamic equilibrium

- **Static equilibrium** — the body is at rest and stays at rest (e.g. a book on a table: weight balanced by normal force).
- **Dynamic equilibrium** — the body moves at constant velocity (e.g. a car with driving force balancing friction).
- In both, ΣF = 0.

## Necessary but not sufficient

- Zero net force stops the body from accelerating in a straight line, but the body may still **rotate** if forces act at different points.
- Full equilibrium also needs zero net torque (the second condition, covered later).

## Common errors

- **Confusing resultant and equilibrant** — same size, opposite direction.
- **Adding force magnitudes directly** — forces are vectors; combine by components.
- **Assuming equilibrium means at rest** — constant-velocity motion is also equilibrium.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 9.1).** A crate is pulled along the floor at constant velocity by a horizontal force of 200 N. It moves in a straight line at steady speed. (a) What is the net force on the crate? (b) What is the frictional force on the crate?

**Step 1 — Identify the state.** Constant velocity in a straight line means the crate is in dynamic equilibrium, so the first condition applies: ΣF = 0.

**Step 2 — Net force.** Because ΣF = 0, the net (resultant) force is 0 N.

**Step 3 — Horizontal balance.** ΣFx = 0: applied force + friction = 0, so friction = −200 N.

**Answer.** (a) The net force is zero. (b) Friction is 200 N acting backward (opposite to the 200 N pull) — it is the equilibrant of the applied force in the horizontal direction.`,
      quiz: [
        { prompt: "The resultant of several forces is:", options: ["the largest force", "the single force equivalent to their vector sum", "always zero", "a scalar"], correctIndex: 1, explanation: "The resultant is the vector sum of all the forces." },
        { prompt: "The equilibrant force is:", options: ["equal to the resultant", "equal in size but opposite in direction to the resultant", "always upward", "twice the resultant"], correctIndex: 1, explanation: "The equilibrant balances the resultant: same size, opposite direction." },
        { prompt: "The first condition for equilibrium is:", options: ["Στ = 0", "ΣF = 0", "Σm = 0", "Σv = 0"], correctIndex: 1, explanation: "Net external force must be zero." },
        { prompt: "In component form, equilibrium requires:", options: ["ΣFx = 0 and ΣFy = 0", "only ΣFx = 0", "ΣF = mg", "ΣFx = ΣFy"], correctIndex: 0, explanation: "Both component sums must be zero." },
        { prompt: "A book resting on a table is an example of:", options: ["dynamic equilibrium", "static equilibrium", "no equilibrium", "rotational motion"], correctIndex: 1, explanation: "It is at rest with balanced forces — static equilibrium." },
        { prompt: "A car moving at constant velocity is in:", options: ["static equilibrium", "dynamic equilibrium", "acceleration", "free fall"], correctIndex: 1, explanation: "Constant velocity with balanced forces is dynamic equilibrium." },
        { prompt: "For a body in equilibrium, the acceleration is:", options: ["increasing", "zero", "equal to g", "maximum"], correctIndex: 1, explanation: "ΣF = 0 means zero acceleration." },
        { prompt: "Two forces 5 N and 5 N act in opposite directions on a body. The resultant is:", options: ["10 N", "0 N", "5 N", "25 N"], correctIndex: 1, explanation: "Equal and opposite forces cancel: resultant = 0." },
        { prompt: "Composition of forces means:", options: ["splitting a force", "combining forces into a resultant", "removing a force", "measuring friction"], correctIndex: 1, explanation: "Composition = combining into a resultant." },
        { prompt: "If the resultant of forces on a body is 8 N east, the equilibrant is:", options: ["8 N east", "8 N west", "16 N east", "0 N"], correctIndex: 1, explanation: "Equilibrant is equal and opposite: 8 N west." },
        { prompt: "Zero net force guarantees the body will not:", options: ["rotate", "accelerate in a straight line", "have weight", "have mass"], correctIndex: 1, explanation: "ΣF = 0 prevents linear acceleration, but not necessarily rotation." },
        { prompt: "Why is ΣF = 0 not always enough for full equilibrium?", options: ["forces have no direction", "the body may still rotate (net torque)", "gravity is ignored", "mass changes"], correctIndex: 1, explanation: "Forces at different points can produce rotation even when ΣF = 0." },
        { prompt: "The SI unit of force is the:", options: ["joule", "newton", "pascal", "watt"], correctIndex: 1, explanation: "Force is measured in newtons (N)." },
        { prompt: "A hanging lamp is held by two strings and stays still. This is because:", options: ["ΣF > 0", "ΣF = 0", "there is no weight", "the lamp accelerates"], correctIndex: 1, explanation: "The tensions and weight sum to zero — equilibrium." },
        { prompt: "Three concurrent forces in equilibrium form a closed:", options: ["circle", "triangle when drawn head-to-tail", "square", "line"], correctIndex: 1, explanation: "Balanced concurrent forces form a closed vector triangle." },
        { prompt: "A body pushed with 30 N moves at constant speed. The friction is:", options: ["0 N", "15 N", "30 N opposing motion", "60 N"], correctIndex: 2, explanation: "Constant speed means ΣF = 0, so friction equals the 30 N push, opposing it." },
        { prompt: "Force is a:", options: ["scalar", "vector", "unit of energy", "type of mass"], correctIndex: 1, explanation: "Force has magnitude and direction — a vector." },
        { prompt: "Two perpendicular forces 3 N and 4 N have a resultant of:", options: ["1 N", "5 N", "7 N", "12 N"], correctIndex: 1, explanation: "R = √(3² + 4²) = 5 N." },
        { prompt: "The equilibrant of the 3 N and 4 N perpendicular forces is:", options: ["5 N in the same direction as the resultant", "5 N opposite to the resultant", "7 N", "1 N"], correctIndex: 1, explanation: "Equilibrant is 5 N opposite to the 5 N resultant." },
        { prompt: "A parachutist falling at constant (terminal) velocity is in:", options: ["static equilibrium", "dynamic equilibrium", "free fall", "no equilibrium"], correctIndex: 1, explanation: "Constant velocity means air resistance balances weight — dynamic equilibrium." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between the resultant and the equilibrant of a set of forces.", answerKey: "The resultant is the single force equal to the vector sum of the forces. The equilibrant is equal in magnitude but opposite in direction to the resultant; added to the forces it produces zero net force (equilibrium).", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The first condition for equilibrium is that:", options: ["the net torque is zero", "the net force is zero", "the mass is zero", "the velocity is zero"], correctIndex: 1, answerKey: "First condition: ΣF = 0.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "A sign hangs at rest from two supporting cables. Explain, using the first condition, what must be true of the forces on the sign.", answerKey: "The sign is in static equilibrium, so the net external force is zero: ΣFx = 0 and ΣFy = 0. The vertical components of the two cable tensions together support the weight, and their horizontal components cancel.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "A box is dragged across a floor at constant velocity. The net force on it is:", options: ["equal to its weight", "zero", "equal to the pulling force", "equal to friction plus the pull"], correctIndex: 1, answerKey: "Constant velocity means dynamic equilibrium: net force = 0.", marks: 2 },
        { type: "ESSAY", prompt: "Explain the difference between static and dynamic equilibrium, giving one example of each, and explain why zero net force alone does not guarantee that a body is in complete equilibrium.", answerKey: "Static equilibrium: body at rest with ΣF = 0 (e.g. a book on a table). Dynamic equilibrium: body moving at constant velocity with ΣF = 0 (e.g. a car cruising at steady speed, or a parachutist at terminal velocity). Both have zero net force and zero acceleration. However, ΣF = 0 only prevents linear acceleration; if the forces act at different points they can still produce a net torque and make the body rotate, so full equilibrium also requires zero net torque (Στ = 0). Reward correct examples and the torque argument.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 3.2 Vector Addition and Subtraction: Graphical Methods & 3.3 Analytical Methods (https://openstax.org/books/college-physics-2e/pages/3-2-vector-addition-and-subtraction-graphical-methods)
    {
      slug: "composition-and-resolution-of-forces",
      title: "Composition and Resolution of Forces",
      objective:
        "By the end of the topic, learners should be able to find the resultant of two or more forces graphically (triangle/parallelogram) and by components, and resolve a force into perpendicular components. (MoE Grade 11 Period II, CONTENTS 2 'Composition and Resolution of forces'.)",
      estimatedMinutes: 110,
      notes: `## Composition of forces (finding the resultant)

- **Composition** — combining forces into one resultant.
- **Graphical head-to-tail (triangle) method:** draw the first force to scale, place the tail of the second at the head of the first; the resultant runs from the first tail to the last head.
- **Parallelogram rule:** draw two forces from a common point; the diagonal of the parallelogram is the resultant.
- Vector addition is **commutative**: A + B = B + A.

## Resultant of two forces

- Forces in the **same direction**: R = F₁ + F₂.
- Forces in **opposite directions**: R = F₁ − F₂.
- Two **perpendicular** forces: R = √(F₁² + F₂²), direction θ = tan⁻¹(F₂/F₁).
- Two forces at angle θ between them (parallelogram): R = √(F₁² + F₂² + 2F₁F₂ cos θ).

## Resolution of a force

- **Resolution** — splitting a force into perpendicular components.
- A force F at angle θ to the x-axis has:
- **Fx = F cos θ** (horizontal component)
- **Fy = F sin θ** (vertical component)
- The components are independent and reproduce F when added.

## Analytical method for several forces

1. Resolve each force into x and y components.
2. Add x-components: Rx = ΣFx. Add y-components: Ry = ΣFy.
3. Resultant magnitude: R = √(Rx² + Ry²).
4. Direction: θ = tan⁻¹(Ry/Rx).

\`\`\`svg Parallelogram rule for the resultant of two forces
<svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two forces from a common point with the resultant as the diagonal of a parallelogram">
  <line x1="30" y1="130" x2="180" y2="130" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="180,130 168,125 168,135" fill="#2563eb"/>
  <text x="100" y="145" font-size="11" fill="#2563eb">F₁</text>
  <line x1="30" y1="130" x2="90" y2="40" stroke="#16a34a" stroke-width="2.5"/>
  <polygon points="90,40 84,52 94,50" fill="#16a34a"/>
  <text x="45" y="80" font-size="11" fill="#16a34a">F₂</text>
  <line x1="90" y1="40" x2="240" y2="40" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="180" y1="130" x2="240" y2="40" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="30" y1="130" x2="240" y2="40" stroke="#dc2626" stroke-width="2.5"/>
  <polygon points="240,40 228,45 230,54" fill="#dc2626"/>
  <text x="150" y="80" font-size="11" fill="#dc2626">R (resultant)</text>
</svg>
\`\`\`

## Common errors

- **Adding magnitudes when forces are at an angle** — use the parallelogram/component method.
- **Swapping sin and cos** — the component along the reference axis uses cos.
- **Forgetting the direction** — a resultant needs both magnitude and direction.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 3.2–3.3).** Two forces act at a point: F₁ = 3.0 N acting east and F₂ = 4.0 N acting north. Find the magnitude and direction of the resultant.

**Step 1 — Note they are perpendicular.** East and north are at 90°, so use R = √(F₁² + F₂²).

**Step 2 — Magnitude.** R = √(3.0² + 4.0²) = √(9 + 16) = √25 = 5.0 N.

**Step 3 — Direction.** θ = tan⁻¹(F₂/F₁) = tan⁻¹(4.0/3.0) = tan⁻¹(1.33) = 53°, measured north of east.

**Answer.** The resultant is 5.0 N at 53° north of east.`,
      quiz: [
        { prompt: "Composition of forces means finding the:", options: ["components", "resultant", "equilibrant only", "mass"], correctIndex: 1, explanation: "Composition combines forces into a resultant." },
        { prompt: "In the head-to-tail method, the resultant is drawn from:", options: ["the last head to the first tail", "the first tail to the last head", "head to head", "tail to tail"], correctIndex: 1, explanation: "Resultant runs from the first vector's tail to the last vector's head." },
        { prompt: "The parallelogram rule gives the resultant as the:", options: ["side of the parallelogram", "diagonal of the parallelogram", "perimeter", "area"], correctIndex: 1, explanation: "The diagonal from the common point is the resultant." },
        { prompt: "Resolution of a force means:", options: ["adding forces", "splitting a force into components", "finding the mass", "reversing a force"], correctIndex: 1, explanation: "Resolution splits a force into perpendicular components." },
        { prompt: "The horizontal component of a force F at angle θ is:", options: ["F sin θ", "F cos θ", "F tan θ", "F/θ"], correctIndex: 1, explanation: "Fx = F cos θ." },
        { prompt: "The vertical component of a force F at angle θ is:", options: ["F cos θ", "F sin θ", "F/cos θ", "F²"], correctIndex: 1, explanation: "Fy = F sin θ." },
        { prompt: "Two perpendicular forces 6 N and 8 N have a resultant of:", options: ["2 N", "10 N", "14 N", "48 N"], correctIndex: 1, explanation: "R = √(6² + 8²) = √100 = 10 N." },
        { prompt: "Two forces 10 N east and 4 N west combine to give:", options: ["14 N east", "6 N east", "6 N west", "40 N"], correctIndex: 1, explanation: "Opposite: 10 − 4 = 6 N east." },
        { prompt: "Two forces 10 N and 4 N in the same direction give:", options: ["6 N", "14 N", "40 N", "2.5 N"], correctIndex: 1, explanation: "Same direction: 10 + 4 = 14 N." },
        { prompt: "For two forces at angle θ apart, R = √(F₁² + F₂² + 2F₁F₂cos θ). If θ = 90°, cos θ =", options: ["1", "0", "−1", "0.5"], correctIndex: 1, explanation: "cos 90° = 0, reducing R to √(F₁² + F₂²)." },
        { prompt: "Vector addition is commutative, meaning:", options: ["A + B ≠ B + A", "A + B = B + A", "A − B = B − A", "order changes the result"], correctIndex: 1, explanation: "A + B = B + A — order does not matter." },
        { prompt: "A 20 N force at 60° to the horizontal has a horizontal component of:", options: ["10 N", "17.3 N", "20 N", "0 N"], correctIndex: 0, explanation: "20 cos 60° = 20 × 0.5 = 10 N." },
        { prompt: "The same 20 N force at 60° has a vertical component of:", options: ["10 N", "17.3 N", "20 N", "0 N"], correctIndex: 1, explanation: "20 sin 60° = 20 × 0.866 = 17.3 N." },
        { prompt: "When two equal forces act at 180° to each other, the resultant is:", options: ["double each", "zero", "√2 times each", "half each"], correctIndex: 1, explanation: "Equal and opposite forces cancel to zero." },
        { prompt: "To add several forces analytically you first:", options: ["measure them", "resolve each into components", "square them", "average them"], correctIndex: 1, explanation: "Resolve each force into x and y components first." },
        { prompt: "Rx = 12 N and Ry = 5 N give a resultant of:", options: ["7 N", "13 N", "17 N", "60 N"], correctIndex: 1, explanation: "R = √(12² + 5²) = √169 = 13 N." },
        { prompt: "For Rx = 12 N, Ry = 5 N, the direction is:", options: ["tan⁻¹(5/12) ≈ 23°", "tan⁻¹(12/5) ≈ 67°", "45°", "90°"], correctIndex: 0, explanation: "θ = tan⁻¹(Ry/Rx) = tan⁻¹(5/12) ≈ 23°." },
        { prompt: "The maximum possible resultant of a 6 N and an 8 N force is:", options: ["2 N", "10 N", "14 N", "48 N"], correctIndex: 2, explanation: "Maximum occurs when they are parallel: 6 + 8 = 14 N." },
        { prompt: "The minimum possible resultant of a 6 N and an 8 N force is:", options: ["2 N", "10 N", "14 N", "0 N"], correctIndex: 0, explanation: "Minimum occurs when opposite: 8 − 6 = 2 N." },
        { prompt: "A single force can be resolved into components that are:", options: ["parallel", "perpendicular to each other", "always equal", "scalars"], correctIndex: 1, explanation: "A force is resolved into two perpendicular components." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Two forces of 5 N and 12 N act at right angles. Their resultant is:", options: ["7 N", "13 N", "17 N", "60 N"], correctIndex: 1, answerKey: "R = √(5² + 12²) = √169 = 13 N.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the formulas for the horizontal and vertical components of a force F acting at angle θ to the horizontal.", answerKey: "Fx = F cos θ (horizontal); Fy = F sin θ (vertical).", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "A force of 50 N acts at 30° above the horizontal. Find its horizontal and vertical components.", answerKey: "Fx = 50 cos 30° = 50 × 0.866 = 43.3 N. Fy = 50 sin 30° = 50 × 0.5 = 25.0 N.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The parallelogram rule finds the resultant of two forces as the:", options: ["side of the parallelogram", "diagonal from the common point", "perimeter", "shortest side"], correctIndex: 1, answerKey: "The resultant is the diagonal of the parallelogram drawn from the common starting point.", marks: 2 },
        { type: "ESSAY", prompt: "Describe how to find the resultant of two forces acting at a point (i) graphically and (ii) by resolving into components, and explain why the resultant of a 3 N and a 4 N force can range from 1 N to 7 N depending on the angle between them.", answerKey: "(i) Graphically: use the head-to-tail (triangle) or parallelogram method, drawing to scale with a ruler and protractor; the resultant is the closing side/diagonal, measured for magnitude and direction. (ii) By components: resolve each force into x and y components (F cos θ, F sin θ), add the components (Rx, Ry), then R = √(Rx² + Ry²) with θ = tan⁻¹(Ry/Rx). The resultant of 3 N and 4 N is maximum (7 N) when they are parallel (same direction) and minimum (1 N) when opposite; at 90° it is 5 N. As the angle grows the directions increasingly oppose, reducing the resultant. Reward both methods and the angle-dependence explanation.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 9.2 The Second Condition for Equilibrium & 9.3 Stability (https://openstax.org/books/college-physics-2e/pages/9-2-the-second-condition-for-equilibrium)
    {
      slug: "parallel-forces-moments-centre-of-gravity",
      title: "Parallel Forces, Moments (Torque) and Centre of Gravity",
      objective:
        "By the end of the topic, learners should be able to define moment (torque) as τ = rF sin θ, apply the second condition for equilibrium (Στ = 0) to parallel forces, and locate and use the centre of gravity. (MoE Grade 11 Period II, CONTENTS 3 'Parallel forces and Moments (torque); Centre of gravity'.)",
      estimatedMinutes: 110,
      notes: `## Moment of a force (torque)

- **Moment (torque, τ)** — the turning effect of a force about a pivot.
- **τ = r F sin θ**, where r is the distance from the pivot to the point where F acts and θ is the angle between F and that line.
- Equivalently **τ = F × r⊥**, where r⊥ is the **perpendicular lever arm** — the shortest distance from the pivot to the line of action of F.
- SI unit: **newton-metre (N·m)**.
- Direction convention: **counterclockwise torque positive, clockwise torque negative**.

## Parallel forces and the principle of moments

- Parallel forces act along parallel lines (e.g. weights hanging from a beam).
- **Second condition for equilibrium:** the net torque about any point is zero: **Στ = 0**.
- Equivalently, **total clockwise moment = total anticlockwise moment** about the pivot (the principle of moments / law of the lever).
- A body in complete equilibrium satisfies **both** conditions: ΣF = 0 and Στ = 0.

## Centre of gravity

- **Centre of gravity (cg)** — the single point at which the entire weight of a body can be considered to act.
- The weight of a body produces zero torque about its own centre of gravity.
- For a uniform body the cg is at its geometric centre.

## Stability and types of equilibrium

- **Stable equilibrium** — a small displacement raises the cg and a restoring torque returns the body (marble in a bowl).
- **Unstable equilibrium** — a small displacement lowers the cg and the body topples further (ball balanced on a hilltop).
- **Neutral equilibrium** — displacement leaves the cg height unchanged (ball on a flat surface).
- A body is stable while the vertical line through its cg falls **within its base of support**; widening the base or lowering the cg increases stability.

\`\`\`svg Principle of moments on a balanced beam
<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A beam balanced on a pivot with forces at different distances">
  <polygon points="150,95 140,115 160,115" fill="#334155"/>
  <rect x="40" y="88" width="220" height="8" fill="#94a3b8"/>
  <line x1="90" y1="96" x2="90" y2="126" stroke="#dc2626" stroke-width="2.5"/>
  <polygon points="90,126 85,116 95,116" fill="#dc2626"/>
  <text x="70" y="86" font-size="10" fill="#dc2626">F₁</text>
  <line x1="220" y1="96" x2="220" y2="120" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="220,120 215,110 225,110" fill="#2563eb"/>
  <text x="205" y="86" font-size="10" fill="#2563eb">F₂</text>
  <line x1="90" y1="70" x2="150" y2="70" stroke="#64748b" stroke-width="1"/>
  <text x="105" y="66" font-size="9" fill="#64748b">r₁</text>
  <line x1="150" y1="76" x2="220" y2="76" stroke="#64748b" stroke-width="1"/>
  <text x="175" y="72" font-size="9" fill="#64748b">r₂</text>
</svg>
\`\`\`

## Common errors

- **Using the full distance instead of the perpendicular lever arm** — torque uses the perpendicular distance (r sin θ).
- **Ignoring the sign of a torque** — clockwise and anticlockwise turn opposite ways.
- **Forgetting the second condition** — ΣF = 0 alone does not prevent rotation.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 9.2).** Two children sit on a seesaw pivoted at its centre. Child 1 has mass 26.0 kg and sits 1.60 m from the pivot. Child 2 has mass 32.0 kg. How far from the pivot must Child 2 sit to balance the seesaw?

**Step 1 — Apply the second condition.** For balance, anticlockwise torque = clockwise torque about the pivot: r₁ m₁ g = r₂ m₂ g.

**Step 2 — Cancel g.** r₁ m₁ = r₂ m₂, so r₂ = r₁ (m₁ / m₂).

**Step 3 — Substitute.** r₂ = 1.60 m × (26.0 kg / 32.0 kg) = 1.60 × 0.8125.

**Step 4 — Evaluate.** r₂ = 1.30 m.

**Answer.** Child 2 must sit 1.30 m from the pivot. The heavier child sits closer to the pivot to balance the lighter child.`,
      quiz: [
        { prompt: "The moment (torque) of a force measures its:", options: ["turning effect", "mass", "speed", "temperature"], correctIndex: 0, explanation: "Torque is the turning effect of a force about a pivot." },
        { prompt: "Torque is calculated as:", options: ["F/r", "rF sin θ", "r/F", "F + r"], correctIndex: 1, explanation: "τ = rF sin θ, or force × perpendicular lever arm." },
        { prompt: "The SI unit of torque is the:", options: ["newton", "newton-metre", "joule", "metre"], correctIndex: 1, explanation: "Torque is measured in N·m." },
        { prompt: "The perpendicular lever arm is the:", options: ["length of the force", "shortest distance from pivot to the line of action", "mass of the beam", "angle of the force"], correctIndex: 1, explanation: "It is the shortest (perpendicular) distance from the pivot to the force's line of action." },
        { prompt: "The second condition for equilibrium is:", options: ["ΣF = 0", "Στ = 0", "Σm = 0", "Σv = 0"], correctIndex: 1, explanation: "Net torque must be zero." },
        { prompt: "The principle of moments states clockwise moment equals:", options: ["zero always", "anticlockwise moment", "the weight", "the pivot force"], correctIndex: 1, explanation: "For balance, clockwise moment = anticlockwise moment." },
        { prompt: "The centre of gravity is the point where:", options: ["the mass is zero", "the whole weight of the body acts", "friction is greatest", "the pivot must be"], correctIndex: 1, explanation: "The cg is where the entire weight can be taken to act." },
        { prompt: "A force of 10 N acts 0.5 m from a pivot at 90°. The torque is:", options: ["5 N·m", "20 N·m", "0.05 N·m", "10.5 N·m"], correctIndex: 0, explanation: "τ = rF = 0.5 × 10 = 5 N·m (sin 90° = 1)." },
        { prompt: "A marble resting at the bottom of a bowl is in:", options: ["unstable equilibrium", "stable equilibrium", "neutral equilibrium", "no equilibrium"], correctIndex: 1, explanation: "It returns to the bottom when displaced — stable." },
        { prompt: "A ball balanced on top of a hill is in:", options: ["stable equilibrium", "unstable equilibrium", "neutral equilibrium", "dynamic equilibrium"], correctIndex: 1, explanation: "A small push rolls it away — unstable equilibrium." },
        { prompt: "A ball on a flat table is in:", options: ["stable equilibrium", "unstable equilibrium", "neutral equilibrium", "rotational motion"], correctIndex: 2, explanation: "Its cg stays at the same height when moved — neutral." },
        { prompt: "For complete equilibrium a body needs:", options: ["ΣF = 0 only", "Στ = 0 only", "both ΣF = 0 and Στ = 0", "neither"], correctIndex: 2, explanation: "Both conditions must hold." },
        { prompt: "A body is more stable if its centre of gravity is:", options: ["higher", "lower", "outside the base", "at the top"], correctIndex: 1, explanation: "A low cg increases stability." },
        { prompt: "Widening the base of support makes a body:", options: ["less stable", "more stable", "float", "rotate"], correctIndex: 1, explanation: "A wider base keeps the cg's vertical line inside the base for larger tilts." },
        { prompt: "The torque produced by a body's weight about its own cg is:", options: ["maximum", "zero", "equal to the weight", "negative"], correctIndex: 1, explanation: "Weight acts at the cg, so its lever arm about the cg is zero." },
        { prompt: "A 40 N force acts 2 m from a pivot perpendicular to the arm. Torque:", options: ["20 N·m", "80 N·m", "42 N·m", "0.05 N·m"], correctIndex: 1, explanation: "τ = 40 × 2 = 80 N·m." },
        { prompt: "A body topples when the vertical line through its cg:", options: ["stays inside the base", "falls outside the base of support", "is vertical", "is at the cg"], correctIndex: 1, explanation: "Once the weight line passes outside the base, it topples." },
        { prompt: "Counterclockwise torques are taken as:", options: ["negative", "positive", "zero", "undefined"], correctIndex: 1, explanation: "By convention counterclockwise is positive, clockwise negative." },
        { prompt: "A seesaw balances when the heavier child sits:", options: ["farther from the pivot", "closer to the pivot", "at the pivot", "off the seesaw"], correctIndex: 1, explanation: "Larger weight needs a smaller lever arm for equal torque." },
        { prompt: "Parallel forces act along lines that are:", options: ["perpendicular", "parallel to one another", "curved", "at 45°"], correctIndex: 1, explanation: "Parallel forces have parallel lines of action." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A force of 15 N acts perpendicular to a spanner 0.20 m from the bolt. The torque is:", options: ["3.0 N·m", "75 N·m", "0.013 N·m", "15.2 N·m"], correctIndex: 0, answerKey: "τ = rF = 0.20 × 15 = 3.0 N·m.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the two conditions for the complete equilibrium of a body.", answerKey: "First condition: net force is zero (ΣF = 0). Second condition: net torque is zero (Στ = 0).", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "A uniform metre rule is pivoted at its centre. A 2.0 N weight hangs 40 cm to the left of the pivot. Where must a 4.0 N weight hang on the right to balance it?", answerKey: "Clockwise = anticlockwise moment: 4.0 × d = 2.0 × 0.40. d = 0.80/4.0 = 0.20 m = 20 cm to the right of the pivot.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The centre of gravity of a body is the point where:", options: ["its mass is zero", "its entire weight acts", "friction is largest", "it must be pivoted"], correctIndex: 1, answerKey: "The cg is the point at which the whole weight of the body can be taken to act.", marks: 2 },
        { type: "ESSAY", prompt: "Explain the three types of equilibrium (stable, unstable, neutral) in terms of what happens to the centre of gravity when a body is slightly displaced, and describe two ways to make an object more stable.", answerKey: "Stable: a small displacement raises the cg, and a restoring torque returns the body (marble in a bowl). Unstable: a small displacement lowers the cg, and the body moves further away (ball on a hilltop). Neutral: displacement leaves the cg height unchanged and the body stays put (ball on a flat surface). Stability is increased by lowering the centre of gravity and by widening the base of support, so that the vertical line through the cg stays within the base for larger tilts. Reward correct cg reasoning for all three types and two valid stability methods.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 5.1 Friction (https://openstax.org/books/college-physics-2e/pages/5-1-friction)
    {
      slug: "friction",
      title: "Friction",
      objective:
        "By the end of the topic, learners should be able to distinguish static and kinetic friction, use fs(max) = μs N and fk = μk N, calculate a coefficient of friction, and describe ways to reduce friction. (MoE Grade 11 Period II, CONTENTS 4 'Friction'.)",
      estimatedMinutes: 100,
      notes: `## What is friction

- **Friction** — a force that opposes the relative motion (or attempted motion) between two surfaces in contact.
- It acts **parallel** to the contact surfaces and always **opposes** motion.

## Static and kinetic friction

- **Static friction (fs)** — acts when surfaces are not sliding; it adjusts to match the applied force up to a maximum, keeping the body still.
- Maximum static friction: **fs(max) = μs N**.
- **Kinetic (sliding) friction (fk)** — acts when surfaces slide over each other.
- **fk = μk N**.
- For the same surfaces, **μk < μs** — it takes more force to start sliding than to keep it going.

## Coefficient of friction

- **N** — the normal (perpendicular) force pressing the surfaces together.
- **μ** — the **coefficient of friction**, a dimensionless number (often 0 to about 1) depending on the two materials.
- μs is the static coefficient; μk is the kinetic coefficient.

## Reducing friction

- Lubrication (oil, grease) reduces the coefficient of friction.
- Using rollers, ball bearings or wheels replaces sliding with rolling.
- Smoothing or polishing surfaces; using air cushions.

## Advantages and disadvantages

- **Useful:** walking, gripping, braking, writing, holding objects — all rely on friction.
- **Harmful:** wastes energy as heat, wears machine parts, reduces efficiency.

## Common errors

- **Thinking friction depends on contact area** — it depends on the normal force and the surfaces, not (to first approximation) on area.
- **Using weight instead of normal force** — on a slope N is less than the weight.
- **Confusing μs and μk** — static (starting) is larger than kinetic (sliding).`,
      workedExample: `**Problem (OpenStax College Physics 2e, 5.1).** A 62 kg skier slides down a 25° slope. The kinetic friction force on the skis is measured to be 45.0 N. Find the coefficient of kinetic friction. Use g = 9.80 m/s².

**Step 1 — Normal force on a slope.** Perpendicular to the slope, N balances the perpendicular component of the weight: N = mg cos θ.

**Step 2 — Substitute.** N = (62)(9.80)(cos 25°) = 607.6 × 0.906 = 551 N.

**Step 3 — Coefficient of kinetic friction.** μk = fk / N = 45.0 / 551.

**Step 4 — Evaluate.** μk = 0.082.

**Answer.** The coefficient of kinetic friction between the skis and the snow is about 0.082 (a small value, showing snow is slippery).`,
      quiz: [
        { prompt: "Friction is a force that:", options: ["speeds up motion", "opposes relative motion between surfaces", "acts perpendicular to surfaces", "has no direction"], correctIndex: 1, explanation: "Friction opposes the relative motion of surfaces in contact." },
        { prompt: "Friction acts in a direction that is:", options: ["perpendicular to the surface", "parallel to the surface, opposing motion", "always upward", "toward the centre"], correctIndex: 1, explanation: "It acts parallel to the surface, opposing motion." },
        { prompt: "Static friction acts when surfaces are:", options: ["sliding", "not sliding", "melting", "frictionless"], correctIndex: 1, explanation: "Static friction acts before sliding begins." },
        { prompt: "Kinetic friction acts when surfaces are:", options: ["at rest", "sliding over each other", "separated", "vertical"], correctIndex: 1, explanation: "Kinetic (sliding) friction acts during relative sliding." },
        { prompt: "Maximum static friction is given by:", options: ["μs N", "μs/N", "N/μs", "μs + N"], correctIndex: 0, explanation: "fs(max) = μs N." },
        { prompt: "Kinetic friction is given by:", options: ["μk/N", "μk N", "N − μk", "μk + N"], correctIndex: 1, explanation: "fk = μk N." },
        { prompt: "For the same surfaces, which is larger?", options: ["μk", "μs", "they are equal", "neither exists"], correctIndex: 1, explanation: "μs > μk — starting motion needs more force than maintaining it." },
        { prompt: "The coefficient of friction is:", options: ["measured in newtons", "dimensionless", "measured in metres", "always greater than 1"], correctIndex: 1, explanation: "μ is a dimensionless ratio." },
        { prompt: "N in the friction formula is the:", options: ["weight only", "normal (perpendicular) force", "applied pull", "friction itself"], correctIndex: 1, explanation: "N is the normal force pressing the surfaces together." },
        { prompt: "A block on a level surface has N = 50 N and μk = 0.4. Kinetic friction is:", options: ["12.5 N", "20 N", "50.4 N", "0.008 N"], correctIndex: 1, explanation: "fk = μk N = 0.4 × 50 = 20 N." },
        { prompt: "Which reduces friction?", options: ["adding sand", "lubrication with oil", "increasing weight", "roughening surfaces"], correctIndex: 1, explanation: "Lubrication lowers the coefficient of friction." },
        { prompt: "Replacing sliding with rolling (ball bearings):", options: ["increases friction", "reduces friction", "removes the normal force", "adds mass"], correctIndex: 1, explanation: "Rolling friction is much less than sliding friction." },
        { prompt: "Which relies usefully on friction?", options: ["walking", "wearing of tyres", "overheating of engines", "energy loss"], correctIndex: 0, explanation: "Walking, gripping and braking all depend on friction." },
        { prompt: "A harmful effect of friction is:", options: ["allowing us to grip", "wear of machine parts and heat loss", "letting cars stop", "holding a pen"], correctIndex: 1, explanation: "Friction wastes energy as heat and wears parts." },
        { prompt: "On a horizontal surface, the normal force on a block of weight W is:", options: ["greater than W", "equal to W", "less than W", "zero"], correctIndex: 1, explanation: "On level ground N = W (no other vertical forces)." },
        { prompt: "A 100 N box needs 40 N to just start sliding. μs is:", options: ["0.4", "2.5", "4.0", "0.04"], correctIndex: 0, explanation: "μs = fs(max)/N = 40/100 = 0.4." },
        { prompt: "The kinetic friction on a block does NOT depend (to first approximation) on:", options: ["the normal force", "the coefficient μk", "the contact area", "the surfaces in contact"], correctIndex: 2, explanation: "Friction depends on N and the surfaces, not on contact area." },
        { prompt: "On a slope of angle θ, the normal force is:", options: ["mg", "mg cos θ", "mg sin θ", "mg tan θ"], correctIndex: 1, explanation: "N = mg cos θ, the perpendicular component of the weight." },
        { prompt: "If μk = 0.2 and N = 250 N, kinetic friction is:", options: ["50 N", "5 N", "1250 N", "0.0008 N"], correctIndex: 0, explanation: "fk = 0.2 × 250 = 50 N." },
        { prompt: "It is harder to start an object moving than to keep it moving because:", options: ["μk > μs", "μs > μk", "there is no friction at rest", "weight increases"], correctIndex: 1, explanation: "Maximum static friction exceeds kinetic friction." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A block on a table has a normal force of 80 N. If μk = 0.25, the kinetic friction is:", options: ["20 N", "320 N", "0.003 N", "80.25 N"], correctIndex: 0, answerKey: "fk = μk N = 0.25 × 80 = 20 N.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between static and kinetic friction, and state which coefficient is larger for the same surfaces.", answerKey: "Static friction acts on surfaces that are not sliding and adjusts up to a maximum (μs N). Kinetic friction acts while surfaces slide (μk N). For the same surfaces μs > μk, so it takes more force to start motion than to maintain it.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A 200 N crate on a level floor just begins to move when a horizontal force of 90 N is applied. Find the coefficient of static friction.", answerKey: "On level ground N = weight = 200 N. μs = fs(max)/N = 90/200 = 0.45.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which of these increases friction?", options: ["oiling the surfaces", "using ball bearings", "roughening the surfaces", "polishing the surfaces"], correctIndex: 2, answerKey: "Rougher surfaces have a higher coefficient of friction.", marks: 2 },
        { type: "ESSAY", prompt: "Discuss the advantages and disadvantages of friction, giving two useful and two harmful examples, and describe two methods used to reduce unwanted friction.", answerKey: "Advantages: friction allows walking (grip between shoe and ground), braking a vehicle, holding and writing with objects, and lighting a match. Disadvantages: it wastes energy as heat, wears out moving machine parts, and reduces the efficiency of machines. Methods to reduce friction: lubrication with oil or grease; using rollers, wheels or ball bearings to replace sliding with rolling; streamlining and smoothing/polishing surfaces; using air cushions. Reward two clear advantages, two disadvantages and two valid reduction methods.", marks: 8 },
      ],
    },
  ],
};
