import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 11,
// Semester Two, Period V: Genetics (Nucleic Acids, Protein Synthesis, and
// Heredity), Sexuality and Evolution. Topics follow the CONTENTS themes: (1)
// nucleic acids DNA & RNA; (2) DNA replication and RNA transcription; (3)
// protein synthesis; (4) genetics and heredity (Mendel, genetic terms); (5)
// hereditary traits and genetic disorders; (6) ABO blood groups, Rhesus factor
// and sex determination; (7) variation and its sources; (8) evolution.
export const biologyG11P5: PeriodContent = {
  grade: 11,
  number: 5,
  title: "Genetics, Sexuality and Evolution",
  summary:
    "Period V of the MoE Grade 11 Biology syllabus. Learners study the nucleic acids DNA and RNA and their structure, DNA replication and RNA transcription, protein synthesis, Mendel's principles of heredity and genetic terms, human hereditary traits and genetic disorders, the ABO blood groups, the rhesus factor and sex determination, the nature and sources of variation, and the theories and evidence of evolution.",
  topics: [
    // source: OpenStax — Biology 2e, 3.5 Nucleic Acids (https://openstax.org/books/biology-2e/pages/3-5-nucleic-acids)
    {
      slug: "nucleic-acids",
      title: "Nucleic Acids: DNA and RNA",
      objective:
        "By the end of the topic, learners should be able to name the nucleic acids, describe the structure of a nucleotide and the DNA double helix, state the base-pairing rules, and compare DNA and RNA.",
      estimatedMinutes: 120,
      notes: `## The nucleic acids

- **Nucleic acids** are the molecules that store and pass on genetic information.
- Two types: **DNA** (deoxyribonucleic acid) and **RNA** (ribonucleic acid).
- They are built from repeating units called **nucleotides**.

## Structure of a nucleotide

Each nucleotide has **three parts**:

1. a **phosphate group**;
2. a **pentose (5-carbon) sugar** — deoxyribose in DNA, ribose in RNA;
3. a **nitrogenous base**.

## The bases

- **Purines** (double ring): **adenine (A)** and **guanine (G)**.
- **Pyrimidines** (single ring): **cytosine (C)**, **thymine (T)** (DNA only), **uracil (U)** (RNA only).

## The DNA double helix

- DNA is a **double helix** — two strands twisted like a spiral staircase.
- The **sugar–phosphate backbone** forms the sides; the **bases** form the rungs.
- The strands are **antiparallel** and held together by **hydrogen bonds** between bases.

\`\`\`svg DNA double helix and base pairing
<svg viewBox="0 0 240 130" role="img" aria-label="DNA ladder with base pairs A-T and G-C">
  <line x1="40" y1="10" x2="40" y2="120" stroke="currentColor" stroke-width="2"/>
  <line x1="200" y1="10" x2="200" y2="120" stroke="currentColor" stroke-width="2"/>
  <g font-size="9" fill="currentColor" text-anchor="middle">
  <line x1="40" y1="28" x2="200" y2="28" stroke="currentColor"/><text x="90" y="24">A</text><text x="150" y="24">T</text>
  <line x1="40" y1="52" x2="200" y2="52" stroke="currentColor"/><text x="90" y="48">G</text><text x="150" y="48">C</text>
  <line x1="40" y1="76" x2="200" y2="76" stroke="currentColor"/><text x="90" y="72">T</text><text x="150" y="72">A</text>
  <line x1="40" y1="100" x2="200" y2="100" stroke="currentColor"/><text x="90" y="96">C</text><text x="150" y="96">G</text>
  </g>
  <text x="120" y="118" font-size="8" text-anchor="middle" fill="currentColor">sugar-phosphate backbone on the sides</text>
</svg>
\`\`\`

## Complementary base pairing

- In **DNA**: **A pairs with T**, and **G pairs with C**.
- In **RNA**: **A pairs with U** (uracil replaces thymine), and **G pairs with C**.
- So if one DNA strand reads **A A T G C**, the other reads **T T A C G**.

## Types of RNA

| RNA | Full name | Role |
| --- | --- | --- |
| **mRNA** | messenger RNA | carries the DNA message to the ribosome |
| **tRNA** | transfer RNA | brings the correct amino acids during protein synthesis |
| **rRNA** | ribosomal RNA | part of the ribosome; helps join amino acids |

## DNA compared with RNA

| Feature | DNA | RNA |
| --- | --- | --- |
| Sugar | deoxyribose | ribose |
| Strands | double | single |
| Bases | A, T, G, C | A, U, G, C |
| Function | stores genetic information | helps make proteins |

## Common errors and misconceptions

- **"DNA and RNA use the same bases"** — RNA has **uracil (U)** instead of thymine (T).
- **"A pairs with G"** — the rule is **A–T (A–U in RNA)** and **G–C**.
- **"A nucleotide is one atom"** — it has **three parts**: phosphate, sugar and a base.
- **"RNA is double-stranded like DNA"** — RNA is usually **single-stranded**.`,
      workedExample: `**Task.** One strand of a DNA molecule reads: **T A C G G A T**. (a) Write the complementary DNA strand. (b) Write the mRNA strand transcribed from the original strand. (c) Name the three parts of a nucleotide.

**Solution**

(a) Complementary **DNA** strand (A–T, G–C):
- Original: T A C G G A T
- Pair:     A T G C C T A
- So the complementary strand is **A T G C C T A**.

(b) **mRNA** transcribed from the original strand (A–U, G–C; U replaces T):
- Original DNA (template): T A C G G A T
- mRNA:                    A U G C C U A
- So the mRNA reads **A U G C C U A**.

(c) The three parts of a nucleotide are a **phosphate group**, a **pentose sugar** (deoxyribose in DNA, ribose in RNA) and a **nitrogenous base**.

**Answer:** complementary DNA = ATGCCTA; mRNA = AUGCCUA (U replaces T); a nucleotide = phosphate + sugar + nitrogenous base.`,
      quiz: [
        { prompt: "The two nucleic acids are", options: ["DNA and RNA", "DNA and ATP", "protein and RNA", "sugar and phosphate"], correctIndex: 0, explanation: "DNA and RNA are the nucleic acids." },
        { prompt: "The repeating unit of a nucleic acid is a", options: ["nucleotide", "amino acid", "glucose", "fatty acid"], correctIndex: 0, explanation: "Nucleotides build nucleic acids." },
        { prompt: "A nucleotide is made of", options: ["phosphate, sugar and a base", "only a base", "two sugars", "an amino acid"], correctIndex: 0, explanation: "Three parts: phosphate, sugar, base." },
        { prompt: "The sugar in DNA is", options: ["deoxyribose", "ribose", "glucose", "sucrose"], correctIndex: 0, explanation: "DNA has deoxyribose." },
        { prompt: "In DNA, adenine pairs with", options: ["thymine", "guanine", "cytosine", "uracil"], correctIndex: 0, explanation: "A pairs with T in DNA." },
        { prompt: "In DNA, guanine pairs with", options: ["cytosine", "thymine", "adenine", "uracil"], correctIndex: 0, explanation: "G pairs with C." },
        { prompt: "RNA contains uracil in place of", options: ["thymine", "adenine", "guanine", "cytosine"], correctIndex: 0, explanation: "U replaces T in RNA." },
        { prompt: "The shape of the DNA molecule is a", options: ["double helix", "single straight line", "sphere", "cube"], correctIndex: 0, explanation: "DNA is a double helix." },
        { prompt: "The sides of the DNA 'ladder' are made of", options: ["sugar and phosphate", "bases only", "protein", "lipids"], correctIndex: 0, explanation: "The sugar-phosphate backbone forms the sides." },
        { prompt: "The rungs of the DNA ladder are", options: ["paired bases", "sugars", "phosphates", "amino acids"], correctIndex: 0, explanation: "Base pairs form the rungs." },
        { prompt: "DNA strands are held together by", options: ["hydrogen bonds between bases", "ionic bonds of sugar", "peptide bonds", "no bonds"], correctIndex: 0, explanation: "Hydrogen bonds link the base pairs." },
        { prompt: "Messenger RNA (mRNA)", options: ["carries the DNA message to the ribosome", "brings amino acids", "forms the ribosome", "stores genes long term"], correctIndex: 0, explanation: "mRNA carries the code." },
        { prompt: "Transfer RNA (tRNA)", options: ["brings amino acids during protein synthesis", "carries the whole gene", "is the double helix", "makes sugar"], correctIndex: 0, explanation: "tRNA delivers amino acids." },
        { prompt: "Which base is found only in RNA?", options: ["uracil", "thymine", "adenine", "guanine"], correctIndex: 0, explanation: "Uracil is unique to RNA." },
        { prompt: "RNA is usually", options: ["single-stranded", "double-stranded", "triple-stranded", "circular only"], correctIndex: 0, explanation: "RNA is normally single-stranded." },
        { prompt: "Adenine and guanine are", options: ["purines", "pyrimidines", "sugars", "phosphates"], correctIndex: 0, explanation: "A and G are double-ring purines." },
        { prompt: "If a DNA strand reads A T G, the complementary strand reads", options: ["T A C", "A T G", "U A C", "G C A"], correctIndex: 0, explanation: "A-T, T-A, G-C gives T A C." },
        { prompt: "The main function of DNA is to", options: ["store genetic information", "make sugar", "carry oxygen", "digest food"], correctIndex: 0, explanation: "DNA stores the genetic code." },
        { prompt: "Ribosomal RNA (rRNA) is part of the", options: ["ribosome", "nucleus membrane", "mitochondrion wall", "cell wall"], correctIndex: 0, explanation: "rRNA builds the ribosome." },
        { prompt: "Which is TRUE of DNA vs RNA?", options: ["DNA is double-stranded, RNA single-stranded", "both are single-stranded", "RNA has thymine", "DNA has uracil"], correctIndex: 0, explanation: "DNA double, RNA single; RNA has uracil." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the three parts of a nucleotide.", answerKey: "A phosphate group, a pentose sugar (deoxyribose/ribose), and a nitrogenous base. 1 mark each.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which base pairs with adenine in RNA?", options: ["Uracil", "Thymine", "Guanine", "Cytosine"], correctIndex: 0, answerKey: "In RNA, A pairs with U. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State the base-pairing rules for DNA and write the complementary strand of G A T C.", answerKey: "A pairs with T, G pairs with C. Complementary strand of G A T C is C T A G. 2 marks rules, 2 marks answer.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give three differences between DNA and RNA.", answerKey: "Any three: DNA deoxyribose vs RNA ribose; DNA double-stranded vs RNA single; DNA has thymine vs RNA uracil; DNA stores information vs RNA helps make proteins. 1 mark each.", marks: 3 },
        { type: "ESSAY", prompt: "Describe the structure of the DNA molecule and explain how complementary base pairing allows DNA to store and copy genetic information.", answerKey: "Structure: double helix, sugar-phosphate backbone, base pairs as rungs, antiparallel strands, hydrogen bonds; nucleotides = phosphate+sugar+base (up to 8). Base pairing: A-T, G-C means each strand specifies the other, so DNA can be copied accurately and the base sequence stores the genetic code (up to 7).", marks: 15 },
      ],
    },
    // source: OpenStax — Concepts of Biology, 9.3 Transcription (DNA replication/transcription) (https://openstax.org/books/concepts-biology/pages/9-3-transcription)
    {
      slug: "dna-replication-and-transcription",
      title: "DNA Replication and RNA Transcription",
      objective:
        "By the end of the topic, learners should be able to describe how DNA replicates and how RNA is transcribed from DNA.",
      estimatedMinutes: 110,
      notes: `## The central dogma

- Genetic information flows: **DNA → RNA → protein**.
- **Replication** copies DNA; **transcription** makes RNA from DNA; **translation** makes protein from RNA.

## DNA replication

- **DNA replication** makes an exact copy of the DNA before a cell divides.
- It is **semiconservative** — each new DNA molecule keeps **one old strand** and gains **one new strand**.

Steps:

1. The two DNA strands **unwind and separate** (hydrogen bonds break).
2. Each old strand acts as a **template**.
3. The enzyme **DNA polymerase** adds free nucleotides by **base pairing** (A–T, G–C).
4. Two identical DNA molecules result, each with one old and one new strand.

\`\`\`svg Semiconservative DNA replication
<svg viewBox="0 0 250 120" role="img" aria-label="DNA unwinding and copying into two molecules">
  <line x1="30" y1="10" x2="30" y2="60" stroke="currentColor" stroke-width="2"/>
  <line x1="70" y1="10" x2="70" y2="60" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor"><line x1="30" y1="20" x2="70" y2="20"/><line x1="30" y1="35" x2="70" y2="35"/><line x1="30" y1="50" x2="70" y2="50"/></g>
  <text x="50" y="75" font-size="8" text-anchor="middle" fill="currentColor">parent DNA</text>
  <path d="M90,35 l30,0" stroke="currentColor" fill="none" marker-end="url(#a)"/>
  <line x1="140" y1="10" x2="140" y2="60" stroke="currentColor" stroke-width="2"/>
  <line x1="165" y1="10" x2="165" y2="60" stroke="currentColor" stroke-width="2" stroke-dasharray="3 2"/>
  <line x1="200" y1="10" x2="200" y2="60" stroke="currentColor" stroke-width="2" stroke-dasharray="3 2"/>
  <line x1="225" y1="10" x2="225" y2="60" stroke="currentColor" stroke-width="2"/>
  <text x="185" y="75" font-size="8" text-anchor="middle" fill="currentColor">two copies (1 old + 1 new)</text>
</svg>
\`\`\`

## RNA transcription

- **Transcription** makes a strand of **messenger RNA (mRNA)** using one DNA strand as a template.
- It happens in the **nucleus** (in eukaryotes).

Steps:

1. The DNA **unwinds** at the gene to be copied.
2. The enzyme **RNA polymerase** reads the DNA **template strand**.
3. It builds mRNA by base pairing, but uses **uracil (U) instead of thymine (T)** (so A on DNA pairs with U on RNA).
4. The finished **mRNA** leaves the nucleus and goes to a **ribosome** for translation.

## Replication vs transcription

| Feature | Replication | Transcription |
| --- | --- | --- |
| Product | two DNA molecules | one mRNA strand |
| Enzyme | DNA polymerase | RNA polymerase |
| Bases | A–T, G–C | A–U, G–C |
| Purpose | copy DNA before division | make RNA to guide protein synthesis |

## Common errors and misconceptions

- **"Replication is random"** — it is **semiconservative** and accurate, guided by base pairing.
- **"Transcription makes protein"** — transcription makes **mRNA**; protein is made later in **translation**.
- **"RNA polymerase adds thymine"** — in RNA the base is **uracil**, not thymine.
- **"Both new DNA strands are brand new"** — each new molecule keeps **one old** strand.`,
      workedExample: `**Task.** A gene's DNA template strand reads: **A C G T T A C**. (a) Write the mRNA made by transcription. (b) Name the enzyme involved. (c) Explain what 'semiconservative replication' means.

**Solution**

(a) Transcription uses base pairing with **U instead of T** (A→U, T→A, C→G, G→C):
- DNA template: A C G T T A C
- mRNA:         U G C A A U G
- So the mRNA reads **U G C A A U G**.

(b) The enzyme that builds the mRNA is **RNA polymerase** (DNA polymerase is used in replication, not transcription).

(c) **Semiconservative replication** means that when DNA is copied, the two strands separate and each acts as a template, so each new DNA molecule is made of **one original (old) strand and one newly made strand** — half of the original is "conserved" in each copy.

**Answer:** mRNA = UGCAAUG (built by RNA polymerase using A–U, G–C pairing); semiconservative replication means each new DNA molecule keeps one old strand and one new strand.`,
      quiz: [
        { prompt: "The flow of genetic information is", options: ["DNA → RNA → protein", "protein → RNA → DNA", "RNA → DNA → protein", "DNA → protein → RNA"], correctIndex: 0, explanation: "This is the central dogma." },
        { prompt: "DNA replication is described as", options: ["semiconservative", "conservative only", "random", "dispersive only"], correctIndex: 0, explanation: "Each copy keeps one old strand." },
        { prompt: "Before replication the DNA strands must", options: ["unwind and separate", "join permanently", "turn into RNA", "become protein"], correctIndex: 0, explanation: "The strands separate to be copied." },
        { prompt: "The enzyme that builds new DNA is", options: ["DNA polymerase", "RNA polymerase", "amylase", "lipase"], correctIndex: 0, explanation: "DNA polymerase adds nucleotides." },
        { prompt: "Each new DNA molecule has", options: ["one old and one new strand", "two new strands", "two old strands", "no strands"], correctIndex: 0, explanation: "That is what semiconservative means." },
        { prompt: "Transcription produces", options: ["mRNA", "a new DNA molecule", "protein", "a lipid"], correctIndex: 0, explanation: "Transcription makes mRNA." },
        { prompt: "The enzyme used in transcription is", options: ["RNA polymerase", "DNA polymerase", "protease", "catalase"], correctIndex: 0, explanation: "RNA polymerase makes RNA." },
        { prompt: "In transcription, the DNA base A pairs with RNA base", options: ["U", "T", "G", "C"], correctIndex: 0, explanation: "RNA uses uracil instead of thymine." },
        { prompt: "Transcription in eukaryotes takes place in the", options: ["nucleus", "ribosome", "mitochondrion only", "cell wall"], correctIndex: 0, explanation: "DNA is in the nucleus." },
        { prompt: "After transcription, mRNA travels to the", options: ["ribosome", "nucleus", "cell wall", "vacuole"], correctIndex: 0, explanation: "Translation happens at ribosomes." },
        { prompt: "The DNA strand used to make mRNA is the", options: ["template strand", "protein strand", "sugar strand", "lipid strand"], correctIndex: 0, explanation: "RNA is built on the template strand." },
        { prompt: "Which pairing is correct for transcription (DNA to RNA)?", options: ["T → A", "T → U", "A → T", "G → T"], correctIndex: 0, explanation: "DNA T pairs with RNA A." },
        { prompt: "Replication happens before a cell", options: ["divides", "dies", "eats", "moves"], correctIndex: 0, explanation: "DNA is copied so each daughter cell gets a full set." },
        { prompt: "Which does NOT occur in transcription?", options: ["making two DNA molecules", "unwinding DNA", "base pairing", "using RNA polymerase"], correctIndex: 0, explanation: "Two DNA molecules result from replication, not transcription." },
        { prompt: "The purpose of DNA replication is to", options: ["copy DNA accurately for cell division", "make protein", "make sugar", "release energy"], correctIndex: 0, explanation: "Each new cell needs a full DNA copy." },
        { prompt: "If a DNA template reads G G C, the mRNA reads", options: ["C C G", "G G C", "C C U", "U U G"], correctIndex: 0, explanation: "G-C, G-C, C-G gives C C G." },
        { prompt: "The 'old' strand kept in each new DNA molecule acts as a", options: ["template", "protein", "waste product", "sugar"], correctIndex: 0, explanation: "Each old strand templates a new one." },
        { prompt: "Base pairing ensures replication is", options: ["accurate", "random", "impossible", "reversed"], correctIndex: 0, explanation: "Complementary bases copy the sequence faithfully." },
        { prompt: "Transcription is the first step in", options: ["protein synthesis", "respiration", "digestion", "photosynthesis"], correctIndex: 0, explanation: "It makes the mRNA that guides translation." },
        { prompt: "Which molecule leaves the nucleus after transcription?", options: ["mRNA", "DNA", "protein", "ribosome"], correctIndex: 0, explanation: "mRNA carries the code out to ribosomes." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain what is meant by semiconservative DNA replication.", answerKey: "The DNA strands separate and each acts as a template, so each new DNA molecule contains one original (old) strand and one newly made strand. Award for template + one old/one new.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which enzyme carries out transcription?", options: ["RNA polymerase", "DNA polymerase", "Amylase", "Protease"], correctIndex: 0, answerKey: "RNA polymerase makes mRNA. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A DNA template strand reads T A C G. Write the mRNA produced by transcription.", answerKey: "A U G C (T→A, A→U, C→G, G→C). Full marks for correct sequence with U replacing T.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two differences between DNA replication and transcription.", answerKey: "Any two: replication makes two DNA molecules vs transcription makes mRNA; DNA polymerase vs RNA polymerase; replication copies whole DNA before division vs transcription copies a gene to guide protein synthesis; A-T vs A-U. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the processes of DNA replication and RNA transcription, and explain why each is important.", answerKey: "Replication: strands unwind, each templates a new strand via DNA polymerase and base pairing, semiconservative, important to give each new cell a full identical copy of DNA (up to 8). Transcription: RNA polymerase reads the template strand to build mRNA (U replaces T) in the nucleus; mRNA carries the code to the ribosome for protein synthesis (up to 7).", marks: 15 },
      ],
    },
    // source: OpenStax — Concepts of Biology, 9.3 Transcription and 9.4 Translation (https://openstax.org/books/concepts-biology/pages/9-3-transcription)
    {
      slug: "protein-synthesis",
      title: "Protein Synthesis",
      objective:
        "By the end of the topic, learners should be able to describe the stages of protein synthesis (transcription and translation) and explain its importance.",
      estimatedMinutes: 110,
      notes: `## What is protein synthesis?

- **Protein synthesis** — the making of proteins from the instructions in DNA.
- It has two stages: **transcription** (DNA → mRNA) and **translation** (mRNA → protein).

## Stage 1: Transcription (in the nucleus)

- DNA unwinds; **RNA polymerase** copies a gene into **messenger RNA (mRNA)**.
- The mRNA carries the coded message out of the nucleus to a **ribosome**.

## The genetic code

- The mRNA is read in groups of **three bases called codons**.
- Each **codon codes for one amino acid** (e.g. AUG = start/methionine).
- There are **stop codons** that end the protein.

## Stage 2: Translation (at the ribosome)

1. The **ribosome** attaches to the mRNA and reads it codon by codon.
2. **Transfer RNA (tRNA)** molecules bring the matching **amino acids**; each tRNA has an **anticodon** that pairs with a codon.
3. The amino acids are joined by **peptide bonds** into a chain (**polypeptide**).
4. The finished polypeptide folds into a **protein**.

\`\`\`svg Translation at the ribosome
<svg viewBox="0 0 260 110" role="img" aria-label="Ribosome reading mRNA codons with tRNA bringing amino acids">
  <rect x="20" y="60" width="220" height="14" fill="#dbeafe" stroke="currentColor"/>
  <g font-size="8" fill="currentColor" text-anchor="middle">
  <text x="45" y="70">AUG</text><text x="90" y="70">CCU</text><text x="135" y="70">GAA</text><text x="180" y="70">UUU</text>
  </g>
  <ellipse cx="135" cy="55" rx="45" ry="28" fill="none" stroke="currentColor"/>
  <text x="135" y="40" font-size="8" text-anchor="middle" fill="currentColor">ribosome</text>
  <circle cx="120" cy="20" r="8" fill="#bbf7d0" stroke="currentColor"/><circle cx="140" cy="14" r="8" fill="#fde68a" stroke="currentColor"/><circle cx="160" cy="22" r="8" fill="#fca5a5" stroke="currentColor"/>
  <text x="140" y="8" font-size="7" text-anchor="middle" fill="currentColor">amino acids (protein chain)</text>
</svg>
\`\`\`

## Importance of protein synthesis

Proteins do most of the work in the body, so protein synthesis is essential for:

- **enzymes** (control reactions);
- **structural proteins** (keratin, collagen for skin, hair, tissues);
- **haemoglobin** (carries oxygen);
- **antibodies** (fight disease);
- **hormones** such as insulin;
- **growth and repair** of cells and tissues.

## Common errors and misconceptions

- **"Proteins are made directly from DNA"** — DNA first makes **mRNA** (transcription), then protein (translation).
- **"A codon is one base"** — a codon is **three bases**.
- **"tRNA carries the whole message"** — **mRNA** carries the message; **tRNA** brings amino acids.
- **"Translation happens in the nucleus"** — translation happens at the **ribosome** (cytoplasm).`,
      workedExample: `**Task.** An mRNA strand reads: **AUG – CCU – GAA**. Using a code where AUG = Met, CCU = Pro, GAA = Glu, (a) how many amino acids will this code for? (b) Describe the roles of the ribosome and tRNA in building the protein. (c) State two reasons protein synthesis is important.

**Solution**

(a) The mRNA is read in **codons (3 bases each)**. There are **3 codons** (AUG, CCU, GAA), so it codes for **3 amino acids**: Met–Pro–Glu.

(b) Roles in translation:
- The **ribosome** attaches to the mRNA and moves along it, reading **one codon at a time**.
- Each **tRNA** has an **anticodon** that pairs with a codon and brings the matching **amino acid**; the amino acids are joined by **peptide bonds** to form the polypeptide.

(c) Two reasons protein synthesis is important (any two):
- It makes **enzymes** that control the body's chemical reactions.
- It makes **structural proteins** and **haemoglobin/antibodies/hormones** needed for growth, repair, oxygen transport and defence.

**Answer:** 3 amino acids (Met–Pro–Glu); the ribosome reads the mRNA codons while tRNAs bring the correct amino acids joined by peptide bonds; protein synthesis is vital because proteins act as enzymes, structures, haemoglobin, antibodies and hormones.`,
      quiz: [
        { prompt: "Protein synthesis makes proteins from instructions in", options: ["DNA", "lipids", "glucose", "water"], correctIndex: 0, explanation: "DNA holds the code for proteins." },
        { prompt: "The two stages of protein synthesis are", options: ["transcription and translation", "replication and mitosis", "respiration and digestion", "fixation and nitrification"], correctIndex: 0, explanation: "Transcription then translation." },
        { prompt: "Transcription makes", options: ["mRNA from DNA", "protein from RNA", "DNA from RNA", "sugar"], correctIndex: 0, explanation: "mRNA is transcribed from DNA." },
        { prompt: "A codon is a group of", options: ["three mRNA bases", "one base", "two sugars", "four amino acids"], correctIndex: 0, explanation: "Three bases code for one amino acid." },
        { prompt: "Each codon codes for", options: ["one amino acid", "one protein", "one gene", "one sugar"], correctIndex: 0, explanation: "A codon specifies a single amino acid." },
        { prompt: "Translation takes place at the", options: ["ribosome", "nucleus", "cell wall", "vacuole"], correctIndex: 0, explanation: "Ribosomes read mRNA and build protein." },
        { prompt: "The molecule that carries the code to the ribosome is", options: ["mRNA", "tRNA", "DNA", "rRNA"], correctIndex: 0, explanation: "mRNA carries the message." },
        { prompt: "tRNA brings the correct", options: ["amino acids", "sugars", "codons", "genes"], correctIndex: 0, explanation: "tRNA delivers amino acids." },
        { prompt: "The part of tRNA that pairs with a codon is the", options: ["anticodon", "codon", "ribosome", "promoter"], correctIndex: 0, explanation: "The anticodon matches the codon." },
        { prompt: "Amino acids are joined by", options: ["peptide bonds", "hydrogen bonds only", "ionic bonds", "phosphate bonds"], correctIndex: 0, explanation: "Peptide bonds link amino acids." },
        { prompt: "A chain of amino acids is a", options: ["polypeptide", "nucleotide", "gene", "codon"], correctIndex: 0, explanation: "A polypeptide folds into a protein." },
        { prompt: "The start codon is usually", options: ["AUG", "UAA", "GGG", "CCC"], correctIndex: 0, explanation: "AUG signals the start (methionine)." },
        { prompt: "Which protein carries oxygen in the blood?", options: ["haemoglobin", "keratin", "insulin", "amylase"], correctIndex: 0, explanation: "Haemoglobin transports oxygen." },
        { prompt: "Enzymes are examples of", options: ["proteins", "sugars", "lipids", "nucleic acids"], correctIndex: 0, explanation: "Enzymes are proteins that control reactions." },
        { prompt: "Antibodies made by protein synthesis help to", options: ["fight disease", "carry oxygen", "store fat", "make DNA"], correctIndex: 0, explanation: "Antibodies defend against pathogens." },
        { prompt: "The mRNA is read in the direction of", options: ["codon by codon (three bases at a time)", "one base at a time", "backwards only", "all at once"], correctIndex: 0, explanation: "The ribosome reads successive codons." },
        { prompt: "Which does NOT happen during translation?", options: ["DNA is copied into DNA", "ribosome reads mRNA", "tRNA brings amino acids", "peptide bonds form"], correctIndex: 0, explanation: "Copying DNA is replication, not translation." },
        { prompt: "Insulin, a hormone, is a", options: ["protein", "sugar", "fat", "vitamin"], correctIndex: 0, explanation: "Insulin is a protein hormone." },
        { prompt: "Protein synthesis is essential for", options: ["growth and repair", "cooling only", "adding water", "removing DNA"], correctIndex: 0, explanation: "Proteins build and repair tissues." },
        { prompt: "If an mRNA has 9 bases, it codes for how many amino acids?", options: ["3", "9", "1", "27"], correctIndex: 0, explanation: "9 ÷ 3 = 3 codons = 3 amino acids." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the two stages of protein synthesis and where each takes place.", answerKey: "Transcription – in the nucleus (DNA to mRNA); translation – at the ribosome (mRNA to protein). 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "How many bases make up one codon?", options: ["Three", "One", "Two", "Four"], correctIndex: 0, answerKey: "A codon is three bases. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Describe the roles of mRNA, tRNA and the ribosome in translation.", answerKey: "mRNA carries the coded message (codons); tRNA brings the matching amino acids (via anticodons); the ribosome reads the mRNA and joins the amino acids with peptide bonds. 1 mark each + 1 for detail.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give two reasons why protein synthesis is important to the body.", answerKey: "Any two: makes enzymes; structural proteins (keratin/collagen); haemoglobin; antibodies; hormones (insulin); needed for growth and repair. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Explain the process of protein synthesis from gene to protein and discuss its importance.", answerKey: "Transcription: RNA polymerase copies a gene into mRNA in the nucleus (up to 4). Translation: mRNA read in codons at the ribosome, tRNA brings amino acids matched by anticodons, joined by peptide bonds into a polypeptide that folds into a protein (up to 6). Importance: enzymes, structural proteins, haemoglobin, antibodies, hormones, growth and repair (up to 5).", marks: 15 },
      ],
    },
    // source: OpenStax — Concepts of Biology, 8.1 Mendel's Experiments (https://openstax.org/books/concepts-biology/pages/8-1-mendels-experiments)
    {
      slug: "genetics-and-heredity",
      title: "Genetics and Heredity: Mendel's Principles",
      objective:
        "By the end of the topic, learners should be able to explain Mendel's experiments, define key genetic terms, and solve a monohybrid cross using a Punnett square.",
      estimatedMinutes: 130,
      notes: `## Genetics and heredity

- **Genetics** — the study of heredity (how characteristics are passed from parents to offspring).
- **Heredity** — the passing on of traits through **genes** on chromosomes.

## Gregor Mendel

- **Gregor Mendel** (the "father of genetics") studied **garden pea plants** in the 1860s.
- Peas were ideal: they are easy to grow, **self-fertilise**, mature quickly, and have clear **contrasting traits** (tall/short, round/wrinkled seeds).
- He crossed **true-breeding** parents and counted the offspring over generations.

## Mendel's key findings

- A cross of a tall (pure) × short (pure) pea gave an **F1 generation** that were **all tall**.
- The F1 crossed together gave an **F2 generation** in a ratio of about **3 tall : 1 short**.
- The short trait **disappeared in F1** and **reappeared in F2** — so traits are **not blended**; they stay separate.

## Dominant and recessive

- The trait that shows in F1 is **dominant** (tall); the hidden one is **recessive** (short).
- A recessive trait shows only when **both alleles are recessive**.

## Key genetic terms

| Term | Meaning |
| --- | --- |
| **Gene** | a unit of heredity that codes for a trait |
| **Allele** | a version of a gene (e.g. T for tall, t for short) |
| **Dominant allele** | shows its effect even in one copy (written capital, T) |
| **Recessive allele** | shows only when both alleles are recessive (small letter, t) |
| **Genotype** | the alleles an organism has (e.g. TT, Tt, tt) |
| **Phenotype** | the visible trait (e.g. tall, short) |
| **Homozygous** | two identical alleles (TT or tt) |
| **Heterozygous** | two different alleles (Tt), also called a hybrid |
| **Monohybrid cross** | a cross studying one trait |
| **Dihybrid cross** | a cross studying two traits |

## Law of segregation

- The two alleles for a trait **separate during gamete formation** (meiosis), so each gamete carries **only one** allele.

## The Punnett square (monohybrid)

Cross of two heterozygous tall peas **Tt × Tt**:

| — | T | t |
| --- | --- | --- |
| **T** | TT | Tt |
| **t** | Tt | tt |

- Genotypes: **1 TT : 2 Tt : 1 tt**.
- Phenotypes: **3 tall : 1 short** (3:1 ratio).

## Common errors and misconceptions

- **"Traits blend"** — Mendel showed alleles stay **separate**; the recessive trait can reappear.
- **"Genotype and phenotype are the same"** — genotype is the **alleles**; phenotype is the **appearance**.
- **"A recessive allele is always hidden"** — it shows when the genotype is **homozygous recessive (tt)**.
- **"Tt is homozygous"** — Tt has two **different** alleles, so it is **heterozygous**.`,
      workedExample: `**Task.** In peas, tall (T) is dominant to short (t). Cross a heterozygous tall plant (Tt) with a short plant (tt). (a) Draw the Punnett square. (b) Give the genotype and phenotype ratios. (c) What percentage of offspring are expected to be short?

**Solution**

(a) Gametes: **Tt** gives T and t; **tt** gives t and t.

| — | t | t |
| --- | --- | --- |
| **T** | Tt | Tt |
| **t** | tt | tt |

(b) Ratios:
- **Genotype:** 2 Tt : 2 tt = **1 Tt : 1 tt**.
- **Phenotype:** Tt is tall, tt is short → **2 tall : 2 short = 1 tall : 1 short**.

(c) Short offspring (tt) are **2 out of 4 = 50%**.

**Answer:** the cross Tt × tt gives 1 tall : 1 short (genotype 1 Tt : 1 tt), so 50% of the offspring are expected to be short.`,
      quiz: [
        { prompt: "Genetics is the study of", options: ["heredity", "rocks", "the weather", "muscles"], correctIndex: 0, explanation: "Genetics studies inheritance." },
        { prompt: "The 'father of genetics' is", options: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Robert Hooke"], correctIndex: 0, explanation: "Mendel founded genetics." },
        { prompt: "Mendel experimented with", options: ["garden pea plants", "maize only", "mice", "bacteria"], correctIndex: 0, explanation: "He studied pea plants." },
        { prompt: "A version of a gene is called an", options: ["allele", "codon", "enzyme", "organ"], correctIndex: 0, explanation: "Alleles are gene versions." },
        { prompt: "An allele that shows its effect in a single copy is", options: ["dominant", "recessive", "hidden", "codominant only"], correctIndex: 0, explanation: "Dominant alleles are expressed with one copy." },
        { prompt: "A recessive trait shows only when the genotype is", options: ["homozygous recessive", "heterozygous", "homozygous dominant", "any genotype"], correctIndex: 0, explanation: "Both alleles must be recessive." },
        { prompt: "The alleles an organism carries are its", options: ["genotype", "phenotype", "habitat", "niche"], correctIndex: 0, explanation: "Genotype = allele make-up." },
        { prompt: "The visible characteristic is the", options: ["phenotype", "genotype", "allele", "gene"], correctIndex: 0, explanation: "Phenotype = appearance." },
        { prompt: "TT is described as", options: ["homozygous dominant", "heterozygous", "homozygous recessive", "a hybrid"], correctIndex: 0, explanation: "Two identical dominant alleles." },
        { prompt: "Tt is described as", options: ["heterozygous", "homozygous dominant", "homozygous recessive", "pure"], correctIndex: 0, explanation: "Two different alleles = heterozygous." },
        { prompt: "In a cross Tt × Tt, the phenotype ratio is", options: ["3 tall : 1 short", "1 : 1", "all tall", "all short"], correctIndex: 0, explanation: "3:1 dominant to recessive." },
        { prompt: "In a cross Tt × Tt, the genotype ratio is", options: ["1 TT : 2 Tt : 1 tt", "3 TT : 1 tt", "all Tt", "1 TT : 1 tt"], correctIndex: 0, explanation: "1:2:1 genotype ratio." },
        { prompt: "The law of segregation says alleles separate during", options: ["gamete formation (meiosis)", "digestion", "mitosis", "fertilization"], correctIndex: 0, explanation: "Each gamete gets one allele." },
        { prompt: "A cross studying one trait is a", options: ["monohybrid cross", "dihybrid cross", "test of blood", "pedigree only"], correctIndex: 0, explanation: "Mono = one trait." },
        { prompt: "A heterozygous individual is also called a", options: ["hybrid", "clone", "gamete", "zygote"], correctIndex: 0, explanation: "Heterozygous = hybrid." },
        { prompt: "In Mendel's tall × short cross, the F1 were", options: ["all tall", "all short", "half tall half short", "3:1 tall to short"], correctIndex: 0, explanation: "Tall (dominant) showed in all F1." },
        { prompt: "The short trait reappearing in F2 showed that traits are", options: ["not blended (stay separate)", "always blended", "lost forever", "the same as genes"], correctIndex: 0, explanation: "Recessive traits can reappear." },
        { prompt: "Which tool predicts offspring genotypes?", options: ["Punnett square", "food web", "pyramid of numbers", "microscope"], correctIndex: 0, explanation: "A Punnett square shows possible crosses." },
        { prompt: "If a plant is tt for height, it is", options: ["short (homozygous recessive)", "tall", "a hybrid", "heterozygous"], correctIndex: 0, explanation: "tt shows the recessive short trait." },
        { prompt: "Peas were good for Mendel's work because they", options: ["self-fertilise and have clear traits", "take years to grow", "have no traits", "cannot be crossed"], correctIndex: 0, explanation: "Fast-growing with contrasting traits." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define (a) genotype and (b) phenotype, giving an example of each.", answerKey: "(a) Genotype: the alleles an organism has, e.g. Tt. (b) Phenotype: the visible trait, e.g. tall. 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "In a cross Tt × Tt, what is the expected phenotype ratio?", options: ["3 dominant : 1 recessive", "1 : 1", "all dominant", "1 : 2 : 1"], correctIndex: 0, answerKey: "3:1 is the classic monohybrid ratio. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between homozygous and heterozygous.", answerKey: "Homozygous: two identical alleles (TT or tt). Heterozygous: two different alleles (Tt), also called a hybrid. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "In pea plants round seed (R) is dominant to wrinkled (r). Cross Rr × rr and give the phenotype ratio.", answerKey: "Offspring: Rr, Rr, rr, rr → 2 round : 2 wrinkled = 1 round : 1 wrinkled. Award for correct gametes/Punnett and ratio.", marks: 4 },
        { type: "ESSAY", prompt: "Describe Mendel's experiments with pea plants and explain how they led to the idea of dominant and recessive alleles and the law of segregation.", answerKey: "Experiments: crossed true-breeding contrasting peas; F1 all showed one trait (dominant), F2 showed 3:1 with the hidden (recessive) trait reappearing (up to 6). Dominant/recessive: dominant shows in one copy, recessive only when homozygous (up to 4). Law of segregation: paired alleles separate during gamete formation so each gamete carries one allele, recombined at fertilization (up to 5).", marks: 15 },
      ],
    },
    // source: OpenStax — Concepts of Biology, 8.3 Extensions of the Laws of Inheritance (https://openstax.org/books/concepts-biology/pages/8-3-extensions-of-the-laws-of-inheritance)
    {
      slug: "hereditary-traits-and-genetic-disorders",
      title: "Hereditary Traits and Genetic Disorders",
      objective:
        "By the end of the topic, learners should be able to describe sex-linked and inherited human traits and disorders, and explain the influence of environment on some traits.",
      estimatedMinutes: 100,
      notes: `## Inherited human traits

- Many human features are **inherited** through genes: earlobe shape, tongue rolling, hairline, blood group.
- Some traits are controlled by a single gene; others by **many genes** and the **environment**.

## Sex-linked traits

- **Sex-linked traits** are carried on the **sex chromosomes**, usually the **X chromosome**.
- Because males have only **one X (XY)**, they show X-linked recessive conditions more often than females (XX).
- A female with one faulty allele is usually a **carrier** (she does not show the trait but can pass it on).

| Sex-linked disorder | Effect |
| --- | --- |
| **Colour blindness** | cannot tell certain colours (often red/green) apart |
| **Haemophilia** | blood does not clot properly; bleeding is prolonged |

## Other inherited disorders

| Disorder | Cause | Effect |
| --- | --- | --- |
| **Sickle cell anaemia** | recessive allele changes haemoglobin | red cells become sickle-shaped; anaemia and pain |
| **Albinism** | recessive allele; no melanin | pale skin, hair and eyes |

- **Sickle cell** is important in West Africa; a person with **two** sickle alleles has the disease, while a **carrier (one allele)** has sickle-cell trait and some protection against malaria.

## Influence of environment on heredity

- Some traits depend on **both genes and environment**:
  - **Height and body build** depend on genes **and** diet/health.
  - **Skin colour** darkens with sunlight.
  - **Intelligence** is affected by inherited potential **and** by education, nutrition and environment.

## Common errors and misconceptions

- **"Sex-linked disorders affect males and females equally"** — X-linked recessive disorders are **more common in males** (one X).
- **"A carrier has the disease"** — a **carrier** has one faulty allele but does **not** show the disorder.
- **"Genes alone decide everything"** — many traits (height, intelligence) also depend on the **environment**.
- **"Sickle-cell carriers are always ill"** — carriers usually have **sickle-cell trait** (mild) and some malaria protection.`,
      workedExample: `**Task.** Haemophilia is an X-linked recessive disorder. A woman who is a carrier (X^H X^h) marries a normal man (X^H Y). (a) Why is haemophilia more common in boys? (b) Using the parents' genotypes, which children could have haemophilia? (c) Give one trait influenced by both genes and environment.

**Solution**

(a) Haemophilia is **more common in boys** because the gene is on the **X chromosome** and boys have only **one X (XY)**. A single faulty allele on that X shows the disorder, since there is no second X to mask it. Girls (XX) would need **two** faulty alleles.

(b) Cross **X^H X^h (carrier mother) × X^H Y (normal father)**:

| — | X^H | Y |
| --- | --- | --- |
| **X^H** | X^H X^H | X^H Y |
| **X^h** | X^H X^h | X^h Y |

- Daughters: X^H X^H (normal) and X^H X^h (carrier) — none affected.
- Sons: X^H Y (normal) and **X^h Y (haemophiliac)**.
- So **only sons** can have haemophilia, and about **half the sons** are expected to be affected.

(c) A trait influenced by both genes and environment: **height** (or intelligence, or skin colour) — inherited potential is shaped by **diet, health and environment**.

**Answer:** haemophilia is commoner in boys because they have one X; from this cross only sons can be affected (about half of them), while daughters are normal or carriers; height/intelligence are examples of traits shaped by genes and environment.`,
      quiz: [
        { prompt: "Sex-linked traits are carried mainly on the", options: ["X chromosome", "Y chromosome only", "all chromosomes", "no chromosome"], correctIndex: 0, explanation: "Most are X-linked." },
        { prompt: "X-linked recessive disorders are more common in", options: ["males", "females", "both equally", "neither"], correctIndex: 0, explanation: "Males have one X (XY)." },
        { prompt: "A female with one faulty recessive allele is usually a", options: ["carrier", "sufferer", "clone", "gamete"], correctIndex: 0, explanation: "She carries but does not show it." },
        { prompt: "Colour blindness affects the ability to", options: ["tell certain colours apart", "hear sounds", "clot blood", "digest food"], correctIndex: 0, explanation: "Often red/green confusion." },
        { prompt: "Haemophilia is a disorder of", options: ["blood clotting", "vision", "bone", "hearing"], correctIndex: 0, explanation: "Blood does not clot properly." },
        { prompt: "Sickle cell anaemia affects the", options: ["red blood cells (haemoglobin)", "bones", "eyes", "nerves"], correctIndex: 0, explanation: "It changes haemoglobin, sickling red cells." },
        { prompt: "Sickle cell anaemia is caused by a", options: ["recessive allele", "dominant allele on Y", "virus", "bacterium"], correctIndex: 0, explanation: "Two recessive alleles cause the disease." },
        { prompt: "A sickle-cell carrier (one allele) often has", options: ["some protection against malaria", "no genes", "full disease always", "colour blindness"], correctIndex: 0, explanation: "The trait gives partial malaria resistance." },
        { prompt: "Albinism results in a lack of", options: ["melanin (pigment)", "blood", "bone", "enzymes only"], correctIndex: 0, explanation: "No melanin gives pale skin/hair/eyes." },
        { prompt: "Which trait is influenced by both genes and environment?", options: ["height", "blood group", "eye colour only", "tongue rolling"], correctIndex: 0, explanation: "Height depends on genes and diet." },
        { prompt: "A carrier of a genetic disorder", options: ["does not show it but can pass it on", "always shows it", "cannot pass it on", "has no allele for it"], correctIndex: 0, explanation: "Carriers are unaffected but transmit the allele." },
        { prompt: "Males are XY, so an X-linked recessive allele", options: ["shows even with one copy", "is always masked", "is on the Y", "never affects them"], correctIndex: 0, explanation: "No second X to mask it." },
        { prompt: "Skin colour can darken due to", options: ["exposure to sunlight", "eating more protein", "drinking water", "sleeping"], correctIndex: 0, explanation: "Environment (sun) affects skin colour." },
        { prompt: "Intelligence is influenced by", options: ["inherited potential and environment", "genes only", "environment only", "neither"], correctIndex: 0, explanation: "Both nature and nurture contribute." },
        { prompt: "A person with two sickle alleles has", options: ["sickle cell anaemia (disease)", "no effect", "colour blindness", "haemophilia"], correctIndex: 0, explanation: "Homozygous recessive shows the disease." },
        { prompt: "Which is a sex-linked disorder?", options: ["colour blindness", "sickle cell anaemia", "albinism", "kwashiorkor"], correctIndex: 0, explanation: "Colour blindness and haemophilia are X-linked." },
        { prompt: "For a girl to have an X-linked recessive disorder she needs", options: ["two faulty alleles", "one faulty allele", "a Y chromosome", "no alleles"], correctIndex: 0, explanation: "Both X's must carry it." },
        { prompt: "Haemophilia in a boy comes from an X inherited from his", options: ["mother", "father", "brother", "grandfather directly"], correctIndex: 0, explanation: "A boy's X comes from his mother." },
        { prompt: "Which statement is TRUE?", options: ["Environment can affect some inherited traits", "Genes never interact with environment", "All traits are sex-linked", "Carriers always show the disease"], correctIndex: 0, explanation: "Many traits are gene-environment interactions." },
        { prompt: "Sickle cell disease is especially important in", options: ["West Africa", "the Arctic", "Antarctica", "space"], correctIndex: 0, explanation: "It is common where malaria occurs." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain why X-linked recessive disorders such as colour blindness are more common in males.", answerKey: "The gene is on the X chromosome; males have only one X (XY), so a single recessive allele is expressed, while females (XX) need two copies. Award for X-linked + males one X.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is a sex-linked disorder?", options: ["Haemophilia", "Sickle cell anaemia", "Albinism", "Marasmus"], correctIndex: 0, answerKey: "Haemophilia is X-linked. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "What is a carrier of a genetic disorder?", answerKey: "A person who has one copy of the faulty (recessive) allele but does not show the disorder, and can pass the allele to offspring. Award for unaffected + can transmit.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Name two inherited disorders and one trait influenced by both genes and environment.", answerKey: "Disorders (any two): sickle cell anaemia, haemophilia, colour blindness, albinism. Gene+environment trait: height/intelligence/skin colour. 1 mark each.", marks: 3 },
        { type: "ESSAY", prompt: "Discuss human hereditary traits and genetic disorders, including sex-linked conditions and the influence of the environment on some traits.", answerKey: "Inherited traits via genes; sex-linked (X-linked) disorders colour blindness and haemophilia commoner in males, females can be carriers (up to 6). Other disorders: sickle cell (recessive, malaria protection in carriers), albinism (up to 5). Environment: height, skin colour, intelligence shaped by genes and diet/health/education (up to 4).", marks: 15 },
      ],
    },
    // source: OpenStax — Concepts of Biology, 8.3 Extensions of the Laws of Inheritance (ABO blood groups, sex chromosomes) (https://openstax.org/books/concepts-biology/pages/8-3-extensions-of-the-laws-of-inheritance)
    {
      slug: "blood-groups-and-sex-determination",
      title: "Blood Groups, Rhesus Factor and Sex Determination",
      objective:
        "By the end of the topic, learners should be able to describe the ABO blood groups and rhesus factor, explain safe blood transfusion, and explain how sex is determined.",
      estimatedMinutes: 100,
      notes: `## The ABO blood group system

- ABO blood group is decided by **three alleles**: **I^A**, **I^B** and **i**.
- **I^A** and **I^B** are **codominant** (both show together); both are **dominant** over **i**.

| Blood group | Genotypes | Antigen on red cells |
| --- | --- | --- |
| **A** | I^A I^A or I^A i | A |
| **B** | I^B I^B or I^B i | B |
| **AB** | I^A I^B | A and B |
| **O** | i i | none |

## The rhesus (Rh) factor

- A person is **Rh-positive (Rh+)** if their red cells carry the **Rh antigen**, or **Rh-negative (Rh−)** if they do not.
- Rh+ is **dominant** to Rh−.
- Rh matters in pregnancy: an Rh− mother carrying an Rh+ baby can make antibodies that harm a later Rh+ baby.

## Blood transfusion

- Blood must be **compatible** to avoid the recipient's antibodies clumping (agglutinating) the donor cells.
- **Group O (Rh−)** is the **universal donor**; **group AB (Rh+)** is the **universal recipient**.

## Sex determination

- Humans have **23 pairs** of chromosomes; one pair are the **sex chromosomes**.
- **Females are XX**; **males are XY**.
- Eggs always carry an **X**; sperm carry **either X or Y**.
- If an **X sperm** fertilises the egg → **XX (girl)**; if a **Y sperm** fertilises the egg → **XY (boy)**.
- So the **father's sperm determines the sex** of the child, with a **50:50** chance.

\`\`\`svg Sex determination cross
<svg viewBox="0 0 220 130" role="img" aria-label="Punnett square of XX mother and XY father">
  <g font-size="10" fill="currentColor" text-anchor="middle">
  <text x="60" y="20">X</text><text x="110" y="20">X</text>
  <text x="20" y="60">X</text><text x="20" y="100">Y</text>
  <rect x="40" y="35" width="45" height="30" fill="none" stroke="currentColor"/><text x="62" y="55">XX</text>
  <rect x="90" y="35" width="45" height="30" fill="none" stroke="currentColor"/><text x="112" y="55">XX</text>
  <rect x="40" y="75" width="45" height="30" fill="none" stroke="currentColor"/><text x="62" y="95">XY</text>
  <rect x="90" y="75" width="45" height="30" fill="none" stroke="currentColor"/><text x="112" y="95">XY</text>
  <text x="175" y="55" font-size="8">girls (XX)</text><text x="175" y="95" font-size="8">boys (XY)</text>
  </g>
</svg>
\`\`\`

## Common errors and misconceptions

- **"The mother determines the baby's sex"** — the **father's sperm (X or Y)** decides sex.
- **"O blood has A and B antigens"** — group O has **no** A or B antigens (genotype ii).
- **"I^A is dominant over I^B"** — I^A and I^B are **codominant**; group AB shows both.
- **"Rh− is dominant"** — **Rh+** is dominant to Rh−.`,
      workedExample: `**Task.** A father with blood group AB (I^A I^B) and a mother with group O (ii) have children. (a) Work out the possible blood groups of the children. (b) Explain why they cannot have a group O child. (c) A couple keeps having girls and blames the mother — is that correct? Explain.

**Solution**

(a) Cross **I^A I^B × i i**:

| — | I^A | I^B |
| --- | --- | --- |
| **i** | I^A i | I^B i |
| **i** | I^A i | I^B i |

- Genotypes: I^A i (group **A**) and I^B i (group **B**).
- So the children can be **group A or group B** (1 A : 1 B).

(b) They **cannot** have a group O child because group O needs genotype **ii** (two i alleles). The father can only pass **I^A or I^B**, never **i**, so no child can be **ii**.

(c) The blame on the mother is **not correct**. The mother's eggs all carry an **X**. The **father's sperm** carries either **X or Y**: an X sperm gives a girl (XX) and a Y sperm gives a boy (XY). So the **father determines the sex**, and the chance is about **50:50** each time — repeated girls are due to chance, not the mother.

**Answer:** the children can be group A or B (never O, since the father passes I^A or I^B); and the father's sperm, not the mother, determines the baby's sex (50:50 boy or girl).`,
      quiz: [
        { prompt: "The ABO blood group is controlled by how many alleles?", options: ["three (I^A, I^B, i)", "one", "two only", "four"], correctIndex: 0, explanation: "I^A, I^B and i determine ABO." },
        { prompt: "I^A and I^B alleles are", options: ["codominant", "both recessive", "the same allele", "on the Y chromosome"], correctIndex: 0, explanation: "Both are expressed in group AB." },
        { prompt: "Blood group O has the genotype", options: ["ii", "I^A I^A", "I^A I^B", "I^B i"], correctIndex: 0, explanation: "Two i alleles give group O." },
        { prompt: "Group AB has", options: ["both A and B antigens", "no antigens", "only A", "only B"], correctIndex: 0, explanation: "Codominance shows both antigens." },
        { prompt: "The universal donor blood group is", options: ["O (Rh−)", "AB", "A", "B"], correctIndex: 0, explanation: "O negative has no A/B/Rh antigens." },
        { prompt: "The universal recipient blood group is", options: ["AB (Rh+)", "O", "A", "B"], correctIndex: 0, explanation: "AB has no antibodies against A or B." },
        { prompt: "A person with the Rh antigen is", options: ["Rh-positive", "Rh-negative", "group O", "a carrier"], correctIndex: 0, explanation: "Presence of the antigen = Rh+." },
        { prompt: "Rh-positive is ... to Rh-negative", options: ["dominant", "recessive", "codominant", "unrelated"], correctIndex: 0, explanation: "Rh+ is dominant." },
        { prompt: "Human females have sex chromosomes", options: ["XX", "XY", "YY", "XO"], correctIndex: 0, explanation: "Females are XX." },
        { prompt: "Human males have sex chromosomes", options: ["XY", "XX", "YY", "X only"], correctIndex: 0, explanation: "Males are XY." },
        { prompt: "Eggs always carry", options: ["an X chromosome", "a Y chromosome", "both X and Y", "no sex chromosome"], correctIndex: 0, explanation: "The mother contributes an X." },
        { prompt: "Sperm carry", options: ["either X or Y", "always X", "always Y", "no chromosome"], correctIndex: 0, explanation: "Sperm are X or Y." },
        { prompt: "The sex of a child is determined by", options: ["the father's sperm", "the mother's egg", "diet", "the environment"], correctIndex: 0, explanation: "X or Y sperm decides sex." },
        { prompt: "A Y sperm fertilising an egg gives a", options: ["boy (XY)", "girl (XX)", "carrier", "group O child"], correctIndex: 0, explanation: "Y sperm → XY male." },
        { prompt: "The chance of having a boy or a girl is about", options: ["50:50", "100% boy", "100% girl", "25:75"], correctIndex: 0, explanation: "X or Y sperm are equally likely." },
        { prompt: "Blood must be compatible in transfusion to avoid", options: ["clumping (agglutination) of cells", "faster clotting only", "more oxygen", "weight gain"], correctIndex: 0, explanation: "Incompatible blood agglutinates." },
        { prompt: "A person with genotype I^A i has blood group", options: ["A", "O", "B", "AB"], correctIndex: 0, explanation: "I^A is dominant over i → group A." },
        { prompt: "Which parents could have a group O child?", options: ["both carry an i allele", "one is AB", "father is I^A I^A", "both are AB"], correctIndex: 0, explanation: "Both must pass i to give ii." },
        { prompt: "Why is blaming the mother for a child's sex incorrect?", options: ["the father's sperm determines sex", "the mother has no chromosomes", "sex is not inherited", "the environment decides"], correctIndex: 0, explanation: "The X/Y sperm from the father sets the sex." },
        { prompt: "An Rh− mother carrying an Rh+ baby may", options: ["make antibodies affecting a later Rh+ baby", "always be safe", "become Rh+", "lose all blood"], correctIndex: 0, explanation: "Rh incompatibility can affect later pregnancies." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "List the four ABO blood groups and give the genotype of group O and group AB.", answerKey: "Groups A, B, AB, O. Group O = ii; group AB = I^A I^B. 2 marks groups, 1 each genotype.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which blood group is the universal donor?", options: ["O negative", "AB positive", "A", "B"], correctIndex: 0, answerKey: "O (Rh−) is the universal donor. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain how the sex of a human baby is determined.", answerKey: "Females are XX, males XY; eggs carry X; sperm carry X or Y. An X sperm gives XX (girl), a Y sperm gives XY (boy). The father's sperm determines sex, 50:50. Award for X/Y sperm and father determining sex.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why can a group AB father and a group O mother not have a group O child?", answerKey: "Group O needs genotype ii. The AB father can only pass I^A or I^B (never i), so no child can be ii/group O. Children are A or B. Award for father passes I^A/I^B, no i.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the ABO and rhesus blood group systems and explain their importance in blood transfusion and pregnancy.", answerKey: "ABO: alleles I^A, I^B (codominant), i; groups A, B, AB, O with antigens (up to 5). Rh: Rh+ (antigen present, dominant) vs Rh− (up to 3). Transfusion: must be compatible to avoid agglutination; O universal donor, AB universal recipient (up to 4). Pregnancy: Rh− mother with Rh+ baby may form antibodies affecting later Rh+ babies (up to 3).", marks: 15 },
      ],
    },
    // source: OpenStax — Concepts of Biology, 11.2 Mechanisms of Evolution (variation, mutation) (https://openstax.org/books/concepts-biology/pages/11-2-mechanisms-of-evolution)
    {
      slug: "variation",
      title: "Variation and Its Sources",
      objective:
        "By the end of the topic, learners should be able to distinguish continuous and discontinuous variation, and explain the genetic and environmental sources of variation.",
      estimatedMinutes: 90,
      notes: `## What is variation?

- **Variation** — the differences between individuals of the **same species**.
- Variation is the raw material for **natural selection and evolution**.

## Types of variation

| Type | Description | Examples |
| --- | --- | --- |
| **Continuous variation** | a range of small differences with no clear groups | height, body mass, skin colour |
| **Discontinuous variation** | distinct categories with no in-between | blood group, tongue rolling, sex, attached/free earlobes |

- Continuous variation is usually controlled by **many genes** (and the environment).
- Discontinuous variation is usually controlled by **one or a few genes**.

## Sources of genetic variation

1. **Mutation** — a change in the DNA base sequence; the **ultimate source of all new alleles**.
2. **Crossing over** — exchange of segments between homologous chromosomes in **meiosis (prophase I)**.
3. **Independent assortment** — random arrangement of chromosome pairs in **meiosis (metaphase I)**.
4. **Random fertilisation** — any sperm can fertilise any egg, giving new combinations.

## Causes of variation

- **Genetic factors** — the alleles inherited from parents (from meiosis, fertilisation and mutation).
- **Environmental factors** — diet, climate, sunlight, exercise, disease (e.g. a well-fed plant grows taller; sunlight darkens skin).
- Most features result from **both** genes and environment together.

## Importance of variation

- Provides the differences on which **natural selection** acts.
- Helps a species **adapt and survive** when the environment changes.
- Without variation, a species could be wiped out by a single disease or change.

## Common errors and misconceptions

- **"Height is discontinuous"** — height is **continuous** (a smooth range); blood group is discontinuous.
- **"Mutation is always harmful"** — mutations may be harmful, neutral or occasionally beneficial; they are the **source of new alleles**.
- **"Variation comes only from genes"** — the **environment** also causes variation.
- **"Identical twins are exactly the same"** — they share genes but the **environment** can make them differ.`,
      workedExample: `**Task.** In a class, students are grouped by (i) their height and (ii) their ability to roll the tongue. (a) Which shows continuous and which discontinuous variation? (b) Name two genetic sources of variation from meiosis. (c) Explain how the environment could cause two genetically identical plants to look different.

**Solution**

(a) Classifying:
- **Height** → **continuous variation** — it forms a smooth range from short to tall with no distinct groups (controlled by many genes and the environment).
- **Tongue rolling** → **discontinuous variation** — students fall into two clear categories, roller or non-roller (controlled by one/few genes).

(b) Two genetic sources of variation from meiosis:
- **Crossing over** (prophase I) — homologous chromosomes exchange segments.
- **Independent assortment** (metaphase I) — chromosome pairs line up randomly, mixing combinations.
- (Also random fertilisation and mutation contribute.)

(c) Even if two plants are **genetically identical** (clones), the **environment** can make them look different: one grown in **richer soil, more sunlight and water** will grow **taller and greener** than one in poor, shaded conditions. So the **phenotype** depends on genes **and** environment.

**Answer:** height is continuous, tongue rolling discontinuous; crossing over and independent assortment (in meiosis) are genetic sources of variation; environmental factors like soil, light and water can make identical plants differ.`,
      quiz: [
        { prompt: "Variation means differences between", options: ["individuals of the same species", "different species only", "living and non-living things", "cells and organs"], correctIndex: 0, explanation: "Variation is within a species." },
        { prompt: "Height and body mass show", options: ["continuous variation", "discontinuous variation", "no variation", "only genetic variation"], correctIndex: 0, explanation: "They form a smooth range." },
        { prompt: "Blood group shows", options: ["discontinuous variation", "continuous variation", "no variation", "environmental variation only"], correctIndex: 0, explanation: "Distinct categories, no in-between." },
        { prompt: "Continuous variation is usually controlled by", options: ["many genes", "one gene only", "no genes", "the Y chromosome only"], correctIndex: 0, explanation: "Polygenic traits vary continuously." },
        { prompt: "The ultimate source of all new alleles is", options: ["mutation", "digestion", "respiration", "photosynthesis"], correctIndex: 0, explanation: "Mutation creates new alleles." },
        { prompt: "Crossing over occurs during", options: ["meiosis (prophase I)", "mitosis", "fertilisation", "digestion"], correctIndex: 0, explanation: "Homologues exchange segments in meiosis." },
        { prompt: "Independent assortment happens in", options: ["metaphase I of meiosis", "prophase of mitosis", "translation", "replication"], correctIndex: 0, explanation: "Random line-up of chromosome pairs." },
        { prompt: "Random fertilisation adds variation because", options: ["any sperm can fertilise any egg", "only one combination is possible", "gametes are identical", "no gametes are used"], correctIndex: 0, explanation: "Random gamete combinations increase variety." },
        { prompt: "Tongue rolling is an example of", options: ["discontinuous variation", "continuous variation", "no variation", "environmental only"], correctIndex: 0, explanation: "Two clear categories." },
        { prompt: "An environmental cause of variation is", options: ["diet/nutrition", "an allele", "a mutation", "crossing over"], correctIndex: 0, explanation: "Diet affects growth, a non-genetic cause." },
        { prompt: "Skin darkening in sunlight is variation caused by", options: ["the environment", "meiosis", "mutation", "fertilisation"], correctIndex: 0, explanation: "Sunlight is an environmental factor." },
        { prompt: "Variation is important because it", options: ["provides the basis for natural selection", "stops evolution", "makes all individuals identical", "removes genes"], correctIndex: 0, explanation: "Selection acts on variation." },
        { prompt: "Which is a genetic source of variation?", options: ["mutation", "sunlight", "exercise", "diet"], correctIndex: 0, explanation: "Mutation changes the DNA." },
        { prompt: "Most human features result from", options: ["both genes and environment", "genes only", "environment only", "neither"], correctIndex: 0, explanation: "Traits are gene-environment interactions." },
        { prompt: "Discontinuous variation is usually controlled by", options: ["one or a few genes", "many genes", "the environment only", "no genes"], correctIndex: 0, explanation: "Single-gene traits give distinct categories." },
        { prompt: "Without variation, a species is more likely to", options: ["be wiped out by one disease or change", "adapt easily", "evolve faster", "survive anything"], correctIndex: 0, explanation: "No variation means no adaptability." },
        { prompt: "Which is TRUE about mutations?", options: ["they may be harmful, neutral or beneficial", "they are always beneficial", "they never happen", "they only occur in plants"], correctIndex: 0, explanation: "Mutations vary in effect." },
        { prompt: "Two identical twins may differ because of", options: ["their environment", "different genes", "different species", "meiosis in the twin"], correctIndex: 0, explanation: "Environment can create differences." },
        { prompt: "A graph of continuous variation typically shows a", options: ["smooth range/curve", "a few separate bars", "one value only", "no data"], correctIndex: 0, explanation: "Continuous data form a range." },
        { prompt: "Crossing over and independent assortment both occur in", options: ["meiosis", "mitosis", "fertilisation", "transcription"], correctIndex: 0, explanation: "Both are meiotic sources of variation." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between continuous and discontinuous variation, with one example of each.", answerKey: "Continuous: a smooth range with no clear groups, e.g. height. Discontinuous: distinct categories with no in-between, e.g. blood group/tongue rolling. 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is the ultimate source of new alleles?", options: ["Mutation", "Diet", "Sunlight", "Exercise"], correctIndex: 0, answerKey: "Mutation creates new alleles. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Name three genetic sources of variation.", answerKey: "Any three: mutation; crossing over; independent assortment; random fertilisation. 1 mark each.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain how the environment can cause variation, with an example.", answerKey: "Environmental factors (diet, sunlight, climate, exercise, disease) affect the phenotype, e.g. a well-fed plant grows taller, sunlight darkens skin. Award for factor + example.", marks: 4 },
        { type: "ESSAY", prompt: "Explain the types and sources of variation and discuss why variation is important for the survival of a species.", answerKey: "Types: continuous (range, polygenic, e.g. height) vs discontinuous (categories, one/few genes, e.g. blood group) (up to 5). Sources: genetic (mutation, crossing over, independent assortment, random fertilisation) and environmental (diet, climate, sunlight) (up to 6). Importance: provides raw material for natural selection and adaptation; without it a species is vulnerable to change/disease (up to 4).", marks: 15 },
      ],
    },
    // source: OpenStax — Concepts of Biology, 11.1 Discovering How Populations Change (Darwin, Lamarck, evidence) (https://openstax.org/books/concepts-biology/pages/11-1-discovering-how-populations-change)
    {
      slug: "evolution",
      title: "Evolution and Natural Selection",
      objective:
        "By the end of the topic, learners should be able to explain Darwin's theory of natural selection, compare it with Lamarck's theory, and state the evidence for evolution.",
      estimatedMinutes: 110,
      notes: `## What is evolution?

- **Evolution** — the gradual change in the inherited characteristics of a species over many generations.
- It explains how the huge variety of living things arose from earlier forms (**descent with modification**).

## Darwin's theory of natural selection

Charles **Darwin** proposed **evolution by natural selection**, based on these observations:

1. **Overproduction** — organisms produce **more offspring** than can survive.
2. **Variation** — individuals **vary**, and much variation is **inherited**.
3. **Struggle for existence** — resources are limited, so there is competition.
4. **Survival of the fittest** — individuals with **favourable variations** are more likely to **survive and reproduce**.
5. **Inheritance** — the favourable traits are passed to offspring, so over time the population **changes (adapts)**.

- Darwin's evidence included the **Galápagos finches**, whose beaks were adapted to different foods.

## Lamarck's theory (earlier, now rejected)

- **Lamarck** proposed the **inheritance of acquired characteristics**: features developed by **use or disuse** during an organism's life are passed to offspring (e.g. a giraffe stretching its neck and passing a longer neck on).
- This is **rejected** because features gained during life (not in the genes/gametes) are **not** inherited.

| Feature | Lamarck | Darwin |
| --- | --- | --- |
| Source of change | use and disuse in life | inherited variation |
| What is inherited | acquired characteristics | favourable inherited traits |
| Status | rejected | accepted |

## Evidence for evolution

| Evidence | What it shows |
| --- | --- |
| **Fossil record** | shows organisms have changed over time; links between old and modern forms |
| **Comparative anatomy** | **homologous structures** (same basic plan, e.g. the limb bones of humans, whales, bats) show common ancestry |
| **Embryology** | early embryos of different vertebrates look similar |
| **Direct observation** | e.g. finch beaks changing, antibiotic resistance in bacteria |

## Common errors and misconceptions

- **"Lamarck was right that stretching is inherited"** — acquired characteristics are **not** inherited; Lamarck's theory is rejected.
- **"Survival of the fittest means the strongest"** — 'fittest' means **best suited to the environment** to survive and reproduce.
- **"Individuals evolve"** — **populations** evolve over generations, not single individuals.
- **"There is no evidence for evolution"** — fossils, comparative anatomy, embryology and observed change all support it.`,
      workedExample: `**Task.** Long-necked giraffes feed on high leaves. (a) Explain how Lamarck and (b) how Darwin would each account for the long neck. (c) Which explanation is accepted, and give one piece of evidence for evolution.

**Solution**

(a) **Lamarck's explanation:** an ancestor giraffe **stretched its neck** to reach high leaves during its life; this **acquired** longer neck was then **passed to its offspring**, and over generations necks became longer. (This idea — inheritance of acquired characteristics — is now **rejected**.)

(b) **Darwin's explanation (natural selection):** giraffes **varied** — some had naturally **longer necks** than others. When food was high, the longer-necked giraffes could **feed better, survive and reproduce**, passing the **inherited** long-neck trait to their offspring. Over many generations the population came to have long necks.

(c) **Darwin's** explanation is **accepted**, because favourable **inherited** variations (not features acquired in life) are passed on by natural selection. One piece of **evidence** for evolution: the **fossil record** (or homologous structures in comparative anatomy, e.g. the similar limb bones of humans, whales and bats showing common ancestry).

**Answer:** Lamarck said the stretched (acquired) neck was inherited (rejected); Darwin said natural selection favoured giraffes with inherited longer necks (accepted); evidence includes the fossil record and homologous structures.`,
      quiz: [
        { prompt: "Evolution is the gradual change in a species'", options: ["inherited characteristics over generations", "size in one day", "habitat only", "name"], correctIndex: 0, explanation: "Inherited traits change over time." },
        { prompt: "The theory of natural selection was proposed by", options: ["Charles Darwin", "Gregor Mendel", "Lamarck", "Pasteur"], correctIndex: 0, explanation: "Darwin proposed natural selection." },
        { prompt: "'Survival of the fittest' means survival of those", options: ["best suited to the environment", "physically strongest only", "largest only", "oldest"], correctIndex: 0, explanation: "Fittest = best adapted to survive/reproduce." },
        { prompt: "Natural selection acts on", options: ["inherited variation", "acquired features", "learned skills", "diet only"], correctIndex: 0, explanation: "Only heritable variation is selected." },
        { prompt: "Organisms tend to produce", options: ["more offspring than can survive", "exactly enough offspring", "no offspring", "identical offspring only"], correctIndex: 0, explanation: "Overproduction leads to competition." },
        { prompt: "Lamarck's theory is the inheritance of", options: ["acquired characteristics", "favourable alleles", "mutations only", "blood groups"], correctIndex: 0, explanation: "He proposed use/disuse inheritance." },
        { prompt: "Lamarck's theory is now", options: ["rejected", "fully accepted", "proven by DNA", "the modern view"], correctIndex: 0, explanation: "Acquired traits are not inherited." },
        { prompt: "Darwin's finches showed variation in their", options: ["beaks (adapted to food)", "colour only", "song only", "size only"], correctIndex: 0, explanation: "Beaks adapted to different foods." },
        { prompt: "Fossils are evidence for evolution because they", options: ["show organisms changed over time", "prove Lamarck right", "are all identical", "are non-living"], correctIndex: 0, explanation: "The fossil record shows change." },
        { prompt: "Homologous structures (e.g. limb bones of human, bat, whale) suggest", options: ["common ancestry", "no relationship", "identical species", "recent creation"], correctIndex: 0, explanation: "Same basic plan implies shared ancestor." },
        { prompt: "What evolves over time?", options: ["populations", "single individuals", "organs only", "cells only"], correctIndex: 0, explanation: "Populations change across generations." },
        { prompt: "Which is a source of the variation natural selection acts on?", options: ["mutation and meiosis", "learning a skill", "getting a tan", "exercise"], correctIndex: 0, explanation: "Heritable variation comes from genes." },
        { prompt: "In Darwin's theory, favourable traits become common because", options: ["their carriers survive and reproduce more", "they are learned", "they are acquired", "they are stretched"], correctIndex: 0, explanation: "Selective survival passes on the traits." },
        { prompt: "Which is direct evidence of evolution today?", options: ["antibiotic resistance in bacteria", "the water cycle", "photosynthesis", "digestion"], correctIndex: 0, explanation: "Resistance evolves by selection." },
        { prompt: "Which statement is TRUE?", options: ["Acquired characteristics are not inherited", "Individuals evolve in one lifetime", "The fittest is always the biggest", "Evolution has no evidence"], correctIndex: 0, explanation: "Only heritable traits pass on." },
        { prompt: "Embryology supports evolution because early vertebrate embryos", options: ["look similar", "are all different", "have no cells", "are fossils"], correctIndex: 0, explanation: "Similar embryos suggest common ancestry." },
        { prompt: "The 'struggle for existence' arises because", options: ["resources are limited", "resources are unlimited", "no offspring are produced", "all survive"], correctIndex: 0, explanation: "Limited resources cause competition." },
        { prompt: "Descent with modification means", options: ["species change from earlier forms over time", "species never change", "species are unrelated", "species stay the same"], correctIndex: 0, explanation: "Modern species descend from earlier ones." },
        { prompt: "Which pair correctly matches theory to idea?", options: ["Darwin – natural selection", "Lamarck – natural selection", "Darwin – acquired characteristics", "Mendel – natural selection"], correctIndex: 0, explanation: "Darwin = natural selection; Lamarck = acquired characteristics." },
        { prompt: "A favourable variation is one that helps an organism", options: ["survive and reproduce in its environment", "grow older only", "lose its genes", "stop reproducing"], correctIndex: 0, explanation: "It increases survival and reproduction." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the main observations behind Darwin's theory of natural selection.", answerKey: "Overproduction of offspring; inherited variation; struggle for existence (limited resources); survival of the fittest/best adapted; favourable traits passed to offspring so the population changes. Award 1 mark per point (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Whose theory was the inheritance of acquired characteristics?", options: ["Lamarck", "Darwin", "Mendel", "Pasteur"], correctIndex: 0, answerKey: "Lamarck proposed inheritance of acquired characteristics. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Give two pieces of evidence for evolution.", answerKey: "Any two: fossil record; comparative anatomy/homologous structures; embryology; direct observation (finch beaks, antibiotic resistance). 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State one key difference between Darwin's and Lamarck's theories.", answerKey: "Darwin: natural selection acts on inherited variation (accepted). Lamarck: characteristics acquired by use/disuse in life are inherited (rejected). Award for the inherited-variation vs acquired-characteristics contrast.", marks: 3 },
        { type: "ESSAY", prompt: "Explain Darwin's theory of evolution by natural selection, contrast it with Lamarck's theory, and describe the evidence that supports evolution.", answerKey: "Darwin: overproduction, inherited variation, struggle for existence, survival of the fittest, inheritance of favourable traits, adaptation over generations, e.g. finches (up to 7). Lamarck: inheritance of acquired characteristics (use/disuse), now rejected; contrast (up to 4). Evidence: fossils, homologous structures/comparative anatomy, embryology, observed change (up to 4).", marks: 15 },
      ],
    },
  ],
};
