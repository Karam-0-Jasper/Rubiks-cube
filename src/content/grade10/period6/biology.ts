import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 10,
// Semester Two, Period VI: Flowering Plants. The single large CONTENTS list is
// expanded to one topic per content item: classification; organs and tissues;
// floral formulae; root system; modified organs; leaf structure and
// arrangement; reproduction; fruits and dispersal; germination; hormones and
// growth; transport; transpiration and gaseous exchange; excretion; respiration.
export const biologyG10P6: PeriodContent = {
  grade: 10,
  number: 6,
  title: "Flowering Plants",
  summary:
    "Period VI of the MoE Grade 10 Biology syllabus. Learners study flowering plants — their classification, organs and tissues, flowers and floral formulae, roots, stems, leaves and their modifications, reproduction, fruits and dispersal, germination, growth and hormones, transport, transpiration, gaseous exchange, excretion and respiration.",
  topics: [
    // source: OpenStax — Biology 2e, 30.1 The Plant Body (https://openstax.org/books/biology-2e/pages/30-1-the-plant-body)
    {
      slug: "flowering-plants-classification",
      title: "Flowering Plants: Classification into Monocots and Dicots",
      objective:
        "By the end of the topic, learners should be able to identify the characteristics of flowering plants, classify them as monocots or dicots, and explain the reasons for their success.",
      estimatedMinutes: 100,
      notes: `## What are flowering plants?

- **Flowering plants (angiosperms)** — the most advanced and successful group of plants; they produce **flowers**, **fruits** and **seeds enclosed in fruits**.
- They are the major **food producers** in the biosphere and the base of most food chains.

## Two classes of flowering plants

Angiosperms are divided into **monocotyledons (monocots)** and **dicotyledons (dicots)**, based mainly on the number of **cotyledons** (seed leaves).

| Feature | Monocot | Dicot |
| --- | --- | --- |
| Cotyledons in seed | **one** | **two** |
| Leaf venation | **parallel** | **net (reticulate)** |
| Root system | **fibrous** | **taproot** |
| Vascular bundles in stem | scattered | in a ring |
| Flower parts | in **threes** | in **fours or fives** |
| Examples | maize, rice, grass, palm | bean, mango, hibiscus |

\`\`\`svg Monocot (parallel veins) versus dicot (net veins) leaves
<svg viewBox="0 0 300 120" role="img" aria-label="Monocot leaf with parallel veins and dicot leaf with net veins">
  <g fill="none" stroke="currentColor">
    <ellipse cx="70" cy="60" rx="30" ry="50"/>
    <line x1="55" y1="15" x2="55" y2="105"/><line x1="70" y1="12" x2="70" y2="108"/><line x1="85" y1="15" x2="85" y2="105"/>
    <ellipse cx="220" cy="60" rx="34" ry="50"/>
    <line x1="220" y1="12" x2="220" y2="108"/>
    <path d="M220 40 q 18 -6 30 -18"/><path d="M220 60 q 20 -2 34 -8"/><path d="M220 80 q 18 6 30 18"/>
    <path d="M220 40 q -18 -6 -30 -18"/><path d="M220 60 q -20 -2 -34 -8"/><path d="M220 80 q -18 6 -30 18"/>
  </g>
  <text x="70" y="118" font-size="9" text-anchor="middle" fill="currentColor">monocot (parallel)</text>
  <text x="220" y="118" font-size="9" text-anchor="middle" fill="currentColor">dicot (net)</text>
</svg>
\`\`\`

## Why flowering plants are so successful

- **Flowers** attract pollinators, making reproduction efficient.
- **Seeds are protected inside fruits**, which also aid dispersal.
- **Efficient vascular tissue** (xylem and phloem) allows large size and life on dry land.
- **Broad leaves** capture light for photosynthesis.
- Fast growth and varied forms let them live in almost every habitat.

## Common errors and misconceptions

- **"All plants have flowers"** — mosses, ferns and conifers do **not** produce flowers.
- **"Monocots have taproots"** — monocots have **fibrous** roots; dicots have taproots.
- **Confusing cotyledon number** — mono = **one** seed leaf, di = **two**.
- **"Seeds are naked in flowering plants"** — angiosperm seeds are **enclosed in fruits** (unlike conifers).`,
      workedExample: `**Question:** A learner examines two plants. Plant X has long leaves with parallel veins, a bunch of fibrous roots and flower parts in threes. Plant Y has broad leaves with net veins, one main taproot and flower parts in fives. Classify each and give the reasons.

**Solution**

*Plant X.* Parallel veins, fibrous roots and flower parts in **threes** are all features of a **monocotyledon (monocot)**. Its seed would have **one cotyledon**. Example: maize or grass.

*Plant Y.* Net (reticulate) veins, a **taproot** and flower parts in **fives** are features of a **dicotyledon (dicot)**. Its seed would have **two cotyledons**. Example: bean or hibiscus.

*How the features agree.* Each set of three features points to the same class, so the classification is reliable — we do not rely on a single feature but on the whole combination.

**Answer:** Plant X is a monocot (one cotyledon, parallel veins, fibrous roots, floral parts in threes); Plant Y is a dicot (two cotyledons, net veins, taproot, floral parts in fives).`,
      quiz: [
        { prompt: "Flowering plants are also called", options: ["angiosperms", "bryophytes", "algae", "fungi"], correctIndex: 0, explanation: "Angiosperms produce flowers and enclosed seeds." },
        { prompt: "Monocots have how many cotyledons?", options: ["one", "two", "three", "none"], correctIndex: 0, explanation: "'Mono' means one seed leaf." },
        { prompt: "Dicots typically have ____ leaf venation.", options: ["net (reticulate)", "parallel", "no", "spiral"], correctIndex: 0, explanation: "Dicots have net veins; monocots parallel." },
        { prompt: "A fibrous root system is typical of", options: ["monocots", "dicots", "ferns", "mosses"], correctIndex: 0, explanation: "Monocots have fibrous roots." },
        { prompt: "A taproot system is typical of", options: ["dicots", "monocots", "algae", "fungi"], correctIndex: 0, explanation: "Dicots have a main taproot." },
        { prompt: "Monocot flower parts occur in", options: ["threes", "fours", "fives", "sevens"], correctIndex: 0, explanation: "Monocot floral parts are in threes." },
        { prompt: "Which is a monocot?", options: ["maize", "bean", "mango", "hibiscus"], correctIndex: 0, explanation: "Maize is a monocot; the others are dicots." },
        { prompt: "In angiosperms, seeds are", options: ["enclosed in fruits", "naked", "absent", "in cones"], correctIndex: 0, explanation: "Fruits enclose and protect the seeds." },
        { prompt: "Vascular bundles are arranged in a ring in", options: ["dicot stems", "monocot stems", "fern stems", "moss stems"], correctIndex: 0, explanation: "Dicot bundles form a ring; monocot bundles are scattered." },
        { prompt: "A key reason for flowering plants' success is", options: ["flowers that attract pollinators", "having no vascular tissue", "avoiding photosynthesis", "producing no seeds"], correctIndex: 0, explanation: "Efficient pollination aids reproduction." },
        { prompt: "Which plant does NOT have flowers?", options: ["fern", "bean", "maize", "hibiscus"], correctIndex: 0, explanation: "Ferns reproduce by spores, not flowers." },
        { prompt: "Two cotyledons in a seed indicate a", options: ["dicot", "monocot", "moss", "fungus"], correctIndex: 0, explanation: "Dicots have two seed leaves." },
        { prompt: "Parallel leaf veins indicate a", options: ["monocot", "dicot", "conifer", "moss"], correctIndex: 0, explanation: "Monocots have parallel venation." },
        { prompt: "Flowering plants are important because they are the major", options: ["food producers in the biosphere", "consumers of oxygen", "vectors of disease", "decomposers"], correctIndex: 0, explanation: "They form the base of most food chains." },
        { prompt: "Which combination describes a dicot?", options: ["two cotyledons, net veins, taproot", "one cotyledon, parallel veins, fibrous roots", "no cotyledons, spores", "two cotyledons, parallel veins"], correctIndex: 0, explanation: "Dicot: two cotyledons, net veins, taproot." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State four differences between monocots and dicots.", answerKey: "Any four two-sided differences: one vs two cotyledons; parallel vs net venation; fibrous vs taproot; scattered vs ringed vascular bundles; floral parts in threes vs fours/fives. 1 mark each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A seedling with one cotyledon and parallel-veined leaves is a", options: ["dicot", "monocot", "fern", "moss"], correctIndex: 1, answerKey: "Monocot. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give three reasons why flowering plants are the most successful plants.", answerKey: "Any three: flowers attract pollinators; seeds protected in fruits that aid dispersal; efficient vascular tissue; broad leaves for photosynthesis; adaptable to many habitats. 1 mark each.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Classify maize and bean as monocot or dicot and give one supporting feature for each.", answerKey: "Maize – monocot (one cotyledon / parallel veins / fibrous roots). Bean – dicot (two cotyledons / net veins / taproot). 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Explain how the features of flowering plants have made them the dominant plants and major food producers on Earth.", answerKey: "Flowers and pollinators for efficient reproduction (4); seeds enclosed in fruits for protection and dispersal (4); efficient vascular tissue and roots for large size on land (4); broad leaves for photosynthesis and role as food producers (up to 3). Reward examples.", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 30.1 The Plant Body (tissue systems) (https://openstax.org/books/biology-2e/pages/30-1-the-plant-body)
    {
      slug: "plant-organs-and-tissues",
      title: "Functions of Roots, Stems, Leaves and Flowers; Plant Tissues",
      objective:
        "By the end of the topic, learners should be able to state the functions of roots, stems, leaves and flowers, and name the three plant tissue systems and their roles.",
      estimatedMinutes: 110,
      notes: `## The four main organs and their functions

| Organ | Main functions |
| --- | --- |
| **Root** | Anchors the plant; **absorbs water and minerals**; stores food |
| **Stem** | Supports leaves and flowers; **transports** water, minerals and food; may store food |
| **Leaf** | Site of **photosynthesis**; gas exchange; transpiration |
| **Flower** | Organ of **sexual reproduction** (makes seeds and fruits) |

## The three plant tissue systems

All plant organs are built from three tissue systems:

1. **Dermal tissue** — the outer covering (**epidermis**, with a waxy **cuticle**); **protects** the plant and reduces water loss.
2. **Vascular tissue** — the transport system:
   - **Xylem** — carries **water and minerals** upward (its conducting cells are **dead** at maturity).
   - **Phloem** — carries **food (sugars)** made in the leaves to the rest of the plant (its cells are **alive** at maturity).
3. **Ground tissue** — fills the plant; carries out **photosynthesis**, **stores** food and water, and **supports** the vascular tissue.

\`\`\`svg The three tissue systems in a plant organ (cross-section)
<svg viewBox="0 0 200 130" role="img" aria-label="Cross-section showing dermal, ground and vascular tissue">
  <circle cx="100" cy="65" r="55" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="100" cy="65" r="52" fill="none" stroke="currentColor" stroke-opacity="0.4"/>
  <circle cx="100" cy="65" r="16" fill="currentColor" fill-opacity="0.2" stroke="currentColor"/>
  <g font-size="8" fill="currentColor">
    <text x="100" y="8" text-anchor="middle">dermal (epidermis)</text>
    <text x="150" y="65" text-anchor="middle">ground</text>
    <text x="100" y="67" text-anchor="middle">vascular</text>
  </g>
</svg>
\`\`\`

## How the plant works as a system

- **Water** absorbed by the **roots** rises through the **xylem** in the **stem** to the **leaves**.
- The **leaves** make **food** by photosynthesis; the **phloem** carries it to the roots and other parts.
- The **flower** produces seeds, continuing the plant's life.

## Common errors and misconceptions

- **"Xylem carries food"** — **xylem** carries **water and minerals**; **phloem** carries **food**.
- **"All plant cells photosynthesise"** — mainly the **ground tissue of leaves** (with chloroplasts) does.
- **"The stem only supports"** — the stem also **transports** and may **store** food.
- **"Xylem cells are alive"** — the water-conducting xylem cells are **dead** and hollow at maturity.`,
      workedExample: `**Question:** A dye is added to the water of a cut white flower (or celery stalk). After some hours, thin coloured lines appear running up the stem and into the veins of the petals/leaves. Explain which tissue carries the dye and why, and name the tissue that would instead carry sugar down from the leaves.

**Solution**

*Step 1 — which tissue carries the dye.* The dye travels in the water, and **water and minerals** are carried **upward** by the **xylem**. So the coloured lines mark the **xylem** vessels running through the stem into the veins.

*Step 2 — why the dye rises.* Water is pulled up the xylem by **transpiration** from the leaves/petals. The xylem forms continuous tubes of **dead, hollow cells**, so the coloured water moves up easily and stains them.

*Step 3 — the tissue that carries sugar.* Sugar (food) made in the leaves is carried to the rest of the plant by the **phloem**, whose living cells move food both up and down (translocation).

**Answer:** the dye is carried up by the **xylem** (water and mineral transport, dead hollow cells, pulled by transpiration); **food/sugar** is carried by the **phloem**.`,
      quiz: [
        { prompt: "The main function of the root is to", options: ["anchor the plant and absorb water and minerals", "make food", "produce seeds", "attract insects"], correctIndex: 0, explanation: "Roots anchor and absorb." },
        { prompt: "Which organ is the main site of photosynthesis?", options: ["leaf", "root", "flower", "stem"], correctIndex: 0, explanation: "Leaves make food by photosynthesis." },
        { prompt: "The flower is the organ of", options: ["sexual reproduction", "water absorption", "support", "photosynthesis"], correctIndex: 0, explanation: "Flowers make seeds and fruits." },
        { prompt: "Xylem carries", options: ["water and minerals", "food only", "oxygen only", "hormones only"], correctIndex: 0, explanation: "Xylem transports water and minerals upward." },
        { prompt: "Phloem carries", options: ["food (sugars)", "water only", "minerals only", "air"], correctIndex: 0, explanation: "Phloem transports food made in leaves." },
        { prompt: "The outer protective tissue with a waxy cuticle is the", options: ["dermal tissue (epidermis)", "vascular tissue", "ground tissue", "phloem"], correctIndex: 0, explanation: "Dermal tissue covers and protects." },
        { prompt: "Ground tissue functions in", options: ["photosynthesis, storage and support", "transport of water only", "reproduction", "protection only"], correctIndex: 0, explanation: "Ground tissue does many jobs." },
        { prompt: "Water absorbed by roots rises to the leaves through the", options: ["xylem", "phloem", "cuticle", "epidermis"], correctIndex: 0, explanation: "Xylem carries water upward." },
        { prompt: "Which conducting cells are dead at maturity?", options: ["xylem", "phloem", "epidermis", "guard cells"], correctIndex: 0, explanation: "Xylem vessels are dead and hollow." },
        { prompt: "The stem's functions include support and", options: ["transport of water and food", "photosynthesis only", "absorption of minerals", "producing pollen"], correctIndex: 0, explanation: "The stem transports and may store food." },
        { prompt: "The three plant tissue systems are dermal, ground and", options: ["vascular", "muscle", "nervous", "epithelial"], correctIndex: 0, explanation: "Dermal, ground and vascular tissue." },
        { prompt: "The waxy layer that reduces water loss from leaves is the", options: ["cuticle", "phloem", "xylem", "cortex"], correctIndex: 0, explanation: "The cuticle limits water loss." },
        { prompt: "Which tissue is alive at maturity?", options: ["phloem", "xylem vessels", "cuticle", "dead fibres"], correctIndex: 0, explanation: "Phloem cells are alive when conducting food." },
        { prompt: "The organ that stores food in some plants (e.g. carrot) is the", options: ["root", "flower", "leaf only", "stigma"], correctIndex: 0, explanation: "Roots can store food (e.g. carrot)." },
        { prompt: "Which correctly matches tissue and job?", options: ["xylem – water; phloem – food", "xylem – food; phloem – water", "dermal – transport; vascular – protection", "ground – reproduction"], correctIndex: 0, explanation: "Xylem = water, phloem = food." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the main function of each: root, stem, leaf, flower.", answerKey: "Root – anchor and absorb water/minerals (store food); stem – support and transport; leaf – photosynthesis/gas exchange; flower – sexual reproduction. 1 mark each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which tissue transports food from the leaves to the rest of the plant?", options: ["Xylem", "Phloem", "Epidermis", "Cuticle"], correctIndex: 1, answerKey: "Phloem. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Name the three plant tissue systems and give one function of each.", answerKey: "Dermal – protection/reduce water loss; vascular – transport (xylem water, phloem food); ground – photosynthesis/storage/support. 1 mark per tissue + function.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between xylem and phloem.", answerKey: "Xylem carries water and minerals upward, cells dead/hollow at maturity; phloem carries food (sugars) up and down, cells alive at maturity. Award marks for direction, contents and living/dead.", marks: 4 },
        { type: "ESSAY", prompt: "Describe how the organs and tissues of a flowering plant work together as a system to keep the plant alive.", answerKey: "Roots absorb water/minerals; xylem carries them up the stem to leaves (5); leaves photosynthesise to make food; phloem distributes food to roots and other parts (5); flowers reproduce; dermal tissue protects, ground tissue stores/supports (up to 5). Reward integration and correct terms.", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 32.1 Reproductive Development and Structure (flower whorls) (https://openstax.org/books/biology-2e/pages/32-1-reproductive-development-and-structure)
    {
      slug: "floral-formulae",
      title: "The Flower and Floral Formulae",
      objective:
        "By the end of the topic, learners should be able to name the parts of a flower and their functions and construct a simple floral formula, using examples such as flamboyant, pride of Barbados and rattle box.",
      estimatedMinutes: 90,
      notes: `## Parts of a flower (four whorls)

From outside to inside:

1. **Calyx** — the **sepals**; usually green and leaf-like; **protect** the bud. Symbol **K**.
2. **Corolla** — the **petals**; often bright to **attract pollinators**. Symbol **C**.
3. **Androecium** — the **stamens** (male); each = **anther** (makes pollen) + **filament**. Symbol **A**.
4. **Gynoecium** — the **carpel/pistil** (female): **stigma** (receives pollen) + **style** + **ovary** (contains **ovules**). Symbol **G**.

- A **complete** flower has all four whorls; an **incomplete** flower lacks one or more.

## Writing a floral formula

A **floral formula** is a short way to record a flower's structure using symbols and numbers:

- **K** = calyx (number of sepals)
- **C** = corolla (number of petals)
- **A** = androecium (number of stamens)
- **G** = gynoecium (number of carpels)
- Brackets ( ) show **fused** parts; a line above or below **G** shows the ovary position.

**Example (a typical legume flower such as flamboyant/pride of Barbados/rattle box):**

**K5 C5 A10 G1**

- **K5** — 5 sepals
- **C5** — 5 petals
- **A10** — 10 stamens (in rattle box, *Crotalaria*, the stamens are **fused**, written **A(10)**)
- **G1** — 1 carpel (the ovary that becomes the pod)

| Symbol | Whorl | Example count |
| --- | --- | --- |
| K | calyx (sepals) | 5 |
| C | corolla (petals) | 5 |
| A | androecium (stamens) | 10 |
| G | gynoecium (carpels) | 1 |

## Named examples

- **Flamboyant (Delonix)**, **Pride of Barbados (Caesalpinia)**, **Rattle box (Crotalaria)** are all **legumes**; their floral formula is close to **K5 C5 A10 G1**, and their ovary forms a **pod (legume fruit)**.

## Common errors and misconceptions

- **Confusing the symbols** — K = calyx, C = corolla, A = androecium (male), G = gynoecium (female).
- **"The stamen is female"** — the **stamen** (anther + filament) is **male**; the **carpel** is female.
- **Forgetting brackets for fused parts** — fused stamens are written **A(10)**.
- **"Petals make seeds"** — seeds form in the **ovary** (part of the gynoecium), not the petals.`,
      workedExample: `**Question:** A flamboyant (Delonix) flower is examined. It has 5 green sepals, 5 red petals, 10 separate stamens each with an anther and filament, and one central carpel with a stigma, style and ovary. (a) Name each whorl and its function. (b) Write the floral formula. (c) Is the flower complete?

**Solution**

**(a) The four whorls.**
- **Calyx (5 sepals)** — protect the flower bud.
- **Corolla (5 petals)** — bright colour to attract pollinators.
- **Androecium (10 stamens)** — male part; the anthers make **pollen**.
- **Gynoecium (1 carpel)** — female part; the **stigma** receives pollen, the **ovary** contains **ovules** that become seeds.

**(b) Floral formula.** Counting each whorl: **K5 C5 A10 G1**.
- K5 = 5 sepals, C5 = 5 petals, A10 = 10 stamens, G1 = 1 carpel.

**(c) Complete?** All **four** whorls (calyx, corolla, androecium, gynoecium) are present, so the flower is **complete** (and, having both male and female parts, it is also a **perfect/bisexual** flower).

**Answer:** the whorls are calyx (protect), corolla (attract), androecium (pollen), gynoecium (seeds); the floral formula is **K5 C5 A10 G1**; the flower is complete.`,
      quiz: [
        { prompt: "The green, leaf-like parts that protect the flower bud are the", options: ["sepals (calyx)", "petals", "stamens", "carpels"], correctIndex: 0, explanation: "Sepals form the calyx and protect the bud." },
        { prompt: "The brightly coloured parts that attract pollinators are the", options: ["petals (corolla)", "sepals", "anthers", "ovules"], correctIndex: 0, explanation: "Petals form the corolla." },
        { prompt: "The male part of a flower is the", options: ["stamen (androecium)", "carpel", "sepal", "stigma"], correctIndex: 0, explanation: "The stamen is anther + filament." },
        { prompt: "Pollen is produced in the", options: ["anther", "stigma", "ovary", "sepal"], correctIndex: 0, explanation: "The anther makes pollen." },
        { prompt: "The female part of a flower is the", options: ["carpel (gynoecium)", "stamen", "petal", "filament"], correctIndex: 0, explanation: "The carpel/pistil is the female whorl." },
        { prompt: "Ovules that become seeds are found in the", options: ["ovary", "anther", "petal", "sepal"], correctIndex: 0, explanation: "The ovary contains ovules." },
        { prompt: "In a floral formula, K stands for", options: ["calyx (sepals)", "corolla", "androecium", "gynoecium"], correctIndex: 0, explanation: "K = calyx." },
        { prompt: "In a floral formula, A stands for", options: ["androecium (stamens)", "calyx", "corolla", "gynoecium"], correctIndex: 0, explanation: "A = androecium (male)." },
        { prompt: "The floral formula K5 C5 A10 G1 means", options: ["5 sepals, 5 petals, 10 stamens, 1 carpel", "5 carpels only", "10 petals", "1 sepal"], correctIndex: 0, explanation: "Each symbol counts its whorl." },
        { prompt: "Brackets around a number, e.g. A(10), show that the parts are", options: ["fused", "absent", "female", "green"], correctIndex: 0, explanation: "Brackets mean the parts are fused." },
        { prompt: "A flower with all four whorls present is", options: ["complete", "incomplete", "male only", "female only"], correctIndex: 0, explanation: "All four whorls = complete." },
        { prompt: "Flamboyant, Pride of Barbados and Rattle box are all", options: ["legumes with a pod fruit", "grasses", "ferns", "mosses"], correctIndex: 0, explanation: "They are legumes forming pods." },
        { prompt: "The part that receives pollen is the", options: ["stigma", "anther", "filament", "sepal"], correctIndex: 0, explanation: "The stigma receives pollen." },
        { prompt: "In G1, the '1' refers to the number of", options: ["carpels", "sepals", "petals", "stamens"], correctIndex: 0, explanation: "G is the gynoecium (carpels)." },
        { prompt: "Which symbol represents the corolla?", options: ["C", "K", "A", "G"], correctIndex: 0, explanation: "C = corolla (petals)." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the four whorls of a flower from outside to inside and state one function of each.", answerKey: "Calyx (sepals) – protect bud; corolla (petals) – attract pollinators; androecium (stamens) – produce pollen; gynoecium (carpel) – produce ovules/seeds. 1 mark each whorl, 1 each function (max 8, capped).", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "In a floral formula, G represents the", options: ["calyx", "corolla", "androecium", "gynoecium"], correctIndex: 3, answerKey: "Gynoecium. Option D.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Write and explain the floral formula K5 C5 A10 G1.", answerKey: "5 sepals (K5), 5 petals (C5), 10 stamens (A10), 1 carpel (G1). 1 mark per correctly explained symbol.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between the androecium and the gynoecium.", answerKey: "Androecium = the male whorl (stamens = anther + filament, produce pollen); gynoecium = the female whorl (carpel = stigma, style, ovary, produce ovules). 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the structure of a complete flower and explain how a floral formula records it, using a legume example.", answerKey: "Structure: calyx (protect), corolla (attract), androecium (anther makes pollen), gynoecium (stigma/style/ovary makes seeds) (8). Floral formula: symbols K, C, A, G with numbers, brackets for fusion; legume e.g. K5 C5 A10 G1 forming a pod (up to 7). Reward correct symbols and functions.", marks: 15 },
      ],
    },
    // source: LibreTexts — General Biology 2e (OpenStax), 6.1.4 Roots (https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/General_Biology_2e_(OpenStax)/06:_Unit_VI-_Plant_Structure_and_Function/6.01:_Plant_Form_and_Physiology/6.1.04:_Roots)
    {
      slug: "root-system",
      title: "The Root System",
      objective:
        "By the end of the topic, learners should be able to distinguish taproot and fibrous root systems, name the regions of the root tip, and describe the structure and function of root hairs.",
      estimatedMinutes: 100,
      notes: `## Types of root system

- **Taproot system** — one main root growing straight down, with smaller side (lateral) roots. Typical of **dicots** (e.g. bean, mango). Reaches deep water.
- **Fibrous root system** — many roots of similar size in a cluster at the stem base. Typical of **monocots** (e.g. maize, grass). Holds surface soil, resists erosion.

## Functions of roots

- **Anchor** the plant in the soil.
- **Absorb water and mineral salts** from the soil.
- **Store food** in some plants (e.g. carrot, cassava).
- Conduct water and minerals to the stem.

## Regions (zones) of the root tip

From the tip upward:

1. **Root cap** — a protective cap of cells that covers and protects the tip as it pushes through soil; constantly worn away and replaced.
2. **Zone of cell division (meristem)** — actively **dividing** cells make new cells.
3. **Zone of elongation** — the new cells **lengthen**, pushing the root deeper.
4. **Zone of maturation (differentiation)** — cells **mature** into different tissues; **root hairs** grow here and **absorb water and minerals**.

\`\`\`svg Regions of the root tip
<svg viewBox="0 0 140 220" role="img" aria-label="Root tip showing root cap, zones of division, elongation and maturation">
  <rect x="55" y="10" width="30" height="60" fill="none" stroke="currentColor"/>
  <rect x="55" y="70" width="30" height="45" fill="none" stroke="currentColor"/>
  <rect x="55" y="115" width="30" height="45" fill="none" stroke="currentColor"/>
  <path d="M55 160 q 15 30 30 0 Z" fill="none" stroke="currentColor"/>
  <g stroke="currentColor"><line x1="55" y1="90" x2="40" y2="90"/><line x1="85" y1="90" x2="100" y2="90"/></g>
  <g font-size="8" fill="currentColor">
    <text x="90" y="35">maturation (root hairs)</text>
    <text x="90" y="95">elongation</text>
    <text x="90" y="140">cell division</text>
    <text x="90" y="180">root cap</text>
  </g>
</svg>
\`\`\`

## Root hairs — structure and function

- **Root hairs** are thin, thread-like **extensions of root epidermal cells** in the zone of maturation.
- They greatly **increase the surface area** of the root.
- This allows the root to **absorb much more water and mineral salts** from the soil.
- Water enters by **osmosis**; mineral ions often enter by **active transport**.

## Common errors and misconceptions

- **"Monocots have taproots"** — monocots have **fibrous** roots; taproots are typical of dicots.
- **"Water is absorbed all along the root"** — most absorption is by **root hairs** in the maturation zone near the tip.
- **"The root cap absorbs water"** — the root cap only **protects** the tip; it does not absorb.
- **"Root hairs are separate cells"** — each root hair is an **outgrowth of one epidermal cell**.`,
      workedExample: `**Question:** A gardener transplanting seedlings is warned to keep soil around the roots and not to strip the fine "fuzz" near the root tips. Explain, using root structure, why removing this fuzz would harm the plant, and name the zone where it grows.

**Solution**

*Step 1 — what the "fuzz" is.* The fine fuzz near the tips is made of **root hairs** — thin extensions of the root's epidermal cells.

*Step 2 — where they grow.* Root hairs grow in the **zone of maturation (differentiation)**, just behind the zone of elongation.

*Step 3 — why they matter.* Root hairs **greatly increase the surface area** of the root, and it is here that most **water (by osmosis)** and **mineral salts (by active transport)** are absorbed from the soil.

*Step 4 — why removing them harms the plant.* Stripping the root hairs removes most of the plant's **absorbing surface**, so the seedling cannot take up enough water and minerals and may **wilt or die** after transplanting.

**Answer:** the fuzz is root hairs in the zone of maturation; they provide most of the surface for absorbing water and minerals, so removing them cripples the plant's water uptake — hence transplant with soil intact.`,
      quiz: [
        { prompt: "A single main root with small side roots is a", options: ["taproot system", "fibrous root system", "prop root", "root cap"], correctIndex: 0, explanation: "Taproots have one main root." },
        { prompt: "A cluster of many similar roots at the stem base is a", options: ["fibrous root system", "taproot system", "storage root", "root hair"], correctIndex: 0, explanation: "Fibrous roots form a dense network." },
        { prompt: "Fibrous roots are typical of", options: ["monocots", "dicots", "ferns", "mosses"], correctIndex: 0, explanation: "Monocots have fibrous roots." },
        { prompt: "The protective cap over the root tip is the", options: ["root cap", "root hair", "meristem", "cortex"], correctIndex: 0, explanation: "The root cap protects the growing tip." },
        { prompt: "New cells are made in the zone of", options: ["cell division (meristem)", "elongation", "maturation", "root cap"], correctIndex: 0, explanation: "The meristem divides to make cells." },
        { prompt: "Cells get longer in the zone of", options: ["elongation", "cell division", "maturation", "root cap"], correctIndex: 0, explanation: "Elongation lengthens the root." },
        { prompt: "Root hairs grow in the zone of", options: ["maturation", "cell division", "elongation", "root cap"], correctIndex: 0, explanation: "Root hairs form in the maturation zone." },
        { prompt: "Root hairs are extensions of", options: ["root epidermal cells", "xylem vessels", "the root cap", "phloem"], correctIndex: 0, explanation: "Each root hair is an outgrowth of an epidermal cell." },
        { prompt: "The main function of root hairs is to", options: ["increase surface area for absorption", "protect the tip", "make food", "produce seeds"], correctIndex: 0, explanation: "More surface means more water/mineral uptake." },
        { prompt: "Water enters root hairs by", options: ["osmosis", "combustion", "photosynthesis", "respiration"], correctIndex: 0, explanation: "Water moves in by osmosis." },
        { prompt: "Mineral ions often enter root hairs by", options: ["active transport", "osmosis only", "diffusion of water", "transpiration"], correctIndex: 0, explanation: "Ions are absorbed against the gradient." },
        { prompt: "A taproot is typical of a", options: ["dicot", "monocot", "grass", "moss"], correctIndex: 0, explanation: "Dicots have taproots." },
        { prompt: "Which zone is closest to the very tip of the root?", options: ["root cap", "maturation", "elongation", "root hairs"], correctIndex: 0, explanation: "The root cap covers the tip." },
        { prompt: "Fibrous roots help the environment by", options: ["holding surface soil and reducing erosion", "spreading disease", "making oxygen only", "storing no water"], correctIndex: 0, explanation: "Dense roots bind the topsoil." },
        { prompt: "A carrot is an example of a root that", options: ["stores food", "makes flowers", "does photosynthesis mainly", "produces pollen"], correctIndex: 0, explanation: "Some roots store food." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between a taproot and a fibrous root system, giving one example of each.", answerKey: "Taproot: one main root with laterals (dicots, e.g. bean/mango). Fibrous: many similar roots at the stem base (monocots, e.g. maize/grass). 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Root hairs are found in which zone of the root?", options: ["Root cap", "Zone of cell division", "Zone of elongation", "Zone of maturation"], correctIndex: 3, answerKey: "Zone of maturation. Option D.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Name the four regions of the root tip in order from the tip.", answerKey: "Root cap, zone of cell division (meristem), zone of elongation, zone of maturation. 1 mark each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain how root hairs are adapted for the absorption of water and minerals.", answerKey: "They are numerous, thin extensions of epidermal cells that greatly increase surface area; thin walls allow water in by osmosis and minerals by active transport. Award marks for surface area and absorption mechanism.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the structure of a root from the tip and explain how it absorbs and conducts water.", answerKey: "Regions: root cap (protects), zone of cell division (new cells), elongation (lengthening), maturation (root hairs) (7). Absorption: root hairs increase surface area, water in by osmosis, minerals by active transport; water then passes to the xylem and up the plant (up to 8). Reward correct sequence and mechanisms.", marks: 15 },
      ],
    },
    // source: LibreTexts — General Biology (Boundless), 30.2D Stem Modifications (https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Book:_General_Biology_(Boundless)/30:_Plant_Form_and_Physiology/30.2:_Stems/30.2D:__Stem_Modifications)
    {
      slug: "modified-roots-stems-leaves",
      title: "Modified Roots, Stems and Leaves",
      objective:
        "By the end of the topic, learners should be able to describe modified roots, stems and leaves — tubers, bulbs, rhizomes, runners and tendrils — and their functions.",
      estimatedMinutes: 90,
      notes: `## Why plant organs are modified

- Roots, stems and leaves are sometimes **modified** (changed in form) to do special jobs: **storing food**, **vegetative reproduction**, **support (climbing)** or **surviving hard seasons**.

## Modified stems

| Modification | Description | Example | Function |
| --- | --- | --- | --- |
| **Tuber** | swollen underground stem tip; "eyes" are buds | Irish potato | food storage + reproduction |
| **Rhizome** | horizontal underground stem with nodes | ginger, canna | storage + spread |
| **Corm** | short, rounded, fleshy upright stem | cocoyam, gladiolus | storage + survival |
| **Bulb** | short stem with fleshy leaves around it | onion | food storage (in the leaves) |
| **Runner / stolon** | stem creeping along the ground, rooting at nodes | strawberry, grass | vegetative reproduction |
| **Stem tendril** | thin, coiling stem | passion fruit, some vines | climbing/support |

## Modified roots

- **Storage roots** — swollen roots that store food (e.g. **cassava**, **carrot**, **sweet potato**).
- **Prop / stilt roots** — grow from the stem to give extra support (e.g. maize).

## Modified leaves

- **Leaf tendrils** — thin coiling leaves/leaflets for climbing (e.g. some peas).
- **Bulb scales** — the fleshy **leaves of an onion** store food.
- **Spines** — reduced leaves that reduce water loss and protect (e.g. cactus).

## Vegetative (asexual) reproduction

- Many modified stems (tubers, rhizomes, runners, bulbs, corms) let the plant **reproduce without seeds** — new plants grow from buds. This is used by farmers in **cuttings, grafting and planting setts**.

## Common errors and misconceptions

- **"A potato is a root"** — the **Irish potato is a stem tuber** (it has buds/"eyes"); the **sweet potato/cassava is a root**.
- **"An onion is a root"** — the onion is a **bulb** (a modified stem with fleshy storage **leaves**).
- **"Tendrils are always stems"** — tendrils may be modified **stems or leaves**.
- **"Modified organs cannot reproduce the plant"** — many (runners, tubers, bulbs) are key means of **vegetative reproduction**.`,
      workedExample: `**Question:** A farmer plants pieces of Irish potato (each with an "eye"), and separately notices strawberry plants spreading by horizontal stems that root where they touch the soil. (a) What kind of modified organ is the potato, and how do you know? (b) What is the strawberry's spreading organ, and what is it used for? (c) Name the type of reproduction involved.

**Solution**

**(a) The potato.** The Irish potato is a **stem tuber** — a swollen underground **stem**. We know it is a stem, not a root, because it has **"eyes"**, which are **buds** (nodes). New shoots grow from these buds, and it also **stores food (starch)**.

**(b) The strawberry's spreading organ.** It is a **runner (stolon)** — a stem that creeps along the ground and grows **roots and new plants at its nodes**. Its job is **vegetative (asexual) reproduction**, spreading the plant to new ground.

**(c) Type of reproduction.** Both are **vegetative (asexual) reproduction** — new plants form from a part of the parent (a bud on the tuber, or a node on the runner), **without seeds**, so the offspring are identical to the parent.

**Answer:** the potato is a stem tuber (identified by its buds/"eyes" and stored food); the strawberry spreads by runners for vegetative reproduction — both are asexual reproduction from modified stems.`,
      quiz: [
        { prompt: "The Irish potato is a modified", options: ["stem (tuber)", "root", "leaf", "flower"], correctIndex: 0, explanation: "It is a stem tuber with buds ('eyes')." },
        { prompt: "The 'eyes' of a potato are", options: ["buds", "roots", "seeds", "flowers"], correctIndex: 0, explanation: "Buds show it is a stem." },
        { prompt: "An onion is a modified stem called a", options: ["bulb", "tuber", "rhizome", "corm"], correctIndex: 0, explanation: "A bulb has fleshy storage leaves." },
        { prompt: "A horizontal underground stem like ginger is a", options: ["rhizome", "runner", "tendril", "taproot"], correctIndex: 0, explanation: "Rhizomes grow horizontally underground." },
        { prompt: "A stem creeping along the ground and rooting at nodes is a", options: ["runner (stolon)", "tuber", "corm", "bulb"], correctIndex: 0, explanation: "Runners spread and form new plants." },
        { prompt: "Cassava and carrot are examples of", options: ["storage roots", "stem tubers", "bulbs", "runners"], correctIndex: 0, explanation: "These are food-storing roots." },
        { prompt: "A thin coiling structure for climbing is a", options: ["tendril", "root cap", "rhizome", "bulb"], correctIndex: 0, explanation: "Tendrils help plants climb." },
        { prompt: "The fleshy food store of an onion is its", options: ["leaves", "roots", "flowers", "stigma"], correctIndex: 0, explanation: "Onion leaves store food." },
        { prompt: "Prop roots (e.g. in maize) function in", options: ["support", "photosynthesis", "reproduction only", "attracting insects"], correctIndex: 0, explanation: "Prop roots give extra support." },
        { prompt: "Cactus spines are modified", options: ["leaves", "stems", "roots", "flowers"], correctIndex: 0, explanation: "Spines are reduced leaves that limit water loss." },
        { prompt: "Reproduction by runners and tubers is called", options: ["vegetative (asexual) reproduction", "sexual reproduction", "pollination", "germination"], correctIndex: 0, explanation: "New plants form without seeds." },
        { prompt: "A short, rounded, fleshy underground stem is a", options: ["corm", "runner", "tendril", "prop root"], correctIndex: 0, explanation: "Cocoyam/gladiolus form corms." },
        { prompt: "Which is a modified stem used for storage?", options: ["tuber", "root hair", "stigma", "sepal"], correctIndex: 0, explanation: "Tubers store food." },
        { prompt: "The sweet potato is a modified", options: ["root", "stem", "leaf", "flower"], correctIndex: 0, explanation: "The sweet potato is a storage root." },
        { prompt: "Modified organs that store food help the plant to", options: ["survive hard seasons and reproduce", "spread disease", "make oxygen only", "lose water"], correctIndex: 0, explanation: "Stored food supports survival and new growth." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name four modified stems and give one example of each.", answerKey: "Any four: tuber (potato); rhizome (ginger); corm (cocoyam); bulb (onion); runner/stolon (strawberry); stem tendril (passion fruit). 1 mark each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "An onion is best described as a", options: ["storage root", "stem tuber", "bulb", "rhizome"], correctIndex: 2, answerKey: "Bulb. Option C.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain how you can tell that an Irish potato is a modified stem and not a root.", answerKey: "It bears buds ('eyes') at nodes from which new shoots grow — buds are a stem feature; roots do not have buds. Award marks for buds/eyes as stem feature.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give two functions of modified plant organs, with an example of each.", answerKey: "Any two: food storage (tuber/bulb/root); vegetative reproduction (runner/tuber); support/climbing (tendril/prop root). 1 mark per function + example.", marks: 4 },
        { type: "ESSAY", prompt: "Describe modified roots, stems and leaves, and explain how modified stems are used in vegetative reproduction and farming.", answerKey: "Modified stems: tuber, rhizome, corm, bulb, runner, tendril (5). Modified roots: storage roots (cassava), prop roots (5). Modified leaves: tendrils, bulb scales, spines (3). Vegetative reproduction: runners/tubers/bulbs form new plants from buds; farmers use setts, cuttings, grafting (up to 2). Reward examples.", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 30.4 Leaves (https://openstax.org/books/biology-2e/pages/30-4-leaves)
    {
      slug: "leaf-structure-and-arrangement",
      title: "Leaf Structure, Classification and Arrangement",
      objective:
        "By the end of the topic, learners should be able to describe the internal structure of a leaf, classify leaves as simple or compound, and describe leaf arrangement on the stem.",
      estimatedMinutes: 100,
      notes: `## Internal structure of a leaf

| Layer | Structure and role |
| --- | --- |
| **Cuticle** | waxy layer over the epidermis; **reduces water loss** |
| **Upper epidermis** | protective layer; no chloroplasts |
| **Palisade mesophyll** | column-shaped cells packed with **chloroplasts**; main site of **photosynthesis** |
| **Spongy mesophyll** | loosely packed cells with air spaces for **gas exchange** |
| **Veins (vascular bundles)** | xylem (water in) and phloem (food out) |
| **Lower epidermis** | has many **stomata** |
| **Stomata + guard cells** | pores that open/close for **gas exchange** and control **water loss** |

\`\`\`svg Cross-section of a leaf
<svg viewBox="0 0 300 150" role="img" aria-label="Leaf cross-section showing cuticle, epidermis, palisade, spongy layers, vein and stomata">
  <rect x="20" y="20" width="260" height="10" fill="currentColor" fill-opacity="0.2" stroke="currentColor"/>
  <rect x="20" y="30" width="260" height="16" fill="none" stroke="currentColor"/>
  <rect x="20" y="46" width="260" height="34" fill="#10b981" fill-opacity="0.2" stroke="currentColor"/>
  <rect x="20" y="80" width="260" height="34" fill="#34d399" fill-opacity="0.12" stroke="currentColor"/>
  <rect x="20" y="114" width="260" height="16" fill="none" stroke="currentColor"/>
  <circle cx="120" cy="97" r="10" fill="none" stroke="currentColor"/>
  <g font-size="8" fill="currentColor">
    <text x="285" y="27" text-anchor="end">cuticle</text>
    <text x="285" y="42" text-anchor="end">upper epidermis</text>
    <text x="150" y="66" text-anchor="middle">palisade</text>
    <text x="70" y="100">spongy</text>
    <text x="120" y="99" text-anchor="middle" font-size="7">vein</text>
    <text x="200" y="128">stoma</text>
  </g>
</svg>
\`\`\`

## Leaf classification: simple vs compound

- **Simple leaf** — the blade is in **one piece** (undivided, or lobed but not reaching the midrib). e.g. mango, hibiscus.
- **Compound leaf** — the blade is **divided into leaflets**. e.g. flamboyant, neem.

## Leaf arrangement (phyllotaxy)

How leaves are placed on the stem:

- **Alternate** — one leaf at each node, on alternate sides (e.g. hibiscus).
- **Opposite** — two leaves at each node, on opposite sides.
- **Whorled** — three or more leaves at each node.

- Good arrangement lets leaves catch the **most light** with the least shading of one another.

## Common errors and misconceptions

- **"Palisade cells are on the underside"** — the **palisade** layer is near the **top**, to catch light; the **spongy** layer and most **stomata** are below.
- **"Stomata are on the upper surface"** — most stomata are on the **lower** epidermis, reducing water loss.
- **"A compound leaf is several leaves"** — a compound leaf is **one leaf** divided into leaflets (there is one bud at its base).
- **"The cuticle photosynthesises"** — the cuticle is a **waxy, non-living** layer that reduces water loss.`,
      workedExample: `**Question:** A learner is asked why a leaf is well suited to photosynthesis. Using its internal structure, explain three adaptations, and say whether a flamboyant leaf (divided into many small leaflets) is a simple or compound leaf.

**Solution**

*Adaptation 1 — palisade layer.* Just under the upper epidermis, the **palisade mesophyll** has tall, tightly packed cells full of **chloroplasts**, placed where the **most light** falls — the main site of photosynthesis.

*Adaptation 2 — stomata and spongy layer.* The **spongy mesophyll** has air spaces, and the **stomata** (mostly on the lower surface) let **carbon dioxide in** and **oxygen out** for photosynthesis, while the guard cells control **water loss**.

*Adaptation 3 — veins.* The **veins** (xylem and phloem) bring **water** to the cells and carry away the **food (sugars)** made.

*Simple or compound?* A flamboyant leaf is **divided into many separate leaflets**, so it is a **compound leaf** (not several leaves — there is one leaf with many leaflets).

**Answer:** the leaf is adapted by its light-catching palisade layer, its stomata/spongy layer for gas exchange, and its veins for transport; the flamboyant leaf is a **compound leaf**.`,
      quiz: [
        { prompt: "The waxy layer that reduces water loss from a leaf is the", options: ["cuticle", "palisade layer", "vein", "stoma"], correctIndex: 0, explanation: "The cuticle limits water loss." },
        { prompt: "The main site of photosynthesis in a leaf is the", options: ["palisade mesophyll", "lower epidermis", "cuticle", "vein"], correctIndex: 0, explanation: "Palisade cells are packed with chloroplasts." },
        { prompt: "Gas exchange in a leaf happens mainly through the", options: ["stomata", "cuticle", "xylem", "midrib"], correctIndex: 0, explanation: "Stomata allow CO₂ in and O₂ out." },
        { prompt: "Stomata are controlled by", options: ["guard cells", "palisade cells", "root hairs", "the cuticle"], correctIndex: 0, explanation: "Guard cells open and close the stoma." },
        { prompt: "Most stomata are found on the leaf's", options: ["lower surface", "upper surface", "midrib", "petiole"], correctIndex: 0, explanation: "Lower placement reduces water loss." },
        { prompt: "The layer with loosely packed cells and air spaces is the", options: ["spongy mesophyll", "palisade mesophyll", "cuticle", "upper epidermis"], correctIndex: 0, explanation: "The spongy layer allows gas exchange." },
        { prompt: "A leaf whose blade is in one undivided piece is a", options: ["simple leaf", "compound leaf", "whorled leaf", "opposite leaf"], correctIndex: 0, explanation: "Simple leaves have an undivided blade." },
        { prompt: "A leaf divided into leaflets is a", options: ["compound leaf", "simple leaf", "alternate leaf", "sessile leaf"], correctIndex: 0, explanation: "Compound leaves have leaflets." },
        { prompt: "One leaf at each node on alternate sides is ____ arrangement.", options: ["alternate", "opposite", "whorled", "compound"], correctIndex: 0, explanation: "Alternate phyllotaxy." },
        { prompt: "Two leaves at each node on opposite sides is ____ arrangement.", options: ["opposite", "alternate", "whorled", "simple"], correctIndex: 0, explanation: "Opposite phyllotaxy." },
        { prompt: "Three or more leaves at one node is ____ arrangement.", options: ["whorled", "alternate", "opposite", "simple"], correctIndex: 0, explanation: "Whorled phyllotaxy." },
        { prompt: "The veins of a leaf contain", options: ["xylem and phloem", "only stomata", "only chloroplasts", "only cuticle"], correctIndex: 0, explanation: "Veins carry water in and food out." },
        { prompt: "Leaf arrangement helps leaves to", options: ["catch the most light with least shading", "lose water fast", "avoid photosynthesis", "produce seeds"], correctIndex: 0, explanation: "Arrangement reduces mutual shading." },
        { prompt: "A flamboyant leaf divided into many leaflets is", options: ["compound", "simple", "whorled", "opposite"], correctIndex: 0, explanation: "It is a compound leaf." },
        { prompt: "Which layer is near the top of the leaf to catch light?", options: ["palisade mesophyll", "spongy mesophyll", "lower epidermis", "cuticle"], correctIndex: 0, explanation: "Palisade sits just under the upper epidermis." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name four internal parts of a leaf and give the function of each.", answerKey: "Any four: cuticle – reduce water loss; palisade mesophyll – photosynthesis; spongy mesophyll – gas exchange; stomata/guard cells – gas exchange/water control; veins – transport. 1 mark each (part + function counts once).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A leaf whose blade is divided into leaflets is", options: ["simple", "compound", "opposite", "alternate"], correctIndex: 1, answerKey: "Compound. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe the three types of leaf arrangement (phyllotaxy).", answerKey: "Alternate – one leaf per node on alternate sides; opposite – two leaves per node opposite each other; whorled – three or more leaves per node. 1 mark each + 1 for a valid description.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain how the palisade layer and stomata adapt the leaf for photosynthesis.", answerKey: "Palisade cells near the top are packed with chloroplasts to catch light for photosynthesis; stomata (with guard cells) let CO₂ in and O₂ out while controlling water loss. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the internal structure of a leaf and explain how it is adapted to its functions.", answerKey: "Cuticle (reduce water loss), upper epidermis (protect), palisade (photosynthesis, chloroplasts, light), spongy (gas exchange, air spaces), stomata/guard cells (gas exchange, water control), veins (transport) (up to 12). Link each structure to function (up to 3). Reward completeness.", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 32.1 & 32.2 Reproductive Development / Pollination and Fertilization (https://openstax.org/books/biology-2e/pages/32-2-pollination-and-fertilization)
    {
      slug: "reproduction-in-flowering-plants",
      title: "Reproduction in Flowering Plants",
      objective:
        "By the end of the topic, learners should be able to describe pollination and its agents, explain fertilisation and the formation of the zygote and embryo, and distinguish sexual and asexual reproduction in flowering plants.",
      estimatedMinutes: 130,
      notes: `## Sexual reproduction in flowering plants

Involves **pollination** then **fertilisation**, producing seeds.

## Pollination

**Pollination** — the transfer of **pollen** from an **anther** to a **stigma**.

- **Self-pollination** — pollen lands on the stigma of the **same flower** or another flower on the **same plant**.
- **Cross-pollination** — pollen is carried to a flower on a **different plant** of the same species; gives more **variation**.

**Agents of pollination:**

| Agent | Feature of the flower |
| --- | --- |
| **Insects** (bees, butterflies) | bright petals, scent, nectar |
| **Wind** | small dull flowers, feathery stigmas, light pollen (grasses, maize) |
| **Birds / bats** | large, often nocturnal flowers |
| **Water** | some water plants |

## Fertilisation

After pollination:

1. The pollen grain grows a **pollen tube** down the style to the **ovary**.
2. In flowering plants there is **double fertilisation**: one male nucleus fuses with the **egg** to form the **zygote (diploid)**; the other fuses with the polar nuclei to form the **endosperm** (food store).
3. The **zygote** develops into the **embryo** (young plant).

## Seed and fruit formation

- The **fertilised ovule → seed**; the **ovary → fruit**.
- The seed contains an **embryo**, a food store (endosperm/cotyledons) and a **seed coat**.

\`\`\`svg Pollination and fertilisation: pollen tube grows to the ovule
<svg viewBox="0 0 200 170" role="img" aria-label="Flower carpel with pollen tube growing down to the ovule">
  <line x1="100" y1="20" x2="100" y2="45" stroke="currentColor"/>
  <ellipse cx="100" cy="18" rx="16" ry="6" fill="none" stroke="currentColor"/>
  <path d="M100 45 q -6 40 0 70" fill="none" stroke="currentColor" stroke-width="2"/>
  <ellipse cx="100" cy="130" rx="30" ry="26" fill="none" stroke="currentColor"/>
  <circle cx="100" cy="132" r="8" fill="currentColor" fill-opacity="0.3" stroke="currentColor"/>
  <g font-size="8" fill="currentColor">
    <text x="120" y="18">stigma</text><text x="112" y="80">pollen tube</text><text x="135" y="132">ovule</text><text x="60" y="160">ovary</text>
  </g>
</svg>
\`\`\`

## Asexual (vegetative) reproduction

- New plants form from a **part of the parent** (no seeds): runners, tubers, bulbs, cuttings, grafting.
- Offspring are **identical** to the parent; fast, but no variation.

## Common errors and misconceptions

- **"Pollination and fertilisation are the same"** — **pollination** is the transfer of pollen; **fertilisation** is the fusion of male and female nuclei (comes after pollination).
- **"Pollination needs the pollen tube"** — the pollen tube grows during **fertilisation**, after pollination.
- **"Cross-pollination is within one flower"** — that is **self**-pollination; cross-pollination is between **different plants**.
- **"The petal becomes the fruit"** — the **ovary** becomes the fruit; the **ovule** becomes the seed.`,
      workedExample: `**Question:** A maize plant has tassels at the top and silks lower down. Wind carries pollen from the tassels to the silks. (a) Name the process and its agent. (b) Explain what happens after the pollen reaches the silk for a seed to form. (c) Is this self- or cross-pollination if the pollen came from a different maize plant?

**Solution**

**(a) Process and agent.** Pollen moving from the **anthers (tassels)** to the **stigma (silk)** is **pollination**; the agent is the **wind** (maize is wind-pollinated — small dull flowers, feathery stigmas, light pollen).

**(b) After pollination.** The pollen grain on the silk grows a **pollen tube** down to the **ovary**. There, **double fertilisation** occurs: one male nucleus fuses with the **egg** to form the **zygote**, which grows into the **embryo**; the other forms the **endosperm** (food store). The **ovule then becomes the seed** (the maize grain) and the surrounding tissue the fruit.

**(c) Self or cross?** Because the pollen came from a **different maize plant** of the same species, this is **cross-pollination**, which increases variation.

**Answer:** it is wind pollination; the pollen tube carries male nuclei to the ovule for double fertilisation, forming the zygote/embryo and seed; pollen from another plant makes it cross-pollination.`,
      quiz: [
        { prompt: "Pollination is the transfer of pollen from the anther to the", options: ["stigma", "ovary", "sepal", "root"], correctIndex: 0, explanation: "Pollen moves to the stigma." },
        { prompt: "Pollen landing on the stigma of the same flower is", options: ["self-pollination", "cross-pollination", "fertilisation", "germination"], correctIndex: 0, explanation: "Same flower/plant = self-pollination." },
        { prompt: "Cross-pollination transfers pollen to", options: ["a flower on a different plant", "the same flower", "the root", "the leaf"], correctIndex: 0, explanation: "Between different plants of the same species." },
        { prompt: "Which flowers are usually wind-pollinated?", options: ["small, dull, feathery-stigma flowers", "large, bright, scented flowers", "flowers with nectar", "flowers with sticky pollen"], correctIndex: 0, explanation: "Wind flowers are small and dull with light pollen." },
        { prompt: "Insect-pollinated flowers usually have", options: ["bright petals and nectar", "no petals", "feathery stigmas", "light dry pollen"], correctIndex: 0, explanation: "Colour, scent and nectar attract insects." },
        { prompt: "After pollination, the pollen grows a", options: ["pollen tube", "root hair", "runner", "tendril"], correctIndex: 0, explanation: "The pollen tube grows to the ovule." },
        { prompt: "Fertilisation is the fusion of", options: ["male and female nuclei", "two petals", "two stigmas", "two sepals"], correctIndex: 0, explanation: "Male nucleus fuses with the egg." },
        { prompt: "In flowering plants, double fertilisation forms a zygote and", options: ["endosperm", "a petal", "a sepal", "a root"], correctIndex: 0, explanation: "The second fusion forms endosperm (food)." },
        { prompt: "The zygote develops into the", options: ["embryo", "petal", "anther", "sepal"], correctIndex: 0, explanation: "The zygote grows into the embryo." },
        { prompt: "After fertilisation, the ovule becomes the", options: ["seed", "fruit", "flower", "leaf"], correctIndex: 0, explanation: "Ovule → seed." },
        { prompt: "After fertilisation, the ovary becomes the", options: ["fruit", "seed", "root", "stem"], correctIndex: 0, explanation: "Ovary → fruit." },
        { prompt: "Cross-pollination is advantageous because it", options: ["increases variation", "removes all variation", "prevents seeds", "stops growth"], correctIndex: 0, explanation: "New gene combinations arise." },
        { prompt: "Asexual (vegetative) reproduction produces offspring that are", options: ["identical to the parent", "always different", "seedlings from pollen", "unable to grow"], correctIndex: 0, explanation: "No fusion of gametes, so identical." },
        { prompt: "Which is asexual reproduction in plants?", options: ["growth from a runner", "pollination by bees", "fertilisation of an egg", "seed formation"], correctIndex: 0, explanation: "Runners reproduce vegetatively." },
        { prompt: "Pollination differs from fertilisation because pollination is", options: ["the transfer of pollen (before fertilisation)", "the fusion of nuclei", "the growth of a seed", "the making of a fruit"], correctIndex: 0, explanation: "Pollination precedes fertilisation." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between self-pollination and cross-pollination.", answerKey: "Self-pollination: pollen to the stigma of the same flower or another flower on the same plant. Cross-pollination: pollen to a flower on a different plant of the same species (more variation). 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "After fertilisation, the ovule develops into the", options: ["fruit", "seed", "petal", "stigma"], correctIndex: 1, answerKey: "Seed. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe what happens from pollination to the formation of a seed.", answerKey: "Pollen lands on stigma; grows a pollen tube down the style to the ovary; male nucleus fuses with the egg (fertilisation) to form a zygote; zygote becomes the embryo; the ovule becomes the seed. Award marks for the sequence.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two differences between sexual and asexual reproduction in plants.", answerKey: "Sexual: involves pollination/fertilisation, seeds, variation. Asexual: from a part of the parent (runner/tuber/cutting), no seeds, offspring identical. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Describe pollination, its agents, and the process of fertilisation in flowering plants.", answerKey: "Pollination: transfer of pollen from anther to stigma; self vs cross (4). Agents: insects (bright/scent/nectar), wind (small dull, feathery stigma, light pollen), birds/bats, water — with flower adaptations (5). Fertilisation: pollen tube to ovary, double fertilisation forming zygote and endosperm, zygote→embryo, ovule→seed, ovary→fruit (up to 6). Reward correct sequence.", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 32.2 Pollination and Fertilization (seed and fruit development, dispersal) (https://openstax.org/books/biology-2e/pages/32-2-pollination-and-fertilization)
    {
      slug: "fruits-and-seed-dispersal",
      title: "Fruits and the Dispersal of Fruits and Seeds",
      objective:
        "By the end of the topic, learners should be able to describe kinds of fruits and explain the dispersal of fruits and seeds and its agents.",
      estimatedMinutes: 100,
      notes: `## Fruits

- A **fruit** develops from the **ovary** after fertilisation; its main job is **seed dispersal**.
- **Seeds** develop from the **ovules** inside.

**Kinds of fruit (simple grouping):**
- **Fleshy fruits** — soft and juicy (mango, orange, tomato); often eaten by animals.
- **Dry fruits** — hard or papery when ripe:
  - **Dehiscent** — split open to release seeds (bean/pea pods).
  - **Indehiscent** — do not split (maize grain, groundnut).

## Why dispersal matters

If all seeds fell under the parent, the seedlings would **compete** with the parent and each other for light, water and minerals. **Dispersal** spreads seeds to new places, reducing competition and colonising new ground.

## Agents (methods) of dispersal

| Agent | Adaptations of the fruit/seed | Example |
| --- | --- | --- |
| **Wind** | light, winged or with hairs/parachutes | *Combretum*, cotton, dandelion |
| **Animals** | hooks that cling to fur, or juicy fruits eaten (seeds pass out) | *Bidens* (hooks), mango |
| **Water** | float; light, spongy/fibrous | coconut |
| **Self / explosive (mechanical)** | pods that suddenly split and throw seeds | bean, *Crotalaria* (rattle box) |

\`\`\`svg Three dispersal methods: wind, animal (hooks), explosive pod
<svg viewBox="0 0 300 110" role="img" aria-label="Wind-dispersed winged seed, hooked seed, and bursting pod">
  <g fill="none" stroke="currentColor">
    <circle cx="45" cy="55" r="6"/><path d="M45 49 q 20 -18 34 -2"/><path d="M45 49 q -20 -18 -34 -2"/>
    <circle cx="150" cy="55" r="8"/><line x1="150" y1="47" x2="150" y2="38"/><line x1="145" y1="49" x2="140" y2="42"/><line x1="155" y1="49" x2="160" y2="42"/>
    <path d="M245 40 q 10 20 0 40" /><path d="M255 40 q -10 20 0 40"/>
  </g>
  <g font-size="8" fill="currentColor" text-anchor="middle">
    <text x="45" y="90">wind (wings)</text><text x="150" y="90">animal (hooks)</text><text x="250" y="90">explosive pod</text>
  </g>
</svg>
\`\`\`

## Common errors and misconceptions

- **"The seed becomes the fruit"** — the **ovary** becomes the **fruit**; the **ovule** becomes the **seed**.
- **"All fruits are sweet food"** — a bean pod and a maize grain are also **fruits** (dry fruits).
- **"Dispersal is the same as germination"** — dispersal is the **spreading** of seeds; germination is a seed **growing** into a seedling.
- **"Hooks help wind dispersal"** — hooks are for **animal** dispersal; wind seeds have **wings or hairs**.`,
      workedExample: `**Question:** Match each seed/fruit to its dispersal agent and explain the adaptation: (a) a coconut; (b) a seed with tiny hooks; (c) a light seed with a tuft of hairs; (d) a bean pod that twists and cracks open.

**Solution**

**(a) Coconut → water dispersal.** It is large, light and has a thick **fibrous, buoyant husk** that lets it **float** on sea or river water to a new shore.

**(b) Hooked seed → animal dispersal.** The tiny **hooks** catch on the **fur** of passing animals (or clothing), which carry the seed away before it drops off.

**(c) Light seed with hairs → wind dispersal.** The **tuft of hairs (parachute)** and light weight let the seed be **blown by the wind** far from the parent.

**(d) Twisting, cracking pod → self/explosive (mechanical) dispersal.** As the pod **dries** it builds up tension and suddenly **splits and flings** the seeds away from the parent plant.

**Answer:** coconut = water (floats on a fibrous husk); hooked seed = animal (clings to fur); hairy seed = wind (carried by air); cracking pod = explosive self-dispersal — each fruit is adapted to its agent.`,
      quiz: [
        { prompt: "A fruit develops from the", options: ["ovary", "petal", "stigma", "sepal"], correctIndex: 0, explanation: "The ovary becomes the fruit." },
        { prompt: "Seeds develop from the", options: ["ovules", "anthers", "petals", "sepals"], correctIndex: 0, explanation: "Ovules become seeds." },
        { prompt: "The main purpose of a fruit is", options: ["seed dispersal", "photosynthesis", "support", "gas exchange"], correctIndex: 0, explanation: "Fruits help spread seeds." },
        { prompt: "A dry fruit that splits open to release seeds is", options: ["dehiscent", "indehiscent", "fleshy", "a berry"], correctIndex: 0, explanation: "Dehiscent fruits split (e.g. pods)." },
        { prompt: "A mango is an example of a", options: ["fleshy fruit", "dry dehiscent fruit", "wind-dispersed fruit", "dry indehiscent fruit"], correctIndex: 0, explanation: "Mango is soft and juicy." },
        { prompt: "Seeds with tiny hooks are dispersed by", options: ["animals", "wind", "water", "explosion"], correctIndex: 0, explanation: "Hooks cling to animal fur." },
        { prompt: "Light seeds with wings or hairs are dispersed by", options: ["wind", "water", "animals only", "explosion"], correctIndex: 0, explanation: "Wings/hairs catch the wind." },
        { prompt: "The coconut is adapted for dispersal by", options: ["water", "wind", "hooks", "explosion"], correctIndex: 0, explanation: "Its fibrous husk floats." },
        { prompt: "A bean pod that suddenly splits shows ____ dispersal.", options: ["explosive/self", "wind", "water", "animal"], correctIndex: 0, explanation: "The pod flings seeds mechanically." },
        { prompt: "Dispersal is important because it", options: ["reduces competition with the parent", "increases shading", "prevents germination", "removes all seeds"], correctIndex: 0, explanation: "Spreading reduces overcrowding." },
        { prompt: "Juicy fruits eaten by animals disperse seeds when", options: ["seeds pass out in droppings", "the fruit floats", "the wind blows", "the pod bursts"], correctIndex: 0, explanation: "Seeds survive the gut and are dropped elsewhere." },
        { prompt: "A maize grain and a groundnut are examples of", options: ["dry indehiscent fruits", "fleshy fruits", "dehiscent pods", "wind fruits"], correctIndex: 0, explanation: "They are dry fruits that do not split." },
        { prompt: "Which is NOT an agent of seed dispersal?", options: ["photosynthesis", "wind", "water", "animals"], correctIndex: 0, explanation: "Photosynthesis is food-making, not dispersal." },
        { prompt: "Dispersal differs from germination because dispersal is", options: ["the spreading of seeds", "the growth of the seedling", "the making of a flower", "photosynthesis"], correctIndex: 0, explanation: "Germination is the seed growing." },
        { prompt: "A wind-dispersed fruit is usually", options: ["light with wings or hairs", "heavy and juicy", "covered in hooks", "buoyant and fibrous"], correctIndex: 0, explanation: "Light structures catch the wind." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the difference between a fruit and a seed in terms of their origin.", answerKey: "A fruit develops from the ovary; a seed develops from the ovule. 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A coconut is adapted for dispersal by", options: ["wind", "water", "animals", "explosion"], correctIndex: 1, answerKey: "Water. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Name four agents of seed dispersal and give one example for each.", answerKey: "Wind (winged/hairy seed); animals (hooked or juicy fruit); water (coconut); self/explosive (bean pod). 1 mark per agent + example, max 4.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why seed dispersal is important to a plant.", answerKey: "It spreads seeds away from the parent, reducing competition for light, water and minerals, and lets the species colonise new areas. Award marks for reduced competition and colonising new ground.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the agents of fruit and seed dispersal and the adaptations that suit fruits/seeds to each, and explain the importance of dispersal.", answerKey: "Wind: light, winged/hairy (3). Animals: hooks or juicy fruits eaten (3). Water: buoyant, fibrous (3). Explosive: pods that split (2). Importance: reduces competition, colonises new areas (up to 4). Reward examples.", marks: 15 },
      ],
    },
    // source: LibreTexts — Coalinga College Introduction to Plant Science, 14.07 Introduction to Seed Germination (https://bio.libretexts.org/Courses/Coalinga_College/Introduction_to_Plant_Science_(Hochman_Adler)/14:_The_Origin_of_Trees_and_Seeds/14.07:_Introduction_to_Seed_Germination)
    {
      slug: "germination",
      title: "Seed Germination",
      objective:
        "By the end of the topic, learners should be able to describe the conditions necessary for germination and distinguish epigeal from hypogeal germination.",
      estimatedMinutes: 100,
      notes: `## What is germination?

- **Germination** — the growth of a **seed** into a young plant (**seedling**).
- A seed contains an **embryo** (young plant) and a **food store** (cotyledons/endosperm), protected by a **seed coat**.

## Conditions necessary for germination

Three main conditions must be present:

1. **Water** — taken up (imbibed) to soften the seed coat, activate **enzymes** and start metabolism.
2. **Oxygen** — needed for **respiration**, which releases energy for growth. (Over-watering drowns the seed and stops oxygen reaching it.)
3. **Suitable temperature (warmth)** — enzymes work best in a certain range; too cold or too hot and germination fails.

- (Some seeds also need **light** or its absence to germinate.)

## The process

1. The seed **absorbs water** and swells.
2. **Enzymes** digest the stored food into soluble form.
3. The **radicle** (young root) emerges first and grows down.
4. The **plumule** (young shoot) grows up.
5. The seedling makes leaves and begins **photosynthesis**.

## Types of germination

**Epigeal germination** (*epi* = above)
- The **hypocotyl** elongates and pushes the **cotyledons above the ground**.
- The cotyledons often turn green and photosynthesise.
- Example: **bean**.

**Hypogeal germination** (*hypo* = below)
- The **epicotyl** elongates; the **cotyledons stay below the ground**.
- Example: **maize**, pea.

\`\`\`svg Epigeal (cotyledons above ground) vs hypogeal (cotyledons stay below)
<svg viewBox="0 0 300 130" role="img" aria-label="Epigeal versus hypogeal germination">
  <line x1="10" y1="80" x2="290" y2="80" stroke="currentColor" stroke-dasharray="3 3"/>
  <g fill="none" stroke="currentColor">
    <line x1="70" y1="80" x2="70" y2="35"/><ellipse cx="62" cy="33" rx="8" ry="4"/><ellipse cx="78" cy="33" rx="8" ry="4"/><line x1="70" y1="80" x2="70" y2="110"/>
    <line x1="210" y1="80" x2="210" y2="35"/><path d="M210 35 q 8 -8 16 -2"/><ellipse cx="210" cy="100" rx="8" ry="4"/><line x1="210" y1="80" x2="210" y2="115"/>
  </g>
  <g font-size="8" fill="currentColor" text-anchor="middle">
    <text x="70" y="125">epigeal (bean)</text><text x="210" y="128">hypogeal (maize)</text>
  </g>
</svg>
\`\`\`

## Common errors and misconceptions

- **"Seeds need light to germinate"** — most need **water, oxygen and warmth**; many germinate in the **dark** underground.
- **"More water is always better"** — **over-watering** blocks **oxygen** and the seed rots instead of germinating.
- **"The shoot appears first"** — the **radicle (root)** usually emerges **first**.
- **Epigeal vs hypogeal** — epigeal = cotyledons **above** ground (bean); hypogeal = cotyledons **below** ground (maize).`,
      workedExample: `**Question:** In an experiment, bean seeds are set up in four jars: (1) moist cotton wool in warm air; (2) dry cotton wool in warm air; (3) seeds fully covered in boiled, cooled water (no air) in warm conditions; (4) moist cotton wool in a cold refrigerator. Only jar 1 germinates. Explain the results and state which condition each jar tests.

**Solution**

- **Jar 1 (moist, warm, air)** — has **water, oxygen and warmth**, the three conditions for germination, so it **germinates**. This is the **control**.
- **Jar 2 (dry, warm, air)** — tests **water**. With no water the seed cannot imbibe or activate enzymes, so **no germination** → shows **water is needed**.
- **Jar 3 (covered in boiled water, no air)** — tests **oxygen**. Boiling removed dissolved air, and the water seals out oxygen, so the seed cannot **respire**, so **no germination** → shows **oxygen is needed**.
- **Jar 4 (moist, cold)** — tests **temperature**. It is too cold for the enzymes to work, so **no germination** → shows **warmth is needed**.

*Conclusion:* germination needs **water, oxygen and a suitable (warm) temperature**; removing any one prevents it, as each jar demonstrates.

**Answer:** jar 1 germinates because all three conditions are present; jars 2, 3 and 4 fail because they each lack water, oxygen or warmth respectively — proving all three are necessary.`,
      quiz: [
        { prompt: "Germination is the", options: ["growth of a seed into a seedling", "spreading of seeds", "making of a flower", "loss of water"], correctIndex: 0, explanation: "The seed grows into a young plant." },
        { prompt: "Which three conditions are needed for germination?", options: ["water, oxygen, warmth", "light, soil, wind", "carbon dioxide, chlorophyll, light", "salt, oxygen, cold"], correctIndex: 0, explanation: "Water, oxygen and a suitable temperature." },
        { prompt: "Water is needed in germination to", options: ["activate enzymes and start metabolism", "make the seed float", "cool the seed", "provide oxygen"], correctIndex: 0, explanation: "Water softens the coat and activates enzymes." },
        { prompt: "Oxygen is needed for germination because it allows", options: ["respiration to release energy", "photosynthesis", "dispersal", "pollination"], correctIndex: 0, explanation: "Respiration provides energy for growth." },
        { prompt: "Over-watering can stop germination because it", options: ["keeps oxygen from the seed", "adds too much warmth", "provides too much light", "removes water"], correctIndex: 0, explanation: "Waterlogging blocks oxygen." },
        { prompt: "The part of the embryo that grows into the root is the", options: ["radicle", "plumule", "cotyledon", "testa"], correctIndex: 0, explanation: "The radicle becomes the root." },
        { prompt: "The part that grows into the shoot is the", options: ["plumule", "radicle", "cotyledon", "endosperm"], correctIndex: 0, explanation: "The plumule becomes the shoot." },
        { prompt: "In epigeal germination, the cotyledons are", options: ["carried above the ground", "kept below the ground", "eaten by insects", "turned into roots"], correctIndex: 0, explanation: "'Epi' means above ground." },
        { prompt: "In hypogeal germination, the cotyledons", options: ["stay below the ground", "are pushed above the ground", "become the flower", "float away"], correctIndex: 0, explanation: "'Hypo' means below ground." },
        { prompt: "Which seed shows epigeal germination?", options: ["bean", "maize", "pea", "onion"], correctIndex: 0, explanation: "The bean's cotyledons rise above ground." },
        { prompt: "Which seed shows hypogeal germination?", options: ["maize", "bean", "sunflower", "castor"], correctIndex: 0, explanation: "Maize keeps its cotyledon below ground." },
        { prompt: "Which usually emerges first from a germinating seed?", options: ["the radicle (root)", "the flower", "the fruit", "the plumule"], correctIndex: 0, explanation: "The root emerges first." },
        { prompt: "The food store used before the seedling can photosynthesise is the", options: ["cotyledons/endosperm", "radicle", "testa", "stomata"], correctIndex: 0, explanation: "Stored food nourishes the young plant." },
        { prompt: "Many seeds germinate in the dark because they", options: ["are buried and use stored food", "do not need water", "photosynthesise underground", "need no oxygen"], correctIndex: 0, explanation: "They live on stored food until leaves form." },
        { prompt: "In epigeal germination the ____ elongates to lift the cotyledons.", options: ["hypocotyl", "epicotyl", "radicle", "testa"], correctIndex: 0, explanation: "The hypocotyl lifts the cotyledons up." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the three conditions necessary for germination and why each is needed.", answerKey: "Water – softens the coat, activates enzymes, starts metabolism; oxygen – for respiration to release energy; suitable temperature – so enzymes can work. 1 mark condition + 1 reason each (max 6, capped).", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "In which type of germination do the cotyledons remain below the ground?", options: ["Epigeal", "Hypogeal", "Both", "Neither"], correctIndex: 1, answerKey: "Hypogeal. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between epigeal and hypogeal germination, giving one example of each.", answerKey: "Epigeal: cotyledons carried above ground (hypocotyl elongates), e.g. bean. Hypogeal: cotyledons stay below ground (epicotyl elongates), e.g. maize. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why a seed will not germinate if it is completely covered by water for a long time.", answerKey: "The water keeps oxygen from reaching the seed, so it cannot respire to release energy for growth; it will swell but fail to germinate and may rot. Award marks for lack of oxygen/respiration.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the process of germination and design an experiment to show that oxygen is necessary.", answerKey: "Process: water uptake, enzymes digest food, radicle then plumule emerge, seedling photosynthesises (7). Experiment: set up germinating seeds with water and warmth but exclude oxygen (boiled water + oil/pyrogallol) vs a control with air; only the control germinates, showing oxygen is needed; identify variable and control (up to 8). Reward valid fair-test design.", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 30.6 Plant Sensory Systems and Responses (https://openstax.org/books/biology-2e/pages/30-6-plant-sensory-systems-and-responses)
    {
      slug: "plant-hormones-and-growth",
      title: "Plant Hormones, Growth and Movements",
      objective:
        "By the end of the topic, learners should be able to name the main plant hormones and their effects, distinguish primary and secondary growth, and distinguish tropic from nastic movements.",
      estimatedMinutes: 110,
      notes: `## Plant hormones

**Hormones** are chemical messengers that control growth and responses.

| Hormone | Main effects |
| --- | --- |
| **Auxins** (e.g. IAA) | **cell elongation**; control tropisms; apical dominance |
| **Gibberellins** | stem elongation; **seed germination**; break dormancy |
| **Cytokinins** | promote **cell division**; delay ageing of leaves |
| **Abscisic acid** | causes **dormancy** and closes stomata under stress |
| **Ethylene** | **fruit ripening**; flower wilting; leaf fall |

## Plant growth

- **Primary growth** — growth in **length** at the tips of roots and shoots (from apical meristems).
- **Secondary growth** — growth in **thickness (girth)** of stems and roots (from lateral meristems/cambium); makes wood.
- Growth can be **measured** with a ruler over time, or with an **auxanometer**.

## Plant movements

Plants respond to stimuli by moving (usually by growth).

**Tropisms — directional growth responses** (toward or away from the stimulus):
- **Phototropism** — response to **light**; shoots grow **toward** light (auxin gathers on the shaded side, so that side elongates and the shoot bends to the light).
- **Gravitropism (geotropism)** — response to **gravity**; roots grow **down** (positive), shoots grow **up** (negative).
- **Thigmotropism** — response to **touch**; tendrils coil around a support.

**Nastic movements — non-directional responses** (the direction of the response does not depend on the direction of the stimulus):
- **Thigmonasty** — touch response, e.g. the **sensitive plant (Mimosa)** folds its leaves, the **Venus flytrap** snaps shut.
- **Nyctinasty** — "sleep" movements, e.g. leaves folding at night.

\`\`\`svg Phototropism: a shoot bending toward light
<svg viewBox="0 0 200 130" role="img" aria-label="Shoot bending toward light from one side">
  <line x1="60" y1="120" x2="60" y2="70" stroke="currentColor" stroke-width="3"/>
  <path d="M60 70 q 6 -30 40 -40" fill="none" stroke="currentColor" stroke-width="3"/>
  <g stroke="currentColor"><line x1="150" y1="20" x2="120" y2="35"/><line x1="150" y1="30" x2="120" y2="42"/></g>
  <text x="160" y="26" font-size="9" fill="currentColor">light</text>
  <text x="40" y="118" font-size="8" fill="currentColor">shoot</text>
</svg>
\`\`\`

## Common errors and misconceptions

- **"Roots grow toward light"** — roots show **positive gravitropism** (grow **down**); shoots grow toward light.
- **"Tropism and nasty are the same"** — a **tropism** is **directional** (depends on the direction of the stimulus); a **nastic** movement is **non-directional**.
- **"Auxin makes the lit side grow"** — auxin gathers on the **shaded** side, which elongates, bending the shoot **toward** the light.
- **"Plants cannot move"** — plants move mainly by **growth** (tropisms) and by rapid turgor changes (nastic movements).`,
      workedExample: `**Question:** A potted plant on a windowsill grows so that its shoots bend toward the window, while its roots grow straight down into the soil. Explain both responses, name the type of movement, and name the hormone involved in the shoot response.

**Solution**

*The shoot bending to the window.* This is **phototropism** — a **tropism** (directional growth response) to **light**. Light comes mainly from the window, so the hormone **auxin** gathers on the **shaded** side of the shoot. Auxin causes **cell elongation**, so the shaded side grows **longer** than the lit side, bending the shoot **toward the light** (positive phototropism). This helps the leaves catch more light for photosynthesis.

*The roots growing down.* This is **gravitropism (geotropism)** — a tropism responding to **gravity**. Roots show **positive** gravitropism, growing **down** toward the pull of gravity, which anchors the plant and finds water and minerals. (Shoots show **negative** gravitropism, growing up.)

*Type of movement and hormone.* Both are **tropisms** (directional growth responses); the shoot response involves the hormone **auxin**.

**Answer:** the shoot shows positive phototropism (auxin gathers on the shaded side, which elongates, bending it to the light); the roots show positive gravitropism (growing down); both are tropisms.`,
      quiz: [
        { prompt: "Plant hormones are best described as", options: ["chemical messengers controlling growth", "food stores", "waste products", "types of cell"], correctIndex: 0, explanation: "Hormones coordinate growth and responses." },
        { prompt: "Auxins mainly cause", options: ["cell elongation", "fruit ripening", "leaf fall", "stomata to close"], correctIndex: 0, explanation: "Auxins drive cell elongation and tropisms." },
        { prompt: "The hormone that ripens fruit is", options: ["ethylene", "auxin", "cytokinin", "abscisic acid"], correctIndex: 0, explanation: "Ethylene ripens fruit." },
        { prompt: "A directional growth response to a stimulus is a", options: ["tropism", "nastic movement", "reflex", "hormone"], correctIndex: 0, explanation: "Tropisms depend on stimulus direction." },
        { prompt: "Shoots growing toward light show", options: ["positive phototropism", "negative gravitropism", "thigmonasty", "nyctinasty"], correctIndex: 0, explanation: "Phototropism is a response to light." },
        { prompt: "Roots growing downward show", options: ["positive gravitropism", "phototropism", "thigmotropism", "nastic movement"], correctIndex: 0, explanation: "Roots respond positively to gravity." },
        { prompt: "Tendrils coiling around a support show", options: ["thigmotropism", "phototropism", "gravitropism", "nyctinasty"], correctIndex: 0, explanation: "Thigmotropism is a touch response." },
        { prompt: "The folding of the sensitive plant's leaves when touched is a", options: ["nastic movement (thigmonasty)", "tropism", "gravitropism", "phototropism"], correctIndex: 0, explanation: "Nastic movements are non-directional." },
        { prompt: "Growth in length at root and shoot tips is", options: ["primary growth", "secondary growth", "nastic movement", "dispersal"], correctIndex: 0, explanation: "Primary growth increases length." },
        { prompt: "Growth in thickness (girth) of a stem is", options: ["secondary growth", "primary growth", "phototropism", "germination"], correctIndex: 0, explanation: "Secondary growth adds girth/wood." },
        { prompt: "In phototropism, auxin gathers on the", options: ["shaded side of the shoot", "lit side", "root cap", "stomata"], correctIndex: 0, explanation: "The shaded side elongates, bending toward light." },
        { prompt: "The hormone that promotes seed germination is", options: ["gibberellin", "abscisic acid", "ethylene", "auxin"], correctIndex: 0, explanation: "Gibberellins break dormancy and aid germination." },
        { prompt: "Cytokinins mainly promote", options: ["cell division", "fruit ripening", "leaf fall", "dormancy"], correctIndex: 0, explanation: "Cytokinins promote cell division." },
        { prompt: "Which distinguishes a nastic movement from a tropism?", options: ["it is non-directional", "it is always toward light", "it needs no stimulus", "it is faster growth only"], correctIndex: 0, explanation: "Nastic responses do not depend on stimulus direction." },
        { prompt: "Abscisic acid tends to", options: ["cause dormancy and close stomata", "ripen fruit", "elongate cells", "cause cell division"], correctIndex: 0, explanation: "ABA induces dormancy and stress responses." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name three plant hormones and state one effect of each.", answerKey: "Any three: auxin – cell elongation/tropisms; gibberellin – germination/stem elongation; cytokinin – cell division; abscisic acid – dormancy/close stomata; ethylene – fruit ripening. 1 mark hormone + 1 effect (max 6, capped).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Roots growing downward in response to gravity show", options: ["phototropism", "positive gravitropism", "thigmonasty", "nyctinasty"], correctIndex: 1, answerKey: "Positive gravitropism. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between a tropism and a nastic movement, giving an example of each.", answerKey: "Tropism: directional growth response depending on stimulus direction (e.g. phototropism). Nastic: non-directional response (e.g. sensitive plant folding). 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between primary and secondary growth.", answerKey: "Primary growth: increase in length at root/shoot tips (apical meristems). Secondary growth: increase in thickness/girth (lateral meristems/cambium, makes wood). 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Explain how a shoot bends toward light, naming the hormone and process involved, and compare this with a nastic movement.", answerKey: "Phototropism: auxin gathers on the shaded side, causing cell elongation there so the shoot bends toward light (positive phototropism); a directional tropism (8). Nastic movement: non-directional response e.g. sensitive plant/Venus flytrap, driven by turgor changes, direction independent of stimulus (up to 7). Reward the tropism vs nastic contrast.", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 30.5 Transport of Water and Solutes in Plants (https://openstax.org/books/biology-2e/pages/30-5-transport-of-water-and-solutes-in-plants)
    {
      slug: "transport-in-vascular-plants",
      title: "Transport in Vascular Plants",
      objective:
        "By the end of the topic, learners should be able to explain how water and minerals move up the xylem and how food is moved (translocated) in the phloem, including the pressure-flow hypothesis.",
      estimatedMinutes: 120,
      notes: `## The two transport tissues

- **Xylem** — carries **water and dissolved minerals** from the roots **upward** to the leaves. Dead, hollow tubes.
- **Phloem** — carries **food (sugars)** made in the leaves to the rest of the plant, up or down (**translocation**). Living cells.

## Movement of water and minerals up the xylem

Water moves from soil → root → stem → leaf → air, always down a **water potential gradient** (Ψ soil > Ψ root > Ψ stem > Ψ leaf > Ψ air).

Forces that raise water up the xylem:

- **Transpiration pull (cohesion–tension)** — water evaporating from the leaves creates a **suction/tension** that pulls the whole water column up. This is the main force.
- **Cohesion** — water molecules stick to **each other**, forming an unbroken column.
- **Adhesion** — water molecules stick to the **walls of the xylem**, helping hold the column.
- **Root pressure** — pressure from the roots pushes water up a little (important at night).

\`\`\`svg Water rises from roots through xylem to leaves (transpiration pull)
<svg viewBox="0 0 160 200" role="img" aria-label="Water moving up the xylem from roots to leaves">
  <line x1="80" y1="180" x2="80" y2="40" stroke="currentColor" stroke-width="3"/>
  <path d="M80 40 q -20 -10 -34 -4" fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M80 40 q 20 -10 34 -4" fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M70 180 q -14 8 -22 20" fill="none" stroke="currentColor"/><path d="M90 180 q 14 8 22 20" fill="none" stroke="currentColor"/>
  <g stroke="currentColor"><line x1="80" y1="150" x2="80" y2="130"/><polygon points="80,128 76,138 84,138" fill="currentColor"/></g>
  <text x="95" y="30" font-size="8" fill="currentColor">water lost (transpiration)</text>
  <text x="20" y="195" font-size="8" fill="currentColor">roots absorb water</text>
</svg>
\`\`\`

## Translocation in the phloem — the pressure-flow hypothesis

**Translocation** — the movement of food (sucrose) in the phloem from **source** to **sink**.

- **Source** = where sugar is made or stored (leaves).
- **Sink** = where sugar is used or stored (roots, growing shoots, fruits, seeds).

**Pressure-flow hypothesis:**
1. Sugar is **loaded** into the phloem at the source (leaves).
2. This lowers the water potential there, so **water enters** the phloem by osmosis, raising the **pressure**.
3. The high pressure pushes the sap by **bulk flow** to the **sink**.
4. Sugar is **unloaded** at the sink; water leaves, lowering the pressure.

- Cytoplasmic streaming inside cells also helps move materials about.

## Common errors and misconceptions

- **"Xylem carries food"** — xylem carries **water and minerals**; **phloem** carries **food**.
- **"Water is pushed up mainly by the roots"** — the main force is **transpiration pull** from the leaves, not root pressure.
- **"Translocation only goes downward"** — food moves from **source to sink**, which can be **up or down**.
- **"Phloem cells are dead like xylem"** — phloem sieve cells are **alive** at maturity.`,
      workedExample: `**Question:** A ring of bark (containing the phloem) is removed all around a tree trunk. Over time the bark above the ring swells while the roots below slowly starve. Explain these observations using plant transport, and state why the leaves still get water.

**Solution**

*Step 1 — what was removed.* The **phloem** lies in the **bark**; removing a complete ring of bark cuts the **phloem** all the way round but leaves the inner **xylem** intact.

*Step 2 — why the bark above swells.* Sugar made in the leaves is carried **downward** in the phloem from source (leaves) to sink (roots). With the phloem cut, sugar (and the water it draws in) **piles up just above the ring**, so the bark there **swells**.

*Step 3 — why the roots starve.* No sugar can pass the cut to reach the **roots** (the sink), so the roots gradually run out of food and the tree slowly dies from below — this is why "ring-barking" kills trees.

*Step 4 — why the leaves still get water.* Water and minerals travel **upward in the xylem**, which was **not** removed. So transpiration pull still lifts water to the leaves, and they stay supplied with water for a while.

**Answer:** ring-barking cuts the phloem, so sugar cannot move down — it accumulates above the ring (swelling) and the roots starve; the xylem is intact, so water still reaches the leaves.`,
      quiz: [
        { prompt: "Water and minerals are carried upward in the", options: ["xylem", "phloem", "cuticle", "stomata"], correctIndex: 0, explanation: "Xylem carries water and minerals up." },
        { prompt: "Food made in the leaves is carried in the", options: ["phloem", "xylem", "epidermis", "root cap"], correctIndex: 0, explanation: "Phloem transports food (translocation)." },
        { prompt: "The main force pulling water up the xylem is", options: ["transpiration pull", "root pressure only", "gravity", "wind pressure"], correctIndex: 0, explanation: "Transpiration creates the pull (cohesion–tension)." },
        { prompt: "Water molecules sticking to each other is", options: ["cohesion", "adhesion", "diffusion", "osmosis"], correctIndex: 0, explanation: "Cohesion keeps the water column unbroken." },
        { prompt: "Water molecules sticking to the xylem walls is", options: ["adhesion", "cohesion", "transpiration", "translocation"], correctIndex: 0, explanation: "Adhesion helps hold the column." },
        { prompt: "The movement of food from source to sink is", options: ["translocation", "transpiration", "germination", "pollination"], correctIndex: 0, explanation: "Translocation moves sugars in the phloem." },
        { prompt: "In the pressure-flow hypothesis, the source is the", options: ["leaves (where sugar is made)", "roots only", "flower", "stomata"], correctIndex: 0, explanation: "Sugar is loaded at the source (leaves)." },
        { prompt: "A sink in translocation is a place where sugar is", options: ["used or stored (roots, fruits)", "made", "lost as gas", "turned to water"], correctIndex: 0, explanation: "Sinks use or store the sugar." },
        { prompt: "Sugar loading into the phloem causes water to enter by", options: ["osmosis, raising pressure", "combustion", "respiration", "transpiration"], correctIndex: 0, explanation: "Water follows by osmosis, building pressure." },
        { prompt: "Root pressure is most important", options: ["at night when transpiration stops", "at midday", "during a storm", "never"], correctIndex: 0, explanation: "It helps when the stomata are closed." },
        { prompt: "Which conducting cells are dead and hollow?", options: ["xylem", "phloem", "guard cells", "companion cells"], correctIndex: 0, explanation: "Xylem vessels are dead at maturity." },
        { prompt: "Translocation can move food", options: ["upward or downward (source to sink)", "only downward", "only upward", "only sideways"], correctIndex: 0, explanation: "Direction depends on source and sink." },
        { prompt: "If the phloem is cut all round a stem, the roots will", options: ["slowly starve", "get more sugar", "grow faster", "gain water only"], correctIndex: 0, explanation: "Sugar cannot reach the roots." },
        { prompt: "Water moves through the plant down a gradient of", options: ["water potential", "temperature only", "light", "sugar only"], correctIndex: 0, explanation: "From high (soil) to low (air) water potential." },
        { prompt: "Which is TRUE about phloem?", options: ["its cells are alive at maturity", "it carries only water", "its cells are dead", "it works only at night"], correctIndex: 0, explanation: "Phloem sieve cells are living." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State what the xylem and phloem each transport and in which direction.", answerKey: "Xylem: water and minerals, upward from roots to leaves. Phloem: food/sugars, from source to sink (up or down). 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The main force that moves water up the xylem is", options: ["root pressure", "transpiration pull", "gravity", "osmosis in the leaf only"], correctIndex: 1, answerKey: "Transpiration pull. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Name three forces that help water rise up the xylem.", answerKey: "Any three: transpiration pull (cohesion–tension); cohesion of water; adhesion to xylem walls; root pressure. 1 mark each.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain the pressure-flow hypothesis of translocation.", answerKey: "Sugar is loaded into the phloem at the source (leaves), lowering water potential so water enters by osmosis and raises pressure; the pressure pushes sap by bulk flow to the sink, where sugar is unloaded and water leaves. Award marks for source loading, osmosis/pressure, and flow to sink.", marks: 4 },
        { type: "ESSAY", prompt: "Describe how water and food are transported in a flowering plant, and explain the evidence from ring-barking.", answerKey: "Water: xylem, transpiration pull, cohesion/adhesion, root pressure, water potential gradient (6). Food: phloem, translocation source to sink, pressure-flow (6). Ring-barking cuts phloem so sugar piles above the ring and roots starve, while xylem (intact) still carries water up — evidence phloem carries food (up to 3).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 30.5 Transport of Water and Solutes (transpiration and stomata) (https://openstax.org/books/biology-2e/pages/30-5-transport-of-water-and-solutes-in-plants)
    {
      slug: "transpiration-and-gaseous-exchange",
      title: "Transpiration and Gaseous Exchange",
      objective:
        "By the end of the topic, learners should be able to define transpiration, state its advantages and disadvantages and the factors affecting it, and explain gaseous exchange through stomata and lenticels.",
      estimatedMinutes: 110,
      notes: `## Transpiration

**Transpiration** — the loss of **water vapour** from a plant, mainly through the **stomata** of the leaves.

- Water evaporates from the wet mesophyll cell walls into the air spaces, then diffuses out through the **stomata**.
- Up to **90%** of the water absorbed by the roots is lost in transpiration.

## Advantages and disadvantages

**Advantages:**
- Creates the **transpiration pull** that draws **water and minerals** up the plant.
- **Cools** the leaves (like sweating).
- Keeps cells **turgid** as water flows through.

**Disadvantages:**
- **Water loss** can cause **wilting** if the soil is dry.
- The plant must keep absorbing water to replace the loss.

## Factors affecting the rate of transpiration

| Factor | Effect on rate |
| --- | --- |
| **Light** | more light opens stomata → **faster** |
| **Temperature** | higher temperature → **faster** evaporation |
| **Humidity** | high humidity → **slower** (air already moist) |
| **Wind** | wind removes moist air → **faster** |

## Gaseous exchange

Plants exchange gases (CO₂, O₂, water vapour) with the air:

- **Stomata** — pores in the leaf (mostly lower surface), each between two **guard cells** that open and close them. Main route for gas exchange in leaves.
- **Lenticels** — small openings in the **bark of woody stems and roots** that allow gas exchange where there is no stoma.

- Gases move by **diffusion** down a **concentration gradient**: in daylight CO₂ diffuses **in** (for photosynthesis) and O₂ diffuses **out**.

\`\`\`svg An open and a closed stoma between two guard cells
<svg viewBox="0 0 240 100" role="img" aria-label="Open stoma and closed stoma with guard cells">
  <g fill="none" stroke="currentColor">
    <path d="M40 30 q 20 -10 0 40 q -20 -10 0 -40 Z" transform="translate(0,0)"/>
    <path d="M70 30 q -20 -10 0 40 q 20 -10 0 -40 Z"/>
    <path d="M175 30 q 8 20 0 40"/><path d="M185 30 q -8 20 0 40"/>
  </g>
  <text x="55" y="90" font-size="8" text-anchor="middle" fill="currentColor">open stoma</text>
  <text x="180" y="90" font-size="8" text-anchor="middle" fill="currentColor">closed stoma</text>
</svg>
\`\`\`

## Common errors and misconceptions

- **"Transpiration is useless water loss"** — it also drives **water/mineral uptake** and **cools** the plant.
- **"Stomata are on top of the leaf"** — most are on the **lower** surface, to reduce water loss.
- **"High humidity speeds up transpiration"** — high humidity **slows** it (the air is already moist).
- **"Lenticels are the same as stomata"** — lenticels are in **bark**; stomata are in **leaves/green stems**.`,
      workedExample: `**Question:** A learner sets up a leafy shoot in a tube of water (a potometer) and measures how fast water is taken up under four conditions: (a) still air, (b) in front of a fan, (c) in a humid plastic bag, (d) in bright sun. Predict how the rate changes in each and explain why, in terms of transpiration.

**Solution**

The rate of water uptake follows the rate of **transpiration**, since water lost from the leaves is replaced from the tube.

- **(a) Still air (baseline).** A moderate rate; moist air lingers around the leaf, so evaporation is steady.
- **(b) Fan (wind).** **Faster.** Wind blows away the moist air near the stomata, keeping a steep concentration gradient, so more water vapour diffuses out.
- **(c) Humid bag.** **Slower.** The air in the bag becomes **saturated with water vapour**, reducing the gradient, so less water diffuses out.
- **(d) Bright sun.** **Faster.** Light **opens the stomata** and warmth speeds **evaporation**, so transpiration rises.

*Conclusion:* transpiration (and hence water uptake) increases with **light, heat and wind**, and decreases with **high humidity**.

**Answer:** fastest in wind and bright sun, slowest in the humid bag — because wind and light/heat increase evaporation and open stomata, while humidity lowers the gradient for water vapour to escape.`,
      quiz: [
        { prompt: "Transpiration is the loss of ____ from a plant.", options: ["water vapour", "oxygen only", "sugar", "minerals"], correctIndex: 0, explanation: "Water vapour is lost, mainly through stomata." },
        { prompt: "Most transpiration occurs through the", options: ["stomata", "cuticle", "roots", "xylem"], correctIndex: 0, explanation: "Stomata are the main route." },
        { prompt: "An advantage of transpiration is that it", options: ["pulls water and minerals up the plant", "wastes energy", "blocks photosynthesis", "kills the plant"], correctIndex: 0, explanation: "It creates the transpiration pull." },
        { prompt: "A disadvantage of transpiration is", options: ["water loss and possible wilting", "cooling the leaves", "moving minerals", "keeping cells turgid"], correctIndex: 0, explanation: "Excess loss can cause wilting." },
        { prompt: "Which increases the rate of transpiration?", options: ["wind", "high humidity", "darkness", "cold"], correctIndex: 0, explanation: "Wind removes moist air, speeding loss." },
        { prompt: "High humidity ____ the rate of transpiration.", options: ["decreases", "increases", "does not affect", "stops photosynthesis in"], correctIndex: 0, explanation: "Moist air lowers the gradient." },
        { prompt: "Stomata are opened and closed by", options: ["guard cells", "root hairs", "xylem", "the cuticle"], correctIndex: 0, explanation: "Guard cells control the stoma." },
        { prompt: "Gas exchange in woody stems occurs through", options: ["lenticels", "stomata only", "root hairs", "the cuticle"], correctIndex: 0, explanation: "Lenticels allow gas exchange in bark." },
        { prompt: "Gases move in and out of leaves by", options: ["diffusion down a concentration gradient", "active transport only", "osmosis of gases", "transpiration pull"], correctIndex: 0, explanation: "Diffusion moves gases along gradients." },
        { prompt: "In daylight, which gas mainly diffuses INTO the leaf?", options: ["carbon dioxide", "oxygen", "nitrogen", "water vapour"], correctIndex: 0, explanation: "CO₂ enters for photosynthesis." },
        { prompt: "Transpiration helps the plant by", options: ["cooling the leaves", "heating the leaves", "storing sugar", "making seeds"], correctIndex: 0, explanation: "Evaporation cools the leaf surface." },
        { prompt: "Higher temperature usually ____ transpiration.", options: ["increases", "decreases", "stops", "reverses"], correctIndex: 0, explanation: "Warmth speeds evaporation." },
        { prompt: "Most stomata are found on the ____ of the leaf.", options: ["lower surface", "upper surface", "midrib", "petiole"], correctIndex: 0, explanation: "Lower placement reduces water loss." },
        { prompt: "Lenticels differ from stomata in that lenticels are in the", options: ["bark of stems and roots", "leaf blade", "flower", "seed"], correctIndex: 0, explanation: "Lenticels occur in woody bark." },
        { prompt: "Up to what fraction of absorbed water is lost by transpiration?", options: ["about 90%", "about 10%", "about 1%", "none"], correctIndex: 0, explanation: "Most absorbed water is transpired." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define transpiration and state one advantage and one disadvantage.", answerKey: "Transpiration is the loss of water vapour from a plant, mainly through the stomata. Advantage: creates transpiration pull / cools the leaves. Disadvantage: water loss / wilting. 2 marks definition + 1 each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which condition would give the fastest rate of transpiration?", options: ["Humid, still air", "Windy, hot, bright", "Cool and dark", "Saturated air"], correctIndex: 1, answerKey: "Windy, hot and bright. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State how light, humidity and wind each affect the rate of transpiration.", answerKey: "Light: opens stomata, increases rate. Humidity: high humidity decreases rate. Wind: increases rate by removing moist air. 1 mark each + 1 for direction.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between stomata and lenticels.", answerKey: "Stomata: pores in leaves (and green stems) between guard cells, main route for gas exchange and transpiration. Lenticels: openings in the bark of woody stems/roots allowing gas exchange. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Explain transpiration, the factors affecting its rate, and how it is linked to gaseous exchange through the stomata.", answerKey: "Transpiration: loss of water vapour through stomata; advantages (transpiration pull, cooling) and disadvantages (wilting) (5). Factors: light, temperature, humidity, wind with directions (5). Link: stomata open (in light) for CO₂/O₂ exchange but also lose water; guard cells balance gas exchange against water loss (up to 5). Reward reasoning.", marks: 15 },
      ],
    },
    // source: CK-12 — Flexi, How do plants dispose of their waste? (plant excretion) (https://www.ck12.org/flexi/life-science/excretory-system/how-do-plants-dispose-of-their-waste/)
    {
      slug: "excretion-in-plants",
      title: "Excretion in Plants",
      objective:
        "By the end of the topic, learners should be able to explain excretion in plants and name the excretory products of plants and how they are removed or stored.",
      estimatedMinutes: 80,
      notes: `## What is excretion?

- **Excretion** — the removal of the **waste products of metabolism** from the body.
- Plants make less waste than animals and have **no special excretory organs**; they deal with waste in simpler ways.

## Excretory products of plants

| Product | Source / note |
| --- | --- |
| **Oxygen** | waste of **photosynthesis** (a raw material for respiration) |
| **Carbon dioxide** | waste of **respiration** (a raw material for photosynthesis) |
| **Water vapour** | lost in **transpiration** |
| **Alkaloids** | e.g. quinine, nicotine — stored |
| **Tannins** | stored in bark and leaves |
| **Resins** | stored in resin ducts |
| **Gums** | water-soluble waste |
| **Latex** | milky fluid (e.g. rubber, pawpaw) stored in laticifers |

## How plants get rid of waste

1. **Diffusion through stomata and lenticels** — gases (O₂, CO₂) and water vapour leave the leaf/stem.
2. **Storing in leaves that are later shed** — some waste is dumped into old **leaves** that then **fall off** (leaf fall).
3. **Storing in vacuoles or dead tissues** — wastes such as **tannins, resins and crystals** are kept in **vacuoles**, bark or heartwood, where they do no harm.
4. **Some wastes are useful** — CO₂ and O₂ are reused between photosynthesis and respiration; others (latex, alkaloids, tannins) help defend the plant.

## Why plant excretion is simpler than animal excretion

- Plants are less active, so they make **less nitrogenous waste**.
- Some "wastes" are **re-used** (O₂ ↔ CO₂ between the two processes).
- Plants can simply **store** wastes or **shed** them with leaves and bark.

## Common errors and misconceptions

- **"Plants have kidneys"** — plants have **no excretory organs**; they store or shed wastes.
- **"Oxygen is never a waste"** — oxygen is a **waste of photosynthesis** (though it is reused in respiration).
- **"Latex, resin and tannin are foods"** — they are **stored waste/defence** substances, not the plant's food.
- **"Plants make lots of nitrogen waste like animals"** — plants produce **little** nitrogenous waste.`,
      workedExample: `**Question:** A student says "plants do not excrete because they have no kidneys or urine." Evaluate this statement and give three examples of how plants actually excrete.

**Solution**

*Is the statement correct?* It is **wrong**. Excretion means removing the **waste products of metabolism**, not just making urine. Plants **do** excrete — they simply have **no special excretory organs** and use simpler methods.

*Three ways plants excrete:*
1. **Gas and water vapour through stomata/lenticels.** **Oxygen** (waste of photosynthesis) and **carbon dioxide** (waste of respiration) diffuse out through **stomata** and **lenticels**, and **water vapour** is lost by transpiration.
2. **Leaf fall.** Some wastes are moved into **old leaves**, which then **drop off**, carrying the waste away.
3. **Storage in tissues.** Wastes such as **tannins, resins, gums, alkaloids and latex** are stored in **vacuoles**, bark or dead wood, where they cause no harm (and some, like latex and alkaloids, help defend the plant).

*Why simpler than animals?* Plants make **less** waste (especially nitrogenous waste) and **re-use** some (O₂ ↔ CO₂), so they need no kidneys.

**Answer:** the statement is false; plants excrete by releasing gases/water vapour through stomata and lenticels, by shedding waste-filled leaves, and by storing wastes (tannins, resins, latex) in their tissues.`,
      quiz: [
        { prompt: "Excretion is the removal of", options: ["waste products of metabolism", "food from the soil", "seeds", "pollen"], correctIndex: 0, explanation: "Excretion removes metabolic waste." },
        { prompt: "Compared with animals, plants have", options: ["no special excretory organs", "kidneys and bladders", "more nitrogen waste", "sweat glands"], correctIndex: 0, explanation: "Plants store or shed wastes instead." },
        { prompt: "Oxygen is an excretory product of", options: ["photosynthesis", "respiration", "transpiration", "germination"], correctIndex: 0, explanation: "O₂ is a waste of photosynthesis." },
        { prompt: "Carbon dioxide is an excretory product of", options: ["respiration", "photosynthesis", "excretion of latex", "dispersal"], correctIndex: 0, explanation: "CO₂ is a waste of respiration." },
        { prompt: "Water vapour is lost from plants by", options: ["transpiration", "translocation", "germination", "pollination"], correctIndex: 0, explanation: "Transpiration removes water vapour." },
        { prompt: "Gases leave a leaf mainly through the", options: ["stomata", "roots", "xylem", "flowers"], correctIndex: 0, explanation: "Stomata allow gas exchange." },
        { prompt: "Gases leave a woody stem through", options: ["lenticels", "stomata only", "root hairs", "petals"], correctIndex: 0, explanation: "Lenticels serve gas exchange in bark." },
        { prompt: "Which is a solid/stored excretory product of plants?", options: ["tannins", "oxygen", "water vapour", "carbon dioxide"], correctIndex: 0, explanation: "Tannins are stored wastes." },
        { prompt: "The milky fluid stored by some plants (e.g. rubber) is", options: ["latex", "resin only", "water", "nectar"], correctIndex: 0, explanation: "Latex is stored in laticifers." },
        { prompt: "One way plants remove waste is by", options: ["shedding old leaves (leaf fall)", "urinating", "sweating", "making seeds"], correctIndex: 0, explanation: "Wastes are dumped in leaves that fall." },
        { prompt: "Many plant wastes are stored in cell", options: ["vacuoles", "nuclei", "ribosomes", "chloroplasts"], correctIndex: 0, explanation: "Vacuoles store wastes safely." },
        { prompt: "Which pair of plant wastes can be re-used between two processes?", options: ["oxygen and carbon dioxide", "tannin and resin", "latex and gum", "alkaloid and tannin"], correctIndex: 0, explanation: "O₂ and CO₂ cycle between photosynthesis and respiration." },
        { prompt: "Plants produce little ____ waste compared with animals.", options: ["nitrogenous", "oxygen", "water", "carbon"], correctIndex: 0, explanation: "Plants make little nitrogenous waste." },
        { prompt: "Resins are stored in", options: ["resin ducts", "the nucleus", "root hairs", "stomata"], correctIndex: 0, explanation: "Resins collect in ducts." },
        { prompt: "Which statement is TRUE about plant excretion?", options: ["Plants have no kidneys and store or shed wastes", "Plants have kidneys", "Plants make urine", "Plants cannot excrete"], correctIndex: 0, explanation: "Plants use storage and shedding, not organs." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define excretion and state why plant excretion is simpler than animal excretion.", answerKey: "Excretion is the removal of metabolic waste products. Plant excretion is simpler because plants make less waste (little nitrogenous waste), re-use some (O₂/CO₂), and store or shed wastes rather than using special organs. 2 marks definition + 2 for reason.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is an excretory product of photosynthesis?", options: ["Carbon dioxide", "Oxygen", "Latex", "Tannin"], correctIndex: 1, answerKey: "Oxygen. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Name four excretory products of plants.", answerKey: "Any four: oxygen, carbon dioxide, water vapour, tannins, resins, gums, alkaloids, latex. 1 mark each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe three ways plants get rid of their waste.", answerKey: "Diffusion of gases/water vapour through stomata and lenticels; storing waste in old leaves that are shed (leaf fall); storing wastes (tannins, resins, latex) in vacuoles/bark/dead tissue. 1 mark each + 1 for detail.", marks: 4 },
        { type: "ESSAY", prompt: "Explain how plants excrete their waste products, naming the products and the methods used.", answerKey: "Gaseous/vapour wastes (O₂, CO₂, water vapour) leave through stomata and lenticels by diffusion/transpiration (5); solid wastes (tannins, resins, gums, alkaloids, latex) stored in vacuoles, bark, dead wood (5); wastes also removed by leaf fall; some wastes re-used or used in defence (up to 5). Reward named products and methods.", marks: 15 },
      ],
    },
    // source: CK-12 — Anaerobic and Aerobic Respiration (https://flexbooks.ck12.org/cbook/cbse-biology-class-10/section/1.6/related/lesson/anaerobic-and-aerobic-respiration-bio/)
    {
      slug: "respiration-in-plants",
      title: "Respiration in Plants",
      objective:
        "By the end of the topic, learners should be able to write the equations for aerobic and anaerobic respiration and compare aerobic, anaerobic and facultative respiration.",
      estimatedMinutes: 100,
      notes: `## What is respiration?

- **Respiration** — the release of **energy** from food (glucose) in living cells; the energy is stored as **ATP**.
- It happens in **all living cells**, day and night (unlike photosynthesis).

## Aerobic respiration

Uses **oxygen** and releases **a lot of energy**.

**Word:** glucose + oxygen → carbon dioxide + water + energy

**Balanced:** **C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP)**

## Anaerobic respiration (without oxygen)

Releases **much less energy**; glucose is only partly broken down.

- **In plants and yeast (fermentation):**
  **C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ + energy** (glucose → ethanol + carbon dioxide + a little energy)
- **In animal muscle:** glucose → lactic acid + energy.

- Yeast fermentation is used in **baking** (the CO₂ makes dough rise) and **brewing** (the ethanol).

## Comparing the two

| Feature | Aerobic | Anaerobic |
| --- | --- | --- |
| Oxygen | needed | not needed |
| Energy released | **much** | **little** |
| Products (plants/yeast) | CO₂ + water | ethanol + CO₂ |
| Glucose broken down | completely | partly |

## Types of respiration by oxygen need

- **Obligate aerobes** — must have oxygen.
- **Obligate anaerobes** — cannot use oxygen.
- **Facultative organisms** — can respire **with** oxygen (aerobic) when it is available, or **without** it (anaerobic) when it is not — e.g. **yeast**.

## Respiration vs photosynthesis

| | Respiration | Photosynthesis |
| --- | --- | --- |
| Purpose | release energy | make food |
| Gases | uses O₂, gives CO₂ | uses CO₂, gives O₂ |
| When | all the time | only in light |
| Where | all living cells | chloroplasts (green cells) |

## Common errors and misconceptions

- **"Plants respire only at night"** — plants respire **all the time**; in daylight photosynthesis just **masks** it.
- **"Respiration and photosynthesis are opposites that cancel out"** — they are linked but respiration occurs in **all** cells at **all** times.
- **"Anaerobic respiration gives more energy"** — it gives **much less**; aerobic respiration releases far more ATP.
- **"Breathing = respiration"** — breathing is **gas exchange**; respiration is the **release of energy** inside cells.`,
      workedExample: `**Question:** A baker mixes flour, water and yeast and leaves the dough in a warm place; it rises and smells slightly of alcohol. Explain the biology, write the equation for the process, and state what type of respiration the yeast is carrying out.

**Solution**

*Step 1 — what the yeast is doing.* Yeast is a fungus that **respires**, releasing energy from the **sugar** in the dough. In the dough there is little oxygen, so the yeast respires **anaerobically** — this is **fermentation**.

*Step 2 — the equation.* Anaerobic respiration in yeast:
**C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ + energy**
(glucose → ethanol + carbon dioxide + a little energy).

*Step 3 — why the dough rises and smells of alcohol.* The **carbon dioxide** gas produced is trapped in the dough, forming bubbles that make it **rise**. The **ethanol (alcohol)** produced gives the slight smell (it evaporates during baking).

*Step 4 — type of respiration.* The yeast is respiring **anaerobically** (without oxygen). Yeast is a **facultative** organism: it can also respire **aerobically** if oxygen is available.

**Answer:** the yeast ferments sugar by anaerobic respiration (C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ + energy); the CO₂ makes the dough rise and the ethanol gives the alcohol smell; yeast is a facultative organism.`,
      quiz: [
        { prompt: "Respiration releases energy from", options: ["glucose (food)", "sunlight", "water only", "oxygen only"], correctIndex: 0, explanation: "Energy is released from food." },
        { prompt: "Aerobic respiration requires", options: ["oxygen", "no oxygen", "light", "chlorophyll"], correctIndex: 0, explanation: "Aerobic means with oxygen." },
        { prompt: "The equation for aerobic respiration is", options: ["C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy", "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", "glucose → ethanol + CO₂", "O₂ → CO₂"], correctIndex: 0, explanation: "Glucose + oxygen → carbon dioxide + water + energy." },
        { prompt: "Anaerobic respiration in yeast produces", options: ["ethanol and carbon dioxide", "lactic acid", "oxygen and water", "glucose"], correctIndex: 0, explanation: "Fermentation gives ethanol + CO₂." },
        { prompt: "Anaerobic respiration in animal muscle produces", options: ["lactic acid", "ethanol", "oxygen", "starch"], correctIndex: 0, explanation: "Muscles make lactic acid without oxygen." },
        { prompt: "Which releases MORE energy?", options: ["aerobic respiration", "anaerobic respiration", "both equal", "neither"], correctIndex: 0, explanation: "Aerobic respiration releases much more ATP." },
        { prompt: "Yeast fermentation is used in baking because it produces", options: ["carbon dioxide that makes dough rise", "oxygen", "lactic acid", "water only"], correctIndex: 0, explanation: "CO₂ bubbles raise the dough." },
        { prompt: "Respiration happens in", options: ["all living cells, all the time", "only leaves in light", "only at night", "only in animals"], correctIndex: 0, explanation: "All living cells respire continuously." },
        { prompt: "An organism that respires with or without oxygen is", options: ["facultative", "obligate aerobe", "obligate anaerobe", "autotroph"], correctIndex: 0, explanation: "Facultative organisms use either mode." },
        { prompt: "The equation C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ + energy shows", options: ["anaerobic respiration in yeast", "aerobic respiration", "photosynthesis", "transpiration"], correctIndex: 0, explanation: "Fermentation of glucose to ethanol." },
        { prompt: "Plants respire", options: ["day and night", "only at night", "only in light", "never"], correctIndex: 0, explanation: "Respiration is continuous." },
        { prompt: "The energy released in respiration is stored as", options: ["ATP", "starch", "chlorophyll", "oxygen"], correctIndex: 0, explanation: "ATP carries the released energy." },
        { prompt: "Which is TRUE of anaerobic respiration?", options: ["glucose is only partly broken down", "it needs oxygen", "it releases the most energy", "it makes only water"], correctIndex: 0, explanation: "Partial breakdown yields little energy." },
        { prompt: "Breathing differs from respiration because breathing is", options: ["gas exchange, not energy release", "the same as respiration", "only in plants", "the making of food"], correctIndex: 0, explanation: "Respiration releases energy in cells." },
        { prompt: "An obligate anaerobe is an organism that", options: ["cannot use oxygen", "must have oxygen", "photosynthesises", "needs light"], correctIndex: 0, explanation: "Obligate anaerobes cannot use oxygen." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Write the balanced equation for aerobic respiration.", answerKey: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP). 4 marks; deduct for missing balance or products.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Anaerobic respiration in yeast produces", options: ["lactic acid", "ethanol and carbon dioxide", "oxygen and water", "glucose"], correctIndex: 1, answerKey: "Ethanol and carbon dioxide. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State three differences between aerobic and anaerobic respiration.", answerKey: "Any three: oxygen needed vs not; much vs little energy; products CO₂+water vs ethanol/lactic acid+CO₂; glucose fully vs partly broken down. 1 mark each.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain what is meant by a facultative organism, giving an example.", answerKey: "One that can respire aerobically when oxygen is available and anaerobically when it is not — e.g. yeast. Award marks for the either/or capability and a correct example.", marks: 4 },
        { type: "ESSAY", prompt: "Compare aerobic and anaerobic respiration, giving equations, and explain how yeast fermentation is used by humans.", answerKey: "Aerobic: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy; needs oxygen, much energy (5). Anaerobic (yeast): C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ + energy; no oxygen, little energy (5). Uses: baking (CO₂ raises dough), brewing (ethanol) (up to 5). Reward correct equations and applications.", marks: 15 },
      ],
    },
  ],
};
