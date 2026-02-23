import React from 'react';

const HazardResolution: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Hazard Resolution Techniques
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Hazard resolution techniques are methods used to detect, prevent, or minimize
      the impact of pipeline hazards. These techniques are essential for maintaining
      high throughput in pipelined processors. Modern CPUs employ a combination of
      hardware and software solutions to keep the pipeline operating at near-ideal efficiency.
    </p>

    <h2 className="text-3xl font-bold mt-8">Overview of Resolution Techniques</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Hazard Resolution Strategy Hierarchy:

+------------------------------------------+
|          HAZARD DETECTED                  |
+------------------------------------------+
                    |
        +-----------+-----------+
        |           |           |
        v           v           v
+------------+ +------------+ +------------+
|   AVOID    | |  RESOLVE   | |   STALL    |
| (Prevent)  | |(Hardware)  | | (Wait)     |
+------------+ +------------+ +------------+
|            | |            | |            |
|- Compiler  | |- Forward   | |- Insert    |
|  Scheduling| |- Predict   | |  bubbles   |
|- ISA Design| |- Speculate | |- Freeze    |
|- Delay     | |- Out-of-   | |  pipeline  |
|  Slots     | |  Order     | |            |
+------------+ +------------+ +------------+

Preference: Avoid > Resolve > Stall
(Best performance)     (Worst performance)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Pipeline Stalling (Interlocking)</h2>
    <p className="leading-relaxed">
      The simplest resolution technique: pause the pipeline until the hazard is resolved.
      Hardware automatically detects hazards and inserts bubbles.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Pipeline Stalling Implementation:

Hazard Detection Unit:
+------------------+
| Hazard Detector  |----> Stall signals
+------------------+
| Monitors:        |
| - Register deps  |
| - Memory access  |
| - Branch outcome |
+------------------+

Stall Control Signals:
- PCWrite = 0       (don't update PC)
- IF/IDWrite = 0    (freeze IF/ID register)
- ID/EXControl = 0  (insert NOP/bubble)

Stall Example (Data Hazard without forwarding):

ADD R1, R2, R3    ; Produces R1
SUB R4, R1, R5    ; Needs R1

Without Stalling (WRONG!):
Cycle:    1   2   3   4   5   6
ADD:     [F] [D] [E] [M] [W]
SUB:         [F] [D] [E] [M] [W]
                  ^--- Uses OLD R1 value!

With Stalling (Correct):
Cycle:    1   2   3   4   5   6   7   8
ADD:     [F] [D] [E] [M] [W]
SUB:         [F] [D] [--][--][E] [M] [W]
                      ^---^
              Bubbles until R1 written`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Data Forwarding (Bypassing)</h2>
    <p className="leading-relaxed">
      Instead of waiting for data to be written to registers and then read back,
      forward the data directly from where it is produced to where it is needed.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Forwarding Unit Design:

                    EX Stage
                       |
         +-------------+-------------+
         |                           |
         v                           v
    +---------+                 +---------+
    |  MUX A  |                 |  MUX B  |
    +---------+                 +---------+
     ^  ^  ^                     ^  ^  ^
     |  |  |                     |  |  |
     |  |  +-- EX/MEM.Result     |  |  +-- EX/MEM.Result
     |  +---- MEM/WB.Result      |  +---- MEM/WB.Result
     +------ ID/EX.ReadData1     +------ ID/EX.ReadData2

Forwarding Control Logic:

// EX Hazard (forward from EX/MEM)
if (EX/MEM.RegWrite && EX/MEM.Rd != 0 && EX/MEM.Rd == ID/EX.Rs)
    ForwardA = 10

// MEM Hazard (forward from MEM/WB)
if (MEM/WB.RegWrite && MEM/WB.Rd != 0 &&
    !(EX/MEM.RegWrite && EX/MEM.Rd != 0 && EX/MEM.Rd == ID/EX.Rs) &&
    MEM/WB.Rd == ID/EX.Rs)
    ForwardA = 01

Forwarding Values:
00 = Use value from register file (no hazard)
01 = Forward from MEM/WB stage
10 = Forward from EX/MEM stage`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Compiler Scheduling</h2>
    <p className="leading-relaxed">
      The compiler can reorder independent instructions to fill stall slots,
      reducing or eliminating hazards at compile time.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Compiler Instruction Scheduling:

Original Code (with hazards):
    LW   R1, 0(R10)      ; Load R1
    ADD  R2, R1, R3      ; Use R1 - LOAD-USE HAZARD!
    LW   R4, 4(R10)      ; Load R4
    ADD  R5, R4, R6      ; Use R4 - LOAD-USE HAZARD!

Execution (2 stalls):
Cycle:    1   2   3   4   5   6   7   8   9   10  11
LW R1:   [F] [D] [E] [M] [W]
ADD R2:      [F] [D] [--][E] [M] [W]         <- 1 stall
LW R4:           [F] [--][D] [E] [M] [W]
ADD R5:              [--][F] [D] [--][E] [M] [W]  <- 1 stall


Reordered Code (hazards avoided):
    LW   R1, 0(R10)      ; Load R1
    LW   R4, 4(R10)      ; Load R4 (independent)
    ADD  R2, R1, R3      ; Use R1 - data ready!
    ADD  R5, R4, R6      ; Use R4 - data ready!

Execution (no stalls):
Cycle:    1   2   3   4   5   6   7   8   9
LW R1:   [F] [D] [E] [M] [W]
LW R4:       [F] [D] [E] [M] [W]
ADD R2:          [F] [D] [E] [M] [W]    <- R1 forwarded from MEM/WB
ADD R5:              [F] [D] [E] [M] [W] <- R4 forwarded

Saved 2 cycles by reordering!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Branch Prediction</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Branch Prediction Hierarchy:

1. Static Prediction:
   - Always predict not-taken
   - Predict backward branches taken (loops)
   - Predict forward branches not-taken
   - ~60-70% accuracy

2. Dynamic Prediction:
   +-----------------------+
   | Branch History Table  |
   +-----------------------+
   | PC bits | 2-bit Pred  |
   +---------+-------------+
   |  0x100  |     11      | (Strongly Taken)
   |  0x200  |     01      | (Weakly Not-Taken)
   +---------+-------------+

3. Correlating Predictors:
   Use global history of recent branches
   (m,n) predictor: m global history bits, n predictor bits

   Global History Register: [T N T T N T T T]
                             ^
                   Last 8 branch outcomes

4. Tournament Predictors:
   +-------------------+
   | Chooser (2-bit)   |---> Select predictor
   +-------------------+
          |
     +----+----+
     |         |
   Local    Global
   Pred.    Pred.

   Use whichever predictor works better for this branch

Modern Accuracy: 95-99%`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">5. Speculative Execution</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Speculative Execution:

Execute instructions before knowing if they should execute

Branch Speculation:
1. Predict branch outcome
2. Fetch and execute predicted path
3. If prediction wrong: flush and restart

Load Speculation:
1. Predict load will hit cache
2. Execute dependent instructions
3. If cache miss: stall or re-execute

Recovery Mechanism:

    +------------------+
    | Reorder Buffer   |  <- Holds speculative results
    | (ROB)            |
    +------------------+
            |
    +-------+-------+
    |               |
Correct?         Wrong?
    |               |
    v               v
Commit to      Flush and
registers      restore state

ROB Entry:
+------+-------+--------+--------+------+
| Dest | Value | Ready? | Branch | Valid|
|      |       |        | Correct|      |
+------+-------+--------+--------+------+

Instructions commit in-order from ROB
Only update architectural state when non-speculative`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">6. Register Renaming</h2>
    <p className="leading-relaxed">
      Eliminates WAR and WAW hazards by mapping architectural registers to a larger
      set of physical registers.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Register Renaming:

Code with WAW/WAR Hazards:
    ADD R1, R2, R3    ; Write R1
    SUB R4, R1, R5    ; Read R1 (RAW - true)
    MUL R1, R6, R7    ; Write R1 (WAW with ADD)
    DIV R8, R1, R9    ; Read R1 (RAW with MUL, WAR with SUB)

After Renaming (Physical Registers P1-P99):
    ADD P10, P2, P3   ; P10 = first R1
    SUB P11, P10, P5  ; Uses P10
    MUL P12, P6, P7   ; P12 = second R1
    DIV P13, P12, P9  ; Uses P12

Register Alias Table (RAT):
+------+----------+
| Arch | Physical |
+------+----------+
|  R1  |   P12    | <- Most recent mapping
|  R2  |   P2     |
|  R3  |   P3     |
|  ...           |
+------+----------+

Free List: [P14, P15, P16, ...]
           Available physical registers

Benefits:
- WAW: Different physical registers, no conflict
- WAR: Reads use old mapping, writes use new mapping
- Enables out-of-order execution`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">7. Out-of-Order Execution</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Out-of-Order Execution Pipeline:

+-------+   +-------+   +-------+   +-------+   +-------+
| Fetch |-->|Decode |-->| Issue |-->|Execute|-->| Commit|
|       |   |Rename |   | Queue |   |       |   | (ROB) |
+-------+   +-------+   +-------+   +-------+   +-------+
                            |
                     In-order issue
                     Out-of-order complete
                     In-order commit

Reservation Stations (Issue Queue):
+------+-----+-----+-----+-----+-----+-------+
| Op   | Qj  | Vj  | Qk  | Vk  | Busy| Result|
+------+-----+-----+-----+-----+-----+-------+
| ADD  |  -  | 100 |  -  | 50  |  1  |  150  | Ready
| MUL  | RS2 |  -  |  -  | 25  |  1  |   -   | Waiting
| SUB  |  -  | 200 | RS1 |  -  |  1  |   -   | Waiting
+------+-----+-----+-----+-----+-----+-------+

Qj/Qk: Tag of instruction producing operand
Vj/Vk: Operand value (when ready)

Execution proceeds when operands ready
Independent instructions execute in parallel

Example:
    LW   R1, 0(R2)      ; Takes 100 cycles (cache miss!)
    ADD  R3, R1, R4     ; Depends on LW
    MUL  R5, R6, R7     ; INDEPENDENT - can execute!
    SUB  R8, R5, R9     ; Depends on MUL

In-Order: LW(100) -> ADD -> MUL -> SUB = 100+ cycles
Out-of-Order: LW starts, MUL executes, SUB executes
              ADD waits only for LW, others complete earlier`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Resolution Technique Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Hazard Type</th>
            <th className="p-3 border">Hardware Cost</th>
            <th className="p-3 border">Effectiveness</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Stalling</td>
            <td className="p-3 border">All</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Correct but slow</td>
          </tr>
          <tr>
            <td className="p-3 border">Forwarding</td>
            <td className="p-3 border">Data (RAW)</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Eliminates most</td>
          </tr>
          <tr>
            <td className="p-3 border">Scheduling</td>
            <td className="p-3 border">Data, Control</td>
            <td className="p-3 border">None (compiler)</td>
            <td className="p-3 border">Reduces stalls</td>
          </tr>
          <tr>
            <td className="p-3 border">Branch Prediction</td>
            <td className="p-3 border">Control</td>
            <td className="p-3 border">Medium-High</td>
            <td className="p-3 border">95-99% accuracy</td>
          </tr>
          <tr>
            <td className="p-3 border">Speculation</td>
            <td className="p-3 border">Control, Data</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Hides latency</td>
          </tr>
          <tr>
            <td className="p-3 border">Renaming</td>
            <td className="p-3 border">WAR, WAW</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Eliminates false deps</td>
          </tr>
          <tr>
            <td className="p-3 border">Out-of-Order</td>
            <td className="p-3 border">All</td>
            <td className="p-3 border">Very High</td>
            <td className="p-3 border">Maximum ILP</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Multiple techniques work together to resolve pipeline hazards</li>
        <li>Stalling is simple but expensive in performance</li>
        <li>Forwarding eliminates most data hazards without stalling</li>
        <li>Compiler scheduling can hide latencies at compile time</li>
        <li>Branch prediction speculatively resolves control hazards</li>
        <li>Register renaming eliminates WAR and WAW false dependencies</li>
        <li>Out-of-order execution allows independent instructions to proceed</li>
        <li>Speculation requires careful recovery mechanisms</li>
        <li>Modern CPUs combine all techniques for maximum performance</li>
        <li>Trade-off between hardware complexity and performance gain</li>
      </ul>
    </div>
  </div>
);

export default HazardResolution;
