import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 10,
// Semester Two, Period VI: Properties of Matter. Topics follow the syllabus
// CONTENTS item by item: 1. states of matter; 2. structure of matter (atoms
// and molecules); 3. kinetic theory; 4. forces between molecules (cohesion
// and adhesion); 5. elasticity and Hooke's law (Young's modulus); 6. surface
// tension; 7. viscosity and diffusion.
export const physicsG10P6: PeriodContent = {
  grade: 10,
  number: 6,
  title: "Properties of Matter",
  summary:
    "Period VI of the MoE Grade 10 Physics syllabus. Learners study the states and structure of matter, the kinetic theory, the forces between molecules (cohesion and adhesion), elasticity and Hooke's law with Young's modulus, surface tension, and viscosity and diffusion.",
  topics: [
    // source: OpenStax — Chemistry 2e, 1.2 Phases and Classification of Matter (https://openstax.org/books/chemistry-2e/pages/1-2-phases-and-classification-of-matter)
    {
      slug: "states-of-matter",
      title: "The States of Matter",
      objective:
        "By the end of the topic, learners should be able to name the states of matter and describe the properties of solids, liquids and gases in terms of shape, volume and compressibility. (MoE Grade 10 Period VI, CONTENTS 1 'The states of matter'.)",
      estimatedMinutes: 90,
      notes: `## The states of matter

- Matter commonly exists in three states (phases): **solid, liquid and gas**.
- A fourth state, **plasma**, exists in stars and contains many electrically charged particles.

## Properties of the three states

| Property | Solid | Liquid | Gas |
| --- | --- | --- | --- |
| Shape | fixed (definite) | takes shape of container | fills whole container |
| Volume | fixed | fixed | fills whole container |
| Compressible? | almost none | very little | easily compressed |
| Flows? | no | yes | yes |

- **Solid** — rigid, with a definite shape and volume.
- **Liquid** — flows and takes the shape of its container, but keeps a nearly constant volume and a flat upper surface.
- **Gas** — takes both the shape and the volume of its container; can be compressed.

## Changes of state

- Solids, liquids and gases can be changed into one another by heating or cooling:
- **melting** (solid → liquid), **freezing** (liquid → solid),
- **evaporation/boiling** (liquid → gas), **condensation** (gas → liquid),
- **sublimation** (solid → gas directly).

## Common errors

- **Saying a liquid has no fixed volume** — a liquid keeps its volume but not its shape.
- **Thinking gases cannot be compressed** — gases are easily compressed because their particles are far apart.
- **Forgetting plasma** — the fourth state, found in stars and lightning.`,
      workedExample: `**Problem.** Classify each of the following by its state of matter and justify using shape and volume: (i) a block of ice, (ii) water in a cup, (iii) the air in a football.

**Step 1 — Ice.** It has a definite shape and a definite volume and is rigid → a **solid**.

**Step 2 — Water in a cup.** It takes the shape of the cup but keeps its own volume, with a flat surface → a **liquid**.

**Step 3 — Air in a football.** It fills the whole ball, taking its shape and volume, and can be compressed by pumping → a **gas**.

**Answer.** (i) solid, (ii) liquid, (iii) gas. The distinction is made by whether shape and volume are fixed and whether the substance can be compressed.`,
      quiz: [
        { prompt: "The three common states of matter are:", options: ["solid, liquid, plasma", "solid, liquid, gas", "solid, gas, energy", "liquid, gas, plasma"], correctIndex: 1, explanation: "The three common states are solid, liquid and gas." },
        { prompt: "A solid has:", options: ["no fixed shape", "a definite shape and volume", "no fixed volume", "the shape of its container"], correctIndex: 1, explanation: "Solids are rigid with definite shape and volume." },
        { prompt: "A liquid takes the ___ of its container.", options: ["volume", "shape", "mass", "colour"], correctIndex: 1, explanation: "A liquid takes the container's shape but keeps its own volume." },
        { prompt: "A gas fills:", options: ["only the bottom", "the whole container", "a fixed volume", "a flat surface"], correctIndex: 1, explanation: "A gas takes both the shape and volume of its container." },
        { prompt: "Which state is most easily compressed?", options: ["solid", "liquid", "gas", "none"], correctIndex: 2, explanation: "Gases are easily compressed; particles are far apart." },
        { prompt: "The fourth state of matter, found in stars, is:", options: ["ice", "plasma", "steam", "vapour"], correctIndex: 1, explanation: "Plasma is the fourth state, with charged particles." },
        { prompt: "A liquid keeps a nearly constant:", options: ["shape", "volume", "container", "temperature"], correctIndex: 1, explanation: "Liquids keep their volume but not their shape." },
        { prompt: "The change from solid to liquid is called:", options: ["melting", "freezing", "boiling", "condensation"], correctIndex: 0, explanation: "Solid → liquid is melting." },
        { prompt: "The change from gas to liquid is called:", options: ["evaporation", "condensation", "sublimation", "melting"], correctIndex: 1, explanation: "Gas → liquid is condensation." },
        { prompt: "The change from solid straight to gas is:", options: ["melting", "sublimation", "boiling", "freezing"], correctIndex: 1, explanation: "Solid → gas directly is sublimation." },
        { prompt: "Which has a definite volume but no definite shape?", options: ["solid", "liquid", "gas", "plasma"], correctIndex: 1, explanation: "A liquid has fixed volume but takes the container's shape." },
        { prompt: "Freezing is the change from:", options: ["liquid to solid", "solid to liquid", "gas to liquid", "liquid to gas"], correctIndex: 0, explanation: "Liquid → solid is freezing." },
        { prompt: "A block of wood is an example of a:", options: ["solid", "liquid", "gas", "plasma"], correctIndex: 0, explanation: "Wood is rigid with definite shape — a solid." },
        { prompt: "Which state flows and can be poured but keeps its volume?", options: ["solid", "liquid", "gas", "plasma"], correctIndex: 1, explanation: "Liquids flow and pour but keep a fixed volume." },
        { prompt: "The air inside a balloon is a:", options: ["solid", "liquid", "gas", "plasma"], correctIndex: 2, explanation: "Air fills the balloon and is compressible — a gas." },
        { prompt: "Which change turns a liquid into a gas?", options: ["freezing", "melting", "evaporation/boiling", "condensation"], correctIndex: 2, explanation: "Liquid → gas is evaporation or boiling." },
        { prompt: "Solids are difficult to compress because their particles are:", options: ["far apart", "close together", "charged", "moving fast"], correctIndex: 1, explanation: "Closely packed particles resist compression." },
        { prompt: "A liquid surface at rest is usually:", options: ["curved upward", "flat and horizontal", "vertical", "spherical"], correctIndex: 1, explanation: "A liquid settles with a flat, horizontal upper surface." },
        { prompt: "Which state has neither fixed shape nor fixed volume?", options: ["solid", "liquid", "gas", "crystal"], correctIndex: 2, explanation: "A gas has no fixed shape or volume." },
        { prompt: "Lightning contains which state of matter?", options: ["solid", "liquid", "plasma", "ice"], correctIndex: 2, explanation: "Lightning is a form of plasma." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the three common states of matter and give one property of each in terms of shape and volume.", answerKey: "Solid — definite shape and volume (rigid). Liquid — definite volume, takes the shape of its container. Gas — takes both the shape and volume of its container (fills it, compressible).", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which state of matter can be compressed most easily?", options: ["solid", "liquid", "gas", "crystal"], correctIndex: 2, answerKey: "Gases are the most compressible because their particles are far apart.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Name the change of state for (i) liquid to gas and (ii) gas to liquid.", answerKey: "(i) evaporation/boiling; (ii) condensation.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "A substance that keeps its volume but takes the shape of its container is a:", options: ["solid", "liquid", "gas", "plasma"], correctIndex: 1, answerKey: "That describes a liquid.", marks: 2 },
        { type: "ESSAY", prompt: "Compare the properties of solids, liquids and gases in terms of shape, volume and compressibility, and describe how heating and cooling change matter from one state to another.", answerKey: "Solid: fixed shape and volume, almost incompressible. Liquid: fixed volume, takes container shape, slightly compressible, flows. Gas: no fixed shape or volume, fills and takes container's volume, easily compressed. Changes of state: heating causes melting (solid→liquid) and evaporation/boiling (liquid→gas); cooling causes condensation (gas→liquid) and freezing (liquid→solid); solids can sublime directly to gas. Reward the property comparison and correct named changes of state.", marks: 8 },
      ],
    },
    // source: OpenStax — Chemistry 2e, 2.1 Early Ideas in Atomic Theory (https://openstax.org/books/chemistry-2e/pages/2-1-early-ideas-in-atomic-theory)
    {
      slug: "structure-of-matter",
      title: "The Structure of Matter: Atoms and Molecules",
      objective:
        "By the end of the topic, learners should be able to state the main ideas of the atomic theory, distinguish between an atom and a molecule, and distinguish elements from compounds. (MoE Grade 10 Period VI, CONTENTS 2 'The structure of matter'.)",
      estimatedMinutes: 90,
      notes: `## Matter is made of particles

- All matter is made of tiny particles called **atoms**.
- **Atom** — the smallest particle of an element that can take part in a chemical change.
- **Molecule** — two or more atoms chemically joined (bonded) together.

## Dalton's atomic theory (main ideas)

1. Matter is composed of extremely small particles called **atoms**.
2. All atoms of a given **element** are alike (same characteristic properties); atoms of different elements differ.
3. A **compound** consists of atoms of two or more elements combined in a small, whole-number ratio.
4. Atoms are **neither created nor destroyed** in a chemical change; they are only rearranged.

## Elements and compounds

- **Element** — a substance made of only one type of atom (e.g. copper, oxygen, hydrogen).
- **Compound** — a substance whose molecules contain atoms of two or more different elements in a fixed ratio (e.g. water H₂O, carbon dioxide CO₂).

## Atoms vs molecules

| Feature | Atom | Molecule |
| --- | --- | --- |
| What it is | smallest particle of an element | two or more atoms bonded together |
| Example | H, O, Cu | H₂, O₂, H₂O, CO₂ |
| Can be single element? | yes (it is one element) | yes (O₂) or a compound (H₂O) |

- A molecule of an **element** contains atoms of the same kind (O₂, N₂).
- A molecule of a **compound** contains atoms of different kinds (H₂O, CO₂).

## Common errors

- **Thinking atoms and molecules are the same** — a molecule is made of two or more atoms bonded together.
- **Saying every molecule is a compound** — O₂ is a molecule but not a compound (only one element).
- **Believing atoms are destroyed in reactions** — they are only rearranged.`,
      workedExample: `**Problem.** Classify each of the following as an atom, a molecule of an element, or a molecule of a compound: (i) He, (ii) O₂, (iii) H₂O, (iv) CO₂.

**Step 1 — He.** A single helium particle, one element, not bonded to another → an **atom**.

**Step 2 — O₂.** Two oxygen atoms bonded together, same element → a **molecule of an element**.

**Step 3 — H₂O.** Two hydrogen atoms and one oxygen atom bonded, different elements → a **molecule of a compound**.

**Step 4 — CO₂.** One carbon and two oxygen atoms bonded, different elements → a **molecule of a compound**.

**Answer.** He = atom; O₂ = molecule of an element; H₂O and CO₂ = molecules of compounds. A molecule needs two or more atoms bonded; a compound needs atoms of different elements.`,
      quiz: [
        { prompt: "The smallest particle of an element that can take part in a chemical change is a(n):", options: ["molecule", "atom", "compound", "mixture"], correctIndex: 1, explanation: "An atom is the smallest particle of an element." },
        { prompt: "A molecule is:", options: ["a single atom", "two or more atoms bonded together", "a type of element", "a mixture"], correctIndex: 1, explanation: "A molecule is two or more atoms chemically joined." },
        { prompt: "According to Dalton, all atoms of a given element are:", options: ["different", "alike", "molecules", "compounds"], correctIndex: 1, explanation: "Atoms of one element share the same characteristic properties." },
        { prompt: "An element is made of:", options: ["many kinds of atoms", "only one type of atom", "molecules of compounds", "mixtures"], correctIndex: 1, explanation: "An element contains only one kind of atom." },
        { prompt: "A compound contains atoms of:", options: ["one element only", "two or more elements in a fixed ratio", "no elements", "only metals"], correctIndex: 1, explanation: "A compound combines two or more elements in a fixed whole-number ratio." },
        { prompt: "Which is a molecule of an element?", options: ["H₂O", "CO₂", "O₂", "NaCl"], correctIndex: 2, explanation: "O₂ is two atoms of the same element bonded together." },
        { prompt: "Which is a molecule of a compound?", options: ["O₂", "N₂", "H₂O", "He"], correctIndex: 2, explanation: "H₂O contains different elements — a compound." },
        { prompt: "In a chemical change, atoms are:", options: ["created", "destroyed", "rearranged", "made into energy"], correctIndex: 2, explanation: "Atoms are neither created nor destroyed, only rearranged." },
        { prompt: "Water, H₂O, is a:", options: ["element", "compound", "single atom", "mixture"], correctIndex: 1, explanation: "Water contains hydrogen and oxygen — a compound." },
        { prompt: "The chemical symbol Cu represents an:", options: ["molecule", "atom of an element (copper)", "compound", "mixture"], correctIndex: 1, explanation: "Cu is the element copper (its atoms)." },
        { prompt: "How many atoms are in one molecule of carbon dioxide (CO₂)?", options: ["1", "2", "3", "4"], correctIndex: 2, explanation: "One carbon + two oxygen = 3 atoms." },
        { prompt: "Which statement is true?", options: ["Every molecule is a compound", "Every compound is a molecule of different elements", "Atoms are the largest particles", "Elements contain many kinds of atoms"], correctIndex: 1, explanation: "Compounds are molecules of different elements; but not every molecule (e.g. O₂) is a compound." },
        { prompt: "A substance made of identical atoms is a(n):", options: ["compound", "element", "molecule of a compound", "mixture"], correctIndex: 1, explanation: "Identical atoms make an element." },
        { prompt: "Dalton said a compound combines elements in a:", options: ["random ratio", "small whole-number ratio", "changing ratio", "very large ratio"], correctIndex: 1, explanation: "Fixed, small whole-number ratios of atoms." },
        { prompt: "O₂ is best described as a:", options: ["compound", "molecule of an element", "single atom", "mixture"], correctIndex: 1, explanation: "Two atoms of the same element bonded — a molecule of an element." },
        { prompt: "The idea that matter is made of tiny atoms is called the:", options: ["kinetic theory", "atomic theory", "cell theory", "wave theory"], correctIndex: 1, explanation: "Dalton's atomic theory states matter is made of atoms." },
        { prompt: "A molecule of hydrogen gas is written:", options: ["H", "H₂", "H₂O", "2H₂O"], correctIndex: 1, explanation: "Hydrogen gas is the diatomic molecule H₂." },
        { prompt: "Which of these is a single atom, not a molecule?", options: ["H₂", "He", "O₂", "N₂"], correctIndex: 1, explanation: "Helium exists as single atoms." },
        { prompt: "Atoms of different elements have:", options: ["the same properties", "different properties", "no properties", "the same mass"], correctIndex: 1, explanation: "Different elements have atoms with different properties." },
        { prompt: "Table salt (NaCl) is a:", options: ["element", "compound", "single atom", "molecule of an element"], correctIndex: 1, explanation: "NaCl contains sodium and chlorine — a compound." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between an atom and a molecule, giving one example of each.", answerKey: "Atom = smallest particle of an element that takes part in a chemical change (e.g. H, O, Cu). Molecule = two or more atoms bonded together (e.g. O₂, H₂O).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which of these is a molecule of a compound?", options: ["O₂", "N₂", "CO₂", "He"], correctIndex: 2, answerKey: "CO₂ contains different elements bonded together — a compound.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State two ideas of Dalton's atomic theory.", answerKey: "Any two: matter is made of tiny atoms; all atoms of one element are alike, different elements differ; a compound combines atoms of elements in small whole-number ratios; atoms are neither created nor destroyed in a chemical change, only rearranged.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "An element is a substance made of:", options: ["two elements", "only one type of atom", "molecules of compounds", "a mixture of atoms"], correctIndex: 1, answerKey: "An element contains only one kind of atom.", marks: 2 },
        { type: "ESSAY", prompt: "Explain the difference between atoms and molecules and between elements and compounds, using the atomic theory and suitable examples.", answerKey: "Atom = smallest particle of an element (H, O, Cu). Molecule = two or more atoms bonded (O₂, H₂O). Element = one kind of atom only (oxygen, copper). Compound = atoms of two or more elements in a fixed ratio (H₂O, CO₂). Atomic theory (Dalton): matter is atoms; atoms of an element are alike; compounds combine elements in whole-number ratios; atoms are rearranged, not created/destroyed, in reactions. Note O₂ is a molecule but not a compound. Reward correct distinctions and examples.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 13.4 Kinetic Theory: Atomic and Molecular Explanation of Pressure and Temperature (https://openstax.org/books/college-physics-2e/pages/13-4-kinetic-theory-atomic-and-molecular-explanation-of-pressure-and-temperature)
    {
      slug: "kinetic-theory",
      title: "The Kinetic Theory of Matter",
      objective:
        "By the end of the topic, learners should be able to state the assumptions of the kinetic theory, relate temperature to the average kinetic energy of particles, and use the theory to explain the states of matter, pressure and changes of state. (MoE Grade 10 Period VI, CONTENTS 3 'Kinetic theory'.)",
      estimatedMinutes: 100,
      notes: `## The kinetic theory

- **Kinetic theory of matter** — all matter is made of tiny particles (atoms or molecules) that are in constant, random motion.
- The particles attract one another with forces that depend on their separation.
- The **higher the temperature, the faster the particles move** (the greater their average kinetic energy).

## Temperature and kinetic energy

- **Temperature is a measure of the average kinetic energy of the particles.**
- Average translational kinetic energy is called **thermal energy**.
- KE = (3/2)kT — the average kinetic energy of a gas molecule is proportional to the absolute temperature T (k is Boltzmann's constant).
- At absolute zero (0 K), particle motion is at a minimum.

## Explaining the states of matter

| State | Particle arrangement | Motion |
| --- | --- | --- |
| Solid | closely packed, regular, strong forces | vibrate about fixed positions |
| Liquid | close but irregular, weaker forces | move/slide past one another |
| Gas | far apart, very weak forces | move rapidly and randomly, filling space |

## Explaining pressure

- A gas exerts **pressure** because its particles collide with the walls of the container.
- Each collision pushes on the wall; the total effect is the gas pressure.
- Heating the gas makes particles move faster → more frequent and harder collisions → higher pressure.

## Explaining changes of state

- **Melting/boiling** — heating gives particles more kinetic energy so they overcome the forces holding them, moving farther apart.
- **Evaporation** — the fastest particles escape from a liquid surface, so the average energy (temperature) of those left falls (cooling effect).

## Common errors

- **Thinking particles stop at ordinary temperatures** — they are always in motion.
- **Confusing temperature with heat** — temperature measures average kinetic energy; heat is transferred energy.
- **Believing gas pressure needs gravity** — it comes from particle collisions with the walls.`,
      workedExample: `**Problem.** Use the kinetic theory to explain (a) why a gas exerts pressure on the walls of its container, and (b) why the pressure of a fixed volume of gas increases when it is heated.

**Step 1 — Particles in motion.** A gas is made of tiny particles moving rapidly and randomly in all directions.

**Step 2 — Pressure.** The particles continually collide with the walls of the container. Each collision exerts a tiny force on the wall; the many collisions per second add up to a steady outward push — the gas pressure.

**Step 3 — Effect of heating.** Raising the temperature increases the average kinetic energy, so the particles move faster.

**Step 4 — Result.** Faster particles hit the walls more often and with greater force, so the pressure rises (at constant volume, P ∝ T — the pressure law).

**Answer.** Gas pressure is caused by particle collisions with the walls; heating speeds up the particles, increasing the frequency and force of collisions and therefore the pressure.`,
      quiz: [
        { prompt: "The kinetic theory says all matter is made of particles that are:", options: ["at rest", "in constant random motion", "charged", "identical"], correctIndex: 1, explanation: "Particles are always in constant, random motion." },
        { prompt: "Temperature is a measure of the average ___ of the particles.", options: ["mass", "kinetic energy", "charge", "size"], correctIndex: 1, explanation: "Temperature measures average kinetic energy." },
        { prompt: "As temperature rises, the particles move:", options: ["slower", "faster", "at the same speed", "backward"], correctIndex: 1, explanation: "Higher temperature means greater average kinetic energy and speed." },
        { prompt: "In a solid, the particles:", options: ["move freely and far apart", "vibrate about fixed positions", "escape the container", "do not move at all"], correctIndex: 1, explanation: "Solid particles vibrate about fixed positions." },
        { prompt: "In a gas, the particles are:", options: ["closely packed", "far apart and fast-moving", "fixed in place", "in a regular pattern"], correctIndex: 1, explanation: "Gas particles are far apart and move rapidly." },
        { prompt: "A gas exerts pressure because its particles:", options: ["stick to the walls", "collide with the container walls", "have weight only", "are charged"], correctIndex: 1, explanation: "Collisions of particles with the walls produce pressure." },
        { prompt: "Heating a fixed volume of gas increases its pressure because particles:", options: ["slow down", "move faster and collide harder/more often", "become heavier", "stop moving"], correctIndex: 1, explanation: "Faster particles hit the walls more often and harder." },
        { prompt: "The average kinetic energy of gas molecules is proportional to the:", options: ["mass", "absolute temperature", "volume", "colour"], correctIndex: 1, explanation: "KE = (3/2)kT — proportional to absolute temperature." },
        { prompt: "At absolute zero, particle motion is:", options: ["maximum", "at a minimum", "unchanged", "fastest"], correctIndex: 1, explanation: "At 0 K particle motion is minimal." },
        { prompt: "In a liquid, particles:", options: ["are fixed", "slide past one another", "are far apart", "do not touch"], correctIndex: 1, explanation: "Liquid particles are close but can move past each other." },
        { prompt: "Evaporation cools a liquid because:", options: ["all particles leave", "the fastest particles escape, lowering the average energy", "particles gain energy", "the liquid freezes"], correctIndex: 1, explanation: "Escape of the fastest particles lowers the average kinetic energy of those left." },
        { prompt: "Which state has the strongest forces between particles?", options: ["solid", "liquid", "gas", "plasma"], correctIndex: 0, explanation: "Solids have particles held by the strongest forces." },
        { prompt: "Thermal energy is the average translational ___ of particles.", options: ["potential energy", "kinetic energy", "charge", "mass"], correctIndex: 1, explanation: "Thermal energy is the average kinetic energy of particles." },
        { prompt: "Melting occurs when heating gives particles enough energy to:", options: ["stop moving", "overcome the forces holding them in fixed positions", "gain charge", "condense"], correctIndex: 1, explanation: "Particles gain enough energy to break free of fixed positions." },
        { prompt: "Gas pressure does NOT depend on:", options: ["speed of particles", "frequency of collisions", "gravity of the room", "temperature"], correctIndex: 2, explanation: "Pressure comes from collisions, not the room's gravity." },
        { prompt: "Two gases at the same temperature have the same average:", options: ["speed", "kinetic energy", "mass", "volume"], correctIndex: 1, explanation: "Same temperature means same average kinetic energy." },
        { prompt: "Particles in all states of matter are:", options: ["always at rest", "in constant motion", "the same size", "electrically charged"], correctIndex: 1, explanation: "Kinetic theory: particles are always moving." },
        { prompt: "The regular, closely packed arrangement is found in a:", options: ["gas", "liquid", "solid", "plasma"], correctIndex: 2, explanation: "Solids have a regular, closely packed structure." },
        { prompt: "Which increases the pressure of a gas in a rigid container?", options: ["cooling it", "heating it", "removing gas", "enlarging it"], correctIndex: 1, explanation: "Heating speeds up particles, raising pressure at constant volume." },
        { prompt: "The kinetic theory links the macroscopic temperature to the microscopic:", options: ["colour of particles", "motion of particles", "charge of particles", "shape of the container"], correctIndex: 1, explanation: "Temperature reflects the motion (kinetic energy) of particles." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State two assumptions of the kinetic theory of matter.", answerKey: "Any two: all matter is made of tiny particles (atoms/molecules); the particles are in constant random motion; particles attract one another with forces depending on separation; the higher the temperature the greater the average kinetic energy of the particles.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Temperature is a measure of the average:", options: ["mass of particles", "kinetic energy of particles", "number of particles", "charge of particles"], correctIndex: 1, answerKey: "Temperature measures the average kinetic energy of particles.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Use the kinetic theory to describe the arrangement and motion of particles in a solid and in a gas.", answerKey: "Solid: particles closely packed in a regular pattern with strong forces, vibrating about fixed positions. Gas: particles far apart with very weak forces, moving rapidly and randomly in all directions, filling the container.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A gas exerts pressure on its container because its particles:", options: ["stick to the walls", "collide with the walls", "have weight", "are charged"], correctIndex: 1, answerKey: "Pressure results from particle collisions with the container walls.", marks: 2 },
        { type: "ESSAY", prompt: "Using the kinetic theory, explain the differences between solids, liquids and gases and how heating changes matter from one state to another.", answerKey: "Kinetic theory: matter is particles in constant motion, with attractive forces depending on separation; temperature measures average kinetic energy. Solid: closely packed, strong forces, vibrate in place. Liquid: close but irregular, weaker forces, slide past one another. Gas: far apart, very weak forces, fast random motion. Heating raises kinetic energy: particles vibrate/move more, overcome the forces, and separate — solid melts to liquid, liquid boils to gas; cooling reverses this. Reward the state descriptions and the energy explanation of changes of state.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 11.8 Cohesion and Adhesion in Liquids: Surface Tension and Capillary Action (https://openstax.org/books/college-physics-2e/pages/11-8-cohesion-and-adhesion-in-liquids-surface-tension-and-capillary-action)
    {
      slug: "forces-between-molecules",
      title: "Forces Between Molecules: Cohesion and Adhesion",
      objective:
        "By the end of the topic, learners should be able to distinguish cohesive from adhesive forces and use them to explain the shape of drops, menisci and capillary action. (MoE Grade 10 Period VI, CONTENTS 4 'Forces between molecules'.)",
      estimatedMinutes: 90,
      notes: `## Forces between molecules

- Molecules exert **attractive forces** on one another over short distances.
- Two kinds are important for liquids:
- **Cohesion (cohesive force)** — the attraction between molecules of the **same** kind (e.g. water–water).
- **Adhesion (adhesive force)** — the attraction between molecules of **different** kinds (e.g. water–glass).

## Effects of cohesion and adhesion

- **Cohesion** holds a liquid together, forms drops, and lets a liquid stay in an open container.
- **Adhesion** makes a liquid cling to (wet) a surface, such as water on a glass window.
- Whether a liquid **wets** a surface depends on which force is stronger:
- adhesion > cohesion → the liquid spreads and wets (water on clean glass).
- cohesion > adhesion → the liquid beads up and does not wet (water on a waxy leaf; mercury on glass).

## The meniscus

- **Meniscus** — the curved surface of a liquid in a tube.
- Water in glass curves **up** at the edges (concave) because adhesion (water–glass) beats cohesion.
- Mercury in glass curves **down** at the edges (convex) because cohesion (mercury–mercury) beats adhesion.

## Capillary action

- **Capillary action** — the rise (or fall) of a liquid in a narrow tube.
- Water **rises** in a thin glass tube because adhesion pulls it up the walls (contact angle < 90°).
- Mercury is **depressed** in a glass tube because cohesion dominates (contact angle > 90°).
- Capillary action carries water up in soil, plant stems and paper towels.

## Common errors

- **Swapping cohesion and adhesion** — cohesion is same-kind; adhesion is different-kind.
- **Thinking all liquids wet all surfaces** — it depends on the balance of the two forces.
- **Confusing the two menisci** — water curves up in glass; mercury curves down.`,
      workedExample: `**Problem.** Explain, in terms of cohesion and adhesion, why (a) water rises and forms a concave (upward-curving) meniscus in a thin glass tube, while (b) mercury falls and forms a convex (downward-curving) meniscus in the same tube.

**Step 1 — Water in glass.** The adhesive force between water and glass is stronger than the cohesive force between water molecules.

**Step 2 — Result for water.** Water is pulled up the glass walls, so its surface curves upward at the edges (concave) and the liquid rises — capillary rise.

**Step 3 — Mercury in glass.** The cohesive force between mercury molecules is stronger than the adhesion between mercury and glass.

**Step 4 — Result for mercury.** Mercury pulls itself together and away from the walls, so its surface curves downward at the edges (convex) and the liquid is depressed.

**Answer.** The direction of the meniscus and the rise or fall depend on whether adhesion (water–glass) or cohesion (mercury–mercury) is the stronger force.`,
      quiz: [
        { prompt: "Cohesion is the attraction between molecules of the:", options: ["same kind", "different kinds", "a solid and a gas", "charged type"], correctIndex: 0, explanation: "Cohesion is between molecules of the same substance." },
        { prompt: "Adhesion is the attraction between molecules of:", options: ["the same kind", "different kinds", "gases only", "equal mass"], correctIndex: 1, explanation: "Adhesion is between molecules of different substances." },
        { prompt: "Water clinging to a glass window is an example of:", options: ["cohesion", "adhesion", "viscosity", "diffusion"], correctIndex: 1, explanation: "Water sticking to glass is adhesion (different substances)." },
        { prompt: "Water forming into drops is mainly due to:", options: ["adhesion", "cohesion", "gravity only", "diffusion"], correctIndex: 1, explanation: "Cohesion pulls water molecules together into drops." },
        { prompt: "A liquid wets a surface when:", options: ["cohesion > adhesion", "adhesion > cohesion", "there are no forces", "it is very cold"], correctIndex: 1, explanation: "Stronger adhesion spreads the liquid and wets the surface." },
        { prompt: "The curved surface of a liquid in a tube is the:", options: ["meniscus", "capillary", "contact line", "surface layer"], correctIndex: 0, explanation: "The curved surface is called the meniscus." },
        { prompt: "Water in a glass tube curves:", options: ["down at the edges", "up at the edges (concave)", "flat", "into a ball"], correctIndex: 1, explanation: "Adhesion pulls water up the glass, giving a concave meniscus." },
        { prompt: "Mercury in a glass tube curves:", options: ["up at the edges", "down at the edges (convex)", "flat", "in a spiral"], correctIndex: 1, explanation: "Cohesion dominates, giving mercury a convex meniscus." },
        { prompt: "The rise of a liquid in a narrow tube is called:", options: ["diffusion", "capillary action", "viscosity", "surface tension"], correctIndex: 1, explanation: "Capillary action is the rise/fall in a narrow tube." },
        { prompt: "Water rises in a thin glass tube because:", options: ["cohesion beats adhesion", "adhesion beats cohesion", "there is no gravity", "the tube is hot"], correctIndex: 1, explanation: "Adhesion (water–glass) pulls the water up." },
        { prompt: "Mercury is depressed in a glass tube because:", options: ["adhesion is strong", "cohesion is stronger than adhesion", "the tube is wide", "mercury is a gas"], correctIndex: 1, explanation: "Mercury's strong cohesion pulls it away from the glass." },
        { prompt: "Water beading on a waxy leaf shows that:", options: ["adhesion is strong", "cohesion is greater than adhesion to wax", "the leaf is hot", "there is no cohesion"], correctIndex: 1, explanation: "Cohesion beats adhesion, so water beads up." },
        { prompt: "Capillary action helps water travel up:", options: ["metal bars", "plant stems and soil", "glass windows only", "electric wires"], correctIndex: 1, explanation: "Capillary action moves water up plant stems and through soil." },
        { prompt: "Adhesive forces act between:", options: ["water and water", "water and glass", "mercury and mercury", "oxygen and oxygen"], correctIndex: 1, explanation: "Adhesion is between different substances, e.g. water and glass." },
        { prompt: "Cohesive forces are responsible for a liquid staying in an:", options: ["open container", "electric field", "empty space", "solid"], correctIndex: 0, explanation: "Cohesion keeps the liquid together in an open container." },
        { prompt: "Whether a liquid wets a surface depends on the balance of:", options: ["gravity and pressure", "cohesion and adhesion", "heat and light", "charge and mass"], correctIndex: 1, explanation: "The relative strength of cohesion and adhesion decides wetting." },
        { prompt: "A paper towel soaks up water by:", options: ["diffusion", "capillary action", "evaporation", "condensation"], correctIndex: 1, explanation: "Water rises through the fine spaces by capillary action." },
        { prompt: "A concave meniscus indicates that:", options: ["cohesion dominates", "adhesion dominates", "no forces act", "the liquid is boiling"], correctIndex: 1, explanation: "Adhesion pulling the liquid up the walls gives a concave meniscus." },
        { prompt: "Mercury on glass does not wet the glass because:", options: ["adhesion is very strong", "cohesion is stronger than adhesion", "mercury is light", "glass is hot"], correctIndex: 1, explanation: "Strong cohesion means mercury does not spread on glass." },
        { prompt: "Cohesion is to same-kind molecules as adhesion is to:", options: ["same-kind molecules", "different-kind molecules", "gases", "solids only"], correctIndex: 1, explanation: "Adhesion acts between molecules of different kinds." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between cohesion and adhesion, giving one example of each.", answerKey: "Cohesion = attraction between molecules of the same kind (e.g. water–water, forming drops). Adhesion = attraction between molecules of different kinds (e.g. water–glass, water clinging to a window).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Water forms a concave (upward-curving) meniscus in glass because:", options: ["cohesion beats adhesion", "adhesion beats cohesion", "there are no molecular forces", "of gravity alone"], correctIndex: 1, answerKey: "Adhesion (water–glass) is stronger than cohesion, so water climbs the walls.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "What is capillary action? Give one everyday example.", answerKey: "Capillary action is the rise (or fall) of a liquid in a narrow tube due to the balance of adhesion and cohesion. Example: water rising in a thin tube, up plant stems, through soil, or into a paper towel.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Mercury forms a convex meniscus and is depressed in a glass tube because:", options: ["adhesion is stronger", "cohesion is stronger than adhesion", "mercury is a gas", "the tube is warm"], correctIndex: 1, answerKey: "Mercury's cohesion exceeds its adhesion to glass, so it pulls away from the walls.", marks: 2 },
        { type: "ESSAY", prompt: "Explain how the forces of cohesion and adhesion determine whether a liquid wets a surface and the shape of its meniscus, contrasting water and mercury in a glass tube.", answerKey: "Cohesion = attraction between like molecules; adhesion = attraction between unlike molecules. If adhesion > cohesion the liquid wets/spreads and climbs the walls (concave meniscus, capillary rise) — e.g. water in glass. If cohesion > adhesion the liquid beads and pulls away (convex meniscus, capillary depression) — e.g. mercury in glass. The contact behaviour and meniscus direction depend on which force wins. Reward the definitions, the wetting criterion, and correct contrast of water vs mercury.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 5.3 Elasticity: Stress and Strain (https://openstax.org/books/college-physics-2e/pages/5-3-elasticity-stress-and-strain)
    {
      slug: "elasticity-and-hookes-law",
      title: "Elasticity, Hooke's Law and Young's Modulus",
      objective:
        "By the end of the topic, learners should be able to state Hooke's law, define stress, strain and Young's modulus, describe the elastic limit, and solve simple elasticity problems. (MoE Grade 10 Period VI, CONTENTS 5 'Elasticity and Hooke's Law (Young's/Elastic modulus)'.)",
      estimatedMinutes: 110,
      notes: `## Elasticity

- **Elasticity** — the ability of a material to return to its original shape and size after the deforming force is removed.
- **Elastic material** — regains its shape (a spring, rubber band). **Plastic material** — keeps the new shape (modelling clay).

## Hooke's law

- **Hooke's law** — the extension of an elastic material is directly proportional to the applied force, provided the elastic limit is not exceeded.
- **F = k·ΔL** (or F = kx), where ΔL (x) is the extension and k is the force (spring) constant.
- k is measured in newtons per metre (N/m); a larger k means a stiffer spring.

## The elastic limit

- **Elastic limit** — the maximum force (or extension) for which a material still obeys Hooke's law and returns to its original length.
- Beyond the elastic limit the material is permanently deformed and Hooke's law no longer holds.
- A force-extension graph is a **straight line through the origin** up to the elastic limit, then curves.

\`\`\`svg Force-extension graph: straight (Hooke's law) up to the elastic limit
<svg viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Force versus extension graph, linear then curving past the elastic limit">
  <line x1="35" y1="20" x2="35" y2="145" stroke="#334155"/>
  <line x1="35" y1="145" x2="235" y2="145" stroke="#334155"/>
  <text x="6" y="85" font-size="10" fill="#334155">Force</text>
  <text x="150" y="163" font-size="10" fill="#334155">Extension</text>
  <line x1="35" y1="145" x2="150" y2="55" stroke="#2563eb" stroke-width="2"/>
  <path d="M150 55 Q 185 35 220 40" fill="none" stroke="#2563eb" stroke-width="2"/>
  <circle cx="150" cy="55" r="3" fill="#991b1b"/>
  <text x="120" y="45" font-size="9" fill="#991b1b">elastic limit</text>
</svg>
\`\`\`

## Stress, strain and Young's modulus

- **Stress** — force per unit cross-sectional area: stress = F / A. Unit: N/m² (pascal).
- **Strain** — extension per unit original length: strain = ΔL / L₀. It has no unit (a ratio).
- **Young's modulus (Y)** — a measure of the stiffness of a material: Y = stress / strain = (F/A) / (ΔL/L₀). Unit: N/m² (pascal).
- Rearranged for the extension: ΔL = (1/Y)(F/A)L₀ = F·L₀ / (A·Y).
- A large Young's modulus means the material stretches very little for a given stress (very stiff, e.g. steel).

## Common errors

- **Applying Hooke's law beyond the elastic limit** — it only holds in the linear region.
- **Confusing stress and strain** — stress is force/area; strain is extension/length.
- **Forgetting strain has no unit** — it is a ratio of two lengths.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 5.3).** A steel wire of original length 2.0 m and cross-sectional area 1.0 × 10⁻⁶ m² is stretched by a force of 100 N. Young's modulus for steel is Y = 2.0 × 10¹¹ N/m². Find the extension of the wire.

**Step 1 — Formula.** ΔL = F·L₀ / (A·Y).

**Step 2 — Knowns.** F = 100 N, L₀ = 2.0 m, A = 1.0 × 10⁻⁶ m², Y = 2.0 × 10¹¹ N/m².

**Step 3 — Denominator.** A·Y = (1.0 × 10⁻⁶)(2.0 × 10¹¹) = 2.0 × 10⁵.

**Step 4 — Numerator.** F·L₀ = 100 × 2.0 = 200.

**Step 5 — Divide.** ΔL = 200 / (2.0 × 10⁵) = 1.0 × 10⁻³ m = 1.0 mm.

**Answer.** The wire stretches by 1.0 mm. Because steel has a large Young's modulus, the extension is very small.`,
      quiz: [
        { prompt: "Elasticity is the ability of a material to:", options: ["stay deformed", "return to its original shape after a force is removed", "melt when heated", "conduct charge"], correctIndex: 1, explanation: "An elastic material regains its shape when the force is removed." },
        { prompt: "Hooke's law states that extension is proportional to the applied force provided the:", options: ["material is hot", "elastic limit is not exceeded", "force is very large", "wire is thick"], correctIndex: 1, explanation: "Hooke's law holds only up to the elastic limit." },
        { prompt: "Hooke's law is written as:", options: ["F = k/ΔL", "F = kΔL", "F = ΔL/k", "F = k + ΔL"], correctIndex: 1, explanation: "F = kΔL (force = spring constant × extension)." },
        { prompt: "The spring constant k is measured in:", options: ["N", "N/m", "m/N", "N·m"], correctIndex: 1, explanation: "k is in newtons per metre (N/m)." },
        { prompt: "The elastic limit is the point beyond which a material:", options: ["obeys Hooke's law", "is permanently deformed", "returns to shape", "gets stiffer"], correctIndex: 1, explanation: "Past the elastic limit deformation becomes permanent." },
        { prompt: "Stress is defined as:", options: ["force × area", "force / area", "extension / length", "length / extension"], correctIndex: 1, explanation: "Stress = force per unit area." },
        { prompt: "Strain is defined as:", options: ["force / area", "extension / original length", "force × length", "area / force"], correctIndex: 1, explanation: "Strain = extension per unit original length." },
        { prompt: "Strain has:", options: ["units of N/m²", "units of metres", "no unit", "units of newtons"], correctIndex: 2, explanation: "Strain is a ratio of two lengths, so it has no unit." },
        { prompt: "Young's modulus is:", options: ["stress × strain", "stress / strain", "strain / stress", "force / extension"], correctIndex: 1, explanation: "Y = stress / strain." },
        { prompt: "A material with a large Young's modulus is:", options: ["very stretchy", "very stiff", "always plastic", "a gas"], correctIndex: 1, explanation: "Large Y means little extension for a given stress — very stiff." },
        { prompt: "A spring of k = 200 N/m stretched by a 10 N force extends by:", options: ["0.05 m", "20 m", "2000 m", "0.5 m"], correctIndex: 0, explanation: "ΔL = F/k = 10/200 = 0.05 m." },
        { prompt: "The unit of stress and of Young's modulus is the:", options: ["newton", "pascal (N/m²)", "metre", "joule"], correctIndex: 1, explanation: "Both are force per area — pascals (N/m²)." },
        { prompt: "A force-extension graph obeying Hooke's law is a:", options: ["curve", "straight line through the origin", "horizontal line", "circle"], correctIndex: 1, explanation: "It is linear (straight through origin) up to the elastic limit." },
        { prompt: "Modelling clay that keeps its new shape is:", options: ["elastic", "plastic", "stiff", "brittle"], correctIndex: 1, explanation: "A plastic material keeps the deformed shape." },
        { prompt: "Doubling the force on a spring within its elastic limit:", options: ["halves the extension", "doubles the extension", "leaves it unchanged", "breaks it"], correctIndex: 1, explanation: "Extension ∝ force (Hooke's law)." },
        { prompt: "The extension of a wire is given by ΔL =", options: ["FL₀/(AY)", "AY/(FL₀)", "FA/(L₀Y)", "YL₀/(FA)"], correctIndex: 0, explanation: "ΔL = FL₀/(AY) from Y = (F/A)/(ΔL/L₀)." },
        { prompt: "A stiffer spring has a ___ spring constant.", options: ["smaller", "larger", "zero", "negative"], correctIndex: 1, explanation: "Stiffer springs have larger k." },
        { prompt: "Which pair is correct?", options: ["stress = ΔL/L₀, strain = F/A", "stress = F/A, strain = ΔL/L₀", "both are F/A", "both are ΔL/L₀"], correctIndex: 1, explanation: "Stress = F/A; strain = ΔL/L₀." },
        { prompt: "Beyond the elastic limit, Hooke's law:", options: ["still applies", "no longer applies", "gives a straight line", "becomes exact"], correctIndex: 1, explanation: "Past the elastic limit the linear relationship fails." },
        { prompt: "Steel stretches very little for a large force because it has a:", options: ["small Young's modulus", "large Young's modulus", "small spring constant", "high strain"], correctIndex: 1, explanation: "Its large Young's modulus makes it very stiff." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State Hooke's law and write its equation, defining each symbol.", answerKey: "Hooke's law: the extension of an elastic material is directly proportional to the applied force, provided the elastic limit is not exceeded. F = kΔL: F force (N), ΔL extension (m), k spring/force constant (N/m).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A spring has a spring constant of 50 N/m. A force of 15 N produces an extension of:", options: ["0.30 m", "3.3 m", "750 m", "35 m"], correctIndex: 0, answerKey: "ΔL = F/k = 15/50 = 0.30 m.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define stress, strain and Young's modulus, giving the unit of each.", answerKey: "Stress = force/area (F/A), unit N/m² (pascal). Strain = extension/original length (ΔL/L₀), no unit. Young's modulus Y = stress/strain, unit N/m² (pascal).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The elastic limit of a material is the point beyond which it:", options: ["obeys Hooke's law", "returns to its original shape", "is permanently deformed", "gets lighter"], correctIndex: 2, answerKey: "Beyond the elastic limit the deformation is permanent and Hooke's law fails.", marks: 2 },
        { type: "ESSAY", prompt: "Explain Hooke's law and the meaning of the elastic limit, and define stress, strain and Young's modulus, showing how they are related.", answerKey: "Hooke's law: extension ∝ applied force (F = kΔL) up to the elastic limit; the force-extension graph is a straight line through the origin. Elastic limit: the maximum load for which the material still returns to its original shape; beyond it, deformation is permanent and the graph curves. Stress = F/A (N/m²); strain = ΔL/L₀ (no unit); Young's modulus Y = stress/strain = (F/A)/(ΔL/L₀), a measure of stiffness (large Y = very stiff, small extension). Reward Hooke's law, elastic limit, the three definitions and their relationship.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 11.8 Cohesion and Adhesion in Liquids: Surface Tension and Capillary Action (https://openstax.org/books/college-physics-2e/pages/11-8-cohesion-and-adhesion-in-liquids-surface-tension-and-capillary-action)
    {
      slug: "surface-tension",
      title: "Surface Tension",
      objective:
        "By the end of the topic, learners should be able to define surface tension, explain it using cohesive forces, and describe its everyday effects. (MoE Grade 10 Period VI, CONTENTS 6 'Surface tension'.)",
      estimatedMinutes: 90,
      notes: `## Surface tension

- **Surface tension** — the property of a liquid surface that makes it contract to the smallest possible area, behaving like a stretched elastic sheet (membrane).
- Cause: **cohesive forces** between the molecules.
- A molecule inside the liquid is pulled equally in all directions; a molecule at the surface is pulled only inward and sideways, so the surface is drawn tight.

## Measuring surface tension

- Surface tension γ (gamma) is the force per unit length acting along a line on the surface: **γ = F / L**.
- SI unit: newton per metre (N/m).

## Everyday effects of surface tension

- Small liquid drops and bubbles are **spherical** — a sphere has the least surface area for a given volume.
- **Insects** (pond skaters) can walk on water; a light steel needle or razor blade can float on water though it is denser.
- Water forms rounded **droplets** on a leaf.
- A soap film pulls itself into the smallest area (soap bubbles).

## Reducing surface tension

- **Detergents and soaps** lower the surface tension of water, letting it wet and clean surfaces more easily.
- Heating a liquid usually reduces its surface tension.

## Common errors

- **Thinking a floating needle is less dense than water** — it floats on the surface film because of surface tension, not buoyancy.
- **Confusing surface tension with viscosity** — surface tension acts at the surface; viscosity is internal resistance to flow.
- **Forgetting the cause** — surface tension comes from cohesive forces between molecules.`,
      workedExample: `**Problem.** A clean steel sewing needle, which is denser than water, can be made to rest on the surface of water in a bowl. Explain this using surface tension, and state one way to make the needle sink.

**Step 1 — The surface film.** Cohesive forces between the water molecules make the surface behave like a stretched elastic sheet (surface tension).

**Step 2 — Supporting the needle.** When the light needle is laid gently on the surface, it slightly depresses the film; the surface tension acts upward along the contact line and supports the needle's small weight, so it does not break through.

**Step 3 — Making it sink.** Adding a drop of detergent lowers the surface tension of the water; the film can no longer support the needle, and it sinks.

**Answer.** The needle rests on the water because surface tension (from cohesion) supports it; adding detergent reduces the surface tension and the needle sinks — showing the effect is due to the surface film, not to the needle being less dense than water.`,
      quiz: [
        { prompt: "Surface tension makes a liquid surface behave like a:", options: ["rigid solid", "stretched elastic sheet", "gas", "vacuum"], correctIndex: 1, explanation: "The surface acts like a stretched membrane." },
        { prompt: "Surface tension is caused by ___ forces between molecules.", options: ["adhesive", "cohesive", "gravitational", "electrical"], correctIndex: 1, explanation: "Cohesive forces between like molecules cause surface tension." },
        { prompt: "Surface tension makes a liquid surface contract to the:", options: ["largest area", "smallest possible area", "same area", "a flat sheet only"], correctIndex: 1, explanation: "The surface minimises its area." },
        { prompt: "Small liquid drops are ___ because of surface tension.", options: ["cubic", "spherical", "flat", "irregular"], correctIndex: 1, explanation: "A sphere has the least surface area for a given volume." },
        { prompt: "Surface tension γ is defined as force per unit:", options: ["area", "length", "volume", "mass"], correctIndex: 1, explanation: "γ = F/L, force per unit length." },
        { prompt: "The SI unit of surface tension is:", options: ["N/m²", "N/m", "N·m", "J/m"], correctIndex: 1, explanation: "Surface tension is measured in newtons per metre." },
        { prompt: "A steel needle can float on water because of:", options: ["low density", "surface tension", "diffusion", "viscosity"], correctIndex: 1, explanation: "The surface film supports the needle despite its higher density." },
        { prompt: "Detergents added to water:", options: ["increase surface tension", "lower surface tension", "have no effect", "freeze the water"], correctIndex: 1, explanation: "Soaps and detergents reduce surface tension." },
        { prompt: "A molecule at the surface is pulled:", options: ["equally in all directions", "only inward and sideways", "only upward", "not at all"], correctIndex: 1, explanation: "Surface molecules have no liquid above, so the net pull is inward." },
        { prompt: "Pond skaters (insects) can walk on water because of:", options: ["viscosity", "surface tension", "adhesion to air", "buoyancy alone"], correctIndex: 1, explanation: "Surface tension supports their light weight." },
        { prompt: "Soap bubbles are spherical because the film pulls into the:", options: ["largest area", "smallest area", "flattest shape", "cube shape"], correctIndex: 1, explanation: "Surface tension minimises the film's area, giving a sphere." },
        { prompt: "Heating a liquid usually ___ its surface tension.", options: ["increases", "reduces", "does not change", "doubles"], correctIndex: 1, explanation: "Surface tension generally decreases as temperature rises." },
        { prompt: "A molecule deep inside a liquid is pulled:", options: ["only inward", "equally in all directions", "only upward", "not at all"], correctIndex: 1, explanation: "Interior molecules are surrounded, so the pulls cancel." },
        { prompt: "Surface tension acts along the ___ of the surface.", options: ["volume", "line/edge", "centre only", "bottom"], correctIndex: 1, explanation: "The force acts along a line on the surface (γ = F/L)." },
        { prompt: "Which shows surface tension?", options: ["a stone sinking", "water forming beads on a leaf", "sugar dissolving", "ice melting"], correctIndex: 1, explanation: "Beading of water is due to surface tension." },
        { prompt: "Surface tension differs from viscosity because it acts:", options: ["throughout the liquid", "at the surface", "only in gases", "only in solids"], correctIndex: 1, explanation: "Surface tension is a surface effect; viscosity is internal." },
        { prompt: "A floating needle sinks when detergent is added because detergent:", options: ["increases density", "lowers surface tension", "heats the water", "adds mass"], correctIndex: 1, explanation: "Lower surface tension can no longer support the needle." },
        { prompt: "The property that lets a razor blade rest on water is:", options: ["diffusion", "surface tension", "elasticity", "capillarity only"], correctIndex: 1, explanation: "Surface tension supports the light blade on the surface film." },
        { prompt: "Surface tension is a direct result of:", options: ["adhesion to the container", "cohesion between molecules", "gravity", "air pressure"], correctIndex: 1, explanation: "It arises from cohesive forces between the liquid's molecules." },
        { prompt: "A liquid drop takes a spherical shape to have the:", options: ["maximum surface area", "minimum surface area for its volume", "flattest surface", "largest volume"], correctIndex: 1, explanation: "A sphere minimises surface area for a given volume." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define surface tension and state the force between molecules that causes it.", answerKey: "Surface tension is the property of a liquid surface that makes it contract to the smallest possible area, behaving like a stretched elastic sheet. It is caused by cohesive forces between the liquid molecules.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "A steel needle can rest on water because of:", options: ["its low density", "surface tension", "diffusion", "capillary rise"], correctIndex: 1, answerKey: "The surface film (surface tension) supports the needle even though steel is denser than water.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain why small drops of water are spherical.", answerKey: "Surface tension makes the surface contract to the smallest possible area; for a given volume a sphere has the least surface area, so free drops become spherical.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Adding detergent to water:", options: ["increases surface tension", "reduces surface tension", "has no effect", "increases density"], correctIndex: 1, answerKey: "Detergents lower the surface tension of water.", marks: 2 },
        { type: "ESSAY", prompt: "Explain, in terms of molecular forces, what causes surface tension, and describe two everyday effects of surface tension and one way it can be reduced.", answerKey: "Molecules inside a liquid are pulled equally in all directions, but surface molecules are pulled only inward and sideways (cohesive forces), so the surface is drawn tight and acts like a stretched membrane — this is surface tension. Effects (any two): insects walking on water; a needle/razor floating; water beading on a leaf; spherical drops and bubbles; capillary support. It can be reduced by adding detergent/soap (or by heating). Reward the molecular explanation, two effects, and the reduction method.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 12.4 Viscosity and Laminar Flow & 12.7 Molecular Transport: Diffusion (https://openstax.org/books/college-physics-2e/pages/12-4-viscosity-and-laminar-flow-poiseuilles-law)
    {
      slug: "viscosity-and-diffusion",
      title: "Viscosity and Diffusion",
      objective:
        "By the end of the topic, learners should be able to define viscosity and diffusion, describe how each depends on temperature, and give everyday examples. (MoE Grade 10 Period VI, CONTENTS 7 'Viscosity, Diffusion, and Elastic strings'.)",
      estimatedMinutes: 100,
      notes: `## Viscosity

- **Viscosity** — a fluid's resistance to flow; internal friction within a fluid (and between the fluid and its surroundings).
- A **low-viscosity** fluid flows easily (water, petrol, juice); a **high-viscosity** fluid flows slowly (honey, syrup, engine oil).
- Viscosity is caused by attractive forces between the molecules as layers of fluid slide over one another.

## Viscosity and temperature

- For **liquids**, viscosity **decreases** as temperature rises (hot honey flows more easily than cold honey).
- Example: water's viscosity falls from 1.79 mPa·s at 0 °C to 0.28 mPa·s at 100 °C.
- (For gases, viscosity increases slightly with temperature.)

## Laminar flow

- **Laminar flow** — smooth flow in which the fluid moves in parallel layers that do not mix.
- Because of viscosity, the fluid speed is greatest at the centre of a pipe and zero at the walls.

## Diffusion

- **Diffusion** — the movement of particles from a region of higher concentration to a region of lower concentration, due to their random motion.
- It happens because, on average, more particles move out of the crowded region than into it.
- Examples: the smell of food or perfume spreading through a room; a drop of ink or food colouring spreading through still water; a gas filling a room.

## Diffusion and temperature

- Higher temperature → particles move faster → **faster diffusion**.
- Diffusion is very slow over large distances (e.g. glucose takes about 21 hours to diffuse 1 cm in water), which is why we stir substances rather than wait.

## Common errors

- **Thinking viscosity rises with temperature for liquids** — for liquids it falls as they warm.
- **Confusing viscosity and surface tension** — viscosity is internal resistance to flow; surface tension is a surface effect.
- **Saying diffusion needs stirring** — diffusion is due to random motion alone (stirring just speeds mixing).`,
      workedExample: `**Problem.** (a) Explain why honey pours more slowly than water, and how warming the honey changes this. (b) Explain, using diffusion, why the smell of frying food spreads to the next room, and whether it spreads faster on a hot day.

**Part (a) — Viscosity.** Honey has a much higher viscosity than water — stronger internal friction between its molecules — so it resists flow and pours slowly. Warming the honey lowers its viscosity (viscosity of a liquid decreases as temperature rises), so warm honey flows more easily.

**Part (b) — Diffusion.** The smell is carried by scent particles that move randomly and spread from where they are concentrated (the kitchen) to where they are less concentrated (the next room) — this is diffusion. On a hot day the particles move faster, so diffusion is faster and the smell spreads more quickly.

**Answer.** (a) Honey's high viscosity slows its flow; heating reduces the viscosity. (b) The smell spreads by diffusion of particles from high to low concentration, and it spreads faster when warmer.`,
      quiz: [
        { prompt: "Viscosity is a fluid's resistance to:", options: ["heating", "flow", "charge", "evaporation"], correctIndex: 1, explanation: "Viscosity is resistance to flow (internal friction)." },
        { prompt: "Which liquid has the highest viscosity?", options: ["water", "petrol", "honey", "juice"], correctIndex: 2, explanation: "Honey flows slowly — high viscosity." },
        { prompt: "For a liquid, raising the temperature ___ its viscosity.", options: ["increases", "decreases", "does not change", "doubles"], correctIndex: 1, explanation: "Liquids become less viscous when heated." },
        { prompt: "A low-viscosity fluid:", options: ["flows slowly", "flows easily", "does not flow", "is always solid"], correctIndex: 1, explanation: "Low viscosity means it flows easily, like water." },
        { prompt: "Diffusion is the movement of particles from a region of:", options: ["low to high concentration", "high to low concentration", "hot to cold only", "solid to gas"], correctIndex: 1, explanation: "Particles spread from high to low concentration." },
        { prompt: "Diffusion happens because of the ___ motion of particles.", options: ["ordered", "random", "circular", "downward"], correctIndex: 1, explanation: "Random thermal motion drives diffusion." },
        { prompt: "The spreading of perfume smell across a room is an example of:", options: ["viscosity", "diffusion", "surface tension", "elasticity"], correctIndex: 1, explanation: "Scent particles diffuse through the air." },
        { prompt: "Higher temperature makes diffusion:", options: ["slower", "faster", "stop", "reverse"], correctIndex: 1, explanation: "Faster particles diffuse more quickly." },
        { prompt: "Viscosity is caused by ___ between fluid layers.", options: ["gravity", "attractive forces / internal friction", "electric charge", "surface tension"], correctIndex: 1, explanation: "Internal friction between molecules resists flow." },
        { prompt: "In laminar flow, a fluid moves in:", options: ["mixing swirls", "parallel layers that do not mix", "random directions", "a single point"], correctIndex: 1, explanation: "Laminar flow is smooth, layered flow." },
        { prompt: "In a pipe, viscosity makes the fluid speed greatest at the:", options: ["walls", "centre", "surface only", "bottom"], correctIndex: 1, explanation: "Speed is maximum at the centre, zero at the walls." },
        { prompt: "A drop of ink spreading through still water shows:", options: ["viscosity", "diffusion", "surface tension", "capillarity"], correctIndex: 1, explanation: "The ink diffuses through the water." },
        { prompt: "Engine oil is more viscous than water, so it:", options: ["flows faster", "flows more slowly", "does not flow", "evaporates faster"], correctIndex: 1, explanation: "Higher viscosity means slower flow." },
        { prompt: "Cold honey compared with warm honey is:", options: ["less viscous", "more viscous", "the same", "a gas"], correctIndex: 1, explanation: "Cold honey is more viscous and pours slowly." },
        { prompt: "Diffusion over large distances is:", options: ["very fast", "very slow", "instant", "impossible"], correctIndex: 1, explanation: "Diffusion is slow over macroscopic distances, so we stir." },
        { prompt: "Viscosity differs from surface tension because viscosity is:", options: ["a surface effect", "internal resistance to flow", "only in gases", "the same thing"], correctIndex: 1, explanation: "Viscosity is an internal (bulk) effect; surface tension acts at the surface." },
        { prompt: "Which spreads a gas throughout a room without stirring?", options: ["viscosity", "diffusion", "elasticity", "condensation"], correctIndex: 1, explanation: "A gas diffuses to fill the space by random motion." },
        { prompt: "As water is heated from 0 °C to 100 °C, its viscosity:", options: ["rises", "falls", "stays the same", "becomes zero at 50 °C"], correctIndex: 1, explanation: "Water's viscosity falls markedly with temperature." },
        { prompt: "Stirring sugar into water is used because diffusion alone is:", options: ["too fast", "too slow", "impossible", "harmful"], correctIndex: 1, explanation: "Diffusion is slow, so stirring speeds up mixing." },
        { prompt: "The net direction of diffusion is from where particles are:", options: ["fewer to more", "more crowded to less crowded", "cold to hot", "heavy to light"], correctIndex: 1, explanation: "Particles move from high to low concentration on average." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define viscosity and state how the viscosity of a liquid changes with temperature.", answerKey: "Viscosity is a fluid's resistance to flow (internal friction between molecules). For a liquid, viscosity decreases as temperature rises (e.g. warm honey flows more easily than cold honey).", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which of these has the highest viscosity?", options: ["water", "petrol", "syrup", "alcohol"], correctIndex: 2, answerKey: "Syrup is very viscous and flows slowly.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define diffusion and give one everyday example.", answerKey: "Diffusion is the movement of particles from a region of higher concentration to a region of lower concentration due to their random motion. Example: the smell of food/perfume spreading through a room, or ink spreading in water.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Raising the temperature makes diffusion:", options: ["slower", "faster", "stop", "reverse direction"], correctIndex: 1, answerKey: "Higher temperature speeds particle motion, so diffusion is faster.", marks: 2 },
        { type: "ESSAY", prompt: "Distinguish between viscosity and diffusion, explaining what causes each and how each depends on temperature, with an example of both.", answerKey: "Viscosity = resistance of a fluid to flow, caused by internal friction/attractive forces between molecules as layers slide; for liquids it decreases as temperature rises (warm honey flows more easily). Diffusion = net movement of particles from high to low concentration due to random motion; it becomes faster at higher temperature (perfume spreads faster when warm). Example of viscosity: honey vs water pouring. Example of diffusion: smell of food spreading, ink in water. Note viscosity is a bulk/internal effect while diffusion is the spreading of particles. Reward both definitions, causes, temperature dependence and examples.", marks: 8 },
      ],
    },
  ],
};
