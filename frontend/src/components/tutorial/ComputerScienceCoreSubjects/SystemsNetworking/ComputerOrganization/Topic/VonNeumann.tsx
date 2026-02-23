import React from 'react';

const VonNeumann: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Von Neumann Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Von Neumann Architecture, proposed by mathematician John von Neumann in 1945, is the
      foundational design for most modern computers. Its key innovation is the stored-program
      concept, where both instructions and data are stored in the same memory, allowing programs
      to be modified and stored like data.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Characteristics</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Stored Program Concept:</strong> Both program instructions and data are stored
        in the same memory unit.
      </li>
      <li>
        <strong>Sequential Execution:</strong> Instructions are fetched and executed one at a
        time in sequence (unless altered by control flow instructions).
      </li>
      <li>
        <strong>Single Memory:</strong> One memory system holds both instructions and data,
        accessed via a single bus.
      </li>
      <li>
        <strong>Central Processing Unit:</strong> A single CPU fetches instructions, decodes
        them, and executes them.
      </li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Von Neumann Architecture:

+------------------+         +------------------+
|   Input Device   |         |  Output Device   |
+--------+---------+         +--------+---------+
         |                            ^
         v                            |
+--------+---------+         +--------+---------+
|                  |<--------|                  |
|      Memory      |         |       CPU        |
| (Instructions +  |-------->|  +------------+  |
|     Data)        |         |  |Control Unit|  |
|                  |         |  +------------+  |
|  +-----------+   |         |  +------------+  |
|  |Instructions|  |         |  |    ALU     |  |
|  +-----------+   |         |  +------------+  |
|  +-----------+   |         |  +------------+  |
|  |   Data    |   |         |  | Registers  |  |
|  +-----------+   |         |  +------------+  |
+------------------+         +------------------+
         ^                            |
         |____________________________|
              (Single System Bus)

Note: Same bus is used for both instruction and data transfer
      This creates the "Von Neumann Bottleneck"`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Components</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Function</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Memory Unit</td>
            <td className="p-3 border">Stores both program instructions and data in the same address space</td>
          </tr>
          <tr>
            <td className="p-3 border">Control Unit</td>
            <td className="p-3 border">Fetches instructions from memory, decodes them, and controls execution</td>
          </tr>
          <tr>
            <td className="p-3 border">ALU</td>
            <td className="p-3 border">Performs arithmetic and logical operations on data</td>
          </tr>
          <tr>
            <td className="p-3 border">Registers</td>
            <td className="p-3 border">Temporary storage for operands and intermediate results</td>
          </tr>
          <tr>
            <td className="p-3 border">I/O Devices</td>
            <td className="p-3 border">Interface with the external world for input and output</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Instruction Cycle (Fetch-Decode-Execute)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`The Von Neumann Instruction Cycle:

1. FETCH
   - Read instruction from memory at address in PC
   - Increment PC to point to next instruction
   - Store instruction in IR (Instruction Register)

2. DECODE
   - Control Unit examines IR
   - Determines the operation to perform
   - Identifies operands and their locations

3. EXECUTE
   - Perform the operation (ALU computation, data transfer, etc.)
   - Write results to register or memory
   - Update status flags if needed

4. Repeat from step 1

Timeline:
+-------+--------+---------+-------+--------+---------+
| Fetch | Decode | Execute | Fetch | Decode | Execute |  ...
+-------+--------+---------+-------+--------+---------+
|<-- Instruction 1 -->|    |<-- Instruction 2 -->|`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Von Neumann Bottleneck</h2>
    <p className="leading-relaxed">
      The major limitation of Von Neumann Architecture is the "Von Neumann Bottleneck." Since
      both instructions and data share the same memory bus, the CPU often has to wait while
      fetching data or instructions. This creates a performance limitation because:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li>CPU speed has increased faster than memory speed</li>
      <li>Only one memory access can happen at a time</li>
      <li>The bus becomes a limiting factor in performance</li>
      <li>CPU may be idle while waiting for memory access</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Flexibility:</strong> Programs can be easily modified as they are stored in memory</li>
      <li><strong>Simplicity:</strong> Single memory and bus simplifies hardware design</li>
      <li><strong>Self-Modifying Code:</strong> Programs can modify themselves during execution</li>
      <li><strong>Unified Memory:</strong> Efficient use of memory for both code and data</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Bottleneck:</strong> Single bus limits data transfer rate</li>
      <li><strong>Sequential Processing:</strong> Cannot fetch instruction and data simultaneously</li>
      <li><strong>Security Risk:</strong> Programs stored in same memory as data can be vulnerable</li>
      <li><strong>Memory Dependency:</strong> Performance limited by memory access speed</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Von Neumann Architecture uses a single memory for both instructions and data</li>
        <li>The stored-program concept allows programs to be modified like data</li>
        <li>Instructions are executed sequentially following the fetch-decode-execute cycle</li>
        <li>The Von Neumann Bottleneck is a major performance limitation</li>
        <li>Most modern computers are based on this architecture with various enhancements</li>
      </ul>
    </div>
  </div>
);

export default VonNeumann;
