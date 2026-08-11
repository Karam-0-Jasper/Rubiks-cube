import type { PeriodContent } from "@/content/types";

// Grade 10, Semester Two, Period IV of the MoE Mathematics syllabus:
// Linear Equations and Inequalities; Relations and Functions. Notes rebuilt
// from published sources (Siyavula, CK-12).
export const mathematicsG10P4: PeriodContent = {
  grade: 10,
  number: 4,
  title: "Linear Equations, Inequalities and Functions",
  summary:
    "Period IV of the MoE Grade 10 Mathematics syllabus. Learners solve linear equations and word problems, solve and graph linear inequalities in one variable, work with relations and functions (domain, range, function notation), and use gradient and the distance formula in the coordinate plane.",
  topics: [
    // source: Siyavula — Solving linear equations, Grade 10 (https://www.siyavula.com/read/za/mathematics/grade-10/equations-and-inequalities/04-equations-and-inequalities-01)
    {
      slug: "linear-equations",
      title: "Solving Linear Equations and Word Problems",
      objective:
        "By the end of the topic, learners should be able to use the balance (equivalence) idea to solve linear equations in one variable, including those with brackets and fractions, and set up equations from word problems.",
      estimatedMinutes: 120,
      notes: `## Equality and equivalence

- An **equation** states that two expressions are equal.
- **Equivalent equations** have the same solution. You keep equations equivalent by doing the **same operation to both sides** (add, subtract, multiply or divide).
- The **solution set** is the value(s) of the variable that make the equation true.

## A linear equation

A **linear equation** has the variable to the power 1 only (no x², no 1/x). Its graph is a straight line and it has exactly one solution.

## Steps to solve

1. Remove brackets (distribute).
2. Remove fractions by multiplying every term by the common denominator.
3. Collect the variable terms on one side, the constants on the other.
4. Simplify to the form ax = b.
5. Divide both sides by a.
6. Check by substituting back.

## Worked pattern

2x + 5 = 13 → 2x = 8 → x = 4.

## Word problems

1. Let a letter stand for the unknown.
2. Translate the sentence into an equation.
3. Solve and interpret the answer in context.

"When 7 is added to a number, the result is 19." → x + 7 = 19 → x = 12.

## Common errors

- **Doing an operation to only one side** — always balance both sides.
- **Sign errors when moving terms** — moving +5 to the other side makes it −5.
- **Forgetting to multiply every term** when clearing fractions.`,
      workedExample: `**Question:** Solve 3(x − 2) = 2x + 5.

**Solution**

*Step 1 — remove the bracket.*
3x − 6 = 2x + 5

*Step 2 — collect variable terms on one side.* Subtract 2x from both sides.
3x − 2x − 6 = 5
x − 6 = 5

*Step 3 — collect constants.* Add 6 to both sides.
x = 11

*Step 4 — check.* Left: 3(11 − 2) = 3(9) = 27. Right: 2(11) + 5 = 22 + 5 = 27. ✔

**Answer: x = 11**`,
      quiz: [
        { prompt: "Solve x + 8 = 15.", options: ["7", "23", "8", "−7"], correctIndex: 0, explanation: "Subtract 8: x = 7." },
        { prompt: "Solve 2x = 18.", options: ["9", "16", "20", "36"], correctIndex: 0, explanation: "Divide by 2: x = 9." },
        { prompt: "Solve 3x − 4 = 11.", options: ["5", "7", "3", "15"], correctIndex: 0, explanation: "3x = 15, x = 5." },
        { prompt: "Equivalent equations have the same", options: ["coefficients", "solution", "number of terms", "graph slope only"], correctIndex: 1, explanation: "They share the same solution set." },
        { prompt: "To keep an equation balanced you must", options: ["change one side", "do the same to both sides", "remove the variable", "add 1 to the left"], correctIndex: 1, explanation: "Whatever you do to one side you do to the other." },
        { prompt: "Solve x/3 = 5.", options: ["8", "15", "2", "5/3"], correctIndex: 1, explanation: "Multiply both sides by 3: x = 15." },
        { prompt: "Solve 5x + 2 = 3x + 10.", options: ["2", "4", "6", "3"], correctIndex: 1, explanation: "2x = 8, x = 4." },
        { prompt: "A linear equation has the variable to the power", options: ["2", "1", "0", "any"], correctIndex: 1, explanation: "Power 1 only." },
        { prompt: "Solve 2(x + 3) = 14.", options: ["4", "5", "7", "8"], correctIndex: 0, explanation: "2x + 6 = 14, 2x = 8, x = 4." },
        { prompt: "'5 less than twice a number is 9' gives", options: ["2x − 5 = 9", "5 − 2x = 9", "2x + 5 = 9", "x − 5 = 9"], correctIndex: 0, explanation: "Twice the number less 5: 2x − 5 = 9." },
        { prompt: "Solve 4x − 7 = 2x + 1.", options: ["2", "3", "4", "8"], correctIndex: 2, explanation: "2x = 8, x = 4." },
        { prompt: "Solve −3x = 12.", options: ["4", "−4", "9", "−9"], correctIndex: 1, explanation: "Divide by −3: x = −4." },
        { prompt: "Solve x − 5 = −2.", options: ["3", "−7", "7", "−3"], correctIndex: 0, explanation: "Add 5: x = 3." },
        { prompt: "To clear the fraction in x/4 + 1 = 3, multiply every term by", options: ["1", "3", "4", "x"], correctIndex: 2, explanation: "The denominator is 4." },
        { prompt: "Solve 6x = 0.", options: ["0", "6", "1", "no solution"], correctIndex: 0, explanation: "x = 0." },
        { prompt: "When 7 is added to a number the result is 19. The number is", options: ["12", "26", "133", "7"], correctIndex: 0, explanation: "x + 7 = 19, x = 12." },
        { prompt: "Solve 3(2x − 1) = 15.", options: ["2", "3", "4", "5"], correctIndex: 1, explanation: "6x − 3 = 15, 6x = 18, x = 3." },
        { prompt: "The solution of 2x + 5 = 5 is", options: ["0", "5", "−5", "2.5"], correctIndex: 0, explanation: "2x = 0, x = 0." },
        { prompt: "Moving +4 from the left to the right side of an equation makes it", options: ["+4", "−4", "×4", "÷4"], correctIndex: 1, explanation: "It changes sign to −4." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Solve 4(x − 1) = 2(x + 3) and check your answer.", answerKey: "4x − 4 = 2x + 6; 2x = 10; x = 5. Check: 4(4) = 16 and 2(8) = 16. Award 2 marks for expanding, 3 for solving, 2 for the check.", marks: 7 },
        { type: "SHORT_ANSWER", prompt: "Solve x/2 + x/3 = 5.", answerKey: "Multiply by 6: 3x + 2x = 30, so 5x = 30, x = 6. Award 3 marks for clearing fractions, 2 for solving, 1 for the answer.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Solve 5x − 3 = 2x + 9.", options: ["2", "4", "6", "3"], correctIndex: 1, answerKey: "3x = 12, x = 4. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "The sum of three consecutive whole numbers is 72. Find the numbers.", answerKey: "Let the numbers be n, n+1, n+2. Then 3n + 3 = 72, 3n = 69, n = 23. Numbers: 23, 24, 25. Award 2 marks for setting up, 2 for solving, 2 for stating all three.", marks: 6 },
        { type: "ESSAY", prompt: "Musu is three times as old as her brother. In 5 years the sum of their ages will be 46. Form an equation and find their present ages.", answerKey: "Let the brother's age be x, so Musu is 3x. In 5 years: (x + 5) + (3x + 5) = 46, so 4x + 10 = 46, 4x = 36, x = 9. Brother is 9, Musu is 27. Check in 5 years: 14 + 32 = 46. Award 3 marks for defining variables, 4 for the equation and solving, 3 for the ages with check.", marks: 10 },
      ],
    },
    // source: Siyavula — Solving linear inequalities, Grade 10 (https://www.siyavula.com/read/za/mathematics/grade-10/equations-and-inequalities/04-equations-and-inequalities-06)
    {
      slug: "linear-inequalities",
      title: "Linear Inequalities in One Variable",
      objective:
        "By the end of the topic, learners should be able to solve linear inequalities in one variable, remember to reverse the sign when multiplying or dividing by a negative, and represent the solution on a number line.",
      estimatedMinutes: 110,
      notes: `## Inequality symbols

- **<** less than, **>** greater than
- **≤** less than or equal to, **≥** greater than or equal to

An inequality has a **range** of solutions, not a single value.

## Solving inequalities

Solve just like an equation, with one crucial rule:

**When you multiply or divide both sides by a negative number, reverse the inequality sign.**

- 2x − 3 ≤ 7 → 2x ≤ 10 → x ≤ 5
- −2x < 6 → x > −3 (divided by −2, so the sign flips)

## Representing on a number line

- An **open circle** (○) marks a value that is **not** included (< or >).
- A **closed circle** (●) marks a value that **is** included (≤ or ≥).
- Shade the ray in the direction of the solutions.

\`\`\`svg Number line showing x ≤ 5 with a closed circle at 5, shaded to the left.
<svg viewBox="0 0 320 80" role="img" aria-label="Number line for x less than or equal to 5">
  <line x1="15" y1="45" x2="305" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="15,45 23,41 23,49" fill="currentColor"/>
  <g font-size="10" fill="currentColor" text-anchor="middle">
    <line x1="90" y1="40" x2="90" y2="50" stroke="currentColor"/><text x="90" y="66">3</text>
    <line x1="150" y1="40" x2="150" y2="50" stroke="currentColor"/><text x="150" y="66">4</text>
    <line x1="210" y1="40" x2="210" y2="50" stroke="currentColor"/><text x="210" y="66">5</text>
  </g>
  <line x1="15" y1="45" x2="210" y2="45" stroke="#6366f1" stroke-width="3"/>
  <circle cx="210" cy="45" r="5" fill="#6366f1"/>
</svg>
\`\`\`

## Word problems

Translate "at least" as ≥, "at most" as ≤, "more than" as >, "less than" as <.

## Common errors

- **Forgetting to flip the sign** when dividing by a negative — the most common slip.
- **Using a closed circle for < or >** — those need an open circle.
- **Shading the wrong direction.**`,
      workedExample: `**Question:** Solve −3x + 4 ≥ 13 and show the solution on a number line.

**Solution**

*Step 1 — subtract 4 from both sides.*
−3x ≥ 9

*Step 2 — divide both sides by −3, and reverse the sign.*
x ≤ −3

*Step 3 — number line.* Closed circle at −3 (because of ≥ becoming ≤), shaded to the left toward smaller numbers.

*Check:* try x = −4: −3(−4) + 4 = 12 + 4 = 16 ≥ 13 ✔; try x = 0: 4 ≥ 13 is false, correctly excluded.

**Answer: x ≤ −3**`,
      quiz: [
        { prompt: "The symbol ≥ means", options: ["less than", "greater than or equal to", "not equal to", "less than or equal to"], correctIndex: 1, explanation: "≥ is 'greater than or equal to'." },
        { prompt: "Solve x + 3 < 10.", options: ["x < 7", "x > 7", "x < 13", "x > 13"], correctIndex: 0, explanation: "Subtract 3: x < 7." },
        { prompt: "Solve 2x ≤ 12.", options: ["x ≤ 6", "x ≥ 6", "x ≤ 24", "x ≥ 24"], correctIndex: 0, explanation: "Divide by 2: x ≤ 6." },
        { prompt: "When dividing an inequality by a negative number you must", options: ["do nothing special", "reverse the inequality sign", "square both sides", "add the number"], correctIndex: 1, explanation: "The sign flips." },
        { prompt: "Solve −x > 4.", options: ["x > 4", "x < −4", "x > −4", "x < 4"], correctIndex: 1, explanation: "Multiply by −1 and flip: x < −4." },
        { prompt: "An open circle on a number line means the value is", options: ["included", "not included", "negative", "zero"], correctIndex: 1, explanation: "Open circle = strict inequality, not included." },
        { prompt: "Solve 3x − 1 ≥ 8.", options: ["x ≥ 3", "x ≤ 3", "x ≥ 9", "x ≤ 9"], correctIndex: 0, explanation: "3x ≥ 9, x ≥ 3." },
        { prompt: "'At least 5' is written", options: ["x < 5", "x ≤ 5", "x ≥ 5", "x > 5"], correctIndex: 2, explanation: "'At least' means ≥." },
        { prompt: "Solve −2x ≤ 10.", options: ["x ≤ −5", "x ≥ −5", "x ≤ 5", "x ≥ 5"], correctIndex: 1, explanation: "Divide by −2 and flip: x ≥ −5." },
        { prompt: "A closed circle is used for", options: ["< and >", "≤ and ≥", "= only", "≠"], correctIndex: 1, explanation: "≤ and ≥ include the endpoint." },
        { prompt: "Solve x − 4 > −1.", options: ["x > 3", "x < 3", "x > −5", "x < −5"], correctIndex: 0, explanation: "Add 4: x > 3." },
        { prompt: "'At most 20' means", options: ["x ≥ 20", "x ≤ 20", "x > 20", "x = 20"], correctIndex: 1, explanation: "'At most' means ≤." },
        { prompt: "Solve 5 − x < 2.", options: ["x > 3", "x < 3", "x > 7", "x < 7"], correctIndex: 0, explanation: "−x < −3, so x > 3 after flipping." },
        { prompt: "How many integer solutions does 1 ≤ x < 4 have?", options: ["2", "3", "4", "infinite"], correctIndex: 1, explanation: "x = 1, 2, 3." },
        { prompt: "Solve 4x + 3 ≤ 3.", options: ["x ≤ 0", "x ≥ 0", "x ≤ 1.5", "x ≥ 1.5"], correctIndex: 0, explanation: "4x ≤ 0, x ≤ 0." },
        { prompt: "The solutions of an inequality form", options: ["one value", "a range of values", "no values ever", "only integers"], correctIndex: 1, explanation: "An inequality has a range of solutions." },
        { prompt: "Solve −5x > −20.", options: ["x < 4", "x > 4", "x < −4", "x > −4"], correctIndex: 0, explanation: "Divide by −5 and flip: x < 4." },
        { prompt: "Which value satisfies x ≥ 2?", options: ["1", "1.5", "2", "−3"], correctIndex: 2, explanation: "2 satisfies x ≥ 2 (equal allowed)." },
        { prompt: "Solve 2(x − 1) < 6.", options: ["x < 4", "x > 4", "x < 3", "x > 3"], correctIndex: 0, explanation: "2x − 2 < 6, 2x < 8, x < 4." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Solve 4x − 5 ≤ 2x + 7 and represent the solution on a number line.", answerKey: "2x ≤ 12, so x ≤ 6. Number line: closed circle at 6, shaded to the left. Award 3 marks for solving, 1 for x ≤ 6, 3 for a correct number line (closed circle, correct direction).", marks: 7 },
        { type: "SHORT_ANSWER", prompt: "Solve −2x + 1 > 9, stating the sign rule you use.", answerKey: "−2x > 8; dividing by −2 reverses the sign, giving x < −4. Award 2 marks for isolating −2x, 3 for dividing and flipping, 1 for x < −4.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which inequality has solution x > 3?", options: ["−x < −3", "−x > −3", "x + 1 < 4", "2x < 6"], correctIndex: 0, answerKey: "−x < −3 becomes x > 3 after multiplying by −1 and flipping. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "List all the integers that satisfy −2 < x ≤ 3.", answerKey: "x = −1, 0, 1, 2, 3. (−2 excluded, 3 included.) Award 1 mark per correct integer, up to 5.", marks: 5 },
        { type: "ESSAY", prompt: "A learner needs an average of at least 50 marks over two tests, each out of 100. She scored 42 in the first test. Set up and solve an inequality for the second-test mark she needs, and explain the sign convention 'at least'.", answerKey: "'At least' means ≥. Let the second mark be x. Average condition: (42 + x)/2 ≥ 50, so 42 + x ≥ 100, giving x ≥ 58. She needs at least 58 marks. Award 2 marks for translating 'at least' as ≥, 4 for the inequality and solving, 2 for x ≥ 58, 2 for interpreting the result.", marks: 10 },
      ],
    },
    // source: CK-12 — Functions and the Vertical Line Test (https://www.ck12.org/algebra/identify-functions-and-the-vertical-line-test/lesson/Functions-and-Non-Functions-ALG-1-CCSS/)
    {
      slug: "relations-and-functions",
      title: "Relations and Functions",
      objective:
        "By the end of the topic, learners should be able to define a relation and a function, find domain and range, use the vertical line test, use function notation, and change the subject of a formula.",
      estimatedMinutes: 120,
      notes: `## Relations

A **relation** is a set of ordered pairs (x, y) linking inputs to outputs. It can be given as a set of pairs, a table, a mapping diagram, an equation or a graph.

- The **domain** is the set of input (x) values.
- The **range** is the set of output (y) values.

## Functions

A **function** is a special relation in which **each input has exactly one output**.

- {(1, 2), (2, 4), (3, 6)} is a function.
- {(1, 2), (1, 5)} is **not** a function (the input 1 has two outputs).

## The vertical line test

If any **vertical line** cuts the graph more than once, the graph is **not** a function. If every vertical line meets it at most once, it is a function.

## Function notation

f(x) is read "f of x", the output when the input is x.

If f(x) = 2x + 3, then f(4) = 2(4) + 3 = 11.

## Types of relations (mappings)

- **one-to-one** — each input to one output, each output from one input
- **many-to-one** — several inputs share one output (still a function)
- **one-to-many** — one input to several outputs (not a function)

## Change of subject

To **change the subject** of a formula is to rearrange it to make a different variable the subject.

From y = mx + c, make x the subject: x = (y − c)/m.

## Common errors

- **Calling a one-to-many relation a function** — an input may not have two outputs.
- **Swapping domain and range** — domain is inputs (x), range is outputs (y).
- **Misreading f(3) as f × 3** — it means the output when x = 3.`,
      workedExample: `**Question:** The relation is {(0, 0), (−6, −6), (−3, −3), (2, 2)}.
(a) Is it a function?
(b) State the domain and range.
(c) If f(x) = 2x − 1, find f(−3).

**Solution**

*Part (a).* Each input value appears once with a single output, so it **is a function**.

*Part (b).* Domain (inputs) = {−6, −3, 0, 2}. Range (outputs) = {−6, −3, 0, 2}.

*Part (c).* f(−3) = 2(−3) − 1 = −6 − 1 = −7.

**Answer:** (a) yes; (b) domain {−6, −3, 0, 2}, range {−6, −3, 0, 2}; (c) f(−3) = −7.`,
      quiz: [
        { prompt: "A relation is a set of", options: ["straight lines", "ordered pairs", "angles", "prime numbers"], correctIndex: 1, explanation: "It links inputs to outputs as ordered pairs." },
        { prompt: "In a function, each input has", options: ["exactly one output", "two outputs", "no output", "many outputs"], correctIndex: 0, explanation: "One input maps to one output." },
        { prompt: "The domain of a relation is the set of", options: ["outputs", "inputs (x-values)", "gradients", "ranges"], correctIndex: 1, explanation: "Domain = input values." },
        { prompt: "Which is NOT a function?", options: ["{(1,2),(2,3)}", "{(1,2),(1,5)}", "{(0,0),(1,1)}", "{(2,4),(3,4)}"], correctIndex: 1, explanation: "Input 1 has two outputs." },
        { prompt: "If f(x) = 3x + 1, then f(2) is", options: ["5", "7", "6", "4"], correctIndex: 1, explanation: "3(2) + 1 = 7." },
        { prompt: "The vertical line test checks whether a graph is a", options: ["straight line", "function", "circle", "parabola"], correctIndex: 1, explanation: "A vertical line hitting twice means not a function." },
        { prompt: "The range of {(1,4),(2,5),(3,6)} is", options: ["{1,2,3}", "{4,5,6}", "{1,2,3,4,5,6}", "{4}"], correctIndex: 1, explanation: "Range = output values {4,5,6}." },
        { prompt: "A many-to-one relation is", options: ["never a function", "a function", "one-to-many", "undefined"], correctIndex: 1, explanation: "Several inputs to one output is still a function." },
        { prompt: "Making x the subject of y = mx gives", options: ["x = y/m", "x = ym", "x = m/y", "x = y − m"], correctIndex: 0, explanation: "Divide both sides by m." },
        { prompt: "If f(x) = x², then f(−4) is", options: ["−16", "16", "−8", "8"], correctIndex: 1, explanation: "(−4)² = 16." },
        { prompt: "A one-to-many relation is", options: ["a function", "not a function", "always linear", "always one-to-one"], correctIndex: 1, explanation: "One input with several outputs fails the function rule." },
        { prompt: "The domain of {(2,3),(4,5),(6,7)} is", options: ["{3,5,7}", "{2,4,6}", "{2,3,4,5,6,7}", "{5}"], correctIndex: 1, explanation: "Domain = input values {2,4,6}." },
        { prompt: "f(x) = 5 − 2x. Find f(0).", options: ["0", "5", "−2", "3"], correctIndex: 1, explanation: "5 − 2(0) = 5." },
        { prompt: "Making x the subject of y = mx + c gives", options: ["x = (y − c)/m", "x = y − c − m", "x = ym + c", "x = (y + c)/m"], correctIndex: 0, explanation: "Subtract c then divide by m." },
        { prompt: "Which graph is a function by the vertical line test?", options: ["a circle", "a vertical line", "a straight sloping line", "a sideways parabola"], correctIndex: 2, explanation: "A sloping line meets each vertical line once." },
        { prompt: "The notation f(3) means", options: ["f multiplied by 3", "the output when x = 3", "3 divided by f", "the domain"], correctIndex: 1, explanation: "It is the function value at x = 3." },
        { prompt: "If g(x) = x + 7, then g(−7) is", options: ["0", "14", "−14", "7"], correctIndex: 0, explanation: "−7 + 7 = 0." },
        { prompt: "A relation where each input and each output pair uniquely is", options: ["one-to-one", "many-to-one", "one-to-many", "many-to-many"], correctIndex: 0, explanation: "One-to-one pairs inputs and outputs uniquely." },
        { prompt: "The set of output values of a function is its", options: ["domain", "range", "gradient", "intercept"], correctIndex: 1, explanation: "Outputs form the range." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State whether {(1,3),(2,3),(4,7)} is a function, and give its domain and range.", answerKey: "It is a function (each input has one output; the repeated output 3 is allowed — many-to-one). Domain = {1, 2, 4}; range = {3, 7}. Award 2 marks for the function decision with reason, 2 for domain, 2 for range.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Given f(x) = 4x − 5, find f(3) and the value of x for which f(x) = 15.", answerKey: "f(3) = 4(3) − 5 = 7. For f(x) = 15: 4x − 5 = 15, 4x = 20, x = 5. Award 2 marks for f(3) = 7, 4 for solving x = 5.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which relation is NOT a function?", options: ["{(1,1),(2,2)}", "{(3,4),(3,5)}", "{(0,0),(5,0)}", "{(2,7),(8,7)}"], correctIndex: 1, answerKey: "Input 3 has two outputs (4 and 5), so option B is not a function.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Make r the subject of the formula A = πr².", answerKey: "Divide by π: r² = A/π. Square-root: r = √(A/π). Award 3 marks for dividing by π, 3 for the square root.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the difference between a relation and a function, describe the vertical line test, and use it to explain why a circle is not a function but a straight line (not vertical) is.", answerKey: "A relation is any set of ordered pairs; a function is a relation in which each input has exactly one output. The vertical line test says a graph is a function if no vertical line meets it more than once. A circle fails because a vertical line through it can cut it at two points (two outputs for one input), so it is not a function. A non-vertical straight line meets any vertical line at exactly one point, so it is a function. Award 3 marks for the relation/function distinction, 3 for the vertical line test, 4 for the circle vs line reasoning.", marks: 10 },
      ],
    },
    // source: Siyavula — Gradient of a line, Grade 10 analytical geometry (https://www.siyavula.com/read/za/mathematics/grade-10/analytical-geometry/08-analytical-geometry-02)
    {
      slug: "gradient-and-distance",
      title: "Gradient of a Line and Distance Between Two Points",
      objective:
        "By the end of the topic, learners should be able to plot points, calculate the gradient of a line through two points, use the distance formula, and recognise the shape of linear and quadratic graphs.",
      estimatedMinutes: 120,
      notes: `## The coordinate plane

A point is written (x, y): x is the horizontal position, y is the vertical position. The axes cross at the **origin** (0, 0).

## Gradient (slope) of a line

The **gradient** measures steepness — vertical change divided by horizontal change:

m = (y₂ − y₁)/(x₂ − x₁)

- A positive gradient rises to the right; a negative gradient falls to the right.
- A horizontal line has gradient 0; a vertical line has an undefined gradient.
- **Parallel** lines have equal gradients; **perpendicular** lines have gradients whose product is −1.

## Equation of a straight line

y = mx + c, where m is the gradient and c is the y-intercept (where the line crosses the y-axis).

## Distance between two points

d = √((x₂ − x₁)² + (y₂ − y₁)²)

This comes from the Pythagoras theorem applied to the horizontal and vertical gaps.

## Linear vs quadratic graphs

- A **linear function** y = mx + c graphs as a **straight line**.
- A **quadratic function** y = ax² + bx + c graphs as a **parabola** (a U-shape opening up if a > 0, down if a < 0). Its turning point is the vertex.

\`\`\`svg A straight line rising to the right and a U-shaped parabola.
<svg viewBox="0 0 320 160" role="img" aria-label="A straight line and a parabola on axes">
  <line x1="20" y1="140" x2="300" y2="140" stroke="currentColor" stroke-opacity="0.5"/>
  <line x1="40" y1="20" x2="40" y2="150" stroke="currentColor" stroke-opacity="0.5"/>
  <line x1="45" y1="135" x2="180" y2="45" stroke="#6366f1" stroke-width="2"/>
  <path d="M 200 40 Q 250 160 300 40" fill="none" stroke="#10b981" stroke-width="2"/>
  <text x="150" y="60" font-size="11" fill="currentColor">line</text>
  <text x="245" y="120" font-size="11" fill="currentColor">parabola</text>
</svg>
\`\`\`

## Common errors

- **Subtracting coordinates in a different order** in numerator and denominator — keep (y₂ − y₁) over (x₂ − x₁).
- **Forgetting to square-root** in the distance formula.
- **Confusing gradient and y-intercept** in y = mx + c.`,
      workedExample: `**Question:** Find (a) the gradient of the line through A(1, 2) and B(4, 6), and (b) the distance AB.

**Solution**

*Part (a) — gradient.*
m = (y₂ − y₁)/(x₂ − x₁) = (6 − 2)/(4 − 1) = 4/3

*Part (b) — distance.*
d = √((4 − 1)² + (6 − 2)²) = √(3² + 4²) = √(9 + 16) = √25 = 5

**Answer:** (a) gradient = 4/3; (b) distance AB = 5 units.`,
      quiz: [
        { prompt: "The gradient formula is", options: ["(x₂ − x₁)/(y₂ − y₁)", "(y₂ − y₁)/(x₂ − x₁)", "(y₂ + y₁)/(x₂ + x₁)", "y₂ − y₁"], correctIndex: 1, explanation: "Rise over run." },
        { prompt: "The gradient of the line through (0,0) and (2,6) is", options: ["2", "3", "6", "1/3"], correctIndex: 1, explanation: "(6 − 0)/(2 − 0) = 3." },
        { prompt: "A horizontal line has gradient", options: ["0", "1", "undefined", "−1"], correctIndex: 0, explanation: "No vertical change, so gradient 0." },
        { prompt: "In y = mx + c, m is the", options: ["y-intercept", "gradient", "x-intercept", "origin"], correctIndex: 1, explanation: "m is the gradient." },
        { prompt: "The distance formula uses which theorem?", options: ["angle sum", "Pythagoras", "De Morgan", "distributive"], correctIndex: 1, explanation: "It is Pythagoras on the coordinate differences." },
        { prompt: "Distance between (0,0) and (3,4) is", options: ["5", "7", "12", "25"], correctIndex: 0, explanation: "√(9 + 16) = 5." },
        { prompt: "Parallel lines have gradients that are", options: ["equal", "opposite", "reciprocal", "zero"], correctIndex: 0, explanation: "Equal gradients mean parallel." },
        { prompt: "A quadratic function graphs as a", options: ["straight line", "circle", "parabola", "single point"], correctIndex: 2, explanation: "y = ax² + bx + c is a parabola." },
        { prompt: "In y = 2x + 5, the y-intercept is", options: ["2", "5", "0", "−5"], correctIndex: 1, explanation: "c = 5 is where it crosses the y-axis." },
        { prompt: "The gradient of the line through (1,5) and (3,5) is", options: ["0", "1", "5", "undefined"], correctIndex: 0, explanation: "No change in y, gradient 0." },
        { prompt: "A negative gradient means the line", options: ["rises to the right", "falls to the right", "is horizontal", "is vertical"], correctIndex: 1, explanation: "It slopes downward left to right." },
        { prompt: "Perpendicular lines have gradients with product", options: ["1", "0", "−1", "2"], correctIndex: 2, explanation: "m₁ × m₂ = −1." },
        { prompt: "Distance between (1,1) and (4,5) is", options: ["4", "5", "7", "√7"], correctIndex: 1, explanation: "√(9 + 16) = √25 = 5." },
        { prompt: "The gradient through (2,3) and (6,11) is", options: ["2", "4", "8", "1/2"], correctIndex: 0, explanation: "(11 − 3)/(6 − 2) = 8/4 = 2." },
        { prompt: "A parabola y = ax² + bx + c opens upward when", options: ["a > 0", "a < 0", "a = 0", "c > 0"], correctIndex: 0, explanation: "Positive a gives a U opening up." },
        { prompt: "A vertical line has gradient", options: ["0", "1", "undefined", "−1"], correctIndex: 2, explanation: "Division by zero makes it undefined." },
        { prompt: "The line y = 3x − 2 has gradient", options: ["3", "−2", "2", "1"], correctIndex: 0, explanation: "m = 3." },
        { prompt: "Distance between (−1,2) and (2,6) is", options: ["3", "4", "5", "6"], correctIndex: 2, explanation: "√(3² + 4²) = √25 = 5." },
        { prompt: "The point (0, 0) is called the", options: ["vertex", "origin", "intercept", "gradient"], correctIndex: 1, explanation: "The axes cross at the origin." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Find the gradient of the line through P(−2, 1) and Q(4, 13).", answerKey: "m = (13 − 1)/(4 − (−2)) = 12/6 = 2. Award 2 marks for correct substitution, 2 for the answer 2.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Find the distance between A(2, −1) and B(7, 11).", answerKey: "d = √((7 − 2)² + (11 − (−1))²) = √(5² + 12²) = √(25 + 144) = √169 = 13. Award 3 marks for substitution, 2 for simplifying, 1 for the answer 13.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "What is the gradient of a line parallel to y = 4x − 7?", options: ["−7", "4", "1/4", "−1/4"], correctIndex: 1, answerKey: "Parallel lines share the gradient 4. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State the y-intercept and gradient of y = −3x + 6, and say whether the line rises or falls to the right.", answerKey: "Gradient = −3, y-intercept = 6. The gradient is negative, so the line falls to the right. Award 2 marks each for the gradient and intercept, 2 for the direction.", marks: 6 },
        { type: "ESSAY", prompt: "The points A(1, 2), B(4, 6) and C(1, 6) form a triangle. Find the length of AB, show that AC is vertical, and explain how the gradient of a vertical line differs from that of a horizontal line.", answerKey: "AB = √((4−1)² + (6−2)²) = √(9 + 16) = 5. AC joins (1,2) and (1,6): the x-coordinates are equal, so it is vertical; its gradient is undefined (division by zero in x₂ − x₁). A horizontal line (like from (1,6) to (4,6)) has no change in y, so its gradient is 0. Award 3 marks for AB = 5, 3 for showing AC vertical, 4 for contrasting undefined vs zero gradient.", marks: 10 },
      ],
    },
  ],
};
