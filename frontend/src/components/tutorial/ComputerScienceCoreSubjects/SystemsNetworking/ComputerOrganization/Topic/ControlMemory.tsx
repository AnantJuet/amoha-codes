import React from 'react';

const ControlMemory: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Control Memory
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Control Memory, also known as Control Store or Microprogram Memory, is a specialized
      memory unit that stores microinstructions (microprograms) used by the control unit
      to generate control signals. It serves as the heart of a microprogrammed control unit,
      containing all the microcode needed to implement machine instructions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Purpose of Control Memory</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Store Microprograms:</strong> Contains all microinstructions for machine instruction execution</li>
      <li><strong>Control Signal Source:</strong> Provides the encoded or direct control signals</li>
      <li><strong>Instruction Implementation:</strong> Defines how each machine instruction works</li>
      <li><strong>Flexibility:</strong> Allows modification of CPU behavior through microcode updates</li>
      <li><strong>Emulation:</strong> Enables one processor to emulate another's instruction set</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Control Memory Organization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Control Memory Structure:

                        Control Address Register (CAR)
                               (n bits)
                                  |
                                  v
        Address  +--------------------------------+
        0x000 -->|  Microinstruction 0            | (w bits wide)
        0x001 -->|  Microinstruction 1            |
        0x002 -->|  Microinstruction 2            |
        0x003 -->|  Microinstruction 3            |
            .    |           .                    |
            .    |           .                    |
            .    |           .                    |
        0x0FF -->|  Microinstruction 255          |
            .    |           .                    |
        0x3FF -->|  Microinstruction 1023         |
                 +--------------------------------+
                                  |
                                  v
                     Microinstruction Register (MIR)
                               (w bits)
                                  |
                   +--------------+--------------+
                   |              |              |
                   v              v              v
              Control        Condition       Address
              Signals          Test           Field

Typical Specifications:
- Address width (n): 8-12 bits (256-4096 locations)
- Word width (w): 20-128 bits per microinstruction
- Total size: 8 KB - 128 KB typical`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Control Memory</h2>

    <h3 className="text-2xl font-semibold mt-6">1. ROM-Based Control Memory</h3>
    <p className="leading-relaxed">
      Read-Only Memory stores microprograms permanently. Contents are fixed during
      manufacturing and cannot be changed during operation.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`ROM Control Memory:

+------------------+
|    ROM Array     |
| (Mask-programmed)|
+------------------+
        |
        | Fixed content
        v
+------------------+
| Microinstructions|
| (Permanent)      |
+------------------+

Types of ROM:
- Mask ROM: Programmed during manufacturing
- PROM: One-time programmable
- EPROM: UV-erasable, reprogrammable
- EEPROM: Electrically erasable

Characteristics:
- Non-volatile (retains data without power)
- Fast access (no write circuitry needed)
- Lower cost for mass production
- Cannot fix bugs without chip replacement (for Mask ROM)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Writable Control Store (WCS)</h3>
    <p className="leading-relaxed">
      Some systems use RAM for control memory, allowing microprograms to be loaded
      and modified during operation. Common in development and flexible systems.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Writable Control Store:

+------------------+
|    RAM Array     |
| (Read/Write)     |
+------------------+
      |       ^
      |       | Load microcode
      v       | from external
+------------------+
| Microinstructions|
| (Modifiable)     |
+------------------+

Loading Process:
1. Power-on: WCS is empty
2. Bootstrap loader reads microcode from disk/ROM
3. Microcode loaded into WCS
4. CPU ready for normal operation

Advantages:
- Bug fixes via microcode update
- Custom instruction sets possible
- Development and debugging flexibility
- Emulation of different architectures

Disadvantages:
- Volatile (needs reload after power loss)
- Higher cost (RAM vs ROM)
- Security concerns (microcode modification)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Control Memory Access Mechanism</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Control Memory Access Cycle:

Clock Cycle 1: Address Setup
+-------------+     +----------------+
| CAR         |---->| Address Decoder|
| (address)   |     | of Control Mem |
+-------------+     +----------------+

Clock Cycle 2: Memory Access
+----------------+
| Control Memory |
|  +---------+   |
|  |  Row    |   |
|  | Decoder |   |
|  +---------+   |
|       |        |
|       v        |
|  +----------+  |
|  | Memory   |  |
|  | Array    |  |
|  +----------+  |
|       |        |
|       v        |
|  +----------+  |
|  | Output   |  |
|  | Buffers  |  |
|  +----------+  |
+-------+--------+
        |
        v
+----------------+
|      MIR       |
| (loaded micro- |
| instruction)   |
+----------------+

Timing:
- Address setup: ~5-10 ns
- Memory access: ~10-30 ns
- MIR load: ~2-5 ns
- Total microcycle: ~20-50 ns`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Control Address Register (CAR)</h2>
    <p className="leading-relaxed">
      The CAR holds the address of the current microinstruction being executed.
      It functions like a program counter for microprograms and can be loaded
      from multiple sources.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`CAR Input Sources:

                +----------+
CAR + 1 ------->|          |
                |   MUX    |-----> CAR
Branch Addr --->|          |
                |  (Select)|
Map Output ---->|          |
                |          |
Stack Top ----->|          |
                +----------+
                     ^
                     |
              Sequence Control
              from current
              microinstruction

CAR Update Logic:

Select | Source        | Operation
-------|---------------|------------------
  00   | Incrementer   | CAR <- CAR + 1
  01   | Address Field | CAR <- Branch Address
  10   | Mapping Logic | CAR <- Map(Opcode)
  11   | Return Stack  | CAR <- Stack.pop()

Implementation:
+--------+     +--------+     +--------+
|  CAR   |---->|  +1    |---->|  MUX   |---->| CAR |
|        |     |Adder   |     |        |     |(new)|
+--------+     +--------+     +--------+     +-----+
                    ^              ^
                    |              |
              Branch Addr    Select Lines`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Microinstruction Register (MIR)</h2>
    <p className="leading-relaxed">
      The MIR holds the current microinstruction fetched from control memory.
      Its outputs drive the control signals directly or through decoders.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`MIR Organization:

Control Memory Output
         |
         v
+--------+--------+--------+--------+
| Control| Condi- | Seq    | Branch |
| Field  | tion   | Control| Address|
+--------+--------+--------+--------+
    |        |        |        |
    |        v        v        v
    |   +--------+ +--------+ +--------+
    |   |Cond    | |Seq     | |Address |
    |   |Test    | |Control | |to CAR  |
    |   |Logic   | |Logic   | |MUX     |
    |   +--------+ +--------+ +--------+
    |
    v (depending on encoding)
+-------+-------+-------+
|       |       |       |
v       v       v       v
Direct  Decoder Decoder Decoder
Signals (ALU)   (Src)   (Dest)
    |       |       |       |
    +-------+-------+-------+
            |
            v
    Control Signals to Datapath`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Address Mapping Logic</h2>
    <p className="leading-relaxed">
      The mapping logic converts machine instruction opcodes to starting addresses
      of corresponding microprograms in control memory.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Address Mapping Techniques:

Method 1: Direct Mapping (Opcode as address)
+--------+        +------------------+
| Opcode |------->| CAR (with bits   |
| 4 bits |        | appended/shifted)|
+--------+        +------------------+

Example: Opcode 0101 -> Address 01010000 (shifted left 4)
Each instruction gets 16 locations (2^4)

Method 2: Mapping ROM
+--------+     +-----------+     +--------+
| Opcode |---->| Mapping   |---->| Start  |
|        |     | ROM       |     | Address|
+--------+     | (lookup)  |     +--------+
               +-----------+

Mapping ROM Contents:
Opcode | Start Address
-------|---------------
 0000  |  0x010 (ADD)
 0001  |  0x020 (SUB)
 0010  |  0x030 (LOAD)
 0011  |  0x045 (STORE)
 0100  |  0x060 (BRANCH)
  ...  |   ...

Method 3: PLA Mapping
+--------+     +-----------+     +--------+
| Opcode |---->|    PLA    |---->| Start  |
| + Mode |     | (custom   |     | Address|
| bits   |     |  mapping) |     +--------+
+--------+     +-----------+

Can include addressing mode in mapping`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Subroutine Support</h2>
    <p className="leading-relaxed">
      Control memory can support microsubroutines, allowing common microcode
      sequences to be shared among multiple microprograms.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Microsubroutine Mechanism:

                  +---------------+
                  | Return Address|
                  |     Stack     |
                  | +---+---+---+ |
                  | |   |   |   | |
                  | +---+---+---+ |
                  +-------+-------+
                          |
              +-----------+-----------+
              |                       |
           Push                     Pop
      (on CALL)                (on RETURN)

CALL Operation:
1. Push (CAR + 1) onto stack
2. CAR <- Subroutine address

RETURN Operation:
1. Pop address from stack
2. CAR <- Popped address

Example Usage:
Address | Microinstruction      | Comment
--------|----------------------|------------------
 0x100  | CALL 0x200           | Call fetch routine
 0x101  | (instruction decode) | Continues here after
  ...   |  ...                 |
 0x200  | MAR <- PC            | Fetch subroutine
 0x201  | MBR <- M[MAR]        |
 0x202  | PC <- PC + 1         |
 0x203  | IR <- MBR            |
 0x204  | RETURN               | Return to caller

Benefits:
- Code reuse (fetch routine used by all instructions)
- Smaller control memory
- Easier maintenance`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Control Memory Design Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Sample Control Memory Layout:

Address Range | Content                  | Purpose
--------------|--------------------------|------------------
0x000 - 0x00F | Fetch microprogram       | Common to all
0x010 - 0x01F | ADD microprogram         | Arithmetic
0x020 - 0x02F | SUB microprogram         | Arithmetic
0x030 - 0x03F | AND microprogram         | Logic
0x040 - 0x04F | OR microprogram          | Logic
0x050 - 0x05F | LOAD microprogram        | Data transfer
0x060 - 0x06F | STORE microprogram       | Data transfer
0x070 - 0x07F | BRANCH microprogram      | Control flow
0x080 - 0x08F | CALL microprogram        | Subroutine
0x090 - 0x09F | RETURN microprogram      | Subroutine
0x0A0 - 0x0FF | Reserved/Expansion       |
0x100 - 0x1FF | Interrupt handlers       | Exception handling
0x200 - 0x2FF | Common subroutines       | Shared code
0x300 - 0x3FF | Extended instructions    | Optional

Memory Size Calculation:
- 1024 locations (10-bit address)
- 48-bit microinstructions
- Total: 1024 x 48 = 49,152 bits = 6 KB`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Control Memory vs Main Memory</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Control Memory</th>
            <th className="p-3 border">Main Memory</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Purpose</td>
            <td className="p-3 border">Store microprograms</td>
            <td className="p-3 border">Store programs and data</td>
          </tr>
          <tr>
            <td className="p-3 border">Size</td>
            <td className="p-3 border">Small (KB)</td>
            <td className="p-3 border">Large (GB)</td>
          </tr>
          <tr>
            <td className="p-3 border">Word Width</td>
            <td className="p-3 border">Wide (32-128 bits)</td>
            <td className="p-3 border">Standard (32-64 bits)</td>
          </tr>
          <tr>
            <td className="p-3 border">Access Speed</td>
            <td className="p-3 border">Very fast (10-30 ns)</td>
            <td className="p-3 border">Slower (50-100 ns)</td>
          </tr>
          <tr>
            <td className="p-3 border">Technology</td>
            <td className="p-3 border">ROM/Fast SRAM</td>
            <td className="p-3 border">DRAM</td>
          </tr>
          <tr>
            <td className="p-3 border">Visibility</td>
            <td className="p-3 border">Hidden from programmer</td>
            <td className="p-3 border">Visible to programmer</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Control memory stores microprograms that implement machine instructions</li>
        <li>Can be ROM (fixed) or RAM (writable control store)</li>
        <li>CAR holds address of current microinstruction</li>
        <li>MIR holds the microinstruction being executed</li>
        <li>Mapping logic converts opcodes to microprogram start addresses</li>
        <li>Subroutine support allows code reuse in microprograms</li>
        <li>Faster and smaller than main memory</li>
        <li>Word width depends on microinstruction format (horizontal vs vertical)</li>
      </ul>
    </div>
  </div>
);

export default ControlMemory;
