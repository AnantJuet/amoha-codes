import React from 'react';

const SISD: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SISD - Single Instruction Single Data
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      SISD (Single Instruction, Single Data) is the simplest and oldest computer architecture
      in Flynn's classification. It represents the traditional sequential computer where a
      single processor executes one instruction at a time, operating on a single piece of
      data. This is the classic Von Neumann architecture that formed the basis of early
      computing.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      In a SISD architecture, there is exactly one instruction stream (the program being executed)
      and one data stream (the operands being processed). The processor fetches one instruction,
      decodes it, fetches the required operands, executes the instruction, and stores the result
      before moving to the next instruction.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`SISD Architecture Block Diagram:

                    +------------------+
                    |   Instruction    |
                    |     Memory       |
                    | +-------------+  |
                    | | I1 I2 I3... |  |
                    | +-------------+  |
                    +--------+---------+
                             |
                    Single Instruction Stream
                             |
                             v
+-----------------------------------------------------------+
|                          CPU                               |
|  +-------------+    +-------------+    +-------------+    |
|  |   Control   |    |  Arithmetic |    |  Registers  |    |
|  |    Unit     |--->|  Logic Unit |--->|   (ACC, R0, |    |
|  |   (CU)      |    |    (ALU)    |    |    R1...)   |    |
|  +-------------+    +-------------+    +-------------+    |
+-----------------------------------------------------------+
                             |
                    Single Data Stream
                             |
                             v
                    +------------------+
                    |      Data        |
                    |     Memory       |
                    | +-------------+  |
                    | | D1 D2 D3... |  |
                    | +-------------+  |
                    +------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Characteristics of SISD</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Single Processor:</strong> Only one processing unit that executes instructions
        sequentially.
      </li>
      <li>
        <strong>Sequential Execution:</strong> Instructions are executed one after another in
        program order (unless altered by branches).
      </li>
      <li>
        <strong>Deterministic:</strong> For the same input, the output is always the same, making
        debugging straightforward.
      </li>
      <li>
        <strong>Single Control Unit:</strong> One control unit manages the fetch-decode-execute cycle.
      </li>
      <li>
        <strong>No Parallelism:</strong> Pure SISD has no hardware parallelism (though modern
        implementations add pipelining).
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Instruction Execution Cycle</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`SISD Instruction Cycle (Fetch-Decode-Execute):

+--------+     +--------+     +---------+     +-------+
| FETCH  | --> | DECODE | --> | EXECUTE | --> | STORE |
+--------+     +--------+     +---------+     +-------+
    |              |              |               |
    v              v              v               v
Read instr.   Interpret     Perform the     Write result
from memory   the opcode    operation       to memory
at PC         and operands  (ALU, etc.)     or register

Timeline for 4 Instructions (Pure Sequential):
Time:  1    2    3    4    5    6    7    8    9   10   11   12
     +---+---+---+---+---+---+---+---+---+---+---+---+
I1:  | F | D | E | S |   |   |   |   |   |   |   |   |
     +---+---+---+---+---+---+---+---+---+---+---+---+
I2:  |   |   |   |   | F | D | E | S |   |   |   |   |
     +---+---+---+---+---+---+---+---+---+---+---+---+
I3:  |   |   |   |   |   |   |   |   | F | D | E | S |
     +---+---+---+---+---+---+---+---+---+---+---+---+

Total time for 3 instructions = 12 time units`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Adding Two Numbers</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`SISD Example: Computing C = A + B

Memory State:
Address  |  Content
---------|----------
100      |  A = 5     (Data)
101      |  B = 3     (Data)
102      |  C = ?     (Result location)
200      |  LOAD A    (Instruction 1)
201      |  ADD B     (Instruction 2)
202      |  STORE C   (Instruction 3)

Execution Sequence:

Step 1: LOAD A
+------+     +-----+     +-----+
| PC=200| --> | IR=LOAD A | --> | ACC=5 |
+------+     +-----+     +-----+
  Fetch instruction, load value 5 into accumulator

Step 2: ADD B
+------+     +-----+     +-----+
| PC=201| --> | IR=ADD B  | --> | ACC=8 |
+------+     +-----+     +-----+
  Fetch instruction, add 3 to accumulator (5+3=8)

Step 3: STORE C
+------+     +-----+     +-----+
| PC=202| --> | IR=STORE C| --> | M[102]=8|
+------+     +-----+     +-----+
  Fetch instruction, store accumulator to memory

Result: C = 8 (stored at address 102)
Total: 3 instructions executed sequentially`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Modern SISD Enhancements</h2>
    <p className="leading-relaxed">
      While pure SISD is sequential, modern single-core processors incorporate various
      techniques to improve performance while maintaining the SISD programming model:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Enhancement</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Benefit</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Pipelining</td>
            <td className="p-3 border">Overlapping execution of multiple instructions in different stages</td>
            <td className="p-3 border">Higher instruction throughput</td>
          </tr>
          <tr>
            <td className="p-3 border">Superscalar</td>
            <td className="p-3 border">Multiple execution units to process independent instructions</td>
            <td className="p-3 border">Multiple IPC (instructions per cycle)</td>
          </tr>
          <tr>
            <td className="p-3 border">Out-of-Order</td>
            <td className="p-3 border">Execute instructions when operands ready, not strictly in order</td>
            <td className="p-3 border">Hide memory latency</td>
          </tr>
          <tr>
            <td className="p-3 border">Branch Prediction</td>
            <td className="p-3 border">Predict branch outcomes to avoid pipeline stalls</td>
            <td className="p-3 border">Reduce control hazards</td>
          </tr>
          <tr>
            <td className="p-3 border">Caching</td>
            <td className="p-3 border">Multiple levels of fast memory (L1, L2, L3)</td>
            <td className="p-3 border">Reduce memory access latency</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`SISD with Pipelining (5-Stage):

Time:  1    2    3    4    5    6    7    8    9
     +----+----+----+----+----+
I1:  | IF | ID | EX | MEM| WB |
     +----+----+----+----+----+
I2:       | IF | ID | EX | MEM| WB |
          +----+----+----+----+----+
I3:            | IF | ID | EX | MEM| WB |
               +----+----+----+----+----+
I4:                 | IF | ID | EX | MEM| WB |
                    +----+----+----+----+----+
I5:                      | IF | ID | EX | MEM| WB |
                         +----+----+----+----+----+

IF=Instruction Fetch, ID=Instruction Decode,
EX=Execute, MEM=Memory Access, WB=Write Back

5 instructions complete in 9 cycles (vs. 25 without pipelining)
Throughput: ~1 instruction per cycle (after pipeline fills)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Examples of SISD Systems</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System</th>
            <th className="p-3 border">Era</th>
            <th className="p-3 border">Notable Features</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">ENIAC</td>
            <td className="p-3 border">1940s</td>
            <td className="p-3 border">First general-purpose electronic computer</td>
          </tr>
          <tr>
            <td className="p-3 border">IBM 701</td>
            <td className="p-3 border">1950s</td>
            <td className="p-3 border">First commercial scientific computer</td>
          </tr>
          <tr>
            <td className="p-3 border">Intel 8086</td>
            <td className="p-3 border">1970s</td>
            <td className="p-3 border">Foundation of x86 architecture</td>
          </tr>
          <tr>
            <td className="p-3 border">Intel 80486</td>
            <td className="p-3 border">1980s</td>
            <td className="p-3 border">First x86 with integrated FPU and cache</td>
          </tr>
          <tr>
            <td className="p-3 border">ARM Cortex-M0</td>
            <td className="p-3 border">Modern</td>
            <td className="p-3 border">Simple embedded microcontroller</td>
          </tr>
          <tr>
            <td className="p-3 border">AVR ATmega328</td>
            <td className="p-3 border">Modern</td>
            <td className="p-3 border">Arduino microcontroller</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of SISD</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Simplicity:</strong> Easy to understand, program, and debug. Sequential
        execution is intuitive.
      </li>
      <li>
        <strong>Deterministic Behavior:</strong> Same input always produces same output in
        same order.
      </li>
      <li>
        <strong>Low Hardware Cost:</strong> Requires only one processor and simpler
        interconnection.
      </li>
      <li>
        <strong>No Synchronization Needed:</strong> No parallel execution means no race
        conditions or deadlocks.
      </li>
      <li>
        <strong>Mature Tooling:</strong> Well-established compilers, debuggers, and
        development tools.
      </li>
      <li>
        <strong>Low Power:</strong> Single processor consumes less power than parallel
        alternatives.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of SISD</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Limited Performance:</strong> Speed is constrained by single processor
        capabilities.
      </li>
      <li>
        <strong>No Parallelism:</strong> Cannot exploit inherent parallelism in many
        problems.
      </li>
      <li>
        <strong>Physical Limits:</strong> Single processor speed limited by heat, power,
        and transistor size.
      </li>
      <li>
        <strong>Underutilization:</strong> While waiting for memory, the CPU may be idle.
      </li>
      <li>
        <strong>Not Suitable for Large Problems:</strong> Scientific simulations, AI,
        and big data need parallelism.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">SISD vs Other Architectures</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Performance Comparison (Processing 1000 elements):

SISD (Sequential):
[====================================] 1000 time units
Process one element at a time

SIMD (4 processing elements):
[=========] 250 time units
Process 4 elements simultaneously

MIMD (4 processors):
[=========] 250 time units (ideally)
Each processor handles 250 elements independently

For embarrassingly parallel problems, SIMD/MIMD can be
~N times faster (where N = number of processors)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use SISD</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Simple Embedded Systems:</strong> Microcontrollers for basic control tasks.
      </li>
      <li>
        <strong>Sequential Algorithms:</strong> Problems with inherent dependencies that
        cannot be parallelized.
      </li>
      <li>
        <strong>Low-Power Applications:</strong> Battery-operated devices where power
        consumption is critical.
      </li>
      <li>
        <strong>Legacy Software:</strong> Applications written for sequential execution.
      </li>
      <li>
        <strong>Educational Purposes:</strong> Learning computer architecture fundamentals.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>SISD has one instruction stream and one data stream - classical sequential computing</li>
        <li>Based on Von Neumann architecture with fetch-decode-execute cycle</li>
        <li>Modern SISD processors use pipelining and superscalar for performance</li>
        <li>Advantages include simplicity, determinism, and low cost/power</li>
        <li>Limited by sequential nature - cannot exploit data parallelism</li>
        <li>Still used in embedded systems and microcontrollers</li>
        <li>Forms the foundation for understanding more complex architectures</li>
      </ul>
    </div>
  </div>
);

export default SISD;
