import React from 'react';

const ILP: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Instruction Level Parallelism (ILP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Instruction Level Parallelism (ILP) refers to the potential for simultaneous
      execution of multiple instructions within a program. Exploiting ILP allows
      processors to execute more than one instruction per clock cycle, significantly
      improving performance beyond simple pipelining. Modern processors use various
      hardware and software techniques to discover and exploit available ILP.
    </p>

    <h2 className="text-3xl font-bold mt-8">Understanding ILP</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`What is ILP?

ILP = Number of instructions that can execute in parallel

Consider this code:
    ADD R1, R2, R3      ; Independent
    SUB R4, R5, R6      ; Independent
    MUL R7, R8, R9      ; Independent
    AND R10, R11, R12   ; Independent

All four instructions are independent!
ILP = 4 (can execute all simultaneously)

vs. this code:
    ADD R1, R2, R3      ; Produces R1
    SUB R4, R1, R5      ; Depends on R1 (RAW)
    MUL R6, R4, R7      ; Depends on R4 (RAW)
    AND R8, R6, R9      ; Depends on R6 (RAW)

Chain of dependencies!
ILP = 1 (must execute sequentially)

ILP Spectrum:
+--------------------------------------------------+
| No ILP                              Maximum ILP   |
|    1                                    N         |
|    |_________________________________________|    |
|          Typical programs: ILP = 2-6             |
+--------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sources of ILP</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Where does ILP come from?

1. Basic Block ILP:
   Sequence of instructions with no branches
   (Single entry, single exit)

   Typical basic block: 4-7 instructions
   ILP within basic block: 2-3

2. Loop Level Parallelism:
   for (i = 0; i < 1000; i++)
       A[i] = B[i] + C[i];

   Each iteration is independent!
   ILP across iterations: Very high (1000)

3. Procedure Level Parallelism:
   Independent function calls
   Less common, harder to exploit

ILP Limit Example:

for (i = 0; i < N; i++)
    sum = sum + A[i];    // Accumulator pattern

Each iteration depends on previous (sum)!
ILP = 1 (despite being a loop)

vs.

for (i = 0; i < N; i++)
    B[i] = A[i] * 2;     // Transformation pattern

Iterations independent!
ILP = N (theoretically)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Approaches to Exploiting ILP</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`ILP Exploitation Methods:

+----------------------------------------------------------+
|                    ILP Techniques                         |
+----------------------------------------------------------+
|                          |                                |
|    Hardware Approaches   |     Software Approaches        |
|                          |                                |
|  +--------------------+  |  +------------------------+    |
|  | Superscalar        |  |  | Compiler Scheduling    |    |
|  | - Dynamic issue    |  |  | - Static scheduling    |    |
|  | - Out-of-order     |  |  | - Loop unrolling       |    |
|  +--------------------+  |  +------------------------+    |
|                          |                                |
|  +--------------------+  |  +------------------------+    |
|  | Speculation        |  |  | VLIW/EPIC             |    |
|  | - Branch pred      |  |  | - Explicit parallelism |    |
|  | - Value pred       |  |  | - Compiler controlled  |    |
|  +--------------------+  |  +------------------------+    |
|                          |                                |
+----------------------------------------------------------+

Hardware: CPU discovers parallelism dynamically
Software: Compiler identifies parallelism statically`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Dependencies and ILP</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Dependencies Limit ILP:

True Dependencies (RAW) - Cannot be eliminated:
    ADD R1, R2, R3    ; Produces R1
    SUB R4, R1, R5    ; Must wait for R1

Output Dependencies (WAW) - Can be eliminated:
    ADD R1, R2, R3    ; First write to R1
    MUL R1, R4, R5    ; Second write to R1

    Solution: Register Renaming
    ADD P1, P2, P3    ; P1 for first R1
    MUL P2, P4, P5    ; P2 for second R1

Anti-Dependencies (WAR) - Can be eliminated:
    ADD R3, R1, R2    ; Reads R1
    SUB R1, R4, R5    ; Writes R1

    Solution: Register Renaming
    ADD R3, P1, R2    ; Reads old P1
    SUB P2, R4, R5    ; Writes to new P2

Dependency Graph:
    ADD R1, R2, R3
          |
          v (RAW)
    SUB R4, R1, R5
          |
          v (RAW)
    MUL R6, R4, R7

Critical path length = 3 instructions
Maximum ILP = Total instructions / Critical path length`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Loop Unrolling</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Loop Unrolling to Expose ILP:

Original Loop:
    for (i = 0; i < 100; i++)
        A[i] = A[i] + B[i];

Assembly (per iteration):
    LW   R1, 0(R10)      ; Load A[i]
    LW   R2, 0(R11)      ; Load B[i]
    ADD  R3, R1, R2      ; Add
    SW   R3, 0(R10)      ; Store A[i]
    ADDI R10, R10, 4     ; Increment pointers
    ADDI R11, R11, 4
    BNE  R10, R12, Loop  ; Branch if not done

7 instructions per element, with dependencies

Unrolled 4x:
    LW   R1, 0(R10)      ; Load A[i]
    LW   R2, 0(R11)      ; Load B[i]
    LW   R3, 4(R10)      ; Load A[i+1]
    LW   R4, 4(R11)      ; Load B[i+1]
    LW   R5, 8(R10)      ; Load A[i+2]
    LW   R6, 8(R11)      ; Load B[i+2]
    LW   R7, 12(R10)     ; Load A[i+3]
    LW   R8, 12(R11)     ; Load B[i+3]
    ADD  R9, R1, R2      ; All ADDs now independent!
    ADD  R10, R3, R4
    ADD  R11, R5, R6
    ADD  R12, R7, R8
    ...

Benefits:
- More independent instructions
- Reduced branch overhead
- Better scheduling opportunities
- ILP increased from ~2 to ~4+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Software Pipelining</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Software Pipelining (Modulo Scheduling):

Overlap operations from different iterations

Original Loop (3 cycles per iteration):
Iter 1: [Load] [Compute] [Store]
Iter 2:        [Load   ] [Compute] [Store]
Iter 3:                  [Load   ] [Compute] [Store]

Software Pipelined (steady state: 1 cycle per iteration):
        Cycle 1   Cycle 2   Cycle 3   Cycle 4   Cycle 5
Load:   [i=1]     [i=2]     [i=3]     [i=4]     [i=5]
Compute:          [i=1]     [i=2]     [i=3]     [i=4]
Store:                      [i=1]     [i=2]     [i=3]

Prologue: Fill the pipeline
Kernel:   Steady state (max parallelism)
Epilogue: Drain the pipeline

Code for Kernel:
    Loop:
        LW   R1, 0(R10)      ; Load for iteration i+2
        ADD  R3, R2, R5      ; Compute for iteration i+1
        SW   R4, -8(R10)     ; Store for iteration i
        ADDI R10, R10, 4
        ...

Different iterations in different registers!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dynamic ILP Extraction</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Out-of-Order Execution for Dynamic ILP:

Instruction Window:

+----------------------------------------------------------+
| Instruction Window (Reorder Buffer)                       |
+----------------------------------------------------------+
| Inst | Status    | Operands Ready? | Can Execute?         |
+------+-----------+-----------------+----------------------+
| ADD  | Issued    | Yes            | Yes -> Execute       |
| LW   | Executing | N/A            | Waiting for memory   |
| SUB  | Waiting   | No (needs LW)  | No                   |
| MUL  | Issued    | Yes            | Yes -> Execute       |
| AND  | Waiting   | No (needs MUL) | No                   |
| OR   | Issued    | Yes            | Yes -> Execute       |
+------+-----------+-----------------+----------------------+

ADD, MUL, OR are independent -> Execute in parallel!
SUB, AND wait for results -> Execute when ready

Tomasulo's Algorithm:
1. Issue: Read instruction, allocate reservation station
2. Execute: When operands ready, execute
3. Write Result: Broadcast result on CDB
4. Commit: Write to registers in order

Dynamic Scheduling finds ILP at runtime
Hardware complexity but works for all programs`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ILP Limits</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`What Limits ILP?

1. True Data Dependencies:
   - Cannot execute dependent instructions in parallel
   - Critical path determines minimum time

2. Control Dependencies:
   - Branches limit visible instructions
   - Must speculate to see past branches
   - Mispredictions waste work

3. Memory Dependencies:
   - Loads/stores may alias (same address)
   - Must be conservative or speculate

4. Resource Conflicts:
   - Limited functional units
   - Limited issue width
   - Limited registers

5. Window Size:
   - Hardware can only see limited instructions
   - Reorder buffer size limits ILP extraction

Studies of ILP (Ideal Conditions):
+------------------+------------------+
| Constraint       | Available ILP    |
+------------------+------------------+
| Infinite window  | 50-100+          |
| 256 entry window | 15-60            |
| 64 entry window  | 8-15             |
| 32 entry window  | 4-8              |
| Real processors  | 2-6              |
+------------------+------------------+

Practical ILP much lower than theoretical!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ILP vs Thread Level Parallelism</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">ILP</th>
            <th className="p-3 border">TLP</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Granularity</td>
            <td className="p-3 border">Instructions</td>
            <td className="p-3 border">Threads/Processes</td>
          </tr>
          <tr>
            <td className="p-3 border">Discovery</td>
            <td className="p-3 border">Hardware or Compiler</td>
            <td className="p-3 border">Programmer or OS</td>
          </tr>
          <tr>
            <td className="p-3 border">Typical ILP</td>
            <td className="p-3 border">2-6 instructions</td>
            <td className="p-3 border">2-many threads</td>
          </tr>
          <tr>
            <td className="p-3 border">Communication</td>
            <td className="p-3 border">Registers, bypassing</td>
            <td className="p-3 border">Memory, messages</td>
          </tr>
          <tr>
            <td className="p-3 border">Hardware</td>
            <td className="p-3 border">Superscalar, OoO</td>
            <td className="p-3 border">Multi-core, SMT</td>
          </tr>
          <tr>
            <td className="p-3 border">Scaling</td>
            <td className="p-3 border">Limited (diminishing)</td>
            <td className="p-3 border">Better (many cores)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Modern ILP Techniques Summary</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Superscalar:</strong> Issue multiple instructions per cycle</li>
      <li><strong>Out-of-Order:</strong> Execute instructions when operands ready</li>
      <li><strong>Register Renaming:</strong> Eliminate false dependencies</li>
      <li><strong>Branch Prediction:</strong> Speculate past branches</li>
      <li><strong>Memory Disambiguation:</strong> Allow loads to pass stores</li>
      <li><strong>Value Prediction:</strong> Speculate on data values</li>
      <li><strong>Loop Unrolling:</strong> Expose more independent operations</li>
      <li><strong>Software Pipelining:</strong> Overlap loop iterations</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>ILP is the potential for executing multiple instructions simultaneously</li>
        <li>Dependencies limit available ILP in programs</li>
        <li>True dependencies (RAW) cannot be eliminated; others can be renamed away</li>
        <li>Loop unrolling increases ILP by exposing more independent operations</li>
        <li>Software pipelining overlaps different iterations for maximum throughput</li>
        <li>Dynamic scheduling (out-of-order) finds ILP at runtime</li>
        <li>Practical ILP is typically 2-6 due to hardware and software limits</li>
        <li>Window size significantly affects extractable ILP</li>
        <li>Modern processors combine multiple ILP techniques</li>
        <li>Thread-level parallelism complements ILP for further performance</li>
      </ul>
    </div>
  </div>
);

export default ILP;
