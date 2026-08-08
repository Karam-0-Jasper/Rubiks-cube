import type { SubjectContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics (Grades 10-12).
// Grade 10, Semester One, Period I: Introduction to Physics and Properties of
// Matter. The topics below follow the syllabus CONTENTS list item by item:
// 1(a) branches of physics, 1(b) basic mathematical concepts, 1(c) measurement,
// 1(d) pressure in solids/liquids/gases, 1(e) dimensional analysis,
// 1(f) measuring instruments, and 2. scalar and vector quantities — plus
// density and relative density from the period's objectives. Every topic's
// notes and worked example are sourced from published pages (see the
// // source: comment above each topic).
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
        // source: OpenStax — College Physics 2e, 1.1 Physics: An Introduction (https://openstax.org/books/college-physics-2e/pages/1-1-physics-an-introduction)
        {
          slug: "branches-of-physics",
          title: "Development of Physics: Branches of Physics",
          objective:
            "By the end of the topic, learners should be able to state what physics studies, explain how models, theories and laws are used, name the main branches of physics, and describe how physics underpins other sciences and technology. (MoE Grade 10 Period I, CONTENTS 1(a) 'Branches of Physics'.)",
          estimatedMinutes: 110,
          notes: `## What physics is

- **Physics** — the science concerned with describing the interactions of **energy, matter, space and time**.
- It seeks the fundamental mechanisms behind natural events, from tiny charged particles to whole galaxies.
- A guiding idea: a small, unified set of **physical laws** can explain a huge range of what we observe.

## Models, theories and laws

- **Model** — a representation used to picture something too small, large or complex to observe directly.
- **Theory** — a tested, comprehensive explanation supported by scientific evidence.
- **Law** — a concise description of a general pattern in nature, often written as an equation.
- Physics works by observation → hypothesis → experiment → law or theory.

## Physics is the base of other sciences

- **Chemistry** rests on atomic and molecular physics.
- **Engineering** is applied physics.
- **Geology** uses physics for radioactive dating and seismic (earthquake) analysis.
- **Biophysics** and **geophysics** combine physics with biology and earth science.
- **Medicine** uses physics for X-rays, MRI imaging and cancer radiotherapy.

## Branches of physics

- **Mechanics** — motion of bodies and the forces on them (statics, kinematics, dynamics).
- **Heat and thermodynamics** — thermal energy, temperature, heat flow and its conversion to work.
- **Optics (light)** — the behaviour of light: reflection, refraction, lenses and mirrors.
- **Acoustics (sound)** — production and transmission of sound waves.
- **Electricity and magnetism (electromagnetism)** — charges, currents, magnetic and electromagnetic fields.
- **Atomic and nuclear physics** — the atom, the nucleus, radioactivity and nuclear energy.
- **Modern physics** — relativity and quantum mechanics (the very fast and the very small).

| Branch | Studies | Everyday example |
| --- | --- | --- |
| Mechanics | motion and forces | a car braking, a lever |
| Heat / thermodynamics | thermal energy, heat flow | cooking pot, refrigerator |
| Optics | light | mirrors, spectacles, cameras |
| Acoustics | sound | drums, loudspeakers |
| Electromagnetism | charges, currents, fields | generator, phone, motor |
| Atomic & nuclear | atoms and nuclei | X-rays, nuclear power |
| Modern physics | relativity, quantum theory | lasers, transistors |

## Classical and modern physics

- **Classical physics** — Newton's laws, electromagnetism and thermodynamics; describes objects large compared with atoms and slow compared with light.
- **Modern physics** — relativity and quantum mechanics; describes the very fast, very small and very massive.

## Common errors

- **Calling physics "only theory"** — its laws are tested by measurement and experiment.
- **Confusing a model with reality** — a model is a useful representation, not the thing itself.
- **Listing electricity and magnetism as unrelated** — they are joined as electromagnetism.`,
          workedExample: `**Task.** For each situation, name the branch of physics that studies it: (i) a taxi skidding to a stop, (ii) a radio transmitting a signal, (iii) sunlight splitting into colours through a prism, (iv) a hospital X-ray machine.

**Step 1 — Taxi skidding.** This is about motion and the forces (friction) that stop the taxi → **mechanics**.

**Step 2 — Radio signal.** This uses electromagnetic waves produced by moving charges → **electricity and magnetism (electromagnetism)**.

**Step 3 — Prism splitting light.** This is about the behaviour of light (refraction and dispersion) → **optics**.

**Step 4 — X-ray machine.** X-rays come from processes in the atom and are a medical application → **atomic/nuclear physics** (and modern physics).

**Answer.** (i) mechanics, (ii) electromagnetism, (iii) optics, (iv) atomic/nuclear physics. Physics also underpins the medicine, engineering and chemistry that use these effects.`,
          quiz: [
            { prompt: "Physics is concerned with describing the interactions of energy, matter, space and:", options: ["money", "time", "language", "colour"], correctIndex: 1, explanation: "Physics studies energy, matter, space and time." },
            { prompt: "A concise description of a general pattern in nature, often an equation, is a:", options: ["model", "law", "guess", "unit"], correctIndex: 1, explanation: "A physical law states a general pattern in nature." },
            { prompt: "A tested, comprehensive explanation supported by evidence is a:", options: ["theory", "unit", "prefix", "vector"], correctIndex: 0, explanation: "A theory is a well-tested explanation." },
            { prompt: "A representation used to picture something too complex to observe directly is a:", options: ["law", "model", "theory", "scale"], correctIndex: 1, explanation: "A model is a simplified representation." },
            { prompt: "The branch of physics dealing with motion and forces is:", options: ["optics", "mechanics", "acoustics", "thermodynamics"], correctIndex: 1, explanation: "Mechanics studies motion and forces." },
            { prompt: "Optics is the study of:", options: ["sound", "light", "heat", "charge"], correctIndex: 1, explanation: "Optics is the physics of light." },
            { prompt: "Which branch studies heat flow and temperature?", options: ["mechanics", "thermodynamics", "optics", "electromagnetism"], correctIndex: 1, explanation: "Heat and thermodynamics study thermal energy and heat flow." },
            { prompt: "Electricity and magnetism are joined in the branch called:", options: ["acoustics", "electromagnetism", "optics", "mechanics"], correctIndex: 1, explanation: "They form electromagnetism." },
            { prompt: "Acoustics is the study of:", options: ["light", "sound", "atoms", "forces"], correctIndex: 1, explanation: "Acoustics deals with sound waves." },
            { prompt: "Chemistry is largely based on which physics?", options: ["atomic and molecular physics", "acoustics", "optics", "mechanics only"], correctIndex: 0, explanation: "Chemistry rests on atomic and molecular physics." },
            { prompt: "X-rays and MRI are applications of physics in:", options: ["cooking", "medicine", "farming", "banking"], correctIndex: 1, explanation: "Medical imaging uses physics." },
            { prompt: "Engineering is often described as:", options: ["applied physics", "pure chemistry", "biology", "geology"], correctIndex: 0, explanation: "Engineering is applied physics." },
            { prompt: "Modern physics includes relativity and:", options: ["quantum mechanics", "acoustics", "statics", "hydraulics"], correctIndex: 0, explanation: "Modern physics is built on relativity and quantum mechanics." },
            { prompt: "Classical physics best describes objects that are:", options: ["very small and very fast", "large and slow compared with atoms and light", "only charged", "only hot"], correctIndex: 1, explanation: "Classical physics applies to ordinary sizes and speeds." },
            { prompt: "Physics assumes that natural events can be explained by:", options: ["many unrelated rules", "a small unified set of laws", "no rules", "opinion"], correctIndex: 1, explanation: "A small, unified set of laws explains much of what we see." },
            { prompt: "Radioactive dating in geology is an application of:", options: ["optics", "nuclear physics", "acoustics", "statics"], correctIndex: 1, explanation: "Radioactivity (nuclear physics) is used for dating rocks." },
            { prompt: "The study of the atom and the nucleus is:", options: ["mechanics", "atomic and nuclear physics", "optics", "acoustics"], correctIndex: 1, explanation: "Atomic and nuclear physics study atoms and nuclei." },
            { prompt: "Physics works from observation, hypothesis, experiment and then:", options: ["opinion", "law or theory", "advertising", "guesswork"], correctIndex: 1, explanation: "Tested results become laws or theories." },
            { prompt: "A car braking is studied in:", options: ["mechanics", "optics", "acoustics", "thermodynamics"], correctIndex: 0, explanation: "Braking involves motion and forces — mechanics." },
            { prompt: "A theory differs from a law because a theory:", options: ["is a pattern only", "explains why, with tested evidence", "is never tested", "is always an equation"], correctIndex: 1, explanation: "A theory is a tested explanation; a law states a pattern." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Define physics and name four of its branches.", answerKey: "Physics is the science describing the interactions of energy, matter, space and time. Branches (any four): mechanics, heat/thermodynamics, optics, acoustics, electromagnetism, atomic/nuclear physics, modern physics.", marks: 5 },
            { type: "MULTIPLE_CHOICE", prompt: "Which branch of physics studies light?", options: ["mechanics", "optics", "acoustics", "thermodynamics"], correctIndex: 1, answerKey: "Optics is the study of light.", marks: 2 },
            { type: "SHORT_ANSWER", prompt: "Distinguish between a scientific model, a theory and a law.", answerKey: "Model = a representation used to picture something hard to observe directly. Theory = a tested, comprehensive explanation supported by evidence. Law = a concise statement of a general pattern in nature, often an equation.", marks: 3 },
            { type: "MULTIPLE_CHOICE", prompt: "X-ray imaging in hospitals is an application of physics in:", options: ["agriculture", "medicine", "banking", "cooking"], correctIndex: 1, answerKey: "Medical imaging applies physics.", marks: 2 },
            { type: "ESSAY", prompt: "Explain why physics is regarded as the most fundamental science, referring to how it uses models, theories and laws and how it supports other sciences and technology.", answerKey: "Physics studies the most basic entities — energy, matter, space, time — and a small set of laws explains a wide range of phenomena. It uses models (representations), theories (tested explanations) and laws (patterns, often equations) built from observation and experiment. Other sciences rest on it: chemistry on atomic/molecular physics, engineering as applied physics, geology on radioactive dating and seismic analysis, medicine on X-rays/MRI/radiotherapy. Reward correct model/theory/law use and links to other fields.", marks: 8 },
          ],
        },
        // source: OpenStax — College Physics 2e, 1.3 Accuracy, Precision, and Significant Figures & 1.2 Physical Quantities and Units (https://openstax.org/books/college-physics-2e/pages/1-3-accuracy-precision-and-significant-figures)
        {
          slug: "basic-mathematical-concepts",
          title: "Basic Mathematical Concepts: Scientific Notation, Significant Figures and Unit Conversion",
          objective:
            "By the end of the topic, learners should be able to write numbers in scientific notation, apply the rules for significant figures, and convert units using conversion factors. (MoE Grade 10 Period I, CONTENTS 1(b) 'Basic mathematical concepts'.)",
          estimatedMinutes: 110,
          notes: `## Scientific notation

- **Scientific notation** — writing a number as a value between 1 and 10 multiplied by a power of ten: a × 10ⁿ.
- Makes very large or very small numbers easy to write and compare.
- Examples: 300 000 000 = 3 × 10⁸; 0.00052 = 5.2 × 10⁻⁴.
- Move the decimal point; a large number gives a positive power, a small number a negative power.

## Significant figures

- The **significant figures** of a measurement are the digits known reliably plus the first uncertain digit.
- **The last digit written is the first digit with some uncertainty.**

Rules for counting significant figures:
1. All non-zero digits are significant (24.7 → 3 s.f.).
2. Zeros between non-zero digits are significant (10.053 → 5 s.f.).
3. Leading zeros are **not** significant — they are place-holders (0.053 → 2 s.f.).
4. Trailing zeros after a decimal point are significant (2.50 → 3 s.f.).

Rules for calculations:
- **Multiplication/division:** the answer has as many significant figures as the quantity with the **fewest** significant figures.
- **Addition/subtraction:** the answer has as many decimal places as the least precise value.

## Accuracy, precision and uncertainty (brief)

- **Accuracy** — how close a measurement is to the true value.
- **Precision** — how close repeated measurements are to one another.
- Uncertainty is written as A ± δA, and percent uncertainty = (δA / A) × 100%.

## Unit conversion

- To convert units, multiply by a **conversion factor** — a ratio equal to 1 that expresses how many of one unit equal another.
- Arrange the factor so the unwanted unit cancels, leaving the wanted unit.
- Example factors: 1 km = 1000 m; 1 h = 60 min; 1 min = 60 s.

## Common errors

- **Miscounting leading zeros** — 0.0043 has 2 significant figures, not 4.
- **Keeping too many figures** — round the final answer to the correct number of significant figures.
- **Inverting the conversion factor** — set it up so the unwanted unit cancels.`,
          workedExample: `**Problem (OpenStax College Physics 2e, 1.2).** A car travels 10.0 km in 20.0 minutes. Express its average speed in kilometres per hour (km/h).

**Step 1 — Average speed in km/min.** speed = distance / time = 10.0 km / 20.0 min = 0.500 km/min.

**Step 2 — Choose the conversion factor.** 1 h = 60 min, so the factor 60 min / 1 h equals 1. Arrange it so "min" cancels: multiply by 60 min / 1 h.

**Step 3 — Convert.** 0.500 km/min × (60 min / 1 h) = 30.0 km/h.

**Step 4 — Significant figures.** The data have 3 significant figures, so the answer is 30.0 km/h.

**Answer.** The average speed is 30.0 km/h. The "min" units cancel, leaving km/h.`,
          quiz: [
            { prompt: "Scientific notation writes a number as a value between 1 and 10 times a power of:", options: ["two", "ten", "the number itself", "zero"], correctIndex: 1, explanation: "It is a × 10ⁿ, with 1 ≤ a < 10." },
            { prompt: "300 000 in scientific notation is:", options: ["3 × 10⁵", "3 × 10⁶", "30 × 10⁴", "0.3 × 10⁶"], correctIndex: 0, explanation: "300 000 = 3 × 10⁵." },
            { prompt: "0.0042 in scientific notation is:", options: ["4.2 × 10³", "4.2 × 10⁻³", "42 × 10⁻²", "4.2 × 10⁻⁴"], correctIndex: 1, explanation: "0.0042 = 4.2 × 10⁻³." },
            { prompt: "How many significant figures are in 24.7?", options: ["2", "3", "4", "1"], correctIndex: 1, explanation: "All three non-zero digits are significant." },
            { prompt: "How many significant figures are in 0.053?", options: ["1", "2", "3", "4"], correctIndex: 1, explanation: "Leading zeros are placeholders; only 5 and 3 count." },
            { prompt: "How many significant figures are in 10.053?", options: ["3", "4", "5", "2"], correctIndex: 2, explanation: "Zeros between non-zero digits count: 5 s.f." },
            { prompt: "How many significant figures are in 2.50?", options: ["1", "2", "3", "4"], correctIndex: 2, explanation: "A trailing zero after the decimal point is significant." },
            { prompt: "In multiplication, the answer keeps the number of significant figures of the:", options: ["largest value", "smallest number of significant figures", "first value", "answer's size"], correctIndex: 1, explanation: "Use the fewest significant figures of the inputs." },
            { prompt: "In addition, the answer keeps the number of decimal places of the:", options: ["most precise value", "least precise value", "largest value", "first value"], correctIndex: 1, explanation: "Match the least precise (fewest decimal places)." },
            { prompt: "Accuracy describes how close a measurement is to the:", options: ["other readings", "true value", "average", "zero"], correctIndex: 1, explanation: "Accuracy = closeness to the true value." },
            { prompt: "Precision describes how close repeated measurements are to:", options: ["the true value", "one another", "zero", "the mean of nature"], correctIndex: 1, explanation: "Precision = agreement between repeated readings." },
            { prompt: "A conversion factor is a ratio equal to:", options: ["0", "1", "10", "the number converted"], correctIndex: 1, explanation: "It equals 1 (e.g. 60 min / 1 h)." },
            { prompt: "To convert 2 h to minutes, multiply by:", options: ["1 h / 60 min", "60 min / 1 h", "60 s / 1 min", "1000 m / 1 km"], correctIndex: 1, explanation: "2 h × 60 min/h = 120 min." },
            { prompt: "5 km in metres is:", options: ["500 m", "5000 m", "50 m", "0.005 m"], correctIndex: 1, explanation: "5 × 1000 = 5000 m." },
            { prompt: "The last digit written in a measurement is:", options: ["always exact", "the first uncertain digit", "meaningless", "always zero"], correctIndex: 1, explanation: "The final digit carries the uncertainty." },
            { prompt: "6.02 × 10²³ is written in:", options: ["decimal notation", "scientific notation", "percentage", "fraction form"], correctIndex: 1, explanation: "It is a × 10ⁿ form — scientific notation." },
            { prompt: "Percent uncertainty is:", options: ["(δA/A) × 100%", "(A/δA) × 100%", "A × δA", "δA + A"], correctIndex: 0, explanation: "% uncertainty = (uncertainty/value) × 100%." },
            { prompt: "The product 3.0 × 2.15 rounded to correct significant figures is:", options: ["6.45", "6.5", "6", "6.450"], correctIndex: 1, explanation: "3.0 has 2 s.f., so the answer is 6.5." },
            { prompt: "A large number in scientific notation has a power of ten that is:", options: ["negative", "positive", "always zero", "a fraction"], correctIndex: 1, explanation: "Numbers ≥ 10 give a positive exponent." },
            { prompt: "To convert 90 km/h to km/min, multiply by:", options: ["60 min / 1 h", "1 h / 60 min", "1000 m/km", "1 min/60 s"], correctIndex: 1, explanation: "km/h × (1 h/60 min) = km/min." },
          ],
          test: [
            { type: "MULTIPLE_CHOICE", prompt: "How many significant figures are in 0.004070?", options: ["3", "4", "5", "7"], correctIndex: 1, answerKey: "Leading zeros don't count; 4, 0, 7, 0 → 4 s.f.", marks: 2 },
            { type: "SHORT_ANSWER", prompt: "Write 0.00061 and 250 000 in scientific notation.", answerKey: "0.00061 = 6.1 × 10⁻⁴; 250 000 = 2.5 × 10⁵.", marks: 3 },
            { type: "SHORT_ANSWER", prompt: "Convert a speed of 72 km/h to metres per second.", answerKey: "72 km/h × (1000 m/1 km) × (1 h/3600 s) = 72000/3600 = 20 m/s.", marks: 4 },
            { type: "MULTIPLE_CHOICE", prompt: "In the calculation 4.56 × 1.4, the answer should be given to:", options: ["1 significant figure", "2 significant figures", "3 significant figures", "4 significant figures"], correctIndex: 1, answerKey: "1.4 has 2 s.f., so the product (6.384) rounds to 6.4 — 2 s.f.", marks: 2 },
            { type: "ESSAY", prompt: "Explain the rules for counting significant figures and for using them in multiplication and addition, and describe how unit conversion by conversion factors works, with an example.", answerKey: "Sig-fig rules: all non-zero digits count; zeros between non-zeros count; leading zeros are placeholders (not significant); trailing zeros after a decimal point count. Multiplication/division: keep the fewest sig figs of the inputs. Addition/subtraction: keep the fewest decimal places. Unit conversion: multiply by a conversion factor (a ratio equal to 1, e.g. 60 min/1 h) arranged so the unwanted unit cancels — e.g. 0.5 km/min × 60 min/h = 30 km/h. Reward correct rules and a valid conversion example.", marks: 8 },
          ],
        },
        // source: OpenStax — College Physics 2e, 1.2 Physical Quantities and Units & 1.3 Accuracy, Precision, and Significant Figures (https://openstax.org/books/college-physics-2e/pages/1-2-physical-quantities-and-units)
        {
          slug: "measurement-quantities-and-units",
          title: "Measurement: Systems, Fundamental and Derived Quantities, Units, Prefixes and Errors",
          objective:
            "By the end of the topic, learners should be able to describe systems of measurement, distinguish fundamental from derived quantities and units, use metric prefixes, and distinguish accuracy, precision and errors in measurement. (MoE Grade 10 Period I, CONTENTS 1(c) 'Measurement'.)",
          estimatedMinutes: 120,
          notes: `## Systems of measurement

- A **physical quantity** is a property that can be measured, expressed as a **number and a unit** (e.g. 5.2 kg).
- The main system used in science is the **SI system** (Système International), a metric system based on powers of ten.
- Other systems include the older c.g.s. (centimetre-gram-second) and the imperial/British system (feet, pounds).

## Fundamental (base) quantities and units

- **Fundamental (base) quantities** are defined independently; all others are built from them.

| Base quantity | SI unit | Symbol |
| --- | --- | --- |
| Length | metre | m |
| Mass | kilogram | kg |
| Time | second | s |
| Electric current | ampere | A |
| Temperature | kelvin | K |
| Amount of substance | mole | mol |
| Luminous intensity | candela | cd |

## Derived quantities and units

- **Derived quantities** are combinations of base quantities; their units are combinations of base units.
- Examples: area (m²), volume (m³), **speed = length/time (m/s)**, density (kg/m³), force (kg·m/s² = newton), pressure (N/m² = pascal).

## Metric prefixes

- Prefixes scale a unit by powers of ten:

| Prefix | Symbol | Factor |
| --- | --- | --- |
| kilo | k | 10³ |
| centi | c | 10⁻² |
| milli | m | 10⁻³ |
| micro | µ | 10⁻⁶ |
| nano | n | 10⁻⁹ |

- Example: 1 km = 10³ m; 1 mm = 10⁻³ m; 1 µs = 10⁻⁶ s.

## Accuracy, precision and errors

- **Accuracy** — how close a measurement is to the true value.
- **Precision** — how close repeated measurements are to one another.
- **Error/uncertainty** — the amount by which a measurement may differ from the true value; written A ± δA.
- **Systematic errors** shift readings the same way each time (e.g. a zero error on an instrument); **random errors** scatter readings unpredictably.

## Common errors

- **Confusing accuracy and precision** — a reading can be precise (repeatable) but inaccurate (biased).
- **Forgetting the unit** — a number alone is not a physical quantity.
- **Mixing up base and derived quantities** — speed and force are derived, not fundamental.`,
          workedExample: `**Problem.** A student measures a metal block: length 5.0 cm, and its mass on a balance as 135 g. (a) State which quantities are fundamental and which unit is derived. (b) Convert the length to metres and the mass to kilograms using metric prefixes.

**Step 1 — Classify.** Length (metre) and mass (kilogram) are **fundamental** quantities. If the student later found density (mass ÷ volume, kg/m³), that would be a **derived** quantity.

**Step 2 — Convert the length.** 1 cm = 10⁻² m, so 5.0 cm = 5.0 × 10⁻² m = 0.050 m.

**Step 3 — Convert the mass.** 1 g = 10⁻³ kg, so 135 g = 135 × 10⁻³ kg = 0.135 kg.

**Answer.** Length and mass are fundamental quantities; density would be derived. 5.0 cm = 0.050 m and 135 g = 0.135 kg. Prefixes (centi = 10⁻², kilo = 10³) make the conversions straightforward.`,
          quiz: [
            { prompt: "A physical quantity is expressed as a number and a:", options: ["colour", "unit", "letter", "shape"], correctIndex: 1, explanation: "Every physical quantity has a number and a unit." },
            { prompt: "The main system of units used in science is the:", options: ["imperial system", "SI system", "candela system", "binary system"], correctIndex: 1, explanation: "SI (Système International) is the scientific standard." },
            { prompt: "The SI unit of length is the:", options: ["centimetre", "metre", "kilometre", "foot"], correctIndex: 1, explanation: "The base unit of length is the metre." },
            { prompt: "The SI unit of mass is the:", options: ["gram", "kilogram", "newton", "pound"], correctIndex: 1, explanation: "The base unit of mass is the kilogram." },
            { prompt: "The SI unit of time is the:", options: ["minute", "hour", "second", "day"], correctIndex: 2, explanation: "The base unit of time is the second." },
            { prompt: "Which is a fundamental (base) quantity?", options: ["speed", "force", "length", "density"], correctIndex: 2, explanation: "Length is a base quantity; the others are derived." },
            { prompt: "Which is a derived quantity?", options: ["mass", "time", "speed", "length"], correctIndex: 2, explanation: "Speed = length/time is derived." },
            { prompt: "The unit of speed, m/s, is a:", options: ["base unit", "derived unit", "prefix", "constant"], correctIndex: 1, explanation: "m/s combines base units, so it is derived." },
            { prompt: "The prefix kilo means:", options: ["10⁻³", "10³", "10⁶", "10⁻²"], correctIndex: 1, explanation: "kilo = 10³." },
            { prompt: "The prefix milli means:", options: ["10³", "10⁻³", "10⁻⁶", "10⁻²"], correctIndex: 1, explanation: "milli = 10⁻³." },
            { prompt: "1 µm equals:", options: ["10⁻³ m", "10⁻⁶ m", "10⁻⁹ m", "10⁶ m"], correctIndex: 1, explanation: "micro = 10⁻⁶, so 1 µm = 10⁻⁶ m." },
            { prompt: "The SI unit of electric current is the:", options: ["volt", "ampere", "ohm", "watt"], correctIndex: 1, explanation: "The base unit of current is the ampere." },
            { prompt: "Accuracy is how close a measurement is to the:", options: ["other readings", "true value", "average of guesses", "instrument"], correctIndex: 1, explanation: "Accuracy = closeness to the true value." },
            { prompt: "Precision is how close repeated readings are to:", options: ["the true value", "one another", "zero", "the unit"], correctIndex: 1, explanation: "Precision = agreement of repeated readings." },
            { prompt: "A zero error on an instrument is an example of a:", options: ["random error", "systematic error", "prefix", "derived unit"], correctIndex: 1, explanation: "A zero error shifts every reading the same way — systematic." },
            { prompt: "The SI unit of temperature is the:", options: ["degree Celsius", "kelvin", "degree Fahrenheit", "joule"], correctIndex: 1, explanation: "The base unit of temperature is the kelvin." },
            { prompt: "Which unit is derived?", options: ["kelvin", "kilogram", "pascal", "second"], correctIndex: 2, explanation: "Pascal (N/m²) is derived from base units." },
            { prompt: "1 km equals:", options: ["100 m", "1000 m", "10 m", "10 000 m"], correctIndex: 1, explanation: "kilo = 10³, so 1 km = 1000 m." },
            { prompt: "A reading that is repeatable but consistently wrong is:", options: ["accurate but imprecise", "precise but inaccurate", "both accurate and precise", "neither"], correctIndex: 1, explanation: "Repeatable but biased means precise but inaccurate." },
            { prompt: "Volume, measured in m³, is a:", options: ["base quantity", "derived quantity", "prefix", "unit of time"], correctIndex: 1, explanation: "Volume is length cubed — derived." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "State three fundamental (base) quantities and their SI units, and give one derived quantity with its unit.", answerKey: "Base (any three): length–metre (m); mass–kilogram (kg); time–second (s); current–ampere (A); temperature–kelvin (K). Derived example: speed–m/s, or area–m², density–kg/m³, force–newton (kg·m/s²).", marks: 4 },
            { type: "MULTIPLE_CHOICE", prompt: "Which of these is a derived unit?", options: ["metre", "second", "newton", "kilogram"], correctIndex: 2, answerKey: "The newton (kg·m/s²) is derived from base units.", marks: 2 },
            { type: "SHORT_ANSWER", prompt: "Convert (i) 3 km to metres and (ii) 250 mm to metres, using metric prefixes.", answerKey: "(i) 3 km = 3 × 10³ m = 3000 m. (ii) 250 mm = 250 × 10⁻³ m = 0.250 m.", marks: 3 },
            { type: "MULTIPLE_CHOICE", prompt: "A set of readings that agree closely with each other but not with the true value is:", options: ["accurate", "precise", "both", "neither"], correctIndex: 1, answerKey: "Close agreement but wrong = precise but not accurate.", marks: 2 },
            { type: "ESSAY", prompt: "Explain the difference between fundamental and derived quantities, the use of metric prefixes, and the difference between accuracy and precision, giving examples of each.", answerKey: "Fundamental quantities are defined independently (length–m, mass–kg, time–s, current–A, temperature–K); derived quantities are built from them (speed m/s, area m², density kg/m³, force N). Metric prefixes scale units by powers of ten (kilo 10³, centi 10⁻², milli 10⁻³, micro 10⁻⁶), e.g. 1 km = 1000 m. Accuracy = closeness to the true value; precision = agreement between repeated readings; a reading can be precise yet inaccurate (biased) — e.g. a mis-zeroed balance. Reward correct classification, prefixes and the accuracy/precision distinction.", marks: 8 },
          ],
        },
        // source: OpenStax — University Physics Volume 1, 1.4 Dimensional Analysis (https://openstax.org/books/university-physics-volume-1/pages/1-4-dimensional-analysis)
        {
          slug: "dimensional-analysis",
          title: "Dimensional Analysis and Its Use in Physics",
          objective:
            "By the end of the topic, learners should be able to state the dimensions of physical quantities in terms of M, L and T, and use dimensional homogeneity to check whether an equation is consistent. (MoE Grade 10 Period I, CONTENTS 1(e) 'Dimensional analysis and its use in physics'.)",
          estimatedMinutes: 100,
          notes: `## Dimensions of a quantity

- The **dimension** of a physical quantity expresses its dependence on the base quantities as powers of their symbols.
- The base dimensions used in mechanics:
- **[L]** — length, **[M]** — mass, **[T]** — time.
- (The full set of seven base dimensions also includes current [I], temperature [Θ], amount [N] and luminous intensity [J].)
- Square brackets [ ] mean "the dimension of".

## Dimensions of common quantities

| Quantity | Formula | Dimension |
| --- | --- | --- |
| Area | length × length | L² |
| Volume | length³ | L³ |
| Speed / velocity | length / time | L T⁻¹ |
| Acceleration | velocity / time | L T⁻² |
| Force | mass × acceleration | M L T⁻² |
| Density | mass / volume | M L⁻³ |
| Pressure | force / area | M L⁻¹ T⁻² |

## Dimensional consistency (homogeneity)

- An equation is **dimensionally consistent** only if:
1. every term on both sides has the **same dimensions**, and
2. the argument of any function (sin, exp, log) is **dimensionless**.
- Dimensional analysis can **check** an equation and help **find the form** of a relationship, but it cannot find pure numbers (like ½ or 2π).

## Uses of dimensional analysis

- To check whether an equation could be correct (a wrong equation is never dimensionally consistent).
- To derive the form of a relationship between quantities.
- To convert between systems of units.

## Common errors

- **Thinking consistent = correct** — dimensional consistency is necessary but not sufficient (it misses pure numbers).
- **Adding unlike dimensions** — you cannot add a length to a time.
- **Forgetting exponents** — acceleration is L T⁻², not L T⁻¹.`,
          workedExample: `**Problem (OpenStax University Physics Vol 1, 1.4).** Two students disagree on the formula for the area of a circle: one writes A = πr², the other A = 2πr. Use dimensional analysis to decide which can be correct.

**Step 1 — Dimension required.** Area has the dimension [A] = L².

**Step 2 — Test πr².** π is a pure number (dimensionless); r is a length, [r] = L. So [πr²] = 1 × L² = L². ✓ matches area.

**Step 3 — Test 2πr.** 2 and π are dimensionless; [r] = L. So [2πr] = 1 × L = L. ✗ this is a length, not an area.

**Answer.** A = πr² is dimensionally consistent with an area (L²); A = 2πr has the dimension of length (it is actually the circumference), so it cannot be the area. Dimensional analysis rejects the wrong formula.`,
          quiz: [
            { prompt: "The dimension of a quantity shows its dependence on the:", options: ["colour", "base quantities", "units chosen", "temperature"], correctIndex: 1, explanation: "Dimensions express a quantity in terms of base quantities." },
            { prompt: "The base dimension of length is written:", options: ["[M]", "[L]", "[T]", "[A]"], correctIndex: 1, explanation: "Length has dimension [L]." },
            { prompt: "The dimension of area is:", options: ["L", "L²", "L³", "L T⁻¹"], correctIndex: 1, explanation: "Area = length × length = L²." },
            { prompt: "The dimension of speed is:", options: ["L T", "L T⁻¹", "L² T", "M L T⁻²"], correctIndex: 1, explanation: "Speed = length/time = L T⁻¹." },
            { prompt: "The dimension of acceleration is:", options: ["L T⁻¹", "L T⁻²", "L² T⁻²", "M L T⁻²"], correctIndex: 1, explanation: "Acceleration = velocity/time = L T⁻²." },
            { prompt: "The dimension of force is:", options: ["M L T⁻²", "M L T⁻¹", "M L² T⁻²", "L T⁻²"], correctIndex: 0, explanation: "Force = mass × acceleration = M L T⁻²." },
            { prompt: "An equation is dimensionally consistent if every term has the:", options: ["same number", "same dimensions", "same units only", "same sign"], correctIndex: 1, explanation: "All terms must share the same dimensions." },
            { prompt: "The argument of a function like sin or exp must be:", options: ["a length", "dimensionless", "a mass", "a time"], correctIndex: 1, explanation: "Arguments of such functions have no dimensions." },
            { prompt: "Dimensional analysis cannot find:", options: ["the dimensions of a term", "pure numbers like ½ or 2π", "inconsistencies", "the form of a relation"], correctIndex: 1, explanation: "It misses dimensionless constants." },
            { prompt: "The dimension of volume is:", options: ["L", "L²", "L³", "M L⁻³"], correctIndex: 2, explanation: "Volume = length³ = L³." },
            { prompt: "The dimension of density is:", options: ["M L³", "M L⁻³", "M L⁻¹", "L⁻³"], correctIndex: 1, explanation: "Density = mass/volume = M L⁻³." },
            { prompt: "You cannot add a length to a:", options: ["length", "distance", "time", "displacement"], correctIndex: 2, explanation: "Only quantities with the same dimensions can be added." },
            { prompt: "2πr has the dimension of:", options: ["area (L²)", "length (L)", "volume (L³)", "time (T)"], correctIndex: 1, explanation: "2 and π are dimensionless, r is a length, so it is L." },
            { prompt: "A dimensionally consistent equation is:", options: ["always correct", "possibly correct", "always wrong", "never testable"], correctIndex: 1, explanation: "Consistency is necessary but not sufficient." },
            { prompt: "The dimension of pressure (force/area) is:", options: ["M L⁻¹ T⁻²", "M L T⁻²", "M L² T⁻²", "L⁻²"], correctIndex: 0, explanation: "Pressure = M L T⁻² / L² = M L⁻¹ T⁻²." },
            { prompt: "Square brackets [ ] around a quantity mean:", options: ["the value of", "the dimension of", "the unit of", "the error in"], correctIndex: 1, explanation: "[X] means 'the dimension of X'." },
            { prompt: "A wrong physical equation is:", options: ["always dimensionally consistent", "never dimensionally consistent", "sometimes consistent by chance of numbers", "always correct"], correctIndex: 1, explanation: "An incorrect equation cannot be dimensionally consistent." },
            { prompt: "One use of dimensional analysis is to:", options: ["measure mass", "check whether an equation could be correct", "read a thermometer", "count atoms"], correctIndex: 1, explanation: "It checks equations for consistency." },
            { prompt: "The base dimensions used in mechanics are:", options: ["L, M, T", "L, A, K", "M, K, mol", "L, T, cd"], correctIndex: 0, explanation: "Mechanics uses length, mass and time." },
            { prompt: "v = u + at is dimensionally consistent because every term has the dimension:", options: ["L T⁻²", "L T⁻¹", "M L T⁻²", "L"], correctIndex: 1, explanation: "v, u and at all have dimension L T⁻¹ (velocity)." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "State the dimensions of (i) speed, (ii) acceleration and (iii) force in terms of M, L and T.", answerKey: "(i) speed L T⁻¹; (ii) acceleration L T⁻²; (iii) force M L T⁻².", marks: 3 },
            { type: "MULTIPLE_CHOICE", prompt: "The dimension of area is:", options: ["L", "L²", "L³", "M L⁻³"], correctIndex: 1, answerKey: "Area is length × length = L².", marks: 2 },
            { type: "SHORT_ANSWER", prompt: "Use dimensions to check whether v = u + at is consistent (v, u velocities; a acceleration; t time).", answerKey: "[v] = [u] = L T⁻¹. [at] = (L T⁻²)(T) = L T⁻¹. All three terms have dimension L T⁻¹, so the equation is dimensionally consistent.", marks: 4 },
            { type: "MULTIPLE_CHOICE", prompt: "A dimensionally consistent equation is:", options: ["definitely correct", "possibly correct", "definitely wrong", "impossible to write"], correctIndex: 1, answerKey: "Consistency is necessary but not sufficient — it may still miss numerical factors.", marks: 2 },
            { type: "ESSAY", prompt: "Explain what is meant by the dimensions of a physical quantity and the principle of dimensional homogeneity, and describe two uses and one limitation of dimensional analysis.", answerKey: "The dimension of a quantity expresses it in terms of base quantities (M, L, T…), e.g. force = M L T⁻². Dimensional homogeneity: an equation is consistent only if every term has the same dimensions and function arguments are dimensionless. Uses (any two): check whether an equation could be correct; derive the form of a relationship; convert between unit systems. Limitation: it cannot determine pure numbers (like ½ or 2π), so consistency is necessary but not sufficient. Reward the definition, homogeneity rule, uses and limitation.", marks: 8 },
          ],
        },
        // source: Physics LibreTexts — Reading a Vernier (https://phys.libretexts.org/Learning_Objects/Demos_Techniques_and_Experiments/Reading_a_Vernier)
        {
          slug: "measuring-instruments",
          title: "Measuring Instruments",
          objective:
            "By the end of the topic, learners should be able to name common measuring instruments, read a vernier caliper and micrometer, and choose an instrument of suitable precision (least count) for a measurement. (MoE Grade 10 Period I, CONTENTS 1(f) 'Measuring instruments'.)",
          estimatedMinutes: 110,
          notes: `## Choosing an instrument

- Each instrument has a **least count** — the smallest division it can measure reliably.
- Choose an instrument whose precision suits the size being measured.

| Instrument | Measures | Typical least count |
| --- | --- | --- |
| Metre rule | length (cm to m) | 1 mm (0.1 cm) |
| Vernier caliper | small lengths, diameters | 0.1 mm (0.01 cm) |
| Micrometer screw gauge | very small thicknesses/wire | 0.01 mm |
| Beam / spring balance | mass / weight | depends on scale |
| Stop-watch (digital) | time | 0.01 s |
| Thermometer | temperature | 1 °C (typical) |

## The metre rule

- Reads to the nearest millimetre.
- Avoid **parallax error**: view the scale straight on (line of sight perpendicular to the scale).

## The vernier caliper

- Has a fixed **main scale** and a sliding **vernier scale**; the object is held between the jaws.
- The vernier divisions are slightly smaller than the main-scale divisions (e.g. 90% of a division), which is what lets it read the extra decimal place.
- **Reading:** (1) read the main scale at the vernier's zero mark; (2) find the vernier line that lines up exactly with a main-scale line — that gives the next figure.
- Precision (least count) is typically 0.1 mm; the reading error is small (about ±0.02 of a division).

## The micrometer screw gauge

- Uses a fine screw thread; measures very small thicknesses (wire, paper, sheet metal).
- Reading = main scale (sleeve) + fractional part from the rotating thimble.
- Least count typically 0.01 mm — more precise than the vernier caliper.
- Check and allow for any **zero error** before measuring.

## Balances and other instruments

- **Beam balance / electronic balance** — measure mass by comparison or electronically.
- **Spring balance** — measures weight (force) from the extension of a spring.
- **Stop-watch** — measures time intervals.

## Common errors

- **Parallax error** — reading a scale from an angle; look straight on.
- **Ignoring zero error** — check the instrument reads zero when closed; subtract any zero error.
- **Using too coarse an instrument** — a metre rule cannot measure the thickness of a wire; use a micrometer.`,
          workedExample: `**Problem.** A vernier caliper has a main scale in millimetres and a vernier scale of least count 0.1 mm. When a small ball is held in the jaws, the vernier's zero mark lies just past the 12 mm main-scale mark, and the 4th vernier line coincides exactly with a main-scale line. What is the diameter of the ball?

**Step 1 — Main scale reading.** The vernier zero is just past 12 mm, so the main scale reading is 12 mm.

**Step 2 — Vernier reading.** The 4th vernier line coincides, and the least count is 0.1 mm, so the vernier adds 4 × 0.1 mm = 0.4 mm.

**Step 3 — Total.** diameter = main scale + vernier = 12 mm + 0.4 mm = 12.4 mm.

**Answer.** The diameter of the ball is 12.4 mm (1.24 cm). The vernier scale supplies the extra 0.1 mm figure that a plain metre rule could not.`,
          quiz: [
            { prompt: "The smallest division an instrument can measure reliably is its:", options: ["range", "least count", "zero error", "parallax"], correctIndex: 1, explanation: "The least count is the smallest measurable division." },
            { prompt: "A metre rule typically reads to the nearest:", options: ["1 cm", "1 mm", "0.01 mm", "1 m"], correctIndex: 1, explanation: "A metre rule reads to about 1 mm." },
            { prompt: "A vernier caliper typically has a least count of:", options: ["1 mm", "0.1 mm", "1 cm", "1 m"], correctIndex: 1, explanation: "Vernier calipers read to about 0.1 mm." },
            { prompt: "A micrometer screw gauge typically reads to:", options: ["1 mm", "0.1 mm", "0.01 mm", "1 cm"], correctIndex: 2, explanation: "A micrometer reads to about 0.01 mm." },
            { prompt: "Which instrument is best for the thickness of a thin wire?", options: ["metre rule", "micrometer screw gauge", "measuring tape", "stop-watch"], correctIndex: 1, explanation: "A micrometer measures very small thicknesses accurately." },
            { prompt: "Error from viewing a scale at an angle is:", options: ["zero error", "parallax error", "random error only", "least count"], correctIndex: 1, explanation: "Parallax error comes from an angled line of sight." },
            { prompt: "A vernier caliper has two scales: the main scale and the:", options: ["thimble scale", "vernier scale", "spring scale", "beam scale"], correctIndex: 1, explanation: "It has a main scale and a sliding vernier scale." },
            { prompt: "On a vernier, the reading is completed by finding the vernier line that:", options: ["is longest", "lines up exactly with a main-scale line", "is at the end", "is red"], correctIndex: 1, explanation: "The coinciding vernier line gives the extra figure." },
            { prompt: "A spring balance measures:", options: ["mass by comparison", "weight (force) from spring extension", "time", "temperature"], correctIndex: 1, explanation: "A spring balance measures weight via spring extension." },
            { prompt: "A beam balance is used to measure:", options: ["length", "mass", "time", "temperature"], correctIndex: 1, explanation: "A beam balance measures mass." },
            { prompt: "Before measuring, you should check an instrument for:", options: ["colour", "zero error", "weight", "temperature"], correctIndex: 1, explanation: "Check and allow for any zero error." },
            { prompt: "A micrometer is more precise than a vernier caliper because its least count is:", options: ["larger", "smaller (0.01 mm)", "the same", "1 mm"], correctIndex: 1, explanation: "0.01 mm is finer than the vernier's 0.1 mm." },
            { prompt: "To avoid parallax error you should view the scale:", options: ["from the side", "straight on (perpendicular)", "from above only", "with one eye closed at an angle"], correctIndex: 1, explanation: "Look perpendicular to the scale." },
            { prompt: "A digital stop-watch commonly measures time to:", options: ["1 s", "0.01 s", "1 min", "0.1 h"], correctIndex: 1, explanation: "Digital stop-watches read to about 0.01 s." },
            { prompt: "The vernier divisions are made ___ than the main-scale divisions.", options: ["larger", "slightly smaller", "exactly equal", "twice as big"], correctIndex: 1, explanation: "Slightly smaller vernier divisions allow the finer reading." },
            { prompt: "The object being measured with a caliper is placed between the:", options: ["scales", "jaws", "screws", "beams"], correctIndex: 1, explanation: "The object is held between the caliper's jaws." },
            { prompt: "A reading of 12 mm on the main scale plus 4 vernier divisions (0.1 mm each) gives:", options: ["12.4 mm", "16 mm", "12.04 mm", "48 mm"], correctIndex: 0, explanation: "12 + 4×0.1 = 12.4 mm." },
            { prompt: "Which instrument would you use to measure a room's width?", options: ["micrometer", "measuring tape / metre rule", "vernier caliper", "thermometer"], correctIndex: 1, explanation: "Large lengths are measured with a tape or metre rule." },
            { prompt: "A zero error means the instrument does not read ___ when it should.", options: ["maximum", "zero", "the true value only", "in metres"], correctIndex: 1, explanation: "A zero error is a non-zero reading at the zero position." },
            { prompt: "The micrometer's fractional reading comes from the:", options: ["main scale only", "rotating thimble", "jaws", "vernier zero"], correctIndex: 1, explanation: "The thimble supplies the fine fractional part." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "State the typical least count of a metre rule, a vernier caliper and a micrometer screw gauge.", answerKey: "Metre rule ≈ 1 mm (0.1 cm); vernier caliper ≈ 0.1 mm (0.01 cm); micrometer screw gauge ≈ 0.01 mm.", marks: 3 },
            { type: "MULTIPLE_CHOICE", prompt: "The most suitable instrument to measure the diameter of a thin copper wire is a:", options: ["metre rule", "measuring tape", "micrometer screw gauge", "beam balance"], correctIndex: 2, answerKey: "A micrometer (least count 0.01 mm) suits a thin wire.", marks: 2 },
            { type: "SHORT_ANSWER", prompt: "What is parallax error and how is it avoided?", answerKey: "Parallax error is the error from reading a scale at an angle, so the pointer appears against the wrong mark. It is avoided by viewing the scale straight on, with the line of sight perpendicular to the scale.", marks: 3 },
            { type: "MULTIPLE_CHOICE", prompt: "A vernier caliper reads 12 mm on the main scale, and its 4th vernier line (least count 0.1 mm) coincides. The measurement is:", options: ["12.4 mm", "16 mm", "48 mm", "12.04 mm"], correctIndex: 0, answerKey: "12 + 4×0.1 = 12.4 mm.", marks: 2 },
            { type: "ESSAY", prompt: "Describe how a vernier caliper and a micrometer screw gauge are read, and explain why each is more precise than a metre rule.", answerKey: "Vernier caliper: object between jaws; read the main scale at the vernier's zero, then add the figure from the vernier line that coincides exactly with a main-scale line (least count ~0.1 mm). Micrometer: uses a fine screw; read the sleeve (main scale) plus the rotating thimble's fractional part (least count ~0.01 mm), allowing for zero error. Both give an extra decimal place beyond the metre rule's 1 mm because the vernier/thimble divides each main division finely, so they measure small lengths (diameters, thicknesses) far more precisely. Reward the reading methods and the precision comparison.", marks: 8 },
          ],
        },
        // source: OpenStax — College Physics 2e, 2.2 Vectors, Scalars, and Coordinate Systems (https://openstax.org/books/college-physics-2e/pages/2-2-vectors-scalars-and-coordinate-systems)
        {
          slug: "scalar-and-vector-quantities",
          title: "Scalar and Vector Quantities",
          objective:
            "By the end of the topic, learners should be able to define scalar and vector quantities, classify physical quantities as scalars or vectors, and describe how a vector is represented by magnitude and direction. (MoE Grade 10 Period I, CONTENTS 2 'Scalar and vector quantities'.)",
          estimatedMinutes: 100,
          notes: `## Scalars and vectors

- **Scalar** — a quantity that has **magnitude only** (a size and unit), with no direction.
- **Vector** — a quantity that has **both magnitude and direction**.
- Example: a speed of 90 km/h is a scalar; a velocity of 90 km/h **east** is a vector.

## Classifying quantities

| Scalars (magnitude only) | Vectors (magnitude + direction) |
| --- | --- |
| distance | displacement |
| speed | velocity |
| mass | acceleration |
| time | force |
| temperature | weight |
| energy, work | momentum |

- A person's **speed** stays 90 km/h rounding a corner, but their **velocity** changes because the direction changes — this is why speed is a scalar and velocity a vector.

## Representing a vector

- A vector is drawn as an **arrow**: its **length** is proportional to the magnitude and it **points** in the direction of the quantity.
- To describe a vector fully you must state its magnitude **and** its direction (e.g. 500 N downward; 20 m/s north).

\`\`\`svg A vector arrow: length shows magnitude, arrowhead shows direction
<svg viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A vector drawn as an arrow pointing east">
  <line x1="30" y1="55" x2="210" y2="55" stroke="#2563eb" stroke-width="3"/>
  <polygon points="210,55 196,48 196,62" fill="#2563eb"/>
  <text x="90" y="42" font-size="11" fill="#1e40af">magnitude (length)</text>
  <text x="150" y="80" font-size="11" fill="#1e40af">direction</text>
</svg>
\`\`\`

## Why the distinction matters

- Adding scalars uses ordinary arithmetic (3 kg + 2 kg = 5 kg).
- Adding vectors must take direction into account (two 5 N forces can give anything from 0 to 10 N depending on their directions).

## Common errors

- **Calling speed and velocity the same** — velocity includes direction; speed does not.
- **Giving a vector without a direction** — a force of "10 N" is incomplete; state the direction.
- **Treating distance and displacement as identical** — distance is a scalar, displacement a vector.`,
          workedExample: `**Problem.** Classify each quantity as a scalar or a vector and justify: (i) a temperature of 20 °C, (ii) a force of 500 N downward, (iii) a distance of 3 km, (iv) a velocity of 90 km/h east.

**Step 1 — Temperature 20 °C.** It has a size but no direction → **scalar**.

**Step 2 — Force 500 N downward.** It has both a size (500 N) and a direction (downward) → **vector**.

**Step 3 — Distance 3 km.** A path length with size but no direction → **scalar**.

**Step 4 — Velocity 90 km/h east.** Size (90 km/h) and direction (east) → **vector**.

**Answer.** Temperature and distance are scalars; force and velocity are vectors. A quantity is a vector only if a direction is needed to describe it fully.`,
          quiz: [
            { prompt: "A scalar quantity has:", options: ["direction only", "magnitude only", "magnitude and direction", "neither"], correctIndex: 1, explanation: "A scalar has size but no direction." },
            { prompt: "A vector quantity has:", options: ["magnitude only", "direction only", "both magnitude and direction", "neither"], correctIndex: 2, explanation: "A vector has both magnitude and direction." },
            { prompt: "Which is a scalar?", options: ["velocity", "force", "mass", "displacement"], correctIndex: 2, explanation: "Mass has magnitude only." },
            { prompt: "Which is a vector?", options: ["speed", "distance", "temperature", "velocity"], correctIndex: 3, explanation: "Velocity has magnitude and direction." },
            { prompt: "Distance is a scalar; its vector counterpart is:", options: ["speed", "displacement", "mass", "time"], correctIndex: 1, explanation: "Displacement is the vector form of distance." },
            { prompt: "Speed is a scalar; its vector counterpart is:", options: ["velocity", "distance", "energy", "mass"], correctIndex: 0, explanation: "Velocity is speed with a direction." },
            { prompt: "A vector is drawn as an arrow whose length represents its:", options: ["direction", "magnitude", "unit", "sign"], correctIndex: 1, explanation: "Arrow length is proportional to magnitude." },
            { prompt: "A force of 500 N downward is a:", options: ["scalar", "vector", "unit", "prefix"], correctIndex: 1, explanation: "It has magnitude and direction." },
            { prompt: "Temperature is a:", options: ["scalar", "vector", "force", "direction"], correctIndex: 0, explanation: "Temperature has magnitude only." },
            { prompt: "Which quantity needs a direction to be fully described?", options: ["mass", "time", "acceleration", "energy"], correctIndex: 2, explanation: "Acceleration is a vector." },
            { prompt: "A person rounding a corner at constant speed has a changing:", options: ["speed", "velocity", "mass", "distance"], correctIndex: 1, explanation: "Direction changes, so velocity changes though speed is constant." },
            { prompt: "Time is classified as a:", options: ["vector", "scalar", "force", "unit of length"], correctIndex: 1, explanation: "Time has magnitude only." },
            { prompt: "Which set is all scalars?", options: ["mass, time, speed", "force, velocity, displacement", "acceleration, weight, momentum", "distance, force, time"], correctIndex: 0, explanation: "Mass, time and speed are all scalars." },
            { prompt: "Which set is all vectors?", options: ["distance, speed, mass", "velocity, force, acceleration", "energy, time, temperature", "mass, speed, distance"], correctIndex: 1, explanation: "Velocity, force and acceleration are vectors." },
            { prompt: "Adding two scalars uses:", options: ["direction rules", "ordinary arithmetic", "arrows only", "prefixes"], correctIndex: 1, explanation: "Scalars add by ordinary arithmetic." },
            { prompt: "Two 5 N forces can give a resultant between:", options: ["5 and 10 N only", "0 and 10 N depending on direction", "always 10 N", "always 0 N"], correctIndex: 1, explanation: "Vector addition depends on the directions." },
            { prompt: "Weight is a vector because it acts:", options: ["with no direction", "downward (a direction)", "only on scalars", "sideways always"], correctIndex: 1, explanation: "Weight is a force directed downward." },
            { prompt: "A complete description of a vector must include its magnitude and:", options: ["colour", "direction", "mass", "temperature"], correctIndex: 1, explanation: "Direction is essential for a vector." },
            { prompt: "Energy and work are:", options: ["vectors", "scalars", "directions", "prefixes"], correctIndex: 1, explanation: "Energy and work are scalars." },
            { prompt: "Displacement differs from distance because displacement has:", options: ["no size", "a direction", "no unit", "more magnitude always"], correctIndex: 1, explanation: "Displacement is a vector — it has direction." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Define a scalar and a vector quantity, giving two examples of each.", answerKey: "Scalar = magnitude only (e.g. distance, speed, mass, time, temperature). Vector = magnitude and direction (e.g. displacement, velocity, acceleration, force, weight). Any two valid examples each.", marks: 4 },
            { type: "MULTIPLE_CHOICE", prompt: "Which of these is a vector quantity?", options: ["mass", "speed", "acceleration", "temperature"], correctIndex: 2, answerKey: "Acceleration has magnitude and direction — a vector.", marks: 2 },
            { type: "SHORT_ANSWER", prompt: "Explain why velocity is a vector but speed is a scalar, using an example.", answerKey: "Speed states only how fast (magnitude), e.g. 90 km/h; velocity states how fast and in which direction, e.g. 90 km/h east. A car rounding a bend at constant speed has changing velocity because its direction changes, so velocity (with direction) is a vector while speed is a scalar.", marks: 3 },
            { type: "MULTIPLE_CHOICE", prompt: "A vector is represented graphically by:", options: ["a dot", "an arrow whose length shows magnitude and points in the direction", "a number only", "a curved line"], correctIndex: 1, answerKey: "An arrow: length = magnitude, arrowhead = direction.", marks: 2 },
            { type: "ESSAY", prompt: "Distinguish between scalar and vector quantities, classify five physical quantities of your choice, and explain why adding vectors is different from adding scalars.", answerKey: "Scalars have magnitude only; vectors have magnitude and direction. Classify five, e.g. mass (scalar), time (scalar), velocity (vector), force (vector), temperature (scalar). Scalars add by ordinary arithmetic; vectors must be added taking direction into account (e.g. two 5 N forces give 10 N if same direction, 0 N if opposite, or something between). Reward correct definitions, five valid classifications and the vector-addition point.", marks: 8 },
          ],
        },
        // source: OpenStax — College Physics 2e, 11.2 Density (https://openstax.org/books/college-physics-2e/pages/11-2-density)
        {
          slug: "density-and-relative-density",
          title: "Density and Relative Density",
          objective:
            "By the end of the topic, learners should be able to define density and relative density, use ρ = m/V, state the units, and solve simple problems including why objects float or sink. (MoE Grade 10 Period I, CONTENTS 'Density and relative density'.)",
          estimatedMinutes: 100,
          notes: `## Density

- **Density (ρ)** — the mass per unit volume of a substance: ρ = m / V.
- **ρ** — density; **m** — mass (kg); **V** — volume (m³).
- SI unit: **kilogram per cubic metre (kg/m³)**; also g/cm³ (1 g/cm³ = 1000 kg/m³).
- Density is a property of the material, not of the amount: a large and a small block of iron have the same density.

## Typical densities

| Substance | Density (kg/m³) |
| --- | --- |
| Water (at 4 °C) | 1000 |
| Sea water | 1025 |
| Aluminium | 2700 |
| Iron / steel | 7800 |
| Gold | 19 320 |
| Mercury | 13 600 |
| Air | 1.29 |

## Relative density (specific gravity)

- **Relative density** — the ratio of the density of a substance to the density of water.
- relative density = density of substance / density of water.
- It has **no unit** (it is a ratio).
- Because water has a density of 1000 kg/m³, the relative density of a substance equals its density in g/cm³ (e.g. gold ρ = 19.32 g/cm³, relative density = 19.32).

## Floating and sinking

- An object **floats** in a liquid if its density is **less** than the liquid's; it **sinks** if its density is **greater**.
- This is why wood floats on water (less dense) and iron sinks (more dense), while a steel ship floats because its overall (average) density, including the air inside, is less than water.

## Common errors

- **Confusing mass and density** — a heavy object is not necessarily dense; density is mass per unit volume.
- **Wrong volume units** — keep m and V consistent (kg with m³, or g with cm³).
- **Giving relative density a unit** — it is a pure ratio.`,
          workedExample: `**Problem (based on OpenStax College Physics 2e, 11.2).** A metal block has a mass of 780 g and a volume of 100 cm³. (a) Find its density. (b) Find its relative density (density of water = 1.0 g/cm³). (c) Will it float on water?

**Step 1 — Density.** ρ = m / V = 780 g / 100 cm³ = 7.8 g/cm³ = 7800 kg/m³.

**Step 2 — Relative density.** relative density = density of block / density of water = 7.8 / 1.0 = 7.8 (no unit).

**Step 3 — Float or sink?** The block's density (7.8 g/cm³) is greater than water's (1.0 g/cm³), so it sinks.

**Answer.** Density = 7.8 g/cm³ (7800 kg/m³), relative density = 7.8, and it sinks in water because it is denser than water. (These values match iron/steel.)`,
          quiz: [
            { prompt: "Density is defined as:", options: ["mass × volume", "mass / volume", "volume / mass", "mass + volume"], correctIndex: 1, explanation: "Density = mass per unit volume, ρ = m/V." },
            { prompt: "The SI unit of density is:", options: ["kg", "kg/m³", "m³", "g"], correctIndex: 1, explanation: "Density is kilograms per cubic metre." },
            { prompt: "The density of water is about:", options: ["100 kg/m³", "1000 kg/m³", "10 kg/m³", "10 000 kg/m³"], correctIndex: 1, explanation: "Water is about 1000 kg/m³ (1 g/cm³)." },
            { prompt: "1 g/cm³ equals:", options: ["1 kg/m³", "100 kg/m³", "1000 kg/m³", "10 kg/m³"], correctIndex: 2, explanation: "1 g/cm³ = 1000 kg/m³." },
            { prompt: "Relative density is the ratio of a substance's density to that of:", options: ["air", "water", "mercury", "gold"], correctIndex: 1, explanation: "Relative density compares with water." },
            { prompt: "Relative density has:", options: ["units of kg/m³", "units of g/cm³", "no unit", "units of kg"], correctIndex: 2, explanation: "It is a ratio, so it has no unit." },
            { prompt: "A block of mass 200 g and volume 100 cm³ has density:", options: ["2 g/cm³", "0.5 g/cm³", "20 g/cm³", "300 g/cm³"], correctIndex: 0, explanation: "ρ = 200/100 = 2 g/cm³." },
            { prompt: "An object floats on water if its density is:", options: ["greater than water's", "less than water's", "equal to air's", "zero"], correctIndex: 1, explanation: "Less dense than water → floats." },
            { prompt: "An object sinks in water if its density is:", options: ["less than water's", "greater than water's", "equal to water's", "zero"], correctIndex: 1, explanation: "More dense than water → sinks." },
            { prompt: "Two blocks of iron, large and small, have:", options: ["different densities", "the same density", "no density", "zero density"], correctIndex: 1, explanation: "Density is a property of the material, not the amount." },
            { prompt: "The relative density of gold (ρ = 19.32 g/cm³) is:", options: ["1.932", "19.32", "193.2", "0.1932"], correctIndex: 1, explanation: "19.32 / 1.0 = 19.32." },
            { prompt: "A steel ship floats because its overall density (including air) is:", options: ["greater than water", "less than water", "equal to steel", "zero"], correctIndex: 1, explanation: "The average density with trapped air is less than water." },
            { prompt: "To find density you need the mass and the:", options: ["colour", "volume", "temperature only", "weight in newtons only"], correctIndex: 1, explanation: "ρ = m/V needs mass and volume." },
            { prompt: "Which is the densest?", options: ["water", "aluminium", "iron", "gold"], correctIndex: 3, explanation: "Gold (19 320 kg/m³) is the densest listed." },
            { prompt: "A liquid of relative density 13.6 is:", options: ["water", "mercury", "alcohol", "air"], correctIndex: 1, explanation: "Mercury has relative density 13.6." },
            { prompt: "If mass is in grams and volume in cm³, density is in:", options: ["kg/m³", "g/cm³", "kg", "cm³"], correctIndex: 1, explanation: "g ÷ cm³ gives g/cm³." },
            { prompt: "A 500 kg block of volume 0.25 m³ has density:", options: ["2000 kg/m³", "125 kg/m³", "500 kg/m³", "0.0005 kg/m³"], correctIndex: 0, explanation: "ρ = 500/0.25 = 2000 kg/m³." },
            { prompt: "Relative density is also called:", options: ["specific gravity", "specific heat", "mass number", "pressure"], correctIndex: 0, explanation: "Relative density is also known as specific gravity." },
            { prompt: "A material with density less than 1000 kg/m³ will, in water:", options: ["sink", "float", "dissolve", "boil"], correctIndex: 1, explanation: "Less dense than water means it floats." },
            { prompt: "Density measures how much ___ is packed into a given volume.", options: ["colour", "mass", "charge", "time"], correctIndex: 1, explanation: "Density is mass per unit volume." },
          ],
          test: [
            { type: "MULTIPLE_CHOICE", prompt: "A body of mass 90 g occupies 30 cm³. Its density is:", options: ["3 g/cm³", "0.33 g/cm³", "2700 g/cm³", "120 g/cm³"], correctIndex: 0, answerKey: "ρ = m/V = 90/30 = 3 g/cm³.", marks: 2 },
            { type: "SHORT_ANSWER", prompt: "Define density and relative density, giving the unit of each.", answerKey: "Density = mass per unit volume, ρ = m/V, unit kg/m³ (or g/cm³). Relative density = density of substance ÷ density of water, no unit.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "A metal has a density of 8900 kg/m³. Calculate its relative density (density of water = 1000 kg/m³) and state whether it floats on water.", answerKey: "Relative density = 8900/1000 = 8.9 (no unit). Since its density is greater than water's, it sinks.", marks: 4 },
            { type: "MULTIPLE_CHOICE", prompt: "An object floats on water when its density is:", options: ["greater than 1000 kg/m³", "less than 1000 kg/m³", "exactly 13 600 kg/m³", "zero"], correctIndex: 1, answerKey: "Density below water's (1000 kg/m³) means it floats.", marks: 2 },
            { type: "ESSAY", prompt: "Explain what density and relative density mean, how they are calculated, and use them to explain why a piece of iron sinks in water but a steel ship floats.", answerKey: "Density ρ = m/V (kg/m³) is mass per unit volume — a property of the material. Relative density = density of substance ÷ density of water (no unit). A solid iron block has density ~7800 kg/m³, greater than water's 1000 kg/m³, so it sinks. A steel ship, though made of dense steel, encloses a large volume of air, so its overall/average density (mass ÷ total volume) is less than water's, and it floats. An object floats if its (average) density is less than the liquid's. Reward definitions, calculation and the average-density explanation.", marks: 8 },
          ],
        },
        // source: OpenStax — College Physics 2e, 11.3 Pressure & 11.4 Variation of Pressure with Depth in a Fluid (https://openstax.org/books/college-physics-2e/pages/11-3-pressure)
        {
          slug: "pressure-in-solids-liquids-and-gases",
          title: "Pressure in Solids, Liquids and Gases",
          objective:
            "By the end of the topic, learners should be able to define pressure, use P = F/A, describe how pressure acts in solids, liquids (P = ρgh) and gases, and solve simple pressure problems. (MoE Grade 10 Period I, CONTENTS 1(d) 'Pressure in solids, liquids and gases'.)",
          estimatedMinutes: 110,
          notes: `## Pressure

- **Pressure (P)** — the force acting perpendicular to a surface, divided by the area over which it acts.
- **Formula:** P = F / A.
- SI unit: the **pascal (Pa)**; 1 Pa = 1 N/m².
- For the same force, a **smaller area gives a greater pressure** (a needle point pierces skin; a flat finger does not).

## Pressure in solids

- A solid exerts pressure on the surface it rests on, acting **downward** (in the direction of the force/weight).
- Sharp tools (knives, nails, pins) have a small area to give high pressure; wide feet, skis and tractor tyres have a large area to give low pressure and avoid sinking.

## Pressure in liquids

- Pressure in a liquid **increases with depth** and acts **equally in all directions** at a point.
- **Formula:** P = ρgh, where ρ is the liquid's density, g the gravitational field strength and h the depth.
- The pressure depends only on the **depth** (and density), **not** on the shape or width of the container.
- This is why a dam is built thicker at the base and why water spurts farther from a lower hole in a can.

\`\`\`svg Liquid pressure increases with depth and acts in all directions
<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A container of water with longer jets from lower holes">
  <rect x="40" y="20" width="70" height="110" fill="#bfdbfe" stroke="#1e40af"/>
  <line x1="110" y1="45" x2="150" y2="52" stroke="#2563eb" stroke-width="2"/>
  <line x1="110" y1="75" x2="170" y2="88" stroke="#2563eb" stroke-width="2"/>
  <line x1="110" y1="105" x2="195" y2="126" stroke="#2563eb" stroke-width="2"/>
  <text x="120" y="18" font-size="10" fill="#1e40af">shallow: weak jet</text>
  <text x="120" y="145" font-size="10" fill="#1e40af">deep: strong jet</text>
</svg>
\`\`\`

## Pressure in gases

- A gas exerts pressure because its fast-moving particles **collide with the walls** of the container.
- Gas pressure acts **equally in all directions**.
- Heating a gas or reducing its volume increases the pressure (more frequent, harder collisions).
- The atmosphere exerts **atmospheric pressure** (~101 kPa at sea level) from the weight of the air above.

## Common errors

- **Thinking a bigger force always means bigger pressure** — pressure also depends on the area.
- **Believing liquid pressure depends on container shape** — it depends only on depth and density.
- **Forgetting liquid/gas pressure acts in all directions** — not just downward.`,
          workedExample: `**Problem (based on OpenStax College Physics 2e, 11.4).** Find the pressure due to the water at a depth of 80 m in a lake. Take the density of water ρ = 1000 kg/m³ and g = 9.8 m/s². (Ignore atmospheric pressure.)

**Step 1 — Formula.** For pressure due to depth in a liquid: P = ρgh.

**Step 2 — Knowns.** ρ = 1000 kg/m³, g = 9.8 m/s², h = 80 m.

**Step 3 — Substitute.** P = (1000)(9.8)(80).

**Step 4 — Evaluate.** P = 784 000 Pa = 7.84 × 10⁵ Pa ≈ 784 kPa.

**Answer.** The water pressure at 80 m depth is about 784 kPa. It depends only on the depth and the density of the water, not on the width or shape of the lake — which is why dams are built thickest at the base.`,
          quiz: [
            { prompt: "Pressure is defined as:", options: ["force × area", "force / area", "area / force", "force + area"], correctIndex: 1, explanation: "P = F/A, force per unit area." },
            { prompt: "The SI unit of pressure is the:", options: ["newton", "pascal", "joule", "watt"], correctIndex: 1, explanation: "Pressure is measured in pascals (Pa)." },
            { prompt: "1 pascal equals:", options: ["1 N/m²", "1 N·m", "1 N/m", "1 kg/m³"], correctIndex: 0, explanation: "1 Pa = 1 N/m²." },
            { prompt: "For a fixed force, a smaller area gives:", options: ["smaller pressure", "greater pressure", "no pressure", "the same pressure"], correctIndex: 1, explanation: "P = F/A, so smaller A means larger P." },
            { prompt: "A sharp knife cuts well because it has a:", options: ["large area, low pressure", "small area, high pressure", "large force only", "small force"], correctIndex: 1, explanation: "A small edge area concentrates the force into high pressure." },
            { prompt: "Wide tractor tyres reduce pressure on soft ground by:", options: ["increasing the force", "increasing the area", "reducing the mass", "raising the density"], correctIndex: 1, explanation: "A larger contact area lowers the pressure." },
            { prompt: "Pressure in a liquid increases with:", options: ["width", "depth", "container shape", "colour"], correctIndex: 1, explanation: "Liquid pressure increases with depth." },
            { prompt: "Liquid pressure at a point acts:", options: ["only downward", "only sideways", "equally in all directions", "upward only"], correctIndex: 2, explanation: "Pressure at a point in a liquid acts in all directions." },
            { prompt: "The pressure due to depth in a liquid is given by:", options: ["P = F/A", "P = ρgh", "P = mgh", "P = ρ/g"], correctIndex: 1, explanation: "P = ρgh for a liquid column." },
            { prompt: "Liquid pressure depends on depth and density, but not on the:", options: ["gravity", "shape of the container", "liquid used", "height of the column"], correctIndex: 1, explanation: "Container shape does not affect the pressure at a given depth." },
            { prompt: "A gas exerts pressure because its particles:", options: ["stick to the walls", "collide with the container walls", "have weight only", "are charged"], correctIndex: 1, explanation: "Particle collisions with the walls cause gas pressure." },
            { prompt: "Gas pressure acts:", options: ["only downward", "equally in all directions", "only upward", "only sideways"], correctIndex: 1, explanation: "Gas pressure acts in all directions." },
            { prompt: "The pressure at 10 m depth in water (ρ=1000, g=9.8) is about:", options: ["98 000 Pa", "9800 Pa", "980 Pa", "9.8 Pa"], correctIndex: 0, explanation: "P = 1000 × 9.8 × 10 = 98 000 Pa." },
            { prompt: "A force of 20 N on an area of 4 m² gives a pressure of:", options: ["5 Pa", "80 Pa", "24 Pa", "0.2 Pa"], correctIndex: 0, explanation: "P = F/A = 20/4 = 5 Pa." },
            { prompt: "Atmospheric pressure at sea level is about:", options: ["1 Pa", "101 kPa", "1000 Pa", "10 kPa"], correctIndex: 1, explanation: "Atmospheric pressure is about 101 kPa." },
            { prompt: "Water spurts farthest from a hole that is:", options: ["near the top", "near the bottom", "in the middle only", "at the surface"], correctIndex: 1, explanation: "Deeper holes have higher pressure, so water spurts farther." },
            { prompt: "Heating a gas in a sealed container ___ its pressure.", options: ["decreases", "increases", "does not change", "removes"], correctIndex: 1, explanation: "Faster particles collide harder and more often, raising pressure." },
            { prompt: "A dam is built thicker at the base because pressure:", options: ["is greatest at the top", "increases with depth", "acts only sideways at the top", "is constant"], correctIndex: 1, explanation: "Higher pressure at depth needs a stronger base." },
            { prompt: "A force of 50 N on a nail tip of area 0.0001 m² gives pressure:", options: ["500 000 Pa", "0.005 Pa", "50 Pa", "5000 Pa"], correctIndex: 0, explanation: "P = 50/0.0001 = 500 000 Pa." },
            { prompt: "Snow shoes stop you sinking because they:", options: ["reduce your weight", "increase the contact area, lowering pressure", "increase the pressure", "add force"], correctIndex: 1, explanation: "A larger area spreads the weight, lowering pressure." },
          ],
          test: [
            { type: "MULTIPLE_CHOICE", prompt: "A force of 200 N acts on an area of 0.5 m². The pressure is:", options: ["100 Pa", "400 Pa", "0.0025 Pa", "199.5 Pa"], correctIndex: 1, answerKey: "P = F/A = 200/0.5 = 400 Pa.", marks: 2 },
            { type: "SHORT_ANSWER", prompt: "Define pressure, give its formula and SI unit, and explain why a sharp knife cuts more easily than a blunt one.", answerKey: "Pressure = force per unit area, P = F/A, SI unit pascal (Pa) = N/m². A sharp knife has a very small edge area, so the same force produces a much larger pressure (P = F/A), cutting more easily than a blunt (larger-area) blade.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Calculate the pressure due to water at a depth of 5 m (ρ = 1000 kg/m³, g = 9.8 m/s²).", answerKey: "P = ρgh = 1000 × 9.8 × 5 = 49 000 Pa (49 kPa).", marks: 3 },
            { type: "MULTIPLE_CHOICE", prompt: "Pressure at a point in a liquid:", options: ["acts only downward", "acts equally in all directions and increases with depth", "depends on container width", "is the same at all depths"], correctIndex: 1, answerKey: "Liquid pressure acts in all directions and increases with depth.", marks: 2 },
            { type: "ESSAY", prompt: "Explain how pressure is produced in solids, liquids and gases, giving the relevant relationships, and describe one everyday application of pressure for each state.", answerKey: "Solids: P = F/A acting downward; a small area gives high pressure — application: knives/nails (small area, high pressure) or wide tyres/snow shoes (large area, low pressure). Liquids: pressure increases with depth, P = ρgh, and acts equally in all directions, independent of container shape — application: dams built thicker at the base, or hydraulic systems. Gases: pressure comes from particle collisions with the walls, acting in all directions and rising with temperature or reduced volume — application: inflating tyres/balls, or atmospheric pressure (~101 kPa). Reward correct mechanism and relationship for each state plus an application.", marks: 8 },
          ],
        },
      ],
    },
  ],
};
