import React from 'react';

const MISD: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      MISD - Multiple Instruction Single Data
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      MISD (Multiple Instruction, Single Data) is a parallel processing architecture where
      multiple processors execute different instructions on the same data stream simultaneously.
      This is the least common category in Flynn's classification, with very few practical
      implementations. MISD is primarily of theoretical interest, though it finds some
      applications in fault-tolerant systems and specialized signal processing.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      In MISD architecture, multiple processing units, each with its own control unit and
      instruction stream, operate on a single shared data stream. Each processor performs
      a different operation on the same data element. This can be visualized as data flowing
      through a pipeline of different operations or multiple processors checking the same
      data for different conditions.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`MISD Architecture Block Diagram:

+-------------+   +-------------+   +-------------+   +-------------+
| Instruction |   | Instruction |   | Instruction |   | Instruction |
|  Stream 1   |   |  Stream 2   |   |  Stream 3   |   |  Stream 4   |
|     I1      |   |     I2      |   |     I3      |   |     I4      |
+------+------+   +------+------+   +------+------+   +------+------+
       |                 |                 |                 |
       v                 v                 v                 v
  +--------+        +--------+        +--------+        +--------+
  |  CU 1  |        |  CU 2  |        |  CU 3  |        |  CU 4  |
  +--------+        +--------+        +--------+        +--------+
       |                 |                 |                 |
       v                 v                 v                 v
  +--------+        +--------+        +--------+        +--------+
  |  PU 1  |        |  PU 2  |        |  PU 3  |        |  PU 4  |
  +----+---+        +----+---+        +----+---+        +----+---+
       |                 |                 |                 |
       +--------+--------+--------+--------+
                         |
                  +------+------+
                  | Single Data |
                  |   Stream    |
                  |      D      |
                  +-------------+

All processors operate on the SAME data stream D
Each applies a DIFFERENT operation (I1, I2, I3, I4)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why MISD is Rare</h2>
    <p className="leading-relaxed">
      MISD is uncommon because most practical applications do not naturally fit this model.
      Consider the challenges:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li>
        <strong>Limited Applicability:</strong> Few algorithms require multiple different
        operations on exactly the same data at the same time.
      </li>
      <li>
        <strong>Redundant Computation:</strong> Processing same data multiple times is
        often wasteful unless redundancy is the goal.
      </li>
      <li>
        <strong>Complex Synchronization:</strong> All processors must receive the same
        data simultaneously, requiring careful coordination.
      </li>
      <li>
        <strong>SIMD/MIMD Often Better:</strong> Most parallel workloads are better served
        by data parallelism (SIMD) or independent tasks (MIMD).
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Practical Applications</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Fault-Tolerant Systems</h3>
    <p className="leading-relaxed">
      The primary practical use of MISD is in fault-tolerant computing, where redundancy
      is essential for reliability.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Fault-Tolerant MISD Example: Space Shuttle Flight Computer

                    +-------------+
                    | Sensor Data |
                    | (Altitude,  |
                    |  Speed,     |
                    |  Position)  |
                    +------+------+
                           |
         +-----------------+-----------------+
         |                 |                 |
         v                 v                 v
    +--------+        +--------+        +--------+
    | CPU 1  |        | CPU 2  |        | CPU 3  |
    | (Same  |        | (Same  |        | (Same  |
    | program)|       | program)|       | program)|
    +----+---+        +----+---+        +----+---+
         |                 |                 |
         v                 v                 v
    +--------+        +--------+        +--------+
    |Result 1|        |Result 2|        |Result 3|
    +----+---+        +----+---+        +----+---+
         |                 |                 |
         +-----------------+-----------------+
                           |
                           v
                    +-------------+
                    |    Voter    |
                    | (Majority   |
                    |  Selector)  |
                    +------+------+
                           |
                           v
                    +-------------+
                    |   Output    |
                    | (Control    |
                    |  Commands)  |
                    +-------------+

If one CPU fails or produces wrong result:
- Voter selects majority (2 out of 3)
- System continues operating correctly
- Triple Modular Redundancy (TMR)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Systolic Arrays (Debated Classification)</h3>
    <p className="leading-relaxed">
      Systolic arrays can be viewed as a form of MISD where data flows through a pipeline
      of processing elements, each performing a different operation.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Systolic Array as MISD Pipeline:

Data Input
    |
    v
+--------+    +--------+    +--------+    +--------+
|  PE 1  | -> |  PE 2  | -> |  PE 3  | -> |  PE 4  |
| Stage1 |    | Stage2 |    | Stage3 |    | Stage4 |
| (Op A) |    | (Op B) |    | (Op C) |    | (Op D) |
+--------+    +--------+    +--------+    +--------+
                                              |
                                              v
                                          Output

Example: Pipelined FIR Filter
Data D flows through, each PE applies different coefficient:

D -> [*c0] -> [+] -> [*c1] -> [+] -> [*c2] -> [+] -> Output
              ^              ^              ^
              |              |              |
          D(delay)      D(delay)      D(delay)

Same data stream processed by different operations in sequence`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Stream Processing / Pipeline Processing</h3>
    <p className="leading-relaxed">
      Some streaming architectures can be classified as MISD when the same data passes
      through multiple processing stages:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Stream Processing Example: Video Pipeline

Raw Video Frame (Single Data Stream)
           |
           v
    +-------------+
    | Decode      |  <- Instruction Stream 1
    | (H.264)     |
    +------+------+
           |
           v
    +-------------+
    | Deinterlace |  <- Instruction Stream 2
    +------+------+
           |
           v
    +-------------+
    | Color       |  <- Instruction Stream 3
    | Correction  |
    +------+------+
           |
           v
    +-------------+
    | Scale       |  <- Instruction Stream 4
    | (Resize)    |
    +------+------+
           |
           v
    Processed Frame

Same video data passes through different processing stages
Each stage applies different operation`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">MISD for Redundancy Checking</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Multiple Algorithm Verification:

Input Data: X = 15
            |
    +-------+-------+-------+
    |       |       |       |
    v       v       v       v
+------+ +------+ +------+ +------+
|Check | |Check | |Check | |Check |
|Prime?| |Odd?  | |>10?  | |<100? |
+--+---+ +--+---+ +--+---+ +--+---+
   |        |        |        |
   v        v        v        v
 False    True     True     True

Different tests/instructions on same data
Used in: Data validation, Security checks, Pattern matching

Another Example: Cryptographic Verification
Same encrypted message checked by multiple decryption attempts
or verification algorithms`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison with Other Architectures</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">MISD</th>
            <th className="p-3 border">SIMD</th>
            <th className="p-3 border">MIMD</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Instructions</td>
            <td className="p-3 border">Multiple (different)</td>
            <td className="p-3 border">Single (same)</td>
            <td className="p-3 border">Multiple (different)</td>
          </tr>
          <tr>
            <td className="p-3 border">Data</td>
            <td className="p-3 border">Single (same)</td>
            <td className="p-3 border">Multiple (different)</td>
            <td className="p-3 border">Multiple (different)</td>
          </tr>
          <tr>
            <td className="p-3 border">Use Case</td>
            <td className="p-3 border">Fault tolerance, pipelines</td>
            <td className="p-3 border">Data parallelism</td>
            <td className="p-3 border">Task parallelism</td>
          </tr>
          <tr>
            <td className="p-3 border">Prevalence</td>
            <td className="p-3 border">Very rare</td>
            <td className="p-3 border">Common (GPUs)</td>
            <td className="p-3 border">Very common</td>
          </tr>
          <tr>
            <td className="p-3 border">Control Units</td>
            <td className="p-3 border">Multiple</td>
            <td className="p-3 border">Single</td>
            <td className="p-3 border">Multiple</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Historical Examples</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System</th>
            <th className="p-3 border">Application</th>
            <th className="p-3 border">MISD Characteristics</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Space Shuttle AP-101</td>
            <td className="p-3 border">Flight control</td>
            <td className="p-3 border">5 computers running same program, voting on results</td>
          </tr>
          <tr>
            <td className="p-3 border">Carnegie Mellon C.mmp</td>
            <td className="p-3 border">Research</td>
            <td className="p-3 border">Multi-mini processor with shared memory</td>
          </tr>
          <tr>
            <td className="p-3 border">Experimental Systolic</td>
            <td className="p-3 border">Signal processing</td>
            <td className="p-3 border">Data pipelining through PE array</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of MISD</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Fault Tolerance:</strong> Multiple processors can detect errors through
        comparison of results (voting).
      </li>
      <li>
        <strong>Reliability:</strong> System continues operating even if one processor fails.
      </li>
      <li>
        <strong>Error Detection:</strong> Disagreement between processors indicates a fault.
      </li>
      <li>
        <strong>Safety-Critical Applications:</strong> Essential for aerospace, medical,
        and nuclear systems.
      </li>
      <li>
        <strong>Pipelining Benefits:</strong> When viewed as pipeline, provides continuous
        throughput.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of MISD</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Limited Applicability:</strong> Very few practical applications beyond
        fault tolerance.
      </li>
      <li>
        <strong>Resource Overhead:</strong> Multiple processors doing redundant work is
        inherently wasteful.
      </li>
      <li>
        <strong>Complexity:</strong> Synchronizing multiple instruction streams on same
        data is challenging.
      </li>
      <li>
        <strong>Cost:</strong> Multiple processors and control units increase hardware cost.
      </li>
      <li>
        <strong>No Speedup:</strong> Unlike SIMD/MIMD, MISD does not inherently improve
        computational speed.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Modern Relevance</h2>
    <p className="leading-relaxed">
      While pure MISD systems are rare, the concepts appear in:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li>
        <strong>Redundant Flight Computers:</strong> Aircraft and spacecraft still use
        voting-based fault tolerance.
      </li>
      <li>
        <strong>Processor Verification:</strong> Running same tests on different processor
        implementations.
      </li>
      <li>
        <strong>Security Applications:</strong> Multiple algorithms checking same data
        for threats.
      </li>
      <li>
        <strong>Lockstep Execution:</strong> Some microcontrollers run two cores in lockstep
        for safety.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>MISD has multiple instruction streams operating on a single data stream</li>
        <li>It is the rarest category in Flynn's classification with few practical implementations</li>
        <li>Primary application is fault-tolerant computing (Triple Modular Redundancy)</li>
        <li>Systolic arrays and pipelines are sometimes classified as MISD</li>
        <li>Does not provide speedup - purpose is reliability, not performance</li>
        <li>Used in safety-critical systems: aerospace, medical, nuclear</li>
        <li>Modern processors rarely use pure MISD; hybrid approaches are more common</li>
      </ul>
    </div>
  </div>
);

export default MISD;
