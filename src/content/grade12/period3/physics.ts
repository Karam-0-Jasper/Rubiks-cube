import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 12,
// Semester One, Period III: Magnetism and Electro-Magnetism. Topics follow the
// syllabus CONTENTS item by item: magnets (types, properties, materials,
// magnetic fields, magnetizing and demagnetizing), magnetic fields (types, flux
// and flux density, force in a magnetic field, moving-coil galvanometer), and
// electromagnetic induction (laws, induced current and emf, inductors,
// generators, motors and transformers). Every topic is sourced from OpenStax
// College Physics 2e (read via WebFetch).
export const physicsG12P3: PeriodContent = {
  grade: 12,
  number: 3,
  title: "Magnetism and Electro-Magnetism",
  summary:
    "Period III of the MoE Grade 12 Physics syllabus. Learners describe magnets, magnetic materials and methods of magnetizing and demagnetizing, define magnetic flux (Φ = BA) and flux density (the tesla), calculate the force on a current-carrying conductor (F = BIL sin θ) and a moving charge (F = qvB sin θ), explain the moving-coil galvanometer, and apply the laws of electromagnetic induction to generators, motors and transformers (Vs/Vp = Ns/Np).",
  topics: [
    // source: OpenStax — College Physics 2e, 22.1 Magnets & 22.2 Ferromagnets and Electromagnets (https://openstax.org/books/college-physics-2e/pages/22-1-magnets)
    {
      slug: "magnets",
      title: "Magnets: Types, Properties, Materials and Magnetizing",
      objective:
        "By the end of the topic, learners should be able to describe types and properties of magnets, identify magnetic materials, describe magnetic fields around magnets, and state methods of magnetizing and demagnetizing. (MoE Grade 12 Period III, CONTENTS 1 'Magnets: types and properties; magnetic materials; concept of magnetic fields; methods of magnetizing and demagnetizing'.)",
      estimatedMinutes: 100,
      notes: `## Types and properties of magnets

- **Magnet** — a material that attracts iron and certain other metals and that sets north-south when freely suspended.
- Shapes: **bar, horseshoe (U-shaped) and disc** magnets.
- Every magnet has **two poles**, a **north (north-seeking)** and a **south (south-seeking)** pole.
- **Law of magnetic poles:** **like poles repel, unlike poles attract**.
- Poles cannot be isolated: breaking a magnet gives two smaller magnets, each with a north and a south pole (**no magnetic monopole**).

## Magnetic materials

- **Ferromagnetic materials** — strongly attracted to magnets and can be magnetized: **iron, cobalt, nickel** and their alloys (e.g. steel).
- **Soft magnetic materials** (soft iron) magnetize and demagnetize easily — used for temporary magnets and electromagnet cores.
- **Hard magnetic materials** (steel) are harder to magnetize but keep their magnetism — used for permanent magnets.
- Non-magnetic materials: copper, aluminium, wood, plastic.

## Magnetic fields

- **Magnetic field** — the region around a magnet where a magnetic force acts.
- Represented by **field lines** that run from **north to south outside** the magnet and form closed loops.
- Field lines never cross; they are closer together where the field is stronger (near the poles).

\`\`\`svg Magnetic field lines around a bar magnet
<svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Field lines running from the north pole to the south pole of a bar magnet">
  <rect x="90" y="52" width="60" height="24" fill="#e2e8f0" stroke="#334155"/>
  <rect x="90" y="52" width="30" height="24" fill="#fca5a5"/>
  <text x="100" y="69" font-size="11" fill="#7f1d1d">N</text>
  <text x="132" y="69" font-size="11" fill="#1e3a8a">S</text>
  <path d="M120 52 C120 20 60 20 90 64" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <path d="M120 52 C120 20 180 20 150 64" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <path d="M120 76 C120 108 60 108 90 64" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <path d="M120 76 C120 108 180 108 150 64" fill="none" stroke="#2563eb" stroke-width="1.5"/>
</svg>
\`\`\`

## Magnetizing and demagnetizing

- **Methods of magnetizing:** stroking a steel bar repeatedly in one direction with a magnet; placing it inside a coil (solenoid) carrying direct current (**electrical method**); hammering a bar while aligned north-south in Earth's field.
- **Methods of demagnetizing:** heating the magnet strongly; hammering it hard when not aligned with a field; placing it in a coil carrying **alternating current** and slowly withdrawing it.

## Common errors

- **Thinking a single pole can be isolated** — every magnet keeps both poles.
- **Saying field lines go south to north outside** — outside the magnet lines run north to south.
- **Confusing soft and hard magnetic materials** — soft iron loses magnetism easily; steel retains it.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 22.1-22.2).** A student has a soft-iron bar and a steel bar. (a) Which is better for a permanent magnet and which for an electromagnet core, and why? (b) The student wants to make the steel bar into a permanent magnet using a coil. Describe the method, and then describe how to demagnetize it.

**Step 1 — Choosing the materials.** Soft iron magnetizes and demagnetizes easily, so it is best as an **electromagnet core** (temporary magnet). Steel is hard to magnetize but keeps its magnetism, so it is best for a **permanent magnet**.

**Step 2 — Magnetizing the steel bar.** Place the steel bar inside a solenoid and pass a **direct current** through the coil; the magnetic field of the coil aligns the domains in the steel, leaving it magnetized when the current is switched off.

**Step 3 — Demagnetizing.** Place the magnet inside a coil carrying **alternating current** and slowly withdraw it (or heat it strongly, or hammer it while it lies east-west); this randomizes the domains and removes the magnetism.

**Answer.** Steel makes the permanent magnet and soft iron the electromagnet core; DC in a coil magnetizes, and withdrawing from an AC coil (or heating/hammering) demagnetizes.`,
      quiz: [
        { prompt: "Every magnet has:", options: ["one pole", "two poles (north and south)", "three poles", "no poles"], correctIndex: 1, explanation: "All magnets have a north and a south pole." },
        { prompt: "The law of magnetic poles states:", options: ["like poles attract", "like poles repel, unlike poles attract", "all poles attract", "all poles repel"], correctIndex: 1, explanation: "Like poles repel and unlike poles attract." },
        { prompt: "Breaking a bar magnet in half produces:", options: ["one north and one south monopole", "two smaller magnets each with two poles", "no magnets", "a single pole"], correctIndex: 1, explanation: "Each piece is a complete magnet — no monopoles exist." },
        { prompt: "Which is a ferromagnetic material?", options: ["copper", "iron", "wood", "plastic"], correctIndex: 1, explanation: "Iron (with cobalt and nickel) is ferromagnetic." },
        { prompt: "A freely suspended magnet comes to rest pointing:", options: ["east-west", "north-south", "straight up", "randomly"], correctIndex: 1, explanation: "It aligns north-south in Earth's field." },
        { prompt: "Magnetic field lines outside a magnet run from:", options: ["south to north", "north to south", "pole to centre", "in straight lines only"], correctIndex: 1, explanation: "Outside the magnet, lines go from north to south." },
        { prompt: "Field lines are closer together where the field is:", options: ["weaker", "stronger", "zero", "reversed"], correctIndex: 1, explanation: "Closer lines mean a stronger field (near the poles)." },
        { prompt: "Field lines never:", options: ["form loops", "cross each other", "leave the north pole", "enter the south pole"], correctIndex: 1, explanation: "Magnetic field lines never cross." },
        { prompt: "Soft iron is used for electromagnet cores because it:", options: ["keeps its magnetism", "magnetizes and demagnetizes easily", "is non-magnetic", "is a permanent magnet"], correctIndex: 1, explanation: "Soft iron is a temporary magnet — easy to magnetize/demagnetize." },
        { prompt: "Steel is used for permanent magnets because it:", options: ["loses magnetism quickly", "retains its magnetism", "cannot be magnetized", "is non-magnetic"], correctIndex: 1, explanation: "Steel keeps its magnetism once magnetized." },
        { prompt: "Which material is NOT attracted by a magnet?", options: ["nickel", "cobalt", "iron", "aluminium"], correctIndex: 3, explanation: "Aluminium is non-magnetic; iron, cobalt, nickel are ferromagnetic." },
        { prompt: "A method of magnetizing a steel bar is:", options: ["heating it strongly", "stroking it with a magnet in one direction", "dropping it randomly", "cooling it to 0 °C"], correctIndex: 1, explanation: "Stroking in one direction aligns the domains." },
        { prompt: "Passing direct current through a coil around a steel bar will:", options: ["demagnetize it", "magnetize it", "melt it", "reverse gravity"], correctIndex: 1, explanation: "The coil's DC field magnetizes the bar (electrical method)." },
        { prompt: "A way to demagnetize a magnet is to:", options: ["stroke it with a magnet", "place it in a DC coil", "heat it strongly", "keep it in a fridge"], correctIndex: 2, explanation: "Strong heating randomizes the domains." },
        { prompt: "Withdrawing a magnet slowly from a coil carrying which current demagnetizes it?", options: ["direct current", "alternating current", "no current", "a large steady current"], correctIndex: 1, explanation: "An AC coil, with slow withdrawal, demagnetizes the bar." },
        { prompt: "A U-shaped magnet is also called a:", options: ["disc magnet", "horseshoe magnet", "ring magnet", "monopole"], correctIndex: 1, explanation: "The U-shaped magnet is the horseshoe magnet." },
        { prompt: "The region around a magnet where magnetic force acts is the:", options: ["electric field", "magnetic field", "gravitational field", "pole"], correctIndex: 1, explanation: "That region is the magnetic field." },
        { prompt: "An isolated magnetic north pole (monopole):", options: ["is common", "has not been found — poles come in pairs", "exists in iron only", "is the same as an electron"], correctIndex: 1, explanation: "No magnetic monopole has been isolated." },
        { prompt: "A temporary magnet is best made from:", options: ["hard steel", "soft iron", "copper", "plastic"], correctIndex: 1, explanation: "Soft iron makes a good temporary magnet." },
        { prompt: "Like poles brought together will:", options: ["attract", "repel", "combine", "cancel poles"], correctIndex: 1, explanation: "Like poles repel." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "When a bar magnet is cut in half, each half:", options: ["becomes a single north pole", "becomes a single south pole", "is a complete magnet with two poles", "loses all magnetism"], correctIndex: 2, answerKey: "Each piece is a complete magnet with both a north and a south pole; monopoles do not exist.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the law of magnetic poles and name three ferromagnetic materials.", answerKey: "Law of magnetic poles: like poles repel and unlike poles attract. Three ferromagnetic materials: iron, cobalt and nickel (steel, an iron alloy, is also acceptable).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Describe one method of magnetizing a steel bar and one method of demagnetizing a magnet.", answerKey: "Magnetizing: stroke the steel bar repeatedly in one direction with one pole of a magnet, or place it in a solenoid carrying direct current so the field aligns its domains. Demagnetizing: heat the magnet strongly, hammer it while lying east-west, or place it in a coil carrying alternating current and slowly withdraw it, randomizing the domains.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which material is best for the core of an electromagnet?", options: ["hard steel", "soft iron", "copper", "aluminium"], correctIndex: 1, answerKey: "Soft iron magnetizes and demagnetizes easily, making it ideal for a temporary electromagnet core.", marks: 2 },
        { type: "ESSAY", prompt: "Explain the difference between soft and hard magnetic materials, give a use for each, and describe how magnetic field lines around a bar magnet show the strength and direction of the field.", answerKey: "Soft magnetic materials (e.g. soft iron) magnetize and demagnetize easily, so they are used as temporary magnets and electromagnet cores. Hard magnetic materials (e.g. steel) are harder to magnetize but keep their magnetism, so they are used for permanent magnets. Magnetic field lines represent the field: outside the magnet they run from the north pole to the south pole and form continuous closed loops; the direction of the line gives the field direction (the way a north pole would be pushed); the lines are closer together where the field is stronger (near the poles) and farther apart where it is weaker, and they never cross. Reward the soft/hard distinction with uses and correct description of field lines (direction, closeness = strength, no crossing).", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 22.7 Magnetic Force on a Current-Carrying Conductor & 22.4 Magnetic Field Strength (https://openstax.org/books/college-physics-2e/pages/22-7-magnetic-force-on-a-current-carrying-conductor)
    {
      slug: "magnetic-fields-flux-and-force",
      title: "Magnetic Fields: Flux, Flux Density and Magnetic Force",
      objective:
        "By the end of the topic, learners should be able to define magnetic flux (Φ = BA) and flux density B (the tesla), calculate the force on a current-carrying conductor (F = BIL sin θ) and a moving charge (F = qvB sin θ), and explain the moving-coil galvanometer. (MoE Grade 12 Period III, CONTENTS 2 'Magnetic Fields: types; magnetic flux and magnetic flux density; force in a magnetic field; moving coil galvanometer'.)",
      estimatedMinutes: 110,
      notes: `## Magnetic flux and flux density

- **Magnetic flux density (B)** — the strength of a magnetic field; also called magnetic field strength. Unit: the **tesla (T)**, where 1 T = 1 N/(A·m).
- **Magnetic flux (Φ)** — the total magnetic field passing through an area: **Φ = B A cos θ**, where θ is the angle between B and the normal to the area. When B is perpendicular to the area, Φ = B A. Unit: the **weber (Wb)**, 1 Wb = 1 T·m².
- So flux density B = Φ / A is the flux per unit area (Wb/m² = T).

## Types of magnetic field

- **Uniform field** — same strength and direction everywhere (parallel, evenly spaced field lines), e.g. between the poles of a horseshoe magnet.
- **Non-uniform field** — strength/direction vary from point to point, e.g. around a bar magnet or a straight wire.

## Force on a current-carrying conductor

- A wire carrying current in a magnetic field feels a force: **F = B I L sin θ**, where L is the length in the field and θ the angle between the current and B.
- The force is **maximum when θ = 90°** (F = BIL) and **zero when the current is parallel to B** (θ = 0).
- **Direction (Fleming's left-hand / right-hand rule):** with the thumb along the current and fingers along B, the force is perpendicular to both (out of the palm).

## Force on a moving charge

- A charge q moving with speed v in a field feels **F = q v B sin θ**.
- Maximum when v is perpendicular to B; zero when v is parallel to B.

## Moving-coil galvanometer

- A **galvanometer** detects and measures small currents.
- A coil pivoted in the field of a permanent magnet carries the current; the field exerts forces on the coil sides, producing a **turning effect (torque)** that rotates the coil against a spring.
- The rotation (shown by a pointer) is proportional to the current, so the scale reads current.

\`\`\`svg Force on a current-carrying wire between magnet poles
<svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A wire carrying current between north and south poles experiences an upward force">
  <rect x="20" y="30" width="30" height="60" fill="#fca5a5"/>
  <text x="28" y="65" font-size="11" fill="#7f1d1d">N</text>
  <rect x="190" y="30" width="30" height="60" fill="#93c5fd"/>
  <text x="198" y="65" font-size="11" fill="#1e3a8a">S</text>
  <line x1="50" y1="60" x2="190" y2="60" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="120" cy="60" r="6" fill="#334155"/>
  <text x="112" y="82" font-size="9" fill="#334155">I (wire)</text>
  <line x1="120" y1="60" x2="120" y2="20" stroke="#16a34a" stroke-width="2.5"/>
  <polygon points="120,20 114,32 126,32" fill="#16a34a"/>
  <text x="128" y="28" font-size="10" fill="#16a34a">F</text>
</svg>
\`\`\`

## Common errors

- **Confusing flux and flux density** — flux Φ = BA (weber); flux density B is flux per unit area (tesla).
- **Using the wrong angle** — θ is between the current (or velocity) and the field.
- **Forgetting the force is zero when current is parallel to B** (sin 0 = 0).`,
      workedExample: `**Problem (OpenStax College Physics 2e, 22.7).** A straight wire of length 5.00 cm carries a current of 20.0 A at right angles to a uniform magnetic field of flux density 1.50 T. (a) Find the force on the wire. (b) If instead the wire made an angle of 30° with the field, what would the force be?

**Part (a) — Perpendicular case (θ = 90°).**
Step 1 — F = B I L sin θ, with L = 5.00 cm = 0.0500 m and sin 90° = 1.
Step 2 — F = (1.50)(20.0)(0.0500)(1) = 1.50 N.

**Part (b) — At 30°.**
Step 1 — F = B I L sin 30° = (1.50)(20.0)(0.0500)(0.500).
Step 2 — F = 1.50 × 0.500 = 0.750 N.

**Answer.** (a) The force is 1.50 N when the wire is perpendicular to the field. (b) At 30° it drops to 0.750 N, because the force depends on sin θ.`,
      quiz: [
        { prompt: "Magnetic flux density is measured in:", options: ["weber", "tesla", "newton", "ampere"], correctIndex: 1, explanation: "Flux density B is in tesla (T)." },
        { prompt: "Magnetic flux is measured in:", options: ["tesla", "weber", "ohm", "volt"], correctIndex: 1, explanation: "Flux Φ is in weber (Wb)." },
        { prompt: "Magnetic flux is given by:", options: ["Φ = B/A", "Φ = BA cos θ", "Φ = A/B", "Φ = B + A"], correctIndex: 1, explanation: "Φ = BA cos θ; = BA when B is perpendicular to the area." },
        { prompt: "One tesla equals:", options: ["1 N/(A·m)", "1 A/N", "1 Wb·m²", "1 V/A"], correctIndex: 0, explanation: "1 T = 1 N/(A·m)." },
        { prompt: "The force on a current-carrying wire is:", options: ["F = BIL sin θ", "F = BIL/θ", "F = B/(IL)", "F = IL/B"], correctIndex: 0, explanation: "F = BIL sin θ." },
        { prompt: "The force on the wire is maximum when the current is:", options: ["parallel to B", "at 45° to B", "perpendicular to B", "zero"], correctIndex: 2, explanation: "Maximum at θ = 90° (sin 90° = 1)." },
        { prompt: "The force on a wire is zero when the current is:", options: ["perpendicular to B", "parallel to B", "at 30° to B", "large"], correctIndex: 1, explanation: "sin 0° = 0, so no force when parallel to B." },
        { prompt: "The force on a moving charge is:", options: ["F = qvB sin θ", "F = q/vB", "F = vB/q", "F = qB/v"], correctIndex: 0, explanation: "F = qvB sin θ." },
        { prompt: "A 0.2 m wire carries 3 A perpendicular to a 0.5 T field. The force is:", options: ["0.3 N", "3.3 N", "0.03 N", "30 N"], correctIndex: 0, explanation: "F = BIL = 0.5 × 3 × 0.2 = 0.3 N." },
        { prompt: "Flux density B equals flux divided by:", options: ["length", "area", "current", "time"], correctIndex: 1, explanation: "B = Φ/A, flux per unit area." },
        { prompt: "A uniform magnetic field has field lines that are:", options: ["curved and uneven", "parallel and evenly spaced", "crossing", "circular only"], correctIndex: 1, explanation: "Uniform field: parallel, equally spaced lines." },
        { prompt: "The direction of the force on a current in a field is found using:", options: ["Ohm's law", "Fleming's left-hand rule", "Snell's law", "Lenz's mass"], correctIndex: 1, explanation: "Fleming's left-hand (motor) rule gives the force direction." },
        { prompt: "A moving-coil galvanometer measures:", options: ["temperature", "small electric currents", "magnetic poles", "resistance only"], correctIndex: 1, explanation: "It detects and measures small currents." },
        { prompt: "In a galvanometer the coil rotates because of the:", options: ["heating effect", "turning effect (torque) of the magnetic force", "gravity", "friction"], correctIndex: 1, explanation: "The magnetic forces on the coil sides produce a torque." },
        { prompt: "In a galvanometer the pointer deflection is proportional to the:", options: ["voltage of the magnet", "current in the coil", "mass of the coil", "temperature"], correctIndex: 1, explanation: "Deflection is proportional to the current." },
        { prompt: "1 weber equals:", options: ["1 T·m²", "1 T/m²", "1 N/A", "1 A·m"], correctIndex: 0, explanation: "1 Wb = 1 T·m²." },
        { prompt: "Doubling the current in a wire (other things fixed) changes the force by:", options: ["×0.5", "×2", "×4", "no change"], correctIndex: 1, explanation: "F ∝ I, so doubling I doubles the force." },
        { prompt: "A charge stationary in a magnetic field experiences a magnetic force of:", options: ["maximum", "zero", "qB", "qvB"], correctIndex: 1, explanation: "F = qvB sin θ = 0 when v = 0." },
        { prompt: "A 4 A wire of length 0.5 m at 30° to a 2 T field feels a force of:", options: ["4 N", "2 N", "8 N", "0.5 N"], correctIndex: 1, explanation: "F = BIL sin θ = 2 × 4 × 0.5 × sin 30° = 2 × 4 × 0.5 × 0.5 = 2 N." },
        { prompt: "The spring in a galvanometer provides a:", options: ["driving torque", "restoring torque balancing the deflection", "current source", "magnetic field"], correctIndex: 1, explanation: "The hairspring gives a restoring torque, so deflection measures current." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A 0.30 m wire carries 5.0 A perpendicular to a 0.40 T magnetic field. The force on it is:", options: ["0.60 N", "6.0 N", "0.06 N", "60 N"], correctIndex: 0, answerKey: "F = BIL sin 90° = 0.40 × 5.0 × 0.30 = 0.60 N.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between magnetic flux and magnetic flux density, giving the unit of each.", answerKey: "Magnetic flux density B is the strength of the field (flux per unit area), measured in tesla (T), 1 T = 1 N/(A·m). Magnetic flux Φ = BA cos θ is the total field passing through an area, measured in weber (Wb), 1 Wb = 1 T·m². So B = Φ/A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Write the formula for the force on a current-carrying conductor in a magnetic field and state when the force is (a) maximum and (b) zero.", answerKey: "F = BIL sin θ, where B is flux density, I current, L length in the field and θ the angle between the current and the field. (a) The force is maximum when the current is perpendicular to the field (θ = 90°, F = BIL). (b) The force is zero when the current is parallel to the field (θ = 0°, sin 0 = 0).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A moving-coil galvanometer works because a current-carrying coil in a magnetic field experiences a:", options: ["heating effect", "turning effect (torque)", "chemical change", "loss of charge"], correctIndex: 1, answerKey: "The magnetic forces on the coil produce a torque that rotates it against a spring, giving a deflection proportional to the current.", marks: 2 },
        { type: "ESSAY", prompt: "Describe how a moving-coil galvanometer measures current, referring to the force on a current-carrying conductor in a magnetic field (F = BIL sin θ) and why the deflection is proportional to the current.", answerKey: "A moving-coil galvanometer has a rectangular coil pivoted so it can rotate in the field of a permanent magnet (often with a soft-iron core to give a strong radial field). When current I passes through the coil, each side of length L in the field experiences a force F = BIL (θ = 90°); the forces on the two sides are in opposite directions, producing a turning effect (torque) that rotates the coil. A hairspring provides a restoring torque proportional to the angle turned, so the coil settles where the magnetic torque equals the spring torque. Because the magnetic torque is proportional to the current, the deflection of the attached pointer is proportional to the current, and the scale can be marked to read current directly. Reward the force F = BIL, the torque/rotation, the balancing spring and the proportionality between deflection and current.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 23.1-23.3 Electromagnetic Induction & 23.7 Transformers (https://openstax.org/books/college-physics-2e/pages/23-3-motional-emf)
    {
      slug: "electromagnetic-induction",
      title: "Electromagnetic Induction: Generators, Motors and Transformers",
      objective:
        "By the end of the topic, learners should be able to state the laws of electromagnetic induction (Faraday and Lenz), explain induced current and emf, and describe generators, motors and transformers (Vs/Vp = Ns/Np). (MoE Grade 12 Period III, CONTENTS 3 'Electromagnetic Induction: the laws; induced current and emf; inductors, generators, motors and transformers'.)",
      estimatedMinutes: 110,
      notes: `## Electromagnetic induction

- **Electromagnetic induction** — an emf (and current, if the circuit is complete) is induced in a conductor whenever the **magnetic flux through it changes**.
- Flux can change by moving a magnet near a coil, moving the coil, or changing the current in a nearby coil.

## The laws of induction

- **Faraday's law:** the induced emf is proportional to the **rate of change of magnetic flux**: **emf = −N (ΔΦ / Δt)**, where N is the number of turns.
- **Lenz's law:** the induced current flows in a direction that **opposes the change** producing it (the minus sign in Faraday's law). This is a consequence of conservation of energy.
- **Motional emf:** a rod of length L moving at speed v perpendicular to a field B has **emf = B L v**.

## Generators and motors

- **Generator (dynamo)** — converts mechanical energy to electrical energy. A coil is rotated in a magnetic field; the changing flux induces an emf. A **simple AC generator** uses slip rings; a **DC generator** uses a split-ring commutator to give current in one direction.
- **Motor** — converts electrical energy to mechanical energy (the reverse of a generator). A current-carrying coil in a magnetic field experiences a torque and rotates.
- **Inductor** — a coil that opposes changes in current through it because a changing current induces a back-emf.

## Transformers

- A **transformer** changes the voltage of an **alternating** supply using two coils (primary and secondary) on a soft-iron core.
- **Transformer equation: Vs / Vp = Ns / Np** (secondary/primary voltage ratio = turns ratio).
- **Step-up** transformer: Ns > Np, so Vs > Vp. **Step-down:** Ns < Np, so Vs < Vp.
- For an **ideal (100% efficient)** transformer, power is conserved: **Vp Ip = Vs Is**, so a higher voltage means a lower current.
- Transformers only work with AC (a steady DC gives no changing flux).

## Common errors

- **Forgetting the flux must change** — a steady field induces no emf.
- **Ignoring Lenz's law** — the induced current opposes the change (energy conservation).
- **Using a transformer with DC** — transformers need alternating current.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 23.7).** A transformer runs from a 120 V AC supply. The primary has 50 turns and the secondary is required to give 100 kV (100 000 V) for an X-ray unit. (a) How many turns must the secondary have? (b) If the primary current is 10.0 A, find the secondary current for an ideal transformer.

**Part (a) — Turns ratio.**
Step 1 — Vs/Vp = Ns/Np, so Ns = Np × (Vs/Vp).
Step 2 — Ns = 50 × (100 000 / 120) = 50 × 833.3 = 41 667 turns.

**Part (b) — Ideal transformer (power conserved).**
Step 1 — Vp Ip = Vs Is, so Is = Vp Ip / Vs.
Step 2 — Is = (120 × 10.0) / 100 000 = 1200 / 100 000 = 0.0120 A = 12.0 mA.

**Check.** Input power = 120 × 10.0 = 1200 W; output power = 100 000 × 0.0120 = 1200 W. Powers match, as expected.

**Answer.** The secondary needs about 41 667 turns and carries 12.0 mA — this is a step-up transformer raising voltage and lowering current.`,
      quiz: [
        { prompt: "Electromagnetic induction produces an emf when:", options: ["the resistance changes", "the magnetic flux through a conductor changes", "the temperature rises", "the wire is cut"], correctIndex: 1, explanation: "A changing magnetic flux induces an emf." },
        { prompt: "Faraday's law says the induced emf is proportional to the:", options: ["flux itself", "rate of change of flux", "resistance", "current squared"], correctIndex: 1, explanation: "emf = −N ΔΦ/Δt." },
        { prompt: "Lenz's law states the induced current:", options: ["aids the change", "opposes the change producing it", "is always zero", "flows only in AC"], correctIndex: 1, explanation: "The induced current opposes the change (energy conservation)." },
        { prompt: "Lenz's law is a consequence of conservation of:", options: ["charge", "energy", "mass", "momentum"], correctIndex: 1, explanation: "Opposing the change conserves energy." },
        { prompt: "A generator converts:", options: ["electrical to mechanical energy", "mechanical to electrical energy", "heat to light", "chemical to electrical energy"], correctIndex: 1, explanation: "A generator converts mechanical energy to electrical." },
        { prompt: "A motor converts:", options: ["mechanical to electrical energy", "electrical to mechanical energy", "light to heat", "electrical to chemical energy"], correctIndex: 1, explanation: "A motor converts electrical energy to mechanical." },
        { prompt: "A DC generator uses a:", options: ["slip ring", "split-ring commutator", "resistor", "capacitor"], correctIndex: 1, explanation: "A commutator reverses connections to give one-direction current." },
        { prompt: "Motional emf for a rod is:", options: ["BLv", "B/Lv", "qvB", "BIL"], correctIndex: 0, explanation: "emf = BLv for a rod moving perpendicular to B." },
        { prompt: "A transformer works only with:", options: ["direct current", "alternating current", "no current", "static charge"], correctIndex: 1, explanation: "AC gives the changing flux a transformer needs." },
        { prompt: "The transformer equation is:", options: ["Vs/Vp = Ns/Np", "Vs/Vp = Np/Ns", "VsVp = NsNp", "Vs + Vp = Ns + Np"], correctIndex: 0, explanation: "Voltage ratio equals turns ratio." },
        { prompt: "A step-up transformer has:", options: ["Ns < Np", "Ns > Np", "Ns = Np", "no core"], correctIndex: 1, explanation: "More secondary turns raise the voltage." },
        { prompt: "In an ideal transformer, power is:", options: ["increased", "conserved (Vp Ip = Vs Is)", "lost as light", "doubled"], correctIndex: 1, explanation: "Input power equals output power for an ideal transformer." },
        { prompt: "A step-up transformer increases voltage and:", options: ["increases current", "decreases current", "keeps current the same", "removes current"], correctIndex: 1, explanation: "Power conservation means higher V gives lower I." },
        { prompt: "A transformer with 100 primary and 200 secondary turns on 12 V gives:", options: ["6 V", "24 V", "12 V", "200 V"], correctIndex: 1, explanation: "Vs = 12 × 200/100 = 24 V (step-up)." },
        { prompt: "Moving a magnet faster into a coil induces a:", options: ["smaller emf", "larger emf", "zero emf", "constant emf"], correctIndex: 1, explanation: "Faster change of flux gives a larger emf." },
        { prompt: "The core of a transformer is usually made of:", options: ["copper", "soft iron", "plastic", "aluminium"], correctIndex: 1, explanation: "Soft iron concentrates and links the magnetic flux." },
        { prompt: "An inductor opposes:", options: ["steady voltage", "changes in the current through it", "resistance", "magnetic poles"], correctIndex: 1, explanation: "A changing current induces a back-emf opposing it." },
        { prompt: "A simple AC generator uses:", options: ["a commutator", "slip rings", "a battery", "a diode"], correctIndex: 1, explanation: "Slip rings keep the connection during rotation for AC output." },
        { prompt: "A transformer with more turns on the primary than the secondary is a:", options: ["step-up transformer", "step-down transformer", "motor", "generator"], correctIndex: 1, explanation: "Fewer secondary turns lower the voltage — step-down." },
        { prompt: "If a coil has more turns N, the induced emf for the same flux change is:", options: ["smaller", "larger", "unchanged", "zero"], correctIndex: 1, explanation: "emf = −N ΔΦ/Δt, so more turns give a larger emf." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A transformer has 200 primary turns and 50 secondary turns. If the primary voltage is 240 V, the secondary voltage is:", options: ["960 V", "60 V", "240 V", "50 V"], correctIndex: 1, answerKey: "Vs = Vp × Ns/Np = 240 × 50/200 = 60 V (step-down).", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State Faraday's law and Lenz's law of electromagnetic induction.", answerKey: "Faraday's law: the magnitude of the induced emf in a coil is proportional to the rate of change of magnetic flux through it, emf = −N ΔΦ/Δt (N = number of turns). Lenz's law: the induced current flows in a direction such that its effects oppose the change producing it (giving the minus sign), which follows from conservation of energy.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "An ideal transformer steps 240 V down to 12 V. If the primary current is 0.50 A, find the secondary current.", answerKey: "For an ideal transformer Vp Ip = Vs Is, so Is = Vp Ip / Vs = (240 × 0.50)/12 = 120/12 = 10 A. (The step-down of voltage gives a step-up of current.)", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A transformer will NOT work with a steady direct current because:", options: ["DC is too strong", "there is no changing magnetic flux to induce an emf", "the core melts", "DC has no voltage"], correctIndex: 1, answerKey: "A steady DC produces a constant flux; without a changing flux no emf is induced in the secondary.", marks: 2 },
        { type: "ESSAY", prompt: "Explain the principle of a transformer, derive/state the transformer equation, distinguish step-up from step-down transformers, and explain why an ideal transformer that steps up voltage steps down current.", answerKey: "A transformer changes the voltage of an alternating supply by mutual induction: an alternating current in the primary coil produces a changing magnetic flux in the soft-iron core, which links the secondary coil and induces an alternating emf in it. The transformer equation is Vs/Vp = Ns/Np — the ratio of secondary to primary voltage equals the ratio of their turns. A step-up transformer has more secondary turns (Ns > Np), so Vs > Vp; a step-down transformer has fewer secondary turns (Ns < Np), so Vs < Vp. For an ideal (100% efficient) transformer no power is lost, so input power = output power: Vp Ip = Vs Is. Hence if the voltage is stepped up (Vs > Vp), the current must be stepped down (Is < Ip) to keep the product constant. Reward the mutual-induction principle, the equation, the step-up/step-down distinction and the power-conservation argument.", marks: 8 },
      ],
    },
  ],
};
