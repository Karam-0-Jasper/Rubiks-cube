import type { PeriodContent } from "@/content/types";

// Grade 12, Semester One, Period II of the MoE Mathematics syllabus:
// Statistics I, Standard Deviation, Interpretation of Linear and Quadratic
// Graphs, and Mensuration 2. Notes rebuilt from published sources
// (GeeksforGeeks, Siyavula, Khan Academy).
export const mathematicsG12P2: PeriodContent = {
  grade: 12,
  number: 2,
  title: "Statistics, Graphs and Mensuration",
  summary:
    "Period II of the MoE Grade 12 Mathematics syllabus. Learners display and summarise grouped data (bar/pie charts, mean, mode, median, cumulative frequency, quartiles and percentiles), measure spread with dispersion and standard deviation, interpret linear and quadratic graphs, and calculate surface areas and volumes of solids together with distances on the Earth.",
  topics: [
    // source: GeeksforGeeks — Statistics Formulas (https://www.geeksforgeeks.org/maths/statistics-formulas/)
    {
      slug: "statistics-i",
      title: "Statistics I",
      objective:
        "By the end of the topic, learners should be able to display data in bar and pie charts, construct a grouped frequency table, and calculate the mean, mode, median, quartiles and percentiles of grouped data.",
      estimatedMinutes: 120,
      notes: `## Displaying data

- A **bar chart** shows category frequencies as bars of equal width; bar height = frequency.
- A **pie chart** shows each category as a sector; sector angle = (category frequency ÷ total) × 360°.

## Grouped data

- **Grouped data** is sorted into **class intervals** (e.g. 0–10, 10–20).
- The **class midpoint** x = (lower limit + upper limit) ÷ 2 represents each class.
- **f** is the frequency of a class; **N = Σf** is the total frequency.

## Mean of grouped data

- **Mean x̄ = Σfx / Σf**, where x is each class midpoint.

## Mode of grouped data

- The **modal class** is the class with the greatest frequency.
- **Mode = L + [ (f₁ − f₀) / (2f₁ − f₀ − f₂) ] × h**
- L = lower boundary of the modal class, f₁ = its frequency, f₀ = frequency of the class before, f₂ = frequency of the class after, h = class width.

## Median of grouped data

- **Median = L + [ (N/2 − CF) / f ] × h**
- L = lower boundary of the median class, CF = cumulative frequency before it, f = its frequency, h = class width.

## Cumulative frequency, quartiles and percentiles

- The **cumulative frequency** of a class is the running total of frequencies up to that class.
- Plotting cumulative frequency against the upper class boundary gives the **cumulative frequency curve (ogive)**.
- From the ogive read off:
- **Q₁ (lower quartile)** at the N/4 position, **Q₂ (median)** at N/2, **Q₃ (upper quartile)** at 3N/4.
- The **kth percentile** is read at the (k·N/100) position.
- **Interquartile range = Q₃ − Q₁**.

## Common errors

- **Using class limits instead of midpoints** in the mean.
- **Forgetting to divide by Σf** (not by the number of classes).
- **Reading the ogive at the wrong position** for a quartile.`,
      workedExample: `**Question:** Find the mean of the grouped data below.

| Class | Midpoint x | Frequency f | fx |
| --- | --- | --- | --- |
| 0–10 | 5 | 2 | 10 |
| 10–20 | 15 | 5 | 75 |
| 20–30 | 25 | 3 | 75 |

**Solution**

*Step 1 — find Σf.* Σf = 2 + 5 + 3 = 10.

*Step 2 — find Σfx.* Σfx = 10 + 75 + 75 = 160.

*Step 3 — apply the formula x̄ = Σfx / Σf.*
x̄ = 160 / 10 = 16

**Answer: The mean is 16.**`,
      quiz: [
        { prompt: "In a pie chart the angle of a sector equals", options: ["frequency × 360°", "(frequency ÷ total) × 360°", "frequency ÷ 360°", "total ÷ frequency"], correctIndex: 1, explanation: "Each sector is a fraction of the whole 360°." },
        { prompt: "A category with 10 out of 40 items takes a pie-chart angle of", options: ["36°", "90°", "100°", "120°"], correctIndex: 1, explanation: "(10 ÷ 40) × 360° = 90°." },
        { prompt: "The midpoint of the class 20–30 is", options: ["20", "25", "30", "50"], correctIndex: 1, explanation: "(20 + 30) ÷ 2 = 25." },
        { prompt: "The mean of grouped data is", options: ["Σf ÷ Σfx", "Σfx ÷ Σf", "Σx ÷ N", "Σf ÷ N"], correctIndex: 1, explanation: "x̄ = Σfx / Σf." },
        { prompt: "The modal class is the class with the", options: ["smallest frequency", "greatest frequency", "widest interval", "highest midpoint"], correctIndex: 1, explanation: "Mode lies in the most frequent class." },
        { prompt: "In the median formula, CF is the", options: ["class width", "cumulative frequency before the median class", "modal frequency", "midpoint"], correctIndex: 1, explanation: "CF is the running total before the median class." },
        { prompt: "Cumulative frequency is", options: ["the largest frequency", "the running total of frequencies", "the mean", "the range"], correctIndex: 1, explanation: "It adds frequencies up to each class." },
        { prompt: "The graph of cumulative frequency is called the", options: ["histogram", "ogive", "bar chart", "pie chart"], correctIndex: 1, explanation: "The cumulative frequency curve is the ogive." },
        { prompt: "The lower quartile Q₁ is read at the position", options: ["N/2", "N/4", "3N/4", "N"], correctIndex: 1, explanation: "Q₁ is a quarter of the way up." },
        { prompt: "The median corresponds to the position", options: ["N/4", "N/2", "3N/4", "N/10"], correctIndex: 1, explanation: "Q₂ (median) is at N/2." },
        { prompt: "The upper quartile Q₃ is at", options: ["N/4", "N/2", "3N/4", "2N"], correctIndex: 2, explanation: "Q₃ is three-quarters of the way up." },
        { prompt: "The interquartile range is", options: ["Q₃ + Q₁", "Q₃ − Q₁", "Q₂ − Q₁", "Q₃ ÷ Q₁"], correctIndex: 1, explanation: "IQR = Q₃ − Q₁." },
        { prompt: "If Σfx = 300 and Σf = 20, the mean is", options: ["15", "20", "6", "300"], correctIndex: 0, explanation: "300 ÷ 20 = 15." },
        { prompt: "The 50th percentile is the same as the", options: ["mode", "median", "range", "mean"], correctIndex: 1, explanation: "The median is the 50th percentile." },
        { prompt: "In the mean of grouped data, x represents the", options: ["frequency", "class midpoint", "cumulative frequency", "class width"], correctIndex: 1, explanation: "x is each class midpoint." },
        { prompt: "A bar chart shows frequency using", options: ["angles", "bar heights", "slopes", "cumulative totals"], correctIndex: 1, explanation: "Bar height represents frequency." },
        { prompt: "If N = 40, Q₁ is read at position", options: ["10", "20", "30", "40"], correctIndex: 0, explanation: "N/4 = 40/4 = 10." },
        { prompt: "The class width h of 30–40 is", options: ["5", "10", "35", "70"], correctIndex: 1, explanation: "40 − 30 = 10." },
        { prompt: "To find quartiles from an ogive you read the", options: ["frequency axis at fixed x", "cumulative frequency at N/4, N/2, 3N/4", "midpoints", "class widths"], correctIndex: 1, explanation: "Read across at those cumulative positions." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "A survey of 60 people found: bus 25, car 20, walk 15. Find the pie-chart angle for each mode of travel.", answerKey: "Bus: (25/60)×360° = 150°. Car: (20/60)×360° = 120°. Walk: (15/60)×360° = 90°. Check 150+120+90 = 360°. Award 2 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Find the mean of: class 0–10 (f=4), 10–20 (f=6), 20–30 (f=10).", answerKey: "Midpoints 5, 15, 25; fx = 20, 90, 250; Σfx = 360; Σf = 20; mean = 360/20 = 18. Award 2 for midpoints, 2 for Σfx, 2 for 18.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "The upper quartile Q₃ of a distribution with N = 80 is read from the ogive at position", options: ["20", "40", "60", "80"], correctIndex: 2, answerKey: "3N/4 = 3×80/4 = 60. Option C.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Given Q₁ = 12 and Q₃ = 28, find the interquartile range and semi-interquartile range.", answerKey: "IQR = Q₃ − Q₁ = 28 − 12 = 16. Semi-interquartile range = IQR/2 = 8. Award 3 marks for IQR, 3 for 8.", marks: 6 },
        { type: "ESSAY", prompt: "Explain how to construct a cumulative frequency curve and how the median and quartiles are obtained from it. State the position on the vertical axis used for each of Q₁, Q₂ and Q₃.", answerKey: "Form a cumulative frequency column by adding frequencies class by class, then plot each cumulative total against the upper class boundary and join the points with a smooth curve (the ogive). To read a value, go up the cumulative-frequency axis to the required position, across to the curve, then down to the data axis. Q₁ is read at N/4, the median Q₂ at N/2, and Q₃ at 3N/4. Award 4 marks for the construction, 3 for the reading method, 3 for the three positions.", marks: 10 },
      ],
    },
    // source: Siyavula — Variance and standard deviation, Grade 11 (https://www.siyavula.com/read/za/mathematics/grade-11/statistics/11-statistics-04)
    {
      slug: "standard-deviation",
      title: "Standard Deviation",
      objective:
        "By the end of the topic, learners should be able to describe dispersion, calculate deviations from the mean, and compute the variance and standard deviation of a data set.",
      estimatedMinutes: 110,
      notes: `## Dispersion

- **Dispersion** measures how **spread out** a data set is around its average.
- Small dispersion = data close to the mean (consistent); large dispersion = widely spread.

## Measures of dispersion

| Measure | Meaning |
| --- | --- |
| Range | highest value − lowest value |
| Interquartile range | Q₃ − Q₁ |
| Semi-interquartile range | (Q₃ − Q₁) ÷ 2 |
| Variance | mean of the squared deviations |
| Standard deviation | √(variance) |

## Deviation

- A **deviation** is the difference between a value and the mean: **(x − x̄)**.
- Deviations above the mean are positive, below the mean negative; they **sum to zero**, so they are **squared** before averaging.

## Variance and standard deviation

- **Variance σ² = Σ(x − x̄)² / N** (for grouped data, σ² = Σf(x − x̄)² / Σf).
- **Standard deviation σ = √(variance)**.
- The standard deviation is in the **same units as the data**, which is why it is preferred.
- A **small standard deviation** means values cluster near the mean; a **large** one means they are widely scattered.

## Steps to compute standard deviation

1. Find the mean x̄.
2. Find each deviation (x − x̄).
3. Square each deviation.
4. Add the squared deviations and divide by N to get the variance.
5. Take the square root for the standard deviation.

## Common errors

- **Forgetting to square** the deviations (they would cancel to zero).
- **Stopping at the variance** — the standard deviation is its square root.
- **Dividing by the number of classes** instead of by Σf.`,
      workedExample: `**Question:** Find the standard deviation of 2, 4, 4, 4, 5, 5, 7, 9.

**Solution**

*Step 1 — find the mean.* x̄ = (2+4+4+4+5+5+7+9) / 8 = 40 / 8 = 5.

*Step 2 — find the deviations (x − 5).*
−3, −1, −1, −1, 0, 0, 2, 4

*Step 3 — square them.*
9, 1, 1, 1, 0, 0, 4, 16

*Step 4 — variance = Σ(x − x̄)² / N.*
Σ = 9+1+1+1+0+0+4+16 = 32, so variance = 32 / 8 = 4.

*Step 5 — standard deviation = √variance.*
σ = √4 = 2

**Answer: The standard deviation is 2.**`,
      quiz: [
        { prompt: "Dispersion measures how data is", options: ["averaged", "spread out around the average", "counted", "ordered"], correctIndex: 1, explanation: "It describes spread about the mean." },
        { prompt: "The range is", options: ["highest − lowest", "Q₃ − Q₁", "mean of squares", "√variance"], correctIndex: 0, explanation: "Range = maximum − minimum." },
        { prompt: "A deviation is", options: ["x + x̄", "x − x̄", "x × x̄", "x ÷ x̄"], correctIndex: 1, explanation: "Deviation = value − mean." },
        { prompt: "The sum of all deviations from the mean is", options: ["always positive", "always zero", "always negative", "the variance"], correctIndex: 1, explanation: "They cancel out, so we square them." },
        { prompt: "Variance is the mean of the", options: ["deviations", "squared deviations", "values", "cumulative frequencies"], correctIndex: 1, explanation: "σ² = Σ(x−x̄)²/N." },
        { prompt: "Standard deviation is", options: ["variance squared", "√variance", "the range", "the mean"], correctIndex: 1, explanation: "σ = √(variance)." },
        { prompt: "Standard deviation is preferred because it is in", options: ["squared units", "the same units as the data", "percentages", "no units"], correctIndex: 1, explanation: "Taking the root restores the data's units." },
        { prompt: "A small standard deviation means data is", options: ["widely spread", "clustered near the mean", "all zero", "increasing"], correctIndex: 1, explanation: "Small spread = values near the mean." },
        { prompt: "For the data 2,4,4,4,5,5,7,9 the mean is", options: ["4", "5", "6", "40"], correctIndex: 1, explanation: "40 ÷ 8 = 5." },
        { prompt: "If the variance is 9, the standard deviation is", options: ["3", "81", "4.5", "18"], correctIndex: 0, explanation: "√9 = 3." },
        { prompt: "If the standard deviation is 5, the variance is", options: ["√5", "10", "25", "2.5"], correctIndex: 2, explanation: "Variance = σ² = 25." },
        { prompt: "The interquartile range is", options: ["Q₃ − Q₁", "Q₃ + Q₁", "max − min", "√variance"], correctIndex: 0, explanation: "IQR uses the quartiles." },
        { prompt: "The semi-interquartile range is", options: ["Q₃ − Q₁", "(Q₃ − Q₁)/2", "(Q₃ + Q₁)/2", "Q₂"], correctIndex: 1, explanation: "Half the interquartile range." },
        { prompt: "Deviations are squared in order to", options: ["make them smaller", "stop them cancelling to zero", "remove the mean", "add units"], correctIndex: 1, explanation: "Squaring removes the sign so they don't cancel." },
        { prompt: "The variance of grouped data uses", options: ["Σf(x−x̄)²/Σf", "Σfx/Σf", "Q₃−Q₁", "highest−lowest"], correctIndex: 0, explanation: "Weight each squared deviation by frequency." },
        { prompt: "The range of 3, 7, 8, 15 is", options: ["8", "12", "15", "18"], correctIndex: 1, explanation: "15 − 3 = 12." },
        { prompt: "If all values are equal, the standard deviation is", options: ["1", "0", "the mean", "undefined"], correctIndex: 1, explanation: "No spread means σ = 0." },
        { prompt: "The last step in finding σ is to", options: ["square the mean", "take the square root of the variance", "add the deviations", "divide by 2"], correctIndex: 1, explanation: "σ = √variance." },
        { prompt: "Compared with the range, standard deviation uses", options: ["only two values", "every value in the data", "no values", "only the mode"], correctIndex: 1, explanation: "It accounts for all data points." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Find the range and the mean of 4, 8, 6, 10, 12.", answerKey: "Range = 12 − 4 = 8. Mean = (4+8+6+10+12)/5 = 40/5 = 8. Award 3 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Find the variance and standard deviation of 5, 6, 8, 9 (mean = 7).", answerKey: "Deviations: −2, −1, 1, 2; squares 4, 1, 1, 4; Σ = 10; variance = 10/4 = 2.5; σ = √2.5 ≈ 1.58. Award 2 for deviations, 2 for variance 2.5, 2 for σ ≈ 1.58.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "The standard deviation of a data set with variance 16 is", options: ["4", "8", "16", "256"], correctIndex: 0, answerKey: "σ = √16 = 4. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why deviations from the mean are squared before averaging.", answerKey: "The deviations (x − x̄) sum to zero because positive and negative deviations cancel, so their plain average is always 0 and useless. Squaring makes every term non-negative, so the average of the squares genuinely measures spread. Award 3 marks for the cancelling point, 3 for the squaring reason.", marks: 6 },
        { type: "ESSAY", prompt: "List the steps to calculate a standard deviation, then apply them to the data 2, 4, 6 (mean = 4) and interpret the result.", answerKey: "Steps: find the mean; find each deviation; square each; average the squares (variance); take the square root. For 2,4,6: deviations −2,0,2; squares 4,0,4; Σ = 8; variance = 8/3 ≈ 2.67; σ = √2.67 ≈ 1.63. Interpretation: the data lie on average about 1.63 units from the mean, a moderate spread. Award 4 marks for the steps, 4 for the calculation, 2 for the interpretation.", marks: 10 },
      ],
    },
    // source: Khan Academy — Increasing, decreasing, positive or negative intervals; Quadratic systems graphical solution (https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions/x2f8bb11595b61c86:intervals-where-a-function-is-positive-negative-increasing-or-decreasing/v/increasing-decreasing-positive-and-negative-intervals)
    {
      slug: "interpretation-of-linear-and-quadratic-graphs",
      title: "Interpretation of Linear and Quadratic Graphs",
      objective:
        "By the end of the topic, learners should be able to solve a linear-and-quadratic system graphically, read solutions from a quadratic graph, and state where a function is increasing, decreasing, positive or negative.",
      estimatedMinutes: 110,
      notes: `## Solving a linear and a quadratic graph together

- Draw the **line** (y = mx + c) and the **parabola** (y = ax² + bx + c) on the same axes.
- The **points of intersection** are the solutions of the simultaneous equations.
- Their **x-coordinates** are the x-solutions; their **y-coordinates** the y-solutions.
- Two graphs may meet at **two points, one point (a tangent), or not at all**.

## Using a quadratic graph to solve equations

- The **roots** (x-intercepts) of y = ax² + bx + c are where the curve cuts the x-axis; they solve ax² + bx + c = 0.
- To solve ax² + bx + c = k, draw the horizontal line **y = k** and read the x-values where it meets the curve.

## Increasing and decreasing

- A function is **increasing** where the graph goes **up** as x increases (positive slope).
- A function is **decreasing** where the graph goes **down** as x increases (negative slope).
- For a parabola y = ax² + … (a > 0), the curve **decreases before the vertex (turning point) and increases after it**.

## Positive and negative regions

- y is **positive** where the graph is **above the x-axis**; **negative** where it is **below** it.
- The sign of y **changes at each root** (x-intercept).

\`\`\`svg Parabola y = x² − 4 with roots at x = −2 and x = 2
<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="120" x2="200" y2="120" stroke="#888" stroke-width="1"/>
  <line x1="110" y1="15" x2="110" y2="160" stroke="#888" stroke-width="1"/>
  <text x="202" y="124" font-size="10">x</text>
  <text x="114" y="14" font-size="10">y</text>
  <path d="M50 30 Q110 190 170 30" fill="none" stroke="#1565c0" stroke-width="2"/>
  <circle cx="70" cy="120" r="2.5" fill="#c62828"/>
  <text x="58" y="134" font-size="9">-2</text>
  <circle cx="150" cy="120" r="2.5" fill="#c62828"/>
  <text x="146" y="134" font-size="9">2</text>
  <circle cx="110" cy="150" r="2.5" fill="#2e7d32"/>
  <text x="114" y="154" font-size="9">vertex</text>
</svg>
\`\`\`

## Common errors

- **Reading y-values as solutions** when the x-values are wanted.
- **Confusing increasing/decreasing (slope) with positive/negative (above/below axis)**.
- **Missing the second intersection point** of a line and a parabola.`,
      workedExample: `**Question:** For y = x² − 4, (a) state the roots, (b) where y is positive, (c) where y is negative, and (d) where the function is increasing.

**Solution**

*Step 1 — find the roots (y = 0).*
x² − 4 = 0 → x² = 4 → x = −2 or x = 2.

*Step 2 — where is y positive?* The parabola opens upward, so it is above the x-axis outside the roots: **x < −2 or x > 2**.

*Step 3 — where is y negative?* Between the roots the curve dips below the axis: **−2 < x < 2**.

*Step 4 — where is it increasing?* The turning point is at x = 0 (the vertex (0, −4)); the curve rises after it: **increasing for x > 0** (and decreasing for x < 0).

**Answer: roots x = ±2; positive for x < −2 or x > 2; negative for −2 < x < 2; increasing for x > 0.**`,
      quiz: [
        { prompt: "The solutions of a linear-and-quadratic system are the graphs'", options: ["y-intercepts", "points of intersection", "turning points", "gradients"], correctIndex: 1, explanation: "Where the line meets the parabola." },
        { prompt: "The roots of y = ax² + bx + c are where the curve", options: ["is highest", "cuts the x-axis", "cuts the y-axis", "is steepest"], correctIndex: 1, explanation: "Roots are the x-intercepts (y = 0)." },
        { prompt: "A function is increasing where its graph", options: ["goes up as x increases", "goes down as x increases", "is flat", "is below the axis"], correctIndex: 0, explanation: "Rising graph = increasing." },
        { prompt: "A function is decreasing where its graph", options: ["goes up", "goes down as x increases", "is above the axis", "has roots"], correctIndex: 1, explanation: "Falling graph = decreasing." },
        { prompt: "y is positive where the graph is", options: ["above the x-axis", "below the x-axis", "on the y-axis", "at the vertex"], correctIndex: 0, explanation: "Positive y means above the axis." },
        { prompt: "y is negative where the graph is", options: ["above the x-axis", "below the x-axis", "at a root", "at the maximum"], correctIndex: 1, explanation: "Negative y means below the axis." },
        { prompt: "For y = x² − 4 the roots are", options: ["x = 0 and 4", "x = −2 and 2", "x = −4 and 4", "x = 2 only"], correctIndex: 1, explanation: "x² = 4 gives x = ±2." },
        { prompt: "For y = x² − 4, y is negative for", options: ["x < −2", "−2 < x < 2", "x > 2", "all x"], correctIndex: 1, explanation: "Between the roots the curve is below the axis." },
        { prompt: "For an upward parabola, the function decreases", options: ["after the vertex", "before the vertex", "everywhere", "nowhere"], correctIndex: 1, explanation: "It falls to the vertex then rises." },
        { prompt: "The sign of y changes at each", options: ["y-intercept", "root (x-intercept)", "turning point", "asymptote"], correctIndex: 1, explanation: "Crossing the x-axis flips the sign." },
        { prompt: "To solve x² − 4 = 5 from the graph, draw the line", options: ["y = 0", "y = 5", "x = 5", "y = x"], correctIndex: 1, explanation: "Read where y = 5 meets the curve." },
        { prompt: "A line and a parabola can intersect at most", options: ["once", "twice", "three times", "never"], correctIndex: 1, explanation: "Solving gives a quadratic, so up to two points." },
        { prompt: "If a line just touches a parabola at one point, the line is a", options: ["chord", "tangent", "secant", "root"], correctIndex: 1, explanation: "One repeated intersection is a tangent." },
        { prompt: "The turning point of y = x² − 4 is at", options: ["(0, −4)", "(−4, 0)", "(2, 0)", "(0, 4)"], correctIndex: 0, explanation: "Vertex at x = 0, y = −4." },
        { prompt: "For y = x² − 4, the function is increasing for", options: ["x < 0", "x > 0", "all x", "x = 0"], correctIndex: 1, explanation: "It rises to the right of the vertex." },
        { prompt: "The x-coordinates of intersection points give the", options: ["y-solutions", "x-solutions", "gradients", "areas"], correctIndex: 1, explanation: "They are the x-values that satisfy both equations." },
        { prompt: "At a root of the quadratic, y equals", options: ["1", "0", "the maximum", "the gradient"], correctIndex: 1, explanation: "A root is where y = 0." },
        { prompt: "Increasing/decreasing describes the graph's", options: ["height above axis", "slope direction", "number of roots", "y-intercept"], correctIndex: 1, explanation: "It is about rising or falling (slope)." },
        { prompt: "Positive/negative describes whether the graph is", options: ["rising or falling", "above or below the x-axis", "left or right", "wide or narrow"], correctIndex: 1, explanation: "Sign of y = side of the x-axis." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Find the intersection points of y = x² − 4 and y = x + 2 algebraically (these are the graphical solutions).", answerKey: "Set x² − 4 = x + 2 → x² − x − 6 = 0 → (x − 3)(x + 2) = 0 → x = 3 or x = −2. Then y = x + 2 gives (3, 5) and (−2, 0). Award 3 marks for the quadratic, 3 for both points.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "For y = x² − 9, state (a) the roots and (b) the interval where y is negative.", answerKey: "(a) x² = 9 so x = ±3. (b) Below the axis between the roots: −3 < x < 3. Award 3 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "For an upward parabola with vertex at x = 1, the function is decreasing for", options: ["x > 1", "x < 1", "all x", "x = 1 only"], correctIndex: 1, answerKey: "It falls until the vertex, so it decreases for x < 1. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain how to use the graph of y = x² − 2x − 3 to solve x² − 2x − 3 = 0.", answerKey: "The solutions are where the curve cuts the x-axis (y = 0), i.e. the roots. Reading the x-intercepts gives x = −1 and x = 3, so those are the solutions. Award 3 marks for identifying the x-intercepts as the solutions, 3 for the values −1 and 3.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the difference between where a quadratic graph is increasing/decreasing and where it is positive/negative, using y = x² − 4 as an example.", answerKey: "Increasing/decreasing is about the slope: whether the curve rises or falls as x increases. For y = x² − 4 the curve decreases for x < 0 and increases for x > 0 (turning point at (0, −4)). Positive/negative is about the sign of y: whether the curve is above or below the x-axis. For y = x² − 4 it is positive (above) for x < −2 or x > 2 and negative (below) for −2 < x < 2, changing sign at the roots x = ±2. Award 3 marks for the increasing/decreasing explanation, 3 for positive/negative, 4 for correct intervals in the example.", marks: 10 },
      ],
    },
    // source: Siyavula — Right pyramids, right cones and spheres, Grade 11 (https://www.siyavula.com/read/za/mathematics/grade-11/measurement/07-measurement-03); GeeksforGeeks — Great Circle Distance Formula (https://www.geeksforgeeks.org/maths/great-circle-distance-formula/)
    {
      slug: "mensuration-2",
      title: "Mensuration 2",
      objective:
        "By the end of the topic, learners should be able to calculate the surface area and volume of prisms, cones, pyramids and spheres, and find distances along a latitude and a longitude.",
      estimatedMinutes: 120,
      notes: `## Prisms

- A **prism** has a uniform cross-section along its length.
- **Volume = area of cross-section × length.**
- **Total surface area = sum of the areas of all faces.**

## Cones

- For a right circular cone with base radius r, perpendicular height h and slant height l = √(r² + h²):
- **Curved (lateral) surface area = πrl.**
- **Total surface area = πrl + πr² = πr(l + r).**
- **Volume = ⅓πr²h.**

## Pyramids

- **Volume = ⅓ × base area × perpendicular height.**
- **Total surface area = base area + area of the triangular faces.**

## Spheres

- **Surface area = 4πr².**
- **Volume = (4/3)πr³.**

| Solid | Volume | Surface area |
| --- | --- | --- |
| Prism | base area × length | sum of faces |
| Cone | ⅓πr²h | πr(l + r) |
| Pyramid | ⅓ × base × height | base + triangular faces |
| Sphere | (4/3)πr³ | 4πr² |

## Distance along latitude and longitude

- The Earth is treated as a sphere of radius R (about 6 400 km).
- A **great circle** (e.g. a meridian of longitude, or the equator) has radius R.
- Distance along a **meridian** between two latitudes differing by θ°:
- **d = (θ / 360) × 2πR.**
- A **parallel of latitude** at latitude φ has radius r = R cos φ. Distance along it between two longitudes differing by θ°:
- **d = (θ / 360) × 2πR cos φ.**

## Common errors

- **Using height instead of slant height** in the cone's curved surface area (use l, not h).
- **Forgetting the base** when a total surface area is asked.
- **Omitting cos φ** for distance along a parallel of latitude.`,
      workedExample: `**Question:** A right circular cone has base radius 7 cm and perpendicular height 24 cm. Taking π = 22/7, find its curved surface area and volume.

**Solution**

*Step 1 — find the slant height l = √(r² + h²).*
l = √(7² + 24²) = √(49 + 576) = √625 = 25 cm.

*Step 2 — curved surface area = πrl.*
= (22/7) × 7 × 25 = 22 × 25 = 550 cm².

*Step 3 — volume = ⅓πr²h.*
= ⅓ × (22/7) × 7² × 24 = ⅓ × (22/7) × 49 × 24
= ⅓ × 22 × 7 × 24 = ⅓ × 3696 = 1232 cm³.

**Answer: curved surface area = 550 cm², volume = 1232 cm³.**`,
      quiz: [
        { prompt: "The volume of a prism is", options: ["cross-section area × length", "½ base × height", "πr²h", "4πr²"], correctIndex: 0, explanation: "Uniform cross-section times length." },
        { prompt: "The slant height of a cone with r = 3, h = 4 is", options: ["5", "7", "12", "25"], correctIndex: 0, explanation: "√(9 + 16) = √25 = 5." },
        { prompt: "The curved surface area of a cone is", options: ["πr²", "πrl", "2πrh", "4πr²"], correctIndex: 1, explanation: "CSA = πrl uses the slant height." },
        { prompt: "The volume of a cone is", options: ["πr²h", "⅓πr²h", "4/3πr³", "πrl"], correctIndex: 1, explanation: "One-third of a cylinder of the same base and height." },
        { prompt: "The total surface area of a cone is", options: ["πrl", "πr(l + r)", "4πr²", "2πr²"], correctIndex: 1, explanation: "Curved surface plus circular base." },
        { prompt: "The volume of a pyramid is", options: ["base × height", "⅓ × base × height", "½ × base × height", "πr²h"], correctIndex: 1, explanation: "One-third base area times height." },
        { prompt: "The surface area of a sphere is", options: ["4πr²", "πr²", "2πr²", "4/3πr³"], correctIndex: 0, explanation: "SA = 4πr²." },
        { prompt: "The volume of a sphere is", options: ["4πr²", "(4/3)πr³", "πr²h", "⅓πr³"], correctIndex: 1, explanation: "V = (4/3)πr³." },
        { prompt: "For a cone the curved surface area uses", options: ["the height h", "the slant height l", "the diameter", "the volume"], correctIndex: 1, explanation: "CSA = πrl, with l the slant height." },
        { prompt: "A sphere of radius 3 has surface area (π ≈ 3.14)", options: ["36π", "12π", "9π", "27π"], correctIndex: 0, explanation: "4π(3²) = 36π." },
        { prompt: "A sphere of radius 3 has volume", options: ["36π", "27π", "9π", "12π"], correctIndex: 0, explanation: "(4/3)π(27) = 36π." },
        { prompt: "The Earth is modelled as a", options: ["cube", "sphere", "cone", "cylinder"], correctIndex: 1, explanation: "A sphere of radius about 6400 km." },
        { prompt: "A great circle has radius equal to", options: ["R cos φ", "R", "2R", "R/2"], correctIndex: 1, explanation: "Meridians and the equator have the full radius R." },
        { prompt: "Distance along a meridian for angle θ is", options: ["(θ/360)×2πR", "(θ/360)×πR", "2πR", "θR"], correctIndex: 0, explanation: "A fraction θ/360 of the great-circle circumference." },
        { prompt: "The radius of a parallel of latitude φ is", options: ["R", "R cos φ", "R sin φ", "2R"], correctIndex: 1, explanation: "Circles of latitude shrink by cos φ." },
        { prompt: "Distance along a parallel of latitude φ for angle θ is", options: ["(θ/360)×2πR", "(θ/360)×2πR cos φ", "2πR sin φ", "θ cos φ"], correctIndex: 1, explanation: "Use the smaller radius R cos φ." },
        { prompt: "The volume of a cone with r = 7, h = 24 (π = 22/7) is", options: ["550 cm³", "1232 cm³", "616 cm³", "1848 cm³"], correctIndex: 1, explanation: "⅓ × 22/7 × 49 × 24 = 1232." },
        { prompt: "The total surface area needs the base added when the solid is", options: ["a full sphere", "a closed cone or pyramid", "an open tube", "a great circle"], correctIndex: 1, explanation: "Closed solids include the base area." },
        { prompt: "For distance along the equator, cos φ equals", options: ["0", "1", "0.5", "R"], correctIndex: 1, explanation: "At the equator φ = 0°, cos 0° = 1." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "A sphere has radius 6 cm. Taking π = 3.14, find its surface area and volume.", answerKey: "SA = 4πr² = 4 × 3.14 × 36 = 452.16 cm². V = (4/3)πr³ = (4/3) × 3.14 × 216 = 904.32 cm³. Award 3 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "A cone has base radius 5 cm and slant height 13 cm. Find its perpendicular height and volume (π = 3.14).", answerKey: "h = √(l² − r²) = √(169 − 25) = √144 = 12 cm. V = ⅓πr²h = ⅓ × 3.14 × 25 × 12 = 314 cm³. Award 3 marks for h = 12, 3 for V = 314.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "The volume of a pyramid with a 6 × 6 square base and height 10 is", options: ["120", "360", "60", "100"], correctIndex: 0, answerKey: "V = ⅓ × (6×6) × 10 = ⅓ × 36 × 10 = 120. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Two points lie on the same meridian, at latitudes 10°N and 40°N. Taking R = 6400 km and π = 3.142, find the distance between them along the meridian.", answerKey: "Angle θ = 40 − 10 = 30°. d = (θ/360) × 2πR = (30/360) × 2 × 3.142 × 6400 = (1/12) × 40217.6 ≈ 3351 km. Award 2 for θ = 30°, 2 for the formula, 2 for ≈ 3351 km.", marks: 6 },
        { type: "ESSAY", prompt: "State the volume and surface-area formulas for a cone and a sphere, then for a cone of radius 6 cm and height 8 cm (π = 3.14) calculate its slant height, curved surface area and volume.", answerKey: "Cone: CSA = πrl, total SA = πr(l+r), V = ⅓πr²h. Sphere: SA = 4πr², V = (4/3)πr³. For the cone: l = √(6²+8²) = √100 = 10 cm; CSA = 3.14 × 6 × 10 = 188.4 cm²; V = ⅓ × 3.14 × 36 × 8 = 301.44 cm³. Award 4 marks for the formulas, 2 for l = 10, 2 for CSA, 2 for V.", marks: 10 },
      ],
    },
  ],
};
