import type { PeriodContent } from "@/content/types";

// Grade 11, Semester One, Period I of the MoE Mathematics syllabus:
// Unit I Modular Arithmetic and Unit II Indices and Logarithms. Each CONTENTS
// bullet is its own topic. Notes built from OpenStax (Contemporary Mathematics,
// College Algebra 2e), LibreTexts, Siyavula, CK-12 and GeeksforGeeks pages.
export const mathematicsG11P1: PeriodContent = {
  grade: 11,
  number: 1,
  title: "Modular Arithmetic, Indices and Logarithms",
  summary:
    "Period I of the MoE Grade 11 Mathematics syllabus. Unit I covers polygonal (clock) arithmetic, modular arithmetic, cyclic variables and division using modular arithmetic. Unit II covers indices, exponential growth, negative powers, properties of indices, rational powers, logarithms, logarithmic functions, base-ten logarithms, logarithms of numbers greater than 10 and between 0 and 1, and the laws of logarithms.",
  topics: [
    // source: OpenStax — Contemporary Mathematics, 3.7 Clock Arithmetic (https://openstax.org/books/contemporary-mathematics/pages/3-7-clock-arithmetic)
    {
      slug: "polygonal-arithmetic",
      title: "Polygonal (Clock) Arithmetic",
      objective:
        "By the end of the topic, learners should be able to add, subtract and multiply on a clock or regular polygon whose positions are numbered in a cycle.",
      estimatedMinutes: 80,
      notes: `## Numbers that cycle back
- In clock arithmetic the numbers **cycle back on themselves**: after the last position the count returns to the start.
- On a 12-hour clock, 11 a.m. plus 4 hours is 3 p.m., not "15 o'clock".
- **Polygonal arithmetic** uses the same idea on a regular polygon: an n-sided polygon has its vertices numbered 0, 1, 2, …, n − 1 going clockwise, with 0 at the top.

\`\`\`svg Pentagon "clock" for arithmetic with 5 positions
<svg viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="16">
<polygon points="100,20 176,75 147,165 53,165 24,75" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="94" y="14">0</text><text x="182" y="78">1</text><text x="152" y="182">2</text><text x="38" y="182">3</text><text x="6" y="78">4</text>
<path d="M115 30 Q150 40 162 62" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#a)"/>
<defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="currentColor"/></marker></defs>
</svg>
\`\`\`

## Rules of movement
- **Addition** — start at the first number and move **clockwise** the number of steps being added.
- **Subtraction** — move **anticlockwise** (counter-clockwise).
- **Multiplication** — repeated addition; multiply normally, then find the position reached.
- The position reached is the **remainder** after dividing by the number of positions.

## Clock arithmetic (12 positions)
- **n modulo 12**, written n mod 12, is the remainder when n is divided by 12.
- If the remainder is x, write **n ≡ x (mod 12)**.
- A remainder of 0 means the hand points to **12** on a real clock.
- 34 ÷ 12 = 2 remainder 10, so 34 ≡ 10 (mod 12).
- 539 ÷ 12 = 44 remainder 11, so 539 ≡ 11 (mod 12).

## Worked clock calculations
| Problem | Reduce | Result |
| --- | --- | --- |
| 3:00 + 89 hours | 89 mod 12 = 5 | 3 + 5 = 8:00 |
| 4:00 − 67 hours | 67 mod 12 = 7 | 4 − 7 = −3, add 12 → 9:00 |
| 9:00 + 43 hours | 43 mod 12 = 7 | 9 + 7 = 16 → 4:00 |
| 11 × 45 (mod 12) | 495 ÷ 12 = 41 r 3 | 3 |

- A negative answer is fixed by **adding 12** (one full turn).

## Addition table on a pentagon (5 positions)
| + | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| 0 | 0 | 1 | 2 | 3 | 4 |
| 1 | 1 | 2 | 3 | 4 | 0 |
| 2 | 2 | 3 | 4 | 0 | 1 |
| 3 | 3 | 4 | 0 | 1 | 2 |
| 4 | 4 | 0 | 1 | 2 | 3 |

- Each row is the row above shifted one place: the results **cycle**.

## Common errors
- Leaving an answer larger than the number of positions (e.g. "16 o'clock").
- Leaving a negative answer instead of adding one full turn.
- Starting the count at 1 instead of 0 on a polygon numbered from 0.`,
      workedExample: `**Question:** It is 4:00 now. What time was it 67 hours ago? What time will it be 89 hours after 3:00?

**Solution**

*Step 1 — reduce the number of hours modulo 12.*
67 ÷ 12 = 5 remainder 7, so 67 ≡ 7 (mod 12).

*Step 2 — move anticlockwise 7 hours from 4:00.*
4 − 7 = −3. Add one full turn: −3 + 12 = 9.

*Step 3 — second part: reduce 89 modulo 12.*
89 ÷ 12 = 7 remainder 5, so 89 ≡ 5 (mod 12).

*Step 4 — move clockwise 5 hours from 3:00.*
3 + 5 = 8.

**Answer: 67 hours before 4:00 it was 9:00; 89 hours after 3:00 it will be 8:00.**`,
      quiz: [
        { prompt: "On a 12-hour clock, what time is 4 hours after 11 o'clock?", options: ["15 o'clock", "3 o'clock", "4 o'clock", "1 o'clock"], correctIndex: 1, explanation: "11 + 4 = 15 and 15 − 12 = 3." },
        { prompt: "34 mod 12 equals", options: ["2", "10", "12", "22"], correctIndex: 1, explanation: "34 = 2 × 12 + 10." },
        { prompt: "539 mod 12 equals", options: ["11", "44", "9", "7"], correctIndex: 0, explanation: "539 = 44 × 12 + 11." },
        { prompt: "On a clock, adding hours means moving", options: ["anticlockwise", "clockwise", "to the centre", "back to 12"], correctIndex: 1, explanation: "Addition moves clockwise; subtraction moves anticlockwise." },
        { prompt: "A clock calculation gives a remainder of 0. On a real 12-hour clock this is", options: ["0 o'clock", "1 o'clock", "12 o'clock", "6 o'clock"], correctIndex: 2, explanation: "12 mod 12 = 0, so 0 is read as 12." },
        { prompt: "It is 3:00. What time is it 89 hours later?", options: ["5:00", "8:00", "92:00", "11:00"], correctIndex: 1, explanation: "89 mod 12 = 5; 3 + 5 = 8." },
        { prompt: "It is 4:00. What time was it 67 hours ago?", options: ["9:00", "3:00", "7:00", "11:00"], correctIndex: 0, explanation: "67 mod 12 = 7; 4 − 7 = −3; −3 + 12 = 9." },
        { prompt: "A regular hexagon used for polygonal arithmetic has positions numbered", options: ["1 to 6", "0 to 6", "0 to 5", "1 to 5"], correctIndex: 2, explanation: "n positions are numbered 0 to n − 1." },
        { prompt: "On a pentagon numbered 0–4, what is 3 + 4?", options: ["7", "2", "1", "3"], correctIndex: 1, explanation: "7 = 1 × 5 + 2, so the position is 2." },
        { prompt: "On a pentagon numbered 0–4, what is 1 − 3?", options: ["−2", "2", "3", "4"], correctIndex: 2, explanation: "1 − 3 = −2; add 5 to get 3." },
        { prompt: "11 × 45 in clock (mod 12) arithmetic equals", options: ["3", "5", "11", "9"], correctIndex: 0, explanation: "495 = 41 × 12 + 3." },
        { prompt: "If it is 9:00 now, in 43 hours it will be", options: ["4:00", "7:00", "52:00", "6:00"], correctIndex: 0, explanation: "43 mod 12 = 7; 9 + 7 = 16; 16 − 12 = 4." },
        { prompt: "If it is 7:00 now, 34 hours ago it was", options: ["3:00", "9:00", "10:00", "5:00"], correctIndex: 1, explanation: "34 mod 12 = 10; 7 − 10 = −3; −3 + 12 = 9." },
        { prompt: "A negative result in clock arithmetic is corrected by", options: ["ignoring the sign", "adding 12 (one full turn)", "multiplying by −1", "subtracting 12"], correctIndex: 1, explanation: "Adding one full turn gives the equivalent position." },
        { prompt: "Multiplication in polygonal arithmetic is", options: ["repeated subtraction", "repeated addition", "the same as division", "not possible"], correctIndex: 1, explanation: "Multiplying is repeated addition around the polygon." },
        { prompt: "On a square numbered 0–3, what is 2 × 3?", options: ["6", "1", "2", "3"], correctIndex: 2, explanation: "6 = 1 × 4 + 2." },
        { prompt: "Which is written correctly?", options: ["34 ≡ 10 (mod 12)", "34 = 10 (mod 12) always", "10 ≡ 34 (mod 10)", "34 ≡ 2 (mod 12)"], correctIndex: 0, explanation: "34 leaves remainder 10 on division by 12." },
        { prompt: "In the pentagon addition table, the entry for 4 + 4 is", options: ["8", "4", "3", "0"], correctIndex: 2, explanation: "8 = 5 + 3." },
        { prompt: "In polygonal arithmetic, the result of any operation is always", options: ["a remainder between 0 and n − 1", "larger than n", "negative", "a fraction"], correctIndex: 0, explanation: "Results are positions 0 to n − 1." },
        { prompt: "It is 10 o'clock. What time is it 7 hours later?", options: ["17 o'clock", "3 o'clock", "5 o'clock", "7 o'clock"], correctIndex: 2, explanation: "10 + 7 = 17; 17 − 12 = 5." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Find (a) 50 mod 12 and (b) the time 50 hours after 8:00 on a 12-hour clock.", answerKey: "(a) 50 = 4 × 12 + 2, so 50 mod 12 = 2. (b) 8 + 2 = 10, so 10:00. 3 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "It is 2:00. What time was it 31 hours ago? Show your working.", answerKey: "31 = 2 × 12 + 7, so 31 ≡ 7 (mod 12). 2 − 7 = −5; −5 + 12 = 7. It was 7:00. 2 marks reducing, 2 marks subtracting, 2 marks correcting the negative.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "On a regular pentagon numbered 0 to 4, what is 3 × 4?", options: ["12", "2", "4", "0"], correctIndex: 1, answerKey: "3 × 4 = 12 = 2 × 5 + 2, so the position is 2 (option B).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Draw up the addition table for a square whose vertices are numbered 0, 1, 2, 3.", answerKey: "Rows 0: 0 1 2 3; 1: 1 2 3 0; 2: 2 3 0 1; 3: 3 0 1 2. 1 mark per correct row plus 2 marks for correct layout.", marks: 6 },
        { type: "ESSAY", prompt: "Explain what is meant by polygonal (clock) arithmetic. Describe how addition, subtraction and multiplication are carried out, and use it to find 5 × 7 on a 12-hour clock and 2 − 9 on a 12-hour clock.", answerKey: "Numbers cycle back after the last position; positions are the remainders on division by the number of positions. Addition = move clockwise; subtraction = move anticlockwise, adding a full turn if the result is negative; multiplication = repeated addition, then take the remainder. 5 × 7 = 35 = 2 × 12 + 11 → 11. 2 − 9 = −7; −7 + 12 = 5 → 5:00. 4 marks explanation, 3 marks each calculation.", marks: 10 },
      ],
    },
    // source: GeeksforGeeks — Modular Arithmetic (https://www.geeksforgeeks.org/maths/modular-arithmetic/) and LibreTexts — 1.6 Modular Arithmetic, MGF 1131 Mathematics in Context (https://math.libretexts.org/Courses/Florida_SouthWestern_State_College/MGF_1131:_Mathematics_in_Context__(FSW)/01:__Number_Representation_in_Different_Bases_and_Cryptography/1.06:__Modular_Arithmetic)
    {
      slug: "modular-arithmetic",
      title: "Modular Arithmetic",
      objective:
        "By the end of the topic, learners should be able to define the modulus and congruence, find a mod n for positive and negative integers, and add, subtract, multiply and raise to powers in modular arithmetic.",
      estimatedMinutes: 80,
      notes: `## Definitions
- **Modular arithmetic** — a system of arithmetic for integers in which numbers "wrap around" after reaching a fixed value called the **modulus**. It is also called clock arithmetic.
- **a mod n** — the remainder when a is divided by n.
- **Quotient–remainder theorem** — for integers a and b (b > 0) there are unique integers q and r with a = b × q + r and 0 ≤ r < b.
- Example: 20 = 6 × 3 + 2, so 20 mod 6 = 2.
- **Congruence** — a ≡ b (mod n) means a and b leave the same remainder on division by n; equivalently a − b is a multiple of n.

## Finding a mod n
- Positive a: divide and keep the remainder. 17 ÷ 5 = 3 remainder 2, so 17 mod 5 = 2.
- Negative a: −a mod n = n − (a mod n) (when a mod n ≠ 0).
- Example: 12 mod 5 = 2, so −12 mod 5 = 5 − 2 = 3.
- The possible remainders modulo n are 0, 1, 2, …, n − 1.

## Rules of operation
| Operation | Rule |
| --- | --- |
| Addition | (a + b) mod n = ((a mod n) + (b mod n)) mod n |
| Subtraction | (a − b) mod n = ((a mod n) − (b mod n)) mod n |
| Multiplication | (a × b) mod n = ((a mod n) × (b mod n)) mod n |
| Power | aᵏ mod n: reduce a first, then multiply and reduce step by step |

- Addition: (15 + 17) mod 7 = (1 + 3) mod 7 = 4.
- Multiplication: (12 × 13) mod 5 = (2 × 3) mod 5 = 6 mod 5 = 1.
- Power: 5² mod 7 = 25 mod 7 = 4.

## Everyday uses
- Clocks: mod 12 (12-hour) and mod 24 (24-hour time).
- Days of the week: mod 7. Months of the year: mod 12.
- Error checking in credit-card and other identification numbers.

## Common errors
- Giving a negative remainder: −1 mod 5 is 4, not −1.
- Forgetting to reduce the final answer.
- Reducing before **dividing** — division does not follow the simple rule (see Division using modular arithmetic).`,
      workedExample: `**Question:** Find (17 × 14) mod 5 and (23 − 41) mod 6.

**Solution**

*Step 1 — reduce each factor modulo 5.*
17 = 3 × 5 + 2, so 17 mod 5 = 2. 14 = 2 × 5 + 4, so 14 mod 5 = 4.

*Step 2 — multiply and reduce.*
2 × 4 = 8, and 8 mod 5 = 3. Check: 17 × 14 = 238 = 47 × 5 + 3. ✔

*Step 3 — reduce each term modulo 6.*
23 mod 6 = 5; 41 mod 6 = 5.

*Step 4 — subtract and reduce.*
5 − 5 = 0, so (23 − 41) mod 6 = 0. Check: 23 − 41 = −18 = −3 × 6. ✔

**Answer: (17 × 14) mod 5 = 3 and (23 − 41) mod 6 = 0.**`,
      quiz: [
        { prompt: "What is 13 mod 5?", options: ["2", "3", "8", "0"], correctIndex: 1, explanation: "13 = 2 × 5 + 3." },
        { prompt: "The fixed value at which numbers wrap around is called the", options: ["remainder", "quotient", "modulus", "index"], correctIndex: 2, explanation: "Numbers wrap around after reaching the modulus." },
        { prompt: "a ≡ b (mod n) means", options: ["a = b", "a − b is a multiple of n", "a + b = n", "a divides b"], correctIndex: 1, explanation: "Congruent numbers differ by a multiple of n." },
        { prompt: "The possible remainders modulo 4 are", options: ["1, 2, 3, 4", "0, 1, 2, 3", "0, 1, 2, 3, 4", "1, 2, 3"], correctIndex: 1, explanation: "Remainders run from 0 to n − 1." },
        { prompt: "(15 + 17) mod 7 =", options: ["4", "5", "32", "1"], correctIndex: 0, explanation: "(1 + 3) mod 7 = 4." },
        { prompt: "(12 × 13) mod 5 =", options: ["0", "1", "6", "2"], correctIndex: 1, explanation: "(2 × 3) mod 5 = 6 mod 5 = 1." },
        { prompt: "20 = 6 × 3 + 2. In the quotient–remainder theorem, the remainder is", options: ["20", "6", "3", "2"], correctIndex: 3, explanation: "r = 2 with 0 ≤ r < 6." },
        { prompt: "−12 mod 5 =", options: ["−2", "2", "3", "−3"], correctIndex: 2, explanation: "12 mod 5 = 2; 5 − 2 = 3." },
        { prompt: "−1 mod 5 =", options: ["−1", "1", "4", "5"], correctIndex: 2, explanation: "−1 + 5 = 4." },
        { prompt: "5² mod 7 =", options: ["4", "3", "25", "2"], correctIndex: 0, explanation: "25 = 3 × 7 + 4." },
        { prompt: "What is 100 mod 7?", options: ["1", "2", "3", "4"], correctIndex: 1, explanation: "100 = 14 × 7 + 2." },
        { prompt: "17 ≡ ? (mod 5)", options: ["1", "2", "3", "4"], correctIndex: 1, explanation: "17 − 2 = 15 = 3 × 5." },
        { prompt: "Which is congruent to 0 (mod 6)?", options: ["8", "15", "18", "20"], correctIndex: 2, explanation: "18 = 3 × 6." },
        { prompt: "Which statement is true?", options: ["10 ≡ 4 (mod 6)", "10 ≡ 3 (mod 6)", "10 ≡ 5 (mod 6)", "10 ≡ 0 (mod 6)"], correctIndex: 0, explanation: "10 − 4 = 6." },
        { prompt: "Days of the week repeat, so they are counted modulo", options: ["5", "7", "12", "24"], correctIndex: 1, explanation: "There are 7 days in a week." },
        { prompt: "Military (24-hour) time is arithmetic modulo", options: ["12", "60", "24", "7"], correctIndex: 2, explanation: "The 24-hour clock wraps after 24." },
        { prompt: "(a × b) mod n equals", options: ["(a mod n) × b", "((a mod n) × (b mod n)) mod n", "a × b", "(a + b) mod n"], correctIndex: 1, explanation: "Reduce, multiply, reduce." },
        { prompt: "(9 − 4) mod 5 =", options: ["0", "1", "5", "4"], correctIndex: 0, explanation: "5 mod 5 = 0." },
        { prompt: "45 mod 10 =", options: ["4", "5", "0", "45"], correctIndex: 1, explanation: "The units digit is the remainder on division by 10." },
        { prompt: "Modular arithmetic is used in", options: ["checking credit-card numbers", "measuring mass", "drawing graphs only", "finding areas"], correctIndex: 0, explanation: "Error-checking digits use modular arithmetic." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Find (i) 29 mod 6 and (ii) (23 + 19) mod 8, showing your working.", answerKey: "(i) 29 = 4 × 6 + 5, so 5. (ii) 23 mod 8 = 7, 19 mod 8 = 3, (7 + 3) mod 8 = 10 mod 8 = 2. 3 marks (i), 4 marks (ii).", marks: 7 },
        { type: "SHORT_ANSWER", prompt: "Compute (14 × 11) mod 6 using the multiplication rule.", answerKey: "14 mod 6 = 2, 11 mod 6 = 5, (2 × 5) mod 6 = 10 mod 6 = 4. Check: 154 = 25 × 6 + 4. 3 marks reducing, 2 marks product, 1 mark answer.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "−17 mod 5 equals", options: ["2", "3", "−2", "4"], correctIndex: 1, answerKey: "17 mod 5 = 2, so −17 mod 5 = 5 − 2 = 3 (option B). Check: −17 = −4 × 5 + 3.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain what a ≡ b (mod n) means and show that 38 ≡ 8 (mod 10).", answerKey: "a and b leave the same remainder on division by n, i.e. a − b is a multiple of n. 38 − 8 = 30 = 3 × 10, so 38 ≡ 8 (mod 10). 3 marks definition, 3 marks demonstration.", marks: 6 },
        { type: "ESSAY", prompt: "State the quotient–remainder theorem, write the rules for addition, subtraction and multiplication modulo n, and use them to find (37 + 58) mod 9 and (37 × 58) mod 9.", answerKey: "a = bq + r, 0 ≤ r < b, q and r unique. Rules: reduce each number, operate, reduce again. 37 mod 9 = 1, 58 mod 9 = 4. Sum: (1 + 4) mod 9 = 5 (check 95 = 10 × 9 + 5). Product: (1 × 4) mod 9 = 4 (check 2146 = 238 × 9 + 4). 2 marks theorem, 3 marks rules, 5 marks calculations.", marks: 10 },
      ],
    },
    // source: OpenStax — Contemporary Mathematics, 3.7 Clock Arithmetic (days of the week, mod 7) (https://openstax.org/books/contemporary-mathematics/pages/3-7-clock-arithmetic) and GeeksforGeeks — Cyclicity of Numbers: Unit Digits in Powers (https://www.geeksforgeeks.org/maths/number-system-cyclicity-of-numbers/)
    {
      slug: "cyclic-variables",
      title: "Cyclic Variables",
      objective:
        "By the end of the topic, learners should be able to recognise quantities whose values repeat in a fixed cycle and use the cycle length (the modulus) to predict later values such as days of the week and units digits of powers.",
      estimatedMinutes: 60,
      notes: `## Cyclic quantities
- A **cyclic variable** is a quantity whose values repeat in a fixed order; after the last value it returns to the first.
- The number of values in one cycle is the **modulus** of the cycle.
| Cyclic quantity | Values | Modulus |
| --- | --- | --- |
| Hour on a 12-hour clock | 1 to 12 | 12 |
| Hour on a 24-hour clock | 0 to 23 | 24 |
| Day of the week | Sunday to Saturday | 7 |
| Month of the year | January to December | 12 |
| Units digit of 2ⁿ | 2, 4, 8, 6 | 4 |

## Predicting a later value
1. Find how many steps forward are taken.
2. Reduce the number of steps modulo the cycle length.
3. Count that many places forward from the starting value.

- Example (mod 7): a task is done every 6 days, starting on Thursday. The 10th turn is 9 intervals later: 9 × 6 = 54 days. 54 mod 7 = 5. Five days after Thursday is **Tuesday**.
- Example (mod 7): meals every 5 days, last on Tuesday; 20 more times is 100 days. 100 mod 7 = 2. Two days after Tuesday is **Thursday**.

## Cyclicity of units digits
- **Cyclicity** — the repeating pattern followed by the units digit of a number raised to successive powers.
| Units digit | Cycle of units digits | Cycle length |
| --- | --- | --- |
| 0, 1, 5, 6 | stays the same | 1 |
| 2 | 2, 4, 8, 6 | 4 |
| 3 | 3, 9, 7, 1 | 4 |
| 4 | 4, 6 | 2 |
| 7 | 7, 9, 3, 1 | 4 |
| 8 | 8, 4, 2, 6 | 4 |
| 9 | 9, 1 | 2 |

## Finding a units digit
- For units digits 2, 3, 7, 8: divide the exponent by 4. Remainder 1, 2, 3 gives the 1st, 2nd, 3rd value in the cycle; remainder 0 gives the 4th.
- For 4 and 9: odd exponent gives the first value (4 or 9); even exponent gives the second (6 or 1).
- Examples: 416³⁴⁵ ends in 6. 414²³ ends in 4 (odd power). 28¹⁴⁶: 146 ÷ 4 leaves 2, so the units digit is 4 (second value of 8, 4, 2, 6).

## Common errors
- Counting the starting day as day 1 when stepping forward.
- Using remainder 0 as "no change" in a cycle of length 4 — it is the **last** value of the cycle.`,
      workedExample: `**Question:** Today is Monday. What day of the week will it be in 100 days? What is the units digit of 7²³?

**Solution**

*Step 1 — reduce 100 modulo 7.*
100 = 14 × 7 + 2, so 100 ≡ 2 (mod 7).

*Step 2 — count 2 days forward from Monday.*
Monday → Tuesday → Wednesday.

*Step 3 — units digits of powers of 7 cycle 7, 9, 3, 1 (length 4).*
23 = 5 × 4 + 3, remainder 3.

*Step 4 — take the 3rd value of the cycle.*
The 3rd value is 3.

**Answer: Wednesday; the units digit of 7²³ is 3.**`,
      quiz: [
        { prompt: "A quantity whose values repeat in a fixed order is a", options: ["constant", "cyclic variable", "fraction", "linear variable"], correctIndex: 1, explanation: "Its values cycle back to the start." },
        { prompt: "The cycle length for days of the week is", options: ["5", "7", "12", "30"], correctIndex: 1, explanation: "Seven days repeat." },
        { prompt: "The cycle length for months of the year is", options: ["7", "10", "12", "24"], correctIndex: 2, explanation: "Twelve months repeat." },
        { prompt: "Today is Thursday. What day is it in 54 days?", options: ["Monday", "Tuesday", "Thursday", "Saturday"], correctIndex: 1, explanation: "54 mod 7 = 5; five days after Thursday is Tuesday." },
        { prompt: "Today is Tuesday. What day is it in 100 days?", options: ["Thursday", "Wednesday", "Friday", "Tuesday"], correctIndex: 0, explanation: "100 mod 7 = 2; Tuesday + 2 = Thursday." },
        { prompt: "Today is Sunday. What day is it in 21 days?", options: ["Sunday", "Monday", "Saturday", "Wednesday"], correctIndex: 0, explanation: "21 mod 7 = 0, so the same day." },
        { prompt: "The units digits of powers of 2 cycle as", options: ["2, 4, 6, 8", "2, 4, 8, 6", "2, 6, 4, 8", "2, 8, 4, 6"], correctIndex: 1, explanation: "2, 4, 8, 16, 32 … give 2, 4, 8, 6." },
        { prompt: "The units digits of powers of 3 cycle as", options: ["3, 9, 7, 1", "3, 6, 9, 2", "3, 9, 1, 7", "3, 1"], correctIndex: 0, explanation: "3, 9, 27, 81 give 3, 9, 7, 1." },
        { prompt: "Which units digits have cyclicity 1?", options: ["2, 3, 7, 8", "4, 9", "0, 1, 5, 6", "1, 3, 7, 9"], correctIndex: 2, explanation: "Their powers always end in the same digit." },
        { prompt: "Which units digits have cyclicity 2?", options: ["4 and 9", "2 and 8", "3 and 7", "5 and 6"], correctIndex: 0, explanation: "4 → 4, 6 and 9 → 9, 1." },
        { prompt: "The units digit of 416³⁴⁵ is", options: ["4", "6", "1", "5"], correctIndex: 1, explanation: "A number ending in 6 always gives units digit 6." },
        { prompt: "The units digit of 414²³ is", options: ["4", "6", "2", "8"], correctIndex: 0, explanation: "4 raised to an odd power ends in 4." },
        { prompt: "The units digit of 28¹⁴⁶ is", options: ["8", "4", "2", "6"], correctIndex: 1, explanation: "146 ÷ 4 leaves 2; second value of 8, 4, 2, 6 is 4." },
        { prompt: "The units digit of 2¹⁰⁰ is", options: ["2", "4", "8", "6"], correctIndex: 3, explanation: "100 ÷ 4 leaves 0, giving the 4th value, 6." },
        { prompt: "The units digit of 9⁵⁰ is", options: ["9", "1", "3", "7"], correctIndex: 1, explanation: "Even power of 9 ends in 1." },
        { prompt: "In a cycle of length 4, a remainder of 0 gives the", options: ["first value", "second value", "fourth (last) value", "no value"], correctIndex: 2, explanation: "Remainder 0 means a whole number of cycles: the last value." },
        { prompt: "A 24-hour clock is a cyclic variable with modulus", options: ["12", "24", "60", "7"], correctIndex: 1, explanation: "Hours run 0 to 23." },
        { prompt: "It is March. Which month will it be 14 months later?", options: ["April", "May", "March", "June"], correctIndex: 1, explanation: "14 mod 12 = 2; March + 2 = May." },
        { prompt: "The first step in predicting a later value of a cyclic variable is to", options: ["reduce the steps modulo the cycle length", "multiply by 7", "add 12", "square the steps"], correctIndex: 0, explanation: "Only the remainder after full cycles matters." },
        { prompt: "The units digit of 3²² is", options: ["3", "9", "7", "1"], correctIndex: 1, explanation: "22 ÷ 4 leaves 2; second value of 3, 9, 7, 1 is 9." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Today is Friday. What day of the week will it be in 45 days? Show the modular working.", answerKey: "45 = 6 × 7 + 3, so 45 ≡ 3 (mod 7). Friday + 3 days = Monday. 3 marks reduction, 3 marks counting.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Find the units digit of (a) 3⁴⁵ and (b) 8²⁰.", answerKey: "(a) 45 ÷ 4 leaves 1 → first of 3, 9, 7, 1 → 3. (b) 20 ÷ 4 leaves 0 → fourth of 8, 4, 2, 6 → 6. 3 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "A nurse works every 4th day. Her first shift is on a Wednesday. On which day is her 8th shift?", options: ["Wednesday", "Thursday", "Friday", "Tuesday"], correctIndex: 0, answerKey: "The 8th shift is 7 intervals after the 1st: 7 × 4 = 28 days. 28 mod 7 = 0, so it falls on the same day — Wednesday (option A).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain what a cyclic variable is and give three everyday examples with their cycle lengths.", answerKey: "A quantity whose values repeat in a fixed order, returning to the first after the last. Examples: hours on a 12-hour clock (12), days of the week (7), months of the year (12), 24-hour clock (24). 3 marks definition, 1 mark each example.", marks: 6 },
        { type: "ESSAY", prompt: "Write out the units-digit cycles for powers of 2, 3, 7 and 8. Explain the method for finding the units digit of a large power and apply it to 7¹⁰² and 2³¹.", answerKey: "2: 2,4,8,6; 3: 3,9,7,1; 7: 7,9,3,1; 8: 8,4,2,6. Method: divide exponent by 4; remainder 1,2,3 → 1st,2nd,3rd value; remainder 0 → 4th. 7¹⁰²: 102 ÷ 4 leaves 2 → 9. 2³¹: 31 ÷ 4 leaves 3 → 8. 4 marks cycles, 2 marks method, 2 marks each answer.", marks: 10 },
      ],
    },
    // source: GeeksforGeeks — Modular Multiplicative Inverse (https://www.geeksforgeeks.org/dsa/multiplicative-inverse-under-modulo-m/) and GeeksforGeeks — Modular Arithmetic (https://www.geeksforgeeks.org/maths/modular-arithmetic/)
    {
      slug: "division-using-modular-arithmetic",
      title: "Using Modular Arithmetic: Division",
      objective:
        "By the end of the topic, learners should be able to find a modular multiplicative inverse, state when it exists, and use it to divide and to solve simple congruences.",
      estimatedMinutes: 70,
      notes: `## Why division is different
- Addition, subtraction and multiplication can be reduced first; **division cannot**.
- (a ÷ b) mod m is **not** equal to ((a mod m) ÷ (b mod m)) mod m.
- Instead: **(a ÷ b) mod m = (a × b⁻¹) mod m**, where b⁻¹ is the inverse of b modulo m.

## Modular multiplicative inverse
- The **inverse of n modulo m** is the integer x, with 1 ≤ x ≤ m − 1, such that **n × x ≡ 1 (mod m)**.
- The inverse **exists only when gcd(n, m) = 1** (n and m are coprime).
- Example: (5 × 3) mod 7 = 15 mod 7 = 1, so 3 is the inverse of 5 modulo 7.
- Example: (3 × 4) mod 11 = 12 mod 11 = 1, so the inverse of 3 modulo 11 is 4.
- Example: (10 × 12) mod 17 = 120 mod 17 = 1, so the inverse of 10 modulo 17 is 12.
- 2 has **no** inverse modulo 4, because gcd(2, 4) = 2.

## Finding an inverse by trial
1. Multiply n by 1, 2, 3, … , m − 1.
2. Reduce each product modulo m.
3. Stop at the product that leaves remainder 1.

| x | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| 3x | 3 | 6 | 9 | 12 |
| 3x mod 11 | 3 | 6 | 9 | 1 |

## Dividing modulo m
- 4 ÷ 2 (mod 5): inverse of 2 mod 5 is 3 (2 × 3 = 6 ≡ 1). 4 × 3 = 12 ≡ 2. So 4 ÷ 2 ≡ 2 (mod 5).
- 1 ÷ 3 (mod 7): inverse of 3 mod 7 is 5 (3 × 5 = 15 ≡ 1). So 1 ÷ 3 ≡ 5 (mod 7).

## Solving a congruence ax ≡ b (mod m)
1. Find a⁻¹ modulo m.
2. Multiply both sides by a⁻¹: x ≡ b × a⁻¹ (mod m).
3. Reduce and check.
- Example: 3x ≡ 5 (mod 11). a⁻¹ = 4, so x ≡ 20 ≡ 9. Check: 3 × 9 = 27 = 2 × 11 + 5. ✔

## Common errors
- Dividing ordinary numbers and then reducing — wrong in general.
- Looking for an inverse when gcd(n, m) ≠ 1 — none exists.
- Giving an inverse outside 1 to m − 1 (15 also works for 3 mod 11, but the inverse is written as 4).`,
      workedExample: `**Question:** Solve 4x ≡ 7 (mod 9).

**Solution**

*Step 1 — check an inverse exists.*
gcd(4, 9) = 1, so 4 has an inverse modulo 9.

*Step 2 — find the inverse by trial.*
4 × 1 = 4, 4 × 2 = 8, 4 × 3 = 12 ≡ 3, 4 × 4 = 16 ≡ 7, 4 × 5 = 20 ≡ 2, 4 × 6 = 24 ≡ 6, 4 × 7 = 28 ≡ 1. So 4⁻¹ ≡ 7 (mod 9).

*Step 3 — multiply both sides by 7.*
x ≡ 7 × 7 = 49 ≡ 4 (mod 9), since 49 = 5 × 9 + 4.

*Step 4 — check.*
4 × 4 = 16 = 9 + 7, so 16 ≡ 7 (mod 9). ✔

**Answer: x ≡ 4 (mod 9).**`,
      quiz: [
        { prompt: "The inverse of n modulo m is x such that", options: ["n + x ≡ 0", "n × x ≡ 1", "n − x ≡ 1", "n ÷ x ≡ 0"], correctIndex: 1, explanation: "n × x leaves remainder 1." },
        { prompt: "The inverse of n modulo m exists only when", options: ["n > m", "gcd(n, m) = 1", "n is even", "m is even"], correctIndex: 1, explanation: "n and m must be coprime." },
        { prompt: "The inverse of 5 modulo 7 is", options: ["2", "3", "4", "5"], correctIndex: 1, explanation: "5 × 3 = 15 ≡ 1 (mod 7)." },
        { prompt: "The inverse of 3 modulo 11 is", options: ["4", "3", "7", "15"], correctIndex: 0, explanation: "3 × 4 = 12 ≡ 1 (mod 11)." },
        { prompt: "The inverse of 10 modulo 17 is", options: ["7", "10", "12", "5"], correctIndex: 2, explanation: "10 × 12 = 120 = 7 × 17 + 1." },
        { prompt: "The inverse of 2 modulo 5 is", options: ["2", "3", "4", "1"], correctIndex: 1, explanation: "2 × 3 = 6 ≡ 1." },
        { prompt: "Which has no inverse modulo 4?", options: ["1", "2", "3", "5"], correctIndex: 1, explanation: "gcd(2, 4) = 2 ≠ 1." },
        { prompt: "(a ÷ b) mod m is found by", options: ["dividing the remainders", "a × b⁻¹ mod m", "a − b mod m", "b ÷ a mod m"], correctIndex: 1, explanation: "Multiply by the inverse of b." },
        { prompt: "4 ÷ 2 (mod 5) =", options: ["2", "3", "8", "1"], correctIndex: 0, explanation: "4 × 3 = 12 ≡ 2." },
        { prompt: "1 ÷ 3 (mod 7) =", options: ["3", "5", "2", "4"], correctIndex: 1, explanation: "3⁻¹ = 5 since 15 ≡ 1." },
        { prompt: "Solve 3x ≡ 5 (mod 11).", options: ["x ≡ 9", "x ≡ 5", "x ≡ 4", "x ≡ 2"], correctIndex: 0, explanation: "x ≡ 5 × 4 = 20 ≡ 9." },
        { prompt: "The inverse of 4 modulo 9 is", options: ["2", "4", "7", "5"], correctIndex: 2, explanation: "4 × 7 = 28 ≡ 1." },
        { prompt: "The inverse of 7 modulo 10 is", options: ["3", "7", "1", "9"], correctIndex: 0, explanation: "7 × 3 = 21 ≡ 1." },
        { prompt: "The inverse of 2 modulo 9 is", options: ["4", "5", "7", "2"], correctIndex: 1, explanation: "2 × 5 = 10 ≡ 1." },
        { prompt: "The inverse of 1 modulo any m > 1 is", options: ["0", "1", "m", "m − 1"], correctIndex: 1, explanation: "1 × 1 = 1." },
        { prompt: "An inverse modulo m is written in the range", options: ["0 to m", "1 to m − 1", "−m to m", "any integer"], correctIndex: 1, explanation: "x lies between 1 and m − 1." },
        { prompt: "Does 6 have an inverse modulo 9?", options: ["Yes, 6", "Yes, 3", "No", "Yes, 1"], correctIndex: 2, explanation: "gcd(6, 9) = 3, so no inverse." },
        { prompt: "Solve 2x ≡ 1 (mod 5).", options: ["x ≡ 3", "x ≡ 2", "x ≡ 4", "x ≡ 1"], correctIndex: 0, explanation: "x ≡ 1 × 3 = 3; check 6 ≡ 1." },
        { prompt: "Solve 5x ≡ 2 (mod 7).", options: ["x ≡ 6", "x ≡ 3", "x ≡ 2", "x ≡ 5"], correctIndex: 0, explanation: "x ≡ 2 × 3 = 6; check 30 = 4 × 7 + 2." },
        { prompt: "Why can't 6 ÷ 2 (mod 4) be done with an inverse?", options: ["2 has no inverse mod 4", "6 is too large", "4 is prime", "the answer is negative"], correctIndex: 0, explanation: "gcd(2, 4) = 2, so 2⁻¹ does not exist." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Find the inverse of 3 modulo 7 by trial, showing a table of products.", answerKey: "3×1=3, 3×2=6, 3×3=9≡2, 3×4=12≡5, 3×5=15≡1. Inverse is 5. 4 marks table, 2 marks answer.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Solve 7x ≡ 3 (mod 10).", answerKey: "gcd(7,10)=1. 7⁻¹ ≡ 3 (21 ≡ 1). x ≡ 3 × 3 = 9. Check 63 ≡ 3 (mod 10). 2 marks inverse, 2 marks multiplication, 2 marks check.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which number has an inverse modulo 12?", options: ["4", "6", "5", "8"], correctIndex: 2, answerKey: "Only 5 is coprime to 12 (gcd(5,12)=1); 5 × 5 = 25 ≡ 1. Option C.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why (a ÷ b) mod m cannot be found by dividing a mod m by b mod m, and state the correct method.", answerKey: "Division does not follow the reduce-then-operate rule; the reduced values need not divide exactly. Correct: (a ÷ b) mod m = (a × b⁻¹) mod m where b × b⁻¹ ≡ 1 (mod m), which needs gcd(b, m) = 1. 3 marks reason, 3 marks method.", marks: 6 },
        { type: "ESSAY", prompt: "Define the modular multiplicative inverse, state the condition for it to exist, find the inverses of 3 modulo 11 and 10 modulo 17, and use one of them to solve 10x ≡ 5 (mod 17).", answerKey: "Inverse x of n mod m: n × x ≡ 1 (mod m), 1 ≤ x ≤ m − 1; exists iff gcd(n, m) = 1. 3⁻¹ ≡ 4 (mod 11) since 12 ≡ 1; 10⁻¹ ≡ 12 (mod 17) since 120 = 7 × 17 + 1. 10x ≡ 5: x ≡ 5 × 12 = 60 ≡ 9 (60 = 3 × 17 + 9). Check: 90 = 5 × 17 + 5 ✔. 2 marks definition, 2 marks condition, 3 marks inverses, 3 marks solution.", marks: 10 },
      ],
    },
    // source: OpenStax — College Algebra 2e, 1.2 Exponents and Scientific Notation (https://openstax.org/books/college-algebra-2e/pages/1-2-exponents-and-scientific-notation) and Siyavula — Grade 11, 1.1 Laws of exponents (https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-01)
    {
      slug: "indices",
      title: "Indices: Notation and Laws",
      objective:
        "By the end of the topic, learners should be able to write repeated multiplication in index notation and apply the product, quotient and power laws of indices.",
      estimatedMinutes: 70,
      notes: `## Index notation
- aⁿ means a multiplied by itself n times: aⁿ = a × a × … × a (n factors).
- **Base** — the number being multiplied (a). **Index** (exponent, power) — the number of factors (n).
- 2⁵ = 2 × 2 × 2 × 2 × 2 = 32. 10³ = 1000.
- a¹ = a.

## The laws of indices
| Law | Rule | Example |
| --- | --- | --- |
| Product | aᵐ × aⁿ = aᵐ⁺ⁿ | t⁵ × t³ = t⁸ |
| Quotient | aᵐ ÷ aⁿ = aᵐ⁻ⁿ | t²³ ÷ t¹⁵ = t⁸ |
| Power of a power | (aᵐ)ⁿ = aᵐⁿ | (x²)⁷ = x¹⁴ |
| Power of a product | (ab)ⁿ = aⁿbⁿ | (ab²)³ = a³b⁶ |
| Power of a quotient | (a/b)ⁿ = aⁿ/bⁿ | (4/z¹¹)³ = 64/z³³ |

- The product and quotient laws apply only when the **bases are the same**.

## Applying the laws
1. Deal with number coefficients first.
2. Group each base and apply the laws to that base.
3. Give final answers with **positive indices**.
- Example: 8k³x² ÷ (xk)² = 8k³x² ÷ (x²k²) = 8k.
- Example: (2⁹ᵃ × 4⁶ᵃ × 2²) ÷ 8⁵ᵃ — write every base as a power of 2: 2⁹ᵃ × 2¹²ᵃ × 2² ÷ 2¹⁵ᵃ = 2⁶ᵃ⁺².

## Common errors
- **Multiplying the bases** — 2³ × 2⁴ = 2⁷, not 4⁷.
- **Multiplying indices in a product** — aᵐ × aⁿ adds; only (aᵐ)ⁿ multiplies.
- **Using the laws with different bases** — 2³ × 3² cannot be combined into one power.`,
      workedExample: `**Question:** Simplify (3x²y)³ × 2xy⁴ ÷ (6x⁵y²).

**Solution**

*Step 1 — power of a product.*
(3x²y)³ = 3³ × x⁶ × y³ = 27x⁶y³.

*Step 2 — product law.*
27x⁶y³ × 2xy⁴ = 54x⁷y⁷.

*Step 3 — quotient law.*
54x⁷y⁷ ÷ 6x⁵y² = 9x⁷⁻⁵y⁷⁻² = 9x²y⁵.

**Answer: 9x²y⁵**`,
      quiz: [
        { prompt: "In aⁿ, the number n is called the", options: ["base", "index", "coefficient", "root"], correctIndex: 1, explanation: "n is the index (exponent, power)." },
        { prompt: "Evaluate 2⁵.", options: ["10", "25", "32", "16"], correctIndex: 2, explanation: "2 × 2 × 2 × 2 × 2 = 32." },
        { prompt: "Simplify t⁵ × t³.", options: ["t¹⁵", "t⁸", "t²", "2t⁸"], correctIndex: 1, explanation: "Add the indices: 5 + 3 = 8." },
        { prompt: "Simplify t²³ ÷ t¹⁵.", options: ["t⁸", "t³⁸", "t", "t¹⁵"], correctIndex: 0, explanation: "Subtract the indices: 23 − 15 = 8." },
        { prompt: "Simplify (x²)⁷.", options: ["x⁹", "x¹⁴", "x⁵", "2x⁷"], correctIndex: 1, explanation: "Multiply the indices: 2 × 7 = 14." },
        { prompt: "Simplify (ab²)³.", options: ["ab⁶", "a³b⁵", "a³b⁶", "3ab⁶"], correctIndex: 2, explanation: "Each factor is cubed: a³ and b⁶." },
        { prompt: "Simplify (4/z¹¹)³.", options: ["12/z³³", "64/z³³", "64/z¹⁴", "4/z³³"], correctIndex: 1, explanation: "4³ = 64 and (z¹¹)³ = z³³." },
        { prompt: "2³ × 2⁴ equals", options: ["4⁷", "2⁷", "2¹²", "4¹²"], correctIndex: 1, explanation: "Same base, add indices." },
        { prompt: "Simplify (3²)⁴.", options: ["3⁶", "3⁸", "3¹⁶", "9⁴ only"], correctIndex: 1, explanation: "2 × 4 = 8." },
        { prompt: "Simplify (2x)³.", options: ["2x³", "6x³", "8x³", "8x"], correctIndex: 2, explanation: "2³x³ = 8x³." },
        { prompt: "Simplify 8k³x² ÷ (xk)².", options: ["8k", "8kx", "4k", "8k²"], correctIndex: 0, explanation: "(xk)² = x²k²; 8k³x² ÷ x²k² = 8k." },
        { prompt: "a¹ equals", options: ["1", "0", "a", "undefined"], correctIndex: 2, explanation: "One factor of a is a." },
        { prompt: "Which can be written as a single power using the product law?", options: ["2³ × 3²", "5² × 5⁴", "2³ + 2⁴", "3² × 2³"], correctIndex: 1, explanation: "Only same-base products combine: 5⁶." },
        { prompt: "Simplify y⁷ × y × y².", options: ["y⁹", "y¹⁰", "y¹⁴", "y⁸"], correctIndex: 1, explanation: "7 + 1 + 2 = 10." },
        { prompt: "Simplify (a³)² × a.", options: ["a⁶", "a⁷", "a⁵", "a⁹"], correctIndex: 1, explanation: "a⁶ × a¹ = a⁷." },
        { prompt: "Simplify 12m⁸ ÷ 4m².", options: ["3m⁴", "3m⁶", "8m⁶", "3m¹⁰"], correctIndex: 1, explanation: "12 ÷ 4 = 3 and 8 − 2 = 6." },
        { prompt: "Write 3 × 3 × 3 × 3 in index form.", options: ["3⁴", "4³", "12", "3 × 4"], correctIndex: 0, explanation: "Four factors of 3." },
        { prompt: "Write 8 as a power of 2.", options: ["2²", "2³", "2⁴", "4²"], correctIndex: 1, explanation: "2³ = 8." },
        { prompt: "Simplify (x/3)².", options: ["x²/9", "x²/3", "x/9", "2x/6"], correctIndex: 0, explanation: "Square top and bottom." },
        { prompt: "Simplify (2⁹ᵃ × 4⁶ᵃ × 2²) ÷ 8⁵ᵃ.", options: ["2⁶ᵃ⁺²", "2³⁶ᵃ", "2⁶ᵃ", "4⁶ᵃ⁺²"], correctIndex: 0, explanation: "2⁹ᵃ⁺¹²ᵃ⁺²⁻¹⁵ᵃ = 2⁶ᵃ⁺²." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Simplify (2³ × 2⁵) ÷ 2⁴, giving a single power and its value.", answerKey: "2³⁺⁵ = 2⁸; 2⁸⁻⁴ = 2⁴ = 16. 2 marks product law, 2 marks quotient law, 2 marks value.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Simplify (a) (5p³q)² and (b) 18a⁵b³ ÷ 6a²b.", answerKey: "(a) 25p⁶q². (b) 3a³b². 3 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Simplify (3x²)³.", options: ["9x⁶", "27x⁶", "27x⁵", "3x⁶"], correctIndex: 1, answerKey: "3³ × x⁶ = 27x⁶ (option B).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why 2³ × 2⁴ = 2⁷ but 2³ × 3⁴ cannot be written as a single power.", answerKey: "The product law aᵐ × aⁿ = aᵐ⁺ⁿ needs the same base: 2³ × 2⁴ is 7 factors of 2. 2³ × 3⁴ has different bases (2 and 3), so the law does not apply. 3 marks each part.", marks: 6 },
        { type: "ESSAY", prompt: "State the five laws of indices with an example of each, and use them to simplify (2a³b)⁴ ÷ (4a⁵b²).", answerKey: "Product aᵐaⁿ = aᵐ⁺ⁿ; quotient aᵐ ÷ aⁿ = aᵐ⁻ⁿ; power (aᵐ)ⁿ = aᵐⁿ; product to power (ab)ⁿ = aⁿbⁿ; quotient to power (a/b)ⁿ = aⁿ/bⁿ — each with a correct example. (2a³b)⁴ = 16a¹²b⁴; ÷ 4a⁵b² = 4a⁷b². 5 marks laws, 5 marks simplification.", marks: 10 },
      ],
    },
    // source: OpenStax — College Algebra 2e, 6.1 Exponential Functions (https://openstax.org/books/college-algebra-2e/pages/6-1-exponential-functions)
    {
      slug: "exponential-growth",
      title: "Exponential Growth",
      objective:
        "By the end of the topic, learners should be able to recognise exponential growth and decay, write a model of the form f(x) = abˣ, and contrast it with linear growth.",
      estimatedMinutes: 70,
      notes: `## Exponential functions
- An **exponential function** has the form **f(x) = abˣ**, where a ≠ 0 is the **initial value** and b > 0, b ≠ 1, is the **growth factor**.
- Domain: all real numbers. Range: all positive real numbers (when a > 0).
- **Exponential growth** — b > 1: the quantity increases by the same **multiplicative** factor in equal time intervals.
- **Exponential decay** — 0 < b < 1: the quantity decreases by the same multiplicative factor.

## Linear versus exponential growth
- **Linear** growth adds the same amount each step (constant additive change).
- **Exponential** growth multiplies by the same factor each step (constant multiplicative change).
| x | f(x) = 2ˣ | g(x) = 2x |
| --- | --- | --- |
| 0 | 1 | 0 |
| 1 | 2 | 2 |
| 4 | 16 | 8 |
| 6 | 64 | 12 |

- Exponential growth eventually **dwarfs** linear growth.

## Percentage growth
- A rate of r % per period gives growth factor b = 1 + r/100.
- Example: India's population in 2013 was 1.25 billion, growing 1.2 % per year: P(t) = 1.25(1.012)ᵗ, t in years after 2013.
- For 2031, t = 18: P(18) = 1.25(1.012)¹⁸ ≈ 1.549 billion.
- A decay of r % gives b = 1 − r/100.

## Evaluating an exponential function
- f(x) = 5(3)ˣ⁺¹; f(2) = 5(3)³ = 5 × 27 = 135.
- A population of 500 doubling every year: P(n) = 500 × 2ⁿ, giving 500, 1000, 2000, 4000, …

## Common errors
- Using the rate (0.012) instead of the factor (1.012).
- Multiplying a by b before raising to the power: 5(3)³ is 5 × 27, not 15³.`,
      workedExample: `**Question:** A town of 20 000 people grows by 5 % each year. Write a model and find the population after 3 years.

**Solution**

*Step 1 — identify a and b.*
Initial value a = 20 000. Growth factor b = 1 + 0.05 = 1.05.

*Step 2 — write the model.*
P(t) = 20 000(1.05)ᵗ.

*Step 3 — substitute t = 3.*
P(3) = 20 000 × 1.05³ = 20 000 × 1.157625 = 23 152.5.

**Answer: P(t) = 20 000(1.05)ᵗ; about 23 153 people after 3 years.**`,
      quiz: [
        { prompt: "The general exponential function is", options: ["f(x) = ax + b", "f(x) = abˣ", "f(x) = ax²", "f(x) = a/x"], correctIndex: 1, explanation: "a is the initial value and b the growth factor." },
        { prompt: "In f(x) = abˣ, exponential growth occurs when", options: ["b > 1", "0 < b < 1", "b = 1", "b < 0"], correctIndex: 0, explanation: "A factor greater than 1 increases the quantity." },
        { prompt: "In f(x) = abˣ, exponential decay occurs when", options: ["b > 1", "0 < b < 1", "a < 0", "b = 0"], correctIndex: 1, explanation: "A factor less than 1 decreases the quantity." },
        { prompt: "Linear growth has a constant", options: ["multiplicative change", "additive change", "growth factor", "percentage rate"], correctIndex: 1, explanation: "The same amount is added each step." },
        { prompt: "Exponential growth has a constant", options: ["additive change", "multiplicative change", "difference", "slope"], correctIndex: 1, explanation: "It is multiplied by the same factor each step." },
        { prompt: "f(x) = 5(3)ˣ⁺¹. Find f(2).", options: ["45", "135", "75", "405"], correctIndex: 1, explanation: "5 × 3³ = 135." },
        { prompt: "For f(x) = 2ˣ, f(6) =", options: ["12", "36", "64", "32"], correctIndex: 2, explanation: "2⁶ = 64." },
        { prompt: "For g(x) = 2x, g(6) =", options: ["12", "64", "8", "36"], correctIndex: 0, explanation: "2 × 6 = 12." },
        { prompt: "A growth rate of 1.2 % per year gives a growth factor of", options: ["1.2", "0.012", "1.012", "0.988"], correctIndex: 2, explanation: "b = 1 + 0.012." },
        { prompt: "A decay of 20 % per year gives a factor of", options: ["0.2", "0.8", "1.2", "20"], correctIndex: 1, explanation: "b = 1 − 0.2." },
        { prompt: "A population of 500 doubles each year. After 3 years it is", options: ["1500", "3000", "4000", "8000"], correctIndex: 2, explanation: "500 × 2³ = 4000." },
        { prompt: "The range of f(x) = 3ˣ is", options: ["all real numbers", "positive real numbers", "x ≥ 0", "negative numbers"], correctIndex: 1, explanation: "A positive base to any power is positive." },
        { prompt: "The domain of f(x) = 3ˣ is", options: ["x > 0", "all real numbers", "x ≥ 1", "integers only"], correctIndex: 1, explanation: "Any real x can be used." },
        { prompt: "In P(t) = 1.25(1.012)ᵗ, 1.25 represents", options: ["the growth rate", "the initial population (billions)", "the time", "the final population"], correctIndex: 1, explanation: "a is the value when t = 0." },
        { prompt: "Which grows fastest for large x?", options: ["2x", "x + 100", "2ˣ", "10x"], correctIndex: 2, explanation: "Exponential growth dwarfs linear growth." },
        { prompt: "A culture of 200 cells triples every hour. After 4 hours there are", options: ["2400", "16 200", "800", "5400"], correctIndex: 1, explanation: "200 × 3⁴ = 16 200." },
        { prompt: "Why can b not equal 1 in f(x) = abˣ?", options: ["1ˣ = 1 so f is constant", "1 is negative", "it gives decay", "it is undefined"], correctIndex: 0, explanation: "1 to any power is 1, giving a constant function." },
        { prompt: "1000 grows by 10 % a year. After 3 years it is", options: ["1300", "1331", "1030", "1210"], correctIndex: 1, explanation: "1000 × 1.1³ = 1331." },
        { prompt: "3000 decays by 20 % a year. After 2 years it is", options: ["1800", "1920", "2400", "1200"], correctIndex: 1, explanation: "3000 × 0.8² = 1920." },
        { prompt: "A common mistake when evaluating 5(3)³ is to compute", options: ["5 × 27", "15³", "135", "5 × 3 × 3 × 3"], correctIndex: 1, explanation: "The power applies to 3 only, not to 5 × 3." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "A bacteria culture starts at 200 cells and triples every hour. Write a formula and find the number after 4 hours.", answerKey: "N = 200 × 3ⁿ. N(4) = 200 × 81 = 16 200 cells. 3 marks formula, 3 marks value.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "A car worth 10 000 loses 15 % of its value each year. Write a model and find its value after 2 years.", answerKey: "V(t) = 10 000(0.85)ᵗ. V(2) = 10 000 × 0.7225 = 7225. 3 marks model, 3 marks value.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which function shows exponential decay?", options: ["f(x) = 4(1.3)ˣ", "f(x) = 4(0.7)ˣ", "f(x) = 4x + 0.7", "f(x) = 0.7x"], correctIndex: 1, answerKey: "b = 0.7 lies between 0 and 1 (option B).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Complete a table of f(x) = 2ˣ and g(x) = 2x for x = 0, 1, 2, 3, 4 and state which grows faster.", answerKey: "f: 1, 2, 4, 8, 16; g: 0, 2, 4, 6, 8. f(x) = 2ˣ grows faster (it doubles; g adds 2). 4 marks table, 2 marks conclusion.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the difference between linear and exponential growth. Using P(t) = 1.25(1.012)ᵗ for India's population (billions, t years after 2013), explain the meaning of 1.25 and 1.012 and estimate the population in 2031.", answerKey: "Linear: constant amount added each step; exponential: constant factor multiplied each step, so it eventually dwarfs linear growth. 1.25 = population in 2013 (initial value); 1.012 = growth factor for 1.2 % annual growth. 2031: t = 18; P = 1.25(1.012)¹⁸ ≈ 1.549 billion. 4 marks comparison, 3 marks interpretation, 3 marks calculation.", marks: 10 },
      ],
    },
    // source: OpenStax — College Algebra 2e, 1.2 Exponents and Scientific Notation, "Using the Negative Rule of Exponents" (https://openstax.org/books/college-algebra-2e/pages/1-2-exponents-and-scientific-notation) and Siyavula — Grade 11, 1.1 Laws of exponents (https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-01)
    {
      slug: "negative-powers",
      title: "Negative Powers",
      objective:
        "By the end of the topic, learners should be able to interpret and evaluate negative indices and rewrite expressions with positive indices.",
      estimatedMinutes: 60,
      notes: `## The negative rule
- For any non-zero real number a and natural number n: **a⁻ⁿ = 1/aⁿ**.
- A negative index means **reciprocal**; it does not make the number negative.
- 2⁻³ = 1/2³ = 1/8. 10⁻² = 1/100. 3⁻¹ = 1/3.

## Where the rule comes from
- By the quotient law, θ³ ÷ θ¹⁰ = θ³⁻¹⁰ = θ⁻⁷.
- Cancelling factors directly gives 1/θ⁷.
- So θ⁻⁷ = 1/θ⁷.

## Useful forms
| Expression | Positive-index form |
| --- | --- |
| a⁻ⁿ | 1/aⁿ |
| 1/a⁻ⁿ | aⁿ |
| (a/b)⁻ⁿ | (b/a)ⁿ |
| xa⁻² | x/a² |

- A factor with a negative index can move across the fraction line and its index changes sign.
- (2/3)⁻² = (3/2)² = 9/4.

## Evaluating expressions
- (2⁻² − 5⁻¹)⁻²: 2⁻² = 1/4 and 5⁻¹ = 1/5; 1/4 − 1/5 = 1/20; (1/20)⁻² = 20² = **400**.
- Final answers are written with **positive indices**.

## Common errors
- Writing 2⁻³ = −8 or −6.
- Moving a whole sum across the fraction line: (a + b)⁻¹ = 1/(a + b), **not** 1/a + 1/b.
- Applying the rule to a coefficient that has no negative index: 3x⁻² = 3/x², not 1/(3x²).`,
      workedExample: `**Question:** Simplify 6a⁻³b² ÷ (2a²b⁻⁴), giving the answer with positive indices.

**Solution**

*Step 1 — divide the coefficients.*
6 ÷ 2 = 3.

*Step 2 — quotient law for a.*
a⁻³ ÷ a² = a⁻³⁻² = a⁻⁵.

*Step 3 — quotient law for b.*
b² ÷ b⁻⁴ = b²⁻⁽⁻⁴⁾ = b⁶.

*Step 4 — write with positive indices.*
3a⁻⁵b⁶ = 3b⁶/a⁵.

**Answer: 3b⁶/a⁵**`,
      quiz: [
        { prompt: "a⁻ⁿ equals", options: ["−aⁿ", "1/aⁿ", "−1/aⁿ", "aⁿ"], correctIndex: 1, explanation: "A negative index means reciprocal." },
        { prompt: "Write 2⁻³ as a fraction.", options: ["−8", "1/8", "−6", "1/6"], correctIndex: 1, explanation: "1/2³ = 1/8." },
        { prompt: "Evaluate 10⁻².", options: ["−100", "1/100", "0.2", "−20"], correctIndex: 1, explanation: "1/10² = 1/100." },
        { prompt: "Evaluate 3⁻¹.", options: ["−3", "1/3", "3", "0"], correctIndex: 1, explanation: "3⁻¹ = 1/3." },
        { prompt: "θ³ ÷ θ¹⁰ equals", options: ["θ⁷", "θ⁻⁷", "θ¹³", "θ³⁰"], correctIndex: 1, explanation: "3 − 10 = −7." },
        { prompt: "θ⁻⁷ written with a positive index is", options: ["−θ⁷", "1/θ⁷", "θ⁷", "7/θ"], correctIndex: 1, explanation: "Reciprocal of θ⁷." },
        { prompt: "1/x⁻⁴ equals", options: ["x⁴", "1/x⁴", "−x⁴", "x⁻⁴"], correctIndex: 0, explanation: "Moving across the fraction line changes the sign." },
        { prompt: "(2/3)⁻² equals", options: ["4/9", "9/4", "−4/9", "3/2"], correctIndex: 1, explanation: "(3/2)² = 9/4." },
        { prompt: "(2⁻² − 5⁻¹)⁻² equals", options: ["20", "400", "1/400", "1/20"], correctIndex: 1, explanation: "1/4 − 1/5 = 1/20; (1/20)⁻² = 400." },
        { prompt: "3x⁻² equals", options: ["1/(3x²)", "3/x²", "−3x²", "9/x²"], correctIndex: 1, explanation: "Only x has the negative index." },
        { prompt: "(a + b)⁻¹ equals", options: ["1/a + 1/b", "1/(a + b)", "a⁻¹b⁻¹", "−a − b"], correctIndex: 1, explanation: "The whole sum is reciprocated." },
        { prompt: "Evaluate 4⁻² .", options: ["1/16", "−16", "1/8", "−8"], correctIndex: 0, explanation: "1/4² = 1/16." },
        { prompt: "Simplify x⁵ × x⁻⁸.", options: ["x³", "1/x³", "x⁻⁴⁰", "x¹³"], correctIndex: 1, explanation: "x⁻³ = 1/x³." },
        { prompt: "Evaluate (1/2)⁻³.", options: ["1/8", "8", "−8", "6"], correctIndex: 1, explanation: "(2/1)³ = 8." },
        { prompt: "Simplify y⁻² ÷ y⁻⁵.", options: ["y³", "y⁻⁷", "y⁷", "y⁻³"], correctIndex: 0, explanation: "−2 − (−5) = 3." },
        { prompt: "The negative rule requires a to be", options: ["positive", "non-zero", "an integer", "greater than 1"], correctIndex: 1, explanation: "1/aⁿ is undefined for a = 0." },
        { prompt: "Evaluate 5⁰ + 5⁻¹.", options: ["1.2", "6", "0.2", "5.2"], correctIndex: 0, explanation: "1 + 1/5 = 1.2." },
        { prompt: "Write 1/27 as a power of 3.", options: ["3³", "3⁻³", "−3³", "3⁻⁹"], correctIndex: 1, explanation: "27 = 3³, so 1/27 = 3⁻³." },
        { prompt: "Write 0.001 as a power of 10.", options: ["10³", "10⁻³", "10⁻²", "10⁻⁴"], correctIndex: 1, explanation: "0.001 = 1/1000 = 10⁻³." },
        { prompt: "Simplify (x⁻²)³.", options: ["x⁻⁶", "x⁻⁵", "x⁶", "x¹"], correctIndex: 0, explanation: "(−2) × 3 = −6, i.e. 1/x⁶." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Evaluate without a calculator: (a) 2⁻⁴, (b) (3/4)⁻², (c) 10⁻³.", answerKey: "(a) 1/16. (b) 16/9. (c) 1/1000 = 0.001. 2 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Simplify (2⁻² − 5⁻¹)⁻², showing every step.", answerKey: "2⁻² = 1/4, 5⁻¹ = 1/5; 1/4 − 1/5 = 5/20 − 4/20 = 1/20; (1/20)⁻² = 20² = 400. 2 marks each stage.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Simplify 4x⁻³y² ÷ 2x²y⁻¹ with positive indices.", options: ["2y³/x⁵", "2y/x", "2x⁵y³", "2y³/x"], correctIndex: 0, answerKey: "4 ÷ 2 = 2; x⁻³⁻² = x⁻⁵; y²⁻⁽⁻¹⁾ = y³ → 2y³/x⁵ (option A).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Use the quotient law on c³ ÷ c³ and on c² ÷ c⁵ to explain why c⁰ = 1 and c⁻³ = 1/c³.", answerKey: "c³ ÷ c³ = c⁰ but also equals 1, so c⁰ = 1. c² ÷ c⁵ = c⁻³, and cancelling gives 1/c³, so c⁻³ = 1/c³. 3 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "State the negative rule of indices, explain the common errors learners make with it, and simplify (a⁻²b³)⁻² × a⁵b.", answerKey: "a⁻ⁿ = 1/aⁿ (a ≠ 0). Errors: treating a negative index as a negative number; reciprocating a sum term by term; applying the index to an unindexed coefficient. (a⁻²b³)⁻² = a⁴b⁻⁶; × a⁵b = a⁹b⁻⁵ = a⁹/b⁵. 2 marks rule, 3 marks errors, 5 marks simplification.", marks: 10 },
      ],
    },
    // source: Siyavula — Grade 10, 2.4 Exponential equations (https://www.siyavula.com/read/za/mathematics/grade-10/exponents/02-exponents-03) and OpenStax — College Algebra 2e, 1.2 Exponents and Scientific Notation (https://openstax.org/books/college-algebra-2e/pages/1-2-exponents-and-scientific-notation)
    {
      slug: "properties-of-indices",
      title: "Properties of Indices",
      objective:
        "By the end of the topic, learners should be able to use the zero-index property and the equal-base property of indices to simplify expressions and solve exponential equations.",
      estimatedMinutes: 70,
      notes: `## Zero index
- For any non-zero real number a: **a⁰ = 1**.
- Reason: c³ ÷ c³ = c³⁻³ = c⁰, and any non-zero number divided by itself is 1.
- 0⁰ is **undefined**.
- 7⁰ = 1; (5x)⁰ = 1 (x ≠ 0); 5x⁰ = 5 × 1 = 5.

## Summary of properties
| Property | Statement |
| --- | --- |
| Zero index | a⁰ = 1, a ≠ 0 |
| Negative index | a⁻ⁿ = 1/aⁿ, a ≠ 0 |
| Product | aᵐ × aⁿ = aᵐ⁺ⁿ |
| Quotient | aᵐ ÷ aⁿ = aᵐ⁻ⁿ |
| Power | (aᵐ)ⁿ = aᵐⁿ |
| Equal bases | if aˣ = aʸ (a > 0, a ≠ 1) then x = y |

## Solving exponential equations (same base)
1. Write both sides as powers of the **same base**.
2. Equate the indices.
3. Solve the resulting equation and check.
- 3ˣ⁺¹ = 9 → 3ˣ⁺¹ = 3² → x + 1 = 2 → **x = 1**.
- 3ᵗ = 1 → 3ᵗ = 3⁰ → **t = 0**.

## Equations needing factorisation
- 5ᵗ + 3 × 5ᵗ⁺¹ = 400 → 5ᵗ(1 + 15) = 400 → 5ᵗ × 16 = 400 → 5ᵗ = 25 = 5² → **t = 2**.
- 3²ˣ − 80 × 3ˣ − 81 = 0 → (3ˣ − 81)(3ˣ + 1) = 0 → 3ˣ = 81 = 3⁴ → **x = 4** (3ˣ = −1 has no solution, since 3ˣ > 0).

## Common errors
- Writing a⁰ = 0.
- Equating indices when the bases are different (2ˣ = 3ʸ does not give x = y).
- Keeping the impossible root 3ˣ = −1.`,
      workedExample: `**Question:** Solve 2ˣ⁺³ = 32 and 9ˣ = 27.

**Solution**

*Step 1 — write 32 as a power of 2.*
32 = 2⁵, so 2ˣ⁺³ = 2⁵.

*Step 2 — equate indices.*
x + 3 = 5, so x = 2.

*Step 3 — write 9 and 27 as powers of 3.*
9ˣ = (3²)ˣ = 3²ˣ and 27 = 3³, so 3²ˣ = 3³.

*Step 4 — equate indices.*
2x = 3, so x = 3/2.

*Check:* 2⁵ = 32 ✔; 9^(3/2) = (√9)³ = 27 ✔.

**Answer: x = 2; x = 3/2**`,
      quiz: [
        { prompt: "What is 7⁰?", options: ["0", "1", "7", "undefined"], correctIndex: 1, explanation: "Any non-zero base to the power 0 is 1." },
        { prompt: "0⁰ is", options: ["0", "1", "undefined", "infinity"], correctIndex: 2, explanation: "The zero index rule needs a ≠ 0." },
        { prompt: "5x⁰ (x ≠ 0) equals", options: ["1", "5", "0", "5x"], correctIndex: 1, explanation: "Only x is raised to 0: 5 × 1." },
        { prompt: "(5x)⁰ (x ≠ 0) equals", options: ["1", "5", "0", "5x"], correctIndex: 0, explanation: "The whole bracket is raised to 0." },
        { prompt: "c³ ÷ c³ shows that", options: ["c⁰ = 0", "c⁰ = 1", "c⁰ = c", "c⁶ = 1"], correctIndex: 1, explanation: "c³⁻³ = c⁰ and the quotient is 1." },
        { prompt: "If aˣ = aʸ with a > 0, a ≠ 1, then", options: ["x = y", "x = −y", "xy = 1", "x + y = 0"], correctIndex: 0, explanation: "Equal powers of the same base have equal indices." },
        { prompt: "Solve 3ˣ⁺¹ = 9.", options: ["x = 1", "x = 2", "x = 3", "x = 8"], correctIndex: 0, explanation: "x + 1 = 2." },
        { prompt: "Solve 3ᵗ = 1.", options: ["t = 1", "t = 0", "t = 3", "no solution"], correctIndex: 1, explanation: "1 = 3⁰." },
        { prompt: "Solve 2ˣ = 64.", options: ["5", "6", "8", "32"], correctIndex: 1, explanation: "2⁶ = 64." },
        { prompt: "Solve 5ᵗ + 3 × 5ᵗ⁺¹ = 400.", options: ["t = 1", "t = 2", "t = 3", "t = 4"], correctIndex: 1, explanation: "5ᵗ × 16 = 400, so 5ᵗ = 25." },
        { prompt: "Solve 3²ˣ − 80 × 3ˣ − 81 = 0.", options: ["x = 4", "x = 2", "x = −1", "x = 81"], correctIndex: 0, explanation: "(3ˣ − 81)(3ˣ + 1) = 0 gives 3ˣ = 81." },
        { prompt: "Why is 3ˣ = −1 rejected?", options: ["3ˣ is always positive", "x must be negative", "3 is odd", "it gives x = 0"], correctIndex: 0, explanation: "A positive base to any power is positive." },
        { prompt: "Solve 4ˣ = 8.", options: ["x = 2", "x = 3/2", "x = 2/3", "x = 3"], correctIndex: 1, explanation: "2²ˣ = 2³, so x = 3/2." },
        { prompt: "Solve 10ˣ = 0.01.", options: ["x = 2", "x = −2", "x = −1", "x = 1/2"], correctIndex: 1, explanation: "0.01 = 10⁻²." },
        { prompt: "Solve 2ˣ = 1/8.", options: ["x = 3", "x = −3", "x = 1/3", "x = −1/3"], correctIndex: 1, explanation: "1/8 = 2⁻³." },
        { prompt: "Solve 25ˣ = 5.", options: ["x = 2", "x = 1/2", "x = 5", "x = −2"], correctIndex: 1, explanation: "5²ˣ = 5¹." },
        { prompt: "Simplify 4a⁰ + (4a)⁰ (a ≠ 0).", options: ["2", "5", "8", "4a + 1"], correctIndex: 1, explanation: "4 × 1 + 1 = 5." },
        { prompt: "The first step in solving 8ˣ = 32 is to", options: ["write both sides as powers of 2", "divide by 8", "take square roots", "multiply by x"], correctIndex: 0, explanation: "8 = 2³ and 32 = 2⁵, so 3x = 5." },
        { prompt: "Solve 8ˣ = 32.", options: ["x = 4", "x = 5/3", "x = 3/5", "x = 2"], correctIndex: 1, explanation: "2³ˣ = 2⁵ gives x = 5/3." },
        { prompt: "Solve 7ˣ⁻² = 49.", options: ["x = 2", "x = 4", "x = 0", "x = 7"], correctIndex: 1, explanation: "x − 2 = 2." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Solve (a) 2ˣ⁻¹ = 16 and (b) 27ˣ = 9.", answerKey: "(a) 2ˣ⁻¹ = 2⁴, x = 5. (b) 3³ˣ = 3², x = 2/3. 3 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Solve 2ˣ⁺² − 2ˣ = 24.", answerKey: "2ˣ(4 − 1) = 24, so 2ˣ = 8 = 2³, x = 3. Check: 32 − 8 = 24. 2 marks factorising, 2 marks simplifying, 2 marks answer.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Evaluate 3⁰ + 2⁻¹ + 4⁰.", options: ["2.5", "1.5", "7", "0.5"], correctIndex: 0, answerKey: "1 + 0.5 + 1 = 2.5 (option A).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Solve 2²ˣ − 5 × 2ˣ + 4 = 0.", answerKey: "Let k = 2ˣ: k² − 5k + 4 = 0, (k − 1)(k − 4) = 0. 2ˣ = 1 → x = 0; 2ˣ = 4 → x = 2. 2 marks substitution, 2 marks factorising, 2 marks both answers.", marks: 6 },
        { type: "ESSAY", prompt: "Explain why a⁰ = 1, state the equal-bases property, and solve 3²ˣ − 80 × 3ˣ − 81 = 0, explaining why one factor gives no solution.", answerKey: "aⁿ ÷ aⁿ = aⁿ⁻ⁿ = a⁰ and also = 1, so a⁰ = 1 (a ≠ 0). If aˣ = aʸ (a > 0, a ≠ 1) then x = y. (3ˣ − 81)(3ˣ + 1) = 0: 3ˣ = 81 = 3⁴ → x = 4; 3ˣ = −1 impossible as 3ˣ > 0 for all x. 3 marks zero index, 2 marks property, 5 marks solution.", marks: 10 },
      ],
    },
    // source: OpenStax — College Algebra 2e, 1.3 Radicals and Rational Exponents (https://openstax.org/books/college-algebra-2e/pages/1-3-radicals-and-rational-exponents)
    {
      slug: "rational-powers",
      title: "Rational Powers",
      objective:
        "By the end of the topic, learners should be able to interpret rational (fractional) indices as roots and powers, and evaluate and simplify expressions with rational indices.",
      estimatedMinutes: 70,
      notes: `## nth roots
- An **nth root** of a is a number that, raised to the nth power, gives a. −3 is the 5th root of −243 because (−3)⁵ = −243.
- The **principal nth root** of a, written ⁿ√a, is the root with the same sign as a; n is the **index** of the radical.
- ⁵√(−32) = −2.

## Rational index
- **a^(1/n) = ⁿ√a**.
- **a^(m/n) = (ⁿ√a)ᵐ = ⁿ√(aᵐ)**.
- The **denominator** gives the root; the **numerator** gives the power.
- All the laws of indices for integer indices also hold for rational indices.

## Evaluating
| Expression | Working | Value |
| --- | --- | --- |
| 8^(1/3) | ∛8 | 2 |
| 343^(2/3) | (∛343)² = 7² | 49 |
| 9^(5/2) | (√9)⁵ = 3⁵ | 243 |
| 125^(2/3) | (∛125)² = 5² | 25 |
| (16/9)^(−1/2) | (9/16)^(1/2) | 3/4 |
| 81^(3/4) | (⁴√81)³ = 3³ | 27 |

- Taking the root **first** keeps the numbers small.

## Simplifying
- x^(1/2) × x^(3/2) = x² (add indices).
- (x⁶)^(2/3) = x⁴ (multiply indices).
- 64^(−2/3) = 1/(∛64)² = 1/16.

## Common errors
- Treating a^(1/2) as a ÷ 2.
- Swapping numerator and denominator: 8^(2/3) is (∛8)² = 4, not (√8)³.
- Forgetting the negative sign means reciprocal: 27^(−1/3) = 1/3, not −3.`,
      workedExample: `**Question:** Evaluate 343^(2/3) and (16/9)^(−1/2).

**Solution**

*Step 1 — write 343^(2/3) as a root then a power.*
343^(2/3) = (∛343)².

*Step 2 — evaluate.*
∛343 = 7, and 7² = 49.

*Step 3 — negative index: take the reciprocal.*
(16/9)^(−1/2) = (9/16)^(1/2).

*Step 4 — square root of numerator and denominator.*
√9/√16 = 3/4.

**Answer: 343^(2/3) = 49; (16/9)^(−1/2) = 3/4**`,
      quiz: [
        { prompt: "a^(1/n) equals", options: ["a ÷ n", "ⁿ√a", "aⁿ", "n√a"], correctIndex: 1, explanation: "The denominator gives the root." },
        { prompt: "In a^(m/n), the denominator n gives the", options: ["power", "root", "base", "reciprocal"], correctIndex: 1, explanation: "Numerator = power, denominator = root." },
        { prompt: "Evaluate 8^(1/3).", options: ["2", "3", "4", "24"], correctIndex: 0, explanation: "∛8 = 2." },
        { prompt: "Evaluate 343^(2/3).", options: ["49", "7", "114", "21"], correctIndex: 0, explanation: "(∛343)² = 7² = 49." },
        { prompt: "Evaluate 9^(5/2).", options: ["45", "243", "81", "22.5"], correctIndex: 1, explanation: "(√9)⁵ = 3⁵ = 243." },
        { prompt: "Evaluate (16/9)^(−1/2).", options: ["4/3", "3/4", "−4/3", "9/16"], correctIndex: 1, explanation: "(9/16)^(1/2) = 3/4." },
        { prompt: "Evaluate ⁵√(−32).", options: ["2", "−2", "no real value", "−16"], correctIndex: 1, explanation: "(−2)⁵ = −32." },
        { prompt: "−3 is the 5th root of", options: ["−15", "−243", "243", "−125"], correctIndex: 1, explanation: "(−3)⁵ = −243." },
        { prompt: "Evaluate 125^(2/3).", options: ["25", "5", "50", "625"], correctIndex: 0, explanation: "(∛125)² = 25." },
        { prompt: "Evaluate 81^(3/4).", options: ["27", "9", "243", "60.75"], correctIndex: 0, explanation: "(⁴√81)³ = 3³ = 27." },
        { prompt: "Evaluate 64^(−2/3).", options: ["16", "1/16", "−16", "1/8"], correctIndex: 1, explanation: "1/(∛64)² = 1/16." },
        { prompt: "Evaluate 27^(−1/3).", options: ["−3", "1/3", "−9", "1/9"], correctIndex: 1, explanation: "1/∛27 = 1/3." },
        { prompt: "Simplify x^(1/2) × x^(3/2).", options: ["x²", "x^(3/4)", "x", "x³"], correctIndex: 0, explanation: "1/2 + 3/2 = 2." },
        { prompt: "Simplify (x⁶)^(2/3).", options: ["x⁴", "x⁹", "x^(20/3)", "x³"], correctIndex: 0, explanation: "6 × 2/3 = 4." },
        { prompt: "Evaluate 16^(1/4).", options: ["2", "4", "8", "1/4"], correctIndex: 0, explanation: "⁴√16 = 2." },
        { prompt: "Evaluate 32^(3/5).", options: ["8", "6", "19.2", "16"], correctIndex: 0, explanation: "(⁵√32)³ = 2³ = 8." },
        { prompt: "Evaluate 1000^(2/3).", options: ["100", "10", "666.7", "200"], correctIndex: 0, explanation: "(∛1000)² = 10² = 100." },
        { prompt: "Write √x in index form.", options: ["x²", "x^(1/2)", "x⁻²", "2x"], correctIndex: 1, explanation: "Square root = power 1/2." },
        { prompt: "Write ∛(x²) in index form.", options: ["x^(3/2)", "x^(2/3)", "x⁶", "x^(1/6)"], correctIndex: 1, explanation: "Power 2, root 3." },
        { prompt: "Evaluate 16^(3/2).", options: ["64", "24", "48", "12"], correctIndex: 0, explanation: "(√16)³ = 4³ = 64." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Evaluate without a calculator: (a) 27^(2/3), (b) 16^(3/4), (c) 25^(−1/2).", answerKey: "(a) (∛27)² = 9. (b) (⁴√16)³ = 8. (c) 1/√25 = 1/5. 2 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Simplify (a) (8x⁶)^(1/3) and (b) x^(2/3) × x^(1/3) ÷ x^(−1).", answerKey: "(a) 2x². (b) x^(2/3 + 1/3 + 1) = x². 3 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which equals 8^(2/3)?", options: ["(√8)³", "(∛8)²", "8 × 2/3", "8²/3"], correctIndex: 1, answerKey: "Denominator 3 = cube root, numerator 2 = square: (∛8)² = 4 (option B).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain the meaning of the numerator and denominator in a^(m/n) and evaluate 4^(5/2).", answerKey: "Denominator n is the root; numerator m is the power; a^(m/n) = (ⁿ√a)ᵐ. 4^(5/2) = (√4)⁵ = 2⁵ = 32. 3 marks explanation, 3 marks value.", marks: 6 },
        { type: "ESSAY", prompt: "Define the principal nth root and a rational index. Evaluate 9^(5/2), 343^(2/3) and (16/9)^(−1/2), explaining each step, and state two common errors.", answerKey: "Principal nth root: root with same sign as a, written ⁿ√a; a^(m/n) = (ⁿ√a)ᵐ = ⁿ√(aᵐ). 9^(5/2) = 3⁵ = 243; 343^(2/3) = 7² = 49; (16/9)^(−1/2) = (9/16)^(1/2) = 3/4. Errors: reading a^(1/2) as a/2; swapping root and power; treating a negative index as a negative value. 2 marks definitions, 6 marks evaluations, 2 marks errors.", marks: 10 },
      ],
    },
    // source: OpenStax — College Algebra 2e, 6.3 Logarithmic Functions (https://openstax.org/books/college-algebra-2e/pages/6-3-logarithmic-functions)
    {
      slug: "logarithms",
      title: "Logarithms",
      objective:
        "By the end of the topic, learners should be able to define a logarithm, convert between exponential and logarithmic form, and evaluate simple logarithms mentally.",
      estimatedMinutes: 70,
      notes: `## Definition
- For x > 0, b > 0, b ≠ 1: **y = log_b(x) if and only if bʸ = x**.
- The logarithm y is **the exponent to which b must be raised to get x**.
- log_b(x) is read "the logarithm with base b of x" or "log base b of x".
- The argument x must be **positive**; the base b must be positive and not 1.

## Converting between forms
| Exponential form | Logarithmic form |
| --- | --- |
| 2³ = 8 | log₂(8) = 3 |
| 5² = 25 | log₅(25) = 2 |
| 10⁻⁴ = 1/10 000 | log₁₀(1/10 000) = −4 |
| 3² = 9 | log₃(9) = 2 |
| 6^(1/2) = √6 | log₆(√6) = 1/2 |

## Evaluating mentally
- Ask: **"To what exponent must b be raised to get x?"**
- log₂(8) = 3; log₇(49) = 2; log₃(27) = 3; log₄(64) = 3.
- log₃(1/27) = −3, since 3⁻³ = 1/27.
- log_b(1) = 0 for every base, since b⁰ = 1.
- log_b(b) = 1, since b¹ = b.

## Special bases
- **Common logarithm** — base 10, written log(x). log(1000) = 3.
- **Natural logarithm** — base e ≈ 2.71828, written ln(x).

## Common errors
- Mixing up base and argument: log₂(8) is not log₈(2).
- Taking the log of zero or a negative number — undefined.
- Thinking a logarithm cannot be negative: log₁₀(0.01) = −2.`,
      workedExample: `**Question:** (a) Write 10⁻⁴ = 1/10 000 in logarithmic form. (b) Write log₃(9) = 2 in exponential form. (c) Evaluate log₃(1/27).

**Solution**

*Step 1 — (a) identify base, exponent and result.*
Base 10, exponent −4, result 1/10 000. So log₁₀(1/10 000) = −4.

*Step 2 — (b) the base raised to the log gives the argument.*
3² = 9.

*Step 3 — (c) ask what power of 3 gives 1/27.*
27 = 3³, so 1/27 = 3⁻³.

**Answer: (a) log₁₀(1/10 000) = −4; (b) 3² = 9; (c) log₃(1/27) = −3**`,
      quiz: [
        { prompt: "y = log_b(x) means", options: ["xʸ = b", "bʸ = x", "yᵇ = x", "b × y = x"], correctIndex: 1, explanation: "The log is the exponent on the base." },
        { prompt: "log₂(8) =", options: ["2", "3", "4", "16"], correctIndex: 1, explanation: "2³ = 8." },
        { prompt: "log₇(49) =", options: ["7", "2", "42", "1/2"], correctIndex: 1, explanation: "7² = 49." },
        { prompt: "log₄(64) =", options: ["3", "4", "16", "8"], correctIndex: 0, explanation: "4³ = 64." },
        { prompt: "log₃(1/27) =", options: ["3", "−3", "1/3", "−1/3"], correctIndex: 1, explanation: "3⁻³ = 1/27." },
        { prompt: "Write 5² = 25 in log form.", options: ["log₂(25) = 5", "log₅(25) = 2", "log₂₅(5) = 2", "log₅(2) = 25"], correctIndex: 1, explanation: "Base 5, exponent 2, result 25." },
        { prompt: "Write log₃(9) = 2 in exponential form.", options: ["9² = 3", "3² = 9", "2³ = 9", "3⁹ = 2"], correctIndex: 1, explanation: "The base 3 raised to the logarithm 2 gives the argument 9." },
        { prompt: "log_b(1) =", options: ["1", "0", "b", "undefined"], correctIndex: 1, explanation: "b⁰ = 1." },
        { prompt: "log_b(b) =", options: ["0", "1", "b", "b²"], correctIndex: 1, explanation: "b¹ = b." },
        { prompt: "Which is undefined?", options: ["log(1)", "log(10)", "log(−5)", "log(0.5)"], correctIndex: 2, explanation: "The argument must be positive." },
        { prompt: "The base of a logarithm cannot be", options: ["2", "10", "1", "e"], correctIndex: 2, explanation: "b must be positive and not 1." },
        { prompt: "log(1000), base 10, =", options: ["2", "3", "10", "100"], correctIndex: 1, explanation: "10³ = 1000." },
        { prompt: "log₁₀(1/10 000) =", options: ["4", "−4", "1/4", "−1/4"], correctIndex: 1, explanation: "10⁻⁴ = 1/10 000." },
        { prompt: "ln(x) means the logarithm to base", options: ["10", "2", "e", "1"], correctIndex: 2, explanation: "Natural log uses e ≈ 2.718." },
        { prompt: "log₅(25) =", options: ["2", "5", "10", "1/2"], correctIndex: 0, explanation: "5² = 25." },
        { prompt: "log₆(√6) =", options: ["2", "1/2", "6", "−1/2"], correctIndex: 1, explanation: "6^(1/2) = √6." },
        { prompt: "log₂(1/2) =", options: ["1", "−1", "2", "0"], correctIndex: 1, explanation: "2⁻¹ = 1/2." },
        { prompt: "log₃(81) =", options: ["3", "4", "9", "27"], correctIndex: 1, explanation: "3⁴ = 81." },
        { prompt: "If log_b(x) = y, then x must be", options: ["negative", "zero", "positive", "an integer"], correctIndex: 2, explanation: "bʸ is always positive." },
        { prompt: "A logarithm is the inverse operation of", options: ["multiplication", "raising to a power (exponentiation)", "addition", "taking a square"], correctIndex: 1, explanation: "It finds the exponent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Evaluate without a calculator: (a) log₂ 32, (b) log 10 000 (base 10), (c) log₄ 1.", answerKey: "(a) 2⁵ = 32 → 5. (b) 10⁴ → 4. (c) 4⁰ = 1 → 0. 2 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Write in logarithmic form: (a) 2⁶ = 64, (b) 10⁻² = 0.01, (c) 9^(1/2) = 3.", answerKey: "(a) log₂ 64 = 6. (b) log₁₀ 0.01 = −2. (c) log₉ 3 = 1/2. 2 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Solve log_x(125) = 3.", options: ["x = 5", "x = 25", "x = 41.7", "x = 3"], correctIndex: 0, answerKey: "x³ = 125 so x = 5 (option A).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Solve (a) log₂ x = 5 and (b) log₃ x = −2.", answerKey: "(a) x = 2⁵ = 32. (b) x = 3⁻² = 1/9. 3 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Define a logarithm and state the conditions on the base and argument. Explain why log_b(1) = 0 and log_b(b) = 1, and convert 10⁻⁴ = 1/10 000 and log₃(9) = 2 between forms.", answerKey: "y = log_b x iff bʸ = x, with x > 0, b > 0, b ≠ 1; y is the exponent on b giving x. b⁰ = 1 so log_b 1 = 0; b¹ = b so log_b b = 1. log₁₀(1/10 000) = −4; 3² = 9. 3 marks definition, 2 marks conditions, 2 marks special values, 3 marks conversions.", marks: 10 },
      ],
    },
    // source: OpenStax — College Algebra 2e, 6.4 Graphs of Logarithmic Functions (https://openstax.org/books/college-algebra-2e/pages/6-4-graphs-of-logarithmic-functions)
    {
      slug: "logarithmic-functions",
      title: "Logarithmic Functions",
      objective:
        "By the end of the topic, learners should be able to describe the graph of f(x) = log_b(x), state its domain, range, intercept and asymptote, and relate it to the exponential function.",
      estimatedMinutes: 70,
      notes: `## The logarithmic function
- **f(x) = log_b(x)**, b > 0, b ≠ 1, is the **inverse** of the exponential function y = bˣ.
- The graphs of y = bˣ and y = log_b(x) are **reflections in the line y = x**: the x- and y-coordinates swap.

## Key features of f(x) = log_b(x)
| Feature | Value |
| --- | --- |
| Domain | (0, ∞) — x > 0 |
| Range | (−∞, ∞) — all real numbers |
| x-intercept | (1, 0) |
| y-intercept | none |
| Vertical asymptote | x = 0 |
| Behaviour | increasing if b > 1; decreasing if 0 < b < 1 |

## Key points for sketching
- **(1/b, −1), (1, 0), (b, 1)**.
- For y = log₂(x): (1/2, −1), (1, 0), (2, 1), and also (4, 2), (8, 3).

\`\`\`svg y = 2ˣ and y = log₂(x) are reflections in y = x
<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
<line x1="10" y1="160" x2="210" y2="160" stroke="currentColor"/><line x1="60" y1="210" x2="60" y2="10" stroke="currentColor"/>
<line x1="20" y1="200" x2="200" y2="20" stroke="currentColor" stroke-dasharray="4 3"/>
<polyline points="10,156 20,155 40,150 60,140 70,132 80,120 90,103 100,80 110,47 116,20" fill="none" stroke="#2563eb" stroke-width="2"/>
<polyline points="64,210 65,200 70,180 80,160 88,150 100,140 117,130 140,120 173,110 200,104" fill="none" stroke="#dc2626" stroke-width="2"/>
<text x="118" y="30" fill="#2563eb">y = 2ˣ</text><text x="160" y="100" fill="#dc2626">y = log₂x</text><text x="185" y="35">y = x</text>
</svg>
\`\`\`

## Domain of a transformed log function
1. Set the argument greater than zero.
2. Solve the inequality.
3. Write the domain in interval notation.
- f(x) = log₄(x + 3): x + 3 > 0 → x > −3 → domain (−3, ∞).

## Common errors
- Including x = 0 or negative x in the domain.
- Drawing the graph crossing the y-axis — it approaches x = 0 but never meets it.
- Forgetting that the curve is decreasing when 0 < b < 1.`,
      workedExample: `**Question:** For f(x) = log₂(x − 1), state the domain and vertical asymptote and find f(3) and f(9).

**Solution**

*Step 1 — argument greater than zero.*
x − 1 > 0, so x > 1. Domain (1, ∞).

*Step 2 — asymptote where the argument is 0.*
x − 1 = 0 → vertical asymptote x = 1.

*Step 3 — evaluate.*
f(3) = log₂(2) = 1. f(9) = log₂(8) = 3.

**Answer: domain (1, ∞); asymptote x = 1; f(3) = 1; f(9) = 3**`,
      quiz: [
        { prompt: "f(x) = log_b(x) is the inverse of", options: ["y = x^b", "y = bˣ", "y = bx", "y = x/b"], correctIndex: 1, explanation: "Logs undo exponentials." },
        { prompt: "The graphs of y = 2ˣ and y = log₂(x) are reflections in", options: ["the x-axis", "the y-axis", "the line y = x", "the origin"], correctIndex: 2, explanation: "Inverse functions reflect in y = x." },
        { prompt: "The domain of f(x) = log_b(x) is", options: ["all real numbers", "x > 0", "x ≥ 0", "x < 0"], correctIndex: 1, explanation: "Only positive arguments are allowed." },
        { prompt: "The range of f(x) = log_b(x) is", options: ["y > 0", "all real numbers", "y ≥ 1", "0 < y < 1"], correctIndex: 1, explanation: "A log can take any real value." },
        { prompt: "The x-intercept of y = log_b(x) is", options: ["(0, 1)", "(1, 0)", "(b, 0)", "(0, 0)"], correctIndex: 1, explanation: "log_b(1) = 0." },
        { prompt: "The vertical asymptote of y = log_b(x) is", options: ["y = 0", "x = 0", "x = 1", "x = b"], correctIndex: 1, explanation: "The graph approaches the y-axis." },
        { prompt: "y = log_b(x) has a y-intercept", options: ["at (0, 1)", "at (0, b)", "never", "at (0, 0)"], correctIndex: 2, explanation: "x = 0 is not in the domain." },
        { prompt: "If b > 1, y = log_b(x) is", options: ["increasing", "decreasing", "constant", "periodic"], correctIndex: 0, explanation: "Larger x gives larger log." },
        { prompt: "y = log_(1/2)(x) is", options: ["increasing", "decreasing", "constant", "undefined"], correctIndex: 1, explanation: "0 < b < 1 gives a decreasing curve." },
        { prompt: "Which point lies on y = log_b(x)?", options: ["(b, 1)", "(1, b)", "(0, 1)", "(b, 0)"], correctIndex: 0, explanation: "log_b(b) = 1." },
        { prompt: "Which point lies on y = log₂(x)?", options: ["(8, 3)", "(3, 8)", "(2, 4)", "(0, 1)"], correctIndex: 0, explanation: "log₂ 8 = 3." },
        { prompt: "The point (1/b, −1) lies on y = log_b(x) because", options: ["b⁻¹ = 1/b", "b¹ = 1/b", "1/b = −1", "b⁰ = −1"], correctIndex: 0, explanation: "log_b(1/b) = −1." },
        { prompt: "Domain of f(x) = log₄(x + 3) is", options: ["(3, ∞)", "(−3, ∞)", "(−∞, −3)", "(0, ∞)"], correctIndex: 1, explanation: "x + 3 > 0 gives x > −3." },
        { prompt: "Domain of f(x) = log(x − 5) is", options: ["x > 5", "x > −5", "x ≥ 5", "all x"], correctIndex: 0, explanation: "x − 5 > 0." },
        { prompt: "The vertical asymptote of f(x) = log₄(x + 3) is", options: ["x = 3", "x = −3", "x = 0", "y = −3"], correctIndex: 1, explanation: "The argument is 0 at x = −3." },
        { prompt: "If (3, 8) is on y = 2ˣ, which point is on y = log₂(x)?", options: ["(3, 8)", "(8, 3)", "(−3, 8)", "(8, −3)"], correctIndex: 1, explanation: "Coordinates swap for the inverse." },
        { prompt: "f(x) = log₃(x). f(9) =", options: ["2", "3", "27", "1/2"], correctIndex: 0, explanation: "3² = 9." },
        { prompt: "f(x) = log₁₀(x). f(0.1) =", options: ["1", "−1", "0.1", "10"], correctIndex: 1, explanation: "10⁻¹ = 0.1." },
        { prompt: "As x gets closer to 0 from the right, log₂(x)", options: ["approaches 0", "becomes very large negative", "approaches 1", "becomes very large positive"], correctIndex: 1, explanation: "The curve drops towards the asymptote x = 0." },
        { prompt: "The domain of y = 2ˣ becomes the ___ of y = log₂(x).", options: ["domain", "range", "asymptote", "intercept"], correctIndex: 1, explanation: "Inverses swap domain and range." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Copy and complete for y = log₃(x): x = 1/3, 1, 3, 9, 27.", answerKey: "y = −1, 0, 1, 2, 3. 1 mark each, plus 1 mark for correct use of 3ʸ = x.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "State the domain and vertical asymptote of (a) f(x) = log₂(x − 4) and (b) g(x) = log(2x + 6).", answerKey: "(a) x > 4, domain (4, ∞), asymptote x = 4. (b) 2x + 6 > 0 → x > −3, domain (−3, ∞), asymptote x = −3. 3 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which statement about y = log₅(x) is false?", options: ["It passes through (1, 0)", "It passes through (5, 1)", "It crosses the y-axis at (0, 1)", "It is increasing"], correctIndex: 2, answerKey: "There is no y-intercept since x = 0 is outside the domain (option C).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why the graphs of y = 10ˣ and y = log(x) are reflections of each other in y = x.", answerKey: "They are inverse functions: if (a, b) is on y = 10ˣ then 10ᵃ = b, so log b = a and (b, a) is on y = log x. Swapping coordinates is reflection in y = x. 3 marks inverse idea, 3 marks coordinate swap.", marks: 6 },
        { type: "ESSAY", prompt: "Describe fully the graph of y = log₂(x): domain, range, intercepts, asymptote, behaviour and three key points. Sketch it together with y = 2ˣ and the line y = x.", answerKey: "Domain (0, ∞); range all reals; x-intercept (1, 0); no y-intercept; asymptote x = 0; increasing (b > 1); key points (1/2, −1), (1, 0), (2, 1). Sketch shows y = 2ˣ through (0, 1), (1, 2) and log₂ x as its mirror image in y = x. 6 marks features, 4 marks sketch.", marks: 10 },
      ],
    },
    // source: OpenStax — College Algebra 2e, 6.3 Logarithmic Functions, "Common Logarithms" (https://openstax.org/books/college-algebra-2e/pages/6-3-logarithmic-functions) and GeeksforGeeks — Log Table (https://www.geeksforgeeks.org/maths/log-table/)
    {
      slug: "base-ten-logarithms",
      title: "Base Ten (Common) Logarithms",
      objective:
        "By the end of the topic, learners should be able to evaluate common logarithms of powers of 10, express a common logarithm as characteristic plus mantissa, and relate the characteristic to standard form.",
      estimatedMinutes: 60,
      notes: `## Common logarithms
- The **common logarithm** is the logarithm with **base 10**, written **log(x)** with no base shown.
- y = log(x) is equivalent to **10ʸ = x**.
| x | 0.001 | 0.01 | 0.1 | 1 | 10 | 100 | 1000 | 1 000 000 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| log x | −3 | −2 | −1 | 0 | 1 | 2 | 3 | 6 |

- Numbers between powers of 10 have logs between whole numbers: log(123) ≈ 2.0899, log(321) ≈ 2.5065 (between 2 and 3, since 100 < x < 1000).

## Characteristic and mantissa
- **log of a number = characteristic + mantissa**.
- **Characteristic** — the whole-number part; it is the power of 10 when the number is written in standard form N = M × 10ᵏ (1 ≤ M < 10).
- **Mantissa** — the decimal (fractional) part; it is **always positive**, between 0 and 1, and depends only on the digits of the number.

## Four-figure values to know
| Number | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| log | 0 | 0.3010 | 0.4771 | 0.6021 | 0.6990 | 0.7782 | 0.8451 | 0.9031 | 0.9542 | 1 |

## Same digits, same mantissa
| Number | Standard form | log |
| --- | --- | --- |
| 4.56 | 4.56 × 10⁰ | 0.6590 |
| 45.6 | 4.56 × 10¹ | 1.6590 |
| 456 | 4.56 × 10² | 2.6590 |

- Multiplying a number by 10 adds 1 to its log; the mantissa does not change.

## Common errors
- Thinking a bare "log" means base e — on calculators and in tables "log" is base 10 ("ln" is base e).
- Changing the mantissa when only the decimal point moves.`,
      workedExample: `**Question:** Given log 4.56 = 0.6590, write down log 456 and log 45 600 and state the characteristic of each.

**Solution**

*Step 1 — write each number in standard form.*
456 = 4.56 × 10². 45 600 = 4.56 × 10⁴.

*Step 2 — the characteristic is the power of 10.*
log 456 has characteristic 2; log 45 600 has characteristic 4.

*Step 3 — the digits 456 are unchanged, so the mantissa is 0.6590.*
log 456 = 2 + 0.6590 = 2.6590. log 45 600 = 4 + 0.6590 = 4.6590.

**Answer: log 456 = 2.6590 (characteristic 2); log 45 600 = 4.6590 (characteristic 4)**`,
      quiz: [
        { prompt: "log x with no base shown means base", options: ["2", "e", "10", "1"], correctIndex: 2, explanation: "It is the common logarithm." },
        { prompt: "log 1000 =", options: ["2", "3", "10", "100"], correctIndex: 1, explanation: "10³ = 1000." },
        { prompt: "log 1 000 000 =", options: ["5", "6", "7", "100"], correctIndex: 1, explanation: "10⁶ = 1 000 000." },
        { prompt: "log 1 =", options: ["1", "0", "10", "undefined"], correctIndex: 1, explanation: "10⁰ = 1." },
        { prompt: "log 0.01 =", options: ["2", "−2", "−1", "0.2"], correctIndex: 1, explanation: "10⁻² = 0.01." },
        { prompt: "log 123 lies between", options: ["0 and 1", "1 and 2", "2 and 3", "3 and 4"], correctIndex: 2, explanation: "100 < 123 < 1000." },
        { prompt: "The whole-number part of a common log is the", options: ["mantissa", "characteristic", "base", "antilog"], correctIndex: 1, explanation: "Characteristic = whole-number part." },
        { prompt: "The decimal part of a common log is the", options: ["mantissa", "characteristic", "index", "argument"], correctIndex: 0, explanation: "Mantissa = fractional part." },
        { prompt: "The mantissa is always", options: ["negative", "positive (between 0 and 1)", "a whole number", "greater than 1"], correctIndex: 1, explanation: "The mantissa is kept positive." },
        { prompt: "The characteristic of log 456 is", options: ["4", "3", "2", "0"], correctIndex: 2, explanation: "456 = 4.56 × 10²." },
        { prompt: "The characteristic of log 7.2 is", options: ["0", "1", "7", "−1"], correctIndex: 0, explanation: "7.2 = 7.2 × 10⁰." },
        { prompt: "Given log 4.56 = 0.6590, log 45.6 =", options: ["0.6590", "1.6590", "2.6590", "4.5600"], correctIndex: 1, explanation: "45.6 = 4.56 × 10¹." },
        { prompt: "log 2 to 4 figures is", options: ["0.3010", "0.4771", "0.6990", "0.2000"], correctIndex: 0, explanation: "Standard four-figure value." },
        { prompt: "log 5 to 4 figures is", options: ["0.5000", "0.6990", "0.6021", "0.7782"], correctIndex: 1, explanation: "Standard four-figure value." },
        { prompt: "Multiplying a number by 10 changes its log by", options: ["+10", "×10", "+1", "nothing"], correctIndex: 2, explanation: "log(10x) = 1 + log x." },
        { prompt: "Numbers with the same digits but different decimal points have the same", options: ["characteristic", "mantissa", "log", "standard form"], correctIndex: 1, explanation: "Only the characteristic changes." },
        { prompt: "On a calculator, the key for the natural log is", options: ["log", "ln", "exp", "10ˣ"], correctIndex: 1, explanation: "ln is base e; log is base 10." },
        { prompt: "y = log x is equivalent to", options: ["xʸ = 10", "10ʸ = x", "y¹⁰ = x", "10x = y"], correctIndex: 1, explanation: "Definition of the common log." },
        { prompt: "The characteristic of log 8250 is", options: ["4", "3", "8", "2"], correctIndex: 1, explanation: "8250 = 8.25 × 10³." },
        { prompt: "If log 3 = 0.4771, log 3000 =", options: ["0.4771", "3.4771", "4.4771", "1.4313"], correctIndex: 1, explanation: "3000 = 3 × 10³." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Write down without tables: (a) log 100 000, (b) log 0.001, (c) log 10.", answerKey: "(a) 5. (b) −3. (c) 1. 2 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Given log 3.82 = 0.5821, find log 38.2, log 382 and log 38 200.", answerKey: "1.5821, 2.5821, 4.5821 (characteristics 1, 2, 4 from standard form). 2 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "What is the characteristic of log 60 500?", options: ["5", "4", "6", "0"], correctIndex: 1, answerKey: "60 500 = 6.05 × 10⁴, so characteristic 4 (option B).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain the terms characteristic and mantissa, using log 22.35 = 1.3493 as your example.", answerKey: "Characteristic = whole-number part = power of 10 in standard form: 22.35 = 2.235 × 10¹, characteristic 1. Mantissa = positive decimal part from the digits: 0.3493. 3 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Explain what a common logarithm is, why log 4.56, log 45.6 and log 456 share the same mantissa, and how the characteristic is found from standard form. Include the four-figure logs of 2, 3, 5 and 7.", answerKey: "Base-10 log: log x = y iff 10ʸ = x. 45.6 = 4.56 × 10 and 456 = 4.56 × 10², so log 45.6 = 1 + log 4.56 etc.; multiplying by 10 adds 1 to the log and leaves the mantissa 0.6590. Characteristic = k in M × 10ᵏ. log 2 = 0.3010, log 3 = 0.4771, log 5 = 0.6990, log 7 = 0.8451. 3 marks definition, 4 marks explanation, 3 marks values.", marks: 10 },
      ],
    },
    // source: GeeksforGeeks — Log Table (https://www.geeksforgeeks.org/maths/log-table/) and OpenStax — College Algebra 2e, 6.5 Logarithmic Properties (https://openstax.org/books/college-algebra-2e/pages/6-5-logarithmic-properties)
    {
      slug: "logarithms-of-numbers-greater-than-10",
      title: "Logarithms of Numbers Greater than 10",
      objective:
        "By the end of the topic, learners should be able to find the characteristic of a number greater than 10, read the mantissa from four-figure tables, find antilogarithms, and use logarithms to multiply and divide.",
      estimatedMinutes: 80,
      notes: `## Characteristic of a number greater than 1
- **Characteristic = (number of digits before the decimal point) − 1.**
| Number | Digits before the point | Characteristic |
| --- | --- | --- |
| 7.5 | 1 | 0 |
| 22.35 | 2 | 1 |
| 500 | 3 | 2 |
| 1000 | 4 | 3 |
| 45 600 | 5 | 4 |

## Reading four-figure log tables
1. Ignore the decimal point; take the first two significant digits for the **row**.
2. Take the third digit for the **column**.
3. Take the fourth digit for the **mean-difference** column and add it to the table value.
4. The result is the **mantissa** (place a decimal point before it).
5. Put the characteristic in front.
- Example log 22.35: row 22, column 3 gives 3483; mean difference for 5 in row 22 is 10; 3483 + 10 = 3493. Characteristic = 2 − 1 = 1. **log 22.35 = 1.3493**.

## Antilogarithms
- The **antilog** reverses the log: if log x = y, then x = antilog y = 10ʸ.
- The **mantissa** gives the digits (from antilog tables); the **characteristic** places the decimal point (characteristic + 1 digits before the point).
- antilog 0.3010 = 2.00; antilog 2.1228 ≈ 132.7.

## Multiplying and dividing with logs
- Multiply: **add** the logs, then take the antilog (product law).
- Divide: **subtract** the logs, then take the antilog (quotient law).
- Power: **multiply** the log by the power (power law).
| Number | Standard form | log |
| --- | --- | --- |
| 23.4 | 2.34 × 10¹ | 1.3692 |
| 5.67 | 5.67 × 10⁰ | 0.7536 |
| Product | — | 2.1228 |

- antilog 2.1228 ≈ 132.7, so 23.4 × 5.67 ≈ 132.7.

## Common errors
- Using the number of digits as the characteristic (it is one less).
- Forgetting to add the mean difference.
- Placing the decimal point wrongly in the antilog.`,
      workedExample: `**Question:** Use logarithms to evaluate 23.4 × 5.67, given log 23.4 = 1.3692, log 5.67 = 0.7536 and antilog 0.1228 = 1.327.

**Solution**

*Step 1 — add the logarithms (product law).*
1.3692 + 0.7536 = 2.1228.

*Step 2 — separate characteristic and mantissa.*
Characteristic 2, mantissa 0.1228.

*Step 3 — antilog of the mantissa gives the digits.*
antilog 0.1228 = 1.327.

*Step 4 — the characteristic 2 means multiply by 10² (three digits before the point).*
1.327 × 10² = 132.7.

*Check:* 23.4 × 5.67 = 132.678 ≈ 132.7 ✔

**Answer: 23.4 × 5.67 ≈ 132.7**`,
      quiz: [
        { prompt: "For a number greater than 1, the characteristic equals", options: ["number of digits before the point", "number of digits before the point − 1", "number of zeros after the point", "the first digit"], correctIndex: 1, explanation: "e.g. 500 has 3 digits → characteristic 2." },
        { prompt: "The characteristic of log 500 is", options: ["3", "2", "5", "0"], correctIndex: 1, explanation: "3 − 1 = 2." },
        { prompt: "The characteristic of log 1000 is", options: ["4", "3", "1", "0"], correctIndex: 1, explanation: "4 − 1 = 3." },
        { prompt: "The characteristic of log 22.35 is", options: ["2", "1", "0", "22"], correctIndex: 1, explanation: "Two digits before the point: 2 − 1 = 1." },
        { prompt: "In log tables, the row for 22.35 is", options: ["22", "23", "35", "2"], correctIndex: 0, explanation: "The first two significant digits." },
        { prompt: "In log tables, the column for 22.35 is", options: ["2", "3", "5", "22"], correctIndex: 1, explanation: "The third significant digit." },
        { prompt: "The fourth significant digit of 22.35 is used for the", options: ["row", "column", "mean difference", "characteristic"], correctIndex: 2, explanation: "It is added from the mean-difference column." },
        { prompt: "Table value 3483 plus mean difference 10 gives mantissa", options: ["0.3493", "0.3483", "3.493", "0.4483"], correctIndex: 0, explanation: "3483 + 10 = 3493." },
        { prompt: "log 22.35 =", options: ["2.3493", "1.3493", "0.3493", "22.3493"], correctIndex: 1, explanation: "Characteristic 1, mantissa 0.3493." },
        { prompt: "The antilog of y is", options: ["log y", "10ʸ", "y¹⁰", "1/y"], correctIndex: 1, explanation: "It reverses the common log." },
        { prompt: "antilog 0.3010 ≈", options: ["2", "3", "0.3", "30"], correctIndex: 0, explanation: "log 2 = 0.3010." },
        { prompt: "To multiply two numbers using logs you", options: ["multiply the logs", "add the logs", "subtract the logs", "divide the logs"], correctIndex: 1, explanation: "Product law: log(xy) = log x + log y." },
        { prompt: "To divide two numbers using logs you", options: ["add the logs", "subtract the logs", "multiply the logs", "divide the logs"], correctIndex: 1, explanation: "Quotient law." },
        { prompt: "To find x³ using logs you", options: ["add 3 to log x", "multiply log x by 3", "cube log x", "divide log x by 3"], correctIndex: 1, explanation: "Power law: log x³ = 3 log x." },
        { prompt: "If log x = 2.1228, how many digits does x have before the decimal point?", options: ["2", "3", "1", "4"], correctIndex: 1, explanation: "Characteristic 2 → 3 digits." },
        { prompt: "log 23.4 + log 5.67 = 1.3692 + 0.7536 =", options: ["2.1228", "1.1228", "2.0228", "0.6156"], correctIndex: 0, explanation: "Add the logs." },
        { prompt: "antilog 2.1228 ≈", options: ["13.27", "132.7", "1327", "1.327"], correctIndex: 1, explanation: "1.327 × 10²." },
        { prompt: "Given log 1.68 = 0.2253, log 168 =", options: ["0.2253", "1.2253", "2.2253", "3.2253"], correctIndex: 2, explanation: "168 = 1.68 × 10²." },
        { prompt: "The characteristic of log 45 600 is", options: ["5", "4", "3", "6"], correctIndex: 1, explanation: "Five digits → 4." },
        { prompt: "Log tables are reliable for numbers given to at most", options: ["2 significant figures", "4 significant figures", "6 significant figures", "any number of figures"], correctIndex: 1, explanation: "Four-figure tables work to 4 significant digits." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the characteristic of the logarithm of (a) 7.08, (b) 70.8, (c) 7080.", answerKey: "(a) 0. (b) 1. (c) 3. 2 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Given log 12.6 = 1.1004 and log 16.8 = 1.2253, use logs to find 16.8 ÷ 12.6, given antilog 0.1249 = 1.333.", answerKey: "1.2253 − 1.1004 = 0.1249; antilog = 1.333. (Check 16.8 ÷ 12.6 = 1.333.) 3 marks subtraction, 3 marks antilog.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "If log x = 3.6590 and antilog 0.6590 = 4.560, then x =", options: ["45.60", "456.0", "4560", "45 600"], correctIndex: 2, answerKey: "Characteristic 3 → 4.560 × 10³ = 4560 (option C).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe the steps for reading log 22.35 from four-figure tables.", answerKey: "Row 22, column 3 → 3483; mean difference for 5 → 10; mantissa 0.3493; characteristic 2 − 1 = 1; log 22.35 = 1.3493. 1 mark per step (6).", marks: 6 },
        { type: "ESSAY", prompt: "Explain how logarithms convert multiplication into addition. Use log 23.4 = 1.3692, log 5.67 = 0.7536 and antilog 0.1228 = 1.327 to evaluate 23.4 × 5.67, and explain how the characteristic places the decimal point.", answerKey: "Product law log(xy) = log x + log y, so add logs then antilog. 1.3692 + 0.7536 = 2.1228; mantissa 0.1228 → digits 1.327; characteristic 2 → × 10² → 132.7 (three digits before the point). 3 marks principle, 4 marks calculation, 3 marks decimal placement.", marks: 10 },
      ],
    },
    // source: CK-12 — Flexi: How to find the characteristic of a logarithm when the number is less than 1 (https://www.ck12.org/flexi/algebra-ii/logarithmic-functions/how-to-find-the-characteristic-of-an-logarithm-when-the-number-is-less-than-1/) and GeeksforGeeks — Log Table (https://www.geeksforgeeks.org/maths/log-table/)
    {
      slug: "logarithms-of-numbers-between-0-and-1",
      title: "Logarithms of Numbers between 0 and 1",
      objective:
        "By the end of the topic, learners should be able to find the negative characteristic of a number between 0 and 1, write its logarithm in bar notation, and use bar numbers in calculations.",
      estimatedMinutes: 80,
      notes: `## Negative characteristic
- For a number between 0 and 1 the logarithm is **negative**, and the characteristic is negative.
- **Characteristic = −(number of zeros immediately after the decimal point + 1).**
- Equivalently, write the number in standard form M × 10ᵏ; the characteristic is k.
| Number | Standard form | Characteristic |
| --- | --- | --- |
| 0.456 | 4.56 × 10⁻¹ | −1 |
| 0.063 | 6.3 × 10⁻² | −2 |
| 0.01 | 1 × 10⁻² | −2 |
| 0.0056 | 5.6 × 10⁻³ | −3 |

## Bar notation
- The **mantissa is always kept positive**; only the characteristic is negative.
- A negative characteristic is written with a **bar** over it: 2̄ means −2.
- log 0.063 = −1.2007 = −2 + 0.7993, written **2̄.7993** ("bar two point seven nine nine three").
- log 0.456 = −1 + 0.6590 = **1̄.6590**.
- The digits 456 give the same mantissa 0.6590 whether the number is 456, 4.56 or 0.456.

## Arithmetic with bar numbers
- Treat the characteristic as negative and the mantissa as positive.
- **Adding:** add the mantissas; carry any whole number into the characteristics.
  1̄.9243 + 2̄.7993: mantissas 0.9243 + 0.7993 = 1.7236 (carry 1); characteristics −1 + (−2) + 1 = −2 → **2̄.7236**.
- **Multiplying by a whole number:** 2 × 1̄.6590 = 2 × (−1 + 0.6590) = −2 + 1.3180 = **1̄.3180**.
- **Antilog** of a bar number: mantissa gives the digits; characteristic −k means the first significant digit is in the k-th decimal place.
  antilog 2̄.7236: digits 5.292; × 10⁻² → **0.05292**.

## Common errors
- Writing the whole log as negative (−2.7993) — this is a different number.
- Making the mantissa negative.
- Forgetting the carry when the mantissas add to more than 1.`,
      workedExample: `**Question:** Use logarithms to evaluate 0.84 × 0.063, given log 8.4 = 0.9243, log 6.3 = 0.7993 and antilog 0.7236 = 5.292.

**Solution**

*Step 1 — characteristics.*
0.84 = 8.4 × 10⁻¹ → log 0.84 = 1̄.9243. 0.063 = 6.3 × 10⁻² → log 0.063 = 2̄.7993.

*Step 2 — add the logs.*
Mantissas: 0.9243 + 0.7993 = 1.7236 → write .7236, carry 1.
Characteristics: −1 + (−2) + 1 = −2.
Sum = 2̄.7236.

*Step 3 — antilog.*
Mantissa 0.7236 → 5.292. Characteristic −2 → × 10⁻² → 0.05292.

*Check:* 0.84 × 0.063 = 0.05292 ✔

**Answer: 0.05292**`,
      quiz: [
        { prompt: "The logarithm of a number between 0 and 1 is", options: ["positive", "negative", "zero", "undefined"], correctIndex: 1, explanation: "10 must be raised to a negative power." },
        { prompt: "Characteristic of a number less than 1 equals", options: ["number of zeros after the point", "−(zeros after the point + 1)", "digits before the point − 1", "always −1"], correctIndex: 1, explanation: "e.g. 0.01: −(1 + 1) = −2." },
        { prompt: "The characteristic of log 0.0056 is", options: ["−2", "−3", "−4", "3"], correctIndex: 1, explanation: "5.6 × 10⁻³." },
        { prompt: "The characteristic of log 0.456 is", options: ["0", "−1", "−2", "1"], correctIndex: 1, explanation: "4.56 × 10⁻¹." },
        { prompt: "The characteristic of log 0.01 is", options: ["−1", "−2", "−3", "2"], correctIndex: 1, explanation: "One zero after the point: −(1 + 1)." },
        { prompt: "2̄ means", options: ["+2", "−2", "0.2", "1/2"], correctIndex: 1, explanation: "The bar marks a negative characteristic." },
        { prompt: "In bar notation the mantissa is", options: ["negative", "positive", "zero", "a whole number"], correctIndex: 1, explanation: "Only the characteristic is negative." },
        { prompt: "log 0.063 = −1.2007. In bar notation this is", options: ["1̄.2007", "2̄.7993", "2̄.2007", "1̄.7993"], correctIndex: 1, explanation: "−2 + 0.7993." },
        { prompt: "Given log 4.56 = 0.6590, log 0.456 =", options: ["1̄.6590", "−0.6590", "2̄.6590", "0.6590"], correctIndex: 0, explanation: "Characteristic −1, mantissa 0.6590." },
        { prompt: "Given log 4.56 = 0.6590, log 0.0456 =", options: ["1̄.6590", "2̄.6590", "3̄.6590", "−2.6590"], correctIndex: 1, explanation: "4.56 × 10⁻²." },
        { prompt: "1̄.6590 as an ordinary negative decimal is", options: ["−1.6590", "−0.3410", "−0.6590", "−1.3410"], correctIndex: 1, explanation: "−1 + 0.6590 = −0.3410." },
        { prompt: "1̄.9243 + 2̄.7993 =", options: ["3̄.7236", "2̄.7236", "1̄.7236", "3̄.1236"], correctIndex: 1, explanation: "Mantissas 1.7236 carry 1: −1 − 2 + 1 = −2." },
        { prompt: "2 × 1̄.6590 =", options: ["2̄.3180", "1̄.3180", "2̄.6590", "3̄.3180"], correctIndex: 1, explanation: "−2 + 1.3180 = 1̄.3180." },
        { prompt: "antilog 2̄.7236 (antilog 0.7236 = 5.292) =", options: ["0.5292", "0.05292", "5.292", "0.005292"], correctIndex: 1, explanation: "5.292 × 10⁻²." },
        { prompt: "antilog 1̄.3010 =", options: ["0.2", "0.02", "2", "−2"], correctIndex: 0, explanation: "2 × 10⁻¹." },
        { prompt: "Why is the mantissa kept positive?", options: ["So numbers with the same digits share one table value", "Because logs are always positive", "Because the characteristic is zero", "It is a calculator rule only"], correctIndex: 0, explanation: "0.456, 4.56 and 456 all use mantissa 0.6590." },
        { prompt: "Which equals 3̄.9518?", options: ["−3.9518", "−2.0482", "3.9518", "−3.0482"], correctIndex: 1, explanation: "−3 + 0.9518 = −2.0482 (log 0.00895)." },
        { prompt: "log 0.5 written in bar form (log 5 = 0.6990) is", options: ["1̄.6990", "−0.6990", "0̄.6990", "1̄.3010"], correctIndex: 0, explanation: "0.5 = 5 × 10⁻¹." },
        { prompt: "A common error is to write log 0.063 as", options: ["2̄.7993", "−2.7993", "−1.2007", "−2 + 0.7993"], correctIndex: 1, explanation: "−2.7993 is a different number." },
        { prompt: "A number whose log is 1̄.xxxx lies between", options: ["1 and 10", "0.1 and 1", "0.01 and 0.1", "10 and 100"], correctIndex: 1, explanation: "Characteristic −1 → first digit in the tenths place." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Given log 3.82 = 0.5821, write down log 0.382 and log 0.00382 in bar notation.", answerKey: "0.382 = 3.82 × 10⁻¹ → 1̄.5821. 0.00382 = 3.82 × 10⁻³ → 3̄.5821. 3 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Simplify (a) 2̄.6 + 1̄.7 and (b) 3 × 1̄.4.", answerKey: "(a) Mantissas 1.3 → .3 carry 1; −2 − 1 + 1 = −2 → 2̄.3. (b) 3 × (−1 + 0.4) = −3 + 1.2 = 2̄.2. 3 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is the characteristic of log 0.000 72?", options: ["−3", "−4", "−5", "4"], correctIndex: 1, answerKey: "0.000 72 = 7.2 × 10⁻⁴; three zeros after the point → −(3 + 1) = −4 (option B).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why log 0.063 is written 2̄.7993 rather than −2.7993.", answerKey: "log 0.063 = −1.2007 = −2 + 0.7993. The mantissa 0.7993 is kept positive (it matches log 6.3), and only the characteristic −2 is negative, shown by the bar. −2.7993 would equal −2 − 0.7993, a different number. 3 marks each point.", marks: 6 },
        { type: "ESSAY", prompt: "Explain how to find the characteristic of a number between 0 and 1 and why bar notation is used. Then use log 8.4 = 0.9243, log 6.3 = 0.7993 and antilog 0.7236 = 5.292 to evaluate 0.84 × 0.063.", answerKey: "Characteristic = −(zeros after the point + 1) = k in M × 10ᵏ. Bar notation keeps the mantissa positive so it can be read from tables. log 0.84 = 1̄.9243; log 0.063 = 2̄.7993; sum: mantissas 1.7236 carry 1, characteristic −2 → 2̄.7236; antilog → 5.292 × 10⁻² = 0.05292. 3 marks characteristic, 2 marks bar notation, 5 marks calculation.", marks: 10 },
      ],
    },
    // source: OpenStax — College Algebra 2e, 6.5 Logarithmic Properties (https://openstax.org/books/college-algebra-2e/pages/6-5-logarithmic-properties)
    {
      slug: "laws-of-logarithms",
      title: "Laws of Logarithms",
      objective:
        "By the end of the topic, learners should be able to state and apply the product, quotient and power laws of logarithms and the change-of-base formula to expand, condense and evaluate logarithms.",
      estimatedMinutes: 80,
      notes: `## Basic properties
| Property | Statement |
| --- | --- |
| Zero | log_b(1) = 0 |
| Identity | log_b(b) = 1 |
| Inverse | log_b(bˣ) = x and b^(log_b x) = x (x > 0) |
| One-to-one | log_b(M) = log_b(N) if and only if M = N |

## The three laws
- **Product law** — the log of a product is the sum of the logs: **log_b(MN) = log_b M + log_b N**.
- **Quotient law** — the log of a quotient is the difference of the logs: **log_b(M/N) = log_b M − log_b N**.
- **Power law** — the log of a power is the exponent times the log of the base: **log_b(Mⁿ) = n log_b M**.

## Expanding
- log_b(wxyz) = log_b w + log_b x + log_b y + log_b z.
- log₃(25) = log₃(5²) = 2 log₃ 5.
- log(25a³/b) = 2 log 5 + 3 log a − log b.

## Condensing
- log₃ 5 + log₃ 8 − log₃ 2 = log₃(5 × 8 ÷ 2) = **log₃ 20**.
- log 5 + 2 log 3 = log 5 + log 9 = **log 45**.

## Change of base
- **log_b M = log_n M ÷ log_n b** (any base n), e.g. log_b M = log M ÷ log b.
- log₂ 10 = log 10 ÷ log 2 = 1 ÷ 0.3010 ≈ 3.322.

## Using given values
- log 6 = log 2 + log 3 = 0.3010 + 0.4771 = 0.7781.
- log 1.5 = log 3 − log 2 = 0.1761.
- log 4 = 2 log 2 = 0.6020.

## Common errors
- **log(x + y) ≠ log x + log y** — the product law needs a product.
- **log x ÷ log y ≠ log(x/y)** — that is the change-of-base ratio, not the quotient law.
- **(log x)ⁿ ≠ n log x** — the power must be on x.`,
      workedExample: `**Question:** Given log 2 = 0.3010 and log 3 = 0.4771, evaluate log 18 and log(8/9) without a calculator.

**Solution**

*Step 1 — write 18 using 2 and 3.*
18 = 2 × 3², so log 18 = log 2 + 2 log 3.

*Step 2 — substitute.*
0.3010 + 2(0.4771) = 0.3010 + 0.9542 = 1.2552.

*Step 3 — write 8/9 using powers.*
8/9 = 2³ ÷ 3², so log(8/9) = 3 log 2 − 2 log 3.

*Step 4 — substitute.*
3(0.3010) − 2(0.4771) = 0.9030 − 0.9542 = −0.0512.

**Answer: log 18 = 1.2552; log(8/9) = −0.0512**`,
      quiz: [
        { prompt: "log_b(MN) =", options: ["log_b M × log_b N", "log_b M + log_b N", "log_b M − log_b N", "log_b(M + N)"], correctIndex: 1, explanation: "Product law." },
        { prompt: "log_b(M/N) =", options: ["log_b M + log_b N", "log_b M − log_b N", "log_b M ÷ log_b N", "log_b(M − N)"], correctIndex: 1, explanation: "Quotient law." },
        { prompt: "log_b(Mⁿ) =", options: ["n log_b M", "(log_b M)ⁿ", "log_b M + n", "log_b(nM)"], correctIndex: 0, explanation: "Power law." },
        { prompt: "log₃(25) =", options: ["2 log₃ 5", "5 log₃ 2", "log₃ 5 + 2", "25 log₃ 1"], correctIndex: 0, explanation: "25 = 5²." },
        { prompt: "log₃ 5 + log₃ 8 − log₃ 2 =", options: ["log₃ 11", "log₃ 20", "log₃ 80", "log₃ 15"], correctIndex: 1, explanation: "5 × 8 ÷ 2 = 20." },
        { prompt: "log 5 + 2 log 3 =", options: ["log 11", "log 45", "log 15", "log 30"], correctIndex: 1, explanation: "log 5 + log 9 = log 45." },
        { prompt: "log_b(bˣ) =", options: ["b", "x", "bˣ", "1"], correctIndex: 1, explanation: "Inverse property." },
        { prompt: "If log_b M = log_b N then", options: ["M = N", "M = −N", "MN = 1", "M + N = b"], correctIndex: 0, explanation: "One-to-one property." },
        { prompt: "The change-of-base formula is log_b M =", options: ["log M × log b", "log M ÷ log b", "log b ÷ log M", "log(M/b)"], correctIndex: 1, explanation: "log_b M = log_n M / log_n b." },
        { prompt: "log₂ 10 ≈ (log 2 = 0.3010)", options: ["0.3010", "3.322", "5", "1.301"], correctIndex: 1, explanation: "1 ÷ 0.3010 ≈ 3.322." },
        { prompt: "Using log 2 = 0.3010, log 4 =", options: ["0.3010", "0.6020", "0.9030", "1.2040"], correctIndex: 1, explanation: "2 log 2." },
        { prompt: "Given log 2 = 0.3010, log 3 = 0.4771, log 6 =", options: ["0.7781", "0.1761", "0.1436", "1.0791"], correctIndex: 0, explanation: "Add the logs." },
        { prompt: "Given log 2 = 0.3010, log 3 = 0.4771, log 1.5 =", options: ["0.7781", "0.1761", "0.6315", "0.0761"], correctIndex: 1, explanation: "log 3 − log 2." },
        { prompt: "log(x + y) equals", options: ["log x + log y", "log x × log y", "no simpler form", "log xy"], correctIndex: 2, explanation: "No law applies to a sum." },
        { prompt: "Expand log(25a³/b).", options: ["2 log 5 + 3 log a − log b", "25 log a³ − log b", "log 25 × 3 log a ÷ log b", "5 log 2 + 3 log a + log b"], correctIndex: 0, explanation: "Apply product, power and quotient laws." },
        { prompt: "Expand log_b(wxyz).", options: ["log_b w × log_b x × log_b y × log_b z", "log_b w + log_b x + log_b y + log_b z", "4 log_b(wxyz)", "log_b w + xyz"], correctIndex: 1, explanation: "Product law repeatedly." },
        { prompt: "2 log 5 + log 4 =", options: ["log 100 = 2", "log 14", "log 40", "log 50"], correctIndex: 0, explanation: "log 25 + log 4 = log 100 = 2." },
        { prompt: "log 8 ÷ log 2 equals", options: ["log 4", "3", "log 6", "4"], correctIndex: 1, explanation: "Change of base: log₂ 8 = 3." },
        { prompt: "log 50 + log 2 =", options: ["2", "log 52", "1", "log 25"], correctIndex: 0, explanation: "log 100 = 2." },
        { prompt: "3 log x − log y as a single log is", options: ["log(3x/y)", "log(x³/y)", "log(x³ − y)", "log(x/y)³"], correctIndex: 1, explanation: "Power law then quotient law." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Given log 2 = 0.3010 and log 7 = 0.8451, find (a) log 14 and (b) log 3.5.", answerKey: "(a) 0.3010 + 0.8451 = 1.1461. (b) 0.8451 − 0.3010 = 0.5441. 3 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Simplify without a calculator: log 40 + log 25 − log 10.", answerKey: "log(40 × 25 ÷ 10) = log 100 = 2. 3 marks combining, 3 marks value.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Write 2 log 3 + log 4 − log 6 as a single logarithm.", options: ["log 6", "log 7", "log 36", "log 3"], correctIndex: 0, answerKey: "log 9 + log 4 − log 6 = log(36 ÷ 6) = log 6 (option A).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Use the change-of-base formula with log 2 = 0.3010 and log 3 = 0.4771 to find log₂ 3 to 3 decimal places.", answerKey: "log₂ 3 = log 3 ÷ log 2 = 0.4771 ÷ 0.3010 ≈ 1.585. 3 marks formula, 3 marks value.", marks: 6 },
        { type: "ESSAY", prompt: "State the product, quotient and power laws of logarithms and the change-of-base formula. Use them to expand log(25a³/b), to condense log₃ 5 + log₃ 8 − log₃ 2, and explain why log(x + y) cannot be simplified.", answerKey: "log(MN) = log M + log N; log(M/N) = log M − log N; log(Mⁿ) = n log M; log_b M = log M / log b. Expand: 2 log 5 + 3 log a − log b. Condense: log₃ 20. log(x + y) is the log of a sum; the laws apply only to products, quotients and powers. 4 marks laws, 2 marks expansion, 2 marks condensing, 2 marks explanation.", marks: 10 },
      ],
    },
  ],
};
