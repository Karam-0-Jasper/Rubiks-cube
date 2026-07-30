import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 10,
// Semester One, Period II: The Hierarchy and Diversity of Living Things;
// Unicellular Organisms.
export const biologyG10P2: PeriodContent = {
  grade: 10,
  number: 2,
  title: "Diversity and Classification of Living Things",
  summary:
    "Period II of the MoE Grade 10 Biology syllabus. Learners study the diversity of life and the science of classification (taxonomy) — the seven ranks from kingdom to species and the five kingdoms of living things — then examine unicellular organisms such as Amoeba, Paramecium and Euglena and the microbes that cause disease.",
  topics: [
    {
      slug: "classification-of-living-things",
      title: "Classification and the Five Kingdoms",
      objective:
        "By the end of the topic, learners should be able to explain why living things are classified, list the seven taxonomic ranks from kingdom to species, and describe the main characteristics of the five kingdoms of living things.",
      estimatedMinutes: 150,
      notes: `## Why we classify

There are millions of kinds of living things. **Classification (taxonomy)** is the science of sorting them into groups based on **shared characteristics**. It helps scientists to:

- organise the huge diversity of life,
- identify and name organisms clearly,
- show evolutionary relationships (how organisms are related).

## The taxonomic hierarchy

Organisms are placed in a series of ranks, from the largest and most general group down to the single kind of organism. From broadest to narrowest:

**Kingdom → Phylum → Class → Order → Family → Genus → Species**

\`\`\`svg The seven ranks narrow from many organisms to one kind
<svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Inverted pyramid of taxonomic ranks">
  <g font-size="12" text-anchor="middle" fill="#064e3b">
    <rect x="20" y="15" width="340" height="24" fill="#a7f3d0" stroke="#065f46"/><text x="190" y="31">Kingdom</text>
    <rect x="45" y="41" width="290" height="24" fill="#a7f3d0" stroke="#065f46"/><text x="190" y="57">Phylum</text>
    <rect x="70" y="67" width="240" height="24" fill="#6ee7b7" stroke="#065f46"/><text x="190" y="83">Class</text>
    <rect x="95" y="93" width="190" height="24" fill="#6ee7b7" stroke="#065f46"/><text x="190" y="109">Order</text>
    <rect x="115" y="119" width="150" height="24" fill="#34d399" stroke="#065f46"/><text x="190" y="135">Family</text>
    <rect x="135" y="145" width="110" height="24" fill="#34d399" stroke="#065f46"/><text x="190" y="161">Genus</text>
    <rect x="155" y="171" width="70" height="24" fill="#10b981" stroke="#065f46"/><text x="190" y="187" fill="#fff">Species</text>
  </g>
</svg>
\`\`\`

A memory aid: "**K**ing **P**hilip **C**ame **O**ver **F**or **G**ood **S**oup."

**Species** is the smallest unit — a group of organisms that can breed together to produce fertile offspring.

## Naming organisms — binomial nomenclature

Each species has a two-part scientific name (the **binomial system**, devised by Carl Linnaeus): the **genus** (capitalised) followed by the **species** (lower case), both in italics. For example, humans are *Homo sapiens*.

## The five kingdoms

| Kingdom | Cells | Key features | Examples |
|---|---|---|---|
| **Monera** | prokaryotic, unicellular | no true nucleus | bacteria |
| **Protista** | eukaryotic, mostly unicellular | simple, aquatic | Amoeba, Paramecium, Euglena |
| **Fungi** | eukaryotic | absorb food, have cell walls of chitin | mushrooms, moulds, yeast |
| **Plantae** | eukaryotic, multicellular | make food by photosynthesis | trees, ferns, mosses |
| **Animalia** | eukaryotic, multicellular | eat food, usually move | insects, fish, humans |

## Where do viruses fit?

**Viruses** sit on the border between living and non-living. They have genetic material and can reproduce — but **only inside a host cell**. Outside a host they show no signs of life, so most biologists do not place them in any kingdom.`,
      workedExample: `**Task.** Classify the domestic cat, whose scientific name is *Felis catus*, and answer the questions below.

The full classification of the cat is:

- **Kingdom:** Animalia (it eats food and moves)
- **Phylum:** Chordata (it has a backbone)
- **Class:** Mammalia (it has fur and feeds its young milk)
- **Order:** Carnivora (it is a flesh-eater)
- **Family:** Felidae (the cat family)
- **Genus:** *Felis*
- **Species:** *catus*

**Questions and answers**

1. *Which is the broadest group the cat belongs to?* → **Kingdom** (Animalia); it contains the greatest variety of organisms.
2. *Which is the narrowest?* → **Species** (*catus*); it contains only one kind of organism.
3. *Write the cat's scientific name correctly.* → *Felis catus* — genus capitalised, species lower case, both in italics.
4. *Why is the cat placed in Animalia and not Plantae?* → It cannot make its own food by photosynthesis; it takes in food, and it moves — the defining features of animals.`,
      teachingTip:
        "Learners memorise the seven ranks but forget the order under exam pressure. Teach the mnemonic 'King Philip Came Over For Good Soup' and have them write both the mnemonic and the ranks side by side. For the kingdoms, anchor each to a local example (cassava = Plantae, palm-wine yeast = Fungi, the bacteria that spoil rice = Monera) so the abstract categories become concrete.",
      quiz: [
        {
          prompt: "The science of classifying living things is called…",
          options: ["taxonomy", "ecology", "genetics", "anatomy"],
          correctIndex: 0,
          explanation: "Taxonomy is the naming and grouping of organisms by shared features.",
        },
        {
          prompt: "Which is the correct order of taxonomic ranks from largest to smallest?",
          options: [
            "Kingdom, Phylum, Class, Order, Family, Genus, Species",
            "Species, Genus, Family, Order, Class, Phylum, Kingdom",
            "Kingdom, Class, Phylum, Family, Order, Genus, Species",
            "Phylum, Kingdom, Order, Class, Genus, Family, Species",
          ],
          correctIndex: 0,
          explanation: "The ranks run Kingdom → Phylum → Class → Order → Family → Genus → Species.",
        },
        {
          prompt: "The smallest unit of classification is the…",
          options: ["species", "genus", "kingdom", "family"],
          correctIndex: 0,
          explanation: "A species is the narrowest group — organisms that breed to give fertile young.",
        },
        {
          prompt: "How many kingdoms are in the five-kingdom system?",
          options: ["Five", "Three", "Seven", "Two"],
          correctIndex: 0,
          explanation: "Monera, Protista, Fungi, Plantae and Animalia — five kingdoms.",
        },
        {
          prompt: "Bacteria belong to which kingdom?",
          options: ["Monera", "Protista", "Fungi", "Animalia"],
          correctIndex: 0,
          explanation: "Bacteria are prokaryotic and are placed in kingdom Monera.",
        },
        {
          prompt: "Which kingdom contains organisms that make their own food by photosynthesis?",
          options: ["Plantae", "Animalia", "Fungi", "Monera"],
          correctIndex: 0,
          explanation: "Plants (Plantae) photosynthesise to make their own food.",
        },
        {
          prompt: "Mushrooms, moulds and yeast belong to kingdom…",
          options: ["Fungi", "Plantae", "Protista", "Monera"],
          correctIndex: 0,
          explanation: "These absorb food and have chitin cell walls — kingdom Fungi.",
        },
        {
          prompt: "Amoeba and Paramecium are placed in kingdom…",
          options: ["Protista", "Animalia", "Fungi", "Monera"],
          correctIndex: 0,
          explanation: "They are eukaryotic, mostly unicellular protists.",
        },
        {
          prompt: "In the name Homo sapiens, the word 'Homo' is the…",
          options: ["genus", "species", "family", "kingdom"],
          correctIndex: 0,
          explanation: "The first, capitalised part of a binomial name is the genus.",
        },
        {
          prompt: "The two-part naming system for species is called…",
          options: ["binomial nomenclature", "the periodic system", "cell theory", "the food chain"],
          correctIndex: 0,
          explanation: "Binomial nomenclature gives each species a genus + species name.",
        },
        {
          prompt: "Why are viruses NOT usually placed in any kingdom?",
          options: [
            "They can only reproduce inside a host cell",
            "They are too large to classify",
            "They photosynthesise",
            "They have true nuclei",
          ],
          correctIndex: 0,
          explanation: "Viruses show no life outside a host, so they straddle living/non-living.",
        },
        {
          prompt: "A group of organisms that can breed to produce fertile offspring is a…",
          options: ["species", "genus", "phylum", "class"],
          correctIndex: 0,
          explanation: "This is the biological definition of a species.",
        },
        {
          prompt: "Which kingdom has multicellular organisms that eat food and usually move?",
          options: ["Animalia", "Plantae", "Fungi", "Protista"],
          correctIndex: 0,
          explanation: "Animals take in food and typically move — kingdom Animalia.",
        },
        {
          prompt: "Prokaryotic cells, found in Monera, are distinguished by having…",
          options: ["no true nucleus", "a large vacuole", "chloroplasts", "chitin walls"],
          correctIndex: 0,
          explanation: "Prokaryotes lack a membrane-bound nucleus.",
        },
        {
          prompt: "Which rank comes immediately below Class?",
          options: ["Order", "Family", "Phylum", "Genus"],
          correctIndex: 0,
          explanation: "The sequence is Class → Order → Family.",
        },
        {
          prompt: "How should a scientific name be written?",
          options: [
            "Genus capitalised, species lower case, both italic",
            "Both words capitalised",
            "Both words lower case, no italics",
            "Species capitalised, genus lower case",
          ],
          correctIndex: 0,
          explanation: "Convention: italic, capital genus, small species.",
        },
        {
          prompt: "One key purpose of classification is to…",
          options: [
            "show how organisms are related",
            "increase the number of species",
            "make organisms grow faster",
            "remove viruses from nature",
          ],
          correctIndex: 0,
          explanation: "Classification reveals evolutionary relationships among organisms.",
        },
        {
          prompt: "Which kingdom's members have cell walls made of chitin?",
          options: ["Fungi", "Plantae", "Animalia", "Monera"],
          correctIndex: 0,
          explanation: "Fungal cell walls are made of chitin, not cellulose.",
        },
        {
          prompt: "Which is broader: a phylum or a family?",
          options: ["Phylum", "Family", "They are equal", "Neither is a rank"],
          correctIndex: 0,
          explanation: "Phylum is near the top; family is much lower and narrower.",
        },
        {
          prompt: "The scientist who devised the modern naming system was…",
          options: ["Carl Linnaeus", "Charles Darwin", "Robert Hooke", "Louis Pasteur"],
          correctIndex: 0,
          explanation: "Linnaeus introduced binomial nomenclature.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "List the seven taxonomic ranks in order from the broadest to the narrowest.",
          answerKey:
            "Kingdom, Phylum, Class, Order, Family, Genus, Species. Award full marks only if all seven are correct AND in order; deduct one mark per misplacement.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the five kingdoms and give one example organism for each.",
          answerKey:
            "Monera – bacteria; Protista – Amoeba/Paramecium/Euglena; Fungi – mushroom/yeast/mould; Plantae – any named plant; Animalia – any named animal. Award a mark per kingdom correctly named with a valid example (max 5).",
          marks: 5,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which feature best distinguishes kingdom Plantae from kingdom Animalia?",
          options: [
            "Plants make their own food by photosynthesis",
            "Plants are unicellular",
            "Plants have no cells",
            "Plants cannot reproduce",
          ],
          correctIndex: 0,
          answerKey: "Plants are autotrophs (photosynthetic); animals must take in food.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain why viruses are difficult to classify as living or non-living.",
          answerKey:
            "Viruses have genetic material and can reproduce, which are features of life, but only inside a host cell; outside a host they are inert with no metabolism. This dual nature places them on the border. Award marks for both the 'living' evidence and the 'non-living' evidence.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Discuss the importance of classifying living things, and explain how the binomial naming system avoids confusion caused by common names.",
          answerKey:
            "A strong answer covers: classification organises biodiversity, aids identification, and reveals evolutionary relationships. On naming: common names vary by language and region (one animal has many local names, and one name may refer to different animals), whereas the binomial name is unique, universal and precise (genus + species, italic). Award marks for at least two purposes of classification and a clear explanation of how binomial names remove ambiguity.",
          marks: 5,
        },
      ],
    },
    {
      slug: "unicellular-organisms",
      title: "Unicellular Organisms",
      objective:
        "By the end of the topic, learners should be able to describe the structure and life processes of unicellular organisms such as Amoeba, Paramecium and Euglena, and name common unicellular microbes that cause disease.",
      estimatedMinutes: 150,
      notes: `## What is a unicellular organism?

A **unicellular organism** is made of a **single cell** that carries out all the processes of life — feeding, movement, respiration, excretion and reproduction — on its own. Most belong to kingdom Protista or Monera.

## Amoeba

The **Amoeba** is a shapeless protist found in pond water. It moves and feeds using **pseudopodia** ("false feet") — temporary bulges of cytoplasm.

- **Movement:** it flows by pushing out pseudopodia.
- **Feeding:** it surrounds food and engulfs it, forming a **food vacuole** (this is phagocytosis).
- **Excretion & water balance:** a **contractile vacuole** pumps out excess water.
- **Reproduction:** by **binary fission** — the cell splits into two.

\`\`\`svg An Amoeba engulfing food with pseudopodia
<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Amoeba showing nucleus, vacuoles and pseudopodia">
  <path d="M60,90 C40,40 120,20 150,50 C190,30 230,70 200,110 C230,150 160,170 130,140 C90,175 30,140 60,90 Z" fill="#bbf7d0" stroke="#065f46" stroke-width="2"/>
  <circle cx="130" cy="95" r="16" fill="#34d399" stroke="#065f46"/>
  <text x="130" y="99" font-size="9" text-anchor="middle" fill="#064e3b">nucleus</text>
  <circle cx="90" cy="120" r="10" fill="#fff" stroke="#065f46"/>
  <circle cx="175" cy="90" r="9" fill="#fff" stroke="#065f46"/>
  <text x="205" y="120" font-size="9" fill="#065f46">pseudopodium</text>
  <text x="60" y="150" font-size="9" fill="#065f46">contractile</text>
  <text x="66" y="160" font-size="9" fill="#065f46">vacuole</text>
</svg>
\`\`\`

## Paramecium

The **Paramecium** is a slipper-shaped protist covered in tiny hairs called **cilia**, which beat to move it through water and sweep food into an **oral groove**. It also has two nuclei and contractile vacuoles.

## Euglena

The **Euglena** is unusual: it can behave like a plant **or** an animal.

- It has **chloroplasts**, so in light it makes food by **photosynthesis** (plant-like).
- In darkness it absorbs food from its surroundings (animal-like).
- It moves using a whip-like **flagellum** and detects light with an **eyespot**.

## Unicellular microbes and disease

Some unicellular organisms cause human disease:

- **Bacteria** (Monera): cause gonorrhoea and syphilis.
- **Viruses** (HIV causes AIDS) — not cellular, but microscopic infectious agents.
- **Protozoa:** *Plasmodium* (a sporozoan carried by mosquitoes) causes **malaria**; *Trichomonas* causes an STI; *Entamoeba* causes amoebic dysentery.

Understanding these organisms underpins hygiene, clean water and disease prevention.`,
      workedExample: `**Task.** Compare how the Amoeba and the Paramecium move and feed, and explain what makes the Euglena special.

**Amoeba**
- **Movement:** extends **pseudopodia** (false feet) and flows into them — slow, shape-changing movement.
- **Feeding:** wraps its pseudopodia around a food particle and engulfs it into a **food vacuole** (phagocytosis).

**Paramecium**
- **Movement:** beats rows of tiny **cilia** covering its body, moving quickly and steadily.
- **Feeding:** the cilia sweep water and food into the **oral groove**, where food vacuoles form.

**Why the Euglena is special**
The Euglena has **chloroplasts** and can photosynthesise like a plant when light is available, but it can also take in food like an animal in the dark. Because it shows features of **both** plants and animals, it is placed in the Protista and is often used to show that the plant/animal divide is not absolute. It swims with a **flagellum** and senses light with an **eyespot**.

**Conclusion:** all three are single cells doing every life process alone, but they solve movement and feeding differently — pseudopodia, cilia and a flagellum respectively.`,
      teachingTip:
        "If a microscope and pond water are available, a single drop of brackish water viewed under low power will usually show moving protists — nothing fixes the idea of a 'living single cell' faster than seeing one swim. If no microscope is available, have learners model pseudopodia with a balloon partly filled with water, pushing bulges out to mimic Amoeba movement.",
      quiz: [
        {
          prompt: "A unicellular organism is one that…",
          options: [
            "is made of a single cell",
            "has many specialised organs",
            "cannot reproduce",
            "is always a plant",
          ],
          correctIndex: 0,
          explanation: "Unicellular means the whole organism is one cell.",
        },
        {
          prompt: "The Amoeba moves and feeds using…",
          options: ["pseudopodia", "cilia", "a flagellum", "roots"],
          correctIndex: 0,
          explanation: "Pseudopodia ('false feet') are used for both movement and feeding.",
        },
        {
          prompt: "The Paramecium is covered with tiny hairs called…",
          options: ["cilia", "pseudopodia", "flagella", "villi"],
          correctIndex: 0,
          explanation: "Cilia beat to move the Paramecium and sweep in food.",
        },
        {
          prompt: "The Euglena moves through water using a…",
          options: ["flagellum", "pseudopodium", "cilium", "shell"],
          correctIndex: 0,
          explanation: "A whip-like flagellum propels the Euglena.",
        },
        {
          prompt: "Which structure lets the Euglena make its own food?",
          options: ["chloroplasts", "contractile vacuole", "oral groove", "eyespot"],
          correctIndex: 0,
          explanation: "Chloroplasts allow photosynthesis in light.",
        },
        {
          prompt: "The contractile vacuole in an Amoeba is used to…",
          options: [
            "pump out excess water",
            "digest food",
            "store the nucleus",
            "produce light",
          ],
          correctIndex: 0,
          explanation: "It removes excess water to keep the cell in balance.",
        },
        {
          prompt: "How does the Amoeba reproduce?",
          options: ["binary fission", "seeds", "eggs", "budding of many young"],
          correctIndex: 0,
          explanation: "It splits into two by binary fission.",
        },
        {
          prompt: "The Amoeba engulfs food to form a…",
          options: ["food vacuole", "nucleus", "cilium", "cell wall"],
          correctIndex: 0,
          explanation: "Engulfed food is enclosed in a food vacuole for digestion.",
        },
        {
          prompt: "The Euglena senses light using its…",
          options: ["eyespot", "flagellum", "nucleus", "cilia"],
          correctIndex: 0,
          explanation: "The eyespot detects light so it can move toward it.",
        },
        {
          prompt: "The disease malaria is caused by the protozoan…",
          options: ["Plasmodium", "Amoeba", "Euglena", "Paramecium"],
          correctIndex: 0,
          explanation: "Plasmodium, carried by mosquitoes, causes malaria.",
        },
        {
          prompt: "Which shape best describes the Paramecium?",
          options: ["slipper-shaped", "spherical", "star-shaped", "thread-like"],
          correctIndex: 0,
          explanation: "It is commonly called the slipper animalcule.",
        },
        {
          prompt: "In darkness, the Euglena obtains food by…",
          options: [
            "absorbing it from its surroundings",
            "photosynthesis",
            "eating other Euglena",
            "making seeds",
          ],
          correctIndex: 0,
          explanation: "Without light it feeds like an animal by absorption.",
        },
        {
          prompt: "The Paramecium sweeps food into its…",
          options: ["oral groove", "pseudopodium", "flagellum", "eyespot"],
          correctIndex: 0,
          explanation: "Cilia direct food into the oral groove.",
        },
        {
          prompt: "Which of these is a bacterial disease?",
          options: ["gonorrhoea", "malaria", "AIDS", "amoebic dysentery"],
          correctIndex: 0,
          explanation: "Gonorrhoea is caused by bacteria (kingdom Monera).",
        },
        {
          prompt: "Engulfing solid food particles by surrounding them is called…",
          options: ["phagocytosis", "osmosis", "photosynthesis", "respiration"],
          correctIndex: 0,
          explanation: "Phagocytosis is the 'cell-eating' the Amoeba uses.",
        },
        {
          prompt: "Why is the Euglena said to be both plant-like and animal-like?",
          options: [
            "It can photosynthesise and also absorb food",
            "It has roots and legs",
            "It changes into a plant then an animal",
            "It has flowers",
          ],
          correctIndex: 0,
          explanation: "Chloroplasts (plant-like) plus feeding by absorption (animal-like).",
        },
        {
          prompt: "Which unicellular organism uses cilia for movement?",
          options: ["Paramecium", "Amoeba", "Euglena", "Plasmodium"],
          correctIndex: 0,
          explanation: "The Paramecium beats its cilia to swim.",
        },
        {
          prompt: "AIDS is caused by a…",
          options: ["virus (HIV)", "bacterium", "protozoan", "fungus"],
          correctIndex: 0,
          explanation: "The Human Immunodeficiency Virus (HIV) causes AIDS.",
        },
        {
          prompt: "All of a unicellular organism's life processes are carried out by…",
          options: ["one single cell", "many tissues", "specialised organs", "a group of cells"],
          correctIndex: 0,
          explanation: "A single cell must do everything itself.",
        },
        {
          prompt: "Entamoeba, a parasitic protozoan, causes…",
          options: ["amoebic dysentery", "malaria", "syphilis", "AIDS"],
          correctIndex: 0,
          explanation: "Entamoeba histolytica causes amoebic dysentery.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Describe how the Amoeba (a) moves and (b) obtains its food.",
          answerKey:
            "(a) It pushes out pseudopodia (false feet) and flows into them. (b) It surrounds a food particle with its pseudopodia and engulfs it into a food vacuole (phagocytosis). Award marks for correct mention of pseudopodia and food vacuole/engulfing.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which structure allows the Euglena to behave like a plant?",
          options: ["chloroplasts", "flagellum", "contractile vacuole", "cilia"],
          correctIndex: 0,
          answerKey: "Chloroplasts enable photosynthesis, a plant-like process.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Name two unicellular organisms that cause human disease and state the disease each causes.",
          answerKey:
            "Accept any two valid pairs: Plasmodium – malaria; bacteria – gonorrhoea/syphilis; Entamoeba – amoebic dysentery; Trichomonas – trichomoniasis (an STI). Award a mark per correct organism–disease pairing.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Compare the way the Amoeba and the Paramecium move.",
          answerKey:
            "The Amoeba moves slowly by extending pseudopodia (false feet) and flowing into them; the Paramecium moves quickly by beating rows of cilia over its body surface. Award marks for correctly identifying pseudopodia vs cilia and the contrast in movement.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain why the Euglena is important as evidence that the line between plants and animals is not absolute.",
          answerKey:
            "A strong answer explains that the Euglena has chloroplasts and photosynthesises in light (a plant feature) yet can absorb ready-made food in the dark and moves actively with a flagellum (animal features). Because it possesses features of both groups, it cannot be placed cleanly as a plant or an animal and is classed as a protist — showing the plant/animal boundary is not sharp. Award marks for the plant-like evidence, the animal-like evidence, and the conclusion drawn.",
          marks: 5,
        },
      ],
    },
  ],
};
