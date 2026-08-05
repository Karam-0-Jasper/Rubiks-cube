import type { SubjectContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics (Grades 10-12).
// Grade 10, Semester One, Period I: Introduction to Physics and Properties of
// Matter. The topics below follow the syllabus CONTENTS list item by item:
// (a) branches of physics, (b) basic mathematical concepts, (c) measurement,
// (d) pressure in solids/liquids/gases, (e) dimensional analysis,
// (f) measuring instruments, and 2. scalar and vector quantities — plus
// density and relative density from the period's objectives.
// Velocity & acceleration (P2), work/energy/power (P3), thermal physics (P4),
// electrostatics (P5) and properties of matter (P6) follow in their own periods.
export const physics: SubjectContent = {
  slug: "physics",
  name: "Physics",
  shortName: "Physics",
  description:
    "The science of matter and energy: measurement and units, scalars and vectors, and the properties of matter — density and pressure.",
  accent: "sky",
  sortOrder: 5,
  teacherCode: "PHY-10-3907",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "Introduction to Physics and Properties of Matter",
      summary:
        "Period I of the MoE Grade 10 Physics syllabus. Learners meet the branches of physics and the mathematical tools it uses, establish measurement — systems, fundamental and derived quantities, units, prefixes, significant figures and errors — use dimensional analysis and measuring instruments, distinguish scalar from vector quantities, and study the properties of matter through density, relative density and pressure in solids, liquids and gases.",
      topics: [
        {
          slug: "branches-of-physics",
          title: "Development of Physics: Branches of Physics",
          objective:
            "By the end of the topic, learners should be able to state what physics is, discuss its importance in everyday life, and name and describe the main branches of physics, distinguishing classical from modern physics. (MoE Grade 10 Period I, CONTENTS 1(a) 'Branches of Physics'.)",
          estimatedMinutes: 120,
          notes: `## Introduction

- **Physics** studies matter, energy and the interactions between them.
- Every machine, engine, radio, lamp and bridge in Liberia works on laws physics discovered.
- Physics is the base science — chemistry, biology, engineering and medicine all rest on it.
- **This topic:** what physics is; why it matters; the branches of physics; classical vs modern physics.

## What physics is

- **Physics** — the branch of science that studies matter, energy, and how they interact.
- Physics looks for **laws**: short general statements that hold everywhere, tested by experiment.
- Physics is an **exact science** — every law links quantities that can be **measured** as a number and a unit.
- Physics works from **observation → hypothesis → experiment → law/theory**.

## Importance of physics

- **Everyday life** — walking, lifting, cooking, seeing and hearing are all physical processes.
- **Technology** — engines, motors, phones, radios, computers, solar panels, generators.
- **Medicine** — X-rays, ultrasound, laser surgery, radiotherapy.
- **Transport** — vehicles, ships, aircraft, road and bridge design.
- **Energy** — hydro, solar and thermal power generation and distribution.
- **Other sciences** — chemistry, biology, geology and engineering all apply physical laws.
- **Careers** — engineering, aviation, telecommunications, mining, medicine, teaching.

## Classical and modern physics

- **Classical physics** — built on Newton's laws, Maxwell's equations and thermodynamics. Describes objects that are large compared with atoms and slow compared with light.
- **Modern physics** — developed from about 1900; built on **relativity** and **quantum mechanics**. Describes the very fast, the very small and the very massive.
- Classical physics is not wrong; it is the case of modern physics for ordinary sizes and speeds.

## Branches of physics

- **Mechanics** — motion of bodies and the forces acting on them. Sub-divided into *statics* (bodies at rest), *kinematics* (motion without cause) and *dynamics* (motion with its causes).
- **Heat and thermodynamics** — thermal energy, temperature, heat transfer and its conversion to work.
- **Optics (light)** — the nature and behaviour of light: reflection, refraction, interference, diffraction, lenses and mirrors.
- **Sound (acoustics)** — production, transmission and effects of sound waves.
- **Electricity and magnetism (electromagnetism)** — electric charges at rest and in motion, magnetic fields and electromagnetic waves.
- **Atomic and nuclear physics** — structure of the atom, the nucleus, radioactivity and nuclear energy.
- **Modern physics** — relativity, quantum mechanics and particle physics.
- **Geophysics / astrophysics** — physical laws applied to the Earth and to stars and space.

| Branch | Studies | Everyday example |
|---|---|---|
| Mechanics | motion and forces | a car braking, a lever |
| Heat / thermodynamics | thermal energy, heat flow | cooking pot, refrigerator |
| Optics | light | mirrors, spectacles, cameras |
| Sound | sound waves | drums, radio speakers |
| Electricity & magnetism | charges, currents, fields | generator, phone, motor |
| Atomic & nuclear | atoms and nuclei | X-rays, nuclear power |
| Modern physics | relativity, quantum theory | lasers, transistors |

## Branches of physics — map

\`\`\`svg The main branches of physics
<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Physics divided into classical and modern branches">
  <rect x="120" y="8" width="100" height="26" rx="6" fill="#e0e7ff" stroke="#3730a3"/>
  <text x="170" y="26" font-size="12" text-anchor="middle" fill="#3730a3">PHYSICS</text>
  <line x1="150" y1="34" x2="80" y2="56" stroke="#64748b"/>
  <line x1="190" y1="34" x2="262" y2="56" stroke="#64748b"/>
  <rect x="24" y="56" width="112" height="24" rx="6" fill="#dcfce7" stroke="#166534"/>
  <text x="80" y="72" font-size="11" text-anchor="middle" fill="#166534">Classical</text>
  <rect x="206" y="56" width="112" height="24" rx="6" fill="#fee2e2" stroke="#991b1b"/>
  <text x="262" y="72" font-size="11" text-anchor="middle" fill="#991b1b">Modern</text>
  <text x="80" y="100" font-size="10" text-anchor="middle" fill="#334155">Mechanics</text>
  <text x="80" y="116" font-size="10" text-anchor="middle" fill="#334155">Heat</text>
  <text x="80" y="132" font-size="10" text-anchor="middle" fill="#334155">Optics</text>
  <text x="80" y="148" font-size="10" text-anchor="middle" fill="#334155">Sound</text>
  <text x="80" y="164" font-size="10" text-anchor="middle" fill="#334155">Electricity &amp; magnetism</text>
  <text x="262" y="100" font-size="10" text-anchor="middle" fill="#334155">Relativity</text>
  <text x="262" y="116" font-size="10" text-anchor="middle" fill="#334155">Quantum mechanics</text>
  <text x="262" y="132" font-size="10" text-anchor="middle" fill="#334155">Atomic physics</text>
  <text x="262" y="148" font-size="10" text-anchor="middle" fill="#334155">Nuclear physics</text>
  <text x="262" y="164" font-size="10" text-anchor="middle" fill="#334155">Particle physics</text>
</svg>
\`\`\`

## Common errors to watch for

- **Calling physics "only theory"** — every law in physics is tested by **measurement and experiment**.
- **Thinking classical physics is wrong** — it is exact for ordinary sizes and speeds; modern physics extends it to the very fast and the very small.
- **Confusing mechanics with dynamics** — dynamics is only the part of mechanics that studies motion **with its causes**; statics and kinematics are the other parts.
- **Mixing up optics and acoustics** — optics is **light**, acoustics is **sound**.
- **Listing "electricity" and "magnetism" as unrelated branches** — they are joined as **electromagnetism**.`,
          workedExample: `**Task.** For each situation, name the branch of physics that studies it and say whether it is classical or modern physics.
(i) A taxi skidding to a stop. (ii) A radio transmitting a signal. (iii) Sunlight splitting into colours through a prism. (iv) A hospital X-ray machine.

**Step 1 — identify what is happening in each case.**
- (i) an object moving and being slowed by a force → motion and forces.
- (ii) a signal carried by electromagnetic waves → charges and fields.
- (iii) light bending and separating → behaviour of light.
- (iv) rays produced from inside atoms → atomic structure.

**Step 2 — match to a branch.**
- (i) **Mechanics** (dynamics, because forces are involved).
- (ii) **Electricity and magnetism (electromagnetism)**.
- (iii) **Optics**.
- (iv) **Atomic physics**.

**Step 3 — classify as classical or modern.**
- (i) ordinary speeds and sizes → **classical**.
- (ii) described by Maxwell's equations → **classical**.
- (iii) reflection/refraction of light → **classical**.
- (iv) depends on atomic structure, discovered after 1900 → **modern**.

**Answers:** (i) mechanics, classical; (ii) electromagnetism, classical; (iii) optics, classical; (iv) atomic physics, modern.`,
          quiz: [
            {
              prompt: "Physics is the study of…",
              options: ["matter, energy and their interactions", "living things only", "chemical reactions only", "rocks and minerals"],
              correctIndex: 0,
              explanation: "Physics studies matter, energy and how they interact.",
            },
            {
              prompt: "The branch of physics dealing with motion and forces is…",
              options: ["mechanics", "optics", "acoustics", "thermodynamics"],
              correctIndex: 0,
              explanation: "Mechanics studies the motion of bodies and the forces on them.",
            },
            {
              prompt: "The branch of physics dealing with light is…",
              options: ["optics", "acoustics", "mechanics", "nuclear physics"],
              correctIndex: 0,
              explanation: "Optics is the study of light and its behaviour.",
            },
            {
              prompt: "The study of sound is called…",
              options: ["acoustics", "optics", "statics", "kinematics"],
              correctIndex: 0,
              explanation: "Acoustics deals with the production and transmission of sound.",
            },
            {
              prompt: "Heat, temperature and the conversion of heat to work are studied in…",
              options: ["thermodynamics", "optics", "electromagnetism", "acoustics"],
              correctIndex: 0,
              explanation: "Thermodynamics covers thermal energy and heat transfer.",
            },
            {
              prompt: "Physics based on Newton's laws and Maxwell's equations is called…",
              options: ["classical physics", "modern physics", "quantum physics", "nuclear physics"],
              correctIndex: 0,
              explanation: "Newtonian mechanics, electromagnetism and thermodynamics form classical physics.",
            },
            {
              prompt: "Relativity and quantum mechanics belong to…",
              options: ["modern physics", "classical physics", "acoustics", "statics"],
              correctIndex: 0,
              explanation: "Modern physics developed from about 1900 on relativity and quantum theory.",
            },
            {
              prompt: "The part of mechanics that studies bodies at rest is…",
              options: ["statics", "dynamics", "kinematics", "optics"],
              correctIndex: 0,
              explanation: "Statics deals with bodies in equilibrium (at rest).",
            },
            {
              prompt: "The part of mechanics that describes motion without considering its causes is…",
              options: ["kinematics", "dynamics", "statics", "thermodynamics"],
              correctIndex: 0,
              explanation: "Kinematics describes motion; dynamics adds the forces causing it.",
            },
            {
              prompt: "The study of the nucleus and radioactivity is…",
              options: ["nuclear physics", "optics", "acoustics", "statics"],
              correctIndex: 0,
              explanation: "Nuclear physics studies the nucleus, radioactivity and nuclear energy.",
            },
            {
              prompt: "Electric charges, currents and magnetic fields are studied in…",
              options: ["electromagnetism", "optics", "acoustics", "mechanics"],
              correctIndex: 0,
              explanation: "Electricity and magnetism together form electromagnetism.",
            },
            {
              prompt: "Physics is described as an exact science because its laws are based on…",
              options: ["measurement and experiment", "opinion", "tradition", "guesswork"],
              correctIndex: 0,
              explanation: "Physical laws link measurable quantities and are tested by experiment.",
            },
            {
              prompt: "An X-ray machine in a hospital applies mainly…",
              options: ["atomic physics", "acoustics", "statics", "hydrostatics"],
              correctIndex: 0,
              explanation: "X-rays come from processes inside atoms.",
            },
            {
              prompt: "The design of bridges and roads applies mostly…",
              options: ["mechanics", "optics", "nuclear physics", "acoustics"],
              correctIndex: 0,
              explanation: "Forces and equilibrium in structures are mechanics (statics).",
            },
            {
              prompt: "Which is NOT a branch of physics?",
              options: ["botany", "optics", "mechanics", "thermodynamics"],
              correctIndex: 0,
              explanation: "Botany is a branch of biology, not physics.",
            },
            {
              prompt: "A refrigerator works mainly on principles of…",
              options: ["thermodynamics", "optics", "acoustics", "nuclear physics"],
              correctIndex: 0,
              explanation: "Refrigeration is heat transfer — thermodynamics.",
            },
            {
              prompt: "Spectacles and cameras are applications of…",
              options: ["optics", "acoustics", "statics", "electromagnetism"],
              correctIndex: 0,
              explanation: "Lenses bend light — optics.",
            },
            {
              prompt: "The scientific method in physics runs from observation to…",
              options: ["hypothesis, experiment, then law", "conclusion without testing", "opinion", "tradition"],
              correctIndex: 0,
              explanation: "Observation → hypothesis → experiment → law or theory.",
            },
            {
              prompt: "Applying physical laws to stars and space is…",
              options: ["astrophysics", "geophysics", "acoustics", "statics"],
              correctIndex: 0,
              explanation: "Astrophysics applies physics to stars and the universe.",
            },
            {
              prompt: "Physics is often called the base science because…",
              options: ["other sciences apply its laws", "it is the oldest subject", "it uses no mathematics", "it needs no experiments"],
              correctIndex: 0,
              explanation: "Chemistry, biology and engineering all rest on physical laws.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt: "Define physics and state four ways in which it is important in everyday life.",
              answerKey:
                "Physics is the branch of science that studies matter, energy and the interactions between them. Importance (any four): everyday activities such as walking, lifting and cooking; technology — engines, motors, phones, generators; medicine — X-rays, ultrasound, laser surgery; transport — vehicles, ships, aircraft; energy generation — hydro, solar, thermal; it underpins other sciences and engineering; it opens careers. Award 2 marks for the definition and 1 mark each for up to four valid uses.",
              marks: 6,
            },
            {
              type: "SHORT_ANSWER",
              prompt: "Name five branches of physics and state what each one studies.",
              answerKey:
                "Any five of: mechanics — motion of bodies and the forces on them; heat/thermodynamics — thermal energy, temperature and heat transfer; optics — light and its behaviour; acoustics/sound — sound waves; electricity and magnetism (electromagnetism) — charges, currents and magnetic fields; atomic and nuclear physics — the atom, nucleus and radioactivity; modern physics — relativity and quantum mechanics. Award 1 mark per correct branch with its correct description.",
              marks: 5,
            },
            {
              type: "SHORT_ANSWER",
              prompt: "Distinguish between classical physics and modern physics, giving one example of each.",
              answerKey:
                "Classical physics is built on Newton's laws, Maxwell's equations and thermodynamics, and describes bodies that are large compared with atoms and slow compared with light — e.g. a car braking, or current in a wire. Modern physics developed from about 1900 and is built on relativity and quantum mechanics, describing the very fast, very small or very massive — e.g. radioactivity, lasers or the structure of the atom. Award marks for the correct basis of each and one valid example of each.",
              marks: 4,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt: "Which branch of physics studies bodies at rest under the action of forces?",
              options: ["statics", "kinematics", "optics", "acoustics"],
              correctIndex: 0,
              answerKey: "Statics is the part of mechanics dealing with bodies in equilibrium.",
              marks: 2,
            },
            {
              type: "ESSAY",
              prompt:
                "Discuss the importance of physics to the development of a country such as Liberia, referring to at least three branches of physics and their applications.",
              answerKey:
                "A strong answer explains that physics underpins the technology and infrastructure a developing country needs, and links at least three branches to concrete applications: mechanics — roads, bridges, vehicles, machinery and construction; thermodynamics — power generation, engines and refrigeration for storing food and medicine; electricity and magnetism — generators, transmission lines, lighting and telecommunications; optics — spectacles, cameras, fibre-optic communication; atomic/nuclear physics — medical imaging and radiotherapy. It should also note that physics trains analytical and problem-solving skills and supplies engineers, technicians and teachers. Award marks for a clear statement of importance, three correctly named branches, valid applications of each, and coherent expression.",
              marks: 8,
            },
          ],
        },
        {
          slug: "basic-mathematical-concepts",
          title: "Basic Mathematical Concepts: Scientific Notation and Unit Conversion",
          objective:
            "By the end of the topic, learners should be able to write very large and very small numbers in scientific (standard) notation, carry out arithmetic in scientific notation, and convert between units using conversion factors. (MoE Grade 10 Period I, CONTENTS 1(b) 'Basic mathematical concepts'.)",
          estimatedMinutes: 130,
          notes: `## Introduction

- Physics measures things as small as an atom and as large as a star — plain decimals become unreadable.
- **Scientific notation** writes any number as a digit between 1 and 10 times a power of ten.
- **Unit conversion** changes a measurement from one unit to another without changing its size.
- **This topic:** scientific notation; multiplying and dividing in scientific notation; unit conversion by conversion factors.

## Scientific (standard) notation

- **Scientific notation** — a number written as **A × 10ⁿ**, where **1 ≤ A < 10** and **n** is a whole number.
- **A** is the **coefficient** (or mantissa); **n** is the **exponent** or **power of ten**.
- Large number → **positive** exponent. Small number → **negative** exponent.

**Rule for writing a number in scientific notation:**

1. Place the decimal point after the **first non-zero digit**.
2. Count how many places the point moved.
3. Moved **left** → exponent is **positive**. Moved **right** → exponent is **negative**.

| Ordinary number | Scientific notation |
|---|---|
| 300 000 000 | 3 × 10⁸ |
| 45 600 | 4.56 × 10⁴ |
| 2 500 | 2.5 × 10³ |
| 0.0072 | 7.2 × 10⁻³ |
| 0.000 000 15 | 1.5 × 10⁻⁷ |

## Arithmetic in scientific notation

- **Multiplication** — multiply the coefficients, **add** the exponents.
  (2 × 10³) × (3 × 10⁴) = 6 × 10⁷
- **Division** — divide the coefficients, **subtract** the exponents.
  (8 × 10⁶) ÷ (2 × 10²) = 4 × 10⁴
- **Addition and subtraction** — the exponents must be made **equal first**, then add or subtract the coefficients.
  (3 × 10⁴) + (5 × 10³) = (3 × 10⁴) + (0.5 × 10⁴) = 3.5 × 10⁴
- **Powers** — raise the coefficient to the power and **multiply** the exponents.
  (2 × 10³)² = 4 × 10⁶
- Always re-adjust the answer so the coefficient lies between 1 and 10: 45 × 10³ = 4.5 × 10⁴.

## Unit conversion

- A **conversion factor** is a fraction equal to 1, built from an equality between two units.
- From 1 km = 1000 m come two factors: (1000 m / 1 km) and (1 km / 1000 m).
- Multiply by the factor that **cancels** the unit you have and **leaves** the unit you want.

**Method:**

1. Write the measurement.
2. Multiply by a conversion factor arranged so the old unit cancels.
3. Cancel units, then multiply the numbers.

*Example:* 5 km to metres → 5 km × (1000 m / 1 km) = **5000 m**.

**Useful equalities:**

| Quantity | Equality |
|---|---|
| Length | 1 km = 1000 m; 1 m = 100 cm; 1 cm = 10 mm |
| Mass | 1 t = 1000 kg; 1 kg = 1000 g; 1 g = 1000 mg |
| Time | 1 h = 60 min; 1 min = 60 s; 1 h = 3600 s |
| Volume | 1 m³ = 1000 L; 1 L = 1000 cm³ |
| Area | 1 m² = 10 000 cm² |

- Squared and cubed units convert by the **square or cube** of the linear factor:
  1 m = 100 cm → 1 m² = (100)² cm² = 10 000 cm²; 1 m³ = (100)³ cm³ = 1 000 000 cm³.

## Common errors to watch for

- **Coefficient outside 1–10** — 45 × 10³ is not standard form; write **4.5 × 10⁴**.
- **Wrong sign on the exponent** — numbers **less than 1** take a **negative** exponent (0.004 = 4 × 10⁻³, not 4 × 10³).
- **Adding exponents when dividing** — multiply → add exponents; divide → **subtract** them.
- **Adding coefficients without matching exponents** — make the powers of ten equal **before** adding or subtracting.
- **Inverting the conversion factor** — arrange the fraction so the **unwanted unit cancels**; if the answer looks 10⁶ times too big, the factor was upside down.
- **Forgetting to square or cube the factor** for area and volume — 1 m² = 10 000 cm², not 100 cm².`,
          workedExample: `**Task.** (i) Write 0.000 45 and 92 500 000 in scientific notation.
(ii) Evaluate (6 × 10⁵) × (4 × 10⁻²), giving the answer in standard form.
(iii) Convert 72 km/h into metres per second.

**Part (i) — scientific notation**
- 0.000 45 → put the point after the first non-zero digit: 4.5; the point moved **4 places right** → exponent −4.
  **0.000 45 = 4.5 × 10⁻⁴**
- 92 500 000 → 9.25; the point moved **7 places left** → exponent +7.
  **92 500 000 = 9.25 × 10⁷**

**Part (ii) — multiplication**
- Multiply the coefficients: 6 × 4 = 24.
- Add the exponents: 5 + (−2) = 3.
- So the product is 24 × 10³.
- Re-adjust to standard form: 24 × 10³ = **2.4 × 10⁴**.

**Part (iii) — unit conversion**
- 72 km/h means 72 kilometres in one hour.
- Convert kilometres to metres: 72 km × (1000 m / 1 km) = 72 000 m.
- Convert hours to seconds: 1 h = 3600 s.
- So 72 km/h = 72 000 m ÷ 3600 s = **20 m/s**.
- Shortcut check: divide by 3.6 → 72 ÷ 3.6 = 20 ✓

**Answers:** (i) 4.5 × 10⁻⁴ and 9.25 × 10⁷; (ii) 2.4 × 10⁴; (iii) 20 m/s.`,
          quiz: [
            {
              prompt: "In scientific notation A × 10ⁿ, the coefficient A must satisfy…",
              options: ["1 ≤ A < 10", "0 < A < 1", "A > 10", "A = 10"],
              correctIndex: 0,
              explanation: "Standard form needs one non-zero digit before the decimal point.",
            },
            {
              prompt: "Write 5 400 in scientific notation.",
              options: ["5.4 × 10³", "54 × 10²", "5.4 × 10⁻³", "0.54 × 10⁴"],
              correctIndex: 0,
              explanation: "The point moves 3 places left, so the exponent is +3.",
            },
            {
              prompt: "Write 0.0036 in scientific notation.",
              options: ["3.6 × 10⁻³", "3.6 × 10³", "36 × 10⁻⁴", "0.36 × 10⁻²"],
              correctIndex: 0,
              explanation: "The point moves 3 places right, giving a negative exponent.",
            },
            {
              prompt: "A number smaller than 1 has an exponent that is…",
              options: ["negative", "positive", "zero", "always 1"],
              correctIndex: 0,
              explanation: "Numbers below 1 need a negative power of ten.",
            },
            {
              prompt: "(2 × 10⁴) × (3 × 10³) =",
              options: ["6 × 10⁷", "6 × 10¹²", "5 × 10⁷", "6 × 10¹"],
              correctIndex: 0,
              explanation: "Multiply coefficients, add exponents: 6 × 10⁷.",
            },
            {
              prompt: "(9 × 10⁸) ÷ (3 × 10²) =",
              options: ["3 × 10⁶", "3 × 10¹⁰", "6 × 10⁶", "3 × 10⁴"],
              correctIndex: 0,
              explanation: "Divide coefficients, subtract exponents: 3 × 10⁶.",
            },
            {
              prompt: "When multiplying numbers in scientific notation, the exponents are…",
              options: ["added", "subtracted", "multiplied", "divided"],
              correctIndex: 0,
              explanation: "10ᵃ × 10ᵇ = 10^(a+b).",
            },
            {
              prompt: "When dividing numbers in scientific notation, the exponents are…",
              options: ["subtracted", "added", "multiplied", "ignored"],
              correctIndex: 0,
              explanation: "10ᵃ ÷ 10ᵇ = 10^(a−b).",
            },
            {
              prompt: "Before adding numbers in scientific notation you must make the…",
              options: ["exponents equal", "coefficients equal", "units different", "answer negative"],
              correctIndex: 0,
              explanation: "Only like powers of ten can be added directly.",
            },
            {
              prompt: "(2 × 10³)² =",
              options: ["4 × 10⁶", "2 × 10⁶", "4 × 10⁵", "4 × 10⁹"],
              correctIndex: 0,
              explanation: "Square the coefficient, double the exponent.",
            },
            {
              prompt: "45 × 10⁴ written properly in standard form is…",
              options: ["4.5 × 10⁵", "45 × 10⁴", "4.5 × 10³", "0.45 × 10⁵"],
              correctIndex: 0,
              explanation: "The coefficient must be between 1 and 10.",
            },
            {
              prompt: "Convert 3 km to metres.",
              options: ["3000 m", "300 m", "30 m", "30 000 m"],
              correctIndex: 0,
              explanation: "1 km = 1000 m, so 3 km = 3000 m.",
            },
            {
              prompt: "Convert 250 cm to metres.",
              options: ["2.5 m", "25 m", "0.25 m", "2500 m"],
              correctIndex: 0,
              explanation: "Divide by 100: 250 ÷ 100 = 2.5 m.",
            },
            {
              prompt: "Convert 2.5 kg to grams.",
              options: ["2500 g", "250 g", "25 g", "25 000 g"],
              correctIndex: 0,
              explanation: "1 kg = 1000 g, so 2.5 kg = 2500 g.",
            },
            {
              prompt: "How many seconds are in 2 hours?",
              options: ["7200 s", "120 s", "3600 s", "720 s"],
              correctIndex: 0,
              explanation: "1 h = 3600 s, so 2 h = 7200 s.",
            },
            {
              prompt: "A conversion factor is a fraction whose value is…",
              options: ["1", "0", "10", "100"],
              correctIndex: 0,
              explanation: "Its numerator and denominator are equal quantities, so it equals 1.",
            },
            {
              prompt: "1 m² equals how many cm²?",
              options: ["10 000 cm²", "100 cm²", "1000 cm²", "1 000 000 cm²"],
              correctIndex: 0,
              explanation: "Square the linear factor: (100)² = 10 000.",
            },
            {
              prompt: "1 m³ equals how many cm³?",
              options: ["1 000 000 cm³", "10 000 cm³", "1000 cm³", "100 cm³"],
              correctIndex: 0,
              explanation: "Cube the linear factor: (100)³ = 1 000 000.",
            },
            {
              prompt: "Convert 36 km/h to m/s.",
              options: ["10 m/s", "36 m/s", "100 m/s", "3.6 m/s"],
              correctIndex: 0,
              explanation: "Divide by 3.6: 36 ÷ 3.6 = 10 m/s.",
            },
            {
              prompt: "In 6.02 × 10²³, the number 23 is called the…",
              options: ["exponent", "coefficient", "mantissa", "unit"],
              correctIndex: 0,
              explanation: "The power of ten is the exponent; 6.02 is the coefficient.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Write each of the following in scientific notation: (a) 186 000, (b) 0.000 052, (c) 7 400 000.",
              answerKey:
                "(a) 1.86 × 10⁵ (point moved 5 places left). (b) 5.2 × 10⁻⁵ (point moved 5 places right). (c) 7.4 × 10⁶. Award 2 marks each for the correct coefficient and exponent.",
              marks: 6,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Evaluate, giving each answer in standard form: (a) (5 × 10⁶) × (4 × 10⁻³); (b) (8 × 10⁵) ÷ (2 × 10⁻²).",
              answerKey:
                "(a) 5 × 4 = 20 and 6 + (−3) = 3, so 20 × 10³ = 2 × 10⁴. (b) 8 ÷ 2 = 4 and 5 − (−2) = 7, so 4 × 10⁷. Award marks for correct coefficient handling, correct exponent arithmetic and correct standard form.",
              marks: 6,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "A tank holds 0.75 m³ of water. Express this volume in litres and in cm³.",
              answerKey:
                "1 m³ = 1000 L, so 0.75 m³ = 750 L. 1 m³ = 1 000 000 cm³, so 0.75 m³ = 750 000 cm³ (equivalently 750 L × 1000 cm³/L). Award marks for each correct conversion and for showing the factor used.",
              marks: 4,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt: "Which of these is correctly written in standard form?",
              options: ["3.2 × 10⁻⁴", "32 × 10⁻⁵", "0.32 × 10⁻³", "32.0 × 10⁴"],
              correctIndex: 0,
              answerKey: "Only 3.2 × 10⁻⁴ has a coefficient between 1 and 10.",
              marks: 2,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain why scientific notation is used in physics and describe, with an example, the method of converting a measurement from one unit to another using conversion factors.",
              answerKey:
                "A strong answer explains that physics deals with extremely large and extremely small quantities (the speed of light, the size of an atom) which are hard to write, read and compute with in ordinary decimal form; scientific notation writes them compactly as A × 10ⁿ with 1 ≤ A < 10, makes the order of magnitude obvious, simplifies multiplication and division (add/subtract exponents), and shows significant figures clearly. For conversion it should state that a conversion factor is a fraction equal to 1 formed from an equality such as 1 km = 1000 m, that the factor is arranged so the unwanted unit cancels, and give a worked example such as 5 km × (1000 m / 1 km) = 5000 m, or 72 km/h = 72 000 m / 3600 s = 20 m/s. Award marks for the reasons, the definition of a conversion factor, the cancelling method and a correct example.",
              marks: 8,
            },
          ],
        },
        {
          slug: "measurement-quantities-and-units",
          title: "Measurement: Systems, Quantities, Units, Prefixes and Errors",
          objective:
            "By the end of the topic, learners should be able to describe the systems of measurement, distinguish fundamental from derived quantities and state their SI units, apply metric prefixes and conversions, express results to the correct number of significant figures, and distinguish accuracy from precision while identifying errors in measurement. (MoE Grade 10 Period I, CONTENTS 1(c) i–vi.)",
          estimatedMinutes: 180,
          notes: `## Introduction

- No measurement, no physics — every physical law connects **measured** quantities.
- A measurement has two parts: a **number** and a **unit**. Either alone is meaningless.
- **This topic:** systems of measurement; fundamental and derived quantities and units; metric prefixes and conversion; significant figures; accuracy, precision and errors.

## Systems of measurement

- **Measurement** — comparing an unknown quantity with a known standard of the same kind.
- **CGS system** — centimetre, gram, second.
- **FPS (Imperial) system** — foot, pound, second.
- **MKS system** — metre, kilogram, second.
- **SI (Système International d'Unités)** — the modern international system, an extension of MKS; used worldwide in science.
- A good standard unit is **constant, reproducible, universally accepted and easily copied**.

## Fundamental quantities and units

- **Fundamental (base) quantity** — a quantity that cannot be expressed in terms of any other; it is defined on its own.
- The SI system has **seven** base quantities.

| Fundamental quantity | SI unit | Symbol |
|---|---|---|
| Length | metre | m |
| Mass | kilogram | kg |
| Time | second | s |
| Electric current | ampere | A |
| Thermodynamic temperature | kelvin | K |
| Amount of substance | mole | mol |
| Luminous intensity | candela | cd |

## Derived quantities and units

- **Derived quantity** — one obtained by combining fundamental quantities by multiplication or division.
- Its unit is built the same way from base units.

| Derived quantity | Formula | SI unit | In base units |
|---|---|---|---|
| Area | length × breadth | m² | m² |
| Volume | l × b × h | m³ | m³ |
| Density | mass / volume | kg/m³ | kg m⁻³ |
| Speed / velocity | distance / time | m/s | m s⁻¹ |
| Acceleration | velocity / time | m/s² | m s⁻² |
| Force | mass × acceleration | newton (N) | kg m s⁻² |
| Work / energy | force × distance | joule (J) | kg m² s⁻² |
| Power | work / time | watt (W) | kg m² s⁻³ |
| Pressure | force / area | pascal (Pa) | kg m⁻¹ s⁻² |
| Momentum | mass × velocity | kg m/s | kg m s⁻¹ |

## Metric prefixes and conversion

- A **prefix** multiplies the base unit by a power of ten, so huge and tiny values stay readable.

| Prefix | Symbol | Multiplier |
|---|---|---|
| tera | T | 10¹² |
| giga | G | 10⁹ |
| mega | M | 10⁶ |
| kilo | k | 10³ |
| hecto | h | 10² |
| deca | da | 10¹ |
| deci | d | 10⁻¹ |
| centi | c | 10⁻² |
| milli | m | 10⁻³ |
| micro | µ | 10⁻⁶ |
| nano | n | 10⁻⁹ |
| pico | p | 10⁻¹² |

- Converting **to a smaller unit** → **multiply**. Converting **to a larger unit** → **divide**.
- 1 km = 10³ m; 1 mm = 10⁻³ m; 1 µs = 10⁻⁶ s; 5 MW = 5 × 10⁶ W.

## Significant figures

- **Significant figures** — the digits in a measurement that carry real information about its precision.
- The more precise the instrument, the **more** significant figures it can give.

**Rules:**

1. All non-zero digits are significant. (24.7 → 3 s.f.)
2. Zeros **between** non-zero digits are significant. (1005 → 4 s.f.)
3. Leading zeros are **not** significant. (0.0032 → 2 s.f.)
4. Trailing zeros **after a decimal point** are significant. (2.50 → 3 s.f.)
5. Trailing zeros in a whole number without a decimal point are ambiguous — use scientific notation. (2500 → write 2.5 × 10³ for 2 s.f.)

**In calculations:**

- **Multiplying or dividing** — the answer takes the **smallest number of significant figures** among the data.
- **Adding or subtracting** — the answer takes the **fewest decimal places** among the data.
- Round only at the **end** of a calculation.

## Accuracy, precision and errors

- **Accuracy** — how close a measurement is to the **true (accepted) value**.
- **Precision** — how close repeated measurements are **to one another**; also the fineness of the instrument's scale.
- Readings can be **precise but not accurate** (tightly grouped, but around the wrong value) — a common sign of a faulty instrument.

\`\`\`svg Accuracy versus precision on a target
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Targets showing accurate and precise, precise but not accurate, and neither">
  <circle cx="55" cy="70" r="42" fill="none" stroke="#94a3b8"/>
  <circle cx="55" cy="70" r="26" fill="none" stroke="#94a3b8"/>
  <circle cx="55" cy="70" r="10" fill="none" stroke="#94a3b8"/>
  <circle cx="52" cy="68" r="3" fill="#dc2626"/><circle cx="58" cy="72" r="3" fill="#dc2626"/><circle cx="55" cy="65" r="3" fill="#dc2626"/>
  <text x="55" y="130" font-size="10" text-anchor="middle" fill="#334155">accurate + precise</text>
  <circle cx="160" cy="70" r="42" fill="none" stroke="#94a3b8"/>
  <circle cx="160" cy="70" r="26" fill="none" stroke="#94a3b8"/>
  <circle cx="160" cy="70" r="10" fill="none" stroke="#94a3b8"/>
  <circle cx="184" cy="44" r="3" fill="#dc2626"/><circle cx="189" cy="50" r="3" fill="#dc2626"/><circle cx="183" cy="52" r="3" fill="#dc2626"/>
  <text x="160" y="130" font-size="10" text-anchor="middle" fill="#334155">precise, not accurate</text>
  <circle cx="265" cy="70" r="42" fill="none" stroke="#94a3b8"/>
  <circle cx="265" cy="70" r="26" fill="none" stroke="#94a3b8"/>
  <circle cx="265" cy="70" r="10" fill="none" stroke="#94a3b8"/>
  <circle cx="240" cy="45" r="3" fill="#dc2626"/><circle cx="288" cy="90" r="3" fill="#dc2626"/><circle cx="255" cy="98" r="3" fill="#dc2626"/>
  <text x="265" y="130" font-size="10" text-anchor="middle" fill="#334155">neither</text>
</svg>
\`\`\`

**Types of error:**

- **Systematic error** — the same size and direction every time; shifts all readings one way. Causes: **zero error** in the instrument, wrong calibration, poor technique. Reduced by checking and correcting the zero, and by calibrating.
- **Random error** — varies in size and direction from reading to reading. Causes: fluctuating conditions, judgement of the observer, reaction time. Reduced by **taking several readings and averaging**.
- **Parallax error** — reading a scale from the side instead of straight on. Avoided by placing the eye **directly opposite** the mark.
- **Zero error** — the instrument does not read zero when it should; **subtract** the zero error from every reading.

## Common errors to watch for

- **Quoting a number without a unit** — a measurement is a number **and** a unit.
- **Calling mass "weight"** — mass is a fundamental quantity in **kilograms**; weight is a force in **newtons**.
- **Treating temperature in °C as the SI unit** — the SI base unit is the **kelvin (K)**.
- **Confusing accuracy with precision** — accuracy is closeness to the **true value**; precision is closeness of readings **to each other**.
- **Averaging away a systematic error** — averaging only reduces **random** error; a zero error must be **corrected**, not averaged out.
- **Keeping every digit off the calculator** — the answer cannot be more precise than the least precise measurement used.
- **Counting leading zeros as significant** — in 0.0032 only the 3 and 2 count.`,
          workedExample: `**Task.** A rectangular metal block is measured with a metre rule as 12.5 cm long, 4.20 cm wide and 2.0 cm thick. Its mass on a balance is 0.850 kg.
(i) State the significant figures in each measurement. (ii) Find the volume in cm³ and in m³. (iii) Find the density in kg/m³ to the correct number of significant figures. (iv) State which quantities here are fundamental and which derived.

**Step 1 — significant figures**
- 12.5 cm → **3 s.f.**; 4.20 cm → **3 s.f.** (trailing zero after a decimal point counts); 2.0 cm → **2 s.f.**; 0.850 kg → **3 s.f.**

**Step 2 — volume**
- V = l × b × h = 12.5 × 4.20 × 2.0 = 105 cm³.
- The least precise measurement (2.0 cm) has 2 s.f., so V = **1.1 × 10² cm³** (105 cm³ before rounding).
- Convert: 1 m³ = 1 000 000 cm³, so V = 105 ÷ 1 000 000 = **1.05 × 10⁻⁴ m³**.

**Step 3 — density**
- ρ = mass / volume = 0.850 kg ÷ 1.05 × 10⁻⁴ m³ = 8095.2… kg/m³.
- Limited by 2 s.f. (from the 2.0 cm thickness) → ρ ≈ **8.1 × 10³ kg/m³**.
- Reasonable: this is close to the density of iron (about 7.9 × 10³ kg/m³).

**Step 4 — fundamental and derived**
- **Fundamental:** length (12.5 cm, 4.20 cm, 2.0 cm) and mass (0.850 kg).
- **Derived:** volume (m³, from length × length × length) and density (kg/m³, from mass ÷ volume).

**Answers:** (i) 3, 3, 2 and 3 s.f.; (ii) 105 cm³ = 1.05 × 10⁻⁴ m³; (iii) ρ ≈ 8.1 × 10³ kg/m³; (iv) length and mass are fundamental, volume and density are derived.`,
          quiz: [
            {
              prompt: "A measurement must always consist of a number and a…",
              options: ["unit", "symbol", "formula", "graph"],
              correctIndex: 0,
              explanation: "Without a unit the number has no meaning.",
            },
            {
              prompt: "How many fundamental quantities are there in the SI system?",
              options: ["seven", "five", "three", "ten"],
              correctIndex: 0,
              explanation: "Length, mass, time, current, temperature, amount of substance, luminous intensity.",
            },
            {
              prompt: "The SI unit of mass is the…",
              options: ["kilogram", "gram", "newton", "pound"],
              correctIndex: 0,
              explanation: "The kilogram is the SI base unit of mass.",
            },
            {
              prompt: "The SI base unit of thermodynamic temperature is the…",
              options: ["kelvin", "degree Celsius", "degree Fahrenheit", "joule"],
              correctIndex: 0,
              explanation: "The kelvin (K) is the SI base unit.",
            },
            {
              prompt: "The SI unit of electric current is the…",
              options: ["ampere", "volt", "ohm", "coulomb"],
              correctIndex: 0,
              explanation: "Current is a base quantity measured in amperes.",
            },
            {
              prompt: "Which of these is a derived quantity?",
              options: ["density", "length", "time", "mass"],
              correctIndex: 0,
              explanation: "Density = mass ÷ volume, so it is derived.",
            },
            {
              prompt: "The SI unit of force, the newton, is equivalent to…",
              options: ["kg m s⁻²", "kg m s⁻¹", "kg m² s⁻²", "kg m⁻¹ s⁻²"],
              correctIndex: 0,
              explanation: "Force = mass × acceleration = kg × m/s².",
            },
            {
              prompt: "The SI unit of pressure is the…",
              options: ["pascal", "newton", "joule", "watt"],
              correctIndex: 0,
              explanation: "Pressure = force ÷ area, measured in pascals (N/m²).",
            },
            {
              prompt: "The prefix 'kilo' means…",
              options: ["10³", "10⁻³", "10⁶", "10²"],
              correctIndex: 0,
              explanation: "Kilo multiplies the base unit by one thousand.",
            },
            {
              prompt: "The prefix 'milli' means…",
              options: ["10⁻³", "10³", "10⁻⁶", "10⁻²"],
              correctIndex: 0,
              explanation: "Milli means one thousandth.",
            },
            {
              prompt: "The prefix 'micro' (µ) means…",
              options: ["10⁻⁶", "10⁻³", "10⁶", "10⁻⁹"],
              correctIndex: 0,
              explanation: "Micro means one millionth.",
            },
            {
              prompt: "The system based on the centimetre, gram and second is the…",
              options: ["CGS system", "MKS system", "FPS system", "SI system"],
              correctIndex: 0,
              explanation: "CGS stands for centimetre-gram-second.",
            },
            {
              prompt: "How many significant figures are in 0.00405?",
              options: ["3", "5", "2", "6"],
              correctIndex: 0,
              explanation: "Leading zeros do not count; 4, 0 and 5 do.",
            },
            {
              prompt: "How many significant figures are in 25.00?",
              options: ["4", "2", "3", "1"],
              correctIndex: 0,
              explanation: "Trailing zeros after a decimal point are significant.",
            },
            {
              prompt: "When multiplying measurements, the answer is given to the…",
              options: ["smallest number of significant figures in the data", "largest number of significant figures", "number shown on the calculator", "nearest whole number"],
              correctIndex: 0,
              explanation: "The least precise measurement limits the answer.",
            },
            {
              prompt: "Accuracy describes how close a reading is to the…",
              options: ["true value", "other readings", "instrument's scale", "average only"],
              correctIndex: 0,
              explanation: "Accuracy is closeness to the accepted true value.",
            },
            {
              prompt: "Precision describes how close repeated readings are to…",
              options: ["one another", "the true value", "zero", "the maximum"],
              correctIndex: 0,
              explanation: "Precision is the agreement among repeated measurements.",
            },
            {
              prompt: "An error of the same size and direction in every reading is a…",
              options: ["systematic error", "random error", "parallax error", "zero reading"],
              correctIndex: 0,
              explanation: "Systematic errors shift all readings one way.",
            },
            {
              prompt: "Random errors are best reduced by…",
              options: ["taking several readings and averaging", "using one careful reading", "ignoring small values", "changing the unit"],
              correctIndex: 0,
              explanation: "Averaging cancels errors that vary randomly in sign.",
            },
            {
              prompt: "Reading a scale from the side rather than straight on causes…",
              options: ["parallax error", "zero error", "random error only", "no error"],
              correctIndex: 0,
              explanation: "Parallax error comes from the wrong line of sight.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "State the seven fundamental quantities of the SI system with their units and symbols.",
              answerKey:
                "Length — metre (m); mass — kilogram (kg); time — second (s); electric current — ampere (A); thermodynamic temperature — kelvin (K); amount of substance — mole (mol); luminous intensity — candela (cd). Award 1 mark per correct quantity with its unit.",
              marks: 7,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define a derived quantity and express the units of force, work and pressure in terms of SI base units.",
              answerKey:
                "A derived quantity is one obtained by combining fundamental quantities through multiplication or division. Force = mass × acceleration → newton = kg m s⁻². Work = force × distance → joule = kg m² s⁻². Pressure = force ÷ area → pascal = kg m⁻¹ s⁻². Award 2 marks for the definition and 1 mark for each correct base-unit expression.",
              marks: 5,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Distinguish between accuracy and precision, and between systematic and random errors, stating how each type of error can be reduced.",
              answerKey:
                "Accuracy is how close a measurement is to the true or accepted value; precision is how close repeated measurements are to one another (and the fineness of the scale). Readings can be precise without being accurate. A systematic error has the same size and direction each time (e.g. zero error or wrong calibration) and is reduced by checking and correcting the zero and by calibrating the instrument — it cannot be removed by averaging. A random error varies in size and direction (e.g. fluctuating conditions, reaction time) and is reduced by taking several readings and finding the mean. Award marks for both distinctions and both correct remedies.",
              marks: 6,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt: "How many significant figures are in the measurement 0.03060 m?",
              options: ["4", "3", "5", "6"],
              correctIndex: 0,
              answerKey: "Leading zeros do not count; 3, 0, 6 and the trailing 0 after the decimal point do — 4 s.f.",
              marks: 2,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain why standard units are necessary in physics, distinguish fundamental from derived quantities with examples, and describe how metric prefixes make measurements easier to express.",
              answerKey:
                "A strong answer explains that measurement is the comparison of an unknown with a known standard, and that a standard must be constant, reproducible and internationally accepted so results can be repeated and compared anywhere — without it, trade, engineering and science could not exchange results. It distinguishes fundamental quantities (defined independently, not expressible in terms of others — length/metre, mass/kilogram, time/second, current/ampere, temperature/kelvin, amount of substance/mole, luminous intensity/candela) from derived quantities (combinations of base quantities — area m², volume m³, density kg/m³, speed m/s, force N = kg m s⁻², pressure Pa). It should note the systems CGS, MKS, FPS and SI. On prefixes, it explains that each prefix multiplies the base unit by a power of ten (kilo 10³, milli 10⁻³, micro 10⁻⁶, mega 10⁶) so very large and very small values stay short and readable, with an example such as 1 km = 1000 m or 5 MW = 5 × 10⁶ W. Award marks for the need for standards, the correct distinction with examples, and the explanation of prefixes with an example.",
              marks: 10,
            },
          ],
        },
        {
          slug: "dimensional-analysis",
          title: "Dimensional Analysis and Its Use in Physics",
          objective:
            "By the end of the topic, learners should be able to write the dimensions of fundamental and derived quantities, use dimensional analysis to check the homogeneity of an equation, derive relationships between physical quantities, and state the limitations of the method. (MoE Grade 10 Period I, CONTENTS 1(e) 'Dimensional analysis and its use in physics'.)",
          estimatedMinutes: 150,
          notes: `## Introduction

- Every physical quantity is built from the base quantities **mass, length and time**.
- The **dimensions** of a quantity show which base quantities build it, and to what power.
- **This topic:** dimensional symbols; dimensions of derived quantities; checking equations for homogeneity; deriving formulae; limitations.

## Dimensional symbols

- **Dimension** — the way a physical quantity is composed of the fundamental quantities.
- Written in square brackets: [ ].

| Fundamental quantity | Dimension |
|---|---|
| Mass | M |
| Length | L |
| Time | T |
| Electric current | I |
| Temperature | Θ |

- At Grade 10 most work uses only **M, L and T**.
- A **dimensionless** quantity has no dimensions — written [M⁰L⁰T⁰] or simply 1. Examples: angle, refractive index, relative density, any pure number, π.

## Dimensions of derived quantities

Build the dimension from the defining formula.

| Quantity | Formula | Dimensions | SI unit |
|---|---|---|---|
| Area | length × length | [L²] | m² |
| Volume | length³ | [L³] | m³ |
| Density | mass / volume | [ML⁻³] | kg/m³ |
| Velocity | displacement / time | [LT⁻¹] | m/s |
| Acceleration | velocity / time | [LT⁻²] | m/s² |
| Force | mass × acceleration | [MLT⁻²] | N |
| Momentum | mass × velocity | [MLT⁻¹] | kg m/s |
| Work / energy | force × distance | [ML²T⁻²] | J |
| Power | work / time | [ML²T⁻³] | W |
| Pressure | force / area | [ML⁻¹T⁻²] | Pa |
| Frequency | 1 / time | [T⁻¹] | Hz |

*Worked derivation — pressure:*
- Pressure = force ÷ area = [MLT⁻²] ÷ [L²] = **[ML⁻¹T⁻²]**.

## Principle of homogeneity

- **Principle of homogeneity** — in a correct physical equation, **every term has the same dimensions**.
- Quantities can only be **added or subtracted** if they have the same dimensions.
- If the two sides of an equation do not match dimensionally, the equation is **wrong**.

**Checking an equation:**

1. Write the dimensions of the left-hand side.
2. Write the dimensions of every term on the right-hand side.
3. If all match, the equation is **dimensionally consistent (homogeneous)**.

*Example — check v = u + at:*
- [v] = [LT⁻¹]; [u] = [LT⁻¹]; [at] = [LT⁻²][T] = [LT⁻¹].
- All three terms are [LT⁻¹] → the equation is **homogeneous** ✓

## Uses of dimensional analysis

- **To check an equation** for correctness (homogeneity).
- **To derive a relationship** between quantities when the form is known.
- **To convert units** from one system to another.
- **To find the units** of an unknown constant in a formula.

**Deriving a formula — method:**

1. Write the quantity as a product of powers of the quantities it depends on, with an unknown constant k.
2. Replace each by its dimensions.
3. Equate the powers of M, L and T on both sides.
4. Solve for the indices and substitute back.

## Limitations of dimensional analysis

- It gives **no value** for the dimensionless constant k (such as ½, 2 or π).
- It cannot handle equations with **more than three unknown indices** using only M, L and T.
- It cannot derive relations that involve **sums of terms** (e.g. s = ut + ½at²).
- It cannot distinguish quantities with the **same dimensions** — work and torque are both [ML²T⁻²].
- It cannot handle **trigonometric, exponential or logarithmic** functions, whose arguments must be dimensionless.

## Common errors to watch for

- **Confusing dimensions with units** — the dimension of force is [MLT⁻²]; its **unit** is the newton.
- **Writing dimensions for numbers** — pure numbers and angles are **dimensionless**.
- **Forgetting the negative index** — velocity is [LT⁻¹], not [LT].
- **Assuming a homogeneous equation is correct** — homogeneity is **necessary but not sufficient**; the constant may still be wrong.
- **Adding terms with different dimensions** — you cannot add a length to a time.
- **Expecting the numerical constant** — dimensional analysis never gives ½ or π.`,
          workedExample: `**Task.** (i) Find the dimensions of work and of power.
(ii) Use the principle of homogeneity to test whether the equation s = ut + ½at² is dimensionally correct.
(iii) The period T of a simple pendulum is thought to depend on its length l and the acceleration due to gravity g. Use dimensional analysis to find how T depends on l and g.

**Part (i) — dimensions of work and power**
- Work = force × distance. Force = mass × acceleration = [M][LT⁻²] = [MLT⁻²].
- So work = [MLT⁻²] × [L] = **[ML²T⁻²]**.
- Power = work ÷ time = [ML²T⁻²] ÷ [T] = **[ML²T⁻³]**.

**Part (ii) — testing s = ut + ½at²**
- Left side: [s] = [L].
- First term: [ut] = [LT⁻¹][T] = [L].
- Second term: [½at²] = [LT⁻²][T²] = [L] (the ½ is dimensionless and is ignored).
- Every term is [L] → the equation is **dimensionally homogeneous** ✓
- Note: this test cannot confirm the ½ — dimensional analysis never gives numerical constants.

**Part (iii) — deriving the pendulum relation**
- Assume T = k lᵃ gᵇ, where k is a dimensionless constant.
- Dimensions: [T] = [L]ᵃ [LT⁻²]ᵇ = [L]^(a+b) [T]^(−2b).
- Compare powers of L: a + b = 0.
- Compare powers of T: −2b = 1, so **b = −½**.
- Then a = −b = **+½**.
- Therefore T = k l^½ g^(−½) = **k √(l/g)**.
- Experiment shows k = 2π, giving the familiar T = 2π√(l/g) — the value of k had to come from experiment, not from the dimensions.

**Answers:** (i) work [ML²T⁻²], power [ML²T⁻³]; (ii) homogeneous — every term is [L]; (iii) T = k√(l/g), with k found experimentally to be 2π.`,
          quiz: [
            {
              prompt: "The dimension of mass is written as…",
              options: ["M", "L", "T", "K"],
              correctIndex: 0,
              explanation: "Mass, length and time are M, L and T.",
            },
            {
              prompt: "The dimensions of velocity are…",
              options: ["[LT⁻¹]", "[LT]", "[L⁻¹T]", "[MLT⁻¹]"],
              correctIndex: 0,
              explanation: "Velocity = displacement ÷ time = L ÷ T.",
            },
            {
              prompt: "The dimensions of acceleration are…",
              options: ["[LT⁻²]", "[LT⁻¹]", "[L²T⁻²]", "[MLT⁻²]"],
              correctIndex: 0,
              explanation: "Acceleration = velocity ÷ time = LT⁻¹ ÷ T.",
            },
            {
              prompt: "The dimensions of force are…",
              options: ["[MLT⁻²]", "[ML²T⁻²]", "[MLT⁻¹]", "[ML⁻¹T⁻²]"],
              correctIndex: 0,
              explanation: "Force = mass × acceleration = M × LT⁻².",
            },
            {
              prompt: "The dimensions of work or energy are…",
              options: ["[ML²T⁻²]", "[MLT⁻²]", "[ML²T⁻³]", "[ML⁻¹T⁻²]"],
              correctIndex: 0,
              explanation: "Work = force × distance = MLT⁻² × L.",
            },
            {
              prompt: "The dimensions of power are…",
              options: ["[ML²T⁻³]", "[ML²T⁻²]", "[MLT⁻³]", "[ML⁻¹T⁻²]"],
              correctIndex: 0,
              explanation: "Power = work ÷ time = ML²T⁻² ÷ T.",
            },
            {
              prompt: "The dimensions of pressure are…",
              options: ["[ML⁻¹T⁻²]", "[MLT⁻²]", "[ML²T⁻²]", "[ML⁻³]"],
              correctIndex: 0,
              explanation: "Pressure = force ÷ area = MLT⁻² ÷ L².",
            },
            {
              prompt: "The dimensions of density are…",
              options: ["[ML⁻³]", "[ML³]", "[M⁻¹L³]", "[MLT⁻³]"],
              correctIndex: 0,
              explanation: "Density = mass ÷ volume = M ÷ L³.",
            },
            {
              prompt: "The dimensions of momentum are…",
              options: ["[MLT⁻¹]", "[MLT⁻²]", "[ML²T⁻¹]", "[ML⁻¹T]"],
              correctIndex: 0,
              explanation: "Momentum = mass × velocity = M × LT⁻¹.",
            },
            {
              prompt: "Which quantity is dimensionless?",
              options: ["relative density", "force", "power", "momentum"],
              correctIndex: 0,
              explanation: "Relative density is a ratio of two densities, so it has no dimensions.",
            },
            {
              prompt: "The principle of homogeneity states that every term in a correct equation must have the same…",
              options: ["dimensions", "numerical value", "sign", "symbol"],
              correctIndex: 0,
              explanation: "Only quantities of the same dimensions can be added or equated.",
            },
            {
              prompt: "Two physical quantities can be added only if they have the same…",
              options: ["dimensions", "magnitude", "direction", "symbol"],
              correctIndex: 0,
              explanation: "You cannot add a length to a time.",
            },
            {
              prompt: "Dimensional analysis cannot give the value of…",
              options: ["a dimensionless constant", "the dimensions of force", "the unit of power", "the dimensions of density"],
              correctIndex: 0,
              explanation: "Constants like ½ or 2π must come from experiment.",
            },
            {
              prompt: "The dimensions of frequency are…",
              options: ["[T⁻¹]", "[T]", "[LT⁻¹]", "[MT⁻¹]"],
              correctIndex: 0,
              explanation: "Frequency = 1 ÷ time.",
            },
            {
              prompt: "The dimensions of area are…",
              options: ["[L²]", "[L³]", "[L]", "[ML²]"],
              correctIndex: 0,
              explanation: "Area = length × length.",
            },
            {
              prompt: "In the equation v = u + at, the term at has dimensions…",
              options: ["[LT⁻¹]", "[LT⁻²]", "[L]", "[T]"],
              correctIndex: 0,
              explanation: "[LT⁻²] × [T] = [LT⁻¹], matching a velocity.",
            },
            {
              prompt: "Work and torque both have dimensions [ML²T⁻²]. This shows that dimensional analysis cannot…",
              options: ["distinguish quantities with the same dimensions", "check homogeneity", "give dimensions of force", "convert units"],
              correctIndex: 0,
              explanation: "Identical dimensions do not mean identical quantities.",
            },
            {
              prompt: "The argument of a sine, logarithm or exponential must be…",
              options: ["dimensionless", "a length", "a time", "a force"],
              correctIndex: 0,
              explanation: "These functions only accept pure numbers.",
            },
            {
              prompt: "A dimensionally homogeneous equation is…",
              options: ["possibly correct but not proved correct", "always correct", "always wrong", "never testable"],
              correctIndex: 0,
              explanation: "Homogeneity is necessary but not sufficient for correctness.",
            },
            {
              prompt: "The dimension of a pure number such as 5 or π is…",
              options: ["[M⁰L⁰T⁰]", "[L]", "[T]", "[M]"],
              correctIndex: 0,
              explanation: "Pure numbers are dimensionless.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Write down the dimensions of (a) force, (b) work, (c) power and (d) pressure, showing how each is obtained.",
              answerKey:
                "(a) Force = mass × acceleration = [M][LT⁻²] = [MLT⁻²]. (b) Work = force × distance = [MLT⁻²][L] = [ML²T⁻²]. (c) Power = work ÷ time = [ML²T⁻²]/[T] = [ML²T⁻³]. (d) Pressure = force ÷ area = [MLT⁻²]/[L²] = [ML⁻¹T⁻²]. Award 1 mark for each correct dimension and 1 mark for showing the derivation.",
              marks: 6,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Use the principle of homogeneity to test whether the equation v² = u² + 2as is dimensionally correct.",
              answerKey:
                "[v²] = [LT⁻¹]² = [L²T⁻²]. [u²] = [L²T⁻²]. [2as] = [LT⁻²][L] = [L²T⁻²] (2 is dimensionless). All terms have dimensions [L²T⁻²], so the equation is dimensionally homogeneous and may be correct. Award marks for the dimensions of each term and the correct conclusion.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State three uses and three limitations of dimensional analysis.",
              answerKey:
                "Uses (any three): to check whether an equation is dimensionally correct (homogeneity); to derive a relationship between physical quantities; to convert units from one system to another; to find the units or dimensions of an unknown constant. Limitations (any three): it gives no value for dimensionless constants such as ½ or 2π; it cannot derive equations containing sums of terms; it cannot distinguish quantities with identical dimensions such as work and torque; it fails when more than three unknown indices are involved; it cannot handle trigonometric, exponential or logarithmic functions. Award 1 mark per valid point.",
              marks: 6,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt: "Which pair of quantities has the same dimensions?",
              options: ["work and torque", "force and power", "velocity and acceleration", "mass and density"],
              correctIndex: 0,
              answerKey: "Work and torque are both [ML²T⁻²].",
              marks: 2,
            },
            {
              type: "ESSAY",
              prompt:
                "The period T of a simple pendulum depends on its length l and the acceleration due to gravity g. Using dimensional analysis, derive an expression for T, and explain why the method cannot give the complete formula.",
              answerKey:
                "A strong answer assumes T = k lᵃ gᵇ with k dimensionless, substitutes dimensions [T] = [L]ᵃ[LT⁻²]ᵇ = [L]^(a+b)[T]^(−2b), equates powers — for T: −2b = 1 so b = −½; for L: a + b = 0 so a = ½ — and concludes T = k√(l/g). It must then explain that dimensional analysis can never determine the dimensionless constant k, because a pure number has no dimensions and so leaves no trace in the equation; experiment (or a full theoretical derivation) is needed to show that k = 2π, giving T = 2π√(l/g). Award marks for setting up the equation with indices, correct comparison of powers, the correct final relation, and a clear explanation of the limitation.",
              marks: 8,
            },
          ],
        },
        {
          slug: "measuring-instruments",
          title: "Measuring Instruments",
          objective:
            "By the end of the topic, learners should be able to name the instruments used to measure length, mass, time and temperature, state the least count of each, read a vernier caliper and a micrometer screw gauge, and account for zero error and parallax error. (MoE Grade 10 Period I, CONTENTS 1(f) 'Measuring instruments'.)",
          estimatedMinutes: 160,
          notes: `## Introduction

- Each quantity has instruments suited to its size — a metre rule cannot measure the thickness of a wire.
- The **least count** is the smallest reading an instrument can give; it fixes how precise the result can be.
- **This topic:** instruments for length, mass, time and temperature; least counts; reading the vernier caliper and micrometer screw gauge; zero and parallax error.

## Least count

- **Least count** — the smallest quantity an instrument can measure; the value of one smallest division on its scale.
- The least count sets the number of significant figures a reading can carry.

| Instrument | Measures | Least count |
|---|---|---|
| Metre rule | length | 1 mm (0.1 cm) |
| Vernier caliper | length | 0.1 mm (0.01 cm) |
| Micrometer screw gauge | length | 0.01 mm |
| Beam balance | mass | depends on rider, often 0.1 g |
| Electronic balance | mass | 0.01 g or 0.001 g |
| Spring balance | weight (force) | depends on scale, e.g. 0.1 N |
| Stopwatch (analogue) | time | 0.1 s or 0.2 s |
| Stopwatch (digital) | time | 0.01 s |
| Thermometer (lab) | temperature | 1 °C |
| Measuring cylinder | volume | 1 cm³ (varies) |

## Instruments for length

- **Metre rule** — straight lengths from a few centimetres up to 1 m; read to the nearest millimetre.
- **Tape measure** — long distances such as a field or a room.
- **Vernier caliper** — small lengths, internal and external diameters, and depths, to 0.1 mm.
- **Micrometer screw gauge** — very small thicknesses (wire, paper, sheet metal) to 0.01 mm.

## The vernier caliper

- Has a fixed **main scale** graduated in mm and a sliding **vernier scale** with 10 divisions.
- 10 vernier divisions span 9 mm, so one vernier division = 0.9 mm.
- **Least count = 1 main scale division − 1 vernier scale division = 1 mm − 0.9 mm = 0.1 mm.**

**Reading a vernier caliper:**

1. Read the **main scale** just before the vernier zero mark — this is the whole millimetres.
2. Find the vernier division that **lines up exactly** with any main-scale mark.
3. Multiply that vernier number by the least count (0.1 mm).
4. **Reading = main scale reading + (vernier coincidence × least count).**

*Example:* main scale 2.4 cm (24 mm), 6th vernier division coincides → 24 mm + (6 × 0.1) = 24.6 mm = **2.46 cm**.

\`\`\`svg Main scale and vernier scale on a caliper
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A main scale in millimetres with a vernier scale sliding beneath it">
  <line x1="20" y1="45" x2="300" y2="45" stroke="#334155" stroke-width="1.5"/>
  <g stroke="#334155" stroke-width="1">
    <line x1="40" y1="45" x2="40" y2="28"/><line x1="66" y1="45" x2="66" y2="33"/>
    <line x1="92" y1="45" x2="92" y2="33"/><line x1="118" y1="45" x2="118" y2="33"/>
    <line x1="144" y1="45" x2="144" y2="28"/><line x1="170" y1="45" x2="170" y2="33"/>
    <line x1="196" y1="45" x2="196" y2="33"/><line x1="222" y1="45" x2="222" y2="33"/>
    <line x1="248" y1="45" x2="248" y2="28"/>
  </g>
  <text x="40" y="22" font-size="9" text-anchor="middle" fill="#334155">2</text>
  <text x="144" y="22" font-size="9" text-anchor="middle" fill="#334155">3</text>
  <text x="248" y="22" font-size="9" text-anchor="middle" fill="#334155">4</text>
  <text x="292" y="38" font-size="9" fill="#334155">cm</text>
  <line x1="20" y1="62" x2="300" y2="62" stroke="#1d4ed8" stroke-width="1.5"/>
  <g stroke="#1d4ed8" stroke-width="1">
    <line x1="66" y1="62" x2="66" y2="79"/><line x1="89" y1="62" x2="89" y2="75"/>
    <line x1="112" y1="62" x2="112" y2="75"/><line x1="135" y1="62" x2="135" y2="75"/>
    <line x1="158" y1="62" x2="158" y2="75"/><line x1="181" y1="62" x2="181" y2="79"/>
    <line x1="204" y1="62" x2="204" y2="75"/><line x1="227" y1="62" x2="227" y2="75"/>
  </g>
  <text x="66" y="92" font-size="9" text-anchor="middle" fill="#1d4ed8">0</text>
  <text x="181" y="92" font-size="9" text-anchor="middle" fill="#1d4ed8">5</text>
  <text x="181" y="108" font-size="9" text-anchor="middle" fill="#dc2626">coinciding mark</text>
  <line x1="181" y1="45" x2="181" y2="62" stroke="#dc2626" stroke-width="1.5"/>
</svg>
\`\`\`

## The micrometer screw gauge

- Has a **main (sleeve) scale** in mm and a rotating **thimble scale**, usually with 50 divisions.
- The screw advances a fixed distance per turn — the **pitch**, commonly 0.5 mm.
- **Least count = pitch ÷ number of thimble divisions = 0.5 mm ÷ 50 = 0.01 mm.**

**Reading a micrometer:**

1. Read the **sleeve scale** (whole and half millimetres) up to the edge of the thimble.
2. Read the **thimble division** in line with the horizontal reference line.
3. **Reading = sleeve reading + (thimble division × 0.01 mm).**

*Example:* sleeve 5.5 mm, thimble on 32 → 5.5 + (32 × 0.01) = **5.82 mm**.

- Turn only the **ratchet** at the end — it clicks when the grip is right and prevents crushing the object.

## Instruments for mass, time, temperature and volume

- **Beam balance** — compares an unknown mass with standard masses; measures **mass**, and its reading does not change with location.
- **Electronic (digital) balance** — gives mass directly on a display; must be tared (zeroed) before use.
- **Spring balance** — measures **weight** (a force, in newtons) using the extension of a spring; its reading changes where gravity differs.
- **Stopwatch** — measures time intervals; digital models read to 0.01 s.
- **Thermometer** — measures temperature, usually in °C; the liquid-in-glass type uses the expansion of mercury or alcohol.
- **Measuring cylinder** — measures the volume of liquids; read the **bottom of the meniscus** at eye level.
- **Displacement can (eureka can)** — finds the volume of an irregular solid by the water it displaces.
- **Hydrometer** — measures the relative density of a liquid.
- **Density bottle** — measures the density or relative density of liquids accurately.

## Errors in using instruments

- **Zero error** — the instrument does not read zero when it should.
  - **Positive zero error** — reads above zero when closed → **subtract** it from every reading.
  - **Negative zero error** — reads below zero when closed → **add** it (subtracting a negative).
  - **Correct reading = observed reading − zero error.**
- **Parallax error** — the eye is not directly opposite the mark. Avoid by looking **straight on**, perpendicular to the scale.
- **Backlash error** — from reversing the screw direction on a micrometer; always turn the same way when closing.
- **Reaction-time error** — in stopwatch timing; reduce by timing many oscillations and dividing.

## Common errors to watch for

- **Reporting more digits than the least count allows** — a metre rule cannot give 12.345 cm.
- **Ignoring the zero error** — check the instrument closed **before** measuring, and correct every reading.
- **Adding a positive zero error instead of subtracting it** — the rule is *correct = observed − zero error*.
- **Reading the meniscus from above** — read the **bottom** of the curve, eye level with it.
- **Confusing the beam balance and spring balance** — the beam balance gives **mass** (kg), the spring balance gives **weight** (N).
- **Over-tightening the micrometer** — use the ratchet, or the object and the screw are both damaged.
- **Choosing the wrong instrument** — a metre rule for a wire's diameter gives a useless result; use the micrometer.`,
          workedExample: `**Task.** A student measures the diameter of a copper wire with a micrometer screw gauge of pitch 0.5 mm and 50 divisions on the thimble.
When the jaws are fully closed the thimble reads 3 divisions above zero. With the wire in place, the sleeve reads 1.5 mm and the thimble reads 28.
(i) Find the least count. (ii) Find the observed reading. (iii) State the zero error and find the correct diameter. (iv) Give the answer in metres.

**Step 1 — least count**
- Least count = pitch ÷ number of thimble divisions = 0.5 mm ÷ 50 = **0.01 mm**.

**Step 2 — observed reading**
- Sleeve reading = 1.5 mm.
- Thimble contribution = 28 × 0.01 mm = 0.28 mm.
- Observed reading = 1.5 + 0.28 = **1.78 mm**.

**Step 3 — zero error and correction**
- The thimble reads 3 divisions **above** zero when closed, so the zero error is **positive**:
  zero error = 3 × 0.01 = **+0.03 mm**.
- Correct reading = observed reading − zero error = 1.78 − 0.03 = **1.75 mm**.

**Step 4 — convert to metres**
- 1 mm = 10⁻³ m, so 1.75 mm = 1.75 × 10⁻³ m.

**Answers:** (i) 0.01 mm; (ii) 1.78 mm; (iii) zero error +0.03 mm, correct diameter 1.75 mm; (iv) 1.75 × 10⁻³ m.`,
          quiz: [
            {
              prompt: "The least count of an instrument is the…",
              options: ["smallest quantity it can measure", "largest quantity it can measure", "average of its readings", "size of its scale"],
              correctIndex: 0,
              explanation: "It is the value of one smallest division.",
            },
            {
              prompt: "The least count of an ordinary metre rule is…",
              options: ["1 mm", "0.1 mm", "0.01 mm", "1 cm"],
              correctIndex: 0,
              explanation: "A metre rule is graduated in millimetres.",
            },
            {
              prompt: "The least count of a vernier caliper is normally…",
              options: ["0.1 mm", "1 mm", "0.01 mm", "0.5 mm"],
              correctIndex: 0,
              explanation: "1 mm − 0.9 mm = 0.1 mm.",
            },
            {
              prompt: "The least count of a micrometer screw gauge is normally…",
              options: ["0.01 mm", "0.1 mm", "1 mm", "0.5 mm"],
              correctIndex: 0,
              explanation: "Pitch 0.5 mm ÷ 50 divisions = 0.01 mm.",
            },
            {
              prompt: "On a vernier caliper, 10 vernier divisions are equal in length to…",
              options: ["9 mm", "10 mm", "11 mm", "5 mm"],
              correctIndex: 0,
              explanation: "That is what gives a least count of 0.1 mm.",
            },
            {
              prompt: "The distance the micrometer screw advances in one complete turn is the…",
              options: ["pitch", "least count", "zero error", "thimble"],
              correctIndex: 0,
              explanation: "Pitch is the advance per revolution.",
            },
            {
              prompt: "The best instrument for measuring the diameter of a thin wire is the…",
              options: ["micrometer screw gauge", "metre rule", "tape measure", "measuring cylinder"],
              correctIndex: 0,
              explanation: "Only the micrometer resolves 0.01 mm.",
            },
            {
              prompt: "The instrument that measures mass by comparison with standard masses is the…",
              options: ["beam balance", "spring balance", "hydrometer", "thermometer"],
              correctIndex: 0,
              explanation: "A beam balance compares an unknown mass with known masses.",
            },
            {
              prompt: "A spring balance actually measures…",
              options: ["weight", "mass", "volume", "density"],
              correctIndex: 0,
              explanation: "It measures the force of gravity on the body, in newtons.",
            },
            {
              prompt: "The volume of an irregular solid is best found using a…",
              options: ["displacement (eureka) can", "metre rule", "micrometer", "stopwatch"],
              correctIndex: 0,
              explanation: "The solid displaces its own volume of water.",
            },
            {
              prompt: "When reading a measuring cylinder you should read the…",
              options: ["bottom of the meniscus at eye level", "top of the meniscus", "middle of the cylinder", "highest mark"],
              correctIndex: 0,
              explanation: "Reading the bottom of the curve at eye level avoids parallax.",
            },
            {
              prompt: "The relative density of a liquid can be measured directly with a…",
              options: ["hydrometer", "thermometer", "stopwatch", "spring balance"],
              correctIndex: 0,
              explanation: "A hydrometer floats at a depth set by the liquid's relative density.",
            },
            {
              prompt: "An instrument that does not read zero when it should has a…",
              options: ["zero error", "random error", "parallax error", "backlash"],
              correctIndex: 0,
              explanation: "This is a systematic zero error.",
            },
            {
              prompt: "The correct reading is obtained from the observed reading by…",
              options: ["subtracting the zero error", "adding the zero error always", "ignoring the zero error", "doubling it"],
              correctIndex: 0,
              explanation: "Correct = observed − zero error (signs included).",
            },
            {
              prompt: "Looking at a scale from the side instead of straight on gives…",
              options: ["parallax error", "zero error", "backlash error", "no error"],
              correctIndex: 0,
              explanation: "The line of sight must be perpendicular to the scale.",
            },
            {
              prompt: "The ratchet on a micrometer is used to…",
              options: ["apply the correct grip without crushing", "measure the pitch", "correct zero error", "read the thimble"],
              correctIndex: 0,
              explanation: "It clicks at the right pressure, giving consistent readings.",
            },
            {
              prompt: "A vernier reading has main scale 3.2 cm and the 4th vernier division coinciding. The reading is…",
              options: ["3.24 cm", "3.4 cm", "3.04 cm", "3.42 cm"],
              correctIndex: 0,
              explanation: "3.2 cm + (4 × 0.01 cm) = 3.24 cm.",
            },
            {
              prompt: "A micrometer shows sleeve 4.5 mm and thimble 20. The reading is…",
              options: ["4.70 mm", "4.52 mm", "6.50 mm", "4.20 mm"],
              correctIndex: 0,
              explanation: "4.5 + (20 × 0.01) = 4.70 mm.",
            },
            {
              prompt: "Timing many oscillations of a pendulum and dividing reduces…",
              options: ["reaction-time error", "zero error", "parallax error", "backlash error"],
              correctIndex: 0,
              explanation: "The fixed reaction time is spread over many swings.",
            },
            {
              prompt: "A digital stopwatch typically reads to the nearest…",
              options: ["0.01 s", "1 s", "0.1 min", "0.001 s"],
              correctIndex: 0,
              explanation: "Digital stopwatches usually display hundredths of a second.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define least count and state the least count of a metre rule, a vernier caliper and a micrometer screw gauge.",
              answerKey:
                "Least count is the smallest quantity an instrument can measure — the value of one smallest division on its scale. Metre rule: 1 mm (0.1 cm). Vernier caliper: 0.1 mm (0.01 cm). Micrometer screw gauge: 0.01 mm. Award 2 marks for the definition and 1 mark for each correct value.",
              marks: 5,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "A micrometer has a pitch of 0.5 mm and 50 divisions on its thimble. Calculate its least count, and find the reading when the sleeve shows 7.0 mm and the thimble shows 35 divisions.",
              answerKey:
                "Least count = pitch ÷ number of divisions = 0.5 ÷ 50 = 0.01 mm. Reading = sleeve + (thimble × least count) = 7.0 + (35 × 0.01) = 7.0 + 0.35 = 7.35 mm. Award marks for the least count, the method and the final reading.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain what is meant by zero error, distinguish positive from negative zero error, and state how each is corrected.",
              answerKey:
                "A zero error occurs when an instrument does not read zero when it should — for example when the jaws of a caliper or micrometer are fully closed. It is a systematic error present in every reading. A positive zero error means the instrument reads above zero when closed, and the error must be subtracted from every observed reading. A negative zero error means it reads below zero, so the (negative) error is subtracted, which has the effect of adding to the reading. In both cases correct reading = observed reading − zero error. Award marks for the definition, both types and the correction rule.",
              marks: 5,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt: "Which instrument would you choose to measure the thickness of a sheet of paper?",
              options: ["micrometer screw gauge", "metre rule", "tape measure", "measuring cylinder"],
              correctIndex: 0,
              answerKey: "Only the micrometer, with a least count of 0.01 mm, is fine enough.",
              marks: 2,
            },
            {
              type: "ESSAY",
              prompt:
                "Describe how a vernier caliper is constructed and how a reading is taken from it, and explain two precautions that should be observed to obtain an accurate result.",
              answerKey:
                "A strong answer describes a fixed main scale graduated in millimetres with jaws for external measurement, inside jaws for internal diameters and a depth rod, together with a sliding vernier scale of 10 divisions spanning 9 mm of the main scale, giving a least count of 1 mm − 0.9 mm = 0.1 mm. For taking a reading: close the jaws gently on the object; read the main scale immediately before the vernier zero to get the whole millimetres; find the vernier division that coincides exactly with a main-scale mark; multiply that number by the least count; add the two, so reading = main scale + (coincidence × 0.1 mm), with a worked example such as 24 mm + 6 × 0.1 mm = 24.6 mm. Precautions (any two, explained): check and correct for zero error by closing the jaws first; view the scale straight on to avoid parallax error; do not over-tighten the jaws, which distorts soft objects; take several readings at different points and average to reduce random error; keep the jaws clean. Award marks for the construction, the least count, the reading method with an example, and two well-explained precautions.",
              marks: 10,
            },
          ],
        },
        {
          slug: "scalar-and-vector-quantities",
          title: "Scalar and Vector Quantities",
          objective:
            "By the end of the topic, learners should be able to define scalar and vector quantities, classify physical quantities as scalars or vectors, represent vectors by arrows, and find the resultant of two vectors acting in the same, opposite and perpendicular directions. (MoE Grade 10 Period I, CONTENTS 2(a) and 2(b).)",
          estimatedMinutes: 150,
          notes: `## Introduction

- Say "5 kg" and the quantity is complete; say "5 N" and the question "in which direction?" still stands.
- Physical quantities divide into two classes by whether direction is part of the quantity.
- **This topic:** definitions of scalars and vectors; classifying quantities; representing vectors; finding resultants.

## Definitions

- **Scalar quantity** — a quantity that has **magnitude (size) only**. Fully described by a number and a unit.
- **Vector quantity** — a quantity that has **both magnitude and direction**. Needs a number, a unit **and** a direction.

## Classification of quantities

| Scalars | Vectors |
|---|---|
| distance | displacement |
| speed | velocity |
| mass | weight |
| time | acceleration |
| temperature | force |
| energy / work | momentum |
| power | impulse |
| volume | electric field intensity |
| density | magnetic flux density |
| area | torque (moment) |
| electric charge | — |
| pressure | — |

**The classic pairs:**

- **Distance** (scalar) — the total path length travelled. **Displacement** (vector) — the straight-line change in position, from start to finish, with direction.
- **Speed** (scalar) — rate of covering distance. **Velocity** (vector) — rate of change of displacement, with direction.
- **Mass** (scalar) — the quantity of matter in a body, in kilograms; the same everywhere. **Weight** (vector) — the force of gravity on the body, in newtons, directed downwards; changes with location.

## Representing a vector

- A vector is drawn as an **arrow**: the **length** shows the magnitude (to a chosen scale), the **arrowhead** shows the direction.
- Written **a** in bold, or with an arrow above the letter; its magnitude is written |**a**|.
- A **scale** must be stated, e.g. 1 cm represents 10 N.

## Addition of vectors

- The single vector that has the same effect as two or more vectors together is their **resultant**.

**Same direction (parallel):**
- Add the magnitudes; the resultant acts in that same direction.
- 5 N east + 3 N east = **8 N east**.

**Opposite directions (antiparallel):**
- Subtract the smaller from the larger; the resultant acts in the direction of the larger.
- 5 N east + 3 N west = **2 N east**.

**Perpendicular (at 90°):**
- Use Pythagoras for the magnitude and the tangent for the direction.
- R = √(A² + B²), and tan θ = B / A.
- 3 N east and 4 N north → R = √(3² + 4²) = **5 N**, at θ = tan⁻¹(4/3) ≈ **53.1°** north of east.

\`\`\`svg Resultant of two perpendicular forces
<svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A 3 newton force east and a 4 newton force north giving a 5 newton resultant">
  <line x1="30" y1="130" x2="140" y2="130" stroke="#dc2626" stroke-width="2.5"/>
  <polygon points="140,130 130,126 130,134" fill="#dc2626"/>
  <line x1="30" y1="130" x2="30" y2="30" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="30,30 26,40 34,40" fill="#2563eb"/>
  <line x1="30" y1="130" x2="140" y2="30" stroke="#059669" stroke-width="2.5" stroke-dasharray="5 3"/>
  <polygon points="140,30 130,32 134,40" fill="#059669"/>
  <line x1="140" y1="130" x2="140" y2="30" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="82" y="146" font-size="11" fill="#dc2626">3 N east</text>
  <text x="38" y="76" font-size="11" fill="#2563eb">4 N north</text>
  <text x="96" y="72" font-size="11" fill="#059669">R = 5 N</text>
  <path d="M 52 130 A 22 22 0 0 0 46 116" fill="none" stroke="#334155"/>
  <text x="56" y="120" font-size="9" fill="#334155">θ</text>
</svg>
\`\`\`

**By construction:**
- **Triangle law** — draw the first vector, then the second starting from the head of the first; the resultant runs from the tail of the first to the head of the second.
- **Parallelogram law** — draw both vectors from the same point; complete the parallelogram; the **diagonal** from that point is the resultant.

## Common errors to watch for

- **Adding vector magnitudes regardless of direction** — 3 N and 4 N at right angles give **5 N**, not 7 N.
- **Confusing distance with displacement** — walk 40 m out and 40 m back: distance 80 m, displacement **zero**.
- **Confusing mass with weight** — mass is a scalar in kilograms; weight is a vector force in newtons.
- **Giving a vector answer without a direction** — an incomplete answer; always state the direction.
- **Calling pressure a vector** — pressure and energy are **scalars**, even though force is a vector.
- **Drawing arrows without a stated scale** — the length means nothing until the scale is given.`,
          workedExample: `**Task.** A boat is rowed at 8 m/s due north across a river. The current flows at 6 m/s due east.
(i) Classify each quantity mentioned as scalar or vector. (ii) Find the magnitude of the boat's resultant velocity. (iii) Find its direction. (iv) If instead the current had flowed at 6 m/s due south, what would the resultant be?

**Step 1 — classify the quantities**
- Speed of rowing "8 m/s" on its own would be a **scalar**, but "8 m/s due north" gives direction, so it is a **velocity — a vector**.
- "6 m/s due east" is likewise a **vector**.
- The resultant velocity is a **vector**.

**Step 2 — magnitude of the resultant (perpendicular vectors)**
- The two velocities are at right angles, so use Pythagoras:
  R = √(8² + 6²) = √(64 + 36) = √100 = **10 m/s**.

**Step 3 — direction of the resultant**
- Measure the angle θ from north, towards east:
  tan θ = east component ÷ north component = 6 / 8 = 0.75
  θ = tan⁻¹(0.75) ≈ **36.9°**.
- The resultant is **10 m/s at about 36.9° east of north**.

**Step 4 — if the current flowed due south**
- Now the two velocities are **antiparallel** (north and south), so subtract:
  R = 8 − 6 = **2 m/s due north** (the direction of the larger vector).

**Answers:** (i) all three velocities are vectors; (ii) 10 m/s; (iii) about 36.9° east of north; (iv) 2 m/s due north.`,
          quiz: [
            {
              prompt: "A scalar quantity has…",
              options: ["magnitude only", "direction only", "magnitude and direction", "neither"],
              correctIndex: 0,
              explanation: "Scalars are fully described by a number and a unit.",
            },
            {
              prompt: "A vector quantity has…",
              options: ["magnitude and direction", "magnitude only", "direction only", "units only"],
              correctIndex: 0,
              explanation: "Direction is essential to a vector.",
            },
            {
              prompt: "Which of these is a scalar?",
              options: ["temperature", "force", "velocity", "displacement"],
              correctIndex: 0,
              explanation: "Temperature has size only.",
            },
            {
              prompt: "Which of these is a vector?",
              options: ["momentum", "mass", "energy", "speed"],
              correctIndex: 0,
              explanation: "Momentum = mass × velocity, so it has direction.",
            },
            {
              prompt: "Distance is a scalar; the corresponding vector is…",
              options: ["displacement", "speed", "mass", "time"],
              correctIndex: 0,
              explanation: "Displacement is distance in a stated direction.",
            },
            {
              prompt: "Speed is a scalar; the corresponding vector is…",
              options: ["velocity", "acceleration", "distance", "power"],
              correctIndex: 0,
              explanation: "Velocity is speed with a direction.",
            },
            {
              prompt: "Mass is a scalar; the related vector quantity is…",
              options: ["weight", "density", "volume", "energy"],
              correctIndex: 0,
              explanation: "Weight is the downward force of gravity, in newtons.",
            },
            {
              prompt: "Which of the following is NOT a vector?",
              options: ["pressure", "force", "acceleration", "weight"],
              correctIndex: 0,
              explanation: "Pressure is a scalar even though force is a vector.",
            },
            {
              prompt: "A vector is represented by an arrow whose length shows the…",
              options: ["magnitude", "direction", "unit", "sign only"],
              correctIndex: 0,
              explanation: "Length shows size to scale; the arrowhead shows direction.",
            },
            {
              prompt: "The single vector with the same effect as two or more vectors is the…",
              options: ["resultant", "component", "scalar", "average"],
              correctIndex: 0,
              explanation: "The resultant replaces the vectors it sums.",
            },
            {
              prompt: "Forces of 7 N and 3 N act in the same direction. The resultant is…",
              options: ["10 N", "4 N", "21 N", "5 N"],
              correctIndex: 0,
              explanation: "Parallel vectors add: 7 + 3 = 10 N.",
            },
            {
              prompt: "Forces of 7 N east and 3 N west act on a body. The resultant is…",
              options: ["4 N east", "10 N east", "4 N west", "10 N west"],
              correctIndex: 0,
              explanation: "Subtract and keep the direction of the larger: 7 − 3 = 4 N east.",
            },
            {
              prompt: "Forces of 6 N and 8 N act at right angles. The resultant is…",
              options: ["10 N", "14 N", "2 N", "48 N"],
              correctIndex: 0,
              explanation: "√(6² + 8²) = √100 = 10 N.",
            },
            {
              prompt: "For two perpendicular vectors A and B, the resultant magnitude is…",
              options: ["√(A² + B²)", "A + B", "A − B", "AB"],
              correctIndex: 0,
              explanation: "Pythagoras applies when the angle is 90°.",
            },
            {
              prompt: "A student walks 30 m east then 30 m west. The displacement is…",
              options: ["zero", "60 m", "30 m east", "30 m west"],
              correctIndex: 0,
              explanation: "The start and end positions are the same.",
            },
            {
              prompt: "In the same journey, the distance travelled is…",
              options: ["60 m", "zero", "30 m", "15 m"],
              correctIndex: 0,
              explanation: "Distance is the total path length, 30 + 30 = 60 m.",
            },
            {
              prompt: "In the parallelogram law, the resultant is represented by the…",
              options: ["diagonal from the common point", "longer side", "shorter side", "perimeter"],
              correctIndex: 0,
              explanation: "The diagonal drawn from where the two vectors meet is the resultant.",
            },
            {
              prompt: "In the triangle law, the second vector is drawn starting from the…",
              options: ["head of the first", "tail of the first", "midpoint", "origin only"],
              correctIndex: 0,
              explanation: "Vectors are added head to tail.",
            },
            {
              prompt: "Which quantity is a vector?",
              options: ["torque", "work", "power", "charge"],
              correctIndex: 0,
              explanation: "Torque (moment) has a direction of turning; the others are scalars.",
            },
            {
              prompt: "An answer of '20 N' for a force is incomplete because it lacks the…",
              options: ["direction", "unit", "magnitude", "symbol"],
              correctIndex: 0,
              explanation: "Force is a vector, so the direction must be stated.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define scalar and vector quantities, and classify the following as one or the other: displacement, mass, energy, weight, speed, acceleration.",
              answerKey:
                "A scalar has magnitude (size) only; a vector has both magnitude and direction. Displacement — vector; mass — scalar; energy — scalar; weight — vector; speed — scalar; acceleration — vector. Award 2 marks for the definitions and 1 mark for each correct classification.",
              marks: 8,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Two forces of 12 N and 5 N act on a body at right angles to each other. Find the magnitude and direction of the resultant.",
              answerKey:
                "Magnitude R = √(12² + 5²) = √(144 + 25) = √169 = 13 N. Direction: tan θ = 5/12 = 0.4167, so θ = tan⁻¹(0.4167) ≈ 22.6° from the 12 N force. Award marks for the use of Pythagoras, the correct magnitude 13 N, and the correct angle with its reference direction.",
              marks: 5,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "A man walks 5 km north, then 5 km south. Find his total distance travelled and his displacement, and explain the difference between the two answers.",
              answerKey:
                "Distance = 5 + 5 = 10 km (the total path length, a scalar). Displacement = 0 km, because he ends at his starting point and displacement is the straight-line change of position from start to finish, a vector. The difference arises because distance adds all path lengths regardless of direction, while displacement takes direction into account, so the northward and southward legs cancel. Award marks for both values and a correct explanation.",
              marks: 5,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt: "Which group contains only vector quantities?",
              options: ["force, velocity, momentum", "mass, speed, energy", "force, mass, time", "velocity, temperature, work"],
              correctIndex: 0,
              answerKey: "Force, velocity and momentum all require a direction.",
              marks: 2,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain the difference between scalar and vector quantities, using the pairs distance/displacement and mass/weight, and describe how the resultant of two vectors is found when they act (a) in the same direction, (b) in opposite directions and (c) at right angles.",
              answerKey:
                "A strong answer defines a scalar as having magnitude only and a vector as having magnitude and direction. For distance/displacement it explains that distance is the total path length travelled (scalar) while displacement is the straight-line change in position with direction (vector), illustrated by a journey that returns to its start — distance non-zero, displacement zero. For mass/weight it explains that mass is the quantity of matter in kilograms, a scalar that is the same everywhere, while weight is the force of gravity on the body in newtons, a vector directed downwards whose value changes with location. For resultants: (a) same direction — add the magnitudes, resultant acts in that direction (5 N + 3 N = 8 N); (b) opposite directions — subtract the smaller from the larger, resultant acts along the larger (5 N − 3 N = 2 N in the larger's direction); (c) at right angles — use Pythagoras R = √(A² + B²) with direction tan θ = B/A, e.g. 3 N and 4 N give 5 N at 53.1°. Award marks for the definitions, both contrasting pairs, and all three resultant cases with correct method.",
              marks: 10,
            },
          ],
        },
        {
          slug: "density-and-relative-density",
          title: "Density and Relative Density",
          objective:
            "By the end of the topic, learners should be able to define density and relative density, state their units, determine the density of regular solids, irregular solids and liquids by experiment, and distinguish between density and relative density. (MoE Grade 10 Period I objective 7, 'Distinguish between density and relative density'.)",
          estimatedMinutes: 160,
          notes: `## Introduction

- A kilogram of cotton and a kilogram of iron have the same mass but very different sizes.
- What separates them is how much mass is packed into each unit of volume — the **density**.
- **This topic:** density and its units; relative density; measuring density of solids and liquids; floating and sinking.

## Density

- **Density** — the mass per unit volume of a substance.
- Formula: **ρ = m / V**, where ρ (rho) is density, m is mass and V is volume.
- Rearranged: **m = ρV** and **V = m / ρ**.
- **SI unit:** kilogram per cubic metre, **kg/m³**. Also used: **g/cm³**.
- **Conversion:** 1 g/cm³ = **1000 kg/m³**.
- Density is a **scalar**, and it is a **characteristic property** — it identifies a substance regardless of the size of the sample.

| Substance | Density (g/cm³) | Density (kg/m³) |
|---|---|---|
| Cork | 0.24 | 240 |
| Wood (pine) | 0.5 | 500 |
| Petrol | 0.8 | 800 |
| Ice | 0.92 | 920 |
| Water | 1.00 | 1000 |
| Sea water | 1.03 | 1030 |
| Aluminium | 2.7 | 2700 |
| Iron | 7.9 | 7900 |
| Copper | 8.9 | 8900 |
| Lead | 11.3 | 11 300 |
| Mercury | 13.6 | 13 600 |
| Gold | 19.3 | 19 300 |

- Solids and liquids have comparable densities because their particles touch; **gases are far less dense** because their particles are widely separated.

## Relative density

- **Relative density (specific gravity)** — the ratio of the density of a substance to the density of water.
- **R.D. = density of substance ÷ density of water**
- Equivalently: **R.D. = mass of a substance ÷ mass of an equal volume of water.**
- Relative density has **no unit** — it is a **pure number**, because it is a ratio of two like quantities.
- Density of water = 1 g/cm³ = 1000 kg/m³, so **the numerical value of R.D. equals the density in g/cm³**.
  - Iron: density 7.9 g/cm³ → R.D. = **7.9** (no unit).

| | Density | Relative density |
|---|---|---|
| Meaning | mass per unit volume | ratio to the density of water |
| Formula | m / V | ρ substance / ρ water |
| Unit | kg/m³ or g/cm³ | none (pure number) |
| Symbol | ρ | R.D. |

## Measuring density

**Regular solid (block, cylinder, sphere):**
1. Find the mass on a balance.
2. Measure the dimensions and calculate the volume (l × b × h for a block, πr²h for a cylinder).
3. ρ = m / V.

**Irregular solid (a stone):**
1. Find the mass on a balance.
2. Part-fill a measuring cylinder with water; note the volume V₁.
3. Lower the solid in gently; note the new volume V₂.
4. Volume of the solid = **V₂ − V₁** (displacement method).
5. ρ = m / (V₂ − V₁).
- A **displacement (eureka) can** may be used instead, catching the overflow in a measuring cylinder.

\`\`\`svg Finding the volume of an irregular solid by displacement
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Water level rising in a measuring cylinder when a stone is added">
  <rect x="30" y="30" width="60" height="105" rx="4" fill="none" stroke="#334155" stroke-width="2"/>
  <rect x="32" y="80" width="56" height="53" fill="#bfdbfe"/>
  <line x1="30" y1="80" x2="90" y2="80" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="98" y="84" font-size="10" fill="#1d4ed8">V₁</text>
  <text x="60" y="20" font-size="10" text-anchor="middle" fill="#334155">before</text>
  <rect x="150" y="30" width="60" height="105" rx="4" fill="none" stroke="#334155" stroke-width="2"/>
  <rect x="152" y="62" width="56" height="71" fill="#bfdbfe"/>
  <line x1="150" y1="62" x2="210" y2="62" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="218" y="66" font-size="10" fill="#1d4ed8">V₂</text>
  <ellipse cx="180" cy="112" rx="16" ry="12" fill="#78716c" stroke="#44403c"/>
  <text x="180" y="20" font-size="10" text-anchor="middle" fill="#334155">after</text>
  <text x="120" y="148" font-size="10" text-anchor="middle" fill="#166534">volume of stone = V₂ − V₁</text>
</svg>
\`\`\`

**Liquid (using a density bottle):**
1. Find the mass of the empty dry bottle, m₁.
2. Fill with the liquid and find the mass, m₂. Mass of liquid = m₂ − m₁.
3. Fill with water and find the mass, m₃. Mass of water = m₃ − m₁.
4. **R.D. = (m₂ − m₁) / (m₃ − m₁)**, and density of liquid = R.D. × 1000 kg/m³.
- A **hydrometer** reads the relative density of a liquid directly from the depth to which it floats.

## Floating and sinking

- A body **floats** in a liquid if its density is **less** than that of the liquid.
- A body **sinks** if its density is **greater** than that of the liquid.
- A body stays at any depth if the densities are **equal**.
- Ice (920 kg/m³) floats on water (1000 kg/m³); a ship of steel floats because its overall density, including the air inside, is less than that of water.

## Common errors to watch for

- **Giving relative density a unit** — it is a **ratio**, so it has none.
- **Mixing units in ρ = m/V** — use kg with m³, or g with cm³; never kg with cm³.
- **Wrong conversion between g/cm³ and kg/m³** — multiply by **1000**, not 100 (1 g/cm³ = 1000 kg/m³).
- **Using V₂ instead of V₂ − V₁** — the solid's volume is the **rise** in level, not the final reading.
- **Thinking heavy objects always sink** — what matters is **density**, not mass; a heavy ship floats.
- **Forgetting to dry the density bottle** — water left inside adds to the mass of the liquid and spoils the result.
- **Confusing mass and density** — mass depends on how much material there is; density does not change with the size of the sample.`,
          workedExample: `**Task.** A student is given a stone and some kerosene.
(i) The stone has a mass of 156 g. Placed in a measuring cylinder containing 50 cm³ of water, the level rises to 70 cm³. Find the density of the stone in g/cm³ and in kg/m³, and its relative density.
(ii) An empty density bottle has a mass of 25 g. Filled with kerosene its mass is 65 g; filled with water its mass is 75 g. Find the relative density and the density of the kerosene.
(iii) State whether the kerosene will float on water.

**Part (i) — density of the stone**
- Volume of stone = V₂ − V₁ = 70 − 50 = **20 cm³**.
- Density ρ = m / V = 156 g ÷ 20 cm³ = **7.8 g/cm³**.
- In SI units: 7.8 × 1000 = **7800 kg/m³**.
- Relative density = ρ stone ÷ ρ water = 7800 ÷ 1000 = **7.8** (no unit).
- Note the R.D. is numerically the same as the density in g/cm³ — as expected, since water is 1 g/cm³.

**Part (ii) — density of the kerosene**
- Mass of kerosene = 65 − 25 = **40 g**.
- Mass of an equal volume of water = 75 − 25 = **50 g**.
- R.D. = mass of kerosene ÷ mass of equal volume of water = 40 ÷ 50 = **0.8** (no unit).
- Density of kerosene = R.D. × density of water = 0.8 × 1000 = **800 kg/m³** (= 0.8 g/cm³).

**Part (iii) — floating**
- Kerosene (800 kg/m³) is **less dense** than water (1000 kg/m³), so the kerosene **floats on water**.

**Answers:** (i) 7.8 g/cm³ = 7800 kg/m³, R.D. = 7.8; (ii) R.D. = 0.8, density 800 kg/m³; (iii) yes — it is less dense than water.`,
          quiz: [
            {
              prompt: "Density is defined as…",
              options: ["mass per unit volume", "volume per unit mass", "mass times volume", "weight per unit area"],
              correctIndex: 0,
              explanation: "ρ = m / V.",
            },
            {
              prompt: "The SI unit of density is…",
              options: ["kg/m³", "g/cm³", "kg/m²", "N/m³"],
              correctIndex: 0,
              explanation: "Kilogram per cubic metre is the SI unit.",
            },
            {
              prompt: "1 g/cm³ is equal to…",
              options: ["1000 kg/m³", "100 kg/m³", "1 kg/m³", "10 000 kg/m³"],
              correctIndex: 0,
              explanation: "Multiply by 1000 to convert g/cm³ to kg/m³.",
            },
            {
              prompt: "The density of pure water is…",
              options: ["1000 kg/m³", "100 kg/m³", "1 kg/m³", "10 000 kg/m³"],
              correctIndex: 0,
              explanation: "Water is 1 g/cm³ = 1000 kg/m³.",
            },
            {
              prompt: "Relative density is the ratio of the density of a substance to the density of…",
              options: ["water", "air", "mercury", "iron"],
              correctIndex: 0,
              explanation: "Water is the reference substance.",
            },
            {
              prompt: "The unit of relative density is…",
              options: ["it has no unit", "kg/m³", "g/cm³", "N/kg"],
              correctIndex: 0,
              explanation: "It is a ratio of like quantities, so it is a pure number.",
            },
            {
              prompt: "A substance of density 2.7 g/cm³ has a relative density of…",
              options: ["2.7", "2700", "0.27", "27"],
              correctIndex: 0,
              explanation: "R.D. equals the density in g/cm³ because water is 1 g/cm³.",
            },
            {
              prompt: "A body of mass 300 g occupies 100 cm³. Its density is…",
              options: ["3 g/cm³", "30 g/cm³", "0.33 g/cm³", "300 g/cm³"],
              correctIndex: 0,
              explanation: "ρ = 300 ÷ 100 = 3 g/cm³.",
            },
            {
              prompt: "A block has density 2 g/cm³ and volume 50 cm³. Its mass is…",
              options: ["100 g", "25 g", "52 g", "200 g"],
              correctIndex: 0,
              explanation: "m = ρV = 2 × 50 = 100 g.",
            },
            {
              prompt: "The volume of an irregular solid is found by…",
              options: ["displacement of water", "measuring its length", "weighing it", "heating it"],
              correctIndex: 0,
              explanation: "The solid displaces its own volume of water.",
            },
            {
              prompt: "Water rises from 40 cm³ to 55 cm³ when a stone is added. The stone's volume is…",
              options: ["15 cm³", "55 cm³", "40 cm³", "95 cm³"],
              correctIndex: 0,
              explanation: "The volume is the rise: 55 − 40 = 15 cm³.",
            },
            {
              prompt: "A body floats in a liquid if its density is…",
              options: ["less than that of the liquid", "greater than that of the liquid", "equal to zero", "equal to its mass"],
              correctIndex: 0,
              explanation: "Lower density than the fluid means it floats.",
            },
            {
              prompt: "Ice floats on water because ice is…",
              options: ["less dense than water", "denser than water", "colder than water", "lighter in mass"],
              correctIndex: 0,
              explanation: "Ice is 920 kg/m³ against water's 1000 kg/m³.",
            },
            {
              prompt: "The instrument used to measure the relative density of a liquid directly is the…",
              options: ["hydrometer", "thermometer", "barometer", "micrometer"],
              correctIndex: 0,
              explanation: "A hydrometer floats at a depth set by the liquid's R.D.",
            },
            {
              prompt: "The apparatus used to find the density of a liquid accurately is the…",
              options: ["density bottle", "measuring cylinder only", "metre rule", "stopwatch"],
              correctIndex: 0,
              explanation: "A density bottle holds a fixed known volume.",
            },
            {
              prompt: "Gases are much less dense than solids and liquids because their particles are…",
              options: ["widely separated", "heavier", "in fixed positions", "electrically charged"],
              correctIndex: 0,
              explanation: "Large spaces between particles mean little mass per unit volume.",
            },
            {
              prompt: "The density of mercury is 13 600 kg/m³. In g/cm³ this is…",
              options: ["13.6", "1.36", "136", "1360"],
              correctIndex: 0,
              explanation: "Divide by 1000 to convert kg/m³ to g/cm³.",
            },
            {
              prompt: "If two samples of copper have different sizes, their densities are…",
              options: ["the same", "different", "proportional to mass", "proportional to volume"],
              correctIndex: 0,
              explanation: "Density is a characteristic property, independent of sample size.",
            },
            {
              prompt: "A steel ship floats because…",
              options: ["its overall density, including the air inside, is less than water's", "steel is lighter than water", "it has a large mass", "steel does not react with water"],
              correctIndex: 0,
              explanation: "The hull encloses air, lowering the average density.",
            },
            {
              prompt: "A liquid of relative density 0.8 has a density of…",
              options: ["800 kg/m³", "80 kg/m³", "8000 kg/m³", "0.8 kg/m³"],
              correctIndex: 0,
              explanation: "0.8 × 1000 kg/m³ = 800 kg/m³.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define density and relative density, state the unit of each, and give the relationship between them.",
              answerKey:
                "Density is the mass per unit volume of a substance, ρ = m/V, measured in kg/m³ (or g/cm³). Relative density is the ratio of the density of a substance to the density of water (equivalently, the mass of a substance divided by the mass of an equal volume of water); it has no unit because it is a ratio of like quantities. Relationship: R.D. = density of substance ÷ density of water, so density = R.D. × 1000 kg/m³. Award marks for both definitions, both units and the correct relationship.",
              marks: 6,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "A metal block of mass 810 g is lowered into a measuring cylinder containing 120 cm³ of water. The level rises to 420 cm³. Calculate the density of the metal in g/cm³ and in kg/m³, and state its relative density.",
              answerKey:
                "Volume = 420 − 120 = 300 cm³. Density = 810 ÷ 300 = 2.7 g/cm³ = 2700 kg/m³. Relative density = 2700 ÷ 1000 = 2.7 (no unit) — the metal is aluminium. Award marks for the displaced volume, the density in both units and the relative density.",
              marks: 5,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Describe an experiment using a density bottle to find the relative density of a liquid, including the readings taken and the formula used.",
              answerKey:
                "Weigh the clean, dry, empty density bottle with its stopper — mass m₁. Fill it completely with the liquid, replace the stopper so the excess escapes, wipe it dry outside, and weigh again — mass m₂. Empty, rinse and dry the bottle, fill it completely with water, stopper, wipe and weigh — mass m₃. Then mass of liquid = m₂ − m₁ and mass of an equal volume of water = m₃ − m₁, since the bottle holds a fixed volume. Relative density = (m₂ − m₁)/(m₃ − m₁). The density of the liquid = R.D. × 1000 kg/m³. Award marks for the three weighings, the reason the volumes are equal, and the correct formula.",
              marks: 6,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt: "A liquid of relative density 1.03 is poured onto pure water. It will…",
              options: ["sink below the water", "float on the water", "stay mixed evenly", "evaporate"],
              correctIndex: 0,
              answerKey: "Its density (1030 kg/m³) exceeds water's 1000 kg/m³, so it sinks.",
              marks: 2,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain the difference between density and relative density, and describe how you would determine the density of (a) a regularly shaped solid and (b) an irregularly shaped solid in the laboratory.",
              answerKey:
                "A strong answer explains that density is mass per unit volume (ρ = m/V) with units kg/m³ or g/cm³, whereas relative density is the ratio of a substance's density to that of water and is a pure number with no unit; because water has a density of 1 g/cm³, the relative density is numerically equal to the density expressed in g/cm³. For (a) a regular solid: measure the mass on a balance; measure the dimensions with a rule (or vernier caliper) and calculate the volume from the appropriate formula — l × b × h for a rectangular block, πr²h for a cylinder; then divide mass by volume. For (b) an irregular solid: measure the mass on a balance; part-fill a measuring cylinder with water and record the initial volume V₁; lower the solid gently into the water (tied to a thread) and record the new volume V₂; the volume of the solid is V₂ − V₁; density = mass ÷ (V₂ − V₁). Alternatively use a displacement (eureka) can and collect the overflow in a measuring cylinder. Precautions such as drying the solid, avoiding splashing and reading the bottom of the meniscus at eye level earn credit. Award marks for the distinction, both methods with correct steps, and the correct formulae.",
              marks: 10,
            },
          ],
        },
        {
          slug: "pressure-in-solids-liquids-and-gases",
          title: "Pressure in Solids, Liquids and Gases",
          objective:
            "By the end of the topic, learners should be able to define pressure and state its unit, calculate pressure exerted by solids, derive and apply the formula for pressure in a liquid column, state Pascal's principle and its applications, and explain atmospheric pressure and its measurement. (MoE Grade 10 Period I, CONTENTS 1(d) 'Pressure in (i) Solids (ii) Liquids (iii) Gases'.)",
          estimatedMinutes: 180,
          notes: `## Introduction

- A sharp knife and a blunt one can be pushed with the same force, yet only one cuts.
- The difference is the **area** the force acts over — the same force on a smaller area gives greater **pressure**.
- **This topic:** pressure and its unit; pressure in solids; pressure in liquids; Pascal's principle; pressure in gases and the atmosphere.

## Pressure

- **Pressure** — the force acting normally (perpendicularly) per unit area.
- Formula: **P = F / A**, where F is the force in newtons and A is the area in square metres.
- Rearranged: **F = PA** and **A = F / P**.
- **SI unit:** the **pascal (Pa)**, where **1 Pa = 1 N/m²**.
- Other units: 1 kPa = 10³ Pa; 1 bar = 10⁵ Pa; 1 atmosphere = 1.013 × 10⁵ Pa.
- Pressure is a **scalar**, although force is a vector.

## Pressure in solids

- A solid exerts pressure **downwards**, on the surface it rests on.
- **P = F / A**, where F is usually the **weight** of the body, W = mg.
- For a given force: **smaller area → greater pressure**; **larger area → smaller pressure**.

**Applications of high pressure (small area):**
- Sharp knives, needles, nails, pins and axes — a small edge or point concentrates the force.
- Studs on football boots grip the ground.

**Applications of low pressure (large area):**
- Wide tyres on tractors and lorries stop them sinking into soft ground.
- Wide foundations spread a building's weight over the soil.
- A wide strap on a heavy bag is more comfortable than a thin one.
- Skis and snowshoes spread weight over snow.

## Pressure in liquids

Pressure in a liquid:

- acts **equally in all directions** at a given point;
- acts **normally (at right angles)** to any surface it touches;
- **increases with depth**;
- is **independent of the shape or the cross-sectional area** of the container;
- depends only on **depth, density and gravity**.

**Formula for the pressure due to a liquid column:**

- Consider a column of liquid of height h, cross-sectional area A and density ρ.
- Volume = A h, so mass = ρ A h, and weight = ρ A h g.
- Pressure = force ÷ area = ρ A h g ÷ A, so **P = ρ g h**.
- Note **A cancels** — this is why pressure does not depend on the container's width.

- **Total pressure** at a depth h in an open liquid = **atmospheric pressure + ρgh**.
- The pressure due to the liquid alone (ρgh) is called the **gauge pressure**.

\`\`\`svg Liquid pressure increases with depth
<svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A can with three holes showing water jetting farthest from the lowest hole">
  <rect x="30" y="25" width="70" height="115" fill="#bfdbfe" stroke="#334155" stroke-width="2"/>
  <line x1="30" y1="35" x2="100" y2="35" stroke="#1d4ed8" stroke-width="1.5"/>
  <path d="M 100 60 Q 130 64 142 92" fill="none" stroke="#2563eb" stroke-width="2"/>
  <path d="M 100 90 Q 145 94 172 122" fill="none" stroke="#2563eb" stroke-width="2"/>
  <path d="M 100 118 Q 165 122 210 140" fill="none" stroke="#2563eb" stroke-width="2"/>
  <circle cx="100" cy="60" r="2.5" fill="#334155"/>
  <circle cx="100" cy="90" r="2.5" fill="#334155"/>
  <circle cx="100" cy="118" r="2.5" fill="#334155"/>
  <line x1="18" y1="35" x2="18" y2="118" stroke="#166534" stroke-width="1"/>
  <text x="8" y="80" font-size="10" fill="#166534">h</text>
  <text x="150" y="155" font-size="10" fill="#334155">greater depth → greater pressure → longer jet</text>
</svg>
\`\`\`

## Pascal's principle

- **Pascal's principle** — pressure applied to an enclosed liquid is transmitted **equally and undiminished** to every part of the liquid and to the walls of the container.
- Liquids are practically **incompressible**, which makes this transmission possible.

**The hydraulic press:**
- A small force f on a small piston of area a creates a pressure P = f / a.
- This pressure acts on a large piston of area A, giving a force **F = P × A = f × (A / a)**.
- The force is multiplied by the ratio of the areas, **A / a** — the mechanical advantage.
- Work is not created: the small piston moves a long way, the large piston a short way.

**Applications:** hydraulic press, hydraulic car brakes, hydraulic jack, hydraulic lift, excavator arms.

## Pressure in gases

- A gas exerts pressure because its molecules are in constant random motion and **collide with the walls** of the container.
- Gas pressure depends on the **number of molecules**, the **temperature** and the **volume** of the container.
- Heating a gas at fixed volume raises the pressure (faster, harder, more frequent collisions).
- Squeezing a gas into a smaller volume raises the pressure (more collisions per unit area per second).

**Atmospheric pressure:**
- The atmosphere is a layer of air held to the Earth by gravity; its weight exerts **atmospheric pressure**.
- **Standard atmospheric pressure = 1.013 × 10⁵ Pa** ≈ 760 mm of mercury (76 cm Hg).
- Atmospheric pressure **decreases with altitude**, because there is less air above.
- Measured with a **barometer** (mercury or aneroid); gas pressure in a container is measured with a **manometer**.
- Evidence and uses: drinking through a straw, syringes, siphons, suction pads, lift pumps, the crushing-can experiment.

## Common errors to watch for

- **Using weight in kilograms** — force in P = F/A must be in **newtons**; weight = mass × g (g ≈ 10 N/kg).
- **Mixing area units** — convert cm² to m² by dividing by 10 000 before using P = F/A.
- **Thinking liquid pressure depends on the volume or the shape of the vessel** — it depends only on **depth, density and g**.
- **Using the total height of the container instead of the depth** below the surface in P = ρgh.
- **Forgetting atmospheric pressure** — the **total** pressure at depth is atmospheric + ρgh.
- **Claiming a hydraulic press creates energy** — it multiplies **force**, not work; the small piston travels much further.
- **Saying pressure in a liquid acts only downwards** — at any point it acts **equally in all directions**.`,
          workedExample: `**Task.** (Take g = 10 N/kg, density of water = 1000 kg/m³, atmospheric pressure = 1.0 × 10⁵ Pa.)
(i) A box of mass 60 kg stands on a floor; its base measures 0.5 m by 0.4 m. Find the pressure it exerts.
(ii) Find the pressure due to the water alone at a depth of 8 m in a tank, and the total pressure there.
(iii) In a hydraulic press the small piston has area 0.01 m² and the large piston 0.5 m². A force of 200 N is applied to the small piston. Find the force on the large piston.

**Part (i) — pressure under the box**
- Weight (the force on the floor) = mg = 60 × 10 = **600 N**.
- Area of base = 0.5 × 0.4 = **0.2 m²**.
- Pressure P = F / A = 600 ÷ 0.2 = **3000 Pa** (3 kPa).

**Part (ii) — pressure at depth in water**
- Pressure due to the water = ρgh = 1000 × 10 × 8 = **80 000 Pa** (80 kPa) — this is the gauge pressure.
- Total pressure = atmospheric + ρgh = 1.0 × 10⁵ + 0.8 × 10⁵ = **1.8 × 10⁵ Pa**.

**Part (iii) — the hydraulic press**
- Pressure on the small piston P = f / a = 200 ÷ 0.01 = **20 000 Pa**.
- By Pascal's principle this pressure is transmitted undiminished to the large piston.
- Force on the large piston F = P × A = 20 000 × 0.5 = **10 000 N**.
- Check with the area ratio: F = f × (A/a) = 200 × (0.5/0.01) = 200 × 50 = 10 000 N ✓
- The force is multiplied 50 times — but the large piston moves only 1/50 as far, so no energy is created.

**Answers:** (i) 3000 Pa; (ii) 80 kPa due to the water, 1.8 × 10⁵ Pa in total; (iii) 10 000 N.`,
          quiz: [
            {
              prompt: "Pressure is defined as…",
              options: ["force per unit area", "area per unit force", "force times area", "mass per unit volume"],
              correctIndex: 0,
              explanation: "P = F / A.",
            },
            {
              prompt: "The SI unit of pressure is the…",
              options: ["pascal", "newton", "joule", "watt"],
              correctIndex: 0,
              explanation: "1 pascal = 1 N/m².",
            },
            {
              prompt: "One pascal is equal to…",
              options: ["1 N/m²", "1 N/cm²", "1 kg/m²", "1 J/m²"],
              correctIndex: 0,
              explanation: "Pressure is newtons per square metre.",
            },
            {
              prompt: "For a fixed force, reducing the area of contact…",
              options: ["increases the pressure", "decreases the pressure", "has no effect", "changes the force"],
              correctIndex: 0,
              explanation: "P = F/A, so a smaller A gives a larger P.",
            },
            {
              prompt: "A knife is sharpened in order to…",
              options: ["increase the pressure by reducing the area", "reduce the force needed to lift it", "increase its mass", "reduce the pressure"],
              correctIndex: 0,
              explanation: "A thin edge concentrates the force over a tiny area.",
            },
            {
              prompt: "Tractors have wide tyres in order to…",
              options: ["reduce pressure on soft ground", "increase pressure on the ground", "reduce their weight", "increase friction only"],
              correctIndex: 0,
              explanation: "A larger area lowers the pressure so they do not sink.",
            },
            {
              prompt: "A force of 200 N acts on an area of 4 m². The pressure is…",
              options: ["50 Pa", "800 Pa", "204 Pa", "0.02 Pa"],
              correctIndex: 0,
              explanation: "P = 200 ÷ 4 = 50 Pa.",
            },
            {
              prompt: "The pressure at a point in a liquid acts…",
              options: ["equally in all directions", "downwards only", "upwards only", "sideways only"],
              correctIndex: 0,
              explanation: "Liquid pressure at a point is the same in every direction.",
            },
            {
              prompt: "The pressure due to a column of liquid is given by…",
              options: ["P = ρgh", "P = mgh", "P = ρg/h", "P = ρh/g"],
              correctIndex: 0,
              explanation: "Density × gravity × depth.",
            },
            {
              prompt: "Pressure in a liquid increases with…",
              options: ["depth", "the width of the container", "the volume of liquid", "the shape of the vessel"],
              correctIndex: 0,
              explanation: "Only depth, density and g matter.",
            },
            {
              prompt: "The pressure at 10 m depth in water (ρ = 1000 kg/m³, g = 10 N/kg) due to the water alone is…",
              options: ["100 000 Pa", "10 000 Pa", "1000 Pa", "1 000 000 Pa"],
              correctIndex: 0,
              explanation: "P = 1000 × 10 × 10 = 100 000 Pa.",
            },
            {
              prompt: "The walls of a dam are made thicker at the bottom because pressure…",
              options: ["increases with depth", "decreases with depth", "acts only sideways", "is the same everywhere"],
              correctIndex: 0,
              explanation: "The deepest water pushes hardest on the wall.",
            },
            {
              prompt: "Pascal's principle states that pressure applied to an enclosed liquid is transmitted…",
              options: ["equally and undiminished throughout", "only downwards", "with loss at the walls", "only to the nearest piston"],
              correctIndex: 0,
              explanation: "The pressure reaches every part of the liquid unchanged.",
            },
            {
              prompt: "The hydraulic press works because liquids are…",
              options: ["practically incompressible", "very compressible", "always hot", "electrically charged"],
              correctIndex: 0,
              explanation: "An incompressible liquid transmits pressure directly.",
            },
            {
              prompt: "In a hydraulic press, the force is multiplied by the ratio of the…",
              options: ["areas of the pistons", "masses of the pistons", "heights of the pistons", "densities of the liquid"],
              correctIndex: 0,
              explanation: "F = f × (A/a).",
            },
            {
              prompt: "Which of these is an application of Pascal's principle?",
              options: ["hydraulic car brakes", "a barometer", "a thermometer", "a hydrometer"],
              correctIndex: 0,
              explanation: "Brakes transmit pressure through an enclosed fluid.",
            },
            {
              prompt: "A gas exerts pressure on its container because its molecules…",
              options: ["collide with the walls", "stick to the walls", "dissolve in the walls", "stop moving"],
              correctIndex: 0,
              explanation: "Molecular collisions produce the force on the walls.",
            },
            {
              prompt: "Standard atmospheric pressure is about…",
              options: ["1.0 × 10⁵ Pa", "1.0 × 10³ Pa", "1.0 × 10⁷ Pa", "760 Pa"],
              correctIndex: 0,
              explanation: "About 101 300 Pa, or 760 mm of mercury.",
            },
            {
              prompt: "Atmospheric pressure is measured with a…",
              options: ["barometer", "manometer", "hydrometer", "thermometer"],
              correctIndex: 0,
              explanation: "A barometer measures the pressure of the atmosphere.",
            },
            {
              prompt: "Atmospheric pressure decreases as altitude increases because…",
              options: ["there is less air above", "the air gets warmer", "gravity disappears", "the air becomes denser"],
              correctIndex: 0,
              explanation: "Less air above means less weight pressing down.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define pressure, state its SI unit, and explain with two examples why the area of contact matters.",
              answerKey:
                "Pressure is the force acting normally (perpendicularly) per unit area: P = F/A. Its SI unit is the pascal (Pa), equal to 1 N/m². Because pressure is inversely proportional to area for a fixed force, a small area gives a large pressure and a large area a small pressure. Examples (any two): a knife or needle is sharpened so the small edge area produces a high pressure that cuts or pierces; tractor and lorry tyres are made wide so the large area gives a low pressure and the vehicle does not sink into soft ground; wide building foundations spread the weight over the soil; a wide bag strap is more comfortable than a thin one. Award marks for the definition, the unit and two explained examples.",
              marks: 6,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "A tank is filled with water to a depth of 5 m. Taking g = 10 N/kg and the density of water as 1000 kg/m³, calculate the pressure due to the water at the bottom, and the total pressure if atmospheric pressure is 1.0 × 10⁵ Pa.",
              answerKey:
                "Pressure due to water = ρgh = 1000 × 10 × 5 = 50 000 Pa (50 kPa). Total pressure = atmospheric + ρgh = 1.0 × 10⁵ + 0.5 × 10⁵ = 1.5 × 10⁵ Pa. Award marks for the correct formula, the water pressure and the total.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State Pascal's principle. In a hydraulic press the small piston has an area of 0.02 m² and the large piston an area of 0.8 m². If a force of 150 N is applied to the small piston, calculate the force produced on the large piston.",
              answerKey:
                "Pascal's principle: pressure applied to an enclosed liquid is transmitted equally and undiminished to every part of the liquid and to the walls of the container. Pressure on the small piston = 150 ÷ 0.02 = 7500 Pa. Force on the large piston = 7500 × 0.8 = 6000 N (or F = f × A/a = 150 × 40 = 6000 N). Award marks for the statement of the principle, the pressure calculation and the final force.",
              marks: 5,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt: "The pressure at a point in a liquid does NOT depend on…",
              options: ["the cross-sectional area of the container", "the depth below the surface", "the density of the liquid", "the acceleration due to gravity"],
              correctIndex: 0,
              answerKey: "In P = ρgh the area cancels out, so the width or shape of the vessel is irrelevant.",
              marks: 2,
            },
            {
              type: "ESSAY",
              prompt:
                "Derive the expression P = ρgh for the pressure due to a column of liquid, list four properties of liquid pressure, and explain one everyday application of atmospheric pressure.",
              answerKey:
                "Derivation: consider a column of liquid of density ρ, height h and uniform cross-sectional area A. Volume of the liquid = A h; mass = ρ × volume = ρ A h; weight (the downward force on the base) = mass × g = ρ A h g. Pressure = force ÷ area = ρAhg ÷ A = ρgh. The area A cancels, which is why the pressure is independent of the width or shape of the container. Properties of liquid pressure (any four): it acts equally in all directions at a given point; it acts normally (perpendicularly) to any surface in contact with it; it increases with depth; it increases with the density of the liquid; it is independent of the shape and cross-sectional area of the vessel; it is the same at all points on the same horizontal level in a connected liquid. Application of atmospheric pressure (one, explained): drinking through a straw — sucking lowers the pressure inside the straw, so the greater atmospheric pressure on the surface of the drink pushes the liquid up; a syringe drawing in liquid; a suction pad holding to a wall; a lift pump raising water; the crushing-can experiment where steam is condensed and atmospheric pressure crushes the can. Award marks for each step of the derivation, four correct properties, and a clearly explained application.",
              marks: 12,
            },
          ],
        },
      ],
    },
  ],
};
