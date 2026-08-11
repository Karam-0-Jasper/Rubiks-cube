import type { PeriodContent } from "@/content/types";

// Grade 10, Semester Two, Period V of the MoE Mathematics syllabus:
// Simultaneous Linear Equations; Vector in a Plane. Notes rebuilt from
// published sources (Siyavula, CK-12, GeeksforGeeks).
export const mathematicsG10P5: PeriodContent = {
  grade: 10,
  number: 5,
  title: "Simultaneous Linear Equations and Vectors",
  summary:
    "Period V of the MoE Grade 10 Mathematics syllabus. Learners solve pairs of simultaneous linear equations graphically and by elimination and substitution, apply them to word problems, and study vectors in a plane — magnitude, direction, addition, subtraction and scalar multiplication.",
  topics: [
    // source: Siyavula — Solving simultaneous equations, Grade 10 (https://www.siyavula.com/read/za/mathematics/grade-10/equations-and-inequalities/04-equations-and-inequalities-03)
    {
      slug: "simultaneous-equations-graphical",
      title: "Simultaneous Equations: The Graphical Method",
      objective:
        "By the end of the topic, learners should be able to explain what a simultaneous solution and a truth set are, and solve a pair of linear equations by drawing both lines and reading the point of intersection.",
      estimatedMinutes: 110,
      notes: `## What simultaneous equations are

**Simultaneous linear equations** are two (or more) equations in two unknowns that must be true at the same time. The **solution** is the pair (x, y) that satisfies **both** equations.

The **truth set** is the set of ordered pairs that make an equation true; for two lines, the simultaneous solution is where their truth sets meet.

## The graphical method

1. Rewrite each equation in the form y = mx + c (or make a table of values).
2. Draw both straight lines on the same axes.
3. The **point of intersection** (where the lines cross) is the solution.
4. Read off its coordinates.

\`\`\`svg Two lines crossing at a single point, the simultaneous solution.
<svg viewBox="0 0 300 180" role="img" aria-label="Two straight lines intersecting at one point">
  <line x1="20" y1="160" x2="290" y2="160" stroke="currentColor" stroke-opacity="0.5"/>
  <line x1="40" y1="15" x2="40" y2="170" stroke="currentColor" stroke-opacity="0.5"/>
  <line x1="45" y1="150" x2="270" y2="40" stroke="#6366f1" stroke-width="2"/>
  <line x1="45" y1="40" x2="270" y2="150" stroke="#10b981" stroke-width="2"/>
  <circle cx="157" cy="95" r="4" fill="currentColor"/>
  <text x="163" y="88" font-size="11" fill="currentColor">solution</text>
</svg>
\`\`\`

## Number of solutions

- Lines **cross once** → one solution.
- Lines are **parallel** (same gradient, different intercept) → no solution.
- Lines are **identical** → infinitely many solutions.

## When to use the graphical method

It shows the solution visually and works well when the solution is a whole-number point, but reading exact fractional answers off a graph is hard — then use an algebraic method.

## Common errors

- **Plotting too few points** — use at least two accurate points per line.
- **Misreading the intersection** — check both coordinates in both equations.
- **Assuming there is always one solution** — parallel lines give none.`,
      workedExample: `**Question:** Solve graphically: x + y = 5 and y = x + 1.

**Solution**

*Step 1 — put both in y = mx + c form.*
Line 1: y = 5 − x (gradient −1, y-intercept 5).
Line 2: y = x + 1 (gradient 1, y-intercept 1).

*Step 2 — table of points.*

| x | y = 5 − x | y = x + 1 |
| --- | --- | --- |
| 0 | 5 | 1 |
| 2 | 3 | 3 |
| 4 | 1 | 5 |

*Step 3 — the lines meet where the y-values agree.* At x = 2 both give y = 3, so they cross at (2, 3).

*Step 4 — check.* x + y = 2 + 3 = 5 ✔; y = x + 1 → 3 = 2 + 1 ✔.

**Answer: x = 2, y = 3 (the point (2, 3)).**`,
      quiz: [
        { prompt: "The solution of two simultaneous equations is the point where their graphs", options: ["start", "cross", "are parallel", "meet the x-axis"], correctIndex: 1, explanation: "The intersection satisfies both equations." },
        { prompt: "Simultaneous linear equations involve", options: ["one unknown", "two unknowns satisfied at once", "only squares", "no variables"], correctIndex: 1, explanation: "Two equations in two unknowns, true together." },
        { prompt: "If two lines are parallel, the system has", options: ["one solution", "no solution", "two solutions", "infinite solutions"], correctIndex: 1, explanation: "Parallel lines never meet." },
        { prompt: "Two identical lines give", options: ["no solution", "one solution", "infinitely many solutions", "a parabola"], correctIndex: 2, explanation: "Every point on the line satisfies both." },
        { prompt: "To graph y = 2x − 1 you need at least", options: ["one point", "two points", "five points", "no points"], correctIndex: 1, explanation: "Two points determine a straight line." },
        { prompt: "The point (3,4) lies on x + y = 7 because", options: ["3 × 4 = 7", "3 + 4 = 7", "4 − 3 = 7", "it does not"], correctIndex: 1, explanation: "3 + 4 = 7 satisfies the equation." },
        { prompt: "The set of pairs making an equation true is its", options: ["gradient", "truth set", "intercept", "domain"], correctIndex: 1, explanation: "That is the definition of a truth set." },
        { prompt: "In y = mx + c form, y = 5 − x has gradient", options: ["5", "−1", "1", "0"], correctIndex: 1, explanation: "y = −x + 5, gradient −1." },
        { prompt: "Lines cross at (2, 3). This means", options: ["x = 2, y = 3", "x = 3, y = 2", "x = 2, y = 2", "no solution"], correctIndex: 0, explanation: "The coordinates give the solution." },
        { prompt: "The graphical method is least suitable when", options: ["the solution is a whole-number point", "the answer is a fraction", "lines are given", "there are two equations"], correctIndex: 1, explanation: "Fractional intersections are hard to read exactly." },
        { prompt: "y = x + 1 and y = x + 4 have", options: ["one solution", "no solution", "infinite solutions", "solution (0,0)"], correctIndex: 1, explanation: "Same gradient, different intercept: parallel, no solution." },
        { prompt: "Does (1,2) satisfy y = 2x?", options: ["yes", "no", "only if x = 2", "cannot tell"], correctIndex: 0, explanation: "2 = 2(1) is true." },
        { prompt: "The y-intercept of y = 3x − 6 is", options: ["3", "−6", "6", "0"], correctIndex: 1, explanation: "c = −6." },
        { prompt: "If the lines meet at one point, the number of solutions is", options: ["0", "1", "2", "infinite"], correctIndex: 1, explanation: "A single intersection is one solution." },
        { prompt: "To check a graphical solution you", options: ["redraw the graph", "substitute into both equations", "find the gradient", "measure the angle"], correctIndex: 1, explanation: "Both equations must hold." },
        { prompt: "The pair (0,5) lies on which line?", options: ["y = 5 − x", "y = x + 1", "y = 2x", "y = x − 5"], correctIndex: 0, explanation: "5 = 5 − 0 is true." },
        { prompt: "Two equations with the same graph have", options: ["no common point", "exactly one common point", "all points in common", "two common points"], correctIndex: 2, explanation: "Identical lines share every point." },
        { prompt: "A solution (x, y) must satisfy", options: ["only the first equation", "only the second equation", "both equations", "neither"], correctIndex: 2, explanation: "Simultaneous means both at once." },
        { prompt: "The gradient of y = x + 1 is", options: ["0", "1", "−1", "2"], correctIndex: 1, explanation: "m = 1." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "By drawing tables of values, solve graphically y = x + 2 and y = 6 − x.", answerKey: "y = x + 2 gives (0,2),(2,4); y = 6 − x gives (0,6),(2,4). They agree at (2,4), so x = 2, y = 4. Check: 4 = 2 + 2 and 4 = 6 − 2. Award 3 marks for the tables, 2 for the intersection, 2 for the check.", marks: 7 },
        { type: "SHORT_ANSWER", prompt: "State how many solutions each system has: (a) y = 2x + 1 and y = 2x − 3; (b) y = x and y = 4 − x.", answerKey: "(a) Same gradient 2, different intercept: parallel, no solution. (b) Different gradients: one solution (at (2,2)). Award 3 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Two lines have equations y = 3x and y = 3x + 5. How many solutions?", options: ["0", "1", "2", "infinite"], correctIndex: 0, answerKey: "Equal gradients, different intercepts, so parallel — no solution. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Verify that (4, 1) is the solution of x + y = 5 and x − y = 3.", answerKey: "x + y = 4 + 1 = 5 ✔; x − y = 4 − 1 = 3 ✔. Since both hold, (4,1) is the solution. Award 3 marks per equation checked.", marks: 6 },
        { type: "ESSAY", prompt: "Explain how the graphical method finds the solution of two simultaneous linear equations, and describe the three possible outcomes (one solution, no solution, infinitely many) in terms of the gradients and intercepts of the two lines.", answerKey: "Draw both lines on the same axes; the solution is the point of intersection, since that point lies on both lines and so satisfies both equations. Outcomes: different gradients → the lines cross once → one solution; equal gradients but different intercepts → parallel lines → no solution; equal gradients and equal intercepts → the same line → infinitely many solutions. Award 4 marks for the intersection idea, 2 marks for each of the three outcomes.", marks: 10 },
      ],
    },
    // source: Siyavula — Solving simultaneous equations (elimination & substitution), Grade 10 (https://www.siyavula.com/read/za/mathematics/grade-10/equations-and-inequalities/04-equations-and-inequalities-03)
    {
      slug: "simultaneous-equations-algebraic",
      title: "Simultaneous Equations: Substitution and Elimination",
      objective:
        "By the end of the topic, learners should be able to solve simultaneous linear equations by substitution and by elimination, and set up and solve simultaneous equations from word problems.",
      estimatedMinutes: 130,
      notes: `## Substitution method

1. Make one variable the subject in the simpler equation.
2. Substitute that expression into the other equation.
3. Solve the resulting one-variable equation.
4. Substitute back to find the second variable.
5. Check in both original equations.

Example: y = x + 1 and 2x + y = 7. Substitute: 2x + (x + 1) = 7 → 3x = 6 → x = 2, then y = 3.

## Elimination method

1. Arrange both equations with the variables lined up.
2. If needed, multiply one or both equations so that one variable has equal (or opposite) coefficients.
3. **Add** the equations to eliminate a variable if the coefficients are opposite; **subtract** if they are equal.
4. Solve for the remaining variable, then substitute back.
5. Check.

## Choosing a method

- Use **substitution** when one variable is already the subject (or easy to isolate).
- Use **elimination** when coefficients match or are easy to make match.

## Word problems

1. Choose two letters for the two unknowns.
2. Form two equations from the two pieces of information.
3. Solve by elimination or substitution, then interpret.

## Common errors

- **Adding when you should subtract** (equal coefficients) — this doubles instead of eliminating.
- **Substituting into the wrong equation** or forgetting to find the second variable.
- **Not checking** in both original equations.`,
      workedExample: `**Question:** Solve by elimination: 3x + 2y = 16 and x − 2y = 0.

**Solution**

*Step 1 — line up the equations.*
(1) 3x + 2y = 16
(2) x − 2y = 0

*Step 2 — the y-coefficients are +2 and −2 (opposite), so add the equations.*
(3x + x) + (2y − 2y) = 16 + 0
4x = 16
x = 4

*Step 3 — substitute x = 4 into equation (2).*
4 − 2y = 0
2y = 4
y = 2

*Step 4 — check in equation (1).* 3(4) + 2(2) = 12 + 4 = 16 ✔

**Answer: x = 4, y = 2.**`,
      quiz: [
        { prompt: "In the substitution method you first", options: ["add the equations", "make one variable the subject", "square both sides", "draw a graph"], correctIndex: 1, explanation: "Isolate one variable, then substitute." },
        { prompt: "To eliminate a variable whose coefficients are equal, you", options: ["add the equations", "subtract the equations", "multiply the equations", "divide"], correctIndex: 1, explanation: "Subtracting removes an equal-coefficient variable." },
        { prompt: "To eliminate a variable whose coefficients are opposite (+2 and −2), you", options: ["add the equations", "subtract the equations", "square them", "graph them"], correctIndex: 0, explanation: "Opposite coefficients cancel on addition." },
        { prompt: "If y = 2x and x + y = 9, then x is", options: ["3", "6", "9", "4.5"], correctIndex: 0, explanation: "x + 2x = 9, 3x = 9, x = 3." },
        { prompt: "With x = 3 in y = 2x, y is", options: ["3", "5", "6", "9"], correctIndex: 2, explanation: "y = 2(3) = 6." },
        { prompt: "Solve 2x + y = 8 and y = 4. Then x is", options: ["2", "4", "6", "8"], correctIndex: 0, explanation: "2x + 4 = 8, x = 2." },
        { prompt: "Adding x + y = 5 and x − y = 1 gives", options: ["2x = 6", "2y = 6", "2x = 4", "x = 5"], correctIndex: 0, explanation: "The y terms cancel: 2x = 6." },
        { prompt: "From 2x = 6, x is", options: ["2", "3", "6", "12"], correctIndex: 1, explanation: "x = 3." },
        { prompt: "Subtracting 3x + y = 10 from 3x + 2y = 14 gives", options: ["y = 4", "y = 24", "6x = 24", "y = −4"], correctIndex: 0, explanation: "The 3x terms cancel: y = 4." },
        { prompt: "Which method is best when a variable is already isolated?", options: ["elimination", "substitution", "graphing", "guessing"], correctIndex: 1, explanation: "Substitute the isolated expression directly." },
        { prompt: "Solve x + y = 10 and x − y = 2. Then x, y are", options: ["6, 4", "4, 6", "5, 5", "8, 2"], correctIndex: 0, explanation: "Add: 2x = 12, x = 6, y = 4." },
        { prompt: "If 4x = 16, then x is", options: ["2", "3", "4", "8"], correctIndex: 2, explanation: "x = 4." },
        { prompt: "After finding one variable you should", options: ["stop", "substitute back for the other", "graph it", "add the equations again"], correctIndex: 1, explanation: "Back-substitute to find the second variable." },
        { prompt: "Solve 5x − y = 9 and y = x + 3. Then x is", options: ["2", "3", "4", "6"], correctIndex: 1, explanation: "5x − (x+3) = 9, 4x = 12, x = 3." },
        { prompt: "The sum of two numbers is 12 and their difference is 4. The larger number is", options: ["6", "8", "4", "10"], correctIndex: 1, explanation: "x + y = 12, x − y = 4, add: 2x = 16, x = 8." },
        { prompt: "To make the x-coefficients equal in x + 2y = 5 and 3x − y = 1, multiply the first by", options: ["2", "3", "5", "1"], correctIndex: 1, explanation: "×3 gives 3x + 6y = 15, matching 3x." },
        { prompt: "If x − 2y = 0 then x equals", options: ["2y", "−2y", "y/2", "2 + y"], correctIndex: 0, explanation: "x = 2y." },
        { prompt: "Checking a solution means substituting into", options: ["one equation", "both original equations", "the graph", "neither"], correctIndex: 1, explanation: "It must satisfy both." },
        { prompt: "Solve 2x + 3y = 12 and 2x + y = 8. Subtracting gives", options: ["2y = 4", "4y = 20", "2x = 4", "y = 8"], correctIndex: 0, explanation: "2x cancels: 2y = 4, y = 2." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Solve by substitution: y = 2x − 1 and 3x + y = 14.", answerKey: "Substitute: 3x + (2x − 1) = 14, so 5x − 1 = 14, 5x = 15, x = 3. Then y = 2(3) − 1 = 5. Check: 3(3)+5 = 14. Award 3 marks for substituting, 2 for x = 3, 1 for y = 5, 1 for the check (7 total).", marks: 7 },
        { type: "SHORT_ANSWER", prompt: "Solve by elimination: 2x + 3y = 13 and 2x − y = 1.", answerKey: "Subtract: (3y − (−y)) = 4y = 12, so y = 3. Then 2x − 3 = 1, 2x = 4, x = 2. Check: 2(2)+3(3) = 13. Award 3 marks for eliminating x, 2 for y = 3, 1 for x = 2.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "The solution of x + y = 7 and x − y = 3 is", options: ["(5, 2)", "(2, 5)", "(4, 3)", "(3, 4)"], correctIndex: 0, answerKey: "Add: 2x = 10, x = 5, y = 2. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Two pens and three books cost 26 dollars; one pen and two books cost 15 dollars. Find the cost of a pen and of a book.", answerKey: "Let pen = p, book = b. 2p + 3b = 26 and p + 2b = 15. From the second, p = 15 − 2b. Substitute: 2(15 − 2b) + 3b = 26 → 30 − 4b + 3b = 26 → −b = −4 → b = 4, then p = 15 − 8 = 7. Pen = 7, book = 4. Award 3 marks for the two equations, 4 for solving, 3 for both costs with check.", marks: 10 },
        { type: "ESSAY", prompt: "Describe the elimination method step by step and use it to solve 4x + y = 11 and 3x − y = 3, explaining why you add rather than subtract.", answerKey: "Steps: line up the equations, make a variable's coefficients equal or opposite, add (if opposite) or subtract (if equal) to eliminate it, solve, then back-substitute and check. Here the y-coefficients are +1 and −1 (opposite), so adding cancels y: 7x = 14, x = 2. Then 4(2) + y = 11, y = 3. Check 3(2) − 3 = 3 ✔. We add because the coefficients are opposite, so their sum is zero. Award 4 marks for the described method, 4 for the correct solution, 2 for the add-vs-subtract justification.", marks: 10 },
      ],
    },
    // source: GeeksforGeeks — Scalars and Vectors / Vector Addition (https://www.geeksforgeeks.org/physics/scalars-and-vectors/)
    {
      slug: "vectors-in-a-plane",
      title: "Vectors in a Plane",
      objective:
        "By the end of the topic, learners should be able to distinguish scalars from vectors, find the magnitude and direction of a vector, and add, subtract and scalar-multiply vectors.",
      estimatedMinutes: 120,
      notes: `## Scalars and vectors

- A **scalar** has magnitude (size) only: mass, distance, time, temperature, speed.
- A **vector** has both **magnitude and direction**: displacement, velocity, force, acceleration.

A vector is drawn as an arrow: its length shows the magnitude, its arrowhead shows the direction.

## Column (component) form

In a plane a vector is written as components: a = (x, y), meaning x units across and y units up.

\`\`\`svg A vector arrow from the origin to the point (3, 4).
<svg viewBox="0 0 220 180" role="img" aria-label="Vector from origin to point (3,4)">
  <line x1="20" y1="160" x2="210" y2="160" stroke="currentColor" stroke-opacity="0.5"/>
  <line x1="30" y1="20" x2="30" y2="170" stroke="currentColor" stroke-opacity="0.5"/>
  <line x1="30" y1="160" x2="150" y2="60" stroke="#6366f1" stroke-width="2.5"/>
  <polygon points="150,60 138,64 146,72" fill="#6366f1"/>
  <text x="95" y="100" font-size="12" fill="currentColor">a = (3, 4)</text>
</svg>
\`\`\`

## Magnitude of a vector

The **magnitude** (length) of a = (x, y) is found by Pythagoras:

|a| = √(x² + y²)

For a = (3, 4): |a| = √(9 + 16) = √25 = 5.

## Direction

The direction is the angle θ the vector makes with the horizontal, where tan θ = y/x.

## Adding and subtracting vectors

Add or subtract the corresponding components:
- (a, b) + (c, d) = (a + c, b + d)
- (a, b) − (c, d) = (a − c, b − d)

Geometrically, addition follows the **triangle (tip-to-tail)** rule: the resultant runs from the start of the first to the tip of the second.

## Scalar multiplication

Multiplying a vector by a scalar k multiplies each component by k:
k(a, b) = (ka, kb)

- k > 0 keeps the direction; k < 0 reverses it; |k| stretches (>1) or shrinks (<1) the length.

## Common errors

- **Treating speed and velocity as the same** — velocity is a vector, speed is a scalar.
- **Forgetting the square root** in the magnitude.
- **Adding magnitudes instead of components** — add component by component.`,
      workedExample: `**Question:** Given a = (3, 4) and b = (1, 2), find (a) |a|, (b) a + b, and (c) 2a.

**Solution**

*Part (a) — magnitude.*
|a| = √(3² + 4²) = √(9 + 16) = √25 = 5

*Part (b) — add components.*
a + b = (3 + 1, 4 + 2) = (4, 6)

*Part (c) — scalar multiply.*
2a = (2 × 3, 2 × 4) = (6, 8), and |2a| = √(36 + 64) = √100 = 10 = 2 × |a| ✔

**Answer:** (a) |a| = 5; (b) a + b = (4, 6); (c) 2a = (6, 8).`,
      quiz: [
        { prompt: "Which quantity is a vector?", options: ["mass", "temperature", "velocity", "time"], correctIndex: 2, explanation: "Velocity has magnitude and direction." },
        { prompt: "Which quantity is a scalar?", options: ["displacement", "force", "distance", "acceleration"], correctIndex: 2, explanation: "Distance has magnitude only." },
        { prompt: "The magnitude of (6, 8) is", options: ["10", "14", "48", "100"], correctIndex: 0, explanation: "√(36 + 64) = √100 = 10." },
        { prompt: "(2, 3) + (4, 1) equals", options: ["(6, 4)", "(8, 3)", "(6, 3)", "(2, 4)"], correctIndex: 0, explanation: "Add components: (6, 4)." },
        { prompt: "3(2, −1) equals", options: ["(6, −3)", "(5, 2)", "(6, 3)", "(2, −3)"], correctIndex: 0, explanation: "Multiply each component by 3." },
        { prompt: "A vector is drawn as", options: ["a dot", "an arrow", "a circle", "a square"], correctIndex: 1, explanation: "Length = magnitude, arrowhead = direction." },
        { prompt: "The magnitude of (3, 4) is", options: ["5", "7", "12", "25"], correctIndex: 0, explanation: "√(9 + 16) = 5." },
        { prompt: "(5, 2) − (1, 3) equals", options: ["(4, −1)", "(6, 5)", "(4, 5)", "(−4, 1)"], correctIndex: 0, explanation: "Subtract components: (4, −1)." },
        { prompt: "Multiplying a vector by a negative scalar", options: ["keeps its direction", "reverses its direction", "makes it a scalar", "removes it"], correctIndex: 1, explanation: "A negative scalar flips the direction." },
        { prompt: "Speed differs from velocity because velocity also has", options: ["mass", "direction", "time", "temperature"], correctIndex: 1, explanation: "Velocity is a vector with direction." },
        { prompt: "The direction of a vector (x, y) satisfies", options: ["tan θ = y/x", "sin θ = x", "θ = x + y", "tan θ = x/y"], correctIndex: 0, explanation: "tan θ = opposite/adjacent = y/x." },
        { prompt: "2(3, 5) equals", options: ["(6, 10)", "(5, 7)", "(6, 5)", "(3, 10)"], correctIndex: 0, explanation: "(6, 10)." },
        { prompt: "The magnitude of (0, 7) is", options: ["0", "7", "49", "14"], correctIndex: 1, explanation: "√(0 + 49) = 7." },
        { prompt: "Vector addition geometrically uses the", options: ["circle rule", "triangle (tip-to-tail) rule", "square rule", "angle rule"], correctIndex: 1, explanation: "The resultant runs tip-to-tail." },
        { prompt: "(1, 1) + (1, 1) equals", options: ["(2, 2)", "(1, 1)", "(0, 0)", "(2, 0)"], correctIndex: 0, explanation: "Add components: (2, 2)." },
        { prompt: "Which is NOT a vector quantity?", options: ["force", "displacement", "acceleration", "speed"], correctIndex: 3, explanation: "Speed is a scalar." },
        { prompt: "−1(4, −2) equals", options: ["(−4, 2)", "(4, 2)", "(−4, −2)", "(4, −2)"], correctIndex: 0, explanation: "Reverse each component's sign." },
        { prompt: "The magnitude of (8, 6) is", options: ["10", "14", "48", "√14"], correctIndex: 0, explanation: "√(64 + 36) = √100 = 10." },
        { prompt: "If |a| = 5 then |3a| is", options: ["5", "8", "15", "125"], correctIndex: 2, explanation: "Scalar 3 multiplies the magnitude: 3 × 5 = 15." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Given a = (5, 12), find its magnitude |a| and 2a.", answerKey: "|a| = √(5² + 12²) = √(25 + 144) = √169 = 13. 2a = (10, 24). Award 3 marks for the magnitude, 3 for 2a.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Given p = (2, 5) and q = (6, −1), find p + q and p − q.", answerKey: "p + q = (8, 4); p − q = (−4, 6). Award 3 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which pair are both vector quantities?", options: ["distance and speed", "force and velocity", "mass and time", "temperature and distance"], correctIndex: 1, answerKey: "Force and velocity both have magnitude and direction. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A vector is (−3, 4). Find its magnitude, and state whether the vector −2(−3, 4) points in the same or opposite direction.", answerKey: "Magnitude = √(9 + 16) = √25 = 5. −2(−3, 4) = (6, −8); because the scalar is negative, the direction is reversed (opposite). Award 3 marks for the magnitude, 3 for computing (6, −8) with the opposite-direction reason.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the difference between a scalar and a vector with two examples of each, describe how to add two vectors in component form, and how scalar multiplication changes a vector's magnitude and direction.", answerKey: "A scalar has magnitude only (e.g. mass, time, distance, speed); a vector has magnitude and direction (e.g. displacement, velocity, force, acceleration). To add vectors in component form, add corresponding components: (a,b) + (c,d) = (a+c, b+d). Scalar multiplication by k multiplies each component by k, scaling the magnitude by |k|; if k > 0 the direction is unchanged, if k < 0 the direction is reversed. Award 4 marks for the scalar/vector distinction with examples, 3 for component addition, 3 for the effect of scalar multiplication.", marks: 10 },
      ],
    },
  ],
};
