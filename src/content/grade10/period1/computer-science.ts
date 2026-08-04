import type { SubjectContent } from "@/content/types";

export const computerScience: SubjectContent = {
  slug: "computer-science",
  name: "Computer Science",
  shortName: "Computing",
  description:
    "Computers and ICT, hardware, software and operating systems, and how data is represented.",
  accent: "cyan",
  sortOrder: 12,
  teacherCode: "CSC-10-1024",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "Computer Fundamentals",
      summary:
        "Learners establish what a computer is and how ICT is used, then work through hardware, software and operating systems, finishing with how data is represented inside the machine.",
      topics: [
        {
          slug: "introduction-to-computers",
          title: "Introduction to Computers and ICT",
          objective:
            "By the end of the lesson, learners should be able to define a computer and ICT, describe the information processing cycle, classify computers by size and type, and state the uses and effects of ICT in Liberia.",
          estimatedMinutes: 80,
          notes: `## Introduction

- Computers now shape daily life in Liberia — from mobile money to printed examination results.
- **Data** and **information** are not the same thing; a computer turns one into the other.
- **This topic:** definitions of the computer and ICT; data vs information; the information processing cycle (input → processing → output, supported by storage); classification of computers by type and size; the uses and effects of ICT in Liberia.

## What a computer is

A **computer** is an electronic device that accepts data, processes it according to a set of instructions, produces information as output, and stores the result for future use.

**ICT (Information and Communication Technology)** is the collection of technologies used to create, store, process, transmit and exchange information.

## Data and information

- **Data** — raw, unprocessed facts and figures. *45, 67, 89*
- **Information** — data that has been processed into a meaningful form. *The average test score is 67*

The distinction matters: a computer processes data to produce information. Data alone answers no question.

## The information processing cycle

**Input → Processing → Output**, with **Storage** supporting all three.

1. **Input** — data is entered through an input device
2. **Processing** — the CPU manipulates the data according to instructions
3. **Output** — results are presented in a usable form
4. **Storage** — data and results are retained for later use

## Characteristics of a computer

- **Speed** — operations measured in millions per second
- **Accuracy** — output is exact, provided the input and instructions are correct
- **Automation** — once instructed, it works without further human intervention
- **Storage capacity** — large volumes retained and retrieved rapidly
- **Versatility** — a single machine performs many different tasks
- **Diligence** — no fatigue, no loss of concentration over time
- **No intelligence of its own** — a computer follows instructions and cannot judge whether they are sensible

**GIGO — Garbage In, Garbage Out.** A computer cannot correct faulty data or faulty instructions. If the input is wrong, the output will be wrong, and it will be delivered with complete confidence. This is the single most important limitation to understand.

## Classification by type

- **Analogue computers** — process continuously varying physical quantities such as temperature or pressure. Used in specialised scientific and industrial instruments.
- **Digital computers** — process discrete data represented as digits. Almost all general-purpose computers.
- **Hybrid computers** — combine both, common in medical equipment such as patient monitors.

## Classification by size and capacity

| Type | Description | Typical use |
| --- | --- | --- |
| **Supercomputer** | Fastest and most powerful | Weather forecasting, scientific modelling |
| **Mainframe** | Large, supports many simultaneous users | Banks, government records, census |
| **Minicomputer / midrange** | Medium capacity | Medium-sized organisations |
| **Microcomputer** | Single-user personal computer | Homes, schools, offices |

**Microcomputers** include desktops, laptops, tablets, smartphones and embedded systems.

## Generations of computers

1. **First (1940s-1950s)** — vacuum tubes; very large, hot, unreliable
2. **Second (1950s-1960s)** — transistors; smaller, faster, more reliable
3. **Third (1960s-1970s)** — integrated circuits
4. **Fourth (1970s-present)** — microprocessors; the personal computer
5. **Fifth (present and emerging)** — artificial intelligence, parallel processing, natural language interfaces

## Uses of ICT in Liberia

- **Education** — computer-assisted learning, online resources, record keeping, examination processing
- **Health** — patient records, diagnostic equipment, disease surveillance, which proved significant during the Ebola outbreak
- **Banking and finance** — mobile money, which has extended financial services to areas without bank branches
- **Government** — national identification, civil registration, revenue collection, elections administration
- **Communication** — mobile telephony, internet, social media
- **Business and commerce** — inventory, accounting, advertising, online trading
- **Agriculture** — market price information, weather forecasts, extension advice by mobile phone
- **Media** — radio and television production, online publishing

## Advantages and disadvantages of ICT

**Advantages:** speed and efficiency; accurate storage and retrieval; wider access to information and education; improved communication; new employment opportunities; better service delivery.

**Disadvantages:** unemployment where automation displaces workers; cost of equipment and connectivity; health effects of prolonged use; cybercrime and fraud; loss of privacy; dependence on unreliable electricity; the **digital divide** between those with access and those without, which in Liberia falls heavily along urban-rural lines.

## Common errors and misconceptions

- **Confusing data with information** — **data** is raw, unprocessed facts (45, 67, 89); **information** is data *processed* into a meaningful form ("the average score is 67").
- **Thinking computers are intelligent** — a computer has **no intelligence of its own**; it blindly follows instructions and cannot judge whether they make sense (**GIGO** — garbage in, garbage out).
- **Believing a wrong answer means the computer "made a mistake"** — given faulty input or instructions, the machine produces a *confidently wrong* result; the fault is the data, not the computer.
- **Mixing up the classes of computer** — a **supercomputer** is fastest for scientific modelling; a **mainframe** serves many users at once (banks, census); a **microcomputer** is a single-user PC.`,
          workedExample: `**Question:** A clinic in Grand Gedeh County keeps patient records on paper. The administrator proposes a computerised system. Explain how the information processing cycle would apply, identify the classification of computer required, and assess the advantages and difficulties in this specific setting.

**Solution**

**Part 1 — the information processing cycle applied**

*Input.* A nurse enters patient details — name, age, village, symptoms, temperature, diagnosis — using a keyboard, or a touchscreen on a tablet. The data at this stage is **raw**: individual facts with no meaning beyond themselves.

*Processing.* The computer organises, sorts and calculates. It might count cases of malaria by month, calculate the average age of patients, or flag a patient whose visits exceed a threshold. This step converts **data into information**.

*Output.* Results appear on screen or as a printed report — for example, a monthly summary showing that malaria cases rose 40 per cent after the rains began. This is information, because it answers a question.

*Storage.* Records are retained on the hard disk, with a copy on an external drive, so that a patient returning in six months can be found in seconds rather than by searching a paper file.

**Part 2 — classification required**

A **microcomputer** is appropriate — a desktop or laptop, or several networked.

*Why not larger:* a mainframe supports thousands of simultaneous users and is designed for institutions such as national banks or census bureaus. A single clinic has a handful of staff. A mainframe would be enormously expensive, require specialist administration and consume power the clinic cannot supply.

*Why not smaller:* a smartphone alone would struggle with sustained data entry and reporting.

*Practical recommendation:* laptops rather than desktops, because a laptop's internal battery continues working through the power interruptions that a desktop cannot survive. This is a decision driven by the setting rather than by computing requirements.

**Part 3 — advantages in this setting**

1. **Speed of retrieval.** A returning patient's history is found in seconds. In a paper system with thousands of files, this may take many minutes or fail entirely.
2. **Accuracy and legibility.** Handwritten records are frequently misread; typed records are not.
3. **Space.** Years of records occupy one hard disk rather than a room of cabinets.
4. **Analysis becomes possible.** Disease trends can be detected — a rise in cases from one village might reveal a contaminated water source. This is genuinely new capability, not merely a faster version of what paper did.
5. **Reporting to the Ministry of Health.** Monthly returns can be produced automatically rather than compiled by hand.
6. **Backup.** Paper is destroyed by fire, flood, insects and damp. Digital records can be copied.

**Part 4 — difficulties, which are substantial in this setting**

1. **Electricity.** This is the first and largest obstacle. Grid supply is unreliable or absent in much of rural Liberia. Solar panels with battery storage, or a generator, must be budgeted for — and the power solution may cost more than the computers.
2. **Cost.** Hardware, software, installation, and continuing maintenance and replacement.
3. **Training.** Staff must learn to use the system. An untrained user with a computer is slower than a trained user with paper.
4. **Technical support.** When something fails, who repairs it? A technician may be hundreds of kilometres away, and a broken machine means the clinic reverts to paper with no records for the interval.
5. **Data security and confidentiality.** Medical records are sensitive. The system requires passwords, controlled access, and a policy on who may view what.
6. **Data loss.** A hard disk failure without backup destroys everything at once — worse than losing one paper file. **Regular backup is not optional.**
7. **Internet connectivity**, if the system is to transmit reports, may be limited or costly.
8. **GIGO.** If staff enter data carelessly, the reports will be confidently wrong. A misreported outbreak is more dangerous than no report.

**Part 5 — recommendation**

Computerisation is worthwhile, chiefly because it makes disease-trend analysis possible, which paper cannot do at all. But it should proceed in stages:

- Secure a **reliable power supply first**. Computers without electricity are furniture.
- Begin with **one machine** and a small number of trained staff.
- **Run both systems in parallel** for several months, so that a failure does not lose records.
- Establish a **backup routine** before the system carries real data.
- Expand only once the first stage is working.

**Conclusion:** the cycle applies directly, a microcomputer is the appropriate class, and the advantages are real and include a genuinely new analytical capability. The difficulties are equally real and are dominated by power supply, training and support rather than by the computers themselves — which is characteristic of ICT projects in rural Liberia and is the central practical lesson of the case.`,
          teachingTip:
            "Establish the data-versus-information distinction in the first ten minutes and keep returning to it, because it underlies everything that follows. Write a column of raw test scores on the board and ask what they tell the class; the answer is very little. Then calculate the average, the highest and the pass rate, and ask again. Learners see that processing is what creates meaning, and the definitions then need no memorising. Attack the belief that computers are intelligent, which most learners hold in some form. GIGO is the tool: give the class a deliberately wrong figure to enter in a calculation and let them observe the machine produce a confident, wrong answer without hesitation. A computer that cannot notice an obvious error is a computer they will approach more carefully. Where machines are scarce, teach the concepts with what is available — every learner who has used a mobile phone has used input, processing, output and storage, and building the cycle from a phone costs nothing and works. Keep the Liberian applications concrete, particularly mobile money and health surveillance, since these connect the subject to things learners have seen.",
          quiz: [
            {
              prompt: "A computer is best defined as a device that",
              options: [
                "stores information only",
                "accepts data, processes it, produces information and stores results",
                "connects to the internet",
                "displays pictures",
              ],
              correctIndex: 1,
              explanation:
                "The definition covers the whole information processing cycle including storage.",
            },
            {
              prompt: "Raw, unprocessed facts and figures are called",
              options: ["Information", "Data", "Output", "Programs"],
              correctIndex: 1,
              explanation:
                "Data becomes information only after processing has given it meaning.",
            },
            {
              prompt: "The information processing cycle is",
              options: [
                "Output, processing, input",
                "Input, processing, output",
                "Storage, input, output",
                "Processing, storage, input",
              ],
              correctIndex: 1,
              explanation:
                "Storage supports all three stages of the cycle.",
            },
            {
              prompt: "GIGO stands for",
              options: [
                "Good Input Good Output",
                "Garbage In Garbage Out",
                "General Input General Output",
                "Graphic Input Graphic Output",
              ],
              correctIndex: 1,
              explanation:
                "A computer cannot detect or correct faulty data or instructions.",
            },
            {
              prompt: "Which type of computer is most powerful?",
              options: ["Microcomputer", "Minicomputer", "Mainframe", "Supercomputer"],
              correctIndex: 3,
              explanation:
                "Supercomputers are used for weather forecasting and large-scale scientific modelling.",
            },
            {
              prompt: "A computer that processes continuously varying physical quantities is",
              options: ["Digital", "Analogue", "Hybrid", "Mainframe"],
              correctIndex: 1,
              explanation:
                "Digital computers process discrete values; hybrids combine both approaches.",
            },
            {
              prompt: "First generation computers used",
              options: [
                "Microprocessors",
                "Integrated circuits",
                "Transistors",
                "Vacuum tubes",
              ],
              correctIndex: 3,
              explanation:
                "Transistors came second, integrated circuits third, microprocessors fourth.",
            },
            {
              prompt: "Mobile money is significant in Liberia mainly because it",
              options: [
                "replaces the internet",
                "extends financial services to areas without bank branches",
                "reduces the cost of phones",
                "eliminates the need for electricity",
              ],
              correctIndex: 1,
              explanation:
                "It provides banking-type services where physical branches do not exist.",
            },
            {
              prompt: "The 'digital divide' refers to",
              options: [
                "the gap between those with access to ICT and those without",
                "the difference between analogue and digital",
                "splitting a hard disk into partitions",
                "the separation of hardware from software",
              ],
              correctIndex: 0,
              explanation:
                "In Liberia this divide falls heavily along urban and rural lines.",
            },
            {
              prompt: "Which is a limitation of computers?",
              options: [
                "They work quickly",
                "They have no intelligence of their own",
                "They store large amounts of data",
                "They do not tire",
              ],
              correctIndex: 1,
              explanation:
                "A computer follows instructions and cannot judge whether they are sensible.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define a computer, distinguish data from information, and describe the information processing cycle.",
              answerKey:
                "A computer is an electronic device that accepts data, processes it according to a set of instructions, produces information as output and stores results for future use. Data is raw unprocessed facts and figures; information is data processed into a meaningful form that answers a question. The cycle: input, where data is entered through an input device; processing, where the CPU manipulates the data according to instructions; output, where results are presented in usable form; and storage, which supports all three by retaining data and results. Award 4 marks for the definition, 4 for the data-information distinction with examples, 6 for the cycle.",
              marks: 14,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State six characteristics of a computer and explain what GIGO means for the user.",
              answerKey:
                "Characteristics: speed, with operations measured in millions per second; accuracy, provided input and instructions are correct; automation, working without further intervention once instructed; storage capacity, retaining and retrieving large volumes; versatility, performing many different tasks; diligence, with no fatigue or loss of concentration; and absence of intelligence of its own. Award 2 marks each for six. GIGO, Garbage In Garbage Out, means the computer cannot detect or correct faulty data or faulty instructions, so incorrect input produces incorrect output delivered with complete confidence; the user therefore bears full responsibility for the accuracy of what is entered. Award up to 4 marks.",
              marks: 16,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "A national bank needs a computer supporting thousands of simultaneous transactions across many branches. The appropriate class is",
              options: [
                "Microcomputer",
                "Mainframe",
                "Supercomputer",
                "Analogue computer",
              ],
              correctIndex: 1,
              answerKey:
                "Mainframes are designed for large-scale transaction processing with many concurrent users. Supercomputers prioritise raw computational speed for scientific modelling rather than concurrent transaction handling. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State five uses of ICT in Liberia and, for each, explain the benefit it brings.",
              answerKey:
                "Any five with benefits: education — computer-assisted learning, access to online resources, faster examination processing; health — patient records, disease surveillance as demonstrated during the Ebola outbreak, diagnostic equipment; banking — mobile money extending financial services where no branches exist; government — national identification, civil registration, revenue collection, elections administration; communication — mobile telephony and internet connecting dispersed communities; commerce — inventory control, accounting, advertising; agriculture — market price information and weather forecasts delivered by mobile phone. Award 2 marks per use and 2 marks per benefit explained.",
              marks: 20,
            },
            {
              type: "ESSAY",
              prompt:
                "Discuss the impact of ICT on Liberian society, examining both benefits and problems. Give particular attention to the obstacles facing ICT adoption in rural areas and recommend measures to address them.",
              answerKey:
                "Award marks as follows: benefits developed across at least five sectors with specific Liberian examples, 15 marks; problems including unemployment through automation, equipment and connectivity costs, health effects of prolonged use, cybercrime and fraud, loss of privacy, and over-dependence on technology, 12 marks; sustained treatment of rural obstacles — unreliable or absent electricity, weak or missing network coverage, cost relative to rural incomes, shortage of trained personnel and technical support, low literacy in some areas, and distance from repair services, 15 marks; explicit discussion of the digital divide and its urban-rural character in Liberia, with consideration of its consequences for education and economic opportunity, 8 marks; practical recommendations such as solar power for rural facilities, community ICT centres, teacher and staff training programmes, subsidised connectivity, local technical support capacity, and phased implementation, each justified, 12 marks; a balanced conclusion, 5 marks; organisation and expression, 3 marks. A learner who lists benefits without addressing rural obstacles should not exceed 30.",
              marks: 70,
            },
          ],
        },
        {
          slug: "computer-hardware",
          title: "Computer Hardware",
          objective:
            "By the end of the lesson, learners should be able to identify the major hardware components, classify devices as input, output, processing or storage, and explain the function of the CPU and memory.",
          estimatedMinutes: 80,
          notes: `## Introduction

- **Hardware** = the physical parts of a computer — everything you can touch.
- Every computer has the same kinds of parts: input, processing, storage and output.
- **This topic:** the major hardware components and the four functional groups (input, processing, storage, output); the CPU; the difference between RAM and ROM, and between primary and secondary storage.

## What hardware is

**Hardware** is the collection of physical, tangible components of a computer system — everything you can touch.

## The four functional categories

### 1. Input devices

Devices that accept data and instructions into the system.

- **Keyboard** — text and command entry
- **Mouse** — pointing and selection
- **Scanner** — converts printed images and text into digital form
- **Microphone** — sound input
- **Webcam** — video input
- **Touchscreen** — both input and output
- **Joystick** — control input
- **Barcode reader** — reads product codes
- **Biometric reader** — fingerprint or iris recognition
- **Light pen, graphics tablet, OMR, OCR, MICR** readers

### 2. Processing devices

**The Central Processing Unit (CPU)** — the brain of the computer, which executes instructions. It has three parts:

- **Control Unit (CU)** — directs and coordinates all operations; fetches instructions, decodes them, and signals other components to act
- **Arithmetic and Logic Unit (ALU)** — performs arithmetic (addition, subtraction, multiplication, division) and logical comparisons (greater than, less than, equal to)
- **Registers** — very small, very fast storage locations inside the CPU holding data currently being worked on

CPU speed is measured in **hertz** — megahertz (MHz) and gigahertz (GHz).

**The motherboard** is the main circuit board connecting all components.

### 3. Storage devices

**Primary storage (main memory)** — directly accessible to the CPU.

- **RAM (Random Access Memory)** — holds data and programs currently in use. It is **volatile**: contents are lost when power is switched off. This is why unsaved work disappears in a power cut.
- **ROM (Read Only Memory)** — holds permanent instructions such as the startup routine. It is **non-volatile** and normally cannot be altered by the user.
- **Cache** — very fast memory between the CPU and RAM, holding frequently used data.

**Secondary storage** — permanent, non-volatile, larger and slower than primary storage.

- **Hard Disk Drive (HDD)** — magnetic storage, large capacity
- **Solid State Drive (SSD)** — flash storage, faster and more robust, no moving parts
- **Flash drive / memory card** — portable
- **Optical discs** — CD, DVD, Blu-ray
- **Magnetic tape** — used for archival backup
- **Cloud storage** — remote storage accessed over a network

### 4. Output devices

Devices that present processed information.

- **Monitor (VDU)** — visual display; **soft copy** output
- **Printer** — **hard copy** output; types include inkjet, laser and dot matrix
- **Speakers and headphones** — sound
- **Plotter** — large-format technical drawings
- **Projector** — display to an audience

## Units of storage

| Unit | Size |
| --- | --- |
| Bit | A single binary digit, 0 or 1 |
| Nibble | 4 bits |
| **Byte** | **8 bits** — the storage for one character |
| Kilobyte (KB) | 1,024 bytes |
| Megabyte (MB) | 1,024 KB |
| Gigabyte (GB) | 1,024 MB |
| Terabyte (TB) | 1,024 GB |

## RAM versus ROM — the distinction most often examined

| | RAM | ROM |
| --- | --- | --- |
| Volatility | Volatile — contents lost on power off | Non-volatile — contents retained |
| Purpose | Holds programs and data in current use | Holds permanent startup instructions |
| Alterable | Read and written continuously | Normally read only |
| Effect on performance | More RAM allows more programs at once | Fixed; does not affect general performance |

## Primary versus secondary storage

Primary storage is **fast, small and directly accessible** to the CPU. Secondary storage is **slower, larger and permanent**. A program must be loaded from secondary storage into RAM before it can run — the CPU cannot execute directly from a hard disk.

## Ports and peripherals

**Peripherals** are devices attached to the computer: printers, scanners, external drives. They connect through **ports** — USB, HDMI, Ethernet, audio jacks.

## Common errors and misconceptions

- **Confusing RAM with ROM** — **RAM** is *volatile* working memory (lost on power off); **ROM** is *non-volatile* and holds permanent startup instructions.
- **Thinking saved work is lost in a power cut** — unsaved work in **volatile RAM** is lost, but anything **saved** to non-volatile secondary storage (disk/SSD) survives; hence *save often*.
- **Believing a program runs straight from the hard disk** — a program must first be **loaded from secondary storage into RAM**; the CPU cannot execute directly from a disk.
- **Assuming a faster CPU always means a faster computer** — when RAM is too small the machine slows dramatically; often **more RAM** matters more than a higher clock speed for everyday tasks.`,
          workedExample: `**Question:** A school is buying computers for a new laboratory. A supplier offers two machines at similar prices.

*Machine A:* 2.4 GHz processor, 4 GB RAM, 1 TB hard disk drive
*Machine B:* 2.0 GHz processor, 8 GB RAM, 256 GB solid state drive

(a) Explain what each specification means.
(b) Classify each component by function.
(c) Advise which machine better suits a school laboratory, with reasons.
(d) A learner asks why work is lost when the power fails during a lesson. Explain.

**Solution**

**(a) What the specifications mean**

*Processor speed — 2.4 GHz and 2.0 GHz.* The CPU's clock speed, in gigahertz, being billions of cycles per second. Machine A's processor is nominally faster.

*RAM — 4 GB and 8 GB.* The amount of primary memory holding programs and data currently in use. Machine B has twice as much.

*Storage — 1 TB HDD and 256 GB SSD.* Secondary storage capacity. Machine A holds roughly four times as much data, but Machine B uses a solid state drive with no moving parts, which is substantially faster and more physically robust.

**(b) Classification by function**

| Component | Category |
| --- | --- |
| Processor (CPU) | Processing device |
| RAM | Primary storage — volatile |
| Hard disk drive / solid state drive | Secondary storage — non-volatile |

**(c) Which machine suits a school laboratory**

**Machine B is the better choice**, for three reasons.

*1. RAM matters more than clock speed here.* The difference in processor speed is 2.4 against 2.0 GHz — about 20 per cent, and barely noticeable in classroom tasks such as word processing, spreadsheets and browsing. The difference in RAM is 4 GB against 8 GB, which is **double**. When RAM is exhausted, the machine begins swapping data to disk, and performance collapses far more dramatically than a 20 per cent processor difference could cause. In a laboratory where several applications and browser tabs are open at once, 4 GB is limiting.

*2. The SSD is a substantial practical advantage.* It has **no moving parts**, which matters in three ways for a school:

- It starts up and loads programs several times faster, saving minutes at the beginning of every lesson across every machine
- It withstands knocks and movement, whereas a hard disk with spinning platters is easily damaged
- It is less vulnerable to the sudden power interruptions common in Liberia, which can damage a hard disk in mid-write

*3. The storage difference is manageable.* Machine A's 1 TB looks attractive, but school work — documents, spreadsheets, presentations — is small. 256 GB is ample for classroom use, and if more is needed, external drives or network storage are far cheaper than replacing the whole machine.

*The qualification:* if the laboratory were editing video or storing very large media libraries, the capacity of Machine A would matter and the advice would change. For general teaching, it does not.

**(d) Why work is lost in a power failure**

The explanation lies in the **volatility of RAM**.

While a learner is typing, the document exists **only in RAM**, which is primary storage. RAM is **volatile** — it requires a continuous supply of electricity to retain its contents. It stores data as electrical charge, and when the power stops, the charge dissipates and the data is gone instantly.

Only when the learner presses **Save** is the document written to **secondary storage** — the hard disk or SSD — which is **non-volatile** and retains data without power, whether magnetically on a hard disk or in flash cells on an SSD.

So a power failure destroys everything in RAM and nothing in secondary storage. Work saved is safe; work unsaved is lost.

*The practical consequences for a Liberian school:*

- **Save frequently**, and teach learners to do so as a habit from the first lesson
- Enable **autosave** where the software provides it
- Consider an **uninterruptible power supply (UPS)**, which supplies battery power for long enough to save and shut down properly
- **Laptops have a built-in advantage**: the internal battery means a mains failure does not stop the machine at all, which in an area of unreliable supply may outweigh the lower cost of desktops

**Answer:** (a) clock speed, primary memory and secondary storage capacity respectively (b) processing, primary storage, secondary storage (c) Machine B, because doubled RAM outweighs a 20 per cent clock difference and the SSD is faster and more robust (d) RAM is volatile and loses its contents without power, while saved work resides in non-volatile secondary storage.`,
          teachingTip:
            "Open a computer case if at all possible, even a broken one. Passing the motherboard, a RAM module and a hard disk around the room converts abstractions into objects, and learners who have held a stick of RAM do not confuse it with a hard disk afterwards. A dead machine from a repair shop costs little or nothing and serves for years. The RAM-versus-ROM distinction and the volatility question are examined almost every year, so give them proper time and use the power-cut example, which every learner in Liberia has experienced. Ask why the work vanished, let them speculate, and then supply volatility as the explanation — a concept that answers a question they have already asked is a concept they retain. Convert the save habit into a classroom rule rather than advice: require learners to save every few minutes during practical work until it is automatic. Where machines are scarce, teach hardware with diagrams and any real components you can obtain, and use mobile phones as the reference point, since every phone has a processor, memory, storage, input and output that learners can identify.",
          quiz: [
            {
              prompt: "Hardware refers to",
              options: [
                "programs and instructions",
                "the physical components of a computer",
                "data stored on disk",
                "the operating system",
              ],
              correctIndex: 1,
              explanation: "Hardware is tangible; software consists of programs and instructions.",
            },
            {
              prompt: "Which part of the CPU performs calculations and comparisons?",
              options: [
                "Control Unit",
                "Arithmetic and Logic Unit",
                "Registers",
                "Cache",
              ],
              correctIndex: 1,
              explanation:
                "The Control Unit directs operations; the ALU performs arithmetic and logic.",
            },
            {
              prompt: "RAM is described as volatile because",
              options: [
                "it is very fast",
                "its contents are lost when power is switched off",
                "it cannot be written to",
                "it stores the operating system permanently",
              ],
              correctIndex: 1,
              explanation:
                "This is why unsaved work is lost during a power failure.",
            },
            {
              prompt: "Which of these is an input device?",
              options: ["Printer", "Monitor", "Scanner", "Speaker"],
              correctIndex: 2,
              explanation:
                "A scanner converts printed material into digital form for the computer.",
            },
            {
              prompt: "One byte consists of",
              options: ["2 bits", "4 bits", "8 bits", "16 bits"],
              correctIndex: 2,
              explanation:
                "A byte is eight bits and stores one character; four bits form a nibble.",
            },
            {
              prompt: "A printer produces",
              options: ["Soft copy", "Hard copy", "Primary storage", "Volatile output"],
              correctIndex: 1,
              explanation:
                "A monitor produces soft copy; printed output is hard copy.",
            },
            {
              prompt: "ROM differs from RAM in that ROM is",
              options: [
                "volatile",
                "non-volatile and holds permanent startup instructions",
                "larger in capacity",
                "used for temporary data",
              ],
              correctIndex: 1,
              explanation:
                "ROM retains its contents without power and is normally read only.",
            },
            {
              prompt: "An advantage of a solid state drive over a hard disk drive is that it",
              options: [
                "has more moving parts",
                "is faster and more resistant to physical shock",
                "always has greater capacity",
                "does not store data permanently",
              ],
              correctIndex: 1,
              explanation:
                "Having no moving parts makes an SSD faster and more robust.",
            },
            {
              prompt: "Before a program can be executed, it must be loaded into",
              options: ["ROM", "RAM", "the hard disk", "the printer"],
              correctIndex: 1,
              explanation:
                "The CPU cannot execute directly from secondary storage.",
            },
            {
              prompt: "The main circuit board connecting all components is the",
              options: ["CPU", "Motherboard", "Hard disk", "Power supply"],
              correctIndex: 1,
              explanation:
                "The motherboard carries the CPU, memory and connections to peripherals.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Classify the following as input, output, processing or storage devices: keyboard, monitor, CPU, hard disk, scanner, printer, RAM, mouse.",
              answerKey:
                "Input: keyboard, scanner, mouse. Output: monitor, printer. Processing: CPU. Storage: hard disk (secondary), RAM (primary). Award 1 mark per correct classification. Award 2 bonus marks within the total where a learner distinguishes primary from secondary storage.",
              marks: 10,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Describe the three parts of the CPU and state the function of each.",
              answerKey:
                "Control Unit — directs and coordinates all operations of the computer, fetching instructions from memory, decoding them and signalling other components to act. Arithmetic and Logic Unit — performs arithmetic operations such as addition, subtraction, multiplication and division, and logical comparisons such as greater than, less than and equal to. Registers — very small, very fast storage locations within the CPU holding the data and instructions currently being operated on. Award 3 marks per part correctly named with its function.",
              marks: 9,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "A learner types for an hour without saving, and the power fails. The work is lost because",
              options: [
                "the hard disk was full",
                "the document was held only in volatile RAM",
                "ROM was erased",
                "the CPU overheated",
              ],
              correctIndex: 1,
              answerKey:
                "Unsaved work exists only in RAM, which requires continuous power to retain its contents. Saving writes the file to non-volatile secondary storage, where it survives a power failure. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Distinguish between primary and secondary storage, giving two examples of each and stating the units used to measure storage capacity from bit to terabyte.",
              answerKey:
                "Primary storage is directly accessible to the CPU, fast, relatively small and includes volatile RAM and non-volatile ROM; a program must be loaded into it before execution. Secondary storage is permanent, non-volatile, larger and slower, and includes hard disk drives, solid state drives, flash drives, optical discs and magnetic tape. Units: bit, nibble (4 bits), byte (8 bits), kilobyte (1,024 bytes), megabyte (1,024 KB), gigabyte (1,024 MB), terabyte (1,024 GB). Award 4 marks for the distinction, 1 mark per example up to 4, and 4 marks for the correct sequence of units.",
              marks: 12,
            },
            {
              type: "ESSAY",
              prompt:
                "Describe the major hardware components of a computer system under the headings input, processing, storage and output. Explain the relationship between the CPU, primary storage and secondary storage during the execution of a program, and discuss the practical considerations a Liberian school should weigh when purchasing computers.",
              answerKey:
                "Award marks as follows: input devices, at least six named with functions, 8 marks; processing, covering the CPU with its Control Unit, ALU and registers, the motherboard, and clock speed measured in hertz, 12 marks; storage, distinguishing primary from secondary, covering RAM, ROM and cache alongside hard disks, solid state drives, optical and cloud storage, with volatility correctly explained, 12 marks; output devices with the hard copy and soft copy distinction, 8 marks; the execution relationship — a program is held on secondary storage, must be loaded into RAM before the CPU can execute it, the Control Unit fetches and decodes instructions, the ALU performs operations, registers hold current data, and results are written back to secondary storage when saved, 14 marks; practical purchasing considerations for a Liberian school, including power reliability and the case for laptops or a UPS, the relative value of RAM against clock speed, the robustness of solid state drives, maintenance and technical support availability, and total cost of ownership rather than purchase price alone, 12 marks; organisation and expression, 4 marks. A learner who describes components without explaining the execution relationship should not exceed 35.",
              marks: 70,
            },
          ],
        },
        {
          slug: "software",
          title: "Software and Operating Systems",
          objective:
            "By the end of the lesson, learners should be able to distinguish system software from application software, describe the functions of an operating system, name common operating systems, and explain the file and folder structure.",
          estimatedMinutes: 80,
          notes: `## Introduction

- Hardware does nothing until **software** tells it what to do.
- Software has two great families: **system software** (led by the operating system) and **application software** (programs that do useful work).
- For Liberian schools, free open-source options weigh against costly proprietary ones.
- **This topic:** what software is; system vs application software; the functions of an operating system; common operating systems; the file and folder structure.

## What software is

**Software** is the set of programs and instructions that tell the hardware what to do. Software is **intangible** — it cannot be touched.

The relationship: **hardware without software is useless, and software without hardware cannot run.** Each requires the other.

## The two main categories

### 1. System software

Manages and controls the computer itself and provides the environment in which applications run.

- **Operating system** — the master control program
- **Utility programs** — antivirus, disk defragmenter, backup, file compression, disk cleanup
- **Device drivers** — enable the operating system to communicate with hardware such as printers
- **Language translators** — compilers, interpreters and assemblers, which convert program code into machine code

### 2. Application software

Performs specific tasks for the user.

- **Word processor** — documents. *Microsoft Word, LibreOffice Writer*
- **Spreadsheet** — calculation and data analysis. *Microsoft Excel, LibreOffice Calc*
- **Database management system** — organised data storage and retrieval. *Microsoft Access, MySQL*
- **Presentation software** — slides. *PowerPoint, LibreOffice Impress*
- **Graphics software** — images and design
- **Web browser** — accessing the internet
- **Accounting, communication and educational software**

**Custom (bespoke) software** is written for one organisation's specific needs. **Off-the-shelf (packaged) software** is produced for general sale.

## The operating system

The **operating system (OS)** is the system software that manages all hardware and software resources and provides an interface between the user and the machine.

**Functions of an operating system:**

1. **Process management** — starting, scheduling and terminating programs; allocating CPU time between them
2. **Memory management** — allocating RAM to programs and reclaiming it when they finish
3. **File management** — creating, naming, storing, retrieving, copying, moving and deleting files
4. **Device management** — controlling input, output and storage devices through drivers
5. **User interface** — providing the means by which the user interacts with the machine
6. **Security** — user accounts, passwords, access permissions
7. **Error detection and handling** — detecting faults and responding
8. **Resource allocation** — sharing processor, memory and devices between competing tasks

## Types of user interface

- **Command Line Interface (CLI)** — the user types commands. Powerful and economical of resources, but requires the commands to be known.
- **Graphical User Interface (GUI)** — windows, icons, menus and a pointer. Easier to learn, but demands more memory and processing power.
- **Touch interface** — direct interaction with a screen.
- **Voice interface** — spoken commands.

## Common operating systems

- **Microsoft Windows** — the most widely used on desktop computers
- **macOS** — Apple computers
- **Linux** — open source, free, widely used on servers, available in distributions such as Ubuntu
- **Android** — mobile devices, based on Linux
- **iOS** — Apple mobile devices
- **UNIX** — multi-user systems and servers

**Open source software** has publicly available source code and may be freely used, modified and distributed. **Proprietary software** is owned, with its source code closed, and normally requires a licence purchase.

For Liberian schools this distinction is practical rather than academic: **Ubuntu Linux and LibreOffice are free and legal**, run acceptably on older hardware, and remove licensing cost entirely.

## Files and folders

- **File** — a named collection of related data stored as a unit
- **Folder (directory)** — a container organising files, which may contain further folders (subfolders)
- **Path** — the location of a file within the structure
- **File extension** — the suffix indicating the file type

| Extension | Type |
| --- | --- |
| .docx | Word processing document |
| .xlsx | Spreadsheet |
| .pptx | Presentation |
| .pdf | Portable document |
| .txt | Plain text |
| .jpg, .png | Image |
| .mp3 | Audio |
| .mp4 | Video |
| .exe | Executable program |
| .html | Web page |

**File management practice:** use meaningful names; organise into a logical folder hierarchy; keep regular backups; delete what is no longer needed.

## Software licensing

- **Commercial** — purchased
- **Freeware** — free to use, but the source code is not available
- **Shareware** — free for a trial period, then payment is required
- **Open source** — free to use, modify and redistribute
- **Piracy** — using software without a valid licence, which is both illegal and a security risk, since pirated copies frequently carry malware

## Common errors and misconceptions

- **Thinking the operating system is hardware** — the OS is **system *software***; the hardware is the physical machine it controls (hardware is the pot and fire, software is the recipe).
- **Confusing system software with application software** — **system** software runs and manages the computer (the OS, drivers, utilities); **application** software does user tasks (writing a letter, a spreadsheet).
- **Believing paid software is the only real option** — **open-source** software (Ubuntu Linux, LibreOffice) is free, legal, runs on older machines and opens Microsoft file formats; piracy is unlawful *and* a malware risk.
- **Forgetting the OS is the intermediary** — applications don't address the printer or disk directly; they ask the **operating system**, which uses the right **driver** — which is why one program runs on many different machines.`,
          workedExample: `**Question:** A secondary school has twenty older computers with 2 GB RAM each and no budget for software licences. The principal wants learners to write documents, work with spreadsheets and make presentations. Advise on a complete software solution and explain the role of the operating system.

**Solution**

**Part 1 — the constraints**

Three constraints govern the answer:

1. **No licence budget.** Commercial software is excluded.
2. **2 GB RAM.** This is limited by current standards, so the software must be economical with memory.
3. **The tasks required** are word processing, spreadsheets and presentations — standard office work, not specialised.

**Part 2 — recommended system software**

**Operating system: Ubuntu Linux** (or another lightweight Linux distribution such as Xubuntu or Lubuntu).

*Reasons:*

- **Free and legal.** No licence cost and no piracy risk.
- **Runs well on 2 GB RAM**, particularly the lighter distributions. A current version of Windows would consume most of the available memory before any application opened.
- **Open source**, so it may be installed on all twenty machines without per-machine licensing.
- **Less vulnerable to the malware** that circulates on shared removable drives, which matters where antivirus subscriptions cannot be afforded.
- Includes **device drivers** for common hardware and **utility programs** for backup and disk maintenance.

*The honest qualification:* staff and learners will need training, since most are likely familiar with Windows. This is a real cost in time, though the interface concepts transfer readily.

**Part 3 — recommended application software**

**LibreOffice**, which is free, open source and provides all three required applications:

- **LibreOffice Writer** — word processing, in place of Microsoft Word
- **LibreOffice Calc** — spreadsheets, in place of Excel
- **LibreOffice Impress** — presentations, in place of PowerPoint

It opens and saves Microsoft formats (.docx, .xlsx, .pptx), so learners can exchange files with users of commercial software — an important practical consideration for examinations and for work outside school.

Add **Firefox** as a web browser and any free educational software required.

**Part 4 — the role of the operating system**

When a learner opens Writer and types a document, the operating system performs several functions simultaneously, and the learner sees none of them:

*1. Process management.* The OS starts Writer as a process, allocates it CPU time, and schedules it alongside every other running program. With 2 GB RAM and several applications open, this scheduling determines whether the machine remains usable.

*2. Memory management.* The OS allocates a portion of RAM to Writer and prevents it from interfering with memory belonging to other programs. When the learner closes Writer, the OS reclaims that memory. **This is the function most stressed on a 2 GB machine**, and it is why a lightweight OS matters so much here.

*3. File management.* When the learner clicks Save, the OS locates space on the disk, writes the file, records its name and location in the file system, and updates the directory. Writer does not address the disk directly; it asks the OS.

*4. Device management.* When the learner prints, the OS uses the printer's **device driver** to translate the request into signals the printer understands. Keyboard input and screen output are handled the same way.

*5. User interface.* The OS supplies the graphical environment — windows, menus, the pointer — through which the learner works.

*6. Security.* Separate user accounts keep each learner's files private and prevent unauthorised changes to system settings, which matters in a shared laboratory.

*7. Error handling.* If a program stops responding, the OS detects it and allows it to be closed without restarting the machine.

**Part 5 — the summary point**

The operating system is the **intermediary between application software and hardware**. LibreOffice Writer contains no instructions for writing to a specific hard disk or printing to a specific printer. It asks the operating system, and the operating system, using the appropriate drivers, carries out the request.

This is why the same version of Writer runs on many different machines with different hardware: **the OS absorbs the differences**. Without it, every application would have to be written separately for every combination of hardware.

**Recommendation in summary:** Ubuntu Linux with LibreOffice and Firefox. Total software cost: nothing. Legal status: fully licensed. Performance on 2 GB RAM: adequate. Required investment: staff training, which should be budgeted for as the real cost of the solution.`,
          teachingTip:
            "The hardware-software distinction sounds trivial and is not, because learners routinely describe the operating system as part of the hardware. Fix it with the recipe analogy — hardware is the pot and the fire, software is the recipe, and neither cooks anything alone — and then test it by asking which category the operating system belongs to. Teach the operating system by making its work visible: open several programs at once on a low-memory machine and let the class watch it slow down, then ask what is being managed and what has run out. Memory management stops being abstract when they have seen it fail. Push the free software point hard, because it has real consequences for schools: many Liberian institutions run pirated Windows and Office because they believe there is no alternative, and there is. Install Ubuntu and LibreOffice on one machine and let learners use it; they discover that the software they were told costs money is available legally for nothing, and that is knowledge worth carrying into working life. Teach file organisation as a practical habit rather than a topic — give learners a folder of badly named files and have them impose a sensible structure.",
          quiz: [
            {
              prompt: "Software is best described as",
              options: [
                "the physical parts of a computer",
                "the programs and instructions that tell hardware what to do",
                "data stored on a disk",
                "the computer case",
              ],
              correctIndex: 1,
              explanation:
                "Software is intangible; hardware is the physical equipment it controls.",
            },
            {
              prompt: "Which is an example of system software?",
              options: [
                "Microsoft Word",
                "The operating system",
                "A web browser",
                "A spreadsheet",
              ],
              correctIndex: 1,
              explanation:
                "System software manages the computer; application software performs user tasks.",
            },
            {
              prompt: "Which is NOT a function of an operating system?",
              options: [
                "Memory management",
                "File management",
                "Writing a business letter",
                "Device management",
              ],
              correctIndex: 2,
              explanation:
                "Writing a letter is done with application software such as a word processor.",
            },
            {
              prompt: "A GUI differs from a CLI in that a GUI",
              options: [
                "requires commands to be typed",
                "uses windows, icons, menus and a pointer",
                "uses less memory",
                "cannot display images",
              ],
              correctIndex: 1,
              explanation:
                "A GUI is easier to learn but demands more memory and processing power.",
            },
            {
              prompt: "Which operating system is open source and free?",
              options: ["Microsoft Windows", "macOS", "Linux", "iOS"],
              correctIndex: 2,
              explanation:
                "Linux distributions such as Ubuntu may be freely used, modified and distributed.",
            },
            {
              prompt: "The file extension .xlsx indicates a",
              options: ["Word document", "Spreadsheet", "Presentation", "Image"],
              correctIndex: 1,
              explanation:
                ".docx is a word processing document and .pptx a presentation.",
            },
            {
              prompt: "A device driver is software that",
              options: [
                "protects against viruses",
                "enables the operating system to communicate with hardware",
                "creates documents",
                "compresses files",
              ],
              correctIndex: 1,
              explanation:
                "Without the appropriate driver the OS cannot control a printer or scanner.",
            },
            {
              prompt: "Software that is free for a trial period and then requires payment is",
              options: ["Freeware", "Shareware", "Open source", "Firmware"],
              correctIndex: 1,
              explanation:
                "Freeware remains free but keeps its source code closed.",
            },
            {
              prompt: "Using software without a valid licence is",
              options: [
                "Open source practice",
                "Piracy, which is illegal and a security risk",
                "Shareware",
                "Permitted in schools",
              ],
              correctIndex: 1,
              explanation:
                "Pirated software frequently carries malware in addition to being unlawful.",
            },
            {
              prompt: "A container that organises files and may hold subfolders is a",
              options: ["File", "Folder", "Path", "Extension"],
              correctIndex: 1,
              explanation:
                "The path describes a file's location within the folder structure.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Distinguish between system software and application software, giving three examples of each.",
              answerKey:
                "System software manages and controls the computer itself and provides the environment in which other programs run — examples include the operating system, utility programs such as antivirus and backup tools, device drivers, and language translators. Application software performs specific tasks for the user — examples include word processors, spreadsheets, database management systems, presentation software, graphics packages and web browsers. Award 4 marks for the distinction and 1 mark per correct example.",
              marks: 10,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State and explain six functions of an operating system.",
              answerKey:
                "Process management — starting, scheduling and terminating programs and allocating CPU time. Memory management — allocating RAM to programs and reclaiming it when they finish. File management — creating, naming, storing, retrieving, copying, moving and deleting files. Device management — controlling input, output and storage devices through drivers. User interface — providing the means by which the user interacts with the machine. Security — user accounts, passwords and access permissions. Error detection and handling. Resource allocation between competing tasks. Award 2 marks per function named and explained.",
              marks: 12,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "A school has no budget for software licences and computers with only 2 GB RAM. The most appropriate solution is",
              options: [
                "Pirated copies of Windows and Microsoft Office",
                "Ubuntu Linux with LibreOffice",
                "The newest version of Windows",
                "No software at all",
              ],
              correctIndex: 1,
              answerKey:
                "Ubuntu and LibreOffice are free, legal, run acceptably on limited memory, and open and save Microsoft file formats so files remain exchangeable. Piracy is unlawful and carries malware risk. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain the difference between open source and proprietary software, and state two advantages of open source software for a Liberian school.",
              answerKey:
                "Open source software has publicly available source code and may be freely used, modified and redistributed, usually at no cost. Proprietary software is owned by its developer, has closed source code, and normally requires the purchase of a licence. Advantages for a school: no licensing cost, allowing installation on many machines within a limited budget; legality, avoiding the risks and penalties of piracy; lighter distributions run acceptably on older hardware; freedom to modify and to install without per-machine restrictions; often lower malware exposure. Award 3 marks per definition and 2 marks per advantage explained.",
              marks: 10,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain the relationship between hardware, system software and application software, using the example of a user creating and printing a document. Discuss the role of the operating system as intermediary, and evaluate the software options available to a Liberian school with limited funds.",
              answerKey:
                "Award marks as follows: the relationship stated clearly, with hardware as the physical equipment, system software as the managing and controlling layer, and application software as the user-facing layer, together with the point that hardware without software is useless and software cannot run without hardware, 8 marks; the worked example traced through — the application receives keystrokes passed on by the OS from the keyboard driver, the OS allocates memory to the application, the file is written to disk through the OS file management system, and printing is directed through the OS to the printer driver, 16 marks; the OS as intermediary, developed with the insight that applications contain no instructions for specific hardware and that the OS absorbs hardware differences, which is why the same application runs on many different machines, 12 marks; the functions of the operating system, at least six named and explained, 12 marks; evaluation of software options for a school with limited funds, covering open source against proprietary, the specific case for Linux and LibreOffice, file format compatibility, hardware requirements on older machines, the training cost as the real expense, and the legal and security case against piracy, 16 marks; organisation and expression, 6 marks. A learner who describes the three layers without tracing the example should not exceed 30.",
              marks: 70,
            },
          ],
        },
        {
          slug: "data-representation",
          title: "Data Representation and Number Systems",
          objective:
            "By the end of the lesson, learners should be able to explain why computers use binary, convert between binary, decimal and hexadecimal, and describe how text and other data are represented.",
          estimatedMinutes: 80,
          notes: `## Introduction

- A computer knows only two states: **on** and **off**.
- Every document, photograph, song and video is, underneath, patterns of **1s and 0s**.
- Computers use binary for reliability, not simplicity.
- **This topic:** why computers use binary; converting between binary, decimal and hexadecimal, and binary addition; how text (ASCII, Unicode including the Vai script), images, sound and video are represented.

## Why computers use binary

A computer is built from electronic circuits that reliably distinguish only **two states**: on and off, high voltage and low voltage, current flowing and not flowing.

These two states are represented by the digits **0** and **1**, giving the **binary** (base 2) number system.

A system with ten distinguishable voltage levels would be possible in principle but far less reliable: small fluctuations would cause errors. With only two states, a circuit can tolerate considerable variation and still be read correctly. **Reliability, not simplicity, is the reason for binary.**

- **Bit** — one binary digit, 0 or 1
- **Byte** — 8 bits, the storage for one character

## Number systems

| System | Base | Digits used |
| --- | --- | --- |
| Binary | 2 | 0, 1 |
| Octal | 8 | 0-7 |
| Decimal | 10 | 0-9 |
| Hexadecimal | 16 | 0-9, A-F |

In hexadecimal, A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.

**Why hexadecimal is used:** binary numbers are long and error-prone to read. One hexadecimal digit represents exactly **four** binary digits, so hexadecimal is a compact shorthand for binary. The byte 11010110 becomes D6 — far easier to write and check.

## Binary to decimal

Multiply each digit by its place value and add.

Place values from the right: 1, 2, 4, 8, 16, 32, 64, 128.

For 10110:

- 1 x 16 = 16
- 0 x 8 = 0
- 1 x 4 = 4
- 1 x 2 = 2
- 0 x 1 = 0

Total = **22**

## Decimal to binary

Divide repeatedly by 2, recording remainders, and read the remainders **upwards**.

Convert 22:

- 22 / 2 = 11 r **0**
- 11 / 2 = 5 r **1**
- 5 / 2 = 2 r **1**
- 2 / 2 = 1 r **0**
- 1 / 2 = 0 r **1**

Reading upwards: **10110**

## Binary and hexadecimal

Because one hex digit equals four bits, conversion is done in **groups of four**, working from the right.

11010110 splits into 1101 and 0110.

- 1101 = 8 + 4 + 0 + 1 = 13 = **D**
- 0110 = 0 + 4 + 2 + 0 = 6 = **6**

So 11010110 = **D6** in hexadecimal.

Pad with leading zeros if the leftmost group is short of four bits.

## Binary addition

Four rules:

- 0 + 0 = 0
- 0 + 1 = 1
- 1 + 0 = 1
- **1 + 1 = 10** — write 0, carry 1

And 1 + 1 + 1 = 11, that is write 1, carry 1.

## Representing text

Characters are stored as numbers according to a coding scheme.

**ASCII (American Standard Code for Information Interchange)** — originally 7 bits, giving 128 characters; extended to 8 bits for 256.

- 'A' = 65
- 'a' = 97
- '0' (the character zero) = 48

The character '0' is not the number 0 — it is stored as 48.

**Unicode** — a much larger scheme representing characters from all the world's writing systems, including the Vai syllabary. This matters directly for Liberia: Unicode is what allows the Vai script devised by Bukele to be typed, stored and displayed on a computer.

**EBCDIC** — an older scheme used chiefly on IBM mainframes.

## Representing other data

- **Images** — divided into **pixels**, each stored as a number representing its colour. More bits per pixel gives more colours; more pixels gives higher resolution.
- **Sound** — the sound wave is **sampled** at intervals and each sample stored as a number. Higher sampling rates give better quality and larger files.
- **Video** — a sequence of images with synchronised sound.

## Why file sizes differ

- A page of plain text is a few kilobytes; a photograph is megabytes; a film is gigabytes.
- The reason is the **quantity of numbers required**:
  - text — one byte per character
  - image — several bytes per pixel across millions of pixels
  - video — that many times over for every frame

## Common errors and misconceptions

- **Thinking binary is used because it is "simple"** — it is used because two-state circuits are **reliable**; they tolerate voltage fluctuation where ten levels would cause errors.
- **Reading remainders the wrong way in decimal-to-binary** — after repeated division by 2, read the remainders **upwards** (last to first), and always **check** by converting back.
- **Confusing the character '0' with the number 0** — in ASCII the character '0' is stored as **48**, not as zero; likewise 'A' (65) and 'a' (97) differ, which is why passwords are case-sensitive.
- **Grouping binary from the left for hexadecimal** — split into groups of **four bits from the *right*** (padding the left with zeros), because each group of four maps to exactly one hex digit.`,
          workedExample: `**Question:**

(a) Convert 45 from decimal to binary.
(b) Convert 10110101 from binary to decimal.
(c) Convert 10110101 to hexadecimal.
(d) Add the binary numbers 1011 and 1101.
(e) The word "Fah" is stored in ASCII. Given that 'F' = 70, 'a' = 97 and 'h' = 104, show how it is stored in binary and state the number of bytes used.

**Solution**

**(a) 45 to binary**

Divide repeatedly by 2, recording remainders:

- 45 / 2 = 22 r **1**
- 22 / 2 = 11 r **0**
- 11 / 2 = 5 r **1**
- 5 / 2 = 2 r **1**
- 2 / 2 = 1 r **0**
- 1 / 2 = 0 r **1**

Reading the remainders **upwards**: **101101**

*Check by converting back:* 32 + 0 + 8 + 4 + 0 + 1 = 45. Correct.

**(b) 10110101 to decimal**

Write the place values above the digits, from the right: 128, 64, 32, 16, 8, 4, 2, 1.

| Digit | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Place value | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| Contribution | 128 | 0 | 32 | 16 | 0 | 4 | 0 | 1 |

Total = 128 + 32 + 16 + 4 + 1 = **181**

**(c) 10110101 to hexadecimal**

Split into groups of four **from the right**:

**1011** and **0101**

*First group:* 1011 = 8 + 0 + 2 + 1 = 11 = **B**
*Second group:* 0101 = 0 + 4 + 0 + 1 = 5 = **5**

**Answer: B5**

*Why this works:* four bits can represent 16 values (0 to 15), and hexadecimal has exactly 16 digits. Each group of four therefore maps to exactly one hex digit, with no carrying between groups.

*Check:* B5 = (11 x 16) + 5 = 176 + 5 = 181, matching part (b).

**(d) 1011 + 1101**

Work from the right, applying the rules, and carry carefully.

*Column 1 (rightmost):* 1 + 1 = 10 → write **0**, carry 1
*Column 2:* 1 + 0 + 1 (carried) = 10 → write **0**, carry 1
*Column 3:* 0 + 1 + 1 (carried) = 10 → write **0**, carry 1
*Column 4:* 1 + 1 + 1 (carried) = 11 → write **1**, carry 1
*Column 5:* nothing remains but the carry → write **1**

Result: **11000**

*Check in decimal:* 1011 = 11 and 1101 = 13. 11 + 13 = 24. And 11000 = 16 + 8 = 24. Correct.

**(e) "Fah" in ASCII**

Convert each character code to 8-bit binary.

*'F' = 70:*
70 = 64 + 4 + 2 = 01000110

*'a' = 97:*
97 = 64 + 32 + 1 = 01100001

*'h' = 104:*
104 = 64 + 32 + 8 = 01101000

**Stored as: 01000110 01100001 01101000**

**Number of bytes: 3.** Each ASCII character occupies one byte of 8 bits, so three characters require three bytes, or 24 bits.

*A point worth noting:* the same three letters in a different case would be stored as entirely different numbers — 'f' is 102, not 70. This is why computers treat "Fah" and "fah" as different strings unless deliberately instructed otherwise, and it explains case-sensitive passwords.

**Answers:** (a) 101101 (b) 181 (c) B5 (d) 11000 (e) 01000110 01100001 01101000, using 3 bytes.`,
          teachingTip:
            "Learners accept that computers use binary and rarely understand why, which leaves the topic feeling arbitrary. Give them the reason: ask how a circuit could reliably distinguish ten different voltage levels when voltages fluctuate, and let them see that two states are robust where ten would be error-prone. Reliability is the answer, and it makes binary a sensible engineering choice rather than a peculiarity. Teach conversion with place-value cards — hold up cards reading 128, 64, 32, 16, 8, 4, 2, 1 and have learners turn them face up or down to build a number. It is fast, physical and works with a large class. Insist on the reverse check every time: converting the answer back costs fifteen seconds and catches nearly every error, and learners who acquire the habit lose far fewer marks. For ASCII, have learners spell their own names in binary; personal data makes an abstract exercise concrete. Mention the Vai syllabary in Unicode whenever you teach character encoding — the fact that a Liberian script devised in the 1830s is encoded in the same standard as every other writing system connects this topic to the History and Literature syllabuses and lands well.",
          quiz: [
            {
              prompt: "Computers use the binary system principally because",
              options: [
                "binary numbers are shorter",
                "electronic circuits reliably distinguish two states",
                "binary is easier for humans to read",
                "it saves electricity",
              ],
              correctIndex: 1,
              explanation:
                "Two states tolerate voltage fluctuation, making the system reliable.",
            },
            {
              prompt: "How many bits are in one byte?",
              options: ["2", "4", "8", "16"],
              correctIndex: 2,
              explanation: "One byte of 8 bits stores a single character in ASCII.",
            },
            {
              prompt: "Convert the binary number 1101 to decimal.",
              options: ["11", "13", "14", "15"],
              correctIndex: 1,
              explanation: "8 + 4 + 0 + 1 = 13.",
            },
            {
              prompt: "Convert 25 from decimal to binary.",
              options: ["11001", "10101", "11011", "10011"],
              correctIndex: 0,
              explanation: "16 + 8 + 0 + 0 + 1 = 25, giving 11001.",
            },
            {
              prompt: "In hexadecimal, the letter C represents the decimal value",
              options: ["10", "11", "12", "13"],
              correctIndex: 2,
              explanation: "A is 10, B is 11, C is 12, D is 13, E is 14 and F is 15.",
            },
            {
              prompt: "One hexadecimal digit represents how many binary digits?",
              options: ["Two", "Three", "Four", "Eight"],
              correctIndex: 2,
              explanation:
                "Four bits give 16 possible values, matching the 16 hexadecimal digits.",
            },
            {
              prompt: "In binary addition, 1 + 1 equals",
              options: ["1", "2", "10", "11"],
              correctIndex: 2,
              explanation: "Write 0 and carry 1, since binary has no digit 2.",
            },
            {
              prompt: "ASCII is a scheme for representing",
              options: ["Images", "Characters", "Sound", "Video"],
              correctIndex: 1,
              explanation:
                "Each character is assigned a numeric code, such as 65 for capital A.",
            },
            {
              prompt: "Unicode is important for Liberia because it",
              options: [
                "makes files smaller",
                "allows the Vai script to be typed, stored and displayed",
                "speeds up processing",
                "replaces binary",
              ],
              correctIndex: 1,
              explanation:
                "Unicode encodes the writing systems of the world, including the Vai syllabary.",
            },
            {
              prompt: "An image file is larger than a text file mainly because",
              options: [
                "images use a different number system",
                "each pixel requires several bytes and there are millions of pixels",
                "text files are compressed automatically",
                "images are stored in decimal",
              ],
              correctIndex: 1,
              explanation:
                "File size follows from the quantity of numbers needed to represent the data.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain why computers use the binary number system, and define the terms bit and byte.",
              answerKey:
                "Computers are built from electronic circuits that can reliably distinguish only two states — on and off, or high and low voltage — represented by the digits 0 and 1. A system using ten distinguishable voltage levels would be possible in principle but unreliable, since small fluctuations would produce errors; with two states a circuit tolerates considerable variation and is still read correctly. Reliability is therefore the reason for binary. A bit is a single binary digit, 0 or 1. A byte is a group of eight bits, sufficient to store one character in ASCII. Award 6 marks for the explanation, requiring reference to reliability, and 2 marks for each definition.",
              marks: 10,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Convert: (a) 57 from decimal to binary, (b) 11001110 from binary to decimal, (c) 11001110 to hexadecimal.",
              answerKey:
                "(a) 57 / 2 = 28 r 1; 28 / 2 = 14 r 0; 14 / 2 = 7 r 0; 7 / 2 = 3 r 1; 3 / 2 = 1 r 1; 1 / 2 = 0 r 1. Reading upwards gives 111001. (b) 128 + 64 + 0 + 0 + 8 + 4 + 2 + 0 = 206. (c) Split into 1100 and 1110: 1100 = 12 = C, 1110 = 14 = E, giving CE. Check: (12 x 16) + 14 = 206, matching (b). Award 4 marks per conversion with working shown; deduct 1 mark where the answer is correct but no working appears.",
              marks: 12,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt: "What is the result of the binary addition 1110 + 1011?",
              options: ["11001", "10101", "11011", "10011"],
              correctIndex: 0,
              answerKey:
                "1110 = 14 and 1011 = 11; 14 + 11 = 25, which in binary is 11001. Working column by column from the right: 0+1=1; 1+1=10 write 0 carry 1; 1+0+1=10 write 0 carry 1; 1+1+1=11 write 1 carry 1; final carry gives the leading 1. Option A.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "The word 'Kru' is stored in ASCII, where 'K' = 75, 'r' = 114 and 'u' = 117. Show the binary representation and state the number of bytes and bits used.",
              answerKey:
                "'K' = 75 = 64 + 8 + 2 + 1 = 01001011. 'r' = 114 = 64 + 32 + 16 + 2 = 01110010. 'u' = 117 = 64 + 32 + 16 + 4 + 1 = 01110101. Stored as 01001011 01110010 01110101, using 3 bytes or 24 bits. Award 3 marks per correct 8-bit conversion and 3 marks for stating both the byte and bit counts.",
              marks: 12,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain how data is represented inside a computer. Cover the binary system and the reason for its use, conversion between binary, decimal and hexadecimal, the representation of text through coding schemes, and the representation of images and sound. Explain also why different file types differ so greatly in size.",
              answerKey:
                "Award marks as follows: the reason for binary, grounded in the reliability of two-state circuits rather than mere simplicity, with bit and byte defined, 8 marks; the four number systems tabulated with their bases and digit sets, including the hexadecimal letters A to F, 6 marks; worked conversion between decimal and binary in both directions with method shown, 10 marks; binary to hexadecimal conversion in groups of four, with an explanation of why four bits map to exactly one hex digit, and the practical reason hexadecimal is used as compact shorthand for binary, 10 marks; character representation through ASCII, with the 7-bit and extended 8-bit forms, example codes, and the observation that the character '0' is stored as 48 rather than as zero, 10 marks; Unicode as a larger scheme covering the world's writing systems, with credit for noting that it encodes the Vai syllabary and so allows a Liberian script to be used on a computer, 6 marks; image representation through pixels with colour values, and sound representation through sampling, with the effect of bit depth, resolution and sampling rate on quality, 10 marks; explanation of file size differences in terms of the quantity of numbers required — one byte per character for text against several bytes per pixel across millions of pixels for images, and that repeated per frame for video, 8 marks; organisation and accuracy of working throughout, 4 marks. A learner who states that binary is used because it is simple, without addressing circuit reliability, should lose the marks for that section.",
              marks: 72,
            },
          ],
        },
      ],
    },
  ],
};
