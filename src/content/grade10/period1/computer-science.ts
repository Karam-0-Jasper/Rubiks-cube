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
        "Learners establish what a computer is and how it operates, then work through hardware, software and operating systems, finishing with how data is represented inside the machine.",
      topics: [
        // source: GeeksforGeeks — Basics of Computer and its Operations (https://www.geeksforgeeks.org/basics-of-computer-and-its-operations/)
        {
          slug: "introduction-to-computers",
          title: "Introduction to Computers and ICT",
          objective:
            "By the end of the lesson, learners should be able to define a computer, list the operations it performs, distinguish data from information, and classify computers.",
          estimatedMinutes: 80,
          notes: `## What a computer is

**Computer** — an electronic device that can receive, store, process and output data.

A computer transforms data into meaningful information by processing input according to a set of instructions provided by the user.

## The operations a computer performs

A computer carries out five basic operations:

1. **Accept data (input)** — receives data from devices such as a keyboard or mouse
2. **Store data** — saves data for later use
3. **Process data** — executes instructions to perform a task
4. **Retrieve data** — accesses stored data when it is needed
5. **Output results** — displays or prints the results in an understandable form

## Data and information

- **Data** — raw facts and figures that are unorganised and have no meaning on their own. *Example: 45, 67, 89*
- **Information** — data that has been processed, organised and given context so that it is meaningful and useful. *Example: the average score is 67*

Processing is the step that turns data into information.

## The two parts of a computer system

- **Hardware** — the physical components, including the CPU, memory, storage devices and input/output devices
- **Software** — the programs and applications that instruct the computer, including the operating system and applications

Hardware and software depend on each other: hardware does nothing without software, and software cannot run without hardware.

## Classification of computers

Computers can be grouped in several ways:

| Basis of classification | Examples of categories |
| --- | --- |
| Size and power | Supercomputer, mainframe, minicomputer, microcomputer |
| Purpose | General purpose, special purpose |
| Data handling | Analogue, digital, hybrid |
| Functionality | Servers, workstations, personal computers |
| Usage | Home, office, industrial |

**By data handling:**

- **Analogue computer** — processes continuously varying physical quantities
- **Digital computer** — processes discrete data represented as digits
- **Hybrid computer** — combines analogue and digital features

**By size and power:**

- **Supercomputer** — the fastest and most powerful, used for large scientific tasks
- **Mainframe** — supports many users at once, used by large organisations
- **Microcomputer** — a single-user personal computer

## Key points

- A computer receives, stores, processes and outputs data.
- Data is raw; information is processed data with meaning.
- Every computer system is made of hardware and software.`,
          workedExample: `**Question:** A shop keeps a list of items sold each day: 12, 8, 15, 20, 5. Using the operations a computer performs, explain how the computer would turn this list into the information "the shop sold 60 items today, an average of 12 per hour over 5 hours."

**Solution**

*Step 1 — Accept data (input).* The five numbers 12, 8, 15, 20 and 5 are entered through an input device such as a keyboard. At this stage they are **data**: raw figures with no meaning on their own.

*Step 2 — Store data.* The computer saves the five values in memory so they can be worked on.

*Step 3 — Process data.* The computer executes instructions on the stored data. It adds the values: 12 + 8 + 15 + 20 + 5 = 60. It then divides by the number of hours: 60 / 5 = 12.

*Step 4 — Output results.* The computer displays or prints the result in an understandable form: "60 items sold today, an average of 12 per hour."

*Step 5 — Retrieve if needed.* If the shopkeeper asks again next week, the stored figures can be retrieved without re-entering them.

**Answer:** The raw list (12, 8, 15, 20, 5) is **data**. After the computer accepts, stores and processes it, the output "60 items, average 12 per hour" is **information** — data that has been organised and given meaning.`,
          quiz: [
            {
              prompt: "A computer is best defined as a device that",
              options: [
                "stores pictures only",
                "can receive, store, process and output data",
                "connects to the internet",
                "prints documents",
              ],
              correctIndex: 1,
              explanation:
                "A computer receives, stores, processes and outputs data, turning data into information.",
            },
            {
              prompt: "Raw, unorganised facts with no meaning on their own are called",
              options: ["Information", "Data", "Output", "Programs"],
              correctIndex: 1,
              explanation: "Data becomes information only after it is processed.",
            },
            {
              prompt: "Which step turns data into information?",
              options: ["Input", "Processing", "Storage", "Retrieval"],
              correctIndex: 1,
              explanation: "Processing organises data and gives it meaning.",
            },
            {
              prompt: "Which is NOT one of the five basic operations of a computer?",
              options: ["Accept data", "Process data", "Advertise data", "Output results"],
              correctIndex: 2,
              explanation:
                "The operations are accept, store, process, retrieve and output data.",
            },
            {
              prompt: "The two essential parts of a computer system are",
              options: [
                "keyboard and mouse",
                "hardware and software",
                "input and output only",
                "RAM and ROM",
              ],
              correctIndex: 1,
              explanation:
                "Hardware is the physical equipment; software is the programs that instruct it.",
            },
            {
              prompt: "The result of processing, presented in an understandable form, is",
              options: ["Data", "Input", "Information (output)", "Hardware"],
              correctIndex: 2,
              explanation: "Output presents processed results the user can understand.",
            },
            {
              prompt: "An analogue computer processes",
              options: [
                "discrete digits",
                "continuously varying physical quantities",
                "only text",
                "printed pages",
              ],
              correctIndex: 1,
              explanation:
                "Digital computers process discrete data; analogue processes continuous quantities.",
            },
            {
              prompt: "A hybrid computer is one that",
              options: [
                "has no storage",
                "combines analogue and digital features",
                "cannot be programmed",
                "only outputs sound",
              ],
              correctIndex: 1,
              explanation: "Hybrids merge continuous and discrete processing.",
            },
            {
              prompt: "The fastest and most powerful class of computer is the",
              options: ["Microcomputer", "Minicomputer", "Mainframe", "Supercomputer"],
              correctIndex: 3,
              explanation: "Supercomputers handle the largest scientific tasks.",
            },
            {
              prompt: "A single-user personal computer is a",
              options: ["Supercomputer", "Mainframe", "Microcomputer", "Server farm"],
              correctIndex: 2,
              explanation: "Microcomputers are single-user machines for homes and offices.",
            },
            {
              prompt: "A mainframe is typically used by",
              options: [
                "one home user",
                "large organisations serving many users at once",
                "no one today",
                "only scientists",
              ],
              correctIndex: 1,
              explanation: "Mainframes support many simultaneous users.",
            },
            {
              prompt: "Storing data means the computer",
              options: [
                "displays it on screen",
                "saves it for later use",
                "deletes it",
                "prints it",
              ],
              correctIndex: 1,
              explanation: "Stored data can be retrieved and reused.",
            },
            {
              prompt: "Which is an example of information rather than data?",
              options: [
                "45, 67, 89",
                "the average score is 67",
                "a single unlabelled number",
                "keys pressed at random",
              ],
              correctIndex: 1,
              explanation: "Information is processed data with meaning.",
            },
            {
              prompt: "Input devices are used to",
              options: [
                "receive data into the computer",
                "display output",
                "store files permanently",
                "cool the processor",
              ],
              correctIndex: 0,
              explanation: "A keyboard and mouse are input devices that accept data.",
            },
            {
              prompt: "Retrieving data means",
              options: [
                "entering new data",
                "accessing stored data when it is needed",
                "printing a report",
                "processing numbers",
              ],
              correctIndex: 1,
              explanation: "Retrieval brings stored data back for use.",
            },
            {
              prompt: "Hardware and software are related in that",
              options: [
                "hardware works without software",
                "software runs without hardware",
                "each depends on the other",
                "they are the same thing",
              ],
              correctIndex: 2,
              explanation: "Neither is useful without the other.",
            },
            {
              prompt: "Classifying computers by 'data handling' gives",
              options: [
                "home, office, industrial",
                "analogue, digital, hybrid",
                "server, workstation, PC",
                "general and special purpose",
              ],
              correctIndex: 1,
              explanation: "Data handling divides computers into analogue, digital and hybrid.",
            },
            {
              prompt: "A special purpose computer is one that",
              options: [
                "performs many different tasks",
                "is built for one particular task",
                "has no processor",
                "cannot store data",
              ],
              correctIndex: 1,
              explanation:
                "Special purpose machines are built for a specific job, unlike general purpose ones.",
            },
            {
              prompt: "The output of the operation 'process' is best described as",
              options: [
                "raw data",
                "meaningful information",
                "an input device",
                "a storage unit",
              ],
              correctIndex: 1,
              explanation: "Processing produces information from data.",
            },
            {
              prompt: "Which sequence correctly orders three basic operations?",
              options: [
                "Output, process, input",
                "Input, process, output",
                "Process, input, output",
                "Output, input, process",
              ],
              correctIndex: 1,
              explanation: "Data is accepted, processed, then output.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define a computer and list the five basic operations it performs.",
              answerKey:
                "A computer is an electronic device that can receive, store, process and output data, transforming data into meaningful information according to instructions. The five operations: accept data (input); store data; process data; retrieve data; output results. Award 5 marks for the definition and 1 mark per operation.",
              marks: 10,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Distinguish between data and information, giving one example of each.",
              answerKey:
                "Data is raw, unorganised facts and figures that have no meaning on their own, for example 45, 67, 89. Information is data that has been processed, organised and given context so that it is meaningful and useful, for example 'the average score is 67'. Award 3 marks per definition and 2 marks for correct examples.",
              marks: 8,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "Which pair correctly names the two parts of a computer system?",
              options: [
                "Input and output",
                "Hardware and software",
                "RAM and ROM",
                "Data and information",
              ],
              correctIndex: 1,
              answerKey:
                "A computer system is made of hardware (the physical components) and software (the programs that instruct it). Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Classify computers by data handling, naming and describing the three categories.",
              answerKey:
                "Analogue computers process continuously varying physical quantities. Digital computers process discrete data represented as digits. Hybrid computers combine analogue and digital features. Award 2 marks per category named and described.",
              marks: 6,
            },
            {
              type: "ESSAY",
              prompt:
                "Using the five operations of a computer, explain how a set of raw examination marks is turned into useful information such as the class average and pass rate. Refer to data, processing and information throughout.",
              answerKey:
                "Award marks as follows: the five operations named and correctly ordered — accept, store, process, retrieve, output — 15 marks; a clear worked illustration in which raw marks are entered as data, stored, processed by adding and dividing to give an average and by counting passes to give a pass rate, and the result output as information, 20 marks; consistent and correct use of the data-versus-information distinction, with data defined as raw unorganised facts and information as processed, organised, meaningful data, 10 marks; organisation and expression, 5 marks. A learner who does not distinguish data from information should not exceed 25.",
              marks: 50,
            },
          ],
        },
        // source: GeeksforGeeks — Functional Components of a Computer (https://www.geeksforgeeks.org/functional-components-of-a-computer/); Difference between RAM and ROM (https://www.geeksforgeeks.org/difference-between-ram-and-rom/)
        {
          slug: "computer-hardware",
          title: "Computer Hardware",
          objective:
            "By the end of the lesson, learners should be able to identify the functional components of a computer, describe the parts of the CPU, and distinguish RAM from ROM.",
          estimatedMinutes: 80,
          notes: `## What hardware is

**Hardware** — the physical components of a computer, including the input unit, the central processing unit, storage and the output unit.

## The functional components

### 1. Input unit

- **Captures** data and instructions from users or external sources.
- **Converts** user input into binary signals that the computer can process.
- Examples: keyboard, mouse, scanner, microphone.

### 2. Central Processing Unit (CPU)

The processing centre of the computer, with three key subcomponents.

- **Arithmetic Logic Unit (ALU)** — executes mathematical calculations (addition, subtraction, multiplication, division) and logical comparisons used for decision making.
- **Control Unit (CU)** — directs the operations of all computer parts, decodes instructions, and manages the flow of data between components.
- **Registers** — high-speed memory locations within the CPU that temporarily hold instructions, addresses and data during processing.

### 3. Output unit

- **Converts** processed binary data into a form users can understand.
- Examples: monitor, printer, speakers, headphones.

### The bus

The components communicate through a **bus** — a pathway of conducting wires that transfers data and control signals between the functional units.

## Memory: RAM and ROM

Both RAM and ROM are **primary memory**.

**RAM (Random Access Memory)** — temporary memory that stores the programs and data the CPU is actively working on in real time. Data can be read, written and erased many times. It has fast access speed. RAM is **volatile**: its contents are lost when power is switched off.

**ROM (Read Only Memory)** — memory in which data has been pre-recorded. It stores a program called the **BIOS (Basic Input/Output System)**. ROM is **non-volatile**: its contents are retained even after the computer is turned off. It is normally read-only.

## RAM compared with ROM

| Aspect | RAM | ROM |
| --- | --- | --- |
| Data when powered off | Lost | Retained |
| Operations | Read and write | Read only |
| Purpose | Temporary processing storage | Firmware and BIOS |
| Speed | High-speed access | Slower than RAM |
| Typical capacity | Gigabytes (GB) | Megabytes (MB) |
| Cost | More expensive | Cheaper |

## Primary and secondary memory

- **Primary memory** — RAM and ROM; directly used by the CPU.
- **Secondary memory** — external storage such as hard drives and SSDs, where data is saved permanently.

## Key points

- The CPU contains the ALU, the Control Unit and registers.
- RAM is volatile working memory; ROM is non-volatile and holds the BIOS.
- Primary memory is used directly by the CPU; secondary memory stores data permanently.`,
          workedExample: `**Question:** A learner types a paragraph, then the power fails before she saves. The paragraph is lost, but the program that opened it still starts up normally when the power returns. Explain, using RAM and ROM, why the paragraph was lost but the startup program was not.

**Solution**

*Step 1 — Where the paragraph was held.* While the learner types, the paragraph is held in **RAM**, the temporary memory that stores the data the CPU is actively working on. RAM allows data to be read, written and erased continuously, which is why the text can be edited freely.

*Step 2 — Why the paragraph was lost.* RAM is **volatile**: its contents are lost when power is switched off. Because the paragraph was only in RAM and had not been saved to secondary storage, it disappeared the instant the power failed.

*Step 3 — Where the startup program was held.* The instructions that start the computer are held in **ROM**, as the BIOS. ROM is pre-recorded, read-only memory.

*Step 4 — Why the startup program survived.* ROM is **non-volatile**: its contents are retained even after the computer is turned off. So the startup program was unaffected by the power failure and ran normally when power returned.

**Answer:** The paragraph was in volatile RAM and was lost when power stopped; the startup program (BIOS) was in non-volatile ROM and survived. Saving the paragraph would have written it to secondary storage, where it too would have survived.`,
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
              explanation: "Hardware is tangible; software is programs.",
            },
            {
              prompt: "The input unit converts user input into",
              options: ["Hard copy", "Binary signals the computer can process", "Sound", "Heat"],
              correctIndex: 1,
              explanation: "Input devices turn data into binary the computer can handle.",
            },
            {
              prompt: "Which part of the CPU performs calculations and logical comparisons?",
              options: ["Control Unit", "Arithmetic Logic Unit", "Registers", "Bus"],
              correctIndex: 1,
              explanation: "The ALU does arithmetic and logic; the CU directs operations.",
            },
            {
              prompt: "The Control Unit is responsible for",
              options: [
                "performing arithmetic",
                "directing operations and decoding instructions",
                "storing files permanently",
                "displaying output",
              ],
              correctIndex: 1,
              explanation: "The CU manages the flow of data and decodes instructions.",
            },
            {
              prompt: "Registers are best described as",
              options: [
                "large permanent storage",
                "high-speed memory locations inside the CPU",
                "output devices",
                "cooling fans",
              ],
              correctIndex: 1,
              explanation: "Registers temporarily hold instructions, addresses and data.",
            },
            {
              prompt: "The pathway that transfers data and control signals between units is the",
              options: ["Register", "Bus", "ALU", "Monitor"],
              correctIndex: 1,
              explanation: "The bus is a pathway of conducting wires.",
            },
            {
              prompt: "RAM is described as volatile because",
              options: [
                "it is very fast",
                "its contents are lost when power is switched off",
                "it cannot be written to",
                "it stores the BIOS",
              ],
              correctIndex: 1,
              explanation: "Volatile memory loses its contents without power.",
            },
            {
              prompt: "ROM stores a program called the",
              options: ["Browser", "BIOS", "Spreadsheet", "Driver"],
              correctIndex: 1,
              explanation: "ROM holds the BIOS (Basic Input/Output System).",
            },
            {
              prompt: "ROM is non-volatile, meaning it",
              options: [
                "loses data when powered off",
                "retains data even after the computer is turned off",
                "can only be written",
                "is faster than RAM",
              ],
              correctIndex: 1,
              explanation: "Non-volatile memory keeps its contents without power.",
            },
            {
              prompt: "Which memory allows data to be read and written many times?",
              options: ["ROM", "RAM", "BIOS", "A printout"],
              correctIndex: 1,
              explanation: "RAM supports repeated read, write and erase.",
            },
            {
              prompt: "Which memory is normally read-only?",
              options: ["RAM", "ROM", "Cache", "Registers"],
              correctIndex: 1,
              explanation: "ROM is read-only, holding pre-recorded data.",
            },
            {
              prompt: "Typical RAM capacity is measured in",
              options: ["Bits", "Gigabytes", "Hertz", "Volts"],
              correctIndex: 1,
              explanation: "RAM is typically measured in gigabytes; ROM in megabytes.",
            },
            {
              prompt: "Compared with RAM, ROM is usually",
              options: ["More expensive", "Cheaper", "Faster", "Larger"],
              correctIndex: 1,
              explanation: "ROM is cheaper and slower, with smaller capacity.",
            },
            {
              prompt: "Both RAM and ROM are examples of",
              options: ["Secondary memory", "Primary memory", "Output devices", "Input devices"],
              correctIndex: 1,
              explanation: "RAM and ROM are primary memory used by the CPU.",
            },
            {
              prompt: "Secondary memory includes",
              options: ["RAM and ROM", "Hard drives and SSDs", "Registers", "The ALU"],
              correctIndex: 1,
              explanation: "Secondary storage such as hard drives saves data permanently.",
            },
            {
              prompt: "A monitor is part of the",
              options: ["Input unit", "Output unit", "CPU", "Bus"],
              correctIndex: 1,
              explanation: "Monitors and printers are output devices.",
            },
            {
              prompt: "A scanner belongs to the",
              options: ["Output unit", "Input unit", "ALU", "ROM"],
              correctIndex: 1,
              explanation: "A scanner captures data, so it is an input device.",
            },
            {
              prompt: "The three subcomponents of the CPU are",
              options: [
                "ALU, Control Unit and registers",
                "RAM, ROM and cache",
                "monitor, keyboard and mouse",
                "input, output and storage",
              ],
              correctIndex: 0,
              explanation: "The CPU contains the ALU, the Control Unit and registers.",
            },
            {
              prompt: "Which statement about RAM is correct?",
              options: [
                "It keeps data without power",
                "It holds the data the CPU is actively working on",
                "It is read-only",
                "It stores the BIOS",
              ],
              correctIndex: 1,
              explanation: "RAM is fast, writable working memory for active data.",
            },
            {
              prompt: "The output unit converts processed data from binary into",
              options: [
                "a form users can understand",
                "raw data",
                "an input signal",
                "the BIOS",
              ],
              correctIndex: 0,
              explanation: "Output devices present results the user can understand.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Name the three subcomponents of the CPU and state the function of each.",
              answerKey:
                "Arithmetic Logic Unit — performs mathematical calculations and logical comparisons for decision making. Control Unit — directs the operations of all parts, decodes instructions and manages data flow. Registers — high-speed memory locations within the CPU that temporarily hold instructions, addresses and data. Award 3 marks per part named with its function.",
              marks: 9,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State four differences between RAM and ROM.",
              answerKey:
                "RAM loses data when powered off (volatile); ROM retains data (non-volatile). RAM is read and write; ROM is read-only. RAM is temporary processing storage; ROM stores firmware/BIOS. RAM has faster access; ROM is slower. RAM is typically measured in gigabytes; ROM in megabytes. RAM is more expensive; ROM cheaper. Award 2 marks per correct difference, up to 4 differences.",
              marks: 8,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "Unsaved work is lost during a power failure because it was held in",
              options: ["ROM", "Volatile RAM", "The BIOS", "Secondary storage"],
              correctIndex: 1,
              answerKey:
                "RAM is volatile: its contents are lost when power is switched off. Saved work is written to non-volatile secondary storage and survives. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain the difference between primary and secondary memory, giving one example of each.",
              answerKey:
                "Primary memory (RAM and ROM) is used directly by the CPU. Secondary memory is external storage such as hard drives and SSDs where data is saved permanently. Example of primary: RAM or ROM. Example of secondary: hard disk drive or SSD. Award 4 marks for the distinction and 1 mark per example.",
              marks: 6,
            },
            {
              type: "ESSAY",
              prompt:
                "Describe the functional components of a computer — the input unit, the CPU with its three subcomponents, and the output unit — and explain how RAM and ROM differ. Use the difference between volatile and non-volatile memory to explain why saving work matters.",
              answerKey:
                "Award marks as follows: the input unit, capturing data and converting it to binary signals, 6 marks; the CPU with the ALU (arithmetic and logic), the Control Unit (directing operations, decoding instructions) and registers (high-speed temporary storage), 15 marks; the output unit, converting processed binary into an understandable form, 6 marks; RAM as volatile read/write working memory versus ROM as non-volatile read-only memory holding the BIOS, with at least three differences, 12 marks; an explanation that unsaved work in volatile RAM is lost on power failure while saved work written to non-volatile storage survives, 8 marks; organisation and expression, 3 marks. A learner who does not use the volatile/non-volatile distinction to explain saving should not exceed 30.",
              marks: 50,
            },
          ],
        },
        // source: GeeksforGeeks — Software and its Types (https://www.geeksforgeeks.org/software-and-its-types/); Functions of Operating System (https://www.geeksforgeeks.org/functions-of-operating-system/)
        {
          slug: "software",
          title: "Software and Operating Systems",
          objective:
            "By the end of the lesson, learners should be able to define software, distinguish system software from application software, and state the functions of an operating system.",
          estimatedMinutes: 80,
          notes: `## What software is

**Software** — a set of instructions or commands that tell a computer to perform a specific task. Software is **intangible**: it cannot be touched.

Software directs the hardware according to the user's needs.

## The two main categories

### 1. System software

Software that directly operates the computer hardware and provides the basic functionality for users and for other software to run smoothly. It acts as an intermediary between the hardware and applications.

Subtypes:

- **Operating system** — the main program of the computer; it manages resources and provides the user interface
- **Language processor** — converts high-level programming languages such as Java, C++ and Python into machine-readable object code
- **Device driver** — a program that controls a device and helps it perform its functions
- **Utility software** — maintains the system, for example antivirus, disk repair and memory-testing tools

### 2. Application software

Programs designed to perform a specific task for end users, going beyond basic computer operations.

Types:

- **General purpose software** — used for many tasks, such as a word processor, a spreadsheet or presentation software
- **Customised software** — designed for the specific needs of one organisation, such as an airline reservation system
- **Utility software** — supports the maintenance of the system

## The operating system

The **operating system (OS)** is software that acts as a bridge between the user and the computer hardware, providing an environment for programs to run efficiently.

**Functions of an operating system:**

1. **Process management** — manages running programs through scheduling (deciding CPU access), synchronisation, deadlock handling and inter-process communication
2. **Memory management** — controls storage in memory, including allocation and deallocation, protection of processes and virtual memory
3. **File system management** — organises and controls how data is stored and accessed, managing file attributes and operations such as create, read, write and delete
4. **Device management (I/O)** — coordinates communication with hardware devices through device drivers, using buffering, caching and spooling
5. **Protection and security** — safeguards resources through access control, user authentication and defence against unauthorised access

Additional functions include performance monitoring, job accounting and error detection.

## Key points

- Software is a set of instructions that tells the computer what to do.
- System software runs and manages the computer; application software performs user tasks.
- The operating system is a bridge between the user and the hardware and manages processes, memory, files, devices and security.`,
          workedExample: `**Question:** A learner opens a word processor, types a letter, saves it, then prints it. Identify the type of software the word processor is, and explain which operating system functions are used at each stage.

**Solution**

*Step 1 — Classify the word processor.* A word processor performs a specific task for the end user, so it is **application software** — specifically general purpose software.

*Step 2 — Opening the word processor.* The operating system uses **process management** to start the word processor as a running program and to schedule CPU time for it. It uses **memory management** to allocate memory so the program can run.

*Step 3 — Typing the letter.* As keys are pressed, the operating system uses **device management** to receive the input from the keyboard through its device driver, and continues **memory management** to hold the letter as it grows.

*Step 4 — Saving the letter.* The operating system uses **file system management** to create the file, store the data and record its attributes so it can be found again with a create/write operation.

*Step 5 — Printing the letter.* The operating system uses **device management** again to send the data to the printer through the printer's device driver, using spooling to queue the job.

**Answer:** The word processor is application software. Opening it uses process and memory management; typing uses device and memory management; saving uses file system management; printing uses device management. Throughout, **protection and security** controls who may access the file.`,
          quiz: [
            {
              prompt: "Software is best described as",
              options: [
                "the physical parts of a computer",
                "a set of instructions that tell a computer to perform a task",
                "the computer case",
                "data printed on paper",
              ],
              correctIndex: 1,
              explanation: "Software is intangible instructions that direct hardware.",
            },
            {
              prompt: "The two main categories of software are",
              options: [
                "RAM and ROM software",
                "system software and application software",
                "input and output software",
                "free and paid software",
              ],
              correctIndex: 1,
              explanation: "Software is divided into system and application software.",
            },
            {
              prompt: "System software",
              options: [
                "performs user tasks like writing letters",
                "directly operates the hardware and provides basic functionality",
                "is always an image editor",
                "cannot manage devices",
              ],
              correctIndex: 1,
              explanation:
                "System software runs and manages the computer and supports other software.",
            },
            {
              prompt: "Which is an example of system software?",
              options: ["A word processor", "The operating system", "A spreadsheet", "A photo of a file"],
              correctIndex: 1,
              explanation: "The operating system is the main system software.",
            },
            {
              prompt: "A language processor is used to",
              options: [
                "protect against viruses",
                "convert high-level code into machine-readable object code",
                "print documents",
                "organise folders",
              ],
              correctIndex: 1,
              explanation:
                "Language processors translate languages such as Java and Python into object code.",
            },
            {
              prompt: "A device driver is software that",
              options: [
                "creates documents",
                "controls a device and helps it perform its functions",
                "compresses files",
                "stores the BIOS",
              ],
              correctIndex: 1,
              explanation: "Drivers let the OS control hardware such as printers.",
            },
            {
              prompt: "Antivirus and disk-repair tools are examples of",
              options: ["Utility software", "A language processor", "An operating system", "A driver"],
              correctIndex: 0,
              explanation: "Utility software maintains the system infrastructure.",
            },
            {
              prompt: "Application software is designed to",
              options: [
                "manage the computer itself",
                "perform a specific task for end users",
                "replace the hardware",
                "translate programming languages",
              ],
              correctIndex: 1,
              explanation: "Applications perform user tasks beyond basic operations.",
            },
            {
              prompt: "A word processor and a spreadsheet are examples of",
              options: [
                "general purpose application software",
                "device drivers",
                "operating systems",
                "language processors",
              ],
              correctIndex: 0,
              explanation: "General purpose software serves many everyday tasks.",
            },
            {
              prompt: "Software written for one organisation's specific needs is",
              options: ["General purpose", "Customised software", "An operating system", "Freeware"],
              correctIndex: 1,
              explanation: "An airline reservation system is customised software.",
            },
            {
              prompt: "The operating system is best described as",
              options: [
                "an output device",
                "a bridge between the user and the hardware",
                "a spreadsheet",
                "a type of memory",
              ],
              correctIndex: 1,
              explanation: "The OS provides the environment in which programs run.",
            },
            {
              prompt: "Which is a function of an operating system?",
              options: ["Writing a letter", "Memory management", "Manufacturing hardware", "Drawing pictures"],
              correctIndex: 1,
              explanation:
                "The OS manages memory, processes, files, devices and security.",
            },
            {
              prompt: "Scheduling which program gets CPU access is part of",
              options: ["File management", "Process management", "Printing", "Antivirus scanning"],
              correctIndex: 1,
              explanation: "Process management schedules and coordinates running programs.",
            },
            {
              prompt: "Allocating and reclaiming memory for programs is",
              options: ["Device management", "Memory management", "Security", "Language translation"],
              correctIndex: 1,
              explanation: "Memory management handles allocation, protection and virtual memory.",
            },
            {
              prompt: "Creating, reading, writing and deleting files is handled by",
              options: [
                "file system management",
                "process management",
                "the ALU",
                "a language processor",
              ],
              correctIndex: 0,
              explanation: "File system management controls how data is stored and accessed.",
            },
            {
              prompt: "Coordinating printers and keyboards through drivers is",
              options: ["Device management", "Memory management", "Security", "Scheduling"],
              correctIndex: 0,
              explanation: "Device management uses drivers, buffering and spooling.",
            },
            {
              prompt: "User authentication and access control fall under",
              options: [
                "protection and security",
                "process management",
                "file naming",
                "arithmetic",
              ],
              correctIndex: 0,
              explanation: "Security safeguards resources against unauthorised access.",
            },
            {
              prompt: "Which is an additional function of an operating system?",
              options: ["Error detection", "Growing crops", "Cooling the room", "Selling software"],
              correctIndex: 0,
              explanation:
                "Additional functions include error detection, job accounting and performance monitoring.",
            },
            {
              prompt: "Software is intangible, meaning it",
              options: [
                "can be touched",
                "cannot be touched",
                "is always free",
                "is a physical device",
              ],
              correctIndex: 1,
              explanation: "Software consists of instructions, not physical parts.",
            },
            {
              prompt: "Spooling is used by the operating system mainly for",
              options: [
                "queuing jobs to peripherals such as printers",
                "adding numbers",
                "storing the BIOS",
                "translating code",
              ],
              correctIndex: 0,
              explanation: "Spooling queues peripheral tasks under device management.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define software and distinguish system software from application software, giving one example of each.",
              answerKey:
                "Software is a set of instructions or commands that tell a computer to perform a specific task; it is intangible. System software directly operates the hardware and provides basic functionality (example: the operating system, a device driver or a language processor). Application software performs a specific task for end users (example: a word processor or spreadsheet). Award 3 marks for the definition, 3 marks for the distinction and 1 mark per example.",
              marks: 9,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State and briefly explain five functions of an operating system.",
              answerKey:
                "Process management — scheduling and coordinating running programs and CPU access. Memory management — allocating and reclaiming memory, protection, virtual memory. File system management — organising storage and file operations such as create, read, write, delete. Device management — coordinating hardware through drivers, buffering and spooling. Protection and security — access control, authentication, defence against unauthorised access. Award 2 marks per function named and explained.",
              marks: 10,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "Which subtype of system software translates high-level program code into object code?",
              options: ["Device driver", "Language processor", "Utility software", "Application software"],
              correctIndex: 1,
              answerKey:
                "A language processor converts high-level programming languages into machine-readable object code. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Name three subtypes of system software and state what each does.",
              answerKey:
                "Operating system — the main program that manages resources and provides the user interface. Language processor — converts high-level code into object code. Device driver — controls a device and helps it perform its functions. Utility software — maintains the system (antivirus, disk repair). Award 2 marks per subtype named with its role, up to three.",
              marks: 6,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain the difference between system software and application software, and describe how the operating system manages a computer while a user opens an application, saves a file and prints it. Refer to at least four operating system functions.",
              answerKey:
                "Award marks as follows: a clear distinction between system software (operates and manages the computer, e.g. OS, drivers, language processors, utilities) and application software (performs specific user tasks, e.g. word processors, spreadsheets), 12 marks; a worked account tracing opening an application (process and memory management), typing and receiving input (device management), saving (file system management) and printing (device management with spooling), 20 marks; correct naming and explanation of at least four OS functions from process, memory, file system, device management and security, 12 marks; organisation and expression, 6 marks. A learner who lists functions without linking them to the open/save/print sequence should not exceed 30.",
              marks: 50,
            },
          ],
        },
        // source: GeeksforGeeks — Number System and Base Conversions (https://www.geeksforgeeks.org/number-system-and-base-conversions/); ASCII Table (https://www.geeksforgeeks.org/ascii-table/)
        {
          slug: "data-representation",
          title: "Data Representation and Number Systems",
          objective:
            "By the end of the lesson, learners should be able to name the number systems, convert between binary, decimal and hexadecimal, and explain how text is represented using ASCII and Unicode.",
          estimatedMinutes: 80,
          notes: `## Number systems

Four number systems are used in computing:

| System | Base | Digits used |
| --- | --- | --- |
| Binary | 2 | 0, 1 |
| Octal | 8 | 0-7 |
| Decimal | 10 | 0-9 |
| Hexadecimal | 16 | 0-9 and A-F |

In hexadecimal, the letters stand for values: A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.

## Decimal to binary

Divide the decimal number by 2. Record the remainder (0 or 1). Continue dividing the quotient by 2 until the quotient is 0. Read the remainders from **bottom to top**.

Example: convert 10 to binary.

- 10 / 2 = quotient 5, remainder 0
- 5 / 2 = quotient 2, remainder 1
- 2 / 2 = quotient 1, remainder 0
- 1 / 2 = quotient 0, remainder 1

Reading remainders bottom to top gives **1010**. So 10 in decimal = 1010 in binary.

## Binary to decimal

Multiply each bit by 2 raised to the power of its position (counting from 0 on the right), then add the results.

Example: convert 1010 to decimal.

- 1 x 2³ = 8
- 0 x 2² = 0
- 1 x 2¹ = 2
- 0 x 2⁰ = 0

Total = 8 + 2 = **10**.

## Binary to hexadecimal

Start from the rightmost bit and divide the binary number into groups of **4 bits** each. Convert each group of four into one hexadecimal digit.

Example: convert 1111011011 to hexadecimal.

- Group into: 0011 1101 1011
- 0011 = 3
- 1101 = D
- 1011 = B

So 1111011011 in binary = **3DB** in hexadecimal.

## Representing text: ASCII

**ASCII (American Standard Code for Information Interchange)** converts characters into numeric values from 0 to 127, which are then written in binary — the language computers and networks understand.

Each character has a unique code:

- 'A' = 65
- 'a' = 97
- the character '0' = 48
- '!' = 33

The character '0' is stored as 48, which is not the same as the number 0.

## Representing text: Unicode

**Unicode** extends ASCII to support many more characters. It can represent over 140,000 characters and supports encoding formats such as UTF-8, UTF-16 and UTF-32. This lets computers represent diverse scripts, symbols and emojis beyond the 128 characters of ASCII.

## Key points

- Binary is base 2, decimal base 10, hexadecimal base 16.
- Decimal to binary: divide by 2, read remainders upward.
- Binary to hexadecimal: group bits in fours from the right.
- ASCII codes characters as numbers 0-127; Unicode extends this to over 140,000 characters.`,
          workedExample: `**Question:**
(a) Convert 13 from decimal to binary.
(b) Convert 1101 from binary to decimal.
(c) Convert 11011010 to hexadecimal.
(d) In ASCII, 'A' = 65. State what the character '0' is stored as, and explain why it is not the number 0.

**Solution**

**(a) 13 to binary.** Divide by 2 and record remainders:
- 13 / 2 = 6 remainder 1
- 6 / 2 = 3 remainder 0
- 3 / 2 = 1 remainder 1
- 1 / 2 = 0 remainder 1

Read the remainders bottom to top: **1101**.

**(b) 1101 to decimal.** Multiply each bit by its place value:
- 1 x 2³ = 8
- 1 x 2² = 4
- 0 x 2¹ = 0
- 1 x 2⁰ = 1

Total = 8 + 4 + 0 + 1 = **13**. (This confirms part (a).)

**(c) 11011010 to hexadecimal.** Group into fours from the right: 1101 1010.
- 1101 = 13 = D
- 1010 = 10 = A

So 11011010 = **DA** in hexadecimal.

**(d) The character '0'.** In ASCII the character '0' is stored as **48**. It is not the number 0 because ASCII assigns each character its own code — 'A' is 65, 'a' is 97, and the character '0' is 48. The code 48 represents the printed symbol, which the computer treats differently from the numeric value zero.

**Answers:** (a) 1101 (b) 13 (c) DA (d) 48, because ASCII gives each character a distinct code.`,
          quiz: [
            {
              prompt: "The base of the binary number system is",
              options: ["2", "8", "10", "16"],
              correctIndex: 0,
              explanation: "Binary is base 2, using digits 0 and 1.",
            },
            {
              prompt: "The hexadecimal system uses the digits",
              options: ["0-1", "0-7", "0-9", "0-9 and A-F"],
              correctIndex: 3,
              explanation: "Hexadecimal is base 16 with digits 0-9 and A-F.",
            },
            {
              prompt: "The octal number system has a base of",
              options: ["2", "8", "10", "16"],
              correctIndex: 1,
              explanation: "Octal is base 8, using digits 0 to 7.",
            },
            {
              prompt: "In hexadecimal, the letter C represents",
              options: ["10", "11", "12", "13"],
              correctIndex: 2,
              explanation: "A=10, B=11, C=12, D=13, E=14, F=15.",
            },
            {
              prompt: "To convert decimal to binary you",
              options: [
                "multiply by 2 repeatedly",
                "divide by 2 and record remainders",
                "add 2 each time",
                "subtract 2 each time",
              ],
              correctIndex: 1,
              explanation: "Divide by 2 until the quotient is 0, then read remainders upward.",
            },
            {
              prompt: "When converting decimal to binary, the remainders are read",
              options: ["top to bottom", "bottom to top", "left to right", "in any order"],
              correctIndex: 1,
              explanation: "The last remainder is the most significant bit.",
            },
            {
              prompt: "Convert 10 (decimal) to binary.",
              options: ["1010", "1000", "1100", "1001"],
              correctIndex: 0,
              explanation: "10 divided by 2 gives remainders read upward as 1010.",
            },
            {
              prompt: "Convert 1010 (binary) to decimal.",
              options: ["8", "9", "10", "12"],
              correctIndex: 2,
              explanation: "1 x 8 + 0 x 4 + 1 x 2 + 0 x 1 = 10.",
            },
            {
              prompt: "Binary to decimal uses each bit multiplied by",
              options: [
                "10 to a power",
                "2 raised to its position power",
                "16 to a power",
                "the bit itself",
              ],
              correctIndex: 1,
              explanation: "Each bit is multiplied by 2 to the power of its place.",
            },
            {
              prompt: "To convert binary to hexadecimal, group the bits into",
              options: [
                "groups of 3 from the left",
                "groups of 4 from the right",
                "groups of 8",
                "groups of 2",
              ],
              correctIndex: 1,
              explanation: "Each group of four bits maps to one hex digit, starting from the right.",
            },
            {
              prompt: "The binary group 1101 equals which hexadecimal digit?",
              options: ["B", "C", "D", "E"],
              correctIndex: 2,
              explanation: "1101 = 13 = D.",
            },
            {
              prompt: "The binary group 1011 equals which hexadecimal digit?",
              options: ["A", "B", "C", "D"],
              correctIndex: 1,
              explanation: "1011 = 11 = B.",
            },
            {
              prompt: "1111011011 in binary equals which hexadecimal number?",
              options: ["3DB", "3BD", "D3B", "B3D"],
              correctIndex: 0,
              explanation: "Grouped as 0011 1101 1011 = 3, D, B.",
            },
            {
              prompt: "ASCII assigns characters numeric values in the range",
              options: ["0 to 9", "0 to 127", "0 to 1000", "1 to 26"],
              correctIndex: 1,
              explanation: "Standard ASCII uses values 0 to 127.",
            },
            {
              prompt: "In ASCII, the character 'A' is",
              options: ["48", "65", "97", "33"],
              correctIndex: 1,
              explanation: "'A' = 65, 'a' = 97, and the character '0' = 48.",
            },
            {
              prompt: "In ASCII, the character '0' is stored as",
              options: ["0", "48", "65", "97"],
              correctIndex: 1,
              explanation: "The character '0' is code 48, not the number 0.",
            },
            {
              prompt: "ASCII values are ultimately stored by the computer as",
              options: ["Decimal", "Binary (0s and 1s)", "Hexadecimal only", "Letters"],
              correctIndex: 1,
              explanation: "Each ASCII value is converted into binary for the computer.",
            },
            {
              prompt: "Unicode is used because it can",
              options: [
                "only store 128 characters",
                "represent over 140,000 characters and many scripts",
                "make files smaller than ASCII",
                "replace binary",
              ],
              correctIndex: 1,
              explanation: "Unicode extends ASCII to over 140,000 characters.",
            },
            {
              prompt: "Which is a Unicode encoding format?",
              options: ["UTF-8", "GIF", "MP3", "EXE"],
              correctIndex: 0,
              explanation: "Unicode supports UTF-8, UTF-16 and UTF-32.",
            },
            {
              prompt: "Hexadecimal is useful mainly because it",
              options: [
                "is the only base a computer understands",
                "is a compact way to write long binary numbers",
                "processes faster than binary",
                "is required for addition",
              ],
              correctIndex: 1,
              explanation: "One hex digit stands for four binary digits, shortening binary.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Name the four number systems used in computing, giving the base and the digits used by each.",
              answerKey:
                "Binary, base 2, digits 0 and 1. Octal, base 8, digits 0 to 7. Decimal, base 10, digits 0 to 9. Hexadecimal, base 16, digits 0 to 9 and A to F. Award 1 mark per system named with base and digits, up to 8.",
              marks: 8,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Convert: (a) 13 from decimal to binary, (b) 1101 from binary to decimal.",
              answerKey:
                "(a) 13 / 2 = 6 r1; 6 / 2 = 3 r0; 3 / 2 = 1 r1; 1 / 2 = 0 r1; read upward = 1101. (b) 1 x 8 + 1 x 4 + 0 x 2 + 1 x 1 = 13. Award 4 marks per conversion with working shown.",
              marks: 8,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt: "Convert 11011010 from binary to hexadecimal.",
              options: ["DA", "AD", "D8", "BA"],
              correctIndex: 0,
              answerKey:
                "Group into fours from the right: 1101 1010. 1101 = D, 1010 = A, giving DA. Option A.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain how ASCII represents text, and state why the character '0' is not the same as the number 0.",
              answerKey:
                "ASCII assigns each character a numeric value from 0 to 127, which is then converted into binary. Each character has a unique code, for example 'A' = 65 and 'a' = 97. The character '0' is stored as code 48, which represents the printed symbol; it is distinct from the numeric value zero because ASCII gives each character its own separate code. Award 5 marks for the ASCII explanation and 3 marks for the '0' versus 0 point.",
              marks: 8,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain how data is represented inside a computer. Cover the four number systems, conversion between decimal and binary and between binary and hexadecimal, and the representation of text through ASCII and Unicode.",
              answerKey:
                "Award marks as follows: the four number systems tabulated with bases and digits, including the hexadecimal letters A to F, 8 marks; decimal to binary by repeated division with remainders read upward, worked with an example, 10 marks; binary to decimal using place values, worked, 8 marks; binary to hexadecimal by grouping bits in fours from the right, worked, 10 marks; ASCII representing characters as codes 0 to 127 converted to binary, with example codes and the point that the character '0' is code 48, 10 marks; Unicode extending ASCII to over 140,000 characters with encoding formats such as UTF-8, 6 marks; organisation and accuracy of working, 4 marks. A learner who shows no conversion working should lose those method marks.",
              marks: 56,
            },
          ],
        },
      ],
    },
  ],
};
