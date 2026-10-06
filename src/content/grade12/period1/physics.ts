import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 12,
// Semester One, Period I: Refraction and Dispersion of Light. Topics follow the
// syllabus CONTENTS item by item: refraction at a plane interface (laws of
// refraction), refractive index (Snell's law, speed of light, real and apparent
// depth), critical angle and total internal reflection, lenses and eye defects,
// and dispersion (with primary colours and pigments). Every topic is sourced
// from OpenStax College Physics 2e (read via WebFetch), with additive/subtractive
// colour sourced from LibreTexts.
export const physicsG12P1: PeriodContent = {
  grade: 12,
  number: 1,
  title: "Refraction and Dispersion of Light",
  summary:
    "Period I of the MoE Grade 12 Physics syllabus. Learners state and apply the laws of refraction, define and calculate the refractive index using Snell's law and the speed of light, relate real and apparent depth, find the critical angle for total internal reflection, describe converging and diverging lenses and the correction of eye defects, and explain the dispersion of white light with the distinction between primary colours and primary pigments.",
  topics: [
    // source: OpenStax — College Physics 2e, 25.3 The Law of Refraction (https://openstax.org/books/college-physics-2e/pages/25-3-the-law-of-refraction)
    {
      slug: "refraction-at-a-plane-interface",
      title: "Refraction at a Plane Interface and the Laws of Refraction",
      objective:
        "By the end of the topic, learners should be able to define refraction, state the two laws of refraction, and describe how a ray bends when it crosses a plane boundary between two media. (MoE Grade 12 Period I, CONTENTS 1 'Refraction at plane interface; Laws of refraction'.)",
      estimatedMinutes: 100,
      notes: `## What is refraction

- **Refraction** — the change in direction (bending) of a light ray as it passes from one transparent medium into another because its speed changes.
- Refraction happens only at the **boundary** between the two media; inside a uniform medium the ray travels in a straight line.
- The perpendicular drawn to the surface at the point where the ray strikes is the **normal**.
- **Angle of incidence (θ₁)** — angle between the incident ray and the normal.
- **Angle of refraction (θ₂)** — angle between the refracted ray and the normal.

## The two laws of refraction

1. **First law** — the incident ray, the refracted ray and the normal at the point of incidence all lie in the **same plane**.
2. **Second law (Snell's law)** — the ratio n₁ sin θ₁ = n₂ sin θ₂ holds for the two media; for a given pair of media sin θ₁ / sin θ₂ is constant.

## Direction of bending

- Going into a **denser** (higher-n) medium light slows down and bends **towards the normal** (θ₂ < θ₁).
- Going into a **less dense** (lower-n) medium light speeds up and bends **away from the normal** (θ₂ > θ₁).
- A ray striking the surface **along the normal** (θ₁ = 0) passes straight through without bending.

\`\`\`svg A ray refracting at a plane air-glass interface
<svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A ray bending towards the normal as it enters glass">
  <rect x="0" y="80" width="240" height="80" fill="#dbeafe"/>
  <line x1="120" y1="10" x2="120" y2="150" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="40" y1="20" x2="120" y2="80" stroke="#dc2626" stroke-width="2.5"/>
  <polygon points="120,80 108,74 112,84" fill="#dc2626"/>
  <line x1="120" y1="80" x2="170" y2="150" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="170,150 158,146 164,140" fill="#2563eb"/>
  <text x="60" y="45" font-size="10" fill="#dc2626">incident (θ₁)</text>
  <text x="150" y="120" font-size="10" fill="#2563eb">refracted (θ₂)</text>
  <text x="180" y="75" font-size="10" fill="#334155">air</text>
  <text x="180" y="100" font-size="10" fill="#334155">glass</text>
</svg>
\`\`\`

## Common errors

- **Measuring angles from the surface** — both angles are measured from the **normal**, not the surface.
- **Thinking the ray bends inside the medium** — bending occurs only at the boundary.
- **Assuming light always bends towards the normal** — it bends away when entering a less dense medium.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 25.3).** A ray of light in air (n₁ = 1.00) strikes a flat glass surface (n₂ = 1.50) at an angle of incidence of 30.0° to the normal. Find the angle of refraction inside the glass.

**Step 1 — Write Snell's law.** n₁ sin θ₁ = n₂ sin θ₂.

**Step 2 — Solve for sin θ₂.** sin θ₂ = (n₁ sin θ₁) / n₂ = (1.00 × sin 30.0°) / 1.50 = (1.00 × 0.500) / 1.50 = 0.333.

**Step 3 — Take the inverse sine.** θ₂ = sin⁻¹(0.333) = 19.5°.

**Answer.** The ray refracts to 19.5° from the normal. Because the glass is denser, θ₂ < θ₁, so the ray has bent towards the normal.`,
      quiz: [
        { prompt: "Refraction is the:", options: ["reflection of light", "bending of light as it changes medium", "splitting of white light", "absorption of light"], correctIndex: 1, explanation: "Refraction is the change of direction of light passing from one medium to another." },
        { prompt: "Refraction occurs because light changes its:", options: ["colour", "speed", "frequency", "amplitude"], correctIndex: 1, explanation: "The change of speed at the boundary causes bending." },
        { prompt: "Angles of incidence and refraction are measured from the:", options: ["surface", "normal", "horizontal", "refracted ray"], correctIndex: 1, explanation: "Both angles are measured from the normal to the surface." },
        { prompt: "The normal is a line drawn:", options: ["along the surface", "perpendicular to the surface at the point of incidence", "parallel to the ray", "at 45° to the ray"], correctIndex: 1, explanation: "The normal is perpendicular to the boundary at the point of incidence." },
        { prompt: "Light passing into a denser medium bends:", options: ["away from the normal", "towards the normal", "back on itself", "not at all"], correctIndex: 1, explanation: "Slower light in a denser medium bends towards the normal." },
        { prompt: "Light passing into a less dense medium bends:", options: ["towards the normal", "away from the normal", "along the surface", "not at all"], correctIndex: 1, explanation: "Faster light in a less dense medium bends away from the normal." },
        { prompt: "A ray striking a surface along the normal (θ₁ = 0):", options: ["bends towards the normal", "bends away from the normal", "passes straight through", "is totally reflected"], correctIndex: 2, explanation: "At normal incidence there is no bending." },
        { prompt: "The first law of refraction states that the incident ray, refracted ray and normal lie:", options: ["in different planes", "in the same plane", "on the surface", "along the ray"], correctIndex: 1, explanation: "All three lie in one plane." },
        { prompt: "Snell's law is written as:", options: ["n₁ sin θ₁ = n₂ sin θ₂", "n₁ cos θ₁ = n₂ cos θ₂", "n₁ tan θ₁ = n₂ tan θ₂", "n₁ θ₁ = n₂ θ₂"], correctIndex: 0, explanation: "Snell's law: n₁ sin θ₁ = n₂ sin θ₂." },
        { prompt: "For a fixed pair of media, sin θ₁ / sin θ₂ is:", options: ["always 1", "constant", "always 0", "equal to the angle"], correctIndex: 1, explanation: "The ratio of sines is a constant equal to n₂/n₁." },
        { prompt: "Refraction takes place:", options: ["throughout the medium", "only at the boundary between media", "only in a vacuum", "only for coloured light"], correctIndex: 1, explanation: "Bending happens at the boundary; the ray is straight within a uniform medium." },
        { prompt: "Which pair bends light towards the normal?", options: ["water to air", "glass to air", "air to glass", "glass to vacuum"], correctIndex: 2, explanation: "Air to glass is less dense to denser, so it bends towards the normal." },
        { prompt: "A ray goes from glass (n = 1.5) into air (n = 1.0). Compared with the angle in the glass, the angle in air is:", options: ["smaller", "larger", "equal", "zero"], correctIndex: 1, explanation: "Entering a less dense medium the ray bends away from the normal, so the angle increases." },
        { prompt: "The angle of incidence is the angle between the:", options: ["incident ray and the surface", "incident ray and the normal", "refracted ray and the normal", "two media"], correctIndex: 1, explanation: "Angle of incidence is measured from the normal." },
        { prompt: "If light enters glass at 0° to the normal, the angle of refraction is:", options: ["0°", "45°", "90°", "impossible to say"], correctIndex: 0, explanation: "Normal incidence gives zero refraction angle — no bending." },
        { prompt: "A straw looks bent in a glass of water because of:", options: ["reflection", "refraction", "diffraction", "dispersion"], correctIndex: 1, explanation: "Light from the straw refracts at the water surface, so the straw appears bent." },
        { prompt: "Which quantity does NOT change during refraction?", options: ["speed", "wavelength", "direction", "frequency"], correctIndex: 3, explanation: "Frequency (colour) is unchanged; speed, wavelength and direction change." },
        { prompt: "The refracted ray lies on the:", options: ["same side of the normal as the incident ray", "opposite side of the normal, in the second medium", "surface", "same ray as the incident ray"], correctIndex: 1, explanation: "The refracted ray continues into the second medium on the far side of the boundary." },
        { prompt: "Doubling the angle of incidence causes the angle of refraction to:", options: ["exactly double", "increase but not linearly", "stay the same", "halve"], correctIndex: 1, explanation: "The relation is through sines, so refraction angle increases non-linearly." },
        { prompt: "The two laws of refraction were combined into a single rule by:", options: ["Newton", "Snell", "Ohm", "Faraday"], correctIndex: 1, explanation: "The second law is Snell's law, n₁ sin θ₁ = n₂ sin θ₂." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Light travelling from air into water bends:", options: ["away from the normal", "towards the normal", "along the surface", "back into the air"], correctIndex: 1, answerKey: "Water is denser than air, so light slows and bends towards the normal.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the two laws of refraction.", answerKey: "(1) The incident ray, the refracted ray and the normal at the point of incidence all lie in the same plane. (2) For two given media, n₁ sin θ₁ = n₂ sin θ₂ (Snell's law); the ratio sin θ₁ / sin θ₂ is constant.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A ray in air strikes water (n = 1.33) at 40° to the normal. Find the angle of refraction.", answerKey: "sin θ₂ = (1.00 × sin 40°)/1.33 = 0.643/1.33 = 0.483. θ₂ = sin⁻¹(0.483) = 28.9° (about 29°).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "During refraction, which property of the light stays the same?", options: ["speed", "wavelength", "frequency", "direction"], correctIndex: 2, answerKey: "Frequency is unchanged; speed and wavelength change, causing the change in direction.", marks: 2 },
        { type: "ESSAY", prompt: "Explain what refraction is, why it occurs, and describe how a light ray bends when it passes (i) from air into glass and (ii) from glass into air. Include the role of the normal in your answer.", answerKey: "Refraction is the change of direction of light as it crosses a boundary between two transparent media, caused by a change in its speed. The normal is the line perpendicular to the surface at the point of incidence, and all angles are measured from it. (i) Air into glass: light enters a denser medium, slows down and bends towards the normal (angle of refraction less than angle of incidence). (ii) Glass into air: light enters a less dense medium, speeds up and bends away from the normal (angle of refraction greater than angle of incidence). At normal incidence (0°) there is no bending. Reward the speed-change cause and correct bending directions.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 25.3 The Law of Refraction (https://openstax.org/books/college-physics-2e/pages/25-3-the-law-of-refraction)
    {
      slug: "refractive-index",
      title: "Refractive Index: Snell's Law, Speed of Light, Real and Apparent Depth",
      objective:
        "By the end of the topic, learners should be able to define refractive index as n = c/v, apply Snell's law to calculate refractive indices and angles, and use the real-depth/apparent-depth relation. (MoE Grade 12 Period I, CONTENTS 2 'Refractive index: Snell's Law; speed of light; real depth and apparent depth; critical angle and total internal reflection'.)",
      estimatedMinutes: 110,
      notes: `## Refractive index and the speed of light

- **Refractive index (n)** — the ratio of the speed of light in vacuum to its speed in the medium: **n = c / v**.
- c = speed of light in vacuum = 3.00 ×10⁸ m/s (2.99792458 ×10⁸ m/s).
- Because light never travels faster than c in a medium, **n ≥ 1**.
- A larger n means light travels **slower** and the medium is optically **denser**.

| Medium | Refractive index n |
| --- | --- |
| Vacuum | 1.000 |
| Air | 1.0003 (≈ 1.00) |
| Water | 1.33 |
| Crown glass | 1.52 |
| Diamond | 2.42 |

## Snell's law

- **n₁ sin θ₁ = n₂ sin θ₂** relates the angles in the two media to their refractive indices.
- For light going from vacuum/air (n₁ ≈ 1) into a medium: sin θ₁ = n sin θ₂, so n = sin θ₁ / sin θ₂.
- Snell's law also gives the speeds: n₁/n₂ = v₂/v₁ = sin θ₁/sin θ₂.

## Real depth and apparent depth

- When you look straight down at an object under water it appears **closer to the surface** than it really is, because light bends away from the normal as it leaves the water.
- **Refractive index = real depth / apparent depth** (for near-normal viewing).
- So **apparent depth = real depth / n**. A pool of real depth 2.0 m viewed from above appears only 2.0/1.33 = 1.5 m deep.

## Wavelength and frequency in a medium

- Entering a medium the **frequency stays the same** but the **speed and wavelength decrease**: v = fλ, and λ_medium = λ_vacuum / n.

## Common errors

- **Writing n = v/c** — it is n = c/v (bigger index means slower light).
- **Forgetting n ≥ 1** — no ordinary medium has n < 1.
- **Confusing real and apparent depth** — the apparent depth is the smaller, shallower value.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 25.3).** The refractive index of zircon is n = 1.923. Find the speed of light in zircon. Then find the apparent depth of a coin lying at a real depth of 1.50 m under water (n = 1.33).

**Part A — Speed in zircon.**
Step 1 — Rearrange n = c/v to v = c/n.
Step 2 — Substitute: v = (3.00 ×10⁸ m/s) / 1.923 = 1.56 ×10⁸ m/s.
So light travels at about 52% of its vacuum speed in zircon.

**Part B — Apparent depth of the coin.**
Step 1 — Use n = real depth / apparent depth, so apparent depth = real depth / n.
Step 2 — Substitute: apparent depth = 1.50 m / 1.33 = 1.13 m.

**Answer.** Light in zircon travels at 1.56 ×10⁸ m/s, and the coin appears to be about 1.13 m below the surface instead of its true 1.50 m.`,
      quiz: [
        { prompt: "The refractive index is defined as:", options: ["v/c", "c/v", "c × v", "c − v"], correctIndex: 1, explanation: "n = c/v, the ratio of the speed in vacuum to the speed in the medium." },
        { prompt: "The refractive index of any ordinary medium is:", options: ["less than 1", "equal to 0", "greater than or equal to 1", "negative"], correctIndex: 2, explanation: "Since v ≤ c, n = c/v ≥ 1." },
        { prompt: "A medium with a larger refractive index means light travels:", options: ["faster", "slower", "at the same speed", "backwards"], correctIndex: 1, explanation: "Larger n means smaller v — light is slower in a denser medium." },
        { prompt: "The speed of light in vacuum is about:", options: ["3.00 ×10⁶ m/s", "3.00 ×10⁸ m/s", "3.00 ×10¹⁰ m/s", "3.00 ×10⁴ m/s"], correctIndex: 1, explanation: "c ≈ 3.00 ×10⁸ m/s." },
        { prompt: "For light entering water (n = 1.33) its speed becomes:", options: ["3.00 ×10⁸ m/s", "2.26 ×10⁸ m/s", "4.00 ×10⁸ m/s", "1.33 ×10⁸ m/s"], correctIndex: 1, explanation: "v = c/n = 3.00 ×10⁸ / 1.33 = 2.26 ×10⁸ m/s." },
        { prompt: "Snell's law is:", options: ["n₁/θ₁ = n₂/θ₂", "n₁ sin θ₁ = n₂ sin θ₂", "n₁ + θ₁ = n₂ + θ₂", "n₁ cos θ₁ = n₂ cos θ₂"], correctIndex: 1, explanation: "n₁ sin θ₁ = n₂ sin θ₂." },
        { prompt: "For light from air into a medium, n equals:", options: ["sin θ₂ / sin θ₁", "sin θ₁ / sin θ₂", "θ₁ / θ₂", "cos θ₁ / cos θ₂"], correctIndex: 1, explanation: "With n₁ ≈ 1, n = sin θ₁ / sin θ₂." },
        { prompt: "The refractive index of diamond (n = 2.42) means light in diamond travels at:", options: ["1.24 ×10⁸ m/s", "3.00 ×10⁸ m/s", "7.26 ×10⁸ m/s", "2.42 ×10⁸ m/s"], correctIndex: 0, explanation: "v = 3.00 ×10⁸ / 2.42 = 1.24 ×10⁸ m/s." },
        { prompt: "Real depth / apparent depth equals:", options: ["1", "the refractive index n", "the critical angle", "the speed of light"], correctIndex: 1, explanation: "n = real depth / apparent depth for near-normal viewing." },
        { prompt: "An object under water appears:", options: ["deeper than it is", "shallower than it is", "at its true depth", "above the water"], correctIndex: 1, explanation: "Apparent depth = real depth / n, which is smaller." },
        { prompt: "A pond is 2.66 m deep (n = 1.33). Its apparent depth is:", options: ["2.0 m", "3.5 m", "2.66 m", "1.33 m"], correctIndex: 0, explanation: "Apparent depth = 2.66 / 1.33 = 2.0 m." },
        { prompt: "When light enters a denser medium, its frequency:", options: ["increases", "decreases", "stays the same", "becomes zero"], correctIndex: 2, explanation: "Frequency is unchanged; speed and wavelength decrease." },
        { prompt: "The wavelength of light in a medium of index n is:", options: ["λ × n", "λ / n", "λ + n", "unchanged"], correctIndex: 1, explanation: "λ_medium = λ_vacuum / n." },
        { prompt: "Which correctly ranks optical density (least to greatest)?", options: ["diamond, water, air", "air, water, diamond", "water, air, diamond", "diamond, air, water"], correctIndex: 1, explanation: "n: air (1.00) < water (1.33) < diamond (2.42)." },
        { prompt: "If n = 1.5, the speed of light in the medium is:", options: ["2.0 ×10⁸ m/s", "4.5 ×10⁸ m/s", "1.5 ×10⁸ m/s", "3.0 ×10⁸ m/s"], correctIndex: 0, explanation: "v = 3.0 ×10⁸ / 1.5 = 2.0 ×10⁸ m/s." },
        { prompt: "Light strikes glass at 45° and refracts to 28°. The refractive index is about:", options: ["0.66", "1.51", "1.61", "2.00"], correctIndex: 1, explanation: "n = sin 45° / sin 28° = 0.707 / 0.469 = 1.51." },
        { prompt: "The apparent depth relation assumes viewing:", options: ["at a large angle", "near the normal (straight down)", "from underwater", "through a prism"], correctIndex: 1, explanation: "The simple relation holds for near-normal (vertical) viewing." },
        { prompt: "Doubling the refractive index of a medium (same real depth) makes the apparent depth:", options: ["double", "half", "unchanged", "four times"], correctIndex: 1, explanation: "Apparent depth = real depth / n, so it halves." },
        { prompt: "The refractive index has units of:", options: ["metres", "m/s", "no units (dimensionless)", "seconds"], correctIndex: 2, explanation: "n is a ratio of two speeds, so it is dimensionless." },
        { prompt: "For a ray going from water to glass, Snell's law uses:", options: ["n_water sin θ_water = n_glass sin θ_glass", "n_water = n_glass", "sin θ_water = sin θ_glass", "θ_water = θ_glass"], correctIndex: 0, explanation: "Snell's law applies with the two media's indices." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "The refractive index of a medium in which light travels at 2.0 ×10⁸ m/s is:", options: ["0.67", "1.5", "2.0", "6.0"], correctIndex: 1, answerKey: "n = c/v = 3.0 ×10⁸ / 2.0 ×10⁸ = 1.5.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define the refractive index of a medium and state why it is always greater than or equal to 1.", answerKey: "The refractive index n = c/v is the ratio of the speed of light in vacuum (c) to its speed in the medium (v). Since light cannot travel faster than c in any medium, v ≤ c, so n ≥ 1.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A coin lies at the bottom of a tank of water (n = 1.33) at a real depth of 40 cm. Find its apparent depth when viewed from directly above.", answerKey: "Apparent depth = real depth / n = 40 cm / 1.33 = 30.1 cm (about 30 cm).", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "When light passes from air into glass, which of these does NOT change?", options: ["speed", "wavelength", "frequency", "direction"], correctIndex: 2, answerKey: "Frequency is unchanged; speed and wavelength decrease and direction bends.", marks: 2 },
        { type: "ESSAY", prompt: "State Snell's law and use it to explain how the refractive index of a glass block could be found by measuring angles of incidence and refraction. Explain also why a swimming pool always looks shallower than it really is.", answerKey: "Snell's law: n₁ sin θ₁ = n₂ sin θ₂. To find the index of a glass block, shine a ray at several angles of incidence θ₁ from air (n₁ ≈ 1), measure the angle of refraction θ₂ inside the glass, and compute n = sin θ₁ / sin θ₂ (a graph of sin θ₁ against sin θ₂ gives a straight line of gradient n). A pool looks shallower because light from the bottom bends away from the normal as it leaves the water into air; the rays reaching the eye appear to come from a point higher up, so the apparent depth = real depth / n is less than the real depth. Reward the law, the method and the apparent-depth reasoning.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 25.4 Total Internal Reflection (https://openstax.org/books/college-physics-2e/pages/25-4-total-internal-reflection)
    {
      slug: "critical-angle-total-internal-reflection",
      title: "Critical Angle and Total Internal Reflection",
      objective:
        "By the end of the topic, learners should be able to define the critical angle, calculate it with θc = sin⁻¹(n₂/n₁), state the conditions for total internal reflection, and describe applications such as optical fibres. (MoE Grade 12 Period I, CONTENTS 3 'Critical angle and the total internal reflection'.)",
      estimatedMinutes: 100,
      notes: `## Critical angle

- When light travels from a **denser** medium to a **less dense** one, it bends away from the normal, so the refracted angle is larger than the incident angle.
- **Critical angle (θc)** — the angle of incidence in the denser medium for which the angle of refraction is exactly **90°** (the refracted ray grazes along the surface).
- From Snell's law with θ₂ = 90°: n₁ sin θc = n₂ sin 90° = n₂, so **θc = sin⁻¹(n₂ / n₁)**.

## Total internal reflection

- **Total internal reflection (TIR)** — when the angle of incidence exceeds the critical angle, no light refracts out; it is **all reflected** back into the denser medium.
- Two conditions must both hold:
1. Light travels from a **denser to a less dense** medium (n₁ > n₂).
2. The angle of incidence is **greater than the critical angle** (θ₁ > θc).
- The reflected ray obeys the ordinary law of reflection.

\`\`\`svg Refraction below, at, and above the critical angle
<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rays from a dense medium: one refracts, one grazes at the critical angle, one is totally internally reflected">
  <rect x="0" y="0" width="260" height="80" fill="#dbeafe"/>
  <line x1="0" y1="80" x2="260" y2="80" stroke="#334155" stroke-width="1.5"/>
  <line x1="130" y1="80" x2="130" y2="10" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="60" y1="140" x2="130" y2="80" stroke="#16a34a" stroke-width="2"/>
  <line x1="130" y1="80" x2="185" y2="20" stroke="#16a34a" stroke-width="2"/>
  <text x="150" y="30" font-size="9" fill="#16a34a">refracts out</text>
  <line x1="95" y1="140" x2="130" y2="80" stroke="#d97706" stroke-width="2"/>
  <line x1="130" y1="80" x2="245" y2="80" stroke="#d97706" stroke-width="2"/>
  <text x="150" y="93" font-size="9" fill="#d97706">grazes (θc)</text>
  <line x1="150" y1="140" x2="130" y2="80" stroke="#dc2626" stroke-width="2"/>
  <line x1="130" y1="80" x2="110" y2="140" stroke="#dc2626" stroke-width="2"/>
  <text x="95" y="120" font-size="9" fill="#dc2626">TIR</text>
</svg>
\`\`\`

## Applications

- **Optical fibres** — light entering a thin fibre strikes the walls above the critical angle and is trapped by repeated total internal reflection; used in telecommunications and endoscopes.
- **Prisms in binoculars and periscopes** — right-angled prisms turn light through 90° or 180° by TIR (better than mirrors, which lose light).
- **Sparkle of diamonds** — a small critical angle (about 24°) traps light inside, so it reflects many times before leaving.

## Common errors

- **Applying TIR going into a denser medium** — it only happens going into a less dense medium (n₁ > n₂).
- **Using θ₂ = 90° in the wrong medium** — the 90° refracted ray is in the less dense medium.
- **Forgetting both conditions** — you need n₁ > n₂ AND θ₁ > θc.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 25.4).** A ray of light travels inside a block of polystyrene (n₁ = 1.49) and reaches a surface with air (n₂ = 1.00). Find the critical angle for total internal reflection.

**Step 1 — Set the refraction angle to 90°.** At the critical angle n₁ sin θc = n₂ sin 90°.

**Step 2 — Rearrange.** sin θc = n₂ / n₁ = 1.00 / 1.49 = 0.671.

**Step 3 — Inverse sine.** θc = sin⁻¹(0.671) = 42.2°.

**Answer.** The critical angle is 42.2°. Any ray inside the polystyrene striking the surface at more than 42.2° to the normal is totally internally reflected and cannot escape into the air.`,
      quiz: [
        { prompt: "The critical angle is the angle of incidence for which the refracted ray:", options: ["is 0°", "grazes along the surface (90°)", "reflects back", "disappears"], correctIndex: 1, explanation: "At the critical angle the refraction angle is 90°." },
        { prompt: "The critical angle formula is:", options: ["θc = sin⁻¹(n₁/n₂)", "θc = sin⁻¹(n₂/n₁)", "θc = cos⁻¹(n₂/n₁)", "θc = n₂/n₁"], correctIndex: 1, explanation: "θc = sin⁻¹(n₂/n₁) with n₁ > n₂." },
        { prompt: "Total internal reflection requires light to go from:", options: ["less dense to denser", "denser to less dense", "vacuum to vacuum", "air to glass"], correctIndex: 1, explanation: "TIR needs n₁ > n₂ (denser to less dense)." },
        { prompt: "TIR occurs when the angle of incidence is:", options: ["less than θc", "equal to 0", "greater than θc", "equal to 90°"], correctIndex: 2, explanation: "Beyond the critical angle all light reflects internally." },
        { prompt: "At the critical angle the angle of refraction equals:", options: ["0°", "45°", "90°", "180°"], correctIndex: 2, explanation: "The refracted ray travels along the boundary at 90°." },
        { prompt: "For water (n = 1.33) to air, the critical angle is about:", options: ["24°", "42°", "49°", "90°"], correctIndex: 2, explanation: "θc = sin⁻¹(1/1.33) = sin⁻¹(0.752) = 48.8° ≈ 49°." },
        { prompt: "Diamond has a small critical angle (about 24°), which explains its:", options: ["colour", "hardness", "sparkle", "weight"], correctIndex: 2, explanation: "A small critical angle traps light by repeated TIR, giving sparkle." },
        { prompt: "Optical fibres carry light by:", options: ["dispersion", "diffraction", "repeated total internal reflection", "absorption"], correctIndex: 2, explanation: "Light bounces along the fibre by TIR." },
        { prompt: "For polystyrene (n = 1.49) to air the critical angle is:", options: ["42.2°", "24°", "90°", "68°"], correctIndex: 0, explanation: "θc = sin⁻¹(1.00/1.49) = 42.2°." },
        { prompt: "Right-angled prisms in binoculars turn light using:", options: ["refraction only", "total internal reflection", "dispersion", "diffraction"], correctIndex: 1, explanation: "Prisms use TIR to reflect light without loss." },
        { prompt: "If a ray inside glass hits the surface at exactly θc, it:", options: ["escapes at 90°", "is reflected back", "disappears", "splits into colours"], correctIndex: 0, explanation: "At exactly θc the refracted ray grazes the surface at 90°." },
        { prompt: "A larger refractive index of the dense medium makes the critical angle:", options: ["larger", "smaller", "unchanged", "zero"], correctIndex: 1, explanation: "θc = sin⁻¹(n₂/n₁): larger n₁ gives smaller θc." },
        { prompt: "The reflected ray in TIR obeys:", options: ["Snell's law", "the law of reflection", "no law", "Ohm's law"], correctIndex: 1, explanation: "The internally reflected ray follows the ordinary law of reflection." },
        { prompt: "Which is NOT an application of total internal reflection?", options: ["optical fibres", "endoscopes", "mirages/prisms", "electromagnets"], correctIndex: 3, explanation: "Electromagnets are not related to TIR." },
        { prompt: "For light going from air into glass, total internal reflection:", options: ["always happens", "cannot happen", "happens at 90°", "happens below θc"], correctIndex: 1, explanation: "TIR cannot occur going into a denser medium." },
        { prompt: "At the critical angle, sin θc equals:", options: ["n₁/n₂", "n₂/n₁", "1", "0"], correctIndex: 1, explanation: "sin θc = n₂/n₁." },
        { prompt: "An endoscope uses optical fibres to:", options: ["heat tissue", "view inside the body", "measure temperature", "produce X-rays"], correctIndex: 1, explanation: "Fibre bundles carry an image out of the body by TIR." },
        { prompt: "For a glass of n = 1.52 to air, the critical angle is about:", options: ["33°", "41°", "49°", "62°"], correctIndex: 1, explanation: "θc = sin⁻¹(1/1.52) = sin⁻¹(0.658) = 41.1° ≈ 41°." },
        { prompt: "Beyond the critical angle, the fraction of light refracted is:", options: ["all of it", "half of it", "none of it", "one quarter"], correctIndex: 2, explanation: "None escapes — it is total internal reflection." },
        { prompt: "The two conditions for TIR are n₁ > n₂ and:", options: ["θ₁ = 0", "θ₁ < θc", "θ₁ > θc", "θ₁ = 45°"], correctIndex: 2, explanation: "The angle of incidence must exceed the critical angle." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "For light passing from a medium (n = 2.00) to air, the critical angle is:", options: ["30°", "45°", "60°", "90°"], correctIndex: 0, answerKey: "θc = sin⁻¹(1.00/2.00) = sin⁻¹(0.5) = 30°.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the two conditions necessary for total internal reflection to occur.", answerKey: "(1) Light must travel from an optically denser medium to a less dense one (n₁ > n₂). (2) The angle of incidence must be greater than the critical angle (θ₁ > θc).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Calculate the critical angle for a water-air boundary (n_water = 1.33).", answerKey: "sin θc = n₂/n₁ = 1.00/1.33 = 0.752. θc = sin⁻¹(0.752) = 48.8° (about 49°).", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Optical fibres transmit light along their length mainly by:", options: ["dispersion", "diffraction", "total internal reflection", "absorption and re-emission"], correctIndex: 2, answerKey: "Light is trapped and guided by repeated total internal reflection.", marks: 2 },
        { type: "ESSAY", prompt: "Define the critical angle, derive θc = sin⁻¹(n₂/n₁) from Snell's law, and describe two useful applications of total internal reflection.", answerKey: "The critical angle is the angle of incidence in the denser medium at which the refracted ray travels along the boundary (angle of refraction = 90°). From Snell's law n₁ sin θc = n₂ sin 90° = n₂, so sin θc = n₂/n₁ and θc = sin⁻¹(n₂/n₁). Applications: (1) Optical fibres/endoscopes — light entering a fibre hits the walls above the critical angle and is guided along by repeated TIR, used in communications and medical imaging. (2) Reflecting prisms in binoculars, periscopes and cameras — right-angled prisms turn light by TIR with almost no loss (better than mirrors). The brilliance/sparkle of cut diamonds is another valid example (small critical angle ≈ 24°). Reward the definition, correct derivation and two valid applications.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 25.6 Image Formation by Lenses & 26.2 Vision Correction (https://openstax.org/books/college-physics-2e/pages/25-6-image-formation-by-lenses)
    {
      slug: "lenses-and-eye-defects",
      title: "Lenses and Eye Defects",
      objective:
        "By the end of the topic, learners should be able to distinguish converging and diverging lenses, use the thin-lens equation and power P = 1/f, and explain how converging and diverging lenses correct farsightedness and nearsightedness. (MoE Grade 12 Period I, CONTENTS 4 'Lenses and eye defects'.)",
      estimatedMinutes: 110,
      notes: `## Types of lens

- **Converging (convex) lens** — thicker in the middle; brings parallel rays together at a real focal point on the far side. Focal length **f is positive**.
- **Diverging (concave) lens** — thinner in the middle; spreads parallel rays out so they appear to come from a virtual focal point on the same side. Focal length **f is negative**.
- **Focal point (F)** — the point where rays parallel to the axis meet (or appear to come from).
- **Focal length (f)** — distance from the lens centre to the focal point.

## Thin-lens equation and power

- **1/dₒ + 1/dᵢ = 1/f**, where dₒ = object distance, dᵢ = image distance.
- **Magnification: m = −dᵢ/dₒ = hᵢ/hₒ.** A negative m means the image is inverted.
- **Power P = 1/f**, measured in **dioptres (D)** with f in metres. A converging lens has positive power; a diverging lens has negative power.

## Images formed by lenses

- **Converging lens, object beyond f:** real, inverted image (positive dᵢ); can be projected on a screen.
- **Converging lens, object inside f:** virtual, upright, magnified image (magnifying glass).
- **Diverging lens:** always a virtual, upright, diminished image.

## The eye and its defects

- The cornea and lens act as a single converging lens forming a real, inverted image on the retina; the ciliary muscles change the lens power (**accommodation**).
- **Short sight (myopia)** — the eye is too powerful/too long; distant objects focus in **front** of the retina. The far point is closer than infinity. **Corrected by a diverging (concave, negative-power) lens.**
- **Long sight (hyperopia)** — the eye is too weak/too short; near objects would focus **behind** the retina. The near point is farther than 25 cm. **Corrected by a converging (convex, positive-power) lens.**

## Common errors

- **Giving a converging lens a negative focal length** — converging is positive, diverging is negative.
- **Swapping the corrections** — short sight uses a diverging lens; long sight uses a converging lens.
- **Forgetting f is in metres** for power in dioptres.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 25.6).** A light bulb is placed 0.750 m from a converging lens of focal length 0.500 m. Find the image distance and the magnification, and state the nature of the image.

**Step 1 — Thin-lens equation.** 1/dₒ + 1/dᵢ = 1/f, so 1/dᵢ = 1/f − 1/dₒ.

**Step 2 — Substitute.** 1/dᵢ = 1/0.500 − 1/0.750 = 2.000 − 1.333 = 0.667 m⁻¹.

**Step 3 — Invert.** dᵢ = 1 / 0.667 = 1.50 m (positive → real image, on the far side).

**Step 4 — Magnification.** m = −dᵢ/dₒ = −1.50 / 0.750 = −2.00.

**Answer.** The image is 1.50 m from the lens, real and inverted, and twice the size of the object (m = −2.00).`,
      quiz: [
        { prompt: "A converging lens is:", options: ["thinner in the middle", "thicker in the middle", "flat", "always diverging"], correctIndex: 1, explanation: "Convex (converging) lenses are thicker in the centre." },
        { prompt: "A diverging lens has a focal length that is:", options: ["positive", "negative", "zero", "infinite"], correctIndex: 1, explanation: "Diverging (concave) lenses have negative focal length." },
        { prompt: "The thin-lens equation is:", options: ["dₒ + dᵢ = f", "1/dₒ + 1/dᵢ = 1/f", "dₒ dᵢ = f", "f = dₒ − dᵢ"], correctIndex: 1, explanation: "1/dₒ + 1/dᵢ = 1/f." },
        { prompt: "Lens power P is defined as:", options: ["f", "1/f", "f²", "dᵢ/dₒ"], correctIndex: 1, explanation: "P = 1/f, in dioptres when f is in metres." },
        { prompt: "The unit of lens power is the:", options: ["newton", "dioptre", "watt", "metre"], correctIndex: 1, explanation: "Power is measured in dioptres (D)." },
        { prompt: "Magnification is given by:", options: ["m = −dᵢ/dₒ", "m = dₒ/dᵢ", "m = dₒ dᵢ", "m = f"], correctIndex: 0, explanation: "m = −dᵢ/dₒ = hᵢ/hₒ." },
        { prompt: "A negative magnification means the image is:", options: ["upright", "inverted", "virtual", "larger"], correctIndex: 1, explanation: "Negative m indicates an inverted image." },
        { prompt: "A magnifying glass is a converging lens with the object:", options: ["beyond f", "inside f", "at infinity", "at 2f"], correctIndex: 1, explanation: "Inside the focal length it forms an enlarged virtual image." },
        { prompt: "A diverging lens always forms an image that is:", options: ["real and inverted", "virtual, upright and diminished", "real and enlarged", "at the focal point"], correctIndex: 1, explanation: "Diverging lenses give virtual, upright, smaller images." },
        { prompt: "The image on the retina of a normal eye is:", options: ["virtual and upright", "real and inverted", "real and upright", "virtual and inverted"], correctIndex: 1, explanation: "The eye forms a real, inverted image on the retina." },
        { prompt: "Changing the focusing power of the eye's lens is called:", options: ["dispersion", "accommodation", "refraction", "diffraction"], correctIndex: 1, explanation: "Accommodation is the adjustment of the lens by the ciliary muscles." },
        { prompt: "Short sight (myopia) is corrected using a:", options: ["converging lens", "diverging lens", "plane mirror", "prism"], correctIndex: 1, explanation: "A diverging (concave, negative-power) lens corrects myopia." },
        { prompt: "Long sight (hyperopia) is corrected using a:", options: ["diverging lens", "converging lens", "concave mirror", "flat glass"], correctIndex: 1, explanation: "A converging (convex, positive-power) lens corrects hyperopia." },
        { prompt: "In myopia, distant objects focus:", options: ["on the retina", "in front of the retina", "behind the retina", "at the cornea"], correctIndex: 1, explanation: "The eye is too powerful, so the image forms in front of the retina." },
        { prompt: "A lens of focal length 0.25 m has a power of:", options: ["0.25 D", "4.0 D", "2.5 D", "25 D"], correctIndex: 1, explanation: "P = 1/f = 1/0.25 = 4.0 D." },
        { prompt: "A converging lens has power:", options: ["negative", "positive", "zero", "always 1 D"], correctIndex: 1, explanation: "Converging lens power is positive." },
        { prompt: "An object 30 cm from a converging lens of f = 10 cm gives an image at:", options: ["15 cm", "7.5 cm", "30 cm", "5 cm"], correctIndex: 0, explanation: "1/dᵢ = 1/10 − 1/30 = 0.0667, dᵢ = 15 cm." },
        { prompt: "The far point of a myopic eye is:", options: ["at infinity", "closer than infinity", "at 25 cm", "behind the eye"], correctIndex: 1, explanation: "Myopic eyes cannot focus beyond a near far point." },
        { prompt: "A correcting lens of power −3.5 D is:", options: ["converging", "diverging", "plane", "impossible"], correctIndex: 1, explanation: "Negative power means a diverging lens (myopia correction)." },
        { prompt: "The near point of a normal eye is about:", options: ["2.5 cm", "25 cm", "250 cm", "infinity"], correctIndex: 1, explanation: "The normal near point is about 25 cm." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A lens of focal length 0.50 m has a power of:", options: ["0.5 D", "2.0 D", "5.0 D", "50 D"], correctIndex: 1, answerKey: "P = 1/f = 1/0.50 = 2.0 D.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State how a converging lens and a diverging lens each affect a beam of parallel light.", answerKey: "A converging (convex) lens bends parallel rays together so they meet at a real focal point beyond the lens. A diverging (concave) lens spreads parallel rays apart so they appear to come from a virtual focal point on the same side as the incoming light.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "An object is placed 0.60 m from a converging lens of focal length 0.20 m. Find the image distance.", answerKey: "1/dᵢ = 1/f − 1/dₒ = 1/0.20 − 1/0.60 = 5.00 − 1.67 = 3.33 m⁻¹. dᵢ = 1/3.33 = 0.30 m (real, inverted image).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Short-sightedness (myopia) is corrected with a:", options: ["converging lens", "diverging lens", "plane mirror", "convex mirror"], correctIndex: 1, answerKey: "A diverging (concave, negative-power) lens corrects myopia by moving the image back onto the retina.", marks: 2 },
        { type: "ESSAY", prompt: "Explain the difference between short sight (myopia) and long sight (hyperopia): where the image forms relative to the retina in each case, and which type of lens corrects each defect and why.", answerKey: "Short sight (myopia): the eye is too powerful or too long, so light from distant objects converges to a focus in front of the retina and the far point is closer than infinity; distant objects look blurred. It is corrected with a diverging (concave, negative-power) lens, which spreads the rays slightly before they enter the eye so the image moves back onto the retina. Long sight (hyperopia): the eye is too weak or too short, so light from near objects would focus behind the retina and the near point is farther than 25 cm; near objects look blurred. It is corrected with a converging (convex, positive-power) lens, which adds converging power so the image forms on the retina. Reward correct image positions and correct lens choice with reasoning.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 25.5 Dispersion: The Rainbow and Prisms (https://openstax.org/books/college-physics-2e/pages/25-5-dispersion-the-rainbow-and-prisms) + LibreTexts — Additive and Subtractive Colour (https://human.libretexts.org/Courses/Coalinga_College/Color_Theory_and_Applications/03:_PART_3-_Applications_with_Color/3.02:_Additive_and_Subtractive_Colour)
    {
      slug: "dispersion-and-colour",
      title: "Dispersion, Primary Colours and Primary Pigments",
      objective:
        "By the end of the topic, learners should be able to explain the dispersion of white light by a prism, describe the formation of a rainbow, and distinguish additive primary colours from subtractive primary pigments. (MoE Grade 12 Period I, CONTENTS 5 'Dispersion' and the objective 'distinguish between primary colours and primary pigments'.)",
      estimatedMinutes: 100,
      notes: `## Dispersion of white light

- **Dispersion** — the spreading of white light into its spectrum of colours.
- White light is a mixture of all visible colours. For a given medium the refractive index **depends on wavelength**: n is larger for shorter wavelengths.
- So **violet (short wavelength) bends most** and **red (long wavelength) bends least**. This unequal bending separates the colours.
- Spectrum order (least to most deviation): **red, orange, yellow, green, blue, violet** (ROYGBIV, with indigo between blue and violet).

## Prisms and rainbows

- A **prism** disperses white light: light refracts on entering, and again on leaving, and because the bending depends on wavelength the colours emerge spread out into a spectrum.
- A **rainbow** forms in raindrops by a combination of refraction and reflection: light refracts entering the drop, reflects off the back inside surface, then refracts again on leaving — separating the colours.

\`\`\`svg White light dispersed by a triangular prism
<svg viewBox="0 0 240 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A prism splitting white light into a spectrum from red to violet">
  <polygon points="110,20 80,110 150,110" fill="#e2e8f0" stroke="#94a3b8"/>
  <line x1="20" y1="70" x2="92" y2="70" stroke="#334155" stroke-width="2.5"/>
  <text x="25" y="62" font-size="9" fill="#334155">white light</text>
  <line x1="130" y1="75" x2="225" y2="60" stroke="#dc2626" stroke-width="2"/>
  <line x1="130" y1="77" x2="225" y2="72" stroke="#f59e0b" stroke-width="2"/>
  <line x1="130" y1="79" x2="225" y2="84" stroke="#16a34a" stroke-width="2"/>
  <line x1="130" y1="81" x2="225" y2="96" stroke="#2563eb" stroke-width="2"/>
  <line x1="130" y1="83" x2="225" y2="108" stroke="#7c3aed" stroke-width="2"/>
  <text x="205" y="55" font-size="9" fill="#dc2626">red</text>
  <text x="200" y="118" font-size="9" fill="#7c3aed">violet</text>
</svg>
\`\`\`

## Primary colours of light (additive)

- **Additive primary colours: red, green and blue (RGB).** These are colours of **light**.
- Adding them: red + green = yellow; green + blue = cyan; red + blue = magenta; **red + green + blue = white**.
- Additive mixing is used in TV and computer screens, which emit light.

## Primary pigments (subtractive)

- **Subtractive primary pigments: cyan, magenta and yellow (CMY).** These are **paints, inks or dyes** that work by absorbing (subtracting) light.
- Each pigment absorbs one additive primary and reflects the other two: cyan absorbs red, magenta absorbs green, yellow absorbs blue.
- Mixing pigments removes more light, so the mix gets **darker**; **cyan + magenta + yellow ≈ black**. Subtractive mixing is used in printing and painting.

| Feature | Primary colours (light) | Primary pigments (paint) |
| --- | --- | --- |
| Type of mixing | Additive | Subtractive |
| The three primaries | Red, Green, Blue | Cyan, Magenta, Yellow |
| All three together | White | Black (dark) |
| Used in | Screens, stage lights | Printing, painting |

## Common errors

- **Saying red, yellow, blue are the primary colours of light** — the additive primaries of light are red, green, blue.
- **Thinking pigments add light** — pigments subtract (absorb) light, so mixing them darkens.
- **Claiming dispersion changes colour** — it separates existing colours; frequency (colour) is unchanged.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 25.5 and LibreTexts colour theory).** (a) When white light passes through a prism, which colour is deviated most and which least, and why? (b) A stage lamp shines red light and another shines green light onto the same white screen. What colour appears where the beams overlap, and what is this kind of colour mixing called?

**Part (a).** The refractive index of the glass is greater for shorter wavelengths. Violet has the shortest wavelength, so it experiences the largest refractive index and is **deviated most**. Red has the longest wavelength, the smallest index, and is **deviated least**. This unequal bending spreads white light into the spectrum red → violet.

**Part (b).** Adding red light and green light is **additive** colour mixing (colours of light). Red + green gives **yellow**. So the overlap region appears yellow, and this is additive mixing.

**Answer.** (a) Violet is bent most and red least, because n is larger for shorter wavelengths. (b) The overlap looks yellow; this is additive colour mixing.`,
      quiz: [
        { prompt: "Dispersion is the:", options: ["reflection of light", "spreading of white light into its colours", "bending at a mirror", "absorption of light"], correctIndex: 1, explanation: "Dispersion separates white light into a spectrum of colours." },
        { prompt: "Dispersion happens because the refractive index depends on:", options: ["temperature only", "wavelength", "brightness", "the observer"], correctIndex: 1, explanation: "n varies with wavelength, so colours bend by different amounts." },
        { prompt: "In a prism, the colour bent the most is:", options: ["red", "green", "yellow", "violet"], correctIndex: 3, explanation: "Violet has the shortest wavelength and the largest index, so it bends most." },
        { prompt: "The colour bent the least in a prism is:", options: ["violet", "blue", "red", "green"], correctIndex: 2, explanation: "Red has the longest wavelength and bends least." },
        { prompt: "The order of the spectrum from red is:", options: ["red, orange, yellow, green, blue, violet", "red, blue, green, yellow", "violet, red, green", "red, green, red"], correctIndex: 0, explanation: "ROYGBIV: red, orange, yellow, green, blue, (indigo), violet." },
        { prompt: "A rainbow is formed by refraction plus:", options: ["diffraction", "internal reflection in raindrops", "absorption", "polarisation"], correctIndex: 1, explanation: "Light refracts, reflects inside the drop, then refracts again." },
        { prompt: "White light is:", options: ["a single colour", "a mixture of all visible colours", "only red and blue", "invisible"], correctIndex: 1, explanation: "White light contains all the colours of the spectrum." },
        { prompt: "The additive primary colours of light are:", options: ["red, yellow, blue", "red, green, blue", "cyan, magenta, yellow", "black, white, grey"], correctIndex: 1, explanation: "The additive primaries are red, green and blue (RGB)." },
        { prompt: "Red light + green light + blue light gives:", options: ["black", "white", "brown", "grey"], correctIndex: 1, explanation: "Adding all three additive primaries produces white." },
        { prompt: "Red light + green light gives:", options: ["yellow", "cyan", "magenta", "white"], correctIndex: 0, explanation: "Additive: red + green = yellow." },
        { prompt: "The subtractive primary pigments are:", options: ["red, green, blue", "cyan, magenta, yellow", "black, white, red", "orange, indigo, violet"], correctIndex: 1, explanation: "The subtractive primaries are cyan, magenta and yellow (CMY)." },
        { prompt: "Mixing pigments makes the result:", options: ["brighter", "darker", "white", "invisible"], correctIndex: 1, explanation: "Pigments absorb (subtract) light, so mixing darkens the colour." },
        { prompt: "Cyan pigment absorbs which colour of light?", options: ["red", "green", "blue", "yellow"], correctIndex: 0, explanation: "Cyan absorbs red and reflects green and blue." },
        { prompt: "Yellow pigment absorbs which colour?", options: ["red", "green", "blue", "cyan"], correctIndex: 2, explanation: "Yellow absorbs blue and reflects red and green." },
        { prompt: "Cyan + magenta + yellow pigments give approximately:", options: ["white", "black", "green", "red"], correctIndex: 1, explanation: "All three pigments together absorb most light, giving black." },
        { prompt: "Additive colour mixing is used in:", options: ["printing", "painting", "TV and computer screens", "dyeing cloth"], correctIndex: 2, explanation: "Screens emit and add light — additive mixing." },
        { prompt: "Subtractive colour mixing is used in:", options: ["stage lighting", "printing and painting", "TV screens", "laser pointers"], correctIndex: 1, explanation: "Inks and paints absorb light — subtractive mixing." },
        { prompt: "During dispersion, the frequency (colour) of each ray:", options: ["changes", "stays the same", "becomes white", "doubles"], correctIndex: 1, explanation: "Dispersion separates existing colours; frequency is unchanged." },
        { prompt: "Magenta pigment absorbs which colour of light?", options: ["red", "green", "blue", "white"], correctIndex: 1, explanation: "Magenta absorbs green and reflects red and blue." },
        { prompt: "Green light + blue light (additive) gives:", options: ["yellow", "cyan", "magenta", "white"], correctIndex: 1, explanation: "Additive: green + blue = cyan." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "In a glass prism, the colour that is refracted (deviated) the most is:", options: ["red", "yellow", "green", "violet"], correctIndex: 3, answerKey: "Violet has the shortest wavelength and the largest refractive index, so it is deviated most.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain why white light is split into a spectrum when it passes through a prism.", answerKey: "White light is a mixture of colours. The refractive index of the glass depends on wavelength (larger for shorter wavelengths), so each colour is refracted by a different amount. Violet bends most and red least, so the colours emerge separated into a spectrum (red, orange, yellow, green, blue, violet).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State the three additive primary colours of light and the three subtractive primary pigments, and say what you get when you add all three primary colours of light.", answerKey: "Additive primary colours of light: red, green, blue (RGB). Subtractive primary pigments: cyan, magenta, yellow (CMY). Adding all three primary colours of light gives white.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "When cyan, magenta and yellow pigments are mixed together, the result is approximately:", options: ["white", "black", "red", "green"], correctIndex: 1, answerKey: "The three subtractive primaries absorb most of the light, so the mixture appears black.", marks: 2 },
        { type: "ESSAY", prompt: "Distinguish between the additive mixing of coloured light and the subtractive mixing of pigments. Name the primaries in each case, state the result of combining all three, and give one everyday use of each.", answerKey: "Additive mixing combines coloured light: the primaries are red, green and blue (RGB), and adding all three gives white. It is used in TV screens, computer monitors and stage lighting, which emit light. Subtractive mixing combines pigments (paints, inks, dyes): the primaries are cyan, magenta and yellow (CMY). Each pigment absorbs one additive primary (cyan absorbs red, magenta absorbs green, yellow absorbs blue), so mixing them removes more light and the colour gets darker; combining all three gives (near) black. It is used in printing and painting. Reward the additive/subtractive contrast, correct primaries, both results (white vs black) and one use of each.", marks: 8 },
      ],
    },
  ],
};
