import type { PeriodContent } from "@/content/types";

// Grade 11, Semester Two, Period IV of the MoE Mathematics syllabus:
// Mensuration (circle as a locus, circle theorems, tangents and alternate
// segment; perimeter and area of plane shapes; arcs and sectors). Notes
// rebuilt from published sources (GeeksforGeeks).
export const mathematicsG11P4: PeriodContent = {
  grade: 11,
  number: 4,
  title: "Mensuration",
  summary:
    "Period IV of the MoE Grade 11 Mathematics syllabus. Learners treat the circle as a locus and apply circle theorems, tangents and the alternate-segment theorem; calculate the perimeter and area of rectangles, squares, parallelograms and triangles; and find arc lengths and sector areas.",
  topics: [
    // source: GeeksforGeeks — Circle Theorems (https://www.geeksforgeeks.org/maths/circle-theorems/)
    {
      slug: "circle-geometry",
      title: "The Circle, Circle Theorems and Tangents",
      objective:
        "By the end of the topic, learners should be able to describe a circle as a locus, name its parts, apply the main circle theorems, and use tangent properties including the alternate-segment theorem.",
      estimatedMinutes: 130,
      notes: `## The circle as a locus

- A **locus** is the set of all points that satisfy a condition.
- A **circle** is the locus of all points at a fixed distance (the **radius**) from a fixed point (the **centre**).

## Parts of a circle

- **Radius** — centre to the edge; **diameter** — across through the centre (= 2 × radius).
- **Chord** — a line joining two points on the circle; **arc** — part of the circumference.
- **Tangent** — a line touching the circle at exactly one point; **segment** — region cut off by a chord.

## Circle theorems

1. **Angle at the centre** = twice the angle at the circumference on the same arc.
2. **Angle in a semicircle** = 90° (the angle subtended by a diameter).
3. **Angles in the same segment** are equal.
4. **Cyclic quadrilateral**: opposite angles add to 180°.
5. A line from the centre that **bisects a chord is perpendicular** to the chord.

| Theorem | Statement |
| --- | --- |
| Centre / circumference | centre angle = 2 × circumference angle |
| Semicircle | angle in a semicircle = 90° |
| Same segment | angles in the same segment are equal |
| Cyclic quadrilateral | opposite angles sum to 180° |

## Tangent properties

- A **tangent is perpendicular to the radius** at the point of contact (angle = 90°).
- **Two tangents from an external point are equal** in length.
- **Alternate-segment theorem:** the angle between a tangent and a chord equals the angle in the alternate segment.

\`\`\`svg Angle at centre is twice the angle at the circumference
<svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg">
  <circle cx="90" cy="85" r="60" fill="none" stroke="#555" stroke-width="1.5"/>
  <circle cx="90" cy="85" r="2.5" fill="#333"/>
  <line x1="40" y1="120" x2="90" y2="85" stroke="#1d4ed8" stroke-width="1.5"/>
  <line x1="140" y1="120" x2="90" y2="85" stroke="#1d4ed8" stroke-width="1.5"/>
  <line x1="40" y1="120" x2="90" y2="25" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="140" y1="120" x2="90" y2="25" stroke="#dc2626" stroke-width="1.5"/>
  <text x="80" y="80" font-size="9" fill="#1d4ed8">2θ</text>
  <text x="82" y="40" font-size="9" fill="#dc2626">θ</text>
</svg>
\`\`\`

## Common errors

- **Doubling the wrong angle** — the centre angle is the larger (twice) one.
- **Forgetting the semicircle right angle** when a diameter is drawn.
- **Not using perpendicularity of tangent and radius** in tangent problems.`,
      workedExample: `**Question:** In a circle with centre O, the angle AOC at the centre subtended by arc AC is 60°. Find the angle ABC at the circumference on the same arc.

**Solution**

*Step 1 — identify the theorem.* The angle at the centre is twice the angle at the circumference on the same arc.

*Step 2 — write the relationship.*
∠AOC = 2 × ∠ABC

*Step 3 — substitute and solve.*
60° = 2 × ∠ABC
∠ABC = 60° ÷ 2 = 30°

**Answer: ∠ABC = 30°**`,
      quiz: [
        { prompt: "A circle is the locus of points that are", options: ["on a straight line", "a fixed distance from a point", "inside a square", "equal in area"], correctIndex: 1, explanation: "All points at the radius from the centre." },
        { prompt: "The diameter equals", options: ["half the radius", "twice the radius", "the radius", "π times the radius"], correctIndex: 1, explanation: "Diameter = 2 × radius." },
        { prompt: "The angle at the centre is ___ the angle at the circumference on the same arc.", options: ["equal to", "half", "twice", "three times"], correctIndex: 2, explanation: "Centre angle = 2 × circumference angle." },
        { prompt: "If the centre angle is 60°, the circumference angle is", options: ["120°", "30°", "60°", "90°"], correctIndex: 1, explanation: "60 ÷ 2 = 30°." },
        { prompt: "The angle in a semicircle is", options: ["45°", "60°", "90°", "180°"], correctIndex: 2, explanation: "An angle subtended by a diameter is 90°." },
        { prompt: "Angles in the same segment are", options: ["supplementary", "equal", "complementary", "right angles"], correctIndex: 1, explanation: "They subtend the same arc." },
        { prompt: "Opposite angles of a cyclic quadrilateral add to", options: ["90°", "180°", "270°", "360°"], correctIndex: 1, explanation: "They are supplementary." },
        { prompt: "A tangent meets the radius at the point of contact at", options: ["45°", "60°", "90°", "0°"], correctIndex: 2, explanation: "Tangent ⊥ radius." },
        { prompt: "Two tangents drawn from the same external point are", options: ["perpendicular", "equal in length", "parallel", "diameters"], correctIndex: 1, explanation: "Tangents from a point are equal." },
        { prompt: "A tangent touches a circle at how many points?", options: ["0", "1", "2", "infinitely many"], correctIndex: 1, explanation: "Exactly one point of contact." },
        { prompt: "A line from the centre bisecting a chord is", options: ["parallel to it", "perpendicular to it", "a tangent", "equal to it"], correctIndex: 1, explanation: "It meets the chord at 90°." },
        { prompt: "The alternate-segment theorem relates a tangent and a chord to", options: ["the radius", "the angle in the alternate segment", "the diameter", "the centre angle"], correctIndex: 1, explanation: "The tangent-chord angle equals that angle." },
        { prompt: "If a cyclic quadrilateral has one angle 70°, its opposite angle is", options: ["70°", "110°", "20°", "290°"], correctIndex: 1, explanation: "180 − 70 = 110°." },
        { prompt: "The longest chord in a circle is the", options: ["radius", "tangent", "diameter", "arc"], correctIndex: 2, explanation: "The diameter passes through the centre." },
        { prompt: "If the circumference angle is 40°, the centre angle on the same arc is", options: ["20°", "40°", "80°", "140°"], correctIndex: 2, explanation: "2 × 40 = 80°." },
        { prompt: "An arc is", options: ["a straight chord", "part of the circumference", "the centre", "a tangent"], correctIndex: 1, explanation: "Arc = part of the boundary." },
        { prompt: "A triangle inscribed in a semicircle with the diameter as one side has a right angle", options: ["at the centre", "opposite the diameter", "at both ends of the diameter", "nowhere"], correctIndex: 1, explanation: "The angle in the semicircle is 90°." },
        { prompt: "The angle between a tangent and the radius at contact is called", options: ["acute", "a right angle", "obtuse", "reflex"], correctIndex: 1, explanation: "It is exactly 90°." },
        { prompt: "Two tangents from a point 10 cm long: the other tangent is", options: ["5 cm", "10 cm", "20 cm", "cannot tell"], correctIndex: 1, explanation: "Tangents from a point are equal, so 10 cm." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "The angle subtended by an arc at the centre of a circle is 100°. Find the angle it subtends at the circumference on the same arc.", answerKey: "Angle at circumference = ½ × angle at centre = ½ × 100° = 50°. Award 3 marks for the theorem, 3 for 50°.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "PQRS is a cyclic quadrilateral with angle P = 85° and angle Q = 100°. Find angles R and S.", answerKey: "Opposite angles sum to 180°: R = 180 − 85 = 95°; S = 180 − 100 = 80°. Award 3 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "A triangle is drawn in a semicircle with the diameter as one side. The angle opposite the diameter is", options: ["45°", "60°", "90°", "180°"], correctIndex: 2, answerKey: "The angle in a semicircle is 90°. Option C.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A tangent touches a circle at T, and OT is the radius. Explain the size of angle OTP where P is a point on the tangent, and state the length relationship for two tangents from an external point.", answerKey: "The tangent is perpendicular to the radius at the point of contact, so angle OTP = 90°. Two tangents drawn from the same external point to a circle are equal in length. Award 3 marks for the 90° with reason, 3 for the equal-tangents property.", marks: 6 },
        { type: "ESSAY", prompt: "State four circle theorems and describe the circle as a locus, then use the centre/circumference theorem to find the circumference angle when the centre angle is 130°.", answerKey: "A circle is the locus of all points a fixed distance (radius) from a fixed point (centre). Four theorems: (1) the angle at the centre is twice the angle at the circumference on the same arc; (2) the angle in a semicircle is 90°; (3) angles in the same segment are equal; (4) opposite angles of a cyclic quadrilateral sum to 180°. Applying (1): circumference angle = ½ × 130° = 65°. Award 2 marks for the locus, 2 marks each for two theorems used (4 total), 2 for 65°.", marks: 10 },
      ],
    },
    // source: GeeksforGeeks — Area of 2D Shapes (https://www.geeksforgeeks.org/maths/area-of-2d-shapes/)
    {
      slug: "perimeter-and-area",
      title: "Perimeter and Area of Plane Shapes",
      objective:
        "By the end of the topic, learners should be able to calculate the perimeter and area of rectangles, squares, parallelograms and triangles.",
      estimatedMinutes: 110,
      notes: `## Perimeter and area

- **Perimeter** is the total distance around a shape (add all the side lengths); measured in units (cm, m).
- **Area** is the amount of surface a shape covers; measured in **square units** (cm², m²).

## Formulas

| Shape | Perimeter | Area |
| --- | --- | --- |
| Rectangle | 2(l + b) | l × b |
| Square | 4s | s² |
| Parallelogram | 2(a + b) | b × h |
| Triangle | a + b + c | ½ × b × h |

- **Rectangle:** length l, breadth b.
- **Square:** all sides s.
- **Parallelogram:** base b and **perpendicular** height h (not the slanted side).
- **Triangle:** base b and **perpendicular** height h.

## Worked relationships

- Rectangle 16 cm by 11 cm: area = 16 × 11 = 176 cm²; perimeter = 2(16 + 11) = 54 cm.
- Square of side 7 cm: area = 7² = 49 cm²; perimeter = 4 × 7 = 28 cm.
- Triangle base 10 cm, height 6 cm: area = ½ × 10 × 6 = 30 cm².

## Common errors

- **Using the slant side of a parallelogram as height** — use the perpendicular height.
- **Forgetting to halve for a triangle** — area = ½bh.
- **Giving area in plain units** — area is always in square units.`,
      workedExample: `**Question:** A parallelogram has base 12 cm and perpendicular height 5 cm, with slanting sides of 6 cm. Find its area and perimeter.

**Solution**

*Step 1 — area = base × perpendicular height.*
Area = 12 × 5 = 60 cm²

*Step 2 — perimeter = 2(a + b), where the two side lengths are 12 cm and 6 cm.*
Perimeter = 2(12 + 6) = 2 × 18 = 36 cm

*Note:* the 6 cm slant side, not the 5 cm height, is used for the perimeter; the 5 cm height is used for the area.

**Answer: area = 60 cm², perimeter = 36 cm**`,
      quiz: [
        { prompt: "Perimeter is measured in", options: ["square units", "units", "cubic units", "degrees"], correctIndex: 1, explanation: "It is a length." },
        { prompt: "Area is measured in", options: ["units", "square units", "cubic units", "radians"], correctIndex: 1, explanation: "e.g. cm²." },
        { prompt: "The area of a rectangle is", options: ["l + b", "2(l + b)", "l × b", "½lb"], correctIndex: 2, explanation: "Length times breadth." },
        { prompt: "The perimeter of a rectangle is", options: ["l × b", "2(l + b)", "4l", "l + b"], correctIndex: 1, explanation: "Add all four sides." },
        { prompt: "The area of a square of side s is", options: ["4s", "s²", "2s", "s³"], correctIndex: 1, explanation: "s × s." },
        { prompt: "The perimeter of a square of side s is", options: ["s²", "2s", "4s", "s"], correctIndex: 2, explanation: "Four equal sides." },
        { prompt: "The area of a triangle is", options: ["b × h", "½ × b × h", "a + b + c", "2bh"], correctIndex: 1, explanation: "Half base times height." },
        { prompt: "The area of a parallelogram is", options: ["½bh", "b × h", "2(a + b)", "a × b × c"], correctIndex: 1, explanation: "Base times perpendicular height." },
        { prompt: "A rectangle 16 cm by 11 cm has area", options: ["27 cm²", "54 cm²", "176 cm²", "160 cm²"], correctIndex: 2, explanation: "16 × 11 = 176 cm²." },
        { prompt: "A rectangle 16 cm by 11 cm has perimeter", options: ["176 cm", "54 cm", "27 cm", "48 cm"], correctIndex: 1, explanation: "2(16 + 11) = 54 cm." },
        { prompt: "A square of side 7 cm has area", options: ["14 cm²", "28 cm²", "49 cm²", "21 cm²"], correctIndex: 2, explanation: "7² = 49 cm²." },
        { prompt: "A square of side 7 cm has perimeter", options: ["49 cm", "14 cm", "28 cm", "21 cm"], correctIndex: 2, explanation: "4 × 7 = 28 cm." },
        { prompt: "A triangle base 10 cm, height 6 cm has area", options: ["60 cm²", "30 cm²", "16 cm²", "80 cm²"], correctIndex: 1, explanation: "½ × 10 × 6 = 30 cm²." },
        { prompt: "For a parallelogram, the height used in area is the", options: ["slant side", "perpendicular height", "base", "diagonal"], correctIndex: 1, explanation: "Perpendicular height, not slant." },
        { prompt: "A rectangle has area 48 cm² and length 8 cm. Its breadth is", options: ["6 cm", "40 cm", "24 cm", "16 cm"], correctIndex: 0, explanation: "48 ÷ 8 = 6 cm." },
        { prompt: "A triangle with base 12 and area 30 has height", options: ["2.5", "5", "18", "60"], correctIndex: 1, explanation: "30 = ½ × 12 × h → h = 5." },
        { prompt: "A parallelogram base 9 cm, height 4 cm has area", options: ["13 cm²", "36 cm²", "18 cm²", "26 cm²"], correctIndex: 1, explanation: "9 × 4 = 36 cm²." },
        { prompt: "A square has perimeter 20 cm. Its area is", options: ["25 cm²", "20 cm²", "16 cm²", "100 cm²"], correctIndex: 0, explanation: "Side = 5, area = 25 cm²." },
        { prompt: "The area of a triangle 8 cm base and 8 cm height is", options: ["64 cm²", "32 cm²", "16 cm²", "24 cm²"], correctIndex: 1, explanation: "½ × 8 × 8 = 32 cm²." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "A rectangle measures 15 cm by 9 cm. Find its area and perimeter.", answerKey: "Area = 15 × 9 = 135 cm². Perimeter = 2(15 + 9) = 2 × 24 = 48 cm. Award 3 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "A triangle has base 14 cm and perpendicular height 9 cm. Find its area.", answerKey: "Area = ½ × 14 × 9 = ½ × 126 = 63 cm². Award 3 marks for the formula and substitution, 3 for 63 cm².", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "A parallelogram has base 10 cm and perpendicular height 6 cm. Its area is", options: ["16 cm²", "30 cm²", "60 cm²", "120 cm²"], correctIndex: 2, answerKey: "Area = base × height = 10 × 6 = 60 cm². Option C.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A square field has area 144 m². Find the length of one side and the perimeter.", answerKey: "Side = √144 = 12 m. Perimeter = 4 × 12 = 48 m. Award 3 marks for the side, 3 for the perimeter.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the difference between perimeter and area, give the perimeter and area formulas for a rectangle and a triangle, and calculate both for a rectangle 20 cm by 8 cm and a triangle of base 20 cm and height 8 cm.", answerKey: "Perimeter is the distance around a shape (a length, in units); area is the surface it covers (in square units). Rectangle: perimeter 2(l + b), area l × b. Triangle: perimeter a + b + c, area ½bh. Rectangle 20 by 8: area = 160 cm², perimeter = 2(28) = 56 cm. Triangle base 20, height 8: area = ½ × 20 × 8 = 80 cm² (perimeter needs all three sides, which are not all given). Award 3 marks for the distinction, 3 for the formulas, 2 for the rectangle values, 2 for the triangle area.", marks: 10 },
      ],
    },
    // source: GeeksforGeeks — Sector of a Circle (https://www.geeksforgeeks.org/maths/sector-of-a-circle/)
    {
      slug: "arcs-and-sectors",
      title: "Arcs and Sectors",
      objective:
        "By the end of the topic, learners should be able to calculate the circumference and area of a circle, and the arc length and area of a sector for a given central angle.",
      estimatedMinutes: 110,
      notes: `## The whole circle

- **Circumference** (distance around) = 2πr, where r is the radius.
- **Area** of a circle = πr².
- Use π ≈ 3.142 or 22/7.

## Sectors and arcs

- A **sector** is a "slice" of a circle bounded by two radii and an arc.
- A sector for central angle θ is the fraction θ/360 of the whole circle.

| Quantity | Formula |
| --- | --- |
| Arc length | (θ/360) × 2πr |
| Sector area | (θ/360) × πr² |

- **Arc length** is the fraction θ/360 of the circumference.
- **Sector area** is the fraction θ/360 of the circle's area.

Example (r = 7 cm, θ = 90°, π = 22/7):
- Arc length = (90/360) × 2 × (22/7) × 7 = ¼ × 44 = 11 cm.
- Sector area = (90/360) × (22/7) × 7² = ¼ × 154 = 38.5 cm².

## Special fractions

- θ = 90° is a **quarter** circle (¼); θ = 180° is a **semicircle** (½); θ = 360° is the whole circle.

## Common errors

- **Using r instead of 2r (diameter) or vice versa** — the formulas use the radius r.
- **Forgetting the θ/360 fraction** — a sector is only part of the circle.
- **Mixing up arc length (uses 2πr) and sector area (uses πr²).**`,
      workedExample: `**Question:** A sector has radius 7 cm and central angle 90°. Using π = 22/7, find the arc length and the sector area.

**Solution**

*Step 1 — the fraction of the circle.*
θ/360 = 90/360 = ¼

*Step 2 — arc length = (θ/360) × 2πr.*
= ¼ × 2 × (22/7) × 7 = ¼ × 2 × 22 = ¼ × 44 = 11 cm

*Step 3 — sector area = (θ/360) × πr².*
= ¼ × (22/7) × 7² = ¼ × (22/7) × 49 = ¼ × 154 = 38.5 cm²

**Answer: arc length = 11 cm, sector area = 38.5 cm²**`,
      quiz: [
        { prompt: "The circumference of a circle is", options: ["πr²", "2πr", "πr", "πd²"], correctIndex: 1, explanation: "2πr (or πd)." },
        { prompt: "The area of a circle is", options: ["2πr", "πr²", "πr", "πd"], correctIndex: 1, explanation: "πr²." },
        { prompt: "A sector is bounded by two radii and", options: ["a chord", "an arc", "a tangent", "a diameter"], correctIndex: 1, explanation: "A slice with an arc edge." },
        { prompt: "The arc length of a sector is", options: ["(θ/360) × πr²", "(θ/360) × 2πr", "2πr", "θ × r"], correctIndex: 1, explanation: "A fraction of the circumference." },
        { prompt: "The area of a sector is", options: ["(θ/360) × 2πr", "(θ/360) × πr²", "πr²", "½r²"], correctIndex: 1, explanation: "A fraction of the circle's area." },
        { prompt: "A sector of angle 90° is what fraction of the circle?", options: ["1/2", "1/3", "1/4", "1/6"], correctIndex: 2, explanation: "90/360 = 1/4." },
        { prompt: "With r = 7, π = 22/7, the circumference is", options: ["22 cm", "44 cm", "154 cm", "14 cm"], correctIndex: 1, explanation: "2 × 22/7 × 7 = 44 cm." },
        { prompt: "With r = 7, π = 22/7, the circle's area is", options: ["44 cm²", "154 cm²", "49 cm²", "22 cm²"], correctIndex: 1, explanation: "22/7 × 49 = 154 cm²." },
        { prompt: "Arc length of a 90° sector, r = 7 (π = 22/7):", options: ["11 cm", "22 cm", "38.5 cm", "44 cm"], correctIndex: 0, explanation: "¼ × 44 = 11 cm." },
        { prompt: "Area of a 90° sector, r = 7 (π = 22/7):", options: ["11 cm²", "38.5 cm²", "154 cm²", "77 cm²"], correctIndex: 1, explanation: "¼ × 154 = 38.5 cm²." },
        { prompt: "A semicircle corresponds to θ =", options: ["90°", "180°", "270°", "360°"], correctIndex: 1, explanation: "Half a circle." },
        { prompt: "The formulas for arc and sector both use the", options: ["diameter", "radius", "chord", "tangent"], correctIndex: 1, explanation: "They use r." },
        { prompt: "A 180° sector is what fraction of the circle?", options: ["1/2", "1/3", "1/4", "2/3"], correctIndex: 0, explanation: "180/360 = 1/2." },
        { prompt: "Arc length uses which part of the circle formulas?", options: ["πr²", "2πr", "4s", "½bh"], correctIndex: 1, explanation: "It is part of the circumference 2πr." },
        { prompt: "The area of a full circle radius 10 cm (π ≈ 3.14) is", options: ["31.4 cm²", "62.8 cm²", "314 cm²", "100 cm²"], correctIndex: 2, explanation: "3.14 × 100 = 314 cm²." },
        { prompt: "A quarter-circle sector of radius 4 cm has area (π ≈ 3.14)", options: ["12.56 cm²", "3.14 cm²", "50.24 cm²", "6.28 cm²"], correctIndex: 0, explanation: "¼ × 3.14 × 16 = 12.56 cm²." },
        { prompt: "If θ = 360°, the sector area equals", options: ["half the circle", "the whole circle area", "zero", "the arc length"], correctIndex: 1, explanation: "360/360 = 1, the whole circle." },
        { prompt: "The circumference of a circle diameter 14 cm (π = 22/7) is", options: ["22 cm", "44 cm", "88 cm", "14 cm"], correctIndex: 1, explanation: "π × d = 22/7 × 14 = 44 cm." },
        { prompt: "A 60° sector is what fraction of the circle?", options: ["1/6", "1/3", "1/4", "1/2"], correctIndex: 0, explanation: "60/360 = 1/6." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "A circle has radius 14 cm. Using π = 22/7, find its circumference and area.", answerKey: "Circumference = 2πr = 2 × 22/7 × 14 = 88 cm. Area = πr² = 22/7 × 196 = 616 cm². Award 3 marks each.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "A sector has radius 6 cm and central angle 60°. Using π ≈ 3.14, find its area.", answerKey: "Area = (60/360) × πr² = (1/6) × 3.14 × 36 = (1/6) × 113.04 = 18.84 cm². Award 2 marks for the fraction, 2 for πr², 2 for 18.84 cm².", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "The arc length of a 90° sector with radius 14 cm (π = 22/7) is", options: ["11 cm", "22 cm", "44 cm", "88 cm"], correctIndex: 1, answerKey: "(90/360) × 2 × 22/7 × 14 = ¼ × 88 = 22 cm. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A sector of a circle of radius 10 cm has a central angle of 72°. Using π ≈ 3.14, find the arc length.", answerKey: "Arc length = (72/360) × 2πr = (1/5) × 2 × 3.14 × 10 = (1/5) × 62.8 = 12.56 cm. Award 2 marks for the fraction 1/5, 2 for the circumference, 2 for 12.56 cm.", marks: 6 },
        { type: "ESSAY", prompt: "Explain what a sector and an arc are, state the formulas for arc length and sector area, and for a sector of radius 7 cm and angle 90° (π = 22/7) compute both, showing the fraction of the circle used.", answerKey: "A sector is a slice of a circle bounded by two radii and an arc; an arc is part of the circumference. Arc length = (θ/360) × 2πr; sector area = (θ/360) × πr². The fraction is 90/360 = ¼. Arc length = ¼ × 2 × 22/7 × 7 = ¼ × 44 = 11 cm. Sector area = ¼ × 22/7 × 49 = ¼ × 154 = 38.5 cm². Award 3 marks for the definitions, 3 for the formulas, 2 for the arc length, 2 for the sector area.", marks: 10 },
      ],
    },
  ],
};
