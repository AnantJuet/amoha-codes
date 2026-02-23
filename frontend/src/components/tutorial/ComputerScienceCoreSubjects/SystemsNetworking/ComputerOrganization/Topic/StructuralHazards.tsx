import React from 'react';

const StructuralHazards: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Structural Hazards
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Structural hazards occur when the hardware cannot support all possible combinations
      of instructions in simultaneous overlapped execution. They arise from resource
      conflicts where two or more instructions in the pipeline require the same hardware
      resource at the same time. Proper hardware design can eliminate most structural hazards.
    </p>

    <h2 className="text-3xl font-bold mt-8">Understanding Structural Hazards</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Structural Hazard Concept:

Resource in Demand:
+-------------------+
|   Shared Resource |  <-- Only one access allowed
|   (Memory, ALU,   |      per cycle
|    Register Port) |
+-------------------+
        ^   ^
        |   |
     Inst1  Inst2   <-- Both need resource in same cycle!

Result: One instruction must wait (stall)

Without Structural Hazards (Sufficient Resources):
Every combination of instructions can proceed without conflict

With Structural Hazards:
Some combinations require stalling
Pipeline efficiency decreases`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Structural Hazard Examples</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Single Memory Port (Unified Memory)</h3>
    <p className="leading-relaxed">
      The most classic structural hazard occurs when instruction fetch and data access
      must share a single memory port.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Single Memory Port Hazard:

Both IF (Fetch) and MEM (Data) stages need memory access

Cycle:    1   2   3   4   5   6   7
LW R1:   [F] [D] [E] [M] [W]
                      ^--- LW needs memory (data read)
I2:          [F] [D] [E] [M] [W]
I3:              [F] [D] [E] [M] [W]
I4:                  [F]  ???
                      ^--- I4 needs memory (instruction fetch)

CONFLICT at Cycle 4:
- LW instruction in MEM stage needs data memory
- I4 needs to fetch from instruction memory
- Only ONE memory port available!

Without Hazard Mitigation:
Cycle:    1   2   3   4   5   6   7   8
LW R1:   [F] [D] [E] [M] [W]
I2:          [F] [D] [E] [M] [W]
I3:              [F] [D] [E] [M] [W]
I4:                  [--][F] [D] [E] [M] [W]
                      ^
                  Stall (bubble)

One stall cycle for every load/store instruction!`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Single ALU for Multiple Operations</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Single ALU Hazard:

If address calculation and arithmetic share one ALU:

ADD R1, R2, R3    ; Needs ALU for addition
LW  R4, 100(R5)   ; Needs ALU for address calc (100 + R5)

Cycle:    1   2   3   4   5   6
ADD:     [F] [D] [E] [M] [W]
                  ^--- ADD uses ALU
LW:          [F] [D] [E] [M] [W]
                      ^--- LW needs ALU for address!

If both in EX at same time and only one ALU exists:

Cycle:    1   2   3   4   5   6   7
ADD:     [F] [D] [E] [M] [W]
LW:          [F] [D] [--][E] [M] [W]
                      ^
                  Stall waiting for ALU

Solution: Separate adder for address calculation
          or multiple ALU units`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Register File Port Limitations</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Register File Port Hazard:

Register file with limited read/write ports:

Typical needs per cycle:
- ID stage: 2 reads (Rs, Rt for current instruction)
- WB stage: 1 write (Rd for completing instruction)

If register file has only 2 read ports:

ADD R1, R2, R3    ; ID needs to read R2, R3
MUL R4, R5, R6    ; ID needs to read R5, R6 (if both in ID!)

Usually not a problem (one instruction per ID stage)

BUT with superscalar (multiple instructions in ID):

+------------------+
| Register File    |
| 2 Read Ports     |  <-- Insufficient for 2 instructions!
| 1 Write Port     |
+------------------+

Two ADD instructions need 4 reads total
Only 2 read ports = Structural hazard!

Solution: Add more register file ports
(Modern CPUs have many read/write ports)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Floating Point Unit Hazards</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`FP Unit Structural Hazard:

Floating point operations take multiple cycles:

FADD.D F1, F2, F3    ; FP Add takes 4 cycles
FMUL.D F4, F5, F6    ; FP Multiply takes 5 cycles
FDIV.D F7, F8, F9    ; FP Divide takes 20+ cycles

With single FP adder:

Cycle:    1   2   3   4   5   6   7   8   9
FADD:    [F] [D] [E1][E2][E3][E4][M] [W]
                  ^           ^
              FP Adder busy for 4 cycles

FADD2:       [F] [D] [--][--][--][E1][E2][E3][E4][M] [W]
                      ^
                 Stall: FP Adder occupied

Solution: Pipeline the FP unit
          or provide multiple FP units

Pipelined FP Adder (4-stage):
Cycle:    1   2   3   4   5   6   7   8
FADD1:   [F] [D] [A1][A2][A3][A4][M] [W]
FADD2:       [F] [D] [A1][A2][A3][A4][M] [W]
                      ^
                  A1 stage free, FADD2 can start!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Structural Hazard Solutions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Problem</th>
            <th className="p-3 border">Solution</th>
            <th className="p-3 border">Trade-off</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Single memory port</td>
            <td className="p-3 border">Separate I-Cache and D-Cache</td>
            <td className="p-3 border">More hardware, cache coherency</td>
          </tr>
          <tr>
            <td className="p-3 border">Single ALU</td>
            <td className="p-3 border">Multiple ALUs or dedicated adders</td>
            <td className="p-3 border">More silicon area</td>
          </tr>
          <tr>
            <td className="p-3 border">Limited register ports</td>
            <td className="p-3 border">Multi-ported register file</td>
            <td className="p-3 border">Complex, power hungry</td>
          </tr>
          <tr>
            <td className="p-3 border">Long FP operations</td>
            <td className="p-3 border">Pipelined FP units</td>
            <td className="p-3 border">More pipeline stages</td>
          </tr>
          <tr>
            <td className="p-3 border">All hazards</td>
            <td className="p-3 border">Stalling (simple)</td>
            <td className="p-3 border">Performance loss</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Harvard Architecture Solution</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Von Neumann (Single Memory) vs Harvard (Separate Memories):

Von Neumann Architecture:
+--------+          +--------+
|  CPU   |<=======> | Memory |  <-- Single memory for
+--------+          | (Instr |      instructions AND data
                    |  +Data)|
                    +--------+

Structural hazard when IF and MEM need memory same cycle


Harvard Architecture:
+--------+    +--------+
|  CPU   |<==>| I-Mem  |  <-- Instruction memory/cache
+--------+    +--------+
    ||
    ||        +--------+
    ||=======>| D-Mem  |  <-- Data memory/cache
              +--------+

No structural hazard: IF uses I-Mem, MEM uses D-Mem

Modern CPUs use Modified Harvard:
- Separate L1 I-Cache and L1 D-Cache (Harvard at L1)
- Unified L2/L3 Cache and Main Memory (Von Neumann)

Best of both worlds:
- No IF/MEM conflicts at L1
- Simpler main memory design`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stalling for Structural Hazards</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Stall Implementation:

When structural hazard detected:
1. Insert bubble (NOP) in pipeline
2. Prevent instruction from advancing
3. Wait until resource is free

Stall Control Signals:
- IF/ID Write Enable = 0  (freeze IF stage)
- PC Write = 0            (don't fetch next)
- Insert NOP in next stage

Hardware Implementation:

+----------+     +-----------+
|  Hazard  |---->| Stall     |
| Detect   |     | Control   |
+----------+     +-----------+
     ^                 |
     |                 v
+----------+     +-----------+
| Pipeline |<----| Bubble    |
| Registers|     | Generator |
+----------+     +-----------+

Performance Impact:

If structural hazard occurs H% of cycles:
CPI = 1 + H * (stall cycles per hazard)

Example: Memory conflict 25% of time, 1 cycle stall
CPI = 1 + 0.25 * 1 = 1.25
Performance = 1/1.25 = 80% of ideal`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Design Trade-offs</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Cost vs Performance Trade-off:

Option 1: Allow Structural Hazards (Stalling)
- Less hardware (cheaper)
- Some performance loss
- Suitable for: Embedded, low-power designs

Option 2: Eliminate All Structural Hazards
- More hardware (expensive)
- Maximum performance
- Suitable for: High-performance processors

Cost-Benefit Analysis:

Resource             Add Cost   Stall Reduction
-----------          --------   ---------------
Separate I$/D$       +30%       ~25% of cycles
Second ALU           +10%       ~5% of cycles
Multi-port RegFile   +40%       Enables superscalar

Modern Approach:
- Eliminate common structural hazards (memory, basic ALU)
- Accept stalls for rare cases (FP divide, complex ops)
- Pipeline long-latency units

RISC Philosophy:
Design pipeline so structural hazards are IMPOSSIBLE
by providing sufficient resources for all combinations`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Structural Hazards in Superscalar</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Superscalar Structural Hazards:

Superscalar issues multiple instructions per cycle
Resource demands multiply!

2-way Superscalar Example:
Per cycle needs: 2 IF, 2 ID, 2 EX, 2 MEM, 2 WB

+--------+   +--------+
| Inst 1 |   | Inst 2 |
+--------+   +--------+
    |            |
    v            v
  [ALU]        [ALU]    <-- Need 2 ALUs!
    |            |
    v            v
 [D-Mem]      [D-Mem]   <-- Need 2 memory ports!

If both instructions are loads:
- 2 data cache accesses needed
- Usually only 1-2 ports available
- STRUCTURAL HAZARD!

Solutions:
1. Multi-ported caches (expensive)
2. Banked caches (parallel banks)
3. Limit issue to avoid conflicts
4. Stall one instruction

Modern CPUs handle this with:
- 2+ load/store units
- Multi-banked L1 caches
- Sophisticated issue logic`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Structural hazards occur when hardware resources cannot support all instruction combinations</li>
        <li>Common causes: shared memory, single ALU, limited register ports</li>
        <li>Harvard architecture (separate I/D cache) eliminates memory structural hazards</li>
        <li>Solutions include resource duplication, pipelining units, or stalling</li>
        <li>Design choice: trade-off between hardware cost and performance</li>
        <li>RISC design philosophy aims to eliminate structural hazards by design</li>
        <li>Superscalar processors face more structural hazards due to multiple issues</li>
        <li>Modern CPUs typically eliminate common structural hazards</li>
        <li>Long-latency operations may still cause structural hazards</li>
      </ul>
    </div>
  </div>
);

export default StructuralHazards;
