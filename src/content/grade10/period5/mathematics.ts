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
        "By the end of the topic, learners should be able to solve a pair of simultaneous linear equations in two unknowns using the substitution method and the elimination method, and check their solutions.",
      estimatedMinutes: 190,
      notes: `## What are simultaneous equations?

A single linear equation in two unknowns, such as x + y = 7, has **many** solutions (x = 3, y = 4 works, but so do x = 5, y = 2, and many others).

**Simultaneous equations** are **two** equations in **two unknowns** that must be true **at the same time**. Together they usually have **one** pair of values that satisfies **both**.

Example:
- x + y = 7
- x − y = 1

The solution (x = 4, y = 3) satisfies **both** equations.

There are two main algebraic methods: **substitution** and **elimination**.

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

- If you reach a **false** statement such as *0 = 5*, the equations **contradict** each other (their lines are **parallel**) — there is **no solution**.
- If you reach a statement that is **always true** such as *0 = 0*, the two equations are really the **same line** — there are **infinitely many** solutions.

A pair with exactly one solution (the usual case) represents two lines that **cross at one point**, which is the idea we make graphical in the next topic.`,
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
      teachingTip:
        "The commonest elimination error is subtracting when the coefficients are the same sign but forgetting to change every sign in the second equation. Give the rule: 'same signs, subtract; opposite signs, add' (SSS/OSA). Always insist on the final check in BOTH equations — it catches almost every arithmetic slip and is worth easy marks. For substitution, tell learners to substitute the whole bracket, keeping the expression in parentheses to avoid sign mistakes.",
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
      notes: `## The graphical idea

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

Together, the graph gives the picture and the algebra gives the precision.`,
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
  ],
};
