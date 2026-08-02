import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 10,
// Semester Two, Period IV: Thermal Physics.
export const physicsG10P4: PeriodContent = {
  grade: 10,
  number: 4,
  title: "Thermal Physics",
  summary:
    "Period IV of the MoE Grade 10 Physics syllabus. Learners distinguish heat from temperature, use temperature scales and thermometers, describe the three methods of heat transfer, and explain the thermal expansion of solids, liquids and gases and its everyday effects.",
  topics: [
    {
      slug: "heat-and-temperature",
      title: "Heat, Temperature and Its Measurement",
      objective:
        "By the end of the topic, learners should be able to distinguish between heat and temperature, describe the Celsius and Kelvin scales, explain how a thermometer works, and convert between temperature scales.",
      estimatedMinutes: 150,
      notes: `## Introduction

We use the words "hot" and "heat" loosely every day, but physics draws a sharp line between **temperature** (how hot something is) and **heat** (the energy that flows because of a temperature difference). Getting this distinction right is the key to the whole of thermal physics. This topic separates the two ideas, describes the **Celsius** and **Kelvin** temperature scales, explains how a **thermometer** works, and shows how to convert between the scales.

## Heat and temperature are not the same

These two terms are often confused, but they are different.

- **Temperature** is a measure of **how hot or cold** a body is — the average kinetic energy of its particles. It is measured in **degrees Celsius (°C)** or **kelvin (K)**.
- **Heat** is a form of **energy** that flows from a **hotter** body to a **colder** one. It is measured in **joules (J)**.

A cup of boiling water and a large pot of warm water can hold the **same amount of heat energy**, yet have very different temperatures — a bucket of warm water contains more heat energy than a spark, even though the spark is hotter.

**Heat always flows from hot to cold** until both reach the same temperature (thermal equilibrium).

## Measuring temperature: the thermometer

A **thermometer** measures temperature. The common liquid-in-glass thermometer works because a liquid (mercury or coloured alcohol) **expands when heated** and rises up a thin tube, and contracts when cooled.

Two fixed points are used to mark the scale:
- the **lower fixed point** — the temperature of pure melting ice: **0 °C**;
- the **upper fixed point** — the temperature of steam from boiling water: **100 °C**.

The distance between them is divided into 100 equal parts (degrees).

## Temperature scales

- **Celsius (°C):** ice melts at 0 °C, water boils at 100 °C.
- **Kelvin (K):** the SI scale. It starts at **absolute zero** (−273 °C), the coldest possible temperature. A change of 1 K equals a change of 1 °C.

**Converting between the scales:**

$$K = °C + 273 \\qquad °C = K - 273$$

So 27 °C = 27 + 273 = **300 K**, and 0 K = **−273 °C** (absolute zero).

## Types of thermometer

- **Clinical thermometer** — measures body temperature (about 35–42 °C), with a narrow range and a kink to hold the reading.
- **Laboratory thermometer** — a wider range for experiments.
- **Digital and thermocouple thermometers** — use electrical changes with temperature.

## Common errors and misconceptions

- **Confusing heat and temperature** — **temperature** is how hot something is (°C or K); **heat** is the *energy* that flows from hot to cold. A cup of boiling water and a bathtub of warm water: the cup is at a higher temperature, but the bath holds far more heat energy.
- **Converting scales wrongly** — Kelvin = Celsius **+ 273** (so 0 °C = 273 K); don't multiply.
- **Thinking heat flows from big to small objects** — heat always flows from **higher to lower temperature**, regardless of size.
- **Reading a thermometer with parallax** — look straight at the scale, level with the liquid, to avoid an error.`,
      workedExample: `**Task.** (a) Explain the difference between heat and temperature. (b) Convert 37 °C (normal body temperature) to kelvin, and convert 350 K to Celsius.

**Part (a) — heat vs temperature**
- **Temperature** measures how hot or cold something is (the average kinetic energy of its particles), in °C or K.
- **Heat** is the **energy** that flows from a hotter body to a colder one, measured in joules.
- The key difference: a large warm object can contain **more heat energy** than a small very hot object, even though the small object is at a **higher temperature**. Temperature tells you 'how hot'; heat tells you 'how much thermal energy'.

**Part (b) — conversions**
Use K = °C + 273 and °C = K − 273.

- 37 °C to kelvin: K = 37 + 273 = **310 K**.
- 350 K to Celsius: °C = 350 − 273 = **77 °C**.

**Conclusion:** heat and temperature are distinct — temperature is 'how hot', heat is the thermal energy that flows from hot to cold; and the two scales are linked by simply adding or subtracting 273.`,
      teachingTip:
        "The heat-vs-temperature distinction is the conceptual heart of the topic and a frequent exam question. Use the contrast of a spark (very hot, little heat) versus a bucket of warm water (lower temperature, much more heat) to make it stick. For conversions, drill the single relationship K = °C + 273 both ways until it is automatic, and remind learners that absolute zero (0 K = −273 °C) is the coldest possible temperature.",
      quiz: [
        {
          prompt: "Temperature is a measure of…",
          options: ["how hot or cold a body is", "the total heat energy", "the mass of a body", "the weight of a body"],
          correctIndex: 0,
          explanation: "Temperature measures hotness/coldness.",
        },
        {
          prompt: "Heat is a form of…",
          options: ["energy", "mass", "force", "temperature"],
          correctIndex: 0,
          explanation: "Heat is thermal energy.",
        },
        {
          prompt: "Heat is measured in…",
          options: ["joules (J)", "degrees Celsius", "kelvin", "newtons"],
          correctIndex: 0,
          explanation: "Heat, being energy, is measured in joules.",
        },
        {
          prompt: "Heat always flows from a … body to a … body.",
          options: ["hotter; colder", "colder; hotter", "larger; smaller", "smaller; larger"],
          correctIndex: 0,
          explanation: "Heat flows from hot to cold.",
        },
        {
          prompt: "A liquid-in-glass thermometer works because the liquid…",
          options: ["expands when heated", "freezes when heated", "disappears", "gains mass"],
          correctIndex: 0,
          explanation: "The liquid expands and rises up the tube.",
        },
        {
          prompt: "The lower fixed point (melting ice) is…",
          options: ["0 °C", "100 °C", "37 °C", "273 °C"],
          correctIndex: 0,
          explanation: "Pure melting ice is 0 °C.",
        },
        {
          prompt: "The upper fixed point (steam from boiling water) is…",
          options: ["100 °C", "0 °C", "50 °C", "273 °C"],
          correctIndex: 0,
          explanation: "Steam of boiling water is 100 °C.",
        },
        {
          prompt: "The SI unit of temperature is the…",
          options: ["kelvin (K)", "degree Celsius", "joule", "newton"],
          correctIndex: 0,
          explanation: "The kelvin is the SI temperature unit.",
        },
        {
          prompt: "Absolute zero is…",
          options: ["−273 °C (0 K)", "0 °C", "100 °C", "273 K"],
          correctIndex: 0,
          explanation: "Absolute zero is the coldest possible, 0 K = −273 °C.",
        },
        {
          prompt: "To convert °C to kelvin you…",
          options: ["add 273", "subtract 273", "multiply by 273", "divide by 273"],
          correctIndex: 0,
          explanation: "K = °C + 273.",
        },
        {
          prompt: "27 °C in kelvin is…",
          options: ["300 K", "246 K", "27 K", "273 K"],
          correctIndex: 0,
          explanation: "27 + 273 = 300 K.",
        },
        {
          prompt: "310 K in Celsius is…",
          options: ["37 °C", "310 °C", "583 °C", "273 °C"],
          correctIndex: 0,
          explanation: "310 − 273 = 37 °C.",
        },
        {
          prompt: "Which contains more heat energy?",
          options: ["a bucket of warm water", "a single spark", "they are equal", "neither has heat"],
          correctIndex: 0,
          explanation: "A large warm mass holds more heat than a hotter spark.",
        },
        {
          prompt: "A clinical thermometer is used to measure…",
          options: ["body temperature", "the boiling point of metals", "the weather over a year", "wind speed"],
          correctIndex: 0,
          explanation: "It measures body temperature (about 35–42 °C).",
        },
        {
          prompt: "When two bodies reach the same temperature, they are in…",
          options: ["thermal equilibrium", "free fall", "chemical balance", "motion"],
          correctIndex: 0,
          explanation: "Equal temperatures means thermal equilibrium.",
        },
        {
          prompt: "A change of 1 K is equal to a change of…",
          options: ["1 °C", "273 °C", "100 °C", "0.5 °C"],
          correctIndex: 0,
          explanation: "The Kelvin and Celsius degrees are the same size.",
        },
        {
          prompt: "0 °C in kelvin is…",
          options: ["273 K", "0 K", "−273 K", "100 K"],
          correctIndex: 0,
          explanation: "0 + 273 = 273 K.",
        },
        {
          prompt: "The two fixed points of a thermometer are the melting point of ice and the…",
          options: ["temperature of steam from boiling water", "temperature of the room", "body temperature", "freezing point of alcohol"],
          correctIndex: 0,
          explanation: "Ice point (0 °C) and steam point (100 °C).",
        },
        {
          prompt: "Which statement is TRUE?",
          options: [
            "Temperature tells how hot; heat is the energy that flows",
            "Heat and temperature are the same thing",
            "Heat is measured in °C",
            "Temperature is measured in joules",
          ],
          correctIndex: 0,
          explanation: "Temperature = hotness; heat = thermal energy.",
        },
        {
          prompt: "100 °C in kelvin is…",
          options: ["373 K", "173 K", "273 K", "100 K"],
          correctIndex: 0,
          explanation: "100 + 273 = 373 K.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between heat and temperature.",
          answerKey:
            "Temperature is a measure of how hot or cold a body is (the average kinetic energy of its particles), measured in °C or K; heat is a form of energy that flows from a hotter body to a colder one, measured in joules. A larger, cooler body can hold more heat energy than a smaller, hotter one. Award marks for both definitions and the distinction.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Convert (a) 45 °C to kelvin and (b) 250 K to Celsius.",
          answerKey:
            "(a) 45 + 273 = 318 K. (b) 250 − 273 = −23 °C. Award a mark for each correct conversion.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The lower and upper fixed points used to calibrate a Celsius thermometer are…",
          options: [
            "melting ice (0 °C) and steam from boiling water (100 °C)",
            "body temperature and room temperature",
            "0 K and 100 K",
            "freezing alcohol and boiling mercury",
          ],
          correctIndex: 0,
          answerKey: "The ice point (0 °C) and the steam point (100 °C) are the fixed points.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe how a liquid-in-glass thermometer works and how its scale is fixed using the two fixed points.",
          answerKey:
            "A strong answer explains that the thermometer contains a liquid (mercury or coloured alcohol) in a thin glass tube; when the bulb is heated the liquid expands and rises up the tube, and it falls when cooled, so the height of the liquid indicates the temperature. The scale is fixed by two points: the lower fixed point is the temperature of pure melting ice (0 °C) and the upper fixed point is the temperature of steam from boiling water (100 °C); the interval between them is divided into 100 equal degrees. Award marks for the expansion principle and the correct fixed points and calibration.",
          marks: 5,
        },
      ],
    },
    {
      slug: "heat-transfer-and-expansion",
      title: "Heat Transfer and Thermal Expansion",
      objective:
        "By the end of the topic, learners should be able to describe the three methods of heat transfer — conduction, convection and radiation — and explain the thermal expansion of solids, liquids and gases with everyday examples.",
      estimatedMinutes: 150,
      notes: `## Introduction

Heat never stays still — it flows from the sun to the earth, from a fire to a pot, from a warm body to the cold night air. Understanding **how** heat travels lets us both use it (cooking, drying) and stop it (keeping a house cool, insulating a flask). Heat also makes materials **expand**, an effect with important everyday consequences. This topic describes the three ways heat travels — **conduction, convection and radiation** — and the **thermal expansion** of solids, liquids and gases.

## Three ways heat travels

Heat energy moves from hot places to cold places in three ways: **conduction, convection and radiation**.

### 1. Conduction
**Conduction** is the transfer of heat through a **solid** without the material itself moving. Heat passes from particle to particle as they vibrate and pass energy along.

- **Metals** are good conductors (a metal spoon in hot soup soon feels hot).
- **Wood, plastic, air and water** are poor conductors (**insulators**) — which is why pot handles are made of wood or plastic.

### 2. Convection
**Convection** is the transfer of heat in **liquids and gases** by the actual **movement of the fluid**. When a fluid is heated it **expands, becomes less dense and rises**; cooler, denser fluid sinks to take its place, setting up a **convection current**.

- Convection currents explain how a room is heated, how the wind blows, and how water boils in a pot.

\`\`\`svg A convection current in heated water
<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Convection current rising above a heat source and sinking at the sides">
  <rect x="30" y="30" width="140" height="90" fill="#bae6fd" stroke="#075985"/>
  <path d="M100,110 C100,80 100,60 100,40" stroke="#dc2626" fill="none" stroke-width="2" marker-end="url(#up)"/>
  <path d="M60,45 C50,70 50,95 60,110" stroke="#2563eb" fill="none" stroke-width="2" marker-end="url(#dn)"/>
  <path d="M140,45 C150,70 150,95 140,110" stroke="#2563eb" fill="none" stroke-width="2" marker-end="url(#dn)"/>
  <line x1="70" y1="128" x2="130" y2="128" stroke="#dc2626" stroke-width="4"/>
  <text x="100" y="138" font-size="9" text-anchor="middle" fill="#dc2626">heat source</text>
  <defs>
    <marker id="up" markerWidth="8" markerHeight="8" refX="4" refY="1" orient="auto"><path d="M0,6 L4,0 L8,6 Z" fill="#dc2626"/></marker>
    <marker id="dn" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto"><path d="M0,0 L4,6 L8,0 Z" fill="#2563eb"/></marker>
  </defs>
</svg>
\`\`\`

### 3. Radiation
**Radiation** is the transfer of heat as **infrared waves**, which need **no material medium** — it can travel through a **vacuum**. This is how the Sun's heat reaches the Earth through empty space.

- **Dark, dull surfaces** absorb and emit radiation well; **light, shiny surfaces** reflect it. (That is why light-coloured clothes feel cooler in the sun.)

## Thermal expansion

Most substances **expand when heated and contract when cooled**, because their particles move more and take up more space.

- **Solids** expand least; **liquids** expand more; **gases** expand most.

### Everyday effects
- **Gaps in railway lines and bridges** allow for expansion on hot days.
- **Electrical/telephone wires** are left to sag so they do not snap when they contract in cold weather.
- A tight metal lid loosens when warmed under hot water (the metal expands).
- The liquid in a **thermometer** works by thermal expansion.

**Water is unusual:** between 0 °C and 4 °C it actually expands as it cools, so ice floats — important for aquatic life.

## Common errors and misconceptions

- **Confusing convection and conduction** — **conduction** passes heat through a solid without the material moving; **convection** carries heat by the actual movement of a heated fluid (liquid or gas) that rises because it is less dense.
- **Thinking radiation needs a medium** — **radiation** travels as waves and needs **no material** at all; that is how the Sun's heat reaches us across empty space.
- **Believing metals are "naturally cold"** — a metal feels cold because it is a good **conductor** that draws heat from your hand quickly, not because it is colder than nearby wood.
- **Forgetting gases expand most** — for the same temperature rise, gases expand more than liquids, and liquids more than solids.`,
      workedExample: `**Task.** (a) Name the method of heat transfer in each case: (i) a metal rod heated at one end; (ii) warm air rising in a room; (iii) heat from the Sun reaching Earth. (b) Explain why gaps are left between sections of a railway line.

**Part (a) — identify the heat-transfer method**
1. **A metal rod heated at one end → conduction.** Heat passes from particle to particle through the solid metal without the metal moving.
2. **Warm air rising in a room → convection.** The heated air expands, becomes less dense and rises, while cooler air sinks — a convection current in a gas.
3. **Heat from the Sun reaching Earth → radiation.** The heat travels as infrared waves through the vacuum of space, needing no material medium.

**Part (b) — why gaps are left in railway lines**
Metal **expands when heated**. On a hot day the steel rails become warmer and **expand (get longer)**. If the rails were laid with no space between them, the expanding metal would have nowhere to go and would **buckle (bend out of shape)**, making the track dangerous. Leaving **small gaps** between sections gives the metal room to expand safely without buckling. (In cold weather the rails contract and the gaps widen.)

**Conclusion:** the three transfer methods are conduction (through solids), convection (moving fluids) and radiation (waves through a vacuum); and expansion gaps in railway lines allow the metal to lengthen on hot days without buckling.`,
      teachingTip:
        "Anchor the three transfer methods to one keyword each: conduction = solids (particle to particle), convection = fluids (they move), radiation = waves (no medium, works in a vacuum). The 'needs no medium' point for radiation, proven by the Sun heating us through space, is a favourite exam question. For expansion, the railway-gap and sagging-wire examples are the classic applications learners should be able to explain, not just name.",
      quiz: [
        {
          prompt: "The three methods of heat transfer are conduction, convection and…",
          options: ["radiation", "expansion", "insulation", "evaporation"],
          correctIndex: 0,
          explanation: "Conduction, convection and radiation.",
        },
        {
          prompt: "Conduction is the transfer of heat mainly through…",
          options: ["solids", "empty space", "moving liquids", "waves"],
          correctIndex: 0,
          explanation: "Conduction passes heat through solids, particle to particle.",
        },
        {
          prompt: "Which is a good conductor of heat?",
          options: ["metal", "wood", "plastic", "air"],
          correctIndex: 0,
          explanation: "Metals are good conductors.",
        },
        {
          prompt: "A poor conductor of heat is called an…",
          options: ["insulator", "amplifier", "emitter", "accelerator"],
          correctIndex: 0,
          explanation: "Poor conductors (wood, plastic, air) are insulators.",
        },
        {
          prompt: "Convection occurs in…",
          options: ["liquids and gases", "solids only", "a vacuum", "metals only"],
          correctIndex: 0,
          explanation: "Convection needs a fluid that can move.",
        },
        {
          prompt: "When a fluid is heated it…",
          options: ["expands, becomes less dense and rises", "contracts and sinks", "stays still", "becomes solid"],
          correctIndex: 0,
          explanation: "Warm fluid rises, setting up a convection current.",
        },
        {
          prompt: "Radiation transfers heat as…",
          options: ["infrared waves", "moving particles", "sound", "electric current"],
          correctIndex: 0,
          explanation: "Radiation is infrared electromagnetic waves.",
        },
        {
          prompt: "Which method of heat transfer needs NO material medium?",
          options: ["radiation", "conduction", "convection", "none"],
          correctIndex: 0,
          explanation: "Radiation can travel through a vacuum.",
        },
        {
          prompt: "How does the Sun's heat reach the Earth?",
          options: ["radiation", "conduction", "convection", "insulation"],
          correctIndex: 0,
          explanation: "Through the vacuum of space by radiation.",
        },
        {
          prompt: "Which surface is the best absorber and emitter of radiation?",
          options: ["dark and dull", "light and shiny", "transparent", "metallic and polished"],
          correctIndex: 0,
          explanation: "Dark, dull surfaces absorb and emit radiation well.",
        },
        {
          prompt: "Most substances, when heated, tend to…",
          options: ["expand", "contract", "disappear", "gain mass"],
          correctIndex: 0,
          explanation: "Heating usually causes expansion.",
        },
        {
          prompt: "Which expands the most for the same temperature rise?",
          options: ["gases", "liquids", "solids", "they expand equally"],
          correctIndex: 0,
          explanation: "Gases expand most, then liquids, then solids.",
        },
        {
          prompt: "Gaps are left in railway lines to allow for…",
          options: ["expansion of the metal on hot days", "rain to drain", "the train to slow down", "extra weight"],
          correctIndex: 0,
          explanation: "The gaps let the rails expand without buckling.",
        },
        {
          prompt: "Why is a pot handle often made of wood or plastic?",
          options: ["they are poor conductors (insulators)", "they conduct heat well", "they are shiny", "they are metals"],
          correctIndex: 0,
          explanation: "Insulators keep the handle cool to touch.",
        },
        {
          prompt: "A convection current is set up because heated fluid becomes…",
          options: ["less dense and rises", "more dense and rises", "solid", "colder"],
          correctIndex: 0,
          explanation: "Warm, less-dense fluid rises; cool fluid sinks.",
        },
        {
          prompt: "Overhead wires are left to sag so that in cold weather they can…",
          options: ["contract without snapping", "expand and break", "conduct better", "melt"],
          correctIndex: 0,
          explanation: "Sagging allows for contraction when it gets cold.",
        },
        {
          prompt: "Light, shiny surfaces are good at … radiation.",
          options: ["reflecting", "absorbing", "producing", "conducting"],
          correctIndex: 0,
          explanation: "Shiny surfaces reflect radiation.",
        },
        {
          prompt: "A tight metal jar lid can be loosened by running it under hot water because the metal…",
          options: ["expands", "contracts", "melts", "becomes an insulator"],
          correctIndex: 0,
          explanation: "The heated metal lid expands and loosens.",
        },
        {
          prompt: "Which unusual behaviour lets ice float on water?",
          options: [
            "water expands as it cools between 0 °C and 4 °C",
            "water contracts when frozen",
            "water conducts heat",
            "ice is a metal",
          ],
          correctIndex: 0,
          explanation: "Water's anomalous expansion makes ice less dense.",
        },
        {
          prompt: "In conduction, heat passes through a solid by…",
          options: ["particles vibrating and passing energy along", "the solid flowing", "waves through a vacuum", "the solid rising"],
          correctIndex: 0,
          explanation: "Vibrating particles pass energy to their neighbours.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the three methods of heat transfer and state the type of material each mainly works in.",
          answerKey:
            "Conduction — through solids (particle to particle); Convection — in liquids and gases (fluid movement); Radiation — as infrared waves, needing no medium (works in a vacuum). Award a mark per method correctly matched.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which method of heat transfer can occur through a vacuum?",
          options: ["radiation", "conduction", "convection", "none of them"],
          correctIndex: 0,
          answerKey: "Radiation needs no material medium and travels through a vacuum.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain how a convection current is set up when water is heated in a pot.",
          answerKey:
            "The water at the bottom is heated, expands and becomes less dense, so it rises; cooler, denser water sinks to take its place; as this water is heated it also rises, setting up a continuous circulation — the convection current — that spreads heat through the pot. Award marks for the rise of warm less-dense water, the sinking of cooler water, and the resulting current.",
          marks: 4,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain, with two examples, why thermal expansion must be considered when building railway lines and bridges.",
          answerKey:
            "A strong answer explains that metals expand when heated and contract when cooled; if no allowance is made, the expansion on hot days would cause rails or bridge sections to buckle/bend, and contraction on cold days could cause cracking or snapping. Examples: small gaps are left between railway rail sections so they can expand without buckling; bridges are built with expansion joints/rollers so the structure can lengthen and shorten safely; overhead wires are left to sag so they do not snap when they contract. Award marks for the expansion principle and two correct engineering examples.",
          marks: 5,
        },
      ],
    },
  ],
};
