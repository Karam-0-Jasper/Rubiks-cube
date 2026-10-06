import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Geography, Grade 11,
// Semester One, Period I, Unit 1 Physical Geography — Landforms resulting from
// internal and external forces: Faulting and Folding (Diastrophism);
// Vulcanicity; Weathering and Mass Wasting; and the Action of Running Water
// (Rivers), Winds and Waves.
export const geographyG11P1: PeriodContent = {
  grade: 11,
  number: 1,
  title: "Landforms Produced by Internal and External Forces",
  summary:
    "Period I of the MoE Grade 11 Geography syllabus. Learners study the internal (endogenic) forces that build landforms — plate tectonics, continental drift, folding, faulting and vulcanicity — and the external (exogenic) forces that wear them down and rebuild them — weathering, mass wasting, and the erosive and depositional work of rivers, wind and waves.",
  topics: [
    {
      // source: Geosciences LibreTexts — The Physical Environment (Ritter), 15.01 Plate Tectonics and Continental Drift and 15.3.01 Folding and Faulting (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/The_Physical_Environment_(Ritter)/15:_Tectonics_and_Landforms/15.01:_Plate_Tectonics_and_Continental_Drift)
      slug: "faulting-and-folding-diastrophism",
      title: "Faulting and Folding (Diastrophism)",
      objective:
        "By the end of the topic, learners should be able to explain plate tectonics and the theory of continental drift with its evidence, and describe the major landforms produced by the folding and faulting of the crust.",
      estimatedMinutes: 160,
      notes: `## Introduction

- **Diastrophism** — the large-scale movement and deformation of the Earth's crust by internal (endogenic) forces. It includes **folding** (bending) and **faulting** (fracturing) of rocks.
- These forces are driven by the movement of the great plates that make up the Earth's outer shell.

## Plate tectonics — definition

- **Plate tectonics** — the process of the formation, movement and destruction of the rigid plates that make up the Earth's lithosphere.
- The lithosphere is broken into several large **plates** that float on the hotter, softer rock of the mantle below and move a few centimetres each year.
- Two ideas combine to form the theory: **continental drift** and **seafloor spreading**.

## Oceanic and continental plates

- Plates are capped by two kinds of crust:
- **Continental crust** — thick (up to about 70 km), old, and made of lighter (less dense) rock such as granite.
- **Oceanic crust** — thinner (about 5–10 km), younger, and made of denser, darker rock such as basalt.
- Because oceanic crust is **denser**, when two plates collide the heavier oceanic plate sinks (subducts) beneath the lighter continental plate.

## Plate boundaries and their effects

| Boundary | Movement | Effect / landform |
|---|---|---|
| Divergent | plates move apart | new crust forms; mid-ocean ridges, rift valleys |
| Convergent | plates move together | subduction, deep trenches, fold mountains, volcanoes |
| Transform | plates slide past each other | earthquakes, e.g. the San Andreas Fault |

- **Divergent boundary:** new material rises from the mid-ocean ridge and is added to the ocean floor — this is **seafloor spreading**.
- **Convergent boundary:** collision causes subduction, melting, volcanic activity and the crumpling of rock into fold mountains.
- **Transform boundary:** plates grind past one another, producing frequent earthquakes.
- The plates move because heat from radioactive decay in the mantle sets up slow **convection currents** that drag the plates along.

## The theory of continental drift — definition

- **Continental drift** — the theory, proposed by **Alfred Wegener**, that the continents were once joined in a single supercontinent called **Pangaea** and have since slowly drifted to their present positions.
- The present arrangement of the continents is therefore not the same as it was in the geological past.

## Evidence (proofs) for continental drift

- **The fit of the continents** — the east coast of South America and the west coast of Africa fit together like pieces of a jigsaw puzzle.
- **Matching rocks** — rocks of the same type, age and structure are found on both sides of the Atlantic; mountain belts line up when the continents are rejoined.
- **Matching fossils** — fossils of the fern *Glossopteris* and of land animals such as *Mesosaurus* occur in South America, Africa, India, Antarctica and Australia — continents now separated by oceans.
- **Glacial (climate) evidence** — ancient glacial deposits and scratch marks match up across continents when they are reassembled, showing they were once joined near the pole.
- **Magnetic stripes** — parallel stripes of reversed magnetism on either side of mid-ocean ridges prove that new seafloor has been forming and spreading.

## Folding

- **Folding** — the bending of rock layers when they are squeezed by **compression** along colliding plate boundaries.
- **Anticline** — an up-arched fold; forms a ridge.
- **Syncline** — a down-warped fold; forms a trough or valley.
- **Limbs** — the two sides of a fold; the **axial plane** is the imaginary plane that divides a fold in half.

Types of fold by strength of compression:

- **Symmetrical (simple) fold** — gentle, equal compression; near-vertical axial plane and evenly dipping limbs.
- **Asymmetrical fold** — unequal compression; one limb dips more steeply than the other.
- **Overturned fold** — strong one-sided compression tilts the fold so one limb is pushed over the other.
- **Recumbent fold** — extreme compression lays the fold almost flat (nearly horizontal axial plane).

\`\`\`svg An anticline (up-fold) and a syncline (down-fold)
<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross section showing an anticline arching up and a syncline dipping down">
  <path d="M10,90 Q75,20 140,90 Q205,20 270,90 L290,90" fill="none" stroke="#0f766e" stroke-width="3"/>
  <path d="M10,100 Q75,30 140,100 Q205,30 270,100 L290,100" fill="none" stroke="#0d9488" stroke-width="3"/>
  <text x="75" y="15" font-size="11" text-anchor="middle" fill="#134e4a">Anticline</text>
  <text x="205" y="18" font-size="11" text-anchor="middle" fill="#134e4a">Anticline</text>
  <text x="140" y="115" font-size="11" text-anchor="middle" fill="#134e4a">Syncline</text>
</svg>
\`\`\`

## Faulting

- **Fault** — a fracture in the crust along which the rocks have moved. The **fault plane** is the surface of the break; the **fault scarp** is the exposed cliff face.
- **Hanging wall** — the block of rock lying above the fault plane.
- **Footwall** — the block lying below the fault plane.

Types of fault:

- **Normal fault** — caused by **tension** (pulling apart); the hanging wall slips down relative to the footwall.
- **Reverse fault** — caused by **compression** (pushing together); the hanging wall is pushed up over the footwall. A low-angle reverse fault is a **thrust fault**.
- **Tear (strike-slip) fault** — caused by **shear**; the blocks slide horizontally past each other, e.g. the San Andreas Fault.

Landforms from faulting:

- **Block (fault-block) mountain / horst** — an up-thrown block standing between two faults.
- **Rift valley (graben)** — a down-dropped block between two roughly parallel faults, e.g. the East African Rift Valley.
- Sudden slipping of rock along a fault sends out shock waves felt as an **earthquake**.

\`\`\`svg Horst and graben produced by faulting
<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Block diagram showing an up-thrown horst and a down-dropped graben rift valley">
  <rect x="10" y="40" width="80" height="60" fill="#fcd34d" stroke="#92400e"/>
  <rect x="90" y="60" width="70" height="40" fill="#fbbf24" stroke="#92400e"/>
  <rect x="160" y="40" width="80" height="60" fill="#fcd34d" stroke="#92400e"/>
  <rect x="240" y="60" width="50" height="40" fill="#fbbf24" stroke="#92400e"/>
  <text x="200" y="35" font-size="11" text-anchor="middle" fill="#78350f">Horst</text>
  <text x="125" y="55" font-size="11" text-anchor="middle" fill="#78350f">Graben (rift valley)</text>
</svg>
\`\`\`

## Common errors and misconceptions

- **Confusing folding with faulting** — folding **bends** rock (it behaves plastically); faulting **breaks** rock (it fractures and slips).
- **Mixing up anticline and syncline** — an **anticline** arches **up**; a **syncline** dips **down**.
- **Getting the fault movement wrong** — in a **normal** fault the hanging wall goes **down** (tension); in a **reverse** fault it goes **up** (compression).
- **Thinking continental drift has no proof** — the fit of the coasts, matching rocks and fossils, glacial marks and magnetic stripes are all evidence.`,
      workedExample: `**Task.** A geographer examining a region finds: (a) rock layers bent into a broad up-arch; (b) a straight valley with steep parallel sides where a block of land has dropped between two faults. Name each landform, state whether it results from folding or faulting, and give the force responsible.

**(a) The up-arched rock layers → anticline**
- **Process:** folding (the rock bent rather than broke).
- **Force:** compression — the layers were squeezed together, forcing them to arch upward. An up-fold is an **anticline**; the matching down-fold beside it would be a **syncline**.

**(b) The dropped block between two faults → rift valley (graben)**
- **Process:** faulting (the crust fractured and moved).
- **Force:** tension — pulling apart allowed the central block to sink between two normal faults, forming a **graben** or **rift valley** (the East African Rift Valley is a real example).

**Conclusion:** compression tends to **fold** rock and produce anticlines, synclines and fold mountains; tension tends to **fault** rock and produce rift valleys and block mountains.`,
      quiz: [
        {
          prompt: "Plate tectonics is best defined as the…",
          options: [
            "formation, movement and destruction of the Earth's lithospheric plates",
            "study of the atmosphere",
            "erosion of rock by rivers",
            "growth of soil",
          ],
          correctIndex: 0,
          explanation: "Plate tectonics describes how the rigid plates form, move and are destroyed.",
        },
        {
          prompt: "Compared with oceanic crust, continental crust is…",
          options: ["thicker and less dense", "thinner and denser", "made of basalt", "younger"],
          correctIndex: 0,
          explanation: "Continental crust is thick and light (granite); oceanic crust is thin and dense (basalt).",
        },
        {
          prompt: "At a divergent plate boundary, plates…",
          options: ["move apart and new crust forms", "collide", "slide past each other", "stay still"],
          correctIndex: 0,
          explanation: "Divergent boundaries pull apart, forming new seafloor at mid-ocean ridges.",
        },
        {
          prompt: "When an oceanic and a continental plate collide, the oceanic plate…",
          options: ["sinks beneath the continental plate", "rides over the continent", "stops moving", "turns to gas"],
          correctIndex: 0,
          explanation: "The denser oceanic plate subducts beneath the lighter continental plate.",
        },
        {
          prompt: "The San Andreas Fault is an example of which boundary?",
          options: ["transform", "divergent", "convergent", "subduction only"],
          correctIndex: 0,
          explanation: "Plates slide past each other there, making it a transform boundary.",
        },
        {
          prompt: "The supercontinent proposed by Wegener was called…",
          options: ["Pangaea", "Laurasia only", "Gondwana only", "Atlantis"],
          correctIndex: 0,
          explanation: "Wegener named the single ancient landmass Pangaea.",
        },
        {
          prompt: "Which is evidence for continental drift?",
          options: [
            "the coasts of South America and Africa fit together",
            "the Sun rises in the east",
            "rivers flow downhill",
            "the Moon causes tides",
          ],
          correctIndex: 0,
          explanation: "The jigsaw fit of the continents is a classic proof.",
        },
        {
          prompt: "Matching fossils of Glossopteris on several continents suggest they were once…",
          options: ["joined together", "always separate", "underwater", "covered in ice today"],
          correctIndex: 0,
          explanation: "The same fossils across oceans show the continents were once joined.",
        },
        {
          prompt: "Parallel magnetic stripes on either side of a mid-ocean ridge are evidence of…",
          options: ["seafloor spreading", "wind erosion", "river deposition", "soil formation"],
          correctIndex: 0,
          explanation: "The stripes record new seafloor forming and spreading outward.",
        },
        {
          prompt: "Plate movement is ultimately driven by…",
          options: ["convection currents in the mantle", "ocean tides", "the jet stream", "earthquakes"],
          correctIndex: 0,
          explanation: "Heat from the mantle sets up convection currents that drag the plates.",
        },
        {
          prompt: "The bending of rock layers under compression is called…",
          options: ["folding", "faulting", "weathering", "erosion"],
          correctIndex: 0,
          explanation: "Folding is the plastic bending of rock when squeezed.",
        },
        {
          prompt: "An up-arched fold is an…",
          options: ["anticline", "syncline", "graben", "escarpment"],
          correctIndex: 0,
          explanation: "An anticline arches upward; a syncline dips downward.",
        },
        {
          prompt: "A down-warped fold that forms a trough is a…",
          options: ["syncline", "anticline", "horst", "dome"],
          correctIndex: 0,
          explanation: "A syncline is the down-fold between anticlines.",
        },
        {
          prompt: "A fold laid almost flat by extreme compression is a…",
          options: ["recumbent fold", "symmetrical fold", "monocline", "normal fault"],
          correctIndex: 0,
          explanation: "Recumbent folds have a nearly horizontal axial plane.",
        },
        {
          prompt: "A fracture in the crust along which rocks move is a…",
          options: ["fault", "fold", "delta", "dune"],
          correctIndex: 0,
          explanation: "A fault is a break with movement of the rock blocks.",
        },
        {
          prompt: "In a normal fault the hanging wall…",
          options: ["slips down relative to the footwall", "is pushed up", "moves sideways only", "does not move"],
          correctIndex: 0,
          explanation: "Tension drops the hanging wall down in a normal fault.",
        },
        {
          prompt: "A reverse fault is produced by…",
          options: ["compression", "tension", "no force", "wind"],
          correctIndex: 0,
          explanation: "Compression pushes the hanging wall up over the footwall.",
        },
        {
          prompt: "A tear (strike-slip) fault results from…",
          options: ["shear (sideways) movement", "vertical tension", "melting", "deposition"],
          correctIndex: 0,
          explanation: "Blocks slide horizontally past each other under shear.",
        },
        {
          prompt: "A down-dropped block of land between two faults forms a…",
          options: ["rift valley (graben)", "block mountain", "delta", "spit"],
          correctIndex: 0,
          explanation: "A graben (rift valley) sinks between two normal faults.",
        },
        {
          prompt: "The East African Rift Valley is an example of a landform produced by…",
          options: ["faulting", "river deposition", "wind erosion", "wave action"],
          correctIndex: 0,
          explanation: "It is a rift valley formed where the crust has been faulted apart.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Distinguish between oceanic and continental plates in terms of thickness and density.",
          answerKey:
            "Continental crust is thick (up to ~70 km) and made of lighter, less dense rock (granite); oceanic crust is thin (~5–10 km) and made of denser rock (basalt). Award marks for both thickness and density comparisons.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State three pieces of evidence for the theory of continental drift.",
          answerKey:
            "Any three of: the jigsaw fit of the continents (e.g. South America and Africa); matching rocks/mountain belts across oceans; matching fossils (e.g. Glossopteris, Mesosaurus); matching glacial deposits/scratches; magnetic stripes showing seafloor spreading. One mark each.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which force produces a normal fault and a rift valley?",
          options: ["tension", "compression", "shear only", "deposition"],
          correctIndex: 0,
          answerKey: "Tension (pulling apart) drops blocks down along normal faults, forming rift valleys.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the three types of plate boundary and give one effect of each.",
          answerKey:
            "Divergent – plates move apart, forming new crust/mid-ocean ridges; Convergent – plates collide, causing subduction, trenches, fold mountains and volcanoes; Transform – plates slide past each other, causing earthquakes. One mark per boundary correctly named with an effect.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how the internal forces of folding and faulting produce major landforms, referring to anticlines, synclines, fold mountains, block mountains and rift valleys.",
          answerKey:
            "A strong answer explains that compression squeezes rock and, if it bends, produces folds — anticlines (up-folds), synclines (down-folds) and, on a large scale, fold mountains. Where rock fractures instead of bending, faulting occurs: tension drops blocks to form rift valleys (grabens) while up-thrown blocks form block (fault) mountains/horsts. Should link the force (compression vs tension) to the landform and give at least one real example (e.g. East African Rift Valley). Award marks for correct processes, landforms and examples.",
          marks: 5,
        },
      ],
    },
    {
      // source: Geosciences LibreTexts — Earth Science (Lumen), 5.03 Volcanic Landforms and Geothermal Activity; and Physical Geology (Earle), 3.05 Intrusive Igneous Bodies (https://geo.libretexts.org/Courses/Lumen_Learning/Earth_Science_(Lumen)/05:_Volcanoes/5.03:_Volcanic_Landforms_and_Geothermal_Activity)
      slug: "vulcanicity",
      title: "Vulcanicity",
      objective:
        "By the end of the topic, learners should be able to define vulcanicity and its causes, describe the intrusive and extrusive features it produces, and discuss the effects of volcanicity and earthquakes.",
      estimatedMinutes: 150,
      notes: `## Introduction

- **Vulcanicity (volcanism)** — the process by which molten rock (**magma**), gases and other materials move from inside the Earth towards or onto the surface, and the features this produces.
- **Magma** — molten rock below the surface. When it reaches the surface it is called **lava**.

## Causes of vulcanicity

- Magma forms where the mantle melts, especially near **plate boundaries**.
- At **convergent boundaries** a subducting plate melts and feeds magma upward.
- At **divergent boundaries** magma rises to fill the gap as plates separate.
- At **hot spots** a plume of hot mantle rock melts through a plate (e.g. Hawaii).
- Magma is less dense than the surrounding rock, so it rises; if it reaches the surface it erupts.

## Intrusive (plutonic) features

Formed when magma cools and hardens **below** the surface, producing large crystals. A cooled body of intrusive rock is a **pluton**.

- **Batholith** — a huge dome-shaped mass of intrusive rock with an exposed area over 100 km²; a smaller one is a **stock**.
- **Dyke (dike)** — a sheet of rock that cuts **across** the existing rock layers (discordant).
- **Sill** — a sheet of rock that lies **parallel** to the existing layers (concordant).
- **Laccolith** — a sill-like body that has pushed the overlying rock upward into a dome.
- These features become visible only after the rock above them is uplifted and eroded away.

## Extrusive (volcanic) features

Formed when lava and other material reach the surface and build up.

- **Composite cone (stratovolcano)** — a tall, steep cone built of alternating layers of lava and ash from viscous, explosive eruptions.
- **Ash and cinder cone** — a small, steep cone built of loose fragments (cinders, ash) thrown out during eruption.
- **Shield volcano** — a broad, gently sloping cone built of runny (low-viscosity) lava.
- **Lava plateau / lava plain** — a wide, flat surface built by large volumes of very fluid lava (e.g. the Columbia Plateau, over 161,000 km²).
- **Lava dome** — a rounded blob of thick, viscous lava that piles up over a vent.
- **Crater** — the bowl-shaped hollow at the top of a volcano around the vent.
- **Caldera** — a very large, basin-shaped depression formed when a volcano collapses into its emptied magma chamber.

## Geothermal features

- **Hot spring** — water heated by hot rock that rises gently to the surface.
- **Geyser** — superheated water forced up a narrow passage that erupts periodically as a jet of hot water and steam (e.g. Old Faithful, erupting every 60–70 minutes).

\`\`\`svg Intrusive and extrusive volcanic features
<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross section of a volcano showing magma chamber, batholith, sill, dyke and surface cone">
  <rect x="0" y="70" width="320" height="100" fill="#d6bfa3"/>
  <ellipse cx="150" cy="150" rx="70" ry="24" fill="#ef4444" stroke="#7f1d1d"/>
  <text x="150" y="153" font-size="9" text-anchor="middle" fill="#fff">magma chamber</text>
  <rect x="120" y="95" width="60" height="8" fill="#b91c1c"/><text x="200" y="103" font-size="8" fill="#7f1d1d">sill</text>
  <rect x="90" y="70" width="7" height="55" fill="#b91c1c"/><text x="60" y="95" font-size="8" fill="#7f1d1d">dyke</text>
  <polygon points="130,70 150,25 170,70" fill="#78716c" stroke="#44403c"/>
  <polygon points="145,45 150,25 155,45" fill="#ef4444"/>
  <text x="150" y="20" font-size="9" text-anchor="middle" fill="#44403c">cone</text>
</svg>
\`\`\`

## Effects of volcanicity

Positive:

- **Fertile soils** — weathered volcanic ash forms rich soils good for farming.
- **Mineral deposits** — valuable minerals form in and around volcanoes.
- **Geothermal energy** — underground heat can be tapped for power.
- **Tourism** — craters, hot springs and geysers attract visitors.

Negative:

- Eruptions can cause **loss of life**, destroy property and farmland, and release ash and gases that cause **pollution**.

## Effects of earthquakes

- **Loss of life** from collapsing buildings.
- **Displacement of people** who lose their homes.
- **Destruction of property** and infrastructure (roads, bridges, water and power lines).
- May trigger landslides and, at sea, tsunamis.

## Common errors and misconceptions

- **Confusing magma and lava** — molten rock **below** ground is **magma**; the same material **on** the surface is **lava**.
- **Mixing up intrusive and extrusive** — **intrusive** features (batholith, dyke, sill) cool **inside** the crust; **extrusive** features (cones, lava plateaus, calderas) form **on** the surface.
- **Confusing a crater with a caldera** — a **crater** is the small vent hollow; a **caldera** is a huge collapse depression, far larger than a crater.
- **Thinking volcanoes are only harmful** — they also give fertile soils, minerals, geothermal energy and tourism.`,
      workedExample: `**Task.** For each feature say whether it is intrusive or extrusive and describe how it forms: (i) a batholith; (ii) a composite cone; (iii) a caldera.

**(i) Batholith → intrusive**
- Magma rises but cools and solidifies **below** the surface, slowly, forming a very large dome of coarse-grained rock (exposed area over 100 km²). It is only seen at the surface after uplift and erosion strip away the rock above it.

**(ii) Composite cone (stratovolcano) → extrusive**
- Built **on** the surface by repeated eruptions of thick, sticky lava and ash. The alternating layers of lava and ash produce a tall, steep-sided cone.

**(iii) Caldera → extrusive**
- Forms **on** the surface when a large volcano empties its magma chamber and the summit **collapses** inward, leaving a huge basin-shaped depression far larger than an ordinary crater.

**Conclusion:** intrusive features cool underground and appear only after erosion; extrusive features are built at the surface by lava, ash and collapse.`,
      quiz: [
        {
          prompt: "Vulcanicity refers to the movement of magma and gases…",
          options: ["towards or onto the Earth's surface", "through the atmosphere", "along rivers", "across deserts"],
          correctIndex: 0,
          explanation: "Vulcanicity is the rise of molten material toward or onto the surface.",
        },
        {
          prompt: "Molten rock below the surface is called…",
          options: ["magma", "lava", "ash", "cinder"],
          correctIndex: 0,
          explanation: "Below ground it is magma; at the surface it is lava.",
        },
        {
          prompt: "Volcanoes are most common near…",
          options: ["plate boundaries and hot spots", "the centres of plates only", "river mouths", "deserts"],
          correctIndex: 0,
          explanation: "Magma reaches the surface mainly at plate boundaries and hot spots.",
        },
        {
          prompt: "A huge dome of intrusive rock over 100 km² in area is a…",
          options: ["batholith", "sill", "dyke", "cinder cone"],
          correctIndex: 0,
          explanation: "A batholith is the largest intrusive body; a smaller one is a stock.",
        },
        {
          prompt: "A sheet of intrusive rock that cuts across existing layers is a…",
          options: ["dyke", "sill", "laccolith", "crater"],
          correctIndex: 0,
          explanation: "A dyke is discordant, cutting across the rock layers.",
        },
        {
          prompt: "A sheet of intrusive rock lying parallel to existing layers is a…",
          options: ["sill", "dyke", "batholith", "caldera"],
          correctIndex: 0,
          explanation: "A sill is concordant, running parallel to the layers.",
        },
        {
          prompt: "A sill-like body that has domed up the rock above it is a…",
          options: ["laccolith", "dyke", "shield volcano", "spit"],
          correctIndex: 0,
          explanation: "A laccolith pushes the overlying rock upward into a dome.",
        },
        {
          prompt: "Intrusive rocks have large crystals because they cool…",
          options: ["slowly underground", "quickly at the surface", "in water", "in air"],
          correctIndex: 0,
          explanation: "Slow underground cooling gives crystals time to grow large.",
        },
        {
          prompt: "A tall, steep volcano built of alternating lava and ash is a…",
          options: ["composite cone (stratovolcano)", "shield volcano", "lava plateau", "sill"],
          correctIndex: 0,
          explanation: "Composite cones form from viscous, explosive eruptions.",
        },
        {
          prompt: "A broad, gently sloping volcano built of runny lava is a…",
          options: ["shield volcano", "cinder cone", "composite cone", "caldera"],
          correctIndex: 0,
          explanation: "Low-viscosity lava spreads far, forming a gentle shield.",
        },
        {
          prompt: "A wide, flat surface built by large volumes of fluid lava is a…",
          options: ["lava plateau", "batholith", "geyser", "dyke"],
          correctIndex: 0,
          explanation: "Lava plateaus/plains form from extensive fluid lava flows.",
        },
        {
          prompt: "The bowl-shaped hollow at the top of a volcano is the…",
          options: ["crater", "caldera", "sill", "dune"],
          correctIndex: 0,
          explanation: "The crater is the small hollow around the vent.",
        },
        {
          prompt: "A very large basin formed when a volcano collapses is a…",
          options: ["caldera", "crater", "cinder cone", "laccolith"],
          correctIndex: 0,
          explanation: "A caldera forms by collapse and is far larger than a crater.",
        },
        {
          prompt: "A jet of hot water and steam that erupts periodically is a…",
          options: ["geyser", "hot spring", "dyke", "spring tide"],
          correctIndex: 0,
          explanation: "Geysers erupt superheated water through a narrow passage.",
        },
        {
          prompt: "Which is a positive effect of volcanic activity?",
          options: ["fertile soils from weathered ash", "loss of life", "destruction of farmland", "air pollution"],
          correctIndex: 0,
          explanation: "Weathered volcanic ash forms rich, fertile soils.",
        },
        {
          prompt: "Underground volcanic heat can be tapped as…",
          options: ["geothermal energy", "tidal energy", "wind energy", "solar energy"],
          correctIndex: 0,
          explanation: "Geothermal energy uses the Earth's internal heat.",
        },
        {
          prompt: "Which is a negative effect of an earthquake?",
          options: ["destruction of property and loss of life", "richer soils", "more tourism", "geothermal power"],
          correctIndex: 0,
          explanation: "Earthquakes kill people and destroy buildings and infrastructure.",
        },
        {
          prompt: "Extrusive features form…",
          options: ["on the surface", "deep in the mantle", "in the ocean floor only", "underground only"],
          correctIndex: 0,
          explanation: "Extrusive features are built at the Earth's surface.",
        },
        {
          prompt: "The small cone built of loose ash and cinders thrown from a vent is a…",
          options: ["cinder cone", "batholith", "sill", "shield volcano"],
          correctIndex: 0,
          explanation: "Cinder/ash cones are small and steep, made of loose fragments.",
        },
        {
          prompt: "Old Faithful, which erupts about every 60–70 minutes, is a famous…",
          options: ["geyser", "caldera", "batholith", "delta"],
          correctIndex: 0,
          explanation: "Old Faithful is a regularly erupting geyser.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define vulcanicity and distinguish between magma and lava.",
          answerKey:
            "Vulcanicity is the movement of molten rock and gases from inside the Earth towards or onto the surface, and the features it produces. Magma is molten rock below the surface; lava is molten rock that has reached the surface. Award marks for the definition and the magma/lava distinction.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name two intrusive and two extrusive volcanic features.",
          answerKey:
            "Intrusive (any two): batholith, dyke, sill, laccolith. Extrusive (any two): composite cone, cinder/ash cone, shield volcano, lava plateau/plain, crater, caldera, lava dome. Award a mark per correct feature (max 4).",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which feature forms when a volcano collapses into its emptied magma chamber?",
          options: ["caldera", "crater", "batholith", "sill"],
          correctIndex: 0,
          answerKey: "A caldera is a large basin formed by collapse, much larger than a crater.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State two positive and two negative effects of volcanic activity.",
          answerKey:
            "Positive (any two): fertile soils, mineral deposits, geothermal energy, tourism. Negative (any two): loss of life, destruction of property/farmland, air pollution from ash and gases. Award a mark per valid effect (max 4).",
          marks: 4,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain, with examples, why intrusive and extrusive volcanic features differ in where they form and in their appearance.",
          answerKey:
            "A strong answer explains that intrusive features (batholith, dyke, sill, laccolith) form when magma cools slowly BELOW the surface, giving large crystals and bodies that are only exposed after uplift and erosion; extrusive features (composite/shield/cinder cones, lava plateaus, craters, calderas) form when lava reaches the surface and builds up or collapses. Should link cooling location and speed to appearance and give examples. Award marks for the intrusive/extrusive contrast, correct features and examples.",
          marks: 5,
        },
      ],
    },
    {
      // source: Geosciences LibreTexts — Physical Geography (Lumen), 7.02 Weathering Processes; and Physical Geography and Natural Disasters (Dastrup), 5.03 Mass Wasting (https://geo.libretexts.org/Courses/Lumen_Learning/Physical_Geography_(Lumen)/07:_Weathering_Erosion_and_Deposition/7.02:_Weathering_Processes)
      slug: "weathering-and-mass-wasting",
      title: "Weathering and Mass Wasting",
      objective:
        "By the end of the topic, learners should be able to define denudation, distinguish weathering from mass wasting, describe the physical, chemical and biological types of weathering, and outline the types and effects of mass wasting.",
      estimatedMinutes: 155,
      notes: `## Introduction

- **Denudation** — the overall wearing away and lowering of the land surface by weathering, mass wasting, erosion and transport.
- Denudation works in a sequence: **weathering** breaks rock down in place → **mass wasting** moves it downslope by gravity → **erosion and transport** carry it away → **deposition** lays it down elsewhere.

## Denudation — factors and sequence

- **Factors affecting denudation:** climate (rainfall, temperature), rock type and hardness, slope steepness, vegetation cover, and time.
- **Sequence:** weathering → mass wasting → erosion/transportation → deposition.

## Weathering — definition

- **Weathering** — the breakdown of rock into smaller pieces (and sometimes new minerals) **in place**, without being carried away.
- **Factors affecting weathering:** climate (especially moisture and temperature range), rock type, surface area exposed, and length of time.

## Types of weathering

- **Physical (mechanical) weathering** — rock is broken into smaller pieces **without any change in its chemical composition**.
- **Chemical weathering** — the minerals in the rock are **chemically changed** into new substances.
- **Biological weathering** — living things break rock down, by mechanical action (roots, burrowing animals) or by chemical action (acids from plants and lichens).

## Processes of the three types

Physical (mechanical):

- **Freeze–thaw (ice wedging)** — water enters cracks, freezes and expands, prying the rock apart; broken fragments pile up as **talus**.
- **Exfoliation (pressure release)** — outer layers peel off as buried rock is exposed and expands.
- **Thermal expansion** — repeated heating and cooling (strong in deserts) makes rock expand and contract until it flakes.
- **Abrasion** — rocks knock and grind against each other, becoming smooth and rounded.

Chemical:

- **Carbonation** — carbon dioxide dissolves in rainwater to form weak **carbonic acid**, which dissolves limestone and other rocks.
- **Hydrolysis** — water reacts with minerals (e.g. feldspar) and changes them into clay.
- **Oxidation** — oxygen reacts with iron minerals to form rust, giving rocks a reddish colour and weakening them.

Biological:

- **Root action** — plant roots grow into cracks and widen them.
- **Burrowing** — animals break up rock and soil while digging.
- **Organic acids** — lichens and decaying plants release acids that dissolve minerals.

## Effects of weathering

- Produces the loose broken material (**regolith**) from which **soil** develops.
- Shapes landforms; opens cracks that speed further breakdown; and releases minerals that plants use.

## Mass wasting — definition and factors

- **Mass wasting (mass movement)** — the downslope movement of rock and loose material under the direct pull of **gravity**.
- **Factors affecting mass wasting:** slope angle, the strength and type of material, water content (saturated material is weakest), vegetation cover, and triggers such as heavy rain, snowmelt or earthquakes.

## Types of mass wasting

| Type | Speed | Description |
|---|---|---|
| Rock fall | very fast | fragments break off a steep cliff and fall freely |
| Landslide / rock slide | fast | a mass of rock slides down a slope surface |
| Slump | slow | material rotates and slips along a curved surface |
| Creep | very slow (mm–cm per year) | soil moves imperceptibly downslope |
| Mudflow / debris flow | fast | water-saturated material flows downhill |
| Rock avalanche | very fast | broken rock flows on a cushion of air |

## Effects of mass wasting

- Damages roads, farmland, homes and infrastructure.
- Can cause loss of life where slopes fail suddenly near settlements.
- Reshapes hillsides and supplies sediment to rivers.

## Common errors and misconceptions

- **Confusing weathering with erosion** — **weathering** breaks rock down **in place**; **erosion** (and mass wasting) **moves** the broken material away.
- **Thinking physical weathering changes the rock's chemistry** — physical weathering only breaks rock into smaller pieces; **chemical** weathering changes its composition.
- **Assuming mass wasting is always fast** — **creep** moves only millimetres a year, while a **rock fall** is almost instant.
- **Believing water always strengthens a slope** — a little moisture can help, but **saturated** material is weakest and most likely to fail.`,
      workedExample: `**Task.** For each situation, name the process, say which type of weathering or mass wasting it is, and explain it: (a) water freezes in a mountain crack overnight and the rock splits; (b) rainwater slowly dissolves a limestone hill; (c) after heavy rain a saturated hillside slides downhill onto a road.

**(a) Water freezing in a crack → freeze–thaw (physical weathering)**
- Water seeps into the crack, freezes and expands (ice takes more space than water), and prises the rock apart. No chemical change occurs, so it is **physical/mechanical** weathering.

**(b) Rainwater dissolving limestone → carbonation (chemical weathering)**
- Carbon dioxide dissolves in the rain to make weak carbonic acid, which reacts with and dissolves the limestone. The rock's chemical make-up changes, so it is **chemical** weathering.

**(c) Saturated hillside sliding onto a road → landslide (mass wasting)**
- Heavy rain saturates the material, reducing its strength; gravity then pulls the whole mass downslope. Because material is **moved** by gravity, this is **mass wasting**, not weathering.

**Conclusion:** weathering breaks rock apart in place (physically or chemically); mass wasting then moves the loosened material downslope under gravity.`,
      quiz: [
        {
          prompt: "The overall wearing down of the land surface is called…",
          options: ["denudation", "deposition", "vulcanicity", "folding"],
          correctIndex: 0,
          explanation: "Denudation covers weathering, mass wasting, erosion and transport.",
        },
        {
          prompt: "Weathering is the breakdown of rock…",
          options: ["in place, without being carried away", "while being carried by a river", "by melting", "by folding"],
          correctIndex: 0,
          explanation: "Weathering happens in place; erosion moves the material.",
        },
        {
          prompt: "Physical (mechanical) weathering breaks rock…",
          options: ["without changing its chemical composition", "by changing its minerals", "into new chemicals", "into gas"],
          correctIndex: 0,
          explanation: "Physical weathering changes size, not chemistry.",
        },
        {
          prompt: "Water freezing and expanding in cracks is called…",
          options: ["freeze–thaw (ice wedging)", "carbonation", "oxidation", "hydrolysis"],
          correctIndex: 0,
          explanation: "Ice wedging is a physical weathering process.",
        },
        {
          prompt: "The peeling of outer rock layers as pressure is released is…",
          options: ["exfoliation", "carbonation", "creep", "abrasion"],
          correctIndex: 0,
          explanation: "Exfoliation strips outer shells as buried rock expands.",
        },
        {
          prompt: "Which weathering is strongest in hot deserts with big temperature swings?",
          options: ["thermal expansion", "freeze–thaw", "carbonation", "hydrolysis"],
          correctIndex: 0,
          explanation: "Repeated heating and cooling flakes rock in deserts.",
        },
        {
          prompt: "Carbonation is the dissolving of rock by…",
          options: ["weak carbonic acid from rainwater", "plant roots", "wind", "ice"],
          correctIndex: 0,
          explanation: "CO₂ in rain forms carbonic acid that dissolves limestone.",
        },
        {
          prompt: "The reaction of oxygen with iron minerals to form rust is…",
          options: ["oxidation", "hydrolysis", "abrasion", "exfoliation"],
          correctIndex: 0,
          explanation: "Oxidation reddens and weakens iron-bearing rock.",
        },
        {
          prompt: "Water changing feldspar into clay is an example of…",
          options: ["hydrolysis", "oxidation", "freeze–thaw", "creep"],
          correctIndex: 0,
          explanation: "Hydrolysis converts minerals into clay.",
        },
        {
          prompt: "Plant roots growing into and widening cracks is…",
          options: ["biological weathering", "chemical weathering only", "deposition", "faulting"],
          correctIndex: 0,
          explanation: "Roots physically widen cracks — biological weathering.",
        },
        {
          prompt: "Which factor speeds up chemical weathering the most?",
          options: ["a warm, moist climate", "a cold, dry climate", "hard rock only", "steep slopes"],
          correctIndex: 0,
          explanation: "Heat and moisture drive chemical reactions faster.",
        },
        {
          prompt: "Mass wasting is the downslope movement of material under…",
          options: ["gravity", "wind", "waves", "the Sun"],
          correctIndex: 0,
          explanation: "Gravity pulls loosened material downslope.",
        },
        {
          prompt: "Which condition most weakens a slope and encourages mass wasting?",
          options: ["saturation with water", "dry, cemented rock", "thick vegetation", "a gentle slope"],
          correctIndex: 0,
          explanation: "Saturated material has the least strength.",
        },
        {
          prompt: "The very slow (mm per year) downhill movement of soil is…",
          options: ["creep", "rock fall", "landslide", "mudflow"],
          correctIndex: 0,
          explanation: "Creep is imperceptible, only millimetres a year.",
        },
        {
          prompt: "Fragments breaking off a steep cliff and dropping freely is a…",
          options: ["rock fall", "creep", "slump", "delta"],
          correctIndex: 0,
          explanation: "Rock falls are very fast free drops from cliffs.",
        },
        {
          prompt: "Water-saturated material flowing rapidly downhill is a…",
          options: ["mudflow / debris flow", "creep", "exfoliation", "abrasion"],
          correctIndex: 0,
          explanation: "Mudflows and debris flows are fast, water-rich flows.",
        },
        {
          prompt: "Material that rotates and slips along a curved surface is a…",
          options: ["slump", "rock fall", "yardang", "sill"],
          correctIndex: 0,
          explanation: "A slump moves along a curved failure surface.",
        },
        {
          prompt: "The correct sequence of denudation is…",
          options: [
            "weathering → mass wasting → erosion → deposition",
            "deposition → weathering → erosion",
            "erosion → weathering → folding",
            "faulting → weathering → deposition",
          ],
          correctIndex: 0,
          explanation: "Rock is broken, moved downslope, carried away, then laid down.",
        },
        {
          prompt: "Which is an effect of weathering?",
          options: ["it produces the material from which soil forms", "it melts rock", "it lifts plates", "it makes rivers flow uphill"],
          correctIndex: 0,
          explanation: "Weathered regolith is the parent material of soil.",
        },
        {
          prompt: "A common trigger of sudden mass wasting is…",
          options: ["heavy rain or an earthquake", "gentle sunshine", "a light breeze", "low tide"],
          correctIndex: 0,
          explanation: "Heavy rain, snowmelt and earthquakes commonly trigger failures.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Distinguish between weathering and mass wasting.",
          answerKey:
            "Weathering is the breakdown of rock into smaller pieces (or new minerals) in place, without being moved. Mass wasting is the downslope movement of loosened rock and material under the pull of gravity. Award marks for both definitions and the key contrast (in place vs moved).",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the three types of weathering and give one process of each.",
          answerKey:
            "Physical/mechanical – freeze–thaw, exfoliation, thermal expansion or abrasion; Chemical – carbonation, hydrolysis or oxidation; Biological – root action, burrowing or organic acids. One mark per type correctly named with a process.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which process changes the chemical composition of the rock?",
          options: ["carbonation", "freeze–thaw", "abrasion", "creep"],
          correctIndex: 0,
          answerKey: "Carbonation is chemical weathering; the others are physical processes or movement.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State two factors that affect the rate of weathering.",
          answerKey:
            "Any two of: climate (moisture, temperature range), rock type/hardness, surface area exposed, and length of time. One mark each.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe the sequence of denudation and explain how weathering, mass wasting and erosion work together to lower the land surface.",
          answerKey:
            "A strong answer describes denudation as the overall lowering of the land and sets out the sequence: weathering breaks rock down in place (physically, chemically, biologically); mass wasting then moves the loosened material downslope under gravity (creep, slides, falls, flows); erosion and transport by rivers, wind or waves carry it away; and deposition lays it down elsewhere. Should show how the stages link and give examples. Award marks for the correct sequence, the role of each stage, and examples.",
          marks: 5,
        },
      ],
    },
    {
      // source: Geosciences LibreTexts — The Physical Environment (Ritter), 18.05 Landforms of Alluvial Rivers, 20.01 Eolian Processes, 21.02 Coastal Landforms and Processes (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/The_Physical_Environment_(Ritter)/18:_Fluvial_Systems/18.05:_Landforms_of_Alluvial_Rivers)
      slug: "action-of-running-water-winds-and-waves",
      title: "Action of Running Water (Rivers), Winds and Waves",
      objective:
        "By the end of the topic, learners should be able to describe the erosion, transportation and deposition carried out by rivers, wind and waves, and the main landforms each produces.",
      estimatedMinutes: 165,
      notes: `## Introduction

- Rivers, wind and waves are **agents of erosion**. Each **erodes** material, **transports** it, and **deposits** it, creating distinctive landforms.

## Action of running water (rivers)

- **Factors affecting river velocity:** the **gradient** (steeper = faster), the **volume of water (discharge)**, and the **shape and roughness of the channel**.

River erosion processes:

- **Hydraulic action** — the force of moving water loosens and removes material.
- **Abrasion (corrasion)** — the load scrapes and wears the bed and banks.
- **Attrition** — transported rocks knock together and become smaller and rounder.
- **Solution (corrosion)** — water dissolves soluble rock.

River transportation:

- **Traction** — large stones rolled along the bed.
- **Saltation** — smaller stones bounced along.
- **Suspension** — fine material carried within the water.
- **Solution** — dissolved material carried invisibly.

Development of a river valley:

- **Youthful stage** — steep gradient; fast, downward (vertical) erosion cuts a narrow **V-shaped valley** with **interlocking spurs**, rapids and waterfalls.
- **Mature stage** — gentler gradient; sideways (lateral) erosion widens the valley and the river begins to **meander**.
- **Old-age stage** — very gentle gradient; a broad **floodplain** with large meanders, oxbow lakes and levees.

Landforms of river erosion:

- **V-shaped valley, waterfall, rapids, gorge, interlocking spurs.**

Landforms of river deposition:

- **Floodplain** — flat land beside the river covered by alluvium during floods.
- **Natural levee** — a ridge of coarse sediment built up along the channel banks during floods.
- **Meander** — a looping bend; the outer **cut bank** is eroded and the inner **point bar** is built up.
- **Oxbow lake** — a crescent lake left when a meander is cut off.
- **Delta** — sediment deposited where a river enters a sea or lake and slows.

\`\`\`svg A meander with cut bank, point bar and oxbow lake
<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan view of a meandering river with cut bank, point bar and an oxbow lake">
  <path d="M10,65 Q60,20 110,65 Q160,110 210,65 Q260,20 290,65" fill="none" stroke="#2563eb" stroke-width="7"/>
  <path d="M110,60 Q135,15 160,60" fill="none" stroke="#60a5fa" stroke-width="6" stroke-dasharray="3 3"/>
  <text x="60" y="15" font-size="9" text-anchor="middle" fill="#1e3a8a">cut bank (erosion)</text>
  <text x="135" y="118" font-size="9" text-anchor="middle" fill="#1e3a8a">point bar (deposition)</text>
  <text x="245" y="20" font-size="9" text-anchor="middle" fill="#1e3a8a">oxbow forms here</text>
</svg>
\`\`\`

- **Importance of rivers:** water for drinking, farming (irrigation) and industry; fertile floodplain soils; fishing; transport; and hydro-electric power.

## Action of winds

- **Characteristics of deserts:** wind action is strongest where the surface is **fine, dry and loose** with little vegetation. Only about a quarter of deserts are sand-covered; most are stony.

Wind erosion:

- **Deflation** — wind lifts and removes loose fine particles, leaving a stony **desert pavement** and hollows called **blowouts**.
- **Abrasion** — sand carried near the ground sandblasts rocks (up to about 2 m high), polishing and shaping them.

Wind transportation:

- **Surface creep** — grains rolled along the ground (about 20–25%).
- **Saltation** — grains bounce along (about 75–80% of movement).
- **Suspension** — fine dust lifted high and carried far.

Landforms of wind erosion:

- **Ventifacts** — rocks polished and faceted by sandblasting.
- **Yardangs** — elongated ridges streamlined parallel to the wind.
- **Deflation hollows (blowouts).**

Landforms of wind deposition:

- **Sand dunes** — mounds of wind-blown sand; a crescent dune is a **barchan**.
- **Loess** — thick deposits of wind-blown dust (silt).

## Action of waves

- Waves are the chief agents shaping coasts. They erode by:
- **Hydraulic action** — waves compress air and water into cracks, shattering rock.
- **Abrasion** — sediment-laden water grinds against the shore.
- **Attrition and solution** — rocks wear each other down and soluble rock dissolves.
- **Longshore drift** — waves striking the shore at an angle move sand along the beach in a zig-zag (swash up, backwash straight down).

Landforms of wave erosion:

- **Wave-cut cliff** — a steep face cut by waves undercutting the base.
- **Wave-cut platform** — a flat rocky bench left in front of the retreating cliff.
- **Sea cave → arch → stack → stump** — waves cut a cave through a headland; the cave becomes an **arch**; when the arch collapses a pillar (**stack**) is left, which is worn down to a **stump**.

Landforms of wave deposition:

- **Beach** — sediment piled up along the shore.
- **Spit** — a ridge of sand attached to land at one end, built by longshore drift.
- **Bar / baymouth bar** — a spit that grows across a bay.
- **Tombolo** — a bar that joins an island to the mainland.

Types of coast:

- **Submergence coastline** — formed where the sea rises (or land sinks), drowning valleys (e.g. rias, fjords).
- **Emergence coastline** — formed where the sea falls (or land rises), exposing former seabed as raised beaches and cliffs.

## Common errors and misconceptions

- **Mixing up erosion and deposition landforms** — a V-shaped valley and a waterfall are **erosion** features; a floodplain, delta and levee are **deposition** features.
- **Thinking a delta forms by erosion** — a delta is built by **deposition** where the river slows at its mouth.
- **Believing deserts are all sand** — most deserts are **stony**; only about a quarter are sand-covered.
- **Confusing a stack and a stump** — a **stack** is a tall pillar; a **stump** is what remains after the stack is worn down.`,
      workedExample: `**Task.** Match each landform to its agent (river, wind or wave) and say whether it is formed by erosion or deposition: (i) oxbow lake; (ii) yardang; (iii) sea stack; (iv) spit.

**(i) Oxbow lake → river, deposition (and erosion)**
- A meander loop is cut off when the river erodes through the narrow neck and then **deposits** sediment across the old entrance, leaving a crescent lake. It is a **river** landform.

**(ii) Yardang → wind, erosion**
- An elongated ridge streamlined by **wind abrasion and deflation** parallel to the prevailing wind. It is a **wind (eolian) erosion** landform.

**(iii) Sea stack → wave, erosion**
- Waves erode a cave through a headland into an arch; when the arch collapses, a pillar of rock (**stack**) is left. It is a **wave erosion** landform.

**(iv) Spit → wave, deposition**
- **Longshore drift** carries sand along the coast and deposits it where the coast turns, building a ridge attached to land at one end. It is a **wave deposition** landform.

**Conclusion:** each agent both erodes and deposits — identify the agent from the setting (valley, desert, coast) and the process from whether material is being removed or laid down.`,
      quiz: [
        {
          prompt: "Which factor increases a river's velocity?",
          options: ["a steeper gradient", "a gentler gradient", "less water", "a rougher bed"],
          correctIndex: 0,
          explanation: "Steeper gradients and greater discharge speed the river up.",
        },
        {
          prompt: "The wearing of a river bed by its load scraping against it is…",
          options: ["abrasion (corrasion)", "solution", "traction", "deposition"],
          correctIndex: 0,
          explanation: "Abrasion is the grinding of the bed and banks by the load.",
        },
        {
          prompt: "Large stones rolled along a river bed are moved by…",
          options: ["traction", "suspension", "solution", "attrition"],
          correctIndex: 0,
          explanation: "Traction rolls the largest particles along the bed.",
        },
        {
          prompt: "A narrow V-shaped valley with interlocking spurs is typical of a river's…",
          options: ["youthful stage", "old-age stage", "mouth", "delta"],
          correctIndex: 0,
          explanation: "Vertical erosion in the youthful stage cuts a V-shaped valley.",
        },
        {
          prompt: "The outer bank of a meander, where erosion is greatest, is the…",
          options: ["cut bank", "point bar", "levee", "spit"],
          correctIndex: 0,
          explanation: "Fastest flow on the outside bend erodes the cut bank.",
        },
        {
          prompt: "A crescent-shaped lake left when a meander is cut off is an…",
          options: ["oxbow lake", "alluvial fan", "estuary", "arch"],
          correctIndex: 0,
          explanation: "A cut-off meander becomes an oxbow lake.",
        },
        {
          prompt: "Sediment deposited where a river enters the sea and slows forms a…",
          options: ["delta", "gorge", "yardang", "stack"],
          correctIndex: 0,
          explanation: "A delta builds up from deposited sediment at the river mouth.",
        },
        {
          prompt: "A ridge of coarse sediment built along a river bank during floods is a…",
          options: ["natural levee", "meander", "waterfall", "dune"],
          correctIndex: 0,
          explanation: "Coarse material dropped first at the bank builds a levee.",
        },
        {
          prompt: "Which is an importance of rivers?",
          options: ["water for irrigation and hydro-electric power", "sandblasting rocks", "forming deserts", "building coral reefs"],
          correctIndex: 0,
          explanation: "Rivers supply water, fertile soil, transport and HEP.",
        },
        {
          prompt: "Wind removing loose fine particles and leaving a stony surface is…",
          options: ["deflation", "abrasion", "saltation", "attrition"],
          correctIndex: 0,
          explanation: "Deflation lifts fines, leaving desert pavement.",
        },
        {
          prompt: "Most wind-blown sand moves by…",
          options: ["saltation (bouncing)", "suspension only", "solution", "traction only"],
          correctIndex: 0,
          explanation: "About 75–80% of sand moves by saltation.",
        },
        {
          prompt: "An elongated ridge streamlined parallel to the wind is a…",
          options: ["yardang", "levee", "tombolo", "meander"],
          correctIndex: 0,
          explanation: "Yardangs are wind-eroded ridges aligned with the wind.",
        },
        {
          prompt: "A crescent-shaped sand dune is a…",
          options: ["barchan", "yardang", "ventifact", "stack"],
          correctIndex: 0,
          explanation: "A barchan is a crescent dune formed by wind deposition.",
        },
        {
          prompt: "Thick deposits of wind-blown dust (silt) are called…",
          options: ["loess", "loam", "till", "moraine"],
          correctIndex: 0,
          explanation: "Loess is wind-deposited silt.",
        },
        {
          prompt: "Waves compressing air into rock cracks and shattering it is…",
          options: ["hydraulic action", "longshore drift", "deflation", "traction"],
          correctIndex: 0,
          explanation: "Hydraulic action uses trapped, compressed air and water.",
        },
        {
          prompt: "The movement of sand along a beach by waves striking at an angle is…",
          options: ["longshore drift", "attrition", "saltation", "solution"],
          correctIndex: 0,
          explanation: "Swash up at an angle and straight backwash zig-zag the sand along.",
        },
        {
          prompt: "When a sea arch collapses it leaves a…",
          options: ["stack", "cave", "beach", "delta"],
          correctIndex: 0,
          explanation: "A collapsed arch leaves an isolated pillar called a stack.",
        },
        {
          prompt: "A ridge of sand joined to land at one end, built by longshore drift, is a…",
          options: ["spit", "cliff", "yardang", "levee"],
          correctIndex: 0,
          explanation: "A spit is a depositional ridge attached to land at one end.",
        },
        {
          prompt: "A coastline formed where the sea rises and drowns valleys is a…",
          options: ["submergence coastline", "emergence coastline", "delta", "desert coast"],
          correctIndex: 0,
          explanation: "Submergence coastlines form when sea level rises relative to land.",
        },
        {
          prompt: "A flat rocky bench left in front of a retreating cliff is a…",
          options: ["wave-cut platform", "spit", "floodplain", "dune"],
          correctIndex: 0,
          explanation: "Waves cut a platform as the cliff is worn back.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the four processes of river erosion and briefly describe two of them.",
          answerKey:
            "The four are hydraulic action, abrasion (corrasion), attrition and solution (corrosion). Descriptions: hydraulic action – the force of water loosens material; abrasion – the load scrapes the bed and banks; attrition – transported rocks knock together and round off; solution – water dissolves soluble rock. Award marks for naming all four and describing two.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Distinguish between landforms of river erosion and river deposition, with one example of each.",
          answerKey:
            "Erosion landforms are cut by the river removing material (e.g. V-shaped valley, waterfall, gorge, interlocking spurs). Deposition landforms are built where the river lays material down (e.g. floodplain, levee, delta, oxbow point bar). Award marks for the distinction and a valid example of each.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sequence correctly shows the development of a coastal stack?",
          options: [
            "cave → arch → stack → stump",
            "stack → arch → cave",
            "spit → bar → tombolo",
            "beach → cliff → platform",
          ],
          correctIndex: 0,
          answerKey: "Waves erode a cave through a headland to an arch; the arch collapses to a stack, which wears to a stump.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Describe how wind erodes the land by deflation and abrasion.",
          answerKey:
            "Deflation – wind lifts and removes loose fine particles, leaving a stony desert pavement and blowout hollows. Abrasion – wind-carried sand sandblasts rocks near the ground (up to about 2 m), polishing and shaping them (forming ventifacts and yardangs). Award marks for both processes correctly described.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Compare how rivers, wind and waves each erode, transport and deposit material, naming one landform each agent produces.",
          answerKey:
            "A strong answer treats all three agents. Rivers: erode by hydraulic action/abrasion/attrition/solution, transport by traction/saltation/suspension/solution, deposit floodplains, levees, deltas and oxbow lakes. Wind: erodes by deflation and abrasion, transports by creep/saltation/suspension, deposits sand dunes (barchans) and loess. Waves: erode by hydraulic action/abrasion, transport by longshore drift, and produce wave-cut cliffs and platforms, stacks (erosion) and beaches, spits and tombolos (deposition). Award marks for covering all three agents, the three stages (erode/transport/deposit), and correct landforms.",
          marks: 5,
        },
      ],
    },
  ],
};
