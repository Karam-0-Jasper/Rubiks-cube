import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Geography, Grade 10,
// Semester One, Period II, Unit 1 Physical Geography: Topic 1 The External
// and Internal Structure of the Earth; Topic 2 Rocks of the Earth.
export const geographyG10P2: PeriodContent = {
  grade: 10,
  number: 2,
  title: "The Structure of the Earth and Its Rocks",
  summary:
    "Period II of the MoE Grade 10 Geography syllabus. Learners describe the Earth's external spheres (atmosphere, hydrosphere, biosphere, lithosphere) and its internal layers (crust, mantle, core), then study the three types of rock — igneous, sedimentary and metamorphic — and their characteristics and economic uses.",
  topics: [
    {
      // source: Geosciences LibreTexts — Introduction to Earth Science (GEOL 121), 1.3 Components of the Earth System (https://geo.libretexts.org/Courses/Coalinga_College/Introduction_to_Earth_Science_(C-ID:_GEOL_121)/01:_Introduction_to_Earth_Science/1.03:_Components_of_the_Earth_System)
      slug: "structure-of-the-earth",
      title: "The External and Internal Structure of the Earth",
      objective:
        "By the end of the topic, learners should be able to distinguish the Earth's external spheres and describe their importance, and name and describe the internal layers of the Earth from the crust to the core.",
      estimatedMinutes: 150,
      notes: `## Introduction

- The Earth is studied two ways: **external** structure (the surface "spheres" of rock, water, air, life) and **internal** structure (the hidden layers of rock and metal down to the centre).
- **This topic:** both structures, and why each matters to life on the surface.

## Two ways to look at the Earth

The Earth can be studied by its **external structure** — the major spheres that make up its surface environment — and its **internal structure** — the layers beneath the surface.

## The external spheres

Four great **spheres** interact at the Earth's surface to support life:

- **Atmosphere** — the envelope of gases (mainly nitrogen and oxygen) surrounding the Earth. It provides air to breathe, weather, and protection from the Sun's harmful rays.
- **Hydrosphere** — all the water: oceans, seas, rivers, lakes, groundwater and ice. It supplies water for life and shapes the land.
- **Lithosphere** — the solid outer rocky shell (the crust and upper mantle). It provides land, soil and minerals.
- **Biosphere** — the zone where living things exist, where the other three spheres overlap.
- Not separate: the spheres constantly exchange matter and energy — rain (hydrosphere) falls from clouds (atmosphere) onto soil (lithosphere) to nourish plants (biosphere).

## The internal structure

Cutting the Earth open reveals three main layers, like a boiled egg:

\`\`\`svg The internal layers of the Earth
<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of the Earth showing crust, mantle and core">
  <circle cx="110" cy="110" r="100" fill="#5b3a1e" stroke="#3f2a15"/>
  <circle cx="110" cy="110" r="72" fill="#c2410c"/>
  <circle cx="110" cy="110" r="38" fill="#fbbf24"/>
  <circle cx="110" cy="110" r="16" fill="#f59e0b" stroke="#92400e"/>
  <text x="110" y="30" font-size="11" text-anchor="middle" fill="#fff">Crust</text>
  <text x="110" y="70" font-size="11" text-anchor="middle" fill="#fff">Mantle</text>
  <text x="110" y="105" font-size="10" text-anchor="middle" fill="#7c2d12">Outer core</text>
  <text x="110" y="115" font-size="9" text-anchor="middle" fill="#7c2d12">Inner core</text>
</svg>
\`\`\`

- **Crust** — the thin, solid outer layer of rock on which we live. It is thinnest under the oceans and thickest under mountains.
- **Mantle** — a very thick layer of hot, semi-molten rock beneath the crust. Slow movements in the mantle drive the movement of the crust.
- **Core** — the centre of the Earth, made mainly of iron and nickel and extremely hot. It has a liquid **outer core** and a solid **inner core**; the movement of the liquid outer core creates the Earth's magnetic field.

## Why the layers differ

- Temperature and pressure increase with depth.
- Crust — cool and solid; mantle — hot enough to flow slowly; core — hottest of all.
- Inner core stays solid only because of the enormous pressure.

## Common errors and misconceptions

- **Thinking the crust is thick** — the crust is very **thin** compared with the whole Earth (like the skin of an orange); the mantle is by far the largest layer.
- **Saying the whole core is liquid** — the **outer core** is liquid, but the **inner core** is **solid** because the immense pressure keeps it so despite the heat.
- **Confusing the spheres** — the **lithosphere** is the solid rock, the **hydrosphere** the water, the **atmosphere** the air, and the **biosphere** all living things; don't mix them up.
- **Believing the mantle is molten liquid throughout** — it is mostly **solid** rock that flows only very slowly, like thick tar.`,
      workedExample: `**Task.** (a) Name the four external spheres and give one importance of each. (b) Describe the three internal layers of the Earth in order from the surface to the centre.

**Part (a) — external spheres**

| Sphere | What it is | One importance |
|---|---|---|
| Atmosphere | envelope of gases | provides air to breathe; shields us from the Sun |
| Hydrosphere | all the Earth's water | supplies drinking water; supports aquatic life |
| Lithosphere | solid rocky shell | provides land, soil and minerals |
| Biosphere | zone of living things | the home of all life |

**Part (b) — internal layers, surface to centre**

1. **Crust** — the thin solid rocky outer layer we live on; thin under oceans, thick under continents.
2. **Mantle** — a very thick layer of hot, semi-molten rock; its slow movement moves the crust above it.
3. **Core** — the innermost layer of iron and nickel; a liquid outer core surrounds a solid inner core, and it is the hottest part of the Earth.

**Link:** the spheres and the internal layers connect — the lithosphere (an external sphere) is made of the crust and the very top of the mantle.`,
      quiz: [
        {
          prompt: "The envelope of gases surrounding the Earth is the…",
          options: ["atmosphere", "hydrosphere", "lithosphere", "biosphere"],
          correctIndex: 0,
          explanation: "The atmosphere is the layer of gases around the Earth.",
        },
        {
          prompt: "All the water on Earth makes up the…",
          options: ["hydrosphere", "atmosphere", "lithosphere", "core"],
          correctIndex: 0,
          explanation: "The hydrosphere is all oceans, rivers, lakes, ice and groundwater.",
        },
        {
          prompt: "The solid rocky outer shell of the Earth is the…",
          options: ["lithosphere", "biosphere", "atmosphere", "hydrosphere"],
          correctIndex: 0,
          explanation: "The lithosphere is the crust plus the upper mantle.",
        },
        {
          prompt: "The zone where living things exist is the…",
          options: ["biosphere", "atmosphere", "core", "mantle"],
          correctIndex: 0,
          explanation: "The biosphere is the sphere of life.",
        },
        {
          prompt: "Which is the thin, solid outermost internal layer of the Earth?",
          options: ["crust", "mantle", "outer core", "inner core"],
          correctIndex: 0,
          explanation: "The crust is the thin solid layer we live on.",
        },
        {
          prompt: "The thick layer of hot, semi-molten rock below the crust is the…",
          options: ["mantle", "core", "lithosphere", "atmosphere"],
          correctIndex: 0,
          explanation: "The mantle lies between the crust and the core.",
        },
        {
          prompt: "The Earth's core is made mainly of…",
          options: ["iron and nickel", "water", "granite", "air"],
          correctIndex: 0,
          explanation: "The core is largely iron and nickel.",
        },
        {
          prompt: "Which part of the core is liquid?",
          options: ["the outer core", "the inner core", "both are solid", "both are gas"],
          correctIndex: 0,
          explanation: "The outer core is liquid; the inner core is solid.",
        },
        {
          prompt: "The crust is thickest under…",
          options: ["mountains", "oceans", "deserts", "rivers"],
          correctIndex: 0,
          explanation: "Continental crust, especially under mountains, is thickest.",
        },
        {
          prompt: "As you go deeper into the Earth, temperature generally…",
          options: ["increases", "decreases", "stays the same", "disappears"],
          correctIndex: 0,
          explanation: "Both temperature and pressure rise with depth.",
        },
        {
          prompt: "Which sphere provides the air we breathe?",
          options: ["atmosphere", "lithosphere", "hydrosphere", "core"],
          correctIndex: 0,
          explanation: "The atmosphere supplies oxygen for breathing.",
        },
        {
          prompt: "Rain falling onto soil to feed plants shows interaction between the…",
          options: [
            "atmosphere, hydrosphere, lithosphere and biosphere",
            "core and mantle only",
            "inner and outer core",
            "atmosphere alone",
          ],
          correctIndex: 0,
          explanation: "The spheres constantly exchange matter and energy.",
        },
        {
          prompt: "The Earth's magnetic field is generated by movement in the…",
          options: ["liquid outer core", "crust", "atmosphere", "biosphere"],
          correctIndex: 0,
          explanation: "The moving liquid outer core creates the magnetic field.",
        },
        {
          prompt: "Which internal layer is the hottest?",
          options: ["the core", "the crust", "the lithosphere", "the mantle's surface"],
          correctIndex: 0,
          explanation: "The core, at the centre, is the hottest region.",
        },
        {
          prompt: "The lithosphere is made up of the crust and the…",
          options: ["upper mantle", "outer core", "hydrosphere", "atmosphere"],
          correctIndex: 0,
          explanation: "The lithosphere combines the crust with the rigid upper mantle.",
        },
        {
          prompt: "Which sphere supplies minerals and soil?",
          options: ["lithosphere", "atmosphere", "hydrosphere", "biosphere"],
          correctIndex: 0,
          explanation: "The rocky lithosphere provides soil and minerals.",
        },
        {
          prompt: "The inner core remains solid mainly because of…",
          options: ["enormous pressure", "low temperature", "lack of iron", "the magnetic field"],
          correctIndex: 0,
          explanation: "Extreme pressure keeps the inner core solid despite the heat.",
        },
        {
          prompt: "Which order is correct, from surface to centre?",
          options: [
            "crust, mantle, core",
            "core, mantle, crust",
            "mantle, crust, core",
            "crust, core, mantle",
          ],
          correctIndex: 0,
          explanation: "From the surface inward: crust → mantle → core.",
        },
        {
          prompt: "Slow movements in which layer cause the crust to move?",
          options: ["the mantle", "the atmosphere", "the inner core", "the hydrosphere"],
          correctIndex: 0,
          explanation: "Currents in the semi-molten mantle move the crust above.",
        },
        {
          prompt: "Which two spheres overlap most obviously in the biosphere?",
          options: [
            "atmosphere, hydrosphere and lithosphere",
            "outer core and inner core",
            "mantle and crust",
            "atmosphere and core",
          ],
          correctIndex: 0,
          explanation: "Life exists where air, water and land meet.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the four external spheres of the Earth and state what each consists of.",
          answerKey:
            "Atmosphere – gases around the Earth; Hydrosphere – all the Earth's water; Lithosphere – the solid rocky shell; Biosphere – the zone of living things. Award a mark per correctly named and described sphere.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Describe the three main internal layers of the Earth in order from the surface.",
          answerKey:
            "Crust – thin solid rocky outer layer; Mantle – thick hot semi-molten rock; Core – innermost iron/nickel layer (liquid outer core, solid inner core). Award a mark per layer correctly described and ordered.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which layer of the Earth is semi-molten and drives the movement of the crust?",
          options: ["the mantle", "the crust", "the inner core", "the atmosphere"],
          correctIndex: 0,
          answerKey: "Slow flow in the hot mantle moves the crust above it.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how the four external spheres of the Earth depend on and interact with one another, giving a clear example.",
          answerKey:
            "A strong answer explains that the spheres continuously exchange matter and energy rather than acting alone, and gives a concrete example — e.g. water evaporates from the ocean (hydrosphere) into the air (atmosphere), condenses and falls as rain onto the land (lithosphere), where it is taken up by plants and animals (biosphere). Award marks for describing interaction/interdependence and a valid worked example linking at least three spheres.",
          marks: 5,
        },
      ],
    },
    {
      // source: Geosciences LibreTexts — The Physical Environment (Ritter), 14.5.1 Rocks and the Rock Cycle (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/The_Physical_Environment_(Ritter)/14:_Earth_Materials_and_Structure/14.05:_Rocks/14.5.01:_Rocks_and_the_Rock_Cycle)
      slug: "rocks-of-the-earth",
      title: "Rocks of the Earth",
      objective:
        "By the end of the topic, learners should be able to distinguish between rocks and minerals, classify rocks by their mode of formation into igneous, sedimentary and metamorphic, and describe the characteristics and economic uses of each type.",
      estimatedMinutes: 150,
      notes: `## Introduction

- The solid Earth is made of **rock** — raw material of the landscape, soil that feeds crops, and the ores Liberia mines (iron, gold, diamonds).
- Rock forms in three ways, giving three families with different looks and uses.
- **This topic:** **rocks** vs **minerals**; the three rock types — **igneous, sedimentary, metamorphic** — how each forms and its uses.

## Rocks and minerals

- A **mineral** is a naturally occurring solid with a definite chemical composition — for example quartz, mica, feldspar, gold, iron ore.
- A **rock** is a solid made of one or more minerals joined together — for example granite, which contains quartz, feldspar and mica.
- Minerals are the "ingredients"; rocks are the "mixtures" built from them.

## The three types of rock

Rocks are classified by **how they form**.

## Igneous rocks
Formed when hot molten rock (**magma** below ground, **lava** above) **cools and solidifies**. The word comes from the Latin *ignis*, "fire".

- Cooled slowly deep underground (**intrusive**) → large crystals, e.g. **granite**.
- Cooled quickly at the surface (**extrusive**) → small crystals, e.g. **basalt**.

## Sedimentary rocks
Formed when small particles (**sediments**) — worn from other rocks, or the remains of living things — are **deposited in layers**, then pressed and cemented together over long periods. They often show **layers (strata)** and may contain **fossils**.

- Examples: **sandstone**, **limestone**, **shale**.

## Metamorphic rocks
Formed when existing rocks are changed by great **heat and/or pressure**, without fully melting. *Metamorphic* means "changed form".

- Limestone → **marble**; shale → **slate**; granite → **gneiss**.

\`\`\`svg The rock cycle links the three rock types
<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simple rock cycle between igneous, sedimentary and metamorphic rocks">
  <rect x="20" y="80" width="90" height="34" rx="5" fill="#99f6e4" stroke="#0f766e"/><text x="65" y="101" font-size="11" text-anchor="middle" fill="#134e4a">Igneous</text>
  <rect x="230" y="80" width="90" height="34" rx="5" fill="#99f6e4" stroke="#0f766e"/><text x="275" y="101" font-size="11" text-anchor="middle" fill="#134e4a">Sedimentary</text>
  <rect x="125" y="10" width="90" height="34" rx="5" fill="#5eead4" stroke="#0f766e"/><text x="170" y="31" font-size="11" text-anchor="middle" fill="#134e4a">Metamorphic</text>
  <line x1="110" y1="97" x2="230" y2="97" stroke="#0f766e" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="170" y="112" font-size="9" text-anchor="middle" fill="#0f766e">weathering</text>
  <line x1="255" y1="80" x2="200" y2="44" stroke="#0f766e" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="245" y="60" font-size="9" fill="#0f766e">heat/pressure</text>
  <line x1="140" y1="44" x2="80" y2="80" stroke="#0f766e" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="95" y="60" font-size="9" fill="#0f766e">melting</text>
  <defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0f766e"/></marker></defs>
</svg>
\`\`\`

## Characteristics used to describe rocks

- **Texture** — grain size and feel (coarse vs fine).
- **Structure** — layered, crystalline, or fossil-bearing.
- **Colour** — light or dark.
- **Permeability** — whether water can pass through (sandstone is permeable; granite is not).

## Economic importance of rocks

Rocks and the minerals in them are vital to Liberia's economy and everyday life:

- **Building and roads:** granite, sandstone and gravel for construction.
- **Cement and lime:** from limestone.
- **Minerals and ores:** iron ore, gold and diamonds are mined from rocks.
- **Soil:** weathered rock forms the soil that agriculture depends on.

## Common errors and misconceptions

- **Confusing a rock with a mineral** — a **mineral** is a single pure substance (quartz, gold); a **rock** is a mixture of one or more minerals (granite contains quartz, feldspar and mica).
- **Muddling how the three types form** — **igneous** forms from cooled molten rock, **sedimentary** from compacted layers of sediment (often with fossils), **metamorphic** from existing rock changed by heat and pressure.
- **Thinking rocks never change** — the **rock cycle** turns one type into another over long ages (e.g. limestone → marble under heat and pressure).
- **Believing all valuable minerals are gold/diamonds** — iron ore, limestone (for cement) and gravel are also economically vital rocks/minerals.`,
      workedExample: `**Task.** Classify each of the following rocks by type and give the evidence you used: (i) a rock with clear layers containing sea-shell fossils; (ii) a hard rock made of large interlocking crystals with no layers; (iii) marble.

**(i) Layered rock with fossils → sedimentary**
- **Evidence:** layers (strata) and fossils form only when sediments (including remains of living things) are laid down and cemented over time. Igneous and metamorphic rocks do not usually contain fossils.

**(ii) Hard rock, large interlocking crystals, no layers → igneous**
- **Evidence:** large crystals form when magma cools **slowly** deep underground (like granite). The lack of layers rules out sedimentary; interlocking crystals from a melt point to igneous.

**(iii) Marble → metamorphic**
- **Evidence:** marble forms when **limestone** (a sedimentary rock) is subjected to great heat and pressure and is changed (metamorphosed) without fully melting. Its parent rock and the change it underwent make it metamorphic.

**Conclusion:** the mode of formation — cooling of a melt, deposition of sediments, or alteration by heat and pressure — is the key to classifying any rock.`,
      quiz: [
        {
          prompt: "A naturally occurring solid with a definite chemical composition is a…",
          options: ["mineral", "rock", "fossil", "sediment"],
          correctIndex: 0,
          explanation: "Minerals are the building blocks; rocks are made of them.",
        },
        {
          prompt: "A rock is best described as…",
          options: [
            "a solid made of one or more minerals",
            "a single pure element",
            "a type of soil",
            "a living organism",
          ],
          correctIndex: 0,
          explanation: "Rocks are aggregates of minerals.",
        },
        {
          prompt: "Igneous rocks form when…",
          options: ["molten rock cools and solidifies", "sediments are cemented", "rocks are heated and pressed", "fossils decay"],
          correctIndex: 0,
          explanation: "Igneous rocks come from cooling magma or lava.",
        },
        {
          prompt: "Which is an example of an igneous rock?",
          options: ["granite", "limestone", "marble", "shale"],
          correctIndex: 0,
          explanation: "Granite forms from slowly cooled magma.",
        },
        {
          prompt: "Sedimentary rocks are formed by…",
          options: [
            "the deposition and cementing of sediments in layers",
            "the cooling of lava",
            "great heat and pressure only",
            "volcanic eruption",
          ],
          correctIndex: 0,
          explanation: "Sediments are laid down, compressed and cemented.",
        },
        {
          prompt: "Which feature is typical of sedimentary rocks?",
          options: ["layers and fossils", "large glassy crystals", "banding from pressure", "no visible structure"],
          correctIndex: 0,
          explanation: "Strata and fossils are hallmarks of sedimentary rocks.",
        },
        {
          prompt: "Which is a sedimentary rock?",
          options: ["limestone", "granite", "basalt", "marble"],
          correctIndex: 0,
          explanation: "Limestone forms from deposited sediments and shells.",
        },
        {
          prompt: "Metamorphic rocks form when existing rocks are changed by…",
          options: ["heat and/or pressure", "cooling from magma", "deposition of sediments", "evaporation"],
          correctIndex: 0,
          explanation: "Metamorphism alters rock without fully melting it.",
        },
        {
          prompt: "Limestone changes into which metamorphic rock?",
          options: ["marble", "granite", "basalt", "sandstone"],
          correctIndex: 0,
          explanation: "Heat and pressure turn limestone into marble.",
        },
        {
          prompt: "Shale changes into which metamorphic rock?",
          options: ["slate", "marble", "granite", "limestone"],
          correctIndex: 0,
          explanation: "Shale is metamorphosed into slate.",
        },
        {
          prompt: "Igneous rock that cools slowly deep underground has…",
          options: ["large crystals", "no crystals", "many fossils", "clear layers"],
          correctIndex: 0,
          explanation: "Slow cooling allows large crystals to grow (e.g. granite).",
        },
        {
          prompt: "Which rocks are most likely to contain fossils?",
          options: ["sedimentary", "igneous", "metamorphic", "none of them"],
          correctIndex: 0,
          explanation: "Fossils are preserved as sediments are deposited.",
        },
        {
          prompt: "The property describing whether water can pass through a rock is…",
          options: ["permeability", "colour", "texture", "hardness"],
          correctIndex: 0,
          explanation: "Permeable rocks (like sandstone) let water through.",
        },
        {
          prompt: "Molten rock below the ground is called…",
          options: ["magma", "lava", "sediment", "ore"],
          correctIndex: 0,
          explanation: "Underground molten rock is magma; above ground it is lava.",
        },
        {
          prompt: "Which rock is used to make cement and lime?",
          options: ["limestone", "granite", "slate", "marble"],
          correctIndex: 0,
          explanation: "Limestone is the main raw material for cement and lime.",
        },
        {
          prompt: "The three types of rock are igneous, metamorphic and…",
          options: ["sedimentary", "mineral", "crystalline", "volcanic"],
          correctIndex: 0,
          explanation: "The classification is igneous, sedimentary and metamorphic.",
        },
        {
          prompt: "Which best explains the economic importance of rocks?",
          options: [
            "They provide building materials, minerals and soil",
            "They provide oxygen to breathe",
            "They store rainfall as clouds",
            "They are living resources",
          ],
          correctIndex: 0,
          explanation: "Rocks supply construction stone, ores and the parent material of soil.",
        },
        {
          prompt: "Rocks are classified mainly according to their…",
          options: ["mode of formation", "colour only", "size only", "weight"],
          correctIndex: 0,
          explanation: "How a rock forms determines its type.",
        },
        {
          prompt: "Granite changed by heat and pressure becomes…",
          options: ["gneiss", "sandstone", "limestone", "lava"],
          correctIndex: 0,
          explanation: "Granite metamorphoses into gneiss.",
        },
        {
          prompt: "Which sequence shows increasing crystal size in igneous rock?",
          options: [
            "fast cooling → small crystals; slow cooling → large crystals",
            "fast cooling → large crystals; slow cooling → small crystals",
            "cooling speed has no effect",
            "all igneous rock has fossils",
          ],
          correctIndex: 0,
          explanation: "Slower cooling gives more time for larger crystals to form.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between a rock and a mineral, giving one example of each.",
          answerKey:
            "A mineral is a naturally occurring solid with a definite chemical composition (e.g. quartz, gold); a rock is a solid made of one or more minerals joined together (e.g. granite). Award marks for both definitions and valid examples.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the three types of rock and describe how each is formed.",
          answerKey:
            "Igneous – from cooled molten magma/lava; Sedimentary – from deposited and cemented sediments in layers; Metamorphic – from existing rocks changed by heat and/or pressure. Award a mark per type correctly named and its formation described.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A rock showing distinct layers and containing shell fossils is most likely…",
          options: ["sedimentary", "igneous", "metamorphic", "molten"],
          correctIndex: 0,
          answerKey: "Layers (strata) and fossils are characteristic of sedimentary rocks.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State two economic uses of rocks in Liberia.",
          answerKey:
            "Accept any two valid uses, e.g. building/construction stone and gravel; limestone for cement/lime; mining of iron ore, gold or diamonds; weathered rock forming agricultural soil. Award a mark per correct use.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe the rock cycle, explaining how a sedimentary rock could, over time, become an igneous rock and then a metamorphic rock.",
          answerKey:
            "A strong answer describes the rock cycle as the continuous transformation of rock from one type to another. Example pathway: a sedimentary rock is buried and heated until it melts to magma, which cools to form an igneous rock; that igneous rock is later subjected to heat and pressure (without melting) and is changed into a metamorphic rock. Award marks for describing the cyclical nature and a coherent, correctly ordered transformation between the three types.",
          marks: 5,
        },
      ],
    },
  ],
};
