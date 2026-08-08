import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 10,
// Semester Two, Period IV: Thermal Physics. Topics follow the syllabus
// CONTENTS: difference between temperature and heat; temperature scales
// (Fahrenheit, Celsius, Kelvin — conversions); thermometry (types of
// thermometers and their properties, calibration); expansion (linear, area,
// volume); and the gas laws (Boyle's, Charles's, Pressure and Combined).
export const physicsG10P4: PeriodContent = {
  grade: 10,
  number: 4,
  title: "Thermal Physics",
  summary:
    "Period IV of the MoE Grade 10 Physics syllabus. Learners distinguish heat from temperature, convert between the Celsius, Fahrenheit and Kelvin scales, describe the types and calibration of thermometers, calculate linear, area and volume expansion of solids and liquids, and apply Boyle's, Charles's, the pressure law and the combined gas law.",
  topics: [
    // source: OpenStax — College Physics 2e, 14.1 Heat (https://openstax.org/books/college-physics-2e/pages/14-1-heat)
    {
      slug: "temperature-and-heat",
      title: "Difference Between Temperature and Heat",
      objective:
        "By the end of the topic, learners should be able to distinguish heat from temperature, define each with its unit, and describe thermal equilibrium and the direction of heat flow. (MoE Grade 10 Period IV, CONTENTS a 'Difference between temperature and heat'.)",
      estimatedMinutes: 90,
      notes: `## Temperature

- **Temperature** — a measure of the average kinetic energy of the particles of a body; a measure of how hot or cold a body is.
- Temperature is what a **thermometer** measures.
- SI unit: the **kelvin (K)**; also measured in degrees Celsius (°C).
- Temperature is **not** energy; it does not depend on the amount of substance.

## Heat

- **Heat** — the energy transferred from one body to another because of a temperature difference.
- Heat is a form of **energy** in transit; SI unit: the **joule (J)**.
- Other unit: the **calorie (cal)** — the energy to raise 1 g of water by 1 °C; 1 kcal = 4186 J.
- Heat flows **spontaneously from the hotter body to the colder body** until they reach the same temperature.

## Thermal equilibrium

- **Thermal equilibrium** — the state reached when two bodies in contact are at the same temperature and no net heat flows between them.

## Heat vs temperature — the key distinction

| Feature | Temperature | Heat |
| --- | --- | --- |
| What it is | measure of average kinetic energy (hotness) | energy in transit |
| Unit | kelvin (K), °C | joule (J), calorie |
| Depends on amount? | no | yes |
| Instrument | thermometer | — (measured via effects) |

- A cup of boiling water is at a **higher temperature** than a bucket of warm water, but the bucket may contain **more heat energy** because it has far more particles.

## Mechanical equivalent of heat

- Work and heat both transfer energy: Joule showed **1 kcal = 4186 J**.

## Common errors

- **Saying a body "contains heat"** — a body contains internal energy; heat is energy *transferred* because of a temperature difference.
- **Confusing high temperature with much heat** — a small very hot object can carry less heat than a large warm one.`,
      workedExample: `**Problem.** A mug holds 0.20 kg of water at 90 °C; a bath holds 40 kg of water at 40 °C. (a) Which is at the higher temperature? (b) Roughly which contains more heat energy above 0 °C? (Take the energy to warm water as proportional to mass × temperature; specific heat of water ≈ 4186 J per kg per °C.)

**Step 1 — Temperature.** The mug (90 °C) is at the higher temperature than the bath (40 °C).

**Step 2 — Energy in the mug.** Q_mug = 4186 × 0.20 × 90 = 75 348 J ≈ 7.5 × 10⁴ J.

**Step 3 — Energy in the bath.** Q_bath = 4186 × 40 × 40 = 6 697 600 J ≈ 6.7 × 10⁶ J.

**Answer.** The mug is hotter (higher temperature), but the bath holds far more heat energy (≈ 6.7 × 10⁶ J vs 7.5 × 10⁴ J) because it contains much more water. Temperature and quantity of heat are different things.`,
      quiz: [
        { prompt: "Temperature is a measure of the average ___ of the particles.", options: ["mass", "kinetic energy", "charge", "volume"], correctIndex: 1, explanation: "Temperature measures the average kinetic energy of particles." },
        { prompt: "Heat is:", options: ["the same as temperature", "energy transferred due to a temperature difference", "a measure of hotness", "measured in kelvin"], correctIndex: 1, explanation: "Heat is energy in transit because of a temperature difference." },
        { prompt: "The SI unit of heat is the:", options: ["kelvin", "joule", "degree Celsius", "newton"], correctIndex: 1, explanation: "Heat is energy, measured in joules." },
        { prompt: "Temperature is measured with a:", options: ["balance", "thermometer", "ruler", "voltmeter"], correctIndex: 1, explanation: "A thermometer measures temperature." },
        { prompt: "Heat flows naturally from a body that is:", options: ["colder to hotter", "hotter to colder", "larger to smaller", "lighter to heavier"], correctIndex: 1, explanation: "Heat flows spontaneously from hot to cold." },
        { prompt: "Two bodies at the same temperature in contact are in:", options: ["free fall", "thermal equilibrium", "expansion", "melting"], correctIndex: 1, explanation: "Equal temperature with no net heat flow is thermal equilibrium." },
        { prompt: "The calorie is a unit of:", options: ["temperature", "heat energy", "mass", "pressure"], correctIndex: 1, explanation: "The calorie measures heat energy." },
        { prompt: "1 kcal equals about:", options: ["4186 J", "100 J", "273 J", "1000 K"], correctIndex: 0, explanation: "1 kcal = 4186 J (mechanical equivalent of heat)." },
        { prompt: "Which depends on the amount of substance?", options: ["temperature", "heat energy", "the boiling point", "the melting point"], correctIndex: 1, explanation: "Heat depends on quantity; temperature does not." },
        { prompt: "A spark at 1000 °C carries less heat than a warm bath because the spark has:", options: ["higher temperature", "very few particles (small mass)", "more particles", "no energy"], correctIndex: 1, explanation: "Heat depends on mass; the tiny spark holds little energy despite its high temperature." },
        { prompt: "Temperature does NOT depend on:", options: ["how hot the body is", "the average kinetic energy", "the amount of substance", "the thermometer reading"], correctIndex: 2, explanation: "Temperature is independent of the amount of substance." },
        { prompt: "Heat transfer between two bodies stops when they:", options: ["are the same colour", "reach the same temperature", "have equal mass", "stop moving"], correctIndex: 1, explanation: "No net heat flows once temperatures are equal (thermal equilibrium)." },
        { prompt: "James Joule showed that heat and ___ both transfer energy.", options: ["mass", "work", "charge", "light"], correctIndex: 1, explanation: "Joule established the mechanical equivalent of heat: work = heat." },
        { prompt: "Which statement is correct?", options: ["A body contains heat", "Heat is energy in transit", "Heat is measured in kelvin", "Temperature is energy"], correctIndex: 1, explanation: "Heat is transferred energy; a body has internal energy, not 'heat'." },
        { prompt: "The kelvin is the SI unit of:", options: ["heat", "temperature", "energy", "pressure"], correctIndex: 1, explanation: "Temperature's SI unit is the kelvin." },
        { prompt: "When you touch a hot metal, energy flows:", options: ["from your hand to the metal", "from the metal to your hand", "in neither direction", "as temperature"], correctIndex: 1, explanation: "The metal is hotter, so heat flows from it to your hand." },
        { prompt: "A large warm lake compared with a small cup of boiling water has:", options: ["higher temperature", "more total heat energy", "less mass", "no heat"], correctIndex: 1, explanation: "The lake holds far more heat energy despite being cooler." },
        { prompt: "Food 'Calories' are actually:", options: ["joules", "kilocalories", "kelvin", "newtons"], correctIndex: 1, explanation: "Dietary Calories are kilocalories." },
        { prompt: "Internal energy of a body increases when it:", options: ["loses heat", "absorbs heat", "cools down", "stays in equilibrium"], correctIndex: 1, explanation: "Absorbing heat raises internal energy (and usually temperature)." },
        { prompt: "The difference between heat and temperature is best stated as:", options: ["they are the same", "heat is energy transferred; temperature measures hotness", "heat is hotness; temperature is energy", "both are measured in joules"], correctIndex: 1, explanation: "Heat = transferred energy; temperature = measure of average kinetic energy/hotness." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish clearly between heat and temperature, giving the SI unit of each.", answerKey: "Temperature = measure of the average kinetic energy of particles (hotness), unit kelvin (K) or °C, independent of amount. Heat = energy transferred between bodies because of a temperature difference, unit joule (J), depends on amount.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Heat always flows spontaneously from a region of:", options: ["low to high temperature", "high to low temperature", "small to large mass", "solid to liquid"], correctIndex: 1, answerKey: "Heat flows from hotter to colder until thermal equilibrium.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain why a bucket of warm water can contain more heat energy than a cup of boiling water.", answerKey: "Heat energy depends on both temperature and mass (number of particles). The bucket has far more water, so even at a lower temperature its total heat energy can exceed that of the small, hotter cup.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which of these is a unit of heat energy?", options: ["kelvin", "joule", "degree Celsius", "pascal"], correctIndex: 1, answerKey: "Heat is energy, measured in joules (also calories).", marks: 2 },
        { type: "ESSAY", prompt: "Explain the meaning of thermal equilibrium and describe what happens, in terms of heat and temperature, when a hot metal block is dropped into cold water.", answerKey: "Thermal equilibrium = both bodies at the same temperature with no net heat flow. When a hot block is placed in cold water, heat flows from the hotter block to the colder water; the block cools and the water warms; particle kinetic energies redistribute until both reach a common temperature (equilibrium), after which no net heat flows. Total energy is conserved. Reward correct direction of heat flow and definition of equilibrium.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 13.1 Temperature (https://openstax.org/books/college-physics-2e/pages/13-1-temperature)
    {
      slug: "temperature-scales",
      title: "Temperature Scales and Conversions",
      objective:
        "By the end of the topic, learners should be able to describe the Celsius, Fahrenheit and Kelvin scales, convert between them, and explain absolute zero. (MoE Grade 10 Period IV, CONTENTS b 'Temperature scales (Fahrenheit, Celsius and Kelvin - conversions)'.)",
      estimatedMinutes: 100,
      notes: `## The three temperature scales

| Scale | Freezing point of water | Boiling point of water |
| --- | --- | --- |
| Celsius (°C) | 0 °C | 100 °C |
| Fahrenheit (°F) | 32 °F | 212 °F |
| Kelvin (K) | 273.15 K | 373.15 K |

- **Celsius scale** — 100 equal divisions between the ice point (0 °C) and steam point (100 °C).
- **Fahrenheit scale** — ice point 32 °F, steam point 212 °F, 180 divisions between them.
- **Kelvin scale (absolute scale)** — the SI scale; 0 K is **absolute zero**; one kelvin is the same size as one Celsius degree.

## Conversion formulas

- Celsius → Fahrenheit: T(°F) = (9/5)·T(°C) + 32
- Fahrenheit → Celsius: T(°C) = (5/9)·(T(°F) − 32)
- Celsius → Kelvin: T(K) = T(°C) + 273 (more exactly + 273.15)
- Kelvin → Celsius: T(°C) = T(K) − 273

- One Celsius degree = 1.8 Fahrenheit degrees (180 °F ÷ 100 °C = 9/5).

## Absolute zero

- **Absolute zero** — the lowest possible temperature, 0 K = −273.15 °C, where particle motion is at its minimum.
- Real gases liquefy and solidify before reaching it; it cannot be fully attained.

## Common errors

- **Using °C in gas-law calculations** — those require kelvin.
- **Forgetting the +32 (or −32)** in Fahrenheit conversions.
- **Mixing the ratios** — °C→°F multiplies by 9/5; °F→°C multiplies by 5/9.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 13.1).** Room temperature is 25 °C. Convert it to (a) Fahrenheit and (b) Kelvin.

**Part (a) — to Fahrenheit.** T(°F) = (9/5)·T(°C) + 32 = (9/5)(25) + 32 = 45 + 32 = 77 °F.

**Part (b) — to Kelvin.** T(K) = T(°C) + 273 = 25 + 273 = 298 K (using 273.15 gives 298.15 K).

**Answer.** 25 °C = 77 °F = 298 K.`,
      quiz: [
        { prompt: "On the Celsius scale, water freezes at:", options: ["32 °C", "0 °C", "273 °C", "100 °C"], correctIndex: 1, explanation: "Water freezes at 0 °C on the Celsius scale." },
        { prompt: "On the Fahrenheit scale, water boils at:", options: ["100 °F", "180 °F", "212 °F", "273 °F"], correctIndex: 2, explanation: "Water boils at 212 °F." },
        { prompt: "The SI unit of temperature is the:", options: ["degree Celsius", "degree Fahrenheit", "kelvin", "joule"], correctIndex: 2, explanation: "The kelvin is the SI unit of temperature." },
        { prompt: "Absolute zero is:", options: ["0 °C", "0 °F", "0 K", "273 K"], correctIndex: 2, explanation: "Absolute zero is 0 K = −273.15 °C." },
        { prompt: "To convert °C to K, you:", options: ["subtract 273", "add 273", "multiply by 9/5", "divide by 5/9"], correctIndex: 1, explanation: "T(K) = T(°C) + 273." },
        { prompt: "25 °C in kelvin is about:", options: ["248 K", "298 K", "25 K", "323 K"], correctIndex: 1, explanation: "25 + 273 = 298 K." },
        { prompt: "100 °C in kelvin is:", options: ["100 K", "273 K", "373 K", "212 K"], correctIndex: 2, explanation: "100 + 273 = 373 K." },
        { prompt: "The formula to convert °C to °F is:", options: ["(5/9)(°C−32)", "(9/5)°C + 32", "°C + 273", "°C − 32"], correctIndex: 1, explanation: "T(°F) = (9/5)T(°C) + 32." },
        { prompt: "0 °C in Fahrenheit is:", options: ["0 °F", "32 °F", "212 °F", "100 °F"], correctIndex: 1, explanation: "(9/5)(0)+32 = 32 °F." },
        { prompt: "37 °C (body temperature) in Fahrenheit is about:", options: ["98.6 °F", "37 °F", "310 °F", "72 °F"], correctIndex: 0, explanation: "(9/5)(37)+32 = 66.6+32 = 98.6 °F." },
        { prompt: "One Celsius degree equals how many Fahrenheit degrees?", options: ["1", "1.8", "5/9", "32"], correctIndex: 1, explanation: "180/100 = 1.8 °F per °C." },
        { prompt: "A kelvin is the same size as a:", options: ["Fahrenheit degree", "Celsius degree", "half a Celsius degree", "calorie"], correctIndex: 1, explanation: "The kelvin and Celsius degree are equal in size." },
        { prompt: "−273 °C is approximately:", options: ["0 K", "273 K", "−273 K", "100 K"], correctIndex: 0, explanation: "−273 °C is absolute zero, 0 K." },
        { prompt: "To convert °F to °C, you use:", options: ["(9/5)°F + 32", "(5/9)(°F − 32)", "°F + 273", "°F − 273"], correctIndex: 1, explanation: "T(°C) = (5/9)(T(°F) − 32)." },
        { prompt: "50 °F in Celsius is:", options: ["10 °C", "18 °C", "122 °C", "50 °C"], correctIndex: 0, explanation: "(5/9)(50−32) = (5/9)(18) = 10 °C." },
        { prompt: "300 K in Celsius is:", options: ["27 °C", "573 °C", "300 °C", "−27 °C"], correctIndex: 0, explanation: "300 − 273 = 27 °C." },
        { prompt: "Which scale must be used in gas-law calculations?", options: ["Celsius", "Fahrenheit", "Kelvin", "any scale"], correctIndex: 2, explanation: "Gas laws require absolute (Kelvin) temperature." },
        { prompt: "The number of divisions between ice and steam points on the Celsius scale is:", options: ["180", "100", "273", "32"], correctIndex: 1, explanation: "The Celsius scale has 100 divisions." },
        { prompt: "Below absolute zero, temperature:", options: ["is common in nature", "cannot exist", "is 0 °C", "equals 273 K"], correctIndex: 1, explanation: "0 K is the lowest possible temperature." },
        { prompt: "Water boils at ___ on the Kelvin scale.", options: ["100 K", "273 K", "373 K", "212 K"], correctIndex: 2, explanation: "100 °C = 373 K." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Convert 60 °C to kelvin.", options: ["213 K", "333 K", "60 K", "140 K"], correctIndex: 1, answerKey: "60 + 273 = 333 K.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the freezing and boiling points of water on the Celsius, Fahrenheit and Kelvin scales.", answerKey: "Celsius: 0 °C and 100 °C. Fahrenheit: 32 °F and 212 °F. Kelvin: 273 K (273.15) and 373 K (373.15).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Convert 68 °F to degrees Celsius, showing your working.", answerKey: "T(°C) = (5/9)(68 − 32) = (5/9)(36) = 20 °C.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Absolute zero is equal to:", options: ["0 °C", "−273 °C", "273 K", "32 °F"], correctIndex: 1, answerKey: "Absolute zero is 0 K = −273 °C (−273.15).", marks: 2 },
        { type: "ESSAY", prompt: "Describe the Celsius, Fahrenheit and Kelvin temperature scales and explain how to convert between them, giving the fixed points used.", answerKey: "Fixed points: ice point and steam point of water. Celsius: 0 and 100 °C (100 divisions). Fahrenheit: 32 and 212 °F (180 divisions). Kelvin: absolute scale, 0 K = absolute zero (−273 °C), water 273 K and 373 K; 1 K = 1 °C in size. Conversions: °F = (9/5)°C + 32; °C = (5/9)(°F − 32); K = °C + 273. Reward correct fixed points and all conversion formulas.", marks: 8 },
      ],
    },
    // source: OpenStax — University Physics Volume 2, 1.2 Thermometers and Temperature Scales (https://openstax.org/books/university-physics-volume-2/pages/1-2-thermometers-and-temperature-scales)
    {
      slug: "thermometry",
      title: "Thermometry: Types of Thermometers and Calibration",
      objective:
        "By the end of the topic, learners should be able to explain how a thermometer works using a thermometric property, describe the main types of thermometers and their uses, and explain the calibration of a thermometer using fixed points. (MoE Grade 10 Period IV, CONTENTS c 'Thermometry: types of thermometers and their properties, calibration'.)",
      estimatedMinutes: 100,
      notes: `## How a thermometer works

- **Thermometry** — the measurement of temperature.
- A thermometer uses a **thermometric property** — a physical property that changes steadily and measurably with temperature.
- Common thermometric properties: volume of a liquid, length of a solid, electrical resistance, gas pressure, colour, emitted infrared radiation.

## Types of thermometers

| Type | Thermometric property | Typical use |
| --- | --- | --- |
| Liquid-in-glass (mercury or alcohol) | expansion of a liquid | everyday and clinical temperatures |
| Clinical thermometer | expansion of mercury with a constriction | body temperature (has a kink to hold the reading) |
| Bimetallic strip | different expansion of two metals | ovens, thermostats |
| Thermocouple | voltage from a junction of two metals | high/fast-changing temperatures, furnaces |
| Resistance thermometer / thermistor | electrical resistance | precise and electronic measurements |
| Constant-volume gas thermometer | gas pressure at fixed volume | very accurate standard measurements |
| Infrared (pyrometer) | infrared radiation emitted | non-contact, ear, very hot bodies |

- **Alcohol** expands more than mercury and is used for very cold temperatures; **mercury** is used for a wide, higher range.

## Calibration and fixed points

- A scale is created using two reproducible **fixed points**:
- **Lower (ice) fixed point** — temperature of pure melting ice (0 °C).
- **Upper (steam) fixed point** — temperature of steam above water boiling at standard pressure (100 °C).
- The distance on the stem between the two fixed points is called the **fundamental interval**, divided into equal degrees (100 for Celsius).
- To find an unknown temperature, the position of the liquid meniscus is read against this graduated scale.

## Common errors

- **Reading a clinical thermometer without shaking it down** — the constriction keeps the previous maximum reading.
- **Using mercury for very low temperatures** — mercury freezes at −39 °C; use alcohol instead.
- **Confusing fixed points with room readings** — fixed points are the reproducible ice and steam points used to set the scale.`,
      workedExample: `**Problem.** An unmarked mercury thermometer has its mercury column at 4.0 cm above the bulb when placed in melting ice (0 °C) and at 24.0 cm when placed in steam (100 °C). What temperature corresponds to a column length of 13.0 cm?

**Step 1 — Fundamental interval.** Length between fixed points = 24.0 − 4.0 = 20.0 cm, which represents 100 °C.

**Step 2 — Rise above the ice point.** 13.0 − 4.0 = 9.0 cm above the lower fixed point.

**Step 3 — Fraction of the interval.** temperature = (9.0 / 20.0) × 100 °C.

**Step 4 — Evaluate.** = 0.45 × 100 = 45 °C.

**Answer.** The column length of 13.0 cm corresponds to 45 °C. This is the calibration method: the scale is fixed by the ice and steam points and divided evenly between them.`,
      quiz: [
        { prompt: "A property that changes steadily with temperature is called a:", options: ["fixed point", "thermometric property", "calibration", "fundamental interval"], correctIndex: 1, explanation: "A thermometric property varies measurably with temperature." },
        { prompt: "The most common liquid-in-glass thermometers use:", options: ["water or oil", "mercury or alcohol", "petrol", "blood"], correctIndex: 1, explanation: "Mercury and alcohol are the usual thermometric liquids." },
        { prompt: "A clinical thermometer has a constriction (kink) so that it:", options: ["reads faster", "holds the maximum reading", "measures pressure", "does not break"], correctIndex: 1, explanation: "The constriction keeps the reading until the thermometer is shaken down." },
        { prompt: "The lower fixed point of the Celsius scale is the temperature of:", options: ["boiling water", "melting ice", "the human body", "steam"], correctIndex: 1, explanation: "0 °C is the temperature of pure melting ice." },
        { prompt: "The upper fixed point of the Celsius scale is the temperature of:", options: ["ice", "steam over boiling water", "warm water", "the room"], correctIndex: 1, explanation: "100 °C is the steam point at standard pressure." },
        { prompt: "The thermometric property of a resistance thermometer is:", options: ["colour", "electrical resistance", "gas pressure", "length"], correctIndex: 1, explanation: "It uses the change of electrical resistance with temperature." },
        { prompt: "For very low temperatures, mercury is unsuitable because it:", options: ["boils", "freezes at −39 °C", "changes colour", "conducts electricity"], correctIndex: 1, explanation: "Mercury freezes at −39 °C, so alcohol is used for low temperatures." },
        { prompt: "A thermocouple produces a ___ that depends on temperature.", options: ["colour", "voltage", "sound", "pressure"], correctIndex: 1, explanation: "A thermocouple generates a temperature-dependent voltage." },
        { prompt: "A non-contact thermometer that measures infrared radiation is a:", options: ["thermistor", "pyrometer", "bimetallic strip", "gas thermometer"], correctIndex: 1, explanation: "An infrared thermometer or pyrometer measures emitted infrared radiation." },
        { prompt: "The distance on the stem between the two fixed points is the:", options: ["thermometric property", "fundamental interval", "meniscus", "calibration point"], correctIndex: 1, explanation: "The fundamental interval is divided into degrees." },
        { prompt: "A bimetallic strip works because two metals have different:", options: ["colours", "expansions when heated", "masses", "densities"], correctIndex: 1, explanation: "Unequal expansion bends the strip, used in thermostats." },
        { prompt: "Calibrating a thermometer means:", options: ["cleaning it", "marking its scale using fixed points", "heating it strongly", "breaking the bulb"], correctIndex: 1, explanation: "Calibration sets the scale from reproducible fixed points." },
        { prompt: "The temperature read on a thermometer is shown by the position of the:", options: ["bulb", "meniscus of the liquid", "glass stem", "scale zero"], correctIndex: 1, explanation: "The meniscus position against the scale gives the temperature." },
        { prompt: "Alcohol is preferred to mercury for measuring:", options: ["very high temperatures", "very low temperatures", "body temperature", "steam"], correctIndex: 1, explanation: "Alcohol stays liquid at very low temperatures." },
        { prompt: "A constant-volume gas thermometer uses the change of gas ___ with temperature.", options: ["colour", "pressure", "mass", "resistance"], correctIndex: 1, explanation: "At fixed volume, gas pressure rises with temperature." },
        { prompt: "The Celsius fundamental interval is divided into:", options: ["10 degrees", "100 degrees", "180 degrees", "273 degrees"], correctIndex: 1, explanation: "There are 100 equal divisions between 0 and 100 °C." },
        { prompt: "A thermostat in an oven commonly uses a:", options: ["mercury bulb", "bimetallic strip", "pyrometer", "gas thermometer"], correctIndex: 1, explanation: "Bimetallic strips are used as thermostats." },
        { prompt: "Before use, a clinical thermometer must be:", options: ["heated", "shaken down", "frozen", "painted"], correctIndex: 1, explanation: "Shaking returns the mercury past the constriction to reset it." },
        { prompt: "Which thermometer is best for a furnace at 1000 °C?", options: ["mercury-in-glass", "thermocouple or pyrometer", "clinical thermometer", "alcohol thermometer"], correctIndex: 1, explanation: "Thermocouples and pyrometers handle very high temperatures." },
        { prompt: "Reproducible temperatures used to set a scale are called:", options: ["meniscus points", "fixed points", "thermistors", "intervals"], correctIndex: 1, explanation: "Fixed points (ice and steam) are reproducible reference temperatures." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "What is a thermometric property? Give three examples used in thermometers.", answerKey: "A thermometric property is a physical property that changes steadily and measurably with temperature. Examples: volume/length of a liquid or solid (expansion), electrical resistance, gas pressure, colour, emitted infrared radiation (any three).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The upper fixed point used to calibrate a Celsius thermometer is:", options: ["melting ice (0 °C)", "steam over boiling water (100 °C)", "body temperature (37 °C)", "room temperature"], correctIndex: 1, answerKey: "The steam point at standard pressure is 100 °C.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain why a clinical thermometer has a constriction in its bore.", answerKey: "The constriction breaks the mercury thread when the thermometer is removed, so the mercury above it stays in place and holds the maximum (body) reading until the thermometer is shaken down.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which thermometric property does a thermistor use?", options: ["expansion of a liquid", "electrical resistance", "gas pressure", "infrared radiation"], correctIndex: 1, answerKey: "A thermistor uses the change of electrical resistance with temperature.", marks: 2 },
        { type: "ESSAY", prompt: "Describe how a liquid-in-glass thermometer is calibrated using fixed points, and name two other types of thermometer with the property each uses.", answerKey: "Calibration: place bulb in pure melting ice and mark the lower fixed point (0 °C); place in steam above boiling water at standard pressure and mark the upper fixed point (100 °C); divide the fundamental interval between them into 100 equal degrees. Other thermometers: thermocouple (voltage from a metal junction), resistance thermometer/thermistor (electrical resistance), bimetallic strip (unequal expansion), constant-volume gas (gas pressure), pyrometer (infrared) — any two. Reward correct fixed-point method and two valid types/properties.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 13.2 Thermal Expansion of Solids and Liquids (https://openstax.org/books/college-physics-2e/pages/13-2-thermal-expansion-of-solids-and-liquids)
    {
      slug: "thermal-expansion",
      title: "Thermal Expansion: Linear, Area and Volume",
      objective:
        "By the end of the topic, learners should be able to explain thermal expansion, use the linear, area and volume expansion formulas, and describe everyday effects of expansion. (MoE Grade 10 Period IV, CONTENTS 'Expansion: Linear, area and volume'.)",
      estimatedMinutes: 100,
      notes: `## Thermal expansion

- **Thermal expansion** — the increase in size (length, area or volume) of a body when its temperature rises.
- Cause: heating gives particles more kinetic energy; they vibrate more and push their neighbours farther apart.
- Most substances expand on heating and contract on cooling.

## Linear expansion

- **Linear expansion** — increase in length of a solid.
- ΔL = α L ΔT
- **ΔL** — change in length; **α** — coefficient of linear expansion (per °C); **L** — original length; **ΔT** — temperature change.
- α is small — e.g. steel ≈ 12 × 10⁻⁶ /°C.

## Area (superficial) expansion

- **Area expansion** — increase in area of a surface.
- ΔA = 2α A ΔT (the area coefficient is about 2α).

## Volume (cubical) expansion

- **Volume expansion** — increase in volume of a solid, liquid or gas.
- ΔV = β V ΔT, where the volume coefficient β ≈ 3α for a solid.
- Liquids and gases expand more than solids.

## Everyday effects

- **Expansion gaps** in bridges, railway lines and roads prevent buckling.
- **Bimetallic strips** bend as two metals expand unequally (thermostats).
- **Sagging overhead cables** in hot weather.
- Loosening a tight metal lid by warming it.

## Common errors

- **Forgetting the factor 2 or 3** — area uses 2α, volume uses 3α.
- **Using different units for L and ΔL** — keep consistent length units.
- **Ignoring that ΔT is a temperature change** — a rise of 10 °C equals a rise of 10 K.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 13.2).** The main span of a steel bridge is 1275 m long at its coldest, −15 °C. In summer the temperature reaches 40 °C. By how much does the span expand? (Steel: α = 12 × 10⁻⁶ /°C.)

**Step 1 — Temperature change.** ΔT = 40 − (−15) = 55 °C.

**Step 2 — Formula.** ΔL = α L ΔT.

**Step 3 — Substitute.** ΔL = (12 × 10⁻⁶)(1275)(55).

**Step 4 — Evaluate.** 12 × 10⁻⁶ × 1275 = 1.53 × 10⁻²; × 55 = 0.84 m.

**Answer.** The span expands by about 0.84 m, which is why bridges are built with expansion joints to absorb the change without buckling.`,
      quiz: [
        { prompt: "Thermal expansion is the increase in size of a body when its temperature:", options: ["falls", "rises", "stays the same", "reaches zero"], correctIndex: 1, explanation: "Bodies generally expand when heated." },
        { prompt: "Heating makes particles:", options: ["stop moving", "vibrate more and push apart", "become heavier", "lose energy"], correctIndex: 1, explanation: "More kinetic energy means larger vibrations and greater spacing." },
        { prompt: "The linear expansion formula is:", options: ["ΔL = αLΔT", "ΔL = L/αΔT", "ΔL = αL/ΔT", "ΔL = α + LΔT"], correctIndex: 0, explanation: "ΔL = α L ΔT." },
        { prompt: "In ΔL = αLΔT, α is the coefficient of:", options: ["area expansion", "linear expansion", "volume expansion", "density"], correctIndex: 1, explanation: "α is the coefficient of linear expansion." },
        { prompt: "The area expansion coefficient is about:", options: ["α", "2α", "3α", "α/2"], correctIndex: 1, explanation: "Area expands with a coefficient ≈ 2α." },
        { prompt: "The volume expansion coefficient for a solid is about:", options: ["α", "2α", "3α", "0"], correctIndex: 2, explanation: "Volume expands with β ≈ 3α." },
        { prompt: "Which expand most for the same temperature rise?", options: ["solids", "liquids and gases", "metals only", "glass"], correctIndex: 1, explanation: "Liquids and especially gases expand more than solids." },
        { prompt: "Expansion gaps in bridges and railways are left to prevent:", options: ["rusting", "buckling from expansion", "cooling", "noise"], correctIndex: 1, explanation: "Gaps allow expansion so the structure does not buckle." },
        { prompt: "A bimetallic strip bends because the two metals have different:", options: ["colours", "coefficients of expansion", "masses", "densities"], correctIndex: 1, explanation: "Unequal expansion of the two metals bends the strip." },
        { prompt: "A steel rod 2 m long, α = 12×10⁻⁶/°C, heated by 50 °C expands by:", options: ["1.2 mm", "12 mm", "0.12 mm", "120 mm"], correctIndex: 0, explanation: "ΔL = 12×10⁻⁶ × 2 × 50 = 1.2×10⁻³ m = 1.2 mm." },
        { prompt: "A tight metal jar lid opens more easily after warming because the metal:", options: ["contracts", "expands", "melts", "cools"], correctIndex: 1, explanation: "Warming expands the metal lid so it loosens." },
        { prompt: "ΔT for a rise from 20 °C to 70 °C is:", options: ["50 °C", "90 °C", "20 °C", "343 °C"], correctIndex: 0, explanation: "ΔT = 70 − 20 = 50 °C." },
        { prompt: "Overhead power cables sag in hot weather because they:", options: ["contract", "expand and lengthen", "melt", "cool"], correctIndex: 1, explanation: "Heating lengthens the cables, so they sag." },
        { prompt: "The change in length for a given ΔT is proportional to the:", options: ["cross-section only", "original length", "colour", "mass"], correctIndex: 1, explanation: "ΔL ∝ L (original length)." },
        { prompt: "A copper sheet is heated. Its area increases according to:", options: ["ΔA = αAΔT", "ΔA = 2αAΔT", "ΔA = 3αAΔT", "ΔA = AΔT"], correctIndex: 1, explanation: "Area expansion uses ≈ 2α." },
        { prompt: "Volume expansion is described by:", options: ["ΔV = βVΔT", "ΔV = αVΔT", "ΔV = V/βΔT", "ΔV = βV/ΔT"], correctIndex: 0, explanation: "ΔV = βVΔT with β ≈ 3α." },
        { prompt: "A rise of 10 °C is the same as a rise of:", options: ["10 K", "283 K", "18 K", "0 K"], correctIndex: 0, explanation: "A change of 10 °C equals a change of 10 K." },
        { prompt: "Which is the main reason substances expand on heating?", options: ["particles gain charge", "particles vibrate more and move apart", "mass increases", "gravity decreases"], correctIndex: 1, explanation: "Greater particle vibration increases the average spacing." },
        { prompt: "A 1275 m steel span heated by 55 °C (α=12×10⁻⁶) expands by about:", options: ["0.084 m", "0.84 m", "8.4 m", "84 m"], correctIndex: 1, explanation: "ΔL = 12×10⁻⁶ × 1275 × 55 ≈ 0.84 m." },
        { prompt: "On cooling, most substances:", options: ["expand", "contract", "stay the same", "melt"], correctIndex: 1, explanation: "Cooling reduces vibration and the body contracts." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "An aluminium rod 3 m long (α = 24×10⁻⁶/°C) is heated by 40 °C. Its increase in length is:", options: ["2.9 mm", "0.29 mm", "29 mm", "0.029 mm"], correctIndex: 0, answerKey: "ΔL = 24×10⁻⁶ × 3 × 40 = 2.88×10⁻³ m ≈ 2.9 mm.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the linear expansion formula and define each symbol.", answerKey: "ΔL = αLΔT: ΔL change in length, α coefficient of linear expansion (per °C), L original length, ΔT temperature change.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Give two everyday examples where thermal expansion must be allowed for in engineering.", answerKey: "Any two: expansion gaps/joints in bridges, railway lines, roads or pipes; sagging of power cables in hot weather; gaps between concrete slabs; bimetallic strips in thermostats; rollers under bridge ends.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "For a solid, the coefficient of volume expansion is about:", options: ["equal to α", "twice α", "three times α", "half α"], correctIndex: 2, answerKey: "β ≈ 3α for a solid.", marks: 2 },
        { type: "ESSAY", prompt: "Explain, in terms of particles, why solids expand when heated, and describe how linear, area and volume expansion are related, giving one practical consequence of expansion.", answerKey: "Heating increases particle kinetic energy so they vibrate more strongly and their average separation increases, enlarging the solid. Linear: ΔL = αLΔT. Area: ΔA = 2αAΔT. Volume: ΔV = 3αVΔT (β ≈ 3α); each higher dimension multiplies the coefficient. Practical consequence: expansion gaps in bridges/rails prevent buckling (or any valid example). Reward particle explanation, the α:2α:3α relationship, and a practical case.", marks: 8 },
      ],
    },
    // source: OpenStax — Chemistry 2e, 9.2 Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law (https://openstax.org/books/chemistry-2e/pages/9-2-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law)
    {
      slug: "gas-laws",
      title: "The Gas Laws: Boyle's, Charles's, Pressure and Combined",
      objective:
        "By the end of the topic, learners should be able to state and apply Boyle's law, Charles's law, the pressure (Gay-Lussac) law and the combined gas law, using absolute temperature. (MoE Grade 10 Period IV, CONTENTS 'Charles, Boyle's, Combined gas and Pressure Laws'.)",
      estimatedMinutes: 110,
      notes: `## Boyle's law (pressure and volume)

- **Boyle's law** — at constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure.
- P ∝ 1/V, so **PV = constant**, hence **P₁V₁ = P₂V₂**.
- Squeeze a gas into half the volume → its pressure doubles.

## Charles's law (volume and temperature)

- **Charles's law** — at constant pressure, the volume of a fixed mass of gas is directly proportional to its absolute (kelvin) temperature.
- V ∝ T, so **V/T = constant**, hence **V₁/T₁ = V₂/T₂**.
- Heating a gas at constant pressure makes it expand.

## The pressure law (Gay-Lussac's law)

- **Pressure law** — at constant volume, the pressure of a fixed mass of gas is directly proportional to its absolute temperature.
- P ∝ T, so **P/T = constant**, hence **P₁/T₁ = P₂/T₂**.
- Heating a gas in a sealed rigid container raises its pressure.

## The combined gas law

- Combining the three laws for a fixed mass of gas:
- **P₁V₁/T₁ = P₂V₂/T₂**.

## Important rule

- **Temperature must always be in kelvin (K)** in gas-law calculations. Convert: T(K) = T(°C) + 273.
- Pressure and volume may be in any consistent units, as long as both sides match.

| Law | Constant | Relationship |
| --- | --- | --- |
| Boyle's | temperature | P₁V₁ = P₂V₂ |
| Charles's | pressure | V₁/T₁ = V₂/T₂ |
| Pressure (Gay-Lussac) | volume | P₁/T₁ = P₂/T₂ |
| Combined | mass of gas | P₁V₁/T₁ = P₂V₂/T₂ |

## Common errors

- **Using °C instead of K** — always convert to kelvin first.
- **Inverting Boyle's law** — pressure and volume are inversely related.
- **Mismatched units** — keep pressure units the same on both sides, and volume units the same.`,
      workedExample: `**Problem (Charles's law; OpenStax Chemistry 2e, 9.2).** A sample of carbon dioxide occupies 0.300 L at 10 °C and constant pressure. What volume will it occupy at 30 °C?

**Step 1 — Convert to kelvin.** T₁ = 10 + 273 = 283 K; T₂ = 30 + 273 = 303 K.

**Step 2 — Choose the law.** Pressure constant, so use Charles's law: V₁/T₁ = V₂/T₂.

**Step 3 — Rearrange.** V₂ = V₁ × (T₂/T₁).

**Step 4 — Substitute.** V₂ = 0.300 × (303 / 283).

**Step 5 — Evaluate.** V₂ = 0.300 × 1.071 = 0.321 L.

**Answer.** The gas expands to 0.321 L. Note that using °C (10 and 30) would have given the wrong answer — the temperature must be in kelvin.`,
      quiz: [
        { prompt: "Boyle's law relates pressure and volume at constant:", options: ["temperature", "pressure", "mass only", "volume"], correctIndex: 0, explanation: "Boyle's law holds at constant temperature (and mass)." },
        { prompt: "Boyle's law states P and V are:", options: ["directly proportional", "inversely proportional", "equal", "unrelated"], correctIndex: 1, explanation: "P ∝ 1/V at constant temperature." },
        { prompt: "Boyle's law can be written as:", options: ["P₁V₁ = P₂V₂", "V₁/T₁ = V₂/T₂", "P₁/T₁ = P₂/T₂", "P₁T₁ = P₂T₂"], correctIndex: 0, explanation: "PV = constant gives P₁V₁ = P₂V₂." },
        { prompt: "Charles's law relates volume and temperature at constant:", options: ["temperature", "pressure", "volume", "mass and pressure removed"], correctIndex: 1, explanation: "Charles's law holds at constant pressure." },
        { prompt: "Charles's law states V and T (in kelvin) are:", options: ["inversely proportional", "directly proportional", "unrelated", "equal"], correctIndex: 1, explanation: "V ∝ T at constant pressure." },
        { prompt: "In all gas-law calculations, temperature must be in:", options: ["Celsius", "Fahrenheit", "kelvin", "any scale"], correctIndex: 2, explanation: "Absolute (kelvin) temperature is required." },
        { prompt: "The pressure law (Gay-Lussac) holds at constant:", options: ["temperature", "pressure", "volume", "density"], correctIndex: 2, explanation: "At constant volume, P ∝ T." },
        { prompt: "A gas at 200 kPa is compressed to half its volume at constant T. Its pressure becomes:", options: ["100 kPa", "400 kPa", "200 kPa", "50 kPa"], correctIndex: 1, explanation: "Boyle's law: halving V doubles P to 400 kPa." },
        { prompt: "The combined gas law is:", options: ["P₁V₁/T₁ = P₂V₂/T₂", "P₁V₁ = P₂V₂", "V₁/T₁ = V₂/T₂", "P₁/T₁ = P₂/T₂"], correctIndex: 0, explanation: "The combined law merges the three individual laws." },
        { prompt: "10 °C in kelvin (for a gas law) is:", options: ["283 K", "263 K", "10 K", "293 K"], correctIndex: 0, explanation: "10 + 273 = 283 K." },
        { prompt: "Heating a gas in a sealed rigid can raises its:", options: ["volume", "pressure", "mass", "colour"], correctIndex: 1, explanation: "Constant volume: P ∝ T, so pressure rises (pressure law)." },
        { prompt: "A gas at 300 K and 2 L is heated to 600 K at constant pressure. New volume:", options: ["1 L", "2 L", "4 L", "8 L"], correctIndex: 2, explanation: "Charles's law: V₂ = 2 × 600/300 = 4 L." },
        { prompt: "Which law explains a balloon shrinking when placed in a freezer?", options: ["Boyle's law", "Charles's law", "Ohm's law", "Hooke's law"], correctIndex: 1, explanation: "At constant pressure, cooling reduces volume (Charles's law)." },
        { prompt: "For Boyle's law to apply, which must stay constant?", options: ["temperature and mass", "pressure", "volume", "density"], correctIndex: 0, explanation: "Boyle's law needs fixed temperature and mass of gas." },
        { prompt: "A gas at 100 kPa and 3 L expands to 6 L at constant T. New pressure:", options: ["50 kPa", "200 kPa", "100 kPa", "300 kPa"], correctIndex: 0, explanation: "P₁V₁ = P₂V₂: 100×3 = P₂×6, P₂ = 50 kPa." },
        { prompt: "In V₁/T₁ = V₂/T₂, doubling T (kelvin) at constant P:", options: ["halves V", "doubles V", "leaves V unchanged", "cubes V"], correctIndex: 1, explanation: "V ∝ T, so doubling T doubles V." },
        { prompt: "The pressure law is written as:", options: ["P₁/T₁ = P₂/T₂", "P₁V₁ = P₂V₂", "V₁/T₁ = V₂/T₂", "P₁T₁ = P₂T₂"], correctIndex: 0, explanation: "At constant volume, P/T = constant." },
        { prompt: "Using °C instead of K in a gas law gives:", options: ["the correct answer", "a wrong answer", "no change", "kelvin automatically"], correctIndex: 1, explanation: "Only absolute temperature is proportional to V and P." },
        { prompt: "A CO₂ sample of 0.300 L at 283 K warms to 303 K at constant P. Its new volume is about:", options: ["0.28 L", "0.321 L", "0.300 L", "0.35 L"], correctIndex: 1, explanation: "V₂ = 0.300 × 303/283 = 0.321 L." },
        { prompt: "Which quantity is held constant in Charles's law?", options: ["volume", "pressure", "temperature", "density"], correctIndex: 1, explanation: "Charles's law is at constant pressure." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State Boyle's law and Charles's law, giving the condition held constant in each.", answerKey: "Boyle's law: at constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure (P₁V₁ = P₂V₂). Charles's law: at constant pressure, the volume of a fixed mass of gas is directly proportional to its absolute (kelvin) temperature (V₁/T₁ = V₂/T₂).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A gas at 400 kPa and 2 L is compressed to 1 L at constant temperature. Its new pressure is:", options: ["200 kPa", "400 kPa", "800 kPa", "100 kPa"], correctIndex: 2, answerKey: "Boyle's law: P₂ = P₁V₁/V₂ = 400×2/1 = 800 kPa.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "A gas occupies 250 cm³ at 27 °C. Find its volume at 127 °C at constant pressure.", answerKey: "Convert: T₁ = 300 K, T₂ = 400 K. Charles's law: V₂ = 250 × 400/300 = 333 cm³ (approx 333.3 cm³).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The combined gas law is written as:", options: ["P₁V₁ = P₂V₂", "V₁/T₁ = V₂/T₂", "P₁V₁/T₁ = P₂V₂/T₂", "P₁/T₁ = P₂/T₂"], correctIndex: 2, answerKey: "P₁V₁/T₁ = P₂V₂/T₂ combines the three gas laws.", marks: 2 },
        { type: "ESSAY", prompt: "State the three simple gas laws and the combined gas law, and explain why temperature must be expressed in kelvin in every gas-law calculation.", answerKey: "Boyle's: PV = constant at constant T. Charles's: V/T = constant at constant P. Pressure law: P/T = constant at constant V. Combined: P₁V₁/T₁ = P₂V₂/T₂. Kelvin is required because volume and pressure are directly proportional to absolute temperature, which is zero at absolute zero (0 K); the Celsius scale has an arbitrary zero, so ratios in °C are not proportional (e.g. doubling from 10 °C to 20 °C does not double the volume, but 283 K to 566 K does). Reward all four laws and a correct explanation of the kelvin requirement.", marks: 8 },
      ],
    },
  ],
};
