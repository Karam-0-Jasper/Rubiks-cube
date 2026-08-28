import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Mathematics, Grade 11,
// Period VI: Probability.
export const mathematicsG11P6: PeriodContent = {
  grade: 11,
  number: 6,
  title: "Probability",
  summary:
    "Period VI of the MoE Grade 11 Mathematics syllabus. Learners define probability and the sample space of an experiment, estimate probability from relative frequency, and compute compound events — the union and intersection of events and independent events — using the addition and multiplication rules with Venn and tree diagrams.",
  topics: [
    {
      // source: Introduction to Probability, Statistics LibreTexts
      // (stats.libretexts.org, 3.1); Siyavula Mathematics Grade 10/11, Probability.
      slug: "probability-and-sample-spaces",
      title: "Probability and Sample Spaces",
      objective:
        "By the end of the topic, learners should be able to define probability, list the sample space and events of an experiment, compute the probability of an event as favourable outcomes over total outcomes, and state the odds of an event.",
      estimatedMinutes: 120,
      notes: `## Key terms

- **Experiment** — a process with an uncertain result (rolling a die, tossing a coin).
- **Outcome** — one possible result of the experiment.
- **Sample space (S)** — the **set of all possible outcomes**. For one die, S = {1, 2, 3, 4, 5, 6}.
- **Event** — a subset of the sample space — one or more outcomes we are interested in (e.g. "an even number" = {2, 4, 6}).

## The probability of an event

For equally likely outcomes:

**P(A) = number of favourable outcomes / total number of outcomes = n(A) / n(S)**

- Probability is always between **0 and 1**: P = 0 (impossible), P = 1 (certain).
- The probabilities of all outcomes in S add up to **1**.
- **Complement:** P(not A) = 1 − P(A).

## Odds

- The **odds in favour** of an event = (favourable) : (unfavourable).
- If P(A) = 3/10, the odds in favour are 3 : 7, and the odds against are 7 : 3.

## Examples of the sample space

| Experiment | Sample space S | n(S) |
| --- | --- | --- |
| Toss one coin | {H, T} | 2 |
| Roll one die | {1,2,3,4,5,6} | 6 |
| Toss two coins | {HH, HT, TH, TT} | 4 |

## Common errors to watch for

- **Probability outside 0–1** — a probability can never exceed 1 or be negative.
- **Miscounting the sample space** — list every outcome (for two coins there are 4, not 3).
- **Confusing odds with probability** — odds compare favourable to unfavourable; probability compares favourable to total.`,
      workedExample: `**Task.** A bag holds 4 red, 3 blue and 5 green marbles. One marble is drawn at random.

**Step 1 — sample space.** Total marbles n(S) = 4 + 3 + 5 = 12.

**Step 2 — P(red).** Favourable = 4, so P(red) = 4/12 = 1/3.

**Step 3 — P(not green).** n(green) = 5, so P(green) = 5/12; P(not green) = 1 − 5/12 = 7/12.

**Step 4 — odds in favour of blue.** n(blue) = 3, unfavourable = 12 − 3 = 9, so odds = 3 : 9 = 1 : 3.`,
      quiz: [
        { prompt: "The set of all possible outcomes of an experiment is the…", options: ["sample space", "event", "probability", "outcome"], correctIndex: 0, explanation: "The sample space S lists every possible outcome." },
        { prompt: "For equally likely outcomes, P(A) equals…", options: ["favourable outcomes / total outcomes", "total / favourable", "favourable × total", "favourable − total"], correctIndex: 0, explanation: "P(A) = n(A)/n(S)." },
        { prompt: "A probability must lie between…", options: ["0 and 1", "1 and 10", "0 and 100", "−1 and 1"], correctIndex: 0, explanation: "0 = impossible, 1 = certain." },
        { prompt: "The probability of a certain event is…", options: ["1", "0", "0.5", "100"], correctIndex: 0, explanation: "A certain event has probability 1." },
        { prompt: "P(not A) equals…", options: ["1 − P(A)", "1 + P(A)", "P(A) − 1", "1 / P(A)"], correctIndex: 0, explanation: "The complement rule: P(not A) = 1 − P(A)." },
        { prompt: "The sample space for rolling one die has how many outcomes?", options: ["6", "1", "12", "36"], correctIndex: 0, explanation: "{1,2,3,4,5,6} has 6 outcomes." },
        { prompt: "Tossing two coins gives a sample space of…", options: ["{HH, HT, TH, TT}", "{H, T}", "{HH, TT}", "{H, T, HT}"], correctIndex: 0, explanation: "Four equally likely outcomes." },
        { prompt: "An event is…", options: ["a subset of the sample space", "the whole experiment", "always a single outcome", "a probability value"], correctIndex: 0, explanation: "An event is one or more outcomes of interest." },
        { prompt: "Rolling a die, P(even number) =", options: ["1/2", "1/3", "1/6", "2/3"], correctIndex: 0, explanation: "Even = {2,4,6}, so 3/6 = 1/2." },
        { prompt: "All the probabilities of the outcomes in S add up to…", options: ["1", "0", "the number of outcomes", "0.5"], correctIndex: 0, explanation: "Total probability is always 1." },
        { prompt: "If P(A) = 0.25, then P(not A) =", options: ["0.75", "0.25", "1.25", "0.5"], correctIndex: 0, explanation: "1 − 0.25 = 0.75." },
        { prompt: "Odds in favour of an event compare…", options: ["favourable to unfavourable outcomes", "favourable to total", "total to favourable", "two probabilities"], correctIndex: 0, explanation: "Odds = favourable : unfavourable." },
        { prompt: "If P(A) = 3/10, the odds in favour of A are…", options: ["3 : 7", "3 : 10", "7 : 3", "10 : 3"], correctIndex: 0, explanation: "Favourable 3, unfavourable 7." },
        { prompt: "The probability of an impossible event is…", options: ["0", "1", "0.5", "−1"], correctIndex: 0, explanation: "Impossible events have probability 0." },
        { prompt: "A bag has 2 red and 3 white balls. P(red) =", options: ["2/5", "2/3", "3/5", "1/2"], correctIndex: 0, explanation: "2 red out of 5 total." },
        { prompt: "Which value could NOT be a probability?", options: ["1.4", "0", "0.3", "1"], correctIndex: 0, explanation: "1.4 exceeds 1, so it is impossible." },
        { prompt: "The complement of 'rolling a 6' on a die has probability…", options: ["5/6", "1/6", "1", "1/2"], correctIndex: 0, explanation: "1 − 1/6 = 5/6." },
        { prompt: "One outcome of an experiment is called an…", options: ["outcome", "event set", "sample space", "trial count"], correctIndex: 0, explanation: "An outcome is a single possible result." },
        { prompt: "Drawing one card, P(a heart) from a 52-card deck =", options: ["1/4", "1/13", "1/2", "13/52 = 1/3"], correctIndex: 0, explanation: "13 hearts / 52 = 1/4." },
        { prompt: "If the odds against an event are 7 : 3, its probability is…", options: ["3/10", "7/10", "3/7", "7/3"], correctIndex: 0, explanation: "Favourable 3 of 10 total." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define sample space and event, and write the formula for the probability of an event with equally likely outcomes.", answerKey: "The sample space is the set of all possible outcomes of an experiment; an event is a subset of the sample space (one or more outcomes of interest). P(A) = n(A)/n(S) = favourable outcomes / total outcomes. Award 2 marks each for the two definitions and 2 for the formula.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "A die is rolled. What is P(a number greater than 4)?", options: ["1/3", "1/2", "2/3", "1/6"], correctIndex: 0, answerKey: "Numbers > 4 are {5,6} = 2 outcomes, so 2/6 = 1/3.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A bag contains 5 red, 4 blue and 6 yellow beads. Find P(blue) and P(not yellow).", answerKey: "Total = 15. P(blue) = 4/15. P(yellow) = 6/15 = 2/5, so P(not yellow) = 1 − 2/5 = 3/5. Award 3 marks for P(blue) and 3 for P(not yellow) using the complement.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "The probability that it rains tomorrow is 0.3. State the odds in favour of rain and the odds against rain.", answerKey: "P(rain) = 0.3 = 3/10, so favourable 3 and unfavourable 7. Odds in favour = 3 : 7; odds against = 7 : 3. Award 3 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Two coins are tossed. (a) List the sample space. (b) Find the probability of getting exactly one head, two heads, and at least one head. (c) Explain why the three probabilities you can add for the whole space total 1. Show your reasoning.", answerKey: "Award marks: (a) S = {HH, HT, TH, TT}, 4 marks; (b) exactly one head = {HT, TH} = 2/4 = 1/2, two heads = {HH} = 1/4, at least one head = {HH,HT,TH} = 3/4, 9 marks; (c) explanation that the probabilities of all four mutually exclusive outcomes (each 1/4) sum to 1, 6 marks; clarity and correct notation, 6 marks.", marks: 25 },
      ],
    },
    {
      // source: Relative Frequency / Empirical Probability, Statistics LibreTexts
      // (stats.libretexts.org, 3.1 "Three Approaches"); Siyavula Probability, relative frequency.
      slug: "relative-frequency",
      title: "Relative Frequency (Experimental Probability)",
      objective:
        "By the end of the topic, learners should be able to compute the relative frequency of an outcome from repeated trials and use it as an estimate of probability, and explain how it approaches the theoretical probability as the number of trials grows.",
      estimatedMinutes: 90,
      notes: `## Relative frequency

- **Theoretical probability** is worked out from equally likely outcomes.
- **Relative frequency** (experimental probability) is worked out from **actually doing the experiment** many times.

**Relative frequency of an event = number of times the event occurred / total number of trials**

- The more trials you carry out, the **closer** the relative frequency gets to the theoretical probability (the law of large numbers).
- Relative frequency is used when outcomes are **not** equally likely, or the theoretical probability is unknown (a bent coin, a drawing pin, real survey data).

## Reading a frequency table

| Outcome | Frequency | Relative frequency |
| --- | --- | --- |
| Heads | 27 | 27/50 = 0.54 |
| Tails | 23 | 23/50 = 0.46 |
| Total | 50 | 1.00 |

- The relative frequencies of all outcomes add to **1**.

## Common errors to watch for

- **Dividing by the wrong total** — always divide by the total number of trials, not by the number of outcomes.
- **Expecting exact theoretical values in few trials** — small samples vary; only many trials settle near the true probability.`,
      workedExample: `**Task.** A drawing pin is dropped 200 times and lands "point up" 130 times.

**Step 1 — relative frequency of point up.** 130 / 200 = 0.65.

**Step 2 — relative frequency of point down.** 200 − 130 = 70, so 70 / 200 = 0.35.

**Step 3 — estimate.** Because the pin is not symmetrical the theoretical probability is unknown, so the best estimate of P(point up) is the relative frequency, **0.65**. Repeating with more drops would make this estimate more reliable.`,
      quiz: [
        { prompt: "Relative frequency of an event equals…", options: ["times it occurred / total trials", "total trials / times it occurred", "times it occurred × total trials", "1 − times it occurred"], correctIndex: 0, explanation: "It is occurrences divided by the number of trials." },
        { prompt: "Relative frequency is also called…", options: ["experimental probability", "theoretical probability", "odds", "sample space"], correctIndex: 0, explanation: "It comes from performing the experiment." },
        { prompt: "As the number of trials increases, relative frequency tends to…", options: ["approach the theoretical probability", "move away from it", "become 0", "become larger than 1"], correctIndex: 0, explanation: "This is the law of large numbers." },
        { prompt: "A coin lands heads 27 times in 50 tosses. Relative frequency of heads =", options: ["0.54", "0.27", "0.5", "1.85"], correctIndex: 0, explanation: "27/50 = 0.54." },
        { prompt: "Relative frequencies of all outcomes add up to…", options: ["1", "0", "the number of trials", "0.5"], correctIndex: 0, explanation: "Just like probabilities, they total 1." },
        { prompt: "Relative frequency is most useful when outcomes are…", options: ["not equally likely or unknown", "always equally likely", "impossible", "certain"], correctIndex: 0, explanation: "It estimates probability when theory can't be used." },
        { prompt: "In 80 trials an event happens 20 times. Its relative frequency is…", options: ["0.25", "0.2", "4", "0.8"], correctIndex: 0, explanation: "20/80 = 0.25." },
        { prompt: "To get a reliable estimate of probability you should use…", options: ["many trials", "one trial", "no trials", "exactly two trials"], correctIndex: 0, explanation: "More trials give a better estimate." },
        { prompt: "A die is rolled 60 times; a 4 appears 12 times. Relative frequency of 4 =", options: ["0.2", "0.4", "1/6", "12"], correctIndex: 0, explanation: "12/60 = 0.2." },
        { prompt: "The theoretical probability of a fair die showing 4 is…", options: ["1/6 ≈ 0.167", "0.2", "1/2", "1/3"], correctIndex: 0, explanation: "One face out of six." },
        { prompt: "If relative frequency (0.2) differs from theory (0.167), the likely reason is…", options: ["a limited number of trials", "the die has 5 faces", "probability is above 1", "the outcomes are impossible"], correctIndex: 0, explanation: "Small samples vary around the true value." },
        { prompt: "Relative frequency values lie between…", options: ["0 and 1", "1 and 100", "−1 and 1", "0 and the number of trials"], correctIndex: 0, explanation: "Like all probabilities, 0 to 1." },
        { prompt: "Survey: 45 of 150 people prefer tea. Relative frequency =", options: ["0.3", "0.45", "3", "0.15"], correctIndex: 0, explanation: "45/150 = 0.3." },
        { prompt: "Experimental probability is found by…", options: ["performing the experiment", "using a formula only", "guessing", "reading the sample space"], correctIndex: 0, explanation: "It is based on observed results." },
        { prompt: "In a frequency table, the relative frequency column should sum to…", options: ["1.00", "0", "the largest frequency", "the number of rows"], correctIndex: 0, explanation: "All relative frequencies total 1." },
        { prompt: "150 seeds are planted and 138 germinate. Relative frequency of germination =", options: ["0.92", "0.12", "1.09", "138"], correctIndex: 0, explanation: "138/150 = 0.92." },
        { prompt: "A biased coin gives heads 0.7 of the time experimentally. Best estimate of P(heads) is…", options: ["0.7", "0.5", "1", "0.3"], correctIndex: 0, explanation: "For a biased coin, use the experimental value." },
        { prompt: "The relative frequency of an event that never occurred in the trials is…", options: ["0", "1", "0.5", "undefined"], correctIndex: 0, explanation: "0 occurrences gives 0." },
        { prompt: "Which needs relative frequency rather than theory?", options: ["chance a specific drawing pin lands point up", "chance a fair die shows 3", "chance a fair coin shows heads", "chance of drawing any card from 52"], correctIndex: 0, explanation: "An unsymmetrical pin has no simple theoretical probability." },
        { prompt: "Doubling the number of trials generally makes the estimate…", options: ["more reliable", "less reliable", "always exact", "equal to 1"], correctIndex: 0, explanation: "More data reduces random variation." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define relative frequency and explain how it is related to theoretical probability.", answerKey: "Relative frequency = number of times an event occurs / total number of trials; it is the experimental estimate of probability. As the number of trials increases it approaches the theoretical probability (law of large numbers). Award 3 marks for the definition/formula and 3 for the relationship.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "A spinner is spun 40 times and lands on red 10 times. The relative frequency of red is:", options: ["0.25", "0.10", "4", "0.4"], correctIndex: 0, answerKey: "10/40 = 0.25.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "In 250 tosses a coin shows heads 140 times. Find the relative frequency of heads and of tails, and comment on whether the coin seems fair.", answerKey: "Heads: 140/250 = 0.56; tails: 110/250 = 0.44. The values are close to but not exactly 0.5; with 250 tosses this small difference is consistent with a fair coin, though more tosses would clarify. Award 2 marks each for the two relative frequencies and 2 for a reasonable comment.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Explain why a single toss of a coin cannot give a good estimate of the probability of heads, but 1000 tosses can.", answerKey: "One toss gives a relative frequency of either 0 or 1, far from 0.5; a single trial carries huge random variation. Over 1000 tosses the relative frequency settles close to the theoretical probability by the law of large numbers. Award marks for explaining small-sample variation and the improvement with many trials.", marks: 4 },
        { type: "ESSAY", prompt: "Design and describe a simple experiment to estimate the probability that a thumbtack lands point up. Explain how you would record results in a frequency table, compute the relative frequency, and how the number of trials affects the reliability of your estimate.", answerKey: "Award marks: a clear repeatable experiment (drop the tack a fixed large number of times, record point up / point down), 6 marks; a frequency table with outcome, frequency and relative frequency columns, 6 marks; correct computation of relative frequency = point-up count / total drops as the probability estimate, 7 marks; discussion that more trials give a more reliable estimate (law of large numbers), 6 marks.", marks: 25 },
      ],
    },
    {
      // source: Mutually Exclusive Events and the Addition Rule, Statistics
      // LibreTexts (stats.libretexts.org, 11.2); Probability of Intersections,
      // CK-12 (flexbooks.ck12.org, 11.7).
      slug: "union-and-intersection-of-events",
      title: "Compound Events: Union and Intersection",
      objective:
        "By the end of the topic, learners should be able to find the union and intersection of events, use Venn diagrams, apply the addition rule P(A or B) = P(A) + P(B) − P(A and B), and recognise mutually exclusive events.",
      estimatedMinutes: 120,
      notes: `## Compound events

- A **compound event** combines two or more events with **and** / **or**.
- **Union (A ∪ B)** — outcomes in A **or** B **or both** ("A or B").
- **Intersection (A ∩ B)** — outcomes in **both** A **and** B ("A and B").

## The addition rule

**P(A ∪ B) = P(A) + P(B) − P(A ∩ B)**

- We subtract P(A ∩ B) so the shared outcomes are **not counted twice**.

## Mutually exclusive events

- **Mutually exclusive** events **cannot happen together** — their intersection is empty, so P(A ∩ B) = 0.
- For mutually exclusive events the rule simplifies to **P(A ∪ B) = P(A) + P(B)**.
- *Example:* on one die, "roll a 2" and "roll a 5" are mutually exclusive.

## Venn diagrams

- Two overlapping circles inside a rectangle (the sample space).
- The **overlap** is A ∩ B; the whole shaded region of both circles is A ∪ B.

## Common errors to watch for

- **Forgetting to subtract the overlap** — double-counts outcomes in both events.
- **Assuming every pair is mutually exclusive** — only when they cannot occur together is P(A ∩ B) = 0.`,
      workedExample: `**Task.** A card is drawn from 52. Let A = "a heart", B = "a face card (J, Q, K)". Find P(A ∪ B).

**Step 1 — the parts.**
- P(A) = 13/52 (hearts).
- P(B) = 12/52 (3 face cards × 4 suits).
- P(A ∩ B) = 3/52 (heart AND face card: J, Q, K of hearts).

**Step 2 — addition rule.**
P(A ∪ B) = 13/52 + 12/52 − 3/52 = 22/52 = 11/26.

**Why subtract 3/52:** the J, Q, K of hearts are counted once in the 13 hearts and again in the 12 face cards, so they must be removed once.`,
      quiz: [
        { prompt: "The union A ∪ B is the set of outcomes in…", options: ["A or B or both", "both A and B only", "neither A nor B", "A only"], correctIndex: 0, explanation: "Union = 'or' (including both)." },
        { prompt: "The intersection A ∩ B is the set of outcomes in…", options: ["both A and B", "A or B", "A only", "the whole sample space"], correctIndex: 0, explanation: "Intersection = 'and'." },
        { prompt: "The addition rule states P(A ∪ B) =", options: ["P(A) + P(B) − P(A ∩ B)", "P(A) + P(B)", "P(A) × P(B)", "P(A) − P(B)"], correctIndex: 0, explanation: "Subtract the overlap so it is not double-counted." },
        { prompt: "We subtract P(A ∩ B) in the addition rule to avoid…", options: ["counting shared outcomes twice", "negative probabilities", "using Venn diagrams", "large numbers"], correctIndex: 0, explanation: "Overlap outcomes appear in both A and B." },
        { prompt: "Mutually exclusive events have P(A ∩ B) =", options: ["0", "1", "0.5", "P(A) + P(B)"], correctIndex: 0, explanation: "They cannot occur together." },
        { prompt: "For mutually exclusive events, P(A ∪ B) =", options: ["P(A) + P(B)", "P(A) + P(B) − 1", "P(A) × P(B)", "0"], correctIndex: 0, explanation: "With no overlap the subtraction term is 0." },
        { prompt: "On one die, 'roll a 2' and 'roll a 5' are…", options: ["mutually exclusive", "independent but overlapping", "the same event", "certain"], correctIndex: 0, explanation: "You cannot roll a 2 and a 5 at once." },
        { prompt: "In a Venn diagram, the overlap of two circles represents…", options: ["A ∩ B", "A ∪ B", "the sample space", "the complement"], correctIndex: 0, explanation: "The overlap is 'both'." },
        { prompt: "If P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.2, then P(A ∪ B) =", options: ["0.7", "0.9", "0.1", "1.1"], correctIndex: 0, explanation: "0.5 + 0.4 − 0.2 = 0.7." },
        { prompt: "'A or B' in probability means the…", options: ["union", "intersection", "complement", "sample space"], correctIndex: 0, explanation: "'Or' corresponds to union." },
        { prompt: "'A and B' in probability means the…", options: ["intersection", "union", "complement", "odds"], correctIndex: 0, explanation: "'And' corresponds to intersection." },
        { prompt: "If two events are mutually exclusive and P(A)=0.3, P(B)=0.45, then P(A ∪ B) =", options: ["0.75", "0.135", "0.15", "1.0"], correctIndex: 0, explanation: "0.3 + 0.45 = 0.75 (no overlap)." },
        { prompt: "Drawing a card: P(heart) = 13/52, P(king) = 4/52, P(king of hearts) = 1/52. P(heart or king) =", options: ["16/52", "17/52", "13/52", "4/52"], correctIndex: 0, explanation: "13/52 + 4/52 − 1/52 = 16/52." },
        { prompt: "If A ∩ B is empty, the events are…", options: ["mutually exclusive", "independent", "complementary only", "certain"], correctIndex: 0, explanation: "No common outcomes = mutually exclusive." },
        { prompt: "The rectangle around the circles in a Venn diagram represents…", options: ["the sample space", "the intersection", "an impossible event", "the odds"], correctIndex: 0, explanation: "The rectangle is all possible outcomes." },
        { prompt: "P(A) = 0.6, P(B) = 0.5, P(A ∪ B) = 0.9. Then P(A ∩ B) =", options: ["0.2", "0.1", "0.3", "1.1"], correctIndex: 0, explanation: "0.6 + 0.5 − 0.9 = 0.2." },
        { prompt: "Which pair is NOT mutually exclusive when rolling a die?", options: ["'even' and 'greater than 3'", "'roll 1' and 'roll 6'", "'roll 2' and 'roll 5'", "'roll 3' and 'roll 4'"], correctIndex: 0, explanation: "4 and 6 are both even and >3, so they overlap." },
        { prompt: "A compound event joins events using…", options: ["'and' or 'or'", "'not' only", "equals", "division"], correctIndex: 0, explanation: "Compound events combine with and/or." },
        { prompt: "For any two events, P(A ∪ B) is at most…", options: ["1", "2", "P(A)×P(B)", "0.5"], correctIndex: 0, explanation: "A probability cannot exceed 1." },
        { prompt: "If P(A)=0.4, P(B)=0.3 and they are mutually exclusive, P(A ∩ B) =", options: ["0", "0.12", "0.7", "0.1"], correctIndex: 0, explanation: "Mutually exclusive means the intersection is 0." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the addition rule for probability and explain why the intersection term is subtracted.", answerKey: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B). The intersection P(A ∩ B) is subtracted because outcomes in both A and B are counted once in P(A) and again in P(B), so subtracting removes the double count. Award 3 marks for the rule and 3 for the explanation.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "P(A) = 0.45, P(B) = 0.35, P(A ∩ B) = 0.15. Find P(A ∪ B).", options: ["0.65", "0.80", "0.95", "0.15"], correctIndex: 0, answerKey: "0.45 + 0.35 − 0.15 = 0.65.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Define mutually exclusive events and give one example using a single die. State the addition rule for such events.", answerKey: "Mutually exclusive events cannot occur at the same time, so P(A ∩ B) = 0. Example: 'rolling a 2' and 'rolling a 5' on one die. For mutually exclusive events P(A ∪ B) = P(A) + P(B). Award 2 marks for the definition, 2 for the example, 2 for the rule.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "A card is drawn from 52. Find P(a club or a queen). Show the union calculation.", answerKey: "P(club) = 13/52, P(queen) = 4/52, P(queen of clubs) = 1/52. P(club or queen) = 13/52 + 4/52 − 1/52 = 16/52 = 4/13. Award marks for the three probabilities and the correct addition-rule use.", marks: 6 },
        { type: "ESSAY", prompt: "In a class of 30, 18 study Biology, 15 study Chemistry, and 9 study both. Draw (describe) a Venn diagram, and find the probability that a randomly chosen student studies (a) Biology or Chemistry, (b) neither. Explain each step.", answerKey: "Award marks: a Venn diagram with both-region 9, Biology-only 9, Chemistry-only 6, and neither 30−(9+9+6)=6, 7 marks; (a) P(Bio or Chem) = (18+15−9)/30 = 24/30 = 4/5, 6 marks; (b) P(neither) = 6/30 = 1/5, 6 marks; clear reasoning and notation, 6 marks.", marks: 25 },
      ],
    },
    {
      // source: Independent Events, Statistics LibreTexts (stats.libretexts.org,
      // 3.5); Multiplication Rule for Independent Events (stats.libretexts.org, 3.3).
      slug: "independent-events",
      title: "Independent Events and Tree Diagrams",
      objective:
        "By the end of the topic, learners should be able to define independent events, apply the multiplication rule P(A and B) = P(A) × P(B) for independent events, and use tree diagrams to find probabilities of successive events.",
      estimatedMinutes: 120,
      notes: `## Independent events

- Two events are **independent** if the occurrence of one **does not affect** the probability of the other.
- *Examples:* tossing a coin twice; rolling a die and drawing a card.
- **Dependent** events do affect each other (e.g. drawing two cards **without replacement**).

## The multiplication rule (independent events)

**P(A and B) = P(A) × P(B)**  (for independent A and B)

- Extends to more events: P(A and B and C) = P(A) × P(B) × P(C).
- "Independent" and "mutually exclusive" are **not** the same thing.

## Tree diagrams

- A **tree diagram** shows successive events as branches, each branch marked with its probability.
- **Multiply along the branches** to get the probability of a path.
- **Add** the probabilities of the different paths that give the required event.

## Common errors to watch for

- **Adding instead of multiplying** for "and" of independent events — multiply along branches.
- **Treating without-replacement draws as independent** — the second probability changes, so they are dependent.
- **Confusing independent with mutually exclusive** — mutually exclusive events with non-zero probability are actually dependent.`,
      workedExample: `**Task.** A fair coin is tossed and a fair die is rolled. Find P(head and a 6).

**Step 1 — check independence.** The coin and die do not affect each other → independent.

**Step 2 — the parts.** P(head) = 1/2, P(6) = 1/6.

**Step 3 — multiplication rule.** P(head and 6) = 1/2 × 1/6 = 1/12.

**Tree-diagram view:** from the "head" branch (prob 1/2) follow the "6" branch (prob 1/6); multiplying along the path gives 1/12.`,
      quiz: [
        { prompt: "Two events are independent if…", options: ["one occurring does not affect the other", "they cannot happen together", "they always happen together", "their probabilities are equal"], correctIndex: 0, explanation: "Independence means no effect on each other's probability." },
        { prompt: "For independent events, P(A and B) =", options: ["P(A) × P(B)", "P(A) + P(B)", "P(A) − P(B)", "P(A) / P(B)"], correctIndex: 0, explanation: "Multiply for independent 'and'." },
        { prompt: "Tossing a coin twice, P(head then head) =", options: ["1/4", "1/2", "1", "1/3"], correctIndex: 0, explanation: "1/2 × 1/2 = 1/4." },
        { prompt: "In a tree diagram you find a path's probability by…", options: ["multiplying along the branches", "adding the branches", "subtracting branches", "dividing branches"], correctIndex: 0, explanation: "Multiply probabilities along a path." },
        { prompt: "Drawing two cards WITHOUT replacement gives events that are…", options: ["dependent", "independent", "mutually exclusive", "impossible"], correctIndex: 0, explanation: "The first draw changes the second probability." },
        { prompt: "Roll a die and toss a coin: P(4 and tail) =", options: ["1/12", "1/8", "1/2", "1/6"], correctIndex: 0, explanation: "1/6 × 1/2 = 1/12." },
        { prompt: "Independent and mutually exclusive events are…", options: ["not the same thing", "always the same", "both impossible", "always certain"], correctIndex: 0, explanation: "They are different ideas." },
        { prompt: "P(A) = 0.3 and P(B) = 0.5 are independent. P(A and B) =", options: ["0.15", "0.8", "0.2", "0.6"], correctIndex: 0, explanation: "0.3 × 0.5 = 0.15." },
        { prompt: "To find the probability of a required outcome across several tree paths, you…", options: ["add the path probabilities", "multiply the path probabilities", "subtract them", "take the largest"], correctIndex: 0, explanation: "Add across separate paths." },
        { prompt: "Three coins tossed: P(all heads) =", options: ["1/8", "1/6", "1/4", "3/8"], correctIndex: 0, explanation: "1/2 × 1/2 × 1/2 = 1/8." },
        { prompt: "Which pair is independent?", options: ["toss a coin, roll a die", "draw 2 cards without replacing", "pick 2 names from a hat without replacing", "remove 2 balls from a bag one after another (no replacement)"], correctIndex: 0, explanation: "Coin and die do not affect each other." },
        { prompt: "A spinner (P(red)=1/3) is spun twice. P(red then red) =", options: ["1/9", "2/3", "1/3", "1/6"], correctIndex: 0, explanation: "1/3 × 1/3 = 1/9." },
        { prompt: "If P(rain)=0.4 both days and days are independent, P(rain on both days) =", options: ["0.16", "0.8", "0.4", "0.04"], correctIndex: 0, explanation: "0.4 × 0.4 = 0.16." },
        { prompt: "For independent events, learning that B happened…", options: ["does not change P(A)", "makes A certain", "makes A impossible", "doubles P(A)"], correctIndex: 0, explanation: "Independence means P(A) is unchanged." },
        { prompt: "P(A)=0.5, P(B)=0.2, independent. P(A and B) =", options: ["0.1", "0.7", "0.3", "0.25"], correctIndex: 0, explanation: "0.5 × 0.2 = 0.1." },
        { prompt: "Tossing a coin and it landing heads twice in a row has probability…", options: ["1/4", "1/2", "1", "1/8"], correctIndex: 0, explanation: "Two independent 1/2 events: 1/4." },
        { prompt: "A bag: P(red)=0.6. Two draws WITH replacement. P(red then red) =", options: ["0.36", "0.6", "1.2", "0.3"], correctIndex: 0, explanation: "With replacement they are independent: 0.6 × 0.6 = 0.36." },
        { prompt: "The branches leaving any single point of a tree diagram have probabilities that add to…", options: ["1", "0", "the number of branches", "0.5"], correctIndex: 0, explanation: "They cover all possibilities from that point." },
        { prompt: "P(pass Maths)=0.8 and P(pass English)=0.7 independently. P(pass both) =", options: ["0.56", "1.5", "0.75", "0.1"], correctIndex: 0, explanation: "0.8 × 0.7 = 0.56." },
        { prompt: "Rolling two dice, P(6 on both) =", options: ["1/36", "1/12", "1/6", "2/6"], correctIndex: 0, explanation: "1/6 × 1/6 = 1/36." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define independent events and state the multiplication rule for them. Give one example of independent events and one of dependent events.", answerKey: "Independent events: the occurrence of one does not affect the probability of the other; P(A and B) = P(A) × P(B). Example of independent: tossing a coin and rolling a die. Example of dependent: drawing two cards without replacement. Award 2 for definition, 2 for the rule, 1 each for the examples.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "A coin is tossed and a die rolled. What is P(tail and an even number)?", options: ["1/4", "1/2", "1/12", "1/6"], correctIndex: 0, answerKey: "P(tail) = 1/2, P(even) = 3/6 = 1/2; independent, so 1/2 × 1/2 = 1/4.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "P(a machine part is faulty) = 0.02. Two parts are chosen independently. Find the probability that both are faulty and that neither is faulty.", answerKey: "Both faulty: 0.02 × 0.02 = 0.0004. Neither faulty: P(good) = 0.98, so 0.98 × 0.98 = 0.9604. Award 3 marks each for the two correct products.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between independent events and mutually exclusive events.", answerKey: "Independent events do not affect each other's probability and can occur together, with P(A and B) = P(A)×P(B). Mutually exclusive events cannot occur together, so P(A and B) = 0. Two events with non-zero probabilities cannot be both independent and mutually exclusive. Award marks for contrasting 'can occur together / multiply' with 'cannot occur together / intersection zero'.", marks: 6 },
        { type: "ESSAY", prompt: "A bag has 3 red and 2 blue balls. A ball is drawn, its colour noted, and it is REPLACED; then a second ball is drawn. Draw (describe) a tree diagram and find the probability of (a) two reds, (b) one of each colour. Explain why the draws are independent and how you combine branches.", answerKey: "Award marks: statement that with replacement the draws are independent with P(red)=3/5, P(blue)=2/5 on each draw, 5 marks; a tree diagram showing both draws with correct branch probabilities, 6 marks; (a) P(RR) = 3/5 × 3/5 = 9/25, 4 marks; (b) one of each = P(RB)+P(BR) = 3/5×2/5 + 2/5×3/5 = 12/25, 6 marks; explanation of multiplying along branches and adding paths, 4 marks.", marks: 25 },
      ],
    },
  ],
};
