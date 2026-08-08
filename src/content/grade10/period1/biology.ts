import type { SubjectContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology (Grades 10-12).
// Grade 10, Semester One, Period I: Introduction to Biology and its branches;
// contributors to biology; characteristics of living things; Euglena; the light
// microscope; the cell as the basic unit of life; and movement of substances
// across the cell membrane. Every topic's notes are built from a published,
// approved source (OpenStax, LibreTexts) cited above its slug.
export const biology: SubjectContent = {
  slug: "biology",
  name: "Biology",
  shortName: "Biology",
  description:
    "The study of life: what biology is, its major contributors, the characteristics of living things, the cell as the basic unit of life, and how substances move across the cell membrane.",
  accent: "emerald",
  sortOrder: 3,
  teacherCode: "BIO-10-6135",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "Introduction to Biology and the Cell",
      summary:
        "Period I of the MoE Grade 10 Biology syllabus. Learners define biology and its branches, meet its major contributors, distinguish living from non-living things, study Euglena, use the light microscope, examine the cell as the basic unit of life, and study how substances move across the cell membrane.",
      topics: [
        // source: OpenStax — Biology 2e, 1.2 Themes and Concepts of Biology (https://openstax.org/books/biology-2e/pages/1-2-themes-and-concepts-of-biology)
        {
          slug: "introduction-to-biology",
          title: "Introduction to Biology and Its Branches",
          objective:
            "By the end of the topic, learners should be able to define biology, explain that it is a science built by the scientific method, and name and describe its major branches including botany and zoology.",
          estimatedMinutes: 120,
          notes: `## What biology is

- **Biology** — the scientific study of life: the structure, function, growth, origin, evolution and distribution of living organisms.
- The word comes from Greek *bios* (life) and *logos* (study).
- Biology is a **natural science**: knowledge is built by observing, measuring and testing, not by opinion.

## Biology is a science — the scientific method

Biologists build knowledge by a repeatable process:

1. **Observation** — notice something in nature.
2. **Question** — ask why or how it happens.
3. **Hypothesis** — a testable, tentative explanation.
4. **Prediction** — state what should happen if the hypothesis is true.
5. **Experiment** — a fair test that changes one **variable** while keeping others constant, with a **control** for comparison.
6. **Analyse results** — record data in tables and graphs.
7. **Conclusion** — accept or reject the hypothesis and share the findings so others can repeat the test.

- A good experiment is **fair** (one variable), **repeatable**, and uses a **control**.

## The two great branches

- **Botany** — the study of plants.
- **Zoology** — the study of animals.

## Other major branches (subdisciplines)

| Branch | What it studies |
| --- | --- |
| **Microbiology** | Micro-organisms (bacteria, protists, fungi) |
| **Molecular biology / biochemistry** | Molecules and reactions of life |
| **Genetics** | Heredity and variation |
| **Physiology** | How living parts function |
| **Anatomy / morphology** | Internal and external structure |
| **Ecology** | Organisms in their environment |
| **Cytology** | Cells |
| **Neurobiology** | The nervous system |
| **Paleontology** | Fossils and ancient life |
| **Biotechnology** | Using organisms in industry |

## Branches linked to disease (relevant to STIs and public health)

- **Microbiology** — micro-organisms in general.
- **Bacteriology** — bacteria (e.g. gonorrhoea, syphilis).
- **Virology** — viruses (e.g. HIV/AIDS).
- **Parasitology** — parasites (e.g. *Plasmodium*, worms).

## Why biology matters in Liberia

- Underpins agriculture, public health, forestry and fisheries.
- Basis for controlling malaria, cholera, Lassa fever and Ebola.
- Disease transmission, soil fertility and reproduction bear directly on food security.`,
          workedExample: `**Question:** A learner notices that maize plants growing at the shaded edge of a field are shorter than those in the open. Design a fair test of the idea that light affects the height of maize, and identify which branches of biology the study draws on.

**Solution**

*Step 1 — Observation.* Maize in shade is shorter than maize in the open.

*Step 2 — Question.* Does the amount of light affect the height of maize plants?

*Step 3 — Hypothesis.* Maize plants given more light grow taller than maize given less light.

*Step 4 — Prediction.* If light increases height, then plants in full sun will be taller after four weeks than identical plants kept in shade.

*Step 5 — Experiment (fair test).*
- **Variable changed:** amount of light (full sun vs shade).
- **Controlled (kept the same):** same seed variety, soil, pot size, water, temperature.
- **Control group:** plants grown in normal daylight as the standard of comparison.
- Grow several plants in each condition (repeats), measure height weekly.

*Step 6 — Results and conclusion.* Record heights in a table, plot a graph, and decide whether the sun-grown plants are reliably taller. Repeat before accepting the conclusion.

*Which branches?* The study uses **botany** (plant growth), **physiology** (how light drives growth) and, because it happens in a field community, **ecology**.

**Answer:** the fair test changes only light while controlling everything else and includes a control group; it draws on botany, physiology and ecology.`,
          quiz: [
            { prompt: "Biology is best defined as the study of", options: ["rocks and minerals", "living organisms", "chemical elements", "the weather"], correctIndex: 1, explanation: "Biology is the scientific study of life." },
            { prompt: "The word 'biology' comes from Greek words meaning", options: ["cell and study", "life and study", "animal and plant", "body and function"], correctIndex: 1, explanation: "Bios = life, logos = study." },
            { prompt: "The branch of biology that studies plants is", options: ["Zoology", "Botany", "Ecology", "Genetics"], correctIndex: 1, explanation: "Botany is the study of plants; zoology studies animals." },
            { prompt: "The study of animals is called", options: ["Botany", "Zoology", "Microbiology", "Physiology"], correctIndex: 1, explanation: "Zoology is the study of animals." },
            { prompt: "Which branch studies micro-organisms?", options: ["Microbiology", "Anatomy", "Cytology", "Ecology"], correctIndex: 0, explanation: "Microbiology studies bacteria, protists and other microbes." },
            { prompt: "In an experiment, the factor that is deliberately changed is the", options: ["control", "variable", "conclusion", "hypothesis"], correctIndex: 1, explanation: "The variable is the one factor changed in a fair test." },
            { prompt: "A testable, tentative explanation is called a", options: ["conclusion", "hypothesis", "result", "theory of everything"], correctIndex: 1, explanation: "A hypothesis is a proposed, testable answer." },
            { prompt: "A control in an experiment is used as", options: ["a second variable", "the standard for comparison", "the observation", "the graph"], correctIndex: 1, explanation: "The control is the baseline against which results are compared." },
            { prompt: "The study of heredity and variation is", options: ["Genetics", "Ecology", "Anatomy", "Botany"], correctIndex: 0, explanation: "Genetics deals with inheritance." },
            { prompt: "The branch that studies how living parts function is", options: ["Anatomy", "Physiology", "Cytology", "Taxonomy"], correctIndex: 1, explanation: "Physiology studies function; anatomy studies structure." },
            { prompt: "Ecology is the study of", options: ["cells", "organisms in their environment", "fossils", "diseases"], correctIndex: 1, explanation: "Ecology examines organisms and their surroundings." },
            { prompt: "The study of cells is called", options: ["Cytology", "Virology", "Zoology", "Parasitology"], correctIndex: 0, explanation: "Cytology is the study of cells." },
            { prompt: "Which branch deals specifically with viruses?", options: ["Bacteriology", "Virology", "Parasitology", "Botany"], correctIndex: 1, explanation: "Virology is the study of viruses such as HIV." },
            { prompt: "The study of parasites such as Plasmodium and worms is", options: ["Parasitology", "Cytology", "Physiology", "Ecology"], correctIndex: 0, explanation: "Parasitology deals with parasites." },
            { prompt: "A good scientific experiment must be", options: ["done once only", "fair, repeatable and have a control", "based on opinion", "kept secret"], correctIndex: 1, explanation: "Fair testing, repetition and a control give reliable results." },
            { prompt: "The study of fossils and ancient life is", options: ["Paleontology", "Anatomy", "Genetics", "Virology"], correctIndex: 0, explanation: "Paleontology studies fossils." },
            { prompt: "Using living organisms in industry is called", options: ["Biotechnology", "Ecology", "Cytology", "Botany"], correctIndex: 0, explanation: "Biotechnology applies organisms in industry and medicine." },
            { prompt: "Which is NOT a branch of biology?", options: ["Zoology", "Botany", "Astronomy", "Genetics"], correctIndex: 2, explanation: "Astronomy studies stars and space, not life." },
            { prompt: "The first step of the scientific method is usually", options: ["conclusion", "observation", "publishing", "experimenting"], correctIndex: 1, explanation: "Investigation starts with observing something." },
            { prompt: "Bacteriology is best described as the study of", options: ["bacteria", "viruses", "worms", "fungi only"], correctIndex: 0, explanation: "Bacteriology deals with bacteria." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Define biology and state two reasons why biological knowledge is important in everyday life.", answerKey: "Biology is the scientific study of living organisms (their structure, function, growth and interactions). Award 2 marks. Two reasons: e.g. controlling disease/public health, improving agriculture and food security, managing forests/fisheries — 2 marks each. Maximum 6.", marks: 6 },
            { type: "SHORT_ANSWER", prompt: "Name four branches of biology and state what each studies.", answerKey: "Any four from botany (plants), zoology (animals), microbiology (microbes), genetics (heredity), physiology (function), anatomy (structure), ecology (organisms and environment), cytology (cells), virology (viruses), parasitology (parasites). 1 mark for branch + 1 for description.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "Which pair correctly matches branch to subject?", options: ["Botany – animals", "Zoology – plants", "Virology – viruses", "Genetics – cells"], correctIndex: 2, answerKey: "Virology studies viruses. Option C.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Put the steps of the scientific method in order and explain the purpose of a control.", answerKey: "Observation, question, hypothesis, prediction, experiment, analyse results, conclusion (allow minor variation). 4 marks for correct order. The control is the standard of comparison in which the tested variable is not changed, so any difference can be attributed to that variable — 3 marks.", marks: 7 },
            { type: "ESSAY", prompt: "Explain how biology contributes to national development in Liberia, referring to agriculture, public health and natural-resource management, with a specific example under each.", answerKey: "Agriculture: crop/animal biology, soil fertility, pest control raise food production — e.g. improved rice varieties (4). Public health: knowledge of transmission underpins malaria, cholera or Ebola control — e.g. surveillance/prevention (4). Natural resources: guides sustainable forests/fisheries — e.g. avoiding over-fishing (4). Up to 3 marks for organisation and concrete examples. Without concrete examples, cap at 8.", marks: 15 },
          ],
        },
        // source: LibreTexts — Microbiology (Boundless), 1.3D: Modern Microbiology (https://bio.libretexts.org/Bookshelves/Microbiology/Microbiology_(Boundless)/01:_Introduction_to_Microbiology/1.03:_The_Science_of_Microbiology/1.3D:_Modern_Microbiology)
        {
          slug: "contributors-to-biology",
          title: "Major Contributors to the Development of Biology",
          objective:
            "By the end of the topic, learners should be able to name major contributors to biology — Aristotle, Linnaeus, Pasteur, Koch and Mendel — state their nationality where known, and describe their major contributions.",
          estimatedMinutes: 100,
          notes: `## Why study the contributors

- Modern biology was built by many people over centuries.
- Each contributor added a key idea: classification, naming, the germ theory, or inheritance.

## The major contributors

| Scientist | Nationality | Major contribution |
| --- | --- | --- |
| **Aristotle** | Greek | Early observation and classification of animals; one of the first to group living things — often called the "father of biology" |
| **Carl (Carolus) Linnaeus** | Swedish | The **binomial system** of naming (genus + species) and the modern ranks of classification |
| **Louis Pasteur** | French | **Disproved spontaneous generation**; **germ theory** of disease; **pasteurisation**; vaccines for anthrax, fowl cholera and rabies |
| **Robert Koch** | German | Proved **specific microbes cause specific diseases**; **Koch's postulates**; isolated *Mycobacterium tuberculosis* (tuberculosis) |
| **Gregor Mendel** | Austrian | Laws of **inheritance** from experiments on pea plants; the "father of genetics" (published 1866) |

## Louis Pasteur — germ theory and spontaneous generation

- **Spontaneous generation** was the old belief that living things arise from non-living matter (e.g. maggots from rotting meat "by themselves").
- Pasteur's experiments (swan-neck flasks) showed that microbes come from other microbes in the air, **disproving spontaneous generation**.
- He showed micro-organisms cause fermentation and disease — the **germ theory of disease**.
- **Pasteurisation** — gently heating liquids (e.g. milk) to kill microbes and preserve food.

## Robert Koch — one microbe, one disease

- Proved that a **particular organism** causes a **particular disease**.
- **Koch's postulates** — the rules used to link a microbe to a disease.
- Isolated the bacteria of **tuberculosis** and studied anthrax and cholera.

## Gregor Mendel — the father of genetics

- Bred **pea plants** and counted the offspring carefully.
- Discovered that characteristics pass to offspring in predictable ratios — the basis of **genetics**.

## Common errors and misconceptions

- **Pasteur invented antibiotics** — no; he developed vaccines and pasteurisation and stated the germ theory.
- **Koch and Pasteur are the same idea** — Pasteur disproved spontaneous generation and stated the germ theory broadly; Koch proved *specific* microbes cause *specific* diseases and gave the postulates.
- **Linnaeus discovered genes** — no; that was Mendel. Linnaeus devised naming and classification.`,
          workedExample: `**Question:** Match each contribution to the scientist and explain the reasoning: (a) a two-part Latin name for every species; (b) proof that boiled broth stays clear in a sealed flask, disproving that life appears from nothing; (c) rules linking one microbe to one disease; (d) predictable ratios of tall and short pea plants.

**Solution**

**(a) Two-part Latin name → Carl Linnaeus.** The binomial system (genus + species, e.g. *Homo sapiens*) and the ranks of classification are Linnaeus's work.

**(b) Boiled broth stays clear → Louis Pasteur.** His swan-neck flask experiment showed microbes enter from the air, not from the broth itself, **disproving spontaneous generation** and supporting the germ theory.

**(c) Rules linking one microbe to one disease → Robert Koch.** These are **Koch's postulates**; he used them when isolating the tuberculosis bacterium.

**(d) Ratios of tall and short peas → Gregor Mendel.** His counted pea-plant crosses revealed the laws of inheritance, founding genetics.

**Answer:** (a) Linnaeus, (b) Pasteur, (c) Koch, (d) Mendel — each identified by their signature contribution.`,
          quiz: [
            { prompt: "Who is often called the 'father of biology'?", options: ["Mendel", "Aristotle", "Koch", "Pasteur"], correctIndex: 1, explanation: "Aristotle's early classification of animals earns him the title." },
            { prompt: "The binomial naming system was devised by", options: ["Linnaeus", "Pasteur", "Mendel", "Aristotle"], correctIndex: 0, explanation: "Carl Linnaeus introduced genus + species naming." },
            { prompt: "The germ theory of disease is associated with", options: ["Aristotle", "Louis Pasteur", "Linnaeus", "Mendel"], correctIndex: 1, explanation: "Pasteur showed microbes cause disease." },
            { prompt: "Who disproved the theory of spontaneous generation?", options: ["Koch", "Mendel", "Pasteur", "Aristotle"], correctIndex: 2, explanation: "Pasteur's flask experiments disproved it." },
            { prompt: "Koch's postulates are used to", options: ["name species", "link a specific microbe to a specific disease", "measure cells", "classify plants"], correctIndex: 1, explanation: "They connect one pathogen to one disease." },
            { prompt: "The father of genetics is", options: ["Gregor Mendel", "Robert Koch", "Aristotle", "Linnaeus"], correctIndex: 0, explanation: "Mendel discovered the laws of inheritance." },
            { prompt: "Mendel carried out his famous experiments on", options: ["mice", "pea plants", "bacteria", "fruit flies"], correctIndex: 1, explanation: "He bred and counted pea plants." },
            { prompt: "Pasteurisation is the process of", options: ["freezing food", "heating liquids to kill microbes", "adding salt", "drying meat"], correctIndex: 1, explanation: "Gentle heating kills microbes and preserves food." },
            { prompt: "Robert Koch isolated the bacterium that causes", options: ["malaria", "tuberculosis", "AIDS", "cholera only"], correctIndex: 1, explanation: "He isolated Mycobacterium tuberculosis." },
            { prompt: "What nationality was Louis Pasteur?", options: ["German", "French", "Swedish", "Greek"], correctIndex: 1, explanation: "Pasteur was French." },
            { prompt: "Carl Linnaeus was", options: ["Austrian", "Swedish", "French", "German"], correctIndex: 1, explanation: "Linnaeus was a Swedish naturalist." },
            { prompt: "Spontaneous generation was the belief that", options: ["life comes from other life", "living things arise from non-living matter", "cells come from cells", "diseases spread by microbes"], correctIndex: 1, explanation: "It claimed life appears from non-living material." },
            { prompt: "Which scientist developed vaccines against anthrax and rabies?", options: ["Koch", "Pasteur", "Mendel", "Aristotle"], correctIndex: 1, explanation: "Pasteur developed several vaccines." },
            { prompt: "Aristotle's main contribution was", options: ["the germ theory", "early classification of animals", "the laws of inheritance", "pasteurisation"], correctIndex: 1, explanation: "He observed and grouped animals." },
            { prompt: "The scientist who proved specific diseases have specific microbial causes was", options: ["Robert Koch", "Gregor Mendel", "Carl Linnaeus", "Aristotle"], correctIndex: 0, explanation: "Koch established one-microbe-one-disease." },
            { prompt: "Mendel published his results in", options: ["1665", "1866", "1953", "2000"], correctIndex: 1, explanation: "His paper appeared in 1866." },
            { prompt: "Which pair is correctly matched?", options: ["Linnaeus – germ theory", "Mendel – inheritance", "Pasteur – classification", "Koch – naming"], correctIndex: 1, explanation: "Mendel is linked to inheritance." },
            { prompt: "The idea that living things can be sorted into named groups began notably with", options: ["Pasteur", "Aristotle", "Koch", "Mendel"], correctIndex: 1, explanation: "Aristotle was an early classifier." },
            { prompt: "Robert Koch was", options: ["French", "German", "Austrian", "Swedish"], correctIndex: 1, explanation: "Koch was German." },
            { prompt: "Gregor Mendel's nationality was", options: ["Austrian", "French", "Greek", "Swedish"], correctIndex: 0, explanation: "Mendel was Austrian." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Name the scientist associated with each: (a) binomial naming; (b) germ theory / disproving spontaneous generation; (c) laws of inheritance; (d) Koch's postulates.", answerKey: "(a) Linnaeus; (b) Pasteur; (c) Mendel; (d) Koch. 2 marks each.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "Which scientist is credited with disproving spontaneous generation?", options: ["Aristotle", "Mendel", "Pasteur", "Linnaeus"], correctIndex: 2, answerKey: "Pasteur. Option C.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "State two contributions of Louis Pasteur to biology.", answerKey: "Any two: disproved spontaneous generation; germ theory of disease; pasteurisation; vaccines (anthrax, fowl cholera, rabies). 2 marks each.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Explain how Robert Koch's work differed from Pasteur's.", answerKey: "Pasteur showed broadly that microbes cause disease and disproved spontaneous generation; Koch proved that a specific microbe causes a specific disease and gave the postulates and isolated the TB bacterium. Award marks for the specific-vs-general distinction.", marks: 4 },
            { type: "ESSAY", prompt: "Discuss how the work of Pasteur, Koch and Mendel each transformed the way people understood disease and inheritance.", answerKey: "Pasteur: germ theory and disproof of spontaneous generation changed views of disease and food preservation (4). Koch: specific microbes cause specific diseases; postulates enabled diagnosis (4). Mendel: inheritance follows predictable laws, founding genetics (4). Up to 3 marks for coherence. A bare list of names without their impact should not exceed 7.", marks: 15 },
          ],
        },
        // source: OpenStax — Biology 2e, 1.2 Themes and Concepts of Biology (Properties of Life) (https://openstax.org/books/biology-2e/pages/1-2-themes-and-concepts-of-biology)
        {
          slug: "characteristics-of-living-things",
          title: "Characteristics of Living Things",
          objective:
            "By the end of the topic, learners should be able to list and explain the characteristics that distinguish living things from non-living things, and apply them to decide whether something is alive.",
          estimatedMinutes: 100,
          notes: `## Living versus non-living

- Living things share a set of properties that non-living objects do not all show together.
- To be classed as **living**, an organism must show **all** the life processes.

## The properties of life (OpenStax)

1. **Order** — organisms are highly organised, made of one or more **cells**.
2. **Sensitivity / response to stimuli** — organisms respond to their environment (movement *towards* a stimulus is positive, *away* is negative).
3. **Reproduction** — organisms produce new individuals; DNA is copied and passed on.
4. **Growth and development** — controlled by genes; a permanent increase in size and dry mass.
5. **Regulation / homeostasis** — keeping a stable internal environment (steady state).
6. **Energy processing (metabolism)** — all organisms use a source of energy for their activities.
7. **Adaptation / evolution** — populations are suited to their environment and change over time.

## The MRS GREN life processes

A school memory aid for the everyday life processes:

- **M**ovement — living things move all or part of themselves.
- **R**espiration — releasing energy from food.
- **S**ensitivity (irritability) — responding to stimuli.
- **G**rowth — a permanent increase in size and dry mass.
- **R**eproduction — producing new individuals of the same kind.
- **E**xcretion — removing metabolic waste.
- **N**utrition — taking in and using materials for energy and growth.

## Applying the test

- A motor car moves and uses fuel but does **not** grow, reproduce, respond or excrete waste of metabolism — **not alive**.
- A candle flame moves, uses fuel and gives off waste gases, yet does not grow from within, reproduce or respond — **not alive**.
- A crystal "grows" by adding material on the outside, not by internal processes — **not alive**.

## Common errors and misconceptions

- **"It moves, so it is alive"** — one property is not enough; a car moves. **All** the processes must be present.
- **Growth = swelling** — a balloon or a soaked bean swells with water; true growth is a permanent increase in **dry mass**.
- **Non-living things never show any life process** — some show one or two (a flame uses energy), but never the full set.
- **Homeostasis is optional** — keeping a steady internal state is a key sign of life.`,
          workedExample: `**Question:** A learner argues that a burning candle is alive because "it moves, it feeds on wax, it breathes in air, it grows taller flames and it gives off smoke." Evaluate this claim using the characteristics of living things.

**Solution**

Test the candle against each property:

- **Movement** — the flame flickers, so it appears to move. (Weak evidence.)
- **Energy processing / "feeding"** — it does consume wax and oxygen, but this is **burning (combustion)**, a chemical reaction, not **nutrition** that builds the body's own materials.
- **"Breathing"** — it uses oxygen, but this is not **respiration**, which releases energy from food inside cells.
- **"Growth"** — a bigger flame is not permanent growth in dry mass; the candle actually gets **smaller**.
- **Response to stimuli** — the flame does not respond in a controlled way to its environment.
- **Reproduction** — a candle cannot make another candle.
- **Excretion / homeostasis** — smoke is a product of burning, not metabolic excretion; the flame keeps no steady internal state.
- **Order (cells)** — the candle is **not made of cells**.

*Conclusion:* the candle shows only superficial resemblances and fails most tests — no cells, no true nutrition or respiration, no reproduction, no homeostasis.

**Answer:** the candle is **non-living**. A thing is alive only when it shows **all** the characteristics of life, and the candle does not.`,
          quiz: [
            { prompt: "To be classed as living, an organism must show", options: ["at least one life process", "all the characteristics of life", "only movement", "only growth"], correctIndex: 1, explanation: "All life processes must be present together." },
            { prompt: "In MRS GREN, the letter N stands for", options: ["Nerves", "Nutrition", "Nucleus", "Nitrogen"], correctIndex: 1, explanation: "N = nutrition." },
            { prompt: "Responding to a stimulus is called", options: ["nutrition", "sensitivity", "excretion", "reproduction"], correctIndex: 1, explanation: "Sensitivity (irritability) is responding to stimuli." },
            { prompt: "Growth is best defined as", options: ["any swelling", "a permanent increase in size and dry mass", "movement of the body", "taking in water"], correctIndex: 1, explanation: "Growth adds dry mass permanently." },
            { prompt: "Releasing energy from food is", options: ["respiration", "excretion", "reproduction", "growth"], correctIndex: 0, explanation: "Respiration releases energy from food." },
            { prompt: "Removing metabolic waste from the body is", options: ["nutrition", "excretion", "movement", "sensitivity"], correctIndex: 1, explanation: "Excretion removes waste made by metabolism." },
            { prompt: "Keeping a stable internal environment is called", options: ["homeostasis", "reproduction", "adaptation", "diffusion"], correctIndex: 0, explanation: "Homeostasis means steady state." },
            { prompt: "Which is a property of life listed by OpenStax?", options: ["Combustion", "Order (made of cells)", "Melting", "Rusting"], correctIndex: 1, explanation: "Organisms are ordered and made of cells." },
            { prompt: "A car is not alive mainly because it does not", options: ["move", "use fuel", "grow, reproduce or respond", "make noise"], correctIndex: 2, explanation: "It fails several life processes." },
            { prompt: "Movement towards a stimulus is described as", options: ["positive", "negative", "neutral", "random"], correctIndex: 0, explanation: "Toward is positive; away is negative." },
            { prompt: "Producing new individuals of the same kind is", options: ["reproduction", "growth", "nutrition", "excretion"], correctIndex: 0, explanation: "Reproduction produces offspring." },
            { prompt: "Which shows that a bean swelling in water is NOT growth?", options: ["It gains dry mass", "It only gains water, not dry mass", "It reproduces", "It respires"], correctIndex: 1, explanation: "Growth is a permanent increase in dry mass, not water uptake." },
            { prompt: "All organisms need a source of energy for", options: ["metabolism", "rusting", "melting", "burning only"], correctIndex: 0, explanation: "Energy processing (metabolism) is a property of life." },
            { prompt: "A candle flame is non-living because it", options: ["is not made of cells", "gives off smoke", "is hot", "flickers"], correctIndex: 0, explanation: "Living things are made of cells; a flame is not." },
            { prompt: "Which characteristic explains a plant bending toward light?", options: ["Sensitivity", "Excretion", "Reproduction", "Nutrition"], correctIndex: 0, explanation: "Bending toward light is a response to a stimulus." },
            { prompt: "The property of life that passes DNA to offspring is", options: ["reproduction", "homeostasis", "movement", "excretion"], correctIndex: 0, explanation: "Reproduction copies and passes on DNA." },
            { prompt: "Which is the correct expansion of MRS GREN's 'G'?", options: ["Gas", "Growth", "Germination", "Gravity"], correctIndex: 1, explanation: "G = growth." },
            { prompt: "Populations being suited to their environment over time is", options: ["adaptation/evolution", "excretion", "digestion", "respiration"], correctIndex: 0, explanation: "Adaptation and evolution are properties of life." },
            { prompt: "Why is 'it moves' alone not proof of life?", options: ["Movement is unimportant", "Non-living things such as cars also move", "Only plants move", "Movement is excretion"], correctIndex: 1, explanation: "A single property is not enough; non-living things can move." },
            { prompt: "Taking in and using materials for energy and growth is", options: ["nutrition", "sensitivity", "respiration", "reproduction"], correctIndex: 0, explanation: "Nutrition supplies materials and energy." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "List the seven MRS GREN life processes and give one example of each from a named organism.", answerKey: "Movement, respiration, sensitivity, growth, reproduction, excretion, nutrition. 1 mark per process + 1 per apt example tied to a named organism (e.g. sensitivity – the sensitive plant folds when touched). Max 14; cap at 12 if examples are generic.", marks: 12 },
            { type: "MULTIPLE_CHOICE", prompt: "Which is NOT a characteristic of living things?", options: ["Reproduction", "Respiration", "Combustion", "Excretion"], correctIndex: 2, answerKey: "Combustion is burning, not a life process. Option C.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Explain why a soaked seed swelling in water has not truly 'grown'.", answerKey: "Growth is a permanent increase in size AND dry mass produced by the organism's own processes; a soaked seed only takes up water, so its dry mass does not increase and it can return to its former size on drying. Award marks for dry mass and the water-uptake distinction.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Give two reasons why a motor car is not a living thing.", answerKey: "Any two: not made of cells; cannot reproduce; does not respond to stimuli; does not grow from within; no true nutrition/respiration/excretion. 2 marks each.", marks: 4 },
            { type: "ESSAY", prompt: "'All seven life processes must be present for something to be classed as living.' Using a candle flame and a named plant, argue for or against this statement.", answerKey: "A flame shows apparent movement and energy use but no cells, reproduction, response or homeostasis, so it is non-living (5). A named plant shows all processes: nutrition (photosynthesis), respiration, sensitivity (tropism), growth, reproduction (seeds), excretion, movement of parts (5). Conclusion: the full set is required, so the statement holds (up to 5 for reasoning and organisation). Reward clear contrast.", marks: 15 },
          ],
        },
        // source: LibreTexts — Botany, Inanimate Life (Briggs), 2.19: Euglena, a unicellular algae (https://bio.libretexts.org/Bookshelves/Botany/Inanimate_Life_(Briggs)/02:_Organisms/2.19:_Euglena-_a_unicellular_algae)
        {
          slug: "euglena",
          title: "Euglena — an Organism Between Plants and Animals",
          objective:
            "By the end of the topic, learners should be able to describe the structure and mode of life of Euglena and explain why it is regarded as an organism bordered between plants and animals.",
          estimatedMinutes: 90,
          notes: `## What Euglena is

- **Euglena** — a single-celled (unicellular) organism found in pond and ditch water.
- It is a **protist** (kingdom Protista) that shows features of **both plants and animals**, so it is described as "bordered between animals and plants".

## Structure

- **Flagellum** — a long whip-like thread at the front; beats to pull the cell through water.
- **Eyespot (stigma)** — a red spot near the flagellum base that detects light and lets the cell swim toward it (phototaxis).
- **Chloroplasts** — green bodies containing chlorophyll for photosynthesis.
- **Pellicle** — a flexible protein layer under the membrane; gives shape yet allows the cell to change shape (euglenoid movement).
- **Nucleus** — controls the cell.
- **Contractile vacuole** — pumps out excess water to keep water balance.

\`\`\`svg Euglena showing flagellum, eyespot, chloroplasts, nucleus and contractile vacuole
<svg viewBox="0 0 300 160" role="img" aria-label="Euglena cell with flagellum, eyespot, chloroplasts, nucleus and contractile vacuole">
  <ellipse cx="150" cy="85" rx="95" ry="34" fill="#10b981" fill-opacity="0.10" stroke="currentColor" stroke-width="2"/>
  <line x1="58" y1="80" x2="18" y2="60" stroke="currentColor" stroke-width="2"/>
  <path d="M18 60 q -8 -6 -14 2" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="66" cy="82" r="6" fill="#ef4444" fill-opacity="0.7" stroke="currentColor"/>
  <ellipse cx="80" cy="82" rx="10" ry="7" fill="none" stroke="currentColor"/>
  <ellipse cx="140" cy="70" rx="16" ry="9" fill="#34d399" fill-opacity="0.5" stroke="currentColor"/>
  <ellipse cx="175" cy="98" rx="16" ry="9" fill="#34d399" fill-opacity="0.5" stroke="currentColor"/>
  <circle cx="205" cy="80" r="13" fill="#6366f1" fill-opacity="0.25" stroke="currentColor"/>
  <g font-size="8.5" fill="currentColor">
    <text x="2" y="50">flagellum</text>
    <text x="45" y="112" text-anchor="middle">eyespot</text>
    <text x="140" y="55" text-anchor="middle">chloroplast</text>
    <text x="205" y="80" text-anchor="middle" dy="24">nucleus</text>
  </g>
</svg>
\`\`\`

## Mode of life — why it borders plants and animals

**Plant-like features**
- Has **chloroplasts** and makes its own food by **photosynthesis** in the light (autotrophic).

**Animal-like features**
- Moves actively using a **flagellum**.
- Has an **eyespot** to sense light.
- Has a **contractile vacuole** (like Amoeba/Paramecium).
- In the **dark** the chloroplasts shrink and stop working, and it takes in ready-made food from its surroundings (heterotrophic).

- Because it feeds like a plant **and** like an animal, depending on conditions, it is called a **mixotroph** and is placed among the **protists** — showing that the plant/animal divide is not absolute.

## Common errors and misconceptions

- **Euglena is a plant** — no; it also moves and can feed like an animal, so it is a protist.
- **Euglena has cilia** — no; it swims with a single **flagellum**. (Amoeba uses pseudopodia; Paramecium uses cilia.)
- **The eyespot sees images** — it only **detects light** direction, guiding movement.
- **It only photosynthesises** — in the dark it feeds by absorbing food.`,
          workedExample: `**Question:** Under the microscope a learner sees a green, spindle-shaped cell swimming quickly toward the light, with a red spot near one end and a long thread at the front. Is it a plant, an animal, or something in between? Justify with three observations.

**Solution**

*Observation 1 — it is green.* Green colour means **chloroplasts**, so the cell can **photosynthesise** — a **plant-like** feature.

*Observation 2 — it swims quickly using a thread.* The thread is a **flagellum**; active swimming is an **animal-like** feature. Plants do not swim about.

*Observation 3 — a red spot guides it toward light.* The red spot is the **eyespot**, which senses light so the cell moves toward it (phototaxis) — again **animal-like** behaviour serving its plant-like photosynthesis.

*Putting it together.* The cell makes food like a plant **and** moves and responds like an animal. It cannot be placed cleanly in either kingdom.

**Answer:** it is a **Euglena**, an organism **bordered between plants and animals**, classed among the **protists**.`,
          quiz: [
            { prompt: "Euglena is best classified as a", options: ["plant", "animal", "protist", "bacterium"], correctIndex: 2, explanation: "It shows both plant and animal features and is a protist." },
            { prompt: "Euglena moves through water using a", options: ["flagellum", "cilium", "pseudopodium", "root"], correctIndex: 0, explanation: "A whip-like flagellum propels it." },
            { prompt: "The structure that lets Euglena make its own food is the", options: ["eyespot", "chloroplast", "contractile vacuole", "flagellum"], correctIndex: 1, explanation: "Chloroplasts carry out photosynthesis." },
            { prompt: "The red eyespot of Euglena is used to", options: ["digest food", "detect light", "pump out water", "store starch"], correctIndex: 1, explanation: "It senses light so the cell swims toward it." },
            { prompt: "Which feature of Euglena is plant-like?", options: ["Flagellum", "Photosynthesis", "Eyespot", "Contractile vacuole"], correctIndex: 1, explanation: "Making food by photosynthesis is plant-like." },
            { prompt: "In the dark, Euglena obtains food by", options: ["photosynthesis", "absorbing food from its surroundings", "making seeds", "burning wax"], correctIndex: 1, explanation: "Without light it feeds like an animal." },
            { prompt: "The contractile vacuole of Euglena", options: ["makes food", "pumps out excess water", "detects light", "beats to move the cell"], correctIndex: 1, explanation: "It removes excess water for balance." },
            { prompt: "An organism that can feed like both a plant and an animal is called a", options: ["mixotroph", "carnivore", "producer only", "saprophyte"], correctIndex: 0, explanation: "Mixotrophs use both modes of nutrition." },
            { prompt: "Euglena is said to be 'bordered between' which two groups?", options: ["bacteria and fungi", "plants and animals", "algae and mosses", "fish and worms"], correctIndex: 1, explanation: "It has features of both plants and animals." },
            { prompt: "The flexible protein layer giving Euglena its shape is the", options: ["pellicle", "cell wall", "nucleus", "vacuole"], correctIndex: 0, explanation: "The pellicle allows shape change (euglenoid movement)." },
            { prompt: "Which of these does Euglena NOT have?", options: ["chloroplasts", "flagellum", "cell wall of cellulose", "eyespot"], correctIndex: 2, explanation: "Euglena has a pellicle, not a cellulose cell wall." },
            { prompt: "Swimming toward light is called", options: ["phototaxis", "osmosis", "excretion", "respiration"], correctIndex: 0, explanation: "Phototaxis is movement in response to light." },
            { prompt: "Which structure of Euglena is animal-like?", options: ["Chloroplast", "Flagellum", "Chlorophyll", "Green colour"], correctIndex: 1, explanation: "Active movement by a flagellum is animal-like." },
            { prompt: "Euglena is usually found in", options: ["dry desert sand", "pond and ditch water", "the human stomach", "sea salt"], correctIndex: 1, explanation: "It lives in fresh, still water." },
            { prompt: "The nucleus of Euglena", options: ["controls the cell", "makes food", "moves the cell", "detects light"], correctIndex: 0, explanation: "The nucleus controls cell activities." },
            { prompt: "Why can't Euglena be placed cleanly in the plant kingdom?", options: ["It cannot photosynthesise", "It also moves and can feed like an animal", "It has no cell", "It is not alive"], correctIndex: 1, explanation: "Its animal-like features prevent a clean fit." },
            { prompt: "In light, the nutrition of Euglena is", options: ["autotrophic (photosynthesis)", "parasitic", "saprophytic", "impossible"], correctIndex: 0, explanation: "In light it makes its own food." },
            { prompt: "Compared with Amoeba, Euglena differs in that it", options: ["uses pseudopodia", "has a flagellum and chloroplasts", "has no nucleus", "cannot move"], correctIndex: 1, explanation: "Amoeba uses pseudopodia; Euglena has a flagellum and chloroplasts." },
            { prompt: "The green pigment in Euglena's chloroplasts is", options: ["chlorophyll", "haemoglobin", "melanin", "chitin"], correctIndex: 0, explanation: "Chlorophyll traps light for photosynthesis." },
            { prompt: "Euglena helps show that", options: ["all cells are the same", "the plant/animal divide is not absolute", "viruses are living", "plants can walk"], correctIndex: 1, explanation: "Its mixed features blur the plant/animal boundary." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Draw and label a Euglena, showing at least four structures.", answerKey: "Expect flagellum, eyespot, chloroplast, nucleus, contractile vacuole, pellicle. 1 mark per correct well-placed label up to 5, plus 3 for a clear proportionate drawing.", marks: 8 },
            { type: "SHORT_ANSWER", prompt: "Give two plant-like and two animal-like features of Euglena.", answerKey: "Plant-like: chloroplasts / photosynthesis. Animal-like: flagellum (movement), eyespot (response), contractile vacuole, feeding by absorption in the dark. 2 marks each pair.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "Euglena is placed in the kingdom", options: ["Plantae", "Animalia", "Protista", "Fungi"], correctIndex: 2, answerKey: "Protista. Option C.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Explain what happens to Euglena's nutrition when it is moved from light into darkness.", answerKey: "In the dark the chloroplasts shrink and stop photosynthesising, so it can no longer make food; it switches to taking in ready-made food from its surroundings (heterotrophic/absorptive). Award marks for the loss of photosynthesis and the switch to absorbing food.", marks: 4 },
            { type: "ESSAY", prompt: "Explain why Euglena is important evidence that the line between plants and animals is not sharp.", answerKey: "It has chloroplasts and photosynthesises in light (plant feature) yet swims with a flagellum, responds to light via an eyespot and can absorb food in the dark (animal features). Possessing both sets it cannot be placed cleanly as plant or animal, so it is a protist — showing the boundary is not absolute. Award marks for plant-like evidence, animal-like evidence and the conclusion.", marks: 15 },
          ],
        },
        // source: LibreTexts — Coalinga College Fundamentals of Biology Lab Manual, 3.2 The Compound Light Microscope (https://bio.libretexts.org/Courses/Coalinga_College/Fundamentals_of_Biology_Lab_Manual_(Marks_and_Hochman_Adler)/03:_On_the_Small_Side_-_Introduction_to_Microscopy/3.02:_The_Compound_Light_Microscope)
        {
          slug: "the-light-microscope",
          title: "The Light Microscope — a Biological Tool",
          objective:
            "By the end of the topic, learners should be able to name the parts of the compound light microscope and their functions, and calculate total magnification.",
          estimatedMinutes: 100,
          notes: `## The main tool of biology

- Cells are too small to see with the eye.
- The **compound light microscope** uses two sets of lenses and light to magnify a specimen.
- It can magnify up to about **×400** (×1000 with an oil-immersion lens) and lets us view **living** cells.

## Parts and their functions

| Part | Function |
| --- | --- |
| **Eyepiece (ocular lens)** | The lens you look through; usually magnifies ×10 |
| **Objective lenses** | Lenses near the specimen: ×4 (scanning), ×10 (low), ×40 (high), ×100 (oil immersion) |
| **Nosepiece (revolving turret)** | Holds the objectives and turns to select one |
| **Stage** | Flat platform that holds the slide; stage clips hold it in place |
| **Diaphragm (aperture)** | Controls the amount of light reaching the specimen |
| **Condenser** | Focuses light onto the specimen |
| **Mirror or lamp** | The light source |
| **Coarse adjustment knob** | Large focus movements (used with ×4 and ×10) |
| **Fine adjustment knob** | Small, sharp focus movements (used with ×40, ×100) |
| **Arm** | Supports the tube; used to carry the microscope |
| **Base** | Stands on the bench and supports the whole instrument |

## Total magnification

**Total magnification = eyepiece magnification × objective magnification.**

- ×10 eyepiece with ×4 objective → ×40
- ×10 eyepiece with ×10 objective → ×100
- ×10 eyepiece with ×40 objective → ×400

## Using the microscope (rules)

1. Carry it with one hand on the **arm** and one under the **base**.
2. Start focusing with the **lowest** objective (×4) and the **coarse** knob.
3. Switch to higher power, then use only the **fine** knob.
4. Use the **diaphragm** to get the right brightness.
5. Make a thin **wet mount**; stain with iodine to see structures more clearly.

## Common errors and misconceptions

- **Focusing on high power with the coarse knob** — this can crack the slide; use the fine knob on high power.
- **Forgetting to multiply** — total magnification is eyepiece × objective, never just the objective.
- **A light microscope shows atoms/molecules** — no; its resolution (~200 nm) shows cells and large organelles, not molecules. Electron microscopes show finer detail.
- **The mirror magnifies** — the mirror only supplies light; the **lenses** magnify.`,
          workedExample: `**Question:** A learner views onion epidermis with a ×10 eyepiece. She first uses the ×4 objective, then the ×40 objective.
(a) Calculate the total magnification in each case.
(b) Which adjustment knob should she use on the ×40 objective, and why?
(c) Why does she add a drop of iodine to the slide?

**Solution**

**(a) Total magnification.**
Total = eyepiece × objective.
- With ×4: 10 × 4 = **×40**.
- With ×40: 10 × 40 = **×400**.

**(b) Which knob on ×40?**
On high power she should use the **fine adjustment knob** only. The high-power objective sits very close to the slide, so the large movements of the coarse knob could push the lens into the slide and crack it. The fine knob makes small, safe movements for a sharp image.

**(c) Why iodine?**
Iodine is a **stain**. Plant cells are nearly colourless, so structures are hard to see. The stain colours the cytoplasm and shows the nucleus and cell walls clearly, improving contrast.

**Answer:** (a) ×40 then ×400; (b) the fine knob, to avoid cracking the slide; (c) iodine stains the cells to make their structures visible.`,
          quiz: [
            { prompt: "Total magnification of a ×10 eyepiece and ×40 objective is", options: ["×50", "×400", "×4", "×140"], correctIndex: 1, explanation: "10 × 40 = 400." },
            { prompt: "The lens you look through is the", options: ["objective lens", "eyepiece (ocular) lens", "condenser", "mirror"], correctIndex: 1, explanation: "The eyepiece is nearest the eye, usually ×10." },
            { prompt: "The part that controls the amount of light is the", options: ["stage", "diaphragm", "arm", "nosepiece"], correctIndex: 1, explanation: "The diaphragm regulates light through the specimen." },
            { prompt: "The lenses nearest the specimen are the", options: ["eyepieces", "objective lenses", "condensers", "mirrors"], correctIndex: 1, explanation: "Objectives sit close to the slide." },
            { prompt: "The slide is placed on the", options: ["stage", "arm", "base", "eyepiece"], correctIndex: 0, explanation: "The stage holds the slide." },
            { prompt: "For the final sharp focus you use the", options: ["coarse adjustment knob", "fine adjustment knob", "diaphragm", "stage clip"], correctIndex: 1, explanation: "The fine knob sharpens the image." },
            { prompt: "A ×10 eyepiece with a ×10 objective gives", options: ["×20", "×100", "×10", "×1000"], correctIndex: 1, explanation: "10 × 10 = 100." },
            { prompt: "The part that focuses light onto the specimen is the", options: ["condenser", "nosepiece", "arm", "eyepiece"], correctIndex: 0, explanation: "The condenser focuses light on the specimen." },
            { prompt: "Which objective is the oil-immersion lens?", options: ["×4", "×10", "×40", "×100"], correctIndex: 3, explanation: "The ×100 objective is used with oil." },
            { prompt: "You should carry a microscope by the", options: ["eyepiece and stage", "arm and base", "objective and mirror", "diaphragm"], correctIndex: 1, explanation: "One hand on the arm, one under the base." },
            { prompt: "Focusing should begin with the", options: ["highest objective", "lowest objective", "oil-immersion lens", "eyepiece removed"], correctIndex: 1, explanation: "Start on low power to find the specimen." },
            { prompt: "The revolving part that holds the objectives is the", options: ["nosepiece", "stage", "condenser", "base"], correctIndex: 0, explanation: "The nosepiece/turret holds and selects objectives." },
            { prompt: "Why should the coarse knob not be used on high power?", options: ["It magnifies too much", "It may push the lens into the slide", "It removes light", "It stains the cells"], correctIndex: 1, explanation: "Large movements can crack the slide on high power." },
            { prompt: "A light microscope can magnify up to about", options: ["×5", "×400 (×1000 with oil)", "×100000", "×2"], correctIndex: 1, explanation: "Light microscopes reach about ×400–×1000." },
            { prompt: "Iodine is added to a slide to", options: ["kill the microscope", "stain cells for contrast", "increase magnification", "supply light"], correctIndex: 1, explanation: "Staining reveals cell structures." },
            { prompt: "Which supplies light in a simple microscope?", options: ["mirror or lamp", "eyepiece", "arm", "nosepiece"], correctIndex: 0, explanation: "The mirror or lamp is the light source." },
            { prompt: "The stage clips are used to", options: ["magnify the image", "hold the slide in place", "focus the light", "carry the microscope"], correctIndex: 1, explanation: "Clips keep the slide steady." },
            { prompt: "If the eyepiece is ×10 and total magnification is ×200, the objective is", options: ["×2", "×20", "×200", "×40"], correctIndex: 1, explanation: "200 ÷ 10 = ×20 objective." },
            { prompt: "The main advantage of a light microscope over an electron microscope is that it", options: ["shows atoms", "can view living cells", "needs no light", "magnifies ×100000"], correctIndex: 1, explanation: "Light microscopes can view living specimens." },
            { prompt: "A thin specimen mounted in a drop of water is called a", options: ["dry mount", "wet mount", "smear only", "section"], correctIndex: 1, explanation: "A wet mount uses a drop of liquid under a cover slip." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Draw and label the compound light microscope, showing at least six parts.", answerKey: "Expect any six: eyepiece, objective lenses, nosepiece, stage, diaphragm, condenser, mirror/lamp, coarse knob, fine knob, arm, base. 1 mark per correct labelled part; up to 2 marks for a clear drawing.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "A specimen is viewed with a ×10 eyepiece and a ×4 objective. Total magnification is", options: ["×14", "×40", "×4", "×400"], correctIndex: 1, answerKey: "10 × 4 = ×40. Option B.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "State the function of (a) the diaphragm and (b) the fine adjustment knob.", answerKey: "(a) Controls the amount of light reaching the specimen. (b) Makes small movements for the final sharp focus (used on high power). 2 marks each.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Explain why focusing begins on the lowest-power objective.", answerKey: "The low-power objective gives a wide field of view, making it easy to find and centre the specimen, and there is a large working distance so the coarse knob can be used safely before switching to higher power. Award marks for wide field / finding the specimen and safe focusing.", marks: 4 },
            { type: "ESSAY", prompt: "Describe how you would prepare a wet mount of onion epidermis and view it, and explain the function of each key part of the microscope you use.", answerKey: "Method: peel a thin epidermis, place on slide in a drop of water, add iodine, lower a cover slip to avoid air bubbles (4). Viewing: place on stage, focus on ×4 with coarse knob, switch to ×40 with fine knob, adjust diaphragm (4). Parts and functions: eyepiece/objective magnify, stage holds slide, diaphragm controls light, condenser focuses light, knobs focus (4). Up to 3 for clarity and correct sequence.", marks: 15 },
          ],
        },
        // source: OpenStax — Biology 2e, 4.3 Eukaryotic Cells (organelles and plant/animal comparison); cell theory from 4.1 Studying Cells (https://openstax.org/books/biology-2e/pages/4-3-eukaryotic-cells)
        {
          slug: "the-cell",
          title: "The Cell: the Basic Unit of Life",
          objective:
            "By the end of the topic, learners should be able to state the cell theory, name the structures of plant and animal cells and their functions, distinguish prokaryotic, eukaryotic and akaryotic cells, and compare plant and animal cells.",
          estimatedMinutes: 150,
          notes: `## Introduction

- **Cell** — the smallest unit that is itself alive; the basic unit of structure and function.
- A single cell (Amoeba, bacterium) carries out every life process alone; large organisms are built from many cells.

## The cell theory

Built from the work of Hooke, Leeuwenhoek, Schleiden, Schwann and Virchow. The unified cell theory states:

1. All living things are made of **one or more cells**.
2. The **cell is the basic unit** of structure and function in living things.
3. All cells arise from **pre-existing cells**.

- **Robert Hooke** (1665) named the "cell"; **Leeuwenhoek** first saw single-celled life; **Schleiden** and **Schwann** proposed the theory; **Virchow** added that cells come from cells.

## Structures common to plant and animal cells

- **Plasma (cell) membrane** — thin, selectively permeable boundary; controls what enters and leaves.
- **Cytoplasm** — gel-like region holding the organelles; where many reactions occur.
- **Nucleus** — houses the DNA; directs protein synthesis and all cell activity.
- **Ribosomes** — the site of **protein synthesis**.
- **Mitochondria** — make **ATP** (energy) in aerobic respiration; the "powerhouses".
- **Endoplasmic reticulum (ER)** — membrane network; rough ER makes proteins, smooth ER makes lipids.
- **Golgi apparatus** — modifies, packages and secretes proteins and lipids.

## Found only in plant cells

- **Cell wall** — rigid cellulose layer outside the membrane; gives shape and support; fully permeable.
- **Chloroplasts** — contain chlorophyll; the site of **photosynthesis**.
- **Large central vacuole** — regulates water content; keeps the cell firm (turgid) and supports expansion.

## Found only in animal cells

- **Centrioles (centrosome)** — help organise the spindle in cell division.
- Small, temporary vacuoles, if any.

\`\`\`svg A plant cell showing cell wall, membrane, nucleus, chloroplasts and central vacuole
<svg viewBox="0 0 320 200" role="img" aria-label="Plant cell with cell wall, membrane, nucleus, chloroplasts and vacuole">
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

- **Prokaryotic** — no true (membrane-bound) nucleus and no membrane-bound organelles. *Bacteria.*
- **Eukaryotic** — a true nucleus enclosed in a membrane, plus membrane-bound organelles. *Plants, animals, fungi, protists.*
- **Akaryotic** — having no nucleus at all and not truly cellular. *Viruses* are described this way.

## Plant versus animal cells

| Feature | Plant cell | Animal cell |
| --- | --- | --- |
| Cell wall | Present (cellulose) | Absent |
| Chloroplasts | Present | Absent |
| Central vacuole | One large, permanent | Small or none |
| Centrioles | Usually absent | Present |
| Shape | Regular, fixed | Irregular, flexible |
| Food store | Starch | Glycogen |

## Tissues, organs and systems

Cells of one kind form a **tissue**; tissues form an **organ**; organs form a **system**; systems form the **organism**: cell → tissue → organ → system → organism.

## Common errors and misconceptions

- **Cell wall vs cell membrane** — the wall is rigid cellulose, only in plant cells; the membrane is thin and living, in **all** cells.
- **Every plant cell is green** — only cells with chloroplasts (mainly leaves) are green; root cells have none.
- **The nucleus makes energy** — no; the **mitochondrion** releases energy. The nucleus controls the cell.
- **Bacteria have a nucleus** — they do not; they are prokaryotic.
- **Chlorophyll and chloroplast are the same** — the chloroplast is the structure; chlorophyll is the pigment inside it.`,
          workedExample: `**Question:** A cell viewed under the microscope has a rigid outer boundary, one large vacuole filling most of its volume, and several green bodies in the cytoplasm.
(a) Is it a plant or an animal cell? Give three reasons.
(b) Name one structure you would expect to be absent.
(c) Name the green bodies and state their function.

**Solution**

**(a) A plant cell.** Three features agree:
1. **Rigid outer boundary** — only plant cells have a cellulose **cell wall** outside the membrane.
2. **One large vacuole** — a permanent central vacuole is characteristic of a mature plant cell.
3. **Green bodies** — chloroplasts occur in plant cells, never in animal cells.

All three point the same way, so the cell is a **plant cell** from a photosynthetic tissue such as a leaf.

**(b) Absent structure.** **Centrioles** would be expected to be absent, since these occur in animal cells and are usually absent from higher plants.

**(c) The green bodies.** They are **chloroplasts**. They contain **chlorophyll** and are the **site of photosynthesis**, using light energy to make glucose from carbon dioxide and water.

**The lesson:** a cell is classified on the **combination** of features. A shared feature such as having a membrane would not decide it; the wall, the vacuole and the chloroplasts together do.`,
          quiz: [
            { prompt: "The cell theory states that all cells arise from", options: ["non-living matter", "pre-existing cells", "chemical reactions", "sunlight"], correctIndex: 1, explanation: "Virchow: cells come only from other cells." },
            { prompt: "Who first named the 'cell' in 1665?", options: ["Schwann", "Robert Hooke", "Virchow", "Pasteur"], correctIndex: 1, explanation: "Hooke named cells after viewing cork." },
            { prompt: "Which organelle makes ATP in aerobic respiration?", options: ["Ribosome", "Mitochondrion", "Golgi apparatus", "Nucleus"], correctIndex: 1, explanation: "Mitochondria produce the cell's ATP." },
            { prompt: "The plant cell wall is made mainly of", options: ["protein", "cellulose", "lipid", "chitin"], correctIndex: 1, explanation: "Plant walls are cellulose." },
            { prompt: "Which structure controls what enters and leaves the cell?", options: ["Cell wall", "Cell membrane", "Cytoplasm", "Vacuole"], correctIndex: 1, explanation: "The membrane is selectively permeable." },
            { prompt: "Chloroplasts are found in", options: ["animal cells only", "plant cells", "bacteria only", "all cells"], correctIndex: 1, explanation: "Chloroplasts occur in plant cells." },
            { prompt: "A prokaryotic cell", options: ["has a true nucleus", "lacks a membrane-bound nucleus", "is always green", "has chloroplasts"], correctIndex: 1, explanation: "Bacteria have no nuclear membrane." },
            { prompt: "Protein synthesis takes place at the", options: ["ribosomes", "vacuole", "cell wall", "centriole"], correctIndex: 0, explanation: "Ribosomes build proteins." },
            { prompt: "Which is found in animal cells but not plant cells?", options: ["Nucleus", "Centriole", "Mitochondrion", "Ribosome"], correctIndex: 1, explanation: "Centrioles occur in animal cells." },
            { prompt: "The large central vacuole of a plant cell", options: ["carries out photosynthesis", "regulates water and keeps the cell turgid", "makes proteins", "releases energy"], correctIndex: 1, explanation: "It controls water content and firmness." },
            { prompt: "Viruses are described as akaryotic because they", options: ["have two nuclei", "have no nucleus and are not truly cellular", "are large cells", "photosynthesise"], correctIndex: 1, explanation: "Akaryotic = without a nucleus; viruses are not cells." },
            { prompt: "Which organelle modifies and packages proteins?", options: ["Golgi apparatus", "Mitochondrion", "Nucleus", "Centriole"], correctIndex: 0, explanation: "The Golgi apparatus packages and secretes." },
            { prompt: "The correct hierarchy of organisation is", options: ["organ → cell → tissue → system", "cell → tissue → organ → system", "system → organ → cell → tissue", "tissue → cell → system → organ"], correctIndex: 1, explanation: "Cells → tissues → organs → systems." },
            { prompt: "Eukaryotic cells differ from prokaryotic cells in having", options: ["no cytoplasm", "a membrane-bound nucleus", "no membrane", "no DNA"], correctIndex: 1, explanation: "Eukaryotes enclose DNA in a nucleus." },
            { prompt: "The gel-like region holding the organelles is the", options: ["nucleus", "cytoplasm", "membrane", "vacuole"], correctIndex: 1, explanation: "Cytoplasm holds the organelles." },
            { prompt: "Plant cells store food mainly as", options: ["glycogen", "starch", "protein", "chitin"], correctIndex: 1, explanation: "Plants store starch; animals store glycogen." },
            { prompt: "Which is fully permeable rather than selectively permeable?", options: ["Cell membrane", "Cell wall", "Nuclear membrane", "Vacuole membrane"], correctIndex: 1, explanation: "The cellulose wall lets substances pass freely." },
            { prompt: "The nucleus of a cell", options: ["releases energy", "houses DNA and controls the cell", "makes the cell green", "forms the wall"], correctIndex: 1, explanation: "It carries DNA and directs the cell." },
            { prompt: "An irregular, flexible shape with no cell wall describes a", options: ["plant cell", "animal cell", "bacterial cell", "fungal cell"], correctIndex: 1, explanation: "Animal cells lack a wall." },
            { prompt: "Bacteria are examples of", options: ["eukaryotic cells", "prokaryotic cells", "akaryotic particles", "plant cells"], correctIndex: 1, explanation: "Bacteria lack a true nucleus." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "State the three principles of the cell theory.", answerKey: "1. All living things are made of one or more cells. 2. The cell is the basic unit of structure and function. 3. All cells arise from pre-existing cells. 3 marks each.", marks: 9 },
            { type: "SHORT_ANSWER", prompt: "Draw a labelled plant cell showing at least five structures.", answerKey: "Expect cell wall, membrane, cytoplasm, nucleus, chloroplast, large vacuole (mitochondrion credited). 1 mark per correct labelled part up to 6, plus 2 for a clear drawing. Deduct 1 if the wall is drawn inside the membrane.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "A cell has no nuclear membrane and no mitochondria. It is most likely", options: ["a plant cell", "an animal cell", "a bacterial cell", "a fungal cell"], correctIndex: 2, answerKey: "No nuclear membrane and no membrane-bound organelles identify a prokaryote. Option C.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Give four structural differences between a plant cell and an animal cell.", answerKey: "Any four two-sided differences: cell wall present/absent; chloroplasts present/absent; large permanent vacuole vs small/none; regular vs irregular shape; centrioles usually absent vs present; starch vs glycogen. 2 marks each.", marks: 8 },
            { type: "ESSAY", prompt: "'Structure is related to function in the cell.' Discuss with reference to at least four named organelles.", answerKey: "Four developed examples, 4 marks each: mitochondrion (folded inner membrane for respiration/ATP), chloroplast (membranes hold chlorophyll to capture light), cell membrane (selectively permeable, controls transport), cell wall (rigid cellulose, support), nucleus (encloses DNA to direct the cell). Up to 4 for a coherent introduction and conclusion. A bare list without adaptation should not exceed 8.", marks: 20 },
          ],
        },
        // source: OpenStax — Biology 2e, 5.2 Passive Transport & 5.3 Active Transport (https://openstax.org/books/biology-2e/pages/5-2-passive-transport)
        {
          slug: "movement-across-membrane",
          title: "Movement of Substances Across the Cell Membrane",
          objective:
            "By the end of the topic, learners should be able to describe diffusion, osmosis, facilitated diffusion, active transport, endocytosis and exocytosis, and explain their importance to the cell.",
          estimatedMinutes: 150,
          notes: `## Introduction

- Cells take in what they need (oxygen, water, glucose, mineral ions) and remove wastes (carbon dioxide, urea).
- All this traffic crosses the **cell membrane**, which is **selectively permeable** (lets some substances through, not others).

## Passive versus active

- **Passive** processes need **no energy** and move substances **down** the concentration gradient (high → low): diffusion, osmosis, facilitated diffusion.
- **Active** processes **use energy (ATP)** and can move substances **against** the gradient (low → high): active transport, endocytosis, exocytosis.

## Diffusion

**Diffusion** — the net movement of particles from a region of **higher concentration to lower concentration** until evenly spread.

- Example: oxygen diffusing from leaf air spaces into cells; a smell spreading across a room.
- Rate increases with a steeper gradient, higher temperature, larger surface area and shorter distance.

## Osmosis

**Osmosis** — the movement of **water** through a selectively permeable membrane from a region of **higher water concentration (dilute)** to **lower water concentration (concentrated)**.

\`\`\`svg Osmosis: water moves across a membrane from the dilute side to the concentrated side
<svg viewBox="0 0 320 170" role="img" aria-label="Osmosis: water moving from dilute to concentrated solution">
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

**Tonicity and effects on cells:**
- **Hypotonic** (dilute) outside: water enters. A plant cell becomes **turgid**; an animal cell may swell and **burst (lyse)**.
- **Isotonic**: no net movement.
- **Hypertonic** (concentrated) outside: water leaves. A plant cell **plasmolyses** (membrane pulls from wall); an animal cell shrinks (**crenation**).

## Facilitated diffusion

Diffusion of substances that cannot cross the membrane easily (e.g. glucose, ions) **through channel or carrier proteins** — still down the gradient, still without energy.

## Active transport

Movement of substances **against** the gradient (low → high) using **energy (ATP)** and carrier proteins.

- Example: root hair cells absorbing mineral ions from soil where ions are more concentrated inside the cell than outside.

## Endocytosis and exocytosis (bulk transport)

For particles too large to cross directly:

- **Endocytosis** — the membrane folds inward to take material **into** the cell.
  - **Phagocytosis** — taking in solid particles (e.g. a white blood cell engulfing bacteria).
  - **Pinocytosis** — taking in liquid droplets.
  - **Receptor-mediated endocytosis** — specific particles bind receptors first.
- **Exocytosis** — a vesicle fuses with the membrane to release material **out** of the cell (e.g. secreting enzymes).

## Summary

| Process | Energy? | Direction | Moves |
| --- | --- | --- | --- |
| Diffusion | No | High → low | Any particle |
| Osmosis | No | High → low water | Water only |
| Facilitated diffusion | No | High → low | Via protein |
| Active transport | Yes | Low → high | Against gradient |
| Endo/exocytosis | Yes | In / out | Large particles |

## Common errors and misconceptions

- **Osmosis is "diffusion of water"** loosely — it is specifically water across a **selectively permeable membrane** from dilute to concentrated.
- **"Water moves to where there is more water"** — the opposite: water moves from higher water concentration (dilute) to lower (concentrated).
- **Diffusion needs energy** — no; only active transport, endocytosis and exocytosis use ATP.
- **Active transport goes down the gradient** — no; it moves substances **against** the gradient, which is why it costs energy.`,
          workedExample: `**Question:** A piece of fresh cassava is placed in strong salt solution for an hour. Explain, in terms of water movement, what happens to its cells and to the cassava. What would happen instead in pure water?

**Solution**

*Step 1 — compare water concentrations.* The salt solution is **concentrated** (low water concentration, **hypertonic**). The cell sap is more **dilute** (higher water concentration).

*Step 2 — apply osmosis.* Water moves from higher to lower water concentration across the selectively permeable membrane, so water leaves the cells **out** into the salt solution.

*Step 3 — effect on cells.* The cells lose water, the vacuoles shrink and the membranes pull from the walls; the cells become **flaccid** and, if enough water is lost, **plasmolysed**.

*Step 4 — effect on the cassava.* Losing water from all cells, the piece becomes **soft, limp and lighter**. This is why salt is used to draw water out of food for preservation.

*Step 5 — in pure water.* Pure water is **hypotonic** (higher water concentration), so water enters the cells by osmosis; the vacuoles fill, the cells become **turgid**, and the cassava becomes **firm and slightly heavier**. The rigid wall prevents bursting.

**Answer:** in salt solution the cells lose water and become flaccid/plasmolysed and the cassava goes limp; in pure water the cells gain water and become turgid and firm. In both cases the process is **osmosis**.`,
          quiz: [
            { prompt: "Diffusion is the movement of particles from", options: ["low to high concentration", "high to low concentration", "cold to hot", "small to large cells"], correctIndex: 1, explanation: "Particles spread from high to low concentration." },
            { prompt: "Osmosis is the movement of", options: ["any particle across a membrane", "water across a selectively permeable membrane", "salt into a cell", "energy through the cell"], correctIndex: 1, explanation: "Osmosis moves water across a selectively permeable membrane." },
            { prompt: "Which process requires energy from the cell?", options: ["Diffusion", "Osmosis", "Active transport", "Facilitated diffusion"], correctIndex: 2, explanation: "Active transport uses ATP." },
            { prompt: "Water moves by osmosis from a solution with", options: ["low water concentration to high", "high water concentration to low", "no water to some", "high salt to low salt directly"], correctIndex: 1, explanation: "From dilute (more water) to concentrated (less water)." },
            { prompt: "A plant cell placed in pure water becomes", options: ["plasmolysed", "turgid", "crenated", "lysed"], correctIndex: 1, explanation: "It gains water and becomes firm (turgid)." },
            { prompt: "An animal cell placed in pure water may", options: ["become turgid", "burst (lyse)", "become plasmolysed", "gain a wall"], correctIndex: 1, explanation: "With no wall it can swell and burst." },
            { prompt: "Root hair cells absorb mineral ions mainly by", options: ["osmosis", "diffusion", "active transport", "exocytosis"], correctIndex: 2, explanation: "Ions are taken up against the gradient." },
            { prompt: "A white blood cell engulfing bacteria shows", options: ["osmosis", "phagocytosis", "diffusion", "plasmolysis"], correctIndex: 1, explanation: "Phagocytosis is endocytosis of solids." },
            { prompt: "Which process moves large particles OUT of the cell?", options: ["Endocytosis", "Exocytosis", "Osmosis", "Diffusion"], correctIndex: 1, explanation: "Exocytosis releases material by vesicle fusion." },
            { prompt: "Plasmolysis occurs when a plant cell is placed in a", options: ["hypotonic solution", "dilute solution", "hypertonic (concentrated) solution", "vacuum"], correctIndex: 2, explanation: "Water leaves and the membrane pulls from the wall." },
            { prompt: "Which is a passive process?", options: ["Active transport", "Endocytosis", "Diffusion", "Exocytosis"], correctIndex: 2, explanation: "Diffusion needs no energy." },
            { prompt: "Facilitated diffusion differs from simple diffusion because it", options: ["needs energy", "uses membrane proteins", "moves against the gradient", "only moves water"], correctIndex: 1, explanation: "It uses channel/carrier proteins but no energy." },
            { prompt: "A turgid plant cell is", options: ["firm and full of water", "limp and short of water", "dead", "without a nucleus"], correctIndex: 0, explanation: "Turgor comes from a filled vacuole pressing on the wall." },
            { prompt: "Salting fish to preserve it works because salt", options: ["adds water to the cells", "draws water out by osmosis", "kills cells with heat", "increases oxygen diffusion"], correctIndex: 1, explanation: "The hypertonic salt draws water out, so microbes cannot grow." },
            { prompt: "Which substance moves during osmosis?", options: ["Salt", "Water", "Oxygen", "Glucose"], correctIndex: 1, explanation: "Osmosis moves water only." },
            { prompt: "Active transport moves substances", options: ["down the gradient", "against the gradient", "only when the cell is dead", "without proteins"], correctIndex: 1, explanation: "It moves substances from low to high concentration using energy." },
            { prompt: "Taking in liquid droplets by a cell is", options: ["phagocytosis", "pinocytosis", "exocytosis", "osmosis"], correctIndex: 1, explanation: "Pinocytosis is endocytosis of liquids." },
            { prompt: "A wilting plant recovers when watered because water enters cells by", options: ["active transport", "osmosis", "exocytosis", "combustion"], correctIndex: 1, explanation: "Water enters by osmosis, restoring turgor." },
            { prompt: "A solution with a higher water concentration than the cell is", options: ["hypertonic", "isotonic", "hypotonic", "saturated"], correctIndex: 2, explanation: "Hypotonic solutions cause water to enter the cell." },
            { prompt: "An animal cell in a concentrated (hypertonic) solution will", options: ["swell", "shrink (crenate)", "become turgid", "gain a wall"], correctIndex: 1, explanation: "Water leaves, so the cell shrinks (crenation)." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Define diffusion, osmosis and active transport, stating whether each requires energy.", answerKey: "Diffusion: net movement of particles high→low; no energy. Osmosis: movement of water across a selectively permeable membrane from high→low water concentration; no energy. Active transport: movement against the gradient using ATP and carrier proteins; energy required. 2 marks per definition + 1 per energy statement.", marks: 9 },
            { type: "SHORT_ANSWER", prompt: "Explain what happens to a red blood cell placed in (a) pure water and (b) concentrated salt solution.", answerKey: "(a) Hypotonic; water enters by osmosis, the cell swells and may burst (lyse). (b) Hypertonic; water leaves by osmosis and the cell shrinks (crenation). 4 marks each, requiring osmosis and direction of water movement.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "A root hair cell absorbs nitrate ions that are already more concentrated inside than in the soil by", options: ["Osmosis", "Simple diffusion", "Active transport", "Facilitated diffusion"], correctIndex: 2, answerKey: "Against the gradient = active transport. Option C.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Distinguish between endocytosis and exocytosis, giving one example of each.", answerKey: "Endocytosis: membrane folds inward to take material in — e.g. a white blood cell engulfing bacteria (phagocytosis). Exocytosis: a vesicle fuses with the membrane to release material out — e.g. a gland cell secreting enzymes. Both use energy. 3 marks per process with example.", marks: 6 },
            { type: "ESSAY", prompt: "A farmer notices that applying too much fertiliser to young rice plants causes them to wilt. Explain this in terms of osmosis, and advise on correct practice.", answerKey: "Heavy fertiliser makes the soil solution concentrated/hypertonic (low water concentration), lower than the cell water concentration, so water moves out of the root cells by osmosis, the cells lose turgor and the plant wilts ('fertiliser scorch'). Advice: apply measured amounts, keep off direct contact with young roots, water well so the soil stays dilute. 5 marks for the osmosis explanation with correct direction, 3 for linking to wilting, 4 for practical advice, 3 for clarity. Without osmosis/water-concentration reasoning, cap at 6.", marks: 15 },
          ],
        },
      ],
    },
  ],
};
