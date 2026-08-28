import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 10,
// Semester Two, Period V: Basic Tools of Economic Analysis. CONTENTS:
// (1) Definition of basic economic tools — tables, charts and graphs;
// (2) Frequency distribution — line graph, histograms, bar charts, pie-charts,
// component bar charts, pictograms; (3) Measurement of Central Tendency —
// calculation of arithmetic mean, median and mode. Three sourced topics: the
// chart/graph gallery, frequency distribution (tables and histograms), and the
// measures of central tendency.
export const economicsG10P5: PeriodContent = {
  grade: 10,
  number: 5,
  title: "Basic Tools of Economic Analysis",
  summary:
    "Period V of the MoE Grade 10 Economics syllabus. Learners meet the basic tools economists use to present data — tables, charts and graphs — build frequency distributions and histograms, and calculate the measures of central tendency: the arithmetic mean, the median and the mode.",
  topics: [
    // source: OpenStax — Introductory Statistics 2e, 2.1 Stem-and-Leaf Graphs, Line Graphs and Bar Graphs (https://openstax.org/books/introductory-statistics-2e/pages/2-1-stem-and-leaf-graphs-stemplots-line-graphs-and-bar-graphs) and CK-12 Pie Charts / Statistics LibreTexts 3.1 Graphical Displays for Categorical Data (https://stats.libretexts.org/Courses/Red_Rocks_Community_College/Introduction_to_Statistics_(RRCC)/03:_Visualizing_Data/3.01:_Graphical_Displays_for_Categorical_Data-_Bar_Charts_Pie_Charts)
    {
      slug: "tables-charts-and-graphs",
      title: "Basic Tools: Tables, Charts and Graphs",
      objective:
        "By the end of the topic, learners should be able to define the basic tools of economic analysis and describe when to use tables, line graphs, bar charts, pie charts, component bar charts and pictograms.",
      estimatedMinutes: 120,
      notes: `## Why economists use these tools

- Raw figures are hard to read. **Tables, charts and graphs** organise data so patterns, comparisons and trends can be seen at a glance.
- The right tool depends on the kind of data and the message.

## Tables

- A **table** arranges data in rows and columns.
- It shows **exact figures** and is the starting point from which charts and graphs are drawn.

## Line graph

- A **line graph** plots data points and joins them with line segments.
- Best for showing **how a value changes over time** (a trend), e.g. prices month by month.

## Bar chart (bar graph)

- A **bar chart** uses separate bars whose **height (or length)** shows the quantity in each category.
- Bars are **separated** from each other.
- Best for **comparing distinct categories** side by side, e.g. output of different crops.

## Component (stacked) bar chart

- A **component bar chart** divides each bar into parts, so one bar shows both a **total and its make-up**.
- Best when you want to show both the total and how it splits, e.g. total exports split into cocoa, rubber and iron.

## Pie chart

- A **pie chart** is a circle divided into **sectors (slices)**; each sector's angle is **proportional to its share** of the whole.
- Best for showing **parts of a whole** (proportions/percentages), e.g. how a budget is divided.

## Pictogram

- A **pictogram** uses **pictures or symbols** to represent quantities; the size or number of symbols shows the amount.
- Best for a **simple, eye-catching** display for a general audience.

| Tool | Best used for |
| --- | --- |
| Table | Exact figures |
| Line graph | Change over time (trend) |
| Bar chart | Comparing categories |
| Component bar chart | A total and its parts |
| Pie chart | Parts of a whole (proportions) |
| Pictogram | Simple, visual display |

## Common errors

- **Using a pie chart to show a trend over time.** Pie charts show shares of a whole; use a line graph for trends.
- **Confusing a bar chart with a histogram.** A bar chart has **separated** bars for categories; a histogram has **touching** bars for continuous data (next topic).
- **Reading a pie sector as a raw number.** A sector shows a **proportion**, not an exact figure, unless labelled.`,
      workedExample: `**Question:** A country's total exports of 200 million dollars are made up of cocoa 100, rubber 60 and iron 40. Recommend the best chart to show (a) each product's share of total exports, and (b) how total exports changed over the last five years. Justify each choice.

**Solution**

*Part (a) — shares of the whole.* To show each product's share of the 200 million, the best tool is a **pie chart**, because a pie chart divides a circle into sectors proportional to each part's share of the whole.
- Cocoa 100/200 = 50% of the circle; rubber 60/200 = 30%; iron 40/200 = 20%.
- (A **component bar chart** would also work, showing the total split into parts.)

*Part (b) — change over time.* To show how total exports changed over five years, the best tool is a **line graph**, because a line graph plots values against time and joins them to reveal the trend (rising, falling or steady).

**Answer:** Use a pie chart (or component bar chart) for the shares — cocoa 50%, rubber 30%, iron 20% — and a line graph for the five-year trend, since pie charts show parts of a whole and line graphs show change over time.`,
      quiz: [
        { prompt: "The basic tools economists use to present data are", options: ["only tables", "tables, charts and graphs", "only prices", "only surveys"], correctIndex: 1, explanation: "Tables, charts and graphs organise data." },
        { prompt: "A table arranges data in", options: ["circles", "rows and columns", "bars", "lines"], correctIndex: 1, explanation: "Tables use rows and columns." },
        { prompt: "A line graph is best for showing", options: ["parts of a whole", "change over time", "exact categories only", "pictures"], correctIndex: 1, explanation: "Line graphs show trends over time." },
        { prompt: "A bar chart is best for", options: ["a trend over time", "comparing distinct categories", "shares of a whole", "exact totals only"], correctIndex: 1, explanation: "Bar charts compare categories." },
        { prompt: "In a bar chart, the bars are", options: ["touching", "separated", "circular", "invisible"], correctIndex: 1, explanation: "Bar-chart bars are separated." },
        { prompt: "A pie chart shows", options: ["change over time", "parts of a whole (proportions)", "exact figures", "a trend line"], correctIndex: 1, explanation: "Pie charts show shares of a whole." },
        { prompt: "Each slice of a pie chart is called a", options: ["bar", "sector", "point", "row"], correctIndex: 1, explanation: "A slice is a sector." },
        { prompt: "A component (stacked) bar chart shows", options: ["only a total", "a total and its parts", "only proportions", "a trend"], correctIndex: 1, explanation: "It shows a total split into components." },
        { prompt: "A pictogram uses", options: ["numbers only", "pictures or symbols to represent quantities", "lines only", "sectors"], correctIndex: 1, explanation: "Pictograms use symbols." },
        { prompt: "To show a product's share of total exports, use a", options: ["line graph", "pie chart", "time series only", "table of dates"], correctIndex: 1, explanation: "Pie charts show shares of a whole." },
        { prompt: "To show how prices changed month by month, use a", options: ["pie chart", "line graph", "pictogram", "single number"], correctIndex: 1, explanation: "Line graphs show change over time." },
        { prompt: "Exact figures are shown best by a", options: ["pie chart", "table", "pictogram", "trend line"], correctIndex: 1, explanation: "Tables give exact values." },
        { prompt: "A sector's angle in a pie chart is proportional to its", options: ["colour", "share of the whole", "position", "name"], correctIndex: 1, explanation: "Angle reflects the proportion." },
        { prompt: "Comparing the output of five different crops is best done with a", options: ["pie chart", "bar chart", "line graph", "single symbol"], correctIndex: 1, explanation: "Bar charts compare categories." },
        { prompt: "A simple, eye-catching display for a general audience is a", options: ["complex table", "pictogram", "scatter of numbers", "long paragraph"], correctIndex: 1, explanation: "Pictograms are simple and visual." },
        { prompt: "Which tool shows both a total and its make-up in one bar?", options: ["Line graph", "Component bar chart", "Pie chart", "Table"], correctIndex: 1, explanation: "Component bar charts show total and parts." },
        { prompt: "A pie chart is a poor choice for showing", options: ["proportions", "a trend over time", "budget shares", "percentages"], correctIndex: 1, explanation: "Use a line graph for trends, not a pie chart." },
        { prompt: "Charts and graphs are usually drawn from a", options: ["pie only", "table of figures", "single number", "paragraph"], correctIndex: 1, explanation: "Tables provide the data for charts." },
        { prompt: "If cocoa is 100 of 200 total exports, its pie sector is", options: ["20%", "30%", "50%", "100%"], correctIndex: 2, explanation: "100/200 = 50%." },
        { prompt: "Which correctly matches tool to use?", options: ["Pie chart then trend over time", "Line graph then parts of a whole", "Bar chart then comparing categories", "Table then a picture"], correctIndex: 2, explanation: "Bar charts compare categories." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name four tools economists use to present data and state the best use of each.", answerKey: "Any four: table — exact figures; line graph — change over time; bar chart — comparing categories; pie chart — parts of a whole; component bar chart — a total and its parts; pictogram — simple visual display. Award 2 per tool with its correct use.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Which chart best shows how a fixed budget is divided among items?", options: ["Line graph", "Pie chart", "Time series graph", "Stem-and-leaf plot"], correctIndex: 1, answerKey: "A pie chart shows parts of a whole (proportions). Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Distinguish a bar chart from a component (stacked) bar chart.", answerKey: "A bar chart uses separate bars, each showing the quantity in one category, for side-by-side comparison. A component (stacked) bar chart divides each bar into parts so one bar shows both a total and how it is made up. Award 3 per chart with the contrast.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "A pictogram is described as simple and eye-catching. State one advantage and one disadvantage of pictograms.", answerKey: "Advantage: easy to read and attractive for a general audience; symbols quickly convey the size of quantities. Disadvantage: less precise than a table (part-symbols and rough sizes make exact figures hard to read). Award 3 for a valid advantage, 3 for a valid disadvantage.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the main tools economists use to present data — tables, line graphs, bar charts, pie charts and pictograms — and, for a set of export data, recommend which tool suits which purpose.", answerKey: "Award marks for: tables for exact figures, 4; line graphs for trends over time, 5; bar charts (and component bar charts) for comparing categories/showing a total and its parts, 6; pie charts for parts of a whole, 6; pictograms for simple visual display, 4; a worked recommendation applying at least two tools to export data, 5. A script that only lists tools without stating uses should not exceed 15.", marks: 30 },
      ],
    },
    // source: OpenStax — Introductory Statistics 2e, 1.3 Frequency, Frequency Tables, and Levels of Measurement (https://openstax.org/books/introductory-statistics-2e/pages/1-3-frequency-frequency-tables-and-levels-of-measurement) and 2.2 Histograms, Frequency Polygons and Time Series Graphs (https://openstax.org/books/introductory-statistics-2e/pages/2-2-histograms-frequency-polygons-and-time-series-graphs)
    {
      slug: "frequency-distribution",
      title: "Frequency Distribution and Histograms",
      objective:
        "By the end of the topic, learners should be able to build a frequency table (with relative and cumulative relative frequency) and describe a histogram.",
      estimatedMinutes: 120,
      notes: `## Frequency

**Frequency** — the number of times a value of the data occurs.

**Frequency table (frequency distribution)** — a table listing each data value (in order) alongside how often it occurs.

## Relative and cumulative frequency

**Relative frequency** — the fraction or proportion of the total that a value's frequency represents: its frequency divided by the total number of observations. It can be written as a fraction, decimal or percent.

**Cumulative relative frequency** — the running total of the relative frequencies down the table. The final value equals **1.00 (100%)**.

## Building a frequency table

1. List the data values in ascending order.
2. Count how many times each value appears (its **frequency**).
3. Divide each frequency by the total to get **relative frequency**.
4. Add the relative frequencies down the column to get **cumulative relative frequency**.

Example (hours studied by 20 students):

| Hours | Frequency | Relative frequency | Cumulative relative frequency |
| --- | --- | --- | --- |
| 2 | 3 | 0.15 | 0.15 |
| 3 | 5 | 0.25 | 0.40 |
| 4 | 8 | 0.40 | 0.80 |
| 5 | 4 | 0.20 | 1.00 |

- Frequencies add to 20; relative frequencies add to 1.00.

## Histograms

**Histogram** — a graph of **contiguous (touching) boxes**; the horizontal axis shows the data (grouped into intervals) and the vertical axis shows **frequency** (or relative frequency).
- It suits **large data sets** and shows the data's **shape, centre and spread**.
- **Difference from a bar chart:** a histogram's bars **touch** because the data is continuous; a bar chart's bars are **separated** because the categories are distinct.

**Frequency polygon** — a line graph made by plotting the frequency of each interval and joining the points, useful for showing the shape of the distribution.

## Common errors

- **Forgetting the cumulative column ends at 1.00.** If it does not, a frequency or the total is wrong.
- **Drawing histogram bars with gaps.** Histogram bars touch (continuous data); only bar-chart bars are separated.
- **Confusing frequency with relative frequency.** Frequency is a count; relative frequency is that count divided by the total.`,
      workedExample: `**Question:** Twenty pupils scored these marks: five scored 2, five scored 3, eight scored 4, two scored 5. Build a frequency table with relative and cumulative relative frequency, and check the totals.

**Solution**

*Step 1 — list values and frequencies (in order):* 2 (freq 5), 3 (freq 5), 4 (freq 8), 5 (freq 2). Total = 5 + 5 + 8 + 2 = 20.

*Step 2 — relative frequency (frequency divided by 20):*
- 2: 5/20 = 0.25
- 3: 5/20 = 0.25
- 4: 8/20 = 0.40
- 5: 2/20 = 0.10

*Step 3 — cumulative relative frequency (running total):* 0.25, then 0.50, then 0.90, then 1.00.

| Mark | Frequency | Relative frequency | Cumulative relative frequency |
| --- | --- | --- | --- |
| 2 | 5 | 0.25 | 0.25 |
| 3 | 5 | 0.25 | 0.50 |
| 4 | 8 | 0.40 | 0.90 |
| 5 | 2 | 0.10 | 1.00 |

*Step 4 — check.* Frequencies add to 20; relative frequencies add to 1.00; the cumulative column ends at 1.00. Correct.

**Answer:** The completed frequency table is above; the totals check out (20 pupils; relative frequencies sum to 1.00).`,
      quiz: [
        { prompt: "Frequency is", options: ["the average value", "the number of times a value occurs", "the middle value", "the largest value"], correctIndex: 1, explanation: "Frequency counts occurrences of a value." },
        { prompt: "A frequency table lists each value with its", options: ["price", "frequency", "colour", "rank only"], correctIndex: 1, explanation: "It pairs values with how often they occur." },
        { prompt: "Relative frequency is a value's frequency divided by", options: ["the largest value", "the total number of observations", "the mean", "the mode"], correctIndex: 1, explanation: "It is frequency over the total." },
        { prompt: "The cumulative relative frequency of the last row equals", options: ["0", "0.50", "1.00", "the mean"], correctIndex: 2, explanation: "It totals to 1.00 (100%)." },
        { prompt: "Relative frequency can be written as", options: ["only a whole number", "a fraction, decimal or percent", "only a percent", "a negative"], correctIndex: 1, explanation: "It can be a fraction, decimal or percent." },
        { prompt: "In a table of 20 items, a value with frequency 5 has relative frequency", options: ["0.05", "0.25", "5", "20"], correctIndex: 1, explanation: "5/20 = 0.25." },
        { prompt: "Cumulative relative frequency is the running total of", options: ["frequencies only", "relative frequencies", "values", "modes"], correctIndex: 1, explanation: "It adds relative frequencies down the table." },
        { prompt: "A histogram is a graph of", options: ["separated bars", "contiguous (touching) boxes", "sectors", "lines only"], correctIndex: 1, explanation: "Histogram bars touch." },
        { prompt: "A histogram's horizontal axis shows", options: ["frequency", "the data (often grouped into intervals)", "colours", "names"], correctIndex: 1, explanation: "Data (intervals) go on the horizontal axis." },
        { prompt: "A histogram differs from a bar chart because its bars", options: ["are separated", "touch (continuous data)", "are circular", "have no height"], correctIndex: 1, explanation: "Histogram bars touch; bar-chart bars are separated." },
        { prompt: "Histograms are especially useful for", options: ["tiny data sets", "large data sets showing shape, centre and spread", "single values", "exact figures"], correctIndex: 1, explanation: "They summarise large data sets." },
        { prompt: "A frequency polygon is made by", options: ["shading boxes", "plotting frequencies and joining the points with lines", "drawing a circle", "listing values"], correctIndex: 1, explanation: "It is a line graph of frequencies." },
        { prompt: "If frequencies are 3, 5, 8, 4, the total is", options: ["18", "20", "15", "24"], correctIndex: 1, explanation: "3 + 5 + 8 + 4 = 20." },
        { prompt: "If the cumulative relative frequency does not reach 1.00, then", options: ["the table is fine", "a frequency or the total is wrong", "the mean is zero", "the mode is missing"], correctIndex: 1, explanation: "It must total 1.00." },
        { prompt: "Frequency is a count, while relative frequency is", options: ["also a count", "that count divided by the total", "the largest value", "the middle value"], correctIndex: 1, explanation: "Relative frequency is a proportion." },
        { prompt: "The first step in building a frequency table is to", options: ["draw a histogram", "list the data values in order", "find the mean", "shade bars"], correctIndex: 1, explanation: "List the values in ascending order first." },
        { prompt: "The vertical axis of a histogram usually shows", options: ["the data values", "frequency or relative frequency", "names", "prices"], correctIndex: 1, explanation: "Frequency goes on the vertical axis." },
        { prompt: "A value occurring 8 times in 20 has a relative frequency of", options: ["0.08", "0.40", "8", "0.80"], correctIndex: 1, explanation: "8/20 = 0.40." },
        { prompt: "Continuous data (with touching bars) is shown by a", options: ["bar chart", "histogram", "pie chart", "pictogram"], correctIndex: 1, explanation: "Histograms display continuous data." },
        { prompt: "A frequency distribution is another name for a", options: ["pie chart", "frequency table", "line of best fit", "mode"], correctIndex: 1, explanation: "A frequency distribution is a frequency table." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define frequency, relative frequency and cumulative relative frequency.", answerKey: "Frequency is the number of times a value occurs. Relative frequency is a value's frequency divided by the total number of observations (a fraction, decimal or percent). Cumulative relative frequency is the running total of the relative frequencies down the table, ending at 1.00. Award 3 per term, 1 for noting the cumulative ends at 1.00.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Build a frequency table for the data: 1, 1, 2, 2, 2, 3 (show frequency and relative frequency).", answerKey: "Value 1: frequency 2, relative frequency 2/6 = 0.33; value 2: frequency 3, relative frequency 3/6 = 0.50; value 3: frequency 1, relative frequency 1/6 = 0.17. Total frequency 6; relative frequencies sum to 1.00. Award 4 for correct frequencies, 4 for correct relative frequencies.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "A histogram differs from a bar chart because a histogram has", options: ["separated bars", "touching (contiguous) bars for continuous data", "circular sectors", "no vertical axis"], correctIndex: 1, answerKey: "Histogram bars touch because the data is continuous; bar-chart bars are separated. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain what a histogram shows and one thing it is useful for.", answerKey: "A histogram is a graph of contiguous boxes with the data (grouped into intervals) on the horizontal axis and frequency on the vertical axis. It is useful for large data sets, showing the shape, centre and spread of the data. Award 4 for the description, 2 for a valid use.", marks: 6 },
        { type: "ESSAY", prompt: "Explain how a frequency distribution is built and displayed, covering frequency, relative frequency, cumulative relative frequency and the histogram.", answerKey: "Award marks for: definition of frequency and the frequency table, 6; relative frequency as frequency over the total, 6; cumulative relative frequency as the running total ending at 1.00, 6; the histogram (touching bars, axes, uses) and its difference from a bar chart, 8; a worked table example, 4. A script without a worked example should not exceed 18.", marks: 30 },
      ],
    },
    // source: OpenStax — Introductory Statistics 2e, 2.5 Measures of the Center of the Data (mean, median, mode) (https://openstax.org/books/introductory-statistics-2e/pages/2-5-measures-of-the-center-of-the-data)
    {
      slug: "measures-of-central-tendency",
      title: "Measures of Central Tendency: Mean, Median and Mode",
      objective:
        "By the end of the topic, learners should be able to calculate and interpret the arithmetic mean, the median and the mode of a set of data.",
      estimatedMinutes: 130,
      notes: `## What central tendency means

- A **measure of central tendency** is a single value that represents the **centre** of a data set. The three main measures are the **mean, median and mode**.

## The arithmetic mean (average)

**Mean** — add all the values and divide by how many there are.
- Mean = (sum of all values) divided by (number of values).
- For data with repeated values: Mean = sum of (frequency times value) divided by the total number of values.
- Example: for 1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 4 the mean = (3 times 1 + 2 times 2 + 1 times 3 + 5 times 4) / 11 = (3 + 4 + 3 + 20)/11 = 30/11 ≈ **2.7**.

## The median

**Median** — the **middle value** when the data is arranged in order, splitting it into two equal halves.
- **Locate it** using position (n + 1) / 2, where n is the number of values.
- **Odd n:** the median is the single middle value.
- **Even n:** the median is the **average of the two middle values**.
- Example: with 40 values the median position is (40 + 1)/2 = 20.5, so average the 20th and 21st values.

## The mode

**Mode** — the value that occurs **most often**.
- A data set can have **more than one mode** (bimodal) if two values tie for most frequent, or **no mode** if all occur equally.
- Example: in 50, 53, 59, 59, 63, 63, 72, 72, 72, 72, 72, 76 the mode is **72** (it occurs five times).

## Choosing a measure

| Measure | Strength | Weakness |
| --- | --- | --- |
| Mean | Uses every value | Distorted by extreme values (outliers) |
| Median | Not affected by extremes | Ignores the actual size of other values |
| Mode | Shows the most common value | May not exist or may not be central |

## Common errors

- **Forgetting to order the data before finding the median.** The median needs sorted data.
- **Averaging the two middle positions instead of the two middle values.** Use the values at those positions.
- **Confusing the three measures.** Mean = average; median = middle; mode = most frequent.`,
      workedExample: `**Question:** The ages of nine learners are: 14, 15, 15, 16, 14, 17, 15, 18, 16. Find the mean, median and mode.

**Solution**

*Step 1 — the mean.* Sum = 14 + 15 + 15 + 16 + 14 + 17 + 15 + 18 + 16 = 140. Number of values = 9.
- Mean = 140 / 9 ≈ **15.6 years**.

*Step 2 — the median.* Order the data: 14, 14, 15, 15, 15, 16, 16, 17, 18. There are 9 values (odd), so the median position is (9 + 1)/2 = 5th value.
- The 5th value is **15**, so the median = **15 years**.

*Step 3 — the mode.* Count occurrences: 14 appears twice, 15 appears three times, 16 appears twice, 17 and 18 once each.
- The most frequent value is **15** (three times), so the mode = **15 years**.

**Answer:** Mean ≈ 15.6, median = 15, mode = 15. Here the median and mode agree; the mean is slightly higher because of the larger ages (17 and 18).`,
      quiz: [
        { prompt: "A measure of central tendency represents the", options: ["spread of data", "centre of a data set", "largest value", "smallest value"], correctIndex: 1, explanation: "It is a central, representative value." },
        { prompt: "The mean is found by", options: ["picking the middle value", "adding all values and dividing by their number", "finding the most frequent value", "taking the largest"], correctIndex: 1, explanation: "Mean = sum divided by count." },
        { prompt: "The median is the", options: ["average of all values", "middle value of ordered data", "most frequent value", "range"], correctIndex: 1, explanation: "The median splits ordered data in half." },
        { prompt: "The mode is the", options: ["average", "middle value", "most frequent value", "sum"], correctIndex: 2, explanation: "The mode occurs most often." },
        { prompt: "Before finding the median you must", options: ["find the mean", "order the data", "draw a pie chart", "remove the mode"], correctIndex: 1, explanation: "Median requires sorted data." },
        { prompt: "For an even number of values, the median is the", options: ["single middle value", "average of the two middle values", "largest value", "mode"], correctIndex: 1, explanation: "Average the two middle values." },
        { prompt: "The mean of 4, 6, 8, 10 is", options: ["6", "7", "8", "28"], correctIndex: 1, explanation: "(4+6+8+10)/4 = 28/4 = 7." },
        { prompt: "The median of 3, 5, 7, 9, 11 is", options: ["5", "7", "9", "35"], correctIndex: 1, explanation: "The middle of five ordered values is 7." },
        { prompt: "The mode of 2, 3, 3, 3, 5, 6 is", options: ["2", "3", "5", "6"], correctIndex: 1, explanation: "3 occurs most often." },
        { prompt: "The median position for n values is", options: ["n / 2", "(n + 1) / 2", "n minus 1", "2n"], correctIndex: 1, explanation: "Median position = (n + 1)/2." },
        { prompt: "A data set with two most-frequent values is", options: ["mean-less", "bimodal", "median-less", "even"], correctIndex: 1, explanation: "Two modes make it bimodal." },
        { prompt: "Which measure is most distorted by an extreme value (outlier)?", options: ["Mode", "Median", "Mean", "Range"], correctIndex: 2, explanation: "The mean uses every value, so outliers pull it." },
        { prompt: "Which measure is NOT affected by extreme values?", options: ["Mean", "Median", "Sum", "Total"], correctIndex: 1, explanation: "The median depends only on the middle position." },
        { prompt: "For the data 10, 10, 20, 30, 40 the mode is", options: ["10", "20", "30", "40"], correctIndex: 0, explanation: "10 occurs twice — most often." },
        { prompt: "The mean of 1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 4 (sum 30, count 11) is about", options: ["2.7", "3.0", "4.0", "1.0"], correctIndex: 0, explanation: "30/11 is about 2.7." },
        { prompt: "With 40 values, the median is the", options: ["20th value", "average of the 20th and 21st values", "40th value", "1st value"], correctIndex: 1, explanation: "Position 20.5 means average the 20th and 21st." },
        { prompt: "A strength of the mean is that it", options: ["ignores most values", "uses every value", "has no formula", "cannot be calculated"], correctIndex: 1, explanation: "The mean uses all the data." },
        { prompt: "A data set where all values occur equally has", options: ["one mode", "no mode", "two medians", "no mean"], correctIndex: 1, explanation: "No value is most frequent, so no mode." },
        { prompt: "The three measures of central tendency are", options: ["mean, range, mode", "mean, median, mode", "median, range, spread", "sum, count, mode"], correctIndex: 1, explanation: "Mean, median and mode." },
        { prompt: "The median of 2, 4, 6, 8 (even count) is", options: ["4", "5", "6", "8"], correctIndex: 1, explanation: "Average of 4 and 6 is 5." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define the mean, the median and the mode.", answerKey: "Mean — the sum of all values divided by the number of values (the average). Median — the middle value of the data when arranged in order (for an even count, the average of the two middle values). Mode — the value that occurs most often. Award 3 per correct definition, plus 1 for the even-count note on the median.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Find the mean, median and mode of: 5, 8, 8, 10, 14.", answerKey: "Mean = (5+8+8+10+14)/5 = 45/5 = 9. Median = middle of ordered data (5, 8, 8, 10, 14) = 8. Mode = 8 (occurs twice). Award 3 for the mean, 3 for the median, 2 for the mode.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Which measure of central tendency is most affected by an extreme (outlier) value?", options: ["Mode", "Median", "Mean", "None of them"], correctIndex: 2, answerKey: "The mean uses every value, so an outlier pulls it up or down. Option C.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "For an even number of ordered values, explain how the median is found.", answerKey: "With an even number of values there is no single middle value, so the median is the average of the two middle values. Using position (n + 1)/2 gives a half-position (e.g. 20.5 for 40 values), meaning average the 20th and 21st values. Award marks for averaging the two middle values and the positioning idea.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the three measures of central tendency, showing how to calculate each, and discuss the strength and weakness of each.", answerKey: "Award marks for: the mean with its formula and a worked calculation, 7; the median with ordering, the position rule and odd/even cases, 7; the mode as the most frequent value (with bimodal/no-mode cases), 6; strengths and weaknesses (mean uses all data but is distorted by outliers; median resists outliers; mode shows the most common value but may not be central), 7; a worked example, 3. A script that only defines the three without calculation should not exceed 15.", marks: 30 },
      ],
    },
  ],
};
