import type { PeriodContent } from "@/content/types";

// Grade 10, Semester Two, Period VI of the MoE Mathematics syllabus:
// Unit I Rigid Motion; Unit II A. Statistics, B. Ratio and Rates,
// C. Percentages. Notes rebuilt from published sources (CK-12, Siyavula).
export const mathematicsG10P6: PeriodContent = {
  grade: 10,
  number: 6,
  title: "Rigid Motion, Statistics, Ratio and Percentages",
  summary:
    "Period VI of the MoE Grade 10 Mathematics syllabus. Learners study rigid motions (translation, reflection and symmetry), organise and summarise data with frequency tables, averages and displays, work with ratio, rates and scale drawing, and solve percentage problems.",
  topics: [
    // source: CK-12 — Rigid Transformations / Reflections (https://www.ck12.org/book/ck-12-geometry-concepts-honors/section/2.0/)
    {
      slug: "rigid-motion",
      title: "Rigid Motion: Translation, Reflection and Symmetry",
      objective:
        "By the end of the topic, learners should be able to explain what a rigid motion is, translate and reflect points and shapes using coordinate rules, and identify lines of symmetry.",
      estimatedMinutes: 120,
      notes: `## Rigid motion

A **rigid motion** (rigid transformation) moves a figure **without changing its size or shape**. The image is **congruent** to the original. The three rigid motions are **translation**, **reflection** and **rotation**.

- The original figure is the **object**; the moved figure is the **image**.

## Translation (sliding)

A **translation** moves every point the same distance in the same direction. Using a column shift (a across, b up):
(x, y) → (x + a, y + b)

Example: translate (3, 2) by 4 right and 1 down: (3 + 4, 2 − 1) = (7, 1).

## Reflection (flipping)

A **reflection** flips a figure over a **mirror line**, producing a mirror image. Each point and its image are the same distance from the mirror line. Coordinate rules:

| Mirror line | Rule (x, y) → |
| --- | --- |
| x-axis | (x, −y) |
| y-axis | (−x, y) |
| line y = x | (y, x) |
| line y = −x | (−y, −x) |

\`\`\`svg A triangle and its reflection in the y-axis.
<svg viewBox="0 0 260 160" role="img" aria-label="A triangle reflected in the vertical y-axis">
  <line x1="130" y1="10" x2="130" y2="150" stroke="currentColor" stroke-dasharray="4 3" stroke-opacity="0.7"/>
  <polygon points="150,140 200,140 150,60" fill="#6366f1" fill-opacity="0.2" stroke="#6366f1"/>
  <polygon points="110,140 60,140 110,60" fill="#10b981" fill-opacity="0.2" stroke="#10b981"/>
  <text x="120" y="24" font-size="10" fill="currentColor">mirror</text>
</svg>
\`\`\`

## Symmetry

- A figure has **line (reflection) symmetry** if a mirror line divides it into two matching halves. A square has 4 lines of symmetry; an equilateral triangle has 3; a rectangle has 2; a circle has infinitely many.
- **Rotational symmetry** means the figure looks the same after turning less than a full turn about its centre.

## Key idea

Under any rigid motion, lengths and angles are preserved — only position (and, for reflection, orientation) changes.

## Common errors

- **Changing the size** — rigid motions never resize; that would be an enlargement.
- **Mixing up the axis rules** — reflection in the x-axis negates y, not x.
- **Miscounting lines of symmetry.**`,
      workedExample: `**Question:** The point A is (3, 2).
(a) Find its image after a translation of 2 left and 4 up.
(b) Find its image after reflection in the x-axis.

**Solution**

*Part (a) — translation (x, y) → (x − 2, y + 4).*
A(3, 2) → (3 − 2, 2 + 4) = (1, 6)

*Part (b) — reflection in the x-axis (x, y) → (x, −y).*
A(3, 2) → (3, −2)

**Answer:** (a) (1, 6); (b) (3, −2).`,
      quiz: [
        { prompt: "A rigid motion changes a figure's", options: ["size", "shape", "position only", "angles"], correctIndex: 2, explanation: "Size and shape are preserved; only position (and orientation) changes." },
        { prompt: "Which is NOT a rigid motion?", options: ["translation", "reflection", "rotation", "enlargement"], correctIndex: 3, explanation: "Enlargement changes size." },
        { prompt: "Translating (x, y) by 3 right and 2 up gives", options: ["(x + 3, y + 2)", "(x − 3, y − 2)", "(x + 2, y + 3)", "(3x, 2y)"], correctIndex: 0, explanation: "Add the shift to each coordinate." },
        { prompt: "Reflecting (5, 3) in the x-axis gives", options: ["(5, −3)", "(−5, 3)", "(−5, −3)", "(3, 5)"], correctIndex: 0, explanation: "x-axis rule: (x, −y)." },
        { prompt: "Reflecting (5, 3) in the y-axis gives", options: ["(5, −3)", "(−5, 3)", "(−5, −3)", "(3, 5)"], correctIndex: 1, explanation: "y-axis rule: (−x, y)." },
        { prompt: "The image and object under a rigid motion are", options: ["similar only", "congruent", "different sizes", "unrelated"], correctIndex: 1, explanation: "They are congruent (same size and shape)." },
        { prompt: "A square has how many lines of symmetry?", options: ["1", "2", "4", "8"], correctIndex: 2, explanation: "Two diagonals and two through the sides." },
        { prompt: "Translating (2, 5) by 1 right and 3 down gives", options: ["(3, 2)", "(1, 8)", "(3, 8)", "(1, 2)"], correctIndex: 0, explanation: "(2 + 1, 5 − 3) = (3, 2)." },
        { prompt: "Reflecting (4, 1) in the line y = x gives", options: ["(1, 4)", "(−4, 1)", "(4, −1)", "(−1, −4)"], correctIndex: 0, explanation: "y = x rule swaps coordinates: (y, x)." },
        { prompt: "An equilateral triangle has how many lines of symmetry?", options: ["1", "2", "3", "6"], correctIndex: 2, explanation: "One through each vertex." },
        { prompt: "A translation moves every point", options: ["a different distance", "the same distance and direction", "toward the origin", "in a circle"], correctIndex: 1, explanation: "Same distance, same direction." },
        { prompt: "A rectangle (not a square) has how many lines of symmetry?", options: ["1", "2", "4", "0"], correctIndex: 1, explanation: "Two, through the midpoints of opposite sides." },
        { prompt: "A reflection produces a", options: ["larger image", "mirror image", "rotated image", "smaller image"], correctIndex: 1, explanation: "It flips the figure over the mirror line." },
        { prompt: "Reflecting (−2, 6) in the x-axis gives", options: ["(−2, −6)", "(2, 6)", "(2, −6)", "(6, −2)"], correctIndex: 0, explanation: "(x, −y) = (−2, −6)." },
        { prompt: "A circle has how many lines of symmetry?", options: ["1", "4", "infinitely many", "0"], correctIndex: 2, explanation: "Every diameter is a line of symmetry." },
        { prompt: "Under a rigid motion, the angles of a figure", options: ["increase", "decrease", "stay the same", "become right angles"], correctIndex: 2, explanation: "Angles are preserved." },
        { prompt: "Translating a point by (0, 0) gives", options: ["the origin", "the same point", "its reflection", "a larger point"], correctIndex: 1, explanation: "No movement leaves the point unchanged." },
        { prompt: "A figure that looks the same after a part-turn about its centre has", options: ["no symmetry", "rotational symmetry", "translation only", "enlargement"], correctIndex: 1, explanation: "That is rotational symmetry." },
        { prompt: "Reflecting (7, −3) in the y-axis gives", options: ["(−7, −3)", "(7, 3)", "(−7, 3)", "(−3, 7)"], correctIndex: 0, explanation: "(−x, y) = (−7, −3)." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "The point P(4, −2) is translated by 3 left and 5 up. Find its image, and then reflect the image in the x-axis.", answerKey: "Translation: (4 − 3, −2 + 5) = (1, 3). Reflection in x-axis: (1, −3). Award 3 marks for the translation, 3 for the reflection.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "State the coordinate rule for reflection in (a) the x-axis, (b) the y-axis, and (c) the line y = x.", answerKey: "(a) (x, y) → (x, −y); (b) (x, y) → (−x, y); (c) (x, y) → (y, x). Award 2 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which transformation is NOT rigid?", options: ["translation", "reflection", "rotation", "enlargement"], correctIndex: 3, answerKey: "Enlargement changes size, so it is not rigid. Option D.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State the number of lines of symmetry of a square, a rectangle and an equilateral triangle.", answerKey: "Square 4, rectangle 2, equilateral triangle 3. Award 2 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Explain what is meant by a rigid motion, describe translation and reflection with their coordinate rules, and explain why the image is always congruent to the object.", answerKey: "A rigid motion moves a figure without changing its size or shape. Translation slides every point the same distance and direction, (x, y) → (x + a, y + b). Reflection flips a figure over a mirror line so each point maps to a point the same distance on the other side, e.g. in the x-axis (x, y) → (x, −y). Because lengths and angles are unchanged by these motions, the image has the same side lengths and angles as the object, so it is congruent. Award 3 marks for defining rigid motion, 3 for translation, 2 for reflection, 2 for the congruence reasoning.", marks: 10 },
      ],
    },
    // source: Siyavula — Measures of central tendency, Grade 10 Statistics (https://www.siyavula.com/read/za/mathematics/grade-10/statistics/10-statistics-01)
    {
      slug: "statistics",
      title: "Statistics: Data, Central Tendency and Displays",
      objective:
        "By the end of the topic, learners should be able to define basic statistical terms, build a frequency table, calculate the mean, median and mode, and read stem-and-leaf, histogram and box-and-whisker displays.",
      estimatedMinutes: 130,
      notes: `## Statistical concepts

- **Data** — collected facts or numbers.
- **Population** — the whole group being studied; a **sample** is a part of it.
- **Frequency** — how many times a value occurs.

## Frequency table

A **frequency table** records each value (or class) against its frequency.

| Score | Frequency |
| --- | --- |
| 4 | 2 |
| 7 | 1 |
| 8 | 2 |
| 9 | 1 |
| 12 | 1 |

## Measures of central tendency (averages)

- **Mean** — add all the values and divide by how many there are: mean = (sum of values) ÷ (number of values).
- **Median** — the middle value when the data is arranged in order. With an even number of values, average the two middle ones.
- **Mode** — the value that occurs most often (there may be none or more than one).

## Range

**Range** = highest value − lowest value. It measures spread.

## Displays

- **Histogram** — a bar graph for grouped data; bars touch, and bar height shows frequency.
- **Stem-and-leaf plot** — splits each value into a stem (leading digits) and a leaf (last digit), keeping the actual data while showing its shape.
- **Box-and-whisker plot** — shows the minimum, lower quartile, median, upper quartile and maximum (the five-number summary).

\`\`\`svg A simple box-and-whisker plot marking minimum, quartiles, median and maximum.
<svg viewBox="0 0 320 90" role="img" aria-label="Box and whisker plot">
  <line x1="20" y1="50" x2="300" y2="50" stroke="currentColor" stroke-opacity="0.4"/>
  <line x1="40" y1="42" x2="40" y2="58" stroke="currentColor"/>
  <line x1="40" y1="50" x2="110" y2="50" stroke="currentColor"/>
  <rect x="110" y="34" width="120" height="32" fill="#6366f1" fill-opacity="0.18" stroke="#6366f1"/>
  <line x1="165" y1="34" x2="165" y2="66" stroke="#6366f1" stroke-width="2"/>
  <line x1="230" y1="50" x2="280" y2="50" stroke="currentColor"/>
  <line x1="280" y1="42" x2="280" y2="58" stroke="currentColor"/>
  <text x="30" y="80" font-size="9" fill="currentColor">min</text>
  <text x="150" y="28" font-size="9" fill="currentColor">median</text>
  <text x="268" y="80" font-size="9" fill="currentColor">max</text>
</svg>
\`\`\`

## Common errors

- **Forgetting to order the data before finding the median.**
- **Confusing mean and median** — the mean uses every value; the median is the middle position.
- **Dividing by the wrong count** for the mean.`,
      workedExample: `**Question:** For the data 4, 7, 8, 8, 9, 12, 15, find the mean, median, mode and range.

**Solution**

*Step 1 — mean.* Sum = 4 + 7 + 8 + 8 + 9 + 12 + 15 = 63. There are 7 values.
Mean = 63 ÷ 7 = 9

*Step 2 — median.* The data is already in order; with 7 values the middle is the 4th value.
Median = 8

*Step 3 — mode.* The most frequent value is 8 (it appears twice).
Mode = 8

*Step 4 — range.* 15 − 4 = 11.

**Answer:** mean 9, median 8, mode 8, range 11.`,
      quiz: [
        { prompt: "The mean of 2, 4, 6 is", options: ["3", "4", "6", "12"], correctIndex: 1, explanation: "(2 + 4 + 6) ÷ 3 = 12 ÷ 3 = 4." },
        { prompt: "The median of 3, 5, 9 is", options: ["3", "5", "9", "6"], correctIndex: 1, explanation: "The middle value is 5." },
        { prompt: "The mode of 2, 3, 3, 4, 5 is", options: ["2", "3", "4", "5"], correctIndex: 1, explanation: "3 occurs most often." },
        { prompt: "The range of 4, 10, 7, 2 is", options: ["6", "8", "10", "2"], correctIndex: 1, explanation: "10 − 2 = 8." },
        { prompt: "To find the median you must first", options: ["add the values", "order the data", "square the values", "count the mode"], correctIndex: 1, explanation: "Arrange in order, then find the middle." },
        { prompt: "The mean of 5, 5, 5, 5 is", options: ["4", "5", "20", "0"], correctIndex: 1, explanation: "All equal, so the mean is 5." },
        { prompt: "Frequency means", options: ["the largest value", "how often a value occurs", "the average", "the middle value"], correctIndex: 1, explanation: "It counts occurrences." },
        { prompt: "The median of 2, 4, 6, 8 is", options: ["4", "5", "6", "4.5"], correctIndex: 1, explanation: "Average the two middle values: (4 + 6) ÷ 2 = 5." },
        { prompt: "A box-and-whisker plot shows the", options: ["mean only", "five-number summary", "mode only", "frequency"], correctIndex: 1, explanation: "Min, quartiles, median and max." },
        { prompt: "A histogram displays", options: ["grouped data as bars", "one number", "a pie", "coordinates"], correctIndex: 0, explanation: "Bars show class frequencies." },
        { prompt: "A stem-and-leaf plot keeps the", options: ["actual data values", "mean only", "range only", "mode only"], correctIndex: 0, explanation: "It retains each value split into stem and leaf." },
        { prompt: "The mean of 10, 20, 30, 40 is", options: ["20", "25", "30", "100"], correctIndex: 1, explanation: "100 ÷ 4 = 25." },
        { prompt: "Which average uses every data value?", options: ["mode", "median", "mean", "range"], correctIndex: 2, explanation: "The mean sums all values." },
        { prompt: "A part of a population selected for study is a", options: ["sample", "census", "mode", "range"], correctIndex: 0, explanation: "A sample is a subset of the population." },
        { prompt: "The mode of 1, 2, 2, 3, 3, 3, 4 is", options: ["2", "3", "4", "no mode"], correctIndex: 1, explanation: "3 occurs three times." },
        { prompt: "The median of 7, 3, 9, 1, 5 is", options: ["3", "5", "7", "9"], correctIndex: 1, explanation: "Ordered: 1,3,5,7,9; middle is 5." },
        { prompt: "If a data set has 6 values, the median is", options: ["the 3rd value", "the 6th value", "the average of the 3rd and 4th", "the mode"], correctIndex: 2, explanation: "For an even count, average the two middle values." },
        { prompt: "The range measures", options: ["the average", "the spread", "the most common value", "the total"], correctIndex: 1, explanation: "Highest minus lowest gives the spread." },
        { prompt: "The mean of 3, 7, 8 is", options: ["6", "9", "18", "7"], correctIndex: 0, explanation: "18 ÷ 3 = 6." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "For the data 5, 8, 8, 10, 14, find the mean, median, mode and range.", answerKey: "Mean = (5 + 8 + 8 + 10 + 14) ÷ 5 = 45 ÷ 5 = 9. Median = middle (3rd) = 8. Mode = 8. Range = 14 − 5 = 9. Award 2 marks for the mean, 2 for the median, 1 for the mode, 1 for the range.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "The marks of six learners are 12, 15, 15, 18, 20, 22. Find the mean and the median.", answerKey: "Mean = (12 + 15 + 15 + 18 + 20 + 22) ÷ 6 = 102 ÷ 6 = 17. Median = average of 3rd and 4th = (15 + 18) ÷ 2 = 16.5. Award 3 marks for the mean, 3 for the median.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which display shows the minimum, quartiles, median and maximum?", options: ["histogram", "stem-and-leaf plot", "box-and-whisker plot", "pie chart"], correctIndex: 2, answerKey: "The box-and-whisker plot shows the five-number summary. Option C.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A frequency table shows scores 2 (×3), 3 (×2), 5 (×5). Find the total number of scores and the mean.", answerKey: "Total = 3 + 2 + 5 = 10 scores. Sum = 2×3 + 3×2 + 5×5 = 6 + 6 + 25 = 37. Mean = 37 ÷ 10 = 3.7. Award 2 marks for the total, 3 for the weighted sum, 1 for the mean.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the difference between the mean, median and mode, and describe a situation where the median is a better summary than the mean.", answerKey: "The mean is the sum of all values divided by the count and uses every value. The median is the middle value of ordered data. The mode is the most frequent value. When a data set has an extreme outlier (e.g. incomes where one person earns very much more), the mean is pulled toward the outlier and misrepresents a 'typical' value, whereas the median stays near the centre and is a better summary. Award 2 marks per average defined (6), 4 for the median-vs-mean situation with reasoning.", marks: 10 },
      ],
    },
    // source: Siyavula — Ratio, rate and proportion (https://www.siyavula.com/read/za/mathematical-literacy/grade-10/numbers-and-calculations-with-numbers/01-numbers-and-calculations-with-numbers-06)
    {
      slug: "ratio-rates-and-scale",
      title: "Ratio, Rates and Scale Drawing",
      objective:
        "By the end of the topic, learners should be able to simplify ratios and share a quantity in a given ratio, work with rates and unit rates, and use scales in drawings and maps.",
      estimatedMinutes: 120,
      notes: `## Ratio

A **ratio** compares two or more quantities of the **same kind and unit**, written a : b.

- **Simplify** by dividing by the highest common factor: 12 : 18 = 2 : 3.
- **Equivalent ratios** are equal: 2 : 3 = 4 : 6 = 6 : 9.

## Sharing in a ratio

1. Add the ratio parts to get the total number of parts.
2. Find the value of one part.
3. Multiply for each share.

Share 40 in the ratio 3 : 5: total parts = 8, one part = 40 ÷ 8 = 5, so shares are 15 and 25.

## Rate

A **rate** compares two quantities of **different** units, such as km per hour or dollars per kg.

A **unit rate** has a denominator of 1: 240 km in 4 hours = 60 km/h.

## Using rates

Multiply the rate by the quantity: at 60 km/h for 3 hours, distance = 60 × 3 = 180 km.

## Travel and conversion graphs

- A **travel graph** (distance–time graph) plots distance against time; its gradient is the speed. A horizontal section means at rest.
- A **conversion graph** is a straight line used to change one unit to another (e.g. dollars to Liberian dollars).

## Scale drawing

A **scale** is a ratio comparing a length in a drawing to the real length, e.g. 1 : 100 means 1 cm on the drawing is 100 cm in reality.

- Real length = drawing length × scale factor.
- Drawing length = real length ÷ scale factor.

## Common errors

- **Comparing different units in a ratio** — convert to the same unit first (e.g. 50 cm : 1 m = 50 : 100 = 1 : 2).
- **Forgetting to add all the parts** before sharing.
- **Mixing up which way to multiply/divide** with a scale.`,
      workedExample: `**Question:** Share 120 Liberian dollars between two learners in the ratio 2 : 3.

**Solution**

*Step 1 — total number of parts.*
2 + 3 = 5 parts

*Step 2 — value of one part.*
120 ÷ 5 = 24

*Step 3 — each share.*
First learner: 2 × 24 = 48
Second learner: 3 × 24 = 72

*Step 4 — check.* 48 + 72 = 120 ✔

**Answer: 48 and 72 Liberian dollars.**`,
      quiz: [
        { prompt: "Simplify the ratio 10 : 15.", options: ["2 : 3", "5 : 3", "1 : 5", "3 : 2"], correctIndex: 0, explanation: "Divide both by 5." },
        { prompt: "A ratio compares quantities of the", options: ["same kind and unit", "different units", "opposite signs", "same colour"], correctIndex: 0, explanation: "Ratios need the same unit." },
        { prompt: "Share 30 in the ratio 1 : 2. The larger share is", options: ["10", "15", "20", "25"], correctIndex: 2, explanation: "3 parts, one part = 10, larger = 2 × 10 = 20." },
        { prompt: "240 km in 4 hours is a rate of", options: ["40 km/h", "60 km/h", "80 km/h", "960 km/h"], correctIndex: 1, explanation: "240 ÷ 4 = 60 km/h." },
        { prompt: "A rate compares quantities with", options: ["the same unit", "different units", "no units", "equal values"], correctIndex: 1, explanation: "Rates use different units, e.g. km/h." },
        { prompt: "On a scale 1 : 100, 3 cm on the map represents", options: ["30 cm", "300 cm", "3000 cm", "100 cm"], correctIndex: 1, explanation: "3 × 100 = 300 cm." },
        { prompt: "Equivalent to 2 : 5 is", options: ["4 : 10", "5 : 2", "2 : 10", "3 : 5"], correctIndex: 0, explanation: "Multiply both by 2." },
        { prompt: "A unit rate has a denominator of", options: ["0", "1", "10", "100"], correctIndex: 1, explanation: "A unit rate is 'per 1'." },
        { prompt: "The gradient of a distance–time graph gives", options: ["distance", "time", "speed", "acceleration"], correctIndex: 2, explanation: "Rise/run = distance/time = speed." },
        { prompt: "Share 100 in the ratio 3 : 2. The shares are", options: ["50, 50", "60, 40", "70, 30", "40, 60"], correctIndex: 1, explanation: "5 parts, one part = 20, so 60 and 40." },
        { prompt: "50 cm : 1 m simplifies to", options: ["50 : 1", "1 : 2", "1 : 50", "2 : 1"], correctIndex: 1, explanation: "1 m = 100 cm, so 50 : 100 = 1 : 2." },
        { prompt: "At 5 dollars per kg, 4 kg costs", options: ["9 dollars", "20 dollars", "1.25 dollars", "45 dollars"], correctIndex: 1, explanation: "5 × 4 = 20." },
        { prompt: "A horizontal line on a travel graph means the object is", options: ["speeding up", "at rest", "moving fast", "reversing"], correctIndex: 1, explanation: "No change in distance over time." },
        { prompt: "On a scale 1 : 50, a real length of 500 cm is drawn as", options: ["10 cm", "50 cm", "100 cm", "25 cm"], correctIndex: 0, explanation: "500 ÷ 50 = 10 cm." },
        { prompt: "The ratio 6 : 9 : 12 simplifies to", options: ["2 : 3 : 4", "1 : 2 : 3", "3 : 4 : 5", "2 : 3 : 5"], correctIndex: 0, explanation: "Divide all by 3." },
        { prompt: "A car travels 150 km in 2.5 hours. Its speed is", options: ["50 km/h", "60 km/h", "75 km/h", "375 km/h"], correctIndex: 1, explanation: "150 ÷ 2.5 = 60 km/h." },
        { prompt: "A conversion graph is used to", options: ["measure angles", "change one unit to another", "find the mode", "reflect shapes"], correctIndex: 1, explanation: "It converts between units." },
        { prompt: "Share 45 in the ratio 4 : 5. The smaller share is", options: ["20", "25", "9", "5"], correctIndex: 0, explanation: "9 parts, one part = 5, smaller = 4 × 5 = 20." },
        { prompt: "The ratio of 20 minutes to 1 hour is", options: ["20 : 1", "1 : 3", "1 : 20", "3 : 1"], correctIndex: 1, explanation: "1 hour = 60 min, so 20 : 60 = 1 : 3." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Share 600 Liberian dollars among three people in the ratio 1 : 2 : 3. How much does each receive?", answerKey: "Total parts = 1 + 2 + 3 = 6. One part = 600 ÷ 6 = 100. Shares: 100, 200, 300. Check 100 + 200 + 300 = 600. Award 2 marks for the total parts, 2 for one part, 2 for the three shares.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "A car travels 180 km in 3 hours. Find its average speed, and the distance it would cover in 5 hours at the same speed.", answerKey: "Speed = 180 ÷ 3 = 60 km/h. Distance in 5 h = 60 × 5 = 300 km. Award 3 marks for the speed, 3 for the distance.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "On a map with scale 1 : 200, a distance of 4 cm represents a real distance of", options: ["8 m", "80 m", "800 cm", "50 cm"], correctIndex: 0, answerKey: "4 × 200 = 800 cm = 8 m. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Simplify the ratio 45 minutes : 1.5 hours.", answerKey: "1.5 hours = 90 minutes. Ratio = 45 : 90 = 1 : 2. Award 2 marks for converting to the same unit, 2 for simplifying.", marks: 4 },
        { type: "ESSAY", prompt: "Explain the difference between a ratio and a rate with examples, describe how to share a quantity in a given ratio, and how a scale of 1 : 500 is used to find a real length from a drawing.", answerKey: "A ratio compares quantities of the same unit (e.g. 2 : 3 sharing of money); a rate compares different units (e.g. 60 km/h). To share in a ratio: add the parts, divide the amount by the total parts to get one part, then multiply by each ratio number. With scale 1 : 500, real length = drawing length × 500, so a 3 cm drawing represents 1500 cm = 15 m. Award 3 marks for ratio vs rate with examples, 4 for the sharing method, 3 for the scale calculation.", marks: 10 },
      ],
    },
    // source: CK-12 — Percentage (https://flexbooks.ck12.org/cbook/ck-12-cbse-maths-class-7/section/8.2/primary/lesson/percentage-12566584/)
    {
      slug: "percentages",
      title: "Percentages",
      objective:
        "By the end of the topic, learners should be able to convert between fractions, decimals and percentages, find a percentage of a quantity, and calculate percentage increase, decrease, profit and loss.",
      estimatedMinutes: 110,
      notes: `## What percentage means

**Percent** means "out of a hundred". A percentage is a fraction with denominator 100: 45% = 45/100.

## Converting

- **Percentage → fraction:** put over 100 and simplify — 40% = 40/100 = 2/5.
- **Percentage → decimal:** divide by 100 — 40% = 0.40.
- **Fraction/decimal → percentage:** multiply by 100 — 3/4 = 0.75 = 75%.

## Percentage of a quantity

x% of a quantity = (x/100) × quantity.

25% of 80 = (25/100) × 80 = 20.

## Percentage increase and decrease

percentage change = (change ÷ original amount) × 100

- New price 42, old price 30: change = 12, percentage increase = (12/30) × 100 = 40%.
- To **increase** 200 by 15%: 200 × (1 + 0.15) = 200 × 1.15 = 230.
- To **decrease** 200 by 15%: 200 × (1 − 0.15) = 200 × 0.85 = 170.

## Profit and loss

- Profit = selling price − cost price; Loss = cost price − selling price.
- Profit % = (profit ÷ cost price) × 100; Loss % = (loss ÷ cost price) × 100.

Cost 20, sold 25: profit = 5, profit % = (5/20) × 100 = 25%.

## Common errors

- **Dividing by the new amount** instead of the original for percentage change.
- **Forgetting to multiply by 100** when converting to a percentage.
- **Using selling price instead of cost price** as the base for profit/loss percentage.`,
      workedExample: `**Question:** A trader buys a bag of rice for 30 dollars and sells it for 42 dollars. Find (a) the profit and (b) the profit as a percentage of the cost price.

**Solution**

*Part (a) — profit.*
Profit = selling price − cost price = 42 − 30 = 12 dollars

*Part (b) — profit percentage (base = cost price).*
Profit % = (profit ÷ cost price) × 100 = (12 ÷ 30) × 100 = 0.4 × 100 = 40%

**Answer:** (a) 12 dollars profit; (b) 40% profit.`,
      quiz: [
        { prompt: "45% as a fraction is", options: ["45/10", "45/100", "45/1000", "4.5/100"], correctIndex: 1, explanation: "Percent means out of 100." },
        { prompt: "40% as a decimal is", options: ["4.0", "0.4", "0.04", "40"], correctIndex: 1, explanation: "Divide by 100." },
        { prompt: "3/4 as a percentage is", options: ["34%", "43%", "75%", "0.75%"], correctIndex: 2, explanation: "0.75 × 100 = 75%." },
        { prompt: "25% of 80 is", options: ["16", "20", "25", "40"], correctIndex: 1, explanation: "(25/100) × 80 = 20." },
        { prompt: "10% of 250 is", options: ["10", "25", "50", "2.5"], correctIndex: 1, explanation: "(10/100) × 250 = 25." },
        { prompt: "The base for percentage increase is the", options: ["new amount", "original amount", "difference", "total of both"], correctIndex: 1, explanation: "Divide the change by the original." },
        { prompt: "Increasing 200 by 15% gives", options: ["215", "230", "170", "300"], correctIndex: 1, explanation: "200 × 1.15 = 230." },
        { prompt: "Decreasing 200 by 15% gives", options: ["185", "170", "230", "185.5"], correctIndex: 1, explanation: "200 × 0.85 = 170." },
        { prompt: "Cost 20, sold 25. The profit percentage is", options: ["20%", "25%", "5%", "80%"], correctIndex: 1, explanation: "(5/20) × 100 = 25%." },
        { prompt: "Price rises from 30 to 42. The percentage increase is", options: ["12%", "40%", "28%", "70%"], correctIndex: 1, explanation: "(12/30) × 100 = 40%." },
        { prompt: "50% of a number is 30. The number is", options: ["15", "30", "60", "150"], correctIndex: 2, explanation: "If half is 30, the whole is 60." },
        { prompt: "0.6 as a percentage is", options: ["6%", "60%", "0.6%", "600%"], correctIndex: 1, explanation: "0.6 × 100 = 60%." },
        { prompt: "Profit equals", options: ["cost − selling", "selling − cost", "selling + cost", "cost ÷ selling"], correctIndex: 1, explanation: "Profit = selling price − cost price." },
        { prompt: "20% of 45 is", options: ["9", "15", "25", "90"], correctIndex: 0, explanation: "(20/100) × 45 = 9." },
        { prompt: "A loss percentage uses the base of", options: ["selling price", "cost price", "profit", "the loss itself"], correctIndex: 1, explanation: "Loss % = (loss ÷ cost price) × 100." },
        { prompt: "Footfall drops from 160 to 100. The percentage decrease is", options: ["37.5%", "60%", "40%", "62.5%"], correctIndex: 0, explanation: "(60/160) × 100 = 37.5%." },
        { prompt: "1/5 as a percentage is", options: ["15%", "20%", "25%", "5%"], correctIndex: 1, explanation: "1/5 = 0.2 = 20%." },
        { prompt: "Cost 50, sold 40. The loss percentage is", options: ["10%", "20%", "25%", "80%"], correctIndex: 1, explanation: "Loss = 10; (10/50) × 100 = 20%." },
        { prompt: "35% of 200 is", options: ["35", "70", "700", "7"], correctIndex: 1, explanation: "(35/100) × 200 = 70." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Convert (a) 3/8 to a percentage, (b) 0.24 to a percentage, and (c) 65% to a fraction in lowest terms.", answerKey: "(a) 3/8 = 0.375 = 37.5%. (b) 0.24 × 100 = 24%. (c) 65/100 = 13/20. Award 2 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "A shirt costing 250 dollars is increased in price by 12%. Find the new price.", answerKey: "Increase = 12% of 250 = (12/100) × 250 = 30. New price = 250 + 30 = 280 dollars (or 250 × 1.12 = 280). Award 3 marks for the increase, 3 for the new price.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "A trader buys goods for 80 dollars and sells them for 100 dollars. The profit percentage is", options: ["20%", "25%", "80%", "125%"], correctIndex: 1, answerKey: "Profit = 20; (20/80) × 100 = 25%. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A population of 4,000 decreases by 5%. Find the new population.", answerKey: "Decrease = 5% of 4000 = 200. New population = 4000 − 200 = 3800 (or 4000 × 0.95 = 3800). Award 3 marks for the decrease, 3 for the answer.", marks: 6 },
        { type: "ESSAY", prompt: "Explain how to calculate a percentage increase and a percentage decrease, why the original amount is used as the base, and use HIV-awareness data where reported cases fall from 500 to 400 in a district to find the percentage decrease.", answerKey: "Percentage change = (change ÷ original amount) × 100. For an increase the change is positive; for a decrease the reported value has fallen. The original amount is the base because the change is being measured relative to where the quantity started. From 500 to 400: change = 100, percentage decrease = (100/500) × 100 = 20%. Award 3 marks for the increase/decrease formula, 3 for the original-as-base reasoning, 4 for the 20% calculation.", marks: 10 },
      ],
    },
  ],
};
