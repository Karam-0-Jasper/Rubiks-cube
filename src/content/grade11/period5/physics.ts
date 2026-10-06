import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 11,
// Semester Two, Period V: Waves. Topics follow the syllabus CONTENTS item by
// item: nature, characteristics and properties of waves; types of waves;
// sound waves; the Doppler effect; vibrations in strings and tubes; and beats.
// Sourced from OpenStax College Physics 2e and University Physics Vol. 1
// (read via WebFetch).
export const physicsG11P5: PeriodContent = {
  grade: 11,
  number: 5,
  title: "Waves",
  summary:
    "Period V of the MoE Grade 11 Physics syllabus. Learners describe the nature, characteristics and properties of waves and use v = fλ, classify waves as transverse or longitudinal and mechanical or electromagnetic, study the production and speed of sound, analyse the Doppler effect, examine standing waves (resonance) in strings and tubes, and calculate the beat frequency of two close notes.",
  topics: [
    // source: OpenStax — College Physics 2e, 16.9 Waves (https://openstax.org/books/college-physics-2e/pages/16-9-waves)
    {
      slug: "nature-and-properties-of-waves",
      title: "Nature, Characteristics and Properties of Waves",
      objective:
        "By the end of the topic, learners should be able to define a wave, identify its characteristics (amplitude, wavelength, frequency, period, speed), use v = fλ, and list the properties of waves. (MoE Grade 11 Period V, CONTENTS 1 'Nature, characteristics and properties of waves'.)",
      estimatedMinutes: 100,
      notes: `## What a wave is

- **Wave** — a disturbance that travels (propagates) from where it was created, transferring **energy** without transferring **matter**.
- The particles of the medium vibrate about fixed positions; they do not travel with the wave.
- Example: an ocean wave carries energy across the surface while the water largely stays in place, bobbing up and down.

## Characteristics of a wave

- **Amplitude (X)** — the maximum displacement from the rest position (crest height or trough depth). Related to the wave's energy.
- **Wavelength (λ)** — the distance between two adjacent identical points (e.g. crest to crest). SI unit: metre.
- **Period (T)** — the time for one complete cycle. SI unit: second.
- **Frequency (f)** — the number of cycles per second; f = 1/T. SI unit: hertz (Hz).
- **Wave speed (v)** — the speed at which the disturbance travels.

## The wave equation

- **v = f λ** (equivalently v = λ/T).
- For a given medium, the speed is roughly constant, so higher frequency means shorter wavelength.

## Properties of waves

- **Reflection** — a wave bounces back when it meets a barrier.
- **Refraction** — a wave changes direction (bends) when its speed changes on entering a new medium.
- **Diffraction** — a wave spreads out as it passes through a gap or around an obstacle.
- **Interference** — two waves overlap; they reinforce (constructive) or cancel (destructive).
- **Polarization** — restricting the vibrations of a **transverse** wave to one plane (does not occur for longitudinal waves).

\`\`\`svg Parts of a transverse wave: amplitude and wavelength
<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A transverse wave showing crest, trough, amplitude and wavelength">
  <line x1="10" y1="60" x2="290" y2="60" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
  <path d="M10 60 Q 47 15 85 60 T 160 60 T 235 60 T 290 60" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="47" y1="60" x2="47" y2="28" stroke="#dc2626" stroke-width="1.5"/>
  <text x="52" y="40" font-size="10" fill="#dc2626">amplitude</text>
  <line x1="47" y1="18" x2="122" y2="18" stroke="#16a34a" stroke-width="1.5"/>
  <text x="60" y="14" font-size="10" fill="#16a34a">wavelength λ</text>
  <text x="150" y="100" font-size="10" fill="#334155">crest up, trough down</text>
</svg>
\`\`\`

## Common errors

- **Thinking matter travels with the wave** — only energy is transferred.
- **Confusing period and frequency** — they are reciprocals (f = 1/T).
- **Assuming all waves can be polarized** — only transverse waves can.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 16.9).** An ocean wave has crests 10.0 m apart, and a floating gull bobs up and down through one complete cycle every 5.00 s. Find the speed of the wave.

**Step 1 — Identify the quantities.** Wavelength λ = 10.0 m; period T = 5.00 s.

**Step 2 — Choose the equation.** v = λ / T (equivalent to v = fλ, since f = 1/T).

**Step 3 — Substitute.** v = 10.0 m / 5.00 s.

**Step 4 — Evaluate.** v = 2.00 m/s.

**Answer.** The wave travels at 2.00 m/s. (Check: f = 1/T = 0.200 Hz, and v = fλ = 0.200 × 10.0 = 2.00 m/s.)`,
      quiz: [
        { prompt: "A wave transfers:", options: ["matter but not energy", "energy but not matter", "both matter and energy", "neither"], correctIndex: 1, explanation: "Waves carry energy without transporting the medium." },
        { prompt: "The maximum displacement from rest is the:", options: ["wavelength", "amplitude", "period", "frequency"], correctIndex: 1, explanation: "Amplitude is the maximum displacement from equilibrium." },
        { prompt: "The distance between adjacent crests is the:", options: ["amplitude", "wavelength", "frequency", "period"], correctIndex: 1, explanation: "Wavelength λ is the distance between identical adjacent points." },
        { prompt: "Frequency is related to period by:", options: ["f = T", "f = 1/T", "f = T²", "f = 2T"], correctIndex: 1, explanation: "f = 1/T." },
        { prompt: "The SI unit of frequency is the:", options: ["metre", "second", "hertz", "newton"], correctIndex: 2, explanation: "Frequency is measured in hertz (Hz)." },
        { prompt: "The wave equation is:", options: ["v = f/λ", "v = fλ", "v = λ/f", "v = f + λ"], correctIndex: 1, explanation: "v = fλ." },
        { prompt: "A wave of frequency 5 Hz and wavelength 4 m has speed:", options: ["1.25 m/s", "20 m/s", "9 m/s", "0.8 m/s"], correctIndex: 1, explanation: "v = fλ = 5 × 4 = 20 m/s." },
        { prompt: "Bouncing back off a barrier is called:", options: ["refraction", "reflection", "diffraction", "interference"], correctIndex: 1, explanation: "Reflection is the wave bouncing back." },
        { prompt: "Bending as it enters a new medium is:", options: ["reflection", "refraction", "diffraction", "polarization"], correctIndex: 1, explanation: "Refraction is the change in direction due to a speed change." },
        { prompt: "Spreading out through a gap is:", options: ["diffraction", "reflection", "interference", "refraction"], correctIndex: 0, explanation: "Diffraction is the spreading of a wave through a gap or around an obstacle." },
        { prompt: "Two waves reinforcing or cancelling is:", options: ["reflection", "refraction", "interference", "polarization"], correctIndex: 2, explanation: "Interference is the superposition of two waves." },
        { prompt: "Polarization can occur only for:", options: ["longitudinal waves", "transverse waves", "sound waves", "all waves"], correctIndex: 1, explanation: "Only transverse waves can be polarized." },
        { prompt: "A wave has period 0.25 s. Its frequency is:", options: ["4 Hz", "0.25 Hz", "2.5 Hz", "40 Hz"], correctIndex: 0, explanation: "f = 1/T = 1/0.25 = 4 Hz." },
        { prompt: "In a medium, if frequency increases the wavelength:", options: ["increases", "decreases", "stays the same", "becomes zero"], correctIndex: 1, explanation: "With v fixed, v = fλ means higher f gives shorter λ." },
        { prompt: "The particles of the medium in a wave:", options: ["travel with the wave", "vibrate about fixed positions", "disappear", "gain mass"], correctIndex: 1, explanation: "Particles oscillate about their rest positions." },
        { prompt: "A wave of speed 340 m/s and frequency 170 Hz has wavelength:", options: ["2 m", "0.5 m", "510 m", "170 m"], correctIndex: 0, explanation: "λ = v/f = 340/170 = 2 m." },
        { prompt: "Amplitude is related to a wave's:", options: ["speed", "energy", "wavelength", "medium"], correctIndex: 1, explanation: "Larger amplitude carries more energy." },
        { prompt: "The time for one complete cycle is the:", options: ["frequency", "period", "amplitude", "speed"], correctIndex: 1, explanation: "Period T is the time for one cycle." },
        { prompt: "A wave of wavelength 0.5 m and speed 10 m/s has frequency:", options: ["5 Hz", "20 Hz", "0.05 Hz", "10.5 Hz"], correctIndex: 1, explanation: "f = v/λ = 10/0.5 = 20 Hz." },
        { prompt: "Which is NOT a wave property?", options: ["reflection", "refraction", "combustion", "diffraction"], correctIndex: 2, explanation: "Combustion is a chemical process, not a wave property." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A wave has a frequency of 50 Hz and a wavelength of 3 m. Its speed is:", options: ["150 m/s", "16.7 m/s", "53 m/s", "0.06 m/s"], correctIndex: 0, answerKey: "v = fλ = 50 × 3 = 150 m/s.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define amplitude, wavelength and frequency of a wave.", answerKey: "Amplitude — maximum displacement from the rest position. Wavelength — the distance between two adjacent identical points (e.g. crest to crest). Frequency — the number of complete cycles per second (Hz), equal to 1/T.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A sound wave travels at 340 m/s with a frequency of 680 Hz. Calculate its wavelength.", answerKey: "λ = v/f = 340/680 = 0.50 m.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which property occurs only for transverse waves?", options: ["reflection", "refraction", "diffraction", "polarization"], correctIndex: 3, answerKey: "Only transverse waves can be polarized.", marks: 2 },
        { type: "ESSAY", prompt: "Explain what is meant by saying a wave transfers energy without transferring matter, and briefly describe four properties common to waves (reflection, refraction, diffraction, interference).", answerKey: "As a wave passes, the particles of the medium vibrate about fixed positions and return to rest; they do not travel along with the wave, so no matter is carried from one place to another. What moves forward is the disturbance, which carries energy (e.g. a cork bobs on a water wave but stays roughly in place). Reflection: a wave bounces back off a barrier. Refraction: a wave changes direction when its speed changes on entering a new medium. Diffraction: a wave spreads out through a gap or around an obstacle. Interference: two waves overlap and reinforce (constructive) or cancel (destructive). Reward the energy-not-matter explanation and correct descriptions of the four properties.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 16.9 Waves (transverse and longitudinal) (https://openstax.org/books/college-physics-2e/pages/16-9-waves)
    {
      slug: "types-of-waves",
      title: "Types of Waves",
      objective:
        "By the end of the topic, learners should be able to distinguish transverse from longitudinal waves and mechanical from electromagnetic waves, with examples of each. (MoE Grade 11 Period V, CONTENTS 2 'Types of waves'.)",
      estimatedMinutes: 90,
      notes: `## Transverse and longitudinal waves

- **Transverse wave** — the particles vibrate **perpendicular** to the direction of travel.
- Has crests and troughs. Examples: waves on a string, water surface waves, all electromagnetic waves (light).
- **Longitudinal wave** — the particles vibrate **parallel** to the direction of travel.
- Has compressions (particles close) and rarefactions (particles spread out). Examples: sound waves, a compressed spring (slinky).

| Feature | Transverse | Longitudinal |
| --- | --- | --- |
| Particle vibration | perpendicular to travel | parallel to travel |
| Shape | crests and troughs | compressions and rarefactions |
| Can be polarized | yes | no |
| Examples | light, string, water | sound, slinky compression |

## Mechanical and electromagnetic waves

- **Mechanical wave** — needs a **material medium** (solid, liquid or gas) to travel; cannot pass through a vacuum. Examples: sound, water waves, seismic waves.
- **Electromagnetic (EM) wave** — an oscillation of electric and magnetic fields; needs **no medium** and travels through a vacuum at the speed of light (3 × 10⁸ m/s). Examples: light, radio waves, X-rays. All EM waves are transverse.

\`\`\`svg Transverse (perpendicular) versus longitudinal (parallel) vibration
<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A transverse wave with crests and a longitudinal wave with compressions">
  <path d="M10 35 Q 40 10 70 35 T 130 35 T 190 35" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="10" y="60" font-size="10" fill="#2563eb">transverse: crests and troughs</text>
  <g stroke="#dc2626" stroke-width="2">
    <line x1="20" y1="90" x2="20" y2="110"/>
    <line x1="26" y1="90" x2="26" y2="110"/>
    <line x1="40" y1="90" x2="40" y2="110"/>
    <line x1="60" y1="90" x2="60" y2="110"/>
    <line x1="66" y1="90" x2="66" y2="110"/>
    <line x1="80" y1="90" x2="80" y2="110"/>
    <line x1="100" y1="90" x2="100" y2="110"/>
    <line x1="106" y1="90" x2="106" y2="110"/>
  </g>
  <text x="10" y="125" font-size="10" fill="#dc2626">longitudinal: compressions and rarefactions</text>
</svg>
\`\`\`

## Common errors

- **Calling sound a transverse wave** — sound is longitudinal.
- **Thinking light needs a medium** — EM waves travel through a vacuum.
- **Confusing compression with amplitude** — compressions are regions of high particle density.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 16.9).** Classify each of the following and, for the electromagnetic one, state its speed in a vacuum: (a) a sound wave in air, (b) a wave on a guitar string, (c) a radio wave.

**Step 1 — Sound in air.** Air particles vibrate back and forth along the direction the sound travels → **longitudinal**. It needs a medium → **mechanical**.

**Step 2 — Guitar string.** The string moves up and down, perpendicular to the wave's travel along the string → **transverse**. It needs the string → **mechanical**.

**Step 3 — Radio wave.** An oscillation of electric and magnetic fields, needing no medium → **electromagnetic** (and transverse). In a vacuum it travels at the speed of light, c = 3 × 10⁸ m/s.

**Answer.** (a) longitudinal, mechanical; (b) transverse, mechanical; (c) transverse, electromagnetic, speed 3 × 10⁸ m/s.`,
      quiz: [
        { prompt: "In a transverse wave, particles vibrate:", options: ["parallel to travel", "perpendicular to travel", "in circles only", "not at all"], correctIndex: 1, explanation: "Transverse vibration is perpendicular to the direction of travel." },
        { prompt: "In a longitudinal wave, particles vibrate:", options: ["perpendicular to travel", "parallel to travel", "randomly", "vertically only"], correctIndex: 1, explanation: "Longitudinal vibration is parallel to the direction of travel." },
        { prompt: "Sound is a ___ wave:", options: ["transverse", "longitudinal", "electromagnetic", "polarized"], correctIndex: 1, explanation: "Sound is a longitudinal wave." },
        { prompt: "Light is a ___ wave:", options: ["longitudinal", "transverse", "mechanical", "sound"], correctIndex: 1, explanation: "Light (EM) is transverse." },
        { prompt: "A wave that needs a medium is:", options: ["electromagnetic", "mechanical", "always transverse", "always light"], correctIndex: 1, explanation: "Mechanical waves require a material medium." },
        { prompt: "A wave that can travel through a vacuum is:", options: ["mechanical", "electromagnetic", "sound", "seismic"], correctIndex: 1, explanation: "EM waves need no medium." },
        { prompt: "Transverse waves have:", options: ["compressions and rarefactions", "crests and troughs", "no shape", "only nodes"], correctIndex: 1, explanation: "Transverse waves show crests and troughs." },
        { prompt: "Longitudinal waves have:", options: ["crests and troughs", "compressions and rarefactions", "polarization", "only amplitude"], correctIndex: 1, explanation: "Longitudinal waves have compressions and rarefactions." },
        { prompt: "The speed of light in a vacuum is:", options: ["340 m/s", "3 × 10⁸ m/s", "9.8 m/s", "1500 m/s"], correctIndex: 1, explanation: "c = 3 × 10⁸ m/s." },
        { prompt: "Which cannot be polarized?", options: ["light", "a wave on a string", "sound (longitudinal)", "radio waves"], correctIndex: 2, explanation: "Longitudinal waves like sound cannot be polarized." },
        { prompt: "Which is a mechanical wave?", options: ["radio wave", "X-ray", "sound wave", "light"], correctIndex: 2, explanation: "Sound is mechanical (needs a medium)." },
        { prompt: "Which is an electromagnetic wave?", options: ["sound", "water wave", "radio wave", "seismic wave"], correctIndex: 2, explanation: "Radio waves are electromagnetic." },
        { prompt: "A slinky pushed and pulled along its length shows a:", options: ["transverse wave", "longitudinal wave", "light wave", "polarized wave"], correctIndex: 1, explanation: "Compressions travel along the slinky — longitudinal." },
        { prompt: "All electromagnetic waves are:", options: ["longitudinal", "transverse", "mechanical", "audible"], correctIndex: 1, explanation: "EM waves are transverse." },
        { prompt: "Sound cannot travel through:", options: ["air", "water", "a vacuum", "steel"], correctIndex: 2, explanation: "Sound is mechanical and needs a medium; it cannot cross a vacuum." },
        { prompt: "Water surface waves are approximately:", options: ["longitudinal", "transverse", "electromagnetic", "polarized sound"], correctIndex: 1, explanation: "Water waves are treated as transverse (surface moves up and down)." },
        { prompt: "A compression in a longitudinal wave is a region where particles are:", options: ["far apart", "close together", "at rest", "charged"], correctIndex: 1, explanation: "Compressions are regions of high particle density." },
        { prompt: "Seismic P-waves (push-pull) are:", options: ["transverse", "longitudinal", "electromagnetic", "light"], correctIndex: 1, explanation: "P-waves are longitudinal." },
        { prompt: "Which pair is correctly matched?", options: ["sound – transverse", "light – mechanical", "radio – electromagnetic", "string wave – longitudinal"], correctIndex: 2, explanation: "Radio waves are electromagnetic; the others are mismatched." },
        { prompt: "Both transverse and longitudinal sound-type mechanical waves require:", options: ["a vacuum", "a medium", "electric fields", "polarization"], correctIndex: 1, explanation: "Mechanical waves need a material medium." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Which of the following is a longitudinal wave?", options: ["light", "a wave on a rope", "sound in air", "a radio wave"], correctIndex: 2, answerKey: "Sound is a longitudinal mechanical wave.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between a transverse and a longitudinal wave, giving one example of each.", answerKey: "In a transverse wave the particles vibrate perpendicular to the direction of travel (e.g. a wave on a string or light). In a longitudinal wave the particles vibrate parallel to the direction of travel (e.g. sound). Transverse waves have crests and troughs; longitudinal waves have compressions and rarefactions.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State the difference between a mechanical and an electromagnetic wave, giving one example of each.", answerKey: "A mechanical wave needs a material medium and cannot travel through a vacuum (e.g. sound, water waves). An electromagnetic wave is an oscillation of electric and magnetic fields, needs no medium, and travels through a vacuum at the speed of light (e.g. light, radio waves).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which wave can travel through the vacuum of space?", options: ["sound", "a water wave", "a seismic wave", "a light wave"], correctIndex: 3, answerKey: "Light is electromagnetic and needs no medium.", marks: 2 },
        { type: "ESSAY", prompt: "Using suitable examples, explain the two ways of classifying waves — (i) transverse versus longitudinal, and (ii) mechanical versus electromagnetic — and show how a single wave can be described under both classifications.", answerKey: "(i) Transverse/longitudinal classifies by the direction of particle vibration relative to travel: transverse waves vibrate perpendicular (light, string waves — crests and troughs), longitudinal waves vibrate parallel (sound — compressions and rarefactions). (ii) Mechanical/electromagnetic classifies by whether a medium is required: mechanical waves need matter (sound, water waves), electromagnetic waves need none and cross a vacuum at c = 3×10⁸ m/s (light, radio). A single wave fits both schemes — e.g. sound is both longitudinal and mechanical; light is both transverse and electromagnetic. Reward correct use of both classifications and a combined example.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 17.2 Speed of Sound, Frequency, and Wavelength (https://openstax.org/books/college-physics-2e/pages/17-2-speed-of-sound-frequency-and-wavelength)
    {
      slug: "sound-waves",
      title: "Sound Waves: Production, Characteristics and Transmission",
      objective:
        "By the end of the topic, learners should be able to describe how sound is produced and transmitted, state that it is a longitudinal wave needing a medium, and calculate the speed of sound and its dependence on temperature and medium. (MoE Grade 11 Period V, CONTENTS 3 'Sound waves: production, characteristics and transmission'.)",
      estimatedMinutes: 100,
      notes: `## Production of sound

- **Sound** is produced by **vibrating objects** (vocal cords, a drum skin, a loudspeaker cone, a guitar string).
- The vibration pushes and pulls the surrounding air, creating **compressions** (high pressure) and **rarefactions** (low pressure) that travel outward.
- Sound is a **longitudinal** wave: air particles vibrate back and forth along the direction of travel.

## Transmission of sound

- Sound needs a **material medium** (solid, liquid or gas); it **cannot travel through a vacuum**.
- It travels because each layer of the medium passes the vibration to the next.

## Speed of sound

- In air at 0°C the speed of sound is about **331 m/s**.
- It **increases with temperature**: v = 331 √(T/273), with T in kelvin, or approximately **v ≈ 331 + 0.6 T_c** (T_c in °C). At 20°C it is about 343 m/s.
- It depends strongly on the **medium** — fastest in solids, slower in liquids, slowest in gases.

| Medium | Approx. speed of sound (m/s) |
| --- | --- |
| Steel | 5960 |
| Water (fresh) | 1480 |
| Air at 0°C | 331 |

- The wave equation v = fλ applies to sound: for a fixed speed, high-frequency (high-pitch) sounds have short wavelengths.

## Characteristics of sound

- **Pitch** depends on frequency (high frequency → high pitch).
- **Loudness** depends on amplitude (large amplitude → loud).
- **Quality (timbre)** distinguishes instruments playing the same note.

## Common errors

- **Thinking sound travels through a vacuum** — it cannot; there are no particles to vibrate.
- **Assuming sound is transverse** — it is longitudinal.
- **Ignoring temperature** — the speed of sound in air rises with temperature.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 17.2).** Find the wavelength of a 20.0 Hz sound wave travelling in air at 30.0°C.

**Step 1 — Speed of sound at 30°C.** Convert to kelvin: T = 30.0 + 273 = 303 K. v = 331 √(T/273) = 331 √(303/273).

**Step 2 — Evaluate the speed.** 303/273 = 1.110, √1.110 = 1.054, so v = 331 × 1.054 = 348.7 m/s.

**Step 3 — Wavelength.** From v = fλ, λ = v/f = 348.7 / 20.0.

**Step 4 — Evaluate.** λ = 17.4 m.

**Answer.** The wavelength is about 17.4 m — low-frequency sounds have long wavelengths.`,
      quiz: [
        { prompt: "Sound is produced by:", options: ["still objects", "vibrating objects", "light", "magnets"], correctIndex: 1, explanation: "Vibrating objects create sound." },
        { prompt: "Sound is a ___ wave:", options: ["transverse", "longitudinal", "electromagnetic", "polarized"], correctIndex: 1, explanation: "Sound is longitudinal." },
        { prompt: "Sound cannot travel through:", options: ["air", "water", "steel", "a vacuum"], correctIndex: 3, explanation: "Sound needs a medium; it cannot cross a vacuum." },
        { prompt: "Regions of high pressure in a sound wave are:", options: ["rarefactions", "compressions", "crests", "nodes"], correctIndex: 1, explanation: "Compressions are high-pressure regions." },
        { prompt: "The speed of sound in air at 0°C is about:", options: ["331 m/s", "3 × 10⁸ m/s", "1500 m/s", "9.8 m/s"], correctIndex: 0, explanation: "About 331 m/s at 0°C." },
        { prompt: "As air temperature rises, the speed of sound:", options: ["decreases", "increases", "stays constant", "becomes zero"], correctIndex: 1, explanation: "Higher temperature gives a higher speed of sound." },
        { prompt: "Sound travels fastest in:", options: ["gases", "liquids", "solids", "a vacuum"], correctIndex: 2, explanation: "Sound is fastest in rigid solids." },
        { prompt: "Pitch of a sound depends on its:", options: ["amplitude", "frequency", "speed", "medium colour"], correctIndex: 1, explanation: "Higher frequency means higher pitch." },
        { prompt: "Loudness of a sound depends on its:", options: ["frequency", "amplitude", "wavelength only", "speed"], correctIndex: 1, explanation: "Larger amplitude means louder sound." },
        { prompt: "The wave equation for sound is:", options: ["v = f/λ", "v = fλ", "v = λ/f²", "v = f + λ"], correctIndex: 1, explanation: "v = fλ applies to sound." },
        { prompt: "A 680 Hz sound in air at 343 m/s has wavelength:", options: ["0.5 m", "2 m", "233 000 m", "1 m"], correctIndex: 0, explanation: "λ = v/f = 343/680 ≈ 0.50 m." },
        { prompt: "Sound of high pitch has:", options: ["low frequency", "high frequency", "large amplitude only", "no wavelength"], correctIndex: 1, explanation: "High pitch corresponds to high frequency." },
        { prompt: "The approximate speed of sound in air at 20°C is:", options: ["331 m/s", "343 m/s", "1480 m/s", "5960 m/s"], correctIndex: 1, explanation: "About 343 m/s at 20°C." },
        { prompt: "Sound transmits through a medium by each layer:", options: ["staying still", "passing the vibration to the next", "emitting light", "gaining mass"], correctIndex: 1, explanation: "Each layer passes the disturbance to the next." },
        { prompt: "Timbre (quality) lets us tell apart:", options: ["loud and soft sounds", "high and low pitches", "different instruments playing the same note", "fast and slow waves"], correctIndex: 2, explanation: "Timbre distinguishes instruments on the same note." },
        { prompt: "Using v ≈ 331 + 0.6 T_c, the speed at 25°C is about:", options: ["331 m/s", "346 m/s", "356 m/s", "300 m/s"], correctIndex: 1, explanation: "331 + 0.6×25 = 331 + 15 = 346 m/s." },
        { prompt: "Rarefactions in a sound wave are regions of:", options: ["high pressure", "low pressure", "no particles", "light"], correctIndex: 1, explanation: "Rarefactions are low-pressure regions where particles spread out." },
        { prompt: "A ringing bell in a jar falls silent as the air is pumped out because:", options: ["the bell stops vibrating", "sound cannot travel without a medium", "the temperature drops", "light is blocked"], correctIndex: 1, explanation: "Removing the air removes the medium sound needs." },
        { prompt: "If frequency doubles at fixed speed, wavelength:", options: ["doubles", "halves", "stays the same", "quadruples"], correctIndex: 1, explanation: "v = fλ, so doubling f halves λ." },
        { prompt: "The speed of sound in fresh water (about 1480 m/s) compared with air is:", options: ["slower", "faster", "the same", "zero"], correctIndex: 1, explanation: "Sound travels faster in water than in air." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "The speed of sound is greatest in:", options: ["air", "water", "steel", "a vacuum"], correctIndex: 2, answerKey: "Sound travels fastest in rigid solids such as steel.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain how sound is produced and why it cannot travel through a vacuum.", answerKey: "Sound is produced by a vibrating object, which pushes and pulls the surrounding particles to create compressions and rarefactions that travel outward as a longitudinal wave. It cannot travel through a vacuum because there are no particles to vibrate and pass the disturbance on — sound needs a material medium.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A sound wave of frequency 256 Hz travels through air at 343 m/s. Calculate its wavelength.", answerKey: "λ = v/f = 343/256 = 1.34 m.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "As the temperature of air increases, the speed of sound in it:", options: ["decreases", "increases", "stays the same", "drops to zero"], correctIndex: 1, answerKey: "The speed of sound in air increases with temperature (v = 331√(T/273)).", marks: 2 },
        { type: "ESSAY", prompt: "Describe how a loudspeaker produces a sound wave and how that wave reaches and is heard by a listener, referring to compressions, rarefactions and the medium.", answerKey: "The loudspeaker cone vibrates back and forth. As it moves forward it pushes air particles together, forming a compression (high pressure); as it moves back it leaves the particles spread out, forming a rarefaction (low pressure). These pressure variations travel outward through the air as a longitudinal wave, each layer of air passing the vibration to the next. On reaching the listener, the compressions and rarefactions make the eardrum vibrate at the same frequency, which the ear and brain interpret as sound. The medium (air) is essential — in a vacuum no sound would reach the listener. Reward the vibration-to-pressure-wave chain and the role of the medium.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 17.4 Doppler Effect and Sonic Booms (https://openstax.org/books/college-physics-2e/pages/17-4-doppler-effect-and-sonic-booms)
    {
      slug: "doppler-effect",
      title: "The Doppler Effect",
      objective:
        "By the end of the topic, learners should be able to define the Doppler effect, explain the change in observed pitch as a source approaches or recedes, and describe sonic booms. (MoE Grade 11 Period V, CONTENTS 4 'Doppler effect'.)",
      estimatedMinutes: 90,
      notes: `## The Doppler effect

- **Doppler effect** — the apparent change in the observed frequency (pitch) of a wave when the source and observer move relative to each other.
- The actual shift in frequency caused by this relative motion is called the **Doppler shift**.

## Approaching and receding

- **Source approaching the observer:** the waves ahead are bunched up (shorter wavelength), so the observed frequency is **higher** (higher pitch).
- **Source receding from the observer:** the waves behind are stretched out (longer wavelength), so the observed frequency is **lower** (lower pitch).
- The same effect occurs if the observer moves relative to the source.

## Everyday example

- A passing ambulance or motorcycle: the siren sounds **high-pitched as it approaches** and suddenly **drops to a lower pitch as it passes and moves away**.

## Doppler formulas (moving source, stationary observer)

- Approaching: f′ = f v / (v − v_s)
- Receding: f′ = f v / (v + v_s)
- where v is the speed of sound, v_s the source speed, f the emitted frequency.

## Sonic booms

- When a source moves **faster than sound** (supersonic), the waves pile up into a cone-shaped **shock wave**.
- The sudden large pressure change is heard as a **sonic boom**.

\`\`\`svg Waves bunch ahead of a moving source (Doppler effect)
<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circular wavefronts bunched in front of a moving source and spread behind">
  <circle cx="150" cy="60" r="12" fill="none" stroke="#334155" stroke-width="1"/>
  <circle cx="158" cy="60" r="24" fill="none" stroke="#334155" stroke-width="1"/>
  <circle cx="168" cy="60" r="38" fill="none" stroke="#334155" stroke-width="1"/>
  <circle cx="150" cy="60" r="3" fill="#dc2626"/>
  <text x="205" y="40" font-size="10" fill="#2563eb">ahead: higher pitch</text>
  <text x="10" y="40" font-size="10" fill="#16a34a">behind: lower pitch</text>
  <line x1="150" y1="60" x2="200" y2="60" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2"/>
  <polygon points="200,60 190,56 190,64" fill="#dc2626"/>
</svg>
\`\`\`

## Common errors

- **Thinking the source frequency changes** — the source emits the same frequency; only the observed frequency changes.
- **Reversing high and low** — approaching gives higher pitch, receding gives lower.
- **Confusing Doppler shift with echo** — Doppler is about relative motion, not reflection.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 17.4).** A train sounds its horn at 150 Hz while moving at 35.0 m/s. The speed of sound is 340 m/s. Find the frequency heard by a stationary observer (a) as the train approaches and (b) after it has passed.

**Step 1 — Approaching.** f′ = f v / (v − v_s) = 150 × 340 / (340 − 35.0) = 51 000 / 305.

**Step 2 — Evaluate.** f′ = 167 Hz (a shift up of about +17 Hz).

**Step 3 — Receding.** f′ = f v / (v + v_s) = 150 × 340 / (340 + 35.0) = 51 000 / 375.

**Step 4 — Evaluate.** f′ = 136 Hz (a shift down of about −14 Hz).

**Answer.** The observer hears about 167 Hz as the train approaches and about 136 Hz after it passes — the familiar drop in pitch of a passing horn.`,
      quiz: [
        { prompt: "The Doppler effect is the apparent change in a wave's:", options: ["speed", "observed frequency", "amplitude only", "colour of the source"], correctIndex: 1, explanation: "It is the change in observed frequency due to relative motion." },
        { prompt: "As a sound source approaches, the observed pitch:", options: ["rises", "falls", "stays the same", "disappears"], correctIndex: 0, explanation: "Approaching bunches the waves, raising the frequency/pitch." },
        { prompt: "As a sound source recedes, the observed pitch:", options: ["rises", "falls", "stays the same", "doubles"], correctIndex: 1, explanation: "Receding stretches the waves, lowering the frequency/pitch." },
        { prompt: "The Doppler effect occurs when source and observer:", options: ["are both still", "move relative to each other", "are far apart only", "have the same mass"], correctIndex: 1, explanation: "Relative motion is required." },
        { prompt: "An approaching source bunches the waves, giving a:", options: ["longer wavelength", "shorter wavelength", "zero wavelength", "constant wavelength"], correctIndex: 1, explanation: "Waves ahead are compressed to a shorter wavelength." },
        { prompt: "The classic Doppler example is a passing:", options: ["ambulance siren", "still bell", "book", "lamp"], correctIndex: 0, explanation: "A passing siren clearly shows the pitch change." },
        { prompt: "For an approaching source, the observed frequency formula is:", options: ["fv/(v − v_s)", "fv/(v + v_s)", "f + v_s", "f − v"], correctIndex: 0, explanation: "f′ = fv/(v − v_s) for approach." },
        { prompt: "For a receding source, the observed frequency is:", options: ["higher than emitted", "lower than emitted", "equal to emitted", "zero"], correctIndex: 1, explanation: "Receding lowers the observed frequency." },
        { prompt: "A sonic boom occurs when a source moves:", options: ["slower than sound", "faster than sound", "at half the speed of sound", "not at all"], correctIndex: 1, explanation: "Supersonic motion piles up waves into a shock wave." },
        { prompt: "In the Doppler effect the frequency emitted by the source:", options: ["increases", "decreases", "stays the same", "reverses"], correctIndex: 2, explanation: "Only the observed frequency changes; the source emits a fixed frequency." },
        { prompt: "A shock wave from a supersonic aircraft is heard as a:", options: ["whisper", "sonic boom", "beat", "echo"], correctIndex: 1, explanation: "The shock wave is heard as a sonic boom." },
        { prompt: "A 200 Hz horn approaches at v_s = 20 m/s, v = 340 m/s. Observed frequency:", options: ["about 213 Hz", "about 189 Hz", "200 Hz", "160 Hz"], correctIndex: 0, explanation: "f′ = 200×340/(340−20) = 68000/320 = 212.5 ≈ 213 Hz." },
        { prompt: "The change in observed frequency due to relative motion is called the:", options: ["echo", "Doppler shift", "resonance", "beat"], correctIndex: 1, explanation: "It is the Doppler shift." },
        { prompt: "If the observer moves toward a stationary source, the pitch heard is:", options: ["higher", "lower", "unchanged", "silent"], correctIndex: 0, explanation: "Approaching (either party) raises the observed frequency." },
        { prompt: "The pitch of a passing horn drops most noticeably:", options: ["long before it arrives", "as it passes the observer", "when it is far away and still", "never"], correctIndex: 1, explanation: "The shift from approach to recede happens as it passes." },
        { prompt: "The Doppler effect applies to:", options: ["sound only", "light only", "all waves", "no waves"], correctIndex: 2, explanation: "It applies to all waves, including sound and light." },
        { prompt: "Radar guns measure speed using the Doppler effect of:", options: ["sound waves", "reflected radio/EM waves", "water waves", "beats"], correctIndex: 1, explanation: "They use the Doppler shift of reflected electromagnetic waves." },
        { prompt: "A receding 300 Hz source at 34 m/s, v = 340 m/s, is heard at about:", options: ["273 Hz", "330 Hz", "300 Hz", "250 Hz"], correctIndex: 0, explanation: "f′ = 300×340/(340+34) = 102000/374 = 272.7 ≈ 273 Hz." },
        { prompt: "Astronomers use the Doppler 'redshift' of light to tell that a star is:", options: ["approaching", "moving away", "stationary", "cooling"], correctIndex: 1, explanation: "A shift to lower frequency (red) means the source recedes." },
        { prompt: "Two distinct booms from a supersonic jet come from its:", options: ["engines only", "nose and tail", "wings only", "shadow"], correctIndex: 1, explanation: "Shock waves form at the nose and tail." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "As a sounding ambulance drives away from you, the pitch you hear:", options: ["rises", "falls", "stays the same", "becomes a beat"], correctIndex: 1, answerKey: "A receding source gives a lower observed frequency (lower pitch).", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define the Doppler effect and state what happens to the observed pitch as a source approaches and as it recedes.", answerKey: "The Doppler effect is the apparent change in the observed frequency (pitch) of a wave due to relative motion between the source and observer. As the source approaches, the observed pitch is higher; as it recedes, the observed pitch is lower. The source's emitted frequency is unchanged.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A siren emits 400 Hz and moves toward a stationary listener at 30 m/s (speed of sound 340 m/s). Find the frequency heard.", answerKey: "f′ = fv/(v − v_s) = 400 × 340/(340 − 30) = 136000/310 = 439 Hz (approximately 438.7 Hz).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A sonic boom is produced when a source moves:", options: ["slower than sound", "at the speed of sound exactly and then stops", "faster than the speed of sound", "in a circle"], correctIndex: 2, answerKey: "Supersonic motion piles the waves into a shock wave heard as a sonic boom.", marks: 2 },
        { type: "ESSAY", prompt: "Explain, using the idea of bunched and stretched wavefronts, why the pitch of a car horn is higher as it approaches and lower after it passes, and give one practical use of the Doppler effect.", answerKey: "The horn emits a fixed frequency, but as the car moves toward the observer each successive wavefront is emitted from a slightly closer point, so the wavefronts ahead are bunched together — a shorter wavelength and therefore a higher observed frequency (higher pitch). After the car passes, it moves away, so the wavefronts behind are stretched out — a longer wavelength and a lower observed frequency (lower pitch). Hence the pitch appears to drop as the car goes by. A practical use: radar/laser speed guns measure a vehicle's speed from the Doppler shift of reflected waves; astronomers use the redshift of starlight to find how fast stars and galaxies recede; weather radar tracks storms. Reward the wavefront explanation and one valid application.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 17.5 Sound Interference and Resonance: Standing Waves in Air Columns (https://openstax.org/books/college-physics-2e/pages/17-5-sound-interference-and-resonance-standing-waves-in-air-columns)
    {
      slug: "vibrations-in-strings-and-tubes",
      title: "Vibrations in Strings and Tubes",
      objective:
        "By the end of the topic, learners should be able to explain standing waves and resonance, describe the fundamental and harmonics in strings and in open and closed tubes, and use the resonance formulas. (MoE Grade 11 Period V, CONTENTS 5 'Vibrations in strings and tubes'.)",
      estimatedMinutes: 100,
      notes: `## Standing waves and resonance

- **Standing (stationary) wave** — the pattern formed when a wave reflects and interferes with itself, producing fixed **nodes** (no motion) and **antinodes** (maximum motion).
- **Resonance** — a system vibrates with large amplitude when driven at one of its natural frequencies; only these **resonant frequencies** form standing waves.
- **Node** — a point of zero displacement. **Antinode** — a point of maximum displacement.

## Vibrations in strings (fixed at both ends)

- Both ends are nodes. The fundamental has one antinode in the middle: L = ½λ, so λ = 2L.
- **Fundamental frequency:** f₁ = v / 2L (the lowest note).
- Harmonics: f_n = n v / 2L, for n = 1, 2, 3, … (all whole-number multiples of f₁).

## Air columns (tubes/pipes)

- **Open tube (both ends open):** antinodes at both ends. f_n = n v / 2L, n = 1, 2, 3, …
- **Closed tube (one end closed):** node at the closed end, antinode at the open end. Fundamental: L = ¼λ.
- **Closed-tube resonances:** f_n = n v / 4L, but only **odd** n = 1, 3, 5, … (odd harmonics only).

## Fundamental, overtones and harmonics

- The lowest resonant frequency is the **fundamental**; higher ones are **overtones**.
- Together the fundamental and overtones are the **harmonics**.
- The mix of harmonics gives each instrument its distinctive quality (timbre).

## Common errors

- **Giving a closed tube even harmonics** — a closed pipe has only odd harmonics.
- **Confusing nodes and antinodes** — nodes are still, antinodes move most.
- **Forgetting the open/closed distinction** — the formulas and end conditions differ.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 17.5).** A tube closed at one end has a fundamental frequency of 128 Hz. The speed of sound in the air inside is 344 m/s (at 22°C). Find the length of the tube.

**Step 1 — Closed-tube fundamental.** For a tube closed at one end, the fundamental has L = ¼λ, so f₁ = v / (4L), giving L = v / (4 f₁).

**Step 2 — Substitute.** L = 344 / (4 × 128) = 344 / 512.

**Step 3 — Evaluate.** L = 0.672 m.

**Answer.** The tube is about 0.672 m long. (Its next resonance is the third harmonic, f₃ = 3 × 128 = 384 Hz, since a closed tube produces only odd harmonics.)`,
      quiz: [
        { prompt: "A standing wave has fixed points of no motion called:", options: ["antinodes", "nodes", "crests", "compressions"], correctIndex: 1, explanation: "Nodes are points of zero displacement." },
        { prompt: "Points of maximum motion in a standing wave are:", options: ["nodes", "antinodes", "troughs", "rarefactions"], correctIndex: 1, explanation: "Antinodes have maximum displacement." },
        { prompt: "Resonance occurs when a system is driven at its:", options: ["highest frequency", "natural (resonant) frequency", "zero frequency", "amplitude"], correctIndex: 1, explanation: "Large-amplitude vibration occurs at natural frequencies." },
        { prompt: "A string fixed at both ends has ___ at each end:", options: ["antinodes", "nodes", "compressions", "overtones"], correctIndex: 1, explanation: "Fixed ends must be nodes." },
        { prompt: "The fundamental frequency of a string is:", options: ["v/4L", "v/2L", "vL", "2vL"], correctIndex: 1, explanation: "f₁ = v/2L for a string fixed at both ends." },
        { prompt: "For the fundamental of a string, the wavelength is:", options: ["L", "2L", "4L", "L/2"], correctIndex: 1, explanation: "L = ½λ so λ = 2L." },
        { prompt: "An open tube (both ends open) has antinodes at:", options: ["one end", "both ends", "neither end", "the middle only"], correctIndex: 1, explanation: "Open ends are antinodes." },
        { prompt: "A closed tube (one end closed) has a node at the:", options: ["open end", "closed end", "middle", "both ends"], correctIndex: 1, explanation: "The closed end is a node." },
        { prompt: "A closed tube produces only:", options: ["even harmonics", "odd harmonics", "no harmonics", "all harmonics"], correctIndex: 1, explanation: "Closed tubes give odd harmonics only." },
        { prompt: "The lowest resonant frequency is called the:", options: ["overtone", "fundamental", "beat", "node"], correctIndex: 1, explanation: "The lowest is the fundamental." },
        { prompt: "Harmonics of a string are ___ of the fundamental:", options: ["random values", "whole-number multiples", "half values only", "unrelated"], correctIndex: 1, explanation: "f_n = n f₁ for n = 1, 2, 3, …" },
        { prompt: "A string of fundamental 200 Hz has a second harmonic of:", options: ["100 Hz", "200 Hz", "400 Hz", "600 Hz"], correctIndex: 2, explanation: "f₂ = 2 × 200 = 400 Hz." },
        { prompt: "The resonant frequencies of an open tube are:", options: ["nv/4L (odd only)", "nv/2L (all n)", "v only", "nv/L"], correctIndex: 1, explanation: "Open tube: f_n = nv/2L, n = 1, 2, 3, …" },
        { prompt: "The mix of harmonics that gives an instrument its character is its:", options: ["pitch", "loudness", "timbre (quality)", "speed"], correctIndex: 2, explanation: "Timbre depends on the harmonic content." },
        { prompt: "A shorter string (same tension/speed) has a fundamental that is:", options: ["lower", "higher", "unchanged", "zero"], correctIndex: 1, explanation: "f₁ = v/2L increases as L decreases." },
        { prompt: "A closed tube of length L has a fundamental wavelength of:", options: ["2L", "4L", "L", "L/4"], correctIndex: 1, explanation: "L = ¼λ, so λ = 4L." },
        { prompt: "Standing waves form only at:", options: ["any frequency", "resonant frequencies", "zero frequency", "very high frequency only"], correctIndex: 1, explanation: "Only resonant frequencies interfere constructively into standing waves." },
        { prompt: "A guitarist shortens a string (pressing a fret) to play a:", options: ["lower note", "higher note", "silent note", "beat"], correctIndex: 1, explanation: "Shorter length gives a higher fundamental frequency." },
        { prompt: "A closed tube fundamental 128 Hz has its next resonance at:", options: ["256 Hz", "384 Hz", "192 Hz", "128 Hz"], correctIndex: 1, explanation: "Odd harmonics: next is 3 × 128 = 384 Hz." },
        { prompt: "In a standing wave, the distance between adjacent nodes is:", options: ["one wavelength", "half a wavelength", "a quarter wavelength", "two wavelengths"], correctIndex: 1, explanation: "Adjacent nodes are half a wavelength apart." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "A string fixed at both ends vibrates at a fundamental of 220 Hz. Its third harmonic is:", options: ["220 Hz", "440 Hz", "660 Hz", "110 Hz"], correctIndex: 2, answerKey: "f₃ = 3 × 220 = 660 Hz.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain the terms node, antinode and fundamental frequency for a vibrating string.", answerKey: "A node is a point on the standing wave with no displacement; an antinode is a point of maximum displacement. The fundamental frequency is the lowest frequency at which the string resonates (one antinode between the two end nodes, λ = 2L, f₁ = v/2L).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A pipe open at both ends is 0.50 m long and the speed of sound is 340 m/s. Find its fundamental frequency.", answerKey: "Open tube fundamental: f₁ = v/2L = 340/(2 × 0.50) = 340/1.0 = 340 Hz.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A tube closed at one end produces:", options: ["all harmonics", "only even harmonics", "only odd harmonics", "no harmonics"], correctIndex: 2, answerKey: "A closed tube resonates only at odd harmonics (n = 1, 3, 5, …).", marks: 2 },
        { type: "ESSAY", prompt: "Explain how standing waves and resonance allow a stringed instrument such as a guitar to produce musical notes, and how the player changes the pitch.", answerKey: "When a string fixed at both ends is plucked, waves travel in both directions, reflect at the fixed ends and interfere to form a standing wave with nodes at the ends and an antinode(s) between. Only the resonant frequencies (fundamental f₁ = v/2L and its whole-number harmonics) build up large amplitude; these determine the note heard, and their mixture gives the instrument its timbre. The player raises the pitch by shortening the vibrating length (pressing a fret), which increases f₁ = v/2L, or by increasing the string tension (raising the wave speed v); a thicker/looser string lowers the pitch. Reward correct standing-wave/resonance explanation and valid ways to change pitch (length and tension).", marks: 8 },
      ],
    },
    // source: OpenStax — University Physics Volume 1, 17.6 Beats (https://openstax.org/books/university-physics-volume-1/pages/17-6-beats)
    {
      slug: "beats",
      title: "Beats",
      objective:
        "By the end of the topic, learners should be able to explain how beats arise from the interference of two close frequencies, use the beat frequency f_beat = |f₁ − f₂|, and describe how beats are used to tune instruments. (MoE Grade 11 Period V, CONTENTS 6 'Beats'.)",
      estimatedMinutes: 90,
      notes: `## What beats are

- **Beats** — a regular rise and fall in loudness heard when two sounds of **slightly different frequencies** are played together.
- They arise from the **interference (superposition)** of the two waves: at times the waves add (constructive → loud), at times they cancel (destructive → soft).
- The loudness "wobbles" up and down at a steady rate.

## Beat frequency

- **Beat frequency** — the number of loudness maxima (beats) heard per second.
- **f_beat = |f₁ − f₂|** — the absolute difference between the two frequencies.
- The closer the two frequencies, the slower the beats; when they are equal, the beats vanish.

## Tuning with beats

- A musician sounds a note against a reference (e.g. a tuning fork) and listens for beats.
- As the note is adjusted closer to the reference, the beats get **slower**.
- When **no beats** are heard, the two frequencies match — the instrument is in tune.

\`\`\`svg Two close frequencies combine into a beating (wobbling) loudness
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A wave whose amplitude rises and falls, showing beats">
  <line x1="10" y1="50" x2="290" y2="50" stroke="#94a3b8" stroke-width="0.8"/>
  <path d="M10 50 Q 25 20 40 50 Q 55 44 70 50 Q 85 50 100 50 Q 115 44 130 50 Q 145 20 160 50 Q 175 44 190 50 Q 205 50 220 50 Q 235 44 250 50 Q 265 20 280 50" fill="none" stroke="#2563eb" stroke-width="1.8"/>
  <path d="M10 50 Q 85 -5 160 50 Q 235 -5 290 50" fill="none" stroke="#dc2626" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="90" y="90" font-size="10" fill="#dc2626">loudness rises and falls (beats)</text>
</svg>
\`\`\`

## Common errors

- **Adding the frequencies** — the beat frequency is the difference, not the sum.
- **Thinking beats need very different notes** — beats are clearest when the frequencies are close.
- **Confusing beats with the Doppler effect** — beats come from two sources of different frequency, not from motion.`,
      workedExample: `**Problem (OpenStax University Physics Vol. 1, 17.6).** Two tuning forks are sounded together, one of 256 Hz and one of 512 Hz. What beat frequency is produced?

**Step 1 — Recall the formula.** f_beat = |f₁ − f₂|.

**Step 2 — Substitute.** f_beat = |512 − 256|.

**Step 3 — Evaluate.** f_beat = 256 Hz.

**Answer.** The beat frequency is 256 Hz. (In practice beats are only distinctly heard as a slow throbbing when the two frequencies are close together, so a smaller difference — say 260 Hz and 256 Hz giving 4 beats per second — is the more familiar case.)`,
      quiz: [
        { prompt: "Beats are a regular variation in:", options: ["pitch", "loudness", "colour", "speed"], correctIndex: 1, explanation: "Beats are a periodic rise and fall in loudness." },
        { prompt: "Beats occur when two sounds have:", options: ["equal frequencies", "slightly different frequencies", "very different frequencies", "zero amplitude"], correctIndex: 1, explanation: "Slightly different frequencies produce beats." },
        { prompt: "The beat frequency equals:", options: ["f₁ + f₂", "|f₁ − f₂|", "f₁ × f₂", "f₁/f₂"], correctIndex: 1, explanation: "f_beat = |f₁ − f₂|." },
        { prompt: "Beats arise from wave:", options: ["reflection", "interference (superposition)", "refraction", "the Doppler effect"], correctIndex: 1, explanation: "Beats result from the interference of the two waves." },
        { prompt: "Two forks of 300 Hz and 304 Hz give a beat frequency of:", options: ["4 Hz", "604 Hz", "1.01 Hz", "2 Hz"], correctIndex: 0, explanation: "|304 − 300| = 4 Hz." },
        { prompt: "As two frequencies get closer, the beats become:", options: ["faster", "slower", "louder forever", "silent immediately"], correctIndex: 1, explanation: "Smaller difference means slower beats." },
        { prompt: "When two frequencies are exactly equal, the beats:", options: ["speed up", "vanish", "double", "reverse"], correctIndex: 1, explanation: "Zero difference means no beats." },
        { prompt: "Musicians use beats to:", options: ["increase loudness", "tune instruments", "change pitch permanently", "measure temperature"], correctIndex: 1, explanation: "Reducing beats to zero tunes to the reference." },
        { prompt: "At a beat maximum, the two waves interfere:", options: ["destructively", "constructively", "not at all", "into silence"], correctIndex: 1, explanation: "Constructive interference gives a loud maximum." },
        { prompt: "At a beat minimum, the two waves interfere:", options: ["constructively", "destructively", "at the source", "with the Doppler shift"], correctIndex: 1, explanation: "Destructive interference gives the quiet minimum." },
        { prompt: "Two notes of 440 Hz and 443 Hz produce beats at:", options: ["3 Hz", "883 Hz", "1 Hz", "440 Hz"], correctIndex: 0, explanation: "|443 − 440| = 3 Hz." },
        { prompt: "A piano tuner hears 5 beats per second between a string and a 262 Hz fork. The string could be:", options: ["262 Hz", "267 Hz", "257 Hz or 267 Hz", "524 Hz"], correctIndex: 2, explanation: "The string is 5 Hz above or below: 257 Hz or 267 Hz." },
        { prompt: "Beats are heard as a:", options: ["steady tone", "throbbing/wobbling loudness", "high whistle only", "silence"], correctIndex: 1, explanation: "The loudness throbs up and down." },
        { prompt: "The beat frequency is the number of loudness maxima per:", options: ["minute", "second", "hour", "wavelength"], correctIndex: 1, explanation: "Beat frequency is beats per second (Hz)." },
        { prompt: "To tune a guitar string to a 330 Hz reference, the player adjusts until beats become:", options: ["faster", "zero", "very loud", "doubled"], correctIndex: 1, explanation: "No beats means the frequencies match." },
        { prompt: "Beats differ from the Doppler effect because beats need:", options: ["relative motion", "two sources of different frequency", "reflection", "a vacuum"], correctIndex: 1, explanation: "Beats come from two frequencies, not from motion." },
        { prompt: "If a fork is 256 Hz and beats at 2 Hz are heard with a string, the string is:", options: ["254 or 258 Hz", "512 Hz", "128 Hz", "256 Hz only"], correctIndex: 0, explanation: "The string is 2 Hz from 256: 254 or 258 Hz." },
        { prompt: "The beat frequency is calculated by taking the ___ of the two frequencies:", options: ["sum", "product", "absolute difference", "ratio"], correctIndex: 2, explanation: "f_beat = |f₁ − f₂|." },
        { prompt: "Beats are most useful for tuning when the difference is:", options: ["very large", "small (slow beats)", "zero from the start", "negative"], correctIndex: 1, explanation: "Small differences give slow, countable beats ideal for tuning." },
        { prompt: "Two identical tuning forks sounded together produce:", options: ["fast beats", "no beats", "a Doppler shift", "a sonic boom"], correctIndex: 1, explanation: "Equal frequencies give no beats." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Two tuning forks of 512 Hz and 516 Hz are sounded together. The beat frequency is:", options: ["4 Hz", "1028 Hz", "2 Hz", "8 Hz"], correctIndex: 0, answerKey: "f_beat = |516 − 512| = 4 Hz.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain what beats are and state the formula for the beat frequency.", answerKey: "Beats are a regular rise and fall in loudness heard when two sounds of slightly different frequencies interfere — alternately reinforcing (loud) and cancelling (soft). The beat frequency is f_beat = |f₁ − f₂|, the absolute difference of the two frequencies.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A guitarist hears 6 beats per second when a string is played with a 200 Hz reference. What are the two possible frequencies of the string?", answerKey: "The string differs from 200 Hz by 6 Hz, so it is 200 + 6 = 206 Hz or 200 − 6 = 194 Hz.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "As a musician tunes a note closer to a reference frequency, the beats:", options: ["get faster", "get slower and vanish when in tune", "get louder forever", "become a sonic boom"], correctIndex: 1, answerKey: "Beats slow as the frequencies converge and disappear when they match.", marks: 2 },
        { type: "ESSAY", prompt: "Explain, using constructive and destructive interference, how beats are produced when two notes of slightly different frequency are played together, and describe how a piano tuner uses beats to tune a string.", answerKey: "When two waves of slightly different frequencies overlap, they drift in and out of step. When the crests coincide they interfere constructively and the sound is loud; a moment later, when a crest meets a trough, they interfere destructively and the sound is soft. This alternation repeats at the beat frequency f_beat = |f₁ − f₂|, heard as a throbbing loudness. A piano tuner sounds the string with a reference tuning fork and counts the beats; as the string tension is adjusted so its frequency approaches the fork's, the beats slow down, and when no beats are heard the two frequencies are equal and the string is in tune. Reward the interference explanation, the beat-frequency formula, and the tuning procedure.", marks: 8 },
      ],
    },
  ],
};
