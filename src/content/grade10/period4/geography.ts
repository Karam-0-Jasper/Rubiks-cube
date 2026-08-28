import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Geography, Grade 10,
// Semester Two, Period IV, Unit 3 Practical Geography: Map Reading.
export const geographyG10P4: PeriodContent = {
  grade: 10,
  number: 4,
  title: "Map Reading",
  summary:
    "Period IV of the MoE Grade 10 Geography syllabus. Learners study practical geography — the parts of a map, direction and bearings, scale and measuring distance, grid references, and conventional map symbols — and use these skills to read and interpret maps.",
  topics: [
    {
      // source: Geosciences LibreTexts — Essentials of Geographic Information Systems (Campbell and Shin), 2.2 Map Scale, Coordinate Systems, and Map Projections (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/Essentials_of_Geographic_Information_Systems_(Campbell_and_Shin)/02:_Map_Anatomy/2.02:_Map_Scale_Coordinate_Systems_and_Map_Projections)
      slug: "elements-of-a-map",
      title: "Maps, Direction and Scale",
      objective:
        "By the end of the topic, learners should be able to state the essential parts of a map, find direction and bearing, use a map's scale to measure real distances, and explain the difference between the types of scale.",
      estimatedMinutes: 160,
      notes: `## Introduction

- A **map** shows a whole country, or the world, on flat paper — places that cannot be seen all at once.
- A map is only useful if it can be read: directions, real distances, symbols.
- **This topic:** the **essential parts** of a map; **direction and bearing**; using a map's **scale** to turn map distances into real ones.

## What is a map?

A **map** is a **drawing of the Earth's surface (or part of it) as seen from above**, drawn to scale on flat paper. Maps show places too large to see all at once.

## Essential parts of a map

A good map has certain features, remembered by the sentence **"maps"** need a **title, scale, direction (north), key and grid**:

- **Title** — tells what the map shows.
- **Scale** — links map distance to real distance.
- **Direction (compass/north arrow)** — shows which way is north.
- **Key (legend)** — explains the symbols used.
- **Grid** — lines for giving locations (grid references).
- **Margin/frame and often the date and source.**

## Direction

Direction on a map is given by the **compass**. The four **cardinal points** are **North, East, South, West** (clockwise: "Never Eat Sour Watermelons"). Between them are the **ordinal points**: North-East, South-East, South-West, North-West.

\`\`\`svg An eight-point compass rose
<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Compass rose with the eight main directions">
  <circle cx="80" cy="80" r="60" fill="#ccfbf1" stroke="#0f766e"/>
  <g font-size="11" text-anchor="middle" fill="#134e4a">
    <text x="80" y="28">N</text><text x="80" y="140">S</text><text x="140" y="84">E</text><text x="20" y="84">W</text>
    <text x="120" y="42" font-size="8">NE</text><text x="120" y="126" font-size="8">SE</text><text x="40" y="126" font-size="8">SW</text><text x="40" y="42" font-size="8">NW</text>
  </g>
  <line x1="80" y1="80" x2="80" y2="30" stroke="#dc2626" stroke-width="2" marker-end="url(#n)"/>
  <defs><marker id="n" markerWidth="8" markerHeight="8" refX="4" refY="1" orient="auto"><path d="M0,6 L4,0 L8,6 Z" fill="#dc2626"/></marker></defs>
</svg>
\`\`\`

## Bearing

A **bearing** gives direction more precisely as an **angle measured clockwise from North**, written in **three figures** (000° to 360°).

- North = 000° (or 360°), East = 090°, South = 180°, West = 270°.
- A bearing of 045° is North-East.

## Scale

The **scale** of a map tells you how a distance on the map relates to the real distance on the ground. Scale can be shown three ways:

- **Statement scale:** "1 cm represents 1 km".
- **Ratio (representative fraction):** 1 : 100 000 (1 cm on the map = 100 000 cm on the ground).
- **Linear (bar) scale:** a marked line you measure against.

A **large-scale** map shows a **small area in great detail** (e.g. 1 : 10 000); a **small-scale** map shows a **large area with little detail** (e.g. 1 : 1 000 000).

## Measuring distance

To find a real distance:
1. Measure the map distance with a ruler (straight line) or a piece of string (winding roads/rivers).
2. Multiply by the scale.

*Example:* on a 1 : 100 000 map, 4 cm represents 4 × 100 000 cm = 400 000 cm = **4 km**.

## Common errors and misconceptions

- **Forgetting to convert units** — a scale of 1 : 100 000 gives the real distance in the *same unit* first (cm), which you then convert to km (÷100 000 for cm→km). Missing the conversion is the commonest slip.
- **Thinking a large-scale map covers a large area** — the opposite: a **large-scale** map (e.g. 1 : 10 000) shows a **small** area in great detail; a **small-scale** map shows a large area with less detail.
- **Confusing direction and bearing** — a **direction** is a compass point (NE); a **bearing** is a precise angle measured *clockwise from north* (0°–360°).
- **Measuring a winding route with a straight ruler** — use string along the curves for roads and rivers, then straighten it against the ruler.`,
      workedExample: `**Task.** On a map with a scale of 1 : 50 000, the straight-line distance between two towns measures 6 cm. (a) What is the real distance in kilometres? (b) If town B is directly to the right of town A on the map, in which direction and on what bearing does B lie from A?

**Part (a) — real distance**
The scale 1 : 50 000 means 1 cm on the map = 50 000 cm on the ground.
- Map distance = 6 cm, so real distance = 6 × 50 000 cm = 300 000 cm.
- Convert to kilometres: 300 000 cm ÷ 100 000 = **3 km** (since 100 000 cm = 1 km).

**Part (b) — direction and bearing**
"Directly to the right" on a map (where north is up) is towards the **East**.
- Direction: **East**.
- Bearing: East is measured **090°** clockwise from north (written in three figures).

**Conclusion:** the towns are **3 km** apart, and town B lies **due East** of A on a bearing of **090°**. Always convert centimetres to kilometres (÷100 000) and give bearings in three figures measured clockwise from north.`,
      quiz: [
        {
          prompt: "A map is a drawing of the Earth's surface as seen from…",
          options: ["above", "the side", "below", "inside"],
          correctIndex: 0,
          explanation: "Maps show a bird's-eye (overhead) view.",
        },
        {
          prompt: "Which of these is an essential part of a map?",
          options: ["a scale", "a photograph", "a story", "a song"],
          correctIndex: 0,
          explanation: "A map needs a scale (plus title, key, direction, grid).",
        },
        {
          prompt: "The part of a map that explains the symbols is the…",
          options: ["key (legend)", "title", "scale", "grid"],
          correctIndex: 0,
          explanation: "The key/legend explains the symbols.",
        },
        {
          prompt: "The four cardinal points are…",
          options: ["North, East, South, West", "NE, SE, SW, NW", "up, down, left, right", "0, 90, 180, 270"],
          correctIndex: 0,
          explanation: "North, East, South and West are the cardinal points.",
        },
        {
          prompt: "North-East is an example of an … point.",
          options: ["ordinal (intermediate)", "cardinal", "grid", "scale"],
          correctIndex: 0,
          explanation: "NE, SE, SW, NW are ordinal points.",
        },
        {
          prompt: "A bearing is measured clockwise from…",
          options: ["North", "East", "South", "West"],
          correctIndex: 0,
          explanation: "Bearings start from north and go clockwise.",
        },
        {
          prompt: "A bearing is written in how many figures?",
          options: ["three (e.g. 090°)", "one", "two", "four"],
          correctIndex: 0,
          explanation: "Bearings use three figures, e.g. 045°.",
        },
        {
          prompt: "The bearing of due East is…",
          options: ["090°", "180°", "270°", "000°"],
          correctIndex: 0,
          explanation: "East is 090° clockwise from north.",
        },
        {
          prompt: "The bearing of due South is…",
          options: ["180°", "090°", "270°", "360°"],
          correctIndex: 0,
          explanation: "South is 180°.",
        },
        {
          prompt: "'1 cm represents 1 km' is which kind of scale?",
          options: ["statement scale", "ratio scale", "bar scale", "grid scale"],
          correctIndex: 0,
          explanation: "It is a statement (word) scale.",
        },
        {
          prompt: "The scale 1 : 100 000 means 1 cm on the map equals … on the ground.",
          options: ["100 000 cm", "100 cm", "1 000 cm", "1 cm"],
          correctIndex: 0,
          explanation: "The ratio gives ground cm per map cm.",
        },
        {
          prompt: "A large-scale map shows…",
          options: ["a small area in great detail", "a large area with little detail", "the whole world", "no detail"],
          correctIndex: 0,
          explanation: "Large scale = small area, much detail.",
        },
        {
          prompt: "On a 1 : 100 000 map, 5 cm represents a real distance of…",
          options: ["5 km", "500 km", "50 km", "0.5 km"],
          correctIndex: 0,
          explanation: "5 × 100 000 cm = 500 000 cm = 5 km.",
        },
        {
          prompt: "To measure a winding river on a map, it is best to use a…",
          options: ["piece of string", "straight ruler only", "protractor", "compass"],
          correctIndex: 0,
          explanation: "String follows curves; then measure the string.",
        },
        {
          prompt: "How many centimetres are in one kilometre?",
          options: ["100 000", "1 000", "10 000", "1 000 000"],
          correctIndex: 0,
          explanation: "1 km = 100 000 cm.",
        },
        {
          prompt: "The bearing of due West is…",
          options: ["270°", "090°", "180°", "360°"],
          correctIndex: 0,
          explanation: "West is 270° clockwise from north.",
        },
        {
          prompt: "A bar (linear) scale is used by…",
          options: ["measuring the map distance against the marked line", "reading the title", "counting grid squares only", "using the key"],
          correctIndex: 0,
          explanation: "You compare a distance directly against the bar.",
        },
        {
          prompt: "A small-scale map (e.g. 1 : 1 000 000) shows…",
          options: ["a large area with little detail", "a small area in great detail", "one building", "no area"],
          correctIndex: 0,
          explanation: "Small scale = large area, little detail.",
        },
        {
          prompt: "On a map, if north is at the top, the direction to the top-right corner is roughly…",
          options: ["North-East", "South-West", "West", "South"],
          correctIndex: 0,
          explanation: "Top-right is toward the NE.",
        },
        {
          prompt: "A bearing of 045° points…",
          options: ["North-East", "South-East", "North-West", "due East"],
          correctIndex: 0,
          explanation: "045° is halfway between north (000°) and east (090°).",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "List four essential parts that every good map should have.",
          answerKey:
            "Any four of: title, scale, direction/north arrow (compass), key/legend, grid (grid references), frame/margin, date/source. Award a mark per valid part (max 4).",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "On a map with a scale of 1 : 50 000, two features are 8 cm apart. Calculate the real distance in kilometres.",
          answerKey:
            "8 × 50 000 cm = 400 000 cm; ÷ 100 000 = 4 km. Award marks for multiplying by the scale and correctly converting cm to km.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A bearing is best described as…",
          options: [
            "an angle measured clockwise from north, in three figures",
            "the distance between two points",
            "the map's title",
            "the map's key",
          ],
          correctIndex: 0,
          answerKey: "A bearing is a three-figure angle measured clockwise from north.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the difference between a large-scale and a small-scale map, and describe the three ways a map's scale can be shown.",
          answerKey:
            "A strong answer explains that a large-scale map (e.g. 1 : 10 000) shows a small area in great detail, while a small-scale map (e.g. 1 : 1 000 000) shows a large area with little detail. The three ways of showing scale: statement/word scale ('1 cm represents 1 km'), ratio/representative fraction (1 : 100 000), and linear/bar scale (a marked line measured against). Award marks for the large-vs-small distinction and the three scale types.",
          marks: 5,
        },
      ],
    },
    {
      // source: Geosciences LibreTexts — Laboratory Manual For Introductory Geology (Deline, Harris and Tefend), 3.2 Map Orientation and Scale (https://geo.libretexts.org/Learning_Objects/Laboratory/Book:_Laboratory_Manual_For_Introductory_Geology_(Deline_Harris_and_Tefend)/03:_Topographic_Maps/3.2:_Map_Orientation_and_Scale)
      slug: "grid-references-and-symbols",
      title: "Grid References and Map Symbols",
      objective:
        "By the end of the topic, learners should be able to use four- and six-figure grid references to locate places on a map, and identify common conventional map symbols.",
      estimatedMinutes: 150,
      notes: `## Introduction

- After scale and direction, the next skill is **pinpointing an exact spot** so anyone can find it.
- Two tools: a numbered **grid** (a reference number for every point) and standard **symbols** (much information in little space).
- **This topic:** four- and six-figure **grid references**; the common **conventional symbols**.

## The grid

Topographic maps are covered by a network of numbered lines called a **grid**, which divides the map into squares. The lines make it possible to give the exact **location** of any place.

- **Eastings** — the vertical lines, numbered **left to right** (their numbers increase towards the **east**).
- **Northings** — the horizontal lines, numbered **bottom to top** (their numbers increase towards the **north**).

**Rule to remember the order:** *"along the corridor, then up the stairs"* — always read the **easting first**, then the **northing**.

## Four-figure grid reference

A **four-figure grid reference** names a whole **grid square**. Take the easting and northing lines that meet at the **bottom-left corner** of the square.

*Example:* if a feature is in the square whose bottom-left corner is easting **34** and northing **21**, its four-figure reference is **3421**.

## Six-figure grid reference

A **six-figure grid reference** locates a point **precisely** within a square. Imagine each grid square divided into **tenths** (10 × 10).

- Read the easting line, then estimate the tenths across to the point → three figures.
- Read the northing line, then estimate the tenths up to the point → three figures.

*Example:* a point 4 tenths east of line 34 and 7 tenths north of line 21 has the six-figure reference **344217**.

\`\`\`svg Reading a grid reference: easting first, then northing
<svg viewBox="0 0 180 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A grid with eastings and northings and a marked point">
  <g stroke="#0f766e" stroke-width="1">
    <line x1="40" y1="20" x2="40" y2="150"/><line x1="90" y1="20" x2="90" y2="150"/><line x1="140" y1="20" x2="140" y2="150"/>
    <line x1="40" y1="20" x2="140" y2="20"/><line x1="40" y1="85" x2="140" y2="85"/><line x1="40" y1="150" x2="140" y2="150"/>
  </g>
  <g font-size="9" fill="#134e4a" text-anchor="middle">
    <text x="40" y="163">34</text><text x="90" y="163">35</text>
    <text x="30" y="153">21</text><text x="30" y="88">22</text>
  </g>
  <circle cx="70" cy="105" r="4" fill="#dc2626"/>
  <text x="95" y="108" font-size="8" fill="#dc2626">point</text>
  <text x="90" y="12" font-size="8" text-anchor="middle" fill="#0f766e">eastings →</text>
</svg>
\`\`\`

## Conventional map symbols

Because maps are drawn to scale, real features are shown by small **conventional symbols**, explained in the **key**. Common examples:

- **Blue** — water: rivers, lakes, the sea.
- **Green** — vegetation: forest, farmland.
- **Brown contour lines** — height and relief.
- **Black** — roads, railways, buildings, boundaries.
- Small pictures/letters for a **church, school, post office, bridge, hospital**, etc.

Reading symbols with the key lets you interpret what the land is really like — where the rivers, roads, settlements and high ground are.

## Common errors and misconceptions

- **Reading the grid reference in the wrong order** — always give **eastings first, then northings** ("along the corridor, then up the stairs"). Reversing them points to the wrong square.
- **Confusing four- and six-figure references** — a **four-figure** reference names a whole *square*; a **six-figure** reference pinpoints a *precise point* within it by imagining each square divided into tenths.
- **Guessing symbols instead of using the key** — always check the map's **key (legend)**; the same symbol can mean different things on different maps.
- **Mixing up colours** — blue is usually water, brown is contours/relief, green is vegetation; don't assume from memory.`,
      workedExample: `**Task.** (a) Explain the difference between a four-figure and a six-figure grid reference. (b) A feature lies in the square with bottom-left corner at easting 56, northing 32, and is 3 tenths east and 5 tenths north within that square. Give its four-figure and six-figure references.

**Part (a) — four vs six figures**
- A **four-figure** grid reference names a **whole grid square** (using the easting and northing of its bottom-left corner) — it locates the feature to within one square.
- A **six-figure** grid reference locates an **exact point** within a square by dividing the square into tenths, giving greater precision.

**Part (b) — the references**
Always read the **easting first, then the northing** ("along the corridor, then up the stairs").

- **Four-figure reference:** easting 56, northing 32 → **5632**.
- **Six-figure reference:** easting 56 + 3 tenths = 563; northing 32 + 5 tenths = 325 → **563325**.

**Conclusion:** the four-figure reference 5632 names the square; the six-figure reference 563325 pinpoints the exact spot within it. The golden rule is easting before northing.`,
      quiz: [
        {
          prompt: "The network of numbered lines on a map is the…",
          options: ["grid", "scale", "key", "title"],
          correctIndex: 0,
          explanation: "The grid lets you locate places.",
        },
        {
          prompt: "The vertical grid lines are the…",
          options: ["eastings", "northings", "contours", "borders"],
          correctIndex: 0,
          explanation: "Eastings run vertically; their numbers increase eastward.",
        },
        {
          prompt: "The horizontal grid lines are the…",
          options: ["northings", "eastings", "contours", "roads"],
          correctIndex: 0,
          explanation: "Northings run horizontally; numbers increase northward.",
        },
        {
          prompt: "When giving a grid reference, you read the … first.",
          options: ["easting", "northing", "title", "scale"],
          correctIndex: 0,
          explanation: "Always easting before northing.",
        },
        {
          prompt: "'Along the corridor, then up the stairs' reminds you to read…",
          options: ["easting then northing", "northing then easting", "scale then key", "title then grid"],
          correctIndex: 0,
          explanation: "Corridor (across) = easting; stairs (up) = northing.",
        },
        {
          prompt: "A four-figure grid reference names a…",
          options: ["whole grid square", "single exact point", "map title", "compass point"],
          correctIndex: 0,
          explanation: "Four figures locate a square.",
        },
        {
          prompt: "For a four-figure reference, use which corner of the square?",
          options: ["bottom-left", "top-right", "centre", "top-left"],
          correctIndex: 0,
          explanation: "Take the bottom-left corner's easting and northing.",
        },
        {
          prompt: "A six-figure grid reference locates a…",
          options: ["precise point within a square", "whole square only", "whole map", "compass bearing"],
          correctIndex: 0,
          explanation: "Six figures pinpoint an exact spot.",
        },
        {
          prompt: "To get the extra figures in a six-figure reference, each square is divided into…",
          options: ["tenths", "halves", "hundreds", "thirds"],
          correctIndex: 0,
          explanation: "Each square is imagined as 10 × 10 tenths.",
        },
        {
          prompt: "A feature in the square with bottom-left corner easting 12, northing 34 has the four-figure reference…",
          options: ["1234", "3412", "2143", "4321"],
          correctIndex: 0,
          explanation: "Easting 12 then northing 34 → 1234.",
        },
        {
          prompt: "On a map, blue usually represents…",
          options: ["water (rivers, lakes)", "forest", "roads", "buildings"],
          correctIndex: 0,
          explanation: "Blue is conventionally used for water.",
        },
        {
          prompt: "On a map, green usually represents…",
          options: ["vegetation (forest, farmland)", "water", "roads", "height"],
          correctIndex: 0,
          explanation: "Green shows vegetation.",
        },
        {
          prompt: "Brown contour lines on a map show…",
          options: ["height and relief", "rivers", "roads", "railways"],
          correctIndex: 0,
          explanation: "Contours show the shape and height of the land.",
        },
        {
          prompt: "Conventional symbols are explained in the map's…",
          options: ["key (legend)", "title", "grid", "scale"],
          correctIndex: 0,
          explanation: "The key tells you what each symbol means.",
        },
        {
          prompt: "Eastings increase towards the…",
          options: ["east", "west", "north", "south"],
          correctIndex: 0,
          explanation: "Easting numbers grow eastward.",
        },
        {
          prompt: "Northings increase towards the…",
          options: ["north", "south", "east", "west"],
          correctIndex: 0,
          explanation: "Northing numbers grow northward.",
        },
        {
          prompt: "A point 5 tenths east of line 20 and 3 tenths north of line 40 has the six-figure reference…",
          options: ["205403", "203405", "255303", "402035"],
          correctIndex: 0,
          explanation: "Easting 205, northing 403 → 205403.",
        },
        {
          prompt: "Why are conventional symbols used on maps?",
          options: [
            "real features are too big to draw to scale, so symbols represent them",
            "to make maps colourful only",
            "to hide information",
            "to replace the scale",
          ],
          correctIndex: 0,
          explanation: "Symbols stand for features that cannot be drawn full size.",
        },
        {
          prompt: "Which is the correct order for a grid reference?",
          options: ["easting, then northing", "northing, then easting", "scale, then grid", "key, then title"],
          correctIndex: 0,
          explanation: "Easting always comes before northing.",
        },
        {
          prompt: "Roads, railways and buildings are usually shown in which colour?",
          options: ["black", "blue", "green", "brown"],
          correctIndex: 0,
          explanation: "Black is used for man-made features like roads and buildings.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between eastings and northings, and state which you read first in a grid reference.",
          answerKey:
            "Eastings are the vertical grid lines (numbers increase towards the east); northings are the horizontal grid lines (numbers increase towards the north). You read the easting first, then the northing ('along the corridor, then up the stairs'). Award marks for both definitions and the correct order.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "A feature is in the square with bottom-left corner at easting 47, northing 88. Give its four-figure grid reference.",
          answerKey:
            "Easting 47 then northing 88 → 4788. Award marks for the correct order (easting first) and the correct reference.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "On a topographic map, brown contour lines represent…",
          options: ["height and relief of the land", "rivers and lakes", "roads and railways", "forests"],
          correctIndex: 0,
          answerKey: "Brown contours show the height and shape (relief) of the land.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how a six-figure grid reference is worked out, and why it is more useful than a four-figure reference.",
          answerKey:
            "A strong answer explains that each grid square is imagined as divided into tenths (10 × 10); to get a six-figure reference you read the easting line and estimate the tenths across to the point (three figures), then the northing line and the tenths up to the point (three figures), always easting before northing. It is more useful than a four-figure reference because a four-figure reference only names a whole square, whereas a six-figure reference pinpoints an exact location within the square, giving far greater precision. Award marks for the method (tenths, easting then northing) and the reason for greater precision.",
          marks: 5,
        },
      ],
    },
  ],
};
