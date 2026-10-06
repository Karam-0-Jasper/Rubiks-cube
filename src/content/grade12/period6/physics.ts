import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 12,
// Semester Two, Period VI: High Energy Physics. Topics follow the syllabus
// CONTENTS item by item: quantum mechanics (the uncertainty principle and
// quantum numbers), particle accelerators, detecting instruments, subatomic
// reactions (the four fundamental interactions and conservation laws), and
// Einstein's photoelectric equation. Every topic is sourced from OpenStax
// College Physics 2e (read via WebFetch).
export const physicsG12P6: PeriodContent = {
  grade: 12,
  number: 6,
  title: "High Energy Physics",
  summary:
    "Period VI of the MoE Grade 12 Physics syllabus. Learners examine quantum mechanics (Heisenberg's uncertainty principle Δx Δp ≥ h/4π and the quantum numbers n, l, mₗ, mₛ), describe particle accelerators (cyclotron, synchrotron, linac) that create matter from energy, identify detecting instruments (Geiger counter, cloud/bubble chamber, scintillator), analyse subatomic reactions through the four fundamental interactions and conservation laws, and apply Einstein's photoelectric equation KE_max = hf − W.",
  topics: [
    // source: OpenStax — College Physics 2e, 29.7 Probability: The Heisenberg Uncertainty Principle & 30.8 Quantum Numbers and Rules (https://openstax.org/books/college-physics-2e/pages/29-7-probability-the-heisenberg-uncertainty-principle)
    {
      slug: "quantum-mechanics",
      title: "Quantum Mechanics: Uncertainty Principle and Quantum Numbers",
      objective:
        "By the end of the topic, learners should be able to state Heisenberg's uncertainty principle, explain wave-particle duality, and describe the quantum numbers that specify an electron's state in an atom. (MoE Grade 12 Period VI, CONTENTS 1 'Quantum mechanics'.)",
      estimatedMinutes: 100,
      notes: `## Quantum mechanics and wave-particle duality

- **Quantum mechanics** — the physics of very small objects (atoms, electrons, photons), where energy is **quantised** (comes in discrete amounts) and matter shows both wave and particle behaviour.
- **Wave-particle duality:** particles such as electrons produce interference patterns (wave behaviour) yet arrive at the screen as individual particles; light behaves as photons yet also as a wave.
- The pattern built up by many particles is described by a **probability distribution** (the wave tells us where a particle is likely to be found).

## Heisenberg's uncertainty principle

- It is impossible to know both the **position** and the **momentum** of a particle exactly at the same time.
- **Δx Δp ≥ h / 4π**, where Δx is the uncertainty in position, Δp the uncertainty in momentum and h Planck's constant.
- Reducing one uncertainty increases the other: pinning down position precisely makes momentum very uncertain, and vice versa.
- An equivalent form links energy and time: **ΔE Δt ≥ h / 4π**.

## Quantum numbers

An electron's state in an atom is described by four **quantum numbers**:

| Quantum number | Symbol | Describes | Allowed values |
| --- | --- | --- | --- |
| Principal | n | energy level and size of the orbit | 1, 2, 3, … |
| Orbital (angular momentum) | l | shape / orbital angular momentum | 0 to n − 1 |
| Magnetic | mₗ | orientation in a magnetic field | −l to +l |
| Spin | mₛ | direction of electron spin | +1/2 or −1/2 |

- The **principal quantum number n** fixes the main energy level (n = 1 is the lowest).
- The **orbital quantum number l** (0 to n − 1) gives the shape and orbital angular momentum.
- The **magnetic quantum number mₗ** (−l … 0 … +l) gives the orientation of the orbital.
- The **spin quantum number mₛ** (+1/2 or −1/2) gives the electron's spin direction.

## Common errors

- **Thinking uncertainty is due to poor instruments** — it is a fundamental limit of nature, not a measurement fault.
- **Using Δx Δp ≥ h** — the bound is h/4π.
- **Confusing n and l** — n sets the energy level; l sets the shape (0 ≤ l ≤ n − 1).`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 30.8).** An electron is in the energy level n = 2 of an atom. (a) List the allowed values of the orbital quantum number l. (b) For the largest of these l values, list the allowed values of the magnetic quantum number mₗ. (c) State the possible values of the spin quantum number mₛ.

**Part (a) — Orbital quantum number.** l runs from 0 to n − 1 = 2 − 1 = 1. So l = 0 and l = 1.

**Part (b) — Magnetic quantum number.** For the largest l = 1, mₗ runs from −l to +l in integer steps: mₗ = −1, 0, +1.

**Part (c) — Spin quantum number.** mₛ can only be +1/2 or −1/2.

**Answer.** (a) l = 0 or 1. (b) For l = 1, mₗ = −1, 0, +1. (c) mₛ = +1/2 or −1/2. These quantum numbers together specify the electron's state, consistent with the rules 0 ≤ l ≤ n − 1 and −l ≤ mₗ ≤ +l.`,
      quiz: [
        { prompt: "Quantum mechanics describes the physics of:", options: ["very large objects", "very small objects like atoms and electrons", "only planets", "only sound"], correctIndex: 1, explanation: "Quantum mechanics governs atomic-scale objects." },
        { prompt: "In quantum mechanics, energy is:", options: ["continuous", "quantised (in discrete amounts)", "always zero", "unlimited"], correctIndex: 1, explanation: "Energy comes in discrete quanta." },
        { prompt: "Wave-particle duality means particles can behave as:", options: ["only waves", "only particles", "both waves and particles", "neither"], correctIndex: 2, explanation: "Matter and light show both wave and particle behaviour." },
        { prompt: "Heisenberg's uncertainty principle relates the uncertainties in:", options: ["mass and charge", "position and momentum", "colour and speed", "time and temperature"], correctIndex: 1, explanation: "It links Δx and Δp." },
        { prompt: "The uncertainty principle is written:", options: ["Δx Δp ≥ h/4π", "Δx Δp = 0", "Δx + Δp = h", "Δx/Δp = h"], correctIndex: 0, explanation: "Δx Δp ≥ h/4π." },
        { prompt: "If the position is known very precisely, the momentum becomes:", options: ["also very precise", "very uncertain", "zero", "negative"], correctIndex: 1, explanation: "Reducing Δx increases Δp." },
        { prompt: "The uncertainty principle is:", options: ["a fault of instruments", "a fundamental limit of nature", "only true for large objects", "avoidable with care"], correctIndex: 1, explanation: "It is a basic property of nature, not a measurement error." },
        { prompt: "The energy-time form of the principle is:", options: ["ΔE Δt ≥ h/4π", "ΔE = Δt", "ΔE Δt = 0", "ΔE/Δt = h"], correctIndex: 0, explanation: "ΔE Δt ≥ h/4π." },
        { prompt: "The principal quantum number n describes the:", options: ["spin", "energy level and size of the orbit", "orientation", "shape only"], correctIndex: 1, explanation: "n sets the main energy level and size." },
        { prompt: "The lowest energy level has n equal to:", options: ["0", "1", "−1", "2"], correctIndex: 1, explanation: "n = 1 is the ground (lowest) level." },
        { prompt: "The orbital quantum number l can take values:", options: ["0 to n − 1", "1 to n", "−l to +l", "only 0"], correctIndex: 0, explanation: "l ranges from 0 to n − 1." },
        { prompt: "The magnetic quantum number mₗ ranges:", options: ["0 to n", "−l to +l", "1 to l", "only ±1/2"], correctIndex: 1, explanation: "mₗ runs from −l to +l." },
        { prompt: "The spin quantum number mₛ can be:", options: ["0 or 1", "+1/2 or −1/2", "−l to +l", "1 to n"], correctIndex: 1, explanation: "Electron spin is +1/2 or −1/2." },
        { prompt: "For n = 3, the allowed values of l are:", options: ["0, 1, 2", "1, 2, 3", "0, 1, 2, 3", "3 only"], correctIndex: 0, explanation: "l = 0 to n − 1 = 0, 1, 2." },
        { prompt: "For l = 2, the values of mₗ are:", options: ["−1, 0, 1", "−2, −1, 0, 1, 2", "0, 1, 2", "±1/2"], correctIndex: 1, explanation: "mₗ = −2, −1, 0, 1, 2." },
        { prompt: "How many quantum numbers specify an electron's state?", options: ["one", "two", "three", "four"], correctIndex: 3, explanation: "Four: n, l, mₗ and mₛ." },
        { prompt: "The shape of an orbital is given by the:", options: ["principal quantum number", "orbital quantum number l", "spin", "magnetic quantum number"], correctIndex: 1, explanation: "l describes the shape/orbital angular momentum." },
        { prompt: "The probability distribution in quantum mechanics tells us:", options: ["the exact path of a particle", "where a particle is likely to be found", "the mass of the particle", "the temperature"], correctIndex: 1, explanation: "It gives the likelihood of finding the particle at a location." },
        { prompt: "Observing which path a particle takes:", options: ["strengthens the interference pattern", "destroys the interference pattern", "has no effect", "creates new particles"], correctIndex: 1, explanation: "Detecting the path removes the wave-like interference." },
        { prompt: "For n = 1, the only allowed value of l is:", options: ["0", "1", "−1", "2"], correctIndex: 0, explanation: "l = 0 to n − 1 = 0 only." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Heisenberg's uncertainty principle states that we cannot simultaneously know exactly a particle's:", options: ["mass and charge", "position and momentum", "spin and colour", "energy and mass"], correctIndex: 1, answerKey: "Δx Δp ≥ h/4π: position and momentum cannot both be known exactly at the same time.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State Heisenberg's uncertainty principle in words and as an equation, and explain what it means physically.", answerKey: "It is impossible to measure both the position and the momentum of a particle exactly at the same time: Δx Δp ≥ h/4π, where Δx and Δp are the uncertainties in position and momentum. Physically, the more precisely one is known, the less precisely the other can be known; this is a fundamental limit of nature, not a fault of the instruments.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "For an electron with principal quantum number n = 2, list the allowed values of the orbital quantum number l and, for l = 1, the allowed values of the magnetic quantum number mₗ.", answerKey: "l ranges from 0 to n − 1 = 0 to 1, so l = 0 and l = 1. For l = 1, mₗ ranges from −l to +l: mₗ = −1, 0, +1.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The spin quantum number mₛ of an electron can only be:", options: ["0 or 1", "−1, 0 or +1", "+1/2 or −1/2", "1 to n"], correctIndex: 2, answerKey: "Electron spin projection mₛ is either +1/2 (spin up) or −1/2 (spin down).", marks: 2 },
        { type: "ESSAY", prompt: "Describe the four quantum numbers used to specify the state of an electron in an atom, stating what each represents and its allowed values, and explain the rules linking them.", answerKey: "The four quantum numbers are: (1) Principal quantum number n = 1, 2, 3, … — fixes the main energy level and the size of the orbit (n = 1 is lowest). (2) Orbital (angular momentum) quantum number l = 0, 1, …, n − 1 — gives the shape and the orbital angular momentum. (3) Magnetic quantum number mₗ = −l, …, 0, …, +l — gives the orientation of the orbital in a magnetic field. (4) Spin quantum number mₛ = +1/2 or −1/2 — gives the direction of the electron's spin. The rules link them: l is limited by n (0 ≤ l ≤ n − 1), and mₗ is limited by l (−l ≤ mₗ ≤ +l), while mₛ is always ±1/2 independent of the others. Reward all four with correct meanings, allowed values and the n → l → mₗ restrictions.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 33.3 Accelerators Create Matter from Energy (https://openstax.org/books/college-physics-2e/pages/33-3-accelerators-create-matter-from-energy)
    {
      slug: "particle-accelerators",
      title: "Particle Accelerators",
      objective:
        "By the end of the topic, learners should be able to describe how particle accelerators (linear accelerator, cyclotron, synchrotron) use electric and magnetic fields to give charged particles very high energy, and explain how collisions create new matter (E = mc²). (MoE Grade 12 Period VI, CONTENTS 2 'Particle Accelerators'.)",
      estimatedMinutes: 100,
      notes: `## What accelerators do

- A **particle accelerator** uses **electric fields to speed up** charged particles and **magnetic fields to steer** them, giving them very high kinetic energy.
- The fast particles are made to collide with a fixed target or with an oncoming beam (**colliding beams**).
- By **E = mc²**, the large collision energy can be converted into the **mass of new particles**, so accelerators create matter from energy and let physicists study subatomic particles.

## Types of accelerator

- **Linear accelerator (linac)** — a straight line of accelerating tubes; the particle is pushed forward as it passes each gap (e.g. SLAC). Good for electrons because a straight path avoids energy loss by radiation.
- **Cyclotron** — a fixed-frequency alternating field accelerates particles that spiral **outward** in a magnetic field, making larger and larger circles as they speed up.
- **Synchrotron** — the particles travel in a **fixed-radius ring**; the accelerating voltage frequency and the magnetic field are both increased as the particles speed up, keeping them on the ring (uses powerful, often superconducting, magnets).

\`\`\`svg A synchrotron ring accelerating particles
<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circular ring with particles accelerated around a fixed radius">
  <circle cx="80" cy="80" r="55" fill="none" stroke="#334155" stroke-width="6"/>
  <circle cx="80" cy="80" r="55" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 8"/>
  <circle cx="135" cy="80" r="5" fill="#dc2626"/>
  <polygon points="135,72 141,80 129,80" fill="#dc2626"/>
  <text x="55" y="84" font-size="9" fill="#334155">beam</text>
</svg>
\`\`\`

## Why high energy is needed

- To create a particle of mass m, the collision must supply at least energy **E = mc²**; heavier particles need higher energies.
- Higher energy also probes smaller distances, revealing finer structure of matter (deep inside the nucleus and nucleons).
- Colliding two beams head-on is more efficient than hitting a fixed target, because more of the energy is available to make new particles.

## Common errors

- **Thinking accelerators use magnetic fields to speed particles up** — magnetic fields only steer/bend; electric fields do the accelerating.
- **Believing new particles come from nothing** — they come from the collision energy via E = mc².
- **Confusing cyclotron and synchrotron** — cyclotron: spiral out; synchrotron: fixed-radius ring.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 33.3).** (a) Which field in an accelerator does the work to speed a charged particle up, and which field bends its path? (b) A collision must create a particle of mass 1.8 ×10⁻²⁷ kg. Estimate the minimum energy required (c = 3.0 ×10⁸ m/s).

**Part (a) — Roles of the fields.** The **electric field** accelerates the charged particle (does work on it, increasing its kinetic energy). The **magnetic field** exerts a force perpendicular to the motion, so it **bends/steers** the particle without changing its speed.

**Part (b) — Minimum energy.**
Step 1 — Use E = mc².
Step 2 — E = (1.8 ×10⁻²⁷ kg)(3.0 ×10⁸ m/s)² = (1.8 ×10⁻²⁷)(9.0 ×10¹⁶).
Step 3 — E = 1.62 ×10⁻¹⁰ J.

**Answer.** (a) Electric fields accelerate; magnetic fields steer. (b) At least 1.62 ×10⁻¹⁰ J of collision energy is needed to create the particle, since energy converts to mass by E = mc².`,
      quiz: [
        { prompt: "A particle accelerator speeds up:", options: ["neutral atoms", "charged particles", "photons only", "sound waves"], correctIndex: 1, explanation: "Accelerators act on charged particles." },
        { prompt: "In an accelerator, particles are speeded up by:", options: ["magnetic fields", "electric fields", "gravity", "friction"], correctIndex: 1, explanation: "Electric fields do the accelerating work." },
        { prompt: "In an accelerator, particles are steered/bent by:", options: ["electric fields", "magnetic fields", "sound", "heat"], correctIndex: 1, explanation: "Magnetic fields bend the path without changing speed." },
        { prompt: "New particles are created in collisions using the principle:", options: ["V = IR", "E = mc²", "F = ma", "PV = nRT"], correctIndex: 1, explanation: "Energy converts to mass via E = mc²." },
        { prompt: "A straight-line accelerator is called a:", options: ["cyclotron", "synchrotron", "linear accelerator (linac)", "reactor"], correctIndex: 2, explanation: "A linac accelerates along a straight line." },
        { prompt: "In a cyclotron the particles move in:", options: ["a straight line", "outward spirals", "a fixed-radius ring", "random paths"], correctIndex: 1, explanation: "Cyclotron particles spiral outward as they speed up." },
        { prompt: "In a synchrotron the particles travel in:", options: ["a straight line", "a fixed-radius ring", "outward spirals", "no path"], correctIndex: 1, explanation: "Synchrotrons keep particles on a fixed-radius ring." },
        { prompt: "A synchrotron keeps particles on the ring by increasing the magnetic field and the:", options: ["temperature", "accelerating voltage frequency", "particle mass", "ring radius"], correctIndex: 1, explanation: "Both the field and the AC frequency are raised together." },
        { prompt: "To create a heavier particle you need:", options: ["less energy", "more energy", "no energy", "lower speed"], correctIndex: 1, explanation: "E = mc²: greater mass needs greater energy." },
        { prompt: "Higher-energy particles can probe:", options: ["larger distances", "smaller distances/finer structure", "only the surface", "nothing"], correctIndex: 1, explanation: "Higher energy reveals smaller-scale structure." },
        { prompt: "Colliding two beams head-on rather than hitting a fixed target is:", options: ["less efficient", "more efficient at making new particles", "impossible", "the same"], correctIndex: 1, explanation: "More energy is available for new mass in colliding beams." },
        { prompt: "The magnetic force on a moving charge does no work because it acts:", options: ["along the motion", "perpendicular to the motion", "backwards", "randomly"], correctIndex: 1, explanation: "A perpendicular force changes direction, not speed." },
        { prompt: "SLAC is an example of a:", options: ["cyclotron", "synchrotron", "linear accelerator", "reactor"], correctIndex: 2, explanation: "SLAC is a linear accelerator." },
        { prompt: "Superconducting magnets are used in accelerators to:", options: ["cool the particles", "produce strong steering fields", "generate electricity", "slow particles"], correctIndex: 1, explanation: "Strong magnets steer high-energy particles." },
        { prompt: "The kinetic energy of the particles is provided by:", options: ["the magnetic field", "the electric field", "gravity", "the target"], correctIndex: 1, explanation: "The electric field accelerates and gives KE." },
        { prompt: "Accelerators are used to:", options: ["cook food", "study subatomic particles and forces", "purify water", "generate mains electricity"], correctIndex: 1, explanation: "They probe the fundamental structure of matter." },
        { prompt: "A linac is preferred for electrons because a circular path would cause:", options: ["heating of the target", "energy loss by radiation", "the beam to stop", "no acceleration"], correctIndex: 1, explanation: "Circular motion of light electrons radiates energy away." },
        { prompt: "In a cyclotron, as the particle speeds up its orbit radius:", options: ["decreases", "increases", "stays the same", "becomes zero"], correctIndex: 1, explanation: "Faster particles spiral outward to larger radii." },
        { prompt: "The idea 'accelerators create matter from energy' relies on mass being:", options: ["destroyed", "a form of energy (E = mc²)", "unrelated to energy", "always constant"], correctIndex: 1, explanation: "Mass and energy are equivalent." },
        { prompt: "A neutral particle in an accelerator's magnetic field is:", options: ["strongly bent", "not deflected by the magnetic force", "accelerated fastest", "destroyed"], correctIndex: 1, explanation: "The magnetic force acts on charge; a neutral particle feels none." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "In a particle accelerator, the electric field is used to ___ the particles and the magnetic field is used to ___ them.", options: ["steer; accelerate", "accelerate; steer", "cool; heat", "stop; start"], correctIndex: 1, answerKey: "Electric fields accelerate (do work); magnetic fields steer/bend the path.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain how a particle accelerator can create new particles that were not present before the collision.", answerKey: "The accelerator gives charged particles very high kinetic energy and makes them collide. By Einstein's mass-energy equivalence, E = mc², the large collision energy can be converted into the mass of new particles (m = E/c²). So new, often heavier, particles are created from the collision energy — the more energy supplied, the more (or heavier) particles can be made.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe the difference between a cyclotron and a synchrotron.", answerKey: "In a cyclotron a fixed-frequency alternating electric field accelerates the particles, which spiral outward in a magnetic field, moving in larger and larger circles as they speed up. In a synchrotron the particles travel in a ring of fixed radius; the frequency of the accelerating voltage and the strength of the magnetic field are both increased as the particles gain energy, keeping them on the same-radius ring.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "To create a more massive particle in a collision, the accelerator must supply:", options: ["less energy", "more energy", "the same energy", "no energy"], correctIndex: 1, answerKey: "Since E = mc², a greater mass requires a greater collision energy.", marks: 2 },
        { type: "ESSAY", prompt: "Describe the purpose of particle accelerators and the roles of electric and magnetic fields, name and distinguish three types of accelerator, and explain why very high energies are needed to study matter and to create new particles.", answerKey: "Particle accelerators speed charged particles to very high energies and collide them, so physicists can create and study subatomic particles and probe the fine structure of matter. Electric fields do the work to accelerate the particles (increasing their kinetic energy); magnetic fields exert a perpendicular force that steers/bends them without changing their speed. Three types: a linear accelerator (linac) accelerates particles along a straight line of tubes (good for electrons, avoiding radiation losses); a cyclotron accelerates particles that spiral outward in a magnetic field with a fixed-frequency field; a synchrotron keeps particles on a fixed-radius ring by increasing both the accelerating frequency and the magnetic field as they gain energy. High energies are needed because (i) to create a particle of mass m the collision must supply at least E = mc², so heavier particles need more energy, and (ii) higher-energy particles have shorter wavelengths and can probe smaller distances, revealing finer structure. Reward the purpose, the field roles, three distinguished accelerators and both reasons for high energy.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 31.2 Radiation Detection and Detectors (https://openstax.org/books/college-physics-2e/pages/31-2-radiation-detection-and-detectors)
    {
      slug: "detecting-instruments",
      title: "Detecting Instruments",
      objective:
        "By the end of the topic, learners should be able to describe instruments used to detect ionising radiation and particles — Geiger counter, photographic film, scintillator, cloud chamber and bubble chamber — and how each works. (MoE Grade 12 Period VI, CONTENTS 3 'Detecting instruments'.)",
      estimatedMinutes: 90,
      notes: `## How detectors work

- Radiation and charged particles are detected mainly through the **ionisation** they cause as they pass through matter, or through the **light (fluorescence)** they produce.
- Different detectors record the radiation as an electrical count, a track, or an image.

## The Geiger (Geiger-Müller) counter

- A **Geiger tube** is a conducting cylinder with a central wire, filled with a low-pressure gas at a high voltage.
- Radiation entering the tube **ionises the gas**, producing ion pairs that are attracted to the wire and cylinder, giving a pulse of current — a **count**.
- A Geiger counter measures the **rate/relative intensity** of radiation but does not identify the particle's type or energy.

## Photographic film and scintillators

- **Photographic film** — ionising radiation (e.g. X-rays) chemically alters the emulsion, exposing the film; widely used in medical/dental X-rays and in film badges that monitor a worker's dose.
- **Scintillator** — a material that **converts radiation energy into flashes of light**; the light can be amplified by a photomultiplier tube and gives information about the **energy, charge and type** of radiation.
- **Solid-state (semiconductor) detectors** convert the ionisation directly into an electrical signal.

## Track detectors: cloud and bubble chambers

- **Cloud chamber** — contains supersaturated vapour; a charged particle ionises the vapour along its path, and tiny droplets condense on the ions, showing a visible **track**.
- **Bubble chamber** — contains superheated liquid; a charged particle leaves a trail of tiny **bubbles** marking its path.
- In a magnetic field the tracks **curve**, and the curvature reveals the particle's charge and momentum.

| Detector | What it detects/records |
| --- | --- |
| Geiger counter | count-rate (relative intensity) |
| Photographic film | exposure/dose (image) |
| Scintillator | light flashes → energy, charge, type |
| Cloud chamber | visible condensation track |
| Bubble chamber | bubble track (curved in a field) |

## Common errors

- **Thinking a Geiger counter identifies the type of radiation** — it counts, but does not identify type or energy.
- **Confusing cloud and bubble chambers** — cloud chamber: droplets in vapour; bubble chamber: bubbles in liquid.
- **Forgetting that neutral particles leave no direct track** — only charged particles ionise and leave tracks.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 31.2).** A student wants to (a) measure how the count-rate of a radioactive source changes with distance, and (b) see the actual paths of charged particles and measure their charge. Which detector is suitable for each, and why?

**Part (a) — Measuring count-rate.** A **Geiger-Müller counter** is suitable. Radiation ionises the gas in the tube, producing current pulses that are counted, so the counter gives the count-rate (relative intensity) at each distance. It is quick and gives a numerical reading, even though it does not identify the type of radiation.

**Part (b) — Seeing tracks and finding charge.** A **cloud chamber** or **bubble chamber** is suitable. A charged particle ionises the vapour (cloud chamber) or superheated liquid (bubble chamber) along its path, leaving a visible track. Placing the chamber in a magnetic field makes the track curve; the direction of curving shows the sign of the charge and the amount of curving relates to its momentum.

**Answer.** (a) Use a Geiger counter to measure count-rate versus distance. (b) Use a cloud or bubble chamber (in a magnetic field) to see the tracks and determine the particles' charge.`,
      quiz: [
        { prompt: "Most detectors sense radiation through the ___ it causes.", options: ["heating", "ionisation", "colour", "sound"], correctIndex: 1, explanation: "Ionisation (and light) is how radiation is detected." },
        { prompt: "A Geiger tube contains a gas at:", options: ["low voltage", "high voltage", "no voltage", "boiling point"], correctIndex: 1, explanation: "A high voltage is applied across the gas-filled tube." },
        { prompt: "In a Geiger counter, radiation produces a count by:", options: ["heating the wire", "ionising the gas and causing a current pulse", "emitting light only", "melting the tube"], correctIndex: 1, explanation: "Ion pairs give a pulse of current — a count." },
        { prompt: "A Geiger counter measures the:", options: ["exact energy of each particle", "count-rate / relative intensity", "type of every particle", "temperature"], correctIndex: 1, explanation: "It counts but does not identify type or energy." },
        { prompt: "Photographic film detects radiation by:", options: ["counting pulses", "chemical change in the emulsion", "producing bubbles", "curving tracks"], correctIndex: 1, explanation: "Radiation exposes the film chemically." },
        { prompt: "Film badges are used to:", options: ["speed up particles", "monitor a worker's radiation dose", "generate current", "cool detectors"], correctIndex: 1, explanation: "Film badges track accumulated exposure." },
        { prompt: "A scintillator converts radiation energy into:", options: ["heat only", "flashes of light", "sound", "a magnetic field"], correctIndex: 1, explanation: "Scintillators produce light flashes." },
        { prompt: "The light from a scintillator is amplified by a:", options: ["Geiger tube", "photomultiplier tube", "cloud chamber", "battery"], correctIndex: 1, explanation: "A photomultiplier tube amplifies the faint light." },
        { prompt: "A scintillator can give information about the radiation's:", options: ["colour only", "energy, charge and type", "temperature", "mass number only"], correctIndex: 1, explanation: "Its output reveals energy, charge and type." },
        { prompt: "A cloud chamber shows a particle's path as a trail of:", options: ["bubbles", "condensed droplets", "sparks", "light beams"], correctIndex: 1, explanation: "Droplets condense on ions in the vapour." },
        { prompt: "A bubble chamber shows tracks as a trail of:", options: ["droplets in vapour", "bubbles in superheated liquid", "smoke", "electric sparks"], correctIndex: 1, explanation: "Bubbles form along the ionised path in the liquid." },
        { prompt: "In a magnetic field, the tracks of charged particles:", options: ["stay straight", "curve", "disappear", "become brighter"], correctIndex: 1, explanation: "The magnetic force curves the tracks." },
        { prompt: "The curvature of a track in a magnetic field reveals the particle's:", options: ["colour", "charge and momentum", "temperature", "mass number only"], correctIndex: 1, explanation: "Curvature gives the sign of charge and the momentum." },
        { prompt: "Which particle leaves NO direct track in a cloud chamber?", options: ["alpha particle", "beta particle", "a neutral particle", "a proton"], correctIndex: 2, explanation: "Only charged particles ionise and leave tracks." },
        { prompt: "A solid-state detector converts ionisation directly into:", options: ["light", "an electrical signal", "bubbles", "heat only"], correctIndex: 1, explanation: "Semiconductor detectors give a direct electrical signal." },
        { prompt: "Which detector is best for a quick count-rate reading?", options: ["bubble chamber", "cloud chamber", "Geiger counter", "photographic film"], correctIndex: 2, explanation: "The Geiger counter gives an immediate count-rate." },
        { prompt: "Which detector produces a visible image of particle paths?", options: ["Geiger counter", "cloud/bubble chamber", "film badge", "voltmeter"], correctIndex: 1, explanation: "Cloud and bubble chambers show tracks." },
        { prompt: "Dental and medical X-rays commonly use:", options: ["cloud chambers", "photographic film / detectors", "bubble chambers", "Geiger tubes only"], correctIndex: 1, explanation: "Film (and digital detectors) records X-ray images." },
        { prompt: "A cloud chamber uses vapour that is:", options: ["superheated", "supersaturated", "frozen", "boiling"], correctIndex: 1, explanation: "Supersaturated vapour condenses on the ions." },
        { prompt: "A bubble chamber uses a liquid that is:", options: ["supersaturated", "superheated", "frozen", "cold"], correctIndex: 1, explanation: "Superheated liquid forms bubbles along the track." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Which detector gives a count-rate but cannot identify the type or energy of the radiation?", options: ["scintillator", "Geiger-Müller counter", "bubble chamber", "cloud chamber"], correctIndex: 1, answerKey: "A Geiger counter counts ionising events (relative intensity) but does not identify particle type or energy.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain how a Geiger-Müller counter detects ionising radiation.", answerKey: "A Geiger tube is a gas-filled conducting cylinder with a central wire at a high voltage. When ionising radiation enters, it ionises the gas, producing ion pairs. The freed electrons and positive ions are attracted to the wire and cylinder, producing a pulse of current that is registered as a count. The rate of counts measures the relative intensity of the radiation.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe how a cloud chamber and a bubble chamber each reveal the path of a charged particle, and state what a magnetic field adds.", answerKey: "In a cloud chamber a charged particle ionises supersaturated vapour along its path, and tiny droplets condense on the ions, forming a visible track. In a bubble chamber a charged particle ionises a superheated liquid, leaving a trail of small bubbles. If a magnetic field is applied, the tracks curve; the direction of curving shows the sign of the particle's charge and the amount of curving relates to its momentum.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A scintillation detector works by:", options: ["counting current pulses in a gas", "converting radiation energy into flashes of light", "forming bubbles in a liquid", "exposing photographic film"], correctIndex: 1, answerKey: "A scintillator converts radiation energy into light flashes, which a photomultiplier amplifies; this can indicate energy, charge and type.", marks: 2 },
        { type: "ESSAY", prompt: "Describe three different instruments used to detect ionising radiation or subatomic particles, explaining the working principle of each and what information it provides.", answerKey: "Geiger-Müller counter: a gas-filled tube with a central wire at high voltage; radiation ionises the gas, producing current pulses counted as a rate — it gives the relative intensity/count-rate but not the type or energy. Scintillator (with photomultiplier): a material that converts radiation energy into flashes of light, which are amplified into an electrical signal — it can indicate the energy, charge and type of radiation. Cloud chamber: supersaturated vapour in which a charged particle ionises the gas so droplets condense along its path, giving a visible track (which curves in a magnetic field to reveal charge and momentum). Other acceptable answers: bubble chamber (bubbles in superheated liquid form tracks); photographic film (chemical exposure records dose/images, as in X-rays and film badges); solid-state detector (direct electrical signal from ionisation). Reward any three with correct working principles and the information each provides.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 33.2 The Four Basic Forces & 33.4 Particles, Patterns, and Conservation Laws (https://openstax.org/books/college-physics-2e/pages/33-2-the-four-basic-forces)
    {
      slug: "subatomic-reactions",
      title: "Subatomic Reactions: The Four Forces and Conservation Laws",
      objective:
        "By the end of the topic, learners should be able to identify the four fundamental interactions between particles of matter and apply the conservation laws that govern subatomic reactions. (MoE Grade 12 Period VI, CONTENTS 4 'Subatomic reactions' with objectives on the four basic interactions and conservation laws.)",
      estimatedMinutes: 100,
      notes: `## The four fundamental forces

All interactions between particles of matter are due to just **four basic forces**, which differ in strength, range and carrier particle.

| Force | Relative strength | Range | Carrier particle |
| --- | --- | --- | --- |
| Strong nuclear | 1 | short (< 10⁻¹⁵ m) | gluon |
| Electromagnetic | 10⁻² | infinite | photon |
| Weak nuclear | 10⁻¹³ | very short (< 10⁻¹⁸ m) | W⁺, W⁻, Z⁰ |
| Gravitational | 10⁻³⁸ | infinite | graviton (conjectured) |

- **Strong nuclear force** — the strongest; binds protons and neutrons (and quarks) in the nucleus; very short range.
- **Electromagnetic force** — acts between charges; holds electrons to nuclei; infinite range.
- **Weak nuclear force** — responsible for beta decay and changing one type of particle into another; very short range.
- **Gravitational force** — the weakest, but infinite range and always attractive; dominates on the astronomical scale.
- Forces act through the **exchange of carrier (virtual) particles**; a massless carrier (photon, graviton) gives an infinite-range force, while a massive carrier gives a short-range force.

## Conservation laws in subatomic reactions

In every subatomic reaction certain quantities are **conserved** (equal before and after):
- **Conservation of energy** (including mass-energy, E = mc²).
- **Conservation of momentum.**
- **Conservation of electric charge** — total charge is unchanged.
- **Conservation of nucleon (baryon) number** — the total number of baryons (protons, neutrons) is unchanged.
- **Conservation of lepton number** — the total number of leptons (electrons, neutrinos) is unchanged.

- A proposed reaction is **allowed only if it obeys all** the conservation laws; if any is broken, the reaction cannot occur.

## Common errors

- **Ranking the forces wrongly** — strong (strongest) > electromagnetic > weak > gravity (weakest).
- **Thinking gravity is strong** — it is by far the weakest of the four forces (but has infinite range).
- **Ignoring a conservation law** — a reaction must conserve energy, momentum, charge, baryon number and lepton number.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 33.2 and 33.4).** (a) List the four fundamental forces from strongest to weakest. (b) A student writes a proposed reaction in which the total electric charge before is +1 but the total charge after is 0. State whether the reaction can occur and why.

**Part (a) — Order of forces.** From strongest to weakest: **strong nuclear (strength 1) → electromagnetic (10⁻²) → weak nuclear (10⁻¹³) → gravitational (10⁻³⁸)**.

**Part (b) — Testing the reaction.** Electric charge must be **conserved** in any subatomic reaction: the total charge after must equal the total charge before. Here the charge changes from +1 to 0, so charge is not conserved. Therefore the reaction is **forbidden** — it cannot occur, no matter how much energy is supplied.

**Answer.** (a) Strong > electromagnetic > weak > gravitational. (b) The reaction cannot occur because it violates the conservation of electric charge (+1 before, 0 after).`,
      quiz: [
        { prompt: "How many fundamental forces act between particles of matter?", options: ["two", "three", "four", "six"], correctIndex: 2, explanation: "There are four fundamental forces." },
        { prompt: "The strongest of the four forces is the:", options: ["gravitational force", "electromagnetic force", "weak nuclear force", "strong nuclear force"], correctIndex: 3, explanation: "The strong nuclear force is the strongest (strength 1)." },
        { prompt: "The weakest of the four forces is:", options: ["gravity", "electromagnetism", "the weak force", "the strong force"], correctIndex: 0, explanation: "Gravity is by far the weakest (10⁻³⁸)." },
        { prompt: "The force that binds the nucleus together is the:", options: ["gravitational force", "strong nuclear force", "weak force", "electromagnetic force"], correctIndex: 1, explanation: "The strong nuclear force holds the nucleus together." },
        { prompt: "The force responsible for beta decay is the:", options: ["strong force", "weak nuclear force", "gravity", "electromagnetic force"], correctIndex: 1, explanation: "The weak nuclear force governs beta decay." },
        { prompt: "The electromagnetic force has a range that is:", options: ["very short", "infinite", "zero", "one metre"], correctIndex: 1, explanation: "Electromagnetism has infinite range." },
        { prompt: "The carrier particle of the electromagnetic force is the:", options: ["gluon", "photon", "graviton", "W boson"], correctIndex: 1, explanation: "The photon carries the electromagnetic force." },
        { prompt: "The strong force has a range that is:", options: ["infinite", "very short (< 10⁻¹⁵ m)", "one metre", "unlimited"], correctIndex: 1, explanation: "The strong force acts only over nuclear distances." },
        { prompt: "Gravity, though weakest, dominates on the astronomical scale because it is:", options: ["repulsive", "always attractive with infinite range", "very short range", "carried by gluons"], correctIndex: 1, explanation: "Its infinite range and always-attractive nature add up over large masses." },
        { prompt: "Forces act through the exchange of:", options: ["photons only", "carrier (virtual) particles", "electrons only", "neutrons"], correctIndex: 1, explanation: "Each force is mediated by exchange of a carrier particle." },
        { prompt: "A massless carrier particle gives a force of:", options: ["short range", "infinite range", "zero range", "one metre range"], correctIndex: 1, explanation: "Massless carriers (photon, graviton) give infinite range." },
        { prompt: "In a subatomic reaction, total electric charge is:", options: ["created", "destroyed", "conserved", "doubled"], correctIndex: 2, explanation: "Charge is always conserved." },
        { prompt: "Which quantity is conserved in subatomic reactions?", options: ["colour", "momentum", "temperature", "brightness"], correctIndex: 1, explanation: "Momentum (and energy, charge, baryon and lepton number) is conserved." },
        { prompt: "Conservation of baryon number means the total number of ___ is unchanged.", options: ["electrons", "photons", "baryons (e.g. protons, neutrons)", "quarks lost"], correctIndex: 2, explanation: "Baryon number is conserved." },
        { prompt: "Conservation of lepton number concerns particles such as:", options: ["protons", "electrons and neutrinos", "neutrons", "gluons"], correctIndex: 1, explanation: "Leptons include electrons and neutrinos." },
        { prompt: "A proposed reaction that breaks a conservation law:", options: ["still occurs", "cannot occur", "occurs slowly", "reverses time"], correctIndex: 1, explanation: "It is forbidden if any conservation law is violated." },
        { prompt: "The relative strength of the weak force is about:", options: ["1", "10⁻²", "10⁻¹³", "10⁻³⁸"], correctIndex: 2, explanation: "The weak force strength is about 10⁻¹³." },
        { prompt: "Which correctly orders the forces strongest to weakest?", options: ["strong, electromagnetic, weak, gravity", "gravity, weak, electromagnetic, strong", "electromagnetic, strong, gravity, weak", "weak, strong, gravity, electromagnetic"], correctIndex: 0, explanation: "Strong > electromagnetic > weak > gravity." },
        { prompt: "Mass-energy conservation in reactions uses:", options: ["V = IR", "E = mc²", "F = ma", "PV = nRT"], correctIndex: 1, explanation: "Energy includes mass-energy via E = mc²." },
        { prompt: "The carrier particles of the weak force are the:", options: ["photons", "gluons", "W and Z bosons", "gravitons"], correctIndex: 2, explanation: "W⁺, W⁻ and Z⁰ carry the weak force." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Which of the four fundamental forces is the strongest?", options: ["gravity", "electromagnetic force", "weak nuclear force", "strong nuclear force"], correctIndex: 3, answerKey: "The strong nuclear force is the strongest (relative strength 1); gravity is the weakest.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Name the four fundamental forces and order them from strongest to weakest.", answerKey: "The four fundamental forces are the strong nuclear, electromagnetic, weak nuclear and gravitational forces. Ordered strongest to weakest: strong nuclear (1) > electromagnetic (10⁻²) > weak nuclear (10⁻¹³) > gravitational (10⁻³⁸).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State three quantities that are conserved in every subatomic reaction.", answerKey: "Any three of: energy (including mass-energy, E = mc²), momentum, electric charge, nucleon/baryon number, and lepton number.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "A proposed subatomic reaction has a total charge of +2 before and +1 after. This reaction:", options: ["can occur", "cannot occur because charge is not conserved", "occurs only slowly", "creates energy"], correctIndex: 1, answerKey: "Electric charge must be conserved; since it changes (+2 → +1), the reaction is forbidden.", marks: 2 },
        { type: "ESSAY", prompt: "Describe the four fundamental forces of nature (relative strength, range and role of each) and explain how conservation laws determine whether a subatomic reaction is possible.", answerKey: "The four fundamental forces are: (1) Strong nuclear force — the strongest (relative strength 1), very short range (< 10⁻¹⁵ m), binds protons, neutrons and quarks in the nucleus (carrier: gluon). (2) Electromagnetic force — strength ~10⁻², infinite range, acts between charges and holds electrons to nuclei (carrier: photon). (3) Weak nuclear force — strength ~10⁻¹³, very short range, responsible for beta decay and particle transformations (carriers: W and Z bosons). (4) Gravitational force — the weakest (~10⁻³⁸) but infinite range and always attractive, dominating on the astronomical scale (carrier: graviton, conjectured). Forces act by exchanging carrier particles; massless carriers give infinite range. In any subatomic reaction, quantities such as energy (mass-energy), momentum, electric charge, baryon (nucleon) number and lepton number must be conserved — equal before and after. A proposed reaction is allowed only if it obeys all these conservation laws; if any is violated (e.g. charge changes), the reaction cannot occur, no matter how much energy is available. Reward the four forces with strengths/ranges/roles and a correct explanation of conservation laws deciding allowed reactions.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 29.2 The Photoelectric Effect (https://openstax.org/books/college-physics-2e/pages/29-2-the-photoelectric-effect)
    {
      slug: "einsteins-photoelectric-equation",
      title: "Einstein's Photoelectric Equation",
      objective:
        "By the end of the topic, learners should be able to state Einstein's photoelectric equation KE_max = hf − W, define the work function and threshold frequency, and use the equation (including the stopping potential) in calculations. (MoE Grade 12 Period VI, CONTENTS 'Einstein's photoelectric equation'.)",
      estimatedMinutes: 100,
      notes: `## Photons and the photoelectric effect

- Light is made of **photons**, each carrying energy **E = h f**, where h = 6.63 ×10⁻³⁴ J·s (Planck's constant) and f is the frequency.
- In the **photoelectric effect**, a photon striking a metal surface gives all its energy to a single electron; if this is enough, the electron is ejected (a **photoelectron**).

## Einstein's photoelectric equation

- **KE_max = h f − W**, where:
- **KE_max** — the maximum kinetic energy of an emitted electron,
- **h f** — the energy of the incident photon,
- **W** — the **work function**, the minimum energy needed to free an electron from the metal.
- The equation is a statement of **energy conservation**: photon energy = energy to escape + kinetic energy left over.

## Threshold frequency and stopping potential

- **Threshold frequency (f₀)** — the minimum frequency for emission; at f₀ the electron just escapes with zero kinetic energy, so **W = h f₀**.
- Below f₀ (h f < W) **no electrons** are emitted, however bright the light.
- The **stopping potential (V_s)** — the reverse voltage that just stops the fastest electrons: **e V_s = KE_max = h f − W**.
- Increasing the frequency raises KE_max; increasing the **intensity** (brightness) increases the **number** of electrons, not their maximum energy.

## Common errors

- **Writing KE_max = hf + W** — the work function is subtracted, not added.
- **Thinking brighter light gives faster electrons** — brightness gives more electrons; higher frequency gives faster electrons.
- **Forgetting no emission below the threshold frequency** — hf must exceed W.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 29.2).** Light of frequency 1.00 ×10¹⁵ Hz falls on a metal of work function W = 3.00 ×10⁻¹⁹ J. Take h = 6.63 ×10⁻³⁴ J·s and e = 1.60 ×10⁻¹⁹ C. Find (a) the maximum kinetic energy of the emitted electrons and (b) the stopping potential.

**Part (a) — Maximum kinetic energy.**
Step 1 — Photon energy: hf = (6.63 ×10⁻³⁴)(1.00 ×10¹⁵) = 6.63 ×10⁻¹⁹ J.
Step 2 — Einstein's equation: KE_max = hf − W = 6.63 ×10⁻¹⁹ − 3.00 ×10⁻¹⁹ = 3.63 ×10⁻¹⁹ J.

**Part (b) — Stopping potential.**
Step 1 — e V_s = KE_max, so V_s = KE_max / e.
Step 2 — V_s = 3.63 ×10⁻¹⁹ / 1.60 ×10⁻¹⁹ = 2.27 V.

**Answer.** (a) The maximum kinetic energy is 3.63 ×10⁻¹⁹ J. (b) The stopping potential is 2.27 V — the reverse voltage that just prevents the fastest electrons from reaching the collector.`,
      quiz: [
        { prompt: "A photon has energy given by:", options: ["E = h/f", "E = hf", "E = f/h", "E = h + f"], correctIndex: 1, explanation: "E = hf." },
        { prompt: "Planck's constant h is about:", options: ["6.63 ×10⁻³⁴ J·s", "1.6 ×10⁻¹⁹ J·s", "3.0 ×10⁸ J·s", "9.1 ×10⁻³¹ J·s"], correctIndex: 0, explanation: "h = 6.63 ×10⁻³⁴ J·s." },
        { prompt: "Einstein's photoelectric equation is:", options: ["KE_max = hf + W", "KE_max = hf − W", "KE_max = W − hf", "KE_max = hf × W"], correctIndex: 1, explanation: "KE_max = hf − W." },
        { prompt: "The work function W is the:", options: ["kinetic energy of the electron", "minimum energy to free an electron from the metal", "photon energy", "stopping potential"], correctIndex: 1, explanation: "W is the minimum energy needed to remove an electron." },
        { prompt: "Einstein's equation expresses conservation of:", options: ["charge", "energy", "momentum", "mass only"], correctIndex: 1, explanation: "Photon energy = escape energy + kinetic energy." },
        { prompt: "The threshold frequency f₀ satisfies:", options: ["W = hf₀", "W = f₀/h", "W = h/f₀", "W = hf₀²"], correctIndex: 0, explanation: "At threshold KE = 0, so W = hf₀." },
        { prompt: "Below the threshold frequency, the number of electrons emitted is:", options: ["large", "zero", "maximum", "unchanged"], correctIndex: 1, explanation: "No emission if hf < W." },
        { prompt: "Increasing the light intensity (above threshold) increases the:", options: ["maximum KE", "number of electrons emitted", "photon frequency", "work function"], correctIndex: 1, explanation: "Brightness increases the number of photoelectrons." },
        { prompt: "Increasing the frequency (above threshold) increases the electrons':", options: ["number only", "maximum kinetic energy", "charge", "mass"], correctIndex: 1, explanation: "Higher f gives higher KE_max." },
        { prompt: "The stopping potential V_s satisfies:", options: ["e V_s = KE_max", "e V_s = W", "e V_s = hf", "V_s = h/e"], correctIndex: 0, explanation: "e V_s = KE_max = hf − W." },
        { prompt: "If hf = 5.0 ×10⁻¹⁹ J and W = 2.0 ×10⁻¹⁹ J, KE_max is:", options: ["7.0 ×10⁻¹⁹ J", "3.0 ×10⁻¹⁹ J", "2.5 ×10⁻¹⁹ J", "0 J"], correctIndex: 1, explanation: "KE_max = 5.0 − 2.0 = 3.0 ×10⁻¹⁹ J." },
        { prompt: "A photon whose energy equals the work function ejects an electron with kinetic energy:", options: ["maximum", "zero", "negative", "equal to W"], correctIndex: 1, explanation: "At threshold, KE = hf − W = 0." },
        { prompt: "The photoelectric effect shows light behaving as:", options: ["a wave only", "particles (photons)", "sound", "a magnetic field"], correctIndex: 1, explanation: "It reveals the particle (photon) nature of light." },
        { prompt: "One photon interacts with:", options: ["many electrons", "one electron, giving all its energy", "no electron", "the nucleus"], correctIndex: 1, explanation: "A single photon gives its energy to a single electron." },
        { prompt: "For a metal with W = 3.2 ×10⁻¹⁹ J, the threshold frequency is about:", options: ["4.8 ×10¹⁴ Hz", "2.1 ×10¹⁵ Hz", "6.6 ×10⁻³⁴ Hz", "3.0 ×10⁸ Hz"], correctIndex: 0, explanation: "f₀ = W/h = 3.2 ×10⁻¹⁹ / 6.63 ×10⁻³⁴ = 4.8 ×10¹⁴ Hz." },
        { prompt: "If a stopping potential of 1.5 V just stops the electrons, KE_max equals:", options: ["1.5 J", "2.4 ×10⁻¹⁹ J", "1.6 ×10⁻¹⁹ J", "9.4 J"], correctIndex: 1, explanation: "KE_max = eV_s = 1.6 ×10⁻¹⁹ × 1.5 = 2.4 ×10⁻¹⁹ J." },
        { prompt: "Brighter light of the same (below-threshold) frequency:", options: ["emits electrons", "still emits no electrons", "increases KE_max", "changes the work function"], correctIndex: 1, explanation: "Below threshold, brightness cannot cause emission." },
        { prompt: "The energy of the incident photon in Einstein's equation is the term:", options: ["W", "hf", "KE_max", "eV_s"], correctIndex: 1, explanation: "hf is the photon energy." },
        { prompt: "A higher work function means the threshold frequency is:", options: ["lower", "higher", "unchanged", "zero"], correctIndex: 1, explanation: "f₀ = W/h increases with W." },
        { prompt: "The photoelectric effect could NOT be explained by treating light as:", options: ["photons", "a continuous wave only", "quanta", "particles"], correctIndex: 1, explanation: "The wave-only model fails to explain the threshold and instantaneous emission." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "In Einstein's photoelectric equation KE_max = hf − W, the term W represents:", options: ["the photon energy", "the maximum kinetic energy", "the work function", "the stopping potential"], correctIndex: 2, answerKey: "W is the work function — the minimum energy needed to free an electron from the metal.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State Einstein's photoelectric equation, defining each term, and explain what it says about energy.", answerKey: "KE_max = hf − W, where hf is the energy of the incident photon (h = Planck's constant, f = frequency), W is the work function (minimum energy to free an electron), and KE_max is the maximum kinetic energy of the emitted electron. It is a statement of conservation of energy: the photon's energy is used partly to free the electron (W) and the rest becomes the electron's kinetic energy.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Light of photon energy 6.0 ×10⁻¹⁹ J strikes a metal of work function 3.6 ×10⁻¹⁹ J. Find the maximum kinetic energy of the emitted electrons and the stopping potential (e = 1.6 ×10⁻¹⁹ C).", answerKey: "KE_max = hf − W = 6.0 ×10⁻¹⁹ − 3.6 ×10⁻¹⁹ = 2.4 ×10⁻¹⁹ J. Stopping potential V_s = KE_max/e = 2.4 ×10⁻¹⁹ / 1.6 ×10⁻¹⁹ = 1.5 V.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Increasing the intensity (brightness) of light above the threshold frequency increases:", options: ["the maximum kinetic energy of each electron", "the number of electrons emitted per second", "the work function", "the threshold frequency"], correctIndex: 1, answerKey: "Greater intensity means more photons, so more electrons are emitted; the maximum KE depends on frequency, not intensity.", marks: 2 },
        { type: "ESSAY", prompt: "Explain how Einstein's photoelectric equation accounts for the main observations of the photoelectric effect: the existence of a threshold frequency, the effect of increasing frequency, and the effect of increasing intensity. Include the meaning of the stopping potential.", answerKey: "Einstein treated light as photons of energy hf, each giving all its energy to one electron; the equation KE_max = hf − W (with W the work function) follows from energy conservation. Threshold frequency: emission only occurs if the photon energy exceeds the work function (hf > W); at the threshold frequency f₀, hf₀ = W and the electron just escapes with zero kinetic energy, so below f₀ no electrons are emitted however bright the light. Increasing frequency: a higher frequency means a more energetic photon, so KE_max = hf − W increases — the emitted electrons are faster. Increasing intensity (above threshold): brighter light delivers more photons per second, so more electrons are emitted per second, but each photon still has the same energy, so the maximum kinetic energy is unchanged. The stopping potential V_s is the reverse voltage that just stops the fastest electrons, with eV_s = KE_max = hf − W, providing a way to measure KE_max. Reward the photon model, correct explanation of threshold, frequency and intensity effects, and the stopping-potential relation.", marks: 8 },
      ],
    },
  ],
};
