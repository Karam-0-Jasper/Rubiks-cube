import type { SubjectContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry (Grades 10-12).
// Grade 10, Semester One, Period I: Topic I Introduction to Chemistry; Topic II
// Matter and its Properties. Atomic structure (P2), the periodic table (P3),
// bonding (P4) and stoichiometry (P5) follow in their own periods.
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
        "Period I of the MoE Grade 10 Chemistry syllabus. Learners meet the scientific method, the branches of chemistry, units and measurement, then study the states of matter, physical and chemical changes, and the techniques used to separate mixtures.",
      topics: [
        {
          slug: "introduction-to-chemistry",
          title: "Introduction to Chemistry and Measurement",
          objective:
            "By the end of the unit, learners should be able to define chemistry and its branches, describe the scientific method, use the SI units of measurement, express quantities in scientific notation to the correct number of significant figures, and carry out simple unit conversions.",
          estimatedMinutes: 160,
          notes: `## What chemistry is

**Chemistry** is the branch of science that studies the **composition, structure, properties and changes** of matter.

**Matter** is anything that has mass and occupies space.

## Branches of chemistry

- **Organic chemistry** — carbon compounds
- **Inorganic chemistry** — all other compounds
- **Physical chemistry** — the physical principles behind chemical behaviour (energy, rates, structure)
- **Analytical chemistry** — identifying and measuring what a substance contains
- **Biochemistry** — the chemistry of living things

## The scientific method

A systematic way of investigating a question:

1. **Observation** — notice something.
2. **Statement of the problem** — turn it into a question.
3. **Hypothesis** — a testable, tentative explanation.
4. **Experimentation** — test the hypothesis under controlled conditions.
5. **Collection and analysis of data** — record and examine results.
6. **Conclusion** — decide whether the data support the hypothesis.
7. **Reporting** — communicate the findings so others can repeat the work.

## Some contributors to chemistry

- **Antoine Lavoisier** — the law of conservation of mass; often called the father of modern chemistry.
- **John Dalton** — the atomic theory.
- **Dmitri Mendeleev** — the periodic table.

## Units of measurement — the SI system

| Quantity | SI unit | Symbol |
| --- | --- | --- |
| Length | metre | m |
| Mass | kilogram | kg |
| Time | second | s |
| Temperature | kelvin | K |
| Amount of substance | mole | mol |

Volume is derived (m³, but the litre and cm³ are common in the lab). Temperature in the lab is often measured in degrees Celsius; **K = °C + 273**.

## Scientific notation

A large or small number written as a number between 1 and 10 multiplied by a power of ten.

- 6 500 000 = 6.5 × 10⁶
- 0.000 042 = 4.2 × 10⁻⁵

This keeps very large and very small measurements manageable.

## Significant figures

The digits in a measurement that carry meaning. Give an answer to the same precision as the **least precise** measurement used. A result calculated from data measured to two significant figures should not be quoted to six.

## Precision and accuracy

- **Accuracy** — how close a measurement is to the true value.
- **Precision** — how close repeated measurements are to one another.

A set of readings can be precise (tightly grouped) yet inaccurate (all wrong in the same way, e.g. from a faulty balance). Good measurement needs both.

## Unit conversion

Convert step by step, one unit at a time.

- 1 m = 100 cm; 1 km = 1000 m
- 1 kg = 1000 g; 1 g = 1000 mg
- 1 litre = 1000 cm³ (mL)

## Laboratory safety

Chemistry is practical, and safety comes first: know the hazard signs, wear eye protection, never taste chemicals, add acid to water (not water to acid), and keep the bench clear. A safe laboratory is the condition for all experimental work.`,
          workedExample: `**Question:** A student measures the mass of a sample four times and gets 24.8 g, 24.9 g, 24.8 g and 24.9 g. The true mass is 25.0 g.

(a) Are the readings precise? Are they accurate?
(b) Express the mass 24 850 mg in grams and in scientific notation.
(c) Convert 2.5 litres to cm³.

**Solution**

**(a) Precision and accuracy.**
The four readings are tightly grouped (24.8–24.9 g), so they are **precise**. But they all fall short of the true value of 25.0 g by about 0.1–0.2 g, so they are **not fully accurate** — probably a small zero error on the balance. This is the classic case of *precise but not accurate*, and it points to a systematic fault in the instrument rather than random scatter.

**(b) 24 850 mg in grams and scientific notation.**
1 g = 1000 mg, so divide by 1000:
24 850 mg ÷ 1000 = **24.85 g**
In scientific notation: **2.485 × 10¹ g**.

**(c) 2.5 litres to cm³.**
1 litre = 1000 cm³, so multiply:
2.5 × 1000 = **2500 cm³**.

**The lesson:** precision and accuracy are different questions — one asks whether readings agree with *each other*, the other whether they agree with the *truth*. And every conversion is done one factor at a time, using the known relationship between the units.`,
          teachingTip:
            "Precision versus accuracy is the idea most worth securing, because learners use the words interchangeably. Draw a dartboard on the board: tight cluster off-centre is precise-but-inaccurate; scattered around the bullseye is accurate-but-imprecise; tight cluster on the bullseye is both. That single image fixes the distinction for good. For the scientific method, do not have learners recite the seven steps — take a genuine observation from their environment (why one water source tastes different, why a metal roof rusts faster near the coast) and build the investigation with them, insisting each time on a testable hypothesis. Drill unit conversion as a habit of one factor at a time, and make lab safety non-negotiable from the very first practical.",
          quiz: [
            { prompt: "Chemistry is best defined as the study of", options: ["living organisms", "the composition, properties and changes of matter", "the movement of planets", "electricity only"], correctIndex: 1, explanation: "Chemistry studies matter and the changes it undergoes." },
            { prompt: "Which branch of chemistry studies carbon compounds?", options: ["Inorganic", "Organic", "Analytical", "Physical"], correctIndex: 1, explanation: "Organic chemistry deals with carbon compounds." },
            { prompt: "The SI unit of mass is the", options: ["gram", "kilogram", "newton", "litre"], correctIndex: 1, explanation: "The kilogram is the SI base unit of mass." },
            { prompt: "A testable, tentative explanation is called a", options: ["conclusion", "hypothesis", "law", "theory"], correctIndex: 1, explanation: "A hypothesis is proposed before experimentation." },
            { prompt: "Write 0.00056 in scientific notation.", options: ["5.6 × 10⁴", "5.6 × 10⁻⁴", "56 × 10⁻³", "0.56 × 10⁻³"], correctIndex: 1, explanation: "Move the point four places right: 5.6 × 10⁻⁴." },
            { prompt: "Which scientist is called the father of modern chemistry?", options: ["Dalton", "Mendeleev", "Lavoisier", "Pasteur"], correctIndex: 2, explanation: "Lavoisier established the law of conservation of mass." },
            { prompt: "Accuracy refers to how close a measurement is to", options: ["other measurements", "the true value", "zero", "the average"], correctIndex: 1, explanation: "Accuracy compares a reading with the true value." },
            { prompt: "Precision refers to how close repeated measurements are to", options: ["the true value", "one another", "zero", "the SI unit"], correctIndex: 1, explanation: "Precision is the agreement among repeated readings." },
            { prompt: "Convert 3 kg to grams.", options: ["300 g", "3000 g", "30 g", "0.003 g"], correctIndex: 1, explanation: "1 kg = 1000 g, so 3 kg = 3000 g." },
            { prompt: "Which is the SI unit of amount of substance?", options: ["kilogram", "mole", "litre", "kelvin"], correctIndex: 1, explanation: "The mole measures amount of substance." },
            { prompt: "1 litre is equal to", options: ["10 cm³", "100 cm³", "1000 cm³", "10 000 cm³"], correctIndex: 2, explanation: "1 litre = 1000 cm³ (mL)." },
            { prompt: "Write 7 200 000 in scientific notation.", options: ["7.2 × 10⁶", "72 × 10⁵", "7.2 × 10⁻⁶", "0.72 × 10⁷"], correctIndex: 0, explanation: "A number between 1 and 10 times a power of ten: 7.2 × 10⁶." },
            { prompt: "A balance always reads 0.2 g too high. Its readings are", options: ["accurate but not precise", "precise but not accurate", "both accurate and precise", "neither"], correctIndex: 1, explanation: "Consistent readings (precise) that are all wrong the same way (inaccurate)." },
            { prompt: "Convert 25 °C to kelvin.", options: ["248 K", "298 K", "273 K", "25 K"], correctIndex: 1, explanation: "K = °C + 273 = 25 + 273 = 298 K." },
            { prompt: "The first step of the scientific method is", options: ["conclusion", "observation", "reporting", "experimentation"], correctIndex: 1, explanation: "Investigation begins with an observation." },
            { prompt: "Which branch of chemistry identifies and measures the composition of substances?", options: ["Organic", "Analytical", "Biochemistry", "Physical"], correctIndex: 1, explanation: "Analytical chemistry determines what and how much a sample contains." },
            { prompt: "How many milligrams are in 2 grams?", options: ["20 mg", "200 mg", "2000 mg", "0.002 mg"], correctIndex: 2, explanation: "1 g = 1000 mg, so 2 g = 2000 mg." },
            { prompt: "Significant figures in an answer should match the precision of the", options: ["most precise measurement", "least precise measurement", "largest number", "calculator display"], correctIndex: 1, explanation: "An answer is only as precise as the least precise data used." },
            { prompt: "When diluting, the safe rule is to add", options: ["water to acid", "acid to water", "acid to acid", "either way"], correctIndex: 1, explanation: "Add acid to water to control the heat released safely." },
            { prompt: "John Dalton is best known for", options: ["the periodic table", "the atomic theory", "conservation of mass", "germ theory"], correctIndex: 1, explanation: "Dalton proposed the atomic theory of matter." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "State the steps of the scientific method in order.", answerKey: "Observation; statement of the problem; hypothesis; experimentation; collection and analysis of data; conclusion; reporting. Award 1 mark per step correctly placed.", marks: 7 },
            { type: "SHORT_ANSWER", prompt: "Express in scientific notation: (a) 45 000 000, (b) 0.00032. Then convert 4.5 litres to cm³.", answerKey: "(a) 4.5 × 10⁷. (b) 3.2 × 10⁻⁴. Conversion: 4.5 × 1000 = 4500 cm³. Award 2 marks each for the two notations and 3 marks for the conversion.", marks: 7 },
            { type: "MULTIPLE_CHOICE", prompt: "Four readings of a length are 12.1, 12.1, 12.2 and 12.1 cm; the true length is 13.0 cm. The readings are best described as", options: ["accurate and precise", "precise but not accurate", "accurate but not precise", "neither accurate nor precise"], correctIndex: 1, answerKey: "The readings agree closely with each other (precise) but are far from the true 13.0 cm (inaccurate). Option B.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Explain the difference between accuracy and precision, and describe a set of results that is precise but not accurate.", answerKey: "Accuracy is closeness to the true value; precision is closeness of repeated readings to one another. A precise-but-inaccurate set is tightly grouped but consistently off the true value, e.g. four masses of 24.8–24.9 g when the true mass is 25.0 g, usually caused by a systematic instrument error such as a zero error. Award 3 marks for each definition and 3 for a valid example.", marks: 9 },
            { type: "ESSAY", prompt: "A community suspects that water from a hand-dug well is making people ill, while water from the borehole is safe. Design an investigation using the scientific method. State your hypothesis, outline your procedure, and explain how you would measure and record your results and reach a conclusion.", answerKey: "Hypothesis: water from the well contains a higher concentration of harmful microbes/contaminants than water from the borehole, 3 marks. Procedure: collect equal, sterile samples from both sources at the same time, test each (laboratory microbial count, or monitored comparison of illness among users), keeping other factors constant, 5 marks. Measurement and recording: use consistent units and methods, take repeated readings for precision, tabulate results, 4 marks. Conclusion: compare the data against the hypothesis and state whether it is supported, noting the need to repeat for reliability, 4 marks. Credit learners who note ethical limits on deliberately exposing people and adapt to observation, up to 2 bonus marks within the total. A learner without a testable hypothesis should not exceed 8.", marks: 15 },
          ],
        },
        {
          slug: "matter-and-its-properties",
          title: "Matter and Its Properties",
          objective:
            "By the end of the unit, learners should be able to describe the three states of matter and the changes between them, distinguish physical from chemical changes, classify matter as elements, compounds and mixtures, and choose appropriate techniques to separate mixtures.",
          estimatedMinutes: 160,
          notes: `## The three states of matter

All matter is made of tiny particles. The state depends on how much energy the particles have and how strongly they attract one another.

- **Solid** — particles closely packed in a fixed, regular arrangement; strong forces; vibrate in place. **Definite shape and volume; not compressible.**
- **Liquid** — particles close but not fixed; can slide past one another. **Definite volume; takes the shape of its container.**
- **Gas** — particles far apart, in rapid random motion; negligible forces. **No definite shape or volume; highly compressible.**

\`\`\`svg Particle arrangement in solids, liquids and gases.
<svg viewBox="0 0 340 130" role="img" aria-label="Particle diagrams of a solid, a liquid and a gas">
  <g fill="currentColor">
    <rect x="10" y="15" width="90" height="90" fill="none" stroke="currentColor"/>
    <circle cx="28" cy="33" r="6"/><circle cx="46" cy="33" r="6"/><circle cx="64" cy="33" r="6"/><circle cx="82" cy="33" r="6"/>
    <circle cx="28" cy="55" r="6"/><circle cx="46" cy="55" r="6"/><circle cx="64" cy="55" r="6"/><circle cx="82" cy="55" r="6"/>
    <circle cx="28" cy="77" r="6"/><circle cx="46" cy="77" r="6"/><circle cx="64" cy="77" r="6"/><circle cx="82" cy="77" r="6"/>
    <rect x="125" y="15" width="90" height="90" fill="none" stroke="currentColor"/>
    <circle cx="142" cy="40" r="6"/><circle cx="162" cy="35" r="6"/><circle cx="184" cy="45" r="6"/><circle cx="200" cy="36" r="6"/>
    <circle cx="150" cy="62" r="6"/><circle cx="176" cy="60" r="6"/><circle cx="198" cy="66" r="6"/>
    <circle cx="140" cy="85" r="6"/><circle cx="166" cy="84" r="6"/><circle cx="190" cy="88" r="6"/>
    <rect x="240" y="15" width="90" height="90" fill="none" stroke="currentColor"/>
    <circle cx="255" cy="30" r="6"/><circle cx="300" cy="40" r="6"/><circle cx="275" cy="60" r="6"/><circle cx="315" cy="75" r="6"/><circle cx="252" cy="85" r="6"/><circle cx="290" cy="92" r="6"/>
  </g>
  <g font-size="11" fill="currentColor" text-anchor="middle">
    <text x="55" y="122">Solid</text><text x="170" y="122">Liquid</text><text x="285" y="122">Gas</text>
  </g>
</svg>
\`\`\`

## Changes of state

- **Melting** — solid → liquid
- **Freezing (solidification)** — liquid → solid
- **Evaporation / boiling** — liquid → gas
- **Condensation** — gas → liquid
- **Sublimation** — solid → gas directly (e.g. iodine, ammonium chloride, solid carbon dioxide)

Heat supplied during a change of state does not raise the temperature; it overcomes the forces between particles. This is **latent heat**.

## Physical and chemical changes

| | Physical change | Chemical change |
| --- | --- | --- |
| New substance | None formed | New substance formed |
| Reversibility | Usually easily reversed | Usually hard to reverse |
| Example | Melting ice, dissolving salt | Burning wood, rusting iron |

Mass is conserved in both.

## Classifying matter

- **Element** — a pure substance of one kind of atom; cannot be split chemically. *Iron, oxygen, gold.*
- **Compound** — two or more elements chemically combined in a fixed ratio. *Water, sodium chloride, carbon dioxide.*
- **Mixture** — substances physically together in any proportion; components keep their properties and can be separated physically. *Air, sea water, soil.*

## Separation techniques

Choose the method by the difference in properties between the components.

- **Filtration** — insoluble solid from a liquid (sand from water).
- **Evaporation / crystallisation** — dissolved solid from its solution (salt from brine).
- **Simple distillation** — a solvent from a solution (pure water from sea water); uses the difference in **boiling point**.
- **Fractional distillation** — miscible liquids of different boiling points (liquid–liquid).
- **Chromatography** — dissolved substances of different solubilities (separating dyes).
- **Magnetic separation** — magnetic from non-magnetic solids (iron filings from sand): a **solid–solid** method.
- **Decantation** — pouring off a liquid from a settled solid.

The syllabus groups these by the kind of mixture: **solid–solid, solid–liquid, and liquid–liquid**.`,
          workedExample: `**Question:** A learner is given a mixture of iron filings, common salt and sand. Describe how to recover each component separately, and classify the original mixture and each recovered substance.

**Solution**

*Step 1 — remove the iron filings first.*
Pass a **magnet** over the mixture. Iron is magnetic; salt and sand are not, so the filings alone are lifted clear. (This must come first — once water is added, separating iron becomes far harder.)

*Step 2 — separate salt from sand.*
Add water and stir. **Salt dissolves; sand does not.**

*Step 3 — recover the sand.*
**Filter** the mixture. Sand stays on the filter paper as residue; the salt solution passes through as filtrate. Wash and dry the sand.

*Step 4 — recover the salt.*
**Evaporate** the filtrate. The water leaves as vapour and solid salt remains (crystallisation if cooled slowly).

*Step 5 — classify.*
- Original: a **mixture** — no fixed ratio, components keep their properties, separable physically.
- Iron filings: an **element** (Fe).
- Salt (sodium chloride): a **compound** — sodium and chlorine combined in a fixed ratio.
- Sand (silicon dioxide): a **compound** — silicon and oxygen combined in a fixed ratio.

**The lesson:** the order matters — always ask what each step makes impossible later. Magnetic separation is a *dry* solid–solid method and must precede dissolving, filtration handles the *solid–liquid* stage, and evaporation recovers the dissolved solid.`,
          teachingTip:
            "The salt–sand–iron separation costs nothing and teaches classification, technique choice and ordering all at once — do it as a real practical and have learners plan the order themselves before touching anything. The point to protect is that the sequence is not arbitrary: ask 'what would adding water first make difficult?' and let them discover why the magnet comes first. For states of matter, have learners act out the particles — packed and vibrating, sliding past one another, moving freely across the room — then ask what you must give them to move between states; they will say energy, and latent heat then has somewhere to attach. Keep the element/compound/mixture distinction tied to physical examples they can name from their own environment.",
          quiz: [
            { prompt: "In which state are particles closely packed in a fixed arrangement?", options: ["Solid", "Liquid", "Gas", "All three"], correctIndex: 0, explanation: "Solids have strong forces holding particles vibrating in place." },
            { prompt: "The change from a solid directly to a gas is called", options: ["melting", "condensation", "sublimation", "evaporation"], correctIndex: 2, explanation: "Iodine and ammonium chloride sublime without forming a liquid." },
            { prompt: "Which of these is a chemical change?", options: ["Melting ice", "Dissolving salt", "Burning wood", "Boiling water"], correctIndex: 2, explanation: "Burning forms new substances and is hard to reverse." },
            { prompt: "Which is a compound?", options: ["Air", "Sea water", "Water", "Soil"], correctIndex: 2, explanation: "Water is hydrogen and oxygen chemically combined in a fixed ratio." },
            { prompt: "A key feature of a mixture is that its components", options: ["are in a fixed ratio", "keep their own properties", "can only be separated chemically", "are always solid"], correctIndex: 1, explanation: "Components of a mixture are not chemically combined and keep their identities." },
            { prompt: "Sand can be separated from salt solution by", options: ["distillation", "filtration", "chromatography", "sublimation"], correctIndex: 1, explanation: "Insoluble sand is retained as residue while the solution passes through." },
            { prompt: "Which technique separates two miscible liquids with different boiling points?", options: ["Filtration", "Fractional distillation", "Magnetic separation", "Decantation"], correctIndex: 1, explanation: "A fractionating column separates liquids by boiling point." },
            { prompt: "Which is an element?", options: ["Sodium chloride", "Carbon dioxide", "Copper", "Bronze"], correctIndex: 2, explanation: "Copper is made of one kind of atom and cannot be chemically simplified." },
            { prompt: "During melting, the temperature of a pure solid", options: ["rises steadily", "stays constant until melting is complete", "falls", "rises then falls"], correctIndex: 1, explanation: "The heat supplied is latent heat overcoming forces, not raising temperature." },
            { prompt: "Iron filings can be separated from sand by", options: ["distillation", "a magnet", "chromatography", "evaporation"], correctIndex: 1, explanation: "Iron is magnetic and sand is not — a solid–solid separation." },
            { prompt: "Which state of matter is highly compressible?", options: ["Solid", "Liquid", "Gas", "None"], correctIndex: 2, explanation: "Gas particles are far apart, leaving space to compress." },
            { prompt: "Salt is recovered from brine (salt water) by", options: ["filtration", "evaporation/crystallisation", "magnetic separation", "decantation"], correctIndex: 1, explanation: "Evaporating the water leaves the dissolved salt behind." },
            { prompt: "Which change is physical?", options: ["Rusting of iron", "Burning of paper", "Melting of candle wax", "Souring of milk"], correctIndex: 2, explanation: "Melting forms no new substance and is easily reversed." },
            { prompt: "Pure water can be obtained from sea water by", options: ["filtration", "simple distillation", "magnetic separation", "chromatography"], correctIndex: 1, explanation: "Distillation boils off and re-condenses the water, leaving salts behind." },
            { prompt: "The technique used to separate the coloured substances in an ink is", options: ["distillation", "chromatography", "filtration", "decantation"], correctIndex: 1, explanation: "Chromatography separates dissolved substances by their solubility." },
            { prompt: "Which statement about a chemical change is correct?", options: ["No new substance is formed", "It is always easy to reverse", "A new substance with different properties is formed", "Mass is lost"], correctIndex: 2, explanation: "Chemical changes form new substances; mass is still conserved." },
            { prompt: "Substances that sublime include", options: ["water and salt", "iodine and ammonium chloride", "sand and iron", "copper and gold"], correctIndex: 1, explanation: "These change directly from solid to gas on heating." },
            { prompt: "A gas has", options: ["definite shape and volume", "definite volume only", "no definite shape or volume", "definite shape only"], correctIndex: 2, explanation: "Gas particles move freely, filling any container." },
            { prompt: "Which mixture type does magnetic separation handle?", options: ["Solid–solid", "Liquid–liquid", "Gas–gas", "Solid–gas"], correctIndex: 0, explanation: "It separates a magnetic solid from a non-magnetic solid." },
            { prompt: "When separating salt, sand and iron, which step comes first?", options: ["Add water", "Filter", "Use a magnet", "Evaporate"], correctIndex: 2, explanation: "Remove the iron with a magnet before adding water, or it becomes hard to recover." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Using the particle model, explain why a gas is highly compressible while a solid is not.", answerKey: "In a gas the particles are far apart with large spaces and negligible forces, so pressure pushes them closer and the volume falls markedly. In a solid the particles are already in contact in a fixed close-packed arrangement with strong forces and almost no space to remove, so it is effectively incompressible. Award 4 marks for the gas explanation and 4 for the solid, requiring reference to particle spacing.", marks: 8 },
            { type: "SHORT_ANSWER", prompt: "Give four differences between a compound and a mixture.", answerKey: "Chemically combined versus physically together; fixed ratio versus any proportion; properties differ from constituents versus constituents keep their properties; separated by chemical means versus by physical means. Award 2 marks per complete two-sided difference.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "Which pair correctly matches a mixture to the best separation technique?", options: ["Sand and water — distillation", "Salt and water — filtration", "Iron and sand — magnetic separation", "Two miscible liquids — decantation"], correctIndex: 2, answerKey: "Iron (magnetic) is separated from sand (non-magnetic) with a magnet. The others are mismatched: sand/water uses filtration, salt/water uses evaporation, miscible liquids use fractional distillation. Option C.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Describe how you would obtain pure water from a sample of muddy, salty water, naming the techniques used and the property each relies on.", answerKey: "First filter to remove the insoluble mud (relies on particle size — mud is retained, solution passes). Then distil the filtrate: heat the salt solution so the water boils at 100 °C, and condense the vapour to collect pure water, leaving the dissolved salts behind (relies on the difference in boiling point). Award 3 marks for filtration with its principle, 4 for distillation with its principle, 2 for correct sequence.", marks: 9 },
            { type: "ESSAY", prompt: "A sample contains ammonium chloride, common salt, sand and iron filings. Describe in full how you would separate all four, justifying the order of your steps.", answerKey: "1. Magnetic separation first to remove iron filings, justified because later addition of water would make this difficult, 5 marks. 2. Gentle heating to sublime the ammonium chloride, which turns to gas and re-solidifies on a cool surface while the others do not, 5 marks. 3. Add water and filter to separate insoluble sand (residue) from salt solution (filtrate), 5 marks. 4. Evaporate/crystallise the filtrate to recover the salt, 4 marks. 5. Explicit justification of the ordering — dry physical methods before wet ones, sublimation before dissolving, 6 marks. Deduct up to 3 marks where steps are correct but sequenced so as to make a later step impossible.", marks: 25 },
          ],
        },
      ],
    },
  ],
};
