import React from 'react';

const ComputerGenerations: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Computer Generations (1st to 5th)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The evolution of computers is classified into five distinct generations, each marked by a
      significant technological advancement that dramatically improved computing capability,
      reduced size, lowered costs, and increased reliability. Understanding these generations
      helps appreciate how computing technology has transformed from room-sized machines to
      the powerful devices we use today.
    </p>

    <h2 className="text-3xl font-bold mt-8">Overview of Computer Generations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Generation</th>
            <th className="p-3 border">Period</th>
            <th className="p-3 border">Key Technology</th>
            <th className="p-3 border">Primary Characteristic</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">First</td>
            <td className="p-3 border">1940-1956</td>
            <td className="p-3 border">Vacuum Tubes</td>
            <td className="p-3 border">Large, power-hungry machines</td>
          </tr>
          <tr>
            <td className="p-3 border">Second</td>
            <td className="p-3 border">1956-1963</td>
            <td className="p-3 border">Transistors</td>
            <td className="p-3 border">Smaller, more reliable</td>
          </tr>
          <tr>
            <td className="p-3 border">Third</td>
            <td className="p-3 border">1964-1971</td>
            <td className="p-3 border">Integrated Circuits (ICs)</td>
            <td className="p-3 border">Miniaturization begins</td>
          </tr>
          <tr>
            <td className="p-3 border">Fourth</td>
            <td className="p-3 border">1971-Present</td>
            <td className="p-3 border">Microprocessors (VLSI)</td>
            <td className="p-3 border">Personal computers emerge</td>
          </tr>
          <tr>
            <td className="p-3 border">Fifth</td>
            <td className="p-3 border">Present-Future</td>
            <td className="p-3 border">AI & Parallel Processing</td>
            <td className="p-3 border">Intelligent computing</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">First Generation (1940-1956)</h2>
    <p className="leading-relaxed">
      The first generation of computers used vacuum tubes as the primary electronic component
      for circuitry and magnetic drums for memory. These machines were enormous, consuming
      vast amounts of electricity and generating significant heat. Programming was done in
      machine language, making them difficult to operate and maintain.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`First Generation Computer Structure:

+--------------------------------------------------+
|                    ENIAC (1945)                  |
|                                                  |
|  +------------+  +------------+  +------------+  |
|  | Vacuum     |  | Vacuum     |  | Vacuum     |  |
|  | Tube Panel |  | Tube Panel |  | Tube Panel |  |
|  | (1000s)    |  | (1000s)    |  | (1000s)    |  |
|  +------------+  +------------+  +------------+  |
|                                                  |
|  +------------------+  +--------------------+    |
|  | Magnetic Drum    |  | Punch Card Reader  |    |
|  | Memory           |  | (Input)            |    |
|  +------------------+  +--------------------+    |
|                                                  |
|  Size: 1800 sq ft    Weight: 30 tons            |
|  Power: 150 kW       Tubes: 18,000              |
|  Speed: 5,000 ops/sec                           |
+--------------------------------------------------+

Vacuum Tube:
     ___________
    /           \
   |   Anode     |
   |     O       |
   |   Grid |    |
   |     ===     |
   |  Cathode    |
   |    ___      |
    \___| |_____/
        | |
      Heater`}
      </pre>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Technology</td>
            <td className="p-3 border">Vacuum tubes, magnetic drums</td>
          </tr>
          <tr>
            <td className="p-3 border">Size</td>
            <td className="p-3 border">Occupied entire rooms (up to 1800 sq ft)</td>
          </tr>
          <tr>
            <td className="p-3 border">Power</td>
            <td className="p-3 border">Consumed 150-200 kilowatts</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Milliseconds (thousands of operations/sec)</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">2-4 KB</td>
          </tr>
          <tr>
            <td className="p-3 border">Input/Output</td>
            <td className="p-3 border">Punch cards, paper tape</td>
          </tr>
          <tr>
            <td className="p-3 border">Programming</td>
            <td className="p-3 border">Machine language (binary)</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">ENIAC, UNIVAC I, EDVAC, IBM 701</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Second Generation (1956-1963)</h2>
    <p className="leading-relaxed">
      The invention of the transistor revolutionized computing. Transistors replaced vacuum
      tubes, making computers smaller, faster, more reliable, and more energy-efficient.
      This generation introduced assembly language and early high-level programming languages
      like FORTRAN and COBOL, making programming more accessible.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Second Generation Improvements:

Vacuum Tube vs Transistor:
+----------------+    +----------------+
| Vacuum Tube    |    | Transistor     |
|                |    |                |
| Size: 5-6 cm   |    | Size: 5 mm     |
| Power: 5-10 W  | -> | Power: 0.1 W   |
| Life: 1000 hrs |    | Life: 100,000+ |
| Heat: High     |    | Heat: Low      |
| Cost: $8-10    |    | Cost: $1-2     |
+----------------+    +----------------+

IBM 7090 Architecture:
+----------------------------------+
|          IBM 7090 (1959)         |
|                                  |
|  +----------+  +----------+      |
|  |Transistor|  |Transistor|      |
|  |Circuits  |  |Circuits  |      |
|  +----------+  +----------+      |
|                                  |
|  +------------------+            |
|  | Magnetic Core    |            |
|  | Memory (32 KB)   |            |
|  +------------------+            |
|                                  |
|  Speed: 229,000 ops/sec          |
|  Size: Large cabinet             |
|  Power: 30 kW                    |
+----------------------------------+`}
      </pre>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Technology</td>
            <td className="p-3 border">Transistors, magnetic core memory</td>
          </tr>
          <tr>
            <td className="p-3 border">Size</td>
            <td className="p-3 border">Large cabinets (smaller than 1st gen)</td>
          </tr>
          <tr>
            <td className="p-3 border">Power</td>
            <td className="p-3 border">Lower power consumption (kilowatts)</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Microseconds (hundreds of thousands ops/sec)</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">32 KB to 64 KB</td>
          </tr>
          <tr>
            <td className="p-3 border">Programming</td>
            <td className="p-3 border">Assembly language, FORTRAN, COBOL</td>
          </tr>
          <tr>
            <td className="p-3 border">Storage</td>
            <td className="p-3 border">Magnetic tape, magnetic disks</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">IBM 7090, IBM 1401, UNIVAC LARC, CDC 1604</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Third Generation (1964-1971)</h2>
    <p className="leading-relaxed">
      Integrated circuits (ICs) marked the third generation, where multiple transistors were
      placed on a single silicon chip. This innovation dramatically reduced size and cost while
      improving speed and reliability. Operating systems, time-sharing, and multiprogramming
      became possible, and computers became accessible to a broader range of businesses.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Integrated Circuit Technology:

Discrete Components vs IC:
+--------------------+      +--------------------+
| Discrete Board     |      | Integrated Circuit |
|                    |      |                    |
|  O--O  O--O  O--O  |      |   +-----------+    |
|  |  |  |  |  |  |  |  ->  |   |  _______  |    |
|  O--O  O--O  O--O  |      |   | |_|_|_|_| |    |
|                    |      |   | |_|_|_|_| |    |
| 100s of parts      |      |   +-----------+    |
| Size: Board        |      | 1000s transistors  |
+--------------------+      | Size: Small chip   |
                            +--------------------+

IBM System/360 Family:
+----------------------------------------+
|            IBM System/360              |
|                                        |
|  +----------+  +-----------+           |
|  |   CPU    |  |  Memory   |           |
|  | (IC-based)|  | (Core)   |           |
|  +----------+  +-----------+           |
|                                        |
|  Family of compatible computers:       |
|  Model 30: Entry level (8 KB - 64 KB)  |
|  Model 50: Mid-range (128 KB - 512 KB) |
|  Model 75: High-end (512 KB - 1 MB)    |
|                                        |
|  Innovation: Software compatibility    |
|  across all models in the family       |
+----------------------------------------+`}
      </pre>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Technology</td>
            <td className="p-3 border">Integrated Circuits (SSI/MSI)</td>
          </tr>
          <tr>
            <td className="p-3 border">Size</td>
            <td className="p-3 border">Mini-computers (desk-sized)</td>
          </tr>
          <tr>
            <td className="p-3 border">Power</td>
            <td className="p-3 border">Much lower power requirements</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Nanoseconds (millions of ops/sec)</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">1 MB to 4 MB</td>
          </tr>
          <tr>
            <td className="p-3 border">Operating System</td>
            <td className="p-3 border">Time-sharing, multiprogramming</td>
          </tr>
          <tr>
            <td className="p-3 border">Programming</td>
            <td className="p-3 border">High-level languages (BASIC, Pascal, C)</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">IBM System/360, PDP-8, CDC 6600</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fourth Generation (1971-Present)</h2>
    <p className="leading-relaxed">
      The microprocessor revolutionized computing by placing an entire CPU on a single chip.
      Large Scale Integration (LSI) and Very Large Scale Integration (VLSI) allowed millions,
      then billions of transistors on a single chip. This generation gave birth to personal
      computers, making computing accessible to individuals and small businesses.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Microprocessor Evolution:

Intel 4004 (1971) - First Microprocessor:
+---------------------------+
|  2,300 transistors        |
|  4-bit processor          |
|  Clock: 740 kHz           |
|  10 micron process        |
+---------------------------+

Moore's Law Progression:
Year    Processor       Transistors     Process
----    ---------       -----------     -------
1971    Intel 4004      2,300           10 um
1978    Intel 8086      29,000          3 um
1989    Intel 486       1.2 million     1 um
1993    Pentium         3.1 million     800 nm
2000    Pentium 4       42 million      180 nm
2006    Core 2 Duo      291 million     65 nm
2012    Core i7         1.4 billion     22 nm
2020    M1              16 billion      5 nm
2023    M3 Max          92 billion      3 nm

PC Revolution:
+------------------------------------+
|         Personal Computer          |
|                                    |
|  +----------+  +----------+        |
|  | Monitor  |  | Keyboard |        |
|  +----------+  +----------+        |
|       |                            |
|  +----+----+                       |
|  | System  | <- Microprocessor     |
|  | Unit    |    Memory (RAM)       |
|  +---------+    Storage (HDD/SSD)  |
|                                    |
|  Apple II (1977), IBM PC (1981)    |
+------------------------------------+`}
      </pre>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Technology</td>
            <td className="p-3 border">VLSI, ULSI microprocessors</td>
          </tr>
          <tr>
            <td className="p-3 border">Size</td>
            <td className="p-3 border">Desktop, laptop, handheld devices</td>
          </tr>
          <tr>
            <td className="p-3 border">Power</td>
            <td className="p-3 border">Watts to milliwatts</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Picoseconds (billions of ops/sec)</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">GBs to TBs</td>
          </tr>
          <tr>
            <td className="p-3 border">Networks</td>
            <td className="p-3 border">Internet, LANs, wireless</td>
          </tr>
          <tr>
            <td className="p-3 border">Interface</td>
            <td className="p-3 border">GUI, touch, voice</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">PCs, Macs, smartphones, tablets</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fifth Generation (Present-Future)</h2>
    <p className="leading-relaxed">
      The fifth generation focuses on artificial intelligence, machine learning, and natural
      language processing. These computers aim to understand and respond to human language,
      learn from experience, and make decisions. Parallel processing, quantum computing, and
      neural networks are key technologies driving this generation forward.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Fifth Generation Technologies:

1. Artificial Intelligence:
   +-------------------------------------------+
   |           AI System Architecture          |
   |                                           |
   |  +-------------+    +----------------+    |
   |  | Natural     |    | Machine        |    |
   |  | Language    |--->| Learning       |    |
   |  | Processing  |    | Models         |    |
   |  +-------------+    +----------------+    |
   |         |                  |              |
   |         v                  v              |
   |  +-------------+    +----------------+    |
   |  | Speech      |    | Neural         |    |
   |  | Recognition |    | Networks       |    |
   |  +-------------+    +----------------+    |
   +-------------------------------------------+

2. Parallel Processing:
   +-------+  +-------+  +-------+  +-------+
   | Core 1|  | Core 2|  | Core 3|  | Core N|
   +---+---+  +---+---+  +---+---+  +---+---+
       |          |          |          |
       +----------+----------+----------+
                      |
            +---------+---------+
            |  Shared Memory    |
            +-------------------+

3. Quantum Computing:
   Classical Bit: 0 or 1
   Quantum Qubit: 0 AND 1 simultaneously (superposition)

   +-------------------+
   |  Quantum States   |
   |                   |
   |  |0> + |1>        |  <- Superposition
   |  |00> + |11>      |  <- Entanglement
   +-------------------+

   Potential: Solve problems impossible for classical computers`}
      </pre>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Technology</td>
            <td className="p-3 border">AI chips, quantum processors, neuromorphic computing</td>
          </tr>
          <tr>
            <td className="p-3 border">Focus</td>
            <td className="p-3 border">Artificial intelligence, machine learning</td>
          </tr>
          <tr>
            <td className="p-3 border">Processing</td>
            <td className="p-3 border">Parallel, distributed, quantum</td>
          </tr>
          <tr>
            <td className="p-3 border">Interface</td>
            <td className="p-3 border">Natural language, gesture, brain-computer</td>
          </tr>
          <tr>
            <td className="p-3 border">Capabilities</td>
            <td className="p-3 border">Self-learning, reasoning, problem-solving</td>
          </tr>
          <tr>
            <td className="p-3 border">Applications</td>
            <td className="p-3 border">Virtual assistants, autonomous vehicles, robotics</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">IBM Watson, Google TPU, IBM Quantum, GPT-4</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Generation Comparison Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Aspect</th>
            <th className="p-2 border">1st Gen</th>
            <th className="p-2 border">2nd Gen</th>
            <th className="p-2 border">3rd Gen</th>
            <th className="p-2 border">4th Gen</th>
            <th className="p-2 border">5th Gen</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-2 border">Hardware</td>
            <td className="p-2 border">Vacuum Tubes</td>
            <td className="p-2 border">Transistors</td>
            <td className="p-2 border">ICs</td>
            <td className="p-2 border">VLSI/ULSI</td>
            <td className="p-2 border">AI/Quantum</td>
          </tr>
          <tr>
            <td className="p-2 border">Speed</td>
            <td className="p-2 border">ms</td>
            <td className="p-2 border">us</td>
            <td className="p-2 border">ns</td>
            <td className="p-2 border">ps</td>
            <td className="p-2 border">Beyond</td>
          </tr>
          <tr>
            <td className="p-2 border">Memory</td>
            <td className="p-2 border">KB</td>
            <td className="p-2 border">KB</td>
            <td className="p-2 border">MB</td>
            <td className="p-2 border">GB-TB</td>
            <td className="p-2 border">Unlimited</td>
          </tr>
          <tr>
            <td className="p-2 border">Language</td>
            <td className="p-2 border">Machine</td>
            <td className="p-2 border">Assembly</td>
            <td className="p-2 border">High-level</td>
            <td className="p-2 border">OOP/4GL</td>
            <td className="p-2 border">Natural</td>
          </tr>
          <tr>
            <td className="p-2 border">Size</td>
            <td className="p-2 border">Room</td>
            <td className="p-2 border">Cabinet</td>
            <td className="p-2 border">Desk</td>
            <td className="p-2 border">Pocket</td>
            <td className="p-2 border">Varied</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>First Generation (1940-1956): Vacuum tubes, room-sized, machine language programming</li>
        <li>Second Generation (1956-1963): Transistors, assembly language, FORTRAN and COBOL</li>
        <li>Third Generation (1964-1971): Integrated circuits, operating systems, time-sharing</li>
        <li>Fourth Generation (1971-Present): Microprocessors, personal computers, GUIs, internet</li>
        <li>Fifth Generation (Present-Future): AI, parallel processing, natural language, quantum computing</li>
        <li>Each generation brought dramatic improvements in size, cost, speed, and reliability</li>
        <li>Moore's Law predicted transistor doubling every 18-24 months, driving fourth generation</li>
        <li>The evolution reflects a shift from hardware-centric to software and intelligence-centric computing</li>
      </ul>
    </div>
  </div>
);

export default ComputerGenerations;
