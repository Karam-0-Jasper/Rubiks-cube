import type { SubjectContent } from "@/content/types";

export const biology: SubjectContent = {
  slug: "biology",
  name: "Biology",
  shortName: "Biology",
  description:
    "The scientific method, cell structure and function, cell division, and the classification of living things.",
  accent: "emerald",
  sortOrder: 3,
  teacherCode: "BIO-10-6135",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "The Cell and the Organisation of Life",
      summary:
        "Learners establish how biologists work, then move from the cell as the unit of life through cell division to the classification of the living world.",
      topics: [
        {
          slug: "introduction-to-biology",
          title: "Introduction to Biology and the Scientific Method",
          objective:
            "By the end of the lesson, learners should be able to define biology and its branches, list the characteristics of living things, and describe the steps of the scientific method with an example.",
          estimatedMinutes: 80,
          notes: `## What biology is

**Biology** is the scientific study of living organisms and their interactions with one another and with their environment. The word comes from the Greek *bios* (life) and *logos* (study).

## Branches of biology

- **Botany** — the study of plants
- **Zoology** — the study of animals
- **Microbiology** — the study of micro-organisms
- **Genetics** — the study of heredity and variation
- **Ecology** — the study of organisms in their environment
- **Anatomy** — the study of internal structure
- **Physiology** — the study of how living parts function
- **Cytology** — the study of cells
- **Taxonomy** — the classification and naming of organisms

## Characteristics of living things

Remember them as **MRS GREN**:

- **M**ovement — living things move all or part of themselves
- **R**espiration — releasing energy from food
- **S**ensitivity — responding to stimuli
- **G**rowth — a permanent increase in size and dry mass
- **R**eproduction — producing new individuals of the same kind
- **E**xcretion — removing metabolic waste
- **N**utrition — taking in and using materials for energy and growth

An object must show **all** of these to be classed as living. A motor car moves and uses fuel, but it does not grow, reproduce or respond, so it is not alive.

## Why biology matters in Liberia

Biology underpins agriculture, public health and the management of the country's forests and fisheries. Understanding disease transmission, soil fertility and reproduction in crops and livestock has direct consequences for food security and for the control of illnesses such as malaria, cholera and Lassa fever.

## The scientific method

A systematic procedure for investigating a question.

1. **Observation** — notice something in the natural world.
2. **Statement of the problem** — turn the observation into a question.
3. **Hypothesis** — a testable, tentative explanation.
4. **Experimentation** — test the hypothesis under controlled conditions.
5. **Collection and analysis of data** — record results accurately.
6. **Conclusion** — decide whether the data support the hypothesis.
7. **Reporting** — communicate the findings so others may repeat the work.

## Variables in an experiment

- **Independent variable** — the one you deliberately change
- **Dependent variable** — the one you measure
- **Controlled variables** — everything else, held constant

The **control experiment** is a set-up identical in every way except that the independent variable is absent. Without a control you cannot tell whether your change caused the result.`,
          workedExample: `**Question:** A farmer in Lofa County notices that maize growing near a cattle pen is taller than maize elsewhere in the field. Design an investigation using the scientific method.

**Solution**

*Step 1 — Observation.*
Maize plants growing close to the cattle pen are taller and greener than those farther away.

*Step 2 — Statement of the problem.*
Does cattle manure increase the growth of maize plants?

*Step 3 — Hypothesis.*
Maize plants supplied with cattle manure will grow taller than maize plants grown without manure.

Note that the hypothesis is **testable** and predicts a specific, measurable outcome.

*Step 4 — Experimentation.*

- Prepare twenty pots with the same soil, the same volume, and maize seeds of the same variety.
- **Experimental group:** ten pots, each receiving 200 g of cattle manure.
- **Control group:** ten pots, receiving no manure but identical in every other respect.
- Give all twenty pots the same amount of water and the same exposure to sunlight.

*Identify the variables:*

- Independent: presence of manure
- Dependent: height of the maize plants
- Controlled: soil type, pot size, seed variety, water, light

*Step 5 — Data collection.*
Measure the height of every plant in centimetres each week for six weeks. Record in a table and calculate the mean height of each group.

*Step 6 — Conclusion.*
If the manured group is significantly taller, the data support the hypothesis. If both groups grow equally, the hypothesis is not supported and the difference observed in the field must have another cause.

*Step 7 — Reporting.*
Write up the method, results and conclusion so another farmer can repeat the test.

**Why the control matters:** without the ten unmanured pots, a good harvest in the manured pots might simply reflect good rainfall that season. The control isolates the effect of the manure.`,
          teachingTip:
            "MRS GREN is easy to chant and easy to misapply, so test it immediately against hard cases. Ask the class whether a seed is alive, whether a virus is alive, and whether fire is alive — fire moves, grows, consumes fuel and produces waste, yet it is not alive. Arguing these three cases teaches learners that the criteria must all be met, which is the actual point of the list. For the scientific method, avoid teaching it as seven words to recite. Take a genuine local observation from the learners themselves — why one water pump serves a community better than another, why cassava does better on one plot — and build the investigation together on the board, insisting each time that they name the control. Learners forget the steps; they remember having designed something.",
          quiz: [
            {
              prompt: "Which branch of biology deals with the study of plants?",
              options: ["Zoology", "Botany", "Cytology", "Ecology"],
              correctIndex: 1,
              explanation: "Botany is the study of plants; zoology deals with animals.",
            },
            {
              prompt: "In MRS GREN, what does the letter E stand for?",
              options: ["Energy", "Evolution", "Excretion", "Enzymes"],
              correctIndex: 2,
              explanation:
                "Excretion is the removal of metabolic waste produced by the organism.",
            },
            {
              prompt: "A testable, tentative explanation for an observation is called",
              options: ["A conclusion", "A hypothesis", "A theory", "A law"],
              correctIndex: 1,
              explanation:
                "A hypothesis is proposed before experimentation and must be capable of being tested.",
            },
            {
              prompt: "In an experiment, the variable that is deliberately changed is the",
              options: [
                "Dependent variable",
                "Controlled variable",
                "Independent variable",
                "Constant",
              ],
              correctIndex: 2,
              explanation:
                "The independent variable is manipulated to see what effect it has on the dependent variable.",
            },
            {
              prompt: "The purpose of a control experiment is to",
              options: [
                "make the experiment take longer",
                "provide a comparison so the effect of the variable can be judged",
                "increase the number of results",
                "prove the hypothesis correct",
              ],
              correctIndex: 1,
              explanation:
                "Without a control you cannot attribute the observed result to the variable you changed.",
            },
            {
              prompt: "Which of the following is NOT a characteristic of living things?",
              options: ["Reproduction", "Sensitivity", "Combustion", "Nutrition"],
              correctIndex: 2,
              explanation:
                "Combustion is burning, a chemical process not confined to living organisms.",
            },
            {
              prompt: "The study of heredity and variation is called",
              options: ["Genetics", "Anatomy", "Taxonomy", "Physiology"],
              correctIndex: 0,
              explanation: "Genetics examines how characteristics pass from parents to offspring.",
            },
            {
              prompt: "Growth in living organisms is best defined as",
              options: [
                "any increase in size",
                "a permanent increase in size and dry mass",
                "swelling after absorbing water",
                "movement of the whole organism",
              ],
              correctIndex: 1,
              explanation:
                "A plant that swells with water has not grown; growth involves a lasting increase in dry mass.",
            },
            {
              prompt: "Which step of the scientific method comes immediately after experimentation?",
              options: [
                "Observation",
                "Hypothesis",
                "Collection and analysis of data",
                "Statement of the problem",
              ],
              correctIndex: 2,
              explanation:
                "Data are gathered and analysed before any conclusion can properly be drawn.",
            },
            {
              prompt: "Physiology is best described as the study of",
              options: [
                "internal structure",
                "how living parts function",
                "classification of organisms",
                "organisms in their environment",
              ],
              correctIndex: 1,
              explanation:
                "Anatomy deals with structure; physiology deals with function.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "List the seven characteristics of living things and, for each, give one example drawn from a named plant or animal.",
              answerKey:
                "Movement, respiration, sensitivity, growth, reproduction, excretion, nutrition. Award 1 mark for each characteristic correctly named and 1 mark for each appropriate example, e.g. sensitivity — the leaves of the sensitive plant fold when touched; excretion — a mammal removes urea in urine. Maximum 14 marks; cap at 12 if examples are generic rather than tied to a named organism.",
              marks: 12,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Distinguish between the independent, dependent and controlled variables in an experiment, using an investigation into the effect of light intensity on the growth of bean seedlings.",
              answerKey:
                "Independent = light intensity, deliberately varied. Dependent = growth of the seedlings, measured as height or dry mass. Controlled = water, soil type, temperature, seed variety, pot size, all held constant. Award 2 marks per variable correctly defined and 2 marks for correct application to the bean seedling example.",
              marks: 8,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "A learner tests whether fertiliser increases cassava yield but gives every plot fertiliser. What is the principal fault in the design?",
              options: [
                "Too few plots were used",
                "There is no control group",
                "Cassava is the wrong crop",
                "The experiment lasted too long",
              ],
              correctIndex: 1,
              answerKey:
                "Without unfertilised plots there is nothing to compare against, so any yield cannot be attributed to the fertiliser. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Name five branches of biology and state, in one sentence each, what a scientist in that branch studies.",
              answerKey:
                "Accept any five from botany, zoology, microbiology, genetics, ecology, anatomy, physiology, cytology, taxonomy, with an accurate one-sentence description. Award 1 mark for each branch named and 1 mark for each accurate description.",
              marks: 10,
            },
            {
              type: "ESSAY",
              prompt:
                "A community reports that children who drink from a particular well fall ill more often than those who use the borehole. Design a full investigation using the scientific method. State your hypothesis, describe your procedure, identify all variables and your control, and explain how you would decide whether your hypothesis is supported.",
              answerKey:
                "Look for: (a) a clear, testable hypothesis, e.g. water from the well contains a higher concentration of harmful bacteria than water from the borehole, 3 marks; (b) a described procedure including sampling from both sources, equal sample sizes and laboratory testing or monitored health records, 5 marks; (c) correct identification of independent variable (water source), dependent variable (bacterial count or reported illness rate) and at least three controlled variables such as sampling time, container sterility and age range of children, 5 marks; (d) explicit statement of the control, 3 marks; (e) a sound account of how data would be analysed and what result would support or refute the hypothesis, 4 marks. Credit learners who note ethical limits on experimenting with children's health and adapt the design to observation rather than deliberate exposure; award up to 2 bonus marks within the total for this insight.",
              marks: 20,
            },
          ],
        },
        {
          slug: "cell-structure",
          title: "Cell Structure and Function",
          objective:
            "By the end of the lesson, learners should be able to draw and label plant and animal cells, state the function of each organelle, and explain the structural differences between the two cell types.",
          estimatedMinutes: 80,
          notes: `## The cell theory

Established through the work of Schleiden, Schwann and Virchow:

1. All living things are made of one or more cells.
2. The cell is the basic unit of structure and function in living things.
3. All cells arise from pre-existing cells.

## Organelles common to plant and animal cells

**Cell membrane** — a thin, selectively permeable boundary of lipid and protein. Controls what enters and leaves the cell.

**Cytoplasm** — the jelly-like medium in which the organelles sit and in which most chemical reactions occur.

**Nucleus** — bounded by a nuclear membrane; contains chromatin, which carries the genetic material. Controls all cell activities and cell division.

**Mitochondrion** — the site of aerobic respiration, where glucose is broken down to release energy as ATP. Cells with high energy demands, such as muscle cells, carry many.

**Ribosome** — very small; the site of protein synthesis.

**Endoplasmic reticulum** — a network of membranes transporting substances. Rough ER carries ribosomes; smooth ER does not.

**Golgi apparatus** — modifies, packages and secretes proteins.

**Lysosome** — contains digestive enzymes; breaks down worn-out organelles and foreign material.

**Vacuole** — a fluid-filled sac. Small and numerous in animal cells.

## Found only in plant cells

**Cell wall** — rigid, made of cellulose, lying outside the cell membrane. Gives shape and mechanical support. Fully permeable, unlike the membrane.

**Chloroplast** — contains the green pigment chlorophyll; the site of photosynthesis.

**Large central vacuole** — a single permanent sac filled with cell sap. Stores water and salts and maintains turgor pressure, which keeps the plant upright.

## Found only in animal cells

**Centriole** — involved in the formation of the spindle during cell division.

## Summary of differences

| Feature | Plant cell | Animal cell |
| --- | --- | --- |
| Cell wall | Present | Absent |
| Chloroplasts | Usually present | Absent |
| Vacuole | One large, permanent | Small, temporary, or none |
| Shape | Regular, fixed | Irregular, flexible |
| Centrioles | Usually absent | Present |
| Food store | Starch | Glycogen |

## Prokaryotic and eukaryotic cells

- **Prokaryotic** — no true nucleus and no membrane-bound organelles. Bacteria.
- **Eukaryotic** — a true nucleus enclosed in a membrane, plus membrane-bound organelles. Plants, animals, fungi, protists.`,
          workedExample: `**Question:** A cell examined under the microscope has a rigid outer boundary, a single large vacuole occupying most of its volume, and numerous green bodies in the cytoplasm. Identify the cell type and explain how each observed feature supports your answer. State one organelle you would expect to be absent.

**Solution**

*Step 1 — take each observation in turn.*

**Rigid outer boundary.** Only plant cells possess a cellulose cell wall outside the membrane. An animal cell has a flexible membrane alone and would not appear rigid.

**Single large vacuole.** A permanent central vacuole filled with cell sap is characteristic of a mature plant cell. Animal cells have only small, temporary vacuoles if any.

**Numerous green bodies.** These are chloroplasts, containing chlorophyll. They are the site of photosynthesis and occur in plant cells but never in animal cells.

*Step 2 — draw the conclusion.*

All three features point the same way. The cell is a **plant cell**, and the presence of chloroplasts indicates it comes from a photosynthetic tissue such as a leaf rather than from a root.

*Step 3 — name the absent organelle.*

**Centrioles** would be expected to be absent, since these occur in animal cells and are not usually found in higher plants.

**Answer:** a plant cell, specifically from photosynthetic tissue; centrioles absent.`,
          teachingTip:
            "Insist on a wet mount before any diagram is drawn. An onion epidermis peel and a cheek smear stained with iodine take fifteen minutes to prepare and give learners the two cells side by side under the same lens; the cell wall's straight edges against the animal cell's irregular outline is a distinction no textbook drawing conveys as well. If microscopes are scarce, one demonstration station with learners rotating through in pairs still beats none. Resist the temptation to let learners copy a labelled diagram from the board — have them draw what they actually see, then compare with the standard diagram and discuss the differences. The comparison itself is where the learning happens. Watch for the persistent error of drawing the cell wall inside the membrane.",
          quiz: [
            {
              prompt: "Which organelle is the site of aerobic respiration?",
              options: ["Ribosome", "Mitochondrion", "Golgi apparatus", "Lysosome"],
              correctIndex: 1,
              explanation:
                "The mitochondrion releases energy from glucose in the form of ATP.",
            },
            {
              prompt: "The cell wall of a plant cell is made mainly of",
              options: ["Protein", "Cellulose", "Lipid", "Chitin"],
              correctIndex: 1,
              explanation:
                "Plant cell walls are composed of cellulose; fungal walls contain chitin.",
            },
            {
              prompt: "Which structure controls what enters and leaves the cell?",
              options: ["Cell wall", "Cell membrane", "Nucleus", "Cytoplasm"],
              correctIndex: 1,
              explanation:
                "The cell membrane is selectively permeable, whereas the cell wall is fully permeable.",
            },
            {
              prompt: "Protein synthesis takes place at the",
              options: ["Ribosomes", "Lysosomes", "Chloroplasts", "Vacuole"],
              correctIndex: 0,
              explanation: "Ribosomes assemble amino acids into proteins.",
            },
            {
              prompt: "Which of these is found in plant cells but not animal cells?",
              options: ["Mitochondrion", "Chloroplast", "Nucleus", "Ribosome"],
              correctIndex: 1,
              explanation:
                "Chloroplasts carry out photosynthesis and occur only in plant cells.",
            },
            {
              prompt: "A prokaryotic cell is best described as one that",
              options: [
                "has a true nucleus",
                "lacks a membrane-bound nucleus",
                "always contains chloroplasts",
                "is always multicellular",
              ],
              correctIndex: 1,
              explanation:
                "Prokaryotes such as bacteria have no nuclear membrane and no membrane-bound organelles.",
            },
            {
              prompt: "The function of the large central vacuole in a plant cell is to",
              options: [
                "carry out photosynthesis",
                "store cell sap and maintain turgor",
                "produce proteins",
                "digest worn-out organelles",
              ],
              correctIndex: 1,
              explanation:
                "Turgor pressure from the filled vacuole keeps non-woody plant tissue firm.",
            },
            {
              prompt: "Which organelle packages and secretes proteins?",
              options: [
                "Endoplasmic reticulum",
                "Golgi apparatus",
                "Mitochondrion",
                "Centriole",
              ],
              correctIndex: 1,
              explanation:
                "The Golgi apparatus modifies proteins and prepares them for export.",
            },
            {
              prompt: "The third statement of the cell theory holds that",
              options: [
                "all cells contain chloroplasts",
                "all cells arise from pre-existing cells",
                "cells are always visible to the naked eye",
                "all cells are identical",
              ],
              correctIndex: 1,
              explanation:
                "Virchow's contribution established that cells do not arise spontaneously.",
            },
            {
              prompt: "Muscle cells contain many mitochondria because they",
              options: [
                "carry out photosynthesis",
                "require large amounts of energy",
                "store large volumes of water",
                "divide more often than other cells",
              ],
              correctIndex: 1,
              explanation:
                "Contraction demands a high rate of ATP production, supplied by mitochondria.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Draw a labelled diagram of a typical plant cell showing at least six structures.",
              answerKey:
                "Expect: cell wall, cell membrane, cytoplasm, nucleus, chloroplast, large central vacuole; credit also mitochondrion and ribosomes. Award 1 mark per correct label correctly positioned, up to 8. Award 2 further marks for a clear, proportionate outline drawn in pencil with straight label lines and no crossing. Deduct 1 mark where the cell wall is drawn inside the membrane.",
              marks: 10,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State five structural differences between a plant cell and an animal cell, presenting your answer as a table.",
              answerKey:
                "Accept any five from: cell wall present/absent; chloroplasts present/absent; one large permanent vacuole versus small or no vacuoles; regular fixed shape versus irregular flexible shape; centrioles usually absent versus present; starch versus glycogen as food store. Award 2 marks for each difference where both sides of the comparison are stated. A one-sided statement earns 1 mark.",
              marks: 10,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "A cell is found to have no nuclear membrane and no mitochondria. It is most likely",
              options: [
                "a plant cell",
                "an animal cell",
                "a bacterial cell",
                "a fungal cell",
              ],
              correctIndex: 2,
              answerKey:
                "The absence of a nuclear membrane and membrane-bound organelles identifies a prokaryote, and bacteria are the prokaryotes on the syllabus. Option C.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain why the cell membrane is described as selectively permeable while the cell wall is described as fully permeable, and state one consequence of this difference for the plant cell.",
              answerKey:
                "The membrane allows some substances through while restricting others, controlling the internal environment; the wall permits water and dissolved substances to pass freely and offers no such control. Consequence: the wall cannot regulate uptake, so osmotic control rests entirely with the membrane; the wall instead prevents the cell bursting when water enters, allowing turgor to develop rather than lysis. Award 3 marks for each definition and 3 for a sound consequence.",
              marks: 9,
            },
            {
              type: "ESSAY",
              prompt:
                "'Structure is related to function in the cell.' Discuss this statement with reference to at least four named organelles, explaining in each case how the structure suits the work the organelle does.",
              answerKey:
                "Look for four developed examples, each worth 4 marks: mitochondrion, with folded inner membrane (cristae) increasing surface area for respiratory enzymes; chloroplast, with stacked membranes holding chlorophyll to maximise light capture; cell membrane, with a lipid bilayer and embedded proteins permitting selective transport; root hair cell or similar, with an extended projection increasing absorptive surface; rough endoplasmic reticulum, studded with ribosomes to move newly made protein directly into transport channels. Award up to 16 marks for the four examples and 4 marks for a coherent introduction and conclusion tying structure to function as a general biological principle. A learner who merely lists organelles and functions without addressing structural adaptation should not exceed 8.",
              marks: 20,
            },
          ],
        },
        {
          slug: "cell-division",
          title: "Cell Division: Mitosis and Meiosis",
          objective:
            "By the end of the lesson, learners should be able to describe the stages of mitosis and meiosis, state where each occurs, and explain the biological significance of the two processes.",
          estimatedMinutes: 80,
          notes: `## Why cells divide

Growth, repair of damaged tissue, replacement of worn-out cells, asexual reproduction, and the formation of gametes for sexual reproduction.

## Chromosomes

A **chromosome** is a thread of DNA carrying genes. Body cells are **diploid (2n)** — chromosomes occur in matching pairs. Gametes are **haploid (n)** — one chromosome from each pair.

In humans the diploid number is 46, so the haploid number is 23.

## Mitosis

Produces **two** daughter cells, each **genetically identical** to the parent and to each other, each **diploid**.

**Interphase** (before division) — the cell grows and the DNA replicates, so each chromosome becomes two identical chromatids joined at a centromere.

**Stages — remember PMAT:**

1. **Prophase** — chromosomes condense and become visible; the nuclear membrane breaks down; the spindle begins to form.
2. **Metaphase** — chromosomes line up singly along the equator of the cell, attached to spindle fibres at their centromeres.
3. **Anaphase** — the centromeres split and the sister chromatids are pulled to opposite poles.
4. **Telophase** — chromosomes reach the poles and uncoil; a nuclear membrane re-forms around each group.

**Cytokinesis** then divides the cytoplasm. In animal cells the membrane pinches inwards; in plant cells a cell plate forms across the middle.

**Where it occurs:** growing points — the root and shoot tips of plants, the bone marrow and skin of animals.

## Meiosis

Produces **four** daughter cells, each **genetically different**, each **haploid**.

It involves **two** divisions, meiosis I and meiosis II, after only one replication of the DNA.

**Meiosis I — the reduction division**

- **Prophase I** — homologous chromosomes pair up (synapsis). **Crossing over** occurs: chromatids exchange segments, producing new combinations of genes. This is a major source of variation.
- **Metaphase I** — the pairs line up at the equator. Which member of each pair faces which pole is random — **independent assortment**, a second source of variation.
- **Anaphase I** — whole chromosomes, not chromatids, move to opposite poles. The chromosome number is now halved.
- **Telophase I** — two haploid nuclei form.

**Meiosis II** resembles mitosis and separates the chromatids, giving four haploid cells in all.

**Where it occurs:** the reproductive organs — anthers and ovules in plants, testes and ovaries in animals.

## Comparison

| Feature | Mitosis | Meiosis |
| --- | --- | --- |
| Divisions | One | Two |
| Daughter cells | Two | Four |
| Chromosome number | Unchanged (2n) | Halved (n) |
| Genetic result | Identical | Varied |
| Crossing over | Absent | Present |
| Site | Body cells | Reproductive organs |

## Significance

**Mitosis** maintains the chromosome number and produces identical cells, which is what growth and repair require.

**Meiosis** halves the chromosome number so that fertilisation restores it rather than doubling it each generation, and it generates the variation on which natural selection acts.`,
          workedExample: `**Question:** A plant has a diploid chromosome number of 24. State the number of chromosomes in (a) a cell at the end of mitosis, (b) a pollen grain, (c) a cell during metaphase I of meiosis, (d) the zygote formed at fertilisation. Explain your reasoning in each case.

**Solution**

*Given:* 2n = 24, so n = 12.

**(a) A cell at the end of mitosis: 24 chromosomes.**

Mitosis conserves the chromosome number. The parent cell had 24; each daughter cell also has 24. This is why mitosis can serve growth — every new body cell carries the full complement.

**(b) A pollen grain: 12 chromosomes.**

Pollen is a male gamete, produced by meiosis in the anther. Meiosis halves the number, so 24 becomes 12. The pollen grain is haploid.

**(c) A cell during metaphase I of meiosis: 24 chromosomes.**

This is the step learners most often get wrong. At metaphase I the reduction has **not yet happened** — the homologous pairs are lined up at the equator but have not separated. The cell still contains all 24 chromosomes, each consisting of two chromatids. The halving takes place at anaphase I.

**(d) The zygote: 24 chromosomes.**

Fertilisation fuses a male gamete (12) with a female gamete (12), restoring the diploid number: 12 + 12 = 24.

**Answer:** (a) 24 (b) 12 (c) 24 (d) 24

**The principle to carry away:** meiosis halves so that fertilisation can restore. If gametes were diploid, the chromosome number would double every generation.`,
          teachingTip:
            "Use pipe cleaners, string or strips of coloured paper as chromosomes and have learners physically move them through the stages on their desks — two colours for the two members of a homologous pair makes crossing over visible in a way that no diagram does. Have them perform mitosis first, then meiosis with the same materials, so the second division registers as the difference. Two errors recur every year and are worth attacking directly: learners think the chromosome number halves at metaphase I rather than anaphase I, and they cannot say why meiosis matters beyond 'it makes gametes'. Ask the class what would happen to the chromosome number over three generations if gametes were diploid; working out the doubling for themselves fixes the purpose of reduction permanently.",
          quiz: [
            {
              prompt: "How many daughter cells are produced by mitosis?",
              options: ["One", "Two", "Four", "Eight"],
              correctIndex: 1,
              explanation:
                "One division yields two genetically identical diploid daughter cells.",
            },
            {
              prompt: "During which stage of mitosis do chromosomes line up at the equator?",
              options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
              correctIndex: 1,
              explanation:
                "Metaphase is defined by the alignment of chromosomes on the equatorial plate.",
            },
            {
              prompt: "Crossing over occurs during",
              options: ["Prophase I of meiosis", "Metaphase of mitosis", "Anaphase II", "Interphase"],
              correctIndex: 0,
              explanation:
                "Homologous chromosomes pair in prophase I and exchange chromatid segments.",
            },
            {
              prompt: "If the diploid number of an organism is 40, its gametes contain",
              options: ["10", "20", "40", "80"],
              correctIndex: 1,
              explanation: "Meiosis halves the number, so gametes are haploid with 20.",
            },
            {
              prompt: "Meiosis takes place in the",
              options: ["Root tip", "Bone marrow", "Reproductive organs", "Skin"],
              correctIndex: 2,
              explanation:
                "Gametes are formed in the anthers and ovules of plants and the testes and ovaries of animals.",
            },
            {
              prompt: "At which stage of meiosis is the chromosome number actually halved?",
              options: ["Prophase I", "Metaphase I", "Anaphase I", "Telophase II"],
              correctIndex: 2,
              explanation:
                "Homologous chromosomes separate to opposite poles at anaphase I, halving the number.",
            },
            {
              prompt: "The main biological significance of mitosis is",
              options: [
                "producing genetic variation",
                "growth and repair of tissues",
                "halving the chromosome number",
                "forming gametes",
              ],
              correctIndex: 1,
              explanation:
                "Identical diploid cells are what growth, repair and replacement require.",
            },
            {
              prompt: "In cytokinesis, a cell plate forms in",
              options: ["Animal cells", "Plant cells", "Bacterial cells", "All cells"],
              correctIndex: 1,
              explanation:
                "The rigid wall prevents pinching, so plant cells build a new wall across the middle.",
            },
            {
              prompt: "DNA replication occurs during",
              options: ["Prophase", "Interphase", "Anaphase", "Telophase"],
              correctIndex: 1,
              explanation:
                "Each chromosome is duplicated into two chromatids before division begins.",
            },
            {
              prompt: "Which process introduces genetic variation?",
              options: ["Mitosis", "Meiosis", "Cytokinesis", "Interphase"],
              correctIndex: 1,
              explanation:
                "Crossing over and independent assortment in meiosis produce novel gene combinations.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Describe the four stages of mitosis, stating clearly what happens to the chromosomes in each.",
              answerKey:
                "Prophase: chromosomes condense and become visible as two chromatids joined at a centromere; nuclear membrane breaks down; spindle forms. Metaphase: chromosomes align singly at the equator, attached to spindle fibres by their centromeres. Anaphase: centromeres split and sister chromatids are drawn to opposite poles. Telophase: chromatids reach the poles, uncoil, and nuclear membranes re-form. Award 3 marks per stage for an accurate description referencing chromosome behaviour.",
              marks: 12,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Give five differences between mitosis and meiosis in tabular form.",
              answerKey:
                "Accept any five from: one division versus two; two daughter cells versus four; chromosome number maintained versus halved; daughter cells identical versus genetically varied; no crossing over versus crossing over in prophase I; occurs in body cells versus reproductive organs; serves growth and repair versus gamete formation. Award 2 marks per complete two-sided comparison.",
              marks: 10,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "A cell with 2n = 16 completes meiosis I. How many chromosomes are in each resulting cell, and are the chromatids still joined?",
              options: [
                "16, chromatids separated",
                "8, chromatids still joined",
                "8, chromatids separated",
                "16, chromatids still joined",
              ],
              correctIndex: 1,
              answerKey:
                "Meiosis I halves the chromosome number to 8, but the chromatids of each chromosome remain joined until anaphase II. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain why meiosis is essential for sexual reproduction, and predict what would happen over three generations if gametes were produced by mitosis instead.",
              answerKey:
                "Meiosis halves the chromosome number so that fusion of two gametes at fertilisation restores the diploid number rather than doubling it, and it generates variation through crossing over and independent assortment. If gametes were diploid, the number would double each generation: starting from 2n = 24, offspring would carry 48, then 96, then 192, which is not viable. Award 4 marks for the halving-and-restoration argument, 3 for variation, 5 for a correctly worked doubling across three generations.",
              marks: 12,
            },
            {
              type: "ESSAY",
              prompt:
                "Compare and contrast mitosis and meiosis, and discuss the significance of each to the survival of a species.",
              answerKey:
                "Award marks as follows: accurate account of mitosis including its stages and outcome, 5 marks; accurate account of meiosis including both divisions, crossing over and independent assortment, 7 marks; explicit comparison covering at least four points of difference, 6 marks; discussion of significance — mitosis supplying growth, repair, replacement and asexual reproduction; meiosis maintaining chromosome number across generations and supplying the variation on which natural selection depends, 8 marks; organisation and use of biological terminology, 4 marks. A learner who describes both processes accurately but does not address significance should not exceed 18.",
              marks: 30,
            },
          ],
        },
        {
          slug: "classification",
          title: "Classification of Living Things",
          objective:
            "By the end of the lesson, learners should be able to state the reasons for classification, list the taxonomic hierarchy in order, apply the binomial system of naming, and describe the main features of the five kingdoms.",
          estimatedMinutes: 80,
          notes: `## Why classify

- To bring order to the enormous diversity of living things
- To make identification possible
- To show evolutionary relationships
- To allow scientists worldwide to communicate about the same organism without confusion

## The taxonomic hierarchy

From the largest, most inclusive group to the smallest:

**Kingdom — Phylum — Class — Order — Family — Genus — Species**

A useful mnemonic: **K**ing **P**hilip **C**ame **O**ver **F**or **G**ood **S**oup.

As you move down the hierarchy, the number of organisms in each group **decreases** and the features they share **increase**.

## Species

A **species** is a group of organisms that can interbreed to produce **fertile** offspring.

The word *fertile* matters. A horse and a donkey interbreed to produce a mule, but the mule is sterile, so horse and donkey remain separate species.

## The binomial system

Devised by Carolus Linnaeus. Every organism receives a two-part Latin name:

**Genus + species**

- *Homo sapiens* — human
- *Zea mays* — maize
- *Panthera leo* — lion
- *Elaeis guineensis* — oil palm

**Rules of writing:**

1. The genus name begins with a **capital** letter.
2. The species name is written in **lower case**.
3. Both are printed in *italics*, or underlined separately when handwritten.

## The five kingdoms

**1. Monera** — prokaryotic, unicellular, no true nucleus, cell wall not of cellulose. *Bacteria, blue-green algae.*

**2. Protista** — eukaryotic, mostly unicellular, some with chlorophyll. *Amoeba, Paramecium, Euglena, Plasmodium.*

**3. Fungi** — eukaryotic, cell wall of chitin, no chlorophyll, feed saprophytically or parasitically by absorbing digested food, store glycogen. *Mushroom, Rhizopus, yeast.*

**4. Plantae** — eukaryotic, multicellular, cellulose cell wall, chlorophyll present, autotrophic, store starch, fixed in position. *Mosses, ferns, flowering plants.*

**5. Animalia** — eukaryotic, multicellular, no cell wall, no chlorophyll, heterotrophic, store glycogen, most able to move.

## Fungi are not plants

A common error. Fungi have no chlorophyll and cannot photosynthesise; their walls are chitin, not cellulose; they store glycogen, not starch. They feed by absorbing nutrients from dead or living matter, which is why they occupy a kingdom of their own.

## Dichotomous keys

An identification tool offering a series of paired, contrasting statements. At each step you choose the statement that fits your specimen, and the choice leads either to the next pair or to a name.`,
          workedExample: `**Question:** A learner collects an organism that is multicellular, has a cell wall containing chitin, lacks chlorophyll, and obtains its food by absorbing nutrients from decaying wood. (a) Assign it to a kingdom, justifying each feature. (b) Explain why it could not be placed in Kingdom Plantae. (c) If its scientific name is *rhizopus stolonifer* as written by the learner, correct the name and state the rules applied.

**Solution**

**(a) Kingdom Fungi.**

Take the features one at a time:

- *Multicellular and eukaryotic* — this rules out Monera, which is prokaryotic and unicellular, and rules out most of Protista.
- *Cell wall of chitin* — decisive. Plants have cellulose walls; animals have no wall at all. Chitin in the wall is a defining feature of fungi.
- *No chlorophyll* — it cannot photosynthesise, so it is not a plant.
- *Absorbs nutrients from decaying wood* — this is saprophytic nutrition, characteristic of fungi.

All four features agree: **Kingdom Fungi**.

**(b) Why not Plantae?**

Three independent reasons:

1. Plants possess chlorophyll and are autotrophic; this organism has neither.
2. Plant cell walls are cellulose, not chitin.
3. Plants store food as starch; fungi store glycogen.

A single shared feature — having a cell wall — is not enough to place an organism in a kingdom. Classification rests on the full combination of characteristics.

**(c) Correcting the name.**

The learner wrote *rhizopus stolonifer*. The correct form is:

***Rhizopus stolonifer***

Rules applied:

1. The **genus** name (*Rhizopus*) takes an initial capital letter.
2. The **species** name (*stolonifer*) stays in lower case.
3. Both words are italicised in print, or underlined separately in handwriting.

**Answer:** (a) Fungi (b) no chlorophyll, chitin wall, glycogen store (c) *Rhizopus stolonifer*`,
          teachingTip:
            "Begin with a genuine sorting problem rather than the hierarchy. Empty a bag of thirty mixed objects — leaves, seeds, stones, bottle caps — onto a desk and ask groups to sort them into a system where any newcomer could find a given item quickly. Groups will invent nested categories and will argue about borderline cases, which is exactly the situation taxonomists face. Only then introduce Kingdom to Species, and the hierarchy lands as a solution to a problem they have felt. Build a dichotomous key together using learners in the class as the specimens — wearing glasses or not, and so on — before attempting one with organisms. On binomial names, mark the capital letter and the underlining strictly from the first day; learners who are allowed to write *homo Sapiens* for a fortnight never fully unlearn it.",
          quiz: [
            {
              prompt: "Which is the correct order of the taxonomic hierarchy?",
              options: [
                "Kingdom, Class, Phylum, Order, Family, Genus, Species",
                "Kingdom, Phylum, Class, Order, Family, Genus, Species",
                "Species, Genus, Family, Order, Class, Phylum, Kingdom",
                "Phylum, Kingdom, Class, Family, Order, Genus, Species",
              ],
              correctIndex: 1,
              explanation:
                "Kingdom is the broadest group and species the narrowest, in the order given.",
            },
            {
              prompt: "Which kingdom contains prokaryotic organisms?",
              options: ["Protista", "Fungi", "Monera", "Plantae"],
              correctIndex: 2,
              explanation: "Monera comprises bacteria and blue-green algae, which lack a true nucleus.",
            },
            {
              prompt: "How should the scientific name of the lion be written?",
              options: [
                "panthera leo",
                "Panthera Leo",
                "Panthera leo",
                "PANTHERA LEO",
              ],
              correctIndex: 2,
              explanation:
                "The genus takes a capital, the species stays lower case, and both are italicised.",
            },
            {
              prompt: "A species is best defined as a group of organisms that",
              options: [
                "look alike",
                "live in the same habitat",
                "can interbreed to produce fertile offspring",
                "belong to the same kingdom",
              ],
              correctIndex: 2,
              explanation:
                "Fertility of the offspring is the test; a mule is infertile, so horse and donkey are separate species.",
            },
            {
              prompt: "Fungi differ from plants because fungi",
              options: [
                "are multicellular",
                "have cell walls",
                "lack chlorophyll",
                "are eukaryotic",
              ],
              correctIndex: 2,
              explanation:
                "Fungi cannot photosynthesise; they also have chitin walls and store glycogen.",
            },
            {
              prompt: "Which kingdom does Amoeba belong to?",
              options: ["Monera", "Protista", "Fungi", "Animalia"],
              correctIndex: 1,
              explanation:
                "Amoeba is a unicellular eukaryote, placing it in Protista.",
            },
            {
              prompt: "As you move from kingdom to species, the number of shared features",
              options: ["Decreases", "Increases", "Stays the same", "Becomes zero"],
              correctIndex: 1,
              explanation:
                "Groups become smaller and their members become more alike.",
            },
            {
              prompt: "The binomial system of naming was devised by",
              options: ["Charles Darwin", "Carolus Linnaeus", "Robert Hooke", "Louis Pasteur"],
              correctIndex: 1,
              explanation: "Linnaeus introduced the two-part Latin naming system.",
            },
            {
              prompt: "A dichotomous key works by offering",
              options: [
                "a list of all known organisms",
                "pairs of contrasting statements leading to an identification",
                "photographs of every species",
                "a random selection of names",
              ],
              correctIndex: 1,
              explanation:
                "At each step the user chooses between two alternatives until a name is reached.",
            },
            {
              prompt: "Members of Kingdom Plantae store food mainly as",
              options: ["Glycogen", "Starch", "Chitin", "Protein"],
              correctIndex: 1,
              explanation:
                "Plants store starch, whereas fungi and animals store glycogen.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "State four reasons why living things are classified.",
              answerKey:
                "Any four from: to bring order to the great diversity of organisms; to make identification of an unknown organism possible; to show evolutionary and structural relationships; to enable scientists worldwide to refer to the same organism unambiguously; to make the study of organisms manageable by grouping. Award 2 marks each.",
              marks: 8,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Write the taxonomic hierarchy in order from largest to smallest group, and state what happens to the number of organisms and to the features shared as you move down it.",
              answerKey:
                "Kingdom, Phylum, Class, Order, Family, Genus, Species — award 1 mark per correctly placed level, up to 7. Moving down, the number of organisms in each group decreases while the number of features they share increases — award 2 marks for each of these two observations.",
              marks: 11,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "An organism is unicellular, has a true nucleus, and moves using pseudopodia. To which kingdom does it belong?",
              options: ["Monera", "Protista", "Fungi", "Animalia"],
              correctIndex: 1,
              answerKey:
                "A true nucleus rules out Monera; unicellular structure rules out Fungi, Plantae and Animalia as understood at this level. Movement by pseudopodia identifies an amoeboid protist. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Give three characteristics of Kingdom Fungi that distinguish it from Kingdom Plantae, and name one economically important fungus in Liberia with its use or effect.",
              answerKey:
                "Distinguishing features: no chlorophyll and therefore heterotrophic, against autotrophic plants; cell wall of chitin, against cellulose; food stored as glycogen, against starch. Accept also absence of true roots, stems and leaves. Award 2 marks each. For the named fungus, accept yeast used in baking and brewing, edible mushrooms as food, or a named crop pathogen causing rot; award 2 marks for the name and 2 for a correct use or effect.",
              marks: 10,
            },
            {
              type: "ESSAY",
              prompt:
                "Describe the five-kingdom system of classification, giving for each kingdom at least three defining characteristics and two named examples. Conclude by explaining why fungi were separated from plants.",
              answerKey:
                "Award up to 5 marks per kingdom — 3 for characteristics and 2 for examples: Monera (prokaryotic, unicellular, no membrane-bound organelles; bacteria, blue-green algae); Protista (eukaryotic, mostly unicellular, some autotrophic and some heterotrophic; Amoeba, Paramecium, Plasmodium); Fungi (eukaryotic, chitin wall, no chlorophyll, saprophytic or parasitic; mushroom, yeast, Rhizopus); Plantae (eukaryotic, multicellular, cellulose wall, chlorophyll, autotrophic; maize, oil palm, ferns); Animalia (eukaryotic, multicellular, no cell wall, heterotrophic, mostly motile; earthworm, fish, human). Award a further 5 marks for the concluding explanation, which should cite absence of chlorophyll, chitin rather than cellulose walls, glycogen rather than starch storage, and absorptive rather than photosynthetic nutrition.",
              marks: 30,
            },
          ],
        },
      ],
    },
  ],
};
