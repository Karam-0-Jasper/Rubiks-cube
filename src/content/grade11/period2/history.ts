import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for History, Grade 11,
// Semester One, Period II: European History — Ancient Greece, Macedonia & Rome.
// The MoE CONTENTS list has eight top-level items, each rebuilt here as its own
// topic: (1) migration and settlement of the Greeks; (2) Greek minds/philosophy
// (Pre-Socratics, Socrates and the Sophists, Plato and Aristotle); (3) the rise
// and fall of Athens and Sparta; (4) Macedonia (its rise and Alexander's
// campaign); (5) the Hellenistic age; (6) Rome (origins, republic and empire,
// barbarian invasion, fall); (7) Roman achievements and contribution to Western
// civilization; (8) Christianity and the Empire. Notes rebuilt from OpenStax
// World History Volume 1 and LibreTexts.
export const historyG11P2: PeriodContent = {
  grade: 11,
  number: 2,
  title: "European History: Ancient Greece, Macedonia and Rome",
  summary:
    "Period II of the MoE Grade 11 History syllabus. Learners study the classical world — the migration and settlement of the Greeks and the rise of the polis; Greek philosophy from the Pre-Socratics through Socrates, Plato and Aristotle; the rivalry of Athens and Sparta; the rise of Macedonia and the conquests of Alexander the Great; the Hellenistic age; the origins, republic, empire, barbarian invasion and fall of Rome; Rome's contribution to Western civilization; and the growth of Christianity within the Empire.",
  topics: [
    {
      // source: OpenStax — World History Volume 1, 6.2 Ancient Greece (https://openstax.org/books/world-history-volume-1/pages/6-2-ancient-greece)
      slug: "migration-settlement-of-the-greeks",
      title: "The Migration and Settlement of the Greeks",
      objective:
        "By the end of the topic, learners should be able to describe the migration and settlement of the Greeks, the Greek Dark Age and Archaic period, and the rise of the independent city-state (polis).",
      estimatedMinutes: 100,
      notes: `## From the Bronze Age to the Greek Dark Age

- Greek civilization emerged after the **Bronze Age collapse** around **1100 BCE**.
- The earlier Aegean civilizations were the **Minoans** (on Crete) and the **Mycenaeans** (mainland Greece).
- During the **Greek Dark Age (1100–800 BCE)** writing was lost and population fell; recovery began around **800 BCE**, opening the **Archaic period (800–500 BCE)**.

## Geography shaped settlement

- Greece is a land of **mountains and sea**, which split it into many small, separate communities rather than one kingdom.
- The Greeks organised into independent city-states called **poleis** (singular *polis*), each with its own government and religious practices.
- They adopted the **Phoenician alphabet** and **added vowels** — a key innovation that made writing easier.

## Colonization

- By the **eighth century BCE** the Greeks founded **colonies** across the Mediterranean, from **Sicily and southern Italy to the Black Sea**.
- Colonies spread Greek culture, relieved population pressure at home, and set up independent settlements, often with **equal land distribution** among the settler-citizens.

## The polis (city-state)

- The **polis** was the basic Greek political unit: a city and the farmland around it.
- Each polis was **independent**, with its own laws, army and patron god.
- The two most important were **Athens** and **Sparta**.

## Common errors and misconceptions

- **Thinking Greece was a single unified country** — it was many independent city-states.
- **Ignoring geography** — mountains and sea kept the poleis separate and independent.
- **Forgetting the alphabet** — the Greeks adapted the Phoenician alphabet by adding vowels.`,
      workedExample: `**Question:** Explain how the Greeks settled and why they formed independent city-states rather than a single kingdom.

**Solution**

*Step 1 — after the collapse.*
Greek civilization emerged after the **Bronze Age collapse** (about 1100 BCE), following the earlier **Minoan** and **Mycenaean** cultures. A **Dark Age (1100–800 BCE)** followed, then recovery in the **Archaic period (800–500 BCE)**.

*Step 2 — the role of geography.*
Greece's **mountains and sea** divided the land into many small, separate communities. This encouraged the growth of independent **city-states (poleis)** rather than one large kingdom.

*Step 3 — writing and colonies.*
The Greeks adopted the **Phoenician alphabet**, adding **vowels**. From the **eighth century BCE** they founded **colonies** from Sicily to the Black Sea, spreading their culture.

**Conclusion:** emerging after the Bronze Age collapse and divided by mountains and sea, the Greeks settled as many independent poleis, adopted an improved alphabet, and spread through Mediterranean colonies.`,
      quiz: [
        { prompt: "Greek civilization emerged after the Bronze Age collapse around", options: ["1100 BCE", "500 CE", "3000 BCE", "1 CE"], correctIndex: 0, explanation: "About 1100 BCE." },
        { prompt: "The two earlier Aegean civilizations were the", options: ["Minoans and Mycenaeans", "Sumerians and Akkadians", "Romans and Etruscans", "Persians and Medes"], correctIndex: 0, explanation: "Minoans (Crete) and Mycenaeans (mainland)." },
        { prompt: "The Minoans were centred on the island of", options: ["Crete", "Sicily", "Cyprus", "Britain"], correctIndex: 0, explanation: "The Minoans lived on Crete." },
        { prompt: "The Greek Dark Age lasted roughly from", options: ["1100 to 800 BCE", "500 to 323 BCE", "27 BCE to 476 CE", "800 to 500 CE"], correctIndex: 0, explanation: "About 1100–800 BCE." },
        { prompt: "The Archaic period began about", options: ["800 BCE", "1 CE", "323 BCE", "476 CE"], correctIndex: 0, explanation: "Recovery began around 800 BCE." },
        { prompt: "A Greek independent city-state was called a", options: ["polis", "satrapy", "ziggurat", "province"], correctIndex: 0, explanation: "A polis (plural poleis)." },
        { prompt: "Greek geography is dominated by", options: ["mountains and sea", "deserts", "wide plains", "ice"], correctIndex: 0, explanation: "Mountains and sea divided Greece." },
        { prompt: "This geography encouraged the Greeks to form", options: ["many independent city-states", "one large empire", "a single kingdom", "nomadic tribes"], correctIndex: 0, explanation: "Separate communities, not one state." },
        { prompt: "The Greeks adopted their alphabet from the", options: ["Phoenicians", "Romans", "Egyptians", "Persians"], correctIndex: 0, explanation: "They adapted the Phoenician alphabet." },
        { prompt: "The Greeks improved the alphabet by adding", options: ["vowels", "numbers", "punctuation only", "pictures"], correctIndex: 0, explanation: "Adding vowels was a key innovation." },
        { prompt: "Greek colonies were founded from about the", options: ["eighth century BCE", "fifth century CE", "first century CE", "twelfth century CE"], correctIndex: 0, explanation: "From the 8th century BCE." },
        { prompt: "Greek colonies spread from Sicily to the", options: ["Black Sea", "Atlantic Ocean", "Red Sea", "Indian Ocean"], correctIndex: 0, explanation: "Colonies reached the Black Sea." },
        { prompt: "Colonies helped by", options: ["relieving population pressure and spreading culture", "isolating the Greeks", "ending all trade", "uniting Greece into one state"], correctIndex: 0, explanation: "They eased crowding and spread Greek ways." },
        { prompt: "Each polis had its own", options: ["laws, army and patron god", "single emperor for all Greece", "shared parliament", "Roman governor"], correctIndex: 0, explanation: "Poleis were fully independent." },
        { prompt: "The two most important city-states were", options: ["Athens and Sparta", "Rome and Carthage", "Memphis and Thebes", "Babylon and Nineveh"], correctIndex: 0, explanation: "Athens and Sparta." },
        { prompt: "A polis consisted of", options: ["a city and its surrounding farmland", "only a fortress", "an entire continent", "a trading ship"], correctIndex: 0, explanation: "City plus its territory." },
        { prompt: "The Mycenaeans were located on", options: ["the Greek mainland", "the coast of Egypt", "the island of Crete only", "the Persian plateau"], correctIndex: 0, explanation: "Mycenaeans were mainland Greeks." },
        { prompt: "During the Dark Age, the Greeks", options: ["lost the use of writing", "built the Parthenon", "conquered Persia", "founded Rome"], correctIndex: 0, explanation: "Writing was lost until recovery around 800 BCE." },
        { prompt: "A common misconception is that ancient Greece was", options: ["a single unified country", "made of city-states", "shaped by mountains", "a colonising culture"], correctIndex: 0, explanation: "It was many independent poleis, not one country." },
        { prompt: "Equal land distribution among settlers was a feature of Greek", options: ["colonies", "temples", "armies", "philosophy"], correctIndex: 0, explanation: "New colonies often gave settlers equal plots." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "What is a polis, and why did the Greeks form many of them instead of one kingdom?", answerKey: "A polis is an independent Greek city-state — a city and its surrounding farmland with its own laws, army and patron god. Greece's mountains and sea divided the land into many small, separate communities, encouraging independent city-states rather than a single kingdom. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe the Greek Dark Age and the Archaic period.", answerKey: "The Dark Age (c. 1100–800 BCE) followed the Bronze Age collapse: writing was lost and population fell. Recovery began about 800 BCE, opening the Archaic period (c. 800–500 BCE), when the poleis, the alphabet and colonization developed. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The Greeks adopted and improved their alphabet from the", options: ["Phoenicians", "Romans", "Egyptians", "Persians"], correctIndex: 0, answerKey: "They adapted the Phoenician alphabet by adding vowels. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State two effects of Greek colonization.", answerKey: "Any two: spread Greek culture across the Mediterranean; relieved population pressure at home; created new independent settlements (often with equal land distribution); expanded trade. Award 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the migration and settlement of the Greeks and the rise of the independent city-state.", answerKey: "Award marks for: emergence after the Bronze Age collapse and the Minoan/Mycenaean background, 5 marks; the Dark Age and Archaic period, 4 marks; the role of geography (mountains and sea) in producing independent poleis, 6 marks; the alphabet and colonization, 5 marks; conclusion, 2 marks. Narration without the geographic explanation should not exceed 12.", marks: 22 },
      ],
    },
    {
      // source: OpenStax — World History Volume 1, 6.2 Ancient Greece (https://openstax.org/books/world-history-volume-1/pages/6-2-ancient-greece)
      slug: "greek-philosophy-western-civilization",
      title: "Greek Minds: Philosophy and Its Contribution to Western Civilization",
      objective:
        "By the end of the topic, learners should be able to explain the Greek contribution of philosophy — the Pre-Socratic natural philosophers, Socrates and the Sophists, and Plato and Aristotle.",
      estimatedMinutes: 110,
      notes: `## The Greek mind: reason over myth

- In the **Classical period (500–323 BCE)**, Greek thinkers began to explain the world by **reason** rather than only by myth.
- This questioning spirit — **philosophy** ("love of wisdom") — is one of Greece's greatest gifts to Western civilization.

## Pre-Socratic philosophy (the natural philosophers)

- The earliest philosophers asked what the world is **made of** and how it works, using observation and reason.
- **Empedocles** proposed the world is made of **four material elements** (earth, water, air, fire).
- **Democritus** theorised that everything is made of tiny particles called **"atoms."**
- These thinkers looked for **natural**, not supernatural, explanations.

## Socrates and the Sophists

- The **Sophists** were paid teachers of rhetoric (persuasion) who often argued that truth and morality are relative.
- **Socrates** (a stonecutter by trade) publicly **questioned** sophists and politicians about morality, using probing questions — the **Socratic method** — to expose muddled thinking.
- He embarrassed powerful Athenians; an Athenian jury convicted him of **impiety and corrupting the youth** and executed him in **399 BCE**. Socrates wrote nothing himself.

## Plato and Aristotle

- **Plato**, a student of Socrates, wrote **dialogues** featuring Socrates and founded the **Academy**. He taught that the material world is only a shadow of a higher reality of **"ideas and forms."**
- **Aristotle**, Plato's student, **disagreed**: he held that ideas cannot exist apart from matter, and stressed the **reasoned study of the natural world**. He founded the **Lyceum** (334 BCE) and later tutored Alexander the Great.
- Between them they shaped **logic, ethics, politics and science** for over two thousand years.

## Other Greek thinkers

- Historians **Herodotus** and **Thucydides** pioneered rational **history** — studying causes and effects, not just recording events.
- Playwrights like **Sophocles** and **Euripides** wrote tragedies exploring justice, law and duty.

## Common errors and misconceptions

- **Confusing Socrates, Plato and Aristotle** — Socrates questioned and wrote nothing; Plato taught "forms" and wrote dialogues; Aristotle studied the natural world by observation.
- **Thinking the Pre-Socratics were unscientific** — they sought natural explanations (elements, atoms).
- **Assuming the Sophists were philosophers like Socrates** — they were paid teachers of persuasion whom Socrates criticised.`,
      workedExample: `**Question:** Trace the development of Greek philosophy from the Pre-Socratics through Socrates to Plato and Aristotle.

**Solution**

*Step 1 — the Pre-Socratics.*
The earliest philosophers sought **natural** explanations of the world: **Empedocles** said matter is made of **four elements**; **Democritus** proposed tiny **"atoms."**

*Step 2 — Socrates and the Sophists.*
The **Sophists** taught persuasion and claimed morality is relative. **Socrates** used probing questions (the **Socratic method**) to examine morality, angering powerful Athenians; he was executed in **399 BCE** for impiety and corrupting the youth.

*Step 3 — Plato.*
Socrates' student **Plato** wrote **dialogues**, founded the **Academy**, and taught that reality lies in eternal **"forms,"** the material world being only their shadow.

*Step 4 — Aristotle.*
Plato's student **Aristotle** disagreed, insisting ideas cannot exist apart from matter; he founded the **Lyceum** and stressed **observation** and reasoned study of nature.

**Conclusion:** from the Pre-Socratics' search for natural causes, through Socrates' questioning of morality, to Plato's forms and Aristotle's study of nature, the Greeks founded Western philosophy, logic and science.`,
      quiz: [
        { prompt: "'Philosophy' means", options: ["love of wisdom", "fear of gods", "study of stars only", "art of war"], correctIndex: 0, explanation: "Philosophy = love of wisdom." },
        { prompt: "The Greek Classical period ran from about", options: ["500 to 323 BCE", "1100 to 800 BCE", "27 BCE to 476 CE", "800 to 500 CE"], correctIndex: 0, explanation: "The Classical period, 500–323 BCE." },
        { prompt: "Pre-Socratic philosophers sought explanations that were", options: ["natural rather than supernatural", "purely religious", "based only on myth", "written by Socrates"], correctIndex: 0, explanation: "They looked for natural causes." },
        { prompt: "Empedocles proposed the world is made of", options: ["four elements (earth, water, air, fire)", "atoms only", "one god", "pure number"], correctIndex: 0, explanation: "Four material elements." },
        { prompt: "Democritus theorised that matter is made of", options: ["tiny particles called atoms", "four elements", "spirit", "fire alone"], correctIndex: 0, explanation: "Democritus proposed atoms." },
        { prompt: "The Sophists were", options: ["paid teachers of persuasion (rhetoric)", "temple priests", "army generals", "farmers"], correctIndex: 0, explanation: "Paid teachers of rhetoric." },
        { prompt: "Socrates examined ideas by", options: ["asking probing questions (the Socratic method)", "writing long books", "military conquest", "casting votes"], correctIndex: 0, explanation: "He questioned people to expose weak thinking." },
        { prompt: "Socrates was executed in", options: ["399 BCE", "323 BCE", "476 CE", "27 BCE"], correctIndex: 0, explanation: "He was executed in 399 BCE." },
        { prompt: "Socrates was convicted of", options: ["impiety and corrupting the youth", "theft", "treason in war", "tax evasion"], correctIndex: 0, explanation: "Impiety and corrupting the youth." },
        { prompt: "How much did Socrates himself write?", options: ["nothing — we know him through others", "many books", "only poetry", "law codes"], correctIndex: 0, explanation: "Socrates wrote nothing; Plato records him." },
        { prompt: "Plato founded the school called the", options: ["Academy", "Lyceum", "Senate", "Museon"], correctIndex: 0, explanation: "Plato founded the Academy." },
        { prompt: "Plato taught that true reality lies in", options: ["eternal ideas and forms", "atoms only", "the four elements", "money"], correctIndex: 0, explanation: "Plato's theory of forms." },
        { prompt: "Aristotle founded the school called the", options: ["Lyceum", "Academy", "Parthenon", "Colosseum"], correctIndex: 0, explanation: "Aristotle founded the Lyceum (334 BCE)." },
        { prompt: "Aristotle stressed", options: ["observation and reasoned study of the natural world", "that matter is illusion", "that ideas exist apart from matter", "rejecting all reason"], correctIndex: 0, explanation: "Aristotle emphasised studying nature." },
        { prompt: "Aristotle disagreed with Plato by holding that", options: ["ideas cannot exist apart from matter", "there are no forms of thought", "atoms do not exist", "the sun is a god"], correctIndex: 0, explanation: "For Aristotle, ideas are tied to matter." },
        { prompt: "Aristotle later tutored", options: ["Alexander the Great", "Julius Caesar", "Cyrus the Great", "Constantine"], correctIndex: 0, explanation: "Aristotle tutored Alexander." },
        { prompt: "Rational Greek history was pioneered by", options: ["Herodotus and Thucydides", "Plato and Aristotle", "Socrates and the Sophists", "Sophocles and Euripides"], correctIndex: 0, explanation: "Herodotus and Thucydides studied causes." },
        { prompt: "Greek tragedy was written by playwrights such as", options: ["Sophocles and Euripides", "Herodotus and Thucydides", "Zeno and Epicurus", "Cyrus and Darius"], correctIndex: 0, explanation: "Sophocles and Euripides wrote tragedies." },
        { prompt: "The teacher–student order was", options: ["Socrates, then Plato, then Aristotle", "Aristotle, then Plato, then Socrates", "Plato, then Socrates, then Aristotle", "all lived at once with no link"], correctIndex: 0, explanation: "Socrates taught Plato, who taught Aristotle." },
        { prompt: "Greek philosophy's lasting contribution to the West was", options: ["explaining the world by reason (logic, ethics, science)", "the pyramids", "cuneiform", "the monsoon trade"], correctIndex: 0, explanation: "Reasoned inquiry founded Western thought." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "What did the Pre-Socratic philosophers try to do, and give two examples of their ideas.", answerKey: "They sought natural (not supernatural) explanations of what the world is made of and how it works. Examples: Empedocles' four elements (earth, water, air, fire); Democritus' theory of atoms. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe Socrates and his method, and state what happened to him.", answerKey: "Socrates questioned sophists and politicians about morality using probing questions (the Socratic method) to expose weak thinking; he wrote nothing himself. An Athenian jury convicted him of impiety and corrupting the youth and executed him in 399 BCE. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Plato taught that true reality lies in", options: ["eternal ideas and forms", "atoms", "the four elements", "the state"], correctIndex: 0, answerKey: "Plato's theory of forms. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Contrast Plato and Aristotle.", answerKey: "Plato (Academy) taught that the material world is a shadow of a higher reality of ideas/forms. Aristotle (Lyceum) disagreed, holding that ideas cannot exist apart from matter and stressing observation and the reasoned study of the natural world. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss Greek philosophy as a contribution to Western civilization, from the Pre-Socratics through Socrates to Plato and Aristotle.", answerKey: "Award marks for: the shift from myth to reason in the Classical period, 3 marks; the Pre-Socratics seeking natural causes (elements, atoms), 5 marks; the Sophists and Socrates' questioning method and death, 6 marks; Plato's forms and Academy, 4 marks; Aristotle's observation and Lyceum, 4 marks; the lasting influence on logic/ethics/science, 3 marks. Naming without explanation should not exceed 12.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 1, 6.2 Ancient Greece (https://openstax.org/books/world-history-volume-1/pages/6-2-ancient-greece)
      slug: "rise-and-fall-of-athens-and-sparta",
      title: "The Rise and Fall of Athens and Sparta",
      objective:
        "By the end of the topic, learners should be able to compare Athens and Sparta, trace the origins of democracy, and explain the Persian and Peloponnesian Wars that led to their rise and fall.",
      estimatedMinutes: 120,
      notes: `## Two rival city-states

| Feature | Sparta | Athens |
| --- | --- | --- |
| Government | military **oligarchy** with **two kings** | **democracy** (rule by citizens) |
| Focus | war and discipline | trade, arts, philosophy, the navy |
| Citizens | soldier-citizens only in government | all adult male citizens participated |
| Labour | enslaved **helots** worked the land | slaves and free workers |

## Sparta: a military state

- From the **eighth century BCE**, Sparta grew from villages in **Laconia** into a military power.
- It conquered its neighbours and enslaved the **Messenians** as **helots** to farm the land.
- Boys entered the **agoge** at age **seven** for harsh state military training.
- By the late sixth century BCE, Sparta led the **Peloponnesian League**.

## Athens: the birthplace of democracy

- **Solon's reforms (594 BCE)** cancelled debts and banned enslaving citizens for debt, and created jury courts.
- **Cleisthenes (509 BCE)** reorganised Athens into **ten tribes** with a **Council of Five Hundred**, creating **democracy** — citizens voted on laws, declared war and served on juries.

## The Persian Wars (492–449 BCE)

- Persia's attempt to conquer Greece temporarily **united** the city-states.
- At **Marathon (490 BCE)** the Athenians defeated Darius's army.
- In **480 BCE** Xerxes invaded; the Spartans died heroically at **Thermopylae**, and Athens destroyed the Persian fleet at **Salamis**, forcing Persia to withdraw.

## Athenian empire and the Peloponnesian War (431–404 BCE)

- After the wars Athens led the **Delian League (477 BCE)**, which became an **Athenian empire** collecting tribute; the wealth built the **Parthenon** (from about 437 BCE).
- Fearing Athenian power, Sparta fought the **Peloponnesian War (431–404 BCE)**.
- A **plague (426 BCE)** killed many Athenians, including their leader **Pericles**.
- With Persian help, Sparta destroyed the Athenian fleet at **Aegospotami (405 BCE)**; Athens surrendered in **404 BCE**, ending its empire.

## Common errors and misconceptions

- **Calling Sparta a democracy** — it was a **military oligarchy** with two kings.
- **Thinking Athenian democracy included everyone** — only **adult male citizens** took part; women, slaves and foreigners did not.
- **Mixing up the wars** — the **Persian Wars** united the Greeks against Persia; the **Peloponnesian War** was Greeks (Sparta) against Greeks (Athens).`,
      workedExample: `**Question:** Compare Athens and Sparta and explain how the Persian and Peloponnesian Wars shaped their rise and fall.

**Solution**

*Step 1 — compare the two.*
**Sparta** was a **military oligarchy** with two kings, focused on war, its helots farming the land. **Athens** developed **democracy** — under Solon (594 BCE) and Cleisthenes (509 BCE) — and led in trade, arts and the navy.

*Step 2 — the Persian Wars (492–449 BCE).*
Persia's invasions **united** the Greeks: Athens won at **Marathon (490 BCE)**; Sparta held at **Thermopylae** and Athens crushed the Persian fleet at **Salamis (480 BCE)**. Greece was saved, and Athens rose to lead the **Delian League**.

*Step 3 — the Athenian empire.*
The Delian League became an **Athenian empire** collecting tribute, funding the **Parthenon**, but angering other Greeks.

*Step 4 — the Peloponnesian War (431–404 BCE).*
Sparta, fearing Athens, went to war. Plague killed **Pericles (426 BCE)**; with Persian help Sparta won at **Aegospotami (405 BCE)**, and Athens surrendered in **404 BCE**.

**Conclusion:** the Persian Wars united the Greeks and raised Athens; the Peloponnesian War, Greek against Greek, brought Athens down and left both city-states weakened.`,
      quiz: [
        { prompt: "Sparta's government was a", options: ["military oligarchy with two kings", "democracy", "single monarchy", "republic with a senate"], correctIndex: 0, explanation: "Sparta was a military oligarchy." },
        { prompt: "Athens is called the birthplace of", options: ["democracy", "monarchy", "feudalism", "empire"], correctIndex: 0, explanation: "Athens developed democracy." },
        { prompt: "The enslaved farmers of Sparta were the", options: ["helots", "plebeians", "satraps", "vassals"], correctIndex: 0, explanation: "Helots (mostly Messenians) farmed for Sparta." },
        { prompt: "Spartan boys entered the agoge (military training) at age", options: ["seven", "eighteen", "twelve", "twenty-one"], correctIndex: 0, explanation: "Boys were taken at age seven." },
        { prompt: "Solon's reforms (594 BCE) included", options: ["cancelling debts and banning debt-slavery of citizens", "founding the Lyceum", "building the Colosseum", "invading Persia"], correctIndex: 0, explanation: "Solon cancelled debts and created jury courts." },
        { prompt: "Cleisthenes (509 BCE) created democracy by", options: ["reorganising Athens into ten tribes with a Council of Five Hundred", "crowning two kings", "abolishing all voting", "founding Sparta"], correctIndex: 0, explanation: "He built democratic institutions." },
        { prompt: "Athenian democracy allowed participation by", options: ["adult male citizens", "everyone including women and slaves", "only the two kings", "foreigners only"], correctIndex: 0, explanation: "Only adult male citizens took part." },
        { prompt: "The Persian Wars lasted from about", options: ["492 to 449 BCE", "431 to 404 BCE", "264 to 146 BCE", "1100 to 800 BCE"], correctIndex: 0, explanation: "492–449 BCE." },
        { prompt: "The Athenians defeated Darius's army in 490 BCE at", options: ["Marathon", "Salamis", "Thermopylae", "Actium"], correctIndex: 0, explanation: "The Battle of Marathon." },
        { prompt: "The Spartans made a heroic last stand at", options: ["Thermopylae", "Marathon", "Aegospotami", "Zama"], correctIndex: 0, explanation: "Thermopylae in 480 BCE." },
        { prompt: "Athens destroyed the Persian fleet at", options: ["Salamis", "Marathon", "Chaeronea", "Cannae"], correctIndex: 0, explanation: "The naval battle of Salamis (480 BCE)." },
        { prompt: "After the Persian Wars, Athens led the", options: ["Delian League", "Peloponnesian League", "Roman Senate", "Holy Roman Empire"], correctIndex: 0, explanation: "The Delian League (477 BCE)." },
        { prompt: "The Delian League's tribute helped build the", options: ["Parthenon", "Colosseum", "Great Wall", "pyramids"], correctIndex: 0, explanation: "Tribute funded the Parthenon." },
        { prompt: "The Peloponnesian War was fought between", options: ["Athens and Sparta", "Greece and Persia", "Rome and Carthage", "Sparta and Egypt"], correctIndex: 0, explanation: "Athens vs Sparta, 431–404 BCE." },
        { prompt: "The Athenian leader who died in the plague of 426 BCE was", options: ["Pericles", "Solon", "Cleisthenes", "Alcibiades"], correctIndex: 0, explanation: "Pericles died in the plague." },
        { prompt: "Sparta destroyed the Athenian fleet in 405 BCE at", options: ["Aegospotami", "Salamis", "Marathon", "Actium"], correctIndex: 0, explanation: "The Battle of Aegospotami." },
        { prompt: "Athens surrendered, ending its empire, in", options: ["404 BCE", "490 BCE", "146 BCE", "323 BCE"], correctIndex: 0, explanation: "Athens surrendered in 404 BCE." },
        { prompt: "Sparta got the help of which power to defeat Athens?", options: ["Persia", "Rome", "Egypt", "Carthage"], correctIndex: 0, explanation: "Persia backed Sparta late in the war." },
        { prompt: "Which statement is TRUE?", options: ["The Persian Wars united the Greeks; the Peloponnesian War divided them", "Both wars were against Persia", "Both wars were Greek civil wars", "Sparta was a democracy"], correctIndex: 0, explanation: "Persian Wars: united vs Persia. Peloponnesian: Greek vs Greek." },
        { prompt: "The Peloponnesian League was led by", options: ["Sparta", "Athens", "Macedonia", "Persia"], correctIndex: 0, explanation: "Sparta led the Peloponnesian League." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Compare the governments of Athens and Sparta.", answerKey: "Sparta was a military oligarchy ruled by two kings, focused on war, with soldier-citizens governing and helots farming. Athens developed democracy, in which all adult male citizens voted on laws, declared war and served on juries. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Outline the course and result of the Persian Wars.", answerKey: "Persia invaded Greece (492–449 BCE), temporarily uniting the city-states. Athens won at Marathon (490 BCE); Sparta held at Thermopylae and Athens destroyed the Persian fleet at Salamis (480 BCE), forcing Persia to withdraw. Result: Greece saved and Athens rose to lead the Delian League. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The Peloponnesian War (431–404 BCE) was fought between", options: ["Athens and Sparta", "Greece and Persia", "Rome and Carthage", "Athens and Macedonia"], correctIndex: 0, answerKey: "Athens vs Sparta. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain how Athens fell in the Peloponnesian War.", answerKey: "Fearing Athenian power, Sparta went to war; a plague (426 BCE) killed many Athenians including Pericles; with Persian help Sparta destroyed the Athenian fleet at Aegospotami (405 BCE); Athens surrendered in 404 BCE, ending its empire. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the rise and fall of Athens and Sparta, referring to their governments and the Persian and Peloponnesian Wars.", answerKey: "Award marks for: comparison of Spartan oligarchy and Athenian democracy (Solon, Cleisthenes), 6 marks; the Persian Wars uniting the Greeks (Marathon, Thermopylae, Salamis), 6 marks; Athens' rise via the Delian League/empire and the Parthenon, 4 marks; the Peloponnesian War, plague, Pericles, Aegospotami and Athens' surrender, 6 marks; conclusion, 2 marks. Confusing the two wars caps the mark at 14.", marks: 24 },
      ],
    },
    {
      // source: OpenStax — World History Volume 1, 6.3 The Hellenistic Era (https://openstax.org/books/world-history-volume-1/pages/6-3-the-hellenistic-era)
      slug: "macedonia-and-alexander-the-great",
      title: "Macedonia: Its Rise and the Campaigns of Alexander the Great",
      objective:
        "By the end of the topic, learners should be able to explain the rise of Macedonia under Philip II, its conquest of Greece, and the campaigns of Alexander the Great.",
      estimatedMinutes: 110,
      notes: `## The rise of Macedonia

- **Macedonia** lay to the north of Greece. Under **King Philip II (359–336 BCE)** it became a powerful state.
- Philip built a strong army: **farmers as infantry** (using the long-speared **phalanx**) and **aristocrats as cavalry**.
- He controlled **Thrace**, gaining precious metals and wealth.

## The conquest of Greece

- At the **Battle of Chaeronea (338 BCE)**, Philip **crushed** the allied armies of **Athens and Thebes**.
- He then **united** the Greek city-states under his leadership, planning to make war on **Persia**.
- Philip was **assassinated in 336 BCE** before he could invade.

## Alexander the Great

- Philip's twenty-year-old son **Alexander III** (Alexander the Great) took power in **336 BCE**.
- Within a year he crushed northern invaders and a Greek rebellion (destroying Thebes).
- He then carried out his father's plan and **invaded the Persian Empire**:
  - Victory at **Issus (333 BCE)**.
  - Decisive victory at **Gaugamela (330 BCE)**, breaking Persian power.
  - He **sacked and burned Persepolis** (330 BCE), the Persian capital.
- He pushed on through **central Asia to the Indus River valley** (India), creating one of history's largest empires.
- Alexander **died in Babylon in 323 BCE**, aged **thirty-three**.

## The empire is divided

- Alexander left no strong heir. His generals — **Seleucus, Ptolemy and Antigonus** — divided the empire into large kingdoms.
- This division opened the **Hellenistic age**.

## Common errors and misconceptions

- **Confusing Philip and Alexander** — Philip built the army and conquered Greece; Alexander conquered Persia and the East.
- **Thinking Alexander's empire lasted** — it broke apart among his generals after his death in 323 BCE.
- **Forgetting Chaeronea (338 BCE)** — that battle ended Greek independence and united Greece under Macedonia.`,
      workedExample: `**Question:** Explain the rise of Macedonia and the achievements of Alexander the Great.

**Solution**

*Step 1 — Macedonia rises under Philip II.*
**Philip II (359–336 BCE)** turned Macedonia into a power with a strong army — infantry in the **phalanx** and aristocratic cavalry — and seized **Thrace's** wealth.

*Step 2 — the conquest of Greece.*
At **Chaeronea (338 BCE)** Philip crushed **Athens and Thebes** and united Greece under Macedonia, planning to attack Persia. He was **assassinated in 336 BCE**.

*Step 3 — Alexander's campaigns.*
His son **Alexander** (from 336 BCE) invaded Persia, winning at **Issus (333 BCE)** and **Gaugamela (330 BCE)**, burning **Persepolis**, and marching to the **Indus valley**.

*Step 4 — death and division.*
Alexander **died at Babylon in 323 BCE**, aged 33; his generals divided the empire, beginning the **Hellenistic age**.

**Conclusion:** Philip II built the army and conquered Greece; Alexander then conquered the Persian Empire and reached India, spreading Greek power across the East before his early death broke the empire apart.`,
      quiz: [
        { prompt: "Macedonia lay to the ___ of Greece.", options: ["north", "south", "east across the sea", "west in Italy"], correctIndex: 0, explanation: "Macedonia was north of Greece." },
        { prompt: "Macedonia became powerful under King", options: ["Philip II", "Alexander I", "Darius", "Pericles"], correctIndex: 0, explanation: "Philip II (359–336 BCE)." },
        { prompt: "Philip II's infantry fought in the", options: ["phalanx", "legion", "trireme", "cohort"], correctIndex: 0, explanation: "The long-speared phalanx." },
        { prompt: "Philip gained wealth by controlling", options: ["Thrace and its precious metals", "Egypt's gold", "the Swahili coast", "the Silk Road"], correctIndex: 0, explanation: "Thrace's metals funded his army." },
        { prompt: "Philip crushed Athens and Thebes at the Battle of", options: ["Chaeronea (338 BCE)", "Marathon", "Salamis", "Zama"], correctIndex: 0, explanation: "Chaeronea, 338 BCE." },
        { prompt: "After Chaeronea, Philip", options: ["united the Greek city-states under Macedonia", "freed all the Greeks", "conquered Persia", "burned Athens"], correctIndex: 0, explanation: "He united Greece under his leadership." },
        { prompt: "Philip II was assassinated in", options: ["336 BCE", "323 BCE", "490 BCE", "146 BCE"], correctIndex: 0, explanation: "He was killed in 336 BCE." },
        { prompt: "Alexander became ruler at the age of", options: ["twenty", "thirty", "forty", "fifteen"], correctIndex: 0, explanation: "He was twenty in 336 BCE." },
        { prompt: "Alexander's great campaign was the conquest of", options: ["the Persian Empire", "Rome", "Carthage", "Egypt only"], correctIndex: 0, explanation: "He conquered Persia and the East." },
        { prompt: "Alexander won a major victory in 333 BCE at", options: ["Issus", "Marathon", "Actium", "Cannae"], correctIndex: 0, explanation: "The Battle of Issus." },
        { prompt: "Alexander broke Persian power decisively at", options: ["Gaugamela (330 BCE)", "Thermopylae", "Salamis", "Zama"], correctIndex: 0, explanation: "Gaugamela, 330 BCE." },
        { prompt: "The Persian capital Alexander sacked and burned was", options: ["Persepolis", "Babylon", "Athens", "Carthage"], correctIndex: 0, explanation: "He burned Persepolis in 330 BCE." },
        { prompt: "Alexander pushed his army as far east as the", options: ["Indus River valley (India)", "Atlantic coast", "Nile delta", "Black Sea"], correctIndex: 0, explanation: "He reached the Indus valley." },
        { prompt: "Alexander died in 323 BCE in the city of", options: ["Babylon", "Athens", "Rome", "Persepolis"], correctIndex: 0, explanation: "He died at Babylon." },
        { prompt: "Alexander was how old when he died?", options: ["thirty-three", "fifty", "sixty", "twenty"], correctIndex: 0, explanation: "He died aged thirty-three." },
        { prompt: "After Alexander's death, his empire was", options: ["divided among his generals", "given to his son", "returned to Persia", "kept as one state"], correctIndex: 0, explanation: "Generals divided it into kingdoms." },
        { prompt: "Which was one of Alexander's generals who took part of the empire?", options: ["Ptolemy", "Pericles", "Hannibal", "Solon"], correctIndex: 0, explanation: "Seleucus, Ptolemy and Antigonus." },
        { prompt: "The division of Alexander's empire opened the", options: ["Hellenistic age", "Dark Age", "Roman Republic", "Middle Ages"], correctIndex: 0, explanation: "It began the Hellenistic period." },
        { prompt: "Who tutored Alexander in his youth?", options: ["Aristotle", "Plato", "Socrates", "Herodotus"], correctIndex: 0, explanation: "Aristotle was Alexander's tutor." },
        { prompt: "Which pair is in the correct order?", options: ["Philip conquered Greece; Alexander conquered Persia", "Alexander conquered Greece; Philip conquered Persia", "Both conquered Rome", "Neither fought Persia"], correctIndex: 0, explanation: "Philip took Greece; Alexander took Persia." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "How did Philip II make Macedonia powerful and conquer Greece?", answerKey: "Philip II (359–336 BCE) built a strong army — farmer-infantry in the phalanx and aristocratic cavalry — and seized Thrace's precious metals. At Chaeronea (338 BCE) he crushed Athens and Thebes and united the Greek city-states under Macedonia. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "List, in order, three of Alexander's conquests or campaigns.", answerKey: "Any three in order: crushed Greek rebellion (Thebes) after 336 BCE; won at Issus (333 BCE); won decisively at Gaugamela (330 BCE) and burned Persepolis; marched to the Indus valley. Award marks for correct events and sequence, up to 4.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Alexander the Great died in 323 BCE in", options: ["Babylon", "Athens", "Rome", "Macedonia"], correctIndex: 0, answerKey: "He died at Babylon, aged 33. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "What happened to Alexander's empire after his death?", answerKey: "He left no strong heir, so his generals (Seleucus, Ptolemy, Antigonus) divided the empire into large kingdoms; this division opened the Hellenistic age. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the rise of Macedonia and the exploits of Alexander the Great, and their importance.", answerKey: "Award marks for: Philip II's army and rise (phalanx, Thrace), 5 marks; the conquest of Greece at Chaeronea (338 BCE) and Philip's assassination, 4 marks; Alexander's Persian campaign (Issus, Gaugamela, Persepolis, the Indus), 7 marks; his death (323 BCE) and the division of the empire, 4 marks; the importance — spreading Greek culture, opening the Hellenistic age, 3 marks; conclusion, 2 marks. Confusing Philip and Alexander caps at 14.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 1, 6.3 The Hellenistic Era (https://openstax.org/books/world-history-volume-1/pages/6-3-the-hellenistic-era)
      slug: "the-hellenistic-age",
      title: "The Hellenistic Age",
      objective:
        "By the end of the topic, learners should be able to describe the Hellenistic age (323–31 BCE), the spread and blending of Greek culture, and its centres of learning and philosophy.",
      estimatedMinutes: 90,
      notes: `## What "Hellenistic" means

- The **Hellenistic period (323–31 BCE)** is the age after Alexander's death.
- "Hellenistic" means **"Greek-like"**: it refers to the flourishing and spread of **Greek language and culture** across the Mediterranean and the Near East.
- The culture that resulted was **neither purely Greek nor purely non-Greek** but a **blend** of the two.

## Spread and blending of culture

- Alexander's successor kingdoms (of **Seleucus, Ptolemy and Antigonus**) spread Greek ways.
- Greeks founded **cities** across the East, each with the marks of Greek life — **temples, theatres and gymnasia**.
- Greek (the **koine** dialect) became a common language of trade and learning, linking many peoples.

## Alexandria: a centre of learning

- **Alexandria** in Egypt, the Ptolemies' capital, became the **largest Hellenistic city**, with perhaps **one million** people.
- The Ptolemies founded the **Museon** (a research institute) and the great **Library of Alexandria**, which held the ancient world's largest collection of books.
- Scholars there advanced **mathematics, astronomy, geography and medicine**.

## Hellenistic philosophy and religion

- New philosophies focused on **personal happiness**:
  - **Stoicism** (founded by **Zeno**) taught that the universe is governed by **divine reason (Logos)** and that happiness comes from **accepting fate** and living virtuously.
  - **Epicureanism** (founded by **Epicurus**) taught the pursuit of **pleasure and the avoidance of pain**, understood as peace of mind.
- **Mystery religions** (such as the worship of **Isis** and **Mithras**) promised eternal life and blended Greek and non-Greek beliefs.

## The end of the age

- The Hellenistic age ended in **31 BCE**, when **Rome** finally absorbed the last major Hellenistic kingdom (Ptolemaic Egypt).

## Common errors and misconceptions

- **Confusing "Hellenic" with "Hellenistic"** — Hellenic = classical Greek; Hellenistic = the later, blended "Greek-like" culture.
- **Thinking it was purely Greek** — it was a **fusion** of Greek and Eastern cultures.
- **Forgetting Alexandria** — its Library and Museon made it the great centre of Hellenistic learning.`,
      workedExample: `**Question:** Describe the main features of the Hellenistic age.

**Solution**

*Step 1 — define it.*
The **Hellenistic age (323–31 BCE)** followed Alexander's death. "Hellenistic" means **"Greek-like"** — the spread of Greek language and culture, blended with Eastern cultures.

*Step 2 — spread of culture.*
Alexander's successor kingdoms founded Greek-style **cities** with **temples, theatres and gymnasia**, and Greek became a common language across the East.

*Step 3 — Alexandria.*
**Alexandria** in Egypt grew to about a million people; its **Museon** and **Library** made it the great centre of learning, advancing mathematics, astronomy and medicine.

*Step 4 — philosophy and religion.*
New philosophies sought personal happiness: **Stoicism** (accept fate, live by reason) and **Epicureanism** (seek pleasure/peace, avoid pain). **Mystery religions** blended Greek and non-Greek beliefs.

**Conclusion:** the Hellenistic age spread a blended "Greek-like" culture across the Mediterranean and Near East, centred on cities like Alexandria, with new philosophies until Rome absorbed it in 31 BCE.`,
      quiz: [
        { prompt: "The Hellenistic period ran from", options: ["323 to 31 BCE", "500 to 323 BCE", "1100 to 800 BCE", "27 BCE to 476 CE"], correctIndex: 0, explanation: "323–31 BCE." },
        { prompt: "'Hellenistic' means", options: ["Greek-like", "Roman", "Persian", "Egyptian"], correctIndex: 0, explanation: "It means 'Greek-like'." },
        { prompt: "The Hellenistic age began with the death of", options: ["Alexander the Great", "Philip II", "Pericles", "Julius Caesar"], correctIndex: 0, explanation: "It began in 323 BCE at Alexander's death." },
        { prompt: "Hellenistic culture was", options: ["a blend of Greek and non-Greek cultures", "purely Greek", "purely Persian", "purely Roman"], correctIndex: 0, explanation: "It fused Greek and Eastern cultures." },
        { prompt: "The largest Hellenistic city was", options: ["Alexandria in Egypt", "Athens", "Rome", "Babylon"], correctIndex: 0, explanation: "Alexandria, up to one million people." },
        { prompt: "The Ptolemies founded a great research institute called the", options: ["Museon", "Academy", "Lyceum", "Senate"], correctIndex: 0, explanation: "The Museon at Alexandria." },
        { prompt: "The famous library of the age was the Library of", options: ["Alexandria", "Athens", "Sparta", "Persepolis"], correctIndex: 0, explanation: "The Library of Alexandria." },
        { prompt: "Greek-style cities in the East featured", options: ["temples, theatres and gymnasia", "pyramids and sphinxes", "ziggurats", "castles"], correctIndex: 0, explanation: "The marks of Greek city life." },
        { prompt: "Stoicism was founded by", options: ["Zeno", "Epicurus", "Plato", "Aristotle"], correctIndex: 0, explanation: "Zeno founded Stoicism." },
        { prompt: "Stoics believed the universe is governed by", options: ["divine reason (Logos)", "blind chance only", "many warring gods", "the Persian king"], correctIndex: 0, explanation: "Stoics taught the Logos and accepting fate." },
        { prompt: "Epicureanism, founded by Epicurus, taught the pursuit of", options: ["pleasure and avoidance of pain (peace of mind)", "endless war", "wealth alone", "self-torture"], correctIndex: 0, explanation: "Epicureans sought pleasure as peace of mind." },
        { prompt: "Mystery religions such as Isis and Mithras worship promised", options: ["eternal life", "military victory only", "cheap grain", "new laws"], correctIndex: 0, explanation: "They promised eternal life." },
        { prompt: "The common Greek dialect that spread as a shared language was", options: ["koine Greek", "Latin", "Aramaic", "Persian"], correctIndex: 0, explanation: "Koine Greek linked many peoples." },
        { prompt: "Alexander's successor kingdoms were ruled by his", options: ["generals (Seleucus, Ptolemy, Antigonus)", "sons", "Persian nobles", "Roman consuls"], correctIndex: 0, explanation: "His generals divided the empire." },
        { prompt: "Hellenistic Alexandria advanced which fields?", options: ["mathematics, astronomy, geography and medicine", "steam power", "gunpowder", "printing"], correctIndex: 0, explanation: "Sciences flourished at Alexandria." },
        { prompt: "The Hellenistic age ended in 31 BCE when it was absorbed by", options: ["Rome", "Persia", "Macedonia", "Egypt"], correctIndex: 0, explanation: "Rome absorbed the last Hellenistic kingdom." },
        { prompt: "The last major Hellenistic kingdom to fall to Rome was", options: ["Ptolemaic Egypt", "Sparta", "Athens", "Carthage"], correctIndex: 0, explanation: "Ptolemaic Egypt fell in 31 BCE." },
        { prompt: "New Hellenistic philosophies focused mainly on", options: ["personal happiness", "military tactics", "farming", "shipbuilding"], correctIndex: 0, explanation: "They sought personal happiness." },
        { prompt: "'Hellenic' differs from 'Hellenistic' in that Hellenic means", options: ["classical Greek", "Greek-like blended culture", "Roman", "Persian"], correctIndex: 0, explanation: "Hellenic = classical Greek; Hellenistic = the later blend." },
        { prompt: "A key legacy of the Hellenistic age was", options: ["the spread of Greek culture and learning across the East", "the fall of Athens", "the founding of Sparta", "the pyramids of Egypt"], correctIndex: 0, explanation: "It spread Greek culture widely." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "What does 'Hellenistic' mean, and what period does it cover?", answerKey: "'Hellenistic' means 'Greek-like' — the flourishing and spread of Greek language and culture, blended with non-Greek cultures. It covers 323–31 BCE, from Alexander's death to Rome's absorption of the last Hellenistic kingdom. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why was Alexandria important in the Hellenistic age?", answerKey: "Alexandria in Egypt was the largest Hellenistic city (up to a million people); the Ptolemies founded the Museon and the great Library, making it the leading centre of learning, advancing mathematics, astronomy, geography and medicine. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Stoicism taught that happiness comes from", options: ["accepting fate and living by reason", "endless pleasure and wealth", "conquering others", "worshipping many gods"], correctIndex: 0, answerKey: "Stoics accepted fate and the Logos. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Contrast Stoicism and Epicureanism.", answerKey: "Stoicism (Zeno) held the universe is governed by divine reason (Logos) and that happiness comes from accepting fate and living virtuously. Epicureanism (Epicurus) taught the pursuit of pleasure and avoidance of pain, understood as peace of mind. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the Hellenistic age and its contribution to culture, learning and thought.", answerKey: "Award marks for: definition and dates (323–31 BCE, 'Greek-like'), 4 marks; the spread and blending of Greek culture through the successor kingdoms and cities, 5 marks; Alexandria, the Museon and Library and Hellenistic science, 6 marks; Hellenistic philosophy (Stoicism, Epicureanism) and mystery religions, 6 marks; the end of the age (Rome, 31 BCE) and legacy, 2 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 1, 6.4 The Roman Republic (https://openstax.org/books/world-history-volume-1/pages/6-4-the-roman-republic), 6.5 The Age of Augustus (https://openstax.org/books/world-history-volume-1/pages/6-5-the-age-of-augustus) and 13.1 The Post-Roman West in the Early Middle Ages (https://openstax.org/books/world-history-volume-1/pages/13-1-the-post-roman-west-in-the-early-middle-ages)
      slug: "rome-origins-republic-empire-fall",
      title: "Rome: Origins, the Republic and Empire, the Barbarian Invasion and the Fall",
      objective:
        "By the end of the topic, learners should be able to explain the mythological and historical origins of Rome, the growth of the republic and empire, the barbarian invasions, and the fall of the western empire.",
      estimatedMinutes: 130,
      notes: `## The origins of Rome

- **Mythological origin:** Roman tradition says Rome was founded in **753 BCE** by the twin brothers **Romulus and Remus**, sons of the god Mars; Romulus killed Remus and named the city.
- **Historical origin:** around **600 BCE** the **Etruscans** ruled Rome. The last Etruscan king, **Tarquin the Proud**, was expelled, and in **509 BCE** the Romans declared a **republic**, vowing never again to be ruled by a king.

## The Roman Republic (509–27 BCE)

- Roman society was split into **patricians** (aristocrats) and **plebeians** (commoners). Their long struggle was the **Struggle of the Orders**.
- Reforms gave the plebeians more rights: the **Twelve Tables** (written laws, 450 BCE); one consul had to be plebeian (after 367 BCE); the Plebeian Assembly could pass laws for all (287 BCE).
- Government: the **Senate** (leading advisers), elected **magistrates** (two **consuls** each year) and popular **assemblies**.
- **Expansion:** Rome conquered Italy and then fought **Carthage** in the **Punic Wars** — First (264–241 BCE), Second (Hannibal, 218–201 BCE, defeated at **Zama, 202 BCE**), and by **146 BCE** Rome dominated the Mediterranean.

## From republic to empire

- Endless war and land problems strained the republic; the **Gracchi** reforms (133 and 121 BCE) were crushed.
- After civil wars, **Octavian** defeated Antony and Cleopatra at **Actium (31 BCE)**; in **27 BCE** the Senate gave him the title **Augustus**, making him the first **emperor**. The republic became "a mere façade for the emergent Roman Empire."
- Augustus began the **Pax Romana** (Roman peace) — about two centuries of relative stability across the empire.

## The barbarian invasions and the fall

- From the third century the empire faced crises and pressure from **Germanic (barbarian) peoples** on its frontiers.
- The **western Roman Empire fell gradually**; historians mark **476 CE**, when the Germanic general **Odoacer deposed the last emperor, Romulus Augustulus**.
- The Germanic peoples did not simply destroy Rome: through **acculturation** they blended with Roman ways, adopting Roman administrative models and (over time) Christianity, forming the successor kingdoms of medieval Europe.
- The eastern empire survived as the **Byzantine Empire**, with its capital at **Constantinople**.

## Common errors and misconceptions

- **Confusing the republic and the empire** — the **republic** (509–27 BCE) had elected consuls and a Senate; the **empire** (from 27 BCE) was ruled by an emperor.
- **Thinking Rome fell in a single day** — the western empire declined **gradually**, marked by 476 CE.
- **Believing the barbarians wiped out Roman civilization** — they **blended** with it, and the Church preserved Roman law and learning.`,
      workedExample: `**Question:** Trace Rome from its origins through the republic and empire to the fall of the west.

**Solution**

*Step 1 — origins.*
By tradition Rome was founded in **753 BCE** by **Romulus and Remus**. Historically, the **Etruscans** ruled until the Romans expelled **Tarquin the Proud** and founded a **republic in 509 BCE**.

*Step 2 — the republic.*
Patricians and plebeians struggled (the **Struggle of the Orders**); reforms brought the **Twelve Tables** and plebeian rights. Rome expanded across Italy and beat **Carthage** in the **Punic Wars** (Zama, 202 BCE), dominating the Mediterranean by **146 BCE**.

*Step 3 — the empire.*
Civil wars ended when **Octavian** won at **Actium (31 BCE)** and became **Augustus (27 BCE)**, the first emperor, starting the **Pax Romana**.

*Step 4 — the fall.*
Pressed by **Germanic peoples**, the western empire declined; in **476 CE** **Odoacer** deposed **Romulus Augustulus**. The Germanic kingdoms blended with Roman ways; the east lived on as the **Byzantine Empire**.

**Conclusion:** Rome grew from a small city to a republic and then an empire ruling the Mediterranean, before the western empire fell gradually in 476 CE and gave way to the medieval world.`,
      quiz: [
        { prompt: "By tradition, Rome was founded in", options: ["753 BCE", "509 BCE", "27 BCE", "476 CE"], correctIndex: 0, explanation: "Traditionally 753 BCE." },
        { prompt: "The legendary twin founders of Rome were", options: ["Romulus and Remus", "Castor and Pollux", "Cyrus and Darius", "Philip and Alexander"], correctIndex: 0, explanation: "Romulus and Remus." },
        { prompt: "Before the republic, Rome was ruled by the", options: ["Etruscans", "Greeks", "Persians", "Carthaginians"], correctIndex: 0, explanation: "The Etruscans ruled early Rome." },
        { prompt: "The Roman Republic was declared in", options: ["509 BCE", "753 BCE", "27 BCE", "146 BCE"], correctIndex: 0, explanation: "The republic began in 509 BCE." },
        { prompt: "Roman society was divided into patricians and", options: ["plebeians", "helots", "satraps", "vassals"], correctIndex: 0, explanation: "Patricians (nobles) and plebeians (commoners)." },
        { prompt: "The struggle between the two classes was the", options: ["Struggle of the Orders", "Peloponnesian War", "Punic War", "Reformation"], correctIndex: 0, explanation: "The Struggle of the Orders." },
        { prompt: "Rome's first written laws were the", options: ["Twelve Tables (450 BCE)", "Hammurabi's Code", "Edict of Milan", "Magna Carta"], correctIndex: 0, explanation: "The Twelve Tables, 450 BCE." },
        { prompt: "Each year the republic elected two", options: ["consuls", "kings", "emperors", "popes"], correctIndex: 0, explanation: "Two consuls led the republic." },
        { prompt: "Rome's great rival in the Punic Wars was", options: ["Carthage", "Persia", "Macedonia", "Egypt"], correctIndex: 0, explanation: "Rome fought Carthage." },
        { prompt: "The Carthaginian general who invaded Italy was", options: ["Hannibal", "Alexander", "Sargon", "Cyrus"], correctIndex: 0, explanation: "Hannibal, in the Second Punic War." },
        { prompt: "Rome defeated Hannibal in 202 BCE at the Battle of", options: ["Zama", "Marathon", "Actium", "Chaeronea"], correctIndex: 0, explanation: "The Battle of Zama." },
        { prompt: "By which date did Rome dominate the Mediterranean?", options: ["146 BCE", "753 BCE", "476 CE", "27 BCE"], correctIndex: 0, explanation: "By 146 BCE." },
        { prompt: "Octavian defeated Antony and Cleopatra in 31 BCE at", options: ["Actium", "Zama", "Cannae", "Salamis"], correctIndex: 0, explanation: "The Battle of Actium." },
        { prompt: "Octavian became the first emperor with the title", options: ["Augustus (27 BCE)", "Caesar the Great", "Pontifex", "Consul for life"], correctIndex: 0, explanation: "He became Augustus in 27 BCE." },
        { prompt: "The long peace Augustus began is called the", options: ["Pax Romana", "Pax Britannica", "Hellenistic age", "Dark Age"], correctIndex: 0, explanation: "The Pax Romana (Roman peace)." },
        { prompt: "The western Roman Empire is said to have fallen in", options: ["476 CE", "27 BCE", "146 BCE", "800 CE"], correctIndex: 0, explanation: "476 CE." },
        { prompt: "The last western emperor, deposed in 476 CE, was", options: ["Romulus Augustulus", "Augustus", "Constantine", "Nero"], correctIndex: 0, explanation: "Odoacer deposed Romulus Augustulus." },
        { prompt: "The Germanic peoples mostly", options: ["blended with Roman ways (acculturation)", "destroyed all Roman civilization", "left Europe entirely", "converted to Islam"], correctIndex: 0, explanation: "They blended with Roman culture." },
        { prompt: "The eastern empire survived as the", options: ["Byzantine Empire", "Persian Empire", "Holy Roman Empire", "Ottoman Empire"], correctIndex: 0, explanation: "The Byzantine Empire, capital Constantinople." },
        { prompt: "The republic differed from the empire in that the republic had", options: ["elected consuls and a Senate, not an emperor", "one emperor from the start", "no government", "a pharaoh"], correctIndex: 0, explanation: "The republic elected consuls; the empire had an emperor." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish the mythological and historical origins of Rome.", answerKey: "Mythological: Rome was founded in 753 BCE by the twins Romulus and Remus, sons of Mars, Romulus killing Remus. Historical: the Etruscans ruled Rome from about 600 BCE until the Romans expelled Tarquin the Proud and founded the republic in 509 BCE. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe two features of the Roman Republic's government or the Struggle of the Orders.", answerKey: "Any two: patricians vs plebeians (Struggle of the Orders); the Twelve Tables (written law, 450 BCE); two elected consuls each year; the Senate and assemblies; plebeian gains (one plebeian consul after 367 BCE; Plebeian Assembly laws for all, 287 BCE). Award 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Octavian became the first Roman emperor, with the title Augustus, in", options: ["27 BCE", "509 BCE", "476 CE", "146 BCE"], correctIndex: 0, answerKey: "27 BCE, beginning the empire and Pax Romana. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain how the western Roman Empire fell.", answerKey: "It declined gradually under crises and Germanic (barbarian) pressure; historians mark 476 CE, when the Germanic general Odoacer deposed the last emperor Romulus Augustulus. The Germanic peoples blended with Roman ways (acculturation); the east survived as the Byzantine Empire. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Trace the history of Rome from its origins through the republic and empire to the fall of the western empire.", answerKey: "Award marks for: mythological and historical origins (753 BCE; Etruscans; republic 509 BCE), 5 marks; the republic — Struggle of the Orders, Twelve Tables, consuls/Senate, Punic Wars and expansion, 7 marks; the change to empire (civil wars, Actium, Augustus 27 BCE, Pax Romana), 6 marks; barbarian invasions and the fall (476 CE, acculturation, Byzantine survival), 5 marks; conclusion, 2 marks. Confusing republic and empire caps at 14.", marks: 25 },
      ],
    },
    {
      // source: LibreTexts — Western Civilization: A Concise History I (Brooks), 9.8 Greco-Roman Culture (https://human.libretexts.org/Bookshelves/History/World_History/Western_Civilization_-_A_Concise_History_I_(Brooks)/09:_The_Roman_Republic/9.08:_Greco-Roman_Culture) and OpenStax World History Volume 1, 6.5 The Age of Augustus (https://openstax.org/books/world-history-volume-1/pages/6-5-the-age-of-augustus)
      slug: "roman-achievements-and-contributions",
      title: "Roman Achievements and Contribution to Western Civilization",
      objective:
        "By the end of the topic, learners should be able to analyse Rome's lasting contributions to Western civilization — law, government, engineering, the Latin language and the spread of classical culture.",
      estimatedMinutes: 100,
      notes: `## Rome's lasting gifts to the West

Rome's greatest legacy was not conquest but the **law, government, engineering, language and culture** it passed to later Europe.

## Law and government

- Rome developed a great tradition of **written law**, beginning with the **Twelve Tables (450 BCE)** and growing into a vast **legal system** that later shaped European and world law.
- Roman ideas of the **republic**, elected officials, the **Senate** and citizenship influenced later governments.
- Under Augustus, Rome extended **citizenship** to provincials ("Romanization"), binding a huge empire together.

## Engineering and building

- Roman engineers built **roads** across the empire (that helped move armies, trade and ideas) — "all roads lead to Rome."
- They pioneered the use of **concrete**, the **arch** and the **dome**, and built **aqueducts** to carry water, **bridges**, **public baths** and great buildings (the Colosseum, the Pantheon).
- Augustus carried out "a vast building program" and set up a permanent **police force** and **fire department** in Rome.

## Language, literature and the calendar

- The **Latin language** became the language of law, learning and the Church, and is the parent of the **Romance languages** (Italian, French, Spanish, Portuguese, Romanian) and a huge part of English vocabulary.
- Roman literature, the **Latin alphabet** and the **Julian calendar** shaped Western culture.

## Preserving and spreading classical culture

- Rome absorbed and spread **Greek** philosophy, art and science across its empire — the blended **Greco-Roman** culture.
- The Roman **Church** later became "the preserver of classical Greek and Roman law, literature, and philosophical ideas," carrying them into the Middle Ages.

## The Pax Romana

- The **Pax Romana** (Roman peace) gave about two centuries of stability in which trade, cities and culture flourished across the Mediterranean.

## Common errors and misconceptions

- **Thinking Rome's only contribution was conquest** — its lasting gifts were **law, government, engineering and language**.
- **Forgetting Latin** — it is the parent of the Romance languages and shaped English and the Church.
- **Ignoring engineering** — roads, aqueducts, concrete and the arch were Roman achievements still visible today.`,
      workedExample: `**Question:** Discuss Rome's main contributions to Western civilization.

**Solution**

*Step 1 — law and government.*
Rome created a great tradition of **written law** (from the **Twelve Tables**) and ideas of the **republic**, the **Senate** and **citizenship** that shaped later European government.

*Step 2 — engineering.*
Roman engineers built **roads**, **aqueducts**, **bridges** and great buildings using **concrete** and the **arch** — infrastructure that united the empire and still stands today.

*Step 3 — language and culture.*
The **Latin language** became the tongue of law, learning and the Church, and is the parent of the **Romance languages**. Rome also spread **Greek** learning as blended **Greco-Roman** culture, and the **Church** preserved classical law and literature into the Middle Ages.

*Step 4 — the Pax Romana.*
The **Pax Romana** gave two centuries of peace in which trade and culture flourished.

**Conclusion:** Rome's lasting contribution to the West was its law and government, its engineering, the Latin language, and the preservation and spread of classical Greco-Roman culture.`,
      quiz: [
        { prompt: "Rome's greatest legacy to the West was mainly its", options: ["law, government, engineering and language", "pyramids", "monsoon trade", "cuneiform"], correctIndex: 0, explanation: "Law, government, engineering and language." },
        { prompt: "Rome's tradition of written law began with the", options: ["Twelve Tables (450 BCE)", "Edict of Milan", "Magna Carta", "Code of Hammurabi"], correctIndex: 0, explanation: "The Twelve Tables started Roman written law." },
        { prompt: "Roman roads helped to move", options: ["armies, trade and ideas", "only water", "only kings", "nothing"], correctIndex: 0, explanation: "Roads connected the empire." },
        { prompt: "A Roman building material that was a major innovation was", options: ["concrete", "plastic", "steel", "aluminium"], correctIndex: 0, explanation: "Romans pioneered concrete." },
        { prompt: "Roman structures that carried water were called", options: ["aqueducts", "ziggurats", "qanats", "dhows"], correctIndex: 0, explanation: "Aqueducts carried water." },
        { prompt: "Two Roman architectural forms were the", options: ["arch and the dome", "phalanx and the trireme", "pyramid and the sphinx", "stela and the obelisk"], correctIndex: 0, explanation: "The arch and dome." },
        { prompt: "The language Rome gave to law, learning and the Church was", options: ["Latin", "Greek", "Aramaic", "Persian"], correctIndex: 0, explanation: "Latin." },
        { prompt: "Latin is the parent of the ___ languages.", options: ["Romance (Italian, French, Spanish...)", "Bantu", "Germanic only", "Slavic only"], correctIndex: 0, explanation: "The Romance languages descend from Latin." },
        { prompt: "Extending citizenship to provincials was part of Rome's policy of", options: ["Romanization", "colonization of the moon", "isolation", "deportation"], correctIndex: 0, explanation: "Romanization bound the empire together." },
        { prompt: "Rome spread which older culture across its empire?", options: ["Greek (Greco-Roman culture)", "Chinese", "Persian only", "Egyptian only"], correctIndex: 0, explanation: "Rome blended and spread Greek culture." },
        { prompt: "The Roman Church later preserved", options: ["classical Greek and Roman law, literature and philosophy", "nothing of the past", "only Egyptian religion", "Persian coinage"], correctIndex: 0, explanation: "The Church preserved classical learning." },
        { prompt: "The Pax Romana was a period of", options: ["about two centuries of relative peace and stability", "constant civil war", "foreign occupation", "famine"], correctIndex: 0, explanation: "The Roman peace lasted roughly two centuries." },
        { prompt: "The Julian ___ was a Roman contribution.", options: ["calendar", "alphabet only", "religion", "coin"], correctIndex: 0, explanation: "The Julian calendar." },
        { prompt: "The saying 'all roads lead to Rome' reflects Rome's", options: ["road network", "navy", "religion", "philosophy"], correctIndex: 0, explanation: "Rome's roads all connected to the capital." },
        { prompt: "Augustus set up in Rome a permanent", options: ["police force and fire department", "stock exchange", "university", "printing press"], correctIndex: 0, explanation: "Augustus created a police force and fire brigade." },
        { prompt: "Roman law influenced", options: ["later European and world legal systems", "only Roman citizens forever", "no later law", "African monsoon trade"], correctIndex: 0, explanation: "Roman law shaped later legal systems." },
        { prompt: "'Greco-Roman' culture means a blend of", options: ["Greek and Roman culture", "German and Roman law", "Persian and Greek religion", "Egyptian and Greek art"], correctIndex: 0, explanation: "Greek ideas blended with Roman order." },
        { prompt: "A famous Roman building was the", options: ["Colosseum", "Parthenon", "ziggurat of Ur", "Great Wall"], correctIndex: 0, explanation: "The Colosseum (and Pantheon) are Roman." },
        { prompt: "English vocabulary contains a large share of words from", options: ["Latin", "Sumerian", "Bantu", "Persian"], correctIndex: 0, explanation: "Much English comes from Latin." },
        { prompt: "A common error is to think Rome's only contribution was", options: ["military conquest", "written law", "engineering", "the Latin language"], correctIndex: 0, explanation: "Its lasting gifts went far beyond conquest." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State two Roman contributions in law/government and two in engineering.", answerKey: "Law/government (any two): written law from the Twelve Tables; the republic/Senate/elected consuls; citizenship and Romanization. Engineering (any two): roads; aqueducts; concrete; the arch and dome; bridges/public baths/great buildings. Award 1 mark each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why is the Latin language an important Roman contribution?", answerKey: "Latin became the language of law, learning and the Church; it is the parent of the Romance languages (Italian, French, Spanish, Portuguese, Romanian) and supplied much English vocabulary and the Latin alphabet. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The Pax Romana was", options: ["about two centuries of relative peace and stability", "a Roman civil war", "a Greek philosophy", "a barbarian kingdom"], correctIndex: 0, answerKey: "The Roman peace under the empire. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "How did Rome help preserve and spread classical culture?", answerKey: "Rome absorbed and spread Greek philosophy, art and science across its empire as blended Greco-Roman culture; later the Roman Church became the preserver of classical Greek and Roman law, literature and philosophy, carrying them into the Middle Ages. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Analyse Rome's contribution to Western civilization.", answerKey: "Award marks for: law and government (written law, republic, Senate, citizenship/Romanization), 7 marks; engineering (roads, aqueducts, concrete, arch, buildings), 6 marks; the Latin language and its legacy, 5 marks; preserving and spreading Greco-Roman culture via the Church, 4 marks; the Pax Romana as the setting, 1 mark; conclusion, 2 marks. Listing without discussion should not exceed 12.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 1, 13.1 The Post-Roman West in the Early Middle Ages (https://openstax.org/books/world-history-volume-1/pages/13-1-the-post-roman-west-in-the-early-middle-ages)
      slug: "christianity-and-the-empire",
      title: "Christianity and the Empire",
      objective:
        "By the end of the topic, learners should be able to explain how Christianity spread within the Roman Empire, its adoption by the state under Constantine, and the impact of the Church on the Germanic conquerors.",
      estimatedMinutes: 100,
      notes: `## Christianity within the Roman Empire

- Christianity began in the eastern Roman province of **Judea** in the first century CE and spread through the empire's cities along Roman **roads** and using the common **Greek** language.
- At first Christianity "developed in an atmosphere of **antagonism to the Roman state**": Christians were a persecuted minority who refused to worship the emperor.

## Constantine and the state's turn to Christianity

- The turning point came with the emperor **Constantine** in the **fourth century CE**. From his time "the government advocated **monotheism**, the worship of one God to the exclusion of others."
- Christianity moved from a persecuted faith to the **favoured, then official, religion** of the empire.
- Constantine founded a new capital, **Constantinople**, in the eastern Mediterranean; with a Christian government there, the **Byzantine Empire** grew out of the old Roman state.

## The Church as preserver and unifier

- By the fifth century, though it had begun in opposition to Rome, "the church had become the **preserver of classical Greek and Roman law, literature, and philosophical ideas**."
- As the western empire fell, the **Church** kept alive Roman learning, law and organisation.

## The impact of the Church on the Germanic conquerors

- Christian **missionaries** converted the Germanic peoples who settled the western empire — for example, **Augustine of Canterbury** among the Anglo-Saxons.
- **Conversion reduced the differences** between conquerors and conquered, helping them blend (acculturation).
- Christian **queens** such as **Clothilde** and **Bertha** influenced their husbands to accept Christianity, speeding its spread.
- The Church gave the new Germanic kingdoms a shared religion, Latin learning and Roman administrative models — laying a foundation for medieval Europe.

## Common errors and misconceptions

- **Thinking Christianity was always favoured by Rome** — it began as a **persecuted** faith opposed to the Roman state.
- **Crediting the whole change to force** — much of the Germanic conversion came through **missionaries and royal marriages**, not only conquest.
- **Forgetting the Church's preserving role** — it kept classical Greek and Roman law, literature and philosophy alive as the western empire fell.`,
      workedExample: `**Question:** Explain how Christianity went from a persecuted faith to the religion of the empire, and its impact on the Germanic conquerors.

**Solution**

*Step 1 — early Christianity.*
Christianity began in **Judea** in the first century CE and spread through the empire's cities along Roman roads. At first it grew "in an atmosphere of **antagonism to the Roman state**," and Christians were **persecuted** for refusing to worship the emperor.

*Step 2 — Constantine's turn.*
In the **fourth century**, the emperor **Constantine** made the government favour **monotheism**. Christianity became the **favoured and then official** religion, and Constantine founded **Constantinople**, from which the **Byzantine Empire** grew.

*Step 3 — the Church preserves classical culture.*
By the fifth century the Church had become "the **preserver of classical Greek and Roman law, literature, and philosophical ideas**," keeping them alive as the western empire fell.

*Step 4 — impact on the Germanic peoples.*
**Missionaries** (like **Augustine of Canterbury**) and Christian **queens** (Clothilde, Bertha) converted the Germanic kingdoms; conversion **reduced differences** between conquerors and conquered and gave the new kingdoms a shared faith and Roman learning.

**Conclusion:** Christianity rose from persecution to become the empire's religion under Constantine, preserved classical culture, and — by converting the Germanic conquerors — helped shape the coming medieval Europe.`,
      quiz: [
        { prompt: "Christianity began in which Roman province?", options: ["Judea", "Gaul", "Hispania", "Egypt"], correctIndex: 0, explanation: "It began in Judea in the first century CE." },
        { prompt: "Christianity spread through the empire using Roman roads and the common", options: ["Greek language", "Latin only", "Persian language", "Bantu language"], correctIndex: 0, explanation: "Koine Greek helped it spread." },
        { prompt: "At first, Christianity grew in an atmosphere of", options: ["antagonism to the Roman state", "official support", "royal marriage", "indifference"], correctIndex: 0, explanation: "It began opposed to the Roman state." },
        { prompt: "Early Christians were a", options: ["persecuted minority", "ruling class", "military elite", "merchant guild"], correctIndex: 0, explanation: "They were persecuted for refusing emperor-worship." },
        { prompt: "The emperor who turned the state toward Christianity was", options: ["Constantine", "Augustus", "Nero", "Odoacer"], correctIndex: 0, explanation: "Constantine, in the fourth century." },
        { prompt: "From Constantine's time the government advocated", options: ["monotheism (worship of one God)", "many gods", "no religion", "emperor-worship only"], correctIndex: 0, explanation: "It favoured monotheism." },
        { prompt: "Constantine founded a new capital called", options: ["Constantinople", "Alexandria", "Carthage", "Ravenna"], correctIndex: 0, explanation: "Constantinople, in the east." },
        { prompt: "The Christian state in the east grew into the", options: ["Byzantine Empire", "Persian Empire", "Holy Roman Empire", "Ottoman Empire"], correctIndex: 0, explanation: "The Byzantine Empire." },
        { prompt: "By the fifth century the Church had become the preserver of", options: ["classical Greek and Roman law, literature and philosophy", "Egyptian religion", "Persian coinage", "Bantu languages"], correctIndex: 0, explanation: "It preserved classical learning." },
        { prompt: "Christian missionaries mainly worked to", options: ["convert the Germanic peoples", "build roads", "collect taxes", "train soldiers"], correctIndex: 0, explanation: "They converted the Germanic kingdoms." },
        { prompt: "A missionary among the Anglo-Saxons was", options: ["Augustine of Canterbury", "Constantine", "Odoacer", "Zeno"], correctIndex: 0, explanation: "Augustine of Canterbury." },
        { prompt: "Conversion to Christianity helped by", options: ["reducing differences between conquerors and conquered", "starting new wars", "ending all trade", "dividing the kingdoms"], correctIndex: 0, explanation: "Shared faith aided blending (acculturation)." },
        { prompt: "Christian queens who influenced their husbands to convert included", options: ["Clothilde and Bertha", "Cleopatra and Nefertiti", "Amina and Makeda", "Livia and Julia"], correctIndex: 0, explanation: "Queens Clothilde and Bertha." },
        { prompt: "The Church gave the Germanic kingdoms", options: ["a shared religion, Latin learning and Roman administrative models", "gunpowder", "the printing press", "steam engines"], correctIndex: 0, explanation: "Shared faith, Latin learning and Roman models." },
        { prompt: "A common error is to think Christianity was", options: ["always favoured by Rome", "once persecuted", "spread by missionaries", "adopted under Constantine"], correctIndex: 0, explanation: "It began persecuted, not favoured." },
        { prompt: "Much of the Germanic conversion came through", options: ["missionaries and royal marriages", "force alone", "trade fairs", "sea voyages"], correctIndex: 0, explanation: "Missionaries and Christian queens, not only conquest." },
        { prompt: "The Church's preserving role mattered because it", options: ["kept classical law and learning alive as the empire fell", "destroyed old books", "banned reading", "rejected Roman law"], correctIndex: 0, explanation: "It preserved classical culture." },
        { prompt: "Christianity's shift under Constantine took place in the", options: ["fourth century CE", "first century BCE", "tenth century CE", "eighth century BCE"], correctIndex: 0, explanation: "The fourth century CE." },
        { prompt: "Christianity is a form of", options: ["monotheism (belief in one God)", "polytheism", "emperor-worship", "atheism"], correctIndex: 0, explanation: "It teaches one God." },
        { prompt: "The link between Christianity and the coming Middle Ages was that the Church", options: ["helped shape the new Germanic kingdoms of medieval Europe", "ended all religion", "restored the republic", "conquered Persia"], correctIndex: 0, explanation: "It helped found medieval Europe." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "How did early Christianity relate to the Roman state before Constantine?", answerKey: "Christianity began in Judea and spread through the empire's cities along Roman roads and in Greek; at first it grew in antagonism to the Roman state, and Christians were a persecuted minority who refused to worship the emperor. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain Constantine's importance for Christianity.", answerKey: "In the fourth century the emperor Constantine turned the government toward monotheism/Christianity, moving it from persecution to the favoured then official religion; he founded Constantinople, from which the Christian Byzantine Empire grew. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "By the fifth century the Church had become the preserver of", options: ["classical Greek and Roman law, literature and philosophy", "Persian coinage", "Egyptian religion", "Bantu languages"], correctIndex: 0, answerKey: "It preserved classical learning. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Describe two ways the Church affected the Germanic conquerors.", answerKey: "Any two: missionaries (e.g. Augustine of Canterbury) converted them; conversion reduced differences between conquerors and conquered (acculturation); Christian queens (Clothilde, Bertha) influenced their husbands to convert; the Church gave the kingdoms a shared religion, Latin learning and Roman administrative models. Award 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the spread of Christianity within the Roman Empire and its impact on the Empire and the Germanic peoples.", answerKey: "Award marks for: early Christianity's origins and persecution/antagonism to Rome, 6 marks; Constantine's turn to monotheism, the move to official religion, and Constantinople/Byzantine Empire, 7 marks; the Church as preserver of classical law and learning, 4 marks; the conversion and acculturation of the Germanic peoples (missionaries, queens), 6 marks; conclusion, 2 marks. Treating Christianity as always favoured by Rome caps the mark at 14.", marks: 25 },
      ],
    },
  ],
};
