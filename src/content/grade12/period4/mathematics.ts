import type { PeriodContent } from "@/content/types";

// Grade 12, Semester Two, Period IV of the MoE Mathematics syllabus:
// Numbers and Numeration, Sets and Logic, Relations and Functions/Mappings/
// Ratio/Proportion/Variation, and Algebraic Processes. Notes rebuilt from
// published sources (GeeksforGeeks, Siyavula).
export const mathematicsG12P4: PeriodContent = {
  grade: 12,
  number: 4,
  title: "Numbers, Sets, Variation and Algebraic Processes",
  summary:
    "Period IV of the MoE Grade 12 Mathematics syllabus. Learners review real numbers, number bases, modular arithmetic, identities and powers/roots; work with sets, subsets, operations and their properties; handle relations, functions, mappings, ratio, proportion and variation; and carry out algebraic processes including factorisation, fractions, equations, simultaneous equations and linear programming.",
  topics: [
    // source: GeeksforGeeks — Base Conversions for Number System (https://www.geeksforgeeks.org/maths/number-system-and-base-conversions/); Modular Arithmetic (https://www.geeksforgeeks.org/engineering-mathematics/modular-arithmetic/)
    {
      slug: "numbers-and-numeration",
      title: "Numbers and Numeration",
      objective:
        "By the end of the topic, learners should be able to review real numbers, convert between number bases, work in modular arithmetic, use the number identities, and apply powers, roots and standard form.",
      estimatedMinutes: 120,
      notes: `## Review of real numbers

- **Natural numbers** 1, 2, 3, …; **whole numbers** include 0.
- **Integers**: …, −2, −1, 0, 1, 2, …
- **Rational numbers**: can be written as a fraction a/b (b ≠ 0); **irrational numbers** (like √2, π) cannot.
- A **prime number** has exactly two factors, 1 and itself; **prime factorisation** writes a number as a product of primes.

## Number bases

- In **base ten**, each place is a power of 10; in **base b**, each place is a power of b.
- **Base b → base ten:** expand using powers of b, e.g. 203₅ = 2×5² + 0×5 + 3 = 53.
- **Base ten → base b:** divide repeatedly by b and read the remainders **from bottom to top**.

## Modular arithmetic

- In **modular arithmetic** numbers "wrap around" after reaching the **modulus m**.
- **a ≡ r (mod m)** means r is the remainder when a is divided by m.
- Example: 17 ≡ 2 (mod 5) because 17 = 3×5 + 2. Clock arithmetic is mod 12.

## Identities (properties of operations)

| Property | Statement |
| --- | --- |
| Commutative | a + b = b + a; a × b = b × a |
| Associative | (a + b) + c = a + (b + c) |
| Distributive | a(b + c) = ab + ac |

## Powers and roots

- **Laws of indices:** aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁰ = 1; a⁻ⁿ = 1/aⁿ.
- A **root** is a fractional power: a^(1/n) is the nth root of a, so √a = a^(1/2).

## Standard form

- **Standard form** writes a number as **A × 10ⁿ** with **1 ≤ A < 10**.
- Example: 45 000 = 4.5 × 10⁴; 0.0032 = 3.2 × 10⁻³.

## Common errors

- **Reading base-conversion remainders top to bottom** — read them bottom to top.
- **Writing A × 10ⁿ with A outside 1 ≤ A < 10.**
- **Confusing a⁰ = 1 with a⁰ = 0.**`,
      workedExample: `**Question:** Convert 53 (base ten) to base 5, then convert your answer back to base ten to check.

**Solution**

*Step 1 — divide repeatedly by 5, recording remainders.*
53 ÷ 5 = 10 remainder 3
10 ÷ 5 = 2 remainder 0
2 ÷ 5 = 0 remainder 2

*Step 2 — read the remainders from bottom to top.*
53 = 203₅

*Step 3 — check by expanding 203₅ in powers of 5.*
2×5² + 0×5 + 3 = 2×25 + 0 + 3 = 50 + 3 = 53 ✓

**Answer: 53 = 203₅.**`,
      quiz: [
        { prompt: "√2 is an example of a", options: ["rational number", "irrational number", "whole number", "prime number"], correctIndex: 1, explanation: "It cannot be written as a fraction." },
        { prompt: "A prime number has exactly", options: ["one factor", "two factors", "three factors", "no factors"], correctIndex: 1, explanation: "1 and itself only." },
        { prompt: "In base ten, the digit places are powers of", options: ["2", "5", "10", "8"], correctIndex: 2, explanation: "Base ten uses powers of 10." },
        { prompt: "203₅ in base ten is", options: ["53", "50", "23", "35"], correctIndex: 0, explanation: "2×25 + 0 + 3 = 53." },
        { prompt: "To convert base ten to base b you", options: ["multiply by b", "divide repeatedly by b and read remainders", "add b", "subtract b"], correctIndex: 1, explanation: "Repeated division gives the digits." },
        { prompt: "The remainders in base conversion are read", options: ["top to bottom", "bottom to top", "left to right", "randomly"], correctIndex: 1, explanation: "The last remainder is the leading digit." },
        { prompt: "17 ≡ ? (mod 5)", options: ["1", "2", "3", "4"], correctIndex: 1, explanation: "17 = 3×5 + 2." },
        { prompt: "On a 12-hour clock, 4 hours after 10 o'clock is", options: ["1", "2", "3", "14"], correctIndex: 1, explanation: "(10+4) mod 12 = 2." },
        { prompt: "The commutative property says", options: ["a + b = b + a", "(a+b)+c = a+(b+c)", "a(b+c) = ab+ac", "a + 0 = a"], correctIndex: 0, explanation: "Order does not matter." },
        { prompt: "The distributive property says", options: ["a + b = b + a", "a(b + c) = ab + ac", "(ab)c = a(bc)", "a × 1 = a"], correctIndex: 1, explanation: "Multiplication distributes over addition." },
        { prompt: "aᵐ × aⁿ equals", options: ["aᵐⁿ", "aᵐ⁺ⁿ", "aᵐ⁻ⁿ", "a^(m/n)"], correctIndex: 1, explanation: "Add the indices." },
        { prompt: "a⁰ equals", options: ["0", "1", "a", "undefined"], correctIndex: 1, explanation: "Any nonzero base to the power 0 is 1." },
        { prompt: "a⁻ⁿ equals", options: ["−aⁿ", "1/aⁿ", "aⁿ", "n/a"], correctIndex: 1, explanation: "Negative index gives a reciprocal." },
        { prompt: "√a written as a power is", options: ["a²", "a^(1/2)", "a⁻¹", "2a"], correctIndex: 1, explanation: "Square root = power one half." },
        { prompt: "45 000 in standard form is", options: ["45 × 10³", "4.5 × 10⁴", "4.5 × 10³", "0.45 × 10⁵"], correctIndex: 1, explanation: "1 ≤ A < 10 gives 4.5 × 10⁴." },
        { prompt: "0.0032 in standard form is", options: ["3.2 × 10⁻³", "3.2 × 10³", "32 × 10⁻⁴", "0.32 × 10⁻²"], correctIndex: 0, explanation: "Move the point 3 places: 3.2 × 10⁻³." },
        { prompt: "The prime factorisation of 12 is", options: ["2 × 6", "2² × 3", "3 × 4", "12 × 1"], correctIndex: 1, explanation: "12 = 2 × 2 × 3." },
        { prompt: "(a³)² equals", options: ["a⁵", "a⁶", "a⁹", "a¹"], correctIndex: 1, explanation: "Multiply the indices: 3×2 = 6." },
        { prompt: "The associative property groups", options: ["terms without changing order", "digits in a base", "remainders", "roots"], correctIndex: 0, explanation: "(a+b)+c = a+(b+c)." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Convert 27 (base ten) to base 2.", answerKey: "27÷2 = 13 r1, 13÷2 = 6 r1, 6÷2 = 3 r0, 3÷2 = 1 r1, 1÷2 = 0 r1. Reading upward: 11011₂. Check: 16+8+0+2+1 = 27. Award 4 marks for the division, 2 for 11011₂.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Find 29 mod 6 and 40 mod 7.", answerKey: "29 = 4×6 + 5, so 29 ≡ 5 (mod 6). 40 = 5×7 + 5, so 40 ≡ 5 (mod 7). Award 3 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Write 0.000501 in standard form.", options: ["5.01 × 10⁻⁴", "5.01 × 10⁴", "50.1 × 10⁻⁵", "5.01 × 10⁻³"], correctIndex: 0, answerKey: "Move the point 4 places: 5.01 × 10⁻⁴. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Simplify using the laws of indices: (a) x⁵ × x³ and (b) x⁷ ÷ x². ", answerKey: "(a) x⁵⁺³ = x⁸. (b) x⁷⁻² = x⁵. Award 3 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Explain how to convert a base-ten number to another base and back, and state the commutative, associative and distributive properties. Illustrate the conversion with 45 to base 8.", answerKey: "To go from base ten to base b, divide the number repeatedly by b and read the remainders from bottom to top; to convert back, expand each digit by the matching power of b and add. Properties: commutative a+b = b+a and ab = ba; associative (a+b)+c = a+(b+c); distributive a(b+c) = ab+ac. Conversion: 45÷8 = 5 r5, 5÷8 = 0 r5, so 45 = 55₈; check 5×8+5 = 45. Award 3 marks for the conversion method, 3 for the three properties, 4 for the worked 45 = 55₈.", marks: 10 },
      ],
    },
    // source: GeeksforGeeks — Set Operations: Union, Intersection, Complement & Difference (https://www.geeksforgeeks.org/maths/set-operations/)
    {
      slug: "sets-and-logic",
      title: "Sets and Logic",
      objective:
        "By the end of the topic, learners should be able to use set notation, subsets and types of sets, perform set operations with Venn diagrams, apply the properties of set operations, and solve two- and three-set problems.",
      estimatedMinutes: 120,
      notes: `## Sets and notation

- A **set** is a well-defined collection of objects (**elements**), written in braces: A = {1, 2, 3}.
- **x ∈ A** means x is an element of A; **x ∉ A** means it is not.

## Subsets

- **A ⊆ B** means every element of A is also in B (A is a subset of B).
- The **empty set ∅** is a subset of every set. A set with n elements has **2ⁿ subsets**.

## Types of sets

- **Finite** (countable number of elements), **infinite**, **empty (∅)**.
- **Universal set (U)** contains all elements under discussion.
- **Equal sets** have exactly the same elements; **equivalent sets** have the same number of elements.

## Operations on sets

| Operation | Symbol | Meaning |
| --- | --- | --- |
| Union | A ∪ B | elements in A or B (or both) |
| Intersection | A ∩ B | elements in both A and B |
| Complement | A′ | elements of U not in A |
| Difference | A − B | elements in A but not in B |

- **Disjoint sets** have no common elements: A ∩ B = ∅.

## Properties of set operations

- **Commutative:** A ∪ B = B ∪ A; A ∩ B = B ∩ A.
- **Associative:** (A ∪ B) ∪ C = A ∪ (B ∪ C).
- **Distributive:** A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C).
- **Complement:** A ∪ A′ = U and A ∩ A′ = ∅.

## Two- and three-set problems

- **n(A ∪ B) = n(A) + n(B) − n(A ∩ B).**
- Use a Venn diagram, filling the **overlap first**, then the rest.

## Common errors

- **Adding the two set sizes** without subtracting the overlap.
- **Confusing ⊆ (subset) with ∈ (element).**
- **Forgetting ∅ is a subset of every set.**`,
      workedExample: `**Question:** In a class, 20 study Maths, 15 study Physics and 5 study both. How many study at least one of the two subjects?

**Solution**

*Step 1 — write the formula.* n(M ∪ P) = n(M) + n(P) − n(M ∩ P).

*Step 2 — substitute.* = 20 + 15 − 5.

*Step 3 — simplify.* = 30.

*Check with a Venn diagram:* Maths only 20 − 5 = 15, both = 5, Physics only 15 − 5 = 10; total 15 + 5 + 10 = 30. ✓

**Answer: 30 students study at least one of the two subjects.**`,
      quiz: [
        { prompt: "A set is", options: ["a single number", "a well-defined collection of elements", "an equation", "a graph"], correctIndex: 1, explanation: "Sets group elements." },
        { prompt: "x ∈ A means", options: ["x is a subset of A", "x is an element of A", "x is not in A", "A is empty"], correctIndex: 1, explanation: "∈ denotes membership." },
        { prompt: "A ⊆ B means", options: ["A equals B", "every element of A is in B", "A and B are disjoint", "B is empty"], correctIndex: 1, explanation: "A is a subset of B." },
        { prompt: "The empty set is a subset of", options: ["no set", "only itself", "every set", "only finite sets"], correctIndex: 2, explanation: "∅ ⊆ any set." },
        { prompt: "A set with 3 elements has how many subsets?", options: ["3", "6", "8", "9"], correctIndex: 2, explanation: "2³ = 8." },
        { prompt: "A ∪ B contains elements in", options: ["both A and B only", "A or B (or both)", "neither", "A only"], correctIndex: 1, explanation: "Union combines the sets." },
        { prompt: "A ∩ B contains elements in", options: ["A or B", "both A and B", "A only", "the universal set"], correctIndex: 1, explanation: "Intersection is the overlap." },
        { prompt: "A′ (complement) contains elements", options: ["in A", "of U not in A", "in A ∩ B", "in the empty set"], correctIndex: 1, explanation: "Everything in U outside A." },
        { prompt: "Disjoint sets have", options: ["all elements in common", "no common elements", "equal sizes", "the same elements"], correctIndex: 1, explanation: "A ∩ B = ∅." },
        { prompt: "Equal sets have", options: ["the same number of elements only", "exactly the same elements", "no elements", "one element"], correctIndex: 1, explanation: "Same members, not just same count." },
        { prompt: "Equivalent sets have", options: ["the same elements", "the same number of elements", "no elements", "different sizes"], correctIndex: 1, explanation: "Same cardinality." },
        { prompt: "n(A ∪ B) equals", options: ["n(A) + n(B)", "n(A) + n(B) − n(A ∩ B)", "n(A) × n(B)", "n(A) − n(B)"], correctIndex: 1, explanation: "Subtract the double-counted overlap." },
        { prompt: "If n(A) = 12, n(B) = 8, n(A ∩ B) = 3, then n(A ∪ B) is", options: ["20", "17", "23", "14"], correctIndex: 1, explanation: "12 + 8 − 3 = 17." },
        { prompt: "A ∪ A′ equals", options: ["∅", "A", "U", "A′"], correctIndex: 2, explanation: "A set with its complement fills U." },
        { prompt: "A ∩ A′ equals", options: ["U", "A", "∅", "A′"], correctIndex: 2, explanation: "Nothing is in both A and A′." },
        { prompt: "The commutative law of sets says", options: ["A ∪ B = B ∪ A", "A ⊆ B", "A − B = B − A", "A ∩ ∅ = A"], correctIndex: 0, explanation: "Order does not matter for ∪ and ∩." },
        { prompt: "The universal set is usually drawn as a", options: ["circle", "rectangle", "triangle", "line"], correctIndex: 1, explanation: "A rectangle encloses the Venn diagram." },
        { prompt: "A − B contains elements", options: ["in both A and B", "in A but not B", "in B but not A", "in neither"], correctIndex: 1, explanation: "Difference removes B's elements." },
        { prompt: "The symbol ∉ means", options: ["is a subset of", "is an element of", "is not an element of", "is equal to"], correctIndex: 2, explanation: "Non-membership." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "List all the subsets of {a, b}.", answerKey: "∅, {a}, {b}, {a, b} — that is 2² = 4 subsets. Award 1 mark each for the four subsets and 2 marks for including ∅ and the full set.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Given U = {1,2,3,4,5,6}, A = {2,4,6}, B = {1,2,3}, find A ∪ B, A ∩ B and A′.", answerKey: "A ∪ B = {1,2,3,4,6}; A ∩ B = {2}; A′ = {1,3,5}. Award 2 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "If n(A) = 25, n(B) = 30 and n(A ∩ B) = 10, then n(A ∪ B) is", options: ["45", "55", "65", "35"], correctIndex: 0, answerKey: "25 + 30 − 10 = 45. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "In a group of 40 people, 22 like tea, 18 like coffee and 8 like both. How many like neither?", answerKey: "n(tea ∪ coffee) = 22 + 18 − 8 = 32. Neither = 40 − 32 = 8. Award 3 marks for 32, 3 for 8.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the union, intersection and complement of sets, state the formula for n(A ∪ B), and use it for n(A) = 18, n(B) = 14, n(A ∩ B) = 6, also finding how many are in exactly one set.", answerKey: "Union A ∪ B is all elements in A or B or both; intersection A ∩ B is elements in both; complement A′ is elements of U not in A. n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 18 + 14 − 6 = 26. Exactly one set = n(A ∪ B) − n(A ∩ B) = 26 − 6 = 20 (A only 12, B only 8). Award 3 marks for the definitions, 2 for the formula, 3 for n(A ∪ B) = 26, 2 for exactly one = 20.", marks: 10 },
      ],
    },
    // source: GeeksforGeeks — Direct Proportion (https://www.geeksforgeeks.org/maths/direct-proportion/); Direct and Inverse Proportions (https://www.geeksforgeeks.org/maths/direct-and-inverse-proportions/)
    {
      slug: "relations-functions-and-variation",
      title: "Relations and Functions, Mappings, Ratio, Proportion and Variation",
      objective:
        "By the end of the topic, learners should be able to describe relations, functions and mappings, use ratio and proportion, and solve direct, inverse, joint and partial variation problems.",
      estimatedMinutes: 120,
      notes: `## Relations, functions and mappings

- A **relation** links elements of one set to elements of another (a set of ordered pairs).
- A **function (mapping)** is a relation in which **each input has exactly one output**.
- Types of mapping: **one-to-one**, **many-to-one** (both functions), and **one-to-many** (not a function).

## Ratio and proportion

- A **ratio** compares quantities: a : b.
- A **proportion** states two ratios are equal: a : b = c : d, i.e. a/b = c/d.
- To share an amount in a ratio, divide by the total number of parts.

## Direct variation

- **y varies directly as x: y ∝ x, so y = kx** (k is the constant of variation).
- As x increases, y increases in the same ratio; k = y/x is constant.

## Inverse variation

- **y varies inversely as x: y ∝ 1/x, so y = k/x** (xy = k is constant).
- As x increases, y decreases.

## Joint and partial variation

- **Joint variation:** y varies as two or more variables together, e.g. **y = kxz**.
- **Partial variation:** y is the **sum of two parts**, e.g. **y = a + bx** (one part constant, one part varying).

| Type | Equation |
| --- | --- |
| Direct | y = kx |
| Inverse | y = k/x |
| Joint | y = kxz |
| Partial | y = a + bx |

## Solving variation problems

1. Write the equation with k.
2. Use the given pair of values to find k.
3. Substitute k back and solve for the required value.

## Common errors

- **Using y = k/x for a direct variation** (that is inverse).
- **Forgetting to find k first** before answering.
- **Calling a one-to-many relation a function.**`,
      workedExample: `**Question:** y varies directly as x, and y = 12 when x = 3. Find y when x = 5.

**Solution**

*Step 1 — write the equation.* Direct variation: y = kx.

*Step 2 — find k using the given values.* 12 = k × 3, so k = 12 ÷ 3 = 4.

*Step 3 — substitute k and the new x.* y = 4 × 5 = 20.

**Answer: y = 20 when x = 5.**`,
      quiz: [
        { prompt: "A relation is a set of", options: ["ordered pairs", "single numbers", "angles", "graphs only"], correctIndex: 0, explanation: "It links inputs to outputs." },
        { prompt: "A function maps each input to", options: ["many outputs", "exactly one output", "no output", "itself"], correctIndex: 1, explanation: "One output per input." },
        { prompt: "Which mapping is NOT a function?", options: ["one-to-one", "many-to-one", "one-to-many", "all are functions"], correctIndex: 2, explanation: "One input with two outputs fails." },
        { prompt: "A ratio a : b is the same as", options: ["a − b", "a/b", "a + b", "ab"], correctIndex: 1, explanation: "It is a fraction comparison." },
        { prompt: "A proportion states that", options: ["two ratios are equal", "a ratio is zero", "one number is prime", "a set is empty"], correctIndex: 0, explanation: "a : b = c : d." },
        { prompt: "Direct variation is", options: ["y = k/x", "y = kx", "y = kxz", "y = a + bx"], correctIndex: 1, explanation: "y proportional to x." },
        { prompt: "Inverse variation is", options: ["y = kx", "y = k/x", "y = kxz", "y = a − x"], correctIndex: 1, explanation: "y proportional to 1/x." },
        { prompt: "Joint variation is", options: ["y = kx", "y = k/x", "y = kxz", "y = a + bx"], correctIndex: 2, explanation: "y varies as a product." },
        { prompt: "Partial variation is", options: ["y = kx", "y = k/x", "y = a + bx", "y = kxz"], correctIndex: 2, explanation: "A constant part plus a varying part." },
        { prompt: "In y = kx, k is the", options: ["variable", "constant of variation", "input", "output"], correctIndex: 1, explanation: "k stays fixed." },
        { prompt: "If y = kx and y = 10 when x = 2, then k is", options: ["2", "5", "10", "20"], correctIndex: 1, explanation: "k = 10/2 = 5." },
        { prompt: "In inverse variation, as x increases y", options: ["increases", "decreases", "stays the same", "doubles"], correctIndex: 1, explanation: "y = k/x falls as x rises." },
        { prompt: "Share $60 in the ratio 2 : 1. The larger share is", options: ["$20", "$30", "$40", "$60"], correctIndex: 2, explanation: "2/3 × 60 = 40." },
        { prompt: "For y = k/x, the product xy is", options: ["variable", "constant k", "zero", "1"], correctIndex: 1, explanation: "xy = k stays constant." },
        { prompt: "In direct variation, y/x is", options: ["zero", "constant", "always 1", "the input"], correctIndex: 1, explanation: "y/x = k." },
        { prompt: "If y varies inversely as x and y = 4 when x = 3, then k is", options: ["7", "12", "1.33", "4"], correctIndex: 1, explanation: "k = xy = 3 × 4 = 12." },
        { prompt: "The first step in a variation problem is to", options: ["guess y", "write the equation with k", "draw a graph", "find x"], correctIndex: 1, explanation: "Set up the relationship first." },
        { prompt: "A many-to-one mapping is", options: ["not a function", "a function", "a relation only", "always inverse"], correctIndex: 1, explanation: "Each input still has one output." },
        { prompt: "y = a + bx describes", options: ["direct variation", "inverse variation", "partial variation", "joint variation"], correctIndex: 2, explanation: "Constant part a plus varying part bx." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "y varies directly as x. If y = 20 when x = 4, find k and then y when x = 7.", answerKey: "y = kx; 20 = 4k so k = 5; y = 5 × 7 = 35. Award 2 for the equation, 2 for k = 5, 2 for y = 35.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "p varies inversely as q. If p = 6 when q = 2, find p when q = 3.", answerKey: "p = k/q; k = pq = 6 × 2 = 12; p = 12/3 = 4. Award 2 for k = 12, 2 for the setup, 2 for p = 4.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Share $80 in the ratio 3 : 5. The smaller share is", options: ["$30", "$50", "$40", "$16"], correctIndex: 0, answerKey: "3/8 × 80 = $30. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State whether each is a function: (a) a one-to-many mapping, (b) a many-to-one mapping.", answerKey: "(a) Not a function — an input has more than one output. (b) A function — each input has exactly one output. Award 3 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Describe the four types of variation with their equations, and solve: z varies jointly as x and y; z = 24 when x = 2 and y = 3. Find z when x = 4 and y = 5.", answerKey: "Direct y = kx; inverse y = k/x; joint y = kxz (varies as a product); partial y = a + bx (constant plus varying part). For the problem: z = kxy; 24 = k(2)(3) = 6k so k = 4; then z = 4 × 4 × 5 = 80. Award 4 marks for the four types, 2 for k = 4, 4 for z = 80.", marks: 10 },
      ],
    },
    // source: Siyavula — Factorisation, Grade 10 (https://www.siyavula.com/read/za/mathematics/grade-10/algebraic-expressions/01-algebraic-expressions-06); GeeksforGeeks — Sum and Difference of Cubes (https://www.geeksforgeeks.org/maths/sum-and-difference-of-cubes/)
    {
      slug: "algebraic-processes",
      title: "Algebraic Processes",
      objective:
        "By the end of the topic, learners should be able to simplify and factorise expressions, work with algebraic fractions, solve equations, inequalities, quadratic and simultaneous equations, and set up a linear-programming problem.",
      estimatedMinutes: 130,
      notes: `## Simplification

- **Collect like terms** (same variable and power): 3x + 5x − 2 = 8x − 2.
- Expand brackets, then simplify: 2(x + 3) + 4x = 6x + 6.

## Factorisation

| Method | Example |
| --- | --- |
| Common factor | 6x + 9 = 3(2x + 3) |
| Grouping | ax + ay + bx + by = a(x+y) + b(x+y) = (a+b)(x+y) |
| Quadratic trinomial | x² + 5x + 6 = (x + 2)(x + 3) |
| Difference of two squares | a² − b² = (a + b)(a − b) |
| Sum of two cubes | a³ + b³ = (a + b)(a² − ab + b²) |
| Difference of two cubes | a³ − b³ = (a − b)(a² + ab + b²) |

## Algebraic fractions

- Add/subtract using a **common denominator**; multiply by multiplying numerators and denominators; simplify by cancelling common factors.
- A fraction is **undefined** where the **denominator is zero**.

## Equations and inequalities

- Solve linear equations by doing the same operation to both sides.
- For inequalities, **reverse the sign when multiplying or dividing by a negative**.

## Quadratic equations

- Solve by **factorisation**, **completing the square**, or the **quadratic formula**:
- **x = (−b ± √(b² − 4ac)) / (2a)** for ax² + bx + c = 0.

## Simultaneous linear equations

- Solve by **elimination**, **substitution**, or **graphs** — the solution is the pair (x, y) satisfying both.

## Linear programming

- Write the **constraints as inequalities**, shade the **feasible region**, and find the maximum or minimum of the **objective function** at a **vertex** of the region.

## Common errors

- **Not reversing the inequality sign** with a negative multiplier.
- **Cancelling terms instead of factors** in a fraction.
- **Sign slips** in the quadratic formula.`,
      workedExample: `**Question:** Solve the quadratic equation x² − 5x + 6 = 0 by factorisation.

**Solution**

*Step 1 — find two numbers that multiply to +6 and add to −5.*
−2 and −3, since (−2)(−3) = 6 and (−2) + (−3) = −5.

*Step 2 — factorise.*
x² − 5x + 6 = (x − 2)(x − 3) = 0.

*Step 3 — set each factor to zero.*
x − 2 = 0 → x = 2; x − 3 = 0 → x = 3.

*Check:* 2² − 5(2) + 6 = 4 − 10 + 6 = 0 ✓; 3² − 5(3) + 6 = 9 − 15 + 6 = 0 ✓.

**Answer: x = 2 or x = 3.**`,
      quiz: [
        { prompt: "Simplify 3x + 5x − 2.", options: ["8x − 2", "6x", "8x²", "10x"], correctIndex: 0, explanation: "Collect like terms." },
        { prompt: "Expand 2(x + 4).", options: ["2x + 4", "2x + 8", "x + 8", "2x + 6"], correctIndex: 1, explanation: "Multiply each term by 2." },
        { prompt: "Factor 6x + 9.", options: ["3(2x + 3)", "6(x + 9)", "3(2x + 9)", "2(3x + 9)"], correctIndex: 0, explanation: "Common factor 3." },
        { prompt: "a² − b² factorises to", options: ["(a − b)²", "(a + b)(a − b)", "(a + b)²", "a² + b²"], correctIndex: 1, explanation: "Difference of two squares." },
        { prompt: "x² + 5x + 6 factorises to", options: ["(x + 2)(x + 3)", "(x + 1)(x + 6)", "(x − 2)(x − 3)", "(x + 6)(x − 1)"], correctIndex: 0, explanation: "2 × 3 = 6, 2 + 3 = 5." },
        { prompt: "a³ + b³ factorises to", options: ["(a + b)(a² − ab + b²)", "(a − b)(a² + ab + b²)", "(a + b)³", "(a + b)(a² + b²)"], correctIndex: 0, explanation: "Sum of two cubes." },
        { prompt: "a³ − b³ factorises to", options: ["(a + b)(a² − ab + b²)", "(a − b)(a² + ab + b²)", "(a − b)³", "(a − b)(a² − b²)"], correctIndex: 1, explanation: "Difference of two cubes." },
        { prompt: "An algebraic fraction is undefined when the denominator is", options: ["1", "0", "negative", "prime"], correctIndex: 1, explanation: "Division by zero is undefined." },
        { prompt: "When dividing an inequality by a negative number you", options: ["keep the sign", "reverse the sign", "remove the sign", "square it"], correctIndex: 1, explanation: "The inequality flips." },
        { prompt: "The quadratic formula is", options: ["x = −b/2a", "x = (−b ± √(b² − 4ac))/2a", "x = b² − 4ac", "x = ac/b"], correctIndex: 1, explanation: "Solves ax² + bx + c = 0." },
        { prompt: "In the quadratic formula, the discriminant is", options: ["2a", "b² − 4ac", "−b", "√a"], correctIndex: 1, explanation: "b² − 4ac under the root." },
        { prompt: "Solve x² − 9 = 0.", options: ["x = 3 only", "x = ±3", "x = 9", "x = 0"], correctIndex: 1, explanation: "(x−3)(x+3)=0." },
        { prompt: "Solve 2x + 3 = 11.", options: ["x = 4", "x = 7", "x = 5", "x = 8"], correctIndex: 0, explanation: "2x = 8, x = 4." },
        { prompt: "Simultaneous equations are solved by all EXCEPT", options: ["elimination", "substitution", "graphs", "differentiation"], correctIndex: 3, explanation: "Differentiation is calculus, not for this." },
        { prompt: "In linear programming the best value occurs at a", options: ["centre point", "vertex of the feasible region", "random point", "curve"], correctIndex: 1, explanation: "Optimum lies at a corner." },
        { prompt: "The feasible region is where", options: ["all constraints are satisfied", "no constraints hold", "the objective is zero", "x = 0"], correctIndex: 0, explanation: "It satisfies every inequality." },
        { prompt: "Factor by grouping: ax + ay + bx + by =", options: ["(a + b)(x + y)", "ab(x + y)", "(a + x)(b + y)", "(ax + by)"], correctIndex: 0, explanation: "Group and take common factors." },
        { prompt: "Simplify (x²)/(x).", options: ["x", "x²", "1", "x³"], correctIndex: 0, explanation: "x²⁻¹ = x." },
        { prompt: "The objective function in linear programming is the quantity to", options: ["ignore", "maximise or minimise", "set to zero", "factorise"], correctIndex: 1, explanation: "It is optimised." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Factorise completely: (a) x² − 16 and (b) 2x² + 6x.", answerKey: "(a) Difference of squares: (x − 4)(x + 4). (b) Common factor 2x: 2x(x + 3). Award 3 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Solve x² + 2x − 15 = 0 by factorisation.", answerKey: "Two numbers multiplying to −15 and adding to 2 are +5 and −3: (x + 5)(x − 3) = 0, so x = −5 or x = 3. Award 3 marks for the factors, 3 for both solutions.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "The discriminant of 2x² + 3x + 1 = 0 is", options: ["1", "17", "−1", "9"], correctIndex: 0, answerKey: "b² − 4ac = 9 − 8 = 1. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Solve the simultaneous equations x + y = 7 and x − y = 1.", answerKey: "Add: 2x = 8, so x = 4; then y = 7 − 4 = 3. Award 3 marks for x = 4, 3 for y = 3.", marks: 6 },
        { type: "ESSAY", prompt: "State the difference-of-two-squares and quadratic-formula results, then solve x² − 6x + 8 = 0 by (a) factorisation and (b) the quadratic formula, showing both give the same answer.", answerKey: "Difference of two squares: a² − b² = (a + b)(a − b). Quadratic formula: x = (−b ± √(b² − 4ac))/2a. (a) x² − 6x + 8 = (x − 2)(x − 4) = 0, so x = 2 or 4. (b) a = 1, b = −6, c = 8: discriminant = 36 − 32 = 4; x = (6 ± 2)/2 = 4 or 2. Both give x = 2 or 4. Award 2 marks for the two results, 4 for the factorisation, 4 for the formula method.", marks: 10 },
      ],
    },
  ],
};
