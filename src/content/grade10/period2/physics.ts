import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 10,
// Semester One, Period II: Velocity and Acceleration — the elements of
// motion, uniformly accelerated motion and its equations, motion graphs,
// freely falling bodies and Newton's laws of motion and gravitation.
export const physicsG10P2: PeriodContent = {
  grade: 10,
  number: 2,
  title: "Velocity and Acceleration",
  summary:
    "Period II of the MoE Grade 10 Physics syllabus. Learners distinguish distance from displacement and speed from velocity, calculate acceleration, apply the equations of uniformly accelerated motion, read motion graphs, and use Newton's laws of motion and universal gravitation, including freely falling bodies.",
  topics: [
    {
      slug: "describing-motion",
      title: "Describing Motion and the Equations of Uniform Acceleration",
      objective:
        "By the end of the topic, learners should be able to distinguish distance from displacement and speed from velocity, calculate acceleration, and apply the equations of uniformly accelerated motion to solve problems.",
      estimatedMinutes: 170,
      notes: `## Introduction

The most familiar thing in the world is that things **move** — people walk, cars drive, rain falls. **Mechanics** begins by describing motion precisely: not just "fast" or "far", but exact distances, speeds and accelerations. Once motion is described with the right quantities, a small set of **equations** lets us predict where a moving object will be and how fast it will be going. This topic sets up those quantities and the equations of uniformly accelerated motion.

## Distance and displacement

- **Distance** is the total length of the path travelled. It is a **scalar** — it has size only. Unit: metre (m).
- **Displacement** is the straight-line distance from start to finish, **in a stated direction**. It is a **vector** — it has size *and* direction.

If you walk 3 m east then 3 m west, the **distance** is 6 m but the **displacement** is 0 (you end where you began).

## Speed, velocity and acceleration

- **Speed** = distance ÷ time. A scalar. Unit: metre per second (m/s).
- **Velocity** = displacement ÷ time — speed in a stated direction. A vector.
- **Acceleration** = the rate of change of velocity.

$$a = \\frac{v - u}{t}$$

where **u** = initial velocity, **v** = final velocity, **t** = time. Unit of acceleration: metre per second squared (m/s²). If velocity decreases, acceleration is negative (a **deceleration**).

## Uniform (constant) acceleration

An object has **uniform acceleration** when its velocity changes by equal amounts in equal times — for example a ball rolling down a straight slope, or an object falling freely.

## The equations of uniformly accelerated motion

For constant acceleration, four equations link the quantities u, v, a, t and s (displacement):

1. **v = u + at**
2. **s = ut + ½at²**
3. **v² = u² + 2as**
4. **s = ½(u + v)t**

Choose the equation that contains the three quantities you know and the one you want to find.

## Worked relationships

- Average velocity for uniform acceleration = (u + v) ÷ 2.
- A body starting **from rest** has u = 0, which simplifies the equations (e.g. s = ½at²).

## Units and sign convention

Always work in SI units — metres, seconds, m/s, m/s². Pick one direction as positive; a velocity or acceleration in the opposite direction is then negative. Keeping the signs consistent is what separates a correct answer from a wrong one.

## Common errors and misconceptions

- **Confusing speed and velocity** — speed is a scalar (size only); velocity is a vector (size *and* direction). An object moving at steady speed round a circle has changing velocity.
- **Thinking acceleration means "speeding up" only** — acceleration is any *change* in velocity: speeding up, slowing down (negative acceleration/deceleration), or changing direction.
- **Forgetting u = 0 for "starts from rest"** — this simplifies the equations; missing it gives wrong answers.
- **Mixing up the equations** — list what you know (u, v, a, s, t), then pick the equation containing exactly those; don't guess.`,
      workedExample: `**Problem.** A car starts from rest and accelerates uniformly, reaching 20 m/s in 8 s. Find (a) its acceleration, and (b) the distance it travels in that time.

**List what is given**
- Initial velocity u = 0 (starts from rest)
- Final velocity v = 20 m/s
- Time t = 8 s

**Part (a) — acceleration**
Use a = (v − u)/t:

a = (20 − 0) / 8 = 20/8 = **2.5 m/s²**

**Part (b) — distance**
We know u, t and now a, and want s, so use s = ut + ½at²:

s = (0)(8) + ½(2.5)(8²)
 = 0 + ½ × 2.5 × 64
 = 1.25 × 64
 = **80 m**

**Check** with a different equation, s = ½(u + v)t = ½(0 + 20)(8) = ½ × 160 = 80 m. ✓

The car accelerates at 2.5 m/s² and covers 80 m in the 8 seconds.`,
      teachingTip:
        "Insist learners write down u, v, a, t and s as a labelled list before touching an equation — most errors come from mixing up initial and final velocity, or from not noticing 'starts from rest' means u = 0. Teach them to pick the equation by asking 'which one has my three knowns and my unknown?' rather than memorising which equation goes with which problem.",
      quiz: [
        {
          prompt: "Which quantity is a vector?",
          options: ["displacement", "distance", "speed", "time"],
          correctIndex: 0,
          explanation: "Displacement has both size and direction, so it is a vector.",
        },
        {
          prompt: "Distance is best described as a…",
          options: ["scalar with size only", "vector with direction", "force", "type of acceleration"],
          correctIndex: 0,
          explanation: "Distance has magnitude but no direction — a scalar.",
        },
        {
          prompt: "The SI unit of speed is…",
          options: ["metre per second (m/s)", "metre (m)", "second (s)", "m/s²"],
          correctIndex: 0,
          explanation: "Speed = distance/time, so its unit is m/s.",
        },
        {
          prompt: "Velocity is defined as…",
          options: [
            "displacement per unit time",
            "distance per unit time",
            "change of acceleration",
            "force times time",
          ],
          correctIndex: 0,
          explanation: "Velocity is displacement ÷ time — speed in a direction.",
        },
        {
          prompt: "Acceleration is the rate of change of…",
          options: ["velocity", "distance", "mass", "force"],
          correctIndex: 0,
          explanation: "a = change in velocity ÷ time.",
        },
        {
          prompt: "The SI unit of acceleration is…",
          options: ["m/s²", "m/s", "m", "s"],
          correctIndex: 0,
          explanation: "Acceleration is (m/s) per second = m/s².",
        },
        {
          prompt: "If you walk 5 m north then 5 m south, your displacement is…",
          options: ["0 m", "10 m", "5 m", "25 m"],
          correctIndex: 0,
          explanation: "You return to the start, so displacement is zero (distance is 10 m).",
        },
        {
          prompt: "Which equation gives final velocity for uniform acceleration?",
          options: ["v = u + at", "s = ut + ½at²", "v² = u² + 2as", "s = ½(u+v)t"],
          correctIndex: 0,
          explanation: "v = u + at links velocity, acceleration and time.",
        },
        {
          prompt: "A body 'starting from rest' has an initial velocity u of…",
          options: ["0", "10 m/s", "the final velocity", "9.8 m/s"],
          correctIndex: 0,
          explanation: "From rest means it is not moving initially, so u = 0.",
        },
        {
          prompt: "A car speeds up from 10 m/s to 30 m/s in 4 s. Its acceleration is…",
          options: ["5 m/s²", "20 m/s²", "10 m/s²", "40 m/s²"],
          correctIndex: 0,
          explanation: "a = (30 − 10)/4 = 20/4 = 5 m/s².",
        },
        {
          prompt: "A negative acceleration means the object is…",
          options: ["slowing down", "speeding up", "at rest", "moving in a circle"],
          correctIndex: 0,
          explanation: "Negative (deceleration) means velocity is decreasing.",
        },
        {
          prompt: "Which is a scalar quantity?",
          options: ["speed", "velocity", "displacement", "acceleration"],
          correctIndex: 0,
          explanation: "Speed has magnitude only; the others have direction.",
        },
        {
          prompt: "For a body moving with uniform acceleration from rest, s = ?",
          options: ["½at²", "at", "u + at", "2as"],
          correctIndex: 0,
          explanation: "With u = 0, s = ut + ½at² becomes ½at².",
        },
        {
          prompt: "A stone reaches 12 m/s from rest in 3 s. Its acceleration is…",
          options: ["4 m/s²", "36 m/s²", "9 m/s²", "12 m/s²"],
          correctIndex: 0,
          explanation: "a = (12 − 0)/3 = 4 m/s².",
        },
        {
          prompt: "The average velocity during uniform acceleration is…",
          options: ["(u + v) ÷ 2", "u × v", "v − u", "a × t²"],
          correctIndex: 0,
          explanation: "For uniform acceleration the average is the mean of u and v.",
        },
        {
          prompt: "Uniform acceleration means velocity changes by…",
          options: [
            "equal amounts in equal times",
            "different amounts each second",
            "nothing",
            "only its direction",
          ],
          correctIndex: 0,
          explanation: "Constant acceleration = equal velocity changes per equal time.",
        },
        {
          prompt: "Which equation would you use to find v when you know u, a and s but not t?",
          options: ["v² = u² + 2as", "v = u + at", "s = ut + ½at²", "s = ½(u+v)t"],
          correctIndex: 0,
          explanation: "v² = u² + 2as contains u, a, s and v — no t needed.",
        },
        {
          prompt: "A bus travelling at 15 m/s stops in 5 s. Its acceleration is…",
          options: ["−3 m/s²", "3 m/s²", "−75 m/s²", "20 m/s²"],
          correctIndex: 0,
          explanation: "a = (0 − 15)/5 = −3 m/s² (a deceleration).",
        },
        {
          prompt: "Which pair correctly matches a quantity to its type?",
          options: [
            "velocity — vector",
            "distance — vector",
            "speed — vector",
            "displacement — scalar",
          ],
          correctIndex: 0,
          explanation: "Velocity is a vector; distance and speed are scalars; displacement is a vector.",
        },
        {
          prompt: "An object moves 100 m in 20 s at constant speed. Its speed is…",
          options: ["5 m/s", "2000 m/s", "0.2 m/s", "120 m/s"],
          correctIndex: 0,
          explanation: "Speed = distance/time = 100/20 = 5 m/s.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Explain the difference between distance and displacement, giving one example that shows they can differ.",
          answerKey:
            "Distance is the total path length (scalar); displacement is the straight-line distance from start to finish in a stated direction (vector). Example: walking 4 m east then 4 m west gives a distance of 8 m but a displacement of 0. Award marks for both definitions and a valid distinguishing example.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "A motorcycle accelerates uniformly from 6 m/s to 24 m/s in 6 s. Calculate its acceleration.",
          answerKey:
            "a = (v − u)/t = (24 − 6)/6 = 18/6 = 3 m/s². Award marks for the correct formula, substitution and answer with units.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "A car starts from rest and accelerates at 2 m/s² for 10 s. Find the distance travelled.",
          answerKey:
            "s = ut + ½at² = 0 + ½(2)(10²) = ½ × 2 × 100 = 100 m. Award marks for choosing the correct equation, using u = 0, and the final answer of 100 m.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which quantity has the unit m/s²?",
          options: ["acceleration", "velocity", "displacement", "speed"],
          correctIndex: 0,
          answerKey: "Acceleration is measured in metres per second squared.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "A ball is thrown straight up and returns to the thrower's hand. Discuss its distance and displacement over the whole flight, and describe how its velocity changes on the way up and on the way down.",
          answerKey:
            "A strong answer: over the whole flight the displacement is zero (it returns to the start) while the distance is twice the height reached. On the way up the velocity decreases (the ball decelerates) until it is momentarily zero at the top; on the way down the velocity increases in the opposite direction (it accelerates downward). Marks for the distance-vs-displacement contrast and a correct description of the velocity change up and down.",
          marks: 5,
        },
      ],
    },
    {
      slug: "motion-graphs-and-newtons-laws",
      title: "Motion Graphs, Free Fall and Newton's Laws",
      objective:
        "By the end of the topic, learners should be able to interpret displacement-time and velocity-time graphs, describe the motion of freely falling bodies under gravity, and state and apply Newton's three laws of motion and the law of universal gravitation.",
      estimatedMinutes: 170,
      notes: `## Introduction

Numbers describe motion, but a **graph** shows it at a glance — you can *see* an object speeding up, stopping, or turning back. And behind all motion lie **Newton's three laws**, three short statements that explain why things move as they do, from a falling mango to a rocket. This topic reads motion from displacement–time and velocity–time graphs, describes **free fall** under gravity, and states and applies **Newton's laws** and the law of universal gravitation.

## Motion graphs

Graphs are a powerful way to describe motion.

**Displacement–time graphs**
- A **horizontal line** means the object is **at rest** (displacement not changing).
- A **straight sloping line** means **constant velocity**; the **gradient (slope) = velocity**.
- A **curved line** means the velocity is changing (acceleration).

**Velocity–time graphs**
- A **horizontal line** means **constant velocity** (zero acceleration).
- A **straight sloping line** means **constant acceleration**; the **gradient = acceleration**.
- The **area under the graph = the distance travelled**.

\`\`\`svg A velocity–time graph for uniform acceleration
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Velocity time graph, straight line rising from origin">
  <line x1="40" y1="160" x2="280" y2="160" stroke="#0369a1" stroke-width="2"/>
  <line x1="40" y1="160" x2="40" y2="20" stroke="#0369a1" stroke-width="2"/>
  <line x1="40" y1="160" x2="240" y2="50" stroke="#e11d48" stroke-width="2.5"/>
  <polygon points="40,160 240,160 240,50" fill="#bae6fd" fill-opacity="0.5"/>
  <text x="150" y="185" font-size="12" text-anchor="middle" fill="#0369a1">time (s)</text>
  <text x="14" y="95" font-size="12" fill="#0369a1" transform="rotate(-90 14,95)">velocity (m/s)</text>
  <text x="150" y="120" font-size="11" fill="#0c4a6e">area = distance</text>
  <text x="180" y="80" font-size="11" fill="#e11d48">slope = acceleration</text>
</svg>
\`\`\`

## Freely falling bodies

A **freely falling body** moves under gravity alone (ignoring air resistance). Near the Earth's surface all objects fall with the same **acceleration due to gravity**, g ≈ **9.8 m/s²** (often taken as 10 m/s²).

- Objects speed up as they fall (a = +g).
- Thrown upward, they slow down (a = −g), stop momentarily, then fall back.
- In the absence of air resistance a feather and a stone fall at the same rate.

The equations of motion apply, using a = g. For a body dropped from rest, v = gt and the distance fallen s = ½gt².

## Newton's laws of motion

- **First law (inertia):** a body stays at rest, or keeps moving at constant velocity, **unless a resultant force acts on it**. Objects resist changes to their motion — this resistance is **inertia**.
- **Second law:** the resultant force equals mass times acceleration:

$$F = ma$$

Force is measured in **newtons (N)**; 1 N is the force that gives a 1 kg mass an acceleration of 1 m/s².

- **Third law:** for every action there is an **equal and opposite reaction**. Forces always come in pairs acting on different objects.

## Newton's law of universal gravitation

Every object attracts every other object with a **gravitational force**. The force is larger for larger masses and weaker as the distance between them grows. This same force keeps the Moon orbiting the Earth and makes objects fall to the ground — weight is the pull of the Earth's gravity on a mass (W = mg).

## Common errors and misconceptions

- **Reading a graph's shape wrongly** — on a *displacement–time* graph the **gradient (slope)** is the velocity; on a *velocity–time* graph the gradient is the **acceleration** and the **area under the line** is the distance. Don't confuse the two graph types.
- **Thinking heavier objects fall faster** — ignoring air resistance, all objects fall with the **same** acceleration g (~10 m/s²); a stone and a feather would land together in a vacuum.
- **Misreading Newton's third law** — the action and reaction forces act on **different** objects, so they never cancel each other out.
- **Believing a moving object needs a constant force** — by the first law, an object keeps moving at constant velocity with **no** net force; force is needed only to *change* motion.`,
      workedExample: `**Problem.** A stone of mass 2 kg is dropped from a cliff. Taking g = 10 m/s², find (a) its velocity after 3 s, (b) the distance it has fallen in that time, and (c) the force of gravity acting on it.

**Given**
- Mass m = 2 kg
- Dropped from rest → u = 0
- Acceleration a = g = 10 m/s²
- Time t = 3 s

**Part (a) — velocity after 3 s**
v = u + at = 0 + (10)(3) = **30 m/s** (downward).

**Part (b) — distance fallen**
s = ut + ½at² = 0 + ½(10)(3²) = ½ × 10 × 9 = **45 m**.

**Part (c) — force of gravity (its weight)**
By Newton's second law, F = ma, using a = g:
F = 2 × 10 = **20 N**, directed downward.

So after 3 s the stone is moving at 30 m/s, has fallen 45 m, and is pulled down by a gravitational force of 20 N. (Notice the 2 kg mass did not affect the acceleration — all objects fall at g.)`,
      teachingTip:
        "For motion graphs, hammer home the two 'what does the line tell you' rules separately for each graph type — students routinely read a velocity-time graph as if it were displacement-time. A quick discriminator: on a velocity-time graph, a horizontal line means moving at steady speed; on a displacement-time graph, a horizontal line means stopped. Practise by having them narrate a journey (start, speed up, cruise, stop) as both graph types.",
      quiz: [
        {
          prompt: "On a displacement–time graph, a horizontal line means the object is…",
          options: ["at rest", "accelerating", "moving at constant speed", "falling"],
          correctIndex: 0,
          explanation: "Flat line = displacement not changing = at rest.",
        },
        {
          prompt: "On a velocity–time graph, the gradient (slope) represents…",
          options: ["acceleration", "distance", "speed", "force"],
          correctIndex: 0,
          explanation: "Change of velocity over time is acceleration.",
        },
        {
          prompt: "On a velocity–time graph, the area under the line represents…",
          options: ["distance travelled", "acceleration", "force", "mass"],
          correctIndex: 0,
          explanation: "Area = velocity × time = distance.",
        },
        {
          prompt: "The acceleration due to gravity near Earth's surface is about…",
          options: ["9.8 m/s²", "1 m/s²", "100 m/s²", "0 m/s²"],
          correctIndex: 0,
          explanation: "g ≈ 9.8 m/s² (often rounded to 10 m/s²).",
        },
        {
          prompt: "Ignoring air resistance, a feather and a stone dropped together will…",
          options: ["fall at the same rate", "the stone falls faster", "the feather falls faster", "neither falls"],
          correctIndex: 0,
          explanation: "Without air resistance all objects fall with acceleration g.",
        },
        {
          prompt: "Newton's first law is also called the law of…",
          options: ["inertia", "gravity", "reaction", "acceleration"],
          correctIndex: 0,
          explanation: "It describes inertia — resistance to change in motion.",
        },
        {
          prompt: "Newton's second law is written as…",
          options: ["F = ma", "F = m/a", "F = a/m", "F = mv"],
          correctIndex: 0,
          explanation: "Resultant force = mass × acceleration.",
        },
        {
          prompt: "The SI unit of force is the…",
          options: ["newton (N)", "joule (J)", "watt (W)", "metre (m)"],
          correctIndex: 0,
          explanation: "Force is measured in newtons.",
        },
        {
          prompt: "Newton's third law states that for every action there is…",
          options: [
            "an equal and opposite reaction",
            "a larger reaction",
            "no reaction",
            "a smaller reaction",
          ],
          correctIndex: 0,
          explanation: "Action and reaction are equal in size and opposite in direction.",
        },
        {
          prompt: "The force that gives a 1 kg mass an acceleration of 1 m/s² is…",
          options: ["1 N", "1 kg", "9.8 N", "1 J"],
          correctIndex: 0,
          explanation: "By definition, 1 N = 1 kg × 1 m/s².",
        },
        {
          prompt: "A ball dropped from rest has, after 2 s (g = 10 m/s²), a velocity of…",
          options: ["20 m/s", "10 m/s", "5 m/s", "40 m/s"],
          correctIndex: 0,
          explanation: "v = gt = 10 × 2 = 20 m/s.",
        },
        {
          prompt: "What is the weight of a 5 kg object (g = 10 m/s²)?",
          options: ["50 N", "5 N", "15 N", "0.5 N"],
          correctIndex: 0,
          explanation: "W = mg = 5 × 10 = 50 N.",
        },
        {
          prompt: "On a velocity–time graph, a horizontal line means…",
          options: ["constant velocity", "the object is at rest", "increasing acceleration", "the object is falling"],
          correctIndex: 0,
          explanation: "Flat velocity line = no change in velocity = constant velocity.",
        },
        {
          prompt: "A resultant force of 12 N acts on a 3 kg mass. Its acceleration is…",
          options: ["4 m/s²", "36 m/s²", "9 m/s²", "0.25 m/s²"],
          correctIndex: 0,
          explanation: "a = F/m = 12/3 = 4 m/s².",
        },
        {
          prompt: "A body thrown straight up momentarily has zero velocity at…",
          options: ["the highest point", "the start", "halfway up", "the ground"],
          correctIndex: 0,
          explanation: "At the top it stops before falling back down.",
        },
        {
          prompt: "Which statement fits Newton's first law?",
          options: [
            "A book on a table stays still until pushed",
            "A rocket pushes gas down and rises up",
            "Heavier objects need more force to accelerate",
            "The Moon orbits Earth by gravity",
          ],
          correctIndex: 0,
          explanation: "An object at rest stays at rest until a resultant force acts.",
        },
        {
          prompt: "Gravitational force between two objects gets weaker as…",
          options: [
            "the distance between them increases",
            "their masses increase",
            "the distance decreases",
            "time passes",
          ],
          correctIndex: 0,
          explanation: "Gravity weakens with greater separation between masses.",
        },
        {
          prompt: "A distance fallen from rest in time t (from s = ½gt²) with g = 10, t = 2 s is…",
          options: ["20 m", "40 m", "10 m", "5 m"],
          correctIndex: 0,
          explanation: "s = ½ × 10 × 2² = ½ × 10 × 4 = 20 m.",
        },
        {
          prompt: "A rocket rising because it pushes exhaust gases downward illustrates Newton's…",
          options: ["third law", "first law", "law of gravitation", "zeroth law"],
          correctIndex: 0,
          explanation: "Action (gas down) and reaction (rocket up) — the third law.",
        },
        {
          prompt: "Weight is best described as…",
          options: [
            "the gravitational force on a mass (W = mg)",
            "the amount of matter in an object",
            "the speed of a falling body",
            "the same as mass",
          ],
          correctIndex: 0,
          explanation: "Weight is the pull of gravity on a mass, W = mg, measured in newtons.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "State what each of the following represents on a velocity–time graph: (a) the gradient of the line, (b) the area under the line.",
          answerKey:
            "(a) The gradient represents the acceleration. (b) The area under the line represents the distance travelled. Award a mark for each correct interpretation.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "A stone is dropped from rest. Taking g = 10 m/s², find its velocity and the distance fallen after 4 s.",
          answerKey:
            "v = gt = 10 × 4 = 40 m/s. s = ½gt² = ½ × 10 × 16 = 80 m. Award marks for the correct use of u = 0 and g, and for both final answers with units.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State Newton's three laws of motion.",
          answerKey:
            "First: an object stays at rest or in uniform motion unless acted on by a resultant force (inertia). Second: resultant force = mass × acceleration (F = ma). Third: for every action there is an equal and opposite reaction. Award a mark per correctly stated law.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A resultant force of 20 N acts on a 4 kg trolley. What is its acceleration?",
          options: ["5 m/s²", "80 m/s²", "0.2 m/s²", "16 m/s²"],
          correctIndex: 0,
          answerKey: "a = F/m = 20/4 = 5 m/s².",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain, using Newton's laws, how a person is able to walk forward on the ground. Refer to at least two of the laws in your answer.",
          answerKey:
            "A strong answer: the foot pushes backward on the ground (action); by the third law the ground pushes the person forward with an equal and opposite reaction, which drives them forward. The second law (F = ma) explains that this forward resultant force accelerates the person. The first law can be referenced: without the ground's push (e.g. on frictionless ice) the person would not start moving. Award marks for correct use of at least two named laws applied to walking.",
          marks: 5,
        },
      ],
    },
  ],
};
