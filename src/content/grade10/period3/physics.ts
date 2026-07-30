import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 10,
// Semester One, Period III: Work, Energy and Power.
export const physicsG10P3: PeriodContent = {
  grade: 10,
  number: 3,
  title: "Work, Energy and Power",
  summary:
    "Period III of the MoE Grade 10 Physics syllabus. Learners define work in the scientific sense and calculate it, describe kinetic and potential energy and the principle of conservation of energy, and define and calculate power.",
  topics: [
    {
      slug: "work-and-energy",
      title: "Work and Energy",
      objective:
        "By the end of the topic, learners should be able to define work and calculate it, describe the main forms of energy, use the formulas for kinetic and potential energy, and state the principle of conservation of energy.",
      estimatedMinutes: 170,
      notes: `## Work in physics

In everyday language "work" means any effort. In physics, **work** has a precise meaning:

> Work is done when a **force** moves an object through a **distance in the direction of the force**.

$$W = F \\times d$$

- **W** = work done, measured in **joules (J)**
- **F** = force, in newtons (N)
- **d** = distance moved in the direction of the force, in metres (m)

**One joule** is the work done when a force of 1 N moves an object 1 m.

**Important:** if the object does not move (d = 0), **no work is done**, no matter how hard you push. Holding a heavy load still does no *physical* work.

## Energy

**Energy** is the **capacity to do work**. It is also measured in **joules (J)**. Anything that can do work has energy.

Common forms of energy: kinetic, potential (gravitational and elastic), heat (thermal), light, sound, electrical, chemical and nuclear.

## Kinetic energy

**Kinetic energy** is the energy a body has because of its **motion**:

$$KE = \\tfrac{1}{2}mv^2$$

where m = mass (kg) and v = speed (m/s). A faster or heavier object has more kinetic energy.

## Gravitational potential energy

**Potential energy** is stored energy. **Gravitational potential energy (PE)** is the energy a body has because of its **height** above the ground:

$$PE = mgh$$

where m = mass (kg), g = acceleration due to gravity (≈10 m/s²) and h = height (m).

## Conservation of energy

The **principle of conservation of energy** states:

> Energy **cannot be created or destroyed**, only **changed from one form to another**.

\`\`\`svg A falling ball converts PE to KE
<svg viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A ball at height with potential energy falling and gaining kinetic energy">
  <line x1="30" y1="150" x2="230" y2="150" stroke="#0369a1" stroke-width="2"/>
  <circle cx="60" cy="30" r="10" fill="#e11d48"/>
  <text x="80" y="30" font-size="10" fill="#0c4a6e">most PE, no KE</text>
  <circle cx="60" cy="90" r="10" fill="#e11d48" fill-opacity="0.7"/>
  <text x="80" y="92" font-size="10" fill="#0c4a6e">PE ↓ , KE ↑</text>
  <circle cx="60" cy="140" r="10" fill="#e11d48" fill-opacity="0.5"/>
  <text x="80" y="142" font-size="10" fill="#0c4a6e">no PE, most KE</text>
  <line x1="60" y1="42" x2="60" y2="128" stroke="#0369a1" stroke-dasharray="3 3"/>
</svg>
\`\`\`

When a ball falls, its **potential energy is converted into kinetic energy**: as it drops, height (and PE) decreases while speed (and KE) increases. The total energy stays the same. When it hits the ground the energy becomes heat and sound. Energy just keeps changing form.`,
      workedExample: `**Problem.** A worker lifts a 20 kg bag of rice to a shelf 2 m high (g = 10 m/s²).
(a) How much work does the worker do? (b) How much gravitational potential energy does the bag gain? (c) If the bag then falls off the shelf, how much kinetic energy will it have just before hitting the ground?

**Part (a) — work done lifting**
The force needed equals the bag's weight: F = mg = 20 × 10 = 200 N.
Work W = F × d = 200 × 2 = **400 J**.

**Part (b) — potential energy gained**
PE = mgh = 20 × 10 × 2 = **400 J**.

(Notice the PE gained equals the work done in lifting — the work is "stored" as potential energy.)

**Part (c) — kinetic energy just before landing**
By the **conservation of energy**, all the potential energy is converted to kinetic energy as it falls (ignoring air resistance):

KE just before landing = PE at the top = **400 J**.

**Conclusion:** the worker does 400 J of work, storing 400 J of potential energy in the raised bag; when it falls, that 400 J becomes 400 J of kinetic energy — the energy is conserved, only changing form.`,
      teachingTip:
        "The scientific meaning of 'work' surprises learners — pushing hard against a wall that does not move is zero work. Drive home W = F × d with the rule 'no movement, no work'. For energy, use the falling-ball example every time: it makes conservation of energy concrete (PE → KE → heat and sound) and connects the two formulas mgh and ½mv², which learners otherwise treat as unrelated.",
      quiz: [
        {
          prompt: "In physics, work is done when a force moves an object through a…",
          options: ["distance in the direction of the force", "circle", "change of colour", "rise in temperature"],
          correctIndex: 0,
          explanation: "Work = force × distance moved in the force's direction.",
        },
        {
          prompt: "The formula for work is…",
          options: ["W = F × d", "W = m × v", "W = F ÷ d", "W = m × g"],
          correctIndex: 0,
          explanation: "Work equals force times distance.",
        },
        {
          prompt: "The SI unit of work and energy is the…",
          options: ["joule (J)", "newton (N)", "watt (W)", "metre (m)"],
          correctIndex: 0,
          explanation: "Both work and energy are measured in joules.",
        },
        {
          prompt: "If an object does not move, the work done on it is…",
          options: ["zero", "very large", "equal to its weight", "negative"],
          correctIndex: 0,
          explanation: "No distance moved means no work (W = F × 0 = 0).",
        },
        {
          prompt: "A force of 10 N moves a box 4 m. The work done is…",
          options: ["40 J", "14 J", "2.5 J", "400 J"],
          correctIndex: 0,
          explanation: "W = 10 × 4 = 40 J.",
        },
        {
          prompt: "Energy is best defined as the…",
          options: ["capacity to do work", "amount of force", "speed of an object", "distance travelled"],
          correctIndex: 0,
          explanation: "Energy is the capacity (ability) to do work.",
        },
        {
          prompt: "The energy a body has because of its motion is…",
          options: ["kinetic energy", "potential energy", "chemical energy", "nuclear energy"],
          correctIndex: 0,
          explanation: "Motion energy is kinetic energy.",
        },
        {
          prompt: "The formula for kinetic energy is…",
          options: ["½mv²", "mgh", "F × d", "m × g"],
          correctIndex: 0,
          explanation: "KE = ½mv².",
        },
        {
          prompt: "Gravitational potential energy depends on mass, gravity and…",
          options: ["height", "speed", "colour", "time"],
          correctIndex: 0,
          explanation: "PE = mgh, so it depends on height.",
        },
        {
          prompt: "The formula for gravitational potential energy is…",
          options: ["mgh", "½mv²", "F ÷ d", "m + g + h"],
          correctIndex: 0,
          explanation: "PE = mgh.",
        },
        {
          prompt: "The principle of conservation of energy states that energy cannot be…",
          options: ["created or destroyed", "changed in form", "measured", "stored"],
          correctIndex: 0,
          explanation: "Energy is only converted, never created or destroyed.",
        },
        {
          prompt: "As a ball falls, its potential energy is converted into…",
          options: ["kinetic energy", "more potential energy", "mass", "force"],
          correctIndex: 0,
          explanation: "Falling converts PE into KE.",
        },
        {
          prompt: "A 2 kg object moves at 3 m/s. Its kinetic energy is…",
          options: ["9 J", "6 J", "3 J", "18 J"],
          correctIndex: 0,
          explanation: "KE = ½ × 2 × 3² = ½ × 2 × 9 = 9 J.",
        },
        {
          prompt: "A 5 kg object is 4 m high (g = 10). Its potential energy is…",
          options: ["200 J", "20 J", "50 J", "9 J"],
          correctIndex: 0,
          explanation: "PE = mgh = 5 × 10 × 4 = 200 J.",
        },
        {
          prompt: "One joule is the work done when a force of 1 N moves an object…",
          options: ["1 metre", "1 second", "1 kilogram", "10 metres"],
          correctIndex: 0,
          explanation: "1 J = 1 N × 1 m.",
        },
        {
          prompt: "Holding a heavy bag still, without moving it, does…",
          options: ["no physical work", "maximum work", "negative work", "double work"],
          correctIndex: 0,
          explanation: "With no movement there is no work in the physics sense.",
        },
        {
          prompt: "Which is a form of stored (potential) energy?",
          options: ["chemical energy in food", "the motion of a car", "the sound of a bell", "the light of a lamp"],
          correctIndex: 0,
          explanation: "Chemical energy is stored energy.",
        },
        {
          prompt: "When a ball hits the ground, its kinetic energy mainly becomes…",
          options: ["heat and sound", "more height", "mass", "electricity"],
          correctIndex: 0,
          explanation: "On impact the KE is transferred to heat and sound.",
        },
        {
          prompt: "Work done lifting an object is stored in the object as…",
          options: ["gravitational potential energy", "kinetic energy", "sound energy", "light energy"],
          correctIndex: 0,
          explanation: "Lifting stores energy as gravitational PE.",
        },
        {
          prompt: "If a 10 kg object at height has 500 J of PE and then falls, its KE just before landing is (ignoring air resistance)…",
          options: ["500 J", "50 J", "250 J", "0 J"],
          correctIndex: 0,
          explanation: "By conservation of energy, all 500 J of PE becomes KE.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "A man pushes a cart with a force of 50 N and moves it 8 m. Calculate the work done.",
          answerKey:
            "W = F × d = 50 × 8 = 400 J. Award marks for the correct formula, substitution and answer with units.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "A 4 kg ball is held 5 m above the ground (g = 10 m/s²). Calculate its gravitational potential energy, and state its kinetic energy just before it hits the ground if it is dropped.",
          answerKey:
            "PE = mgh = 4 × 10 × 5 = 200 J. By conservation of energy, KE just before landing = 200 J. Award marks for the PE calculation and the correct application of energy conservation.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A force is applied to a wall but the wall does not move. The work done is…",
          options: ["zero", "large", "equal to the force", "equal to the weight of the wall"],
          correctIndex: 0,
          answerKey: "No distance is moved, so W = F × 0 = 0.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Using a swinging pendulum or a falling ball as an example, explain the principle of conservation of energy.",
          answerKey:
            "A strong answer states that energy cannot be created or destroyed, only changed in form. For a falling ball: at the top it has maximum gravitational potential energy and no kinetic energy; as it falls, PE is converted to KE (height falls, speed rises) so that at the bottom it has maximum KE and least PE; the total energy remains constant, and on impact the energy is transferred to heat and sound. (A pendulum answer describes PE↔KE swapping at the top and bottom of each swing.) Award marks for the statement of the principle and a correct energy-conversion description.",
          marks: 5,
        },
      ],
    },
    {
      slug: "power",
      title: "Power",
      objective:
        "By the end of the topic, learners should be able to define power as the rate of doing work, calculate power using its formula, state its unit, and relate power to work, energy and time.",
      estimatedMinutes: 130,
      notes: `## What power measures

Two machines may do the **same amount of work**, but one may do it **faster**. **Power** measures how **quickly** work is done — the **rate of doing work** (or of transferring energy).

$$P = \\frac{W}{t}$$

- **P** = power, measured in **watts (W)**
- **W** = work done (or energy transferred), in joules (J)
- **t** = time taken, in seconds (s)

**One watt** is a rate of **one joule per second** (1 W = 1 J/s).

## Bigger units

Because a watt is small, larger units are common:

- **kilowatt (kW)** = 1 000 W
- **megawatt (MW)** = 1 000 000 W

The power of light bulbs, motors and generators is given in watts or kilowatts.

## Power, work and time

Rearranging P = W/t gives useful forms:

- Work done: **W = P × t**
- Time taken: **t = W ÷ P**

Since work equals energy transferred, power is also **energy ÷ time**. A 100 W bulb transfers 100 J of energy every second.

## Why power matters

Power tells you how powerful a machine is, not just how much work it can eventually do. A strong engine and a weak one might both lift a load 10 m — the same work — but the powerful engine does it in far less time, so it has **greater power**. This is why engines, pumps and generators are rated by their power.`,
      workedExample: `**Problem.** A pump lifts 600 kg of water through a height of 5 m in 20 seconds (g = 10 m/s²). Find (a) the work done and (b) the power of the pump.

**Part (a) — work done**
The work done in lifting equals the gain in potential energy:
W = mgh = 600 × 10 × 5 = 30 000 J = **30 000 J (30 kJ)**.

**Part (b) — power**
Power is work done divided by time:
P = W ÷ t = 30 000 ÷ 20 = **1 500 W** = **1.5 kW**.

**Conclusion:** the pump does 30 000 J of work and, because it does it in 20 seconds, its power is 1 500 watts (1.5 kilowatts). If a second pump did the **same** 30 000 J of work in only 10 seconds, its power would be 3 000 W — twice as powerful, because power depends on how *fast* the work is done.`,
      teachingTip:
        "Keep work and power distinct in learners' minds: work is 'how much', power is 'how fast'. A good class demonstration is two students carrying identical loads up the same stairs — one quickly, one slowly. They do the same work but different power. Then drill the three forms P = W/t, W = P×t and t = W/P so learners can find any one of the three quantities.",
      quiz: [
        {
          prompt: "Power is defined as the…",
          options: ["rate of doing work", "amount of force", "total energy stored", "distance moved"],
          correctIndex: 0,
          explanation: "Power is how fast work is done (work per unit time).",
        },
        {
          prompt: "The formula for power is…",
          options: ["P = W ÷ t", "P = W × t", "P = F × d", "P = m × g"],
          correctIndex: 0,
          explanation: "Power = work done ÷ time taken.",
        },
        {
          prompt: "The SI unit of power is the…",
          options: ["watt (W)", "joule (J)", "newton (N)", "second (s)"],
          correctIndex: 0,
          explanation: "Power is measured in watts.",
        },
        {
          prompt: "One watt is equal to…",
          options: ["one joule per second", "one newton per metre", "one joule per metre", "one metre per second"],
          correctIndex: 0,
          explanation: "1 W = 1 J/s.",
        },
        {
          prompt: "A machine does 200 J of work in 4 s. Its power is…",
          options: ["50 W", "800 W", "0.02 W", "204 W"],
          correctIndex: 0,
          explanation: "P = 200 ÷ 4 = 50 W.",
        },
        {
          prompt: "One kilowatt equals…",
          options: ["1 000 W", "100 W", "1 000 000 W", "10 W"],
          correctIndex: 0,
          explanation: "1 kW = 1 000 W.",
        },
        {
          prompt: "If two machines do the same work but one is faster, the faster one has…",
          options: ["greater power", "less power", "the same power", "no power"],
          correctIndex: 0,
          explanation: "Doing the same work in less time means more power.",
        },
        {
          prompt: "Rearranging P = W/t, the work done is…",
          options: ["W = P × t", "W = P ÷ t", "W = t ÷ P", "W = P + t"],
          correctIndex: 0,
          explanation: "Multiply both sides by t: W = P × t.",
        },
        {
          prompt: "A 100 W bulb transfers how much energy each second?",
          options: ["100 J", "1 J", "1 000 J", "10 J"],
          correctIndex: 0,
          explanation: "100 W = 100 J per second.",
        },
        {
          prompt: "A motor with power 500 W runs for 10 s. The work it does is…",
          options: ["5 000 J", "50 J", "510 J", "5 J"],
          correctIndex: 0,
          explanation: "W = P × t = 500 × 10 = 5 000 J.",
        },
        {
          prompt: "Power can also be described as energy transferred per unit of…",
          options: ["time", "distance", "force", "mass"],
          correctIndex: 0,
          explanation: "Power = energy ÷ time.",
        },
        {
          prompt: "A crane does 12 000 J of work in 30 s. Its power is…",
          options: ["400 W", "360 000 W", "40 W", "12 030 W"],
          correctIndex: 0,
          explanation: "P = 12 000 ÷ 30 = 400 W.",
        },
        {
          prompt: "One megawatt equals…",
          options: ["1 000 000 W", "1 000 W", "100 W", "10 000 W"],
          correctIndex: 0,
          explanation: "1 MW = one million watts.",
        },
        {
          prompt: "Which quantity tells you how quickly a machine works?",
          options: ["power", "work", "force", "distance"],
          correctIndex: 0,
          explanation: "Power measures the rate of doing work.",
        },
        {
          prompt: "If a device uses 2 000 J in 5 s, its power is…",
          options: ["400 W", "10 000 W", "40 W", "2 005 W"],
          correctIndex: 0,
          explanation: "P = 2 000 ÷ 5 = 400 W.",
        },
        {
          prompt: "To find the time taken, the formula is…",
          options: ["t = W ÷ P", "t = W × P", "t = P ÷ W", "t = P + W"],
          correctIndex: 0,
          explanation: "From P = W/t, t = W ÷ P.",
        },
        {
          prompt: "Two engines lift the same load the same height, but engine A is quicker. Engine A has…",
          options: ["greater power", "less power", "the same power", "no work done"],
          correctIndex: 0,
          explanation: "Same work in less time = greater power.",
        },
        {
          prompt: "A 60 W bulb left on for 10 s transfers…",
          options: ["600 J", "6 J", "70 J", "60 J"],
          correctIndex: 0,
          explanation: "Energy = P × t = 60 × 10 = 600 J.",
        },
        {
          prompt: "The power of large generators is usually given in…",
          options: ["kilowatts or megawatts", "joules", "newtons", "metres"],
          correctIndex: 0,
          explanation: "Big machines are rated in kW or MW.",
        },
        {
          prompt: "Work is 'how much' is done; power is…",
          options: ["how fast it is done", "how heavy the object is", "how far it moves", "how hot it gets"],
          correctIndex: 0,
          explanation: "Power is the rate — how fast the work is done.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define power and state its SI unit.",
          answerKey:
            "Power is the rate of doing work (work done or energy transferred per unit time). Its SI unit is the watt (W), where 1 W = 1 J/s. Award marks for the definition and the unit.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "A machine does 6 000 J of work in 15 seconds. Calculate its power.",
          answerKey:
            "P = W ÷ t = 6 000 ÷ 15 = 400 W. Award marks for the correct formula, substitution and answer with units.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A 250 W motor runs for 8 seconds. How much work does it do?",
          options: ["2 000 J", "31.25 J", "258 J", "2 000 W"],
          correctIndex: 0,
          answerKey: "W = P × t = 250 × 8 = 2 000 J.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Two workers each lift a load of 300 J of work up a flight of stairs. Worker A takes 5 s and worker B takes 10 s. Explain who is more powerful and support your answer with calculations.",
          answerKey:
            "Worker A: P = 300 ÷ 5 = 60 W. Worker B: P = 300 ÷ 10 = 30 W. Although both do the same work (300 J), worker A does it in less time, so worker A is more powerful (60 W versus 30 W). A strong answer explains that power depends on how fast the work is done, not just the amount, and supports it with both calculations. Award marks for both power calculations and the correct, justified conclusion.",
          marks: 5,
        },
      ],
    },
  ],
};
