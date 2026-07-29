import type { SubjectContent } from "@/content/types";

export const chemistry: SubjectContent = {
  slug: "chemistry",
  name: "Chemistry",
  shortName: "Chemistry",
  description:
    "Matter and its states, atomic structure, the periodic table, and chemical bonding.",
  accent: "amber",
  sortOrder: 4,
  teacherCode: "CHM-10-8842",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "Matter, the Atom and Bonding",
      summary:
        "Learners build the foundation of the subject: what matter is, what the atom is made of, how the periodic table organises the elements, and why atoms combine.",
      topics: [
        {
          slug: "matter",
          title: "Introduction to Chemistry and the Nature of Matter",
          objective:
            "By the end of the lesson, learners should be able to define matter, describe the three states in terms of the kinetic theory, name the changes of state, and distinguish elements, compounds and mixtures.",
          estimatedMinutes: 80,
          notes: `## Chemistry and matter

**Chemistry** is the study of the composition, structure, properties and changes of matter.

**Matter** is anything that has mass and occupies space.

## The kinetic theory

All matter is made of tiny particles in constant motion. The state of a substance depends on how much energy those particles have and how strongly they attract one another.

**Solid** — particles closely packed in a fixed, regular arrangement; strong forces of attraction; particles vibrate about fixed positions. Definite shape, definite volume, not compressible.

**Liquid** — particles close together but not in a fixed arrangement; weaker forces; particles slide over one another. Definite volume, takes the shape of its container, barely compressible.

**Gas** — particles far apart and in rapid random motion; negligible forces of attraction. No definite shape or volume, highly compressible.

## Changes of state

- **Melting** — solid to liquid
- **Freezing (solidification)** — liquid to solid
- **Evaporation / boiling** — liquid to gas
- **Condensation** — gas to liquid
- **Sublimation** — solid directly to gas, without passing through the liquid state

Substances that sublime include iodine, ammonium chloride and solid carbon dioxide.

Note that heat supplied during a change of state does not raise the temperature. It goes into overcoming the forces between particles. This is **latent heat**.

## Physical and chemical changes

| | Physical change | Chemical change |
| --- | --- | --- |
| New substance | None formed | New substance formed |
| Reversibility | Usually easily reversed | Usually difficult to reverse |
| Mass | Unchanged | Unchanged (conserved) |
| Energy | Small change | Often large change |
| Example | Melting ice, dissolving salt | Burning wood, rusting iron |

## Elements, compounds and mixtures

**Element** — a pure substance that cannot be split into simpler substances by chemical means. Made of one kind of atom. *Oxygen, iron, carbon, gold.*

**Compound** — two or more elements chemically combined in a **fixed ratio by mass**. Its properties differ entirely from those of its elements. Separated only by chemical means. *Water, sodium chloride, carbon dioxide.*

**Mixture** — two or more substances physically together in **any proportion**. Components keep their own properties and can be separated by physical means. *Air, sea water, soil, brass.*

The classic illustration: iron filings and sulphur powder mixed together can be separated with a magnet — a mixture. Heat them and they combine to form iron(II) sulphide, from which no magnet will draw the iron — a compound.

## Separating mixtures

- **Filtration** — insoluble solid from a liquid
- **Evaporation / crystallisation** — dissolved solid from its solution
- **Simple distillation** — solvent from a solution
- **Fractional distillation** — miscible liquids with different boiling points
- **Chromatography** — dissolved substances of different solubilities
- **Magnetic separation** — magnetic from non-magnetic solids
- **Decantation** — liquid from settled solid`,
          workedExample: `**Question:** A learner is given a mixture of sand, common salt and iron filings. Describe how each component could be recovered separately, giving a reason for each step. Classify the mixture and each recovered substance as element, compound or mixture.

**Solution**

*Step 1 — remove the iron filings.*

Pass a magnet over the mixture. Iron is magnetic; sand and salt are not, so the filings alone are attracted and lifted clear.

*Step 2 — separate the salt from the sand.*

Add water and stir. **Salt is soluble in water; sand is not.** The salt dissolves to form a solution, leaving the sand suspended.

*Step 3 — recover the sand.*

**Filter** the mixture. The sand is retained as residue on the filter paper; the salt solution passes through as filtrate. Wash and dry the residue.

*Step 4 — recover the salt.*

**Evaporate** the filtrate to dryness, or evaporate to the point of crystallisation and allow to cool. The water leaves as vapour and solid salt remains.

*Step 5 — classify.*

- The original mixture: a **mixture** — components in no fixed ratio, each keeping its own properties, separable by physical means.
- Iron filings: an **element** — one kind of atom, symbol Fe.
- Sand (silicon dioxide): a **compound** — silicon and oxygen chemically combined in a fixed ratio.
- Common salt (sodium chloride): a **compound** — sodium and chlorine chemically combined in a fixed ratio.

**Note the ordering.** The magnet must come first: once water is added, separating iron filings becomes far harder. In separation questions, always ask what each step makes impossible later.`,
          teachingTip:
            "The iron and sulphur demonstration is worth the twenty minutes it costs. Mix the two, pass a magnet through and let learners see the iron lift out; then heat the mixture in a fume-free space until it glows and try the magnet again. The failure of the magnet on the product is the most persuasive evidence for the element-compound distinction a learner will meet all year, and they remember the moment. If chemicals are short, the salt-sand-iron separation costs nothing and teaches the same classification. For the kinetic theory, have learners act out the states themselves — packed and vibrating, sliding past one another, moving freely across the room — then ask what you would have to give them to move from one to the next. They will say energy, and the concept of latent heat then has somewhere to attach.",
          quiz: [
            {
              prompt: "Matter is best defined as anything that",
              options: [
                "can be seen",
                "has mass and occupies space",
                "can be burned",
                "conducts electricity",
              ],
              correctIndex: 1,
              explanation:
                "Mass and volume are the defining properties; visibility is irrelevant, as gases show.",
            },
            {
              prompt: "In which state are particles closely packed in a fixed arrangement?",
              options: ["Solid", "Liquid", "Gas", "All three"],
              correctIndex: 0,
              explanation:
                "Solids have strong forces holding particles vibrating about fixed positions.",
            },
            {
              prompt: "The change from solid directly to gas is called",
              options: ["Melting", "Condensation", "Sublimation", "Evaporation"],
              correctIndex: 2,
              explanation:
                "Iodine and ammonium chloride sublime without forming a liquid.",
            },
            {
              prompt: "Which of the following is a compound?",
              options: ["Air", "Brass", "Water", "Sea water"],
              correctIndex: 2,
              explanation:
                "Water is hydrogen and oxygen chemically combined in a fixed ratio; the others are mixtures.",
            },
            {
              prompt: "A key feature of a mixture is that",
              options: [
                "its components are in a fixed ratio",
                "it can only be separated chemically",
                "its components keep their own properties",
                "it is always a liquid",
              ],
              correctIndex: 2,
              explanation:
                "Components of a mixture are not chemically combined and retain their identities.",
            },
            {
              prompt: "Which technique separates two miscible liquids with different boiling points?",
              options: [
                "Filtration",
                "Fractional distillation",
                "Magnetic separation",
                "Decantation",
              ],
              correctIndex: 1,
              explanation:
                "A fractionating column allows the liquid with the lower boiling point to be collected first.",
            },
            {
              prompt: "Burning wood is a chemical change because",
              options: [
                "the wood gets hot",
                "new substances with different properties are formed",
                "the wood changes shape",
                "it can easily be reversed",
              ],
              correctIndex: 1,
              explanation:
                "Ash, carbon dioxide and water vapour are new substances, and the change is not readily reversed.",
            },
            {
              prompt: "Which is an element?",
              options: ["Sodium chloride", "Carbon dioxide", "Copper", "Bronze"],
              correctIndex: 2,
              explanation:
                "Copper consists of only one kind of atom and cannot be chemically simplified.",
            },
            {
              prompt: "During melting, the temperature of a pure substance",
              options: [
                "rises steadily",
                "stays constant until melting is complete",
                "falls",
                "rises then falls",
              ],
              correctIndex: 1,
              explanation:
                "The heat supplied is latent heat used to overcome forces between particles, not to raise temperature.",
            },
            {
              prompt: "Sand can be separated from salt solution by",
              options: ["Distillation", "Filtration", "Chromatography", "Sublimation"],
              correctIndex: 1,
              explanation:
                "Sand is insoluble and is retained as residue while the solution passes through as filtrate.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Using the kinetic theory, explain the difference in compressibility between a gas and a solid.",
              answerKey:
                "In a gas the particles are far apart with large spaces between them and negligible forces of attraction, so applying pressure pushes them closer and the volume falls markedly — a gas is highly compressible. In a solid the particles are already in contact in a fixed close-packed arrangement with strong forces, leaving almost no space to remove, so a solid is effectively incompressible. Award 4 marks for the gas explanation, 4 for the solid, requiring reference to particle spacing in both.",
              marks: 8,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Give four differences between a compound and a mixture.",
              answerKey:
                "Components chemically combined versus physically together; fixed ratio by mass versus any proportion; properties differ from constituents versus constituents retain their properties; separated by chemical means versus by physical means; formation involves an energy change versus little or no energy change. Award 2 marks per complete two-sided difference.",
              marks: 8,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "Iron filings and sulphur are mixed, then heated strongly. A magnet is passed over the product and attracts nothing. This shows that",
              options: [
                "the iron has evaporated",
                "a compound has been formed",
                "the mixture was impure",
                "sulphur is magnetic",
              ],
              correctIndex: 1,
              answerKey:
                "The iron is no longer free but chemically combined as iron(II) sulphide, whose properties differ from those of its elements. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Describe how you would obtain pure water from sea water in the school laboratory, naming the apparatus and explaining the principle.",
              answerKey:
                "Simple distillation. Heat the sea water in a flask fitted with a thermometer and delivery tube leading to a Liebig condenser; water boils at 100 degrees Celsius and the vapour passes into the condenser where cold water in the outer jacket cools it back to liquid, collected as distillate in a receiver. The dissolved salts have far higher boiling points and remain in the flask. Award 3 marks for naming the process and apparatus, 3 for the description of the procedure, 3 for the principle of differing boiling points.",
              marks: 9,
            },
            {
              type: "ESSAY",
              prompt:
                "A sample contains sand, iron filings, ammonium chloride and common salt. Describe in full how you would separate all four components, justifying the order of your steps.",
              answerKey:
                "Expect: (1) magnetic separation first to remove iron filings, justified because later addition of water would make this difficult, 5 marks; (2) sublimation by gentle heating to remove ammonium chloride, which sublimes while the others do not, collected on a cool surface, 5 marks; (3) addition of water and filtration to separate insoluble sand as residue from salt solution as filtrate, 5 marks; (4) evaporation or crystallisation of the filtrate to recover salt, 4 marks; (5) explicit justification of the ordering — dry physical methods before wet ones, and sublimation before dissolving — 6 marks. Deduct up to 3 marks where steps are correct but the sequence would make a later step impossible.",
              marks: 25,
            },
          ],
        },
        {
          slug: "atomic-structure",
          title: "Atomic Structure",
          objective:
            "By the end of the lesson, learners should be able to describe the sub-atomic particles, define atomic and mass number, write electron configurations, and explain isotopy and relative atomic mass.",
          estimatedMinutes: 80,
          notes: `## The atom

The smallest particle of an element that can take part in a chemical reaction.

## Sub-atomic particles

| Particle | Symbol | Relative charge | Relative mass | Location |
| --- | --- | --- | --- | --- |
| Proton | p | +1 | 1 | Nucleus |
| Neutron | n | 0 | 1 | Nucleus |
| Electron | e | -1 | 1/1840 (negligible) | Shells around the nucleus |

Protons and neutrons together are called **nucleons**. Nearly all the mass of an atom is in the nucleus; nearly all its volume is empty space.

## Atomic number and mass number

**Atomic number (Z)** = number of protons. This defines the element. Change it and you have a different element.

**Mass number (A)** = number of protons + number of neutrons.

**Number of neutrons = A - Z**

In a **neutral atom**, number of electrons = number of protons.

Notation: the mass number is written above and the atomic number below the symbol, for example sodium with A = 23 and Z = 11.

## Electron arrangement

Electrons occupy shells (energy levels) around the nucleus. The maximum number in each shell is given by 2n squared:

- Shell 1: 2 electrons
- Shell 2: 8 electrons
- Shell 3: 18, though it commonly holds 8 before the fourth shell begins to fill

For the first twenty elements, fill the shells in order 2, 8, 8, 2.

Examples:

- Sodium (Z = 11): 2, 8, 1
- Chlorine (Z = 17): 2, 8, 7
- Calcium (Z = 20): 2, 8, 8, 2

The **valence electrons** are those in the outermost shell. They determine the element's chemical behaviour.

## Ions

An atom that gains or loses electrons becomes charged.

- **Cation** — formed by losing electrons; positively charged. *Na loses one electron to give Na+*
- **Anion** — formed by gaining electrons; negatively charged. *Cl gains one electron to give Cl-*

Note that only electrons move. The number of protons never changes in a chemical reaction, so the element stays the same.

## Isotopes

**Isotopes** are atoms of the same element having the same atomic number but different mass numbers — the same number of protons, different numbers of neutrons.

- Chlorine-35 and chlorine-37
- Carbon-12, carbon-13 and carbon-14
- Hydrogen-1 (protium), hydrogen-2 (deuterium), hydrogen-3 (tritium)

Because isotopes have identical electron arrangements, their **chemical properties are the same**. Their **physical properties**, which depend on mass, differ slightly.

## Relative atomic mass

Because most elements exist as a mixture of isotopes, the relative atomic mass is a weighted average:

RAM = (mass of isotope 1 x % abundance + mass of isotope 2 x % abundance) / 100

This is why chlorine's relative atomic mass is 35.5, a value no single chlorine atom possesses.`,
          workedExample: `**Question:** Chlorine exists as two isotopes: chlorine-35 with 75 per cent abundance and chlorine-37 with 25 per cent abundance. The atomic number of chlorine is 17.

(a) State the number of protons, neutrons and electrons in each isotope.
(b) Write the electron configuration of a chlorine atom.
(c) Calculate the relative atomic mass of chlorine.
(d) Explain why the two isotopes have identical chemical properties.

**Solution**

**(a) Sub-atomic particles**

Atomic number is 17, so **every** chlorine atom has 17 protons and, being neutral, 17 electrons.

*Chlorine-35:* neutrons = A - Z = 35 - 17 = **18**
*Chlorine-37:* neutrons = 37 - 17 = **20**

So: Cl-35 has 17p, 18n, 17e. Cl-37 has 17p, 20n, 17e.

**(b) Electron configuration**

17 electrons filled in order 2, 8, then the remainder:

2 + 8 = 10, leaving 7.

**Configuration: 2, 8, 7**

Seven valence electrons, which is why chlorine gains one electron to complete its outer shell.

**(c) Relative atomic mass**

RAM = [(35 x 75) + (37 x 25)] / 100

= (2625 + 925) / 100

= 3550 / 100

= **35.5**

*Sense check:* the answer lies between 35 and 37, and closer to 35 because chlorine-35 is the more abundant. It is.

**(d) Why chemical properties are identical**

Chemical behaviour is governed entirely by the **electron arrangement**, particularly the valence electrons. Both isotopes have 17 electrons arranged 2, 8, 7, so both react in exactly the same way. The extra neutrons in chlorine-37 add mass but no charge and sit in the nucleus, taking no part in bonding. Only the **physical** properties, such as density and rate of diffusion, differ slightly.`,
          teachingTip:
            "Scale is what makes the atom real. Tell learners that if the nucleus were a grain of rice placed at the centre of a football field, the electrons would be at the boundary fence and everything between would be empty. Pause there — the emptiness of solid matter is genuinely startling and buys attention for the rest of the lesson. For isotopes, the recurring misconception is that a different mass number means a different element; attack it by asking what would have to change for chlorine to stop being chlorine, and keep pressing until someone says the number of protons. For the relative atomic mass calculation, insist on the sense check: the answer must fall between the two isotope masses and lean towards the more abundant one. A learner who checks this catches almost every arithmetic slip.",
          quiz: [
            {
              prompt: "Which sub-atomic particle carries no charge?",
              options: ["Proton", "Neutron", "Electron", "Nucleon"],
              correctIndex: 1,
              explanation: "Neutrons are electrically neutral and sit in the nucleus.",
            },
            {
              prompt: "The atomic number of an element is the number of",
              options: ["Neutrons", "Protons", "Nucleons", "Shells"],
              correctIndex: 1,
              explanation:
                "The proton number defines which element an atom is.",
            },
            {
              prompt: "An atom has mass number 40 and atomic number 19. How many neutrons does it have?",
              options: ["19", "21", "40", "59"],
              correctIndex: 1,
              explanation: "Neutrons = A - Z = 40 - 19 = 21.",
            },
            {
              prompt: "The electron configuration of sodium (Z = 11) is",
              options: ["2, 9", "2, 8, 1", "8, 2, 1", "2, 8, 8"],
              correctIndex: 1,
              explanation:
                "The first shell takes 2, the second 8, leaving 1 in the third shell.",
            },
            {
              prompt: "Isotopes of an element differ in the number of",
              options: ["Protons", "Electrons", "Neutrons", "Shells"],
              correctIndex: 2,
              explanation:
                "Same proton number, different neutron number, hence different mass numbers.",
            },
            {
              prompt: "A cation is formed when an atom",
              options: [
                "gains electrons",
                "loses electrons",
                "gains protons",
                "loses neutrons",
              ],
              correctIndex: 1,
              explanation:
                "Losing negatively charged electrons leaves a net positive charge.",
            },
            {
              prompt: "Nearly all the mass of an atom is concentrated in the",
              options: ["Electron shells", "Nucleus", "Empty space", "Valence shell"],
              correctIndex: 1,
              explanation:
                "Protons and neutrons carry essentially all the mass; electrons are negligible.",
            },
            {
              prompt: "Why is the relative atomic mass of chlorine 35.5?",
              options: [
                "Every chlorine atom has half a neutron",
                "It is the weighted average of its isotopes",
                "The measurement is inaccurate",
                "Chlorine has 35.5 protons",
              ],
              correctIndex: 1,
              explanation:
                "Chlorine-35 and chlorine-37 occur in a roughly 3:1 ratio, averaging to 35.5.",
            },
            {
              prompt: "The maximum number of electrons in the second shell is",
              options: ["2", "8", "18", "32"],
              correctIndex: 1,
              explanation: "Using 2n squared with n = 2 gives 8.",
            },
            {
              prompt: "Isotopes have identical chemical properties because they have the same",
              options: [
                "mass number",
                "number of neutrons",
                "electron arrangement",
                "density",
              ],
              correctIndex: 2,
              explanation:
                "Chemical behaviour depends on valence electrons, which are unaffected by neutron number.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "An atom of an element has mass number 39 and atomic number 19. State the number of protons, neutrons and electrons, and write its electron configuration.",
              answerKey:
                "Protons = 19; neutrons = 39 - 19 = 20; electrons = 19 in the neutral atom. Configuration 2, 8, 8, 1. Award 2 marks each for protons, neutrons and electrons, and 3 marks for the configuration. The element is potassium; award 1 bonus mark within the total if named.",
              marks: 9,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Boron has two isotopes: boron-10 with 20 per cent abundance and boron-11 with 80 per cent abundance. Calculate its relative atomic mass.",
              answerKey:
                "RAM = [(10 x 20) + (11 x 80)] / 100 = (200 + 880) / 100 = 1080 / 100 = 10.8. Award 3 marks for correct set-up of the weighted average, 3 for the arithmetic, 2 for the correct final value with no units.",
              marks: 8,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "An ion has 12 protons, 12 neutrons and 10 electrons. What is its charge and identity?",
              options: [
                "Mg2+ ",
                "Mg2-",
                "Ne2+",
                "Na+",
              ],
              correctIndex: 0,
              answerKey:
                "12 protons identifies magnesium. With only 10 electrons there are two more positive charges than negative, giving a 2+ charge. Option A.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define isotopy and explain why isotopes of an element have the same chemical properties but slightly different physical properties.",
              answerKey:
                "Isotopy: the existence of atoms of the same element having the same atomic number but different mass numbers, arising from differing numbers of neutrons. Chemical properties are identical because these depend on the number and arrangement of electrons, which is the same in all isotopes of an element; the neutrons are uncharged, lie in the nucleus and take no part in bonding. Physical properties such as density, rate of diffusion and boiling point differ slightly because these depend on mass, which the extra neutrons change. Award 3 marks for the definition, 4 for the chemical explanation, 3 for the physical explanation.",
              marks: 10,
            },
            {
              type: "ESSAY",
              prompt:
                "Describe the structure of the atom, naming the sub-atomic particles with their charges, masses and locations. Explain how atomic number and mass number are used to describe an atom, and show with two worked examples how the electron configuration of an element is determined.",
              answerKey:
                "Award marks as follows: description of the nuclear atom with a dense central nucleus and electrons in shells, most of the volume being empty space, 5 marks; a complete table or account of proton, neutron and electron with charge, relative mass and location, 6 marks; correct definitions of atomic number as proton number and mass number as protons plus neutrons, with the relationship neutrons = A - Z, 5 marks; the shell capacity rule 2, 8, 8 for the first twenty elements, 3 marks; two correct worked electron configurations with reasoning, 6 marks; clarity and use of correct terminology, 3 marks. Deduct 2 marks where a learner states that electrons contribute significantly to atomic mass.",
              marks: 28,
            },
          ],
        },
        {
          slug: "periodic-table",
          title: "The Periodic Table",
          objective:
            "By the end of the lesson, learners should be able to describe the arrangement of the modern periodic table, relate group and period to electron configuration, and explain the main trends across a period and down a group.",
          estimatedMinutes: 80,
          notes: `## The modern periodic law

**The properties of elements are a periodic function of their atomic numbers.**

Mendeleev arranged elements by relative atomic mass and left gaps for undiscovered elements, correctly predicting their properties. Moseley later showed that atomic number, not mass, is the true basis of the order, which resolved the anomalies in Mendeleev's table.

## Structure of the table

**Groups** — the vertical columns, numbered I to VIII (or 1 to 18).
**Periods** — the horizontal rows, numbered 1 to 7.

The two key relationships:

- **Group number = number of valence electrons** (for the main-group elements)
- **Period number = number of occupied electron shells**

Sodium, configuration 2, 8, 1, therefore sits in **Group I** (one valence electron), **Period 3** (three shells).

## The named groups

- **Group I — alkali metals.** Li, Na, K. One valence electron, lost readily. Soft, low density, very reactive, stored under oil.
- **Group II — alkaline earth metals.** Be, Mg, Ca. Two valence electrons.
- **Group VII — halogens.** F, Cl, Br, I. Seven valence electrons, gain one readily. Coloured, diatomic, reactive non-metals.
- **Group VIII (0) — noble gases.** He, Ne, Ar. Full outer shells, hence almost entirely unreactive.
- **Transition elements** — the block between Groups II and III. Hard, dense, high melting points, variable valency, coloured compounds, often catalysts.

## Trends across a period, left to right

Electrons enter the **same shell** while the nuclear charge increases, so the pull on the outer electrons rises.

- **Atomic radius decreases**
- **Metallic character decreases**, non-metallic character increases
- **Ionisation energy increases**
- **Electronegativity increases**
- Oxides change from basic through amphoteric to acidic

## Trends down a group

A new shell is added at each step, so outer electrons lie further from the nucleus and are shielded by the inner shells.

- **Atomic radius increases**
- **Ionisation energy decreases**
- **Metallic character increases**
- Group I: **reactivity increases** down the group, because the single valence electron is lost more easily
- Group VII: **reactivity decreases** down the group, because attracting an extra electron becomes harder

Note that reactivity trends run in **opposite directions** for metals and non-metals. Metals react by losing electrons, non-metals by gaining them, so anything making electron loss easier makes electron gain harder.

## Why elements in a group behave alike

Members of a group have the **same number of valence electrons**. Since chemical behaviour is determined by the valence shell, they undergo the same kinds of reaction, differing only in vigour.`,
          workedExample: `**Question:** An element X has atomic number 12.

(a) Write its electron configuration.
(b) State its group and period, giving your reasoning.
(c) Predict whether it is a metal or non-metal and what ion it forms.
(d) Compare its atomic radius and reactivity with those of the element directly below it in the same group.

**Solution**

**(a) Electron configuration**

12 electrons, filled 2, then 8, leaving 2.

**Configuration: 2, 8, 2**

**(b) Group and period**

*Group:* the outermost shell holds **2** electrons, so X is in **Group II**.

*Period:* there are **3** occupied shells, so X is in **Period 3**.

X is magnesium.

**(c) Metal or non-metal, and its ion**

With only two valence electrons, X loses them far more easily than it could gain six. Elements that react by losing electrons are **metals**.

Losing two electrons leaves 10 electrons and 12 protons, a net charge of 2+.

**X forms the ion X2+** and achieves the stable configuration 2, 8.

**(d) Comparison with the element below**

The element directly below in Group II is calcium, Z = 20, configuration 2, 8, 8, 2.

*Atomic radius:* calcium has **four** occupied shells against magnesium's three. An extra shell places the outer electrons further from the nucleus, so **calcium's atomic radius is larger**.

*Reactivity:* calcium's valence electrons are further from the nucleus and shielded by more inner shells, so the nuclear attraction on them is weaker and they are **lost more easily**. Since Group II metals react by losing electrons, **calcium is more reactive than magnesium**.

**The general rule confirmed:** metallic reactivity increases down a group.`,
          teachingTip:
            "Do not hand learners the trends to memorise — have them derive the trends from electron configuration, which they already know. Write the configurations of the first twenty elements on the board as a class exercise, then arrange the cards on the wall by number of shells (rows) and number of valence electrons (columns). The periodic table assembles itself, and learners see that the group number is not an arbitrary label. Once the table is built, ask why Group I and Group VII reactivity trends run opposite ways; the answer follows directly from losing versus gaining, and learners who reason it out never reverse it in an examination. If sodium and water can be demonstrated safely with a very small piece behind a screen, do it — the visible violence anchors the whole group.",
          quiz: [
            {
              prompt: "The modern periodic table arranges elements in order of increasing",
              options: [
                "Relative atomic mass",
                "Atomic number",
                "Density",
                "Number of neutrons",
              ],
              correctIndex: 1,
              explanation:
                "Moseley showed atomic number to be the correct ordering principle.",
            },
            {
              prompt: "The group number of a main-group element equals its number of",
              options: [
                "Occupied shells",
                "Valence electrons",
                "Protons",
                "Neutrons",
              ],
              correctIndex: 1,
              explanation:
                "Group I elements have one valence electron, Group VII have seven, and so on.",
            },
            {
              prompt: "An element with configuration 2, 8, 7 belongs to",
              options: [
                "Group VII, Period 3",
                "Group III, Period 7",
                "Group II, Period 8",
                "Group VIII, Period 2",
              ],
              correctIndex: 0,
              explanation:
                "Seven valence electrons gives Group VII; three occupied shells gives Period 3.",
            },
            {
              prompt: "Why are the noble gases almost unreactive?",
              options: [
                "They are very heavy",
                "They have full outer electron shells",
                "They have no electrons",
                "They exist only as liquids",
              ],
              correctIndex: 1,
              explanation:
                "With a complete valence shell there is no tendency to gain, lose or share electrons.",
            },
            {
              prompt: "Across a period from left to right, atomic radius generally",
              options: ["Increases", "Decreases", "Stays constant", "Doubles"],
              correctIndex: 1,
              explanation:
                "Nuclear charge rises while electrons enter the same shell, pulling them inward.",
            },
            {
              prompt: "Reactivity of Group I metals down the group",
              options: ["Increases", "Decreases", "Stays the same", "Varies randomly"],
              correctIndex: 0,
              explanation:
                "The valence electron lies further out and is shielded, so it is lost more readily.",
            },
            {
              prompt: "Which of these is a transition element property?",
              options: [
                "Very low melting point",
                "Variable valency and coloured compounds",
                "Full outer shell",
                "Always a gas at room temperature",
              ],
              correctIndex: 1,
              explanation:
                "Transition metals show variable oxidation states, coloured compounds and catalytic activity.",
            },
            {
              prompt: "The halogens are found in",
              options: ["Group I", "Group II", "Group VII", "Group VIII"],
              correctIndex: 2,
              explanation:
                "Fluorine, chlorine, bromine and iodine each have seven valence electrons.",
            },
            {
              prompt: "The period number of an element tells you its number of",
              options: [
                "Valence electrons",
                "Occupied electron shells",
                "Neutrons",
                "Isotopes",
              ],
              correctIndex: 1,
              explanation:
                "An element in Period 3 has three occupied shells.",
            },
            {
              prompt: "Group VII reactivity down the group",
              options: [
                "Increases, because atoms get larger",
                "Decreases, because attracting an electron becomes harder",
                "Stays the same",
                "Increases, because shielding decreases",
              ],
              correctIndex: 1,
              explanation:
                "Non-metals react by gaining electrons, so greater distance and shielding reduce reactivity.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "An element has atomic number 17. Write its electron configuration and deduce its group and period, explaining your reasoning.",
              answerKey:
                "Configuration 2, 8, 7. Seven valence electrons places it in Group VII; three occupied shells places it in Period 3. The element is chlorine. Award 3 marks for the configuration, 3 for the group with reasoning, 3 for the period with reasoning, 1 for naming chlorine.",
              marks: 10,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain why atomic radius decreases across a period but increases down a group.",
              answerKey:
                "Across a period: electrons are added to the same shell while the number of protons increases, so the nuclear charge grows without additional shielding and the outer electrons are pulled closer, reducing the radius. Down a group: each successive element has an additional occupied shell, placing outer electrons further from the nucleus, and inner shells shield them from the nuclear charge, so the radius increases. Award 5 marks for each explanation, requiring reference to nuclear charge and shielding respectively.",
              marks: 10,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "Elements P, Q and R have configurations 2, 8, 1; 2, 8, 7; and 2, 8, 8. Which statement is correct?",
              options: [
                "P is a non-metal and R is highly reactive",
                "P is a metal, Q is a non-metal, R is unreactive",
                "All three are metals",
                "Q is unreactive and R is a halogen",
              ],
              correctIndex: 1,
              answerKey:
                "P has one valence electron and loses it readily, so it is a reactive metal (Group I). Q has seven and gains one readily, so it is a reactive non-metal (Group VII). R has a full outer shell, making it a noble gas and unreactive. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain why sodium and potassium have similar chemical properties, and state which is more reactive with a reason.",
              answerKey:
                "Both belong to Group I with one valence electron (Na = 2,8,1; K = 2,8,8,1), and since chemical behaviour is determined by the valence shell they undergo the same kinds of reaction. Potassium is more reactive because its valence electron lies in a fourth shell, further from the nucleus and shielded by more inner shells, so it is lost more easily. Award 5 marks for the similarity argument with configurations, 5 for the reactivity comparison with reasoning.",
              marks: 10,
            },
            {
              type: "ESSAY",
              prompt:
                "Describe the arrangement of the modern periodic table and discuss the main trends observed across a period and down a group, explaining each trend in terms of atomic structure.",
              answerKey:
                "Award marks as follows: statement of the periodic law and the historical shift from Mendeleev's mass ordering to Moseley's atomic number, 4 marks; description of groups and periods with the two key relationships to valence electrons and occupied shells, 6 marks; at least four trends across a period — atomic radius, metallic character, ionisation energy, electronegativity, nature of oxides — each explained by increasing nuclear charge with electrons entering the same shell, 8 marks; at least three trends down a group explained by additional shells and increased shielding, 6 marks; explicit treatment of why Group I and Group VII reactivity trends run in opposite directions, 4 marks; organisation and terminology, 2 marks. A learner who states trends correctly without explaining them in terms of atomic structure should not exceed 12.",
              marks: 30,
            },
          ],
        },
        {
          slug: "chemical-bonding",
          title: "Chemical Bonding",
          objective:
            "By the end of the lesson, learners should be able to explain why atoms combine, describe ionic, covalent and metallic bonding, and relate the type of bonding present in a substance to its physical properties.",
          estimatedMinutes: 80,
          notes: `## Why atoms combine

Atoms bond in order to achieve a **stable electron configuration** — a full outer shell, resembling that of the nearest noble gas.

- **Duplet rule** — two electrons in the outer shell, for the very smallest atoms such as hydrogen and lithium
- **Octet rule** — eight electrons in the outer shell, for most other main-group atoms

## Ionic (electrovalent) bonding

Formed by the **complete transfer** of electrons from a metal to a non-metal. The oppositely charged ions produced are held together by electrostatic attraction.

**Sodium chloride:**

- Sodium (2, 8, 1) loses one electron, becoming Na+ with configuration 2, 8
- Chlorine (2, 8, 7) gains that electron, becoming Cl- with configuration 2, 8, 8
- The Na+ and Cl- ions attract one another strongly

**Properties of ionic compounds:**

- High melting and boiling points — much energy is needed to overcome the strong electrostatic forces throughout the lattice
- Usually soluble in water, insoluble in organic solvents
- Conduct electricity when **molten or in solution**, but not when solid, because the ions must be free to move
- Hard but brittle crystalline solids

## Covalent bonding

Formed by the **sharing** of electron pairs between two non-metal atoms. Each shared pair constitutes one covalent bond.

- **Single bond** — one shared pair, as in H2 or HCl
- **Double bond** — two shared pairs, as in O2 or CO2
- **Triple bond** — three shared pairs, as in N2

**Properties of simple covalent (molecular) substances:**

- Low melting and boiling points — the forces **between molecules** are weak, even though the bonds within each molecule are strong
- Usually insoluble in water, soluble in organic solvents
- Do not conduct electricity, having no free ions or electrons
- Often gases, liquids or soft solids at room temperature

**Giant covalent structures** such as diamond and graphite are the exception: every atom is covalently bonded into a continuous network, giving very high melting points.

## Co-ordinate (dative) bonding

A covalent bond in which **both** shared electrons come from the same atom. Once formed it is indistinguishable from an ordinary covalent bond. Examples: the ammonium ion and the hydroxonium ion.

## Metallic bonding

In a metal, the valence electrons are **delocalised** — no longer belonging to any one atom but free to move throughout the structure. The metal exists as a lattice of positive ions in a 'sea' of mobile electrons.

**Properties explained by this model:**

- **Electrical and thermal conductivity** — the delocalised electrons carry charge and energy through the solid
- **Malleability and ductility** — layers of ions slide over one another without breaking the bonding, because the electron sea adjusts
- **High melting points and lustre** — strong attraction between the positive lattice and the electron sea

## Choosing the bond type

- Metal + non-metal → **ionic**
- Non-metal + non-metal → **covalent**
- Metal + metal → **metallic**

## The key inference

You can often deduce the bonding in an unknown substance from its properties. A solid with a high melting point that conducts only when molten is ionic. A substance with a low boiling point that never conducts is simple covalent. A solid that conducts in the solid state and can be hammered into sheets is metallic.`,
          workedExample: `**Question:** Substance A melts at 801 degrees Celsius, does not conduct electricity as a solid but conducts well when molten, and dissolves readily in water. Substance B melts at -23 degrees Celsius, never conducts electricity, and is insoluble in water but soluble in petrol.

(a) Deduce the type of bonding in each and justify your answer from the evidence.
(b) For substance A, suggest a possible identity and show the electron transfer involved.
(c) Explain why substance B has such a low melting point although its bonds are described as strong.

**Solution**

**(a) Deducing the bonding**

*Substance A:*

- **High melting point (801 C)** — a great deal of energy is required, indicating strong forces throughout the structure.
- **Does not conduct as a solid but conducts when molten** — this is decisive. It means charged particles are present but fixed in place until melting frees them.
- **Soluble in water** — typical of ionic compounds.

All three point to **ionic bonding**.

*Substance B:*

- **Very low melting point (-23 C)** — only weak forces need to be overcome.
- **Never conducts** — no free ions and no free electrons.
- **Insoluble in water, soluble in petrol** — characteristic of non-polar molecular substances.

These indicate **simple covalent (molecular) bonding**.

**(b) Identity of A and the electron transfer**

801 degrees Celsius is the melting point of **sodium chloride**.

*The transfer:*

Sodium has configuration 2, 8, 1. It loses its single valence electron:

Na (2, 8, 1) → Na+ (2, 8) + one electron

Chlorine has configuration 2, 8, 7. It gains that electron:

Cl (2, 8, 7) + one electron → Cl- (2, 8, 8)

Both ions now have the stable configuration of a noble gas — neon for Na+, argon for Cl-. The oppositely charged ions are held by strong electrostatic attraction in a giant lattice.

**(c) Why B melts so easily despite strong bonds**

This is the distinction learners most often miss. Two different forces are involved:

1. The **covalent bonds within each molecule** are indeed strong.
2. The **intermolecular forces between separate molecules** are weak.

When substance B melts, the molecules are separated from one another — but the covalent bonds inside each molecule are **not broken**. Melting only has to overcome the weak intermolecular forces, so it happens at a low temperature.

By contrast, melting an ionic solid requires breaking the strong electrostatic attractions of the entire lattice, which is why sodium chloride needs 801 degrees.

**Answer:** (a) A ionic, B simple covalent (b) sodium chloride, with one electron transferred from Na to Cl (c) melting separates molecules and overcomes only the weak forces between them, not the strong bonds within them.`,
          teachingTip:
            "Two errors dominate this topic every year. The first is confusing intramolecular bonds with intermolecular forces, which is why learners cannot explain how a substance with 'strong covalent bonds' boils at room temperature. Address it physically: have six pairs of learners link arms tightly in pairs (the covalent bonds), then stand loosely near each other (the intermolecular forces). Ask what has to break for the group to spread across the room — the pairs stay linked. That image resolves the confusion permanently. The second error is asserting that ionic compounds never conduct. Insist on the full sentence every time: 'ionic compounds conduct when molten or in solution, because the ions become free to move'. Drill the conditional clause until it is automatic. Finish by giving learners property data for three unknown substances and having them deduce the bonding, which is exactly how the question is asked in the examination.",
          quiz: [
            {
              prompt: "Atoms combine chemically in order to",
              options: [
                "increase their mass",
                "achieve a stable outer electron configuration",
                "gain protons",
                "become radioactive",
              ],
              correctIndex: 1,
              explanation:
                "The duplet or octet rule describes the stable arrangement atoms move towards.",
            },
            {
              prompt: "Ionic bonding involves",
              options: [
                "sharing of electrons",
                "complete transfer of electrons",
                "delocalised electrons",
                "sharing of protons",
              ],
              correctIndex: 1,
              explanation:
                "Electrons pass from a metal to a non-metal, forming oppositely charged ions.",
            },
            {
              prompt: "Which substance contains a triple covalent bond?",
              options: ["H2", "O2", "N2", "HCl"],
              correctIndex: 2,
              explanation:
                "Nitrogen atoms share three pairs of electrons to complete their octets.",
            },
            {
              prompt: "Ionic compounds conduct electricity when",
              options: [
                "solid",
                "molten or dissolved in water",
                "cooled below freezing",
                "never",
              ],
              correctIndex: 1,
              explanation:
                "Conduction requires ions to be free to move, which they are only when molten or in solution.",
            },
            {
              prompt: "Metallic bonding is best described as",
              options: [
                "positive ions in a sea of delocalised electrons",
                "transfer of electrons between metals",
                "sharing of electron pairs",
                "attraction between neutral atoms",
              ],
              correctIndex: 0,
              explanation:
                "The mobile electron sea explains conductivity, malleability and lustre.",
            },
            {
              prompt: "Simple covalent substances have low melting points because",
              options: [
                "their covalent bonds are weak",
                "the forces between their molecules are weak",
                "they contain no electrons",
                "they are always gases",
              ],
              correctIndex: 1,
              explanation:
                "Melting separates molecules and overcomes only intermolecular forces, not the bonds within them.",
            },
            {
              prompt: "A bond in which both shared electrons come from the same atom is",
              options: ["Ionic", "Metallic", "Co-ordinate (dative)", "Double covalent"],
              correctIndex: 2,
              explanation:
                "The ammonium ion contains such a bond, indistinguishable once formed from a normal covalent bond.",
            },
            {
              prompt: "A compound formed between a metal and a non-metal is most likely",
              options: ["Covalent", "Ionic", "Metallic", "Dative"],
              correctIndex: 1,
              explanation:
                "Metals lose electrons and non-metals gain them, producing ions.",
            },
            {
              prompt: "Metals are malleable because",
              options: [
                "their atoms are very small",
                "layers of ions can slide without breaking the bonding",
                "they contain no bonds",
                "they have full outer shells",
              ],
              correctIndex: 1,
              explanation:
                "The delocalised electron sea adjusts as layers move, so the metal deforms rather than shattering.",
            },
            {
              prompt: "In sodium chloride, the sodium ion has the configuration",
              options: ["2, 8, 1", "2, 8", "2, 8, 8", "2, 8, 2"],
              correctIndex: 1,
              explanation:
                "Losing its single valence electron leaves sodium with the neon configuration 2, 8.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Using electron configurations, show how magnesium (Z = 12) and oxygen (Z = 8) form magnesium oxide.",
              answerKey:
                "Mg is 2, 8, 2 and loses two electrons to become Mg2+ with configuration 2, 8. O is 2, 6 and gains those two electrons to become O2- with configuration 2, 8. The oppositely charged ions attract electrostatically to give MgO. Award 2 marks for each configuration before transfer, 2 for each ion after transfer, 2 for stating the electrostatic attraction and the formula.",
              marks: 10,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Give four differences between ionic and simple covalent compounds in terms of their physical properties.",
              answerKey:
                "High versus low melting and boiling points; conduct when molten or in solution versus never conduct; usually soluble in water versus usually insoluble in water but soluble in organic solvents; hard brittle crystalline solids versus gases, liquids or soft solids. Award 2 marks per complete two-sided difference.",
              marks: 8,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "A solid conducts electricity, can be drawn into wire, and melts at 1085 degrees Celsius. The bonding present is",
              options: ["Ionic", "Simple covalent", "Metallic", "Co-ordinate"],
              correctIndex: 2,
              answerKey:
                "Conduction in the solid state rules out ionic; ductility and a high melting point rule out simple covalent. Delocalised electrons account for all three properties. The substance is copper. Option C.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain, using the metallic bonding model, why metals conduct electricity and are malleable while ionic solids conduct only when molten and are brittle.",
              answerKey:
                "Metals: valence electrons are delocalised and free to move through the lattice, carrying charge, so conduction occurs in the solid state; when a force is applied, layers of positive ions slide over one another while the electron sea continues to bind them, so the metal deforms rather than breaking. Ionic solids: ions are fixed in the lattice and cannot move, so no conduction occurs until melting or dissolution frees them; when a force displaces one layer, like charges come into alignment and repel, splitting the crystal, which is why ionic solids are brittle. Award 3 marks for metallic conduction, 3 for malleability, 3 for ionic conduction, 3 for brittleness.",
              marks: 12,
            },
            {
              type: "ESSAY",
              prompt:
                "Describe the three main types of chemical bonding, explaining in each case how the bond is formed and how the bonding accounts for the characteristic properties of substances containing it. Illustrate your answer with named examples.",
              answerKey:
                "Award marks as follows: ionic bonding, with electron transfer, formation of oppositely charged ions, electrostatic attraction in a giant lattice, and properties explained — high melting point, conduction when molten or aqueous, solubility, brittleness — 10 marks; covalent bonding, with sharing of electron pairs, single, double and triple bonds, the distinction between strong intramolecular bonds and weak intermolecular forces, and properties explained, 10 marks; metallic bonding, with delocalised electrons and a lattice of positive ions, and properties explained — conductivity, malleability, ductility, lustre, high melting point — 8 marks; at least three correct named examples with formulae, 4 marks; statement of the metal/non-metal rule for predicting bond type, 3 marks. A learner who describes bond formation accurately but does not connect it to properties should not exceed 15.",
              marks: 35,
            },
          ],
        },
      ],
    },
  ],
};
