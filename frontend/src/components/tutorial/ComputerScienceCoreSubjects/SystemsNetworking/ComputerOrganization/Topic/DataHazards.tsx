import React from 'react';

const DataHazards: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Hazards
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data hazards occur when instructions in a pipeline depend on the results of
      previous instructions that have not yet completed. These dependencies arise
      because the pipeline allows multiple instructions to be in various stages of
      execution simultaneously. Data hazards are the most common type of hazard and
      require careful handling to maintain correct program execution.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Data Hazards</h2>
    <p className="leading-relaxed">
      Data hazards are classified based on the order of read and write operations
      between dependent instructions:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Data Hazard Classification:

1. RAW (Read After Write) - True Dependency
   Instruction j tries to read before instruction i writes

   i: ADD R1, R2, R3    ; Writes R1
   j: SUB R4, R1, R5    ; Reads R1 (depends on ADD result)

   Order needed: Write THEN Read
   Actual order possible: Read THEN Write (hazard!)


2. WAR (Write After Read) - Anti-Dependency
   Instruction j tries to write before instruction i reads

   i: ADD R1, R2, R3    ; Reads R2
   j: SUB R2, R4, R5    ; Writes R2

   Order needed: Read THEN Write
   Usually OK in simple in-order pipelines


3. WAW (Write After Write) - Output Dependency
   Instruction j tries to write before instruction i writes

   i: ADD R1, R2, R3    ; Writes R1
   j: SUB R1, R4, R5    ; Writes R1 (second write)

   Order needed: First write THEN Second write
   Problem in out-of-order or multi-cycle operations`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RAW Hazards (True Dependencies)</h2>
    <p className="leading-relaxed">
      RAW hazards are the most critical because they represent true data dependencies
      that cannot be eliminated through renaming or reordering.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`RAW Hazard Example:

ADD R1, R2, R3    ; R1 = R2 + R3 (writes R1 in cycle 5)
SUB R4, R1, R5    ; R4 = R1 - R5 (needs R1 in cycle 3)

Pipeline Timing:

Cycle:    1   2   3   4   5   6   7
ADD:     [F] [D] [E] [M] [W]
                          ^--- R1 written (cycle 5)
SUB:         [F] [D] [E] [M] [W]
                  ^--- R1 needed (cycle 3)!

Problem: SUB needs R1 at cycle 3
         ADD writes R1 at cycle 5
         Gap of 2 cycles!

Without Mitigation:

Cycle:    1   2   3   4   5   6   7   8   9
ADD:     [F] [D] [E] [M] [W]
SUB:         [F] [D] [--][--][E] [M] [W]
                      ^---^
                      2 stall cycles

CPI impact: 2 extra cycles for this dependency`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RAW Hazard Distance</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Distance Between Dependent Instructions:

ADD R1, R2, R3    ; Producer (writes R1)
SUB R4, R1, R5    ; Consumer (reads R1) - Distance = 1
AND R6, R1, R7    ; Consumer - Distance = 2
OR  R8, R1, R9    ; Consumer - Distance = 3

Stall Cycles = max(0, 3 - Distance)  (for 5-stage pipeline)

Distance 1: Need 2 stalls (without forwarding)
Distance 2: Need 1 stall (without forwarding)
Distance 3+: No stalls (R1 written before read)

Pipeline View:

Cycle:    1   2   3   4   5   6   7   8
ADD:     [F] [D] [E] [M] [W]
                          ^--- R1 available after WB

Dist 1:      [F] [D] [E] [M] [W]    Need R1 at cycle 3
                  ^--- Read at ID, 2 cycles too early

Dist 2:          [F] [D] [E] [M] [W]   Need R1 at cycle 4
                      ^--- Read at ID, 1 cycle too early

Dist 3:              [F] [D] [E] [M] [W]  Need R1 at cycle 5
                          ^--- Read at ID, same as WB (OK with proper timing)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Forwarding (Bypassing)</h2>
    <p className="leading-relaxed">
      Forwarding sends data directly from where it is produced to where it is needed,
      bypassing the register file write and read.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Data Forwarding Concept:

Without Forwarding:
ADD computes result -> stores in EX/MEM reg -> MEM stage
                    -> stores in MEM/WB reg -> WB stage
                    -> writes to RegFile   -> Available!

With Forwarding:
ADD computes result -> Forward directly to SUB's EX stage!

Forwarding Paths:

+-------+    +-------+    +-------+    +-------+    +-------+
|  IF   |--->|  ID   |--->|  EX   |--->|  MEM  |--->|  WB   |
+-------+    +-------+    +-------+    +-------+    +-------+
                              ^            |
                              |            |  EX/MEM Forward
                              +------------+
                              ^                   |
                              |                   |  MEM/WB Forward
                              +-------------------+

Forward from EX/MEM: ALU result available 1 cycle early
Forward from MEM/WB: ALU result or memory data available

With Forwarding:

Cycle:    1   2   3   4   5   6
ADD:     [F] [D] [E] [M] [W]
                  ^--- Result computed, forward!
SUB:         [F] [D] [E] [M] [W]
                      ^--- Receives forwarded value!

NO STALLS with forwarding (for register-to-register)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Forwarding Unit Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Forwarding Unit Logic:

Inputs:
- ID/EX.Rs, ID/EX.Rt (source registers of instruction in EX)
- EX/MEM.Rd (destination of instruction in MEM)
- MEM/WB.Rd (destination of instruction in WB)
- EX/MEM.RegWrite, MEM/WB.RegWrite (control signals)

Outputs:
- ForwardA (select for ALU input A)
- ForwardB (select for ALU input B)

ForwardA Logic:
if (EX/MEM.RegWrite and EX/MEM.Rd != 0 and
    EX/MEM.Rd == ID/EX.Rs)
    ForwardA = 10  // Forward from EX/MEM

else if (MEM/WB.RegWrite and MEM/WB.Rd != 0 and
         MEM/WB.Rd == ID/EX.Rs)
    ForwardA = 01  // Forward from MEM/WB

else
    ForwardA = 00  // No forwarding (use register file)

(Similar logic for ForwardB using ID/EX.Rt)

Forwarding Mux in EX Stage:

                  ForwardA
                     |
                     v
              +------------+
Reg[Rs] ---->|    MUX     |----> ALU Input A
EX/MEM.Result>|  (3-to-1)  |
MEM/WB.Result>|            |
              +------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Load-Use Hazard</h2>
    <p className="leading-relaxed">
      Load-use hazards occur when an instruction immediately following a load needs
      the loaded data. Forwarding alone cannot solve this because the data is not
      available until after the MEM stage.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Load-Use Hazard:

LW  R1, 0(R2)     ; Load R1 from memory (data at MEM stage)
ADD R3, R1, R4    ; Needs R1 in EX stage!

Cycle:    1   2   3   4   5   6
LW:      [F] [D] [E] [M] [W]
                      ^--- Data available END of cycle 4
ADD:         [F] [D] [E] [M] [W]
                      ^--- Need data START of cycle 4!

Problem: Even with forwarding, data not ready in time!

Solution: Stall + Forward

Cycle:    1   2   3   4   5   6   7
LW:      [F] [D] [E] [M] [W]
                      ^--- Data available
ADD:         [F] [D] [--][E] [M] [W]
                      ^    ^--- Forward from MEM/WB
                  Stall (bubble)

One stall cycle unavoidable for load-use!

Load-Use Detection:
if (ID/EX.MemRead and
    (ID/EX.Rt == IF/ID.Rs or ID/EX.Rt == IF/ID.Rt))
    Insert stall`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handling Load-Use with Code Scheduling</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Compiler Scheduling to Avoid Load-Use Stall:

Original Code:
LW  R1, 0(R2)     ; Load
ADD R3, R1, R4    ; Uses R1 immediately (stall!)
SUB R5, R6, R7    ; Independent instruction

Reordered Code:
LW  R1, 0(R2)     ; Load
SUB R5, R6, R7    ; Independent (fills delay slot)
ADD R3, R1, R4    ; Now uses R1 after 1 cycle

Execution:

Original (with stall):
Cycle:    1   2   3   4   5   6   7   8
LW:      [F] [D] [E] [M] [W]
ADD:         [F] [D] [--][E] [M] [W]
SUB:             [F] [--][D] [E] [M] [W]

Reordered (no stall):
Cycle:    1   2   3   4   5   6   7
LW:      [F] [D] [E] [M] [W]
SUB:         [F] [D] [E] [M] [W]     <- Fills gap
ADD:             [F] [D] [E] [M] [W] <- R1 ready via forward

Saved 1 cycle by reordering!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">WAR and WAW Hazards</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`WAR (Anti-Dependency):

ADD R1, R2, R3    ; Reads R2 in cycle 2 (ID stage)
SUB R2, R4, R5    ; Writes R2 in cycle 6 (WB stage)

Cycle:    1   2   3   4   5   6
ADD:     [F] [D] [E] [M] [W]
              ^--- R2 read
SUB:         [F] [D] [E] [M] [W]
                              ^--- R2 written

Read (cycle 2) happens BEFORE Write (cycle 6)
NO HAZARD in simple in-order pipeline!

WAR can occur with:
- Out-of-order execution
- Variable latency instructions

WAW (Output Dependency):

ADD R1, R2, R3    ; Writes R1 in cycle 5
SUB R1, R4, R5    ; Writes R1 in cycle 6

Cycle:    1   2   3   4   5   6
ADD:     [F] [D] [E] [M] [W]
                          ^--- First write
SUB:         [F] [D] [E] [M] [W]
                              ^--- Second write

First write (cycle 5) before Second write (cycle 6)
NO HAZARD in simple pipeline!

WAW can occur with:
- Out-of-order execution
- Multi-cycle operations (FP div completes after FP add)

Solution: Register Renaming eliminates WAR and WAW`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Summary of Data Hazard Handling</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Hazard</th>
            <th className="p-3 border">Cause</th>
            <th className="p-3 border">Solution</th>
            <th className="p-3 border">Stalls</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">RAW (ALU-ALU)</td>
            <td className="p-3 border">Inst needs result of prior ALU op</td>
            <td className="p-3 border">Forwarding</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">RAW (Load-Use)</td>
            <td className="p-3 border">Inst needs loaded data</td>
            <td className="p-3 border">Stall + Forward</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">WAR</td>
            <td className="p-3 border">Write before prior read</td>
            <td className="p-3 border">None (in-order)</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">WAW</td>
            <td className="p-3 border">Second write before first</td>
            <td className="p-3 border">None (in-order)</td>
            <td className="p-3 border">0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Data hazards occur due to dependencies between instructions</li>
        <li>RAW (Read After Write) is the true dependency, most common hazard</li>
        <li>WAR and WAW are anti- and output dependencies, rarely problems in simple pipelines</li>
        <li>Data forwarding bypasses register file to provide values early</li>
        <li>Forwarding eliminates stalls for most RAW hazards</li>
        <li>Load-use hazards require at least 1 stall even with forwarding</li>
        <li>Compiler scheduling can fill load-use slots with independent instructions</li>
        <li>Register renaming eliminates WAR and WAW in out-of-order processors</li>
        <li>Hazard detection unit identifies dependencies automatically</li>
      </ul>
    </div>
  </div>
);

export default DataHazards;
