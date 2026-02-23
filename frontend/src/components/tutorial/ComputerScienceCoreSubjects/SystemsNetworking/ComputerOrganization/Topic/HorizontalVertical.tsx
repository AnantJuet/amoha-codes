import React from 'react';

const HorizontalVertical: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Horizontal vs Vertical Microprogramming
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Microprogramming can be implemented using two fundamental approaches: horizontal
      and vertical microprogramming. These represent opposite ends of a design spectrum,
      each with distinct trade-offs between microinstruction width, control memory size,
      execution speed, and flexibility. Most practical designs use a hybrid approach
      combining elements of both.
    </p>

    <h2 className="text-3xl font-bold mt-8">Horizontal Microprogramming</h2>
    <p className="leading-relaxed">
      In horizontal microprogramming, each bit in the microinstruction directly controls
      one signal or one micro-operation. There is minimal or no encoding of the control
      field. This results in wide microinstructions but allows maximum parallelism and
      fast execution.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Horizontal Microinstruction Structure:

          Direct Control Signals (1 bit each)
+---+---+---+---+---+---+---+---+---+---+---+---+...+---+---+
|PC |MAR|MBR|IR |A  |B  |C  |ALU|Mem|Mem|Reg|Reg|   |Seq|Addr|
|out|in |in |in |in |in |in |op |Rd |Wr |Rd |Wr |   |   |    |
+---+---+---+---+---+---+---+---+---+---+---+---+...+---+---+
  1   1   1   1   1   1   1   4   1   1   1   1       2   12
                              bits                        bits

Total width: 50-200 bits typical

Example 64-bit Horizontal Microinstruction:
Bits 63-32: Control signals (32 individual controls)
Bits 31-16: Register select and ALU operation
Bits 15-12: Sequence control
Bits 11-0:  Branch address

Characteristics:
- One bit activates one control line
- All signals generated in parallel
- No decoding required for most signals
- Wide memory words needed`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Horizontal Microprogramming Example</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example: 48-bit Horizontal Microinstruction

Bit Position | Signal Name    | Function
-------------|----------------|------------------
    47       | PC_out         | Output PC to bus
    46       | MAR_in         | Load MAR from bus
    45       | MBR_in         | Load MBR from bus
    44       | MBR_out        | Output MBR to bus
    43       | IR_in          | Load IR from bus
    42       | Memory_read    | Enable memory read
    41       | Memory_write   | Enable memory write
    40       | A_in           | Load A register
    39       | B_in           | Load B register
    38       | ALU_out        | Output ALU result
    37       | R0_out         | Output register R0
    36       | R0_in          | Load register R0
    35       | R1_out         | Output register R1
    34       | R1_in          | Load register R1
  33-30      | ALU_op         | ALU operation code
  29-28      | Shift_op       | Shifter operation
  27-24      | Condition      | Branch condition
  23-22      | Sequence       | Sequencing control
  21-12      | Branch_addr    | Branch address (10 bits)
  11-0       | Constant       | Immediate value

Microinstruction for MAR <- PC:
PC_out=1, MAR_in=1, all others=0 (for control bits)
Sequence=00 (next sequential)

Binary: 110000...0000 00 00000...0000`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Vertical Microprogramming</h2>
    <p className="leading-relaxed">
      In vertical microprogramming, control signals are highly encoded. Multiple
      signals share encoded fields, requiring decoders to generate actual control
      signals. This results in narrow microinstructions but limits parallelism
      and requires decoding time.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Vertical Microinstruction Structure:

        Encoded Fields (multiple signals per field)
+----------+----------+----------+----------+
| Op Code  | Source   | Dest     | Address  |
| (4 bits) | (4 bits) | (4 bits) | (8 bits) |
+----------+----------+----------+----------+
   16 ops    16 srcs    16 dests

Total width: 16-32 bits typical

Each field needs a decoder:
                   +----------+
  Op Code (4) ---->| 4-to-16  |----> 16 operation signals
                   | Decoder  |
                   +----------+

                   +----------+
  Source (4) ----->| 4-to-16  |----> 16 source enables
                   | Decoder  |
                   +----------+

                   +----------+
  Dest (4) ------->| 4-to-16  |----> 16 destination enables
                   | Decoder  |
                   +----------+

Characteristics:
- Multiple signals encoded per field
- Requires decoders (added delay)
- Limited parallelism (one source, one dest per cycle)
- Narrow memory words`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Vertical Microprogramming Example</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example: 20-bit Vertical Microinstruction

+--------+--------+--------+--------+
|  Op    | Source |  Dest  |Address |
| 4 bits | 4 bits | 4 bits | 8 bits |
+--------+--------+--------+--------+

Op Code Encoding:
0000 = NOP          1000 = AND
0001 = ADD          1001 = OR
0010 = SUB          1010 = XOR
0011 = INC          1011 = NOT
0100 = DEC          1100 = SHL
0101 = LOAD         1101 = SHR
0110 = STORE        1110 = BRANCH
0111 = MOVE         1111 = CALL

Source Encoding:
0000 = None         1000 = R0
0001 = PC           1001 = R1
0010 = MAR          1010 = R2
0011 = MBR          1011 = R3
0100 = IR           1100 = SP
0101 = A            1101 = Flags
0110 = B            1110 = Constant
0111 = ALU_out      1111 = Memory

Dest Encoding: (Similar to Source)

Microinstruction for MAR <- PC:
Op=0111 (MOVE), Source=0001 (PC), Dest=0010 (MAR)
Binary: 0111 0001 0010 00000000`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detailed Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Horizontal</th>
            <th className="p-3 border">Vertical</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Microinstruction Width</td>
            <td className="p-3 border">Wide (50-200 bits)</td>
            <td className="p-3 border">Narrow (16-32 bits)</td>
          </tr>
          <tr>
            <td className="p-3 border">Control Memory Size</td>
            <td className="p-3 border">Larger (wide words)</td>
            <td className="p-3 border">Smaller (narrow words)</td>
          </tr>
          <tr>
            <td className="p-3 border">Parallelism</td>
            <td className="p-3 border">Maximum (any combination)</td>
            <td className="p-3 border">Limited (encoded fields)</td>
          </tr>
          <tr>
            <td className="p-3 border">Decoding Required</td>
            <td className="p-3 border">Minimal</td>
            <td className="p-3 border">Extensive</td>
          </tr>
          <tr>
            <td className="p-3 border">Execution Speed</td>
            <td className="p-3 border">Faster (no decode delay)</td>
            <td className="p-3 border">Slower (decode delay)</td>
          </tr>
          <tr>
            <td className="p-3 border">Microprogram Length</td>
            <td className="p-3 border">Shorter (more per cycle)</td>
            <td className="p-3 border">Longer (less per cycle)</td>
          </tr>
          <tr>
            <td className="p-3 border">Resemblance To</td>
            <td className="p-3 border">Hardwired control</td>
            <td className="p-3 border">Machine instructions</td>
          </tr>
          <tr>
            <td className="p-3 border">Programming Ease</td>
            <td className="p-3 border">More complex</td>
            <td className="p-3 border">Easier (like assembly)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parallelism Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example: Implementing ADD R1, R2, R3

Horizontal (1 microinstruction can do more):
Micro 1: R2_out, A_in            ; A <- R2
Micro 2: R3_out, B_in, ALU_add   ; B <- R3, set ALU to add
Micro 3: ALU_out, R1_in          ; R1 <- ALU result
Total: 3 microinstructions

OR (with more parallelism):
Micro 1: R2_out, A_in, R3_out_B, B_in  ; Load both operands
Micro 2: ALU_add, ALU_out, R1_in       ; Add and store
Total: 2 microinstructions

Vertical (limited to one transfer per cycle):
Micro 1: MOVE, R2, A      ; A <- R2
Micro 2: MOVE, R3, B      ; B <- R3
Micro 3: ADD, A, B        ; Temp <- A + B
Micro 4: MOVE, Temp, R1   ; R1 <- Temp
Total: 4 microinstructions

Performance Impact:
If microcycle = 50ns:
Horizontal: 2 x 50ns = 100ns
Vertical:   4 x 50ns = 200ns
Horizontal is 2x faster for this operation!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Cost Analysis</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Control Memory Size Comparison:

Assumptions:
- 100 machine instructions
- Average 5 microinstructions per machine instruction
- Total: 500 microinstructions

Horizontal (64-bit microinstructions):
Memory = 500 x 64 bits = 32,000 bits = 4 KB

Vertical (20-bit microinstructions):
But needs more microinstructions (less parallelism)
Assume 8 microinstructions average per machine instruction
Memory = 800 x 20 bits = 16,000 bits = 2 KB

Comparison:
Horizontal: 4 KB control memory
Vertical:   2 KB control memory
Vertical uses 50% less memory

But consider total execution time:
Horizontal: 500 microcycles for all instructions
Vertical:   800 microcycles for all instructions
Horizontal is 37.5% faster overall`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Mixed/Hybrid Microprogramming</h2>
    <p className="leading-relaxed">
      Most practical microprogrammed control units use a hybrid approach, combining
      the advantages of both horizontal and vertical formats.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Hybrid Microinstruction Format:

+--------+--------+--------+---+---+---+--------+
| Source | Dest   | ALU Op |MRd|MWr|RWr|Address |
| (enc)  | (enc)  | (enc)  |dir|dir|dir| (addr) |
+--------+--------+--------+---+---+---+--------+
  4 bits   4 bits   4 bits  1   1   1   12 bits
                           bit bit bit

Total: 28 bits

Design Strategy:
1. Encode mutually exclusive signals (sources, destinations)
2. Use direct bits for:
   - Frequently used signals (MemRead, MemWrite)
   - Signals that need precise timing
   - Signals that often combine with others

Example Hybrid Design:
+------------------+-------------------+
| Encoded Fields   | Direct Fields     |
+------------------+-------------------+
| Bus A source     | Memory Read       |
| Bus B source     | Memory Write      |
| Destination      | Register Write    |
| ALU operation    | PC Increment      |
| Shifter op       | IR Load           |
+------------------+-------------------+

Benefits:
- Reasonable width (32-48 bits)
- Good parallelism for common operations
- Efficient memory usage
- Acceptable speed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Nano-programming</h2>
    <p className="leading-relaxed">
      Nano-programming is an extension that adds another level of indirection.
      Microinstructions point to nano-instructions in a separate nano-memory,
      which contain the actual control signals.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Nano-programming Architecture:

    +-------------------+
    | Control Memory    |  Vertical microinstructions
    | (Microprogram)    |  (narrow, many entries)
    +--------+----------+
             |
             v Nano-address
    +--------+----------+
    | Nano-memory       |  Horizontal nano-instructions
    | (Nano-program)    |  (wide, fewer entries)
    +--------+----------+
             |
             v Control signals
    +-------------------+
    |     Datapath      |
    +-------------------+

Advantage:
- Many microinstructions may generate same control signals
- Share common nano-instructions
- Reduces total memory

Example:
Multiple instructions need: MAR <- PC, Read Memory
Instead of duplicating in each microprogram:
- Microinstruction contains nano-address
- All point to same nano-instruction

Memory Savings:
Without nano-programming: 1000 x 64 bits = 64 Kbits
With nano-programming:
- Micro-memory: 1000 x 10 bits = 10 Kbits
- Nano-memory: 256 x 64 bits = 16 Kbits
- Total: 26 Kbits (59% reduction)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Design Guidelines</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Choosing Between Horizontal and Vertical:

Use More Horizontal When:
- Speed is critical
- Control memory cost is acceptable
- Instruction set requires high parallelism
- Hardware resources are abundant
- Example: High-performance CISC processors

Use More Vertical When:
- Memory cost is primary concern
- Moderate speed acceptable
- Simpler instruction set
- Easier microprogram development needed
- Example: Embedded systems, cost-sensitive designs

Use Hybrid When:
- Balance of speed and cost needed
- Some operations need parallelism
- Most designs fall here
- Example: Most commercial microprogrammed CPUs

Analysis Steps:
1. Identify all control signals needed
2. Group mutually exclusive signals
3. Identify frequently parallel operations
4. Balance encoded vs direct fields
5. Estimate memory and performance
6. Iterate design for optimization`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Horizontal: wide microinstructions, direct signal control, maximum parallelism</li>
        <li>Vertical: narrow microinstructions, encoded fields, limited parallelism</li>
        <li>Horizontal is faster but requires more control memory</li>
        <li>Vertical uses less memory but needs more microinstructions</li>
        <li>Hybrid approaches combine benefits of both</li>
        <li>Nano-programming adds another level to save memory</li>
        <li>Choice depends on performance, cost, and complexity requirements</li>
        <li>Most practical designs use hybrid encoding</li>
      </ul>
    </div>
  </div>
);

export default HorizontalVertical;
