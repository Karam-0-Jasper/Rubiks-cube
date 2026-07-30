import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 10, Semester One, Period III: African Drama — its nature, origins and
// features, and the study of an African play.
export const literatureG10P3: PeriodContent = {
  grade: 10,
  number: 3,
  title: "African Drama",
  summary:
    "Period III of the MoE Grade 10 Literature syllabus. Learners study African drama — its roots in ritual, festival and oral tradition, its distinctive features, and its major playwrights — and apply the tools of dramatic analysis to the themes and characters of an African play.",
  topics: [
    {
      slug: "nature-of-african-drama",
      title: "The Nature and Origins of African Drama",
      objective:
        "By the end of the topic, learners should be able to explain what African drama is, describe its origins in ritual, festival and oral tradition, identify its distinctive features, and name major African playwrights.",
      estimatedMinutes: 150,
      notes: `## What is African drama?

**Drama** is literature written to be **performed** by actors before an audience (studied in Period I). **African drama** is drama written by African playwrights, often rooted in African life, culture and traditions, and usually exploring African experiences and concerns.

## The origins of African drama

African drama did not begin with the written play. It grew out of **performance traditions** that are centuries old:

- **Ritual and religion** — ceremonies for the gods, the ancestors, birth, initiation, marriage and death often used **acting, chanting and mime**.
- **Festivals** — harvest, masquerade and community festivals featured **masked dancers, music and dramatic display**.
- **Oral tradition (storytelling)** — the **griot** or storyteller performed tales with voice, gesture and audience response.

These traditions supplied the **performance, music, dance, masks and audience participation** that give African drama its distinctive flavour, long before plays were written down.

## Distinctive features of African drama

African plays often show features drawn from these roots:

- **Music, song and dance** woven into the action, not just added on.
- **Use of proverbs, folktales and local languages or expressions.**
- **Masks and costume** with symbolic meaning.
- **The community and the chorus** — the group, not just the individual, matters.
- **Audience participation** — the audience may respond, sing or comment.
- **Themes drawn from African life** — tradition versus modernity, colonialism, corruption, culture and community.

## Major African playwrights

- **Wole Soyinka** (Nigeria) — the first African to win the Nobel Prize in Literature; author of *The Lion and the Jewel* and *Death and the King's Horseman*.
- **John Pepper Clark** (Nigeria) — author of *Song of a Goat*.
- **Ama Ata Aidoo** (Ghana) — author of *The Dilemma of a Ghost*.
- **Athol Fugard** (South Africa) — plays about apartheid.
- **Efua Sutherland** (Ghana) — a pioneer of Ghanaian theatre.

## Why African drama matters

African drama gives African writers a way to tell their **own stories in their own voice**, drawing on indigenous performance traditions rather than only European models. It preserves culture, examines society, and entertains — carrying the community's concerns onto the stage.`,
      workedExample: `**Task.** A student says, "African drama is just European drama written by Africans." Explain why this is wrong, and describe three features that make African drama distinctive.

**Why the statement is wrong**
African drama is **not** merely European drama in African hands. It grows out of **African performance traditions** — ritual, festival and oral storytelling — that are centuries older than the written African play. These roots give it features that European drama does not share.

**Three distinctive features**

1. **Music, song and dance woven into the action.** In much African drama, singing, drumming and dancing are **part of the story itself**, reflecting the festivals and ceremonies the tradition came from — not just decoration added to the play.

2. **Use of proverbs, folktales and oral tradition.** African plays often draw on **proverbs, myths and the storyteller (griot) tradition**, so wisdom and meaning are carried in traditional forms. Characters may speak in proverbs, as elders do in real African communities.

3. **Community and audience participation.** African drama frequently emphasises the **community and the chorus** rather than only the lone hero, and the **audience may respond, sing or comment**, echoing the shared, participatory nature of festival and ritual performance.

**Conclusion:** because it springs from indigenous ritual, festival and oral traditions — bringing music, proverbs, masks and community participation to the stage — African drama has its own character, and is far more than "European drama written by Africans."`,
      teachingTip:
        "Learners tend to treat 'drama' as purely European (Shakespeare from Period I). Counter this by starting with performance they know — a local masquerade, festival or storytelling session — and drawing out the dramatic elements (acting, music, masks, audience) already present. That makes the leap to written African drama natural and shows the tradition is homegrown, not borrowed.",
      quiz: [
        {
          prompt: "Drama is literature written to be…",
          options: ["performed before an audience", "read silently only", "sung as a hymn", "printed in newspapers"],
          correctIndex: 0,
          explanation: "Drama is meant to be acted for an audience.",
        },
        {
          prompt: "African drama is drama written by African playwrights, often rooted in…",
          options: ["African life and culture", "European myths only", "science reports", "news bulletins"],
          correctIndex: 0,
          explanation: "It draws on African life, culture and experience.",
        },
        {
          prompt: "African drama grew out of traditions that used…",
          options: ["ritual, festival and storytelling", "only printed books", "television only", "silent reading"],
          correctIndex: 0,
          explanation: "Ritual, festival and oral tradition are its roots.",
        },
        {
          prompt: "A traditional African storyteller is often called a…",
          options: ["griot", "playwright", "chorus", "protagonist"],
          correctIndex: 0,
          explanation: "The griot performed tales with voice and gesture.",
        },
        {
          prompt: "Which is a distinctive feature of African drama?",
          options: [
            "music, song and dance woven into the action",
            "no audience at all",
            "only one actor allowed",
            "no use of language",
          ],
          correctIndex: 0,
          explanation: "Music, song and dance are integral, not just decoration.",
        },
        {
          prompt: "African drama often uses which traditional form of wisdom?",
          options: ["proverbs", "algebra", "maps", "graphs"],
          correctIndex: 0,
          explanation: "Proverbs and folktales carry meaning in African plays.",
        },
        {
          prompt: "The first African to win the Nobel Prize in Literature was…",
          options: ["Wole Soyinka", "Chinua Achebe", "Athol Fugard", "Ama Ata Aidoo"],
          correctIndex: 0,
          explanation: "Wole Soyinka won the Nobel Prize in 1986.",
        },
        {
          prompt: "Wole Soyinka is from which country?",
          options: ["Nigeria", "Ghana", "South Africa", "Kenya"],
          correctIndex: 0,
          explanation: "Soyinka is a Nigerian playwright.",
        },
        {
          prompt: "Masks in African drama usually carry…",
          options: ["symbolic meaning", "no meaning", "only decoration", "advertisements"],
          correctIndex: 0,
          explanation: "Masks and costume have symbolic significance.",
        },
        {
          prompt: "In much African drama, the group or community is shown through the…",
          options: ["chorus", "single hero only", "narrator alone", "stage lights"],
          correctIndex: 0,
          explanation: "The chorus/community is emphasised, not just the individual.",
        },
        {
          prompt: "Audience participation in African drama means the audience may…",
          options: ["respond, sing or comment", "stay completely silent always", "leave the theatre", "write the play"],
          correctIndex: 0,
          explanation: "Audiences often take part in the performance.",
        },
        {
          prompt: "Which is a common theme of African drama?",
          options: ["tradition versus modernity", "the periodic table", "algebra", "the water cycle"],
          correctIndex: 0,
          explanation: "Tradition vs modernity, colonialism and corruption are common themes.",
        },
        {
          prompt: "Athol Fugard's plays are especially concerned with…",
          options: ["apartheid in South Africa", "ancient Egypt", "space travel", "the French Revolution"],
          correctIndex: 0,
          explanation: "Fugard wrote about apartheid.",
        },
        {
          prompt: "The play 'The Lion and the Jewel' was written by…",
          options: ["Wole Soyinka", "William Shakespeare", "Ama Ata Aidoo", "John Pepper Clark"],
          correctIndex: 0,
          explanation: "Soyinka wrote The Lion and the Jewel.",
        },
        {
          prompt: "'The Dilemma of a Ghost' was written by…",
          options: ["Ama Ata Aidoo", "Wole Soyinka", "Athol Fugard", "Efua Sutherland"],
          correctIndex: 0,
          explanation: "Ama Ata Aidoo of Ghana wrote it.",
        },
        {
          prompt: "African drama existed, in performance form, before…",
          options: ["plays were written down", "any people lived", "music was invented", "festivals began"],
          correctIndex: 0,
          explanation: "Ritual and festival performance predate the written play.",
        },
        {
          prompt: "The statement 'African drama is just European drama' is wrong because African drama…",
          options: [
            "grows from indigenous performance traditions",
            "has no actors",
            "is never performed",
            "uses no themes",
          ],
          correctIndex: 0,
          explanation: "Its ritual, festival and oral roots make it distinctive.",
        },
        {
          prompt: "Which festival performance form is a root of African drama?",
          options: ["masked dance/masquerade", "silent reading circles", "written exams", "newspaper printing"],
          correctIndex: 0,
          explanation: "Masquerades and festival displays are dramatic roots.",
        },
        {
          prompt: "African drama helps writers to tell their stories in their…",
          options: ["own voice and culture", "only European style", "only in English poetry", "without any culture"],
          correctIndex: 0,
          explanation: "It lets African writers use their own voice and traditions.",
        },
        {
          prompt: "John Pepper Clark wrote which play?",
          options: ["Song of a Goat", "The Lion and the Jewel", "The Dilemma of a Ghost", "A Midsummer Night's Dream"],
          correctIndex: 0,
          explanation: "Clark wrote Song of a Goat.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "State three traditions from which African drama grew.",
          answerKey:
            "Ritual/religious ceremonies; festivals (e.g. masquerades, harvest festivals); oral tradition/storytelling (the griot). Award a mark per correct tradition (max 3).",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name two major African playwrights and one play by each.",
          answerKey:
            "Accept any two valid pairs: Wole Soyinka – The Lion and the Jewel / Death and the King's Horseman; John Pepper Clark – Song of a Goat; Ama Ata Aidoo – The Dilemma of a Ghost; Athol Fugard – an apartheid play. Award a mark per correct playwright + play pairing.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which feature is characteristic of African drama?",
          options: [
            "music, dance and audience participation",
            "no music or dance at all",
            "a ban on proverbs",
            "a single silent actor",
          ],
          correctIndex: 0,
          answerKey: "African drama typically integrates music, dance and audience participation.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Discuss the distinctive features of African drama and explain how they grow out of traditional African performance.",
          answerKey:
            "A strong answer identifies features such as integrated music, song and dance; the use of proverbs, folktales and local languages; symbolic masks and costume; emphasis on community and the chorus; audience participation; and themes from African life (tradition vs modernity, colonialism, corruption). It explains that these arise from the roots of African drama in ritual, festival (masquerade) and oral storytelling traditions — where performance, music, masks and communal participation were already present before plays were written down. Award marks for at least three features clearly linked to their traditional origins.",
          marks: 6,
        },
      ],
    },
    {
      slug: "studying-an-african-play",
      title: "Studying an African Play: Theme and Character",
      objective:
        "By the end of the topic, learners should be able to apply the elements of drama to an African play, identify its major themes, analyse how character and conflict develop those themes, and support their views with reference to the text.",
      estimatedMinutes: 150,
      notes: `## Applying the tools of drama

In Periods I and II, learners met the **elements of drama** (plot, character, conflict, theme, dialogue) and **characterisation**. Studying an African play means using those tools on a full African text — for example Wole Soyinka's *The Lion and the Jewel* or Ama Ata Aidoo's *The Dilemma of a Ghost*.

## Theme

A **theme** is the **central idea or message** a play explores. African plays commonly explore themes such as:

- **Tradition versus modernity** — the clash between old ways and new, "Western" ways.
- **Colonialism and its effects** — how foreign rule changed African societies.
- **Corruption and the abuse of power.**
- **Culture, identity and community** — the value of African values and belonging.
- **The role and status of women.**

A play may explore **more than one theme** at once.

## How theme is developed

A playwright does not simply state a theme; it emerges through:

- **Character** — what the characters value and how they behave (e.g. a "modern" character versus a "traditional" one).
- **Conflict** — the clash between characters or forces dramatises the theme.
- **Plot** — the events, and especially the ending, show the play's attitude to the theme.
- **Dialogue** — what characters say (including proverbs) reveals ideas and values.

### Example: *The Lion and the Jewel*
The contest between **Lakunle** (modern, Western-educated) and **Baroka** (the traditional chief) for **Sidi** dramatises the theme of **tradition versus modernity**. Baroka's success suggests the play questions a shallow, imported "modernity". The theme lives in the **characters and conflict**, not in a stated moral.

## Analysing a play well

A good analysis:

1. **Names a theme** clearly.
2. **Shows how it is developed** through character, conflict, plot or dialogue.
3. **Supports the point with reference to the text** (an event, a character's action, or a line).

This is the same **name–evidence–explanation** discipline used for figures of speech and characterisation, now applied to a whole play.`,
      workedExample: `**Task.** Choose one theme from an African play you have studied and show how the playwright develops it. Name the theme, and explain how character, conflict and the ending each help to convey it.

**Play:** *The Lion and the Jewel* by Wole Soyinka
**Theme chosen:** the clash between **tradition and modernity**

**How character develops the theme**
- **Lakunle** represents shallow, imported "modernity": he despises tradition, uses grand English words, and refuses the bride-price on "principle", yet has no real plan.
- **Baroka**, the old chief, represents tradition: he is shrewd, patient and confident in the old ways.
The two characters **embody the two sides** of the theme, so the contest between them *is* the theme in action.

**How conflict develops the theme**
- The **conflict is the contest for Sidi**, the village beauty. Their rivalry forces the "modern" and "traditional" values to clash directly on stage, dramatising the theme rather than merely describing it.

**How the ending develops the theme**
- Baroka, the traditional figure, **wins Sidi**, while Lakunle is left behind. The ending suggests the play is **critical of a hollow, borrowed modernity** and gives weight to tradition — showing the playwright's attitude to the theme.

**Supported by the text:** Sidi's final choice, and Lakunle's inability to match Baroka's cunning, are the textual evidence for this reading.

**Conclusion:** the theme of tradition versus modernity is not stated outright; it is built through the **opposed characters (Lakunle and Baroka)**, the **conflict over Sidi**, and the **ending** in which tradition prevails — the mark of skilful dramatic writing.`,
      teachingTip:
        "Insist that a theme is a full idea, not a one-word topic: 'the clash between tradition and modernity', not just 'tradition'. Then require the name–evidence–explanation chain — name the theme, point to a character, conflict or event, and explain how it conveys the theme. This turns essays from plot summary into genuine analysis and mirrors the marking of the poetry and characterisation topics.",
      quiz: [
        {
          prompt: "A theme in a play is its…",
          options: ["central idea or message", "list of actors", "number of acts", "printing date"],
          correctIndex: 0,
          explanation: "A theme is the main idea a play explores.",
        },
        {
          prompt: "Which is a common theme in African drama?",
          options: ["tradition versus modernity", "the periodic table", "long division", "map scales"],
          correctIndex: 0,
          explanation: "Tradition vs modernity is a frequent theme.",
        },
        {
          prompt: "A theme is usually developed through character, conflict, plot and…",
          options: ["dialogue", "the ticket price", "the theatre size", "the interval"],
          correctIndex: 0,
          explanation: "Dialogue (what characters say) also carries theme.",
        },
        {
          prompt: "A playwright usually conveys a theme by…",
          options: [
            "showing it through characters and events",
            "printing it on the cover",
            "stating a moral in the title",
            "avoiding all conflict",
          ],
          correctIndex: 0,
          explanation: "Theme emerges through character, conflict and plot.",
        },
        {
          prompt: "In The Lion and the Jewel, the contest for Sidi dramatises the theme of…",
          options: ["tradition versus modernity", "war and peace", "the sea", "science and maths"],
          correctIndex: 0,
          explanation: "Lakunle vs Baroka embodies tradition vs modernity.",
        },
        {
          prompt: "Lakunle in The Lion and the Jewel represents…",
          options: ["shallow, imported modernity", "deep tradition", "colonial rule", "the chorus"],
          correctIndex: 0,
          explanation: "Lakunle stands for a hollow, borrowed modernity.",
        },
        {
          prompt: "Baroka in The Lion and the Jewel represents…",
          options: ["tradition", "modern science", "European law", "the audience"],
          correctIndex: 0,
          explanation: "Baroka embodies the traditional way.",
        },
        {
          prompt: "The ending of a play helps to show…",
          options: ["the playwright's attitude to the theme", "the ticket sales", "the actors' names", "the interval length"],
          correctIndex: 0,
          explanation: "How a play ends reveals its stance on the theme.",
        },
        {
          prompt: "A play may explore…",
          options: ["more than one theme", "no themes at all", "only numbers", "only stage directions"],
          correctIndex: 0,
          explanation: "Plays often carry several themes together.",
        },
        {
          prompt: "Which is a theme concerned with foreign rule?",
          options: ["colonialism and its effects", "the water cycle", "algebraic expressions", "population density"],
          correctIndex: 0,
          explanation: "Colonialism is a common theme in African drama.",
        },
        {
          prompt: "A good analysis of theme should name the theme, show how it is developed, and…",
          options: [
            "support it with reference to the text",
            "ignore the play",
            "count the pages",
            "summarise the whole plot only",
          ],
          correctIndex: 0,
          explanation: "Name–evidence–explanation is the analytical discipline.",
        },
        {
          prompt: "A theme should be expressed as…",
          options: [
            "a full idea (e.g. the clash of tradition and modernity)",
            "a single word only",
            "the author's name",
            "a page number",
          ],
          correctIndex: 0,
          explanation: "A theme is an idea, not a one-word topic.",
        },
        {
          prompt: "Conflict in a play helps the theme by…",
          options: [
            "forcing opposing values to clash on stage",
            "removing all characters",
            "ending the play early",
            "listing the cast",
          ],
          correctIndex: 0,
          explanation: "Conflict dramatises the theme through clashing forces.",
        },
        {
          prompt: "In studying an African play, learners apply the elements of…",
          options: ["drama (plot, character, conflict, theme, dialogue)", "chemistry", "geometry", "accounting"],
          correctIndex: 0,
          explanation: "The elements of drama are the analytical tools.",
        },
        {
          prompt: "'The status and role of women' is an example of a…",
          options: ["theme", "stage direction", "prop", "costume"],
          correctIndex: 0,
          explanation: "It is a theme a play might explore.",
        },
        {
          prompt: "Which character type contrasts with another to sharpen a theme?",
          options: ["a foil", "the audience", "the narrator only", "the printer"],
          correctIndex: 0,
          explanation: "A foil highlights a theme by contrast (as Lakunle and Baroka do).",
        },
        {
          prompt: "The textual evidence for a reading of a play might include…",
          options: [
            "an event, a character's action or a line",
            "the book's price",
            "the theatre's address",
            "the author's birthday",
          ],
          correctIndex: 0,
          explanation: "Evidence comes from events, actions and lines in the text.",
        },
        {
          prompt: "Analysing a play well means going beyond…",
          options: ["plot summary to real analysis", "reading the play", "naming the theme", "quoting the text"],
          correctIndex: 0,
          explanation: "Good analysis explains, rather than just retelling the story.",
        },
        {
          prompt: "In The Lion and the Jewel, who wins Sidi at the end?",
          options: ["Baroka", "Lakunle", "the chorus", "no one"],
          correctIndex: 0,
          explanation: "Baroka, the traditional chief, wins Sidi.",
        },
        {
          prompt: "The name–evidence–explanation method is used for themes just as it is for…",
          options: ["figures of speech and characterisation", "solving equations", "drawing maps", "balancing chemicals"],
          correctIndex: 0,
          explanation: "The same analytical discipline runs through the Literature topics.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define 'theme' and give two examples of themes common in African drama.",
          answerKey:
            "A theme is the central idea or message a play explores. Examples (any two): tradition versus modernity; colonialism and its effects; corruption/abuse of power; culture, identity and community; the role/status of women. Award marks for the definition and two valid themes.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "How does a playwright most effectively convey a theme?",
          options: [
            "through characters, conflict and events",
            "by printing it on the cover",
            "by naming it in the title only",
            "by avoiding conflict entirely",
          ],
          correctIndex: 0,
          answerKey: "Theme emerges through character, conflict and plot, not a stated moral.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "For an African play you have studied, name one theme and give one piece of textual evidence that develops it.",
          answerKey:
            "Accept any valid theme from a studied African play with a specific supporting detail — e.g. tradition vs modernity in The Lion and the Jewel, evidenced by Baroka winning Sidi over the 'modern' Lakunle. Award marks for a clearly named theme and relevant textual evidence.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Choose a theme from an African play you have studied and discuss how the playwright develops it through character, conflict and the ending. Support your answer with reference to the text.",
          answerKey:
            "A strong answer names a clear theme (expressed as a full idea, e.g. the clash of tradition and modernity), and shows how it is developed: through opposed characters who embody the two sides (e.g. Lakunle vs Baroka), through the central conflict that forces those values to clash (the contest for Sidi), and through the ending that reveals the playwright's attitude (Baroka's success questioning a shallow modernity). It supports each point with specific reference to the text rather than plot summary. Award marks for a clearly named theme, its development through character, conflict and ending, and textual evidence.",
          marks: 6,
        },
      ],
    },
  ],
};
