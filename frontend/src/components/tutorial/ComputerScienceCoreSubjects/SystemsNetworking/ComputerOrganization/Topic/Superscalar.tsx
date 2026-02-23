import React from 'react';

const Superscalar: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Superscalar Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Superscalar architecture is a CPU design approach that allows multiple instructions
      to be issued and executed in parallel within a single processor core. By duplicating
      functional units and using sophisticated scheduling logic, superscalar processors
      can achieve instruction throughput greater than one instruction per cycle, exploiting
      instruction-level parallelism (ILP) to improve performance.
    </p>

    <h2 className="text-3xl font-bold mt-8">Scalar vs Superscalar</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Comparison:

Scalar Processor:
- Issues 1 instruction per cycle
- Maximum IPC = 1.0
- Single pipeline

+-------+    +-------+    +-------+    +-------+    +-------+
|  IF   |--->|  ID   |--->|  EX   |--->|  MEM  |--->|  WB   |
+-------+    +-------+    +-------+    +-------+    +-------+

Superscalar Processor (2-way):
- Issues 2 instructions per cycle
- Maximum IPC = 2.0
- Multiple parallel pipelines

+-------+    +-------+    +-------+    +-------+    +-------+
|  IF   |--->|  ID   |--->|  EX   |--->|  MEM  |--->|  WB   |
+-------+    +-------+    +-------+    +-------+    +-------+
+-------+    +-------+    +-------+    +-------+    +-------+
|  IF   |--->|  ID   |--->|  EX   |--->|  MEM  |--->|  WB   |
+-------+    +-------+    +-------+    +-------+    +-------+

Timeline:
           Cycle 1   Cycle 2   Cycle 3   Cycle 4   Cycle 5
Scalar:    I1        I2        I3        I4        I5
2-way SS:  I1,I2     I3,I4     I5,I6     I7,I8     I9,I10

Scalar:    5 instructions in 5 cycles (IPC = 1)
2-way SS: 10 instructions in 5 cycles (IPC = 2)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Superscalar Pipeline Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`4-Way Superscalar Pipeline:

                    +----------------+
                    | Instruction    |
                    | Cache          |
                    +-------+--------+
                            |
                            v (Fetch 4+ instructions)
                    +----------------+
                    | Instruction    |
                    | Buffer/Queue   |
                    +-------+--------+
                            |
            +-------+-------+-------+-------+
            v       v       v       v
        +------+ +------+ +------+ +------+
        |Decode| |Decode| |Decode| |Decode|
        +------+ +------+ +------+ +------+
            |       |       |       |
            v       v       v       v
        +-------------------------------+
        |     Issue Logic / Dispatch    |
        |   (Dependency Check, Rename)  |
        +-------------------------------+
            |       |       |       |
            v       v       v       v
        +-----+ +-----+ +-----+ +-----+
        | ALU | | ALU | |FP/MUL| | LD/ST|
        +-----+ +-----+ +-----+ +-----+
            |       |       |       |
            v       v       v       v
        +-------------------------------+
        |         Retire/Commit         |
        +-------------------------------+

Issue Width: 4 (can issue up to 4 instructions/cycle)
Requires: 4 decoders, 4 functional units, multi-port register file`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Components</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Multiple Fetch and Decode</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Wide Instruction Fetch:

+-------------------------------------------+
|          Instruction Cache                 |
|    +-----------------------------------+   |
|    | I1 | I2 | I3 | I4 | I5 | I6 | I7 |   |
|    +-----------------------------------+   |
+-------------------------------------------+
              |
    Fetch 4 instructions per cycle
              |
    +---------+---------+---------+---------+
    |         |         |         |         |
    v         v         v         v         v
+------+  +------+  +------+  +------+  +------+
| Dec1 |  | Dec2 |  | Dec3 |  | Dec4 |  | Dec5 |
+------+  +------+  +------+  +------+  +------+

Challenges:
- Wide memory interface (128+ bits)
- Multiple branch predictions needed
- Handling branches in fetch group
- Alignment issues for variable-length ISA (x86)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Register Renaming</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Register Renaming for Parallel Issue:

Original Code:
    ADD R1, R2, R3    ; Write R1
    SUB R4, R1, R5    ; Read R1 (RAW - true)
    MUL R1, R6, R7    ; Write R1 (WAW with ADD)
    AND R8, R1, R9    ; Read R1 (should use MUL's R1)

Problem: Second R1 write conflicts with first

After Renaming:
    ADD P32, P2, P3   ; R1 -> P32
    SUB P33, P32, P5  ; Uses P32
    MUL P34, P6, P7   ; R1 -> P34 (new mapping)
    AND P35, P34, P9  ; Uses P34

Register Alias Table (RAT):
+------------+-------------+
| Arch Reg   | Physical Reg|
+------------+-------------+
|    R1      |    P34      | <- Current mapping
|    R2      |    P2       |
|    ...     |    ...      |
+------------+-------------+

Free List: [P35, P36, P37, ...]

All false dependencies eliminated!
MUL and ADD can execute in parallel!`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Issue Queue / Reservation Stations</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Reservation Stations (Tomasulo Style):

+-----------------------------------------------------------+
|                 Reservation Stations                       |
+-----------------------------------------------------------+
| Entry | Op  | Src1  | V1   | Src2  | V2   | Dest | Ready? |
+-------+-----+-------+------+-------+------+------+--------+
|   0   | ADD | Ready | 100  | Ready | 50   | P32  |  Yes   |
|   1   | SUB | P32   |  -   | Ready | 25   | P33  |  No    |
|   2   | MUL | Ready | 200  | Ready | 10   | P34  |  Yes   |
|   3   | AND | P34   |  -   | Ready | 30   | P35  |  No    |
+-------+-----+-------+------+-------+------+------+--------+

Issue Logic:
1. Scan reservation stations for ready instructions
2. Select ready instructions (up to issue width)
3. Dispatch to functional units
4. When result produced, broadcast on Common Data Bus (CDB)
5. Waiting instructions capture result

ADD and MUL ready -> Issue both this cycle
SUB waits for P32 (ADD result)
AND waits for P34 (MUL result)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Reorder Buffer (ROB)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Reorder Buffer for In-Order Commit:

+-----------------------------------------------------------+
|                    Reorder Buffer                          |
+-----------------------------------------------------------+
| Entry | Instruction | Dest | Value | Complete | Exception |
+-------+-------------+------+-------+----------+-----------+
|   0   | ADD P32     | P32  |  150  |   Yes    |    No     | <- Head (commit)
|   1   | SUB P33     | P33  |   -   |   No     |    -      |
|   2   | MUL P34     | P34  |  2000 |   Yes    |    No     |
|   3   | AND P35     | P35  |   -   |   No     |    -      |
|   4   | LOAD P36    | P36  |   -   |   No     |    -      | <- Tail (allocate)
+-------+-------------+------+-------+----------+-----------+

ROB Operations:
1. Allocate: New instruction gets ROB entry at tail
2. Complete: Mark entry complete when execution done
3. Commit: When head is complete, write to arch. state

Benefits:
- Precise exceptions (commit in program order)
- Branch misprediction recovery (flush ROB tail)
- Speculative execution support

In-Order: Fetch -> Decode -> Allocate -> ...
Out-of-Order: ... -> Execute -> Complete -> ...
In-Order: ... -> Commit`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Execution Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`4-Way Superscalar Execution:

Instructions:
I1: ADD R1, R2, R3
I2: SUB R4, R1, R5    (depends on I1)
I3: MUL R6, R7, R8
I4: AND R9, R6, R10   (depends on I3)
I5: OR  R11, R12, R13
I6: XOR R14, R11, R15 (depends on I5)

Cycle-by-Cycle Execution:

Cycle 1: Fetch I1, I2, I3, I4
         Issue I1 (ADD), I3 (MUL) - independent
         I2 waits for I1, I4 waits for I3

Cycle 2: Fetch I5, I6
         I1 completes, I3 completes
         Issue I2 (SUB), I4 (AND), I5 (OR)

Cycle 3: I2 completes, I4 completes, I5 completes
         Issue I6 (XOR)

Cycle 4: I6 completes
         Commit I1, I2 (in order)

Cycle 5: Commit I3, I4, I5, I6

6 instructions in ~5 cycles = IPC of 1.2
(Limited by dependencies, not issue width)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">In-Order vs Out-of-Order Superscalar</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">In-Order</th>
            <th className="p-3 border">Out-of-Order</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Issue</td>
            <td className="p-3 border">In program order</td>
            <td className="p-3 border">Any ready instruction</td>
          </tr>
          <tr>
            <td className="p-3 border">Execute</td>
            <td className="p-3 border">In order</td>
            <td className="p-3 border">Out of order</td>
          </tr>
          <tr>
            <td className="p-3 border">Commit</td>
            <td className="p-3 border">In order</td>
            <td className="p-3 border">In order (ROB)</td>
          </tr>
          <tr>
            <td className="p-3 border">Hardware</td>
            <td className="p-3 border">Simpler</td>
            <td className="p-3 border">Complex (ROB, RS)</td>
          </tr>
          <tr>
            <td className="p-3 border">Power</td>
            <td className="p-3 border">Lower</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border">Performance</td>
            <td className="p-3 border">Lower IPC</td>
            <td className="p-3 border">Higher IPC</td>
          </tr>
          <tr>
            <td className="p-3 border">Example</td>
            <td className="p-3 border">ARM Cortex-A53</td>
            <td className="p-3 border">Intel Core, ARM A76</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Superscalar Challenges</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Challenges in Superscalar Design:

1. Dependency Checking:
   - N instructions require N*(N-1)/2 comparisons
   - 4-way: 6 comparisons
   - 8-way: 28 comparisons
   - Quadratic growth!

2. Register File Ports:
   - 4-way with 2 sources + 1 dest = 12 ports needed
   - Multi-port register files are slow and power-hungry

3. Bypass Network:
   - Every functional unit output to every input
   - Complexity grows quadratically

4. Branch Handling:
   - Multiple branches per cycle possible
   - Need prediction for all branches
   - Misprediction recovery more complex

5. Memory Disambiguation:
   - Multiple loads/stores per cycle
   - Must track dependencies between them
   - Store-load forwarding complexity

Practical Issue Width Limits:
- 4-way common in high-performance
- 6-8 way in aggressive designs
- Beyond 8: diminishing returns

    Issue Width    Complexity    Typical IPC Gain
    -----------    ----------    ----------------
        2           Low           +50-80%
        4           Medium        +30-50%
        6           High          +10-20%
        8           Very High     +5-10%`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Real Superscalar Processors</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Processor</th>
            <th className="p-3 border">Issue Width</th>
            <th className="p-3 border">OoO?</th>
            <th className="p-3 border">ROB Size</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Intel Core i7</td>
            <td className="p-3 border">4-6</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">224</td>
          </tr>
          <tr>
            <td className="p-3 border">AMD Zen 3</td>
            <td className="p-3 border">6</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">256</td>
          </tr>
          <tr>
            <td className="p-3 border">Apple M1 (Firestorm)</td>
            <td className="p-3 border">8</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">600+</td>
          </tr>
          <tr>
            <td className="p-3 border">ARM Cortex-A76</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">128</td>
          </tr>
          <tr>
            <td className="p-3 border">ARM Cortex-A53</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">N/A</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Superscalar processors issue multiple instructions per cycle</li>
        <li>Require multiple functional units and wide fetch/decode</li>
        <li>Register renaming eliminates false dependencies (WAR, WAW)</li>
        <li>Reservation stations hold instructions waiting for operands</li>
        <li>Reorder buffer enables precise exceptions with out-of-order execution</li>
        <li>In-order superscalar is simpler but achieves lower IPC</li>
        <li>Out-of-order superscalar extracts more ILP but is complex</li>
        <li>Hardware complexity grows quadratically with issue width</li>
        <li>Practical limit is 4-8 way issue in modern processors</li>
        <li>Modern high-performance CPUs are all superscalar out-of-order designs</li>
      </ul>
    </div>
  </div>
);

export default Superscalar;
