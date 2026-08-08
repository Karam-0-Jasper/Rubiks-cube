import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 10,
// Semester One, Period III: Multicellular Organisms and Reproductive Structures.
// Topics follow the five CONTENTS items: (1) tissues, organs and systems;
// (2) sponges and hydra; (3) worms; (4) human reproductive structures;
// (5) substance abuse and sexual desires.
export const biologyG10P3: PeriodContent = {
  grade: 10,
  number: 3,
  title: "Multicellular Organisms and Reproductive Structures",
  summary:
    "Period III of the MoE Grade 10 Biology syllabus. Learners develop the idea that tissues build organs and organs build systems, study simple multicellular animals (sponges and hydra) and the worms, and examine the human reproductive structures, the menstrual cycle, prevention of pregnancy and STIs, and the dangers of substance abuse.",
  topics: [
    // source: OpenStax — Biology 2e, 33.2 Animal Primary Tissues (https://openstax.org/books/biology-2e/pages/33-2-animal-primary-tissues)
    {
      slug: "levels-of-organisation",
      title: "Levels of Organisation: Cells, Tissues, Organs and Systems",
      objective:
        "By the end of the topic, learners should be able to describe how cells build tissues, tissues build organs and organs build systems, name the four main animal tissues and their functions, and list the characteristics of multicellular organisms.",
      estimatedMinutes: 130,
      notes: `## From cell to organism

- In a **multicellular organism**, cells are not all alike; they are **specialised** and grouped so that the whole body works as one.
- The levels of organisation rise in complexity:

**Cells → Tissues → Organs → Organ systems → Organism**

- **Tissue** — a group of similar cells carrying out a related function.
- **Organ** — different tissues combined to perform a specific job (e.g. the heart, the kidney).
- **Organ system** — organs working together for a function (e.g. the digestive system).
- **Organism** — organ systems together forming a whole living thing.

\`\`\`svg The rising levels of organisation
<svg viewBox="0 0 380 70" role="img" aria-label="Cell to tissue to organ to system to organism">
  <g font-size="9" text-anchor="middle" fill="currentColor">
    <circle cx="30" cy="35" r="10" fill="none" stroke="currentColor"/><text x="30" y="60">cell</text>
    <rect x="70" y="25" width="30" height="20" fill="none" stroke="currentColor"/><text x="85" y="60">tissue</text>
    <ellipse cx="150" cy="35" rx="18" ry="12" fill="none" stroke="currentColor"/><text x="150" y="60">organ</text>
    <rect x="205" y="22" width="40" height="26" rx="4" fill="none" stroke="currentColor"/><text x="225" y="60">system</text>
    <rect x="290" y="18" width="46" height="34" rx="6" fill="none" stroke="currentColor"/><text x="313" y="60">organism</text>
    <line x1="42" y1="35" x2="68" y2="35" stroke="currentColor"/><line x1="102" y1="35" x2="130" y2="35" stroke="currentColor"/>
    <line x1="170" y1="35" x2="203" y2="35" stroke="currentColor"/><line x1="247" y1="35" x2="288" y2="35" stroke="currentColor"/>
  </g>
</svg>
\`\`\`

## The four main animal tissues

| Tissue | Function |
| --- | --- |
| **Epithelial** | Covers the outside of organs and lines internal surfaces (skin, gut lining) |
| **Connective** | Supports and binds other tissues; a matrix of cells in a non-living substance (bone, blood, cartilage) |
| **Muscle** | Produces movement by contraction (skeletal, smooth, cardiac) |
| **Nervous** | Receives and transmits electrical impulses (brain, nerves) |

## Advantages of being multicellular

- **Division of labour** — cells specialise, so tasks are done more efficiently.
- **Larger size** and longer life become possible.
- **Complex activities** — movement, sensing, digestion — can be carried out by dedicated systems.

## Characteristics of multicellular organisms

- Made of **many cells** that are **specialised** and **coordinated**.
- Show **division of labour** among tissues, organs and systems.
- Cells depend on one another (they cannot survive alone).

## Common errors and misconceptions

- **"Tissue = organ"** — a tissue is one kind of cell doing one job; an organ combines **several tissues**.
- **Reversing the hierarchy** — it rises cell → tissue → organ → system → organism, not the reverse.
- **Blood is not a tissue** — blood **is** a connective tissue (cells in a fluid matrix).
- **Every cell in the body is the same** — cells are **specialised** (nerve, muscle, epithelial…) for different jobs.`,
      workedExample: `**Question:** The stomach is described as an organ. Using the levels of organisation, explain what this means and identify which tissues it contains.

**Solution**

*Step 1 — where the stomach sits in the hierarchy.* An **organ** is made of several **tissues** working together for one main job; the stomach's job is to store and begin digesting food.

*Step 2 — the tissues in the stomach.*
- **Epithelial tissue** lines the inside and secretes digestive juices and mucus.
- **Muscle tissue** in the wall contracts to churn and mix the food.
- **Connective tissue** binds the layers together and carries blood vessels.
- **Nervous tissue** controls the timing of the muscle contractions and secretions.

*Step 3 — the next level up.* The stomach does not work alone; with the mouth, oesophagus, intestines, liver and pancreas it forms the **digestive system** (an organ system). All the systems together make the **organism**.

**Answer:** the stomach is an organ because it is built from epithelial, muscle, connective and nervous tissues working together; it is part of the digestive system, which is part of the whole organism — showing the sequence cell → tissue → organ → system → organism.`,
      quiz: [
        { prompt: "The correct order of the levels of organisation is", options: ["organ → cell → tissue → system", "cell → tissue → organ → system → organism", "system → organ → tissue → cell", "tissue → organ → cell → system"], correctIndex: 1, explanation: "Complexity rises cell → tissue → organ → system → organism." },
        { prompt: "A tissue is", options: ["a single cell", "a group of similar cells doing a related function", "several organs", "a whole organism"], correctIndex: 1, explanation: "Similar cells with a related function form a tissue." },
        { prompt: "An organ is made of", options: ["one type of cell only", "several tissues working together", "one tissue only", "many organisms"], correctIndex: 1, explanation: "Different tissues combine to form an organ." },
        { prompt: "Which tissue covers organs and lines internal surfaces?", options: ["Epithelial", "Muscle", "Nervous", "Connective"], correctIndex: 0, explanation: "Epithelial tissue covers and lines." },
        { prompt: "Which tissue produces movement by contracting?", options: ["Nervous", "Muscle", "Connective", "Epithelial"], correctIndex: 1, explanation: "Muscle tissue contracts to cause movement." },
        { prompt: "Which tissue transmits electrical impulses?", options: ["Nervous", "Epithelial", "Muscle", "Connective"], correctIndex: 0, explanation: "Nervous tissue carries impulses." },
        { prompt: "Bone, blood and cartilage are examples of", options: ["connective tissue", "muscle tissue", "nervous tissue", "epithelial tissue"], correctIndex: 0, explanation: "Connective tissue supports and binds." },
        { prompt: "Organs working together for one function form an", options: ["organ system", "organism", "tissue", "cell"], correctIndex: 0, explanation: "The digestive system is an example." },
        { prompt: "An advantage of being multicellular is", options: ["division of labour among specialised cells", "cells cannot specialise", "smaller size only", "no coordination needed"], correctIndex: 0, explanation: "Specialisation makes tasks efficient." },
        { prompt: "Blood is classified as a", options: ["connective tissue", "muscle tissue", "epithelial tissue", "nervous tissue"], correctIndex: 0, explanation: "Blood is cells in a fluid matrix — connective tissue." },
        { prompt: "Which is the largest, most complex level?", options: ["organism", "cell", "tissue", "organ"], correctIndex: 0, explanation: "The organism is the whole living thing." },
        { prompt: "The heart is best described as a", options: ["organ", "tissue", "cell", "system"], correctIndex: 0, explanation: "It combines several tissues for one job." },
        { prompt: "Cells that do different jobs are said to be", options: ["specialised", "identical", "dead", "single-celled"], correctIndex: 0, explanation: "Specialised cells carry out particular tasks." },
        { prompt: "The digestive system is an example of a(n)", options: ["organ system", "single organ", "tissue", "cell"], correctIndex: 0, explanation: "Several organs form the digestive system." },
        { prompt: "Which tissue lines the inside of the gut?", options: ["epithelial", "nervous", "muscle only", "connective only"], correctIndex: 0, explanation: "Epithelial tissue lines the gut." },
        { prompt: "The three types of muscle tissue are", options: ["skeletal, smooth, cardiac", "bone, blood, cartilage", "brain, nerve, cord", "skin, gut, lung"], correctIndex: 0, explanation: "Skeletal, smooth and cardiac muscle." },
        { prompt: "In multicellular organisms, cells", options: ["depend on one another", "each live independently", "never specialise", "are all identical"], correctIndex: 0, explanation: "Specialised cells depend on the whole body." },
        { prompt: "Which correctly pairs tissue and function?", options: ["Muscle – transmits impulses", "Nervous – contracts", "Epithelial – covers and lines", "Connective – produces movement"], correctIndex: 2, explanation: "Epithelial tissue covers and lines." },
        { prompt: "The skin is an example of a(n)", options: ["organ", "tissue only", "cell", "system only"], correctIndex: 0, explanation: "Skin is an organ made of several tissues." },
        { prompt: "Division of labour means", options: ["different cells do different jobs", "all cells do the same job", "cells stop working", "organs disappear"], correctIndex: 0, explanation: "Specialised cells share the work." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Arrange these in order of increasing complexity: organ, cell, organism, tissue, organ system.", answerKey: "Cell, tissue, organ, organ system, organism. Full marks only if fully correct; deduct 1 per misplacement.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Which tissue is responsible for movement?", options: ["Epithelial", "Muscle", "Nervous", "Connective"], correctIndex: 1, answerKey: "Muscle tissue. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Name the four main types of animal tissue and give one function of each.", answerKey: "Epithelial – covers/lines; connective – supports/binds; muscle – movement; nervous – transmits impulses. 1 mark each for tissue + function (max 8, capped at 8).", marks: 8 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between a tissue and an organ, with an example of each.", answerKey: "A tissue is a group of similar cells doing one job (e.g. muscle tissue); an organ is several tissues combined for a specific function (e.g. the heart). Award marks for the definitions and valid examples.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the advantages of a multicellular body plan over a unicellular one, using the levels of organisation.", answerKey: "Multicellularity allows specialisation/division of labour (5), larger size and longer life (3), and complex activities carried out by dedicated tissues, organs and systems (5). Reference the cell → tissue → organ → system → organism hierarchy (up to 2). Reward clear examples.", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 28.1 Phylum Porifera & 28.2 Phylum Cnidaria (https://openstax.org/books/biology-2e/pages/28-1-phylum-porifera)
    {
      slug: "sponges-and-hydra",
      title: "Simple Multicellular Animals: Sponges and Hydra",
      objective:
        "By the end of the topic, learners should be able to describe the general characteristics and morphology of sponges (Porifera) and hydra (Cnidaria), including their cell types, feeding and body plans.",
      estimatedMinutes: 110,
      notes: `## Sponges (Phylum Porifera)

- The **simplest** of all animals; mostly marine and **sessile** (fixed in one place).
- Body = an irregular hollow cylinder with a large central cavity (the **spongocoel**).
- **No true tissues or organs** — but the cells are specialised.

**Water flow (how they feed):**
- Water enters through many tiny pores (**ostia**), passes through the body, and leaves by a large opening (the **osculum**).
- Sponges are **filter feeders**: they strain food particles from the water.

**Main cell types:**
- **Choanocytes (collar cells)** — lined with a collar and a flagellum; beat to drive water and trap food.
- **Amoebocytes** — move through the body carrying nutrients; can form other cell types.
- **Pinacocytes** — form the outer protective layer.
- **Porocytes** — cells that make the pores.

**Skeleton:** supported by **spicules** (small needle-like structures of silica or calcium carbonate).

## Hydra (Phylum Cnidaria)

- A small freshwater animal with **radial symmetry** and **true tissues** (two body layers, **diploblastic**).
- Body form is a **polyp**: a tube fixed at one end, with a **mouth** surrounded by **tentacles** at the other.

**Stinging cells:**
- The tentacles carry **cnidocytes** containing **nematocysts** — coiled, barbed threads that shoot out to sting and capture prey.

**Digestion:**
- Food is taken through the single **mouth** into a **gastrovascular cavity** (one opening acts as both mouth and anus).

**Body forms in Cnidaria:**
- **Polyp** — fixed, tube-shaped (Hydra is only a polyp).
- **Medusa** — free-swimming, bell-shaped (e.g. jellyfish).

\`\`\`svg Hydra: a polyp with tentacles and stinging cells around the mouth
<svg viewBox="0 0 200 160" role="img" aria-label="Hydra polyp with tentacles, mouth and body">
  <line x1="100" y1="80" x2="100" y2="150" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
  <circle cx="100" cy="70" r="12" fill="none" stroke="currentColor"/>
  <g stroke="currentColor" stroke-width="2" fill="none">
    <path d="M100 62 q -30 -30 -45 -45"/>
    <path d="M100 60 q -12 -34 -18 -50"/>
    <path d="M100 60 q 12 -34 18 -50"/>
    <path d="M100 62 q 30 -30 45 -45"/>
  </g>
  <text x="100" y="70" font-size="8" text-anchor="middle" fill="currentColor">mouth</text>
  <text x="150" y="30" font-size="8" fill="currentColor">tentacles</text>
  <text x="112" y="120" font-size="8" fill="currentColor">body</text>
</svg>
\`\`\`

## Sponge vs hydra — key contrast

| Feature | Sponge (Porifera) | Hydra (Cnidaria) |
| --- | --- | --- |
| True tissues | No | Yes |
| Symmetry | Irregular / none | Radial |
| Feeding | Filter feeding | Capture prey with tentacles |
| Stinging cells | No | Yes (nematocysts) |
| Body opening | Ostia + osculum | Single mouth |

## Common errors and misconceptions

- **"Sponges are plants"** — sponges are **animals** (they feed on particles and have specialised cells).
- **"Hydra has no tissues"** — Hydra (Cnidaria) **has** true tissues; it is the **sponge** that lacks true tissues.
- **Confusing ostia and osculum** — water **enters** many small **ostia** and **leaves** the single large **osculum**.
- **Nematocysts are in sponges** — no; stinging cells (nematocysts) are a feature of **cnidarians** like Hydra.`,
      workedExample: `**Question:** A learner examines two small aquatic animals. Animal X is fixed to a rock, has many tiny pores over its surface and one large opening at the top, and strains food from the water. Animal Y is a small tube with a ring of tentacles around a single mouth and stings tiny prey. Identify each and give two supporting features.

**Solution**

*Animal X.* Many tiny pores (**ostia**), one large opening (**osculum**) and **filter feeding** are the features of a **sponge (Porifera)**.
- Support 1: it is **sessile** (fixed to the rock).
- Support 2: it feeds by **straining particles** from water rather than capturing prey — it has **no tentacles** and no stinging cells.

*Animal Y.* A tube with **tentacles** around a **single mouth** that **stings prey** is a **Hydra (Cnidaria)**.
- Support 1: the tentacles carry **cnidocytes/nematocysts** (stinging cells).
- Support 2: it has **radial symmetry** and a single mouth leading to a **gastrovascular cavity**.

**Answer:** Animal X is a sponge (ostia, osculum, filter feeding, sessile); Animal Y is a Hydra (tentacles, single mouth, stinging cells, radial symmetry).`,
      quiz: [
        { prompt: "Sponges belong to the phylum", options: ["Porifera", "Cnidaria", "Annelida", "Arthropoda"], correctIndex: 0, explanation: "Sponges are Porifera, the pore-bearers." },
        { prompt: "Hydra belongs to the phylum", options: ["Cnidaria", "Porifera", "Platyhelminthes", "Annelida"], correctIndex: 0, explanation: "Hydra is a cnidarian." },
        { prompt: "Sponges feed by", options: ["filter feeding", "hunting large prey", "photosynthesis", "grazing on grass"], correctIndex: 0, explanation: "They strain food particles from water." },
        { prompt: "Water leaves a sponge through the", options: ["osculum", "ostia", "mouth", "tentacle"], correctIndex: 0, explanation: "The large osculum is the exit." },
        { prompt: "The collar cells that drive water through a sponge are", options: ["choanocytes", "amoebocytes", "pinacocytes", "porocytes"], correctIndex: 0, explanation: "Choanocytes have a collar and flagellum." },
        { prompt: "Sponges are supported by", options: ["spicules", "bones", "a shell", "a backbone"], correctIndex: 0, explanation: "Spicules of silica or calcium carbonate support them." },
        { prompt: "Which animal has true tissues?", options: ["Hydra", "Sponge", "Neither", "Both lack them"], correctIndex: 0, explanation: "Cnidarians like Hydra have true tissues; sponges do not." },
        { prompt: "The stinging cells of Hydra are called", options: ["cnidocytes (with nematocysts)", "choanocytes", "amoebocytes", "porocytes"], correctIndex: 0, explanation: "Cnidocytes contain nematocysts." },
        { prompt: "Hydra captures prey using its", options: ["tentacles", "spicules", "ostia", "osculum"], correctIndex: 0, explanation: "Tentacles with stinging cells trap prey." },
        { prompt: "A sponge is described as sessile, meaning it", options: ["stays fixed in one place", "swims fast", "flies", "burrows in soil"], correctIndex: 0, explanation: "Sessile animals do not move about." },
        { prompt: "The single opening of a Hydra serves as", options: ["both mouth and anus", "only an anus", "an eye", "a lung"], correctIndex: 0, explanation: "The gastrovascular cavity has one opening." },
        { prompt: "Which cell type carries nutrients through a sponge?", options: ["amoebocytes", "choanocytes only", "spicules", "cnidocytes"], correctIndex: 0, explanation: "Amoebocytes move nutrients about." },
        { prompt: "The free-swimming, bell-shaped cnidarian body form is the", options: ["medusa", "polyp", "spicule", "ostium"], correctIndex: 0, explanation: "The medusa is the jellyfish form; Hydra is only a polyp." },
        { prompt: "Sponges lack", options: ["true tissues and organs", "any cells", "a cell membrane", "water"], correctIndex: 0, explanation: "Their cells are specialised but form no true tissues." },
        { prompt: "The many tiny pores of a sponge are the", options: ["ostia", "osculum", "tentacles", "nematocysts"], correctIndex: 0, explanation: "Water enters through the ostia." },
        { prompt: "Hydra shows which symmetry?", options: ["radial", "none", "bilateral only", "spiral"], correctIndex: 0, explanation: "Cnidarians are radially symmetrical." },
        { prompt: "Which animal is the simpler of the two?", options: ["sponge", "hydra", "they are equal", "neither is simple"], correctIndex: 0, explanation: "Sponges are the simplest animals, without true tissues." },
        { prompt: "The central cavity of a sponge is the", options: ["spongocoel", "gastrovascular cavity", "stomach", "osculum"], correctIndex: 0, explanation: "The spongocoel is the large central cavity." },
        { prompt: "Nematocysts are used by Hydra to", options: ["sting and capture prey", "filter water", "make food", "move on land"], correctIndex: 0, explanation: "They shoot barbed threads into prey." },
        { prompt: "Which pair correctly matches animal and feature?", options: ["Sponge – nematocysts", "Hydra – ostia", "Sponge – filter feeding", "Hydra – spicules"], correctIndex: 2, explanation: "Sponges are filter feeders." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Draw and label a sponge, showing ostia, osculum and the central cavity, and state how water flows through it.", answerKey: "Labels: ostia (in), osculum (out), spongocoel/central cavity. Water enters through ostia and leaves through the osculum, food strained on the way. 1 mark per label (3) + 2 for correct water flow + up to 3 for a clear drawing.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Which feature belongs to Hydra but NOT to a sponge?", options: ["ostia", "spicules", "nematocysts", "choanocytes"], correctIndex: 2, answerKey: "Nematocysts (stinging cells). Option C.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two ways in which a Hydra is more advanced than a sponge.", answerKey: "Any two: Hydra has true tissues; radial symmetry; tentacles/stinging cells to capture prey; a mouth and gastrovascular cavity. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Name the three sponge cell types and give one function of each.", answerKey: "Choanocytes – drive water/trap food; amoebocytes – carry nutrients/form cells; pinacocytes – protective outer layer (porocytes – form pores also accepted). 1 mark per cell + function, max 6.", marks: 6 },
        { type: "ESSAY", prompt: "Compare sponges and hydra in terms of body organisation, feeding and defence, and explain why both are still classed as simple animals.", answerKey: "Sponge: no true tissues, filter feeding through ostia/osculum, spicules for support, no stinging cells (5). Hydra: true tissues, radial symmetry, captures prey with tentacles and nematocysts, single mouth/gastrovascular cavity (5). Both simple: lack of complex organ systems, few tissue layers, small size (up to 5). Reward clear contrast.", marks: 15 },
      ],
    },
    // source: OpenStax — Concepts of Biology, 15.3 Flatworms, Nematodes, and Arthropods; parasitic worms from OpenStax Microbiology 5.2 Parasitic Helminths (https://openstax.org/books/concepts-biology/pages/15-3-flatworms-nematodes-and-arthropods)
    {
      slug: "worms",
      title: "Worms: Flatworms, Roundworms and Segmented Worms",
      objective:
        "By the end of the topic, learners should be able to classify and describe flatworms, roundworms and segmented worms, explain parasitism among worms and their life cycles, and outline measures to prevent parasitic worm infections.",
      estimatedMinutes: 130,
      notes: `## The three groups of worms

| Group | Phylum | Body | Examples |
| --- | --- | --- | --- |
| **Flatworms** | Platyhelminthes | flat, unsegmented | planarian, flukes, tapeworms |
| **Roundworms** | Nematoda | round, unsegmented, pointed ends | Ascaris, hookworm, filarial worm, trichina worm |
| **Segmented worms** | Annelida | round, **segmented** | earthworm, leech |

## Flatworms (Platyhelminthes)

- Flat, soft, **unsegmented**; an **incomplete gut** (one opening) in most.
- **Planarian** — **free-living** in fresh water; has a simple nervous system with an eyespot; not a parasite.
- **Flukes (trematodes)** — **parasites** with **suckers**; attach to the liver, blood vessels or gut (e.g. **blood fluke**, **liver fluke**).
- **Tapeworms (cestodes)** — gut **parasites**; attach by a head (**scolex**) with hooks and suckers; a long body of segments; absorb digested food directly (no gut of their own).

## Roundworms (Nematoda)

- Round, **unsegmented**, pointed at both ends; a **complete gut** (mouth and anus).
- Many are **parasites of humans**:
  - **Ascaris** — large intestinal roundworm; eggs swallowed in contaminated food/water.
  - **Hookworm** — larvae bore through the skin of bare feet; suck blood in the gut (causes anaemia).
  - **Filarial worm** — spread by mosquito bite; blocks lymph vessels (elephantiasis).
  - **Trichina worm** — from eating undercooked pork.

## Segmented worms (Annelida)

- Body divided into many **segments** (metamerism), inside and out.
- **Earthworm** — burrows in soil; has a **clitellum** (a swollen band) for reproduction; helps aerate and enrich the soil.
- **Leech** — has **suckers** at both ends; many suck blood.

## Parasitism, hosts and life cycles

- A **parasite** lives on/in a **host** and takes food from it.
- Many worms need more than one host: a **primary (definitive) host** where the adult lives, and an **intermediate host** where larvae develop.
- Adaptations of parasitic worms: **hooks and suckers** to hold on, thick cuticle to resist digestion, and **huge egg production**.

## Preventing parasitic worm infections

- Wash hands after using the latrine and **before eating**.
- **Cook meat and fish thoroughly** (kills tapeworm and trichina larvae).
- Wear **shoes** to stop hookworm entering the feet.
- Use **clean water** and **safe faeces disposal** (good sanitation).
- Control mosquitoes (against filarial worm).

## Common errors and misconceptions

- **"All worms are parasites"** — the **planarian** and the **earthworm** are free-living; only some worms are parasites.
- **Tapeworm has a gut** — it has **no gut**; it absorbs digested food through its body wall.
- **Hookworm enters by the mouth** — hookworm larvae usually enter through the **skin of the feet**.
- **Earthworm is a flatworm** — the earthworm is a **segmented worm** (annelid).`,
      workedExample: `**Question:** A child who often walks barefoot on damp, contaminated ground becomes weak and pale (anaemic). A stool test shows worm eggs. Identify the likely worm, explain how it caused anaemia, and give two ways the infection could have been prevented.

**Solution**

*Step 1 — identify the worm.* Entry through the **skin of bare feet** on damp, faeces-contaminated ground, plus **anaemia**, points to the **hookworm** (a parasitic roundworm).

*Step 2 — how it caused anaemia.* Hookworm larvae bore through the skin, travel to the intestine, and the adults **attach to the gut wall and suck blood**. Continuous blood loss lowers the red-cell count, causing **anaemia** (weakness and pallor).

*Step 3 — prevention.*
- **Wear shoes** so larvae cannot enter through the feet.
- Use **latrines and safe faeces disposal** so the ground is not contaminated (also treat drinking water and wash hands).

**Answer:** the worm is hookworm; it caused anaemia by sucking blood from the gut wall; wearing shoes and proper sanitation would have prevented it.`,
      quiz: [
        { prompt: "Flatworms belong to the phylum", options: ["Platyhelminthes", "Nematoda", "Annelida", "Arthropoda"], correctIndex: 0, explanation: "Flatworms are Platyhelminthes." },
        { prompt: "Which worm is free-living, not a parasite?", options: ["planarian", "tapeworm", "liver fluke", "Ascaris"], correctIndex: 0, explanation: "The planarian lives freely in fresh water." },
        { prompt: "Tapeworms attach to the gut wall by their", options: ["scolex (head with hooks and suckers)", "tail", "eyespot", "clitellum"], correctIndex: 0, explanation: "The scolex has hooks and suckers." },
        { prompt: "Roundworms belong to the phylum", options: ["Nematoda", "Platyhelminthes", "Annelida", "Cnidaria"], correctIndex: 0, explanation: "Roundworms are nematodes." },
        { prompt: "Hookworm usually enters the body through the", options: ["skin of the feet", "mouth only", "ears", "nose"], correctIndex: 0, explanation: "Larvae bore through bare skin." },
        { prompt: "Hookworm causes anaemia because it", options: ["sucks blood in the gut", "eats bones", "blocks the lungs", "stops breathing"], correctIndex: 0, explanation: "Blood loss lowers red-cell count." },
        { prompt: "Segmented worms belong to the phylum", options: ["Annelida", "Nematoda", "Platyhelminthes", "Porifera"], correctIndex: 0, explanation: "Annelids are segmented." },
        { prompt: "The earthworm's swollen band used in reproduction is the", options: ["clitellum", "scolex", "sucker", "cuticle"], correctIndex: 0, explanation: "The clitellum secretes the cocoon." },
        { prompt: "Which worm is spread by eating undercooked pork?", options: ["trichina worm", "planarian", "earthworm", "leech"], correctIndex: 0, explanation: "Trichina worm comes from undercooked pork." },
        { prompt: "The filarial worm is spread by", options: ["mosquito bite", "bare feet", "eating meat", "drinking milk"], correctIndex: 0, explanation: "Mosquitoes transmit the filarial worm." },
        { prompt: "A tapeworm has no gut, so it", options: ["absorbs digested food through its body wall", "hunts prey", "photosynthesises", "eats soil"], correctIndex: 0, explanation: "It absorbs food directly from the host's gut." },
        { prompt: "Ascaris eggs usually enter the body via", options: ["contaminated food or water", "the skin of feet", "mosquito bite", "the ears"], correctIndex: 0, explanation: "Swallowed eggs from contaminated food/water." },
        { prompt: "Which worm is a blood-sucking annelid with suckers at both ends?", options: ["leech", "tapeworm", "hookworm", "planarian"], correctIndex: 0, explanation: "The leech is a segmented worm with suckers." },
        { prompt: "A parasite is an organism that", options: ["lives on/in a host and takes food from it", "helps its host", "makes its own food", "is always free-living"], correctIndex: 0, explanation: "Parasites feed at the host's expense." },
        { prompt: "Cooking meat thoroughly helps prevent", options: ["tapeworm and trichina infections", "malaria", "hookworm", "filariasis"], correctIndex: 0, explanation: "Heat kills larvae in meat." },
        { prompt: "Wearing shoes helps prevent", options: ["hookworm", "tapeworm", "malaria", "flukes"], correctIndex: 0, explanation: "Shoes stop hookworm larvae entering the feet." },
        { prompt: "The earthworm is useful because it", options: ["aerates and enriches the soil", "spreads malaria", "sucks blood", "destroys crops"], correctIndex: 0, explanation: "Burrowing improves soil." },
        { prompt: "Flukes hold onto their host using", options: ["suckers", "a clitellum", "spicules", "nematocysts"], correctIndex: 0, explanation: "Trematodes have suckers." },
        { prompt: "Which worm has a body divided into many segments?", options: ["earthworm", "tapeworm", "planarian", "Ascaris"], correctIndex: 0, explanation: "The earthworm is segmented (annelid)." },
        { prompt: "A common adaptation of parasitic worms is", options: ["producing huge numbers of eggs", "making their own food", "living without a host", "having no attachment organs"], correctIndex: 0, explanation: "Many eggs raise the chance of reaching a new host." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the three phyla of worms and give one example from each.", answerKey: "Platyhelminthes – planarian/fluke/tapeworm; Nematoda – Ascaris/hookworm/filarial/trichina; Annelida – earthworm/leech. 1 mark per phylum + example, max 6 (capped at 6).", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which worm has no digestive system of its own?", options: ["Earthworm", "Tapeworm", "Planarian", "Hookworm"], correctIndex: 1, answerKey: "The tapeworm absorbs digested food through its wall. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain how a tapeworm is adapted to a parasitic life.", answerKey: "A scolex with hooks and suckers to attach; no gut, absorbs digested food through its body wall; a thick cuticle resisting the host's digestion; produces very many eggs. Award marks for at least two clear adaptations.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State three measures to prevent parasitic worm infections.", answerKey: "Any three: wash hands after latrine/before eating; cook meat and fish well; wear shoes; use clean water and safe faeces disposal; control mosquitoes. 1 mark each.", marks: 3 },
        { type: "ESSAY", prompt: "Compare a free-living worm (earthworm) with a parasitic worm (tapeworm) in structure and way of life, and explain the adaptations that suit each to its habitat.", answerKey: "Earthworm: segmented, complete gut, burrows and feeds on soil organic matter, aerates soil, has clitellum for reproduction (5). Tapeworm: flat segmented body, scolex with hooks/suckers, no gut (absorbs food), thick cuticle, huge egg output, lives in host gut (5). Adaptations linked to habitat: free-living independence vs parasitic attachment and absorption (up to 5). Reward clear contrast.", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 43.3 Human Reproductive Anatomy and Gametogenesis; menstrual cycle from 43.4 (https://openstax.org/books/biology-2e/pages/43-3-human-reproductive-anatomy-and-gametogenesis)
    {
      slug: "human-reproductive-structures",
      title: "Human Reproductive Structures, the Menstrual Cycle and Prevention",
      objective:
        "By the end of the topic, learners should be able to name and give the functions of the male and female reproductive organs, describe the menstrual cycle, and explain how pregnancy and STIs can be prevented.",
      estimatedMinutes: 150,
      notes: `## The male reproductive system

| Organ | Function |
| --- | --- |
| **Testes** | Produce **sperm** and male hormones (testosterone) |
| **Scrotum** | Holds the testes outside the body, ~2 °C cooler, for sperm production |
| **Epididymis** | Where sperm **mature** and are stored |
| **Vas deferens (sperm duct)** | Carries sperm from the epididymis toward the urethra |
| **Penis** | Passes urine and delivers **semen** during intercourse |

- **Semen** = sperm + fluids from accessory glands. A **sperm** is a small cell with a tail (flagellum) for swimming and a head that penetrates the egg.

## The female reproductive system

| Organ | Function |
| --- | --- |
| **Ovaries** | Contain and develop **eggs (ova)**; make female hormones (oestrogen, progesterone) |
| **Oviduct (fallopian tube)** | Carries the egg toward the uterus; where **fertilisation** usually happens |
| **Uterus (womb)** | Where the fertilised egg implants and the baby develops; lined by the **endometrium** |
| **Cervix** | Neck of the uterus; opens into the vagina |
| **Vagina** | Receives the penis; passage for menstrual flow and for birth |

## The menstrual cycle (about 28 days)

1. **Menstruation (days 1–5)** — the uterus lining (endometrium) breaks down and is lost as blood flow.
2. **Repair / follicular phase** — the lining rebuilds; an egg matures in the ovary.
3. **Ovulation (~day 14)** — an egg is released from the ovary into the oviduct.
4. **Luteal phase** — the lining thickens, ready to receive a fertilised egg. If no fertilisation, the lining breaks down and the cycle repeats.

- **Fertile period** — around ovulation; an egg can be fertilised for about a day, and sperm survive a few days.

## The human life cycle

Infancy → juvenile (childhood) → **adolescence (puberty)** → adulthood → **senescence (old age)**.

- At **puberty**, hormones (testosterone in boys, oestrogen in girls) bring the reproductive organs to maturity and cause the secondary sexual characteristics.

## Preventing pregnancy and STIs

- **Abstinence** — not having sex; the only method that is **100% effective** against both pregnancy and STIs.
- **Condoms** — a barrier that helps prevent **both** pregnancy and STIs (the only common method that reduces STI spread).
- **Other contraceptives** — the pill, injection, implant, IUD; these prevent **pregnancy** but do **not** protect against STIs.
- **"Double protection"** — using a condom together with another method gives protection against both pregnancy and STIs.
- **Menstrual hygiene** — using clean sanitary materials, washing, and changing regularly protects health and dignity.

## Common errors and misconceptions

- **"Contraceptive pills protect against STIs"** — no; only **condoms** (and abstinence) reduce STI transmission.
- **"The safe/natural method is fully reliable"** — natural family planning does **not** prevent STIs and is easily mistimed, so it often fails.
- **Fertilisation happens in the uterus** — it usually happens in the **oviduct**; the embryo then implants in the uterus.
- **Menstrual blood is dirty/shameful** — it is a normal, healthy process; good hygiene, not shame, is what matters.`,
      workedExample: `**Question:** A couple wishes to space their children but the woman is also concerned about sexually transmitted infections. Explain which single method best meets both needs and why other contraceptives alone would not.

**Solution**

*Step 1 — identify the two needs.* (1) Prevent **pregnancy**; (2) reduce the risk of **STIs**.

*Step 2 — how contraceptives work.* Methods like the **pill, injection, implant and IUD** are very good at preventing **pregnancy** (they stop ovulation or fertilisation/implantation), but they do **nothing** to stop the exchange of body fluids that spreads STIs.

*Step 3 — the barrier method.* A **condom** is a **barrier** that both stops sperm reaching the egg (preventing pregnancy) **and** blocks the exchange of fluids (reducing STI spread). It is the only common method that protects against **both**.

*Step 4 — best advice.* For both needs, the **condom** is the single best method. Even better is **double protection** — a condom (against STIs and pregnancy) together with another contraceptive (extra protection against pregnancy).

**Answer:** the **condom** best meets both needs because it is a barrier against both sperm and infection; pills, injections and implants prevent pregnancy but give no protection against STIs.`,
      quiz: [
        { prompt: "Sperm are produced in the", options: ["testes", "penis", "epididymis", "vas deferens"], correctIndex: 0, explanation: "The testes make sperm and testosterone." },
        { prompt: "The scrotum keeps the testes", options: ["slightly cooler than the body", "warmer than the body", "inside the abdomen", "dry"], correctIndex: 0, explanation: "Cooler temperature is needed for sperm production." },
        { prompt: "Sperm mature and are stored in the", options: ["epididymis", "ovary", "uterus", "cervix"], correctIndex: 0, explanation: "Maturation occurs in the epididymis." },
        { prompt: "Eggs are produced in the", options: ["ovaries", "uterus", "vagina", "oviduct"], correctIndex: 0, explanation: "Ovaries develop the eggs and make hormones." },
        { prompt: "Fertilisation usually takes place in the", options: ["oviduct (fallopian tube)", "vagina", "ovary", "cervix"], correctIndex: 0, explanation: "The egg meets sperm in the oviduct." },
        { prompt: "The fertilised egg develops in the", options: ["uterus", "ovary", "vagina", "testis"], correctIndex: 0, explanation: "The embryo implants and grows in the uterus." },
        { prompt: "During menstruation the body loses the", options: ["uterus lining (endometrium)", "ovary", "cervix", "egg only"], correctIndex: 0, explanation: "The endometrium breaks down and is shed." },
        { prompt: "Ovulation is the", options: ["release of an egg from the ovary", "loss of the uterus lining", "making of sperm", "fertilisation of the egg"], correctIndex: 0, explanation: "An egg is released about day 14." },
        { prompt: "Which method protects against BOTH pregnancy and STIs?", options: ["condom", "the pill", "injection", "implant"], correctIndex: 0, explanation: "Condoms are a barrier against sperm and infection." },
        { prompt: "The only method that is 100% effective against pregnancy and STIs is", options: ["abstinence", "the pill", "the IUD", "natural family planning"], correctIndex: 0, explanation: "Not having sex prevents both entirely." },
        { prompt: "The tube that carries sperm from the epididymis is the", options: ["vas deferens", "oviduct", "urethra only", "cervix"], correctIndex: 0, explanation: "The vas deferens carries sperm onward." },
        { prompt: "Semen is", options: ["sperm plus fluids from glands", "urine", "egg cells", "blood"], correctIndex: 0, explanation: "Semen is sperm mixed with gland fluids." },
        { prompt: "At puberty, girls' reproductive organs mature mainly under the hormone", options: ["oestrogen", "testosterone", "insulin", "adrenaline"], correctIndex: 0, explanation: "Oestrogen drives female puberty." },
        { prompt: "Contraceptive pills prevent pregnancy but do NOT", options: ["protect against STIs", "stop ovulation", "work in women", "affect hormones"], correctIndex: 0, explanation: "Only condoms/abstinence reduce STI spread." },
        { prompt: "The neck of the uterus opening into the vagina is the", options: ["cervix", "oviduct", "ovary", "endometrium"], correctIndex: 0, explanation: "The cervix connects uterus and vagina." },
        { prompt: "The correct order of the human life cycle is", options: ["infancy, childhood, adolescence, adulthood, old age", "adulthood, infancy, old age, childhood", "old age, adulthood, adolescence, infancy", "adolescence, infancy, adulthood, childhood"], correctIndex: 0, explanation: "Infancy → juvenile → adolescence → adult → senescence." },
        { prompt: "'Double protection' means using", options: ["a condom together with another contraceptive", "two pills", "two injections", "no method at all"], correctIndex: 0, explanation: "A condom plus another method covers both risks." },
        { prompt: "A weakness of natural family planning is that it", options: ["does not prevent STIs and is easily mistimed", "is 100% reliable", "prevents all STIs", "needs no timing"], correctIndex: 0, explanation: "It gives no STI protection and often fails." },
        { prompt: "Good menstrual hygiene includes", options: ["using clean materials and changing regularly", "hiding the process in shame", "avoiding all washing", "never changing pads"], correctIndex: 0, explanation: "Cleanliness protects health and dignity." },
        { prompt: "The vagina serves as the", options: ["birth canal and passage for menstrual flow", "site of sperm production", "place where eggs form", "store for sperm"], correctIndex: 0, explanation: "It receives the penis and is the birth canal." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the function of each: (a) testes; (b) ovaries; (c) oviduct; (d) uterus.", answerKey: "(a) produce sperm and male hormones; (b) produce eggs and female hormones; (c) carries the egg / site of fertilisation; (d) where the fertilised egg implants and the baby develops. 2 marks each.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Which method protects against both pregnancy and STIs?", options: ["Contraceptive pill", "Condom", "Injection", "IUD"], correctIndex: 1, answerKey: "The condom is a barrier against sperm and infection. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe what happens during ovulation and menstruation.", answerKey: "Ovulation: an egg is released from the ovary into the oviduct (about day 14). Menstruation: if no fertilisation, the uterus lining (endometrium) breaks down and is lost as blood flow (days 1–5). 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why a contraceptive pill alone does not fully protect a person who is worried about STIs.", answerKey: "The pill prevents pregnancy (stops ovulation) but does not stop the exchange of body fluids that spreads STIs; only condoms (barrier) or abstinence reduce STI transmission. Award marks for the distinction.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the methods available for preventing pregnancy and STIs, comparing their effectiveness and explaining the value of abstinence and correct condom use for young people.", answerKey: "Abstinence: 100% effective against both, best for young people (4). Condoms: barrier protecting against both pregnancy and STIs; correct/consistent use matters (4). Other contraceptives (pill, injection, implant, IUD): effective against pregnancy only, no STI protection (4). Double protection concept (up to 3). Reward balanced, responsible discussion.", marks: 15 },
      ],
    },
    // source: LibreTexts — Medicine (Wellness, Lumen), Module 2A: Drug Use and Addiction (https://med.libretexts.org/Courses/Lumen_Learning/Book%3A_Wellness_(Lumen)/03%3A_Module_2_A-_Drug_Use_and_Addiction/3.04%3A_Treatment_Approaches_for_Drug_Addiction)
    {
      slug: "substance-abuse",
      title: "Substance Abuse and Sexual Desires",
      objective:
        "By the end of the topic, learners should be able to define drug and substance abuse, classify commonly abused drugs, describe their effects, and outline ways of preventing substance abuse.",
      estimatedMinutes: 110,
      notes: `## Definitions

- **Drug** — a substance that changes how the body or mind works.
- **Substance abuse** — the harmful or unsafe use of a drug, leading to physical and/or psychological **dependence** and damage to health and life.
- **Addiction** — a chronic but treatable disease in which a person cannot stop using a drug despite the harm it causes; it affects brain function and behaviour.

## Commonly abused drugs and substances

- Alcohol, tobacco (nicotine), cannabis (marijuana), heroin and other opioids, cocaine and other stimulants, sedatives, and inhalants.

## Classifying abused drugs

| Class | Effect on the body | Examples |
| --- | --- | --- |
| **Alcohol / depressants** | Slow down the nervous system | alcohol, sedatives |
| **Narcotics / opioids** | Relieve pain, cause drowsiness and strong dependence | heroin, opium, morphine, codeine |
| **Stimulants** | Speed up the nervous system | cocaine, amphetamines, nicotine, caffeine |
| **Hallucinogens** | Distort the senses and thinking | LSD, some cannabis effects |

## Effects of drug and substance abuse

- **On health:** damage to the liver, heart, lungs and brain; alcoholism causes serious **liver and heart disease**; overdose can kill.
- **On the mind:** dependence, mental disorders, poor judgement.
- **On behaviour and society:** accidents, crime, family break-up, loss of work and school performance.

## Substance abuse and sexual desires

- Alcohol and some drugs **lower judgement and self-control**, leading to **risky sexual behaviour** (unprotected sex, multiple partners).
- This raises the risk of **STIs, HIV and unwanted pregnancy**.
- Hormones at puberty naturally increase sexual desire; **self-control, values and good choices** — not drugs — are the healthy way to manage it.

## Preventing substance abuse

- **Say no** and avoid peer pressure; choose good friends.
- Know the **facts** about drugs and their harm.
- Keep busy with **sport, study, faith and hobbies**.
- Seek help early; addiction can be **treated** (detox, counselling, medicines, follow-up).
- Strong family and community support and clear laws help prevent abuse.

## Common errors and misconceptions

- **"Alcohol and tobacco are not drugs"** — they **are** drugs and are among the most commonly abused.
- **"You can stop any time"** — abuse leads to **dependence/addiction**, which is hard to stop without help.
- **"Drugs improve sexual performance safely"** — they lower judgement and lead to **risky behaviour** and disease.
- **"Addiction cannot be treated"** — it is a **treatable** disease with counselling, medicines and support.`,
      workedExample: `**Question:** A teenager begins drinking alcohol at parties to "fit in". Over months he drinks more to feel the same effect, his grades fall, and after drinking he has unprotected sex. Explain the biology and risks in this pattern and advise on prevention.

**Solution**

*Step 1 — what is happening.* Alcohol is a **depressant drug** that slows the nervous system. Needing **more to feel the same effect** shows growing **tolerance**, a step toward **dependence/addiction**.

*Step 2 — effects.* Alcohol harms the **liver, heart and brain**, and lowers **judgement and self-control**. Falling grades reflect poor concentration and lost time.

*Step 3 — the sexual risk.* With judgement lowered, he engages in **risky sexual behaviour** (unprotected sex), raising the risk of **STIs, HIV and unwanted pregnancy**.

*Step 4 — prevention and help.*
- **Avoid the situation** and the peer pressure; choose supportive friends.
- Replace it with **sport, study and hobbies**.
- Learn the **facts** about alcohol's harm.
- **Seek help early** — counselling and support can treat dependence.

**Answer:** the pattern shows tolerance leading toward dependence, with health damage and risky sexual behaviour raising STI/pregnancy risk; prevention rests on refusal skills, healthy activities, accurate knowledge and early help.`,
      quiz: [
        { prompt: "Substance abuse is best defined as", options: ["harmful use of a drug leading to dependence", "any use of medicine", "eating too much food", "drinking water"], correctIndex: 0, explanation: "It is unsafe use causing dependence and harm." },
        { prompt: "A drug is a substance that", options: ["changes how the body or mind works", "is always illegal", "is only food", "has no effect"], correctIndex: 0, explanation: "Drugs alter body or mind function." },
        { prompt: "Addiction is", options: ["a treatable disease of compulsive drug use", "a food habit", "always incurable", "a type of exercise"], correctIndex: 0, explanation: "It is chronic but treatable." },
        { prompt: "Alcohol acts on the nervous system as a", options: ["depressant", "stimulant", "vitamin", "hallucinogen only"], correctIndex: 0, explanation: "Alcohol slows the nervous system." },
        { prompt: "Heroin, opium and morphine are", options: ["narcotics/opioids", "stimulants", "vitamins", "antibiotics"], correctIndex: 0, explanation: "They are opioids causing strong dependence." },
        { prompt: "Cocaine and amphetamines are", options: ["stimulants", "depressants", "opioids", "hallucinogens"], correctIndex: 0, explanation: "They speed up the nervous system." },
        { prompt: "Long-term alcohol abuse commonly damages the", options: ["liver and heart", "hair only", "nails", "teeth only"], correctIndex: 0, explanation: "Alcoholism harms the liver and cardiovascular system." },
        { prompt: "Which is among the most commonly abused substances?", options: ["alcohol", "clean water", "vitamin C", "table salt"], correctIndex: 0, explanation: "Alcohol is very widely abused." },
        { prompt: "Needing more of a drug to feel the same effect is called", options: ["tolerance", "recovery", "prevention", "abstinence"], correctIndex: 0, explanation: "Rising tolerance leads toward dependence." },
        { prompt: "Drug abuse can affect sexual behaviour by", options: ["lowering judgement and self-control", "improving health", "preventing STIs", "increasing self-control"], correctIndex: 0, explanation: "Lowered judgement leads to risky sex." },
        { prompt: "Risky sexual behaviour after drug/alcohol use raises the risk of", options: ["STIs, HIV and unwanted pregnancy", "better grades", "stronger bones", "good hygiene"], correctIndex: 0, explanation: "It increases disease and pregnancy risk." },
        { prompt: "Which is a way to prevent substance abuse?", options: ["say no and avoid peer pressure", "try every drug once", "keep it secret", "drink to fit in"], correctIndex: 0, explanation: "Refusal skills help prevent abuse." },
        { prompt: "Tobacco contains the addictive stimulant", options: ["nicotine", "insulin", "chlorophyll", "urea"], correctIndex: 0, explanation: "Nicotine is the addictive drug in tobacco." },
        { prompt: "Hallucinogens mainly", options: ["distort the senses and thinking", "cure disease", "build muscle", "add vitamins"], correctIndex: 0, explanation: "They alter perception and thought." },
        { prompt: "Addiction treatment often includes", options: ["detox, counselling, medicines and follow-up", "nothing can be done", "only punishment", "more of the drug"], correctIndex: 0, explanation: "Combined treatment is effective." },
        { prompt: "A healthy way to manage strong sexual desire at puberty is", options: ["self-control, values and good choices", "using drugs", "drinking alcohol", "ignoring all advice"], correctIndex: 0, explanation: "Self-control and values, not drugs." },
        { prompt: "Which statement is TRUE?", options: ["Alcohol and tobacco are drugs", "Alcohol is a food, not a drug", "Tobacco is harmless", "You can always stop instantly"], correctIndex: 0, explanation: "Both are commonly abused drugs." },
        { prompt: "Keeping busy with sport, study and hobbies helps because it", options: ["reduces the pull toward drugs", "guarantees addiction", "spreads STIs", "damages the liver"], correctIndex: 0, explanation: "Positive activities reduce risk." },
        { prompt: "Overdose of drugs can", options: ["cause death", "improve health", "cure addiction", "increase grades"], correctIndex: 0, explanation: "Overdose can be fatal." },
        { prompt: "The best response to a friend struggling with drugs is to", options: ["encourage them to seek help early", "join them", "ignore it", "share the drug"], correctIndex: 0, explanation: "Early help and support aid recovery." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define (a) drug and (b) substance abuse.", answerKey: "(a) A drug is a substance that changes how the body or mind works. (b) Substance abuse is the harmful/unsafe use of a drug leading to dependence and damage to health and life. 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which class of drug speeds up the nervous system?", options: ["Depressants", "Stimulants", "Opioids", "Sedatives"], correctIndex: 1, answerKey: "Stimulants (e.g. cocaine, nicotine). Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Classify these drugs: alcohol, heroin, cocaine. State the class of each.", answerKey: "Alcohol – depressant; heroin – narcotic/opioid; cocaine – stimulant. 2 marks each (max 6, capped).", marks: 5 },
        { type: "SHORT_ANSWER", prompt: "Explain how alcohol and drug abuse can lead to risky sexual behaviour and its consequences.", answerKey: "They lower judgement and self-control, leading to unprotected sex or multiple partners, which raises the risk of STIs, HIV and unwanted pregnancy. Award marks for lowered judgement and named consequences.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the effects of substance abuse on the individual, the family and society, and outline how it can be prevented.", answerKey: "Individual: damage to liver/heart/brain, dependence, poor judgement, overdose (5). Family/society: accidents, crime, family break-up, loss of work/school performance (5). Prevention: refusal skills, accurate knowledge, healthy activities, family/community support, early treatment (up to 5). Reward concrete, balanced discussion.", marks: 15 },
      ],
    },
  ],
};
