import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 11,
// Semester One, Period I: Viruses and Bacteria. One topic per CONTENTS item:
// (1) virus; (2) classification; (3) common viral diseases; (4) life cycle of a
// virus; (5) STIs (viral); (6) structure of bacteriophage; (7) bacteria;
// (8) common bacterial diseases; (9) STIs (bacterial) and HIV testing.
export const biologyG11P1: PeriodContent = {
  grade: 11,
  number: 1,
  title: "Viruses and Bacteria",
  summary:
    "Period I of the MoE Grade 11 Biology syllabus. Learners study viruses as non-cellular infectious particles — their structure and classification by nucleic acid, the viral diseases they cause and the lytic and lysogenic life cycles of the bacteriophage — then turn to bacteria: their structure, shapes and classification, the diseases they cause, their role in sexually transmitted infections, and their economic importance to humans.",
  topics: [
    // source: OpenStax — Biology 2e, 21.1 Viral Evolution, Morphology, and Classification (https://openstax.org/books/biology-2e/pages/21-1-viral-evolution-morphology-and-classification)
    {
      slug: "viruses-characteristics-and-structure",
      title: "Viruses: Characteristics and Structure",
      objective:
        "By the end of the topic, learners should be able to define a virus, list the general characteristics of viruses, and describe the composition of a viral particle (nucleic acid core, capsid and envelope).",
      estimatedMinutes: 120,
      notes: `## What is a virus?

- **Virus** — a tiny non-cellular infectious particle made of nucleic acid inside a protein coat, that can reproduce only inside a living host cell.
- Viruses are **acellular** (not made of cells): they have no cytoplasm, organelles, ribosomes or plasma membrane of their own.
- A complete virus particle outside a cell is called a **virion**.

## General characteristics of viruses

- **Obligate intracellular parasites** — they multiply only inside a living host cell (bacterium, plant, animal, human).
- Contain **only one type of nucleic acid** — either DNA **or** RNA, never both.
- **Very small** — about 20–250 nanometres; most are visible only with the **electron microscope**.
- Have **no metabolism** of their own — outside a host they are inert, like non-living chemicals.
- **Host-specific** — each virus infects particular hosts and cells (e.g. HIV attacks certain white blood cells).
- Show features of both living and non-living things, so they are placed in **no kingdom**.

## Structure and composition of a virus

Every virion has two basic parts, and some have a third:

| Part | Made of | Function |
| --- | --- | --- |
| **Nucleic acid core** | DNA or RNA (the genome) | carries the genetic instructions |
| **Capsid** | protein subunits called **capsomeres** | protects the nucleic acid; helps attach to the host |
| **Envelope** (only in some) | lipid membrane from the host cell, with viral **glycoproteins** | helps the virus enter host cells |

- A virus with only a nucleic acid core and capsid is a **naked virus**.
- A virus with an outer membrane is an **enveloped virus** (e.g. HIV, influenza).
- The **glycoprotein spikes** on the envelope let the virus recognise and lock onto host-cell receptors.

\`\`\`svg Structure of an enveloped virus
<svg viewBox="0 0 260 180" role="img" aria-label="Virus showing nucleic acid, capsid and envelope">
  <circle cx="130" cy="90" r="70" fill="#bfdbfe" fill-opacity="0.4" stroke="currentColor"/>
  <circle cx="130" cy="90" r="48" fill="none" stroke="currentColor" stroke-dasharray="3 3"/>
  <path d="M110,70 q20,-14 40,0 q14,20 0,40 q-20,14 -40,0 q-14,-20 0,-40 Z" fill="#93c5fd" fill-opacity="0.6" stroke="currentColor"/>
  <path d="M124,80 q6,10 0,20 q6,-4 12,0 q-6,-10 0,-20 q-6,4 -12,0 Z" fill="#3b82f6" fill-opacity="0.6" stroke="currentColor"/>
  <g stroke="currentColor"><line x1="130" y1="20" x2="130" y2="8"/><line x1="180" y1="40" x2="189" y2="31"/><line x1="200" y1="90" x2="212" y2="90"/><line x1="180" y1="140" x2="189" y2="149"/></g>
  <text x="130" y="94" font-size="8" text-anchor="middle" fill="currentColor">nucleic acid</text>
  <text x="130" y="170" font-size="9" text-anchor="middle" fill="currentColor">capsid (protein coat)</text>
  <text x="222" y="93" font-size="8" fill="currentColor">spike</text>
</svg>
\`\`\`

## Living or non-living?

- **Living-like:** contain genetic material, can reproduce (inside a host) and can mutate/evolve.
- **Non-living-like:** no cells, no metabolism, cannot reproduce on their own, and can be crystallised like a chemical.
- Because of this dual nature, viruses are **not placed in any kingdom** of living things.

## Common errors and misconceptions

- **"A virus is a small bacterium"** — no; bacteria are complete living cells, viruses are non-cellular particles.
- **"Viruses contain both DNA and RNA"** — a virus has only **one** kind of nucleic acid.
- **"Viruses can reproduce anywhere"** — they reproduce **only inside a living host cell**.
- **"All viruses have an envelope"** — naked viruses have none; only some viruses are enveloped.`,
      workedExample: `**Task.** A student examines an electron micrograph of a virus and lists: an outer lipid layer with spikes, a protein coat made of repeating units, and a single strand of RNA inside. (a) Name each part. (b) Is this a naked or enveloped virus? (c) Give two reasons the particle is described as being on the border between living and non-living.

**Solution**

(a) Naming the parts:
1. The outer lipid layer with spikes → the **envelope** with **glycoprotein spikes** (taken from the host membrane; used to attach to host cells).
2. The protein coat of repeating units → the **capsid**, built from protein subunits called **capsomeres**; it protects the genetic material.
3. The single RNA strand inside → the **nucleic acid core** (the genome) — here **RNA**.

(b) Because it has an outer membrane, it is an **enveloped virus**.

(c) It is on the border between living and non-living because:
- **Living feature:** it contains genetic material (RNA) and can reproduce and mutate inside a host cell.
- **Non-living feature:** it is not made of cells, has no metabolism and is completely inert outside a host.

**Answer:** envelope + spikes, capsid, RNA core; an enveloped RNA virus; living because it has genes and can reproduce in a host, non-living because it is acellular and inert outside a host.`,
      quiz: [
        { prompt: "A virus is best described as", options: ["a single-celled fungus", "a small bacterium", "a non-cellular infectious particle", "a type of protozoan"], correctIndex: 2, explanation: "Viruses are acellular particles of nucleic acid in a protein coat." },
        { prompt: "Viruses can reproduce only", options: ["in dead tissue", "in pond water", "in soil", "inside a living host cell"], correctIndex: 3, explanation: "They are obligate intracellular parasites." },
        { prompt: "The protein coat of a virus is called the", options: ["membrane", "envelope", "nucleoid", "capsid"], correctIndex: 3, explanation: "The capsid is built from capsomeres." },
        { prompt: "A virus contains", options: ["either DNA or RNA, never both", "both DNA and RNA", "no nucleic acid", "only protein"], correctIndex: 0, explanation: "Only one type of nucleic acid is present." },
        { prompt: "The protein subunits that make up the capsid are", options: ["ribosomes", "capsomeres", "plasmids", "glycogen"], correctIndex: 1, explanation: "Capsomeres assemble into the capsid." },
        { prompt: "A complete virus particle is a", options: ["gamete", "cell", "spore", "virion"], correctIndex: 3, explanation: "A virion is the full infectious particle." },
        { prompt: "The viral envelope is derived from the", options: ["nucleus", "capsid", "host cell membrane", "cell wall"], correctIndex: 2, explanation: "The envelope comes from host membrane material." },
        { prompt: "Most viruses can only be seen with a(n)", options: ["hand lens", "electron microscope", "light microscope", "naked eye"], correctIndex: 1, explanation: "They are 20–250 nm, too small for light microscopy." },
        { prompt: "Spikes on the viral envelope are made of", options: ["chitin", "cellulose", "glycoproteins", "starch"], correctIndex: 2, explanation: "Glycoprotein spikes attach to host receptors." },
        { prompt: "Viruses are placed in", options: ["kingdom Protista", "kingdom Monera", "no kingdom", "kingdom Fungi"], correctIndex: 2, explanation: "Their non-living features exclude them from any kingdom." },
        { prompt: "A virus with no envelope is called", options: ["a virion", "an enveloped virus", "a prophage", "a naked virus"], correctIndex: 3, explanation: "Naked viruses have only capsid and nucleic acid." },
        { prompt: "One living-like feature of viruses is that they", options: ["have ribosomes", "have cytoplasm", "carry out respiration", "can reproduce and mutate"], correctIndex: 3, explanation: "They reproduce and evolve inside hosts." },
        { prompt: "Which structure carries the virus's genetic instructions?", options: ["capsid", "nucleic acid core", "envelope", "spike"], correctIndex: 1, explanation: "The nucleic acid (DNA/RNA) is the genome." },
        { prompt: "Viruses are said to be host-specific because they", options: ["cannot infect humans", "infect every organism equally", "infect only particular hosts/cells", "live outside cells"], correctIndex: 2, explanation: "Each virus binds specific host receptors." },
        { prompt: "Outside a host cell a virus is", options: ["actively growing", "inert with no metabolism", "dividing rapidly", "photosynthesising"], correctIndex: 1, explanation: "It has no metabolism of its own." },
        { prompt: "Which is NOT part of a typical virus?", options: ["nucleic acid", "capsid", "mitochondrion", "capsomeres"], correctIndex: 2, explanation: "Viruses have no organelles such as mitochondria." },
        { prompt: "The size range of most viruses is about", options: ["20–250 nanometres", "1–5 millimetres", "10–50 micrometres", "1–2 centimetres"], correctIndex: 0, explanation: "Viruses are measured in nanometres." },
        { prompt: "HIV and influenza are examples of", options: ["naked viruses", "enveloped viruses", "bacteria", "fungi"], correctIndex: 1, explanation: "Both have an outer envelope." },
        { prompt: "Being 'acellular' means a virus", options: ["is a large cell", "has one cell", "has many cells", "is not made of cells"], correctIndex: 3, explanation: "Acellular = not composed of cells." },
        { prompt: "The main function of the capsid is to", options: ["carry out respiration", "make food", "protect the nucleic acid and aid attachment", "produce energy"], correctIndex: 2, explanation: "The capsid protects the genome and helps the virus attach." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a virus and state two general characteristics of viruses.", answerKey: "A virus is a non-cellular infectious particle of nucleic acid within a protein coat that reproduces only inside a living host cell. Characteristics (any two): acellular; contains only DNA or RNA; obligate intracellular parasite; very small (nm); no metabolism; host-specific. 1 mark definition idea, 1 each for two features.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which part of a virus is made of protein subunits called capsomeres?", options: ["The capsid", "The nucleic acid core", "The envelope", "The spike"], correctIndex: 0, answerKey: "The capsid is the protein coat. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Name the three possible parts of an enveloped virus and state what each is made of.", answerKey: "Nucleic acid core (DNA or RNA); capsid (protein/capsomeres); envelope (lipid membrane from host with glycoprotein spikes). 1 mark each part with material.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Give one reason viruses are considered living and one reason they are considered non-living.", answerKey: "Living: contain genetic material and can reproduce/mutate inside a host. Non-living: not made of cells, no metabolism, inert outside a host. 2 marks each side.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the structure of a virus and explain why viruses are difficult to classify as living or non-living.", answerKey: "Structure: nucleic acid core (one type only), capsid of capsomeres, sometimes an envelope with glycoprotein spikes; acellular, 20–250 nm (up to 8). Classification difficulty: living features (genes, reproduction, mutation inside host) vs non-living features (no cells, no metabolism, inert/crystallisable outside a host), so placed in no kingdom (up to 7). Reward a labelled description and balanced argument.", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 21.1 Viral Evolution, Morphology, and Classification (https://openstax.org/books/biology-2e/pages/21-1-viral-evolution-morphology-and-classification)
    {
      slug: "classification-of-viruses",
      title: "Classification of Viruses",
      objective:
        "By the end of the topic, learners should be able to classify viruses by their nucleic acid (DNA and RNA viruses) and by their capsid shape, and give examples of each.",
      estimatedMinutes: 100,
      notes: `## Basis of classifying viruses

Viruses are grouped mainly by:

1. the **type of nucleic acid** they contain (DNA or RNA);
2. the **shape (morphology)** of the capsid;
3. whether they have an **envelope** or are naked;
4. the **host** they infect.

## Classification by nucleic acid

| Group | Genome | How it copies itself | Mutation rate | Examples |
| --- | --- | --- | --- | --- |
| **DNA viruses** | DNA | uses the host cell's replication enzymes to copy its DNA | lower | chickenpox, hepatitis B, herpes simplex, smallpox |
| **RNA viruses** | RNA | carry/encode their own enzymes to copy RNA (or make DNA) | higher | influenza (flu), measles, rabies, polio, HIV |

- **DNA viruses** have **lower mutation rates**, so they change slowly.
- **RNA viruses** **mutate more often** because copying RNA is more error-prone — this is why the flu virus changes each year and needs new vaccines.
- Some RNA viruses are **retroviruses** (e.g. HIV): they copy their RNA **into DNA** using the enzyme **reverse transcriptase**.

## Classification by capsid shape (morphology)

| Shape | Description | Example |
| --- | --- | --- |
| **Helical** | rod-like, spiral capsid | tobacco mosaic virus |
| **Icosahedral** | roughly spherical, many flat faces | poliovirus, herpesvirus |
| **Enveloped** | capsid surrounded by a membrane | HIV, influenza |
| **Head-and-tail** | icosahedral head + helical tail | **bacteriophages** (viruses of bacteria) |

## Common errors and misconceptions

- **"All viruses contain DNA"** — many important viruses are **RNA viruses** (flu, HIV, measles, polio).
- **"RNA viruses and DNA viruses mutate equally"** — RNA viruses mutate **more** because RNA copying is error-prone.
- **"Bacteriophages infect people"** — bacteriophages infect **bacteria**, not human cells.
- **"Shape does not matter"** — capsid shape (helical, icosahedral, head-and-tail) is a key classifying feature.`,
      workedExample: `**Task.** Classify the following viruses and justify: (i) HIV — an enveloped virus whose RNA is copied into DNA by reverse transcriptase; (ii) a T4 bacteriophage with an icosahedral head and a tail; (iii) tobacco mosaic virus, a rod-shaped RNA virus.

**Solution**

(i) **HIV**
- By nucleic acid → **RNA virus** (specifically a **retrovirus**, because it uses reverse transcriptase to make DNA from its RNA).
- By shape → **enveloped** virus.

(ii) **T4 bacteriophage**
- By shape → **head-and-tail** morphology (icosahedral head + helical tail).
- By host → it infects **bacteria** (it is a bacteriophage), and it is a **DNA virus**.

(iii) **Tobacco mosaic virus**
- By nucleic acid → **RNA virus**.
- By shape → **helical** (rod-shaped) capsid.

**Answer:** HIV = enveloped RNA retrovirus; T4 = head-and-tail DNA bacteriophage of bacteria; TMV = helical RNA virus. Viruses are classified by nucleic acid type and capsid shape.`,
      quiz: [
        { prompt: "The main basis for classifying viruses is the", options: ["type of nucleic acid and capsid shape", "colour", "size only", "smell"], correctIndex: 0, explanation: "Nucleic acid type and morphology are the key criteria." },
        { prompt: "A virus that contains RNA is called a(n)", options: ["bacterium", "DNA virus", "prophage", "RNA virus"], correctIndex: 3, explanation: "It is grouped by its RNA genome." },
        { prompt: "Which viruses generally mutate more often?", options: ["both mutate equally", "DNA viruses", "RNA viruses", "neither mutates"], correctIndex: 2, explanation: "RNA copying is more error-prone." },
        { prompt: "HIV is an example of a", options: ["DNA virus with low mutation", "retrovirus (RNA virus)", "bacterium", "fungus"], correctIndex: 1, explanation: "HIV uses reverse transcriptase to copy RNA into DNA." },
        { prompt: "The enzyme used by retroviruses to make DNA from RNA is", options: ["reverse transcriptase", "amylase", "catalase", "lipase"], correctIndex: 0, explanation: "Reverse transcriptase copies RNA to DNA." },
        { prompt: "A rod-like, spiral capsid is described as", options: ["cubic", "icosahedral", "spherical only", "helical"], correctIndex: 3, explanation: "Helical capsids are rod-shaped, e.g. TMV." },
        { prompt: "Poliovirus and herpesvirus have a capsid that is", options: ["icosahedral", "helical", "head-and-tail", "cubic"], correctIndex: 0, explanation: "Icosahedral = roughly spherical with many faces." },
        { prompt: "Viruses with an icosahedral head and a helical tail are", options: ["enveloped only", "helical only", "head-and-tail (bacteriophages)", "naked spheres"], correctIndex: 2, explanation: "This head-and-tail form is typical of phages." },
        { prompt: "Which is a DNA virus?", options: ["chickenpox", "influenza", "measles", "rabies"], correctIndex: 0, explanation: "Chickenpox, hepatitis B and herpes are DNA viruses." },
        { prompt: "Bacteriophages are viruses that infect", options: ["humans", "bacteria", "plants", "fungi"], correctIndex: 1, explanation: "'Phage' means bacteria-eater." },
        { prompt: "DNA viruses copy their genome using", options: ["reverse transcriptase only", "the host cell's replication enzymes", "chloroplasts", "mitochondria"], correctIndex: 1, explanation: "They direct host enzymes to replicate viral DNA." },
        { prompt: "Which is an RNA virus?", options: ["hepatitis B", "smallpox", "rabies", "herpes simplex"], correctIndex: 2, explanation: "Rabies, flu, measles, polio and HIV are RNA viruses." },
        { prompt: "Why does the flu vaccine change most years?", options: ["bacteria evolve", "the virus is DNA-based", "it does not really change", "the RNA flu virus mutates frequently"], correctIndex: 3, explanation: "High RNA mutation rate changes surface proteins." },
        { prompt: "An enveloped virus differs from a naked virus by having", options: ["no nucleic acid", "an outer membrane", "no capsid", "a nucleus"], correctIndex: 1, explanation: "Enveloped viruses have a membrane; naked ones do not." },
        { prompt: "Tobacco mosaic virus is classified by shape as", options: ["helical", "icosahedral", "head-and-tail", "enveloped"], correctIndex: 0, explanation: "TMV has a helical (rod) capsid." },
        { prompt: "Which feature is NOT used to classify viruses?", options: ["presence of an envelope", "nucleic acid type", "capsid shape", "number of legs"], correctIndex: 3, explanation: "Viruses have no legs; the others are real criteria." },
        { prompt: "Compared with RNA viruses, DNA viruses tend to", options: ["have no genome", "mutate faster", "mutate more slowly", "be larger than cells"], correctIndex: 2, explanation: "DNA replication is more accurate, so slower mutation." },
        { prompt: "A retrovirus is a special kind of", options: ["bacterium", "DNA virus", "RNA virus", "protozoan"], correctIndex: 2, explanation: "Retroviruses reverse-transcribe RNA into DNA." },
        { prompt: "Which virus is enveloped?", options: ["influenza", "poliovirus", "tobacco mosaic virus", "T4 phage"], correctIndex: 0, explanation: "Influenza and HIV are enveloped." },
        { prompt: "Grouping viruses by DNA or RNA is classification by", options: ["host", "capsid shape", "nucleic acid type", "size"], correctIndex: 2, explanation: "This uses the genome type." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State two ways in which viruses are classified.", answerKey: "Any two: by type of nucleic acid (DNA/RNA); by capsid shape/morphology; by presence of an envelope; by host infected. 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which group of viruses has the higher mutation rate?", options: ["DNA viruses", "RNA viruses", "Both are identical", "Neither mutates"], correctIndex: 1, answerKey: "RNA viruses mutate more due to error-prone RNA copying. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Name the four capsid shapes used to classify viruses and give one example of each.", answerKey: "Helical (tobacco mosaic virus); icosahedral (poliovirus/herpes); enveloped (HIV/influenza); head-and-tail (bacteriophage). 1 mark each shape+example, max 4.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why HIV is called a retrovirus.", answerKey: "HIV is an RNA virus that uses the enzyme reverse transcriptase to copy its RNA into DNA (the reverse of the usual DNA→RNA), and this DNA integrates into the host genome. Award for RNA virus + reverse transcriptase + RNA→DNA.", marks: 4 },
        { type: "ESSAY", prompt: "Compare DNA viruses and RNA viruses in terms of genome, replication and mutation, giving examples, and explain why this matters for vaccine development.", answerKey: "DNA viruses: DNA genome, use host replication enzymes, lower mutation, e.g. chickenpox/hepatitis B/herpes (up to 5). RNA viruses: RNA genome, encode own enzymes/reverse transcriptase, higher mutation, e.g. flu/measles/HIV/polio (up to 5). Vaccine relevance: fast-mutating RNA viruses (flu, HIV) change surface proteins, so vaccines must be updated or are hard to make (up to 5).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 21.2 Virus Infections and Hosts (https://openstax.org/books/biology-2e/pages/21-2-virus-infections-and-hosts)
    {
      slug: "common-viral-diseases",
      title: "Common Viral Diseases",
      objective:
        "By the end of the topic, learners should be able to name common viral diseases, the organs or systems they attack, their modes of transmission and methods of prevention.",
      estimatedMinutes: 110,
      notes: `## Viruses as disease agents

- Viruses cause disease by entering host cells, forcing them to make new viruses, and often **destroying the cells** in the process.
- The symptoms of a viral disease come from **cell damage** and the body's **immune response**.

## Common viral diseases

| Disease | Part attacked | Transmission | Prevention |
| --- | --- | --- | --- |
| **Common cold / flu** | respiratory tract | airborne droplets (coughs, sneezes) | cover coughs, hand-washing, flu vaccine |
| **Mumps** | salivary glands | droplets/saliva | MMR vaccine |
| **Measles** | skin and respiratory tract | droplets (very contagious) | MMR vaccine |
| **Chickenpox** | skin and nerves | droplets, contact with blisters | vaccine, avoid contact |
| **Rabies** | nervous system/brain | bite of an infected animal (dog) | vaccinate dogs, post-bite vaccine |
| **Polio** | nerves (can cause paralysis) | faecal–oral (contaminated water) | polio vaccine (oral/injected) |
| **HIV/AIDS** | immune system (white blood cells) | unprotected sex, infected blood, mother-to-child | safe sex, screened blood, ART |
| **Ebola** | blood vessels/organs | body fluids of infected people | isolation, protective equipment |

## Modes of transmission (summary)

- **Airborne / droplets** — cold, flu, mumps, measles, chickenpox.
- **Faecal–oral (dirty water/food)** — polio.
- **Body fluids / sexual contact / blood** — HIV, hepatitis B, Ebola.
- **Animal bite (vector/reservoir)** — rabies.

## Prevention and control

1. **Vaccination** — the most powerful tool (measles, mumps, polio, chickenpox, flu).
2. **Hygiene** — hand-washing, covering coughs and sneezes.
3. **Clean water and sanitation** — prevents polio and other faecal–oral viruses.
4. **Safe sex and screened blood** — prevents HIV and hepatitis B.
5. **Isolation/quarantine** of infected people during outbreaks (e.g. Ebola).
6. **Antiviral drugs** can treat some infections but do **not** work like antibiotics.

## Common errors and misconceptions

- **"Antibiotics cure viral diseases"** — antibiotics kill **bacteria**, not viruses; they do not cure colds, flu or HIV.
- **"Rabies is caught from dirty water"** — rabies comes from the **bite of an infected animal**.
- **"Vaccines cause the disease"** — vaccines train the immune system safely and prevent disease.
- **"HIV is spread by casual contact"** — HIV spreads through blood, unprotected sex and mother-to-child, not by touching or sharing food.`,
      workedExample: `**Task.** For each patient, name a likely viral disease, the part of the body attacked, how it spread, and one prevention measure. (a) A child with fever, a rash and swelling of the glands below the ears. (b) A person bitten by a stray dog who later develops fear of water and nervous signs. (c) A young adult whose immune system is failing after unprotected sex.

**Solution**

(a) Swollen salivary glands (below the ears) + fever → **mumps**.
- Part attacked: **salivary glands**. Spread: **droplets/saliva**. Prevention: the **MMR vaccine**.

(b) Dog bite + nervous signs and fear of water → **rabies**.
- Part attacked: **the nervous system/brain**. Spread: **bite of an infected animal**. Prevention: **vaccinate dogs** and give a **post-bite vaccine** promptly.

(c) Failing immune system after unprotected sex → **HIV/AIDS**.
- Part attacked: the **immune system (white blood cells)**. Spread: **unprotected sex** (also blood, mother-to-child). Prevention: **safe sex/condoms**, screened blood, and treatment with **antiretroviral therapy (ART)**.

**Answer:** (a) mumps — salivary glands, droplets, MMR; (b) rabies — nervous system, animal bite, vaccination; (c) HIV/AIDS — immune system, unprotected sex, safe sex and ART.`,
      quiz: [
        { prompt: "Viruses cause disease by", options: ["making the host stronger", "photosynthesising", "forcing host cells to make new viruses and damaging them", "digesting food outside the body"], correctIndex: 2, explanation: "Symptoms come from cell damage and the immune response." },
        { prompt: "The common cold and flu attack the", options: ["bones", "kidneys", "respiratory tract", "muscles only"], correctIndex: 2, explanation: "They infect the airways." },
        { prompt: "Mumps mainly affects the", options: ["salivary glands", "liver", "lungs", "heart"], correctIndex: 0, explanation: "Mumps swells the salivary glands." },
        { prompt: "Rabies is transmitted by", options: ["sharing food", "dirty water", "mosquito bite", "the bite of an infected animal"], correctIndex: 3, explanation: "Rabies spreads through animal bites." },
        { prompt: "Which disease can cause paralysis and is spread by the faecal–oral route?", options: ["polio", "rabies", "mumps", "chickenpox"], correctIndex: 0, explanation: "Polio spreads via contaminated water/food." },
        { prompt: "HIV attacks the", options: ["immune system (white blood cells)", "salivary glands", "skin only", "bones"], correctIndex: 0, explanation: "HIV destroys certain white blood cells." },
        { prompt: "Antibiotics", options: ["cure the common cold", "cure all viruses", "do not cure viral diseases", "kill HIV easily"], correctIndex: 2, explanation: "Antibiotics work on bacteria, not viruses." },
        { prompt: "The single most powerful tool against many viral diseases is", options: ["sunbathing", "shouting", "vaccination", "starvation"], correctIndex: 2, explanation: "Vaccines prevent measles, polio, mumps, etc." },
        { prompt: "Measles, mumps and rubella are prevented by the", options: ["MMR vaccine", "polio drops only", "rabies vaccine", "flu shot"], correctIndex: 0, explanation: "MMR protects against all three." },
        { prompt: "HIV is spread by all EXCEPT", options: ["infected blood", "unprotected sex", "sharing food or shaking hands", "mother to child"], correctIndex: 2, explanation: "Casual contact does not spread HIV." },
        { prompt: "Chickenpox is spread mainly by", options: ["soil contact", "mosquito bites", "eating meat", "droplets and contact with blisters"], correctIndex: 3, explanation: "It is very contagious via droplets/contact." },
        { prompt: "Ebola spreads through", options: ["clean water", "body fluids of infected people", "sunlight", "healthy air"], correctIndex: 1, explanation: "Ebola passes via body fluids." },
        { prompt: "To prevent polio you should", options: ["vaccinate dogs", "give the polio vaccine and ensure clean water", "use mosquito nets", "avoid the sun"], correctIndex: 1, explanation: "Vaccination plus sanitation stops polio." },
        { prompt: "Covering coughs and washing hands mainly prevents", options: ["HIV", "rabies", "airborne/droplet viruses like flu", "polio"], correctIndex: 2, explanation: "It reduces droplet spread of respiratory viruses." },
        { prompt: "ART (antiretroviral therapy) is used to treat", options: ["measles", "the common cold", "HIV/AIDS", "rabies"], correctIndex: 2, explanation: "ART controls HIV." },
        { prompt: "Which statement is TRUE?", options: ["Antibiotics cure the flu", "Vaccines always give you the disease", "Vaccines train the immune system to prevent disease", "HIV spreads by touching"], correctIndex: 2, explanation: "Vaccines safely build immunity." },
        { prompt: "A very contagious viral disease with a skin rash spread by droplets is", options: ["tetanus", "measles", "malaria", "cholera"], correctIndex: 1, explanation: "Measles is a highly contagious viral rash." },
        { prompt: "Screening donated blood mainly prevents the spread of", options: ["the common cold", "rabies", "HIV and hepatitis B", "mumps"], correctIndex: 2, explanation: "Blood-borne viruses are stopped by screening." },
        { prompt: "Rabies can be prevented by", options: ["using bed nets", "boiling water", "vaccinating dogs and prompt post-bite vaccine", "eating cooked meat"], correctIndex: 2, explanation: "Dog vaccination and rapid treatment prevent rabies." },
        { prompt: "The symptoms of a viral infection are due to", options: ["faster growth", "extra vitamins", "cell damage and the immune response", "photosynthesis"], correctIndex: 2, explanation: "Damaged cells and immune reaction cause symptoms." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name three common viral diseases and, for each, state one way it is transmitted.", answerKey: "Any three e.g. flu/cold – droplets; measles/mumps/chickenpox – droplets/contact; polio – faecal–oral; rabies – animal bite; HIV – unprotected sex/blood; Ebola – body fluids. 1 mark per disease+route.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which statement about treating viral diseases is correct?", options: ["Antibiotics do not cure viral diseases", "Antibiotics cure all viruses", "Vaccines cause the disease", "HIV spreads by shaking hands"], correctIndex: 0, answerKey: "Antibiotics act on bacteria, not viruses. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State three ways viral diseases can be prevented.", answerKey: "Any three: vaccination; hygiene/hand-washing/covering coughs; clean water and sanitation; safe sex/screened blood; isolation during outbreaks; vaccinating animals (rabies). 1 mark each.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why HIV/AIDS makes a person prone to many other infections.", answerKey: "HIV attacks and destroys white blood cells of the immune system, so the body cannot fight off other pathogens, leading to opportunistic infections. Award for immune-system damage and reduced defence.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss how viral diseases spread and the main methods used to prevent and control them, with examples relevant to Liberia.", answerKey: "Spread: droplets/airborne (flu, measles), faecal–oral (polio), body fluids/sex/blood (HIV, Ebola, hepatitis B), animal bite (rabies) (up to 6). Prevention: vaccination, hygiene, clean water/sanitation, safe sex and screened blood, isolation/quarantine, animal vaccination; note antibiotics do not work on viruses (up to 6). Local links e.g. Ebola isolation, polio and measles vaccination, HIV prevention (up to 3).", marks: 15 },
      ],
    },
    // source: LibreTexts — Microbiology (OpenStax), 6.2 The Viral Life Cycle (https://bio.libretexts.org/Bookshelves/Microbiology/Microbiology_(OpenStax)/06:_Acellular_Pathogens/6.02:_The_Viral_Life_Cycle)
    {
      slug: "life-cycle-of-a-virus",
      title: "Life Cycle of a Virus: Lytic and Lysogenic Cycles",
      objective:
        "By the end of the topic, learners should be able to outline the steps of the lytic cycle, describe the lysogenic cycle and explain how a prophage is induced to enter the lytic cycle.",
      estimatedMinutes: 120,
      notes: `## Viruses reproduce only inside host cells

- A virus has no metabolism of its own; it must enter a host cell and use the host's machinery to make new virus particles.
- The best-studied life cycles are those of **bacteriophages** (phages) — viruses that infect bacteria, e.g. the T-even phages of *E. coli*.
- **Virulent phages** reproduce only by the lytic cycle; **temperate phages** (e.g. phage lambda) can follow either the lytic or the lysogenic cycle.

## Two life cycles

A bacteriophage can reproduce by the **lytic cycle** or, for **temperate phages**, by the **lysogenic cycle**.

## The lytic cycle (five steps)

1. **Attachment (adsorption)** — the phage binds to specific receptors on the bacterial surface (e.g. lipopolysaccharides and the OmpC protein of *E. coli*).
2. **Penetration (injection)** — the tail sheath contracts and acts like a **hypodermic needle**, injecting the viral genome through the cell wall and membrane; the empty capsid stays outside.
3. **Biosynthesis (replication)** — viral enzymes (endonucleases) degrade the bacterial chromosome; the virus hijacks the host to copy its genome and make viral proteins (capsomeres, sheath, base plates, tail fibres, enzymes).
4. **Maturation (assembly)** — the new parts are assembled into complete new virions.
5. **Release (lysis)** — phage proteins such as **holin** and **lysozyme** break down the cell wall, the host cell bursts and the mature phages escape to infect other bacteria.

The lytic cycle **kills the host cell** quickly.

## The lysogenic cycle

- The phage genome **integrates into the bacterial chromosome** and becomes part of the host; the integrated genome is called a **prophage**.
- A bacterium carrying a prophage is a **lysogen**; the condition is called **lysogeny**.
- The prophage is **copied every time the bacterium divides**, so it is passed to all daughter cells **without killing them**.
- **Induction** — environmental stress (e.g. starvation, toxic chemicals, UV light) causes the prophage to be **excised** (cut out) from the host chromosome, and the phage then enters the **lytic cycle**.

## Transduction (a consequence of phage life cycles)

- **Transduction** — transfer of bacterial DNA from one bacterium to another by a phage.
- **Generalized transduction** — during the lytic cycle a random piece of host DNA is packaged into a phage head by mistake.
- **Specialized transduction** — when a prophage is excised it sometimes takes a piece of neighbouring bacterial DNA with it.

| Feature | Lytic cycle | Lysogenic cycle |
| --- | --- | --- |
| Host cell | destroyed (lyses) | survives (for now) |
| Viral DNA | copied at once, makes new phages | inserted as a prophage, copied with host |
| Speed | fast | can stay dormant a long time |
| New virions | released immediately | not released until it switches to lytic |

## Common errors and misconceptions

- **"The whole phage enters the cell"** — only the **DNA** is injected; the capsid stays outside.
- **"The lysogenic cycle destroys the cell straight away"** — it stays hidden as a **prophage** and the cell survives until it switches to the lytic cycle.
- **"Lysis means the virus dies"** — lysis is the bursting of the **host cell**, which **releases** new viruses.
- **"A prophage is a separate organism"** — it is viral DNA integrated into the host's chromosome.`,
      workedExample: `**Task.** A bacteriophage infects an *E. coli* cell. In one case the cell bursts within 30 minutes releasing about 100 new phages; in another the phage DNA becomes part of the bacterial chromosome and is passed on for many generations before, after UV exposure, new phages are suddenly produced. Identify each cycle and give the steps involved.

**Solution**

**Case 1 — cell bursts, releases phages quickly → the LYTIC cycle.**
1. **Attachment:** tail fibres bind the bacterial cell wall.
2. **Penetration:** the phage injects its DNA; the capsid stays outside.
3. **Replication:** the host machinery copies viral DNA and makes viral proteins.
4. **Assembly:** new phage particles are built.
5. **Release (lysis):** the cell bursts, releasing ~100 new phages.

**Case 2 — DNA joins the chromosome, passed on, then triggered by UV → the LYSOGENIC cycle (temperate phage).**
- The phage DNA **integrates** into the host chromosome as a **prophage**.
- It is **copied with the host** each time the bacterium divides (passed to daughter cells) without killing them.
- **UV light acts as a stress trigger**: the prophage **excises** and enters the **lytic cycle**, so new phages are made and the cell lyses.

**Answer:** Case 1 is the lytic cycle (attachment → penetration → replication → assembly → lysis); Case 2 is the lysogenic cycle, where the prophage stays dormant until a trigger switches it to the lytic cycle.`,
      quiz: [
        { prompt: "A bacterium that carries a prophage is called a", options: ["virion", "lysogen", "capsomere", "phagocyte"], correctIndex: 1, explanation: "A bacterium with an integrated prophage is a lysogen." },
        { prompt: "Phages that reproduce ONLY by the lytic cycle are called", options: ["temperate phages", "virulent phages", "prophages", "lysogens"], correctIndex: 1, explanation: "Virulent phages always lyse their hosts; temperate phages can also become lysogenic." },
        { prompt: "Which phage proteins break down the bacterial wall at release?", options: ["keratin and collagen", "amylase and lipase", "insulin and glucagon", "holin and lysozyme"], correctIndex: 3, explanation: "Holin and lysozyme disrupt the cell wall so the cell lyses." },
        { prompt: "During penetration, a bacteriophage injects its", options: ["envelope", "whole capsid", "DNA only", "ribosomes"], correctIndex: 2, explanation: "Only the DNA enters; the capsid stays outside." },
        { prompt: "The first step of the lytic cycle is", options: ["release", "lysis", "assembly", "attachment"], correctIndex: 3, explanation: "Attachment (adsorption) comes first." },
        { prompt: "The lytic cycle ends with", options: ["the cell surviving forever", "lysis of the host cell", "photosynthesis", "budding"], correctIndex: 1, explanation: "The cell bursts, releasing new phages." },
        { prompt: "In the lysogenic cycle the viral DNA becomes a", options: ["capsid", "prophage in the host chromosome", "spore", "gamete"], correctIndex: 1, explanation: "Integrated viral DNA is the prophage." },
        { prompt: "A prophage is copied", options: ["every time the bacterium divides", "only once", "never", "outside the cell"], correctIndex: 0, explanation: "It replicates with the host chromosome." },
        { prompt: "What can trigger a prophage to switch to the lytic cycle?", options: ["extra food", "stress such as UV light or chemicals", "warmth alone", "nothing ever"], correctIndex: 1, explanation: "Stressors cause the prophage to excise." },
        { prompt: "Which cycle destroys the host cell immediately?", options: ["the lysogenic cycle", "the lytic cycle", "both never destroy it", "neither"], correctIndex: 1, explanation: "Lysis bursts the cell at once." },
        { prompt: "During replication (biosynthesis) the phage", options: ["makes its own food", "uses host machinery to copy viral DNA and proteins", "divides like a cell", "photosynthesises"], correctIndex: 1, explanation: "It hijacks the host's machinery." },
        { prompt: "The step where new phage particles are built is", options: ["release", "attachment", "penetration", "assembly"], correctIndex: 3, explanation: "Assembly (maturation) constructs new virions." },
        { prompt: "A temperate phage is one that can", options: ["live outside a host permanently", "only kill cells instantly", "photosynthesise", "enter the lysogenic cycle"], correctIndex: 3, explanation: "Temperate phages can lie dormant as prophages." },
        { prompt: "In the lysogenic cycle the host cell", options: ["becomes a virus", "bursts immediately", "stops dividing", "survives and passes on the prophage"], correctIndex: 3, explanation: "The cell survives and its daughters carry the prophage." },
        { prompt: "'Lysis' means", options: ["growth of the cell", "bursting of the host cell", "budding of a virus", "attachment"], correctIndex: 1, explanation: "Lysis is the rupture that releases phages." },
        { prompt: "Transfer of bacterial DNA from one bacterium to another by a phage is called", options: ["transcription", "transduction", "translation", "transpiration"], correctIndex: 1, explanation: "Phage-mediated DNA transfer is transduction." },
        { prompt: "The correct order of the lytic cycle is", options: ["release, assembly, replication, penetration, attachment", "attachment, penetration, replication, assembly, release", "penetration, attachment, release, assembly, replication", "assembly, release, attachment, penetration, replication"], correctIndex: 1, explanation: "This is the standard five-step sequence." },
        { prompt: "After the prophage excises from the chromosome, it enters the", options: ["lytic cycle", "lysogenic cycle again", "resting state", "photosynthetic stage"], correctIndex: 0, explanation: "Excision leads to lytic replication." },
        { prompt: "New phages produced in the lytic cycle go on to", options: ["die instantly", "become bacteria", "infect other bacteria", "make food"], correctIndex: 2, explanation: "Released phages infect neighbouring cells." },
        { prompt: "Which is TRUE of the lysogenic cycle?", options: ["No viral DNA is present", "The cell always bursts within minutes", "The virus can stay dormant a long time", "The virus makes its own ribosomes"], correctIndex: 2, explanation: "The prophage can remain hidden for many generations." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain what is meant by induction of a prophage.", answerKey: "Induction is the excision (cutting out) of the prophage from the host chromosome, triggered by environmental stress such as UV light, chemicals or starvation, after which the phage enters the lytic cycle. 1 mark excision, 1 mark trigger, 1 mark switch to lytic.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "List the five steps of the lytic cycle in order.", answerKey: "Attachment (adsorption); penetration (injection of DNA); replication (biosynthesis); assembly (maturation); release (lysis). Full marks require all five in order.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "In the lysogenic cycle, the integrated viral DNA is called a", options: ["capsid", "prophage", "virion", "plasmid"], correctIndex: 1, answerKey: "Integrated phage DNA is a prophage. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Give two differences between the lytic and lysogenic cycles.", answerKey: "Any two: lytic kills/lyses host, lysogenic host survives; lytic makes new phages at once, lysogenic inserts prophage copied with host; lytic is fast, lysogenic can stay dormant. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Explain the lytic and lysogenic cycles of a bacteriophage and describe how a phage switches from one to the other.", answerKey: "Lytic: attachment, penetration, replication, assembly, lysis — host destroyed, phages released (up to 6). Lysogenic: DNA integrates as a prophage, copied with the host each division, cell survives (up to 5). Switch: a stress trigger (UV, chemicals, starvation) makes the prophage excise and enter the lytic cycle (up to 4).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal), 21.4 Sexually Transmitted Infections (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/21:_Disease/21.4:_Sexually_Transmitted_Infections); 21.5 HIV and AIDS (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/21:_Disease/21.5:_HIV_and_AIDS)
    {
      slug: "sexually-transmitted-infections",
      title: "Sexually Transmitted Infections (STIs) Caused by Viruses",
      objective:
        "By the end of the topic, learners should be able to name STIs caused by viruses, describe their modes of transmission and outline methods of prevention.",
      estimatedMinutes: 110,
      notes: `## What are STIs?

- **Sexually transmitted infections (STIs)** — infections spread mainly through **sexual contact**, generally by direct contact between mucous membranes or their secretions.
- Some STI pathogens are also carried in **blood** and **breast milk**, so they can spread in other ways.
- STIs are caused by **bacteria**, **viruses** and **parasites**. This topic covers the **viral** STIs; bacterial STIs follow later in the period.

## Common viral STIs

| STI | Virus | Main effects |
| --- | --- | --- |
| **HIV infection / AIDS** | human immunodeficiency virus (HIV) | destroys helper T cells of the immune system; leads to AIDS and opportunistic infections |
| **Genital herpes** | herpes simplex virus (HSV) | painful blisters/sores on the genitals that come back in outbreaks |
| **Genital warts / HPV infection** | human papillomavirus (HPV) | genital warts; some types cause cervical cancer and cancers of the vulva, vagina, penis, anus or throat |
| **Hepatitis B** | hepatitis B virus | infection of the liver; spread by sex and blood |

## Signs and symptoms

- Common symptoms of STIs: **sores or rashes** on the genitals, **discharge** from the vagina or penis, and **painful urination**.
- Many STIs are **asymptomatic** (no symptoms) or so mild they go unnoticed — infected people can pass them on without knowing.
- Herpes can be passed on **even when no sores are visible**.

## Modes of transmission of viral STIs

1. **Sexual contact** — vaginal, anal or oral sex; the main route worldwide (most HIV transmissions are sexual).
2. **Blood** — sharing needles during drug use, needle-stick injuries, transfusion of contaminated blood, injections with unsterilized equipment (HIV, hepatitis B).
3. **Mother to child** — an untreated mother can pass HIV to her baby during pregnancy, childbirth or breastfeeding.

**HIV is NOT spread by:** kissing, sharing glasses, toilet seats, coughing or sneezing, or by mosquitoes and other blood-sucking insects.

## Treatment

- **Viral STIs cannot be cured with antibiotics.**
- Herpes has **no cure**; antiviral medicines can prevent or shorten outbreaks.
- HIV is treated with a "cocktail" of at least **three antiretroviral drugs**, which keeps the viral load low, slows the disease and reduces the risk of passing the virus on.

## Prevention

1. **Abstinence** — avoiding all sexual contact is the only completely effective way to prevent sexually transmitted infections.
2. **Safe sex** — consistent **condom** use, having **few sexual partners**, and a **mutually monogamous** relationship reduce the risk.
3. **Vaccination** — the **HPV vaccine** prevents infection with the most common and dangerous HPV types (recommended for girls and boys at ages 11–12); a vaccine also exists for hepatitis B.
4. **Do not share needles**; use sterile equipment and screened blood.
5. **Preventing mother-to-child spread** — antiretroviral drugs for the mother in pregnancy and for the baby after birth cut transmission to about 1 percent.

## Common errors and misconceptions

- **"Antibiotics cure HIV and herpes"** — antibiotics have no effect on viruses.
- **"A person with no sores cannot pass herpes on"** — herpes can spread without visible sores.
- **"Mosquitoes spread HIV"** — insects cannot transmit HIV.
- **"You can tell who has an STI by looking"** — many STIs show no symptoms at all.`,
      workedExample: `**Task.** A health club is preparing a poster on viral STIs. (a) Name three viral STIs and the virus that causes each. (b) Give the three main routes by which HIV spreads. (c) Explain why antibiotics are not used to cure these infections, and name one treatment that is used for HIV.

**Solution**

(a) Three viral STIs:
1. **HIV infection/AIDS** — human immunodeficiency virus (HIV).
2. **Genital herpes** — herpes simplex virus (HSV).
3. **Genital warts** — human papillomavirus (HPV).

(b) Routes of HIV transmission:
1. **Sexual contact** (the most common route worldwide).
2. **Blood** — shared needles, contaminated transfusions, unsterilized equipment.
3. **Mother to child** — during pregnancy, childbirth or breastfeeding.

(c) Antibiotics act on **bacteria**, so they have **no effect on viruses**. HIV is treated with a combination ("cocktail") of **at least three antiretroviral drugs**, which keeps the viral load low and slows progress to AIDS.

**Answer:** HIV (HIV), herpes (HSV), genital warts (HPV); sex, blood and mother-to-child; antibiotics do not kill viruses — antiretroviral drug combinations are used for HIV.`,
      quiz: [
        { prompt: "STIs are spread mainly through", options: ["sexual contact", "shaking hands", "sharing pens", "drinking clean water"], correctIndex: 0, explanation: "Direct contact between mucous membranes during sex is the main route." },
        { prompt: "HIV infection is caused by a", options: ["virus", "bacterium", "protozoan", "fungus"], correctIndex: 0, explanation: "HIV is the human immunodeficiency virus." },
        { prompt: "Genital herpes is caused by", options: ["Neisseria gonorrhoeae", "Treponema pallidum", "herpes simplex virus", "Trichomonas vaginalis"], correctIndex: 2, explanation: "HSV causes genital herpes." },
        { prompt: "Genital warts are caused by", options: ["human papillomavirus (HPV)", "a bacterium", "a fungus", "a protozoan"], correctIndex: 0, explanation: "HPV causes genital warts." },
        { prompt: "Some types of HPV can cause", options: ["cervical cancer", "tetanus", "cholera", "rickets"], correctIndex: 0, explanation: "Dangerous HPV types cause cervical and other cancers." },
        { prompt: "HIV destroys the body's", options: ["helper T cells", "red blood cells", "bone cells", "skin cells"], correctIndex: 0, explanation: "HIV infects and destroys helper T cells of the immune system." },
        { prompt: "Which is NOT a way HIV is transmitted?", options: ["mosquito bites", "sexual contact", "shared needles", "mother to child"], correctIndex: 0, explanation: "Insects cannot transmit HIV." },
        { prompt: "Viral STIs can be cured with antibiotics.", options: ["True — any antibiotic works", "False — antibiotics do not act on viruses", "True — only penicillin works", "False — they cure themselves"], correctIndex: 1, explanation: "Antibiotics only work against bacteria." },
        { prompt: "HIV is treated with", options: ["antifungal cream", "one dose of penicillin", "vitamin C", "a combination of at least three antiretroviral drugs"], correctIndex: 3, explanation: "Antiretroviral 'cocktails' keep viral load low." },
        { prompt: "The only completely effective way to prevent sexually transmitted infections is", options: ["exercise", "taking vitamins", "washing after sex", "avoiding all sexual contact"], correctIndex: 3, explanation: "Abstinence removes the sexual route entirely." },
        { prompt: "Herpes can be passed on", options: ["even when no sores are visible", "only when sores are visible", "only by blood", "only by mosquitoes"], correctIndex: 0, explanation: "Transmission can occur without visible sores." },
        { prompt: "The HPV vaccine is recommended for", options: ["only boys", "only adults over 60", "only pregnant women", "girls and boys aged 11–12"], correctIndex: 3, explanation: "Vaccination before sexual activity gives best protection." },
        { prompt: "An infected mother can pass HIV to her baby during", options: ["pregnancy, childbirth or breastfeeding", "only after the child is ten", "only by kissing", "never"], correctIndex: 0, explanation: "These are the three mother-to-child routes." },
        { prompt: "Giving antiretroviral drugs to mother and baby can reduce mother-to-child HIV transmission to about", options: ["90 percent", "50 percent", "1 percent", "100 percent"], correctIndex: 2, explanation: "Treatment cuts transmission to about 1%." },
        { prompt: "Many STIs are dangerous because they are often", options: ["very painful at once", "asymptomatic", "visible on the face", "cured without treatment"], correctIndex: 1, explanation: "People can spread infections they do not know they have." },
        { prompt: "Which is a common symptom of an STI?", options: ["hair loss", "sneezing", "sores on the genitals", "toothache"], correctIndex: 2, explanation: "Sores, rashes, discharge and painful urination are common." },
        { prompt: "Hepatitis B is a viral infection of the", options: ["brain", "lungs", "liver", "bones"], correctIndex: 2, explanation: "Hepatitis means inflammation of the liver." },
        { prompt: "Sharing needles can spread", options: ["tetanus only", "only the common cold", "HIV and hepatitis B", "no infections"], correctIndex: 2, explanation: "Both viruses travel in blood." },
        { prompt: "Antiviral medicines for herpes", options: ["prevent or shorten outbreaks", "cure herpes completely", "kill bacteria", "are vaccines"], correctIndex: 0, explanation: "There is no cure, but antivirals control outbreaks." },
        { prompt: "Which practice reduces the risk of viral STIs?", options: ["skipping tests", "sharing razors", "having many partners", "consistent condom use"], correctIndex: 3, explanation: "Condoms greatly reduce sexual transmission." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name three STIs caused by viruses and the virus responsible for each.", answerKey: "HIV infection/AIDS — HIV; genital herpes — herpes simplex virus; genital warts — HPV; (also hepatitis B — hepatitis B virus). 2 marks per correct STI + virus, max 6.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which of the following does NOT transmit HIV?", options: ["Unprotected sex", "Sharing a drinking glass", "Transfusion of contaminated blood", "Breastfeeding by an untreated mother"], correctIndex: 1, answerKey: "HIV is not spread by casual contact such as sharing glasses. Option B.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State three ways of preventing viral STIs.", answerKey: "Any three: abstinence; consistent condom use; few partners/mutual monogamy; HPV (and hepatitis B) vaccination; not sharing needles/screened blood; antiretroviral drugs to prevent mother-to-child spread. 1 mark each.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why a person who feels healthy may still spread a viral STI.", answerKey: "Many STIs are asymptomatic or very mild, and herpes can spread without visible sores, so the person does not know they are infected and can pass it on. 2 marks for asymptomatic idea, 2 for consequence.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss viral sexually transmitted infections under: examples and causative viruses, modes of transmission, treatment, and prevention.", answerKey: "Examples: HIV, herpes (HSV), HPV/genital warts, hepatitis B (up to 4). Transmission: sex, blood/needles/transfusion, mother to child; not casual contact or insects (up to 4). Treatment: not curable with antibiotics; antivirals for herpes; ≥3 antiretroviral drugs for HIV (up to 3). Prevention: abstinence, condoms, few partners, vaccines (HPV, hep B), sterile needles, ARVs in pregnancy (up to 4).", marks: 15 },
      ],
    },
    // source: LibreTexts — Microbiology (Boundless), 9.2C Complex and Asymmetrical Virus Particles (https://bio.libretexts.org/Bookshelves/Microbiology/Microbiology_(Boundless)/09:_Viruses/9.02:_Structure_of_Viruses/9.2C:_Complex_and_Asymmetrical_Virus_Particles); LibreTexts — Microbiology (Kaiser), 10.3 Viral Structure (https://bio.libretexts.org/Bookshelves/Microbiology/Microbiology_(Kaiser)/Unit_4:_Eukaryotic_Microorganisms_and_Viruses/10:_Viruses/10.03:_Viral_Structure)
    {
      slug: "structure-of-bacteriophage",
      title: "Structure of Bacteriophage",
      objective:
        "By the end of the topic, learners should be able to describe and label the structure of a bacteriophage such as T4 and state the function of each part.",
      estimatedMinutes: 80,
      notes: `## What is a bacteriophage?

- **Bacteriophage (phage)** — a virus that infects **bacteria**. Example: **phage T4**, which infects *Escherichia coli*.
- Like all virions, a phage has a **genome** inside a **capsid** (protein shell made of subunits called **capsomeres**).
- Some phages are simple icosahedral or helical particles; others, such as T4, have a **tail** and are much more complex.

## T4 is a complex virus

- **Complex virus** — a virus whose capsid is neither purely helical nor purely icosahedral and which may carry extra structures such as a protein tail.
- T4 has an **icosahedral (polyhedral) head** joined to a **helical tail**; the tail makes the particle asymmetrical.

## Parts of a T4 bacteriophage

| Part | Description | Function |
| --- | --- | --- |
| **Head (capsid)** | icosahedral/polyhedral protein shell of capsomeres | holds and protects the genome (DNA) |
| **Nucleic acid** | the phage genome, inside the head | carries the instructions for making new phages |
| **Contractile sheath** | helical protein tube forming the tail | contracts during infection, driving the tail core into the cell |
| **Base plate** | hexagonal plate at the end of the tail | attaches to the bacterial surface |
| **Tail fibres** | long protein fibres projecting from the base plate | recognise and bind receptors on the host cell |
| **Tail pins** | short projections on the base plate | help anchor the phage to the host surface |

\`\`\`svg Labelled structure of a T4 bacteriophage
<svg viewBox="0 0 240 210" role="img" aria-label="T4 bacteriophage with head, sheath, base plate and tail fibres">
  <polygon points="100,10 132,28 132,66 100,84 68,66 68,28" fill="#bfdbfe" fill-opacity="0.5" stroke="currentColor"/>
  <path d="M90,40 q10,-8 20,0 q-6,10 -10,16 q-6,-6 -10,-16 Z" fill="#3b82f6" fill-opacity="0.5" stroke="currentColor"/>
  <rect x="93" y="84" width="14" height="56" fill="#93c5fd" fill-opacity="0.6" stroke="currentColor"/>
  <g stroke="currentColor"><line x1="93" y1="94" x2="107" y2="94"/><line x1="93" y1="104" x2="107" y2="104"/><line x1="93" y1="114" x2="107" y2="114"/><line x1="93" y1="124" x2="107" y2="124"/></g>
  <polygon points="80,140 120,140 126,148 74,148" fill="none" stroke="currentColor"/>
  <g stroke="currentColor" fill="none"><polyline points="78,148 58,170 70,196"/><polyline points="92,148 82,176 92,200"/><polyline points="108,148 118,176 108,200"/><polyline points="122,148 142,170 130,196"/></g>
  <text x="140" y="30" font-size="9" fill="currentColor">head (capsid)</text>
  <text x="140" y="52" font-size="9" fill="currentColor">DNA inside</text>
  <text x="140" y="112" font-size="9" fill="currentColor">contractile sheath</text>
  <text x="140" y="146" font-size="9" fill="currentColor">base plate</text>
  <text x="150" y="186" font-size="9" fill="currentColor">tail fibres</text>
</svg>
\`\`\`

## How the structure works in infection

1. The **tail fibres** and **tail pins** attach the phage to specific receptors on the bacterial surface.
2. The **sheath contracts**; the tail acts like a **molecular syringe (hypodermic needle)**.
3. The viral genome is **injected** through the cell wall and membrane; the empty head stays outside.

## Size

- Virions range from about **20 nm** for small viruses to about **900 nm** for large ones; phages can be seen only with the **electron microscope**.
- Electron micrographs show the sheath before and after contraction.

## Common errors and misconceptions

- **"All phages have tails"** — some phages are simple icosahedral or helical particles.
- **"The whole phage enters the bacterium"** — only the genome is injected; the head and tail stay outside.
- **"The tail fibres inject the DNA"** — the fibres attach; it is the **contracting sheath** that drives injection.
- **"A phage has an envelope like HIV"** — T4 is a non-enveloped complex virus.`,
      workedExample: `**Task.** A student draws a T4 phage and labels five parts: A (polyhedral top part), B (material inside A), C (tube below A), D (flat hexagonal plate), E (long thin legs). (a) Name A–E. (b) State the role of C and E during infection. (c) Explain why T4 is described as a complex virus.

**Solution**

(a) Naming the parts:
1. A → **head (capsid)**, icosahedral, made of capsomeres.
2. B → **nucleic acid (DNA genome)**.
3. C → **contractile sheath** (the tail).
4. D → **base plate**.
5. E → **tail fibres**.

(b) Roles:
- **E (tail fibres)** recognise and bind to receptors on the surface of *E. coli*, attaching the phage.
- **C (sheath)** contracts so that the tail acts like a syringe, injecting the genome through the cell wall and membrane.

(c) T4 has an **icosahedral head** but a **helical tail**, so its capsid is neither purely icosahedral nor purely helical — it is asymmetrical, i.e. **complex**.

**Answer:** A head, B DNA, C sheath, D base plate, E tail fibres; fibres attach, sheath contracts to inject DNA; complex because head and tail have different symmetry.`,
      quiz: [
        { prompt: "A bacteriophage is a virus that infects", options: ["humans only", "bacteria", "plants only", "fungi only"], correctIndex: 1, explanation: "Phages are viruses of bacteria." },
        { prompt: "Phage T4 infects", options: ["Escherichia coli", "Plasmodium", "yeast", "tobacco plants"], correctIndex: 0, explanation: "T4 is an E. coli phage." },
        { prompt: "The head of T4 has which shape?", options: ["icosahedral (polyhedral)", "helical rod", "spherical membrane", "spiral"], correctIndex: 0, explanation: "The head is an icosahedral capsid." },
        { prompt: "The genome of a phage is found in the", options: ["head", "tail fibres", "base plate", "sheath only"], correctIndex: 0, explanation: "The genome lies within the polyhedral head." },
        { prompt: "The protein subunits that build the capsid are", options: ["pili", "ribosomes", "capsomeres", "plasmids"], correctIndex: 2, explanation: "Capsomeres assemble into the capsid." },
        { prompt: "Which part contracts during infection?", options: ["the head", "the sheath", "the tail fibres", "the genome"], correctIndex: 1, explanation: "The contractile sheath shortens to drive injection." },
        { prompt: "The tail of T4 acts like a", options: ["molecular syringe", "sail", "solar panel", "storage sac"], correctIndex: 0, explanation: "It injects the genome like a hypodermic needle." },
        { prompt: "The structures that recognise host receptors are the", options: ["nucleic acid", "capsomeres in the head", "tail fibres", "envelope"], correctIndex: 2, explanation: "Tail fibres bind specific receptors." },
        { prompt: "The hexagonal structure at the end of the tail is the", options: ["base plate", "collar of DNA", "capsid", "flagellum"], correctIndex: 0, explanation: "Fibres and pins project from the hexagonal base plate." },
        { prompt: "T4 is called a complex virus because", options: ["its icosahedral head is joined to a helical tail", "it has a lipid envelope", "it has no nucleic acid", "it is a bacterium"], correctIndex: 0, explanation: "The mixed symmetry makes it asymmetrical (complex)." },
        { prompt: "During infection, which part stays outside the bacterium?", options: ["nothing", "the genome", "the head and tail (empty capsid)", "only the DNA"], correctIndex: 2, explanation: "Only the genome is injected." },
        { prompt: "Tail pins help the phage to", options: ["make proteins", "anchor to the host surface", "store DNA", "photosynthesise"], correctIndex: 1, explanation: "Pins and fibres help attachment." },
        { prompt: "Are all bacteriophages tailed?", options: ["Only those with envelopes", "Yes — every phage has a tail", "No — none have tails", "No — some are simple icosahedral or helical"], correctIndex: 3, explanation: "Phage structure is diverse." },
        { prompt: "Bacteriophages can be seen with", options: ["an electron microscope", "the naked eye", "a hand lens", "a school light microscope"], correctIndex: 0, explanation: "Virions are nanometres in size." },
        { prompt: "The sheath of T4 connects the head to the", options: ["tail fibres and pins", "host nucleus", "cell wall of the phage", "envelope"], correctIndex: 0, explanation: "The sheath runs from head to base plate with fibres and pins." },
        { prompt: "An intact infectious virus particle is called a", options: ["prophage", "virion", "spore", "lysogen"], correctIndex: 1, explanation: "A complete particle is a virion." },
        { prompt: "The genome is injected into the bacterium through the", options: ["cell wall and membrane", "nucleus", "mitochondria", "chloroplast"], correctIndex: 0, explanation: "The tail penetrates wall and membrane." },
        { prompt: "Which part of T4 is helical?", options: ["the head", "the tail", "the base plate", "the DNA only"], correctIndex: 1, explanation: "T4 has an icosahedral head and a helical tail." },
        { prompt: "A T4 phage is", options: ["enveloped like HIV", "non-enveloped", "a cell", "a fungus"], correctIndex: 1, explanation: "T4 has no lipid envelope." },
        { prompt: "Virions range in size from about", options: ["1 mm to 1 cm", "20 nm to 900 nm", "1 m to 10 m", "10 cm to 1 m"], correctIndex: 1, explanation: "Viruses are measured in nanometres." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Draw and label a T4 bacteriophage, showing at least five parts.", answerKey: "Labelled diagram showing: icosahedral head (capsid), DNA inside head, contractile sheath/tail, base plate, tail fibres (tail pins optional). 1 mark per correct label (max 5), 1 mark for a clear drawing.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which part of a bacteriophage binds to receptors on the bacterium?", options: ["Nucleic acid", "Head", "Tail fibres", "Capsomeres"], correctIndex: 2, answerKey: "Tail fibres recognise and bind host receptors. Option C.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the function of (a) the head and (b) the contractile sheath of a bacteriophage.", answerKey: "(a) Head/capsid holds and protects the genome. (b) Sheath contracts so the tail injects the genome through the cell wall and membrane. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why T4 is described as a complex virus.", answerKey: "Its capsid is neither purely helical nor purely icosahedral: an icosahedral head is joined to a helical tail with base plate and fibres, making it asymmetrical. 3 marks.", marks: 3 },
        { type: "ESSAY", prompt: "Describe the structure of a bacteriophage and explain how each structure contributes to the infection of a bacterial cell.", answerKey: "Head/capsid of capsomeres containing DNA; contractile helical sheath; hexagonal base plate; tail fibres and pins (up to 7). Infection: fibres/pins attach to receptors; sheath contracts, tail acts like a syringe; genome injected through wall and membrane; empty capsid remains outside (up to 6). Clear labelled diagram (up to 2).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 22.2 Structure of Prokaryotes: Bacteria and Archaea; 22.5 Beneficial Prokaryotes (https://openstax.org/books/biology-2e/pages/22-2-structure-of-prokaryotes-bacteria-and-archaea)
    {
      slug: "bacteria-structure-and-classification",
      title: "Bacteria: Characteristics, Classification and Structure",
      objective:
        "By the end of the topic, learners should be able to describe the structure and shapes of bacteria, classify them, and explain their economic importance to humans.",
      estimatedMinutes: 130,
      notes: `## What are bacteria?

- **Bacteria** — microscopic, single-celled **prokaryotes** (no true nucleus) belonging to kingdom **Monera**.
- They are among the most numerous organisms on Earth and live almost everywhere.

## General characteristics

- **Prokaryotic** — no membrane-bound nucleus or organelles.
- Genetic material is a **single circular chromosome** in the **nucleoid** region.
- **Unicellular**; reproduce mainly by **binary fission**.
- Many have extra small DNA rings called **plasmids**.

## Structure of a bacterial cell

| Structure | Function |
| --- | --- |
| **Cell wall** (peptidoglycan) | gives shape and protection; prevents bursting |
| **Plasma (cell) membrane** | controls what enters and leaves |
| **Cytoplasm** | jelly where reactions occur |
| **Nucleoid** | region holding the circular DNA |
| **Ribosomes** | make proteins |
| **Capsule** (some) | sticky outer layer; helps attach and resist the host's defences |
| **Flagellum** (some) | whip-like tail for movement |
| **Pili** (some) | hair-like; attachment and transfer of DNA |
| **Plasmid** (some) | small extra DNA ring |

\`\`\`svg Structure of a bacterial cell
<svg viewBox="0 0 280 160" role="img" aria-label="Bacterial cell with wall, membrane, nucleoid, ribosomes and flagellum">
  <ellipse cx="140" cy="80" rx="95" ry="45" fill="#dcfce7" fill-opacity="0.5" stroke="currentColor" stroke-width="2"/>
  <ellipse cx="140" cy="80" rx="88" ry="38" fill="none" stroke="currentColor"/>
  <path d="M120,70 q20,-8 40,4 q-8,10 -25,6 q-12,-2 -15,-10 Z" fill="#86efac" fill-opacity="0.7" stroke="currentColor"/>
  <text x="140" y="76" font-size="8" text-anchor="middle" fill="currentColor">nucleoid</text>
  <circle cx="95" cy="95" r="3" fill="currentColor"/><circle cx="180" cy="60" r="3" fill="currentColor"/><circle cx="160" cy="100" r="3" fill="currentColor"/>
  <text x="120" y="120" font-size="8" fill="currentColor">ribosomes</text>
  <path d="M235,80 q12,-10 22,0 q-12,10 -22,0" fill="none" stroke="currentColor"/>
  <text x="243" y="60" font-size="8" fill="currentColor">flagellum</text>
  <text x="60" y="35" font-size="8" fill="currentColor">cell wall</text>
</svg>
\`\`\`

## Classification by shape

| Shape | Name | Example arrangement |
| --- | --- | --- |
| **Spherical** | **cocci** (singular coccus) | in chains (strepto-) or clusters (staphylo-) |
| **Rod-shaped** | **bacilli** (singular bacillus) | single rods |
| **Spiral** | **spirilla / spirochaetes** | corkscrew shapes |

## Gram staining

- **Gram-positive** bacteria have a **thick peptidoglycan** wall and stain purple.
- **Gram-negative** bacteria have a **thin peptidoglycan** wall plus an outer membrane and stain pink.

## Nutrition and respiration (brief)

- **Autotrophic** bacteria make their own food (e.g. some use light or chemicals); **heterotrophic** bacteria feed on other organic matter.
- Respiration may be **aerobic** (needs oxygen), **anaerobic** (no oxygen) or **facultative** (either).

## Economic importance of bacteria

**Useful bacteria:**
- **Nitrogen fixation** — *Rhizobium* in root nodules turns nitrogen gas into compounds plants can use (after photosynthesis, the most important biological process).
- **Decomposition** — break down dead matter and recycle nutrients.
- **Food production** — make yoghurt and cheese (lactic acid bacteria).
- **Sewage treatment and bioremediation** — clean waste water and break down oil spills and pollutants.
- **Medicine and industry** — produce antibiotics, vitamins and other products; gut bacteria aid digestion and make vitamins.

**Harmful bacteria:**
- cause diseases (tuberculosis, tetanus, cholera, gonorrhoea) and **spoil food**.

## Common errors and misconceptions

- **"Bacteria have a nucleus"** — they are prokaryotes; the DNA lies free in the **nucleoid**.
- **"All bacteria are harmful"** — most are harmless or useful (nitrogen fixation, decomposition, food, medicine).
- **"Bacteria and viruses are the same"** — bacteria are living cells; viruses are non-cellular particles.
- **"Cocci are rod-shaped"** — cocci are spherical; **bacilli** are the rods.`,
      workedExample: `**Task.** A microbiologist stains three bacteria and records: (i) purple spheres in a chain; (ii) pink rods; (iii) corkscrew-shaped cells. (a) Name the shape group of each. (b) Which are Gram-positive and which Gram-negative? (c) Give two ways bacteria are economically useful to farmers.

**Solution**

(a) Shapes:
- (i) spheres in a chain → **cocci** (arranged in a chain, so 'strepto-' type).
- (ii) rods → **bacilli**.
- (iii) corkscrew cells → **spirilla / spirochaetes**.

(b) Gram reaction (by colour):
- (i) stained **purple** → **Gram-positive** (thick peptidoglycan wall).
- (ii) and (iii) stained **pink** → **Gram-negative** (thin peptidoglycan + outer membrane).

(c) Two ways bacteria help farmers:
- **Nitrogen fixation** — *Rhizobium* in legume root nodules converts nitrogen gas into compounds that fertilise the soil.
- **Decomposition** — soil bacteria break down dead plants and animals, recycling nutrients back into the soil (also compost).

**Answer:** (i) Gram-positive cocci in a chain; (ii) Gram-negative bacilli; (iii) Gram-negative spirilla; bacteria help farmers through nitrogen fixation and decomposition (recycling nutrients).`,
      quiz: [
        { prompt: "Bacteria are classified as", options: ["eukaryotes", "prokaryotes", "viruses", "fungi"], correctIndex: 1, explanation: "Bacteria are prokaryotic cells (Monera)." },
        { prompt: "The genetic material of a bacterium is found in the", options: ["mitochondrion", "true nucleus", "nucleoid", "chloroplast"], correctIndex: 2, explanation: "Prokaryotes have no true nucleus; DNA is in the nucleoid." },
        { prompt: "Spherical bacteria are called", options: ["cocci", "bacilli", "spirilla", "hyphae"], correctIndex: 0, explanation: "Cocci are spherical." },
        { prompt: "Rod-shaped bacteria are called", options: ["spirilla", "cocci", "bacilli", "algae"], correctIndex: 2, explanation: "Bacilli are rods." },
        { prompt: "Corkscrew-shaped bacteria are", options: ["cocci", "spirilla/spirochaetes", "bacilli", "viruses"], correctIndex: 1, explanation: "Spiral bacteria are spirilla." },
        { prompt: "The bacterial cell wall is made mainly of", options: ["starch", "cellulose", "chitin", "peptidoglycan"], correctIndex: 3, explanation: "Peptidoglycan forms the bacterial wall." },
        { prompt: "The whip-like structure some bacteria use to move is the", options: ["pilus", "capsule", "flagellum", "ribosome"], correctIndex: 2, explanation: "The flagellum provides movement." },
        { prompt: "A small extra ring of DNA in bacteria is a", options: ["capsid", "nucleus", "plasmid", "chloroplast"], correctIndex: 2, explanation: "Plasmids carry extra genes." },
        { prompt: "Bacteria reproduce mainly by", options: ["binary fission", "seeds", "meiosis", "budding of a virus"], correctIndex: 0, explanation: "The cell splits in two by binary fission." },
        { prompt: "Gram-positive bacteria have a", options: ["thick peptidoglycan wall", "no cell wall", "thin wall with outer membrane", "cellulose wall"], correctIndex: 0, explanation: "They stain purple due to thick peptidoglycan." },
        { prompt: "Rhizobium bacteria help plants by", options: ["blocking water", "eating the roots", "causing disease", "fixing nitrogen in root nodules"], correctIndex: 3, explanation: "They convert nitrogen gas into usable compounds." },
        { prompt: "Which bacteria make yoghurt and cheese?", options: ["lactic acid bacteria", "Mycobacterium", "Rhizobium", "cyanobacteria only"], correctIndex: 0, explanation: "Lactic acid bacteria ferment milk." },
        { prompt: "The capsule of a bacterium helps it to", options: ["divide", "photosynthesise", "make ATP only", "attach and resist host defences"], correctIndex: 3, explanation: "The sticky capsule aids attachment and protection." },
        { prompt: "Which statement is TRUE?", options: ["Bacteria are non-living", "All bacteria cause disease", "Most bacteria are harmless or useful", "Bacteria have a nucleus"], correctIndex: 2, explanation: "Only a minority are pathogens." },
        { prompt: "Decomposer bacteria are important because they", options: ["produce oxygen only", "make the soil poisonous", "stop plant growth", "recycle nutrients from dead matter"], correctIndex: 3, explanation: "They break down dead matter, returning nutrients." },
        { prompt: "Ribosomes in a bacterium are the site of", options: ["movement", "respiration only", "DNA storage", "protein synthesis"], correctIndex: 3, explanation: "Ribosomes make proteins." },
        { prompt: "Facultative bacteria can respire", options: ["with or without oxygen", "only with oxygen", "only without oxygen", "using sunlight only"], correctIndex: 0, explanation: "Facultative = either aerobic or anaerobic." },
        { prompt: "Bacteria that make their own food are", options: ["saprophytic only", "heterotrophic", "parasitic only", "autotrophic"], correctIndex: 3, explanation: "Autotrophs make their own food." },
        { prompt: "Bioremediation uses bacteria to", options: ["break down pollutants and oil spills", "cause disease", "spoil food", "make plastic"], correctIndex: 0, explanation: "Certain bacteria degrade pollutants." },
        { prompt: "Which pair is correctly matched?", options: ["spirilla – rod", "bacilli – spiral", "cocci – spherical", "cocci – rod"], correctIndex: 2, explanation: "Cocci are spherical; bacilli rods; spirilla spiral." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the three basic shapes of bacteria and describe each.", answerKey: "Cocci – spherical; bacilli – rod-shaped; spirilla/spirochaetes – spiral/corkscrew. 1 mark per shape+description (max 3).", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Where is the genetic material of a bacterium located?", options: ["In the nucleoid region (no true nucleus)", "In a true membrane-bound nucleus", "In the mitochondria", "In chloroplasts"], correctIndex: 0, answerKey: "Prokaryotes keep DNA in the nucleoid. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State the function of the (a) cell wall and (b) flagellum in a bacterium.", answerKey: "(a) Cell wall (peptidoglycan): gives shape and protection, prevents bursting. (b) Flagellum: enables movement. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give three ways bacteria are economically useful to humans.", answerKey: "Any three: nitrogen fixation (Rhizobium); decomposition/nutrient recycling; food production (yoghurt/cheese); sewage treatment/bioremediation; producing antibiotics/vitamins; gut microbiome aiding digestion. 1 mark each.", marks: 5 },
        { type: "ESSAY", prompt: "Describe the structure of a typical bacterial cell and explain why bacteria are described as prokaryotes.", answerKey: "Structure: cell wall (peptidoglycan), plasma membrane, cytoplasm, nucleoid with circular DNA, ribosomes; some have capsule, flagellum, pili, plasmids (up to 9). Prokaryote: they lack a membrane-bound nucleus and membrane-bound organelles; DNA lies free in the nucleoid (up to 6). Reward a labelled account.", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 22.4 Bacterial Diseases in Humans (https://openstax.org/books/biology-2e/pages/22-4-bacterial-diseases-in-humans)
    {
      slug: "common-bacterial-diseases",
      title: "Common Bacterial Diseases",
      objective:
        "By the end of the topic, learners should be able to name common bacterial diseases, their causative bacteria and symptoms, and outline preventive measures.",
      estimatedMinutes: 110,
      notes: `## How bacteria cause disease

- Some bacteria are **pathogens** — they enter the body, multiply, and either **damage tissues** or release **toxins** (poisons).
- Bacterial diseases can often be **treated with antibiotics**, unlike viral diseases.

## Common bacterial diseases

| Disease | Causative bacterium | Main symptoms | Spread | Prevention |
| --- | --- | --- | --- | --- |
| **Tuberculosis (TB)** | *Mycobacterium tuberculosis* | persistent cough, chest pain, weight loss, fever | airborne droplets | BCG vaccine, treat cases, ventilation |
| **Tetanus (lockjaw)** | *Clostridium tetani* | muscle stiffness/spasms (from a toxin) | spores enter deep wounds | tetanus vaccine, clean wounds |
| **Strep throat** | *Streptococcus* | sore throat, fever, swollen glands | droplets/contact | hygiene, antibiotics |
| **Cholera** | *Vibrio cholerae* | severe watery diarrhoea, dehydration | contaminated water/food | clean water, sanitation, oral rehydration |
| **Typhoid** | *Salmonella* Typhi | high fever, abdominal pain | contaminated food/water (faeces) | clean water, sanitation, vaccine |
| **Gonorrhoea** | *Neisseria gonorrhoeae* | discharge, painful urination | unprotected sex | condoms, faithfulness, antibiotics |

## How bacterial diseases are treated and prevented

1. **Antibiotics** — kill bacteria or stop them multiplying (e.g. penicillin). *They do not work on viruses.*
2. **Vaccination** — BCG (TB), tetanus, typhoid vaccines.
3. **Clean water and good sanitation** — prevents cholera and typhoid.
4. **Hygiene** — hand-washing, covering coughs, wound cleaning.
5. **Safe sex** — prevents bacterial STIs.

## Antibiotic resistance

- Overuse and misuse of antibiotics allow bacteria to become **resistant** (e.g. MRSA, resistant gonorrhoea and TB).
- To slow resistance: **finish the full course**, use antibiotics only when needed, and never share them.

## Toxins vs tissue damage

- **Tetanus** and cholera cause harm mainly through **toxins** (poisons released by the bacteria).
- **TB** harms mainly by **damaging tissue** (in the lungs) and provoking the immune response.

## Common errors and misconceptions

- **"Antibiotics cure everything"** — they cure **bacterial**, not viral, infections.
- **"Tetanus is caught from a person"** — tetanus **spores** enter through **deep dirty wounds** from soil; it is not passed person to person.
- **"Stop antibiotics when you feel better"** — you must **finish the course** to kill all bacteria and slow resistance.
- **"Cholera comes from the air"** — cholera spreads through **contaminated water and food**.`,
      workedExample: `**Task.** Three patients arrive at a clinic. (a) A farmer who stepped on a rusty nail now has stiff jaw muscles and spasms. (b) A patient with weeks of coughing, chest pain, weight loss and night fever. (c) A village with many people suffering severe watery diarrhoea after the well flooded. Identify each disease, its causative bacterium and one prevention measure.

**Solution**

(a) Deep wound + stiff jaw and muscle spasms → **tetanus (lockjaw)**.
- Cause: **Clostridium tetani** spores entering the deep wound; harm comes from its **toxin**.
- Prevention: **tetanus vaccine** and cleaning wounds properly.

(b) Long cough, chest pain, weight loss, fever → **tuberculosis (TB)**.
- Cause: **Mycobacterium tuberculosis**, spread by **airborne droplets**.
- Prevention: **BCG vaccine**, prompt treatment of cases, good ventilation; treat with antibiotics.

(c) Severe watery diarrhoea after well contamination → **cholera**.
- Cause: **Vibrio cholerae** in **contaminated water/food**.
- Prevention: **clean/boiled water and good sanitation**; treat with oral rehydration.

**Answer:** (a) tetanus – Clostridium tetani – vaccine/clean wounds; (b) TB – Mycobacterium tuberculosis – BCG/treatment; (c) cholera – Vibrio cholerae – clean water and sanitation.`,
      quiz: [
        { prompt: "Bacterial diseases can often be treated with", options: ["nothing", "antiviral drugs only", "vitamins alone", "antibiotics"], correctIndex: 3, explanation: "Antibiotics act on bacteria." },
        { prompt: "Tuberculosis is caused by", options: ["Plasmodium", "Clostridium tetani", "a virus", "Mycobacterium tuberculosis"], correctIndex: 3, explanation: "TB is caused by Mycobacterium tuberculosis." },
        { prompt: "Tetanus is caused by", options: ["Streptococcus", "Clostridium tetani", "Vibrio cholerae", "HIV"], correctIndex: 1, explanation: "Clostridium tetani causes tetanus." },
        { prompt: "Tetanus spores usually enter the body through", options: ["deep dirty wounds", "clean water", "the air we breathe", "food only"], correctIndex: 0, explanation: "Spores in soil enter deep wounds." },
        { prompt: "TB is spread mainly by", options: ["sexual contact", "mosquito bites", "dirty wounds", "airborne droplets"], correctIndex: 3, explanation: "Coughing spreads TB in droplets." },
        { prompt: "Cholera is spread by", options: ["sunlight", "the air", "animal bites", "contaminated water and food"], correctIndex: 3, explanation: "Vibrio cholerae is water/food-borne." },
        { prompt: "The BCG vaccine protects against", options: ["tuberculosis", "tetanus", "cholera", "malaria"], correctIndex: 0, explanation: "BCG is the TB vaccine." },
        { prompt: "Tetanus harms the body mainly through its", options: ["colour", "size", "toxin", "movement"], correctIndex: 2, explanation: "The tetanus toxin causes muscle spasms." },
        { prompt: "Strep throat is caused by", options: ["Plasmodium", "Streptococcus", "a fungus", "a virus"], correctIndex: 1, explanation: "Streptococcus bacteria cause strep throat." },
        { prompt: "Cholera and typhoid are best prevented by", options: ["mosquito nets", "clean water and good sanitation", "vaccinating dogs", "avoiding sunlight"], correctIndex: 1, explanation: "They are faecal–oral/water-borne diseases." },
        { prompt: "Antibiotic resistance is caused by", options: ["overuse and misuse of antibiotics", "always finishing the course", "never using antibiotics", "clean water"], correctIndex: 0, explanation: "Misuse selects for resistant bacteria." },
        { prompt: "To slow antibiotic resistance you should", options: ["share tablets", "stop when you feel better", "finish the full prescribed course", "double the dose"], correctIndex: 2, explanation: "Completing the course kills all bacteria." },
        { prompt: "Which disease is NOT bacterial?", options: ["tuberculosis", "measles", "cholera", "tetanus"], correctIndex: 1, explanation: "Measles is viral; the others are bacterial." },
        { prompt: "Typhoid is caused by", options: ["Clostridium", "Mycobacterium", "Salmonella Typhi", "Neisseria"], correctIndex: 2, explanation: "Salmonella Typhi causes typhoid." },
        { prompt: "MRSA is a bacterium that is", options: ["a virus", "harmless", "resistant to many antibiotics", "cured by any antibiotic"], correctIndex: 2, explanation: "MRSA resists methicillin and other antibiotics." },
        { prompt: "Which symptom is typical of tuberculosis?", options: ["skin rash only", "stiff jaw", "watery diarrhoea", "persistent cough and weight loss"], correctIndex: 3, explanation: "TB affects the lungs with chronic cough." },
        { prompt: "Gonorrhoea is a bacterial disease spread by", options: ["coughing", "unprotected sex", "mosquitoes", "soil"], correctIndex: 1, explanation: "Gonorrhoea is a sexually transmitted infection." },
        { prompt: "Antibiotics do NOT work against", options: ["viruses", "bacteria", "Streptococcus", "Salmonella"], correctIndex: 0, explanation: "Antibiotics target bacteria, not viruses." },
        { prompt: "Cleaning and dressing wounds helps prevent", options: ["tetanus", "measles", "malaria", "the common cold"], correctIndex: 0, explanation: "It stops tetanus spores entering wounds." },
        { prompt: "Oral rehydration is used to treat the dehydration of", options: ["rabies", "tetanus", "tuberculosis", "cholera"], correctIndex: 3, explanation: "Cholera causes severe fluid loss." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the causative bacterium of (a) tuberculosis, (b) tetanus, (c) cholera.", answerKey: "(a) Mycobacterium tuberculosis; (b) Clostridium tetani; (c) Vibrio cholerae. 2 marks each (max 6).", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "How does tetanus mainly damage the body?", options: ["By photosynthesis", "Through a toxin causing muscle spasms", "By blocking blood only", "By eating red blood cells"], correctIndex: 1, answerKey: "The tetanus toxin causes rigidity/spasms. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State two ways bacterial diseases can be prevented.", answerKey: "Any two: vaccination (BCG, tetanus, typhoid); clean water/sanitation; hygiene/hand-washing; wound cleaning; safe sex; antibiotics for treatment. 1 mark each.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain why patients should finish a full course of antibiotics.", answerKey: "To kill all the bacteria (not just the weakest) so the infection is fully cleared, and to reduce the chance that surviving bacteria develop antibiotic resistance. Award for complete clearance + resistance prevention.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss common bacterial diseases in a community, how they spread, and how they can be prevented and treated, including the problem of antibiotic resistance.", answerKey: "Diseases and spread: TB (droplets), tetanus (wounds), cholera/typhoid (water/food), strep (droplets), gonorrhoea (sex) (up to 6). Prevention: vaccines, clean water/sanitation, hygiene, wound care, safe sex; treatment with antibiotics (up to 5). Resistance: caused by overuse/misuse; combat by finishing courses, appropriate use (up to 4).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal), 21.4 Sexually Transmitted Infections (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/21:_Disease/21.4:_Sexually_Transmitted_Infections); 21.5 HIV and AIDS (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/21:_Disease/21.5:_HIV_and_AIDS)
    {
      slug: "bacterial-stis-and-hiv-testing",
      title: "Sexually Transmitted Infections (STIs) Caused by Bacteria; HIV Testing",
      objective:
        "By the end of the topic, learners should be able to name STIs caused by bacteria, describe their modes of transmission, effects and prevention, and explain how HIV infection is tested for and managed.",
      estimatedMinutes: 120,
      notes: `## Bacterial STIs

| STI | Causative bacterium | Typical signs | Complications if untreated |
| --- | --- | --- | --- |
| **Chlamydia** | *Chlamydia trachomatis* | often none; discharge, painful urination | pelvic inflammatory disease (PID), ectopic pregnancy, infertility |
| **Gonorrhoea** | *Neisseria gonorrhoeae* | discharge, painful urination (often none in women) | PID, infertility |
| **Syphilis** | *Treponema pallidum* | painless sore, later a rash | in late stages paralysis, blindness, seizures, dementia |

- Another common curable STI, **trichomoniasis**, is caused by a protozoan parasite (*Trichomonas vaginalis*), not a bacterium.

## Modes of transmission

1. **Sexual contact** — direct contact between mucous membranes or their secretions during vaginal, anal or oral sex.
2. **Contact with sores** — e.g. the syphilis sore.
3. **Mother to child** — syphilis can pass to the unborn baby, which is why pregnant women are tested for syphilis at the first antenatal visit.

## Treatment

- **STIs caused by bacteria can generally be cured with antibiotics.**
- Early treatment prevents complications such as PID and infertility.
- Sexual partners should also be treated so that the infection is not passed back and forth.

## Prevention

1. **Abstinence** — avoiding all sexual contact is the only completely effective prevention.
2. **Safe sex** — condoms, few sexual partners, mutually monogamous relationships.
3. **Regular screening** of people at risk (e.g. yearly chlamydia and gonorrhoea testing for young sexually active women; syphilis testing in pregnancy), because many bacterial STIs have no symptoms.

## HIV testing

- HIV infection is diagnosed by **blood tests** that detect **antibodies** to the virus.
- **Window period** — it can take up to **3 months** after infection for antibodies to appear, so an early test may be falsely negative and should be repeated.
- Antibody tests are not accurate in babies under **18 months**, because the mother's antibodies are still in the baby's blood.
- Testing is recommended for everyone aged 15–65, and especially for **pregnant women** and anyone diagnosed with another STI.

## After a positive test: treatment and care

- Treatment is a combination of **at least three antiretroviral drugs**, started as soon as the diagnosis is made and **taken without breaks**.
- ARVs keep the **viral load low**, slow the progression to AIDS and reduce the risk of passing HIV on — HIV has changed from a fatal to a **chronic** disease.
- **Post-exposure treatment** — antiretroviral drugs given within two or three days of an accidental exposure (e.g. a needle-stick) greatly reduce the risk of infection.
- **Protecting babies** — ARVs to the mother during pregnancy and to the baby after birth cut mother-to-child transmission to about 1 percent; replacing breastfeeding with bottle feeding, where feasible, removes the risk from breast milk.

## Stages of untreated HIV infection

1. **Acute phase** — rapid viral replication and a high viral load.
2. **Chronic phase** — may last 3 to 20 years while HIV keeps destroying helper T cells.
3. **AIDS** — diagnosed when helper T cells fall below 200 per microlitre of blood or opportunistic diseases appear.

## Common errors and misconceptions

- **"No symptoms means no infection"** — chlamydia and gonorrhoea are often silent.
- **"A negative HIV test the day after exposure is final"** — the window period means the test must be repeated.
- **"Stop ARVs when you feel well"** — ARVs must be continued without breaks.
- **"Bacterial STIs clear up on their own"** — they need antibiotics; untreated they cause infertility and organ damage.`,
      workedExample: `**Task.** (a) A young woman has no symptoms, but her partner has been diagnosed with gonorrhoea. Explain why she should be tested and treated. (b) A man has an HIV antibody test two weeks after a risky sexual encounter and it is negative. What advice should he be given? (c) A pregnant woman tests positive for HIV. State two measures that protect her baby.

**Solution**

(a) Gonorrhoea is caused by the bacterium *Neisseria gonorrhoeae* and is **often symptomless in women**. Untreated, it can cause **pelvic inflammatory disease and infertility**. Because it is bacterial it can be **cured with antibiotics**, and both partners must be treated to stop reinfection.

(b) Antibodies can take **up to 3 months** to appear (the **window period**). A negative test at two weeks does not rule out infection, so he should **repeat the test** later and practise safe sex in the meantime.

(c) Measures to protect the baby:
1. **Antiretroviral drugs** for the mother during pregnancy and for the baby after birth (reduces transmission to about 1 percent).
2. **Bottle feeding instead of breastfeeding**, where this is feasible, to remove the risk through breast milk.

**Answer:** (a) silent infection that causes infertility but is curable with antibiotics; (b) retest after the window period; (c) ARVs for mother and baby, and replacement feeding.`,
      quiz: [
        { prompt: "Chlamydia is caused by", options: ["Plasmodium", "herpes simplex virus", "HPV", "Chlamydia trachomatis"], correctIndex: 3, explanation: "It is a bacterial STI." },
        { prompt: "Gonorrhoea is caused by", options: ["Trichomonas vaginalis", "Treponema pallidum", "HIV", "Neisseria gonorrhoeae"], correctIndex: 3, explanation: "Neisseria gonorrhoeae is the causative bacterium." },
        { prompt: "Syphilis is caused by", options: ["Treponema pallidum", "Neisseria gonorrhoeae", "Chlamydia trachomatis", "HSV"], correctIndex: 0, explanation: "Treponema pallidum causes syphilis." },
        { prompt: "Bacterial STIs can generally be", options: ["cured only by vaccines", "cured with antibiotics", "never treated", "cured by antiretroviral drugs"], correctIndex: 1, explanation: "Antibiotics kill bacteria." },
        { prompt: "Untreated chlamydia can lead to", options: ["pelvic inflammatory disease and infertility", "stronger immunity", "rabies", "diabetes"], correctIndex: 0, explanation: "PID can cause ectopic pregnancy or infertility." },
        { prompt: "Late-stage untreated syphilis can cause", options: ["paralysis, blindness and dementia", "only a mild cold", "tooth decay", "no harm"], correctIndex: 0, explanation: "Syphilis progresses to serious nervous damage." },
        { prompt: "Trichomoniasis is caused by a", options: ["virus", "bacterium", "protozoan parasite", "fungus"], correctIndex: 2, explanation: "Trichomonas vaginalis is a protozoan." },
        { prompt: "Pregnant women are tested for syphilis at the first antenatal visit because", options: ["it is airborne", "it causes twins", "it can pass to the unborn baby", "it cures itself in pregnancy"], correctIndex: 2, explanation: "Early treatment protects the baby." },
        { prompt: "Why should sexual partners also be treated for a bacterial STI?", options: ["because it is required for vaccines", "to make the antibiotic weaker", "to stop the infection passing back and forth", "there is no reason"], correctIndex: 2, explanation: "Treating both prevents reinfection." },
        { prompt: "Blood tests for HIV usually detect", options: ["antibodies to the virus", "bacteria in the urine", "blood sugar", "red cell count only"], correctIndex: 0, explanation: "Antibody tests are the standard screen." },
        { prompt: "The window period for HIV antibodies can be up to", options: ["10 years", "1 hour", "3 months", "1 day"], correctIndex: 2, explanation: "Antibodies may take up to 3 months to appear." },
        { prompt: "HIV antibody tests are not accurate in babies under 18 months because", options: ["the virus is too small", "babies cannot be infected", "babies have no blood", "maternal antibodies are still in their blood"], correctIndex: 3, explanation: "Mother's antibodies give a false result." },
        { prompt: "HIV treatment uses", options: ["a single vaccine dose", "one antibiotic course", "at least three antiretroviral drugs", "antifungal tablets"], correctIndex: 2, explanation: "Combination ART keeps viral load low." },
        { prompt: "Antiretroviral drugs should be", options: ["started at diagnosis and taken without breaks", "taken only when sick", "stopped after one week", "shared with friends"], correctIndex: 0, explanation: "Continuous treatment controls the virus." },
        { prompt: "AIDS is diagnosed when helper T cells fall below about", options: ["20 000 per microlitre", "2000 per microlitre", "200 per microlitre of blood", "2 per microlitre"], correctIndex: 2, explanation: "Below 200 helper T cells/µL, or opportunistic disease, indicates AIDS." },
        { prompt: "The chronic phase of HIV infection may last", options: ["exactly one month", "1 to 2 days", "a few hours", "3 to 20 years"], correctIndex: 3, explanation: "The chronic phase can be long and silent." },
        { prompt: "Post-exposure antiretroviral drugs should be given within", options: ["two or three days of exposure", "one year of exposure", "ten years of exposure", "any time"], correctIndex: 0, explanation: "Prompt treatment substantially reduces infection risk." },
        { prompt: "Which group is especially recommended for HIV testing?", options: ["only people over 80", "only children under 5", "anyone diagnosed with another STI", "nobody"], correctIndex: 2, explanation: "Another STI signals higher risk." },
        { prompt: "Gonorrhoea in women is often", options: ["visible as a facial rash", "always very painful", "symptomless", "cured without treatment"], correctIndex: 2, explanation: "Many women have no symptoms, so screening matters." },
        { prompt: "Modern antiretroviral treatment has changed HIV infection from", options: ["a viral to a bacterial disease", "a chronic to a fatal disease", "a fatal to a chronic disease", "an STI to an airborne disease"], correctIndex: 2, explanation: "ART lets people live long lives with HIV." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name three bacterial STIs and the causative organism of each.", answerKey: "Chlamydia — Chlamydia trachomatis; gonorrhoea — Neisseria gonorrhoeae; syphilis — Treponema pallidum. 2 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Why may an HIV antibody test taken one week after exposure be negative even if the person is infected?", options: ["Antibodies can take up to 3 months to appear", "HIV is destroyed by antibodies in a week", "The test detects bacteria only", "HIV cannot be detected in blood"], correctIndex: 0, answerKey: "The window period — antibodies take up to 3 months. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State two complications of untreated bacterial STIs.", answerKey: "Any two: pelvic inflammatory disease; ectopic pregnancy; infertility; (syphilis) paralysis, blindness, seizures, dementia; infection of the baby. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give three ways mother-to-child transmission of HIV can be reduced.", answerKey: "HIV testing in pregnancy; ARVs to the mother during pregnancy; ARVs to the baby after birth; bottle feeding instead of breastfeeding where feasible. 1 mark each, max 3.", marks: 3 },
        { type: "ESSAY", prompt: "Compare bacterial STIs with HIV in terms of cause, treatment and prevention, and explain the importance of HIV testing.", answerKey: "Bacterial STIs (chlamydia, gonorrhoea, syphilis) curable with antibiotics; partners treated (up to 4). HIV viral, not curable; lifelong combination ART keeps viral load low (up to 4). Prevention common to both: abstinence, condoms, few partners, screening (up to 3). Testing: antibody blood test, window period up to 3 months, early diagnosis allows ART at once, protects partners and babies (up to 4).", marks: 15 },
      ],
    },
  ],
};
