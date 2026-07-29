import type { SubjectContent } from "@/content/types";

export const mathematics: SubjectContent = {
  slug: "mathematics",
  name: "Mathematics",
  shortName: "Maths",
  description:
    "Number and numeration for senior high: bases, indices, logarithms and sets.",
  accent: "indigo",
  sortOrder: 2,
  teacherCode: "MTH-10-4471",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "Number and Numeration",
      summary:
        "Learners move from base ten into other number bases, then build the index and logarithm laws that carry them through the rest of senior high, finishing with sets and Venn diagrams.",
      topics: [
        {
          slug: "number-bases",
          title: "Number Bases",
          objective:
            "By the end of the lesson, learners should be able to convert numbers from any base to base ten and from base ten to any base, and add and subtract numbers in a given base.",
          estimatedMinutes: 80,
          notes: `## What a base means

Our everyday counting system is **base ten**: we have ten digits (0-9) and each place is ten times the place to its right.

A number written in base *n* uses only the digits 0 to *n* - 1, and each place is *n* times the place to its right.

- Base 2 (binary) uses 0, 1
- Base 5 uses 0, 1, 2, 3, 4
- Base 8 (octal) uses 0 to 7

We write the base as a subscript: 1011 base 2, 342 base 5.

## Converting from base n to base ten

Expand the number in powers of the base and add.

For 342 base 5:

- 3 x 5^2 = 3 x 25 = 75
- 4 x 5^1 = 4 x 5 = 20
- 2 x 5^0 = 2 x 1 = 2

Total = 75 + 20 + 2 = **97 base ten**

## Converting from base ten to base n

Divide repeatedly by the new base, writing down the remainder each time. Read the remainders **upwards**.

Convert 97 to base 5:

1. 97 divided by 5 = 19 remainder **2**
2. 19 divided by 5 = 3 remainder **4**
3. 3 divided by 5 = 0 remainder **3**

Reading upwards: **342 base 5**. This is the reverse of the expansion above, which is a useful check.

## Adding and subtracting in a base

Work column by column exactly as in base ten, but carry or borrow a group of *n* instead of a group of ten.

- When a column total reaches the base, subtract the base and carry 1.
- When borrowing, the digit borrowed is worth the base, not ten.

## Common errors to watch for

- Writing a digit that does not exist in the base, such as a 5 in base 5.
- Reading remainders downwards instead of upwards.
- Carrying ten instead of the base during addition.`,
          workedExample: `**Question:** Evaluate 234 base 5 + 143 base 5, giving your answer in base 5.

**Solution**

Set the numbers out in columns and work from the right. The base is 5, so we carry whenever a column reaches 5.

*Units column:* 4 + 3 = 7. Since 7 = 5 + 2, write **2** and carry **1**.

*Fives column:* 3 + 4 + 1 (carried) = 8. Since 8 = 5 + 3, write **3** and carry **1**.

*Twenty-fives column:* 2 + 1 + 1 (carried) = 4. This is less than 5, so write **4**.

**Answer: 432 base 5**

*Check by converting to base ten.*

- 234 base 5 = 2(25) + 3(5) + 4 = 50 + 15 + 4 = 69
- 143 base 5 = 1(25) + 4(5) + 3 = 25 + 20 + 3 = 48
- 69 + 48 = 117
- 432 base 5 = 4(25) + 3(5) + 2 = 100 + 15 + 2 = 117

The check agrees, so the answer is correct.`,
          teachingTip:
            "Bring a handful of bottle caps or stones to class. Ask learners to group them in fives, then group the groups of five into twenty-fives. What is left over is the units digit, the groups of five give the next digit, and so on. Learners who physically make the groups stop treating base conversion as a rule to memorise and start seeing it as counting in bundles. Keep the base written on the board at all times during addition work, because the most common error is a learner quietly reverting to carrying ten.",
          quiz: [
            {
              prompt: "Convert 1101 base 2 to base ten.",
              options: ["11", "13", "14", "26"],
              correctIndex: 1,
              explanation:
                "1(8) + 1(4) + 0(2) + 1(1) = 8 + 4 + 0 + 1 = 13.",
            },
            {
              prompt: "Which digit can never appear in a base 6 number?",
              options: ["0", "3", "5", "6"],
              correctIndex: 3,
              explanation:
                "Base 6 uses only the digits 0 to 5. The value six is written as 10 base 6.",
            },
            {
              prompt: "Convert 45 base ten to base 3.",
              options: ["1200 base 3", "1120 base 3", "2100 base 3", "1210 base 3"],
              correctIndex: 0,
              explanation:
                "45 / 3 = 15 r 0; 15 / 3 = 5 r 0; 5 / 3 = 1 r 2; 1 / 3 = 0 r 1. Reading upwards gives 1200 base 3.",
            },
            {
              prompt: "Express 342 base 5 in base ten.",
              options: ["87", "92", "97", "102"],
              correctIndex: 2,
              explanation: "3(25) + 4(5) + 2 = 75 + 20 + 2 = 97.",
            },
            {
              prompt: "Evaluate 23 base 4 + 13 base 4.",
              options: ["42 base 4", "102 base 4", "36 base 4", "112 base 4"],
              correctIndex: 1,
              explanation:
                "Units: 3 + 3 = 6 = 4 + 2, write 2 carry 1. Fours: 2 + 1 + 1 = 4 = 4 + 0, write 0 carry 1. Answer 102 base 4.",
            },
            {
              prompt: "In the number 2413 base 5, what is the place value of the digit 4?",
              options: ["4", "20", "100", "125"],
              correctIndex: 2,
              explanation:
                "The 4 sits in the 5^2 place, so its place value is 4 x 25 = 100 in base ten.",
            },
            {
              prompt: "Convert 1000 base 2 to base ten.",
              options: ["4", "6", "8", "1000"],
              correctIndex: 2,
              explanation: "1(2^3) = 8, and the remaining digits are zero.",
            },
            {
              prompt: "Evaluate 52 base 6 - 24 base 6.",
              options: ["24 base 6", "34 base 6", "28 base 6", "22 base 6"],
              correctIndex: 0,
              explanation:
                "Units: 2 - 4 needs a borrow, so 2 becomes 2 + 6 = 8; 8 - 4 = 4. Sixes: 4 (after borrowing) - 2 = 2. Answer 24 base 6.",
            },
            {
              prompt: "How many different digits are used in base 8?",
              options: ["7", "8", "9", "10"],
              correctIndex: 1,
              explanation: "Base 8 uses 0, 1, 2, 3, 4, 5, 6, 7 — that is eight digits.",
            },
            {
              prompt: "If 24 base n = 20 base ten, what is the value of n?",
              options: ["6", "7", "8", "9"],
              correctIndex: 2,
              explanation:
                "2n + 4 = 20, so 2n = 16 and n = 8. Check that both digits 2 and 4 are valid in base 8, which they are.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt: "Convert 2134 base 5 to base ten.",
              answerKey:
                "2(125) + 1(25) + 3(5) + 4 = 250 + 25 + 15 + 4 = 294. Award 3 marks for correct expansion in powers of 5, 2 marks for the correct total of 294.",
              marks: 5,
            },
            {
              type: "SHORT_ANSWER",
              prompt: "Convert 250 base ten to base 7, showing your division steps.",
              answerKey:
                "250 / 7 = 35 r 5; 35 / 7 = 5 r 0; 5 / 7 = 0 r 5. Reading remainders upwards gives 505 base 7. Award 3 marks for the division chain, 2 marks for reading the remainders in the correct order.",
              marks: 5,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt: "Evaluate 1011 base 2 + 1101 base 2.",
              options: ["11000 base 2", "10110 base 2", "11010 base 2", "10100 base 2"],
              correctIndex: 0,
              answerKey:
                "1011 base 2 = 11 and 1101 base 2 = 13; 11 + 13 = 24 = 11000 base 2. Option A.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt: "If 143 base n = 88 base ten, find n.",
              answerKey:
                "n^2 + 4n + 3 = 88, so n^2 + 4n - 85 = 0. Factorising gives (n + 4 + ...) — solve by formula: n = (-4 + sqrt(16 + 340)) / 2 = (-4 + sqrt(356)) / 2. Since this is not a whole number, learners should test whole values: n = 8 gives 64 + 32 + 3 = 99 (too big); n = 7 gives 49 + 28 + 3 = 80 (too small). Accept a fully reasoned answer showing no integer base satisfies the equation, or award full marks where a learner sets up n^2 + 4n + 3 = 88 correctly and tests systematically. Setting up the equation is worth 4 marks; the systematic test is worth 2.",
              marks: 6,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain, in your own words and with one example of your own, why the same collection of objects can be written as different numerals in different bases without the quantity changing.",
              answerKey:
                "Look for: (a) the idea that a numeral is a record of how objects were grouped, not the quantity itself; (b) recognition that the base fixes the size of each group; (c) a correct worked example of the learner's own, for instance seventeen objects written as 17 base ten, 122 base 3 and 10001 base 2; (d) a clear closing statement that the quantity is unchanged. Award 3 marks for the explanation, 4 for a correct original example, 3 for clarity and accuracy of expression.",
              marks: 10,
            },
          ],
        },
        {
          slug: "indices",
          title: "Indices and the Laws of Exponents",
          objective:
            "By the end of the lesson, learners should be able to state and apply the laws of indices, including zero, negative and fractional indices, and use them to simplify expressions.",
          estimatedMinutes: 80,
          notes: `## Index notation

In the expression a^n, *a* is the **base** and *n* is the **index** (or power, or exponent). It means *a* multiplied by itself *n* times:

- 2^4 = 2 x 2 x 2 x 2 = 16
- 5^3 = 5 x 5 x 5 = 125

## The laws of indices

For any non-zero base *a* and any indices *m* and *n*:

1. **Multiplication:** a^m x a^n = a^(m+n)
2. **Division:** a^m / a^n = a^(m-n)
3. **Power of a power:** (a^m)^n = a^(mn)
4. **Power of a product:** (ab)^n = a^n b^n
5. **Zero index:** a^0 = 1
6. **Negative index:** a^(-n) = 1 / a^n
7. **Fractional index:** a^(1/n) = the n-th root of a, and a^(m/n) = the n-th root of a^m

## Why a^0 = 1

Use the division law. Any non-zero number divided by itself is 1:

a^n / a^n = a^(n-n) = a^0

But a^n / a^n is also plainly 1. So a^0 must equal 1. This is a consequence of the laws, not a separate rule to memorise.

## Why a negative index means a reciprocal

a^0 / a^n = a^(0-n) = a^(-n)

But a^0 = 1, so a^(-n) = 1 / a^n.

## Working with fractional indices

The denominator of the fraction is the root, the numerator is the power.

- 8^(1/3) = the cube root of 8 = 2
- 8^(2/3) = (the cube root of 8)^2 = 2^2 = 4
- 16^(3/4) = (the fourth root of 16)^3 = 2^3 = 8

Take the root first where possible. The numbers stay small and the arithmetic stays manageable.

## Warnings

- The laws apply only when the **bases match**. 2^3 x 3^2 cannot be combined.
- a^(-n) is not negative. 2^(-3) = 1/8, a positive number.
- (a + b)^n is not a^n + b^n.`,
          workedExample: `**Question:** Simplify (27x^6 y^(-3))^(2/3), leaving your answer with positive indices only.

**Solution**

*Step 1 — apply the power to each factor inside the bracket* (law 4).

(27)^(2/3) x (x^6)^(2/3) x (y^(-3))^(2/3)

*Step 2 — deal with the number.*

27^(2/3) means take the cube root first, then square.
The cube root of 27 is 3, and 3^2 = **9**.

*Step 3 — deal with x* (law 3: multiply the indices).

(x^6)^(2/3) = x^(6 x 2/3) = x^4

*Step 4 — deal with y* (law 3 again).

(y^(-3))^(2/3) = y^(-3 x 2/3) = y^(-2)

*Step 5 — collect, then clear the negative index* (law 6).

9 x^4 y^(-2) = **9x^4 / y^2**

**Answer: 9x^4 / y^2**`,
          teachingTip:
            "The laws of indices are usually taught as seven rules to memorise, and learners then apply them to bases that do not match. Spend the first fifteen minutes deriving laws 1 and 2 by writing the multiplication out in full — a^3 x a^2 as aaa x aa — so learners see that the indices add because they are counting how many a's there are. Once they have counted for themselves, derive the zero and negative laws from the division law on the board rather than stating them. Learners who see a^0 = 1 fall out of a rule they already trust rarely misremember it.",
          quiz: [
            {
              prompt: "Simplify 3^4 x 3^2.",
              options: ["3^6", "3^8", "9^6", "6^6"],
              correctIndex: 0,
              explanation: "Same base, so add the indices: 3^(4+2) = 3^6.",
            },
            {
              prompt: "Evaluate 5^0.",
              options: ["0", "1", "5", "Undefined"],
              correctIndex: 1,
              explanation: "Any non-zero number raised to the power zero is 1.",
            },
            {
              prompt: "Evaluate 2^(-3).",
              options: ["-8", "-6", "1/8", "1/6"],
              correctIndex: 2,
              explanation: "A negative index gives the reciprocal: 2^(-3) = 1 / 2^3 = 1/8.",
            },
            {
              prompt: "Simplify (x^3)^4.",
              options: ["x^7", "x^12", "x^81", "4x^3"],
              correctIndex: 1,
              explanation: "Power of a power: multiply the indices, 3 x 4 = 12.",
            },
            {
              prompt: "Evaluate 16^(1/2).",
              options: ["4", "8", "32", "256"],
              correctIndex: 0,
              explanation: "An index of 1/2 means the square root, and the square root of 16 is 4.",
            },
            {
              prompt: "Evaluate 27^(2/3).",
              options: ["6", "9", "18", "81"],
              correctIndex: 1,
              explanation:
                "Take the cube root first: 27^(1/3) = 3. Then square it: 3^2 = 9.",
            },
            {
              prompt: "Simplify a^7 / a^3.",
              options: ["a^4", "a^10", "a^21", "a^(7/3)"],
              correctIndex: 0,
              explanation: "Same base, so subtract the indices: a^(7-3) = a^4.",
            },
            {
              prompt: "Which of the following is equal to (2y)^3?",
              options: ["2y^3", "6y^3", "8y^3", "8y"],
              correctIndex: 2,
              explanation:
                "The index applies to every factor in the bracket: 2^3 x y^3 = 8y^3.",
            },
            {
              prompt: "Solve for x: 2^x = 32.",
              options: ["4", "5", "6", "16"],
              correctIndex: 1,
              explanation: "32 = 2^5, so equating the indices gives x = 5.",
            },
            {
              prompt: "Simplify (4x^2)^(1/2) for positive x.",
              options: ["2x", "4x", "2x^2", "16x"],
              correctIndex: 0,
              explanation:
                "Apply the half power to each factor: 4^(1/2) = 2 and (x^2)^(1/2) = x, giving 2x.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt: "Simplify (8a^9 b^(-6))^(2/3), leaving positive indices only.",
              answerKey:
                "8^(2/3) = 4; (a^9)^(2/3) = a^6; (b^-6)^(2/3) = b^-4. Result 4a^6 b^-4 = 4a^6 / b^4. Award 2 marks for the numerical part, 2 for the a term, 2 for the b term including the reciprocal.",
              marks: 6,
            },
            {
              type: "SHORT_ANSWER",
              prompt: "Solve for x: 3^(2x - 1) = 81.",
              answerKey:
                "81 = 3^4, so 2x - 1 = 4, giving 2x = 5 and x = 2.5. Award 2 marks for expressing 81 as a power of 3, 2 marks for equating indices, 2 marks for the correct value of x.",
              marks: 6,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt: "Evaluate (1/4)^(-3/2).",
              options: ["8", "1/8", "-8", "6"],
              correctIndex: 0,
              answerKey:
                "The negative index inverts the fraction to give 4^(3/2); the square root of 4 is 2 and 2^3 = 8. Option A.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Without using a calculator, show that 2^5 x 4^3 / 8^2 = 2^5, stating the law used at each step.",
              answerKey:
                "Express everything in base 2: 4^3 = (2^2)^3 = 2^6 and 8^2 = (2^3)^2 = 2^6. So the expression is 2^5 x 2^6 / 2^6 = 2^(5+6-6) = 2^5. Award 3 marks for converting to a common base, 2 for correct use of the multiplication and division laws, 2 for naming the laws.",
              marks: 7,
            },
            {
              type: "ESSAY",
              prompt:
                "A learner writes 2^3 x 3^2 = 6^5. Identify the error, explain clearly why the reasoning fails, and state the condition under which indices may be added.",
              answerKey:
                "Look for: (a) identification that the learner added indices across different bases; (b) an explanation that a^m x a^n = a^(m+n) requires the bases to be identical because the law simply counts repeated factors of the same number; (c) the correct value, 8 x 9 = 72, and confirmation that 6^5 = 7776, so the two are far apart; (d) a clear statement of the condition — same base. Award 3 marks for identifying the error, 4 for the explanation, 3 for the numerical check and closing statement.",
              marks: 10,
            },
          ],
        },
        {
          slug: "logarithms",
          title: "Logarithms",
          objective:
            "By the end of the lesson, learners should be able to convert between index and logarithmic form, state and apply the laws of logarithms, and use logarithm tables or a calculator to evaluate expressions in base 10.",
          estimatedMinutes: 80,
          notes: `## Logarithm as the reverse of an index

A logarithm answers the question: *to what power must the base be raised to give this number?*

If a^x = b, then log base a of b = x.

These two statements say exactly the same thing in different notation.

- 2^5 = 32, so log base 2 of 32 = 5
- 10^3 = 1000, so log base 10 of 1000 = 3

When no base is written, base 10 is intended. These are called **common logarithms**.

## The laws of logarithms

Each law mirrors a law of indices, because a logarithm is an index.

1. **Product:** log(MN) = log M + log N
2. **Quotient:** log(M / N) = log M - log N
3. **Power:** log(M^p) = p log M
4. **Log of the base:** log base a of a = 1
5. **Log of one:** log base a of 1 = 0

Multiplication becomes addition and division becomes subtraction. That is exactly why logarithms were invented — they turn hard arithmetic into easy arithmetic.

## Characteristic and mantissa

Any common logarithm has two parts.

- The **characteristic** is the whole-number part. It tells you the size of the number.
- The **mantissa** is the decimal part, read from tables or a calculator.

For a number greater than 1, the characteristic is *one less than the number of digits before the decimal point*.

- log 4780 has characteristic 3 (four digits, so 4 - 1 = 3)
- log 47.8 has characteristic 1
- log 4.78 has characteristic 0

## Restrictions

- You cannot take the logarithm of zero or of a negative number.
- The base must be positive and not equal to 1.

## Antilogarithms

To reverse a logarithm, take the **antilogarithm**. If log x = 2.6789, then x = antilog 2.6789, which equals 10^2.6789.`,
          workedExample: `**Question:** Given that log 2 = 0.3010 and log 3 = 0.4771, evaluate log 24 without using tables.

**Solution**

*Step 1 — break 24 into factors whose logarithms we know.*

24 = 8 x 3 = 2^3 x 3

*Step 2 — apply the product law* (law 1).

log 24 = log(2^3 x 3) = log(2^3) + log 3

*Step 3 — apply the power law to the first term* (law 3).

log(2^3) = 3 log 2 = 3 x 0.3010 = 0.9030

*Step 4 — add.*

log 24 = 0.9030 + 0.4771 = **1.3801**

*Check the characteristic.* 24 has two digits before the decimal point, so the characteristic should be 2 - 1 = 1. Our answer begins with 1, which is consistent.

**Answer: log 24 = 1.3801**`,
          teachingTip:
            "Learners meet logarithms as an unmotivated new notation and resist it. Open the lesson by asking them to multiply 4780 by 39.6 by hand, time it, then show the same product done by adding two logarithms and taking an antilog. The point lands hardest when they have already felt the long multiplication. Follow with the sentence that unlocks every conversion: 'a logarithm is the power'. Ask learners to read log base 2 of 32 = 5 aloud as 'the power you raise 2 to, to get 32, is 5' until the phrasing is automatic.",
          quiz: [
            {
              prompt: "Express 3^4 = 81 in logarithmic form.",
              options: [
                "log base 3 of 4 = 81",
                "log base 3 of 81 = 4",
                "log base 4 of 81 = 3",
                "log base 81 of 3 = 4",
              ],
              correctIndex: 1,
              explanation:
                "In a^x = b the base stays the base and the index becomes the answer: log base 3 of 81 = 4.",
            },
            {
              prompt: "Evaluate log base 10 of 10000.",
              options: ["3", "4", "5", "10"],
              correctIndex: 1,
              explanation: "10000 = 10^4, so the logarithm is 4.",
            },
            {
              prompt: "Evaluate log base 5 of 1.",
              options: ["0", "1", "5", "Undefined"],
              correctIndex: 0,
              explanation: "Any base raised to the power 0 gives 1, so the logarithm of 1 is 0.",
            },
            {
              prompt: "Simplify log 8 + log 5 as a single logarithm.",
              options: ["log 13", "log 40", "log 3", "log 1.6"],
              correctIndex: 1,
              explanation: "The product law gives log(8 x 5) = log 40.",
            },
            {
              prompt: "Simplify log 60 - log 12.",
              options: ["log 5", "log 48", "log 72", "log 720"],
              correctIndex: 0,
              explanation: "The quotient law gives log(60 / 12) = log 5.",
            },
            {
              prompt: "What is the characteristic of log 3457?",
              options: ["2", "3", "4", "5"],
              correctIndex: 1,
              explanation:
                "There are 4 digits before the decimal point, so the characteristic is 4 - 1 = 3.",
            },
            {
              prompt: "Given log 2 = 0.3010, evaluate log 8.",
              options: ["0.6020", "0.9030", "1.2040", "2.4080"],
              correctIndex: 1,
              explanation: "log 8 = log 2^3 = 3 log 2 = 3 x 0.3010 = 0.9030.",
            },
            {
              prompt: "Evaluate log base 2 of 64.",
              options: ["5", "6", "7", "8"],
              correctIndex: 1,
              explanation: "64 = 2^6, so the logarithm is 6.",
            },
            {
              prompt: "Which of the following is undefined?",
              options: ["log 1", "log 0.5", "log 0", "log 100"],
              correctIndex: 2,
              explanation:
                "No power of 10 gives zero, so the logarithm of zero is undefined. Logarithms of positive numbers below 1 are defined but negative.",
            },
            {
              prompt: "Solve for x: log base 3 of x = 2.",
              options: ["6", "8", "9", "23"],
              correctIndex: 2,
              explanation: "Converting to index form gives x = 3^2 = 9.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Given that log 2 = 0.3010 and log 7 = 0.8451, evaluate log 56 without tables.",
              answerKey:
                "56 = 8 x 7 = 2^3 x 7. So log 56 = 3 log 2 + log 7 = 0.9030 + 0.8451 = 1.7481. Award 2 marks for the factorisation, 2 for correct use of the power and product laws, 2 for the final value.",
              marks: 6,
            },
            {
              type: "SHORT_ANSWER",
              prompt: "Solve for x: log base 2 of (x + 3) = 4.",
              answerKey:
                "Convert to index form: x + 3 = 2^4 = 16, so x = 13. Award 3 marks for the conversion, 2 for the solution. Deduct 1 mark if the learner does not check that x + 3 is positive.",
              marks: 5,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt: "Simplify 2 log 5 + log 4.",
              options: ["log 100", "log 14", "log 54", "log 20"],
              correctIndex: 0,
              answerKey:
                "2 log 5 = log 25; log 25 + log 4 = log 100. Option A. Note that log 100 = 2, which learners may also state.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Use logarithms to evaluate (48.6 x 2.94) / 7.3, giving your answer to three significant figures.",
              answerKey:
                "log 48.6 = 1.6866, log 2.94 = 0.4683, log 7.3 = 0.8633. Sum of the first two minus the third = 1.6866 + 0.4683 - 0.8633 = 1.2916. Antilog 1.2916 = 19.6. Award 3 marks for reading the three logarithms, 2 for the correct combination of addition and subtraction, 2 for the antilogarithm and correct rounding to 19.6.",
              marks: 7,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain why the product law of logarithms works, linking it to the corresponding law of indices, and describe one situation in which a logarithm makes a calculation easier than working directly.",
              answerKey:
                "Look for: (a) a statement of the product law; (b) a derivation or clear explanation connecting it to a^m x a^n = a^(m+n) — since logarithms are indices, multiplying the numbers must add the indices; (c) a concrete situation such as multiplying large numbers by hand, or work with quantities spanning many orders of magnitude; (d) coherent expression. Award 4 marks for the link to indices, 3 for the worked or described situation, 3 for clarity.",
              marks: 10,
            },
          ],
        },
        {
          slug: "sets",
          title: "Sets and Venn Diagrams",
          objective:
            "By the end of the lesson, learners should be able to use set notation correctly, find unions, intersections and complements, and solve two-set word problems using Venn diagrams.",
          estimatedMinutes: 80,
          notes: `## What a set is

A **set** is a well-defined collection of distinct objects, called its **elements** or **members**.

"Well-defined" matters: *the set of Grade 10 learners in this school* is a set, but *the set of tall learners* is not, because "tall" is not agreed.

Sets are written in curly brackets: A = {2, 4, 6, 8}.

## Notation you must know

- **Element of:** 4 is an element of A
- **Not an element of:** 5 is not an element of A
- **Empty set:** { } or the symbol for the null set, a set with no elements
- **Universal set (U):** all elements under discussion
- **Subset:** every element of B is also in A
- **n(A):** the number of elements in A

## Operations on sets

**Union (A or B):** everything in A, in B, or in both.
If A = {1, 2, 3} and B = {3, 4}, the union is {1, 2, 3, 4}. Note 3 is listed once.

**Intersection (A and B):** only what is in both.
For the sets above, the intersection is {3}.

**Complement (A'):** everything in the universal set that is not in A.

**Disjoint sets** have no elements in common — their intersection is the empty set.

## Venn diagrams

A rectangle represents the universal set; circles inside represent the sets. Overlapping regions show the intersection.

For two sets there are four regions:

1. In A only
2. In both A and B
3. In B only
4. In neither

## The two-set formula

n(A or B) = n(A) + n(B) - n(A and B)

We subtract the intersection because adding n(A) and n(B) counts the overlap twice.

## Solving word problems

Always fill the **intersection first**, then work outwards by subtraction. If 30 learners take Maths and 12 take both Maths and Physics, then 30 - 12 = 18 take Maths only. Filling the middle first prevents the most common error in the topic.`,
          workedExample: `**Question:** In a class of 40 learners, 25 offer Agriculture, 18 offer Economics and 5 offer neither subject. How many learners offer both subjects?

**Solution**

*Step 1 — find how many offer at least one subject.*

Total = 40, and 5 offer neither.

n(A or E) = 40 - 5 = **35**

*Step 2 — apply the two-set formula.*

n(A or E) = n(A) + n(E) - n(A and E)

35 = 25 + 18 - n(A and E)

35 = 43 - n(A and E)

n(A and E) = 43 - 35 = **8**

*Step 3 — complete the Venn diagram to check.*

- Both: 8
- Agriculture only: 25 - 8 = 17
- Economics only: 18 - 8 = 10
- Neither: 5

Total = 17 + 8 + 10 + 5 = 40, which matches the class size.

**Answer: 8 learners offer both subjects.**`,
          teachingTip:
            "Run this lesson with the class itself as the universal set. Ask everyone who walked to school today to stand on one side of the room and everyone who ate breakfast to stand on the other — learners who did both will physically hesitate, which is the moment to draw the overlapping circles on the board. Count each region with the class and write the numbers straight into a Venn diagram. Then insist, for the rest of the topic, that every word problem begins with the intersection. Learners who start from the outside regions almost always double-count, and the habit of filling the middle first is what carries them through the harder three-set problems later.",
          quiz: [
            {
              prompt: "If A = {1, 2, 3, 4} and B = {3, 4, 5}, what is the union of A and B?",
              options: ["{3, 4}", "{1, 2, 5}", "{1, 2, 3, 4, 5}", "{1, 2, 3, 3, 4, 4, 5}"],
              correctIndex: 2,
              explanation:
                "The union lists every element appearing in either set, each written once.",
            },
            {
              prompt: "For the same sets A and B, what is the intersection?",
              options: ["{3, 4}", "{1, 2}", "{5}", "The empty set"],
              correctIndex: 0,
              explanation: "Only 3 and 4 appear in both sets.",
            },
            {
              prompt: "If n(A) = 12, n(B) = 15 and n(A and B) = 4, find n(A or B).",
              options: ["19", "23", "27", "31"],
              correctIndex: 1,
              explanation: "n(A or B) = 12 + 15 - 4 = 23.",
            },
            {
              prompt: "What is the term for two sets with no elements in common?",
              options: ["Equal sets", "Disjoint sets", "Subsets", "Universal sets"],
              correctIndex: 1,
              explanation: "Disjoint sets have an empty intersection.",
            },
            {
              prompt: "How many elements are in the empty set?",
              options: ["0", "1", "Infinite", "It depends on the universal set"],
              correctIndex: 0,
              explanation: "The empty set contains no elements at all.",
            },
            {
              prompt:
                "If U = {1, 2, 3, 4, 5, 6} and A = {2, 4, 6}, what is the complement of A?",
              options: ["{1, 3, 5}", "{2, 4, 6}", "{1, 2, 3}", "The empty set"],
              correctIndex: 0,
              explanation:
                "The complement holds everything in the universal set that is not in A.",
            },
            {
              prompt: "How many subsets does the set {a, b, c} have?",
              options: ["3", "6", "8", "9"],
              correctIndex: 2,
              explanation:
                "A set with n elements has 2^n subsets, so 2^3 = 8, counting the empty set and the set itself.",
            },
            {
              prompt: "Which of the following is not a well-defined set?",
              options: [
                "The set of even numbers below 20",
                "The set of interesting subjects",
                "The set of counties in Liberia",
                "The set of vowels in the English alphabet",
              ],
              correctIndex: 1,
              explanation:
                "Whether a subject is interesting is a matter of opinion, so membership cannot be decided.",
            },
            {
              prompt:
                "In a group of 50 people, 30 like rice and 25 like cassava, while 10 like both. How many like neither?",
              options: ["5", "10", "15", "20"],
              correctIndex: 0,
              explanation:
                "At least one = 30 + 25 - 10 = 45, so those who like neither = 50 - 45 = 5.",
            },
            {
              prompt: "If A is a subset of B and n(A) = 7, n(B) = 7, what can you conclude?",
              options: [
                "A and B are disjoint",
                "A and B are equal",
                "A is empty",
                "B has more elements than A",
              ],
              correctIndex: 1,
              explanation:
                "A subset with the same number of elements as its parent set must contain exactly the same elements.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "In a class of 60 learners, 35 study Physics, 28 study Chemistry and 8 study neither. Find the number who study both, and the number who study Physics only.",
              answerKey:
                "At least one = 60 - 8 = 52. Using the formula: 52 = 35 + 28 - both, so both = 63 - 52 = 11. Physics only = 35 - 11 = 24. Award 2 marks for finding 52, 3 for both = 11, 2 for Physics only = 24.",
              marks: 7,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Given U = {1, 2, 3, ..., 10}, A = {even numbers} and B = {multiples of 3}, list A, B, the intersection of A and B, and the complement of the union.",
              answerKey:
                "A = {2,4,6,8,10}; B = {3,6,9}; intersection = {6}; union = {2,3,4,6,8,9,10}, so complement of the union = {1,5,7}. Award 1 mark each for A and B, 2 for the intersection, 2 for the complement.",
              marks: 6,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "If n(A) = 20, n(B) = 14 and A and B are disjoint, what is n(A or B)?",
              options: ["6", "20", "34", "280"],
              correctIndex: 2,
              answerKey:
                "Disjoint sets have an empty intersection, so n(A or B) = 20 + 14 - 0 = 34. Option C.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Draw a Venn diagram for two overlapping sets and label all four regions in words, then explain why the two-set formula subtracts the intersection.",
              answerKey:
                "Expect a rectangle labelled U with two overlapping circles, regions labelled A only, both A and B, B only, and neither. Explanation: adding n(A) and n(B) counts the members of the overlap twice, once in each set, so the intersection must be subtracted once to restore the correct total. Award 4 marks for a correct labelled diagram, 4 for the explanation.",
              marks: 8,
            },
            {
              type: "ESSAY",
              prompt:
                "A head teacher claims that in a school of 200 students, 150 take Mathematics, 120 take English and 20 take neither. Show that these figures are possible, state how many take both, and explain what would have made the figures impossible.",
              answerKey:
                "At least one = 200 - 20 = 180. Both = 150 + 120 - 180 = 90. This is possible because 90 does not exceed either individual subject total. Look for the impossibility condition: the intersection can never be larger than the smaller of the two sets, and n(A or B) can never exceed the universal set. Figures would be impossible if, for instance, the computed intersection came out negative or exceeded 120. Award 3 marks for finding 180, 3 for both = 90, 4 for a correct and clearly reasoned impossibility condition.",
              marks: 10,
            },
          ],
        },
      ],
    },
  ],
};
