import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 10,
// Semester Two, Period VI: Flowering Plants.
export const biologyG10P6: PeriodContent = {
  grade: 10,
  number: 6,
  title: "Flowering Plants",
  summary:
    "Period VI of the MoE Grade 10 Biology syllabus. Learners study flowering plants — the most advanced plants — describing the structure and functions of their main parts (root, stem, leaf), and the flower as the organ of reproduction, including pollination and fertilisation.",
  topics: [
    {
      slug: "parts-of-a-flowering-plant",
      title: "The Parts of a Flowering Plant and Their Functions",
      objective:
        "By the end of the topic, learners should be able to name the main parts of a flowering plant and describe the function of the root, stem and leaf.",
      estimatedMinutes: 150,
      notes: `## Introduction

- Common crops — rice, cassava, mango, hibiscus — are **flowering plants**, the most advanced group in the plant kingdom.
- Each part does a particular job; they reproduce by seeds protected inside flowers and fruits.
- **This topic:** the main parts of a flowering plant, and the jobs of the three vegetative organs — **root, stem and leaf**.

## The most advanced plants

**Flowering plants** (also called **angiosperms**) are the most advanced and most numerous plants. Unlike the mosses and ferns of Period V, they have **true roots, stems, leaves and flowers**, proper **vascular (transport) tissue**, and they reproduce by **seeds** produced inside **flowers**.

A flowering plant has two systems: the **root system** (below ground) and the **shoot system** (stem, leaves and flowers, above ground).

\`\`\`svg The main parts of a flowering plant
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A plant showing roots, stem, leaf and flower">
  <line x1="100" y1="120" x2="100" y2="55" stroke="#166534" stroke-width="4"/>
  <path d="M100,90 q-30,-8 -40,-25 q28,0 40,15z" fill="#4ade80" stroke="#166534"/>
  <path d="M100,80 q30,-8 40,-25 q-28,0 -40,15z" fill="#4ade80" stroke="#166534"/>
  <circle cx="100" cy="45" r="12" fill="#f472b6" stroke="#9d174d"/>
  <circle cx="100" cy="45" r="4" fill="#facc15"/>
  <g stroke="#78350f" stroke-width="2" fill="none">
    <path d="M100,120 q-15,20 -25,45"/><path d="M100,120 q15,20 25,45"/><path d="M100,120 q0,25 0,50"/>
  </g>
  <text x="150" y="45" font-size="8" fill="#9d174d">flower</text>
  <text x="150" y="82" font-size="8" fill="#166534">leaf</text>
  <text x="150" y="115" font-size="8" fill="#166534">stem</text>
  <text x="150" y="160" font-size="8" fill="#78350f">roots</text>
</svg>
\`\`\`

## The root and its functions

The **root** grows down into the soil. Its functions are:

- **Anchorage** — it holds the plant firmly in the soil.
- **Absorption** — it takes in **water and mineral salts** from the soil, mainly through fine **root hairs** near the tip.
- **Conduction** — it carries the absorbed water up to the stem.
- **Storage** — some roots store food (e.g. cassava, carrot, sweet potato).

## The stem and its functions

The **stem** grows upward and bears the leaves, flowers and fruits. Its functions are:

- **Support** — it holds up the leaves (to the light) and the flowers.
- **Transport (conduction)** — its **vascular tissue** carries water and minerals up from the roots (in the **xylem**) and carries food made in the leaves to the rest of the plant (in the **phloem**).
- **Storage** — some stems store food or water (e.g. sugar cane, potato tuber).

## The leaf and its functions

The **leaf** is the plant's main **food factory**. Its functions are:

- **Photosynthesis** — the leaf makes food (glucose) using its chlorophyll (Period V).
- **Gas exchange** — gases (CO₂ and O₂) pass in and out through tiny pores called **stomata**.
- **Transpiration** — the loss of water vapour from the leaf, which helps draw water up the plant.
- Broad, flat shape gives a large surface to catch sunlight and exchange gases.

## Common errors and misconceptions

- **"Roots take in food from the soil"** — roots absorb **water and mineral salts**, not food; the plant makes its food in the leaves.
- **Confusing xylem and phloem** — **xylem** carries **water** (and minerals) **upward** from the roots; **phloem** carries **food** made in the leaves to the rest of the plant.
- **Thinking stomata are on the stem** — the gas-exchange pores (**stomata**) are mainly on the **leaves**, especially the underside.
- **Mixing up transpiration and respiration** — transpiration is the **loss of water vapour** from leaves; respiration is the release of energy from food.`,
      workedExample: `**Task.** For a named flowering plant, describe the functions of (a) the root, (b) the stem, and (c) the leaf, and explain how these parts work together to keep the plant alive.

**Part (a) — the root**
The root **anchors** the plant firmly in the soil and **absorbs water and mineral salts** from the soil through its **root hairs**; it then **conducts** this water up towards the stem. (In some plants, e.g. cassava, the root also **stores food**.)

**Part (b) — the stem**
The stem **supports** the plant, holding the leaves up to the sunlight and bearing the flowers and fruits. It **transports** materials: water and minerals travel **up** from the roots, and food made in the leaves travels to the rest of the plant, through its **vascular tissue**.

**Part (c) — the leaf**
The leaf is the plant's **food factory**: it carries out **photosynthesis**, making glucose using sunlight and chlorophyll. It also **exchanges gases** through its **stomata** and loses water vapour by **transpiration**.

**How they work together**
The **root** absorbs water and minerals; the **stem** transports this water up to the **leaves**, which use it (with carbon dioxide and sunlight) to make food by photosynthesis; the stem then carries the food from the leaves to the roots and other parts. Each part depends on the others — the root cannot make food, the leaf cannot absorb soil water, and the stem links them — so together they keep the whole plant alive.

**Conclusion:** root (anchor/absorb), stem (support/transport) and leaf (make food) each have distinct functions, and their cooperation — water up, food around — sustains the flowering plant.`,
      teachingTip:
        "Teach the three organs by a one-word job each: root = absorb, stem = transport, leaf = make food. Then stress the teamwork (water up from roots → leaves make food → food distributed by the stem) so learners see the plant as a working system, echoing the levels-of-organisation idea from Period III. A real plant (or a cassava root, a sugar-cane stem) pulled up and examined makes the functions concrete.",
      quiz: [
        {
          prompt: "Flowering plants are also called…",
          options: ["angiosperms", "algae", "fungi", "mosses"],
          correctIndex: 0,
          explanation: "Flowering plants are angiosperms.",
        },
        {
          prompt: "Flowering plants reproduce by…",
          options: ["seeds produced in flowers", "spores", "budding only", "cuttings only"],
          correctIndex: 0,
          explanation: "They produce seeds inside flowers.",
        },
        {
          prompt: "The part of the plant that grows down into the soil is the…",
          options: ["root", "stem", "leaf", "flower"],
          correctIndex: 0,
          explanation: "The root grows into the soil.",
        },
        {
          prompt: "One function of the root is to … the plant in the soil.",
          options: ["anchor", "photosynthesise in", "flower on", "cool"],
          correctIndex: 0,
          explanation: "Roots anchor the plant.",
        },
        {
          prompt: "Roots absorb water and mineral salts mainly through…",
          options: ["root hairs", "stomata", "petals", "the stem"],
          correctIndex: 0,
          explanation: "Root hairs take in water and minerals.",
        },
        {
          prompt: "Which of these is a root that stores food?",
          options: ["cassava", "leaf", "petal", "flower"],
          correctIndex: 0,
          explanation: "Cassava (and carrot) are storage roots.",
        },
        {
          prompt: "The stem's main job of holding up the plant is called…",
          options: ["support", "absorption", "photosynthesis", "transpiration"],
          correctIndex: 0,
          explanation: "The stem supports the plant.",
        },
        {
          prompt: "Water and minerals travel up the stem in the…",
          options: ["xylem", "phloem", "stomata", "petals"],
          correctIndex: 0,
          explanation: "Xylem carries water and minerals upward.",
        },
        {
          prompt: "Food made in the leaves is carried through the…",
          options: ["phloem", "xylem", "root hairs", "stomata"],
          correctIndex: 0,
          explanation: "Phloem transports food.",
        },
        {
          prompt: "The main food-making organ of the plant is the…",
          options: ["leaf", "root", "stem", "flower"],
          correctIndex: 0,
          explanation: "Leaves carry out photosynthesis.",
        },
        {
          prompt: "The process by which the leaf makes food is…",
          options: ["photosynthesis", "respiration only", "transpiration", "absorption"],
          correctIndex: 0,
          explanation: "Photosynthesis makes glucose in the leaf.",
        },
        {
          prompt: "Gases pass in and out of the leaf through tiny pores called…",
          options: ["stomata", "root hairs", "xylem", "petals"],
          correctIndex: 0,
          explanation: "Stomata allow gas exchange.",
        },
        {
          prompt: "The loss of water vapour from the leaf is called…",
          options: ["transpiration", "photosynthesis", "absorption", "respiration"],
          correctIndex: 0,
          explanation: "Transpiration is water loss from leaves.",
        },
        {
          prompt: "The broad, flat shape of a leaf helps it to…",
          options: ["catch sunlight and exchange gases", "anchor the plant", "store water only", "make seeds"],
          correctIndex: 0,
          explanation: "A large flat surface suits photosynthesis and gas exchange.",
        },
        {
          prompt: "Flowering plants differ from mosses and ferns because they have…",
          options: ["flowers and reproduce by seeds", "no roots", "no leaves", "no chlorophyll"],
          correctIndex: 0,
          explanation: "Flowers and seeds are the key advance.",
        },
        {
          prompt: "The two systems of a flowering plant are the root system and the…",
          options: ["shoot system", "flower system only", "water system", "gas system"],
          correctIndex: 0,
          explanation: "Root system (below) and shoot system (above).",
        },
        {
          prompt: "Which stem stores food?",
          options: ["sugar cane / potato tuber", "root hair", "petal", "stomata"],
          correctIndex: 0,
          explanation: "Some stems (sugar cane, potato) store food.",
        },
        {
          prompt: "The tissue that transports materials in a plant is called…",
          options: ["vascular tissue", "muscle tissue", "nervous tissue", "epithelial tissue"],
          correctIndex: 0,
          explanation: "Xylem and phloem make up vascular tissue.",
        },
        {
          prompt: "Which part links the roots to the leaves, carrying water and food?",
          options: ["the stem", "the flower", "the petal", "the stomata"],
          correctIndex: 0,
          explanation: "The stem transports between root and leaf.",
        },
        {
          prompt: "Why can a flowering plant grow tall and complex?",
          options: ["it has true roots, stems, leaves and vascular tissue", "it has no cells", "it lives in water", "it has no roots"],
          correctIndex: 0,
          explanation: "Its organs and transport tissue support growth.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "State three functions of the root of a flowering plant.",
          answerKey:
            "Any three: anchorage (holds the plant in the soil); absorption of water and mineral salts (through root hairs); conduction of water up to the stem; storage of food (in some plants). Award a mark per valid function.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which vessel carries water and mineral salts upward in a plant?",
          options: ["xylem", "phloem", "stomata", "root hair"],
          correctIndex: 0,
          answerKey: "Xylem transports water and minerals upward.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State two functions of a leaf.",
          answerKey:
            "Any two: photosynthesis (making food); gas exchange through the stomata; transpiration (loss of water vapour). Award a mark for each.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how the root, stem and leaf of a flowering plant work together to keep the plant alive.",
          answerKey:
            "A strong answer explains that the root absorbs water and mineral salts from the soil (through root hairs) and anchors the plant; the stem supports the plant and transports water and minerals up from the roots (xylem) and food from the leaves to the rest of the plant (phloem); the leaf makes food by photosynthesis using that water, carbon dioxide and sunlight. It concludes that the parts depend on one another — water travels up from the roots to the leaves, and food travels back down through the stem — so their cooperation keeps the whole plant alive. Award marks for the function of each organ and a clear account of how they work together.",
          marks: 5,
        },
      ],
    },
    {
      slug: "the-flower-and-reproduction",
      title: "The Flower and Reproduction",
      objective:
        "By the end of the topic, learners should be able to name the parts of a flower and their functions, and describe pollination and fertilisation in flowering plants.",
      estimatedMinutes: 150,
      notes: `## Introduction

- The **flower** is the part that makes new plants — a reproductive organ.
- Its colour and scent attract the insects and birds that carry pollen from flower to flower.
- **This topic:** the parts of a flower and their jobs; the two key events — **pollination** (transfer of pollen) and **fertilisation** (joining of sex cells to form a seed).

## The flower — the organ of reproduction

The **flower** is the part of a flowering plant responsible for **sexual reproduction** — it makes the seeds that grow into new plants.

## The parts of a flower

\`\`\`svg A section through a flower showing its main parts
<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flower cross-section with sepals, petals, stamen and carpel">
  <path d="M40,120 Q110,150 180,120" fill="none" stroke="#166534" stroke-width="2"/>
  <path d="M55,120 Q110,20 165,120" fill="#fbcfe8" stroke="#9d174d"/>
  <line x1="95" y1="120" x2="88" y2="70" stroke="#a16207" stroke-width="2"/>
  <circle cx="86" cy="66" r="6" fill="#facc15"/>
  <line x1="125" y1="120" x2="132" y2="70" stroke="#a16207" stroke-width="2"/>
  <circle cx="134" cy="66" r="6" fill="#facc15"/>
  <line x1="110" y1="120" x2="110" y2="60" stroke="#15803d" stroke-width="2"/>
  <circle cx="110" cy="58" r="5" fill="#22c55e"/>
  <ellipse cx="110" cy="120" rx="14" ry="10" fill="#86efac" stroke="#166534"/>
  <text x="170" y="80" font-size="8" fill="#9d174d">petal</text>
  <text x="30" y="70" font-size="8" fill="#a16207">stamen</text>
  <text x="118" y="52" font-size="8" fill="#15803d">carpel</text>
  <text x="130" y="135" font-size="8" fill="#166534">ovary</text>
</svg>
\`\`\`

A typical flower has four sets of parts, from outside inwards:

- **Sepals** — small green leaf-like parts that **protect the flower bud** before it opens.
- **Petals** — often brightly coloured and scented; they **attract insects** for pollination.
- **Stamens (the male part)** — each stamen has an **anther** (which makes **pollen grains**, containing the male sex cells) on a stalk called the **filament**.
- **Carpel / pistil (the female part)** — made of the **stigma** (a sticky top that receives pollen), the **style** (a stalk), and the **ovary** (which contains the **ovules**, each with a female sex cell). After fertilisation the ovules become **seeds** and the ovary becomes the **fruit**.

## Pollination

**Pollination** is the **transfer of pollen from an anther (male) to a stigma (female)**.

- **Self-pollination** — pollen goes from the anther to the stigma of the **same** flower (or same plant).
- **Cross-pollination** — pollen is carried to the stigma of a **different** flower of the same kind.

Pollen is carried by **agents**:
- **Insects** (bees, butterflies) — attracted by bright, scented petals and nectar (insect-pollinated flowers).
- **Wind** — carries light pollen from flowers with small, dull petals and feathery stigmas (wind-pollinated flowers).

## Fertilisation and the making of seeds

After pollination:

1. The pollen grain on the stigma grows a **pollen tube** down the style to the ovary.
2. The **male sex cell** travels down the tube and joins with the **female sex cell** in an ovule — this joining is **fertilisation**.
3. The fertilised ovule develops into a **seed**; the ovary grows into the **fruit**, which protects the seeds and helps to spread them.

The seed can later **germinate** to grow into a new flowering plant — completing the life cycle.

## Common errors and misconceptions

- **Confusing pollination and fertilisation** — **pollination** is the *transfer of pollen* from anther to stigma; **fertilisation** is the later *joining of the male and female sex cells* inside the ovule. Pollination comes first.
- **Mixing up the male and female parts** — the **stamen** (anther + filament) is **male**; the **carpel/pistil** (stigma, style, ovary) is **female**.
- **Thinking the ovary becomes the seed** — after fertilisation the **ovule** becomes the **seed**, while the **ovary** becomes the **fruit**.
- **Believing all flowers are insect-pollinated** — wind-pollinated flowers exist too; they are small and dull with feathery stigmas and light pollen.`,
      workedExample: `**Task.** (a) Name the male and female parts of a flower and their sub-parts. (b) Explain the difference between pollination and fertilisation. (c) What happens to the ovule and the ovary after fertilisation?

**Part (a) — the male and female parts**
- The **male part** is the **stamen**, made of the **anther** (which produces **pollen grains**) on a stalk, the **filament**.
- The **female part** is the **carpel (pistil)**, made of the **stigma** (sticky top that receives pollen), the **style** (stalk), and the **ovary** (which contains the **ovules**).

**Part (b) — pollination vs fertilisation**
- **Pollination** is the **transfer of pollen from an anther to a stigma** (by insects or wind). It happens **outside**, on the surface of the stigma.
- **Fertilisation** is the **joining of the male sex cell (from the pollen) with the female sex cell in the ovule**, which happens **inside** the ovary after a pollen tube has grown down. Pollination comes first; fertilisation follows.

**Part (c) — after fertilisation**
- Each fertilised **ovule develops into a seed**.
- The **ovary grows into the fruit**, which protects the seeds and helps to spread them.
The seed can later germinate into a new plant.

**Conclusion:** the stamen (anther + filament) is male and the carpel (stigma + style + ovary) is female; pollination transfers pollen to the stigma, fertilisation is the joining of the sex cells in the ovule, and afterwards the ovule becomes a seed and the ovary becomes the fruit.`,
      teachingTip:
        "The classic exam trap is confusing pollination and fertilisation — nail the sequence: pollination (pollen moves to the stigma) comes first and is on the outside; fertilisation (sex cells join in the ovule) comes second and is inside the ovary. Use a large real flower (hibiscus works well) to point out sepals, petals, stamen and carpel. Reinforce the outcome: ovule → seed, ovary → fruit, which ties the flower back to seeds and the next generation.",
      quiz: [
        {
          prompt: "The part of a flowering plant responsible for reproduction is the…",
          options: ["flower", "root", "stem", "leaf"],
          correctIndex: 0,
          explanation: "The flower is the reproductive organ.",
        },
        {
          prompt: "The small green parts that protect the flower bud are the…",
          options: ["sepals", "petals", "stamens", "carpels"],
          correctIndex: 0,
          explanation: "Sepals protect the bud.",
        },
        {
          prompt: "The often brightly coloured parts that attract insects are the…",
          options: ["petals", "sepals", "anthers", "ovules"],
          correctIndex: 0,
          explanation: "Petals attract pollinators.",
        },
        {
          prompt: "The male part of a flower is the…",
          options: ["stamen", "carpel", "sepal", "ovary"],
          correctIndex: 0,
          explanation: "The stamen is the male part.",
        },
        {
          prompt: "The part of the stamen that makes pollen is the…",
          options: ["anther", "filament", "stigma", "style"],
          correctIndex: 0,
          explanation: "The anther produces pollen grains.",
        },
        {
          prompt: "The female part of a flower is the…",
          options: ["carpel (pistil)", "stamen", "petal", "sepal"],
          correctIndex: 0,
          explanation: "The carpel/pistil is the female part.",
        },
        {
          prompt: "The sticky top of the carpel that receives pollen is the…",
          options: ["stigma", "style", "ovary", "anther"],
          correctIndex: 0,
          explanation: "The stigma receives pollen.",
        },
        {
          prompt: "The part of the carpel that contains the ovules is the…",
          options: ["ovary", "stigma", "style", "anther"],
          correctIndex: 0,
          explanation: "The ovary holds the ovules.",
        },
        {
          prompt: "Pollination is the transfer of pollen from an anther to a…",
          options: ["stigma", "petal", "sepal", "root"],
          correctIndex: 0,
          explanation: "Pollen moves from anther to stigma.",
        },
        {
          prompt: "When pollen goes to the stigma of the same flower, it is…",
          options: ["self-pollination", "cross-pollination", "fertilisation", "germination"],
          correctIndex: 0,
          explanation: "Same flower = self-pollination.",
        },
        {
          prompt: "When pollen is carried to a different flower of the same kind, it is…",
          options: ["cross-pollination", "self-pollination", "transpiration", "respiration"],
          correctIndex: 0,
          explanation: "Different flower = cross-pollination.",
        },
        {
          prompt: "Which agent pollinates flowers with bright, scented petals and nectar?",
          options: ["insects", "wind only", "water only", "fungi"],
          correctIndex: 0,
          explanation: "Insects are attracted by colour, scent and nectar.",
        },
        {
          prompt: "Flowers with small, dull petals and feathery stigmas are usually pollinated by…",
          options: ["wind", "insects", "birds only", "fungi"],
          correctIndex: 0,
          explanation: "Wind carries their light pollen.",
        },
        {
          prompt: "Fertilisation is the joining of the male sex cell with the…",
          options: ["female sex cell in the ovule", "stigma", "petal", "sepal"],
          correctIndex: 0,
          explanation: "The sex cells join in the ovule.",
        },
        {
          prompt: "After pollination, the pollen grain grows a … down the style.",
          options: ["pollen tube", "root", "leaf", "stem"],
          correctIndex: 0,
          explanation: "A pollen tube carries the male cell to the ovule.",
        },
        {
          prompt: "After fertilisation, the ovule develops into a…",
          options: ["seed", "petal", "leaf", "root"],
          correctIndex: 0,
          explanation: "The fertilised ovule becomes a seed.",
        },
        {
          prompt: "After fertilisation, the ovary develops into the…",
          options: ["fruit", "stem", "sepal", "stigma"],
          correctIndex: 0,
          explanation: "The ovary becomes the fruit.",
        },
        {
          prompt: "The fruit helps to protect the seeds and to…",
          options: ["spread them", "photosynthesise", "absorb water", "make pollen"],
          correctIndex: 0,
          explanation: "Fruit protects and disperses seeds.",
        },
        {
          prompt: "Which comes FIRST?",
          options: ["pollination", "fertilisation", "seed formation", "germination"],
          correctIndex: 0,
          explanation: "Pollination precedes fertilisation.",
        },
        {
          prompt: "A seed can later … to grow into a new plant.",
          options: ["germinate", "pollinate", "transpire", "photosynthesise only"],
          correctIndex: 0,
          explanation: "Germination starts the new plant.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the male part of a flower and its two sub-parts, and the female part and its three sub-parts.",
          answerKey:
            "Male part: the stamen — anther and filament. Female part: the carpel/pistil — stigma, style and ovary. Award marks for the correct male and female parts with their sub-parts.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which best defines pollination?",
          options: [
            "the transfer of pollen from an anther to a stigma",
            "the joining of the sex cells",
            "the growth of a seed into a plant",
            "the making of food in the leaf",
          ],
          correctIndex: 0,
          answerKey: "Pollination is the transfer of pollen from anther to stigma.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between pollination and fertilisation.",
          answerKey:
            "Pollination is the transfer of pollen from an anther to a stigma (by insects or wind), on the outside; fertilisation is the joining of the male sex cell (from the pollen, via a pollen tube) with the female sex cell in the ovule, inside the ovary. Pollination happens first, then fertilisation. Award marks for both definitions and the order.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe what happens in a flower from pollination through to the formation of a seed and fruit.",
          answerKey:
            "A strong answer describes: pollination transfers pollen from an anther to a stigma (by insects or wind); the pollen grain grows a pollen tube down the style to the ovary; the male sex cell travels down the tube and joins the female sex cell in an ovule (fertilisation); the fertilised ovule then develops into a seed, and the ovary develops into the fruit, which protects and helps disperse the seeds; the seed can later germinate into a new plant. Award marks for the correct sequence: pollination → pollen tube → fertilisation → ovule becomes seed and ovary becomes fruit.",
          marks: 6,
        },
      ],
    },
  ],
};
