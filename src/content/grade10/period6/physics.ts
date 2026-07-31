import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 10,
// Semester Two, Period VI: Properties of Matter — the kinetic theory and
// states of matter, and elasticity (Hooke's Law), surface tension and
// viscosity.
export const physicsG10P6: PeriodContent = {
  grade: 10,
  number: 6,
  title: "Properties of Matter",
  summary:
    "Period VI of the MoE Grade 10 Physics syllabus. Learners study the structure of matter through the kinetic theory — the three states and the forces between molecules (cohesion, adhesion, diffusion) — and the mechanical properties of matter, including elasticity and Hooke's Law, surface tension and viscosity.",
  topics: [
    {
      slug: "kinetic-theory-and-states-of-matter",
      title: "The Kinetic Theory and States of Matter",
      objective:
        "By the end of the topic, learners should be able to describe the arrangement and movement of particles in solids, liquids and gases using the kinetic theory, and explain cohesion, adhesion and diffusion.",
      estimatedMinutes: 150,
      notes: `## The structure of matter

All matter is made of tiny particles — **atoms and molecules** (Period V). An **atom** is the smallest particle of an element; a **molecule** is two or more atoms joined together. These particles are always **moving**.

## The kinetic theory of matter

The **kinetic theory** states that all matter is made of **tiny particles in constant motion**, and that the **energy of this motion increases with temperature**. The way the particles are arranged and how freely they move explains the three **states of matter**.

\`\`\`svg Particle arrangement in solids, liquids and gases
<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Particles closely packed in a solid, loosely in a liquid, and far apart in a gas">
  <rect x="10" y="20" width="80" height="80" fill="#eff6ff" stroke="#1e3a8a"/>
  <g fill="#2563eb"><circle cx="25" cy="35" r="6"/><circle cx="45" cy="35" r="6"/><circle cx="65" cy="35" r="6"/><circle cx="25" cy="55" r="6"/><circle cx="45" cy="55" r="6"/><circle cx="65" cy="55" r="6"/><circle cx="25" cy="75" r="6"/><circle cx="45" cy="75" r="6"/><circle cx="65" cy="75" r="6"/></g>
  <text x="50" y="115" font-size="9" text-anchor="middle" fill="#1e3a8a">solid</text>
  <rect x="110" y="20" width="80" height="80" fill="#eff6ff" stroke="#1e3a8a"/>
  <g fill="#2563eb"><circle cx="125" cy="40" r="6"/><circle cx="150" cy="35" r="6"/><circle cx="170" cy="45" r="6"/><circle cx="130" cy="62" r="6"/><circle cx="158" cy="60" r="6"/><circle cx="140" cy="82" r="6"/><circle cx="168" cy="78" r="6"/></g>
  <text x="150" y="115" font-size="9" text-anchor="middle" fill="#1e3a8a">liquid</text>
  <rect x="210" y="20" width="80" height="80" fill="#eff6ff" stroke="#1e3a8a"/>
  <g fill="#2563eb"><circle cx="225" cy="35" r="5"/><circle cx="265" cy="30" r="5"/><circle cx="245" cy="60" r="5"/><circle cx="275" cy="70" r="5"/><circle cx="222" cy="80" r="5"/></g>
  <text x="250" y="115" font-size="9" text-anchor="middle" fill="#1e3a8a">gas</text>
</svg>
\`\`\`

| State | Arrangement of particles | Movement | Shape & volume |
|---|---|---|---|
| **Solid** | closely packed, regular | vibrate in fixed positions | fixed shape, fixed volume |
| **Liquid** | close but irregular | move around each other (slide) | takes the shape of its container, fixed volume |
| **Gas** | far apart, random | move fast in all directions | fills its container, no fixed shape or volume |

When a solid is **heated**, its particles gain energy and move more, so it can **melt** to a liquid and then **evaporate/boil** to a gas.

## Forces between molecules

Particles attract one another. There are two kinds of attraction:

- **Cohesion** — the attraction between **molecules of the same kind** (e.g. water molecules attracting each other). Cohesion holds a liquid together and causes water to form **droplets**.
- **Adhesion** — the attraction between **molecules of different kinds** (e.g. water molecules and the glass of a cup). Adhesion is why water **wets** and sticks to some surfaces.

## Diffusion

**Diffusion** is the **spreading of particles from a region of high concentration to a region of low concentration**, because the particles are moving. It happens fastest in **gases** (particles move freely) and slower in liquids; it does not occur in solids.

- *Example:* the smell of food spreads across a room because its particles **diffuse** through the air.
- Diffusion is faster at **higher temperatures**, because the particles move faster.`,
      workedExample: `**Task.** (a) Use the kinetic theory to explain why a solid has a fixed shape but a gas fills its container. (b) Explain the difference between cohesion and adhesion. (c) Why can you smell food cooking from across a room?

**Part (a) — solid vs gas (kinetic theory)**
- In a **solid**, the particles are **closely packed in fixed positions** and can only **vibrate**; because they cannot move out of place, the solid keeps a **fixed shape and volume**.
- In a **gas**, the particles are **far apart** and move **fast in all directions** with almost no forces holding them, so they **spread out to fill any container**, taking its shape and volume.
The difference is how freely the particles can move.

**Part (b) — cohesion vs adhesion**
- **Cohesion** is the attraction between molecules of the **same kind** (e.g. water to water). It holds a liquid together and forms droplets.
- **Adhesion** is the attraction between molecules of **different kinds** (e.g. water to glass). It makes water stick to and wet a surface.

**Part (c) — smelling food across a room**
The smell reaches you by **diffusion**: the particles giving the food its smell are **constantly moving** and spread out from where they are concentrated (near the food) to where they are less concentrated (across the room), mixing with the air until they reach your nose. Diffusion is fast in gases because the particles move freely, and faster still because cooking is warm.

**Conclusion:** the kinetic theory explains the states of matter by how freely particles move; cohesion attracts like molecules and adhesion attracts unlike ones; and smells travel by diffusion — the spreading of moving particles from high to low concentration.`,
      teachingTip:
        "The particle-arrangement table (solid/liquid/gas: packing, movement, shape/volume) is the backbone — have learners draw the three particle pictures themselves. Cohesion vs adhesion is best fixed by 'same vs different': cohesion = same molecules (water–water), adhesion = different (water–glass). For diffusion, the smell-across-the-room example is universal and memorable; stress that it is driven by particle motion and is faster in gases and at higher temperatures.",
      quiz: [
        {
          prompt: "The kinetic theory says all matter is made of tiny particles that are…",
          options: ["in constant motion", "completely still", "always solid", "invisible and unmoving"],
          correctIndex: 0,
          explanation: "Particles are always moving.",
        },
        {
          prompt: "As temperature rises, the energy of the particles…",
          options: ["increases", "decreases", "stays the same", "disappears"],
          correctIndex: 0,
          explanation: "Higher temperature means more particle motion.",
        },
        {
          prompt: "In a solid, the particles are…",
          options: ["closely packed and vibrate in fixed positions", "far apart and fast", "sliding freely", "absent"],
          correctIndex: 0,
          explanation: "Solid particles vibrate in fixed positions.",
        },
        {
          prompt: "A solid has a…",
          options: ["fixed shape and fixed volume", "no fixed shape", "no fixed volume", "shape of its container"],
          correctIndex: 0,
          explanation: "Solids keep their shape and volume.",
        },
        {
          prompt: "In a liquid, the particles…",
          options: ["are close but move around each other", "are in fixed positions", "are very far apart", "do not move"],
          correctIndex: 0,
          explanation: "Liquid particles slide past one another.",
        },
        {
          prompt: "A liquid takes the shape of its container but has a…",
          options: ["fixed volume", "fixed shape", "no volume", "no particles"],
          correctIndex: 0,
          explanation: "Liquids have fixed volume, variable shape.",
        },
        {
          prompt: "In a gas, the particles are…",
          options: ["far apart and move fast in all directions", "closely packed", "in fixed positions", "not moving"],
          correctIndex: 0,
          explanation: "Gas particles are spread out and fast.",
        },
        {
          prompt: "A gas…",
          options: ["fills its container (no fixed shape or volume)", "has a fixed shape", "has a fixed volume", "cannot be compressed"],
          correctIndex: 0,
          explanation: "Gases fill any container.",
        },
        {
          prompt: "The attraction between molecules of the SAME kind is…",
          options: ["cohesion", "adhesion", "diffusion", "friction"],
          correctIndex: 0,
          explanation: "Cohesion is same-kind attraction.",
        },
        {
          prompt: "The attraction between molecules of DIFFERENT kinds is…",
          options: ["adhesion", "cohesion", "diffusion", "evaporation"],
          correctIndex: 0,
          explanation: "Adhesion is different-kind attraction.",
        },
        {
          prompt: "Water forming into droplets is due to…",
          options: ["cohesion", "adhesion", "diffusion", "gravity only"],
          correctIndex: 0,
          explanation: "Cohesion holds water molecules together.",
        },
        {
          prompt: "Water sticking to and wetting glass is due to…",
          options: ["adhesion", "cohesion", "diffusion", "viscosity"],
          correctIndex: 0,
          explanation: "Adhesion is water attracting to glass.",
        },
        {
          prompt: "Diffusion is the spreading of particles from…",
          options: ["high to low concentration", "low to high concentration", "solid to liquid", "cold to hot only"],
          correctIndex: 0,
          explanation: "Particles spread from high to low concentration.",
        },
        {
          prompt: "Diffusion happens fastest in…",
          options: ["gases", "solids", "metals", "ice"],
          correctIndex: 0,
          explanation: "Gas particles move most freely.",
        },
        {
          prompt: "Diffusion does NOT occur in…",
          options: ["solids", "gases", "liquids", "the air"],
          correctIndex: 0,
          explanation: "Solid particles are fixed, so they don't diffuse.",
        },
        {
          prompt: "Smelling cooking from across a room is an example of…",
          options: ["diffusion", "cohesion", "elasticity", "reflection"],
          correctIndex: 0,
          explanation: "The smell particles diffuse through the air.",
        },
        {
          prompt: "When a solid is heated enough, it can…",
          options: ["melt into a liquid", "become smaller particles", "turn into an element", "lose its atoms"],
          correctIndex: 0,
          explanation: "Heating gives particles energy to melt the solid.",
        },
        {
          prompt: "Diffusion is faster at…",
          options: ["higher temperatures", "lower temperatures", "absolute zero", "constant temperature only"],
          correctIndex: 0,
          explanation: "Warmer particles move faster.",
        },
        {
          prompt: "Which state can be compressed the most easily?",
          options: ["a gas", "a solid", "a liquid", "none can be compressed"],
          correctIndex: 0,
          explanation: "Gas particles are far apart, so gases compress easily.",
        },
        {
          prompt: "The three states of matter are solid, liquid and…",
          options: ["gas", "plasma only", "metal", "powder"],
          correctIndex: 0,
          explanation: "Solid, liquid and gas are the three common states.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Describe the arrangement and movement of particles in a solid, a liquid and a gas.",
          answerKey:
            "Solid — particles closely packed in fixed positions, only vibrating. Liquid — particles close but irregular, moving/sliding around each other. Gas — particles far apart, moving fast in all directions. Award a mark per state correctly described.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The attraction between water molecules and the glass of a cup is an example of…",
          options: ["adhesion", "cohesion", "diffusion", "elasticity"],
          correctIndex: 0,
          answerKey: "Adhesion is attraction between different kinds of molecule.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Define diffusion and state one factor that makes it faster.",
          answerKey:
            "Diffusion is the spreading of particles from a region of high concentration to a region of low concentration (because the particles are moving). It is faster at higher temperatures (or faster in gases than liquids). Award marks for the definition and a valid factor.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Using the kinetic theory, explain the differences between solids, liquids and gases in terms of the arrangement, movement and forces between their particles, and how each affects shape and volume.",
          answerKey:
            "A strong answer uses the kinetic theory (matter is made of moving particles) to explain: in solids, particles are closely packed with strong forces and only vibrate, giving a fixed shape and volume; in liquids, particles are close but with weaker forces and can move around each other, so a liquid has fixed volume but takes the shape of its container; in gases, particles are far apart with very weak forces and move fast in all directions, so a gas fills its container with no fixed shape or volume. It may note that heating increases particle energy, allowing changes of state. Award marks for the arrangement/movement/forces of each state and the correct effect on shape and volume.",
          marks: 5,
        },
      ],
    },
    {
      slug: "elasticity-and-hookes-law",
      title: "Elasticity, Hooke's Law and Surface Effects",
      objective:
        "By the end of the topic, learners should be able to explain elasticity and state and apply Hooke's Law, and describe surface tension and viscosity as properties of liquids.",
      estimatedMinutes: 160,
      notes: `## Elasticity

**Elasticity** is the ability of a material to **return to its original shape and size** after a stretching or squeezing **force is removed**. A material that does this is **elastic** (e.g. a rubber band, a spring); a material that stays deformed is **plastic** (e.g. modelling clay).

- The **elastic limit** is the point beyond which a material will **not** return to its original shape — if you stretch a spring too far, it stays stretched.

## Hooke's Law

**Hooke's Law** describes how a spring (or elastic material) stretches under a force:

> The **extension** of a spring is **directly proportional** to the **force (load)** applied, provided the elastic limit is not exceeded.

$$F = k \\times e$$

- **F** = the force applied (newtons, N)
- **e** = the extension (how much longer it becomes, in metres)
- **k** = the **spring constant** (a measure of the spring's stiffness, in N/m)

**Extension** = stretched length − original length.

\`\`\`svg Force against extension: a straight line up to the elastic limit
<svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Force-extension graph: straight line then curving past the elastic limit">
  <line x1="35" y1="130" x2="220" y2="130" stroke="#0369a1" stroke-width="2"/>
  <line x1="35" y1="130" x2="35" y2="15" stroke="#0369a1" stroke-width="2"/>
  <line x1="35" y1="130" x2="150" y2="45" stroke="#dc2626" stroke-width="2.5"/>
  <path d="M150,45 Q175,35 200,40" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <circle cx="150" cy="45" r="3" fill="#111"/>
  <text x="152" y="40" font-size="8" fill="#111">elastic limit</text>
  <text x="120" y="152" font-size="10" text-anchor="middle" fill="#0369a1">extension</text>
  <text x="16" y="80" font-size="10" fill="#0369a1" transform="rotate(-90 16,80)">force</text>
</svg>
\`\`\`

On a **force–extension graph**, Hooke's Law gives a **straight line through the origin** up to the elastic limit; beyond it the line curves.

## Surface tension

**Surface tension** is a property of a liquid surface that makes it behave like a **thin, stretched skin**. It is caused by the **cohesion** between the liquid's molecules pulling the surface molecules together.

Effects of surface tension:
- Small insects (like pond skaters) can **walk on water**.
- Water forms **droplets** and rises slightly at the edges of a container.
- A needle can be made to **float** on water despite being denser.

## Viscosity

**Viscosity** is a measure of how much a fluid **resists flowing** — its "thickness".

- A **high-viscosity** fluid flows **slowly** (e.g. honey, palm oil, syrup).
- A **low-viscosity** fluid flows **easily** (e.g. water, petrol).
- Viscosity of a liquid usually **decreases when it is heated** (warm honey flows more easily).

Viscosity matters for engine oils, blood flow, and how liquids are pumped and poured.`,
      workedExample: `**Task.** A spring has a natural length of 20 cm. When a force of 6 N is hung on it, it stretches to 26 cm.
(a) Find the extension. (b) Calculate the spring constant k. (c) What force would give an extension of 4 cm (within the elastic limit)?

**Part (a) — extension**
Extension = stretched length − original length = 26 cm − 20 cm = **6 cm = 0.06 m**.

**Part (b) — spring constant**
Hooke's Law: F = k × e, so k = F ÷ e.
k = 6 N ÷ 0.06 m = **100 N/m**.

**Part (c) — force for a 4 cm extension**
Convert 4 cm to 0.04 m. Using F = k × e:
F = 100 N/m × 0.04 m = **4 N**.

**Check:** the extension (0.06 m) doubled the load compared to a smaller load would double the extension — the extension is directly proportional to the force, as Hooke's Law requires.

**Conclusion:** the extension is 6 cm (0.06 m), the spring constant is 100 N/m, and a 4 cm extension needs a 4 N force — all found by applying F = k × e, valid while the spring stays within its elastic limit.`,
      teachingTip:
        "Two common errors with Hooke's Law: using the stretched length instead of the EXTENSION (extension = new length − original length), and forgetting to convert cm to metres. Drill both. Emphasise that the law only holds up to the elastic limit — the straight-line region of the graph. Surface tension (the 'skin' that lets insects walk on water) and viscosity (how thick/slow a fluid is — honey vs water) are best taught with quick real examples the learners have seen.",
      quiz: [
        {
          prompt: "Elasticity is the ability of a material to…",
          options: ["return to its original shape after a force is removed", "stay bent forever", "melt when heated", "float on water"],
          correctIndex: 0,
          explanation: "Elastic materials spring back.",
        },
        {
          prompt: "Which material is elastic?",
          options: ["a rubber band", "modelling clay", "wet paper", "chewing gum"],
          correctIndex: 0,
          explanation: "A rubber band returns to shape.",
        },
        {
          prompt: "A material that stays deformed after the force is removed is…",
          options: ["plastic", "elastic", "rigid", "brittle"],
          correctIndex: 0,
          explanation: "Plastic materials keep the new shape.",
        },
        {
          prompt: "The point beyond which a material will not return to its original shape is the…",
          options: ["elastic limit", "melting point", "boiling point", "spring constant"],
          correctIndex: 0,
          explanation: "Past the elastic limit it stays deformed.",
        },
        {
          prompt: "Hooke's Law states that extension is directly proportional to the…",
          options: ["force applied", "temperature", "mass of the spring", "colour"],
          correctIndex: 0,
          explanation: "Extension ∝ force (within the elastic limit).",
        },
        {
          prompt: "Hooke's Law is written as…",
          options: ["F = k × e", "F = m × a", "F = k ÷ e", "F = e ÷ k"],
          correctIndex: 0,
          explanation: "Force = spring constant × extension.",
        },
        {
          prompt: "In F = k × e, k is the…",
          options: ["spring constant (stiffness)", "extension", "mass", "force"],
          correctIndex: 0,
          explanation: "k measures the spring's stiffness.",
        },
        {
          prompt: "Extension is calculated as…",
          options: ["stretched length − original length", "original length only", "stretched length only", "force ÷ time"],
          correctIndex: 0,
          explanation: "Extension is how much longer it becomes.",
        },
        {
          prompt: "A spring stretches from 10 cm to 15 cm. The extension is…",
          options: ["5 cm", "15 cm", "10 cm", "25 cm"],
          correctIndex: 0,
          explanation: "15 − 10 = 5 cm.",
        },
        {
          prompt: "On a force–extension graph, Hooke's Law gives a…",
          options: ["straight line through the origin", "curve from the start", "horizontal line", "circle"],
          correctIndex: 0,
          explanation: "A straight line up to the elastic limit.",
        },
        {
          prompt: "If F = 10 N gives an extension of 0.05 m, the spring constant is…",
          options: ["200 N/m", "0.5 N/m", "2 N/m", "50 N/m"],
          correctIndex: 0,
          explanation: "k = F ÷ e = 10 ÷ 0.05 = 200 N/m.",
        },
        {
          prompt: "The 'thin skin' behaviour of a liquid surface is called…",
          options: ["surface tension", "viscosity", "elasticity", "diffusion"],
          correctIndex: 0,
          explanation: "Surface tension makes the surface act like a skin.",
        },
        {
          prompt: "Surface tension is caused by … between the liquid's molecules.",
          options: ["cohesion", "adhesion", "friction", "gravity"],
          correctIndex: 0,
          explanation: "Cohesion pulls the surface molecules together.",
        },
        {
          prompt: "An insect walking on water is an effect of…",
          options: ["surface tension", "elasticity", "viscosity", "diffusion"],
          correctIndex: 0,
          explanation: "Surface tension supports the insect.",
        },
        {
          prompt: "Viscosity is a measure of how much a fluid…",
          options: ["resists flowing", "stretches", "reflects light", "conducts heat"],
          correctIndex: 0,
          explanation: "Viscosity is resistance to flow.",
        },
        {
          prompt: "Which liquid has the HIGHEST viscosity?",
          options: ["honey", "water", "petrol", "alcohol"],
          correctIndex: 0,
          explanation: "Honey is thick and flows slowly.",
        },
        {
          prompt: "A low-viscosity fluid…",
          options: ["flows easily", "flows slowly", "does not flow", "is always solid"],
          correctIndex: 0,
          explanation: "Low viscosity means it flows easily (e.g. water).",
        },
        {
          prompt: "The viscosity of a liquid usually … when it is heated.",
          options: ["decreases", "increases", "stays the same", "becomes infinite"],
          correctIndex: 0,
          explanation: "Warm honey flows more easily — viscosity falls.",
        },
        {
          prompt: "Which force applied to a 100 N/m spring gives a 0.02 m extension?",
          options: ["2 N", "5 N", "50 N", "0.2 N"],
          correctIndex: 0,
          explanation: "F = k × e = 100 × 0.02 = 2 N.",
        },
        {
          prompt: "Hooke's Law only holds…",
          options: ["within the elastic limit", "beyond the elastic limit", "at high temperature only", "for gases only"],
          correctIndex: 0,
          explanation: "Extension is proportional to force only up to the elastic limit.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "State Hooke's Law and give its formula, defining each symbol.",
          answerKey:
            "Hooke's Law: the extension of a spring is directly proportional to the force (load) applied, provided the elastic limit is not exceeded. Formula: F = k × e, where F = force (N), e = extension (m), k = spring constant/stiffness (N/m). Award marks for the law and the formula with symbols defined.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "A spring of natural length 15 cm stretches to 20 cm under a 10 N load. Find the extension and the spring constant.",
          answerKey:
            "Extension = 20 − 15 = 5 cm = 0.05 m. k = F ÷ e = 10 ÷ 0.05 = 200 N/m. Award marks for the extension (in metres) and the correct spring constant.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which property explains why honey pours more slowly than water?",
          options: ["viscosity", "surface tension", "elasticity", "diffusion"],
          correctIndex: 0,
          answerKey: "Honey has higher viscosity, so it resists flowing.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain what is meant by elasticity and the elastic limit, and describe how a force–extension graph illustrates Hooke's Law.",
          answerKey:
            "A strong answer explains that elasticity is a material's ability to return to its original shape and size when the deforming force is removed, and that the elastic limit is the point beyond which it will no longer return to its original shape (staying permanently stretched). It describes that a force–extension graph is a straight line through the origin while Hooke's Law holds (extension proportional to force), showing the constant ratio F/e (the spring constant); beyond the elastic limit the line curves and the law no longer applies. Award marks for defining elasticity and the elastic limit, and correctly linking the straight-line graph (and its later curving) to Hooke's Law.",
          marks: 5,
        },
      ],
    },
  ],
};
