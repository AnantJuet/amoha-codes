import React from 'react';

const CPUStructure: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      CPU Structure and Function
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Central Processing Unit (CPU) is the brain of a computer system. It is responsible for
      executing instructions, performing calculations, and controlling all other components. Understanding
      the CPU structure and its functions is fundamental to computer organization and architecture.
    </p>

    <h2 className="text-3xl font-bold mt-8">CPU Structure Overview</h2>
    <p className="leading-relaxed">
      The CPU consists of several key components that work together to execute instructions and
      process data. The main structural components include the Arithmetic Logic Unit (ALU),
      Control Unit (CU), and Registers.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`CPU Structure Diagram:

+------------------------------------------------------------------+
|                         CPU (Processor)                          |
|                                                                  |
|  +-------------------+              +------------------------+   |
|  |   Control Unit    |              |    Register Set        |   |
|  |                   |              |                        |   |
|  | +---------------+ |              | +--------+ +--------+  |   |
|  | |Instruction    | |              | |   PC   | |   IR   |  |   |
|  | |Decoder        | |              | +--------+ +--------+  |   |
|  | +---------------+ |              |                        |   |
|  |                   |              | +--------+ +--------+  |   |
|  | +---------------+ |              | |  MAR   | |   MBR  |  |   |
|  | |Timing &       | |              | +--------+ +--------+  |   |
|  | |Control Logic  | |              |                        |   |
|  | +---------------+ |              | +--------+ +--------+  |   |
|  |                   |              | |   AC   | |  GPRs  |  |   |
|  +-------------------+              | +--------+ +--------+  |   |
|           |                         +------------------------+   |
|           v                                    |                 |
|  +-------------------+                         |                 |
|  | Arithmetic Logic  |<------------------------+                 |
|  |   Unit (ALU)      |                                          |
|  |                   |                                          |
|  | +---------------+ |                                          |
|  | | Arithmetic    | |                                          |
|  | | Circuits      | |                                          |
|  | +---------------+ |                                          |
|  |                   |                                          |
|  | +---------------+ |                                          |
|  | | Logic         | |                                          |
|  | | Circuits      | |                                          |
|  | +---------------+ |                                          |
|  |                   |                                          |
|  | +---------------+ |                                          |
|  | | Status Flags  | |                                          |
|  | +---------------+ |                                          |
|  +-------------------+                                          |
|                                                                  |
+------------------------------------------------------------------+
                    |                    ^
                    v                    |
            +---------------+    +---------------+
            |  System Bus   |--->|    Memory     |
            +---------------+    +---------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Major Components of CPU</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Arithmetic Logic Unit (ALU)</h3>
    <p className="leading-relaxed">
      The ALU is responsible for performing all arithmetic and logical operations within the CPU.
      It takes operands from registers, performs the specified operation, and stores the result
      back in a register or memory.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Arithmetic Operations:</strong> Addition, subtraction, multiplication, division</li>
      <li><strong>Logical Operations:</strong> AND, OR, NOT, XOR, NAND, NOR</li>
      <li><strong>Shift Operations:</strong> Left shift, right shift, rotate</li>
      <li><strong>Comparison Operations:</strong> Greater than, less than, equal to</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">2. Control Unit (CU)</h3>
    <p className="leading-relaxed">
      The Control Unit is the commander of the CPU. It directs the operation of the processor by
      sending timing and control signals to all components. It does not process data itself but
      controls the flow of data and instructions.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Instruction Fetching:</strong> Retrieves instructions from memory</li>
      <li><strong>Instruction Decoding:</strong> Interprets the operation to be performed</li>
      <li><strong>Execution Control:</strong> Coordinates ALU, registers, and memory operations</li>
      <li><strong>Timing Signals:</strong> Generates clock signals for synchronization</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">3. Registers</h3>
    <p className="leading-relaxed">
      Registers are small, high-speed storage locations within the CPU. They hold data,
      addresses, and control information needed during instruction execution.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Register</th>
            <th className="p-3 border">Full Name</th>
            <th className="p-3 border">Function</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">PC</td>
            <td className="p-3 border">Program Counter</td>
            <td className="p-3 border">Holds the address of the next instruction to be fetched</td>
          </tr>
          <tr>
            <td className="p-3 border">IR</td>
            <td className="p-3 border">Instruction Register</td>
            <td className="p-3 border">Holds the current instruction being executed</td>
          </tr>
          <tr>
            <td className="p-3 border">MAR</td>
            <td className="p-3 border">Memory Address Register</td>
            <td className="p-3 border">Holds the address of memory location to be accessed</td>
          </tr>
          <tr>
            <td className="p-3 border">MBR/MDR</td>
            <td className="p-3 border">Memory Buffer/Data Register</td>
            <td className="p-3 border">Holds data being transferred to/from memory</td>
          </tr>
          <tr>
            <td className="p-3 border">AC</td>
            <td className="p-3 border">Accumulator</td>
            <td className="p-3 border">Holds results of ALU operations</td>
          </tr>
          <tr>
            <td className="p-3 border">GPRs</td>
            <td className="p-3 border">General Purpose Registers</td>
            <td className="p-3 border">Store temporary data during computation</td>
          </tr>
          <tr>
            <td className="p-3 border">SP</td>
            <td className="p-3 border">Stack Pointer</td>
            <td className="p-3 border">Points to the top of the stack in memory</td>
          </tr>
          <tr>
            <td className="p-3 border">PSW/FLAGS</td>
            <td className="p-3 border">Program Status Word</td>
            <td className="p-3 border">Contains status flags (Zero, Carry, Overflow, etc.)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">CPU Functions</h2>
    <p className="leading-relaxed">
      The CPU performs four main functions in a repetitive cycle known as the instruction cycle:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`CPU Functional Cycle:

    +--------+       +--------+       +---------+       +-------+
    | FETCH  | ----> | DECODE | ----> | EXECUTE | ----> | STORE |
    +--------+       +--------+       +---------+       +-------+
         ^                                                   |
         |                                                   |
         +---------------------------------------------------+

1. FETCH:
   - PC contains address of next instruction
   - Instruction is read from memory to MBR
   - Instruction is transferred to IR
   - PC is incremented to point to next instruction

2. DECODE:
   - Control Unit examines the opcode in IR
   - Determines the type of operation
   - Identifies source and destination operands
   - Generates necessary control signals

3. EXECUTE:
   - ALU performs the required operation
   - May involve: arithmetic, logic, data transfer, control
   - Results are stored in registers or memory
   - Status flags are updated accordingly

4. STORE (Write Back):
   - Results are written to destination register or memory
   - CPU prepares for next instruction cycle`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Internal CPU Organization</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Internal Bus Structure:

                    Internal CPU Bus
    =====================================================
         |          |           |          |
         v          v           v          v
    +--------+  +--------+  +--------+  +--------+
    |   PC   |  |   IR   |  |  MAR   |  |  MBR   |
    +--------+  +--------+  +--------+  +--------+
         |          |           |          |
    =====================================================
         |          |           |
         v          v           v
    +--------+  +--------+  +--------+
    |   AC   |  |  R0-Rn |  |   SP   |
    +--------+  +--------+  +--------+
         |          |           |
    =====================================================
                    |
                    v
             +-------------+
             |     ALU     |
             +-------------+
                    |
    =====================================================
                    |
                    v
             +-------------+
             | Control Unit|
             +-------------+

Data Flow Paths:
- Register to Register via internal bus
- Register to ALU and back
- Register to Memory via MAR/MBR
- Instruction flow through IR to Control Unit`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Status Flags in CPU</h2>
    <p className="leading-relaxed">
      The CPU maintains several status flags that reflect the result of operations. These flags
      are stored in the Program Status Word (PSW) or FLAGS register.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Flag</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Set When</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Z</td>
            <td className="p-3 border">Zero Flag</td>
            <td className="p-3 border">Result of operation is zero</td>
          </tr>
          <tr>
            <td className="p-3 border">C</td>
            <td className="p-3 border">Carry Flag</td>
            <td className="p-3 border">Carry out from MSB in arithmetic operations</td>
          </tr>
          <tr>
            <td className="p-3 border">S/N</td>
            <td className="p-3 border">Sign/Negative Flag</td>
            <td className="p-3 border">Result is negative (MSB is 1)</td>
          </tr>
          <tr>
            <td className="p-3 border">V/O</td>
            <td className="p-3 border">Overflow Flag</td>
            <td className="p-3 border">Signed overflow has occurred</td>
          </tr>
          <tr>
            <td className="p-3 border">P</td>
            <td className="p-3 border">Parity Flag</td>
            <td className="p-3 border">Result has even number of 1s</td>
          </tr>
          <tr>
            <td className="p-3 border">I</td>
            <td className="p-3 border">Interrupt Flag</td>
            <td className="p-3 border">Interrupts are enabled/disabled</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Path in CPU</h2>
    <p className="leading-relaxed">
      The data path defines how data flows between CPU components during instruction execution.
      A typical data path for an ALU operation is shown below:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Data Path Example: ADD R1, R2, R3 (R1 = R2 + R3)

Step 1: Fetch Instruction
   Memory[PC] --> MBR --> IR
   PC = PC + 1

Step 2: Decode Instruction
   IR decoded by Control Unit
   Identify: Operation = ADD, Source = R2, R3, Dest = R1

Step 3: Execute
   R2 --> ALU Input A
   R3 --> ALU Input B
   ALU performs addition
   Result --> R1

Data Path Diagram:
                +-------+
                |  R2   |----+
                +-------+    |
                             v
                         +-------+
                         | ALU   |----> Result
                         +-------+
                             ^
                +-------+    |
                |  R3   |----+
                +-------+

                    |
                    v
                +-------+
                |  R1   |
                +-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CPU Performance Factors</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Clock Speed:</strong> Higher frequency means more operations per second</li>
      <li><strong>Word Size:</strong> Number of bits processed in one cycle (32-bit, 64-bit)</li>
      <li><strong>Number of Registers:</strong> More registers reduce memory accesses</li>
      <li><strong>Cache Size:</strong> Larger cache improves memory access speed</li>
      <li><strong>Pipelining:</strong> Overlapping instruction execution stages</li>
      <li><strong>Number of Cores:</strong> Multiple cores enable parallel processing</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Example: Simple CPU Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example: Execute LOAD R1, 1000 (Load value from memory address 1000 into R1)

Initial State:
  PC = 200       (Address of LOAD instruction)
  Memory[200] = LOAD R1, 1000
  Memory[1000] = 42

Execution Steps:

Clock Cycle 1 (Fetch):
  MAR = PC = 200
  Read Memory[200]
  MBR = LOAD R1, 1000
  IR = MBR
  PC = 201

Clock Cycle 2 (Decode):
  Control Unit decodes IR
  Operation: LOAD (Memory Read)
  Destination: R1
  Address: 1000

Clock Cycle 3 (Execute - Address Calculation):
  MAR = 1000

Clock Cycle 4 (Execute - Memory Read):
  Read Memory[1000]
  MBR = 42

Clock Cycle 5 (Write Back):
  R1 = MBR = 42

Final State:
  R1 = 42
  PC = 201 (Ready for next instruction)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>The CPU consists of ALU, Control Unit, and Registers as main components</li>
        <li>The ALU performs arithmetic and logical operations</li>
        <li>The Control Unit fetches, decodes instructions and generates control signals</li>
        <li>Registers provide fast temporary storage within the CPU</li>
        <li>The CPU executes instructions through the Fetch-Decode-Execute cycle</li>
        <li>Status flags indicate the results of operations (Zero, Carry, Overflow, etc.)</li>
        <li>CPU performance depends on clock speed, word size, cache, and architecture</li>
      </ul>
    </div>
  </div>
);

export default CPUStructure;
