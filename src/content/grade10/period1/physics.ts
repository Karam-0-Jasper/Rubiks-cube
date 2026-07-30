import type { SubjectContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics (Grades 10-12).
// Grade 10, Semester One, Period I: Introduction to Physics and Properties of
// Matter (measurement, quantities and units, scalars/vectors, density,
// pressure). Velocity & acceleration (P2), work/energy/power (P3), thermal
// physics (P4) and electrostatics (P5) follow in their own periods.
export const physics: SubjectContent = {
  slug: "physics",
  name: "Physics",
  shortName: "Physics",
  description:
    "The science of matter and energy: measurement and units, scalars and vectors, and the properties of matter — density and pressure.",
  accent: "sky",
  sortOrder: 5,
  teacherCode: "PHY-10-3907",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "Introduction to Physics and Properties of Matter",
      summary:
        "Period I of the MoE Grade 10 Physics syllabus. Learners establish measurement — fundamental and derived quantities, units, prefixes and instruments — distinguish scalar from vector quantities, and study the properties of matter through density and pressure in solids, liquids and gases.",
      topics: [
        {
          slug: "introduction-and-measurement",
          title: "Introduction to Physics, Measurement and Vectors",
          objective:
            "By the end of the unit, learners should be able to state the branches of physics, distinguish fundamental from derived quantities with their SI units, use metric prefixes and instruments, express answers to correct significant figures, and classify quantities as scalar or vector.",
          estimatedMinutes: 160,
          notes: `## What physics is

**Physics** is the study of matter, energy and the interactions between them. Every branch rests on **measurement**, which is why measurement comes first.

Branches include **mechanics** (motion and forces), **thermal physics** (heat), **optics** (light), **electricity and magnetism**, **waves and sound**, and **modern/atomic physics**.

## Fundamental quantities

Seven quantities are defined independently; all others are built from them. The five you need now:

| Quantity | SI unit | Symbol |
| --- | --- | --- |
| Length | metre | m |
| Mass | kilogram | kg |
| Time | second | s |
| Temperature | kelvin | K |
| Electric current | ampere | A |

## Derived quantities

Formed by combining fundamental quantities.

| Quantity | Formula | SI unit |
| --- | --- | --- |
| Area | length × length | m² |
| Volume | length³ | m³ |
| Density | mass ÷ volume | kg/m³ |
| Speed | distance ÷ time | m/s |
| Force | mass × acceleration | newton (N) |
| Pressure | force ÷ area | pascal (Pa) |

## Metric prefixes and conversion

- kilo (k) = 10³ · centi (c) = 10⁻² · milli (m) = 10⁻³ · micro (µ) = 10⁻⁶ · mega (M) = 10⁶
- 1 m = 100 cm · 1 km = 1000 m · 1 kg = 1000 g

## Measuring instruments

- **Metre rule** — length, to the nearest mm
- **Vernier callipers** — small lengths and diameters, to 0.01 cm
- **Micrometer screw gauge** — very small thicknesses, to 0.01 mm
- **Beam / electronic balance** — mass
- **Spring balance** — weight (a force)
- **Stop watch** — time
- **Thermometer** — temperature

## Significant figures, accuracy and precision

Give an answer to the same precision as the least precise measurement used.

- **Accuracy** — closeness to the true value.
- **Precision** — closeness of repeated readings to one another.

**Errors:** *random error* varies unpredictably and is reduced by repeating and averaging; *systematic error* (e.g. a zero error) shifts every reading the same way and is not reduced by averaging — it must be corrected. *Parallax error* comes from reading a scale at an angle; read at eye level.

## Dimensional analysis

Checking or deriving relationships using the fundamental dimensions — mass [M], length [L], time [T]. A correct equation must have the **same dimensions on both sides**. For example, speed = distance/time has dimensions [L]/[T] = [LT⁻¹], which is why its unit is m/s.

## Scalars and vectors

- A **scalar** has magnitude only: *distance, speed, mass, time, energy, temperature, volume, density*.
- A **vector** has magnitude **and direction**: *displacement, velocity, acceleration, force, weight, momentum*.

Note the pairs — distance/displacement and speed/velocity — where the vector carries direction and the scalar does not.

## Mass and weight

- **Mass** is the quantity of matter, measured in kg by a beam balance; it does not change with location.
- **Weight** is the gravitational force on a body, measured in newtons by a spring balance; **W = mg**, and it varies with g.`,
          workedExample: `**Question:** A metal block measures 4.0 cm × 2.5 cm × 2.0 cm and has a mass of 156 g.

(a) Calculate its density in g/cm³ and in kg/m³.
(b) Classify these quantities as scalar or vector: the block's mass, its weight, the distance it is carried, and its displacement.

**Solution**

**(a) Density.**
Volume = 4.0 × 2.5 × 2.0 = **20 cm³**.
Density = mass ÷ volume = 156 ÷ 20 = **7.8 g/cm³** (two significant figures, matching the data).

Convert to kg/m³: multiply g/cm³ by 1000.
7.8 × 1000 = **7800 kg/m³**.

*Check:* 7800 kg/m³ is close to the density of iron, which is plausible for a metal block.

**(b) Scalar or vector.**
- **Mass** — scalar (magnitude only).
- **Weight** — vector (a force, with direction — downwards).
- **Distance carried** — scalar (path length, no direction).
- **Displacement** — vector (straight-line, with direction).

**The lesson:** density is a derived quantity (mass ÷ volume), and converting g/cm³ to kg/m³ multiplies by 1000. Distance and mass are scalars; displacement and weight are vectors — the vector always carries a direction.`,
          teachingTip:
            "Have every learner measure the same object — the classroom door, a textbook — and put their results on the board. The spread makes random error visible and motivates repeated readings, and it shows why the last digit of any measurement is uncertain. Then hand round a rule with the first centimetre broken off to show a systematic error that averaging cannot fix. For scalars and vectors, walk the distance–displacement distinction outside: a learner walks twenty paces out and twenty back, and the two different answers to 'how far did you go' versus 'how far are you from the start' is the whole idea. Refuse to let mass and weight be used interchangeably — ask what each would be on the moon until the class answers automatically that the mass is unchanged and the weight is about one sixth.",
          quiz: [
            { prompt: "Which is a fundamental quantity?", options: ["Force", "Density", "Time", "Pressure"], correctIndex: 2, explanation: "Time is fundamental; the others are derived." },
            { prompt: "The SI unit of mass is the", options: ["gram", "kilogram", "newton", "pound"], correctIndex: 1, explanation: "The kilogram is the SI base unit of mass." },
            { prompt: "Which instrument measures very small thicknesses to 0.01 mm?", options: ["Metre rule", "Vernier callipers", "Micrometer screw gauge", "Beam balance"], correctIndex: 2, explanation: "The micrometer reads to 0.01 mm, finer than callipers." },
            { prompt: "Which quantity is a vector?", options: ["Speed", "Mass", "Displacement", "Temperature"], correctIndex: 2, explanation: "Displacement has magnitude and direction." },
            { prompt: "The SI unit of force is the", options: ["pascal", "newton", "joule", "watt"], correctIndex: 1, explanation: "Force is measured in newtons (kg·m/s²)." },
            { prompt: "A density of 2.7 g/cm³ equals", options: ["0.0027 kg/m³", "2.7 kg/m³", "270 kg/m³", "2700 kg/m³"], correctIndex: 3, explanation: "Multiply g/cm³ by 1000 to get kg/m³." },
            { prompt: "Weight differs from mass because weight", options: ["is measured in kilograms", "is a force and varies with location", "never changes", "is a scalar"], correctIndex: 1, explanation: "Weight is the gravitational force W = mg, measured in newtons." },
            { prompt: "Which pair is a scalar and its corresponding vector?", options: ["Mass and volume", "Speed and velocity", "Energy and work", "Time and temperature"], correctIndex: 1, explanation: "Velocity is speed with a direction." },
            { prompt: "A systematic error is best reduced by", options: ["repeating and averaging", "checking and correcting the instrument", "using more decimals", "changing the observer"], correctIndex: 1, explanation: "Systematic errors shift every reading the same way, so averaging does not remove them." },
            { prompt: "The metric prefix 'milli' means", options: ["10³", "10⁻²", "10⁻³", "10⁶"], correctIndex: 2, explanation: "Milli denotes a factor of one thousandth." },
            { prompt: "Which is a derived unit?", options: ["metre", "second", "pascal", "kelvin"], correctIndex: 2, explanation: "The pascal (force per area) is derived; the others are base units." },
            { prompt: "Parallax error is avoided by", options: ["taking many readings", "reading the scale at eye level", "using a bigger instrument", "recording more decimals"], correctIndex: 1, explanation: "Parallax comes from viewing a scale at an angle." },
            { prompt: "An astronaut of mass 70 kg goes to the moon. On the moon her", options: ["mass and weight both fall", "mass stays 70 kg, weight falls", "mass falls, weight stays", "both stay the same"], correctIndex: 1, explanation: "Mass is unchanged; weight = mg falls because g is smaller." },
            { prompt: "Which quantity is a scalar?", options: ["Force", "Velocity", "Energy", "Acceleration"], correctIndex: 2, explanation: "Energy has magnitude only." },
            { prompt: "Convert 3 km to metres.", options: ["30 m", "300 m", "3000 m", "0.003 m"], correctIndex: 2, explanation: "1 km = 1000 m, so 3 km = 3000 m." },
            { prompt: "Random error can be reduced by", options: ["correcting the instrument", "taking repeated readings and averaging", "using fewer readings", "ignoring outliers only"], correctIndex: 1, explanation: "Averaging repeated readings reduces unpredictable scatter." },
            { prompt: "The volume of an irregular solid is best found by", options: ["a metre rule", "weighing it", "displacement of water", "a micrometer"], correctIndex: 2, explanation: "The rise in water level equals the solid's volume." },
            { prompt: "Dimensional analysis checks that an equation has the same", options: ["numbers on both sides", "dimensions on both sides", "units invented by the student", "colour on both sides"], correctIndex: 1, explanation: "Both sides must share the same fundamental dimensions." },
            { prompt: "Accuracy refers to closeness to", options: ["the average reading", "the true value", "zero", "the smallest reading"], correctIndex: 1, explanation: "Accuracy compares a reading to the true value." },
            { prompt: "Which instrument measures weight (a force)?", options: ["Beam balance", "Spring balance", "Metre rule", "Stop watch"], correctIndex: 1, explanation: "A spring balance measures force; a beam balance measures mass." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "State five fundamental quantities with their SI units, and give three derived quantities showing how each is formed.", answerKey: "Fundamental: length/metre, mass/kilogram, time/second, temperature/kelvin, current/ampere — 1 mark each up to 5. Derived: area = length × length (m²); density = mass/volume (kg/m³); speed = distance/time (m/s); force = mass × acceleration (N) — 2 marks each for three.", marks: 11 },
            { type: "SHORT_ANSWER", prompt: "A block of wood is 10.0 cm × 5.0 cm × 4.0 cm with a mass of 120 g. Find its density in kg/m³ and state whether it floats in water (1000 kg/m³).", answerKey: "Volume = 200 cm³; density = 120/200 = 0.6 g/cm³ = 600 kg/m³. Since 600 < 1000, it floats. Award 3 marks for the volume, 3 for the density with conversion, 3 for the conclusion with reasoning.", marks: 9 },
            { type: "MULTIPLE_CHOICE", prompt: "Which set contains only vector quantities?", options: ["Distance, speed, mass", "Displacement, velocity, force", "Energy, time, temperature", "Volume, density, speed"], correctIndex: 1, answerKey: "Displacement, velocity and force all have direction. Option B.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Distinguish between random and systematic errors, giving one example and one method of reducing each.", answerKey: "Random error varies unpredictably between readings, e.g. reaction-time variation with a stop watch; reduced by taking repeated readings and averaging. Systematic error is constant in size and direction, e.g. a zero error on a spring balance; not reduced by repetition and must be corrected by calibration or subtracting the offset. Award 3 marks per error with example, 2 per reduction method.", marks: 10 },
            { type: "ESSAY", prompt: "Explain why a standard system of units is necessary in science, describe the difference between fundamental and derived quantities, and discuss how measurement uncertainty should be handled when reporting a result.", answerKey: "Standardisation: reproducibility between workers and places, unambiguous communication, avoidance of errors from local units, with an example, 5 marks. Fundamental quantities are defined independently (length, mass, time, etc.) while derived quantities are combinations of them (density, force), with worked illustrations, 6 marks. Uncertainty: distinguish random and systematic error, use repeated readings, and quote answers to a number of significant figures justified by the data, 6 marks. Organisation and clarity, 3 marks. A learner who lists units without addressing why standardisation matters should not exceed 8.", marks: 20 },
          ],
        },
        {
          slug: "density-and-pressure",
          title: "Properties of Matter: Density and Pressure",
          objective:
            "By the end of the unit, learners should be able to define and calculate density and relative density, define pressure, and explain and calculate pressure in solids, liquids and gases.",
          estimatedMinutes: 160,
          notes: `## Density

**Density** is mass per unit volume: **density = mass ÷ volume**, unit kg/m³ (or g/cm³).

- A dense material has a lot of mass packed into a small volume (lead, iron).
- A less dense material has little mass for its volume (wood, cork).

An object **floats** if its density is **less** than that of the liquid, and **sinks** if greater. Wood (about 600 kg/m³) floats on water (1000 kg/m³); iron (7800 kg/m³) sinks.

## Relative density

**Relative density** = density of a substance ÷ density of water. It has **no unit** (it is a ratio).

- Relative density of iron = 7800 ÷ 1000 = 7.8.
- A relative density greater than 1 means the substance sinks in water; less than 1 means it floats.

## Pressure

**Pressure** is force per unit area: **pressure = force ÷ area**, unit **pascal (Pa)**, where 1 Pa = 1 N/m².

The **same force** gives a **larger pressure** over a **smaller area**. This is why a sharp knife (small area) cuts easily, a nail is pointed, and a tractor with wide tyres (large area) does not sink into soft ground.

## Pressure in solids

A solid exerts pressure on the surface it rests on, directed downward, equal to its weight divided by the area of contact.

## Pressure in liquids

Liquid pressure has three key properties:

1. It **increases with depth** — the deeper you go, the greater the pressure.
2. It acts **equally in all directions** at a given depth.
3. It depends on the **density** of the liquid, not on the shape or width of the container.

\`\`\`svg Pressure in a liquid increases with depth: water jets out faster from the lower holes in a can.
<svg viewBox="0 0 220 170" role="img" aria-label="A can of water with three holes; the lower the hole, the further the water jets out">
  <rect x="40" y="20" width="60" height="130" fill="#38bdf8" fill-opacity="0.15" stroke="currentColor"/>
  <circle cx="100" cy="55" r="3" fill="currentColor"/>
  <circle cx="100" cy="90" r="3" fill="currentColor"/>
  <circle cx="100" cy="125" r="3" fill="currentColor"/>
  <path d="M103 55 q25 6 40 30" fill="none" stroke="currentColor" stroke-opacity="0.7"/>
  <path d="M103 90 q40 8 60 40" fill="none" stroke="currentColor" stroke-opacity="0.7"/>
  <path d="M103 125 q60 8 90 40" fill="none" stroke="currentColor" stroke-opacity="0.7"/>
  <text x="70" y="15" font-size="10" fill="currentColor" text-anchor="middle">water</text>
  <text x="150" y="165" font-size="9" fill="currentColor" text-anchor="middle">deeper hole → greater pressure → water travels further</text>
</svg>
\`\`\`

The pressure at a depth *h* in a liquid of density *ρ* is **P = ρgh**, where g is the gravitational field strength.

## Pressure in gases

Gases exert pressure because their fast-moving particles collide with the walls of the container. Atmospheric pressure is the pressure of the air around us, measured with a **barometer**; it **decreases with altitude** because there is less air above. Gas pressure in a container is measured with a **manometer**.

## Everyday applications

- **Wide tyres and tank tracks** spread weight over a large area to reduce pressure on soft ground.
- **Dam walls are thicker at the bottom** because water pressure increases with depth.
- **Drinking straws and suction** work because atmospheric pressure pushes liquid up when you reduce the pressure inside.`,
          workedExample: `**Question:** A rectangular concrete block has a mass of 60 kg and a base measuring 0.5 m × 0.4 m. Take g = 10 N/kg.

(a) Calculate the pressure it exerts on the ground.
(b) The block is turned to rest on a smaller face measuring 0.4 m × 0.3 m. What is the new pressure, and what does this show?

**Solution**

*First find the weight (the force pressing down).*
Weight = mass × g = 60 × 10 = **600 N**.

**(a) Pressure on the large base.**
Area = 0.5 × 0.4 = 0.2 m².
Pressure = force ÷ area = 600 ÷ 0.2 = **3000 Pa**.

**(b) Pressure on the smaller face.**
Area = 0.4 × 0.3 = 0.12 m².
Pressure = 600 ÷ 0.12 = **5000 Pa**.

*What this shows:* the **weight (force) is unchanged**, but resting on a **smaller area** gives a **greater pressure** (5000 Pa versus 3000 Pa). This is exactly why a force applied through a small area — a knife edge, a nail point, a woman's heel — produces a high pressure, while spreading the same force over a large area — snowshoes, wide tyres — reduces it.

**Answer:** (a) 3000 Pa (b) 5000 Pa; the same force over a smaller area produces a greater pressure.`,
          teachingTip:
            "Pressure is best felt before it is calculated. Press a finger against your palm, then press with the same push through the point of a pencil — the same force, a far smaller area, a sharp increase in pressure. That thirty-second demonstration makes P = F/A obvious. For pressure in liquids, punch three holes at different heights in a plastic bottle, fill it, and let the class watch the lowest jet travel furthest; the depth rule needs no further argument. Keep pulling in local examples — why dam walls thicken towards the base, why a sharp cutlass cuts better than a blunt one, why wide tractor tyres do not sink in a swamp — so the physics stays attached to things learners have seen. Insist that weight (in newtons), not mass, is the force used in pressure calculations.",
          quiz: [
            { prompt: "Density is defined as", options: ["mass × volume", "mass ÷ volume", "volume ÷ mass", "force ÷ area"], correctIndex: 1, explanation: "Density = mass per unit volume." },
            { prompt: "An object floats in a liquid if its density is", options: ["greater than the liquid's", "less than the liquid's", "equal to the liquid's", "zero"], correctIndex: 1, explanation: "Less dense objects float; denser ones sink." },
            { prompt: "The SI unit of pressure is the", options: ["newton", "pascal", "joule", "watt"], correctIndex: 1, explanation: "1 pascal = 1 N/m²." },
            { prompt: "Pressure is defined as", options: ["force × area", "force ÷ area", "area ÷ force", "mass ÷ volume"], correctIndex: 1, explanation: "Pressure = force per unit area." },
            { prompt: "Relative density has", options: ["units of kg/m³", "no unit", "units of pascals", "units of newtons"], correctIndex: 1, explanation: "It is a ratio of two densities, so it is unitless." },
            { prompt: "A sharp knife cuts more easily than a blunt one because it", options: ["has more force", "applies force over a smaller area, raising pressure", "is heavier", "reduces friction only"], correctIndex: 1, explanation: "Smaller contact area gives greater pressure for the same force." },
            { prompt: "Pressure in a liquid increases with", options: ["width of the container", "depth", "shape of the container", "colour of the liquid"], correctIndex: 1, explanation: "The deeper the point, the greater the liquid pressure." },
            { prompt: "The relative density of a substance of density 7800 kg/m³ is", options: ["0.78", "7.8", "78", "780"], correctIndex: 1, explanation: "7800 ÷ 1000 (water) = 7.8." },
            { prompt: "Atmospheric pressure ___ with altitude.", options: ["increases", "decreases", "stays the same", "becomes zero at sea level"], correctIndex: 1, explanation: "There is less air above at higher altitude, so pressure falls." },
            { prompt: "Which instrument measures atmospheric pressure?", options: ["Manometer", "Barometer", "Thermometer", "Balance"], correctIndex: 1, explanation: "A barometer measures atmospheric pressure." },
            { prompt: "A force of 200 N acts on an area of 0.5 m². The pressure is", options: ["100 Pa", "400 Pa", "0.0025 Pa", "40 Pa"], correctIndex: 1, explanation: "Pressure = 200 ÷ 0.5 = 400 Pa." },
            { prompt: "Wide tyres reduce the risk of sinking into soft ground because they", options: ["increase the force", "spread the weight over a larger area, lowering pressure", "reduce the weight", "increase the density"], correctIndex: 1, explanation: "Larger area means lower pressure for the same weight." },
            { prompt: "At a given depth, liquid pressure acts", options: ["only downward", "only sideways", "equally in all directions", "only upward"], correctIndex: 2, explanation: "Liquid pressure is the same in all directions at a given depth." },
            { prompt: "A dam wall is built thicker at the bottom because", options: ["it looks better", "water pressure increases with depth", "the water is colder there", "the pressure is zero at the top"], correctIndex: 1, explanation: "Greater depth means greater pressure, so more strength is needed low down." },
            { prompt: "Which has the highest density?", options: ["Cork", "Wood", "Water", "Iron"], correctIndex: 3, explanation: "Iron packs the most mass into a given volume among these." },
            { prompt: "The mass of 20 cm³ of a metal of density 8 g/cm³ is", options: ["2.5 g", "28 g", "160 g", "0.4 g"], correctIndex: 2, explanation: "Mass = density × volume = 8 × 20 = 160 g." },
            { prompt: "Gases exert pressure because their particles", options: ["are stationary", "collide with the container walls", "have no mass", "are packed tightly"], correctIndex: 1, explanation: "Fast-moving gas particles hit the walls, exerting pressure." },
            { prompt: "The pressure at a depth h in a liquid of density ρ is given by", options: ["P = ρ/gh", "P = ρgh", "P = gh/ρ", "P = ρg/h"], correctIndex: 1, explanation: "Liquid pressure P = ρgh." },
            { prompt: "An object of relative density 0.8 placed in water will", options: ["sink", "float", "dissolve", "stay at the bottom"], correctIndex: 1, explanation: "A relative density below 1 means it is less dense than water, so it floats." },
            { prompt: "A drinking straw works because", options: ["you pull the liquid up magnetically", "atmospheric pressure pushes the liquid up when you lower the pressure inside", "the straw heats the liquid", "gravity pushes upward"], correctIndex: 1, explanation: "Reducing pressure inside lets atmospheric pressure push the liquid up." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Define density and relative density, and calculate the relative density of a liquid of density 1250 kg/m³.", answerKey: "Density is mass per unit volume (kg/m³). Relative density is the density of a substance divided by the density of water, with no unit. Relative density = 1250 ÷ 1000 = 1.25. Award 3 marks per definition and 3 for the calculation.", marks: 9 },
            { type: "SHORT_ANSWER", prompt: "A box weighs 900 N and rests on a base of area 0.3 m². Find the pressure. If the same box rests on a base of 0.1 m², find the new pressure and comment.", answerKey: "First: P = 900 ÷ 0.3 = 3000 Pa. Second: P = 900 ÷ 0.1 = 9000 Pa. The force is unchanged, but the smaller area gives a greater pressure. Award 3 marks each for the two pressures and 2 for the comment.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "Three identical holes are made at different heights in a water can. From which does the water jet out furthest?", options: ["The top hole", "The middle hole", "The bottom hole", "All the same"], correctIndex: 2, answerKey: "Pressure increases with depth, so the deepest (bottom) hole has the greatest pressure and the water travels furthest. Option C.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "State three properties of pressure in a liquid, and give one real application of each.", answerKey: "1. Increases with depth — dam walls are thicker at the base; deep-sea divers need pressurised suits. 2. Acts equally in all directions at a given depth — hydraulic systems transmit pressure. 3. Depends on the density of the liquid, not the container shape — the same depth of a denser liquid gives greater pressure. Award 2 marks per property and 1 per apt application.", marks: 9 },
            { type: "ESSAY", prompt: "Explain, using the relationship pressure = force ÷ area, why each of the following is designed as it is: a sharp cutlass, a tractor with wide tyres, and a dam wall that is thicker at the bottom.", answerKey: "State P = F/A and that for a fixed force, pressure rises as area falls and falls as area rises. Cutlass: a sharp edge is a very small contact area, so the same force gives a high pressure that cuts easily, 5 marks. Wide tyres: a large contact area spreads the tractor's weight, lowering the pressure on soft ground so it does not sink, 5 marks. Dam wall thicker at the bottom: this concerns liquid pressure, which increases with depth (P = ρgh), so the wall must be strongest low down where pressure is greatest, 6 marks. Award 4 marks for clear use of the relationship and coherent expression. A learner who describes the designs without linking them to pressure = force/area (or depth) should not exceed 8.", marks: 20 },
          ],
        },
      ],
    },
  ],
};
