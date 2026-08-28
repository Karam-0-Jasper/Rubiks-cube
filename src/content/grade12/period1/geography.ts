import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Geography, Grade 12,
// Semester One, Period I, Unit 2 Practical Geography — Map Reading:
// Kinds of Maps and Their Uses; and Finding Positions, Directions and Using
// Conventional Signs and Symbols.
export const geographyG12P1: PeriodContent = {
  grade: 12,
  number: 1,
  title: "Map Reading: Kinds of Maps, Positions and Symbols",
  summary:
    "Period I of the MoE Grade 12 Geography syllabus opens practical map reading. Learners define a map and its characteristics, sort maps by type and use, judge their limitations, and work with map scale. They then locate positions using latitude, longitude and grid references, find direction with compass points and bearings, distinguish the three norths, and read conventional signs and symbols.",
  topics: [
    {
      // source: Geosciences LibreTexts — The Physical Environment (Ritter), 1.3.01 Maps (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/The_Physical_Environment_(Ritter)/01:_Essentials_of_Geography/1.03:_Tools_of_the_Geographer/1.3.01:_Maps)
      slug: "kinds-of-maps-and-their-uses",
      title: "Kinds of Maps and Their Uses",
      objective:
        "By the end of the topic, learners should be able to define a map and its characteristics, distinguish the various kinds of maps, state the uses and limitations of maps, and explain map scale and its types.",
      estimatedMinutes: 150,
      notes: `## Map — a definition

- **Map** — a reduced, flat (two-dimensional) representation of all or part of the Earth's surface, drawn to scale and seen from above.
- A map is the **fundamental tool of the geographer**; it shows the spatial distribution of phenomena.
- The information a map records is **spatial data** — any object or characteristic that has a location.

## Kinds of data on a map

- **Qualitative data** — shows the presence or absence of something (e.g. vegetation type, land use).
- **Quantitative data** — expressed as numbers (e.g. elevation in metres, temperature in degrees Celsius, population totals).

## Map characteristics

Every good map should carry:

- **Title** — says what the map shows and where.
- **Scale** — the relationship between map distance and real (ground) distance.
- **Direction / orientation** — usually a north arrow; north is normally toward the top.
- **Key or legend** — explains the symbols, signs and colours used.
- **Grid or graticule** — the lines of latitude and longitude, or grid squares, for locating places.
- **Border/margin and source/date** — frames the map and states who made it and when.

## Types of maps

Maps fall into two broad groups:

- **Reference maps** — help you find where places are and navigate the surface. Examples: **road (highway) maps**, **atlases**, **topographical maps**, street maps.
- **Thematic maps** — communicate one theme or distribution, such as climate, soils or population density.

Common named types the syllabus lists:

| Type of map | What it shows / main use |
|---|---|
| Road (highway) map | Roads, towns and routes for travel |
| Weather map | Pressure, fronts, rainfall and temperature for a day |
| Atlas | A bound collection of maps of the world or a region |
| Topographical map | Relief (contours), drainage and features of a small area in detail |
| Thematic map | One theme — climate, soil, population, land use |

Techniques used on thematic maps include the **choropleth** map (colour shows quantity or density in an area), the **isarithmic** map (isolines join equal values), the **topographic** map (contour lines show elevation), and **dot** and **graduated-circle** maps.

## Importance / uses of maps

- **Give information** — about places, features and distributions at a glance.
- **Identify the landscape** — hills, rivers, forests, towns and roads.
- **Interpret the landscape** — read relief, slope and settlement from the map.
- **Find directions and positions** — using the north arrow, grid and coordinates.
- **Find distances and areas** — by measuring on the map and applying the scale.

## Limitations of maps

- A map is **flat** but the Earth is curved, so every map distorts area, shape, distance or direction to some degree.
- It is **reduced** and **selective** — small features are left out or generalised.
- It can become **out of date** as roads, towns and boundaries change.
- Symbols must be learned; a crowded map is hard to read.

## Map scale — definition

- **Map scale** — the relationship between a distance on the map and the matching distance in the real world.
- **Large-scale** map (e.g. 1:24,000) — shows a **small area in great detail**.
- **Small-scale** map — shows a **large area with little detail** (good for regions and continents).

## Types of map scales

1. **Verbal (statement) scale** — states the relationship in words, e.g. "one centimetre represents one kilometre" or "one inch equals one mile".
2. **Representative fraction (RF) / ratio scale** — a ratio with 1 on top, e.g. **1:50,000**; one unit on the map represents 50,000 of the same units on the ground. It has no units, so it works in any measuring system.
3. **Graphic (linear / bar) scale** — a line or bar divided into marked segments, each standing for a ground distance. Because it is drawn on the map, it **stays correct even when the map is enlarged or reduced**.

\`\`\`svg A linear (bar) scale
<svg viewBox="0 0 260 60" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A linear bar scale divided into kilometre segments">
  <rect x="20" y="20" width="40" height="12" fill="#1f2937"/>
  <rect x="60" y="20" width="40" height="12" fill="#f8fafc" stroke="#1f2937"/>
  <rect x="100" y="20" width="40" height="12" fill="#1f2937"/>
  <rect x="140" y="20" width="40" height="12" fill="#f8fafc" stroke="#1f2937"/>
  <text x="20" y="48" font-size="9" text-anchor="middle" fill="#334155">0</text>
  <text x="60" y="48" font-size="9" text-anchor="middle" fill="#334155">1</text>
  <text x="100" y="48" font-size="9" text-anchor="middle" fill="#334155">2</text>
  <text x="140" y="48" font-size="9" text-anchor="middle" fill="#334155">3</text>
  <text x="180" y="48" font-size="9" text-anchor="middle" fill="#334155">4 km</text>
</svg>
\`\`\`

## Reducing, enlarging and measuring

- To **reduce** a map, multiply its scale denominator (e.g. from 1:50,000 to 1:100,000 halves the size); to **enlarge**, divide it.
- **Ground distance = map distance × scale denominator.** With RF 1:50,000, 4 cm on the map = 4 × 50,000 = 200,000 cm = 2 km.
- **Area** is found by measuring length and breadth on the map, converting each to ground distance, then multiplying.

## Common errors and misconceptions

- **Confusing large and small scale** — a **large-scale** map covers a **small** area in detail; a **small-scale** map covers a **large** area.
- **Forgetting to convert units** — after multiplying by the scale, convert centimetres to metres or kilometres.
- **Thinking a map is a perfect picture** — every flat map distorts something because the Earth is curved.
- **Mixing up reference and thematic maps** — reference maps show *where* places are; thematic maps show *one distribution* such as rainfall.`,
      workedExample: `**Task.** A topographical map has a representative fraction of **1:50,000**. (a) Write this as a verbal (statement) scale in centimetres and kilometres. (b) Two towns are **6 cm** apart on the map. What is the real ground distance between them in kilometres?

**Part (a) — verbal scale**
- RF 1:50,000 means 1 unit on the map = 50,000 of the same units on the ground.
- Take the unit as a centimetre: 1 cm on the map = 50,000 cm on the ground.
- Convert 50,000 cm to km: 50,000 ÷ 100,000 = **0.5 km**.
- Verbal scale: **"1 cm represents 0.5 km"** (equivalently, 2 cm represents 1 km).

**Part (b) — ground distance**
1. Ground distance = map distance × scale denominator = 6 cm × 50,000 = 300,000 cm.
2. Convert to metres: 300,000 ÷ 100 = 3,000 m.
3. Convert to kilometres: 3,000 ÷ 1,000 = **3 km**.

**Conclusion:** the towns are **3 km** apart on the ground.`,
      quiz: [
        {
          prompt: "A map is best defined as a…",
          options: ["reduced, flat representation of the Earth's surface drawn to scale", "photograph taken from an aeroplane", "globe of the whole Earth", "list of place names"],
          correctIndex: 0,
          explanation: "A map is a scaled, two-dimensional representation of the surface seen from above.",
        },
        {
          prompt: "Any object or characteristic that has a location is called…",
          options: ["spatial data", "a legend", "a projection", "a contour"],
          correctIndex: 0,
          explanation: "Maps record spatial data — features tied to a place.",
        },
        {
          prompt: "Elevation in metres shown on a map is an example of…",
          options: ["quantitative data", "qualitative data", "a scale bar", "a symbol"],
          correctIndex: 0,
          explanation: "Quantitative data is expressed as numbers, like elevation.",
        },
        {
          prompt: "The part of a map that explains its symbols and colours is the…",
          options: ["key (legend)", "title", "scale", "border"],
          correctIndex: 0,
          explanation: "The key or legend explains what the symbols mean.",
        },
        {
          prompt: "A map that helps you navigate and find where places are is a…",
          options: ["reference map", "thematic map", "choropleth map", "weather map"],
          correctIndex: 0,
          explanation: "Reference maps (road, atlas, topographic) show where places lie.",
        },
        {
          prompt: "A map showing only rainfall distribution is a…",
          options: ["thematic map", "reference map", "road map", "atlas"],
          correctIndex: 0,
          explanation: "A thematic map communicates one theme, such as rainfall.",
        },
        {
          prompt: "A bound collection of maps of the world or a region is an…",
          options: ["atlas", "isoline map", "index", "legend"],
          correctIndex: 0,
          explanation: "An atlas is a collection of maps.",
        },
        {
          prompt: "Topographical maps mainly show…",
          options: ["relief and features of a small area in detail", "the whole world at once", "only roads", "ocean currents only"],
          correctIndex: 0,
          explanation: "Topographic maps show relief (contours) and detail for a small area.",
        },
        {
          prompt: "Which is a use of maps?",
          options: ["finding directions, positions and distances", "cooking food", "measuring rainfall directly", "recording sound"],
          correctIndex: 0,
          explanation: "Maps give information and help find position, direction and distance.",
        },
        {
          prompt: "A limitation of all flat maps is that they…",
          options: ["distort area, shape, distance or direction", "cannot show towns", "have no scale", "cannot be printed"],
          correctIndex: 0,
          explanation: "A curved Earth cannot be shown on a flat map without distortion.",
        },
        {
          prompt: "Map scale is the relationship between…",
          options: ["map distance and real ground distance", "north and south", "land and sea", "colour and symbol"],
          correctIndex: 0,
          explanation: "Scale links distance on the map to distance on the ground.",
        },
        {
          prompt: "A scale written as 1:50,000 is a…",
          options: ["representative fraction (ratio) scale", "verbal scale", "linear scale", "graphic scale"],
          correctIndex: 0,
          explanation: "A ratio like 1:50,000 is the representative fraction.",
        },
        {
          prompt: "'1 cm represents 1 km' is an example of a…",
          options: ["verbal (statement) scale", "representative fraction", "linear scale", "grid reference"],
          correctIndex: 0,
          explanation: "Stating the scale in words is the verbal or statement scale.",
        },
        {
          prompt: "A scale drawn as a divided bar on the map is a…",
          options: ["graphic (linear) scale", "verbal scale", "ratio scale", "choropleth"],
          correctIndex: 0,
          explanation: "The graphic or linear scale is a drawn bar.",
        },
        {
          prompt: "The main advantage of a graphic (bar) scale is that it…",
          options: ["stays correct when the map is enlarged or reduced", "needs no key", "shows colour", "measures rainfall"],
          correctIndex: 0,
          explanation: "Because it is drawn on the map, it resizes with the map.",
        },
        {
          prompt: "A large-scale map (e.g. 1:24,000) shows…",
          options: ["a small area in great detail", "a large area with little detail", "the whole continent", "no detail at all"],
          correctIndex: 0,
          explanation: "Large scale = small area, lots of detail.",
        },
        {
          prompt: "A small-scale map shows…",
          options: ["a large area with little detail", "a small area in great detail", "only one street", "only symbols"],
          correctIndex: 0,
          explanation: "Small scale = large area, less detail.",
        },
        {
          prompt: "With RF 1:50,000, 2 cm on the map equals how much on the ground?",
          options: ["1 km", "100 m", "50 km", "5 km"],
          correctIndex: 0,
          explanation: "2 × 50,000 = 100,000 cm = 1 km.",
        },
        {
          prompt: "To enlarge a map, its scale denominator should be…",
          options: ["divided (made smaller)", "multiplied (made larger)", "left unchanged", "removed"],
          correctIndex: 0,
          explanation: "A smaller denominator (e.g. 1:25,000 from 1:50,000) enlarges the map.",
        },
        {
          prompt: "The representative fraction has no units because it…",
          options: ["works in any measuring system", "only shows colour", "is always in miles", "cannot be measured"],
          correctIndex: 0,
          explanation: "A pure ratio applies to cm, inches or any unit alike.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define a map and state three characteristics every good map should have.",
          answerKey:
            "A map is a reduced, flat (two-dimensional) representation of all or part of the Earth's surface drawn to scale and seen from above. Three characteristics (any three): title, scale, direction/north arrow, key/legend, grid/graticule, border and source/date. Award marks for the definition and three features.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the three types of map scale and give one example of each.",
          answerKey:
            "Verbal/statement scale (e.g. '1 cm represents 1 km'); representative fraction/ratio (e.g. 1:50,000); graphic/linear/bar scale (a divided bar drawn on the map). One mark each for naming, plus examples.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which type of map shows relief and features of a small area in great detail?",
          options: ["topographical map", "atlas", "weather map", "small-scale world map"],
          correctIndex: 0,
          answerKey: "A topographical (large-scale) map shows a small area in detail with contours.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State two uses and two limitations of maps.",
          answerKey:
            "Uses (any two): give information; identify/interpret the landscape; find directions and positions; find distances and areas. Limitations (any two): flat maps distort area/shape/distance/direction; they are reduced and selective; they go out of date; symbols must be learned. One mark each.",
          marks: 4,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain map scale, describe its three types, and show how a representative fraction of 1:100,000 is used to find that 3.5 cm on the map equals a ground distance in kilometres.",
          answerKey:
            "A strong answer defines scale as the relationship between map distance and ground distance; describes the verbal/statement, representative fraction/ratio, and graphic/linear scales with the graphic scale's advantage of resizing with the map; and works the calculation: 3.5 cm × 100,000 = 350,000 cm = 3,500 m = 3.5 km. Award marks for definition, the three types, and the correct conversion.",
          marks: 5,
        },
      ],
    },
    {
      // source: Geosciences LibreTexts — The Physical Environment (Ritter), 1.4.01 Latitude and Longitude; and Introduction to Geography (McCormick), 1.02 Systems of Location (UTM eastings/northings) (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/The_Physical_Environment_(Ritter)/01:_Essentials_of_Geography/1.04:_Locational_Systems/1.4.01:_Latitude_and_Longitude)
      slug: "positions-directions-signs-and-symbols",
      title: "Finding Positions, Directions and Using Conventional Signs and Symbols",
      objective:
        "By the end of the topic, learners should be able to locate positions using latitude, longitude and grid references, find direction using compass points and angular bearings, distinguish true, magnetic and grid north, and interpret conventional signs and symbols.",
      estimatedMinutes: 155,
      notes: `## Locating position: latitude and longitude

- **Latitude** — lines running east–west, called **parallels**; they are always the same distance apart. Latitude measures the angle **north or south of the Equator**, from **0° at the Equator to 90°** at each pole.
- **Longitude** — lines running north–south, called **meridians**; they are farthest apart at the Equator and **meet at the poles**. Longitude measures the angle **east or west of the Prime Meridian** (Greenwich, England), from **0° to 180°**.
- To locate a point you need **both** a latitude and a longitude, and each must carry its direction: **latitude first, then longitude**, e.g. **6°N, 10°W** (near Monrovia).
- Smaller than a degree, positions use **minutes (′)** and **seconds (″)**: 1 degree = 60 minutes, 1 minute = 60 seconds.

\`\`\`svg The geographic grid
<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid of parallels of latitude and meridians of longitude">
  <circle cx="100" cy="80" r="65" fill="#dbeafe" stroke="#1e3a8a"/>
  <line x1="35" y1="80" x2="165" y2="80" stroke="#b91c1c" stroke-width="2"/>
  <text x="168" y="83" font-size="8" fill="#b91c1c">Equator 0°</text>
  <line x1="100" y1="15" x2="100" y2="145" stroke="#1e3a8a" stroke-width="2"/>
  <text x="103" y="13" font-size="8" fill="#1e3a8a">Prime Meridian</text>
  <path d="M40,55 Q100,62 160,55" fill="none" stroke="#334155" stroke-width="0.8"/>
  <path d="M40,105 Q100,98 160,105" fill="none" stroke="#334155" stroke-width="0.8"/>
</svg>
\`\`\`

## Locating position: grid references

- Many topographic maps carry a **grid** of numbered squares.
- **Eastings** — the vertical grid lines, numbered **west to east**; read them **first**.
- **Northings** — the horizontal grid lines, numbered **south to north**; read them **second**.
- Rule: **"along the corridor, then up the stairs"** — read eastings, then northings.
- A **four-figure** reference names a square; a **six-figure** reference pinpoints a place within it (each square divided into tenths).
- The **Universal Transverse Mercator (UTM)** grid uses **metres**, dividing the world into **60 zones** each 6° of longitude wide, with easting and northing values measured from a central meridian and the Equator.

## Direction: compass points

- The **compass rose** has four **cardinal points** — **North, East, South, West** — and four **intermediate points** — **NE, SE, SW, NW**; halving again gives sixteen points (NNE, ENE, etc.).
- North is normally at the **top** of a map.

\`\`\`svg The compass rose
<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Compass rose showing cardinal and intermediate points">
  <circle cx="70" cy="70" r="55" fill="none" stroke="#334155"/>
  <line x1="70" y1="15" x2="70" y2="125" stroke="#334155"/>
  <line x1="15" y1="70" x2="125" y2="70" stroke="#334155"/>
  <text x="70" y="12" font-size="10" text-anchor="middle" fill="#b91c1c">N</text>
  <text x="70" y="136" font-size="10" text-anchor="middle" fill="#334155">S</text>
  <text x="132" y="74" font-size="10" text-anchor="middle" fill="#334155">E</text>
  <text x="6" y="74" font-size="10" text-anchor="middle" fill="#334155">W</text>
  <text x="108" y="30" font-size="8" fill="#334155">NE</text>
  <text x="108" y="115" font-size="8" fill="#334155">SE</text>
  <text x="20" y="115" font-size="8" fill="#334155">SW</text>
  <text x="20" y="30" font-size="8" fill="#334155">NW</text>
</svg>
\`\`\`

## Direction: angular bearings

- **Bearing** — direction measured as an **angle in degrees clockwise from north**, from **0°/360° (N)** through **090° (E)**, **180° (S)** and **270° (W)**.
- Bearings are always written with **three figures**, e.g. **045°** for north-east.
- To find the bearing of B from A, put north at A, then measure the clockwise angle to the line AB with a protractor.

## Types of north

- **True (geographic) north** — the direction to the North Pole, where the Earth's axis meets the surface.
- **Magnetic north** — the direction a compass needle points; it lies in northern Canada and moves over time, so it does **not** match true north.
- **Grid north** — the northward direction of the vertical grid lines on the map.
- The small angle between true north and magnetic north is the **magnetic declination (variation)**.

## Conventional signs and symbols — definition

- **Conventional signs and symbols** — agreed marks, letters, colours and pictures used on maps to stand for real features, explained in the **key**.

## Types of signs and symbols

- **Point symbols** — a dot or small mark for a single place (church, well, spot height).
- **Line symbols** — lines for linear features (roads, railways, rivers, boundaries).
- **Literal symbols** — letters or abbreviations (P for post office, PS for police station).
- **Pictorial symbols** — little pictures that look like the feature (a tent for a campsite).
- **Colour symbols** — colours for classes of feature: **blue** for water, **green** for vegetation, **brown** for contours/relief, **black** for man-made features, **red** for main roads.

## Importance and uses of signs and symbols

- Pack a lot of information into a small space.
- Make the map clear and quick to read once the key is known.
- Standardise maps so any trained reader can understand them.

## Limitations of signs and symbols

- They must be **learned**; a reader who does not know the key cannot read the map.
- Too many symbols make a map **crowded** and confusing.
- Small features may be **generalised** or left out.

## Common errors and misconceptions

- **Reading the grid the wrong way** — always read **eastings before northings** ("along, then up").
- **Confusing the three norths** — true north points to the pole, magnetic north is where the compass points, grid north follows the map's grid lines.
- **Latitude/longitude order** — give **latitude first**, then longitude, each with its direction (N/S, E/W).
- **Bearings measured wrongly** — measure the angle **clockwise from north**, and write it with three figures.`,
      workedExample: `**Task.** On a topographic map, a school lies at grid reference **445 672** and a market at **465 682**. (a) Give the four-figure reference of the square holding the school. (b) In which compass direction and roughly what bearing does the market lie from the school?

**Part (a) — four-figure reference**
- A six-figure reference is eastings **445** and northings **672**; the first two digits of each name the square.
- Eastings 44, northings 67 → the four-figure reference of the school's square is **4467**.

**Part (b) — direction and bearing of the market from the school**
1. Compare coordinates: the market (465, 682) is **further east** (465 > 445) and **further north** (682 > 672) than the school.
2. Further east and further north means the market lies to the **north-east** of the school.
3. North-east corresponds to a bearing of about **045°** (measured clockwise from north).

**Conclusion:** the school sits in square **4467**, and the market lies to the **north-east**, on a bearing of roughly **045°**.`,
      quiz: [
        {
          prompt: "Lines of latitude that run east–west are called…",
          options: ["parallels", "meridians", "eastings", "bearings"],
          correctIndex: 0,
          explanation: "Lines of latitude are parallels, equal distances apart.",
        },
        {
          prompt: "Latitude is measured north or south of the…",
          options: ["Equator", "Prime Meridian", "North Pole", "date line"],
          correctIndex: 0,
          explanation: "Latitude is the angle north or south of the Equator (0°).",
        },
        {
          prompt: "Lines of longitude (meridians) meet at the…",
          options: ["poles", "Equator", "Tropics", "date line"],
          correctIndex: 0,
          explanation: "Meridians are farthest apart at the Equator and meet at the poles.",
        },
        {
          prompt: "Longitude is measured east or west of the…",
          options: ["Prime Meridian (Greenwich)", "Equator", "South Pole", "grid north"],
          correctIndex: 0,
          explanation: "Longitude is the angle east/west of the Prime Meridian.",
        },
        {
          prompt: "Latitude ranges from 0° at the Equator to…",
          options: ["90° at the poles", "180° at the poles", "360° at the poles", "60° at the poles"],
          correctIndex: 0,
          explanation: "Latitude goes from 0° to 90° north and south.",
        },
        {
          prompt: "When writing a position, you give…",
          options: ["latitude first, then longitude", "longitude first, then latitude", "either order", "only the direction"],
          correctIndex: 0,
          explanation: "Convention is latitude first, then longitude, each with a direction.",
        },
        {
          prompt: "One degree is divided into…",
          options: ["60 minutes", "100 minutes", "10 minutes", "360 minutes"],
          correctIndex: 0,
          explanation: "1 degree = 60 minutes; 1 minute = 60 seconds.",
        },
        {
          prompt: "On a map grid, the vertical lines numbered west to east are the…",
          options: ["eastings", "northings", "parallels", "contours"],
          correctIndex: 0,
          explanation: "Eastings are read first, west to east.",
        },
        {
          prompt: "The rule for reading a grid reference is…",
          options: ["eastings first, then northings", "northings first, then eastings", "top then bottom", "colour then line"],
          correctIndex: 0,
          explanation: "'Along the corridor, then up the stairs' — eastings then northings.",
        },
        {
          prompt: "A six-figure grid reference is more precise than a four-figure one because it…",
          options: ["pinpoints a place within the square", "uses colour", "names the country", "gives the bearing"],
          correctIndex: 0,
          explanation: "Six figures divide each square into tenths for precision.",
        },
        {
          prompt: "The UTM grid measures position in…",
          options: ["metres, using eastings and northings", "degrees only", "miles only", "colours"],
          correctIndex: 0,
          explanation: "UTM uses metres in 60 zones with easting/northing values.",
        },
        {
          prompt: "The four cardinal points of the compass are…",
          options: ["N, E, S, W", "NE, SE, SW, NW", "0°, 90°, 45°, 135°", "true, grid, magnetic, false"],
          correctIndex: 0,
          explanation: "North, East, South and West are the cardinal points.",
        },
        {
          prompt: "A bearing is measured as an angle…",
          options: ["clockwise from north", "anticlockwise from south", "from east to west", "from the Equator"],
          correctIndex: 0,
          explanation: "Bearings run clockwise from north, 0°–360°.",
        },
        {
          prompt: "A bearing due east is written as…",
          options: ["090°", "180°", "270°", "360°"],
          correctIndex: 0,
          explanation: "East is 090° clockwise from north.",
        },
        {
          prompt: "The direction to the North Pole, where the Earth's axis meets the surface, is…",
          options: ["true (geographic) north", "magnetic north", "grid north", "false north"],
          correctIndex: 0,
          explanation: "True north points to the geographic North Pole.",
        },
        {
          prompt: "The direction a compass needle points is…",
          options: ["magnetic north", "true north", "grid north", "south"],
          correctIndex: 0,
          explanation: "A compass points to magnetic north, in northern Canada.",
        },
        {
          prompt: "The angle between true north and magnetic north is the…",
          options: ["magnetic declination (variation)", "bearing", "latitude", "gradient"],
          correctIndex: 0,
          explanation: "Declination is the true–magnetic north angle.",
        },
        {
          prompt: "A dot marking a single place such as a well is a…",
          options: ["point symbol", "line symbol", "colour symbol", "pictorial symbol"],
          correctIndex: 0,
          explanation: "Point symbols mark single locations.",
        },
        {
          prompt: "On maps, blue is normally used for…",
          options: ["water features", "vegetation", "contours", "main roads"],
          correctIndex: 0,
          explanation: "Blue = water; green = vegetation; brown = relief; red = main roads.",
        },
        {
          prompt: "A limitation of conventional signs and symbols is that they…",
          options: ["must be learned from the key", "never change", "show every tiny feature", "need no legend"],
          correctIndex: 0,
          explanation: "Without knowing the key, a reader cannot interpret the symbols.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define latitude and longitude and state the range of values of each.",
          answerKey:
            "Latitude: the angular distance north or south of the Equator (lines called parallels), from 0° at the Equator to 90° at the poles. Longitude: the angular distance east or west of the Prime Meridian (lines called meridians), from 0° to 180°. Award marks for both definitions and ranges.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain how to read a four-figure grid reference.",
          answerKey:
            "Read the eastings (vertical lines, west to east) first, then the northings (horizontal lines, south to north): 'along the corridor, then up the stairs'. The two-figure easting and two-figure northing name the square. Award marks for the correct order and meaning.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The direction that a magnetic compass needle points is called:",
          options: ["magnetic north", "true north", "grid north", "false north"],
          correctIndex: 0,
          answerKey: "Magnetic north is where the compass points; true north is the pole; grid north follows the map grid.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name and describe three types of conventional signs and symbols used on maps.",
          answerKey:
            "Any three of: point symbols (a dot for a single place); line symbols (lines for roads, rivers, railways); literal symbols (letters/abbreviations like P for post office); pictorial symbols (little pictures of the feature); colour symbols (blue water, green vegetation, brown relief, black man-made, red main roads). One mark each.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe how position and direction are found on a topographic map, referring to latitude and longitude, grid references, compass points and bearings, and the three types of north.",
          answerKey:
            "A strong answer explains: locating a point by latitude (north/south of the Equator, 0–90°) and longitude (east/west of the Prime Meridian, 0–180°), latitude first; using grid references (eastings then northings, four- or six-figure); finding direction by compass points (cardinal N/E/S/W and intermediate NE/SE/SW/NW) and by angular bearings measured clockwise from north in three figures; and distinguishing true north (to the pole), magnetic north (where the compass points) and grid north (the map's grid lines), with declination as the true–magnetic angle. Award marks across position, direction and the three norths.",
          marks: 5,
        },
      ],
    },
  ],
};
