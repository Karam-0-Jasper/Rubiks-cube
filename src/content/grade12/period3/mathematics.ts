import type { PeriodContent } from "@/content/types";

// Grade 12, Semester One, Period III of the MoE Mathematics syllabus:
// Logical Reasoning, Percentages, Rigid Motion 2 and Enlargement, and
// Trigonometry 2. Notes rebuilt from published sources (GeeksforGeeks,
// Siyavula).
export const mathematicsG12P3: PeriodContent = {
  grade: 12,
  number: 3,
  title: "Logical Reasoning, Percentages, Transformation and Trigonometry",
  summary:
    "Period III of the MoE Grade 12 Mathematics syllabus. Learners judge true/false statements and build implications, converses, equivalences and negations; solve percentage problems in taxation, banking, hire purchase and bills; carry out rotations and enlargements (including negative scale factors, similar figures and their area/volume ratios); and graph and interpret trigonometric functions.",
  topics: [
    // source: GeeksforGeeks — Statements in Mathematical Logic (Mathematical Reasoning) (https://www.geeksforgeeks.org/maths/statements-mathematical-reasoning/)
    {
      slug: "logical-reasoning",
      title: "Logical Reasoning",
      objective:
        "By the end of the topic, learners should be able to identify true/false statements, form negations, use implication, converse and equivalence, and test the validity of an argument.",
      estimatedMinutes: 100,
      notes: `## Statements

- A **statement (proposition)** is a sentence that is either **true or false, but not both**.
- "7 is a prime number" is a statement (true). "Close the door" is not a statement (a command).
- An **open statement** contains a variable and is only true or false once the variable is fixed: "x > 5".

## Negation

- The **negation** of a statement p is "not p", written **~p**, and it has the **opposite truth value**.
- If p is true, ~p is false; if p is false, ~p is true.
- Negation of "all cats are black" is "not all cats are black" (i.e. at least one is not).

## Implication (conditional)

- An **implication** "if p then q" is written **p ⟹ q**; p is the hypothesis, q the conclusion.
- p ⟹ q is **false only when p is true and q is false**; otherwise it is true.

## Converse, inverse, contrapositive

| Name | Form |
| --- | --- |
| Implication | p ⟹ q |
| Converse | q ⟹ p |
| Inverse | ~p ⟹ ~q |
| Contrapositive | ~q ⟹ ~p |

- The **contrapositive** always has the **same truth value** as the original implication (they are **equivalent**).
- The converse and inverse are equivalent to each other, but **not** to the original.

## Equivalence

- Two statements are **equivalent (p ⟺ q)** when they always have the **same truth value** — "p if and only if q".

## Valid arguments

- An **argument** is valid when its conclusion must be true whenever all its premises are true.
- Venn diagrams can be used to test validity: e.g. "All A are B; x is an A; therefore x is a B" is valid.

## Common errors

- **Confusing the converse with the original** — q ⟹ p need not follow from p ⟹ q.
- **Negating only part of a compound statement.**
- **Calling a command or question a statement.**`,
      workedExample: `**Question:** For "If a number is divisible by 6, then it is divisible by 3", write the converse and the contrapositive, and state which is equivalent to the original.

**Solution**

*Step 1 — name the parts.* p: "a number is divisible by 6"; q: "it is divisible by 3". Original: p ⟹ q.

*Step 2 — converse (q ⟹ p).*
"If a number is divisible by 3, then it is divisible by 6."

*Step 3 — contrapositive (~q ⟹ ~p).*
"If a number is not divisible by 3, then it is not divisible by 6."

*Step 4 — equivalence.* The contrapositive always has the same truth value as the original, so it is equivalent (both true). The converse is not equivalent (it is false: 9 is divisible by 3 but not by 6).

**Answer: Converse and contrapositive as above; the contrapositive is equivalent to the original.**`,
      quiz: [
        { prompt: "A statement is a sentence that is", options: ["a command", "either true or false, not both", "always true", "a question"], correctIndex: 1, explanation: "A proposition has a single truth value." },
        { prompt: "Which is a statement?", options: ["Shut the window.", "Is it raining?", "5 is an odd number.", "Hello!"], correctIndex: 2, explanation: "Only the third can be judged true or false." },
        { prompt: "The negation of p has", options: ["the same truth value", "the opposite truth value", "no truth value", "two truth values"], correctIndex: 1, explanation: "~p is the opposite of p." },
        { prompt: "The negation of 'it is raining' is", options: ["it will rain", "it is not raining", "it is sunny", "rain is water"], correctIndex: 1, explanation: "Negation just denies the statement." },
        { prompt: "An implication is written", options: ["p ⟺ q", "p ⟹ q", "~p", "p and q"], correctIndex: 1, explanation: "'If p then q' is p ⟹ q." },
        { prompt: "p ⟹ q is false only when", options: ["p false, q true", "p true, q false", "both true", "both false"], correctIndex: 1, explanation: "A true hypothesis with a false conclusion fails." },
        { prompt: "The converse of p ⟹ q is", options: ["q ⟹ p", "~p ⟹ ~q", "~q ⟹ ~p", "p ⟺ q"], correctIndex: 0, explanation: "Swap hypothesis and conclusion." },
        { prompt: "The contrapositive of p ⟹ q is", options: ["q ⟹ p", "~q ⟹ ~p", "~p ⟹ ~q", "p ⟹ ~q"], correctIndex: 1, explanation: "Negate and swap." },
        { prompt: "The statement equivalent to p ⟹ q is its", options: ["converse", "inverse", "contrapositive", "negation"], correctIndex: 2, explanation: "The contrapositive shares its truth value." },
        { prompt: "The inverse of p ⟹ q is", options: ["q ⟹ p", "~p ⟹ ~q", "~q ⟹ ~p", "p ⟺ q"], correctIndex: 1, explanation: "Negate both parts without swapping." },
        { prompt: "'p if and only if q' means", options: ["p ⟹ q only", "q ⟹ p only", "p and q are equivalent", "p or q"], correctIndex: 2, explanation: "Biconditional p ⟺ q." },
        { prompt: "An open statement is one that", options: ["is always true", "contains a variable", "is a command", "cannot be negated"], correctIndex: 1, explanation: "Its truth depends on the variable." },
        { prompt: "The converse of p ⟹ q is", options: ["always true if p ⟹ q is", "not necessarily true", "the same as the contrapositive", "always false"], correctIndex: 1, explanation: "It need not follow from the original." },
        { prompt: "An argument is valid when", options: ["its premises are false", "the conclusion follows necessarily from the premises", "it sounds convincing", "it has three parts"], correctIndex: 1, explanation: "Truth of premises forces truth of conclusion." },
        { prompt: "'All A are B; x is A; so x is B' is", options: ["invalid", "valid", "a converse", "a negation"], correctIndex: 1, explanation: "A classic valid argument." },
        { prompt: "The negation of 'all cats are black' is", options: ["no cats are black", "all cats are white", "not all cats are black", "some cats are black"], correctIndex: 2, explanation: "At least one cat is not black." },
        { prompt: "If p is false, then p ⟹ q is", options: ["always false", "always true", "sometimes false", "undefined"], correctIndex: 1, explanation: "An implication with a false hypothesis is true." },
        { prompt: "Two statements with the same truth value in every case are", options: ["converses", "equivalent", "negations", "open"], correctIndex: 1, explanation: "That is the definition of equivalence." },
        { prompt: "A tool for testing validity of arguments about sets is a", options: ["bar chart", "Venn diagram", "pie chart", "number line"], correctIndex: 1, explanation: "Venn diagrams show set relationships." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Write the negation of: (a) '5 is greater than 2', (b) 'all triangles have three sides'.", answerKey: "(a) '5 is not greater than 2' (i.e. 5 ≤ 2). (b) 'Not all triangles have three sides' (there is a triangle without three sides). Award 3 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "For 'If it is a square, then it is a rectangle', write the converse and state whether it is true.", answerKey: "Converse: 'If it is a rectangle, then it is a square.' This is false — a rectangle need not be a square. Award 3 marks for the converse, 3 for the correct judgement.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "The statement equivalent to 'p ⟹ q' is", options: ["q ⟹ p", "~p ⟹ ~q", "~q ⟹ ~p", "p ⟺ q"], correctIndex: 2, answerKey: "The contrapositive ~q ⟹ ~p is equivalent. Option C.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State whether each is a statement and give its truth value if it is: (a) 'Please sit down.' (b) '3 + 4 = 8'.", answerKey: "(a) Not a statement — it is a command. (b) A statement, and it is false (3 + 4 = 7). Award 3 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the difference between the converse, inverse and contrapositive of an implication p ⟹ q, and explain which one is logically equivalent to the original. Illustrate with 'If it rains, the ground is wet.'", answerKey: "Converse swaps the parts (q ⟹ p): 'If the ground is wet, it rained.' Inverse negates both (~p ⟹ ~q): 'If it does not rain, the ground is not wet.' Contrapositive negates and swaps (~q ⟹ ~p): 'If the ground is not wet, it did not rain.' The contrapositive is logically equivalent to the original (same truth value in every case), while the converse and inverse are not equivalent to the original. Award 2 marks for each of the three forms, 2 for identifying the contrapositive as equivalent, 2 for a correct illustration.", marks: 10 },
      ],
    },
    // source: Siyavula — Value Added Tax (Banking, interest and taxation) (https://siyavula.com/read/maths/grade-10-mathematical-literacy/bank-accounts-interest-and-vat/11-bank-accounts-interest-and-vat-04)
    {
      slug: "percentages",
      title: "Percentages",
      objective:
        "By the end of the topic, learners should be able to calculate taxes and VAT, interest on savings and loans, hire-purchase payments, household bills and shares in a partnership.",
      estimatedMinutes: 120,
      notes: `## Percentage basics

- A **percentage** is a fraction out of 100: r% = r/100.
- "r% of an amount" = (r/100) × amount.

## Taxation

- **Tax** is money paid to the government on income, goods or services.
- Tax on goods/services = tax rate × price.
- **Income tax** is charged on earnings, often on a portion above a tax-free threshold.

## Value Added Tax (VAT)

- **VAT** is a tax added to the price of goods and services.
- **VAT amount = VAT rate × price (excluding VAT).**
- **Price including VAT = price × (1 + VAT rate).** (e.g. at 15%, multiply by 1.15.)
- To remove VAT: price excluding VAT = price including VAT ÷ (1 + VAT rate).

## Banking transactions and interest

- **Simple interest** on savings or a loan: **I = P × r × t** (P principal, r rate as a decimal, t time in years).
- **Compound interest** amount: **A = P(1 + r)ⁿ**.

## Hire purchase

- **Hire purchase** pays a **deposit** then equal instalments; **simple interest** is charged on the **amount owing** (price − deposit).
- Total cost = deposit + amount owing + interest, which is more than the cash price.

## Household bills

- Utility bills (electricity, water, telephone) charge per **unit used**: bill = units × unit price (VAT may be added).

## Partnership business

- Partners **share profit (or interest) in a given ratio**, usually the ratio of what each contributed.
- Each share = (partner's ratio part ÷ total ratio parts) × total profit.

## Common errors

- **Adding VAT to a VAT-inclusive price** — check whether the price already includes VAT.
- **Charging hire-purchase interest on the full price** instead of the amount owing.
- **Splitting profit equally** when a ratio is specified.`,
      workedExample: `**Question:** A television has a price of $200 excluding VAT. VAT is charged at 15%. Find (a) the VAT and (b) the price including VAT.

**Solution**

*Step 1 — find the VAT amount = rate × price.*
VAT = 15% of 200 = (15/100) × 200 = $30.

*Step 2 — price including VAT = price + VAT.*
= 200 + 30 = $230.

*Check with the multiplier:* 200 × 1.15 = $230. ✓

**Answer: (a) VAT = $30 (b) price including VAT = $230.**`,
      quiz: [
        { prompt: "15% written as a decimal is", options: ["1.5", "0.15", "0.015", "15"], correctIndex: 1, explanation: "15/100 = 0.15." },
        { prompt: "VAT is a tax on", options: ["income only", "goods and services", "savings", "land only"], correctIndex: 1, explanation: "Value Added Tax is added to prices." },
        { prompt: "VAT of 15% on $80 is", options: ["$8", "$12", "$15", "$95"], correctIndex: 1, explanation: "0.15 × 80 = 12." },
        { prompt: "The price including 15% VAT is found by multiplying by", options: ["0.15", "1.15", "0.85", "15"], correctIndex: 1, explanation: "Add the 15%: ×1.15." },
        { prompt: "To remove 15% VAT from an inclusive price, divide by", options: ["0.15", "1.15", "1.5", "15"], correctIndex: 1, explanation: "Reverse the ×1.15." },
        { prompt: "Simple interest is", options: ["P(1 + r)ⁿ", "P × r × t", "P/rt", "P + r"], correctIndex: 1, explanation: "I = P r t." },
        { prompt: "Simple interest on $500 at 8% for 2 years is", options: ["$40", "$80", "$100", "$800"], correctIndex: 1, explanation: "500 × 0.08 × 2 = 80." },
        { prompt: "Hire-purchase interest is charged on the", options: ["full cash price", "deposit", "amount owing", "VAT"], correctIndex: 2, explanation: "Only on the balance after the deposit." },
        { prompt: "Hire purchase uses", options: ["compound interest", "simple interest", "no interest", "VAT only"], correctIndex: 1, explanation: "Simple interest on the amount owing." },
        { prompt: "A $1000 item with a $200 deposit leaves an amount owing of", options: ["$1200", "$800", "$1000", "$200"], correctIndex: 1, explanation: "1000 − 200 = 800." },
        { prompt: "A utility bill for 300 units at $0.20 per unit is", options: ["$30", "$60", "$150", "$600"], correctIndex: 1, explanation: "300 × 0.20 = 60." },
        { prompt: "Partners share profit in the ratio of", options: ["their ages", "what each contributed", "equal halves always", "the VAT rate"], correctIndex: 1, explanation: "Usually the contribution ratio." },
        { prompt: "Profit of $600 shared in ratio 2 : 1 gives the larger share", options: ["$200", "$300", "$400", "$600"], correctIndex: 2, explanation: "2/3 × 600 = 400." },
        { prompt: "The price excluding VAT if the inclusive price is $230 (15%) is", options: ["$200", "$215", "$195.50", "$180"], correctIndex: 0, explanation: "230 ÷ 1.15 = 200." },
        { prompt: "20% of $50 is", options: ["$5", "$10", "$20", "$25"], correctIndex: 1, explanation: "0.20 × 50 = 10." },
        { prompt: "Compound interest amount uses", options: ["P × r × t", "P(1 + r)ⁿ", "P − rt", "P/rt"], correctIndex: 1, explanation: "A = P(1 + r)ⁿ." },
        { prompt: "A total hire-purchase cost compared with the cash price is", options: ["less", "the same", "more", "zero"], correctIndex: 2, explanation: "Interest makes it more expensive." },
        { prompt: "Income tax is charged on", options: ["earnings", "the weather", "distance", "colour"], correctIndex: 0, explanation: "Tax on income earned." },
        { prompt: "Profit of $900 shared in ratio 4 : 5 gives the smaller share", options: ["$400", "$450", "$500", "$360"], correctIndex: 0, explanation: "4/9 × 900 = 400." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "A fridge costs $600 excluding VAT. VAT is 15%. Find the VAT and the total price.", answerKey: "VAT = 0.15 × 600 = $90. Total = 600 + 90 = $690 (or 600 × 1.15 = 690). Award 3 marks for VAT, 3 for the total.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "A phone with a cash price of $500 is bought on hire purchase: a $100 deposit and simple interest of 10% per year for 2 years on the amount owing. Find the total cost.", answerKey: "Amount owing = 500 − 100 = 400. Interest = 400 × 0.10 × 2 = 80. Total = deposit + owing + interest = 100 + 400 + 80 = $580. Award 2 for owing, 2 for interest, 2 for total.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Profit of $1200 is shared between two partners in the ratio 1 : 3. The larger share is", options: ["$300", "$600", "$900", "$400"], correctIndex: 2, answerKey: "3/4 × 1200 = $900. Option C.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "An electricity meter records 450 units at $0.25 per unit, and 15% VAT is then added. Find the total bill.", answerKey: "Units cost = 450 × 0.25 = $112.50. VAT = 0.15 × 112.50 = $16.875. Total = 112.50 + 16.875 = $129.38 (to 2 dp). Award 2 for units cost, 2 for VAT, 2 for total.", marks: 6 },
        { type: "ESSAY", prompt: "Explain how VAT and hire-purchase interest are calculated, noting the common mistake in each, then find the total hire-purchase cost of a $800 (cash) machine bought with a $200 deposit and 12% simple interest for 3 years on the balance.", answerKey: "VAT is a percentage added to the price excluding VAT (VAT = rate × price, inclusive price = price × (1+rate)); the common mistake is adding VAT to a price that already includes it. Hire-purchase interest is simple interest charged only on the amount owing (price − deposit), not on the full price. Calculation: owing = 800 − 200 = 600; interest = 600 × 0.12 × 3 = 216; total = 200 + 600 + 216 = $1016. Award 3 marks for the VAT explanation, 3 for hire purchase, 4 for the correct total $1016.", marks: 10 },
      ],
    },
    // source: GeeksforGeeks — Scale Factor: Definition, Formula, Meaning, Types, and Examples (https://www.geeksforgeeks.org/maths/scale-factor/)
    {
      slug: "rigid-motion-2-and-enlargement",
      title: "Rigid Motion 2 and Enlargement",
      objective:
        "By the end of the topic, learners should be able to rotate a figure, carry out enlargements with positive and negative scale factors, and relate the areas and volumes of similar figures.",
      estimatedMinutes: 120,
      notes: `## Rigid motion (isometry)

- A **rigid motion** (translation, reflection, rotation) moves a figure **without changing its size or shape** — the image is **congruent** to the object.
- A **rotation** turns a figure about a fixed **centre of rotation** through a given **angle** and direction (clockwise or anticlockwise).

## Rotations about the origin

| Rotation | Image of (x, y) |
| --- | --- |
| 90° anticlockwise | (−y, x) |
| 180° | (−x, −y) |
| 270° anticlockwise (90° clockwise) | (y, −x) |

## Enlargement

- An **enlargement** changes size by a **scale factor k** about a **centre of enlargement**.
- **Scale factor k = image length ÷ object length.**
- k > 1 enlarges; 0 < k < 1 reduces (makes smaller); the image and object are **similar**.
- From a centre O, each image point lies so that O, the object point and the image point are in line, with the image k times as far from O.

## Negative scale factors

- A **negative scale factor** enlarges **and** places the image on the **opposite side of the centre** (a rotation of 180° combined with the enlargement).
- |k| > 1 reflects and enlarges; 0 < |k| < 1 reflects and reduces.

## Similar figures: length, area, volume

- For similar figures with scale factor k:
- **lengths are in the ratio k**,
- **areas are in the ratio k²**,
- **volumes are in the ratio k³**.
- So Area of image = k² × area of object; Volume of image = k³ × volume of object.

## Common errors

- **Forgetting the centre** — an enlargement needs a centre as well as a scale factor.
- **Using k instead of k² (area) or k³ (volume)**.
- **Ignoring the side-swap** with a negative scale factor.`,
      workedExample: `**Question:** Triangle A(1, 1), B(3, 1), C(1, 4) is enlarged from the origin O by scale factor 2. Find the image coordinates and the ratio of the image area to the object area.

**Solution**

*Step 1 — multiply each coordinate by k = 2 (centre at the origin).*
A(1, 1) → A′(2, 2); B(3, 1) → B′(6, 2); C(1, 4) → C′(2, 8).

*Step 2 — object area.* Base AB = 2, height (from C) = 3, so area = ½ × 2 × 3 = 3.

*Step 3 — image area.* Base A′B′ = 4, height = 6, so area = ½ × 4 × 6 = 12.

*Step 4 — ratio.* 12 : 3 = 4 : 1 = k² : 1 = 2² : 1. ✓

**Answer: A′(2,2), B′(6,2), C′(2,8); the area ratio is k² = 4.**`,
      quiz: [
        { prompt: "A rigid motion keeps a figure's", options: ["size and shape", "size only", "shape only", "position"], correctIndex: 0, explanation: "Isometries preserve size and shape." },
        { prompt: "A rotation turns a figure about a", options: ["scale factor", "centre of rotation", "mirror line", "vector"], correctIndex: 1, explanation: "It needs a centre and an angle." },
        { prompt: "Under a 180° rotation about O, (x, y) maps to", options: ["(−x, −y)", "(−y, x)", "(y, −x)", "(x, −y)"], correctIndex: 0, explanation: "Both coordinates change sign." },
        { prompt: "Under 90° anticlockwise about O, (x, y) maps to", options: ["(y, −x)", "(−y, x)", "(−x, −y)", "(x, y)"], correctIndex: 1, explanation: "(x, y) → (−y, x)." },
        { prompt: "The scale factor of an enlargement is", options: ["object ÷ image", "image length ÷ object length", "image + object", "image − object"], correctIndex: 1, explanation: "k = image ÷ object length." },
        { prompt: "A scale factor between 0 and 1 gives a", options: ["larger image", "smaller image", "congruent image", "rotation"], correctIndex: 1, explanation: "0 < k < 1 reduces the figure." },
        { prompt: "An enlargement needs a scale factor and a", options: ["mirror line", "centre of enlargement", "vector", "rotation angle"], correctIndex: 1, explanation: "The centre fixes the position." },
        { prompt: "The object and its enlargement are", options: ["congruent", "similar", "identical", "reflected only"], correctIndex: 1, explanation: "Same shape, different size = similar." },
        { prompt: "A negative scale factor places the image on the", options: ["same side of the centre", "opposite side of the centre", "mirror line", "x-axis"], correctIndex: 1, explanation: "It flips through the centre." },
        { prompt: "For similar figures, areas are in the ratio", options: ["k", "k²", "k³", "2k"], correctIndex: 1, explanation: "Area scales as the square of k." },
        { prompt: "For similar solids, volumes are in the ratio", options: ["k", "k²", "k³", "3k"], correctIndex: 2, explanation: "Volume scales as the cube of k." },
        { prompt: "If k = 3, the area of the image is the object area times", options: ["3", "6", "9", "27"], correctIndex: 2, explanation: "k² = 9." },
        { prompt: "If k = 2, the volume of the image is the object volume times", options: ["2", "4", "6", "8"], correctIndex: 3, explanation: "k³ = 8." },
        { prompt: "Enlarging P(2, 3) from the origin by factor 2 gives", options: ["(4, 6)", "(2, 3)", "(1, 1.5)", "(4, 3)"], correctIndex: 0, explanation: "Multiply each coordinate by 2." },
        { prompt: "A scale factor of −1 produces a", options: ["reduction", "180° rotation about the centre (same size)", "translation", "reflection in the x-axis only"], correctIndex: 1, explanation: "|k| = 1, image on the opposite side, same size." },
        { prompt: "Which is NOT a rigid motion?", options: ["translation", "reflection", "rotation", "enlargement with k = 2"], correctIndex: 3, explanation: "Enlargement changes size, so it is not rigid." },
        { prompt: "Under 270° anticlockwise about O, (x, y) maps to", options: ["(y, −x)", "(−y, x)", "(−x, −y)", "(x, −y)"], correctIndex: 0, explanation: "(x, y) → (y, −x)." },
        { prompt: "If two similar triangles have sides in ratio 1 : 4, their areas are in ratio", options: ["1 : 4", "1 : 8", "1 : 16", "1 : 2"], correctIndex: 2, explanation: "4² = 16." },
        { prompt: "A model car is 1/20 of the real size. Its volume is the real one times", options: ["1/20", "1/400", "1/8000", "1/60"], correctIndex: 2, explanation: "(1/20)³ = 1/8000." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Point P(3, −2) is rotated 180° about the origin. Find the image P′.", answerKey: "180° about O maps (x, y) → (−x, −y), so P′ = (−3, 2). Award 3 marks for the rule, 3 for (−3, 2).", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "A rectangle of area 12 cm² is enlarged by scale factor 3. Find the area of the image.", answerKey: "Area ratio = k² = 9, so image area = 9 × 12 = 108 cm². Award 3 marks for using k², 3 for 108 cm².", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Two similar solids have edges in ratio 2 : 3. Their volumes are in ratio", options: ["2 : 3", "4 : 9", "8 : 27", "6 : 9"], correctIndex: 2, answerKey: "Volume ratio = k³ = 2³ : 3³ = 8 : 27. Option C.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Enlarge triangle with vertices A(1,0), B(2,0), C(1,2) from the origin by scale factor 3. Give the image vertices.", answerKey: "Multiply each coordinate by 3: A′(3,0), B′(6,0), C′(3,6). Award 2 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Explain what an enlargement is, what a negative scale factor does, and how the lengths, areas and volumes of similar figures compare. Illustrate the area rule with a shape of area 5 cm² enlarged by factor 4.", answerKey: "An enlargement changes a figure's size by a scale factor k about a centre of enlargement, producing a similar image; each image point is k times as far from the centre as the object point. A negative scale factor enlarges and places the image on the opposite side of the centre (equivalent to a 180° rotation with the enlargement). For similar figures, lengths are in ratio k, areas in ratio k², and volumes in ratio k³. Example: area 5 cm² enlarged by k = 4 gives 4² × 5 = 16 × 5 = 80 cm². Award 3 marks for the enlargement definition, 2 for the negative factor, 3 for the k, k², k³ rules, 2 for the 80 cm² example.", marks: 10 },
      ],
    },
    // source: GeeksforGeeks — Trigonometric Graph (Sin, Cos, Tan) (https://www.geeksforgeeks.org/maths/trigonometric-graph/)
    {
      slug: "trigonometry-2",
      title: "Trigonometry 2",
      objective:
        "By the end of the topic, learners should be able to draw and interpret the graphs of sine, cosine and tangent, and determine their maximum and minimum values, amplitude and period.",
      estimatedMinutes: 110,
      notes: `## The sine and cosine graphs

- y = sin θ and y = cos θ both range between **−1 and 1**.
- Their **period is 360°** (they repeat every 360°).
- **Maximum value = 1, minimum value = −1.**
- y = sin θ: zero at 0°, 180°, 360°; maximum 1 at 90°; minimum −1 at 270°.
- y = cos θ: starts at its **maximum 1** at 0°; zero at 90°, 270°; minimum −1 at 180°.

## The tangent graph

- y = tan θ has **period 180°**.
- It has **no maximum or minimum** (range is all real numbers).
- It is **undefined at 90°, 270°, …** (where cos θ = 0), giving **vertical asymptotes**.

## Amplitude and period

- **Amplitude** = half the distance between the maximum and minimum = (max − min) ÷ 2. For sin/cos it is 1; for tan it is undefined.
- For **y = a sin θ** (or a cos θ): maximum = |a|, minimum = −|a|, **amplitude = |a|**.
- For **y = sin(bθ)**: **period = 360° ÷ b**.
- A constant c in **y = sin θ + c** shifts the graph up by c (max = 1 + c, min = −1 + c).

| Function | Range | Period | Amplitude |
| --- | --- | --- | --- |
| y = sin θ | −1 to 1 | 360° | 1 |
| y = cos θ | −1 to 1 | 360° | 1 |
| y = tan θ | all reals | 180° | undefined |

\`\`\`svg One cycle of y = sin θ
<svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="60" x2="220" y2="60" stroke="#888" stroke-width="1"/>
  <line x1="20" y1="15" x2="20" y2="105" stroke="#888" stroke-width="1"/>
  <path d="M20 60 Q65 10 110 60 T200 60" fill="none" stroke="#1565c0" stroke-width="2"/>
  <text x="103" y="74" font-size="9">180°</text>
  <text x="192" y="74" font-size="9">360°</text>
  <text x="24" y="20" font-size="9">1</text>
  <text x="22" y="104" font-size="9">-1</text>
</svg>
\`\`\`

## Common errors

- **Giving tan a maximum value** — it has none.
- **Confusing the periods** — sin/cos repeat every 360°, tan every 180°.
- **Forgetting a is the amplitude** in y = a sin θ.`,
      workedExample: `**Question:** For y = 3 sin θ, 0° ≤ θ ≤ 360°, state the amplitude, the maximum and minimum values and the values of θ where they occur.

**Solution**

*Step 1 — amplitude.* For y = a sin θ, amplitude = |a| = 3.

*Step 2 — maximum value.* Maximum of sin θ is 1, so maximum of 3 sin θ = 3 × 1 = 3, occurring where sin θ = 1, i.e. θ = 90°.

*Step 3 — minimum value.* Minimum of sin θ is −1, so minimum of 3 sin θ = 3 × (−1) = −3, occurring where sin θ = −1, i.e. θ = 270°.

**Answer: amplitude 3; maximum 3 at θ = 90°; minimum −3 at θ = 270°.**`,
      quiz: [
        { prompt: "The range of y = sin θ is", options: ["0 to 1", "−1 to 1", "all reals", "−90 to 90"], correctIndex: 1, explanation: "Sine oscillates between −1 and 1." },
        { prompt: "The period of y = sin θ is", options: ["90°", "180°", "270°", "360°"], correctIndex: 3, explanation: "It repeats every 360°." },
        { prompt: "The maximum value of cos θ is", options: ["0", "1", "−1", "90"], correctIndex: 1, explanation: "cos θ peaks at 1." },
        { prompt: "y = cos θ has its maximum at", options: ["0°", "90°", "180°", "270°"], correctIndex: 0, explanation: "cos 0° = 1." },
        { prompt: "y = sin θ has its maximum at", options: ["0°", "90°", "180°", "360°"], correctIndex: 1, explanation: "sin 90° = 1." },
        { prompt: "The period of y = tan θ is", options: ["90°", "180°", "360°", "45°"], correctIndex: 1, explanation: "Tangent repeats every 180°." },
        { prompt: "y = tan θ has a maximum value of", options: ["1", "∞", "none — it is unbounded", "0"], correctIndex: 2, explanation: "Tangent has no maximum or minimum." },
        { prompt: "y = tan θ is undefined at", options: ["0°", "90°", "180°", "360°"], correctIndex: 1, explanation: "cos 90° = 0 gives an asymptote." },
        { prompt: "The amplitude of y = sin θ is", options: ["0", "1", "2", "360"], correctIndex: 1, explanation: "Half of (1 − (−1)) = 1." },
        { prompt: "For y = 4 cos θ the maximum value is", options: ["1", "4", "−4", "8"], correctIndex: 1, explanation: "Max = |a| = 4." },
        { prompt: "For y = 4 cos θ the minimum value is", options: ["0", "4", "−4", "−1"], correctIndex: 2, explanation: "Min = −|a| = −4." },
        { prompt: "The amplitude of y = 5 sin θ is", options: ["1", "5", "10", "−5"], correctIndex: 1, explanation: "Amplitude = |a| = 5." },
        { prompt: "The period of y = sin 2θ is", options: ["360°", "180°", "720°", "90°"], correctIndex: 1, explanation: "360° ÷ 2 = 180°." },
        { prompt: "y = sin θ is zero at", options: ["90°", "0° and 180°", "270°", "45°"], correctIndex: 1, explanation: "sin 0° = sin 180° = 0." },
        { prompt: "The minimum of y = sin θ occurs at", options: ["90°", "180°", "270°", "360°"], correctIndex: 2, explanation: "sin 270° = −1." },
        { prompt: "Amplitude equals", options: ["max + min", "(max − min) ÷ 2", "max × min", "period ÷ 2"], correctIndex: 1, explanation: "Half the peak-to-trough distance." },
        { prompt: "For y = cos θ + 2, the maximum value is", options: ["1", "2", "3", "−1"], correctIndex: 2, explanation: "1 + 2 = 3." },
        { prompt: "Which function has no amplitude?", options: ["y = sin θ", "y = cos θ", "y = tan θ", "y = 2 sin θ"], correctIndex: 2, explanation: "Tangent has no max/min, so no amplitude." },
        { prompt: "The graph of cos θ compared with sin θ is", options: ["identical", "shifted 90° to the left", "upside down", "twice as tall"], correctIndex: 1, explanation: "cos θ = sin(θ + 90°)." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the maximum value, minimum value and period of y = cos θ.", answerKey: "Maximum = 1, minimum = −1, period = 360°. Award 2 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "For y = 2 sin θ, 0° ≤ θ ≤ 360°, give the amplitude and the maximum value, and the value of θ where the maximum occurs.", answerKey: "Amplitude = |2| = 2; maximum = 2 × 1 = 2, occurring at θ = 90°. Award 2 for amplitude, 2 for max value, 2 for θ = 90°.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "The period of y = tan θ is", options: ["90°", "180°", "360°", "270°"], correctIndex: 1, answerKey: "Tangent has period 180°. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State the period of (a) y = cos 3θ and (b) y = sin θ.", answerKey: "(a) 360° ÷ 3 = 120°. (b) 360°. Award 3 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Compare the graphs of y = sin θ, y = cos θ and y = tan θ over 0° to 360°, giving their range, period and maximum/minimum values, and explain why the tangent graph has vertical asymptotes.", answerKey: "y = sin θ and y = cos θ both range from −1 to 1 with period 360° and maximum 1, minimum −1; sine starts at 0 (max at 90°, min at 270°), cosine starts at its maximum 1 (min at 180°). y = tan θ has period 180°, range all real numbers, and no maximum or minimum. Tangent = sin θ ÷ cos θ, so it is undefined where cos θ = 0 (at 90°, 270°); as θ approaches these values the ratio grows without bound, producing vertical asymptotes. Award 3 marks for sine/cosine features, 3 for tangent features, 4 for the asymptote explanation.", marks: 10 },
      ],
    },
  ],
};
