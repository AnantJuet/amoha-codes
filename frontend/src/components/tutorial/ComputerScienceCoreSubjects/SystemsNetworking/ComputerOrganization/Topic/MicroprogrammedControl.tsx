import React from 'react';

const MicroprogrammedControl: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Microprogrammed Control Unit
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Microprogrammed Control Unit uses a control memory (microprogram memory) that stores
      sequences of microinstructions. Each machine instruction is implemented by a microprogram
      - a sequence of microinstructions that generate the required control signals. This approach
      offers flexibility and easier modification compared to hardwired control, making it
      popular in CISC processors with complex instruction sets.
    </p>

    <h2 className="text-3xl font-bold mt-8">Concept of Microprogramming</h2>
    <p className="leading-relaxed">
      In microprogramming, each machine instruction is broken down into a series of simpler
      operations called microoperations. These microoperations are encoded as microinstructions
      stored in a special memory called Control Memory (CM) or Control Store. When an instruction
      is executed, the control unit reads the corresponding microprogram from control memory
      and executes each microinstruction in sequence.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Microprogramming Hierarchy:

    User Program
         |
         v
    +-------------+
    | Machine     |     Assembly Level
    | Instructions|     ADD R1, R2
    +-------------+
         |
         | Each instruction is implemented by
         v
    +-------------+
    | Microprogram|     Microprogram Level
    | (sequence of|     (stored in control memory)
    | micro-      |
    | instructions|
    +-------------+
         |
         | Each microinstruction produces
         v
    +-------------+
    | Control     |     Control Signal Level
    | Signals     |     (activates hardware)
    +-------------+

Example:
Machine Instruction: ADD R1, R2

Microprogram for ADD:
  Micro-instruction 1: MAR <- PC
  Micro-instruction 2: MBR <- M[MAR], PC++
  Micro-instruction 3: IR <- MBR
  Micro-instruction 4: A <- R1
  Micro-instruction 5: B <- R2
  Micro-instruction 6: ALU_OUT <- A + B
  Micro-instruction 7: R1 <- ALU_OUT`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Microprogrammed Control Unit Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Microprogrammed Control Unit Block Diagram:

    +------------------+
    |   Instruction    |
    |    Register      |
    |  +------------+  |
    |  |   Opcode   |  |
    |  +-----+------+  |
    +--------|--------+
             |
             v
    +--------+--------+
    |  Mapping Logic  |     Maps opcode to starting
    |  (Address Gen)  |     address in control memory
    +--------+--------+
             |
             v
    +--------+--------+
    |    Control      |<---- Microprogram Counter
    | Address Register|      (MicroPC)
    |     (CAR)       |
    +--------+--------+
             |
             v Address
    +------------------+
    |                  |
    |   Control Memory |
    |  (Microprogram   |
    |     Store)       |
    |                  |
    |  +------------+  |
    |  | Micro-     |  |
    |  | instruction|  |
    |  +------------+  |
    |  | Micro-     |  |
    |  | instruction|  |
    |  +------------+  |
    |  |    ...     |  |
    |  +------------+  |
    +--------+---------+
             |
             v
    +--------+---------+
    |  Microinstruction|
    |    Register      |
    |      (MIR)       |
    +--------+---------+
             |
    +--------+--------+--------+
    |                 |        |
    v                 v        v
Control          Next Address  Branch
Signals          Select        Condition
    |
    v
 Datapath`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Components of Microprogrammed Control</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Control Memory (Control Store)</h3>
    <p className="leading-relaxed">
      A special high-speed ROM or RAM that stores all microprograms. Each location contains
      one microinstruction. The memory is addressed by the Control Address Register.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Control Memory Organization:

Address  | Microinstruction Content
---------+------------------------------------------
  0x00   | Fetch microinstruction 1 (MAR <- PC)
  0x01   | Fetch microinstruction 2 (MBR <- M[MAR])
  0x02   | Fetch microinstruction 3 (IR <- MBR)
  0x03   | (Jump to instruction-specific routine)
  ...    |
  0x10   | ADD micro 1 (A <- R[rs])
  0x11   | ADD micro 2 (B <- R[rt])
  0x12   | ADD micro 3 (ALU_OUT <- A + B)
  0x13   | ADD micro 4 (R[rd] <- ALU_OUT, goto 0x00)
  ...    |
  0x20   | SUB micro 1 (A <- R[rs])
  0x21   | SUB micro 2 (B <- R[rt])
  ...    |
  0x30   | LOAD micro 1
  ...    |

Typical sizes:
- 256 to 4096 microinstructions
- 32 to 128 bits per microinstruction`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Control Address Register (CAR)</h3>
    <p className="leading-relaxed">
      Holds the address of the next microinstruction to be executed. Also called
      Microprogram Counter (MPC). Updated after each microinstruction execution.
    </p>

    <h3 className="text-2xl font-semibold mt-6">3. Microinstruction Register (MIR)</h3>
    <p className="leading-relaxed">
      Holds the current microinstruction being executed. Its outputs directly drive
      the control signals or are decoded to produce them.
    </p>

    <h3 className="text-2xl font-semibold mt-6">4. Sequencer (Next Address Logic)</h3>
    <p className="leading-relaxed">
      Determines the next microinstruction address. Can increment CAR, load a branch
      address, or use mapping logic to jump to instruction-specific routines.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Next Address Generation:

                         +------------------+
                         | Branch Address   |
                         | (from MIR)       |
                         +--------+---------+
                                  |
    +------------------+          |
    | CAR + 1          |          |
    | (Increment)      |----------+
    +------------------+          |
                                  |
    +------------------+          |     +--------+
    | Mapping Logic    |----------+--->|  MUX   |---> Next CAR
    | (Opcode -> Addr) |          |    +--------+
    +------------------+          |         ^
                                  |         |
    +------------------+          |    +---------+
    | Subroutine Stack |----------+    | Select  |
    | (Return Address) |               +---------+
    +------------------+                    ^
                                            |
                                    +-------+-------+
                                    | Condition     |
                                    | Evaluation    |
                                    +---------------+

Select conditions:
00 - Increment (next sequential)
01 - Branch (unconditional jump)
10 - Conditional branch
11 - Return from subroutine`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Microinstruction Execution Cycle</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Microinstruction Cycle:

    +------------------+
    | 1. Address       |
    |    Generation    |     CAR provides address
    +--------+---------+
             |
             v
    +--------+---------+
    | 2. Fetch Micro-  |
    |    instruction   |     Read from Control Memory
    +--------+---------+
             |
             v
    +--------+---------+
    | 3. Load MIR      |     Store in MIR
    +--------+---------+
             |
             v
    +--------+---------+
    | 4. Decode &      |
    |    Execute       |     Generate control signals
    +--------+---------+
             |
             v
    +--------+---------+
    | 5. Update CAR    |     Determine next address
    +--------+---------+
             |
             +-----------> Loop to step 1

Timing:
- Each microinstruction takes 1 microcycle
- Microcycle << Machine cycle
- One machine instruction = Multiple microcycles`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Microprogram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Microprogram for Machine Instruction Execution:

Common Fetch Routine (all instructions start here):
Address  | Control Word           | Next Addr | Comment
---------|------------------------|-----------|------------------
  0x00   | MAR<-PC                | +1        | Start fetch
  0x01   | Read, PC<-PC+1         | +1        | Memory read
  0x02   | IR<-MBR                | +1        | Load IR
  0x03   | DISPATCH               | Map(IR)   | Branch to routine

ADD R1, R2, R3 Routine:
  0x10   | A<-R[rs]               | +1        | Load operand 1
  0x11   | B<-R[rt]               | +1        | Load operand 2
  0x12   | C<-A+B                 | +1        | ALU add
  0x13   | R[rd]<-C               | 0x00      | Store result

LOAD R1, offset(R2) Routine:
  0x20   | A<-R[rs]               | +1        | Base register
  0x21   | B<-Sign_ext(offset)    | +1        | Sign extend offset
  0x22   | MAR<-A+B               | +1        | Compute address
  0x23   | Read                   | +1        | Memory read
  0x24   | R[rt]<-MBR             | 0x00      | Load to register

STORE R1, offset(R2) Routine:
  0x30   | A<-R[rs]               | +1        | Base register
  0x31   | B<-Sign_ext(offset)    | +1        | Sign extend
  0x32   | MAR<-A+B               | +1        | Compute address
  0x33   | MBR<-R[rt]             | +1        | Data to write
  0x34   | Write                  | 0x00      | Memory write

BRANCH (if zero) Routine:
  0x40   | If(Z=0) goto 0x00      | +1        | Check condition
  0x41   | PC<-PC+Sign_ext(offset)| 0x00      | Branch taken`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Address Mapping Techniques</h2>
    <p className="leading-relaxed">
      Mapping converts the machine instruction opcode to the starting address
      of its microprogram in control memory.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Opcode to Microprogram Address Mapping:

Method 1: Direct Mapping
- Opcode directly forms part of the address
- Starting address = Opcode * stride

  Opcode (4 bits) -> Starting Address
  0000 (ADD)      -> 0x10  (0000 || 0000)
  0001 (SUB)      -> 0x20  (0001 || 0000)
  0010 (LOAD)     -> 0x30  (0010 || 0000)

  Stride = 16 microinstructions per routine

Method 2: Mapping ROM
- Use a separate ROM to map opcodes to addresses
- More flexible, allows non-uniform allocation

  +--------+     +---------+     +-------------+
  | Opcode |---->| Mapping |---->| Start Addr  |
  +--------+     |   ROM   |     +-------------+
                 +---------+

  Opcode  | Mapping ROM Output
  --------|-------------------
   0000   |  0x10 (ADD start)
   0001   |  0x18 (SUB start)
   0010   |  0x25 (LOAD start)
   0011   |  0x35 (STORE start)

Method 3: Mapping PLA
- Programmable Logic Array for mapping
- Can include condition flags in mapping`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Flexible - easy to modify microprograms</td>
            <td className="p-3 border">Slower than hardwired (memory access)</td>
          </tr>
          <tr>
            <td className="p-3 border">Supports complex instruction sets</td>
            <td className="p-3 border">Requires control memory (extra cost)</td>
          </tr>
          <tr>
            <td className="p-3 border">Bug fixes via microcode update</td>
            <td className="p-3 border">Microprogram development complexity</td>
          </tr>
          <tr>
            <td className="p-3 border">Systematic design methodology</td>
            <td className="p-3 border">Additional hardware for sequencing</td>
          </tr>
          <tr>
            <td className="p-3 border">Can emulate other architectures</td>
            <td className="p-3 border">Higher power consumption</td>
          </tr>
          <tr>
            <td className="p-3 border">Simplifies control unit design</td>
            <td className="p-3 border">Performance overhead per instruction</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Historical Context and Modern Usage</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Evolution of Microprogrammed Control:

1951 - Maurice Wilkes proposes microprogramming
1964 - IBM System/360 uses microprogramming extensively
1970s - Standard approach for mainframes and minicomputers
1980s - x86 CISC processors heavily microprogrammed
1990s - RISC processors prefer hardwired control
2000s+ - Hybrid approaches common

Modern Usage:
- x86/x64 processors: Microcode for complex CISC instructions
- Microcode updates: Patch CPU bugs (e.g., Spectre/Meltdown)
- Embedded systems: Some use microprogrammed control
- FPGA implementations: Soft processors with microcode

Intel Microcode Update:
- Can update microcode via BIOS or OS
- Fixes CPU errata without hardware changes
- Example: Security patches for speculation bugs`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Microprogrammed control uses stored microinstructions for control signals</li>
        <li>Control memory stores microprograms for each machine instruction</li>
        <li>Each machine instruction executes multiple microinstructions</li>
        <li>Key components: Control Memory, CAR, MIR, Sequencer</li>
        <li>More flexible than hardwired - microprograms can be updated</li>
        <li>Slower due to control memory access overhead</li>
        <li>Well-suited for CISC processors with complex instructions</li>
        <li>Modern CPUs use microcode for complex x86 instructions</li>
      </ul>
    </div>
  </div>
);

export default MicroprogrammedControl;
