import type { SubjectContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Mathematics (Grades
// 10-12). Grade 10, Semester One, Period I: Unit I Sets and Operations on
// Sets; Unit II Rational Numbers. Later periods/grades are authored in their
// own entries as the rebuild continues.
export const mathematics: SubjectContent = {
  slug: "mathematics",
  name: "Mathematics",
  shortName: "Maths",
  description:
    "Number and numeration for senior high: sets and operations on sets, then rational and real numbers.",
  accent: "indigo",
  sortOrder: 2,
  teacherCode: "MTH-10-4471",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "Sets and the Rational Numbers",
      summary:
        "Period I of the MoE Grade 10 Mathematics syllabus. Learners define and operate on sets and use Venn diagrams to solve two- and three-set problems, then move to the rational numbers — their operations, properties, decimal form and place on the real number line.",
      topics: [
        {
          slug: "sets-and-operations",
          title: "Sets and Operations on Sets",
          objective:
            "By the end of the unit, learners should be able to use set notation, name the types of sets, form subsets, and use Venn diagrams to find unions, intersections and complements and to solve two- and three-set problems.",
          estimatedMinutes: 160,
          notes: `## What a set is

A **set** is a well-defined collection of distinct objects, called its **elements** or **members**.

"Well-defined" is essential: membership must be beyond argument. *The set of counties in Liberia* is a set; *the set of beautiful counties* is not, because "beautiful" is a matter of opinion.

Sets are written inside curly brackets, and each element is listed once:

- A = {2, 4, 6, 8}
- V = {a, e, i, o, u}

## Set notation you must know

- **Element of:** 4 is an element of A
- **Not an element of:** 5 is not an element of A
- **Empty (null) set:** { } — a set with no elements
- **Universal set (U):** every element under discussion in a given problem
- **Cardinality n(A):** the number of elements in A; n(A) = 4 above

Two ways to describe a set:

- **Roster (listing) form:** B = {1, 2, 3, 4, 5}
- **Set-builder form:** B = {x : x is a whole number, 1 ≤ x ≤ 5}, read "the set of all x such that…"

## Types of sets

- **Finite set** — countable elements, e.g. {days of the week}
- **Infinite set** — unending, e.g. {1, 2, 3, …}
- **Equal sets** — exactly the same elements: {1, 2, 3} = {3, 2, 1}
- **Equivalent sets** — the same *number* of elements (same cardinality) but not necessarily the same members
- **Subset** — every element of one set is contained in another
- **Disjoint sets** — no elements in common

## Subsets

B is a **subset** of A if every element of B is also in A. A set with **n** elements has **2^n** subsets, counting the empty set and the set itself.

For {a, b, c}: 2^3 = 8 subsets — { }, {a}, {b}, {c}, {a,b}, {a,c}, {b,c}, {a,b,c}.

## Operations on sets

**Union (A ∪ B):** everything in A, in B, or in both — each element once.
**Intersection (A ∩ B):** only what is in both.
**Complement (A′):** everything in the universal set that is **not** in A.

If A = {1, 2, 3} and B = {3, 4}, then A ∪ B = {1, 2, 3, 4} and A ∩ B = {3}.

## The Venn diagram

A rectangle is the universal set; circles inside it are the sets; overlaps show intersections.

\`\`\`svg Two overlapping sets A and B inside the universal set U. The middle region is the intersection A ∩ B.
<svg viewBox="0 0 340 210" role="img" aria-label="Venn diagram of two overlapping sets A and B inside universal set U">
  <rect x="4" y="4" width="332" height="202" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.45"/>
  <text x="16" y="26" font-size="14" fill="currentColor">U</text>
  <circle cx="135" cy="108" r="74" fill="#6366f1" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.8"/>
  <circle cx="205" cy="108" r="74" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.8"/>
  <text x="92" y="113" font-size="16" fill="currentColor" text-anchor="middle">A</text>
  <text x="248" y="113" font-size="16" fill="currentColor" text-anchor="middle">B</text>
  <text x="170" y="113" font-size="12" fill="currentColor" text-anchor="middle">A ∩ B</text>
</svg>
\`\`\`

For two sets there are four regions: in A only, in both, in B only, and in neither.

## The two-set formula

n(A ∪ B) = n(A) + n(B) − n(A ∩ B)

The intersection is subtracted because adding n(A) and n(B) counts the overlap **twice**.

## The three-set formula

n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C)

## Solving word problems — fill the middle first

Always enter the **innermost region (the triple/double overlap) first**, then work outward by subtraction. Learners who start from the outer regions almost always double-count.`,
          workedExample: `**Question:** In a class of 40 learners, 25 offer Agriculture, 18 offer Economics and 5 offer neither subject. How many offer both?

**Solution**

*Step 1 — how many offer at least one subject.*
40 total, 5 offer neither, so n(A ∪ E) = 40 − 5 = **35**.

*Step 2 — apply the two-set formula.*
n(A ∪ E) = n(A) + n(E) − n(A ∩ E)
35 = 25 + 18 − n(A ∩ E)
35 = 43 − n(A ∩ E)
n(A ∩ E) = 43 − 35 = **8**

*Step 3 — complete the Venn diagram to check.*
- Both: 8
- Agriculture only: 25 − 8 = 17
- Economics only: 18 − 8 = 10
- Neither: 5

Total = 17 + 8 + 10 + 5 = 40, which matches the class size. ✔

**Answer: 8 learners offer both subjects.**`,
          teachingTip:
            "Run the lesson with the class itself as the universal set. Ask everyone who walked to school today to stand on one side and everyone who ate breakfast on the other — learners who did both will hesitate between the two, and that hesitation is the moment to draw the overlapping circles. Then insist, for the rest of the topic, that every word problem begins by filling the innermost region first; the habit of filling the middle first is what carries learners through the harder three-set problems without double-counting. Keep the 2^n subset rule tied to a concrete count (list all 8 subsets of a 3-element set on the board) so it is understood, not just memorised.",
          quiz: [
            { prompt: "Which of these is a well-defined set?", options: ["The set of tall learners", "The set of interesting books", "The set of even numbers below 10", "The set of good teachers"], correctIndex: 2, explanation: "Membership must be decidable without opinion; 'even numbers below 10' is exact." },
            { prompt: "If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, what is A ∪ B?", options: ["{3, 4}", "{1, 2, 5, 6}", "{1, 2, 3, 4, 5, 6}", "{1, 2, 3, 3, 4, 4, 5, 6}"], correctIndex: 2, explanation: "The union lists every element in either set, each written once." },
            { prompt: "For the same A and B, what is A ∩ B?", options: ["{3, 4}", "{1, 2}", "{5, 6}", "The empty set"], correctIndex: 0, explanation: "Only 3 and 4 appear in both sets." },
            { prompt: "The number of elements in a set is called its", options: ["Union", "Complement", "Cardinality", "Subset"], correctIndex: 2, explanation: "Cardinality n(A) counts the members of A." },
            { prompt: "How many subsets does {p, q, r, s} have?", options: ["8", "12", "16", "24"], correctIndex: 2, explanation: "A set of n elements has 2^n subsets, so 2^4 = 16." },
            { prompt: "Two sets with no elements in common are said to be", options: ["Equal", "Equivalent", "Disjoint", "Universal"], correctIndex: 2, explanation: "Disjoint sets have an empty intersection." },
            { prompt: "In set-builder form, {x : x is a whole number, 2 ≤ x ≤ 5} equals", options: ["{2, 3, 4}", "{2, 3, 4, 5}", "{3, 4, 5}", "{2, 5}"], correctIndex: 1, explanation: "All whole numbers from 2 to 5 inclusive." },
            { prompt: "If U = {1,…,10} and A = {2, 4, 6, 8, 10}, then A′ is", options: ["{1, 3, 5, 7, 9}", "{2, 4, 6, 8, 10}", "{1, 2, 3, 4, 5}", "The empty set"], correctIndex: 0, explanation: "The complement holds everything in U that is not in A." },
            { prompt: "{1, 2, 3} and {3, 2, 1} are best described as", options: ["Disjoint sets", "Equal sets", "Subsets of each other only", "Infinite sets"], correctIndex: 1, explanation: "They contain exactly the same elements, so they are equal." },
            { prompt: "n(A) = 14, n(B) = 9, n(A ∩ B) = 4. Find n(A ∪ B).", options: ["19", "23", "27", "5"], correctIndex: 0, explanation: "14 + 9 − 4 = 19." },
            { prompt: "The empty set contains", options: ["One element", "No elements", "Infinite elements", "Only the number zero"], correctIndex: 1, explanation: "By definition the empty set has no members." },
            { prompt: "{a, b} and {1, 2} are", options: ["Equal", "Equivalent but not equal", "Disjoint and equal", "Subsets of each other"], correctIndex: 1, explanation: "Same cardinality (2 each) but different members, so equivalent, not equal." },
            { prompt: "Which is an infinite set?", options: ["Days of the week", "Vowels in English", "Counting numbers {1, 2, 3, …}", "Counties of Liberia"], correctIndex: 2, explanation: "The counting numbers never end." },
            { prompt: "If B ⊂ A means B is a subset of A, and A = {1,2,3,4}, which is a valid B?", options: ["{1, 5}", "{2, 4}", "{4, 6}", "{0, 1}"], correctIndex: 1, explanation: "Every element of {2, 4} is in A; the others contain elements not in A." },
            { prompt: "In a Venn diagram, the rectangle represents", options: ["The intersection", "The universal set", "The empty set", "A single element"], correctIndex: 1, explanation: "The enclosing rectangle is the universal set U." },
            { prompt: "40 people: 22 like rice, 18 like cassava, 6 like both. How many like at least one?", options: ["28", "34", "40", "46"], correctIndex: 1, explanation: "22 + 18 − 6 = 34." },
            { prompt: "Using the same figures, how many like neither out of 40?", options: ["4", "6", "12", "34"], correctIndex: 1, explanation: "40 − 34 = 6 like neither." },
            { prompt: "When solving a three-set problem, you should fill in first the", options: ["Region outside all circles", "Regions in only one set", "Innermost triple-overlap region", "Universal set total"], correctIndex: 2, explanation: "Filling the centre first prevents double-counting outward." },
            { prompt: "If A ⊂ B and n(A) = n(B) = 5, then", options: ["A and B are disjoint", "A = B", "A is empty", "B has more members"], correctIndex: 1, explanation: "A subset with equal cardinality must be identical to its parent set." },
            { prompt: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B). The intersection is subtracted because", options: ["It is always empty", "Adding n(A) and n(B) counts the overlap twice", "Union removes duplicates", "The sets are disjoint"], correctIndex: 1, explanation: "Members of the overlap are counted once in each set, so once is removed." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "In a class of 60 learners, 35 study Physics, 28 study Chemistry and 8 study neither. Find the number who study both and the number who study Physics only.", answerKey: "At least one = 60 − 8 = 52. 52 = 35 + 28 − both, so both = 63 − 52 = 11. Physics only = 35 − 11 = 24. Award 2 marks for 52, 3 for both = 11, 2 for Physics only = 24.", marks: 7 },
            { type: "SHORT_ANSWER", prompt: "Given U = {1,…,10}, A = {even numbers} and B = {multiples of 3}, list A, B, A ∩ B and (A ∪ B)′.", answerKey: "A = {2,4,6,8,10}; B = {3,6,9}; A ∩ B = {6}; A ∪ B = {2,3,4,6,8,9,10}, so (A ∪ B)′ = {1,5,7}. Award 1 mark each for A and B, 2 for the intersection, 2 for the complement.", marks: 6 },
            { type: "MULTIPLE_CHOICE", prompt: "If n(A) = 20, n(B) = 14 and A and B are disjoint, what is n(A ∪ B)?", options: ["6", "20", "34", "280"], correctIndex: 2, answerKey: "Disjoint means an empty intersection, so 20 + 14 − 0 = 34. Option C.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "List all the subsets of {x, y, z} and state how many there are.", answerKey: "{ }, {x}, {y}, {z}, {x,y}, {x,z}, {y,z}, {x,y,z} — eight subsets, agreeing with 2^3 = 8. Award 1 mark per correct subset up to 6, and 2 marks for stating the total with the 2^n justification.", marks: 8 },
            { type: "ESSAY", prompt: "In a survey of 100 farmers, 50 grow rice, 40 grow cassava, 30 grow vegetables, 15 grow rice and cassava, 12 grow rice and vegetables, 10 grow cassava and vegetables, and 5 grow all three. Using a Venn diagram, find how many grow (a) exactly one crop and (b) none of the three.", answerKey: "Fill the centre first: all three = 5. Rice & cassava only = 15 − 5 = 10; rice & veg only = 12 − 5 = 7; cassava & veg only = 10 − 5 = 5. Rice only = 50 − (10+7+5) = 28; cassava only = 40 − (10+5+5) = 20; vegetables only = 30 − (7+5+5) = 13. (a) Exactly one = 28 + 20 + 13 = 61. Total in at least one = 61 + 10 + 7 + 5 + 5 = 88, so (b) none = 100 − 88 = 12. Award 4 marks for correctly filling the overlaps from the centre outward, 4 for the exactly-one total of 61, 2 for the none total of 12.", marks: 10 },
          ],
        },
        {
          slug: "rational-numbers",
          title: "Rational Numbers and the Real Number Line",
          objective:
            "By the end of the unit, learners should be able to identify rational numbers, add, subtract, multiply and divide them, apply the properties of operations, convert between fractions and decimals, and place real numbers on the number line.",
          estimatedMinutes: 160,
          notes: `## What a rational number is

A **rational number** is any number that can be written as a fraction **a/b**, where a and b are integers and b ≠ 0.

- 3 = 3/1, so every integer is rational
- 0.75 = 3/4, so terminating decimals are rational
- 0.333… = 1/3, so recurring decimals are rational

Numbers that **cannot** be written as such a fraction — like √2 or π — are **irrational**. Rational and irrational numbers together make up the **real numbers**.

## Adding and subtracting rational numbers

Use a **common denominator**, combine the numerators, then simplify.

3/4 + 1/6 = 9/12 + 2/12 = 11/12

For a difference, subtract the numerators once the denominators match.

## Multiplying rational numbers

Multiply numerators together and denominators together; cancel common factors first where possible.

2/3 × 9/10 = (2 × 9)/(3 × 10) = 18/30 = 3/5

## Dividing rational numbers

**Multiply by the reciprocal** (invert the divisor).

4/5 ÷ 2/3 = 4/5 × 3/2 = 12/10 = 6/5

## Properties of the operations

- **Commutative:** a + b = b + a and a × b = b × a
- **Associative:** (a + b) + c = a + (b + c) and likewise for ×
- **Distributive:** a × (b + c) = a × b + a × c
- **Identity:** a + 0 = a and a × 1 = a
- **Inverse:** a + (−a) = 0 and a × (1/a) = 1 for a ≠ 0

Note that subtraction and division are **not** commutative: 5 − 3 ≠ 3 − 5.

## Decimal representation

A rational number is either a **terminating** decimal (3/8 = 0.375) or a **recurring** decimal (2/11 = 0.1818…). If neither, the number is irrational.

## The real number line

Every real number has one position on the line; larger numbers lie to the right.

\`\`\`svg The real number line, with the rationals −3/2, 0 and 5/2 marked, and the irrational √2 ≈ 1.41 between 1 and 2.
<svg viewBox="0 0 360 90" role="img" aria-label="Number line from -3 to 3 marking -1.5, 0, square root of 2, and 2.5">
  <line x1="15" y1="50" x2="345" y2="50" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="345,50 337,46 337,54" fill="currentColor"/>
  <polygon points="15,50 23,46 23,54" fill="currentColor"/>
  <g font-size="10" fill="currentColor" text-anchor="middle">
    <line x1="70" y1="45" x2="70" y2="55" stroke="currentColor"/><text x="70" y="70">-2</text>
    <line x1="125" y1="45" x2="125" y2="55" stroke="currentColor"/><text x="125" y="70">-1</text>
    <line x1="180" y1="45" x2="180" y2="55" stroke="currentColor"/><text x="180" y="70">0</text>
    <line x1="235" y1="45" x2="235" y2="55" stroke="currentColor"/><text x="235" y="70">1</text>
    <line x1="290" y1="45" x2="290" y2="55" stroke="currentColor"/><text x="290" y="70">2</text>
  </g>
  <g fill="#6366f1">
    <circle cx="97" cy="50" r="3.5"/><text x="97" y="34" font-size="10" fill="currentColor" text-anchor="middle">-3/2</text>
    <circle cx="262" cy="50" r="3.5"/><text x="262" y="34" font-size="10" fill="currentColor" text-anchor="middle">√2</text>
    <circle cx="317" cy="50" r="3.5"/><text x="317" y="34" font-size="10" fill="currentColor" text-anchor="middle">5/2</text>
  </g>
</svg>
\`\`\`

## Approximation

Rounding gives a manageable value: 2/7 = 0.2857… ≈ 0.29 to two decimal places. Always state the degree of accuracy (decimal places or significant figures).`,
          workedExample: `**Question:** Simplify 2/3 + 3/4 × 8/9, giving your answer as a fraction in lowest terms.

**Solution**

*Step 1 — apply order of operations.* Multiplication is done before addition.

3/4 × 8/9 = (3 × 8)/(4 × 9) = 24/36

*Step 2 — simplify the product.*
24/36 = 2/3 (dividing top and bottom by 12).

*Step 3 — now add.*
2/3 + 2/3 = 4/3

*Step 4 — check the form.* 4/3 is already in lowest terms; as a mixed number it is 1 1/3.

**Answer: 4/3**

*A common error:* adding 2/3 + 3/4 first. That breaks the order of operations — the multiplication must be resolved before the addition.`,
          teachingTip:
            "The division rule 'multiply by the reciprocal' is recited correctly and applied wrongly, because learners flip the wrong fraction. Drill it with the sentence 'keep, change, flip' — keep the first fraction, change ÷ to ×, flip the second — and test it immediately on a case where the answer is obviously greater than one, so a wrong flip is caught. For the rational/irrational distinction, put √4, √2, 0.5, 0.333… and π on the board and have the class sort them; the surprise that √4 = 2 is rational while √2 is not fixes the idea that it is the *value*, not the square-root sign, that decides. Keep every fraction answer reduced to lowest terms as a non-negotiable habit from day one.",
          quiz: [
            { prompt: "Which of these is a rational number?", options: ["√2", "π", "0.75", "√5"], correctIndex: 2, explanation: "0.75 = 3/4, a ratio of integers; the others cannot be written as such a fraction." },
            { prompt: "Evaluate 1/2 + 1/3.", options: ["2/5", "1/6", "5/6", "2/6"], correctIndex: 2, explanation: "Common denominator 6: 3/6 + 2/6 = 5/6." },
            { prompt: "Evaluate 3/4 − 1/6.", options: ["7/12", "2/2", "1/2", "11/12"], correctIndex: 0, explanation: "9/12 − 2/12 = 7/12." },
            { prompt: "Evaluate 2/5 × 10/3.", options: ["4/3", "20/15", "12/8", "5/6"], correctIndex: 0, explanation: "20/15 = 4/3 in lowest terms." },
            { prompt: "Evaluate 4/9 ÷ 2/3.", options: ["8/27", "2/3", "3/2", "6/9"], correctIndex: 1, explanation: "4/9 × 3/2 = 12/18 = 2/3." },
            { prompt: "Which number is irrational?", options: ["0.5", "√9", "√7", "1/3"], correctIndex: 2, explanation: "√7 is not a ratio of integers; √9 = 3 is rational." },
            { prompt: "The property shown by a + b = b + a is", options: ["Associative", "Distributive", "Commutative", "Identity"], correctIndex: 2, explanation: "Order of addition does not change the sum — commutativity." },
            { prompt: "a × (b + c) = a × b + a × c illustrates the", options: ["Commutative property", "Distributive property", "Inverse property", "Closure property"], correctIndex: 1, explanation: "Multiplication distributes over addition." },
            { prompt: "Write 3/8 as a decimal.", options: ["0.375", "0.38", "0.83", "0.125"], correctIndex: 0, explanation: "3 ÷ 8 = 0.375, a terminating decimal." },
            { prompt: "Which decimal represents a rational number?", options: ["An unending, non-repeating decimal", "0.272727…", "π = 3.14159…", "√2 = 1.4142…"], correctIndex: 1, explanation: "A recurring decimal such as 0.2727… equals a fraction, so it is rational." },
            { prompt: "The additive inverse of 5/7 is", options: ["7/5", "−5/7", "0", "−7/5"], correctIndex: 1, explanation: "a + (−a) = 0, so the inverse is −5/7." },
            { prompt: "The multiplicative inverse (reciprocal) of 3/4 is", options: ["−3/4", "4/3", "3/4", "1"], correctIndex: 1, explanation: "a × (1/a) = 1, so the reciprocal is 4/3." },
            { prompt: "Evaluate 2/3 of 45.", options: ["15", "30", "22.5", "27"], correctIndex: 1, explanation: "2/3 × 45 = 90/3 = 30." },
            { prompt: "Which statement is FALSE?", options: ["Subtraction is commutative", "Addition is commutative", "Multiplication is associative", "Every integer is rational"], correctIndex: 0, explanation: "5 − 3 ≠ 3 − 5, so subtraction is not commutative." },
            { prompt: "Simplify 12/18 to lowest terms.", options: ["6/9", "3/4", "2/3", "4/6"], correctIndex: 2, explanation: "Divide top and bottom by 6 to get 2/3." },
            { prompt: "On the number line, which is furthest to the right?", options: ["−3/2", "0", "1/2", "5/2"], correctIndex: 3, explanation: "Larger numbers lie further right; 5/2 = 2.5 is the greatest." },
            { prompt: "Evaluate (1/2 + 1/4) × 8.", options: ["3", "6", "8", "12"], correctIndex: 1, explanation: "1/2 + 1/4 = 3/4; 3/4 × 8 = 6." },
            { prompt: "2/7 to two decimal places is approximately", options: ["0.28", "0.29", "0.30", "0.27"], correctIndex: 1, explanation: "2 ÷ 7 = 0.2857…, which rounds to 0.29." },
            { prompt: "Which set of numbers includes both rational and irrational numbers?", options: ["Integers", "Whole numbers", "Real numbers", "Natural numbers"], correctIndex: 2, explanation: "The real numbers are the rationals together with the irrationals." },
            { prompt: "Evaluate 5/6 − 2/3 + 1/2.", options: ["2/3", "1/2", "5/6", "1"], correctIndex: 0, explanation: "Common denominator 6: 5/6 − 4/6 + 3/6 = 4/6 = 2/3." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Simplify (3/5 + 1/2) ÷ 11/10, giving your answer in lowest terms.", answerKey: "3/5 + 1/2 = 6/10 + 5/10 = 11/10. Then 11/10 ÷ 11/10 = 11/10 × 10/11 = 1. Award 3 marks for the common-denominator sum, 3 for inverting and multiplying, 1 for the answer 1.", marks: 7 },
            { type: "SHORT_ANSWER", prompt: "State whether each is rational or irrational, with a reason: (a) √16, (b) 0.454545…, (c) √3.", answerKey: "(a) Rational — √16 = 4 = 4/1. (b) Rational — a recurring decimal equals a fraction (5/11). (c) Irrational — √3 cannot be written as a ratio of integers and its decimal neither terminates nor recurs. Award 2 marks each, requiring the reason.", marks: 6 },
            { type: "MULTIPLE_CHOICE", prompt: "Evaluate 2/3 + 1/4 × 8/3.", options: ["10/9", "4/3", "8/9", "2"], correctIndex: 1, answerKey: "Multiplication first: 1/4 × 8/3 = 8/12 = 2/3. Then 2/3 + 2/3 = 4/3. Option B.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Name the property of operations illustrated by each: (a) 7 × (4 + 5) = 7 × 4 + 7 × 5; (b) (2 + 3) + 6 = 2 + (3 + 6); (c) 9 × 1 = 9.", answerKey: "(a) Distributive property. (b) Associative property of addition. (c) Multiplicative identity. Award 3 marks each.", marks: 9 },
            { type: "ESSAY", prompt: "A trader shares profit so that the first partner receives 1/2, the second 1/3, and the third the remainder. If the third partner receives 2,400 Liberian dollars, find the total profit and each partner's share, and place the three fractions 1/2, 1/3 and the third partner's fraction on a number line between 0 and 1.", answerKey: "Third partner's fraction = 1 − 1/2 − 1/3 = 6/6 − 3/6 − 2/6 = 1/6. So 1/6 of the total = 2,400, giving total = 14,400 LRD. Shares: first 1/2 × 14,400 = 7,200; second 1/3 × 14,400 = 4,800; third 1/6 × 14,400 = 2,400 (checks against the given figure). Number line: 1/6 ≈ 0.17, 1/3 ≈ 0.33, 1/2 = 0.5, marked in order between 0 and 1. Award 4 marks for the third fraction 1/6, 4 for the total and three shares with the check, 2 for a correctly ordered number line.", marks: 10 },
          ],
        },
      ],
    },
  ],
};
