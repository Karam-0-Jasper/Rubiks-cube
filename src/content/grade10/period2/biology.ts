import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 10,
// Semester One, Period II: The Hierarchy and Diversity of Living Things;
// Unicellular Organisms. Topics follow the four CONTENTS items: (1) classification
// and importance / five kingdoms; (2) the taxonomic hierarchy; (3) unicellular
// organisms and disease-causing microbes; (4) parasitic protozoa and diseases.
export const biologyG10P2: PeriodContent = {
  grade: 10,
  number: 2,
  title: "Diversity and Classification of Living Things",
  summary:
    "Period II of the MoE Grade 10 Biology syllabus. Learners study why living things are classified and the five kingdoms, the taxonomic hierarchy from kingdom to species, unicellular organisms such as Amoeba, Paramecium and Euglena and the microbes that cause disease, and the parasitic protozoa that cause malaria, amoebic dysentery and giardiasis.",
  topics: [
    // source: LibreTexts — PGCC Microbiology, 4.3.1 Kingdom Classification According to Whittaker (https://bio.libretexts.org/Courses/Prince_Georges_Community_College/PGCC_Microbiology/04:_Microscopy_Staining_and_Classification/4.03:_Classification_and_Identification/4.3.01:_Kingdom_Classification_According_to_Whittaker)
    {
      slug: "classification-of-living-things",
      title: "Classification and the Five Kingdoms",
      objective:
        "By the end of the topic, learners should be able to explain why living things are classified, describe the main characteristics of the five kingdoms, and discuss the position of viruses between living and non-living things.",
      estimatedMinutes: 130,
      notes: `## The diversity of life

- Life is hugely varied — from unseen bacteria through moulds, mosses and mango trees to fish, birds and humans.
- **Classification (taxonomy)** — sorting living things into named groups based on shared characteristics.

## Why we classify

There are millions of kinds of living things. Classification helps scientists to:

- **organise** the huge diversity of life;
- **identify and name** organisms clearly and universally;
- **show relationships** — how organisms are related by evolution.

## The five kingdoms (Whittaker, 1969)

R. H. Whittaker grouped living things into **five kingdoms** using cell structure, mode of nutrition and body organisation.

| Kingdom | Cells | Nutrition | Examples |
| --- | --- | --- | --- |
| **Monera** | prokaryotic, unicellular (no true nucleus) | absorb or make food | bacteria, blue-green algae |
| **Protista** | eukaryotic, mostly unicellular | varied | Amoeba, Paramecium, Euglena, algae |
| **Fungi** | eukaryotic, mostly multicellular; chitin walls | heterotrophic (absorb food) | mushrooms, moulds, yeast |
| **Plantae** | eukaryotic, multicellular | autotrophic (photosynthesis) | trees, ferns, mosses |
| **Animalia** | eukaryotic, multicellular | heterotrophic (ingest food) | insects, fish, humans |

## The great divide: prokaryote vs eukaryote

- **Empire Prokaryota** — only kingdom Monera (no membrane-bound nucleus).
- **Empire Eukaryota** — Protista, Fungi, Plantae, Animalia (cells with a true nucleus).

## Where do viruses fit?

**Viruses** sit on the border between living and non-living:

- **Living-like:** they contain genetic material and can reproduce.
- **Non-living-like:** they reproduce **only inside a host cell**; outside a host they are inert with no metabolism.
- Because of this, most biologists do **not** place viruses in any kingdom.

## Importance of classifying living things

- Makes study and identification manageable.
- Gives every organism a single, universal name (avoids the confusion of local names).
- Reveals evolutionary relationships and helps in medicine, agriculture and conservation.

## Common errors and misconceptions

- **Thinking fungi are plants** — fungi cannot photosynthesise; they absorb food and have chitin walls, so they are their own kingdom.
- **Calling all microbes "bacteria"** — bacteria are Monera; Amoeba and Paramecium are Protista; yeast is a fungus.
- **Classing viruses as a kingdom** — they are not fully living, so they are placed in no kingdom.
- **Confusing "kingdom" with "species"** — a kingdom is the broadest group; a species is the narrowest.`,
      workedExample: `**Task.** A learner collects five specimens: a mushroom, a cassava plant, palm-wine yeast, pond Amoeba, and the bacteria that spoil cooked rice. Assign each to a kingdom and justify.

**Solution**

1. **Mushroom → Fungi.** It is multicellular, cannot photosynthesise, and absorbs food; fungi have chitin walls.
2. **Cassava plant → Plantae.** Multicellular, green, makes its own food by photosynthesis (autotroph).
3. **Palm-wine yeast → Fungi.** Yeast is a single-celled fungus; it feeds by absorption and ferments sugar.
4. **Amoeba → Protista.** A single eukaryotic cell with a true nucleus, neither plant nor animal nor fungus.
5. **Rice-spoiling bacteria → Monera.** Prokaryotic, unicellular, no true nucleus.

*Check:* the two single-celled specimens are placed by cell type — yeast has a true nucleus (Fungi), Amoeba has a true nucleus but is neither plant, animal nor fungus (Protista), and the bacteria have no true nucleus (Monera).

**Answer:** Fungi, Plantae, Fungi, Protista, Monera — assigned by cell structure and mode of nutrition.`,
      quiz: [
        { prompt: "The science of classifying living things is called", options: ["taxonomy", "ecology", "genetics", "anatomy"], correctIndex: 0, explanation: "Taxonomy names and groups organisms by shared features." },
        { prompt: "How many kingdoms are in Whittaker's system?", options: ["Five", "Three", "Seven", "Two"], correctIndex: 0, explanation: "Monera, Protista, Fungi, Plantae, Animalia." },
        { prompt: "Bacteria belong to which kingdom?", options: ["Monera", "Protista", "Fungi", "Animalia"], correctIndex: 0, explanation: "Bacteria are prokaryotic — kingdom Monera." },
        { prompt: "Which kingdom makes its own food by photosynthesis?", options: ["Plantae", "Animalia", "Fungi", "Monera"], correctIndex: 0, explanation: "Plants are autotrophs." },
        { prompt: "Mushrooms, moulds and yeast belong to kingdom", options: ["Fungi", "Plantae", "Protista", "Monera"], correctIndex: 0, explanation: "They absorb food and have chitin walls." },
        { prompt: "Amoeba and Paramecium are placed in kingdom", options: ["Protista", "Animalia", "Fungi", "Monera"], correctIndex: 0, explanation: "They are mostly unicellular eukaryotes." },
        { prompt: "Which kingdom has multicellular organisms that ingest food and usually move?", options: ["Animalia", "Plantae", "Fungi", "Protista"], correctIndex: 0, explanation: "Animals take in food and typically move." },
        { prompt: "Prokaryotic cells, found in Monera, are distinguished by having", options: ["no true nucleus", "a large vacuole", "chloroplasts", "chitin walls"], correctIndex: 0, explanation: "Prokaryotes lack a membrane-bound nucleus." },
        { prompt: "Fungal cell walls are made of", options: ["cellulose", "chitin", "protein", "lipid"], correctIndex: 1, explanation: "Fungi have chitin walls, unlike plants." },
        { prompt: "Why are viruses NOT usually placed in any kingdom?", options: ["They can only reproduce inside a host cell", "They are too large", "They photosynthesise", "They have true nuclei"], correctIndex: 0, explanation: "They show no life outside a host." },
        { prompt: "The two empires above kingdom level separate organisms by", options: ["size", "having a true nucleus or not", "colour", "number of legs"], correctIndex: 1, explanation: "Prokaryota vs Eukaryota." },
        { prompt: "One purpose of classification is to", options: ["show how organisms are related", "increase the number of species", "make organisms grow faster", "remove viruses from nature"], correctIndex: 0, explanation: "Classification reveals relationships." },
        { prompt: "Which kingdom contains only prokaryotes?", options: ["Monera", "Protista", "Fungi", "Plantae"], correctIndex: 0, explanation: "Only Monera is prokaryotic." },
        { prompt: "Whittaker proposed the five-kingdom system in", options: ["1665", "1866", "1969", "2001"], correctIndex: 2, explanation: "The five-kingdom system dates to 1969." },
        { prompt: "Yeast is best classified as a", options: ["fungus", "bacterium", "plant", "protozoan"], correctIndex: 0, explanation: "Yeast is a single-celled fungus." },
        { prompt: "Which feature places an organism in Eukaryota?", options: ["a true membrane-bound nucleus", "no nucleus", "being green", "being large"], correctIndex: 0, explanation: "Eukaryotes have a true nucleus." },
        { prompt: "Blue-green algae (cyanobacteria) are placed in", options: ["Monera", "Plantae", "Protista", "Fungi"], correctIndex: 0, explanation: "They are prokaryotic, so Monera." },
        { prompt: "Classification is important because it", options: ["gives organisms a single universal name", "makes all organisms identical", "stops evolution", "removes diversity"], correctIndex: 0, explanation: "Universal names avoid the confusion of local names." },
        { prompt: "Which kingdom is mostly unicellular eukaryotes?", options: ["Protista", "Animalia", "Plantae", "Monera"], correctIndex: 0, explanation: "Protista are mostly single-celled eukaryotes." },
        { prompt: "The evidence that viruses might be living is that they", options: ["contain genetic material and can reproduce", "are made of cells", "photosynthesise", "have a nucleus"], correctIndex: 0, explanation: "They have genetic material and reproduce inside hosts." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the five kingdoms and give one example organism for each.", answerKey: "Monera – bacteria; Protista – Amoeba/Paramecium/Euglena; Fungi – mushroom/yeast/mould; Plantae – any named plant; Animalia – any named animal. 1 mark per kingdom + example (max 5).", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Which feature best distinguishes Plantae from Animalia?", options: ["Plants make their own food by photosynthesis", "Plants are unicellular", "Plants have no cells", "Plants cannot reproduce"], correctIndex: 0, answerKey: "Plants are autotrophs; animals ingest food. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State three reasons why scientists classify living things.", answerKey: "Any three: to organise diversity; to identify and name organisms universally; to show evolutionary relationships; to aid study/medicine/agriculture. 1 mark each.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why viruses are difficult to classify as living or non-living.", answerKey: "They have genetic material and reproduce (living features) but only inside a host; outside a host they are inert with no metabolism (non-living). This dual nature places them on the border. Award marks for both sides.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the importance of classifying living things and compare the five kingdoms by cell type and nutrition.", answerKey: "Importance: organises diversity, universal naming, shows relationships (up to 5). Comparison: Monera prokaryotic; Protista/Fungi/Plantae/Animalia eukaryotic; autotrophic (Plantae) vs heterotrophic absorb (Fungi) vs ingest (Animalia); nutrition and cell number as distinguishing features (up to 6). Up to 4 for clarity and correct examples.", marks: 15 },
      ],
    },
    // source: OpenStax — Concepts of Biology, 12.1 Organizing Life on Earth (https://openstax.org/books/concepts-biology/pages/12-1-organizing-life-on-earth)
    {
      slug: "taxonomic-hierarchy",
      title: "The Taxonomic Hierarchy and Naming of Organisms",
      objective:
        "By the end of the topic, learners should be able to list the taxonomic ranks from kingdom to species, use the binomial naming system correctly, and classify a named organism.",
      estimatedMinutes: 120,
      notes: `## The ranks of classification

Organisms are placed in a series of ranks, from the broadest and most general group down to the single kind of organism.

**Kingdom → Phylum → Class → Order → Family → Genus → Species**

(A **domain** — Bacteria, Archaea, Eukarya — sits above kingdom in the modern system.)

\`\`\`svg The ranks narrow from many organisms to one kind
<svg viewBox="0 0 380 200" role="img" aria-label="Inverted pyramid of taxonomic ranks">
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <rect x="20" y="12" width="340" height="24" fill="#a7f3d0" fill-opacity="0.5" stroke="currentColor"/><text x="190" y="28">Kingdom</text>
    <rect x="45" y="38" width="290" height="24" fill="#a7f3d0" fill-opacity="0.5" stroke="currentColor"/><text x="190" y="54">Phylum</text>
    <rect x="70" y="64" width="240" height="24" fill="#6ee7b7" fill-opacity="0.5" stroke="currentColor"/><text x="190" y="80">Class</text>
    <rect x="95" y="90" width="190" height="24" fill="#6ee7b7" fill-opacity="0.5" stroke="currentColor"/><text x="190" y="106">Order</text>
    <rect x="115" y="116" width="150" height="24" fill="#34d399" fill-opacity="0.5" stroke="currentColor"/><text x="190" y="132">Family</text>
    <rect x="135" y="142" width="110" height="24" fill="#34d399" fill-opacity="0.5" stroke="currentColor"/><text x="190" y="158">Genus</text>
    <rect x="155" y="168" width="70" height="24" fill="#10b981" fill-opacity="0.5" stroke="currentColor"/><text x="190" y="184">Species</text>
  </g>
</svg>
\`\`\`

**Memory aid:** "**K**ing **P**hilip **C**ame **O**ver **F**or **G**ood **S**oup."

## What each rank means

- **Kingdom** — the broadest grouping (e.g. Animalia).
- **Phylum** — organisms sharing a fundamental body plan (e.g. Chordata — a backbone).
- **Class** — a more specific grouping (e.g. Mammalia).
- **Order** — organisms sharing particular characteristics (e.g. Carnivora).
- **Family** — closely related genera (e.g. Felidae).
- **Genus** — a group of very similar species (e.g. *Felis*).
- **Species** — organisms that can interbreed and produce fertile offspring (e.g. *catus*).

**The species is the smallest unit and contains only one kind of organism.**

## Binomial nomenclature (Linnaeus)

Each species has a **two-part scientific name**:

- The **genus** (capitalised) + the **species** (lower case), both **italic** (or underlined when handwritten).
- Example: humans are *Homo sapiens*; the domestic cat is *Felis catus*; the wolf is *Canis lupus*.

## Phylogenetic trees

A **phylogenetic tree** is a diagram showing evolutionary relationships. A **branch point** shows where one lineage split into new ones; species that share a recent branch point are closely related.

## Common errors and misconceptions

- **Writing a scientific name wrongly** — genus takes a capital, species is lower case, both italic: *Homo sapiens*, not *homo Sapiens*.
- **Reversing the order of ranks** — it runs Kingdom → … → **Species** (broad to narrow); species is the **smallest** group.
- **Thinking genus and species are interchangeable** — the genus groups several species; the species names one.
- **Forgetting the italics/underline** — scientific names must be italicised or underlined.`,
      workedExample: `**Task.** The domestic cat is *Felis catus*. Its classification is: Kingdom Animalia, Phylum Chordata, Class Mammalia, Order Carnivora, Family Felidae, Genus *Felis*, Species *catus*. Answer the questions.

1. *Which is the broadest group the cat belongs to?* → **Kingdom** (Animalia); it contains the greatest variety of organisms.
2. *Which is the narrowest?* → **Species** (*catus*); it contains only one kind of organism.
3. *Write the cat's scientific name correctly.* → *Felis catus* — genus capitalised, species lower case, both italic.
4. *Why is the cat in Animalia, not Plantae?* → It cannot photosynthesise; it ingests food and moves — animal features.
5. *Two organisms share the genus Felis. What does that tell you?* → They are **very closely related** (same genus), more so than two organisms sharing only the same family or order.

**Answer:** Kingdom is broadest, species narrowest; *Felis catus* is written with an italic capitalised genus and lower-case species; shared genus means close relationship.`,
      quiz: [
        { prompt: "Which is the correct order from broadest to narrowest?", options: ["Kingdom, Phylum, Class, Order, Family, Genus, Species", "Species, Genus, Family, Order, Class, Phylum, Kingdom", "Kingdom, Class, Phylum, Family, Order, Genus, Species", "Phylum, Kingdom, Order, Class, Genus, Family, Species"], correctIndex: 0, explanation: "Kingdom → Phylum → Class → Order → Family → Genus → Species." },
        { prompt: "The smallest unit of classification is the", options: ["species", "genus", "kingdom", "family"], correctIndex: 0, explanation: "Species is the narrowest group." },
        { prompt: "A species is a group of organisms that", options: ["can interbreed to give fertile offspring", "look slightly alike", "share one letter in their name", "live in the same country"], correctIndex: 0, explanation: "That is the biological definition of a species." },
        { prompt: "In Homo sapiens, the word 'Homo' is the", options: ["genus", "species", "family", "kingdom"], correctIndex: 0, explanation: "The first, capitalised part is the genus." },
        { prompt: "The two-part naming system is called", options: ["binomial nomenclature", "the periodic system", "cell theory", "the food chain"], correctIndex: 0, explanation: "Binomial = genus + species." },
        { prompt: "Which rank comes immediately below Class?", options: ["Order", "Family", "Phylum", "Genus"], correctIndex: 0, explanation: "Class → Order → Family." },
        { prompt: "A scientific name should be written", options: ["genus capital, species lower case, both italic", "both words capitalised", "both lower case, no italics", "species capital, genus lower case"], correctIndex: 0, explanation: "Italic, capital genus, small species." },
        { prompt: "The scientist who devised binomial naming was", options: ["Carl Linnaeus", "Charles Darwin", "Robert Hooke", "Louis Pasteur"], correctIndex: 0, explanation: "Linnaeus introduced binomial nomenclature." },
        { prompt: "Which is broader: a phylum or a family?", options: ["Phylum", "Family", "They are equal", "Neither is a rank"], correctIndex: 0, explanation: "Phylum is near the top; family is much lower." },
        { prompt: "A diagram of evolutionary relationships is a", options: ["phylogenetic tree", "food web", "pyramid of numbers", "family portrait"], correctIndex: 0, explanation: "A phylogenetic tree shows relationships and branch points." },
        { prompt: "Organisms sharing the same genus are", options: ["very closely related", "unrelated", "the same individual", "always the same species"], correctIndex: 0, explanation: "Same genus means a close relationship." },
        { prompt: "The mnemonic 'King Philip Came Over For Good Soup' helps remember the", options: ["ranks of classification", "five kingdoms", "life processes", "cell organelles"], correctIndex: 0, explanation: "It gives Kingdom, Phylum, Class, Order, Family, Genus, Species." },
        { prompt: "Which rank groups closely related genera?", options: ["Family", "Order", "Class", "Kingdom"], correctIndex: 0, explanation: "A family contains related genera." },
        { prompt: "The scientific name of the domestic cat is", options: ["Felis catus", "Canis lupus", "Homo sapiens", "Felis Catus"], correctIndex: 0, explanation: "Felis catus, italic capitalised genus." },
        { prompt: "Above kingdom, the modern system adds the", options: ["domain", "empire only", "species", "order"], correctIndex: 0, explanation: "Domains (Bacteria, Archaea, Eukarya) sit above kingdom." },
        { prompt: "A phylum groups organisms that share", options: ["a fundamental body plan", "the same colour", "the same country", "the same size"], correctIndex: 0, explanation: "Phylum reflects a shared body plan." },
        { prompt: "Which is correctly written?", options: ["Homo sapiens", "homo sapiens", "HOMO SAPIENS", "Homo Sapiens"], correctIndex: 0, explanation: "Capital genus, lower-case species, italic." },
        { prompt: "Two organisms in the same family but different genera are", options: ["related, but less closely than same-genus organisms", "identical", "unrelated", "the same species"], correctIndex: 0, explanation: "Sharing a family is a broader, looser relationship than sharing a genus." },
        { prompt: "The rank between Order and Genus is", options: ["Family", "Class", "Phylum", "Kingdom"], correctIndex: 0, explanation: "Order → Family → Genus." },
        { prompt: "The species name of the wolf Canis lupus is", options: ["lupus", "Canis", "Canidae", "Carnivora"], correctIndex: 0, explanation: "The second word, lupus, is the species." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "List the seven taxonomic ranks from broadest to narrowest.", answerKey: "Kingdom, Phylum, Class, Order, Family, Genus, Species. Full marks only if all seven correct AND in order; deduct 1 per misplacement.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which pair is correctly written and ordered (genus then species)?", options: ["Felis catus", "catus Felis", "Felis Catus", "felis catus"], correctIndex: 0, answerKey: "Genus capitalised first, species lower case, italic. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State the rule for writing a scientific name and give a correct example.", answerKey: "Genus capitalised, species lower case, both italic (or underlined by hand). Example e.g. Homo sapiens / Felis catus. 2 marks for the rule, 2 for a correct example.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain what it means when two organisms share the same genus.", answerKey: "They are very closely related — more closely than organisms sharing only the same family, order, class, etc. Genus is a narrow grouping of very similar species. Award marks for 'closely related' and the idea that narrower rank = closer relationship.", marks: 3 },
        { type: "ESSAY", prompt: "Explain how the binomial naming system avoids the confusion caused by common (local) names.", answerKey: "Common names vary by language and region — one animal has many local names and one name may refer to different animals. The binomial name is unique, universal and precise (genus + species, italic), understood by scientists everywhere. Award marks for the problem with common names and how binomial names remove ambiguity, with an example.", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 23.3 Groups of Protists (https://openstax.org/books/biology-2e/pages/23-3-groups-of-protists)
    {
      slug: "unicellular-organisms",
      title: "Unicellular Organisms and Disease-Causing Microbes",
      objective:
        "By the end of the topic, learners should be able to describe the structure and life processes of unicellular organisms such as Amoeba, Paramecium and Euglena, and name unicellular microbes that cause disease, including STI-causing agents and Plasmodium.",
      estimatedMinutes: 140,
      notes: `## What is a unicellular organism?

- A **unicellular organism** is made of a **single cell** that carries out all life processes — movement, feeding, respiration, excretion and reproduction — on its own.
- Most belong to kingdom **Protista** or **Monera**.

## Amoeba

The **Amoeba** is a shapeless protist of pond water.

- **Movement & feeding:** by **pseudopodia** ("false feet") — the cell pushes out a bulge and flows into it, and wraps food to engulf it into a **food vacuole** (phagocytosis).
- **Water balance / excretion:** a **contractile vacuole** fills with water entering by osmosis, then contracts to squeeze it out.
- **Reproduction:** by **binary fission** (the cell splits into two).

\`\`\`svg An Amoeba engulfing food with pseudopodia
<svg viewBox="0 0 260 180" role="img" aria-label="Amoeba with nucleus, vacuoles and pseudopodia">
  <path d="M60,90 C40,40 120,20 150,50 C190,30 230,70 200,110 C230,150 160,170 130,140 C90,175 30,140 60,90 Z" fill="#bbf7d0" fill-opacity="0.5" stroke="currentColor" stroke-width="2"/>
  <circle cx="130" cy="95" r="16" fill="#34d399" fill-opacity="0.5" stroke="currentColor"/>
  <text x="130" y="99" font-size="9" text-anchor="middle" fill="currentColor">nucleus</text>
  <circle cx="90" cy="120" r="10" fill="none" stroke="currentColor"/>
  <text x="205" y="120" font-size="9" fill="currentColor">pseudopodium</text>
  <text x="66" y="150" font-size="9" fill="currentColor">contractile vacuole</text>
</svg>
\`\`\`

## Paramecium

The **Paramecium** is a slipper-shaped protist covered in tiny hairs called **cilia**.

- **Movement:** the cilia beat to move it quickly and steadily through water.
- **Feeding:** the cilia sweep food into an **oral groove** (a primitive mouth) where food vacuoles form.
- **Water balance:** contractile vacuoles remove excess water.

## Euglena

The **Euglena** can behave like a plant **or** an animal.

- Has **chloroplasts**, so in light it makes food by **photosynthesis** (plant-like).
- In darkness it absorbs food from its surroundings (animal-like).
- Moves with a **flagellum** and detects light with an **eyespot**.

## Unicellular microbes that cause disease

Several unicellular (or microscopic) agents cause human disease, including sexually transmitted infections (STIs):

| Agent (group) | Example | Disease |
| --- | --- | --- |
| **Bacteria** (Monera) | *Neisseria gonorrhoeae*, *Treponema pallidum* | gonorrhoea, syphilis (STIs) |
| **Virus** (not cellular) | HIV | HIV/AIDS (STI) |
| **Protozoa** (Protista) | *Trichomonas vaginalis* | trichomoniasis (STI) |
| **Sporozoan protozoan** | *Plasmodium* | malaria (spread by mosquitoes) |

- **Plasmodium** is a sporozoan carried by the female *Anopheles* mosquito; it causes **malaria**, a major disease in Liberia.
- Understanding these microbes underpins hygiene, safe sex, clean water and disease prevention.

## Common errors and misconceptions

- **Confusing the locomotion structures** — *Amoeba* → pseudopodia; *Paramecium* → cilia; *Euglena* → flagellum.
- **"Malaria is caused by the mosquito"** — the mosquito is only the **vector** (carrier); the cause is the protozoan ***Plasmodium***.
- **Calling all microbes bacteria** — Amoeba, Paramecium and Euglena are protozoa/protists; HIV is a virus.
- **Thinking a single cell is "incomplete"** — a unicellular organism is a complete organism doing all life processes itself.`,
      workedExample: `**Task.** Compare how the Amoeba and the Paramecium move and feed, then name one unicellular microbe that causes an STI and one that causes malaria.

**Amoeba**
- **Movement:** extends **pseudopodia** and flows into them — slow, shape-changing movement.
- **Feeding:** wraps pseudopodia around food and engulfs it into a **food vacuole** (phagocytosis).

**Paramecium**
- **Movement:** beats rows of **cilia** — fast, steady swimming.
- **Feeding:** cilia sweep food into the **oral groove**, where food vacuoles form.

**Disease-causing microbes**
- **STI:** the bacterium *Neisseria gonorrhoeae* causes **gonorrhoea** (or HIV, a virus, causes AIDS; *Trichomonas* causes trichomoniasis).
- **Malaria:** the protozoan ***Plasmodium***, carried by the female *Anopheles* mosquito.

**Conclusion:** all these are single cells (or microscopic agents); the free-living protists differ in their locomotion (pseudopodia vs cilia), while the disease agents are grouped as bacteria, viruses and protozoa.`,
      quiz: [
        { prompt: "A unicellular organism is one that", options: ["is made of a single cell", "has many organs", "cannot reproduce", "is always a plant"], correctIndex: 0, explanation: "The whole organism is one cell." },
        { prompt: "The Amoeba moves and feeds using", options: ["pseudopodia", "cilia", "a flagellum", "roots"], correctIndex: 0, explanation: "Pseudopodia are used for both." },
        { prompt: "The Paramecium is covered with tiny hairs called", options: ["cilia", "pseudopodia", "flagella", "villi"], correctIndex: 0, explanation: "Cilia beat to move it and sweep in food." },
        { prompt: "The Euglena moves using a", options: ["flagellum", "pseudopodium", "cilium", "shell"], correctIndex: 0, explanation: "A whip-like flagellum propels it." },
        { prompt: "The contractile vacuole is used to", options: ["pump out excess water", "digest food", "store the nucleus", "produce light"], correctIndex: 0, explanation: "It removes excess water for balance." },
        { prompt: "How does the Amoeba reproduce?", options: ["binary fission", "seeds", "eggs", "flowers"], correctIndex: 0, explanation: "It splits into two by binary fission." },
        { prompt: "The Amoeba engulfs food to form a", options: ["food vacuole", "nucleus", "cilium", "cell wall"], correctIndex: 0, explanation: "Engulfed food is enclosed in a food vacuole." },
        { prompt: "Malaria is caused by the protozoan", options: ["Plasmodium", "Amoeba", "Euglena", "Paramecium"], correctIndex: 0, explanation: "Plasmodium, carried by mosquitoes, causes malaria." },
        { prompt: "The Paramecium sweeps food into its", options: ["oral groove", "pseudopodium", "flagellum", "eyespot"], correctIndex: 0, explanation: "Cilia direct food into the oral groove." },
        { prompt: "Which is a bacterial STI?", options: ["gonorrhoea", "malaria", "AIDS", "amoebic dysentery"], correctIndex: 0, explanation: "Gonorrhoea is caused by bacteria." },
        { prompt: "AIDS is caused by a", options: ["virus (HIV)", "bacterium", "protozoan", "fungus"], correctIndex: 0, explanation: "HIV is a virus." },
        { prompt: "Engulfing solid particles by surrounding them is", options: ["phagocytosis", "osmosis", "photosynthesis", "respiration"], correctIndex: 0, explanation: "Phagocytosis is the Amoeba's feeding method." },
        { prompt: "Trichomonas vaginalis is a", options: ["protozoan causing an STI", "bacterium", "virus", "fungus"], correctIndex: 0, explanation: "It is a protozoan causing trichomoniasis." },
        { prompt: "Which structure lets the Euglena make its own food?", options: ["chloroplasts", "contractile vacuole", "oral groove", "eyespot"], correctIndex: 0, explanation: "Chloroplasts carry out photosynthesis." },
        { prompt: "The mosquito in malaria acts as a", options: ["vector (carrier)", "cause", "host only", "food"], correctIndex: 0, explanation: "It carries Plasmodium; the parasite causes malaria." },
        { prompt: "Which unicellular organism uses cilia for movement?", options: ["Paramecium", "Amoeba", "Euglena", "Plasmodium"], correctIndex: 0, explanation: "The Paramecium beats its cilia." },
        { prompt: "All of a unicellular organism's life processes are carried out by", options: ["one single cell", "many tissues", "specialised organs", "a group of cells"], correctIndex: 0, explanation: "A single cell does everything." },
        { prompt: "Syphilis is caused by a", options: ["bacterium", "virus", "protozoan", "fungus"], correctIndex: 0, explanation: "The bacterium Treponema pallidum causes syphilis." },
        { prompt: "Plasmodium belongs to which group of protists?", options: ["sporozoans", "green algae", "diatoms", "ciliates"], correctIndex: 0, explanation: "Plasmodium is a sporozoan." },
        { prompt: "The Euglena senses light using its", options: ["eyespot", "flagellum", "nucleus", "cilia"], correctIndex: 0, explanation: "The eyespot detects light." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe how the Amoeba (a) moves and (b) obtains its food.", answerKey: "(a) It pushes out pseudopodia (false feet) and flows into them. (b) It surrounds a food particle with pseudopodia and engulfs it into a food vacuole (phagocytosis). Award marks for pseudopodia and food vacuole/engulfing.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which structure allows the Euglena to behave like a plant?", options: ["chloroplasts", "flagellum", "contractile vacuole", "cilia"], correctIndex: 0, answerKey: "Chloroplasts enable photosynthesis. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Name two unicellular (or microscopic) agents that cause human disease and state the disease each causes.", answerKey: "Any two: Plasmodium – malaria; bacteria (Neisseria) – gonorrhoea / (Treponema) – syphilis; HIV – AIDS; Trichomonas – trichomoniasis. 1.5 marks per correct pair.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Compare the way the Amoeba and the Paramecium move.", answerKey: "Amoeba moves slowly by extending pseudopodia and flowing into them; Paramecium moves quickly by beating rows of cilia. Award marks for pseudopodia vs cilia and the contrast.", marks: 4 },
        { type: "ESSAY", prompt: "Explain why understanding unicellular disease-causing microbes is important for public health in Liberia.", answerKey: "Malaria (Plasmodium via mosquitoes) is a major killer — control needs nets, drainage, treatment (5). STIs caused by bacteria (gonorrhoea, syphilis), viruses (HIV) and protozoa (Trichomonas) spread through risky sexual behaviour — prevention needs abstinence, condoms, testing (5). Knowing the microbe and its transmission guides hygiene, clean water and prevention (up to 5). Reward concrete local links.", marks: 15 },
      ],
    },
    // source: LibreTexts — Microbiology (Boundless), 15.10F Amoebic Dysentery (Amoebiasis); 15.10C Giardiasis; malaria from OpenStax 23.3 (https://bio.libretexts.org/Bookshelves/Microbiology/Microbiology_(Boundless)/15:_Diseases/15.10:_Fungal_and_Protozoan_Diseases_of_the_Digestive_System/15.10F:_Amoebic_Dysentery_(Amoebiasis))
    {
      slug: "parasitic-protozoa-and-diseases",
      title: "Parasitic Protozoa and the Diseases They Cause",
      objective:
        "By the end of the topic, learners should be able to name parasitic protozoa and the diseases they cause — amoebic dysentery, giardiasis and malaria — and describe their transmission, effects and prevention.",
      estimatedMinutes: 130,
      notes: `## Parasitic protozoa

- A **parasite** lives in or on a **host**, taking food from it and harming it.
- Several **protozoa** (single-celled protists) are human parasites.

## The main parasites and their diseases

| Parasite | Disease | Where in body |
| --- | --- | --- |
| **Entamoeba histolytica** | amoebic dysentery (amoebiasis) | large intestine |
| **Giardia lamblia** | giardiasis | small intestine |
| **Plasmodium falciparum** | malaria | liver and red blood cells |

## Entamoeba histolytica — amoebic dysentery

- **Transmission:** by food or water contaminated with **faeces** (faecal–oral route); the tough **cyst** stage is swallowed.
- **Symptoms:** abdominal cramps, **diarrhoea with blood and mucus (dysentery)**, fever, vomiting; severe cases form a liver abscess.
- **Prevention:** wash hands after using the latrine and before eating; drink clean/boiled water; cook food well; dispose of faeces safely (good sanitation).

## Giardia lamblia — giardiasis

- **Transmission:** faecal–oral route, through contaminated food or water (also person to person).
- **Symptoms:** watery **diarrhoea**, stomach cramps, bloating, weight loss.
- **Prevention:** clean water, good sanitation and hand-washing.

## Plasmodium falciparum — malaria

- **Transmission:** by the bite of an infected female **Anopheles mosquito** (the vector). The parasite develops in the **liver**, then in **red blood cells**.
- **Symptoms:** cycles of **fever, chills and sweating**, headache, weakness; severe malaria can kill.
- **Prevention (controlling the mosquito and the parasite):**
  - **Insecticide-treated nets (ITNs)** — the most effective single measure.
  - **Indoor residual spraying (IRS)** with insecticide.
  - Draining or covering **stagnant water** to remove larvae breeding sites.
  - Prompt treatment with **artemisinin-based combination therapy (ACT)**.

\`\`\`svg Faecal–oral route: how intestinal parasites reach a new host
<svg viewBox="0 0 340 120" role="img" aria-label="Faecal-oral transmission route">
  <rect x="8" y="45" width="70" height="30" rx="4" fill="none" stroke="currentColor"/><text x="43" y="64" font-size="9" text-anchor="middle" fill="currentColor">faeces (cysts)</text>
  <rect x="120" y="45" width="80" height="30" rx="4" fill="none" stroke="currentColor"/><text x="160" y="60" font-size="9" text-anchor="middle" fill="currentColor">contaminated</text><text x="160" y="70" font-size="9" text-anchor="middle" fill="currentColor">food / water</text>
  <rect x="255" y="45" width="70" height="30" rx="4" fill="none" stroke="currentColor"/><text x="290" y="64" font-size="9" text-anchor="middle" fill="currentColor">new host</text>
  <line x1="80" y1="60" x2="118" y2="60" stroke="currentColor" stroke-width="2"/><polygon points="118,60 108,55 108,65" fill="currentColor"/>
  <line x1="202" y1="60" x2="253" y2="60" stroke="currentColor" stroke-width="2"/><polygon points="253,60 243,55 243,65" fill="currentColor"/>
</svg>
\`\`\`

## Comparing the routes

- **Malaria** spreads by an **insect vector** (mosquito) — controlled by attacking the mosquito.
- **Amoebic dysentery and giardiasis** spread by the **faecal–oral route** — controlled by clean water, sanitation and hand-washing.

## Common errors and misconceptions

- **"Malaria is spread by dirty water/food"** — no; malaria is spread by the mosquito bite. Dysentery and giardiasis are the faecal–oral ones.
- **"The mosquito causes malaria"** — the mosquito is the vector; *Plasmodium* is the cause.
- **Dysentery is just diarrhoea** — dysentery is diarrhoea **with blood and mucus**.
- **Boiling water is pointless** — boiling kills the cysts and is a key prevention for the faecal–oral parasites.`,
      workedExample: `**Question:** Two patients report to a clinic. Patient A has fever, chills and sweating in cycles; Patient B has diarrhoea with blood and mucus and lives where latrines drain near the well. Identify the likely parasite in each case, its transmission route, and one prevention measure.

**Solution**

*Patient A — cyclic fever, chills, sweating.*
- **Parasite:** ***Plasmodium*** (malaria).
- **Transmission:** the bite of an infected female **Anopheles mosquito** (vector); the parasite grows in the liver then in red blood cells, and the red-cell cycle produces the bouts of fever.
- **Prevention:** sleep under an **insecticide-treated net** (also drain stagnant water; prompt ACT treatment).

*Patient B — bloody, mucus diarrhoea; sanitation problem.*
- **Parasite:** ***Entamoeba histolytica*** (amoebic dysentery).
- **Transmission:** the **faecal–oral route** — cysts in faeces contaminate the water supply and are swallowed.
- **Prevention:** protect the water supply and use latrines away from wells; **boil/treat drinking water** and wash hands after the latrine and before eating.

**Answer:** Patient A has malaria (mosquito-borne, prevented by nets); Patient B has amoebic dysentery (faecal–oral, prevented by clean water and sanitation).`,
      quiz: [
        { prompt: "Amoebic dysentery is caused by", options: ["Entamoeba histolytica", "Plasmodium", "Giardia lamblia", "a virus"], correctIndex: 0, explanation: "Entamoeba histolytica infects the large intestine." },
        { prompt: "Giardiasis is caused by", options: ["Giardia lamblia", "Plasmodium falciparum", "Entamoeba", "HIV"], correctIndex: 0, explanation: "Giardia lamblia infects the small intestine." },
        { prompt: "Malaria is caused by", options: ["Plasmodium falciparum", "Giardia", "Entamoeba", "a bacterium"], correctIndex: 0, explanation: "Plasmodium falciparum causes malaria." },
        { prompt: "Amoebic dysentery and giardiasis both spread by the", options: ["faecal–oral route", "mosquito bite", "air", "soil contact only"], correctIndex: 0, explanation: "Contaminated food/water carrying cysts." },
        { prompt: "Malaria is transmitted by the", options: ["female Anopheles mosquito", "housefly", "tsetse fly", "cockroach"], correctIndex: 0, explanation: "The Anopheles mosquito is the vector." },
        { prompt: "Dysentery differs from ordinary diarrhoea because it has", options: ["blood and mucus", "no symptoms", "only fever", "no cause"], correctIndex: 0, explanation: "Dysentery = diarrhoea with blood and mucus." },
        { prompt: "The tough stage of Entamoeba that survives outside the body is the", options: ["cyst", "flagellum", "spore of a fungus", "egg"], correctIndex: 0, explanation: "The cyst is swallowed to cause infection." },
        { prompt: "Which is the most effective single measure against malaria?", options: ["insecticide-treated nets", "drinking boiled water", "washing hands", "wearing gloves"], correctIndex: 0, explanation: "ITNs are the most effective malaria control." },
        { prompt: "Plasmodium first develops in the human", options: ["liver", "brain", "skin", "lungs"], correctIndex: 0, explanation: "It develops in the liver, then red blood cells." },
        { prompt: "To prevent amoebic dysentery you should", options: ["drink clean/boiled water and wash hands", "sleep under a net", "spray insecticide indoors", "avoid mosquitoes"], correctIndex: 0, explanation: "It is faecal–oral, so clean water and hygiene." },
        { prompt: "A parasite is an organism that", options: ["lives in/on a host and harms it", "helps its host", "makes its own food", "is always a bacterium"], correctIndex: 0, explanation: "Parasites take food from a host and harm it." },
        { prompt: "The cyclic fever of malaria is linked to the parasite's cycle in the", options: ["red blood cells", "large intestine", "skin", "small intestine"], correctIndex: 0, explanation: "Bursting red cells cause bouts of fever." },
        { prompt: "Draining stagnant water helps control malaria because it", options: ["removes mosquito breeding sites", "kills Plasmodium in blood", "cleans drinking water", "stops faecal contamination"], correctIndex: 0, explanation: "Mosquito larvae breed in standing water." },
        { prompt: "Giardiasis mainly affects the", options: ["small intestine", "liver", "lungs", "blood"], correctIndex: 0, explanation: "Giardia infects the small intestine." },
        { prompt: "ACT, used to treat malaria, stands for", options: ["artemisinin-based combination therapy", "acute chest treatment", "amoeba control tablets", "anti-cyst therapy"], correctIndex: 0, explanation: "ACT is the recommended malaria treatment." },
        { prompt: "Which disease is NOT spread by the faecal–oral route?", options: ["malaria", "amoebic dysentery", "giardiasis", "cholera"], correctIndex: 0, explanation: "Malaria is mosquito-borne, not faecal–oral." },
        { prompt: "Washing hands after the latrine mainly prevents", options: ["intestinal parasites like Entamoeba", "malaria", "HIV", "ringworm"], correctIndex: 0, explanation: "It breaks the faecal–oral route." },
        { prompt: "Which measure attacks the malaria vector directly?", options: ["indoor residual spraying", "boiling water", "cooking meat well", "washing hands"], correctIndex: 0, explanation: "Spraying insecticide kills mosquitoes." },
        { prompt: "Severe untreated Entamoeba infection can spread to form an abscess in the", options: ["liver", "heart", "kidney", "eye"], correctIndex: 0, explanation: "Amoebic liver abscess is a serious complication." },
        { prompt: "The vector of malaria is best described as the", options: ["carrier that transmits the parasite", "cause of the disease", "host that is cured", "food of the parasite"], correctIndex: 0, explanation: "The mosquito carries and transmits Plasmodium." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the parasite that causes each disease: (a) amoebic dysentery; (b) giardiasis; (c) malaria.", answerKey: "(a) Entamoeba histolytica; (b) Giardia lamblia; (c) Plasmodium (falciparum). 2 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which disease is spread by an insect vector rather than the faecal–oral route?", options: ["Amoebic dysentery", "Giardiasis", "Malaria", "Cholera"], correctIndex: 2, answerKey: "Malaria (mosquito). Option C.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two ways of preventing amoebic dysentery.", answerKey: "Any two: wash hands after latrine and before eating; drink clean/boiled water; safe faeces disposal/sanitation; cook food well. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe how malaria is transmitted and give two control measures.", answerKey: "Transmitted by the bite of an infected female Anopheles mosquito; the parasite develops in the liver then red blood cells (2). Control: insecticide-treated nets; indoor residual spraying; draining stagnant water; prompt ACT treatment (1 each, max 2).", marks: 4 },
        { type: "ESSAY", prompt: "Compare malaria and amoebic dysentery in terms of cause, transmission and prevention, and explain why the two need different control strategies.", answerKey: "Malaria: caused by Plasmodium, spread by mosquito bite, prevented by nets/spraying/draining water/ACT (5). Amoebic dysentery: caused by Entamoeba, spread by faecal–oral route (contaminated food/water), prevented by clean water, sanitation and hand-washing (5). Different strategies because one attacks a mosquito vector while the other breaks a faecal–oral chain (up to 5). Reward clear contrast.", marks: 15 },
      ],
    },
  ],
};
