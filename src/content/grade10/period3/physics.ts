import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 10,
// Semester One, Period III: Work, Energy and Power. Topics follow the
// syllabus CONTENTS: work; kinds of energy (kinetic and potential); power;
// conservation of energy (transformation); and machines (kinds of simple
// machines, mechanical advantage, velocity ratio and efficiency).
export const physicsG10P3: PeriodContent = {
  grade: 10,
  number: 3,
  title: "Work, Energy and Power",
  summary:
    "Period III of the MoE Grade 10 Physics syllabus. Learners define work in the scientific sense and calculate it, describe kinetic and gravitational potential energy, apply the law of conservation of energy and energy transformations, define and calculate power, and analyse simple machines using mechanical advantage, velocity ratio and efficiency.",
  topics: [
    // source: OpenStax — College Physics 2e, 7.1 Work: The Scientific Definition (https://openstax.org/books/college-physics-2e/pages/7-1-work-the-scientific-definition)
    {
      slug: "work",
      title: "Work: The Scientific Definition",
      objective:
        "By the end of the topic, learners should be able to define work scientifically, use W = Fd cos θ, state its SI unit, and identify when work is positive, negative or zero. (MoE Grade 10 Period III, CONTENTS 1 'Work, Energy and Power'.)",
      estimatedMinutes: 100,
      notes: `## Work in physics

- **Work** — the product of the component of the force in the direction of motion and the distance through which the force acts.
- **Formula:** W = Fd cos θ
- **W** — work; **F** — magnitude of the force; **d** — magnitude of the displacement; **θ** — angle between the force and the displacement.
- Work is done only when a force causes a **displacement**.

## Unit of work

- SI unit: the **joule (J)**.
- 1 J = 1 N·m = 1 kg·m²/s².
- 1 joule is roughly the work done lifting a 100 g apple about 1 m.

## Sign of work

| Condition | Angle θ | cos θ | Work |
| --- | --- | --- | --- |
| Force along motion | 0° | +1 | maximum positive |
| Force at an angle | 0°–90° | positive | positive |
| Force perpendicular | 90° | 0 | zero |
| Force opposes motion | 180° | −1 | negative |

- **Zero work:** no displacement, or force perpendicular to motion (a person holding a bag still, or carrying it horizontally at steady speed).
- **Positive work:** force has a component along the motion (pushing a box forward).
- **Negative work:** force opposes the motion (friction, or lowering a load against your pull).

## Key points

- Holding a heavy weight without moving it does **no work** in the physics sense, though it is tiring.
- Work is a **scalar**: it has magnitude but no direction.
- The force must be constant (or use its average) for W = Fd cos θ.

## Common errors

- **Ignoring the angle** — only the component of force along the displacement does work.
- **Confusing effort with work** — no displacement means no work, however hard you push.
- **Wrong unit** — work is in joules, not newtons.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 7.1).** A person pushes a lawn mower with a constant force of 75.0 N directed at 35.0° below the horizontal, moving it 25.0 m across level ground. How much work is done on the mower?

**Step 1 — Formula.** W = Fd cos θ.

**Step 2 — Knowns.** F = 75.0 N, d = 25.0 m, θ = 35.0°.

**Step 3 — Substitute.** W = (75.0)(25.0)(cos 35.0°).

**Step 4 — Evaluate.** cos 35.0° = 0.819; W = 75.0 × 25.0 × 0.819 = 1.54 × 10³ J.

**Answer.** W ≈ 1536 J ≈ 1.54 × 10³ J. Only the horizontal component of the push does work as the mower moves horizontally.`,
      quiz: [
        { prompt: "In physics, work is done only when a force causes a:", options: ["sound", "displacement", "temperature rise", "colour change"], correctIndex: 1, explanation: "Work requires the force to move the body through a distance." },
        { prompt: "The formula for work is:", options: ["W = F/d", "W = Fd cos θ", "W = F + d", "W = d/F"], correctIndex: 1, explanation: "W = Fd cos θ, using the component of force along the displacement." },
        { prompt: "The SI unit of work is the:", options: ["newton", "joule", "watt", "pascal"], correctIndex: 1, explanation: "Work is measured in joules (J)." },
        { prompt: "1 joule equals:", options: ["1 N·m", "1 N/m", "1 kg/s", "1 m/s"], correctIndex: 0, explanation: "1 J = 1 N·m = 1 kg·m²/s²." },
        { prompt: "A force perpendicular to the motion does work equal to:", options: ["maximum", "zero", "negative", "Fd"], correctIndex: 1, explanation: "cos 90° = 0, so no work is done." },
        { prompt: "Holding a heavy box still does work of:", options: ["Fd", "zero", "mg", "maximum"], correctIndex: 1, explanation: "No displacement means no work in physics." },
        { prompt: "Work is a:", options: ["vector", "scalar", "force", "unit of power"], correctIndex: 1, explanation: "Work has magnitude only, so it is a scalar." },
        { prompt: "A 10 N force moves a body 4 m in its own direction. Work done is:", options: ["2.5 J", "40 J", "14 J", "0.4 J"], correctIndex: 1, explanation: "W = Fd cos0 = 10 × 4 × 1 = 40 J." },
        { prompt: "When the force opposes the motion (θ = 180°), the work is:", options: ["positive", "negative", "zero", "doubled"], correctIndex: 1, explanation: "cos 180° = −1, so work is negative." },
        { prompt: "The angle θ in W = Fd cos θ is between the force and the:", options: ["ground", "displacement", "weight", "normal force"], correctIndex: 1, explanation: "θ is the angle between force and displacement." },
        { prompt: "A 20 N force at 60° to the displacement moves a body 5 m. Work done (cos60 = 0.5):", options: ["50 J", "100 J", "25 J", "10 J"], correctIndex: 0, explanation: "W = 20 × 5 × 0.5 = 50 J." },
        { prompt: "Friction on a sliding box does work that is:", options: ["positive", "negative", "zero", "infinite"], correctIndex: 1, explanation: "Friction opposes motion, so it does negative work." },
        { prompt: "Carrying a suitcase horizontally at constant speed, the lifting force does work of:", options: ["Fd", "zero (force is vertical, motion horizontal)", "negative", "mg d"], correctIndex: 1, explanation: "The upward force is perpendicular to the horizontal motion, so cos 90° = 0." },
        { prompt: "Which requires the largest work for a given F and d?", options: ["θ = 0°", "θ = 45°", "θ = 90°", "θ = 180°"], correctIndex: 0, explanation: "cos 0° = 1 gives the maximum work." },
        { prompt: "A crane lifts a 500 N load 3 m vertically. Work done against gravity:", options: ["1500 J", "167 J", "503 J", "0 J"], correctIndex: 0, explanation: "W = Fd = 500 × 3 = 1500 J." },
        { prompt: "Work and energy share the same unit, the:", options: ["newton", "joule", "watt", "kelvin"], correctIndex: 1, explanation: "Both work and energy are measured in joules." },
        { prompt: "If displacement is zero, the work done is:", options: ["maximum", "zero", "equal to F", "negative"], correctIndex: 1, explanation: "No displacement, no work." },
        { prompt: "The component of a force that does work is the part:", options: ["perpendicular to motion", "along the motion", "vertical", "downward"], correctIndex: 1, explanation: "Only the component of force in the direction of displacement does work." },
        { prompt: "A boy does 200 J of work pushing a cart 8 m. The force (along motion) is:", options: ["25 N", "1600 N", "8 N", "0.04 N"], correctIndex: 0, explanation: "F = W/d = 200/8 = 25 N." },
        { prompt: "Work done can be negative when the force:", options: ["is large", "acts along motion", "acts against the motion", "is vertical"], correctIndex: 2, explanation: "A force opposing the displacement does negative work." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A 15 N force pushes a box 6 m in the direction of the force. Work done is:", options: ["2.5 J", "21 J", "90 J", "9 J"], correctIndex: 2, answerKey: "W = Fd = 15 × 6 = 90 J.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define work in the scientific sense and give its formula and SI unit.", answerKey: "Work = component of force in the direction of motion × distance moved; W = Fd cos θ; SI unit joule (J).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain, with one example, why holding a heavy object still does no work in physics.", answerKey: "Work needs a displacement (W = Fd cos θ). Holding an object still gives d = 0, so W = 0, even though it feels tiring. Any static-hold example accepted.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "A force acts at 90° to the displacement. The work done is:", options: ["maximum", "half", "zero", "negative"], correctIndex: 2, answerKey: "cos 90° = 0, so the work is zero.", marks: 2 },
        { type: "ESSAY", prompt: "Explain how the value of the angle θ between force and displacement determines whether work is positive, negative or zero, giving a real example of each.", answerKey: "W = Fd cos θ. θ = 0°–<90°: cos positive → positive work (pushing a box forward). θ = 90°: cos 0 → zero work (carrying a bag horizontally, or centripetal force). θ = 90°–180°: cos negative → negative work (friction, lowering a load against your pull). Reward correct sign reasoning and appropriate examples.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 7.2 Kinetic Energy and 7.3 Gravitational Potential Energy (https://openstax.org/books/college-physics-2e/pages/7-2-kinetic-energy-and-the-work-energy-theorem)
    {
      slug: "kinetic-and-potential-energy",
      title: "Kinds of Energy: Kinetic and Potential",
      objective:
        "By the end of the topic, learners should be able to define energy, distinguish kinetic from potential energy, and use KE = ½mv² and PE = mgh to solve problems. (MoE Grade 10 Period III, CONTENTS 1a 'Kinds of Energy (potential and kinetic)'.)",
      estimatedMinutes: 110,
      notes: `## Energy

- **Energy** — the capacity to do work. SI unit: the **joule (J)** — the same unit as work.
- Energy exists in many forms: kinetic, potential, thermal, chemical, electrical, nuclear, sound, light.
- **Mechanical energy** — the sum of kinetic and potential energy of a body.

## Kinetic energy

- **Kinetic energy (KE)** — the energy a body has because of its **motion**.
- **Formula:** KE = ½mv², where m is mass (kg) and v is speed (m/s).
- Kinetic energy is a **scalar** and is always positive (or zero).
- It depends on the **square** of the speed: doubling the speed gives four times the kinetic energy.

## The work-energy theorem

- **Work-energy theorem** — the net work done on a body equals its change in kinetic energy.
- W_net = ½mv² − ½mv₀² = ΔKE.

## Gravitational potential energy

- **Potential energy** — stored energy a body has because of its **position or condition**.
- **Gravitational potential energy (PE)** — energy stored by lifting a body against gravity.
- **Formula:** PE = mgh, where h is the height above a chosen reference level.
- Equal to the work done against gravity in raising the body.
- A reference level (often the ground) is chosen where PE = 0.

## Other potential energies

- **Elastic potential energy** — stored in a stretched or compressed spring or elastic material.
- **Chemical potential energy** — stored in fuel and food.

## Common errors

- **Forgetting to square v** — KE uses v², not v.
- **Using the wrong height** — h is the vertical height change, not the distance along a slope.
- **Confusing KE and PE** — motion → kinetic; position/height → potential.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 7.2 and 7.3).**
(a) A 30.0 kg package moves at 0.500 m/s on a conveyor belt. Find its kinetic energy.
(b) A 0.500 kg mass in a cuckoo clock is raised 1.00 m. Find the increase in gravitational potential energy (g = 9.80 m/s²).

**Part (a).** KE = ½mv² = ½(30.0)(0.500)² = ½ × 30.0 × 0.250 = 3.75 J.

**Part (b).** PE = mgh = (0.500)(9.80)(1.00) = 4.90 J.

**Answer.** The package has 3.75 J of kinetic energy; the clock weight gains 4.90 J of gravitational potential energy.`,
      quiz: [
        { prompt: "Energy is defined as the capacity to do:", options: ["heat", "work", "force", "power"], correctIndex: 1, explanation: "Energy is the capacity to do work." },
        { prompt: "The SI unit of energy is the:", options: ["watt", "joule", "newton", "pascal"], correctIndex: 1, explanation: "Energy is measured in joules, like work." },
        { prompt: "Kinetic energy is energy due to:", options: ["position", "motion", "height", "temperature"], correctIndex: 1, explanation: "Kinetic energy is the energy of a moving body." },
        { prompt: "The kinetic energy formula is:", options: ["KE = mgh", "KE = ½mv²", "KE = mv", "KE = ½mv"], correctIndex: 1, explanation: "KE = ½mv²." },
        { prompt: "Gravitational potential energy is given by:", options: ["PE = ½mv²", "PE = mgh", "PE = Fd", "PE = mv"], correctIndex: 1, explanation: "PE = mgh." },
        { prompt: "Doubling the speed of a body multiplies its kinetic energy by:", options: ["2", "3", "4", "8"], correctIndex: 2, explanation: "KE ∝ v², so doubling v gives ×4." },
        { prompt: "A 2 kg body moves at 3 m/s. Its kinetic energy is:", options: ["9 J", "6 J", "18 J", "3 J"], correctIndex: 0, explanation: "KE = ½ × 2 × 3² = ½ × 2 × 9 = 9 J." },
        { prompt: "A 5 kg mass is 4 m high (g = 9.8). Its PE is:", options: ["20 J", "196 J", "49 J", "39.2 J"], correctIndex: 1, explanation: "PE = mgh = 5 × 9.8 × 4 = 196 J." },
        { prompt: "Mechanical energy is the sum of:", options: ["heat and light", "kinetic and potential energy", "work and power", "mass and speed"], correctIndex: 1, explanation: "Mechanical energy = KE + PE." },
        { prompt: "Energy stored in a stretched spring is:", options: ["kinetic energy", "elastic potential energy", "thermal energy", "sound energy"], correctIndex: 1, explanation: "A stretched spring stores elastic potential energy." },
        { prompt: "The work-energy theorem states that net work equals the change in:", options: ["potential energy", "kinetic energy", "power", "momentum"], correctIndex: 1, explanation: "W_net = ΔKE." },
        { prompt: "Energy stored in fuel and food is:", options: ["kinetic", "chemical potential", "gravitational", "electrical"], correctIndex: 1, explanation: "Fuel and food store chemical potential energy." },
        { prompt: "In PE = mgh, the h is the:", options: ["horizontal distance", "vertical height change", "slope length", "speed"], correctIndex: 1, explanation: "h is the vertical height above the reference level." },
        { prompt: "Kinetic energy can never be:", options: ["positive", "zero", "negative", "large"], correctIndex: 2, explanation: "½mv² is always ≥ 0; it cannot be negative." },
        { prompt: "A 1000 kg car at 20 m/s has kinetic energy of:", options: ["200 000 J", "20 000 J", "400 000 J", "10 000 J"], correctIndex: 0, explanation: "KE = ½ × 1000 × 20² = ½ × 1000 × 400 = 200 000 J." },
        { prompt: "Raising a body increases its:", options: ["kinetic energy", "gravitational potential energy", "sound energy", "speed"], correctIndex: 1, explanation: "Height increases gravitational potential energy." },
        { prompt: "PE = mgh equals the work done:", options: ["by gravity", "against gravity in lifting the body", "by friction", "by the normal force"], correctIndex: 1, explanation: "It equals the work done against gravity to raise the body." },
        { prompt: "Which has more KE: a 2 kg body at 4 m/s or a 4 kg body at 2 m/s?", options: ["the 2 kg body", "the 4 kg body", "they are equal", "cannot tell"], correctIndex: 0, explanation: "2 kg: ½×2×16 = 16 J; 4 kg: ½×4×4 = 8 J. The 2 kg body has more." },
        { prompt: "A body at rest on the ground (reference level) has KE and PE of:", options: ["both zero", "KE zero, PE maximum", "KE maximum, PE zero", "both maximum"], correctIndex: 0, explanation: "At rest at reference level, v = 0 and h = 0, so both are zero." },
        { prompt: "Kinetic energy is a:", options: ["vector", "scalar", "force", "type of power"], correctIndex: 1, explanation: "Energy is a scalar quantity." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A 3 kg ball moves at 4 m/s. Its kinetic energy is:", options: ["12 J", "24 J", "48 J", "6 J"], correctIndex: 1, answerKey: "KE = ½ × 3 × 4² = ½ × 3 × 16 = 24 J.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between kinetic and potential energy, giving the formula for each.", answerKey: "Kinetic energy = energy due to motion, KE = ½mv². Potential energy = stored energy due to position/condition; gravitational PE = mgh. Both in joules.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A 2 kg book is placed on a shelf 1.5 m high. Calculate its gravitational potential energy (g = 9.8).", answerKey: "PE = mgh = 2 × 9.8 × 1.5 = 29.4 J.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "If the speed of a moving body triples, its kinetic energy becomes:", options: ["3 times", "6 times", "9 times", "unchanged"], correctIndex: 2, answerKey: "KE ∝ v²; tripling v gives 3² = 9 times.", marks: 2 },
        { type: "ESSAY", prompt: "Describe the different forms of energy, and explain, using formulae, how the kinetic and gravitational potential energies of a falling stone change as it falls.", answerKey: "Forms: kinetic, potential (gravitational, elastic, chemical), thermal, electrical, nuclear, sound, light. As a stone falls, height h decreases so PE = mgh decreases; speed v increases so KE = ½mv² increases; energy is transferred from potential to kinetic. Reward listing forms and correct KE/PE relationship during the fall.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 7.7 Power (https://openstax.org/books/college-physics-2e/pages/7-7-power)
    {
      slug: "power",
      title: "Power",
      objective:
        "By the end of the topic, learners should be able to define power as the rate of doing work, use P = W/t, state its SI unit, and relate the watt to horsepower. (MoE Grade 10 Period III, CONTENTS 1 'Work, Energy and Power'.)",
      estimatedMinutes: 90,
      notes: `## Power

- **Power** — the rate at which work is done (or energy is transferred).
- **Formula:** P = W / t, where W is work (or energy) in joules and t is time in seconds.
- Power measures **how fast** work is done, not how much.

## Unit of power

- SI unit: the **watt (W)**.
- 1 W = 1 joule per second (1 J/s).
- **1 kilowatt (kW)** = 1000 W; **1 megawatt (MW)** = 10⁶ W.
- **Horsepower:** 1 hp = 746 W.

## Related expressions

- Since W = Fd, power can also be written P = Fd/t = F·v (force × velocity) for motion at speed v.
- Two people doing the same work: the one who finishes sooner develops more power.

## The kilowatt-hour

- **Kilowatt-hour (kWh)** — a unit of energy used for electricity bills: 1 kWh = energy used by a 1 kW appliance in 1 hour = 3.6 × 10⁶ J.

## Common errors

- **Confusing power with energy** — energy (J) is total; power (W) is rate.
- **Wrong time unit** — use seconds for the watt.
- **Mixing W (watt) and W (work symbol)** — check the context.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 7.7).** A 60.0 kg woman runs up a flight of stairs of height 3.00 m in 3.50 s, reaching a speed of 2.00 m/s from rest. What is her power output? (g = 9.80 m/s²)

**Step 1 — Work done.** She gains both kinetic and potential energy: W = ½mv² + mgh.

**Step 2 — Kinetic part.** ½mv² = ½(60.0)(2.00)² = ½ × 60.0 × 4.00 = 120 J.

**Step 3 — Potential part.** mgh = (60.0)(9.80)(3.00) = 1764 J.

**Step 4 — Total work.** W = 120 + 1764 = 1884 J.

**Step 5 — Power.** P = W/t = 1884 / 3.50 = 538 W.

**Answer.** Her power output is about 538 W — slightly less than 1 horsepower (746 W).`,
      quiz: [
        { prompt: "Power is the rate of doing:", options: ["force", "work", "distance", "mass"], correctIndex: 1, explanation: "Power is work done per unit time." },
        { prompt: "The formula for power is:", options: ["P = Wt", "P = W/t", "P = t/W", "P = W + t"], correctIndex: 1, explanation: "P = W/t." },
        { prompt: "The SI unit of power is the:", options: ["joule", "newton", "watt", "pascal"], correctIndex: 2, explanation: "Power is measured in watts (W)." },
        { prompt: "1 watt equals:", options: ["1 J·s", "1 J/s", "1 N/s", "1 kg/s"], correctIndex: 1, explanation: "1 W = 1 joule per second." },
        { prompt: "1 horsepower is about:", options: ["100 W", "746 W", "1000 W", "9.8 W"], correctIndex: 1, explanation: "1 hp = 746 W." },
        { prompt: "A machine does 600 J of work in 3 s. Its power is:", options: ["200 W", "1800 W", "0.005 W", "603 W"], correctIndex: 0, explanation: "P = W/t = 600/3 = 200 W." },
        { prompt: "Two workers do the same work; the faster one has:", options: ["less power", "more power", "the same power", "zero power"], correctIndex: 1, explanation: "Same work in less time means more power." },
        { prompt: "1 kilowatt equals:", options: ["100 W", "1000 W", "10 W", "1 000 000 W"], correctIndex: 1, explanation: "1 kW = 1000 W." },
        { prompt: "Power can also be written as force times:", options: ["time", "mass", "velocity", "area"], correctIndex: 2, explanation: "P = Fd/t = Fv." },
        { prompt: "A crane lifts 2000 J of load in 4 s. Power output:", options: ["500 W", "8000 W", "0.002 W", "2004 W"], correctIndex: 0, explanation: "P = 2000/4 = 500 W." },
        { prompt: "The kilowatt-hour is a unit of:", options: ["power", "energy", "force", "time"], correctIndex: 1, explanation: "kWh is energy (power × time)." },
        { prompt: "1 kWh in joules is:", options: ["3600 J", "3.6 × 10⁶ J", "1000 J", "60 J"], correctIndex: 1, explanation: "1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J." },
        { prompt: "Energy is measured in joules; power is measured in:", options: ["joules", "watts", "newtons", "seconds"], correctIndex: 1, explanation: "Power (rate of energy use) is in watts." },
        { prompt: "A 100 W bulb uses energy each second of:", options: ["100 J", "1 J", "10 J", "1000 J"], correctIndex: 0, explanation: "100 W = 100 J/s, so 100 J each second." },
        { prompt: "If the same work is done in half the time, the power is:", options: ["halved", "doubled", "unchanged", "quartered"], correctIndex: 1, explanation: "P = W/t; halving t doubles P." },
        { prompt: "A motor rated 2 kW runs for 30 s. Energy used:", options: ["60 000 J", "66 J", "2030 J", "1000 J"], correctIndex: 0, explanation: "W = Pt = 2000 × 30 = 60 000 J." },
        { prompt: "Power tells you how ___ work is done:", options: ["much", "fast", "far", "heavy"], correctIndex: 1, explanation: "Power is the rate — how fast work is done." },
        { prompt: "A pump does 4500 J of work in developing 150 W. The time taken is:", options: ["30 s", "0.03 s", "300 s", "3 s"], correctIndex: 0, explanation: "t = W/P = 4500/150 = 30 s." },
        { prompt: "A person of power 500 W is compared to 1 hp (746 W). The person's power is:", options: ["more than 1 hp", "less than 1 hp", "exactly 1 hp", "zero"], correctIndex: 1, explanation: "500 W < 746 W, so less than 1 hp." },
        { prompt: "Which appliance uses energy fastest?", options: ["40 W lamp", "60 W fan", "1500 W heater", "5 W charger"], correctIndex: 2, explanation: "The highest wattage uses energy fastest." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A pump does 3000 J of work in 6 s. Its power output is:", options: ["500 W", "18000 W", "0.002 W", "3006 W"], correctIndex: 0, answerKey: "P = W/t = 3000/6 = 500 W.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define power, give its formula and SI unit.", answerKey: "Power = rate of doing work (energy per unit time); P = W/t; SI unit watt (W) = J/s.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A boy of weight 500 N climbs stairs of height 4 m in 8 s. Calculate his power output.", answerKey: "Work = Fd = 500 × 4 = 2000 J. Power = W/t = 2000/8 = 250 W.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "If the same work is done in one-third of the time, the power becomes:", options: ["one-third", "three times", "unchanged", "nine times"], correctIndex: 1, answerKey: "P = W/t; dividing t by 3 multiplies P by 3.", marks: 2 },
        { type: "ESSAY", prompt: "Explain the difference between work, energy and power, giving the unit of each, and describe how two machines doing the same job can differ in power.", answerKey: "Work = force × distance moved in the direction of force (J); energy = capacity to do work (J); power = rate of doing work, P = W/t (W = J/s). Two machines doing the same total work differ in power if they take different times — the faster one has greater power. Reward correct definitions, units and the time argument.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 7.6 Conservation of Energy (https://openstax.org/books/college-physics-2e/pages/7-6-conservation-of-energy)
    {
      slug: "conservation-of-energy",
      title: "Conservation of Energy and Energy Transformations",
      objective:
        "By the end of the topic, learners should be able to state the law of conservation of energy, apply conservation of mechanical energy (KE + PE = constant), and describe energy transformations. (MoE Grade 10 Period III, CONTENTS 1b 'Conservation of Energy (transformation)'.)",
      estimatedMinutes: 100,
      notes: `## Law of conservation of energy

- **Law of conservation of energy** — energy cannot be created or destroyed; it can only be transformed from one form to another or transferred from one body to another. The total energy of an isolated system stays constant.

## Conservation of mechanical energy

- When only conservative forces (like gravity) act, the **mechanical energy** (KE + PE) is constant:
- KE₁ + PE₁ = KE₂ + PE₂
- ½mv₁² + mgh₁ = ½mv₂² + mgh₂
- As a body falls, PE converts to KE; as it rises, KE converts to PE; the total remains the same (no friction).

## When friction is present

- Friction and air resistance are **non-conservative**: they convert mechanical energy into heat (and sound).
- General form: KE₁ + PE₁ = KE₂ + PE₂ + (energy lost to friction).
- Mechanical energy decreases, but total energy (including heat) is still conserved.

## Energy transformations — examples

| Device / process | Energy change |
| --- | --- |
| Falling stone | potential → kinetic |
| Battery + bulb | chemical → electrical → light + heat |
| Hydro power station | potential (water) → kinetic → electrical |
| Car engine | chemical (fuel) → thermal → kinetic |
| Solar cell | light → electrical |
| Loudspeaker | electrical → sound |
| Body/muscles | chemical (food) → kinetic + thermal |

## Common errors

- **Thinking energy is "used up"** — it is transformed, not destroyed.
- **Ignoring heat losses** — mechanical energy is only conserved when friction is negligible.
- **Forgetting KE and PE trade off** — at the top of a swing PE is greatest and KE least; at the bottom the reverse.`,
      workedExample: `**Problem (conservation of mechanical energy; OpenStax College Physics 2e, 7.6).** A 2.0 kg ball is dropped from rest at a height of 5.0 m. Using conservation of mechanical energy, find its speed just before it hits the ground (g = 9.8 m/s², ignore air resistance).

**Step 1 — Set up conservation.** KE₁ + PE₁ = KE₂ + PE₂. At the top: v₁ = 0, h₁ = 5.0 m. At the bottom: h₂ = 0.

**Step 2 — Substitute.** 0 + mgh₁ = ½mv₂² + 0.

**Step 3 — Cancel m.** gh₁ = ½v₂², so v₂² = 2gh₁.

**Step 4 — Evaluate.** v₂² = 2 × 9.8 × 5.0 = 98; v₂ = √98 = 9.9 m/s.

**Answer.** The ball hits the ground at about 9.9 m/s. All of the initial potential energy (mgh = 2 × 9.8 × 5 = 98 J) has become kinetic energy (½mv² = ½ × 2 × 98 = 98 J).`,
      quiz: [
        { prompt: "The law of conservation of energy says energy can be:", options: ["created", "destroyed", "transformed but not created or destroyed", "made from nothing"], correctIndex: 2, explanation: "Energy is only transformed or transferred; the total is constant." },
        { prompt: "Mechanical energy is conserved when the only forces acting are:", options: ["friction forces", "conservative forces like gravity", "air resistance", "applied pushes"], correctIndex: 1, explanation: "With only conservative forces, KE + PE stays constant." },
        { prompt: "As a stone falls freely, its potential energy converts to:", options: ["sound energy", "kinetic energy", "chemical energy", "electrical energy"], correctIndex: 1, explanation: "PE becomes KE as the stone speeds up." },
        { prompt: "At the top of its rise, a thrown ball has maximum:", options: ["kinetic energy", "potential energy", "speed", "momentum"], correctIndex: 1, explanation: "At the highest point PE is greatest and KE least." },
        { prompt: "Conservation of mechanical energy: KE₁ + PE₁ =", options: ["KE₂ − PE₂", "KE₂ + PE₂", "PE₂ − KE₂", "0"], correctIndex: 1, explanation: "Total mechanical energy is the same at both points." },
        { prompt: "Friction converts mechanical energy mainly into:", options: ["light", "heat", "chemical energy", "nuclear energy"], correctIndex: 1, explanation: "Friction dissipates mechanical energy as heat (and some sound)." },
        { prompt: "In a hydroelectric station, water's potential energy becomes:", options: ["chemical then light", "kinetic then electrical", "sound then heat", "nuclear then kinetic"], correctIndex: 1, explanation: "Falling water gains KE, turning turbines to make electricity." },
        { prompt: "A battery-powered torch changes energy from:", options: ["light to chemical", "chemical to electrical to light", "kinetic to sound", "heat to chemical"], correctIndex: 1, explanation: "Chemical → electrical → light (and heat)." },
        { prompt: "When a ball is dropped, at the bottom its energy is mostly:", options: ["potential", "kinetic", "chemical", "elastic"], correctIndex: 1, explanation: "Just before impact, PE has become KE." },
        { prompt: "A car engine transforms chemical energy of fuel into:", options: ["nuclear energy", "thermal then kinetic energy", "light only", "sound only"], correctIndex: 1, explanation: "Fuel burns (thermal) and drives the car (kinetic)." },
        { prompt: "A solar cell converts:", options: ["heat to sound", "light to electrical energy", "chemical to light", "kinetic to heat"], correctIndex: 1, explanation: "Solar cells turn light into electrical energy." },
        { prompt: "Total energy of an isolated system:", options: ["increases", "decreases", "stays constant", "becomes zero"], correctIndex: 2, explanation: "The total energy of an isolated system is conserved." },
        { prompt: "A 2 kg ball dropped from 5 m reaches the ground at about (g = 9.8):", options: ["9.9 m/s", "98 m/s", "5 m/s", "49 m/s"], correctIndex: 0, explanation: "v = √(2gh) = √98 ≈ 9.9 m/s." },
        { prompt: "When mechanical energy seems 'lost' to friction, it has actually become:", options: ["nothing", "heat and sound", "more PE", "more mass"], correctIndex: 1, explanation: "It is converted to heat and sound, so total energy is conserved." },
        { prompt: "At the lowest point of a swing, a pendulum has maximum:", options: ["potential energy", "kinetic energy", "height", "mass"], correctIndex: 1, explanation: "At the bottom KE is greatest and PE least." },
        { prompt: "A loudspeaker converts electrical energy into:", options: ["light", "sound", "heat only", "chemical"], correctIndex: 1, explanation: "It turns electrical energy into sound energy." },
        { prompt: "Energy 'used up' by an appliance is really:", options: ["destroyed", "transformed into other forms", "created", "stored as mass"], correctIndex: 1, explanation: "Energy is transformed, e.g. into light, heat and sound." },
        { prompt: "For a body falling freely, the sum KE + PE:", options: ["increases", "decreases", "stays constant", "becomes zero"], correctIndex: 2, explanation: "Ignoring air resistance, mechanical energy is conserved." },
        { prompt: "Muscles convert the chemical energy of food mainly into:", options: ["nuclear and light", "kinetic and thermal energy", "electrical and sound", "elastic and chemical"], correctIndex: 1, explanation: "Food energy becomes movement (kinetic) and body heat (thermal)." },
        { prompt: "Which statement is true?", options: ["Energy can be destroyed", "Total energy is conserved", "Mechanical energy always increases", "PE is never converted"], correctIndex: 1, explanation: "The total energy is always conserved." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the law of conservation of energy.", answerKey: "Energy cannot be created or destroyed; it can only be transformed from one form to another or transferred between bodies. The total energy of an isolated system is constant.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "A ball dropped from 20 m hits the ground at about (g = 9.8, ignore air resistance):", options: ["10 m/s", "14 m/s", "20 m/s", "40 m/s"], correctIndex: 2, answerKey: "v = √(2gh) = √(2×9.8×20) = √392 ≈ 19.8 ≈ 20 m/s.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Describe the energy transformations in a hydroelectric power station.", answerKey: "Gravitational potential energy of stored/falling water → kinetic energy of moving water → mechanical (rotational) energy of turbines/generator → electrical energy. Reward correct sequence.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A 1 kg stone is dropped from 10 m. Using energy conservation, find its speed at the ground (g = 9.8).", answerKey: "mgh = ½mv² → v = √(2gh) = √(2×9.8×10) = √196 = 14 m/s.", marks: 4 },
        { type: "ESSAY", prompt: "Explain how the principle of conservation of energy applies to a swinging pendulum, and why the swing eventually stops even though energy is conserved.", answerKey: "At the top of the swing PE is maximum and KE zero; at the bottom KE is maximum and PE minimum; energy trades between PE and KE while total mechanical energy stays constant (ideal case). In reality friction at the pivot and air resistance do negative work, converting mechanical energy to heat and sound, so the amplitude decreases and it stops — but total energy (including heat) is still conserved. Reward the KE/PE exchange and the friction/heat explanation.", marks: 8 },
      ],
    },
    // source: OpenStax — Physics, 9.3 Simple Machines (https://openstax.org/books/physics/pages/9-3-simple-machines)
    {
      slug: "simple-machines",
      title: "Machines: Mechanical Advantage, Velocity Ratio and Efficiency",
      objective:
        "By the end of the topic, learners should be able to name the simple machines, calculate mechanical advantage and velocity ratio, distinguish work input from work output, and calculate the efficiency of a machine. (MoE Grade 10 Period III, CONTENTS 2 'Machines'.)",
      estimatedMinutes: 110,
      notes: `## Machines

- **Machine** — a device that makes work easier by changing the size or direction of a force.
- A machine does **not** reduce the total work needed; it lets a small effort move a large load over a longer distance.
- **Effort** — the force applied to the machine. **Load (resistance)** — the force overcome by the machine.

## Simple machines

The six simple machines:

| Machine | Description | Example |
| --- | --- | --- |
| Lever | rigid bar turning about a fulcrum | crowbar, seesaw |
| Wheel and axle | a wheel fixed to a shaft | steering wheel, door knob |
| Pulley | grooved wheel with a rope | flagpole, crane |
| Inclined plane | a sloping surface | ramp, hillside road |
| Wedge | two inclined planes back to back | axe, knife, nail |
| Screw | an inclined plane wrapped round a cylinder | bolt, jack, drill |

## Mechanical advantage (MA)

- **Mechanical advantage** — the factor by which a machine multiplies the effort force.
- MA = load (output force) / effort (input force).
- MA has no unit (it is a ratio). MA > 1 means the machine multiplies force.

## Velocity ratio (VR)

- **Velocity ratio** — the ratio of the distance moved by the effort to the distance moved by the load.
- VR = distance moved by effort / distance moved by load.
- VR has no unit and depends only on the geometry of the machine.

## Work input, work output and efficiency

- **Work input** — work done by the effort = effort × distance moved by effort.
- **Work output** — useful work done on the load = load × distance moved by load.
- **Efficiency** — the fraction of the input work that appears as useful output:
- efficiency = (work output / work input) × 100%.
- Efficiency can also be written as (MA / VR) × 100%.
- Real machines are always **less than 100% efficient**; some input work is lost as heat through friction.

## Common errors

- **Thinking a machine reduces total work** — it reduces the effort force, not the work.
- **Confusing MA and VR** — MA uses forces, VR uses distances.
- **Expecting 100% efficiency** — friction always wastes some energy.`,
      workedExample: `**Problem (OpenStax Physics, 9.3).** A lever is used to lift a 40 N load through 0.1 m by applying an input (effort) force of 11 N that moves through 0.4 m. Find (a) the mechanical advantage, (b) the velocity ratio, (c) the efficiency.

**Step 1 — Mechanical advantage.** MA = load / effort = 40 N / 11 N = 3.6.

**Step 2 — Velocity ratio.** VR = distance moved by effort / distance moved by load = 0.4 m / 0.1 m = 4.

**Step 3 — Work input.** W_in = effort × effort distance = 11 N × 0.4 m = 4.4 J.

**Step 4 — Work output.** W_out = load × load distance = 40 N × 0.1 m = 4.0 J.

**Step 5 — Efficiency.** efficiency = (W_out / W_in) × 100% = (4.0 / 4.4) × 100% = 91%.

**Answer.** MA = 3.6, VR = 4, efficiency = 91%. The 9% shortfall is work lost to friction, so a real machine is never 100% efficient.`,
      quiz: [
        { prompt: "A machine makes work easier by changing the size or direction of a:", options: ["mass", "force", "temperature", "charge"], correctIndex: 1, explanation: "Machines change the size or direction of the applied force." },
        { prompt: "The force applied to a machine is the:", options: ["load", "effort", "resistance", "output"], correctIndex: 1, explanation: "The input force applied is the effort." },
        { prompt: "Mechanical advantage is:", options: ["effort/load", "load/effort", "load × effort", "load + effort"], correctIndex: 1, explanation: "MA = load (output force) / effort (input force)." },
        { prompt: "Mechanical advantage has:", options: ["units of newtons", "units of joules", "no unit", "units of metres"], correctIndex: 2, explanation: "MA is a ratio of two forces, so it has no unit." },
        { prompt: "Velocity ratio is the ratio of the distance moved by the effort to the distance moved by the:", options: ["fulcrum", "load", "wheel", "rope"], correctIndex: 1, explanation: "VR = effort distance / load distance." },
        { prompt: "Which is NOT one of the six simple machines?", options: ["lever", "pulley", "engine", "screw"], correctIndex: 2, explanation: "An engine is a complex machine, not one of the six simple machines." },
        { prompt: "A wedge is essentially:", options: ["a single pulley", "two inclined planes back to back", "a lever", "a wheel and axle"], correctIndex: 1, explanation: "A wedge is two inclined planes joined." },
        { prompt: "A screw is an inclined plane wrapped around a:", options: ["lever", "cylinder", "pulley", "wheel"], correctIndex: 1, explanation: "A screw is an inclined plane wound round a cylinder." },
        { prompt: "Work output of a machine is:", options: ["effort × effort distance", "load × load distance", "load/effort", "effort/load"], correctIndex: 1, explanation: "Work output = load × distance the load moves." },
        { prompt: "Efficiency is (work output / work input) ×", options: ["1", "10", "100%", "1000"], correctIndex: 2, explanation: "Efficiency is expressed as a percentage." },
        { prompt: "A machine with MA = 4 lifts a 200 N load with an effort of:", options: ["800 N", "50 N", "196 N", "4 N"], correctIndex: 1, explanation: "MA = load/effort → effort = 200/4 = 50 N." },
        { prompt: "Efficiency of a real machine is always:", options: ["exactly 100%", "more than 100%", "less than 100%", "zero"], correctIndex: 2, explanation: "Friction wastes some work, so efficiency is below 100%." },
        { prompt: "Energy 'lost' in a machine is mainly converted to:", options: ["light", "heat by friction", "chemical energy", "sound only"], correctIndex: 1, explanation: "Friction between moving parts wastes energy as heat." },
        { prompt: "A pulley system with 3 supporting ropes has an ideal MA of about:", options: ["1", "3", "9", "0.3"], correctIndex: 1, explanation: "For an ideal pulley, MA equals the number of supporting ropes." },
        { prompt: "Efficiency can also be written as:", options: ["(VR/MA) × 100%", "(MA/VR) × 100%", "MA × VR", "MA + VR"], correctIndex: 1, explanation: "Efficiency = (MA/VR) × 100%." },
        { prompt: "Work input is:", options: ["load × load distance", "effort × effort distance", "load/effort", "VR × MA"], correctIndex: 1, explanation: "Work input = effort × distance the effort moves." },
        { prompt: "A machine does 80 J of useful work from 100 J of input. Its efficiency is:", options: ["80%", "125%", "20%", "180%"], correctIndex: 0, explanation: "efficiency = 80/100 × 100% = 80%." },
        { prompt: "A ramp (inclined plane) lets you raise a load with:", options: ["more force over a shorter distance", "less force over a longer distance", "no work at all", "the same force and distance"], correctIndex: 1, explanation: "An inclined plane trades a smaller force for a longer distance." },
        { prompt: "A seesaw and a crowbar are examples of a:", options: ["pulley", "lever", "screw", "wedge"], correctIndex: 1, explanation: "Both are levers turning about a fulcrum." },
        { prompt: "MA uses forces; VR uses:", options: ["masses", "distances", "times", "areas"], correctIndex: 1, explanation: "VR is a ratio of distances moved." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the six simple machines and give one everyday example of each.", answerKey: "Lever (crowbar/seesaw), wheel and axle (steering wheel/door knob), pulley (flagpole/crane), inclined plane (ramp), wedge (axe/knife), screw (bolt/jack). Accept reasonable examples.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "A machine overcomes a 300 N load using a 60 N effort. Its mechanical advantage is:", options: ["5", "0.2", "360", "240"], correctIndex: 0, answerKey: "MA = load/effort = 300/60 = 5.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define efficiency of a machine and explain why it is always less than 100%.", answerKey: "Efficiency = (work output / work input) × 100%. It is below 100% because some input work is always lost as heat through friction between moving parts (and to sound).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A machine takes in 500 J and gives 400 J of useful work. Its efficiency is:", options: ["125%", "80%", "20%", "100%"], correctIndex: 1, answerKey: "efficiency = 400/500 × 100% = 80%.", marks: 2 },
        { type: "ESSAY", prompt: "A lever raises a 50 N load 0.2 m when an effort of 15 N moves 0.8 m. Calculate the mechanical advantage, velocity ratio, work input, work output and efficiency, and comment on the result.", answerKey: "MA = 50/15 = 3.3. VR = 0.8/0.2 = 4. Work input = 15 × 0.8 = 12 J. Work output = 50 × 0.2 = 10 J. Efficiency = 10/12 × 100% = 83%. Comment: MA < VR and efficiency < 100% because friction wastes ~2 J as heat; the machine multiplies force (MA > 1) but does not create energy. Reward correct calculations and interpretation.", marks: 8 },
      ],
    },
  ],
};
