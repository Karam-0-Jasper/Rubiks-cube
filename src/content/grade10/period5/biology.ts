import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 10,
// Semester Two, Period V: Plant-like Organisms (algae, mosses, ferns) and
// Photosynthesis; Fungi. Topics follow the five CONTENTS items: (1) algae;
// (2) mosses; (3) ferns; (4) fungi; (5) photosynthesis.
export const biologyG10P5: PeriodContent = {
  grade: 10,
  number: 5,
  title: "Plant-like Organisms, Photosynthesis and Fungi",
  summary:
    "Period V of the MoE Grade 10 Biology syllabus. Learners study algae, mosses and ferns, the fungi and their roles in disease and food, and how green plants make food by photosynthesis — its conditions, stages, products and the role of nutrients.",
  topics: [
    // source: OpenStax — Microbiology, 5.4 Algae; Spirogyra from LibreTexts A Photographic Atlas for Botany, 4.6 Green Algae (https://openstax.org/books/microbiology/pages/5-4-algae)
    {
      slug: "algae",
      title: "Algae",
      objective:
        "By the end of the topic, learners should be able to describe the general characteristics and classification of algae, explain reproduction in Spirogyra, and state the economic importance of algae.",
      estimatedMinutes: 120,
      notes: `## What are algae?

- **Algae** — simple, mostly **aquatic**, **photosynthetic** organisms (protists) that are **not** true land plants.
- They contain **chlorophyll** and make their own food, releasing **oxygen**.
- Range from tiny single cells to large seaweeds.

## General characteristics

- **Photosynthetic** (autotrophic); contain chlorophyll (and other pigments).
- Live in **water** or damp places.
- Simple body (**thallus**) — **no true roots, stems or leaves**.
- Reproduce **sexually and asexually**.

## Classification (by pigment/colour)

| Group | Colour | Example |
| --- | --- | --- |
| **Green algae** (Chlorophyta) | green | Spirogyra, Chlamydomonas |
| **Red algae** (Rhodophyta) | red | many seaweeds |
| **Brown algae** (Phaeophyta) | brown | large kelps |
| **Diatoms** | golden-brown | phytoplankton |

## Phytoplankton — floating microbes

- **Phytoplankton** = tiny floating algae in oceans and ponds.
- They are **producers** at the base of aquatic food chains and produce much of the world's oxygen (algae make about **70%** of oxygen and organic matter in water).

## Spirogyra — a green alga

- A **green alga** that grows as long, **unbranched filaments** of rectangular cells.
- Each cell has a **spiral (ribbon-like) chloroplast** — hence the name.

**Reproduction:**
- **Asexual — fragmentation:** the filament breaks into pieces, each growing into a new filament (most common).
- **Sexual — conjugation:** two filaments line up; a **conjugation tube** forms between paired cells; the contents of one cell move across and fuse with the other to form a thick-walled **zygospore**, which survives harsh conditions and later germinates.

\`\`\`svg Spirogyra conjugation: contents move through tubes to form zygospores
<svg viewBox="0 0 300 110" role="img" aria-label="Two Spirogyra filaments joined by conjugation tubes forming zygospores">
  <g stroke="currentColor" fill="none">
    <rect x="20" y="20" width="40" height="24"/><rect x="60" y="20" width="40" height="24"/><rect x="100" y="20" width="40" height="24"/>
    <rect x="20" y="66" width="40" height="24"/><rect x="60" y="66" width="40" height="24"/><rect x="100" y="66" width="40" height="24"/>
    <line x1="40" y1="44" x2="40" y2="66"/><line x1="80" y1="44" x2="80" y2="66"/><line x1="120" y1="44" x2="120" y2="66"/>
  </g>
  <circle cx="40" cy="78" r="6" fill="currentColor" fill-opacity="0.4"/>
  <text x="200" y="45" font-size="9" fill="currentColor">upper filament (+)</text>
  <text x="200" y="82" font-size="9" fill="currentColor">lower filament (−): zygospores</text>
</svg>
\`\`\`

## Economic importance of algae

- **Food:** algae (e.g. seaweeds) are eaten by people and animals; phytoplankton feed aquatic life.
- **Oxygen:** algae release large amounts of oxygen into water and air.
- **Medicine and industry:** source of **agar**, **agarose** and **carrageenan** (gelling agents used in labs and food).
- Base of aquatic **food chains** and part of the **carbon cycle**.

## Common errors and misconceptions

- **"Algae are plants"** — algae are simple, mostly aquatic **protists** with no true roots, stems or leaves.
- **"Spirogyra is multicellular like a plant"** — it forms **filaments** of similar cells; it has a spiral chloroplast, not tissues.
- **"Only trees make oxygen"** — **algae/phytoplankton** produce a very large share of the world's oxygen.
- **Conjugation is asexual** — conjugation in Spirogyra is a form of **sexual** reproduction (fusion of cell contents).`,
      workedExample: `**Question:** A pond has a mass of green, slimy threads. Under the microscope each thread is a chain of rectangular cells, each with a spiral green band. Later, two threads lie side by side with tubes joining them and dark round bodies forming. Identify the organism and explain what is happening.

**Solution**

*Step 1 — identify it.* Green **filaments** of rectangular cells, each with a **spiral chloroplast**, are the classic features of **Spirogyra**, a **green alga**.

*Step 2 — what the tubes and bodies are.* Two filaments of complementary mating types have lined up and formed **conjugation tubes** between paired cells. This is **sexual reproduction by conjugation**: the contents of the cells in one filament pass through the tubes into the cells of the other filament and **fuse**, forming thick-walled **zygospores** (the dark round bodies).

*Step 3 — why it matters.* The **zygospore** can survive harsh conditions (like the dry season) and later germinate into a new Spirogyra. (In good conditions Spirogyra also multiplies quickly by **fragmentation**, an asexual method.)

**Answer:** the organism is Spirogyra; the paired filaments are undergoing **conjugation** (sexual reproduction), forming resistant **zygospores** that survive bad conditions and later grow into new filaments.`,
      quiz: [
        { prompt: "Algae are best described as", options: ["simple aquatic photosynthetic organisms", "land plants with roots", "fungi", "animals"], correctIndex: 0, explanation: "Algae are simple, mostly aquatic photosynthesisers." },
        { prompt: "Algae make their own food by", options: ["photosynthesis", "absorbing dead matter", "hunting", "fermentation"], correctIndex: 0, explanation: "They contain chlorophyll and photosynthesise." },
        { prompt: "The simple body of an alga, without true roots or leaves, is a", options: ["thallus", "mycelium", "hypha", "root"], correctIndex: 0, explanation: "Algae have a thallus, not organs." },
        { prompt: "Spirogyra is which type of alga?", options: ["green alga", "red alga", "brown alga", "diatom"], correctIndex: 0, explanation: "Spirogyra is a green alga (Chlorophyta)." },
        { prompt: "The chloroplast of Spirogyra is shaped like a", options: ["spiral ribbon", "sphere", "cube", "star"], correctIndex: 0, explanation: "Its spiral chloroplast gives it its name." },
        { prompt: "Tiny floating algae in water are called", options: ["phytoplankton", "hyphae", "spores", "zooplankton"], correctIndex: 0, explanation: "Phytoplankton are floating photosynthetic microbes." },
        { prompt: "Phytoplankton are important because they", options: ["produce oxygen and form the base of food chains", "eat fish", "cause malaria", "make wood"], correctIndex: 0, explanation: "They are producers and release oxygen." },
        { prompt: "The most common asexual reproduction in Spirogyra is", options: ["fragmentation", "conjugation", "budding", "spore fusion"], correctIndex: 0, explanation: "The filament breaks into new pieces." },
        { prompt: "Sexual reproduction in Spirogyra is called", options: ["conjugation", "fragmentation", "binary fission", "pollination"], correctIndex: 0, explanation: "Cell contents pass through a conjugation tube." },
        { prompt: "The thick-walled resting cell formed in conjugation is the", options: ["zygospore", "hypha", "gamete", "thallus"], correctIndex: 0, explanation: "The zygospore survives harsh conditions." },
        { prompt: "Agar and carrageenan are obtained from", options: ["algae (seaweeds)", "fungi", "insects", "bacteria only"], correctIndex: 0, explanation: "These gelling agents come from algae." },
        { prompt: "Roughly what share of oxygen and organic matter in water do algae produce?", options: ["about 70%", "about 5%", "about 1%", "none"], correctIndex: 0, explanation: "Algae make about 70% of aquatic oxygen/organic matter." },
        { prompt: "Which is a brown alga?", options: ["kelp", "Spirogyra", "Chlamydomonas", "diatom"], correctIndex: 0, explanation: "Kelps are large brown algae." },
        { prompt: "Algae differ from true plants in that they", options: ["have no true roots, stems or leaves", "cannot photosynthesise", "have no chlorophyll", "live only on land"], correctIndex: 0, explanation: "They have a simple thallus body." },
        { prompt: "A green alga eaten or used by humans provides", options: ["food and industrial gels", "wood", "silk", "honey"], correctIndex: 0, explanation: "Algae give food and agar/carrageenan." },
        { prompt: "Diatoms are algae with", options: ["glassy cell walls, forming plankton", "spiral chloroplasts only", "no chlorophyll", "true roots"], correctIndex: 0, explanation: "Diatoms are golden-brown planktonic algae." },
        { prompt: "In conjugation, the contents of one filament's cells", options: ["move through tubes and fuse with the other", "are eaten", "turn into oxygen", "become roots"], correctIndex: 0, explanation: "Fusion forms the zygospore." },
        { prompt: "Algae are important in the carbon cycle because they", options: ["use carbon dioxide in photosynthesis", "produce carbon dioxide only", "eat carbon", "store no carbon"], correctIndex: 0, explanation: "They fix CO₂ during photosynthesis." },
        { prompt: "Which statement about algae is TRUE?", options: ["Most live in water", "All are large seaweeds", "None make oxygen", "They are all single-celled"], correctIndex: 0, explanation: "Algae are mostly aquatic; sizes vary." },
        { prompt: "A zygospore is useful because it", options: ["survives harsh conditions and germinates later", "makes honey", "spreads malaria", "moves the alga"], correctIndex: 0, explanation: "It is a resistant resting stage." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State four general characteristics of algae.", answerKey: "Any four: photosynthetic/contain chlorophyll; mostly aquatic; simple body (thallus) with no true roots/stems/leaves; reproduce sexually and asexually; produce oxygen. 1 mark each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The spiral chloroplast is characteristic of", options: ["Spirogyra", "kelp", "a diatom", "a fungus"], correctIndex: 0, answerKey: "Spirogyra. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe asexual and sexual reproduction in Spirogyra.", answerKey: "Asexual: fragmentation — the filament breaks into pieces, each growing into a new filament. Sexual: conjugation — two filaments align, conjugation tubes form, cell contents move across and fuse to form a thick-walled zygospore. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State three ways algae are economically or ecologically important.", answerKey: "Any three: food for humans/animals; produce oxygen; source of agar/carrageenan (medicine/industry); base of aquatic food chains/carbon cycle. 1 mark each.", marks: 3 },
        { type: "ESSAY", prompt: "Discuss the economic and ecological importance of algae, and explain why phytoplankton are described as producers of atmospheric oxygen.", answerKey: "Economic: food, agar/carrageenan for industry and labs, animal feed (5). Ecological: base of aquatic food chains, part of carbon cycle (4). Phytoplankton photosynthesise, using CO₂ and releasing large amounts of O₂ (about 70% of aquatic oxygen/organic matter), so they are major oxygen producers (up to 6). Reward examples.", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 25.3 Bryophytes (https://openstax.org/books/biology-2e/pages/25-3-bryophytes)
    {
      slug: "mosses",
      title: "Mosses (Bryophytes)",
      objective:
        "By the end of the topic, learners should be able to describe the general characteristics of mosses, explain their reproduction by alternation of generations, and state their economic importance.",
      estimatedMinutes: 100,
      notes: `## What are mosses?

- **Mosses** are **bryophytes** — small, simple, **non-vascular** land plants (e.g. Funaria).
- They grow in **damp, shady** places and form green cushions.

## General characteristics

- **Non-vascular** — they have **no xylem or phloem**, so water and food move slowly by diffusion; this limits them to small size.
- No true roots — anchored by thread-like **rhizoids**.
- Simple leaf-like and stem-like parts (no true leaves/stems, no stomata in the way vascular plants have).
- **Need water for reproduction** — sperm must **swim** to the egg.

## Alternation of generations

Mosses alternate between two stages:

1. **Gametophyte** (the dominant, green leafy stage) — **haploid**; makes sex organs: **antheridia** (male, make sperm) and **archegonia** (female, make eggs).
2. **Sporophyte** — **diploid**; grows on the gametophyte as a stalk with a **capsule** that makes and releases **spores**.

**The cycle:**
- In moist conditions, sperm from the antheridia **swim** to the egg in the archegonium → **fertilisation** → **zygote** → grows into the **sporophyte** → capsule makes **spores** → spores land and grow into new **gametophytes**.

- The visible green moss is the **gametophyte** (gametophyte-dominant).

\`\`\`svg Moss life cycle: gametophyte with an attached sporophyte capsule
<svg viewBox="0 0 220 150" role="img" aria-label="Moss gametophyte with sporophyte stalk and capsule">
  <g stroke="currentColor" fill="none" stroke-width="2">
    <line x1="70" y1="140" x2="70" y2="90"/>
    <path d="M70 90 q -14 -6 -22 4"/><path d="M70 100 q 14 -6 22 4"/><path d="M70 110 q -14 -6 -22 4"/>
    <line x1="70" y1="90" x2="120" y2="40"/>
    <ellipse cx="126" cy="34" rx="10" ry="14"/>
  </g>
  <text x="30" y="120" font-size="9" fill="currentColor">gametophyte</text>
  <text x="140" y="34" font-size="9" fill="currentColor">sporophyte (capsule)</text>
</svg>
\`\`\`

## Economic and ecological importance

- **Pioneer plants** — grow on bare rock and soil, helping to form soil (early ecological succession).
- **Prevent soil erosion** by covering the ground and holding water.
- **Peat** — dead moss (Sphagnum) builds up as peat, used as fuel and in gardening.
- Provide **habitat and moisture** for small organisms.

## Common errors and misconceptions

- **"Mosses have proper roots and veins"** — they are **non-vascular**, with **rhizoids**, not true roots or xylem/phloem.
- **"Mosses don't need water to reproduce"** — sperm must **swim** through water to the egg.
- **"The green moss is the sporophyte"** — the green plant is the **gametophyte**; the sporophyte is the stalk-and-capsule growing on it.
- **"Mosses grow tall like trees"** — lacking vascular tissue, they stay **small**.`,
      workedExample: `**Question:** A learner notices that moss only grows in damp, shady corners and never becomes tall. Using the structure and reproduction of mosses, explain both observations.

**Solution**

*Why moss stays small.* Mosses are **non-vascular** — they have **no xylem or phloem** to carry water and food quickly through the plant. Water moves slowly by **diffusion** from cell to cell, so a tall moss could not supply its upper parts. Lacking this transport tissue (and true roots), the moss must remain **small and low**.

*Why moss needs damp, shady places.* Mosses **need water for reproduction**: the sperm made in the **antheridia** must **swim** through a film of water to reach the egg in the **archegonium**. In dry, sunny places there is no water film, so fertilisation cannot happen and the moss would dry out. Damp shade keeps the surface moist and cool.

**Answer:** moss stays small because it is non-vascular (no xylem/phloem to transport water high up), and it grows in damp shade because its sperm must swim through water to fertilise the egg.`,
      quiz: [
        { prompt: "Mosses are examples of", options: ["bryophytes (non-vascular plants)", "vascular plants", "algae", "fungi"], correctIndex: 0, explanation: "Mosses are non-vascular bryophytes." },
        { prompt: "Mosses lack", options: ["xylem and phloem (vascular tissue)", "chlorophyll", "cells", "spores"], correctIndex: 0, explanation: "They are non-vascular." },
        { prompt: "Mosses are anchored by", options: ["rhizoids", "true roots", "tap roots", "tendrils"], correctIndex: 0, explanation: "Thread-like rhizoids anchor them." },
        { prompt: "The dominant, green stage of a moss is the", options: ["gametophyte", "sporophyte", "zygote", "spore"], correctIndex: 0, explanation: "Mosses are gametophyte-dominant." },
        { prompt: "Male sex organs of mosses are the", options: ["antheridia", "archegonia", "capsules", "rhizoids"], correctIndex: 0, explanation: "Antheridia make sperm." },
        { prompt: "Female sex organs of mosses are the", options: ["archegonia", "antheridia", "spores", "stomata"], correctIndex: 0, explanation: "Archegonia make eggs." },
        { prompt: "Moss sperm reach the egg by", options: ["swimming through water", "flying", "being carried by bees", "rolling"], correctIndex: 0, explanation: "They need a film of water to swim." },
        { prompt: "The sporophyte of a moss produces", options: ["spores in a capsule", "seeds", "flowers", "fruit"], correctIndex: 0, explanation: "The capsule releases spores." },
        { prompt: "The alternation between gametophyte and sporophyte is called", options: ["alternation of generations", "metamorphosis", "conjugation", "germination"], correctIndex: 0, explanation: "Plants alternate haploid and diploid stages." },
        { prompt: "Mosses stay small because they", options: ["lack vascular tissue to transport water", "have no chlorophyll", "cannot reproduce", "are animals"], correctIndex: 0, explanation: "No xylem/phloem limits their size." },
        { prompt: "Mosses grow best in", options: ["damp, shady places", "hot dry deserts", "deep oceans", "inside animals"], correctIndex: 0, explanation: "They need moisture for reproduction." },
        { prompt: "Dead Sphagnum moss builds up over time as", options: ["peat", "coal directly", "sand", "clay"], correctIndex: 0, explanation: "Peat forms from accumulated moss." },
        { prompt: "Mosses help the environment by", options: ["preventing soil erosion and forming soil", "spreading disease", "eating insects", "producing honey"], correctIndex: 0, explanation: "They act as pioneers and hold soil." },
        { prompt: "The gametophyte of a moss is", options: ["haploid", "diploid", "an animal", "a spore"], correctIndex: 0, explanation: "The gametophyte is the haploid stage." },
        { prompt: "The sporophyte of a moss is", options: ["diploid and grows on the gametophyte", "haploid and free-living", "an alga", "a fungus"], correctIndex: 0, explanation: "It is diploid and attached to the gametophyte." },
        { prompt: "Fertilisation in mosses produces a", options: ["zygote that grows into the sporophyte", "seed", "flower", "fruit"], correctIndex: 0, explanation: "The zygote becomes the sporophyte." },
        { prompt: "Mosses are called 'pioneer plants' because they", options: ["are among the first to colonise bare ground", "grow tallest", "live in oceans", "eat other plants"], correctIndex: 0, explanation: "They begin ecological succession." },
        { prompt: "Which statement is TRUE about mosses?", options: ["They need water for sperm to reach the egg", "They have true roots", "They produce seeds", "They have xylem"], correctIndex: 0, explanation: "Water is needed for fertilisation." },
        { prompt: "An example of a moss is", options: ["Funaria", "Spirogyra", "Nephrolepis", "Rhizopus"], correctIndex: 0, explanation: "Funaria is a common moss." },
        { prompt: "Spores of a moss grow into", options: ["new gametophytes", "sporophytes directly", "seeds", "fungi"], correctIndex: 0, explanation: "Spores germinate into gametophytes." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State three general characteristics of mosses.", answerKey: "Any three: non-vascular (no xylem/phloem); anchored by rhizoids (no true roots); small size; need water for reproduction; gametophyte-dominant. 1 mark each.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The dominant stage in the life cycle of a moss is the", options: ["sporophyte", "gametophyte", "zygote", "spore"], correctIndex: 1, answerKey: "Gametophyte. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain what is meant by alternation of generations in mosses.", answerKey: "The life cycle alternates between a haploid gametophyte (green, makes gametes in antheridia and archegonia) and a diploid sporophyte (grows on the gametophyte, makes spores in a capsule). 2 marks each stage.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why must mosses live in damp places to reproduce?", answerKey: "The sperm made in the antheridia must swim through a film of water to reach the egg in the archegonium; without water, fertilisation cannot occur. Award marks for swimming sperm needing water.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the reproduction of a moss and explain its ecological importance.", answerKey: "Reproduction: alternation of generations — gametophyte makes sperm/eggs (antheridia/archegonia), sperm swim to egg, zygote grows into sporophyte with capsule, spores form and grow into new gametophytes (8). Ecological importance: pioneer plants forming soil, preventing erosion, peat formation, habitat/moisture for small organisms (up to 7). Reward correct sequence and terms.", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 25.4 Seedless Vascular Plants (https://openstax.org/books/biology-2e/pages/25-4-seedless-vascular-plants)
    {
      slug: "ferns",
      title: "Ferns (Seedless Vascular Plants)",
      objective:
        "By the end of the topic, learners should be able to describe the general characteristics of ferns, explain their reproduction by alternation of generations, and state their economic importance.",
      estimatedMinutes: 100,
      notes: `## What are ferns?

- **Ferns** are **seedless vascular plants** (e.g. Nephrolepis, Platycerium).
- They grow in **moist, shady** places and are larger and more advanced than mosses.

## General characteristics

- **Vascular** — they **have xylem and phloem**, so water and food are transported efficiently; this lets ferns grow **much larger** than mosses.
- **True roots, stems and leaves** — the leaves are called **fronds**; the stem is often an underground **rhizome**.
- Reproduce by **spores** (not seeds), formed in **sporangia** grouped in **sori** on the underside of the fronds.
- Still **need water for reproduction** (sperm swim to the egg).

## Alternation of generations in ferns

- The large, familiar fern plant is the **sporophyte** (diploid) — **sporophyte-dominant** (opposite of mosses).
- **Cycle:** the fern sporophyte makes **spores** in sori → spores grow into a small, heart-shaped **gametophyte (prothallus)** → the gametophyte makes sperm and eggs → sperm swim to the egg → **fertilisation** → **zygote** grows into a new fern sporophyte.

\`\`\`svg A fern frond with sori (spore clusters) on the underside
<svg viewBox="0 0 240 130" role="img" aria-label="Fern frond with leaflets and sori on the underside">
  <line x1="30" y1="120" x2="150" y2="20" stroke="currentColor" stroke-width="3"/>
  <g stroke="currentColor" fill="none">
    <path d="M60 96 q 20 -14 34 -6"/><path d="M80 76 q 20 -14 34 -6"/><path d="M100 56 q 20 -14 34 -6"/>
  </g>
  <g fill="currentColor">
    <circle cx="86" cy="92" r="2"/><circle cx="92" cy="93" r="2"/><circle cx="104" cy="72" r="2"/><circle cx="110" cy="73" r="2"/>
  </g>
  <text x="150" y="100" font-size="9" fill="currentColor">sori (spore clusters)</text>
</svg>
\`\`\`

## Ferns compared with mosses

| Feature | Moss | Fern |
| --- | --- | --- |
| Vascular tissue | No | **Yes** (xylem/phloem) |
| True roots/leaves | No | **Yes** (fronds) |
| Size | small | larger |
| Dominant stage | gametophyte | **sporophyte** |
| Water for reproduction | needed | needed |

## Economic importance

- Grown as **ornamental (decorative) plants** in gardens and homes.
- Some ferns are eaten (young fronds) or used in **medicine**.
- Ancient ferns formed much of the world's **coal**.
- Help prevent soil erosion and add organic matter to soil.

## Common errors and misconceptions

- **"Ferns produce seeds/flowers"** — ferns are **seedless**; they reproduce by **spores**.
- **"Ferns are non-vascular like mosses"** — ferns **have vascular tissue**, which is why they grow larger.
- **"The fern plant is the gametophyte"** — the large fern is the **sporophyte**; the tiny prothallus is the gametophyte.
- **"Ferns don't need water to reproduce"** — like mosses, their sperm must **swim** to the egg.`,
      workedExample: `**Question:** A gardener sees brown dots in neat rows on the underside of a fern's leaves and worries it is a disease. Explain what the dots really are and how the fern reproduces, and state one way ferns differ from mosses that lets them grow taller.

**Solution**

*Step 1 — what the brown dots are.* They are **sori** — clusters of **sporangia** that contain and release **spores**. They are a **normal** part of fern reproduction, not a disease.

*Step 2 — how the fern reproduces (alternation of generations).*
- The large fern is the **sporophyte**; it makes **spores** in the sori.
- A spore grows into a tiny, heart-shaped **gametophyte (prothallus)**.
- The gametophyte makes **sperm and eggs**; the sperm **swim** through water to the egg.
- **Fertilisation** gives a **zygote**, which grows into a new fern **sporophyte**.

*Step 3 — why ferns grow taller than mosses.* Ferns have **vascular tissue (xylem and phloem)** and **true roots**, so they can transport water and food efficiently to tall parts. Mosses are **non-vascular**, so they stay small.

**Answer:** the dots are sori releasing spores (normal reproduction); ferns alternate a dominant sporophyte with a small gametophyte and need water for the swimming sperm; their **vascular tissue** lets them grow larger than mosses.`,
      quiz: [
        { prompt: "Ferns are", options: ["seedless vascular plants", "non-vascular plants", "algae", "fungi"], correctIndex: 0, explanation: "Ferns have vascular tissue but no seeds." },
        { prompt: "Unlike mosses, ferns have", options: ["xylem and phloem", "no chlorophyll", "seeds", "no leaves"], correctIndex: 0, explanation: "Ferns are vascular." },
        { prompt: "The leaves of a fern are called", options: ["fronds", "fronds are absent", "petals", "sepals"], correctIndex: 0, explanation: "Fern leaves are fronds." },
        { prompt: "Ferns reproduce by", options: ["spores", "seeds", "flowers", "fruit"], correctIndex: 0, explanation: "They are seedless, using spores." },
        { prompt: "Spore clusters on the underside of a fern frond are called", options: ["sori", "stomata", "rhizoids", "petals"], correctIndex: 0, explanation: "Sori contain the sporangia." },
        { prompt: "The dominant stage in a fern's life cycle is the", options: ["sporophyte", "gametophyte", "spore", "zygote"], correctIndex: 0, explanation: "Ferns are sporophyte-dominant." },
        { prompt: "The small, heart-shaped gametophyte of a fern is the", options: ["prothallus", "frond", "rhizome", "capsule"], correctIndex: 0, explanation: "The prothallus makes sperm and eggs." },
        { prompt: "Ferns can grow larger than mosses because they", options: ["have vascular tissue", "have no roots", "photosynthesise", "make seeds"], correctIndex: 0, explanation: "Xylem/phloem transport water efficiently." },
        { prompt: "Ferns still need water for reproduction because", options: ["sperm must swim to the egg", "spores need to float", "roots need flooding", "leaves need washing"], correctIndex: 0, explanation: "Fertilisation needs swimming sperm." },
        { prompt: "The underground stem of many ferns is a", options: ["rhizome", "frond", "sorus", "prothallus"], correctIndex: 0, explanation: "Ferns often have a rhizome." },
        { prompt: "Ancient ferns helped form the world's", options: ["coal", "oil only", "salt", "iron"], correctIndex: 0, explanation: "Coal formed from ancient plant material including ferns." },
        { prompt: "Which is an example of a fern?", options: ["Nephrolepis", "Funaria", "Spirogyra", "Rhizopus"], correctIndex: 0, explanation: "Nephrolepis is a fern." },
        { prompt: "A fern spore grows into a", options: ["gametophyte (prothallus)", "new sporophyte directly", "seed", "flower"], correctIndex: 0, explanation: "Spores form the gametophyte." },
        { prompt: "The large fern plant we usually see is the", options: ["sporophyte", "gametophyte", "prothallus", "spore"], correctIndex: 0, explanation: "It is the diploid sporophyte." },
        { prompt: "Which feature do ferns and mosses share?", options: ["needing water for reproduction", "having seeds", "being non-vascular", "having flowers"], correctIndex: 0, explanation: "Both need water for swimming sperm." },
        { prompt: "Ferns are commonly used as", options: ["ornamental plants", "sources of honey", "insecticides", "metals"], correctIndex: 0, explanation: "Many ferns are decorative." },
        { prompt: "True roots, stems and leaves are found in", options: ["ferns", "mosses", "algae", "bacteria"], correctIndex: 0, explanation: "Ferns have true vegetative organs." },
        { prompt: "Compared with a moss, a fern's dominant stage is the", options: ["sporophyte (opposite of moss)", "gametophyte (same as moss)", "spore", "zygote"], correctIndex: 0, explanation: "Ferns are sporophyte-dominant." },
        { prompt: "Fertilisation in a fern produces a", options: ["zygote that grows into a sporophyte", "seed", "fruit", "flower"], correctIndex: 0, explanation: "The zygote becomes the new fern." },
        { prompt: "Which statement is TRUE about ferns?", options: ["They reproduce by spores, not seeds", "They have no vascular tissue", "They have flowers", "They live only in water"], correctIndex: 0, explanation: "Ferns are seedless vascular plants." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State three general characteristics of ferns.", answerKey: "Any three: vascular (xylem/phloem); true roots, stems (rhizome) and leaves (fronds); reproduce by spores in sori; need water for reproduction; sporophyte-dominant. 1 mark each.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Ferns differ from mosses mainly in that ferns", options: ["produce seeds", "have vascular tissue", "have no roots", "are non-green"], correctIndex: 1, answerKey: "Vascular tissue. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe the alternation of generations in a fern.", answerKey: "The dominant sporophyte makes spores in sori; a spore grows into a small gametophyte (prothallus) that makes sperm and eggs; sperm swim to the egg; the zygote grows into a new sporophyte. 4 marks for the correct sequence.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why ferns can grow much larger than mosses.", answerKey: "Ferns have vascular tissue (xylem and phloem) and true roots, so they can transport water and food efficiently to tall parts; mosses are non-vascular and stay small. Award marks for vascular tissue and efficient transport.", marks: 4 },
        { type: "ESSAY", prompt: "Compare ferns and mosses in structure and reproduction, and discuss the importance of vascular tissue in plant evolution.", answerKey: "Structure: ferns vascular with true roots/leaves (fronds) vs mosses non-vascular with rhizoids (4). Reproduction: both use spores and need water; ferns sporophyte-dominant, mosses gametophyte-dominant (5). Vascular tissue allows efficient transport, larger size and colonising drier land — a major evolutionary advance (up to 6). Reward the comparison and reasoning.", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 24.1 Characteristics of Fungi (https://openstax.org/books/biology-2e/pages/24-1-characteristics-of-fungi)
    {
      slug: "fungi",
      title: "Fungi",
      objective:
        "By the end of the topic, learners should be able to describe the general characteristics, nutrition and reproduction of fungi, list common fungal diseases, and state the economic importance of fungi.",
      estimatedMinutes: 120,
      notes: `## What are fungi?

- **Fungi** (kingdom Fungi) — eukaryotic organisms such as **moulds, mushrooms and yeasts**.
- They are **not** plants: they have **no chlorophyll** and cannot photosynthesise.

## General characteristics

- **Heterotrophic** — cannot make their own food; they **absorb** it.
- **Cell walls of chitin** (not cellulose).
- Body made of thread-like **hyphae** that form a network called a **mycelium**. (Yeasts are single-celled.)
- Reproduce by **spores**, both sexually and asexually.

## Nutrition and mode of life

Fungi digest food **outside** the body: they secrete **enzymes** onto the food, then **absorb** the digested products ("external digestion").

- **Saprophytic (saprobes)** — feed on **dead** organic matter; they are important **decomposers**. (e.g. *Rhizopus*, the bread mould.)
- **Parasitic** — feed on **living** hosts, causing disease.
- **Mutualistic** — some live with algae as **lichens**, or with plant roots.

## Reproduction

- **Asexual:** by **spores**, **budding** (yeast) or **fragmentation** of hyphae.
- **Sexual:** fusion of hyphae and formation of sexual spores — introduces variation, often under stress.

## Common fungal diseases

| Disease | Host | Type |
| --- | --- | --- |
| **Ringworm** | humans | skin fungus |
| **Athlete's foot** | humans | skin fungus (between toes) |
| **Thrush / candidiasis** | humans | yeast infection |
| **Blight** (e.g. potato) | plants | destroys crops |
| **Rusts and smuts** | plants (cereals) | destroy grain |

## Economic importance

**Useful:**
- **Yeast** — used in **baking** (bread rises) and **brewing** (fermentation of alcohol).
- **Antibiotics** — e.g. penicillin from the mould *Penicillium*.
- **Food** — edible mushrooms; fungi in cheese-making.
- **Decomposers** — recycle nutrients in nature.

**Harmful:**
- Cause **diseases** of humans, animals and crops (above).
- **Spoil food** (mouldy bread, rotten fruit).

## Common errors and misconceptions

- **"Fungi are plants"** — fungi have **no chlorophyll** and **absorb** food; their walls are **chitin**, not cellulose.
- **"All fungi are harmful"** — many are vital (decomposers, yeast, antibiotics).
- **"Fungi make their own food"** — they are **heterotrophic**, absorbing food from dead or living matter.
- **"Ringworm is a worm"** — ringworm is a **fungal** skin infection, not a worm.`,
      workedExample: `**Question:** A piece of bread left in a warm, damp place grows a fuzzy grey-black mould. (a) Name the likely fungus and how it feeds. (b) Explain how it reproduces and spreads. (c) Give one useful and one harmful example of fungi.

**Solution**

**(a) The fungus and its feeding.** The mould is likely **Rhizopus (bread mould)**. It is **saprophytic**: it grows thread-like **hyphae** into the bread, secretes **enzymes** to digest the starch **externally**, and then **absorbs** the digested food. It has **no chlorophyll**, so it cannot make its own food.

**(b) Reproduction and spread.** Rhizopus reproduces **asexually** by making huge numbers of **spores** in round **sporangia** on upright hyphae. When ripe, the sporangia burst and release spores that are carried by **air**; landing on fresh damp food, each spore grows a new mycelium. (It can also reproduce **sexually** by fusion of hyphae to form a resistant zygospore.)

**(c) Useful and harmful examples.**
- **Useful:** **yeast** makes bread rise and ferments alcohol; **Penicillium** gives the antibiotic penicillin.
- **Harmful:** fungi cause **ringworm/athlete's foot** in humans and **blight/rust** in crops, and **spoil food**.

**Answer:** the mould is Rhizopus, feeding saprophytically by external digestion and absorption; it spreads by air-borne spores; fungi are both useful (yeast, penicillin) and harmful (disease, food spoilage).`,
      quiz: [
        { prompt: "Fungi obtain food by", options: ["absorbing it (heterotrophic)", "photosynthesis", "hunting prey", "making it from sunlight"], correctIndex: 0, explanation: "Fungi are heterotrophs that absorb food." },
        { prompt: "Fungal cell walls are made of", options: ["chitin", "cellulose", "protein", "lipid"], correctIndex: 0, explanation: "Fungi have chitin walls, unlike plants." },
        { prompt: "The thread-like filaments of a fungus are", options: ["hyphae", "rhizoids", "fronds", "cilia"], correctIndex: 0, explanation: "Hyphae make up the fungal body." },
        { prompt: "A network of hyphae is called a", options: ["mycelium", "thallus", "mesophyll", "sorus"], correctIndex: 0, explanation: "The mycelium is the fungal body." },
        { prompt: "Fungi that feed on dead matter are", options: ["saprophytic", "parasitic", "autotrophic", "photosynthetic"], correctIndex: 0, explanation: "Saprophytes decompose dead matter." },
        { prompt: "Fungi that feed on living hosts and cause disease are", options: ["parasitic", "saprophytic", "autotrophic", "mutualistic"], correctIndex: 0, explanation: "Parasitic fungi harm living hosts." },
        { prompt: "Fungi digest their food", options: ["outside the body, then absorb it", "in a stomach", "by photosynthesis", "not at all"], correctIndex: 0, explanation: "They secrete enzymes and absorb (external digestion)." },
        { prompt: "Which is a fungal disease of humans?", options: ["ringworm", "malaria", "typhoid", "cholera"], correctIndex: 0, explanation: "Ringworm is a skin fungus." },
        { prompt: "Athlete's foot is caused by a", options: ["fungus", "virus", "bacterium", "worm"], correctIndex: 0, explanation: "It is a fungal skin infection." },
        { prompt: "Yeast is used in baking because it", options: ["ferments sugar and makes dough rise", "photosynthesises", "kills bacteria", "adds chitin"], correctIndex: 0, explanation: "Fermentation produces gas that raises dough." },
        { prompt: "The antibiotic penicillin comes from the mould", options: ["Penicillium", "Rhizopus", "yeast", "Spirogyra"], correctIndex: 0, explanation: "Penicillium produces penicillin." },
        { prompt: "Blight, rust and smut are fungal diseases of", options: ["plants/crops", "humans only", "fish", "insects"], correctIndex: 0, explanation: "They destroy crops." },
        { prompt: "Fungi reproduce mainly by", options: ["spores", "seeds", "eggs", "flowers"], correctIndex: 0, explanation: "Spores spread fungi widely." },
        { prompt: "Yeast reproduces asexually by", options: ["budding", "swimming", "photosynthesis", "flowering"], correctIndex: 0, explanation: "Yeast forms buds that separate." },
        { prompt: "A useful role of fungi in nature is as", options: ["decomposers that recycle nutrients", "producers of oxygen", "predators of insects", "makers of soil minerals only"], correctIndex: 0, explanation: "Saprophytic fungi decompose dead matter." },
        { prompt: "Fungi differ from plants because fungi", options: ["have no chlorophyll", "are single-celled always", "have roots", "make seeds"], correctIndex: 0, explanation: "No chlorophyll means no photosynthesis." },
        { prompt: "Thrush (candidiasis) is caused by a", options: ["yeast (fungus)", "bacterium", "virus", "protozoan"], correctIndex: 0, explanation: "Candida is a yeast." },
        { prompt: "Bread mould is an example of a", options: ["saprophytic fungus (Rhizopus)", "green alga", "parasite of animals", "bacterium"], correctIndex: 0, explanation: "Rhizopus feeds on dead bread." },
        { prompt: "Which statement is TRUE about fungi?", options: ["Some are useful and some are harmful", "All fungi cause disease", "Fungi make their own food", "Fungi are plants"], correctIndex: 0, explanation: "Fungi have both useful and harmful roles." },
        { prompt: "Fungi in cheese-making show their use in", options: ["the food industry", "medicine only", "transport", "mining"], correctIndex: 0, explanation: "Fungi are used to make foods like cheese." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State four general characteristics of fungi.", answerKey: "Any four: heterotrophic (absorb food); cell walls of chitin; body of hyphae forming a mycelium (or single-celled yeast); no chlorophyll; reproduce by spores. 1 mark each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Fungi that feed on dead organic matter are described as", options: ["parasitic", "saprophytic", "autotrophic", "photosynthetic"], correctIndex: 1, answerKey: "Saprophytic. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain how a fungus obtains its food.", answerKey: "It is heterotrophic; it secretes enzymes onto the food, digesting it externally, then absorbs the digested products through its hyphae. Award marks for external digestion and absorption.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give two useful and two harmful roles of fungi.", answerKey: "Useful (any two): yeast in baking/brewing; antibiotics (penicillin); edible mushrooms/cheese; decomposers. Harmful (any two): diseases (ringworm, athlete's foot, thrush, blight, rust); food spoilage. 1 mark each (2 + 2).", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the economic importance of fungi, describing both their beneficial and harmful effects on humans.", answerKey: "Beneficial: yeast in baking and brewing; penicillin/antibiotics; edible mushrooms and cheese; decomposers recycling nutrients (7). Harmful: human diseases (ringworm, athlete's foot, thrush); crop diseases (blight, rust, smut); food spoilage (7). Up to 1 mark for balance. Reward named examples.", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 8.1 Overview of Photosynthesis (https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis)
    {
      slug: "photosynthesis",
      title: "Photosynthesis",
      objective:
        "By the end of the topic, learners should be able to define photosynthesis, state its conditions and equation, describe the light-dependent and light-independent reactions, and explain the products and the role of nutrients.",
      estimatedMinutes: 150,
      notes: `## Definition

- **Photosynthesis** — the process by which green plants (and algae) use **light energy** to make **food (glucose)** from **carbon dioxide** and **water**, releasing **oxygen**.
- It is the only process that captures light energy and stores it as chemical energy in carbohydrates.

## The equation

Word: **carbon dioxide + water → (light, chlorophyll) → glucose + oxygen**

Balanced: **6CO₂ + 6H₂O → (light) → C₆H₁₂O₆ + 6O₂**

## Conditions (requirements)

Four things are needed:

- **Light** (sunlight) — the energy source.
- **Chlorophyll** — the green pigment that absorbs light.
- **Carbon dioxide** — from the air (enters through stomata).
- **Water** — absorbed by the roots.

## Where it happens — leaf adaptation

- In the **chloroplasts**, mainly in the **mesophyll** of the **leaf**.
- The leaf is adapted for photosynthesis:
  - **broad, flat** shape — large surface area to catch light;
  - **thin** — short distance for gases to diffuse;
  - many **chloroplasts** in the palisade cells near the top;
  - **stomata** to let CO₂ in and O₂ out;
  - a network of **veins (xylem and phloem)** to bring water and carry away food.

## The two stages

### 1. Light-dependent reactions

- Occur in the **thylakoid membranes** of the chloroplast.
- **Light** is absorbed by chlorophyll; **water is split**, releasing **oxygen**.
- Energy is stored in **ATP** and **NADPH**.

### 2. Light-independent reactions (Calvin cycle)

- Occur in the **stroma** of the chloroplast.
- The **ATP and NADPH** are used to fix **carbon dioxide** into **glucose** (sugar).
- Does not need light directly.

## Products and their fate

- **Glucose** — used at once in **respiration** for energy; stored as **starch**; converted to cellulose, proteins, oils, etc.
- **Oxygen** — released as a by-product (used by living things in respiration).

## Macronutrients and micronutrients

- Plants also need **mineral nutrients** from the soil for healthy growth and photosynthesis:
  - **Macronutrients** (needed in large amounts): **nitrogen** (proteins, growth), **phosphorus**, **potassium**, **magnesium** (part of chlorophyll).
  - **Micronutrients** (needed in tiny amounts): **iron**, **manganese**, **zinc**, etc.
- Lack of **magnesium** or **nitrogen** causes **yellow leaves (chlorosis)** and poor photosynthesis.

## Common errors and misconceptions

- **"Plants photosynthesise at night"** — the light reactions need **light**; at night plants only **respire**.
- **"Plants take in oxygen and give out carbon dioxide only"** — in light they **take in CO₂ and give out O₂** by photosynthesis (they respire all the time too).
- **"Chlorophyll is food"** — chlorophyll only **absorbs light**; the food made is **glucose**.
- **"Photosynthesis makes energy"** — it **converts** light energy into chemical energy stored in glucose; energy is not created.`,
      workedExample: `**Question:** A learner covers part of a green leaf with foil and leaves the plant in sunlight for a day, then tests the whole leaf for starch with iodine. The covered part stays brown; the uncovered part turns blue-black. Explain the result using the requirements of photosynthesis.

**Solution**

*Step 1 — what the iodine test shows.* Iodine turns **blue-black** where **starch** is present and stays **brown** where there is none. Starch is made from the **glucose** produced in photosynthesis, so a blue-black colour means photosynthesis happened there.

*Step 2 — the uncovered part (blue-black).* This part received **light**. With light, **chlorophyll**, **carbon dioxide** (through the stomata) and **water** (from the roots) all present, the leaf **photosynthesised**, made glucose and stored it as **starch** — hence blue-black.

*Step 3 — the covered part (brown).* The foil blocked **light**, one of the four requirements. Without light the light-dependent reactions cannot run, so **no glucose and no starch** were made — hence it stays brown.

*Step 4 — the conclusion.* Comparing the two parts of the **same leaf** (a fair test with the foil as the only difference) shows that **light is necessary for photosynthesis**.

**Answer:** the uncovered part made starch because it had light (plus chlorophyll, CO₂ and water); the covered part made none because light was blocked — proving light is required for photosynthesis.`,
      quiz: [
        { prompt: "Photosynthesis makes food using", options: ["light energy", "heat from soil", "oxygen only", "minerals only"], correctIndex: 0, explanation: "Light energy powers photosynthesis." },
        { prompt: "The raw materials of photosynthesis are", options: ["carbon dioxide and water", "glucose and oxygen", "oxygen and starch", "nitrogen and salt"], correctIndex: 0, explanation: "CO₂ and water are used." },
        { prompt: "The products of photosynthesis are", options: ["glucose and oxygen", "carbon dioxide and water", "starch and salt", "protein and fat"], correctIndex: 0, explanation: "Glucose and oxygen are produced." },
        { prompt: "The green pigment that absorbs light is", options: ["chlorophyll", "haemoglobin", "melanin", "chitin"], correctIndex: 0, explanation: "Chlorophyll absorbs light energy." },
        { prompt: "Photosynthesis happens in the", options: ["chloroplasts", "mitochondria", "nucleus", "vacuole"], correctIndex: 0, explanation: "Chloroplasts are the site." },
        { prompt: "Carbon dioxide enters the leaf through the", options: ["stomata", "veins", "roots", "cuticle"], correctIndex: 0, explanation: "Stomata allow gas exchange." },
        { prompt: "Water for photosynthesis is absorbed by the", options: ["roots", "leaves", "flowers", "stomata"], correctIndex: 0, explanation: "Roots absorb water from the soil." },
        { prompt: "The light-dependent reactions occur in the", options: ["thylakoid membranes", "stroma", "cytoplasm", "nucleus"], correctIndex: 0, explanation: "Light reactions happen in the thylakoids." },
        { prompt: "Oxygen is released when photosynthesis splits", options: ["water", "glucose", "carbon dioxide", "chlorophyll"], correctIndex: 0, explanation: "Water is split in the light reactions." },
        { prompt: "The Calvin cycle (light-independent reactions) occurs in the", options: ["stroma", "thylakoid", "nucleus", "cell wall"], correctIndex: 0, explanation: "Carbon fixation happens in the stroma." },
        { prompt: "In the Calvin cycle, ATP and NADPH are used to fix", options: ["carbon dioxide into glucose", "oxygen into water", "nitrogen into protein", "light into heat"], correctIndex: 0, explanation: "CO₂ is built into sugar." },
        { prompt: "A leaf is broad and flat to", options: ["catch more light", "store water", "attract insects", "make roots"], correctIndex: 0, explanation: "A large surface catches more light." },
        { prompt: "Glucose made in photosynthesis is often stored as", options: ["starch", "oxygen", "chlorophyll", "salt"], correctIndex: 0, explanation: "Plants store starch." },
        { prompt: "Which mineral is part of chlorophyll?", options: ["magnesium", "sodium", "chlorine", "carbon only"], correctIndex: 0, explanation: "Magnesium is central to chlorophyll." },
        { prompt: "A macronutrient needed for making proteins and growth is", options: ["nitrogen", "iron", "zinc", "manganese"], correctIndex: 0, explanation: "Nitrogen is a macronutrient." },
        { prompt: "Yellowing of leaves (chlorosis) can be caused by lack of", options: ["magnesium or nitrogen", "oxygen", "sunlight only", "water only"], correctIndex: 0, explanation: "Nutrient deficiency causes chlorosis." },
        { prompt: "At night, a plant mainly", options: ["respires (no photosynthesis)", "photosynthesises fast", "makes oxygen", "stops living"], correctIndex: 0, explanation: "Without light it cannot photosynthesise." },
        { prompt: "The balanced equation for photosynthesis is", options: ["6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O", "6O₂ → 6CO₂", "H₂O → H₂ + O₂"], correctIndex: 0, explanation: "CO₂ and water give glucose and oxygen." },
        { prompt: "Photosynthesis is important because it", options: ["provides food and oxygen for living things", "removes all water", "spreads disease", "makes soil"], correctIndex: 0, explanation: "It is the base of food chains and oxygen supply." },
        { prompt: "Which is NOT required for photosynthesis?", options: ["darkness", "light", "chlorophyll", "carbon dioxide"], correctIndex: 0, explanation: "Light, not darkness, is required." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define photosynthesis and write its balanced equation.", answerKey: "Photosynthesis is the process by which green plants use light energy to make glucose from carbon dioxide and water, releasing oxygen. Equation: 6CO₂ + 6H₂O → (light) → C₆H₁₂O₆ + 6O₂. 3 marks for definition, 3 for equation.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "In which part of the chloroplast do the light-dependent reactions occur?", options: ["Stroma", "Thylakoid membranes", "Nucleus", "Cell wall"], correctIndex: 1, answerKey: "Thylakoid membranes. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State the four conditions necessary for photosynthesis.", answerKey: "Light, chlorophyll, carbon dioxide, water. 1 mark each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe two ways a leaf is adapted for photosynthesis.", answerKey: "Any two: broad/flat for large surface area to catch light; thin for short diffusion distance; many chloroplasts in palisade cells; stomata for gas exchange; veins to supply water and remove food. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the two stages of photosynthesis and explain the fate of its products.", answerKey: "Light-dependent reactions: in thylakoids, chlorophyll absorbs light, water is split releasing oxygen, energy stored in ATP and NADPH (5). Light-independent (Calvin cycle): in stroma, ATP and NADPH fix CO₂ into glucose (5). Fate of products: glucose used in respiration, stored as starch, made into cellulose/proteins/oils; oxygen released for respiration (up to 5). Reward correct sequence and terms.", marks: 15 },
      ],
    },
  ],
};
