import React from 'react';

const InstructionCycle: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Instruction Cycle
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Instruction Cycle (also called the Fetch-Decode-Execute cycle) is the basic
      operational process of a computer. It is the sequence of steps the CPU performs
      to process each machine instruction. This cycle repeats continuously as long as
      the computer is running, processing one instruction at a time.
    </p>

    <h2 className="text-3xl font-bold mt-8">Overview of Instruction Cycle</h2>
    <p className="leading-relaxed">
      The instruction cycle consists of a series of phases that the CPU goes through
      for each instruction. The main phases are Fetch, Decode, Execute, and optionally
      Memory Access and Write Back.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Basic Instruction Cycle:

    +-------+       +--------+       +---------+
    | FETCH | ----> | DECODE | ----> | EXECUTE |
    +-------+       +--------+       +---------+
        ^                                 |
        |                                 |
        +---------------------------------+
              (Repeat for next instruction)

Extended Instruction Cycle (5-Stage):

    +-------+     +--------+     +---------+     +--------+     +----------+
    | FETCH | --> | DECODE | --> | EXECUTE | --> | MEMORY | --> | WRITEBACK|
    +-------+     +--------+     +---------+     +--------+     +----------+
        ^                                                            |
        |                                                            |
        +------------------------------------------------------------+

IF: Instruction Fetch
ID: Instruction Decode
EX: Execute
MEM: Memory Access
WB: Write Back`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Phases of Instruction Cycle</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Fetch Phase (IF)</h3>
    <p className="leading-relaxed">
      The fetch phase retrieves the next instruction from memory. The Program Counter (PC)
      contains the address of the instruction to be fetched. After fetching, the PC is
      incremented to point to the next instruction.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Fetch Phase Operations:

Step 1: Send address to memory
   MAR <- PC           ; Memory Address Register gets PC value

Step 2: Read memory
   MBR <- Memory[MAR]  ; Read instruction from memory

Step 3: Update PC
   PC <- PC + 1        ; Increment PC (or + instruction size)

Step 4: Transfer to IR
   IR <- MBR           ; Instruction Register gets the instruction

Timing Diagram:
Clock |  1  |  2  |  3  |  4  |
------|-----|-----|-----|-----|
MAR   | <PC |     |     |     |
Memory|     | Read|     |     |
MBR   |     |     | <M  |     |
IR    |     |     |     | <MBR|
PC    |     |     |     | +1  |

Register Transfer Notation:
   T0: MAR <- PC
   T1: MBR <- Memory[MAR], PC <- PC + 1
   T2: IR <- MBR`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Decode Phase (ID)</h3>
    <p className="leading-relaxed">
      The decode phase interprets the instruction in the Instruction Register. The control
      unit examines the opcode to determine what operation to perform and identifies the
      operands involved.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Decode Phase Operations:

Step 1: Extract opcode
   Opcode <- IR[opcode bits]  ; Extract operation code

Step 2: Decode opcode
   Control signals generated based on opcode

Step 3: Identify operands
   Source/Destination registers identified
   Addressing mode determined

Step 4: Read registers (if register operands)
   A <- Registers[Rs]  ; Read source register 1
   B <- Registers[Rt]  ; Read source register 2

Example Instruction: ADD R1, R2, R3

Decode Results:
   Opcode: ADD (00100)
   Destination: R1
   Source 1: R2
   Source 2: R3
   Operation: Arithmetic Addition

Control Signals Generated:
   - ALU operation: Addition
   - Write to R1 enabled
   - Read from R2, R3 enabled`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Execute Phase (EX)</h3>
    <p className="leading-relaxed">
      The execute phase performs the actual operation specified by the instruction.
      This may involve arithmetic/logic operations, address calculations, or branch
      condition evaluation.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Execute Phase Operations:

Depending on instruction type:

1. Arithmetic/Logic Operation:
   ALU_Output <- A op B
   Example: ALU_Output <- R2 + R3

2. Memory Address Calculation:
   ALU_Output <- Base + Offset
   Example: ALU_Output <- R2 + 100 (for LOAD R1, 100(R2))

3. Branch Condition:
   if (condition) then
      PC <- PC + offset
   Example: if (Z=1) then PC <- PC + 50

4. Jump:
   PC <- target_address

Execute Examples:
+-------------+----------------------------------+
| Instruction |        Execute Operation         |
+-------------+----------------------------------+
| ADD R1,R2,R3| ALU_Out = R2 + R3               |
| SUB R1,R2,R3| ALU_Out = R2 - R3               |
| AND R1,R2,R3| ALU_Out = R2 AND R3             |
| LOAD R1,100(R2)| ALU_Out = R2 + 100 (address) |
| BEQ +50     | if Z=1: PC = PC + 50            |
+-------------+----------------------------------+`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Memory Access Phase (MEM)</h3>
    <p className="leading-relaxed">
      This phase accesses memory for load and store instructions. For load instructions,
      data is read from memory; for store instructions, data is written to memory.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory Access Phase Operations:

For LOAD instruction:
   MAR <- ALU_Output    ; Set memory address
   MBR <- Memory[MAR]   ; Read from memory
   LMD <- MBR           ; Load Memory Data register

For STORE instruction:
   MAR <- ALU_Output    ; Set memory address
   MBR <- Register[Rt]  ; Data to be stored
   Memory[MAR] <- MBR   ; Write to memory

For Non-memory instructions:
   This phase is skipped or passes data through

Example - LOAD R1, 100(R2):
   Address calculated in Execute: ALU_Out = R2 + 100
   Memory phase:
      MAR <- ALU_Out (e.g., 1000)
      MBR <- Memory[1000]
      LMD <- MBR (e.g., 42)

Example - STORE R3, 200(R4):
   Address calculated in Execute: ALU_Out = R4 + 200
   Memory phase:
      MAR <- ALU_Out (e.g., 2000)
      MBR <- R3
      Memory[2000] <- MBR`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">5. Write Back Phase (WB)</h3>
    <p className="leading-relaxed">
      The write back phase stores the result of the operation into the destination
      register. This is the final phase that updates the register file.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Write Back Phase Operations:

For ALU operations:
   Registers[Rd] <- ALU_Output

For LOAD operations:
   Registers[Rd] <- LMD

For STORE operations:
   No write back (memory already written)

For Branch operations:
   No register write back (PC already updated)

Examples:
+------------------+------------------------+
|   Instruction    |     Write Back         |
+------------------+------------------------+
| ADD R1, R2, R3   | R1 <- ALU_Output       |
| LOAD R1, 100(R2) | R1 <- LMD              |
| STORE R3, 200(R4)| (no write back)        |
| BEQ label        | (no write back)        |
+------------------+------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Instruction Cycle Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example: Execute ADD R1, R2, R3 (R1 = R2 + R3)

Initial State:
   PC = 100
   R2 = 25
   R3 = 17
   Memory[100] = ADD R1, R2, R3

Phase 1: FETCH
   T0: MAR <- PC = 100
   T1: MBR <- Memory[100] = "ADD R1, R2, R3"
       PC <- PC + 1 = 101
   T2: IR <- MBR = "ADD R1, R2, R3"

Phase 2: DECODE
   T3: Opcode extracted = ADD
       Rd = R1, Rs = R2, Rt = R3
       A <- R2 = 25
       B <- R3 = 17

Phase 3: EXECUTE
   T4: ALU_Output <- A + B = 25 + 17 = 42
       Flags updated (Z=0, C=0, S=0)

Phase 4: MEMORY
   T5: (Not needed for ADD - pass through)

Phase 5: WRITE BACK
   T6: R1 <- ALU_Output = 42

Final State:
   PC = 101
   R1 = 42
   R2 = 25 (unchanged)
   R3 = 17 (unchanged)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Instruction Cycle State Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`State Diagram of Instruction Cycle:

                     +--------+
              +----->| START  |
              |      +--------+
              |          |
              |          v
              |      +--------+
              |      | FETCH  |
              |      +--------+
              |          |
              |          v
              |      +--------+
              |      | DECODE |
              |      +--------+
              |          |
              |          v
              |   +------+------+
              |   |             |
              |   v             v
              | +-------+  +--------+
              | | ALU   |  | MEMORY |
              | | EXEC  |  | ACCESS |
              | +-------+  +--------+
              |   |             |
              |   +------+------+
              |          |
              |          v
              |      +--------+
              |      |WRITEBACK|
              |      +--------+
              |          |
              +----------+

States:
- FETCH: Get instruction from memory
- DECODE: Interpret instruction
- EXECUTE: ALU operations or address calculation
- MEMORY: Load/Store access
- WRITEBACK: Update destination register`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Timing of Instruction Cycle</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Clock Cycle</th>
            <th className="p-3 border">Phase</th>
            <th className="p-3 border">Operations</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">T0</td>
            <td className="p-3 border">Fetch</td>
            <td className="p-3 border">MAR &lt;- PC</td>
          </tr>
          <tr>
            <td className="p-3 border">T1</td>
            <td className="p-3 border">Fetch</td>
            <td className="p-3 border">MBR &lt;- M[MAR], PC &lt;- PC+1</td>
          </tr>
          <tr>
            <td className="p-3 border">T2</td>
            <td className="p-3 border">Fetch/Decode</td>
            <td className="p-3 border">IR &lt;- MBR, Decode opcode</td>
          </tr>
          <tr>
            <td className="p-3 border">T3</td>
            <td className="p-3 border">Decode</td>
            <td className="p-3 border">Read registers, generate signals</td>
          </tr>
          <tr>
            <td className="p-3 border">T4</td>
            <td className="p-3 border">Execute</td>
            <td className="p-3 border">ALU operation</td>
          </tr>
          <tr>
            <td className="p-3 border">T5</td>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">Memory read/write (if needed)</td>
          </tr>
          <tr>
            <td className="p-3 border">T6</td>
            <td className="p-3 border">Write Back</td>
            <td className="p-3 border">Write result to register</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Interrupt Handling in Instruction Cycle</h2>
    <p className="leading-relaxed">
      Interrupts are external or internal events that require immediate attention.
      The CPU checks for interrupts after completing each instruction cycle.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Instruction Cycle with Interrupt Check:

    +-------+     +--------+     +---------+     +----------+
    | FETCH | --> | DECODE | --> | EXECUTE | --> | INTERRUPT|
    +-------+     +--------+     +---------+     |  CHECK   |
        ^                                        +----------+
        |                                             |
        |       +--------------+                      |
        |       | INTERRUPT    |<------ Yes ----------+
        |       | SERVICE      |                      |
        |       +--------------+                      |
        |              |                              |
        +<-------------+                    No -------+

Interrupt Service Routine:
1. Save current state (PC, registers)
2. Load ISR address into PC
3. Execute interrupt handler
4. Restore state
5. Resume normal execution

Interrupt Cycle:
T0: MBR <- PC           ; Save PC
T1: MAR <- SP, SP--     ; Get stack address
T2: Memory[MAR] <- MBR  ; Push PC to stack
T3: PC <- ISR_Address   ; Jump to handler`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CPI - Cycles Per Instruction</h2>
    <p className="leading-relaxed">
      CPI (Cycles Per Instruction) measures how many clock cycles an instruction takes
      on average. Different instructions may take different numbers of cycles.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Instruction Type</th>
            <th className="p-3 border">Typical CPI</th>
            <th className="p-3 border">Reason</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">ALU (register)</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">No memory access</td>
          </tr>
          <tr>
            <td className="p-3 border">Load</td>
            <td className="p-3 border">2-3</td>
            <td className="p-3 border">Memory read</td>
          </tr>
          <tr>
            <td className="p-3 border">Store</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Memory write</td>
          </tr>
          <tr>
            <td className="p-3 border">Branch (taken)</td>
            <td className="p-3 border">2-3</td>
            <td className="p-3 border">Pipeline flush</td>
          </tr>
          <tr>
            <td className="p-3 border">Multiply</td>
            <td className="p-3 border">3-10</td>
            <td className="p-3 border">Complex ALU</td>
          </tr>
          <tr>
            <td className="p-3 border">Divide</td>
            <td className="p-3 border">10-40</td>
            <td className="p-3 border">Iterative algorithm</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Instruction cycle is the fundamental operation of the CPU</li>
        <li>Basic cycle: Fetch - Decode - Execute</li>
        <li>Extended cycle adds Memory and Write Back phases</li>
        <li>Fetch reads instruction from memory using PC</li>
        <li>Decode interprets opcode and prepares operands</li>
        <li>Execute performs ALU operations or address calculations</li>
        <li>Memory phase handles load/store operations</li>
        <li>Write Back updates destination registers</li>
        <li>Interrupts are checked after each instruction cycle</li>
        <li>CPI varies by instruction type</li>
      </ul>
    </div>
  </div>
);

export default InstructionCycle;
