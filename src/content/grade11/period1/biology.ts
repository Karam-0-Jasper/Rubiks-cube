import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 11,
// Semester One, Period I: Viruses and Bacteria. Topics follow the CONTENTS
// items: (1) viruses — definition, characteristics and structure; (2)
// classification of viruses (DNA/RNA); (3) common viral diseases; (4) life
// cycle of a virus (lytic/lysogenic) and the bacteriophage; (5) sexually
// transmitted infections; (6) bacteria — characteristics, structure, shape and
// economic importance; (7) common bacterial diseases.
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
        { prompt: "A virus is best described as", options: ["a non-cellular infectious particle", "a small bacterium", "a single-celled fungus", "a type of protozoan"], correctIndex: 0, explanation: "Viruses are acellular particles of nucleic acid in a protein coat." },
        { prompt: "Viruses can reproduce only", options: ["inside a living host cell", "in pond water", "in soil", "in dead tissue"], correctIndex: 0, explanation: "They are obligate intracellular parasites." },
        { prompt: "The protein coat of a virus is called the", options: ["capsid", "envelope", "nucleoid", "membrane"], correctIndex: 0, explanation: "The capsid is built from capsomeres." },
        { prompt: "A virus contains", options: ["either DNA or RNA, never both", "both DNA and RNA", "no nucleic acid", "only protein"], correctIndex: 0, explanation: "Only one type of nucleic acid is present." },
        { prompt: "The protein subunits that make up the capsid are", options: ["capsomeres", "ribosomes", "plasmids", "glycogen"], correctIndex: 0, explanation: "Capsomeres assemble into the capsid." },
        { prompt: "A complete virus particle is a", options: ["virion", "cell", "spore", "gamete"], correctIndex: 0, explanation: "A virion is the full infectious particle." },
        { prompt: "The viral envelope is derived from the", options: ["host cell membrane", "capsid", "nucleus", "cell wall"], correctIndex: 0, explanation: "The envelope comes from host membrane material." },
        { prompt: "Most viruses can only be seen with a(n)", options: ["electron microscope", "hand lens", "light microscope", "naked eye"], correctIndex: 0, explanation: "They are 20–250 nm, too small for light microscopy." },
        { prompt: "Spikes on the viral envelope are made of", options: ["glycoproteins", "cellulose", "chitin", "starch"], correctIndex: 0, explanation: "Glycoprotein spikes attach to host receptors." },
        { prompt: "Viruses are placed in", options: ["no kingdom", "kingdom Monera", "kingdom Protista", "kingdom Fungi"], correctIndex: 0, explanation: "Their non-living features exclude them from any kingdom." },
        { prompt: "A virus with no envelope is called", options: ["a naked virus", "an enveloped virus", "a prophage", "a virion"], correctIndex: 0, explanation: "Naked viruses have only capsid and nucleic acid." },
        { prompt: "One living-like feature of viruses is that they", options: ["can reproduce and mutate", "have cytoplasm", "carry out respiration", "have ribosomes"], correctIndex: 0, explanation: "They reproduce and evolve inside hosts." },
        { prompt: "Which structure carries the virus's genetic instructions?", options: ["nucleic acid core", "capsid", "envelope", "spike"], correctIndex: 0, explanation: "The nucleic acid (DNA/RNA) is the genome." },
        { prompt: "Viruses are said to be host-specific because they", options: ["infect only particular hosts/cells", "infect every organism equally", "cannot infect humans", "live outside cells"], correctIndex: 0, explanation: "Each virus binds specific host receptors." },
        { prompt: "Outside a host cell a virus is", options: ["inert with no metabolism", "actively growing", "dividing rapidly", "photosynthesising"], correctIndex: 0, explanation: "It has no metabolism of its own." },
        { prompt: "Which is NOT part of a typical virus?", options: ["mitochondrion", "capsid", "nucleic acid", "capsomeres"], correctIndex: 0, explanation: "Viruses have no organelles such as mitochondria." },
        { prompt: "The size range of most viruses is about", options: ["20–250 nanometres", "1–5 millimetres", "10–50 micrometres", "1–2 centimetres"], correctIndex: 0, explanation: "Viruses are measured in nanometres." },
        { prompt: "HIV and influenza are examples of", options: ["enveloped viruses", "naked viruses", "bacteria", "fungi"], correctIndex: 0, explanation: "Both have an outer envelope." },
        { prompt: "Being 'acellular' means a virus", options: ["is not made of cells", "has one cell", "has many cells", "is a large cell"], correctIndex: 0, explanation: "Acellular = not composed of cells." },
        { prompt: "The main function of the capsid is to", options: ["protect the nucleic acid and aid attachment", "make food", "carry out respiration", "produce energy"], correctIndex: 0, explanation: "The capsid protects the genome and helps the virus attach." },
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
        { prompt: "A virus that contains RNA is called a(n)", options: ["RNA virus", "DNA virus", "prophage", "bacterium"], correctIndex: 0, explanation: "It is grouped by its RNA genome." },
        { prompt: "Which viruses generally mutate more often?", options: ["RNA viruses", "DNA viruses", "both mutate equally", "neither mutates"], correctIndex: 0, explanation: "RNA copying is more error-prone." },
        { prompt: "HIV is an example of a", options: ["retrovirus (RNA virus)", "DNA virus with low mutation", "bacterium", "fungus"], correctIndex: 0, explanation: "HIV uses reverse transcriptase to copy RNA into DNA." },
        { prompt: "The enzyme used by retroviruses to make DNA from RNA is", options: ["reverse transcriptase", "amylase", "catalase", "lipase"], correctIndex: 0, explanation: "Reverse transcriptase copies RNA to DNA." },
        { prompt: "A rod-like, spiral capsid is described as", options: ["helical", "icosahedral", "spherical only", "cubic"], correctIndex: 0, explanation: "Helical capsids are rod-shaped, e.g. TMV." },
        { prompt: "Poliovirus and herpesvirus have a capsid that is", options: ["icosahedral", "helical", "head-and-tail", "cubic"], correctIndex: 0, explanation: "Icosahedral = roughly spherical with many faces." },
        { prompt: "Viruses with an icosahedral head and a helical tail are", options: ["head-and-tail (bacteriophages)", "helical only", "enveloped only", "naked spheres"], correctIndex: 0, explanation: "This head-and-tail form is typical of phages." },
        { prompt: "Which is a DNA virus?", options: ["chickenpox", "influenza", "measles", "rabies"], correctIndex: 0, explanation: "Chickenpox, hepatitis B and herpes are DNA viruses." },
        { prompt: "Bacteriophages are viruses that infect", options: ["bacteria", "humans", "plants", "fungi"], correctIndex: 0, explanation: "'Phage' means bacteria-eater." },
        { prompt: "DNA viruses copy their genome using", options: ["the host cell's replication enzymes", "reverse transcriptase only", "chloroplasts", "mitochondria"], correctIndex: 0, explanation: "They direct host enzymes to replicate viral DNA." },
        { prompt: "Which is an RNA virus?", options: ["rabies", "smallpox", "hepatitis B", "herpes simplex"], correctIndex: 0, explanation: "Rabies, flu, measles, polio and HIV are RNA viruses." },
        { prompt: "Why does the flu vaccine change most years?", options: ["the RNA flu virus mutates frequently", "the virus is DNA-based", "it does not really change", "bacteria evolve"], correctIndex: 0, explanation: "High RNA mutation rate changes surface proteins." },
        { prompt: "An enveloped virus differs from a naked virus by having", options: ["an outer membrane", "no nucleic acid", "no capsid", "a nucleus"], correctIndex: 0, explanation: "Enveloped viruses have a membrane; naked ones do not." },
        { prompt: "Tobacco mosaic virus is classified by shape as", options: ["helical", "icosahedral", "head-and-tail", "enveloped"], correctIndex: 0, explanation: "TMV has a helical (rod) capsid." },
        { prompt: "Which feature is NOT used to classify viruses?", options: ["number of legs", "nucleic acid type", "capsid shape", "presence of an envelope"], correctIndex: 0, explanation: "Viruses have no legs; the others are real criteria." },
        { prompt: "Compared with RNA viruses, DNA viruses tend to", options: ["mutate more slowly", "mutate faster", "have no genome", "be larger than cells"], correctIndex: 0, explanation: "DNA replication is more accurate, so slower mutation." },
        { prompt: "A retrovirus is a special kind of", options: ["RNA virus", "DNA virus", "bacterium", "protozoan"], correctIndex: 0, explanation: "Retroviruses reverse-transcribe RNA into DNA." },
        { prompt: "Which virus is enveloped?", options: ["influenza", "poliovirus", "tobacco mosaic virus", "T4 phage"], correctIndex: 0, explanation: "Influenza and HIV are enveloped." },
        { prompt: "Grouping viruses by DNA or RNA is classification by", options: ["nucleic acid type", "capsid shape", "host", "size"], correctIndex: 0, explanation: "This uses the genome type." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State two ways in which viruses are classified.", answerKey: "Any two: by type of nucleic acid (DNA/RNA); by capsid shape/morphology; by presence of an envelope; by host infected. 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which group of viruses has the higher mutation rate?", options: ["RNA viruses", "DNA viruses", "Both are identical", "Neither mutates"], correctIndex: 0, answerKey: "RNA viruses mutate more due to error-prone RNA copying. Option A.", marks: 3 },
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
        { prompt: "Viruses cause disease by", options: ["forcing host cells to make new viruses and damaging them", "photosynthesising", "making the host stronger", "digesting food outside the body"], correctIndex: 0, explanation: "Symptoms come from cell damage and the immune response." },
        { prompt: "The common cold and flu attack the", options: ["respiratory tract", "kidneys", "bones", "muscles only"], correctIndex: 0, explanation: "They infect the airways." },
        { prompt: "Mumps mainly affects the", options: ["salivary glands", "liver", "lungs", "heart"], correctIndex: 0, explanation: "Mumps swells the salivary glands." },
        { prompt: "Rabies is transmitted by", options: ["the bite of an infected animal", "dirty water", "mosquito bite", "sharing food"], correctIndex: 0, explanation: "Rabies spreads through animal bites." },
        { prompt: "Which disease can cause paralysis and is spread by the faecal–oral route?", options: ["polio", "rabies", "mumps", "chickenpox"], correctIndex: 0, explanation: "Polio spreads via contaminated water/food." },
        { prompt: "HIV attacks the", options: ["immune system (white blood cells)", "salivary glands", "skin only", "bones"], correctIndex: 0, explanation: "HIV destroys certain white blood cells." },
        { prompt: "Antibiotics", options: ["do not cure viral diseases", "cure all viruses", "cure the common cold", "kill HIV easily"], correctIndex: 0, explanation: "Antibiotics work on bacteria, not viruses." },
        { prompt: "The single most powerful tool against many viral diseases is", options: ["vaccination", "shouting", "sunbathing", "starvation"], correctIndex: 0, explanation: "Vaccines prevent measles, polio, mumps, etc." },
        { prompt: "Measles, mumps and rubella are prevented by the", options: ["MMR vaccine", "polio drops only", "rabies vaccine", "flu shot"], correctIndex: 0, explanation: "MMR protects against all three." },
        { prompt: "HIV is spread by all EXCEPT", options: ["sharing food or shaking hands", "unprotected sex", "infected blood", "mother to child"], correctIndex: 0, explanation: "Casual contact does not spread HIV." },
        { prompt: "Chickenpox is spread mainly by", options: ["droplets and contact with blisters", "mosquito bites", "eating meat", "soil contact"], correctIndex: 0, explanation: "It is very contagious via droplets/contact." },
        { prompt: "Ebola spreads through", options: ["body fluids of infected people", "clean water", "sunlight", "healthy air"], correctIndex: 0, explanation: "Ebola passes via body fluids." },
        { prompt: "To prevent polio you should", options: ["give the polio vaccine and ensure clean water", "vaccinate dogs", "use mosquito nets", "avoid the sun"], correctIndex: 0, explanation: "Vaccination plus sanitation stops polio." },
        { prompt: "Covering coughs and washing hands mainly prevents", options: ["airborne/droplet viruses like flu", "rabies", "HIV", "polio"], correctIndex: 0, explanation: "It reduces droplet spread of respiratory viruses." },
        { prompt: "ART (antiretroviral therapy) is used to treat", options: ["HIV/AIDS", "the common cold", "measles", "rabies"], correctIndex: 0, explanation: "ART controls HIV." },
        { prompt: "Which statement is TRUE?", options: ["Vaccines train the immune system to prevent disease", "Vaccines always give you the disease", "Antibiotics cure the flu", "HIV spreads by touching"], correctIndex: 0, explanation: "Vaccines safely build immunity." },
        { prompt: "A very contagious viral disease with a skin rash spread by droplets is", options: ["measles", "tetanus", "malaria", "cholera"], correctIndex: 0, explanation: "Measles is a highly contagious viral rash." },
        { prompt: "Screening donated blood mainly prevents the spread of", options: ["HIV and hepatitis B", "rabies", "the common cold", "mumps"], correctIndex: 0, explanation: "Blood-borne viruses are stopped by screening." },
        { prompt: "Rabies can be prevented by", options: ["vaccinating dogs and prompt post-bite vaccine", "boiling water", "using bed nets", "eating cooked meat"], correctIndex: 0, explanation: "Dog vaccination and rapid treatment prevent rabies." },
        { prompt: "The symptoms of a viral infection are due to", options: ["cell damage and the immune response", "extra vitamins", "faster growth", "photosynthesis"], correctIndex: 0, explanation: "Damaged cells and immune reaction cause symptoms." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name three common viral diseases and, for each, state one way it is transmitted.", answerKey: "Any three e.g. flu/cold – droplets; measles/mumps/chickenpox – droplets/contact; polio – faecal–oral; rabies – animal bite; HIV – unprotected sex/blood; Ebola – body fluids. 1 mark per disease+route.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which statement about treating viral diseases is correct?", options: ["Antibiotics do not cure viral diseases", "Antibiotics cure all viruses", "Vaccines cause the disease", "HIV spreads by shaking hands"], correctIndex: 0, answerKey: "Antibiotics act on bacteria, not viruses. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State three ways viral diseases can be prevented.", answerKey: "Any three: vaccination; hygiene/hand-washing/covering coughs; clean water and sanitation; safe sex/screened blood; isolation during outbreaks; vaccinating animals (rabies). 1 mark each.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why HIV/AIDS makes a person prone to many other infections.", answerKey: "HIV attacks and destroys white blood cells of the immune system, so the body cannot fight off other pathogens, leading to opportunistic infections. Award for immune-system damage and reduced defence.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss how viral diseases spread and the main methods used to prevent and control them, with examples relevant to Liberia.", answerKey: "Spread: droplets/airborne (flu, measles), faecal–oral (polio), body fluids/sex/blood (HIV, Ebola, hepatitis B), animal bite (rabies) (up to 6). Prevention: vaccination, hygiene, clean water/sanitation, safe sex and screened blood, isolation/quarantine, animal vaccination; note antibiotics do not work on viruses (up to 6). Local links e.g. Ebola isolation, polio and measles vaccination, HIV prevention (up to 3).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 21.2 Virus Infections and Hosts (https://openstax.org/books/biology-2e/pages/21-2-virus-infections-and-hosts)
    {
      slug: "life-cycle-of-a-virus",
      title: "Life Cycle of a Virus and the Bacteriophage",
      objective:
        "By the end of the topic, learners should be able to describe the structure of a bacteriophage and outline the steps of the lytic and lysogenic cycles.",
      estimatedMinutes: 120,
      notes: `## The bacteriophage

- A **bacteriophage** (phage) is a virus that infects **bacteria**.
- It has a **head-and-tail** structure:
  - an **icosahedral head (capsid)** containing the DNA;
  - a **tail sheath** and **tail fibres** used to attach to and inject DNA into the bacterium.

\`\`\`svg Structure of a bacteriophage
<svg viewBox="0 0 200 200" role="img" aria-label="Bacteriophage with head, tail sheath and tail fibres">
  <polygon points="100,15 130,35 130,70 100,90 70,70 70,35" fill="#bfdbfe" fill-opacity="0.5" stroke="currentColor"/>
  <text x="150" y="50" font-size="9" fill="currentColor">head (DNA)</text>
  <rect x="93" y="90" width="14" height="45" fill="#93c5fd" fill-opacity="0.6" stroke="currentColor"/>
  <text x="150" y="115" font-size="9" fill="currentColor">tail sheath</text>
  <rect x="80" y="135" width="40" height="8" fill="none" stroke="currentColor"/>
  <g stroke="currentColor"><line x1="82" y1="143" x2="70" y2="175"/><line x1="95" y1="143" x2="90" y2="178"/><line x1="105" y1="143" x2="110" y2="178"/><line x1="118" y1="143" x2="130" y2="175"/></g>
  <text x="130" y="185" font-size="9" fill="currentColor">tail fibres</text>
</svg>
\`\`\`

## Two life cycles

A bacteriophage can reproduce by the **lytic cycle** or, for **temperate phages**, by the **lysogenic cycle**.

## The lytic cycle (five steps)

1. **Attachment (adsorption)** — the phage tail fibres lock onto specific receptors on the bacterial cell wall.
2. **Penetration (injection)** — the phage injects its **DNA** into the bacterium; the empty capsid stays outside.
3. **Replication (biosynthesis)** — the phage DNA takes over the host machinery to make many copies of viral DNA and proteins.
4. **Assembly (maturation)** — new phage particles are built from the parts.
5. **Release (lysis)** — the host cell **bursts (lyses)**, releasing many new phages that infect other bacteria.

The lytic cycle **kills the host cell** quickly.

## The lysogenic cycle

- The phage DNA **inserts into the host chromosome** and becomes a **prophage**.
- The prophage is **copied every time the bacterium divides**, so it is passed to all daughter cells **without killing them**.
- A **stress trigger** (starvation, chemicals, UV light) can make the prophage **excise** (leave the chromosome) and switch into the **lytic cycle**.

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
        { prompt: "A bacteriophage is a virus that infects", options: ["bacteria", "humans", "plants", "fungi"], correctIndex: 0, explanation: "'Phage' means it attacks bacteria." },
        { prompt: "The head of a bacteriophage contains", options: ["DNA", "cytoplasm", "ribosomes", "chloroplasts"], correctIndex: 0, explanation: "The icosahedral head holds the viral DNA." },
        { prompt: "A phage attaches to a bacterium using its", options: ["tail fibres", "head", "nucleus", "flagellum"], correctIndex: 0, explanation: "Tail fibres bind specific receptors." },
        { prompt: "During penetration, a bacteriophage injects its", options: ["DNA only", "whole capsid", "envelope", "ribosomes"], correctIndex: 0, explanation: "Only the DNA enters; the capsid stays outside." },
        { prompt: "The first step of the lytic cycle is", options: ["attachment", "lysis", "assembly", "release"], correctIndex: 0, explanation: "Attachment (adsorption) comes first." },
        { prompt: "The lytic cycle ends with", options: ["lysis of the host cell", "the cell surviving forever", "photosynthesis", "budding"], correctIndex: 0, explanation: "The cell bursts, releasing new phages." },
        { prompt: "In the lysogenic cycle the viral DNA becomes a", options: ["prophage in the host chromosome", "capsid", "spore", "gamete"], correctIndex: 0, explanation: "Integrated viral DNA is the prophage." },
        { prompt: "A prophage is copied", options: ["every time the bacterium divides", "only once", "never", "outside the cell"], correctIndex: 0, explanation: "It replicates with the host chromosome." },
        { prompt: "What can trigger a prophage to switch to the lytic cycle?", options: ["stress such as UV light or chemicals", "extra food", "warmth alone", "nothing ever"], correctIndex: 0, explanation: "Stressors cause the prophage to excise." },
        { prompt: "Which cycle destroys the host cell immediately?", options: ["the lytic cycle", "the lysogenic cycle", "both never destroy it", "neither"], correctIndex: 0, explanation: "Lysis bursts the cell at once." },
        { prompt: "During replication (biosynthesis) the phage", options: ["uses host machinery to copy viral DNA and proteins", "makes its own food", "divides like a cell", "photosynthesises"], correctIndex: 0, explanation: "It hijacks the host's machinery." },
        { prompt: "The step where new phage particles are built is", options: ["assembly", "attachment", "penetration", "release"], correctIndex: 0, explanation: "Assembly (maturation) constructs new virions." },
        { prompt: "A temperate phage is one that can", options: ["enter the lysogenic cycle", "only kill cells instantly", "photosynthesise", "live outside a host permanently"], correctIndex: 0, explanation: "Temperate phages can lie dormant as prophages." },
        { prompt: "In the lysogenic cycle the host cell", options: ["survives and passes on the prophage", "bursts immediately", "stops dividing", "becomes a virus"], correctIndex: 0, explanation: "The cell survives and its daughters carry the prophage." },
        { prompt: "'Lysis' means", options: ["bursting of the host cell", "growth of the cell", "budding of a virus", "attachment"], correctIndex: 0, explanation: "Lysis is the rupture that releases phages." },
        { prompt: "Which structure injects the phage DNA into the bacterium?", options: ["the tail sheath and fibres", "the head", "the envelope", "the nucleus"], correctIndex: 0, explanation: "The tail apparatus drives DNA into the cell." },
        { prompt: "The correct order of the lytic cycle is", options: ["attachment, penetration, replication, assembly, release", "release, assembly, replication, penetration, attachment", "penetration, attachment, release, assembly, replication", "assembly, release, attachment, penetration, replication"], correctIndex: 0, explanation: "This is the standard five-step sequence." },
        { prompt: "After the prophage excises from the chromosome, it enters the", options: ["lytic cycle", "lysogenic cycle again", "resting state", "photosynthetic stage"], correctIndex: 0, explanation: "Excision leads to lytic replication." },
        { prompt: "New phages produced in the lytic cycle go on to", options: ["infect other bacteria", "become bacteria", "die instantly", "make food"], correctIndex: 0, explanation: "Released phages infect neighbouring cells." },
        { prompt: "Which is TRUE of the lysogenic cycle?", options: ["The virus can stay dormant a long time", "The cell always bursts within minutes", "No viral DNA is present", "The virus makes its own ribosomes"], correctIndex: 0, explanation: "The prophage can remain hidden for many generations." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe the structure of a bacteriophage.", answerKey: "An icosahedral head (capsid) containing DNA, a tail sheath, and tail fibres used to attach to and inject DNA into a bacterium. 1 mark per correct part (max 3).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "List the five steps of the lytic cycle in order.", answerKey: "Attachment (adsorption); penetration (injection of DNA); replication (biosynthesis); assembly (maturation); release (lysis). Full marks require all five in order.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "In the lysogenic cycle, the integrated viral DNA is called a", options: ["prophage", "capsid", "virion", "plasmid"], correctIndex: 0, answerKey: "Integrated phage DNA is a prophage. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Give two differences between the lytic and lysogenic cycles.", answerKey: "Any two: lytic kills/lyses host, lysogenic host survives; lytic makes new phages at once, lysogenic inserts prophage copied with host; lytic is fast, lysogenic can stay dormant. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Explain the lytic and lysogenic cycles of a bacteriophage and describe how a phage switches from one to the other.", answerKey: "Lytic: attachment, penetration, replication, assembly, lysis — host destroyed, phages released (up to 6). Lysogenic: DNA integrates as a prophage, copied with the host each division, cell survives (up to 5). Switch: a stress trigger (UV, chemicals, starvation) makes the prophage excise and enter the lytic cycle (up to 4).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal), 21.4 Sexually Transmitted Infections (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/21:_Disease/21.4:_Sexually_Transmitted_Infections)
    {
      slug: "sexually-transmitted-infections",
      title: "Sexually Transmitted Infections (STIs)",
      objective:
        "By the end of the topic, learners should be able to name STIs caused by viruses and bacteria, describe their modes of transmission, and outline methods of prevention.",
      estimatedMinutes: 120,
      notes: `## What are STIs?

- **Sexually transmitted infections (STIs)** are infections passed from person to person mainly through **vaginal, oral or anal sex**, and sometimes through infected **blood** or from **mother to child**.
- They are caused by **bacteria**, **viruses** and **protozoa**.

## STIs grouped by their cause

| Cause | STI | Causative organism |
| --- | --- | --- |
| **Bacteria** | gonorrhoea | *Neisseria gonorrhoeae* |
| **Bacteria** | syphilis | *Treponema pallidum* |
| **Bacteria** | chlamydia | *Chlamydia trachomatis* |
| **Virus** | HIV/AIDS | human immunodeficiency virus (HIV) |
| **Virus** | genital herpes | herpes simplex virus (HSV-2) |
| **Virus** | genital warts | human papillomavirus (HPV) |
| **Protozoa** | trichomoniasis | *Trichomonas vaginalis* |

## Modes of transmission

- **Unprotected sexual contact** (vaginal, oral, anal) — the main route for all STIs.
- **Direct contact with sores/chancres** — e.g. syphilis passes through contact with the sore.
- **Infected blood** — e.g. sharing needles can spread HIV and hepatitis B.
- **Mother to child** — during pregnancy, birth or breastfeeding (e.g. HIV, syphilis).

## Effects

- Untreated STIs can cause **pain, sores, discharge, infertility**, and in babies **blindness or death**.
- **HIV** destroys immune cells, leading to **AIDS** and vulnerability to other infections.
- Syphilis, if untreated, damages the heart, brain and nerves.

## Prevention and control

1. **Abstinence** — not having sex is the surest way to avoid STIs.
2. **Being faithful** — a long-term mutually faithful relationship with an uninfected partner.
3. **Correct use of condoms** — greatly lowers the risk during sex.
4. **Avoid sharing needles** and ensure **screened blood** for transfusions.
5. **Early testing and treatment** — bacterial STIs (gonorrhoea, syphilis, chlamydia) can be **cured with antibiotics**; viral STIs are managed but not cured.
6. **HIV testing, counselling and support**, and treatment to prevent mother-to-child transmission.

## Bacterial vs viral STIs

- **Bacterial STIs** (gonorrhoea, syphilis, chlamydia) can usually be **cured with antibiotics**, though gonorrhoea is becoming antibiotic-resistant.
- **Viral STIs** (HIV, herpes, HPV) **cannot be cured**, only managed — so prevention is essential.

## Common errors and misconceptions

- **"All STIs can be cured with antibiotics"** — antibiotics cure **bacterial** STIs, not viral ones (HIV, herpes).
- **"You can tell an infected person by looking"** — many STIs show **no obvious symptoms**, so testing is important.
- **"Condoms give no protection"** — correct condom use greatly reduces the risk.
- **"HIV spreads by casual contact"** — it spreads through sex, blood and mother-to-child, not by touching or sharing utensils.`,
      workedExample: `**Task.** A clinic sees three patients. (a) A man with a painful discharge, diagnosed with gonorrhoea. (b) A patient with a painless sore (chancre) that later heals but the infection remains. (c) A person with a lifelong viral infection that is destroying immune cells. For each: name the causative organism type, and state whether it can be cured and how it is prevented.

**Solution**

(a) **Gonorrhoea** — caused by the **bacterium** *Neisseria gonorrhoeae*.
- **Curable** with **antibiotics** (though resistance is rising).
- Prevented by **abstinence, faithfulness and correct condom use**.

(b) A **painless chancre** that heals → **syphilis**, caused by the **bacterium** *Treponema pallidum*.
- **Curable** with **antibiotics**, especially if treated early; untreated it damages the heart, brain and nerves.
- Prevented by the same measures and by treating infected mothers to protect babies.

(c) A lifelong virus destroying immune cells → **HIV/AIDS**, caused by a **virus**.
- **Not curable**, only **managed** with antiretroviral therapy (ART).
- Prevented by safe sex, screened blood, not sharing needles, and treatment to prevent mother-to-child spread.

**Answer:** (a) bacterial, curable with antibiotics; (b) bacterial (syphilis), curable with antibiotics; (c) viral (HIV), not curable but managed — all prevented by abstinence, faithfulness and correct condom use.`,
      quiz: [
        { prompt: "STIs are mainly spread through", options: ["unprotected sexual contact", "shaking hands", "sharing pens", "clean water"], correctIndex: 0, explanation: "Sexual contact is the main route." },
        { prompt: "Gonorrhoea is caused by a", options: ["bacterium", "virus", "protozoan", "fungus"], correctIndex: 0, explanation: "Neisseria gonorrhoeae is a bacterium." },
        { prompt: "Syphilis is caused by the bacterium", options: ["Treponema pallidum", "Neisseria gonorrhoeae", "Mycobacterium", "Plasmodium"], correctIndex: 0, explanation: "Treponema pallidum causes syphilis." },
        { prompt: "HIV/AIDS is caused by a", options: ["virus", "bacterium", "protozoan", "fungus"], correctIndex: 0, explanation: "HIV is a virus." },
        { prompt: "Which STI is caused by a protozoan?", options: ["trichomoniasis", "gonorrhoea", "syphilis", "HIV"], correctIndex: 0, explanation: "Trichomonas vaginalis is a protozoan." },
        { prompt: "Genital herpes is caused by", options: ["herpes simplex virus", "a bacterium", "a fungus", "a protozoan"], correctIndex: 0, explanation: "HSV-2 causes genital herpes." },
        { prompt: "Bacterial STIs can usually be", options: ["cured with antibiotics", "cured with vitamins", "not treated at all", "cured with sunlight"], correctIndex: 0, explanation: "Antibiotics cure bacterial STIs." },
        { prompt: "Viral STIs such as HIV are", options: ["managed but not cured", "cured by antibiotics", "harmless", "cured with clean water"], correctIndex: 0, explanation: "Viral STIs cannot be cured, only managed." },
        { prompt: "The surest way to avoid STIs is", options: ["abstinence", "eating well", "exercising", "drinking water"], correctIndex: 0, explanation: "Not having sex prevents sexual transmission." },
        { prompt: "Correct use of condoms", options: ["greatly lowers STI risk", "increases STI risk", "has no effect", "cures HIV"], correctIndex: 0, explanation: "Condoms reduce transmission during sex." },
        { prompt: "Syphilis can be passed through direct contact with a", options: ["chancre (sore)", "cough", "handshake", "shared cup"], correctIndex: 0, explanation: "The chancre is infectious." },
        { prompt: "HIV can be transmitted by all EXCEPT", options: ["sharing food", "unprotected sex", "infected blood", "mother to child"], correctIndex: 0, explanation: "Casual contact like sharing food does not spread HIV." },
        { prompt: "Many STIs are dangerous because they", options: ["often show no obvious symptoms", "always show a rash", "cure themselves", "cannot spread"], correctIndex: 0, explanation: "Symptomless carriers spread infection unknowingly." },
        { prompt: "Untreated STIs can cause", options: ["infertility", "better fertility", "stronger immunity", "faster growth"], correctIndex: 0, explanation: "They can damage reproductive organs." },
        { prompt: "Which is a bacterial STI?", options: ["chlamydia", "genital herpes", "genital warts", "HIV"], correctIndex: 0, explanation: "Chlamydia trachomatis is a bacterium." },
        { prompt: "To protect babies from HIV and syphilis, we should", options: ["test and treat infected mothers", "ignore the mother's health", "avoid all medicine", "wait until birth"], correctIndex: 0, explanation: "Treatment prevents mother-to-child transmission." },
        { prompt: "Genital warts are caused by", options: ["human papillomavirus (HPV)", "a bacterium", "a protozoan", "a fungus"], correctIndex: 0, explanation: "HPV causes genital warts." },
        { prompt: "HIV testing and counselling is important because it", options: ["allows early treatment and prevents spread", "cures the infection instantly", "is only for doctors", "has no benefit"], correctIndex: 0, explanation: "Early diagnosis enables ART and prevention." },
        { prompt: "Gonorrhoea treatment is becoming harder because the bacterium is", options: ["developing antibiotic resistance", "getting bigger", "becoming a virus", "disappearing"], correctIndex: 0, explanation: "Antibiotic resistance is rising in gonorrhoea." },
        { prompt: "A key difference between bacterial and viral STIs is that", options: ["bacterial ones can be cured with antibiotics, viral ones cannot", "viral ones are cured by antibiotics", "bacterial ones cannot be treated", "they are the same"], correctIndex: 0, explanation: "Only bacterial STIs are curable with antibiotics." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name one bacterial STI and one viral STI, giving the causative organism for each.", answerKey: "Bacterial e.g. gonorrhoea (Neisseria gonorrhoeae) or syphilis (Treponema pallidum) or chlamydia; viral e.g. HIV/AIDS (HIV) or herpes (HSV) or warts (HPV). 2 marks per correct STI+organism.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which STI cannot be cured, only managed?", options: ["HIV/AIDS", "Gonorrhoea", "Syphilis", "Chlamydia"], correctIndex: 0, answerKey: "HIV is viral and not curable. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State three ways STIs can be prevented.", answerKey: "Any three: abstinence; faithfulness/one uninfected partner; correct condom use; avoid sharing needles/screened blood; early testing and treatment. 1 mark each.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why testing for STIs is important even when a person feels healthy.", answerKey: "Many STIs show no obvious symptoms, so an infected person can spread them unknowingly and suffer long-term damage (infertility, organ damage); early testing allows treatment and prevents spread. Award for symptomless spread + benefit of early treatment.", marks: 4 },
        { type: "ESSAY", prompt: "Compare bacterial and viral STIs in terms of examples, curability and prevention, and discuss why prevention is especially important for viral STIs.", answerKey: "Bacterial STIs: gonorrhoea, syphilis, chlamydia — curable with antibiotics (up to 5). Viral STIs: HIV, herpes, HPV — managed not cured (up to 5). Prevention (abstinence, faithfulness, condoms, screened blood, testing) is vital for viral STIs because there is no cure, so avoiding infection is the only protection (up to 5).", marks: 15 },
      ],
    },
    // source: OpenStax — Biology 2e, 22.2 Structure of Prokaryotes: Bacteria and Archaea; 22.5 Beneficial Prokaryotes (https://openstax.org/books/biology-2e/pages/22-2-structure-of-prokaryotes-bacteria-and-archaea)
    {
      slug: "bacteria-structure-and-classification",
      title: "Bacteria: Structure, Shape and Economic Importance",
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
        { prompt: "Bacteria are classified as", options: ["prokaryotes", "eukaryotes", "viruses", "fungi"], correctIndex: 0, explanation: "Bacteria are prokaryotic cells (Monera)." },
        { prompt: "The genetic material of a bacterium is found in the", options: ["nucleoid", "true nucleus", "mitochondrion", "chloroplast"], correctIndex: 0, explanation: "Prokaryotes have no true nucleus; DNA is in the nucleoid." },
        { prompt: "Spherical bacteria are called", options: ["cocci", "bacilli", "spirilla", "hyphae"], correctIndex: 0, explanation: "Cocci are spherical." },
        { prompt: "Rod-shaped bacteria are called", options: ["bacilli", "cocci", "spirilla", "algae"], correctIndex: 0, explanation: "Bacilli are rods." },
        { prompt: "Corkscrew-shaped bacteria are", options: ["spirilla/spirochaetes", "cocci", "bacilli", "viruses"], correctIndex: 0, explanation: "Spiral bacteria are spirilla." },
        { prompt: "The bacterial cell wall is made mainly of", options: ["peptidoglycan", "cellulose", "chitin", "starch"], correctIndex: 0, explanation: "Peptidoglycan forms the bacterial wall." },
        { prompt: "The whip-like structure some bacteria use to move is the", options: ["flagellum", "capsule", "pilus", "ribosome"], correctIndex: 0, explanation: "The flagellum provides movement." },
        { prompt: "A small extra ring of DNA in bacteria is a", options: ["plasmid", "nucleus", "capsid", "chloroplast"], correctIndex: 0, explanation: "Plasmids carry extra genes." },
        { prompt: "Bacteria reproduce mainly by", options: ["binary fission", "seeds", "meiosis", "budding of a virus"], correctIndex: 0, explanation: "The cell splits in two by binary fission." },
        { prompt: "Gram-positive bacteria have a", options: ["thick peptidoglycan wall", "no cell wall", "thin wall with outer membrane", "cellulose wall"], correctIndex: 0, explanation: "They stain purple due to thick peptidoglycan." },
        { prompt: "Rhizobium bacteria help plants by", options: ["fixing nitrogen in root nodules", "eating the roots", "causing disease", "blocking water"], correctIndex: 0, explanation: "They convert nitrogen gas into usable compounds." },
        { prompt: "Which bacteria make yoghurt and cheese?", options: ["lactic acid bacteria", "Mycobacterium", "Rhizobium", "cyanobacteria only"], correctIndex: 0, explanation: "Lactic acid bacteria ferment milk." },
        { prompt: "The capsule of a bacterium helps it to", options: ["attach and resist host defences", "photosynthesise", "make ATP only", "divide"], correctIndex: 0, explanation: "The sticky capsule aids attachment and protection." },
        { prompt: "Which statement is TRUE?", options: ["Most bacteria are harmless or useful", "All bacteria cause disease", "Bacteria are non-living", "Bacteria have a nucleus"], correctIndex: 0, explanation: "Only a minority are pathogens." },
        { prompt: "Decomposer bacteria are important because they", options: ["recycle nutrients from dead matter", "make the soil poisonous", "stop plant growth", "produce oxygen only"], correctIndex: 0, explanation: "They break down dead matter, returning nutrients." },
        { prompt: "Ribosomes in a bacterium are the site of", options: ["protein synthesis", "respiration only", "DNA storage", "movement"], correctIndex: 0, explanation: "Ribosomes make proteins." },
        { prompt: "Facultative bacteria can respire", options: ["with or without oxygen", "only with oxygen", "only without oxygen", "using sunlight only"], correctIndex: 0, explanation: "Facultative = either aerobic or anaerobic." },
        { prompt: "Bacteria that make their own food are", options: ["autotrophic", "heterotrophic", "parasitic only", "saprophytic only"], correctIndex: 0, explanation: "Autotrophs make their own food." },
        { prompt: "Bioremediation uses bacteria to", options: ["break down pollutants and oil spills", "cause disease", "spoil food", "make plastic"], correctIndex: 0, explanation: "Certain bacteria degrade pollutants." },
        { prompt: "Which pair is correctly matched?", options: ["cocci – spherical", "bacilli – spiral", "spirilla – rod", "cocci – rod"], correctIndex: 0, explanation: "Cocci are spherical; bacilli rods; spirilla spiral." },
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
        { prompt: "Bacterial diseases can often be treated with", options: ["antibiotics", "antiviral drugs only", "vitamins alone", "nothing"], correctIndex: 0, explanation: "Antibiotics act on bacteria." },
        { prompt: "Tuberculosis is caused by", options: ["Mycobacterium tuberculosis", "Clostridium tetani", "a virus", "Plasmodium"], correctIndex: 0, explanation: "TB is caused by Mycobacterium tuberculosis." },
        { prompt: "Tetanus is caused by", options: ["Clostridium tetani", "Streptococcus", "Vibrio cholerae", "HIV"], correctIndex: 0, explanation: "Clostridium tetani causes tetanus." },
        { prompt: "Tetanus spores usually enter the body through", options: ["deep dirty wounds", "clean water", "the air we breathe", "food only"], correctIndex: 0, explanation: "Spores in soil enter deep wounds." },
        { prompt: "TB is spread mainly by", options: ["airborne droplets", "mosquito bites", "dirty wounds", "sexual contact"], correctIndex: 0, explanation: "Coughing spreads TB in droplets." },
        { prompt: "Cholera is spread by", options: ["contaminated water and food", "the air", "animal bites", "sunlight"], correctIndex: 0, explanation: "Vibrio cholerae is water/food-borne." },
        { prompt: "The BCG vaccine protects against", options: ["tuberculosis", "tetanus", "cholera", "malaria"], correctIndex: 0, explanation: "BCG is the TB vaccine." },
        { prompt: "Tetanus harms the body mainly through its", options: ["toxin", "size", "colour", "movement"], correctIndex: 0, explanation: "The tetanus toxin causes muscle spasms." },
        { prompt: "Strep throat is caused by", options: ["Streptococcus", "Plasmodium", "a fungus", "a virus"], correctIndex: 0, explanation: "Streptococcus bacteria cause strep throat." },
        { prompt: "Cholera and typhoid are best prevented by", options: ["clean water and good sanitation", "mosquito nets", "vaccinating dogs", "avoiding sunlight"], correctIndex: 0, explanation: "They are faecal–oral/water-borne diseases." },
        { prompt: "Antibiotic resistance is caused by", options: ["overuse and misuse of antibiotics", "always finishing the course", "never using antibiotics", "clean water"], correctIndex: 0, explanation: "Misuse selects for resistant bacteria." },
        { prompt: "To slow antibiotic resistance you should", options: ["finish the full prescribed course", "stop when you feel better", "share tablets", "double the dose"], correctIndex: 0, explanation: "Completing the course kills all bacteria." },
        { prompt: "Which disease is NOT bacterial?", options: ["measles", "tuberculosis", "cholera", "tetanus"], correctIndex: 0, explanation: "Measles is viral; the others are bacterial." },
        { prompt: "Typhoid is caused by", options: ["Salmonella Typhi", "Mycobacterium", "Clostridium", "Neisseria"], correctIndex: 0, explanation: "Salmonella Typhi causes typhoid." },
        { prompt: "MRSA is a bacterium that is", options: ["resistant to many antibiotics", "harmless", "a virus", "cured by any antibiotic"], correctIndex: 0, explanation: "MRSA resists methicillin and other antibiotics." },
        { prompt: "Which symptom is typical of tuberculosis?", options: ["persistent cough and weight loss", "stiff jaw", "watery diarrhoea", "skin rash only"], correctIndex: 0, explanation: "TB affects the lungs with chronic cough." },
        { prompt: "Gonorrhoea is a bacterial disease spread by", options: ["unprotected sex", "coughing", "mosquitoes", "soil"], correctIndex: 0, explanation: "Gonorrhoea is a sexually transmitted infection." },
        { prompt: "Antibiotics do NOT work against", options: ["viruses", "bacteria", "Streptococcus", "Salmonella"], correctIndex: 0, explanation: "Antibiotics target bacteria, not viruses." },
        { prompt: "Cleaning and dressing wounds helps prevent", options: ["tetanus", "measles", "malaria", "the common cold"], correctIndex: 0, explanation: "It stops tetanus spores entering wounds." },
        { prompt: "Oral rehydration is used to treat the dehydration of", options: ["cholera", "tetanus", "tuberculosis", "rabies"], correctIndex: 0, explanation: "Cholera causes severe fluid loss." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the causative bacterium of (a) tuberculosis, (b) tetanus, (c) cholera.", answerKey: "(a) Mycobacterium tuberculosis; (b) Clostridium tetani; (c) Vibrio cholerae. 2 marks each (max 6).", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "How does tetanus mainly damage the body?", options: ["Through a toxin causing muscle spasms", "By photosynthesis", "By blocking blood only", "By eating red blood cells"], correctIndex: 0, answerKey: "The tetanus toxin causes rigidity/spasms. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State two ways bacterial diseases can be prevented.", answerKey: "Any two: vaccination (BCG, tetanus, typhoid); clean water/sanitation; hygiene/hand-washing; wound cleaning; safe sex; antibiotics for treatment. 1 mark each.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain why patients should finish a full course of antibiotics.", answerKey: "To kill all the bacteria (not just the weakest) so the infection is fully cleared, and to reduce the chance that surviving bacteria develop antibiotic resistance. Award for complete clearance + resistance prevention.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss common bacterial diseases in a community, how they spread, and how they can be prevented and treated, including the problem of antibiotic resistance.", answerKey: "Diseases and spread: TB (droplets), tetanus (wounds), cholera/typhoid (water/food), strep (droplets), gonorrhoea (sex) (up to 6). Prevention: vaccines, clean water/sanitation, hygiene, wound care, safe sex; treatment with antibiotics (up to 5). Resistance: caused by overuse/misuse; combat by finishing courses, appropriate use (up to 4).", marks: 15 },
      ],
    },
  ],
};
