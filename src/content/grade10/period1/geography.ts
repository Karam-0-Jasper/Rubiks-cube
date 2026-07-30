import type { SubjectContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Geography (Grades 10-12).
// Grade 10, Semester One, Period I, Unit 1: Physical Geography — The Solar
// System: the Earth as a planet; shape and size of the Earth; latitude,
// longitude and time; the Earth's movements. Earth's structure and rocks
// (P2), population and settlement (P3), map reading (P4) follow in later
// periods.
export const geography: SubjectContent = {
  slug: "geography",
  name: "Geography",
  shortName: "Geography",
  description:
    "Physical geography and the solar system: the Earth as a planet, its shape and size, latitude, longitude and time, and the Earth's movements.",
  accent: "teal",
  sortOrder: 6,
  teacherCode: "GEO-10-5520",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "The Earth and the Solar System",
      summary:
        "Period I of the MoE Grade 10 Geography syllabus (Unit 1: The Solar System). Learners place the Earth in the solar system, describe its shape and size, use latitude and longitude to locate places and calculate time, and explain the effects of the Earth's rotation and revolution.",
      topics: [
        {
          slug: "earth-as-a-planet",
          title: "The Earth as a Planet",
          objective:
            "By the end of the unit, learners should be able to describe the solar system, name the planets in order, distinguish inner from outer planets, and state the Earth's position and the conditions that make it able to support life.",
          estimatedMinutes: 160,
          notes: `## The solar system

The **solar system** is the Sun together with all the bodies that orbit it: **eight planets**, their moons, asteroids, comets and meteoroids.

The Sun is a **star** — a huge ball of hot gas — and its gravity holds the system together. It provides the light and heat on which life depends.

## The planets in order from the Sun

**Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.**

A common mnemonic: *My Very Easy Method Just Speeds Up Naming*.

- **Inner (terrestrial) planets** — Mercury, Venus, Earth, Mars. Small, rocky, dense.
- **Outer (Jovian) planets** — Jupiter, Saturn, Uranus, Neptune. Large, gaseous, with ring systems.
- The **asteroid belt** lies between Mars and Jupiter.

*(Pluto is now classed as a dwarf planet, not one of the eight.)*

## Other members of the solar system

- **Moons (satellites)** — bodies orbiting a planet; the Earth has one Moon.
- **Asteroids** — small rocky bodies, mostly in the belt between Mars and Jupiter.
- **Comets** — bodies of ice and dust with long, glowing tails when near the Sun.
- **Meteoroids** — small fragments; those that burn in the atmosphere are meteors ("shooting stars").

## The Earth's position

The Earth is the **third planet** from the Sun. Its position is one reason it can support life:

- It is at the right distance for **liquid water** — not so close that water boils away (like Venus) nor so far that it freezes (like Mars).
- It has an **atmosphere** containing oxygen and providing pressure and protection.
- It has a **moderate temperature range** suitable for living things.
- It has a protective **ozone layer** and a **magnetic field** shielding it from harmful radiation.

This combination — the right distance, water, atmosphere and temperature — is why Earth is, so far as we know, the only planet that supports life.`,
          workedExample: `**Question:** A learner claims that Jupiter, being the largest planet, must be the closest to the Sun and the most likely to support life. Correct the claim and explain properly.

**Solution**

*Error 1 — position.*
Size has nothing to do with distance from the Sun. In order from the Sun the planets are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Jupiter is the **fifth** planet, well out beyond the asteroid belt — not the closest. **Mercury** is closest.

*Error 2 — support for life.*
Being large does not make a planet suitable for life. Jupiter is a **gas giant** with no solid surface, extreme cold and a crushing atmosphere. The planet that supports life is **Earth**, and it does so not because of size but because of its **position and conditions**:
- the **right distance** from the Sun for liquid water;
- an **atmosphere** with oxygen;
- a **moderate temperature**;
- protection from harmful radiation.

*The corrected statement:* Jupiter is the largest planet but the fifth from the Sun; Mercury is the closest; and Earth, the third planet, supports life because of its distance and conditions, not because of any planet's size.

**The lesson:** distance from the Sun and the ability to support life depend on a planet's position and conditions, not on how big it is.`,
          teachingTip:
            "Do the solar system to scale outside if you can, even roughly: pace out the planets across the schoolyard with the Sun at one end, and the vast empty gaps between the outer planets become real in a way a textbook diagram never manages. Attack the common error that a bigger planet is closer or better for life — ask why Earth, not giant Jupiter, has life, and let the class reason to distance, water and atmosphere. Keep the order drilled with a mnemonic the class invents themselves, and mention that Pluto was reclassified as a dwarf planet, which learners find genuinely interesting and remember.",
          quiz: [
            { prompt: "How many planets are in the solar system?", options: ["Seven", "Eight", "Nine", "Ten"], correctIndex: 1, explanation: "Eight, from Mercury to Neptune; Pluto is now a dwarf planet." },
            { prompt: "Which planet is closest to the Sun?", options: ["Earth", "Venus", "Mercury", "Mars"], correctIndex: 2, explanation: "Mercury is the innermost planet." },
            { prompt: "The Earth is the ___ planet from the Sun.", options: ["first", "second", "third", "fourth"], correctIndex: 2, explanation: "The order is Mercury, Venus, Earth (third)." },
            { prompt: "The asteroid belt lies between", options: ["Earth and Mars", "Mars and Jupiter", "Jupiter and Saturn", "Venus and Earth"], correctIndex: 1, explanation: "Most asteroids orbit between Mars and Jupiter." },
            { prompt: "Which are the inner (terrestrial) planets?", options: ["Jupiter, Saturn, Uranus, Neptune", "Mercury, Venus, Earth, Mars", "Earth, Mars, Jupiter, Saturn", "Mercury, Earth, Jupiter, Neptune"], correctIndex: 1, explanation: "The inner planets are small and rocky." },
            { prompt: "The Sun is a", options: ["planet", "star", "moon", "comet"], correctIndex: 1, explanation: "The Sun is a star — a ball of hot gas." },
            { prompt: "A body that orbits a planet is called a", options: ["comet", "moon (satellite)", "meteor", "star"], correctIndex: 1, explanation: "Moons or satellites orbit planets." },
            { prompt: "Which is the largest planet?", options: ["Earth", "Saturn", "Jupiter", "Neptune"], correctIndex: 2, explanation: "Jupiter is the largest planet in the solar system." },
            { prompt: "Comets are made mainly of", options: ["rock and metal", "ice and dust", "gas only", "water only"], correctIndex: 1, explanation: "Comets are icy bodies that grow tails near the Sun." },
            { prompt: "What holds the solar system together?", options: ["The Earth's magnetism", "The Sun's gravity", "The atmosphere", "Sunlight"], correctIndex: 1, explanation: "The Sun's gravity keeps the planets in orbit." },
            { prompt: "Which planet was reclassified as a dwarf planet?", options: ["Neptune", "Pluto", "Mars", "Mercury"], correctIndex: 1, explanation: "Pluto is now classed as a dwarf planet." },
            { prompt: "The outer planets are described as", options: ["small and rocky", "large and gaseous", "closest to the Sun", "without moons"], correctIndex: 1, explanation: "Jupiter, Saturn, Uranus and Neptune are large gas giants." },
            { prompt: "A 'shooting star' is really a", options: ["planet", "meteor burning in the atmosphere", "comet", "moon"], correctIndex: 1, explanation: "A meteoroid burning up in the atmosphere appears as a meteor." },
            { prompt: "One reason Earth can support life is that it", options: ["is the biggest planet", "is at the right distance for liquid water", "has no atmosphere", "is closest to the Sun"], correctIndex: 1, explanation: "Its distance allows water to exist as a liquid." },
            { prompt: "Which planet is known for its prominent rings?", options: ["Mars", "Saturn", "Mercury", "Venus"], correctIndex: 1, explanation: "Saturn's ring system is the most prominent." },
            { prompt: "The correct order from the Sun begins", options: ["Venus, Mercury, Earth", "Mercury, Venus, Earth", "Earth, Venus, Mercury", "Mercury, Earth, Venus"], correctIndex: 1, explanation: "Mercury, then Venus, then Earth." },
            { prompt: "Which gas in Earth's atmosphere is essential for animal life?", options: ["Hydrogen", "Oxygen", "Helium", "Neon"], correctIndex: 1, explanation: "Oxygen is needed for respiration." },
            { prompt: "Mars is often called the", options: ["Blue Planet", "Red Planet", "Ringed Planet", "Morning Star"], correctIndex: 1, explanation: "Iron oxide gives Mars its reddish colour." },
            { prompt: "The Earth has how many natural moons?", options: ["None", "One", "Two", "Four"], correctIndex: 1, explanation: "Earth has a single natural satellite, the Moon." },
            { prompt: "Which layer helps shield the Earth from harmful radiation?", options: ["The asteroid belt", "The ozone layer", "The crust", "The equator"], correctIndex: 1, explanation: "The ozone layer absorbs harmful ultraviolet radiation." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Name the eight planets in order from the Sun and distinguish between the inner and outer planets.", answerKey: "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune — 4 marks for the correct order, deducting 1 per misplacement. Inner (terrestrial) planets Mercury–Mars are small, rocky and dense; outer (Jovian) planets Jupiter–Neptune are large, gaseous and have rings, separated by the asteroid belt — 4 marks for the distinction with at least two contrasts.", marks: 8 },
            { type: "SHORT_ANSWER", prompt: "State four conditions that make the Earth able to support life.", answerKey: "The right distance from the Sun for liquid water; an atmosphere containing oxygen; a moderate temperature range; protection from harmful radiation by the ozone layer and magnetic field. Award 2 marks each.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "Which statement is correct?", options: ["Jupiter is closest to the Sun", "The Sun is a planet", "Earth is the third planet and supports life", "Pluto is the eighth planet"], correctIndex: 2, answerKey: "Earth is third from the Sun and the only known planet supporting life. Jupiter is fifth, the Sun is a star, and Pluto is a dwarf planet. Option C.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Distinguish between an asteroid, a comet and a meteor.", answerKey: "An asteroid is a small rocky body, mostly in the belt between Mars and Jupiter. A comet is a body of ice and dust that develops a glowing tail near the Sun. A meteor is a meteoroid burning up in the Earth's atmosphere, seen as a shooting star. Award 3 marks each.", marks: 9 },
            { type: "ESSAY", prompt: "Explain why the Earth is able to support life while the other planets, as far as we know, cannot. Refer to at least four conditions.", answerKey: "Award marks for a developed treatment of at least four conditions: distance from the Sun allowing liquid water — neither boiling as on Venus nor frozen as on Mars, 4 marks; an atmosphere containing oxygen and providing pressure, 3 marks; a moderate temperature range, 3 marks; protection from harmful radiation by the ozone layer and magnetic field, 3 marks; the presence of liquid water itself, 3 marks. Award up to 4 further marks for coherent organisation and for contrasting Earth with an unsuitable planet. A learner who attributes Earth's life to its size should lose credit for that point.", marks: 15 },
          ],
        },
        {
          slug: "shape-and-size-of-the-earth",
          title: "The Shape and Size of the Earth",
          objective:
            "By the end of the unit, learners should be able to describe the shape of the Earth, state its dimensions, and give evidence that the Earth is spherical rather than flat.",
          estimatedMinutes: 120,
          notes: `## The shape of the Earth

The Earth is not a perfect sphere. It is an **oblate spheroid** — a sphere slightly **flattened at the poles** and **bulging at the equator**. This bulge is caused by the Earth's rotation.

## The size of the Earth

- Equatorial diameter: about **12 756 km**
- Polar diameter: about **12 714 km** (slightly shorter — hence the flattening)
- Circumference at the equator: about **40 075 km**

## Evidence that the Earth is spherical

1. **Ships and the horizon** — as a ship approaches, its **mast appears first**, then the hull rises into view; on departure the hull disappears first. A flat Earth would show the whole ship shrinking evenly.
2. **The circular shadow on the Moon** — during a **lunar eclipse** the Earth casts a curved, circular shadow on the Moon, whatever its position; only a sphere always casts a circular shadow.
3. **Photographs from space** — pictures taken from spacecraft and satellites show the Earth as a sphere.
4. **Circumnavigation** — travelling continuously in one direction (as Magellan's expedition did) returns you to the starting point.
5. **The changing altitude of the pole star** — as you travel north or south, the angle of the pole star above the horizon changes, which only happens on a curved surface.
6. **The widening horizon with height** — the higher you climb, the further you can see, because the surface curves away.

## Why the shape and size matter

The Earth's spherical shape means the Sun's rays strike different latitudes at different angles, which is the basis of the world's climate zones. Its size and curvature are also why maps of large areas must deal with the problem of showing a curved surface on flat paper.`,
          workedExample: `**Question:** Standing on the shore, a learner watches a ship sail away and notices that the lower part of the ship disappears before the top of its mast. He also hears that during a recent lunar eclipse the Earth's shadow on the Moon was curved. Explain how each observation shows that the Earth is spherical, and why a flat Earth would look different.

**Solution**

*Observation 1 — the ship's hull disappears first.*
On a **curved (spherical) surface**, as the ship moves away it passes "over" the curve of the water. The bulge of the Earth's surface hides the **lower part (hull) first**, leaving the **mast** visible longest.
*On a flat Earth*, the whole ship would simply appear smaller and smaller as it receded, shrinking evenly until it vanished — the hull and mast would disappear together. Because the hull goes first, the surface must curve.

*Observation 2 — the curved shadow on the Moon.*
During a **lunar eclipse** the Earth passes between the Sun and the Moon and casts its shadow on the Moon. That shadow is always **curved and circular**.
*Only a sphere casts a circular shadow from every angle.* A flat disc would sometimes cast a straight-edged or oval shadow depending on its orientation. Since the Earth's shadow is always circular, the Earth is a sphere.

**Conclusion:** both observations — the hull vanishing before the mast, and the always-circular shadow — are explained by a spherical Earth and would not occur on a flat one. Together they are strong, everyday evidence that the Earth is a sphere.`,
          teachingTip:
            "The ship-and-horizon evidence is the one learners can almost see for themselves, so build the lesson around it: draw a curved surface and a flat one on the board and ask, for each, what would happen as a ship sailed away — the class works out that only the curved surface hides the hull first. That reasoning, rather than a bare list of 'proofs', is what an examination rewards. Bring in the lunar-eclipse shadow and the space photographs to reinforce it. Keep the shape precise — an oblate spheroid, flattened at the poles — and connect the flattening to rotation, which ties this topic to the Earth's movements taught later in the same period.",
          quiz: [
            { prompt: "The shape of the Earth is best described as", options: ["a perfect sphere", "an oblate spheroid", "a flat disc", "a cube"], correctIndex: 1, explanation: "It is flattened at the poles and bulges at the equator." },
            { prompt: "The Earth is flattened at the", options: ["equator", "poles", "tropics", "prime meridian"], correctIndex: 1, explanation: "Rotation causes flattening at the poles and bulging at the equator." },
            { prompt: "The equatorial diameter of the Earth is about", options: ["6 400 km", "12 756 km", "40 075 km", "150 000 km"], correctIndex: 1, explanation: "About 12 756 km; the circumference is about 40 075 km." },
            { prompt: "As a ship approaches the shore, which part appears first?", options: ["The hull", "The mast", "The whole ship at once", "The anchor"], correctIndex: 1, explanation: "The mast appears first because the surface curves." },
            { prompt: "During a lunar eclipse, the Earth's shadow on the Moon is", options: ["square", "straight-edged", "curved and circular", "invisible"], correctIndex: 2, explanation: "Only a sphere always casts a circular shadow." },
            { prompt: "Which is evidence that the Earth is spherical?", options: ["The Sun rises in the east", "Circumnavigation returns you to the start", "Days are 24 hours long", "There are four seasons"], correctIndex: 1, explanation: "Travelling one way and returning shows a closed, curved surface." },
            { prompt: "The bulge at the equator is caused by the Earth's", options: ["atmosphere", "rotation", "orbit around the Sun", "magnetic field"], correctIndex: 1, explanation: "Spinning throws material outward at the equator." },
            { prompt: "The circumference of the Earth at the equator is about", options: ["12 714 km", "40 075 km", "1 000 km", "150 million km"], correctIndex: 1, explanation: "About 40 075 km around the equator." },
            { prompt: "Photographs of the Earth from space show it as", options: ["a flat disc", "a sphere", "a cube", "a ring"], correctIndex: 1, explanation: "Space images show a spherical Earth." },
            { prompt: "The polar diameter of the Earth is", options: ["longer than the equatorial diameter", "shorter than the equatorial diameter", "exactly the same", "zero"], correctIndex: 1, explanation: "The Earth is flattened at the poles, so the polar diameter is slightly shorter." },
            { prompt: "Why can you see further from the top of a hill than from the ground?", options: ["The air is clearer only", "The surface curves away, so height extends the horizon", "The Sun is closer", "The Earth is flat"], correctIndex: 1, explanation: "Greater height sees over the curve of the Earth." },
            { prompt: "The changing altitude of the pole star as you travel north or south shows that", options: ["the Earth is flat", "the surface is curved", "stars move", "the Earth is stationary"], correctIndex: 1, explanation: "Only on a curved surface does the star's angle change with latitude." },
            { prompt: "Magellan's expedition supported a spherical Earth by", options: ["measuring the Sun", "sailing continuously in one direction and returning", "photographing the Moon", "digging a tunnel"], correctIndex: 1, explanation: "Circumnavigation returns to the start on a sphere." },
            { prompt: "An oblate spheroid means a sphere that is", options: ["flattened at the poles", "flattened at the equator", "stretched into an egg shape lengthwise", "perfectly round"], correctIndex: 0, explanation: "It bulges at the equator and is flattened at the poles." },
            { prompt: "On a flat Earth, a departing ship would", options: ["have its hull disappear first", "shrink evenly and vanish all at once", "have its mast disappear first", "grow larger"], correctIndex: 1, explanation: "Without curvature it would simply shrink evenly; the hull-first effect needs a sphere." },
            { prompt: "The Earth's spherical shape causes the Sun's rays to strike different latitudes at", options: ["the same angle", "different angles", "night only", "no angle"], correctIndex: 1, explanation: "Curvature means rays hit the equator and poles at different angles, shaping climate." },
            { prompt: "Which of these is NOT evidence for a spherical Earth?", options: ["Curved shadow in a lunar eclipse", "Ships' hulls disappearing first", "The sky being blue", "Photographs from space"], correctIndex: 2, explanation: "A blue sky results from light scattering, not from the Earth's shape." },
            { prompt: "The difference between the equatorial and polar diameters is about", options: ["4 km", "42 km", "400 km", "4000 km"], correctIndex: 1, explanation: "12 756 − 12 714 ≈ 42 km, the effect of flattening." },
            { prompt: "The horizon appears ___ from a high vantage point.", options: ["closer", "wider", "square", "invisible"], correctIndex: 1, explanation: "Height lets you see further over the curve, widening the horizon." },
            { prompt: "The main cause of the Earth's equatorial bulge is", options: ["heat from the Sun", "its rotation on its axis", "the pull of the Moon only", "ocean currents"], correctIndex: 1, explanation: "Rotation flings material outward at the equator." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Describe the shape of the Earth precisely and give its approximate equatorial diameter and circumference.", answerKey: "The Earth is an oblate spheroid — a sphere flattened at the poles and bulging at the equator, the bulge caused by rotation. Equatorial diameter about 12 756 km; equatorial circumference about 40 075 km. Award 4 marks for the shape with the reason, 2 for the diameter, 2 for the circumference.", marks: 8 },
            { type: "SHORT_ANSWER", prompt: "Give four pieces of evidence that the Earth is spherical.", answerKey: "Any four: a ship's mast appears before its hull (and vice versa on departure); the Earth casts a circular shadow on the Moon during a lunar eclipse; photographs from space; circumnavigation returns to the start; the pole star's altitude changes with latitude; the horizon widens with height. Award 2 marks each with brief explanation.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "Which observation could NOT occur on a flat Earth?", options: ["The Sun rising", "A ship's hull disappearing before its mast", "Clouds forming", "Rain falling"], correctIndex: 1, answerKey: "The hull-before-mast effect requires a curved surface; the others happen regardless of shape. Option B.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Explain why the Earth bulges at the equator and is flattened at the poles.", answerKey: "The Earth rotates on its axis. Rotation throws material outward most strongly at the equator, where the spin speed is greatest, producing a bulge; correspondingly the poles, on the axis of rotation, are drawn in and flattened. The result is an oblate spheroid. Award up to 6 marks for a clear explanation linking rotation to the bulge and flattening.", marks: 6 },
            { type: "ESSAY", prompt: "'Everyday observations, not just space photographs, show that the Earth is a sphere.' Discuss this statement using at least four lines of evidence, explaining in each case why a flat Earth would look different.", answerKey: "Award marks for at least four lines of evidence, each explained with the flat-Earth contrast: ship's hull disappearing first versus even shrinking, 4 marks; curved lunar-eclipse shadow versus a straight or oval one, 4 marks; circumnavigation returning to the start versus reaching an edge, 3 marks; changing pole-star altitude with latitude versus a fixed angle, 3 marks; widening horizon with height, 2 marks. Award up to 4 further marks for engaging with the statement's claim that everyday evidence suffices, and for organisation. A learner who only lists 'proofs' without the flat-Earth contrast should not exceed 10.", marks: 18 },
          ],
        },
        {
          slug: "latitude-longitude-and-time",
          title: "Latitude, Longitude and Time",
          objective:
            "By the end of the unit, learners should be able to define latitude and longitude, use them to locate places, name the main lines of latitude, and calculate local time differences from longitude.",
          estimatedMinutes: 160,
          notes: `## Locating places on the globe

Any place on Earth can be fixed using two sets of imaginary lines: **latitude** and **longitude**.

## Latitude

**Lines of latitude (parallels)** run **east–west**, parallel to the equator, and measure distance **north or south** of the equator in degrees (0° to 90°).

- The **Equator** is 0°.
- The **Tropic of Cancer** is 23½° N; the **Tropic of Capricorn** is 23½° S.
- The **Arctic Circle** is 66½° N; the **Antarctic Circle** is 66½° S.
- The **North Pole** is 90° N; the **South Pole** is 90° S.

## Longitude

**Lines of longitude (meridians)** run **north–south** from pole to pole and measure distance **east or west** of the Prime Meridian (0° to 180°).

- The **Prime (Greenwich) Meridian** is 0°, passing through Greenwich, London.
- The **180° meridian** on the opposite side is near the International Date Line.

\`\`\`svg Latitude runs east-west (parallels); longitude runs north-south (meridians), meeting at the Equator and Prime Meridian.
<svg viewBox="0 0 200 200" role="img" aria-label="Globe grid showing lines of latitude and longitude">
  <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor"/>
  <line x1="15" y1="100" x2="185" y2="100" stroke="currentColor" stroke-width="1.5"/>
  <path d="M15 100 A 90 40 0 0 1 185 100" fill="none" stroke="currentColor" stroke-opacity="0.5"/>
  <path d="M15 100 A 90 40 0 0 0 185 100" fill="none" stroke="currentColor" stroke-opacity="0.5"/>
  <path d="M100 15 A 40 90 0 0 1 100 185" fill="none" stroke="currentColor" stroke-opacity="0.5"/>
  <path d="M100 15 A 40 90 0 0 0 100 185" fill="none" stroke="currentColor" stroke-opacity="0.5"/>
  <line x1="100" y1="15" x2="100" y2="185" stroke="currentColor" stroke-width="1.5"/>
  <text x="188" y="98" font-size="9" fill="currentColor">Equator 0°</text>
  <text x="104" y="13" font-size="9" fill="currentColor">Prime Meridian</text>
</svg>
\`\`\`

## Longitude and time

The Earth turns **360° in 24 hours**, so it turns **15° every hour** (360 ÷ 24 = 15).

This means every 15° of longitude equals a **1-hour** time difference, and every 1° equals **4 minutes**.

- Places **east** of a given meridian are **ahead** in time (the Sun rises there first).
- Places **west** are **behind** in time.

To find the time difference between two places:
1. Find the **difference in longitude** (add if on opposite sides of 0°, subtract if on the same side).
2. **Divide by 15** to get the difference in hours.
3. **Add** the difference if going **east**, **subtract** if going **west**.

## The International Date Line

Roughly along 180°, this is where the date changes. Crossing it westward you move the calendar **forward one day**; crossing eastward you move it **back one day**.`,
          workedExample: `**Question:** When it is 12:00 noon at Greenwich (0°), what is the local time at a town on longitude 45° W?

**Solution**

*Step 1 — the longitude difference.*
The town is 45° west of Greenwich (0°), so the difference in longitude is **45°**.

*Step 2 — convert to time.*
The Earth turns 15° in one hour, so divide the longitude difference by 15:
45 ÷ 15 = **3 hours**.

*Step 3 — decide add or subtract.*
The town is to the **west** of Greenwich. Places west are **behind** in time, so we **subtract**:
12:00 noon − 3 hours = **9:00 a.m.**

**Answer: 9:00 a.m.**

*A quick check on direction:* the Sun rises in the east and moves west, so the Sun reaches Greenwich before it reaches a town 45° further west. The western town's clock must therefore be earlier — 9:00 a.m. when Greenwich is at noon. The reasoning agrees with the calculation.

*The rule to carry away:* **longitude ÷ 15 = hours; east is ahead (add), west is behind (subtract).**`,
          teachingTip:
            "Latitude and longitude are confused constantly, so fix them with a physical image: latitude lines are the 'rungs of a ladder' running across, telling you how far up or down (north/south) you are; longitude lines run top to bottom from pole to pole. Say 'latitude = flat, like the equator' to lock the direction. For time, derive the 15°-per-hour rule with the class from 360 ÷ 24 rather than stating it, so they can rebuild it if they forget. Then drill the single sentence 'east is ahead, west is behind' until it is automatic, and always have learners sanity-check with the Sun: it rises in the east, so eastern places are ahead. A wall map with the grid marked, referred to constantly, does most of the teaching.",
          quiz: [
            { prompt: "Lines of latitude run", options: ["north–south", "east–west", "from pole to pole", "diagonally"], correctIndex: 1, explanation: "Parallels of latitude run east–west, parallel to the equator." },
            { prompt: "Lines of longitude run", options: ["east–west", "north–south from pole to pole", "around the equator", "in circles"], correctIndex: 1, explanation: "Meridians of longitude run north–south." },
            { prompt: "The Equator has a latitude of", options: ["0°", "23½° N", "66½° N", "90°"], correctIndex: 0, explanation: "The Equator is the 0° line of latitude." },
            { prompt: "The Prime Meridian has a longitude of", options: ["90° E", "180°", "0°", "45° W"], correctIndex: 2, explanation: "The Greenwich Prime Meridian is 0° longitude." },
            { prompt: "The Earth turns through how many degrees each hour?", options: ["10°", "15°", "24°", "45°"], correctIndex: 1, explanation: "360° ÷ 24 hours = 15° per hour." },
            { prompt: "The Tropic of Cancer lies at", options: ["0°", "23½° N", "23½° S", "66½° N"], correctIndex: 1, explanation: "The Tropic of Cancer is 23½° north of the equator." },
            { prompt: "Places east of a meridian are ___ in time.", options: ["behind", "ahead", "the same", "one day back"], correctIndex: 1, explanation: "The Sun rises in the east, so eastern places are ahead." },
            { prompt: "1° of longitude equals a time difference of", options: ["1 minute", "4 minutes", "15 minutes", "1 hour"], correctIndex: 1, explanation: "60 minutes ÷ 15° = 4 minutes per degree." },
            { prompt: "If it is 12:00 noon at 0°, the time at 30° E is", options: ["10:00 a.m.", "12:00 noon", "2:00 p.m.", "6:00 p.m."], correctIndex: 2, explanation: "30 ÷ 15 = 2 hours; east is ahead, so 12 + 2 = 2:00 p.m." },
            { prompt: "The North Pole has a latitude of", options: ["0°", "45° N", "66½° N", "90° N"], correctIndex: 3, explanation: "The North Pole is 90° north." },
            { prompt: "The International Date Line lies roughly along", options: ["0° longitude", "90° E", "180° longitude", "the equator"], correctIndex: 2, explanation: "It runs roughly along the 180° meridian." },
            { prompt: "Monrovia lies at about 6° N, 10° W. The 6° N is its", options: ["longitude", "latitude", "altitude", "time zone"], correctIndex: 1, explanation: "The north–south position from the equator is latitude." },
            { prompt: "If it is 12:00 noon at 0°, the time at 60° W is", options: ["8:00 a.m.", "4:00 p.m.", "10:00 a.m.", "6:00 a.m."], correctIndex: 0, explanation: "60 ÷ 15 = 4 hours; west is behind, so 12 − 4 = 8:00 a.m." },
            { prompt: "The maximum value of longitude is", options: ["90°", "180°", "360°", "23½°"], correctIndex: 1, explanation: "Longitude runs 0° to 180° east and west." },
            { prompt: "The maximum value of latitude is", options: ["90°", "180°", "360°", "66½°"], correctIndex: 0, explanation: "Latitude runs 0° at the equator to 90° at the poles." },
            { prompt: "Lines of latitude are also called", options: ["meridians", "parallels", "time zones", "tropics only"], correctIndex: 1, explanation: "They run parallel to the equator, hence parallels." },
            { prompt: "Which line passes through Greenwich, London?", options: ["The Equator", "The Prime Meridian", "The Tropic of Cancer", "The Date Line"], correctIndex: 1, explanation: "The Prime Meridian (0° longitude) runs through Greenwich." },
            { prompt: "Crossing the International Date Line travelling west, you move the calendar", options: ["forward one day", "back one day", "forward one hour", "back one hour"], correctIndex: 0, explanation: "Westward across the line the date advances one day." },
            { prompt: "The angular distance of a place north or south of the equator is its", options: ["longitude", "latitude", "altitude", "meridian"], correctIndex: 1, explanation: "Latitude measures distance north or south of the equator." },
            { prompt: "Two towns 15° of longitude apart differ in time by", options: ["4 minutes", "30 minutes", "1 hour", "2 hours"], correctIndex: 2, explanation: "15° corresponds to one hour of time." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Define latitude and longitude, and state the latitude of the Equator, the Tropic of Cancer and the North Pole.", answerKey: "Latitude is the angular distance of a place north or south of the equator, measured along meridians (parallels run east–west). Longitude is the angular distance east or west of the Prime Meridian (meridians run north–south). Equator 0°; Tropic of Cancer 23½° N; North Pole 90° N. Award 3 marks per definition and 1 mark for each correct latitude.", marks: 9 },
            { type: "SHORT_ANSWER", prompt: "Explain why the Earth turns through 15° of longitude each hour, and state the time difference caused by 1° of longitude.", answerKey: "The Earth completes one rotation of 360° in 24 hours, so it turns 360 ÷ 24 = 15° per hour. Therefore 1° corresponds to 60 ÷ 15 = 4 minutes of time. Award 4 marks for the 15°-per-hour derivation and 2 for the 4-minutes-per-degree result.", marks: 6 },
            { type: "MULTIPLE_CHOICE", prompt: "When it is 12:00 noon at Greenwich (0°), what is the local time at 75° E?", options: ["7:00 a.m.", "5:00 p.m.", "9:00 a.m.", "3:00 p.m."], correctIndex: 1, answerKey: "75 ÷ 15 = 5 hours; east is ahead, so 12 noon + 5 = 5:00 p.m. Option B.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "A town lies at 90° W. When it is 6:00 p.m. at Greenwich, find the local time at the town, showing your working.", answerKey: "Longitude difference = 90°. 90 ÷ 15 = 6 hours. The town is west of Greenwich, so subtract: 6:00 p.m. − 6 hours = 12:00 noon. Award 2 marks for the 6-hour difference, 2 for choosing to subtract (west is behind), 2 for the correct time of 12:00 noon.", marks: 6 },
            { type: "ESSAY", prompt: "Explain how latitude and longitude are used to locate places and to calculate time differences, illustrating with a worked example of your own.", answerKey: "Award marks for: correct account of latitude (north–south of the equator, parallels, 0°–90°) and longitude (east–west of the Prime Meridian, meridians, 0°–180°) and how the two together fix any point, 6 marks; explanation that the Earth turns 15° per hour so longitude difference ÷ 15 = time difference, with east ahead and west behind, 6 marks; a correct original worked example calculating a local time from a longitude, 5 marks; clarity and organisation, 3 marks. A learner who confuses latitude with longitude, or east with west in the time rule, should lose the relevant marks.", marks: 20 },
          ],
        },
        {
          slug: "earths-movements",
          title: "The Earth's Movements: Rotation and Revolution",
          objective:
            "By the end of the unit, learners should be able to distinguish the Earth's rotation from its revolution and explain their effects, including day and night, time differences, the seasons and leap years.",
          estimatedMinutes: 160,
          notes: `## Two movements

The Earth has two motions at once:

- **Rotation** — spinning on its own **axis**.
- **Revolution** — travelling around the **Sun**.

## Rotation

The Earth spins on its axis from **west to east**, completing one turn in **24 hours** (more precisely 23 hours 56 minutes).

**Effects of rotation:**

1. **Day and night** — the side facing the Sun has day; the side facing away has night.
2. The **apparent movement of the Sun** — rising in the east and setting in the west (because we spin eastward).
3. **Differences in time** between places on different meridians (15° = 1 hour).
4. The **deflection of winds and ocean currents** (the Coriolis effect) — to the right in the northern hemisphere, to the left in the southern.
5. The daily **rise and fall of tides**.

## Revolution

The Earth travels around the Sun in an **elliptical orbit**, taking **365¼ days** (one year).

The quarter-days accumulate: every fourth year an extra day (29 February) is added, giving a **leap year** of 366 days.

The Earth's axis is **tilted at 23½°** from the vertical and keeps pointing in the **same direction** throughout the orbit.

**Effects of revolution:**

1. The **seasons**.
2. **Varying lengths of day and night** through the year.
3. The **apparent movement of the overhead Sun** between the Tropic of Cancer and the Tropic of Capricorn.

## The cause of the seasons

Seasons are caused by the **tilt of the axis combined with revolution** — **not** by the Earth's distance from the Sun. (In fact the Earth is closest to the Sun in early January, during northern winter.)

Because the axis keeps pointing the same way, different hemispheres lean towards the Sun at different points in the orbit:
- When a hemisphere **leans towards** the Sun, its rays strike more directly and days are longer — **summer**.
- When it **leans away**, rays strike at a low angle and days are shorter — **winter**.

## Why Liberia has wet and dry seasons, not four temperature seasons

Liberia lies close to the equator (about 4°–8° N). The Sun is nearly overhead all year, so temperature changes little. Instead of hot and cold seasons, Liberia has a **wet season (May–October)** and a **dry season (November–April)**, governed by the movement of the rain-bringing wind belt (the Inter-Tropical Convergence Zone) rather than by the tilt-driven temperature seasons of higher latitudes.`,
          workedExample: `**Question:** A learner says the Earth has seasons because it moves closer to and further from the Sun during the year. Explain why this is wrong, give the correct cause, and explain why Liberia does not have four temperature seasons.

**Solution**

*Step 1 — why the distance explanation is wrong.*
If seasons were caused by distance from the Sun, the whole Earth would be hot at the same time (when close) and cold at the same time (when far). But when it is summer in the northern hemisphere it is winter in the southern — the two hemispheres have **opposite** seasons at the same moment. Distance cannot explain that. In fact the Earth is **closest** to the Sun in early January, during northern **winter**, which shows distance is not the cause.

*Step 2 — the correct cause.*
Seasons are caused by the **tilt of the Earth's axis (23½°) combined with its revolution** around the Sun. Because the axis keeps pointing the same way all year, each hemisphere leans **towards** the Sun for part of the orbit (its summer — direct rays, long days) and **away** for another part (its winter — slanting rays, short days). The controlling factor is the **angle at which sunlight strikes** and the **length of daylight**, not the distance travelled.

*Step 3 — why Liberia has no four temperature seasons.*
Liberia lies close to the equator (about 4°–8° N). Near the equator the Sun is high in the sky all year, so the angle of sunlight and the length of day change very little. Temperature therefore stays roughly constant, and there is no basis for hot and cold seasons. Instead Liberia has a **wet season (May–October)** and a **dry season (November–April)**, set by the seasonal movement of the rain-bearing wind belt rather than by temperature.

**Answer:** distance cannot cause seasons because the hemispheres are opposite and the Earth is nearest the Sun in northern winter; the true cause is the axial tilt with revolution; and Liberia, near the equator, has wet and dry seasons instead of temperature seasons because the Sun stays nearly overhead all year.`,
          teachingTip:
            "The 'seasons are caused by distance from the Sun' misconception is stubborn and must be confronted directly. Ask the class when they think the Earth is closest to the Sun, then tell them it is early January — northern midwinter — and let the contradiction do the work. Follow with a demonstration: a lamp as the Sun and a tilted globe carried around it, the axis kept pointing at the same corner of the room throughout. Learners must see that the tilt does not swivel; that constancy is the whole mechanism. Then bring it home by asking why they themselves do not experience four seasons, turning an abstract lesson into an explanation of their own weather — the wet and dry seasons they live by.",
          quiz: [
            { prompt: "The Earth rotates on its axis from", options: ["east to west", "west to east", "north to south", "south to north"], correctIndex: 1, explanation: "West-to-east rotation makes the Sun appear to rise in the east." },
            { prompt: "One rotation of the Earth takes about", options: ["1 hour", "24 hours", "1 month", "1 year"], correctIndex: 1, explanation: "The Earth spins once on its axis in about 24 hours." },
            { prompt: "One revolution of the Earth around the Sun takes", options: ["24 hours", "30 days", "365¼ days", "12 hours"], correctIndex: 2, explanation: "A year is one revolution, about 365¼ days." },
            { prompt: "Day and night are caused by the Earth's", options: ["revolution", "rotation", "tilt", "distance from the Sun"], correctIndex: 1, explanation: "Rotation turns each side towards and away from the Sun." },
            { prompt: "The seasons are caused by", options: ["the Earth's distance from the Sun", "the tilt of the axis combined with revolution", "rotation only", "the Moon"], correctIndex: 1, explanation: "The 23½° tilt with revolution produces the seasons." },
            { prompt: "The Earth's axis is tilted at", options: ["21½°", "23½°", "45°", "66½°"], correctIndex: 1, explanation: "The tilt of 23½° from the vertical causes the seasons." },
            { prompt: "A leap year has how many days?", options: ["364", "365", "366", "367"], correctIndex: 2, explanation: "An extra day is added every fourth year to make 366." },
            { prompt: "Which is an effect of rotation?", options: ["The seasons", "Day and night", "Leap years", "The elliptical orbit"], correctIndex: 1, explanation: "Rotation produces day and night and time differences." },
            { prompt: "The Earth is closest to the Sun in", options: ["early January", "June", "September", "December only in the south"], correctIndex: 0, explanation: "This is during northern winter, showing distance does not cause seasons." },
            { prompt: "When a hemisphere leans towards the Sun it experiences", options: ["winter", "summer", "night", "an eclipse"], correctIndex: 1, explanation: "Direct rays and long days give summer." },
            { prompt: "The apparent movement of the Sun from east to west is due to the Earth's", options: ["revolution", "rotation", "tilt", "gravity"], correctIndex: 1, explanation: "As we spin eastward, the Sun appears to move westward." },
            { prompt: "The overhead Sun appears to move between the", options: ["poles", "Tropics of Cancer and Capricorn", "Arctic and Antarctic Circles", "0° and 90° E"], correctIndex: 1, explanation: "During revolution the overhead Sun shifts between 23½° N and 23½° S." },
            { prompt: "Liberia experiences", options: ["four temperature seasons", "wet and dry seasons", "no seasons at all", "a six-month winter"], correctIndex: 1, explanation: "Near the equator, temperature changes little; rainfall defines the seasons." },
            { prompt: "The deflection of winds and currents (Coriolis effect) is caused by the Earth's", options: ["revolution", "rotation", "tilt", "shape"], correctIndex: 1, explanation: "Rotation deflects moving air and water." },
            { prompt: "Why is the distance-from-the-Sun explanation of seasons wrong?", options: ["The Earth never moves", "The hemispheres have opposite seasons at the same time", "The Sun is always the same distance", "Seasons do not exist"], correctIndex: 1, explanation: "Opposite simultaneous seasons cannot result from a single distance." },
            { prompt: "During revolution, the Earth's axis", options: ["swivels to follow the Sun", "keeps pointing in the same direction", "becomes vertical", "disappears"], correctIndex: 1, explanation: "The constant direction of the tilt is what produces the seasons." },
            { prompt: "Which is an effect of revolution?", options: ["Day and night", "The seasons", "Tides", "Time zones"], correctIndex: 1, explanation: "Revolution with the tilt causes the seasons." },
            { prompt: "Liberia's wet season runs roughly from", options: ["November to April", "May to October", "January to March", "all year"], correctIndex: 1, explanation: "The wet season is about May to October; the dry season November to April." },
            { prompt: "The extra quarter-day each year is dealt with by", options: ["ignoring it", "adding a leap day every fourth year", "removing a day each year", "adding an hour daily"], correctIndex: 1, explanation: "Four quarter-days make one extra day every fourth year." },
            { prompt: "Near the equator the Sun is", options: ["never visible", "high in the sky all year", "only visible in winter", "always setting"], correctIndex: 1, explanation: "This is why equatorial regions have little temperature variation." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Distinguish between the Earth's rotation and its revolution, and give two effects of each.", answerKey: "Rotation is the spinning of the Earth on its axis, once in about 24 hours; effects include day and night, the apparent east–west movement of the Sun, time differences between meridians, and the deflection of winds and currents. Revolution is the movement of the Earth around the Sun, taking about 365¼ days; effects include the seasons, varying day length, the apparent movement of the overhead Sun between the tropics, and leap years. Award 2 marks for each definition and 1 for each of two effects per movement.", marks: 8 },
            { type: "SHORT_ANSWER", prompt: "Explain why a leap year occurs and how many days it has.", answerKey: "The Earth's revolution takes about 365¼ days, but the calendar year has 365 whole days. The quarter-days accumulate, so every fourth year an extra day (29 February) is added, giving a leap year of 366 days. Award 4 marks for the quarter-day explanation and 2 for stating 366 days.", marks: 6 },
            { type: "MULTIPLE_CHOICE", prompt: "The main reason the northern and southern hemispheres have opposite seasons is that", options: ["they are different distances from the Sun", "the axis is tilted and keeps a constant direction as the Earth revolves", "the Earth stops rotating in winter", "the Sun moves north and south"], correctIndex: 1, answerKey: "As the tilted axis keeps its direction through the orbit, one hemisphere leans towards the Sun (summer) while the other leans away (winter). Option B.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Explain why Liberia experiences wet and dry seasons rather than the four temperature seasons of higher latitudes.", answerKey: "Liberia lies close to the equator (about 4°–8° N), where the Sun is high in the sky throughout the year, so the angle of sunlight and the length of day change very little and temperature stays roughly constant. There is therefore no basis for hot and cold seasons. Instead the seasons are defined by rainfall — a wet season (about May–October) and a dry season (about November–April) — controlled by the seasonal movement of the rain-bearing wind belt. Award up to 8 marks for a clear explanation covering near-constant insolation and the rainfall-based seasons.", marks: 8 },
            { type: "ESSAY", prompt: "Explain the causes and effects of the Earth's two movements, and account for the fact that seasons are caused by the tilt of the axis rather than by the Earth's distance from the Sun.", answerKey: "Award marks for: rotation described as spinning west to east once in 24 hours, with effects — day and night, apparent movement of the Sun, time differences, Coriolis deflection, tides, 7 marks; revolution described as the elliptical orbit taking 365¼ days, with effects — seasons, varying day length, migration of the overhead Sun, leap years, 7 marks; explanation that seasons result from the 23½° tilt keeping a constant direction while the Earth revolves, so hemispheres lean towards or away from the Sun, with the angle of sunlight and day length controlling temperature, 7 marks; explicit refutation of the distance explanation, noting opposite simultaneous seasons and the Earth being nearest the Sun in northern winter, 5 marks; organisation and clarity, 4 marks. A learner who attributes seasons to distance should not exceed 12.", marks: 30 },
          ],
        },
      ],
    },
  ],
};
