import type { PeriodContent } from "@/content/types";

// Grade 12, Semester One, Period I of the MoE Mathematics syllabus:
// Sequence and Series, Bearings, and Constructions. Notes rebuilt from
// published sources (Teachoo, GeeksforGeeks).
export const mathematicsG12P1: PeriodContent = {
  grade: 12,
  number: 1,
  title: "Sequence and Series, Bearings and Constructions",
  summary:
    "Period I of the MoE Grade 12 Mathematics syllabus. Learners work with arithmetic and geometric sequences and series and their sum formulae, interpret and calculate bearings as directions between points, and use compass-and-ruler methods to construct angles, triangles, quadrilaterals and loci.",
  topics: [
    // source: Teachoo — Sequences and Series, Class 11 (https://www.teachoo.com/subjects/cbse-maths/class-11th/ch9-11th-sequences-and-series/)
    {
      slug: "sequence-and-series",
      title: "Sequence and Series",
      objective:
        "By the end of the topic, learners should be able to identify arithmetic and geometric sequences, use the nth-term formulae, and find the sum of arithmetic and geometric series.",
      estimatedMinutes: 120,
      notes: `## Sequence and series

- A **sequence** is an ordered list of numbers (called **terms**): T₁, T₂, T₃, …
- A **series** is the sum of the terms of a sequence: T₁ + T₂ + T₃ + …
- **Tₙ** is the nth term (general term); **Sₙ** is the sum of the first n terms.

## Arithmetic sequence (arithmetic progression, AP)

- Each term is found by **adding a fixed common difference d** to the previous term.
- **d = Tₙ − Tₙ₋₁** (the difference between any term and the one before it).
- Example: 3, 7, 11, 15, … has a = 3 and d = 4.
- **nth term: Tₙ = a + (n − 1)d**, where a is the first term.

## Sum of an arithmetic series

- **Sₙ = n/2 [2a + (n − 1)d]**
- Equivalently **Sₙ = n/2 (a + l)**, where l = Tₙ is the last term.

## Geometric sequence (geometric progression, GP)

- Each term is found by **multiplying by a fixed common ratio r**.
- **r = Tₙ ÷ Tₙ₋₁** (the ratio of any term to the one before it).
- Example: 2, 6, 18, 54, … has a = 2 and r = 3.
- **nth term: Tₙ = a·r⁽ⁿ⁻¹⁾**

## Sum of a geometric series

- **Sₙ = a(rⁿ − 1)/(r − 1)** for r > 1 (or a(1 − rⁿ)/(1 − r) for r < 1), r ≠ 1.
- For an infinite GP with −1 < r < 1: **S∞ = a/(1 − r)**.

| Feature | Arithmetic | Geometric |
| --- | --- | --- |
| Step | add d | multiply by r |
| nth term | a + (n − 1)d | a·r⁽ⁿ⁻¹⁾ |
| Sum of n terms | n/2[2a + (n − 1)d] | a(rⁿ − 1)/(r − 1) |

## Common errors

- **Using n instead of (n − 1)** in the nth-term formulae.
- **Confusing d and r** — arithmetic adds, geometric multiplies.
- **Applying S∞** when |r| ≥ 1 (the sum then has no finite value).`,
      workedExample: `**Question:** For the sequence 3, 7, 11, 15, … find (a) the 10th term and (b) the sum of the first 10 terms.

**Solution**

*Step 1 — identify a and d.* a = 3 and d = 7 − 3 = 4.

*Step 2 — 10th term with Tₙ = a + (n − 1)d.*
T₁₀ = 3 + (10 − 1)(4) = 3 + 36 = 39

*Step 3 — sum with Sₙ = n/2[2a + (n − 1)d].*
S₁₀ = 10/2 [2(3) + (10 − 1)(4)] = 5[6 + 36] = 5 × 42 = 210

*Check with Sₙ = n/2(a + l):* S₁₀ = 10/2 (3 + 39) = 5 × 42 = 210. ✓

**Answer: (a) 39 (b) 210**`,
      quiz: [
        { prompt: "A sequence is", options: ["a sum of terms", "an ordered list of numbers", "a single number", "always infinite"], correctIndex: 1, explanation: "A sequence is an ordered list of terms; a series is their sum." },
        { prompt: "In an arithmetic sequence, consecutive terms differ by", options: ["a common ratio", "a common difference", "a square", "zero always"], correctIndex: 1, explanation: "AP adds a fixed common difference d." },
        { prompt: "The nth term of an AP is", options: ["a·r^(n−1)", "a + (n − 1)d", "n/2(a + l)", "a + nd"], correctIndex: 1, explanation: "Tₙ = a + (n − 1)d." },
        { prompt: "For 5, 9, 13, … the common difference is", options: ["4", "5", "9", "14"], correctIndex: 0, explanation: "9 − 5 = 4." },
        { prompt: "For 5, 9, 13, … the 6th term is", options: ["25", "29", "23", "30"], correctIndex: 0, explanation: "T₆ = 5 + 5(4) = 25." },
        { prompt: "In a geometric sequence, consecutive terms have a fixed", options: ["difference", "ratio", "sum", "product"], correctIndex: 1, explanation: "GP multiplies by a fixed common ratio r." },
        { prompt: "The nth term of a GP is", options: ["a + (n − 1)d", "a·r^(n−1)", "a·r·n", "n/2(a + l)"], correctIndex: 1, explanation: "Tₙ = a·r^(n−1)." },
        { prompt: "For 2, 6, 18, … the common ratio is", options: ["2", "3", "4", "6"], correctIndex: 1, explanation: "6 ÷ 2 = 3." },
        { prompt: "For 2, 6, 18, … the 4th term is", options: ["54", "36", "24", "72"], correctIndex: 0, explanation: "T₄ = 2 × 3³ = 2 × 27 = 54." },
        { prompt: "The sum of the first n terms of an AP is", options: ["n/2[2a + (n − 1)d]", "a·r^(n−1)", "a/(1 − r)", "a + (n − 1)d"], correctIndex: 0, explanation: "Sₙ = n/2[2a + (n − 1)d]." },
        { prompt: "For 3, 7, 11, … the sum of the first 5 terms is", options: ["55", "35", "45", "50"], correctIndex: 0, explanation: "S₅ = 5/2[6 + 16] = 5/2 × 22 = 55." },
        { prompt: "The sum of a GP (r ≠ 1) is", options: ["n/2(a + l)", "a(rⁿ − 1)/(r − 1)", "a + (n − 1)d", "a·rⁿ"], correctIndex: 1, explanation: "Sₙ = a(rⁿ − 1)/(r − 1)." },
        { prompt: "For 2, 6, 18, … the sum of the first 4 terms is", options: ["80", "78", "80.5", "108"], correctIndex: 0, explanation: "S₄ = 2(3⁴ − 1)/(3 − 1) = 2(80)/2 = 80." },
        { prompt: "The sum to infinity of a GP exists only when", options: ["r > 1", "|r| < 1", "r = 1", "a = 0"], correctIndex: 1, explanation: "S∞ = a/(1 − r) needs −1 < r < 1." },
        { prompt: "The sum to infinity of 8 + 4 + 2 + … is", options: ["16", "12", "8", "∞"], correctIndex: 0, explanation: "a = 8, r = 1/2; S∞ = 8/(1 − 1/2) = 16." },
        { prompt: "An alternative AP sum formula is", options: ["n/2(a + l)", "a/(1 − r)", "a·r^(n−1)", "(a + l)/2"], correctIndex: 0, explanation: "Sₙ = n/2(a + l) where l is the last term." },
        { prompt: "The 20th term of 1, 4, 7, … is", options: ["58", "61", "55", "60"], correctIndex: 0, explanation: "T₂₀ = 1 + 19(3) = 1 + 57 = 58." },
        { prompt: "A series is", options: ["a list of numbers", "the sum of the terms of a sequence", "a common ratio", "the nth term"], correctIndex: 1, explanation: "A series is the sum of terms." },
        { prompt: "In 100, 50, 25, … the common ratio is", options: ["1/2", "2", "−50", "50"], correctIndex: 0, explanation: "50 ÷ 100 = 1/2." },
        { prompt: "The main difference between AP and GP is that AP", options: ["multiplies terms", "adds a fixed amount", "has no formula", "cannot be summed"], correctIndex: 1, explanation: "AP adds d; GP multiplies by r." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "The 3rd term of an AP is 11 and the 7th term is 27. Find a and d.", answerKey: "T₃ = a + 2d = 11 and T₇ = a + 6d = 27. Subtract: 4d = 16, so d = 4; then a = 11 − 8 = 3. Award 3 marks for setting up the equations, 3 for a = 3, d = 4.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Find the sum of the first 8 terms of the AP 2, 5, 8, 11, …", answerKey: "a = 2, d = 3. S₈ = 8/2[2(2) + 7(3)] = 4[4 + 21] = 4 × 25 = 100. Award 2 for substitution, 2 for 25, 2 for 100.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "The 5th term of the GP 3, 6, 12, … is", options: ["48", "24", "36", "96"], correctIndex: 0, answerKey: "a = 3, r = 2; T₅ = 3 × 2⁴ = 3 × 16 = 48. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Find the sum to infinity of the GP 12 + 6 + 3 + …", answerKey: "a = 12, r = 1/2 (|r| < 1). S∞ = a/(1 − r) = 12/(1 − 1/2) = 12/(1/2) = 24. Award 2 for r, 2 for the formula, 2 for 24.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the difference between an arithmetic and a geometric sequence. For the sequence 4, 12, 36, … state which type it is, give the common difference or ratio, and find the 5th term and the sum of the first 4 terms.", answerKey: "Arithmetic sequences add a fixed common difference; geometric sequences multiply by a fixed common ratio. 4, 12, 36 is geometric with r = 3. T₅ = 4 × 3⁴ = 4 × 81 = 324. S₄ = 4(3⁴ − 1)/(3 − 1) = 4(80)/2 = 160. Award 3 for the explanation, 2 for identifying GP with r = 3, 2 for T₅ = 324, 3 for S₄ = 160.", marks: 10 },
      ],
    },
    // source: GeeksforGeeks — Bearings in Maths (https://www.geeksforgeeks.org/maths/bearings-in-maths/)
    {
      slug: "bearings",
      title: "Bearings",
      objective:
        "By the end of the topic, learners should be able to interpret and measure three-figure bearings, find the back bearing of a point, and solve simple distance-and-bearing problems.",
      estimatedMinutes: 100,
      notes: `## What a bearing is

- A **bearing** describes the direction of one point from another as an angle.
- It is **always measured from North, in a clockwise direction**.
- It is written as a **three-figure bearing** (three digits): e.g. 60° is written as **060°**, and due east is **090°**.
- A whole-circle bearing runs from **000° to 360°**.

## Key directions

| Direction | Bearing |
| --- | --- |
| North | 000° |
| East | 090° |
| South | 180° |
| West | 270° |

## Back bearing (reverse bearing)

- The bearing of A from B is the **back bearing** of the bearing of B from A.
- Rule: if the bearing is **less than 180°, add 180°**; if it is **180° or more, subtract 180°**.
- Example: if the bearing of B from A is 094°, then the bearing of A from B is 094° + 180° = **274°**.

## Solving bearing problems

- Draw a **North line at each point** and mark the clockwise angle.
- Use a **scale drawing** (e.g. 1 cm : 1 km) or trigonometry (sine rule, cosine rule) to find distances and angles.
- Sine rule: **a/sin A = b/sin B = c/sin C**.

\`\`\`svg Bearing measured clockwise from North
<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
  <line x1="60" y1="20" x2="60" y2="140" stroke="#888" stroke-width="1"/>
  <text x="50" y="16" font-size="11">N</text>
  <circle cx="60" cy="90" r="3" fill="#333"/>
  <text x="46" y="104" font-size="11">A</text>
  <line x1="60" y1="90" x2="150" y2="55" stroke="#1565c0" stroke-width="2"/>
  <circle cx="150" cy="55" r="3" fill="#1565c0"/>
  <text x="156" y="52" font-size="11">B</text>
  <path d="M60 60 A 30 30 0 0 1 84 72" fill="none" stroke="#c62828" stroke-width="1.5"/>
  <text x="86" y="60" font-size="10" fill="#c62828">bearing</text>
</svg>
\`\`\`

## Common errors

- **Writing a bearing with fewer than three digits** — always use 060°, not 60°.
- **Measuring anticlockwise or from another direction** — bearings go clockwise from North.
- **Forgetting the ±180° rule** for a back bearing.`,
      workedExample: `**Question:** The bearing of town Q from town P is 048°. Find the bearing of P from Q.

**Solution**

*Step 1 — recall the back-bearing rule.* The bearing of P from Q is the back bearing of 048°.

*Step 2 — the given bearing is less than 180°, so add 180°.*
048° + 180° = 228°

*Step 3 — check it is a three-figure bearing between 000° and 360°.* 228° is valid.

**Answer: The bearing of P from Q is 228°.**`,
      quiz: [
        { prompt: "A bearing is always measured from", options: ["East, clockwise", "North, clockwise", "South, anticlockwise", "West, clockwise"], correctIndex: 1, explanation: "Bearings are measured clockwise from North." },
        { prompt: "The bearing for due East is", options: ["000°", "090°", "180°", "270°"], correctIndex: 1, explanation: "East is a quarter turn clockwise from North." },
        { prompt: "A bearing of 60° should be written as", options: ["60°", "060°", "600°", "6°"], correctIndex: 1, explanation: "Bearings use three figures: 060°." },
        { prompt: "Due South has the bearing", options: ["090°", "180°", "270°", "360°"], correctIndex: 1, explanation: "South is half a turn from North." },
        { prompt: "Due West has the bearing", options: ["090°", "180°", "270°", "000°"], correctIndex: 2, explanation: "West is three-quarters of a turn clockwise." },
        { prompt: "Bearings run from", options: ["0° to 90°", "0° to 180°", "000° to 360°", "1° to 100°"], correctIndex: 2, explanation: "A whole-circle bearing covers 000°–360°." },
        { prompt: "To find a back bearing under 180°, you", options: ["subtract 180°", "add 180°", "add 360°", "double it"], correctIndex: 1, explanation: "If the bearing < 180°, add 180°." },
        { prompt: "If the bearing of B from A is 070°, the bearing of A from B is", options: ["250°", "110°", "070°", "290°"], correctIndex: 0, explanation: "070° < 180°, so 070° + 180° = 250°." },
        { prompt: "If the bearing of Y from X is 200°, the bearing of X from Y is", options: ["380°", "020°", "020° = 020°", "020°"], correctIndex: 3, explanation: "200° ≥ 180°, so 200° − 180° = 020°." },
        { prompt: "The bearing of North-East is", options: ["030°", "045°", "060°", "090°"], correctIndex: 1, explanation: "NE is halfway between N (000°) and E (090°)." },
        { prompt: "The angle between North and a bearing of 090° is", options: ["45°", "90°", "180°", "270°"], correctIndex: 1, explanation: "090° is a right angle from North." },
        { prompt: "Which is a valid three-figure bearing?", options: ["45°", "360.5°", "135°", "400°"], correctIndex: 2, explanation: "135° is between 000° and 360° and has three figures." },
        { prompt: "A back bearing differs from the original bearing by", options: ["90°", "180°", "360°", "45°"], correctIndex: 1, explanation: "The reverse direction is 180° away." },
        { prompt: "To solve a bearing problem you usually first", options: ["guess the answer", "draw a North line and mark the clockwise angle", "measure anticlockwise", "ignore the scale"], correctIndex: 1, explanation: "A clear diagram with North lines is the first step." },
        { prompt: "The bearing of a point due South-West is", options: ["135°", "225°", "315°", "045°"], correctIndex: 1, explanation: "SW is halfway between S (180°) and W (270°) = 225°." },
        { prompt: "On a map with scale 1 cm : 1 km, a 5 km distance is drawn as", options: ["1 cm", "5 cm", "0.5 cm", "50 cm"], correctIndex: 1, explanation: "1 cm represents 1 km, so 5 km is 5 cm." },
        { prompt: "The rule used with triangles in bearing problems includes the", options: ["quadratic formula", "sine rule a/sin A = b/sin B", "area of a circle", "compound interest formula"], correctIndex: 1, explanation: "The sine rule relates sides and opposite angles." },
        { prompt: "If the bearing of B from A is 180°, the bearing of A from B is", options: ["360°", "000°", "090°", "180°"], correctIndex: 1, explanation: "180° − 180° = 000° (due North)." },
        { prompt: "A bearing of 315° points towards the", options: ["North-East", "South-East", "North-West", "South-West"], correctIndex: 2, explanation: "315° is halfway between W (270°) and N (360°) = NW." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "The bearing of B from A is 125°. Find the bearing of A from B.", answerKey: "125° < 180°, so add 180°: 125° + 180° = 305°. Award 2 for choosing to add, 2 for the arithmetic, 2 for stating 305°.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "The bearing of Q from P is 250°. Find the bearing of P from Q.", answerKey: "250° ≥ 180°, so subtract 180°: 250° − 180° = 070°. Award 3 for the correct rule, 3 for 070°.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which of these is the bearing of due West?", options: ["090°", "180°", "270°", "360°"], correctIndex: 2, answerKey: "West is 270° (three-quarter turn clockwise from North). Option C.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Write the bearings of North, East, South and West.", answerKey: "North = 000°, East = 090°, South = 180°, West = 270°. Award 1 mark each and 2 marks for using three-figure form throughout.", marks: 6 },
        { type: "ESSAY", prompt: "Explain how a three-figure bearing is measured, why bearings use three digits, and how to find a back bearing. Illustrate with the bearing of B from A being 035°.", answerKey: "A bearing is the clockwise angle from the North line to the line joining the points, written with three digits (035°, not 35°) so directions are unambiguous and always between 000° and 360°. The back bearing (bearing of A from B) reverses the direction and differs by 180°: since 035° < 180°, add 180° to get 215°. Award 4 marks for the measuring explanation, 3 for the three-digit reasoning, 3 for the back bearing 215°.", marks: 10 },
      ],
    },
    // source: GeeksforGeeks — Basic Constructions: Angle Bisector, Perpendicular Bisector, Angle of 60° (https://www.geeksforgeeks.org/maths/basic-constructions-angle-bisector-perpendicular-bisector-angle-of-60/)
    {
      slug: "constructions",
      title: "Constructions",
      objective:
        "By the end of the topic, learners should be able to construct angles, triangles and quadrilaterals with compass and ruler, and describe loci and some special loci.",
      estimatedMinutes: 110,
      notes: `## Construction without measurement

- A **construction** uses only a **ruler (straight edge) and a pair of compasses** — no protractor and no measuring of angles.
- Arcs drawn with the compasses locate points that are an exact distance apart.

## Constructing angles

- **60°:** draw a base line; with the compass point on one end, draw an arc; keep the same radius and draw a second arc cutting the first; join the vertex to the crossing point.
- **30°:** construct 60° and then **bisect** it.
- **90°:** construct the perpendicular at a point on a line (or a perpendicular bisector).
- **45°:** construct 90° and then bisect it.
- **120°:** two 60° arcs in succession.

## Bisecting

- **Angle bisector:** with the compass on the vertex, draw an arc cutting both arms; from those two points draw equal arcs that cross; the line from the vertex through the crossing point **bisects the angle** (splits it into two equal parts).
- **Perpendicular bisector:** open the compass to more than half a segment; draw arcs from each end above and below; the line through the two crossings is perpendicular to the segment and cuts it in half.

## Constructing triangles

Construct a triangle when given:
- **SSS** — three sides (draw one side, then arcs of the other two lengths from each end).
- **SAS** — two sides and the included angle.
- **ASA** — two angles and the included side.

## Locus and special loci

- A **locus** is the set of all points that satisfy a given condition (path traced by a point that moves under a rule).

| Condition | The locus is |
| --- | --- |
| Fixed distance r from a point O | a circle of radius r, centre O |
| Equidistant from two points A, B | the perpendicular bisector of AB (the mediator) |
| Equidistant from two lines | the bisector of the angle between them |
| Fixed distance d from a line | a pair of lines parallel to it, distance d away |

## Common errors

- **Changing the compass radius** midway through a construction.
- **Rubbing out the arcs** — construction arcs must be left to show the method.
- **Using a protractor** where a pure construction is required.`,
      workedExample: `**Question:** Construct an angle of 30° using ruler and compasses only.

**Solution**

*Step 1 — draw a base line* and mark a vertex point O on it.

*Step 2 — construct 60°.* Place the compass point at O and draw an arc that cuts the base line at A. Without changing the radius, place the compass point at A and draw a second arc cutting the first at B. Draw the line OB. Angle AOB = 60°.

*Step 3 — bisect the 60° angle.* Place the compass at A and at B in turn and draw two equal arcs that cross at C. Draw OC.

*Step 4 — result.* OC bisects the 60° angle, so angle AOC = 30°.

**Answer: Angle AOC = 30°, constructed with compass and ruler only.**`,
      quiz: [
        { prompt: "A construction uses", options: ["a protractor only", "ruler and compasses only", "a calculator", "a set square only"], correctIndex: 1, explanation: "Only a straight edge and compasses are allowed." },
        { prompt: "The first angle usually built with compasses is", options: ["45°", "60°", "50°", "80°"], correctIndex: 1, explanation: "60° comes directly from equal arcs." },
        { prompt: "To construct 30° you", options: ["build 60° then bisect it", "build 90° then bisect", "measure with a protractor", "build 45° then double"], correctIndex: 0, explanation: "Bisecting 60° gives 30°." },
        { prompt: "To construct 45° you", options: ["bisect 60°", "bisect 90°", "bisect 120°", "add 30° and 30°"], correctIndex: 1, explanation: "Half of a right angle is 45°." },
        { prompt: "An angle bisector divides an angle into", options: ["three equal parts", "two equal parts", "two unequal parts", "a right angle"], correctIndex: 1, explanation: "A bisector splits an angle in half." },
        { prompt: "The perpendicular bisector of a segment", options: ["passes through one end", "cuts it in half at right angles", "is parallel to it", "is shorter than it"], correctIndex: 1, explanation: "It is perpendicular and halves the segment." },
        { prompt: "To construct a triangle from three sides you use", options: ["ASA", "SAS", "SSS", "AAA"], correctIndex: 2, explanation: "Three sides given is the SSS case." },
        { prompt: "SAS stands for", options: ["side-angle-side", "angle-side-angle", "side-side-side", "angle-angle-side"], correctIndex: 0, explanation: "Two sides and the included angle." },
        { prompt: "A locus is", options: ["a single fixed point", "the set of points satisfying a condition", "a type of triangle", "a measured angle"], correctIndex: 1, explanation: "It is the path of points meeting a rule." },
        { prompt: "The locus of points a fixed distance r from a point O is", options: ["a line", "a circle radius r centre O", "a parabola", "two points"], correctIndex: 1, explanation: "All points at distance r form a circle." },
        { prompt: "The locus of points equidistant from two points A and B is", options: ["a circle", "the perpendicular bisector of AB", "the line AB", "the midpoint only"], correctIndex: 1, explanation: "The mediator of AB is that locus." },
        { prompt: "The locus of points equidistant from two lines is", options: ["a circle", "the angle bisector", "a perpendicular", "a parallel line"], correctIndex: 1, explanation: "The bisector of the angle between them." },
        { prompt: "The locus a fixed distance d from a straight line is", options: ["a circle", "two parallel lines at distance d", "a single point", "the line itself"], correctIndex: 1, explanation: "Two lines parallel to it, one each side." },
        { prompt: "During a construction the compass radius should be", options: ["changed each step", "kept fixed where the method requires", "ignored", "as large as possible"], correctIndex: 1, explanation: "Equal arcs need the same radius." },
        { prompt: "Construction arcs should be", options: ["rubbed out at the end", "left visible to show the method", "drawn in ink only", "hidden"], correctIndex: 1, explanation: "The arcs are evidence of the construction." },
        { prompt: "Constructing 120° uses", options: ["one 60° arc", "two successive 60° arcs", "a bisected 90°", "a protractor"], correctIndex: 1, explanation: "Two 60° steps give 120°." },
        { prompt: "The 'mediator' of a segment is another name for its", options: ["midpoint", "perpendicular bisector", "angle bisector", "length"], correctIndex: 1, explanation: "Mediator = perpendicular bisector." },
        { prompt: "ASA construction is used when you know", options: ["three sides", "two angles and the included side", "three angles", "two sides only"], correctIndex: 1, explanation: "Angle-side-angle." },
        { prompt: "To construct 90° at a point you build a", options: ["60° angle", "perpendicular to the line", "30° angle", "parallel line"], correctIndex: 1, explanation: "A perpendicular gives a right angle." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe how to construct a 60° angle with compass and ruler.", answerKey: "Draw a base line and mark vertex O. With the compass on O, draw an arc cutting the line at A. Keeping the same radius, put the compass on A and draw an arc cutting the first at B. Join OB; angle AOB = 60°. Award 2 marks for the first arc, 2 for the equal second arc, 2 for joining to give 60°.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "State the locus of (a) points 3 cm from a point O and (b) points equidistant from two points A and B.", answerKey: "(a) A circle of radius 3 cm centred on O. (b) The perpendicular bisector of AB. Award 3 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Bisecting a 60° angle produces", options: ["120°", "30°", "45°", "90°"], correctIndex: 1, answerKey: "Half of 60° is 30°. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Which construction case (SSS, SAS or ASA) is used to build a triangle given two angles and the side between them? Explain briefly.", answerKey: "ASA (angle-side-angle): the two known angles are drawn at the ends of the given included side, and the arms meet at the third vertex. Award 3 marks for ASA, 3 for the explanation.", marks: 6 },
        { type: "ESSAY", prompt: "Explain what a locus is and describe the four special loci: fixed distance from a point, equidistant from two points, equidistant from two lines, and fixed distance from a line.", answerKey: "A locus is the set of all points that satisfy a given condition. Fixed distance r from a point O gives a circle radius r centre O; equidistant from two points A and B gives the perpendicular bisector of AB; equidistant from two lines gives the bisector of the angle between them; fixed distance d from a line gives two lines parallel to it at distance d. Award 2 marks for the definition and 2 marks for each of the four special loci.", marks: 10 },
      ],
    },
  ],
};
