import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 11,
// Semester Two, Period IV: Cell Growth and Division (Mitosis and Meiosis);
// Reproduction. Topics follow the CONTENTS items: (1) cell cycle and mitosis;
// (2) meiosis; (3) asexual reproduction (fission, budding, vegetative
// propagation, cloning); (4) sexual reproduction (conjugation, gamete
// formation, fertilization); (5) human reproduction, parenting and responsible
// sexual decisions.
export const biologyG11P4: PeriodContent = {
  grade: 11,
  number: 4,
  title: "Cell Growth and Division; Reproduction",
  summary:
    "Period IV of the MoE Grade 11 Biology syllabus. Learners study the cell cycle and mitosis by which cells grow and repair, meiosis which halves the chromosome number to form gametes, the forms of asexual reproduction (fission, budding, vegetative propagation and cloning) and sexual reproduction (gamete formation and fertilization), and human reproduction with the responsible decisions and parenting that go with it.",
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
        { prompt: "The cell cycle is the sequence by which a cell", options: ["grows and divides", "only dies", "makes gametes only", "photosynthesises"], correctIndex: 0, explanation: "It covers growth and division." },
        { prompt: "DNA replication happens during", options: ["the S phase of interphase", "prophase", "anaphase", "telophase"], correctIndex: 0, explanation: "DNA is copied in S phase." },
        { prompt: "The longest part of the cell cycle is", options: ["interphase", "prophase", "metaphase", "cytokinesis"], correctIndex: 0, explanation: "Interphase (G1, S, G2) takes the most time." },
        { prompt: "Which is the correct order of mitosis?", options: ["prophase, metaphase, anaphase, telophase", "metaphase, prophase, telophase, anaphase", "anaphase, telophase, prophase, metaphase", "telophase, anaphase, metaphase, prophase"], correctIndex: 0, explanation: "PMAT is the order." },
        { prompt: "Chromosomes line up at the middle of the cell during", options: ["metaphase", "prophase", "anaphase", "telophase"], correctIndex: 0, explanation: "Metaphase = alignment at the equator." },
        { prompt: "Sister chromatids separate during", options: ["anaphase", "metaphase", "prophase", "interphase"], correctIndex: 0, explanation: "Anaphase pulls chromatids apart." },
        { prompt: "During prophase the chromosomes", options: ["condense and become visible", "line up at the equator", "reach the poles", "are copied"], correctIndex: 0, explanation: "Prophase condenses chromosomes." },
        { prompt: "Division of the cytoplasm is called", options: ["cytokinesis", "mitosis", "interphase", "replication"], correctIndex: 0, explanation: "Cytokinesis splits the cytoplasm." },
        { prompt: "In animal cells, cytokinesis occurs by", options: ["a cleavage furrow pinching in", "a cell plate forming", "a cell wall splitting", "budding"], correctIndex: 0, explanation: "The membrane pinches to divide the cell." },
        { prompt: "In plant cells, cytokinesis forms a", options: ["cell plate", "cleavage furrow", "spindle", "nucleolus"], correctIndex: 0, explanation: "A cell plate becomes a new wall." },
        { prompt: "Mitosis produces", options: ["two identical diploid cells", "four haploid cells", "two different cells", "one large cell"], correctIndex: 0, explanation: "Two genetically identical daughter cells." },
        { prompt: "An importance of mitosis is", options: ["growth and repair of tissues", "making gametes", "halving chromosomes", "producing variation"], correctIndex: 0, explanation: "Mitosis is for growth, repair and asexual reproduction." },
        { prompt: "After S phase, each chromosome consists of", options: ["two sister chromatids", "one chromatid", "four chromatids", "no DNA"], correctIndex: 0, explanation: "Replication makes two chromatids." },
        { prompt: "Nuclear membranes reform during", options: ["telophase", "prophase", "metaphase", "anaphase"], correctIndex: 0, explanation: "Telophase re-forms the nuclei." },
        { prompt: "Spindle fibres form during", options: ["prophase", "telophase", "S phase", "G1"], correctIndex: 0, explanation: "The spindle assembles in prophase." },
        { prompt: "The daughter cells of mitosis have", options: ["the same chromosome number as the parent", "half the chromosomes", "double the chromosomes", "no chromosomes"], correctIndex: 0, explanation: "Mitosis keeps the chromosome number." },
        { prompt: "Which process replaces worn-out skin cells?", options: ["mitosis", "meiosis", "fertilization", "conjugation"], correctIndex: 0, explanation: "Mitosis repairs and replaces cells." },
        { prompt: "Interphase is best described as a stage of", options: ["growth and DNA replication", "resting with no activity", "gamete formation", "cell death"], correctIndex: 0, explanation: "Interphase is active preparation." },
        { prompt: "The G2 phase involves", options: ["growth and making proteins for division", "copying DNA", "separating chromatids", "forming gametes"], correctIndex: 0, explanation: "G2 prepares proteins after S phase." },
        { prompt: "Mitosis is a form of reproduction in", options: ["asexual reproduction", "sexual reproduction", "fertilization", "meiosis"], correctIndex: 0, explanation: "It underlies asexual reproduction." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the three stages of interphase and state what happens in the S phase.", answerKey: "G1, S, G2. In S phase DNA is replicated (each chromosome copied into two sister chromatids). 1 mark each stage, 1 mark S phase event.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "During which stage of mitosis do sister chromatids separate?", options: ["Anaphase", "Prophase", "Metaphase", "Telophase"], correctIndex: 0, answerKey: "Anaphase separates chromatids. Option A.", marks: 3 },
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
        { prompt: "Meiosis produces", options: ["gametes (sex cells)", "body cells", "identical cells", "two diploid cells"], correctIndex: 0, explanation: "Meiosis makes haploid gametes." },
        { prompt: "Meiosis changes the chromosome number from", options: ["diploid to haploid", "haploid to diploid", "diploid to diploid", "haploid to haploid"], correctIndex: 0, explanation: "It halves 2n to n." },
        { prompt: "A diploid human body cell has how many chromosomes?", options: ["46", "23", "92", "12"], correctIndex: 0, explanation: "2n = 46 in humans." },
        { prompt: "A human gamete has how many chromosomes?", options: ["23", "46", "12", "92"], correctIndex: 0, explanation: "n = 23 in gametes." },
        { prompt: "Meiosis involves how many divisions?", options: ["two", "one", "three", "four"], correctIndex: 0, explanation: "Meiosis I and II." },
        { prompt: "How many cells result from one meiosis?", options: ["four", "two", "one", "eight"], correctIndex: 0, explanation: "Four haploid cells form." },
        { prompt: "Crossing over occurs during", options: ["prophase I", "metaphase II", "anaphase II", "telophase I"], correctIndex: 0, explanation: "Homologues exchange segments in prophase I." },
        { prompt: "Homologous chromosomes separate during", options: ["anaphase I", "anaphase II", "metaphase I", "prophase II"], correctIndex: 0, explanation: "Anaphase I halves the number." },
        { prompt: "Sister chromatids separate during", options: ["anaphase II", "anaphase I", "prophase I", "metaphase I"], correctIndex: 0, explanation: "Meiosis II separates chromatids." },
        { prompt: "Independent assortment happens in", options: ["metaphase I", "prophase II", "telophase II", "S phase"], correctIndex: 0, explanation: "Random line-up of pairs at the equator." },
        { prompt: "Homologous chromosomes are", options: ["a matching pair carrying the same genes", "identical copies (chromatids)", "gametes", "single chromosomes"], correctIndex: 0, explanation: "One from each parent, same genes." },
        { prompt: "Why must gametes be haploid?", options: ["so fertilization restores the diploid number", "to make them bigger", "to stop variation", "to copy DNA twice"], correctIndex: 0, explanation: "Two haploids fuse to give 2n." },
        { prompt: "Meiosis produces cells that are", options: ["genetically different", "genetically identical", "the same as body cells", "diploid"], correctIndex: 0, explanation: "Variation arises in meiosis." },
        { prompt: "The main purpose of meiosis is", options: ["forming gametes for sexual reproduction", "growth", "repair", "asexual reproduction"], correctIndex: 0, explanation: "Meiosis makes sex cells." },
        { prompt: "Which happens in mitosis but NOT meiosis?", options: ["chromosome number stays the same", "chromosome number is halved", "four cells form", "crossing over"], correctIndex: 0, explanation: "Mitosis keeps 2n; meiosis halves it." },
        { prompt: "DNA is replicated how many times in meiosis?", options: ["once", "twice", "three times", "not at all"], correctIndex: 0, explanation: "One replication, two divisions." },
        { prompt: "Fertilization plus crossing over and assortment produce", options: ["genetic variation in offspring", "identical offspring", "fewer chromosomes each generation", "no offspring"], correctIndex: 0, explanation: "These create variety." },
        { prompt: "In meiosis II the stages resemble", options: ["mitosis", "interphase", "fertilization", "budding"], correctIndex: 0, explanation: "Meiosis II is mitosis-like with haploid cells." },
        { prompt: "If a cell has 2n = 8, its gametes have", options: ["4 chromosomes", "8 chromosomes", "16 chromosomes", "2 chromosomes"], correctIndex: 0, explanation: "Half of 8 is 4." },
        { prompt: "Which term means one set of chromosomes?", options: ["haploid", "diploid", "triploid", "homologous"], correctIndex: 0, explanation: "Haploid = one set (n)." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain why meiosis is necessary for sexual reproduction.", answerKey: "Meiosis halves the chromosome number (diploid to haploid) to make gametes, so that when two gametes fuse at fertilization the diploid number is restored and does not double each generation. Award for halving + restoring at fertilization.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "How many haploid cells are produced from one cell by meiosis?", options: ["Four", "Two", "One", "Eight"], correctIndex: 0, answerKey: "Meiosis produces four haploid cells. Option A.", marks: 3 },
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
        { prompt: "Asexual reproduction needs", options: ["one parent only", "two parents", "gametes", "fertilization"], correctIndex: 0, explanation: "A single parent produces offspring." },
        { prompt: "Offspring of asexual reproduction are", options: ["genetically identical to the parent", "genetically different", "always male", "haploid"], correctIndex: 0, explanation: "They are clones made by mitosis." },
        { prompt: "Splitting into two equal cells is", options: ["binary fission", "budding", "grafting", "fragmentation"], correctIndex: 0, explanation: "Bacteria and Amoeba use binary fission." },
        { prompt: "A yeast or Hydra reproduces by", options: ["budding", "binary fission", "spores", "layering"], correctIndex: 0, explanation: "A bud grows and separates." },
        { prompt: "A starfish regrowing from a broken arm shows", options: ["fragmentation", "budding", "grafting", "binary fission"], correctIndex: 0, explanation: "Fragments regenerate into new individuals." },
        { prompt: "Fungi such as Rhizopus reproduce asexually by", options: ["spore formation", "budding only", "cuttings", "grafting"], correctIndex: 0, explanation: "Spores grow into new fungi." },
        { prompt: "Growing a new plant from a stem piece is a", options: ["cutting", "graft", "runner", "bulb"], correctIndex: 0, explanation: "A cutting roots into a new plant." },
        { prompt: "Joining a scion to a rooted stock is", options: ["grafting", "layering", "budding", "fission"], correctIndex: 0, explanation: "Grafting combines scion and stock." },
        { prompt: "An onion grows new plants from a", options: ["bulb", "tuber", "runner", "cutting"], correctIndex: 0, explanation: "Bulbs are natural vegetative structures." },
        { prompt: "The Irish potato reproduces naturally by", options: ["tubers", "bulbs", "grafting", "spores"], correctIndex: 0, explanation: "A tuber is a modified underground stem." },
        { prompt: "Ginger spreads by", options: ["rhizomes", "seeds only", "grafting", "budding"], correctIndex: 0, explanation: "A rhizome is a horizontal underground stem." },
        { prompt: "Clones are individuals that are", options: ["genetically identical", "genetically different", "always sterile", "diploid gametes"], correctIndex: 0, explanation: "Cloning gives identical offspring." },
        { prompt: "An advantage of asexual reproduction is", options: ["it is fast and needs one parent", "it creates variation", "it needs two parents", "it is always slow"], correctIndex: 0, explanation: "Rapid, single-parent reproduction." },
        { prompt: "A disadvantage of asexual reproduction is", options: ["no genetic variation", "too much variation", "it needs two sexes", "slow reproduction only"], correctIndex: 0, explanation: "Identical offspring adapt poorly to change." },
        { prompt: "Which cell division underlies asexual reproduction?", options: ["mitosis", "meiosis", "fertilization", "budding of gametes"], correctIndex: 0, explanation: "Mitosis makes identical cells." },
        { prompt: "In grafting, the rooted part is the", options: ["stock", "scion", "bud", "runner"], correctIndex: 0, explanation: "The scion is attached to the stock." },
        { prompt: "Layering involves", options: ["bending a stem into the soil to root", "cutting a stem off", "joining two plants", "planting spores"], correctIndex: 0, explanation: "A bent stem roots while still attached." },
        { prompt: "Which spreads by runners/stolons?", options: ["grass/strawberry", "onion", "ginger", "yeast"], correctIndex: 0, explanation: "Runners grow along the ground." },
        { prompt: "Why might a whole cloned crop be destroyed by one disease?", options: ["all plants are genetically identical", "they are all different", "they have gametes", "they are haploid"], correctIndex: 0, explanation: "No variation means no resistance differences." },
        { prompt: "Bacteria mainly reproduce by", options: ["binary fission", "grafting", "budding of Hydra", "spores of ferns"], correctIndex: 0, explanation: "Binary fission splits the cell in two." },
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
        { prompt: "Sexual reproduction involves the fusion of", options: ["two gametes", "two body cells", "one gamete only", "spores"], correctIndex: 0, explanation: "Gametes fuse at fertilization." },
        { prompt: "Gametes are", options: ["haploid sex cells", "diploid body cells", "spores", "zygotes"], correctIndex: 0, explanation: "Gametes carry one set (n)." },
        { prompt: "Gametes are made by", options: ["meiosis", "mitosis", "budding", "fission"], correctIndex: 0, explanation: "Meiosis makes haploid gametes." },
        { prompt: "The fusion of a sperm and an egg forms a", options: ["zygote", "gamete", "spore", "clone"], correctIndex: 0, explanation: "Fertilization makes a diploid zygote." },
        { prompt: "A zygote is", options: ["diploid (2n)", "haploid (n)", "a gamete", "a spore"], correctIndex: 0, explanation: "It has two sets from two gametes." },
        { prompt: "Offspring of sexual reproduction are", options: ["genetically different from parents", "identical clones", "always haploid", "identical to each other"], correctIndex: 0, explanation: "Sexual reproduction gives variation." },
        { prompt: "External fertilization usually happens in", options: ["water", "the soil", "the air", "inside the body"], correctIndex: 0, explanation: "Aquatic animals fertilize in water." },
        { prompt: "Internal fertilization occurs in", options: ["mammals, birds and reptiles", "fish only", "frogs only", "algae only"], correctIndex: 0, explanation: "Land animals fertilize internally." },
        { prompt: "The male gamete is usually", options: ["small and motile", "large with food store", "diploid", "a zygote"], correctIndex: 0, explanation: "Sperm/pollen are small and move." },
        { prompt: "The female gamete usually", options: ["is larger with a food store", "moves fast", "is diploid", "is a spore"], correctIndex: 0, explanation: "The egg/ovum stores food." },
        { prompt: "Conjugation in Spirogyra involves", options: ["two cells joining and exchanging genetic material", "budding", "binary fission", "grafting"], correctIndex: 0, explanation: "It is a simple form of sexual reproduction." },
        { prompt: "After fertilization the zygote divides by", options: ["mitosis", "meiosis", "conjugation", "fission"], correctIndex: 0, explanation: "Mitosis develops the embryo." },
        { prompt: "Animals that lay eggs that develop outside are", options: ["oviparous", "viviparous", "haploid", "clones"], correctIndex: 0, explanation: "Oviparity = eggs develop outside." },
        { prompt: "Mammals whose young develop inside and are born alive are", options: ["viviparous", "oviparous", "external fertilizers", "clones"], correctIndex: 0, explanation: "Viviparity = live birth." },
        { prompt: "An advantage of sexual reproduction is", options: ["genetic variation", "no need for a mate", "identical offspring", "fastest reproduction"], correctIndex: 0, explanation: "Variation aids survival and evolution." },
        { prompt: "A disadvantage of sexual reproduction is", options: ["it usually needs two parents and is slower", "no variation", "only one parent", "instant offspring"], correctIndex: 0, explanation: "It is slower and needs a mate." },
        { prompt: "External fertilization typically produces", options: ["many gametes with low survival", "few gametes with high survival", "no gametes", "clones"], correctIndex: 0, explanation: "Large numbers offset low survival." },
        { prompt: "Which correctly describes a gamete and a zygote?", options: ["gamete n, zygote 2n", "gamete 2n, zygote n", "both n", "both 2n"], correctIndex: 0, explanation: "Haploid gametes fuse to a diploid zygote." },
        { prompt: "Variation from sexual reproduction is useful because it", options: ["helps some offspring survive change", "makes all offspring the same", "stops evolution", "removes gametes"], correctIndex: 0, explanation: "Variety improves adaptation." },
        { prompt: "Fertilization differs from pollination because fertilization is the", options: ["fusion of gametes", "transfer of pollen", "growth of a seed", "splitting of a cell"], correctIndex: 0, explanation: "Pollination moves pollen; fertilization fuses gametes." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define fertilization and state the ploidy of a gamete and a zygote.", answerKey: "Fertilization is the fusion of a male and female gamete to form a zygote. A gamete is haploid (n); a zygote is diploid (2n). 2 marks definition, 1 each ploidy.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Gametes are produced by which process?", options: ["Meiosis", "Mitosis", "Binary fission", "Budding"], correctIndex: 0, answerKey: "Meiosis makes haploid gametes. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between internal and external fertilization, giving an example of each.", answerKey: "Internal: gametes fuse inside the female's body (mammals/birds/reptiles), fewer offspring, higher survival. External: gametes fuse outside, usually in water (fish/frogs), many gametes, low survival. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two advantages of sexual reproduction over asexual reproduction.", answerKey: "Any two: produces genetic variation; offspring can adapt to changing environments/resist disease; variation drives evolution. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Describe sexual reproduction from gamete formation to the development of a new individual, and compare it with asexual reproduction.", answerKey: "Gametes (haploid, by meiosis), male small/motile and female large/food store; fertilization fuses them into a diploid zygote which divides by mitosis and develops; internal vs external fertilization (up to 9). Comparison: sexual gives variation, two parents, slower vs asexual identical clones, one parent, fast (up to 6).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 43.2 Fertilization; LibreTexts — Human Biology (Wakim & Grewal), 21.4 Sexually Transmitted Infections (https://openstax.org/books/biology-2e/pages/43-2-fertilization)
    {
      slug: "human-reproduction-and-responsibility",
      title: "Human Reproduction and Responsible Decisions",
      objective:
        "By the end of the topic, learners should be able to outline human reproduction (gametes and fertilization) and explain the responsibilities of parenting and the value of healthy sexual decisions.",
      estimatedMinutes: 100,
      notes: `## Human gametes and fertilization

- Humans reproduce sexually. The **male gamete** is the **sperm**; the **female gamete** is the **egg (ovum)**.
- Both are **haploid (23 chromosomes)**, made by **meiosis** in the testes and ovaries.
- At **fertilization**, a sperm fuses with an egg to form a **zygote (46 chromosomes)**, which implants in the uterus and develops into a baby (**internal fertilization**, **viviparity**).

## Gamete formation (meiosis)

- **Spermatogenesis** — the making of sperm in the testes.
- **Oogenesis** — the making of eggs in the ovaries.
- Both use **meiosis**, so the gametes are haploid and carry genetic variation.

## Responsibilities of parenting

Raising a child needs time, money and care. Both parents share responsibilities:

- providing **food, shelter, clothing, health care and education**;
- giving **love, guidance and protection**;
- being present — children who grow up without a caring father or mother can face long-term difficulties.

## Risks of teenage parenting

- **Teenage pregnancy** can interrupt schooling, harm the young mother's health, and bring financial hardship.
- It is wiser to **delay sexual activity** and childbearing until one is mature and ready.

## Making healthy sexual decisions

- **Abstinence** (not having sex) is the surest way to avoid pregnancy and STIs.
- If sexually active, use **contraception** correctly; **condoms** also help prevent **STIs including HIV**.
- **HIV testing, counselling and support** protect health and prevent spread.
- Avoid **alcohol and drug abuse**, which lead to risky decisions.

## Consequences of decisions

- Good decisions protect **health, education and the family's future**.
- Poor decisions can lead to **unplanned pregnancy, STIs, dropping out of school** and hardship for the whole family.

## Common errors and misconceptions

- **"Only the mother is responsible for a child"** — **both** parents share responsibility.
- **"Condoms only prevent pregnancy"** — correct condom use also reduces **STIs including HIV**.
- **"Teenage pregnancy has no long-term effect"** — it can disrupt education, health and finances.
- **"Human gametes are diploid"** — sperm and egg are **haploid (23)**; the zygote is diploid (46).`,
      workedExample: `**Task.** A 16-year-old student is under pressure from peers to become sexually active. Using biology, explain (a) what would happen at fertilization if she became pregnant, (b) two risks of teenage pregnancy, and (c) two responsible decisions she could make.

**Solution**

(a) At **fertilization**, a **sperm (23 chromosomes)** would fuse with her **egg (23 chromosomes)** to form a **zygote (46 chromosomes)**. The zygote would implant in the **uterus** and develop over about nine months into a baby (internal fertilization, viviparity).

(b) Two risks of teenage pregnancy:
- It can **interrupt her schooling** and future opportunities.
- It can bring **health risks** to a young mother and **financial hardship**, and the child may lack proper support.

(c) Two responsible decisions:
- Choose **abstinence** — the surest way to avoid both pregnancy and STIs — and delay sex until she is mature and ready.
- **Avoid alcohol/drugs and peer pressure**, seek accurate information and, if ever sexually active, use **condoms/contraception** correctly and know her **HIV status** through testing.

**Answer:** a sperm and egg (each 23 chromosomes) would fuse into a 46-chromosome zygote that develops in the uterus; teenage pregnancy risks interrupted schooling and health/financial hardship; responsible choices include abstinence, resisting peer pressure and avoiding substance abuse.`,
      quiz: [
        { prompt: "The human male gamete is the", options: ["sperm", "egg", "zygote", "ovary"], correctIndex: 0, explanation: "Sperm is the male gamete." },
        { prompt: "The human female gamete is the", options: ["egg (ovum)", "sperm", "zygote", "testis"], correctIndex: 0, explanation: "The egg/ovum is the female gamete." },
        { prompt: "Human gametes contain how many chromosomes?", options: ["23", "46", "12", "92"], correctIndex: 0, explanation: "Gametes are haploid (n = 23)." },
        { prompt: "A human zygote has how many chromosomes?", options: ["46", "23", "92", "12"], correctIndex: 0, explanation: "23 + 23 = 46 (diploid)." },
        { prompt: "Sperm are made by the process of", options: ["spermatogenesis", "oogenesis", "mitosis only", "budding"], correctIndex: 0, explanation: "Spermatogenesis makes sperm in the testes." },
        { prompt: "Eggs are made in the", options: ["ovaries", "testes", "uterus", "kidneys"], correctIndex: 0, explanation: "Oogenesis occurs in the ovaries." },
        { prompt: "Human gametes are formed by", options: ["meiosis", "mitosis", "fission", "conjugation"], correctIndex: 0, explanation: "Meiosis makes haploid gametes." },
        { prompt: "Human fertilization is", options: ["internal", "external", "in water", "not needed"], correctIndex: 0, explanation: "It occurs inside the female body." },
        { prompt: "Responsibility for a child belongs to", options: ["both parents", "the mother only", "the father only", "neither parent"], correctIndex: 0, explanation: "Both parents share responsibility." },
        { prompt: "The surest way to avoid pregnancy and STIs is", options: ["abstinence", "eating well", "exercise", "drinking water"], correctIndex: 0, explanation: "Not having sex avoids both." },
        { prompt: "Besides preventing pregnancy, condoms help prevent", options: ["STIs including HIV", "malaria", "colds", "hunger"], correctIndex: 0, explanation: "Condoms lower STI transmission." },
        { prompt: "A risk of teenage pregnancy is", options: ["interrupted schooling", "better health", "more money", "no effect"], correctIndex: 0, explanation: "It can disrupt education and finances." },
        { prompt: "Alcohol and drug abuse can lead to", options: ["risky sexual decisions", "safer choices", "better health", "no change"], correctIndex: 0, explanation: "Substance abuse impairs judgement." },
        { prompt: "HIV testing and counselling help by", options: ["protecting health and preventing spread", "curing HIV instantly", "causing HIV", "wasting time"], correctIndex: 0, explanation: "Knowing status guides care and prevention." },
        { prompt: "A parent's responsibilities include providing", options: ["food, shelter, education and care", "only toys", "nothing", "only money once"], correctIndex: 0, explanation: "Parenting covers many needs." },
        { prompt: "Human young develop", options: ["inside the mother (viviparity)", "in laid eggs outside", "in water", "in the soil"], correctIndex: 0, explanation: "Humans are viviparous." },
        { prompt: "Which is a healthy sexual decision for a teenager?", options: ["delaying sex until mature and ready", "ignoring all information", "using no protection", "abusing drugs"], correctIndex: 0, explanation: "Delaying reduces risks." },
        { prompt: "The zygote develops after implanting in the", options: ["uterus", "ovary", "testis", "kidney"], correctIndex: 0, explanation: "The uterus supports the embryo." },
        { prompt: "Poor sexual decisions can lead to", options: ["unplanned pregnancy and STIs", "better grades", "more wealth", "no consequences"], correctIndex: 0, explanation: "They can harm health and future." },
        { prompt: "Both spermatogenesis and oogenesis involve", options: ["meiosis to make haploid gametes", "mitosis only", "no cell division", "budding"], correctIndex: 0, explanation: "Meiosis halves the chromosome number." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the human gametes and state how many chromosomes each carries.", answerKey: "Sperm (male) and egg/ovum (female); each carries 23 chromosomes (haploid). 1 mark each gamete, 2 chromosome number.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "How many chromosomes are in a human zygote?", options: ["46", "23", "92", "12"], correctIndex: 0, answerKey: "23 + 23 = 46. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State two responsibilities of parents towards a child.", answerKey: "Any two: provide food/shelter/clothing/health care/education; give love, guidance and protection; be present in the child's life. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give two reasons why delaying sexual activity is a wise decision for teenagers.", answerKey: "Any two: avoids unplanned/teenage pregnancy; avoids STIs including HIV; protects schooling/education; protects health and future finances. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Explain human reproduction from gamete formation to fertilization, and discuss the responsible decisions young people should make about sexuality.", answerKey: "Reproduction: gametes (sperm/egg, haploid 23, by meiosis via spermatogenesis/oogenesis), internal fertilization forming a 46-chromosome zygote that develops in the uterus (up to 7). Responsible decisions: abstinence, delaying sex, correct condom/contraception use to prevent pregnancy and STIs/HIV, HIV testing/counselling, avoiding substance abuse, shared parenting responsibility (up to 8).", marks: 15 },
      ],
    },
  ],
};
