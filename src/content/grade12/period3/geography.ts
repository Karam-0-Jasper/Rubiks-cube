import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Geography, Grade 12,
// Semester One, Period III, Unit 2 Practical and Regional Geography — Map
// Reading: Elementary Surveying; and Basic Concept of GIS.
export const geographyG12P3: PeriodContent = {
  grade: 12,
  number: 3,
  title: "Elementary Surveying and GIS",
  summary:
    "Period III of the MoE Grade 12 Geography syllabus covers field surveying and modern geographic technology. Learners identify surveying instruments and methods, distinguish open and closed traverses, and then explain the Geographic Information System — its data, sources, components, procedures and its link with remote sensing.",
  topics: [
    {
      // source: Geosciences LibreTexts — Nature of Geographic Information (DiBiase), 05 Land Surveying and GPS (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/Nature_of_Geographic_Information_(DiBiase)/05:_Land_Surveying_and_GPS)
      slug: "elementary-surveying",
      title: "Elementary Surveying",
      objective:
        "By the end of the topic, learners should be able to define surveying, identify chain-survey equipment and its uses, distinguish types and methods of traverse surveying, and state the advantages and disadvantages of survey methods.",
      estimatedMinutes: 150,
      notes: `## Survey — definition

- **Surveying** — measuring the **positions**, distances and angles of points on the Earth's surface to make a map or plan.
- Surveyors measure horizontal positions in coordinate systems **relative to previously surveyed points called control points**.
- **Control point** — a fixed point of known position and height that anchors a survey to a reference system.

## Description and uses of chain-survey equipment

- **Surveyor's chain / tape** — a graduated steel tape or chain (often 100 ft or 30 m) used to measure distances along the ground.
- **Chain arrows (pins)** — marking pins pushed into the ground to mark the end of each chain length.
- **Ranging poles** — tall striped poles set up to mark and keep a straight line between stations.
- **Cross-staff / optical square** — used to set out right angles (offsets) from the chain line to features.
- **Offset staff** — a short rod for measuring short distances to features beside the line.
- **Field notebook** — records the measurements and a rough sketch.
- **Clinometer** — measures the angle of a slope.
- Modern instruments include the **theodolite** and **total station** (measuring angles and distances electronically), and **GPS** for positions.

## Ranging and chaining

- **Ranging** — placing ranging poles in line so the chain runs **straight** between two stations.
- **Chaining** — measuring the distance along that straight line by laying the chain/tape end to end, using arrows to count lengths.
- **Obstacles** in ranging and chaining include buildings, rivers, hills and thick bush that block the line of sight or the tape; these are worked around using offsets and geometry.

## Types of traverse surveying

A **traverse** is a series of connected survey lines whose lengths and directions are measured.

- **Closed traverse** — starts and ends at the **same point** (or at two known control points), forming a closed figure. Its accuracy can be **checked**: the interior angles of the polygon must sum to **(n − 2) × 180°**, so errors can be found and shared out.
- **Open traverse** — starts and ends at **different points** and does **not** close on itself, so its error **cannot be checked** in the same way; accuracy is judged only by repeating measurements.

\`\`\`svg Closed and open traverse
<svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A closed traverse forming a polygon and an open traverse that does not close">
  <polygon points="30,90 60,30 100,50 90,100" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <text x="65" y="112" font-size="9" text-anchor="middle" fill="#2563eb">closed</text>
  <polyline points="160,95 185,45 215,70 245,35" fill="none" stroke="#b91c1c" stroke-width="1.5"/>
  <text x="200" y="112" font-size="9" text-anchor="middle" fill="#b91c1c">open</text>
</svg>
\`\`\`

## Methods of traverse surveying

- **Chain (chain-and-tape) traversing** — distances measured by chain, directions fixed by offsets and tie lines; suited to small, fairly flat areas.
- **Compass traversing** — the direction (bearing) of each line is read with a compass and the length with a chain.
- **Plane-table traversing** — the survey is plotted directly on a board in the field.
- **Theodolite / total-station traversing** — angles and distances measured precisely by instrument.

## Advantages and disadvantages of survey methods

| Method | Advantages | Disadvantages |
|---|---|---|
| Chain survey | Simple, cheap, few instruments | Slow; only good for small, open, flat areas |
| Compass survey | Quick bearings; works around obstacles | Compass errors from local magnetism |
| Theodolite / total station | Very accurate; measures angles and distance | Costly; needs skill and training |
| GPS | Fast, global positions | Needs equipment; signal blocked under cover |

## Common errors and misconceptions

- **Confusing open and closed traverses** — a **closed** traverse returns to its start and can be **checked**; an **open** one does not.
- **Forgetting to range** — the chain must run **straight**; without ranging poles the distance measured is too long.
- **Thinking a survey needs no reference** — surveys are tied to **control points** of known position.
- **Ignoring temperature/tape error** — a stretched or hot tape gives wrong distances; readings must be careful.`,
      workedExample: `**Task.** A surveyor runs a four-sided **closed** traverse and measures the four interior angles as 92°, 88°, 95° and 83°. (a) What should the angles sum to? (b) By how much is the survey in error, and what does a closed traverse allow the surveyor to do?

**Part (a) — expected sum of interior angles**
- For a polygon with n sides, the interior angles sum to **(n − 2) × 180°**.
- Here n = 4, so the sum should be (4 − 2) × 180° = 2 × 180° = **360°**.

**Part (b) — the error and its correction**
1. Add the measured angles: 92° + 88° + 95° + 83° = **358°**.
2. Error = expected − measured = 360° − 358° = **2°** (the survey is 2° short).
3. Because the traverse is **closed**, this error can be **detected** and **distributed** among the angles (e.g. adding 0.5° to each) to correct the survey.

**Conclusion:** a closed traverse of four sides should total 360°; the 2° misclosure is spread over the angles — something an open traverse could not allow.`,
      quiz: [
        {
          prompt: "Surveying is the measurement of the… of points on the Earth's surface.",
          options: ["positions, distances and angles", "rainfall and temperature", "population", "colours"],
          correctIndex: 0,
          explanation: "Surveying measures positions, distances and angles for maps.",
        },
        {
          prompt: "A fixed point of known position that anchors a survey is a…",
          options: ["control point", "ranging pole", "chain arrow", "traverse"],
          correctIndex: 0,
          explanation: "Surveys are tied to control points of known position.",
        },
        {
          prompt: "A graduated steel tape or chain is used to measure…",
          options: ["distances along the ground", "wind speed", "angles of slope", "map colour"],
          correctIndex: 0,
          explanation: "The chain/tape measures ground distances.",
        },
        {
          prompt: "Tall striped poles set up to keep a straight line between stations are…",
          options: ["ranging poles", "chain arrows", "offset staffs", "clinometers"],
          correctIndex: 0,
          explanation: "Ranging poles mark and keep the line straight.",
        },
        {
          prompt: "An instrument used to set out right angles (offsets) from the chain line is the…",
          options: ["cross-staff / optical square", "field notebook", "GPS", "theodolite"],
          correctIndex: 0,
          explanation: "The cross-staff or optical square sets out right angles.",
        },
        {
          prompt: "A clinometer is used to measure…",
          options: ["the angle of a slope", "distance", "bearing", "area"],
          correctIndex: 0,
          explanation: "A clinometer measures slope angle.",
        },
        {
          prompt: "Placing ranging poles in line so the chain runs straight is called…",
          options: ["ranging", "chaining", "offsetting", "levelling"],
          correctIndex: 0,
          explanation: "Ranging sets the straight line before chaining.",
        },
        {
          prompt: "Measuring distance by laying the chain end to end along the line is…",
          options: ["chaining", "ranging", "traversing", "plotting"],
          correctIndex: 0,
          explanation: "Chaining measures the distance along the ranged line.",
        },
        {
          prompt: "A series of connected survey lines whose lengths and directions are measured is a…",
          options: ["traverse", "contour", "profile", "divide"],
          correctIndex: 0,
          explanation: "A traverse is a chain of measured survey lines.",
        },
        {
          prompt: "A traverse that starts and ends at the same point is a…",
          options: ["closed traverse", "open traverse", "radial traverse", "compass traverse"],
          correctIndex: 0,
          explanation: "A closed traverse returns to its start.",
        },
        {
          prompt: "A traverse that starts and ends at different points is an…",
          options: ["open traverse", "closed traverse", "level traverse", "chain traverse"],
          correctIndex: 0,
          explanation: "An open traverse does not close on itself.",
        },
        {
          prompt: "The interior angles of a closed traverse polygon with n sides should sum to…",
          options: ["(n − 2) × 180°", "n × 180°", "360° always", "180° always"],
          correctIndex: 0,
          explanation: "The polygon angle-sum rule allows an error check.",
        },
        {
          prompt: "The main advantage of a closed traverse over an open one is that…",
          options: ["its error can be checked and corrected", "it needs no instruments", "it is always shorter", "it needs no control point"],
          correctIndex: 0,
          explanation: "A closed traverse can be checked with the angle-sum rule.",
        },
        {
          prompt: "In compass traversing, the direction of each line is read with a…",
          options: ["compass", "chain", "clinometer", "plane table"],
          correctIndex: 0,
          explanation: "Compass traversing reads bearings with a compass.",
        },
        {
          prompt: "A method that plots the survey directly on a board in the field is…",
          options: ["plane-table traversing", "chain traversing", "GPS", "levelling"],
          correctIndex: 0,
          explanation: "The plane table plots the survey in the field.",
        },
        {
          prompt: "An advantage of chain surveying is that it is…",
          options: ["simple and cheap", "very fast over large areas", "always the most accurate", "free of any error"],
          correctIndex: 0,
          explanation: "Chain surveying is simple and cheap but slow and small-scale.",
        },
        {
          prompt: "A disadvantage of chain surveying is that it is…",
          options: ["slow and only good for small, flat areas", "too expensive", "impossible without satellites", "always inaccurate"],
          correctIndex: 0,
          explanation: "Chain survey suits only small, open, flat ground.",
        },
        {
          prompt: "An obstacle to ranging and chaining is…",
          options: ["a building, river or thick bush blocking the line", "sunshine", "a control point", "a clear field"],
          correctIndex: 0,
          explanation: "Obstacles block the line of sight or the tape.",
        },
        {
          prompt: "An instrument that measures both angles and distances electronically is the…",
          options: ["total station (theodolite)", "chain arrow", "ranging pole", "offset staff"],
          correctIndex: 0,
          explanation: "The total station measures angles and distances precisely.",
        },
        {
          prompt: "A disadvantage of theodolite/total-station surveying is that it is…",
          options: ["costly and needs skill", "always inaccurate", "impossible outdoors", "unable to measure angles"],
          correctIndex: 0,
          explanation: "Precise instruments cost more and need training.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define surveying and name four pieces of chain-survey equipment.",
          answerKey:
            "Surveying is the measurement of the positions, distances and angles of points on the Earth's surface to make a map or plan, tied to control points. Four items (any four): surveyor's chain/tape, chain arrows/pins, ranging poles, cross-staff/optical square, offset staff, field notebook, clinometer. Award marks for the definition and four items.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Distinguish between an open traverse and a closed traverse.",
          answerKey:
            "A closed traverse starts and ends at the same point (or between two known points), forming a closed figure whose error can be checked (interior angles sum to (n−2)×180°) and corrected. An open traverse begins and ends at different points, does not close, and its error cannot be checked except by repeating measurements. Award marks for both with the error-check point.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The interior angles of a five-sided closed traverse should sum to:",
          options: ["540°", "360°", "180°", "900°"],
          correctIndex: 0,
          answerKey: "(n − 2) × 180° = (5 − 2) × 180° = 540°.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between ranging and chaining.",
          answerKey:
            "Ranging is placing ranging poles in line so the survey line is straight between two stations; chaining is measuring the distance along that straight line by laying the chain/tape end to end and counting lengths with arrows. Award marks for both.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe the equipment and methods of elementary surveying, and give the advantages and disadvantages of two survey methods.",
          answerKey:
            "A strong answer describes chain-survey equipment (chain/tape, arrows, ranging poles, cross-staff/optical square, offset staff, field notebook, clinometer) and processes of ranging and chaining; names methods (chain, compass, plane-table, theodolite/total-station traversing) and the closed vs open traverse distinction; and compares two methods with advantages and disadvantages (e.g. chain survey: cheap and simple but slow and small-area; theodolite/total station: very accurate but costly and needing skill). Award marks for equipment, methods and a valid comparison.",
          marks: 5,
        },
      ],
    },
    {
      // source: Geosciences LibreTexts — GIS Commons (An Introductory Textbook), 1.2 Definitions of GIS and Essentials of GIS (Campbell & Shin), 01 Introduction; remote sensing from Geographic Information Systems and Cartography, 4.4 Remote Imagery Acquisition (https://geo.libretexts.org/Bookshelves/Geography_(Physical)/GIS_Commons:_An_Introductory_Textbook_on_Geographic_Information_Systems/01:_Introduction_to_GIS_and_Mapping/1.02:_Definitions_Of_Geographic_Information_Systems_(GIS))
      slug: "basic-concept-of-gis",
      title: "Basic Concept of GIS",
      objective:
        "By the end of the topic, learners should be able to explain a Geographic Information System, outline the sources and importance of geographic data, describe the components and procedures of GIS, and explain the relationship between GIS and remote sensing.",
      estimatedMinutes: 150,
      notes: `## Meaning of GIS

- **Geographic Information System (GIS)** — a system of **computer hardware, software and people** that supports the **capture, management, analysis and display of spatial data**.
- Put simply, a GIS links a **map (spatial) component** to an **attribute (database) component**, so places on a map are tied to information about them.
- This makes GIS a powerful tool to explore geographic patterns and solve environmental and planning problems.

## Geographic data

- **Geographic (spatial) data** — data about features that have a **location** on the Earth.
- A GIS handles two kinds together:
- **Spatial data** — *where* a feature is (points, lines, areas on the map).
- **Attribute data** — *what* the feature is (its name, size, population, land use, stored in a database).

## Sources of GIS data

- **Satellite remote sensing** and **aerial photography** (raster imagery).
- **GPS** field surveys of positions.
- **Ground surveys** (chain, theodolite, total station).
- **Digitising** existing paper maps and scanning.
- **Existing databases** — census, government and agency records (e.g. LISGIS).

## Importance of geographic data and GIS

- **Organises, analyses and visualises** large amounts of spatial data at different scales and times.
- Supports **planning** — roads, towns, land use, farming and services.
- Helps manage **resources and the environment** (forests, water, minerals, disasters).
- Makes **maps quickly** and lets many users share the same data.

## Components of GIS

- **Hardware** — the computer, storage, scanners, printers, GPS units.
- **Software** — the program that stores, edits, processes and displays geographic data as maps.
- **Data** — the spatial and attribute data, the heart of the system.
- **People** — trained users who run the system and interpret results.
- **Methods (procedures)** — the rules and steps followed to collect, process and analyse the data.

## Procedures of GIS

A GIS project usually follows these steps:

1. **Data input (capture)** — collect and enter data from remote sensing, GPS, surveys, digitising and databases.
2. **Data storage and management** — organise the data in the database.
3. **Data manipulation and analysis** — query, overlay and process the layers.
4. **Output and display** — present results as maps, tables and reports.

## Satellite remote sensing

- **Remote sensing** — collecting information about an object or area **without being in direct contact** with it, by measuring reflected or emitted electromagnetic energy.
- **Satellite imagery** — images of the Earth's surface produced by sensors on orbiting satellites.
- **Passive sensors** detect natural energy (mainly reflected sunlight); **active sensors** (radar, laser) send out their own energy and detect what returns.

## Relationship between GIS and remote sensing

- Remote sensing is a **major source of data** for GIS, especially **raster** imagery.
- Satellite and aerial images are processed, then **entered into the GIS** as layers to be combined with other data.
- Together, **remote sensing (data capture)** and **GIS (storage, analysis, display)** manage geographic information from local to global scale.

## Common errors and misconceptions

- **Thinking GIS is just a map** — GIS links maps to a **database** and analyses the data; a paper map cannot.
- **Confusing spatial and attribute data** — spatial data is *where*; attribute data is *what*.
- **Confusing GIS and remote sensing** — remote sensing **captures** data (imagery); GIS **stores, analyses and displays** it.
- **Forgetting people and methods** — hardware and software alone are not a GIS; **trained people** and **procedures** are components too.`,
      workedExample: `**Task.** A town council wants to plan where to build new schools. Explain, using GIS, (a) the components it would need and (b) the steps (procedures) it would follow, and (c) how remote sensing helps.

**Part (a) — components needed**
- **Hardware:** computers, storage, a printer, GPS units.
- **Software:** a GIS program to store and map the data.
- **Data:** spatial data (roads, existing schools, settlements) and attribute data (population by area).
- **People:** trained staff to run the GIS.
- **Methods:** agreed procedures for collecting and analysing the data.

**Part (b) — the procedure (steps)**
1. **Data input:** enter maps of settlements, roads and current schools, plus population figures.
2. **Storage/management:** organise the layers in the database.
3. **Analysis:** overlay population and distance-to-school layers to find under-served areas.
4. **Output:** produce a map showing the best sites for new schools.

**Part (c) — role of remote sensing**
- **Satellite/aerial imagery** shows where houses and new settlements have grown; this raster data is processed and **entered into the GIS** as an up-to-date layer.

**Conclusion:** GIS combines hardware, software, data, people and methods to analyse spatial and attribute data through set procedures, with remote sensing supplying current imagery to guide the school-siting decision.`,
      quiz: [
        {
          prompt: "A GIS is a system of computer hardware, software and people that supports the… of spatial data.",
          options: ["capture, management, analysis and display", "cooking and eating", "printing of books", "measurement of rainfall only"],
          correctIndex: 0,
          explanation: "GIS captures, manages, analyses and displays spatial data.",
        },
        {
          prompt: "GIS links a map (spatial) component to an…",
          options: ["attribute (database) component", "ocean current", "weather balloon", "compass"],
          correctIndex: 0,
          explanation: "GIS ties the map to a database of attributes.",
        },
        {
          prompt: "Data about features that have a location on the Earth is…",
          options: ["geographic (spatial) data", "musical data", "financial data only", "colour data"],
          correctIndex: 0,
          explanation: "Geographic/spatial data has a location.",
        },
        {
          prompt: "Spatial data tells you… a feature is.",
          options: ["where", "who owns", "how loud", "how tasty"],
          correctIndex: 0,
          explanation: "Spatial data = where; attribute data = what.",
        },
        {
          prompt: "Attribute data tells you… a feature is.",
          options: ["what", "where", "when it rains", "how far north"],
          correctIndex: 0,
          explanation: "Attribute data describes the feature (name, size, use).",
        },
        {
          prompt: "Which is a source of GIS data?",
          options: ["satellite remote sensing and GPS surveys", "cooking recipes", "song lyrics", "phone calls"],
          correctIndex: 0,
          explanation: "Remote sensing, GPS, surveys, digitising and databases feed GIS.",
        },
        {
          prompt: "Turning an existing paper map into digital GIS data is called…",
          options: ["digitising", "chaining", "ranging", "condensation"],
          correctIndex: 0,
          explanation: "Digitising converts paper maps into GIS data.",
        },
        {
          prompt: "Which is NOT one of the five components of a GIS?",
          options: ["rainfall", "hardware", "software", "data"],
          correctIndex: 0,
          explanation: "The components are hardware, software, data, people, methods.",
        },
        {
          prompt: "The computer, storage, scanners and printers of a GIS are its…",
          options: ["hardware", "software", "data", "methods"],
          correctIndex: 0,
          explanation: "Hardware is the physical equipment.",
        },
        {
          prompt: "The program that stores, edits and displays geographic data is the GIS…",
          options: ["software", "hardware", "people", "data"],
          correctIndex: 0,
          explanation: "Software processes and displays the data.",
        },
        {
          prompt: "The trained users who run the system are the GIS…",
          options: ["people", "hardware", "software", "attributes"],
          correctIndex: 0,
          explanation: "People are a key GIS component.",
        },
        {
          prompt: "The first step in a GIS procedure is usually…",
          options: ["data input (capture)", "printing the final map", "deleting the data", "buying software"],
          correctIndex: 0,
          explanation: "Data is captured/input first.",
        },
        {
          prompt: "Overlaying and processing data layers to answer a question is the… stage.",
          options: ["analysis", "input", "output", "storage"],
          correctIndex: 0,
          explanation: "Analysis manipulates the layers to solve problems.",
        },
        {
          prompt: "Collecting information about an area without being in direct contact with it is…",
          options: ["remote sensing", "chaining", "ranging", "digitising"],
          correctIndex: 0,
          explanation: "Remote sensing gathers data from a distance.",
        },
        {
          prompt: "Images of the Earth taken by sensors on orbiting satellites are…",
          options: ["satellite imagery", "contour maps", "pie charts", "field notebooks"],
          correctIndex: 0,
          explanation: "Satellite imagery is remotely sensed from orbit.",
        },
        {
          prompt: "Sensors that send out their own energy (radar, laser) and detect what returns are…",
          options: ["active sensors", "passive sensors", "control points", "digitisers"],
          correctIndex: 0,
          explanation: "Active sensors provide their own energy source.",
        },
        {
          prompt: "Sensors that detect natural energy such as reflected sunlight are…",
          options: ["passive sensors", "active sensors", "GPS units", "theodolites"],
          correctIndex: 0,
          explanation: "Passive sensors rely on natural energy.",
        },
        {
          prompt: "The relationship between remote sensing and GIS is that remote sensing…",
          options: ["is a major source of data for GIS", "replaces GIS", "cannot be used with GIS", "only measures rainfall"],
          correctIndex: 0,
          explanation: "Remote sensing supplies imagery data for GIS analysis.",
        },
        {
          prompt: "An importance of GIS is that it…",
          options: ["organises, analyses and visualises spatial data for planning", "cooks food", "measures a person's weight", "writes music"],
          correctIndex: 0,
          explanation: "GIS supports planning and resource management.",
        },
        {
          prompt: "Remote sensing mainly captures data, while GIS mainly…",
          options: ["stores, analyses and displays it", "eats it", "deletes it", "hides it"],
          correctIndex: 0,
          explanation: "Remote sensing captures; GIS stores, analyses and displays.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define a Geographic Information System (GIS) and state what two kinds of data it handles together.",
          answerKey:
            "GIS is a system of computer hardware, software and people that supports the capture, management, analysis and display of spatial data, linking a map (spatial) component to an attribute (database) component. It handles spatial data (where a feature is) and attribute data (what the feature is). Award marks for the definition and the two data types.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the five components of a GIS.",
          answerKey:
            "Hardware, software, data, people, and methods (procedures). One mark each up to the marks available.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which best describes the relationship between remote sensing and GIS?",
          options: ["remote sensing captures data that GIS stores, analyses and displays", "GIS captures imagery that remote sensing displays", "they are the same thing", "neither uses spatial data"],
          correctIndex: 0,
          answerKey: "Remote sensing is a major source of (raster) data for GIS; GIS stores, analyses and displays it.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Outline the four main steps (procedures) in a GIS project.",
          answerKey:
            "1) Data input/capture (from remote sensing, GPS, surveys, digitising, databases); 2) data storage and management; 3) data manipulation and analysis (query, overlay); 4) output and display (maps, tables, reports). Award marks for the correct sequence.",
          marks: 4,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain what GIS is, describe its components and procedures, and discuss the importance of GIS and its relationship with remote sensing.",
          answerKey:
            "A strong answer defines GIS (hardware, software, people capturing, managing, analysing and displaying spatial data linked to attributes); lists its five components (hardware, software, data, people, methods); outlines the procedure (input, storage, analysis, output); states its importance (organising/analysing spatial data, planning, resource and environmental management, quick map-making, data sharing); and explains remote sensing as a major data source (satellite/aerial imagery, active vs passive sensors) captured and then analysed and displayed within GIS. Award marks across definition, components/procedures, importance and the remote-sensing link.",
          marks: 5,
        },
      ],
    },
  ],
};
