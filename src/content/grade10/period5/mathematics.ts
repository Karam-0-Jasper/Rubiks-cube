import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Mathematics, Grade 10,
// Semester Two, Period V: Simultaneous Linear Equations.
export const mathematicsG10P5: PeriodContent = {
  grade: 10,
  number: 5,
  title: "Simultaneous Linear Equations",
  summary:
    "Period V of the MoE Grade 10 Mathematics syllabus. Learners solve pairs of simultaneous linear equations in two unknowns by the substitution and elimination methods, interpret the solution graphically as the point where two lines cross, and use simultaneous equations to solve word problems.",
  topics: [
    {
      slug: "solving-simultaneous-equations",
      title: "Solving Simultaneous Equations by Substitution and Elimination",
      objective:
        "By the end of the topic, learners should be able to explain the truth set of a pair of simultaneous linear equations, solve them in two unknowns by the substitution and elimination methods, form and solve simultaneous equations from word problems, and check their solutions. (MoE Grade 10 Period V, 'Simultaneous Linear Equations'; aligned to Common Core 8.EE.C.8 — analyse and solve pairs of simultaneous linear equations.)",
      estimatedMinutes: 190,
      notes: `## Introduction

- One equation, two unknowns → endless answers. **Two** equations at once → usually one pair of values.
- **This lesson:** solving simultaneous equations by **substitution** and **elimination**; **word problems** → a pair of equations; special cases (no solution / infinitely many).

## What are simultaneous equations?

A single linear equation in two unknowns, such as x + y = 7, has **many** solutions (x = 3, y = 4 works, but so do x = 5, y = 2, and many others).

**Simultaneous equations** are **two** equations in **two unknowns** that must be true **at the same time**. Together they usually have **one** pair of values that satisfies **both**.

Example:
- x + y = 7
- x − y = 1

The solution (x = 4, y = 3) satisfies **both** equations.

## The truth set (solution set)

- The **truth set** of a pair of simultaneous equations is the set of value‑pairs that make **both** equations true at the same time.
- Usually it is a **single pair**, written as a set: {(4, 3)} for the example above.
- It can also be **empty** { } (no solution) or **infinite** (every point on one line) — see the special cases below.

There are two main algebraic methods for finding the truth set: **substitution** and **elimination**.

## Method 1 — substitution

**Substitution** means making one unknown the subject of one equation, then substituting it into the other.

Solve: y = 2x − 1 and x + y = 8.
1. The first equation already gives y = 2x − 1.
2. Substitute into the second: x + (2x − 1) = 8.
3. Simplify: 3x − 1 = 8 → 3x = 9 → **x = 3**.
4. Substitute back: y = 2(3) − 1 = **5**.

**Solution: x = 3, y = 5.**

## Method 2 — elimination

**Elimination** means adding or subtracting the equations to remove one unknown.

Solve: 2x + y = 11 and x − y = 1.
1. The y-terms are +y and −y. **Add** the equations to eliminate y:
   (2x + y) + (x − y) = 11 + 1 → 3x = 12 → **x = 4**.
2. Substitute into either equation: 4 − y = 1 → y = **3**.

**Solution: x = 4, y = 3.**

### Making coefficients match
If neither unknown cancels directly, **multiply** one or both equations first so a pair of coefficients match.

Solve: 3x + 2y = 16 and x + y = 6.
- Multiply the second by 2: 2x + 2y = 12.
- Subtract from the first: (3x + 2y) − (2x + 2y) = 16 − 12 → x = 4.
- Then 4 + y = 6 → y = 2. **Solution: x = 4, y = 2.**

## Always check

Substitute your answer into **both** original equations to be sure it works. Using x = 4, y = 3 in the elimination example: 2(4) + 3 = 11 ✓ and 4 − 3 = 1 ✓ — both true, so the solution is correct. A pair that fails either equation is wrong.

## When to use which method
- Use **substitution** when one equation already has a single x or y made the subject (e.g. *y = 2x − 1*), or is easy to rearrange.
- Use **elimination** when both equations are lined up as *ax + by = c*, especially when a pair of coefficients is already equal or opposite.

Both methods always give the **same** answer; choose whichever involves less work for the particular pair.

## Using simultaneous equations to solve word problems

Many real problems hide a pair of simultaneous equations. The skill is to **turn the words into two equations**, then solve as above. Follow four steps: (1) choose letters for the two unknowns; (2) write one equation from each fact; (3) solve; (4) answer in words.

**Example.** *Two exercise books and three pens cost 130 dollars. Three exercise books and two pens cost 120 dollars. Find the price of one book and one pen.*

1. Let a book cost **b** and a pen cost **p**.
2. From the two facts: 2b + 3p = 130 and 3b + 2p = 120.
3. Eliminate: multiply the first by 3 and the second by 2 → 6b + 9p = 390 and 6b + 4p = 240; subtract → 5p = 150 → **p = 30**; then 2b + 3(30) = 130 → 2b = 40 → **b = 20**.
4. **A book costs 20 dollars and a pen costs 30 dollars.**

## Special cases: when there is no single solution

Not every pair has exactly one solution. When you try to solve and **both unknowns disappear**, look at what is left:

- A **false** statement such as *0 = 5* → the lines are **parallel**, the truth set is **empty** → **no solution**. *(e.g. x + y = 4 and x + y = 7.)*
- An **always‑true** statement such as *0 = 0* → the two equations are the **same line** → **infinitely many** solutions. *(e.g. x + y = 3 and 2x + 2y = 6, giving y = 3 − x.)*

A pair with exactly one solution (the usual case) represents two lines that **cross at one point**, which is the idea we make graphical in the next topic.

## Common errors to watch for

- **Finding only one unknown** — a full solution needs **both** x and y; always substitute back to find the second unknown.
- **Sign slips when subtracting equations** — subtracting flips *every* sign in the second equation; work carefully, or add a negative instead.
- **Adding when you should subtract (or vice versa)** — to eliminate, **add** when the matched coefficients are *opposite* (+2y, −2y) and **subtract** when they are the *same* (+2y, +2y).
- **Forgetting to make coefficients match first** — if no unknown cancels directly, **multiply** one or both equations before eliminating.
- **Skipping the check** — substitute your pair into **both** original equations; a pair that fails either one is wrong.`,
      workedExample: `**Problem.** Solve the simultaneous equations by elimination, and check your answer:
   3x + 2y = 12
   x − 2y = 4

**Step 1 — choose the method**
The y-terms are **+2y** and **−2y**, which are opposites, so **adding** the equations will eliminate y directly.

**Step 2 — eliminate y**
(3x + 2y) + (x − 2y) = 12 + 4
3x + x + 2y − 2y = 16
4x = 16
**x = 4**

**Step 3 — find y**
Substitute x = 4 into either equation. Using x − 2y = 4:
4 − 2y = 4 → −2y = 0 → **y = 0**.

**Step 4 — check in both equations**
- 3(4) + 2(0) = 12 ✓
- 4 − 2(0) = 4 ✓

**Solution: x = 4, y = 0.** Because the answer satisfies both original equations, it is correct. When the coefficients of one unknown are equal and opposite, adding eliminates that unknown; when they are equal and the same sign, subtracting eliminates it.`,
      quiz: [
        {
          prompt: "Simultaneous equations are two equations that are true…",
          options: ["at the same time", "one at a time", "never together", "only when graphed"],
          correctIndex: 0,
          explanation: "Both equations must hold simultaneously.",
        },
        {
          prompt: "How many unknowns are in a standard pair of simultaneous linear equations?",
          options: ["two", "one", "three", "four"],
          correctIndex: 0,
          explanation: "Two equations in two unknowns.",
        },
        {
          prompt: "The two main algebraic methods are substitution and…",
          options: ["elimination", "factorisation", "differentiation", "rounding"],
          correctIndex: 0,
          explanation: "Substitution and elimination.",
        },
        {
          prompt: "In the substitution method, you first make one unknown the … of an equation.",
          options: ["subject", "coefficient", "constant", "power"],
          correctIndex: 0,
          explanation: "Express one unknown, then substitute it.",
        },
        {
          prompt: "To eliminate y from x + y = 7 and x − y = 1, you should…",
          options: ["add the equations", "subtract the equations", "multiply them", "divide them"],
          correctIndex: 0,
          explanation: "+y and −y cancel when added.",
        },
        {
          prompt: "Adding x + y = 7 and x − y = 1 gives…",
          options: ["2x = 8", "2y = 8", "2x = 6", "x = 7"],
          correctIndex: 0,
          explanation: "The y's cancel: 2x = 8.",
        },
        {
          prompt: "From 2x = 8, x =",
          options: ["4", "16", "6", "2"],
          correctIndex: 0,
          explanation: "x = 8 ÷ 2 = 4.",
        },
        {
          prompt: "If x = 4 and x + y = 7, then y =",
          options: ["3", "11", "4", "28"],
          correctIndex: 0,
          explanation: "y = 7 − 4 = 3.",
        },
        {
          prompt: "'Same signs, subtract; opposite signs, add' refers to eliminating an unknown by its…",
          options: ["coefficients", "constants", "powers", "brackets"],
          correctIndex: 0,
          explanation: "It tells you when to add or subtract the equations.",
        },
        {
          prompt: "In y = 2x − 1 and x + y = 8, substitution gives…",
          options: ["x + (2x − 1) = 8", "x + 2x − 1 = 0", "2x = 8", "y = 8"],
          correctIndex: 0,
          explanation: "Replace y with (2x − 1) in the second equation.",
        },
        {
          prompt: "Solving x + (2x − 1) = 8 gives x =",
          options: ["3", "9", "7", "2"],
          correctIndex: 0,
          explanation: "3x − 1 = 8 → 3x = 9 → x = 3.",
        },
        {
          prompt: "To eliminate y from 3x + 2y = 16 and x + y = 6, multiply the second by…",
          options: ["2", "3", "6", "0"],
          correctIndex: 0,
          explanation: "×2 makes 2x + 2y = 12, matching 2y.",
        },
        {
          prompt: "After you find both unknowns you should always…",
          options: ["check them in both equations", "round to zero", "graph them only", "ignore one equation"],
          correctIndex: 0,
          explanation: "Checking in both equations confirms the solution.",
        },
        {
          prompt: "Substitution is most convenient when one equation has…",
          options: ["a single x or y already (e.g. y = …)", "two large coefficients", "no constants", "fractions only"],
          correctIndex: 0,
          explanation: "If y is already isolated, substitution is quick.",
        },
        {
          prompt: "Subtracting 2x + 2y = 12 from 3x + 2y = 16 gives…",
          options: ["x = 4", "y = 4", "x = 28", "5x = 4"],
          correctIndex: 0,
          explanation: "The 2y terms cancel: x = 4.",
        },
        {
          prompt: "The solution of a pair of simultaneous equations is usually…",
          options: ["one pair of values (x, y)", "many pairs", "no values ever", "only x"],
          correctIndex: 0,
          explanation: "Two lines usually meet at one point.",
        },
        {
          prompt: "If 3x = 12, then x =",
          options: ["4", "36", "9", "15"],
          correctIndex: 0,
          explanation: "x = 12 ÷ 3 = 4.",
        },
        {
          prompt: "In elimination, if the coefficients of x are +5 and +5, you should…",
          options: ["subtract the equations", "add the equations", "multiply by 5", "divide by x"],
          correctIndex: 0,
          explanation: "Same signs → subtract to eliminate.",
        },
        {
          prompt: "Solve: x = 5, and x + 2y = 11. Then y =",
          options: ["3", "6", "8", "16"],
          correctIndex: 0,
          explanation: "5 + 2y = 11 → 2y = 6 → y = 3.",
        },
        {
          prompt: "A single equation like x + y = 10 alone has…",
          options: ["many solutions", "exactly one solution", "no solution", "two solutions"],
          correctIndex: 0,
          explanation: "One equation in two unknowns has infinitely many solutions.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Solve by elimination: 2x + y = 13 and x − y = 2.",
          answerKey:
            "Add the equations (y and −y cancel): 3x = 15 → x = 5. Then 5 − y = 2 → y = 3. Check: 2(5)+3=13 ✓, 5−3=2 ✓. Award marks for elimination, both values (x=5, y=3), and the check.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Solve by substitution: y = x + 2 and 2x + y = 11.",
          answerKey:
            "Substitute: 2x + (x + 2) = 11 → 3x + 2 = 11 → 3x = 9 → x = 3; then y = 3 + 2 = 5. Award marks for the substitution, x = 3, and y = 5.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "To eliminate a variable whose coefficients are +3 and +3 in two equations, you should…",
          options: ["subtract the equations", "add the equations", "multiply one by 3", "divide by 3"],
          correctIndex: 0,
          answerKey: "Same signs and equal coefficients — subtract to eliminate.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Two pens and three books cost L$130, while one pen and two books cost L$80. Form two simultaneous equations and solve to find the price of a pen and a book.",
          answerKey:
            "Let a pen = p and a book = b. Equations: 2p + 3b = 130 and p + 2b = 80. Multiply the second by 2: 2p + 4b = 160; subtract the first: (2p + 4b) − (2p + 3b) = 160 − 130 → b = 30; then p + 2(30) = 80 → p = 20. A pen costs L$20 and a book L$30. Award marks for forming both correct equations, solving them, and stating both prices.",
          marks: 5,
        },
      ],
    },
    {
      slug: "graphical-simultaneous-equations",
      title: "Graphical Solution of Simultaneous Equations",
      objective:
        "By the end of the topic, learners should be able to solve simultaneous linear equations graphically by plotting both lines and reading the point of intersection, and interpret cases with one, none or infinitely many solutions.",
      estimatedMinutes: 150,
      notes: `## Introduction

- Last topic solved simultaneous equations by algebra; this topic lets you **see** the solution.
- Each linear equation = a **straight line**; a pair = **two lines**; the solution = the **point where they cross**.
- **This lesson:** solving graphically (table → plot → read the intersection); the three cases — cross (one solution), parallel (none), coincide (infinitely many).

## The graphical idea

Every linear equation in x and y can be drawn as a **straight line**. A pair of simultaneous equations is therefore **two straight lines**, and their solution is the **point where the two lines cross (intersect)** — the single (x, y) that lies on both lines.

## Steps to solve graphically

1. **Make a table of values** for each equation (choose two or three x-values, work out y).
2. **Plot** each line on the same axes.
3. **Read off** the coordinates of the point where the lines **cross** — that is the solution.
4. **Check** by substituting the point into both equations.

*Example:* to solve x + y = 5 and y = x + 1, draw both lines; they cross at **(2, 3)**, so x = 2, y = 3.

\`\`\`svg Two lines crossing at the solution point
<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two straight lines intersecting at one point">
  <line x1="30" y1="170" x2="200" y2="170" stroke="#3730a3" stroke-width="1.5"/>
  <line x1="30" y1="170" x2="30" y2="20" stroke="#3730a3" stroke-width="1.5"/>
  <line x1="40" y1="40" x2="190" y2="160" stroke="#dc2626" stroke-width="2"/>
  <line x1="40" y1="160" x2="190" y2="40" stroke="#2563eb" stroke-width="2"/>
  <circle cx="115" cy="100" r="4" fill="#111"/>
  <text x="122" y="98" font-size="10" fill="#111">solution</text>
  <text x="185" y="150" font-size="10" fill="#dc2626">line 1</text>
  <text x="185" y="52" font-size="10" fill="#2563eb">line 2</text>
  <text x="150" y="185" font-size="10" fill="#3730a3">x</text>
  <text x="14" y="60" font-size="10" fill="#3730a3">y</text>
</svg>
\`\`\`

## Three possible cases

Two straight lines can be positioned in three ways:

- **They cross at one point** → **one solution** (the usual case).
- **They are parallel** (same gradient, never meet) → **no solution**.
- **They are the same line** (one equation is a multiple of the other) → **infinitely many solutions**.

## Graphical vs algebraic methods

- The **graphical method** shows the solution clearly and helps you *see* the three cases, but it is only as accurate as your drawing — good for whole-number answers.
- The **algebraic methods** (substitution, elimination) give **exact** answers, including fractions, and are more reliable for precise work.

Together, the graph gives the picture and the algebra gives the precision.

## Common errors to watch for

- **Plotting from too few or guessed points** — make a proper **table of values** (two or three points) for *each* line before drawing; guessing loses accuracy.
- **Misreading the intersection** — the solution is the (x, y) where the lines actually **cross**; read both coordinates carefully off the axes.
- **Trusting the graph for non-whole-number answers** — a drawing is only as accurate as the plotting; for fractions, use the **algebraic** methods.
- **Confusing the three cases** — lines that **cross** give one solution, **parallel** lines give none, and lines that **coincide** (same line) give infinitely many.
- **Forgetting to check** — substitute the read-off point into **both** equations to confirm it.`,
      workedExample: `**Task.** Solve the simultaneous equations x + y = 6 and y = 2x graphically.

**Step 1 — table of values for each line**

For **x + y = 6** (so y = 6 − x):

| x | 0 | 2 | 4 |
|---|---|---|---|
| y | 6 | 4 | 2 |

For **y = 2x**:

| x | 0 | 1 | 2 |
|---|---|---|---|
| y | 0 | 2 | 4 |

**Step 2 — plot both lines** on the same axes using these points.

**Step 3 — read the point of intersection.**
The two lines cross at the point **(2, 4)**.

**Step 4 — check in both equations.**
- x + y = 2 + 4 = 6 ✓
- y = 2x → 4 = 2(2) = 4 ✓

**Solution: x = 2, y = 4.**

**Interpretation:** because the lines cross at exactly one point, the equations have exactly **one solution**. (If the lines had been parallel, there would be no solution; if they had lain on top of each other, there would be infinitely many.)`,
      teachingTip:
        "Insist on at least a small table of values for each line before plotting — guessing points is where accuracy is lost. Reinforce that the intersection point is the answer, and that reading it off is only reliable for whole-number solutions, which is why the algebraic methods remain the go-to for exact answers. The three cases (cross / parallel / same line) are a favourite exam concept — have learners sketch each and say how many solutions it gives.",
      quiz: [
        {
          prompt: "A linear equation in x and y is drawn as a…",
          options: ["straight line", "circle", "curve", "point"],
          correctIndex: 0,
          explanation: "Linear equations graph as straight lines.",
        },
        {
          prompt: "The graphical solution of simultaneous equations is the point where the two lines…",
          options: ["cross (intersect)", "start", "are parallel", "end"],
          correctIndex: 0,
          explanation: "The intersection point satisfies both equations.",
        },
        {
          prompt: "The first step in the graphical method is to make a…",
          options: ["table of values", "guess", "single point", "bar chart"],
          correctIndex: 0,
          explanation: "A table of values gives points to plot.",
        },
        {
          prompt: "If two lines cross at one point, the equations have…",
          options: ["one solution", "no solution", "two solutions", "infinitely many"],
          correctIndex: 0,
          explanation: "A single intersection = one solution.",
        },
        {
          prompt: "If two lines are parallel, the equations have…",
          options: ["no solution", "one solution", "infinitely many", "two solutions"],
          correctIndex: 0,
          explanation: "Parallel lines never meet — no solution.",
        },
        {
          prompt: "If the two equations give the same line, they have…",
          options: ["infinitely many solutions", "one solution", "no solution", "two solutions"],
          correctIndex: 0,
          explanation: "Every point on the shared line is a solution.",
        },
        {
          prompt: "For x + y = 5 when x = 0, y =",
          options: ["5", "0", "−5", "1"],
          correctIndex: 0,
          explanation: "0 + y = 5 → y = 5.",
        },
        {
          prompt: "For y = 2x when x = 2, y =",
          options: ["4", "2", "1", "0"],
          correctIndex: 0,
          explanation: "y = 2 × 2 = 4.",
        },
        {
          prompt: "Parallel lines have the same…",
          options: ["gradient", "y-intercept", "solution", "length"],
          correctIndex: 0,
          explanation: "Equal gradients make lines parallel.",
        },
        {
          prompt: "After reading the intersection point, you should…",
          options: ["check it in both equations", "erase the graph", "double it", "ignore it"],
          correctIndex: 0,
          explanation: "Checking confirms the graphical answer.",
        },
        {
          prompt: "The graphical method is most accurate when the solution is…",
          options: ["whole numbers", "a fraction", "very large", "negative only"],
          correctIndex: 0,
          explanation: "Whole-number intersections are easy to read exactly.",
        },
        {
          prompt: "Which method gives an EXACT answer, even a fraction?",
          options: ["algebraic (substitution/elimination)", "graphical only", "guessing", "measuring"],
          correctIndex: 0,
          explanation: "Algebra gives exact solutions.",
        },
        {
          prompt: "The lines y = x + 1 and x + y = 5 cross at…",
          options: ["(2, 3)", "(3, 2)", "(1, 5)", "(0, 0)"],
          correctIndex: 0,
          explanation: "x + (x+1) = 5 → 2x = 4 → x = 2, y = 3.",
        },
        {
          prompt: "On a graph, the solution point lies on…",
          options: ["both lines", "neither line", "only one line", "the x-axis"],
          correctIndex: 0,
          explanation: "The point must satisfy both equations.",
        },
        {
          prompt: "To plot a straight line reliably, you need at least…",
          options: ["two points", "one point", "no points", "five points"],
          correctIndex: 0,
          explanation: "Two points determine a straight line (a third checks it).",
        },
        {
          prompt: "y = 2x passes through which point?",
          options: ["(0, 0)", "(0, 2)", "(2, 0)", "(1, 3)"],
          correctIndex: 0,
          explanation: "When x = 0, y = 0.",
        },
        {
          prompt: "Two lines that lie exactly on top of each other are…",
          options: ["the same line", "parallel", "perpendicular", "crossing once"],
          correctIndex: 0,
          explanation: "Identical lines share every point.",
        },
        {
          prompt: "Which is an advantage of the graphical method?",
          options: ["it shows the three cases clearly", "it is always exact", "it needs no drawing", "it works without axes"],
          correctIndex: 0,
          explanation: "The picture reveals one/none/infinite solutions.",
        },
        {
          prompt: "If a graph shows the lines never meeting, the number of solutions is…",
          options: ["zero", "one", "two", "infinite"],
          correctIndex: 0,
          explanation: "Non-meeting (parallel) lines give no solution.",
        },
        {
          prompt: "The point (2, 4) is a solution if it satisfies…",
          options: ["both equations", "one equation only", "neither equation", "the x-axis"],
          correctIndex: 0,
          explanation: "A solution must fit both equations.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Make tables of values for the lines y = x + 1 and y = 5 − x for x = 0, 1, 2, 3, and state where they cross.",
          answerKey:
            "y = x + 1: (0,1),(1,2),(2,3),(3,4). y = 5 − x: (0,5),(1,4),(2,3),(3,2). They cross at (2, 3). Award marks for correct tables and the intersection point (2, 3).",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Two parallel lines represent simultaneous equations with…",
          options: ["no solution", "one solution", "two solutions", "infinitely many solutions"],
          correctIndex: 0,
          answerKey: "Parallel lines never meet, so there is no solution.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain what the point of intersection of two lines represents when solving simultaneous equations.",
          answerKey:
            "The point of intersection is the single (x, y) pair that lies on both lines, so it satisfies both equations at the same time — it is the solution of the simultaneous equations. Award marks for identifying it as the common point satisfying both equations.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Compare the graphical and algebraic methods of solving simultaneous equations, giving one advantage of each.",
          answerKey:
            "A strong answer explains that the graphical method plots both lines and reads the intersection point, clearly showing the solution and the three possible cases (one, none or infinitely many solutions), but its accuracy depends on the drawing and it is best for whole-number answers. The algebraic methods (substitution and elimination) give exact answers, including fractions, and are more reliable for precise work but do not show the picture. Advantage of graphical: visual/shows cases; advantage of algebraic: exact/precise. Award marks for describing both methods and a valid advantage of each.",
          marks: 5,
        },
      ],
    },
    {
      slug: "vector-in-a-plane",
      title: "Vector in a Plane",
      objective:
        "By the end of the topic, learners should be able to distinguish scalar from vector quantities, name the types of vectors, find the magnitude and direction of a vector in a plane, add and subtract vectors (both by diagram and in component form), and multiply a vector by a scalar. (MoE Grade 10 Semester Two, Period V, 'Vector in a Plane'.)",
      estimatedMinutes: 170,
      notes: `## Introduction

- Some quantities need a **size only**; others need a **size and a direction**.
- A **vector** carries both — it is drawn as an arrow: length = size, arrowhead = direction.
- **This lesson:** scalar vs vector quantities; types of vectors; magnitude and direction; addition and subtraction; multiplication by a scalar.

## Scalar and vector quantities

- **Scalar** — a quantity with **magnitude (size) only**. Examples: mass, time, temperature, distance, speed, area.
- **Vector** — a quantity with **magnitude and direction**. Examples: displacement, velocity, acceleration, force, weight.
- Key contrast: **distance** (scalar) vs **displacement** (vector); **speed** (scalar) vs **velocity** (vector).

## Notation

- A vector is written **a** (bold), or **AB** with an arrow above it — the vector from point A to point B.
- Its **magnitude** is written |**a**| or |**AB**|.
- In a plane a vector is given by its **components**: **a** = (x, y) — x across, y up.

\`\`\`svg A vector drawn as an arrow in the plane
<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A vector as an arrow from the origin to the point (3,4)">
  <line x1="30" y1="150" x2="205" y2="150" stroke="#3730a3" stroke-width="1.5"/>
  <line x1="30" y1="150" x2="30" y2="15" stroke="#3730a3" stroke-width="1.5"/>
  <line x1="30" y1="150" x2="150" y2="50" stroke="#dc2626" stroke-width="2.5"/>
  <polygon points="150,50 140,52 146,60" fill="#dc2626"/>
  <line x1="150" y1="50" x2="150" y2="150" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="30" y1="150" x2="150" y2="150" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="95" y="88" font-size="11" fill="#dc2626">a</text>
  <text x="120" y="168" font-size="10" fill="#334155">x = 3</text>
  <text x="154" y="105" font-size="10" fill="#334155">y = 4</text>
  <text x="190" y="165" font-size="10" fill="#3730a3">x</text>
  <text x="14" y="30" font-size="10" fill="#3730a3">y</text>
</svg>
\`\`\`

## Types of vectors

- **Equal vectors** — same magnitude **and** same direction (position does not matter).
- **Negative vector** — **−a** has the same magnitude as **a** but the **opposite** direction.
- **Zero (null) vector** — magnitude 0, no definite direction; written **0**.
- **Unit vector** — magnitude exactly 1; used to show direction.
- **Position vector** — a vector from the **origin O** to a point, e.g. **OP**.
- **Parallel vectors** — same or opposite direction; one is a scalar multiple of the other.
- **Collinear vectors** — parallel vectors that lie on the same straight line.

## Magnitude and direction

For a vector **a** = (x, y) in a plane:

- **Magnitude** (length): |**a**| = √(x² + y²) — from Pythagoras.
- **Direction**: the angle θ measured from the positive x-axis, where tan θ = y / x.

*Example:* for **a** = (3, 4), |**a**| = √(3² + 4²) = √25 = **5**, and θ = tan⁻¹(4/3) ≈ **53.1°**.

## Addition and subtraction of vectors

**By components** — add/subtract matching parts:

- **a** + **b** = (x₁ + x₂, y₁ + y₂)
- **a** − **b** = (x₁ − x₂, y₁ − y₂)

**By diagram:**

- **Triangle law** — draw **b** starting at the head of **a**; the sum **a** + **b** is the arrow from the tail of **a** to the head of **b**.
- **Parallelogram law** — draw **a** and **b** from the same point; the diagonal of the parallelogram is **a** + **b**.
- **Subtraction** — **a** − **b** = **a** + (−**b**): reverse **b**, then add.

\`\`\`svg Triangle law of vector addition
<svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle law: vector a followed by vector b gives the resultant a plus b">
  <line x1="20" y1="130" x2="120" y2="90" stroke="#dc2626" stroke-width="2.5"/>
  <polygon points="120,90 110,90 114,98" fill="#dc2626"/>
  <line x1="120" y1="90" x2="200" y2="40" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="200,40 190,42 194,50" fill="#2563eb"/>
  <line x1="20" y1="130" x2="200" y2="40" stroke="#059669" stroke-width="2.5" stroke-dasharray="5 3"/>
  <polygon points="200,40 189,44 194,52" fill="#059669"/>
  <text x="60" y="122" font-size="11" fill="#dc2626">a</text>
  <text x="158" y="58" font-size="11" fill="#2563eb">b</text>
  <text x="95" y="78" font-size="11" fill="#059669">a + b</text>
</svg>
\`\`\`

## Multiplication of a vector by a scalar

- Multiplying **a** = (x, y) by a scalar k gives **k a** = (kx, ky).
- The result is **parallel** to **a**; its magnitude is **|k| × |a|**.
- If **k > 0**, same direction; if **k < 0**, opposite direction; if **k = 0**, the zero vector.

*Example:* if **a** = (3, 4), then 3**a** = (9, 12) and −2**a** = (−6, −8).

## Common errors to watch for

- **Treating a vector as a scalar** — a vector needs both magnitude **and** direction; do not drop the direction (distance vs displacement, speed vs velocity).
- **Adding magnitudes instead of components** — |**a** + **b**| is **not** |**a**| + |**b**| in general; add the x-parts and y-parts separately.
- **Wrong magnitude formula** — magnitude is √(x² + y²), not x + y.
- **Misplacing the second arrow in the triangle law** — **b** must start at the **head** of **a**, not at the same tail.
- **Sign slips in subtraction** — **a** − **b** reverses **b**; subtract each component (x₁ − x₂, y₁ − y₂), watch negatives.`,
      workedExample: `**Task.** Given the vectors **a** = (3, 4) and **b** = (−2, 5):
(i) find |**a**| and its direction, (ii) find **a** + **b** and **a** − **b**, (iii) find 3**a**.

**Part (i) — magnitude and direction of a = (3, 4)**
- |**a**| = √(3² + 4²) = √(9 + 16) = √25 = **5**.
- direction θ = tan⁻¹(4/3) ≈ **53.1°** above the positive x-axis.

**Part (ii) — addition and subtraction**
- **a** + **b** = (3 + (−2), 4 + 5) = **(1, 9)**.
- **a** − **b** = (3 − (−2), 4 − 5) = **(5, −1)**.

**Part (iii) — scalar multiple**
- 3**a** = (3 × 3, 3 × 4) = **(9, 12)**.
- Check: |3**a**| = √(9² + 12²) = √225 = 15 = 3 × 5 = 3|**a**| ✓ (magnitude scales by the scalar).

**Answers:** |**a**| = 5 at ≈ 53.1°; **a** + **b** = (1, 9); **a** − **b** = (5, −1); 3**a** = (9, 12).`,
      quiz: [
        {
          prompt: "A quantity with magnitude only is called a…",
          options: ["scalar", "vector", "unit vector", "resultant"],
          correctIndex: 0,
          explanation: "Scalars have size only; vectors have size and direction.",
        },
        {
          prompt: "A quantity with both magnitude and direction is a…",
          options: ["vector", "scalar", "digit", "constant"],
          correctIndex: 0,
          explanation: "Direction is what makes a quantity a vector.",
        },
        {
          prompt: "Which of these is a vector quantity?",
          options: ["velocity", "mass", "time", "temperature"],
          correctIndex: 0,
          explanation: "Velocity has direction; the others are scalars.",
        },
        {
          prompt: "Which of these is a scalar quantity?",
          options: ["distance", "displacement", "force", "acceleration"],
          correctIndex: 0,
          explanation: "Distance has size only; the others carry direction.",
        },
        {
          prompt: "The magnitude of the vector (x, y) is…",
          options: ["√(x² + y²)", "x + y", "x² + y²", "xy"],
          correctIndex: 0,
          explanation: "Magnitude comes from Pythagoras: √(x² + y²).",
        },
        {
          prompt: "The magnitude of the vector (3, 4) is…",
          options: ["5", "7", "12", "25"],
          correctIndex: 0,
          explanation: "√(9 + 16) = √25 = 5.",
        },
        {
          prompt: "The magnitude of the vector (6, 8) is…",
          options: ["10", "14", "48", "100"],
          correctIndex: 0,
          explanation: "√(36 + 64) = √100 = 10.",
        },
        {
          prompt: "A vector with magnitude exactly 1 is a…",
          options: ["unit vector", "zero vector", "position vector", "negative vector"],
          correctIndex: 0,
          explanation: "A unit vector has length 1 and shows direction.",
        },
        {
          prompt: "The zero (null) vector has magnitude…",
          options: ["0", "1", "undefined size", "infinity"],
          correctIndex: 0,
          explanation: "Its magnitude is 0 and it has no definite direction.",
        },
        {
          prompt: "The negative vector −a has, compared with a, the same magnitude but…",
          options: ["opposite direction", "same direction", "half the size", "zero size"],
          correctIndex: 0,
          explanation: "−a reverses direction, keeping the same length.",
        },
        {
          prompt: "If a = (2, 3) and b = (4, 1), then a + b =",
          options: ["(6, 4)", "(2, 4)", "(8, 3)", "(6, 3)"],
          correctIndex: 0,
          explanation: "Add components: (2+4, 3+1) = (6, 4).",
        },
        {
          prompt: "If a = (5, 6) and b = (2, 4), then a − b =",
          options: ["(3, 2)", "(7, 10)", "(3, 10)", "(7, 2)"],
          correctIndex: 0,
          explanation: "Subtract components: (5−2, 6−4) = (3, 2).",
        },
        {
          prompt: "If a = (3, −2), then 4a =",
          options: ["(12, −8)", "(7, 2)", "(12, 8)", "(3, −8)"],
          correctIndex: 0,
          explanation: "Multiply each component by 4: (12, −8).",
        },
        {
          prompt: "Multiplying a vector by a positive scalar k changes its…",
          options: ["magnitude, keeping direction", "direction, keeping magnitude", "components' signs", "nothing"],
          correctIndex: 0,
          explanation: "|ka| = |k||a|; direction is unchanged when k > 0.",
        },
        {
          prompt: "A position vector is measured from the…",
          options: ["origin", "x-axis", "nearest point", "arrowhead"],
          correctIndex: 0,
          explanation: "A position vector runs from the origin O to a point.",
        },
        {
          prompt: "In the triangle law, the second vector b is drawn starting at the…",
          options: ["head of a", "tail of a", "origin", "midpoint of a"],
          correctIndex: 0,
          explanation: "Head-to-tail: b begins where a ends.",
        },
        {
          prompt: "Two vectors that are scalar multiples of each other are…",
          options: ["parallel", "perpendicular", "equal in size", "always equal"],
          correctIndex: 0,
          explanation: "k a is parallel to a (same or opposite direction).",
        },
        {
          prompt: "The direction of the vector (x, y) satisfies tan θ =",
          options: ["y / x", "x / y", "x · y", "x + y"],
          correctIndex: 0,
          explanation: "θ = tan⁻¹(y/x) from the positive x-axis.",
        },
        {
          prompt: "Equal vectors must have the same magnitude and the same…",
          options: ["direction", "starting point", "colour", "length only"],
          correctIndex: 0,
          explanation: "Equal vectors match in both magnitude and direction.",
        },
        {
          prompt: "Speed is a scalar; the matching vector quantity is…",
          options: ["velocity", "distance", "mass", "time"],
          correctIndex: 0,
          explanation: "Velocity is speed together with a direction.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Define a scalar and a vector quantity, and give two examples of each.",
          answerKey:
            "A scalar has magnitude (size) only — e.g. mass, time, temperature, distance, speed (any two). A vector has magnitude and direction — e.g. displacement, velocity, acceleration, force, weight (any two). Award marks for two correct definitions and two valid examples of each.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "The vector a = (5, 12). Find its magnitude, and find −2a.",
          answerKey:
            "|a| = √(5² + 12²) = √(25 + 144) = √169 = 13. −2a = (−10, −24). Award marks for the magnitude 13 and the components (−10, −24).",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Given a = (4, −1) and b = (−3, 5), find a + b and a − b.",
          answerKey:
            "a + b = (4 + (−3), −1 + 5) = (1, 4). a − b = (4 − (−3), −1 − 5) = (7, −6). Award marks for each correct resultant.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which pair lists a scalar followed by a vector?",
          options: ["distance, displacement", "velocity, speed", "force, mass", "displacement, distance"],
          correctIndex: 0,
          answerKey: "Distance is a scalar; displacement is the matching vector.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the difference between scalar and vector quantities, and describe how two vectors are added both by components and by the triangle law.",
          answerKey:
            "A strong answer states that a scalar has magnitude only while a vector has magnitude and direction, with correct examples (distance/speed vs displacement/velocity/force). For component addition it explains adding matching parts: (x₁+x₂, y₁+y₂). For the triangle law it describes drawing the second vector from the head of the first, with the resultant running from the tail of the first to the head of the second (head-to-tail), and notes the parallelogram law as an equivalent construction. Award marks for the scalar/vector distinction, correct examples, the component rule, and a correct description of the triangle (head-to-tail) construction.",
          marks: 6,
        },
      ],
    },
  ],
};
