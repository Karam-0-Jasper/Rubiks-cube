import type { PeriodContent } from "@/content/types";

// Grade 12, Semester Two, Period VI of the MoE Mathematics syllabus:
// Probability and Statistics, Exponential and Logarithmic Functions, and
// Differentiation and Integration. Notes rebuilt from published sources
// (GeeksforGeeks).
export const mathematicsG12P6: PeriodContent = {
  grade: 12,
  number: 6,
  title: "Probability, Logarithms and Calculus",
  summary:
    "Period VI of the MoE Grade 12 Mathematics syllabus. Learners apply the fundamental counting principle, factorials, permutations and combinations, and work with sample spaces, events, probability, odds and expected value; evaluate and graph exponential and logarithmic functions, use the laws of logarithms and the change-of-base formula, and solve exponential and logarithmic equations; and find limits, derivatives and integrals, using the derivative as a slope and the integral as the area under a curve.",
  topics: [
    // source: GeeksforGeeks — Permutations and Combinations (https://www.geeksforgeeks.org/maths/permutations-and-combinations/); Probability Theory (https://www.geeksforgeeks.org/maths/probability-theory/)
    {
      slug: "probability-and-statistics",
      title: "Probability and Statistics",
      objective:
        "By the end of the topic, learners should be able to use the fundamental counting principle, factorials, permutations and combinations, and compute the probability, odds and expected value of events.",
      estimatedMinutes: 130,
      notes: `## Fundamental counting principle

- If one task can be done in **m** ways and another in **n** ways, the two together can be done in **m × n** ways.
- Example: 3 shirts and 2 trousers give 3 × 2 = 6 outfits.

## Factorials

- **n! = n × (n − 1) × (n − 2) × … × 2 × 1** (n factorial).
- By definition **0! = 1**. Example: 5! = 5 × 4 × 3 × 2 × 1 = 120.

## Permutations

- A **permutation** is an arrangement in which **order matters**.
- **nPr = n! / (n − r)!** = number of ways to arrange r objects from n.

## Combinations

- A **combination** is a selection in which **order does not matter**.
- **nCr = n! / (r!(n − r)!)** = number of ways to choose r objects from n.
- Relationship: **nCr = nPr / r!**.

## Difference between permutations and combinations

| Feature | Permutation | Combination |
| --- | --- | --- |
| Order | matters | does not matter |
| Example | AB ≠ BA | AB = BA |
| Formula | n!/(n − r)! | n!/(r!(n − r)!) |

## Review: sets, Venn, tree diagrams

- Use **Venn diagrams** for overlapping events, **tree diagrams** for multi-stage experiments, and **contingency tables** to organise two-way data.

## Sample space and events

- The **sample space (S)** is the set of all possible outcomes; an **event** is a subset of S.
- Rolling a die: S = {1, 2, 3, 4, 5, 6}.

## Probability of an event

- **P(E) = number of favourable outcomes / total number of outcomes**, with 0 ≤ P(E) ≤ 1.
- **Complementary:** P(E′) = 1 − P(E).
- **Mutually exclusive** (cannot both happen): P(A or B) = P(A) + P(B).
- **Independent** (one does not affect the other): P(A and B) = P(A) × P(B).
- **Conditional:** P(A | B) = P(A ∩ B) / P(B).

## Odds of an event

- **Odds in favour = (favourable) : (unfavourable)**; odds against reverse the ratio.

## Expected value

- **Expected value = Σ (outcome × its probability)** — the long-run average.

## Common errors

- **Using a permutation when order does not matter** (should be a combination).
- **Adding probabilities of events that are not mutually exclusive.**
- **Forgetting 0! = 1.**`,
      workedExample: `**Question:** From a group of 5 students, how many ways can (a) a president and a secretary be chosen (order matters), and (b) a committee of 2 be chosen (order does not matter)?

**Solution**

*Step 1 — part (a) is a permutation (positions differ).*
5P2 = 5! / (5 − 2)! = 5! / 3! = (5 × 4 × 3!) / 3! = 5 × 4 = 20.

*Step 2 — part (b) is a combination (just a group of 2).*
5C2 = 5! / (2!(5 − 2)!) = 5! / (2! × 3!) = (5 × 4) / (2 × 1) = 20 / 2 = 10.

*Check:* 5C2 = 5P2 / 2! = 20 / 2 = 10 ✓.

**Answer: (a) 20 ways, (b) 10 ways.**`,
      quiz: [
        { prompt: "If one task has 4 ways and another 3 ways, together they have", options: ["7", "12", "1", "43"], correctIndex: 1, explanation: "Counting principle: 4 × 3 = 12." },
        { prompt: "5! equals", options: ["25", "120", "15", "5"], correctIndex: 1, explanation: "5×4×3×2×1 = 120." },
        { prompt: "0! equals", options: ["0", "1", "undefined", "10"], correctIndex: 1, explanation: "Defined as 1." },
        { prompt: "In a permutation, order", options: ["does not matter", "matters", "is reversed", "is ignored"], correctIndex: 1, explanation: "Arrangements count." },
        { prompt: "In a combination, order", options: ["matters", "does not matter", "must be increasing", "is doubled"], correctIndex: 1, explanation: "Selections only." },
        { prompt: "The permutation formula is", options: ["n!/(n−r)!", "n!/(r!(n−r)!)", "n!r!", "n/r"], correctIndex: 0, explanation: "nPr arranges r from n." },
        { prompt: "The combination formula is", options: ["n!/(n−r)!", "n!/(r!(n−r)!)", "n! × r!", "n − r"], correctIndex: 1, explanation: "nCr chooses r from n." },
        { prompt: "4P2 equals", options: ["12", "6", "8", "24"], correctIndex: 0, explanation: "4!/2! = 12." },
        { prompt: "4C2 equals", options: ["12", "6", "8", "4"], correctIndex: 1, explanation: "4!/(2!2!) = 6." },
        { prompt: "The sample space of rolling a die is", options: ["{1,2,3}", "{1,2,3,4,5,6}", "{H,T}", "{6}"], correctIndex: 1, explanation: "Six possible outcomes." },
        { prompt: "An event is a", options: ["single number", "subset of the sample space", "probability", "factorial"], correctIndex: 1, explanation: "A set of outcomes." },
        { prompt: "P(E) is", options: ["favourable/total outcomes", "total/favourable", "always 1", "n!"], correctIndex: 0, explanation: "Ratio of favourable to all." },
        { prompt: "Probability values lie between", options: ["0 and 1", "−1 and 1", "1 and 10", "0 and 100"], correctIndex: 0, explanation: "0 ≤ P ≤ 1." },
        { prompt: "P(E′) equals", options: ["1 − P(E)", "P(E) − 1", "1/P(E)", "P(E)²"], correctIndex: 0, explanation: "Complement rule." },
        { prompt: "For mutually exclusive A and B, P(A or B) =", options: ["P(A) × P(B)", "P(A) + P(B)", "P(A) − P(B)", "1"], correctIndex: 1, explanation: "They cannot both occur." },
        { prompt: "For independent A and B, P(A and B) =", options: ["P(A) + P(B)", "P(A) × P(B)", "P(A) − P(B)", "0"], correctIndex: 1, explanation: "Multiply the probabilities." },
        { prompt: "The probability of rolling a 3 on a fair die is", options: ["1/3", "1/6", "1/2", "3/6"], correctIndex: 1, explanation: "One favourable of six." },
        { prompt: "Odds in favour of an event are", options: ["favourable : unfavourable", "total : favourable", "P(E)²", "1 − P"], correctIndex: 0, explanation: "A ratio of outcomes." },
        { prompt: "Expected value is", options: ["the largest outcome", "Σ(outcome × probability)", "always 0", "the number of outcomes"], correctIndex: 1, explanation: "The long-run average." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Evaluate 6! and 6P2.", answerKey: "6! = 6×5×4×3×2×1 = 720. 6P2 = 6!/(6−2)! = 6!/4! = 6×5 = 30. Award 3 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "In how many ways can a committee of 3 be chosen from 7 people?", answerKey: "7C3 = 7!/(3!4!) = (7×6×5)/(3×2×1) = 210/6 = 35 ways. Award 3 marks for the setup, 3 for 35.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "A card is drawn from 52. The probability it is a heart is", options: ["1/4", "1/13", "1/2", "13/13"], correctIndex: 0, answerKey: "13 hearts out of 52 = 13/52 = 1/4. Option A.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Two fair coins are tossed. Find the probability of (a) two heads and (b) at least one head.", answerKey: "S = {HH, HT, TH, TT}. (a) P(two heads) = 1/4. (b) P(at least one head) = 1 − P(TT) = 1 − 1/4 = 3/4. Award 3 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the difference between a permutation and a combination with formulas, and the rules for complementary, mutually exclusive and independent events. Then find the probability of drawing a red ball from a bag of 4 red and 6 blue balls, and the probability of two reds in a row with replacement.", answerKey: "Permutation (order matters) nPr = n!/(n − r)!; combination (order does not matter) nCr = n!/(r!(n − r)!). P(E′) = 1 − P(E); mutually exclusive P(A or B) = P(A) + P(B); independent P(A and B) = P(A) × P(B). Bag: total 10, P(red) = 4/10 = 2/5. With replacement the draws are independent: P(two reds) = (2/5) × (2/5) = 4/25. Award 3 marks for the permutation/combination distinction, 3 for the three event rules, 2 for P(red) = 2/5, 2 for 4/25.", marks: 10 },
      ],
    },
    // source: GeeksforGeeks — Logarithms (https://www.geeksforgeeks.org/maths/logarithms/); Logarithm Rules (https://www.geeksforgeeks.org/maths/log-rules/); Change of Base Formula (https://www.geeksforgeeks.org/maths/change-of-base-formula/)
    {
      slug: "exponential-and-logarithmic-functions",
      title: "Exponential and Logarithmic Functions",
      objective:
        "By the end of the topic, learners should be able to evaluate and graph exponential and logarithmic functions, apply growth, decay and compound-interest models, use the laws of logarithms and the change-of-base formula, and solve exponential and logarithmic equations.",
      estimatedMinutes: 130,
      notes: `## Evaluation of exponential functions

- An **exponential function** is **y = aˣ** (a > 0, a ≠ 1); the variable is in the **exponent**.
- Evaluate by substituting x: for y = 2ˣ, y(3) = 2³ = 8; y(0) = 2⁰ = 1.

## Graph of exponential functions

- The graph of y = aˣ passes through **(0, 1)**, rises steeply for a > 1 (**growth**), and falls for 0 < a < 1 (**decay**).
- The **x-axis (y = 0) is a horizontal asymptote**; y is always positive.

## Applications (growth, decay, compound interest)

- **Growth / decay:** A = A₀(1 ± r)ᵗ, where r is the rate and t the time.
- **Compound interest:** A = P(1 + r/n)^(nt) for n compoundings per year.
- A **doubling-time** model doubles the quantity over a fixed period.

## Algebraic vs exponential functions

- In an **algebraic** function the variable is the **base** (e.g. x²); in an **exponential** function the variable is the **exponent** (e.g. 2ˣ).

## Base e

- **e ≈ 2.718** is the natural base. y = eˣ is used for **continuous growth and decay**.
- **Continuous compounding:** A = Peʳᵗ.

## Logarithms

- **log_a x = y means aʸ = x** — a logarithm is the **inverse of an exponential**.
- Example: because 2³ = 8, **log₂ 8 = 3**.
- **Common logarithm** log x is base 10; **natural logarithm** ln x is base e.

## Laws of logarithms

- **Product:** log_a(MN) = log_a M + log_a N.
- **Quotient:** log_a(M/N) = log_a M − log_a N.
- **Power:** log_a(Mⁿ) = n log_a M.
- **log_a 1 = 0** and **log_a a = 1**.

## Change-of-base formula

- **log_a x = log_b x / log_b a** — rewrite a log in a base your calculator supports (10 or e).

## Solving exponential and logarithmic equations

- **Exponential:** take logs of both sides, then use the power law to bring the exponent down.
- **Logarithmic:** combine logs to one, then rewrite in exponential form.

## Common errors

- **Treating x² (algebraic) as exponential** — check where the variable sits.
- **Writing log(M + N) = log M + log N** (only products give a sum of logs).
- **Forgetting the domain:** you can only take the log of a **positive** number.`,
      workedExample: `**Question:** Solve 2ˣ = 32, and verify using the definition of a logarithm.

**Solution**

*Step 1 — write 32 as a power of 2.* 32 = 2⁵.

*Step 2 — equate exponents.* 2ˣ = 2⁵ ⟹ x = 5.

*Step 3 — verify with logs.* 2ˣ = 32 means x = log₂ 32; since 2⁵ = 32, log₂ 32 = 5.

*Check:* 2⁵ = 32 ✓.

**Answer: x = 5.**`,
      quiz: [
        { prompt: "In an exponential function the variable is the", options: ["base", "coefficient", "exponent", "constant"], correctIndex: 2, explanation: "e.g. y = 2ˣ." },
        { prompt: "The graph of y = aˣ passes through", options: ["(1, 0)", "(0, 1)", "(0, 0)", "(1, 1)"], correctIndex: 1, explanation: "a⁰ = 1." },
        { prompt: "For a > 1 the exponential graph shows", options: ["decay", "growth", "a straight line", "a circle"], correctIndex: 1, explanation: "It rises as x increases." },
        { prompt: "The horizontal asymptote of y = aˣ is", options: ["x = 0", "y = 0", "y = 1", "y = x"], correctIndex: 1, explanation: "The curve approaches the x-axis." },
        { prompt: "Evaluate 2⁴.", options: ["8", "16", "6", "24"], correctIndex: 1, explanation: "2×2×2×2 = 16." },
        { prompt: "The natural base e is approximately", options: ["2.718", "3.142", "1.414", "1.618"], correctIndex: 0, explanation: "e ≈ 2.718." },
        { prompt: "Continuous compounding uses", options: ["A = P(1+r)ᵗ", "A = Peʳᵗ", "A = P + rt", "A = Prt"], correctIndex: 1, explanation: "Base e for continuous growth." },
        { prompt: "x² is a(n) ___ function.", options: ["exponential", "algebraic", "logarithmic", "linear exponential"], correctIndex: 1, explanation: "Variable is the base." },
        { prompt: "A logarithm is the inverse of", options: ["a polynomial", "an exponential", "a ratio", "a factorial"], correctIndex: 1, explanation: "log undoes exponentiation." },
        { prompt: "log_a x = y means", options: ["xʸ = a", "aʸ = x", "aˣ = y", "yᵃ = x"], correctIndex: 1, explanation: "Definition of a log." },
        { prompt: "Because 2³ = 8, log₂ 8 equals", options: ["2", "3", "8", "1"], correctIndex: 1, explanation: "The exponent is 3." },
        { prompt: "The common logarithm has base", options: ["2", "e", "10", "1"], correctIndex: 2, explanation: "log x is base 10." },
        { prompt: "The natural logarithm has base", options: ["10", "e", "2", "100"], correctIndex: 1, explanation: "ln x is base e." },
        { prompt: "log_a(MN) equals", options: ["log M + log N", "log M − log N", "n log M", "log M × log N"], correctIndex: 0, explanation: "Product rule." },
        { prompt: "log_a(M/N) equals", options: ["log M + log N", "log M − log N", "log M / log N", "n log M"], correctIndex: 1, explanation: "Quotient rule." },
        { prompt: "log_a(Mⁿ) equals", options: ["n log M", "log M + n", "logⁿ M", "log M − n"], correctIndex: 0, explanation: "Power rule." },
        { prompt: "log_a 1 equals", options: ["1", "0", "a", "undefined"], correctIndex: 1, explanation: "a⁰ = 1." },
        { prompt: "The change-of-base formula is log_a x =", options: ["log_b x / log_b a", "log_b a / log_b x", "log_b x × log_b a", "x / a"], correctIndex: 0, explanation: "Rewrite in a known base." },
        { prompt: "You can take the logarithm only of a number that is", options: ["negative", "positive", "zero", "an integer"], correctIndex: 1, explanation: "The domain is x > 0." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Write in logarithmic form: (a) 3⁴ = 81 and (b) 10³ = 1000.", answerKey: "(a) log₃ 81 = 4. (b) log₁₀ 1000 = 3. Award 3 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Simplify log 8 + log 5 − log 4 (base 10).", answerKey: "= log(8 × 5 / 4) = log(40/4) = log 10 = 1. Award 3 marks for combining the logs, 3 for the value 1.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Solve 3ˣ = 81.", options: ["x = 3", "x = 4", "x = 27", "x = 9"], correctIndex: 1, answerKey: "81 = 3⁴, so x = 4. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "$2000 is invested at 5% per year compound interest. Find its value after 2 years (A = P(1 + r)ᵗ).", answerKey: "A = 2000(1 + 0.05)² = 2000(1.05)² = 2000 × 1.1025 = $2205. Award 3 marks for the setup, 3 for $2205.", marks: 6 },
        { type: "ESSAY", prompt: "State the three laws of logarithms and the change-of-base formula, explain the difference between an algebraic and an exponential function, and solve 5^(x+1) = 125.", answerKey: "Laws: log(MN) = log M + log N; log(M/N) = log M − log N; log(Mⁿ) = n log M. Change of base: log_a x = log_b x / log_b a. An algebraic function has the variable as the base (x²); an exponential function has the variable as the exponent (5ˣ). Solve: 125 = 5³, so 5^(x+1) = 5³ ⟹ x + 1 = 3 ⟹ x = 2. Award 3 marks for the laws, 2 for change of base, 2 for the algebraic/exponential distinction, 3 for x = 2.", marks: 10 },
      ],
    },
    // source: GeeksforGeeks — Derivatives (https://www.geeksforgeeks.org/maths/derivatives/); Integration Formulas (https://www.geeksforgeeks.org/maths/integration-formulas/)
    {
      slug: "differentiation-and-integration",
      title: "Differentiation and Integration",
      objective:
        "By the end of the topic, learners should be able to use the difference quotient and limits, differentiate simple polynomial functions, find areas under a curve, and integrate simple polynomials.",
      estimatedMinutes: 130,
      notes: `## Review of analytic geometry

- The **gradient (slope)** of the line through (x₁, y₁) and (x₂, y₂) is **m = (y₂ − y₁)/(x₂ − x₁)**.
- A **tangent** touches a curve at one point; its slope is the slope of the curve there.

## Difference quotient

- The **difference quotient** gives the average rate of change over an interval h:
- **[f(x + h) − f(x)] / h.**
- As h shrinks to zero it becomes the slope of the tangent.

## Limits

- A **limit** is the value a function approaches as x approaches a chosen value.
- Written **lim(x→a) f(x) = L**.
- For a polynomial, the limit as x → a is found by **substituting x = a**.

## Differentiation

- The **derivative** f′(x) is the slope of the tangent and the instantaneous rate of change:
- **f′(x) = lim(h→0) [f(x + h) − f(x)] / h** (first principles).
- **Power rule:** d/dx(xⁿ) = **n·xⁿ⁻¹**.
- **Constant:** d/dx(c) = 0; **constant multiple:** d/dx(k·f) = k·f′.
- **Sum rule:** differentiate term by term.

## Areas under the curve

- The **area under a curve** y = f(x) between x = a and x = b is found by the **definite integral** ∫ from a to b of f(x) dx.
- It is the limit of a sum of thin rectangles (summation) under the curve.

## Integration

- **Integration is the reverse of differentiation** (the antiderivative).
- **Power rule:** ∫xⁿ dx = **xⁿ⁺¹/(n + 1) + C** (n ≠ −1), where **C** is the constant of integration.
- A **definite integral** ∫ from a to b of f(x) dx = F(b) − F(a), where F is an antiderivative.

## Common errors

- **Forgetting to reduce the power** in the derivative (xⁿ → n·xⁿ⁻¹).
- **Dividing by the old power instead of (n + 1)** when integrating.
- **Omitting the constant of integration C** in an indefinite integral.`,
      workedExample: `**Question:** Given f(x) = x² + 3x, (a) find f′(x) using the power rule and (b) find ∫f(x) dx.

**Solution**

*Step 1 — differentiate term by term.*
d/dx(x²) = 2x¹ = 2x; d/dx(3x) = 3.
So **f′(x) = 2x + 3.**

*Step 2 — check with first principles (optional).*
[f(x + h) − f(x)]/h = [(x + h)² + 3(x + h) − x² − 3x]/h = [2xh + h² + 3h]/h = 2x + h + 3 → 2x + 3 as h → 0 ✓.

*Step 3 — integrate term by term using ∫xⁿ dx = xⁿ⁺¹/(n + 1).*
∫x² dx = x³/3; ∫3x dx = 3·x²/2 = (3/2)x².
So **∫f(x) dx = x³/3 + (3/2)x² + C.**

**Answer: f′(x) = 2x + 3 and ∫f(x) dx = x³/3 + (3/2)x² + C.**`,
      quiz: [
        { prompt: "The slope of the line through (x₁,y₁) and (x₂,y₂) is", options: ["(y₂−y₁)/(x₂−x₁)", "(x₂−x₁)/(y₂−y₁)", "y₂−y₁", "x₁+x₂"], correctIndex: 0, explanation: "Rise over run." },
        { prompt: "A tangent to a curve touches it at", options: ["two points", "one point", "no point", "every point"], correctIndex: 1, explanation: "A single point of contact." },
        { prompt: "The difference quotient is", options: ["[f(x+h)−f(x)]/h", "f(x)×h", "f(x)/x", "f(x)+h"], correctIndex: 0, explanation: "Average rate of change." },
        { prompt: "As h → 0 the difference quotient gives the", options: ["area", "slope of the tangent", "limit of a constant", "integral"], correctIndex: 1, explanation: "This defines the derivative." },
        { prompt: "A limit is the value a function", options: ["never reaches", "approaches as x → a", "equals at x = ∞", "has at h = 1"], correctIndex: 1, explanation: "The approached value." },
        { prompt: "lim(x→2)(x + 3) equals", options: ["2", "3", "5", "6"], correctIndex: 2, explanation: "Substitute x = 2: 2 + 3 = 5." },
        { prompt: "The derivative represents the", options: ["area under the curve", "slope of the tangent", "y-intercept", "constant term"], correctIndex: 1, explanation: "Instantaneous rate of change." },
        { prompt: "The power rule for differentiation is", options: ["n·xⁿ⁻¹", "xⁿ⁺¹/(n+1)", "nxⁿ⁺¹", "xⁿ/n"], correctIndex: 0, explanation: "Bring the power down, reduce by 1." },
        { prompt: "d/dx(x³) equals", options: ["3x²", "x²", "3x⁴", "x³/3"], correctIndex: 0, explanation: "3·x² by the power rule." },
        { prompt: "The derivative of a constant is", options: ["1", "the constant", "0", "undefined"], correctIndex: 2, explanation: "A constant does not change." },
        { prompt: "d/dx(5x) equals", options: ["5", "5x", "x", "0"], correctIndex: 0, explanation: "5·x⁰ = 5." },
        { prompt: "Differentiating f(x) = x² + 4 gives", options: ["2x", "2x + 4", "x + 4", "2x + 1"], correctIndex: 0, explanation: "Derivative of 4 is 0." },
        { prompt: "The area under a curve is found by", options: ["differentiation", "a definite integral", "the slope formula", "a limit of a constant"], correctIndex: 1, explanation: "∫ from a to b." },
        { prompt: "Integration is the reverse of", options: ["addition", "differentiation", "factorising", "substitution"], correctIndex: 1, explanation: "The antiderivative." },
        { prompt: "The power rule for integration is", options: ["n·xⁿ⁻¹", "xⁿ⁺¹/(n+1) + C", "xⁿ/n", "nxⁿ"], correctIndex: 1, explanation: "Raise the power, divide, add C." },
        { prompt: "∫x² dx equals", options: ["2x + C", "x³/3 + C", "x³ + C", "3x² + C"], correctIndex: 1, explanation: "x³/3 + C." },
        { prompt: "The C in an indefinite integral is the", options: ["coefficient", "constant of integration", "cross term", "curve"], correctIndex: 1, explanation: "Any constant differentiates to 0." },
        { prompt: "∫1 dx equals", options: ["0", "x + C", "1 + C", "x²"], correctIndex: 1, explanation: "Antiderivative of 1 is x." },
        { prompt: "A definite integral ∫ from a to b of f equals", options: ["F(b) − F(a)", "F(a) − F(b)", "F(b) + F(a)", "f(b) − f(a)"], correctIndex: 0, explanation: "Evaluate the antiderivative at the limits." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Differentiate f(x) = x⁴ + 2x² − 7.", answerKey: "f′(x) = 4x³ + 4x − 0 = 4x³ + 4x. (Power rule term by term; derivative of −7 is 0.) Award 2 marks per correct term (x⁴ and 2x²) and 2 for dropping the constant.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Find lim(x→3)(x² − 2x + 1).", answerKey: "Substitute x = 3: 9 − 6 + 1 = 4. Award 3 marks for the substitution, 3 for 4.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "∫x³ dx equals", options: ["3x² + C", "x⁴/4 + C", "x⁴ + C", "x²/2 + C"], correctIndex: 1, answerKey: "xⁿ⁺¹/(n+1): x⁴/4 + C. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Integrate ∫(2x + 5) dx.", answerKey: "∫2x dx = x²; ∫5 dx = 5x; so the integral = x² + 5x + C. Award 2 marks for x², 2 for 5x, 2 for + C.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the derivative as the limit of the difference quotient and state the power rules for differentiation and integration. Then for f(x) = 3x² − 4x find f′(x) and ∫f(x) dx.", answerKey: "The derivative f′(x) = lim(h→0)[f(x+h) − f(x)]/h is the slope of the tangent / instantaneous rate of change. Power rule (differentiation): d/dx(xⁿ) = n·xⁿ⁻¹. Power rule (integration): ∫xⁿ dx = xⁿ⁺¹/(n+1) + C. For f(x) = 3x² − 4x: f′(x) = 6x − 4; ∫f(x) dx = 3·x³/3 − 4·x²/2 + C = x³ − 2x² + C. Award 2 marks for the limit definition, 2 for the two power rules, 3 for f′(x) = 6x − 4, 3 for the integral x³ − 2x² + C.", marks: 10 },
      ],
    },
  ],
};
