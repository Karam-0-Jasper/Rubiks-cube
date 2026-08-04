import type { SubjectContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology (Grades 10-12).
// Grade 10, Semester One, Period I: Introduction to Biology and its branches;
// the cell as the basic unit of life; and movement of substances across the
// cell membrane. Diversity/classification (G10 P2), cell division and genetics
// (Grade 11) follow in their own periods.
export const biology: SubjectContent = {
  slug: "biology",
  name: "Biology",
  shortName: "Biology",
  description:
    "The study of life: what biology is, the cell as the basic unit of life, and how substances move across the cell membrane.",
  accent: "emerald",
  sortOrder: 3,
  teacherCode: "BIO-10-6135",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "Introduction to Biology and the Cell",
      summary:
        "Period I of the MoE Grade 10 Biology syllabus. Learners define biology and its branches, meet its major contributors, distinguish living from non-living things, study the cell as the basic unit of life and its structures, and examine how substances move across the cell membrane.",
      topics: [
        {
          slug: "introduction-to-biology",
          title: "Introduction to Biology and Its Branches",
          objective:
            "By the end of the unit, learners should be able to define biology and its branches, name major contributors to its development, list the characteristics that distinguish living from non-living things, and identify the parts of the light microscope.",
          estimatedMinutes: 160,
          notes: `## What biology is

**Biology** is the scientific study of living organisms — their structure, function, growth, origin, and interactions with one another and the environment. The word comes from the Greek *bios* (life) and *logos* (study).

## Major branches of biology

- **Botany** — the study of plants
- **Zoology** — the study of animals
- **Microbiology** — the study of micro-organisms
- **Genetics** — the study of heredity and variation
- **Ecology** — the study of organisms in their environment
- **Anatomy** — internal structure
- **Physiology** — how living parts function
- **Cytology** — the study of cells
- **Taxonomy** — classification and naming

## Major contributors

| Scientist | Contribution |
| --- | --- |
| **Aristotle** | Early classification of animals; often called the father of biology |
| **Carolus Linnaeus** | The binomial system of naming and modern classification |
| **Louis Pasteur** | Germ theory of disease; disproved spontaneous generation; pasteurisation |
| **Robert Koch** | Linked specific micro-organisms to specific diseases (Koch's postulates) |
| **Gregor Mendel** | The laws of inheritance; the father of genetics |

## How biologists work: the scientific method

- Biology is a **science** — knowledge built by observing, testing and checking, not by guessing.
- Steps of the **scientific method**:

1. **Observation** — notice something in nature (e.g. *plants near the window grow taller*).
2. **Question** — ask why it happens (*does light affect growth?*).
3. **Hypothesis** — a testable, tentative answer (*plants given more light grow taller*).
4. **Experiment** — a fair test that changes **one** factor (the *variable*) while keeping the others the same, and includes a **control** for comparison.
5. **Results and observation** — record what actually happens, in tables or graphs.
6. **Conclusion** — decide whether the results support or reject the hypothesis, and share the findings so others can repeat the test.

- A good experiment is **fair** (one variable changed), **repeatable**, and has a **control** as the standard of comparison.

## Characteristics of living things

Remember them as **MRS GREN**:

- **M**ovement — living things move all or part of themselves
- **R**espiration — releasing energy from food
- **S**ensitivity (irritability) — responding to stimuli
- **G**rowth — a permanent increase in size and dry mass
- **R**eproduction — producing new individuals of the same kind
- **E**xcretion — removing metabolic waste
- **N**utrition — taking in and using materials for energy and growth

- Must show **all seven** to be classed as living.
- A motor car moves and uses fuel but does not grow, reproduce or respond — not alive.
- *Euglena* — borderline: moves and responds like an animal, photosynthesises like a plant; placed among the protists.

## Why biology matters in Liberia

- Underpins agriculture, public health, and the management of forests and fisheries.
- Disease transmission, soil fertility and reproduction bear directly on food security.
- Basis for controlling malaria, cholera, Lassa fever and Ebola.

## The light microscope

The main tool for studying cells. Its parts:

- **Eyepiece (ocular) lens** — the lens you look through, usually ×10
- **Objective lenses** — the lenses near the specimen, of different powers (×4, ×10, ×40)
- **Stage** — the platform holding the slide
- **Coarse and fine adjustment knobs** — focus the image
- **Diaphragm** — controls the amount of light passing through the specimen
- **Mirror or lamp** — the light source

**Total magnification = eyepiece magnification × objective magnification.** A ×10 eyepiece with a ×40 objective gives ×400.`,
          workedExample: `**Question:** A learner examines pond water under a ×10 eyepiece and a ×40 objective and sees a single-celled organism that swims towards the light and appears green.

(a) Calculate the total magnification.
(b) Is the organism living? Justify using MRS GREN.
(c) The organism both swims and photosynthesises. What does this suggest about classifying it?

**Solution**

**(a) Total magnification.**
Total = eyepiece × objective = 10 × 40 = **×400**.

**(b) Is it living?**
Test it against MRS GREN:
- **Movement** — it swims, so yes.
- **Sensitivity** — it moves *towards the light*, a response to a stimulus, so yes.
- **Nutrition** — being green, it photosynthesises, so it feeds.
- We can reasonably infer respiration, growth, excretion and reproduction, since it is a functioning organism.

It shows the characteristics of life, so it **is living**.

**(c) Classifying it.**
It behaves like an **animal** (swimming, responding) *and* like a **plant** (green, photosynthesising). An organism that combines both sets of features does not fit neatly into either the plant or the animal kingdom. This is exactly the case of *Euglena*, which is why such organisms are placed among the **protists** — a reminder that classification groups organisms by their full combination of features, not by a single characteristic.`,
          teachingTip:
            "MRS GREN is easy to chant and easy to misapply, so test it against hard cases immediately: ask whether fire is alive (it moves, grows, consumes fuel and produces waste, yet is not alive) and whether a seed is alive. Arguing these fixes the point that all seven criteria must be met. Do the microscope as a genuine practical if at all possible — an onion epidermis peel and a cheek smear stained with iodine cost almost nothing and let learners see real cells, which no diagram matches. Insist they compute total magnification themselves (eyepiece × objective) every time they use the instrument, and mark the missing calculation strictly, because it is examined every year.",
          quiz: [
            { prompt: "Biology is best defined as the study of", options: ["rocks and minerals", "living organisms", "chemical reactions", "the weather"], correctIndex: 1, explanation: "Biology is the scientific study of living things." },
            { prompt: "Which branch of biology studies plants?", options: ["Zoology", "Botany", "Genetics", "Ecology"], correctIndex: 1, explanation: "Botany is the study of plants; zoology deals with animals." },
            { prompt: "Who is regarded as the father of genetics?", options: ["Aristotle", "Pasteur", "Mendel", "Koch"], correctIndex: 2, explanation: "Gregor Mendel established the laws of inheritance." },
            { prompt: "In MRS GREN, the letter S stands for", options: ["Speed", "Sensitivity", "Strength", "Storage"], correctIndex: 1, explanation: "Sensitivity, or irritability, is the ability to respond to stimuli." },
            { prompt: "Which scientist developed the germ theory of disease?", options: ["Linnaeus", "Mendel", "Louis Pasteur", "Aristotle"], correctIndex: 2, explanation: "Pasteur showed that micro-organisms cause disease and fermentation." },
            { prompt: "The study of heredity and variation is", options: ["Anatomy", "Genetics", "Ecology", "Cytology"], correctIndex: 1, explanation: "Genetics examines how characteristics pass to offspring." },
            { prompt: "Which is NOT a characteristic of living things?", options: ["Reproduction", "Respiration", "Combustion", "Excretion"], correctIndex: 2, explanation: "Combustion is burning, not a life process confined to organisms." },
            { prompt: "Total magnification of a ×10 eyepiece and ×40 objective is", options: ["×50", "×400", "×4", "×140"], correctIndex: 1, explanation: "Multiply the two magnifications: 10 × 40 = 400." },
            { prompt: "Which part of the microscope controls the amount of light?", options: ["Stage", "Diaphragm", "Eyepiece", "Objective"], correctIndex: 1, explanation: "The diaphragm regulates light passing through the specimen." },
            { prompt: "Growth in living things is best defined as", options: ["any swelling", "a permanent increase in size and dry mass", "movement of the whole body", "taking in water"], correctIndex: 1, explanation: "A body that swells with water has not grown; growth adds dry mass permanently." },
            { prompt: "Carolus Linnaeus is best known for", options: ["the germ theory", "the binomial naming system", "the laws of inheritance", "Koch's postulates"], correctIndex: 1, explanation: "Linnaeus devised the two-part Latin naming system." },
            { prompt: "Which branch studies organisms in their environment?", options: ["Ecology", "Physiology", "Cytology", "Taxonomy"], correctIndex: 0, explanation: "Ecology deals with organisms and their surroundings." },
            { prompt: "Euglena is difficult to classify because it", options: ["is not alive", "both swims and photosynthesises", "has no cell", "is a bacterium"], correctIndex: 1, explanation: "It shows both animal-like and plant-like features, so it is placed among protists." },
            { prompt: "The lens you look through in a microscope is the", options: ["objective lens", "eyepiece lens", "condenser", "mirror"], correctIndex: 1, explanation: "The eyepiece, or ocular lens, is nearest the eye." },
            { prompt: "Robert Koch is remembered for", options: ["classifying plants", "linking specific microbes to specific diseases", "discovering genes", "inventing the microscope"], correctIndex: 1, explanation: "Koch's postulates connect a particular organism to a particular disease." },
            { prompt: "Which process removes metabolic waste from an organism?", options: ["Nutrition", "Excretion", "Growth", "Reproduction"], correctIndex: 1, explanation: "Excretion is the removal of waste produced by metabolism." },
            { prompt: "The study of the internal structure of organisms is", options: ["Physiology", "Anatomy", "Ecology", "Genetics"], correctIndex: 1, explanation: "Anatomy deals with structure; physiology with function." },
            { prompt: "Which knob is used for the final sharp focus?", options: ["Coarse adjustment", "Fine adjustment", "Diaphragm", "Stage clip"], correctIndex: 1, explanation: "The fine adjustment sharpens the image after coarse focusing." },
            { prompt: "A car uses fuel and moves but is not alive because it does not", options: ["burn fuel", "grow, reproduce or respond", "make noise", "need a driver"], correctIndex: 1, explanation: "It fails several MRS GREN criteria, so it is non-living." },
            { prompt: "Aristotle is often described as the", options: ["father of genetics", "father of biology", "founder of ecology", "inventor of the microscope"], correctIndex: 1, explanation: "His early work classifying animals earns him the title." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "List the seven characteristics of living things and give one example of each from a named organism.", answerKey: "Movement, respiration, sensitivity, growth, reproduction, excretion, nutrition. Award 1 mark per characteristic and 1 per apt example tied to a named organism (e.g. sensitivity — a sensitive plant folds its leaves when touched). Maximum 14; cap at 12 if examples are generic.", marks: 12 },
            { type: "SHORT_ANSWER", prompt: "Name four branches of biology and state what each studies.", answerKey: "Any four from botany (plants), zoology (animals), microbiology (micro-organisms), genetics (heredity), ecology (organisms and environment), anatomy (structure), physiology (function), cytology (cells), taxonomy (classification). Award 1 mark for each branch and 1 for each accurate description.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "A specimen is viewed with a ×10 eyepiece and a ×4 objective. The total magnification is", options: ["×14", "×40", "×4", "×400"], correctIndex: 1, answerKey: "10 × 4 = ×40. Option B.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Name the scientist associated with each contribution: (a) germ theory of disease; (b) binomial naming system; (c) laws of inheritance.", answerKey: "(a) Louis Pasteur; (b) Carolus Linnaeus; (c) Gregor Mendel. Award 2 marks each. Accept Koch alongside Pasteur for disease-causing microbes if reasoned.", marks: 6 },
            { type: "ESSAY", prompt: "Explain why biology is important to national development in Liberia, referring to agriculture, public health and the management of natural resources, and give a specific example under each heading.", answerKey: "Agriculture: understanding crop and animal biology, soil fertility and reproduction raises food production — e.g. improved rice varieties or pest control, 4 marks. Public health: knowledge of disease transmission underpins the control of malaria, cholera or Ebola — e.g. surveillance and prevention during outbreaks, 4 marks. Natural resources: biological knowledge guides sustainable management of forests and fisheries — e.g. avoiding over-fishing or deforestation, 4 marks. Award up to 3 further marks for coherent organisation and clear examples. A learner who lists uses without concrete Liberian examples should not exceed 8.", marks: 15 },
          ],
        },
        {
          slug: "the-cell",
          title: "The Cell: the Basic Unit of Life",
          objective:
            "By the end of the unit, learners should be able to state the cell theory, name the structures of plant and animal cells and their functions, distinguish prokaryotic, eukaryotic and akaryotic cells, and compare plant and animal cells.",
          estimatedMinutes: 160,
          notes: `## Introduction

- **Cell** = smallest unit that is itself alive.
- A single cell (*Amoeba*, bacterium) carries out every life process alone; large organisms are built from trillions of cells.
- **This topic:** the cell theory; structures (organelles) of plant and animal cells and their functions; plant vs animal cells; organisation into tissues, organs and systems.

## The cell theory

Built from the work of Schleiden, Schwann and Virchow:

1. All living things are made of one or more **cells**.
2. The cell is the basic **unit of structure and function** in living things.
3. All cells arise from **pre-existing cells**.

## Structures common to plant and animal cells

- **Cell membrane** — a thin, selectively permeable boundary that controls what enters and leaves the cell.
- **Cytoplasm** — the jelly-like medium where the organelles sit and most reactions occur.
- **Nucleus** — contains the genetic material (chromatin); controls all cell activities and cell division.
- **Mitochondrion** — the site of aerobic respiration, releasing energy as ATP. Numerous in active cells.
- **Ribosome** — the site of protein synthesis.
- **Endoplasmic reticulum** — a membrane network transporting substances.
- **Golgi apparatus** — modifies, packages and secretes proteins.

## Found only in plant cells

- **Cell wall** — rigid, made of cellulose, outside the membrane; gives shape and support; fully permeable.
- **Chloroplast** — contains chlorophyll; the site of photosynthesis.
- **Large central vacuole** — a permanent sac of cell sap; stores water and maintains turgor.

## Found only in animal cells

- **Centriole** — helps form the spindle during cell division.
- Small, temporary **vacuoles**, if any.

\`\`\`svg A simplified plant cell showing the cell wall, membrane, nucleus, chloroplasts and central vacuole.
<svg viewBox="0 0 320 200" role="img" aria-label="Diagram of a plant cell with cell wall, membrane, nucleus, chloroplasts and vacuole">
  <rect x="10" y="15" width="300" height="170" rx="10" fill="#10b981" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <rect x="18" y="23" width="284" height="154" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.5"/>
  <ellipse cx="110" cy="100" rx="34" ry="30" fill="#6366f1" fill-opacity="0.18" stroke="currentColor"/>
  <circle cx="110" cy="100" r="9" fill="currentColor" fill-opacity="0.4"/>
  <ellipse cx="215" cy="70" rx="20" ry="10" fill="#10b981" fill-opacity="0.4" stroke="currentColor"/>
  <ellipse cx="240" cy="120" rx="20" ry="10" fill="#10b981" fill-opacity="0.4" stroke="currentColor"/>
  <rect x="180" y="140" width="110" height="30" rx="6" fill="#38bdf8" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.6"/>
  <g font-size="9" fill="currentColor">
    <text x="60" y="14">cell wall</text>
    <text x="110" y="100" text-anchor="middle" dy="26">nucleus</text>
    <text x="215" y="60" text-anchor="middle">chloroplast</text>
    <text x="235" y="160" text-anchor="middle">vacuole</text>
  </g>
</svg>
\`\`\`

## Prokaryotic, eukaryotic and akaryotic cells

- **Prokaryotic** — no true nucleus and no membrane-bound organelles. *Bacteria.*
- **Eukaryotic** — a true nucleus enclosed in a membrane, plus membrane-bound organelles. *Plants, animals, fungi, protists.*
- **Akaryotic** — having no nucleus at all, and not truly cellular. *Viruses* are described this way.

## Plant versus animal cells

| Feature | Plant cell | Animal cell |
| --- | --- | --- |
| Cell wall | Present (cellulose) | Absent |
| Chloroplasts | Usually present | Absent |
| Vacuole | One large, permanent | Small, temporary, or none |
| Shape | Regular, fixed | Irregular, flexible |
| Centrioles | Usually absent | Present |
| Food store | Starch | Glycogen |

## Tissues, organs and systems

Cells of the same kind form a **tissue**; tissues form an **organ**; organs working together form a **system**; systems form the **organism**. This is the *hierarchy of organisation* — cell → tissue → organ → system → organism.

## Common errors and misconceptions

- **Cell wall vs cell membrane** — the wall is a rigid outer cellulose layer found *only* in plant cells; the membrane is a thin, living layer found in *all* cells. Don't use the terms interchangeably.
- **Every plant cell is green** — false; only cells with chloroplasts (mainly in leaves and green stems) are green. Root cells have no chloroplasts.
- **The nucleus makes energy** — no; the **mitochondrion** releases energy in respiration. The nucleus controls the cell.
- **Bacteria have a nucleus** — they do not; bacteria are prokaryotic, with their genetic material free in the cytoplasm.
- **Chlorophyll and chloroplast are the same** — the chloroplast is the *structure*; chlorophyll is the *green pigment* inside it.`,
          workedExample: `**Question:** A cell viewed under the microscope has a rigid outer boundary, one large vacuole filling most of its volume, and several green bodies in the cytoplasm.

(a) Is it a plant or an animal cell? Give three reasons.
(b) Name one structure you would expect to be absent.
(c) Name the green bodies and state their function.

**Solution**

**(a) A plant cell.** Three features point the same way:
1. **Rigid outer boundary** — only plant cells have a cellulose cell wall outside the membrane; an animal cell has a flexible membrane alone.
2. **One large vacuole** — a permanent central vacuole is characteristic of a mature plant cell; animal vacuoles are small and temporary.
3. **Green bodies** — chloroplasts occur in plant cells but never in animal cells.

All three agree, so the cell is a **plant cell**, and the chloroplasts show it comes from a photosynthetic tissue such as a leaf.

**(b) Absent structure.** **Centrioles** would be expected to be absent, since these occur in animal cells and are not usually found in higher plants.

**(c) The green bodies.** They are **chloroplasts**. They contain the pigment **chlorophyll** and are the **site of photosynthesis**, where light energy is used to make food (glucose) from carbon dioxide and water.

**The lesson:** classification of a cell rests on the *combination* of features. A single shared feature — having a cell membrane — would not decide it; the wall, the vacuole and the chloroplasts together do.`,
          teachingTip:
            "Insist on a wet mount before any diagram is drawn. An onion epidermis peel and a cheek smear stained with iodine put the two cell types side by side under one lens; the straight edges of the walled plant cell against the irregular outline of the animal cell is a distinction no textbook drawing conveys. Have learners draw what they actually see, then compare with the standard diagram. The recurring error to watch for is drawing the cell wall *inside* the membrane — correct it every time. Keep the cell → tissue → organ → system → organism hierarchy on the wall and refer to it whenever structure is discussed.",
          quiz: [
            { prompt: "The cell theory states that all cells arise from", options: ["non-living matter", "pre-existing cells", "chemical reactions", "sunlight"], correctIndex: 1, explanation: "Virchow's contribution: cells come only from other cells." },
            { prompt: "Which organelle is the site of aerobic respiration?", options: ["Ribosome", "Mitochondrion", "Golgi apparatus", "Nucleus"], correctIndex: 1, explanation: "The mitochondrion releases energy from glucose as ATP." },
            { prompt: "The plant cell wall is made mainly of", options: ["protein", "cellulose", "lipid", "chitin"], correctIndex: 1, explanation: "Plant walls are cellulose; fungal walls are chitin." },
            { prompt: "Which structure controls what enters and leaves the cell?", options: ["Cell wall", "Cell membrane", "Cytoplasm", "Vacuole"], correctIndex: 1, explanation: "The membrane is selectively permeable; the wall is fully permeable." },
            { prompt: "Chloroplasts are found in", options: ["animal cells only", "plant cells", "bacteria only", "all cells"], correctIndex: 1, explanation: "Chloroplasts carry out photosynthesis and occur in plant cells." },
            { prompt: "A prokaryotic cell is one that", options: ["has a true nucleus", "lacks a membrane-bound nucleus", "is always green", "has chloroplasts"], correctIndex: 1, explanation: "Bacteria have no nuclear membrane or membrane-bound organelles." },
            { prompt: "Protein synthesis takes place at the", options: ["ribosomes", "vacuole", "cell wall", "centriole"], correctIndex: 0, explanation: "Ribosomes assemble amino acids into proteins." },
            { prompt: "Which is found in animal cells but not plant cells?", options: ["Nucleus", "Centriole", "Mitochondrion", "Ribosome"], correctIndex: 1, explanation: "Centrioles occur in animal cells and help form the spindle." },
            { prompt: "The function of the large central vacuole in a plant cell is to", options: ["carry out photosynthesis", "store cell sap and maintain turgor", "make proteins", "release energy"], correctIndex: 1, explanation: "Turgor from the filled vacuole keeps soft plant tissue firm." },
            { prompt: "Viruses are described as akaryotic because they", options: ["have two nuclei", "have no nucleus and are not truly cellular", "are large cells", "photosynthesise"], correctIndex: 1, explanation: "Akaryotic means without a nucleus; viruses are not cells." },
            { prompt: "Which organelle packages and secretes proteins?", options: ["Golgi apparatus", "Mitochondrion", "Nucleus", "Centriole"], correctIndex: 0, explanation: "The Golgi apparatus modifies and exports proteins." },
            { prompt: "Muscle cells contain many mitochondria because they", options: ["photosynthesise", "need much energy", "store water", "have no nucleus"], correctIndex: 1, explanation: "Contraction demands a high rate of ATP production." },
            { prompt: "The correct hierarchy of organisation is", options: ["organ → cell → tissue → system", "cell → tissue → organ → system", "system → organ → cell → tissue", "tissue → cell → system → organ"], correctIndex: 1, explanation: "Cells form tissues, tissues form organs, organs form systems." },
            { prompt: "Eukaryotic cells differ from prokaryotic cells in having", options: ["no cytoplasm", "a true membrane-bound nucleus", "no membrane", "no DNA"], correctIndex: 1, explanation: "Eukaryotes enclose their genetic material in a nuclear membrane." },
            { prompt: "The jelly-like medium in which organelles sit is the", options: ["nucleus", "cytoplasm", "membrane", "vacuole"], correctIndex: 1, explanation: "Most cell reactions occur in the cytoplasm." },
            { prompt: "Plant cells store food mainly as", options: ["glycogen", "starch", "protein", "chitin"], correctIndex: 1, explanation: "Plants store starch; animals store glycogen." },
            { prompt: "Which structure is fully permeable rather than selectively permeable?", options: ["Cell membrane", "Cell wall", "Nuclear membrane", "Vacuole membrane"], correctIndex: 1, explanation: "The cellulose wall lets substances pass freely; the membrane controls them." },
            { prompt: "The nucleus of a cell", options: ["releases energy", "controls cell activities and division", "makes the cell green", "forms the cell wall"], correctIndex: 1, explanation: "It carries the genetic material and directs the cell." },
            { prompt: "An irregular, flexible shape with no cell wall best describes a", options: ["plant cell", "animal cell", "bacterial cell", "fungal cell"], correctIndex: 1, explanation: "Animal cells lack a wall and so have no fixed shape." },
            { prompt: "Bacteria are examples of", options: ["eukaryotic cells", "prokaryotic cells", "akaryotic particles", "plant cells"], correctIndex: 1, explanation: "Bacteria lack a true nucleus, making them prokaryotic." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "State the three principles of the cell theory.", answerKey: "1. All living things are made of one or more cells. 2. The cell is the basic unit of structure and function in living things. 3. All cells arise from pre-existing cells. Award 3 marks each, allowing minor wording differences.", marks: 9 },
            { type: "SHORT_ANSWER", prompt: "Draw a labelled diagram of a plant cell showing at least five structures.", answerKey: "Expect: cell wall, cell membrane, cytoplasm, nucleus, chloroplast, large vacuole (credit also mitochondrion). Award 1 mark per correct, well-placed label up to 6, and 2 further marks for a clear, proportionate pencil drawing. Deduct 1 mark if the wall is drawn inside the membrane.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "A cell has no nuclear membrane and no mitochondria. It is most likely", options: ["a plant cell", "an animal cell", "a bacterial cell", "a fungal cell"], correctIndex: 2, answerKey: "The absence of a nuclear membrane and membrane-bound organelles identifies a prokaryote — a bacterium. Option C.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Give four structural differences between a plant cell and an animal cell in tabular form.", answerKey: "Any four: cell wall present/absent; chloroplasts present/absent; one large permanent vacuole versus small/none; regular fixed shape versus irregular flexible; centrioles usually absent versus present; starch versus glycogen store. Award 2 marks per complete two-sided difference.", marks: 8 },
            { type: "ESSAY", prompt: "'Structure is related to function in the cell.' Discuss this statement with reference to at least four named organelles, explaining in each case how the structure suits its work.", answerKey: "Four developed examples, 4 marks each: mitochondrion, with a folded inner membrane increasing surface area for respiration; chloroplast, with membranes holding chlorophyll to capture light; cell membrane, a selectively permeable bilayer controlling transport; cell wall, rigid cellulose giving support; nucleus, enclosing genetic material to direct the cell. Award up to 4 further marks for a coherent introduction and conclusion tying structure to function as a principle. A learner who merely lists organelles and functions without addressing adaptation should not exceed 8.", marks: 20 },
          ],
        },
        {
          slug: "movement-across-membrane",
          title: "Movement of Substances Across the Cell Membrane",
          objective:
            "By the end of the unit, learners should be able to describe diffusion, osmosis, facilitated diffusion, active transport, endocytosis and exocytosis, and explain their importance to the cell.",
          estimatedMinutes: 160,
          notes: `## Introduction

- Cells take in what they need (oxygen, water, glucose, mineral salts) and remove wastes (carbon dioxide, urea).
- All this traffic crosses the **cell membrane**, which is *selectively permeable*.
- **This topic:** the **passive** routes that need no energy (diffusion, osmosis, facilitated diffusion) and the **active** routes that cost energy (active transport, endocytosis, exocytosis).

## The selectively permeable membrane

The cell membrane lets some substances through while restricting others. Substances cross it in two broad ways:

- **Passive** processes need **no energy** from the cell: *diffusion, osmosis, facilitated diffusion.* They move substances **down** a concentration gradient (from high to low concentration).
- **Active** processes **use energy (ATP)**: *active transport, endocytosis, exocytosis.* They can move substances **against** a gradient.

## Diffusion

**Diffusion** is the net movement of particles from a region of **higher concentration to a region of lower concentration**, until evenly spread.

- Example: oxygen diffusing from the air spaces in a leaf into the cells; the smell of food spreading across a room.
- No membrane is required, but it occurs across membranes too.

## Osmosis

**Osmosis** is the movement of **water molecules** from a region of **higher water concentration (dilute solution) to a region of lower water concentration (concentrated solution)** across a **selectively permeable membrane**.

\`\`\`svg Osmosis: water moves across a selectively permeable membrane from the dilute side to the concentrated side.
<svg viewBox="0 0 320 170" role="img" aria-label="Osmosis diagram: water moving across a membrane from dilute to concentrated solution">
  <rect x="20" y="30" width="120" height="110" fill="#38bdf8" fill-opacity="0.10" stroke="currentColor"/>
  <rect x="180" y="30" width="120" height="110" fill="#38bdf8" fill-opacity="0.30" stroke="currentColor"/>
  <line x1="150" y1="20" x2="150" y2="150" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="150" y="163" font-size="9" fill="currentColor" text-anchor="middle">selectively permeable membrane</text>
  <text x="80" y="24" font-size="10" fill="currentColor" text-anchor="middle">dilute (more water)</text>
  <text x="240" y="24" font-size="10" fill="currentColor" text-anchor="middle">concentrated (less water)</text>
  <line x1="120" y1="85" x2="180" y2="85" stroke="currentColor" stroke-width="2"/>
  <polygon points="180,85 170,80 170,90" fill="currentColor"/>
  <text x="150" y="78" font-size="9" fill="currentColor" text-anchor="middle">water</text>
</svg>
\`\`\`

**Effects of osmosis on cells:**
- A plant cell in dilute solution gains water and becomes **turgid** (firm) — the wall prevents bursting.
- A plant cell in concentrated solution loses water; the membrane pulls away from the wall — **plasmolysis**.
- An animal cell (no wall) in dilute solution may swell and **burst (lyse)**; in concentrated solution it shrinks (**crenation**).

- Explains why wilting plants recover when watered, and why fresh and salt water affect cells differently.

## Facilitated diffusion

Diffusion of substances that cannot cross the membrane easily (such as glucose) **through special protein channels**, still down the gradient and still without energy.

## Active transport

The movement of substances **against** the concentration gradient (from low to high), using **energy (ATP)** and carrier proteins.

- Example: root hair cells absorbing mineral ions from the soil, even though the ions are more concentrated inside the cell than outside.

## Endocytosis and exocytosis

For particles too large to cross the membrane directly:

- **Endocytosis** — the membrane folds inward to take material **into** the cell.
  - *Phagocytosis* — taking in solid particles (e.g. a white blood cell engulfing bacteria).
  - *Pinocytosis* — taking in liquid droplets.
- **Exocytosis** — the membrane fuses with a vesicle to release material **out of** the cell (e.g. secreting enzymes).

## Summary

| Process | Energy needed? | Direction | Moves |
| --- | --- | --- | --- |
| Diffusion | No | High → low | Any particle |
| Osmosis | No | High → low water | Water only |
| Facilitated diffusion | No | High → low | Via protein channel |
| Active transport | Yes | Low → high | Against gradient |
| Endo/exocytosis | Yes | In / out | Large particles |

## Common errors and misconceptions

- **Osmosis is not just "diffusion of water"** loosely — it is specifically the movement of **water** across a **selectively permeable membrane** from a dilute to a concentrated solution.
- **"Water moves to where there is more water"** — the opposite: water moves *from* the region of higher water concentration (dilute) *to* lower water concentration (concentrated).
- **Diffusion needs energy** — it does not; only *active* transport, endocytosis and exocytosis use ATP.
- **Active transport goes down the gradient** — no; its whole purpose is to move substances *against* the gradient (low → high), which is why it costs energy.`,
          workedExample: `**Question:** A piece of fresh cassava is placed in strong salt solution for an hour. Explain, in terms of water movement, what happens to its cells and to the cassava as a whole. What would happen instead in pure water?

**Solution**

*Step 1 — compare the water concentrations.*
The salt solution is **concentrated** — it has a **low water concentration**. The cell sap inside the cassava cells is more **dilute** — a **higher water concentration**.

*Step 2 — apply osmosis.*
Water moves by osmosis from a region of higher water concentration to a region of lower water concentration across the selectively permeable membrane. So water leaves the cells and passes **out** into the salt solution.

*Step 3 — the effect on the cells.*
As the cells lose water, the vacuole shrinks and the membrane pulls away from the cell wall. The cells become **flaccid** and, if enough water is lost, **plasmolysed**.

*Step 4 — the effect on the cassava.*
Losing water from all its cells, the piece of cassava becomes **soft and limp**, and lighter in mass. This is the same reason vegetables go limp in salty water and why salt is used to draw water out of food for preservation.

*Step 5 — what happens in pure water.*
Pure water has a **higher water concentration** than the cell sap, so water moves **into** the cells by osmosis. The vacuoles fill, the cells become **turgid**, and the piece of cassava becomes **firm and slightly heavier**. Because plant cells have a rigid wall, they do not burst.

**Answer:** in salt solution the cells lose water and become flaccid/plasmolysed and the cassava goes limp; in pure water the cells gain water and become turgid and the cassava firms up. In both cases the driving process is **osmosis**.`,
          teachingTip:
            "Osmosis is best taught with something the class can watch. Leave a strip of fresh cassava or potato in strong salt solution and another in plain water for the lesson; at the end, the salt strip is limp and the water strip is firm, and no explanation is needed for what osmosis does. Draw out the water-concentration language carefully, because learners confuse 'concentrated solution' (little water) with 'more concentrated in water'. Insist they always state which side has more water and let the water follow. Separate the passive from the active processes with the single question 'does the cell spend energy?' — everything moving down a gradient is free; moving against a gradient, and swallowing large particles, costs ATP.",
          quiz: [
            { prompt: "Diffusion is the movement of particles from", options: ["low to high concentration", "high to low concentration", "cold to hot regions", "small to large cells"], correctIndex: 1, explanation: "Particles spread from where they are concentrated to where they are not." },
            { prompt: "Osmosis is the movement of", options: ["any particle across a membrane", "water across a selectively permeable membrane", "salt into a cell", "energy through the cell"], correctIndex: 1, explanation: "Osmosis specifically moves water across a selectively permeable membrane." },
            { prompt: "Which process requires energy from the cell?", options: ["Diffusion", "Osmosis", "Active transport", "Facilitated diffusion"], correctIndex: 2, explanation: "Active transport uses ATP to move substances against the gradient." },
            { prompt: "Water moves by osmosis from a solution with", options: ["low water concentration to high", "high water concentration to low", "no water to some water", "high salt to low salt directly"], correctIndex: 1, explanation: "Water moves from the more dilute (more water) to the more concentrated (less water) side." },
            { prompt: "A plant cell placed in pure water becomes", options: ["plasmolysed", "turgid", "crenated", "lysed"], correctIndex: 1, explanation: "It gains water, the vacuole fills, and the cell becomes firm (turgid)." },
            { prompt: "An animal cell placed in pure water may", options: ["become turgid", "burst (lyse)", "become plasmolysed", "gain a cell wall"], correctIndex: 1, explanation: "With no wall, an animal cell can swell and burst as water enters." },
            { prompt: "Root hair cells absorb mineral ions from the soil mainly by", options: ["osmosis", "diffusion", "active transport", "exocytosis"], correctIndex: 2, explanation: "Ions are taken up against the gradient, which needs active transport." },
            { prompt: "A white blood cell engulfing bacteria is an example of", options: ["osmosis", "phagocytosis", "diffusion", "plasmolysis"], correctIndex: 1, explanation: "Phagocytosis is endocytosis of solid particles." },
            { prompt: "Which process moves large particles OUT of the cell?", options: ["Endocytosis", "Exocytosis", "Osmosis", "Diffusion"], correctIndex: 1, explanation: "Exocytosis releases material from the cell by vesicle fusion." },
            { prompt: "Plasmolysis occurs when a plant cell is placed in", options: ["pure water", "a dilute solution", "a concentrated solution", "air"], correctIndex: 2, explanation: "Water leaves the cell and the membrane pulls from the wall." },
            { prompt: "Which of these is a passive process?", options: ["Active transport", "Endocytosis", "Diffusion", "Exocytosis"], correctIndex: 2, explanation: "Diffusion needs no energy from the cell." },
            { prompt: "Facilitated diffusion differs from simple diffusion in that it", options: ["needs energy", "uses protein channels", "moves against the gradient", "only moves water"], correctIndex: 1, explanation: "It uses membrane proteins but still moves down the gradient without energy." },
            { prompt: "A turgid plant cell is one that is", options: ["firm and full of water", "limp and short of water", "dead", "without a nucleus"], correctIndex: 0, explanation: "Turgor comes from the vacuole filled with water pressing on the wall." },
            { prompt: "Salting fish to preserve it works because salt", options: ["adds water to the cells", "draws water out of the cells by osmosis", "kills cells with heat", "increases diffusion of oxygen"], correctIndex: 1, explanation: "The concentrated salt draws water out, so microbes cannot grow." },
            { prompt: "Which substance moves during osmosis?", options: ["Salt", "Water", "Oxygen", "Glucose"], correctIndex: 1, explanation: "Osmosis moves water molecules only." },
            { prompt: "Active transport moves substances", options: ["down the concentration gradient", "against the concentration gradient", "only when the cell is dead", "without any proteins"], correctIndex: 1, explanation: "It moves substances from low to high concentration using energy." },
            { prompt: "The taking in of liquid droplets by a cell is called", options: ["phagocytosis", "pinocytosis", "exocytosis", "osmosis"], correctIndex: 1, explanation: "Pinocytosis is endocytosis of liquids." },
            { prompt: "A wilting plant recovers when watered because water enters its cells by", options: ["active transport", "osmosis", "exocytosis", "combustion"], correctIndex: 1, explanation: "Water moves into the cells by osmosis, restoring turgor." },
            { prompt: "Which process does NOT require a membrane?", options: ["Osmosis", "Simple diffusion in air", "Active transport", "Facilitated diffusion"], correctIndex: 1, explanation: "Diffusion happens in air too; osmosis and the others involve the membrane." },
            { prompt: "An animal cell in a concentrated solution will", options: ["swell", "shrink (crenate)", "become turgid", "gain a wall"], correctIndex: 1, explanation: "Water leaves the cell, so it shrinks; this is crenation." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Define diffusion, osmosis and active transport, and state whether each requires energy.", answerKey: "Diffusion: net movement of particles from high to low concentration; no energy. Osmosis: movement of water across a selectively permeable membrane from high to low water concentration; no energy. Active transport: movement of substances against the concentration gradient using ATP and carrier proteins; energy required. Award 2 marks per definition and 1 per correct energy statement.", marks: 9 },
            { type: "SHORT_ANSWER", prompt: "Explain what happens to a red blood cell placed in (a) pure water and (b) a concentrated salt solution.", answerKey: "(a) Pure water has a higher water concentration, so water enters the cell by osmosis; with no cell wall the cell swells and may burst (lyse). (b) The concentrated solution has a lower water concentration, so water leaves the cell by osmosis and the cell shrinks (crenation). Award 4 marks for each case, requiring reference to osmosis and the direction of water movement.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "Which process would a root hair cell use to absorb nitrate ions that are already more concentrated inside the cell than in the soil?", options: ["Osmosis", "Simple diffusion", "Active transport", "Facilitated diffusion"], correctIndex: 2, answerKey: "Moving ions from low (soil) to high (cell) concentration is against the gradient and requires active transport. Option C.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Distinguish between endocytosis and exocytosis, giving one example of each.", answerKey: "Endocytosis: the membrane folds inward to take large material into the cell — e.g. a white blood cell engulfing bacteria (phagocytosis). Exocytosis: a vesicle fuses with the membrane to release material out of the cell — e.g. a gland cell secreting enzymes. Both require energy. Award 3 marks per process with a correct example.", marks: 6 },
            { type: "ESSAY", prompt: "A farmer notices that applying too much fertiliser to young rice plants causes them to wilt rather than grow. Explain this observation in terms of osmosis, and advise the farmer on correct practice.", answerKey: "Heavy fertiliser makes the soil solution concentrated (low water concentration), lower than the water concentration inside the root cells. Water therefore moves out of the root cells by osmosis into the soil, the cells lose turgor and the plant wilts — an effect sometimes called fertiliser 'scorch' or 'burn'. Advice: apply fertiliser in correct, measured amounts, keep it off direct contact with young roots, and water well so the soil solution stays dilute enough for water to enter the roots. Award 5 marks for the osmosis explanation with correct direction of water movement, 3 for linking it to wilting, 4 for sound, practical advice, and 3 for clarity. A learner who explains the wilting without invoking osmosis and water-concentration should not exceed 6.", marks: 15 },
          ],
        },
      ],
    },
  ],
};
