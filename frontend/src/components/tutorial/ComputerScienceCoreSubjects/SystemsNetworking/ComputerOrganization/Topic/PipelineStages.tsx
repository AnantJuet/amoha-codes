import React from 'react';

const PipelineStages: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Pipeline Stages
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A pipelined processor divides instruction execution into discrete stages, each
      performing a specific function. The classic RISC pipeline uses five stages: Instruction
      Fetch (IF), Instruction Decode (ID), Execute (EX), Memory Access (MEM), and Write Back
      (WB). Understanding each stage is essential for comprehending how pipelining achieves
      high instruction throughput.
    </p>

    <h2 className="text-3xl font-bold mt-8">Classic 5-Stage Pipeline</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`5-Stage RISC Pipeline Overview:

+--------+     +--------+     +--------+     +--------+     +--------+
|   IF   |---->|   ID   |---->|   EX   |---->|  MEM   |---->|   WB   |
|        |     |        |     |        |     |        |     |        |
| Fetch  |     | Decode |     |Execute |     | Memory |     | Write  |
| Instr  |     | & Read |     |        |     | Access |     |  Back  |
+--------+     +--------+     +--------+     +--------+     +--------+
    |              |              |              |              |
    v              v              v              v              v
[IF/ID Reg]   [ID/EX Reg]   [EX/MEM Reg]  [MEM/WB Reg]    [Done]

Each stage is separated by pipeline registers that:
- Store intermediate results
- Enable parallel operation of all stages
- Isolate stages from each other`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stage 1: Instruction Fetch (IF)</h2>
    <p className="leading-relaxed">
      The IF stage retrieves the next instruction from memory (instruction cache) using
      the Program Counter (PC) and prepares for the next fetch.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Instruction Fetch Stage:

+------------------+
|    IF Stage      |
+------------------+
|                  |
|  +------------+  |        +--------------+
|  |     PC     |---------->| Instruction  |
|  +------------+  |        |    Memory    |
|        |         |        |   (I-Cache)  |
|        v         |        +--------------+
|  +------------+  |              |
|  |   Adder    |  |              v
|  |   PC + 4   |  |        +--------------+
|  +------------+  |        | Instruction  |
|        |         |        +--------------+
+--------|--+------+              |
         |  |                     |
         v  +---------------------|
    [Next PC]              [IF/ID Register]

Operations:
1. Send PC to instruction memory
2. Fetch instruction from I-Cache
3. Calculate PC + 4 (next sequential address)
4. Store instruction in IF/ID register
5. Update PC for next cycle

IF/ID Register Contains:
- Fetched instruction (32 bits)
- PC + 4 (for branch calculations)

PC Update Logic:
- Normal: PC = PC + 4
- Branch taken: PC = Branch target
- Jump: PC = Jump address`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stage 2: Instruction Decode (ID)</h2>
    <p className="leading-relaxed">
      The ID stage decodes the instruction, reads operands from the register file, and
      prepares control signals for subsequent stages.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Instruction Decode Stage:

From IF/ID Register
        |
        v
+------------------+
|    ID Stage      |
+------------------+
|  +-----------+   |
|  | Control   |---+---> Control signals to all stages
|  | Unit      |   |
|  +-----------+   |
|        ^         |
|        |         |
|  +-----------+   |     +----------------+
|  |Instruction|   |     |                |
|  | Decoder   |   |     | Register File  |
|  +-----------+   |     |  (32 regs)     |
|        |         |     +----------------+
|    +---+---+     |       ^    |    |
|    v       v     |       |    v    v
|  [rs]    [rt]    |     [rd] [Data1][Data2]
|    |       |     |           |      |
|    +-------+-----+           |      |
|            |                 v      v
+------------+-----------+-----------+
             |           |           |
             v           v           v
        [ID/EX Register: Control, Data1, Data2, Immediate, rd]

Operations:
1. Decode opcode and function fields
2. Generate control signals
3. Read register file (rs, rt as source registers)
4. Sign-extend immediate field (for I-type)
5. Prepare data for execution stage

ID/EX Register Contains:
- Control signals (ALUOp, MemRead, MemWrite, etc.)
- Read data 1 (from rs)
- Read data 2 (from rt)
- Sign-extended immediate
- Destination register number (rd or rt)
- PC + 4 (for branch offset calculation)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stage 3: Execute (EX)</h2>
    <p className="leading-relaxed">
      The EX stage performs arithmetic/logical operations in the ALU, calculates memory
      addresses, and evaluates branch conditions.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Execute Stage:

From ID/EX Register
        |
        v
+------------------+
|    EX Stage      |
+------------------+
|                  |
|  +-----------+   |     +-----------+
|  |  Branch   |<--|---->| PC + 4 +  |
|  |  Calc     |   |     | Offset    |
|  +-----------+   |     +-----------+
|        |         |          |
|        v         |          v
|  Branch Target   |    [Branch Address]
|                  |
|  +-----------+   |
|  |    ALU    |   |
|  +-----------+   |
|    ^       ^     |
|    |       |     |
| [Data1] [Data2   |
|          or      |
|          Imm]    |
|                  |
|   ALU Operation: |
|   - ADD, SUB     |
|   - AND, OR, XOR |
|   - SLT, SLL     |
|   - Address calc |
+------------------+
         |
         v
[EX/MEM Register: Control, ALU Result, Data2, rd, Zero flag]

Operations:
1. ALU computes result based on ALUOp
2. For R-type: operates on two register values
3. For Load/Store: calculates memory address (base + offset)
4. For Branch: calculates target and evaluates condition
5. Zero flag set if ALU result is zero

ALU Control:
ALUOp   Function    Operation
------  --------    ---------
000     Load/Store  Add (address calculation)
001     Branch      Subtract (comparison)
010     R-type      Depends on function field
011     Immediate   Add immediate`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stage 4: Memory Access (MEM)</h2>
    <p className="leading-relaxed">
      The MEM stage accesses data memory for load and store instructions. Other instructions
      simply pass through this stage.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory Access Stage:

From EX/MEM Register
        |
        v
+------------------+
|   MEM Stage      |
+------------------+
|                  |
|  Control Signals:|
|  - MemRead       |
|  - MemWrite      |
|                  |
|  +-----------+   |
|  |   Data    |   |
|  |  Memory   |   |
|  | (D-Cache) |   |
|  +-----------+   |
|    ^       |     |
|    |       |     |
| [Address]  |     |
| (ALU       |     |
|  Result)   v     |
|        [Read     |
|         Data]    |
|  ^               |
|  |               |
|  [Write Data]    |
|  (from rt)       |
|                  |
+------------------+
         |
         v
[MEM/WB Register: Control, Read Data, ALU Result, rd]

Operations:
1. For Load (LW): Read data from memory[address]
2. For Store (SW): Write data to memory[address]
3. For other instructions: Pass ALU result through

Memory Operations:
Instruction  MemRead  MemWrite  Action
-----------  -------  --------  ------
LW           1        0         Read from memory
SW           0        1         Write to memory
R-type       0        0         No memory access
Branch       0        0         No memory access

MEM/WB Register Contains:
- Control signals (MemtoReg, RegWrite)
- Data from memory (for loads)
- ALU result (for R-type and address)
- Destination register number`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stage 5: Write Back (WB)</h2>
    <p className="leading-relaxed">
      The WB stage writes results back to the register file, completing the instruction
      execution.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Write Back Stage:

From MEM/WB Register
        |
        v
+------------------+
|    WB Stage      |
+------------------+
|                  |
|  +-----------+   |
|  |   MUX     |   |
|  | MemtoReg  |   |
|  +-----------+   |
|    ^       ^     |
|    |       |     |
| [Memory] [ALU    |
|  Data]   Result] |
|    |             |
|    v             |
| [Write Data]     |
|    |             |
|    v             |
| +-------------+  |
| |  Register   |  |
| |    File     |  |
| +-------------+  |
|        ^         |
|        |         |
|  [rd] and        |
|  [RegWrite]      |
|                  |
+------------------+

Operations:
1. Select write data (memory data or ALU result)
2. Write to destination register if RegWrite enabled
3. Instruction complete!

Write Data Selection:
Instruction  MemtoReg  Write Data Source
-----------  --------  -----------------
LW           1         Data from memory
R-type       0         ALU result
Addi, etc.   0         ALU result
SW           X         No write (RegWrite=0)
Branch       X         No write (RegWrite=0)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Pipeline Datapath</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Simplified 5-Stage Pipeline Datapath:


  +---+     +------+     +------+     +------+     +------+
  |   |     | IF/  |     | ID/  |     | EX/  |     | MEM/ |
  |   |---->| ID   |---->| EX   |---->| MEM  |---->| WB   |
  | PC|     | Reg  |     | Reg  |     | Reg  |     | Reg  |
  |   |     +------+     +------+     +------+     +------+
  +---+        |            |            |            |
     ^         v            v            v            v
     |    +--------+   +--------+   +--------+   +--------+
     |    | Instr  |   |Register|   |  ALU   |   |  Data  |
     |    | Memory |   |  File  |   |        |   | Memory |
     |    +--------+   +--------+   +--------+   +--------+
     |                      ^                         |
     |                      |                         |
     |                      +-------------------------+
     |                           Write Back path
     |
     +-------- PC Update Logic <-------- Branch/Jump

Pipeline Registers Store:
IF/ID: Instruction, PC+4
ID/EX: Control, Rs data, Rt data, Imm, rd, PC+4
EX/MEM: Control, ALU result, Rt data, Zero, rd
MEM/WB: Control, Memory data, ALU result, rd`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Control Signals Through Pipeline</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Signal</th>
            <th className="p-3 border">Stage Used</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">RegDst</td>
            <td className="p-3 border">EX</td>
            <td className="p-3 border">Select destination register (rd vs rt)</td>
          </tr>
          <tr>
            <td className="p-3 border">ALUSrc</td>
            <td className="p-3 border">EX</td>
            <td className="p-3 border">Select ALU input (register vs immediate)</td>
          </tr>
          <tr>
            <td className="p-3 border">ALUOp</td>
            <td className="p-3 border">EX</td>
            <td className="p-3 border">ALU operation type</td>
          </tr>
          <tr>
            <td className="p-3 border">Branch</td>
            <td className="p-3 border">MEM</td>
            <td className="p-3 border">Branch instruction flag</td>
          </tr>
          <tr>
            <td className="p-3 border">MemRead</td>
            <td className="p-3 border">MEM</td>
            <td className="p-3 border">Enable memory read</td>
          </tr>
          <tr>
            <td className="p-3 border">MemWrite</td>
            <td className="p-3 border">MEM</td>
            <td className="p-3 border">Enable memory write</td>
          </tr>
          <tr>
            <td className="p-3 border">MemtoReg</td>
            <td className="p-3 border">WB</td>
            <td className="p-3 border">Select write data source</td>
          </tr>
          <tr>
            <td className="p-3 border">RegWrite</td>
            <td className="p-3 border">WB</td>
            <td className="p-3 border">Enable register write</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pipeline Execution Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example: Execute ADD R3, R1, R2

Clock  1        2          3         4          5
----------------------------------------------------
IF:    Fetch    -          -         -          -
       ADD

ID:    -        Decode     -         -          -
                Read R1,R2

EX:    -        -          R1 + R2   -          -
                           -> ALU

MEM:   -        -          -         Pass       -
                                     through

WB:    -        -          -         -          Write
                                                to R3

Pipeline State at Clock 3:
+--------+--------+--------+--------+--------+
|   IF   |   ID   |   EX   |  MEM   |   WB   |
+--------+--------+--------+--------+--------+
|  I4    |  I3    |  ADD   |  I1    |  I0    |
+--------+--------+--------+--------+--------+
            ^        ^
            |        +-- ADD in Execute stage
            +----------- Next instruction being decoded`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Classic RISC pipeline has 5 stages: IF, ID, EX, MEM, WB</li>
        <li>IF fetches instruction from memory using PC</li>
        <li>ID decodes instruction and reads register operands</li>
        <li>EX performs ALU operations and calculates addresses</li>
        <li>MEM accesses data memory for loads and stores</li>
        <li>WB writes results back to register file</li>
        <li>Pipeline registers between stages hold intermediate results</li>
        <li>Control signals generated in ID flow through subsequent stages</li>
        <li>Each instruction takes 5 cycles (latency) but throughput is 1 per cycle</li>
        <li>Different instructions use different subsets of the datapath</li>
      </ul>
    </div>
  </div>
);

export default PipelineStages;
