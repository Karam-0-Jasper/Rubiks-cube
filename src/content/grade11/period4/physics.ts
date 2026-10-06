import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 11,
// Semester Two, Period IV: Heat. Topics follow the syllabus CONTENTS item by
// item: heat, specific heat and specific heat capacity, heat transfer and the
// laws of heat exchange, and latent heat of fusion and vaporization. Every
// topic is sourced from OpenStax College Physics 2e (read via WebFetch).
export const physicsG11P4: PeriodContent = {
  grade: 11,
  number: 4,
  title: "Heat",
  summary:
    "Period IV of the MoE Grade 11 Physics syllabus. Learners define heat as energy transferred by a temperature difference, calculate temperature change with Q = mcΔT and specific heat capacity, describe conduction, convection and radiation and apply the law of heat exchange (calorimetry), and compute latent heat of fusion and vaporization with Q = mL.",
  topics: [
    // source: OpenStax — College Physics 2e, 14.1 Heat (https://openstax.org/books/college-physics-2e/pages/14-1-heat)
    {
      slug: "heat",
      title: "Heat",
      objective:
        "By the end of the topic, learners should be able to define heat as energy transferred because of a temperature difference, distinguish heat from temperature, and state its units. (MoE Grade 11 Period IV, CONTENTS 1 'Heat'.)",
      estimatedMinutes: 100,
      notes: `## What heat is

- **Heat (Q)** — energy transferred spontaneously from a hotter body to a colder one because of the temperature difference between them.
- The transfer continues until the bodies reach the **same temperature** (thermal equilibrium), then stops.
- Heat is **energy in transit**; a body does not "contain heat", it contains internal energy.

## Heat versus temperature

- **Temperature** — a measure of the average kinetic energy of the particles; it decides the direction of heat flow.
- **Heat** — the energy that flows because of a temperature difference.
- A large cool object can transfer more heat than a small hot one, even though it is at a lower temperature.

## Units of heat

- SI unit: the **joule (J)** — heat is a form of energy.
- **calorie (cal)** — the energy needed to raise 1.00 g of water by 1.00°C.
- **kilocalorie (kcal or food Calorie)** — the energy to raise 1.00 kg of water by 1.00°C.

## Mechanical equivalent of heat

- Joule showed that mechanical work and heat produce the same effect (raising temperature).
- **1.000 kcal = 4186 J.**
- Friction and stirring can raise temperature just as heating does — work can be converted to heat.

## Common errors

- **Saying a body 'contains heat'** — it contains internal energy; heat is energy in transfer.
- **Confusing heat and temperature** — temperature sets the direction of flow; heat is the energy that flows.
- **Using the wrong unit** — heat is energy, measured in joules (or calories).`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 14.1).** A machinist does 8372 J of mechanical work stirring an insulated container of water, and all of it becomes heat in the water. Express this energy in kilocalories.

**Step 1 — Recall the conversion.** 1.000 kcal = 4186 J.

**Step 2 — Convert.** number of kcal = 8372 J ÷ 4186 J/kcal.

**Step 3 — Evaluate.** 8372 / 4186 = 2.000 kcal.

**Answer.** The 8372 J of work is equivalent to 2.000 kcal of heat, illustrating the mechanical equivalent of heat: work done on the water warms it exactly as adding heat would.`,
      quiz: [
        { prompt: "Heat is energy transferred because of a difference in:", options: ["mass", "temperature", "colour", "volume"], correctIndex: 1, explanation: "Heat flows due to a temperature difference." },
        { prompt: "Heat flows spontaneously from:", options: ["cold to hot", "hot to cold", "large to small", "light to heavy"], correctIndex: 1, explanation: "Heat flows from the hotter body to the colder one." },
        { prompt: "Heat transfer between two bodies stops when they reach:", options: ["zero temperature", "the same temperature (thermal equilibrium)", "maximum temperature", "different masses"], correctIndex: 1, explanation: "At thermal equilibrium the temperatures are equal and net heat flow ceases." },
        { prompt: "The SI unit of heat is the:", options: ["newton", "joule", "kelvin", "watt"], correctIndex: 1, explanation: "Heat is energy, measured in joules." },
        { prompt: "Temperature is a measure of the average ____ of particles:", options: ["mass", "kinetic energy", "charge", "size"], correctIndex: 1, explanation: "Temperature reflects the average kinetic energy of the particles." },
        { prompt: "A calorie is the energy to raise 1 g of water by:", options: ["1°C", "10°C", "100°C", "1 K only above 100°C"], correctIndex: 0, explanation: "1 cal raises 1.00 g of water by 1.00°C." },
        { prompt: "The mechanical equivalent of heat is:", options: ["1 kcal = 4186 J", "1 J = 4186 kcal", "1 kcal = 100 J", "1 cal = 4186 J"], correctIndex: 0, explanation: "1.000 kcal = 4186 J." },
        { prompt: "Which statement is correct?", options: ["A body contains heat", "Heat is energy in transit", "Heat and temperature are the same", "Heat is measured in kelvin"], correctIndex: 1, explanation: "Heat is energy being transferred, not stored." },
        { prompt: "Rubbing your hands together warms them because:", options: ["temperature is a force", "work (friction) is converted to heat", "heat is created from nothing", "mass increases"], correctIndex: 1, explanation: "Mechanical work becomes heat, raising temperature." },
        { prompt: "A food 'Calorie' is actually a:", options: ["calorie", "kilocalorie", "joule", "kelvin"], correctIndex: 1, explanation: "The dietary Calorie is a kilocalorie (1000 cal)." },
        { prompt: "Which decides the direction of heat flow?", options: ["mass", "temperature difference", "colour", "volume"], correctIndex: 1, explanation: "Heat flows from higher to lower temperature." },
        { prompt: "5000 J of heat is about how many kcal?", options: ["1.19 kcal", "11.9 kcal", "0.12 kcal", "21 kcal"], correctIndex: 0, explanation: "5000/4186 = 1.19 kcal." },
        { prompt: "A hot cup of tea cools down because heat flows to the:", options: ["cup only", "cooler surroundings", "hotter air", "Sun"], correctIndex: 1, explanation: "Heat leaves the hot tea to the cooler room." },
        { prompt: "Two objects in thermal equilibrium have the same:", options: ["mass", "temperature", "colour", "heat content"], correctIndex: 1, explanation: "Thermal equilibrium means equal temperatures." },
        { prompt: "1 kcal raises the temperature of 1 kg of water by:", options: ["1°C", "4186°C", "100°C", "0.001°C"], correctIndex: 0, explanation: "By definition, 1 kcal raises 1 kg of water by 1°C." },
        { prompt: "Which is NOT a unit of heat?", options: ["joule", "calorie", "kilocalorie", "kelvin"], correctIndex: 3, explanation: "Kelvin is a unit of temperature, not heat." },
        { prompt: "Internal energy of a body increases when it:", options: ["loses heat", "absorbs heat", "cools", "does work on itself"], correctIndex: 1, explanation: "Absorbing heat raises internal energy." },
        { prompt: "Joule's experiments established that heat is a form of:", options: ["mass", "energy", "force", "charge"], correctIndex: 1, explanation: "Heat is a form of energy, interchangeable with work." },
        { prompt: "A large lukewarm lake can deliver more heat than a small hot coal because heat depends on:", options: ["temperature only", "mass and temperature change, not temperature alone", "colour", "shape"], correctIndex: 1, explanation: "Total heat depends on mass and temperature change, not just temperature." },
        { prompt: "When work is done against friction, it typically becomes:", options: ["light", "heat", "sound only", "mass"], correctIndex: 1, explanation: "Frictional work is converted into heat." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Heat always flows from a region of:", options: ["low to high temperature", "high to low temperature", "large to small mass", "dark to light colour"], correctIndex: 1, answerKey: "Heat flows spontaneously from higher to lower temperature.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between heat and temperature.", answerKey: "Temperature is a measure of the average kinetic energy of a body's particles and determines the direction of heat flow. Heat is the energy transferred from a hotter to a colder body because of their temperature difference. Temperature is measured in kelvin/°C; heat in joules.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Convert 12558 J of heat into kilocalories.", answerKey: "1 kcal = 4186 J, so 12558/4186 = 3.00 kcal.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The SI unit of heat is the:", options: ["kelvin", "joule", "newton", "pascal"], correctIndex: 1, answerKey: "Heat is energy, measured in joules.", marks: 2 },
        { type: "ESSAY", prompt: "Explain what is meant by the mechanical equivalent of heat and describe how Joule's experiment showed that heat is a form of energy.", answerKey: "The mechanical equivalent of heat is the fixed relationship between mechanical work and heat: 1.000 kcal = 4186 J. Joule allowed falling weights to turn paddle wheels that stirred insulated water; the measured mechanical work done matched the heat gained by the water (from its temperature rise). This showed that doing work on a substance raises its temperature exactly as adding heat does, proving heat is a form of energy that can be converted to and from mechanical work. Reward the definition and a correct description of work being converted to heat.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 14.2 Temperature Change and Heat Capacity (https://openstax.org/books/college-physics-2e/pages/14-2-temperature-change-and-heat-capacity)
    {
      slug: "specific-heat-capacity",
      title: "Specific Heat and Specific Heat Capacity",
      objective:
        "By the end of the topic, learners should be able to define specific heat capacity, use Q = mcΔT to calculate heat, temperature change or mass, and explain why substances differ in specific heat. (MoE Grade 11 Period IV, CONTENTS 2 'Specific heat and specific capacity'.)",
      estimatedMinutes: 100,
      notes: `## Heat and temperature change

- The heat needed to change a body's temperature depends on its **mass**, the **temperature change**, and the **material**.
- **Q = m c ΔT**
- **Q** — heat transferred (J); **m** — mass (kg); **c** — specific heat capacity; **ΔT** — temperature change (°C or K).

## Specific heat capacity

- **Specific heat capacity (c)** — the heat required to raise the temperature of **1 kg** of a substance by **1°C** (or 1 K).
- SI unit: **J/(kg·°C)** (equal to J/(kg·K)).
- It depends on the material and its state.

## Comparing materials

| Substance | Specific heat c (J/kg·°C) |
| --- | --- |
| Water | 4186 |
| Aluminium | 900 |
| Iron / steel | 450 |
| Copper | 387 |

- Water has an unusually **high** specific heat — it heats up and cools down slowly, which moderates climate and makes it a good coolant.
- Metals have low specific heats — they heat up quickly.

## Using the equation

1. Identify m, c and ΔT (or the unknown).
2. Substitute into Q = mcΔT.
3. Rearrange if solving for ΔT (= Q/mc) or c (= Q/mΔT).

## Common errors

- **Forgetting to include every material** — a pan and the water in it each need Q = mcΔT.
- **Using grams instead of kilograms** — SI c is per kilogram.
- **Confusing ΔT with T** — use the temperature change, not the final temperature.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 14.2).** A 0.500 kg aluminium pan holding 0.250 kg of water is heated from 20.0°C to 80.0°C. How much heat is required in total? (c_water = 4186 J/kg·°C, c_aluminium = 900 J/kg·°C.)

**Step 1 — Temperature change.** ΔT = 80.0 − 20.0 = 60.0°C (same for pan and water).

**Step 2 — Heat for the water.** Q_water = m c ΔT = 0.250 × 4186 × 60.0 = 62 790 J ≈ 62.8 kJ.

**Step 3 — Heat for the aluminium pan.** Q_Al = 0.500 × 900 × 60.0 = 27 000 J = 27.0 kJ.

**Step 4 — Total heat.** Q = 62.8 + 27.0 = 89.8 kJ.

**Answer.** About 89.8 kJ of heat is required. Note that although the pan is heavier, the water absorbs more heat because its specific heat is far larger.`,
      quiz: [
        { prompt: "The equation for heat to change temperature is:", options: ["Q = mL", "Q = mcΔT", "Q = mv", "Q = mgh"], correctIndex: 1, explanation: "Q = mcΔT for a temperature change with no phase change." },
        { prompt: "Specific heat capacity is the heat to raise ___ of a substance by 1°C:", options: ["1 g", "1 kg", "1 litre", "1 mole"], correctIndex: 1, explanation: "SI specific heat is per kilogram." },
        { prompt: "The SI unit of specific heat capacity is:", options: ["J", "J/(kg·°C)", "J·kg·°C", "kg/J"], correctIndex: 1, explanation: "c is measured in J/(kg·°C)." },
        { prompt: "In Q = mcΔT, ΔT is the:", options: ["final temperature", "temperature change", "average temperature", "absolute zero"], correctIndex: 1, explanation: "ΔT is the change in temperature." },
        { prompt: "Water's specific heat is about:", options: ["4186 J/kg·°C", "900 J/kg·°C", "450 J/kg·°C", "1 J/kg·°C"], correctIndex: 0, explanation: "Water has a high specific heat, 4186 J/kg·°C." },
        { prompt: "A high specific heat means a substance:", options: ["heats up quickly", "heats up slowly for a given heat", "has no mass", "cannot store heat"], correctIndex: 1, explanation: "More heat is needed per degree, so it warms slowly." },
        { prompt: "Heat to warm 2 kg of water by 10°C (c = 4186):", options: ["8372 J", "83 720 J", "4186 J", "20 930 J"], correctIndex: 1, explanation: "Q = 2 × 4186 × 10 = 83 720 J." },
        { prompt: "To find ΔT from Q, use:", options: ["ΔT = Qmc", "ΔT = Q/(mc)", "ΔT = mc/Q", "ΔT = Q + mc"], correctIndex: 1, explanation: "Rearranging Q = mcΔT gives ΔT = Q/(mc)." },
        { prompt: "Which heats up fastest for the same heat and mass?", options: ["water", "iron (low c)", "they are equal", "cannot tell"], correctIndex: 1, explanation: "A low specific heat means a larger temperature rise per joule." },
        { prompt: "Water is used as a coolant in engines because it:", options: ["has a low specific heat", "can absorb a lot of heat per degree", "does not conduct heat", "boils easily"], correctIndex: 1, explanation: "Its high specific heat lets it carry away much heat with a small temperature rise." },
        { prompt: "The heat to raise 0.5 kg of aluminium (c = 900) by 20°C is:", options: ["9000 J", "18 000 J", "900 J", "45 J"], correctIndex: 0, explanation: "Q = 0.5 × 900 × 20 = 9000 J." },
        { prompt: "Specific heat depends on the:", options: ["shape only", "material and its state", "colour", "surface area"], correctIndex: 1, explanation: "It is a property of the material and its physical state." },
        { prompt: "If mass doubles (same c and ΔT), the heat needed:", options: ["halves", "doubles", "is unchanged", "quadruples"], correctIndex: 1, explanation: "Q ∝ m, so doubling mass doubles the heat." },
        { prompt: "The heat needed to warm a substance is directly proportional to:", options: ["ΔT", "1/ΔT", "ΔT²", "√ΔT"], correctIndex: 0, explanation: "Q ∝ ΔT in Q = mcΔT." },
        { prompt: "Coastal areas have milder climates than inland areas partly because water:", options: ["has low specific heat", "has high specific heat and stores heat", "does not absorb heat", "reflects all heat"], correctIndex: 1, explanation: "The sea's high specific heat moderates temperature changes." },
        { prompt: "How much heat raises 1 kg of iron (c = 450) by 30°C?", options: ["13 500 J", "1350 J", "450 J", "15 J"], correctIndex: 0, explanation: "Q = 1 × 450 × 30 = 13 500 J." },
        { prompt: "To find c from measurements, use:", options: ["c = QmΔT", "c = Q/(mΔT)", "c = mΔT/Q", "c = Q + mΔT"], correctIndex: 1, explanation: "c = Q/(mΔT)." },
        { prompt: "A pan and the water in it are both heated. To find total heat you:", options: ["use water only", "add mcΔT for each material", "use the pan only", "ignore ΔT"], correctIndex: 1, explanation: "Each material contributes its own Q = mcΔT." },
        { prompt: "10 000 J heats 0.5 kg of a metal by 40°C. Its specific heat is:", options: ["500 J/kg·°C", "200 J/kg·°C", "800 J/kg·°C", "50 J/kg·°C"], correctIndex: 0, explanation: "c = Q/(mΔT) = 10000/(0.5×40) = 10000/20 = 500 J/kg·°C." },
        { prompt: "Metals feel cold to touch quickly because they have:", options: ["high specific heat", "low specific heat and conduct heat away", "no temperature", "large mass"], correctIndex: 1, explanation: "Low specific heat and good conduction change temperature rapidly." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "How much heat is needed to raise 3 kg of water by 5°C? (c = 4186 J/kg·°C)", options: ["62 790 J", "12 558 J", "20 930 J", "4186 J"], correctIndex: 0, answerKey: "Q = mcΔT = 3 × 4186 × 5 = 62 790 J.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define specific heat capacity and give its SI unit.", answerKey: "Specific heat capacity is the quantity of heat needed to raise the temperature of 1 kg of a substance by 1°C (or 1 K). SI unit: J/(kg·°C) or J/(kg·K).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A 2.0 kg block of copper (c = 387 J/kg·°C) is heated from 25°C to 75°C. Calculate the heat absorbed.", answerKey: "ΔT = 75 − 25 = 50°C. Q = mcΔT = 2.0 × 387 × 50 = 38 700 J.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Water is a good engine coolant mainly because it has a:", options: ["low specific heat", "high specific heat", "low boiling point", "dark colour"], correctIndex: 1, answerKey: "Its high specific heat lets it absorb much heat with a small temperature rise.", marks: 2 },
        { type: "ESSAY", prompt: "Using the equation Q = mcΔT, explain why the sea warms up and cools down more slowly than the land, and how this affects coastal climates.", answerKey: "For a given heat Q, the temperature change ΔT = Q/(mc). Water has a very high specific heat capacity (about 4186 J/kg·°C) compared with soil and rock, so for the same absorbed heat per kilogram its temperature rise is much smaller; it also releases heat slowly as it cools. Therefore the sea heats and cools more slowly than land. Near coasts this large thermal store moderates temperatures — cooler summers and milder winters (smaller daily and seasonal temperature swings) than inland areas. Reward correct use of Q = mcΔT and the climate explanation.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 14.5 Conduction, 14.6 Convection & 14.7 Radiation (https://openstax.org/books/college-physics-2e/pages/14-5-conduction)
    {
      slug: "heat-transfer-and-heat-exchange",
      title: "Heat Transfer and the Laws of Heat Exchange",
      objective:
        "By the end of the topic, learners should be able to describe conduction, convection and radiation, give examples of each, and apply the law of heat exchange (heat lost = heat gained) in calorimetry. (MoE Grade 11 Period IV, CONTENTS 3 'Heat transfer and the laws of heat exchange'.)",
      estimatedMinutes: 100,
      notes: `## Three methods of heat transfer

- **Conduction** — heat transfer through a material by particle collisions, without the material itself moving; mainly in **solids** (especially metals).
- **Convection** — heat transfer by the bulk movement of a **fluid** (liquid or gas); hot fluid rises, cool fluid sinks, forming convection currents.
- **Radiation** — heat transfer by **electromagnetic waves**; needs **no medium** and travels through a vacuum.

## Conduction

- Particles at the hot end vibrate more and pass energy on by collisions.
- Rate depends on the temperature difference, area, thickness and the material's thermal conductivity.
- **Good conductors:** metals. **Poor conductors (insulators):** air, wood, plastic, wool.

## Convection

- Heating a fluid lowers its density, so it rises; cooler fluid sinks to replace it — a **convection current**.
- **Natural convection:** boiling water, sea and land breezes, hot air rising from a radiator.
- **Forced convection:** a pump or fan drives the fluid (car radiator, fan heater).

## Radiation

- All bodies emit and absorb electromagnetic (mainly infrared) radiation.
- Reaches us from the Sun across empty space; also felt from a fire.
- **Dull black** surfaces are the best emitters and absorbers; **shiny white/silver** surfaces are the poorest (best reflectors).

## The law of heat exchange (calorimetry)

- In an isolated system, **heat lost by the hot body = heat gained by the cold body**.
- No heat is created or destroyed; energy is conserved.
- Used in a **calorimeter** to measure specific and latent heats: m₁c₁(T_hot − T) = m₂c₂(T − T_cold).

\`\`\`svg Conduction, convection and radiation
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three panels showing conduction along a bar, convection currents in a fluid, and radiation from a source">
  <rect x="15" y="55" width="70" height="12" fill="#cbd5e1" stroke="#475569"/>
  <circle cx="20" cy="61" r="4" fill="#dc2626"/>
  <text x="20" y="90" font-size="10" fill="#334155">conduction</text>
  <path d="M140 80 q 10 -30 20 0 q 10 -30 20 0" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="132" y="100" font-size="10" fill="#334155">convection</text>
  <circle cx="270" cy="55" r="10" fill="#f59e0b"/>
  <line x1="270" y1="55" x2="300" y2="35" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="270" y1="55" x2="300" y2="75" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="270" y1="55" x2="245" y2="30" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="250" y="100" font-size="10" fill="#334155">radiation</text>
</svg>
\`\`\`

## Common errors

- **Thinking radiation needs a medium** — it travels through a vacuum.
- **Confusing conduction and convection** — conduction has no bulk movement; convection is fluid flow.
- **Ignoring energy conservation** — in heat exchange, heat lost equals heat gained.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 14.2 / 14.5, law of heat exchange).** A 0.20 kg iron block at 100°C (c = 450 J/kg·°C) is dropped into 0.50 kg of water at 20°C (c = 4186 J/kg·°C) in an insulated cup. Find the final temperature, assuming no heat is lost to the cup or surroundings.

**Step 1 — Apply the law of heat exchange.** Heat lost by iron = heat gained by water: m_Fe c_Fe (100 − T) = m_w c_w (T − 20).

**Step 2 — Substitute.** 0.20 × 450 × (100 − T) = 0.50 × 4186 × (T − 20).

**Step 3 — Simplify coefficients.** 90(100 − T) = 2093(T − 20), so 9000 − 90T = 2093T − 41 860.

**Step 4 — Collect terms.** 9000 + 41 860 = 2093T + 90T, giving 50 860 = 2183T.

**Step 5 — Solve.** T = 50 860 / 2183 = 23.3°C.

**Answer.** The final temperature is about 23.3°C. The water's large mass and high specific heat mean its temperature rises only a few degrees while the iron cools a great deal.`,
      quiz: [
        { prompt: "Conduction transfers heat mainly through:", options: ["moving fluids", "solids by particle collisions", "electromagnetic waves", "a vacuum"], correctIndex: 1, explanation: "Conduction is particle-to-particle transfer, chiefly in solids." },
        { prompt: "Convection is heat transfer by:", options: ["particle collisions only", "the bulk movement of a fluid", "light waves", "friction"], correctIndex: 1, explanation: "Convection involves the movement of a heated fluid." },
        { prompt: "Radiation transfers heat by:", options: ["fluid movement", "particle collisions", "electromagnetic waves", "conduction"], correctIndex: 2, explanation: "Radiation uses electromagnetic waves." },
        { prompt: "Which method needs no medium?", options: ["conduction", "convection", "radiation", "all need a medium"], correctIndex: 2, explanation: "Radiation travels through a vacuum." },
        { prompt: "Heat from the Sun reaches Earth mainly by:", options: ["conduction", "convection", "radiation", "combustion"], correctIndex: 2, explanation: "Across empty space, only radiation transfers heat." },
        { prompt: "Metals are good conductors because they have:", options: ["trapped air", "free electrons", "low density", "shiny colour"], correctIndex: 1, explanation: "Free electrons carry energy quickly through metals." },
        { prompt: "In convection, hot fluid rises because it becomes:", options: ["denser", "less dense", "solid", "colder"], correctIndex: 1, explanation: "Heating reduces density, so hot fluid rises." },
        { prompt: "The best surface for emitting and absorbing radiation is:", options: ["shiny white", "dull black", "polished silver", "transparent"], correctIndex: 1, explanation: "Dull black surfaces are the best emitters and absorbers." },
        { prompt: "The law of heat exchange states heat lost by the hot body equals:", options: ["heat gained by the cold body", "zero", "the temperature", "the mass"], correctIndex: 0, explanation: "Energy conservation: heat lost = heat gained." },
        { prompt: "A vacuum flask reduces conduction and convection by using a:", options: ["black coating", "vacuum between walls", "large surface", "metal lid"], correctIndex: 1, explanation: "The vacuum stops conduction and convection across the gap." },
        { prompt: "Sea breezes are an example of:", options: ["conduction", "convection", "radiation", "latent heat"], correctIndex: 1, explanation: "Convection currents form as air is heated over land and sea." },
        { prompt: "A poor conductor of heat is called a(n):", options: ["conductor", "insulator", "radiator", "convector"], correctIndex: 1, explanation: "Insulators (wood, air, wool) conduct heat poorly." },
        { prompt: "A shiny silver surface is a good:", options: ["absorber of radiation", "reflector/poor emitter of radiation", "conductor of sound", "convection source"], correctIndex: 1, explanation: "Shiny surfaces reflect radiation and emit poorly." },
        { prompt: "Wearing white clothes in hot weather helps because white:", options: ["absorbs radiation well", "reflects radiation", "conducts heat", "convects heat"], correctIndex: 1, explanation: "White reflects radiation, keeping the wearer cooler." },
        { prompt: "In a calorimeter, we assume no heat is lost to the:", options: ["hot body", "cold body", "surroundings", "thermometer only"], correctIndex: 2, explanation: "Ideal calorimetry assumes an isolated system." },
        { prompt: "Forced convection differs from natural convection because it uses a:", options: ["temperature difference", "pump or fan", "vacuum", "black surface"], correctIndex: 1, explanation: "Forced convection is driven by a fan or pump." },
        { prompt: "Holding a metal spoon in hot soup, the handle warms by:", options: ["radiation", "convection", "conduction", "evaporation"], correctIndex: 2, explanation: "Heat conducts along the solid spoon." },
        { prompt: "A body cools by radiation fastest if its surface is:", options: ["shiny and light", "dull and black", "transparent", "wet"], correctIndex: 1, explanation: "Dull black surfaces radiate heat most effectively." },
        { prompt: "In heat exchange, energy is:", options: ["created", "destroyed", "conserved", "converted to mass"], correctIndex: 2, explanation: "Energy is conserved: heat lost equals heat gained." },
        { prompt: "Which cannot occur in a vacuum?", options: ["radiation", "conduction and convection", "light travel", "emission of infrared"], correctIndex: 1, explanation: "Conduction and convection need matter; radiation does not." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Which method of heat transfer can occur through a vacuum?", options: ["conduction", "convection", "radiation", "none"], correctIndex: 2, answerKey: "Radiation uses electromagnetic waves and needs no medium.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Name the three methods of heat transfer and give one everyday example of each.", answerKey: "Conduction — a metal spoon heating in hot soup. Convection — boiling water or sea breezes. Radiation — heat from the Sun or a fire. Accept any correct examples.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State the law of heat exchange and explain the assumption it relies on.", answerKey: "In an isolated system, the heat lost by the hotter body equals the heat gained by the colder body (energy is conserved). It assumes no heat is lost to or gained from the surroundings (a perfectly insulated system/calorimeter).", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "A vacuum flask keeps drinks hot mainly by preventing:", options: ["radiation only", "conduction and convection across the vacuum", "the law of heat exchange", "temperature"], correctIndex: 1, answerKey: "The vacuum stops conduction and convection; a silvered surface reduces radiation.", marks: 2 },
        { type: "ESSAY", prompt: "Explain how a vacuum flask (thermos) is designed to reduce all three methods of heat transfer, referring to the vacuum, the silvered walls and the stopper.", answerKey: "The double wall with a vacuum between the layers removes the matter needed for conduction and convection, so almost no heat crosses the gap by those methods. The walls are silvered (shiny) so they are poor emitters and good reflectors, greatly reducing heat loss (or gain) by radiation. The insulating stopper/lid (plastic or cork) is a poor conductor and closes the top to prevent convection currents and evaporation carrying heat away. Together these keep the contents hot or cold for a long time. Reward correct linking of each design feature to the method it blocks.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 14.3 Phase Change and Latent Heat (https://openstax.org/books/college-physics-2e/pages/14-3-phase-change-and-latent-heat)
    {
      slug: "latent-heat-of-fusion-and-vaporization",
      title: "Latent Heat of Fusion and Vaporization",
      objective:
        "By the end of the topic, learners should be able to define latent heat of fusion and vaporization, use Q = mL, and explain why temperature stays constant during a phase change. (MoE Grade 11 Period IV, CONTENTS 4 'Latent heat of fusion and vaporization'.)",
      estimatedMinutes: 100,
      notes: `## Phase change

- A **phase (state) change** is melting, freezing, boiling (vaporization) or condensing.
- During a phase change the temperature stays **constant**, even though heat is being added or removed.
- The heat goes into **breaking or forming the bonds** between particles, not into raising their kinetic energy.

## Latent heat

- **Latent heat (L)** — the heat needed to change the state of 1 kg of a substance without changing its temperature.
- **Q = m L**, where Q is heat (J), m is mass (kg), L is latent heat (J/kg).
- **Latent heat of fusion (L_f)** — for melting/freezing.
- **Latent heat of vaporization (L_v)** — for boiling/condensing.

## Values for water

| Quantity | Symbol | Value |
| --- | --- | --- |
| Latent heat of fusion | L_f | 334 kJ/kg (334 000 J/kg) |
| Latent heat of vaporization | L_v | 2256 kJ/kg (2 256 000 J/kg) |

- L_v is much larger than L_f — far more energy is needed to boil water than to melt ice.
- Melting 1 kg of ice takes about the same heat as warming liquid water by roughly 80°C.

## Why phase change matters

- **Sweating** cools the body: evaporation absorbs latent heat of vaporization from the skin.
- **Steam burns** are severe because condensing steam releases its large latent heat onto the skin.
- **Ice cools drinks** effectively because melting absorbs latent heat of fusion.

## Common errors

- **Expecting temperature to rise during melting/boiling** — it stays constant until the change is complete.
- **Using Q = mcΔT during a phase change** — use Q = mL instead (ΔT = 0).
- **Mixing up L_f and L_v** — fusion for melting, vaporization for boiling.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 14.3).** How much heat is needed to completely melt 2.0 kg of ice at 0°C into water at 0°C? (Latent heat of fusion of water L_f = 334 000 J/kg.)

**Step 1 — Choose the equation.** A phase change at constant temperature uses Q = mL_f.

**Step 2 — Substitute.** Q = 2.0 kg × 334 000 J/kg.

**Step 3 — Evaluate.** Q = 668 000 J = 668 kJ.

**Answer.** 668 kJ of heat is required. During this process the temperature stays at 0°C; all the heat goes into breaking the bonds of the ice structure to turn it into liquid water.`,
      quiz: [
        { prompt: "During a phase change, the temperature:", options: ["rises steadily", "stays constant", "falls steadily", "doubles"], correctIndex: 1, explanation: "Temperature is constant during melting or boiling." },
        { prompt: "Latent heat is the heat to change the ___ of a substance without changing temperature:", options: ["mass", "state", "colour", "volume"], correctIndex: 1, explanation: "Latent heat changes the state (phase)." },
        { prompt: "The equation for latent heat is:", options: ["Q = mcΔT", "Q = mL", "Q = mv", "Q = mgh"], correctIndex: 1, explanation: "Q = mL for a phase change." },
        { prompt: "Latent heat of fusion refers to:", options: ["boiling", "melting/freezing", "conduction", "radiation"], correctIndex: 1, explanation: "Fusion concerns the solid-liquid change." },
        { prompt: "Latent heat of vaporization refers to:", options: ["melting", "boiling/condensing", "sublimation only", "cooling"], correctIndex: 1, explanation: "Vaporization concerns the liquid-gas change." },
        { prompt: "The latent heat of fusion of water is about:", options: ["334 kJ/kg", "2256 kJ/kg", "4186 J/kg", "100 kJ/kg"], correctIndex: 0, explanation: "L_f of water ≈ 334 kJ/kg." },
        { prompt: "The latent heat of vaporization of water is about:", options: ["334 kJ/kg", "2256 kJ/kg", "900 kJ/kg", "4186 kJ/kg"], correctIndex: 1, explanation: "L_v of water ≈ 2256 kJ/kg." },
        { prompt: "During melting, added heat goes into:", options: ["raising temperature", "breaking bonds between particles", "increasing mass", "producing light"], correctIndex: 1, explanation: "Energy breaks the bonds holding the solid together." },
        { prompt: "Heat to melt 0.5 kg of ice (L_f = 334 000 J/kg):", options: ["167 000 J", "668 000 J", "334 000 J", "33 400 J"], correctIndex: 0, explanation: "Q = 0.5 × 334 000 = 167 000 J." },
        { prompt: "Which requires more heat per kg for water?", options: ["melting", "boiling", "they are equal", "neither needs heat"], correctIndex: 1, explanation: "L_v (2256) is much greater than L_f (334)." },
        { prompt: "Sweating cools the body because evaporation:", options: ["releases latent heat", "absorbs latent heat from the skin", "raises temperature", "adds mass"], correctIndex: 1, explanation: "Evaporating sweat takes latent heat from the skin." },
        { prompt: "Steam causes worse burns than boiling water because condensing steam:", options: ["is colder", "releases large latent heat of vaporization", "has no energy", "is a solid"], correctIndex: 1, explanation: "Condensation gives up the large latent heat onto the skin." },
        { prompt: "Heat to boil 2 kg of water at 100°C (L_v = 2 256 000 J/kg):", options: ["2 256 000 J", "4 512 000 J", "1 128 000 J", "668 000 J"], correctIndex: 1, explanation: "Q = 2 × 2 256 000 = 4 512 000 J." },
        { prompt: "During boiling at constant pressure, the temperature of the water:", options: ["rises above 100°C", "stays at the boiling point", "falls", "varies randomly"], correctIndex: 1, explanation: "Temperature stays at the boiling point until all is vaporized." },
        { prompt: "In Q = mL, the unit of L is:", options: ["J", "J/kg", "J/(kg·°C)", "kg/J"], correctIndex: 1, explanation: "Latent heat is measured in J/kg." },
        { prompt: "Freezing water releases:", options: ["latent heat of fusion", "latent heat of vaporization", "no energy", "kinetic energy only"], correctIndex: 0, explanation: "Freezing gives out the latent heat of fusion." },
        { prompt: "Ice cools a drink effectively because melting:", options: ["releases heat", "absorbs latent heat of fusion from the drink", "adds sugar", "raises temperature"], correctIndex: 1, explanation: "Melting ice draws latent heat from the drink." },
        { prompt: "The correct equation to use during a phase change is:", options: ["Q = mcΔT", "Q = mL", "Q = ½mv²", "Q = Pt only"], correctIndex: 1, explanation: "With ΔT = 0, use Q = mL." },
        { prompt: "Heat to melt 3 kg of ice at 0°C (L_f = 334 000 J/kg):", options: ["1 002 000 J", "334 000 J", "111 000 J", "668 000 J"], correctIndex: 0, explanation: "Q = 3 × 334 000 = 1 002 000 J." },
        { prompt: "Latent heat is called 'latent' (hidden) because:", options: ["it changes colour", "it does not change the temperature", "it cannot be measured", "it destroys mass"], correctIndex: 1, explanation: "The energy is stored/released without a temperature change." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "How much heat melts 1.5 kg of ice at 0°C? (L_f = 334 000 J/kg)", options: ["501 000 J", "334 000 J", "222 667 J", "668 000 J"], correctIndex: 0, answerKey: "Q = mL_f = 1.5 × 334 000 = 501 000 J.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define the latent heat of fusion and the latent heat of vaporization.", answerKey: "Latent heat of fusion: the heat needed to change 1 kg of a solid into liquid (or released on freezing) at constant temperature. Latent heat of vaporization: the heat needed to change 1 kg of liquid into gas (or released on condensing) at constant temperature. Both use Q = mL.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why the temperature of boiling water stays at 100°C even though heat is continually supplied.", answerKey: "During boiling the supplied heat is used as latent heat of vaporization to break the bonds between water molecules and turn liquid into vapour, not to increase their kinetic energy. Since temperature depends on average kinetic energy, it stays constant at the boiling point until all the water has vaporized.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "A steam burn is more severe than a boiling-water burn because condensing steam:", options: ["is at a lower temperature", "releases a large latent heat of vaporization", "contains no energy", "freezes the skin"], correctIndex: 1, answerKey: "Condensing steam gives up its large latent heat (2256 kJ/kg) to the skin.", marks: 2 },
        { type: "ESSAY", prompt: "Compare the latent heat of fusion and the latent heat of vaporization of water, and explain, using the idea of latent heat, how sweating helps to cool the human body.", answerKey: "For water L_f ≈ 334 kJ/kg and L_v ≈ 2256 kJ/kg, so vaporization requires far more energy than fusion because turning liquid into gas needs the molecules to be pulled completely apart, whereas melting only loosens the solid structure. Sweating cools the body because liquid sweat on the skin evaporates, and to do so it absorbs its latent heat of vaporization from the skin and surrounding tissue; removing this heat lowers the skin's temperature. Reward the correct comparison of L_f and L_v with reasoning, and the latent-heat explanation of evaporative cooling.", marks: 8 },
      ],
    },
  ],
};
