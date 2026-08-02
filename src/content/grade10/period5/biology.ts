import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 10,
// Semester Two, Period V: Plant-like Organisms (algae, mosses, ferns) and
// Photosynthesis; Fungi.
export const biologyG10P5: PeriodContent = {
  grade: 10,
  number: 5,
  title: "Plant-like Organisms, Photosynthesis and Fungi",
  summary:
    "Period V of the MoE Grade 10 Biology syllabus. Learners study simple plant-like organisms — algae, mosses and ferns — and how green plants make food by photosynthesis, then examine the fungi, their structure and their roles as decomposers and in disease and food.",
  topics: [
    {
      slug: "plant-like-organisms-and-photosynthesis",
      title: "Plant-like Organisms and Photosynthesis",
      objective:
        "By the end of the topic, learners should be able to describe the main features of algae, mosses and ferns, and explain the process of photosynthesis, its requirements and its importance.",
      estimatedMinutes: 160,
      notes: `## Introduction

Green plants and plant-like organisms feed the whole living world. Through **photosynthesis** they capture the energy of sunlight and lock it into food, releasing the oxygen every animal breathes. Before we study the complex flowering plant, this topic looks at the simpler plant-like organisms — **algae, mosses and ferns** — and then explains photosynthesis itself: what it needs, what it makes, and why all life depends on it.

## Simple plant-like organisms

Before flowering plants, there are simpler plant-like organisms, all of which contain **chlorophyll** and make their own food by **photosynthesis**.

### Algae
**Algae** are simple, mostly **aquatic** plant-like organisms (from tiny single-celled forms to large seaweeds). They have **no true roots, stems or leaves**, but they contain chlorophyll and photosynthesise. Algae are important as the main **producers** in water and a major source of the world's oxygen.

### Mosses
**Mosses** are small, simple land plants that grow in **damp, shady places**. They have simple leaf-like and stem-like parts and **root-like rhizoids** to anchor them, but **no true roots or proper transport (vascular) tissue**, so they stay small and need moisture. They reproduce by **spores**, not seeds.

### Ferns
**Ferns** are more advanced. They have **true roots, stems and leaves (fronds)** and **vascular tissue** to carry water and food, so they can grow larger than mosses. Like mosses, ferns reproduce by **spores** (found in little brown patches under the fronds), not by seeds or flowers.

**Order of increasing complexity:** algae → mosses → ferns → (later) flowering plants.

## Photosynthesis

**Photosynthesis** is the process by which **green plants make their own food (glucose)** using **carbon dioxide** and **water**, in the presence of **sunlight** and **chlorophyll**, releasing **oxygen**.

**Word equation:**

> carbon dioxide + water → (light + chlorophyll) → glucose + oxygen

\`\`\`svg The inputs and outputs of photosynthesis in a leaf
<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A leaf taking in carbon dioxide, water and light and giving out oxygen and glucose">
  <ellipse cx="140" cy="80" rx="60" ry="35" fill="#86efac" stroke="#065f46" stroke-width="2"/>
  <text x="140" y="84" font-size="10" text-anchor="middle" fill="#064e3b">leaf (chlorophyll)</text>
  <text x="20" y="55" font-size="9" fill="#b45309">sunlight ☀</text>
  <line x1="55" y1="55" x2="95" y2="70" stroke="#b45309" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="10" y="110" font-size="9" fill="#0369a1">CO₂ + H₂O</text>
  <line x1="55" y1="106" x2="90" y2="90" stroke="#0369a1" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="212" y="60" font-size="9" fill="#065f46">oxygen ↑</text>
  <line x1="195" y1="65" x2="225" y2="55" stroke="#065f46" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="212" y="108" font-size="9" fill="#7c2d12">glucose</text>
  <line x1="195" y1="95" x2="225" y2="104" stroke="#7c2d12" stroke-width="1.5" marker-end="url(#a)"/>
  <defs><marker id="a" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6 Z" fill="#555"/></marker></defs>
</svg>
\`\`\`

### What photosynthesis needs (the requirements)
- **Sunlight** — the energy source.
- **Chlorophyll** — the green pigment in **chloroplasts** that traps light energy.
- **Carbon dioxide** — taken in from the air through tiny pores (**stomata**) in the leaves.
- **Water** — absorbed by the roots and carried to the leaves.

### The products
- **Glucose** — food (energy) for the plant; may be stored as **starch**.
- **Oxygen** — released into the air.

## Why photosynthesis is important

- It is the source of **almost all food** — plants feed themselves and, through food chains, feed animals and humans.
- It releases the **oxygen** that living things need to breathe.
- It removes **carbon dioxide** from the air.

Photosynthesis makes green plants the **producers** at the base of nearly every food chain.

## Common errors and misconceptions

- **"Plants take in oxygen and give out carbon dioxide"** — that is back to front for photosynthesis: plants take in **carbon dioxide** and give out **oxygen**. (They *do* respire too, using oxygen, but photosynthesis in daylight far exceeds it.)
- **Thinking plants get their food from the soil** — plants **make** their food (glucose) by photosynthesis; from the soil they take only water and mineral salts.
- **Confusing chlorophyll and chloroplast** — chlorophyll is the green *pigment*; the chloroplast is the *structure* that contains it.
- **Forgetting sunlight is energy, not a raw material** — the raw materials are carbon dioxide and water; sunlight provides the energy.`,
      workedExample: `**Task.** (a) Write the word equation for photosynthesis and name what each input and product is. (b) A fern can grow much larger than a moss — explain why, using their structure.

**Part (a) — photosynthesis**

**Word equation:** carbon dioxide + water → (in the presence of light and chlorophyll) → glucose + oxygen.

- **Inputs:** carbon dioxide (from the air through the stomata) and water (absorbed by the roots); the process is powered by **sunlight** and depends on **chlorophyll**.
- **Products:** glucose (the plant's food, which can be stored as starch) and oxygen (released into the air).

**Part (b) — why a fern grows larger than a moss**

- A **moss** has only simple leaf-like and stem-like parts and **root-like rhizoids**, and it has **no proper vascular (transport) tissue**. Without a system to carry water and food efficiently, and without true roots, it cannot grow tall and must stay small and near moisture.
- A **fern** has **true roots, stems and leaves (fronds)** and **vascular tissue** that transports water up from the roots and food around the plant. This transport system lets a fern support a larger body and grow much bigger than a moss.

**Conclusion:** photosynthesis makes food using carbon dioxide, water, light and chlorophyll, giving glucose and oxygen; and the fern's true roots and vascular tissue — which the moss lacks — are what allow it to grow larger.`,
      teachingTip:
        "Anchor the whole topic on chlorophyll and photosynthesis: algae, mosses and ferns are all green because they all photosynthesise. Have learners recite the word equation and list the four requirements (light, chlorophyll, CO₂, water) and two products (glucose, oxygen). The algae → moss → fern → flowering plant sequence shows increasing complexity (vascular tissue is the big step) — connect it back to the levels-of-organisation theme from earlier periods.",
      quiz: [
        {
          prompt: "Algae, mosses and ferns all contain … and make their own food.",
          options: ["chlorophyll", "blood", "bone", "chitin"],
          correctIndex: 0,
          explanation: "All are green and photosynthesise using chlorophyll.",
        },
        {
          prompt: "Algae are mostly found…",
          options: ["in water (aquatic)", "in deserts", "underground only", "in the air"],
          correctIndex: 0,
          explanation: "Algae are mostly aquatic.",
        },
        {
          prompt: "Algae have…",
          options: ["no true roots, stems or leaves", "true roots and leaves", "flowers", "wood"],
          correctIndex: 0,
          explanation: "Algae lack true plant organs.",
        },
        {
          prompt: "Mosses usually grow in places that are…",
          options: ["damp and shady", "hot and dry", "very salty", "frozen solid"],
          correctIndex: 0,
          explanation: "Mosses need moisture and shade.",
        },
        {
          prompt: "Mosses reproduce by…",
          options: ["spores", "seeds", "flowers", "roots only"],
          correctIndex: 0,
          explanation: "Mosses reproduce by spores.",
        },
        {
          prompt: "Ferns differ from mosses because ferns have…",
          options: ["true roots, stems, leaves and vascular tissue", "no chlorophyll", "flowers and seeds", "no leaves"],
          correctIndex: 0,
          explanation: "Ferns have proper vascular tissue and true organs.",
        },
        {
          prompt: "The leaves of a fern are called…",
          options: ["fronds", "rhizoids", "spores", "stomata"],
          correctIndex: 0,
          explanation: "Fern leaves are fronds.",
        },
        {
          prompt: "Photosynthesis makes which food substance?",
          options: ["glucose", "protein", "fat", "salt"],
          correctIndex: 0,
          explanation: "Glucose (a sugar) is produced.",
        },
        {
          prompt: "Which gas is taken IN during photosynthesis?",
          options: ["carbon dioxide", "oxygen", "nitrogen", "hydrogen"],
          correctIndex: 0,
          explanation: "CO₂ is a raw material.",
        },
        {
          prompt: "Which gas is GIVEN OUT during photosynthesis?",
          options: ["oxygen", "carbon dioxide", "nitrogen", "methane"],
          correctIndex: 0,
          explanation: "Oxygen is released.",
        },
        {
          prompt: "The green pigment that traps light energy is…",
          options: ["chlorophyll", "haemoglobin", "melanin", "keratin"],
          correctIndex: 0,
          explanation: "Chlorophyll traps light.",
        },
        {
          prompt: "Chlorophyll is found in structures called…",
          options: ["chloroplasts", "mitochondria", "ribosomes", "vacuoles"],
          correctIndex: 0,
          explanation: "Chloroplasts contain chlorophyll.",
        },
        {
          prompt: "The energy source for photosynthesis is…",
          options: ["sunlight", "heat from soil", "wind", "electricity"],
          correctIndex: 0,
          explanation: "Light energy powers the process.",
        },
        {
          prompt: "Carbon dioxide enters the leaf through tiny pores called…",
          options: ["stomata", "rhizoids", "veins", "fronds"],
          correctIndex: 0,
          explanation: "Stomata let CO₂ in.",
        },
        {
          prompt: "Water for photosynthesis is absorbed by the plant's…",
          options: ["roots", "flowers", "stomata", "spores"],
          correctIndex: 0,
          explanation: "Roots take up water.",
        },
        {
          prompt: "Glucose made in photosynthesis may be stored as…",
          options: ["starch", "protein", "oxygen", "chlorophyll"],
          correctIndex: 0,
          explanation: "Excess glucose is stored as starch.",
        },
        {
          prompt: "Green plants are called … because they make food for food chains.",
          options: ["producers", "consumers", "decomposers", "predators"],
          correctIndex: 0,
          explanation: "Plants produce food at the base of food chains.",
        },
        {
          prompt: "The correct order of increasing complexity is…",
          options: ["algae → mosses → ferns → flowering plants", "ferns → mosses → algae", "flowering plants → algae", "mosses → algae → ferns"],
          correctIndex: 0,
          explanation: "Complexity increases from algae to flowering plants.",
        },
        {
          prompt: "Photosynthesis helps the atmosphere by removing…",
          options: ["carbon dioxide", "oxygen", "water vapour", "nitrogen"],
          correctIndex: 0,
          explanation: "It uses up CO₂ and releases O₂.",
        },
        {
          prompt: "Why can ferns grow taller than mosses?",
          options: ["they have vascular (transport) tissue and true roots", "they have no chlorophyll", "they live in water", "they have flowers"],
          correctIndex: 0,
          explanation: "Vascular tissue supports a larger body.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Write the word equation for photosynthesis.",
          answerKey:
            "carbon dioxide + water → (in the presence of light and chlorophyll) → glucose + oxygen. Award marks for correct reactants (CO₂ + water), the condition (light + chlorophyll) and correct products (glucose + oxygen).",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State the four things a plant needs for photosynthesis.",
          answerKey:
            "Sunlight (energy), chlorophyll, carbon dioxide and water. Award a mark for each (max 4), deducting for naming a product instead of a requirement.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which feature makes ferns more advanced than mosses?",
          options: [
            "true roots, stems, leaves and vascular tissue",
            "the presence of chlorophyll",
            "reproduction by spores",
            "growing in damp places",
          ],
          correctIndex: 0,
          answerKey: "Ferns have vascular tissue and true organs; mosses do not.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the importance of photosynthesis to living things.",
          answerKey:
            "A strong answer explains that photosynthesis is the source of almost all food — green plants make glucose, feeding themselves and, through food chains, all animals and humans (plants are the producers). It releases the oxygen that living things need for respiration, and it removes carbon dioxide from the air. Without photosynthesis there would be no food and little oxygen. Award marks for the food/producer point, the oxygen point, and the removal of carbon dioxide.",
          marks: 5,
        },
      ],
    },
    {
      slug: "fungi",
      title: "The Fungi",
      objective:
        "By the end of the topic, learners should be able to describe the general characteristics of fungi, explain how they feed, and give examples of their harmful and useful roles.",
      estimatedMinutes: 150,
      notes: `## Introduction

**Fungi** are neither plants nor animals — they are their own kingdom, with a way of life all their own. They cannot make their own food as plants do, yet they are not hunters like animals; instead they **absorb** their food from dead or living matter around them. This makes them nature's great recyclers, but also the cause of rot, mould and disease. This topic sets out what fungi are, how they feed, and their useful and harmful roles in Liberian life.

## What are fungi?

**Fungi** (singular: fungus) are a separate kingdom of living things (Kingdom Fungi, from the classification in Period II). They include **mushrooms, moulds, mildews, yeasts and toadstools**.

## General characteristics of fungi

- Fungi are **not plants** — they contain **no chlorophyll**, so they **cannot photosynthesise** and cannot make their own food.
- Their bodies are usually made of fine threads called **hyphae**, which form a tangled mass called a **mycelium**.
- Their cell walls are made of **chitin** (like arthropods), not cellulose.
- They reproduce mainly by **spores**.
- **Yeast** is an exception — it is a single-celled fungus that reproduces by **budding**.

\`\`\`svg A mushroom showing cap, gills and stalk
<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A mushroom with a cap, gills underneath and a stalk">
  <path d="M30,70 C30,35 130,35 130,70 Z" fill="#d97706" stroke="#7c2d12" stroke-width="2"/>
  <g stroke="#7c2d12" stroke-width="1">
    <line x1="45" y1="70" x2="45" y2="76"/><line x1="60" y1="70" x2="60" y2="78"/><line x1="80" y1="70" x2="80" y2="79"/><line x1="100" y1="70" x2="100" y2="78"/><line x1="115" y1="70" x2="115" y2="76"/>
  </g>
  <rect x="72" y="70" width="16" height="70" fill="#fde68a" stroke="#7c2d12"/>
  <text x="80" y="30" font-size="9" text-anchor="middle" fill="#7c2d12">cap</text>
  <text x="128" y="82" font-size="8" fill="#7c2d12">gills</text>
  <text x="98" y="120" font-size="9" fill="#7c2d12">stalk</text>
</svg>
\`\`\`

## How fungi feed

Because they cannot make their own food, fungi are **heterotrophic** — they get food from other organisms in two main ways:

- **Saprophytes (decomposers):** they feed on **dead and decaying** matter (dead plants, animals, food). They release **enzymes** onto the material, digest it **outside** their body, and absorb the digested nutrients. Example: bread mould, mushrooms on rotting logs.
- **Parasites:** they feed on **living** hosts, causing disease. Example: the fungus causing **ringworm** or **athlete's foot** in humans, and many plant diseases.

## Harmful roles of fungi

- Cause **diseases** in humans (ringworm, athlete's foot, thrush), animals and crops.
- **Spoil food** — mould on bread, fruit and stored grain.

## Useful roles of fungi

- **Decomposers:** by breaking down dead matter, fungi **recycle nutrients** back into the soil — vital for the environment.
- **Food:** edible mushrooms are eaten; **yeast** makes bread rise (it produces carbon dioxide) and is used in brewing.
- **Medicine:** the antibiotic **penicillin** comes from a mould (*Penicillium*).

## Warning
Some mushrooms and toadstools are **very poisonous**. Never eat wild fungi unless an expert has confirmed they are safe.

## Common errors and misconceptions

- **Calling fungi plants** — fungi have **no chlorophyll** and cannot photosynthesise; they *absorb* food, and their cell walls are **chitin**, not cellulose.
- **Thinking all fungi are harmful** — many are essential decomposers, food (mushrooms, yeast) and the source of medicines such as **penicillin**.
- **Confusing saprophyte and parasite** — a **saprophyte** feeds on **dead** matter; a **parasite** feeds on a **living** host and causes disease.
- **Believing fungi digest food inside them** — they release **enzymes onto** the food and digest it **externally**, then absorb the products.`,
      workedExample: `**Task.** (a) Give three ways in which fungi differ from green plants. (b) Explain how a saprophytic fungus feeds. (c) State one harmful and one useful role of fungi.

**Part (a) — three differences between fungi and green plants**
1. Fungi have **no chlorophyll**, so they **cannot photosynthesise** (green plants can).
2. Fungi **cannot make their own food** — they must obtain it from other organisms (plants make their own).
3. Fungal cell walls are made of **chitin**, not cellulose (as in plants). *(Also acceptable: fungal bodies are made of hyphae/mycelium.)*

**Part (b) — how a saprophytic fungus feeds**
A **saprophyte** feeds on **dead and decaying matter**. It releases **enzymes** onto the dead material, which **digest it outside** the fungus's body (external digestion); the fungus then **absorbs** the digested, soluble nutrients through its hyphae. For example, bread mould feeds this way on old bread.

**Part (c) — harmful and useful roles**
- **Harmful:** fungi cause disease (e.g. ringworm, athlete's foot) or spoil food (mould on bread).
- **Useful:** fungi are decomposers that recycle nutrients into the soil; yeast makes bread rise; the antibiotic penicillin comes from a mould.

**Conclusion:** fungi differ from plants chiefly in lacking chlorophyll and the ability to make their own food; saprophytes feed by external digestion of dead matter; and fungi are both harmful (disease, spoilage) and useful (decomposition, food, medicine).`,
      teachingTip:
        "The core idea is 'no chlorophyll, so they cannot make their own food' — everything else about fungi follows from it, especially their feeding as saprophytes and parasites. External digestion (enzymes out, nutrients in) is a favourite exam point; contrast it with how animals digest food inside the body. Balance the harmful roles (disease, spoilage) with the useful ones (decomposition, yeast, penicillin) so learners see fungi as both a problem and a benefit.",
      quiz: [
        {
          prompt: "Fungi belong to which kingdom?",
          options: ["Fungi", "Plantae", "Animalia", "Monera"],
          correctIndex: 0,
          explanation: "Fungi are their own kingdom.",
        },
        {
          prompt: "Which of these is a fungus?",
          options: ["a mushroom", "a fern", "an alga", "a moss"],
          correctIndex: 0,
          explanation: "Mushrooms are fungi; the others are plant-like.",
        },
        {
          prompt: "Fungi cannot make their own food because they have no…",
          options: ["chlorophyll", "cell walls", "spores", "hyphae"],
          correctIndex: 0,
          explanation: "Without chlorophyll they cannot photosynthesise.",
        },
        {
          prompt: "The fine threads that make up a fungus body are called…",
          options: ["hyphae", "rhizoids", "veins", "stomata"],
          correctIndex: 0,
          explanation: "Hyphae form the fungal body.",
        },
        {
          prompt: "A tangled mass of hyphae is called a…",
          options: ["mycelium", "frond", "chloroplast", "spore case"],
          correctIndex: 0,
          explanation: "The mycelium is the mass of hyphae.",
        },
        {
          prompt: "Fungal cell walls are made of…",
          options: ["chitin", "cellulose", "bone", "protein only"],
          correctIndex: 0,
          explanation: "Chitin, like in arthropods.",
        },
        {
          prompt: "Most fungi reproduce by…",
          options: ["spores", "seeds", "flowers", "eggs"],
          correctIndex: 0,
          explanation: "Fungi reproduce mainly by spores.",
        },
        {
          prompt: "Which single-celled fungus reproduces by budding?",
          options: ["yeast", "mushroom", "mildew", "toadstool"],
          correctIndex: 0,
          explanation: "Yeast is a single-celled fungus that buds.",
        },
        {
          prompt: "A fungus that feeds on dead, decaying matter is a…",
          options: ["saprophyte", "parasite", "producer", "predator"],
          correctIndex: 0,
          explanation: "Saprophytes feed on dead matter.",
        },
        {
          prompt: "A fungus that feeds on a living host and causes disease is a…",
          options: ["parasite", "saprophyte", "producer", "decomposer of rock"],
          correctIndex: 0,
          explanation: "Parasites feed on living hosts.",
        },
        {
          prompt: "Fungi digest their food…",
          options: ["outside their body, then absorb it", "inside a stomach", "by photosynthesis", "not at all"],
          correctIndex: 0,
          explanation: "They release enzymes and absorb the digested nutrients (external digestion).",
        },
        {
          prompt: "Which is a harmful role of fungi?",
          options: ["spoiling food and causing disease", "recycling nutrients", "making bread rise", "producing penicillin"],
          correctIndex: 0,
          explanation: "Fungi cause disease and food spoilage.",
        },
        {
          prompt: "Ringworm and athlete's foot are caused by…",
          options: ["fungi", "bacteria only", "viruses", "algae"],
          correctIndex: 0,
          explanation: "These are fungal skin infections.",
        },
        {
          prompt: "By breaking down dead matter, fungi act as…",
          options: ["decomposers that recycle nutrients", "producers", "predators", "pollinators"],
          correctIndex: 0,
          explanation: "Decomposer fungi return nutrients to the soil.",
        },
        {
          prompt: "Yeast is useful in baking because it produces…",
          options: ["carbon dioxide (making dough rise)", "oxygen", "chlorophyll", "chitin"],
          correctIndex: 0,
          explanation: "Yeast releases CO₂ that raises the dough.",
        },
        {
          prompt: "The antibiotic penicillin is obtained from a…",
          options: ["mould (Penicillium)", "mushroom cap", "moss", "bacterium"],
          correctIndex: 0,
          explanation: "Penicillin comes from the Penicillium mould.",
        },
        {
          prompt: "Fungi that get their food from other organisms are described as…",
          options: ["heterotrophic", "autotrophic", "photosynthetic", "producers"],
          correctIndex: 0,
          explanation: "Heterotrophs cannot make their own food.",
        },
        {
          prompt: "Why should you never eat wild mushrooms unless an expert confirms them?",
          options: ["some are very poisonous", "they have no taste", "they are plants", "they cannot be cooked"],
          correctIndex: 0,
          explanation: "Some fungi are highly poisonous.",
        },
        {
          prompt: "Bread mould feeding on old bread is an example of a…",
          options: ["saprophyte", "parasite", "producer", "predator"],
          correctIndex: 0,
          explanation: "It feeds on dead/decaying matter.",
        },
        {
          prompt: "Which is a useful role of fungi?",
          options: ["decomposition and food (mushrooms, yeast)", "causing ringworm", "spoiling grain", "rotting fruit"],
          correctIndex: 0,
          explanation: "Fungi recycle nutrients and provide food and medicine.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Give three general characteristics of fungi.",
          answerKey:
            "Any three: no chlorophyll (cannot photosynthesise / cannot make own food); body made of hyphae forming a mycelium; cell walls of chitin; reproduce by spores (yeast by budding); heterotrophic (feed on other organisms). Award a mark per valid characteristic.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A fungus that feeds on a living host and causes disease is a…",
          options: ["parasite", "saprophyte", "producer", "decomposer"],
          correctIndex: 0,
          answerKey: "A parasite feeds on a living host.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain how a saprophytic fungus obtains its food.",
          answerKey:
            "It feeds on dead and decaying matter by releasing enzymes onto the material, which digest it outside the fungus's body (external digestion); the fungus then absorbs the digested, soluble nutrients through its hyphae. Award marks for external digestion (enzymes) and absorption of the products.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Discuss the harmful and useful roles of fungi, giving examples of each.",
          answerKey:
            "A strong answer covers harmful roles — fungi cause diseases in humans (ringworm, athlete's foot, thrush), animals and crops, and spoil food (mould on bread, fruit, grain) — and useful roles — as decomposers they recycle nutrients back into the soil; edible mushrooms are food; yeast makes bread rise and is used in brewing; the antibiotic penicillin comes from a mould. Award marks for at least two harmful and two useful roles with valid examples.",
          marks: 5,
        },
      ],
    },
  ],
};
