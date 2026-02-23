import React from 'react';

const ArrayProcessors: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Array Processors
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Array processors are a class of parallel computing architectures that consist of multiple
      identical processing elements (PEs) arranged in a regular pattern, typically a one-dimensional
      or two-dimensional array. All PEs operate synchronously under the control of a single
      control unit, executing the same instruction on different data elements simultaneously.
      Array processors are a classic implementation of the SIMD (Single Instruction, Multiple Data)
      paradigm.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      An array processor is a synchronous parallel computer where a large number of processing
      elements are organized in an array structure. A master control unit broadcasts instructions
      to all PEs, which then execute the instruction in lockstep on their local data. This
      architecture is particularly efficient for regular, data-parallel computations such as
      matrix operations, image processing, and scientific simulations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Array Processor Architecture:

                    +------------------+
                    |   Control Unit   |
                    | (Single CU for   |
                    |  all PEs)        |
                    +--------+---------+
                             |
              Instruction Broadcast Bus
                             |
    +--------+-------+-------+-------+-------+--------+
    |        |       |       |       |       |        |
    v        v       v       v       v       v        v
+------+ +------+ +------+ +------+ +------+ +------+ +------+
| PE 0 | | PE 1 | | PE 2 | | PE 3 | | PE 4 | | PE 5 | | PE 6 |
| ALU  | | ALU  | | ALU  | | ALU  | | ALU  | | ALU  | | ALU  |
| Reg  | | Reg  | | Reg  | | Reg  | | Reg  | | Reg  | | Reg  |
| Mem  | | Mem  | | Mem  | | Mem  | | Mem  | | Mem  | | Mem  |
+------+ +------+ +------+ +------+ +------+ +------+ +------+
    |        |       |       |       |       |        |
    +--------+-------+-------+-------+-------+--------+
                             |
                  PE Interconnection Network
                  (Data exchange between PEs)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Components of Array Processor</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Characteristics</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Control Unit (CU)</td>
            <td className="p-3 border">Fetches and broadcasts instructions to all PEs</td>
            <td className="p-3 border">Single, centralized</td>
          </tr>
          <tr>
            <td className="p-3 border">Processing Element (PE)</td>
            <td className="p-3 border">Executes instructions on local data</td>
            <td className="p-3 border">Identical, simple ALU + registers</td>
          </tr>
          <tr>
            <td className="p-3 border">Local Memory</td>
            <td className="p-3 border">Stores data for each PE</td>
            <td className="p-3 border">Private to each PE</td>
          </tr>
          <tr>
            <td className="p-3 border">Interconnection Network</td>
            <td className="p-3 border">Enables data exchange between PEs</td>
            <td className="p-3 border">Regular topology (mesh, ring)</td>
          </tr>
          <tr>
            <td className="p-3 border">Masking Logic</td>
            <td className="p-3 border">Enables/disables PEs for conditional operations</td>
            <td className="p-3 border">Per-PE enable flag</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Array Processor Organization</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Linear (1D) Array</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Linear Array Processor:

Control Unit
     |
     v
+----+----+----+----+----+----+----+----+
| PE0| PE1| PE2| PE3| PE4| PE5| PE6| PE7|
+----+----+----+----+----+----+----+----+
  |    |    |    |    |    |    |    |
  +----+----+----+----+----+----+----+
        Shift Communication

Each PE can communicate with:
- Left neighbor (PE[i-1])
- Right neighbor (PE[i+1])

Use cases: 1D signal processing, sorting, linear algebra`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Mesh (2D) Array</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`2D Mesh Array Processor (4x4):

Control Unit
     |
     v
+------+------+------+------+
| PE00 |--PE01|--PE02|--PE03|
+--+---+--+---+--+---+--+---+
   |      |      |      |
+--+---+--+---+--+---+--+---+
| PE10 |--PE11|--PE12|--PE13|
+--+---+--+---+--+---+--+---+
   |      |      |      |
+--+---+--+---+--+---+--+---+
| PE20 |--PE21|--PE22|--PE23|
+--+---+--+---+--+---+--+---+
   |      |      |      |
+--+---+--+---+--+---+--+---+
| PE30 |--PE31|--PE32|--PE33|
+------+------+------+------+

Each PE can communicate with 4 neighbors:
- North (PE[i-1][j])
- South (PE[i+1][j])
- East  (PE[i][j+1])
- West  (PE[i][j-1])

Use cases: Image processing, matrix operations, stencil computations`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. 3D and Hypercube Arrays</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Hypercube Array (4D example with 16 PEs):

Hypercube connectivity: Each PE connects to log2(N) neighbors
For 16 PEs (4D hypercube): Each PE has 4 neighbors

PE addresses differ by 1 bit:
PE 0000 connects to: 0001, 0010, 0100, 1000
PE 0101 connects to: 0100, 0111, 0001, 1101

Visualization (simplified):
     0000-----0001
      |\\      |\\
      | 0010--+-0011
      |  |    |  |
     0100+---0101 |
       \\|      \\|
       0110----0111

Advantages:
- Logarithmic diameter (fast global communication)
- Regular structure
- Fault tolerance (multiple paths)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Array Processor Operation Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Example: Matrix Addition C = A + B (4x4 matrices)

Using 16 PEs in 4x4 mesh:

Initial Data Distribution:
PE[i][j] holds: A[i][j] and B[i][j]

Step 1: CU broadcasts ADD instruction
        All 16 PEs execute: local_C = local_A + local_B

PE00: C[0][0] = A[0][0] + B[0][0]    PE01: C[0][1] = A[0][1] + B[0][1]
PE02: C[0][2] = A[0][2] + B[0][2]    PE03: C[0][3] = A[0][3] + B[0][3]
... (all 16 additions happen SIMULTANEOUSLY)

Time: 1 clock cycle for entire 4x4 matrix addition!

Sequential processor: 16 clock cycles
Array processor:      1 clock cycle (16x speedup)


Example: Convolution (Image Processing)

+---+---+---+---+---+
| 1 | 2 | 3 | 4 | 5 |  Image row
+---+---+---+---+---+

Kernel: [-1, 0, 1] (edge detection)

Using 5 PEs for output:
PE0: out[0] = img[0]*(-1) + img[1]*(0) + img[2]*(1) = -1+0+3 = 2
PE1: out[1] = img[1]*(-1) + img[2]*(0) + img[3]*(1) = -2+0+4 = 2
PE2: out[2] = img[2]*(-1) + img[3]*(0) + img[4]*(1) = -3+0+5 = 2
...
All computed in parallel!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handling Conditional Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Conditional Execution using Masking:

Problem: if (A[i] > 0) C[i] = A[i]; else C[i] = B[i];

Array Processor Solution:

Data: A = [2, -3, 5, -1, 0, 4, -2, 3]
      B = [10, 20, 30, 40, 50, 60, 70, 80]

Step 1: Compare - CU broadcasts "COMPARE A > 0"
Mask = [1, 0, 1, 0, 0, 1, 0, 1]  (1=enabled, 0=disabled)

Step 2: True branch - CU broadcasts "MOVE A to C" (masked)
Only PEs with mask=1 execute:
C = [2, -, 5, -, -, 4, -, 3]  (- = unchanged)

Step 3: Invert mask
Mask = [0, 1, 0, 1, 1, 0, 1, 0]

Step 4: False branch - CU broadcasts "MOVE B to C" (masked)
Only PEs with mask=1 execute:
C = [2, 20, 5, 40, 50, 4, 70, 3]

Result: All 8 conditional assignments in ~4 cycles
        (vs 8 cycles + branching overhead sequentially)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Historic Array Processors</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System</th>
            <th className="p-3 border">Year</th>
            <th className="p-3 border">PEs</th>
            <th className="p-3 border">Topology</th>
            <th className="p-3 border">Notable Features</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">ILLIAC IV</td>
            <td className="p-3 border">1972</td>
            <td className="p-3 border">64</td>
            <td className="p-3 border">8x8 Mesh</td>
            <td className="p-3 border">First large-scale array processor</td>
          </tr>
          <tr>
            <td className="p-3 border">ICL DAP</td>
            <td className="p-3 border">1980</td>
            <td className="p-3 border">4096</td>
            <td className="p-3 border">64x64 Mesh</td>
            <td className="p-3 border">Bit-serial PEs, attached processor</td>
          </tr>
          <tr>
            <td className="p-3 border">Goodyear MPP</td>
            <td className="p-3 border">1983</td>
            <td className="p-3 border">16384</td>
            <td className="p-3 border">128x128 Mesh</td>
            <td className="p-3 border">NASA satellite image processing</td>
          </tr>
          <tr>
            <td className="p-3 border">CM-2 (Connection Machine)</td>
            <td className="p-3 border">1987</td>
            <td className="p-3 border">65536</td>
            <td className="p-3 border">Hypercube</td>
            <td className="p-3 border">Thinking Machines, AI research</td>
          </tr>
          <tr>
            <td className="p-3 border">MasPar MP-1</td>
            <td className="p-3 border">1990</td>
            <td className="p-3 border">16384</td>
            <td className="p-3 border">2D Mesh + X-Net</td>
            <td className="p-3 border">Commercial SIMD, data mining</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">ILLIAC IV Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`ILLIAC IV (1972) - Pioneer Array Processor:

Structure:
- 64 Processing Elements (8 x 8 array)
- Each PE: 64-bit floating-point ALU
- Each PE: 2KB local memory
- Centralized Control Unit (CU)
- Nearest-neighbor mesh interconnect

+----+----+----+----+----+----+----+----+
|PE00|PE01|PE02|PE03|PE04|PE05|PE06|PE07|
+----+----+----+----+----+----+----+----+
|PE10|PE11|PE12|PE13|PE14|PE15|PE16|PE17|
+----+----+----+----+----+----+----+----+
|PE20|PE21|PE22|PE23|PE24|PE25|PE26|PE27|
+----+----+----+----+----+----+----+----+
|PE30|PE31|PE32|PE33|PE34|PE35|PE36|PE37|
+----+----+----+----+----+----+----+----+
|PE40|PE41|PE42|PE43|PE44|PE45|PE46|PE47|
+----+----+----+----+----+----+----+----+
|PE50|PE51|PE52|PE53|PE54|PE55|PE56|PE57|
+----+----+----+----+----+----+----+----+
|PE60|PE61|PE62|PE63|PE64|PE65|PE66|PE67|
+----+----+----+----+----+----+----+----+
|PE70|PE71|PE72|PE73|PE74|PE75|PE76|PE77|
+----+----+----+----+----+----+----+----+

Performance: ~200 MFLOPS (peak)
Applications: Weather modeling, seismic analysis, aerodynamics`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of Array Processors</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Application Domain</th>
            <th className="p-3 border">Specific Tasks</th>
            <th className="p-3 border">Why Array Processors?</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Image Processing</td>
            <td className="p-3 border">Filtering, convolution, edge detection</td>
            <td className="p-3 border">Same operation on all pixels</td>
          </tr>
          <tr>
            <td className="p-3 border">Scientific Computing</td>
            <td className="p-3 border">Matrix operations, PDE solvers</td>
            <td className="p-3 border">Regular grid computations</td>
          </tr>
          <tr>
            <td className="p-3 border">Signal Processing</td>
            <td className="p-3 border">FFT, FIR/IIR filters</td>
            <td className="p-3 border">Uniform sample processing</td>
          </tr>
          <tr>
            <td className="p-3 border">Pattern Recognition</td>
            <td className="p-3 border">Template matching, feature extraction</td>
            <td className="p-3 border">Parallel correlation</td>
          </tr>
          <tr>
            <td className="p-3 border">Database Operations</td>
            <td className="p-3 border">Search, sort, aggregate</td>
            <td className="p-3 border">Parallel record processing</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of Array Processors</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>High Throughput:</strong> Many operations executed simultaneously with single
        instruction fetch.
      </li>
      <li>
        <strong>Simple Control:</strong> Single control unit reduces hardware complexity
        compared to MIMD.
      </li>
      <li>
        <strong>Efficient for Regular Problems:</strong> Excellent performance for data-parallel
        algorithms.
      </li>
      <li>
        <strong>Predictable Performance:</strong> Synchronous execution makes timing analysis
        straightforward.
      </li>
      <li>
        <strong>Power Efficient:</strong> Amortized instruction fetch/decode across many PEs.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of Array Processors</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Limited Flexibility:</strong> All PEs must execute same instruction;
        inefficient for irregular problems.
      </li>
      <li>
        <strong>Conditional Execution Overhead:</strong> Branching requires masking, wasting
        cycles on disabled PEs.
      </li>
      <li>
        <strong>Load Imbalance:</strong> If some PEs have no data to process, they remain
        idle.
      </li>
      <li>
        <strong>Complex Programming:</strong> Data must be distributed appropriately across PEs.
      </li>
      <li>
        <strong>Communication Limitations:</strong> Non-local data exchange may require
        multiple steps.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Modern Relevance</h2>
    <p className="leading-relaxed">
      While standalone array processors are largely historical, their concepts live on in:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li>
        <strong>GPUs:</strong> Modern graphics cards are essentially massively parallel
        array processors with thousands of cores.
      </li>
      <li>
        <strong>SIMD Extensions:</strong> CPU vector units (AVX, NEON) are small array
        processors within the CPU.
      </li>
      <li>
        <strong>TPUs:</strong> Google's Tensor Processing Units use systolic array
        architecture.
      </li>
      <li>
        <strong>FPGAs:</strong> Can implement custom array processor designs for specific
        applications.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Array processors have multiple PEs controlled by a single control unit (SIMD)</li>
        <li>PEs are arranged in regular patterns: linear, 2D mesh, hypercube</li>
        <li>All PEs execute same instruction synchronously on different data</li>
        <li>Conditional operations handled through masking/enabling PEs</li>
        <li>Excellent for regular, data-parallel computations (images, matrices)</li>
        <li>Historic examples: ILLIAC IV, CM-2, MasPar</li>
        <li>Concepts live on in modern GPUs and SIMD vector units</li>
      </ul>
    </div>
  </div>
);

export default ArrayProcessors;
