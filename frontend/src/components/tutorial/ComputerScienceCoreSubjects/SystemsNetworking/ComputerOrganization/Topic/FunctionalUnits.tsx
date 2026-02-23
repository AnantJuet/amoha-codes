import React from 'react';

const FunctionalUnits: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Functional Units of Computer
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A digital computer consists of several functional units that work together to process data
      and execute instructions. These units are interconnected and each performs a specific role
      in the overall operation of the computer system. Understanding these functional units is
      fundamental to comprehending how computers work.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Block Diagram of Computer Functional Units:

                    +---------------------------+
                    |      Input Unit           |
                    | (Keyboard, Mouse, etc.)   |
                    +-------------+-------------+
                                  |
                                  v
+------------------+    +------------------+    +------------------+
|                  |    |                  |    |                  |
|   Main Memory    |<-->|       CPU        |<-->|   Output Unit    |
|   (RAM/ROM)      |    |  +------------+  |    | (Monitor, etc.)  |
|                  |    |  |  Control   |  |    |                  |
+------------------+    |  |   Unit     |  |    +------------------+
                        |  +------------+  |
                        |  +------------+  |
                        |  |    ALU     |  |
                        |  +------------+  |
                        |  +------------+  |
                        |  | Registers  |  |
                        |  +------------+  |
                        +--------+---------+
                                 |
                                 v
                    +---------------------------+
                    |    Secondary Storage      |
                    |    (HDD, SSD, etc.)       |
                    +---------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Input Unit</h2>
    <p className="leading-relaxed">
      The Input Unit accepts data and instructions from the outside world and converts them into
      a form that the computer can understand. It serves as the interface between the user and
      the computer system.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Accepts data from external devices</li>
      <li>Converts data into binary form</li>
      <li>Sends data to memory for storage</li>
      <li>Examples: Keyboard, Mouse, Scanner, Microphone, Camera</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">2. Output Unit</h2>
    <p className="leading-relaxed">
      The Output Unit takes the processed data from the computer and presents it to the user in
      a human-readable form. It converts the binary data back into a format that humans can
      understand and use.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Receives processed data from memory</li>
      <li>Converts binary data to human-readable form</li>
      <li>Presents results to the user</li>
      <li>Examples: Monitor, Printer, Speaker, Projector</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">3. Memory Unit</h2>
    <p className="leading-relaxed">
      The Memory Unit stores data, instructions, and intermediate results. It is divided into
      primary memory (main memory) and secondary memory (auxiliary storage).
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Characteristics</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Primary Memory</td>
            <td className="p-3 border">Fast, volatile, directly accessible by CPU</td>
            <td className="p-3 border">RAM, ROM, Cache</td>
          </tr>
          <tr>
            <td className="p-3 border">Secondary Memory</td>
            <td className="p-3 border">Slower, non-volatile, larger capacity</td>
            <td className="p-3 border">HDD, SSD, USB Drive</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Central Processing Unit (CPU)</h2>
    <p className="leading-relaxed">
      The CPU is the brain of the computer. It performs all the processing operations and
      controls the activities of all other units. The CPU consists of three main components:
    </p>

    <h3 className="text-2xl font-semibold mt-6">4.1 Control Unit (CU)</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Directs and coordinates all computer operations</li>
      <li>Fetches instructions from memory</li>
      <li>Decodes instructions to determine required operations</li>
      <li>Generates control signals to execute instructions</li>
      <li>Manages data flow between CPU and other units</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">4.2 Arithmetic Logic Unit (ALU)</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Performs arithmetic operations (addition, subtraction, multiplication, division)</li>
      <li>Performs logical operations (AND, OR, NOT, XOR)</li>
      <li>Performs comparison operations (equal, greater than, less than)</li>
      <li>Produces status flags based on operation results</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">4.3 Registers</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>High-speed storage locations within the CPU</li>
      <li>Hold data, addresses, and instructions temporarily</li>
      <li>Much faster than main memory access</li>
      <li>Types: General Purpose, Special Purpose (PC, IR, MAR, MDR)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Interconnection of Units</h2>
    <p className="leading-relaxed">
      These functional units are connected through a system of buses that allow data, addresses,
      and control signals to flow between components:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Data Bus:</strong> Carries actual data between components (bidirectional)</li>
      <li><strong>Address Bus:</strong> Carries memory addresses (unidirectional from CPU)</li>
      <li><strong>Control Bus:</strong> Carries control signals (bidirectional)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>A computer has five main functional units: Input, Output, Memory, ALU, and Control Unit</li>
        <li>The CPU contains the Control Unit, ALU, and Registers</li>
        <li>All units are interconnected through the system bus</li>
        <li>The Control Unit coordinates the operation of all other units</li>
        <li>Memory holds both data and instructions for processing</li>
      </ul>
    </div>
  </div>
);

export default FunctionalUnits;
