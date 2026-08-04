import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 10,
// Semester One, Period III: Multicellular Organisms and Reproductive
// Structures — levels of organisation (cells, tissues, organs, systems) and
// simple multicellular animals (sponges and hydra).
export const biologyG10P3: PeriodContent = {
  grade: 10,
  number: 3,
  title: "Multicellular Organisms",
  summary:
    "Period III of the MoE Grade 10 Biology syllabus. Learners develop the idea that tissues are built from cells, organs from tissues and systems from organs, describe the four main tissue types and the characteristics of multicellular life, and study simple multicellular animals such as sponges and hydra.",
  topics: [
    {
      slug: "levels-of-organisation",
      title: "Levels of Organisation: Cells, Tissues, Organs and Systems",
      objective:
        "By the end of the topic, learners should be able to describe how cells build tissues, tissues build organs and organs build systems, name the four main types of tissue and their functions, and list the characteristics of multicellular organisms.",
      estimatedMinutes: 150,
      notes: `## Introduction

- A single cell stays small and simple; larger organisms build bodies from **many** specialised cells that **divide the labour**.
- The body is organised in **levels**, from the single cell up to the whole organism.
- **This topic:** the ladder cell → tissue → organ → system; the four main tissue types; the shared features of multicellular life.

## Building a body, step by step

Unlike a single-celled organism, a **multicellular organism** is made of many cells that work together. Its body is organised in **levels**, each built from the one below:

**Cell → Tissue → Organ → System → Organism**

\`\`\`svg Levels of biological organisation
<svg viewBox="0 0 360 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cell to tissue to organ to system to organism">
  <g font-size="11" text-anchor="middle" fill="#064e3b">
    <rect x="6" y="30" width="56" height="30" rx="4" fill="#a7f3d0" stroke="#065f46"/><text x="34" y="49">Cell</text>
    <rect x="80" y="30" width="56" height="30" rx="4" fill="#6ee7b7" stroke="#065f46"/><text x="108" y="49">Tissue</text>
    <rect x="154" y="30" width="56" height="30" rx="4" fill="#34d399" stroke="#065f46"/><text x="182" y="49">Organ</text>
    <rect x="228" y="30" width="56" height="30" rx="4" fill="#10b981" stroke="#065f46"/><text x="256" y="49" fill="#fff">System</text>
    <rect x="302" y="30" width="56" height="30" rx="4" fill="#059669" stroke="#065f46"/><text x="330" y="49" fill="#fff">Organism</text>
  </g>
  <g stroke="#065f46" stroke-width="1.5">
    <line x1="62" y1="45" x2="80" y2="45"/><line x1="136" y1="45" x2="154" y2="45"/>
    <line x1="210" y1="45" x2="228" y2="45"/><line x1="284" y1="45" x2="302" y2="45"/>
  </g>
</svg>
\`\`\`

- A **cell** is the basic unit of life.
- A **tissue** is a group of **similar cells** doing the same job (e.g. muscle tissue).
- An **organ** is made of **several tissues** working together for one function (e.g. the heart).
- A **system (organ system)** is a group of **organs** working together for a major task (e.g. the digestive system).
- Together, all the systems make up the whole **organism**.

## The four main types of animal tissue

1. **Epithelial (covering) tissue** — covers and lines surfaces of the body (skin, lining of the gut). It protects and can absorb or secrete.
2. **Muscular tissue** — cells that contract to produce **movement** (heart muscle, muscles of the limbs).
3. **Nervous tissue** — carries **electrical messages (impulses)** around the body; makes up the brain, spinal cord and nerves.
4. **Connective tissue** — **supports, connects and binds** other tissues together (bone, cartilage, blood, tendons).

## Characteristics of multicellular organisms

- Made of **many cells** organised into tissues, organs and systems.
- Show **division of labour** — different cells are **specialised** for different jobs.
- Are usually larger and more complex than unicellular organisms.
- Cells depend on one another; no single cell can survive alone doing everything.

## Why organisation matters

- **Division of labour** makes a complex body efficient — nerve cells signal, muscle cells move, red blood cells carry oxygen.
- Sharing tasks lets a multicellular organism grow large and do what a single cell never could.

## Common errors and misconceptions

- **Muddling tissue, organ and system** — a *tissue* is many similar cells (muscle tissue); an *organ* is several tissues doing one job (the heart); a *system* is several organs (the circulatory system). Keep the order cell → tissue → organ → system.
- **Naming an organ as a tissue** — the stomach is an *organ*, not a tissue; the tissue is, for example, its muscle layer.
- **Thinking every organism has organs** — unicellular organisms and very simple animals have no organs; organs appear only with greater complexity.
- **Forgetting blood is a tissue** — blood is a *connective* tissue, even though it is liquid.`,
      workedExample: `**Task.** Using the human digestive system, show how the levels of organisation fit together, and match each of the four tissue types to a job it does in the body.

**Levels of organisation in the digestive system**

- **Cell:** a single lining cell of the stomach.
- **Tissue:** many such lining cells together form **epithelial tissue** that lines the stomach.
- **Organ:** the **stomach** — made of epithelial tissue (lining), muscular tissue (to churn food) and connective and nervous tissue — is an organ.
- **System:** the stomach works with the mouth, gullet, intestines and other organs to form the **digestive system**.
- **Organism:** the digestive system, together with all the other systems, makes up the whole **human being**.

**Matching the four tissue types to a job**

| Tissue | Job in the body |
|---|---|
| Epithelial | lines the stomach and gut; protects and absorbs |
| Muscular | contracts to churn food and move it along (peristalsis) |
| Nervous | carries impulses that control digestion |
| Connective | binds the organs in place and blood carries nutrients away |

**Conclusion:** each higher level is built from the level below — cells make tissues, tissues make organs, organs make systems — and the four tissue types divide the labour so the whole organism works efficiently.`,
      teachingTip:
        "Learners muddle 'tissue' and 'organ'. Fix it with the rule: a tissue is one kind of cell doing one job; an organ is several tissues doing one function. Use the heart — it is an organ because it contains muscle tissue, nervous tissue and connective tissue all working together to pump. Build the sequence Cell→Tissue→Organ→System on the board and have learners place real examples at each level.",
      quiz: [
        {
          prompt: "The correct order of the levels of organisation is…",
          options: [
            "cell → tissue → organ → system → organism",
            "organ → tissue → cell → system",
            "tissue → cell → organ → system",
            "system → organ → cell → tissue",
          ],
          correctIndex: 0,
          explanation: "Each level is built from the one before it.",
        },
        {
          prompt: "A group of similar cells doing the same job is a…",
          options: ["tissue", "organ", "system", "organism"],
          correctIndex: 0,
          explanation: "Similar cells together form a tissue.",
        },
        {
          prompt: "An organ is made of…",
          options: ["several tissues working together", "a single cell", "many organisms", "one type of cell only"],
          correctIndex: 0,
          explanation: "Different tissues combine to form an organ.",
        },
        {
          prompt: "A group of organs working together for a major task is a…",
          options: ["system", "tissue", "cell", "membrane"],
          correctIndex: 0,
          explanation: "Organs form an organ system.",
        },
        {
          prompt: "Which tissue covers and lines body surfaces?",
          options: ["epithelial tissue", "muscular tissue", "nervous tissue", "connective tissue"],
          correctIndex: 0,
          explanation: "Epithelial tissue covers and lines surfaces.",
        },
        {
          prompt: "Which tissue contracts to produce movement?",
          options: ["muscular tissue", "epithelial tissue", "nervous tissue", "connective tissue"],
          correctIndex: 0,
          explanation: "Muscle tissue contracts to move parts of the body.",
        },
        {
          prompt: "Which tissue carries electrical impulses?",
          options: ["nervous tissue", "muscular tissue", "epithelial tissue", "connective tissue"],
          correctIndex: 0,
          explanation: "Nervous tissue carries impulses (brain, nerves).",
        },
        {
          prompt: "Which tissue supports and binds other tissues together?",
          options: ["connective tissue", "epithelial tissue", "muscular tissue", "nervous tissue"],
          correctIndex: 0,
          explanation: "Connective tissue (bone, blood, cartilage) supports and connects.",
        },
        {
          prompt: "The heart is an example of a…",
          options: ["organ", "tissue", "cell", "system"],
          correctIndex: 0,
          explanation: "The heart is an organ made of several tissues.",
        },
        {
          prompt: "The digestive system is an example of a…",
          options: ["system (organ system)", "single organ", "tissue", "cell"],
          correctIndex: 0,
          explanation: "It is many organs working together — a system.",
        },
        {
          prompt: "The basic unit of life is the…",
          options: ["cell", "tissue", "organ", "organism"],
          correctIndex: 0,
          explanation: "The cell is the smallest living unit.",
        },
        {
          prompt: "Blood and bone are examples of which tissue type?",
          options: ["connective tissue", "epithelial tissue", "muscular tissue", "nervous tissue"],
          correctIndex: 0,
          explanation: "Blood, bone and cartilage are connective tissues.",
        },
        {
          prompt: "Multicellular organisms are characterised by…",
          options: [
            "many specialised cells with division of labour",
            "a single cell doing everything",
            "no cells at all",
            "being always microscopic",
          ],
          correctIndex: 0,
          explanation: "Their cells are specialised, sharing the work.",
        },
        {
          prompt: "'Division of labour' in a multicellular organism means…",
          options: [
            "different cells are specialised for different jobs",
            "all cells do the same job",
            "cells never cooperate",
            "there is only one organ",
          ],
          correctIndex: 0,
          explanation: "Specialised cells each perform a particular task.",
        },
        {
          prompt: "The lining of the stomach is made mainly of which tissue?",
          options: ["epithelial tissue", "nervous tissue", "muscular tissue", "connective tissue"],
          correctIndex: 0,
          explanation: "Epithelial tissue lines the gut.",
        },
        {
          prompt: "Which level comes directly between tissue and system?",
          options: ["organ", "cell", "organism", "membrane"],
          correctIndex: 0,
          explanation: "Tissues form organs, and organs form systems.",
        },
        {
          prompt: "Muscle tissue in the limbs allows the body to…",
          options: ["move", "think", "digest chemically", "line surfaces"],
          correctIndex: 0,
          explanation: "Muscle contraction produces movement.",
        },
        {
          prompt: "Why can a multicellular organism grow larger and more complex than a single cell?",
          options: [
            "tasks are shared among specialised cells",
            "it has fewer cells",
            "its cells all do the same thing",
            "it has no tissues",
          ],
          correctIndex: 0,
          explanation: "Specialisation and division of labour allow complexity.",
        },
        {
          prompt: "The brain and spinal cord are made mainly of which tissue?",
          options: ["nervous tissue", "connective tissue", "epithelial tissue", "muscular tissue"],
          correctIndex: 0,
          explanation: "Nervous tissue makes up the brain, cord and nerves.",
        },
        {
          prompt: "All the organ systems together make up the…",
          options: ["organism", "tissue", "cell", "organ"],
          correctIndex: 0,
          explanation: "The complete set of systems forms the whole organism.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "List the levels of organisation in a multicellular organism in the correct order.",
          answerKey:
            "Cell → Tissue → Organ → System (organ system) → Organism. Award full marks for all five in the correct order; deduct one mark per misplacement.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the four main types of animal tissue and give one function of each.",
          answerKey:
            "Epithelial – covers/lines surfaces, protects/absorbs; Muscular – contracts for movement; Nervous – carries impulses; Connective – supports/binds tissues (bone, blood). Award a mark per tissue correctly named with a valid function.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which statement about an organ is correct?",
          options: [
            "It is made of several tissues working together",
            "It is a single cell",
            "It is a group of organisms",
            "It is one type of tissue only",
          ],
          correctIndex: 0,
          answerKey: "An organ is built from several tissues performing one function.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain, using the idea of division of labour, why multicellular organisms are more efficient and can be more complex than unicellular organisms.",
          answerKey:
            "A strong answer explains that in a multicellular organism cells are specialised into tissues, organs and systems, so different cells carry out different tasks (division of labour) — e.g. nerve cells signal, muscle cells move, blood cells transport. Because no single cell must do everything, each can be highly efficient at its own job, allowing the organism to grow large and perform complex functions that a single cell could not. Award marks for the concept of specialisation/division of labour, examples, and the link to efficiency and complexity.",
          marks: 5,
        },
      ],
    },
    {
      slug: "simple-multicellular-animals",
      title: "Simple Multicellular Animals: Sponges and Hydra",
      objective:
        "By the end of the topic, learners should be able to describe the general characteristics and structure of sponges and hydra as simple multicellular animals, and relate their body features to how they feed, move and reproduce.",
      estimatedMinutes: 150,
      notes: `## Introduction

- Between the single-celled *Amoeba* and a complex animal like a fish lie the **simplest multicellular animals**.
- They show the first steps of the multicellular body — a few cell types in layers, no true organs yet.
- **This topic:** the **sponge** and the **hydra**, and how their simple body plans relate to feeding, movement and reproduction.

## Simple multicellular animals

- Not all multicellular animals have complex organs and systems.
- The simplest — **sponges** and **hydra** — have bodies of just a few cell layers.
- They show the step from single cells to a true multicellular body.

## Sponges (Phylum Porifera)

**Sponges** are the simplest multicellular animals. They live attached to surfaces in water (mostly the sea).

- The body is a hollow bag full of tiny holes (**pores**) — the name *Porifera* means "pore-bearing".
- Water is drawn in through the pores and out through a large opening at the top (the **osculum**); special cells with tiny whip-like flagella keep the water flowing.
- As water passes through, the sponge **filters out food particles** — it is a **filter feeder**.
- Sponges have **no true tissues or organs**; their cells work fairly independently.
- They are supported by a skeleton of tiny needle-like **spicules**.
- They can reproduce **asexually** (by budding) and **sexually**.

## Hydra (Phylum Cnidaria)

The **hydra** is a small freshwater animal, a little more advanced than a sponge.

\`\`\`svg A hydra with tentacles around its mouth
<svg viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hydra with a tubular body, basal disc and tentacles">
  <rect x="85" y="70" width="30" height="100" rx="12" fill="#bbf7d0" stroke="#065f46" stroke-width="2"/>
  <ellipse cx="100" cy="170" rx="22" ry="7" fill="#86efac" stroke="#065f46"/>
  <g stroke="#065f46" stroke-width="2" fill="none">
    <path d="M92,70 C80,45 70,35 60,25"/>
    <path d="M97,68 C92,40 90,28 88,15"/>
    <path d="M103,68 C108,40 110,28 112,15"/>
    <path d="M108,70 C120,45 130,35 140,25"/>
  </g>
  <text x="100" y="60" font-size="9" text-anchor="middle" fill="#065f46">mouth + tentacles</text>
  <text x="150" y="175" font-size="9" fill="#065f46">basal disc</text>
</svg>
\`\`\`

- It has a **tube-shaped body** with a **mouth** at the top surrounded by **tentacles**, and a **basal disc** at the bottom that anchors it.
- The body wall has **two layers** of cells with a jelly-like layer between them — a step towards true tissues.
- The tentacles carry **stinging cells** (cnidocytes) that paralyse tiny prey; the hydra then pushes the food through its mouth into a central body cavity to digest it.
- It **moves** by looping or somersaulting, or by gliding on its basal disc.
- It reproduces mainly **asexually by budding** — a small new hydra grows out of the side of the parent and then breaks off.

## Comparing sponge and hydra

| Feature | Sponge | Hydra |
|---|---|---|
| Tissues | none (cells independent) | two cell layers (early tissues) |
| Feeding | filter feeder | captures prey with stinging tentacles |
| Movement | fixed (does not move) | can move by looping/gliding |
| Reproduction | budding and sexual | mainly budding |

- Both show how life advances from single cells toward organised, multicellular bodies.

## Common errors and misconceptions

- **Calling a sponge a plant** — a sponge is an **animal** (Phylum Porifera); it is fixed and looks plant-like, but it feeds on food particles rather than photosynthesising.
- **Thinking a hydra has organs** — it does not; it has two cell layers and *tissues* at most, but no true organs or systems.
- **Confusing the stinging cells' name** — a hydra captures prey with **cnidocytes (stinging cells)** on its tentacles.
- **Assuming "simple" means "not an animal"** — sponges and hydra are genuine multicellular animals, just simple ones.`,
      workedExample: `**Task.** Explain how a hydra captures and digests its food, and identify two ways it is more advanced than a sponge.

**How a hydra feeds**

1. The hydra waits, anchored by its **basal disc**, with its **tentacles** spread out in the water.
2. When tiny prey (such as a water flea) touches a tentacle, **stinging cells (cnidocytes)** fire and **paralyse** it.
3. The tentacles bend inward and push the prey through the **mouth** at the top of the body.
4. Inside the central **body cavity**, the food is **digested**, and the useful materials are absorbed by the cells lining the cavity.

**Two ways the hydra is more advanced than a sponge**

- **Cell layers / early tissues:** the hydra's body wall has **two organised layers** of cells (with a jelly layer between), a step toward true tissues, whereas a sponge's cells work largely **independently** with no true tissues.
- **Active feeding and movement:** the hydra **captures prey** using stinging tentacles and can **move** by looping or gliding, while a sponge is **fixed** in place and can only **filter** food from the water passing through it.

**Conclusion:** although both are simple, the hydra's organised cell layers, stinging tentacles and ability to move make it a clear advance on the sponge.`,
      teachingTip:
        "Present sponges and hydra as an evolutionary 'staircase' from the unicellular organisms of Period II: single cell → sponge (cells cooperating but not organised) → hydra (two organised cell layers, the first hint of tissues). This framing turns two isolated animals into evidence of increasing organisation, which is exactly the theme the syllabus is building toward.",
      quiz: [
        {
          prompt: "Sponges belong to which phylum?",
          options: ["Porifera", "Cnidaria", "Chordata", "Mammalia"],
          correctIndex: 0,
          explanation: "Sponges are the Porifera ('pore-bearers').",
        },
        {
          prompt: "The name 'Porifera' refers to the sponge's many…",
          options: ["pores", "legs", "eyes", "bones"],
          correctIndex: 0,
          explanation: "Porifera means pore-bearing.",
        },
        {
          prompt: "How does a sponge obtain its food?",
          options: ["by filtering particles from water", "by hunting prey", "by photosynthesis", "by biting"],
          correctIndex: 0,
          explanation: "Sponges are filter feeders.",
        },
        {
          prompt: "Sponges have…",
          options: ["no true tissues or organs", "a brain", "a backbone", "true muscles"],
          correctIndex: 0,
          explanation: "Their cells work fairly independently; no true tissues.",
        },
        {
          prompt: "The large opening at the top of a sponge through which water leaves is the…",
          options: ["osculum", "mouth", "tentacle", "basal disc"],
          correctIndex: 0,
          explanation: "Water exits through the osculum.",
        },
        {
          prompt: "The needle-like structures that support a sponge are called…",
          options: ["spicules", "tentacles", "spines", "cilia"],
          correctIndex: 0,
          explanation: "Spicules form the sponge's supporting skeleton.",
        },
        {
          prompt: "The hydra belongs to which phylum?",
          options: ["Cnidaria", "Porifera", "Chordata", "Fungi"],
          correctIndex: 0,
          explanation: "Hydra is a cnidarian.",
        },
        {
          prompt: "A hydra anchors itself using its…",
          options: ["basal disc", "tentacles", "osculum", "spicules"],
          correctIndex: 0,
          explanation: "The basal disc attaches the hydra to a surface.",
        },
        {
          prompt: "The hydra captures prey using…",
          options: ["stinging cells on its tentacles", "filter pores", "a beak", "roots"],
          correctIndex: 0,
          explanation: "Cnidocytes (stinging cells) paralyse prey.",
        },
        {
          prompt: "The hydra's body wall is made of…",
          options: ["two layers of cells", "a single cell", "a hard shell", "many organs"],
          correctIndex: 0,
          explanation: "Two cell layers with jelly between — an early step to tissues.",
        },
        {
          prompt: "How does a hydra mainly reproduce?",
          options: ["asexually by budding", "by laying many eggs only", "by seeds", "by splitting the tentacles"],
          correctIndex: 0,
          explanation: "A bud grows from the side and breaks off as a new hydra.",
        },
        {
          prompt: "Where does a hydra digest its food?",
          options: ["in a central body cavity", "in its tentacles", "outside its body", "in the basal disc"],
          correctIndex: 0,
          explanation: "Food is pushed through the mouth into the body cavity.",
        },
        {
          prompt: "Which animal is fixed in place and cannot move about?",
          options: ["the sponge", "the hydra", "both move freely", "neither exists"],
          correctIndex: 0,
          explanation: "Sponges are sessile (fixed); hydra can move.",
        },
        {
          prompt: "How can a hydra move?",
          options: ["by looping or gliding", "by swimming with fins", "by flying", "it cannot move"],
          correctIndex: 0,
          explanation: "Hydra loops/somersaults or glides on its basal disc.",
        },
        {
          prompt: "Sponges mostly live…",
          options: ["attached to surfaces in water", "on dry land", "inside other animals", "in the air"],
          correctIndex: 0,
          explanation: "Sponges are aquatic and attached to surfaces.",
        },
        {
          prompt: "Which feature makes the hydra more advanced than the sponge?",
          options: [
            "organised cell layers (early tissues)",
            "having no cells",
            "being unicellular",
            "having a backbone",
          ],
          correctIndex: 0,
          explanation: "The hydra's two organised cell layers are a step toward tissues.",
        },
        {
          prompt: "The tentacles of a hydra surround its…",
          options: ["mouth", "basal disc", "osculum", "spicules"],
          correctIndex: 0,
          explanation: "Tentacles ring the mouth at the top of the body.",
        },
        {
          prompt: "Water flows through a sponge to allow it to…",
          options: ["obtain food and oxygen", "fly", "make seeds", "grow legs"],
          correctIndex: 0,
          explanation: "The water current brings food particles and oxygen.",
        },
        {
          prompt: "Which reproduction method is common to BOTH sponge and hydra?",
          options: ["budding", "producing flowers", "internal skeleton growth", "photosynthesis"],
          correctIndex: 0,
          explanation: "Both can reproduce asexually by budding.",
        },
        {
          prompt: "Sponges and hydra are studied as examples of…",
          options: [
            "simple multicellular animals",
            "unicellular organisms",
            "flowering plants",
            "fungi",
          ],
          correctIndex: 0,
          explanation: "They show early stages of multicellular organisation.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Describe how a sponge feeds and state one way its body is supported.",
          answerKey:
            "A sponge is a filter feeder: water is drawn in through its pores and out through the osculum, and food particles are filtered from the water as it passes through. Its body is supported by needle-like spicules (its skeleton). Award marks for the filter-feeding process and the mention of spicules.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which structure does a hydra use to paralyse its prey?",
          options: ["stinging cells on its tentacles", "spicules", "the osculum", "the basal disc"],
          correctIndex: 0,
          answerKey: "Cnidocytes (stinging cells) on the tentacles paralyse prey.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give two ways in which a hydra is more advanced than a sponge.",
          answerKey:
            "Accept any two: the hydra has two organised cell layers (early tissues) while the sponge has none; the hydra actively captures prey with stinging tentacles while the sponge only filters; the hydra can move while the sponge is fixed. Award a mark per valid difference.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Compare the sponge and the hydra as simple multicellular animals, referring to their body organisation, feeding and movement.",
          answerKey:
            "A strong answer compares: organisation — the sponge has no true tissues (cells work independently, supported by spicules), while the hydra has two organised cell layers, an early step toward tissues; feeding — the sponge is a filter feeder drawing water through its pores, while the hydra captures prey with stinging tentacles and digests it in a body cavity; movement — the sponge is fixed in place, while the hydra can loop or glide. It should conclude that both show the advance from single cells toward organised multicellular bodies, with the hydra the more advanced. Award marks for accurate comparison across organisation, feeding and movement.",
          marks: 5,
        },
      ],
    },
  ],
};
