import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 11,
// Semester One, Period III: Momentum and Its Conservation. Topics follow the
// syllabus CONTENTS item by item: nature of linear momentum and impulse,
// elastic and inelastic collisions, conservation of momentum, and angular
// momentum and its conservation. Every topic is sourced from OpenStax
// College Physics 2e (read via WebFetch).
export const physicsG11P3: PeriodContent = {
  grade: 11,
  number: 3,
  title: "Momentum and Its Conservation",
  summary:
    "Period III of the MoE Grade 11 Physics syllabus. Learners define linear momentum p = mv and impulse (FΔt = Δp), distinguish elastic from inelastic collisions, apply the law of conservation of linear momentum to collisions and recoil, and extend the idea to angular momentum L = Iω and its conservation.",
  topics: [
    // source: OpenStax — College Physics 2e, 8.1 Linear Momentum and Force & 8.2 Impulse (https://openstax.org/books/college-physics-2e/pages/8-1-linear-momentum-and-force)
    {
      slug: "linear-momentum-and-impulse",
      title: "Nature of Linear Momentum and Impulse",
      objective:
        "By the end of the topic, learners should be able to define and calculate linear momentum p = mv, state Newton's second law as Fnet = Δp/Δt, and use the impulse–momentum theorem FΔt = Δp. (MoE Grade 11 Period III, CONTENTS 1 'Nature of Linear momentum and Impulse'.)",
      estimatedMinutes: 110,
      notes: `## Linear momentum

- **Linear momentum (p)** — the product of a body's mass and velocity: **p = mv**.
- It is a **vector**, in the same direction as the velocity.
- SI unit: **kilogram-metre per second (kg·m/s)**.
- A heavy, fast object has large momentum; a light or slow one has small momentum.

## Newton's second law in terms of momentum

- **Fnet = Δp / Δt** — the net external force equals the rate of change of momentum.
- This is more general than F = ma; it also applies when the mass changes (e.g. a rocket).
- For constant mass, Δp/Δt = mΔv/Δt = ma, recovering F = ma.

## Impulse

- **Impulse** — the product of the average force and the time it acts: impulse = Fnet Δt.
- **Impulse–momentum theorem:** Fnet Δt = Δp = m v_f − m v_i.
- SI unit of impulse: newton-second (N·s), equivalent to kg·m/s.

## Force and time of impact

- The same change in momentum can be produced by a large force for a short time, or a small force for a long time.
- **Increasing the contact time reduces the force.** This is the basis of many safety devices.
- Examples: airbags and padded dashboards, crumple zones, bending the knees on landing, catching a ball by drawing the hand back.

\`\`\`svg Same impulse: a longer contact time gives a smaller force
<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two force-time graphs with equal area but different peak force">
  <line x1="30" y1="110" x2="150" y2="110" stroke="#334155" stroke-width="1.2"/>
  <line x1="30" y1="110" x2="30" y2="20" stroke="#334155" stroke-width="1.2"/>
  <rect x="30" y="35" width="30" height="75" fill="#fca5a5" stroke="#dc2626"/>
  <text x="34" y="128" font-size="9" fill="#dc2626">short t, big F</text>
  <line x1="180" y1="110" x2="290" y2="110" stroke="#334155" stroke-width="1.2"/>
  <line x1="180" y1="110" x2="180" y2="20" stroke="#334155" stroke-width="1.2"/>
  <rect x="180" y="80" width="75" height="30" fill="#93c5fd" stroke="#2563eb"/>
  <text x="188" y="128" font-size="9" fill="#2563eb">long t, small F</text>
</svg>
\`\`\`

## Common errors

- **Treating momentum as a scalar** — direction matters; opposite velocities give opposite-sign momenta.
- **Confusing momentum and kinetic energy** — momentum is mv (vector); KE is ½mv² (scalar).
- **Ignoring the role of time** — a longer impact time means a gentler force for the same Δp.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 8.1).** A 0.057 kg tennis ball, initially at rest, is struck by a racquet and leaves at 58 m/s. The racquet is in contact with the ball for 5.0 ms (0.0050 s). Find the average force on the ball.

**Step 1 — Change in momentum.** Δp = m(v_f − v_i) = 0.057 × (58 − 0) = 3.306 kg·m/s.

**Step 2 — Apply Newton's second law in momentum form.** Fnet = Δp / Δt.

**Step 3 — Substitute.** Fnet = 3.306 / 0.0050.

**Step 4 — Evaluate.** Fnet = 661 N (about 660 N).

**Answer.** The average force on the ball is about 661 N — very large because the momentum change happens in a very short time.`,
      quiz: [
        { prompt: "Linear momentum is defined as:", options: ["p = mv", "p = ma", "p = ½mv²", "p = mg"], correctIndex: 0, explanation: "Momentum p = mass × velocity." },
        { prompt: "The SI unit of momentum is:", options: ["kg·m/s", "N", "J", "m/s"], correctIndex: 0, explanation: "Momentum is measured in kg·m/s." },
        { prompt: "Momentum is a:", options: ["scalar", "vector", "unit of energy", "type of force"], correctIndex: 1, explanation: "Momentum has the same direction as the velocity — a vector." },
        { prompt: "A 2 kg body moving at 5 m/s has momentum:", options: ["2.5 kg·m/s", "10 kg·m/s", "7 kg·m/s", "25 kg·m/s"], correctIndex: 1, explanation: "p = mv = 2 × 5 = 10 kg·m/s." },
        { prompt: "Newton's second law in momentum form is:", options: ["F = Δp/Δt", "F = pΔt", "F = Δt/Δp", "F = p/m"], correctIndex: 0, explanation: "Fnet = rate of change of momentum = Δp/Δt." },
        { prompt: "Impulse equals:", options: ["mass × velocity", "force × time", "force / time", "½mv²"], correctIndex: 1, explanation: "Impulse = FΔt." },
        { prompt: "The impulse–momentum theorem states impulse equals:", options: ["kinetic energy", "the change in momentum", "the weight", "the acceleration"], correctIndex: 1, explanation: "FΔt = Δp." },
        { prompt: "The SI unit of impulse is:", options: ["N·s", "N/s", "J", "kg"], correctIndex: 0, explanation: "Impulse is measured in newton-seconds (N·s), equal to kg·m/s." },
        { prompt: "An airbag reduces injury by:", options: ["increasing the force", "increasing the impact time to reduce the force", "increasing momentum", "removing the mass"], correctIndex: 1, explanation: "A longer stopping time means a smaller force for the same Δp." },
        { prompt: "A 0.5 kg ball's velocity changes by 4 m/s. The impulse on it is:", options: ["2 N·s", "8 N·s", "0.125 N·s", "4.5 N·s"], correctIndex: 0, explanation: "Impulse = Δp = mΔv = 0.5 × 4 = 2 N·s." },
        { prompt: "A force of 20 N acts for 3 s. The impulse is:", options: ["60 N·s", "6.7 N·s", "23 N·s", "17 N·s"], correctIndex: 0, explanation: "Impulse = FΔt = 20 × 3 = 60 N·s." },
        { prompt: "Momentum differs from kinetic energy because momentum is:", options: ["a scalar", "a vector (mv), while KE is a scalar (½mv²)", "measured in joules", "always zero"], correctIndex: 1, explanation: "Momentum is a vector mv; kinetic energy is a scalar ½mv²." },
        { prompt: "Two bodies of equal mass move at equal speed in opposite directions. Their total momentum is:", options: ["double", "zero", "half", "maximum"], correctIndex: 1, explanation: "Equal and opposite momenta cancel to zero." },
        { prompt: "Which has greater momentum: a 1000 kg car at 10 m/s or a 10 kg ball at 10 m/s?", options: ["the ball", "the car", "equal", "cannot tell"], correctIndex: 1, explanation: "p = mv; the car's larger mass gives more momentum (10000 vs 100 kg·m/s)." },
        { prompt: "Bending the knees on landing from a jump:", options: ["increases the force", "increases the stopping time, reducing the force", "increases momentum", "has no effect"], correctIndex: 1, explanation: "A longer stopping time lowers the force for the same momentum change." },
        { prompt: "Newton's second law F = Δp/Δt is more general than F = ma because it applies when:", options: ["speed is low", "the mass changes", "there is no force", "the body is at rest"], correctIndex: 1, explanation: "It handles changing-mass systems such as rockets." },
        { prompt: "A 3 kg trolley slows from 6 m/s to 2 m/s. Its change in momentum is:", options: ["−12 kg·m/s", "+12 kg·m/s", "−24 kg·m/s", "8 kg·m/s"], correctIndex: 0, explanation: "Δp = 3(2 − 6) = 3(−4) = −12 kg·m/s." },
        { prompt: "A larger momentum change in the same time requires a:", options: ["smaller force", "larger force", "zero force", "smaller mass"], correctIndex: 1, explanation: "F = Δp/Δt, so a bigger Δp in the same Δt needs a bigger force." },
        { prompt: "Impulse and momentum change have the same:", options: ["units and value", "units only", "value only", "neither"], correctIndex: 0, explanation: "By the theorem they are equal, and both are kg·m/s (= N·s)." },
        { prompt: "A catcher moving the glove back while catching a fast ball:", options: ["increases the force felt", "reduces the force by extending the time", "increases the ball's momentum", "changes the ball's mass"], correctIndex: 1, explanation: "Extending the catch time lowers the force for the same Δp." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A 4 kg object moves at 3 m/s. Its momentum is:", options: ["7 kg·m/s", "12 kg·m/s", "1.33 kg·m/s", "18 kg·m/s"], correctIndex: 1, answerKey: "p = mv = 4 × 3 = 12 kg·m/s.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define impulse and state the impulse–momentum theorem.", answerKey: "Impulse is the product of the average force and the time it acts (FΔt). The impulse–momentum theorem states that impulse equals the change in momentum: FΔt = Δp = mv_f − mv_i.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A 0.20 kg ball hits a wall at 8 m/s and rebounds at 6 m/s in the opposite direction. Find the impulse on the ball.", answerKey: "Taking the initial direction as positive: Δp = m(v_f − v_i) = 0.20(−6 − 8) = 0.20(−14) = −2.8 kg·m/s. The impulse is 2.8 N·s directed away from the wall.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "An airbag protects a passenger mainly by:", options: ["reducing the change in momentum", "increasing the collision time so the force is smaller", "increasing the mass of the passenger", "removing gravity"], correctIndex: 1, answerKey: "It lengthens the stopping time, reducing the force for the same momentum change.", marks: 2 },
        { type: "ESSAY", prompt: "Explain, using the idea of impulse, why cars are fitted with crumple zones and airbags, and why a person landing after a jump should bend their knees.", answerKey: "In a collision the momentum change Δp is fixed by the initial and final velocities. Since impulse FΔt = Δp, the force F = Δp/Δt can be reduced by increasing the contact time Δt. Crumple zones and airbags deliberately extend the time over which the passenger is brought to rest, greatly lowering the peak force and hence the injury. Similarly, bending the knees on landing lengthens the time to stop the body's downward motion, reducing the force on the legs. Reward correct use of FΔt = Δp and the time–force trade-off.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 8.5 Inelastic Collisions in One Dimension (https://openstax.org/books/college-physics-2e/pages/8-5-inelastic-collisions-in-one-dimension)
    {
      slug: "elastic-and-inelastic-collisions",
      title: "Elastic and Inelastic Collisions",
      objective:
        "By the end of the topic, learners should be able to distinguish elastic from inelastic collisions by whether kinetic energy is conserved, and analyse a perfectly inelastic collision where objects stick together. (MoE Grade 11 Period III, CONTENTS 2 'Elastic and inelastic collisions'.)",
      estimatedMinutes: 100,
      notes: `## Collisions

- **Collision** — a brief interaction in which bodies exert large forces on each other.
- Momentum is **conserved** in every collision of an isolated system (no net external force).
- Collisions differ in whether **kinetic energy** is conserved.

## Elastic collisions

- **Elastic collision** — a collision in which the total kinetic energy is **conserved**.
- Both momentum and kinetic energy are the same before and after.
- Truly elastic collisions occur between hard, non-deforming objects (e.g. gas molecules, ideal billiard-like impacts).

## Inelastic collisions

- **Inelastic collision** — a collision in which kinetic energy is **not** conserved (some becomes heat, sound or deformation).
- Momentum is still conserved.
- **Perfectly (completely) inelastic collision** — the objects **stick together** and move with a common velocity; this loses the maximum kinetic energy while still conserving momentum.

## Comparison

| Feature | Elastic | Inelastic | Perfectly inelastic |
| --- | --- | --- | --- |
| Momentum conserved | yes | yes | yes |
| Kinetic energy conserved | yes | no | no (maximum loss) |
| Objects stick together | no | not necessarily | yes |

## Perfectly inelastic collision equation

- Before: m₁u₁ + m₂u₂. After (common velocity v): (m₁ + m₂)v.
- **m₁u₁ + m₂u₂ = (m₁ + m₂)v.**

## Common errors

- **Assuming kinetic energy is always conserved** — only in elastic collisions.
- **Thinking momentum is lost in a crash** — momentum is conserved; the "lost" quantity is kinetic energy.
- **Forgetting direction** — use signs for opposite velocities.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 8.5).** A 0.150 kg ice-hockey puck moving at 35.0 m/s is caught by a 70.0 kg goalie initially at rest. They move together afterward (a perfectly inelastic collision). Find their common velocity and the kinetic energy lost.

**Step 1 — Conserve momentum.** m_puck u = (m_puck + m_goalie) v.

**Step 2 — Solve for v.** v = (0.150 × 35.0) / (0.150 + 70.0) = 5.25 / 70.15.

**Step 3 — Evaluate.** v = 0.0748 m/s (goalie and puck glide off very slowly).

**Step 4 — Kinetic energy.** Before: ½(0.150)(35.0²) = ½(0.150)(1225) = 91.9 J. After: ½(70.15)(0.0748²) = ½(70.15)(0.00560) = 0.196 J.

**Step 5 — Energy lost.** ΔKE = 91.9 − 0.196 = 91.7 J.

**Answer.** Their common velocity is 0.0748 m/s and about 91.7 J of kinetic energy is lost (to heat and sound), confirming the collision is inelastic even though momentum is conserved.`,
      quiz: [
        { prompt: "In every collision of an isolated system, the conserved quantity is:", options: ["kinetic energy", "momentum", "velocity", "force"], correctIndex: 1, explanation: "Momentum is conserved in all collisions with no net external force." },
        { prompt: "An elastic collision conserves:", options: ["momentum only", "kinetic energy only", "both momentum and kinetic energy", "neither"], correctIndex: 2, explanation: "Elastic collisions conserve both momentum and kinetic energy." },
        { prompt: "An inelastic collision does NOT conserve:", options: ["momentum", "kinetic energy", "mass", "charge"], correctIndex: 1, explanation: "Kinetic energy is not conserved in an inelastic collision." },
        { prompt: "A perfectly inelastic collision is one where objects:", options: ["bounce apart elastically", "stick together", "pass through", "gain energy"], correctIndex: 1, explanation: "In a perfectly inelastic collision the objects move off together." },
        { prompt: "In a perfectly inelastic collision, kinetic energy loss is:", options: ["zero", "maximum (while conserving momentum)", "gained", "unrelated to the collision"], correctIndex: 1, explanation: "Sticking together gives the maximum KE loss consistent with momentum conservation." },
        { prompt: "In an inelastic collision, the 'lost' kinetic energy becomes:", options: ["extra momentum", "heat, sound and deformation", "mass", "gravity"], correctIndex: 1, explanation: "It is converted to heat, sound and deformation." },
        { prompt: "Two lumps of clay collide and stick. The collision is:", options: ["elastic", "perfectly inelastic", "not a collision", "energy-gaining"], correctIndex: 1, explanation: "Objects sticking together is perfectly inelastic." },
        { prompt: "The perfectly inelastic momentum equation is:", options: ["m₁u₁ + m₂u₂ = (m₁+m₂)v", "m₁u₁ = m₂u₂", "½m₁u₁² = ½m₂u₂²", "u₁ = v"], correctIndex: 0, explanation: "Combined mass moves at common velocity v." },
        { prompt: "A 2 kg body at 4 m/s strikes and sticks to a 2 kg body at rest. Common velocity:", options: ["2 m/s", "4 m/s", "8 m/s", "1 m/s"], correctIndex: 0, explanation: "v = (2×4)/(4) = 8/4 = 2 m/s." },
        { prompt: "Which collision conserves the most kinetic energy?", options: ["perfectly inelastic", "inelastic", "elastic", "all equal"], correctIndex: 2, explanation: "Only elastic collisions conserve kinetic energy fully." },
        { prompt: "Gas molecules bouncing off each other are modelled as:", options: ["perfectly inelastic", "elastic", "sticking collisions", "not colliding"], correctIndex: 1, explanation: "Ideal gas collisions are treated as elastic." },
        { prompt: "In a car crash where cars crumple and stop, kinetic energy is:", options: ["conserved", "converted to heat/sound/deformation", "increased", "turned into momentum"], correctIndex: 1, explanation: "It is largely converted to other forms — an inelastic collision." },
        { prompt: "A bullet embedding in a block is an example of:", options: ["elastic collision", "perfectly inelastic collision", "explosion", "no collision"], correctIndex: 1, explanation: "The bullet and block move off together — perfectly inelastic." },
        { prompt: "In all these collisions, momentum is:", options: ["sometimes lost", "always conserved (isolated system)", "converted to energy", "zero"], correctIndex: 1, explanation: "Momentum is conserved in an isolated system regardless of type." },
        { prompt: "Two 1 kg balls approach at 3 m/s each and stick. Their final speed is:", options: ["3 m/s", "6 m/s", "0 m/s", "1.5 m/s"], correctIndex: 2, explanation: "Equal and opposite momenta cancel; combined they are at rest." },
        { prompt: "In an elastic collision between equal masses (one at rest), the moving one:", options: ["stops and the other moves off with its speed", "speeds up", "sticks", "reverses"], correctIndex: 0, explanation: "For equal masses, velocities are exchanged in an elastic collision." },
        { prompt: "Which is conserved in BOTH elastic and inelastic collisions?", options: ["kinetic energy", "momentum", "speed", "height"], correctIndex: 1, explanation: "Momentum is conserved in both; kinetic energy only in elastic." },
        { prompt: "A collision where some KE is lost but the objects do NOT stick is:", options: ["elastic", "inelastic (not perfectly)", "perfectly inelastic", "impossible"], correctIndex: 1, explanation: "It is inelastic but not perfectly inelastic." },
        { prompt: "The kinetic energy after a perfectly inelastic collision is:", options: ["greater than before", "less than before", "equal to before", "zero always"], correctIndex: 1, explanation: "Some KE is lost, so the final KE is less than the initial." },
        { prompt: "Momentum being conserved but KE not conserved describes:", options: ["an elastic collision", "an inelastic collision", "no collision", "an explosion only"], correctIndex: 1, explanation: "That is exactly an inelastic collision." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A 3 kg trolley at 4 m/s collides and sticks to a 1 kg trolley at rest. Their common velocity is:", options: ["1 m/s", "3 m/s", "4 m/s", "12 m/s"], correctIndex: 1, answerKey: "v = (3×4)/(3+1) = 12/4 = 3 m/s.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between an elastic and an inelastic collision.", answerKey: "In an elastic collision both momentum and total kinetic energy are conserved. In an inelastic collision momentum is conserved but kinetic energy is not (some is converted to heat, sound and deformation). In a perfectly inelastic collision the objects stick together.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A 0.5 kg ball moving at 6 m/s collides head-on with a 0.5 kg ball moving at 2 m/s in the opposite direction, and they stick together. Find their common velocity.", answerKey: "Take the 6 m/s direction positive: total p = 0.5(6) + 0.5(−2) = 3 − 1 = 2 kg·m/s. Combined mass = 1.0 kg, so v = 2/1.0 = 2 m/s in the direction of the faster ball.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "In a perfectly inelastic collision, which statement is true?", options: ["kinetic energy is conserved", "momentum is conserved and the objects stick together", "momentum is lost", "both KE and momentum are lost"], correctIndex: 1, answerKey: "Momentum is conserved and the objects move off together with maximum KE loss.", marks: 2 },
        { type: "ESSAY", prompt: "Explain why momentum is conserved in a car crash even though the cars are badly damaged and much energy is lost, and state what happens to the 'lost' kinetic energy.", answerKey: "In the absence of a net external force the total momentum of the colliding system is conserved, because the forces the cars exert on each other are internal action–reaction pairs that cancel for the system. The damage and energy loss concern kinetic energy, not momentum: a crash is an inelastic collision in which kinetic energy is converted into other forms — heat, sound, and the work done in bending and crumpling metal (deformation). So momentum before equals momentum after, while kinetic energy decreases. Reward the internal-force/momentum argument and correct fate of the lost KE.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 8.3 Conservation of Momentum (https://openstax.org/books/college-physics-2e/pages/8-3-conservation-of-momentum)
    {
      slug: "conservation-of-momentum",
      title: "Conservation of Momentum",
      objective:
        "By the end of the topic, learners should be able to state the law of conservation of linear momentum, identify when it applies, and use it to solve collision and recoil problems. (MoE Grade 11 Period III, CONTENTS 3 'Conservation of Momentum'.)",
      estimatedMinutes: 100,
      notes: `## The law of conservation of momentum

- **Law of conservation of linear momentum** — the total momentum of an isolated system remains constant.
- **Isolated system** — one on which the **net external force is zero**.
- Internal forces (the bodies pushing on each other) cannot change the total momentum, because they are equal and opposite (Newton's third law).

## Formula (two bodies)

- Total momentum before = total momentum after:
- **m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂**
- where u are velocities before and v velocities after the interaction.

## When it applies

- During collisions and explosions, where interaction forces are large and external forces (like friction) are negligible over the short time.
- The individual momenta may change, but their **vector sum stays the same**.

## Recoil and explosions

- If a system starts at rest (total momentum zero), it must have zero total momentum afterward.
- **Recoil:** a gun and bullet, or a rocket and its exhaust, move in opposite directions with equal and opposite momenta.

\`\`\`svg Recoil: total momentum stays zero
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A gun recoiling left as a bullet moves right, momenta equal and opposite">
  <rect x="120" y="45" width="55" height="22" fill="#cbd5e1" stroke="#475569"/>
  <line x1="120" y1="56" x2="70" y2="56" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="70,56 82,51 82,61" fill="#2563eb"/>
  <text x="72" y="40" font-size="10" fill="#2563eb">gun recoil</text>
  <circle cx="200" cy="56" r="6" fill="#dc2626"/>
  <line x1="206" y1="56" x2="256" y2="56" stroke="#dc2626" stroke-width="2.5"/>
  <polygon points="256,56 244,51 244,61" fill="#dc2626"/>
  <text x="210" y="40" font-size="10" fill="#dc2626">bullet</text>
</svg>
\`\`\`

## Common errors

- **Applying it when large external forces act** — momentum is only conserved for an isolated (net-force-zero) system.
- **Forgetting the vector nature** — add momenta with correct signs for direction.
- **Confusing conservation of momentum with conservation of kinetic energy** — momentum is always conserved; KE only in elastic collisions.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 8.3).** A 4.0 kg rifle fires a 0.050 kg bullet at 400 m/s. Both are initially at rest. Find the recoil velocity of the rifle.

**Step 1 — Total momentum before.** Everything is at rest, so total momentum before = 0.

**Step 2 — Conserve momentum.** Total after must also be 0: m_bullet v_bullet + m_rifle v_rifle = 0.

**Step 3 — Solve for the rifle's velocity.** v_rifle = −(m_bullet v_bullet) / m_rifle = −(0.050 × 400) / 4.0 = −20 / 4.0.

**Step 4 — Evaluate.** v_rifle = −5.0 m/s.

**Answer.** The rifle recoils at 5.0 m/s in the direction opposite to the bullet. The bullet's forward momentum (20 kg·m/s) is exactly balanced by the rifle's backward momentum (4.0 × 5.0 = 20 kg·m/s), so the total stays zero.`,
      quiz: [
        { prompt: "The law of conservation of momentum applies to:", options: ["any system", "an isolated system (zero net external force)", "only moving systems", "only heavy systems"], correctIndex: 1, explanation: "Total momentum is conserved when the net external force is zero." },
        { prompt: "An isolated system is one where the net external force is:", options: ["large", "zero", "gravity only", "friction only"], correctIndex: 1, explanation: "Isolated means no net external force." },
        { prompt: "Internal forces cannot change total momentum because they are:", options: ["very small", "equal and opposite (Newton's third law)", "always zero", "vertical"], correctIndex: 1, explanation: "Action–reaction internal forces cancel for the whole system." },
        { prompt: "For two colliding bodies, conservation of momentum reads:", options: ["m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂", "u₁ = v₁", "m₁ = m₂", "½m₁u₁² = ½m₂u₂²"], correctIndex: 0, explanation: "Total momentum before = total momentum after." },
        { prompt: "A system starting at rest keeps a total momentum of:", options: ["increasing", "zero", "its weight", "maximum"], correctIndex: 1, explanation: "If it starts at zero it stays at zero." },
        { prompt: "When a gun fires, the gun recoils because:", options: ["momentum is created", "total momentum must stay zero", "the bullet has no momentum", "gravity pushes it"], correctIndex: 1, explanation: "The bullet's forward momentum is balanced by the gun's backward momentum." },
        { prompt: "A 60 kg skater throws a 2 kg ball at 5 m/s. Her recoil speed is:", options: ["0.17 m/s", "5 m/s", "10 m/s", "150 m/s"], correctIndex: 0, explanation: "v = (2×5)/60 = 10/60 = 0.17 m/s." },
        { prompt: "Momentum is a vector, so opposite velocities give momenta that:", options: ["add up", "have opposite signs", "are equal", "vanish"], correctIndex: 1, explanation: "Direction is shown by sign; opposite directions have opposite signs." },
        { prompt: "In a collision, individual momenta:", options: ["never change", "may change while the total stays constant", "are always zero", "double"], correctIndex: 1, explanation: "One body gains what the other loses; the total is unchanged." },
        { prompt: "Conservation of momentum holds during a collision because external forces are:", options: ["huge", "negligible over the short time", "the same as internal", "upward"], correctIndex: 1, explanation: "Interaction forces dominate; external forces have little effect in the brief impact." },
        { prompt: "A 2 kg cart at 3 m/s hits a 1 kg cart at rest and they stick. Total momentum after is:", options: ["6 kg·m/s", "3 kg·m/s", "0 kg·m/s", "9 kg·m/s"], correctIndex: 0, explanation: "Total before = 2×3 = 6 kg·m/s, which is conserved." },
        { prompt: "A rocket moves forward by pushing gas backward. This illustrates:", options: ["conservation of energy", "conservation of momentum", "friction", "gravity"], correctIndex: 1, explanation: "Backward gas momentum equals forward rocket momentum." },
        { prompt: "Which quantity is always conserved in an isolated collision?", options: ["kinetic energy", "momentum", "speed", "height"], correctIndex: 1, explanation: "Momentum is always conserved; KE only if elastic." },
        { prompt: "Two equal trolleys, one at 4 m/s and one at rest, collide and stick. Common speed:", options: ["4 m/s", "2 m/s", "8 m/s", "0"], correctIndex: 1, explanation: "v = (m×4)/(2m) = 2 m/s." },
        { prompt: "The total momentum of a system is the:", options: ["largest single momentum", "vector sum of all momenta", "sum of the masses", "average velocity"], correctIndex: 1, explanation: "It is the vector sum of the individual momenta." },
        { prompt: "If friction is significant over the time of interest, momentum of the system is:", options: ["still exactly conserved", "not conserved (external force acts)", "doubled", "zero"], correctIndex: 1, explanation: "Friction is an external force, so momentum is not conserved." },
        { prompt: "A 0.02 kg bullet at 500 m/s embeds in a 3.0 kg block at rest. Total momentum after:", options: ["10 kg·m/s", "500 kg·m/s", "3 kg·m/s", "0"], correctIndex: 0, explanation: "Before = 0.02×500 = 10 kg·m/s, conserved." },
        { prompt: "Newton's third law underlies conservation of momentum because forces come in:", options: ["single pushes", "equal and opposite pairs", "threes", "circles"], correctIndex: 1, explanation: "Equal and opposite internal forces produce equal and opposite momentum changes." },
        { prompt: "In an explosion, fragments fly apart so that total momentum:", options: ["increases", "stays the same as before (often zero)", "reverses", "becomes energy"], correctIndex: 1, explanation: "Total momentum is conserved; if it started at zero it stays zero." },
        { prompt: "Two ice skaters push off each other. They move:", options: ["the same way", "in opposite directions with equal and opposite momenta", "not at all", "upward"], correctIndex: 1, explanation: "Total momentum stays zero, so their momenta are equal and opposite." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A 1000 kg cannon fires a 5 kg shell at 200 m/s. The recoil speed of the cannon is:", options: ["1 m/s", "5 m/s", "40 m/s", "0.025 m/s"], correctIndex: 0, answerKey: "v = (5×200)/1000 = 1000/1000 = 1 m/s.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the law of conservation of linear momentum and the condition under which it holds.", answerKey: "The total momentum of an isolated system remains constant. It holds when the net external force on the system is zero (an isolated system).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A 2.0 kg ball moving at 5.0 m/s collides with a stationary 3.0 kg ball. After the collision the 2.0 kg ball moves at 1.0 m/s in the same direction. Find the velocity of the 3.0 kg ball.", answerKey: "Before: 2.0(5.0) + 3.0(0) = 10 kg·m/s. After: 2.0(1.0) + 3.0(v) = 2.0 + 3v. Setting equal: 10 = 2.0 + 3v, so 3v = 8, v = 2.67 m/s in the same direction.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Momentum is conserved in a collision because the forces between the bodies are:", options: ["external", "equal and opposite internal forces", "always zero", "gravitational"], correctIndex: 1, answerKey: "Internal action–reaction forces cancel for the system, so total momentum is unchanged.", marks: 2 },
        { type: "ESSAY", prompt: "Using conservation of momentum, explain how a rocket is able to accelerate in space where there is nothing to push against, and how a firing gun recoils.", answerKey: "In an isolated system total momentum is constant. A rocket expels exhaust gas backward at high speed, giving the gas backward momentum; to keep the total momentum unchanged the rocket gains an equal forward momentum, so it accelerates forward without needing anything external to push on. Likewise, a gun and bullet start with zero total momentum; when fired, the bullet carries forward momentum, so the gun must recoil backward with equal and opposite momentum, keeping the total zero. Reward correct use of momentum conservation for both cases.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 10.5 Angular Momentum and Its Conservation (https://openstax.org/books/college-physics-2e/pages/10-5-angular-momentum-and-its-conservation)
    {
      slug: "angular-momentum-and-conservation",
      title: "Angular Momentum and Its Conservation",
      objective:
        "By the end of the topic, learners should be able to define angular momentum L = Iω, state the law of conservation of angular momentum, and explain everyday examples such as a spinning skater. (MoE Grade 11 Period III, CONTENTS 4 'Angular Momentum and its conservation'.)",
      estimatedMinutes: 100,
      notes: `## Angular momentum

- **Angular momentum (L)** — the rotational analogue of linear momentum: **L = I ω**.
- **I** — the moment of inertia (how mass is distributed about the axis).
- **ω** — the angular velocity.
- SI unit: **kg·m²/s**.

## Rotational form of Newton's second law

- Net torque equals the rate of change of angular momentum: **net τ = ΔL / Δt**.
- This is the rotational version of Fnet = Δp/Δt.

## Conservation of angular momentum

- **Law of conservation of angular momentum** — if the net external torque on a system is zero, its total angular momentum stays constant.
- When net τ = 0: **I ω = I′ ω′** (angular momentum before = after).
- If the moment of inertia decreases, the angular velocity increases, and vice versa.

## Everyday examples

- **Spinning skater** — pulling the arms in reduces I, so ω increases and the skater spins faster; extending the arms slows the spin.
- **Divers and gymnasts** — tucking reduces I to spin faster, then opening out slows the rotation for a clean entry.
- **A planet in orbit** — moves faster when nearer the Sun (smaller r) than when farther away.

\`\`\`svg Pulling arms in reduces I, so ω increases
<svg viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A skater with arms out spinning slowly and arms in spinning fast">
  <circle cx="70" cy="55" r="14" fill="#93c5fd" stroke="#2563eb"/>
  <line x1="40" y1="55" x2="100" y2="55" stroke="#2563eb" stroke-width="2"/>
  <text x="40" y="90" font-size="10" fill="#2563eb">arms out: large I, small ω</text>
  <circle cx="220" cy="55" r="14" fill="#fca5a5" stroke="#dc2626"/>
  <line x1="210" y1="55" x2="230" y2="55" stroke="#dc2626" stroke-width="2"/>
  <text x="180" y="90" font-size="10" fill="#dc2626">arms in: small I, large ω</text>
</svg>
\`\`\`

## Common errors

- **Confusing L with linear momentum p** — L = Iω (rotation); p = mv (translation).
- **Thinking ω can change with no torque** — only if I also changes so that Iω stays constant.
- **Forgetting the condition** — angular momentum is conserved only when net external torque is zero.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 10.5).** A skater spins at 0.800 rev/s with her arms out, when her moment of inertia is 2.34 kg·m². She pulls her arms in, reducing her moment of inertia to 0.363 kg·m². There is negligible friction. Find her new rate of spin.

**Step 1 — Conserve angular momentum.** With no external torque, I ω = I′ ω′.

**Step 2 — Solve for ω′.** ω′ = (I / I′) ω = (2.34 / 0.363) × 0.800.

**Step 3 — Evaluate the ratio.** 2.34 / 0.363 = 6.45.

**Step 4 — New spin rate.** ω′ = 6.45 × 0.800 = 5.16 rev/s.

**Answer.** She spins at 5.16 rev/s — much faster than before. Pulling her arms in lowered her moment of inertia, so her angular velocity rose to keep the angular momentum L = Iω constant.`,
      quiz: [
        { prompt: "Angular momentum is defined as:", options: ["L = mv", "L = Iω", "L = ½Iω²", "L = Iα"], correctIndex: 1, explanation: "L = moment of inertia × angular velocity." },
        { prompt: "Angular momentum is the rotational analogue of:", options: ["force", "linear momentum", "kinetic energy", "torque"], correctIndex: 1, explanation: "L (= Iω) corresponds to p (= mv)." },
        { prompt: "The SI unit of angular momentum is:", options: ["kg·m/s", "kg·m²/s", "N·m", "rad/s"], correctIndex: 1, explanation: "L is measured in kg·m²/s." },
        { prompt: "Angular momentum is conserved when the net external torque is:", options: ["large", "zero", "increasing", "gravity"], correctIndex: 1, explanation: "Zero net torque means constant angular momentum." },
        { prompt: "The conservation equation is:", options: ["Iω = I′ω′", "Iω = mv", "ω = ω′", "I = I′"], correctIndex: 0, explanation: "Angular momentum before = after: Iω = I′ω′." },
        { prompt: "When a spinning skater pulls her arms in, her moment of inertia:", options: ["increases", "decreases", "stays constant", "becomes zero"], correctIndex: 1, explanation: "Mass moves closer to the axis, reducing I." },
        { prompt: "As the skater's moment of inertia decreases, her angular velocity:", options: ["decreases", "increases", "stays the same", "reverses"], correctIndex: 1, explanation: "To keep Iω constant, ω must increase." },
        { prompt: "The rotational form of Newton's second law is:", options: ["F = ma", "net τ = ΔL/Δt", "L = Iω", "p = mv"], correctIndex: 1, explanation: "Net torque equals the rate of change of angular momentum." },
        { prompt: "Moment of inertia depends on the mass and:", options: ["colour", "how mass is distributed about the axis", "temperature", "time"], correctIndex: 1, explanation: "I depends on the mass distribution relative to the axis." },
        { prompt: "A diver tucks to spin faster because tucking:", options: ["increases I", "decreases I so ω increases", "adds torque", "removes gravity"], correctIndex: 1, explanation: "Tucking lowers I, so ω rises to conserve L." },
        { prompt: "If I doubles with no external torque, ω becomes:", options: ["double", "half", "the same", "four times"], correctIndex: 1, explanation: "Iω constant, so doubling I halves ω." },
        { prompt: "A planet moves fastest in its orbit when it is:", options: ["farthest from the Sun", "nearest the Sun", "at constant distance", "stationary"], correctIndex: 1, explanation: "Smaller r means larger speed to conserve angular momentum." },
        { prompt: "Angular momentum L = Iω is a:", options: ["scalar", "vector", "unit of energy", "type of torque"], correctIndex: 1, explanation: "Angular momentum is a vector along the axis of rotation." },
        { prompt: "A skater with I = 3 kg·m² spinning at 2 rad/s pulls in to I = 1 kg·m². New ω:", options: ["6 rad/s", "2 rad/s", "0.67 rad/s", "3 rad/s"], correctIndex: 0, explanation: "ω′ = Iω/I′ = 3×2/1 = 6 rad/s." },
        { prompt: "Without any external torque, the product Iω:", options: ["increases", "stays constant", "decreases", "becomes zero"], correctIndex: 1, explanation: "Angular momentum is conserved: Iω stays constant." },
        { prompt: "Which change lets ω increase with no torque?", options: ["increasing I", "decreasing I", "adding mass far out", "slowing down"], correctIndex: 1, explanation: "Reducing I raises ω to keep Iω constant." },
        { prompt: "Spinning kinetic energy of the skater increases when she pulls in because:", options: ["angular momentum increases", "she does work pulling her arms in", "torque acts", "mass increases"], correctIndex: 1, explanation: "The extra rotational KE comes from the work she does pulling inward." },
        { prompt: "The angular momentum of an isolated rotating system is:", options: ["always increasing", "conserved", "always zero", "equal to its mass"], correctIndex: 1, explanation: "With zero external torque, it is conserved." },
        { prompt: "A merry-go-round slows when a child moves outward because moving out:", options: ["reduces I", "increases I so ω falls", "adds torque", "adds momentum"], correctIndex: 1, explanation: "Larger I means smaller ω for constant L." },
        { prompt: "Angular momentum corresponds to linear momentum as ω corresponds to:", options: ["mass", "velocity", "force", "acceleration"], correctIndex: 1, explanation: "ω is the rotational analogue of linear velocity v." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A wheel with moment of inertia 4 kg·m² spins at 3 rad/s. Its angular momentum is:", options: ["7 kg·m²/s", "12 kg·m²/s", "1.33 kg·m²/s", "36 kg·m²/s"], correctIndex: 1, answerKey: "L = Iω = 4 × 3 = 12 kg·m²/s.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define angular momentum and state the law of its conservation.", answerKey: "Angular momentum L = Iω (moment of inertia × angular velocity). The law of conservation of angular momentum states that if the net external torque on a system is zero, its total angular momentum stays constant (Iω = I′ω′).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A spinning disc of moment of inertia 2.0 kg·m² turns at 4.0 rad/s. Clay is added, raising the moment of inertia to 5.0 kg·m². Find the new angular velocity (no external torque).", answerKey: "Iω = I′ω′: 2.0 × 4.0 = 5.0 × ω′, so ω′ = 8.0/5.0 = 1.6 rad/s.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A skater spins faster when she pulls her arms in because:", options: ["her angular momentum increases", "her moment of inertia decreases so ω increases", "an external torque acts", "her mass decreases"], correctIndex: 1, answerKey: "Lower I with constant angular momentum means higher ω.", marks: 2 },
        { type: "ESSAY", prompt: "Explain, using conservation of angular momentum, how a figure skater controls her rate of spin, and give one other example of the same principle.", answerKey: "With negligible friction the net external torque on the skater is nearly zero, so her angular momentum L = Iω is conserved. By pulling her arms and leg inward she moves mass closer to the spin axis, decreasing her moment of inertia I; since Iω must stay constant, her angular velocity ω increases and she spins faster. Extending her limbs increases I and slows the spin, letting her stop in control. Another example: a diver or gymnast tucks to spin quickly then opens out to slow the rotation before landing; or a planet speeds up as it nears the Sun. Reward correct use of Iω = constant and a valid second example.", marks: 8 },
      ],
    },
  ],
};
