import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 10,
// Semester One, Period II: Velocity and Acceleration. Topics follow the
// syllabus CONTENTS item by item: elements of motion (distance/displacement,
// speed/velocity/acceleration), uniformly accelerated motion and its
// equations, graphical analysis of uniform motion, freely falling bodies,
// Newton's laws of motion, and Newton's law of universal gravitation.
export const physicsG10P2: PeriodContent = {
  grade: 10,
  number: 2,
  title: "Velocity and Acceleration",
  summary:
    "Period II of the MoE Grade 10 Physics syllabus. Learners distinguish distance from displacement and speed from velocity, calculate acceleration, apply the equations of uniformly accelerated motion, read and interpret position-time and velocity-time graphs, analyse freely falling bodies under gravity, and use Newton's laws of motion and Newton's law of universal gravitation.",
  topics: [
    // source: OpenStax — College Physics 2e, 2.3 Time, Velocity, and Speed & 2.4 Acceleration (https://openstax.org/books/college-physics-2e/pages/2-3-time-velocity-and-speed)
    {
      slug: "elements-of-motion",
      title: "Elements of Motion: Distance, Displacement, Speed, Velocity, Acceleration",
      objective:
        "By the end of the topic, learners should be able to distinguish distance from displacement and speed from velocity, and calculate average speed, average velocity and average acceleration with correct units and direction. (MoE Grade 10 Period II, CONTENTS 1a 'Elements of Motion'.)",
      estimatedMinutes: 120,
      notes: `## Motion

- **Motion** — a change in position of a body relative to a reference point with time.
- **Frame of reference** — the fixed point or object against which position is measured.
- Every measurement of position, distance and displacement is made relative to a chosen reference point.

## Distance and displacement

- **Distance** — the total length of path travelled by a body. **Scalar** (magnitude only). SI unit: metre (m).
- **Displacement** — the change in position of a body: straight-line distance from start to finish, in a stated direction. **Vector** (magnitude and direction). SI unit: metre (m).
- Displacement: Δx = x_f − x₀, where x₀ is the initial and x_f the final position.
- Distance travelled can be greater than the magnitude of displacement; it is never less.
- For a round trip back to the start, distance is the whole path but displacement is **zero**.

| Quantity | Type | Meaning |
| --- | --- | --- |
| Distance | scalar | total path length |
| Displacement | vector | change in position, with direction |

## Time

- **Time (t)** — the interval over which change occurs. SI unit: second (s).
- **Elapsed time:** Δt = t_f − t₀. Taking t₀ = 0 gives Δt = t.

## Speed and velocity

- **Average speed** — distance travelled divided by elapsed time. **Scalar**.
- average speed = distance / time
- **Average velocity (v̄)** — displacement divided by time of travel. **Vector**.
- v̄ = Δx / Δt = (x_f − x₀) / (t_f − t₀); SI unit: metre per second (m/s).
- **Instantaneous velocity** — the velocity at a single instant.
- **Instantaneous speed** — the magnitude of instantaneous velocity (no direction).
- Average speed is **not** always equal to the magnitude of average velocity: on a round trip, average velocity is zero but average speed is not.

## Acceleration

- **Acceleration (a)** — the rate at which velocity changes. **Vector**. SI unit: metre per second squared (m/s²).
- ā = Δv / Δt = (v_f − v₀) / (t_f − t₀).
- Acceleration occurs when speed changes, direction changes, or both.
- **Deceleration** — acceleration in the direction opposite to the motion; the body slows down.
- A negative acceleration is not always deceleration — it depends on the direction of the velocity.
- 1 m/s² means the velocity changes by 1 m/s every second.

\`\`\`svg Distance is the whole path; displacement is start-to-finish
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Path from A to B with displacement shown as a straight arrow">
  <circle cx="30" cy="100" r="4" fill="#166534"/>
  <text x="24" y="118" font-size="11" fill="#166534">A (start)</text>
  <circle cx="280" cy="40" r="4" fill="#991b1b"/>
  <text x="252" y="30" font-size="11" fill="#991b1b">B (finish)</text>
  <path d="M30 100 C 90 20, 170 150, 280 40" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="120" y="60" font-size="10" fill="#64748b">distance (path)</text>
  <line x1="30" y1="100" x2="280" y2="40" stroke="#2563eb" stroke-width="2"/>
  <polygon points="280,40 270,40 275,49" fill="#2563eb"/>
  <text x="140" y="95" font-size="10" fill="#2563eb">displacement</text>
</svg>
\`\`\`

## Common errors

- **Using distance where displacement is needed** — velocity uses displacement, speed uses distance.
- **Forgetting direction** — velocity, displacement and acceleration are vectors; a full answer states the direction.
- **Assuming negative acceleration always means slowing down** — sign shows direction relative to the chosen positive axis.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 2.4).** A racehorse coming out of the gate accelerates from rest to a velocity of 15.0 m/s due west in 1.80 s. What is its average acceleration?

**Step 1 — List knowns.** Take east as positive, so west is negative. v₀ = 0, v_f = −15.0 m/s, Δt = 1.80 s.

**Step 2 — Change in velocity.** Δv = v_f − v₀ = −15.0 − 0 = −15.0 m/s.

**Step 3 — Apply the formula.** ā = Δv / Δt = (−15.0 m/s) / (1.80 s) = −8.33 m/s².

**Answer.** The average acceleration is 8.33 m/s² directed west. The negative sign only shows the direction is opposite to the chosen positive (east) direction.`,
      quiz: [
        { prompt: "Which pair is correct?", options: ["Distance is a vector; displacement is a scalar", "Both are vectors", "Distance is a scalar; displacement is a vector", "Both are scalars"], correctIndex: 2, explanation: "Distance (path length) is a scalar; displacement (change in position with direction) is a vector." },
        { prompt: "The SI unit of displacement is the:", options: ["second", "metre", "metre per second", "newton"], correctIndex: 1, explanation: "Displacement is a length, measured in metres." },
        { prompt: "A runner completes one full lap of a 400 m track and stops at the start. The displacement is:", options: ["400 m", "200 m", "0 m", "800 m"], correctIndex: 2, explanation: "Start and finish positions are the same, so displacement is zero even though distance is 400 m." },
        { prompt: "Average velocity is defined as:", options: ["distance / time", "displacement / time", "speed × time", "acceleration × time"], correctIndex: 1, explanation: "Average velocity = displacement ÷ time of travel." },
        { prompt: "Average speed is a:", options: ["vector", "scalar", "force", "unit of time"], correctIndex: 1, explanation: "Speed has magnitude only, so it is a scalar." },
        { prompt: "Acceleration is the rate of change of:", options: ["distance", "displacement", "velocity", "mass"], correctIndex: 2, explanation: "Acceleration = change in velocity ÷ time." },
        { prompt: "The SI unit of acceleration is:", options: ["m/s", "m/s²", "m·s", "s/m"], correctIndex: 1, explanation: "Acceleration is change in velocity (m/s) per second, giving m/s²." },
        { prompt: "A car travels 100 m in 5 s. Its average speed is:", options: ["20 m/s", "500 m/s", "0.05 m/s", "105 m/s"], correctIndex: 0, explanation: "speed = 100 m ÷ 5 s = 20 m/s." },
        { prompt: "Deceleration means acceleration that is:", options: ["always negative", "in the direction of motion", "opposite to the direction of motion", "always zero"], correctIndex: 2, explanation: "Deceleration is acceleration opposite to the motion, so the body slows down." },
        { prompt: "Which quantity requires a direction to be fully specified?", options: ["Distance", "Speed", "Velocity", "Time"], correctIndex: 2, explanation: "Velocity is a vector and needs a direction." },
        { prompt: "A body's velocity changes from 4 m/s to 10 m/s in 3 s. Its acceleration is:", options: ["2 m/s²", "6 m/s²", "14 m/s²", "0.5 m/s²"], correctIndex: 0, explanation: "a = (10 − 4)/3 = 6/3 = 2 m/s²." },
        { prompt: "For any journey, the distance is:", options: ["always less than the displacement", "always equal to displacement", "never less than the magnitude of displacement", "always zero"], correctIndex: 2, explanation: "Distance ≥ magnitude of displacement; they are equal only for straight-line motion without reversal." },
        { prompt: "Instantaneous speed is the:", options: ["magnitude of instantaneous velocity", "total distance", "average of all velocities", "displacement per lap"], correctIndex: 0, explanation: "Instantaneous speed is the magnitude of the instantaneous velocity." },
        { prompt: "A car goes to a shop 3 km away and returns in 0.5 h. Its average velocity is:", options: ["12 km/h", "6 km/h", "0", "3 km/h"], correctIndex: 2, explanation: "It returns to the start, so displacement = 0 and average velocity = 0." },
        { prompt: "In the same trip (3 km each way, 0.5 h total), the average speed is:", options: ["0", "6 km/h", "12 km/h", "3 km/h"], correctIndex: 2, explanation: "Total distance = 6 km, time = 0.5 h, speed = 12 km/h." },
        { prompt: "Change in position is called:", options: ["distance", "displacement", "speed", "acceleration"], correctIndex: 1, explanation: "Displacement is the change in position, Δx = x_f − x₀." },
        { prompt: "A frame of reference is:", options: ["a unit of velocity", "a fixed point used to measure position", "the same as displacement", "a type of acceleration"], correctIndex: 1, explanation: "Positions are measured relative to a chosen reference point or frame." },
        { prompt: "A velocity of −0.8 m/s means the body moves:", options: ["at 0.8 m/s in the positive direction", "at 0.8 m/s in the negative direction", "with zero speed", "at 0.8 m/s²"], correctIndex: 1, explanation: "The negative sign indicates motion in the direction chosen as negative." },
        { prompt: "Which is a vector quantity?", options: ["Distance", "Speed", "Acceleration", "Time"], correctIndex: 2, explanation: "Acceleration has magnitude and direction, so it is a vector." },
        { prompt: "A body moving at constant velocity has an acceleration of:", options: ["increasing value", "zero", "9.8 m/s²", "equal to its speed"], correctIndex: 1, explanation: "Constant velocity means no change in velocity, so acceleration is zero." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between distance and displacement, giving one example of a journey where they differ in magnitude.", answerKey: "Distance = total path length, scalar; displacement = change in position with direction, vector. Example: a runner on a 400 m circular track finishing at the start travels 400 m (distance) but has 0 m displacement. Accept any correct round-trip or curved-path example.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A cyclist's velocity changes from 2 m/s to 8 m/s in 2 s. The average acceleration is:", options: ["3 m/s²", "5 m/s²", "6 m/s²", "10 m/s²"], correctIndex: 0, answerKey: "a = (8 − 2)/2 = 3 m/s².", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define average velocity and state its SI unit.", answerKey: "Average velocity = displacement ÷ time of travel; a vector; SI unit metre per second (m/s).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A car travels 240 m east in 12 s. Calculate its average velocity, stating direction.", answerKey: "v = 240/12 = 20 m/s east.", marks: 3 },
        { type: "ESSAY", prompt: "Explain, with definitions and examples, the difference between speed and velocity, and between velocity and acceleration.", answerKey: "Speed = distance/time, scalar; velocity = displacement/time, vector (direction needed). Acceleration = rate of change of velocity, vector, m/s². Reward correct definitions, units, scalar/vector classification and everyday examples (e.g. car speedometer reads speed; a turning car at constant speed still accelerates because direction changes).", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 2.5 Motion Equations for Constant Acceleration in One Dimension (https://openstax.org/books/college-physics-2e/pages/2-5-motion-equations-for-constant-acceleration-in-one-dimension)
    {
      slug: "uniformly-accelerated-motion",
      title: "Uniformly Accelerated Motion and the Equations of Motion",
      objective:
        "By the end of the topic, learners should be able to define uniform acceleration and use the equations of uniformly accelerated motion to solve problems for displacement, velocity, acceleration and time. (MoE Grade 10 Period II, CONTENTS 1b 'Uniformly accelerated motion'.)",
      estimatedMinutes: 120,
      notes: `## Uniform acceleration

- **Uniform (constant) acceleration** — acceleration whose magnitude and direction do not change with time.
- The velocity changes by equal amounts in equal time intervals.
- Free fall near the Earth's surface is the most common example (a = g).

## The equations of motion

For motion in a straight line with constant acceleration, taking x₀ = 0 and starting time t₀ = 0:

| Equation | Missing variable | Use when you need |
| --- | --- | --- |
| v = v₀ + at | displacement x | final velocity from time |
| x = v₀t + ½at² | final velocity v | displacement from time |
| v² = v₀² + 2ax | time t | final velocity from displacement |
| x = ½(v₀ + v)t | acceleration a | displacement from average velocity |

- **v₀** — initial velocity; **v** — final velocity; **a** — constant acceleration; **t** — time; **x** — displacement.
- The average velocity for constant acceleration is v̄ = (v₀ + v) / 2.
- The displacement equation x = v₀t + ½at² comes from x = v̄t with v̄ = (v₀ + v)/2 and v = v₀ + at.

## Method for solving problems

1. Draw a sketch and choose a positive direction.
2. List the known quantities and the unknown.
3. Choose the equation that contains the unknown and the knowns (and omits the quantity you do not have).
4. Substitute values with units and solve.
5. Check the answer is reasonable and has the correct sign.

## Sign rules

- Quantities in the direction of the chosen positive axis are positive; opposite ones are negative.
- If a body starts from rest, v₀ = 0. If it comes to rest, v = 0.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 2.5).** A dragster starts from rest and accelerates at 26.0 m/s² for 5.56 s. How far does it travel in this time?

**Step 1 — Knowns.** v₀ = 0 (starts from rest), a = 26.0 m/s², t = 5.56 s. Unknown: x.

**Step 2 — Choose the equation.** Displacement from time and acceleration: x = v₀t + ½at².

**Step 3 — Substitute.** x = (0)(5.56) + ½(26.0)(5.56)².

**Step 4 — Evaluate.** (5.56)² = 30.91; ½ × 26.0 × 30.91 = 13.0 × 30.91 = 402 m.

**Answer.** x = 402 m — about one quarter mile, the standard drag-racing distance.`,
      quiz: [
        { prompt: "Uniform acceleration means the acceleration is:", options: ["increasing steadily", "constant in size and direction", "always zero", "equal to the velocity"], correctIndex: 1, explanation: "Uniform acceleration is constant in magnitude and direction." },
        { prompt: "Which equation gives final velocity from time?", options: ["x = v₀t + ½at²", "v = v₀ + at", "v² = v₀² + 2ax", "x = ½(v₀+v)t"], correctIndex: 1, explanation: "v = v₀ + at links velocity, acceleration and time." },
        { prompt: "Which equation does not contain time?", options: ["v = v₀ + at", "x = v₀t + ½at²", "v² = v₀² + 2ax", "x = ½(v₀+v)t"], correctIndex: 2, explanation: "v² = v₀² + 2ax has no t." },
        { prompt: "A body starting from rest has v₀ equal to:", options: ["its final velocity", "0", "g", "9.8"], correctIndex: 1, explanation: "'From rest' means initial velocity is zero." },
        { prompt: "The average velocity under constant acceleration is:", options: ["v₀ × v", "(v₀ + v)/2", "at", "v²/2"], correctIndex: 1, explanation: "For constant acceleration the average velocity is the mean of initial and final velocities." },
        { prompt: "A car accelerates from rest at 3 m/s² for 4 s. Its final velocity is:", options: ["7 m/s", "12 m/s", "0.75 m/s", "24 m/s"], correctIndex: 1, explanation: "v = v₀ + at = 0 + 3×4 = 12 m/s." },
        { prompt: "A car at 20 m/s brakes at −4 m/s². Time to stop:", options: ["5 s", "80 s", "0.2 s", "16 s"], correctIndex: 0, explanation: "0 = 20 + (−4)t → t = 5 s." },
        { prompt: "Displacement of a body from rest at a = 2 m/s² after 5 s:", options: ["10 m", "25 m", "50 m", "5 m"], correctIndex: 1, explanation: "x = ½at² = ½×2×25 = 25 m." },
        { prompt: "Which quantity is missing from x = v₀t + ½at²?", options: ["displacement", "final velocity", "time", "acceleration"], correctIndex: 1, explanation: "It contains x, v₀, a, t but not the final velocity v." },
        { prompt: "A ball at 10 m/s accelerates at 2 m/s² over 20 m. Its final velocity is:", options: ["√180 m/s", "√140 m/s", "√100 m/s", "√220 m/s"], correctIndex: 0, explanation: "v² = 10² + 2×2×20 = 100 + 80 = 180, v = √180 ≈ 13.4 m/s." },
        { prompt: "If v₀ = 0, the equation v² = v₀² + 2ax becomes:", options: ["v² = 2ax", "v² = ax", "v = 2ax", "v² = a/x"], correctIndex: 0, explanation: "With v₀ = 0 the first term vanishes." },
        { prompt: "Equal changes of velocity in equal times indicates:", options: ["zero acceleration", "uniform acceleration", "no motion", "circular motion"], correctIndex: 1, explanation: "That is the definition of uniform acceleration." },
        { prompt: "The first step in solving a motion problem is to:", options: ["guess the answer", "list knowns and choose a positive direction", "square the velocity", "convert to km/h"], correctIndex: 1, explanation: "Identify knowns, the unknown and a sign convention first." },
        { prompt: "A train from rest reaches 30 m/s in 15 s. Its acceleration is:", options: ["2 m/s²", "45 m/s²", "0.5 m/s²", "450 m/s²"], correctIndex: 0, explanation: "a = (30 − 0)/15 = 2 m/s²." },
        { prompt: "A body comes to rest, so its final velocity v is:", options: ["maximum", "0", "equal to v₀", "negative"], correctIndex: 1, explanation: "'Comes to rest' means v = 0." },
        { prompt: "x = ½(v₀ + v)t is used when you know velocities and:", options: ["acceleration", "time", "mass", "force"], correctIndex: 1, explanation: "It uses initial and final velocities and time, not acceleration." },
        { prompt: "A car covers 100 m from rest in 5 s. Its acceleration is:", options: ["8 m/s²", "4 m/s²", "20 m/s²", "40 m/s²"], correctIndex: 0, explanation: "100 = ½a(5²) = 12.5a → a = 8 m/s²." },
        { prompt: "In these equations, the symbol a represents:", options: ["area", "average velocity", "acceleration", "displacement"], correctIndex: 2, explanation: "a is the constant acceleration." },
        { prompt: "A body decelerating uniformly has an acceleration that is:", options: ["zero", "opposite in sign to its velocity", "the same sign as its velocity", "always 9.8"], correctIndex: 1, explanation: "During deceleration acceleration opposes the velocity." },
        { prompt: "The equations of uniformly accelerated motion apply only when:", options: ["speed is very high", "acceleration is constant", "the path is circular", "there is no gravity"], correctIndex: 1, explanation: "They are derived assuming constant acceleration." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A cheetah accelerates from rest at 6 m/s² for 4 s. Its final speed is:", options: ["10 m/s", "24 m/s", "1.5 m/s", "48 m/s"], correctIndex: 1, answerKey: "v = 0 + 6×4 = 24 m/s.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the four equations of uniformly accelerated motion.", answerKey: "v = v₀ + at; x = v₀t + ½at²; v² = v₀² + 2ax; x = ½(v₀ + v)t.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A car travelling at 25 m/s brakes uniformly and stops in 5 s. Find its acceleration and the distance travelled.", answerKey: "a = (0 − 25)/5 = −5 m/s². Distance x = ½(v₀ + v)t = ½(25 + 0)(5) = 62.5 m.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which equation would you use to find final velocity without knowing the time?", options: ["v = v₀ + at", "x = v₀t + ½at²", "v² = v₀² + 2ax", "x = ½(v₀ + v)t"], correctIndex: 2, answerKey: "v² = v₀² + 2ax omits time.", marks: 2 },
        { type: "ESSAY", prompt: "Describe the step-by-step method for solving a uniformly accelerated motion problem, and explain why choosing a positive direction matters.", answerKey: "Steps: sketch and choose positive direction; list knowns and unknown; pick the equation containing the unknown and the knowns; substitute with units; solve and check sign/reasonableness. A positive direction fixes the signs of vectors (velocity, acceleration, displacement) so that answers are consistent — e.g. deceleration and reversed motion come out negative. Reward clear method and correct sign reasoning.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 2.8 Graphical Analysis of One-Dimensional Motion (https://openstax.org/books/college-physics-2e/pages/2-8-graphical-analysis-of-one-dimensional-motion)
    {
      slug: "graphical-analysis-of-motion",
      title: "Graphical Analysis of Uniform Motion",
      objective:
        "By the end of the topic, learners should be able to draw and interpret position-time and velocity-time graphs, obtain velocity from the slope of a position-time graph and acceleration from the slope of a velocity-time graph, and find displacement from the area under a velocity-time graph. (MoE Grade 10 Period II, CONTENTS 1c 'Graphical Analysis of Uniform Motion'.)",
      estimatedMinutes: 100,
      notes: `## Position-time graphs

- Plot position (x, on the vertical axis) against time (t, on the horizontal axis).
- **The slope of a position-time graph is the velocity.** slope = Δx / Δt = v.
- A straight sloping line → constant velocity.
- A horizontal line → the body is at rest (velocity = 0).
- A curved line getting steeper → velocity increasing (acceleration).
- Steeper slope → greater speed; downward slope → motion in the negative direction.

## Velocity-time graphs

- Plot velocity (v) against time (t).
- **The slope of a velocity-time graph is the acceleration.** slope = Δv / Δt = a.
- A horizontal line → constant velocity (zero acceleration).
- A straight sloping line → constant (uniform) acceleration.
- **The area under a velocity-time graph is the displacement.**

## Reading slopes accurately

- Choose two points that are widely separated on the line to reduce reading error.
- slope = (rise) / (run) = (change on vertical axis) / (change on horizontal axis).

\`\`\`svg Velocity-time graph: slope = acceleration, area = displacement
<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Velocity-time graph rising as a straight line from the origin">
  <line x1="40" y1="20" x2="40" y2="150" stroke="#334155" stroke-width="1.5"/>
  <line x1="40" y1="150" x2="270" y2="150" stroke="#334155" stroke-width="1.5"/>
  <text x="8" y="90" font-size="11" fill="#334155">v (m/s)</text>
  <text x="230" y="168" font-size="11" fill="#334155">t (s)</text>
  <line x1="40" y1="150" x2="240" y2="40" stroke="#2563eb" stroke-width="2"/>
  <polygon points="40,150 240,150 240,40" fill="#93c5fd" fill-opacity="0.4"/>
  <text x="150" y="120" font-size="10" fill="#1e40af">area = displacement</text>
  <text x="150" y="70" font-size="10" fill="#1e40af">slope = acceleration</text>
</svg>
\`\`\`

## Summary table

| Graph | Slope gives | Area under gives |
| --- | --- | --- |
| position-time (x-t) | velocity | — |
| velocity-time (v-t) | acceleration | displacement |

## Common errors

- **Confusing the two graphs** — a horizontal line means "at rest" on an x-t graph but "constant velocity" on a v-t graph.
- **Reading close points** — use widely spaced points for an accurate slope.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 2.8).** A jet car's position-time graph passes through the points (0.50 s, 525 m) and (6.40 s, 2000 m) on a straight-line section. Find the average velocity over this interval.

**Step 1 — Recall.** On a position-time graph the slope is the velocity: v = Δx / Δt.

**Step 2 — Read two widely separated points.** (t₁, x₁) = (0.50 s, 525 m) and (t₂, x₂) = (6.40 s, 2000 m).

**Step 3 — Compute the slope.** v = (2000 − 525) / (6.40 − 0.50) = 1475 m / 5.90 s.

**Answer.** v = 250 m/s. Choosing widely separated points keeps the reading error small.`,
      quiz: [
        { prompt: "The slope of a position-time graph gives:", options: ["acceleration", "velocity", "distance", "force"], correctIndex: 1, explanation: "Slope of x-t is Δx/Δt = velocity." },
        { prompt: "The slope of a velocity-time graph gives:", options: ["displacement", "velocity", "acceleration", "speed"], correctIndex: 2, explanation: "Slope of v-t is Δv/Δt = acceleration." },
        { prompt: "The area under a velocity-time graph gives:", options: ["acceleration", "displacement", "force", "mass"], correctIndex: 1, explanation: "Area under v-t equals displacement." },
        { prompt: "A horizontal line on a position-time graph means the body is:", options: ["accelerating", "at rest", "speeding up", "reversing"], correctIndex: 1, explanation: "No change in position means the body is stationary." },
        { prompt: "A horizontal line on a velocity-time graph means:", options: ["the body is at rest", "constant velocity (zero acceleration)", "uniform acceleration", "the body is reversing"], correctIndex: 1, explanation: "Constant velocity gives zero slope, hence zero acceleration." },
        { prompt: "A straight sloping line on a velocity-time graph means:", options: ["zero acceleration", "constant acceleration", "the body is at rest", "changing acceleration"], correctIndex: 1, explanation: "A constant slope is a constant acceleration." },
        { prompt: "A steeper slope on a position-time graph means:", options: ["greater speed", "smaller speed", "zero speed", "greater mass"], correctIndex: 0, explanation: "Steeper x-t slope = greater velocity." },
        { prompt: "On a position-time graph, a straight sloping line represents:", options: ["acceleration", "constant velocity", "rest", "free fall"], correctIndex: 1, explanation: "Constant slope means constant velocity." },
        { prompt: "To read a slope accurately you should choose points that are:", options: ["very close together", "widely separated", "both at the origin", "off the line"], correctIndex: 1, explanation: "Widely separated points reduce reading error." },
        { prompt: "A downward-sloping position-time line indicates motion in the:", options: ["positive direction", "negative direction", "vertical direction", "circular path"], correctIndex: 1, explanation: "Negative slope means the body moves in the negative direction." },
        { prompt: "On a velocity-time graph, a line sloping downward to the v-axis crossing zero shows:", options: ["constant speed", "the body decelerating", "the body at rest throughout", "no motion"], correctIndex: 1, explanation: "A negative slope means acceleration opposes motion — deceleration." },
        { prompt: "Slope is calculated as:", options: ["rise × run", "run / rise", "rise / run", "rise + run"], correctIndex: 2, explanation: "Slope = rise ÷ run." },
        { prompt: "For a v-t graph that is a straight line from the origin rising steadily, the motion is:", options: ["at rest", "uniformly accelerated from rest", "uniform velocity", "decelerating"], correctIndex: 1, explanation: "Rising straight line from origin = uniform acceleration starting from rest." },
        { prompt: "The vertical axis of a position-time graph shows:", options: ["time", "velocity", "position", "acceleration"], correctIndex: 2, explanation: "Position is plotted on the vertical axis versus time." },
        { prompt: "If a v-t graph is a horizontal line at 5 m/s for 4 s, the displacement is:", options: ["20 m", "1.25 m", "9 m", "0 m"], correctIndex: 0, explanation: "Area = 5 × 4 = 20 m." },
        { prompt: "A curved position-time line getting steeper indicates:", options: ["constant velocity", "increasing velocity", "the body at rest", "decreasing distance"], correctIndex: 1, explanation: "An increasing slope means the velocity is increasing." },
        { prompt: "On a v-t graph a triangle of base 4 s and height 6 m/s has area:", options: ["24 m", "12 m", "10 m", "2.4 m"], correctIndex: 1, explanation: "Area of triangle = ½ × 4 × 6 = 12 m." },
        { prompt: "Acceleration can be read from a graph of:", options: ["position vs time", "velocity vs time", "distance vs speed", "force vs mass"], correctIndex: 1, explanation: "Slope of velocity-time is acceleration." },
        { prompt: "Zero slope on a velocity-time graph means:", options: ["the body has stopped", "zero acceleration", "maximum acceleration", "negative velocity"], correctIndex: 1, explanation: "No change in velocity means zero acceleration." },
        { prompt: "The horizontal axis on both graphs discussed is usually:", options: ["velocity", "position", "time", "acceleration"], correctIndex: 2, explanation: "Time is on the horizontal axis in both x-t and v-t graphs." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A velocity-time graph is a horizontal line at 8 m/s lasting 3 s. The displacement is:", options: ["11 m", "24 m", "2.7 m", "0 m"], correctIndex: 1, answerKey: "Area = 8 × 3 = 24 m.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State what the slope of (i) a position-time graph and (ii) a velocity-time graph represents.", answerKey: "(i) slope of x-t = velocity; (ii) slope of v-t = acceleration.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A position-time graph passes through (2 s, 10 m) and (7 s, 60 m) on a straight section. Find the velocity.", answerKey: "v = (60 − 10)/(7 − 2) = 50/5 = 10 m/s.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "A body at rest is shown on a position-time graph by:", options: ["a steep line", "a horizontal line", "a curved line", "a line through the origin"], correctIndex: 1, answerKey: "A horizontal x-t line means position is not changing — the body is at rest.", marks: 2 },
        { type: "ESSAY", prompt: "Explain how position-time and velocity-time graphs are used to describe uniform motion and uniformly accelerated motion, referring to slopes and areas.", answerKey: "Uniform motion: x-t is a straight sloping line (constant velocity = slope); v-t is a horizontal line. Uniformly accelerated motion: x-t is a curve of increasing steepness; v-t is a straight sloping line whose slope is the constant acceleration. Area under v-t gives displacement. Reward correct links between slope/area and the physical quantities plus recognition of the two cases.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 2.7 Falling Objects (https://openstax.org/books/college-physics-2e/pages/2-7-falling-objects)
    {
      slug: "freely-falling-bodies",
      title: "Freely Falling Bodies (Gravity)",
      objective:
        "By the end of the topic, learners should be able to describe free fall, use g = 9.8 m/s², apply the kinematic equations to objects moving under gravity, and use sign conventions correctly. (MoE Grade 10 Period II, CONTENTS 1d 'Freely falling bodies (gravity)'.)",
      estimatedMinutes: 100,
      notes: `## Free fall

- **Free fall** — motion of a body under the influence of gravity alone, with air resistance neglected.
- All objects in free fall at a given place accelerate downward at the **same rate**, regardless of mass.
- The acceleration is the **acceleration due to gravity**, g.
- **g ≈ 9.80 m/s²** (average value on Earth; it ranges about 9.78–9.83 m/s² with latitude and altitude). Directed downward toward the Earth's centre.

## Equations for free fall

Replace a with g (or −g) in the equations of motion. Taking **up as positive** (so a = −g):

- v = v₀ − gt
- y = y₀ + v₀t − ½gt²
- v² = v₀² − 2g(y − y₀)

If instead **down is positive** (a = +g), use + signs. Be consistent within a problem.

## Sign conventions

- Choose one direction as positive and keep it throughout.
- Up positive: g enters as −9.8 m/s²; a rising object slows, stops at the top (v = 0), then falls.
- At the highest point of a throw, the velocity is momentarily zero but the acceleration is still g downward.

## Key facts

- A dropped object has v₀ = 0.
- Time up = time down for a body thrown up and returning to the same level.
- The speed on returning to the launch level equals the launch speed (opposite direction).

## Common errors

- **Thinking heavier objects fall faster** — without air resistance all fall at the same rate.
- **Setting a = 0 at the top of flight** — velocity is zero there, but acceleration is still g downward.
- **Mixing sign conventions** — pick up-positive or down-positive and stay consistent.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 2.7).** A rock is thrown straight up from the edge with an initial velocity of 13.0 m/s. Taking up as positive and y₀ = 0, find its position 1.00 s later. Use g = 9.80 m/s².

**Step 1 — Knowns.** v₀ = +13.0 m/s, t = 1.00 s, a = −g = −9.80 m/s², y₀ = 0.

**Step 2 — Equation.** y = y₀ + v₀t − ½gt².

**Step 3 — Substitute.** y = 0 + (13.0)(1.00) − ½(9.80)(1.00)².

**Step 4 — Evaluate.** y = 13.0 − 4.90 = 8.10 m.

**Answer.** After 1.00 s the rock is 8.10 m above its starting point (and still rising, since v = 13.0 − 9.80 = +3.20 m/s).`,
      quiz: [
        { prompt: "Free fall is motion under the influence of:", options: ["friction only", "gravity alone (air resistance neglected)", "applied force", "magnetism"], correctIndex: 1, explanation: "Free fall assumes gravity is the only force acting." },
        { prompt: "The average value of g on Earth is about:", options: ["1.0 m/s²", "9.8 m/s²", "98 m/s²", "0.98 m/s²"], correctIndex: 1, explanation: "g ≈ 9.80 m/s² downward." },
        { prompt: "In free fall (no air resistance), a heavy and a light object dropped together:", options: ["the heavy one lands first", "the light one lands first", "they land together", "neither falls"], correctIndex: 2, explanation: "All objects fall at the same rate independent of mass." },
        { prompt: "The acceleration due to gravity always points:", options: ["upward", "sideways", "downward toward Earth's centre", "in the direction of motion"], correctIndex: 2, explanation: "g is directed downward toward the centre of the Earth." },
        { prompt: "An object simply dropped from rest has v₀ equal to:", options: ["9.8 m/s", "0", "g", "its final velocity"], correctIndex: 1, explanation: "Dropped means released from rest, v₀ = 0." },
        { prompt: "At the highest point of a vertical throw, the velocity is:", options: ["maximum", "zero", "equal to g", "negative"], correctIndex: 1, explanation: "The body momentarily stops before falling back." },
        { prompt: "At the highest point, the acceleration is:", options: ["zero", "g downward", "g upward", "undefined"], correctIndex: 1, explanation: "Acceleration remains g downward even when velocity is zero." },
        { prompt: "Taking up as positive, the acceleration in free fall is written as:", options: ["+9.8 m/s²", "−9.8 m/s²", "0", "±19.6 m/s²"], correctIndex: 1, explanation: "With up positive, a = −g = −9.8 m/s²." },
        { prompt: "A stone dropped from rest falls for 2 s. Its speed then (g = 9.8) is about:", options: ["4.9 m/s", "9.8 m/s", "19.6 m/s", "2 m/s"], correctIndex: 2, explanation: "v = gt = 9.8 × 2 = 19.6 m/s." },
        { prompt: "A stone dropped from rest for 2 s falls a distance of about:", options: ["9.8 m", "19.6 m", "39.2 m", "4.9 m"], correctIndex: 1, explanation: "y = ½gt² = ½×9.8×4 = 19.6 m." },
        { prompt: "For a ball thrown up and returning to launch height, the time up compared to time down is:", options: ["longer", "shorter", "equal", "zero"], correctIndex: 2, explanation: "Time up equals time down for symmetric flight." },
        { prompt: "A ball thrown up at 20 m/s returns to the same height at a speed of:", options: ["0", "10 m/s", "20 m/s", "40 m/s"], correctIndex: 2, explanation: "Speed at the launch level equals the launch speed (opposite direction)." },
        { prompt: "Air resistance is neglected in free fall so that:", options: ["objects never fall", "acceleration is exactly g for all masses", "gravity disappears", "speed stays zero"], correctIndex: 1, explanation: "Ignoring air resistance makes the acceleration g for every object." },
        { prompt: "A body released from rest reaches 29.4 m/s after (g = 9.8):", options: ["1 s", "2 s", "3 s", "4 s"], correctIndex: 2, explanation: "t = v/g = 29.4/9.8 = 3 s." },
        { prompt: "Which equation gives velocity of a falling body (down positive) from time?", options: ["v = v₀ + gt", "y = v₀t", "v² = 2y", "a = g/t"], correctIndex: 0, explanation: "With down positive, v = v₀ + gt." },
        { prompt: "The value of g is largest:", options: ["at the equator only", "at high altitude", "and varies slightly with latitude and altitude", "on the Moon"], correctIndex: 2, explanation: "g varies about 9.78–9.83 m/s² with location on Earth." },
        { prompt: "A rock thrown up at 13 m/s has velocity after 1 s (g = 9.8) of:", options: ["3.2 m/s up", "22.8 m/s up", "13 m/s down", "9.8 m/s"], correctIndex: 0, explanation: "v = 13 − 9.8×1 = 3.2 m/s, still upward." },
        { prompt: "Free-fall equations are the ordinary motion equations with a replaced by:", options: ["v", "g", "t", "m"], correctIndex: 1, explanation: "Set the constant acceleration equal to g." },
        { prompt: "An object thrown downward starts with v₀ that is:", options: ["zero", "not zero (its throw speed)", "always 9.8", "negative g"], correctIndex: 1, explanation: "Thrown downward means it already has an initial speed." },
        { prompt: "Two balls, 1 kg and 5 kg, are dropped from the same height (no air resistance). They hit the ground:", options: ["5 kg first", "1 kg first", "at the same time", "neither hits"], correctIndex: 2, explanation: "Free-fall acceleration is independent of mass." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A ball is dropped from rest. After 3 s its speed (g = 9.8 m/s²) is:", options: ["3.3 m/s", "29.4 m/s", "9.8 m/s", "44.1 m/s"], correctIndex: 1, answerKey: "v = gt = 9.8 × 3 = 29.4 m/s.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define free fall and state the value and direction of g.", answerKey: "Free fall = motion under gravity alone with air resistance neglected. g ≈ 9.8 m/s² directed downward toward Earth's centre.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A stone is dropped from a cliff and falls for 4 s. Calculate the distance fallen (g = 9.8 m/s²).", answerKey: "y = ½gt² = ½ × 9.8 × 4² = ½ × 9.8 × 16 = 78.4 m.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "At the highest point of a vertical throw:", options: ["velocity = 0, acceleration = 0", "velocity = 0, acceleration = g downward", "velocity = max, acceleration = 0", "velocity = g, acceleration = g"], correctIndex: 1, answerKey: "Velocity is momentarily zero but acceleration remains g downward.", marks: 2 },
        { type: "ESSAY", prompt: "Explain why, in the absence of air resistance, all objects fall with the same acceleration, and describe the motion of a ball thrown vertically upward until it returns to the thrower's hand.", answerKey: "All masses experience acceleration g independent of mass (heavier objects have more gravitational force but also more inertia, cancelling). A ball thrown up decelerates at g, momentarily stops at the top (v = 0, a = g down), then accelerates downward, returning with the same speed it left (opposite direction); time up equals time down. Reward correct physics of mass-independence and symmetric flight.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 4.3 Newton's Second Law of Motion & 4.4 Newton's Third Law (https://openstax.org/books/college-physics-2e/pages/4-3-newtons-second-law-of-motion-concept-of-a-system)
    {
      slug: "newtons-laws-of-motion",
      title: "Newton's Laws of Motion",
      objective:
        "By the end of the topic, learners should be able to state and apply Newton's three laws of motion, use F = ma, and relate mass, weight and inertia. (MoE Grade 10 Period II, CONTENTS 2 'Newton's Laws of motion'.)",
      estimatedMinutes: 110,
      notes: `## Newton's first law (law of inertia)

- **First law** — a body remains at rest, or continues in uniform motion in a straight line, unless acted on by a net external force.
- **Inertia** — the tendency of a body to resist a change in its state of motion. Mass measures inertia; more mass means more inertia.
- A change in motion is caused by a **net external force**, not by an internal one.

## Newton's second law

- **Second law** — the acceleration of a body is directly proportional to the net external force and in the same direction, and inversely proportional to its mass.
- **F_net = ma**, where F is in newtons (N), m in kilograms (kg), a in m/s².
- **1 newton** — the force that gives a 1 kg mass an acceleration of 1 m/s² (1 N = 1 kg·m/s²).
- **Net force** — the vector sum of all external forces on the body.

## Weight and mass

- **Mass (m)** — the quantity of matter in a body; a scalar in kilograms; the same everywhere.
- **Weight (w)** — the gravitational force on a body: **w = mg**; a vector in newtons; changes with location.

## Newton's third law

- **Third law** — whenever one body exerts a force on a second, the second exerts an equal and opposite force on the first.
- Forces always occur in **pairs** (action and reaction) acting on **different** bodies.
- Because the pair acts on different bodies, the two forces do not cancel on a single body.

## Applications

- Walking: foot pushes back on ground, ground pushes forward on foot.
- Rocket: gases pushed backward, rocket pushed forward.
- Seat belts and head-rests: protect against inertia in a sudden stop.

## Common errors

- **Confusing mass and weight** — mass (kg) is constant; weight (N) depends on g.
- **Thinking action and reaction cancel** — they act on different bodies, so they do not.
- **Forgetting force is a vector** — use the net (resultant) external force in F = ma.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 4.3).** A net external force of 51 N acts on a 24 kg lawn mower, parallel to the ground. What is the acceleration of the mower?

**Step 1 — Knowns.** F_net = 51 N, m = 24 kg. Unknown: a.

**Step 2 — Apply Newton's second law.** F_net = ma, so a = F_net / m.

**Step 3 — Substitute.** a = 51 N / 24 kg.

**Step 4 — Evaluate.** a = 2.1 m/s².

**Answer.** The mower accelerates at 2.1 m/s² in the direction of the applied net force.`,
      quiz: [
        { prompt: "Newton's first law is also called the law of:", options: ["gravity", "inertia", "momentum", "action"], correctIndex: 1, explanation: "The first law describes inertia — resistance to change in motion." },
        { prompt: "Inertia depends on a body's:", options: ["colour", "mass", "speed", "temperature"], correctIndex: 1, explanation: "Mass measures inertia; more mass, more inertia." },
        { prompt: "Newton's second law is written:", options: ["F = mv", "F = ma", "F = m/a", "F = a/m"], correctIndex: 1, explanation: "Force = mass × acceleration." },
        { prompt: "The SI unit of force is the:", options: ["joule", "newton", "watt", "pascal"], correctIndex: 1, explanation: "Force is measured in newtons (N)." },
        { prompt: "One newton equals:", options: ["1 kg·m/s²", "1 kg·m/s", "1 kg/m²", "1 m/s²"], correctIndex: 0, explanation: "1 N = 1 kg·m/s²." },
        { prompt: "A 10 kg mass has a net force of 40 N on it. Its acceleration is:", options: ["4 m/s²", "400 m/s²", "0.25 m/s²", "50 m/s²"], correctIndex: 0, explanation: "a = F/m = 40/10 = 4 m/s²." },
        { prompt: "Weight is calculated by:", options: ["w = m/g", "w = mg", "w = ma", "w = g/m"], correctIndex: 1, explanation: "Weight = mass × gravitational field strength g." },
        { prompt: "Which quantity is the same everywhere in the universe for a given body?", options: ["weight", "mass", "acceleration", "force"], correctIndex: 1, explanation: "Mass is constant; weight varies with g." },
        { prompt: "Newton's third law says forces occur in:", options: ["single actions", "equal and opposite pairs", "triples", "circles"], correctIndex: 1, explanation: "Every action has an equal and opposite reaction." },
        { prompt: "Action and reaction forces act on:", options: ["the same body", "different bodies", "no body", "only large bodies"], correctIndex: 1, explanation: "They act on the two different interacting bodies." },
        { prompt: "A rocket moves forward because it pushes gas:", options: ["forward", "backward", "sideways", "up only"], correctIndex: 1, explanation: "The rocket pushes gas backward; the gas pushes the rocket forward (third law)." },
        { prompt: "A body moving at constant velocity has a net force of:", options: ["mg", "zero", "ma", "F"], correctIndex: 1, explanation: "Constant velocity means zero acceleration, so net force is zero (first law)." },
        { prompt: "Doubling the net force on a fixed mass will:", options: ["halve the acceleration", "double the acceleration", "not change acceleration", "double the mass"], correctIndex: 1, explanation: "a ∝ F, so doubling F doubles a." },
        { prompt: "Doubling the mass for a fixed net force will:", options: ["double the acceleration", "halve the acceleration", "leave acceleration unchanged", "double the force"], correctIndex: 1, explanation: "a ∝ 1/m, so doubling m halves a." },
        { prompt: "A 2 kg object has weight (g = 9.8) of about:", options: ["2 N", "9.8 N", "19.6 N", "4.9 N"], correctIndex: 2, explanation: "w = mg = 2 × 9.8 = 19.6 N." },
        { prompt: "Net force is the:", options: ["largest single force", "vector sum of all external forces", "sum of internal forces", "mass times weight"], correctIndex: 1, explanation: "Net (resultant) force is the vector sum of external forces." },
        { prompt: "A passenger lurches forward when a bus stops suddenly because of:", options: ["gravity", "inertia", "friction only", "reaction force"], correctIndex: 1, explanation: "The passenger's inertia keeps them moving forward as the bus stops." },
        { prompt: "If the net force on a body is zero, the body:", options: ["must be at rest", "must be accelerating", "has zero acceleration", "must reverse"], correctIndex: 2, explanation: "Zero net force means zero acceleration; the body is at rest or moving at constant velocity." },
        { prompt: "A force of 100 N gives a body an acceleration of 5 m/s². The mass is:", options: ["20 kg", "500 kg", "0.05 kg", "95 kg"], correctIndex: 0, explanation: "m = F/a = 100/5 = 20 kg." },
        { prompt: "When you walk, the ground pushes you forward. This is an example of Newton's:", options: ["first law", "second law", "third law", "law of gravitation"], correctIndex: 2, explanation: "Foot pushes ground back, ground pushes foot forward — action and reaction." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State Newton's three laws of motion.", answerKey: "1st: a body stays at rest or in uniform straight-line motion unless acted on by a net external force. 2nd: acceleration is proportional to net force and inversely proportional to mass (F = ma). 3rd: to every action there is an equal and opposite reaction.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "A 6 kg body experiences a net force of 30 N. Its acceleration is:", options: ["5 m/s²", "0.2 m/s²", "180 m/s²", "24 m/s²"], correctIndex: 0, answerKey: "a = F/m = 30/6 = 5 m/s².", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between mass and weight, giving units for each.", answerKey: "Mass = amount of matter, scalar, kilograms (kg), constant everywhere. Weight = gravitational force on the body, vector, newtons (N), w = mg, varies with g/location.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Action and reaction forces are equal in size, opposite in direction, and act on:", options: ["the same body", "two different bodies", "no body", "only moving bodies"], correctIndex: 1, answerKey: "They act on the two different interacting bodies, so they do not cancel on one body.", marks: 2 },
        { type: "ESSAY", prompt: "Using Newton's laws, explain how a car accelerates from rest, including the roles of inertia, the driving force and friction from the road, and one situation where inertia is dangerous.", answerKey: "At rest the car's inertia (first law) keeps it still until a net force acts. The engine turns the wheels which push back on the road; by the third law the road pushes the tyres forward, providing the driving force. By the second law this net force divided by the car's mass gives its acceleration (F = ma). A sudden stop or crash shows dangerous inertia: passengers keep moving forward (first law) unless restrained by seat belts. Reward correct use of all three laws.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 6.5 Newton's Universal Law of Gravitation (https://openstax.org/books/college-physics-2e/pages/6-5-newtons-universal-law-of-gravitation)
    {
      slug: "universal-gravitation",
      title: "Newton's Law of Universal Gravitation",
      objective:
        "By the end of the topic, learners should be able to state Newton's law of universal gravitation, use F = Gm₁m₂/r², and relate gravitational force to weight and g. (MoE Grade 10 Period II, CONTENTS 2 'Newton's Law of Universal Gravitation'.)",
      estimatedMinutes: 100,
      notes: `## The law of universal gravitation

- **Statement** — every particle in the universe attracts every other particle with a force directed along the line joining them, directly proportional to the product of their masses and inversely proportional to the square of the distance between them.
- **Formula:** F = G m₁ m₂ / r²
- **F** — gravitational force between the masses (N).
- **m₁, m₂** — the two masses (kg).
- **r** — distance between their centres (m).
- **G** — the universal gravitational constant, **G = 6.674 × 10⁻¹¹ N·m²/kg²**.
- The force is always **attractive** and acts on both bodies equally and oppositely (Newton's third law).

## Inverse-square relationship

- Because F ∝ 1/r², doubling the distance reduces the force to one quarter; tripling it to one ninth.
- Doubling either mass doubles the force.

## Gravitation and weight

- The weight of a body is the gravitational attraction of the Earth on it: w = mg.
- Setting mg = GmM/r² gives the acceleration due to gravity: **g = GM / r²**, where M is the mass of the Earth and r its radius.
- g is independent of the falling object's mass, which is why all objects fall at the same rate.

## Key points

- Gravitation is universal — it acts between all masses, from apples to planets.
- It holds planets in orbit around the Sun and the Moon around the Earth.
- The force is extremely weak unless at least one mass is very large.

## Common errors

- **Using r as radius of one body instead of centre-to-centre distance** — r is the separation of the centres.
- **Forgetting to square r** — the law is an inverse-square law.
- **Confusing G with g** — G is a universal constant (6.674 × 10⁻¹¹); g is the local acceleration due to gravity (≈ 9.8 m/s²).`,
      workedExample: `**Problem (OpenStax College Physics 2e, 6.5).** Show that the acceleration due to gravity at the Earth's surface is about 9.8 m/s². Use G = 6.67 × 10⁻¹¹ N·m²/kg², Earth's mass M = 5.98 × 10²⁴ kg, Earth's radius r = 6.38 × 10⁶ m.

**Step 1 — Equation.** From mg = GmM/r², the object's mass cancels: g = GM / r².

**Step 2 — Substitute.** g = (6.67 × 10⁻¹¹ × 5.98 × 10²⁴) / (6.38 × 10⁶)².

**Step 3 — Numerator.** 6.67 × 5.98 = 39.9, so numerator = 39.9 × 10¹³ = 3.99 × 10¹⁴.

**Step 4 — Denominator.** (6.38 × 10⁶)² = 40.7 × 10¹² = 4.07 × 10¹³.

**Step 5 — Divide.** g = 3.99 × 10¹⁴ / 4.07 × 10¹³ = 9.80 m/s².

**Answer.** g ≈ 9.80 m/s², matching the measured value, and it does not depend on the falling object's mass.`,
      quiz: [
        { prompt: "The gravitational force between two masses is:", options: ["always repulsive", "always attractive", "zero", "sometimes attractive, sometimes repulsive"], correctIndex: 1, explanation: "Gravity is always an attractive force." },
        { prompt: "Newton's law of gravitation: F =", options: ["Gm₁m₂/r", "Gm₁m₂/r²", "Gm₁m₂r²", "G(m₁+m₂)/r²"], correctIndex: 1, explanation: "F = Gm₁m₂/r², an inverse-square law." },
        { prompt: "The universal gravitational constant G is about:", options: ["9.8 N·m²/kg²", "6.67 × 10⁻¹¹ N·m²/kg²", "6.67 × 10¹¹ N·m²/kg²", "3.0 × 10⁸ N·m²/kg²"], correctIndex: 1, explanation: "G = 6.674 × 10⁻¹¹ N·m²/kg²." },
        { prompt: "In the formula, r is the distance between the:", options: ["surfaces of the bodies", "centres of the bodies", "tops of the bodies", "orbits"], correctIndex: 1, explanation: "r is the separation of the centres of mass." },
        { prompt: "If the distance between two masses doubles, the force becomes:", options: ["half", "one quarter", "double", "four times"], correctIndex: 1, explanation: "F ∝ 1/r², so doubling r gives 1/4 of the force." },
        { prompt: "If one mass is doubled (distance unchanged), the force:", options: ["halves", "doubles", "quarters", "stays the same"], correctIndex: 1, explanation: "F ∝ m₁, so doubling a mass doubles the force." },
        { prompt: "The acceleration due to gravity at Earth's surface is g =", options: ["GM/r²", "GMr²", "GM/r", "G/Mr²"], correctIndex: 0, explanation: "From mg = GmM/r², g = GM/r²." },
        { prompt: "Why do all objects fall at the same rate (no air resistance)?", options: ["they have equal mass", "g does not depend on the falling object's mass", "gravity is repulsive", "G changes with mass"], correctIndex: 1, explanation: "g = GM/r² is independent of the falling body's mass." },
        { prompt: "Weight of a body is the gravitational force of the Earth, given by:", options: ["w = GM", "w = mg", "w = G/r²", "w = mr²"], correctIndex: 1, explanation: "Weight w = mg." },
        { prompt: "Gravitation acts between:", options: ["only planets", "only large objects", "all masses in the universe", "only charged objects"], correctIndex: 2, explanation: "It is universal — between every pair of masses." },
        { prompt: "If the distance triples, the gravitational force becomes:", options: ["1/3", "1/6", "1/9", "3 times"], correctIndex: 2, explanation: "F ∝ 1/r², so tripling r gives 1/9." },
        { prompt: "G differs from g in that G is:", options: ["a local acceleration", "a universal constant", "measured in m/s²", "9.8"], correctIndex: 1, explanation: "G is a universal constant; g is the local acceleration due to gravity." },
        { prompt: "The gravitational force keeps the Moon:", options: ["at rest", "in orbit around the Earth", "spinning only", "charged"], correctIndex: 1, explanation: "Gravity provides the centripetal pull that keeps the Moon orbiting Earth." },
        { prompt: "Gravitational force between two people standing close together is:", options: ["very large", "extremely small", "repulsive", "zero"], correctIndex: 1, explanation: "The force is tiny unless at least one mass is very large." },
        { prompt: "Both masses in a gravitational pair feel forces that are:", options: ["equal and opposite", "unequal", "in the same direction", "zero"], correctIndex: 0, explanation: "By Newton's third law the forces are equal and opposite." },
        { prompt: "Doubling both masses (distance fixed) changes the force by a factor of:", options: ["2", "4", "8", "1"], correctIndex: 1, explanation: "F ∝ m₁m₂, so doubling both gives ×4." },
        { prompt: "The law of gravitation is called an inverse-square law because F depends on:", options: ["1/r", "1/r²", "r²", "r"], correctIndex: 1, explanation: "F is inversely proportional to r²." },
        { prompt: "As you move far from the Earth, g:", options: ["increases", "decreases", "stays 9.8", "becomes G"], correctIndex: 1, explanation: "g = GM/r² decreases as r increases." },
        { prompt: "The unit of G is:", options: ["m/s²", "N·m²/kg²", "N/kg", "kg·m/s"], correctIndex: 1, explanation: "G has units N·m²/kg²." },
        { prompt: "Weight of an object on the Moon is less than on Earth because:", options: ["its mass is less", "g is smaller on the Moon", "G is smaller", "there is no gravity"], correctIndex: 1, explanation: "The Moon's smaller g reduces w = mg, though mass is unchanged." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State Newton's law of universal gravitation and write its formula, defining each symbol.", answerKey: "Every particle attracts every other with a force along the line joining them, proportional to the product of masses and inversely proportional to the square of their separation. F = Gm₁m₂/r²: F force (N), G = 6.67×10⁻¹¹ N·m²/kg², m₁ and m₂ masses (kg), r centre-to-centre distance (m).", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "If the distance between two masses is halved, the gravitational force becomes:", options: ["half", "double", "one quarter", "four times"], correctIndex: 3, answerKey: "F ∝ 1/r²; halving r multiplies the force by 4.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between G and g.", answerKey: "G is the universal gravitational constant (6.67×10⁻¹¹ N·m²/kg²), the same everywhere. g is the local acceleration due to gravity (≈9.8 m/s² on Earth), given by g = GM/r², and varies with location.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The acceleration due to gravity g at Earth's surface equals:", options: ["GM/r²", "Gm/r²", "GMr²", "GM/r"], correctIndex: 0, answerKey: "g = GM/r² from equating weight to the gravitational force.", marks: 2 },
        { type: "ESSAY", prompt: "Explain, using the law of universal gravitation, why the weight of an object changes when it is taken to the Moon but its mass does not, and why all objects fall with the same acceleration at a given place.", answerKey: "Weight is the gravitational force, w = mg with g = GM/r². On the Moon M and r differ, giving a smaller g (~1.6 m/s²), so weight falls, but mass (amount of matter) is unchanged. All objects at one place fall with the same acceleration because g = GM/r² is independent of the falling body's mass — the extra force on a larger mass is exactly offset by its greater inertia. Reward correct mass/weight distinction and mass-independence argument.", marks: 8 },
      ],
    },
  ],
};
