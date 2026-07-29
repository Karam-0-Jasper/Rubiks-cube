import type { SubjectContent } from "@/content/types";

export const physics: SubjectContent = {
  slug: "physics",
  name: "Physics",
  shortName: "Physics",
  description:
    "Measurement, scalars and vectors, linear motion, and Newton's laws.",
  accent: "sky",
  sortOrder: 5,
  teacherCode: "PHY-10-3907",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "Measurement and Motion",
      summary:
        "Learners establish measurement and units, distinguish scalar from vector quantities, describe motion quantitatively, and arrive at Newton's laws as the explanation of what they have described.",
      topics: [
        {
          slug: "measurement",
          title: "Introduction to Physics and Measurement",
          objective:
            "By the end of the lesson, learners should be able to state the fundamental and derived quantities with their SI units, use measuring instruments appropriately, and express answers to a correct number of significant figures.",
          estimatedMinutes: 80,
          notes: `## What physics studies

**Physics** is the study of matter, energy and the interactions between them. Every branch of it rests on measurement, which is why measurement comes first.

## Fundamental quantities

Seven quantities are defined independently; all others are built from them. The five you need at this level:

| Quantity | SI unit | Symbol |
| --- | --- | --- |
| Length | metre | m |
| Mass | kilogram | kg |
| Time | second | s |
| Temperature | kelvin | K |
| Electric current | ampere | A |

The remaining two are amount of substance (mole, mol) and luminous intensity (candela, cd).

## Derived quantities

Formed by combining fundamental quantities.

| Quantity | Formula | SI unit |
| --- | --- | --- |
| Area | length x length | m squared |
| Volume | length cubed | m cubed |
| Density | mass / volume | kg per m cubed |
| Speed | distance / time | m per s |
| Acceleration | velocity change / time | m per s squared |
| Force | mass x acceleration | newton (N) |
| Work / energy | force x distance | joule (J) |
| Power | work / time | watt (W) |

## Prefixes

- kilo (k) = 1000
- centi (c) = one hundredth
- milli (m) = one thousandth
- micro = one millionth
- mega (M) = one million

## Measuring instruments

- **Metre rule** — lengths, to the nearest millimetre
- **Vernier callipers** — small lengths and diameters, to 0.01 cm
- **Micrometer screw gauge** — very small thicknesses, to 0.01 mm
- **Beam balance** — mass
- **Spring balance** — weight, which is a force
- **Measuring cylinder** — volume of liquids, and of irregular solids by displacement
- **Stop watch** — time

## Mass and weight

These are not the same quantity, and confusing them is the commonest error in the topic.

| | Mass | Weight |
| --- | --- | --- |
| What it is | Quantity of matter | Force of gravity on a body |
| SI unit | kilogram | newton |
| Varies with location | No | Yes |
| Measured by | Beam balance | Spring balance |
| Scalar or vector | Scalar | Vector |

W = mg, where g is about 9.8 m per s squared on Earth.

## Errors

- **Random error** — varies unpredictably; reduced by taking repeated readings and averaging.
- **Systematic error** — the same each time, often from a faulty instrument or zero error; not reduced by repetition, and must be corrected.
- **Parallax error** — from reading a scale at an angle. Read at eye level, directly above the mark.

## Significant figures

Give the answer to the same precision as the least precise measurement used. A calculation from measurements of 2.5 cm and 3.14 cm should not be quoted to six decimal places; the data do not support it.`,
          workedExample: `**Question:** A rectangular block of metal measures 4.0 cm by 2.5 cm by 2.0 cm and has a mass of 156 g. Calculate its density in (a) g per cm cubed and (b) kg per m cubed. State your answer to an appropriate number of significant figures.

**Solution**

*Step 1 — find the volume.*

Volume = length x breadth x height

= 4.0 x 2.5 x 2.0

= **20 cm cubed**

*Step 2 — calculate the density in g per cm cubed.*

Density = mass / volume

= 156 / 20

= **7.8 g per cm cubed**

*Check the significant figures.* The measurements are given to two significant figures, so two significant figures in the answer is appropriate. 7.8 is correct.

*Step 3 — convert to kg per m cubed.*

Convert each unit separately rather than guessing the factor.

- 156 g = 156 / 1000 = 0.156 kg
- 1 cm = 0.01 m, so 1 cm cubed = (0.01) cubed = 0.000001 m cubed
- 20 cm cubed = 20 x 0.000001 = 0.00002 m cubed

Density = 0.156 / 0.00002 = **7800 kg per m cubed**

*The shortcut, once you trust it:* multiply g per cm cubed by 1000 to obtain kg per m cubed. 7.8 x 1000 = 7800. But derive it at least once, or you will misremember the direction.

*Sense check:* 7800 kg per m cubed is close to the density of iron, which is plausible for a metal block.

**Answer:** (a) 7.8 g per cm cubed (b) 7800 kg per m cubed`,
          teachingTip:
            "Have every learner measure the same object — the classroom door, a textbook — and write their result on the board. The spread of values does the teaching for you: it makes random error visible, motivates repeated readings, and shows why the last digit of any measurement is uncertain. Then introduce a deliberately faulty instrument, such as a rule with the first centimetre broken off, and let them discover why averaging cannot rescue a systematic error. On mass and weight, refuse to accept the words interchangeably from the first day; ask what a learner's mass and weight would be on the moon, and keep asking until the class answers automatically that the mass is unchanged and the weight is about one sixth.",
          quiz: [
            {
              prompt: "Which of these is a fundamental quantity?",
              options: ["Force", "Density", "Time", "Volume"],
              correctIndex: 2,
              explanation:
                "Time is one of the seven fundamental quantities; the others listed are derived.",
            },
            {
              prompt: "The SI unit of mass is the",
              options: ["gram", "kilogram", "newton", "pound"],
              correctIndex: 1,
              explanation: "The kilogram is the SI base unit of mass.",
            },
            {
              prompt: "Weight differs from mass because weight",
              options: [
                "is measured in kilograms",
                "is a force and varies with location",
                "never changes",
                "is a scalar quantity",
              ],
              correctIndex: 1,
              explanation:
                "Weight is the gravitational force on a body, measured in newtons, and depends on g.",
            },
            {
              prompt: "Which instrument measures the diameter of a thin wire most precisely?",
              options: [
                "Metre rule",
                "Measuring cylinder",
                "Micrometer screw gauge",
                "Beam balance",
              ],
              correctIndex: 2,
              explanation:
                "A micrometer reads to 0.01 mm, far finer than a metre rule.",
            },
            {
              prompt: "Parallax error is avoided by",
              options: [
                "taking many readings",
                "reading the scale at eye level, directly above the mark",
                "using a larger instrument",
                "recording more decimal places",
              ],
              correctIndex: 1,
              explanation:
                "Parallax arises from viewing a scale at an angle and is a positioning error, not a random one.",
            },
            {
              prompt: "The derived unit of force, the newton, is equivalent to",
              options: [
                "kg m per s",
                "kg m per s squared",
                "kg per m cubed",
                "kg m squared per s squared",
              ],
              correctIndex: 1,
              explanation: "From F = ma, the unit is kilogram metre per second squared.",
            },
            {
              prompt: "A density of 2.7 g per cm cubed is equal to",
              options: [
                "0.0027 kg per m cubed",
                "2.7 kg per m cubed",
                "270 kg per m cubed",
                "2700 kg per m cubed",
              ],
              correctIndex: 3,
              explanation: "Multiply g per cm cubed by 1000 to obtain kg per m cubed.",
            },
            {
              prompt: "A systematic error can best be reduced by",
              options: [
                "repeating the measurement many times",
                "checking and correcting the instrument",
                "using more decimal places",
                "changing the observer",
              ],
              correctIndex: 1,
              explanation:
                "Systematic errors shift every reading the same way, so averaging does not remove them.",
            },
            {
              prompt: "The volume of an irregular solid is best found by",
              options: [
                "measuring with a rule",
                "weighing it",
                "displacement of water in a measuring cylinder",
                "using a micrometer",
              ],
              correctIndex: 2,
              explanation:
                "The rise in water level equals the volume of the submerged solid.",
            },
            {
              prompt: "The prefix 'milli' means",
              options: ["one thousand", "one hundredth", "one thousandth", "one million"],
              correctIndex: 2,
              explanation: "Milli denotes a factor of one thousandth.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "State five fundamental quantities with their SI units and symbols, and give three derived quantities showing how each is obtained.",
              answerKey:
                "Fundamental: length/metre/m; mass/kilogram/kg; time/second/s; temperature/kelvin/K; current/ampere/A. Award 1 mark each, up to 5. Derived: area = length x length, unit m squared; density = mass/volume, unit kg per m cubed; speed = distance/time, unit m per s; force = mass x acceleration, unit N. Award 2 marks each for three derived quantities correctly formed with units.",
              marks: 11,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "A block of wood has dimensions 10.0 cm by 5.0 cm by 4.0 cm and a mass of 120 g. Calculate its density in kg per m cubed and state whether it would float in water (density 1000 kg per m cubed).",
              answerKey:
                "Volume = 200 cm cubed. Density = 120/200 = 0.6 g per cm cubed = 600 kg per m cubed. Since 600 is less than 1000, the block floats. Award 3 marks for the volume, 3 for the density with correct conversion, 3 for the correct conclusion with reasoning based on the comparison.",
              marks: 9,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "An astronaut of mass 70 kg travels to the moon, where g is about 1.6 m per s squared. Which statement is correct?",
              options: [
                "Mass and weight both decrease",
                "Mass stays 70 kg, weight decreases",
                "Mass decreases, weight stays the same",
                "Both stay the same",
              ],
              correctIndex: 1,
              answerKey:
                "Mass is the quantity of matter and does not depend on location. Weight is mg and falls because g is smaller on the moon: 70 x 1.6 = 112 N against about 686 N on Earth. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Distinguish between random and systematic errors, giving one example and one method of reducing each.",
              answerKey:
                "Random error varies unpredictably in size and direction between readings, for example slight variations in reaction time when using a stop watch; reduced by taking repeated readings and finding the mean. Systematic error is constant in size and direction, for example a zero error on a spring balance or a rule with a worn end; not reduced by repetition and must be corrected by checking, calibrating or subtracting the known offset. Award 3 marks for each definition with example, 2 marks for each reduction method.",
              marks: 10,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain why a system of standard units is necessary in science, describe the SI system of fundamental and derived quantities, and discuss how measurement uncertainty should be handled when reporting an experimental result.",
              answerKey:
                "Award marks as follows: the need for standardisation — reproducibility of results between workers and places, unambiguous communication, avoidance of the errors that arise from local or arbitrary units, with a supporting example, 6 marks; account of the seven fundamental quantities, with at least five named with units and symbols, 6 marks; explanation of how derived quantities are formed from fundamental ones, with at least three worked illustrations, 6 marks; treatment of uncertainty, covering random and systematic error, repeated readings, and quoting answers to a number of significant figures justified by the data, 8 marks; organisation and clarity, 4 marks. A learner who lists units without addressing why standardisation matters should not exceed 12.",
              marks: 30,
            },
          ],
        },
        {
          slug: "scalars-and-vectors",
          title: "Scalars and Vectors",
          objective:
            "By the end of the lesson, learners should be able to distinguish scalar from vector quantities, add vectors graphically and by calculation, and resolve a vector into perpendicular components.",
          estimatedMinutes: 80,
          notes: `## The distinction

A **scalar** has magnitude only.
A **vector** has both magnitude and direction.

| Scalars | Vectors |
| --- | --- |
| Distance | Displacement |
| Speed | Velocity |
| Mass | Weight |
| Time | Acceleration |
| Energy, work, power | Force |
| Temperature | Momentum |
| Volume, density | Electric field strength |

Note the pairs: distance and displacement, speed and velocity. In each pair the vector carries direction and the scalar does not.

## Distance and displacement

**Distance** is the total path length travelled.
**Displacement** is the straight-line distance from start to finish, in a stated direction.

A learner who walks 3 km east then 3 km west has travelled a **distance** of 6 km but has a **displacement** of zero, being back where they started.

## Representing a vector

By an arrow: its length is proportional to the magnitude, and its direction shows the direction of the quantity.

## Adding vectors

**When they act along the same line:** add if in the same direction, subtract if opposite.

**When they act at right angles:** use Pythagoras for the magnitude and trigonometry for the direction.

Resultant = the square root of (A squared + B squared)

Direction: tan of the angle = opposite / adjacent

**When they act at any angle:** use the parallelogram law. Draw the two vectors from a common point to scale, complete the parallelogram, and the diagonal from that point is the resultant.

## Resolution of vectors

The reverse of addition: splitting one vector into two perpendicular components.

For a vector F acting at an angle to the horizontal:

- **Horizontal component** = F cos(angle)
- **Vertical component** = F sin(angle)

Resolution is what makes inclined-plane and projectile problems tractable — you handle two simple perpendicular problems instead of one awkward one.

## Equilibrium

A body is in equilibrium when the resultant of all forces acting on it is **zero**. Under those conditions it either remains at rest or continues at constant velocity.

For three forces in equilibrium, the three vectors drawn head to tail form a **closed triangle**.`,
          workedExample: `**Question:** Two forces act at a point: 8 N due east and 6 N due north. Find the magnitude and direction of the resultant. Then find the horizontal and vertical components of a 20 N force acting at 30 degrees above the horizontal.

**Solution — Part 1: adding perpendicular vectors**

*Step 1 — sketch.* Draw the 8 N pointing east and the 6 N pointing north from the same point. They are at right angles, so Pythagoras applies.

*Step 2 — magnitude.*

Resultant = square root of (8 squared + 6 squared)

= square root of (64 + 36)

= square root of 100

= **10 N**

*Step 3 — direction.*

Measuring the angle from the east direction:

tan(angle) = opposite / adjacent = 6 / 8 = 0.75

angle = 36.9 degrees

**The resultant is 10 N at 36.9 degrees north of east.**

*Note:* a direction must always accompany the magnitude. An answer of '10 N' alone is incomplete for a vector quantity and loses marks.

**Solution — Part 2: resolving a vector**

*Step 1 — identify the angle.* The force is 20 N at 30 degrees to the horizontal.

*Step 2 — horizontal component.*

Fx = F cos(angle) = 20 x cos 30 = 20 x 0.866 = **17.3 N**

*Step 3 — vertical component.*

Fy = F sin(angle) = 20 x sin 30 = 20 x 0.5 = **10.0 N**

*Step 4 — check.* The components must recombine to give the original force:

square root of (17.3 squared + 10.0 squared) = square root of (299 + 100) = square root of 399 = 20.0 N

The check agrees.

*Which is cosine and which is sine?* The component **adjacent** to the angle takes the cosine; the component **opposite** the angle takes the sine. Draw the triangle rather than memorising, because if the angle is measured from the vertical instead, the two swap over.

**Answer:** resultant 10 N at 36.9 degrees north of east; components 17.3 N horizontal and 10.0 N vertical.`,
          teachingTip:
            "Take the class outside and walk the distance-displacement distinction. Have a learner walk twenty paces forward and twenty back, then ask two questions: how far did they walk, and how far are they from where they started. The two different answers to what sounds like the same question is the whole lesson, and it takes three minutes. For vector addition, a tug-of-war with three ropes at angles gives learners the parallelogram law in their hands before it appears on the board. On resolution, do not let learners memorise 'cos for horizontal'; that fails the moment the angle is measured from the vertical. Insist they sketch the right-angled triangle each time and identify which side is adjacent to the marked angle. The extra ten seconds prevents the single most costly error in the topic.",
          quiz: [
            {
              prompt: "Which of the following is a vector quantity?",
              options: ["Speed", "Mass", "Displacement", "Temperature"],
              correctIndex: 2,
              explanation:
                "Displacement has both magnitude and direction; the others have magnitude only.",
            },
            {
              prompt: "A boy walks 4 km north then 4 km south. His displacement is",
              options: ["8 km", "4 km", "Zero", "2 km"],
              correctIndex: 2,
              explanation:
                "He finishes where he began, so the straight-line distance from start to finish is zero.",
            },
            {
              prompt: "Two forces of 3 N and 4 N act at right angles. The resultant is",
              options: ["1 N", "5 N", "7 N", "12 N"],
              correctIndex: 1,
              explanation:
                "By Pythagoras, the square root of (9 + 16) = the square root of 25 = 5 N.",
            },
            {
              prompt: "The horizontal component of a force F at angle A to the horizontal is",
              options: ["F sin A", "F cos A", "F tan A", "F / cos A"],
              correctIndex: 1,
              explanation:
                "The component adjacent to the angle uses cosine.",
            },
            {
              prompt: "Which pair consists of a scalar and its corresponding vector?",
              options: [
                "Mass and volume",
                "Speed and velocity",
                "Energy and work",
                "Time and temperature",
              ],
              correctIndex: 1,
              explanation:
                "Velocity is speed with a stated direction.",
            },
            {
              prompt: "A body is in equilibrium when",
              options: [
                "it is moving fast",
                "the resultant force on it is zero",
                "only one force acts on it",
                "its mass is constant",
              ],
              correctIndex: 1,
              explanation:
                "With zero resultant it stays at rest or continues at constant velocity.",
            },
            {
              prompt: "Two forces of 5 N and 3 N act in opposite directions. The resultant is",
              options: ["8 N", "2 N", "15 N", "Zero"],
              correctIndex: 1,
              explanation:
                "Opposing collinear forces subtract: 5 - 3 = 2 N, in the direction of the larger force.",
            },
            {
              prompt: "Three forces in equilibrium, drawn head to tail, form",
              options: [
                "A straight line",
                "A closed triangle",
                "A circle",
                "Two parallel lines",
              ],
              correctIndex: 1,
              explanation:
                "A closed figure means the resultant is zero, which is the condition for equilibrium.",
            },
            {
              prompt: "Resolving a vector means",
              options: [
                "adding two vectors together",
                "splitting one vector into perpendicular components",
                "measuring its length",
                "reversing its direction",
              ],
              correctIndex: 1,
              explanation:
                "Resolution is the reverse of vector addition and simplifies two-dimensional problems.",
            },
            {
              prompt: "A force of 10 N acts at 60 degrees to the horizontal. Its vertical component is",
              options: ["5.0 N", "8.7 N", "10 N", "17.3 N"],
              correctIndex: 1,
              explanation:
                "The vertical component is opposite the angle: 10 sin 60 = 10 x 0.866 = 8.7 N.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define scalar and vector quantities, and give four examples of each.",
              answerKey:
                "Scalar: a quantity having magnitude only. Vector: a quantity having both magnitude and direction. Scalars: distance, speed, mass, time, energy, temperature, volume, density. Vectors: displacement, velocity, acceleration, force, weight, momentum. Award 2 marks per definition and 1 mark per correct example up to 8.",
              marks: 12,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Two forces, 12 N due east and 5 N due north, act at a point. Calculate the magnitude and direction of their resultant.",
              answerKey:
                "Magnitude = square root of (144 + 25) = square root of 169 = 13 N. Direction: tan A = 5/12 = 0.4167, so A = 22.6 degrees north of east. Award 4 marks for the magnitude with working, 4 for the direction including the reference direction. Deduct 2 marks if the direction is omitted entirely.",
              marks: 8,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "A car travels 6 km east, then 8 km north. What are its distance travelled and its displacement?",
              options: [
                "14 km and 14 km",
                "10 km and 14 km",
                "14 km and 10 km",
                "10 km and 10 km",
              ],
              correctIndex: 2,
              answerKey:
                "Distance is the total path length, 6 + 8 = 14 km. Displacement is the straight-line separation, the square root of (36 + 64) = 10 km, directed about 53 degrees north of east. Option C.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "A force of 50 N acts at 40 degrees to the horizontal. Resolve it into horizontal and vertical components, and verify your answer.",
              answerKey:
                "Horizontal = 50 cos 40 = 50 x 0.766 = 38.3 N. Vertical = 50 sin 40 = 50 x 0.643 = 32.1 N. Verification: square root of (38.3 squared + 32.1 squared) = square root of (1467 + 1030) = square root of 2497 = 50.0 N, which recovers the original force. Award 3 marks per component and 3 for the verification.",
              marks: 9,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain the difference between distance and displacement and between speed and velocity, using a worked example of a journey of your own devising. Then describe how two vectors acting at an angle may be added, referring both to the graphical method and to calculation.",
              answerKey:
                "Award marks as follows: definitions of distance and displacement, and of speed and velocity, with the scalar/vector distinction made explicit, 6 marks; an original worked journey producing different numerical values for distance and displacement, and correspondingly for average speed and average velocity, 8 marks; graphical addition by the parallelogram law or head-to-tail triangle, described clearly enough to be followed, including the use of a scale, 6 marks; calculation for perpendicular vectors using Pythagoras and trigonometry, with the reminder that a vector answer requires a direction, 6 marks; clarity and correct terminology, 4 marks. A learner who defines the terms but whose example yields identical values for distance and displacement has not demonstrated the distinction and should not exceed 12.",
              marks: 30,
            },
          ],
        },
        {
          slug: "linear-motion",
          title: "Linear Motion",
          objective:
            "By the end of the lesson, learners should be able to define speed, velocity and acceleration, apply the equations of uniformly accelerated motion, and interpret distance-time and velocity-time graphs.",
          estimatedMinutes: 80,
          notes: `## Definitions

**Speed** = distance / time. Scalar. Unit m per s.

**Velocity** = displacement / time. Vector. Unit m per s.

**Acceleration** = change in velocity / time taken. Vector. Unit m per s squared.

Acceleration = (v - u) / t, where u is the initial velocity and v the final velocity.

**Retardation (deceleration)** is negative acceleration — the velocity is decreasing.

## Uniform and non-uniform motion

- **Uniform velocity** — equal displacements in equal intervals of time; acceleration is zero.
- **Uniform acceleration** — equal changes of velocity in equal intervals of time.

## The equations of motion

Valid only for **uniform acceleration**:

1. v = u + at
2. s = ut + (1/2)at squared
3. v squared = u squared + 2as
4. s = ((u + v) / 2) x t

where u = initial velocity, v = final velocity, a = acceleration, t = time, s = displacement.

**Choosing the right equation:** list what you are given and what you need. The equation that omits the quantity you neither have nor want is the one to use. If time is not given and not required, use equation 3.

## Sign convention

Choose a positive direction and hold to it throughout the problem.

- Motion in the chosen direction is positive
- Motion against it is negative
- Retardation is a negative acceleration

## Motion under gravity

A freely falling body has acceleration g, about 9.8 m per s squared downwards (often taken as 10 for simplicity). The same equations apply with a replaced by g.

For a body thrown vertically upwards, the velocity at the highest point is **zero**, though the acceleration there is still g downwards.

## Distance-time graphs

- **Gradient = speed**
- Horizontal line: the body is at rest
- Straight sloping line: uniform speed
- Curve of increasing gradient: acceleration

## Velocity-time graphs

- **Gradient = acceleration**
- **Area under the graph = distance travelled**
- Horizontal line: uniform velocity, zero acceleration
- Straight line sloping up: uniform acceleration
- Straight line sloping down: uniform retardation

The area rule is worth more marks than any other single fact in this topic. Break the area into triangles and rectangles and add them.`,
          workedExample: `**Question:** A car starts from rest and accelerates uniformly at 2 m per s squared for 10 s. It then travels at constant velocity for 20 s, before decelerating uniformly to rest in 5 s.

(a) Find the maximum velocity reached.
(b) Find the total distance travelled.
(c) Sketch the velocity-time graph and state how the distance appears on it.

**Solution**

**(a) Maximum velocity**

For the first stage: u = 0, a = 2, t = 10.

Use v = u + at:

v = 0 + (2 x 10) = **20 m per s**

**(b) Total distance — take each stage separately**

*Stage 1 — acceleration.*

s = ut + (1/2)at squared

= (0 x 10) + (0.5 x 2 x 100)

= 0 + 100 = **100 m**

*Stage 2 — constant velocity.*

s = velocity x time = 20 x 20 = **400 m**

*Stage 3 — deceleration to rest.*

u = 20, v = 0, t = 5.

Using s = ((u + v) / 2) x t:

s = ((20 + 0) / 2) x 5 = 10 x 5 = **50 m**

*Total distance* = 100 + 400 + 50 = **550 m**

**(c) The velocity-time graph**

The graph consists of three straight segments:

1. From (0, 0) rising to (10, 20) — uniform acceleration
2. Horizontal from (10, 20) to (30, 20) — constant velocity
3. Falling from (30, 20) to (35, 0) — uniform retardation

The shape is a **trapezium**. The **area under the graph equals the distance travelled**:

- Triangle 1: (1/2) x 10 x 20 = 100 m
- Rectangle: 20 x 20 = 400 m
- Triangle 2: (1/2) x 5 x 20 = 50 m

Total area = 550 m, agreeing with part (b).

**The lesson:** the graph method and the equations give the same answer, and each checks the other. In an examination, using one to verify the other costs a minute and catches most arithmetic errors.`,
          teachingTip:
            "Build the velocity-time graph from a real motion before you use it to solve anything. Send a learner walking across the room — slowly, then quickly, then standing still, then back — while the class calls out what the graph should be doing. Sketch it live on the board. Learners who have seen a graph constructed from motion they watched stop confusing distance-time with velocity-time graphs, which is otherwise the dominant error. Drill the two gradient rules as a pair, out loud: on a distance-time graph the gradient is speed; on a velocity-time graph the gradient is acceleration and the area is distance. For the equations, teach the selection method rather than the equations themselves — list what you have, list what you want, pick the equation containing only those. Learners who select systematically stop trying to force everything through v = u + at.",
          quiz: [
            {
              prompt: "Acceleration is defined as",
              options: [
                "distance divided by time",
                "change in velocity divided by time taken",
                "velocity multiplied by time",
                "force divided by mass",
              ],
              correctIndex: 1,
              explanation:
                "Acceleration measures how quickly velocity changes, in m per s squared.",
            },
            {
              prompt: "On a velocity-time graph, the area under the line represents",
              options: ["Acceleration", "Speed", "Distance travelled", "Force"],
              correctIndex: 2,
              explanation:
                "Velocity multiplied by time gives distance, which is what the area computes.",
            },
            {
              prompt: "On a distance-time graph, a horizontal line means the body is",
              options: [
                "accelerating",
                "at rest",
                "moving at constant speed",
                "decelerating",
              ],
              correctIndex: 1,
              explanation:
                "Zero gradient means no change in distance, so the body is stationary.",
            },
            {
              prompt:
                "A body starts from rest and accelerates at 4 m per s squared for 5 s. Its final velocity is",
              options: ["9 m/s", "20 m/s", "25 m/s", "0.8 m/s"],
              correctIndex: 1,
              explanation: "v = u + at = 0 + (4 x 5) = 20 m per s.",
            },
            {
              prompt: "At the highest point of its flight, a ball thrown vertically upward has",
              options: [
                "zero velocity and zero acceleration",
                "zero velocity and acceleration g downwards",
                "maximum velocity and zero acceleration",
                "zero acceleration and maximum velocity",
              ],
              correctIndex: 1,
              explanation:
                "The velocity is momentarily zero but gravity continues to act, so the acceleration remains g.",
            },
            {
              prompt: "Which equation should be used when time is neither given nor required?",
              options: [
                "v = u + at",
                "s = ut + half a t squared",
                "v squared = u squared + 2as",
                "s = ((u + v)/2) t",
              ],
              correctIndex: 2,
              explanation:
                "This equation relates velocities, acceleration and displacement without involving time.",
            },
            {
              prompt: "The gradient of a velocity-time graph gives",
              options: ["Distance", "Speed", "Acceleration", "Force"],
              correctIndex: 2,
              explanation:
                "Change in velocity over change in time is the definition of acceleration.",
            },
            {
              prompt: "Retardation means that the body's velocity is",
              options: ["Increasing", "Decreasing", "Constant", "Zero"],
              correctIndex: 1,
              explanation:
                "Retardation is negative acceleration; the body slows down.",
            },
            {
              prompt:
                "A stone is dropped from rest. Taking g as 10 m per s squared, its velocity after 3 s is",
              options: ["10 m/s", "20 m/s", "30 m/s", "45 m/s"],
              correctIndex: 2,
              explanation: "v = u + gt = 0 + (10 x 3) = 30 m per s.",
            },
            {
              prompt: "Uniform velocity means the body covers",
              options: [
                "equal distances in unequal times",
                "equal displacements in equal times",
                "increasing distances in equal times",
                "no distance at all",
              ],
              correctIndex: 1,
              explanation:
                "Uniform velocity implies constant speed in a constant direction, so acceleration is zero.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "A car moving at 15 m per s accelerates uniformly at 3 m per s squared for 6 s. Calculate its final velocity and the distance covered during this time.",
              answerKey:
                "v = u + at = 15 + (3 x 6) = 33 m per s. s = ut + half a t squared = (15 x 6) + (0.5 x 3 x 36) = 90 + 54 = 144 m. Award 4 marks for the final velocity with working, 5 for the distance with working. Accept s = ((15 + 33)/2) x 6 = 144 m as an alternative route.",
              marks: 9,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "A stone is thrown vertically upwards with an initial velocity of 20 m per s. Taking g as 10 m per s squared, find the maximum height reached and the total time of flight.",
              answerKey:
                "At maximum height v = 0. Using v squared = u squared + 2as with a = -10: 0 = 400 - 20s, so s = 20 m. Time to the top: v = u + at gives 0 = 20 - 10t, so t = 2 s. Total flight time = 4 s by symmetry. Award 4 marks for the height, 3 for the time up, 3 for doubling to obtain the total flight time with justification.",
              marks: 10,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "A velocity-time graph is a horizontal straight line at 12 m per s for 8 s. What are the acceleration and the distance travelled?",
              options: [
                "1.5 m/s squared and 96 m",
                "0 m/s squared and 96 m",
                "0 m/s squared and 20 m",
                "12 m/s squared and 8 m",
              ],
              correctIndex: 1,
              answerKey:
                "A horizontal line has zero gradient, so the acceleration is zero. The area under the line is 12 x 8 = 96 m. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State three differences between a distance-time graph and a velocity-time graph, referring to what the gradient and the area under each represent.",
              answerKey:
                "Gradient of a distance-time graph gives speed, whereas the gradient of a velocity-time graph gives acceleration. The area under a velocity-time graph gives distance travelled, whereas the area under a distance-time graph has no physical meaning. A horizontal line on a distance-time graph means the body is at rest, whereas a horizontal line on a velocity-time graph means constant velocity with zero acceleration. Award 3 marks per complete two-sided difference.",
              marks: 9,
            },
            {
              type: "ESSAY",
              prompt:
                "A train starts from rest and accelerates uniformly at 0.5 m per s squared for 40 s. It then maintains a constant velocity for 100 s before decelerating uniformly to rest over a further 20 s. Sketch the velocity-time graph, and use it to determine the maximum velocity, the total distance travelled, and the deceleration in the final stage. Comment on why the graphical method is a useful check on the equations of motion.",
              answerKey:
                "Maximum velocity: v = 0 + (0.5 x 40) = 20 m per s, 4 marks. Graph: a trapezium rising from (0,0) to (40,20), horizontal to (140,20), falling to (160,0) — 6 marks for a correctly labelled sketch with axes and units. Distance by area: triangle (0.5 x 40 x 20) = 400 m; rectangle (100 x 20) = 2000 m; triangle (0.5 x 20 x 20) = 200 m; total 2600 m — 8 marks. Deceleration = (0 - 20)/20 = -1 m per s squared, that is a retardation of 1 m per s squared, 4 marks. Comment: the area method and the equations of motion are independent routes to the same quantity, so agreement between them detects arithmetic error, and the graph also makes the structure of the journey visible at a glance — 5 marks. Deduct 2 marks where the sketch has unlabelled axes.",
              marks: 27,
            },
          ],
        },
        {
          slug: "newtons-laws",
          title: "Newton's Laws of Motion",
          objective:
            "By the end of the lesson, learners should be able to state and explain Newton's three laws, apply F = ma to numerical problems, define momentum and impulse, and state the principle of conservation of linear momentum.",
          estimatedMinutes: 80,
          notes: `## Newton's first law

**A body continues at rest, or in uniform motion in a straight line, unless acted upon by an external unbalanced force.**

This defines **inertia** — the reluctance of a body to change its state of motion. Inertia depends on **mass**: the greater the mass, the greater the inertia.

Everyday consequences:

- Passengers lurch forward when a vehicle stops suddenly, because their bodies continue moving.
- Dust is removed by beating a mat: the mat moves, the dust stays.
- Seat belts exist because of this law.

## Newton's second law

**The rate of change of momentum of a body is directly proportional to the applied force and takes place in the direction of the force.**

From this we obtain:

**F = ma**

Force in newtons, mass in kilograms, acceleration in metres per second squared.

**One newton** is the force that gives a mass of 1 kg an acceleration of 1 m per s squared.

## Newton's third law

**For every action there is an equal and opposite reaction.**

The critical point, and the one most often misunderstood: the action and reaction act on **different bodies**. They therefore never cancel each other out. If they acted on the same body, nothing could ever accelerate.

- A swimmer pushes the water backwards; the water pushes the swimmer forwards.
- A gun exerts a force on the bullet; the bullet exerts an equal backward force on the gun, felt as recoil.
- You push down on the ground; the ground pushes up on you.

## Momentum

**Momentum = mass x velocity**

p = mv. Unit: kg m per s. It is a **vector**, taking the direction of the velocity.

## Impulse

**Impulse = force x time = change in momentum**

Ft = mv - mu

This explains why increasing the time of impact reduces the force: for a given change of momentum, a longer contact time means a smaller force. Hence crumple zones in vehicles, padded helmets, and bending the knees on landing.

## Conservation of linear momentum

**In a closed system, the total momentum before collision equals the total momentum after collision, provided no external force acts.**

m1u1 + m2u2 = m1v1 + m2v2

**Collision types:**

- **Elastic** — both momentum and kinetic energy are conserved.
- **Inelastic** — momentum is conserved but kinetic energy is not; some becomes heat and sound. If the bodies stick together, the collision is perfectly inelastic.

Momentum is conserved in **all** collisions. Kinetic energy is not.`,
          workedExample: `**Question:** A body of mass 5 kg, moving at 4 m per s, collides with a stationary body of mass 3 kg. After the collision the two move off together.

(a) Calculate their common velocity after the collision.
(b) Determine whether the collision is elastic or inelastic, showing your reasoning.
(c) If the collision lasted 0.2 s, find the average force exerted on the 3 kg body.

**Solution**

**(a) Common velocity**

Apply the conservation of linear momentum. Take the direction of the moving body as positive.

*Before the collision:*

- Body 1: m1 = 5 kg, u1 = 4 m per s → momentum = 5 x 4 = 20 kg m per s
- Body 2: m2 = 3 kg, u2 = 0 → momentum = 0

Total momentum before = **20 kg m per s**

*After the collision:* the bodies move together, so they share one velocity v and a combined mass of 5 + 3 = 8 kg.

Total momentum after = 8v

*Equate:*

20 = 8v

v = 20 / 8 = **2.5 m per s**

**(b) Elastic or inelastic?**

Compare the kinetic energy before and after.

*Before:*

KE = (1/2)(5)(4 squared) + (1/2)(3)(0 squared)

= (1/2)(5)(16) = **40 J**

*After:*

KE = (1/2)(8)(2.5 squared)

= (1/2)(8)(6.25) = **25 J**

Kinetic energy has fallen from 40 J to 25 J. **15 J has been lost**, converted to heat, sound and deformation.

Since momentum is conserved but kinetic energy is not, the collision is **inelastic**. Bodies that move off together always undergo a perfectly inelastic collision.

**(c) Average force on the 3 kg body**

Use impulse = change in momentum, applied to the 3 kg body alone.

Its initial velocity was 0; its final velocity is 2.5 m per s.

Change in momentum = m(v - u) = 3(2.5 - 0) = 7.5 kg m per s

Ft = change in momentum

F x 0.2 = 7.5

F = 7.5 / 0.2 = **37.5 N**

*Check with the third law:* the 5 kg body should experience an equal and opposite force. Its momentum change is 5(2.5 - 4) = -7.5 kg m per s, giving F = -37.5 N — equal in magnitude, opposite in direction, exactly as Newton's third law requires.

**Answer:** (a) 2.5 m per s (b) inelastic, 15 J of kinetic energy lost (c) 37.5 N`,
          teachingTip:
            "The third law is the one learners recite correctly and understand least. Ask the class directly: if action and reaction are equal and opposite, why does anything ever move? Let them struggle with it, because the resolution — the two forces act on different bodies and so cannot cancel — is the whole content of the law. Demonstrate with a balloon released across the room, or two learners on a smooth floor pushing off each other. For the first law, the tablecloth trick or a coin on a card over a beaker costs nothing and is remembered for years. When you reach impulse, connect it to something they have felt: ask why they bend their knees when jumping down from a height, and let them arrive at 'a longer time means a smaller force' themselves. Physics that explains the learner's own body is physics that survives the examination.",
          quiz: [
            {
              prompt: "Newton's first law is also known as the law of",
              options: ["Gravitation", "Inertia", "Momentum", "Action and reaction"],
              correctIndex: 1,
              explanation:
                "It describes a body's reluctance to change its state of rest or uniform motion.",
            },
            {
              prompt: "A force of 20 N acts on a mass of 4 kg. The acceleration produced is",
              options: ["5 m/s squared", "16 m/s squared", "24 m/s squared", "80 m/s squared"],
              correctIndex: 0,
              explanation: "From F = ma, a = F/m = 20/4 = 5 m per s squared.",
            },
            {
              prompt: "Action and reaction forces do not cancel because they",
              options: [
                "are unequal in size",
                "act on different bodies",
                "act at different times",
                "are both in the same direction",
              ],
              correctIndex: 1,
              explanation:
                "Cancellation requires both forces to act on the same body, which they never do.",
            },
            {
              prompt: "Momentum is defined as",
              options: [
                "mass x acceleration",
                "mass x velocity",
                "force x time",
                "force x distance",
              ],
              correctIndex: 1,
              explanation: "p = mv, a vector quantity measured in kg m per s.",
            },
            {
              prompt: "The SI unit of momentum is",
              options: ["N", "J", "kg m per s", "m per s squared"],
              correctIndex: 2,
              explanation: "Mass in kg multiplied by velocity in m per s.",
            },
            {
              prompt: "Impulse is equal to",
              options: [
                "the change in momentum",
                "the change in kinetic energy",
                "mass times acceleration",
                "force divided by time",
              ],
              correctIndex: 0,
              explanation: "Ft = mv - mu, so impulse and change of momentum are the same quantity.",
            },
            {
              prompt: "In an inelastic collision,",
              options: [
                "momentum and kinetic energy are both conserved",
                "momentum is conserved but kinetic energy is not",
                "kinetic energy is conserved but momentum is not",
                "neither is conserved",
              ],
              correctIndex: 1,
              explanation:
                "Momentum is conserved in all collisions; kinetic energy is lost to heat and sound in inelastic ones.",
            },
            {
              prompt: "A body of mass 2 kg moves at 6 m per s. Its momentum is",
              options: ["3 kg m/s", "8 kg m/s", "12 kg m/s", "36 kg m/s"],
              correctIndex: 2,
              explanation: "p = mv = 2 x 6 = 12 kg m per s.",
            },
            {
              prompt: "Why do vehicles have crumple zones?",
              options: [
                "To reduce the mass of the vehicle",
                "To increase the time of impact and so reduce the force",
                "To increase the momentum of the vehicle",
                "To make the vehicle stop instantly",
              ],
              correctIndex: 1,
              explanation:
                "For a fixed change of momentum, a longer collision time gives a smaller average force.",
            },
            {
              prompt: "One newton is the force that gives a mass of 1 kg an acceleration of",
              options: [
                "1 m per s",
                "1 m per s squared",
                "10 m per s squared",
                "9.8 m per s",
              ],
              correctIndex: 1,
              explanation: "This follows directly from the definition F = ma.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "State Newton's three laws of motion and give one everyday example illustrating each.",
              answerKey:
                "First law: a body remains at rest or in uniform motion in a straight line unless acted on by an external unbalanced force; example — passengers lurch forward when a vehicle brakes sharply. Second law: the rate of change of momentum is proportional to the applied force and acts in its direction, giving F = ma; example — a loaded lorry requires a greater force than an empty one for the same acceleration. Third law: for every action there is an equal and opposite reaction; example — a swimmer pushes water backwards and is propelled forwards. Award 3 marks per correctly stated law and 2 marks per apt example.",
              marks: 15,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "A body of mass 8 kg is acted on by a force of 24 N. Calculate the acceleration produced and the velocity attained after 5 s, assuming it starts from rest.",
              answerKey:
                "a = F/m = 24/8 = 3 m per s squared. v = u + at = 0 + (3 x 5) = 15 m per s. Award 4 marks for the acceleration with working and 4 for the final velocity with working.",
              marks: 8,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "A 2 kg ball moving at 5 m per s strikes a wall and rebounds at 3 m per s in the opposite direction. What is the magnitude of the change in its momentum?",
              options: ["4 kg m/s", "10 kg m/s", "16 kg m/s", "6 kg m/s"],
              correctIndex: 2,
              answerKey:
                "Taking the initial direction as positive: initial momentum = +10 kg m per s, final = -6 kg m per s. Change = -6 - 10 = -16, magnitude 16 kg m per s. The commonest error is subtracting the speeds to obtain 4, which ignores the reversal of direction. Option C.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "A truck of mass 2000 kg moving at 10 m per s collides with a stationary car of mass 1000 kg, and the two move off together. Calculate their common velocity and the kinetic energy lost in the collision.",
              answerKey:
                "Momentum before = 2000 x 10 = 20000 kg m per s. Combined mass = 3000 kg, so v = 20000/3000 = 6.67 m per s. KE before = 0.5 x 2000 x 100 = 100000 J. KE after = 0.5 x 3000 x 6.67 squared = 0.5 x 3000 x 44.4 = 66700 J. Energy lost = 33300 J, approximately 3.33 x 10 to the fourth joules. Award 5 marks for the common velocity, 3 for KE before, 3 for KE after, 3 for the loss.",
              marks: 14,
            },
            {
              type: "ESSAY",
              prompt:
                "State the principle of conservation of linear momentum and explain the conditions under which it holds. Distinguish between elastic and inelastic collisions, and explain, using the concept of impulse, why safety features such as crumple zones, air bags and padded helmets reduce injury.",
              answerKey:
                "Award marks as follows: statement of the principle — in a closed system the total momentum before a collision equals the total momentum after — together with the condition that no net external force acts, 6 marks; the mathematical form m1u1 + m2u2 = m1v1 + m2v2 with terms defined, 4 marks; distinction between elastic collisions, in which both momentum and kinetic energy are conserved, and inelastic collisions, in which momentum is conserved but kinetic energy is partly converted to heat, sound and deformation, with the note that bodies moving off together represent a perfectly inelastic case, 8 marks; explanation via impulse — Ft = change in momentum, so for a fixed momentum change an extended contact time necessarily reduces the average force, applied correctly to at least two of the named safety features, 10 marks; clarity, organisation and correct units throughout, 4 marks. A learner who describes the safety features without invoking the impulse relation should not exceed 18.",
              marks: 32,
            },
          ],
        },
      ],
    },
  ],
};
