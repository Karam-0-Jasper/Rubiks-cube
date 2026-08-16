import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 11,
// Semester One, Period III: Electrolytes - Acid, Bases and Salts. The CONTENTS
// list is expanded to one topic per top-level item: 1. Electrolytes and
// non-electrolytes; 2. Theories (Arrhenius & Bronsted-Lowry) and properties of
// acids and bases; 3. pH and pOH calculations; 4. Percent dissociation;
// 5. Acid-Base properties of salts; 6. Properties of Lewis acids and bases;
// 7. Buffer solutions; 8. Acid-base titrations.
export const chemistryG11P3: PeriodContent = {
  grade: 11,
  number: 3,
  title: "Electrolytes - Acid, Bases and Salts",
  summary:
    "Period III of the MoE Grade 11 Chemistry syllabus. Learners distinguish electrolytes from non-electrolytes, define acids and bases by the Arrhenius, Bronsted-Lowry and Lewis theories and list their properties, calculate pH and pOH, work out the percent dissociation of weak acids, predict the acid-base nature of salt solutions from hydrolysis, describe how buffer solutions resist pH change, and carry out acid-base titrations with indicators.",
  topics: [
    {
      // source: LibreTexts (Chemistry: The Central Science) — 4.1 General Properties of Aqueous Solutions (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/04%3A_Reactions_in_Aqueous_Solution/4.01%3A_General_Properties_of_Aqueous_Solutions)
      slug: "electrolytes-and-non-electrolytes",
      title: "Electrolytes and Non-electrolytes",
      objective:
        "By the end of the topic, learners should be able to define electrolytes and non-electrolytes, classify substances as strong, weak or non-electrolytes, and explain how electrolytes conduct electricity. (MoE Grade 11 Period III, CONTENTS 1.)",
      estimatedMinutes: 110,
      notes: `## Introduction

- Some solutions conduct electricity and some do not — it depends on whether ions are present.
- **This topic:** electrolytes, non-electrolytes, and how ions carry current.

## Definitions

- **Electrolyte** — a substance that forms **ions** when dissolved in water, so its solution **conducts electricity**.
- **Non-electrolyte** — a substance that dissolves as **neutral molecules**, so its solution does **not** conduct electricity.

## Strong and weak electrolytes

| Class | Ionisation in water | Conducts | Examples |
|---|---|---|---|
| Strong electrolyte | fully ionised | very well | NaCl, HCl, NaOH, H₂SO₄ |
| Weak electrolyte | only partly ionised | weakly | acetic acid (CH₃COOH), ammonia (NH₃) |
| Non-electrolyte | does not ionise | not at all | sugar, ethanol, glucose |

## How electrolytes conduct

- When an electrolyte dissolves it splits (dissociates) into **positive ions (cations)** and **negative ions (anions)**.
- The ions are free to move; they carry the current toward the electrodes when a voltage is applied.
- A strong electrolyte gives many ions (bright bulb); a weak one gives few (dim bulb); a non-electrolyte gives none (no light).

## Common errors and misconceptions

- **All dissolved substances conduct** — sugar dissolves but does not ionise, so it does not conduct.
- **Strong = concentrated** — "strong" means fully ionised, not concentrated.
- **Electrons carry the current in solution** — moving **ions**, not electrons, carry the charge through the solution.`,
      workedExample: `**Task.** Three solutions of equal concentration are tested with a conductivity bulb: sodium chloride (NaCl), acetic acid (CH₃COOH) and sugar. Predict the brightness of the bulb in each case and explain why.

**Sodium chloride (NaCl)**
- A strong electrolyte: it dissociates completely into Na⁺ and Cl⁻.
- Many free ions carry the current → **bulb glows brightly**.

**Acetic acid (CH₃COOH)**
- A weak electrolyte: only a small fraction ionises into CH₃COO⁻ and H⁺.
- Few free ions → **bulb glows dimly**.

**Sugar**
- A non-electrolyte: it dissolves as whole neutral molecules with no ions.
- No free ions → **bulb does not light**.

**Conclusion.** Brightness follows the number of free ions: NaCl (strong) > acetic acid (weak) > sugar (none). Conductivity depends on the presence and number of mobile ions, not simply on dissolving.`,
      quiz: [
        { prompt: "An electrolyte forms … when dissolved in water.", options: ["ions", "atoms only", "molecules only", "electrons"], correctIndex: 0, explanation: "Electrolytes form ions." },
        { prompt: "A non-electrolyte dissolves as…", options: ["neutral molecules", "ions", "metals", "gases only"], correctIndex: 0, explanation: "No ions form, so no conduction." },
        { prompt: "A strong electrolyte is … ionised in water.", options: ["fully", "partly", "not", "half"], correctIndex: 0, explanation: "Strong electrolytes ionise completely." },
        { prompt: "A weak electrolyte is … ionised.", options: ["partly", "fully", "not", "completely"], correctIndex: 0, explanation: "Only a fraction ionises." },
        { prompt: "Which is a non-electrolyte?", options: ["sugar", "NaCl", "HCl", "NaOH"], correctIndex: 0, explanation: "Sugar does not ionise." },
        { prompt: "Which is a strong electrolyte?", options: ["NaCl", "sugar", "ethanol", "glucose"], correctIndex: 0, explanation: "NaCl fully dissociates." },
        { prompt: "Acetic acid is an example of a…", options: ["weak electrolyte", "strong electrolyte", "non-electrolyte", "metal"], correctIndex: 0, explanation: "It ionises only partly." },
        { prompt: "In solution the current is carried by moving…", options: ["ions", "electrons", "molecules", "atoms"], correctIndex: 0, explanation: "Ions carry charge in solution." },
        { prompt: "A bright conductivity bulb indicates a … electrolyte.", options: ["strong", "weak", "non-", "neutral"], correctIndex: 0, explanation: "Many ions conduct well." },
        { prompt: "Positive ions are called…", options: ["cations", "anions", "electrons", "molecules"], correctIndex: 0, explanation: "Cations are positive." },
        { prompt: "Negative ions are called…", options: ["anions", "cations", "protons", "atoms"], correctIndex: 0, explanation: "Anions are negative." },
        { prompt: "Which solution will NOT conduct electricity?", options: ["glucose solution", "salt solution", "hydrochloric acid", "sodium hydroxide"], correctIndex: 0, explanation: "Glucose is a non-electrolyte." },
        { prompt: "'Strong' electrolyte refers to the degree of…", options: ["ionisation", "concentration", "colour", "temperature"], correctIndex: 0, explanation: "Strong means fully ionised." },
        { prompt: "Ammonia solution is a … electrolyte.", options: ["weak", "strong", "non-", "solid"], correctIndex: 0, explanation: "NH₃ ionises only partly." },
        { prompt: "A dim bulb suggests … free ions.", options: ["few", "many", "no", "infinite"], correctIndex: 0, explanation: "Weak electrolytes give few ions." },
        { prompt: "Sodium hydroxide in water gives…", options: ["Na⁺ and OH⁻", "neutral molecules", "electrons", "sugar"], correctIndex: 0, explanation: "It dissociates into ions." },
        { prompt: "Which pair are both strong electrolytes?", options: ["HCl and NaCl", "sugar and ethanol", "acetic acid and ammonia", "glucose and NaCl"], correctIndex: 0, explanation: "Both HCl and NaCl fully ionise." },
        { prompt: "Ethanol dissolves in water but does not conduct because it forms…", options: ["no ions", "many ions", "only cations", "only anions"], correctIndex: 0, explanation: "Ethanol is a non-electrolyte." },
        { prompt: "The more ions in solution, the … the conductivity.", options: ["greater", "smaller", "zero", "unchanged"], correctIndex: 0, explanation: "More ions conduct better." },
        { prompt: "Which statement is TRUE?", options: ["strong electrolytes fully dissociate", "sugar is an electrolyte", "electrons move through the solution", "non-electrolytes conduct well"], correctIndex: 0, explanation: "Strong electrolytes dissociate completely." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define an electrolyte and a non-electrolyte, giving one example of each.", answerKey: "An electrolyte is a substance that forms ions when dissolved in water and whose solution conducts electricity (e.g. NaCl or HCl). A non-electrolyte dissolves as neutral molecules and its solution does not conduct electricity (e.g. sugar or ethanol). Award marks for each definition and example.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which of the following is a WEAK electrolyte?", options: ["acetic acid", "sodium chloride", "hydrochloric acid", "sugar"], correctIndex: 0, answerKey: "Acetic acid ionises only partly, so it is a weak electrolyte.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Electricity is conducted through an electrolyte solution by the movement of:", options: ["ions", "electrons", "molecules", "atoms"], correctIndex: 0, answerKey: "Free ions carry the current in solution.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain why a solution of sodium chloride conducts electricity but a solution of sugar does not.", answerKey: "Sodium chloride is an electrolyte: it dissociates in water into Na⁺ and Cl⁻ ions that are free to move and carry the current. Sugar is a non-electrolyte: it dissolves as whole neutral molecules with no ions, so there are no charge carriers and the solution does not conduct. Award marks for ions from NaCl carrying charge and no ions from sugar.", marks: 3 },
        { type: "ESSAY", prompt: "Compare strong electrolytes, weak electrolytes and non-electrolytes in terms of ionisation and electrical conductivity, giving an example of each and describing what would be seen with a conductivity bulb.", answerKey: "A full answer states that a strong electrolyte (e.g. NaCl or HCl) ionises completely, giving many free ions and high conductivity (bright bulb); a weak electrolyte (e.g. acetic acid or ammonia) ionises only partly, giving few ions and low conductivity (dim bulb); and a non-electrolyte (e.g. sugar or ethanol) does not ionise, gives no ions and does not conduct (no light). Award marks for the three classes with correct ionisation, an example each, and the conductivity/bulb observation.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 16.2 Brønsted-Lowry Acids and Bases (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/16%3A_AcidBase_Equilibria/16.02%3A_BrnstedLowry_Acids_and_Bases)
      slug: "theories-and-properties-of-acids-and-bases",
      title: "Theories and Properties of Acids and Bases",
      objective:
        "By the end of the topic, learners should be able to define acids and bases by the Arrhenius and Bronsted-Lowry theories, identify conjugate acid-base pairs, and list the general properties of acids and bases. (MoE Grade 11 Period III, CONTENTS 2.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- The idea of acids and bases grew from taste tests to precise theories of proton transfer.
- **This topic:** the Arrhenius and Bronsted-Lowry theories and the properties of acids and bases.

## Arrhenius theory

- **Arrhenius acid** — a substance that dissolves in water to give **hydrogen ions (H⁺)** (as hydronium, H₃O⁺).
- **Arrhenius base** — a substance that dissolves in water to give **hydroxide ions (OH⁻)**.
- Example: HCl → H⁺ + Cl⁻ (acid); NaOH → Na⁺ + OH⁻ (base).

## Bronsted-Lowry theory

- **Bronsted-Lowry acid** — a **proton (H⁺) donor**.
- **Bronsted-Lowry base** — a **proton (H⁺) acceptor**.
- This is broader than Arrhenius — it works without water.

## Conjugate acid-base pairs

- When an acid loses a proton it becomes its **conjugate base**; when a base gains a proton it becomes its **conjugate acid**.
- Example: HF ⇌ H⁺ + F⁻; HF and F⁻ are a conjugate pair (acid/base differ by one H⁺).

## Properties

| Property | Acids | Bases |
|---|---|---|
| Taste | sour | bitter |
| Feel | — | soapy/slippery |
| Litmus | turn blue litmus red | turn red litmus blue |
| With metals | give hydrogen gas | — |
| With carbonates | give carbon dioxide | — |
| Neutralisation | acid + base → salt + water | base + acid → salt + water |

## Common errors and misconceptions

- **Bronsted acids need water** — they only need to donate a proton; no water required.
- **Confusing conjugate pairs** — the acid and its conjugate base differ by exactly one H⁺.
- **All bases contain OH⁻** — Bronsted bases (e.g. NH₃) accept protons without containing hydroxide.`,
      workedExample: `**Task.** For the reaction NH₃ + H₂O ⇌ NH₄⁺ + OH⁻: (a) identify the Bronsted-Lowry acid and base on the left, and (b) name the two conjugate acid-base pairs.

**Part (a) — Acid and base**
- H₂O **donates** a proton to NH₃, so H₂O is the **Bronsted-Lowry acid**.
- NH₃ **accepts** the proton, so NH₃ is the **Bronsted-Lowry base**.

**Part (b) — Conjugate pairs**
- NH₃ (base) gains a proton to become NH₄⁺ (its conjugate acid): **NH₃ / NH₄⁺**.
- H₂O (acid) loses a proton to become OH⁻ (its conjugate base): **H₂O / OH⁻**.

**Conclusion.** H₂O acts as the acid and NH₃ as the base; the conjugate pairs are NH₃/NH₄⁺ and H₂O/OH⁻, each pair differing by a single proton.`,
      quiz: [
        { prompt: "An Arrhenius acid gives … ions in water.", options: ["H⁺ (hydrogen)", "OH⁻", "Na⁺", "Cl⁻"], correctIndex: 0, explanation: "Arrhenius acids release H⁺." },
        { prompt: "An Arrhenius base gives … ions in water.", options: ["OH⁻ (hydroxide)", "H⁺", "Na⁺", "SO₄²⁻"], correctIndex: 0, explanation: "Arrhenius bases release OH⁻." },
        { prompt: "A Bronsted-Lowry acid is a proton…", options: ["donor", "acceptor", "remover", "counter"], correctIndex: 0, explanation: "It donates H⁺." },
        { prompt: "A Bronsted-Lowry base is a proton…", options: ["acceptor", "donor", "creator", "splitter"], correctIndex: 0, explanation: "It accepts H⁺." },
        { prompt: "When an acid loses a proton it becomes its…", options: ["conjugate base", "conjugate acid", "salt", "water"], correctIndex: 0, explanation: "Acid → conjugate base." },
        { prompt: "When a base gains a proton it becomes its…", options: ["conjugate acid", "conjugate base", "salt", "oxide"], correctIndex: 0, explanation: "Base → conjugate acid." },
        { prompt: "A conjugate acid-base pair differs by one…", options: ["proton (H⁺)", "electron", "neutron", "atom of oxygen"], correctIndex: 0, explanation: "They differ by a single H⁺." },
        { prompt: "Acids taste…", options: ["sour", "sweet", "bitter", "salty"], correctIndex: 0, explanation: "Acids are sour." },
        { prompt: "Bases feel…", options: ["soapy/slippery", "sticky", "rough", "dry"], correctIndex: 0, explanation: "Bases feel slippery." },
        { prompt: "Acids turn blue litmus…", options: ["red", "green", "yellow", "blue"], correctIndex: 0, explanation: "Acids turn litmus red." },
        { prompt: "Bases turn red litmus…", options: ["blue", "red", "colourless", "black"], correctIndex: 0, explanation: "Bases turn litmus blue." },
        { prompt: "Acids react with metals to give…", options: ["hydrogen gas", "oxygen gas", "water only", "salt only"], correctIndex: 0, explanation: "Acid + metal → salt + H₂." },
        { prompt: "Acids react with carbonates to give…", options: ["carbon dioxide", "hydrogen", "ammonia", "chlorine"], correctIndex: 0, explanation: "Acid + carbonate → CO₂ + water + salt." },
        { prompt: "Acid + base →…", options: ["salt + water", "gas + metal", "acid + acid", "oxide + hydrogen"], correctIndex: 0, explanation: "Neutralisation gives salt and water." },
        { prompt: "In HF ⇌ H⁺ + F⁻, the conjugate base is…", options: ["F⁻", "HF", "H⁺", "H₂O"], correctIndex: 0, explanation: "HF loses H⁺ to form F⁻." },
        { prompt: "NH₃ acting as a base becomes … after gaining a proton.", options: ["NH₄⁺", "NH₂⁻", "N₂", "OH⁻"], correctIndex: 0, explanation: "NH₃ + H⁺ → NH₄⁺." },
        { prompt: "The Bronsted-Lowry theory is broader than Arrhenius because it does not need…", options: ["water", "protons", "acids", "bases"], correctIndex: 0, explanation: "It works without water." },
        { prompt: "Which base does NOT contain hydroxide but still accepts a proton?", options: ["NH₃", "NaOH", "KOH", "Ca(OH)₂"], correctIndex: 0, explanation: "Ammonia is a Bronsted base without OH⁻." },
        { prompt: "In HCl + H₂O → H₃O⁺ + Cl⁻, HCl is the…", options: ["acid (proton donor)", "base", "salt", "spectator"], correctIndex: 0, explanation: "HCl donates a proton to water." },
        { prompt: "Bases taste…", options: ["bitter", "sour", "sweet", "salty"], correctIndex: 0, explanation: "Bases are bitter." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the Arrhenius and Bronsted-Lowry definitions of an acid.", answerKey: "Arrhenius acid: a substance that dissolves in water to produce hydrogen ions, H⁺ (as H₃O⁺). Bronsted-Lowry acid: a proton (H⁺) donor. Award marks for each correct definition.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "In the reaction HCl + H₂O → H₃O⁺ + Cl⁻, water acts as a Bronsted-Lowry:", options: ["base (proton acceptor)", "acid (proton donor)", "salt", "spectator"], correctIndex: 0, answerKey: "Water accepts the proton, so it is the base.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Which pair of properties correctly describes acids?", options: ["sour taste; turn blue litmus red", "bitter taste; turn red litmus blue", "soapy feel; turn blue litmus red", "sweet taste; no effect on litmus"], correctIndex: 0, answerKey: "Acids are sour and turn blue litmus red.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "For the equilibrium CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺, identify the two conjugate acid-base pairs.", answerKey: "CH₃COOH (acid) / CH₃COO⁻ (its conjugate base) is one pair; H₂O (base) / H₃O⁺ (its conjugate acid) is the other pair. Award marks for both conjugate pairs correctly identified.", marks: 2 },
        { type: "ESSAY", prompt: "Explain the Arrhenius and Bronsted-Lowry theories of acids and bases, using the reaction of ammonia with water to illustrate conjugate acid-base pairs, and list four general properties of acids.", answerKey: "A strong answer defines the Arrhenius acid/base (produces H⁺/OH⁻ in water) and the Bronsted-Lowry acid/base (proton donor/acceptor), noting the Bronsted theory is broader. For NH₃ + H₂O ⇌ NH₄⁺ + OH⁻: water donates a proton (acid) and ammonia accepts it (base), giving conjugate pairs NH₃/NH₄⁺ and H₂O/OH⁻. Four acid properties: sour taste, turn blue litmus red, react with reactive metals to release hydrogen gas, react with carbonates to release carbon dioxide (also neutralise bases to form salt and water). Award marks for both theories, the conjugate-pair example, and four correct acid properties.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 16.4 The pH Scale (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/16%3A_AcidBase_Equilibria/16.04%3A_The_pH_Scale)
      slug: "ph-and-poh-calculations",
      title: "pH and pOH Calculations",
      objective:
        "By the end of the topic, learners should be able to use pH = −log[H⁺], pOH = −log[OH⁻] and pH + pOH = 14 to classify and calculate the acidity of solutions. (MoE Grade 11 Period III, CONTENTS 3.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- The **pH scale** turns very small hydrogen-ion concentrations into a simple 0–14 number.
- **This topic:** pH, pOH and the calculations that link them.

## The formulas

- **pH = −log[H⁺]** — a measure of how acidic a solution is.
- **pOH = −log[OH⁻]** — a measure of how basic a solution is.
- **pH + pOH = 14** (at 25 °C).
- **Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴** — the ionic product of water.

## The pH scale

| pH | Nature | [H⁺] |
|---|---|---|
| < 7 | acidic | greater than 10⁻⁷ |
| = 7 | neutral | 10⁻⁷ |
| > 7 | basic (alkaline) | less than 10⁻⁷ |

- The scale is **logarithmic**: a change of 1 pH unit means a **ten-fold** change in [H⁺]. pH 3 is ten times more acidic than pH 4.

## Working backwards

- To find [H⁺] from pH: **[H⁺] = 10⁻ᵖᴴ**.
- For a strong acid, [H⁺] equals the acid concentration (it ionises fully).

## Common errors and misconceptions

- **Forgetting the minus sign** — pH = −log[H⁺]; the log of a small number is negative.
- **Treating the scale as linear** — each pH unit is a factor of 10.
- **pH + pOH ≠ 14** — at 25 °C they always add to 14.`,
      workedExample: `**Task.** A solution has a hydroxide-ion concentration [OH⁻] = 1.0 × 10⁻³ mol/dm³. Calculate (a) the pOH, (b) the pH, and (c) state whether the solution is acidic or basic.

**Part (a) — pOH**
1. pOH = −log[OH⁻] = −log(1.0 × 10⁻³).
2. pOH = **3.0**.

**Part (b) — pH**
1. pH + pOH = 14, so pH = 14 − pOH.
2. pH = 14 − 3.0 = **11.0**.

**Part (c) — Nature**
- pH = 11.0 is greater than 7, so the solution is **basic (alkaline)**.

**Check.** A high [OH⁻] gives a low pOH and a high pH, confirming a basic solution. Using Kw: [H⁺] = 1.0 × 10⁻¹⁴ ÷ 1.0 × 10⁻³ = 1.0 × 10⁻¹¹, and −log(1.0 × 10⁻¹¹) = 11.0 — the same pH.`,
      quiz: [
        { prompt: "pH is defined as…", options: ["−log[H⁺]", "log[H⁺]", "−log[OH⁻]", "[H⁺]"], correctIndex: 0, explanation: "pH = −log[H⁺]." },
        { prompt: "pOH is defined as…", options: ["−log[OH⁻]", "−log[H⁺]", "log[OH⁻]", "[OH⁻]"], correctIndex: 0, explanation: "pOH = −log[OH⁻]." },
        { prompt: "At 25 °C, pH + pOH = …", options: ["14", "7", "1", "0"], correctIndex: 0, explanation: "pH + pOH = 14." },
        { prompt: "The ionic product of water Kw is…", options: ["1.0 × 10⁻¹⁴", "1.0 × 10⁻⁷", "14", "1.0"], correctIndex: 0, explanation: "Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴." },
        { prompt: "A neutral solution has pH…", options: ["7", "0", "14", "1"], correctIndex: 0, explanation: "Neutral pH is 7." },
        { prompt: "A solution with pH 3 is…", options: ["acidic", "basic", "neutral", "salty"], correctIndex: 0, explanation: "pH below 7 is acidic." },
        { prompt: "A solution with pH 10 is…", options: ["basic", "acidic", "neutral", "pure water"], correctIndex: 0, explanation: "pH above 7 is basic." },
        { prompt: "A change of 1 pH unit means [H⁺] changes by a factor of…", options: ["10", "2", "100", "1"], correctIndex: 0, explanation: "The scale is logarithmic (×10)." },
        { prompt: "If [H⁺] = 1.0 × 10⁻² mol/dm³, pH = …", options: ["2", "12", "7", "0.02"], correctIndex: 0, explanation: "−log(10⁻²) = 2." },
        { prompt: "To find [H⁺] from pH, use [H⁺] = …", options: ["10⁻ᵖᴴ", "10ᵖᴴ", "−pH", "pH/14"], correctIndex: 0, explanation: "[H⁺] = 10 to the power −pH." },
        { prompt: "If pOH = 5, then pH = …", options: ["9", "5", "14", "19"], correctIndex: 0, explanation: "14 − 5 = 9." },
        { prompt: "pH 3 is … times more acidic than pH 5.", options: ["100", "2", "10", "1000"], correctIndex: 0, explanation: "Two units = 10² = 100 times." },
        { prompt: "For a strong acid, [H⁺] equals the…", options: ["acid concentration", "pOH", "Kw", "volume"], correctIndex: 0, explanation: "Strong acids ionise fully." },
        { prompt: "If [OH⁻] = 1.0 × 10⁻⁴, pOH = …", options: ["4", "10", "14", "0.4"], correctIndex: 0, explanation: "−log(10⁻⁴) = 4." },
        { prompt: "A pH of 0 corresponds to a very … solution.", options: ["strongly acidic", "strongly basic", "neutral", "pure"], correctIndex: 0, explanation: "Low pH is very acidic." },
        { prompt: "Pure water at 25 °C has [H⁺] = …", options: ["1.0 × 10⁻⁷", "1.0 × 10⁻¹⁴", "1.0", "7"], correctIndex: 0, explanation: "Neutral water: [H⁺] = 10⁻⁷." },
        { prompt: "The pH scale usually runs from…", options: ["0 to 14", "1 to 7", "0 to 7", "−14 to 14"], correctIndex: 0, explanation: "0 (very acidic) to 14 (very basic)." },
        { prompt: "If pH = 12, the solution is…", options: ["basic", "acidic", "neutral", "an acid"], correctIndex: 0, explanation: "pH above 7 is basic." },
        { prompt: "The minus sign in pH = −log[H⁺] makes pH…", options: ["positive for small [H⁺]", "always negative", "zero", "greater than 14"], correctIndex: 0, explanation: "The log of a small number is negative, so −log is positive." },
        { prompt: "Which solution has the highest [H⁺]?", options: ["pH 1", "pH 7", "pH 10", "pH 14"], correctIndex: 0, explanation: "Lower pH means higher [H⁺]." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Write the formulas for pH and pOH and state the value of pH + pOH at 25 °C.", answerKey: "pH = −log[H⁺] and pOH = −log[OH⁻]. At 25 °C, pH + pOH = 14. Award marks for both formulas and the value 14.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "A solution has [H⁺] = 1.0 × 10⁻⁴ mol/dm³. Its pH is:", options: ["4", "10", "14", "0.0001"], correctIndex: 0, answerKey: "pH = −log(1.0 × 10⁻⁴) = 4.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Which pH value corresponds to the most basic solution?", options: ["13", "7", "3", "1"], correctIndex: 0, answerKey: "The highest pH (13) is the most basic.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "A solution has pOH = 2. Calculate its pH and state whether it is acidic or basic.", answerKey: "pH = 14 − pOH = 14 − 2 = 12. Since pH 12 is greater than 7, the solution is basic (alkaline). Award marks for the pH value and the correct classification.", marks: 2 },
        { type: "ESSAY", prompt: "Explain what the pH scale measures, why it is logarithmic, and show with a calculation how pH, pOH, [H⁺] and [OH⁻] are related for a solution with [H⁺] = 1.0 × 10⁻³ mol/dm³.", answerKey: "A full answer explains that pH measures the hydrogen-ion concentration of a solution (pH = −log[H⁺]) on a scale where below 7 is acidic, 7 is neutral and above 7 is basic; it is logarithmic because each unit corresponds to a ten-fold change in [H⁺]. For [H⁺] = 1.0 × 10⁻³: pH = −log(10⁻³) = 3 (acidic); using Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴, [OH⁻] = 10⁻¹⁴/10⁻³ = 10⁻¹¹, so pOH = 11 and pH + pOH = 3 + 11 = 14. Award marks for the meaning of pH, the logarithmic nature, and the correct linked calculation.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 16.6 Weak Acids (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/16%3A_AcidBase_Equilibria/16.06%3A_Weak_Acids)
      slug: "percent-dissociation",
      title: "Percent Dissociation",
      objective:
        "By the end of the topic, learners should be able to define and calculate the percent dissociation (ionisation) of a weak acid and explain how it varies with concentration. (MoE Grade 11 Period III, CONTENTS 4.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- Weak acids only partly ionise; the **percent dissociation** tells us how much.
- **This topic:** calculating percent dissociation and how it changes with dilution.

## Definition and formula

- **Percent dissociation (ionisation)** — the fraction of the acid that has ionised, expressed as a percentage.

**percent dissociation = ([H⁺] at equilibrium ÷ initial acid concentration) × 100**

- Uses the concentration of H⁺ formed compared with the original acid.

## Link to Ka

- A **larger Ka** means the acid ionises more, giving a larger [H⁺] and a higher percent dissociation.
- Strong acids are ~100% dissociated; weak acids are only a few percent dissociated.

## Effect of dilution

- Percent dissociation **increases as the solution is diluted** (lower concentration).
- So the *fraction* ionised rises on dilution, even though the actual [H⁺] falls.

## Common errors and misconceptions

- **Confusing percent dissociation with concentration** — dilute weak acids have a higher percent dissociation but a lower [H⁺].
- **Assuming weak acids ionise fully** — only a small fraction ionises.
- **Forgetting to multiply by 100** — the answer is a percentage.`,
      workedExample: `**Task.** A 0.100 mol/dm³ solution of a weak acid HA has a hydrogen-ion concentration of [H⁺] = 1.3 × 10⁻³ mol/dm³ at equilibrium. (a) Calculate its percent dissociation. (b) State what happens to the percent dissociation if the acid is diluted.

**Part (a) — Percent dissociation**
1. percent dissociation = ([H⁺] ÷ initial acid concentration) × 100.
2. = (1.3 × 10⁻³ ÷ 0.100) × 100.
3. = (0.013) × 100 = **1.3%**.

**Part (b) — Effect of dilution**
- On dilution the percent dissociation **increases** (a larger fraction of the acid ionises), even though the actual [H⁺] becomes smaller.

**Conclusion.** Only about 1.3% of the acid molecules are ionised, confirming it is a weak acid; diluting the solution would raise this percentage.`,
      quiz: [
        { prompt: "Percent dissociation measures the … of acid that ionises.", options: ["fraction", "mass", "volume", "colour"], correctIndex: 0, explanation: "It is the fraction ionised as a percentage." },
        { prompt: "Percent dissociation = ([H⁺] ÷ initial acid conc) × …", options: ["100", "10", "14", "1000"], correctIndex: 0, explanation: "Multiply the fraction by 100." },
        { prompt: "A strong acid is about … dissociated.", options: ["100%", "1%", "0%", "50%"], correctIndex: 0, explanation: "Strong acids ionise almost completely." },
        { prompt: "A weak acid is only … dissociated.", options: ["a few percent", "100%", "0%", "90%"], correctIndex: 0, explanation: "Weak acids ionise partly." },
        { prompt: "A larger Ka means the acid ionises…", options: ["more", "less", "not at all", "the same"], correctIndex: 0, explanation: "Higher Ka = more ionisation." },
        { prompt: "On dilution, the percent dissociation of a weak acid…", options: ["increases", "decreases", "stays the same", "becomes zero"], correctIndex: 0, explanation: "Percent dissociation rises on dilution." },
        { prompt: "If [H⁺] = 1.3 × 10⁻³ and acid = 0.100 M, percent dissociation is…", options: ["1.3%", "13%", "0.13%", "130%"], correctIndex: 0, explanation: "(1.3e-3/0.100)×100 = 1.3%." },
        { prompt: "When a weak acid is diluted, its actual [H⁺]…", options: ["decreases", "increases", "stays constant", "doubles"], correctIndex: 0, explanation: "[H⁺] falls even as the fraction ionised rises." },
        { prompt: "Which acid has the higher percent dissociation at the same concentration?", options: ["one with larger Ka", "one with smaller Ka", "a stronger salt", "any base"], correctIndex: 0, explanation: "Bigger Ka means more ionisation." },
        { prompt: "Percent dissociation is expressed as a…", options: ["percentage", "molar mass", "volume", "pH"], correctIndex: 0, explanation: "It is a percent." },
        { prompt: "A 0.10 M acid that is 2% dissociated has [H⁺] of…", options: ["2.0 × 10⁻³ M", "0.02 M", "2.0 M", "0.10 M"], correctIndex: 0, explanation: "0.02 × 0.10 = 2.0 × 10⁻³ M." },
        { prompt: "Weak acids conduct electricity … than strong acids.", options: ["less well", "better", "the same", "not at all"], correctIndex: 0, explanation: "Fewer ions means weaker conduction." },
        { prompt: "The 'initial acid concentration' in the formula is the concentration…", options: ["before any ionisation", "at the end", "of water", "of the salt"], correctIndex: 0, explanation: "It is the starting concentration." },
        { prompt: "Which value shows the strongest acid at equal concentration?", options: ["100% dissociation", "1% dissociation", "0.1% dissociation", "5% dissociation"], correctIndex: 0, explanation: "Full dissociation means strongest." },
        { prompt: "Acetic acid (0.1 M) is about … dissociated.", options: ["1.3%", "50%", "100%", "0%"], correctIndex: 0, explanation: "Roughly 1.3% at 0.1 M." },
        { prompt: "If percent dissociation increases but [H⁺] falls, the acid has been…", options: ["diluted", "concentrated", "heated to dryness", "neutralised fully"], correctIndex: 0, explanation: "Dilution raises the fraction ionised." },
        { prompt: "The data needed to find percent dissociation are [H⁺] and the…", options: ["initial acid concentration", "temperature", "colour", "volume of water"], correctIndex: 0, explanation: "Compare [H⁺] with initial concentration." },
        { prompt: "Percent dissociation of a strong acid is close to…", options: ["100%", "1%", "10%", "0%"], correctIndex: 0, explanation: "Strong acids are fully ionised." },
        { prompt: "A weak acid solution contains mostly…", options: ["un-ionised molecules", "ions", "metal atoms", "water only"], correctIndex: 0, explanation: "Most of the weak acid stays un-ionised." },
        { prompt: "Percent dissociation links directly to the acid's…", options: ["strength", "colour", "mass number", "boiling point"], correctIndex: 0, explanation: "It reflects the acid's strength." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define percent dissociation and give its formula.", answerKey: "Percent dissociation (ionisation) is the fraction of a weak acid that has ionised, expressed as a percentage. Formula: percent dissociation = ([H⁺] at equilibrium ÷ initial acid concentration) × 100. Award marks for the definition and the formula.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "A 0.20 mol/dm³ weak acid produces [H⁺] = 2.0 × 10⁻³ mol/dm³. Its percent dissociation is:", options: ["1.0%", "10%", "0.1%", "20%"], correctIndex: 0, answerKey: "(2.0 × 10⁻³ / 0.20) × 100 = 1.0%.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "As a weak acid solution is diluted, its percent dissociation:", options: ["increases", "decreases", "stays the same", "becomes zero"], correctIndex: 0, answerKey: "Percent dissociation increases on dilution.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between a strong acid and a weak acid in terms of percent dissociation.", answerKey: "A strong acid ionises almost completely in water, so its percent dissociation is close to 100%. A weak acid ionises only partly, so its percent dissociation is small (often only a few percent) and its solution contains mostly un-ionised molecules. Award marks for the ~100% strong-acid dissociation and the low weak-acid dissociation.", marks: 3 },
        { type: "ESSAY", prompt: "Explain what percent dissociation tells us about a weak acid, how it relates to the acid ionisation constant Ka, and why it increases when the acid is diluted.", answerKey: "A full answer explains that percent dissociation is the fraction of acid molecules that have ionised, calculated as ([H⁺]/initial concentration) × 100; a small value indicates a weak acid with mostly un-ionised molecules. A larger Ka corresponds to greater ionisation and hence a higher percent dissociation and [H⁺]. On dilution the equilibrium shifts to produce relatively more ions, so the fraction ionised (percent dissociation) increases even though the actual [H⁺] falls. Award marks for the meaning of percent dissociation, the link to Ka, and the dilution effect.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 16.9 Acid-Base Properties of Salt Solutions (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/16%3A_AcidBase_Equilibria/16.09%3A_Acid-Base_Properties_of_Salt_Solutions)
      slug: "acid-base-properties-of-salts",
      title: "Acid-Base Properties of Salts",
      objective:
        "By the end of the topic, learners should be able to predict whether a salt solution is acidic, basic or neutral using the strengths of its parent acid and base and the idea of hydrolysis. (MoE Grade 11 Period III, CONTENTS 5.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- Dissolving a salt does not always give a neutral solution — some salts make the water acidic or basic.
- **This topic:** salt hydrolysis and predicting the pH of salt solutions.

## Salt hydrolysis

- **Hydrolysis** — the reaction of the ions of a salt with water to produce H⁺ or OH⁻ ions.
- Whether a salt is acidic, basic or neutral depends on the **strengths of the parent acid and base** it came from.

## The four cases

| Parent acid | Parent base | Salt solution | Example |
|---|---|---|---|
| strong | strong | neutral | NaCl |
| weak | strong | basic | CH₃COONa (sodium acetate) |
| strong | weak | acidic | NH₄Cl (ammonium chloride) |
| weak | weak | depends on the stronger | CH₃COONH₄ |

## Why each happens

- **Strong acid + strong base (NaCl):** neither ion reacts with water → **neutral** (pH 7).
- **Weak acid + strong base (CH₃COONa):** the acetate ion (conjugate base of a weak acid) reacts with water, releasing OH⁻ → **basic**. CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻.
- **Strong acid + weak base (NH₄Cl):** the ammonium ion (conjugate acid of a weak base) reacts with water, releasing H⁺ → **acidic**. NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺.

## Common errors and misconceptions

- **All salts are neutral** — only salts of a strong acid and strong base are neutral.
- **Reversing the rule** — a salt of a weak acid and strong base is basic (not acidic).
- **Forgetting which ion hydrolyses** — the ion from the *weaker* parent reacts with water.`,
      workedExample: `**Task.** Predict whether the following salt solutions are acidic, basic or neutral, giving the parent acid and base for each: (a) NaCl, (b) CH₃COONa, (c) NH₄Cl.

**(a) NaCl**
- Parent acid HCl (strong); parent base NaOH (strong).
- Neither ion reacts with water → **neutral** (pH 7).

**(b) CH₃COONa (sodium acetate)**
- Parent acid CH₃COOH (weak); parent base NaOH (strong).
- The acetate ion reacts with water: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻, releasing OH⁻ → **basic**.

**(c) NH₄Cl (ammonium chloride)**
- Parent acid HCl (strong); parent base NH₃/NH₄OH (weak).
- The ammonium ion reacts with water: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺, releasing H⁺ → **acidic**.

**Conclusion.** NaCl is neutral, sodium acetate is basic, and ammonium chloride is acidic — decided by the relative strengths of the parent acid and base.`,
      quiz: [
        { prompt: "Hydrolysis is the reaction of salt ions with…", options: ["water", "acid only", "metal", "oxygen"], correctIndex: 0, explanation: "Ions react with water to give H⁺ or OH⁻." },
        { prompt: "A salt of a strong acid and strong base is…", options: ["neutral", "acidic", "basic", "a buffer"], correctIndex: 0, explanation: "Neither ion hydrolyses." },
        { prompt: "A salt of a weak acid and strong base is…", options: ["basic", "acidic", "neutral", "a gas"], correctIndex: 0, explanation: "The conjugate base releases OH⁻." },
        { prompt: "A salt of a strong acid and weak base is…", options: ["acidic", "basic", "neutral", "a metal"], correctIndex: 0, explanation: "The conjugate acid releases H⁺." },
        { prompt: "NaCl solution is…", options: ["neutral", "acidic", "basic", "a buffer"], correctIndex: 0, explanation: "From strong acid + strong base." },
        { prompt: "Sodium acetate (CH₃COONa) solution is…", options: ["basic", "acidic", "neutral", "a gas"], correctIndex: 0, explanation: "Acetate hydrolyses to give OH⁻." },
        { prompt: "Ammonium chloride (NH₄Cl) solution is…", options: ["acidic", "basic", "neutral", "an oxide"], correctIndex: 0, explanation: "Ammonium hydrolyses to give H⁺." },
        { prompt: "The acetate ion reacts with water to give CH₃COOH and…", options: ["OH⁻", "H⁺", "Cl⁻", "Na⁺"], correctIndex: 0, explanation: "It releases hydroxide ions." },
        { prompt: "The ammonium ion reacts with water to give NH₃ and…", options: ["H₃O⁺", "OH⁻", "Na⁺", "Cl⁻"], correctIndex: 0, explanation: "It releases hydronium ions." },
        { prompt: "Which salt gives a neutral solution?", options: ["NaCl", "CH₃COONa", "NH₄Cl", "Na₂CO₃"], correctIndex: 0, explanation: "Strong acid + strong base." },
        { prompt: "Which ion causes an acidic salt solution?", options: ["NH₄⁺", "Cl⁻", "Na⁺", "NO₃⁻"], correctIndex: 0, explanation: "Ammonium hydrolyses to release H⁺." },
        { prompt: "Which ion causes a basic salt solution?", options: ["CH₃COO⁻", "Na⁺", "Cl⁻", "K⁺"], correctIndex: 0, explanation: "Acetate hydrolyses to release OH⁻." },
        { prompt: "The ion that hydrolyses comes from the … parent.", options: ["weaker", "stronger", "neutral", "salt"], correctIndex: 0, explanation: "The weaker parent's ion reacts with water." },
        { prompt: "Potassium nitrate (from KOH + HNO₃) is…", options: ["neutral", "acidic", "basic", "a buffer"], correctIndex: 0, explanation: "Strong base + strong acid → neutral." },
        { prompt: "Sodium carbonate solution (weak acid parent) is…", options: ["basic", "acidic", "neutral", "a gas"], correctIndex: 0, explanation: "Carbonate hydrolyses to give OH⁻." },
        { prompt: "A neutral salt solution has pH about…", options: ["7", "1", "14", "3"], correctIndex: 0, explanation: "Neutral salts give pH 7." },
        { prompt: "Aluminium and iron(III) ions form … solutions in water.", options: ["acidic", "basic", "neutral", "colourless neutral"], correctIndex: 0, explanation: "Small highly charged metal ions hydrolyse to give H⁺." },
        { prompt: "Which parent combination gives a basic salt?", options: ["weak acid + strong base", "strong acid + strong base", "strong acid + weak base", "two strong acids"], correctIndex: 0, explanation: "Weak acid + strong base → basic salt." },
        { prompt: "The nature of a salt of a weak acid and weak base depends on the…", options: ["stronger of the two", "colour", "temperature", "volume"], correctIndex: 0, explanation: "The stronger parent decides." },
        { prompt: "Which salt would turn litmus blue?", options: ["CH₃COONa", "NH₄Cl", "NaCl", "KNO₃"], correctIndex: 0, explanation: "A basic salt turns litmus blue." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define salt hydrolysis and state whether a salt of a strong acid and a strong base is acidic, basic or neutral.", answerKey: "Salt hydrolysis is the reaction of the ions of a salt with water to produce H⁺ or OH⁻ ions. A salt of a strong acid and a strong base is neutral (neither ion hydrolyses). Award marks for the definition and the neutral classification.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "A solution of ammonium chloride (NH₄Cl) is:", options: ["acidic", "basic", "neutral", "a buffer"], correctIndex: 0, answerKey: "NH₄⁺ hydrolyses to give H₃O⁺, so the solution is acidic.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Which salt gives a basic solution in water?", options: ["sodium acetate (CH₃COONa)", "sodium chloride (NaCl)", "ammonium chloride (NH₄Cl)", "potassium nitrate (KNO₃)"], correctIndex: 0, answerKey: "Acetate (conjugate base of a weak acid) hydrolyses to give OH⁻.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain, with an equation, why a solution of sodium acetate is basic.", answerKey: "Sodium acetate comes from a weak acid (acetic acid) and a strong base (NaOH). The acetate ion is the conjugate base of the weak acid and reacts with water: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻. This releases hydroxide ions, making the solution basic. Award marks for identifying acetate hydrolysis, the equation, and the release of OH⁻.", marks: 3 },
        { type: "ESSAY", prompt: "Explain how the strengths of the parent acid and base determine whether a salt solution is acidic, basic or neutral, illustrating each case with a named salt and an equation where appropriate.", answerKey: "A full answer sets out the rules: strong acid + strong base gives a neutral salt (e.g. NaCl — neither ion reacts with water); weak acid + strong base gives a basic salt (e.g. CH₃COONa — CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻); strong acid + weak base gives an acidic salt (e.g. NH₄Cl — NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺); weak acid + weak base depends on which parent is stronger. It should note the ion from the weaker parent hydrolyses. Award marks for the correct rules, named salts for the three main cases, and at least one hydrolysis equation.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 16.11 Lewis Acids and Bases (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/16%3A_AcidBase_Equilibria/16.11%3A_Lewis_Acids_and_Bases)
      slug: "lewis-acids-and-bases",
      title: "Properties of Lewis Acids and Bases",
      objective:
        "By the end of the topic, learners should be able to define Lewis acids and bases in terms of electron pairs and identify them in reactions that form a coordinate bond. (MoE Grade 11 Period III, CONTENTS 6.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- The Lewis theory is the broadest acid-base idea — it focuses on **electron pairs**, not protons.
- **This topic:** Lewis acids and bases and the coordinate (dative) bonds they form.

## Definitions

- **Lewis acid** — an **electron-pair acceptor**.
- **Lewis base** — an **electron-pair donor** (has a lone pair to give).
- When they react, the base donates its lone pair to the acid, forming a **coordinate (dative) covalent bond**; the product is an **adduct** (complex).

## Examples

- **BF₃ + NH₃ → F₃B–NH₃.** BF₃ (electron-deficient boron) is the Lewis acid; NH₃ (lone pair on nitrogen) is the Lewis base.
- **H⁺** is a Lewis acid (it accepts an electron pair); **OH⁻** and NH₃ are Lewis bases (they donate a lone pair).

## Why the Lewis theory is broader

- Every Bronsted-Lowry reaction is also a Lewis reaction (the base donates a pair to H⁺).
- But the Lewis theory also covers reactions with **no proton transfer**, such as metal-ion complex formation (e.g. Al³⁺ with water molecules).

## Common errors and misconceptions

- **Lewis acids must contain hydrogen** — they accept electron pairs; many (BF₃, metal ions) have no acidic H.
- **Confusing donor and acceptor** — the base donates the lone pair; the acid accepts it.
- **Thinking Lewis and Bronsted disagree** — Lewis includes all Bronsted acid-base reactions and more.`,
      workedExample: `**Task.** In the reaction BF₃ + NH₃ → F₃B–NH₃, identify the Lewis acid and the Lewis base, state which species donates and which accepts, and name the type of bond formed.

**Step 1 — Look for the lone pair**
- Nitrogen in NH₃ has a **lone pair** of electrons available to donate.
- Boron in BF₃ is **electron-deficient** (only 6 electrons around it) and can accept a pair.

**Step 2 — Assign the roles**
- NH₃ **donates** its lone pair → NH₃ is the **Lewis base**.
- BF₃ **accepts** the electron pair → BF₃ is the **Lewis acid**.

**Step 3 — The bond formed**
- The shared pair comes entirely from the nitrogen, so the new B–N bond is a **coordinate (dative) covalent bond**, and F₃B–NH₃ is the adduct.

**Conclusion.** NH₃ is the Lewis base (electron-pair donor) and BF₃ is the Lewis acid (electron-pair acceptor); they join by a coordinate covalent bond to form an adduct.`,
      quiz: [
        { prompt: "A Lewis acid is an electron-pair…", options: ["acceptor", "donor", "remover", "sharer only"], correctIndex: 0, explanation: "Lewis acids accept electron pairs." },
        { prompt: "A Lewis base is an electron-pair…", options: ["donor", "acceptor", "creator", "splitter"], correctIndex: 0, explanation: "Lewis bases donate lone pairs." },
        { prompt: "A Lewis base must have a…", options: ["lone pair of electrons", "proton to give", "positive charge", "metal atom"], correctIndex: 0, explanation: "It donates a lone pair." },
        { prompt: "The bond formed when a Lewis base donates a pair is a…", options: ["coordinate (dative) covalent bond", "ionic bond", "metallic bond", "hydrogen bond"], correctIndex: 0, explanation: "Both electrons come from the base." },
        { prompt: "In BF₃ + NH₃, the Lewis acid is…", options: ["BF₃", "NH₃", "F⁻", "H⁺"], correctIndex: 0, explanation: "BF₃ accepts the electron pair." },
        { prompt: "In BF₃ + NH₃, the Lewis base is…", options: ["NH₃", "BF₃", "B", "F"], correctIndex: 0, explanation: "NH₃ donates its lone pair." },
        { prompt: "H⁺ acts as a Lewis…", options: ["acid", "base", "salt", "solvent"], correctIndex: 0, explanation: "It accepts an electron pair." },
        { prompt: "OH⁻ acts as a Lewis…", options: ["base", "acid", "metal", "gas"], correctIndex: 0, explanation: "It donates a lone pair." },
        { prompt: "The product of a Lewis acid-base reaction is called an…", options: ["adduct (complex)", "electrolyte", "isotope", "alloy"], correctIndex: 0, explanation: "The combined species is an adduct." },
        { prompt: "The Lewis theory focuses on … rather than protons.", options: ["electron pairs", "neutrons", "colour", "mass"], correctIndex: 0, explanation: "It is about electron-pair transfer." },
        { prompt: "Boron in BF₃ can act as a Lewis acid because it is…", options: ["electron-deficient", "electron-rich", "a metal", "negatively charged"], correctIndex: 0, explanation: "It has an empty orbital to accept a pair." },
        { prompt: "Every Bronsted-Lowry reaction is also a … reaction.", options: ["Lewis", "combustion", "redox only", "precipitation"], correctIndex: 0, explanation: "Lewis theory includes proton transfer." },
        { prompt: "A metal ion like Al³⁺ acts as a Lewis … toward water.", options: ["acid", "base", "salt", "electrolyte"], correctIndex: 0, explanation: "It accepts lone pairs from water." },
        { prompt: "The species that supplies BOTH electrons in the new bond is the…", options: ["Lewis base", "Lewis acid", "proton", "salt"], correctIndex: 0, explanation: "The base donates the whole pair." },
        { prompt: "Which is a Lewis base?", options: ["NH₃", "BF₃", "Al³⁺", "H⁺"], correctIndex: 0, explanation: "NH₃ has a lone pair to donate." },
        { prompt: "Which is a Lewis acid?", options: ["BF₃", "NH₃", "OH⁻", "F⁻"], correctIndex: 0, explanation: "BF₃ accepts an electron pair." },
        { prompt: "A Lewis acid does NOT need to contain…", options: ["hydrogen", "an empty orbital", "positive character", "an acceptor site"], correctIndex: 0, explanation: "Many Lewis acids have no acidic hydrogen." },
        { prompt: "The Lewis theory is the … of the three acid-base theories.", options: ["broadest", "narrowest", "oldest only", "least useful"], correctIndex: 0, explanation: "It covers the most reactions." },
        { prompt: "In forming an adduct, electrons are…", options: ["shared (from the base)", "transferred permanently", "destroyed", "lost as light"], correctIndex: 0, explanation: "The pair becomes shared in a dative bond." },
        { prompt: "A lone pair on nitrogen makes NH₃ a good Lewis…", options: ["base", "acid", "metal", "salt"], correctIndex: 0, explanation: "It can donate the lone pair." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a Lewis acid and a Lewis base.", answerKey: "A Lewis acid is an electron-pair acceptor. A Lewis base is an electron-pair donor (a species with a lone pair to give). Award marks for each correct definition.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "In the reaction BF₃ + NH₃ → F₃B–NH₃, ammonia (NH₃) behaves as a:", options: ["Lewis base (electron-pair donor)", "Lewis acid (electron-pair acceptor)", "Bronsted acid", "spectator"], correctIndex: 0, answerKey: "NH₃ donates its lone pair, so it is the Lewis base.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The bond formed between a Lewis acid and a Lewis base, in which both electrons come from the base, is a:", options: ["coordinate (dative) covalent bond", "ionic bond", "metallic bond", "hydrogen bond"], correctIndex: 0, answerKey: "It is a coordinate (dative) covalent bond.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain why the Lewis theory is considered broader than the Bronsted-Lowry theory.", answerKey: "The Bronsted-Lowry theory only covers reactions involving proton (H⁺) transfer, whereas the Lewis theory covers any reaction in which an electron pair is donated and accepted. Every Bronsted-Lowry reaction is also a Lewis reaction (the base donates a pair to H⁺), but the Lewis theory additionally includes reactions with no proton transfer, such as BF₃ + NH₃ and metal-ion complex formation. Award marks for the electron-pair basis and for noting Lewis includes non-proton reactions.", marks: 3 },
        { type: "ESSAY", prompt: "Explain the Lewis theory of acids and bases, using the reaction of boron trifluoride with ammonia to illustrate electron-pair donation and the formation of a coordinate bond, and relate the theory to the Bronsted-Lowry idea.", answerKey: "A full answer defines a Lewis acid as an electron-pair acceptor and a Lewis base as an electron-pair donor. In BF₃ + NH₃ → F₃B–NH₃, nitrogen's lone pair in NH₃ (the Lewis base) is donated to the electron-deficient boron in BF₃ (the Lewis acid), forming a coordinate (dative) covalent bond in which both electrons come from nitrogen, giving an adduct. It relates this to Bronsted-Lowry chemistry by noting that a proton (H⁺) is itself a Lewis acid accepting a lone pair from a base, so all Bronsted reactions are Lewis reactions, but the Lewis theory also covers reactions with no proton transfer. Award marks for the definitions, the BF₃/NH₃ electron-pair/coordinate-bond explanation, and the link to the Bronsted-Lowry theory.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 17.2 Buffered Solutions (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/17%3A_Additional_Aspects_of_Aqueous_Equilibria/17.02%3A_Buffered_Solutions)
      slug: "buffer-solutions",
      title: "Buffer Solutions",
      objective:
        "By the end of the topic, learners should be able to describe a buffer, explain how it resists pH change, and use the Henderson-Hasselbalch equation. (MoE Grade 11 Period III, CONTENTS 7.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- Some solutions keep an almost constant pH even when acid or base is added — these are **buffers**.
- **This topic:** what a buffer is, how it works, and how to calculate its pH.

## What a buffer is

- **Buffer** — a solution that **resists changes in pH** when small amounts of acid or base are added.
- A buffer is made from either:
- a **weak acid and its conjugate base** (e.g. CH₃COOH + CH₃COONa), or
- a **weak base and its conjugate acid** (e.g. NH₃ + NH₄Cl).

## How a buffer works

- The weak acid part **neutralises added base** (OH⁻).
- The conjugate base part **neutralises added acid** (H⁺).
- Because both are present, the pH barely changes.

## The Henderson-Hasselbalch equation

**pH = pKa + log([A⁻] ÷ [HA])**

- **[A⁻]** = concentration of the conjugate base; **[HA]** = concentration of the weak acid.
- When [A⁻] = [HA], the log term is 0 and **pH = pKa**.
- A change of the ratio by a factor of 10 changes the pH by 1 unit.

## Uses of buffers

- **Blood** is buffered (mainly by carbonic acid/hydrogencarbonate) near pH 7.4.
- Buffers are used in fermentation, medicine and analysis to hold pH steady.

## Common errors and misconceptions

- **A buffer stops pH changing at all** — it only *resists* change; large additions still shift the pH.
- **Buffers are made from strong acids** — they use a **weak** acid/base with its conjugate.
- **pH always equals pKa** — only when the acid and conjugate base concentrations are equal.`,
      workedExample: `**Task.** A buffer contains 0.20 mol/dm³ acetic acid (CH₃COOH) and 0.20 mol/dm³ sodium acetate (CH₃COONa). The pKa of acetic acid is 4.74. (a) Calculate the pH of the buffer. (b) Explain how it resists a small addition of hydrochloric acid.

**Part (a) — Henderson-Hasselbalch**
1. pH = pKa + log([A⁻] ÷ [HA]).
2. [A⁻] = 0.20; [HA] = 0.20, so the ratio = 1 and log 1 = 0.
3. pH = 4.74 + 0 = **4.74**.

**Part (b) — Resisting added acid**
- Adding HCl provides extra H⁺.
- The conjugate base, acetate (CH₃COO⁻), reacts with the added H⁺: CH₃COO⁻ + H⁺ → CH₃COOH.
- The extra H⁺ is mopped up, so the pH changes only slightly.

**Conclusion.** The buffer's pH equals the pKa (4.74) because the acid and conjugate base are equal, and it resists added acid because the acetate ions neutralise the incoming H⁺.`,
      quiz: [
        { prompt: "A buffer resists changes in…", options: ["pH", "temperature", "colour", "volume"], correctIndex: 0, explanation: "Buffers hold pH nearly constant." },
        { prompt: "A buffer is made from a weak acid and its…", options: ["conjugate base", "conjugate acid", "strong base", "salt of a strong acid"], correctIndex: 0, explanation: "Weak acid + its conjugate base." },
        { prompt: "A buffer can also be a weak base and its…", options: ["conjugate acid", "conjugate base", "strong acid", "metal"], correctIndex: 0, explanation: "Weak base + its conjugate acid." },
        { prompt: "The conjugate base in a buffer neutralises added…", options: ["acid (H⁺)", "base (OH⁻)", "water", "salt"], correctIndex: 0, explanation: "It mops up added H⁺." },
        { prompt: "The weak acid in a buffer neutralises added…", options: ["base (OH⁻)", "acid (H⁺)", "water", "gas"], correctIndex: 0, explanation: "It mops up added OH⁻." },
        { prompt: "The Henderson-Hasselbalch equation is pH = pKa + …", options: ["log([A⁻]/[HA])", "log([HA]/[A⁻])", "[A⁻]/[HA]", "14 − pKa"], correctIndex: 0, explanation: "pH = pKa + log([A⁻]/[HA])." },
        { prompt: "When [A⁻] = [HA], the pH equals…", options: ["pKa", "14", "7", "0"], correctIndex: 0, explanation: "log 1 = 0, so pH = pKa." },
        { prompt: "A buffer of 0.2 M acid and 0.2 M conjugate base (pKa 4.74) has pH…", options: ["4.74", "7.00", "9.26", "0"], correctIndex: 0, explanation: "Equal concentrations give pH = pKa." },
        { prompt: "Human blood is buffered near pH…", options: ["7.4", "1.0", "10.0", "4.0"], correctIndex: 0, explanation: "Blood pH is about 7.4." },
        { prompt: "A buffer works because it contains both a … acid and its conjugate base.", options: ["weak", "strong", "concentrated", "neutral"], correctIndex: 0, explanation: "Buffers use a weak acid/base pair." },
        { prompt: "Changing the [A⁻]/[HA] ratio by 10 changes pH by…", options: ["1 unit", "10 units", "0 units", "7 units"], correctIndex: 0, explanation: "log 10 = 1." },
        { prompt: "Adding a small amount of NaOH to a buffer causes the pH to…", options: ["change only slightly", "rise a lot", "fall a lot", "reach 14"], correctIndex: 0, explanation: "The weak acid neutralises added base." },
        { prompt: "Which pair could form a buffer?", options: ["CH₃COOH + CH₃COONa", "HCl + NaCl", "NaOH + NaCl", "HCl + NaOH"], correctIndex: 0, explanation: "Weak acid + its conjugate base salt." },
        { prompt: "A buffer made of NH₃ and NH₄Cl is a … buffer.", options: ["weak base + conjugate acid", "weak acid + conjugate base", "strong acid", "neutral salt"], correctIndex: 0, explanation: "Ammonia (weak base) + ammonium (its conjugate acid)." },
        { prompt: "In pH = pKa + log([A⁻]/[HA]), [HA] is the…", options: ["weak acid", "conjugate base", "water", "salt of strong acid"], correctIndex: 0, explanation: "HA is the weak acid." },
        { prompt: "Buffers are important in the body because they keep … stable.", options: ["blood pH", "temperature", "blood colour", "volume"], correctIndex: 0, explanation: "They stabilise physiological pH." },
        { prompt: "A buffer's ability to resist pH change is called its…", options: ["buffer capacity", "molarity", "pKa alone", "density"], correctIndex: 0, explanation: "Buffer capacity is the amount it can absorb." },
        { prompt: "Which statement is TRUE of buffers?", options: ["they resist but do not completely prevent pH change", "they fix pH forever", "they use strong acids", "they conduct no electricity"], correctIndex: 0, explanation: "Large additions still shift the pH." },
        { prompt: "The best buffer of a given pair has pH closest to its…", options: ["pKa", "pOH", "boiling point", "molar mass"], correctIndex: 0, explanation: "Buffers work best near pH = pKa." },
        { prompt: "Adding acid to an acetate buffer forms more…", options: ["CH₃COOH", "OH⁻", "Na⁺ only", "chlorine"], correctIndex: 0, explanation: "Acetate + H⁺ → acetic acid." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a buffer solution and state the two ways one can be made.", answerKey: "A buffer is a solution that resists changes in pH when small amounts of acid or base are added. It can be made from a weak acid and its conjugate base (e.g. CH₃COOH + CH₃COONa) or from a weak base and its conjugate acid (e.g. NH₃ + NH₄Cl). Award marks for the definition and both compositions.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The Henderson-Hasselbalch equation is:", options: ["pH = pKa + log([A⁻]/[HA])", "pH = pKa − [A⁻]/[HA]", "pH = 14 − pKa", "pH = −log[HA]"], correctIndex: 0, answerKey: "pH = pKa + log([A⁻]/[HA]).", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "In a buffer, the pH equals the pKa when:", options: ["[A⁻] = [HA]", "[A⁻] = 0", "[HA] = 0", "pH = 7"], correctIndex: 0, answerKey: "When the conjugate base and acid concentrations are equal, log 1 = 0 so pH = pKa.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "A buffer contains 0.10 mol/dm³ of a weak acid (pKa = 4.8) and 0.10 mol/dm³ of its conjugate base. Calculate the pH and explain how it resists added base.", answerKey: "pH = pKa + log([A⁻]/[HA]) = 4.8 + log(0.10/0.10) = 4.8 + 0 = 4.8. It resists added base because the weak acid (HA) reacts with the added OH⁻ (HA + OH⁻ → A⁻ + H₂O), removing it so the pH changes only slightly. Award marks for pH = 4.8 and the explanation of neutralising added base.", marks: 3 },
        { type: "ESSAY", prompt: "Explain the composition of a buffer solution and, using an acetic acid/acetate buffer, describe how it resists a change in pH when either a small amount of acid or a small amount of base is added.", answerKey: "A full answer explains that a buffer contains a weak acid and its conjugate base (here CH₃COOH and CH₃COO⁻ from sodium acetate) in comparable amounts. When acid (H⁺) is added, the conjugate base reacts with it: CH₃COO⁻ + H⁺ → CH₃COOH, removing the added H⁺. When base (OH⁻) is added, the weak acid reacts with it: CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O, removing the added OH⁻. Because both components are present to absorb added acid or base, the pH changes only slightly (its value is given by pH = pKa + log([A⁻]/[HA])). Award marks for the weak-acid/conjugate-base composition and correct equations for resisting both added acid and added base.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 17.3 Acid-Base Titrations (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/17%3A_Additional_Aspects_of_Aqueous_Equilibria/17.03%3A_Acid-Base_Titrations)
      slug: "acid-base-titrations",
      title: "Acid-Base Titrations",
      objective:
        "By the end of the topic, learners should be able to describe an acid-base titration, distinguish the equivalence point from the end point, choose an indicator, and calculate an unknown concentration. (MoE Grade 11 Period III, CONTENTS 8.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- A **titration** finds an unknown concentration by reacting it with a solution of known concentration.
- **This topic:** how titrations work, indicators, and the calculation.

## What a titration is

- A **titration** uses a **burette** to add a solution of known concentration (the **titrant**) to a measured volume of the unknown until the reaction is just complete.
- The reaction is a neutralisation: acid + base → salt + water.

## Equivalence point and end point

- **Equivalence point** — the point where the moles of acid exactly equal the moles of base (the reaction is complete).
- **End point** — the point where the **indicator changes colour**; a good indicator changes colour at (or very near) the equivalence point.

## Indicators

| Indicator | Colour in acid | Colour in base |
|---|---|---|
| Litmus | red | blue |
| Phenolphthalein | colourless | pink |
| Methyl orange | red | yellow |

- Choose an indicator whose colour change matches the pH at the equivalence point.

## The calculation

- At the equivalence point: **moles of acid = moles of base** (for a 1:1 reaction).
- Using moles = concentration × volume: **Ca × Va = Cb × Vb** (adjust for the mole ratio if it is not 1:1).

## Common errors and misconceptions

- **Confusing end point and equivalence point** — the end point is the indicator's colour change; the equivalence point is the true completion.
- **Using the wrong mole ratio** — check the balanced equation (e.g. H₂SO₄ needs 2 mol base per mol acid).
- **Reading the burette wrongly** — read the bottom of the meniscus at eye level.`,
      workedExample: `**Task.** 25.0 cm³ of sodium hydroxide of unknown concentration is titrated with 0.100 mol/dm³ hydrochloric acid. It takes 20.0 cm³ of the acid to reach the end point. Calculate the concentration of the sodium hydroxide. (HCl + NaOH → NaCl + H₂O, a 1:1 ratio.)

**Step 1 — Moles of acid**
- moles HCl = C × V = 0.100 × (20.0 ÷ 1000) = 0.00200 mol.

**Step 2 — Use the mole ratio**
- The equation is 1:1, so moles NaOH = moles HCl = 0.00200 mol.

**Step 3 — Concentration of NaOH**
- C(NaOH) = moles ÷ volume = 0.00200 ÷ (25.0 ÷ 1000).
- = 0.00200 ÷ 0.0250 = **0.0800 mol/dm³**.

**Check.** Using Ca·Va = Cb·Vb: 0.100 × 20.0 = Cb × 25.0, so Cb = 2.00 ÷ 25.0 = 0.0800 mol/dm³. ✓

**Conclusion.** The sodium hydroxide concentration is 0.0800 mol/dm³.`,
      quiz: [
        { prompt: "A titration finds an unknown…", options: ["concentration", "colour", "temperature", "mass number"], correctIndex: 0, explanation: "It measures concentration." },
        { prompt: "The known-concentration solution added from the burette is the…", options: ["titrant", "analyte", "indicator", "buffer"], correctIndex: 0, explanation: "The titrant has known concentration." },
        { prompt: "The equivalence point is where moles of acid equal moles of…", options: ["base", "water", "salt", "gas"], correctIndex: 0, explanation: "Acid and base are in exact reacting amounts." },
        { prompt: "The end point is where the … changes colour.", options: ["indicator", "burette", "acid", "salt"], correctIndex: 0, explanation: "The indicator marks the end point." },
        { prompt: "Phenolphthalein is colourless in acid and … in base.", options: ["pink", "red", "yellow", "blue"], correctIndex: 0, explanation: "Phenolphthalein turns pink in base." },
        { prompt: "Methyl orange is red in acid and … in base.", options: ["yellow", "pink", "blue", "colourless"], correctIndex: 0, explanation: "Methyl orange turns yellow in base." },
        { prompt: "The apparatus used to deliver the titrant is a…", options: ["burette", "beaker", "test tube", "crucible"], correctIndex: 0, explanation: "A burette gives accurate variable volumes." },
        { prompt: "For a 1:1 acid-base reaction, Ca × Va = …", options: ["Cb × Vb", "Cb ÷ Vb", "Cb + Vb", "Vb ÷ Cb"], correctIndex: 0, explanation: "Moles of acid = moles of base." },
        { prompt: "A good indicator changes colour near the…", options: ["equivalence point", "start", "boiling point", "freezing point"], correctIndex: 0, explanation: "The end point should match the equivalence point." },
        { prompt: "0.100 M acid, 20.0 cm³, reacts with 25.0 cm³ base (1:1). The base concentration is…", options: ["0.0800 M", "0.125 M", "0.100 M", "0.0500 M"], correctIndex: 0, explanation: "(0.100×20)/25 = 0.080 M." },
        { prompt: "The reaction in an acid-base titration is a…", options: ["neutralisation", "combustion", "precipitation only", "decomposition"], correctIndex: 0, explanation: "Acid + base → salt + water." },
        { prompt: "For a strong acid–strong base titration, the equivalence point is at pH…", options: ["7", "1", "14", "4"], correctIndex: 0, explanation: "The salt is neutral, so pH 7." },
        { prompt: "H₂SO₄ reacting with NaOH needs … mol base per mol acid.", options: ["2", "1", "0.5", "3"], correctIndex: 0, explanation: "H₂SO₄ is diprotic." },
        { prompt: "moles = concentration × …", options: ["volume", "temperature", "mass", "pressure"], correctIndex: 0, explanation: "moles = C × V." },
        { prompt: "When reading a burette, read the … of the meniscus.", options: ["bottom", "top", "middle side", "edge"], correctIndex: 0, explanation: "Read the bottom of the meniscus at eye level." },
        { prompt: "The unknown solution being analysed is the…", options: ["analyte", "titrant", "indicator", "buffer"], correctIndex: 0, explanation: "The analyte is of unknown concentration." },
        { prompt: "A titration curve plots pH against…", options: ["volume of titrant added", "temperature", "time only", "mass"], correctIndex: 0, explanation: "pH vs volume gives the curve." },
        { prompt: "Near the equivalence point of a strong acid-base titration the pH changes…", options: ["very rapidly", "not at all", "slowly only", "downwards only"], correctIndex: 0, explanation: "There is a steep vertical jump." },
        { prompt: "If it takes 25 cm³ of 0.2 M acid to neutralise 25 cm³ of base (1:1), the base is…", options: ["0.2 M", "0.4 M", "0.1 M", "2 M"], correctIndex: 0, explanation: "Equal volume and 1:1 ratio give equal concentration." },
        { prompt: "The purpose of the indicator is to show the…", options: ["end point", "temperature", "colour of the salt", "volume of water"], correctIndex: 0, explanation: "It signals when to stop adding titrant." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define an acid-base titration and distinguish between the equivalence point and the end point.", answerKey: "A titration is a method for finding an unknown concentration by adding a solution of known concentration (the titrant) until the reaction is just complete. The equivalence point is where the moles of acid exactly equal the moles of base (reaction complete); the end point is where the indicator changes colour, ideally at or very near the equivalence point. Award marks for the definition and the two-point distinction.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Phenolphthalein indicator is:", options: ["colourless in acid, pink in base", "red in acid, blue in base", "yellow in acid, red in base", "blue in acid, red in base"], correctIndex: 0, answerKey: "Phenolphthalein is colourless in acid and pink in base.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "In a titration of a strong acid with a strong base, the equivalence point occurs at a pH of about:", options: ["7", "1", "10", "4"], correctIndex: 0, answerKey: "The salt formed is neutral, so pH ≈ 7.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "25.0 cm³ of hydrochloric acid is neutralised by 30.0 cm³ of 0.100 mol/dm³ sodium hydroxide (1:1 reaction). Calculate the concentration of the acid.", answerKey: "Moles NaOH = 0.100 × 30.0/1000 = 0.00300 mol. For 1:1, moles HCl = 0.00300 mol. C(HCl) = 0.00300 / (25.0/1000) = 0.00300/0.0250 = 0.120 mol/dm³. Award marks for moles of base, the mole ratio, and the answer 0.120 mol/dm³.", marks: 3 },
        { type: "ESSAY", prompt: "Describe how an acid-base titration is carried out to find the concentration of an unknown acid, including the role of the indicator, and outline how the result is calculated.", answerKey: "A full answer describes: measuring a known volume of the unknown acid into a flask with a pipette, adding a few drops of a suitable indicator; filling a burette with the standard base (titrant) and running it in while swirling until the indicator just changes colour (the end point, chosen to match the equivalence point). The volume of base used is recorded (usually repeated for concordant results). The concentration is found from moles = C × V: calculate moles of base, use the mole ratio from the balanced equation to get moles of acid, then divide by the acid volume to get its concentration (Ca·Va = Cb·Vb for a 1:1 reaction). Award marks for the procedure, the indicator/end-point role, and a correct calculation method.", marks: 6 },
      ],
    },
  ],
};
