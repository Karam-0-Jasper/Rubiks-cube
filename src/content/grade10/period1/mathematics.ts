import type { SubjectContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Mathematics (Grades
// 10-12). Grade 10, Semester One, Period I: Unit I Sets and Operations on
// Sets; Unit II Rational Numbers. Notes rebuilt from published sources
// (CK-12, Siyavula, Teachoo). Later periods are authored in their own files.
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
        "Period I of the MoE Grade 10 Mathematics syllabus. Learners define sets and use set notation, name the types of sets and subsets, then use Venn diagrams for unions, intersections, complements and two- and three-set problems, before moving to the rational and real numbers — their operations, properties, decimal form, approximation and standard form.",
      topics: [
        // source: CK-12 — Introducing Sets / Sets and its Types (https://flexbooks.ck12.org/cbook/ck-12-cbse-maths-class-11/section/1.1/primary/lesson/introducing-sets/)
        {
          slug: "sets-and-set-notation",
          title: "Sets, Set Notation and Types of Sets",
          objective:
            "By the end of the topic, learners should be able to define a set, write sets in roster and set-builder notation, name the types of sets, and list the subsets of a given set.",
          estimatedMinutes: 120,
          notes: `## What a set is

- A **set** is a well-defined collection of distinct objects, called its **elements** or **members**.
- "Well-defined" means membership is beyond argument: *the set of counties in Liberia* is a set; *the set of beautiful counties* is not, because "beautiful" is an opinion.
- Elements are listed inside curly brackets, each element once: A = {2, 4, 6, 8}, V = {a, e, i, o, u}.

## Set notation

- **∈ — "is an element of":** 4 ∈ A
- **∉ — "is not an element of":** 5 ∉ A
- **{ } or ∅ — empty (null) set:** a set with no elements
- **U — universal set:** every element under discussion in a problem
- **n(A) — cardinality:** the number of elements in A; for A = {2,4,6,8}, n(A) = 4

## Two ways to describe a set

- **Roster (listing) form:** list the elements, e.g. B = {1, 2, 3, 4, 5}
- **Set-builder (rule) form:** state the property members satisfy, e.g. B = {x : x is a whole number, 1 ≤ x ≤ 5}, read "the set of all x such that…". The colon (:) or bar (|) means "such that".

## Types of sets

- **Empty / null set** — no elements: { } or ∅
- **Singleton set** — exactly one element: {a}
- **Finite set** — a countable number of elements: {days of the week}
- **Infinite set** — unending: {1, 2, 3, …}
- **Equal sets** — exactly the same elements: {1, 2, 3} = {3, 2, 1}
- **Equivalent sets** — the same *number* of elements (same cardinality) but not necessarily the same members: {a, b} and {1, 2}
- **Universal set (U)** — contains all elements being considered

## Subsets

- B is a **subset** of A (written B ⊆ A) if every element of B is also in A.
- The **empty set is a subset of every set**, and every set is a subset of itself.
- A **proper subset** (B ⊂ A) is a subset that is not equal to A.
- A set with **n** elements has **2ⁿ** subsets, counting ∅ and the set itself.

For {a, b, c}: 2³ = 8 subsets — { }, {a}, {b}, {c}, {a,b}, {a,c}, {b,c}, {a,b,c}.

## Common errors

- **Listing an element twice** — {1, 2, 2, 3} is written {1, 2, 3}; elements are distinct.
- **Confusing equal and equivalent** — equal means same members; equivalent means only same count.
- **Writing 2 × n instead of 2ⁿ** for the number of subsets — a 4-element set has 2⁴ = 16 subsets, not 8.
- **Forgetting the empty set** when listing subsets.`,
          workedExample: `**Question:** Let A be the set of even numbers between 1 and 11.
(a) Write A in roster form and in set-builder form.
(b) State n(A).
(c) How many subsets does A have?

**Solution**

*Step 1 — roster form.* The even numbers strictly between 1 and 11 are 2, 4, 6, 8, 10.
A = {2, 4, 6, 8, 10}

*Step 2 — set-builder form.*
A = {x : x is an even number, 1 < x < 11}

*Step 3 — cardinality.* A has 5 elements, so n(A) = 5.

*Step 4 — number of subsets.* A set of n elements has 2ⁿ subsets.
2⁵ = 32 subsets.

**Answer:** A = {2, 4, 6, 8, 10} = {x : x is even, 1 < x < 11}; n(A) = 5; 32 subsets.`,
          quiz: [
            { prompt: "Which of these is a well-defined set?", options: ["The set of tall learners", "The set of interesting books", "The set of even numbers below 10", "The set of good teachers"], correctIndex: 2, explanation: "Membership must be decidable without opinion; 'even numbers below 10' is exact." },
            { prompt: "The symbol ∈ means", options: ["is a subset of", "is an element of", "is equal to", "is the union of"], correctIndex: 1, explanation: "∈ is read 'is an element of'." },
            { prompt: "In set-builder form, {x : x is a whole number, 2 ≤ x ≤ 5} equals", options: ["{2, 3, 4}", "{2, 3, 4, 5}", "{3, 4, 5}", "{2, 5}"], correctIndex: 1, explanation: "All whole numbers from 2 to 5 inclusive." },
            { prompt: "A set with no elements is called the", options: ["universal set", "singleton set", "empty set", "finite set"], correctIndex: 2, explanation: "The empty (null) set { } has no members." },
            { prompt: "The number of elements in a set is its", options: ["union", "complement", "cardinality", "subset"], correctIndex: 2, explanation: "Cardinality n(A) counts the members of A." },
            { prompt: "How many subsets does {p, q, r, s} have?", options: ["8", "12", "16", "24"], correctIndex: 2, explanation: "A set of n elements has 2ⁿ subsets, so 2⁴ = 16." },
            { prompt: "{1, 2, 3} and {3, 2, 1} are", options: ["disjoint", "equal", "singleton sets", "infinite"], correctIndex: 1, explanation: "They contain exactly the same elements, so they are equal." },
            { prompt: "{a, b} and {1, 2} are best described as", options: ["equal", "equivalent but not equal", "disjoint and equal", "subsets of each other"], correctIndex: 1, explanation: "Same cardinality (2 each) but different members, so equivalent, not equal." },
            { prompt: "Which is an infinite set?", options: ["Days of the week", "Vowels in English", "Counting numbers {1, 2, 3, …}", "Counties of Liberia"], correctIndex: 2, explanation: "The counting numbers never end." },
            { prompt: "A set with exactly one element is a", options: ["empty set", "singleton set", "universal set", "power set"], correctIndex: 1, explanation: "A singleton set has one member, e.g. {5}." },
            { prompt: "If A = {2, 4, 6, 8}, then n(A) is", options: ["2", "4", "8", "16"], correctIndex: 1, explanation: "A has four elements." },
            { prompt: "Which statement is TRUE?", options: ["The empty set is a subset of every set", "Every set is infinite", "A set may list an element twice", "n(∅) = 1"], correctIndex: 0, explanation: "The empty set is a subset of every set by definition." },
            { prompt: "If B ⊆ A and A = {1, 2, 3, 4}, a valid B is", options: ["{1, 5}", "{2, 4}", "{4, 6}", "{0, 1}"], correctIndex: 1, explanation: "Every element of {2, 4} is in A; the others contain elements not in A." },
            { prompt: "The roster form of {x : x is a letter in the word ADD} is", options: ["{A, D, D}", "{A, D}", "{D, D, A}", "{A}"], correctIndex: 1, explanation: "Elements are distinct, so the repeated D is written once: {A, D}." },
            { prompt: "Which pair are equal sets?", options: ["{1,2} and {1,2,3}", "{a,b,c} and {c,b,a}", "{1} and {2}", "∅ and {0}"], correctIndex: 1, explanation: "Order does not matter; both hold exactly a, b and c." },
            { prompt: "A proper subset of A is one that", options: ["equals A", "is not equal to A", "is infinite", "contains U"], correctIndex: 1, explanation: "A proper subset ⊂ is a subset that is not the whole set." },
            { prompt: "How many subsets does the empty set have?", options: ["0", "1", "2", "infinitely many"], correctIndex: 1, explanation: "2⁰ = 1: the empty set has only itself as a subset." },
            { prompt: "{x : x is a natural number less than 1} is", options: ["{0}", "{1}", "the empty set", "infinite"], correctIndex: 2, explanation: "No natural number is less than 1, so the set is empty." },
            { prompt: "Set-builder notation is most useful when", options: ["a set has one element", "listing every element is hard or endless", "a set is empty", "elements repeat"], correctIndex: 1, explanation: "It describes members by a rule instead of listing them all." },
            { prompt: "If n(A) = 3, the number of subsets of A is", options: ["3", "6", "8", "9"], correctIndex: 2, explanation: "2³ = 8 subsets." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Write the set of odd numbers between 0 and 12 in (a) roster form and (b) set-builder form, and state its cardinality.", answerKey: "(a) {1, 3, 5, 7, 9, 11}. (b) {x : x is an odd number, 0 < x < 12}. Cardinality = 6. Award 2 marks for roster, 2 for set-builder, 1 for n = 6.", marks: 5 },
            { type: "SHORT_ANSWER", prompt: "List all the subsets of {x, y, z} and state how many there are, justifying with the 2ⁿ rule.", answerKey: "{ }, {x}, {y}, {z}, {x,y}, {x,z}, {y,z}, {x,y,z} — eight subsets, agreeing with 2³ = 8. Award 1 mark per correct subset up to 6, and 2 marks for stating the total with the 2ⁿ justification.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "Which of these describes two equivalent (but not equal) sets?", options: ["{1,2,3} and {1,2,3}", "{a,b,c} and {1,2,3}", "{1,2} and {1,2,3}", "∅ and ∅"], correctIndex: 1, answerKey: "Both have three elements (equivalent) but different members (not equal). Option B.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Classify each set as finite, infinite, empty or singleton: (a) {days of the week}, (b) {x : x is a prime number}, (c) {x : x is a whole number, x < 0}, (d) {the capital of Liberia}.", answerKey: "(a) finite; (b) infinite; (c) empty; (d) singleton. Award 1 mark each.", marks: 4 },
            { type: "ESSAY", prompt: "Explain, with your own examples, the difference between equal sets, equivalent sets and subsets, and state why a set of n elements has 2ⁿ subsets.", answerKey: "Equal sets have identical members ({1,2}={2,1}); equivalent sets have the same cardinality but possibly different members ({a,b} and {1,2}); a subset has all its members contained in another set. For 2ⁿ: each element is either in or out of a subset (2 choices), and the choices are independent across n elements, giving 2×2×…×2 = 2ⁿ. Award 2 marks per definition with example (6) and 3 for the 2ⁿ reasoning.", marks: 9 },
          ],
        },
        // source: CK-12 — Union and Intersection of Sets (https://flexbooks.ck12.org/cbook/ck-12-algebra-ii-with-trigonometry-concepts/section/12.12/primary/lesson/union-and-intersection-of-sets-alg-ii/)
        {
          slug: "venn-diagrams-and-set-operations",
          title: "Venn Diagrams and Operations on Sets",
          objective:
            "By the end of the topic, learners should be able to find the union, intersection, difference and complement of sets, draw Venn diagrams, and use the two- and three-set formulae to solve word problems.",
          estimatedMinutes: 140,
          notes: `## Operations on sets

- **Union (A ∪ B):** every element in A, in B, or in both — each listed once.
- **Intersection (A ∩ B):** only the elements common to both sets.
- **Difference (A − B):** the elements in A that are not in B.
- **Complement (A′):** every element of the universal set U that is not in A.

If A = {1, 2, 3} and B = {3, 4} with U = {1, 2, 3, 4, 5}:
- A ∪ B = {1, 2, 3, 4}
- A ∩ B = {3}
- A − B = {1, 2}, and B − A = {4}
- A′ = {4, 5}

## Disjoint sets

Two sets are **disjoint** when they have no elements in common: A ∩ B = ∅.

## De Morgan's laws

- (A ∪ B)′ = A′ ∩ B′
- (A ∩ B)′ = A′ ∪ B′

The union of a set and its complement is U; the intersection of a set and its complement is ∅.

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

## The two-set counting formula

n(A ∪ B) = n(A) + n(B) − n(A ∩ B)

The intersection is subtracted because adding n(A) and n(B) counts the overlap **twice**.

## The three-set counting formula

n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C)

## Solving word problems — fill the middle first

Always enter the **innermost region (the triple/double overlap) first**, then work outward by subtraction. Starting from the outer regions almost always double-counts.

## Common errors

- **Confusing ∪ and ∩** — union is *everything* (bigger); intersection is *only the shared part* (smaller).
- **Forgetting the universal set** when finding a complement — A′ depends entirely on U.
- **Double-counting the overlap** in word problems — this is why we subtract n(A ∩ B) and fill the centre of the Venn diagram first.`,
          workedExample: `**Question:** In a class of 40 learners, 25 offer Agriculture, 18 offer Economics and 5 offer neither subject. How many offer both?

**Solution**

*Step 1 — how many offer at least one subject.*
40 total, 5 offer neither, so n(A ∪ E) = 40 − 5 = 35.

*Step 2 — apply the two-set formula.*
n(A ∪ E) = n(A) + n(E) − n(A ∩ E)
35 = 25 + 18 − n(A ∩ E)
35 = 43 − n(A ∩ E)
n(A ∩ E) = 43 − 35 = 8

*Step 3 — check with the Venn diagram.*
Both = 8; Agriculture only = 25 − 8 = 17; Economics only = 18 − 8 = 10; Neither = 5.
Total = 17 + 8 + 10 + 5 = 40 ✔

**Answer: 8 learners offer both subjects.**`,
          quiz: [
            { prompt: "If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, what is A ∪ B?", options: ["{3, 4}", "{1, 2, 5, 6}", "{1, 2, 3, 4, 5, 6}", "{ }"], correctIndex: 2, explanation: "The union lists every element in either set, each once." },
            { prompt: "For the same A and B, A ∩ B is", options: ["{3, 4}", "{1, 2}", "{5, 6}", "the empty set"], correctIndex: 0, explanation: "Only 3 and 4 appear in both sets." },
            { prompt: "For the same A and B, A − B is", options: ["{1, 2}", "{5, 6}", "{3, 4}", "{1, 2, 3, 4}"], correctIndex: 0, explanation: "A − B keeps elements of A not in B: 1 and 2." },
            { prompt: "If U = {1,…,10} and A = {2, 4, 6, 8, 10}, then A′ is", options: ["{1, 3, 5, 7, 9}", "{2, 4, 6, 8, 10}", "{1, 2, 3, 4, 5}", "the empty set"], correctIndex: 0, explanation: "The complement holds everything in U not in A." },
            { prompt: "Two sets with no elements in common are", options: ["equal", "equivalent", "disjoint", "universal"], correctIndex: 2, explanation: "Disjoint sets have an empty intersection." },
            { prompt: "n(A) = 14, n(B) = 9, n(A ∩ B) = 4. Find n(A ∪ B).", options: ["19", "23", "27", "5"], correctIndex: 0, explanation: "14 + 9 − 4 = 19." },
            { prompt: "In a Venn diagram, the rectangle represents", options: ["the intersection", "the universal set", "the empty set", "a single element"], correctIndex: 1, explanation: "The enclosing rectangle is U." },
            { prompt: "40 people: 22 like rice, 18 like cassava, 6 like both. How many like at least one?", options: ["28", "34", "40", "46"], correctIndex: 1, explanation: "22 + 18 − 6 = 34." },
            { prompt: "Using those figures, how many of the 40 like neither?", options: ["4", "6", "12", "34"], correctIndex: 1, explanation: "40 − 34 = 6." },
            { prompt: "The union of a set and its complement equals", options: ["the empty set", "the set itself", "the universal set", "the intersection"], correctIndex: 2, explanation: "A ∪ A′ = U." },
            { prompt: "The intersection of a set and its complement equals", options: ["U", "the empty set", "A", "A′"], correctIndex: 1, explanation: "A ∩ A′ = ∅." },
            { prompt: "De Morgan's law states (A ∪ B)′ =", options: ["A′ ∪ B′", "A′ ∩ B′", "A ∩ B", "A ∪ B"], correctIndex: 1, explanation: "The complement of a union is the intersection of the complements." },
            { prompt: "When solving a three-set problem you should first fill in the", options: ["region outside all circles", "regions in only one set", "innermost triple-overlap region", "universal-set total"], correctIndex: 2, explanation: "Filling the centre first prevents double-counting outward." },
            { prompt: "If A ∩ B = ∅, then n(A ∪ B) equals", options: ["n(A) × n(B)", "n(A) + n(B)", "n(A) − n(B)", "0"], correctIndex: 1, explanation: "With no overlap to subtract, n(A ∪ B) = n(A) + n(B)." },
            { prompt: "If A = {a, b, c} and B = {b, c, d, e}, then n(A ∩ B) is", options: ["1", "2", "3", "5"], correctIndex: 1, explanation: "Common elements are b and c, so 2." },
            { prompt: "The intersection is subtracted in n(A ∪ B) = n(A) + n(B) − n(A ∩ B) because", options: ["it is always empty", "adding n(A) and n(B) counts the overlap twice", "union removes duplicates", "the sets are disjoint"], correctIndex: 1, explanation: "Overlap members are counted once in each set, so once is removed." },
            { prompt: "If U = {1,…,6}, A = {1,2,3}, B = {3,4}, then (A ∪ B)′ is", options: ["{5, 6}", "{3}", "{1, 2}", "{4, 5, 6}"], correctIndex: 0, explanation: "A ∪ B = {1,2,3,4}, so its complement in U is {5, 6}." },
            { prompt: "Which describes A ∩ B in words?", options: ["everything in A or B", "elements in both A and B", "elements in A but not B", "elements in neither"], correctIndex: 1, explanation: "Intersection is the shared elements." },
            { prompt: "60 learners: 35 play football, 28 play volleyball, 11 play both. How many play only football?", options: ["24", "17", "35", "46"], correctIndex: 0, explanation: "Football only = 35 − 11 = 24." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "In a class of 60 learners, 35 study Physics, 28 study Chemistry and 8 study neither. Find the number who study both and the number who study Physics only.", answerKey: "At least one = 60 − 8 = 52. 52 = 35 + 28 − both, so both = 63 − 52 = 11. Physics only = 35 − 11 = 24. Award 2 marks for 52, 3 for both = 11, 2 for Physics only = 24.", marks: 7 },
            { type: "SHORT_ANSWER", prompt: "Given U = {1,…,10}, A = {even numbers} and B = {multiples of 3}, list A, B, A ∩ B and (A ∪ B)′.", answerKey: "A = {2,4,6,8,10}; B = {3,6,9}; A ∩ B = {6}; A ∪ B = {2,3,4,6,8,9,10}, so (A ∪ B)′ = {1,5,7}. Award 1 mark each for A and B, 2 for the intersection, 2 for the complement.", marks: 6 },
            { type: "MULTIPLE_CHOICE", prompt: "If n(A) = 20, n(B) = 14 and A and B are disjoint, what is n(A ∪ B)?", options: ["6", "20", "34", "280"], correctIndex: 2, answerKey: "Disjoint means an empty intersection, so 20 + 14 − 0 = 34. Option C.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "State De Morgan's two laws and verify the first with A = {1,2}, B = {2,3} and U = {1,2,3,4}.", answerKey: "(A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′. Check: A ∪ B = {1,2,3}, so (A ∪ B)′ = {4}. A′ = {3,4}, B′ = {1,4}, so A′ ∩ B′ = {4}. Both give {4}. Award 2 marks per law and 3 for the verification.", marks: 7 },
            { type: "ESSAY", prompt: "In a survey of 100 farmers, 50 grow rice, 40 grow cassava, 30 grow vegetables, 15 grow rice and cassava, 12 grow rice and vegetables, 10 grow cassava and vegetables, and 5 grow all three. Using a Venn diagram, find how many grow (a) exactly one crop and (b) none of the three.", answerKey: "Fill the centre first: all three = 5. Rice & cassava only = 15 − 5 = 10; rice & veg only = 12 − 5 = 7; cassava & veg only = 10 − 5 = 5. Rice only = 50 − (10+7+5) = 28; cassava only = 40 − (10+5+5) = 20; vegetables only = 30 − (7+5+5) = 13. (a) Exactly one = 28 + 20 + 13 = 61. In at least one = 61 + 10 + 7 + 5 + 5 = 88, so (b) none = 100 − 88 = 12. Award 4 marks for filling overlaps from the centre outward, 4 for exactly one = 61, 2 for none = 12.", marks: 10 },
          ],
        },
        // source: Teachoo — Properties of Rational Numbers (https://www.teachoo.com/7843/2583/Commutative-Property-for-numbers/category/Properties-of-Rational-Number/)
        {
          slug: "rational-numbers",
          title: "Rational Numbers and Their Operations",
          objective:
            "By the end of the topic, learners should be able to identify rational numbers, add, subtract, multiply and divide them, and apply the commutative, associative, distributive, identity and inverse properties.",
          estimatedMinutes: 140,
          notes: `## What a rational number is

A **rational number** is any number that can be written as a fraction **a/b** where a and b are integers and b ≠ 0.

- 3 = 3/1, so every integer is rational
- 0.75 = 3/4, so terminating decimals are rational
- 0.333… = 1/3, so recurring decimals are rational

## Adding and subtracting

Use a **common denominator**, combine the numerators, then simplify.

3/4 + 1/6 = 9/12 + 2/12 = 11/12

For a difference, subtract the numerators once the denominators match.

## Multiplying

Multiply numerators together and denominators together; cancel common factors first where possible.

2/3 × 9/10 = (2 × 9)/(3 × 10) = 18/30 = 3/5

## Dividing

**Multiply by the reciprocal** — keep, change, flip: keep the first fraction, change ÷ to ×, flip the second.

4/5 ÷ 2/3 = 4/5 × 3/2 = 12/10 = 6/5

## Properties of the operations

- **Commutative:** a + b = b + a and a × b = b × a — the order does not change the result.
- **Associative:** (a + b) + c = a + (b + c), and likewise for ×.
- **Distributive:** a × (b + c) = a × b + a × c.
- **Identity:** a + 0 = a and a × 1 = a.
- **Inverse:** a + (−a) = 0 (additive inverse); a × (1/a) = 1 for a ≠ 0 (multiplicative inverse / reciprocal).

Subtraction and division are **not** commutative and **not** associative: 5 − 3 ≠ 3 − 5.

## Order of operations

Work in **BODMAS** order — **B**rackets, **O**rders (powers/roots), **D**ivision and **M**ultiplication (left to right), then **A**ddition and **S**ubtraction (left to right).

1/2 + 1/3 × 3/4 → multiply first: 1/3 × 3/4 = 3/12 = 1/4; then 1/2 + 1/4 = 3/4.

## Mixed numbers

Convert a mixed number to an improper fraction before calculating: 2¾ = (2 × 4 + 3)/4 = 11/4.

## Common errors

- **Adding tops and bottoms** — 1/2 + 1/3 is not 2/5; use a common denominator (3/6 + 2/6 = 5/6).
- **Flipping the wrong fraction when dividing** — invert the divisor only.
- **Ignoring order of operations** — do × and ÷ before + and −.
- **Leaving an answer unsimplified** — always reduce to lowest terms (24/36 → 2/3).`,
          workedExample: `**Question:** Simplify 2/3 + 3/4 × 8/9, giving the answer as a fraction in lowest terms.

**Solution**

*Step 1 — order of operations.* Multiplication is done before addition.
3/4 × 8/9 = (3 × 8)/(4 × 9) = 24/36

*Step 2 — simplify the product.*
24/36 = 2/3 (dividing top and bottom by 12).

*Step 3 — add.*
2/3 + 2/3 = 4/3

*Step 4 — check the form.* 4/3 is already in lowest terms; as a mixed number it is 1⅓.

**Answer: 4/3**

*Common error:* adding 2/3 + 3/4 first breaks the order of operations — the multiplication must be resolved first.`,
          quiz: [
            { prompt: "Which of these is a rational number?", options: ["√2", "π", "0.75", "√5"], correctIndex: 2, explanation: "0.75 = 3/4, a ratio of integers." },
            { prompt: "Evaluate 1/2 + 1/3.", options: ["2/5", "1/6", "5/6", "2/6"], correctIndex: 2, explanation: "Common denominator 6: 3/6 + 2/6 = 5/6." },
            { prompt: "Evaluate 3/4 − 1/6.", options: ["7/12", "1", "1/2", "11/12"], correctIndex: 0, explanation: "9/12 − 2/12 = 7/12." },
            { prompt: "Evaluate 2/5 × 10/3.", options: ["4/3", "20/8", "12/8", "5/6"], correctIndex: 0, explanation: "20/15 = 4/3 in lowest terms." },
            { prompt: "Evaluate 4/9 ÷ 2/3.", options: ["8/27", "2/3", "3/2", "6/9"], correctIndex: 1, explanation: "4/9 × 3/2 = 12/18 = 2/3." },
            { prompt: "The property shown by a + b = b + a is", options: ["associative", "distributive", "commutative", "identity"], correctIndex: 2, explanation: "Order of addition does not change the sum." },
            { prompt: "a × (b + c) = a × b + a × c illustrates the", options: ["commutative property", "distributive property", "inverse property", "closure property"], correctIndex: 1, explanation: "Multiplication distributes over addition." },
            { prompt: "The additive inverse of 5/7 is", options: ["7/5", "−5/7", "0", "−7/5"], correctIndex: 1, explanation: "a + (−a) = 0, so the inverse is −5/7." },
            { prompt: "The reciprocal of 3/4 is", options: ["−3/4", "4/3", "3/4", "1"], correctIndex: 1, explanation: "a × (1/a) = 1, so the reciprocal is 4/3." },
            { prompt: "Evaluate 2/3 of 45.", options: ["15", "30", "22.5", "27"], correctIndex: 1, explanation: "2/3 × 45 = 90/3 = 30." },
            { prompt: "Which statement is FALSE?", options: ["subtraction is commutative", "addition is commutative", "multiplication is associative", "every integer is rational"], correctIndex: 0, explanation: "5 − 3 ≠ 3 − 5, so subtraction is not commutative." },
            { prompt: "Simplify 12/18 to lowest terms.", options: ["6/9", "3/4", "2/3", "4/6"], correctIndex: 2, explanation: "Divide top and bottom by 6." },
            { prompt: "Evaluate (1/2 + 1/4) × 8.", options: ["3", "6", "8", "12"], correctIndex: 1, explanation: "1/2 + 1/4 = 3/4; 3/4 × 8 = 6." },
            { prompt: "Convert 2¾ to an improper fraction.", options: ["11/4", "8/4", "9/4", "6/4"], correctIndex: 0, explanation: "(2 × 4 + 3)/4 = 11/4." },
            { prompt: "The multiplicative identity is", options: ["0", "1", "−1", "the reciprocal"], correctIndex: 1, explanation: "a × 1 = a, so 1 is the multiplicative identity." },
            { prompt: "Evaluate 5/6 − 2/3 + 1/2.", options: ["2/3", "1/2", "5/6", "1"], correctIndex: 0, explanation: "Common denominator 6: 5/6 − 4/6 + 3/6 = 4/6 = 2/3." },
            { prompt: "Which operation on rational numbers is NOT associative?", options: ["addition", "multiplication", "division", "none of these"], correctIndex: 2, explanation: "Division is not associative: (8 ÷ 4) ÷ 2 ≠ 8 ÷ (4 ÷ 2)." },
            { prompt: "Evaluate 1/2 + 1/3 × 3/4.", options: ["3/4", "5/8", "7/12", "1"], correctIndex: 0, explanation: "1/3 × 3/4 = 1/4; 1/2 + 1/4 = 3/4." },
            { prompt: "Which is written correctly in lowest terms?", options: ["15/20", "6/8", "9/12", "3/5"], correctIndex: 3, explanation: "3/5 has no common factor; the others reduce." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Simplify (3/5 + 1/2) ÷ 11/10, giving your answer in lowest terms.", answerKey: "3/5 + 1/2 = 6/10 + 5/10 = 11/10. Then 11/10 ÷ 11/10 = 11/10 × 10/11 = 1. Award 3 marks for the common-denominator sum, 3 for inverting and multiplying, 1 for the answer 1.", marks: 7 },
            { type: "SHORT_ANSWER", prompt: "Name the property of operations illustrated by each: (a) 7 × (4 + 5) = 7 × 4 + 7 × 5; (b) (2 + 3) + 6 = 2 + (3 + 6); (c) 9 × 1 = 9.", answerKey: "(a) Distributive property. (b) Associative property of addition. (c) Multiplicative identity. Award 3 marks each.", marks: 9 },
            { type: "MULTIPLE_CHOICE", prompt: "Evaluate 2/3 + 1/4 × 8/3.", options: ["10/9", "4/3", "8/9", "2"], correctIndex: 1, answerKey: "Multiplication first: 1/4 × 8/3 = 8/12 = 2/3. Then 2/3 + 2/3 = 4/3. Option B.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Evaluate 5/6 ÷ (2/3 − 1/2), showing each step.", answerKey: "2/3 − 1/2 = 4/6 − 3/6 = 1/6. Then 5/6 ÷ 1/6 = 5/6 × 6/1 = 5. Award 3 marks for the bracket, 2 for inverting, 1 for the answer 5.", marks: 6 },
            { type: "ESSAY", prompt: "A trader shares profit so that the first partner receives 1/2, the second 1/3, and the third the remainder. If the third partner receives 2,400 Liberian dollars, find the total profit and each partner's share.", answerKey: "Third fraction = 1 − 1/2 − 1/3 = 6/6 − 3/6 − 2/6 = 1/6. So 1/6 of total = 2,400, giving total = 14,400 LRD. Shares: first 1/2 × 14,400 = 7,200; second 1/3 × 14,400 = 4,800; third 1/6 × 14,400 = 2,400 (checks). Award 4 marks for the third fraction 1/6, 4 for the total, 2 for the three shares with check.", marks: 10 },
          ],
        },
        // source: Siyavula — Rational and irrational numbers, Grade 10 (https://www.siyavula.com/read/za/mathematics/grade-10/algebraic-expressions/01-algebraic-expressions-02)
        {
          slug: "real-numbers-and-standard-form",
          title: "Real Numbers, Decimals, Approximation and Standard Form",
          objective:
            "By the end of the topic, learners should be able to classify real numbers, convert fractions to terminating or recurring decimals, place numbers on the number line, round to a stated accuracy, and write numbers in standard form.",
          estimatedMinutes: 120,
          notes: `## The real number system

Number families nest inside one another:
- **Natural (N):** 1, 2, 3, …
- **Whole:** 0, 1, 2, 3, …
- **Integers (Z):** …, −2, −1, 0, 1, 2, …
- **Rational (Q):** any a/b with integers a, b and b ≠ 0
- **Irrational:** cannot be written as a fraction (√2, π)
- **Real (R):** the rationals together with the irrationals

## Decimal representation

A rational number is either a **terminating** decimal (3/8 = 0.375) or a **recurring** (repeating) decimal (2/11 = 0.1818…). A bar or dot marks the repeating digits.

If a decimal goes on **forever without repeating**, the number is **irrational** (π = 3.14159…, √2 = 1.41421…).

## The real number line

Every real number has one position on the line; larger numbers lie to the right.

\`\`\`svg Number line marking the rationals −3/2, 0 and 5/2, and the irrational √2 ≈ 1.41.
<svg viewBox="0 0 360 90" role="img" aria-label="Number line from -2 to 2 marking -3/2, 0, root 2 and 5/2">
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
    <circle cx="258" cy="50" r="3.5"/><text x="258" y="34" font-size="10" fill="currentColor" text-anchor="middle">√2</text>
    <circle cx="317" cy="50" r="3.5"/><text x="317" y="34" font-size="10" fill="currentColor" text-anchor="middle">5/2</text>
  </g>
</svg>
\`\`\`

## Approximation (rounding)

Rounding an irrational number gives a rational number that approximates it. State the accuracy (decimal places or significant figures).

- 2/7 = 0.2857… ≈ 0.29 (2 decimal places)
- √2 = 1.41421… ≈ 1.41 (2 d.p.)

## Standard form (scientific notation)

A number in **standard form** is written as **a × 10ⁿ** where 1 ≤ a < 10 and n is an integer.

- Large numbers: 45,300 = 4.53 × 10⁴
- Small numbers: 0.0067 = 6.7 × 10⁻³

The power of 10 counts how many places the decimal point moves: positive n for large numbers, negative n for small numbers.

## Common errors

- **Thinking a square-root sign always means irrational** — √4 = 2 is rational; the value decides.
- **Forgetting 1 ≤ a < 10 in standard form** — 45.3 × 10³ is not standard form; 4.53 × 10⁴ is.
- **Not stating the accuracy** when rounding.`,
          workedExample: `**Question:** (a) Write 3/8 as a decimal and state whether it is terminating or recurring.
(b) Round √2 = 1.41421… to two decimal places.
(c) Write 0.00045 in standard form.

**Solution**

*Part (a).* 3 ÷ 8 = 0.375. The decimal ends, so it is a **terminating** decimal; 3/8 is rational.

*Part (b).* The third decimal digit is 4 (less than 5), so round down: √2 ≈ 1.41 (2 d.p.).

*Part (c).* Move the decimal point to just after the first non-zero digit: 4.5. The point moved 4 places to the right, so the power is −4.
0.00045 = 4.5 × 10⁻⁴

**Answer:** (a) 0.375, terminating; (b) 1.41; (c) 4.5 × 10⁻⁴.`,
          quiz: [
            { prompt: "Which set contains both rational and irrational numbers?", options: ["integers", "whole numbers", "real numbers", "natural numbers"], correctIndex: 2, explanation: "The reals are the rationals together with the irrationals." },
            { prompt: "Which number is irrational?", options: ["0.5", "√9", "√7", "1/3"], correctIndex: 2, explanation: "√7 is not a ratio of integers; √9 = 3 is rational." },
            { prompt: "Write 3/8 as a decimal.", options: ["0.375", "0.38", "0.83", "0.125"], correctIndex: 0, explanation: "3 ÷ 8 = 0.375, a terminating decimal." },
            { prompt: "A recurring decimal such as 0.2727… is", options: ["irrational", "rational", "not a real number", "an integer"], correctIndex: 1, explanation: "Repeating decimals equal a fraction, so they are rational." },
            { prompt: "0.0067 in standard form is", options: ["6.7 × 10³", "6.7 × 10⁻³", "67 × 10⁻⁴", "0.67 × 10⁻²"], correctIndex: 1, explanation: "The point moves 3 places, small number so negative power." },
            { prompt: "45,300 in standard form is", options: ["4.53 × 10³", "45.3 × 10³", "4.53 × 10⁴", "4.53 × 10⁻⁴"], correctIndex: 2, explanation: "4.53 with the point moved 4 places right." },
            { prompt: "√2 = 1.41421… rounded to 2 decimal places is", options: ["1.40", "1.41", "1.42", "1.414"], correctIndex: 1, explanation: "The third digit 4 rounds down." },
            { prompt: "Which is the largest?", options: ["−3/2", "0", "1/2", "5/2"], correctIndex: 3, explanation: "5/2 = 2.5 lies furthest right on the number line." },
            { prompt: "Which number is NOT rational?", options: ["0.375", "22/7", "π", "−4"], correctIndex: 2, explanation: "π is irrational; 22/7 is only an approximation of it." },
            { prompt: "In standard form a × 10ⁿ, the value of a must satisfy", options: ["0 < a < 1", "1 ≤ a < 10", "1 < a ≤ 10", "a ≥ 10"], correctIndex: 1, explanation: "a is at least 1 and less than 10." },
            { prompt: "The number 0.375 belongs to which smallest set?", options: ["integers", "natural numbers", "rational numbers", "irrational numbers"], correctIndex: 2, explanation: "It is a terminating decimal, hence rational but not an integer." },
            { prompt: "2/7 to 2 decimal places is approximately", options: ["0.28", "0.29", "0.30", "0.27"], correctIndex: 1, explanation: "2 ÷ 7 = 0.2857…, rounding to 0.29." },
            { prompt: "3.2 × 10⁵ written out is", options: ["32,000", "320,000", "3,200,000", "0.000032"], correctIndex: 1, explanation: "Move the point 5 places right: 320000." },
            { prompt: "Which decimal is terminating?", options: ["1/3", "2/11", "5/8", "1/7"], correctIndex: 2, explanation: "5/8 = 0.625 ends; the others recur." },
            { prompt: "√16 is", options: ["irrational", "rational (= 4)", "not real", "a recurring decimal"], correctIndex: 1, explanation: "√16 = 4 = 4/1, which is rational." },
            { prompt: "Every integer is also a", options: ["natural number", "rational number", "irrational number", "recurring decimal"], correctIndex: 1, explanation: "n = n/1, so every integer is rational." },
            { prompt: "7.5 × 10⁻² equals", options: ["750", "75", "0.075", "0.75"], correctIndex: 2, explanation: "Move the point 2 places left: 0.075." },
            { prompt: "Rounding an irrational number produces", options: ["another irrational number", "a rational approximation", "an integer always", "an error"], correctIndex: 1, explanation: "A rounded value terminates, so it is rational." },
            { prompt: "Which is written correctly in standard form?", options: ["12 × 10²", "0.9 × 10³", "1.2 × 10³", "1.2 × 10^1.5"], correctIndex: 2, explanation: "Only 1.2 × 10³ has 1 ≤ a < 10 and integer power." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "State whether each is rational or irrational, with a reason: (a) √25, (b) 0.454545…, (c) √3.", answerKey: "(a) Rational — √25 = 5 = 5/1. (b) Rational — a recurring decimal equals a fraction (5/11). (c) Irrational — √3 cannot be written as a ratio of integers and its decimal neither terminates nor recurs. Award 2 marks each, requiring the reason.", marks: 6 },
            { type: "SHORT_ANSWER", prompt: "Write in standard form: (a) 68,000, (b) 0.00092, (c) 4.1 million.", answerKey: "(a) 6.8 × 10⁴; (b) 9.2 × 10⁻⁴; (c) 4.1 × 10⁶. Award 2 marks each.", marks: 6 },
            { type: "MULTIPLE_CHOICE", prompt: "Which of these is NOT in correct standard form?", options: ["3.0 × 10⁵", "5.6 × 10⁻²", "10.4 × 10³", "9.9 × 10⁰"], correctIndex: 2, answerKey: "10.4 is not between 1 and 10, so option C is not standard form (should be 1.04 × 10⁴).", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Round 4/7 to (a) two decimal places and (b) three decimal places.", answerKey: "4 ÷ 7 = 0.571428… (a) 0.57 (2 d.p.); (b) 0.571 (3 d.p.). Award 2 marks for the decimal expansion and 2 for each rounding, minus if accuracy not stated.", marks: 6 },
            { type: "ESSAY", prompt: "Explain how to decide whether a given decimal represents a rational or an irrational number, giving one example of each, and describe how rounding an irrational number changes its classification.", answerKey: "A decimal is rational if it terminates (0.75) or recurs (0.333…); it is irrational if it is non-terminating and non-repeating (π = 3.14159…, √2 = 1.414…). Rounding an irrational number to a fixed number of places produces a terminating decimal, which is rational, so the rounded value is a rational approximation of the irrational number. Award 3 marks for the terminating/recurring vs non-repeating criterion, 2 for a correct example of each, 3 for the effect of rounding, 2 for overall clarity.", marks: 10 },
          ],
        },
      ],
    },
  ],
};
