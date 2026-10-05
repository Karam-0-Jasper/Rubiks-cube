import type { PeriodContent } from "@/content/types";

// Grade 12, Semester One, Period I of the MoE Mathematics syllabus. The period
// has three units — Sequence and Series (CONTENTS 1–6), Bearings (CONTENTS 1–2)
// and Constructions (CONTENTS 1–5) — and each CONTENTS item is one topic below.
// Notes are written from Siyavula, LibreTexts, CK-12 and GeeksforGeeks pages.
export const mathematicsG12P1: PeriodContent = {
  grade: 12,
  number: 1,
  title: "Sequence and Series, Bearings and Constructions",
  summary:
    "Period I of the MoE Grade 12 Mathematics syllabus. Unit I develops arithmetic and geometric sequences, their general terms and the sums of the corresponding series; Unit II interprets bearings as directions and solves distance–bearing problems with trigonometry; Unit III covers compass-and-straightedge constructions of lines, angles, triangles and quadrilaterals, and the idea of a locus with the special loci.",
  topics: [
    // source: Siyavula — Everything Maths Grade 12, 1.2 Arithmetic sequences (https://www.siyavula.com/read/za/mathematics/grade-12/sequences-and-series/01-sequences-and-series-01)
    {
      slug: "arithmetic-sequences",
      title: "Definition of Arithmetic Sequence (Progression)",
      objective:
        "By the end of the topic, learners should be able to define an arithmetic sequence, find its common difference, test whether a given sequence is arithmetic, and find the arithmetic mean of two numbers.",
      estimatedMinutes: 45,
      notes: `Many number patterns are produced by repeating one simple step. If the step is "add the same amount each time", the pattern is called an arithmetic sequence. It is the simplest kind of sequence, and it is the foundation for the formulae and series studied in the rest of this unit.

## Sequences and terms

A **sequence** is an ordered list of numbers. Each number in the list is called a **term**, and the order matters: the first term is written T₁, the second T₂, the third T₃, and the term in position n is written Tₙ. Tₙ is called the **general term** because it stands for any term of the sequence.

Terms are usually separated by semicolons (or commas), and three dots show that the pattern continues: 3; 7; 11; 15; …

## The arithmetic sequence

**Arithmetic sequence** — a sequence in which every term after the first is found by adding a constant value (positive or negative) to the previous term. It is also called an **arithmetic progression (AP)**, or a **linear sequence**.

**Common difference (d)** — the constant value that is added to each term to obtain the next one.

Because the same amount is added every time, the difference between any term and the term before it is always d:

d = T₂ − T₁ = T₃ − T₂ = … = Tₙ − Tₙ₋₁

The first term of the sequence is usually called a. Once a and d are known, the whole sequence is fixed: the terms are a; a + d; a + 2d; a + 3d; …

## Testing whether a sequence is arithmetic

To decide whether a sequence is arithmetic, subtract each term from the term that follows it. If every one of these differences is the same, the sequence is arithmetic and that difference is d. If even one difference is different, the sequence is not arithmetic.

| Sequence | Consecutive differences | Arithmetic? | d |
| --- | --- | --- | --- |
| 3; 7; 11; 15; … | 4, 4, 4 | Yes | 4 |
| 20; 14; 8; 2; … | −6, −6, −6 | Yes | −6 |
| −15; −11; −7; … | 4, 4 | Yes | 4 |
| 1; 4; 9; 16; … | 3, 5, 7 | No | — |
| 2; 4; 8; 16; … | 2, 4, 8 | No | — |

Two points deserve care. First, the difference is always taken as *later term minus earlier term*; reversing the order gives the wrong sign. Second, it is not enough to check only the first two terms — a sequence such as 2; 4; 8 has T₂ − T₁ = 2 but T₃ − T₂ = 4.

## Increasing and decreasing sequences

The sign of d tells us how the sequence behaves. When d is positive each term is larger than the one before, and the sequence increases. When d is negative each term is smaller, and the sequence decreases. In the table above, 3; 7; 11; … increases (d = 4) while 20; 14; 8; … decreases (d = −6).

## The graph of an arithmetic sequence

If the terms of an arithmetic sequence are plotted against their positions (n on the horizontal axis, Tₙ on the vertical axis), the points lie on a straight line. This is why arithmetic sequences are also called linear sequences. The common difference d is the **gradient** of that line: moving one position to the right always raises (or lowers) the term by d.

\`\`\`svg Terms of 3; 7; 11; 15; 19 plotted against their positions lie on a straight line of gradient 4
<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five points of an arithmetic sequence lying on a straight line">
  <line x1="30" y1="150" x2="230" y2="150" stroke="#334155" stroke-width="1.5"/>
  <line x1="30" y1="150" x2="30" y2="10" stroke="#334155" stroke-width="1.5"/>
  <line x1="50" y1="138" x2="210" y2="26" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/>
  <circle cx="50" cy="138" r="4" fill="#2563eb"/>
  <circle cx="90" cy="110" r="4" fill="#2563eb"/>
  <circle cx="130" cy="82" r="4" fill="#2563eb"/>
  <circle cx="170" cy="54" r="4" fill="#2563eb"/>
  <circle cx="210" cy="26" r="4" fill="#2563eb"/>
  <text x="46" y="164" font-size="10" fill="#334155">1</text>
  <text x="86" y="164" font-size="10" fill="#334155">2</text>
  <text x="126" y="164" font-size="10" fill="#334155">3</text>
  <text x="166" y="164" font-size="10" fill="#334155">4</text>
  <text x="206" y="164" font-size="10" fill="#334155">5</text>
  <text x="218" y="146" font-size="10" fill="#334155">n</text>
  <text x="8" y="18" font-size="10" fill="#334155">Tₙ</text>
  <text x="58" y="134" font-size="9" fill="#2563eb">3</text>
  <text x="98" y="106" font-size="9" fill="#2563eb">7</text>
  <text x="138" y="78" font-size="9" fill="#2563eb">11</text>
  <text x="178" y="50" font-size="9" fill="#2563eb">15</text>
  <text x="186" y="22" font-size="9" fill="#2563eb">19</text>
</svg>
\`\`\`

## The arithmetic mean

**Arithmetic mean** — the number half-way between two numbers; in other words, their average. The arithmetic mean of a and b is (a + b) ÷ 2.

If m is the arithmetic mean of a and b, then a; m; b is an arithmetic sequence, because m − a = b − m. The same idea gives a useful test for any three consecutive terms: T₁, T₂ and T₃ form an arithmetic sequence exactly when T₂ − T₁ = T₃ − T₂, which can be rearranged as 2T₂ = T₁ + T₃.

**Example.** The arithmetic mean of 7 and 19 is (7 + 19) ÷ 2 = 13, and 7; 13; 19 is arithmetic with d = 6.

## Summary

- A sequence is an ordered list of terms T₁, T₂, T₃, …; Tₙ is the general term.
- An arithmetic sequence (arithmetic progression) adds the same constant, the common difference d, to each term.
- d = Tₙ − Tₙ₋₁; test a sequence by checking that all consecutive differences are equal.
- d > 0 gives an increasing sequence; d < 0 gives a decreasing one.
- Plotted against position, the terms lie on a straight line whose gradient is d.
- The arithmetic mean of a and b is (a + b) ÷ 2; three terms are arithmetic when 2T₂ = T₁ + T₃.`,
      workedExample: `**Problem.** (a) Show that −15; −11; −7; … is an arithmetic sequence, state its common difference and write down the next two terms. (b) The expressions 2x + 1, 3x + 2 and 5x − 1 are three consecutive terms of an arithmetic sequence. Find x, the three terms and the common difference.

**Solution to (a)**

*Step 1 — Find the consecutive differences.* T₂ − T₁ = −11 − (−15) = 4 and T₃ − T₂ = −7 − (−11) = 4.

*Step 2 — Draw the conclusion.* The differences are equal, so the sequence is arithmetic with d = 4.

*Step 3 — Continue the pattern.* T₄ = −7 + 4 = −3 and T₅ = −3 + 4 = 1.

**Solution to (b)**

*Step 1 — Use the condition for three consecutive terms.* In an arithmetic sequence the difference between consecutive terms is constant, so T₂ − T₁ = T₃ − T₂.

*Step 2 — Substitute the expressions.* (3x + 2) − (2x + 1) = (5x − 1) − (3x + 2), which simplifies to x + 1 = 2x − 3.

*Step 3 — Solve.* x = 4.

*Step 4 — Find the terms.* 2(4) + 1 = 9, 3(4) + 2 = 14 and 5(4) − 1 = 19.

*Step 5 — Check.* 14 − 9 = 5 and 19 − 14 = 5, so the terms are arithmetic.

**Answer.** (a) d = 4; the next two terms are −3 and 1. (b) x = 4; the terms are 9; 14; 19 and the common difference is 5.`,
      quiz: [
        { prompt: "Which statement defines an arithmetic sequence?", options: ["Each term is the previous term multiplied by a constant", "Each term is the previous term plus a constant", "Each term is the square of its position", "The terms add up to a constant"], correctIndex: 1, explanation: "An arithmetic sequence is formed by adding a constant value, the common difference, to each term." },
        { prompt: "What is the common difference of 12; 9; 6; 3; …?", options: ["3", "−3", "−9", "12"], correctIndex: 1, explanation: "d = T₂ − T₁ = 9 − 12 = −3. The sequence decreases, so d is negative." },
        { prompt: "Which of these sequences is arithmetic?", options: ["1; 2; 4; 8; …", "1; 4; 9; 16; …", "−2; 1; 4; 7; …", "1; 1; 2; 3; 5; …"], correctIndex: 2, explanation: "−2; 1; 4; 7 has consecutive differences 3, 3, 3. The others do not have a constant difference." },
        { prompt: "A learner says 2; 4; 8; … is arithmetic because 4 − 2 = 2. What is wrong with this reasoning?", options: ["Nothing; the sequence is arithmetic", "The difference must be taken as 2 − 4", "Only one difference was checked; 8 − 4 = 4, which is not 2", "Arithmetic sequences cannot start with 2"], correctIndex: 2, explanation: "Every consecutive difference must be equal. 4 − 2 = 2 but 8 − 4 = 4, so the sequence is not arithmetic." },
        { prompt: "The symbol Tₙ stands for", options: ["the total of n terms", "the term in position n", "the common difference", "the number of terms"], correctIndex: 1, explanation: "Tₙ is the general term — the term in position n." },
        { prompt: "An arithmetic sequence has first term 5 and common difference 7. What is T₃?", options: ["12", "19", "35", "21"], correctIndex: 1, explanation: "T₂ = 5 + 7 = 12 and T₃ = 12 + 7 = 19." },
        { prompt: "If d is negative, an arithmetic sequence is", options: ["increasing", "decreasing", "constant", "alternating in sign"], correctIndex: 1, explanation: "Adding a negative number each time makes every term smaller than the one before." },
        { prompt: "When the terms of an arithmetic sequence are plotted against their positions, the points", options: ["lie on a parabola", "lie on a straight line", "lie on a circle", "show no pattern"], correctIndex: 1, explanation: "Arithmetic sequences are linear sequences; the points lie on a straight line." },
        { prompt: "On the graph of an arithmetic sequence, the gradient of the line equals", options: ["the first term", "the common difference", "the number of terms", "the last term"], correctIndex: 1, explanation: "Moving one position to the right changes the term by d, so d is the gradient." },
        { prompt: "What is the arithmetic mean of −4 and 10?", options: ["3", "7", "6", "−7"], correctIndex: 0, explanation: "(−4 + 10) ÷ 2 = 6 ÷ 2 = 3." },
        { prompt: "Find the missing term so that 8; ___; 20 is arithmetic.", options: ["12", "14", "16", "28"], correctIndex: 1, explanation: "The middle term is the arithmetic mean: (8 + 20) ÷ 2 = 14." },
        { prompt: "Three terms T₁, T₂, T₃ are consecutive terms of an arithmetic sequence when", options: ["T₂² = T₁T₃", "2T₂ = T₁ + T₃", "T₁ + T₂ = T₃", "T₂ = T₁ × T₃"], correctIndex: 1, explanation: "T₂ − T₁ = T₃ − T₂ rearranges to 2T₂ = T₁ + T₃." },
        { prompt: "The first term of an arithmetic sequence is 4 and the second is 1. What is the fourth term?", options: ["−2", "−5", "−8", "7"], correctIndex: 1, explanation: "d = 1 − 4 = −3, so T₃ = −2 and T₄ = −5." },
        { prompt: "Another name for an arithmetic sequence is", options: ["a geometric progression", "an arithmetic progression", "a quadratic sequence", "a harmonic series"], correctIndex: 1, explanation: "Arithmetic sequences are also called arithmetic progressions (AP) or linear sequences." },
        { prompt: "x; 11; 17 are consecutive terms of an arithmetic sequence. What is x?", options: ["5", "6", "8", "4"], correctIndex: 0, explanation: "d = 17 − 11 = 6, so x = 11 − 6 = 5." },
        { prompt: "Which sequence has common difference 0.5?", options: ["0.5; 1; 2; …", "3; 3.5; 4; 4.5; …", "1; 0.5; 0; …", "2; 2.25; 2.5; …"], correctIndex: 1, explanation: "3.5 − 3 = 0.5, 4 − 3.5 = 0.5 and 4.5 − 4 = 0.5." },
        { prompt: "For the sequence a; a + d; a + 2d; …, what is the fifth term?", options: ["a + 5d", "a + 4d", "5a + d", "5ad"], correctIndex: 1, explanation: "The term in position n has (n − 1) lots of d added, so T₅ = a + 4d." },
        { prompt: "k + 1; 2k; 2k + 3 are consecutive terms of an arithmetic sequence. What is k?", options: ["2", "4", "−2", "1"], correctIndex: 1, explanation: "2(2k) = (k + 1) + (2k + 3) gives 4k = 3k + 4, so k = 4. The terms are 5; 8; 11." },
        { prompt: "Which value of d produces terms that get smaller by 2.5 each time?", options: ["2.5", "−2.5", "0.4", "−0.4"], correctIndex: 1, explanation: "Decreasing by 2.5 each time means adding −2.5." },
        { prompt: "How is the common difference correctly calculated?", options: ["Earlier term minus later term", "Later term minus earlier term", "Later term divided by earlier term", "Sum of two consecutive terms"], correctIndex: 1, explanation: "d = Tₙ − Tₙ₋₁, a later term minus the term before it." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Which of the following is NOT an arithmetic sequence?", options: ["10; 7; 4; 1; …", "−3; −1; 1; 3; …", "1; 3; 6; 10; …", "0.2; 0.5; 0.8; 1.1; …"], correctIndex: 2, answerKey: "C. The differences of 1; 3; 6; 10 are 2, 3, 4, which are not constant. A has d = −3, B has d = 2 and D has d = 0.3.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Show that 4; 9; 14; 19; … is arithmetic, state d, and write down the next three terms.", answerKey: "Differences 9 − 4 = 5, 14 − 9 = 5, 19 − 14 = 5 are equal (1 mark), so arithmetic with d = 5 (1 mark). Next terms 24; 29; 34 (2 marks).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Find the arithmetic mean of 2.5 and 11.5 and write down the resulting three-term arithmetic sequence.", answerKey: "(2.5 + 11.5) ÷ 2 = 14 ÷ 2 = 7 (2 marks). Sequence 2.5; 7; 11.5 with d = 4.5 (2 marks).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "The numbers 3p − 2, 2p + 4 and 4p are consecutive terms of an arithmetic sequence. Find p and the three terms.", answerKey: "Use 2T₂ = T₁ + T₃: 2(2p + 4) = (3p − 2) + 4p (2 marks), so 4p + 8 = 7p − 2, giving 3p = 10 and p = 10/3 (2 marks). Terms: 3(10/3) − 2 = 8, 2(10/3) + 4 = 32/3, 4(10/3) = 40/3; check: 32/3 − 8 = 8/3 and 40/3 − 32/3 = 8/3 (2 marks).", marks: 6 },
        { type: "ESSAY", prompt: "Explain what is meant by an arithmetic sequence. Describe how to test whether a given sequence is arithmetic, how the sign of the common difference affects the sequence, and what the graph of an arithmetic sequence looks like. Use your own examples.", answerKey: "Definition: each term after the first is found by adding a constant d to the previous term (2). Test: compute all consecutive differences Tₙ − Tₙ₋₁; arithmetic only if all are equal, with an example and a non-example (3). d > 0 increasing, d < 0 decreasing, with examples (2). Graph of Tₙ against n is a set of points on a straight line with gradient d (2). Clear presentation (1).", marks: 10 },
      ],
    },
    // source: Siyavula — Everything Maths Grade 12, 1.2 Arithmetic sequences: general formula (https://www.siyavula.com/read/za/mathematics/grade-12/sequences-and-series/01-sequences-and-series-01)
    {
      slug: "general-term-of-an-arithmetic-sequence",
      title: "Formula for the Arithmetic Sequence and Its Use",
      objective:
        "By the end of the topic, learners should be able to state the general term Tₙ = a + (n − 1)d of an arithmetic sequence and use it to find terms, the number of terms, and the first term and common difference.",
      estimatedMinutes: 50,
      notes: `Writing out terms one at a time is practical for the first few terms of a sequence, but not for the 50th or the 500th. A formula for the general term lets any term be found directly from its position. For an arithmetic sequence this formula follows from the definition itself.

## Deriving the general term

Let the first term be a and the common difference d. Each new term is the previous one with d added, so:

| Position n | Term Tₙ | Number of d's added |
| --- | --- | --- |
| 1 | a | 0 |
| 2 | a + d | 1 |
| 3 | a + 2d | 2 |
| 4 | a + 3d | 3 |
| n | a + (n − 1)d | n − 1 |

The number of times d has been added is always one less than the position, because the first term has no d added to it.

## The formula

**General term of an arithmetic sequence:** Tₙ = a + (n − 1)d

where Tₙ is the nth term, n is the position of the term, a is the first term and d is the common difference.

The formula can usually be simplified to the form Tₙ = dn + c. For 3; 7; 11; …, Tₙ = 3 + (n − 1)(4) = 4n − 1. In this simplified form the coefficient of n is always d, which matches the fact that the graph of the sequence is a straight line with gradient d.

## Using the formula

The formula connects four quantities: Tₙ, a, n and d. If any three are known, the fourth can be found. The common problem types are:

1. **Finding a particular term.** Substitute a, d and n. For 3; 7; 11; …, T₂₀ = 3 + 19(4) = 79.
2. **Finding the general term.** Substitute a and d only, then simplify to obtain Tₙ in terms of n.
3. **Finding the position of a term, or the number of terms.** Set Tₙ equal to the given term (often the last term) and solve for n.
4. **Finding a and d from two given terms.** Write each given term using the formula, giving two simultaneous equations in a and d.
5. **Deciding whether a number belongs to the sequence.** Set Tₙ equal to the number and solve. The number is a term only if n is a positive whole number.

## Finding a and d from two terms

**Example.** The 3rd term of an arithmetic sequence is 11 and the 7th term is 27. Find a and d.

T₃ = a + 2d = 11 … (1)

T₇ = a + 6d = 27 … (2)

Subtracting (1) from (2): 4d = 16, so d = 4. Substituting into (1): a + 8 = 11, so a = 3. The sequence is 3; 7; 11; 15; …

Notice that between T₃ and T₇ there are four steps of d, which is why the subtraction leaves 4d.

## Is a given number a term?

**Example.** Is 100 a term of 3; 7; 11; …?

The general term is Tₙ = 4n − 1. Setting 4n − 1 = 100 gives 4n = 101 and n = 25.25. Since a position must be a whole number, 100 is not a term of this sequence. (T₂₅ = 99 and T₂₆ = 103.)

## Common errors

- **Using n instead of n − 1.** T₁₀ = a + 9d, not a + 10d.
- **Getting the sign of d wrong** in a decreasing sequence, for example writing d = 3 for 12; 9; 6; …
- **Accepting a fractional or negative n** as the position of a term.
- **Forgetting the brackets**, writing a + n − 1d instead of a + (n − 1)d.

## Summary

- Tₙ = a + (n − 1)d gives any term of an arithmetic sequence from its position.
- The formula simplifies to Tₙ = dn + c, a linear expression whose coefficient of n is d.
- Given any three of Tₙ, a, n and d, the fourth can be found.
- Two given terms give two simultaneous equations for a and d.
- A number belongs to the sequence only if solving Tₙ = number gives a positive whole number n.`,
      workedExample: `**Problem.** The sequence −15; −11; −7; … ; 173 is arithmetic. (a) Find a formula for the general term. (b) Find the number of terms in the sequence. (c) Find the 30th term.

**Solution**

*Step 1 — Confirm the sequence is arithmetic and find d.* T₂ − T₁ = −11 − (−15) = 4 and T₃ − T₂ = −7 − (−11) = 4. The differences are equal, so d = 4, and a = −15.

*Step 2 — Write down the general term.* Tₙ = a + (n − 1)d = −15 + (n − 1)(4) = −15 + 4n − 4. Therefore Tₙ = 4n − 19.

*Step 3 — Find the number of terms.* The last term is 173, so set Tₙ = 173: 4n − 19 = 173, which gives 4n = 192 and n = 48. Since n is a whole number, 173 is indeed the 48th term.

*Step 4 — Find the 30th term.* T₃₀ = 4(30) − 19 = 120 − 19 = 101.

*Step 5 — Check.* T₁ = 4(1) − 19 = −15, which agrees with the first term.

**Answer.** (a) Tₙ = 4n − 19 (b) There are 48 terms. (c) T₃₀ = 101.`,
      quiz: [
        { prompt: "The general term of an arithmetic sequence is", options: ["Tₙ = a + nd", "Tₙ = a + (n − 1)d", "Tₙ = ar^(n − 1)", "Tₙ = n(a + d)"], correctIndex: 1, explanation: "The first term has no d added, so the nth term has (n − 1) d's added: Tₙ = a + (n − 1)d." },
        { prompt: "Why is (n − 1) rather than n used in the formula?", options: ["Because the last term is not counted", "Because the first term has no common difference added to it", "Because d is always negative", "Because n starts at 0"], correctIndex: 1, explanation: "T₁ = a has zero d's, T₂ has one, so Tₙ has n − 1." },
        { prompt: "Find T₁₅ for 2; 5; 8; …", options: ["44", "47", "45", "42"], correctIndex: 0, explanation: "a = 2, d = 3: T₁₅ = 2 + 14(3) = 44." },
        { prompt: "Simplify the general term of 7; 12; 17; …", options: ["Tₙ = 5n + 2", "Tₙ = 7n + 5", "Tₙ = 5n + 7", "Tₙ = 12n − 5"], correctIndex: 0, explanation: "Tₙ = 7 + (n − 1)(5) = 5n + 2. Check: T₁ = 7." },
        { prompt: "Find T₂₀ for 50; 46; 42; …", options: ["−26", "−30", "126", "−34"], correctIndex: 0, explanation: "a = 50, d = −4: T₂₀ = 50 + 19(−4) = 50 − 76 = −26." },
        { prompt: "In the simplified form Tₙ = 6n − 4, what is the common difference?", options: ["−4", "2", "6", "10"], correctIndex: 2, explanation: "The coefficient of n is the common difference." },
        { prompt: "In the simplified form Tₙ = 6n − 4, what is the first term?", options: ["6", "−4", "2", "10"], correctIndex: 2, explanation: "T₁ = 6(1) − 4 = 2." },
        { prompt: "How many terms are in 5; 8; 11; …; 62?", options: ["19", "20", "21", "57"], correctIndex: 1, explanation: "Tₙ = 3n + 2 = 62 gives 3n = 60, n = 20." },
        { prompt: "T₄ = 19 and T₉ = 44 in an arithmetic sequence. What is d?", options: ["5", "25", "4", "6"], correctIndex: 0, explanation: "There are 5 steps from T₄ to T₉: 5d = 44 − 19 = 25, so d = 5." },
        { prompt: "T₄ = 19 and T₉ = 44. What is the first term?", options: ["4", "14", "−1", "9"], correctIndex: 0, explanation: "a + 3d = 19 with d = 5 gives a = 4." },
        { prompt: "Is 75 a term of 4; 7; 10; …?", options: ["Yes, it is T₂₄", "Yes, it is T₂₅", "No, because n would not be a whole number", "No, because 75 is odd"], correctIndex: 2, explanation: "Tₙ = 3n + 1 = 75 gives n = 74/3, not a whole number." },
        { prompt: "Which term of 4; 7; 10; … equals 100?", options: ["32nd", "33rd", "34th", "96th"], correctIndex: 1, explanation: "3n + 1 = 100 gives n = 33." },
        { prompt: "A learner writes T₁₀ = a + 10d. What has gone wrong?", options: ["Nothing", "It should be a + 9d", "It should be 10a + d", "It should be a × 10d"], correctIndex: 1, explanation: "The 10th term has nine common differences added to the first term." },
        { prompt: "The 1st term of an arithmetic sequence is 8 and the 11th term is 38. Find d.", options: ["3", "30", "3.8", "2.7"], correctIndex: 0, explanation: "a + 10d = 38 gives 10d = 30, so d = 3." },
        { prompt: "Which formula gives the sequence −1; −4; −7; …?", options: ["Tₙ = −3n + 2", "Tₙ = 3n − 4", "Tₙ = −3n − 1", "Tₙ = −n − 3"], correctIndex: 0, explanation: "Tₙ = −1 + (n − 1)(−3) = −3n + 2. Check: T₁ = −1." },
        { prompt: "Rows of seats in a hall have 20, 23, 26, … seats. How many seats are in row 12?", options: ["53", "56", "50", "59"], correctIndex: 0, explanation: "T₁₂ = 20 + 11(3) = 53." },
        { prompt: "Which four quantities does Tₙ = a + (n − 1)d connect?", options: ["Tₙ, a, n and d", "Sₙ, a, l and n", "a, r, n and Tₙ", "d, r, a and l"], correctIndex: 0, explanation: "Given any three of Tₙ, a, n and d, the fourth can be found." },
        { prompt: "Solving Tₙ = k gives n = −3 for a sequence. What can you conclude?", options: ["k is the 3rd term", "k is not a term of the sequence", "d must be −3", "The sequence has 3 terms"], correctIndex: 1, explanation: "Positions are positive whole numbers, so a negative n means k is not a term." },
        { prompt: "An arithmetic sequence has a = 6 and T₅ = 26. What is T₁₀?", options: ["46", "51", "56", "60"], correctIndex: 1, explanation: "6 + 4d = 26 gives d = 5, so T₁₀ = 6 + 9(5) = 51." },
        { prompt: "Which is the first term of 9; 5; 1; … that is less than −30?", options: ["10th", "11th", "12th", "9th"], correctIndex: 1, explanation: "Tₙ = 13 − 4n. T₁₀ = −27 is not below −30, but T₁₁ = 13 − 44 = −31 is." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "The general term of 11; 8; 5; … is", options: ["Tₙ = 3n + 8", "Tₙ = −3n + 14", "Tₙ = −3n + 11", "Tₙ = 11n − 3"], correctIndex: 1, answerKey: "B. a = 11, d = −3: Tₙ = 11 + (n − 1)(−3) = −3n + 14. Check T₁ = 11.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Find the number of terms in the arithmetic sequence 13; 19; 25; …; 205.", answerKey: "d = 6, a = 13; Tₙ = 6n + 7 (2 marks). 6n + 7 = 205 gives 6n = 198, n = 33 (2 marks).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "The 5th term of an arithmetic sequence is 23 and the 12th term is 58. Find the first term, the common difference and the 20th term.", answerKey: "a + 4d = 23 and a + 11d = 58 (2 marks). Subtract: 7d = 35, d = 5; a = 3 (2 marks). T₂₀ = 3 + 19(5) = 98 (2 marks).", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Determine whether 150 is a term of the sequence 2; 9; 16; … Show your working.", answerKey: "Tₙ = 7n − 5 (2 marks). 7n − 5 = 150 gives 7n = 155, n = 22.14… (1 mark). n is not a whole number, so 150 is not a term (1 mark).", marks: 4 },
        { type: "ESSAY", prompt: "Derive the formula Tₙ = a + (n − 1)d for the general term of an arithmetic sequence. Then explain, with one example each, how the formula is used to (i) find the number of terms in a finite sequence and (ii) find a and d when two terms are given.", answerKey: "Derivation using T₁ = a, T₂ = a + d, T₃ = a + 2d … showing the pattern of n − 1 differences (4). (i) Correct example setting Tₙ equal to the last term and solving for a whole-number n (3). (ii) Correct example forming and solving two simultaneous equations (3).", marks: 10 },
      ],
    },
    // source: Siyavula — Everything Maths Grade 12, 1.3 Geometric sequences (https://www.siyavula.com/read/za/mathematics/grade-12/sequences-and-series/01-sequences-and-series-02)
    {
      slug: "geometric-sequences",
      title: "Definition of Geometric Sequence (Progression)",
      objective:
        "By the end of the topic, learners should be able to define a geometric sequence, find its common ratio, test whether a sequence is geometric, describe how the ratio affects the terms, and find the geometric mean of two numbers.",
      estimatedMinutes: 45,
      notes: `An arithmetic sequence grows by adding the same amount at every step. A second, equally important kind of sequence grows by multiplying by the same amount at every step. Such sequences describe doubling populations, the spread of an infection, compound growth and repeated halving, and they behave very differently from arithmetic sequences.

## The geometric sequence

**Geometric sequence** — a sequence of numbers in which each new term (except the first) is calculated by multiplying the previous term by a constant value. It is also called a **geometric progression (GP)**.

**Common ratio (r)** — the constant value by which each term is multiplied to give the next term. It is also called the constant ratio.

Because each term is the one before it multiplied by r, dividing any term by the term before it always gives r:

r = T₂ ÷ T₁ = T₃ ÷ T₂ = … = Tₙ ÷ Tₙ₋₁

With first term a, the terms are a; ar; ar²; ar³; …

**Example.** In an epidemic where the number of newly infected people doubles each day, the daily numbers might be 2; 4; 8; 16; 32; … Here a = 2 and r = 2.

## Testing whether a sequence is geometric

To test a sequence, divide each term by the term before it. If the ratio between every pair of consecutive terms is the same, the sequence is geometric and that ratio is r. If the ratios differ, it is not geometric.

| Sequence | Consecutive ratios | Geometric? | r |
| --- | --- | --- | --- |
| 3; 6; 12; 24; … | 2, 2, 2 | Yes | 2 |
| 81; 27; 9; 3; … | 1/3, 1/3, 1/3 | Yes | 1/3 |
| 5; −10; 20; −40; … | −2, −2, −2 | Yes | −2 |
| 2; 4; 6; 8; … | 2, 3/2, 4/3 | No | — |
| 1; 4; 9; 16; … | 4, 9/4, 16/9 | No | — |

The ratio is always taken as *later term ÷ earlier term*. Taking the division the other way round gives 1/r instead of r.

## How the common ratio shapes the sequence

The value of r determines how the terms behave. For a sequence with a positive first term:

| Value of r | Behaviour of the terms | Example |
| --- | --- | --- |
| r > 1 | Increase, by ever larger steps | 2; 6; 18; 54; … (r = 3) |
| 0 < r < 1 | Decrease, getting closer and closer to 0 | 64; 32; 16; 8; … (r = 1/2) |
| r < 0 | Alternate between positive and negative | 1; −3; 9; −27; … (r = −3) |

A ratio between 0 and 1 therefore produces a decreasing sequence, while a negative ratio makes the signs alternate. This is one of the clearest differences from an arithmetic sequence, whose terms change by the same amount at every step.

\`\`\`svg Terms of 1; 2; 4; 8; 16 plotted against their positions do not lie on a straight line
<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five points of a geometric sequence curving upward">
  <line x1="30" y1="150" x2="230" y2="150" stroke="#334155" stroke-width="1.5"/>
  <line x1="30" y1="150" x2="30" y2="10" stroke="#334155" stroke-width="1.5"/>
  <polyline points="50,142 90,134 130,118 170,86 210,22" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/>
  <circle cx="50" cy="142" r="4" fill="#16a34a"/>
  <circle cx="90" cy="134" r="4" fill="#16a34a"/>
  <circle cx="130" cy="118" r="4" fill="#16a34a"/>
  <circle cx="170" cy="86" r="4" fill="#16a34a"/>
  <circle cx="210" cy="22" r="4" fill="#16a34a"/>
  <text x="46" y="164" font-size="10" fill="#334155">1</text>
  <text x="86" y="164" font-size="10" fill="#334155">2</text>
  <text x="126" y="164" font-size="10" fill="#334155">3</text>
  <text x="166" y="164" font-size="10" fill="#334155">4</text>
  <text x="206" y="164" font-size="10" fill="#334155">5</text>
  <text x="218" y="146" font-size="10" fill="#334155">n</text>
  <text x="8" y="18" font-size="10" fill="#334155">Tₙ</text>
  <text x="56" y="136" font-size="9" fill="#16a34a">1</text>
  <text x="96" y="128" font-size="9" fill="#16a34a">2</text>
  <text x="136" y="112" font-size="9" fill="#16a34a">4</text>
  <text x="176" y="80" font-size="9" fill="#16a34a">8</text>
  <text x="186" y="20" font-size="9" fill="#16a34a">16</text>
</svg>
\`\`\`

## Arithmetic and geometric sequences compared

| Feature | Arithmetic sequence | Geometric sequence |
| --- | --- | --- |
| Rule for the next term | Add the common difference d | Multiply by the common ratio r |
| Constant quantity | Tₙ − Tₙ₋₁ = d | Tₙ ÷ Tₙ₋₁ = r |
| Typical terms | a; a + d; a + 2d; … | a; ar; ar²; … |
| Graph of Tₙ against n | Points on a straight line | Points on a curve |

## The geometric mean

**Geometric mean** — the number x that can be placed between two numbers a and b so that a; x; b is a geometric sequence.

For a; x; b to be geometric, the ratios must be equal: x ÷ a = b ÷ x. Multiplying out gives x² = ab, so x = ±√(ab). There are two possible geometric means, one positive and one negative.

**Example.** The geometric mean of 5 and 20 is x = ±√(5 × 20) = ±√100 = ±10. Both 5; 10; 20 (r = 2) and 5; −10; 20 (r = −2) are geometric sequences.

The same reasoning gives a test for any three consecutive terms: T₁, T₂, T₃ are consecutive terms of a geometric sequence when T₂ ÷ T₁ = T₃ ÷ T₂, that is, when T₂² = T₁ × T₃.

## Summary

- A geometric sequence (geometric progression) multiplies each term by the same constant, the common ratio r.
- r = Tₙ ÷ Tₙ₋₁; test a sequence by checking that all consecutive ratios are equal.
- For a positive first term: r > 1 gives increasing terms, 0 < r < 1 gives terms decreasing towards 0, and r < 0 gives terms of alternating sign.
- Arithmetic sequences add a constant; geometric sequences multiply by a constant.
- The geometric mean of a and b is ±√(ab); three terms are geometric when T₂² = T₁T₃.`,
      workedExample: `**Problem.** (a) Show that 5; −10; 20; −40; … is a geometric sequence, state the common ratio, and write down the next two terms. (b) The numbers x, x + 3 and x + 9 are consecutive terms of a geometric sequence. Find x, the three terms and the common ratio.

**Solution to (a)**

*Step 1 — Find the consecutive ratios.* T₂ ÷ T₁ = −10 ÷ 5 = −2, T₃ ÷ T₂ = 20 ÷ (−10) = −2 and T₄ ÷ T₃ = −40 ÷ 20 = −2.

*Step 2 — Draw the conclusion.* All the ratios are equal, so the sequence is geometric with r = −2. The negative ratio explains why the signs alternate.

*Step 3 — Continue the pattern.* T₅ = −40 × (−2) = 80 and T₆ = 80 × (−2) = −160.

**Solution to (b)**

*Step 1 — Use the condition for three consecutive terms.* In a geometric sequence the consecutive ratios are equal, so (x + 3) ÷ x = (x + 9) ÷ (x + 3), which gives (x + 3)² = x(x + 9).

*Step 2 — Expand and solve.* x² + 6x + 9 = x² + 9x. The x² terms cancel, leaving 9 = 3x, so x = 3.

*Step 3 — Find the terms.* x = 3, x + 3 = 6 and x + 9 = 12.

*Step 4 — Check.* 6 ÷ 3 = 2 and 12 ÷ 6 = 2, so the terms are geometric with r = 2.

**Answer.** (a) r = −2; the next two terms are 80 and −160. (b) x = 3; the terms are 3; 6; 12 with common ratio 2.`,
      quiz: [
        { prompt: "Which statement defines a geometric sequence?", options: ["Each term is the previous term plus a constant", "Each term is the previous term multiplied by a constant", "The differences between terms increase by a constant", "Each term is the sum of the two before it"], correctIndex: 1, explanation: "A geometric sequence multiplies each term by a constant ratio r." },
        { prompt: "What is the common ratio of 4; 12; 36; 108; …?", options: ["8", "3", "1/3", "4"], correctIndex: 1, explanation: "12 ÷ 4 = 3, 36 ÷ 12 = 3, 108 ÷ 36 = 3." },
        { prompt: "What is the common ratio of 48; 24; 12; 6; …?", options: ["2", "−24", "1/2", "−1/2"], correctIndex: 2, explanation: "24 ÷ 48 = 1/2. Dividing the other way would wrongly give 2." },
        { prompt: "Which sequence is geometric?", options: ["2; 5; 8; 11; …", "1; 3; 9; 27; …", "1; 2; 3; 5; …", "10; 8; 6; 4; …"], correctIndex: 1, explanation: "1; 3; 9; 27 has constant ratio 3. The first and last are arithmetic." },
        { prompt: "A geometric sequence has a = 7 and r = 2. What is T₃?", options: ["11", "14", "28", "56"], correctIndex: 2, explanation: "T₂ = 14 and T₃ = 28." },
        { prompt: "The terms of a geometric sequence alternate between positive and negative. What can you say about r?", options: ["r > 1", "0 < r < 1", "r < 0", "r = 1"], correctIndex: 2, explanation: "Multiplying by a negative number changes the sign each time." },
        { prompt: "A geometric sequence with a positive first term and 0 < r < 1", options: ["increases without limit", "decreases, getting closer to 0", "alternates in sign", "is constant"], correctIndex: 1, explanation: "Multiplying by a fraction between 0 and 1 makes each term smaller, approaching 0." },
        { prompt: "What is the next term of 2; −6; 18; …?", options: ["−54", "54", "−36", "30"], correctIndex: 0, explanation: "r = −3, so the next term is 18 × (−3) = −54." },
        { prompt: "The geometric mean of 4 and 9 is", options: ["6.5", "±6", "±36", "13"], correctIndex: 1, explanation: "x = ±√(4 × 9) = ±√36 = ±6." },
        { prompt: "Why are there two possible geometric means between two positive numbers?", options: ["Because x² = ab has a positive and a negative solution", "Because geometric sequences have two ratios", "Because the arithmetic mean is also allowed", "There is only one"], correctIndex: 0, explanation: "x² = ab gives x = ±√(ab); both make a valid geometric sequence." },
        { prompt: "Three numbers T₁, T₂, T₃ are consecutive terms of a geometric sequence when", options: ["2T₂ = T₁ + T₃", "T₂² = T₁ × T₃", "T₃ = T₁ + T₂", "T₂ = T₁ − T₃"], correctIndex: 1, explanation: "Equal ratios T₂/T₁ = T₃/T₂ give T₂² = T₁T₃." },
        { prompt: "Which feature distinguishes 3; 6; 12; 24 from 3; 6; 9; 12?", options: ["The first is arithmetic and the second geometric", "The first has a constant ratio; the second has a constant difference", "Both are geometric", "Both are arithmetic"], correctIndex: 1, explanation: "3; 6; 12; 24 has r = 2; 3; 6; 9; 12 has d = 3." },
        { prompt: "Find the missing term: 2; ___; 50 (positive geometric sequence)", options: ["26", "10", "25", "48"], correctIndex: 1, explanation: "x = √(2 × 50) = √100 = 10, with r = 5." },
        { prompt: "A culture of bacteria doubles every hour. Starting with 500 bacteria, the counts form", options: ["an arithmetic sequence with d = 2", "a geometric sequence with r = 2", "an arithmetic sequence with d = 500", "a geometric sequence with r = 500"], correctIndex: 1, explanation: "Doubling means multiplying by 2 each hour: 500; 1000; 2000; …" },
        { prompt: "What is the common ratio of 0.3; 0.03; 0.003; …?", options: ["10", "0.1", "−0.27", "0.3"], correctIndex: 1, explanation: "0.03 ÷ 0.3 = 0.1." },
        { prompt: "Plotted against their positions, the terms of 1; 2; 4; 8; 16 lie", options: ["on a straight line", "on a curve that rises ever more steeply", "on a horizontal line", "on a descending straight line"], correctIndex: 1, explanation: "The increases 1, 2, 4, 8 are not constant, so the points curve upward rather than lying on a line." },
        { prompt: "x; 12; 48 are consecutive terms of a geometric sequence. What is x?", options: ["3", "4", "−24", "6"], correctIndex: 0, explanation: "r = 48 ÷ 12 = 4, so x = 12 ÷ 4 = 3." },
        { prompt: "A geometric sequence has terms a; ar; ar²; … What is the fourth term?", options: ["ar⁴", "ar³", "4ar", "a + 3r"], correctIndex: 1, explanation: "The power of r is one less than the position: T₄ = ar³." },
        { prompt: "The ratio T₂ ÷ T₁ = 3 but T₃ ÷ T₂ = 4. The sequence is", options: ["geometric with r = 3", "geometric with r = 4", "not geometric", "geometric with r = 3.5"], correctIndex: 2, explanation: "All consecutive ratios must be equal for the sequence to be geometric." },
        { prompt: "Another name for a geometric sequence is", options: ["an arithmetic progression", "a geometric progression", "a linear sequence", "a quadratic sequence"], correctIndex: 1, explanation: "A geometric sequence is also called a geometric progression (GP)." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Which of the following sequences is geometric?", options: ["1; 4; 7; 10; …", "1; 4; 9; 16; …", "1; −4; 16; −64; …", "1; 2; 4; 7; …"], correctIndex: 2, answerKey: "C. Ratios −4 ÷ 1 = −4, 16 ÷ (−4) = −4, −64 ÷ 16 = −4 are constant (r = −4).", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Show that 162; 54; 18; 6; … is geometric, state r, describe the behaviour of the terms, and write down the next two terms.", answerKey: "Ratios 54/162 = 18/54 = 6/18 = 1/3 (2 marks). r = 1/3, between 0 and 1, so the terms decrease towards 0 (1 mark). Next terms 2 and 2/3 (2 marks).", marks: 5 },
        { type: "SHORT_ANSWER", prompt: "Find the two possible geometric means between 3 and 27, and write down both resulting geometric sequences with their ratios.", answerKey: "x = ±√(3 × 27) = ±√81 = ±9 (2 marks). 3; 9; 27 with r = 3 and 3; −9; 27 with r = −3 (2 marks).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "The numbers k − 1, k + 1 and 2k + 5 are consecutive terms of a geometric sequence with k > 0. Find k and the common ratio.", answerKey: "(k + 1)² = (k − 1)(2k + 5) (1 mark). k² + 2k + 1 = 2k² + 3k − 5, so k² + k − 6 = 0 (1 mark), (k + 3)(k − 2) = 0, k = 2 since k > 0 (2 marks). Terms 1; 3; 9, r = 3 (2 marks).", marks: 6 },
        { type: "ESSAY", prompt: "Compare arithmetic and geometric sequences. Your answer should give the defining rule of each, how each is tested, how the common ratio affects a geometric sequence, and one real-life situation modelled by each.", answerKey: "Arithmetic adds a constant d; geometric multiplies by a constant r (2). Tests: constant differences vs constant ratios, with examples (2). Effect of r: r > 1 increase, 0 < r < 1 decrease towards 0, r < 0 alternating signs (3). Suitable real-life examples, e.g. seats per row (arithmetic) and doubling bacteria or an epidemic (geometric) (2). Clarity (1).", marks: 10 },
      ],
    },
    // source: Siyavula — Everything Maths Grade 12, 1.3 Geometric sequences: general formula and worked examples (https://www.siyavula.com/read/za/mathematics/grade-12/sequences-and-series/01-sequences-and-series-02)
    {
      slug: "general-term-of-a-geometric-sequence",
      title: "Formula for the Geometric Sequence and Its Use",
      objective:
        "By the end of the topic, learners should be able to state the general term Tₙ = arⁿ⁻¹ of a geometric sequence and use it to find terms, the position of a term, the first term and common ratio, and geometric means.",
      estimatedMinutes: 50,
      notes: `As with arithmetic sequences, a formula for the general term allows any term of a geometric sequence to be found from its position without listing all the terms before it. The formula comes directly from the rule "multiply by r".

## Deriving the general term

Let the first term be a and the common ratio r. Each term is the one before multiplied by r:

| Position n | Term Tₙ | Number of factors of r |
| --- | --- | --- |
| 1 | a | 0 |
| 2 | ar | 1 |
| 3 | ar² | 2 |
| 4 | ar³ | 3 |
| n | arⁿ⁻¹ | n − 1 |

The power of r is one less than the position, because the first term has not yet been multiplied by r.

## The formula

**General term of a geometric sequence:** Tₙ = a × rⁿ⁻¹

where Tₙ is the nth term, n is the position of the term, a is the first term and r is the common ratio.

Only r is raised to the power n − 1; the first term a is not. For 2; 6; 18; …, T₅ = 2 × 3⁴ = 2 × 81 = 162, not (2 × 3)⁴.

**Example.** For the epidemic sequence 2; 4; 8; 16; …, Tₙ = 2 × 2ⁿ⁻¹. On day 10, T₁₀ = 2 × 2⁹ = 2 × 512 = 1 024 newly infected people.

## Using the formula

The formula connects Tₙ, a, r and n. The usual problems are:

1. **Finding a particular term.** Substitute a, r and n.
2. **Finding the position of a term.** Set arⁿ⁻¹ equal to the given term and solve for n, usually by writing both sides as powers of the same base.
3. **Finding a and r from two terms.** Write both terms using the formula and *divide* one equation by the other, so that a cancels.
4. **Inserting geometric means.** Treat the two given numbers as the first and last terms of a longer geometric sequence and find r.

## Finding a and r from two terms

**Example.** The 3rd term of a geometric sequence is 12 and the 6th term is 96. Find a and r.

T₃ = ar² = 12 … (1)

T₆ = ar⁵ = 96 … (2)

Dividing (2) by (1): ar⁵ ÷ ar² = 96 ÷ 12, so r³ = 8 and r = 2. Substituting into (1): a × 4 = 12, so a = 3. The sequence is 3; 6; 12; 24; 48; 96; …

For arithmetic sequences two given terms are *subtracted*; for geometric sequences they are *divided*. Division removes a and leaves a power of r.

## Inserting geometric means

**Example.** Insert three geometric means between −1 and −1/81.

The sequence has five terms, with T₁ = −1 and T₅ = −1/81. So −1 × r⁴ = −1/81, giving r⁴ = 1/81 and r = ±1/3. There are two answers:

- r = 1/3: −1; −1/3; −1/9; −1/27; −1/81
- r = −1/3: −1; 1/3; −1/9; 1/27; −1/81

An even power such as r⁴ always has a positive and a negative root, so both values of r must be considered.

## Common errors

- **Raising the whole product to the power**, writing (ar)ⁿ⁻¹ instead of arⁿ⁻¹.
- **Using rⁿ instead of rⁿ⁻¹.**
- **Subtracting the two equations** when finding a and r; for geometric sequences they must be divided.
- **Forgetting the negative root** when solving an even power such as r² = 9 or r⁴ = 16.

## Summary

- Tₙ = arⁿ⁻¹ gives any term of a geometric sequence; only r carries the power.
- To find n, set arⁿ⁻¹ equal to the term and compare powers of the same base.
- Two given terms are divided to eliminate a and find r.
- Geometric means are found by treating the given numbers as the first and last terms and solving for r; even powers give two possible ratios.`,
      workedExample: `**Problem.** During an epidemic the number of newly infected people on successive days is 2; 4; 8; 16; … (a) Write down the general term. (b) How many people are newly infected on day 10? (c) On which day will 16 384 people be newly infected?

**Solution**

*Step 1 — Identify a and r.* a = 2, and r = 4 ÷ 2 = 8 ÷ 4 = 2.

*Step 2 — Write the general term.* Tₙ = arⁿ⁻¹ = 2 × 2ⁿ⁻¹.

*Step 3 — Find T₁₀.* T₁₀ = 2 × 2⁹ = 2 × 512 = 1 024.

*Step 4 — Set up an equation for part (c).* 2 × 2ⁿ⁻¹ = 16 384.

*Step 5 — Simplify.* Dividing both sides by 2 gives 2ⁿ⁻¹ = 8 192.

*Step 6 — Write both sides as powers of 2.* 8 192 = 2¹³, so 2ⁿ⁻¹ = 2¹³.

*Step 7 — Compare the powers.* n − 1 = 13, so n = 14.

*Step 8 — Check.* T₁₄ = 2 × 2¹³ = 2¹⁴ = 16 384. ✓

**Answer.** (a) Tₙ = 2 × 2ⁿ⁻¹ (b) 1 024 people on day 10 (c) on day 14.`,
      quiz: [
        { prompt: "The general term of a geometric sequence is", options: ["Tₙ = a + (n − 1)r", "Tₙ = arⁿ", "Tₙ = arⁿ⁻¹", "Tₙ = (ar)ⁿ⁻¹"], correctIndex: 2, explanation: "The first term is multiplied by r a total of n − 1 times: Tₙ = arⁿ⁻¹." },
        { prompt: "Find T₆ for 3; 6; 12; …", options: ["96", "192", "48", "36"], correctIndex: 0, explanation: "T₆ = 3 × 2⁵ = 3 × 32 = 96." },
        { prompt: "Find T₅ for 2; 6; 18; …", options: ["1 296", "162", "54", "486"], correctIndex: 1, explanation: "T₅ = 2 × 3⁴ = 2 × 81 = 162. Raising (2 × 3) to the 4th power gives the wrong answer 1 296." },
        { prompt: "Find T₇ for 64; 32; 16; …", options: ["1", "2", "1/2", "4"], correctIndex: 0, explanation: "a = 64, r = 1/2: T₇ = 64 × (1/2)⁶ = 64 ÷ 64 = 1." },
        { prompt: "Find T₄ for 5; −15; 45; …", options: ["135", "−135", "−405", "405"], correctIndex: 1, explanation: "r = −3: T₄ = 5 × (−3)³ = 5 × (−27) = −135." },
        { prompt: "For Tₙ = 6 × (1/3)ⁿ⁻¹, what is T₃?", options: ["2", "2/3", "6", "1/9"], correctIndex: 1, explanation: "T₃ = 6 × (1/3)² = 6 ÷ 9 = 2/3." },
        { prompt: "Which term of 3; 6; 12; … is 384?", options: ["7th", "8th", "9th", "128th"], correctIndex: 1, explanation: "3 × 2ⁿ⁻¹ = 384 gives 2ⁿ⁻¹ = 128 = 2⁷, so n = 8." },
        { prompt: "To find a and r from two given terms of a geometric sequence, the two equations are", options: ["added", "subtracted", "divided", "multiplied"], correctIndex: 2, explanation: "Dividing removes a and leaves a power of r." },
        { prompt: "T₂ = 10 and T₅ = 270 in a geometric sequence. What is r?", options: ["3", "27", "9", "260/3"], correctIndex: 0, explanation: "ar⁴ ÷ ar = r³ = 270 ÷ 10 = 27, so r = 3." },
        { prompt: "T₂ = 10 and T₅ = 270. What is the first term?", options: ["30", "10/3", "3", "1"], correctIndex: 1, explanation: "ar = 10 with r = 3 gives a = 10/3." },
        { prompt: "If r² = 25 in a geometric sequence with real terms, r could be", options: ["5 only", "−5 only", "5 or −5", "12.5"], correctIndex: 2, explanation: "An even power has two real roots, ±5." },
        { prompt: "How many geometric means are inserted between 2 and 162 to give 2; ___; ___; ___; 162?", options: ["2", "3", "4", "5"], correctIndex: 1, explanation: "Three missing terms are inserted between the first and fifth terms." },
        { prompt: "For 2; ___; ___; ___; 162 (positive terms), what is r?", options: ["3", "9", "4", "81"], correctIndex: 0, explanation: "2r⁴ = 162 gives r⁴ = 81, so r = 3 (positive terms)." },
        { prompt: "Why is (ar)ⁿ⁻¹ an incorrect form of the general term?", options: ["It is correct", "It raises a to a power as well as r", "It uses n − 1 instead of n", "It ignores the first term"], correctIndex: 1, explanation: "Only r is raised to the power n − 1; a is multiplied once." },
        { prompt: "A sequence has Tₙ = 5 × 2ⁿ⁻¹. What are its first three terms?", options: ["5; 10; 20", "10; 20; 40", "5; 7; 9", "2; 10; 50"], correctIndex: 0, explanation: "T₁ = 5, T₂ = 10, T₃ = 20." },
        { prompt: "A ball's first bounce reaches 80 cm and each later bounce reaches 3/4 of the previous height. How high is the 3rd bounce?", options: ["60 cm", "45 cm", "33.75 cm", "20 cm"], correctIndex: 1, explanation: "Heights 80; 60; 45: T₃ = 80 × (3/4)² = 45 cm." },
        { prompt: "In 1; 2; 4; 8; …, which term is the first to exceed 1 000?", options: ["10th", "11th", "12th", "1 000th"], correctIndex: 1, explanation: "Tₙ = 2ⁿ⁻¹. T₁₀ = 512 and T₁₁ = 1 024." },
        { prompt: "T₁ = −4 and T₄ = 32 in a geometric sequence. What is r?", options: ["2", "−2", "−8", "8"], correctIndex: 1, explanation: "−4r³ = 32 gives r³ = −8, so r = −2." },
        { prompt: "The 4th term of a geometric sequence is 54 and r = 3. What is a?", options: ["2", "6", "18", "1"], correctIndex: 0, explanation: "a × 3³ = 54 gives 27a = 54, so a = 2." },
        { prompt: "What is T₁₀ of 1; −1; 1; −1; …?", options: ["1", "−1", "0", "10"], correctIndex: 1, explanation: "r = −1: T₁₀ = 1 × (−1)⁹ = −1. Even positions are negative." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "The 6th term of 81; 27; 9; … is", options: ["1/3", "1", "3", "1/9"], correctIndex: 0, answerKey: "A. a = 81, r = 1/3: T₆ = 81 × (1/3)⁵ = 81 ÷ 243 = 1/3.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Which term of the geometric sequence 5; 15; 45; … is 3 645?", answerKey: "Tₙ = 5 × 3ⁿ⁻¹ (1 mark). 5 × 3ⁿ⁻¹ = 3 645 gives 3ⁿ⁻¹ = 729 = 3⁶ (2 marks), so n − 1 = 6 and n = 7 (1 mark).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "The 2nd term of a geometric sequence is 6 and the 5th term is 162. Find a, r and the general term.", answerKey: "ar = 6, ar⁴ = 162 (1 mark). Dividing: r³ = 27, r = 3 (2 marks). a = 2 (1 mark). Tₙ = 2 × 3ⁿ⁻¹ (1 mark).", marks: 5 },
        { type: "SHORT_ANSWER", prompt: "Insert two geometric means between 5 and 135.", answerKey: "T₁ = 5, T₄ = 135, so 5r³ = 135, r³ = 27, r = 3 (2 marks). Means 15 and 45: sequence 5; 15; 45; 135 (2 marks). (r³ has only one real root, so there is only one set.)", marks: 4 },
        { type: "ESSAY", prompt: "Derive the general term Tₙ = arⁿ⁻¹ of a geometric sequence. Then explain, with worked examples, how to (i) find the position of a given term and (ii) find a and r when two terms are given. Explain why two terms are divided rather than subtracted.", answerKey: "Derivation using a, ar, ar², … showing the power of r is one less than the position (3). (i) Correct example comparing powers of the same base (3). (ii) Correct example dividing the equations (3). Explanation: division cancels a and leaves a single power of r, whereas subtraction does not remove a (1).", marks: 10 },
      ],
    },
  ],
};
