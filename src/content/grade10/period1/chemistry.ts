import type { SubjectContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry (Grades 10-12).
// Grade 10, Semester One, Period I covers two syllabus topics:
//   Topic I  — Introduction to Chemistry: 1. Development of Chemistry
//              (scientific method, contributors, branches); 2. Units of
//              Measurement (system of units, measuring mass/length/time/
//              temperature/volume, scientific notation and significant
//              figures, precision and accuracy).
//   Topic II — Matter and its Properties: 1. States of matter and their
//              changes; 2. Properties and changes of matter; 3. Standard
//              separation techniques for mixtures; 4. Classification of
//              mixtures.
// Atomic structure (P2), the periodic table (P3), bonding (P4) and
// stoichiometry (P5) follow in their own periods.
export const chemistry: SubjectContent = {
  slug: "chemistry",
  name: "Chemistry",
  shortName: "Chemistry",
  description:
    "The study of matter and change: what chemistry is, the scientific method and measurement, and the states, properties and separation of matter.",
  accent: "amber",
  sortOrder: 4,
  teacherCode: "CHM-10-8842",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "Introduction to Chemistry and Matter",
      summary:
        "Period I of the MoE Grade 10 Chemistry syllabus. Learners meet the development of chemistry — the scientific method, its contributors and its branches — then units and measurement, and go on to study the states of matter and their changes, the properties and changes of matter, the standard techniques for separating mixtures, and the classification of mixtures.",
      topics: [
        {
          slug: "development-of-chemistry",
          title: "Development of Chemistry: Scientific Method, Contributors and Branches",
          objective:
            "By the end of the topic, learners should be able to explain the term chemistry and related terminology, describe the origins and stages in the development of chemistry, state and apply the steps of the scientific method, name notable contributors to chemistry and their work, and describe the branches of chemistry. (MoE Grade 10 Period I, Topic I, CONTENTS 1(a)-(c).)",
          estimatedMinutes: 130,
          notes: `## Introduction

- Everything around you — air, water, food, fuel, medicine, cement — is matter, and chemistry explains what it is made of and how it changes.
- Chemistry grew out of **alchemy**, the medieval search for a way to turn cheap metals into gold; it became a science when measurement and experiment replaced secrecy.
- **This topic:** what chemistry is; how it developed; the scientific method; its contributors; its branches.

## What chemistry is

- **Chemistry** — the branch of science that studies the composition, structure, properties and changes of matter.
- **Matter** — anything that has mass and occupies space.
- Chemistry is called the **central science** because it links physics with biology, geology, medicine and agriculture.

**Related terminology:**

- **Element** — a pure substance made of only one kind of atom; cannot be broken down by chemical means. (Iron, oxygen, gold.)
- **Atom** — the smallest particle of an element that retains its properties.
- **Molecule** — two or more atoms chemically combined.
- **Compound** — a pure substance formed when two or more elements combine chemically in a fixed ratio. (Water, H₂O.)
- **Mixture** — two or more substances physically combined, each keeping its own properties.
- **Substance** — matter with a fixed composition and definite properties.

## Stages in the development of chemistry

1. **Prehistoric / practical stage** — fire, cooking, pottery, smelting of copper and iron, brewing, dyeing. Chemistry practised without theory.
2. **Greek philosophical stage** — matter explained by argument, not experiment. Democritus proposed that matter is made of indivisible particles (*atomos*); Aristotle taught the four "elements" — earth, air, fire and water.
3. **Alchemy (about 300 AD to 1600)** — attempts to change base metals into gold and to find an elixir of life. It failed in its aims, but gave chemistry laboratory apparatus and the techniques of distillation, filtration and crystallisation.
4. **Modern chemistry (from about 1660)** — Boyle insisted on experiment and definition; Lavoisier introduced careful weighing; Dalton gave the atomic theory. Chemistry became a **quantitative, experimental science**.

## The scientific method and its steps

- **Scientific method** — the orderly, systematic procedure scientists use to investigate problems and reach reliable conclusions.

**Steps:**

1. **Observation** — notice and record a fact or problem, using the senses or instruments.
2. **Statement of the problem / question** — state clearly what is to be found out.
3. **Formulating a hypothesis** — a testable, tentative explanation or intelligent guess.
4. **Experimentation** — a controlled test of the hypothesis; vary one factor at a time and record the data.
5. **Analysis of data** — organise the results in tables and graphs and look for patterns.
6. **Conclusion** — state whether the results support the hypothesis; if not, revise it and test again.
7. **Theory** — an explanation supported by a large body of evidence.
8. **Law** — a concise statement, often mathematical, of a relationship that always holds under stated conditions.

**Terms used in experimenting:**

- **Independent variable** — the factor deliberately changed.
- **Dependent variable** — the factor measured, which responds to the change.
- **Controlled variables** — factors deliberately kept constant.
- **Control experiment** — an identical set-up without the factor being tested, used for comparison.
- **Qualitative data** — descriptive observations (colour, smell, texture).
- **Quantitative data** — numerical measurements (mass, volume, temperature).

**Theory vs law:**

- A **law** states *what* happens; a **theory** explains *why* it happens.
- A theory does not become a law with more evidence; they answer different questions.

\`\`\`svg Steps of the scientific method
<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow chart of the scientific method with a loop back from conclusion to hypothesis">
  <rect x="90" y="8" width="120" height="22" rx="5" fill="#e0e7ff" stroke="#3730a3"/>
  <text x="150" y="23" font-size="10" text-anchor="middle" fill="#3730a3">Observation</text>
  <line x1="150" y1="30" x2="150" y2="42" stroke="#64748b"/><polygon points="150,46 146,38 154,38" fill="#64748b"/>
  <rect x="90" y="46" width="120" height="22" rx="5" fill="#e0e7ff" stroke="#3730a3"/>
  <text x="150" y="61" font-size="10" text-anchor="middle" fill="#3730a3">Problem / question</text>
  <line x1="150" y1="68" x2="150" y2="80" stroke="#64748b"/><polygon points="150,84 146,76 154,76" fill="#64748b"/>
  <rect x="90" y="84" width="120" height="22" rx="5" fill="#fef9c3" stroke="#a16207"/>
  <text x="150" y="99" font-size="10" text-anchor="middle" fill="#a16207">Hypothesis</text>
  <line x1="150" y1="106" x2="150" y2="118" stroke="#64748b"/><polygon points="150,122 146,114 154,114" fill="#64748b"/>
  <rect x="90" y="122" width="120" height="22" rx="5" fill="#dcfce7" stroke="#166534"/>
  <text x="150" y="137" font-size="10" text-anchor="middle" fill="#166534">Experiment &amp; analyse</text>
  <line x1="150" y1="144" x2="150" y2="156" stroke="#64748b"/><polygon points="150,160 146,152 154,152" fill="#64748b"/>
  <rect x="90" y="160" width="120" height="22" rx="5" fill="#dcfce7" stroke="#166534"/>
  <text x="150" y="175" font-size="10" text-anchor="middle" fill="#166534">Conclusion</text>
  <path d="M 90 171 L 40 171 L 40 95 L 90 95" fill="none" stroke="#dc2626" stroke-dasharray="4 3"/>
  <polygon points="90,95 82,91 82,99" fill="#dc2626"/>
  <text x="42" y="130" font-size="8" fill="#dc2626">revise</text>
</svg>
\`\`\`

## Contributors to chemistry

| Scientist | Contribution |
|---|---|
| **Democritus** (c. 460–370 BC) | Proposed that matter is made of tiny indivisible particles called *atomos*. |
| **Robert Boyle** (1627–1691) | Called the father of modern chemistry; insisted on experiment; defined an element; gave Boyle's law relating gas pressure and volume. |
| **Antoine Lavoisier** (1743–1794) | Father of modern chemistry; established the **law of conservation of mass**; explained combustion as combination with oxygen; named oxygen and hydrogen. |
| **John Dalton** (1766–1844) | Proposed the **atomic theory** — matter is made of atoms; atoms of one element are alike; atoms combine in simple whole-number ratios. |
| **Dmitri Mendeleev** (1834–1907) | Arranged the elements by atomic mass into the first useful **periodic table** and predicted undiscovered elements. |
| **J. J. Thomson** (1856–1940) | Discovered the **electron**; proposed the "plum pudding" model. |
| **Ernest Rutherford** (1871–1937) | Discovered the **nucleus** through the gold-foil experiment; proposed the nuclear atom. |
| **Niels Bohr** (1885–1962) | Proposed that electrons occupy fixed energy levels (shells). |
| **Marie Curie** (1867–1934) | Discovered radium and polonium; pioneered the study of **radioactivity**. |
| **Amedeo Avogadro** (1776–1856) | Equal volumes of gases at the same temperature and pressure contain equal numbers of molecules. |

## Branches of chemistry

- **Organic chemistry** — compounds of carbon and hydrogen and their derivatives: fuels, plastics, drugs, rubber.
- **Inorganic chemistry** — all substances other than carbon compounds: metals, minerals, salts, acids.
- **Physical chemistry** — the physical principles behind chemical behaviour: energy changes, rates of reaction, equilibrium, structure.
- **Analytical chemistry** — finding what a sample contains (**qualitative**) and how much (**quantitative**).
- **Biochemistry** — the chemistry of living things: proteins, carbohydrates, fats, enzymes, DNA.
- **Industrial chemistry** — the manufacture of chemicals on a large scale: cement, soap, fertiliser, petroleum products.
- **Nuclear chemistry** — changes in the nucleus: radioactivity, fission and fusion.
- **Environmental chemistry** — chemical processes in air, water and soil, and pollution.

## Importance of chemistry

- **Medicine** — drugs, antiseptics, anaesthetics, vaccines.
- **Agriculture** — fertilisers, pesticides, soil testing.
- **Industry** — cement, soap, paint, textiles, petroleum refining, mining.
- **Food** — preservation, nutrition, food processing.
- **Environment** — treating water, controlling pollution, managing waste.

## Common errors to watch for

- **Treating a hypothesis as a fact** — it is a **testable guess** until an experiment supports it.
- **Saying a theory becomes a law** — a law states *what* happens, a theory explains *why*; neither turns into the other.
- **Changing more than one variable in an experiment** — vary **one** factor at a time, or the result proves nothing.
- **Confusing qualitative with quantitative data** — qualitative is descriptive, quantitative is numerical.
- **Calling alchemy a branch of chemistry** — it was an earlier, unscientific stage that nevertheless left useful apparatus and techniques.
- **Mixing up the branches** — organic chemistry is **carbon compounds**; analytical chemistry is about **what and how much**.
- **Confusing element, compound and mixture** — a compound is chemically combined in a fixed ratio; a mixture is only physically combined.`,
          workedExample: `**Task.** A farmer in Bong County notices that maize grown on one side of a field is much shorter than maize on the other side. Use the scientific method to plan an investigation, and state which branch of chemistry the work belongs to.

**Step 1 — observation**
- Maize on the western side of the field is short and pale; maize on the eastern side is tall and green. Both were planted on the same day with the same seed.

**Step 2 — state the problem**
- Why is the maize on the western side of the field growing poorly?

**Step 3 — form a hypothesis**
- "The soil on the western side lacks nitrogen, and adding nitrogen fertiliser will increase the height of the maize."
- The hypothesis is a **testable** statement — it predicts a result that an experiment can check.

**Step 4 — design the experiment**
- **Independent variable:** the amount of nitrogen fertiliser added (0 g, 20 g, 40 g per plot).
- **Dependent variable:** the height of the maize plants after six weeks.
- **Controlled variables:** seed variety, planting date, plot size, watering, weeding, amount of sunlight.
- **Control:** a plot on the western side that receives **no** fertiliser, for comparison.
- Use several plants per plot so that one unusual plant does not distort the result.

**Step 5 — collect and analyse data**
- Record the height of each plant weekly — this is **quantitative** data; note the colour of the leaves as **qualitative** data.
- Tabulate the results and calculate the mean height for each treatment; plot mean height against fertiliser added.

**Step 6 — conclusion**
- If the fertilised plots grow significantly taller than the control, the results **support** the hypothesis.
- If there is no difference, the hypothesis is **not supported** — revise it (perhaps the soil is too acidic, or drainage is poor) and test again.

**Step 7 — branch of chemistry**
- Testing the soil for nitrogen content is **analytical chemistry** (finding what is present and how much).
- The fertiliser itself and the study of soil nutrients fall under **agricultural / inorganic chemistry**, and the wider soil-and-water context is **environmental chemistry**.

**Answer:** the investigation follows observation → problem → hypothesis → controlled experiment → data analysis → conclusion, and belongs mainly to analytical chemistry, applied to agriculture.`,
          quiz: [
            {
              prompt: "Chemistry is the study of the composition, structure, properties and changes of…",
              options: ["matter", "energy only", "living things only", "motion"],
              correctIndex: 0,
              explanation: "Chemistry deals with matter and how it changes.",
            },
            {
              prompt: "Matter is anything that has mass and…",
              options: ["occupies space", "gives off light", "conducts heat", "is alive"],
              correctIndex: 0,
              explanation: "Mass and volume are the defining properties of matter.",
            },
            {
              prompt: "Chemistry is often called the central science because it…",
              options: ["links physics with biology, medicine and geology", "is the oldest science", "uses no mathematics", "needs no experiments"],
              correctIndex: 0,
              explanation: "It sits between the physical and life sciences.",
            },
            {
              prompt: "The medieval attempt to change base metals into gold was called…",
              options: ["alchemy", "biochemistry", "analysis", "distillation"],
              correctIndex: 0,
              explanation: "Alchemy preceded modern chemistry.",
            },
            {
              prompt: "The first step of the scientific method is…",
              options: ["observation", "conclusion", "experiment", "theory"],
              correctIndex: 0,
              explanation: "Investigation begins with noticing something.",
            },
            {
              prompt: "A testable, tentative explanation of an observation is a…",
              options: ["hypothesis", "law", "conclusion", "theory"],
              correctIndex: 0,
              explanation: "A hypothesis is an intelligent, testable guess.",
            },
            {
              prompt: "The factor deliberately changed in an experiment is the…",
              options: ["independent variable", "dependent variable", "control", "constant"],
              correctIndex: 0,
              explanation: "The independent variable is the one the experimenter varies.",
            },
            {
              prompt: "The factor measured in response to a change is the…",
              options: ["dependent variable", "independent variable", "hypothesis", "control"],
              correctIndex: 0,
              explanation: "It depends on the independent variable.",
            },
            {
              prompt: "A statement of what always happens under stated conditions is a…",
              options: ["law", "hypothesis", "theory", "guess"],
              correctIndex: 0,
              explanation: "A law states what happens; a theory explains why.",
            },
            {
              prompt: "Descriptive observations such as colour and smell are…",
              options: ["qualitative data", "quantitative data", "variables", "conclusions"],
              correctIndex: 0,
              explanation: "Qualitative data are non-numerical.",
            },
            {
              prompt: "Who is regarded as the father of modern chemistry for establishing the law of conservation of mass?",
              options: ["Lavoisier", "Democritus", "Mendeleev", "Bohr"],
              correctIndex: 0,
              explanation: "Lavoisier's careful weighing established conservation of mass.",
            },
            {
              prompt: "Who proposed the atomic theory of matter in 1803?",
              options: ["John Dalton", "J. J. Thomson", "Marie Curie", "Robert Boyle"],
              correctIndex: 0,
              explanation: "Dalton proposed that matter is made of atoms combining in simple ratios.",
            },
            {
              prompt: "Who arranged the elements into the first useful periodic table?",
              options: ["Mendeleev", "Rutherford", "Avogadro", "Democritus"],
              correctIndex: 0,
              explanation: "Mendeleev ordered elements by atomic mass and predicted new ones.",
            },
            {
              prompt: "The electron was discovered by…",
              options: ["J. J. Thomson", "Ernest Rutherford", "Niels Bohr", "Antoine Lavoisier"],
              correctIndex: 0,
              explanation: "Thomson discovered the electron and proposed the plum-pudding model.",
            },
            {
              prompt: "The nucleus of the atom was discovered by…",
              options: ["Rutherford", "Thomson", "Dalton", "Curie"],
              correctIndex: 0,
              explanation: "Rutherford's gold-foil experiment revealed the nucleus.",
            },
            {
              prompt: "The branch of chemistry that studies carbon compounds is…",
              options: ["organic chemistry", "inorganic chemistry", "nuclear chemistry", "analytical chemistry"],
              correctIndex: 0,
              explanation: "Organic chemistry deals with carbon and hydrogen compounds.",
            },
            {
              prompt: "The branch that determines what a sample contains and how much is…",
              options: ["analytical chemistry", "organic chemistry", "biochemistry", "industrial chemistry"],
              correctIndex: 0,
              explanation: "Analytical chemistry covers qualitative and quantitative analysis.",
            },
            {
              prompt: "The chemistry of living things is…",
              options: ["biochemistry", "physical chemistry", "nuclear chemistry", "inorganic chemistry"],
              correctIndex: 0,
              explanation: "Biochemistry studies proteins, carbohydrates, fats and enzymes.",
            },
            {
              prompt: "The branch dealing with radioactivity, fission and fusion is…",
              options: ["nuclear chemistry", "organic chemistry", "analytical chemistry", "biochemistry"],
              correctIndex: 0,
              explanation: "Nuclear chemistry concerns changes in the nucleus.",
            },
            {
              prompt: "A substance made of only one kind of atom is an…",
              options: ["element", "compound", "mixture", "alloy"],
              correctIndex: 0,
              explanation: "Elements cannot be broken down chemically.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define chemistry and explain why it is described as the central science. State four ways chemistry is important in everyday life.",
              answerKey:
                "Chemistry is the branch of science that studies the composition, structure, properties and changes of matter. It is called the central science because it connects physics with biology, geology, medicine and agriculture — its principles are needed to explain processes in all of them. Importance (any four): medicine — drugs, antiseptics, vaccines; agriculture — fertilisers, pesticides, soil testing; industry — cement, soap, paint, petroleum refining; food — preservation, nutrition and processing; environment — water treatment and pollution control. Award 2 marks for the definition, 2 for the central-science explanation and 1 for each valid use.",
              marks: 8,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "List the steps of the scientific method in order, and explain the difference between a scientific law and a scientific theory.",
              answerKey:
                "Steps: observation; statement of the problem or question; formulating a hypothesis; experimentation (controlled test); analysis of data; conclusion; and with sufficient evidence, a theory or law. A law is a concise statement, often mathematical, of what always happens under stated conditions — it describes. A theory is a well-supported explanation of why it happens — it explains. A theory does not become a law with more evidence; the two answer different questions. Award marks for the correct order of steps and a clear description/explanation distinction.",
              marks: 7,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Name four contributors to the development of chemistry and state one contribution of each.",
              answerKey:
                "Any four of: Democritus — proposed that matter is made of indivisible particles (atomos); Robert Boyle — insisted on experiment, defined an element, gave Boyle's law; Antoine Lavoisier — established the law of conservation of mass and explained combustion as combination with oxygen; John Dalton — proposed the atomic theory; Dmitri Mendeleev — produced the first useful periodic table and predicted undiscovered elements; J. J. Thomson — discovered the electron; Ernest Rutherford — discovered the nucleus; Niels Bohr — proposed electron energy levels; Marie Curie — pioneered the study of radioactivity, discovered radium and polonium; Avogadro — equal volumes of gases contain equal numbers of molecules. Award 1 mark for each correct name with its correct contribution, up to 8.",
              marks: 8,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt: "Which branch of chemistry would test a water sample to find how much lead it contains?",
              options: ["analytical chemistry", "organic chemistry", "nuclear chemistry", "biochemistry"],
              correctIndex: 0,
              answerKey: "Determining what is present and in what amount is analytical chemistry.",
              marks: 2,
            },
            {
              type: "ESSAY",
              prompt:
                "Describe the stages through which chemistry developed from prehistoric practice to a modern experimental science, and explain how the scientific method makes chemistry reliable.",
              answerKey:
                "A strong answer traces the stages: a prehistoric practical stage in which people used fire, pottery, smelting, brewing and dyeing without any theory; a Greek philosophical stage in which matter was explained by argument rather than experiment, with Democritus proposing indivisible atomos and Aristotle teaching the four elements earth, air, fire and water; the alchemical period from roughly 300 AD to 1600, in which the search for a way to turn base metals into gold and for an elixir of life failed in its aims but produced laboratory apparatus and the techniques of distillation, filtration and crystallisation; and the modern period from about 1660, in which Boyle demanded experiment and proper definitions, Lavoisier introduced careful quantitative weighing and established conservation of mass, and Dalton supplied the atomic theory, turning chemistry into a quantitative experimental science. On reliability it should explain that the scientific method — observation, a clearly stated problem, a testable hypothesis, a controlled experiment varying one factor at a time against a control, analysis of data, and a conclusion that may send the investigator back to revise the hypothesis — means claims are tested rather than asserted, results can be repeated and checked by others, and explanations survive only while evidence supports them. Award marks for the stages in order, named contributors, and a clear account of why the method produces trustworthy knowledge.",
              marks: 12,
            },
          ],
        },
        {
          slug: "units-of-measurement",
          title: "Units of Measurement, Scientific Notation and Accuracy",
          objective:
            "By the end of the topic, learners should be able to distinguish the systems of units, state the SI units for mass, length, time, temperature and volume, solve simple conversion problems, express quantities in scientific notation to the correct number of significant figures, and distinguish precision from accuracy. (MoE Grade 10 Period I, Topic I, CONTENTS 2(a)-(d).)",
          estimatedMinutes: 170,
          notes: `## Introduction

- Chemistry is quantitative — a reaction is described by *how much*, not just *what*.
- Every measurement is a **number plus a unit**; the unit must come from an agreed system.
- **This topic:** systems of units; measuring mass, length, time, temperature and volume; conversions; scientific notation and significant figures; precision and accuracy.

## Systems of units

- **CGS system** — centimetre, gram, second.
- **FPS (Imperial) system** — foot, pound, second.
- **MKS system** — metre, kilogram, second.
- **SI (Système International)** — the modern international system used in all science, built on seven base units.

| Base quantity | SI unit | Symbol |
|---|---|---|
| Length | metre | m |
| Mass | kilogram | kg |
| Time | second | s |
| Temperature | kelvin | K |
| Amount of substance | mole | mol |
| Electric current | ampere | A |
| Luminous intensity | candela | cd |

- **Derived units** are built from base units: volume m³, density kg/m³, concentration mol/dm³.

## Measuring the common quantities

**Mass**
- **Mass** — the quantity of matter in a substance; the same everywhere.
- SI unit **kilogram (kg)**; the laboratory works in **grams (g)**.
- Measured with a **beam balance** or an **electronic balance** (tare it before use).
- Do not confuse with **weight**, the force of gravity on a body, measured in newtons.

**Length**
- SI unit **metre (m)**; laboratory work uses **cm** and **mm**.
- Measured with a metre rule, a vernier caliper or a micrometer screw gauge.

**Time**
- SI unit **second (s)**. Measured with a stopwatch or clock.
- 1 min = 60 s; 1 h = 3600 s.

**Temperature**
- SI unit **kelvin (K)**; the laboratory usually reads **degrees Celsius (°C)**.
- **K = °C + 273** (more precisely 273.15).
- **0 K is absolute zero** — the lowest possible temperature; there are no negative kelvin values.
- Water freezes at 0 °C = 273 K and boils at 100 °C = 373 K.
- Measured with a thermometer (mercury or alcohol in glass, or digital).

**Volume**
- SI unit **cubic metre (m³)**; chemistry normally uses **cm³** and **dm³** (litres).
- **1 dm³ = 1 litre = 1000 cm³**; **1 m³ = 1000 dm³ = 1 000 000 cm³**; **1 cm³ = 1 mL**.
- Regular solid: calculate from the dimensions. Liquid: measuring cylinder, pipette, burette, volumetric flask. Irregular solid: **displacement** of water.
- Read the **bottom of the meniscus** with the eye level with the mark.

## Prefixes and conversions

| Prefix | Symbol | Factor |
|---|---|---|
| mega | M | 10⁶ |
| kilo | k | 10³ |
| deci | d | 10⁻¹ |
| centi | c | 10⁻² |
| milli | m | 10⁻³ |
| micro | µ | 10⁻⁶ |
| nano | n | 10⁻⁹ |

- Convert by multiplying by a **conversion factor** — a fraction equal to 1 — arranged so the unwanted unit cancels.
- 2.5 kg × (1000 g / 1 kg) = **2500 g**.
- To a smaller unit → **multiply**; to a larger unit → **divide**.

## Scientific notation

- **Scientific notation** — a number written as **A × 10ⁿ** with **1 ≤ A < 10**.
- Large numbers take a **positive** exponent, small numbers a **negative** one.
- 6 022 000 000 000 000 000 000 000 = **6.022 × 10²³**; 0.000 025 = **2.5 × 10⁻⁵**.
- Multiplying: multiply coefficients, **add** exponents. Dividing: divide coefficients, **subtract** exponents.

## Significant figures

- **Significant figures** — the digits in a measurement that carry real information about its precision.

**Rules:**

1. All non-zero digits are significant. (24.7 → 3)
2. Zeros between non-zero digits are significant. (2005 → 4)
3. Leading zeros are **not** significant. (0.0034 → 2)
4. Trailing zeros after a decimal point are significant. (3.20 → 3)
5. Trailing zeros in a whole number are ambiguous — use scientific notation.

**In calculations:**

- **Multiplication and division** — the answer takes the **fewest significant figures** in the data.
- **Addition and subtraction** — the answer takes the **fewest decimal places** in the data.
- Round only at the **end**.

## Precision and accuracy

- **Accuracy** — how close a measurement is to the **true or accepted value**.
- **Precision** — how close repeated measurements are **to one another**, and how fine the instrument's scale is.
- Measurements can be **precise but not accurate** — closely grouped around the wrong value, the mark of a faulty or badly calibrated instrument.
- **Percentage error = (|experimental value − true value| ÷ true value) × 100 %.**

**Errors:**

- **Systematic error** — the same size and direction each time (zero error, wrong calibration). Corrected by checking the zero and calibrating; **not** removed by averaging.
- **Random error** — varies in size and direction. Reduced by taking several readings and **averaging**.
- **Parallax error** — reading a scale at an angle. Avoided by viewing straight on.

## Common errors to watch for

- **Quoting a number with no unit** — always state the unit.
- **Forgetting to add 273** when converting °C to K, or subtracting it the wrong way.
- **Writing a negative kelvin temperature** — 0 K is the lowest possible temperature.
- **Confusing dm³ with cm³** — 1 dm³ = 1000 cm³, and 1 cm³ = 1 mL.
- **Coefficient outside 1–10** in scientific notation — 45 × 10³ should be 4.5 × 10⁴.
- **Counting leading zeros as significant** — in 0.0034 only 3 and 4 count.
- **Keeping all the calculator's digits** — the answer cannot be more precise than the least precise measurement.
- **Confusing accuracy with precision** — accuracy is closeness to the true value, precision is agreement among repeats.
- **Averaging to remove a zero error** — averaging only helps with **random** error.`,
          workedExample: `**Task.** A student measures a sample of ethanol in the laboratory.
(i) The empty measuring cylinder has mass 45.2 g; with 25.0 cm³ of ethanol it is 65.0 g. Find the density of ethanol in g/cm³ and in kg/m³, to the correct number of significant figures.
(ii) Convert the volume 25.0 cm³ to dm³ and to m³.
(iii) The ethanol boils at 78 °C. Convert this to kelvin.
(iv) The accepted density of ethanol is 0.789 g/cm³. Find the percentage error.

**Part (i) — density**
- Mass of ethanol = 65.0 − 45.2 = **19.8 g** (subtraction: both values have 1 decimal place, so the answer keeps 1 decimal place).
- Density = mass ÷ volume = 19.8 g ÷ 25.0 cm³ = 0.792 g/cm³.
- Significant figures: 19.8 has 3 s.f. and 25.0 has 3 s.f., so the answer keeps **3 s.f.** → **0.792 g/cm³**.
- In SI units: 0.792 × 1000 = **792 kg/m³**.

**Part (ii) — volume conversions**
- 1 dm³ = 1000 cm³, so 25.0 cm³ = 25.0 ÷ 1000 = **0.0250 dm³** = 2.50 × 10⁻² dm³.
- 1 m³ = 1 000 000 cm³, so 25.0 cm³ = 25.0 ÷ 1 000 000 = **2.50 × 10⁻⁵ m³**.

**Part (iii) — temperature**
- K = °C + 273 = 78 + 273 = **351 K**.

**Part (iv) — percentage error**
- Percentage error = (|experimental − true| ÷ true) × 100 %
- = (|0.792 − 0.789| ÷ 0.789) × 100 %
- = (0.003 ÷ 0.789) × 100 %
- = 0.380 % ≈ **0.38 %**.
- The result is very close to the accepted value, so the measurement is **accurate**.

**Answers:** (i) 0.792 g/cm³ = 792 kg/m³; (ii) 0.0250 dm³ = 2.50 × 10⁻⁵ m³; (iii) 351 K; (iv) about 0.38 %.`,
          quiz: [
            {
              prompt: "The SI unit of mass is the…",
              options: ["kilogram", "gram", "newton", "pound"],
              correctIndex: 0,
              explanation: "The kilogram is the SI base unit of mass.",
            },
            {
              prompt: "The SI unit of amount of substance is the…",
              options: ["mole", "gram", "litre", "kelvin"],
              correctIndex: 0,
              explanation: "The mole measures amount of substance.",
            },
            {
              prompt: "The SI unit of temperature is the…",
              options: ["kelvin", "degree Celsius", "degree Fahrenheit", "joule"],
              correctIndex: 0,
              explanation: "Kelvin is the SI base unit; °C is commonly used in the lab.",
            },
            {
              prompt: "To convert degrees Celsius to kelvin you…",
              options: ["add 273", "subtract 273", "multiply by 273", "divide by 273"],
              correctIndex: 0,
              explanation: "K = °C + 273.",
            },
            {
              prompt: "Water boils at 100 °C. In kelvin this is…",
              options: ["373 K", "273 K", "173 K", "100 K"],
              correctIndex: 0,
              explanation: "100 + 273 = 373 K.",
            },
            {
              prompt: "The lowest possible temperature, 0 K, is called…",
              options: ["absolute zero", "freezing point", "standard temperature", "the triple point"],
              correctIndex: 0,
              explanation: "Nothing can be colder than absolute zero.",
            },
            {
              prompt: "1 dm³ is equal to…",
              options: ["1000 cm³", "100 cm³", "10 cm³", "1 000 000 cm³"],
              correctIndex: 0,
              explanation: "1 dm³ = 1 litre = 1000 cm³.",
            },
            {
              prompt: "1 cm³ is the same as…",
              options: ["1 mL", "1 L", "1 dm³", "1 m³"],
              correctIndex: 0,
              explanation: "A cubic centimetre equals a millilitre.",
            },
            {
              prompt: "The system based on the metre, kilogram and second is the…",
              options: ["MKS system", "CGS system", "FPS system", "Imperial system"],
              correctIndex: 0,
              explanation: "MKS stands for metre-kilogram-second.",
            },
            {
              prompt: "When reading a measuring cylinder, you read the…",
              options: ["bottom of the meniscus at eye level", "top of the meniscus", "middle of the liquid", "highest graduation"],
              correctIndex: 0,
              explanation: "Reading the bottom of the curve at eye level avoids parallax.",
            },
            {
              prompt: "Convert 2.5 kg to grams.",
              options: ["2500 g", "250 g", "25 g", "25 000 g"],
              correctIndex: 0,
              explanation: "1 kg = 1000 g.",
            },
            {
              prompt: "Write 0.000 065 in scientific notation.",
              options: ["6.5 × 10⁻⁵", "6.5 × 10⁵", "65 × 10⁻⁶", "0.65 × 10⁻⁴"],
              correctIndex: 0,
              explanation: "The decimal point moves 5 places right.",
            },
            {
              prompt: "Avogadro's number 602 000 000 000 000 000 000 000 in standard form is about…",
              options: ["6.02 × 10²³", "6.02 × 10²²", "60.2 × 10²²", "6.02 × 10⁻²³"],
              correctIndex: 0,
              explanation: "The coefficient must lie between 1 and 10.",
            },
            {
              prompt: "How many significant figures are in 0.00560?",
              options: ["3", "5", "2", "6"],
              correctIndex: 0,
              explanation: "Leading zeros do not count; 5, 6 and the trailing 0 do.",
            },
            {
              prompt: "How many significant figures are in 4008?",
              options: ["4", "2", "3", "1"],
              correctIndex: 0,
              explanation: "Zeros between non-zero digits are significant.",
            },
            {
              prompt: "In multiplication, the answer is given to the…",
              options: ["fewest significant figures in the data", "most significant figures", "nearest whole number", "number on the calculator"],
              correctIndex: 0,
              explanation: "The least precise measurement limits the result.",
            },
            {
              prompt: "Accuracy is how close a measurement is to the…",
              options: ["true value", "other readings", "mean only", "instrument scale"],
              correctIndex: 0,
              explanation: "Accuracy compares with the accepted value.",
            },
            {
              prompt: "Precision is how close repeated measurements are to…",
              options: ["one another", "the true value", "zero", "the maximum"],
              correctIndex: 0,
              explanation: "Precision is the agreement among repeats.",
            },
            {
              prompt: "An error of the same size and direction in every reading is…",
              options: ["systematic", "random", "parallax only", "negligible"],
              correctIndex: 0,
              explanation: "A systematic error shifts all readings one way.",
            },
            {
              prompt: "Random errors are reduced by…",
              options: ["taking several readings and averaging", "using one careful reading", "changing units", "rounding early"],
              correctIndex: 0,
              explanation: "Averaging cancels errors that vary randomly.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "State the SI unit used to measure mass, length, time, temperature and volume, and give one instrument used for each.",
              answerKey:
                "Mass — kilogram (kg); beam balance or electronic balance. Length — metre (m); metre rule, vernier caliper or micrometer. Time — second (s); stopwatch or clock. Temperature — kelvin (K), commonly read in °C; thermometer. Volume — cubic metre (m³), commonly cm³ or dm³; measuring cylinder, pipette, burette or volumetric flask (or displacement for an irregular solid). Award 1 mark for each correct unit and 1 for each correct instrument.",
              marks: 10,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Carry out the following conversions: (a) 3.5 kg to grams; (b) 450 cm³ to dm³; (c) 25 °C to kelvin; (d) 0.0025 m to millimetres.",
              answerKey:
                "(a) 3.5 × 1000 = 3500 g. (b) 450 ÷ 1000 = 0.45 dm³. (c) 25 + 273 = 298 K. (d) 0.0025 × 1000 = 2.5 mm. Award marks for each correct conversion with the correct unit.",
              marks: 8,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain the difference between accuracy and precision, and describe how systematic and random errors differ and how each can be reduced.",
              answerKey:
                "Accuracy is how close a measurement is to the true or accepted value; precision is how close repeated measurements are to one another (and how fine the instrument's scale is). A set of readings can be precise without being accurate — tightly grouped but around the wrong value, which usually indicates a faulty or badly calibrated instrument. A systematic error is the same size and direction every time, arising from a zero error, wrong calibration or poor technique; it is reduced by checking and correcting the zero and by calibrating the instrument, and it cannot be removed by averaging. A random error varies in size and direction from reading to reading and is reduced by taking several readings and finding the mean. Award marks for the distinction and for both error types with correct remedies.",
              marks: 6,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt: "A student's four titration results cluster tightly together but all differ from the accepted value by the same amount. The results are…",
              options: ["precise but not accurate", "accurate but not precise", "both accurate and precise", "neither precise nor accurate"],
              correctIndex: 0,
              answerKey: "Tight clustering means good precision; a constant offset from the true value means poor accuracy, pointing to a systematic error.",
              marks: 2,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain why scientists use the SI system and scientific notation, state the rules for counting significant figures, and explain how significant figures are handled in multiplication and in addition.",
              answerKey:
                "A strong answer explains that the SI system provides a single set of internationally agreed base units (metre, kilogram, second, kelvin, mole, ampere, candela) so that results can be repeated, compared and combined anywhere in the world, avoiding the confusion of competing systems such as CGS and FPS, and that derived units are built systematically from the base units. On scientific notation it explains that chemistry deals with extremely large and small quantities — Avogadro's number 6.022 × 10²³ or a concentration of 2.5 × 10⁻⁵ mol/dm³ — which are unreadable in ordinary decimal form; writing them as A × 10ⁿ with 1 ≤ A < 10 makes the magnitude clear, shortens the writing, simplifies multiplication and division through adding and subtracting exponents, and shows the significant figures unambiguously. The rules for significant figures: all non-zero digits count; zeros between non-zero digits count; leading zeros do not count; trailing zeros after a decimal point count; trailing zeros in a whole number without a decimal point are ambiguous and should be resolved with scientific notation. In multiplication and division the answer takes the fewest significant figures present in the data; in addition and subtraction it takes the fewest decimal places; rounding is done only at the end of the calculation. Award marks for the reasons for SI, the reasons for scientific notation, the complete set of rules, and both calculation conventions with examples.",
              marks: 12,
            },
          ],
        },
        {
          slug: "states-of-matter-and-their-changes",
          title: "States of Matter and Their Changes",
          objective:
            "By the end of the topic, learners should be able to discuss the three states of matter and describe them in terms of the kinetic particle theory, name and describe the changes of state, and interpret a heating curve. (MoE Grade 10 Period I, Topic II, CONTENTS 1 'States of Matter and their Changes'.)",
          estimatedMinutes: 150,
          notes: `## Introduction

- Water is ice in a freezer, liquid in a bucket and steam over a pot — one substance, three states.
- The difference is not in the particles themselves but in **how they are arranged and how fast they move**.
- **This topic:** the three states; the kinetic particle theory; the changes of state; heating curves.

## Matter and the three states

- **Matter** — anything that has mass and occupies space.
- The three common states are **solid**, **liquid** and **gas**. (Plasma is a fourth state, found in stars and lightning.)

| Property | Solid | Liquid | Gas |
|---|---|---|---|
| Shape | definite | takes the shape of its container | fills the container |
| Volume | definite | definite | no definite volume |
| Particle arrangement | closely packed, orderly | close but disorderly | far apart, random |
| Particle movement | vibrate about fixed positions | slide over one another | move fast in all directions |
| Forces between particles | very strong | moderate | very weak / negligible |
| Compressibility | almost none | very slight | easily compressed |
| Density | high | high | very low |
| Flow | does not flow | flows | flows and diffuses rapidly |

\`\`\`svg Particle arrangement in the three states of matter
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Particles packed in a solid, closer but disordered in a liquid, and widely spread in a gas">
  <rect x="14" y="20" width="80" height="70" fill="none" stroke="#334155" stroke-width="1.5"/>
  <g fill="#2563eb">
    <circle cx="30" cy="36" r="6"/><circle cx="50" cy="36" r="6"/><circle cx="70" cy="36" r="6"/>
    <circle cx="30" cy="56" r="6"/><circle cx="50" cy="56" r="6"/><circle cx="70" cy="56" r="6"/>
    <circle cx="30" cy="76" r="6"/><circle cx="50" cy="76" r="6"/><circle cx="70" cy="76" r="6"/>
  </g>
  <text x="54" y="108" font-size="11" text-anchor="middle" fill="#334155">solid</text>
  <rect x="118" y="20" width="80" height="70" fill="none" stroke="#334155" stroke-width="1.5"/>
  <g fill="#059669">
    <circle cx="134" cy="42" r="6"/><circle cx="152" cy="34" r="6"/><circle cx="172" cy="44" r="6"/>
    <circle cx="140" cy="60" r="6"/><circle cx="162" cy="58" r="6"/><circle cx="182" cy="66" r="6"/>
    <circle cx="132" cy="78" r="6"/><circle cx="156" cy="76" r="6"/><circle cx="176" cy="82" r="6"/>
  </g>
  <text x="158" y="108" font-size="11" text-anchor="middle" fill="#334155">liquid</text>
  <rect x="222" y="20" width="80" height="70" fill="none" stroke="#334155" stroke-width="1.5"/>
  <g fill="#dc2626">
    <circle cx="236" cy="30" r="6"/><circle cx="276" cy="36" r="6"/><circle cx="256" cy="54" r="6"/>
    <circle cx="292" cy="62" r="6"/><circle cx="232" cy="70" r="6"/><circle cx="268" cy="82" r="6"/>
  </g>
  <text x="262" y="108" font-size="11" text-anchor="middle" fill="#334155">gas</text>
</svg>
\`\`\`

## The kinetic particle theory

- All matter is made of tiny **particles** (atoms, molecules or ions).
- The particles are in **constant motion**; the higher the temperature, the faster they move.
- Particles **attract** one another; the attraction is strongest in solids and weakest in gases.
- **Temperature** is a measure of the **average kinetic energy** of the particles.
- Heating gives particles energy to overcome the attractions and move further apart; cooling lets the attractions pull them back together.

**Consequences of particle motion:**

- **Diffusion** — the spreading of particles from a region of high concentration to one of low concentration, e.g. the smell of perfume crossing a room. Faster in gases than in liquids, and faster when hot.
- **Brownian motion** — the random zig-zag movement of visible particles (smoke, pollen) caused by collisions with fast-moving invisible particles; direct evidence that particles move.

## Changes of state

| Change | Name | Heat |
|---|---|---|
| Solid → liquid | melting (fusion) | absorbs heat |
| Liquid → solid | freezing (solidification) | releases heat |
| Liquid → gas | vaporisation (boiling / evaporation) | absorbs heat |
| Gas → liquid | condensation | releases heat |
| Solid → gas directly | sublimation | absorbs heat |
| Gas → solid directly | deposition | releases heat |

- **Melting point** — the constant temperature at which a solid becomes a liquid. Ice: 0 °C.
- **Boiling point** — the constant temperature at which a liquid becomes a gas throughout its bulk. Water: 100 °C at normal atmospheric pressure.
- **Freezing point** = melting point of the same substance.
- Substances that **sublime**: iodine, solid carbon dioxide (dry ice), ammonium chloride, naphthalene.

**Evaporation and boiling compared:**

| Evaporation | Boiling |
|---|---|
| At any temperature | Only at the boiling point |
| Only at the surface | Throughout the liquid |
| Slow and quiet | Rapid, with bubbles |
| Causes cooling | Needs a continuous supply of heat |

- Evaporation is faster with **higher temperature**, **larger surface area**, **moving air (wind)** and **lower humidity**.

## Latent heat and the heating curve

- **Latent heat** — the heat absorbed or released during a change of state **without any change in temperature**.
- The energy goes into breaking the forces between particles, not into speeding them up — which is why the temperature stays constant while a substance melts or boils.
- **Latent heat of fusion** — for melting or freezing. **Latent heat of vaporisation** — for boiling or condensing.

**Heating curve for ice heated to steam:**

1. Ice warms from below 0 °C to 0 °C — temperature **rises**.
2. Ice melts at 0 °C — temperature **constant** (latent heat of fusion absorbed).
3. Water warms from 0 °C to 100 °C — temperature **rises**.
4. Water boils at 100 °C — temperature **constant** (latent heat of vaporisation absorbed).
5. Steam heats above 100 °C — temperature **rises**.

\`\`\`svg Heating curve for ice changing to steam
<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Temperature against time showing two flat plateaus at the melting and boiling points">
  <line x1="40" y1="140" x2="285" y2="140" stroke="#334155" stroke-width="1.5"/>
  <line x1="40" y1="140" x2="40" y2="15" stroke="#334155" stroke-width="1.5"/>
  <polyline points="40,128 70,110 120,110 150,60 220,60 260,30" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="40" y1="110" x2="70" y2="110" stroke="#94a3b8" stroke-dasharray="3 3"/>
  <line x1="40" y1="60" x2="150" y2="60" stroke="#94a3b8" stroke-dasharray="3 3"/>
  <text x="16" y="114" font-size="9" fill="#334155">0 °C</text>
  <text x="10" y="64" font-size="9" fill="#334155">100 °C</text>
  <text x="95" y="104" font-size="9" text-anchor="middle" fill="#166534">melting</text>
  <text x="185" y="54" font-size="9" text-anchor="middle" fill="#166534">boiling</text>
  <text x="162" y="158" font-size="10" text-anchor="middle" fill="#334155">time / heat supplied</text>
  <text x="20" y="30" font-size="10" fill="#334155">T</text>
</svg>
\`\`\`

## Common errors to watch for

- **Saying the particles themselves change during a change of state** — only their **arrangement, spacing and motion** change; the particles are the same.
- **Thinking temperature rises while a substance melts or boils** — it stays **constant**; the heat becomes latent heat.
- **Confusing evaporation with boiling** — evaporation happens at **any** temperature from the **surface only**; boiling happens at a fixed temperature **throughout**.
- **Confusing sublimation with melting** — sublimation goes **solid straight to gas**, with no liquid stage.
- **Saying gases have no mass** — gases have mass; they are simply far less dense.
- **Treating melting point and freezing point as different temperatures** — for a pure substance they are the same.
- **Explaining diffusion as "the smell moving because air pushes it"** — it is the **random motion of the particles themselves**.`,
          workedExample: `**Task.** A student heats a beaker of crushed ice steadily and records the temperature every minute. The temperature rises from −10 °C to 0 °C, stays at 0 °C for six minutes, rises to 100 °C, stays at 100 °C for many minutes, then rises again.
(i) Name the change of state at each flat part. (ii) Explain why the temperature does not rise during the flat parts. (iii) Describe what happens to the particles at each stage. (iv) Name the change that would occur if the steam were cooled on a cold surface.

**Step 1 — identify the flat parts**
- First flat part at **0 °C**: the ice is **melting** (fusion) — solid changing to liquid.
- Second flat part at **100 °C**: the water is **boiling** (vaporisation) — liquid changing to gas.

**Step 2 — why the temperature stays constant**
- Heat is still being supplied, but it is used as **latent heat** — energy to **break the forces of attraction** between the particles and separate them.
- None of it goes into increasing the average kinetic energy of the particles, and temperature measures average kinetic energy.
- At 0 °C the heat absorbed is the **latent heat of fusion**; at 100 °C it is the **latent heat of vaporisation**.

**Step 3 — the particles at each stage**
- **−10 °C to 0 °C:** particles are in fixed positions in an orderly lattice, vibrating; the heat makes them vibrate faster, so the temperature rises.
- **At 0 °C:** vibration becomes strong enough to break the rigid lattice; particles begin to slide over one another — the solid becomes a liquid.
- **0 °C to 100 °C:** liquid particles slide past each other and move faster as heat is added.
- **At 100 °C:** particles gain enough energy to overcome the remaining attractions completely and escape as a gas throughout the liquid, forming bubbles.
- **Above 100 °C:** widely separated gas particles move faster still.

**Step 4 — cooling the steam**
- Gas to liquid is **condensation**; the water vapour would form droplets on the cold surface, **releasing** latent heat.
- If cooled far enough, the liquid would then **freeze** at 0 °C.

**Answers:** (i) melting at 0 °C, boiling at 100 °C; (ii) the heat supplied becomes latent heat, breaking the forces between particles rather than raising their kinetic energy; (iii) as described above; (iv) condensation.`,
          quiz: [
            {
              prompt: "Matter is anything that has mass and…",
              options: ["occupies space", "is visible", "is solid", "conducts electricity"],
              correctIndex: 0,
              explanation: "Mass and volume define matter.",
            },
            {
              prompt: "Which state has a definite shape and a definite volume?",
              options: ["solid", "liquid", "gas", "plasma"],
              correctIndex: 0,
              explanation: "Solids hold both their shape and volume.",
            },
            {
              prompt: "Which state has a definite volume but takes the shape of its container?",
              options: ["liquid", "solid", "gas", "none"],
              correctIndex: 0,
              explanation: "Liquids flow but keep a fixed volume.",
            },
            {
              prompt: "Gases can be compressed easily because their particles are…",
              options: ["far apart", "closely packed", "not moving", "very heavy"],
              correctIndex: 0,
              explanation: "Large spaces between particles allow compression.",
            },
            {
              prompt: "In a solid, the particles…",
              options: ["vibrate about fixed positions", "move freely in all directions", "slide over each other", "do not move at all"],
              correctIndex: 0,
              explanation: "Solid particles vibrate in place within a lattice.",
            },
            {
              prompt: "Temperature is a measure of the average… of the particles.",
              options: ["kinetic energy", "mass", "size", "charge"],
              correctIndex: 0,
              explanation: "Higher temperature means faster average particle motion.",
            },
            {
              prompt: "The change from solid to liquid is called…",
              options: ["melting", "freezing", "condensation", "sublimation"],
              correctIndex: 0,
              explanation: "Melting (fusion) is solid to liquid.",
            },
            {
              prompt: "The change from gas to liquid is called…",
              options: ["condensation", "evaporation", "sublimation", "melting"],
              correctIndex: 0,
              explanation: "Condensation releases latent heat.",
            },
            {
              prompt: "The change from solid directly to gas is called…",
              options: ["sublimation", "melting", "boiling", "condensation"],
              correctIndex: 0,
              explanation: "Sublimation skips the liquid stage.",
            },
            {
              prompt: "Which substance sublimes on heating?",
              options: ["iodine", "iron", "water", "salt"],
              correctIndex: 0,
              explanation: "Iodine, dry ice and ammonium chloride sublime.",
            },
            {
              prompt: "The heat absorbed during a change of state without a temperature change is called…",
              options: ["latent heat", "specific heat", "sensible heat", "kinetic energy"],
              correctIndex: 0,
              explanation: "Latent heat breaks the forces between particles.",
            },
            {
              prompt: "During melting, the temperature of a pure substance…",
              options: ["stays constant", "rises steadily", "falls", "rises then falls"],
              correctIndex: 0,
              explanation: "All the heat goes into breaking the lattice.",
            },
            {
              prompt: "Evaporation takes place…",
              options: ["at any temperature, from the surface", "only at the boiling point", "only throughout the liquid", "only when cooled"],
              correctIndex: 0,
              explanation: "Evaporation is a surface process at any temperature.",
            },
            {
              prompt: "Boiling occurs…",
              options: ["at a fixed temperature throughout the liquid", "at any temperature", "at the surface only", "without heat"],
              correctIndex: 0,
              explanation: "Bubbles form throughout at the boiling point.",
            },
            {
              prompt: "Which of these does NOT increase the rate of evaporation?",
              options: ["increasing humidity", "raising the temperature", "increasing the surface area", "blowing air across the surface"],
              correctIndex: 0,
              explanation: "Humid air already holds vapour, slowing evaporation.",
            },
            {
              prompt: "The random zig-zag motion of smoke particles seen under a microscope is called…",
              options: ["Brownian motion", "diffusion", "sublimation", "convection"],
              correctIndex: 0,
              explanation: "It is evidence that invisible particles are in motion.",
            },
            {
              prompt: "The spreading of particles from high to low concentration is…",
              options: ["diffusion", "condensation", "sublimation", "freezing"],
              correctIndex: 0,
              explanation: "Diffusion results from random particle motion.",
            },
            {
              prompt: "Diffusion is fastest in…",
              options: ["gases", "liquids", "solids", "all equally"],
              correctIndex: 0,
              explanation: "Gas particles move fastest and are furthest apart.",
            },
            {
              prompt: "For a pure substance, the freezing point is…",
              options: ["the same as the melting point", "higher than the melting point", "lower than the melting point", "unrelated to it"],
              correctIndex: 0,
              explanation: "The same temperature marks both changes.",
            },
            {
              prompt: "Water boils at 100 °C only at…",
              options: ["normal atmospheric pressure", "any pressure", "high altitude", "0 K"],
              correctIndex: 0,
              explanation: "Lower pressure lowers the boiling point.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Compare the three states of matter in terms of shape, volume, particle arrangement, particle movement and compressibility.",
              answerKey:
                "Solid — definite shape and definite volume; particles closely packed in an orderly arrangement; particles vibrate about fixed positions; almost incompressible. Liquid — no definite shape (takes the shape of its container) but definite volume; particles close together but disorderly; particles slide over one another; very slightly compressible. Gas — no definite shape or volume, fills its container; particles far apart and random; particles move rapidly in all directions; easily compressed. Award marks for each correct comparison across the five properties.",
              marks: 10,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Name the change of state in each case: (a) ice to water; (b) water to steam; (c) steam to water; (d) iodine crystals to purple vapour; (e) water to ice.",
              answerKey:
                "(a) melting (fusion); (b) vaporisation/boiling; (c) condensation; (d) sublimation; (e) freezing (solidification). Award 1 mark each.",
              marks: 5,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State four differences between evaporation and boiling.",
              answerKey:
                "Evaporation occurs at any temperature, boiling only at the boiling point. Evaporation takes place at the surface only, boiling throughout the bulk of the liquid. Evaporation is slow and quiet, boiling is rapid with bubbles forming. Evaporation causes cooling of the remaining liquid, boiling requires a continuous supply of heat. (Also acceptable: evaporation does not need a heat source, boiling does.) Award 1 mark per correct difference.",
              marks: 4,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt: "While a pure solid is melting, the temperature remains constant because the heat supplied is used to…",
              options: ["break the forces between the particles", "raise the kinetic energy of the particles", "expand the container", "destroy the particles"],
              correctIndex: 0,
              answerKey: "The energy becomes latent heat of fusion, overcoming interparticle attraction rather than raising temperature.",
              marks: 2,
            },
            {
              type: "ESSAY",
              prompt:
                "State the main points of the kinetic particle theory and use it to explain the properties of solids, liquids and gases, the process of diffusion, and why the temperature stays constant during a change of state.",
              answerKey:
                "A strong answer states the theory: all matter is made of tiny particles (atoms, molecules or ions); the particles are in constant motion; they attract one another, most strongly in solids and least in gases; the average kinetic energy of the particles — and so their speed — increases with temperature. It then applies it: in a solid the particles are closely packed in an orderly lattice with strong attractions, vibrating about fixed positions, giving a definite shape and volume, high density and almost no compressibility; in a liquid the particles are still close but disordered with moderate attractions, able to slide over one another, so the liquid flows and takes the shape of its container while keeping a definite volume; in a gas the particles are far apart with negligible attraction, moving rapidly and randomly, so a gas has no definite shape or volume, is easily compressed and has a very low density. Diffusion is explained as the net spreading of particles from a region of high concentration to one of low concentration purely as a result of their random motion, which is fastest in gases because the particles move fastest and are furthest apart, and faster at higher temperature; Brownian motion is cited as direct evidence of particle movement. On changes of state it explains that the heat supplied during melting or boiling is absorbed as latent heat and is used to overcome the forces of attraction between the particles and separate them, not to increase their average kinetic energy; since temperature measures average kinetic energy, the temperature remains constant until the change is complete. Award marks for the theory's points, the three states explained, diffusion, and the latent-heat explanation.",
              marks: 12,
            },
          ],
        },
        {
          slug: "properties-and-changes-of-matter",
          title: "Properties and Changes of Matter",
          objective:
            "By the end of the topic, learners should be able to distinguish physical from chemical properties, identify physical and chemical changes and state the evidence for each, distinguish intensive from extensive properties, and relate chemical change to the law of conservation of mass. (MoE Grade 10 Period I, Topic II, CONTENTS 2 'Properties and Changes of Matter'.)",
          estimatedMinutes: 150,
          notes: `## Introduction

- Tearing paper and burning paper both alter it — but only one produces a new substance.
- Chemistry separates changes by whether the **substance itself** is still there afterwards.
- **This topic:** physical and chemical properties; intensive and extensive properties; physical and chemical changes; evidence of chemical change; conservation of mass.

## Properties of matter

- **Property** — a characteristic used to describe or identify a substance.

**Physical properties**

- **Physical property** — a property that can be observed or measured **without changing the identity** of the substance.
- Examples: colour, odour, taste, state at room temperature, **melting point**, **boiling point**, **density**, solubility, hardness, malleability, ductility, electrical and thermal conductivity, lustre, viscosity.

**Chemical properties**

- **Chemical property** — a property that describes how a substance **reacts to form new substances**; it can only be observed **during a chemical change**.
- Examples: flammability (combustibility), reactivity with acids, reactivity with water or oxygen, rusting/corrosion, toxicity, thermal decomposition, ability to act as an oxidising or reducing agent.

**Intensive and extensive properties**

- **Intensive property** — does **not** depend on the amount of matter present: density, melting point, boiling point, colour, temperature, hardness. Useful for **identifying** substances.
- **Extensive property** — **depends** on the amount of matter present: mass, volume, length, total heat energy.
- A small piece and a large block of copper have different masses (extensive) but the same density (intensive).

## Physical change

- **Physical change** — a change in which **no new substance** is formed; only the physical form, state or appearance changes.

**Features:**
- Usually **easily reversible**.
- The **composition** stays the same.
- Involves relatively **small energy** changes.
- **Mass is unchanged**.

**Examples:** melting ice, boiling water, dissolving sugar in water, crushing a stone, tearing paper, cutting wood, magnetising iron, evaporating sea water to leave salt, mixing sand and iron filings.

## Chemical change

- **Chemical change (chemical reaction)** — a change in which **one or more new substances** with new properties are formed.

**Features:**
- Usually **not easily reversible**.
- The **composition changes**; new substances are formed.
- Usually a **large energy** change (heat given out or taken in).
- The total **mass is conserved**, even though the substances differ.

**Examples:** burning wood or charcoal, rusting of iron, cooking food, digestion, respiration, photosynthesis, souring of milk, ripening of fruit, electrolysis of water, reaction of an acid with a metal or with a carbonate.

## Evidence that a chemical change has occurred

- **Evolution of a gas** — bubbles or effervescence (marble chips with dilute hydrochloric acid).
- **Formation of a precipitate** — an insoluble solid appears when two solutions are mixed.
- **A permanent colour change** — not simply mixing coloured substances.
- **Heat or light given out or absorbed** — an **exothermic** change gives out heat; an **endothermic** change takes it in.
- **A new smell** produced.
- **The change is difficult to reverse**.

*Caution:* one sign alone is not proof — boiling water produces bubbles and heat is absorbed, yet it is a **physical** change, because the steam is still water.

| | Physical change | Chemical change |
|---|---|---|
| New substance | none | yes |
| Reversibility | usually easy | usually difficult |
| Composition | unchanged | changed |
| Energy change | small | usually large |
| Mass | conserved | conserved |
| Example | melting ice | burning charcoal |

\`\`\`svg Physical change compared with chemical change
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ice melting to water contrasted with wood burning to ash and gases">
  <rect x="14" y="30" width="46" height="30" rx="4" fill="#bfdbfe" stroke="#1d4ed8"/>
  <text x="37" y="50" font-size="10" text-anchor="middle" fill="#1d4ed8">ice</text>
  <line x1="64" y1="45" x2="94" y2="45" stroke="#64748b"/><polygon points="98,45 90,41 90,49" fill="#64748b"/>
  <rect x="102" y="30" width="46" height="30" rx="4" fill="#bfdbfe" stroke="#1d4ed8"/>
  <text x="125" y="50" font-size="10" text-anchor="middle" fill="#1d4ed8">water</text>
  <text x="81" y="22" font-size="9" text-anchor="middle" fill="#166534">same substance</text>
  <text x="81" y="76" font-size="9" text-anchor="middle" fill="#334155">physical change</text>
  <rect x="176" y="30" width="46" height="30" rx="4" fill="#fed7aa" stroke="#c2410c"/>
  <text x="199" y="50" font-size="10" text-anchor="middle" fill="#c2410c">wood</text>
  <line x1="226" y1="45" x2="256" y2="45" stroke="#64748b"/><polygon points="260,45 252,41 252,49" fill="#64748b"/>
  <rect x="264" y="22" width="46" height="22" rx="4" fill="#e2e8f0" stroke="#475569"/>
  <text x="287" y="37" font-size="9" text-anchor="middle" fill="#475569">ash</text>
  <rect x="264" y="50" width="46" height="22" rx="4" fill="#e2e8f0" stroke="#475569"/>
  <text x="287" y="65" font-size="9" text-anchor="middle" fill="#475569">CO₂ + H₂O</text>
  <text x="243" y="16" font-size="9" text-anchor="middle" fill="#991b1b">new substances</text>
  <text x="243" y="90" font-size="9" text-anchor="middle" fill="#334155">chemical change</text>
</svg>
\`\`\`

## Law of conservation of mass

- **Law of conservation of mass** — matter is neither created nor destroyed in a chemical reaction; the **total mass of the products equals the total mass of the reactants**.
- Established by **Antoine Lavoisier** through careful weighing.
- Atoms are only **rearranged**; none is lost, so the number of atoms of each element is the same on both sides.
- This is why chemical equations must be **balanced**.
- Apparent exceptions are open systems: burning wood seems to lose mass because the carbon dioxide and water vapour escape; rusting iron seems to gain mass because oxygen from the air joins it. Weigh in a **closed** container and the mass is unchanged.

## Common errors to watch for

- **Calling dissolving a chemical change** — dissolving sugar in water is **physical**; the sugar can be recovered by evaporation.
- **Treating any colour change as chemical** — mixing paints changes colour physically; a **permanent** colour change from a reaction is chemical.
- **Using bubbles alone as proof** — boiling water bubbles, but no new substance forms.
- **Confusing a chemical property with a physical one** — flammability is **chemical** (it is only seen when the substance burns); density is **physical**.
- **Saying mass is lost when wood burns** — the gases escape; in a closed system mass is **conserved**.
- **Mixing up intensive and extensive** — mass and volume depend on the amount; density and melting point do not.
- **Assuming all chemical changes are irreversible** — most are hard to reverse, but some (like heating and cooling ammonium chloride, or reversible reactions) can be reversed under the right conditions.`,
          workedExample: `**Task.** For each process, state whether it is a physical or a chemical change and give your reason:
(i) a piece of iron rusting in the rain; (ii) salt dissolving in water; (iii) charcoal burning in a stove; (iv) candle wax melting; (v) milk turning sour.
Then: (vi) 5.6 g of iron reacts completely with 3.2 g of sulfur in a closed tube to form iron(II) sulfide. What mass of product forms, and which law does this illustrate?

**Step 1 — apply the test: is a new substance formed?**

- **(i) Iron rusting — CHEMICAL.** The iron reacts with oxygen and water to form a new substance, hydrated iron(III) oxide (rust), which is reddish-brown, crumbly and has completely different properties from the shiny, strong metal. It cannot be reversed by simple physical means.
- **(ii) Salt dissolving — PHYSICAL.** No new substance forms; the salt particles simply spread among the water particles. The salt can be recovered unchanged by evaporating the water.
- **(iii) Charcoal burning — CHEMICAL.** Carbon combines with oxygen to form carbon dioxide gas, and ash remains. Heat and light are given out, and the change cannot be reversed.
- **(iv) Candle wax melting — PHYSICAL.** Only the state changes, solid to liquid; the wax is still wax and solidifies again on cooling.
- **(v) Milk souring — CHEMICAL.** Bacteria convert lactose into lactic acid — a new substance with a sour taste and a different smell. The change cannot be reversed.

**Step 2 — the mass calculation (vi)**
- The reaction is: iron + sulfur → iron(II) sulfide.
- By the **law of conservation of mass**, the total mass of the products equals the total mass of the reactants.
- Mass of reactants = 5.6 g + 3.2 g = **8.8 g**.
- Therefore mass of iron(II) sulfide formed = **8.8 g**.

**Step 3 — the law illustrated**
- This is the **law of conservation of mass**, established by Lavoisier: matter is neither created nor destroyed in a chemical reaction; atoms are only rearranged.
- The tube must be **closed** — if the reaction were open and a gas escaped, the measured mass would appear to fall even though no matter had been destroyed.

**Answers:** (i) chemical, (ii) physical, (iii) chemical, (iv) physical, (v) chemical; (vi) 8.8 g, illustrating the law of conservation of mass.`,
          quiz: [
            {
              prompt: "A property observed without changing the identity of a substance is a…",
              options: ["physical property", "chemical property", "chemical change", "reaction"],
              correctIndex: 0,
              explanation: "Physical properties do not require a reaction to observe.",
            },
            {
              prompt: "Which of these is a chemical property?",
              options: ["flammability", "density", "melting point", "colour"],
              correctIndex: 0,
              explanation: "Flammability is only seen when the substance reacts.",
            },
            {
              prompt: "Which of these is a physical property?",
              options: ["boiling point", "reactivity with acid", "toxicity", "combustibility"],
              correctIndex: 0,
              explanation: "Boiling point is measured without forming new substances.",
            },
            {
              prompt: "A property that does not depend on the amount of matter is…",
              options: ["intensive", "extensive", "chemical", "variable"],
              correctIndex: 0,
              explanation: "Density and melting point are the same for any sample size.",
            },
            {
              prompt: "Which of these is an extensive property?",
              options: ["mass", "density", "melting point", "colour"],
              correctIndex: 0,
              explanation: "Mass depends on how much matter is present.",
            },
            {
              prompt: "In a physical change…",
              options: ["no new substance is formed", "a new substance is formed", "mass is destroyed", "atoms are created"],
              correctIndex: 0,
              explanation: "Only form, state or appearance changes.",
            },
            {
              prompt: "Which of these is a physical change?",
              options: ["melting candle wax", "burning wood", "rusting iron", "cooking an egg"],
              correctIndex: 0,
              explanation: "Melting changes state only.",
            },
            {
              prompt: "Which of these is a chemical change?",
              options: ["rusting of iron", "crushing a stone", "dissolving sugar", "boiling water"],
              correctIndex: 0,
              explanation: "Rusting forms a new substance, hydrated iron(III) oxide.",
            },
            {
              prompt: "Dissolving salt in water is a physical change because the salt…",
              options: ["can be recovered by evaporation", "reacts with the water", "changes into a new substance", "is destroyed"],
              correctIndex: 0,
              explanation: "No new substance forms and the change is reversible.",
            },
            {
              prompt: "Which is NOT evidence of a chemical change?",
              options: ["a change in shape", "formation of a precipitate", "evolution of a gas", "a permanent colour change"],
              correctIndex: 0,
              explanation: "Changing shape is physical.",
            },
            {
              prompt: "A reaction that gives out heat is described as…",
              options: ["exothermic", "endothermic", "physical", "reversible"],
              correctIndex: 0,
              explanation: "Exothermic reactions release heat to the surroundings.",
            },
            {
              prompt: "A reaction that absorbs heat is described as…",
              options: ["endothermic", "exothermic", "neutral", "physical"],
              correctIndex: 0,
              explanation: "Endothermic changes take heat in.",
            },
            {
              prompt: "An insoluble solid formed when two solutions are mixed is called a…",
              options: ["precipitate", "solvent", "solute", "residue"],
              correctIndex: 0,
              explanation: "Precipitate formation signals a chemical reaction.",
            },
            {
              prompt: "The law of conservation of mass states that in a chemical reaction, mass is…",
              options: ["neither created nor destroyed", "always increased", "always decreased", "converted to energy"],
              correctIndex: 0,
              explanation: "Total mass of products equals total mass of reactants.",
            },
            {
              prompt: "The law of conservation of mass was established by…",
              options: ["Lavoisier", "Dalton", "Mendeleev", "Bohr"],
              correctIndex: 0,
              explanation: "Lavoisier's careful weighing demonstrated it.",
            },
            {
              prompt: "Chemical equations must be balanced because of the law of…",
              options: ["conservation of mass", "definite proportions", "conservation of energy", "multiple proportions"],
              correctIndex: 0,
              explanation: "The same atoms must appear on both sides.",
            },
            {
              prompt: "4 g of hydrogen reacts completely with 32 g of oxygen. The mass of water formed is…",
              options: ["36 g", "32 g", "28 g", "4 g"],
              correctIndex: 0,
              explanation: "4 + 32 = 36 g, by conservation of mass.",
            },
            {
              prompt: "Wood appears to lose mass when it burns in the open because…",
              options: ["gases escape into the air", "mass is destroyed", "atoms disappear", "energy becomes mass"],
              correctIndex: 0,
              explanation: "Carbon dioxide and water vapour leave the system.",
            },
            {
              prompt: "Iron appears to gain mass when it rusts because…",
              options: ["oxygen from the air combines with it", "mass is created", "water is destroyed", "the iron expands"],
              correctIndex: 0,
              explanation: "Oxygen is added to the metal in forming rust.",
            },
            {
              prompt: "Physical changes are usually…",
              options: ["easily reversible", "impossible to reverse", "always exothermic", "always endothermic"],
              correctIndex: 0,
              explanation: "Melting, dissolving and boiling can be reversed.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Distinguish between a physical property and a chemical property, giving three examples of each.",
              answerKey:
                "A physical property can be observed or measured without changing the identity of the substance — examples (any three): colour, odour, state at room temperature, melting point, boiling point, density, solubility, hardness, malleability, ductility, electrical or thermal conductivity. A chemical property describes how a substance reacts to form new substances and can only be observed during a chemical change — examples (any three): flammability/combustibility, reactivity with acids, reactivity with water or oxygen, ability to rust or corrode, toxicity, thermal decomposition. Award 2 marks for each definition and 1 mark for each valid example.",
              marks: 8,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State four differences between a physical change and a chemical change, and give one example of each.",
              answerKey:
                "Differences (any four): no new substance is formed in a physical change, whereas one or more new substances form in a chemical change; a physical change is usually easily reversible, a chemical change usually is not; the composition is unchanged in a physical change but changed in a chemical change; a physical change involves a small energy change, a chemical change usually a large one. Example of a physical change: melting ice, dissolving sugar, boiling water, tearing paper. Example of a chemical change: burning charcoal, rusting iron, cooking food, souring of milk. Award 1 mark per difference and 1 for each valid example.",
              marks: 6,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "List four observations that suggest a chemical change has taken place, and explain why any one of them alone is not conclusive proof.",
              answerKey:
                "Observations (any four): evolution of a gas (bubbling/effervescence); formation of a precipitate; a permanent colour change; heat or light given out or absorbed; production of a new smell; the change being difficult to reverse. No single sign is conclusive because physical changes can produce the same appearance — boiling water gives off bubbles and absorbs heat, yet the steam is still water and no new substance has formed; mixing coloured substances changes the colour without any reaction. Confirmation requires evidence that a substance with new properties exists. Award 1 mark per observation and 2 for a correct explanation with an example.",
              marks: 6,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt: "Which pair correctly matches the property type?",
              options: ["density — intensive; mass — extensive", "density — extensive; mass — intensive", "both intensive", "both extensive"],
              correctIndex: 0,
              answerKey: "Density is the same for any size of sample (intensive); mass depends on the amount (extensive).",
              marks: 2,
            },
            {
              type: "ESSAY",
              prompt:
                "State the law of conservation of mass and explain, with examples, why burning wood in the open appears to lose mass while iron rusting appears to gain mass, even though the law holds in both cases.",
              answerKey:
                "A strong answer states the law: in a chemical reaction matter is neither created nor destroyed, so the total mass of the products equals the total mass of the reactants; it was established by Antoine Lavoisier through careful quantitative weighing, and it holds because atoms are merely rearranged in a reaction — the number of atoms of each element is the same before and after, which is why chemical equations must be balanced. It then explains that the apparent exceptions arise from working in an open system where matter can enter or leave. When wood burns in the open, the carbon in the wood combines with oxygen from the air to form carbon dioxide, and hydrogen forms water vapour; both gases escape into the atmosphere, so only the ash is left to weigh and the mass appears to fall — but if the wood and the air were enclosed in a sealed container and the whole system weighed, the mass would be unchanged. When iron rusts, oxygen and water from the surroundings combine with the metal to form hydrated iron(III) oxide, adding matter to the sample, so the rusted iron weighs more than the original metal — yet the mass gained by the iron is exactly the mass of oxygen and water lost from the surroundings. In both cases the total mass of the closed system is conserved. Award marks for the statement of the law, the atomic-rearrangement reason, and correct explanations of both examples with reference to open versus closed systems.",
              marks: 10,
            },
          ],
        },
        {
          slug: "separation-techniques-for-mixtures",
          title: "Standard Separation Techniques for Mixtures",
          objective:
            "By the end of the topic, learners should be able to select and describe the standard techniques for separating solid-solid, solid-liquid and liquid-liquid mixtures, and use melting point and boiling point as criteria of purity. (MoE Grade 10 Period I, Topic II, CONTENTS 3(a) and 3(b).)",
          estimatedMinutes: 180,
          notes: `## Introduction

- The components of a **mixture** are only physically combined, so each keeps its own properties.
- Every separation method exploits a **difference in a physical property** — size, solubility, boiling point, magnetism, density.
- **This topic:** choosing a method; solid-solid, solid-liquid and liquid-liquid separations; melting and boiling point as tests of purity.

## The principle of separation

- Identify **what differs** between the components, then pick the method that uses that difference.

| Difference used | Method |
|---|---|
| Particle size | sieving, filtration |
| Magnetism | magnetic separation |
| Solubility in a solvent | dissolving then filtering, crystallisation |
| Sublimation | sublimation |
| Boiling point | evaporation, simple distillation, fractional distillation |
| Density (immiscible liquids) | separating funnel, decantation |
| Rate of movement on a medium | chromatography |
| Density with spinning | centrifugation |

## Separating solid-solid mixtures

- **Sieving** — separates solids of **different particle sizes** (sand from gravel; flour from bran).
- **Magnetic separation** — separates a **magnetic** solid from a non-magnetic one (iron filings from sulfur or sand). Draw a magnet over the mixture.
- **Sublimation** — separates a solid that **sublimes** from one that does not (ammonium chloride from salt; iodine from sand). Heat gently; the vapour re-forms as crystals on a cool surface.
- **Dissolving and filtering (solvent extraction)** — where **one solid dissolves** in a solvent and the other does not (salt from sand): add water, stir, filter off the sand, then evaporate the filtrate to recover the salt.
- **Winnowing** — separates light material from heavy by air current (chaff from grain).
- **Hand-picking (sorting)** — for large, visibly different pieces (stones from rice).

## Separating solid-liquid mixtures

- **Filtration** — separates an **insoluble solid** from a liquid using filter paper. The solid trapped on the paper is the **residue**; the liquid that passes through is the **filtrate**. (Sand from water; a precipitate from a solution.)
- **Decantation** — carefully pouring off the liquid after the solid has settled; simple but less complete than filtration.
- **Centrifugation** — spinning the mixture at high speed so the denser solid collects at the bottom; used for very fine suspensions and in medical laboratories (blood).
- **Evaporation** — heating a solution to drive off the solvent and leave the **dissolved solid** behind. Used to recover salt from salt water. Suitable when the solid does not decompose on heating.
- **Crystallisation** — heating a solution until it is **saturated**, then allowing it to cool slowly so pure crystals form. Better than evaporation for substances that would decompose, and gives purer, well-formed crystals. The crystals are filtered off and dried between filter papers.
- **Simple distillation** — recovers the **solvent** as well as the solid: the solution is boiled, the vapour passes into a **condenser** where it cools back to a liquid, and the **distillate** is collected. Used to obtain pure water from sea water.

\`\`\`svg Filtration separating an insoluble solid from a liquid
<svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A funnel with filter paper holding back the residue while the filtrate collects in a beaker">
  <polygon points="60,20 160,20 118,74 102,74" fill="#f1f5f9" stroke="#334155" stroke-width="1.5"/>
  <polygon points="72,26 148,26 116,68 104,68" fill="none" stroke="#94a3b8" stroke-dasharray="3 2"/>
  <ellipse cx="110" cy="40" rx="26" ry="7" fill="#a8a29e"/>
  <text x="176" y="40" font-size="10" fill="#334155">residue</text>
  <line x1="140" y1="38" x2="170" y2="38" stroke="#334155"/>
  <rect x="106" y="74" width="8" height="24" fill="#f1f5f9" stroke="#334155" stroke-width="1.5"/>
  <line x1="110" y1="98" x2="110" y2="112" stroke="#60a5fa" stroke-width="2"/>
  <rect x="76" y="112" width="68" height="38" rx="3" fill="none" stroke="#334155" stroke-width="1.5"/>
  <rect x="78" y="128" width="64" height="21" fill="#bfdbfe"/>
  <text x="176" y="140" font-size="10" fill="#334155">filtrate</text>
  <line x1="146" y1="137" x2="170" y2="137" stroke="#334155"/>
</svg>
\`\`\`

## Separating liquid-liquid mixtures

- **Miscible liquids** mix completely (alcohol and water); **immiscible liquids** do not (oil and water).

- **Separating funnel** — for **immiscible** liquids. The mixture settles into two layers by **density**; the tap is opened to run off the lower layer, then closed as the boundary reaches it. (Oil and water; petrol and water.)
- **Simple distillation** — for a **miscible** pair whose boiling points differ widely.
- **Fractional distillation** — for **miscible** liquids with **close boiling points**. A **fractionating column** packed with glass beads or fitted with plates gives repeated vaporisation and condensation, so the liquid with the **lower boiling point** distils over first and is collected as a separate **fraction**.
  - Separating ethanol (78 °C) from water (100 °C): ethanol distils first.
  - Industrial uses: refining crude oil into petrol, kerosene, diesel and bitumen; separating liquid air into nitrogen and oxygen.
- **Chromatography** — separates the components of a **solution** (especially coloured ones — inks, dyes, plant pigments) by their different rates of movement through a medium such as paper. A spot of the mixture is placed on the paper above the level of the solvent; as the solvent rises, the more soluble and less strongly adsorbed components travel further, giving separate spots.

## Melting point and boiling point as criteria of purity

- A **pure substance** has a **sharp, fixed melting point** and a **sharp, fixed boiling point** at a given pressure.
- **Impurities:**
  - **lower** the melting point and make the solid melt over a **range** of temperature rather than sharply;
  - **raise** the boiling point and make the liquid boil over a **range**.
- Pure ice melts sharply at **0 °C**; pure water boils at **100 °C** at normal atmospheric pressure.
- Salt water freezes below 0 °C and boils above 100 °C — the everyday evidence for both effects.
- So measuring a melting or boiling point is a standard **test of purity**: sharp value = pure; range and shifted value = impure.

## Common errors to watch for

- **Filtering a solution to recover the dissolved solid** — filtration removes only **insoluble** solids; dissolved salt passes straight through and must be recovered by evaporation or crystallisation.
- **Mixing up residue and filtrate** — the **residue** stays on the paper, the **filtrate** passes through.
- **Using a separating funnel for miscible liquids** — it only works for liquids that form **two layers**.
- **Using simple distillation for close boiling points** — that needs **fractional** distillation.
- **Heating a solution to dryness when the solid decomposes** — use **crystallisation** instead.
- **Placing the chromatography spot below the solvent level** — the sample would wash off into the solvent.
- **Saying impurities raise the melting point** — they **lower** the melting point and **raise** the boiling point.
- **Expecting a pure substance to melt over a range** — a range indicates **impurity**.`,
          workedExample: `**Task.** A student is given a mixture of sand, common salt and iron filings, and separately a bottle containing a mixture of ethanol and water.
(i) Describe how to obtain each of the three solids separately, in order. (ii) State the property used at each stage. (iii) Describe how to separate the ethanol from the water. (iv) How would the student check that the water finally obtained is pure?

**Step 1 — remove the iron filings**
- Draw a **magnet** (wrapped in paper for easy removal) over the mixture repeatedly.
- The iron filings cling to the magnet; the sand and salt are left behind.
- **Property used:** iron is **magnetic**; sand and salt are not.

**Step 2 — separate the salt from the sand**
- Add water to the remaining mixture and stir well — the **salt dissolves**, the sand does not.
- **Filter** the mixture: the sand stays on the filter paper as the **residue**; the salt solution passes through as the **filtrate**.
- Wash the sand with a little distilled water and dry it in an oven.
- **Property used:** the difference in **solubility** in water, plus the **particle size** that lets the filter paper hold back the sand.

**Step 3 — recover the salt from the filtrate**
- Heat the salt solution in an evaporating dish to drive off the water (**evaporation**), or heat until saturated and allow it to cool slowly so crystals form (**crystallisation**), then filter and dry the crystals.
- **Property used:** salt is **non-volatile** while water is **volatile** — salt stays behind when the water boils away.
- To keep the water as well, use **simple distillation** instead: the steam is condensed and collected.

**Step 4 — separating ethanol from water (iii)**
- Ethanol and water are **miscible**, so a separating funnel cannot be used.
- Their boiling points are close (ethanol 78 °C, water 100 °C), so simple distillation is not efficient — use **fractional distillation**.
- Heat the mixture in a flask fitted with a **fractionating column** and a condenser. The vapour repeatedly condenses and re-vaporises up the column.
- **Ethanol**, with the lower boiling point, distils over **first** at about 78 °C and is collected; the water remains and can be collected later at 100 °C.
- **Property used:** the difference in **boiling points**.

**Step 5 — testing the purity of the water (iv)**
- Measure its **boiling point** and its **melting (freezing) point**.
- Pure water boils sharply at **100 °C** and freezes sharply at **0 °C** at normal atmospheric pressure.
- If it boils **above** 100 °C, or over a **range** of temperatures rather than at a fixed value, dissolved impurities are still present; likewise a freezing point below 0 °C indicates impurity.

**Answers:** (i)-(ii) magnetic separation for the iron (magnetism), dissolving and filtration for the sand (solubility and particle size), evaporation or crystallisation for the salt (volatility); (iii) fractional distillation, ethanol first at 78 °C; (iv) a sharp boiling point of 100 °C and freezing point of 0 °C confirm purity.`,
          quiz: [
            {
              prompt: "Separation methods work because the components of a mixture differ in their…",
              options: ["physical properties", "chemical formulae only", "colour only", "mass only"],
              correctIndex: 0,
              explanation: "Size, solubility, boiling point, density and magnetism are exploited.",
            },
            {
              prompt: "Iron filings can be separated from sulfur using a…",
              options: ["magnet", "filter paper", "separating funnel", "condenser"],
              correctIndex: 0,
              explanation: "Iron is magnetic; sulfur is not.",
            },
            {
              prompt: "Sand is separated from water by…",
              options: ["filtration", "evaporation", "distillation", "chromatography"],
              correctIndex: 0,
              explanation: "Sand is insoluble, so it is trapped by filter paper.",
            },
            {
              prompt: "In filtration, the solid left on the filter paper is called the…",
              options: ["residue", "filtrate", "distillate", "solute"],
              correctIndex: 0,
              explanation: "The liquid passing through is the filtrate.",
            },
            {
              prompt: "The liquid that passes through the filter paper is the…",
              options: ["filtrate", "residue", "precipitate", "solvent only"],
              correctIndex: 0,
              explanation: "Filtrate is what comes through.",
            },
            {
              prompt: "Salt is recovered from salt solution by…",
              options: ["evaporation", "filtration", "decantation", "sieving"],
              correctIndex: 0,
              explanation: "Boiling off the water leaves the dissolved salt.",
            },
            {
              prompt: "Pure water is obtained from sea water by…",
              options: ["simple distillation", "filtration", "sieving", "magnetic separation"],
              correctIndex: 0,
              explanation: "The vapour is condensed and collected as the distillate.",
            },
            {
              prompt: "Ammonium chloride can be separated from salt by…",
              options: ["sublimation", "filtration", "decantation", "chromatography"],
              correctIndex: 0,
              explanation: "Ammonium chloride sublimes; salt does not.",
            },
            {
              prompt: "Oil and water are separated using a…",
              options: ["separating funnel", "fractionating column", "filter paper", "magnet"],
              correctIndex: 0,
              explanation: "Immiscible liquids form layers by density.",
            },
            {
              prompt: "Liquids that do not mix are described as…",
              options: ["immiscible", "miscible", "soluble", "volatile"],
              correctIndex: 0,
              explanation: "Immiscible liquids form separate layers.",
            },
            {
              prompt: "Ethanol and water are best separated by…",
              options: ["fractional distillation", "filtration", "a separating funnel", "sieving"],
              correctIndex: 0,
              explanation: "They are miscible with close boiling points.",
            },
            {
              prompt: "In fractional distillation, the liquid collected first is the one with the…",
              options: ["lower boiling point", "higher boiling point", "greater density", "darker colour"],
              correctIndex: 0,
              explanation: "It vaporises most readily.",
            },
            {
              prompt: "Crude oil is separated into petrol, kerosene and diesel by…",
              options: ["fractional distillation", "filtration", "crystallisation", "sublimation"],
              correctIndex: 0,
              explanation: "The fractions differ in boiling range.",
            },
            {
              prompt: "The components of ink are separated by…",
              options: ["chromatography", "filtration", "decantation", "sieving"],
              correctIndex: 0,
              explanation: "Components travel at different rates on the paper.",
            },
            {
              prompt: "In paper chromatography, the spot of mixture must be placed…",
              options: ["above the solvent level", "below the solvent level", "in the solvent", "on the solvent surface"],
              correctIndex: 0,
              explanation: "Otherwise the sample washes off into the solvent.",
            },
            {
              prompt: "Separating solids of different particle size uses…",
              options: ["sieving", "distillation", "chromatography", "condensation"],
              correctIndex: 0,
              explanation: "A sieve retains the larger particles.",
            },
            {
              prompt: "Spinning a mixture at high speed to settle fine solids is…",
              options: ["centrifugation", "decantation", "filtration", "sublimation"],
              correctIndex: 0,
              explanation: "Centrifugation forces the denser solid to the bottom.",
            },
            {
              prompt: "A pure substance has a melting point that is…",
              options: ["sharp and fixed", "spread over a wide range", "always above 100 °C", "impossible to measure"],
              correctIndex: 0,
              explanation: "A sharp value is the mark of purity.",
            },
            {
              prompt: "An impurity in a solid will…",
              options: ["lower the melting point and widen the range", "raise the melting point", "have no effect", "make it sublime"],
              correctIndex: 0,
              explanation: "Impurities depress the melting point and blur the change.",
            },
            {
              prompt: "An impurity dissolved in a liquid will…",
              options: ["raise the boiling point", "lower the boiling point", "leave it unchanged", "prevent boiling"],
              correctIndex: 0,
              explanation: "Salt water boils above 100 °C.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Name the method you would use to separate each of the following, and state the property it depends on: (a) sand from water; (b) salt from salt solution; (c) oil from water; (d) iron filings from sulfur.",
              answerKey:
                "(a) Filtration — sand is insoluble and its particles are too large to pass through the filter paper. (b) Evaporation (or crystallisation) — salt is non-volatile while water is volatile, so the water boils away leaving the salt; distillation if the water is also wanted. (c) A separating funnel — oil and water are immiscible and form layers of different density. (d) Magnetic separation — iron is magnetic and sulfur is not. Award 1 mark for each method and 1 for each correct property.",
              marks: 8,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Describe how you would obtain pure water from sea water in the laboratory, naming the apparatus used.",
              answerKey:
                "Use simple distillation. Place the sea water in a round-bottomed (or distillation) flask fitted with a thermometer whose bulb is level with the side-arm, and add anti-bumping granules. Heat the flask; the water boils and the steam passes into a Liebig condenser through which cold water flows in at the lower end and out at the upper end (counter-current). The steam cools and condenses back to liquid water, which is collected in a beaker or conical flask as the distillate — this is pure water. The dissolved salts are non-volatile and remain in the flask. The thermometer should read a steady 100 °C while pure water distils. Award marks for the method, the named apparatus and the explanation that the salts are non-volatile.",
              marks: 6,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain why fractional distillation, rather than simple distillation, is used to separate ethanol from water, and state which liquid is collected first and why.",
              answerKey:
                "Ethanol (boiling point 78 °C) and water (100 °C) are miscible and their boiling points are relatively close, so in simple distillation the vapour would contain a substantial amount of water and the separation would be poor. A fractionating column packed with glass beads (or fitted with plates) provides a large surface on which the vapour repeatedly condenses and re-vaporises as it rises; each cycle enriches the vapour in the more volatile component, so a good separation is achieved. Ethanol is collected first because it has the lower boiling point and therefore vaporises more readily; the thermometer holds steady near 78 °C while it distils, rising towards 100 °C once the ethanol is exhausted. Award marks for the reason simple distillation fails, the role of the column, and the correct order with justification.",
              marks: 6,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt: "A solid melts over the range 51–58 °C instead of sharply at 60 °C. This shows that the solid is…",
              options: ["impure", "pure", "a gas", "an element"],
              correctIndex: 0,
              answerKey: "Impurities lower the melting point and spread it over a range.",
              marks: 2,
            },
            {
              type: "ESSAY",
              prompt:
                "A mixture contains sand, common salt and iron filings. Describe in detail how you would obtain each substance separately, and explain how melting point and boiling point can be used to test the purity of the products.",
              answerKey:
                "A strong answer gives the separation in a workable order with reasons. First, draw a magnet (ideally wrapped in paper so the filings can be removed easily) repeatedly over the dry mixture to attract the iron filings, leaving sand and salt — this uses the magnetic property of iron. Second, add water to the remaining solid and stir well so that the salt dissolves while the sand does not; filter the mixture, so the sand is retained on the filter paper as the residue while the salt solution passes through as the filtrate. Wash the sand with a little distilled water to remove traces of salt solution, then dry it in an oven or on a steam bath. Third, recover the salt from the filtrate either by evaporating the solution in an evaporating dish until the water has boiled away, or preferably by heating until the solution is saturated and then allowing it to cool slowly so that crystals form, filtering them off and drying them between filter papers — crystallisation gives purer, better-formed crystals; if the water is also to be recovered, simple distillation should be used instead of evaporation. On purity: a pure substance melts and boils at a sharp, fixed temperature at a given pressure, whereas impurities lower the melting point and spread it over a range, and raise the boiling point and spread it over a range. So the recovered salt can be checked by its melting point (a sharp value indicating purity) and any water recovered by distillation checked by boiling it — pure water boils steadily at 100 °C at normal atmospheric pressure and freezes at 0 °C, while a boiling point above 100 °C or a range of temperatures shows dissolved impurity. Award marks for the correct order of steps, correctly named techniques, the property exploited at each stage, practical detail such as washing and drying, and a correct account of both purity criteria.",
              marks: 12,
            },
          ],
        },
        {
          slug: "classification-of-mixtures",
          title: "Classification of Mixtures",
          objective:
            "By the end of the topic, learners should be able to classify matter into pure substances and mixtures, distinguish homogeneous from heterogeneous mixtures, describe solutions, suspensions and colloids, and compare mixtures with compounds. (MoE Grade 10 Period I, Topic II, CONTENTS 4 'Classification of mixtures'.)",
          estimatedMinutes: 150,
          notes: `## Introduction

- Sugar stirred into water disappears; sand stirred into water settles out.
- Both are mixtures, but they behave differently because of how evenly the particles are spread and how big they are.
- **This topic:** classifying matter; homogeneous and heterogeneous mixtures; solutions, suspensions and colloids; mixtures compared with compounds.

## Classification of matter

- **Matter** divides first into **pure substances** and **mixtures**.
- **Pure substance** — has a fixed composition and definite properties throughout. Divided into:
  - **Element** — one kind of atom only; cannot be broken down chemically. (Copper, oxygen, carbon.)
  - **Compound** — two or more elements chemically combined in a **fixed ratio**. (Water H₂O, common salt NaCl, carbon dioxide CO₂.)
- **Mixture** — two or more substances **physically** combined in **any proportion**, each keeping its own properties.

\`\`\`svg Classification of matter
<svg viewBox="0 0 330 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Matter divided into pure substances and mixtures, then into elements, compounds, homogeneous and heterogeneous">
  <rect x="128" y="6" width="74" height="24" rx="5" fill="#e0e7ff" stroke="#3730a3"/>
  <text x="165" y="22" font-size="11" text-anchor="middle" fill="#3730a3">MATTER</text>
  <line x1="145" y1="30" x2="80" y2="50" stroke="#64748b"/>
  <line x1="185" y1="30" x2="250" y2="50" stroke="#64748b"/>
  <rect x="30" y="50" width="100" height="24" rx="5" fill="#dcfce7" stroke="#166534"/>
  <text x="80" y="66" font-size="10" text-anchor="middle" fill="#166534">Pure substances</text>
  <rect x="200" y="50" width="100" height="24" rx="5" fill="#fee2e2" stroke="#991b1b"/>
  <text x="250" y="66" font-size="10" text-anchor="middle" fill="#991b1b">Mixtures</text>
  <line x1="58" y1="74" x2="40" y2="96" stroke="#64748b"/>
  <line x1="102" y1="74" x2="118" y2="96" stroke="#64748b"/>
  <rect x="4" y="96" width="70" height="22" rx="5" fill="#f0fdf4" stroke="#166534"/>
  <text x="39" y="111" font-size="10" text-anchor="middle" fill="#166534">Elements</text>
  <rect x="84" y="96" width="70" height="22" rx="5" fill="#f0fdf4" stroke="#166534"/>
  <text x="119" y="111" font-size="10" text-anchor="middle" fill="#166534">Compounds</text>
  <line x1="228" y1="74" x2="212" y2="96" stroke="#64748b"/>
  <line x1="272" y1="74" x2="290" y2="96" stroke="#64748b"/>
  <rect x="172" y="96" width="80" height="34" rx="5" fill="#fef2f2" stroke="#991b1b"/>
  <text x="212" y="110" font-size="9" text-anchor="middle" fill="#991b1b">Homogeneous</text>
  <text x="212" y="123" font-size="9" text-anchor="middle" fill="#991b1b">(solutions)</text>
  <rect x="258" y="96" width="80" height="34" rx="5" fill="#fef2f2" stroke="#991b1b"/>
  <text x="298" y="110" font-size="9" text-anchor="middle" fill="#991b1b">Heterogeneous</text>
  <text x="298" y="123" font-size="9" text-anchor="middle" fill="#991b1b">(suspensions)</text>
</svg>
\`\`\`

## Homogeneous mixtures

- **Homogeneous mixture** — the components are **uniformly mixed** throughout; the composition is the **same in every part** and the separate substances cannot be seen, even under a microscope.
- Also called **solutions**.
- Examples: salt solution, sugar solution, air, sea water, brass and other alloys, soft drinks, vinegar, petrol.

**Parts of a solution:**
- **Solute** — the substance that dissolves (salt).
- **Solvent** — the substance that does it dissolving, present in the greater amount (water).
- **Solution** = solute + solvent.
- **Aqueous solution** — one in which the solvent is water.
- **Solubility** — the maximum mass of a solute that dissolves in 100 g of a solvent at a stated temperature.
- **Saturated solution** — one that has dissolved all the solute it can hold at that temperature.

## Heterogeneous mixtures

- **Heterogeneous mixture** — the components are **not uniformly mixed**; the composition **varies** from place to place and the separate parts can usually be **seen**.
- Examples: sand and water, oil and water, soil, granite, a mixture of iron filings and sulfur, concrete, salad, muddy water.

## Suspensions and colloids

| | Solution | Colloid | Suspension |
|---|---|---|---|
| Particle size | very small (< 1 nm) | intermediate (1–1000 nm) | large (> 1000 nm) |
| Appearance | clear, transparent | often cloudy | cloudy, murky |
| Type | homogeneous | borderline | heterogeneous |
| Settles on standing | no | no | yes |
| Separated by filtering | no | no | yes |
| Tyndall effect (scatters light) | no | yes | yes |
| Examples | salt water, air | milk, fog, smoke, paint, jelly | muddy water, chalk in water, flour in water |

- **Suspension** — a heterogeneous mixture in which solid particles are held temporarily in a liquid; they **settle out** on standing and can be **filtered off**.
- **Colloid** — particles intermediate in size, spread through another substance; they do **not settle** and cannot be filtered, but they **scatter light**.
- **Tyndall effect** — the scattering of a beam of light by colloid particles, making the beam visible (sunlight through mist, a torch beam in dusty air). It is used to tell a colloid from a true solution.
- **Emulsion** — a colloid of one liquid dispersed in another (milk, mayonnaise); an **emulsifier** keeps the two from separating.

## Mixtures compared with compounds

| Mixture | Compound |
|---|---|
| Components **physically** combined | Elements **chemically** combined |
| Composition **varies** — any proportion | **Fixed** composition by mass |
| Components keep their **own properties** | Properties are **entirely new** |
| Separated by **physical** means | Separated only by **chemical** means |
| No **heat change** on forming | Heat usually given out or taken in |
| No new substance formed | A **new substance** is formed |

*Classic illustration:* a **mixture** of iron filings and sulfur — the iron can still be removed by a magnet, and the mixture can be made in any proportion. Heat them together and they react to form **iron(II) sulfide**, a compound: a black solid of fixed composition in which the iron no longer responds to a magnet.

## Common errors to watch for

- **Calling air a compound** — air is a **homogeneous mixture** of gases in variable proportions.
- **Calling every clear liquid a pure substance** — salt solution is clear but is a **mixture**.
- **Saying a solute disappears when it dissolves** — it is still there; the mass of the solution equals solute + solvent.
- **Confusing solute and solvent** — the **solvent** is the one present in the greater amount and does the dissolving.
- **Trying to filter a solution** — dissolved particles are far too small; only **suspensions** can be filtered.
- **Saying milk is a solution** — milk is a **colloid** (an emulsion); it shows the Tyndall effect.
- **Assuming a mixture has a fixed composition** — only **compounds** do.
- **Thinking components of a compound keep their properties** — sodium is a reactive metal and chlorine a poisonous gas, but sodium chloride is edible salt.`,
          workedExample: `**Task.** Classify each of the following and justify your answer: (i) sea water; (ii) muddy water; (iii) milk; (iv) carbon dioxide; (v) brass; (vi) a mixture of iron filings and sulfur.
Then (vii) explain how you would show experimentally that the iron-and-sulfur mixture is a mixture and not a compound, and what happens when it is heated.

**Step 1 — apply the tests**
- Is it one substance or more? If more → **mixture**. If one → element or compound.
- If a mixture: is the composition uniform throughout? Uniform → **homogeneous**; not uniform → **heterogeneous**.

**Step 2 — classify each**
- **(i) Sea water — homogeneous mixture (a solution).** Salts are dissolved uniformly in water; it is clear, does not settle, and cannot be filtered. The proportion of salt can vary.
- **(ii) Muddy water — heterogeneous mixture (a suspension).** The soil particles are large, make the water cloudy, settle out on standing and can be removed by filtration.
- **(iii) Milk — a colloid (an emulsion).** Fat droplets are dispersed through a watery liquid; the particles are intermediate in size, so the milk looks cloudy and shows the **Tyndall effect**, but it does not settle out and cannot be filtered.
- **(iv) Carbon dioxide — a pure substance, a compound.** Carbon and oxygen are chemically combined in the fixed ratio CO₂, and it has properties belonging to neither element alone.
- **(v) Brass — a homogeneous mixture (an alloy).** Copper and zinc are mixed uniformly, and the proportions can be varied to change the properties.
- **(vi) Iron filings and sulfur — a heterogeneous mixture.** The grey iron and yellow sulfur can be seen separately, and they can be mixed in any proportion.

**Step 3 — showing it is a mixture (vii)**
Three tests, each showing a property of a mixture:
1. **Appearance:** the grey iron filings and yellow sulfur are visible separately under a hand lens.
2. **Magnet:** draw a magnet over the mixture — the iron filings are attracted and removed, showing the iron keeps its own property.
3. **Solvent test:** add carbon disulfide (or observe with water) — the sulfur dissolves in carbon disulfide while the iron does not, so the two can be separated by **physical** means.
4. Any proportion of the two can be mixed — there is no fixed composition.

**Step 4 — heating the mixture**
- On strong heating, a **chemical reaction** occurs: iron + sulfur → **iron(II) sulfide** (FeS).
- The reaction is **exothermic** — it glows red once started and continues without further heating.
- The product is a **compound**: a single black solid of fixed composition; the iron is **no longer attracted by a magnet**, and the sulfur can no longer be dissolved out. The properties of both elements have been lost and replaced by new ones.

**Answers:** (i) homogeneous mixture/solution; (ii) heterogeneous mixture/suspension; (iii) colloid; (iv) compound; (v) homogeneous mixture/alloy; (vi) heterogeneous mixture; (vii) the magnet, the solvent and the visible separate particles all show it is a mixture, and heating converts it into the compound iron(II) sulfide.`,
          quiz: [
            {
              prompt: "Matter is first classified into pure substances and…",
              options: ["mixtures", "solutions only", "elements only", "colloids"],
              correctIndex: 0,
              explanation: "Pure substances and mixtures are the two main classes.",
            },
            {
              prompt: "A substance made of two or more elements chemically combined in a fixed ratio is a…",
              options: ["compound", "mixture", "element", "solution"],
              correctIndex: 0,
              explanation: "Compounds have a fixed composition.",
            },
            {
              prompt: "A mixture whose composition is uniform throughout is…",
              options: ["homogeneous", "heterogeneous", "a compound", "an element"],
              correctIndex: 0,
              explanation: "Homogeneous mixtures are also called solutions.",
            },
            {
              prompt: "Which of these is a homogeneous mixture?",
              options: ["salt solution", "muddy water", "oil and water", "sand and iron filings"],
              correctIndex: 0,
              explanation: "Dissolved salt is spread uniformly.",
            },
            {
              prompt: "Which of these is a heterogeneous mixture?",
              options: ["oil and water", "air", "brass", "sugar solution"],
              correctIndex: 0,
              explanation: "Oil and water form visible separate layers.",
            },
            {
              prompt: "Air is best described as a…",
              options: ["homogeneous mixture of gases", "compound", "element", "suspension"],
              correctIndex: 0,
              explanation: "The gases are uniformly mixed in variable proportions.",
            },
            {
              prompt: "In a salt solution, the salt is the…",
              options: ["solute", "solvent", "residue", "filtrate"],
              correctIndex: 0,
              explanation: "The solute is the substance that dissolves.",
            },
            {
              prompt: "The substance present in greater amount that does the dissolving is the…",
              options: ["solvent", "solute", "precipitate", "colloid"],
              correctIndex: 0,
              explanation: "Water is the most common solvent.",
            },
            {
              prompt: "A solution in which water is the solvent is described as…",
              options: ["aqueous", "saturated", "colloidal", "immiscible"],
              correctIndex: 0,
              explanation: "Aqueous means dissolved in water.",
            },
            {
              prompt: "A solution that has dissolved all the solute it can hold at a given temperature is…",
              options: ["saturated", "dilute", "colloidal", "heterogeneous"],
              correctIndex: 0,
              explanation: "No more solute will dissolve at that temperature.",
            },
            {
              prompt: "A mixture whose solid particles settle out on standing is a…",
              options: ["suspension", "solution", "compound", "element"],
              correctIndex: 0,
              explanation: "Suspension particles are large enough to settle.",
            },
            {
              prompt: "Milk is an example of a…",
              options: ["colloid", "true solution", "compound", "element"],
              correctIndex: 0,
              explanation: "Milk is an emulsion of fat droplets in water.",
            },
            {
              prompt: "The scattering of a light beam by colloid particles is called the…",
              options: ["Tyndall effect", "Brownian motion", "diffusion", "Boyle effect"],
              correctIndex: 0,
              explanation: "It makes a light beam visible in fog or milk.",
            },
            {
              prompt: "Which type of mixture can be separated by filtration?",
              options: ["a suspension", "a true solution", "an alloy", "air"],
              correctIndex: 0,
              explanation: "Only suspension particles are large enough to be trapped.",
            },
            {
              prompt: "The components of a mixture are combined…",
              options: ["physically, in any proportion", "chemically, in a fixed ratio", "only in equal masses", "permanently"],
              correctIndex: 0,
              explanation: "Mixtures have no fixed composition.",
            },
            {
              prompt: "The components of a mixture can be separated by…",
              options: ["physical means", "chemical means only", "no means", "electrolysis only"],
              correctIndex: 0,
              explanation: "Filtration, distillation and magnetism are physical methods.",
            },
            {
              prompt: "In a compound, the properties of the constituent elements are…",
              options: ["completely lost and replaced by new ones", "retained unchanged", "averaged", "doubled"],
              correctIndex: 0,
              explanation: "Sodium chloride resembles neither sodium nor chlorine.",
            },
            {
              prompt: "Brass, a mixture of copper and zinc, is an example of a…",
              options: ["homogeneous mixture (alloy)", "compound", "suspension", "element"],
              correctIndex: 0,
              explanation: "Alloys are solid solutions of metals.",
            },
            {
              prompt: "When iron filings and sulfur are heated together they form…",
              options: ["a compound, iron(II) sulfide", "a solution", "a suspension", "a colloid"],
              correctIndex: 0,
              explanation: "A chemical reaction produces a new substance.",
            },
            {
              prompt: "A colloid differs from a suspension in that a colloid…",
              options: ["does not settle on standing", "always settles quickly", "can be filtered easily", "contains no particles"],
              correctIndex: 0,
              explanation: "Colloid particles stay dispersed and pass through filter paper.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Draw or describe a classification of matter, showing how pure substances and mixtures are subdivided, with one example of each final category.",
              answerKey:
                "Matter divides into pure substances and mixtures. Pure substances divide into elements (one kind of atom, cannot be broken down chemically — e.g. copper, oxygen) and compounds (two or more elements chemically combined in a fixed ratio — e.g. water H₂O, sodium chloride). Mixtures divide into homogeneous mixtures or solutions (uniform composition throughout — e.g. salt solution, air, brass) and heterogeneous mixtures (composition varies, parts visible — e.g. sand and water, oil and water, soil). Award marks for the correct structure at each level and valid examples.",
              marks: 8,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State five differences between a mixture and a compound.",
              answerKey:
                "Any five of: components of a mixture are physically combined, while the elements of a compound are chemically combined; a mixture has a variable composition (any proportion) while a compound has a fixed composition by mass; the components of a mixture keep their own properties, while a compound has entirely new properties; a mixture can be separated by physical means, a compound only by chemical means; forming a mixture involves no appreciable heat change, whereas forming a compound usually gives out or takes in heat; no new substance is formed in a mixture, while a compound is a new substance. Award 1 mark per valid difference.",
              marks: 5,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Compare a solution, a colloid and a suspension in terms of particle size, appearance, settling on standing, and behaviour with a beam of light.",
              answerKey:
                "Solution — particles are very small (below about 1 nm); the mixture is clear and transparent; it does not settle on standing; it does not scatter light (no Tyndall effect) and cannot be filtered. Colloid — particles are intermediate (about 1–1000 nm); often cloudy or milky; does not settle on standing and passes through filter paper; scatters a light beam, showing the Tyndall effect (e.g. milk, fog). Suspension — particles are large (above about 1000 nm); cloudy or murky; settles out on standing; scatters light and can be separated by filtration (e.g. muddy water). Award marks for each correct comparison across the four criteria.",
              marks: 8,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt: "A liquid appears cloudy, does not settle after standing overnight, cannot be filtered, and scatters a torch beam. It is a…",
              options: ["colloid", "true solution", "suspension", "compound"],
              correctIndex: 0,
              answerKey: "Not settling and not filterable rule out a suspension; scattering light rules out a true solution — so it is a colloid.",
              marks: 2,
            },
            {
              type: "ESSAY",
              prompt:
                "Using the example of iron filings and sulfur, explain the difference between a mixture and a compound, describing the tests that show the material is a mixture and what happens when the two are heated together.",
              answerKey:
                "A strong answer explains that in a mixture the substances are only physically combined, in any proportion, and each keeps its own properties, so the mixture can be separated by physical means; in a compound the elements are chemically combined in a fixed ratio, the original properties are lost and replaced by entirely new ones, and separation requires chemical means. Applied to iron and sulfur: the mixture is grey and yellow with both components visible under a hand lens; it can be made in any proportion; drawing a magnet over it removes the iron filings, showing that the iron retains its magnetic property; the sulfur can be dissolved out with carbon disulfide while the iron is left behind; and no heat is given out on mixing. When the mixture is heated strongly, a chemical reaction occurs: iron + sulfur → iron(II) sulfide (FeS). The reaction is exothermic, glowing red and continuing without further heating once started. The product is a single black solid of fixed composition in which the iron is no longer attracted to a magnet and the sulfur can no longer be dissolved out — the properties of both elements have been replaced by the new properties of the compound. Award marks for the general distinction, at least two valid tests with their reasoning, the equation or word equation for the reaction, and the evidence that the product is a compound.",
              marks: 12,
            },
          ],
        },
      ],
    },
  ],
};
