import type { SubjectContent } from "@/content/types";

export const geography: SubjectContent = {
  slug: "geography",
  name: "Geography",
  shortName: "Geography",
  description:
    "The scope of geography, the earth in the solar system, map reading, and rocks of the earth's crust.",
  accent: "teal",
  sortOrder: 6,
  teacherCode: "GEO-10-5520",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "The Earth and its Representation",
      summary:
        "Learners establish what geography studies, place the earth in the solar system, learn to read and interpret maps, and examine the rocks that form the crust beneath them.",
      topics: [
        {
          slug: "introduction-to-geography",
          title: "Introduction to Geography",
          objective:
            "By the end of the lesson, learners should be able to define geography, distinguish its main branches, and explain the importance of geographical study to Liberia's development.",
          estimatedMinutes: 80,
          notes: `## Defining geography

**Geography** is the study of the earth as the home of human beings — its physical features, its climate, its resources, its peoples, and the relationships between them.

The word derives from the Greek *geo* (earth) and *graphein* (to write or describe).

## The two main branches

**Physical geography** — the natural environment.

- *Geomorphology* — landforms and the processes that shape them
- *Climatology* — climate and weather
- *Hydrology* — water bodies
- *Biogeography* — the distribution of plants and animals
- *Pedology* — soils

**Human geography** — people and their activities.

- *Population geography* — distribution, density, growth and migration
- *Economic geography* — production, trade and resources
- *Settlement geography* — where and why people live in particular places
- *Political geography* — boundaries, states and territory
- *Historical geography* — change over time

A third area, **regional geography**, studies particular areas in an integrated way, drawing on both branches.

## Key concepts

**Location** — where a place is.

- *Absolute location*: given by latitude and longitude. Monrovia lies at approximately 6 degrees 19 minutes north, 10 degrees 48 minutes west.
- *Relative location*: given in relation to other places. Liberia lies on the west coast of Africa, bordered by Sierra Leone, Guinea and Côte d'Ivoire.

**Place** — the physical and human characteristics that make a location distinctive.

**Region** — an area sharing common characteristics, whether physical (the coastal plain), economic (the iron ore belt) or cultural.

**Interaction between people and environment** — how each shapes the other.

**Movement** — of people, goods, ideas and information.

## Why geography matters to Liberia

- **Resource management.** Liberia holds substantial iron ore, gold, diamonds, timber and rubber. Locating, extracting and transporting these requires geographical knowledge.
- **Agriculture.** Rainfall patterns, soil types and drainage determine what will grow and where.
- **Disaster preparedness.** Coastal erosion along the Atlantic seaboard and seasonal flooding in low-lying areas of Monrovia require mapping and planning.
- **Planning and infrastructure.** Roads, schools, clinics and markets must be sited in relation to where people actually live.
- **Understanding population distribution.** Montserrado County holds a far larger share of the national population than its area would suggest, with consequences for services.

## Liberia in brief

- Area: approximately 111,369 square kilometres
- Coastline: roughly 579 kilometres on the Atlantic Ocean
- Counties: 15
- Capital: Monrovia, in Montserrado County
- Climate: tropical, with a distinct wet season from May to October
- Major rivers: the St. Paul, the St. John, the Cavalla, the Lofa and the Mano`,
          workedExample: `**Question:** A development agency plans to build a new agricultural training centre to serve rice farmers in northern Liberia. Explain how each of the five key geographical concepts would inform the siting decision.

**Solution**

*Step 1 — Location.*

The **absolute location** must be fixed by coordinates so that the site can be recorded, mapped and found again. The **relative location** matters more for the decision: the centre should lie within reasonable travelling distance of the farming communities it serves, and near an existing road.

*Step 2 — Place.*

The physical characteristics of the candidate site must suit its purpose. Rice requires reliable water, so the site needs adequate rainfall and access to a river or swampland for demonstration plots. Soil must be suitable for the crop being taught. A site on steep, stony ground would fail regardless of how convenient it was.

*Step 3 — Region.*

The centre should serve a coherent agricultural region. Lofa, Bong and Nimba Counties share broadly similar rainfall and growing conditions, so training developed for one is applicable across the region. Siting the centre to serve areas with quite different conditions would reduce the value of the instruction given.

*Step 4 — Human-environment interaction.*

Building the centre will itself alter the environment — land cleared, water drawn, waste produced. The planners must consider whether the site can absorb that impact, and equally whether the environment threatens the centre, for example through seasonal flooding.

*Step 5 — Movement.*

Farmers must be able to reach the centre, and produce, seed and equipment must be able to reach the farmers. A site cut off for four months of the rainy season is not usable, however good it is in other respects. Accessibility in the **worst** season, not the best, is the correct test.

**Conclusion:** the strongest site is one that is centrally placed within a coherent farming region, on suitable soil with reliable water, reachable by road throughout the year, and able to accommodate the centre without environmental damage. This is what geographers mean when they say that geography integrates physical and human considerations — no single factor decides the question.`,
          teachingTip:
            "Begin from where the learners are, literally. Ask them to describe the route from their home to the school, then push them to say why the road bends where it does, why the market sits where it sits, why nobody has built on a particular patch of ground. Within ten minutes the class will have produced examples of relief, drainage, accessibility and land use without any of those words being used, and you can then supply the vocabulary for what they already noticed. This inoculates against the commonest attitude problem in the subject — the belief that geography is a list of capitals and rivers to be memorised. Keep a large map of Liberia on the wall from the first lesson and refer to it constantly; learners who can find Lofa and Grand Gedeh without hunting are learners who will engage with everything that follows.",
          quiz: [
            {
              prompt: "The word 'geography' derives from Greek words meaning",
              options: [
                "earth and study",
                "earth and to write or describe",
                "land and people",
                "map and measure",
              ],
              correctIndex: 1,
              explanation: "From geo, meaning earth, and graphein, to write or describe.",
            },
            {
              prompt: "Which of these is a branch of physical geography?",
              options: [
                "Population geography",
                "Economic geography",
                "Geomorphology",
                "Political geography",
              ],
              correctIndex: 2,
              explanation:
                "Geomorphology studies landforms and the processes that shape them.",
            },
            {
              prompt: "Absolute location is best given by",
              options: [
                "the nearest town",
                "latitude and longitude",
                "the direction from the coast",
                "the county name",
              ],
              correctIndex: 1,
              explanation:
                "Coordinates fix a point precisely and independently of other places.",
            },
            {
              prompt: "How many counties does Liberia have?",
              options: ["12", "13", "15", "17"],
              correctIndex: 2,
              explanation: "Liberia is divided into 15 counties.",
            },
            {
              prompt: "The study of climate and weather is called",
              options: ["Hydrology", "Climatology", "Pedology", "Biogeography"],
              correctIndex: 1,
              explanation: "Climatology is the branch of physical geography dealing with climate.",
            },
            {
              prompt: "Which is an example of human geography?",
              options: [
                "The formation of river valleys",
                "The distribution of population in Montserrado County",
                "The classification of soils",
                "Patterns of rainfall",
              ],
              correctIndex: 1,
              explanation:
                "Population distribution concerns people and their activities.",
            },
            {
              prompt: "Liberia's capital city, Monrovia, lies in which county?",
              options: ["Bong", "Nimba", "Montserrado", "Grand Bassa"],
              correctIndex: 2,
              explanation: "Monrovia is the capital and lies in Montserrado County.",
            },
            {
              prompt: "A region is best defined as an area that",
              options: [
                "has a fixed size",
                "shares common characteristics",
                "lies on the coast",
                "contains a capital city",
              ],
              correctIndex: 1,
              explanation:
                "Regions may be physical, economic or cultural, but are unified by shared features.",
            },
            {
              prompt: "Which river forms part of Liberia's eastern boundary?",
              options: ["St. Paul", "Cavalla", "Lofa", "Mano"],
              correctIndex: 1,
              explanation:
                "The Cavalla River forms much of the boundary with Côte d'Ivoire; the Mano lies to the west.",
            },
            {
              prompt: "The study of soils is known as",
              options: ["Pedology", "Hydrology", "Climatology", "Cartography"],
              correctIndex: 0,
              explanation: "Pedology is the scientific study of soils in their natural setting.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define geography and distinguish clearly between its physical and human branches, naming three sub-branches of each.",
              answerKey:
                "Definition: the study of the earth as the home of human beings, covering its physical features, climate, resources and peoples, and the relationships between them. Physical geography deals with the natural environment — geomorphology, climatology, hydrology, biogeography, pedology. Human geography deals with people and their activities — population, economic, settlement, political, historical geography. Award 3 marks for the definition, 3 for the distinction, 1 mark per correctly named sub-branch up to 6.",
              marks: 12,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain the difference between absolute and relative location, giving an example of each for a place in Liberia.",
              answerKey:
                "Absolute location fixes a place by coordinates of latitude and longitude, independent of any other place — for example Monrovia at approximately 6 degrees 19 minutes north, 10 degrees 48 minutes west. Relative location describes a place in relation to others — for example Monrovia lies on the Atlantic coast, north-west of Buchanan and south-east of the Sierra Leonean border. Award 3 marks for each definition and 2 marks for each appropriate example.",
              marks: 10,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "A geographer studying why iron ore mining developed at Bomi Hills rather than elsewhere is working principally in",
              options: [
                "Climatology",
                "Economic geography",
                "Biogeography",
                "Pedology",
              ],
              correctIndex: 1,
              answerKey:
                "The question concerns resources, production and location of economic activity, which is the province of economic geography. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State four ways in which the study of geography contributes to national development in Liberia.",
              answerKey:
                "Any four from: locating and managing mineral, forest and marine resources; planning agriculture according to rainfall, soils and drainage; siting infrastructure such as roads, schools and clinics in relation to population distribution; preparing for and mitigating hazards such as coastal erosion and seasonal flooding; informing urban planning in rapidly growing Monrovia; managing boundaries and territorial questions; supporting tourism development. Award 2 marks for each point stated and 1 further mark where it is developed with a specific Liberian example, to a maximum of 12.",
              marks: 12,
            },
            {
              type: "ESSAY",
              prompt:
                "'Geography is not a list of places but a way of asking questions about the world.' Discuss this statement with reference to the branches and key concepts of geography, and illustrate your answer with examples drawn from Liberia.",
              answerKey:
                "Award marks as follows: engagement with the statement, taking a clear position rather than merely describing the subject, 4 marks; treatment of the physical and human branches showing that geography integrates both rather than compartmentalising them, 6 marks; use of at least three key concepts — location, place, region, human-environment interaction, movement — as analytical tools rather than definitions, 9 marks; at least three developed Liberian examples, such as population concentration in Montserrado, rainfall and rice cultivation in the north, or coastal erosion at Buchanan, 9 marks; organisation, coherence and a conclusion that returns to the statement, 4 marks. A learner who recites branches and definitions without addressing the argument in the quotation should not exceed 14.",
              marks: 32,
            },
          ],
        },
        {
          slug: "earth-in-solar-system",
          title: "The Earth in the Solar System",
          objective:
            "By the end of the lesson, learners should be able to describe the solar system, state the shape and dimensions of the earth, and explain the effects of the earth's rotation and revolution.",
          estimatedMinutes: 80,
          notes: `## The solar system

The **sun** at the centre, with eight planets, their moons, asteroids, comets and meteoroids in orbit around it.

In order from the sun:

**Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune**

- **Inner (terrestrial) planets** — Mercury, Venus, Earth, Mars. Small, rocky, dense.
- **Outer (Jovian) planets** — Jupiter, Saturn, Uranus, Neptune. Large, gaseous, with ring systems.

The **asteroid belt** lies between Mars and Jupiter.

## The shape of the earth

The earth is an **oblate spheroid** — a sphere flattened at the poles and bulging at the equator, caused by its rotation.

- Equatorial diameter: about 12,756 km
- Polar diameter: about 12,714 km
- Circumference at the equator: about 40,075 km

**Evidence for a spherical earth:**

1. A ship appearing over the horizon shows its mast first, then its hull.
2. The circular shadow the earth casts on the moon during a lunar eclipse.
3. Photographs from space.
4. Circumnavigation — travelling continuously in one direction returns you to the start.
5. The altitude of the pole star changes as one moves north or south.

## Rotation

The earth spins on its own axis from **west to east**, completing one turn in **23 hours 56 minutes**, taken as 24 hours.

**Effects of rotation:**

- Day and night
- The apparent rising of the sun in the east and setting in the west
- Differences in time between places on different meridians — 15 degrees of longitude equals one hour
- The deflection of winds and ocean currents (the Coriolis effect): to the right in the northern hemisphere, to the left in the southern
- Daily rise and fall of tides

## Revolution

The earth travels around the sun in an elliptical orbit, taking **365 and one quarter days**.

The quarter days accumulate: every fourth year an extra day is added to February, giving a **leap year** of 366 days.

The earth's axis is tilted at **23 and a half degrees** from the vertical, and remains pointing in the same direction throughout the orbit.

**Effects of revolution:**

- The seasons
- Varying lengths of day and night through the year
- The apparent movement of the sun between the Tropic of Cancer and the Tropic of Capricorn

## Solstices and equinoxes

- **21 June** — summer solstice. Sun overhead at the Tropic of Cancer (23.5 degrees north). Longest day in the northern hemisphere.
- **22 December** — winter solstice. Sun overhead at the Tropic of Capricorn (23.5 degrees south).
- **21 March and 23 September** — equinoxes. Sun overhead at the equator. Day and night equal everywhere.

## Why Liberia's seasons differ

Liberia lies close to the equator, between about 4 and 8 degrees north. The sun is nearly overhead throughout the year, so temperature varies little. Instead of hot and cold seasons, Liberia has a **wet season** from May to October and a **dry season** from November to April, governed by the movement of the Inter-Tropical Convergence Zone rather than by the tilt-driven temperature seasons of higher latitudes.`,
          workedExample: `**Question:** Explain why the earth experiences seasons, and account for the fact that Liberia has wet and dry seasons rather than the four temperature seasons experienced in Europe.

**Solution**

*Step 1 — establish the cause of seasons.*

Seasons arise from **two facts acting together**:

1. The earth's axis is tilted at 23.5 degrees from the vertical.
2. The axis remains pointing in the **same direction** throughout the orbit.

It is a common error to attribute seasons to the earth's varying distance from the sun. This cannot be correct: the earth is in fact closest to the sun in early January, which is midwinter in the northern hemisphere. Distance is not the explanation.

*Step 2 — show how the tilt produces seasons.*

Because the axis keeps its direction, different hemispheres lean towards the sun at different points in the orbit.

- In **June**, the northern hemisphere leans towards the sun. Sunlight strikes it more directly, is concentrated over a smaller area, and days are longer. This is northern summer.
- In **December**, the northern hemisphere leans away. Sunlight arrives at a low angle, spread over a larger area, and days are shorter. This is northern winter.
- The southern hemisphere experiences the reverse in each case.

The controlling factor is the **angle at which sunlight strikes the surface** and the **length of daylight**, not the distance travelled.

*Step 3 — apply this to Liberia.*

Liberia lies between roughly 4 and 8 degrees north — very close to the equator.

Near the equator, the sun is high in the sky throughout the year. The overhead sun migrates only between 23.5 north and 23.5 south, so a place at 6 north never experiences a large change in the angle of incoming sunlight. Day length also stays close to twelve hours all year.

The result: **temperature varies very little between months**. There is no basis for temperature-defined seasons.

*Step 4 — explain what determines Liberian seasons instead.*

The seasons are defined by **rainfall**, controlled by the movement of the **Inter-Tropical Convergence Zone (ITCZ)**, the belt where the trade winds of the two hemispheres meet.

- When the ITCZ moves north over Liberia, moist south-westerly winds from the Atlantic bring heavy rain: the **wet season, May to October**.
- When it moves south, the dry, dusty **harmattan** from the Sahara dominates: the **dry season, November to April**.

**Conclusion:** the tilt of the axis explains the temperature seasons of higher latitudes. Liberia, being near the equator, receives nearly constant insolation and therefore has seasons defined by rainfall rather than temperature.`,
          teachingTip:
            "The single most stubborn misconception in this topic is that summer occurs because the earth is nearer the sun. Confront it head-on: ask the class when they think the earth is closest to the sun, then tell them it is early January, and let them work out why that cannot explain northern summer. Follow immediately with a demonstration — a lamp or torch as the sun and a tilted globe carried around it, with the axis kept pointing at the same corner of the room throughout. Learners must see that the tilt does not swivel; that constancy is the entire mechanism. Have a learner carry the globe while another holds the torch so the class watches the changing angle of light on each hemisphere. Then bring it home by asking why they themselves do not experience four seasons, which turns an abstract lesson into an explanation of their own weather.",
          quiz: [
            {
              prompt: "How many planets are there in the solar system?",
              options: ["Seven", "Eight", "Nine", "Ten"],
              correctIndex: 1,
              explanation:
                "Eight, from Mercury to Neptune; Pluto is now classed as a dwarf planet.",
            },
            {
              prompt: "The earth's shape is best described as",
              options: ["A perfect sphere", "An oblate spheroid", "A flat disc", "A cylinder"],
              correctIndex: 1,
              explanation:
                "Rotation causes flattening at the poles and bulging at the equator.",
            },
            {
              prompt: "The earth rotates on its axis from",
              options: ["East to west", "West to east", "North to south", "South to north"],
              correctIndex: 1,
              explanation:
                "West-to-east rotation makes the sun appear to rise in the east.",
            },
            {
              prompt: "One complete revolution of the earth around the sun takes",
              options: ["24 hours", "30 days", "365 and a quarter days", "12 months exactly"],
              correctIndex: 2,
              explanation:
                "The extra quarter days accumulate into an additional day every fourth year.",
            },
            {
              prompt: "The earth's axis is tilted at an angle of",
              options: ["21.5 degrees", "23.5 degrees", "45 degrees", "66.5 degrees"],
              correctIndex: 1,
              explanation:
                "The 23.5 degree tilt from the vertical is the cause of the seasons.",
            },
            {
              prompt: "Which of these is an effect of the earth's rotation?",
              options: ["The seasons", "Day and night", "Leap years", "The elliptical orbit"],
              correctIndex: 1,
              explanation:
                "Rotation turns each part of the earth towards and away from the sun in turn.",
            },
            {
              prompt: "How many degrees of longitude correspond to one hour of time?",
              options: ["10", "15", "20", "24"],
              correctIndex: 1,
              explanation: "360 degrees divided by 24 hours gives 15 degrees per hour.",
            },
            {
              prompt: "On 21 June the sun is overhead at the",
              options: [
                "Equator",
                "Tropic of Cancer",
                "Tropic of Capricorn",
                "Arctic Circle",
              ],
              correctIndex: 1,
              explanation:
                "This is the June solstice, when the sun reaches 23.5 degrees north.",
            },
            {
              prompt: "Liberia's seasons are defined mainly by variations in",
              options: ["Temperature", "Rainfall", "Day length", "Wind speed alone"],
              correctIndex: 1,
              explanation:
                "Near the equator temperature changes little, so wet and dry seasons are recognised instead.",
            },
            {
              prompt: "Which is evidence that the earth is spherical?",
              options: [
                "The sun rises in the east",
                "A ship's mast appears before its hull over the horizon",
                "The earth has seasons",
                "Days are 24 hours long",
              ],
              correctIndex: 1,
              explanation:
                "The curvature of the surface hides the lower part of an approaching ship.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Name the eight planets in order from the sun and distinguish between the inner and outer planets.",
              answerKey:
                "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune — award 4 marks for the complete correct order, deducting 1 per misplacement. Inner or terrestrial planets (Mercury to Mars) are small, rocky and dense; outer or Jovian planets (Jupiter to Neptune) are large, gaseous and possess ring systems. The asteroid belt separates them. Award 4 marks for the distinction with at least two contrasting characteristics.",
              marks: 8,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State four effects of the earth's rotation and two effects of its revolution.",
              answerKey:
                "Rotation: day and night; apparent movement of the sun from east to west; differences in local time between meridians; deflection of winds and currents by the Coriolis effect; daily rise and fall of tides. Award 2 marks each for four. Revolution: the seasons; varying length of day and night through the year; the apparent migration of the overhead sun between the tropics; the calendar year and leap years. Award 2 marks each for two.",
              marks: 12,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "If it is 12 noon at Greenwich (0 degrees longitude), what is the local time at 45 degrees west?",
              options: ["9:00 a.m.", "3:00 p.m.", "10:00 a.m.", "6:00 p.m."],
              correctIndex: 0,
              answerKey:
                "45 divided by 15 gives 3 hours. Places west of Greenwich are behind, so 12 noon minus 3 hours is 9:00 a.m. Option A.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Give four pieces of evidence that the earth is spherical rather than flat.",
              answerKey:
                "Any four from: a ship's mast appears over the horizon before its hull, and disappears last on departure; the earth casts a circular shadow on the moon during a lunar eclipse; photographs taken from space and from high altitude show curvature; circumnavigation in a constant direction returns the traveller to the starting point; the altitude of the pole star above the horizon changes with latitude; the horizon appears circular from a high vantage point and widens with altitude. Award 2 marks per piece of evidence correctly explained; award 1 mark where the evidence is named but not explained.",
              marks: 8,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain the causes of the seasons, distinguishing carefully between the effects of the earth's tilt and its distance from the sun. Then account for the pattern of wet and dry seasons experienced in Liberia.",
              answerKey:
                "Award marks as follows: statement that seasons result from the 23.5 degree axial tilt combined with the axis maintaining a constant direction throughout the orbit, 6 marks; explanation via the angle of incidence of sunlight and the duration of daylight, with the northern and southern hemispheres treated in turn, 8 marks; explicit refutation of the distance explanation, ideally noting that the earth is nearest the sun in early January during northern winter, 5 marks; correct account of solstices and equinoxes with dates and the latitude of the overhead sun, 5 marks; explanation of Liberia's position near the equator giving near-constant insolation and day length, hence minimal temperature variation, 5 marks; account of the Inter-Tropical Convergence Zone and its seasonal migration producing the May to October wet season and the November to April dry season with the harmattan, 6 marks. A learner who attributes seasons primarily to orbital distance should not exceed 10 regardless of other merit.",
              marks: 35,
            },
          ],
        },
        {
          slug: "map-reading",
          title: "Maps and Map Reading",
          objective:
            "By the end of the lesson, learners should be able to state the elements of a map, calculate and convert scales, find distance and direction, give grid references, and interpret relief from contour patterns.",
          estimatedMinutes: 80,
          notes: `## What a map is

A **map** is a representation of the whole or part of the earth's surface, drawn to scale on a flat surface.

## Essential elements — remember TSKGON

- **T**itle — what the map shows
- **S**cale — the relationship between map distance and ground distance
- **K**ey (legend) — the meaning of the symbols used
- **G**rid — the reference system
- **O**rientation — the north arrow
- **N**ame of the maker and date

## Types of map

- **Topographical** — relief and physical features in detail
- **Political** — boundaries, capitals and administrative divisions
- **Physical** — landforms, drainage, elevation
- **Thematic** — a single subject such as rainfall, population density or vegetation
- **Sketch** — a rough map, not drawn to precise scale

## Scale

Three ways of expressing it:

1. **Statement scale** — "1 centimetre represents 1 kilometre"
2. **Representative fraction (RF)** — 1:100,000, meaning one unit on the map equals 100,000 identical units on the ground
3. **Linear scale** — a marked bar on the map

**Converting an RF to a statement:**

For 1:50,000, one centimetre on the map represents 50,000 centimetres on the ground.

50,000 cm = 50,000 / 100,000 km = **0.5 km**

So 1 cm represents 0.5 km.

**Large and small scale — do not confuse these:**

- A **large-scale** map, such as 1:10,000, covers a **small area in great detail**.
- A **small-scale** map, such as 1:1,000,000, covers a **large area with little detail**.

The terms refer to the size of the fraction, not the size of the area shown.

## Measuring distance

- **Straight distances** — measure with a ruler and convert using the scale.
- **Winding features** such as roads and rivers — lay a piece of thread along the feature, mark the ends, straighten it against a ruler, then convert.

## Direction and bearing

- The **cardinal points**: north, east, south, west.
- A **bearing** is measured in degrees clockwise from north, always written with three figures: 045 degrees, 270 degrees.

North on a map is at the top unless the north arrow indicates otherwise.

## Grid references

Vertical lines are **eastings**, numbered west to east.
Horizontal lines are **northings**, numbered south to north.

**Always read eastings first, then northings** — "along the corridor, then up the stairs".

- A **four-figure reference** identifies a square: 3428.
- A **six-figure reference** identifies a point within the square, by estimating tenths: 346285.

## Contours and relief

A **contour** is a line joining all points of equal height above sea level. The **contour interval** is the vertical difference between successive contours.

Reading relief from contour spacing:

- **Contours close together** — steep slope
- **Contours far apart** — gentle slope
- **Evenly spaced** — uniform slope
- **Closely spaced at the top, widely spaced at the bottom** — concave slope
- **Widely spaced at the top, closely spaced at the bottom** — convex slope
- **Concentric closed circles** — a hill, with the smallest circle at the summit
- **Closed circles with hachures pointing inward** — a depression
- **Contours forming a V pointing upstream** — a valley
- **Contours forming a V or U pointing downhill** — a spur

The V-rule for valleys is worth learning precisely: the point of the V always points **towards higher ground**, that is upstream.`,
          workedExample: `**Question:** On a map of scale 1:50,000, the straight-line distance between two towns measures 8.4 cm. A winding road between them measures 13.2 cm when followed with thread.

(a) Convert the scale to a statement.
(b) Calculate the straight-line distance on the ground in kilometres.
(c) Calculate the road distance.
(d) Explain why the two answers differ and which a traveller would experience.

**Solution**

**(a) Converting the scale**

RF = 1:50,000 means 1 cm on the map represents 50,000 cm on the ground.

Convert centimetres to kilometres. There are 100,000 cm in 1 km.

50,000 / 100,000 = 0.5

**Statement scale: 1 cm represents 0.5 km.**

**(b) Straight-line distance**

Map distance = 8.4 cm

Ground distance = 8.4 x 0.5 = **4.2 km**

*Alternative method, useful as a check:*

8.4 cm x 50,000 = 420,000 cm

420,000 / 100,000 = 4.2 km. The two methods agree.

**(c) Road distance**

Map distance along the road = 13.2 cm

Ground distance = 13.2 x 0.5 = **6.6 km**

**(d) Why the answers differ**

The straight-line distance of 4.2 km is the **direct separation** of the two towns, sometimes called the 'as the crow flies' distance. No road follows it.

The road distance of 6.6 km is longer because the road **bends** to follow the terrain — skirting hills, crossing rivers at bridging points, and avoiding swampy ground.

A traveller on the road would cover **6.6 km**, which is the figure that matters for calculating journey time or fuel. The straight-line distance is used for other purposes, such as planning a direct route for a power line or assessing how far apart two settlements really are.

**Answer:** (a) 1 cm to 0.5 km (b) 4.2 km (c) 6.6 km (d) the road is longer because it bends around obstacles; a traveller covers 6.6 km.`,
          teachingTip:
            "Map reading is a practical skill and cannot be taught from the board. Every learner needs a map in their hands, even a photocopied extract shared between two. Start with a map of the area around the school so learners can locate something they know before they interpret something they do not. For grid references, drill the reading order relentlessly with the phrase 'along the corridor, then up the stairs' — reversing eastings and northings is the single commonest error and it costs marks in every map question. For contours, modelling beats explanation: build a hill from wet sand or clay, slice it horizontally at equal intervals with a knife or wire, and trace the outline of each cut onto paper. Learners who have made contours from a solid shape can read them; learners who have only seen a diagram usually cannot tell a hill from a depression.",
          quiz: [
            {
              prompt: "A contour line joins points of equal",
              options: ["Temperature", "Rainfall", "Height above sea level", "Population"],
              correctIndex: 2,
              explanation:
                "Contours show relief by connecting points at the same elevation.",
            },
            {
              prompt: "On a map, closely spaced contours indicate",
              options: ["A gentle slope", "A steep slope", "Flat land", "A river"],
              correctIndex: 1,
              explanation:
                "The same height change occurs over a shorter horizontal distance, so the slope is steep.",
            },
            {
              prompt: "In a grid reference, which is read first?",
              options: ["Northings", "Eastings", "Either order", "The contour value"],
              correctIndex: 1,
              explanation:
                "Read along the corridor before going up the stairs — eastings, then northings.",
            },
            {
              prompt: "The representative fraction 1:100,000 means 1 cm on the map represents",
              options: ["1 km", "10 km", "100 km", "0.1 km"],
              correctIndex: 0,
              explanation:
                "100,000 cm equals 1 km, since there are 100,000 cm in a kilometre.",
            },
            {
              prompt: "Which of these is a large-scale map?",
              options: ["1:1,000,000", "1:500,000", "1:10,000", "1:250,000"],
              correctIndex: 2,
              explanation:
                "The larger the fraction, the larger the scale; it covers a small area in great detail.",
            },
            {
              prompt: "A bearing is measured",
              options: [
                "clockwise from north",
                "anticlockwise from north",
                "clockwise from east",
                "from the nearest cardinal point",
              ],
              correctIndex: 0,
              explanation: "Bearings run clockwise from north and are written with three figures.",
            },
            {
              prompt: "Contours forming a V that points upstream indicate",
              options: ["A spur", "A valley", "A plateau", "A depression"],
              correctIndex: 1,
              explanation:
                "In a valley the V points towards higher ground, that is upstream.",
            },
            {
              prompt: "The best method of measuring the length of a winding river on a map is",
              options: [
                "a straight ruler",
                "a piece of thread laid along it",
                "estimating by eye",
                "counting grid squares",
              ],
              correctIndex: 1,
              explanation:
                "Thread follows the curves and is then straightened against a ruler for measurement.",
            },
            {
              prompt: "Concentric closed contours with values increasing inward represent",
              options: ["A depression", "A hill", "A plain", "A cliff"],
              correctIndex: 1,
              explanation:
                "The smallest innermost circle marks the summit; a depression would show hachures pointing inward.",
            },
            {
              prompt: "Which element of a map explains the symbols used?",
              options: ["Title", "Scale", "Key", "Grid"],
              correctIndex: 2,
              explanation:
                "The key, or legend, gives the meaning of each symbol shown on the map.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "State six essential elements of a map and explain the purpose of each.",
              answerKey:
                "Title — states what the map shows; scale — gives the relationship between map and ground distance; key or legend — explains the symbols; grid — provides a reference system for locating features; orientation or north arrow — shows direction; name of maker and date — indicates authority and currency of the information. Award 1 mark per element named and 1 per purpose correctly explained.",
              marks: 12,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "A map has a scale of 1:25,000. Express this as a statement scale, and calculate the ground distance represented by 6.5 cm on the map.",
              answerKey:
                "1 cm represents 25,000 cm = 0.25 km, so the statement scale is 1 cm to 0.25 km. Ground distance = 6.5 x 0.25 = 1.625 km, approximately 1.63 km. Award 4 marks for the conversion with working, 4 for the distance calculation.",
              marks: 8,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "Contours on a map are widely spaced near the summit of a hill and closely spaced near its base. The slope is described as",
              options: ["Concave", "Convex", "Uniform", "Terraced"],
              correctIndex: 1,
              answerKey:
                "A convex slope is gentle at the top and steepens towards the bottom, which is exactly the spacing described. A concave slope shows the reverse. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain the difference between a four-figure and a six-figure grid reference, and describe how each is obtained.",
              answerKey:
                "A four-figure reference identifies a whole grid square, obtained by reading the easting of the line forming the western edge of the square followed by the northing of the line forming its southern edge. A six-figure reference identifies a specific point within a square to greater precision, obtained by subdividing each side of the square into ten imaginary parts and estimating the tenths, giving three figures for the easting and three for the northing. In both cases eastings are read before northings. Award 3 marks for each description, 2 marks for stating the eastings-first rule, 2 marks for a correctly worked illustrative example.",
              marks: 10,
            },
            {
              type: "ESSAY",
              prompt:
                "Describe how relief is represented by contour lines, explaining how a reader distinguishes hills, valleys, spurs, depressions and slopes of different gradients. Explain also how a cross-section may be drawn from a contour map.",
              answerKey:
                "Award marks as follows: definition of a contour and contour interval, 4 marks; gradient from spacing — close for steep, wide for gentle, even for uniform, 5 marks; concave and convex slopes correctly distinguished by the position of the closely spaced contours, 5 marks; hills shown as concentric closed contours with values increasing inward, and depressions distinguished by hachures or decreasing values, 5 marks; valleys and spurs distinguished by the direction in which the V points, with the rule that a valley's V points upstream towards higher ground, 6 marks; method of drawing a cross-section — lay a strip of paper along the chosen line, mark where each contour crosses it with its height, transfer to graph paper with a suitable vertical scale, plot the points and join them with a smooth curve, 8 marks; note on vertical exaggeration, 2 marks. A learner who reverses the valley V-rule should lose the full 6 marks for that section.",
              marks: 35,
            },
          ],
        },
        {
          slug: "rocks",
          title: "Rocks and the Earth's Crust",
          objective:
            "By the end of the lesson, learners should be able to describe the internal structure of the earth, classify rocks into the three main types with examples, and explain the rock cycle and the economic importance of rocks in Liberia.",
          estimatedMinutes: 80,
          notes: `## Internal structure of the earth

**Crust** — the thin outer layer. 5 to 10 km thick under the oceans, 30 to 70 km under the continents. Divided into:

- *Sial* — the continental crust, rich in silica and aluminium, less dense
- *Sima* — the oceanic crust, rich in silica and magnesium, more dense

**Mantle** — about 2,900 km thick, of dense silicate rock, partly molten in its upper portion.

**Core** — the innermost zone, mainly iron and nickel.

- *Outer core*: liquid
- *Inner core*: solid, despite the higher temperature, because of the immense pressure

## The three rock types

### 1. Igneous rocks

Formed by the **cooling and solidification of molten material**.

- **Intrusive (plutonic)** — cooled slowly beneath the surface, producing **large crystals**. *Granite, gabbro, diorite.*
- **Extrusive (volcanic)** — cooled rapidly at the surface, producing **small crystals or none**. *Basalt, pumice, obsidian.*

The rule: **slow cooling gives large crystals; rapid cooling gives small crystals.** Crystal size therefore tells you where the rock formed.

Characteristics: usually hard, crystalline, and containing no fossils.

### 2. Sedimentary rocks

Formed by the **accumulation, compaction and cementation of sediments** in layers.

- **Mechanically formed** — from fragments of other rocks. *Sandstone, shale, conglomerate.*
- **Chemically formed** — from precipitated dissolved minerals. *Rock salt, gypsum, some limestone.*
- **Organically formed** — from the remains of living things. *Coal, chalk, most limestone.*

Characteristics: occur in **strata** (layers), are usually softer, and are the **only rocks that contain fossils**.

### 3. Metamorphic rocks

Formed when existing rocks are **altered by great heat, great pressure, or both**, without melting.

| Original rock | Becomes |
| --- | --- |
| Limestone | Marble |
| Sandstone | Quartzite |
| Shale / clay | Slate |
| Granite | Gneiss |
| Coal | Graphite |

Characteristics: hard, often banded or foliated, and generally more resistant than the parent rock.

## The rock cycle

Rocks are continually transformed from one type into another.

1. Molten magma cools to form **igneous rock**.
2. Weathering and erosion break it into sediments, transported and deposited.
3. Compaction and cementation form **sedimentary rock**.
4. Heat and pressure convert either type into **metamorphic rock**.
5. Further heat melts rock back to magma, and the cycle repeats.

The key insight is that no rock is permanent. Any type may become any other type, given time and the right conditions.

## Economic importance of rocks in Liberia

- **Iron ore** — deposits at Bomi Hills, Bong Range and Nimba have historically been the country's leading export.
- **Gold and diamonds** — mined in several counties, an important source of employment and revenue.
- **Granite and laterite** — quarried for construction, road building and aggregate.
- **Sand and gravel** — extracted for concrete and building.
- **Clay** — used in brick making and pottery.
- **Rocks and soil fertility** — weathered rock supplies the mineral component of soil, determining agricultural potential.
- **Groundwater** — porous and permeable rocks such as sandstone hold aquifers, which supply wells and boreholes.`,
          workedExample: `**Question:** A learner collects three rock specimens.

*Specimen A:* hard, made of large interlocking crystals, no layers, no fossils.
*Specimen B:* clearly layered, relatively soft, contains the impression of a shell.
*Specimen C:* hard, shows distinct bands of light and dark minerals, no fossils.

(a) Identify the rock type of each, giving your reasons.
(b) Suggest a specific rock name for each.
(c) For specimen A, state where it formed and how you can tell.
(d) Explain how specimen B could eventually become a rock like specimen C.

**Solution**

**(a) Identifying the rock types**

*Specimen A — igneous.*

Interlocking crystals indicate formation by cooling from a molten state. The absence of layering rules out sedimentary; the absence of banding rules out metamorphic. Fossils cannot survive molten rock, so their absence is consistent.

*Specimen B — sedimentary.*

Two features are decisive. Layering (stratification) results from successive deposition of sediments. More conclusively, **the fossil**: only sedimentary rocks contain fossils, because igneous rock forms from melt that would destroy any remains, and metamorphism deforms them beyond recognition. Softness is also typical.

*Specimen C — metamorphic.*

Distinct banding of light and dark minerals is **foliation**, produced when minerals realign under great pressure. The rock is hard, and contains no fossils.

**(b) Specific rock names**

- A: **granite** — large crystals suggest slow cooling at depth. (Gabbro or diorite would also be acceptable.)
- B: **limestone** or **shale** — fossiliferous, layered and relatively soft.
- C: **gneiss** — banded and foliated. (Schist would also be acceptable.)

**(c) Where specimen A formed**

It formed **beneath the earth's surface**, as an intrusive or plutonic igneous rock.

*How we can tell:* **crystal size records cooling rate.** Magma trapped underground is insulated and cools slowly over long periods, so crystals have time to grow large. Lava erupted at the surface cools quickly, giving small crystals or a glassy texture with none at all.

Since specimen A has large crystals, it must have cooled slowly, and therefore formed at depth. It is exposed at the surface now only because the overlying rock has since been removed by weathering and erosion.

**(d) How B could become a rock like C**

Through **metamorphism**, following the rock cycle:

1. Specimen B is buried under later deposits of sediment.
2. Increasing depth subjects it to rising **temperature and pressure**.
3. If it lies near an intruding body of magma, or is caught in mountain-building movements, the heat and pressure intensify.
4. Its minerals **recrystallise and realign** perpendicular to the pressure, producing foliation, but the rock does **not melt** — melting would produce igneous rock instead.
5. The fossils are destroyed in the process, which is why metamorphic rocks lack them.

If specimen B is limestone, it would become **marble**; if it is shale, it would become **slate** and, under greater metamorphism, **schist** and then **gneiss**.

**Answer:** (a) A igneous, B sedimentary, C metamorphic (b) granite, limestone or shale, gneiss (c) at depth, shown by large crystals indicating slow cooling (d) by burial under heat and pressure causing recrystallisation without melting.`,
          teachingTip:
            "Bring rocks to class. A collection costing nothing — granite chippings from a road site, a piece of laterite, sandstone, any fossiliferous limestone available — teaches more in one handling session than a term of diagrams. Have learners sort the specimens into groups before you give them any names, and ask what criteria they used; they will arrive at crystal size, layering and hardness by themselves. The two diagnostic rules worth drilling until automatic are that fossils occur only in sedimentary rocks, and that crystal size records cooling rate. Both are frequently examined and both are quickly forgotten unless learners have deduced them from specimens in their own hands. Close by connecting the topic to Liberia's iron ore and gold — learners engage far more readily once they see that the rocks under discussion are the country's principal export.",
          quiz: [
            {
              prompt: "Which rock type is formed from cooled molten material?",
              options: ["Sedimentary", "Igneous", "Metamorphic", "Organic"],
              correctIndex: 1,
              explanation:
                "Igneous rocks solidify from magma below ground or lava at the surface.",
            },
            {
              prompt: "Fossils are found mainly in which type of rock?",
              options: ["Igneous", "Metamorphic", "Sedimentary", "All three equally"],
              correctIndex: 2,
              explanation:
                "Remains are preserved between layers of sediment; melting and metamorphism destroy them.",
            },
            {
              prompt: "Limestone changes into which metamorphic rock?",
              options: ["Slate", "Marble", "Quartzite", "Gneiss"],
              correctIndex: 1,
              explanation: "Heat and pressure recrystallise limestone into marble.",
            },
            {
              prompt: "Large crystals in an igneous rock indicate that it",
              options: [
                "cooled rapidly at the surface",
                "cooled slowly beneath the surface",
                "was formed from sediments",
                "contains fossils",
              ],
              correctIndex: 1,
              explanation:
                "Slow cooling allows time for crystals to grow, which happens at depth.",
            },
            {
              prompt: "The outermost layer of the earth is the",
              options: ["Mantle", "Outer core", "Crust", "Inner core"],
              correctIndex: 2,
              explanation:
                "The crust is thin relative to the mantle and core beneath it.",
            },
            {
              prompt: "Shale is converted by metamorphism into",
              options: ["Marble", "Slate", "Basalt", "Sandstone"],
              correctIndex: 1,
              explanation:
                "Pressure realigns the clay minerals of shale to produce the foliation of slate.",
            },
            {
              prompt: "Which is an extrusive igneous rock?",
              options: ["Granite", "Gabbro", "Basalt", "Diorite"],
              correctIndex: 2,
              explanation:
                "Basalt forms from lava cooling rapidly at the surface, giving fine crystals.",
            },
            {
              prompt: "The earth's inner core is solid despite its high temperature because of",
              options: [
                "its low iron content",
                "the immense pressure",
                "the absence of nickel",
                "rapid cooling",
              ],
              correctIndex: 1,
              explanation:
                "Enormous pressure raises the melting point and keeps the inner core solid.",
            },
            {
              prompt: "Coal is best classified as",
              options: [
                "an organically formed sedimentary rock",
                "an intrusive igneous rock",
                "a foliated metamorphic rock",
                "a chemically formed igneous rock",
              ],
              correctIndex: 0,
              explanation:
                "Coal forms from compressed plant remains accumulated over long periods.",
            },
            {
              prompt: "Which mineral has historically been Liberia's leading mineral export?",
              options: ["Coal", "Iron ore", "Rock salt", "Gypsum"],
              correctIndex: 1,
              explanation:
                "Deposits at Bomi Hills, the Bong Range and Nimba have long dominated exports.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Describe the internal structure of the earth, naming each layer and giving one characteristic of each.",
              answerKey:
                "Crust: thin outer layer, 5 to 10 km under oceans and 30 to 70 km under continents, divided into the less dense sial and the denser sima. Mantle: about 2,900 km thick, of dense silicate rock, partly molten in its upper part. Core: mainly iron and nickel, with a liquid outer core and a solid inner core kept solid by immense pressure. Award 3 marks per layer for the name with an accurate characteristic, and 3 further marks for the sial/sima or outer/inner core subdivision.",
              marks: 12,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Distinguish between intrusive and extrusive igneous rocks, giving two examples of each and explaining the difference in crystal size.",
              answerKey:
                "Intrusive or plutonic rocks solidify beneath the surface, where insulation causes slow cooling and allows large crystals to grow — granite, gabbro, diorite. Extrusive or volcanic rocks solidify at the surface, where rapid cooling permits only small crystals or a glassy texture — basalt, pumice, obsidian. Award 3 marks for each definition, 1 mark per correct example up to 4, and 3 marks for the explicit statement that crystal size reflects rate of cooling.",
              marks: 13,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "A rock is layered, relatively soft, and contains the impression of a leaf. It is",
              options: [
                "Igneous, formed from lava",
                "Sedimentary, formed from deposited sediments",
                "Metamorphic, formed under pressure",
                "Igneous, formed at depth",
              ],
              correctIndex: 1,
              answerKey:
                "Layering and the presence of a fossil are both diagnostic of sedimentary rock; fossils cannot survive the melting that forms igneous rock nor the deformation of metamorphism. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State five ways in which rocks are economically important to Liberia.",
              answerKey:
                "Any five from: iron ore from Bomi Hills, the Bong Range and Nimba as a leading export; gold and diamonds providing revenue and employment; granite and laterite quarried for construction and road building; sand and gravel for concrete; clay for bricks and pottery; weathered rock supplying the mineral component of soil and hence agricultural potential; porous rocks holding groundwater that supplies wells and boreholes. Award 2 marks each, requiring a stated use rather than a bare name of the rock.",
              marks: 10,
            },
            {
              type: "ESSAY",
              prompt:
                "Describe the three main types of rock, explaining how each is formed and giving three examples of each. Then explain the rock cycle, showing how each type may be transformed into the others.",
              answerKey:
                "Award marks as follows: igneous rocks — formation by cooling and solidification of magma or lava, the intrusive/extrusive distinction with crystal size explained, three examples, 9 marks; sedimentary rocks — formation by accumulation, compaction and cementation of sediments, the mechanical, chemical and organic subdivisions, stratification and fossils as diagnostic features, three examples, 9 marks; metamorphic rocks — formation by alteration of existing rock under heat and pressure without melting, foliation, at least three parent-to-product pairs, three examples, 9 marks; the rock cycle described as a continuous sequence — magma cooling to igneous rock, weathering and erosion producing sediments, compaction forming sedimentary rock, heat and pressure producing metamorphic rock, and melting returning material to magma — with the explicit point that any type may become any other, 10 marks; organisation and terminology, 3 marks. A learner who describes the three types accurately but presents the rock cycle as a one-way sequence should lose 5 marks from the cycle allocation.",
              marks: 40,
            },
          ],
        },
      ],
    },
  ],
};
