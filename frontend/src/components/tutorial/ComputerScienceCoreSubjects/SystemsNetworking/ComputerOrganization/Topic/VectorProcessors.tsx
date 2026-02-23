import React from 'react';

const VectorProcessors: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Vector Processors
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Vector processors are specialized computer architectures designed to operate on entire
      arrays (vectors) of data with a single instruction. Unlike scalar processors that
      operate on one data element at a time, vector processors can perform operations on
      multiple elements simultaneously using deeply pipelined functional units and large
      vector registers. This architecture is particularly efficient for scientific computing,
      numerical simulations, and other applications involving regular, repetitive operations
      on large datasets.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      A vector processor is a CPU that implements an instruction set containing instructions
      that operate on one-dimensional arrays of data called vectors. These instructions
      specify operations on entire vectors rather than individual scalar values, allowing
      the processor to exploit data-level parallelism through pipelined vector functional
      units.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Vector Processor Architecture:

+--------------------------------------------------+
|                  Control Unit                     |
|  +----------------------------------------------+|
|  | Scalar Unit  |  Vector Control & Issue Logic ||
|  +----------------------------------------------+|
+--------------------------------------------------+
          |                    |
          v                    v
+------------------+   +------------------------+
| Scalar Registers |   |   Vector Registers     |
|    (R0-R31)      |   |   (V0-V7 or more)      |
| +----+ +----+    |   | +------------------+   |
| |R0  | |R1  |    |   | | V0: 64 elements  |   |
| +----+ +----+    |   | +------------------+   |
|   ...            |   | | V1: 64 elements  |   |
+------------------+   | +------------------+   |
          |            |   ...                  |
          v            +------------------------+
+------------------+             |
| Scalar Functional|             v
| Units            |   +------------------------+
| +----+ +----+    |   |  Vector Functional     |
| |ADD | |MUL |    |   |  Units (Pipelined)     |
| +----+ +----+    |   | +----+ +----+ +----+   |
+------------------+   | |VADD| |VMUL| |VDIV|   |
                       | +----+ +----+ +----+   |
                       | +----+ +----+          |
                       | |VLOAD| |VSTORE|       |
                       | +----+ +----+          |
                       +------------------------+
                                 |
                                 v
                       +------------------------+
                       |    Memory System       |
                       | (Multiple Banks for    |
                       |  Parallel Access)      |
                       +------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Scalar vs Vector Processing</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Example: Computing C = A + B (n=64 elements)

SCALAR PROCESSING (Traditional):
---------------------------------
for (i = 0; i < 64; i++) {
    C[i] = A[i] + B[i];     // 64 iterations, 64 add instructions
}

Assembly (simplified):
loop: LOAD  R1, A[i]        ; Load A element
      LOAD  R2, B[i]        ; Load B element
      ADD   R3, R1, R2      ; Add them
      STORE C[i], R3        ; Store result
      INC   i               ; Increment counter
      BLT   i, 64, loop     ; Branch if i < 64

Total instructions: ~6 * 64 = 384 instructions
Pipeline stalls for each load/store


VECTOR PROCESSING:
---------------------------------
Vector assembly:
      LV    V1, A           ; Load vector A (all 64 elements)
      LV    V2, B           ; Load vector B (all 64 elements)
      ADDV  V3, V1, V2      ; Add vectors (all 64 pairs)
      SV    V3, C           ; Store vector C (all 64 elements)

Total instructions: 4 instructions!
No loop overhead, deeply pipelined execution`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Vector Instruction Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Instruction</th>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">LV / SV</td>
            <td className="p-3 border">Load/Store vector from/to memory</td>
            <td className="p-3 border">LV V1, A</td>
          </tr>
          <tr>
            <td className="p-3 border">Arithmetic</td>
            <td className="p-3 border">ADDV, SUBV, MULV, DIVV</td>
            <td className="p-3 border">Vector-vector arithmetic</td>
            <td className="p-3 border">ADDV V3, V1, V2</td>
          </tr>
          <tr>
            <td className="p-3 border">Scalar-Vector</td>
            <td className="p-3 border">ADDSV, MULSV</td>
            <td className="p-3 border">Scalar with each vector element</td>
            <td className="p-3 border">MULSV V2, R1, V1</td>
          </tr>
          <tr>
            <td className="p-3 border">Reduction</td>
            <td className="p-3 border">SUMV, MAXV</td>
            <td className="p-3 border">Reduce vector to scalar</td>
            <td className="p-3 border">SUMV R1, V1</td>
          </tr>
          <tr>
            <td className="p-3 border">Comparison</td>
            <td className="p-3 border">CMPV, CMPSV</td>
            <td className="p-3 border">Compare and create mask</td>
            <td className="p-3 border">CMPV VM, V1, V2</td>
          </tr>
          <tr>
            <td className="p-3 border">Masked</td>
            <td className="p-3 border">ADDVM</td>
            <td className="p-3 border">Conditional operation with mask</td>
            <td className="p-3 border">ADDVM V3, V1, V2, VM</td>
          </tr>
          <tr>
            <td className="p-3 border">Gather/Scatter</td>
            <td className="p-3 border">LVI / SVI</td>
            <td className="p-3 border">Indexed (indirect) access</td>
            <td className="p-3 border">LVI V1, A, V2</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pipelined Vector Execution</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Pipelined Vector Addition (8-element vectors, 4-stage pipeline):

ADDV V3, V1, V2

Pipeline stages: Fetch | Add1 | Add2 | Write

Clock:  1    2    3    4    5    6    7    8    9   10   11
      +----+----+----+----+
V1[0] | F  | A1 | A2 | W  |
      +----+----+----+----+
V1[1]      | F  | A1 | A2 | W  |
           +----+----+----+----+
V1[2]           | F  | A1 | A2 | W  |
                +----+----+----+----+
V1[3]                | F  | A1 | A2 | W  |
                     +----+----+----+----+
V1[4]                     | F  | A1 | A2 | W  |
                          +----+----+----+----+
V1[5]                          | F  | A1 | A2 | W  |
                               +----+----+----+----+
V1[6]                               | F  | A1 | A2 | W  |
                                    +----+----+----+----+
V1[7]                                    | F  | A1 | A2 | W  |
                                         +----+----+----+----+

Total time for 8 elements: 11 clock cycles
Scalar equivalent: 8 * 4 = 32 clock cycles

Speedup increases with vector length:
- Startup time: 4 cycles (pipeline depth)
- Steady state: 1 result per cycle

For vector length n: Time = startup + n - 1 cycles`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Vector Processor Concepts</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Vector Length Register (VL)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Vector Length Register (VL):
Controls how many elements of vector register are used

Maximum Vector Length (MVL) = 64 (hardware limit)

If actual array has 200 elements:
- Process in chunks: 64 + 64 + 64 + 8 = 200
- Set VL appropriately for each chunk

for (i = 0; i < n; i += MVL) {
    VL = min(MVL, n - i);   // Set vector length
    LV V1, &A[i]            // Load VL elements
    LV V2, &B[i]
    ADDV V3, V1, V2         // Add VL pairs
    SV V3, &C[i]            // Store VL results
}

This technique is called "strip mining"`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Vector Stride</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Vector Stride - accessing non-contiguous elements:

Unit Stride (stride=1): A[0], A[1], A[2], A[3]... (contiguous)
+----+----+----+----+----+----+----+----+
| A0 | A1 | A2 | A3 | A4 | A5 | A6 | A7 |
+----+----+----+----+----+----+----+----+
  ^    ^    ^    ^    ^    ^    ^    ^
  |----|----|----|----|----|----|----| stride=1

Stride=2: A[0], A[2], A[4], A[6]... (every other)
+----+----+----+----+----+----+----+----+
| A0 |    | A2 |    | A4 |    | A6 |    |
+----+----+----+----+----+----+----+----+
  ^         ^         ^         ^
  |---------|---------|---------| stride=2

Use case: Column access in row-major matrix
Matrix A (4x4):
+--+--+--+--+
|00|01|02|03| Row 0
+--+--+--+--+
|10|11|12|13| Row 1
+--+--+--+--+
|20|21|22|23| Row 2
+--+--+--+--+
|30|31|32|33| Row 3

Column 1: A[0][1], A[1][1], A[2][1], A[3][1]
Memory:   [00,01,02,03,10,11,12,13,20,21,22,23,30,31,32,33]
Stride=4 to access: 01, 11, 21, 31`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Chaining</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Vector Chaining - forwarding results between operations:

Without Chaining:
MULV V3, V1, V2    ; Must complete entirely
ADDV V4, V3, V5    ; Then this can start

With Chaining:
MULV V3, V1, V2    ; Starts producing results
ADDV V4, V3, V5    ; Can start using V3 results as they become available

Timeline without chaining (each op: 4 startup + 64 elements):
MULV: [====MMMMMMMM...]                    (68 cycles)
ADDV:                  [====AAAAAAAA...]   (68 cycles after MULV)
Total: 136 cycles

Timeline with chaining:
MULV: [====MMMMMMMM...]
ADDV:     [====AAAAAAAA...]  (starts 4 cycles after MULV)
Total: 72 cycles (almost 2x speedup)

Chaining = "vector pipelining" - results forwarded element-by-element`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Banking for Vector Access</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Memory Banking - Parallel Memory Access:

Problem: Memory cycle time = 4 clock cycles
         Vector processor wants 1 element per cycle

Solution: Multiple memory banks

8 Memory Banks (interleaved):
Bank 0   Bank 1   Bank 2   Bank 3   Bank 4   Bank 5   Bank 6   Bank 7
A[0]     A[1]     A[2]     A[3]     A[4]     A[5]     A[6]     A[7]
A[8]     A[9]     A[10]    A[11]    A[12]    A[13]    A[14]    A[15]
...

Address mapping: Bank = Address mod NumBanks

Loading A[0:7] with 8 banks:
Cycle 1: Request A[0] from Bank 0
         Request A[1] from Bank 1
         ...
         Request A[7] from Bank 7

Cycle 2-3-4: Banks processing...
             Meanwhile, next vector can be requested

Cycle 5: A[0] returns from Bank 0
Cycle 6: A[1] returns from Bank 1
...

With enough banks: 1 element per cycle throughput!

Bank Conflicts occur when stride causes multiple accesses to same bank:
Stride=8 with 8 banks: A[0], A[8], A[16] all in Bank 0 - conflict!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Historical Vector Processors</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System</th>
            <th className="p-3 border">Year</th>
            <th className="p-3 border">Vector Length</th>
            <th className="p-3 border">Peak Performance</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Cray-1</td>
            <td className="p-3 border">1976</td>
            <td className="p-3 border">64 elements</td>
            <td className="p-3 border">160 MFLOPS</td>
          </tr>
          <tr>
            <td className="p-3 border">Cray X-MP</td>
            <td className="p-3 border">1982</td>
            <td className="p-3 border">64 elements</td>
            <td className="p-3 border">941 MFLOPS</td>
          </tr>
          <tr>
            <td className="p-3 border">Cray Y-MP</td>
            <td className="p-3 border">1988</td>
            <td className="p-3 border">64 elements</td>
            <td className="p-3 border">2.67 GFLOPS</td>
          </tr>
          <tr>
            <td className="p-3 border">NEC SX-6</td>
            <td className="p-3 border">2001</td>
            <td className="p-3 border">256 elements</td>
            <td className="p-3 border">8 GFLOPS/CPU</td>
          </tr>
          <tr>
            <td className="p-3 border">NEC SX-Aurora</td>
            <td className="p-3 border">2018</td>
            <td className="p-3 border">256 elements</td>
            <td className="p-3 border">2.45 TFLOPS</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cray-1 Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Cray-1 (1976) - The Iconic Vector Supercomputer:

Register Set:
- 8 Vector Registers (V0-V7): 64 elements x 64 bits each
- 8 Scalar Registers (S0-S7): 64 bits each
- 8 Address Registers (A0-A7): 24 bits each
- Vector Length Register (VL): up to 64
- Vector Mask Register (VM): 64 bits

Functional Units (Pipelined):
+------------------+----------+------------+
| Unit             | Pipeline | Time/Elem  |
+------------------+----------+------------+
| Vector Add       | 3 stages | 1 cycle    |
| Vector Shift     | 2 stages | 1 cycle    |
| Vector Logical   | 1 stage  | 1 cycle    |
| Vector Multiply  | 7 stages | 1 cycle    |
| Vector Reciprocal| 14 stages| 1 cycle    |
+------------------+----------+------------+

Memory: 16 memory banks, 1M words (8 MB)

Distinctive "C" shape design for short wire lengths
First commercial vector supercomputer
$8.8 million price tag in 1976`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Modern Vector Extensions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Extension</th>
            <th className="p-3 border">Vendor</th>
            <th className="p-3 border">Vector Length</th>
            <th className="p-3 border">Notable Feature</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">AVX-512</td>
            <td className="p-3 border">Intel</td>
            <td className="p-3 border">512 bits (8 doubles)</td>
            <td className="p-3 border">Mask registers, embedded broadcast</td>
          </tr>
          <tr>
            <td className="p-3 border">ARM SVE</td>
            <td className="p-3 border">ARM</td>
            <td className="p-3 border">128-2048 bits (scalable)</td>
            <td className="p-3 border">Vector-length agnostic code</td>
          </tr>
          <tr>
            <td className="p-3 border">RISC-V V</td>
            <td className="p-3 border">RISC-V</td>
            <td className="p-3 border">Scalable</td>
            <td className="p-3 border">Open standard, flexible implementation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of Vector Processors</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Reduced Instruction Count:</strong> One instruction operates on many elements,
        reducing fetch/decode overhead.
      </li>
      <li>
        <strong>Efficient Memory Access:</strong> Streaming access patterns with stride support
        and memory banking.
      </li>
      <li>
        <strong>Deep Pipelining:</strong> Long pipelines fully utilized due to independent
        element operations.
      </li>
      <li>
        <strong>High Memory Bandwidth:</strong> Multiple banks enable sustained high throughput.
      </li>
      <li>
        <strong>Predictable Performance:</strong> Known vector length and pipeline depth enable
        precise performance estimates.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of Vector Processors</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Startup Overhead:</strong> Pipeline fill time matters for short vectors.
      </li>
      <li>
        <strong>Stride Conflicts:</strong> Non-unit strides can cause memory bank conflicts.
      </li>
      <li>
        <strong>Irregular Access:</strong> Scatter/gather operations are slower than stride access.
      </li>
      <li>
        <strong>Conditional Operations:</strong> Masked operations reduce efficiency when
        many elements are disabled.
      </li>
      <li>
        <strong>Cost:</strong> Specialized hardware, large register files, many memory banks
        are expensive.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Vector processors operate on arrays of data with single instructions</li>
        <li>Deeply pipelined functional units achieve high throughput</li>
        <li>Vector Length Register (VL) controls active elements; strip mining handles long arrays</li>
        <li>Stride support enables column access in matrices</li>
        <li>Chaining forwards results between operations for better performance</li>
        <li>Memory banking provides parallel access to avoid bottlenecks</li>
        <li>Historic systems: Cray-1, NEC SX series dominated scientific computing</li>
        <li>Modern legacy: AVX-512, ARM SVE bring vector concepts to commodity CPUs</li>
      </ul>
    </div>
  </div>
);

export default VectorProcessors;
