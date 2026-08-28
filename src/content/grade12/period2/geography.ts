import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Geography, Grade 12,
// Semester One, Period II, Unit 2 Practical and Regional Geography — Map
// Reading: Methods of Representing Relief and Simple Contour Landforms;
// Graphical Representation of Statistical Data; and Drainage and River Basins.
export const geographyG12P2: PeriodContent = {
  grade: 12,
  number: 2,
  title: "Relief, Statistical Graphs and Drainage",
  summary:
    "Period II of the MoE Grade 12 Geography syllabus deepens practical map work. Learners represent relief with contours and other methods, read contour landforms and calculate gradient, present statistical data as line, bar and circle graphs, and classify drainage patterns and river basins with their influence on settlement and communication.",
  topics: [
    {
      // source: Geosciences LibreTexts — Laboratory Manual for Introductory Geology (Deline, Harris & Tefend), 3.4 Contour Lines (https://geo.libretexts.org/Learning_Objects/Laboratory/Book%3A_Laboratory_Manual_For_Introductory_Geology_(Deline_Harris_and_Tefend)/03%3A_Topographic_Maps/3.4%3A_Contour_Lines)
      slug: "representing-relief-and-contour-landforms",
      title: "Methods of Representing Relief and Simple Contour Landforms",
      objective:
        "By the end of the topic, learners should be able to describe the methods of showing relief on maps, identify contour landforms, describe types of slope, and define and calculate gradient.",
      estimatedMinutes: 155,
      notes: `## Relief and how maps show it

- **Relief** — the shape and height of the land surface (its hills, valleys and slopes). On a map it is the difference between the highest and lowest points shown.
- Because a map is flat, several **methods** are used to show relief.

## Methods of representing relief

- **Contours** — lines that **join points of equal height (elevation)** above sea level; the standard, most accurate method.
- **Spot height** — a point marked with its exact height (e.g. a dot with "312").
- **Trigonometrical station** — a surveyed point, shown by a small triangle, used as a fixed height reference.
- **Bench mark (BM)** — an actual surveyed point of known height, marked on the ground and map.
- **Hill shading** — shadow effect that makes slopes look three-dimensional.
- **Form lines** — broken contour-like lines giving a rough idea of relief where exact heights are unknown.
- **Hachures** — short lines drawn down the slope; closer and thicker for steeper ground.

## Contours in detail

- **Contour interval** — the vertical height difference between one contour and the next (e.g. 20 m). With a 20 m interval the lines run 20, 40, 60, 80 m…
- **Index contours** — every fifth contour is drawn **thicker and labelled** with its height.
- **Rule of spacing:** contours **close together = steep** slope; contours **far apart = gentle** slope.
- All points on one contour line are at the **same height**.

\`\`\`svg Contours: steep and gentle slopes
<svg viewBox="0 0 260 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Close contours show a steep slope, wide-spaced contours a gentle slope">
  <path d="M20,110 Q40,20 60,110" fill="none" stroke="#7c2d12" stroke-width="1"/>
  <path d="M28,110 Q40,35 52,110" fill="none" stroke="#7c2d12" stroke-width="1"/>
  <path d="M34,110 Q40,50 46,110" fill="none" stroke="#7c2d12" stroke-width="1"/>
  <text x="40" y="126" font-size="9" text-anchor="middle" fill="#7c2d12">steep (close)</text>
  <path d="M150,110 Q190,60 230,110" fill="none" stroke="#7c2d12" stroke-width="1"/>
  <path d="M165,110 Q190,75 215,110" fill="none" stroke="#7c2d12" stroke-width="1"/>
  <path d="M178,110 Q190,90 202,110" fill="none" stroke="#7c2d12" stroke-width="1"/>
  <text x="190" y="126" font-size="9" text-anchor="middle" fill="#7c2d12">gentle (wide)</text>
</svg>
\`\`\`

## Types of slope

- **Concave slope** — steep at the top, gentle at the bottom (contours close at top, wide at base).
- **Convex slope** — gentle at the top, steep at the bottom (contours wide at top, close at base).
- **Steep slope** — contours very close together.
- **Gentle slope** — contours far apart.
- **Even (uniform) slope** — contours equally spaced.
- **Uneven (irregular) slope** — contours unequally spaced.

## Contour landforms

| Landform | How the contours look |
|---|---|
| Plateau | High, flat area ringed by close contours, wide-spaced on top |
| Ridge | A long, narrow area of high ground; contours form a long loop |
| Valley | Contours bend to form a V pointing **upstream** (toward higher land) |
| Spur | Contours form a V or U pointing **downhill**, away from high land |
| Col / Saddle | A low dip between two hills or summits |
| Pass | A low gap through high land used as a route |
| Gap | A break or opening through a ridge |
| Knoll | A small isolated hill or mound |
| Cuesta | A ridge with one steep side and one gentle side |

## Gradient

- **Gradient** — the steepness of a slope: the vertical rise compared with the horizontal distance.
- **Gradient = vertical difference (rise) ÷ horizontal distance (run)**, usually written as a ratio like **1 in 20**.
- **Vertical exaggeration** — on a cross-section, the vertical scale is made larger than the horizontal scale so relief shows clearly; it equals vertical scale ÷ horizontal scale.
- A **cross-section (profile)** is drawn by marking where each contour crosses a chosen line, plotting the heights on graph paper, and joining them.

## Common errors and misconceptions

- **Reading slope backwards** — contours **close together mean steep**, not gentle.
- **Confusing spur and valley** — valley contours point **V upstream** (uphill); spur contours point **downhill**.
- **Mixing concave and convex** — a **concave** slope is steep at top, gentle at base; a **convex** slope is the opposite.
- **Forgetting units in gradient** — the vertical and horizontal distances must be in the **same units** before dividing.`,
      workedExample: `**Task.** On a map two points lie on a straight line. Point A is on the **100 m** contour and point B is on the **250 m** contour. The map distance between them is **3 cm** on a **1:50,000** map. (a) Find the horizontal ground distance. (b) Calculate the gradient of the slope as a ratio.

**Part (a) — horizontal ground distance**
1. Ground distance = map distance × scale denominator = 3 cm × 50,000 = 150,000 cm.
2. Convert to metres: 150,000 ÷ 100 = **1,500 m**.

**Part (b) — gradient**
1. Vertical difference (rise) = 250 m − 100 m = **150 m**.
2. Horizontal distance (run) = **1,500 m**.
3. Gradient = rise ÷ run = 150 ÷ 1,500 = **1/10**.
4. Written as a ratio: **1 in 10** (the land rises 1 m for every 10 m travelled horizontally).

**Conclusion:** the slope has a gradient of **1 in 10** — a fairly steep, even slope.`,
      quiz: [
        {
          prompt: "Contour lines join points of…",
          options: ["equal height (elevation)", "equal rainfall", "equal temperature", "equal population"],
          correctIndex: 0,
          explanation: "A contour joins points of the same elevation above sea level.",
        },
        {
          prompt: "The vertical difference in height between one contour and the next is the…",
          options: ["contour interval", "gradient", "relief", "spot height"],
          correctIndex: 0,
          explanation: "The contour interval is the height gap between contours.",
        },
        {
          prompt: "Contours drawn very close together show a slope that is…",
          options: ["steep", "gentle", "flat", "concave only"],
          correctIndex: 0,
          explanation: "Close contours = steep; wide contours = gentle.",
        },
        {
          prompt: "A point marked with its exact height, such as a dot labelled '312', is a…",
          options: ["spot height", "contour", "hachure", "bench mark"],
          correctIndex: 0,
          explanation: "A spot height gives the exact height of a point.",
        },
        {
          prompt: "Short lines drawn down a slope, thicker and closer where it is steeper, are…",
          options: ["hachures", "contours", "form lines", "index lines"],
          correctIndex: 0,
          explanation: "Hachures show slope by lines drawn downhill.",
        },
        {
          prompt: "A surveyed point shown by a small triangle used as a fixed height reference is a…",
          options: ["trigonometrical station", "spot height", "col", "knoll"],
          correctIndex: 0,
          explanation: "A trig station is a fixed surveyed reference point.",
        },
        {
          prompt: "Every fifth contour, drawn thicker and labelled, is an…",
          options: ["index contour", "form line", "hachure", "even slope"],
          correctIndex: 0,
          explanation: "Index contours are labelled for reference.",
        },
        {
          prompt: "A slope that is steep at the top and gentle at the bottom is…",
          options: ["concave", "convex", "even", "uniform"],
          correctIndex: 0,
          explanation: "Concave slopes are steep above, gentle below.",
        },
        {
          prompt: "A slope that is gentle at the top and steep at the bottom is…",
          options: ["convex", "concave", "even", "flat"],
          correctIndex: 0,
          explanation: "Convex slopes are gentle above, steep below.",
        },
        {
          prompt: "Contours that bend to form a V pointing toward higher land show a…",
          options: ["valley", "spur", "plateau", "knoll"],
          correctIndex: 0,
          explanation: "Valley contours point V upstream, toward high ground.",
        },
        {
          prompt: "Contours forming a V or U pointing downhill show a…",
          options: ["spur", "valley", "col", "pass"],
          correctIndex: 0,
          explanation: "A spur's contours point downhill, away from high land.",
        },
        {
          prompt: "A high, flat area ringed by close contours is a…",
          options: ["plateau", "valley", "spur", "saddle"],
          correctIndex: 0,
          explanation: "A plateau is high, flat land.",
        },
        {
          prompt: "A low dip or gap between two hilltops is a…",
          options: ["col (saddle)", "plateau", "ridge", "cuesta"],
          correctIndex: 0,
          explanation: "A col or saddle is the low point between two summits.",
        },
        {
          prompt: "A small isolated hill or mound is a…",
          options: ["knoll", "plateau", "valley", "pass"],
          correctIndex: 0,
          explanation: "A knoll is a small isolated hill.",
        },
        {
          prompt: "A ridge with one steep side and one gentle side is a…",
          options: ["cuesta", "col", "spur", "plateau"],
          correctIndex: 0,
          explanation: "A cuesta has an asymmetrical steep/gentle profile.",
        },
        {
          prompt: "Gradient is calculated as…",
          options: ["vertical rise ÷ horizontal distance", "horizontal distance ÷ vertical rise", "height × distance", "contour interval × scale"],
          correctIndex: 0,
          explanation: "Gradient = rise ÷ run.",
        },
        {
          prompt: "A gradient of 1 in 20 means the land rises…",
          options: ["1 m for every 20 m travelled horizontally", "20 m for every 1 m horizontal", "1 m for every 20 km", "20 % up"],
          correctIndex: 0,
          explanation: "1 in 20 = 1 m rise per 20 m horizontal distance.",
        },
        {
          prompt: "On a cross-section, making the vertical scale larger than the horizontal is called…",
          options: ["vertical exaggeration", "gradient", "hachuring", "generalisation"],
          correctIndex: 0,
          explanation: "Vertical exaggeration highlights relief on a profile.",
        },
        {
          prompt: "Before dividing to find gradient, the rise and run must be in…",
          options: ["the same units", "different units", "degrees", "percentages"],
          correctIndex: 0,
          explanation: "Convert both distances to the same unit first.",
        },
        {
          prompt: "Relief on a map means the…",
          options: ["shape and height of the land", "amount of rain", "number of towns", "colour of symbols"],
          correctIndex: 0,
          explanation: "Relief is the form and height of the land surface.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name four methods of representing relief on a map.",
          answerKey:
            "Any four of: contours; spot heights; trigonometrical stations; bench marks; hill shading; form lines; hachures. One mark each.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State how contour spacing shows the difference between a steep and a gentle slope, and distinguish a concave from a convex slope.",
          answerKey:
            "Close contours = steep slope; widely spaced contours = gentle slope. A concave slope is steep at the top and gentle at the bottom; a convex slope is gentle at the top and steep at the bottom. Award marks for the spacing rule and the two slope types.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Contours that form a V pointing toward higher land indicate a:",
          options: ["valley", "spur", "plateau", "col"],
          correctIndex: 0,
          answerKey: "Valley contours point V upstream toward high ground; spur contours point downhill.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Two points are 200 m apart horizontally; one is at 60 m and the other at 100 m. Calculate the gradient as a ratio.",
          answerKey:
            "Rise = 100 − 60 = 40 m. Run = 200 m. Gradient = 40 ÷ 200 = 1/5, i.e. 1 in 5. Award marks for the rise, the division and the ratio.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe how contours represent relief on a map and explain how at least four contour landforms can be recognised from their contour patterns.",
          answerKey:
            "A strong answer explains that contours join points of equal height, the contour interval is the vertical gap, close contours mean steep slopes and wide contours gentle slopes; and identifies at least four landforms from their patterns (e.g. valley — V pointing upstream; spur — V pointing downhill; plateau — high flat top ringed by close contours; col/saddle — low dip between two summits; ridge — long high loop; knoll — small isolated hill). Award marks for the contour principle and four landforms.",
          marks: 5,
        },
      ],
    },
    {
      // source: CK-12 — Pie Charts, Bar Graphs, Histograms, and Stem-and-Leaf Plots; and Statistics LibreTexts — Mostly Harmless Statistics (Webb), 2.3 Graphical Displays (https://www.ck12.org/section/pie-charts-bar-graphs-histograms-and-stem-and-leaf-plots/)
      slug: "graphical-representation-of-statistical-data",
      title: "Graphical Representation of Statistical Data",
      objective:
        "By the end of the topic, learners should be able to discuss the sources and uses of statistical data, draw line, bar and circle graphs, and state the advantages and disadvantages of the various kinds of graphs.",
      estimatedMinutes: 150,
      notes: `## Statistical data — sources and use

- **Statistics** — numerical facts collected, organised and presented to reveal patterns.
- **Sources of statistical data:**
- **Primary sources** — data you collect yourself (field surveys, questionnaires, measurements, counts).
- **Secondary sources** — data collected by others (census reports, government/LISGIS records, yearbooks, textbooks, the internet).
- **Use of statistics and diagrams:** a graph shows at a glance where data **clusters**, where it is sparse, and what **trends** exist, so facts can be compared quickly — far clearer than a mass of numbers.
- **Limitations of statistics:** figures can be **out of date**, **incomplete**, or **biased**; graphs can **mislead** if the scale is chosen carelessly.

## Tabulation and scale

- **Tabulation** — arranging data neatly in rows and columns (a table) before graphing.
- **Choice of scale** — pick a scale that fits the data on the paper and does not distort it; use **squared (graph) paper** so distances are exact.

## Line graphs

- A **line graph** has an X axis and a Y axis; points are plotted and joined with line segments. Best for showing **change over time** (e.g. monthly rainfall).
- **Simple line graph** — one line for one set of data.
- **Compound (component) line graph** — several lines stacked so the bands add up to a total.
- **Combined (multiple) line graph** — several separate lines on the same axes for comparison.
- **Advantages:** clearly shows trends and change over time; easy to read.
- **Disadvantages:** too many lines become confusing; not suited to non-continuous categories.

## Bar graphs

- A **bar graph** shows grouped data as **rectangular bars** whose lengths are proportional to the values.
- **Simple bar graph** — one bar per category.
- **Histogram** — bars for continuous data grouped into class intervals, drawn with **no gaps** between bars.
- **Divergent bar graph** — bars extend above and below a base line to show gains and losses.
- **Percentage (compound) bar graph** — each bar totals 100%, divided into parts.
- **Advantages:** simple, clear, easy to compare categories.
- **Disadvantages:** only shows totals, not fine detail; many bars become cluttered.

## Circle graphs (pie charts)

- A **pie chart (circle graph)** shows how a **whole** is divided into **parts**, each slice a share of 360°.
- **Proportional circles / proportional pie charts** — the circle's **size** is drawn proportional to the total it represents, for comparing places.
- To draw one: find each part as a fraction of the total, multiply by 360° to get the angle, then draw the slices.
- **Advantages:** shows proportions and shares of a whole clearly.
- **Disadvantages:** hard to read exact values; poor when there are many small slices or for showing change over time.

\`\`\`svg A pie chart of land use
<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pie chart divided into three sectors">
  <circle cx="80" cy="80" r="60" fill="#e2e8f0"/>
  <path d="M80,80 L80,20 A60,60 0 0,1 132,110 Z" fill="#16a34a"/>
  <path d="M80,80 L132,110 A60,60 0 0,1 40,128 Z" fill="#2563eb"/>
  <path d="M80,80 L40,128 A60,60 0 0,1 80,20 Z" fill="#f59e0b"/>
  <text x="100" y="70" font-size="8" fill="#fff">forest</text>
  <text x="78" y="115" font-size="8" fill="#fff">farm</text>
  <text x="52" y="95" font-size="8" fill="#fff">other</text>
</svg>
\`\`\`

## Common errors and misconceptions

- **Leaving gaps in a histogram** — histogram bars for continuous data touch, with **no gaps**; ordinary bar-graph bars have gaps.
- **Wrong pie angles** — each slice angle = (part ÷ total) × 360°; all slices must add to 360°.
- **Choosing a distorting scale** — a badly chosen scale exaggerates or hides differences.
- **Using the wrong graph** — line graphs for change over time, bar graphs to compare categories, pie charts for shares of a whole.`,
      workedExample: `**Task.** A farm's 200 hectares are used as follows: rubber 100 ha, rice 60 ha, cassava 40 ha. Draw this as a pie chart by calculating the angle of each slice.

**Step 1 — find each part as a fraction of the total (200 ha).**
- Rubber: 100/200; Rice: 60/200; Cassava: 40/200.

**Step 2 — multiply each fraction by 360° to get the angle.**
- Rubber: (100 ÷ 200) × 360° = **180°**.
- Rice: (60 ÷ 200) × 360° = **108°**.
- Cassava: (40 ÷ 200) × 360° = **72°**.

**Step 3 — check the angles add to 360°.**
- 180° + 108° + 72° = **360°** ✓.

**Step 4 — draw.** Draw a circle, mark the centre, and use a protractor to cut slices of 180°, 108° and 72°; label each slice.

**Conclusion:** rubber takes half the circle (180°), rice 108° and cassava 72° — a pie chart clearly shows rubber as the largest land use.`,
      quiz: [
        {
          prompt: "Data you collect yourself by field survey is from a…",
          options: ["primary source", "secondary source", "tertiary source", "pie chart"],
          correctIndex: 0,
          explanation: "Primary data is collected first-hand.",
        },
        {
          prompt: "Census reports and government records are examples of…",
          options: ["secondary sources", "primary sources", "graphs", "tables"],
          correctIndex: 0,
          explanation: "Secondary data is collected by others.",
        },
        {
          prompt: "Arranging data neatly in rows and columns is called…",
          options: ["tabulation", "tabulation is wrong; it is plotting", "scaling", "interpolation"],
          correctIndex: 0,
          explanation: "Tabulation puts data into a table before graphing.",
        },
        {
          prompt: "Which graph is best for showing change over time, such as monthly rainfall?",
          options: ["line graph", "pie chart", "proportional circle", "divergent bar"],
          correctIndex: 0,
          explanation: "Line graphs show trends and change over time.",
        },
        {
          prompt: "A graph with one line for one set of data is a…",
          options: ["simple line graph", "compound line graph", "combined line graph", "histogram"],
          correctIndex: 0,
          explanation: "A simple line graph shows a single data set.",
        },
        {
          prompt: "Several separate lines on the same axes for comparison make a…",
          options: ["combined (multiple) line graph", "simple line graph", "pie chart", "bar graph"],
          correctIndex: 0,
          explanation: "A combined line graph compares several data sets.",
        },
        {
          prompt: "A graph showing grouped data as rectangular bars is a…",
          options: ["bar graph", "line graph", "pie chart", "scatter graph"],
          correctIndex: 0,
          explanation: "Bar graphs use bars proportional to values.",
        },
        {
          prompt: "Bars for continuous data, drawn with no gaps between them, form a…",
          options: ["histogram", "simple bar graph", "pie chart", "line graph"],
          correctIndex: 0,
          explanation: "Histograms have touching bars for continuous data.",
        },
        {
          prompt: "A bar graph where each bar totals 100% divided into parts is a…",
          options: ["percentage (compound) bar graph", "divergent bar graph", "histogram", "simple bar graph"],
          correctIndex: 0,
          explanation: "Percentage bar graphs total 100% each.",
        },
        {
          prompt: "Bars extending above and below a base line to show gains and losses form a…",
          options: ["divergent bar graph", "histogram", "pie chart", "line graph"],
          correctIndex: 0,
          explanation: "Divergent bar graphs show values either side of a base.",
        },
        {
          prompt: "A circle graph divided into slices showing shares of a whole is a…",
          options: ["pie chart", "histogram", "line graph", "bar graph"],
          correctIndex: 0,
          explanation: "Pie charts show parts of a whole.",
        },
        {
          prompt: "A full circle in a pie chart represents…",
          options: ["360°", "180°", "100°", "90°"],
          correctIndex: 0,
          explanation: "The whole circle is 360°.",
        },
        {
          prompt: "The angle of a pie slice is found by…",
          options: ["(part ÷ total) × 360°", "part × total", "total ÷ 360°", "part ÷ 100"],
          correctIndex: 0,
          explanation: "Each slice = (part ÷ total) × 360°.",
        },
        {
          prompt: "A circle drawn larger to represent a larger total is a…",
          options: ["proportional circle", "histogram", "divergent bar", "compound line"],
          correctIndex: 0,
          explanation: "Proportional circles vary in size with the total.",
        },
        {
          prompt: "An advantage of a bar graph is that it…",
          options: ["makes categories easy to compare", "shows exact percentages of a whole", "always shows trends over time", "needs no scale"],
          correctIndex: 0,
          explanation: "Bar graphs compare categories clearly.",
        },
        {
          prompt: "A disadvantage of pie charts is that they…",
          options: ["make exact values hard to read", "cannot show shares", "need no angles", "only show time"],
          correctIndex: 0,
          explanation: "Pie charts show proportion but not precise figures.",
        },
        {
          prompt: "Graph paper (squared paper) is used so that…",
          options: ["distances plotted are exact", "the graph looks colourful", "no scale is needed", "data is hidden"],
          correctIndex: 0,
          explanation: "Squared paper keeps plotting accurate.",
        },
        {
          prompt: "A limitation of statistics is that figures can be…",
          options: ["out of date or biased", "always perfectly accurate", "never collected", "only graphs"],
          correctIndex: 0,
          explanation: "Data may be dated, incomplete or biased.",
        },
        {
          prompt: "The main reason to use a graph instead of a mass of numbers is that a graph…",
          options: ["shows patterns and trends at a glance", "hides the data", "is always exact", "needs no source"],
          correctIndex: 0,
          explanation: "Graphs reveal clustering and trends quickly.",
        },
        {
          prompt: "Several lines stacked so the bands add to a total form a…",
          options: ["compound (component) line graph", "simple line graph", "pie chart", "histogram"],
          correctIndex: 0,
          explanation: "Compound line graphs stack components to a total.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Distinguish between primary and secondary sources of statistical data, giving one example of each.",
          answerKey:
            "Primary source: data collected first-hand by the researcher (e.g. a field survey, questionnaire, count). Secondary source: data collected by others (e.g. census/LISGIS reports, yearbooks, the internet). Award marks for both definitions and examples.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State one advantage and one disadvantage each of a line graph and a pie chart.",
          answerKey:
            "Line graph — advantage: clearly shows trends/change over time; disadvantage: confusing with too many lines / poor for categories. Pie chart — advantage: shows shares of a whole clearly; disadvantage: exact values hard to read / poor with many slices. One mark each.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which graph is drawn with bars touching (no gaps) to show continuous grouped data?",
          options: ["histogram", "simple bar graph", "pie chart", "line graph"],
          correctIndex: 0,
          answerKey: "A histogram shows continuous data with touching bars; simple bar graphs leave gaps.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "A town's 400 workers are: farming 200, trade 120, services 80. Calculate the pie-chart angle for each group.",
          answerKey:
            "Farming: (200/400)×360 = 180°; Trade: (120/400)×360 = 108°; Services: (80/400)×360 = 72°. Check 180+108+72 = 360°. Award marks for the method and correct angles.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Discuss the graphical representation of statistical data, describing line graphs, bar graphs and circle graphs and stating when each is best used.",
          answerKey:
            "A strong answer describes line graphs (points joined by lines; best for change over time; simple, compound, combined forms), bar graphs (rectangular bars; simple, histogram, divergent, percentage; best for comparing categories), and circle/pie graphs (slices of 360°; proportional circles; best for shares of a whole), with the strengths and weaknesses of each and correct choice of graph for the data. Award marks across the three graph families and appropriate use.",
          marks: 5,
        },
      ],
    },
    {
      // source: Geosciences LibreTexts — Physical Geology (Earle), 13.2 Drainage Basins; and The Environment of the Earth's Surface (Southard), 05 Rivers (course/profile) (https://geo.libretexts.org/Bookshelves/Geology/Physical_Geology_(Earle)/13:_Streams_and_Floods/13.02:_Drainage_Basins)
      slug: "drainage-and-river-basins",
      title: "Drainage and River Basins",
      objective:
        "By the end of the topic, learners should be able to describe drainage and drainage systems, identify drainage patterns, describe a drainage basin and river profile, and explain the influence of drainage on settlement and communication.",
      estimatedMinutes: 150,
      notes: `## Drainage — definition

- **Drainage** — the way water flows off the land in a network of streams and rivers.
- **Drainage system** — the whole set of a main river and its tributaries draining an area.
- **Drainage basin (catchment / watershed)** — the area from which all the water flows to form one stream or river.
- **Divide (watershed line)** — the ridge of high land separating one drainage basin from the next.
- **Tributary** — a smaller stream that joins a larger river.
- **Confluence** — the point where two rivers meet.

## Drainage systems and special cases

- **Inland (internal) drainage** — rivers that do not reach the sea but end in an inland lake or a desert, where the water evaporates or sinks.
- **River capture (river piracy)** — a more powerful river erodes back and "captures" the headwaters of a weaker neighbour, diverting its water; the sharp bend left behind is an **elbow of capture**.

## Types of drainage patterns

The pattern of tributaries depends largely on the underlying rock and structure.

| Pattern | Appearance | Where it forms |
|---|---|---|
| Dendritic | Branches like a tree | Uniform rock, no strong structure (most common) |
| Trellis | Tributaries meet the main river at right angles | Folded or tilted sedimentary rock of differing hardness |
| Rectangular | Streams bend at right angles | Rock with a grid of joints or faults |
| Radial | Streams flow outward from a central high point | Isolated mountains or volcanoes |
| Centripetal | Streams flow inward to a central basin | A basin or crater (inland drainage) |
| Deranged | Chaotic, no clear pattern | Recently glaciated, flat ground |

\`\`\`svg Dendritic and radial drainage
<svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dendritic tree-like pattern and radial outward pattern">
  <path d="M20,100 L60,60 L110,20 M60,60 L100,70 M40,80 L70,40" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <text x="60" y="115" font-size="9" text-anchor="middle" fill="#2563eb">dendritic</text>
  <circle cx="200" cy="55" r="4" fill="#7c2d12"/>
  <path d="M200,55 L200,15 M200,55 L235,35 M200,55 L235,80 M200,55 L200,100 M200,55 L165,80 M200,55 L165,35" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <text x="200" y="115" font-size="9" text-anchor="middle" fill="#2563eb">radial</text>
</svg>
\`\`\`

## River profile (long profile and courses)

A river's long profile is **concave**, steep near the source and gentle near the mouth, and is divided into three courses:

- **Upper course** — steep gradient, fast, small; **vertical (downward) erosion** cuts **V-shaped valleys, waterfalls, rapids and interlocking spurs**.
- **Middle course** — gentler gradient; the river widens and begins to **meander**; **floodplains** and river cliffs form.
- **Lower course** — gentlest gradient; widest and deepest; **deposition** builds **meanders, oxbow lakes, levees, floodplains and a delta or estuary** at the mouth.

## Influence of drainage on settlement

- Rivers attract settlement: they supply **water** for drinking, farming and industry, **fertile floodplain soils**, **fish**, and a means of **transport**.
- Wet-point sites grow beside rivers in dry areas; dry-point sites avoid flooding.
- Drawbacks: **flooding**, **water-borne disease**, and rivers as **barriers** to be bridged.

## Influence of drainage on communication

- Rivers can be **routeways** (boats and ferries) linking inland places to ports.
- They may also **block** movement, so **bridges, ferries and fords** are needed to cross them; settlements often grow at **bridging points**.
- Waterfalls and rapids interrupt navigation but provide sites for **hydro-electric power**.

## Common errors and misconceptions

- **Confusing basin and divide** — the **basin** is the area drained; the **divide** is the high ridge around it.
- **Mixing dendritic and trellis** — **dendritic** branches like a tree in uniform rock; **trellis** meets at right angles in folded rock.
- **Erosion vs deposition** — the **upper** course mainly **erodes**; the **lower** course mainly **deposits**.
- **Thinking every river reaches the sea** — **inland (internal) drainage** ends in a lake or desert.`,
      workedExample: `**Task.** A river rises in steep hills and flows to the coast. (a) Name the three courses of the river and state the main work (erosion or deposition) in each. (b) Explain two ways the river influences settlement.

**Part (a) — the three courses**
1. **Upper course** — steep and fast; mainly **vertical erosion**, cutting V-shaped valleys, rapids and waterfalls.
2. **Middle course** — gentler; the river widens and **meanders**; both erosion (on outer bends) and some **deposition** (on inner bends).
3. **Lower course** — gentle and wide; mainly **deposition**, forming floodplains, oxbow lakes, levees and a delta or estuary at the mouth.

**Part (b) — influence on settlement**
- **Water and fertile soil:** the river gives water for drinking, farming and industry, and its floodplain has fertile soil, so villages and farms cluster along it.
- **Transport and trade:** the river is a routeway for boats, and a **bridging point** where it can be crossed often grows into a town.

**Conclusion:** the river's gradient sets erosion in the upper course and deposition in the lower course, and its water, soil and transport draw settlement to its banks.`,
      quiz: [
        {
          prompt: "The area from which all water flows to form one river is a…",
          options: ["drainage basin", "divide", "delta", "meander"],
          correctIndex: 0,
          explanation: "A drainage basin (catchment) feeds one river.",
        },
        {
          prompt: "The high ridge separating two drainage basins is the…",
          options: ["divide (watershed)", "confluence", "tributary", "estuary"],
          correctIndex: 0,
          explanation: "The divide is the boundary between basins.",
        },
        {
          prompt: "A smaller stream that joins a larger river is a…",
          options: ["tributary", "distributary", "divide", "delta"],
          correctIndex: 0,
          explanation: "Tributaries feed the main river.",
        },
        {
          prompt: "The point where two rivers meet is a…",
          options: ["confluence", "source", "mouth", "divide"],
          correctIndex: 0,
          explanation: "A confluence is a river junction.",
        },
        {
          prompt: "Rivers that end in an inland lake or desert instead of the sea show…",
          options: ["inland (internal) drainage", "radial drainage", "trellis drainage", "river capture"],
          correctIndex: 0,
          explanation: "Inland drainage does not reach the sea.",
        },
        {
          prompt: "When a stronger river erodes back and diverts a weaker river's water, this is…",
          options: ["river capture (piracy)", "deposition", "meandering", "confluence"],
          correctIndex: 0,
          explanation: "River capture diverts a neighbouring river's headwaters.",
        },
        {
          prompt: "A tree-like drainage pattern that forms on uniform rock is…",
          options: ["dendritic", "trellis", "radial", "rectangular"],
          correctIndex: 0,
          explanation: "Dendritic is the most common, tree-like pattern.",
        },
        {
          prompt: "Tributaries meeting the main river at right angles in folded rock form a…",
          options: ["trellis pattern", "dendritic pattern", "radial pattern", "centripetal pattern"],
          correctIndex: 0,
          explanation: "Trellis drainage forms on folded/tilted rock.",
        },
        {
          prompt: "Streams flowing outward from a central mountain form a…",
          options: ["radial pattern", "dendritic pattern", "trellis pattern", "deranged pattern"],
          correctIndex: 0,
          explanation: "Radial drainage flows out from a high point.",
        },
        {
          prompt: "Streams flowing inward to a central basin form a…",
          options: ["centripetal pattern", "radial pattern", "trellis pattern", "dendritic pattern"],
          correctIndex: 0,
          explanation: "Centripetal drainage flows toward a central low.",
        },
        {
          prompt: "The long profile of a river is generally…",
          options: ["concave — steep at the source, gentle at the mouth", "convex — gentle at the source", "straight and level", "vertical"],
          correctIndex: 0,
          explanation: "A river's long profile is concave upward.",
        },
        {
          prompt: "V-shaped valleys, waterfalls and rapids are features of the…",
          options: ["upper course", "middle course", "lower course", "mouth"],
          correctIndex: 0,
          explanation: "Steep upper courses cut V-shaped valleys and waterfalls.",
        },
        {
          prompt: "A river begins to meander and form floodplains in its…",
          options: ["middle course", "upper course", "source", "divide"],
          correctIndex: 0,
          explanation: "Meanders and floodplains develop in the middle course.",
        },
        {
          prompt: "Deltas, oxbow lakes and levees form mainly in the…",
          options: ["lower course", "upper course", "middle course", "source"],
          correctIndex: 0,
          explanation: "Deposition in the lower course builds deltas and oxbows.",
        },
        {
          prompt: "The main work of a river in its upper course is…",
          options: ["vertical erosion", "deposition", "meandering", "evaporation"],
          correctIndex: 0,
          explanation: "The steep upper course erodes downward.",
        },
        {
          prompt: "The main work of a river in its lower course is…",
          options: ["deposition", "vertical erosion", "capture", "freezing"],
          correctIndex: 0,
          explanation: "The gentle lower course deposits its load.",
        },
        {
          prompt: "One way drainage attracts settlement is by providing…",
          options: ["water, fertile soil and transport", "earthquakes", "desert winds", "cold air"],
          correctIndex: 0,
          explanation: "Rivers supply water, fertile floodplains and routeways.",
        },
        {
          prompt: "A drawback of living beside a river is the risk of…",
          options: ["flooding and water-borne disease", "no water", "no fish", "no soil"],
          correctIndex: 0,
          explanation: "Rivers can flood and spread disease.",
        },
        {
          prompt: "A town often grows where a river can be crossed, called a…",
          options: ["bridging point", "watershed", "delta", "confluence only"],
          correctIndex: 0,
          explanation: "Bridging points concentrate routes and settlement.",
        },
        {
          prompt: "Waterfalls and rapids interrupt navigation but are useful for…",
          options: ["hydro-electric power", "farming deltas", "building deserts", "stopping erosion"],
          correctIndex: 0,
          explanation: "Falling water at rapids can generate hydro-electric power.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define a drainage basin and a divide (watershed).",
          answerKey:
            "Drainage basin: the area from which all the water flows to form one stream or river (also called a catchment or watershed). Divide: the ridge of high land separating one drainage basin from the next. Award marks for both definitions.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name three drainage patterns and state where each typically forms.",
          answerKey:
            "Any three of: dendritic (uniform rock, tree-like); trellis (folded/tilted rock, right angles); rectangular (jointed/faulted rock); radial (isolated mountain/volcano); centripetal (central basin). One mark each for pattern plus setting.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "In which course of a river do waterfalls and V-shaped valleys mainly form?",
          options: ["upper course", "middle course", "lower course", "the mouth"],
          correctIndex: 0,
          answerKey: "The steep upper course erodes vertically, cutting V-shaped valleys and waterfalls.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain two ways in which drainage influences communication.",
          answerKey:
            "Any two of: rivers act as routeways for boats/ferries linking inland areas to ports; rivers act as barriers needing bridges, ferries or fords, so settlements grow at bridging points; waterfalls/rapids interrupt navigation but provide HEP sites. One mark each with explanation.",
          marks: 4,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe the three courses of a river and explain how drainage influences settlement and communication.",
          answerKey:
            "A strong answer describes the upper course (steep, fast, vertical erosion, V-shaped valleys, waterfalls), middle course (gentler, meanders, floodplains) and lower course (gentle, deposition, meanders, oxbow lakes, levees, delta/estuary); then explains settlement influence (water, fertile soil, fish, transport draw settlement; flooding and disease are drawbacks) and communication influence (rivers as routeways but also barriers crossed at bridging points, HEP at rapids). Award marks for the courses and both influences.",
          marks: 5,
        },
      ],
    },
  ],
};
