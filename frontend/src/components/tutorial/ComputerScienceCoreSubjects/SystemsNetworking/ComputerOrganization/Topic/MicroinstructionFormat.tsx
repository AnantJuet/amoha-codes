import React from 'react';

const MicroinstructionFormat: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Microinstruction Format
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The microinstruction format defines the structure and encoding of microinstructions
      stored in control memory. It specifies how control signals, condition tests, and
      next address information are packed into each microinstruction word. The format
      design significantly impacts control unit performance, flexibility, and memory
      requirements.
    </p>

    <h2 className="text-3xl font-bold mt-8">Microinstruction Structure</h2>
    <p className="leading-relaxed">
      A microinstruction typically consists of three main fields: control field (specifies
      microoperations), condition field (for conditional branching), and address field
      (determines the next microinstruction address).
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Basic Microinstruction Format:

+------------------+---------------+------------------+
|  Control Field   | Condition     |  Address Field   |
|  (Microoperations)|    Field     |  (Next Address)  |
+------------------+---------------+------------------+
    |                    |                |
    |                    |                +--> Where to go next
    |                    +--> What to test
    +--> What operations to perform

Typical Field Widths:
- Control Field: 20-100 bits (depends on encoding)
- Condition Field: 2-8 bits
- Address Field: 8-16 bits
- Total: 32-128 bits per microinstruction

Example 32-bit Microinstruction:
+--------+--------+--------+--------+
| Bits   | 31-16  | 15-12  | 11-0   |
+--------+--------+--------+--------+
| Field  |Control |Cond/Seq| Address|
+--------+--------+--------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Control Field Organization</h2>
    <p className="leading-relaxed">
      The control field specifies which microoperations to perform. There are three main
      approaches to encoding control signals in this field.
    </p>

    <h3 className="text-2xl font-semibold mt-6">1. Direct (Horizontal) Encoding</h3>
    <p className="leading-relaxed">
      Each bit in the control field directly corresponds to one control signal.
      Maximum parallelism but requires wide microinstructions.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Direct Encoding (One bit per signal):

Control Field (16 signals = 16 bits):
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
|PC |MAR|MBR|IR |A  |B  |ALU|Reg|Mem|Mem|ALU|ALU|...|...|...|...|
|out|in |in |in |in |in |en |Wr |Rd |Wr |Op |Op |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |[1]|[0]|   |   |   |   |
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
| 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+

This example: PCout=1, MARin=1 --> MAR <- PC

Advantages:
- Direct signal generation (no decoding delay)
- Maximum parallelism (any combination possible)

Disadvantages:
- Very wide microinstructions
- Many bits may be 0 (unused)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Encoded (Vertical) Encoding</h3>
    <p className="leading-relaxed">
      Control signals are grouped and encoded. A decoder converts the encoded value
      to actual control signals. Reduces microinstruction width.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Encoded Format:

Instead of 16 individual bits, use encoded fields:

+--------+--------+--------+--------+
| Source | Dest   | ALU Op | Memory |
| (3 bit)| (3 bit)| (3 bit)| (2 bit)|
+--------+--------+--------+--------+

Source field (3 bits -> 8 sources):
  000 = None      100 = MBR
  001 = PC        101 = IR
  010 = MAR       110 = ALU_OUT
  011 = Register  111 = Constant

Dest field (3 bits -> 8 destinations):
  000 = None      100 = MBR
  001 = PC        101 = IR
  010 = MAR       110 = ALU_A
  011 = Register  111 = ALU_B

ALU Op field (3 bits -> 8 operations):
  000 = Pass A    100 = AND
  001 = Add       101 = OR
  010 = Sub       110 = XOR
  011 = Increment 111 = Complement

Memory field (2 bits):
  00 = None       10 = Write
  01 = Read       11 = Reserved

Total: 11 bits vs 16 bits direct

Example: MAR <- PC
Source = 001 (PC), Dest = 010 (MAR), ALU = 000, Mem = 00
Microinstruction: 001 010 000 00 = 0x240`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Mixed Encoding</h3>
    <p className="leading-relaxed">
      Combines direct and encoded approaches. Some frequently used or parallel signals
      are direct, while others are encoded. Most practical approach.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Mixed Encoding Format:

+-------+-------+-------+-------+-----+-----+-----+
| Bus A | Bus B | Dest  | ALU   |MemRd|MemWr|RegWr|
| (enc) | (enc) | (enc) | (enc) |(dir)|(dir)|(dir)|
+-------+-------+-------+-------+-----+-----+-----+
  3 bit   3 bit   3 bit   4 bit  1 bit 1 bit 1 bit
                                   = 16 bits total

Encoded fields (require decoder):
- Bus A Source: 8 options
- Bus B Source: 8 options
- Destination: 8 options
- ALU Operation: 16 options

Direct fields (no decoder):
- MemRead: 0 or 1
- MemWrite: 0 or 1
- RegWrite: 0 or 1

Why direct for memory/register writes?
- Frequently used signals
- Need precise timing control
- No decoding delay for critical paths`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Condition Field</h2>
    <p className="leading-relaxed">
      The condition field specifies what condition to test for conditional branching.
      Combined with the address field, it determines the next microinstruction.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Condition Field Encoding:

+----+-----------------------+
|Code| Condition             |
+----+-----------------------+
| 00 | Unconditional (always)|
| 01 | Zero flag (Z=1)       |
| 10 | Negative flag (N=1)   |
| 11 | Carry flag (C=1)      |
+----+-----------------------+

Extended condition encoding (3 bits):
+-----+-------------------------+
| Code| Condition               |
+-----+-------------------------+
| 000 | Unconditional           |
| 001 | Zero (Z=1)              |
| 010 | Not Zero (Z=0)          |
| 011 | Negative (N=1)          |
| 100 | Positive (N=0)          |
| 101 | Carry (C=1)             |
| 110 | Overflow (V=1)          |
| 111 | IR bit test             |
+-----+-------------------------+

Usage in sequencing:
If condition TRUE:
    CAR <- Address field
Else:
    CAR <- CAR + 1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Address Field and Sequencing</h2>
    <p className="leading-relaxed">
      The address field, combined with sequencing control bits, determines the
      next microinstruction to execute.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Next Address Control:

Sequencing Field (2 bits) + Address Field (10 bits):

+-----+------------------------------------------+
| Seq | Next Address Selection                   |
+-----+------------------------------------------+
| 00  | Increment: CAR <- CAR + 1                |
| 01  | Branch: CAR <- Address field             |
| 10  | Map: CAR <- Mapping(Opcode)              |
| 11  | Return: CAR <- Stack.pop()               |
+-----+------------------------------------------+

Complete Address Section:
+------+------+------------+
| Seq  | Cond | Address    |
| 2 bit| 2 bit| 10 bit     |
+------+------+------------+

Examples:

1. Sequential execution:
   Seq=00, Cond=XX, Addr=XXXX
   Next: CAR <- CAR + 1

2. Unconditional branch:
   Seq=01, Cond=00, Addr=0x100
   Next: CAR <- 0x100

3. Conditional branch:
   Seq=01, Cond=01, Addr=0x050
   If Z=1: CAR <- 0x050
   Else: CAR <- CAR + 1

4. Opcode mapping:
   Seq=10, Cond=XX, Addr=XXXX
   Next: CAR <- Map(IR[opcode])

5. Subroutine return:
   Seq=11, Cond=XX, Addr=XXXX
   Next: CAR <- Return_Stack.pop()`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Microinstruction Format Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example: 36-bit Microinstruction Format

+--------+--------+--------+--------+--------+--------+
| Bits   | 35-28  | 27-24  | 23-20  | 19-16  | 15-12  |
+--------+--------+--------+--------+--------+--------+
| Field  | A Bus  | B Bus  | Dest   | ALU Op | Shifter|
+--------+--------+--------+--------+--------+--------+
    8 bits   4 bits   4 bits   4 bits   4 bits

+--------+--------+--------+--------+
| Bits   | 11-8   | 7-4    | 3-0    |
+--------+--------+--------+--------+
| Field  | Memory | Seq/Cnd| Address|
|        | Ctrl   |        | (upper)|
+--------+--------+--------+--------+
    4 bits   4 bits   4 bits

+--------+
| Bits   |
+--------+
| Address|
| (lower)|
+--------+
    8 bits --> Total Address: 12 bits

Field Specifications:

A Bus Source (8 bits - direct):
  Bit 7: PC out    Bit 3: SP out
  Bit 6: MAR out   Bit 2: R0 out
  Bit 5: MBR out   Bit 1: R1 out
  Bit 4: IR out    Bit 0: Constant out

B Bus Source (4 bits - encoded):
  0000: None    1000: R0
  0001: PC      1001: R1
  0010: MAR     1010: R2
  0011: MBR     1011: R3
  0100: SP      1100-1111: Reserved

Destination (4 bits - encoded):
  0000: None    1000: R0
  0001: PC      1001: R1
  0010: MAR     1010: R2
  0011: MBR     1011: R3
  0100: SP      1100-1111: Reserved

ALU Operation (4 bits):
  0000: Pass A    1000: NOT A
  0001: A + B     1001: A AND B
  0010: A - B     1010: A OR B
  0011: A + 1     1011: A XOR B
  0100: A - 1     1100-1111: Reserved

Shifter (4 bits):
  0000: No shift  0100: ROL
  0001: SHL       0101: ROR
  0010: SHR       0110-1111: Reserved
  0011: ASR

Memory Control (4 bits):
  Bit 3: Read enable
  Bit 2: Write enable
  Bit 1: Byte/Word
  Bit 0: Reserved

Seq/Condition (4 bits):
  Bits 3-2: Sequence control
  Bits 1-0: Condition select

Address: 12 bits (4096 locations)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Microinstruction Encoding Trade-offs</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Horizontal (Direct)</th>
            <th className="p-3 border">Vertical (Encoded)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Width</td>
            <td className="p-3 border">Wide (50-200 bits)</td>
            <td className="p-3 border">Narrow (16-40 bits)</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Faster (no decoding)</td>
            <td className="p-3 border">Slower (decoder delay)</td>
          </tr>
          <tr>
            <td className="p-3 border">Parallelism</td>
            <td className="p-3 border">Maximum</td>
            <td className="p-3 border">Limited by encoding</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Cost</td>
            <td className="p-3 border">Higher</td>
            <td className="p-3 border">Lower</td>
          </tr>
          <tr>
            <td className="p-3 border">Hardware</td>
            <td className="p-3 border">Simple (direct connect)</td>
            <td className="p-3 border">Needs decoders</td>
          </tr>
          <tr>
            <td className="p-3 border">Flexibility</td>
            <td className="p-3 border">Any signal combination</td>
            <td className="p-3 border">Restricted combinations</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Packing Multiple Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Packing Independent Operations in One Microinstruction:

Horizontal Format Advantage:
Can perform multiple independent operations simultaneously

Example: In one microcycle:
- Read register R1 to Bus A
- Read register R2 to Bus B
- Perform ALU addition
- Enable memory read
- Update MAR

Microinstruction:
+-----+-----+-----+-----+-----+
|R1out|R2out|ADD  |MemRd|MARin|
|  1  |  1  |  1  |  1  |  1  |
+-----+-----+-----+-----+-----+

All these happen in parallel!

Vertical Format Limitation:
May need multiple microinstructions for the same effect

Microinstruction 1: Source=R1, Dest=BusA
Microinstruction 2: Source=R2, Dest=BusB
Microinstruction 3: ALUop=ADD, MemRd=1
...

Hybrid Solution:
Group mutually exclusive signals into encoded fields
Keep parallel signals as direct bits

+--------+--------+--------+-----+-----+
| BusASrc| BusBSrc| ALUOp  |MemRd|MARin|
| (enc)  | (enc)  | (enc)  |(dir)|(dir)|
+--------+--------+--------+-----+-----+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Field Mutual Exclusivity</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Identifying Mutually Exclusive Signals:

Signals are mutually exclusive if they cannot be
active simultaneously.

Example: Bus Sources
- Only one source can drive a bus at a time
- PC_out, MAR_out, MBR_out are mutually exclusive
- Can be encoded together

Example: Register Destinations
- Only one destination per bus per cycle
- Encoded into destination field

Non-mutually exclusive (need separate bits):
- MemRead and RegWrite (can happen together)
- ALU_enable and bus transfers

Analysis Table:
+----------+----------+------------------+
| Signal 1 | Signal 2 | Can be together? |
+----------+----------+------------------+
| PC_out   | MAR_out  | No (same bus)    |
| MemRead  | MemWrite | No (conflict)    |
| ALU_add  | RegWrite | Yes (parallel)   |
| Bus1_out | Bus2_out | Yes (diff buses) |
+----------+----------+------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Microinstruction format defines structure of control memory words</li>
        <li>Three main fields: control, condition, and address</li>
        <li>Direct encoding: one bit per signal, wide but fast</li>
        <li>Encoded format: signals grouped, narrow but needs decoders</li>
        <li>Mixed encoding balances width and flexibility</li>
        <li>Mutually exclusive signals can share encoded fields</li>
        <li>Parallel operations need direct bits or multiple fields</li>
        <li>Format design affects performance, cost, and flexibility</li>
      </ul>
    </div>
  </div>
);

export default MicroinstructionFormat;
