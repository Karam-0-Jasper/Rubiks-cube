import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 11,
// Semester Two, Period VI: Light. Topics follow the syllabus CONTENTS item by
// item: nature and sources of light; properties of light; propagation of light
// (shadows/eclipses and the pin-hole camera); reflection of light by plane and
// spherical mirrors; and the electromagnetic spectrum. Sourced from OpenStax
// College Physics 2e (read via WebFetch).
export const physicsG11P6: PeriodContent = {
  grade: 11,
  number: 6,
  title: "Light",
  summary:
    "Period VI of the MoE Grade 11 Physics syllabus. Learners describe the nature and sources of light, its properties and rectilinear propagation, explain shadows, eclipses and the pin-hole camera, apply the law of reflection and the mirror equation to plane and spherical mirrors, and place visible light within the electromagnetic spectrum using c = fλ.",
  topics: [
    // source: OpenStax — College Physics 2e, 25.1 The Ray Aspect of Light (https://openstax.org/books/college-physics-2e/pages/25-1-the-ray-aspect-of-light)
    {
      slug: "nature-and-sources-of-light",
      title: "Nature and Sources of Light",
      objective:
        "By the end of the topic, learners should be able to describe the nature of light as electromagnetic radiation, distinguish luminous from non-luminous objects, and identify natural and artificial sources of light. (MoE Grade 11 Period VI, CONTENTS 1 'Nature and Sources of light'.)",
      estimatedMinutes: 90,
      notes: `## The nature of light

- **Light** — a form of energy that the eye can detect; it is **electromagnetic radiation** (visible light is one part of the electromagnetic spectrum).
- Light is a **transverse** wave and needs **no medium** — it travels through a vacuum.
- **Speed of light in a vacuum: c = 3 × 10⁸ m/s** — the fastest speed in nature.
- Light travels from a source in **straight lines** called rays (the ray model).

## Luminous and non-luminous objects

- **Luminous object** — one that produces its own light (the Sun, stars, a lamp, a candle, fire).
- **Non-luminous (illuminated) object** — one that does not make light but is seen because it **reflects** light from a source (the Moon, a book, a wall, most objects around us).
- We see non-luminous objects only when light from a luminous source reflects off them into our eyes.

## Sources of light

- **Natural sources** — the Sun, stars, lightning, some living things (fireflies — bioluminescence).
- **Artificial sources** — electric lamps, candles, torches, fluorescent tubes, LEDs.

## How light lets us see

- Light leaves a source, strikes an object, and reflects into the eye.
- The eye focuses the light and the brain interprets it as an image.

## Common errors

- **Calling the Moon a luminous object** — it only reflects sunlight (non-luminous).
- **Thinking light needs a medium** — it travels through the vacuum of space.
- **Confusing light with heat** — light is the visible part of the EM spectrum; infrared is felt as heat.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 25.1).** The Sun is about 1.5 × 10¹¹ m from the Earth. Using the speed of light c = 3.0 × 10⁸ m/s, how long does sunlight take to reach the Earth?

**Step 1 — Relationship.** Light travels in a straight line at constant speed, so time = distance / speed: t = d / c.

**Step 2 — Substitute.** t = (1.5 × 10¹¹ m) / (3.0 × 10⁸ m/s).

**Step 3 — Evaluate.** t = 0.5 × 10³ = 500 s.

**Step 4 — Convert.** 500 s ÷ 60 ≈ 8.3 minutes.

**Answer.** Sunlight takes about 500 s, or roughly 8.3 minutes, to reach the Earth — showing that even at 3 × 10⁸ m/s light takes measurable time to cross space.`,
      quiz: [
        { prompt: "Light is a form of:", options: ["matter", "energy", "mass", "force"], correctIndex: 1, explanation: "Light is a form of energy (electromagnetic radiation)." },
        { prompt: "The speed of light in a vacuum is about:", options: ["340 m/s", "3 × 10⁸ m/s", "1500 m/s", "9.8 m/s"], correctIndex: 1, explanation: "c = 3 × 10⁸ m/s." },
        { prompt: "Light travels in:", options: ["curves", "straight lines (rays)", "circles", "random paths"], correctIndex: 1, explanation: "Light travels in straight lines in a uniform medium." },
        { prompt: "A luminous object is one that:", options: ["reflects light", "produces its own light", "absorbs all light", "blocks light"], correctIndex: 1, explanation: "Luminous objects make their own light." },
        { prompt: "Which is a luminous object?", options: ["the Moon", "the Sun", "a book", "a mirror"], correctIndex: 1, explanation: "The Sun produces its own light." },
        { prompt: "The Moon is seen because it:", options: ["produces light", "reflects sunlight", "absorbs starlight", "glows with heat"], correctIndex: 1, explanation: "The Moon is non-luminous; it reflects the Sun's light." },
        { prompt: "A non-luminous object is visible because it:", options: ["makes its own light", "reflects light into our eyes", "is transparent", "is hot"], correctIndex: 1, explanation: "It reflects light from a source into the eye." },
        { prompt: "Which is a natural source of light?", options: ["a torch", "a candle", "the stars", "an LED"], correctIndex: 2, explanation: "Stars are natural light sources." },
        { prompt: "Light can travel through:", options: ["only air", "only water", "a vacuum", "only solids"], correctIndex: 2, explanation: "Light needs no medium; it crosses a vacuum." },
        { prompt: "Light is which type of wave?", options: ["longitudinal", "transverse (electromagnetic)", "mechanical", "sound"], correctIndex: 1, explanation: "Light is a transverse electromagnetic wave." },
        { prompt: "We see objects around us when light from a source:", options: ["is absorbed forever", "reflects off them into our eyes", "turns into sound", "stops moving"], correctIndex: 1, explanation: "Reflected light entering the eye lets us see objects." },
        { prompt: "Fireflies producing light is an example of:", options: ["reflection", "bioluminescence", "refraction", "diffraction"], correctIndex: 1, explanation: "Living things making light is bioluminescence." },
        { prompt: "Which is an artificial source of light?", options: ["the Sun", "lightning", "a fluorescent tube", "a firefly"], correctIndex: 2, explanation: "A fluorescent tube is a man-made source." },
        { prompt: "Light reaching Earth from the Sun shows that light:", options: ["needs air to travel", "can cross empty space", "moves slowly", "is a solid"], correctIndex: 1, explanation: "It crosses the vacuum of space." },
        { prompt: "The straight-line model of light travel uses:", options: ["waves only", "rays", "particles of matter", "sound"], correctIndex: 1, explanation: "The ray model represents light as straight lines." },
        { prompt: "Which pair is non-luminous?", options: ["Sun and star", "Moon and book", "candle and lamp", "fire and torch"], correctIndex: 1, explanation: "The Moon and a book only reflect light." },
        { prompt: "Compared with sound, light travels:", options: ["much slower", "much faster", "at the same speed", "backwards"], correctIndex: 1, explanation: "Light (3×10⁸ m/s) is far faster than sound (~340 m/s)." },
        { prompt: "The visible light we see is part of the:", options: ["sound spectrum", "electromagnetic spectrum", "periodic table", "friction scale"], correctIndex: 1, explanation: "Visible light is one region of the EM spectrum." },
        { prompt: "Light from a lamp 3×10⁸ m away takes about:", options: ["1 s", "10 s", "0.1 s", "100 s"], correctIndex: 0, explanation: "t = d/c = 3×10⁸/3×10⁸ = 1 s." },
        { prompt: "Which statement is TRUE?", options: ["Light is matter", "Light needs a medium", "Light travels in straight lines in a uniform medium", "Light is slower than sound"], correctIndex: 2, explanation: "In a uniform medium light travels in straight lines." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Which of the following is a luminous object?", options: ["the Moon", "a candle flame", "a mirror", "a white wall"], correctIndex: 1, answerKey: "A candle flame produces its own light.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between luminous and non-luminous objects, giving one example of each.", answerKey: "A luminous object produces its own light (e.g. the Sun, a lamp, a candle). A non-luminous object does not make light but is seen because it reflects light from a source (e.g. the Moon, a book, a wall).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State the speed of light in a vacuum and explain what it tells us about how light travels compared with sound.", answerKey: "The speed of light in a vacuum is about 3 × 10⁸ m/s. Light travels far faster than sound (about 340 m/s in air) and, unlike sound, needs no medium, so it can cross the vacuum of space (e.g. sunlight reaching Earth).", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Light differs from sound because light:", options: ["is longitudinal", "needs a medium", "can travel through a vacuum", "is much slower"], correctIndex: 2, answerKey: "Light is electromagnetic and travels through a vacuum; sound cannot.", marks: 2 },
        { type: "ESSAY", prompt: "Describe the nature of light and explain how we are able to see both a luminous object such as a lamp and a non-luminous object such as a book.", answerKey: "Light is a form of energy — a transverse electromagnetic wave that travels in straight lines at 3 × 10⁸ m/s in a vacuum and needs no medium. We see a luminous object (a lamp) directly because it emits its own light, some of which travels straight into our eyes. We see a non-luminous object (a book) because light from a source (the Sun or a lamp) strikes it and is reflected off its surface; the reflected rays enter our eyes, and the brain interprets them as the object. Without a light source a non-luminous object cannot be seen. Reward the nature-of-light description and the correct seeing mechanism for both cases.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 25.2 The Law of Reflection (https://openstax.org/books/college-physics-2e/pages/25-2-the-law-of-reflection)
    {
      slug: "properties-of-light",
      title: "Properties of Light",
      objective:
        "By the end of the topic, learners should be able to state the main properties of light — rectilinear propagation, reflection, refraction and dispersion — and apply the law of reflection. (MoE Grade 11 Period VI, CONTENTS 2 'Properties of light'.)",
      estimatedMinutes: 100,
      notes: `## Properties of light

- **Rectilinear propagation** — light travels in **straight lines** in a uniform medium (which is why shadows form).
- **Reflection** — light bounces off a surface (especially smooth, shiny ones like mirrors).
- **Refraction** — light bends when it passes from one medium to another because its speed changes.
- **Dispersion** — white light is split into its colours (a spectrum) by a prism, because different colours refract by different amounts.
- **Speed** — light travels at 3 × 10⁸ m/s in a vacuum and slightly slower in glass or water.
- Light can travel through a **vacuum** and carries energy.

## The law of reflection

- The **normal** is the line drawn perpendicular to the surface at the point where the ray strikes.
- **Angle of incidence (i)** — between the incident ray and the normal.
- **Angle of reflection (r)** — between the reflected ray and the normal.
- **Law of reflection: the angle of incidence equals the angle of reflection (i = r).**
- The incident ray, the reflected ray and the normal all lie in the **same plane**.

## Specular and diffuse reflection

- **Specular (regular) reflection** — from a smooth surface (mirror); parallel rays stay parallel, forming a clear image.
- **Diffuse reflection** — from a rough surface (paper, wall); rays scatter in many directions, so no image forms but the object is visible from many angles.

\`\`\`svg The law of reflection: angle of incidence equals angle of reflection
<svg viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An incident ray and reflected ray making equal angles with the normal to a mirror">
  <line x1="20" y1="110" x2="240" y2="110" stroke="#334155" stroke-width="2"/>
  <line x1="130" y1="110" x2="130" y2="20" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="134" y="30" font-size="10" fill="#94a3b8">normal</text>
  <line x1="40" y1="30" x2="130" y2="110" stroke="#2563eb" stroke-width="2"/>
  <polygon points="130,110 116,104 122,96" fill="#2563eb"/>
  <text x="55" y="45" font-size="10" fill="#2563eb">incident</text>
  <line x1="130" y1="110" x2="220" y2="30" stroke="#dc2626" stroke-width="2"/>
  <polygon points="220,30 206,36 212,44" fill="#dc2626"/>
  <text x="180" y="45" font-size="10" fill="#dc2626">reflected</text>
  <text x="104" y="100" font-size="10" fill="#334155">i</text>
  <text x="146" y="100" font-size="10" fill="#334155">r</text>
</svg>
\`\`\`

## Common errors

- **Measuring angles from the surface** — angles of incidence and reflection are measured from the normal.
- **Thinking light always bends** — it only refracts when the speed changes between media.
- **Confusing dispersion with reflection** — dispersion splits colours by refraction.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 25.2).** A ray of light strikes a plane mirror so that it makes an angle of 30° with the mirror surface. Find (a) the angle of incidence, (b) the angle of reflection, and (c) the angle between the incident and reflected rays.

**Step 1 — Angle of incidence.** Angles are measured from the normal, not the surface. If the ray is 30° from the surface, it is 90° − 30° = 60° from the normal. So the angle of incidence i = 60°.

**Step 2 — Angle of reflection.** By the law of reflection, r = i = 60°.

**Step 3 — Angle between the rays.** The incident and reflected rays are each 60° from the normal, on opposite sides, so the angle between them is 60° + 60° = 120°.

**Answer.** (a) 60°, (b) 60°, (c) 120°. The key step is measuring from the normal, not the surface.`,
      quiz: [
        { prompt: "Light travelling in straight lines is called:", options: ["reflection", "rectilinear propagation", "dispersion", "diffraction"], correctIndex: 1, explanation: "Rectilinear propagation means travel in straight lines." },
        { prompt: "Light bouncing off a surface is:", options: ["refraction", "reflection", "dispersion", "absorption"], correctIndex: 1, explanation: "Reflection is light bouncing off a surface." },
        { prompt: "Light bending as it enters a new medium is:", options: ["reflection", "refraction", "dispersion", "diffraction"], correctIndex: 1, explanation: "Refraction is bending due to a change in speed." },
        { prompt: "Splitting white light into colours is:", options: ["reflection", "dispersion", "absorption", "polarization"], correctIndex: 1, explanation: "Dispersion separates white light into a spectrum." },
        { prompt: "Angles of incidence and reflection are measured from the:", options: ["surface", "normal", "reflected ray", "mirror edge"], correctIndex: 1, explanation: "They are measured from the normal." },
        { prompt: "The law of reflection states:", options: ["i > r", "i < r", "i = r", "i + r = 90°"], correctIndex: 2, explanation: "Angle of incidence equals angle of reflection." },
        { prompt: "The normal is a line drawn ___ to the surface:", options: ["parallel", "perpendicular", "at 45°", "along"], correctIndex: 1, explanation: "The normal is perpendicular to the surface." },
        { prompt: "An incident ray hits a mirror at 20° to the normal. The reflected ray is at:", options: ["20°", "70°", "40°", "0°"], correctIndex: 0, explanation: "r = i = 20°." },
        { prompt: "Reflection from a smooth mirror is:", options: ["diffuse", "specular", "random", "absorbed"], correctIndex: 1, explanation: "Smooth surfaces give specular (regular) reflection." },
        { prompt: "Reflection from a rough wall is:", options: ["specular", "diffuse", "no reflection", "refraction"], correctIndex: 1, explanation: "Rough surfaces scatter light — diffuse reflection." },
        { prompt: "Light travels fastest in:", options: ["glass", "water", "a vacuum", "diamond"], correctIndex: 2, explanation: "Light is fastest in a vacuum (3×10⁸ m/s)." },
        { prompt: "A rainbow is mainly caused by:", options: ["reflection only", "dispersion of light in water drops", "diffuse reflection", "shadows"], correctIndex: 1, explanation: "Water droplets disperse sunlight into colours." },
        { prompt: "The incident ray, reflected ray and normal all lie in:", options: ["different planes", "the same plane", "the surface", "the mirror"], correctIndex: 1, explanation: "They are coplanar." },
        { prompt: "A ray strikes a mirror along the normal (0° incidence). It reflects:", options: ["at 90°", "straight back along the normal", "at 45°", "not at all"], correctIndex: 1, explanation: "With i = 0, r = 0, so it returns along the normal." },
        { prompt: "We can see a page of a book from many angles because of:", options: ["specular reflection", "diffuse reflection", "refraction", "dispersion"], correctIndex: 1, explanation: "Diffuse reflection scatters light in all directions." },
        { prompt: "A ray at 25° to a mirror surface has an angle of incidence of:", options: ["25°", "65°", "90°", "50°"], correctIndex: 1, explanation: "From the normal: 90° − 25° = 65°." },
        { prompt: "Which property allows shadows to form?", options: ["refraction", "rectilinear propagation", "dispersion", "reflection"], correctIndex: 1, explanation: "Straight-line travel produces shadows." },
        { prompt: "When light passes from air into glass it usually:", options: ["speeds up and bends", "slows down and bends (refracts)", "stops", "disappears"], correctIndex: 1, explanation: "It slows and refracts entering the denser glass." },
        { prompt: "The angle between the incident and reflected rays when i = 45° is:", options: ["45°", "90°", "135°", "180°"], correctIndex: 1, explanation: "45° + 45° = 90° between the two rays." },
        { prompt: "A prism separates white light because different colours:", options: ["reflect equally", "refract by different amounts", "travel at the same speed in glass", "are absorbed"], correctIndex: 1, explanation: "Colours refract differently, causing dispersion." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A light ray strikes a plane mirror at an angle of incidence of 35°. The angle of reflection is:", options: ["35°", "55°", "70°", "0°"], correctIndex: 0, answerKey: "By the law of reflection, angle of reflection = angle of incidence = 35°.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the law of reflection and explain how the angles are measured.", answerKey: "The law of reflection states that the angle of incidence equals the angle of reflection (i = r), and the incident ray, reflected ray and normal all lie in the same plane. Both angles are measured from the normal — the line perpendicular to the surface at the point where the ray strikes.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between specular and diffuse reflection.", answerKey: "Specular (regular) reflection occurs at a smooth surface (e.g. a mirror): parallel incident rays remain parallel after reflection, forming a clear image. Diffuse reflection occurs at a rough surface (e.g. paper): rays scatter in many directions, so no image forms but the object is visible from many angles.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "White light splitting into colours through a prism is called:", options: ["reflection", "diffraction", "dispersion", "diffuse reflection"], correctIndex: 2, answerKey: "Dispersion is the separation of white light into its colours by refraction.", marks: 2 },
        { type: "ESSAY", prompt: "Describe four properties of light (rectilinear propagation, reflection, refraction and dispersion) and give one everyday example of each.", answerKey: "Rectilinear propagation: light travels in straight lines in a uniform medium — shown by sharp shadows or a beam of sunlight through a gap. Reflection: light bounces off surfaces — seeing yourself in a mirror or still water. Refraction: light bends when its speed changes between media — a straw looks bent in a glass of water, or a pool looks shallower than it is. Dispersion: white light is split into its colours by different amounts of refraction — a rainbow, or the spectrum from a prism. Reward correct descriptions and one valid example for each property.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 25.1 The Ray Aspect of Light (rectilinear propagation, shadows) (https://openstax.org/books/college-physics-2e/pages/25-1-the-ray-aspect-of-light)
    {
      slug: "propagation-of-light",
      title: "Propagation of Light: Shadows, Eclipses and the Pin-hole Camera",
      objective:
        "By the end of the topic, learners should be able to explain rectilinear propagation, describe how shadows and eclipses form, and explain image formation in a pin-hole camera. (MoE Grade 11 Period VI, CONTENTS 3 'Propagation of light: (a) Shadow and eclipse (b) Pin-hole camera'.)",
      estimatedMinutes: 100,
      notes: `## Rectilinear propagation

- **Rectilinear propagation** — light travels in **straight lines** in a uniform medium.
- Evidence: sharp shadows, beams of light through a gap, and images in a pin-hole camera.

## Shadows

- A **shadow** forms when an opaque object blocks light travelling in straight lines.
- **Umbra** — the full (dark) shadow, where all the light is blocked.
- **Penumbra** — the partial shadow, where only some of the light is blocked (occurs with an extended source).
- A small (point) source gives a sharp shadow (umbra only); a large source gives an umbra with a surrounding penumbra.

## Eclipses

- An **eclipse** happens when one body's shadow falls on another because light travels in straight lines.
- **Solar eclipse** — the Moon passes between the Sun and Earth, casting its shadow on the Earth (the Sun is blocked).
- **Lunar eclipse** — the Earth passes between the Sun and Moon, so the Earth's shadow falls on the Moon.

## The pin-hole camera

- A light-proof box with a tiny hole in one end and a screen (translucent) at the other.
- Because light travels in straight lines, rays from the top of the object pass through the hole to the bottom of the screen, and vice versa.
- The image is therefore **inverted** (upside-down), **real**, and reversed left-to-right.
- **Magnification = image height / object height = image distance / object distance.**
- A smaller hole gives a sharper but dimmer image.

\`\`\`svg A pin-hole camera forms an inverted image
<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rays from an upright object crossing at a pinhole to form an inverted image">
  <line x1="40" y1="30" x2="40" y2="95" stroke="#16a34a" stroke-width="3"/>
  <polygon points="40,30 36,42 44,42" fill="#16a34a"/>
  <text x="20" y="110" font-size="10" fill="#16a34a">object</text>
  <circle cx="150" cy="62" r="3" fill="#334155"/>
  <text x="140" y="52" font-size="9" fill="#334155">pinhole</text>
  <line x1="40" y1="30" x2="150" y2="62" stroke="#2563eb" stroke-width="1"/>
  <line x1="150" y1="62" x2="250" y2="90" stroke="#2563eb" stroke-width="1"/>
  <line x1="40" y1="95" x2="150" y2="62" stroke="#dc2626" stroke-width="1"/>
  <line x1="150" y1="62" x2="250" y2="35" stroke="#dc2626" stroke-width="1"/>
  <line x1="250" y1="35" x2="250" y2="90" stroke="#7c3aed" stroke-width="3"/>
  <polygon points="250,90 246,78 254,78" fill="#7c3aed"/>
  <text x="230" y="110" font-size="10" fill="#7c3aed">inverted image</text>
</svg>
\`\`\`

## Common errors

- **Thinking the image in a pin-hole camera is upright** — it is inverted because rays cross at the hole.
- **Swapping solar and lunar eclipses** — solar: Moon's shadow on Earth; lunar: Earth's shadow on Moon.
- **Expecting a shadow to have colour or bend** — light travels straight, giving a dark shadow behind an opaque body.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 25.1).** A pin-hole camera is used to photograph a tree 4.0 m tall standing 20 m from the pinhole. The screen is 0.10 m behind the pinhole. Because light travels in straight lines, find the height of the image on the screen.

**Step 1 — Use similar triangles.** Rays cross at the pinhole, so image height / object height = image distance / object distance: h_i / h_o = d_i / d_o.

**Step 2 — Rearrange.** h_i = h_o × (d_i / d_o).

**Step 3 — Substitute.** h_i = 4.0 m × (0.10 m / 20 m) = 4.0 × 0.0050.

**Step 4 — Evaluate.** h_i = 0.020 m = 2.0 cm.

**Answer.** The image is 2.0 cm tall and inverted (upside-down). The straight-line paths of the rays, crossing at the pinhole, both shrink and flip the image.`,
      quiz: [
        { prompt: "Light travelling in straight lines is shown by:", options: ["rainbows", "sharp shadows", "echoes", "beats"], correctIndex: 1, explanation: "Straight-line travel produces sharp shadows." },
        { prompt: "A shadow forms when light is blocked by an:", options: ["transparent object", "opaque object", "empty space", "sound"], correctIndex: 1, explanation: "An opaque object blocks the straight-line light." },
        { prompt: "The full dark part of a shadow is the:", options: ["penumbra", "umbra", "normal", "focus"], correctIndex: 1, explanation: "The umbra is the total shadow." },
        { prompt: "The partial shadow around the umbra is the:", options: ["umbra", "penumbra", "image", "ray"], correctIndex: 1, explanation: "The penumbra is the partial shadow." },
        { prompt: "A point source of light gives a shadow that is:", options: ["blurred with penumbra", "sharp (umbra only)", "coloured", "inverted"], correctIndex: 1, explanation: "A point source gives a sharp shadow with no penumbra." },
        { prompt: "A solar eclipse occurs when the:", options: ["Earth is between Sun and Moon", "Moon is between Sun and Earth", "Sun is between Earth and Moon", "Moon glows"], correctIndex: 1, explanation: "The Moon blocks the Sun, casting its shadow on Earth." },
        { prompt: "A lunar eclipse occurs when the:", options: ["Moon is between Sun and Earth", "Earth is between Sun and Moon", "Sun disappears", "Moon produces light"], correctIndex: 1, explanation: "Earth's shadow falls on the Moon." },
        { prompt: "The image in a pin-hole camera is:", options: ["upright", "inverted", "the same way up", "invisible"], correctIndex: 1, explanation: "Rays cross at the hole, inverting the image." },
        { prompt: "The pin-hole camera works because light:", options: ["bends at the hole", "travels in straight lines", "reflects at the hole", "speeds up"], correctIndex: 1, explanation: "Straight-line rays cross at the pinhole." },
        { prompt: "A smaller pinhole gives an image that is:", options: ["sharper but dimmer", "brighter and blurred", "upright", "coloured"], correctIndex: 0, explanation: "A smaller hole sharpens but dims the image." },
        { prompt: "Pin-hole magnification equals:", options: ["object distance / image distance", "image distance / object distance", "object height × image height", "1 always"], correctIndex: 1, explanation: "m = d_i / d_o = h_i / h_o." },
        { prompt: "An object 2 m tall at 10 m, image distance 0.05 m. Image height:", options: ["0.01 m", "0.1 m", "1 m", "4 m"], correctIndex: 0, explanation: "h_i = 2 × 0.05/10 = 0.01 m." },
        { prompt: "Eclipses are evidence that light:", options: ["is a sound", "travels in straight lines", "always bends", "has mass"], correctIndex: 1, explanation: "Shadows/eclipses show rectilinear propagation." },
        { prompt: "An opaque object is one that:", options: ["lets all light through", "blocks light", "produces light", "bends light"], correctIndex: 1, explanation: "Opaque objects block light and cast shadows." },
        { prompt: "The image in a pin-hole camera is also:", options: ["virtual", "real (formed on a screen)", "magnified always", "upright"], correctIndex: 1, explanation: "It is a real image cast on the screen." },
        { prompt: "A large (extended) light source produces a shadow with:", options: ["only umbra", "umbra and penumbra", "no shadow", "a rainbow"], correctIndex: 1, explanation: "Extended sources give both umbra and penumbra." },
        { prompt: "During a total solar eclipse, an observer stands in the Moon's:", options: ["penumbra only", "umbra", "image", "focus"], correctIndex: 1, explanation: "Totality is seen from within the umbra." },
        { prompt: "If the object moves closer to the pinhole (screen fixed), the image gets:", options: ["smaller", "larger", "upright", "coloured"], correctIndex: 1, explanation: "Smaller d_o increases m = d_i/d_o, so the image is larger." },
        { prompt: "The pin-hole image is reversed:", options: ["top-to-bottom only", "left-to-right only", "both top-to-bottom and left-to-right", "not at all"], correctIndex: 2, explanation: "Rays crossing invert and laterally reverse the image." },
        { prompt: "Which needs light to travel in straight lines?", options: ["shadows", "eclipses", "pin-hole images", "all of these"], correctIndex: 3, explanation: "All three depend on rectilinear propagation." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "The image formed by a pin-hole camera is:", options: ["upright and virtual", "inverted and real", "upright and magnified", "not formed"], correctIndex: 1, answerKey: "It is real (on a screen) and inverted because rays cross at the hole.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain why a shadow forms and distinguish between the umbra and the penumbra.", answerKey: "Light travels in straight lines, so an opaque object blocks the light behind it, forming a shadow. The umbra is the fully dark region where all the light is blocked; the penumbra is the partial shadow around it where only some of the light is blocked (produced by an extended source).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A pin-hole camera forms an image of a 1.5 m object placed 6 m away on a screen 0.20 m behind the pinhole. Find the image height.", answerKey: "h_i = h_o × d_i/d_o = 1.5 × 0.20/6 = 1.5 × 0.0333 = 0.05 m (5 cm), inverted.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A lunar eclipse occurs when:", options: ["the Moon is between the Sun and Earth", "the Earth is between the Sun and Moon", "the Sun stops shining", "the Moon glows on its own"], correctIndex: 1, answerKey: "In a lunar eclipse the Earth is between the Sun and Moon, casting its shadow on the Moon.", marks: 2 },
        { type: "ESSAY", prompt: "Using the fact that light travels in straight lines, explain how a pin-hole camera forms an image and why that image is inverted, and state two ways the image changes if the pinhole is made smaller or the object moved closer.", answerKey: "Because light travels in straight lines, a ray from the top of the object passes straight through the small hole and lands on the lower part of the screen, while a ray from the bottom of the object crosses to the upper part of the screen. The rays cross at the pinhole, so the image is inverted (and also reversed left-to-right); it is real because it forms on the screen. Making the pinhole smaller gives a sharper but dimmer image (each object point maps to a smaller patch, but less light enters). Moving the object closer (screen fixed) increases the magnification m = d_i/d_o, so the image becomes larger (and dimmer/less sharp if too large). Reward the straight-line ray explanation of inversion and two correct effects.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 25.7 Image Formation by Mirrors (https://openstax.org/books/college-physics-2e/pages/25-7-image-formation-by-mirrors)
    {
      slug: "reflection-by-plane-and-spherical-mirrors",
      title: "Reflection of Light by Plane and Spherical Mirrors",
      objective:
        "By the end of the topic, learners should be able to describe images formed by plane, concave and convex mirrors and use the mirror equation 1/f = 1/dₒ + 1/dᵢ with magnification m = −dᵢ/dₒ. (MoE Grade 11 Period VI, CONTENTS 4 'Reflection of light by plane and spherical mirrors'.)",
      estimatedMinutes: 110,
      notes: `## Plane mirrors

- A **plane mirror** forms an image that is:
- **virtual** (cannot be caught on a screen — appears to be behind the mirror),
- **upright**, the **same size** as the object,
- **as far behind** the mirror as the object is in front,
- **laterally inverted** (left and right appear swapped).

## Spherical mirrors

- **Concave (converging) mirror** — curves inward; **positive focal length**. Can form a **real** image (inverted) when the object is beyond the focus, or a **virtual, upright, magnified** image when the object is inside the focus. Used in torches, shaving mirrors and telescopes.
- **Convex (diverging) mirror** — curves outward; **negative focal length**. Always forms a **virtual, upright, diminished** image with a wide field of view. Used as security and driving mirrors.
- **Focal length:** f = R/2, where R is the radius of curvature.

## The mirror equation

- **1/f = 1/dₒ + 1/dᵢ**, where dₒ is the object distance, dᵢ the image distance, f the focal length.
- **Magnification:** m = −dᵢ/dₒ = hᵢ/hₒ.
- Sign conventions: real images have positive dᵢ; virtual images have negative dᵢ. A negative m means the image is inverted; |m| > 1 means enlarged.

| Mirror | Focal length | Typical image |
| --- | --- | --- |
| Plane | infinite | virtual, upright, same size |
| Concave | positive | real inverted, or virtual enlarged |
| Convex | negative | virtual, upright, diminished |

## Common errors

- **Thinking a plane-mirror image is real** — it is virtual (behind the mirror).
- **Forgetting sign conventions** — a virtual image gives a negative image distance.
- **Confusing concave and convex** — concave converges (can magnify); convex diverges (always shrinks).`,
      workedExample: `**Problem (OpenStax College Physics 2e, 25.7).** A concave mirror has a radius of curvature of 50.0 cm. An image is formed 3.00 m (300 cm) in front of the mirror. Find the object distance.

**Step 1 — Focal length.** f = R/2 = 50.0/2 = 25.0 cm = 0.250 m.

**Step 2 — Mirror equation.** 1/f = 1/dₒ + 1/dᵢ, so 1/dₒ = 1/f − 1/dᵢ.

**Step 3 — Substitute (in metres).** 1/dₒ = 1/0.250 − 1/3.00 = 4.000 − 0.333 = 3.667 m⁻¹.

**Step 4 — Invert.** dₒ = 1/3.667 = 0.273 m = 27.3 cm.

**Answer.** The object is 27.3 cm from the mirror. Since the object is just beyond the focus (25.0 cm), the mirror forms a real, enlarged image far in front of it.`,
      quiz: [
        { prompt: "A plane mirror forms an image that is:", options: ["real and inverted", "virtual and upright", "real and enlarged", "virtual and inverted"], correctIndex: 1, explanation: "Plane-mirror images are virtual and upright." },
        { prompt: "In a plane mirror, the image is located:", options: ["on the mirror", "as far behind as the object is in front", "at the focus", "at infinity"], correctIndex: 1, explanation: "Image distance behind equals object distance in front." },
        { prompt: "A plane-mirror image is the same ___ as the object:", options: ["size", "colour only", "distance from the eye", "brightness only"], correctIndex: 0, explanation: "It is the same size (magnification 1)." },
        { prompt: "'Laterally inverted' means:", options: ["upside-down", "left and right swapped", "magnified", "coloured"], correctIndex: 1, explanation: "Left and right appear reversed in a plane mirror." },
        { prompt: "A concave mirror is also called:", options: ["diverging", "converging", "plane", "flat"], correctIndex: 1, explanation: "Concave mirrors converge (focus) light." },
        { prompt: "A convex mirror is also called:", options: ["converging", "diverging", "plane", "focusing"], correctIndex: 1, explanation: "Convex mirrors diverge light." },
        { prompt: "A convex mirror always forms an image that is:", options: ["real and enlarged", "virtual, upright and diminished", "real and inverted", "the same size"], correctIndex: 1, explanation: "Convex mirrors give virtual, upright, smaller images." },
        { prompt: "The focal length of a mirror is:", options: ["2R", "R/2", "R", "R²"], correctIndex: 1, explanation: "f = R/2." },
        { prompt: "The mirror equation is:", options: ["1/f = 1/dₒ + 1/dᵢ", "f = dₒ + dᵢ", "1/f = dₒ dᵢ", "f = dₒ/dᵢ"], correctIndex: 0, explanation: "1/f = 1/dₒ + 1/dᵢ." },
        { prompt: "Magnification is given by:", options: ["m = dₒ/dᵢ", "m = −dᵢ/dₒ", "m = dₒ dᵢ", "m = f/dₒ"], correctIndex: 1, explanation: "m = −dᵢ/dₒ = hᵢ/hₒ." },
        { prompt: "A concave mirror of R = 40 cm has focal length:", options: ["20 cm", "80 cm", "40 cm", "10 cm"], correctIndex: 0, explanation: "f = R/2 = 40/2 = 20 cm." },
        { prompt: "A convex mirror's focal length is:", options: ["positive", "negative", "zero", "infinite"], correctIndex: 1, explanation: "Convex (diverging) mirrors have negative focal length." },
        { prompt: "Which mirror gives a wide field of view for security?", options: ["plane", "concave", "convex", "none"], correctIndex: 2, explanation: "Convex mirrors have a wide field of view." },
        { prompt: "A shaving/make-up mirror that magnifies is:", options: ["plane", "concave", "convex", "flat"], correctIndex: 1, explanation: "A concave mirror can give an enlarged upright image up close." },
        { prompt: "A real image can be formed by a:", options: ["plane mirror", "convex mirror", "concave mirror", "no mirror"], correctIndex: 2, explanation: "Only a concave mirror can form a real image." },
        { prompt: "For an object at dₒ = 30 cm and f = 10 cm (concave), 1/dᵢ =", options: ["1/10 − 1/30 = 1/15", "1/10 + 1/30", "1/30 − 1/10", "1/40"], correctIndex: 0, explanation: "1/dᵢ = 1/f − 1/dₒ = 1/10 − 1/30 = 2/30 = 1/15, so dᵢ = 15 cm." },
        { prompt: "A negative magnification means the image is:", options: ["upright", "inverted", "virtual", "coloured"], correctIndex: 1, explanation: "A negative m indicates an inverted image." },
        { prompt: "A plane mirror image cannot be caught on a screen because it is:", options: ["real", "virtual", "inverted", "diminished"], correctIndex: 1, explanation: "Virtual images only appear to be behind the mirror." },
        { prompt: "If dᵢ = 20 cm and dₒ = 10 cm, the magnification is:", options: ["−2", "2", "−0.5", "0.5"], correctIndex: 0, explanation: "m = −dᵢ/dₒ = −20/10 = −2 (inverted, twice as big)." },
        { prompt: "Concave mirrors are used in torches and headlights to:", options: ["spread light widely", "produce a parallel beam", "form virtual images only", "reduce brightness"], correctIndex: 1, explanation: "A source at the focus of a concave mirror gives a parallel beam." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "The image formed by a plane mirror is:", options: ["real, inverted, magnified", "virtual, upright, same size", "real, upright, diminished", "virtual, inverted, enlarged"], correctIndex: 1, answerKey: "A plane mirror gives a virtual, upright image the same size as the object.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "List four properties of the image formed by a plane mirror.", answerKey: "Virtual; upright; the same size as the object; as far behind the mirror as the object is in front; laterally inverted (left-right reversed). Any four.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A concave mirror has a focal length of 15 cm. An object is placed 30 cm in front of it. Find the image distance.", answerKey: "1/dᵢ = 1/f − 1/dₒ = 1/15 − 1/30 = 2/30 − 1/30 = 1/30, so dᵢ = 30 cm (a real image 30 cm in front).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which mirror always produces a virtual, upright, diminished image?", options: ["plane", "concave", "convex", "none"], correctIndex: 2, answerKey: "A convex (diverging) mirror always gives a virtual, upright, smaller image.", marks: 2 },
        { type: "ESSAY", prompt: "Compare concave and convex mirrors in terms of the images they form and their everyday uses, and explain why a convex mirror is chosen as a car's side mirror despite making objects look smaller.", answerKey: "A concave (converging) mirror has a positive focal length and can form a real, inverted image when the object is beyond the focus (used in headlights/torches to make a parallel beam, and in telescopes) or a virtual, upright, magnified image when the object is inside the focus (used as a shaving/make-up mirror). A convex (diverging) mirror has a negative focal length and always forms a virtual, upright, diminished image with a very wide field of view. A convex mirror is used as a car side/security mirror because its wide field of view lets the driver see much more of the road and traffic behind; although objects appear smaller (and seem farther away), the safety benefit of the large field of view outweighs this. Reward correct image comparisons, uses, and the field-of-view reasoning.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 24.3 The Electromagnetic Spectrum (https://openstax.org/books/college-physics-2e/pages/24-3-the-electromagnetic-spectrum)
    {
      slug: "electromagnetic-spectrum",
      title: "The Electromagnetic Spectrum",
      objective:
        "By the end of the topic, learners should be able to list the regions of the electromagnetic spectrum in order, state that all travel at the speed of light, and use c = fλ to relate frequency and wavelength. (MoE Grade 11 Period VI, CONTENTS 5 'Electromagnetic Spectrum'.)",
      estimatedMinutes: 100,
      notes: `## The electromagnetic spectrum

- The **electromagnetic (EM) spectrum** is the full range of electromagnetic waves, arranged by frequency (or wavelength).
- **Visible light** is only a small part of it.
- All EM waves are **transverse**, carry energy, and travel at the **speed of light** c = 3 × 10⁸ m/s in a vacuum.

## Order of the spectrum

From **low frequency / long wavelength** to **high frequency / short wavelength**:

1. **Radio waves** — communication, broadcasting.
2. **Microwaves** — cooking, radar, mobile phones.
3. **Infrared** — heat radiation, remote controls, night vision.
4. **Visible light** — the colours we see (red → violet).
5. **Ultraviolet (UV)** — causes suntan/sunburn, sterilisation.
6. **X-rays** — medical imaging of bones.
7. **Gamma rays** — from nuclei; sterilising equipment, treating cancer.

## Key relationships

- **c = f λ**, where c = 3 × 10⁸ m/s, f is frequency (Hz), λ is wavelength (m).
- The **greater the frequency, the shorter the wavelength** (they are inversely related).
- Higher frequency also means **higher energy** — gamma rays are the most energetic and penetrating; radio waves the least.

## Visible light colours

- Within visible light, red has the **longest** wavelength (lowest frequency) and violet the **shortest** wavelength (highest frequency).

## Common errors

- **Thinking each region travels at a different speed** — all EM waves travel at c in a vacuum.
- **Reversing frequency and wavelength** — high frequency means short wavelength.
- **Believing only visible light is "light"** — visible light is one small band of the EM spectrum.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 24.3).** An FM radio station broadcasts at a frequency of 105.1 MHz (105.1 × 10⁶ Hz). Find the wavelength of these radio waves. Use c = 3.00 × 10⁸ m/s.

**Step 1 — Rearrange c = fλ.** λ = c / f.

**Step 2 — Substitute.** λ = (3.00 × 10⁸ m/s) / (105.1 × 10⁶ Hz).

**Step 3 — Evaluate.** 105.1 × 10⁶ = 1.051 × 10⁸, so λ = (3.00 × 10⁸) / (1.051 × 10⁸) = 2.85 m.

**Answer.** The wavelength is about 2.85 m — much longer than visible light, as expected for radio waves at the low-frequency end of the spectrum.`,
      quiz: [
        { prompt: "All electromagnetic waves travel (in a vacuum) at:", options: ["different speeds", "the speed of light 3×10⁸ m/s", "340 m/s", "increasing speeds"], correctIndex: 1, explanation: "All EM waves travel at c in a vacuum." },
        { prompt: "Which has the longest wavelength?", options: ["gamma rays", "X-rays", "radio waves", "ultraviolet"], correctIndex: 2, explanation: "Radio waves have the longest wavelength." },
        { prompt: "Which has the highest frequency?", options: ["radio", "infrared", "visible light", "gamma rays"], correctIndex: 3, explanation: "Gamma rays have the highest frequency and energy." },
        { prompt: "The equation linking c, f and λ is:", options: ["c = f/λ", "c = fλ", "c = λ/f", "c = f + λ"], correctIndex: 1, explanation: "c = fλ." },
        { prompt: "As frequency increases, wavelength:", options: ["increases", "decreases", "stays the same", "doubles"], correctIndex: 1, explanation: "They are inversely related (c = fλ)." },
        { prompt: "Visible light lies between which two regions?", options: ["radio and microwave", "infrared and ultraviolet", "X-ray and gamma", "microwave and infrared"], correctIndex: 1, explanation: "Visible light is between infrared and ultraviolet." },
        { prompt: "Which EM waves are used to image bones?", options: ["radio", "X-rays", "microwaves", "infrared"], correctIndex: 1, explanation: "X-rays penetrate soft tissue to image bone." },
        { prompt: "Microwaves are commonly used for:", options: ["seeing bones", "cooking and mobile phones", "suntans", "night vision only"], correctIndex: 1, explanation: "Microwaves are used in ovens, radar and phones." },
        { prompt: "Infrared radiation is mainly associated with:", options: ["heat", "sound", "bone imaging", "sterilising with nuclei"], correctIndex: 0, explanation: "Infrared is felt as heat." },
        { prompt: "A radio wave of 100 MHz (10⁸ Hz) has wavelength:", options: ["3 m", "0.3 m", "30 m", "300 m"], correctIndex: 0, explanation: "λ = c/f = 3×10⁸/10⁸ = 3 m." },
        { prompt: "Higher-frequency EM waves carry:", options: ["less energy", "more energy", "no energy", "only heat"], correctIndex: 1, explanation: "Higher frequency means higher energy." },
        { prompt: "Ultraviolet radiation can cause:", options: ["bone fractures", "suntan/sunburn", "radio static", "echoes"], correctIndex: 1, explanation: "UV causes tanning and sunburn." },
        { prompt: "In visible light, which colour has the shortest wavelength?", options: ["red", "green", "violet", "orange"], correctIndex: 2, explanation: "Violet has the shortest wavelength (highest frequency)." },
        { prompt: "In visible light, which colour has the longest wavelength?", options: ["violet", "blue", "red", "green"], correctIndex: 2, explanation: "Red has the longest wavelength (lowest frequency)." },
        { prompt: "Which is used in TV remote controls?", options: ["gamma rays", "infrared", "X-rays", "radio only"], correctIndex: 1, explanation: "Remote controls use infrared." },
        { prompt: "The correct order (increasing frequency) is:", options: ["radio, microwave, infrared, visible, UV, X-ray, gamma", "gamma, X-ray, visible, radio", "visible, radio, gamma", "X-ray, radio, infrared"], correctIndex: 0, explanation: "This is the standard order of the EM spectrum." },
        { prompt: "A microwave of wavelength 0.12 m has frequency (c = 3×10⁸):", options: ["2.5 × 10⁹ Hz", "3.6 × 10⁷ Hz", "2.5 × 10⁷ Hz", "3.0 × 10⁸ Hz"], correctIndex: 0, explanation: "f = c/λ = 3×10⁸/0.12 = 2.5×10⁹ Hz." },
        { prompt: "Gamma rays are used to:", options: ["broadcast radio", "sterilise equipment and treat cancer", "cook food", "make rainbows"], correctIndex: 1, explanation: "High-energy gamma rays sterilise and treat tumours." },
        { prompt: "Visible light is what fraction of the whole EM spectrum?", options: ["all of it", "a small part", "half", "none"], correctIndex: 1, explanation: "Visible light is just a small band of the spectrum." },
        { prompt: "All EM waves are:", options: ["longitudinal", "transverse", "mechanical", "audible"], correctIndex: 1, explanation: "Every EM wave is transverse." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Which of these electromagnetic waves has the highest energy?", options: ["radio waves", "visible light", "infrared", "gamma rays"], correctIndex: 3, answerKey: "Gamma rays have the highest frequency and therefore the highest energy.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "List the regions of the electromagnetic spectrum in order of increasing frequency.", answerKey: "Radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A microwave has a frequency of 2.5 × 10⁹ Hz. Find its wavelength (c = 3 × 10⁸ m/s).", answerKey: "λ = c/f = (3 × 10⁸)/(2.5 × 10⁹) = 0.12 m.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "In a vacuum, all electromagnetic waves travel at:", options: ["different speeds depending on frequency", "the speed of sound", "the speed of light 3×10⁸ m/s", "increasing speed with wavelength"], correctIndex: 2, answerKey: "All EM waves travel at c = 3×10⁸ m/s in a vacuum.", marks: 2 },
        { type: "ESSAY", prompt: "Describe the electromagnetic spectrum, explaining how the regions are ordered and how frequency, wavelength and energy are related, and give one use of three different regions.", answerKey: "The electromagnetic spectrum is the full family of EM waves, all transverse and travelling at c = 3×10⁸ m/s in a vacuum, arranged in order of frequency (or wavelength): radio, microwave, infrared, visible light, ultraviolet, X-rays, gamma rays. Since c = fλ, frequency and wavelength are inversely related — as frequency increases, wavelength decreases — and higher frequency also means higher photon energy and greater penetration (gamma rays most energetic, radio least). Uses (any three): radio — broadcasting/communication; microwaves — cooking, radar, mobile phones; infrared — heating, remote controls, night vision; ultraviolet — sterilisation; X-rays — imaging bones; gamma rays — sterilising equipment and treating cancer. Reward the correct ordering, the c = fλ / energy relationship, and three valid uses.", marks: 8 },
      ],
    },
  ],
};
