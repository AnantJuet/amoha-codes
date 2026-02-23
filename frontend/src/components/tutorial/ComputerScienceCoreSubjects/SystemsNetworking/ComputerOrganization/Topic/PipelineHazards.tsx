import React from 'react';

const PipelineHazards: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Pipeline Hazards Overview
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Pipeline hazards are situations that prevent the next instruction from executing
      in its designated clock cycle. They disrupt the smooth flow of instructions through
      the pipeline and can significantly reduce the performance benefits of pipelining.
      Understanding and addressing hazards is crucial for achieving high pipeline efficiency.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Pipeline Hazard?</h2>
    <p className="leading-relaxed">
      A hazard occurs when the pipeline must stall because the next instruction cannot
      execute in its scheduled cycle due to dependencies or resource conflicts. Hazards
      create "bubbles" in the pipeline, reducing throughput below the ideal of one
      instruction per cycle.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Pipeline Without Hazards (Ideal):

Cycle:   1   2   3   4   5   6   7   8   9
I1:     [F] [D] [E] [M] [W]
I2:         [F] [D] [E] [M] [W]
I3:             [F] [D] [E] [M] [W]
I4:                 [F] [D] [E] [M] [W]
I5:                     [F] [D] [E] [M] [W]

CPI = 1.0 (perfect throughput)


Pipeline With Hazard (Stall):

Cycle:   1   2   3   4   5   6   7   8   9  10  11
I1:     [F] [D] [E] [M] [W]
I2:         [F] [D] [--][--][E] [M] [W]        <- 2 cycle stall
I3:             [F] [--][--][D] [E] [M] [W]
I4:                 [--][--][F] [D] [E] [M] [W]

[--] = Bubble (stall cycle)
CPI = 11/4 = 2.75 (degraded performance)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Pipeline Hazards</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Three Categories of Pipeline Hazards:

+------------------+-------------------+-------------------+
|   STRUCTURAL     |      DATA         |     CONTROL       |
|    HAZARDS       |     HAZARDS       |     HAZARDS       |
+------------------+-------------------+-------------------+
|                  |                   |                   |
| Resource         | Dependency        | Branch/Jump       |
| conflicts        | between           | changes           |
|                  | instructions      | program flow      |
|                  |                   |                   |
| Example:         | Example:          | Example:          |
| Two instructions | ADD R1, R2, R3    | BEQ R1, R2, Label |
| need same ALU    | SUB R4, R1, R5    | ADD R3, R4, R5    |
| simultaneously   | (SUB needs R1     | (Which instr to   |
|                  |  from ADD)        |  fetch next?)     |
|                  |                   |                   |
+------------------+-------------------+-------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Structural Hazards</h2>
    <p className="leading-relaxed">
      Structural hazards occur when hardware resources are insufficient to support all
      possible combinations of instructions in the pipeline simultaneously.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Structural Hazard Example: Single Memory Port

If instruction and data share one memory:

Cycle:   1   2   3   4   5   6
I1:     [F] [D] [E] [M] [W]     <- I1 MEM needs memory
I2:         [F] [D] [E] [M] [W]
I3:             [F] [D] [E] [M] [W]
I4:                 [F] ...     <- I4 IF needs memory!
                     ^
                     CONFLICT! Both need memory

Solution: Separate instruction and data caches (Harvard)

Structural Hazard Example: Single ALU

If only one ALU exists:

Cycle:   1   2   3   4   5
I1:     [F] [D] [E] [M] [W]     <- Uses ALU
I2:         [F] [D] [E] [M] [W] <- Uses ALU (same cycle!)
                 ^
                 CONFLICT if both need ALU in cycle 3

Solutions:
- Add more functional units
- Pipeline the functional unit
- Stall one instruction`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Data Hazards</h2>
    <p className="leading-relaxed">
      Data hazards occur when instructions depend on results of previous instructions
      that have not yet completed. There are three types: RAW, WAR, and WAW.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Data Hazard Types:

1. RAW (Read After Write) - True Dependency:
   ADD R1, R2, R3    ; Writes R1
   SUB R4, R1, R5    ; Reads R1 (needs ADD's result!)

   Most common and problematic hazard

2. WAR (Write After Read) - Anti-Dependency:
   ADD R1, R2, R3    ; Reads R2
   SUB R2, R4, R5    ; Writes R2

   Usually not a problem in simple pipelines
   (Read occurs before Write in pipeline order)

3. WAW (Write After Write) - Output Dependency:
   ADD R1, R2, R3    ; Writes R1
   SUB R1, R4, R5    ; Writes R1

   Problem in out-of-order or multi-cycle operations


RAW Hazard Example:

ADD R1, R2, R3   ; Result available after WB (cycle 5)
SUB R4, R1, R5   ; Needs R1 in ID stage (cycle 3!)

Cycle:   1   2   3   4   5   6
ADD:    [F] [D] [E] [M] [W]
                         ^--- R1 written here
SUB:        [F] [D] ...
                 ^--- R1 needed here!

SUB needs R1 at cycle 3, but ADD writes R1 at cycle 5
Gap of 2 cycles = 2 stall cycles needed (without forwarding)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Control Hazards</h2>
    <p className="leading-relaxed">
      Control hazards (also called branch hazards) occur when the pipeline must make
      decisions about which instructions to fetch before knowing the outcome of branch
      instructions.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Control Hazard Example:

       BEQ R1, R2, Label   ; Branch if R1 == R2
       ADD R3, R4, R5      ; Next sequential instruction
       SUB R6, R7, R8      ; Following instruction
       ...
Label: OR  R9, R10, R11    ; Branch target

Problem:
Cycle:   1   2   3   4   5   6
BEQ:    [F] [D] [E] [M] [W]
             ^       ^
             |       Branch resolved here (MEM stage)
             |
ADD:        [F] [D] [E] [M] [W]   <- Wrong path!
SUB:            [F] [D] [E] [M]   <- Wrong path!
OR:                 ???

By the time we know if branch is taken (cycle 4),
we've already fetched 2-3 wrong instructions!

If branch taken: Must flush ADD and SUB (wasted cycles)

Control Hazard Impact:
- Branches are ~15-25% of instructions
- Each misprediction can cost 2-20 cycles (depending on pipeline depth)
- Modern processors: Branch prediction is critical`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Summary of Hazard Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Hazard Type</th>
            <th className="p-3 border">Cause</th>
            <th className="p-3 border">Example</th>
            <th className="p-3 border">Solutions</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Structural</td>
            <td className="p-3 border">Hardware resource conflict</td>
            <td className="p-3 border">Single memory port</td>
            <td className="p-3 border">Add resources, stall</td>
          </tr>
          <tr>
            <td className="p-3 border">Data (RAW)</td>
            <td className="p-3 border">Read needs prior write result</td>
            <td className="p-3 border">ADD R1; SUB R4,R1</td>
            <td className="p-3 border">Forwarding, stall</td>
          </tr>
          <tr>
            <td className="p-3 border">Data (WAR)</td>
            <td className="p-3 border">Write before read completes</td>
            <td className="p-3 border">Read R2; Write R2</td>
            <td className="p-3 border">Usually no issue in-order</td>
          </tr>
          <tr>
            <td className="p-3 border">Data (WAW)</td>
            <td className="p-3 border">Multiple writes to same reg</td>
            <td className="p-3 border">Write R1; Write R1</td>
            <td className="p-3 border">Register renaming</td>
          </tr>
          <tr>
            <td className="p-3 border">Control</td>
            <td className="p-3 border">Branch outcome unknown</td>
            <td className="p-3 border">BEQ, JMP instructions</td>
            <td className="p-3 border">Predict, flush, delay</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hazard Detection</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Hazard Detection Unit:

+--------------------------------------------------+
|            Hazard Detection Logic                 |
+--------------------------------------------------+
|                                                   |
|  Inputs:                                          |
|  - ID/EX.RegisterRs  (source register 1)         |
|  - ID/EX.RegisterRt  (source register 2)         |
|  - EX/MEM.RegisterRd (destination of EX stage)   |
|  - MEM/WB.RegisterRd (destination of MEM stage)  |
|  - EX/MEM.MemRead    (is it a load instruction?) |
|                                                   |
|  Outputs:                                         |
|  - PCWrite           (stall PC if 0)             |
|  - IF/IDWrite        (stall IF/ID if 0)          |
|  - MuxControl        (insert bubble if 1)        |
|                                                   |
+--------------------------------------------------+

Data Hazard Detection (for forwarding):

if (EX/MEM.RegWrite and EX/MEM.Rd != 0 and
    EX/MEM.Rd == ID/EX.Rs)
    ForwardA = 10  (forward from EX/MEM)

if (EX/MEM.RegWrite and EX/MEM.Rd != 0 and
    EX/MEM.Rd == ID/EX.Rt)
    ForwardB = 10

Load-Use Hazard (requires stall):

if (ID/EX.MemRead and
    (ID/EX.Rt == IF/ID.Rs or ID/EX.Rt == IF/ID.Rt))
    Stall pipeline (insert bubble)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Impact on Performance</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`CPI with Hazards:

CPI = CPI_ideal + Stall_cycles_per_instruction

CPI = 1 + (Structural_stalls + Data_stalls + Control_stalls)

Example Calculation:
- Instruction mix: 25% loads, 10% stores, 15% branches, 50% ALU
- Load-use hazard: 40% of loads followed by dependent instruction
- Branch misprediction: 30% of branches mispredicted
- Branch penalty: 2 cycles

Load stalls = 0.25 * 0.40 * 1 cycle = 0.10 cycles/instr
Branch stalls = 0.15 * 0.30 * 2 cycles = 0.09 cycles/instr

CPI = 1.0 + 0.10 + 0.09 = 1.19

Performance Impact:
Ideal CPI: 1.0
Actual CPI: 1.19
Efficiency: 1.0 / 1.19 = 84%

16% performance loss due to hazards!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">General Hazard Solutions</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Stalling:</strong> Pause pipeline until hazard resolves (simple but slow)</li>
      <li><strong>Forwarding/Bypassing:</strong> Pass data directly between stages</li>
      <li><strong>Branch Prediction:</strong> Guess branch outcome to reduce control stalls</li>
      <li><strong>Compiler Scheduling:</strong> Reorder instructions to avoid hazards</li>
      <li><strong>Hardware Duplication:</strong> Add more resources to avoid structural hazards</li>
      <li><strong>Out-of-Order Execution:</strong> Execute independent instructions while waiting</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Pipeline hazards prevent instructions from executing in their scheduled cycle</li>
        <li>Three types: Structural (resources), Data (dependencies), Control (branches)</li>
        <li>Structural hazards result from hardware resource conflicts</li>
        <li>Data hazards (RAW most common) occur when instructions depend on prior results</li>
        <li>Control hazards occur due to branch/jump instructions</li>
        <li>Hazards create pipeline bubbles/stalls that increase CPI above 1.0</li>
        <li>Hardware hazard detection units identify conflicts automatically</li>
        <li>Solutions include stalling, forwarding, prediction, and scheduling</li>
        <li>Modern processors use multiple techniques to minimize hazard impact</li>
      </ul>
    </div>
  </div>
);

export default PipelineHazards;
