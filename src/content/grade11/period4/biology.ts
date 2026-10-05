import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 11,
// Semester Two, Period IV: Cell Growth and Division (Mitosis and Meiosis);
// Reproduction. CONTENTS: (1) cell growth and division — cell cycle, mitosis,
// meiosis (kept as two topics); (2) reproduction — asexual and sexual (kept as
// two topics); (3) responsibilities of parenting; (4) sexual decisions and
// impact on the family; (5) advocacy — role of youth in stopping substance
// abuse and school-based violence.
export const biologyG11P4: PeriodContent = {
  grade: 11,
  number: 4,
  title: "Cell Growth and Division; Reproduction",
  summary:
    "Period IV of the MoE Grade 11 Biology syllabus. Learners study the cell cycle and mitosis by which cells grow and repair, meiosis which halves the chromosome number to form gametes, the forms of asexual reproduction (fission, budding, vegetative propagation and cloning) and sexual reproduction (gamete formation and fertilization), and then the responsibilities of parenting, healthy sexual decisions and their impact on the family, and the role of youth in stopping substance abuse and school-based violence.",
  topics: [
    // source: OpenStax — Biology 2e, 10.2 The Cell Cycle (https://openstax.org/books/biology-2e/pages/10-2-the-cell-cycle)
    {
      slug: "cell-cycle-and-mitosis",
      title: "The Cell Cycle and Mitosis",
      objective:
        "By the end of the topic, learners should be able to describe the stages of the cell cycle, list the phases of mitosis, and explain the importance of mitosis.",
      estimatedMinutes: 120,
      notes: `## The cell cycle

The **cell cycle** is the orderly sequence of events by which a cell grows and divides into two. It has two main parts:

## Interphase (the longest part)

The cell grows and prepares to divide:

- **G1 phase** — the cell grows and makes proteins and organelles.
- **S phase** — **DNA replication**: each chromosome is copied to form two identical **sister chromatids**.
- **G2 phase** — the cell grows more and makes proteins needed for division.

## The mitotic (M) phase

Division of the nucleus (**mitosis**) followed by division of the cytoplasm (**cytokinesis**).

## The stages of mitosis

| Stage | What happens |
| --- | --- |
| **Prophase** | chromosomes condense and become visible; nuclear membrane breaks down; spindle fibres form |
| **Metaphase** | chromosomes line up along the middle (equator) of the cell |
| **Anaphase** | sister chromatids separate and move to opposite poles |
| **Telophase** | chromosomes reach the poles; nuclear membranes reform; chromosomes uncoil |

**Memory aid:** "**P**MAT — **P**rophase, **M**etaphase, **A**naphase, **T**elophase."

\`\`\`svg The stages of mitosis
<svg viewBox="0 0 340 90" role="img" aria-label="Prophase metaphase anaphase telophase">
  <g font-size="8" fill="currentColor" text-anchor="middle">
  <circle cx="42" cy="40" r="26" fill="none" stroke="currentColor"/><path d="M30,32 q6,-6 12,0 M30,48 q6,6 12,0" stroke="currentColor" fill="none"/><text x="42" y="82">prophase</text>
  <circle cx="128" cy="40" r="26" fill="none" stroke="currentColor"/><line x1="128" y1="20" x2="128" y2="60" stroke="currentColor"/><text x="128" y="82">metaphase</text>
  <circle cx="214" cy="40" r="26" fill="none" stroke="currentColor"/><path d="M214,26 l-8,-6 M214,54 l8,6" stroke="currentColor"/><text x="214" y="82">anaphase</text>
  <ellipse cx="300" cy="40" rx="30" ry="22" fill="none" stroke="currentColor"/><line x1="300" y1="18" x2="300" y2="62" stroke="currentColor" stroke-dasharray="2 2"/><text x="300" y="82">telophase</text>
  </g>
</svg>
\`\`\`

## Cytokinesis

- **Animal cells** — the membrane pinches inward (a **cleavage furrow**) to split the cell.
- **Plant cells** — a **cell plate** forms in the middle and becomes a new cell wall.

## Result and importance of mitosis

- Produces **two genetically identical (diploid) daughter cells**, each with the same number of chromosomes as the parent.
- Importance: **growth**, **repair/replacement** of worn or damaged cells, and **asexual reproduction**.

## Common errors and misconceptions

- **"DNA is copied during mitosis"** — DNA is copied earlier, in the **S phase of interphase**.
- **"Mitosis makes gametes"** — mitosis makes **identical body cells**; gametes are made by **meiosis**.
- **"The daughter cells differ from the parent"** — mitosis makes **genetically identical** cells.
- **"Interphase is a resting stage"** — it is a very active stage of growth and DNA replication.`,
      workedExample: `**Task.** A cell with 8 chromosomes divides by mitosis. (a) In which phase is its DNA copied? (b) Describe what happens in metaphase and anaphase. (c) How many chromosomes will each daughter cell have, and why?

**Solution**

(a) The DNA is copied in the **S phase of interphase**, before mitosis begins. Each chromosome becomes two identical **sister chromatids** joined together.

(b) During mitosis:
- **Metaphase:** the chromosomes line up **single file along the middle (equator)** of the cell, attached to spindle fibres.
- **Anaphase:** the **sister chromatids separate** and are pulled to **opposite poles** of the cell, so each pole gets a full set.

(c) Each daughter cell will have **8 chromosomes** — the **same** number as the parent. This is because the DNA was copied once (S phase) and then shared equally between two cells, so mitosis produces two **genetically identical** cells with the full chromosome number.

**Answer:** DNA is copied in S phase; in metaphase chromosomes line up at the equator and in anaphase the chromatids separate to opposite poles; each daughter cell has 8 chromosomes, identical to the parent.`,
      quiz: [
        { prompt: "The cell cycle is the sequence by which a cell", options: ["photosynthesises", "only dies", "makes gametes only", "grows and divides"], correctIndex: 3, explanation: "It covers growth and division." },
        { prompt: "DNA replication happens during", options: ["the S phase of interphase", "prophase", "anaphase", "telophase"], correctIndex: 0, explanation: "DNA is copied in S phase." },
        { prompt: "The longest part of the cell cycle is", options: ["prophase", "interphase", "metaphase", "cytokinesis"], correctIndex: 1, explanation: "Interphase (G1, S, G2) takes the most time." },
        { prompt: "Which is the correct order of mitosis?", options: ["metaphase, prophase, telophase, anaphase", "prophase, metaphase, anaphase, telophase", "anaphase, telophase, prophase, metaphase", "telophase, anaphase, metaphase, prophase"], correctIndex: 1, explanation: "PMAT is the order." },
        { prompt: "Chromosomes line up at the middle of the cell during", options: ["prophase", "metaphase", "anaphase", "telophase"], correctIndex: 1, explanation: "Metaphase = alignment at the equator." },
        { prompt: "Sister chromatids separate during", options: ["metaphase", "anaphase", "prophase", "interphase"], correctIndex: 1, explanation: "Anaphase pulls chromatids apart." },
        { prompt: "During prophase the chromosomes", options: ["reach the poles", "line up at the equator", "condense and become visible", "are copied"], correctIndex: 2, explanation: "Prophase condenses chromosomes." },
        { prompt: "Division of the cytoplasm is called", options: ["mitosis", "cytokinesis", "interphase", "replication"], correctIndex: 1, explanation: "Cytokinesis splits the cytoplasm." },
        { prompt: "In animal cells, cytokinesis occurs by", options: ["a cleavage furrow pinching in", "a cell plate forming", "a cell wall splitting", "budding"], correctIndex: 0, explanation: "The membrane pinches to divide the cell." },
        { prompt: "In plant cells, cytokinesis forms a", options: ["nucleolus", "cleavage furrow", "spindle", "cell plate"], correctIndex: 3, explanation: "A cell plate becomes a new wall." },
        { prompt: "Mitosis produces", options: ["two different cells", "four haploid cells", "two identical diploid cells", "one large cell"], correctIndex: 2, explanation: "Two genetically identical daughter cells." },
        { prompt: "An importance of mitosis is", options: ["producing variation", "making gametes", "halving chromosomes", "growth and repair of tissues"], correctIndex: 3, explanation: "Mitosis is for growth, repair and asexual reproduction." },
        { prompt: "After S phase, each chromosome consists of", options: ["no DNA", "one chromatid", "four chromatids", "two sister chromatids"], correctIndex: 3, explanation: "Replication makes two chromatids." },
        { prompt: "Nuclear membranes reform during", options: ["anaphase", "prophase", "metaphase", "telophase"], correctIndex: 3, explanation: "Telophase re-forms the nuclei." },
        { prompt: "Spindle fibres form during", options: ["prophase", "telophase", "S phase", "G1"], correctIndex: 0, explanation: "The spindle assembles in prophase." },
        { prompt: "The daughter cells of mitosis have", options: ["double the chromosomes", "half the chromosomes", "the same chromosome number as the parent", "no chromosomes"], correctIndex: 2, explanation: "Mitosis keeps the chromosome number." },
        { prompt: "Which process replaces worn-out skin cells?", options: ["mitosis", "meiosis", "fertilization", "conjugation"], correctIndex: 0, explanation: "Mitosis repairs and replaces cells." },
        { prompt: "Interphase is best described as a stage of", options: ["cell death", "resting with no activity", "gamete formation", "growth and DNA replication"], correctIndex: 3, explanation: "Interphase is active preparation." },
        { prompt: "The G2 phase involves", options: ["separating chromatids", "copying DNA", "growth and making proteins for division", "forming gametes"], correctIndex: 2, explanation: "G2 prepares proteins after S phase." },
        { prompt: "Mitosis is a form of reproduction in", options: ["fertilization", "sexual reproduction", "asexual reproduction", "meiosis"], correctIndex: 2, explanation: "It underlies asexual reproduction." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the three stages of interphase and state what happens in the S phase.", answerKey: "G1, S, G2. In S phase DNA is replicated (each chromosome copied into two sister chromatids). 1 mark each stage, 1 mark S phase event.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "During which stage of mitosis do sister chromatids separate?", options: ["Telophase", "Prophase", "Metaphase", "Anaphase"], correctIndex: 3, answerKey: "Anaphase separates chromatids. Option D.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "List the four stages of mitosis in order and give one event of each.", answerKey: "Prophase – chromosomes condense/spindle forms; metaphase – chromosomes line up at equator; anaphase – chromatids separate to poles; telophase – nuclei reform. 1 mark each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two reasons why mitosis is important.", answerKey: "Any two: growth; repair/replacement of cells; asexual reproduction. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the cell cycle and explain why the daughter cells produced by mitosis are genetically identical to the parent cell.", answerKey: "Cell cycle: interphase (G1, S with DNA replication, G2) then mitosis (prophase, metaphase, anaphase, telophase) and cytokinesis (up to 9). Identical cells: DNA replicated once produces identical sister chromatids, which separate equally so each daughter gets a full identical set with the same chromosome number (up to 6).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 11.1 The Process of Meiosis (https://openstax.org/books/biology-2e/pages/11-1-the-process-of-meiosis)
    {
      slug: "meiosis",
      title: "Meiosis",
      objective:
        "By the end of the topic, learners should be able to describe the phases of meiosis, explain why the chromosome number is halved, and distinguish meiosis from mitosis.",
      estimatedMinutes: 120,
      notes: `## Why meiosis is needed

- **Meiosis** is the cell division that makes **gametes** (sex cells: sperm and egg) for **sexual reproduction**.
- It **halves the chromosome number**, from **diploid (2n)** to **haploid (n)**, so that when two gametes fuse at fertilization the offspring has the correct **2n** number again.
- Without halving, the chromosome number would **double** each generation.

## Key terms

- **Diploid (2n)** — two sets of chromosomes (body cells); in humans 2n = 46.
- **Haploid (n)** — one set of chromosomes (gametes); in humans n = 23.
- **Homologous chromosomes** — a matching pair, one from each parent, carrying the same genes.

## Two divisions

Meiosis has **two divisions** (meiosis I and meiosis II) after **one** DNA replication, producing **four haploid cells**.

## Meiosis I (the reduction division)

| Stage | What happens |
| --- | --- |
| **Prophase I** | homologous chromosomes pair up; **crossing over** exchanges segments |
| **Metaphase I** | the pairs line up at the equator (**independent assortment**) |
| **Anaphase I** | homologous chromosomes separate to opposite poles (number halved) |
| **Telophase I** | two haploid cells form |

## Meiosis II (like mitosis)

- Prophase II, Metaphase II, Anaphase II, Telophase II.
- The **sister chromatids** separate, giving **four haploid cells** in total.

## Sources of variation in meiosis

1. **Crossing over** — homologous chromosomes exchange segments in prophase I.
2. **Independent assortment** — the random way pairs line up in metaphase I.
3. (With **random fertilization**, these give huge variation in offspring.)

## Meiosis compared with mitosis

| Feature | Mitosis | Meiosis |
| --- | --- | --- |
| Divisions | one | two |
| Daughter cells | 2 | 4 |
| Chromosome number | same (2n) | halved (n) |
| Genetically | identical | different (variation) |
| Purpose | growth, repair | forming gametes |

## Common errors and misconceptions

- **"Meiosis keeps the chromosome number"** — it **halves** it (2n → n).
- **"Meiosis has one division"** — it has **two** divisions (I and II).
- **"Meiosis makes identical cells"** — it makes **four genetically different** cells.
- **"Crossing over happens in mitosis"** — crossing over is a feature of **prophase I of meiosis**.`,
      workedExample: `**Task.** A human cell (2n = 46) undergoes meiosis. (a) How many chromosomes will each gamete have and why? (b) Name two processes in meiosis that create genetic variation and say when they occur. (c) Give two ways meiosis differs from mitosis.

**Solution**

(a) Each gamete will have **23 chromosomes (haploid, n)**. Meiosis **halves** the diploid number (46 → 23) so that fertilization (sperm 23 + egg 23) restores the diploid number **46** in the offspring, keeping the number constant between generations.

(b) Two variation-creating processes:
- **Crossing over** — in **prophase I**, homologous chromosomes exchange segments, mixing alleles.
- **Independent assortment** — in **metaphase I**, the pairs line up randomly, so gametes get different combinations of chromosomes.

(c) Two differences from mitosis:
- Meiosis has **two divisions** producing **four** cells; mitosis has **one** division producing **two**.
- Meiosis **halves** the chromosome number and gives **genetically different** cells; mitosis keeps the number and gives **identical** cells.

**Answer:** each gamete has 23 chromosomes because meiosis halves 2n to n; variation comes from crossing over (prophase I) and independent assortment (metaphase I); meiosis differs from mitosis by having two divisions, four haploid varied cells versus one division and two identical diploid cells.`,
      quiz: [
        { prompt: "Meiosis produces", options: ["body cells", "gametes (sex cells)", "identical cells", "two diploid cells"], correctIndex: 1, explanation: "Meiosis makes haploid gametes." },
        { prompt: "Meiosis changes the chromosome number from", options: ["haploid to diploid", "diploid to haploid", "diploid to diploid", "haploid to haploid"], correctIndex: 1, explanation: "It halves 2n to n." },
        { prompt: "A diploid human body cell has how many chromosomes?", options: ["23", "46", "92", "12"], correctIndex: 1, explanation: "2n = 46 in humans." },
        { prompt: "A human gamete has how many chromosomes?", options: ["92", "46", "12", "23"], correctIndex: 3, explanation: "n = 23 in gametes." },
        { prompt: "Meiosis involves how many divisions?", options: ["three", "one", "two", "four"], correctIndex: 2, explanation: "Meiosis I and II." },
        { prompt: "How many cells result from one meiosis?", options: ["four", "two", "one", "eight"], correctIndex: 0, explanation: "Four haploid cells form." },
        { prompt: "Crossing over occurs during", options: ["telophase I", "metaphase II", "anaphase II", "prophase I"], correctIndex: 3, explanation: "Homologues exchange segments in prophase I." },
        { prompt: "Homologous chromosomes separate during", options: ["metaphase I", "anaphase II", "anaphase I", "prophase II"], correctIndex: 2, explanation: "Anaphase I halves the number." },
        { prompt: "Sister chromatids separate during", options: ["anaphase I", "anaphase II", "prophase I", "metaphase I"], correctIndex: 1, explanation: "Meiosis II separates chromatids." },
        { prompt: "Independent assortment happens in", options: ["prophase II", "metaphase I", "telophase II", "S phase"], correctIndex: 1, explanation: "Random line-up of pairs at the equator." },
        { prompt: "Homologous chromosomes are", options: ["gametes", "identical copies (chromatids)", "a matching pair carrying the same genes", "single chromosomes"], correctIndex: 2, explanation: "One from each parent, same genes." },
        { prompt: "Why must gametes be haploid?", options: ["to make them bigger", "so fertilization restores the diploid number", "to stop variation", "to copy DNA twice"], correctIndex: 1, explanation: "Two haploids fuse to give 2n." },
        { prompt: "Meiosis produces cells that are", options: ["diploid", "genetically identical", "the same as body cells", "genetically different"], correctIndex: 3, explanation: "Variation arises in meiosis." },
        { prompt: "The main purpose of meiosis is", options: ["growth", "forming gametes for sexual reproduction", "repair", "asexual reproduction"], correctIndex: 1, explanation: "Meiosis makes sex cells." },
        { prompt: "Which happens in mitosis but NOT meiosis?", options: ["four cells form", "chromosome number is halved", "chromosome number stays the same", "crossing over"], correctIndex: 2, explanation: "Mitosis keeps 2n; meiosis halves it." },
        { prompt: "DNA is replicated how many times in meiosis?", options: ["not at all", "twice", "three times", "once"], correctIndex: 3, explanation: "One replication, two divisions." },
        { prompt: "Fertilization plus crossing over and assortment produce", options: ["fewer chromosomes each generation", "identical offspring", "genetic variation in offspring", "no offspring"], correctIndex: 2, explanation: "These create variety." },
        { prompt: "In meiosis II the stages resemble", options: ["mitosis", "interphase", "fertilization", "budding"], correctIndex: 0, explanation: "Meiosis II is mitosis-like with haploid cells." },
        { prompt: "If a cell has 2n = 8, its gametes have", options: ["16 chromosomes", "8 chromosomes", "4 chromosomes", "2 chromosomes"], correctIndex: 2, explanation: "Half of 8 is 4." },
        { prompt: "Which term means one set of chromosomes?", options: ["homologous", "diploid", "triploid", "haploid"], correctIndex: 3, explanation: "Haploid = one set (n)." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain why meiosis is necessary for sexual reproduction.", answerKey: "Meiosis halves the chromosome number (diploid to haploid) to make gametes, so that when two gametes fuse at fertilization the diploid number is restored and does not double each generation. Award for halving + restoring at fertilization.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "How many haploid cells are produced from one cell by meiosis?", options: ["Two", "Four", "One", "Eight"], correctIndex: 1, answerKey: "Meiosis produces four haploid cells. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Name two processes in meiosis that produce genetic variation and state when each occurs.", answerKey: "Crossing over – prophase I; independent assortment – metaphase I. 2 marks each (process + timing).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two differences between mitosis and meiosis.", answerKey: "Any two: mitosis one division/2 cells vs meiosis two divisions/4 cells; mitosis keeps chromosome number vs meiosis halves it; mitosis identical cells vs meiosis varied; purpose growth/repair vs gametes. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the process of meiosis and explain its importance in sexual reproduction and genetic variation.", answerKey: "Two divisions after one replication: meiosis I (prophase I with crossing over, metaphase I independent assortment, anaphase I homologues separate, telophase I) and meiosis II (chromatids separate) giving four haploid cells (up to 8). Importance: halves chromosome number for gametes, restored at fertilization; crossing over and independent assortment create variation (up to 7).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 43.1 Reproduction Methods; 32.3 Asexual Reproduction (plants) (https://openstax.org/books/biology-2e/pages/43-1-reproduction-methods)
    {
      slug: "asexual-reproduction",
      title: "Asexual Reproduction",
      objective:
        "By the end of the topic, learners should be able to describe the forms of asexual reproduction in plants and animals and state its advantages and disadvantages.",
      estimatedMinutes: 100,
      notes: `## What is asexual reproduction?

- **Asexual reproduction** — the production of new individuals from a **single parent**, without gametes or fertilization.
- The offspring are **genetically identical** to the parent (**clones**), produced by **mitosis**.

## Forms of asexual reproduction

| Form | Description | Examples |
| --- | --- | --- |
| **Binary fission** | the parent splits into two equal cells | bacteria, Amoeba, Paramecium |
| **Budding** | a small outgrowth (bud) grows and separates | yeast, Hydra |
| **Fragmentation** | the body breaks into pieces, each growing into a new individual | flatworms, starfish, Spirogyra |
| **Spore formation** | tiny spores grow into new organisms | fungi (Rhizopus), ferns |
| **Vegetative propagation** | new plants grow from roots, stems or leaves | see below |

## Vegetative propagation in plants

- **Natural:** new plants grow from **runners/stolons** (grass), **bulbs** (onion), **tubers** (Irish potato), **rhizomes** (ginger), and **suckers**.
- **Artificial (done by people):**
  - **Cuttings** — a piece of stem is planted and grows roots (cassava, sugar cane).
  - **Grafting** — a shoot (**scion**) of a good plant is joined to the rooted **stock** of another (mango, citrus, rubber).
  - **Layering** — a stem is bent and covered with soil until it roots.

## Cloning

- **Cloning** produces individuals genetically identical to the parent. Vegetative propagation is natural cloning; artificial cloning is used in agriculture and research.

## Advantages and disadvantages

| Advantages | Disadvantages |
| --- | --- |
| only **one parent** needed | **no genetic variation** (all identical) |
| **fast** and produces many offspring | a single disease/change can wipe out all |
| offspring keep the parent's **good qualities** | poor adaptation to a changing environment |

## Common errors and misconceptions

- **"Asexual reproduction uses gametes"** — it needs **no gametes and no fertilization**.
- **"Offspring differ from the parent"** — they are **genetically identical clones**.
- **"Grafting joins two roots"** — a **scion (shoot)** is joined to a rooted **stock**.
- **"Asexual reproduction gives variation"** — it gives **no** variation; only sexual reproduction and meiosis do.`,
      workedExample: `**Task.** A farmer wants to grow many cassava plants that all give the same high yield, quickly. (a) Recommend a method of reproduction and explain how it is done. (b) Why will the new plants all give the same yield? (c) State one disadvantage the farmer should be aware of.

**Solution**

(a) The farmer should use **asexual reproduction by stem cuttings (vegetative propagation)**: cut healthy stem pieces from the good cassava plant, each with buds/nodes, and plant them in moist soil, where they grow roots and shoots into new plants.

(b) The new plants will all give the **same high yield** because cuttings produce **genetically identical clones** of the parent (formed by **mitosis**). They keep the parent's good qualities exactly.

(c) A disadvantage: because all the plants are **genetically identical**, there is **no variation**, so if a **disease** or a change in the environment affects one plant it can affect and destroy them **all**.

**Answer:** use stem cuttings (vegetative propagation); the offspring are identical clones so they keep the parent's high yield; but the lack of variation means a single disease could wipe out the whole crop.`,
      quiz: [
        { prompt: "Asexual reproduction needs", options: ["two parents", "one parent only", "gametes", "fertilization"], correctIndex: 1, explanation: "A single parent produces offspring." },
        { prompt: "Offspring of asexual reproduction are", options: ["haploid", "genetically different", "always male", "genetically identical to the parent"], correctIndex: 3, explanation: "They are clones made by mitosis." },
        { prompt: "Splitting into two equal cells is", options: ["grafting", "budding", "binary fission", "fragmentation"], correctIndex: 2, explanation: "Bacteria and Amoeba use binary fission." },
        { prompt: "A yeast or Hydra reproduces by", options: ["budding", "binary fission", "spores", "layering"], correctIndex: 0, explanation: "A bud grows and separates." },
        { prompt: "A starfish regrowing from a broken arm shows", options: ["grafting", "budding", "fragmentation", "binary fission"], correctIndex: 2, explanation: "Fragments regenerate into new individuals." },
        { prompt: "Fungi such as Rhizopus reproduce asexually by", options: ["grafting", "budding only", "cuttings", "spore formation"], correctIndex: 3, explanation: "Spores grow into new fungi." },
        { prompt: "Growing a new plant from a stem piece is a", options: ["bulb", "graft", "runner", "cutting"], correctIndex: 3, explanation: "A cutting roots into a new plant." },
        { prompt: "Joining a scion to a rooted stock is", options: ["fission", "layering", "budding", "grafting"], correctIndex: 3, explanation: "Grafting combines scion and stock." },
        { prompt: "An onion grows new plants from a", options: ["runner", "tuber", "bulb", "cutting"], correctIndex: 2, explanation: "Bulbs are natural vegetative structures." },
        { prompt: "The Irish potato reproduces naturally by", options: ["spores", "bulbs", "grafting", "tubers"], correctIndex: 3, explanation: "A tuber is a modified underground stem." },
        { prompt: "Ginger spreads by", options: ["rhizomes", "seeds only", "grafting", "budding"], correctIndex: 0, explanation: "A rhizome is a horizontal underground stem." },
        { prompt: "Clones are individuals that are", options: ["always sterile", "genetically different", "genetically identical", "diploid gametes"], correctIndex: 2, explanation: "Cloning gives identical offspring." },
        { prompt: "An advantage of asexual reproduction is", options: ["it is always slow", "it creates variation", "it needs two parents", "it is fast and needs one parent"], correctIndex: 3, explanation: "Rapid, single-parent reproduction." },
        { prompt: "A disadvantage of asexual reproduction is", options: ["too much variation", "no genetic variation", "it needs two sexes", "slow reproduction only"], correctIndex: 1, explanation: "Identical offspring adapt poorly to change." },
        { prompt: "Which cell division underlies asexual reproduction?", options: ["mitosis", "meiosis", "fertilization", "budding of gametes"], correctIndex: 0, explanation: "Mitosis makes identical cells." },
        { prompt: "In grafting, the rooted part is the", options: ["bud", "scion", "stock", "runner"], correctIndex: 2, explanation: "The scion is attached to the stock." },
        { prompt: "Layering involves", options: ["joining two plants", "cutting a stem off", "bending a stem into the soil to root", "planting spores"], correctIndex: 2, explanation: "A bent stem roots while still attached." },
        { prompt: "Which spreads by runners/stolons?", options: ["grass/strawberry", "onion", "ginger", "yeast"], correctIndex: 0, explanation: "Runners grow along the ground." },
        { prompt: "Why might a whole cloned crop be destroyed by one disease?", options: ["they are all different", "all plants are genetically identical", "they have gametes", "they are haploid"], correctIndex: 1, explanation: "No variation means no resistance differences." },
        { prompt: "Bacteria mainly reproduce by", options: ["budding of Hydra", "grafting", "binary fission", "spores of ferns"], correctIndex: 2, explanation: "Binary fission splits the cell in two." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define asexual reproduction and state why the offspring are identical to the parent.", answerKey: "Production of new individuals from a single parent without gametes/fertilization. Offspring are identical because they are produced by mitosis (clones). 2 marks definition, 2 identical/mitosis.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is an example of asexual reproduction by budding?", options: ["Yeast", "A starfish arm", "Bacteria splitting", "A mango graft"], correctIndex: 0, answerKey: "Yeast reproduces by budding. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Name two natural and one artificial method of vegetative propagation.", answerKey: "Natural (any two): runners/stolons, bulbs, tubers, rhizomes, suckers. Artificial (one): cuttings, grafting, layering. 1 mark each.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State one advantage and one disadvantage of asexual reproduction.", answerKey: "Advantage: one parent, fast, keeps good qualities. Disadvantage: no genetic variation, so poor adaptation and vulnerability to disease. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the different forms of asexual reproduction with examples, and explain why farmers use vegetative propagation.", answerKey: "Forms: binary fission (bacteria/Amoeba), budding (yeast/Hydra), fragmentation (starfish/flatworm), spore formation (fungi/ferns), vegetative propagation (cuttings, grafting, layering, bulbs, tubers, rhizomes) (up to 10). Farmers use it to produce many identical plants quickly that keep the parent's good qualities (high yield, taste), maturing faster than from seed (up to 5).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 43.1 Reproduction Methods; 43.2 Fertilization (https://openstax.org/books/biology-2e/pages/43-2-fertilization)
    {
      slug: "sexual-reproduction",
      title: "Sexual Reproduction and Fertilization",
      objective:
        "By the end of the topic, learners should be able to describe sexual reproduction, gamete formation and fertilization, and distinguish internal from external fertilization.",
      estimatedMinutes: 100,
      notes: `## What is sexual reproduction?

- **Sexual reproduction** — the production of offspring by the **fusion of two gametes** (sex cells), usually from **two parents**.
- The offspring are **genetically different** from the parents and from each other — this gives **variation**.

## Gametes

- **Gametes** are **haploid (n)** sex cells made by **meiosis**.
- **Male gamete** — small and often moving (e.g. sperm, pollen).
- **Female gamete** — larger, contains food store (e.g. egg/ovum, ovule).

## Conjugation

- **Conjugation** is a simple form of sexual reproduction in some organisms (e.g. *Spirogyra*, some bacteria) where two cells join and **exchange genetic material**.

## Fertilization

- **Fertilization** — the fusion of a male gamete with a female gamete to form a **zygote (2n)**.
- The **zygote** divides by mitosis and grows into a new organism.

## Human gametes and fertilization

- **Spermatogenesis** — making of sperm in the testes; **oogenesis** — making of eggs in the ovaries; both use **meiosis**.
- Human sperm and egg are **haploid (23 chromosomes)**; at fertilization they fuse to form a **zygote (46 chromosomes)**.
- Humans show **internal fertilization**; the zygote implants in the uterus and develops into a baby.

## Internal vs external fertilization

| Type | Where it happens | Examples | Features |
| --- | --- | --- | --- |
| **External** | outside the body, usually in water | fish, frogs | many gametes released; low survival |
| **Internal** | inside the female's body | reptiles, birds, mammals | fewer offspring; higher survival |

## Development after fertilization

- **Oviparity** — eggs are laid and develop outside (birds, most reptiles).
- **Viviparity** — the young develop inside the mother and are born alive (mammals).

## Advantages and disadvantages

| Advantages | Disadvantages |
| --- | --- |
| produces **genetic variation** | needs **two parents** (usually) |
| offspring can **adapt** to change | **slower** than asexual reproduction |
| variation aids survival/evolution | uses more energy to find a mate |

## Common errors and misconceptions

- **"Gametes are diploid"** — gametes are **haploid (n)**; the zygote is diploid (2n).
- **"Fertilization is the same as pollination"** — pollination moves pollen; fertilization is the **fusion of gametes**.
- **"External fertilization is safer"** — it produces many gametes but has **low survival**; internal fertilization gives **higher survival**.
- **"Sexual reproduction gives identical offspring"** — it produces **variation** (offspring differ).`,
      workedExample: `**Task.** In a frog, the female releases eggs into the water and the male releases sperm over them. (a) What type of fertilization is this? (b) Trace what happens from gametes to a new frog. (c) Give one advantage and one disadvantage of sexual reproduction compared with asexual reproduction.

**Solution**

(a) This is **external fertilization** — the gametes fuse **outside** the body, in the water.

(b) From gametes to a new frog:
- The **male gamete (sperm)** and **female gamete (egg)**, both **haploid (n)**, are made by **meiosis**.
- At **fertilization**, a sperm fuses with an egg to form a **zygote (diploid, 2n)**.
- The zygote **divides by mitosis** and develops (into a tadpole) and grows into a new frog.

(c) Compared with asexual reproduction:
- **Advantage:** sexual reproduction produces **genetic variation**, so some offspring may be better able to **survive and adapt** to changes/disease.
- **Disadvantage:** it usually needs **two parents** and is **slower**, and energy is spent finding a mate.

**Answer:** external fertilization; haploid gametes (from meiosis) fuse to form a diploid zygote that divides by mitosis into a new frog; sexual reproduction gives variation (advantage) but needs two parents and is slower (disadvantage).`,
      quiz: [
        { prompt: "Sexual reproduction involves the fusion of", options: ["two body cells", "two gametes", "one gamete only", "spores"], correctIndex: 1, explanation: "Gametes fuse at fertilization." },
        { prompt: "Gametes are", options: ["zygotes", "diploid body cells", "spores", "haploid sex cells"], correctIndex: 3, explanation: "Gametes carry one set (n)." },
        { prompt: "Gametes are made by", options: ["mitosis", "meiosis", "budding", "fission"], correctIndex: 1, explanation: "Meiosis makes haploid gametes." },
        { prompt: "The fusion of a sperm and an egg forms a", options: ["zygote", "gamete", "spore", "clone"], correctIndex: 0, explanation: "Fertilization makes a diploid zygote." },
        { prompt: "A zygote is", options: ["a gamete", "haploid (n)", "diploid (2n)", "a spore"], correctIndex: 2, explanation: "It has two sets from two gametes." },
        { prompt: "Offspring of sexual reproduction are", options: ["genetically different from parents", "identical clones", "always haploid", "identical to each other"], correctIndex: 0, explanation: "Sexual reproduction gives variation." },
        { prompt: "External fertilization usually happens in", options: ["inside the body", "the soil", "the air", "water"], correctIndex: 3, explanation: "Aquatic animals fertilize in water." },
        { prompt: "Internal fertilization occurs in", options: ["mammals, birds and reptiles", "fish only", "frogs only", "algae only"], correctIndex: 0, explanation: "Land animals fertilize internally." },
        { prompt: "The male gamete is usually", options: ["a zygote", "large with food store", "diploid", "small and motile"], correctIndex: 3, explanation: "Sperm/pollen are small and move." },
        { prompt: "The female gamete usually", options: ["is diploid", "moves fast", "is larger with a food store", "is a spore"], correctIndex: 2, explanation: "The egg/ovum stores food." },
        { prompt: "Conjugation in Spirogyra involves", options: ["grafting", "budding", "binary fission", "two cells joining and exchanging genetic material"], correctIndex: 3, explanation: "It is a simple form of sexual reproduction." },
        { prompt: "After fertilization the zygote divides by", options: ["fission", "meiosis", "conjugation", "mitosis"], correctIndex: 3, explanation: "Mitosis develops the embryo." },
        { prompt: "Animals that lay eggs that develop outside are", options: ["oviparous", "viviparous", "haploid", "clones"], correctIndex: 0, explanation: "Oviparity = eggs develop outside." },
        { prompt: "Mammals whose young develop inside and are born alive are", options: ["oviparous", "viviparous", "external fertilizers", "clones"], correctIndex: 1, explanation: "Viviparity = live birth." },
        { prompt: "An advantage of sexual reproduction is", options: ["identical offspring", "no need for a mate", "genetic variation", "fastest reproduction"], correctIndex: 2, explanation: "Variation aids survival and evolution." },
        { prompt: "A disadvantage of sexual reproduction is", options: ["it usually needs two parents and is slower", "no variation", "only one parent", "instant offspring"], correctIndex: 0, explanation: "It is slower and needs a mate." },
        { prompt: "External fertilization typically produces", options: ["no gametes", "few gametes with high survival", "many gametes with low survival", "clones"], correctIndex: 2, explanation: "Large numbers offset low survival." },
        { prompt: "Which correctly describes a gamete and a zygote?", options: ["both n", "gamete 2n, zygote n", "gamete n, zygote 2n", "both 2n"], correctIndex: 2, explanation: "Haploid gametes fuse to a diploid zygote." },
        { prompt: "Variation from sexual reproduction is useful because it", options: ["makes all offspring the same", "helps some offspring survive change", "stops evolution", "removes gametes"], correctIndex: 1, explanation: "Variety improves adaptation." },
        { prompt: "Fertilization differs from pollination because fertilization is the", options: ["growth of a seed", "transfer of pollen", "fusion of gametes", "splitting of a cell"], correctIndex: 2, explanation: "Pollination moves pollen; fertilization fuses gametes." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define fertilization and state the ploidy of a gamete and a zygote.", answerKey: "Fertilization is the fusion of a male and female gamete to form a zygote. A gamete is haploid (n); a zygote is diploid (2n). 2 marks definition, 1 each ploidy.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Gametes are produced by which process?", options: ["Budding", "Mitosis", "Binary fission", "Meiosis"], correctIndex: 3, answerKey: "Meiosis makes haploid gametes. Option D.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between internal and external fertilization, giving an example of each.", answerKey: "Internal: gametes fuse inside the female's body (mammals/birds/reptiles), fewer offspring, higher survival. External: gametes fuse outside, usually in water (fish/frogs), many gametes, low survival. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two advantages of sexual reproduction over asexual reproduction.", answerKey: "Any two: produces genetic variation; offspring can adapt to changing environments/resist disease; variation drives evolution. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Describe sexual reproduction from gamete formation to the development of a new individual, and compare it with asexual reproduction.", answerKey: "Gametes (haploid, by meiosis), male small/motile and female large/food store; fertilization fuses them into a diploid zygote which divides by mitosis and develops; internal vs external fertilization (up to 9). Comparison: sexual gives variation, two parents, slower vs asexual identical clones, one parent, fast (up to 6).", marks: 15 },
      ],
    },
    // source: LibreTexts — Lifespan Development (OpenStax), 10.5 Family and Community Contexts in Adolescence (https://socialsci.libretexts.org/Bookshelves/Human_Development/Lifespan_Development_(OpenStax)/10:_Social_and_Emotional_Development_in_Adolescence_(Ages_12_to_18)/10.05:_Family_and_Community_Contexts_in_Adolescence); LibreTexts — Lifespan Development (Lumen), 8.15 Parenting (https://socialsci.libretexts.org/Bookshelves/Human_Development/Lifespan_Development_(Lumen)/08:_Early_Adulthood/8.15:_Parenting); LibreTexts — Social Problems (Ninh), 3.4.3 Teenage Sex and Pregnancy (https://socialsci.libretexts.org/Courses/Cosumnes_River_College/SOC_301:_Social_Problems_(Ninh)/03:_Master_the_three_sociological_paradigms_used_in_the_analysis_of_social_problems/3.04:_Sexual_Behavior/3.4.03:_Teenage_Sex_and_Pregnancy)
    {
      slug: "responsibilities-of-parenting",
      title: "Responsibilities of Parenting",
      objective:
        "By the end of the topic, learners should be able to describe the roles of parents in child rearing, compare parenting styles, and explain the risks of teenage parenting for the young parent and the child.",
      estimatedMinutes: 80,
      notes: `## What parenting involves

- **Parenting** is a complex process in which parents and children **influence one another**; parents must keep adapting as the child develops.
- Parenting changes from stage to stage (Galinsky's six stages): image-making (pregnancy), nurturing (infancy), authority, interpretive, **interdependent** (adolescence — parents redefine their authority as teens make more of their own decisions) and departure (early adulthood).

## Roles of parents in child rearing

1. **Support and guidance** — parents remain an important source of support and guidance even in adolescence.
2. **Warmth** — responsiveness and emotional support.
3. **Structure** — clear rules and expectations, with reasons explained.
4. **Monitoring and protection** — knowing where children are and protecting family members.
5. **Communication** — open, respectful communication, so children believe the rules are reasonable.
6. **Supporting independence** — allowing growing autonomy within a warm relationship.
- Parenting is passed on: fathers whose own parents gave monitoring, consistent age-appropriate discipline and warmth were more likely to parent constructively themselves — so both mothers and fathers shape the next generation.

## Parenting styles (warmth × structure)

| Style | Warmth | Structure | Typical outcome for adolescents |
| --- | --- | --- | --- |
| **Authoritative** | high | high | positive self-concept, better at school, fewer problem behaviours |
| **Authoritarian** | low | high | rules feel unwelcome and interfere with growing independence |
| **Permissive (indulgent)** | high | low | closeness but little guidance; bewildered by decisions |
| **Neglectful (uninvolved)** | low | low | outcomes opposite to authoritative parenting |

## Risks of teenage parenting

**For the young mother:**
- higher risk of **high blood pressure and anaemia** in pregnancy;
- more early labour, **premature birth** and **low birth weight** babies;
- many pregnant teenagers **drop out of school**;
- **child care** becomes an enormous problem, and teen parents are more likely to live in **poverty**.

**For the child:**
- lower scores in maths, reading and vocabulary; more likely not to finish school;
- more chronic health problems; greater risk of delinquency and drug use later.

## Prevention

- **Delay sexual activity** until ready to take on the responsibilities of a parent.
- Sex education, and access to **contraception** for those who are sexually active.

## Common errors and misconceptions

- **"Strict rules alone make the best parent"** — the best outcomes come from **warmth plus structure** (authoritative).
- **"Teenage pregnancy affects only the mother"** — it also affects the child's health, schooling and future.
- **"Parents matter less once children are teenagers"** — parents remain a key source of support and guidance.`,
      workedExample: `**Task.** Two families are described. Family A sets clear rules, explains them and listens to their son's views. Family B lets their daughter do whatever she wants and rarely asks where she is. (a) Name each parenting style. (b) Predict one likely outcome for each teenager. (c) The daughter becomes pregnant at 16. State two risks for her and two for the baby.

**Solution**

(a) Family A: high warmth + high structure → **authoritative**. Family B: warmth but low structure and little monitoring → **permissive (indulgent)**, close to **neglectful** in monitoring.

(b) Son: more positive self-concept, better school performance, fewer problem behaviours. Daughter: little guidance, faces many decisions alone and is more open to risky choices.

(c) Risks for the mother: **high blood pressure/anaemia**, **dropping out of school**, **poverty** and child-care difficulty. Risks for the baby: **premature birth or low birth weight**; later **poorer school performance** and health problems.

**Answer:** authoritative vs permissive; better outcomes with warmth plus structure; teenage pregnancy brings health, schooling and poverty risks to mother and child.`,
      quiz: [
        { prompt: "Parenting is best described as a process in which", options: ["parents and children influence one another", "only parents influence children", "children raise themselves", "schools replace parents"], correctIndex: 0, explanation: "Influence runs both ways." },
        { prompt: "An authoritative parent shows", options: ["low warmth and high structure", "high warmth and high structure", "high warmth and low structure", "low warmth and low structure"], correctIndex: 1, explanation: "Warmth plus clear rules." },
        { prompt: "An authoritarian parent shows", options: ["high warmth and high structure", "low warmth and high structure", "high warmth and low structure", "low warmth and low structure"], correctIndex: 1, explanation: "Strict but cold." },
        { prompt: "A permissive (indulgent) parent shows", options: ["high warmth and high structure", "low warmth and high structure", "high warmth and low structure", "low warmth and low structure"], correctIndex: 2, explanation: "Close but little guidance." },
        { prompt: "A neglectful parent shows", options: ["high warmth and high structure", "low warmth and low structure", "low warmth and high structure", "high warmth and low structure"], correctIndex: 1, explanation: "Uninvolved." },
        { prompt: "Which style is linked with the best outcomes for adolescents?", options: ["authoritarian", "authoritative", "permissive", "neglectful"], correctIndex: 1, explanation: "Positive self-concept, school success, fewer problems." },
        { prompt: "Parental monitoring means", options: ["punishing all the time", "ignoring children", "knowing where children are and what they do", "giving money only"], correctIndex: 2, explanation: "Monitoring protects children." },
        { prompt: "Rules work best when adolescents believe they are", options: ["reasonable and there for a good reason", "secret", "random", "unexplained"], correctIndex: 0, explanation: "Open communication builds acceptance." },
        { prompt: "In the interdependent stage, parents of teenagers must", options: ["leave home", "stop all contact", "make every decision", "redefine their authority"], correctIndex: 3, explanation: "Teens make more of their own decisions." },
        { prompt: "Pregnant teenagers are at higher risk of", options: ["high blood pressure and anaemia", "stronger bones", "lower risk of illness", "no complications"], correctIndex: 0, explanation: "Teen pregnancy carries health risks." },
        { prompt: "Babies of teenage mothers are more likely to be", options: ["premature or of low birth weight", "heavier than average", "always healthier", "born late"], correctIndex: 0, explanation: "Early labour and low birth weight are more common." },
        { prompt: "A common educational effect of teenage pregnancy is", options: ["higher exam scores", "faster graduation", "dropping out of school", "no change"], correctIndex: 2, explanation: "Many pregnant teens leave school." },
        { prompt: "Children of teenage mothers tend to", options: ["score lower in reading and maths", "score higher in all tests", "never need care", "avoid health problems"], correctIndex: 0, explanation: "Developmental challenges are more common." },
        { prompt: "Fathers who were raised with warmth and consistent discipline are", options: ["always authoritarian", "less likely to be involved", "unable to parent", "more likely to parent constructively"], correctIndex: 3, explanation: "Parenting patterns pass between generations." },
        { prompt: "Which is a role of parents?", options: ["giving support and guidance", "leaving children unsupervised", "refusing to communicate", "avoiding rules entirely"], correctIndex: 0, explanation: "Support and guidance remain essential." },
        { prompt: "The surest way for a teenager to avoid teenage parenting is to", options: ["delay sexual activity", "rely on luck", "ignore advice", "leave school"], correctIndex: 0, explanation: "Delaying sex prevents pregnancy." },
        { prompt: "A teenager with permissive parents may", options: ["be closely monitored", "have too many rules", "face many decisions with little guidance", "never make choices"], correctIndex: 2, explanation: "Low structure gives little guidance." },
        { prompt: "Child care after a teenage birth often becomes", options: ["the school's job", "easy and free", "unnecessary", "an enormous problem"], correctIndex: 3, explanation: "Teen parents struggle with child care." },
        { prompt: "Authoritarian rules may interfere with an adolescent's", options: ["blood group", "height", "eyesight", "growing behavioural autonomy"], correctIndex: 3, explanation: "They feel unwelcome and restrictive." },
        { prompt: "Which pair are the two dimensions used to describe parenting styles?", options: ["warmth and structure", "height and weight", "wealth and age", "religion and language"], correctIndex: 0, explanation: "Responsiveness and demands." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State four roles of parents in child rearing.", answerKey: "Any four: support and guidance; warmth/emotional support; structure/clear rules with reasons; monitoring and protection; open communication; supporting growing independence; providing a model for the next generation. 1 mark each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which parenting style combines high warmth with high structure?", options: ["Permissive", "Authoritarian", "Authoritative", "Neglectful"], correctIndex: 2, answerKey: "Option C.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Compare authoritarian and permissive parenting and their effects on teenagers.", answerKey: "Authoritarian: low warmth, high structure — rules feel unwelcome, interfere with autonomy. Permissive: high warmth, low structure — closeness but little guidance, teen faces decisions alone. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give three risks of teenage parenting for the young mother and two for the child.", answerKey: "Mother: high blood pressure/anaemia; early labour; dropping out of school; poverty; child-care burden. Child: premature/low birth weight; lower test scores; not finishing school; chronic health problems; later delinquency/drug use. 1 mark each.", marks: 5 },
        { type: "ESSAY", prompt: "Discuss the responsibilities of parents in raising children and explain why young people should wait until they are ready before becoming parents.", answerKey: "Roles: support, warmth, structure, monitoring, communication, autonomy, both parents' influence (up to 6). Parenting styles and authoritative outcomes (up to 3). Teen parenting risks for mother and child — health, schooling, poverty, child outcomes (up to 5). Conclusion on delaying sex/contraception (1).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal), 22.10 Infertility (https://bio.libretexts.org/Bookshelves/Human_Biology/Book%3A_Human_Biology_(Wakim_and_Grewal)/22%3A_Reproductive_System/22.10%3A_Infertility); 22.11 Contraception (https://bio.libretexts.org/Bookshelves/Human_Biology/Book%3A_Human_Biology_(Wakim_and_Grewal)/22%3A_Reproductive_System/22.11%3A_Contraception); LibreTexts — Sexuality, the Self and Society, 14.2 Consent (https://socialsci.libretexts.org/Bookshelves/Gender_Studies/Sexuality_the_Self_and_Society_(Ruhman_Bowman_Jackson_Lushtak_Newman_and_Sunder)/14:_Consent_Coercion_and_Sexual_Violence/14.02:_Consent); LibreTexts — Introduction to Ethnic Studies, 8.4 Intersectionality and Reproductive Justice (https://socialsci.libretexts.org/Bookshelves/Ethnic_Studies/Introduction_to_Ethnic_Studies_(Fischer_et_al.)/08:_Intersectionality-_Centering_Women_of_Color/8.04:_Intersectionality_and_Reproductive_Justice_-_Part_I)
    {
      slug: "sexual-decisions-and-impact-on-the-family",
      title: "Sexual Decisions and Their Impact on the Family",
      objective:
        "By the end of the topic, learners should be able to explain how to make healthy decisions about sex, describe consent, contraception and reproductive rights, and explain infertility and how sexual decisions affect the family.",
      estimatedMinutes: 100,
      notes: `## Making healthy decisions about sex

- Sexual decisions affect **health, education and the whole family** — an unplanned pregnancy or an STI changes the future of the young person, the child and the family.
- **Abstinence** (avoiding sexual contact) is the only completely effective way to prevent both pregnancy and STIs.
- Alcohol and drugs reduce judgment and behavioural control and lead to risky decisions.

## Consent

- **Consent** — an agreement between participants to engage in sexual activity; it must be **clearly and freely communicated**.
- Silence or a lack of resistance is **not** consent.
- Consent must be (FRIES): **F**reely given (no pressure or manipulation, not under the influence), **R**eversible (anyone can change their mind at any time), **I**nformed, **E**nthusiastic and **S**pecific (yes to one thing is not yes to others).
- People who are **intoxicated** by alcohol or drugs, or who lack legal capacity, **cannot give consent**.

## Reproductive health and rights

- Reproductive justice names three rights: the right **not to have** a child, the right **to have** a child, and the right **to parent** children in safe and healthy environments.
- Responsible decisions use these rights: choosing whether and when to have children, and using health services and contraception.

## Contraception (family planning)

- **Contraception** — any method or device used to prevent pregnancy. Effectiveness is measured by the **failure rate** (percentage of women who become pregnant in the first year of use); typical use fails more often than perfect use.

| Method | How it works | Typical failure rate |
| --- | --- | --- |
| **Barrier** (condom, diaphragm) | blocks sperm from reaching the egg | about 18% |
| **Hormonal** (pill, implant, injection, patch) | hormones prevent ovulation | about 6–12% |
| **IUD** (intrauterine device) | T-shaped device in the uterus | less than 1% |
| **Behavioural** (fertility awareness, withdrawal) | avoid sex near ovulation / withdraw | 20–25% or more |
| **Sterilization** (vasectomy, tubal ligation) | permanent surgical method | nearly 100% effective |

- **Only condoms** also protect against **sexually transmitted infections**.

## Infertility

- **Infertility** — failure to achieve a pregnancy after at least **one year** of regular, unprotected intercourse.
- **Male causes:** too few sperm or poorly moving sperm (often due to a varicocele); blockage of the tract. Risk factors: heavy alcohol use, drug abuse, smoking, toxins, radiation.
- **Female causes:** failure to ovulate (most often **polycystic ovary syndrome**); blocked Fallopian tubes; endometriosis; **pelvic inflammatory disease (PID)** — often the result of untreated STIs such as chlamydia and gonorrhoea; fibroids. Risk factors: smoking, excess alcohol, stress, poor nutrition, abnormal weight.
- Fertility peaks in the mid-twenties and declines with age.
- **Treatments:** hormones to stimulate ovulation, antibiotics for infection, surgery to remove blockages, **assisted reproductive technology** such as in vitro fertilization (IVF).

## Impact of sexual decisions on the family

| Decision | Possible impact on the family |
| --- | --- |
| delaying sex / abstinence | health and schooling protected; no unplanned pregnancy |
| unprotected sex | unplanned pregnancy, school drop-out, poverty, STIs |
| untreated STI | PID and **infertility**, harm to future children |
| using contraception correctly | planned family size and spacing |

## Common errors and misconceptions

- **"Not saying no means yes"** — silence is not consent.
- **"The pill protects against STIs"** — only condoms protect against STIs.
- **"Infertility is always the woman's problem"** — men and women both have causes.
- **"STIs only matter now"** — untreated STIs can cause infertility later.`,
      workedExample: `**Task.** Kofi and Ama, both 17, are dating. Ama's friends say "everyone is doing it". (a) Explain why Ama's silence would not be consent. (b) Compare condoms and the pill as choices for a couple who are sexually active. (c) Explain how an untreated STI could affect their ability to start a family later.

**Solution**

(a) **Consent** must be clearly and freely communicated; silence or lack of resistance is not consent, and consent given under pressure or while drunk is not freely given.

(b) **Condoms**: barrier method, typical failure about 18%, and the **only method that also protects against STIs**. **The pill**: hormonal, typical failure about 6–12% (better at preventing pregnancy) but **no STI protection**. Abstinence remains the only completely effective choice.

(c) Untreated chlamydia or gonorrhoea can cause **pelvic inflammatory disease**, which damages the Fallopian tubes and can cause **infertility** — so a decision made at 17 could prevent them from having children later.

**Answer:** silence is not consent; condoms protect against STIs, the pill does not; untreated STIs can lead to PID and infertility.`,
      quiz: [
        { prompt: "The only completely effective way to avoid both pregnancy and STIs is", options: ["withdrawal", "the pill", "abstinence", "the IUD"], correctIndex: 2, explanation: "Avoiding sexual contact removes the risk." },
        { prompt: "Consent must be", options: ["given by parents", "assumed if no one objects", "given once forever", "clearly and freely communicated"], correctIndex: 3, explanation: "Freely given and clear." },
        { prompt: "Silence or lack of resistance means", options: ["no consent has been given", "consent", "agreement for everything", "a contract"], correctIndex: 0, explanation: "Silence is not consent." },
        { prompt: "'Reversible' consent means", options: ["anyone can change their mind at any time", "consent lasts forever", "consent cannot be withdrawn", "only adults can refuse"], correctIndex: 0, explanation: "Consent can be withdrawn." },
        { prompt: "A person who is drunk", options: ["gives stronger consent", "cannot give valid consent", "always consents", "must agree"], correctIndex: 1, explanation: "Intoxication removes capacity." },
        { prompt: "Contraception is", options: ["any method or device used to prevent pregnancy", "a treatment for infertility", "a vaccine", "an antibiotic"], correctIndex: 0, explanation: "Also called birth control." },
        { prompt: "The failure rate of a contraceptive is", options: ["its price", "the percentage of women who become pregnant in the first year of use", "how long it lasts", "its size"], correctIndex: 1, explanation: "Lower failure rate = more effective." },
        { prompt: "Which contraceptive also protects against STIs?", options: ["pill", "condom", "IUD", "implant"], correctIndex: 1, explanation: "Only condoms protect against STIs." },
        { prompt: "Hormonal contraceptives mainly work by", options: ["curing STIs", "killing bacteria", "blocking the urethra", "preventing ovulation"], correctIndex: 3, explanation: "They stop egg release." },
        { prompt: "Which method has a failure rate of less than 1%?", options: ["IUD", "withdrawal", "condom (typical use)", "fertility awareness"], correctIndex: 0, explanation: "IUDs are highly effective." },
        { prompt: "Vasectomy and tubal ligation are", options: ["hormonal methods", "barrier methods", "sterilization methods", "behavioural methods"], correctIndex: 2, explanation: "Permanent surgical methods." },
        { prompt: "Infertility is failure to achieve pregnancy after at least", options: ["ten years", "one week", "one month", "one year of regular unprotected intercourse"], correctIndex: 3, explanation: "Medical definition: one year." },
        { prompt: "The most common cause of failure to ovulate is", options: ["tetanus", "polycystic ovary syndrome", "malaria", "anaemia"], correctIndex: 1, explanation: "PCOS is the leading cause." },
        { prompt: "Untreated chlamydia can cause infertility through", options: ["scurvy", "rickets", "pelvic inflammatory disease", "goitre"], correctIndex: 2, explanation: "PID damages the tubes." },
        { prompt: "A risk factor for male infertility is", options: ["drinking water", "eating vegetables", "regular exercise", "heavy alcohol use"], correctIndex: 3, explanation: "Alcohol, drugs and smoking harm sperm." },
        { prompt: "In vitro fertilization (IVF) is a form of", options: ["assisted reproductive technology", "contraception", "sterilization", "vaccination"], correctIndex: 0, explanation: "Eggs and sperm are combined outside the body." },
        { prompt: "Reproductive justice includes the right to", options: ["avoid education", "force others to have children", "refuse all health care", "have or not have a child and parent safely"], correctIndex: 3, explanation: "Three core rights." },
        { prompt: "Typical use of a contraceptive usually fails", options: ["always", "less often than perfect use", "never", "more often than perfect use"], correctIndex: 3, explanation: "Inconsistent use lowers effectiveness." },
        { prompt: "Fertility in women declines continuously after about age", options: ["70", "10", "15", "30"], correctIndex: 3, explanation: "It peaks in the mid-twenties." },
        { prompt: "An unplanned teenage pregnancy can affect the family by", options: ["causing school drop-out and financial strain", "always increasing income", "having no effect", "improving exam results"], correctIndex: 0, explanation: "Decisions affect the whole family." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define consent and state three of its features.", answerKey: "Consent: an agreement between participants to engage in sexual activity, clearly and freely communicated. Features (any three): freely given, reversible, informed, enthusiastic, specific; silence is not consent; intoxicated people cannot consent. 1 + 3.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which contraceptive method also reduces the risk of STIs?", options: ["Implant", "Oral pill", "IUD", "Condom"], correctIndex: 3, answerKey: "Only condoms protect against STIs. Option D.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define infertility and give two causes in men and two in women.", answerKey: "Failure to achieve pregnancy after at least one year of regular unprotected intercourse. Men: low/poorly motile sperm (varicocele), blocked tract, alcohol/drugs/smoking. Women: PCOS/failure to ovulate, blocked tubes, PID from STIs, endometriosis, fibroids. 1 + 4.", marks: 5 },
        { type: "SHORT_ANSWER", prompt: "Explain two ways a teenager's sexual decisions can affect his or her family.", answerKey: "Any two: unplanned pregnancy causing school drop-out, poverty and child-care burden; STI causing illness and later infertility; responsible decisions protecting health and education. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss how young people can make responsible sexual decisions, referring to consent, contraception, reproductive rights and infertility.", answerKey: "Abstinence and delay; effect of alcohol (2). Consent features (3). Contraception: types, failure rates, condoms and STIs (4). Reproductive rights (2). Infertility: causes incl. STIs/PID, prevention, treatments (3). Impact on family (1).", marks: 15 },
      ],
    },
    // source: LibreTexts — Introductory Psychology (OpenStax), 4.6 Substance Use and Abuse (https://socialsci.libretexts.org/Bookshelves/Psychology/Book:_Introductory_Psychology_(OpenStax)/04:_States_of_Consciousness/4.06:_Substance_Use_and_Abuse); K12 LibreTexts — Health: Skills for a Healthy Me, 5.4 Bust Up Bullying (https://k12.libretexts.org/Bookshelves/Health_-_Skills_For_A_Healthy_Me/05:_Make_My_Mind_Strong/5.04:_Section_4-)
    {
      slug: "youth-advocacy-substance-abuse-and-sbv",
      title: "Advocacy: Role of Youth in Stopping Substance Abuse and School-Based Violence",
      objective:
        "By the end of the topic, learners should be able to explain substance abuse and its effects, describe forms of school-based violence and bullying, and plan youth advocacy actions against both.",
      estimatedMinutes: 90,
      notes: `## Substance use and abuse

- **Substance use disorder** — a compulsive pattern of drug use, often with both physical and psychological dependence.
- **Physical dependence** — body functions change, so the user suffers **withdrawal** when the drug is stopped.
- **Psychological dependence** — an emotional need for the drug, used to relieve distress.
- **Tolerance** — needing more and more of the drug to get the same effect.
- **Withdrawal** — negative symptoms when use stops, usually the opposite of the drug's effects.

## Main groups of drugs

| Group | Examples | Effects and dangers |
| --- | --- | --- |
| **Depressants** | alcohol, barbiturates, benzodiazepines | suppress the nervous system; alcohol slows reaction time, lowers alertness and **reduces behavioural control** |
| **Stimulants** | cocaine, amphetamines, caffeine, nicotine | increase neural activity; can cause anxiety, hallucinations and paranoia |
| **Opioids** | heroin, morphine, codeine | relieve pain, cause euphoria; extremely high potential for abuse |
| **Hallucinogens** | (e.g. LSD) | profound changes in perception; vivid hallucinations |

- Because alcohol reduces judgment and control, it is linked to **risky sexual decisions** and violence; a person who is intoxicated cannot give consent.

## School-based violence and bullying

- **Bullying** — unwanted, aggressive behaviour that is **repeated** (or likely to be repeated) and involves a real or perceived **power imbalance**.

| Type | Examples |
| --- | --- |
| **Verbal** | name-calling, taunting, threats, inappropriate sexual comments |
| **Social (relational)** | excluding someone, spreading rumours, public embarrassment |
| **Physical** | hitting, kicking, spitting, breaking belongings |
| **Cyberbullying** | posting or sharing negative, false or personal information on phones, computers or social media |

- **Effects on victims:** mental-health problems (anxiety, depression), low self-esteem, sleep and eating changes, health complaints, poorer school performance.
- **Effects on bystanders:** depression and anxiety, academic decline and increased substance use.
- **Bystander** — a witness who only watches; **defender** — a bystander who tries to stop the bullying or comforts the victim.

## Role of the youth: advocacy

1. **Refuse and resist** — say no to drugs and alcohol; stay with friends who make healthy choices.
2. **Be a defender, not a bystander** — stay calm, support the victim and **tell a trusted adult**.
3. **Join or start anti-bullying and anti-drug groups** in school.
4. **Raise awareness** — posters, poems, songs, speeches, radio talks and peaceful campaigns (activities named in the syllabus).
5. **Help victims get support** — e.g. a school help line, counsellors and local organisations.

## Common errors and misconceptions

- **"Alcohol is not a drug"** — alcohol is a **depressant** drug.
- **"Only physical attacks count as violence"** — verbal, social and cyber-bullying also cause serious harm.
- **"Watching is harmless"** — bystanders are affected too, and can act as defenders.
- **"I can stop any time"** — tolerance and dependence make stopping hard.`,
      workedExample: `**Task.** At a school, older students pressure Form 1 pupils to drink alcohol behind the canteen and post embarrassing photos of those who refuse. (a) Identify the forms of bullying involved. (b) Explain two effects of alcohol on the pupils' behaviour. (c) Plan three advocacy actions the student council could take.

**Solution**

(a) **Verbal/social bullying** (pressure, public embarrassment) and **cyberbullying** (posting embarrassing photos); there is a **power imbalance** (older vs younger students) and it is repeated.

(b) Alcohol is a **depressant**: it slows reaction time and lowers alertness, and it **reduces behavioural control**, so pupils may make risky decisions (including sexual ones) or become involved in violence.

(c) Advocacy actions:
1. An **awareness campaign** — posters, songs and speeches against drugs and bullying.
2. Train pupils to be **defenders** and to **report to trusted adults**; set up a confidential help line.
3. Form an **anti-bullying/anti-drug club** that works with teachers, parents and local organisations.

**Answer:** verbal/social and cyberbullying; alcohol lowers control and judgment; campaigns, defender training with reporting, and a youth club.`,
      quiz: [
        { prompt: "Substance use disorder is", options: ["a compulsive pattern of drug use", "using medicine as prescribed", "eating healthy food", "a vitamin deficiency"], correctIndex: 0, explanation: "Often with physical and psychological dependence." },
        { prompt: "Needing more of a drug to get the same effect is", options: ["immunity", "withdrawal", "consent", "tolerance"], correctIndex: 3, explanation: "Tolerance builds with repeated use." },
        { prompt: "Negative symptoms when a drug is stopped are called", options: ["tolerance", "withdrawal", "euphoria", "stimulation"], correctIndex: 1, explanation: "Withdrawal is usually opposite to the drug's effects." },
        { prompt: "An emotional need for a drug is", options: ["tolerance", "physical dependence", "psychological dependence", "immunity"], correctIndex: 2, explanation: "It relieves distress." },
        { prompt: "Alcohol is classified as a", options: ["stimulant", "depressant", "hallucinogen", "vitamin"], correctIndex: 1, explanation: "It suppresses the nervous system." },
        { prompt: "Nicotine and caffeine are", options: ["stimulants", "depressants", "opioids", "hallucinogens"], correctIndex: 0, explanation: "They increase neural activity." },
        { prompt: "Heroin and morphine are", options: ["vitamins", "stimulants", "depressants like caffeine", "opioids"], correctIndex: 3, explanation: "Opioids have very high abuse potential." },
        { prompt: "One effect of alcohol is", options: ["faster reaction time", "reduced behavioural control", "sharper eyesight", "greater alertness"], correctIndex: 1, explanation: "It slows reactions and lowers control." },
        { prompt: "Bullying involves repeated aggression and", options: ["a power imbalance", "equal friends playing", "a single accident", "teachers only"], correctIndex: 0, explanation: "Real or perceived power imbalance." },
        { prompt: "Spreading rumours and excluding someone is", options: ["not bullying", "physical bullying", "cyberbullying only", "social (relational) bullying"], correctIndex: 3, explanation: "It harms reputation and relationships." },
        { prompt: "Hitting, kicking and breaking belongings is", options: ["social bullying", "verbal bullying", "physical bullying", "consent"], correctIndex: 2, explanation: "It harms body or possessions." },
        { prompt: "Posting false information about someone on social media is", options: ["monitoring", "physical bullying", "advocacy", "cyberbullying"], correctIndex: 3, explanation: "Bullying through digital devices." },
        { prompt: "Name-calling and threats are", options: ["physical bullying", "verbal bullying", "social bullying", "cyberbullying"], correctIndex: 1, explanation: "Saying or writing mean things." },
        { prompt: "A bystander who tries to stop bullying is a", options: ["bully", "defender", "victim", "spectator"], correctIndex: 1, explanation: "Defenders help the victim." },
        { prompt: "Victims of bullying often experience", options: ["higher confidence", "better grades", "more sleep", "anxiety, depression and lower self-esteem"], correctIndex: 3, explanation: "Bullying harms mental health." },
        { prompt: "Bystanders to bullying may suffer", options: ["no effects at all", "anxiety and increased substance use", "better health", "higher marks"], correctIndex: 1, explanation: "Witnessing bullying harms bystanders too." },
        { prompt: "A key first step when you see bullying is to", options: ["film it and post it", "join in", "tell a trusted adult", "ignore it forever"], correctIndex: 2, explanation: "Reporting gets help." },
        { prompt: "Which is an advocacy action against drug abuse?", options: ["pressuring others to drink", "selling alcohol to friends", "keeping silent", "an awareness campaign with posters and songs"], correctIndex: 3, explanation: "Raising awareness is advocacy." },
        { prompt: "Stimulants can cause", options: ["anxiety and paranoia", "deep sleep only", "no effects", "lower heart rate only"], correctIndex: 0, explanation: "High doses produce anxiety and hallucinations." },
        { prompt: "Physical dependence means", options: ["immunity to the drug", "no change in the body", "only an emotional need", "body functions change and withdrawal occurs when stopping"], correctIndex: 3, explanation: "The body adapts to the drug." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between tolerance and withdrawal.", answerKey: "Tolerance: needing more of a drug to get the same effect. Withdrawal: negative symptoms when drug use stops, usually opposite to the drug's effects. 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which drug group does alcohol belong to?", options: ["Hallucinogens", "Stimulants", "Opioids", "Depressants"], correctIndex: 3, answerKey: "Alcohol suppresses the nervous system. Option D.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Name and describe the four types of bullying.", answerKey: "Verbal (mean things said/written, threats); social/relational (exclusion, rumours, embarrassment); physical (hitting, kicking, damaging belongings); cyberbullying (via phones, computers, social media). 1 mark each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State three effects of bullying on victims and one on bystanders.", answerKey: "Victims: anxiety/depression, low self-esteem, sleep/eating changes, health complaints, poorer school work. Bystanders: depression/anxiety, academic decline, increased substance use. 1 mark each.", marks: 4 },
        { type: "ESSAY", prompt: "As a youth leader, plan a school campaign against substance abuse and school-based violence. Explain the problems and the actions you would take.", answerKey: "Substance abuse: SUD, dependence, tolerance, drug groups, alcohol and judgment (up to 5). Bullying/SBV: definition, types, effects on victims and bystanders (up to 5). Actions: awareness campaign, defender training and reporting to trusted adults, clubs, help line, partners (up to 5).", marks: 15 },
      ],
    },
  ],
};
