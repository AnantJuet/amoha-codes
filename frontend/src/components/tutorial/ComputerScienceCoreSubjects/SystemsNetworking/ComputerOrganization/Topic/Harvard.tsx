import React from 'react';

const Harvard: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Harvard Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Harvard Architecture is a computer architecture that uses physically separate storage and
      signal pathways for instructions and data. Named after the Harvard Mark I relay-based
      computer, this architecture was developed in the 1940s. Unlike the Von Neumann architecture,
      Harvard Architecture allows simultaneous access to instructions and data, making it
      particularly efficient for digital signal processing and embedded systems.
    </p>

    <h2 className="text-3xl font-bold mt-8">Core Concept</h2>
    <p className="leading-relaxed">
      The fundamental principle of Harvard Architecture is the separation of instruction and data
      memories. This separation provides dedicated pathways for each type of information, enabling
      the CPU to fetch an instruction and access data memory at the same time. This parallel
      operation significantly improves performance compared to sequential access in Von Neumann
      systems.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Harvard Architecture:

+------------------+                    +------------------+
|   Input Device   |                    |  Output Device   |
+--------+---------+                    +--------+---------+
         |                                       ^
         v                                       |
+--------+---------+                    +--------+---------+
| Instruction      |                    |                  |
| Memory           |<------------------>|                  |
|                  |  Instruction Bus   |                  |
| +-------------+  |                    |       CPU        |
| | Program     |  |                    |  +------------+  |
| | Instructions|  |                    |  |Control Unit|  |
| +-------------+  |                    |  +------------+  |
+------------------+                    |  +------------+  |
                                        |  |    ALU     |  |
+------------------+                    |  +------------+  |
|  Data Memory     |<------------------>|  +------------+  |
|                  |     Data Bus       |  | Registers  |  |
| +-------------+  |                    |  +------------+  |
| |   Data      |  |                    |                  |
| +-------------+  |                    +------------------+
+------------------+

Note: Separate buses allow simultaneous instruction fetch and data access
      This eliminates the Von Neumann Bottleneck`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Characteristics</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Separate Memory Spaces:</strong> Instructions and data are stored in physically
        distinct memory units with their own address spaces.
      </li>
      <li>
        <strong>Dual Bus System:</strong> Independent buses for instruction and data transfer
        allow parallel access to both memories.
      </li>
      <li>
        <strong>Simultaneous Access:</strong> The CPU can fetch the next instruction while
        reading or writing data from/to memory.
      </li>
      <li>
        <strong>Fixed Instruction Width:</strong> Instructions typically have a fixed width,
        simplifying the fetch unit design.
      </li>
      <li>
        <strong>Protection by Design:</strong> Code and data separation provides inherent
        protection against accidental or malicious code modification.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Architecture Components</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Instruction Memory</td>
            <td className="p-3 border">Dedicated storage for program instructions, typically ROM or flash memory</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Memory</td>
            <td className="p-3 border">Separate storage for program data, variables, and stack (usually RAM)</td>
          </tr>
          <tr>
            <td className="p-3 border">Instruction Bus</td>
            <td className="p-3 border">Dedicated pathway connecting CPU to instruction memory</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Bus</td>
            <td className="p-3 border">Separate pathway connecting CPU to data memory</td>
          </tr>
          <tr>
            <td className="p-3 border">Program Counter</td>
            <td className="p-3 border">Points to the next instruction in instruction memory</td>
          </tr>
          <tr>
            <td className="p-3 border">Control Unit</td>
            <td className="p-3 border">Manages instruction fetch and execution, coordinates both buses</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Instruction Cycle</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Harvard Architecture Instruction Cycle (Pipelined):

Stage 1: FETCH (via Instruction Bus)
  - Read instruction from instruction memory
  - Increment Program Counter
  - No conflict with data access

Stage 2: DECODE
  - Parse instruction opcode and operands
  - Determine required data memory access

Stage 3: EXECUTE (via Data Bus simultaneously)
  - Perform ALU operation
  - Read/Write data memory if needed
  - Next instruction can be fetched in parallel

Pipeline Visualization:
Instruction 1: |Fetch|Decode|Execute|
Instruction 2:       |Fetch |Decode |Execute|
Instruction 3:              |Fetch  |Decode |Execute|

Time -->

Key Advantage: Fetch and data access occur simultaneously,
              increasing throughput compared to Von Neumann`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Harvard vs Von Neumann Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Harvard Architecture</th>
            <th className="p-3 border">Von Neumann Architecture</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Memory Structure</td>
            <td className="p-3 border">Separate instruction and data memory</td>
            <td className="p-3 border">Unified memory for both</td>
          </tr>
          <tr>
            <td className="p-3 border">Bus System</td>
            <td className="p-3 border">Dual bus (instruction + data)</td>
            <td className="p-3 border">Single shared bus</td>
          </tr>
          <tr>
            <td className="p-3 border">Performance</td>
            <td className="p-3 border">Higher throughput, no bottleneck</td>
            <td className="p-3 border">Limited by bus contention</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">More complex hardware design</td>
            <td className="p-3 border">Simpler design</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost</td>
            <td className="p-3 border">Higher due to dual buses</td>
            <td className="p-3 border">Lower cost</td>
          </tr>
          <tr>
            <td className="p-3 border">Flexibility</td>
            <td className="p-3 border">Fixed memory allocation</td>
            <td className="p-3 border">Flexible memory usage</td>
          </tr>
          <tr>
            <td className="p-3 border">Security</td>
            <td className="p-3 border">Better code protection</td>
            <td className="p-3 border">Vulnerable to code injection</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Modified Harvard Architecture</h2>
    <p className="leading-relaxed">
      Modern processors often use a Modified Harvard Architecture that combines benefits of both
      approaches. This design maintains separate instruction and data caches for performance while
      providing a unified view of memory to the programmer.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Modified Harvard Architecture:

+------------------+    +------------------+
| Instruction      |    |  Data Cache      |
| Cache (L1)       |    |    (L1)          |
+--------+---------+    +--------+---------+
         |                       |
         v                       v
    +---------+            +---------+
    | I-Bus   |            | D-Bus   |
    +---------+            +---------+
         |                       |
         +----------+------------+
                    |
                    v
           +----------------+
           | Unified L2     |
           | Cache          |
           +----------------+
                    |
                    v
           +----------------+
           | Main Memory    |
           | (Unified)      |
           +----------------+

Benefits:
- Cache-level separation for performance
- Unified main memory for flexibility
- Used in most modern CPUs (x86, ARM)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Digital Signal Processors (DSPs):</strong> Require high-speed data processing
        with predictable timing for audio, video, and telecommunications.
      </li>
      <li>
        <strong>Microcontrollers:</strong> AVR, PIC, and ARM Cortex-M series use Harvard or
        Modified Harvard architectures for embedded applications.
      </li>
      <li>
        <strong>Embedded Systems:</strong> Real-time systems benefit from deterministic
        instruction execution without memory contention.
      </li>
      <li>
        <strong>GPU Shader Cores:</strong> Graphics processing units use Harvard-like
        architectures for parallel data processing.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Parallel Access:</strong> Simultaneous instruction fetch and data access increases throughput</li>
      <li><strong>No Bottleneck:</strong> Eliminates the Von Neumann bottleneck entirely</li>
      <li><strong>Enhanced Security:</strong> Separate memories prevent code modification attacks</li>
      <li><strong>Predictable Timing:</strong> Consistent instruction execution time aids real-time systems</li>
      <li><strong>Optimized Bus Width:</strong> Each bus can be sized independently for efficiency</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Higher Cost:</strong> Dual memory and bus systems increase hardware complexity and cost</li>
      <li><strong>Inflexible Memory:</strong> Cannot reallocate unused instruction memory for data or vice versa</li>
      <li><strong>Programming Complexity:</strong> Self-modifying code is not possible in pure Harvard systems</li>
      <li><strong>Memory Fragmentation:</strong> Fixed partition sizes may lead to wasted memory</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Harvard Architecture uses separate memory and buses for instructions and data</li>
        <li>Parallel access to instruction and data memory eliminates the Von Neumann bottleneck</li>
        <li>Named after the Harvard Mark I computer developed in the 1940s</li>
        <li>Commonly used in DSPs, microcontrollers, and embedded systems</li>
        <li>Modified Harvard Architecture combines benefits of both architectures in modern CPUs</li>
        <li>Provides inherent security by separating executable code from data</li>
        <li>Higher performance comes at the cost of increased hardware complexity</li>
      </ul>
    </div>
  </div>
);

export default Harvard;
