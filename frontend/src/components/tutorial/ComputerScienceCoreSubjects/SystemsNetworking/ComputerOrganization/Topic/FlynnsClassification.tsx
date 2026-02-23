import React from 'react';

const FlynnsClassification: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Flynn's Classification
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Flynn's Classification, proposed by Michael J. Flynn in 1966, is a widely used taxonomy
      for classifying computer architectures based on the number of instruction streams and
      data streams that can be processed simultaneously. This classification provides a
      fundamental framework for understanding different types of parallel computing systems.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Two Key Concepts</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Concept</th>
            <th className="p-3 border">Definition</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Instruction Stream</td>
            <td className="p-3 border">Sequence of instructions executed by the processor</td>
            <td className="p-3 border">Single = One sequence; Multiple = Several independent sequences</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Data Stream</td>
            <td className="p-3 border">Sequence of data called by the instruction stream</td>
            <td className="p-3 border">Single = One data item; Multiple = Several data items in parallel</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">The Four Categories</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Flynn's Classification Matrix:

                    DATA STREAMS
                  Single    Multiple
               +----------+----------+
       Single  |   SISD   |   SIMD   |
INSTRUCTION    +----------+----------+
  STREAMS      |   MISD   |   MIMD   |
       Multiple+----------+----------+

SISD = Single Instruction, Single Data
SIMD = Single Instruction, Multiple Data
MISD = Multiple Instruction, Single Data
MIMD = Multiple Instruction, Multiple Data`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. SISD (Single Instruction, Single Data)</h2>
    <p className="leading-relaxed">
      The traditional sequential computer architecture where a single processor executes a
      single instruction stream operating on a single data stream. This is the classic
      Von Neumann architecture.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`SISD Architecture:

+-------------+     +-------------+     +-------------+
| Instruction | --> |     CPU     | --> |   Result    |
|   Stream    |     | (Single CU  |     |   (Data)    |
|  I1,I2,I3.. |     |  + Single   |     |             |
+-------------+     |    PU)      |     +-------------+
                    +------+------+
                           |
                    +------+------+
                    |   Memory    |
                    | (Data D1,   |
                    |  D2, D3...) |
                    +-------------+

CU = Control Unit, PU = Processing Unit

Example: Traditional desktop CPU executing one instruction at a time
         ADD R1, R2, R3  (one operation, one set of operands)`}
      </pre>
    </div>
    <p className="leading-relaxed mt-4">
      <strong>Examples:</strong> Traditional microprocessors, early personal computers,
      Intel 8086, simple embedded systems.
    </p>

    <h2 className="text-3xl font-bold mt-8">2. SIMD (Single Instruction, Multiple Data)</h2>
    <p className="leading-relaxed">
      Multiple processing elements execute the same instruction simultaneously on different
      data elements. All processors operate in lockstep under a single control unit.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`SIMD Architecture:

+-------------+
| Instruction |      Single instruction broadcast to all PUs
|   Stream    |
|     I1      +---------+----------+----------+----------+
+-------------+         |          |          |          |
                        v          v          v          v
                   +--------+ +--------+ +--------+ +--------+
                   |  PU 1  | |  PU 2  | |  PU 3  | |  PU 4  |
                   |  D1    | |  D2    | |  D3    | |  D4    |
                   +---+----+ +---+----+ +---+----+ +---+----+
                       |          |          |          |
                       v          v          v          v
                   +--------+ +--------+ +--------+ +--------+
                   |  R1    | |  R2    | |  R3    | |  R4    |
                   +--------+ +--------+ +--------+ +--------+

Example: Vector addition A + B = C
Instruction: ADD
Data streams: D1=(A[0],B[0]), D2=(A[1],B[1]), D3=(A[2],B[2]), D4=(A[3],B[3])
Results:      R1=C[0],        R2=C[1],        R3=C[2],        R4=C[3]`}
      </pre>
    </div>
    <p className="leading-relaxed mt-4">
      <strong>Examples:</strong> GPU architectures, Vector processors (Cray), Array processors,
      Intel SSE/AVX instructions, NVIDIA CUDA cores.
    </p>

    <h2 className="text-3xl font-bold mt-8">3. MISD (Multiple Instruction, Single Data)</h2>
    <p className="leading-relaxed">
      Multiple processors execute different instruction streams on the same data stream.
      This is a theoretical category with very few practical implementations.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`MISD Architecture:

+-------------+     +-------------+     +-------------+
| Instruction |     | Instruction |     | Instruction |
|  Stream 1   |     |  Stream 2   |     |  Stream 3   |
|     I1      |     |     I2      |     |     I3      |
+------+------+     +------+------+     +------+------+
       |                   |                   |
       v                   v                   v
  +--------+          +--------+          +--------+
  |  PU 1  |          |  PU 2  |          |  PU 3  |
  +----+---+          +----+---+          +----+---+
       |                   |                   |
       +-------------------+-------------------+
                           |
                    +------+------+
                    | Single Data |
                    |    Stream   |
                    |      D      |
                    +-------------+

Use Case: Fault-tolerant systems where multiple processors
          process same data for redundancy checking`}
      </pre>
    </div>
    <p className="leading-relaxed mt-4">
      <strong>Examples:</strong> Space Shuttle flight control computers (for redundancy),
      systolic arrays (debatable), pipelined systems (sometimes classified as MISD).
    </p>

    <h2 className="text-3xl font-bold mt-8">4. MIMD (Multiple Instruction, Multiple Data)</h2>
    <p className="leading-relaxed">
      Multiple autonomous processors execute different instruction streams on different data
      streams simultaneously. This is the most flexible and widely used parallel architecture.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`MIMD Architecture:

+-------------+     +-------------+     +-------------+
| Instruction |     | Instruction |     | Instruction |
|  Stream 1   |     |  Stream 2   |     |  Stream 3   |
|  I1a,I1b..  |     |  I2a,I2b..  |     |  I3a,I3b..  |
+------+------+     +------+------+     +------+------+
       |                   |                   |
       v                   v                   v
  +--------+          +--------+          +--------+
  |  CU 1  |          |  CU 2  |          |  CU 3  |
  |  PU 1  |          |  PU 2  |          |  PU 3  |
  +----+---+          +----+---+          +----+---+
       |                   |                   |
+------+------+     +------+------+     +------+------+
|   Data 1    |     |   Data 2    |     |   Data 3    |
| D1a,D1b..   |     | D2a,D2b..   |     | D3a,D3b..   |
+-------------+     +-------------+     +-------------+

Each processor has its own control unit and operates independently
Can communicate via shared memory or message passing`}
      </pre>
    </div>
    <p className="leading-relaxed mt-4">
      <strong>Examples:</strong> Multi-core processors, Computer clusters, Supercomputers,
      Distributed systems, Cloud computing infrastructure.
    </p>

    <h2 className="text-3xl font-bold mt-8">Comparison of Flynn's Categories</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Instructions</th>
            <th className="p-3 border">Data</th>
            <th className="p-3 border">Parallelism Type</th>
            <th className="p-3 border">Control</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">SISD</td>
            <td className="p-3 border">Single</td>
            <td className="p-3 border">Single</td>
            <td className="p-3 border">None (Sequential)</td>
            <td className="p-3 border">Single CU</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">SIMD</td>
            <td className="p-3 border">Single</td>
            <td className="p-3 border">Multiple</td>
            <td className="p-3 border">Data-Level</td>
            <td className="p-3 border">Single CU</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">MISD</td>
            <td className="p-3 border">Multiple</td>
            <td className="p-3 border">Single</td>
            <td className="p-3 border">Task-Level (Redundancy)</td>
            <td className="p-3 border">Multiple CUs</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">MIMD</td>
            <td className="p-3 border">Multiple</td>
            <td className="p-3 border">Multiple</td>
            <td className="p-3 border">Task + Data Level</td>
            <td className="p-3 border">Multiple CUs</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Visual Summary</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Flynn's Classification - Visual Summary:

SISD:                          SIMD:
One Chef, One Dish             One Chef, Many Dishes (same recipe)
     I1                              I1
      |                         /    |    \\
      v                        v     v     v
    [CPU]                   [PU1] [PU2] [PU3]
      |                        |     |     |
      v                        v     v     v
     D1                       D1    D2    D3

MISD:                          MIMD:
Many Chefs, One Dish           Many Chefs, Many Dishes (different recipes)
  I1    I2    I3                 I1    I2    I3
    \\   |   /                     |     |     |
      v v v                       v     v     v
    [PU1,2,3]                  [PU1] [PU2] [PU3]
        |                         |     |     |
        v                         v     v     v
       D1                        D1    D2    D3


Most common today:
- Personal computers: SISD (single-core) or MIMD (multi-core)
- GPUs: SIMD (thousands of simple cores)
- Supercomputers: MIMD (thousands of processors)
- Servers: MIMD (multi-processor, multi-core)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Modern Extensions</h2>
    <p className="leading-relaxed">
      Flynn's classification, while foundational, has been extended to accommodate modern
      architectures:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li>
        <strong>SPMD (Single Program, Multiple Data):</strong> A practical programming model
        where multiple processors execute the same program but on different data (subset of MIMD).
      </li>
      <li>
        <strong>MPMD (Multiple Program, Multiple Data):</strong> Different programs on different
        processors working together (full MIMD).
      </li>
      <li>
        <strong>SIMT (Single Instruction, Multiple Threads):</strong> NVIDIA's model for GPUs,
        similar to SIMD but with more flexibility.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Real-World Applications</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Real-World Systems</th>
            <th className="p-3 border">Applications</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">SISD</td>
            <td className="p-3 border">Early PCs, Embedded microcontrollers</td>
            <td className="p-3 border">Simple control systems, Legacy software</td>
          </tr>
          <tr>
            <td className="p-3 border">SIMD</td>
            <td className="p-3 border">GPUs, DSPs, Intel AVX</td>
            <td className="p-3 border">Graphics, AI training, Signal processing</td>
          </tr>
          <tr>
            <td className="p-3 border">MISD</td>
            <td className="p-3 border">Space shuttle computers</td>
            <td className="p-3 border">Fault-tolerant critical systems</td>
          </tr>
          <tr>
            <td className="p-3 border">MIMD</td>
            <td className="p-3 border">Multi-core CPUs, Clusters, Cloud</td>
            <td className="p-3 border">Web servers, Scientific computing, Big data</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Flynn's Classification categorizes computers by instruction and data streams</li>
        <li>SISD represents traditional sequential (Von Neumann) architecture</li>
        <li>SIMD exploits data-level parallelism (same operation on multiple data)</li>
        <li>MISD is mostly theoretical, used mainly for fault tolerance</li>
        <li>MIMD is the most flexible and common parallel architecture today</li>
        <li>Modern GPUs are SIMD/SIMT; multi-core CPUs are MIMD</li>
        <li>Extensions like SPMD and SIMT address modern architectural needs</li>
      </ul>
    </div>
  </div>
);

export default FlynnsClassification;
