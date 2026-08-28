import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 11,
// Semester Two, Period VI: Vertebrates (Fishes, Amphibians and Reptiles).
// Topics follow the CONTENTS items: (1) vertebrates and invertebrates — general
// characteristics of the phylum Chordata; (2) fishes (jawless, cartilaginous
// and bony; adaptation, locomotion, respiration and economic importance); (3)
// amphibians (the frog, its features and life cycle); (4) reptiles (the lizard,
// internal fertilization and the amniotic egg).
export const biologyG11P6: PeriodContent = {
  grade: 11,
  number: 6,
  title: "Vertebrates: Fishes, Amphibians and Reptiles",
  summary:
    "Period VI of the MoE Grade 11 Biology syllabus. Learners study the phylum Chordata and the difference between vertebrates and invertebrates, then the three groups of fishes and their adaptations, the amphibians using the frog and its life cycle, and the reptiles using the lizard, the amniotic egg and their adaptation to life on dry land.",
  topics: [
    // source: OpenStax — Biology 2e, 29.1 Chordates (https://openstax.org/books/biology-2e/pages/29-1-chordates)
    {
      slug: "vertebrates-and-invertebrates",
      title: "Vertebrates and the Phylum Chordata",
      objective:
        "By the end of the topic, learners should be able to state the characteristics of chordates and explain the differences between vertebrates and invertebrates.",
      estimatedMinutes: 100,
      notes: `## The phylum Chordata

- **Chordates** belong to the phylum **Chordata**. **Vertebrates** (animals with a backbone) are the largest group of chordates.

## The four (five) chordate characteristics

At some stage of life, all chordates have:

1. **Notochord** — a flexible supporting rod along the back (in vertebrates it is replaced by the **backbone/vertebral column**).
2. **Dorsal hollow nerve cord** — runs along the back; becomes the **brain and spinal cord**.
3. **Pharyngeal slits (gill slits)** — openings in the throat; become **gills** in fish.
4. **Post-anal tail** — a tail extending beyond the anus; aids **movement/balance**.
5. (An **endostyle/thyroid** — a gland that helps feeding/metabolism.)

## Vertebrates vs invertebrates

| Feature | Vertebrates | Invertebrates |
| --- | --- | --- |
| **Backbone (vertebral column)** | present | absent |
| **Cranium (skull)** protecting the brain | present | absent |
| **Endoskeleton** of bone/cartilage | present | usually none (some have exoskeletons/shells) |
| **Nervous system** | dorsal nerve cord + well-developed brain | varied, often simpler |
| Examples | fish, frogs, lizards, birds, mammals | insects, worms, snails, jellyfish, crabs |

- **Vertebrates** have a backbone and a cranium; **invertebrates** do not.

## The main vertebrate classes

| Class | Example | Feature |
| --- | --- | --- |
| **Fish** | tilapia, shark | gills, fins, scales |
| **Amphibians** | frog, toad | moist skin, larva in water |
| **Reptiles** | lizard, snake | dry scaly skin, amniotic egg |
| **Birds (Aves)** | fowl, eagle | feathers, wings |
| **Mammals** | goat, human | hair, mammary glands |

## Common errors and misconceptions

- **"All animals have a backbone"** — most animals are **invertebrates** with no backbone.
- **"Invertebrates are chordates"** — a few are, but the vertebrate chordates are the ones with a **backbone and cranium**.
- **"The notochord is the backbone"** — in vertebrates the notochord is **replaced** by the vertebral column.
- **"Insects are vertebrates"** — insects are **invertebrates** (they have an exoskeleton, no backbone).`,
      workedExample: `**Task.** A student is given a shark, a crab, a frog and an earthworm. (a) Group them into vertebrates and invertebrates. (b) State the key feature that separates the two groups. (c) Name two other chordate characteristics besides the backbone.

**Solution**

(a) Grouping:
- **Vertebrates (have a backbone):** the **shark** and the **frog**.
- **Invertebrates (no backbone):** the **crab** and the **earthworm**.

(b) The key feature is the **backbone (vertebral column)** and a **cranium (skull) protecting the brain**: vertebrates have them; invertebrates do not.

(c) Two other chordate characteristics (present at some stage of life):
- a **dorsal hollow nerve cord** (which becomes the brain and spinal cord);
- **pharyngeal (gill) slits** in the throat (and a **post-anal tail** is another).

**Answer:** shark and frog are vertebrates, crab and earthworm are invertebrates; the backbone/cranium separates them; other chordate features include a dorsal hollow nerve cord, pharyngeal slits and a post-anal tail.`,
      quiz: [
        { prompt: "Vertebrates are animals that have a", options: ["backbone", "shell only", "exoskeleton only", "no nervous system"], correctIndex: 0, explanation: "A vertebral column defines vertebrates." },
        { prompt: "Chordates belong to the phylum", options: ["Chordata", "Arthropoda", "Annelida", "Mollusca"], correctIndex: 0, explanation: "Chordates are in phylum Chordata." },
        { prompt: "The flexible supporting rod in chordate embryos is the", options: ["notochord", "backbone", "cranium", "tail"], correctIndex: 0, explanation: "The notochord supports the body." },
        { prompt: "In vertebrates the notochord is replaced by the", options: ["vertebral column (backbone)", "gills", "skin", "tail"], correctIndex: 0, explanation: "The backbone replaces the notochord." },
        { prompt: "The dorsal hollow nerve cord develops into the", options: ["brain and spinal cord", "backbone", "gills", "skin"], correctIndex: 0, explanation: "It becomes the central nervous system." },
        { prompt: "Pharyngeal slits become ... in fish", options: ["gills", "fins", "scales", "lungs"], correctIndex: 0, explanation: "Gill slits form the gills." },
        { prompt: "Animals without a backbone are called", options: ["invertebrates", "vertebrates", "chordates only", "mammals"], correctIndex: 0, explanation: "Invertebrates lack a backbone." },
        { prompt: "Which is an invertebrate?", options: ["crab", "frog", "lizard", "fish"], correctIndex: 0, explanation: "A crab has no backbone." },
        { prompt: "Which is a vertebrate?", options: ["fish", "earthworm", "snail", "insect"], correctIndex: 0, explanation: "Fish have a backbone." },
        { prompt: "The bony structure protecting the brain in vertebrates is the", options: ["cranium (skull)", "backbone", "tail", "gill"], correctIndex: 0, explanation: "The cranium encloses the brain." },
        { prompt: "A post-anal tail is a tail that", options: ["extends beyond the anus", "is inside the body", "is a leg", "is a fin only"], correctIndex: 0, explanation: "It extends past the anus." },
        { prompt: "Which class has feathers and wings?", options: ["birds", "fish", "amphibians", "reptiles"], correctIndex: 0, explanation: "Birds have feathers." },
        { prompt: "Mammals are characterised by", options: ["hair and mammary glands", "feathers", "gills", "scales only"], correctIndex: 0, explanation: "Hair and milk glands mark mammals." },
        { prompt: "Insects are classified as", options: ["invertebrates", "vertebrates", "fish", "amphibians"], correctIndex: 0, explanation: "Insects have no backbone." },
        { prompt: "Vertebrates have an internal skeleton called an", options: ["endoskeleton", "exoskeleton", "shell", "notochord only"], correctIndex: 0, explanation: "Bone/cartilage endoskeleton." },
        { prompt: "Which pair are both vertebrates?", options: ["lizard and goat", "crab and snail", "worm and insect", "jellyfish and snail"], correctIndex: 0, explanation: "Lizards and goats have backbones." },
        { prompt: "The largest group of chordates is the", options: ["vertebrates", "jellyfish", "insects", "worms"], correctIndex: 0, explanation: "Vertebrates dominate the phylum." },
        { prompt: "Which feature do all chordates share at some life stage?", options: ["a notochord", "feathers", "hair", "a shell"], correctIndex: 0, explanation: "The notochord is a chordate hallmark." },
        { prompt: "Amphibians, reptiles, birds and mammals are all", options: ["vertebrate classes", "invertebrates", "plants", "fungi"], correctIndex: 0, explanation: "They are classes of vertebrates." },
        { prompt: "Which statement is TRUE?", options: ["Most animals are invertebrates", "All animals have backbones", "Insects are vertebrates", "Vertebrates have no skull"], correctIndex: 0, explanation: "Invertebrates are the majority of animals." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State three characteristics of chordates.", answerKey: "Any three: notochord; dorsal hollow nerve cord; pharyngeal (gill) slits; post-anal tail; endostyle/thyroid. 1 mark each.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which feature is present in vertebrates but absent in invertebrates?", options: ["A backbone/vertebral column", "A cell membrane", "Cytoplasm", "DNA"], correctIndex: 0, answerKey: "The backbone distinguishes vertebrates. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Give two differences between vertebrates and invertebrates.", answerKey: "Any two: vertebrates have a backbone/vertebral column, invertebrates do not; vertebrates have a cranium/skull; vertebrates have an internal bony/cartilage endoskeleton; vertebrates have a well-developed brain/dorsal nerve cord. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Name the five classes of vertebrates and give one example of each.", answerKey: "Fish (tilapia/shark); amphibians (frog/toad); reptiles (lizard/snake); birds (fowl/eagle); mammals (goat/human). 1 mark per class+example (max 5).", marks: 5 },
        { type: "ESSAY", prompt: "Describe the characteristics of the phylum Chordata and explain how vertebrates differ from invertebrates, giving examples.", answerKey: "Chordate features: notochord, dorsal hollow nerve cord, pharyngeal slits, post-anal tail (present at some stage) (up to 6). Vertebrates: backbone, cranium, endoskeleton, developed brain, e.g. fish/frog/lizard/bird/mammal (up to 5). Invertebrates: no backbone, e.g. insects/worms/snails/crabs (up to 4).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 29.2 Fishes (https://openstax.org/books/biology-2e/pages/29-2-fishes)
    {
      slug: "fishes",
      title: "Fishes and Their Adaptations",
      objective:
        "By the end of the topic, learners should be able to describe the general characteristics of fishes, distinguish the three groups, and explain their adaptations, respiration and economic importance.",
      estimatedMinutes: 120,
      notes: `## General characteristics of fishes

- **Fishes** are aquatic vertebrates that:
  - live in water and breathe using **gills**;
  - have a **streamlined (fusiform) body** covered in **scales** and **mucus**;
  - move using **fins** and a muscular **tail**;
  - are usually **ectothermic (cold-blooded)**;
  - have a **lateral line** to detect vibrations in water.

## The three groups of fishes

| Group | Skeleton | Jaws | Examples |
| --- | --- | --- | --- |
| **Jawless fish** (Agnatha) | cartilage | no jaws | lamprey, hagfish |
| **Cartilaginous fish** (Chondrichthyes) | cartilage | jaws present | shark, ray, skate |
| **Bony fish** (Osteichthyes) | bone | jaws present | tilapia, tuna, salmon |

- **Jawless fish** — no jaws and no paired fins; use a rasping/sucking mouth.
- **Cartilaginous fish** — skeleton of **cartilage**; mostly predators; **internal fertilization**.
- **Bony fish** — skeleton of **bone**; the largest group (~30,000 species); have a **swim bladder** (gas-filled sac) for buoyancy and an **operculum** (gill cover).

## Respiration by gills

- Water is taken in through the **mouth** and passed over the **gills**.
- **Gills** have many thin filaments with a rich blood supply; **oxygen** passes from the water into the blood and **carbon dioxide** passes out.
- Water then leaves through the gill openings (past the **operculum** in bony fish).

\`\`\`svg Water flow over a fish gill
<svg viewBox="0 0 240 100" role="img" aria-label="Water entering mouth and passing over gills">
  <path d="M20,50 q40,-30 110,0 q-40,30 -110,0 Z" fill="#bfdbfe" fill-opacity="0.5" stroke="currentColor"/>
  <path d="M100,35 q15,15 0,30" fill="none" stroke="currentColor"/><path d="M110,35 q15,15 0,30" fill="none" stroke="currentColor"/>
  <line x1="30" y1="50" x2="14" y2="50" stroke="currentColor"/><text x="6" y="53" font-size="7" fill="currentColor">in</text>
  <line x1="128" y1="50" x2="150" y2="50" stroke="currentColor"/><text x="152" y="53" font-size="7" fill="currentColor">out</text>
  <text x="70" y="90" font-size="8" text-anchor="middle" fill="currentColor">water over gills (O2 in, CO2 out)</text>
</svg>
\`\`\`

## Adaptations for life in water

- **Streamlined body** and mucus reduce drag while swimming.
- **Fins** (paired and unpaired) provide movement, steering and balance; the **tail fin** drives the fish forward.
- **Swim bladder** (bony fish) controls buoyancy so the fish stays at a depth without sinking.
- **Gills** for extracting dissolved oxygen; **lateral line** to sense movement and predators.

## Economic importance of fish

- A major source of **protein food** and income (fishing industry).
- Provide **fish oil** (rich in vitamins), **fish meal** for animal feed and **fertiliser**.
- Support **aquaculture (fish farming)**, employment and trade.

## Common errors and misconceptions

- **"Fish breathe air with lungs"** — fish breathe **dissolved oxygen** in water using **gills**.
- **"All fish have bony skeletons"** — sharks and rays have **cartilage** skeletons.
- **"Jawless fish have jaws"** — Agnatha means "without jaws".
- **"The swim bladder is for breathing"** — the swim bladder controls **buoyancy**, not respiration.`,
      workedExample: `**Task.** A fisherman catches a tilapia and a shark. (a) To which fish group does each belong and how do their skeletons differ? (b) Explain how a tilapia obtains oxygen. (c) State two ways fish are economically important.

**Solution**

(a) Grouping and skeletons:
- The **tilapia** is a **bony fish (Osteichthyes)** — its skeleton is made of **bone**.
- The **shark** is a **cartilaginous fish (Chondrichthyes)** — its skeleton is made of **cartilage**.

(b) How the tilapia obtains oxygen:
- It takes **water in through its mouth** and passes it over its **gills**.
- The gill filaments have a rich **blood supply**; **oxygen** dissolved in the water **diffuses into the blood** and **carbon dioxide** diffuses out.
- The water then leaves past the **operculum** (gill cover).

(c) Two ways fish are economically important:
- They are a major source of **protein food** and income through fishing and **fish farming (aquaculture)**.
- They provide **fish oil** (vitamins) and **fish meal** for animal feed/fertiliser, supporting employment and trade.

**Answer:** tilapia = bony fish (bone skeleton), shark = cartilaginous fish (cartilage skeleton); the tilapia takes water over its gills where oxygen diffuses into the blood; fish are important as protein food/income and for fish oil and meal.`,
      quiz: [
        { prompt: "Fish breathe using", options: ["gills", "lungs", "skin only", "spiracles"], correctIndex: 0, explanation: "Gills extract dissolved oxygen." },
        { prompt: "The streamlined body of a fish helps it to", options: ["reduce drag while swimming", "breathe air", "walk on land", "fly"], correctIndex: 0, explanation: "A fusiform shape cuts water resistance." },
        { prompt: "Fish move mainly using", options: ["fins and a tail", "legs", "wings", "cilia"], correctIndex: 0, explanation: "Fins and the tail drive movement." },
        { prompt: "Jawless fish belong to the group", options: ["Agnatha", "Chondrichthyes", "Osteichthyes", "Amphibia"], correctIndex: 0, explanation: "Agnatha means without jaws." },
        { prompt: "Sharks and rays are", options: ["cartilaginous fish", "bony fish", "jawless fish", "amphibians"], correctIndex: 0, explanation: "Their skeleton is cartilage." },
        { prompt: "Tilapia and tuna are", options: ["bony fish", "cartilaginous fish", "jawless fish", "reptiles"], correctIndex: 0, explanation: "They have bony skeletons." },
        { prompt: "The skeleton of a shark is made of", options: ["cartilage", "bone", "chitin", "keratin"], correctIndex: 0, explanation: "Chondrichthyes have cartilage." },
        { prompt: "The gas-filled sac that controls buoyancy in bony fish is the", options: ["swim bladder", "operculum", "lateral line", "gill"], correctIndex: 0, explanation: "The swim bladder controls buoyancy." },
        { prompt: "The gill cover of a bony fish is the", options: ["operculum", "swim bladder", "fin", "scale"], correctIndex: 0, explanation: "The operculum covers the gills." },
        { prompt: "The lateral line helps a fish to", options: ["detect vibrations/movement in water", "breathe air", "digest food", "see colour"], correctIndex: 0, explanation: "It senses water movement." },
        { prompt: "During respiration, oxygen passes", options: ["from the water into the blood at the gills", "from blood into water", "from air into lungs", "into the swim bladder"], correctIndex: 0, explanation: "O2 diffuses from water into blood." },
        { prompt: "Which group has no jaws and no paired fins?", options: ["jawless fish (Agnatha)", "bony fish", "cartilaginous fish", "reptiles"], correctIndex: 0, explanation: "Lampreys and hagfish lack jaws." },
        { prompt: "Fish are usually", options: ["ectothermic (cold-blooded)", "endothermic (warm-blooded)", "without blood", "air-breathing"], correctIndex: 0, explanation: "Body temperature follows the water." },
        { prompt: "The largest group of fishes is the", options: ["bony fish", "jawless fish", "cartilaginous fish", "lungfish only"], correctIndex: 0, explanation: "Osteichthyes has ~30,000 species." },
        { prompt: "An economic use of fish is", options: ["a source of protein food", "making steel", "generating electricity", "building houses"], correctIndex: 0, explanation: "Fish are a key protein food." },
        { prompt: "Fish farming is also called", options: ["aquaculture", "agriculture only", "horticulture", "silviculture"], correctIndex: 0, explanation: "Aquaculture raises fish." },
        { prompt: "Mucus on a fish's body helps by", options: ["reducing friction/drag and protecting it", "adding weight", "breathing air", "storing food"], correctIndex: 0, explanation: "Mucus reduces drag and guards the skin." },
        { prompt: "Which is TRUE?", options: ["Cartilaginous fish have a cartilage skeleton", "All fish have bone skeletons", "Fish breathe with lungs", "Jawless fish have strong jaws"], correctIndex: 0, explanation: "Sharks/rays have cartilage." },
        { prompt: "Fish oil is valued because it is rich in", options: ["vitamins", "iron nails", "plastic", "salt only"], correctIndex: 0, explanation: "Fish oil provides vitamins." },
        { prompt: "The tail fin of a fish mainly provides", options: ["forward thrust/movement", "buoyancy", "breathing", "digestion"], correctIndex: 0, explanation: "The tail drives the fish forward." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the three groups of fishes and give one example of each.", answerKey: "Jawless fish (lamprey/hagfish); cartilaginous fish (shark/ray); bony fish (tilapia/tuna). 1 mark per group+example (max 3).", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which structure controls buoyancy in a bony fish?", options: ["Swim bladder", "Operculum", "Lateral line", "Gill filament"], correctIndex: 0, answerKey: "The swim bladder controls buoyancy. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Describe how a fish carries out gas exchange at its gills.", answerKey: "Water is taken in through the mouth and passed over the gills; oxygen diffuses from the water into the blood in the gill filaments and carbon dioxide diffuses out; water leaves through the gill openings/operculum. Award for water flow + O2 in/CO2 out.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two adaptations of a fish for living in water.", answerKey: "Any two: streamlined body/mucus reduces drag; fins and tail for movement; gills for oxygen; swim bladder for buoyancy; lateral line to sense movement; scales for protection. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the general characteristics of fishes, distinguish the three groups, and discuss their economic importance.", answerKey: "Characteristics: aquatic vertebrates, gills, streamlined scaly body, fins/tail, ectothermic, lateral line (up to 5). Three groups: jawless (no jaws, cartilage), cartilaginous (cartilage, jaws, sharks), bony (bone, swim bladder, operculum, tilapia) (up to 6). Economic importance: protein food/income, fishing and aquaculture, fish oil/meal/fertiliser, employment (up to 4).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 29.3 Amphibians (https://openstax.org/books/biology-2e/pages/29-3-amphibians)
    {
      slug: "amphibians",
      title: "Amphibians: The Frog",
      objective:
        "By the end of the topic, learners should be able to state the characteristics of amphibians, describe the external features of a frog, and describe the frog's life cycle.",
      estimatedMinutes: 110,
      notes: `## General characteristics of amphibians

- **Amphibian** means "double life" — amphibians live **both in water and on land**.
- They are **tetrapods** (four-limbed vertebrates): frogs, toads, salamanders, caecilians.
- Key features:
  - **Moist, permeable skin** with mucus glands (used for **skin respiration**);
  - breathe through **skin, lungs and the lining of the mouth (buccal cavity)**;
  - **ectothermic (cold-blooded)**;
  - **external fertilization** (in most, e.g. frogs) with eggs laid in **water**;
  - go through **metamorphosis** (larva → adult).

## External features of a frog

- A **short body with no tail** in the adult; **two forelimbs** and two powerful **hind limbs** with **webbed feet** for swimming and jumping.
- **Moist smooth skin** for gas exchange; **bulging eyes** with eyelids; **external eardrums (tympanum)**; **nostrils** for breathing air.
- The frog is well adapted to both **water** (webbed feet, skin breathing) and **land** (lungs, strong legs).

## Frog vs toad

| Feature | Frog | Toad |
| --- | --- | --- |
| Skin | smooth, moist | dry, rough/warty |
| Legs | long, for leaping | shorter, for walking/hopping |
| Habitat | nearer water | can live in drier places |

## Life cycle of the frog (metamorphosis)

\`\`\`svg Frog life cycle
<svg viewBox="0 0 260 90" role="img" aria-label="Frog life cycle egg tadpole froglet adult">
  <g font-size="8" fill="currentColor" text-anchor="middle">
  <circle cx="30" cy="45" r="14" fill="#bfdbfe" stroke="currentColor"/><text x="30" y="47">eggs</text>
  <circle cx="100" cy="45" r="14" fill="#bbf7d0" stroke="currentColor"/><text x="100" y="47">tadpole</text>
  <circle cx="170" cy="45" r="16" fill="#fde68a" stroke="currentColor"/><text x="170" y="47">froglet</text>
  <circle cx="235" cy="45" r="16" fill="#fca5a5" stroke="currentColor"/><text x="235" y="47">adult</text>
  </g>
  <g stroke="currentColor"><line x1="46" y1="45" x2="84" y2="45"/><line x1="116" y1="45" x2="152" y2="45"/><line x1="188" y1="45" x2="217" y2="45"/></g>
</svg>
\`\`\`

1. **Eggs (spawn)** — laid in water and fertilised externally; covered in jelly.
2. **Tadpole (larva)** — hatches in water; has **gills**, a **tail** and a **lateral line**; feeds and swims.
3. **Froglet** — grows **legs**, **lungs** develop, the **tail shrinks**; it can move onto land.
4. **Adult frog** — breathes with lungs and skin, lives on land and in water; returns to water to breed.

This change of form from larva to adult is **metamorphosis**.

## Common errors and misconceptions

- **"Adult frogs have gills"** — **tadpoles** have gills; adult frogs breathe with **lungs and skin**.
- **"Frogs breed on dry land"** — most lay eggs in **water** with external fertilization.
- **"Frogs and toads are identical"** — frogs have smooth moist skin and long legs; toads have dry warty skin and shorter legs.
- **"Amphibian skin is dry"** — amphibian skin is **moist** and used for gas exchange.`,
      workedExample: `**Task.** A pond has frog spawn in spring. (a) List, in order, the stages the eggs pass through to become adult frogs. (b) State two features of the tadpole that suit it to water and two features of the adult that suit it to land. (c) Name the overall process.

**Solution**

(a) The stages in order:
- **Eggs (spawn)** → **tadpole (larva)** → **froglet** → **adult frog**.

(b) Features and where they suit:
- **Tadpole (water):** it has **gills** to breathe dissolved oxygen and a **tail** (plus a lateral line) for swimming.
- **Adult (land):** it has **lungs** to breathe air and **strong hind limbs** for jumping/moving on land (moist skin also helps gas exchange; webbed feet help in water).

(c) The overall change of body form from larva to adult is called **metamorphosis**.

**Answer:** eggs → tadpole → froglet → adult; the tadpole has gills and a tail for water, the adult has lungs and strong legs for land; the process is metamorphosis.`,
      quiz: [
        { prompt: "The word amphibian means", options: ["double life (water and land)", "flying animal", "cold water only", "no legs"], correctIndex: 0, explanation: "Amphibians live in water and on land." },
        { prompt: "Amphibian skin is", options: ["moist and used for gas exchange", "dry and scaly", "covered in feathers", "covered in hair"], correctIndex: 0, explanation: "Moist skin aids respiration." },
        { prompt: "Adult frogs breathe using", options: ["lungs and skin", "gills only", "gills and feathers", "a swim bladder"], correctIndex: 0, explanation: "Lungs, skin and mouth lining." },
        { prompt: "Frogs usually reproduce by", options: ["external fertilization in water", "internal fertilization on land", "budding", "binary fission"], correctIndex: 0, explanation: "Eggs are fertilised in water." },
        { prompt: "The larval stage of a frog is the", options: ["tadpole", "froglet", "adult", "spawn"], correctIndex: 0, explanation: "The tadpole is the larva." },
        { prompt: "A tadpole breathes using", options: ["gills", "lungs", "skin only", "an operculum"], correctIndex: 0, explanation: "Tadpoles have gills like fish." },
        { prompt: "The correct order of the frog life cycle is", options: ["eggs, tadpole, froglet, adult", "adult, tadpole, eggs, froglet", "tadpole, eggs, adult, froglet", "froglet, adult, eggs, tadpole"], correctIndex: 0, explanation: "Eggs → tadpole → froglet → adult." },
        { prompt: "The change from tadpole to adult is called", options: ["metamorphosis", "fertilization", "respiration", "digestion"], correctIndex: 0, explanation: "Metamorphosis is the change of form." },
        { prompt: "Frogs have webbed hind feet for", options: ["swimming", "flying", "digging only", "hearing"], correctIndex: 0, explanation: "Webbing helps swimming." },
        { prompt: "Compared with a frog, a toad has", options: ["dry, warty skin", "smoother skin", "gills as an adult", "feathers"], correctIndex: 0, explanation: "Toads have dry rough skin." },
        { prompt: "Amphibians are", options: ["ectothermic (cold-blooded)", "endothermic (warm-blooded)", "without blood", "always aquatic"], correctIndex: 0, explanation: "Their temperature follows the surroundings." },
        { prompt: "Frog eggs are laid", options: ["in water, covered in jelly", "on dry rocks", "inside the mother", "in nests of feathers"], correctIndex: 0, explanation: "Spawn is laid in water." },
        { prompt: "A tadpole loses its tail and grows legs to become a", options: ["froglet", "toad only", "fish", "reptile"], correctIndex: 0, explanation: "The froglet develops from the tadpole." },
        { prompt: "Which structure lets an adult frog breathe on land?", options: ["lungs", "gills", "swim bladder", "operculum"], correctIndex: 0, explanation: "Lungs develop for air breathing." },
        { prompt: "Amphibians are tetrapods, meaning they have", options: ["four limbs", "no limbs", "wings", "two limbs only"], correctIndex: 0, explanation: "Tetrapod = four limbs." },
        { prompt: "The tadpole senses water movement using its", options: ["lateral line", "lungs", "eardrum", "swim bladder"], correctIndex: 0, explanation: "Like fish, tadpoles have a lateral line." },
        { prompt: "Frogs must return to water to", options: ["breed (lay eggs)", "breathe air", "get warm", "grow legs"], correctIndex: 0, explanation: "Eggs need water." },
        { prompt: "Which is an amphibian?", options: ["frog", "lizard", "shark", "fowl"], correctIndex: 0, explanation: "Frogs are amphibians." },
        { prompt: "Powerful hind limbs help the adult frog to", options: ["jump on land and swim", "fly", "dig burrows only", "breathe"], correctIndex: 0, explanation: "Strong legs aid jumping and swimming." },
        { prompt: "Which statement is TRUE?", options: ["Tadpoles have gills, adults have lungs", "Adults have gills only", "Frogs breathe with feathers", "Frog skin is dry"], correctIndex: 0, explanation: "Respiration changes during metamorphosis." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State three general characteristics of amphibians.", answerKey: "Any three: live in water and on land; moist permeable skin for gas exchange; breathe by skin/lungs/mouth; ectothermic; external fertilization/eggs in water; undergo metamorphosis; tetrapods. 1 mark each.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "How does a tadpole breathe?", options: ["With gills", "With lungs", "With feathers", "With a swim bladder"], correctIndex: 0, answerKey: "Tadpoles have gills. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "List the four stages of the frog life cycle in order.", answerKey: "Eggs (spawn) → tadpole (larva) → froglet → adult frog. Full marks require correct order.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give two differences between a frog and a toad.", answerKey: "Any two: frog smooth moist skin vs toad dry warty skin; frog long legs for leaping vs toad shorter legs; frog nearer water vs toad drier habitats. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the external features of a frog and its life cycle, and explain how the frog is adapted to live both in water and on land.", answerKey: "External features: tailless body, four limbs with webbed hind feet, moist smooth skin, bulging eyes, tympanum, nostrils (up to 5). Life cycle: eggs → tadpole (gills, tail) → froglet → adult, metamorphosis (up to 5). Adaptation: webbed feet/skin breathing/lateral line for water; lungs, strong legs for land (up to 5).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 29.4 Reptiles (https://openstax.org/books/biology-2e/pages/29-4-reptiles)
    {
      slug: "reptiles",
      title: "Reptiles: The Lizard and the Amniotic Egg",
      objective:
        "By the end of the topic, learners should be able to state the characteristics of reptiles, describe the amniotic egg, and explain why reptiles are better adapted to land than amphibians.",
      estimatedMinutes: 110,
      notes: `## General characteristics of reptiles

Reptiles (lizards, snakes, crocodiles, turtles) are land vertebrates that:

- have **dry, scaly skin** made of **keratin** and waxy lipids that **reduces water loss**;
- breathe **only with lungs** (never through the skin);
- are **ectothermic (cold-blooded)** and bask in the sun to warm up;
- reproduce by **internal fertilization**;
- lay **amniotic eggs** with a leathery or hard shell **on land** (some give live birth).

## External and internal features of a lizard

- **External:** four limbs (in most), dry scaly skin, a long tail, external ears, **movable eyelids**, and a tongue used to sense the environment (with **Jacobson's organ**).
- **Internal:** a **complete digestive tract**, **lungs** for breathing, a **heart** (usually three-chambered), kidneys that conserve water, and internal reproductive organs (internal fertilization).

## The amniotic egg — the key to life on land

The **amniotic egg** contains the embryo and its own water supply inside a shell, so reptiles can breed **away from water**. It has four **extra-embryonic membranes**:

| Membrane | Function |
| --- | --- |
| **Amnion** | encloses fluid — a private "pond" that stops the embryo drying out |
| **Yolk sac** | holds the **yolk** (food) for the embryo |
| **Allantois** | stores **nitrogenous waste** and helps gas exchange |
| **Chorion** | lines the shell and allows **oxygen in and carbon dioxide out** |

- The **shell** protects the egg and (with the membranes) keeps it moist while letting gases pass.

\`\`\`svg The amniotic egg
<svg viewBox="0 0 160 120" role="img" aria-label="Amniotic egg with shell, amnion, yolk sac and allantois">
  <ellipse cx="80" cy="60" rx="70" ry="52" fill="none" stroke="currentColor" stroke-width="2"/>
  <ellipse cx="80" cy="60" rx="46" ry="34" fill="#dbeafe" fill-opacity="0.5" stroke="currentColor"/>
  <circle cx="80" cy="60" r="12" fill="#fca5a5" stroke="currentColor"/>
  <circle cx="110" cy="80" r="14" fill="#fde68a" stroke="currentColor"/>
  <g font-size="7" fill="currentColor">
  <text x="80" y="14">shell</text>
  <text x="55" y="40">amnion (fluid)</text>
  <text x="66" y="62">embryo</text>
  <text x="100" y="102">yolk sac</text>
  </g>
</svg>
\`\`\`

## Why reptiles are better adapted to dry land than amphibians

| Feature | Reptile | Amphibian |
| --- | --- | --- |
| Skin | dry, scaly, waterproof | moist, loses water easily |
| Breathing | lungs only | skin + lungs; needs moisture |
| Fertilization | internal | usually external |
| Eggs | **amniotic**, shelled, laid on land | jelly-covered, laid **in water** |

- Because reptiles have **waterproof skin**, **internal fertilization** and the **amniotic egg**, they can live and breed on **dry land**, while amphibians are tied to **moist places and water**.

## Common errors and misconceptions

- **"Reptiles breathe through their skin"** — reptiles breathe **only with lungs**; their skin is waterproof.
- **"Reptile eggs must be laid in water"** — the **amniotic egg** lets reptiles breed on **land**.
- **"Reptiles are warm-blooded"** — reptiles are **ectothermic (cold-blooded)** and bask to warm up.
- **"The amnion carries food"** — the **yolk sac** stores food; the **amnion** holds protective fluid.`,
      workedExample: `**Task.** Compare a lizard and a frog. (a) State two features of the lizard's skin and breathing that suit it to dry land. (b) Name the egg type that lets reptiles breed on land and give the function of two of its membranes. (c) Explain why a frog cannot breed far from water but a lizard can.

**Solution**

(a) The lizard is suited to dry land because:
- its skin is **dry, scaly and waterproof** (keratin), so it **loses very little water**;
- it breathes **only with lungs** (it does not need moist skin for gas exchange).

(b) The egg is the **amniotic egg**. Functions of two membranes:
- **Amnion** — encloses fluid, giving the embryo its own "pond" so it does not dry out.
- **Yolk sac** — stores the **yolk (food)** for the developing embryo. (Also: allantois stores waste/aids gas exchange; chorion allows oxygen in and carbon dioxide out.)

(c) A **frog** has **moist skin** it must keep wet, uses **external fertilization**, and lays **jelly-covered eggs that dry out**, so it must stay near **water**. A **lizard** has **waterproof skin**, **internal fertilization** and lays a **shelled amniotic egg** that carries its own water, so it can live and breed on **dry land**.

**Answer:** the lizard's dry scaly skin and lung breathing suit it to land; the amniotic egg (with amnion holding fluid and yolk sac storing food) lets reptiles breed on land; frogs need water because of moist skin, external fertilization and jelly eggs, while the lizard's waterproofing and amniotic egg free it from water.`,
      quiz: [
        { prompt: "Reptile skin is", options: ["dry and scaly (keratin)", "moist and smooth", "covered in feathers", "covered in hair"], correctIndex: 0, explanation: "Dry scaly skin reduces water loss." },
        { prompt: "Reptiles breathe using", options: ["lungs only", "gills", "skin only", "gills and lungs"], correctIndex: 0, explanation: "Reptiles breathe only with lungs." },
        { prompt: "Reptiles reproduce by", options: ["internal fertilization", "external fertilization", "budding", "binary fission"], correctIndex: 0, explanation: "Fertilization is internal." },
        { prompt: "Reptile eggs are", options: ["amniotic, laid on land", "jelly-covered, laid in water", "not shelled", "always live-born"], correctIndex: 0, explanation: "The amniotic egg is laid on land." },
        { prompt: "Reptiles are", options: ["ectothermic (cold-blooded)", "endothermic (warm-blooded)", "without blood", "always aquatic"], correctIndex: 0, explanation: "They warm up by basking." },
        { prompt: "The membrane that encloses protective fluid around the embryo is the", options: ["amnion", "yolk sac", "chorion", "allantois"], correctIndex: 0, explanation: "The amnion holds fluid." },
        { prompt: "The membrane that stores food (yolk) is the", options: ["yolk sac", "amnion", "allantois", "chorion"], correctIndex: 0, explanation: "The yolk sac supplies food." },
        { prompt: "The membrane that stores waste and aids gas exchange is the", options: ["allantois", "amnion", "yolk sac", "shell"], correctIndex: 0, explanation: "The allantois handles waste/gas." },
        { prompt: "The membrane lining the shell for gas exchange is the", options: ["chorion", "amnion", "yolk sac", "allantois"], correctIndex: 0, explanation: "The chorion allows O2 in, CO2 out." },
        { prompt: "The amniotic egg is important because it lets reptiles", options: ["breed away from water", "breathe with gills", "live only in water", "make their own food"], correctIndex: 0, explanation: "The egg carries its own water supply." },
        { prompt: "A lizard's tongue and Jacobson's organ are used to", options: ["sense the environment", "breathe", "swim", "store food"], correctIndex: 0, explanation: "They detect chemical signals." },
        { prompt: "Which feature helps reptiles conserve water?", options: ["waterproof scaly skin", "moist skin", "gills", "jelly eggs"], correctIndex: 0, explanation: "Keratin scales reduce water loss." },
        { prompt: "Reptiles warm their bodies by", options: ["basking in the sun", "shivering only", "eating sugar", "swimming deep"], correctIndex: 0, explanation: "Ectotherms bask to warm up." },
        { prompt: "Which is a reptile?", options: ["lizard", "frog", "shark", "fowl"], correctIndex: 0, explanation: "Lizards are reptiles." },
        { prompt: "Reptiles are better adapted to dry land than amphibians because they have", options: ["waterproof skin and amniotic eggs", "moist skin", "gills", "external fertilization"], correctIndex: 0, explanation: "Waterproofing and shelled eggs free them from water." },
        { prompt: "Unlike amphibians, reptiles do NOT", options: ["breathe through their skin", "have lungs", "lay eggs", "have a backbone"], correctIndex: 0, explanation: "Reptile skin is waterproof, not for breathing." },
        { prompt: "The shell of a reptile egg", options: ["protects the egg while letting gases pass", "is used for breathing by lungs", "stores food only", "makes the egg heavy"], correctIndex: 0, explanation: "It protects and allows gas exchange." },
        { prompt: "Movable eyelids and external ears are features of a", options: ["lizard", "fish", "frog tadpole", "shark"], correctIndex: 0, explanation: "Lizards have these features." },
        { prompt: "Amphibian eggs differ from reptile eggs because they are", options: ["jelly-covered and laid in water", "shelled and laid on land", "amniotic", "waterproof"], correctIndex: 0, explanation: "Amphibian eggs need water." },
        { prompt: "Which statement is TRUE?", options: ["Reptiles use internal fertilization and lay amniotic eggs", "Reptiles breathe with gills", "Reptiles have moist skin", "Reptiles lay eggs in water only"], correctIndex: 0, explanation: "Internal fertilization + amniotic egg define reptile reproduction." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State three general characteristics of reptiles.", answerKey: "Any three: dry scaly (keratin) skin reducing water loss; breathe with lungs only; ectothermic; internal fertilization; lay amniotic/shelled eggs on land. 1 mark each.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which membrane of the amniotic egg stores the food (yolk)?", options: ["Yolk sac", "Amnion", "Allantois", "Chorion"], correctIndex: 0, answerKey: "The yolk sac stores food. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Name the four membranes of the amniotic egg and give the function of any two.", answerKey: "Amnion, yolk sac, allantois, chorion. Functions (any two): amnion holds fluid; yolk sac stores food; allantois stores waste/gas exchange; chorion for gas exchange. 2 marks names, 2 marks functions.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give two reasons why reptiles are better adapted to dry land than amphibians.", answerKey: "Any two: dry waterproof scaly skin (vs moist skin); breathe with lungs only (not skin); internal fertilization; amniotic/shelled eggs laid on land (vs eggs in water). 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the characteristics of reptiles and the structure of the amniotic egg, and explain how these adapt reptiles to life on dry land.", answerKey: "Characteristics: dry scaly keratin skin, lungs only, ectothermic, internal fertilization, amniotic eggs; lizard features (up to 6). Amniotic egg: shell plus amnion (fluid), yolk sac (food), allantois (waste/gas), chorion (gas exchange) (up to 5). Adaptation: waterproof skin, internal fertilization and self-contained egg let reptiles live and breed on land, unlike water-dependent amphibians (up to 4).", marks: 15 },
      ],
    },
  ],
};
